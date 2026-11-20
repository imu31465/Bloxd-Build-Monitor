export const id = 354;
export const ids = [354];
export const modules = {
  60683: (vv, zv, Pv) => {
    function hv(vv, zv) {
      for (const Pv of vv._frameGraph._tasks)
        if (Pv?._config && Pv._colorAttachment && (Pv._config.rt === zv.scRT || Pv._config.rst === zv.scRT)) return Pv
    }

    function Sv(vv, zv) {
      const Pv = vv._renderingContexts[vv._renderingContexts.length - 1];
      if (!Pv?._frameGraph) return;
      const Sv = hv(zv, vv);
      if (!Sv) return;
      if (1 === vv.msaaSamples) return void(Sv._config.clr = !1);
      const ev = Sv.enabled;
      Sv._config.clr = !0, Sv.enabled = !1, zv._beforeRender.unshift((() => {
        const zv = hv(Pv, vv),
          gv = zv?._config.rst === vv.scRT && zv._config.rt._colorView;
        Sv.enabled = !!gv && ev, Sv._config.clr = !gv, gv && (Sv._colorAttachment.view = gv)
      }))
    }
    Pv.r(zv), Pv.d(zv, {
      configureSwapchainOverlayScene: () => Sv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);