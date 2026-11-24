export const id = 366;
export const ids = [366];
export const modules = {
  61244: (TT, UT, mT) => {
    mT.d(UT, {
      createShadowTask: () => MT
    });
    var WT = null;

    function zT(TT) {
      return WT?.get(TT)
    }

    function MT(TT, UT) {
      const mT = new Set;
      0;
      const WT = {
        name: "Ep",
        engine: TT,
        XZ: UT,
        _passes: [],
        async _preload() {
          const TT = [];
          for (const mT of UT.lights) {
            const UT = mT.shadowGenerator,
              WT = UT ? zT(UT) : null;
            UT?._preloadShadowTask && WT && TT.push(gT(UT, WT))
          }
          await Promise.all(TT)
        },
        record() {
          WT._passes.length = 0;
          for (const WT of UT.lights) {
            const MT = WT.shadowGenerator,
              gT = MT ? zT(MT) : null;
            if (MT?._ensureShadowTaskState && gT && !MT._preloadPending) {
              mT.add(MT);
              const WT = MT._ensureShadowTaskState(TT, UT, gT),
                zT = UT._renderableVersion;
              WT._task.record(), WT._recordedVersion = zT
            }
          }
        },
        execute() {
          let WT = 0;
          for (const MT of UT.lights) {
            const gT = MT.shadowGenerator,
              nT = gT ? zT(gT) : null;
            if (gT?._ensureShadowTaskState && gT._renderShadowMap && nT && !gT._preloadPending) {
              mT.add(gT);
              const zT = gT._shadowTaskState ?? null,
                MT = gT._ensureShadowTaskState(TT, UT, nT);
              if (MT !== zT || MT._recordedVersion !== UT._renderableVersion) {
                const TT = UT._renderableVersion;
                MT._task.record(), MT._recordedVersion = TT
              }
              WT += gT._renderShadowMap(TT, MT)
            }
          }
          return WT
        },
        dispose() {
          WT._passes.length = 0;
          for (const TT of mT) {
            const UT = TT._shadowTaskState;
            UT && (UT._task.dispose(), TT._shadowTaskState = void 0)
          }
          mT.clear()
        }
      };
      return WT
    }
    async function gT(TT, UT) {
      TT._preloadPending = UT, await (TT._preloadShadowTask?.(UT)), TT._preloadPending === UT && (TT._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);