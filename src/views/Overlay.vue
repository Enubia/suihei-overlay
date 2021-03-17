<template>
  <div
    v-if="Object.keys(overlayData).length > 0"
    class="flex justify-center w-full"
    @contextmenu.prevent="openSettings"
  >
    {{ overlayData }}
  </div>
  <div v-else class="flex justify-center inactive w-full" @contextmenu.prevent="openSettings">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { defaultConfig } from '@/helper/config';

@Component({
  name: 'Overlay',
  components: {}
})
export default class Overlay extends Vue {
  configWindow: Window | null = null;

  overlayData = {};

  isLocked: boolean = false;

  created() {
    document.addEventListener('onOverlayDataUpdate', (event: any) => {
      this.overlayData = event.detail;
    });

    document.addEventListener('onOverlayStateUpdate', (event: any) => {
      if (event.detail.isLocked) {
        document.documentElement.classList.remove('resizable');
      } else {
        document.documentElement.classList.add('resizable');
      }
    });
  }

  openSettings() {
    const storedConfig = localStorage.getItem('suihei-overlay');
    let config = defaultConfig;

    if (storedConfig) {
      config = JSON.parse(storedConfig);
    }

    const { offsetWidth, offsetHeight } = config;
    const windowFeatures = `menubar=no,location=no,resizable=no,scrollbars=yes,status=no,width=${
      offsetWidth || 700
    },height=${offsetHeight || 400}`;
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
