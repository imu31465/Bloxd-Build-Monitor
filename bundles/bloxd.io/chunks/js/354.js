export const id = 354;
export const ids = [354];
export const modules = {
  60684: (bb, cb, sb) => {
    sb.d(cb, {
      createShadowTask: () => ab
    });
    var kb = null;

    function Wb(bb) {
      return kb?.get(bb)
    }

    function ab(bb, cb) {
      const sb = new Set;
      0;
      const kb = {
        name: "Cm",
        engine: bb,
        aQ: cb,
        _passes: [],
        async _preload() {
          const bb = [];
          for (const sb of cb.lights) {
            const cb = sb.shadowGenerator,
              kb = cb ? Wb(cb) : null;
            cb?._preloadShadowTask && kb && bb.push(Tb(cb, kb))
          }
          await Promise.all(bb)
        },
        record() {
          kb._passes.length = 0;
          for (const kb of cb.lights) {
            const ab = kb.shadowGenerator,
              Tb = ab ? Wb(ab) : null;
            if (ab?._ensureShadowTaskState && Tb && !ab._preloadPending) {
              sb.add(ab);
              const kb = ab._ensureShadowTaskState(bb, cb, Tb),
                Wb = cb._renderableVersion;
              kb._task.record(), kb._recordedVersion = Wb
            }
          }
        },
        execute() {
          let kb = 0;
          for (const ab of cb.lights) {
            const Tb = ab.shadowGenerator,
              Ub = Tb ? Wb(Tb) : null;
            if (Tb?._ensureShadowTaskState && Tb._renderShadowMap && Ub && !Tb._preloadPending) {
              sb.add(Tb);
              const Wb = Tb._shadowTaskState ?? null,
                ab = Tb._ensureShadowTaskState(bb, cb, Ub);
              if (ab !== Wb || ab._recordedVersion !== cb._renderableVersion) {
                const bb = cb._renderableVersion;
                ab._task.record(), ab._recordedVersion = bb
              }
              kb += Tb._renderShadowMap(bb, ab)
            }
          }
          return kb
        },
        dispose() {
          kb._passes.length = 0;
          for (const bb of sb) {
            const cb = bb._shadowTaskState;
            cb && (cb._task.dispose(), bb._shadowTaskState = void 0)
          }
          sb.clear()
        }
      };
      return kb
    }
    async function Tb(bb, cb) {
      bb._preloadPending = cb, await (bb._preloadShadowTask?.(cb)), bb._preloadPending === cb && (bb._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);