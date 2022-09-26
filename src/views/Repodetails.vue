<template>
   <div class="container">
    <h1>Repo Details</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Pushed At</th>
          <th>Watchers</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="items in details" :key="items.id">
          <td>{{items.id}}</td>
          <td>{{items.name}}</td>
          <td>{{items.description}}</td>
          <td>{{ formatDate(`${items.created_at}`) }}</td>
          <td>{{ formatDate(`${items.updated_at}`) }}</td>
          <td>{{ formatDate(`${items.pushed_at}`) }}</td>
          <td>{{items.watchers}}</td>
        </tr>
      </tbody>
    </table>

</div>  
</template>

<script>

import axios from 'axios';
import dayjs from 'dayjs';

export default {
name: "repoDetails",
data(){
    return {
        username: this.$route.params.username,
        repo: this.$route.params.repo,
        repodetails: null,
        details: []
 
    };
},

methods: {
  formatDate(dateString) {
  const date = dayjs(dateString);
  return date.format('MMM D, YYYY h:mm A');
  }
},


created: function(){
  axios.get('https://api.github.com/repos/' +this.username+ '/' + this.repo)
    .then((res) => {
    this.repodetails = res.data;
    this.details.push(this.repodetails);
    });
  }

};
</script>