export const id = 679;
export const ids = [679];
export const modules = {
  64712: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      for (const Qr of rr._frameGraph._tasks)
        if (Qr?._config && Qr._colorAttachment && (Qr._config.rt === Sr.scRT || Qr._config.rst === Sr.scRT)) return Qr
    }

    function Wr(rr, Sr) {
      const Qr = rr._renderingContexts[rr._renderingContexts.length - 1];
      if (!Qr?._frameGraph) return;
      const Wr = Zr(Sr, rr);
      if (!Wr) return;
      if (1 === rr.msaaSamples) return void(Wr._config.clr = !1);
      const ar = Wr.enabled;
      Wr._config.clr = !0, Wr.enabled = !1, Sr._beforeRender.unshift((() => {
        const Sr = Zr(Qr, rr),
          jr = Sr?._config.rst === rr.scRT && Sr._config.rt._colorView;
        Wr.enabled = !!jr && ar, Wr._config.clr = !jr, jr && (Wr._colorAttachment.view = jr)
      }))
    }
    Qr.r(Sr), Qr.d(Sr, {
      configureSwapchainOverlayScene: () => Wr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);