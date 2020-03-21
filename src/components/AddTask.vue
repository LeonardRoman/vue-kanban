<template lang="pug">
  .container
    input.addtask(
      v-if="showAddBlock"
      v-model='name'
      placeholder="Введите текст карточки")
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
    props: { indexStatus: Number },
    data () {
      return {
        showAddBlock: false,
        name: ''
      }
    },
    methods: {
      toggleControlButton () {
        this.showAddBlock = !this.showAddBlock
      },
      createTask () {
        if (this.name.trim() !== '') {
          this.$store.commit('createTask', {
            indexStatus: this.indexStatus,
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
    }

    &-btn.btn-add:before {
      @include pseudo-element;
      top: 9px;
      background-image: url("~@/assets/images/icon-add.svg");
    }

    &-btn.btn-yes {
      padding: 7px 12px;
      margin-right: 24px;
      background: #0C7CD5;
      border-radius: 3px;
      color: #FFFFFF;
    }

    &-btn.btn-no::before {
      @include pseudo-element;
      top: 9px;
      left: -24px;
      background-image: url("~@/assets/images/icon-cancel.svg");
    }

    &-btn.btn-no {
      margin-left: 24px;
    }
  }

</style>
