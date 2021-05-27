const state = {
    vat:[
        {
            Lp:1,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti excepturi et soluta saepe. Molestiae rem numquam odio libero dolorem.',          
            MPK:4342,           
            Kwota_Netto:200,   
            Ilość:12,        
            VAT:0,           
        },
        {
            Lp:2,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti excepturi et soluta saepe. Molestiae rem numquam odio libero dolorem.',          
            MPK:6655,           
            Kwota_Netto:300,   
            Ilość:5,        
            VAT:5,           
        },
        {
            Lp:3,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti excepturi et soluta saepe. Molestiae rem numquam odio libero dolorem.',          
            MPK:3212,           
            Kwota_Netto:400,   
            Ilość:4,        
            VAT:8,           
        },
        {
            Lp:4,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti excepturi et soluta saepe. Molestiae rem numquam odio libero dolorem.',          
            MPK:9867,           
            Kwota_Netto:200,   
            Ilość:4,        
            VAT:5,           
        },
        {
            Lp:5,           
            Opis:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus deleniti excepturi et soluta saepe. Molestiae rem numquam odio libero dolorem.',          
            MPK:5429,           
            Kwota_Netto:100,   
            Ilość:8,        
            VAT:23,           
        },
    ]
};

const getters = {
    allVat: (state) => state.vat
};

const actions = {};
const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
}