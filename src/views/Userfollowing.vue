<template>
     <div class="container">
     <h1>Following</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Profile Image</th>
          <th>Type</th>
          <th>Github</th>
        </tr>
        </thead>
        <tbody >
            <tr v-for="items in following" :key="items.id">
                <td>{{items.id}}</td>
                <td>{{items.login}}</td>
                <td><img :src ="items.avatar_url"></td>
                <td>{{items.type}}</td>
                <td>{{items.html_url}}</td>
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
name: "userFollowing",
data(){
    return {
        username: this.$route.params.username,
        following:null,
        page: 1,
        Nextpage:null,
    };
    
},

methods: {

  Next() {
    this.page++;
    axios.get('https://api.github.com/users/' + this.username + '/following?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.following = this.Nextpage;
    });
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/following?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.following = this.Nextpage;
    });
  }
},

created: function(){
    axios.get('https://api.github.com/users/' + this.username + '/following?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.following = res.data;
    });
  }

};
</script>