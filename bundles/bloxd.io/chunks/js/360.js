export const id = 360;
export const ids = [360];
export const modules = {
  60772: (kk, ek, ik) => {
    function Dk(kk, ek) {
      for (const ik of kk._frameGraph._tasks)
        if (ik?._config && ik._colorAttachment && (ik._config.rt === ek.scRT || ik._config.rst === ek.scRT)) return ik
    }

    function fk(kk, ek) {
      const ik = kk._renderingContexts[kk._renderingContexts.length - 1];
      if (!ik?._frameGraph) return;
      const fk = Dk(ek, kk);
      if (!fk) return;
      if (1 === kk.msaaSamples) return void(fk._config.clr = !1);
      const Sk = fk.enabled;
      fk._config.clr = !0, fk.enabled = !1, ek._beforeRender.unshift((() => {
        const ek = Dk(ik, kk),
          bk = ek?._config.rst === kk.scRT && ek._config.rt._colorView;
        fk.enabled = !!bk && Sk, fk._config.clr = !bk, bk && (fk._colorAttachment.view = bk)
      }))
    }
    ik.r(ek), ik.d(ek, {
      configureSwapchainOverlayScene: () => fk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);