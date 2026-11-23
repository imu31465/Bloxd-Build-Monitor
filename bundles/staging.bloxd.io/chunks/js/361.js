export const id = 361;
export const ids = [361];
export const modules = {
  61363: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      for (const Ik of kk._frameGraph._tasks)
        if (Ik?._config && Ik._colorAttachment && (Ik._config.rt === Fk.scRT || Ik._config.rst === Fk.scRT)) return Ik
    }

    function Tk(kk, Fk) {
      const Ik = kk._renderingContexts[kk._renderingContexts.length - 1];
      if (!Ik?._frameGraph) return;
      const Tk = Xk(Fk, kk);
      if (!Tk) return;
      if (1 === kk.msaaSamples) return void(Tk._config.clr = !1);
      const ik = Tk.enabled;
      Tk._config.clr = !0, Tk.enabled = !1, Fk._beforeRender.unshift((() => {
        const Fk = Xk(Ik, kk),
          yk = Fk?._config.rst === kk.scRT && Fk._config.rt._colorView;
        Tk.enabled = !!yk && ik, Tk._config.clr = !yk, yk && (Tk._colorAttachment.view = yk)
      }))
    }
    Ik.r(Fk), Ik.d(Fk, {
      configureSwapchainOverlayScene: () => Tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);