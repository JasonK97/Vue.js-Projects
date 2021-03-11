const app = Vue.createApp({
    data() {
      return {
        inputTask: '',
        taskList: [],
        showList: true
      };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide' : 'Show';
        }
    },
    methods: {
      addTask() {
        this.taskList.push(this.inputTask);
      },
      removeTask(index) {
        this.taskList.splice(index, 1);
      },
      hideShow() {
          this.showList = !this.showList;
      }
    }
  });
  
  app.mount('#assignment');