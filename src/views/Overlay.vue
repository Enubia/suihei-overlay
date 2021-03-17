<template>
  <div class="flex justify-center bg-gray-200 w-full" @contextmenu.prevent="openSettings">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Overlay',
  components: {}
})
export default class Overlay extends Vue {
  configWindow: Window | null = null;

  openSettings() {
    const windowFeatures = `menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=700,height=400`;
    const settingsPath =
      process.env.NODE_ENV === 'development' ? './suihei-overlay/#/settings' : './#/settings';
    this.configWindow = window.open(settingsPath, 'Suihei Config', windowFeatures);
    if (this.configWindow) {
      this.configWindow.focus();
      this.configWindow.onbeforeunload = () => {
        this.configWindow = null;
      };
    }
  }
}
</script>

<style lang="scss" scoped></style>
