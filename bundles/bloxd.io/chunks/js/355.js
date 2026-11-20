export const id = 355;
export const ids = [355];
export const modules = {
  60663: (TT, kT, cT) => {
    cT.d(kT, {
      createShadowTask: () => KT
    });
    var lT = null;

    function MT(TT) {
      return lT?.get(TT)
    }

    function KT(TT, kT) {
      const cT = new Set;
      0;
      const lT = {
        name: "Wj",
        engine: TT,
        et: kT,
        _passes: [],
        async _preload() {
          const TT = [];
          for (const cT of kT.lights) {
            const kT = cT.shadowGenerator,
              lT = kT ? MT(kT) : null;
            kT?._preloadShadowTask && lT && TT.push(OT(kT, lT))
          }
          await Promise.all(TT)
        },
        record() {
          lT._passes.length = 0;
          for (const lT of kT.lights) {
            const KT = lT.shadowGenerator,
              OT = KT ? MT(KT) : null;
            if (KT?._ensureShadowTaskState && OT && !KT._preloadPending) {
              cT.add(KT);
              const lT = KT._ensureShadowTaskState(TT, kT, OT),
                MT = kT._renderableVersion;
              lT._task.record(), lT._recordedVersion = MT
            }
          }
        },
        execute() {
          let lT = 0;
          for (const KT of kT.lights) {
            const OT = KT.shadowGenerator,
              yT = OT ? MT(OT) : null;
            if (OT?._ensureShadowTaskState && OT._renderShadowMap && yT && !OT._preloadPending) {
              cT.add(OT);
              const MT = OT._shadowTaskState ?? null,
                KT = OT._ensureShadowTaskState(TT, kT, yT);
              if (KT !== MT || KT._recordedVersion !== kT._renderableVersion) {
                const TT = kT._renderableVersion;
                KT._task.record(), KT._recordedVersion = TT
              }
              lT += OT._renderShadowMap(TT, KT)
            }
          }
          return lT
        },
        dispose() {
          lT._passes.length = 0;
          for (const TT of cT) {
            const kT = TT._shadowTaskState;
            kT && (kT._task.dispose(), TT._shadowTaskState = void 0)
          }
          cT.clear()
        }
      };
      return lT
    }
    async function OT(TT, kT) {
      TT._preloadPending = kT, await (TT._preloadShadowTask?.(kT)), TT._preloadPending === kT && (TT._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);