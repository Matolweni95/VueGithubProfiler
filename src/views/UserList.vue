<template>   
  <div class="container">
    <h1>Users</h1>
    <table class="table">
      <thead>
      <tr>
        <th>id</th>
        <th>Profile Image</th>
        <th>Username</th>
        <th>User Type</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody >
        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td><img :src="user.avatar_url" /></td>
            <td>{{user.login}}</td>
            <td>{{user.type}}</td>
            <td><router-link :to = user.login><button>View User</button></router-link></td>
            
        </tr>
    </tbody>
  </table>  

  <div class="btns">
        <button>Next</button>
        <button>Previous</button>
  </div> 

</div>

</template>

<script>

import axios from 'axios';

export default {
name: "userList",
data(){
    return {
        users:null,
    };
},

created: function(){
    axios.get('https://api.github.com/search/users?q=test&page=1&per_page=10')
    .then((res) => {
    this.users = res.data.items
    console.log(this.users);
    });
  }

};
</script>

<style>

img {
    width:100px;
    border-radius: 50%;
}
</style>