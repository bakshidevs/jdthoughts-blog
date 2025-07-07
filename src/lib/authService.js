import { Client, Account, ID } from "appwrite";



// importing appwrite client
// import client from "./appwriteClient";
import { conf } from "../conf/conf";

class AuthService {
    client;
    account;
    constructor() {
        this.client = new Client().
            setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    // creating new account/user
    async createAccount({ email, password, name }) {
        try {
            const newAccount = await this.account.create(ID.unique(), email, password, name);
            if (newAccount) {
                await this.login({ email, password })
                return newAccount;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    // logging in returned user
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // getting the current loggedin user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    // logging out of all the active sessions
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}


const authService = new AuthService();

export default authService;