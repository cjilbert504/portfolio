import railsAPI from '../apis/railsAPI';
    
export const fetchBlogs = () => async (dispatch) => {
    const response = await railsAPI.get("/blog_posts");

    dispatch({ type: "FETCH_BLOGS", payload: response.data })
};

export const addBlog = (newBlog, callback) => (dispatch) => {
    const response = railsAPI.post("/blog_posts", { title: newBlog.title, content: newBlog.content })
        .then(() => callback());

    dispatch({ type: "CREATE_BLOG", payload: response })
};