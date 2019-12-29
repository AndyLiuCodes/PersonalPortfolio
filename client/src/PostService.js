import axios from "axios";

const url = 'http://localhost:5000/api/posts/';

class PostService {
    //Get Posts 
    //static means we dont have to instantiate object we can jsut call to use
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                //if what we do is good we called resolve
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    //Create Post
    static insertPost(text){
        return axios.post(url, {
            text
        });
    }

    //Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }

}

export default PostService;