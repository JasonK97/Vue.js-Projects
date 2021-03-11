const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
