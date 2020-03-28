import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // 启用插件

// 定义状态常量
const state = {
  count: 0
};

/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */
const mutations = {
  mutationsAddCount(state, n = 0) {
    return (state.count += n);
  },
  mutationsReduceCount(state, n = 0) {
    return (state.count -= n);
  }
};

/**
 * 业务行为,异步操作
 */
const actions = {
  actionsAddCount(context, n = 0) {
    console.log(context);
    return context.commit('mutationsAddCount', n);
  },
  actionsReduceCount({commit}, n = 0) {
    return commit('mutationsReduceCount', n);
  }
};

/**
 * 运算器
 */
const getters = {
  getterCount(state) {
    // 可以添加计算逻辑
    return (state.count + 3);
  }
};

// 导出构建的状态管理对象
export default new Vuex.Store({
  state, // 存储
  mutations, // 操作 直接操作
  actions, // 业务 异步操作
  getters // 运算
});
