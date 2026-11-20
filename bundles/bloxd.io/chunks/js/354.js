export const id = 354;
export const ids = [354];
export const modules = {
  61008: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      createShadowTask: () => ak
    });
    var Rk = null;

    function tk(kk) {
      return Rk?.get(kk)
    }

    function ak(kk, Fk) {
      const Bk = new Set;
      0;
      const Rk = {
        name: "Ye",
        engine: kk,
        ef: Fk,
        _passes: [],
        async _preload() {
          const kk = [];
          for (const Bk of Fk.lights) {
            const Fk = Bk.shadowGenerator,
              Rk = Fk ? tk(Fk) : null;
            Fk?._preloadShadowTask && Rk && kk.push(Xk(Fk, Rk))
          }
          await Promise.all(kk)
        },
        record() {
          Rk._passes.length = 0;
          for (const Rk of Fk.lights) {
            const ak = Rk.shadowGenerator,
              Xk = ak ? tk(ak) : null;
            if (ak?._ensureShadowTaskState && Xk && !ak._preloadPending) {
              Bk.add(ak);
              const Rk = ak._ensureShadowTaskState(kk, Fk, Xk),
                tk = Fk._renderableVersion;
              Rk._task.record(), Rk._recordedVersion = tk
            }
          }
        },
        execute() {
          let Rk = 0;
          for (const ak of Fk.lights) {
            const Xk = ak.shadowGenerator,
              bk = Xk ? tk(Xk) : null;
            if (Xk?._ensureShadowTaskState && Xk._renderShadowMap && bk && !Xk._preloadPending) {
              Bk.add(Xk);
              const tk = Xk._shadowTaskState ?? null,
                ak = Xk._ensureShadowTaskState(kk, Fk, bk);
              if (ak !== tk || ak._recordedVersion !== Fk._renderableVersion) {
                const kk = Fk._renderableVersion;
                ak._task.record(), ak._recordedVersion = kk
              }
              Rk += Xk._renderShadowMap(kk, ak)
            }
          }
          return Rk
        },
        dispose() {
          Rk._passes.length = 0;
          for (const kk of Bk) {
            const Fk = kk._shadowTaskState;
            Fk && (Fk._task.dispose(), kk._shadowTaskState = void 0)
          }
          Bk.clear()
        }
      };
      return Rk
    }
    async function Xk(kk, Fk) {
      kk._preloadPending = Fk, await (kk._preloadShadowTask?.(Fk)), kk._preloadPending === Fk && (kk._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);