export const id = 365;
export const ids = [365];
export const modules = {
  61621: (tt, et, Vt) => {
    function Ot(tt, et) {
      for (const Vt of tt._frameGraph._tasks)
        if (Vt?._config && Vt._colorAttachment && (Vt._config.rt === et.scRT || Vt._config.rst === et.scRT)) return Vt
    }

    function qt(tt, et) {
      const Vt = tt._renderingContexts[tt._renderingContexts.length - 1];
      if (!Vt?._frameGraph) return;
      const qt = Ot(et, tt);
      if (!qt) return;
      if (1 === tt.msaaSamples) return void(qt._config.clr = !1);
      const Dt = qt.enabled;
      qt._config.clr = !0, qt.enabled = !1, et._beforeRender.unshift((() => {
        const et = Ot(Vt, tt),
          mt = et?._config.rst === tt.scRT && et._config.rt._colorView;
        qt.enabled = !!mt && Dt, qt._config.clr = !mt, mt && (qt._colorAttachment.view = mt)
      }))
    }
    Vt.r(et), Vt.d(et, {
      configureSwapchainOverlayScene: () => qt
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);