export const id = 365;
export const ids = [365];
export const modules = {
  61462: (pp, ip, cp) => {
    function Op(pp, ip) {
      for (const cp of pp._frameGraph._tasks)
        if (cp?._config && cp._colorAttachment && (cp._config.rt === ip.scRT || cp._config.rst === ip.scRT)) return cp
    }

    function op(pp, ip) {
      const cp = pp._renderingContexts[pp._renderingContexts.length - 1];
      if (!cp?._frameGraph) return;
      const op = Op(ip, pp);
      if (!op) return;
      if (1 === pp.msaaSamples) return void(op._config.clr = !1);
      const Ip = op.enabled;
      op._config.clr = !0, op.enabled = !1, ip._beforeRender.unshift((() => {
        const ip = Op(cp, pp),
          Sp = ip?._config.rst === pp.scRT && ip._config.rt._colorView;
        op.enabled = !!Sp && Ip, op._config.clr = !Sp, Sp && (op._colorAttachment.view = Sp)
      }))
    }
    cp.r(ip), cp.d(ip, {
      configureSwapchainOverlayScene: () => op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);