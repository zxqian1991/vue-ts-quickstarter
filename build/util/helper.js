const path = require('path');
const {
    prod,
    dev
} = require('../config');
module.exports = {
    resolve: function (dir) {
        return path.join(__dirname, '../..', dir);
    },
    assetsPath: function (_path) {
        const assetsSubDirectory = process.env.NODE_ENV === 'production' ? prod.assetsSubDirectory : dev.assetsSubDirectory;
        return path
            .posix
            .join(assetsSubDirectory, _path);
    }
};
