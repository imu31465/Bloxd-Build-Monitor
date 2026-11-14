export const id = 338;
export const ids = [338];
export const modules = {
  59190: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      for (const nc of cB._frameGraph._tasks)
        if (nc?._config && nc._colorAttachment && (nc._config.rt === Bc.scRT || nc._config.rst === Bc.scRT)) return nc
    }

    function Ic(cB, Bc) {
      const nc = cB._renderingContexts[cB._renderingContexts.length - 1];
      if (!nc?._frameGraph) return;
      const Ic = Vc(Bc, cB);
      if (!Ic) return;
      if (1 === cB.msaaSamples) return void(Ic._config.clr = !1);
      const rB = Ic.enabled;
      Ic._config.clr = !0, Ic.enabled = !1, Bc._beforeRender.unshift((() => {
        const Bc = Vc(nc, cB),
          uc = Bc?._config.rst === cB.scRT && Bc._config.rt._colorView;
        Ic.enabled = !!uc && rB, Ic._config.clr = !uc, uc && (Ic._colorAttachment.view = uc)
      }))
    }
    nc.r(Bc), nc.d(Bc, {
      configureSwapchainOverlayScene: () => Ic
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);