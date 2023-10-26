import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface IContextProviderProps {
  children: ReactNode;
}

export interface IMails {
  toAddr: string;
  text: string;
  rawSize: number;
  headerSubject: string;
  fromAddr: string;
  downloadUrl: string;
}

interface IEmailContext {
  onCreateSession: () => void;
  onGetEmails: (sessionId: string) => void;
  mails: IMails[];
  setMails: React.Dispatch<React.SetStateAction<IMails[]>>;
}

export const EmailContext = createContext<IEmailContext>({} as IEmailContext);

export const EmailProvider = ({ children }: IContextProviderProps) => {
  const [mails, setMails] = useState<IMails[]>([]);

  const onCreateSession = () => {
    const query = {
      query: `
        mutation {
          introduceSession {
            id,
            expiresAt,
            addresses {
              id,
              address
            }
          }
        }
      `,
    };

    api
      .post("", query)
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          "sessionDropMail",
          res.data.data.introduceSession.id
        );
        localStorage.setItem(
          "addressDropMail",
          res.data.data.introduceSession.addresses[0].address
        );
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const onGetEmails = (sessionId: string) => {
    const query = `
      query {
        session(id: "${sessionId}") {
          mails {
            rawSize,
            fromAddr,
            toAddr,
            downloadUrl,
            text,
            headerSubject
          }
        }
      }
    `;

    api
      .post("", { query: query })
      .then((res) => {
        console.log(res);

        if (res.data.data.session == null) {
          localStorage.clear();
        } else {
          const newEmails = res.data.data.session.mails;

          if (mails.length <= 0) {
            setMails(newEmails);
          } else {
            const updatedMails = [...mails];

            newEmails.forEach((newEmail: IMails) => {
              if (
                !updatedMails.some(
                  (mail) => mail.downloadUrl === newEmail.downloadUrl
                )
              ) {
                updatedMails.push(newEmail);
              }
            });

            setMails(updatedMails);
          }

          if (Notification.permission === "granted") {
            newEmails.forEach((newEmail: IMails) => {
              if (
                !mails.some((mail) => mail.downloadUrl === newEmail.downloadUrl)
              ) {
                new Notification("Novo Email Recebido", {
                  body: `Você tem um novo email de ${newEmail.fromAddr}`,
                });
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <EmailContext.Provider
      value={{
        onCreateSession,
        onGetEmails,
        mails,
        setMails,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
