export const id = 355;
export const ids = [355];
export const modules = {
  60430: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      A: () => Uz,
      B: () => uz,
      C: () => Kz,
      X: () => Nz
    });
    var Fz = sz(40840),
      Wz = (zz, tz) => zz.order - tz.order;

    function Xz(zz, tz, sz) {
      zz.pendingDisposers.set(tz, sz)
    }

    function Oz(zz, tz, sz) {
      sz && zz.pendingDisposers.get(tz) === sz && zz.pendingDisposers.delete(tz)
    }
    var oz = null,
      vz = null;

    function Uz(zz, tz, sz, Fz) {
      if (!tz || sz.material !== tz) return Fz ?? Promise.resolve();
      const Wz = uz(zz, tz._buildGroup, sz);
      return Fz ? Promise.all([Fz, Wz]).then((() => {})) : Wz
    }

    function Kz(zz, tz, sz) {
      let Fz = sz;
      for (const Wz of tz) {
        const tz = Array.isArray(Wz),
          sz = tz ? Wz[0] : Wz;
        Fz = Uz(zz, tz ? Wz[1] : sz.material, sz, Fz)
      }
      return (Fz ?? Promise.resolve()).catch((tz => {
        zz._runtimeBuilds?._x(tz)
      }))
    }

    function uz(zz, tz, Fz) {
      if (zz._z || !zz.meshes.includes(Fz)) return zz._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(zz, tz, sz) {
          for (const [Wz, Xz] of zz._groups)
            if (Wz !== tz) {
              const zz = Xz.indexOf(sz);
              zz >= 0 && Xz.splice(zz, 1)
            } let Fz = zz._groups.get(tz);
          Fz || (Fz = [], zz._groups.set(tz, Fz));
          Fz.includes(sz) || Fz.push(sz)
        }(zz, tz, Fz), "pbr" === tz._materialFamily && (zz._built || zz._groups.get(tz)?.r)) {
        const tz = zz._runtimeBuilds ?? bz(zz),
          Fz = sz.e(385).then((() => sz(61036))).then((tz => {
            let {
              rebuildScenePbrPipelines: sz
            } = tz;
            return zz._z ? void 0 : sz(zz, !0)
          })).catch((tz => {
            zz._runtimeBuilds?._x(tz)
          }));
        return tz.track(Fz)
      }
      return (zz._runtimeBuilds ?? bz(zz)).queue(tz, Fz).catch((() => {}))
    }

    function Nz(zz, tz, sz) {
      return zz._z ? Promise.resolve(void 0) : (zz._runtimeBuilds ?? bz(zz)).exclusive(tz, sz)
    }

    function bz(zz) {
      const tz = {
          lw: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        sz = zz,
        Uz = {
          queue: (sz, Kz) => {
            const uz = (tz.generations.get(Kz) ?? 0) + 1,
              Nz = Kz.material;
            tz.generations.set(Kz, uz);
            const bz = tz.chains.get(Kz),
              wz = [tz.tail, oz?.get(sz)].filter((zz => !!zz));
            let Dz = () => {};
            const Pz = new Promise((zz => {
              Dz = zz
            }));
            tz.tail = Pz, (oz ??= new WeakMap).set(sz, Pz);
            const rz = (bz ? bz.catch((() => {})) : Promise.resolve()).then((() => Promise.all(wz))).then((() => async function(zz, tz, sz, oz, Uz, Kz) {
              if (!gz(zz, tz, sz, oz, Uz, Kz)) return;
              const uz = zz._meshDisposables.get(oz);
              uz && (zz._meshDisposables.delete(oz), Xz(tz, oz, uz));
              const Nz = sz._rebuildSingle,
                bz = vz?.get(sz)?.R6.get(zz) ?? zz._groups.get(sz)?.r,
                wz = !!zz._groups.get(sz)?.r,
                Dz = zz._disposables.length,
                Pz = zz,
                rz = Pz._pbrGeomContext;
              let Yz, xz;
              try {
                xz = await sz(zz, [oz]), Yz = Pz._pbrGeomContext
              } catch (Iz) {
                if (Hz(zz, tz, oz, uz), Bz(zz, tz), !gz(zz, tz, sz, oz, Uz, Kz)) return;
                throw Iz
              } finally {
                sz._rebuildSingle = Nz, "pbr" === sz._materialFamily && wz && (Pz._pbrGeomContext = rz)
              }
              if (!gz(zz, tz, sz, oz, Uz, Kz)) return Hz(zz, tz, oz, uz), void Bz(zz, tz);
              for (let Fz = zz._renderables.length - 1; Fz >= 0; Fz--) zz._renderables[Fz].mesh === oz && zz._renderables.splice(Fz, 1);
              if (uz) {
                for (const tz of uz) {
                  const sz = zz._disposables.indexOf(tz);
                  sz >= 0 && zz._disposables.splice(sz, 1);
                  const Fz = tz.p;
                  if (Fz) {
                    Fz._disposed = !0;
                    const zz = Fz._owner;
                    if (zz) {
                      const tz = zz.indexOf(Fz);
                      tz >= 0 && zz.splice(tz, 1), Fz._owner = void 0, 0 === zz.length && Fz._onOwnerEmpty?.()
                    } else Fz._onOwnerEmpty?.();
                    Fz._onOwnerEmpty && (Fz._onOwnerEmpty = void 0)
                  }
                }(0, Fz.c)(zz.surface.engine, (() => {
                  for (const zz of uz) zz()
                }))
              }
              Oz(tz, oz, uz), zz._renderables.push(...xz.renderables);
              const mz = zz._groups.get(sz);
              mz && (mz.o = [...(mz.o ?? []).filter((zz => zz.mesh !== oz)), ...xz.renderables]);
              xz.updater && zz._uniformUpdaters.push(xz.updater);
              wz && function(zz, tz) {
                const sz = new Set(zz._disposables.slice(0, tz));
                for (let Fz = zz._disposables.length - 1; Fz >= tz; Fz--) sz.has(zz._disposables[Fz]) && zz._disposables.splice(Fz, 1)
              }(zz, Dz);
              "pbr" === sz._materialFamily && wz && Yz && (Pz._pbrMeshGeomContexts ??= new WeakMap).set(oz, Yz);
              (function(zz, tz, sz, Fz, Wz, Xz) {
                let Oz = vz?.get(sz);
                if (!Oz) {
                  const zz = new WeakMap,
                    tz = new WeakMap,
                    Fz = (Fz, Wz, Xz, Oz) => {
                      const oz = zz.get(Fz)?.get(Wz);
                      if (oz) return oz(Fz, Wz, Xz, Oz);
                      const vz = tz.get(Fz) ?? Fz._groups.get(sz)?.r;
                      if (vz) return vz(Fz, Wz, Xz, Oz);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Oz = {
                    R6: tz,
                    dispatch: Fz,
                    scenes: zz
                  }, (vz ??= new WeakMap).set(sz, Oz)
                }
                let oz = Oz.scenes.get(zz);
                oz || (oz = new WeakMap, Oz.scenes.set(zz, oz));
                oz.set(Fz, Wz), Oz.R6.has(zz) || Oz.R6.set(zz, Xz ?? Wz);
                const Uz = zz._groups.get(sz);
                Uz && (Uz.r = Oz.dispatch);
                let Kz = tz.installed.get(Fz);
                Kz || (Kz = new Set, tz.installed.set(Fz, Kz));
                Kz.add(sz), tz.installedMeshes.add(Fz)
              })(zz, tz, sz, oz, xz.rebuildSingle, wz ? bz : xz.rebuildSingle), oz.material._csmGen = (oz.material._csmGen ?? 0) + 1;
              const Jz = zz._groups.get(sz);
              Jz && !wz && (Jz.r = xz.rebuildSingle);
              zz._renderables.sort(Wz), zz._renderableVersion++, zz._materialEpoch++
            }(zz, tz, sz, Kz, Nz, uz))).catch((Fz => {
              throw gz(zz, tz, sz, Kz, Nz, uz) && (tz.error = Fz instanceof Error ? Fz : new Error("Runtime mesh build failed", {
                cause: Fz
              })), Fz
            })).finally((() => {
              Dz(), tz.tail === Pz && (tz.tail = null), oz?.get(sz) === Pz && oz.delete(sz)
            })).finally((() => {
              tz.chains.get(Kz) === rz && tz.chains.delete(Kz)
            }));
            return tz.chains.set(Kz, rz), Uz.track(rz)
          },
          all: () => Promise.all(tz.active).then((() => {})),
          track: zz => {
            const sz = zz.finally((() => tz.active.delete(sz)));
            return tz.active.add(sz), Promise.all(tz.active).then((() => {}))
          },
          base: (tz, sz) => {
            const Fz = vz?.get(tz);
            return Fz && Fz.R6.set(zz, sz), Fz?.dispatch ?? sz
          },
          get w() {
            return !!tz.tail
          },
          pendingDisposers: zz => tz.pendingDisposers.get(zz),
          holdPendingDisposers: (zz, sz) => Xz(tz, zz, sz),
          releasePendingDisposers: (zz, sz) => Oz(tz, zz, sz),
          reset: Fz => {
            Dz(zz, tz, Fz), sz._pbrMeshGeomContexts?.delete(Fz)
          },
          remove: Fz => {
            tz.generations.set(Fz, (tz.generations.get(Fz) ?? 0) + 1), tz.chains.delete(Fz), wz(zz, tz, Fz), sz._pbrMeshGeomContexts?.delete(Fz)
          },
          dropBase: tz => {
            const sz = vz?.get(tz);
            sz && (sz.R6.delete(zz), sz.scenes.delete(zz))
          },
          wait: async zz => {
            const sz = new Set;
            for (const Fz of zz) {
              const zz = tz.chains.get(Fz);
              zz && sz.add(zz)
            }
            await Promise.all(sz)
          },
          _e: function() {
            let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (tz.error) {
              const sz = tz.error;
              throw zz && (tz.error = null), sz
            }
          },
          _x: zz => {
            tz.error = zz instanceof Error ? zz : new Error("Runtime mesh build failed", {
              cause: zz
            })
          },
          _d: () => tz.lw,
          exclusive: (zz, sz) => {
            const Fz = [];
            tz.tail && Fz.push(tz.tail);
            const Wz = oz?.get(zz);
            Wz && Fz.push(Wz);
            const Xz = Promise.all(Fz).then(sz),
              Oz = Xz.then((() => {}), (() => {}));
            return tz.tail = Oz, (oz ??= new WeakMap).set(zz, Oz), Oz.then((() => {
              tz.tail === Oz && (tz.tail = null), oz?.get(zz) === Oz && oz.delete(zz)
            })), Xz
          }
        };
      return zz._runtimeBuilds = Uz, (zz._beforeRender ??= []).push((() => {
        Uz._e()
      })), zz._disposables.push((() => {
        tz.lw = !0, tz.active.clear();
        for (const sz of tz.installedMeshes) Dz(zz, tz, sz);
        for (const tz of zz._groups.keys()) vz?.get(tz)?.R6.delete(zz);
        zz._runtimeBuilds = void 0, sz._pbrMeshGeomContexts = void 0
      })), Uz
    }

    function wz(zz, tz, sz) {
      const Fz = tz.installed.get(sz);
      if (Fz) {
        for (const tz of Fz) vz?.get(tz)?.scenes.get(zz)?.delete(sz);
        tz.installed.delete(sz), tz.installedMeshes.delete(sz)
      }
    }

    function Dz(zz, tz, sz) {
      wz(zz, tz, sz)
    }

    function gz(zz, tz, sz, Fz, Wz, Xz) {
      return !tz.lw && tz.generations.get(Fz) === Xz && zz.meshes.includes(Fz) && Fz.material === Wz && Wz._buildGroup === sz
    }

    function Hz(zz, tz, sz, Wz) {
      const Xz = zz._meshDisposables.get(sz);
      if (Xz && Xz !== Wz) {
        zz._meshDisposables.delete(sz);
        for (const zz of Xz) zz()
      }
      if (Wz)
        if (zz.meshes.includes(sz)) zz._meshDisposables.set(sz, Wz);
        else if (tz.lw)
        for (const Fz of Wz) Fz();
      else(0, Fz.c)(zz.surface.engine, (() => {
        for (const zz of Wz) zz()
      }));
      Oz(tz, sz, Wz)
    }

    function Bz(zz, tz) {
      if (!tz.lw) return;
      const sz = zz._disposables.splice(0);
      for (const Fz of sz) Fz()
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);