const state = {
    workers:[
        {
            Lp:1,                 
            Imię:'Ernest ',           
            Nazwisko:'Kowalski',       
            Stanowisko:'Future Mobility Officer',        
            Data_Zatrudnienia:'10/11/20',
            Ilość_Dni_Urlopowych:3
        },
        {
            Lp:2,                 
            Imię:'Krzysztof ',           
            Nazwisko:'Cieślak',       
            Stanowisko:'Central Response Associate',        
            Data_Zatrudnienia:'10/01/20',
            Ilość_Dni_Urlopowych:5
        },
        {
            Lp:3,                 
            Imię:'Mikołaj ',           
            Nazwisko:'Kwiatkowski',       
            Stanowisko:'Corporate Response Strategist',        
            Data_Zatrudnienia:'01/11/20',
            Ilość_Dni_Urlopowych:10
        },
        {
            Lp:4,                 
            Imię:'Mateusz ',           
            Nazwisko:'Sikorska',       
            Stanowisko:'Chief Creative Agent',        
            Data_Zatrudnienia:'10/11/20',
            Ilość_Dni_Urlopowych:23
        },
        {
            Lp:5,                 
            Imię:'Anatol ',           
            Nazwisko:'Wojciechowski',       
            Stanowisko:'Internal Solutions Associate',        
            Data_Zatrudnienia:'10/11/21',
            Ilość_Dni_Urlopowych:4
        },
    ],
};

const getters = {
    allWorkers: (state) => state.workers,
};

const actions = {};
const mutations = {};

export default{
    state,
    getters,
    actions,
    mutations
}