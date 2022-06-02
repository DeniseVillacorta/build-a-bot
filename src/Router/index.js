import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../Build/RobotBuilder.vue';
import PartInfo from '../Parts/PartInfo.vue';
import BrowseParts from '../Parts/BrowseParts.vue';
import RobotHeads from '../Parts/RobotHeads.vue';
import RobotArms from '../Parts/RobotArms.vue';
import RobotTorsos from '../Parts/RobotTorsos.vue';
import RobotBases from '../Parts/RobotBases.vue';

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
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
      {
        name: 'Browsebases',
        path: 'bases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }],
});
