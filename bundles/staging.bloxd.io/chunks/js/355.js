export const id = 355;
export const ids = [355];
export const modules = {
  60688: (vv, zv, Pv) => {
    Pv.d(zv, {
      createShadowTask: () => ev
    });
    var hv = null;

    function Sv(vv) {
      return hv?.get(vv)
    }

    function ev(vv, zv) {
      const Pv = new Set;
      0;
      const hv = {
        name: "Jw",
        engine: vv,
        Is: zv,
        _passes: [],
        async _preload() {
          const vv = [];
          for (const Pv of zv.lights) {
            const zv = Pv.shadowGenerator,
              hv = zv ? Sv(zv) : null;
            zv?._preloadShadowTask && hv && vv.push(gv(zv, hv))
          }
          await Promise.all(vv)
        },
        record() {
          hv._passes.length = 0;
          for (const hv of zv.lights) {
            const ev = hv.shadowGenerator,
              gv = ev ? Sv(ev) : null;
            if (ev?._ensureShadowTaskState && gv && !ev._preloadPending) {
              Pv.add(ev);
              const hv = ev._ensureShadowTaskState(vv, zv, gv),
                Sv = zv._renderableVersion;
              hv._task.record(), hv._recordedVersion = Sv
            }
          }
        },
        execute() {
          let hv = 0;
          for (const ev of zv.lights) {
            const gv = ev.shadowGenerator,
              pv = gv ? Sv(gv) : null;
            if (gv?._ensureShadowTaskState && gv._renderShadowMap && pv && !gv._preloadPending) {
              Pv.add(gv);
              const Sv = gv._shadowTaskState ?? null,
                ev = gv._ensureShadowTaskState(vv, zv, pv);
              if (ev !== Sv || ev._recordedVersion !== zv._renderableVersion) {
                const vv = zv._renderableVersion;
                ev._task.record(), ev._recordedVersion = vv
              }
              hv += gv._renderShadowMap(vv, ev)
            }
          }
          return hv
        },
        dispose() {
          hv._passes.length = 0;
          for (const vv of Pv) {
            const zv = vv._shadowTaskState;
            zv && (zv._task.dispose(), vv._shadowTaskState = void 0)
          }
          Pv.clear()
        }
      };
      return hv
    }
    async function gv(vv, zv) {
      vv._preloadPending = zv, await (vv._preloadShadowTask?.(zv)), vv._preloadPending === zv && (vv._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);