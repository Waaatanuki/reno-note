<script setup lang="ts">
withDefaults(defineProps<{
  value?: number
  rate: number
  offset?: [ number, number ]
  img: string
  isPercent?: boolean
  mask?: boolean
  hidden?: boolean
}>(), {
  value: -1,
  isPercent: true,
  mask: false,
  hidden: false,
  offset: () => [0, 0],
})
</script>

<template>
  <div class="desc-item">
    <el-badge :value="value" :hidden="hidden" type="danger" :max="99999999" :offset="offset">
      <img h-50px :class="{ 'brightness-40': mask }" :src="getOfficialImg(img)">
    </el-badge>
    <div text-xs>
      {{ rate ? isPercent ? `${(rate * 100).toFixed(2)}%` : rate.toFixed(2) : "" }}
    </div>
  </div>
</template>

<style scoped>
.desc-item {
  width: 60px;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
}
</style>
