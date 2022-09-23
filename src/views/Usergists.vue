<template>
<h1>Gists</h1>
    <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Discription</th>
          <th scope="col">id</th>
          <th scope="col">Updated at</th>
        </tr>
        </thead>
          <tbody >
            <tr v-for="items in gists" :key="items.id">
                <td>{{i+1}}</td>
                <td>{{items.description}}</td>
                <td>{{items.id}}</td>
                <td>{{items.updated_at}}</td>
            </tr>
        </tbody>
      </table> 

      <div class="btns">
        <button @click = "Next()">Next</button>
        <button @click = "Back()">Previous</button>
    </div>
      
  </div>  
</template>

<script>

import axios from 'axios';

export default {
name: "userList",
data(){
    return {
        username: this.$route.params.username,
        gists:null,
        page: 1,
        Nextpage:null,
    };
},

methods: {

  Next() {
    this.page++;
    console.log(this.page)
    axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.gists = this.Nextpage;
    console.log(this.Nextpage);
    });
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.gists = this.Nextpage;
    console.log(this.Nextpage);
    });
    console.log(this.page)
  }
},

created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.gists = res.data;
    console.log(this.gists);
    });
  }

};
</script>