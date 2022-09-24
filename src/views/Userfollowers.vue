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
          <th>Url</th>
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
name: "userList",
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
    console.log(this.page)
    axios.get('https://api.github.com/users/' + this.username + '/followers?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.followers = this.Nextpage;
    console.log(this.Nextpage);
    });
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/followers?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.followers = this.Nextpage;
    console.log(this.Nextpage);
    });
    console.log(this.page)
  }
},


created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/followers?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.followers = res.data;
    console.log(this.followers);
    });
  }

};
</script>