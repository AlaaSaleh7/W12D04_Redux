//create initial state object that contain article with default value empty array 
const initialState={
    articles=[]
}
//Create the following actions and handle them in the reducer 
export const setArticles =(articles)=>{
    return{
        type:"SET_ARTICLES",
        payload:articles
    }
}
export const addArticle=(article)=>{
    return{
        type:"ADD_ARTICLE",
        payload:article
    }
}

export const updateArticle =(article)=>{
    return{
        type:"UPDATE_ARTICLE",
        payload:article
    }
}

export const deleteArticle=(id)=>{
    return{
        type:"DELETE_ARTICLE",
        payload:id
    }
}
//create the reducer using the initial state .
const articleReducer =(state =initialState,{type,payload})=>{
// saves the provided articles in the state store
switch(type){
    case "SET_ARTICLES":
    return  { articles: [...payload] }
// add a new article to the articles state
case "ADD_ARTICLE":
    return{ articles: [...state.articles, payload] }
//update an article in the articles state
case "UPDATE_ARTICLE":
    return { articles: state.articles.map((article) => {
    if (article.id === payload.id) {
         return payload;
            } else {
                 return article;
                    }
         }),
}
//delete the article from the articles state
case "DELETE_ARTICLE":
    return{
        articles: state. articles.filter(
            (article) => article.id !== payload.id,
          ),
    }
    default:
        return state;
}
}

export default articles;
