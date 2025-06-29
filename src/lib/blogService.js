import { ID, Databases } from "appwrite";
import authService from "./appwrite";

import { config } from "./conf";

class BlogService {
    database;
    constructor() {
        this.database = new Databases(authService.client);
    }
    async createNewBlog(title, content) {
        const user = await authService.getCurrentUser();
        try {
            this.database.createDocument(
                config.appwriteDatabaseID, 
                config.appwriteCollectionID, 
                ID.unique(), 
                {
                    title,
                    content,
                    authorId: user.$id,
                }
            )
        } catch (error) {

        }
    }
}

const blogService = new BlogService();

export default blogService;