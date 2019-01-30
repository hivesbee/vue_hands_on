import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 信頼できるグローバル変数
    // 直接アクセスは可能ですが、
    // 地獄を見ることになるので mutations 経由で値を更新してくださいね。
    count: 0
  },
  mutations: {
    // state を変更するところ ( state の変更を commit するところ )
    // ここではすべて同期的に処理してください。
    // 非同期的に書くことはできるのかもしれませんが、
    // 「どのタイミングで値が変更されたか」わかりづらくなります。
    // 非同期処理は actions で書くのがオススメです。
    addCount (state, payload) {
      state.count += payload
    }
  },
  actions: {
    // mutations を呼び出すところ ( mutations を commit するところ )
    addCount ({ commit }, payload) {
      // ここで mutation を呼び出し
      commit('addCount', payload)

      // 例えば、「宛先を登録する」処理を書くとき、
      // 一旦 ajax 処理で登録してから画面に反映したくなるじゃないですか。
      // その時はここで ajax 処理を実行し、成功したら mutation で値を変更するといい感じです。
    }
  }
})
