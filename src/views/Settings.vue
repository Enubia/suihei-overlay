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
  refreshScrollableArea: any;

  created() {
    window.addEventListener('resize', this.setWindowSize);
  }

  destroyed() {
    window.removeEventListener('resize', this.setWindowSize);
  }

  setWindowSize(event: Event) {
    event.preventDefault();

    setTimeout(() => {
      const { offsetWidth, offsetHeight } = document.querySelector('#app') as any;
      localStorage.setItem('suihei-overlay', JSON.stringify({ offsetWidth, offsetHeight }));
    }, 300);
  }
}
</script>
