export const id = 361;
export const ids = [361];
export const modules = {
  61419: (SS, HS, gS) => {
    function tS(SS, HS) {
      for (const gS of SS._frameGraph._tasks)
        if (gS?._config && gS._colorAttachment && (gS._config.rt === HS.scRT || gS._config.rst === HS.scRT)) return gS
    }

    function bS(SS, HS) {
      const gS = SS._renderingContexts[SS._renderingContexts.length - 1];
      if (!gS?._frameGraph) return;
      const bS = tS(HS, SS);
      if (!bS) return;
      if (1 === SS.msaaSamples) return void(bS._config.clr = !1);
      const XS = bS.enabled;
      bS._config.clr = !0, bS.enabled = !1, HS._beforeRender.unshift((() => {
        const HS = tS(gS, SS),
          xS = HS?._config.rst === SS.scRT && HS._config.rt._colorView;
        bS.enabled = !!xS && XS, bS._config.clr = !xS, xS && (bS._colorAttachment.view = xS)
      }))
    }
    gS.r(HS), gS.d(HS, {
      configureSwapchainOverlayScene: () => bS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);