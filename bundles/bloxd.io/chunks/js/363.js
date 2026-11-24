export const id = 363;
export const ids = [363];
export const modules = {
  61140: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      A: () => gD,
      B: () => AD,
      C: () => RD,
      X: () => UD
    });
    var pD = wD(41625),
      sD = (DD, zD) => DD.order - zD.order;

    function KD(DD, zD, wD) {
      DD.pendingDisposers.set(zD, wD)
    }

    function rD(DD, zD, wD) {
      wD && DD.pendingDisposers.get(zD) === wD && DD.pendingDisposers.delete(zD)
    }
    var LD = null,
      cD = null;

    function gD(DD, zD, wD, pD) {
      if (!zD || wD.material !== zD) return pD ?? Promise.resolve();
      const sD = AD(DD, zD._buildGroup, wD);
      return pD ? Promise.all([pD, sD]).then((() => {})) : sD
    }

    function RD(DD, zD, wD) {
      let pD = wD;
      for (const sD of zD) {
        const zD = Array.isArray(sD),
          wD = zD ? sD[0] : sD;
        pD = gD(DD, zD ? sD[1] : wD.material, wD, pD)
      }
      return (pD ?? Promise.resolve()).catch((zD => {
        DD._runtimeBuilds?._x(zD)
      }))
    }

    function AD(DD, zD, pD) {
      if (DD._z || !DD.meshes.includes(pD)) return DD._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(DD, zD, wD) {
          for (const [sD, KD] of DD._groups)
            if (sD !== zD) {
              const DD = KD.indexOf(wD);
              DD >= 0 && KD.splice(DD, 1)
            } let pD = DD._groups.get(zD);
          pD || (pD = [], DD._groups.set(zD, pD));
          pD.includes(wD) || pD.push(wD)
        }(DD, zD, pD), "pbr" === zD._materialFamily && (DD._built || DD._groups.get(zD)?.r)) {
        const zD = DD._runtimeBuilds ?? fD(DD),
          pD = wD.e(393).then((() => wD(61643))).then((zD => {
            let {
              rebuildScenePbrPipelines: wD
            } = zD;
            return DD._z ? void 0 : wD(DD, !0)
          })).catch((zD => {
            DD._runtimeBuilds?._x(zD)
          }));
        return zD.track(pD)
      }
      return (DD._runtimeBuilds ?? fD(DD)).queue(zD, pD).catch((() => {}))
    }

    function UD(DD, zD, wD) {
      return DD._z ? Promise.resolve(void 0) : (DD._runtimeBuilds ?? fD(DD)).exclusive(zD, wD)
    }

    function fD(DD) {
      const zD = {
          MI: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        wD = DD,
        gD = {
          queue: (wD, RD) => {
            const AD = (zD.generations.get(RD) ?? 0) + 1,
              UD = RD.material;
            zD.generations.set(RD, AD);
            const fD = zD.chains.get(RD),
              ID = [zD.tail, LD?.get(wD)].filter((DD => !!DD));
            let BD = () => {};
            const MD = new Promise((DD => {
              BD = DD
            }));
            zD.tail = MD, (LD ??= new WeakMap).set(wD, MD);
            const OD = (fD ? fD.catch((() => {})) : Promise.resolve()).then((() => Promise.all(ID))).then((() => async function(DD, zD, wD, LD, gD, RD) {
              if (!GD(DD, zD, wD, LD, gD, RD)) return;
              const AD = DD._meshDisposables.get(LD);
              AD && (DD._meshDisposables.delete(LD), KD(zD, LD, AD));
              const UD = wD._rebuildSingle,
                fD = cD?.get(wD)?.o9.get(DD) ?? DD._groups.get(wD)?.r,
                ID = !!DD._groups.get(wD)?.r,
                BD = DD._disposables.length,
                MD = DD,
                OD = MD._pbrGeomContext;
              let JD, ED;
              try {
                ED = await wD(DD, [LD]), JD = MD._pbrGeomContext
              } catch (VD) {
                if (hD(DD, zD, LD, AD), nD(DD, zD), !GD(DD, zD, wD, LD, gD, RD)) return;
                throw VD
              } finally {
                wD._rebuildSingle = UD, "pbr" === wD._materialFamily && ID && (MD._pbrGeomContext = OD)
              }
              if (!GD(DD, zD, wD, LD, gD, RD)) return hD(DD, zD, LD, AD), void nD(DD, zD);
              for (let pD = DD._renderables.length - 1; pD >= 0; pD--) DD._renderables[pD].mesh === LD && DD._renderables.splice(pD, 1);
              if (AD) {
                for (const zD of AD) {
                  const wD = DD._disposables.indexOf(zD);
                  wD >= 0 && DD._disposables.splice(wD, 1);
                  const pD = zD.p;
                  if (pD) {
                    pD._disposed = !0;
                    const DD = pD._owner;
                    if (DD) {
                      const zD = DD.indexOf(pD);
                      zD >= 0 && DD.splice(zD, 1), pD._owner = void 0, 0 === DD.length && pD._onOwnerEmpty?.()
                    } else pD._onOwnerEmpty?.();
                    pD._onOwnerEmpty && (pD._onOwnerEmpty = void 0)
                  }
                }(0, pD.c)(DD.surface.engine, (() => {
                  for (const DD of AD) DD()
                }))
              }
              rD(zD, LD, AD), DD._renderables.push(...ED.renderables);
              const QD = DD._groups.get(wD);
              QD && (QD.o = [...(QD.o ?? []).filter((DD => DD.mesh !== LD)), ...ED.renderables]);
              ED.updater && DD._uniformUpdaters.push(ED.updater);
              ID && function(DD, zD) {
                const wD = new Set(DD._disposables.slice(0, zD));
                for (let pD = DD._disposables.length - 1; pD >= zD; pD--) wD.has(DD._disposables[pD]) && DD._disposables.splice(pD, 1)
              }(DD, BD);
              "pbr" === wD._materialFamily && ID && JD && (MD._pbrMeshGeomContexts ??= new WeakMap).set(LD, JD);
              (function(DD, zD, wD, pD, sD, KD) {
                let rD = cD?.get(wD);
                if (!rD) {
                  const DD = new WeakMap,
                    zD = new WeakMap,
                    pD = (pD, sD, KD, rD) => {
                      const LD = DD.get(pD)?.get(sD);
                      if (LD) return LD(pD, sD, KD, rD);
                      const cD = zD.get(pD) ?? pD._groups.get(wD)?.r;
                      if (cD) return cD(pD, sD, KD, rD);
                      throw new Error("Material group has not completed its initial build")
                    };
                  rD = {
                    o9: zD,
                    dispatch: pD,
                    scenes: DD
                  }, (cD ??= new WeakMap).set(wD, rD)
                }
                let LD = rD.scenes.get(DD);
                LD || (LD = new WeakMap, rD.scenes.set(DD, LD));
                LD.set(pD, sD), rD.o9.has(DD) || rD.o9.set(DD, KD ?? sD);
                const gD = DD._groups.get(wD);
                gD && (gD.r = rD.dispatch);
                let RD = zD.installed.get(pD);
                RD || (RD = new Set, zD.installed.set(pD, RD));
                RD.add(wD), zD.installedMeshes.add(pD)
              })(DD, zD, wD, LD, ED.rebuildSingle, ID ? fD : ED.rebuildSingle), LD.material._csmGen = (LD.material._csmGen ?? 0) + 1;
              const XD = DD._groups.get(wD);
              XD && !ID && (XD.r = ED.rebuildSingle);
              DD._renderables.sort(sD), DD._renderableVersion++, DD._materialEpoch++
            }(DD, zD, wD, RD, UD, AD))).catch((pD => {
              throw GD(DD, zD, wD, RD, UD, AD) && (zD.error = pD instanceof Error ? pD : new Error("Runtime mesh build failed", {
                cause: pD
              })), pD
            })).finally((() => {
              BD(), zD.tail === MD && (zD.tail = null), LD?.get(wD) === MD && LD.delete(wD)
            })).finally((() => {
              zD.chains.get(RD) === OD && zD.chains.delete(RD)
            }));
            return zD.chains.set(RD, OD), gD.track(OD)
          },
          all: () => Promise.all(zD.active).then((() => {})),
          track: DD => {
            const wD = DD.finally((() => zD.active.delete(wD)));
            return zD.active.add(wD), Promise.all(zD.active).then((() => {}))
          },
          base: (zD, wD) => {
            const pD = cD?.get(zD);
            return pD && pD.o9.set(DD, wD), pD?.dispatch ?? wD
          },
          get w() {
            return !!zD.tail
          },
          pendingDisposers: DD => zD.pendingDisposers.get(DD),
          holdPendingDisposers: (DD, wD) => KD(zD, DD, wD),
          releasePendingDisposers: (DD, wD) => rD(zD, DD, wD),
          reset: pD => {
            BD(DD, zD, pD), wD._pbrMeshGeomContexts?.delete(pD)
          },
          remove: pD => {
            zD.generations.set(pD, (zD.generations.get(pD) ?? 0) + 1), zD.chains.delete(pD), ID(DD, zD, pD), wD._pbrMeshGeomContexts?.delete(pD)
          },
          dropBase: zD => {
            const wD = cD?.get(zD);
            wD && (wD.o9.delete(DD), wD.scenes.delete(DD))
          },
          wait: async DD => {
            const wD = new Set;
            for (const pD of DD) {
              const DD = zD.chains.get(pD);
              DD && wD.add(DD)
            }
            await Promise.all(wD)
          },
          _e: function() {
            let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (zD.error) {
              const wD = zD.error;
              throw DD && (zD.error = null), wD
            }
          },
          _x: DD => {
            zD.error = DD instanceof Error ? DD : new Error("Runtime mesh build failed", {
              cause: DD
            })
          },
          _d: () => zD.MI,
          exclusive: (DD, wD) => {
            const pD = [];
            zD.tail && pD.push(zD.tail);
            const sD = LD?.get(DD);
            sD && pD.push(sD);
            const KD = Promise.all(pD).then(wD),
              rD = KD.then((() => {}), (() => {}));
            return zD.tail = rD, (LD ??= new WeakMap).set(DD, rD), rD.then((() => {
              zD.tail === rD && (zD.tail = null), LD?.get(DD) === rD && LD.delete(DD)
            })), KD
          }
        };
      return DD._runtimeBuilds = gD, (DD._beforeRender ??= []).push((() => {
        gD._e()
      })), DD._disposables.push((() => {
        zD.MI = !0, zD.active.clear();
        for (const wD of zD.installedMeshes) BD(DD, zD, wD);
        for (const zD of DD._groups.keys()) cD?.get(zD)?.o9.delete(DD);
        DD._runtimeBuilds = void 0, wD._pbrMeshGeomContexts = void 0
      })), gD
    }

    function ID(DD, zD, wD) {
      const pD = zD.installed.get(wD);
      if (pD) {
        for (const zD of pD) cD?.get(zD)?.scenes.get(DD)?.delete(wD);
        zD.installed.delete(wD), zD.installedMeshes.delete(wD)
      }
    }

    function BD(DD, zD, wD) {
      ID(DD, zD, wD)
    }

    function GD(DD, zD, wD, pD, sD, KD) {
      return !zD.MI && zD.generations.get(pD) === KD && DD.meshes.includes(pD) && pD.material === sD && sD._buildGroup === wD
    }

    function hD(DD, zD, wD, sD) {
      const KD = DD._meshDisposables.get(wD);
      if (KD && KD !== sD) {
        DD._meshDisposables.delete(wD);
        for (const DD of KD) DD()
      }
      if (sD)
        if (DD.meshes.includes(wD)) DD._meshDisposables.set(wD, sD);
        else if (zD.MI)
        for (const pD of sD) pD();
      else(0, pD.c)(DD.surface.engine, (() => {
        for (const DD of sD) DD()
      }));
      rD(zD, wD, sD)
    }

    function nD(DD, zD) {
      if (!zD.MI) return;
      const wD = DD._disposables.splice(0);
      for (const pD of wD) pD()
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);