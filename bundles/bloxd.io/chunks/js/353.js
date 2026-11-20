export const id = 353;
export const ids = [353];
export const modules = {
  61006: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      for (const Bk of kk._frameGraph._tasks)
        if (Bk?._config && Bk._colorAttachment && (Bk._config.rt === Fk.scRT || Bk._config.rst === Fk.scRT)) return Bk
    }

    function tk(kk, Fk) {
      const Bk = kk._renderingContexts[kk._renderingContexts.length - 1];
      if (!Bk?._frameGraph) return;
      const tk = Rk(Fk, kk);
      if (!tk) return;
      if (1 === kk.msaaSamples) return void(tk._config.clr = !1);
      const ak = tk.enabled;
      tk._config.clr = !0, tk.enabled = !1, Fk._beforeRender.unshift((() => {
        const Fk = Rk(Bk, kk),
          Xk = Fk?._config.rst === kk.scRT && Fk._config.rt._colorView;
        tk.enabled = !!Xk && ak, tk._config.clr = !Xk, Xk && (tk._colorAttachment.view = Xk)
      }))
    }
    Bk.r(Fk), Bk.d(Fk, {
      configureSwapchainOverlayScene: () => tk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);