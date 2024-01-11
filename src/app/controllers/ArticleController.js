import ArticleModel from "../models/article.js";
class ArticleController {
    // [GET] /articles
    async index(req, res) {
        try {
            const articles = await ArticleModel.find({});
            res.send(articles);
        } catch (error) {
          res.status(500).send({ error });
        }
    }

    // [POST] /articles
    async post(req, res) {
        const article = new ArticleModel(req.body);
       
        try {
          await article.save();
          res.send(article);
        } catch (error) {
          res.status(500).send(error);
        }
    }

    // [POST] /articles
    async post(req, res) {
        const article = new ArticleModel(req.body);
       
        try {
          await article.save();
          res.send(article);
        } catch (error) {
          res.status(500).send(error);
        }
    }

    // [GET] /articles/:id
    async findOneById(req, res){
        try {
          const article = await ArticleModel.findOne({ _id: req.params.id });
          res.send(article);
        } catch (error) {
          res.status(500).send({ error });
        }
    }

    // [PATCH] /articles/:id
    async patch(req, res){
        try {
          const article = await ArticleModel.findByIdAndUpdate(
            req.params.id,
            req.body
          );
          await article.save();
          res.send(article);
        } catch (error) {
          res.status(500).send({ error });
        }
    }

    // [DELETE] /articles/:id
    async delete(req, res) {
        try {
          const article = await ArticleModel.findByIdAndDelete(req.params.id);
          if (!article) {
            return res.status(404).send("Item wasn't found");
          }
          res.status(204).send();
        } catch (error) {
          res.status(500).send({ error });
        }
    }

}

export default new ArticleController