export const id = 343;
export const ids = [343];
export const modules = {
  59813: (BB, TB, dB) => {
    function VB(BB, TB) {
      for (const dB of BB._frameGraph._tasks)
        if (dB?._config && dB._colorAttachment && (dB._config.rt === TB.scRT || dB._config.rst === TB.scRT)) return dB
    }

    function yB(BB, TB) {
      const dB = BB._renderingContexts[BB._renderingContexts.length - 1];
      if (!dB?._frameGraph) return;
      const yB = VB(TB, BB);
      if (!yB) return;
      if (1 === BB.msaaSamples) return void(yB._config.clr = !1);
      const pB = yB.enabled;
      yB._config.clr = !0, yB.enabled = !1, TB._beforeRender.unshift((() => {
        const TB = VB(dB, BB),
          lB = TB?._config.rst === BB.scRT && TB._config.rt._colorView;
        yB.enabled = !!lB && pB, yB._config.clr = !lB, lB && (yB._colorAttachment.view = lB)
      }))
    }
    dB.r(TB), dB.d(TB, {
      configureSwapchainOverlayScene: () => yB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);