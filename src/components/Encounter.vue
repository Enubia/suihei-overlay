<template>
  <div class="w-full">
    <Combatants :combatants="detail.Combatant" />
    <div id="footer" class="flex justify-end pr-3">
      <span>Total DPS: {{ detail.Encounter.encdps }}</span>
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
