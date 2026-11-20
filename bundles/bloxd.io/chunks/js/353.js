export const id = 353;
export const ids = [353];
export const modules = {
  60634: (UU, RU, gU) => {
    function tU(UU, RU) {
      for (const gU of UU._frameGraph._tasks)
        if (gU?._config && gU._colorAttachment && (gU._config.rt === RU.scRT || gU._config.rst === RU.scRT)) return gU
    }

    function pU(UU, RU) {
      const gU = UU._renderingContexts[UU._renderingContexts.length - 1];
      if (!gU?._frameGraph) return;
      const pU = tU(RU, UU);
      if (!pU) return;
      if (1 === UU.msaaSamples) return void(pU._config.clr = !1);
      const EU = pU.enabled;
      pU._config.clr = !0, pU.enabled = !1, RU._beforeRender.unshift((() => {
        const RU = tU(gU, UU),
          PU = RU?._config.rst === UU.scRT && RU._config.rt._colorView;
        pU.enabled = !!PU && EU, pU._config.clr = !PU, PU && (pU._colorAttachment.view = PU)
      }))
    }
    gU.r(RU), gU.d(RU, {
      configureSwapchainOverlayScene: () => pU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);