/**
 * 使用Vuex管理应用状态
 * 目前的规模其实没必要使用
 * 正式上线的时候，考虑去除这种实现
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 中间标题描述信息
  brand: {
    title: 'OBSIDIAN',
    description: 'THE WORDPRESS MUSIC THEME',
    link: '#'
  },

  menus: [{
    name: '腰乐队',
    link: '#'
  }, {
    name: '李志',
    link: '#'
  }, {
    name: 'Joan Baez',
    link: '#'
  }, {
    name: '声音玩具',
    link: '#'
  }, {
    name: 'Uncle Cracker',
    link: '#'
  }]
}

const mutations = {
  // 更新网站整体信息
  changeMusicPage (state, amount) {
    state.count = state.count + amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
