import { createStore } from 'vuex';
import robotsModule from './Modules/Robots';
import usersModule from './Modules/Users';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
  },
});
