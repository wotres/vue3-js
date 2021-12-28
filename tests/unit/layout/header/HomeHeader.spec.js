import { shallowMount } from '@vue/test-utils';
import HomeHeader from '@/layout/header/HomeHeader.vue';

describe('HomeHeader spec', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HomeHeader);
  });

  describe('template', () => {
    it('home logo should show', () => {
      expect(wrapper.find('.home-header__button-image').exists()).toBeTruthy();
    });
  });
});
