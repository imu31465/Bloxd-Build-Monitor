export const id = 679;
export const ids = [679];
export const modules = {
  64873: (dd, Od, md) => {
    function Wd(dd, Od) {
      for (const md of dd._frameGraph._tasks)
        if (md?._config && md._colorAttachment && (md._config.rt === Od.scRT || md._config.rst === Od.scRT)) return md
    }

    function Fd(dd, Od) {
      const md = dd._renderingContexts[dd._renderingContexts.length - 1];
      if (!md?._frameGraph) return;
      const Fd = Wd(Od, dd);
      if (!Fd) return;
      if (1 === dd.msaaSamples) return void(Fd._config.clr = !1);
      const Rd = Fd.enabled;
      Fd._config.clr = !0, Fd.enabled = !1, Od._beforeRender.unshift((() => {
        const Od = Wd(md, dd),
          Xd = Od?._config.rst === dd.scRT && Od._config.rt._colorView;
        Fd.enabled = !!Xd && Rd, Fd._config.clr = !Xd, Xd && (Fd._colorAttachment.view = Xd)
      }))
    }
    md.r(Od), md.d(Od, {
      configureSwapchainOverlayScene: () => Fd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);