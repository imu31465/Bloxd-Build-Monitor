export const id = 354;
export const ids = [354];
export const modules = {
  60121: (TT, oT, IT) => {
    IT.d(oT, {
      createShadowTask: () => kT
    });
    var iT = null;

    function zT(TT) {
      return iT?.get(TT)
    }

    function kT(TT, oT) {
      const IT = new Set;
      0;
      const iT = {
        name: "Sc",
        engine: TT,
        NK: oT,
        _passes: [],
        async _preload() {
          const TT = [];
          for (const IT of oT.lights) {
            const oT = IT.shadowGenerator,
              iT = oT ? zT(oT) : null;
            oT?._preloadShadowTask && iT && TT.push(WT(oT, iT))
          }
          await Promise.all(TT)
        },
        record() {
          iT._passes.length = 0;
          for (const iT of oT.lights) {
            const kT = iT.shadowGenerator,
              WT = kT ? zT(kT) : null;
            if (kT?._ensureShadowTaskState && WT && !kT._preloadPending) {
              IT.add(kT);
              const iT = kT._ensureShadowTaskState(TT, oT, WT),
                zT = oT._renderableVersion;
              iT._task.record(), iT._recordedVersion = zT
            }
          }
        },
        execute() {
          let iT = 0;
          for (const kT of oT.lights) {
            const WT = kT.shadowGenerator,
              XT = WT ? zT(WT) : null;
            if (WT?._ensureShadowTaskState && WT._renderShadowMap && XT && !WT._preloadPending) {
              IT.add(WT);
              const zT = WT._shadowTaskState ?? null,
                kT = WT._ensureShadowTaskState(TT, oT, XT);
              if (kT !== zT || kT._recordedVersion !== oT._renderableVersion) {
                const TT = oT._renderableVersion;
                kT._task.record(), kT._recordedVersion = TT
              }
              iT += WT._renderShadowMap(TT, kT)
            }
          }
          return iT
        },
        dispose() {
          iT._passes.length = 0;
          for (const TT of IT) {
            const oT = TT._shadowTaskState;
            oT && (oT._task.dispose(), TT._shadowTaskState = void 0)
          }
          IT.clear()
        }
      };
      return iT
    }
    async function WT(TT, oT) {
      TT._preloadPending = oT, await (TT._preloadShadowTask?.(oT)), TT._preloadPending === oT && (TT._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);