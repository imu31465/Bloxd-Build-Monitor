export const id = 353;
export const ids = [353];
export const modules = {
  60420: (zz, uz, bz) => {
    function Ez(zz, uz) {
      for (const bz of zz._frameGraph._tasks)
        if (bz?._config && bz._colorAttachment && (bz._config.rt === uz.scRT || bz._config.rst === uz.scRT)) return bz
    }

    function nz(zz, uz) {
      const bz = zz._renderingContexts[zz._renderingContexts.length - 1];
      if (!bz?._frameGraph) return;
      const nz = Ez(uz, zz);
      if (!nz) return;
      if (1 === zz.msaaSamples) return void(nz._config.clr = !1);
      const iz = nz.enabled;
      nz._config.clr = !0, nz.enabled = !1, uz._beforeRender.unshift((() => {
        const uz = Ez(bz, zz),
          lz = uz?._config.rst === zz.scRT && uz._config.rt._colorView;
        nz.enabled = !!lz && iz, nz._config.clr = !lz, lz && (nz._colorAttachment.view = lz)
      }))
    }
    bz.r(uz), bz.d(uz, {
      configureSwapchainOverlayScene: () => nz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);