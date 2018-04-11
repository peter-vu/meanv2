/**
 * Created by petervu on 4/11/18.
 */
const index = function(req, res) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    index
};