export const id = 362;
export const ids = [362];
export const modules = {
  61367: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      createShadowTask: () => ik
    });
    var Xk = null;

    function Tk(kk) {
      return Xk?.get(kk)
    }

    function ik(kk, Fk) {
      const Ik = new Set;
      0;
      const Xk = {
        name: "Fe",
        engine: kk,
        Yw: Fk,
        _passes: [],
        async _preload() {
          const kk = [];
          for (const Ik of Fk.lights) {
            const Fk = Ik.shadowGenerator,
              Xk = Fk ? Tk(Fk) : null;
            Fk?._preloadShadowTask && Xk && kk.push(yk(Fk, Xk))
          }
          await Promise.all(kk)
        },
        record() {
          Xk._passes.length = 0;
          for (const Xk of Fk.lights) {
            const ik = Xk.shadowGenerator,
              yk = ik ? Tk(ik) : null;
            if (ik?._ensureShadowTaskState && yk && !ik._preloadPending) {
              Ik.add(ik);
              const Xk = ik._ensureShadowTaskState(kk, Fk, yk),
                Tk = Fk._renderableVersion;
              Xk._task.record(), Xk._recordedVersion = Tk
            }
          }
        },
        execute() {
          let Xk = 0;
          for (const ik of Fk.lights) {
            const yk = ik.shadowGenerator,
              lk = yk ? Tk(yk) : null;
            if (yk?._ensureShadowTaskState && yk._renderShadowMap && lk && !yk._preloadPending) {
              Ik.add(yk);
              const Tk = yk._shadowTaskState ?? null,
                ik = yk._ensureShadowTaskState(kk, Fk, lk);
              if (ik !== Tk || ik._recordedVersion !== Fk._renderableVersion) {
                const kk = Fk._renderableVersion;
                ik._task.record(), ik._recordedVersion = kk
              }
              Xk += yk._renderShadowMap(kk, ik)
            }
          }
          return Xk
        },
        dispose() {
          Xk._passes.length = 0;
          for (const kk of Ik) {
            const Fk = kk._shadowTaskState;
            Fk && (Fk._task.dispose(), kk._shadowTaskState = void 0)
          }
          Ik.clear()
        }
      };
      return Xk
    }
    async function yk(kk, Fk) {
      kk._preloadPending = Fk, await (kk._preloadShadowTask?.(Fk)), kk._preloadPending === Fk && (kk._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);