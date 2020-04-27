import Vue from 'vue';
import Skeleton2 from './Skeleton2';

export default new Vue({
  components: { Skeleton2 },
  template: `
  <div>
    <skeleton2 id="skeleton2" style="display:none"/>
  </div>
  `
});
