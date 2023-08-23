import httpService from "./HttpService";

export interface User {
  id: number;
  name: string;
}



export default httpService("/users");
