import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksByStatus: [
      {
        title: 'В работе',
        class: 'work',
        tasks: [
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'asdfasdf ;asdjfas audsfyhoiasndfasiodfp ash a  adfasdf adsfas asdf adsfdfasdf asdf asdf asasdf asdfaf asdfasdfadasdfasf dsfa sdasdf asdasdfdsa asdfasdf asdfsad fasdsdhfa pahsdfpoasid poasdf pao' },
        ]
      },
      {
        title: 'На проверке',
        class: 'check',
        tasks: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa debitis doloremque dolorum' +
              ' enim error eveniet fuga incidunt magnam maiores modi nobis, non odit, officia optio possimus ' +
              'quod reprehenderit temporibus ullam voluptatem! Culpa in iusto minus nesciunt nisi quis, soluta ' +
              'voluptatem. Architecto eius harum illum iure, minima nisi obcaecati! Ad autem consectetur ducimus ' +
              'eligendi inventore iusto minus quas reiciendis rerum, sed! Architecto consequuntur ' +
              'libero temporibus? Aliquid assumenda atque aut autem commodi consequuntur, corporis cumque cupiditate' +
              ' debitis deleniti dicta dolor dolore eligendi, exercitationem expedita fugiat fugit id illo magnam ' +
              'minus, nemo odio officia provident quae quibusdam repellat repellendus totam vel veniam?'
          },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },],
      },
      {
        title: 'Выполнено',
        class: 'done',
        tasks: [
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          {
            text: 'as sdfa dfasdfdfasdf asdfi asidfjasd;fjas jadslfkjasd;j asdfjasdifjasdjf ;klasjdf;l jasdfj' +
              ' as dfjasdhfasd;fsjadfieaf lkjsdaflj asdoifjsladkj ;alsdfja;sdfjasdfgasudfh; asdfjas;dfijasdoifjasdfn ' +
              'asdkfjas;dlfjas;dfj'
          },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
          { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, non?' },
        ],
      }
    ]
  },
  mutations: {
    addTask: (state, payload) => {
      if (payload.text.trim() !== '') {
        state.tasksByStatus[payload.index].tasks.push({ text: payload.text })
      }
    },
    /* Заглушка: остальные методы с операций с задачами */
    // changeStatusTask: (state, payload) => state.cards[payload.index].status = payload.status,
    // changeTextTask: (state, payload) => state.cards[payload.index] = payload.text,
    // destroyTask: (state, payload) => state.cards.splice(payload.index, 1),
    /* Заглушка: Раскидать по статусам */
    //filterTasks: (state, payload) => payload...

  },
  actions: {
    /*Заглушка: получить c сервера  */
    //downloadTasks ({ commit }) {
    // ...
    // commit("filterTasks")
    //}
  },
  modules: {}
})
