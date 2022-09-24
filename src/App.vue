<template>
  <router-view></router-view>
</template>

<script>

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  Justify-content: center;
}

*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body{
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  background: rgba( 71, 147, 227, 1);
  margin-bottom: 50px
}

h2{
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  padding: 30px 0;
}

/* Table Styles */

table{
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

table {
  border-radius: 5px;
  font-size: 12px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 1200px;
  max-width: 100%;
  white-space: wrap;
  background-color: white;
}

table td, table th {
  text-align: center;
  padding: 25px;
}

table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
}


thead th {
  color: #ffffff;
  background: #324960;
}

button {
  border: none;
  padding: 9px;
  width: 150px;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 0 40px 40px #4FC3A1 inset, 0 0 0 0 #4FC3A1;
 
}

.btns {
  display: flex;
  justify-content: center;
  gap:50px;
}
</style>
