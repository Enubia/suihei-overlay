<template>
  <div class="flex">
    <div v-for="item of Object.keys(combatants)" :key="item" class="w-full">
      <div>
        {{ combatants[item].Job }}
      </div>
      <div>
        {{ combatants[item].ENCDPS }}
      </div>
      <div>
        {{ combatants[item]['damage%'] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ICombatant } from '@/types';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Combatants'
})
export default class Combatants extends Vue {
  @Prop() private readonly combatants!: { [p: string]: ICombatant };

  created() {
    console.log(this.combatants);
  }
}
</script>

<style lang="scss" scoped></style>
