export const id = 679;
export const ids = [679];
export const modules = {
  64497: (WW, iW, OW) => {
    OW.d(iW, {
      createShadowTask: () => NW
    });
    var mW = null;

    function EW(WW) {
      return mW?.get(WW)
    }

    function NW(WW, iW) {
      const OW = new Set;
      0;
      const mW = {
        name: "nZ",
        engine: WW,
        rb: iW,
        _passes: [],
        async _preload() {
          const WW = [];
          for (const OW of iW.lights) {
            const iW = OW.shadowGenerator,
              mW = iW ? EW(iW) : null;
            iW?._preloadShadowTask && mW && WW.push(PW(iW, mW))
          }
          await Promise.all(WW)
        },
        record() {
          mW._passes.length = 0;
          for (const mW of iW.lights) {
            const NW = mW.shadowGenerator,
              PW = NW ? EW(NW) : null;
            if (NW?._ensureShadowTaskState && PW && !NW._preloadPending) {
              OW.add(NW);
              const mW = NW._ensureShadowTaskState(WW, iW, PW),
                EW = iW._renderableVersion;
              mW._task.record(), mW._recordedVersion = EW
            }
          }
        },
        execute() {
          let mW = 0;
          for (const NW of iW.lights) {
            const PW = NW.shadowGenerator,
              LW = PW ? EW(PW) : null;
            if (PW?._ensureShadowTaskState && PW._renderShadowMap && LW && !PW._preloadPending) {
              OW.add(PW);
              const EW = PW._shadowTaskState ?? null,
                NW = PW._ensureShadowTaskState(WW, iW, LW);
              if (NW !== EW || NW._recordedVersion !== iW._renderableVersion) {
                const WW = iW._renderableVersion;
                NW._task.record(), NW._recordedVersion = WW
              }
              mW += PW._renderShadowMap(WW, NW)
            }
          }
          return mW
        },
        dispose() {
          mW._passes.length = 0;
          for (const WW of OW) {
            const iW = WW._shadowTaskState;
            iW && (iW._task.dispose(), WW._shadowTaskState = void 0)
          }
          OW.clear()
        }
      };
      return mW
    }
    async function PW(WW, iW) {
      WW._preloadPending = iW, await (WW._preloadShadowTask?.(iW)), WW._preloadPending === iW && (WW._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);