const app = Vue.createApp({
    data() {
        return {
            name: 'JoJo',
            age: 19,
            imageUrl: 'https://images.unsplash.com/photo-1655219924857-fd60f3614903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=991&q=80',
            inputValueDefault: 'Default Value!'
        };
    },
    methods: {
        favoriteNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        },
        newAge(){
            return this.age + 5;
        }
    }
});


app.mount('#assignment');