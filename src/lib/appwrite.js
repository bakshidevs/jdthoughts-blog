import { Account, Databases, Client, ID } from "appwrite";

// importing appwrite config
import { config } from "./conf";

class AuthService {
    client;
    account;
    constructor() {
        this.client = new Client()
            .setEndpoint(config.appwriteEndpoint)
            .setProject(config.appwriteProjectID)

        this.account = new Account(this.client)
    }
    async getCurrentUser() {
        return await this.account.get()
     }
    async login(email, password) { 
        try {
            this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            
        }
     }
    async signup(email, password, name) { 
        try {
           await this.account.create(ID.unique(), email, password, name) 
        } catch (error) {
            
        }
     }
    async logout() { 
        try {
            await this.account.deleteSession("current")
        } catch (error) {
            
        }
     }
}


const authService = new AuthService();

export default authService;