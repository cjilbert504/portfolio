 export default function(state = [], action) {
    switch (action.type) {
    case "FETCH_BLOGS":
            return action.payload;
    case "CREATE_BLOG":
        return [ ...state, action.payload ]
    default:
        return state;
    }
};