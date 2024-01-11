import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { engine } from 'express-handlebars';
import connectDB from "./config/db/index.js";  
import ArticleRouter from "./routes/ArticleRouter.js";
import route from "./routes/index.js"

const app = express() ;
const port = 3000

connectDB()

//app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// XMLHttpRequest, fetch, axios

//HTTP logger
//app.use(morgan('combined'))

//Template engine

// app.engine('hbs', engine({
//   extname:'.hbs'
// }));
app.set('view engine', 'hbs');
app.set('views', './views');
// app.set('views', path.join(__dirname, 'resources/views'));



// Route
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})