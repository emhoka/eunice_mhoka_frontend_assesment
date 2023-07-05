<template>
  <div class="font-raleway">
    <MainLayout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from "./components/MainLayout.vue"

@Component({
  components:{
    MainLayout
  }
})
export default class App extends Vue {}
</script>

