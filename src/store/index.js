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
      'work': [{
        id: 1,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?',
        description: ''
      },
        { id: 3, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 4, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 5, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        {
          id: 6,
          name: 'asdfasdf ;asdjfas audsfyhoiasndfasiodfp ash a  adfasdf adsfas asdf adsfdfasdf asdf ' +
            'asdf asasdf asdfaf asdfasdfadasdfasf dsfa sdasdf asdasdfdsa asdfasdf asdfsad fasdsdhfa ' +
            'pahsdfpoasid poasdf pao', description: ''
        },],
      'check': [{
        id: 7,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa debitis doloremque dolorum' +
          ' enim error eveniet fuga incidunt magnam maiores modi nobis, non odit, officia optio possimus ' +
          'quod reprehenderit temporibus ullam voluptatem! Culpa in iusto minus nesciunt nisi quis, soluta ' +
          'voluptatem. Architecto eius harum illum iure, minima nisi obcaecati! Ad autem consectetur ducimus ' +
          'eligendi inventore iusto minus quas reiciendis rerum, sed! Architecto consequuntur ' +
          'libero temporibus? Aliquid assumenda atque aut autem commodi consequuntur, corporis cumque cupiditate' +
          ' debitis deleniti dicta dolor dolore eligendi, exercitationem expedita fugiat fugit id illo magnam ' +
          'minus, nemo odio officia provident quae quibusdam repellat repellendus totam vel veniam?', description: ''
      },
        { id: 8, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 9, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 10, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 11, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' }],
      'done': [{
        id: 12,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?',
        description: ''
      },
        { id: 13, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        {
          id: 14, name: 'as sdfa dfasdfdfasdf asdfi asidfjasd;fjas jadslfkjasd;j asdfjasdifjasdjf ;klasjdf;l jasdfj' +
            ' as dfjasdhfasd;fsjadfieaf lkjsdaflj asdoifjsladkj ;alsdfja;sdfjasdfgasudfh; asdfjas;dfijasdoifjasdfn ' +
            'asdkfjas;dlfjas;dfj', description: ''
        },
        { id: 15, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },
        { id: 16, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?', description: '' },]
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
