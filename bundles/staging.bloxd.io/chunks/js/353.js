export const id = 353;
export const ids = [353];
export const modules = {
  60348: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      for (const Ub of bb._frameGraph._tasks)
        if (Ub?._config && Ub._colorAttachment && (Ub._config.rt === ab.scRT || Ub._config.rst === ab.scRT)) return Ub
    }

    function Mb(bb, ab) {
      const Ub = bb._renderingContexts[bb._renderingContexts.length - 1];
      if (!Ub?._frameGraph) return;
      const Mb = Ab(ab, bb);
      if (!Mb) return;
      if (1 === bb.msaaSamples) return void(Mb._config.clr = !1);
      const Tb = Mb.enabled;
      Mb._config.clr = !0, Mb.enabled = !1, ab._beforeRender.unshift((() => {
        const ab = Ab(Ub, bb),
          Eb = ab?._config.rst === bb.scRT && ab._config.rt._colorView;
        Mb.enabled = !!Eb && Tb, Mb._config.clr = !Eb, Eb && (Mb._colorAttachment.view = Eb)
      }))
    }
    Ub.r(ab), Ub.d(ab, {
      configureSwapchainOverlayScene: () => Mb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);