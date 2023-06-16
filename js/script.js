console.log('VUE OK', Vue);

//# Creo la pagina VEU
const { createApp } = Vue;

const myApp = createApp({
  data() {
    return {
      text: 'CIAO VUE',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    };
  },
});

//# La monto  in pagina
myApp.mount('#root');
