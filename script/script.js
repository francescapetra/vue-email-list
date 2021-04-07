 var app = new Vue(
  {
    el:"#root",
    data:{
      emails: [],
    },
    methods:{
    },
    mounted: function(){
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
        const result = response.data.response;
        this.emails.push(result);
        console.log(result);
        });
      }
    }
  }
);
