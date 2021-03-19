<template>
  <div
    v-if="combatants && Object.keys(combatants).length > 0"
    class="md:flex w-full combatant opacity-80"
  >
    <div
      v-for="item of Object.keys(combatants)"
      :key="item"
      :style="'order: ' + combatants[item].rank"
      class="md:w-full mr-1 ml-1"
    >
      <div class="w-full">
        <div class="flex md:justify-center -mb-4 md:-mb-0 text-xs relative">
          <img
            :src="require(`../assets/images/${combatants[item].Job.toLowerCase()}.png`)"
            :alt="combatants[item].Job.toLowerCase()"
            class="w-4"
          />
          <span class="ml-2 truncate">{{ item }}</span>
        </div>
        <div class="damage-values flex justify-center h-10 md:h-7 text-sm">
          <div
            :class="`sm:w-2/3 w-1/2 flex items-center justify-end pr-4 md:pr-0 md:justify-center h-1/2 md:h-full bg-${combatants[
              item
            ].Job.toLowerCase()}-light`"
          >
            <span class="ml-2">HPS: {{ combatants[item].ENCHPS }}</span>
          </div>
          <div
            :class="`w-1/2 flex items-center justify-center h-1/2 md:h-full bg-${combatants[
              item
            ].Job.toLowerCase()}`"
          >
            <span class="mr-2">DPS: {{ combatants[item].ENCDPS }}</span>
          </div>
        </div>
        <div class="text-righ text-xxs -mt-5 md:mt-0">
          <div class="damage-percent-background">
            <div
              class="damage-percent-foreground"
              :style="`width: ${combatants[item]['damage%'].slice(
                0,
                combatants[item]['damage%'].length - 1
              )}%`"
            />
          </div>
          <span class="flex justify-end pr-3">
            {{ combatants[item]['damage%'] }}
          </span>
        </div>
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
}
</script>

<style lang="scss" scoped>
.combatant {
  min-width: 435px;
  text-shadow: #fc0 1px 0 10px;

  .damage-values {
    text-shadow: none;
  }
  .damage-percent-background {
    height: 3px;
    widows: 100%;
    background: theme('colors.gray.200');

    .damage-percent-foreground {
      height: 3px;
      background: #fc0;
    }
  }
}
</style>
