

class NewsController {

    index(req, res) {
        res.render('new');
    };

    show(req, res) {
        res.send('News Detail');
    };

    getNews(id) {
        return (req, res) => {
            res.send(id);
        }
    }
}

module.exports = new NewsController;