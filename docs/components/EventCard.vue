<script setup lang="ts">
interface Event {
  value: string
  title: string
  date: string[]
  user: number
  cow: {
    total: number
    gold: number
    meat: number
    summon: number
    weapon: number
  }
  swarm?: {
    total: number
    meat: number
    summon: number
    weapon: number
  }
  quest: {
    questId: string
    questName: string
    celestialWeapon: number
    revenantWeapon: number
    bigMeat?: number
    total: number
  }[]
}

const { event } = defineProps<{ event: Event }>()
</script>

<template>
  <el-card shrink-0 style="width: 500px;" :body-style="{ padding: '10px' }">
    <template #header>
      <div flex items-center justify-between>
        <div flex flex-col items-start>
          <div>{{ event.date.join('至') }}</div>
        </div>
        <div>统计玩家：{{ event.user }}</div>
      </div>
    </template>

    <div my-10px fc flex-wrap gap-10px>
      <QuestCard quest-image="/sp/quest/assets/2040070000_ex_plus.png" :total="event.cow.total">
        <div w-350px fc gap-10>
          <ItemStatistic img="/sp/assets/item/article/s/10116.jpg" hidden :is-percent="false" :value="event.cow.meat" :rate="event.cow.meat / event.cow.total" />
          <!-- <ItemStatistic img="/sp/assets/summon/qm/teamraid_ex_plus_golden.png" hidden :value="event.cow.gold" :rate="event.cow.gold / event.cow.total" /> -->
          <ItemStatistic img="/sp/assets/summon/s/2040022000.jpg" hidden :value="event.cow.summon" :rate="event.cow.summon / event.cow.total" />
          <ItemStatistic img="/sp/assets/weapon/s/1040001800.jpg" :value="event.cow.weapon" :rate="event.cow.weapon / event.cow.total" />
        </div>
      </QuestCard>
      <QuestCard v-if="event.swarm" quest-image="/sp/quest/assets/2040070000_swarm.png" :total="event.swarm.total">
        <div w-350px fc gap-10>
          <ItemStatistic img="/sp/assets/item/article/s/10116.jpg" hidden :is-percent="false" :value="event.swarm.meat" :rate="event.swarm.meat / event.swarm.total" />
          <ItemStatistic img="/sp/assets/summon/s/2040022000.jpg" hidden :value="event.swarm.summon" :rate="event.swarm.summon / event.swarm.total" />
          <ItemStatistic img="/sp/assets/weapon/s/1040001800.jpg" :value="event.swarm.weapon" :rate="event.swarm.weapon / event.swarm.total" />
        </div>
      </QuestCard>
      <template v-for="quest in event.quest" :key="quest.questId">
        <QuestCard :quest-image="`/sp/assets/summon/qm/${event.value}_${quest.questName}.png`" :total="quest.total">
          <div w-350px fc gap-10>
            <ItemStatistic img="/sp/assets/weapon/s/1040025400.jpg" :value="quest.celestialWeapon" :rate="quest.celestialWeapon / quest.total" />
            <ItemStatistic img="/sp/assets/weapon/s/1040001800.jpg" :value="quest.revenantWeapon" :rate="quest.revenantWeapon / quest.total" />
            <ItemStatistic
              v-if="quest.bigMeat !== undefined" :mask="quest.questName.includes('250')" img="/sp/assets/item/article/s/10551.jpg"
              :value="quest.bigMeat" :rate="quest.bigMeat / quest.total" :is-percent="false" hidden
            />
          </div>
        </QuestCard>
      </template>
    </div>
  </el-card>
</template>
