const state = {
    kolory: [
        'zielony', 'niebieski', 'szary', 'turkusowy', 'granatowy', 'czerwony','biały'
    ],
    vat:['ZW', 'NP.', '0%', '3%', '8%']
};

const getters = {
    getKolory:(state) => state.kolory,
    getVat:(state) => state.vat,
};

const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}