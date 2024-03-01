import conf from "@/conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService {
    client = new Client()
    account
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                return this.login({ email, password })
            } else {
                return user
            }
        } catch (err) {
            throw err
        }
    }
    
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (err) {
            throw err
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (err) {
            throw err
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (err) {
            throw err
        }
    }
}

const authService = new AuthService()

export default authService