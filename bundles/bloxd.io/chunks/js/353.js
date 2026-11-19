export const id = 353;
export const ids = [353];
export const modules = {
  60498: (DD, CD, cD) => {
    function ID(DD, CD) {
      for (const cD of DD._frameGraph._tasks)
        if (cD?._config && cD._colorAttachment && (cD._config.rt === CD.scRT || cD._config.rst === CD.scRT)) return cD
    }

    function pD(DD, CD) {
      const cD = DD._renderingContexts[DD._renderingContexts.length - 1];
      if (!cD?._frameGraph) return;
      const pD = ID(CD, DD);
      if (!pD) return;
      if (1 === DD.msaaSamples) return void(pD._config.clr = !1);
      const iD = pD.enabled;
      pD._config.clr = !0, pD.enabled = !1, CD._beforeRender.unshift((() => {
        const CD = ID(cD, DD),
          fD = CD?._config.rst === DD.scRT && CD._config.rt._colorView;
        pD.enabled = !!fD && iD, pD._config.clr = !fD, fD && (pD._colorAttachment.view = fD)
      }))
    }
    cD.r(CD), cD.d(CD, {
      configureSwapchainOverlayScene: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);