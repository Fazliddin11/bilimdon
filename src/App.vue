<template>
  <v-app>
    <newmain/>
  </v-app>
</template>

<script>
import newmain from './views/newmain'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    newmain
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: 'robota-m';
  src: url(assets/font/Roboto-Medium.ttf);
}
*{
  font-family: robota-m;
}
:root{
  --blue: #1A237E;
  --high--blue:#000051;
  --green: #009624;
  --pink: #534BAE;
  --high--pink: #524AAC;
}
body{
  background: var(--blue);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /*background-image: url("./assets/b.jpg");*/
  /*background: #102626;*/
}

button {
  cursor: pointer;
}

.theme--light.v-application {
  background: unset !important;
}

input,
button {
  &:focus {
    outline: 0;
  }
}
.theme--light.v-application{
  background: #f1f1f1 !important;
}

</style>
