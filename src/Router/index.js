import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../Build/RobotBuilder.vue';
import PartInfo from '../Parts/PartInfo.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
  }],
});
