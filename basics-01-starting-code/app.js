const app = Vue.createApp({
    data() {
        return {
            message: 'Learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return 'On your way!';
            } else {
                return 'You\'re a master already!';
            }
        }
    }
});

app.mount('#user-goal');