export const id = 354;
export const ids = [354];
export const modules = {
  60355: (bb, ab, Ub) => {
    Ub.d(ab, {
      createShadowTask: () => Tb
    });
    var Ab = null;

    function Mb(bb) {
      return Ab?.get(bb)
    }

    function Tb(bb, ab) {
      const Ub = new Set;
      0;
      const Ab = {
        name: "qX",
        engine: bb,
        ZR: ab,
        _passes: [],
        async _preload() {
          const bb = [];
          for (const Ub of ab.lights) {
            const ab = Ub.shadowGenerator,
              Ab = ab ? Mb(ab) : null;
            ab?._preloadShadowTask && Ab && bb.push(Eb(ab, Ab))
          }
          await Promise.all(bb)
        },
        record() {
          Ab._passes.length = 0;
          for (const Ab of ab.lights) {
            const Tb = Ab.shadowGenerator,
              Eb = Tb ? Mb(Tb) : null;
            if (Tb?._ensureShadowTaskState && Eb && !Tb._preloadPending) {
              Ub.add(Tb);
              const Ab = Tb._ensureShadowTaskState(bb, ab, Eb),
                Mb = ab._renderableVersion;
              Ab._task.record(), Ab._recordedVersion = Mb
            }
          }
        },
        execute() {
          let Ab = 0;
          for (const Tb of ab.lights) {
            const Eb = Tb.shadowGenerator,
              Yb = Eb ? Mb(Eb) : null;
            if (Eb?._ensureShadowTaskState && Eb._renderShadowMap && Yb && !Eb._preloadPending) {
              Ub.add(Eb);
              const Mb = Eb._shadowTaskState ?? null,
                Tb = Eb._ensureShadowTaskState(bb, ab, Yb);
              if (Tb !== Mb || Tb._recordedVersion !== ab._renderableVersion) {
                const bb = ab._renderableVersion;
                Tb._task.record(), Tb._recordedVersion = bb
              }
              Ab += Eb._renderShadowMap(bb, Tb)
            }
          }
          return Ab
        },
        dispose() {
          Ab._passes.length = 0;
          for (const bb of Ub) {
            const ab = bb._shadowTaskState;
            ab && (ab._task.dispose(), bb._shadowTaskState = void 0)
          }
          Ub.clear()
        }
      };
      return Ab
    }
    async function Eb(bb, ab) {
      bb._preloadPending = ab, await (bb._preloadShadowTask?.(ab)), bb._preloadPending === ab && (bb._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);