import { useContext, useState } from "react";
import { Container } from "./style";
import { EmailContext, IMails } from "../../contexts/EmailContext";

const Inbox = () => {
  const { mails } = useContext(EmailContext);
  const [currentMail, setCurrentMail] = useState<IMails | null>(null);

  const handleNewMail = (elem: IMails) => {
    setCurrentMail({
      toAddr: elem.toAddr,
      text: elem.text,
      rawSize: elem.rawSize,
      headerSubject: elem.headerSubject,
      fromAddr: elem.fromAddr,
      downloadUrl: elem.downloadUrl,
    });
  };

  return (
    <Container>
      <div className="c-inbox">
        <h2 onClick={() => setCurrentMail(null)}>Inbox</h2>
        {mails.length >= 1 &&
          mails.map((elem, index) => (
            <div className="c-inbox__card" key={index}>
              <div
                className="c-inbox__email"
                onClick={() => {
                  handleNewMail(elem);
                }}
              >
                <h3>
                  {elem.headerSubject.length > 30
                    ? `${elem.headerSubject.slice(0, 30)}...`
                    : elem.headerSubject}
                </h3>
                <p>
                  {elem.text.length > 50
                    ? `${elem.text.slice(0, 50)}...`
                    : elem.text}
                </p>
              </div>
            </div>
          ))}
      </div>

      {currentMail == null ? (
        <div className="c-box-email">
          <h1 className="c-box-email__h1_clear"></h1>
          <div className="c-box-email__info">
            <h2 className="c-box-email__h1"> {"<-- "}Selecione um email</h2>
            <div className="c-box-email__container__info">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="c-box-email">
          <h1 className="c-box-email__h1_clear"></h1>
          <div className="c-box-email__info">
            <h2 className="c-box-email__h1">{currentMail.headerSubject}</h2>
            <div className="c-box-email__container__info">
              <p>{currentMail.text}</p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Inbox;
