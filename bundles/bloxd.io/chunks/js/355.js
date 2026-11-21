export const id = 355;
export const ids = [355];
export const modules = {
  60974: (dd, Jd, kd) => {
    kd.d(Jd, {
      createShadowTask: () => Wd
    });
    var pd = null;

    function Nd(dd) {
      return pd?.get(dd)
    }

    function Wd(dd, Jd) {
      const kd = new Set;
      0;
      const pd = {
        name: "cQ",
        engine: dd,
        BO: Jd,
        _passes: [],
        async _preload() {
          const dd = [];
          for (const kd of Jd.lights) {
            const Jd = kd.shadowGenerator,
              pd = Jd ? Nd(Jd) : null;
            Jd?._preloadShadowTask && pd && dd.push(Pd(Jd, pd))
          }
          await Promise.all(dd)
        },
        record() {
          pd._passes.length = 0;
          for (const pd of Jd.lights) {
            const Wd = pd.shadowGenerator,
              Pd = Wd ? Nd(Wd) : null;
            if (Wd?._ensureShadowTaskState && Pd && !Wd._preloadPending) {
              kd.add(Wd);
              const pd = Wd._ensureShadowTaskState(dd, Jd, Pd),
                Nd = Jd._renderableVersion;
              pd._task.record(), pd._recordedVersion = Nd
            }
          }
        },
        execute() {
          let pd = 0;
          for (const Wd of Jd.lights) {
            const Pd = Wd.shadowGenerator,
              Zd = Pd ? Nd(Pd) : null;
            if (Pd?._ensureShadowTaskState && Pd._renderShadowMap && Zd && !Pd._preloadPending) {
              kd.add(Pd);
              const Nd = Pd._shadowTaskState ?? null,
                Wd = Pd._ensureShadowTaskState(dd, Jd, Zd);
              if (Wd !== Nd || Wd._recordedVersion !== Jd._renderableVersion) {
                const dd = Jd._renderableVersion;
                Wd._task.record(), Wd._recordedVersion = dd
              }
              pd += Pd._renderShadowMap(dd, Wd)
            }
          }
          return pd
        },
        dispose() {
          pd._passes.length = 0;
          for (const dd of kd) {
            const Jd = dd._shadowTaskState;
            Jd && (Jd._task.dispose(), dd._shadowTaskState = void 0)
          }
          kd.clear()
        }
      };
      return pd
    }
    async function Pd(dd, Jd) {
      dd._preloadPending = Jd, await (dd._preloadShadowTask?.(Jd)), dd._preloadPending === Jd && (dd._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);