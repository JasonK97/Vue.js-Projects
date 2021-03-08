Vue.createApp({
    data() {
      return {
        name: 'Jason Kent',
        age: 23,
        image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      };
    },
    methods: {
      agePlus5() {
        return this.age + 5;
      },
      randomNumber() {
        return Math.random()
      },
    },
  }).mount('#assignment');