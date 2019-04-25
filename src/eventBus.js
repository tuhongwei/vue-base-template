/**
 *清除事件总线
 */
class EventBus {
  constructor (vue) {
    if (!this.handles) {
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false
      });
    }
    this.Vue = vue;
    // _uid和EventName的映射
    this.eventMapUid = {};
  }
  setEventMapUid (uid, eventName) {
    if (!this.eventMapUid[uid]) {
      this.eventMapUid[uid] = [];
    }
    this.eventMapUid[uid].push(eventName);
  }
  $on (eventName, callback, vm) {
    // vm是在组件内部使用时组件当前的this用于取_uid
    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
    if (vm instanceof this.Vue) {
      this.setEventMapUid(vm._uid, eventName);
    }
  }
  $emit () {
    let args = [...arguments];
    let eventName = args[0];
    let params = args.slice(1);
    if (this.handles[eventName] && this.handles[eventName].length) {
      this.handles[eventName].forEach(callback => {
        callback(...params);
      });
    }
  }
  $offVmEvent (uid) {
    if (this.eventMapUid[uid] && this.eventMapUid[uid].length) {
      this.eventMapUid[uid].forEach(eventName => {
        this.$off(eventName);
      });
    }
  }
  $off (eventName) {
    delete this.handles[eventName];
  }
}

// 写成Vue插件形式，直接引入然后Vue.use($EventBus)进行使用
let $EventBus = {};
$EventBus.install = (Vue, option) => {
  Vue.prototype.$EventBus = new EventBus(Vue);
  Vue.mixin({
    beforeDestroy () {
      this.$EventBus.$offVmEvent(this._uid);
    }
  });
};
export default $EventBus;
