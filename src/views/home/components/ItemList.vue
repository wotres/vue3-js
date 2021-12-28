<template>
  <div class="item-list">
    <div v-for="(item, i) in items" :key="i">
      {{i}} : {{item.title}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemList',
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.item-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
