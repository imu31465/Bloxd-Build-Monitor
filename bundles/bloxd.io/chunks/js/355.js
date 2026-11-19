export const id = 355;
export const ids = [355];
export const modules = {
  60425: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      A: () => Hz,
      B: () => pz,
      C: () => Oz,
      X: () => dz
    });
    var Ez = bz(40944),
      nz = (zz, uz) => zz.order - uz.order;

    function iz(zz, uz, bz) {
      zz.pendingDisposers.set(uz, bz)
    }

    function lz(zz, uz, bz) {
      bz && zz.pendingDisposers.get(uz) === bz && zz.pendingDisposers.delete(uz)
    }
    var Mz = null,
      tz = null;

    function Hz(zz, uz, bz, Ez) {
      if (!uz || bz.material !== uz) return Ez ?? Promise.resolve();
      const nz = pz(zz, uz._buildGroup, bz);
      return Ez ? Promise.all([Ez, nz]).then((() => {})) : nz
    }

    function Oz(zz, uz, bz) {
      let Ez = bz;
      for (const nz of uz) {
        const uz = Array.isArray(nz),
          bz = uz ? nz[0] : nz;
        Ez = Hz(zz, uz ? nz[1] : bz.material, bz, Ez)
      }
      return (Ez ?? Promise.resolve()).catch((uz => {
        zz._runtimeBuilds?._x(uz)
      }))
    }

    function pz(zz, uz, Ez) {
      if (zz._z || !zz.meshes.includes(Ez)) return zz._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(zz, uz, bz) {
          for (const [nz, iz] of zz._groups)
            if (nz !== uz) {
              const zz = iz.indexOf(bz);
              zz >= 0 && iz.splice(zz, 1)
            } let Ez = zz._groups.get(uz);
          Ez || (Ez = [], zz._groups.set(uz, Ez));
          Ez.includes(bz) || Ez.push(bz)
        }(zz, uz, Ez), "pbr" === uz._materialFamily && (zz._built || zz._groups.get(uz)?.r)) {
        const uz = zz._runtimeBuilds ?? Fz(zz),
          Ez = bz.e(385).then((() => bz(61065))).then((uz => {
            let {
              rebuildScenePbrPipelines: bz
            } = uz;
            return zz._z ? void 0 : bz(zz, !0)
          })).catch((uz => {
            zz._runtimeBuilds?._x(uz)
          }));
        return uz.track(Ez)
      }
      return (zz._runtimeBuilds ?? Fz(zz)).queue(uz, Ez).catch((() => {}))
    }

    function dz(zz, uz, bz) {
      return zz._z ? Promise.resolve(void 0) : (zz._runtimeBuilds ?? Fz(zz)).exclusive(uz, bz)
    }

    function Fz(zz) {
      const uz = {
          SZ: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        bz = zz,
        Hz = {
          queue: (bz, Oz) => {
            const pz = (uz.generations.get(Oz) ?? 0) + 1,
              dz = Oz.material;
            uz.generations.set(Oz, pz);
            const Fz = uz.chains.get(Oz),
              Zz = [uz.tail, Mz?.get(bz)].filter((zz => !!zz));
            let Rz = () => {};
            const fz = new Promise((zz => {
              Rz = zz
            }));
            uz.tail = fz, (Mz ??= new WeakMap).set(bz, fz);
            const sz = (Fz ? Fz.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Zz))).then((() => async function(zz, uz, bz, Mz, Hz, Oz) {
              if (!Kz(zz, uz, bz, Mz, Hz, Oz)) return;
              const pz = zz._meshDisposables.get(Mz);
              pz && (zz._meshDisposables.delete(Mz), iz(uz, Mz, pz));
              const dz = bz._rebuildSingle,
                Fz = tz?.get(bz)?.Z8.get(zz) ?? zz._groups.get(bz)?.r,
                Zz = !!zz._groups.get(bz)?.r,
                Rz = zz._disposables.length,
                fz = zz,
                sz = fz._pbrGeomContext;
              let rz, oz;
              try {
                oz = await bz(zz, [Mz]), rz = fz._pbrGeomContext
              } catch (xz) {
                if (wz(zz, uz, Mz, pz), Xz(zz, uz), !Kz(zz, uz, bz, Mz, Hz, Oz)) return;
                throw xz
              } finally {
                bz._rebuildSingle = dz, "pbr" === bz._materialFamily && Zz && (fz._pbrGeomContext = sz)
              }
              if (!Kz(zz, uz, bz, Mz, Hz, Oz)) return wz(zz, uz, Mz, pz), void Xz(zz, uz);
              for (let Ez = zz._renderables.length - 1; Ez >= 0; Ez--) zz._renderables[Ez].mesh === Mz && zz._renderables.splice(Ez, 1);
              if (pz) {
                for (const uz of pz) {
                  const bz = zz._disposables.indexOf(uz);
                  bz >= 0 && zz._disposables.splice(bz, 1);
                  const Ez = uz.p;
                  if (Ez) {
                    Ez._disposed = !0;
                    const zz = Ez._owner;
                    if (zz) {
                      const uz = zz.indexOf(Ez);
                      uz >= 0 && zz.splice(uz, 1), Ez._owner = void 0, 0 === zz.length && Ez._onOwnerEmpty?.()
                    } else Ez._onOwnerEmpty?.();
                    Ez._onOwnerEmpty && (Ez._onOwnerEmpty = void 0)
                  }
                }(0, Ez.c)(zz.surface.engine, (() => {
                  for (const zz of pz) zz()
                }))
              }
              lz(uz, Mz, pz), zz._renderables.push(...oz.renderables);
              const Nz = zz._groups.get(bz);
              Nz && (Nz.o = [...(Nz.o ?? []).filter((zz => zz.mesh !== Mz)), ...oz.renderables]);
              oz.updater && zz._uniformUpdaters.push(oz.updater);
              Zz && function(zz, uz) {
                const bz = new Set(zz._disposables.slice(0, uz));
                for (let Ez = zz._disposables.length - 1; Ez >= uz; Ez--) bz.has(zz._disposables[Ez]) && zz._disposables.splice(Ez, 1)
              }(zz, Rz);
              "pbr" === bz._materialFamily && Zz && rz && (fz._pbrMeshGeomContexts ??= new WeakMap).set(Mz, rz);
              (function(zz, uz, bz, Ez, nz, iz) {
                let lz = tz?.get(bz);
                if (!lz) {
                  const zz = new WeakMap,
                    uz = new WeakMap,
                    Ez = (Ez, nz, iz, lz) => {
                      const Mz = zz.get(Ez)?.get(nz);
                      if (Mz) return Mz(Ez, nz, iz, lz);
                      const tz = uz.get(Ez) ?? Ez._groups.get(bz)?.r;
                      if (tz) return tz(Ez, nz, iz, lz);
                      throw new Error("Material group has not completed its initial build")
                    };
                  lz = {
                    Z8: uz,
                    dispatch: Ez,
                    scenes: zz
                  }, (tz ??= new WeakMap).set(bz, lz)
                }
                let Mz = lz.scenes.get(zz);
                Mz || (Mz = new WeakMap, lz.scenes.set(zz, Mz));
                Mz.set(Ez, nz), lz.Z8.has(zz) || lz.Z8.set(zz, iz ?? nz);
                const Hz = zz._groups.get(bz);
                Hz && (Hz.r = lz.dispatch);
                let Oz = uz.installed.get(Ez);
                Oz || (Oz = new Set, uz.installed.set(Ez, Oz));
                Oz.add(bz), uz.installedMeshes.add(Ez)
              })(zz, uz, bz, Mz, oz.rebuildSingle, Zz ? Fz : oz.rebuildSingle), Mz.material._csmGen = (Mz.material._csmGen ?? 0) + 1;
              const vz = zz._groups.get(bz);
              vz && !Zz && (vz.r = oz.rebuildSingle);
              zz._renderables.sort(nz), zz._renderableVersion++, zz._materialEpoch++
            }(zz, uz, bz, Oz, dz, pz))).catch((Ez => {
              throw Kz(zz, uz, bz, Oz, dz, pz) && (uz.error = Ez instanceof Error ? Ez : new Error("Runtime mesh build failed", {
                cause: Ez
              })), Ez
            })).finally((() => {
              Rz(), uz.tail === fz && (uz.tail = null), Mz?.get(bz) === fz && Mz.delete(bz)
            })).finally((() => {
              uz.chains.get(Oz) === sz && uz.chains.delete(Oz)
            }));
            return uz.chains.set(Oz, sz), Hz.track(sz)
          },
          all: () => Promise.all(uz.active).then((() => {})),
          track: zz => {
            const bz = zz.finally((() => uz.active.delete(bz)));
            return uz.active.add(bz), Promise.all(uz.active).then((() => {}))
          },
          base: (uz, bz) => {
            const Ez = tz?.get(uz);
            return Ez && Ez.Z8.set(zz, bz), Ez?.dispatch ?? bz
          },
          get w() {
            return !!uz.tail
          },
          pendingDisposers: zz => uz.pendingDisposers.get(zz),
          holdPendingDisposers: (zz, bz) => iz(uz, zz, bz),
          releasePendingDisposers: (zz, bz) => lz(uz, zz, bz),
          reset: Ez => {
            Rz(zz, uz, Ez), bz._pbrMeshGeomContexts?.delete(Ez)
          },
          remove: Ez => {
            uz.generations.set(Ez, (uz.generations.get(Ez) ?? 0) + 1), uz.chains.delete(Ez), Zz(zz, uz, Ez), bz._pbrMeshGeomContexts?.delete(Ez)
          },
          dropBase: uz => {
            const bz = tz?.get(uz);
            bz && (bz.Z8.delete(zz), bz.scenes.delete(zz))
          },
          wait: async zz => {
            const bz = new Set;
            for (const Ez of zz) {
              const zz = uz.chains.get(Ez);
              zz && bz.add(zz)
            }
            await Promise.all(bz)
          },
          _e: function() {
            let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (uz.error) {
              const bz = uz.error;
              throw zz && (uz.error = null), bz
            }
          },
          _x: zz => {
            uz.error = zz instanceof Error ? zz : new Error("Runtime mesh build failed", {
              cause: zz
            })
          },
          _d: () => uz.SZ,
          exclusive: (zz, bz) => {
            const Ez = [];
            uz.tail && Ez.push(uz.tail);
            const nz = Mz?.get(zz);
            nz && Ez.push(nz);
            const iz = Promise.all(Ez).then(bz),
              lz = iz.then((() => {}), (() => {}));
            return uz.tail = lz, (Mz ??= new WeakMap).set(zz, lz), lz.then((() => {
              uz.tail === lz && (uz.tail = null), Mz?.get(zz) === lz && Mz.delete(zz)
            })), iz
          }
        };
      return zz._runtimeBuilds = Hz, (zz._beforeRender ??= []).push((() => {
        Hz._e()
      })), zz._disposables.push((() => {
        uz.SZ = !0, uz.active.clear();
        for (const bz of uz.installedMeshes) Rz(zz, uz, bz);
        for (const uz of zz._groups.keys()) tz?.get(uz)?.Z8.delete(zz);
        zz._runtimeBuilds = void 0, bz._pbrMeshGeomContexts = void 0
      })), Hz
    }

    function Zz(zz, uz, bz) {
      const Ez = uz.installed.get(bz);
      if (Ez) {
        for (const uz of Ez) tz?.get(uz)?.scenes.get(zz)?.delete(bz);
        uz.installed.delete(bz), uz.installedMeshes.delete(bz)
      }
    }

    function Rz(zz, uz, bz) {
      Zz(zz, uz, bz)
    }

    function Kz(zz, uz, bz, Ez, nz, iz) {
      return !uz.SZ && uz.generations.get(Ez) === iz && zz.meshes.includes(Ez) && Ez.material === nz && nz._buildGroup === bz
    }

    function wz(zz, uz, bz, nz) {
      const iz = zz._meshDisposables.get(bz);
      if (iz && iz !== nz) {
        zz._meshDisposables.delete(bz);
        for (const zz of iz) zz()
      }
      if (nz)
        if (zz.meshes.includes(bz)) zz._meshDisposables.set(bz, nz);
        else if (uz.SZ)
        for (const Ez of nz) Ez();
      else(0, Ez.c)(zz.surface.engine, (() => {
        for (const zz of nz) zz()
      }));
      lz(uz, bz, nz)
    }

    function Xz(zz, uz) {
      if (!uz.SZ) return;
      const bz = zz._disposables.splice(0);
      for (const Ez of bz) Ez()
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);