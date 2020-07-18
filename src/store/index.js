import Vue from 'vue'
import Vuex from 'vuex'
import { apiCall } from '../config/apiConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    comentarios: [],
  },
  getters: {
    getCharacters(state)
    {
      return state.characters;
    },
    getComments(state)
    {
      return state.comentarios
    }
  },
  mutations: {
    FILLCHAR(state, apiRes)
    {
      state.characters = apiRes;
    },
    SAVECOMMENT(state, obj)
    {
      state.comentarios.push(obj);
    }
      
  },
  actions: {
    fillChar(context)
    {
      let char = `character/`;

      async function apiRes()
      {
        const apiARR = await (
          await apiCall(char)
        ).data.results;
        
        context.commit('FILLCHAR', apiARR)
      }

      apiRes();
    },
    saveComment(context, comentObj)
    {
      comentObj = {
        ...comentObj,
        id: context.state.comentarios.length
      }
      context.commit('SAVECOMMENT', comentObj)
    }
  },
  modules: {
  }
})
