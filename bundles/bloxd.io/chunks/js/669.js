export const id = 669;
export const ids = [669];
export const modules = {
  63910: (ee, ie, He) => {
    function ye(ee, ie) {
      for (const He of ee._frameGraph._tasks)
        if (He?._config && He._colorAttachment && (He._config.rt === ie.scRT || He._config.rst === ie.scRT)) return He
    }

    function be(ee, ie) {
      const He = ee._renderingContexts[ee._renderingContexts.length - 1];
      if (!He?._frameGraph) return;
      const be = ye(ie, ee);
      if (!be) return;
      if (1 === ee.msaaSamples) return void(be._config.clr = !1);
      const Me = be.enabled;
      be._config.clr = !0, be.enabled = !1, ie._beforeRender.unshift((() => {
        const ie = ye(He, ee),
          Ke = ie?._config.rst === ee.scRT && ie._config.rt._colorView;
        be.enabled = !!Ke && Me, be._config.clr = !Ke, Ke && (be._colorAttachment.view = Ke)
      }))
    }
    He.r(ie), He.d(ie, {
      configureSwapchainOverlayScene: () => be
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);