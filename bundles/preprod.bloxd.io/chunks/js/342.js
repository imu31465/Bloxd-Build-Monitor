export const id = 342;
export const ids = [342];
export const modules = {
  59803: (yb, bb, Wy) => {
    Wy.d(bb, {
      createShadowTask: () => fy
    });
    var Uy = null;

    function hy(yb) {
      return Uy?.get(yb)
    }

    function fy(yb, bb) {
      const Wy = new Set;
      0;
      const Uy = {
        name: "SU",
        engine: yb,
        Pf: bb,
        _passes: [],
        async _preload() {
          const yb = [];
          for (const Wy of bb.lights) {
            const bb = Wy.shadowGenerator,
              Uy = bb ? hy(bb) : null;
            bb?._preloadShadowTask && Uy && yb.push(Zy(bb, Uy))
          }
          await Promise.all(yb)
        },
        record() {
          Uy._passes.length = 0;
          for (const Uy of bb.lights) {
            const fy = Uy.shadowGenerator,
              Zy = fy ? hy(fy) : null;
            if (fy?._ensureShadowTaskState && Zy && !fy._preloadPending) {
              Wy.add(fy);
              const Uy = fy._ensureShadowTaskState(yb, bb, Zy),
                hy = bb._renderableVersion;
              Uy._task.record(), Uy._recordedVersion = hy
            }
          }
        },
        execute() {
          let Uy = 0;
          for (const fy of bb.lights) {
            const Zy = fy.shadowGenerator,
              cb = Zy ? hy(Zy) : null;
            if (Zy?._ensureShadowTaskState && Zy._renderShadowMap && cb && !Zy._preloadPending) {
              Wy.add(Zy);
              const hy = Zy._shadowTaskState ?? null,
                fy = Zy._ensureShadowTaskState(yb, bb, cb);
              if (fy !== hy || fy._recordedVersion !== bb._renderableVersion) {
                const yb = bb._renderableVersion;
                fy._task.record(), fy._recordedVersion = yb
              }
              Uy += Zy._renderShadowMap(yb, fy)
            }
          }
          return Uy
        },
        dispose() {
          Uy._passes.length = 0;
          for (const yb of Wy) {
            const bb = yb._shadowTaskState;
            bb && (bb._task.dispose(), yb._shadowTaskState = void 0)
          }
          Wy.clear()
        }
      };
      return Uy
    }
    async function Zy(yb, bb) {
      yb._preloadPending = bb, await (yb._preloadShadowTask?.(bb)), yb._preloadPending === bb && (yb._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);