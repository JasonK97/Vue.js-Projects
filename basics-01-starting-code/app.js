const app = Vue.createApp({
    data() {
        return {
            messageA: 'Learn Vue!',
            messageB: 'Complete the course.',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return this.messageA;
            } else {
                return this.messageB;
            }
        }
    }
});

app.mount('#user-goal');