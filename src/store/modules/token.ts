let loginToken: Object

export default loginToken = {
  // namespace: true,

  // state 状态
  // 获取 token 状态   state（设置数据，对象）
  state: {
    token: localStorage.getItem('token') || ''
  },

  // Mutations 突变 注册 状态改变事件
  // 创建 token 
  mutations: {
    setToken(state: any, token: any) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },

  // Actions 行动 提交突变事件
  actions: {
    actToken({ commit }: any, user: any) {
      commit('setToken', user)

      // console.log(user.name);

      console.log("actions");
    }
  }
  // actions: {
  //   actToken(context: any, user: any) {
  //     context.commit('setToken', user)
  //   }
  // }
}
