<template>
<h1>Following</h1>
     <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Username</th>
          <th scope="col">Profile Image</th>
        </tr>
        </thead>
        <tbody >
            <tr v-for="items in following" :key="items.id">
                <td>{{items.id}}</td>
                <td>{{items.login}}</td>
                <td><img :src ="items.avatar_url"></td>
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
        following:null,
        page: 1,
        Nextpage:null,
    };
    
},

methods: {

  Next() {
    this.page++;
    console.log(this.page)
    axios.get('https://api.github.com/users/' + this.username + '/following?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.following = this.Nextpage;
    console.log(this.Nextpage);
    });
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/following?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.following = this.Nextpage;
    console.log(this.Nextpage);
    });
    console.log(this.page)
  }
},

created: function(){
    axios.get('https://api.github.com/users/' + this.username + '/following?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.following = res.data;
    console.log(this.following);
    });
  }

};
</script>