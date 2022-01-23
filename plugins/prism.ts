import Vue from 'vue';
import Prism from 'vue-prism-component';

import 'prismjs';

import '~/assets/prism-material-dark.css';

import 'prismjs/components/prism-scss.min';

import 'prismjs/plugins/autolinker/prism-autolinker.min';
import 'prismjs/plugins/autolinker/prism-autolinker.css';

Vue.component('Prism', Prism);
