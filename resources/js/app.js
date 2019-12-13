require('./bootstrap');

// client
window.Vue = require('vue');

import vuetify from './plugins/vuetify';
import topextsec from './components/client/shared/topextsec.vue';
import maincomponent from './components/client/Main.vue';
import innercomponent from './components/client/inner.vue';
import inner2component from './components/client/inner2.vue';
import inner3component from './components/client/inner3.vue';
import inner4component from './components/client/inner4.vue';

// login
require('./components/Example');
require('./components/login/App');
// require('./components/login/pages/FormOne/FormOne');
// require('./components/login/pages/FormTwo/FormTwo');
// require('./components/login/pages/FormThree/FormThree');

// admin
import router from './components/admin/router';
import adminapp from './components/admin/App.vue';

import Vuex from 'vuex';
import Vueditor from 'vueditor';
import 'vueditor/dist/style/vueditor.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './components/admin/themes/v1/plugins';
import VueSplit from 'vue-split-panel';
import axios from 'axios';
import VueAxios from 'vue-axios';
    
Vue.use(VueAxios, axios);
Vue.use(VueSplit);

// your config here
let config = {
    toolbar: [
        'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
        'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
        'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
        'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'tables', '|', 'switchView'
    ],
    fontName: [
        { val: 'arial black' },
        { val: 'times new roman' },
        { val: 'Courier New' }
    ],
    fontSize: [
        '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'
    ],
    uploadUrl: '',
    id: '',
    classList: []
};

Vue.use(Vuex);
Vue.use(Vueditor, config);
Vue.prototype.$eventHub = new Vue();
Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    router,
    vuetify,
    components: {
        'topextsec': topextsec,
        'maincomponent': maincomponent,
        'innercomponent': innercomponent,
        'inner2component': inner2component,
        'inner3component': inner3component,
        'inner4component': inner4component,

        'adminapp': adminapp
    }
});