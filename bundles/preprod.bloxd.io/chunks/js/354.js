export const id = 354;
export const ids = [354];
export const modules = {
  60423: (zz, uz, bz) => {
    bz.d(uz, {
      createShadowTask: () => iz
    });
    var Ez = null;

    function nz(zz) {
      return Ez?.get(zz)
    }

    function iz(zz, uz) {
      const bz = new Set;
      0;
      const Ez = {
        name: "AZ",
        engine: zz,
        tK: uz,
        _passes: [],
        async _preload() {
          const zz = [];
          for (const bz of uz.lights) {
            const uz = bz.shadowGenerator,
              Ez = uz ? nz(uz) : null;
            uz?._preloadShadowTask && Ez && zz.push(lz(uz, Ez))
          }
          await Promise.all(zz)
        },
        record() {
          Ez._passes.length = 0;
          for (const Ez of uz.lights) {
            const iz = Ez.shadowGenerator,
              lz = iz ? nz(iz) : null;
            if (iz?._ensureShadowTaskState && lz && !iz._preloadPending) {
              bz.add(iz);
              const Ez = iz._ensureShadowTaskState(zz, uz, lz),
                nz = uz._renderableVersion;
              Ez._task.record(), Ez._recordedVersion = nz
            }
          }
        },
        execute() {
          let Ez = 0;
          for (const iz of uz.lights) {
            const lz = iz.shadowGenerator,
              Mz = lz ? nz(lz) : null;
            if (lz?._ensureShadowTaskState && lz._renderShadowMap && Mz && !lz._preloadPending) {
              bz.add(lz);
              const nz = lz._shadowTaskState ?? null,
                iz = lz._ensureShadowTaskState(zz, uz, Mz);
              if (iz !== nz || iz._recordedVersion !== uz._renderableVersion) {
                const zz = uz._renderableVersion;
                iz._task.record(), iz._recordedVersion = zz
              }
              Ez += lz._renderShadowMap(zz, iz)
            }
          }
          return Ez
        },
        dispose() {
          Ez._passes.length = 0;
          for (const zz of bz) {
            const uz = zz._shadowTaskState;
            uz && (uz._task.dispose(), zz._shadowTaskState = void 0)
          }
          bz.clear()
        }
      };
      return Ez
    }
    async function lz(zz, uz) {
      zz._preloadPending = uz, await (zz._preloadShadowTask?.(uz)), zz._preloadPending === uz && (zz._preloadPending = void 0)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);