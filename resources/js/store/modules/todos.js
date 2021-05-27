const state = {
    show:false
};

const getters = {
    allShow: (state) => state.show ,
};

const actions = {
    asyncchangeShow:(context,val) =>{
        setTimeout(() => {
            context.commit('changeShow',val);
        },300);
    }
};
const mutations = {
    changeShow: (state,val) => {
        state.show = val
        console.log(state.show);
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}