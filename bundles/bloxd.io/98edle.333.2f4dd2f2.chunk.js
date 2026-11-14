export const id = 333;
export const ids = [333];
export const modules = {
  58689: (WW, RW, MW) => {
    function wW(WW, RW) {
      for (const MW of WW._frameGraph._tasks)
        if (MW?._config && MW._colorAttachment && (MW._config.rt === RW.scRT || MW._config.rst === RW.scRT)) return MW
    }

    function CW(WW, RW) {
      const MW = WW._renderingContexts[WW._renderingContexts.length - 1];
      if (!MW?._frameGraph) return;
      const CW = wW(RW, WW);
      if (!CW) return;
      if (1 === WW.msaaSamples) return void(CW._config.clr = !1);
      const zR = CW.enabled;
      CW._config.clr = !0, CW.enabled = !1, RW._beforeRender.unshift((() => {
        const RW = wW(MW, WW),
          AW = RW?._config.rst === WW.scRT && RW._config.rt._colorView;
        CW.enabled = !!AW && zR, CW._config.clr = !AW, AW && (CW._colorAttachment.view = AW)
      }))
    }
    MW.r(RW), MW.d(RW, {
      configureSwapchainOverlayScene: () => CW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);