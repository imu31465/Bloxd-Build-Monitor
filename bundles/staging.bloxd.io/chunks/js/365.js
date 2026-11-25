export const id = 365;
export const ids = [365];
export const modules = {
  61592: (uu, Eu, ju) => {
    function su(uu, Eu) {
      for (const ju of uu._frameGraph._tasks)
        if (ju?._config && ju._colorAttachment && (ju._config.rt === Eu.scRT || ju._config.rst === Eu.scRT)) return ju
    }

    function Uu(uu, Eu) {
      const ju = uu._renderingContexts[uu._renderingContexts.length - 1];
      if (!ju?._frameGraph) return;
      const Uu = su(Eu, uu);
      if (!Uu) return;
      if (1 === uu.msaaSamples) return void(Uu._config.clr = !1);
      const Zu = Uu.enabled;
      Uu._config.clr = !0, Uu.enabled = !1, Eu._beforeRender.unshift((() => {
        const Eu = su(ju, uu),
          Xu = Eu?._config.rst === uu.scRT && Eu._config.rt._colorView;
        Uu.enabled = !!Xu && Zu, Uu._config.clr = !Xu, Xu && (Uu._colorAttachment.view = Xu)
      }))
    }
    ju.r(Eu), ju.d(Eu, {
      configureSwapchainOverlayScene: () => Uu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);