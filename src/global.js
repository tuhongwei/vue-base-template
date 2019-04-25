import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import './assets/css/common.css';
import './components/global';

import EventBus from './eventBus';

import { Table, Select, Message } from 'element-ui';
Vue.use(EventBus);
Vue.component(Table.name, Table);
Vue.component(Select.name, Select);
Vue.prototype.$Message = Message;
Vue.prototype.$Message({ duration: 1 });
