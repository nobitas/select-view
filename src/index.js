import firstStore from './firstChineseLetter';

const Static = {
  list: [],
  timer: null
}

Component({
  properties: {
    isShow: { type: Boolean, value: false },
    data: { type: Array, value: [],  },
    attr: { type: String, value: 'label' },
    icon: { type: String, value: false }
    // bindselected 选中事件
  },
  data: {
    list: [], // 页面展示的列表
    scrollIntoView: '',
    subNavHint: false,
    search: ''
  },
  lifetimes: {
    attached () {
      this.init();
    }
  },
  observers: {
    'data, attr, icon' (data, attr) {
      this.init();
    }
  },
  methods: {
    // 初始/重置数据
    init () {
      const { data, attr } = this.properties;

      let changeData = [], // 转换后的数据
        inChangeData = {};
      data.map(v => {
        let firstLetter = this.getFirstLetter(v[attr]); // 获取首字母拼音
        // 获取的首字母进行切割对比
        firstLetter.split('').map(str => {
          if (str in inChangeData) {
            // 有首字母相同的项
            changeData[inChangeData[str]].list.push(v);
          } else {
            // 没有首字母相同的项
            changeData.push({ firstLetter: str, list: [v] });
            inChangeData[str] = changeData.length - 1;
          }
        });
      });
      // 对乱序的数组进行排序
      changeData.sort((pre, next) => pre.firstLetter < next.firstLetter ? -1 : 1);
      // 若存在“#”项，将位置位移至底部
      if (changeData[0].firstLetter === '#') {
        const firstArr = changeData.splice(0, 1);
        changeData = [...changeData, ...firstArr];
      }

      this.setData({ list: changeData });
      Static.list = changeData;
    },
    // 获取首字母拼音
    getFirstLetter (val) {
      const firstVal = val.charAt(0);
      if (/.*[\u4e00-\u9fa5]+.*/.test(firstVal)) {
        // 中文
        const code = firstVal.charCodeAt(0);
        return code in firstStore.oMultiDiff ? firstStore.oMultiDiff[code] : firstStore.firstLetterMap.charAt(code - 19968);
      } else {
        // 非中文
        return /^[a-zA-Z]+$/.test(firstVal) ? firstVal.toUpperCase() : '#';
      }
    },
    subTouchStart () {
      this.setData({ subNavHint: true, scrollIntoView: '' });
    },
    subTouchEnd () {
      this.setData({ subNavHint: false });
    },
    subTouchMove (e) {
      let { timer } = Static;
      if (timer === null) {
        Static.timer = setTimeout(() => {
          const query = this.createSelectorQuery();
          query.select('#subNav').boundingClientRect();
          query.selectViewport().scrollOffset();
          query.exec(res => {
            const { clientY } = e.touches[0]; // Y轴的位置
            const DomTop = res[0].top; // 导航元素距离顶部的位置
            const { list } = this.data;
            // 计算索引
            let index = Math.round((clientY - DomTop) / 20);
            index = index >= list.length ? list.length - 1 : index; // 限制索引大于0
            index = index < 0 ? 0 : index; // 限制索引小于0
            // 限制结果重复赋值
            if (list[index].firstLetter !== this.data.scrollIntoView) {
              this.setData({ scrollIntoView: list[index].firstLetter });
              wx.vibrateShort();
            }
          });
          Static.timer = null;
        }, 50); // 定时触发
      }
    },
    searchData (e) {
      const { value } = e.detail;
      const { list } = Static;
      const { attr } = this.properties;
      let result = [], tem = {};
      // 没有搜索内容，返回全部内容
      if (value.length === 0) { this.setData({ list: Static.list }); return; }

      // 检索搜索内容
      list.map(v => {
        const searchList = v.list.filter(v => v[attr].indexOf(value) !== -1);
        if (searchList.length > 0) {
          if (v.firstLetter in tem) {
            const _list = result[tem[v.firstLetter]].lish;
            result[tem[v.firstLetter]].lish = [..._list, ...searchList];
          } else {
            result.push({ firstLetter: v.firstLetter, list: [...searchList] });
            tem[v.firstLetter] = result.length - 1;
          }
        }
      });
      this.setData({ list: result, search: value });
    },
    selectItem(e) {
      const { item } = e.currentTarget.dataset;
      this.triggerEvent('selected', item);
      this.setData({ list: Static.list, search: '' });
    }
  }
});