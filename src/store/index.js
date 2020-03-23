import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statuses: [
      { id: 1, name: 'work', title: 'В работе', description: '' },
      { id: 2, name: 'check', title: 'На проверке', description: '' },
      { id: 3, name: 'done', title: 'Выполнено', description: '' },
    ],
    tasks: {
      'work': [],
      'check': [],
      'done': []
    },
  },
  mutations: {
    createTask: (state, payload) => {
      state.tasks[payload.statusName].push({
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`, // Заглушка. Получить id от API
        name: payload.name,
        description: '',
      })
    },
    updateTask: (state, payload) => {
      state.tasks[payload.statusName].forEach(t => {
        if (t.id === payload.taskId) {
          t.name = payload.name
          t.description = payload.description
        }
      })
    },
    setTasks (state, payload) {
      state.tasks = payload.tasks
    },
    /* Заглушка: Раскидать по статусам */
    //filterTasksByStatus: (state, payload) => payload...

  },
  actions: {
    /*Заглушка: получить c API список задач */
    //downloadTasks ({ commit }) {
    // ...
    // commit("filterTasks")
    //}
  },
  modules: {}
})
