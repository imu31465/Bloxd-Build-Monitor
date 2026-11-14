export const id = 334;
export const ids = [334];
export const modules = {
  58694: (WW, RW, MW) => {
    MW.d(RW, {
      createShadowTask: () => zR
    });
    var wW = null;

    function CW(WW) {
      return wW?.get(WW)
    }

    function zR(WW, RW) {
      const MW = new Set;
      0;
      const wW = {
        name: "Aw",
        engine: WW,
        LC: RW,
        _passes: [],
        async _preload() {
          const WW = [];
          for (const MW of RW.lights) {
            const RW = MW.shadowGenerator,
              wW = RW ? CW(RW) : null;
            RW?._preloadShadowTask && wW && WW.push(AW(RW, wW))
          }
          await Promise.all(WW)
        },
        record() {
          wW._passes.length = 0;
          for (const wW of RW.lights) {
            const zR = wW.shadowGenerator,
              AW = zR ? CW(zR) : null;
            if (zR?._ensureShadowTaskState && AW && !zR._preloadPending) {
              MW.add(zR);
              const wW = zR._ensureShadowTaskState(WW, RW, AW),
                CW = RW._renderableVersion;
              wW._task.record(), wW._recordedVersion = CW
            }
          }
        },
        execute() {
          let wW = 0;
          for (const zR of RW.lights) {
            const AW = zR.shadowGenerator,
              bR = AW ? CW(AW) : null;
            if (AW?._ensureShadowTaskState && AW._renderShadowMap && bR && !AW._preloadPending) {
              MW.add(AW);
              const CW = AW._shadowTaskState ?? null,
                zR = AW._ensureShadowTaskState(WW, RW, bR);
              if (zR !== CW || zR._recordedVersion !== RW._renderableVersion) {
                const WW = RW._renderableVersion;
                zR._task.record(), zR._recordedVersion = WW
              }
              wW += AW._renderShadowMap(WW, zR)
            }
          }
          return wW
        },
        dispose() {
          wW._passes.length = 0;
          for (const WW of MW) {
            const RW = WW._shadowTaskState;
            RW && (RW._task.dispose(), WW._shadowTaskState = void 0)
          }
          MW.clear()
        }
      };
      return wW
    }
    async function AW(WW, RW) {
      WW._preloadPending = RW, await (WW._preloadShadowTask?.(RW)), WW._preloadPending === RW && (WW._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);