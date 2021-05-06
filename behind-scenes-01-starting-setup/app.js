const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            //this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
    },
    beforeCreate() {
        console.log('Before Create');
    },
    created() {
        console.log('Created');
    },
    beforeMount() {
        console.log('Before Mount');
    },
    mounted() {
        console.log('Mounted');
    },
    beforeUpdate() {
        console.log('Before Update');
    },
    updated() {
        console.log('Updated');
    },
    beforeUnmount() {
        console.log('Before Unmount');
    },
    unmounted() {
        console.log('Unmounted');
    }
});

app.mount('#app');

// Timeout to unmount, just to see how it works
// setTimeout(function() {
//     app.unmount();
// }, 3000);


const app2 = Vue.createApp({
    template: `
  <p>{{ favoriteFood }}</p>
  `,
    data() {
        return {
            favoriteFood: 'Pizza'
        };
    }
});

app2.mount('#app2');

//....

const data = {
    message: 'Hello!',
    longMessage: 'Hello! World!'
};

const handler = {
    set(target, key, value) {
        // console.log(target);
        // console.log(key);
        // console.log(value);
        if (key === 'message') {
            target.longMessage = value + ' World!'
        }
        target.message = value;
    }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

//console.log(proxy.longMessage);