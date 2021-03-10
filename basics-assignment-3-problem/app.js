const app = Vue.createApp({
    data() {
      return {
        result: 0,
      };
    },
    watch: {
        result(value) {
            if (value > 37 || value < 37) {
              const that = this;
              setTimeout (function() {
                that.result = 0;
              }, 5000); 
            }
          }
    },
    computed: {
      endResult() {
        if (this.result < 37) {
            return 'Not there yet';
        } else if (this.result > 37) {
            return 'Too much!';
        } else {
            return this.result;
        }
      }
    },
    methods: {
        add(value) {
            this.result = this.result + value;
        },
    }
  });
  
  app.mount('#assignment');
  