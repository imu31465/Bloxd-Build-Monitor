export const id = 354;
export const ids = [354];
export const modules = {
  60426: (zz, tz, sz) => {
    sz.d(tz, {
      createShadowTask: () => Xz
    });
    var Fz = null;

    function Wz(zz) {
      return Fz?.get(zz)
    }

    function Xz(zz, tz) {
      const sz = new Set;
      0;
      const Fz = {
        name: "ew",
        engine: zz,
        Kg: tz,
        _passes: [],
        async _preload() {
          const zz = [];
          for (const sz of tz.lights) {
            const tz = sz.shadowGenerator,
              Fz = tz ? Wz(tz) : null;
            tz?._preloadShadowTask && Fz && zz.push(Oz(tz, Fz))
          }
          await Promise.all(zz)
        },
        record() {
          Fz._passes.length = 0;
          for (const Fz of tz.lights) {
            const Xz = Fz.shadowGenerator,
              Oz = Xz ? Wz(Xz) : null;
            if (Xz?._ensureShadowTaskState && Oz && !Xz._preloadPending) {
              sz.add(Xz);
              const Fz = Xz._ensureShadowTaskState(zz, tz, Oz),
                Wz = tz._renderableVersion;
              Fz._task.record(), Fz._recordedVersion = Wz
            }
          }
        },
        execute() {
          let Fz = 0;
          for (const Xz of tz.lights) {
            const Oz = Xz.shadowGenerator,
              oz = Oz ? Wz(Oz) : null;
            if (Oz?._ensureShadowTaskState && Oz._renderShadowMap && oz && !Oz._preloadPending) {
              sz.add(Oz);
              const Wz = Oz._shadowTaskState ?? null,
                Xz = Oz._ensureShadowTaskState(zz, tz, oz);
              if (Xz !== Wz || Xz._recordedVersion !== tz._renderableVersion) {
                const zz = tz._renderableVersion;
                Xz._task.record(), Xz._recordedVersion = zz
              }
              Fz += Oz._renderShadowMap(zz, Xz)
            }
          }
          return Fz
        },
        dispose() {
          Fz._passes.length = 0;
          for (const zz of sz) {
            const tz = zz._shadowTaskState;
            tz && (tz._task.dispose(), zz._shadowTaskState = void 0)
          }
          sz.clear()
        }
      };
      return Fz
    }
    async function Oz(zz, tz) {
      zz._preloadPending = tz, await (zz._preloadShadowTask?.(tz)), zz._preloadPending === tz && (zz._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);