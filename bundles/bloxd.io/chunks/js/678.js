export const id = 678;
export const ids = [678];
export const modules = {
  64230: (RR, JR, GR) => {
    function yR(RR, JR) {
      for (const GR of RR._frameGraph._tasks)
        if (GR?._config && GR._colorAttachment && (GR._config.rt === JR.scRT || GR._config.rst === JR.scRT)) return GR
    }

    function tR(RR, JR) {
      const GR = RR._renderingContexts[RR._renderingContexts.length - 1];
      if (!GR?._frameGraph) return;
      const tR = yR(JR, RR);
      if (!tR) return;
      if (1 === RR.msaaSamples) return void(tR._config.clr = !1);
      const uR = tR.enabled;
      tR._config.clr = !0, tR.enabled = !1, JR._beforeRender.unshift((() => {
        const JR = yR(GR, RR),
          ZR = JR?._config.rst === RR.scRT && JR._config.rt._colorView;
        tR.enabled = !!ZR && uR, tR._config.clr = !ZR, ZR && (tR._colorAttachment.view = ZR)
      }))
    }
    GR.r(JR), GR.d(JR, {
      configureSwapchainOverlayScene: () => tR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);