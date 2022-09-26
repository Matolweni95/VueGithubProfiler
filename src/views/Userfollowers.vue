<template>
    <div class="container">
    <h1>Followers</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Profile Image</th>
          <th>type</th>
          <th>Github</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="items in followers" :key="items.id">
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
name: "userFollowers",
data(){
    return {
      username: this.$route.params.username,
      followers:null,
      page: 1,
      Nextpage:null,
    };
},


methods: {

  Next() {
    this.page++;
    axios.get('https://api.github.com/users/' + this.username + '/followers?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.followers = this.Nextpage;
    });
  },

  Back(){
    this.page--;

    //prevent the page numbers from going bellow 1

    if (this.page <= 0){
      this.page = 1;
    }
    axios.get('https://api.github.com/users/' + this.username + '/followers?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.followers = this.Nextpage;
    });
  }
},


created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/followers?&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.followers = res.data;
    });
  }

};
</script>