<template lang="pug">
  .overlay(@click.self="updateTask")
    form.modal
      button.modal-btn.btn-no(
        @click="closeTask")
      textarea.modal-header(v-model="currentTask.name" ref="headerInput")
      textarea.modal-description(
        placeholder="Описание"
        v-model="currentTask.description")
      .modal__control
        button.modal__control-btn.btn-yes(
          @click.prevent="updateTask")
          | Сохранить
</template>

<script>
  export default {
    name: 'EditTask',
    props: { currentTask: Object },
    data () {
      return {
        task: null
      }
    },
    mounted () {
      this.autoResize()
    },
    methods: {
      updateTask () {
        this.$emit('updateTask')
        this.closeTask()
      },
      closeTask () {
        this.$emit('toggleEditBlock')
        this.$router.go(-1)
      },
      autoResize () {
        this.$refs.headerInput.style = 'height:' + this.$refs.headerInput.scrollHeight + 'px'
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(black, .3);

    .modal {
      position: relative;
      margin: 40px auto auto auto;
      max-width: 600px;
      padding: 16px 16px 13px 16px;
      background-color: $background-card;
      border-radius: 5px;
      display: flex;
      flex-direction: column;

      &-header {
        width: 95%;
        height: auto;
        margin-bottom: 16px;
        resize: none;
        overflow: hidden;
        overflow-wrap: break-word;
        background-color: $background-card;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
        border-radius: 2px;
      }

      &-header:focus {
        background-color: $background-text;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        border-radius: 2px;

      }

      &-description {
        margin-bottom: 16px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        background: $background-text;
        min-height: 95px;
        padding: 12px;
      }

      &__control {
        .btn-yes {
          padding: 7px 12px;
          margin-right: 24px;
          background: #0C7CD5;
          border-radius: 3px;
          color: #FFFFFF;
        }
      }

      .btn-no {
        @include pseudo-element;
        top: 16px;
        right: 16px;
        background-image: url("~@/assets/images/icon-cancel.svg");
      }
    }
  }
</style>
