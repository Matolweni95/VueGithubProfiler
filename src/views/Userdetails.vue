<template>
  <h1>User Details</h1>
    <div class="container mt-5">
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
          <tr>
            <th scope="col">Username</th>
            <th scope="col"><button >Followers<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button></th>
            <th scope="col"><button >Following<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button></th>
            <th scope="col"><button >Repo #<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button></th>
            <th scope="col"><button >Gists #<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg></button></th>
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
    console.log(this.detailArray);
    });
  }

};
</script>