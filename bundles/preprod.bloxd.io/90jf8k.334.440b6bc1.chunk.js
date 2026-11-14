export const id = 334;
export const ids = [334];
export const modules = {
  59011: (FF, WF, SF) => {
    SF.d(WF, {
      createShadowTask: () => uF
    });
    var CF = null;

    function AF(FF) {
      return CF?.get(FF)
    }

    function uF(FF, WF) {
      const SF = new Set;
      0;
      const CF = {
        name: "hC",
        engine: FF,
        ju: WF,
        _passes: [],
        async _preload() {
          const FF = [];
          for (const SF of WF.lights) {
            const WF = SF.shadowGenerator,
              CF = WF ? AF(WF) : null;
            WF?._preloadShadowTask && CF && FF.push(hF(WF, CF))
          }
          await Promise.all(FF)
        },
        record() {
          CF._passes.length = 0;
          for (const CF of WF.lights) {
            const uF = CF.shadowGenerator,
              hF = uF ? AF(uF) : null;
            if (uF?._ensureShadowTaskState && hF && !uF._preloadPending) {
              SF.add(uF);
              const CF = uF._ensureShadowTaskState(FF, WF, hF),
                AF = WF._renderableVersion;
              CF._task.record(), CF._recordedVersion = AF
            }
          }
        },
        execute() {
          let CF = 0;
          for (const uF of WF.lights) {
            const hF = uF.shadowGenerator,
              bW = hF ? AF(hF) : null;
            if (hF?._ensureShadowTaskState && hF._renderShadowMap && bW && !hF._preloadPending) {
              SF.add(hF);
              const AF = hF._shadowTaskState ?? null,
                uF = hF._ensureShadowTaskState(FF, WF, bW);
              if (uF !== AF || uF._recordedVersion !== WF._renderableVersion) {
                const FF = WF._renderableVersion;
                uF._task.record(), uF._recordedVersion = FF
              }
              CF += hF._renderShadowMap(FF, uF)
            }
          }
          return CF
        },
        dispose() {
          CF._passes.length = 0;
          for (const FF of SF) {
            const WF = FF._shadowTaskState;
            WF && (WF._task.dispose(), FF._shadowTaskState = void 0)
          }
          SF.clear()
        }
      };
      return CF
    }
    async function hF(FF, WF) {
      FF._preloadPending = WF, await (FF._preloadShadowTask?.(WF)), FF._preloadPending === WF && (FF._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);