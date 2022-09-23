<template>
  <h1>Repos</h1>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Repo Name</th>
          <th scope="col">Updated At</th>
          <th scope="col">Issues</th>
          <th scope="col">Forks#</th>
          <th scope="col">View</th>
        </tr>
        </thead>
        <tbody >
          <tr v-for="items in repos" :key="items.id">
            <td>{{items.id}}</td>
            <td>{{items.name}}</td>
            <td>{{items.updated_at}}</td>
            <td>{{items.open_issues}}</td>
            <td>{{items.forks}}</td>
            <td><button>Go to Repo</button></td>
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
        repos:null,
        page: 1,
        Nextpage:null,
    };
},

methods: {

  Next() {
    this.page++;
    console.log(this.page)
    axios.get('https://api.github.com/users/' + this.username + '/repos?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.repos = this.Nextpage;
    console.log(this.Nextpage);
    });
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/repos?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.repos = this.Nextpage;
    console.log(this.Nextpage);
    });
    console.log(this.page)
  }
},


created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/repos?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.repos = res.data;
    console.log(this.repos);
    });
  }

};
</script>