<template>
  <div class="home">
    <home-header />
    <div class="home__search">
      <div class="home__search-image" @click="onClickSearch"/>
      <input class="home__search-input"
             :placeholder="placeholderValue"
             :text="textValue"
             aria-label="search box"
              />
    </div>
    <item-list :items="items"/>
  </div>
</template>

<script>
import HomeHeader from '@/layout/header/HomeHeader.vue';
import ItemList from '@/views/home/components/ItemList.vue';

export default {
  name: 'Home',
  components: {
    ItemList,
    HomeHeader,
  },
  data() {
    return {
      placeholderValue: '원하는 기능 입력',
      textValue: String,
      items: [
        { title: 'a' }, { title: 'b' },
      ],
    };
  },
  methods: {
    onClickSearch() {
      console.log('?');
    },
  },
};
</script>
<style lang="scss" scoped="scoped">
.home {
  &__search {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    &-image {
      background-image: url("~@/assets/images/search_black_24dp.svg");
      width: 36px;
      height: 36px;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
    &-input {
      font-size: 20px;
      border: none;
      border-bottom: 1px solid black;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
