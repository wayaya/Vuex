<template>
  <div class="hello">
    <fieldset>
      <legend>同步操作:{{$store.state.count}}</legend>
      <div>
        <button @click="handleAddClick(10);">增加</button>
        <button @click="handleReduceClick(5);">减少</button>
      </div>
    </fieldset>

    <fieldset>
      <legend>异步操作:{{$store.state.count}}</legend>
      <div>
        <button @click="handleActionsAdd(10);">增加</button>
        <button @click="handleActionsReduce(5);">减少</button>
      </div>
    </fieldset>

    <div>xx:{{count}}</div>

  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
  // 以下语句可以自动映射存储以及函数
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      ...mapMutations({
        handleAddClick: 'mutationsAddCount',
        handleReduceClick: 'mutationsReduceCount'
      }),
      ...mapActions({
        handleActionsAdd: 'actionsAddCount',
        handleActionsReduce: 'actionsReduceCount'
      }),
      /*
      handleAddClick(n) {
        this.$store.commit('mutationsAddCount', n);
      },
      handleReduceClick(n) {
        this.$store.commit('mutationsReduceCount', n);
      },
      handleActionsAdd(n) {
        this.$store.dispatch('actionsAddCount', n);
      },
      handleActionsReduce(n) {
        this.$store.dispatch('actionsReduceCount', n);
      },
      // */
    },
    computed: {
      count() {
        return this.$store.getters.getterCount;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
