export const id = 354;
export const ids = [354];
export const modules = {
  60660: (TT, kT, cT) => {
    function lT(TT, kT) {
      for (const cT of TT._frameGraph._tasks)
        if (cT?._config && cT._colorAttachment && (cT._config.rt === kT.scRT || cT._config.rst === kT.scRT)) return cT
    }

    function MT(TT, kT) {
      const cT = TT._renderingContexts[TT._renderingContexts.length - 1];
      if (!cT?._frameGraph) return;
      const MT = lT(kT, TT);
      if (!MT) return;
      if (1 === TT.msaaSamples) return void(MT._config.clr = !1);
      const KT = MT.enabled;
      MT._config.clr = !0, MT.enabled = !1, kT._beforeRender.unshift((() => {
        const kT = lT(cT, TT),
          OT = kT?._config.rst === TT.scRT && kT._config.rt._colorView;
        MT.enabled = !!OT && KT, MT._config.clr = !OT, OT && (MT._colorAttachment.view = OT)
      }))
    }
    cT.r(kT), cT.d(kT, {
      configureSwapchainOverlayScene: () => MT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);