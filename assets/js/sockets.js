import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const upldateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window;
  upldateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
};
