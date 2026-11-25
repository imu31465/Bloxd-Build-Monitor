export const id = 669;
export const ids = [669];
export const modules = {
  64007: (MM, rM, iM) => {
    function OM(MM, rM) {
      for (const iM of MM._frameGraph._tasks)
        if (iM?._config && iM._colorAttachment && (iM._config.rt === rM.scRT || iM._config.rst === rM.scRT)) return iM
    }

    function SM(MM, rM) {
      const iM = MM._renderingContexts[MM._renderingContexts.length - 1];
      if (!iM?._frameGraph) return;
      const SM = OM(rM, MM);
      if (!SM) return;
      if (1 === MM.msaaSamples) return void(SM._config.clr = !1);
      const jM = SM.enabled;
      SM._config.clr = !0, SM.enabled = !1, rM._beforeRender.unshift((() => {
        const rM = OM(iM, MM),
          aM = rM?._config.rst === MM.scRT && rM._config.rt._colorView;
        SM.enabled = !!aM && jM, SM._config.clr = !aM, aM && (SM._colorAttachment.view = aM)
      }))
    }
    iM.r(rM), iM.d(rM, {
      configureSwapchainOverlayScene: () => SM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);