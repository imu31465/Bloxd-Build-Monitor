export const id = 666;
export const ids = [666];
export const modules = {
  64031: (UU, XU, zU) => {
    function cU(UU, XU) {
      for (const zU of UU._frameGraph._tasks)
        if (zU?._config && zU._colorAttachment && (zU._config.rt === XU.scRT || zU._config.rst === XU.scRT)) return zU
    }

    function yU(UU, XU) {
      const zU = UU._renderingContexts[UU._renderingContexts.length - 1];
      if (!zU?._frameGraph) return;
      const yU = cU(XU, UU);
      if (!yU) return;
      if (1 === UU.msaaSamples) return void(yU._config.clr = !1);
      const QU = yU.enabled;
      yU._config.clr = !0, yU.enabled = !1, XU._beforeRender.unshift((() => {
        const XU = cU(zU, UU),
          AU = XU?._config.rst === UU.scRT && XU._config.rt._colorView;
        yU.enabled = !!AU && QU, yU._config.clr = !AU, AU && (yU._colorAttachment.view = AU)
      }))
    }
    zU.r(XU), zU.d(XU, {
      configureSwapchainOverlayScene: () => yU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);