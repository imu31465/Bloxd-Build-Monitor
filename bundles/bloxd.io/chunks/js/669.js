export const id = 669;
export const ids = [669];
export const modules = {
  63977: (BB, OB, GB) => {
    function YB(BB, OB) {
      for (const GB of BB._frameGraph._tasks)
        if (GB?._config && GB._colorAttachment && (GB._config.rt === OB.scRT || GB._config.rst === OB.scRT)) return GB
    }

    function DB(BB, OB) {
      const GB = BB._renderingContexts[BB._renderingContexts.length - 1];
      if (!GB?._frameGraph) return;
      const DB = YB(OB, BB);
      if (!DB) return;
      if (1 === BB.msaaSamples) return void(DB._config.clr = !1);
      const QB = DB.enabled;
      DB._config.clr = !0, DB.enabled = !1, OB._beforeRender.unshift((() => {
        const OB = YB(GB, BB),
          oB = OB?._config.rst === BB.scRT && OB._config.rt._colorView;
        DB.enabled = !!oB && QB, DB._config.clr = !oB, oB && (DB._colorAttachment.view = oB)
      }))
    }
    GB.r(OB), GB.d(OB, {
      configureSwapchainOverlayScene: () => DB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);