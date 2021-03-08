const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    },
  },
});

app.mount('#events');
