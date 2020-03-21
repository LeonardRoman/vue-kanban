import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statuses: [
      { id: 1, class: 'work', title: 'В работе' },
      { id: 2, class: 'check', title: 'На проверке' },
      { id: 3, class: 'done', title: 'Выполнено' },
    ],
    tasksByStatus: [
      {
        id: 1,
        title: 'В работе',
        class: 'work',
        tasks: [
          { id: 1, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 3, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 4, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 5, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          {
            id: 6,
            name: 'asdfasdf ;asdjfas audsfyhoiasndfasiodfp ash a  adfasdf adsfas asdf adsfdfasdf asdf ' +
              'asdf asasdf asdfaf asdfasdfadasdfasf dsfa sdasdf asdasdfdsa asdfasdf asdfsad fasdsdhfa ' +
              'pahsdfpoasid poasdf pao'
          },
        ]
      },
      {
        id: 2,
        title: 'На проверке',
        class: 'check',
        tasks: [
          {
            id: 7,
            name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa debitis doloremque dolorum' +
              ' enim error eveniet fuga incidunt magnam maiores modi nobis, non odit, officia optio possimus ' +
              'quod reprehenderit temporibus ullam voluptatem! Culpa in iusto minus nesciunt nisi quis, soluta ' +
              'voluptatem. Architecto eius harum illum iure, minima nisi obcaecati! Ad autem consectetur ducimus ' +
              'eligendi inventore iusto minus quas reiciendis rerum, sed! Architecto consequuntur ' +
              'libero temporibus? Aliquid assumenda atque aut autem commodi consequuntur, corporis cumque cupiditate' +
              ' debitis deleniti dicta dolor dolore eligendi, exercitationem expedita fugiat fugit id illo magnam ' +
              'minus, nemo odio officia provident quae quibusdam repellat repellendus totam vel veniam?'
          },
          { id: 8, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 9, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 10, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 11, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },],
      },
      {
        id: 3,
        title: 'Выполнено',
        class: 'done',
        tasks: [
          { id: 12, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 13, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          {
            id: 14, name: 'as sdfa dfasdfdfasdf asdfi asidfjasd;fjas jadslfkjasd;j asdfjasdifjasdjf ;klasjdf;l jasdfj' +
              ' as dfjasdhfasd;fsjadfieaf lkjsdaflj asdoifjsladkj ;alsdfja;sdfjasdfgasudfh; asdfjas;dfijasdoifjasdfn ' +
              'asdkfjas;dlfjas;dfj'
          },
          { id: 15, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { id: 16, name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
        ],
      }
    ]
  },
  mutations: {
    createTask: (state, payload) => {
      state.tasksByStatus[payload.indexStatus].tasks.push({
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`, // Заглушка. Получить id от API
        name: payload.name,
      })
    },
    updateTask: (state, payload) => {
      // console.log(payload)
      let task = { name: null, description: null }
      state.tasksByStatus[payload.indexStatus].tasks.forEach(t => {
        if (t.id === payload.taskId) {
          t.name = payload.name
          t.descition = payload.description
          task.name = payload.name
          task.descition = payload.description
        }
      })
    },
    /* Заглушка: остальные методы операций с задачами */
    // destroyTask: (state, payload) => state.tasks.splice(payload.index, 1),
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
