export const id = 366;
export const ids = [366];
export const modules = {
  61625: (tt, et, Vt) => {
    Vt.d(et, {
      createShadowTask: () => Dt
    });
    var Ot = null;

    function qt(tt) {
      return Ot?.get(tt)
    }

    function Dt(tt, et) {
      const Vt = new Set;
      0;
      const Ot = {
        name: "BE",
        engine: tt,
        Fw: et,
        _passes: [],
        async _preload() {
          const tt = [];
          for (const Vt of et.lights) {
            const et = Vt.shadowGenerator,
              Ot = et ? qt(et) : null;
            et?._preloadShadowTask && Ot && tt.push(mt(et, Ot))
          }
          await Promise.all(tt)
        },
        record() {
          Ot._passes.length = 0;
          for (const Ot of et.lights) {
            const Dt = Ot.shadowGenerator,
              mt = Dt ? qt(Dt) : null;
            if (Dt?._ensureShadowTaskState && mt && !Dt._preloadPending) {
              Vt.add(Dt);
              const Ot = Dt._ensureShadowTaskState(tt, et, mt),
                qt = et._renderableVersion;
              Ot._task.record(), Ot._recordedVersion = qt
            }
          }
        },
        execute() {
          let Ot = 0;
          for (const Dt of et.lights) {
            const mt = Dt.shadowGenerator,
              dt = mt ? qt(mt) : null;
            if (mt?._ensureShadowTaskState && mt._renderShadowMap && dt && !mt._preloadPending) {
              Vt.add(mt);
              const qt = mt._shadowTaskState ?? null,
                Dt = mt._ensureShadowTaskState(tt, et, dt);
              if (Dt !== qt || Dt._recordedVersion !== et._renderableVersion) {
                const tt = et._renderableVersion;
                Dt._task.record(), Dt._recordedVersion = tt
              }
              Ot += mt._renderShadowMap(tt, Dt)
            }
          }
          return Ot
        },
        dispose() {
          Ot._passes.length = 0;
          for (const tt of Vt) {
            const et = tt._shadowTaskState;
            et && (et._task.dispose(), tt._shadowTaskState = void 0)
          }
          Vt.clear()
        }
      };
      return Ot
    }
    async function mt(tt, et) {
      tt._preloadPending = et, await (tt._preloadShadowTask?.(et)), tt._preloadPending === et && (tt._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);