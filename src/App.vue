<template>
  <div id="app">
    <div class="bg bg-1"></div> 
    <v-header></v-header>
    <keep-alive><router-view></router-view></keep-alive>
    <footers></footers>
  </div>
</template>

<script type="text/ecmascript-6">
import headers from './components/fronted/headers'
import footers from './components/fronted/footers'

export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  components:{
    'v-header': headers,
    footers
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  list-style: none;
}
a {
  color: #42b983;
}
a{
    text-decoration: none;
    cursor: pointer;
}
a:hover,
a:focus{
    color: #c769ad;
}
img {
  border: none;
}
.bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: -1;
    -ms-filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/pic2.jpg', sizingMethod='scale')";
    filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/pic2.jpg', sizingMethod='scale');
    filter:blur(3px);
}
.bg-1 {
    background-color: #f1e3f5;
}
/*旋转*/
.title-rotate {
    -webkit-transition: -webkit-transform 2s;
}
.title-rotate:hover{
    -webkit-transform :rotate(360deg);
}

</style>
