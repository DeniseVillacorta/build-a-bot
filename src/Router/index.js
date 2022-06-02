import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import HomePage from '../Home/HomePage.vue';
import RobotBuilder from '../Build/RobotBuilder.vue';
import PartInfo from '../Parts/PartInfo.vue';
import BrowseParts from '../Parts/BrowseParts.vue';
import RobotHeads from '../Parts/RobotHeads.vue';
import RobotArms from '../Parts/RobotArms.vue';
import RobotTorsos from '../Parts/RobotTorsos.vue';
import RobotBases from '../Parts/RobotBases.vue';
import SidebarStandard from '../Sidebars/SidebarStandard.vue';
import SidebarBuild from '../Sidebars/SidebarBuild.vue';
import ShoppingCart from '../Cart/ShoppingCart.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
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
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
  ],
});
