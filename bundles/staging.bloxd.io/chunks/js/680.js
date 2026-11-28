export const id = 680;
export const ids = [680];
export const modules = {
  64515: (bb, wb, Mb) => {
    Mb.d(wb, {
      createShadowTask: () => pb
    });
    var eb = null;

    function Hb(bb) {
      return eb?.get(bb)
    }

    function pb(bb, wb) {
      const Mb = new Set;
      0;
      const eb = {
        name: "hO",
        engine: bb,
        JE: wb,
        _passes: [],
        async _preload() {
          const bb = [];
          for (const Mb of wb.lights) {
            const wb = Mb.shadowGenerator,
              eb = wb ? Hb(wb) : null;
            wb?._preloadShadowTask && eb && bb.push(Vb(wb, eb))
          }
          await Promise.all(bb)
        },
        record() {
          eb._passes.length = 0;
          for (const eb of wb.lights) {
            const pb = eb.shadowGenerator,
              Vb = pb ? Hb(pb) : null;
            if (pb?._ensureShadowTaskState && Vb && !pb._preloadPending) {
              Mb.add(pb);
              const eb = pb._ensureShadowTaskState(bb, wb, Vb),
                Hb = wb._renderableVersion;
              eb._task.record(), eb._recordedVersion = Hb
            }
          }
        },
        execute() {
          let eb = 0;
          for (const pb of wb.lights) {
            const Vb = pb.shadowGenerator,
              gb = Vb ? Hb(Vb) : null;
            if (Vb?._ensureShadowTaskState && Vb._renderShadowMap && gb && !Vb._preloadPending) {
              Mb.add(Vb);
              const Hb = Vb._shadowTaskState ?? null,
                pb = Vb._ensureShadowTaskState(bb, wb, gb);
              if (pb !== Hb || pb._recordedVersion !== wb._renderableVersion) {
                const bb = wb._renderableVersion;
                pb._task.record(), pb._recordedVersion = bb
              }
              eb += Vb._renderShadowMap(bb, pb)
            }
          }
          return eb
        },
        dispose() {
          eb._passes.length = 0;
          for (const bb of Mb) {
            const wb = bb._shadowTaskState;
            wb && (wb._task.dispose(), bb._shadowTaskState = void 0)
          }
          Mb.clear()
        }
      };
      return eb
    }
    async function Vb(bb, wb) {
      bb._preloadPending = wb, await (bb._preloadShadowTask?.(wb)), bb._preloadPending === wb && (bb._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);