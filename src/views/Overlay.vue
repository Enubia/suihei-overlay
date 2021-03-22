<template>
  <div
    v-if="Object.keys(overlayData).length > 0"
    class="flex justify-center w-full lg:h-auto pt-1 pb-1 overlay-background"
    @contextmenu.prevent="openSettings"
  >
    <Encounter :detail="overlayData" />
  </div>
  <div
    v-else
    class="inactive w-full overlay-background text-sm"
    @contextmenu.prevent="openSettings"
  >
    <div>Awaiting combat data</div>
    <div>Right click anywhere to open settings</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Encounter from '@/components/Encounter.vue';
import { defaultConfig } from '@/helper/config';
import { IACTDetailData, ICombatant } from '@/types';

@Component({
  name: 'Overlay',
  components: {
    Encounter
  }
})
export default class Overlay extends Vue {
  configWindow: Window | null = null;

  overlayData = {} as IACTDetailData;

  created() {
    document.addEventListener('onOverlayDataUpdate', (event: any) => {
      const combatants = this.sortCombatants(event);
      this.overlayData = { ...event.detail, Combatant: combatants };
    });

    document.addEventListener('onOverlayStateUpdate', (event: any) => {
      if (event.detail.isLocked) {
        document.documentElement.classList.remove('resizable');
      } else {
        document.documentElement.classList.add('resizable');
      }
    });
  }

  private sortCombatants(event: any): { [p: string]: ICombatant } {
    const order = Object.keys(event.detail.Combatant).sort(
      (a, b) => event.detail.Combatant[a].rank - event.detail.Combatant[b].rank
    );

    const ordered = {
      ...order.map((item) => ({
        [item]: event.detail.Combatant[item]
      }))
    };

    const data: any = {};

    Object.entries(ordered).forEach((entry) => {
      const name = Object.keys(entry[1])[0];
      data[name] = (entry[1] as any)[name];
    });

    return data;
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

<style lang="scss" scoped>
.inactive {
  color: rgba(79, 84, 90, 0.164);
}

.overlay-background {
  background-color: rgba(27, 40, 53, 0.164);
}
</style>
