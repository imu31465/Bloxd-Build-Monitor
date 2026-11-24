export const id = 362;
export const ids = [362];
export const modules = {
  61445: (mm, Tm, fm) => {
    fm.d(Tm, {
      createShadowTask: () => am
    });
    var hm = null;

    function Am(mm) {
      return hm?.get(mm)
    }

    function am(mm, Tm) {
      const fm = new Set;
      0;
      const hm = {
        name: "QO",
        engine: mm,
        Aq: Tm,
        _passes: [],
        async _preload() {
          const mm = [];
          for (const fm of Tm.lights) {
            const Tm = fm.shadowGenerator,
              hm = Tm ? Am(Tm) : null;
            Tm?._preloadShadowTask && hm && mm.push(xm(Tm, hm))
          }
          await Promise.all(mm)
        },
        record() {
          hm._passes.length = 0;
          for (const hm of Tm.lights) {
            const am = hm.shadowGenerator,
              xm = am ? Am(am) : null;
            if (am?._ensureShadowTaskState && xm && !am._preloadPending) {
              fm.add(am);
              const hm = am._ensureShadowTaskState(mm, Tm, xm),
                Am = Tm._renderableVersion;
              hm._task.record(), hm._recordedVersion = Am
            }
          }
        },
        execute() {
          let hm = 0;
          for (const am of Tm.lights) {
            const xm = am.shadowGenerator,
              wm = xm ? Am(xm) : null;
            if (xm?._ensureShadowTaskState && xm._renderShadowMap && wm && !xm._preloadPending) {
              fm.add(xm);
              const Am = xm._shadowTaskState ?? null,
                am = xm._ensureShadowTaskState(mm, Tm, wm);
              if (am !== Am || am._recordedVersion !== Tm._renderableVersion) {
                const mm = Tm._renderableVersion;
                am._task.record(), am._recordedVersion = mm
              }
              hm += xm._renderShadowMap(mm, am)
            }
          }
          return hm
        },
        dispose() {
          hm._passes.length = 0;
          for (const mm of fm) {
            const Tm = mm._shadowTaskState;
            Tm && (Tm._task.dispose(), mm._shadowTaskState = void 0)
          }
          fm.clear()
        }
      };
      return hm
    }
    async function xm(mm, Tm) {
      mm._preloadPending = Tm, await (mm._preloadShadowTask?.(Tm)), mm._preloadPending === Tm && (mm._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);