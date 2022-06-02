import { createStore } from 'vuex';
import robotsModule from './Modules/Robots';
import usersModule from './Modules/Users';

export default createStore({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
