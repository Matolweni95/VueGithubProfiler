<template>
    <div class="container">
    <h1>Gists</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th class="desc">Discription</th>
          <th>Created At</th>
          <th>Updated at</th>
          <th>Comments</th>
        </tr>
        </thead>
          <tbody>
            <tr v-for="items in gists" :key="items.id">
                <td>{{items.id}}</td>
                <td>{{items.description}}</td>
                <td>{{ formatDate(`${items.created_at}`) }}</td>
                <td>{{ formatDate(`${items.updated_at}`) }}</td>
                <td>{{items.comments}}</td>
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
name: "userList",
data(){
    return {
        username: this.$route.params.username,
        gists:null,
        page: 1,
        Nextpage:null,
    };
},

methods: {

  Next() {
    this.page++;
    console.log(this.page)
    axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.gists = this.Nextpage;
    console.log(this.Nextpage);
    });
  },

  formatDate(dateString) {
    const date = dayjs(dateString);
    // Then specify how you want your dates to be formatted
    return date.format('MMM D, YYYY h:mm A');
  },

  Back(){
    this.page--;
    if (this.page <= 0){
      this.page = 1;
    }
    
    axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.Nextpage = res.data;
    this.gists = this.Nextpage;
    console.log(this.Nextpage);
    });
    console.log(this.page)
  }
},

created: function(){
   axios.get('https://api.github.com/users/' + this.username + '/gists?q=test&page=' + this.page + '&per_page=10')
    .then((res) => {
    this.gists = res.data;
    console.log(this.gists);
    });
  }

};
</script>

<style>
  .desc{
    width: 300px;
  }
</style>