const mutations = {
  /**
   * @method 导航菜单是否折叠起来
   * @param state
   */
  TOGGLE_NAV_COLLAPSE(state: any) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse;
  },
};
export default mutations;
