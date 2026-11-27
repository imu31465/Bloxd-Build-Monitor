export const id = 678;
export const ids = [678];
export const modules = {
  64490: (WW, iW, OW) => {
    function mW(WW, iW) {
      for (const OW of WW._frameGraph._tasks)
        if (OW?._config && OW._colorAttachment && (OW._config.rt === iW.scRT || OW._config.rst === iW.scRT)) return OW
    }

    function EW(WW, iW) {
      const OW = WW._renderingContexts[WW._renderingContexts.length - 1];
      if (!OW?._frameGraph) return;
      const EW = mW(iW, WW);
      if (!EW) return;
      if (1 === WW.msaaSamples) return void(EW._config.clr = !1);
      const NW = EW.enabled;
      EW._config.clr = !0, EW.enabled = !1, iW._beforeRender.unshift((() => {
        const iW = mW(OW, WW),
          PW = iW?._config.rst === WW.scRT && iW._config.rt._colorView;
        EW.enabled = !!PW && NW, EW._config.clr = !PW, PW && (EW._colorAttachment.view = PW)
      }))
    }
    OW.r(iW), OW.d(iW, {
      configureSwapchainOverlayScene: () => EW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);