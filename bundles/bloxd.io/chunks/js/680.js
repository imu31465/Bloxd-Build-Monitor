export const id = 680;
export const ids = [680];
export const modules = {
  64876: (dd, Od, md) => {
    md.d(Od, {
      createShadowTask: () => Rd
    });
    var Wd = null;

    function Fd(dd) {
      return Wd?.get(dd)
    }

    function Rd(dd, Od) {
      const md = new Set;
      0;
      const Wd = {
        name: "Ut",
        engine: dd,
        MH: Od,
        _passes: [],
        async _preload() {
          const dd = [];
          for (const md of Od.lights) {
            const Od = md.shadowGenerator,
              Wd = Od ? Fd(Od) : null;
            Od?._preloadShadowTask && Wd && dd.push(Xd(Od, Wd))
          }
          await Promise.all(dd)
        },
        record() {
          Wd._passes.length = 0;
          for (const Wd of Od.lights) {
            const Rd = Wd.shadowGenerator,
              Xd = Rd ? Fd(Rd) : null;
            if (Rd?._ensureShadowTaskState && Xd && !Rd._preloadPending) {
              md.add(Rd);
              const Wd = Rd._ensureShadowTaskState(dd, Od, Xd),
                Fd = Od._renderableVersion;
              Wd._task.record(), Wd._recordedVersion = Fd
            }
          }
        },
        execute() {
          let Wd = 0;
          for (const Rd of Od.lights) {
            const Xd = Rd.shadowGenerator,
              Kd = Xd ? Fd(Xd) : null;
            if (Xd?._ensureShadowTaskState && Xd._renderShadowMap && Kd && !Xd._preloadPending) {
              md.add(Xd);
              const Fd = Xd._shadowTaskState ?? null,
                Rd = Xd._ensureShadowTaskState(dd, Od, Kd);
              if (Rd !== Fd || Rd._recordedVersion !== Od._renderableVersion) {
                const dd = Od._renderableVersion;
                Rd._task.record(), Rd._recordedVersion = dd
              }
              Wd += Xd._renderShadowMap(dd, Rd)
            }
          }
          return Wd
        },
        dispose() {
          Wd._passes.length = 0;
          for (const dd of md) {
            const Od = dd._shadowTaskState;
            Od && (Od._task.dispose(), dd._shadowTaskState = void 0)
          }
          md.clear()
        }
      };
      return Wd
    }
    async function Xd(dd, Od) {
      dd._preloadPending = Od, await (dd._preloadShadowTask?.(Od)), dd._preloadPending === Od && (dd._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);