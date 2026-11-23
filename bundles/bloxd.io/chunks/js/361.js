export const id = 361;
export const ids = [361];
export const modules = {
  61027: (CC, zC, ZC) => {
    function QC(CC, zC) {
      for (const ZC of CC._frameGraph._tasks)
        if (ZC?._config && ZC._colorAttachment && (ZC._config.rt === zC.scRT || ZC._config.rst === zC.scRT)) return ZC
    }

    function wC(CC, zC) {
      const ZC = CC._renderingContexts[CC._renderingContexts.length - 1];
      if (!ZC?._frameGraph) return;
      const wC = QC(zC, CC);
      if (!wC) return;
      if (1 === CC.msaaSamples) return void(wC._config.clr = !1);
      const bC = wC.enabled;
      wC._config.clr = !0, wC.enabled = !1, zC._beforeRender.unshift((() => {
        const zC = QC(ZC, CC),
          nC = zC?._config.rst === CC.scRT && zC._config.rt._colorView;
        wC.enabled = !!nC && bC, wC._config.clr = !nC, nC && (wC._colorAttachment.view = nC)
      }))
    }
    ZC.r(zC), ZC.d(zC, {
      configureSwapchainOverlayScene: () => wC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);