<template>   
  <div class="container">
    <h1>Users</h1>
    <form>
    <div class="search" appearance="fill">
      <input v-model="message" placeholder="Enter Username" />
      <button @click.prevent = "Usersearch(message)">
        Search
      </button>        
    </div>
    </form>
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
    <button @click = "Next()">Next</button>
    <button @click = "Back()">Previous</button>
  </div> 

</div>

</template>

<script>

import axios from 'axios';
import router from '../router'

export default {
name: "userList",
data(){
    return {
    users:null,
    search:null,
    message: '',
    page: 1,
    Nextpage:null,
  };
},
    
methods: {
  Usersearch(value){

  if(value === ''){
    alert('Please enter a valid username')
  } else {
  axios.get('https://api.github.com/users/' + value)
  .then((res) => {
  this.search = res.data.login
  router.push('/'+ this.search)
  }).catch(error => {
    alert('User does not exist, please try valid username' || error.response.data.message)      
  });

  }
},


Next(){
  this.page++;
    axios.get('https://api.github.com/search/users?q=test&page=' + this.page +'&per_page=10')
    .then((res) => {
    this.Nextpage = res.data.items;
    this.users = this.Nextpage;
  });
},


Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    axios.get('https://api.github.com/search/users?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data.items;
    this.users = this.Nextpage;
  });

}

},

created: function(){
    axios.get('https://api.github.com/search/users?q=test&page=1&per_page=10')
    .then((res) => {
    this.users = res.data.items
    });
  }

};

</script>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/641d4bfb4247f20fefe7b340/1gs971kgp';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

<style>

img {
  width:100px;
  border-radius: 50%;
}

.search {
  display: flex;
  justify-content: center;
}

input {
  width: 400px;
}

:placeholder-shown{
  font-size: 18px;
  text-align: center;
}

</style>
