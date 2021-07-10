import {createStore} from 'vuex'
import Axios from 'axios'

const store = createStore({
    state: {
        categories: [],
        cats: []
    },
    getters: {
      getCategories(state){
          return state.categories
      }
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_CATS(state, cats) {
            state.cats = cats
            console.log(cats)
        },
        SET_ADD_MORE(state, cats) {
            state.cats.push(...cats)
        }
    },
    actions: {
        async getCategories({commit}) {
            await Axios.get('https://api.thecatapi.com/v1/categories')
                .then(response => {
                    commit('SET_CATEGORIES', response.data)
                })
        },
        async getCats({commit}, category_id, page) {
            await Axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category_id}`)
                .then(response => {
                    commit('SET_CATS', response.data)
                })
        },
        async addMore({commit}, category_id, page) {
            await Axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${category_id}`)
                .then(response => {
                    commit('SET_ADD_MORE', response.data)
                })
        }
    }
})

export default store