export const id = 353;
export const ids = [353];
export const modules = {
  60310: (YY, rY, DY) => {
    function FY(YY, rY) {
      for (const DY of YY._frameGraph._tasks)
        if (DY?._config && DY._colorAttachment && (DY._config.rt === rY.scRT || DY._config.rst === rY.scRT)) return DY
    }

    function AY(YY, rY) {
      const DY = YY._renderingContexts[YY._renderingContexts.length - 1];
      if (!DY?._frameGraph) return;
      const AY = FY(rY, YY);
      if (!AY) return;
      if (1 === YY.msaaSamples) return void(AY._config.clr = !1);
      const IY = AY.enabled;
      AY._config.clr = !0, AY.enabled = !1, rY._beforeRender.unshift((() => {
        const rY = FY(DY, YY),
          RY = rY?._config.rst === YY.scRT && rY._config.rt._colorView;
        AY.enabled = !!RY && IY, AY._config.clr = !RY, RY && (AY._colorAttachment.view = RY)
      }))
    }
    DY.r(rY), DY.d(rY, {
      configureSwapchainOverlayScene: () => AY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);