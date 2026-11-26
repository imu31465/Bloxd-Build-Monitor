export const id = 669;
export const ids = [669];
export const modules = {
  64206: (HH, BH, LH) => {
    function AH(HH, BH) {
      for (const LH of HH._frameGraph._tasks)
        if (LH?._config && LH._colorAttachment && (LH._config.rt === BH.scRT || LH._config.rst === BH.scRT)) return LH
    }

    function rH(HH, BH) {
      const LH = HH._renderingContexts[HH._renderingContexts.length - 1];
      if (!LH?._frameGraph) return;
      const rH = AH(BH, HH);
      if (!rH) return;
      if (1 === HH.msaaSamples) return void(rH._config.clr = !1);
      const SH = rH.enabled;
      rH._config.clr = !0, rH.enabled = !1, BH._beforeRender.unshift((() => {
        const BH = AH(LH, HH),
          hH = BH?._config.rst === HH.scRT && BH._config.rt._colorView;
        rH.enabled = !!hH && SH, rH._config.clr = !hH, hH && (rH._colorAttachment.view = hH)
      }))
    }
    LH.r(BH), LH.d(BH, {
      configureSwapchainOverlayScene: () => rH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);