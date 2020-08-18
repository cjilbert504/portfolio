import railsAPI from '../apis/railsAPI';
    
export const fetchBlogs = () => async (dispatch) => {
    const response = await railsAPI.get("/blog_posts");

    dispatch({ type: "FETCH_BLOGS", payload: response.data });
};

// export const addBlog = (newBlog, callback) => async (dispatch) => {
//     const response = await railsAPI.post("/blog_posts", { title: newBlog.title, content: newBlog.content })
//         .then(() => callback())

//     console.log(dispatch({ type: "CREATE_BLOG", payload: response }));
// };

export const addBlog = (newBlog, callback) => async (dispatch) => {
    const response = await fetch("http://localhost:3001/blog_posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: newBlog.title,
            content: newBlog.content
        })
    })
    .then(response => response.json());
    (dispatch({ type: "CREATE_BLOG", payload: response }));
    callback();
};
         

    
