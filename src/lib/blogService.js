import { ID, Databases } from "appwrite";
import authService from "./authService";

import { conf } from "../conf/conf";

class BlogService {
    database;
    constructor() {
        this.database = new Databases(authService.client);
    }
    async createNewBlog({title, slug, content, featuredImage, status, userId}) {
        const user = await authService.getCurrentUser();
        try {
            this.database.createDocument(
                conf.appwriteDatabaseID, 
                conf.appwriteCollectionID, 
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