var app = new Vue({
  el: '#app',
  data: {
      message: ''
  },
  methods: {
      process: function(){
        if (this.message === '123') {
            this.message = 'Message is equal to 123';
          }
          console.log(this.message);
      }
  }
})