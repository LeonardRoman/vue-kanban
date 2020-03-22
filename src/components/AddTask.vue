<template lang="pug">
  .container(@keyup.enter="createTask")
    input.addtask(
      v-if="showAddBlock"
      v-model='name'
      placeholder="Введите текст карточки"
      ref="inputTaskName")
    .control
      button.control-btn.btn-add(
        v-show="!showAddBlock"
        @click="toggleControlButton")
        | Добавить еще одну карточку
      button.control-btn.btn-yes(
        v-show="showAddBlock"
        @click="createTask")
        | Добавить карточку
      button.control-btn.btn-no(
        v-show="showAddBlock"
        @click="toggleControlButton")
        | Отмена
</template>

<script>
  export default {
    name: 'AddTask',
    props: { statusName: String },
    data () {
      return {
        showAddBlock: false,
        name: ''
      }
    },
    methods: {
      toggleControlButton () {
        this.showAddBlock = !this.showAddBlock
        setTimeout(() => {
          if (this.$refs.inputTaskName) {
            this.$refs.inputTaskName.focus()
          }
        }, 100)

      },
      createTask () {
        if (this.name.trim() !== '') {
          this.$store.commit('createTask', {
            statusName: this.statusName,
            name: this.name
          })
        }
        this.name = ''
        this.toggleControlButton()
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .addtask {
    width: 100%;
    min-height: 52px;
    padding: 0 12px 8px 12px;
    background-color: $background-text;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 2px;
    margin-bottom: 16px;
  }

  .addtask::placeholder {
    color: #989898;
  }

  .control {
    display: flex;
    flex-direction: row;
    align-content: flex-start;

    &-btn {
      position: relative;
      color: $color-bnt-dark;
      height: 32px;
    }

    &-btn.btn-add {
      width: 256px;
      padding: 0 12px 0 39px;
    }

    &-btn.btn-add:hover {
      background-color: #C4C4C4;
      border-radius: 3px;
    }


    &-btn.btn-add:before {
      @include pseudo-element;
      top: 9px;
      left: 12px;
      background-image: url("~@/assets/images/icon-add.svg");
    }

    &-btn.btn-yes {
      padding: 7px 12px;
      background: #0C7CD5;
      border-radius: 3px;
      color: #FFFFFF;
    }

    &-btn.btn-no::before {
      @include pseudo-element;
      top: 9px;
      left: 12px;
      line-height: 18px;
      background-image: url("~@/assets/images/icon-cancel.svg");
    }

    &-btn.btn-no {
      height: 32px;
      padding: 0 12px 0 36px;
      margin-left: 12px;
    }

    &-btn.btn-no:hover {
      background-color: #C4C4C4;
      border-radius: 3px;
    }
  }

</style>
