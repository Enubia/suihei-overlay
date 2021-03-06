export interface ICombatant {
  n: string;
  t: string;
  rank: number;
  name: string;
  duration: string;
  DURATION: number;
  damage: number;
  'damage-m': number;
  'damage-b': number;
  'damage-*': string;
  'DAMAGE-k': number;
  'DAMAGE-m': number;
  'DAMAGE-b': number;
  'DAMAGE-*': string;
  'damage%': string;
  dps: number;
  'dps-*': string;
  DPS: number;
  'DPS-k': number;
  'DPS-m': number;
  'DPS-*': number;
  encdps: number;
  'encdps-*': string;
  ENCDPS: number;
  'ENCDPS-k': number;
  'ENCDPS-m': number;
  'ENCDPS-*': number;
  hits: number;
  crithits: number;
  'crithit%': string;
  crittypes: string;
  misses: number;
  hitfailed: number;
  swings: number;
  tohit: number;
  TOHIT: number;
  maxhit: string;
  MAXHIT: number;
  'maxhit-*': string;
  'MAXHIT-*': number;
  healed: number;
  'healed%': string;
  enchps: number;
  'enchps-*': number;
  ENCHPS: number;
  'ENCHPS-k': number;
  'ENCHPS-m': number;
  'ENCHPS-*': number;
  critheals: number;
  'critheal%': string;
  heals: number;
  cures: number;
  maxheal: string;
  MAXHEAL: string;
  maxhealward: string;
  MAXHEALWARD: string;
  'maxheal-*': string;
  'MAXHEAL-*': string;
  'maxhealward-*': string;
  'MAXHEALWARD-*': string;
  damagetaken: number;
  'damagetaken-*': number;
  healstaken: number;
  'healstaken-*': number;
  powerdrain: number;
  'powerdrain-*': number;
  powerheal: number;
  'powerheal-*': number;
  kills: number;
  deaths: number;
  threatstr: string;
  threatdelta: number;
  Last10DPS: number;
  Last30DPS: number;
  Last60DPS: number;
  Job: string;
  ParryPct: string;
  BlockPct: string;
  IncToHit: string;
  OverHealPct: string;
  DirectHitPct: string;
  DirectHitCount: number;
  CritDirectHitCount: number;
  CritDirectHitPct: string;
  overHeal: number;
  damageShield: number;
  absorbHeal: number;
}

export interface IEncounter {
  n: string;
  t: string;
  title: string;
  duration: string;
  DURATION: number;
  damage: number;
  'damage-m': number;
  'damage-*': string;
  'DAMAGE-k': number;
  'DAMAGE-m': number;
  'DAMAGE-b': number;
  'DAMAGE-*': string;
  dps: number;
  'dps-*': string;
  DPS: number;
  'DPS-k': number;
  'DPS-m': string;
  'DPS-*': number;
  encdps: number;
  'encdps-*': string;
  ENCDPS: number;
  'ENCDPS-k': number;
  'ENCDPS-m': number;
  'ENCDPS-*': number;
  hits: number;
  crithits: number;
  'crithit%': string;
  misses: number;
  hitfailed: number;
  swings: number;
  tohit: number;
  TOHIT: number;
  maxhit: string;
  MAXHIT: string;
  'maxhit-*': string;
  'MAXHIT-*': string;
  healed: number;
  enchps: number;
  'enchps-*': number;
  ENCHPS: number;
  'ENCHPS-k': number;
  'ENCHPS-m': number;
  'ENCHPS-*': number;
  heals: number;
  critheals: number;
  'critheal%': string;
  cures: number;
  maxheal: string;
  MAXHEAL: string;
  maxhealward: string;
  MAXHEALWARD: string;
  'maxheal-*': string;
  'MAXHEAL-*': string;
  'maxhealward-*': string;
  'MAXHEALWARD-*': string;
  damagetaken: number;
  'damagetaken-*': number;
  healstaken: number;
  'healstaken-*': number;
  powerdrain: number;
  'powerdrain-*': number;
  powerheal: number;
  'powerheal-*': number;
  kills: number;
  deaths: number;
  CurrentZoneName: string;
  Last10DPS: number;
  Last30DPS: number;
  Last60DPS: number;
}

export interface IACTDetailData {
  type: string;
  Encounter: IEncounter;
  Combatant: {
    [p: string]: ICombatant;
  };
  isActive: boolean;
}
