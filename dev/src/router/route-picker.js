/**
 * Created by Hsiang on 2017/4/21.
 * content相关的路由
 */
export default [
  {
    path: '/basic-picker',
    name: 'basicPicker',
    component (resolve) {
      require(['@/example/picker/basic-picker.vue'], resolve)
    }
  },
  {
    path: '/picker',
    name: 'picker',
    component (resolve) {
      require(['@/example/picker/picker.vue'], resolve)
    }
  },
  {
    path: '/time-picker',
    name: 'timePicker',
    component (resolve) {
      require(['@/example/picker/time-picker.vue'], resolve)
    }
  },
  {
    path: '/city-picker',
    name: 'cityPicker',
    component (resolve) {
      require(['@/example/picker/city-picker.vue'], resolve)
    }
  },
  {
    path: '/datetime-range-picker',
    name: 'datetimeRangePicker',
    component (resolve) {
      require(['@/example/picker/datetime-range-picker.vue'], resolve)
    }
  }
]
