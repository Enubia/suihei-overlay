<template>
  <div class="w-full">
    <Combatants :combatants="detail.Combatant" />
    <div id="footer" class="flex w-full pr-1 pl-1 text-xs">
      <div class="flex w-full justify-start">Duration: {{ detail.Encounter.duration }}</div>
      <div class="flex w-full justify-center">{{ detail.Encounter.CurrentZoneName }}</div>
      <div class="flex w-full justify-end">Total DPS: {{ detail.Encounter.encdps }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Combatants from '@/components/Combatants.vue';
import { IACTDetailData } from '@/types';

@Component({
  name: 'Encounter',
  components: {
    Combatants
  }
})
export default class Encounter extends Vue {
  @Prop() private readonly detail!: IACTDetailData;
}
</script>

<style lang="scss" scoped>
#footer {
  text-shadow: #fc0 1px 0 10px;
}
</style>
