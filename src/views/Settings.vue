<template>
  <div class="bg-yellow-100 settings">
    <h1 class="text-3xl">Settings page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Settings'
})
export default class Settings extends Vue {
  created() {
    console.log(this.$router.currentRoute);
  }
}
</script>
