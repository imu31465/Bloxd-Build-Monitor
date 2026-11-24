export const id = 361;
export const ids = [361];
export const modules = {
  61129: (DD, zD, wD) => {
    function pD(DD, zD) {
      for (const wD of DD._frameGraph._tasks)
        if (wD?._config && wD._colorAttachment && (wD._config.rt === zD.scRT || wD._config.rst === zD.scRT)) return wD
    }

    function sD(DD, zD) {
      const wD = DD._renderingContexts[DD._renderingContexts.length - 1];
      if (!wD?._frameGraph) return;
      const sD = pD(zD, DD);
      if (!sD) return;
      if (1 === DD.msaaSamples) return void(sD._config.clr = !1);
      const KD = sD.enabled;
      sD._config.clr = !0, sD.enabled = !1, zD._beforeRender.unshift((() => {
        const zD = pD(wD, DD),
          rD = zD?._config.rst === DD.scRT && zD._config.rt._colorView;
        sD.enabled = !!rD && KD, sD._config.clr = !rD, rD && (sD._colorAttachment.view = rD)
      }))
    }
    wD.r(zD), wD.d(zD, {
      configureSwapchainOverlayScene: () => sD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);