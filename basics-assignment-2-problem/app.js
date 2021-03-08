const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        enteredInput: '',
      };
    },
    methods: {
      alertButton() {
          alert('What\'re those!!');
      },
      showInput(event) {
        this.userInput = event.target.value;
      },
      showEnteredInput(event) {
        this.enteredInput = event.target.value;
      },
    },
  });
  
  app.mount('#assignment');