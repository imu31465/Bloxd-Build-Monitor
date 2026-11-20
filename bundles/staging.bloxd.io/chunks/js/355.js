export const id = 355;
export const ids = [355];
export const modules = {
  60702: (bb, ub, hb) => {
    hb.d(ub, {
      createShadowTask: () => Gb
    });
    var Bb = null;

    function Ob(bb) {
      return Bb?.get(bb)
    }

    function Gb(bb, ub) {
      const hb = new Set;
      0;
      const Bb = {
        name: "tZ",
        engine: bb,
        Xp: ub,
        _passes: [],
        async _preload() {
          const bb = [];
          for (const hb of ub.lights) {
            const ub = hb.shadowGenerator,
              Bb = ub ? Ob(ub) : null;
            ub?._preloadShadowTask && Bb && bb.push(Ub(ub, Bb))
          }
          await Promise.all(bb)
        },
        record() {
          Bb._passes.length = 0;
          for (const Bb of ub.lights) {
            const Gb = Bb.shadowGenerator,
              Ub = Gb ? Ob(Gb) : null;
            if (Gb?._ensureShadowTaskState && Ub && !Gb._preloadPending) {
              hb.add(Gb);
              const Bb = Gb._ensureShadowTaskState(bb, ub, Ub),
                Ob = ub._renderableVersion;
              Bb._task.record(), Bb._recordedVersion = Ob
            }
          }
        },
        execute() {
          let Bb = 0;
          for (const Gb of ub.lights) {
            const Ub = Gb.shadowGenerator,
              Lb = Ub ? Ob(Ub) : null;
            if (Ub?._ensureShadowTaskState && Ub._renderShadowMap && Lb && !Ub._preloadPending) {
              hb.add(Ub);
              const Ob = Ub._shadowTaskState ?? null,
                Gb = Ub._ensureShadowTaskState(bb, ub, Lb);
              if (Gb !== Ob || Gb._recordedVersion !== ub._renderableVersion) {
                const bb = ub._renderableVersion;
                Gb._task.record(), Gb._recordedVersion = bb
              }
              Bb += Ub._renderShadowMap(bb, Gb)
            }
          }
          return Bb
        },
        dispose() {
          Bb._passes.length = 0;
          for (const bb of hb) {
            const ub = bb._shadowTaskState;
            ub && (ub._task.dispose(), bb._shadowTaskState = void 0)
          }
          hb.clear()
        }
      };
      return Bb
    }
    async function Ub(bb, ub) {
      bb._preloadPending = ub, await (bb._preloadShadowTask?.(ub)), bb._preloadPending === ub && (bb._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);