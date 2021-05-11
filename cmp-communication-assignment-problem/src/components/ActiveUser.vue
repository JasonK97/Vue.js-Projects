<template>
    <li>
        <h2>Username: {{ username }}</h2>
        <h3>Age: {{ age }}</h3>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
    },
    emits: ['delete'],
    data() {
        return {

        };
    },
    methods: {

    },
}
</script>