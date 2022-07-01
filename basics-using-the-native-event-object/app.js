const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        setTimeout(function () {
          const that = this;
          that.counter = 0;
        }, 2000);
        this.counter = 0;
      }
    }
    // name(value) {
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' Joestar';
    //   };
    // },
    // lastName(value) {
    //   if(value === ''){
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' Joestar';
    //   };
    // }
  },
  computed: {
    fullname() {
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' +  this.lastName;
    }
  },
  methods: {
    outputFullname() {
      if(this.name === ''){
        return '';
      }
      return this.name + ' Joestar';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    }
  }
});

app.mount('#events');
