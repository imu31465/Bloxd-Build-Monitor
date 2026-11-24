export const id = 361;
export const ids = [361];
export const modules = {
  61437: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      for (const fm of mm._frameGraph._tasks)
        if (fm?._config && fm._colorAttachment && (fm._config.rt === Tm.scRT || fm._config.rst === Tm.scRT)) return fm
    }

    function Am(mm, Tm) {
      const fm = mm._renderingContexts[mm._renderingContexts.length - 1];
      if (!fm?._frameGraph) return;
      const Am = hm(Tm, mm);
      if (!Am) return;
      if (1 === mm.msaaSamples) return void(Am._config.clr = !1);
      const am = Am.enabled;
      Am._config.clr = !0, Am.enabled = !1, Tm._beforeRender.unshift((() => {
        const Tm = hm(fm, mm),
          xm = Tm?._config.rst === mm.scRT && Tm._config.rt._colorView;
        Am.enabled = !!xm && am, Am._config.clr = !xm, xm && (Am._colorAttachment.view = xm)
      }))
    }
    fm.r(Tm), fm.d(Tm, {
      configureSwapchainOverlayScene: () => Am
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);