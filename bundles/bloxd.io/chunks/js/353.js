export const id = 353;
export const ids = [353];
export const modules = {
  60418: (zz, tz, sz) => {
    function Fz(zz, tz) {
      for (const sz of zz._frameGraph._tasks)
        if (sz?._config && sz._colorAttachment && (sz._config.rt === tz.scRT || sz._config.rst === tz.scRT)) return sz
    }

    function Wz(zz, tz) {
      const sz = zz._renderingContexts[zz._renderingContexts.length - 1];
      if (!sz?._frameGraph) return;
      const Wz = Fz(tz, zz);
      if (!Wz) return;
      if (1 === zz.msaaSamples) return void(Wz._config.clr = !1);
      const Xz = Wz.enabled;
      Wz._config.clr = !0, Wz.enabled = !1, tz._beforeRender.unshift((() => {
        const tz = Fz(sz, zz),
          Oz = tz?._config.rst === zz.scRT && tz._config.rt._colorView;
        Wz.enabled = !!Oz && Xz, Wz._config.clr = !Oz, Oz && (Wz._colorAttachment.view = Oz)
      }))
    }
    sz.r(tz), sz.d(tz, {
      configureSwapchainOverlayScene: () => Wz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);