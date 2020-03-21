<template lang="pug">
  section.dashboard
    .dashboard__column(
      v-for="(status, indexStatus) of tasksByStatus"
      :class="'col-' + status.class")
      .dashboard__column-header(v-text="status.title")
      .dashboard__column-content(
        v-for="(task, indexTask) of status.tasks"
        :key="`${task.title} + ${indexTask}`")
        p {{task.text}}
      AddTask(:indexStatus="indexStatus")
</template>

<script>
  import AddTask from '@/components/AddTask'
  import { mapState } from 'vuex'

  export default {
    name: 'Dashboard',
    components: { AddTask },
    data () {
      return {
        showAddBlock: false
      }
    },
    computed: {
      ...mapState(['tasksByStatus'])
    },
    methods: {
      toggleControlButton () {
        this.showAddBlock = !this.showAddBlock
      },
      addCard () {
        this.toggleControlButton()
      }
    }
  }
</script>

<style lang="scss">
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    padding: 36px 24px 0 24px;

    &__column.col-work {
      grid-column: 1;
    }

    &__column.col-check {
      grid-column: 2;
    }

    &__column.col-done {
      grid-column: 3;
    }

    &__column + &__column {
      margin-left: 24px;
    }

    &__column {
      display: flex;
      flex-direction: column;
      background-color: $background-card;
      border-radius: 5px;
      padding: 12px;

      &-header {
        padding: 12px 0 16px;
        color: $color-header
      }

      &-content {
        /*max-height: 52px;*/
        padding: 8px 12px;
        background-color: $background-text;
        color: $color-content;
        margin-bottom: 16px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        border-radius: 2px;

        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
</style>
