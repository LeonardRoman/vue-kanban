<template lang="pug">
  section.dashboard
    .dashboard__column(
      v-for="status of statuses")
      .dashboard__column-header(v-text="status.title")
      draggable(
        v-model="tasks[status.name]"
        :group="{ name: 'tasksList', pull: true, put: true }"
        :sort="true"
        preventOnFilter="true"
        animation="900"
        ghostClass="ghost-task"
        dragClass="drag-task"
        class="draggable-area"
        @change="change(status.name)"
        :move="test")
        transition-group(name="task-list-animation")
          .dashboard__column-content(
            v-for="task of tasks[status.name]"
            :key="task.id"
            :list="tasks"
            @click="getCurrentTask({name: task.name, description: task.description, statusName: status.name, id: task.id})")
            p {{task.name}}
      AddTask(:statusName="status.name")
    EditTask(
      v-if="showEditBlock"
      @toggleEditBlock="toggleEditBlock"
      @updateTask="updateTask"
      :currentTask="currentTask")
</template>

<script>
  import draggable from 'vuedraggable'
  import AddTask from '@/components/AddTask'
  import EditTask from '@/components/EditTask'
  import { mapState } from 'vuex'

  export default {
    name: 'Dashboard',
    components: { AddTask, EditTask, draggable },
    data () {
      return {
        showEditBlock: false,
        showAddBlock: false,
        currentTask: {}
      }
    },
    computed: {
      ...mapState(['tasks', 'statuses']),
    },
    methods: {
      toggleControlButton () {
        this.showAddBlock = !this.showAddBlock
      }
      ,
      toggleEditBlock () {
        this.showEditBlock = !this.showEditBlock
      }
      ,
      getCurrentTask (task) {
        this.currentTask = task
        this.$router.push(`/task/${task.id}`)
        this.toggleEditBlock()
      }
      ,
      updateTask () {
        this.$store.commit('updateTask', {
          statusName: this.currentTask.statusName,
          taskId: this.currentTask.id,
          name: this.currentTask.name,
          description: this.currentTask.description,
        })
      },
      change (statusName) {
        this.$store.commit('setTasks', { statusName, tasks: this.tasks })
      },
    }
  }
</script>

<style lang="scss">
  .dashboard {
    display: flex;
    padding: 36px 24px 0 24px;
    align-items: first baseline;

    &__column + &__column {
      margin-left: 24px;
    }

    &__column {
      display: flex;
      flex-direction: column;
      background-color: $background-card;
      border-radius: 5px;
      padding: 12px;
      width: 300px;

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

  .ghost-task {
    background: #BEBEBE;
    color: #BEBEBE;
    border-radius: 2px;
    opacity: 1;
  }

  .drag-task {
    background: #C7F1FF;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  .draggable-area > span {
    display: block;
    width: auto;
  }

	.task-list-animation-leave-active {
		display: none !important;
	}
	.task-list-animation-leave {
		transition: all 2s;
	}
	.task-list-animation-enter {
		transition: all 2s;
	}
</style>
