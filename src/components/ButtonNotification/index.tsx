import { Container } from "./style";

const ButtonNotification = () => {
  const handleEnableNotifications = () => {
    if (!("Notification" in window)) {
      alert("Este navegador não suporta notificações na área de trabalho");
    } else if (Notification.permission === "granted") {
      alert("As notificações já estão ativadas");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          alert("Notificações ativadas!");
        }
      });
    }
  };

  return (
    <Container>
      <button onClick={handleEnableNotifications}>Receber notificações</button>
    </Container>
  );
};
export default ButtonNotification;
