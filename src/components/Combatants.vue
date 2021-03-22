<template>
  <div
    v-if="combatants && Object.keys(combatants).length > 0"
    class="lg:flex w-full combatant opacity-90"
  >
    <div
      v-for="item of Object.keys(combatants)"
      :key="item"
      :style="'order: ' + combatants[item].rank"
      class="lg:w-full mr-1 ml-1"
    >
      <div class="w-full">
        <div class="flex lg:justify-center relative z-50 -mb-5 lg:-mb-0 text-xs">
          <img
            :src="require(`../assets/images/${combatants[item].Job.toLowerCase()}.png`)"
            :alt="combatants[item].Job.toLowerCase()"
            class="w-4"
          />
          <span class="ml-2 truncate">{{ item }}</span>
        </div>
        <div class="damage-values flex justify-center pt-1 lg:pt-0 h-10 lg:h-8 text-xs">
          <div
            :class="`w-full flex items-center justify-end h-1/2 text-xs lg:h-full bg-${combatants[
              item
            ].Job.toLowerCase()}`"
          >
            <table class="hidden lg:table w-full">
              <th class="font-medium">DPS:</th>
              <th class="flex justify-center font-medium">
                <div class="w-1/2">Crit</div>
                <div class="w-1/2">DH</div>
              </th>
              <th class="font-medium">!!!</th>
              <tr>
                <td class="w-2/4">
                  {{ combatants[item].ENCDPS }}
                </td>
                <td class="flex justify-center">
                  <div class="w-1/2">
                    {{ combatants[item]['crithit%'] }}
                  </div>
                  <div class="w-1/2">
                    {{ combatants[item].DirectHitPct }}
                  </div>
                </td>
                <td>
                  {{ combatants[item].CritDirectHitPct }}
                </td>
              </tr>
            </table>
            <div class="lg:hidden flex w-2/3 lg:w-full text-xs">
              <div class="w-2/4 flex justify-center">DPS: {{ combatants[item].ENCDPS }}</div>
              <div class="w-2/4 flex justify-center">
                <div class="w-full flex justify-center">
                  <div class="w-1/3 flex justify-end">Crit {{ combatants[item]['crithit%'] }}</div>
                  <div class="w-1/3 flex justify-end">DH {{ combatants[item].DirectHitPct }}</div>
                  <div class="w-1/3 flex justify-end mr-1">
                    !!! {{ combatants[item].CritDirectHitPct }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-xxs -mt-5 lg:mt-0">
          <div class="damage-percent-background">
            <div
              class="damage-percent-foreground"
              :style="`width: ${combatants[item]['damage%'].slice(
                0,
                combatants[item]['damage%'].length - 1
              )}%`"
            />
          </div>
          <div class="flex pr-1">
            <div class="flex w-full justify-start">{{ combatants[item]['damage%'] }}</div>
            <div class="flex w-full justify-end">
              <div class="ml-2">HPS: {{ combatants[item].ENCHPS }}</div>
              <div class="ml-2">
                Deaths:
                <span :class="combatants[item].deaths > 0 ? 'text-red-400 font-bold' : null">{{
                  combatants[item].deaths
                }}</span>
              </div>
            </div>
          </div>
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
  min-width: 300px;

  .damage-values {
    text-shadow: none;
  }

  .damage-percent-background {
    width: 100%;
    background: theme('colors.gray.200');

    .damage-percent-foreground {
      height: 3px;
      background: #fc0;
    }
  }
}
</style>
