<template>
    <div class="container mt-5">
    <h1>User Details</h1>
        <div class="avatar d-flex justify-content-center" v-for="items in detailArray" :key="items.id">
            <div class="avatar-container d-flex flex-column">
                <img class="avatar-hero" :src="items.avatar_url">
                <div class="info">
                    <p>{{items.name}}</p>
                    <p>{{items.bio}}</p>
                    <p>{{items.location}}</p>
                </div>
            </div>
        </div>
        <table class="table mt-5">
          <thead>
          <tr v-for="item in detailArray" :key="item.id" >
            <th>Username</th>
            <th><router-link :to="`${item.login}/followers`"><button>Followers</button></router-link></th>
            <th><router-link :to="`${item.login}/following`"><button>Following</button></router-link></th>
            <th><router-link :to="`${item.login}/repos`"><button>Repo</button></router-link></th>
            <th><router-link :to="`${item.login}/gists`"><button>Gists</button></router-link></th>
          </tr>
          </thead>
          <tbody >
            <tr v-for="items in detailArray" :key="items.id">
                <td>{{items.login}}</td>
                <td>{{items.followers}}</td>
                <td>{{items.following}}</td>
                <td>{{items.public_repos}}</td>
                <td>{{items.public_gists}}</td>
               
            </tr>
        </tbody>
      </table>   
            
    </div>    
    
</template>

<script>

import axios from 'axios';

export default {
name: "userDetails",
data(){
    return {
        username: this.$route.params.username,
        user_details:null,
        detailArray:[],
    };
},


created: function(){
   axios.get('https://api.github.com/users/' + this.username)
    .then((res) => {
    this.user_details = res.data;
    this.detailArray.push(this.user_details)
    });
  }

};
</script>
<style>

.avatar-hero {
  width:200px;
}

p {
  font-size: 25px;
}
</style>