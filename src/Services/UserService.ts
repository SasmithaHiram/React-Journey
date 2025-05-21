import create from "../Services/HTTP-Service";

export interface User {
  id: number;
  name: string;
}

export default create("/users");
