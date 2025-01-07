<template>
  <div id="app">
    <AppHeader 
    logoSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlFIODrEe3m07bEmx195_ebC3dcq5CVWC1Q&s"
    logoAlt="MLB logo"
    />
    <main>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #2c3e50;
}
</style>