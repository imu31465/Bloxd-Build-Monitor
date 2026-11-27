export const id = 680;
export const ids = [680];
export const modules = {
  64719: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      createShadowTask: () => ar
    });
    var Zr = null;

    function Wr(rr) {
      return Zr?.get(rr)
    }

    function ar(rr, Sr) {
      const Qr = new Set;
      0;
      const Zr = {
        name: "Px",
        engine: rr,
        Dt: Sr,
        _passes: [],
        async _preload() {
          const rr = [];
          for (const Qr of Sr.lights) {
            const Sr = Qr.shadowGenerator,
              Zr = Sr ? Wr(Sr) : null;
            Sr?._preloadShadowTask && Zr && rr.push(jr(Sr, Zr))
          }
          await Promise.all(rr)
        },
        record() {
          Zr._passes.length = 0;
          for (const Zr of Sr.lights) {
            const ar = Zr.shadowGenerator,
              jr = ar ? Wr(ar) : null;
            if (ar?._ensureShadowTaskState && jr && !ar._preloadPending) {
              Qr.add(ar);
              const Zr = ar._ensureShadowTaskState(rr, Sr, jr),
                Wr = Sr._renderableVersion;
              Zr._task.record(), Zr._recordedVersion = Wr
            }
          }
        },
        execute() {
          let Zr = 0;
          for (const ar of Sr.lights) {
            const jr = ar.shadowGenerator,
              Ir = jr ? Wr(jr) : null;
            if (jr?._ensureShadowTaskState && jr._renderShadowMap && Ir && !jr._preloadPending) {
              Qr.add(jr);
              const Wr = jr._shadowTaskState ?? null,
                ar = jr._ensureShadowTaskState(rr, Sr, Ir);
              if (ar !== Wr || ar._recordedVersion !== Sr._renderableVersion) {
                const rr = Sr._renderableVersion;
                ar._task.record(), ar._recordedVersion = rr
              }
              Zr += jr._renderShadowMap(rr, ar)
            }
          }
          return Zr
        },
        dispose() {
          Zr._passes.length = 0;
          for (const rr of Qr) {
            const Sr = rr._shadowTaskState;
            Sr && (Sr._task.dispose(), rr._shadowTaskState = void 0)
          }
          Qr.clear()
        }
      };
      return Zr
    }
    async function jr(rr, Sr) {
      rr._preloadPending = Sr, await (rr._preloadShadowTask?.(Sr)), rr._preloadPending === Sr && (rr._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);