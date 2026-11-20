export const id = 354;
export const ids = [354];
export const modules = {
  60700: (bb, ub, hb) => {
    function Bb(bb, ub) {
      for (const hb of bb._frameGraph._tasks)
        if (hb?._config && hb._colorAttachment && (hb._config.rt === ub.scRT || hb._config.rst === ub.scRT)) return hb
    }

    function Ob(bb, ub) {
      const hb = bb._renderingContexts[bb._renderingContexts.length - 1];
      if (!hb?._frameGraph) return;
      const Ob = Bb(ub, bb);
      if (!Ob) return;
      if (1 === bb.msaaSamples) return void(Ob._config.clr = !1);
      const Gb = Ob.enabled;
      Ob._config.clr = !0, Ob.enabled = !1, ub._beforeRender.unshift((() => {
        const ub = Bb(hb, bb),
          Ub = ub?._config.rst === bb.scRT && ub._config.rt._colorView;
        Ob.enabled = !!Ub && Gb, Ob._config.clr = !Ub, Ub && (Ob._colorAttachment.view = Ub)
      }))
    }
    hb.r(ub), hb.d(ub, {
      configureSwapchainOverlayScene: () => Ob
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);