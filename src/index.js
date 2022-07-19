import VueSlideoutPanel from './components/SlideoutPanel';
import vueSlideoutPanelService from './service';

// expose component and service to global scope
if (typeof window !== 'undefined' && window.Vue) {
  if (window.vue2PanelDebug) {
    console.log('installing Vue js plugin - browser'); //eslint-disable-line
  }

  window.Vue.use({
    install(NewVue) {
      NewVue.component('slideout-panel', VueSlideoutPanel);
      NewVue.config.globalProperties.$showPanel = vueSlideoutPanelService.showPanel;
      NewVue.config.globalProperties.$showPanelStack = vueSlideoutPanelService.showPanelStack;
      NewVue.config.globalProperties.$hideAllPanels = vueSlideoutPanelService.hideAllPanels;
      NewVue.config.globalProperties.$setPanelDefaults =
        vueSlideoutPanelService.setPanelDefaults;
    }
  });

  window.vueSlideoutPanelService = vueSlideoutPanelService;
}

export default {
  install: function(NewVue) {
    NewVue.component('slideout-panel', VueSlideoutPanel);
    NewVue.config.globalProperties.$showPanel = vueSlideoutPanelService.showPanel;
    NewVue.config.globalProperties.$showPanelStack = vueSlideoutPanelService.showPanelStack;
    NewVue.config.globalProperties.$hideAllPanels = vueSlideoutPanelService.hideAllPanels;
    NewVue.config.globalProperties.$setPanelDefaults =
      vueSlideoutPanelService.setPanelDefaults;
  },
  VueSlideoutPanel,
  vueSlideoutPanelService
};
