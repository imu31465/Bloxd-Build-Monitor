export const id = 354;
export const ids = [354];
export const modules = {
  61225: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      for (const gq of qq._frameGraph._tasks)
        if (gq?._config && gq._colorAttachment && (gq._config.rt === Eq.scRT || gq._config.rst === Eq.scRT)) return gq
    }

    function lq(qq, Eq) {
      const gq = qq._renderingContexts[qq._renderingContexts.length - 1];
      if (!gq?._frameGraph) return;
      const lq = Yq(Eq, qq);
      if (!lq) return;
      if (1 === qq.msaaSamples) return void(lq._config.clr = !1);
      const Oq = lq.enabled;
      lq._config.clr = !0, lq.enabled = !1, Eq._beforeRender.unshift((() => {
        const Eq = Yq(gq, qq),
          mq = Eq?._config.rst === qq.scRT && Eq._config.rt._colorView;
        lq.enabled = !!mq && Oq, lq._config.clr = !mq, mq && (lq._colorAttachment.view = mq)
      }))
    }
    gq.r(Eq), gq.d(Eq, {
      configureSwapchainOverlayScene: () => lq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);