const app = Vue.createApp({
    data() {
        return {
            input: '',
            visibility: true,
            backgroundColorInput: ''
        };
    },
    computed: {
        paraClasses() {
          return {
              user1: this.inputClass === 'user1',
              user2: this.inputClass === 'user2',
              visible: this.visibility,
              hidden: !this.visibility
          };
        },
      },
    methods: {
        toggleParagraph() {
            this.visibility = !this.visibility;
        }
    }
});

app.mount('#assignment');