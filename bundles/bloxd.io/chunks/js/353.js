export const id = 353;
export const ids = [353];
export const modules = {
  60113: (TT, oT, IT) => {
    function iT(TT, oT) {
      for (const IT of TT._frameGraph._tasks)
        if (IT?._config && IT._colorAttachment && (IT._config.rt === oT.scRT || IT._config.rst === oT.scRT)) return IT
    }

    function zT(TT, oT) {
      const IT = TT._renderingContexts[TT._renderingContexts.length - 1];
      if (!IT?._frameGraph) return;
      const zT = iT(oT, TT);
      if (!zT) return;
      if (1 === TT.msaaSamples) return void(zT._config.clr = !1);
      const kT = zT.enabled;
      zT._config.clr = !0, zT.enabled = !1, oT._beforeRender.unshift((() => {
        const oT = iT(IT, TT),
          WT = oT?._config.rst === TT.scRT && oT._config.rt._colorView;
        zT.enabled = !!WT && kT, zT._config.clr = !WT, WT && (zT._colorAttachment.view = WT)
      }))
    }
    IT.r(oT), IT.d(oT, {
      configureSwapchainOverlayScene: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);