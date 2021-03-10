const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50 || value < -25) {
        const that = this;
        setTimeout (function() {
          that.counter = 0;
        }, 1000);
        
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname () {
      if (this.name === '' && this.lastname === '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) { 
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastname = '';
    },
  }
});

app.mount('#events');
