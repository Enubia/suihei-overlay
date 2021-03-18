<template>
  <div class="w-full">
    <Combatants :combatants="detail.Combatant" />
    <div>
      <span>Total DPS: </span>
      <span>{{ detail.Encounter.encdps }}</span>
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

<style lang="scss" scoped></style>
