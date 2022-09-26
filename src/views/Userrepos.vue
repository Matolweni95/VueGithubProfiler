<template>
  <div class="container">
  <h1>Repos</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Repo Name</th>
          <th>Updated At</th>
          <th>Issues</th>
          <th>Forks#</th>
          <th>View</th>
        </tr>
        </thead>
        <tbody >
          <tr v-for="items in repos" :key="items.id">
            <td>{{items.id}}</td>
            <td>{{items.name}}</td>
            <td>{{ formatDate(`${items.updated_at}`) }}</td>
            <td>{{items.open_issues}}</td>
            <td>{{items.forks}}</td>
            <td><router-link :to="`/${items.owner.login}/repos/${items.name}`"><button>Go to Repo</button></router-link></td>
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
import dayjs from 'dayjs';

export default {
name: "userRepos",
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
    axios.get('https://api.github.com/users/' + this.username + '/repos?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.repos = this.Nextpage;
    });
  },

  formatDate(dateString) {
    const date = dayjs(dateString);
    return date.format('MMM D, YYYY h:mm A');
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/repos?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.repos = this.Nextpage;
    });
  }
},


created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/repos?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.repos = res.data;
    });
  }

};
</script>