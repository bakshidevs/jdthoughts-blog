
import { Client } from "appwrite";
import { conf } from "../conf/conf";

const client = new Client()
  .setEndpoint(conf.appwriteEndpoint)
  .setProject(conf.appwriteProjectID);

export default client;
