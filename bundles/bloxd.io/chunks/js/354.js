export const id = 354;
export const ids = [354];
export const modules = {
  60972: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      for (const kd of dd._frameGraph._tasks)
        if (kd?._config && kd._colorAttachment && (kd._config.rt === Jd.scRT || kd._config.rst === Jd.scRT)) return kd
    }

    function Nd(dd, Jd) {
      const kd = dd._renderingContexts[dd._renderingContexts.length - 1];
      if (!kd?._frameGraph) return;
      const Nd = pd(Jd, dd);
      if (!Nd) return;
      if (1 === dd.msaaSamples) return void(Nd._config.clr = !1);
      const Wd = Nd.enabled;
      Nd._config.clr = !0, Nd.enabled = !1, Jd._beforeRender.unshift((() => {
        const Jd = pd(kd, dd),
          Pd = Jd?._config.rst === dd.scRT && Jd._config.rt._colorView;
        Nd.enabled = !!Pd && Wd, Nd._config.clr = !Pd, Pd && (Nd._colorAttachment.view = Pd)
      }))
    }
    kd.r(Jd), kd.d(Jd, {
      configureSwapchainOverlayScene: () => Nd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);