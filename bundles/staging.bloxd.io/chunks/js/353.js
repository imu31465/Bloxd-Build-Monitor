export const id = 353;
export const ids = [353];
export const modules = {
  61109: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      for (const yu of uu._frameGraph._tasks)
        if (yu?._config && yu._colorAttachment && (yu._config.rt === Ru.scRT || yu._config.rst === Ru.scRT)) return yu
    }

    function Ku(uu, Ru) {
      const yu = uu._renderingContexts[uu._renderingContexts.length - 1];
      if (!yu?._frameGraph) return;
      const Ku = Eu(Ru, uu);
      if (!Ku) return;
      if (1 === uu.msaaSamples) return void(Ku._config.clr = !1);
      const Qu = Ku.enabled;
      Ku._config.clr = !0, Ku.enabled = !1, Ru._beforeRender.unshift((() => {
        const Ru = Eu(yu, uu),
          mu = Ru?._config.rst === uu.scRT && Ru._config.rt._colorView;
        Ku.enabled = !!mu && Qu, Ku._config.clr = !mu, mu && (Ku._colorAttachment.view = mu)
      }))
    }
    yu.r(Ru), yu.d(Ru, {
      configureSwapchainOverlayScene: () => Ku
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);