const { dataTshirt } = require('../dbContent/products/tshirts');
const { mapError } = require('../helper/handleError');
const { sizes } = require('../utils/constants/tshirt');
const _ = require('lodash');

const getTshirtBySize = async (req, res) => {
    try {
        const { size } = req.query;
        const checkedSize = isSize(size);
        if (!checkedSize) throw Error('TSHIRT_SIZE_NOT_FOUND');
        const response = dataTshirt.reduce((acc, product) => {
            const checkedSize = product.size === size;
            if (checkedSize) acc = [...acc, product]
            return acc;
        }, []);
        res.send(response);
    } catch (e) {
        res.status(400).json(mapError[e.message])
    }
};

const getTshirt = async (req, res) => {
    try {
        const id = req.query.id;
        const tshirt = dataTshirt.filter(item => item.id === Number(id));
        if (isEmpty(tshirt)) throw Error('NOT_FOUND');
        const response = _.head(tshirt);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json(mapError[e.message]);
    }
}


// Private functions
const isSize = (size) => sizes.includes(size);

const isEmpty = (content) => !(content.length > 0);

module.exports = {
    getTshirtBySize,
    getTshirt,
}