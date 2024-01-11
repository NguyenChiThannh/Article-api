import ArticleRouter from "./ArticleRouter.js"

function route(app){  
    app.use("/api", ArticleRouter);
}

export default route;