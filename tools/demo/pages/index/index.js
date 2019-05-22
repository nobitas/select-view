//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      { desc: 'a东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'b东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg', test: 321 },
      { desc: 'c东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'd东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'e东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'f东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'g东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'h东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'i东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'j东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'k东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'l东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'm东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'n东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'o东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'p东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'q东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'r东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 's东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 't东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'u东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'v东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'w东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'x东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'y东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: 'z东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' },
      { desc: '23131dsadaz东城区', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558346785302&di=ea96d24fc0ca229e8437772518f55260&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e28556445a3832f87512f6352b17.jpg%401280w_1l_2o_100sh.jpg' }
    ],
    isShow: false,
    isShow2: false,
    table: [
      { name: 'isShow', type: 'Boolean', need: true, desc: '控制显示' },
      { name: 'data', type: 'Array', need: true, desc: '数据源' },
      { name: 'attr', type: 'String', need: false, desc: '排序的属性，默认label' },
      { name: 'icon', type: 'String', need: false, desc: 'icon的属性' },
      { name: 'selected', type: 'Function', need: false, desc: '选中事件' },
    ],
    code: `
      <select-view data="{{ Array }}" isShow="{{ Boolean }}" bindselected="{{ Function }}"></select-view>
    `
  },
  changeShow () {
    this.setData({ isShow: true });
  },
  changeShow2 () {
    this.setData({ isShow2: true });
  },
  selected (e) {
    console.log('data', e.detail);
    wx.showToast({
      title: e.detail.desc,
      icon: 'success',
      duration: 2000
    });
    this.setData({ isShow: false, isShow2: false });
  }
})
