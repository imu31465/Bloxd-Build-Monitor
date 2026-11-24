export const id = 365;
export const ids = [365];
export const modules = {
  61520: (BB, jB, zB) => {
    function QB(BB, jB) {
      for (const zB of BB._frameGraph._tasks)
        if (zB?._config && zB._colorAttachment && (zB._config.rt === jB.scRT || zB._config.rst === jB.scRT)) return zB
    }

    function nB(BB, jB) {
      const zB = BB._renderingContexts[BB._renderingContexts.length - 1];
      if (!zB?._frameGraph) return;
      const nB = QB(jB, BB);
      if (!nB) return;
      if (1 === BB.msaaSamples) return void(nB._config.clr = !1);
      const dB = nB.enabled;
      nB._config.clr = !0, nB.enabled = !1, jB._beforeRender.unshift((() => {
        const jB = QB(zB, BB),
          IB = jB?._config.rst === BB.scRT && jB._config.rt._colorView;
        nB.enabled = !!IB && dB, nB._config.clr = !IB, IB && (nB._colorAttachment.view = IB)
      }))
    }
    zB.r(jB), zB.d(jB, {
      configureSwapchainOverlayScene: () => nB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);