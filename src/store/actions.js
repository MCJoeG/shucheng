const actions = {
  // setTest: ({commit, state}, newTest) => {
  //   console.log(state.test, newTest)
  // }
  setFileName: ({commit}, fileName) => {
    return commit('SET_FILENAME', fileName)
  }
}
export default actions
