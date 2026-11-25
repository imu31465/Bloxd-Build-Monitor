export const id = 365;
export const ids = [365];
export const modules = {
  61408: (BB, IB, ZB) => {
    function TB(BB, IB) {
      for (const ZB of BB._frameGraph._tasks)
        if (ZB?._config && ZB._colorAttachment && (ZB._config.rt === IB.scRT || ZB._config.rst === IB.scRT)) return ZB
    }

    function JB(BB, IB) {
      const ZB = BB._renderingContexts[BB._renderingContexts.length - 1];
      if (!ZB?._frameGraph) return;
      const JB = TB(IB, BB);
      if (!JB) return;
      if (1 === BB.msaaSamples) return void(JB._config.clr = !1);
      const oB = JB.enabled;
      JB._config.clr = !0, JB.enabled = !1, IB._beforeRender.unshift((() => {
        const IB = TB(ZB, BB),
          GB = IB?._config.rst === BB.scRT && IB._config.rt._colorView;
        JB.enabled = !!GB && oB, JB._config.clr = !GB, GB && (JB._colorAttachment.view = GB)
      }))
    }
    ZB.r(IB), ZB.d(IB, {
      configureSwapchainOverlayScene: () => JB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);