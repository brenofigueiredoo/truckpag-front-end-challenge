import BoxGetEmail from "../../components/BoxGetEmail";
import ButtonNotification from "../../components/ButtonNotification";
import Inbox from "../../components/Inbox";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <ButtonNotification />
      <BoxGetEmail />
      <Inbox />
    </Container>
  );
};

export default Home;
