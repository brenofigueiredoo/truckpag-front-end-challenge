import { Container } from "./style";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useContext, useRef, useEffect, useState } from "react";
import { EmailContext } from "../../contexts/EmailContext";

const BoxGetEmail = () => {
  const { onCreateSession, onGetEmails } = useContext(EmailContext);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(15);

  const session = localStorage.getItem("sessionDropMail");
  const address = localStorage.getItem("addressDropMail");

  const checkNewEmails = () => {
    onGetEmails(session!);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prev) => prev - 1);
      } else {
        setSecondsRemaining(15);
        checkNewEmails();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining]);

  useEffect(() => {
    if (!session) {
      onCreateSession();
    } else {
      onGetEmails(session);
    }
  }, [session]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <Container>
      <div className="c-box-title">
        <p>Your temporary email address</p>
      </div>

      <div className="c-box">
        <input
          ref={inputRef}
          type="text"
          className="c-box__input"
          value={address || ""}
          readOnly={true}
        />
        <button className="c-box__button" onClick={handleCopy}>
          <ContentCopyIcon fontSize="small" />
          Copy
        </button>
      </div>

      <div className="c-box-refresh">
        <h2>Autorefresh in &nbsp;</h2>
        <button className="c-box__button__autorefresh">
          {secondsRemaining}
        </button>
        <button
          className="c-box__button__refresh"
          onClick={() => onGetEmails(session!)}
        >
          <RefreshIcon fontSize="medium" color="action" />
        </button>
        <h2>Refresh</h2>
      </div>
    </Container>
  );
};

export default BoxGetEmail;
