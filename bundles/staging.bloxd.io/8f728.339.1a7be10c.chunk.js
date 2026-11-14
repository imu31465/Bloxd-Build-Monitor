export const id = 339;
export const ids = [339];
export const modules = {
  59192: (cB, Bc, nc) => {
    nc.d(Bc, {
      createShadowTask: () => rB
    });
    var Vc = null;

    function Ic(cB) {
      return Vc?.get(cB)
    }

    function rB(cB, Bc) {
      const nc = new Set;
      0;
      const Vc = {
        name: "fV",
        engine: cB,
        Ir: Bc,
        _passes: [],
        async _preload() {
          const cB = [];
          for (const nc of Bc.lights) {
            const Bc = nc.shadowGenerator,
              Vc = Bc ? Ic(Bc) : null;
            Bc?._preloadShadowTask && Vc && cB.push(uc(Bc, Vc))
          }
          await Promise.all(cB)
        },
        record() {
          Vc._passes.length = 0;
          for (const Vc of Bc.lights) {
            const rB = Vc.shadowGenerator,
              uc = rB ? Ic(rB) : null;
            if (rB?._ensureShadowTaskState && uc && !rB._preloadPending) {
              nc.add(rB);
              const Vc = rB._ensureShadowTaskState(cB, Bc, uc),
                Ic = Bc._renderableVersion;
              Vc._task.record(), Vc._recordedVersion = Ic
            }
          }
        },
        execute() {
          let Vc = 0;
          for (const rB of Bc.lights) {
            const uc = rB.shadowGenerator,
              sc = uc ? Ic(uc) : null;
            if (uc?._ensureShadowTaskState && uc._renderShadowMap && sc && !uc._preloadPending) {
              nc.add(uc);
              const Ic = uc._shadowTaskState ?? null,
                rB = uc._ensureShadowTaskState(cB, Bc, sc);
              if (rB !== Ic || rB._recordedVersion !== Bc._renderableVersion) {
                const cB = Bc._renderableVersion;
                rB._task.record(), rB._recordedVersion = cB
              }
              Vc += uc._renderShadowMap(cB, rB)
            }
          }
          return Vc
        },
        dispose() {
          Vc._passes.length = 0;
          for (const cB of nc) {
            const Bc = cB._shadowTaskState;
            Bc && (Bc._task.dispose(), cB._shadowTaskState = void 0)
          }
          nc.clear()
        }
      };
      return Vc
    }
    async function uc(cB, Bc) {
      cB._preloadPending = Bc, await (cB._preloadShadowTask?.(Bc)), cB._preloadPending === Bc && (cB._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);