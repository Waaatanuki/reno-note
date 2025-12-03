<script setup lang="ts">
defineProps<{ questImage: string, total: number, msg?: string }>()
</script>

<template>
  <ElCard :body-style="{ padding: '15px' }">
    <div flex items-center justify-start text-sm>
      <div mr-15px w-100px fc shrink-0 flex-col>
        <img w-100px :src="getQuestImg(questImage)">
        <div mt-2px fc gap-2px>
          <div i-game-icons:crossed-swords />
          <div text-orange>
            {{ total.toLocaleString() }}
          </div>
          <div i-game-icons:crossed-swords />
        </div>
      </div>
      <div h-90px fc flex-col gap-3>
        <slot />
        <div text-center text-xs text-gray>
          {{ msg }}
        </div>
      </div>
    </div>
  </ElCard>
</template>
