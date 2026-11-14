export const id = 333;
export const ids = [333];
export const modules = {
  59003: (FF, WF, SF) => {
    function CF(FF, WF) {
      for (const SF of FF._frameGraph._tasks)
        if (SF?._config && SF._colorAttachment && (SF._config.rt === WF.scRT || SF._config.rst === WF.scRT)) return SF
    }

    function AF(FF, WF) {
      const SF = FF._renderingContexts[FF._renderingContexts.length - 1];
      if (!SF?._frameGraph) return;
      const AF = CF(WF, FF);
      if (!AF) return;
      if (1 === FF.msaaSamples) return void(AF._config.clr = !1);
      const uF = AF.enabled;
      AF._config.clr = !0, AF.enabled = !1, WF._beforeRender.unshift((() => {
        const WF = CF(SF, FF),
          hF = WF?._config.rst === FF.scRT && WF._config.rt._colorView;
        AF.enabled = !!hF && uF, AF._config.clr = !hF, hF && (AF._colorAttachment.view = hF)
      }))
    }
    SF.r(WF), SF.d(WF, {
      configureSwapchainOverlayScene: () => AF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);