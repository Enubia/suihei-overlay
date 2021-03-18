<template>
  <div
    v-if="Object.keys(overlayData).length > 0"
    :class="`flex justify-center w-full md:h-40 ${filled ? 'bg-gray-400' : null} border-gray-50`"
    @contextmenu.prevent="openSettings"
  >
    <Encounter :detail="overlayData" />
  </div>
  <div v-else class="inactive w-full" @contextmenu.prevent="openSettings">
    <div class="m-2">
      <span>Awaiting combat data</span>
    </div>
    <div class="m-2">
      <span>Right click anywhere to open settings</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Encounter from '@/components/Encounter.vue';
import { defaultConfig } from '@/helper/config';
import { IACTDetailData } from '@/types';

@Component({
  name: 'Overlay',
  components: {
    Encounter
  }
})
export default class Overlay extends Vue {
  filled = false; // process.env?.NODE_ENV === 'development';

  configWindow: Window | null = null;

  overlayData: IACTDetailData = (window as any).mockData || {};

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
