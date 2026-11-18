export const id = 341;
export const ids = [341];
export const modules = {
  59799: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      for (const Wy of yb._frameGraph._tasks)
        if (Wy?._config && Wy._colorAttachment && (Wy._config.rt === bb.scRT || Wy._config.rst === bb.scRT)) return Wy
    }

    function hy(yb, bb) {
      const Wy = yb._renderingContexts[yb._renderingContexts.length - 1];
      if (!Wy?._frameGraph) return;
      const hy = Uy(bb, yb);
      if (!hy) return;
      if (1 === yb.msaaSamples) return void(hy._config.clr = !1);
      const fy = hy.enabled;
      hy._config.clr = !0, hy.enabled = !1, bb._beforeRender.unshift((() => {
        const bb = Uy(Wy, yb),
          Zy = bb?._config.rst === yb.scRT && bb._config.rt._colorView;
        hy.enabled = !!Zy && fy, hy._config.clr = !Zy, Zy && (hy._colorAttachment.view = Zy)
      }))
    }
    Wy.r(bb), Wy.d(bb, {
      configureSwapchainOverlayScene: () => hy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);