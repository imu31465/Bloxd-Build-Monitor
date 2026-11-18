export const id = 343;
export const ids = [343];
export const modules = {
  59504: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      for (const ZJ of JJ._frameGraph._tasks)
        if (ZJ?._config && ZJ._colorAttachment && (ZJ._config.rt === cJ.scRT || ZJ._config.rst === cJ.scRT)) return ZJ
    }

    function UJ(JJ, cJ) {
      const ZJ = JJ._renderingContexts[JJ._renderingContexts.length - 1];
      if (!ZJ?._frameGraph) return;
      const UJ = FJ(cJ, JJ);
      if (!UJ) return;
      if (1 === JJ.msaaSamples) return void(UJ._config.clr = !1);
      const eJ = UJ.enabled;
      UJ._config.clr = !0, UJ.enabled = !1, cJ._beforeRender.unshift((() => {
        const cJ = FJ(ZJ, JJ),
          XJ = cJ?._config.rst === JJ.scRT && cJ._config.rt._colorView;
        UJ.enabled = !!XJ && eJ, UJ._config.clr = !XJ, XJ && (UJ._colorAttachment.view = XJ)
      }))
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      configureSwapchainOverlayScene: () => UJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);