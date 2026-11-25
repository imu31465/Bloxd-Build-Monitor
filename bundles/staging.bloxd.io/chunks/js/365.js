export const id = 365;
export const ids = [365];
export const modules = {
  61909: (GG, bG, ZG) => {
    function wG(GG, bG) {
      for (const ZG of GG._frameGraph._tasks)
        if (ZG?._config && ZG._colorAttachment && (ZG._config.rt === bG.scRT || ZG._config.rst === bG.scRT)) return ZG
    }

    function SG(GG, bG) {
      const ZG = GG._renderingContexts[GG._renderingContexts.length - 1];
      if (!ZG?._frameGraph) return;
      const SG = wG(bG, GG);
      if (!SG) return;
      if (1 === GG.msaaSamples) return void(SG._config.clr = !1);
      const LG = SG.enabled;
      SG._config.clr = !0, SG.enabled = !1, bG._beforeRender.unshift((() => {
        const bG = wG(ZG, GG),
          yG = bG?._config.rst === GG.scRT && bG._config.rt._colorView;
        SG.enabled = !!yG && LG, SG._config.clr = !yG, yG && (SG._colorAttachment.view = yG)
      }))
    }
    ZG.r(bG), ZG.d(bG, {
      configureSwapchainOverlayScene: () => SG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);