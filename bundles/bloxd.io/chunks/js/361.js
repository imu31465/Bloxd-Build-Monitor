export const id = 361;
export const ids = [361];
export const modules = {
  60778: (kk, ek, ik) => {
    ik.d(ek, {
      createShadowTask: () => Sk
    });
    var Dk = null;

    function fk(kk) {
      return Dk?.get(kk)
    }

    function Sk(kk, ek) {
      const ik = new Set;
      0;
      const Dk = {
        name: "jU",
        engine: kk,
        bw: ek,
        _passes: [],
        async _preload() {
          const kk = [];
          for (const ik of ek.lights) {
            const ek = ik.shadowGenerator,
              Dk = ek ? fk(ek) : null;
            ek?._preloadShadowTask && Dk && kk.push(bk(ek, Dk))
          }
          await Promise.all(kk)
        },
        record() {
          Dk._passes.length = 0;
          for (const Dk of ek.lights) {
            const Sk = Dk.shadowGenerator,
              bk = Sk ? fk(Sk) : null;
            if (Sk?._ensureShadowTaskState && bk && !Sk._preloadPending) {
              ik.add(Sk);
              const Dk = Sk._ensureShadowTaskState(kk, ek, bk),
                fk = ek._renderableVersion;
              Dk._task.record(), Dk._recordedVersion = fk
            }
          }
        },
        execute() {
          let Dk = 0;
          for (const Sk of ek.lights) {
            const bk = Sk.shadowGenerator,
              rk = bk ? fk(bk) : null;
            if (bk?._ensureShadowTaskState && bk._renderShadowMap && rk && !bk._preloadPending) {
              ik.add(bk);
              const fk = bk._shadowTaskState ?? null,
                Sk = bk._ensureShadowTaskState(kk, ek, rk);
              if (Sk !== fk || Sk._recordedVersion !== ek._renderableVersion) {
                const kk = ek._renderableVersion;
                Sk._task.record(), Sk._recordedVersion = kk
              }
              Dk += bk._renderShadowMap(kk, Sk)
            }
          }
          return Dk
        },
        dispose() {
          Dk._passes.length = 0;
          for (const kk of ik) {
            const ek = kk._shadowTaskState;
            ek && (ek._task.dispose(), kk._shadowTaskState = void 0)
          }
          ik.clear()
        }
      };
      return Dk
    }
    async function bk(kk, ek) {
      kk._preloadPending = ek, await (kk._preloadShadowTask?.(ek)), kk._preloadPending === ek && (kk._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);