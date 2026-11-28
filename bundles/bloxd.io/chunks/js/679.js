export const id = 679;
export const ids = [679];
export const modules = {
  64512: (bb, wb, Mb) => {
    function eb(bb, wb) {
      for (const Mb of bb._frameGraph._tasks)
        if (Mb?._config && Mb._colorAttachment && (Mb._config.rt === wb.scRT || Mb._config.rst === wb.scRT)) return Mb
    }

    function Hb(bb, wb) {
      const Mb = bb._renderingContexts[bb._renderingContexts.length - 1];
      if (!Mb?._frameGraph) return;
      const Hb = eb(wb, bb);
      if (!Hb) return;
      if (1 === bb.msaaSamples) return void(Hb._config.clr = !1);
      const pb = Hb.enabled;
      Hb._config.clr = !0, Hb.enabled = !1, wb._beforeRender.unshift((() => {
        const wb = eb(Mb, bb),
          Vb = wb?._config.rst === bb.scRT && wb._config.rt._colorView;
        Hb.enabled = !!Vb && pb, Hb._config.clr = !Vb, Vb && (Hb._colorAttachment.view = Vb)
      }))
    }
    Mb.r(wb), Mb.d(wb, {
      configureSwapchainOverlayScene: () => Hb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);