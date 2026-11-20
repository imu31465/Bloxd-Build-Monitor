export const id = 353;
export const ids = [353];
export const modules = {
  60680: (bb, cb, sb) => {
    function kb(bb, cb) {
      for (const sb of bb._frameGraph._tasks)
        if (sb?._config && sb._colorAttachment && (sb._config.rt === cb.scRT || sb._config.rst === cb.scRT)) return sb
    }

    function Wb(bb, cb) {
      const sb = bb._renderingContexts[bb._renderingContexts.length - 1];
      if (!sb?._frameGraph) return;
      const Wb = kb(cb, bb);
      if (!Wb) return;
      if (1 === bb.msaaSamples) return void(Wb._config.clr = !1);
      const ab = Wb.enabled;
      Wb._config.clr = !0, Wb.enabled = !1, cb._beforeRender.unshift((() => {
        const cb = kb(sb, bb),
          Tb = cb?._config.rst === bb.scRT && cb._config.rt._colorView;
        Wb.enabled = !!Tb && ab, Wb._config.clr = !Tb, Tb && (Wb._colorAttachment.view = Tb)
      }))
    }
    sb.r(cb), sb.d(cb, {
      configureSwapchainOverlayScene: () => Wb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);