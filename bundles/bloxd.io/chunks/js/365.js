export const id = 365;
export const ids = [365];
export const modules = {
  61238: (TT, UT, mT) => {
    function WT(TT, UT) {
      for (const mT of TT._frameGraph._tasks)
        if (mT?._config && mT._colorAttachment && (mT._config.rt === UT.scRT || mT._config.rst === UT.scRT)) return mT
    }

    function zT(TT, UT) {
      const mT = TT._renderingContexts[TT._renderingContexts.length - 1];
      if (!mT?._frameGraph) return;
      const zT = WT(UT, TT);
      if (!zT) return;
      if (1 === TT.msaaSamples) return void(zT._config.clr = !1);
      const MT = zT.enabled;
      zT._config.clr = !0, zT.enabled = !1, UT._beforeRender.unshift((() => {
        const UT = WT(mT, TT),
          gT = UT?._config.rst === TT.scRT && UT._config.rt._colorView;
        zT.enabled = !!gT && MT, zT._config.clr = !gT, gT && (zT._colorAttachment.view = gT)
      }))
    }
    mT.r(UT), mT.d(UT, {
      configureSwapchainOverlayScene: () => zT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);