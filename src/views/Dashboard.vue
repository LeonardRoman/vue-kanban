<template lang="pug">
  section.dashboard
    .dashboard__column(
      v-for="(status, indexStatus) of tasksByStatus"
      :class="'col-' + status.class")
      .dashboard__column-header(v-text="status.title")
      .dashboard__column-content(
        v-for="(task, indexTask) of status.tasks"
        :key="'task_' + task.id"
        @click="getCurrentTask({name: task.name, description: task.description, indexStatus, id: task.id})")
        p {{task.name}}
      AddTask(:indexStatus="indexStatus")
    EditTask(
      v-if="showEditBlock"
      @toggleEditBlock="toggleEditBlock"
      @updateTask="updateTask"
      :currentTask="currentTask")
</template>

<script>
  import AddTask from '@/components/AddTask'
  import EditTask from '@/components/EditTask'
  import { mapState } from 'vuex'

  export default {
    name: 'Dashboard',
    components: { AddTask, EditTask },
    data () {
      return {
        showEditBlock: false,
        showAddBlock: false,
        currentTask: {}
      }
    },
    computed: {
      ...mapState(['tasksByStatus'])
    },
    methods: {
      toggleControlButton () {
        this.showAddBlock = !this.showAddBlock
      },
      toggleEditBlock () {
        this.showEditBlock = !this.showEditBlock
      },
      getCurrentTask (task) {
        this.currentTask = task
        this.$router.push(`/task/${task.id}`)
        this.toggleEditBlock()
      },
      updateTask () {
        this.$store.commit('updateTask', {
          indexStatus: this.currentTask.indexStatus,
          taskId: this.currentTask.id,
          name: this.currentTask.name,
          description: this.currentTask.description,
        })
        this.$nextTick()
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
    align-items: first baseline;

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
        padding: 8px 12px;
        background-color: $background-text;
        color: $color-content;
        margin-bottom: 16px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        border-radius: 2px;
        cursor: pointer;

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
