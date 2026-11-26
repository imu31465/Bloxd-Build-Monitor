export const id = 669;
export const ids = [669];
export const modules = {
  64392: (VV, eV, xV) => {
    function JV(VV, eV) {
      for (const xV of VV._frameGraph._tasks)
        if (xV?._config && xV._colorAttachment && (xV._config.rt === eV.scRT || xV._config.rst === eV.scRT)) return xV
    }

    function YV(VV, eV) {
      const xV = VV._renderingContexts[VV._renderingContexts.length - 1];
      if (!xV?._frameGraph) return;
      const YV = JV(eV, VV);
      if (!YV) return;
      if (1 === VV.msaaSamples) return void(YV._config.clr = !1);
      const UV = YV.enabled;
      YV._config.clr = !0, YV.enabled = !1, eV._beforeRender.unshift((() => {
        const eV = JV(xV, VV),
          yV = eV?._config.rst === VV.scRT && eV._config.rt._colorView;
        YV.enabled = !!yV && UV, YV._config.clr = !yV, yV && (YV._colorAttachment.view = yV)
      }))
    }
    xV.r(eV), xV.d(eV, {
      configureSwapchainOverlayScene: () => YV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);