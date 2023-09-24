import axios from 'axios';

/**
 * @param {string|null} categoryIri
 * @returns {Promise}
 */
export function fetchProducts(categoryIri = null) {
    const params = {};

    if (categoryIri) {
        params.category = categoryIri;
    }

    return axios.get('/api/products', {
        params,
    }).then((response) => response.data['hydra:member']);
}
