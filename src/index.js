import DummyButton from "./main";
const plugin = {
  install(Vue) {
    Vue.component("dummy-button", DummyButton);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
