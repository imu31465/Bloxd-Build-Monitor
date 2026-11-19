export const id = 355;
export const ids = [355];
export const modules = {
  60508: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      A: () => wD,
      B: () => BD,
      C: () => SD,
      X: () => yD
    });
    var ID = cD(40823),
      pD = (DD, CD) => DD.order - CD.order;

    function iD(DD, CD, cD) {
      DD.pendingDisposers.set(CD, cD)
    }

    function fD(DD, CD, cD) {
      cD && DD.pendingDisposers.get(CD) === cD && DD.pendingDisposers.delete(CD)
    }
    var bD = null,
      QD = null;

    function wD(DD, CD, cD, ID) {
      if (!CD || cD.material !== CD) return ID ?? Promise.resolve();
      const pD = BD(DD, CD._buildGroup, cD);
      return ID ? Promise.all([ID, pD]).then((() => {})) : pD
    }

    function SD(DD, CD, cD) {
      let ID = cD;
      for (const pD of CD) {
        const CD = Array.isArray(pD),
          cD = CD ? pD[0] : pD;
        ID = wD(DD, CD ? pD[1] : cD.material, cD, ID)
      }
      return (ID ?? Promise.resolve()).catch((CD => {
        DD._runtimeBuilds?._x(CD)
      }))
    }

    function BD(DD, CD, ID) {
      if (DD._z || !DD.meshes.includes(ID)) return DD._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(DD, CD, cD) {
          for (const [pD, iD] of DD._groups)
            if (pD !== CD) {
              const DD = iD.indexOf(cD);
              DD >= 0 && iD.splice(DD, 1)
            } let ID = DD._groups.get(CD);
          ID || (ID = [], DD._groups.set(CD, ID));
          ID.includes(cD) || ID.push(cD)
        }(DD, CD, ID), "pbr" === CD._materialFamily && (DD._built || DD._groups.get(CD)?.r)) {
        const CD = DD._runtimeBuilds ?? MD(DD),
          ID = cD.e(385).then((() => cD(61097))).then((CD => {
            let {
              rebuildScenePbrPipelines: cD
            } = CD;
            return DD._z ? void 0 : cD(DD, !0)
          })).catch((CD => {
            DD._runtimeBuilds?._x(CD)
          }));
        return CD.track(ID)
      }
      return (DD._runtimeBuilds ?? MD(DD)).queue(CD, ID).catch((() => {}))
    }

    function yD(DD, CD, cD) {
      return DD._z ? Promise.resolve(void 0) : (DD._runtimeBuilds ?? MD(DD)).exclusive(CD, cD)
    }

    function MD(DD) {
      const CD = {
          Lt: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        cD = DD,
        wD = {
          queue: (cD, SD) => {
            const BD = (CD.generations.get(SD) ?? 0) + 1,
              yD = SD.material;
            CD.generations.set(SD, BD);
            const MD = CD.chains.get(SD),
              tD = [CD.tail, bD?.get(cD)].filter((DD => !!DD));
            let ZD = () => {};
            const gD = new Promise((DD => {
              ZD = DD
            }));
            CD.tail = gD, (bD ??= new WeakMap).set(cD, gD);
            const XD = (MD ? MD.catch((() => {})) : Promise.resolve()).then((() => Promise.all(tD))).then((() => async function(DD, CD, cD, bD, wD, SD) {
              if (!oD(DD, CD, cD, bD, wD, SD)) return;
              const BD = DD._meshDisposables.get(bD);
              BD && (DD._meshDisposables.delete(bD), iD(CD, bD, BD));
              const yD = cD._rebuildSingle,
                MD = QD?.get(cD)?.Z8.get(DD) ?? DD._groups.get(cD)?.r,
                tD = !!DD._groups.get(cD)?.r,
                ZD = DD._disposables.length,
                gD = DD,
                XD = gD._pbrGeomContext;
              let mD, nD;
              try {
                nD = await cD(DD, [bD]), mD = gD._pbrGeomContext
              } catch (HD) {
                if (vD(DD, CD, bD, BD), ND(DD, CD), !oD(DD, CD, cD, bD, wD, SD)) return;
                throw HD
              } finally {
                cD._rebuildSingle = yD, "pbr" === cD._materialFamily && tD && (gD._pbrGeomContext = XD)
              }
              if (!oD(DD, CD, cD, bD, wD, SD)) return vD(DD, CD, bD, BD), void ND(DD, CD);
              for (let ID = DD._renderables.length - 1; ID >= 0; ID--) DD._renderables[ID].mesh === bD && DD._renderables.splice(ID, 1);
              if (BD) {
                for (const CD of BD) {
                  const cD = DD._disposables.indexOf(CD);
                  cD >= 0 && DD._disposables.splice(cD, 1);
                  const ID = CD.p;
                  if (ID) {
                    ID._disposed = !0;
                    const DD = ID._owner;
                    if (DD) {
                      const CD = DD.indexOf(ID);
                      CD >= 0 && DD.splice(CD, 1), ID._owner = void 0, 0 === DD.length && ID._onOwnerEmpty?.()
                    } else ID._onOwnerEmpty?.();
                    ID._onOwnerEmpty && (ID._onOwnerEmpty = void 0)
                  }
                }(0, ID.e)(DD.surface.engine, (() => {
                  for (const DD of BD) DD()
                }))
              }
              fD(CD, bD, BD), DD._renderables.push(...nD.renderables);
              const OD = DD._groups.get(cD);
              OD && (OD.o = [...(OD.o ?? []).filter((DD => DD.mesh !== bD)), ...nD.renderables]);
              nD.updater && DD._uniformUpdaters.push(nD.updater);
              tD && function(DD, CD) {
                const cD = new Set(DD._disposables.slice(0, CD));
                for (let ID = DD._disposables.length - 1; ID >= CD; ID--) cD.has(DD._disposables[ID]) && DD._disposables.splice(ID, 1)
              }(DD, ZD);
              "pbr" === cD._materialFamily && tD && mD && (gD._pbrMeshGeomContexts ??= new WeakMap).set(bD, mD);
              (function(DD, CD, cD, ID, pD, iD) {
                let fD = QD?.get(cD);
                if (!fD) {
                  const DD = new WeakMap,
                    CD = new WeakMap,
                    ID = (ID, pD, iD, fD) => {
                      const bD = DD.get(ID)?.get(pD);
                      if (bD) return bD(ID, pD, iD, fD);
                      const QD = CD.get(ID) ?? ID._groups.get(cD)?.r;
                      if (QD) return QD(ID, pD, iD, fD);
                      throw new Error("Material group has not completed its initial build")
                    };
                  fD = {
                    Z8: CD,
                    dispatch: ID,
                    scenes: DD
                  }, (QD ??= new WeakMap).set(cD, fD)
                }
                let bD = fD.scenes.get(DD);
                bD || (bD = new WeakMap, fD.scenes.set(DD, bD));
                bD.set(ID, pD), fD.Z8.has(DD) || fD.Z8.set(DD, iD ?? pD);
                const wD = DD._groups.get(cD);
                wD && (wD.r = fD.dispatch);
                let SD = CD.installed.get(ID);
                SD || (SD = new Set, CD.installed.set(ID, SD));
                SD.add(cD), CD.installedMeshes.add(ID)
              })(DD, CD, cD, bD, nD.rebuildSingle, tD ? MD : nD.rebuildSingle), bD.material._csmGen = (bD.material._csmGen ?? 0) + 1;
              const PD = DD._groups.get(cD);
              PD && !tD && (PD.r = nD.rebuildSingle);
              DD._renderables.sort(pD), DD._renderableVersion++, DD._materialEpoch++
            }(DD, CD, cD, SD, yD, BD))).catch((ID => {
              throw oD(DD, CD, cD, SD, yD, BD) && (CD.error = ID instanceof Error ? ID : new Error("Runtime mesh build failed", {
                cause: ID
              })), ID
            })).finally((() => {
              ZD(), CD.tail === gD && (CD.tail = null), bD?.get(cD) === gD && bD.delete(cD)
            })).finally((() => {
              CD.chains.get(SD) === XD && CD.chains.delete(SD)
            }));
            return CD.chains.set(SD, XD), wD.track(XD)
          },
          all: () => Promise.all(CD.active).then((() => {})),
          track: DD => {
            const cD = DD.finally((() => CD.active.delete(cD)));
            return CD.active.add(cD), Promise.all(CD.active).then((() => {}))
          },
          base: (CD, cD) => {
            const ID = QD?.get(CD);
            return ID && ID.Z8.set(DD, cD), ID?.dispatch ?? cD
          },
          get w() {
            return !!CD.tail
          },
          pendingDisposers: DD => CD.pendingDisposers.get(DD),
          holdPendingDisposers: (DD, cD) => iD(CD, DD, cD),
          releasePendingDisposers: (DD, cD) => fD(CD, DD, cD),
          reset: ID => {
            ZD(DD, CD, ID), cD._pbrMeshGeomContexts?.delete(ID)
          },
          remove: ID => {
            CD.generations.set(ID, (CD.generations.get(ID) ?? 0) + 1), CD.chains.delete(ID), tD(DD, CD, ID), cD._pbrMeshGeomContexts?.delete(ID)
          },
          dropBase: CD => {
            const cD = QD?.get(CD);
            cD && (cD.Z8.delete(DD), cD.scenes.delete(DD))
          },
          wait: async DD => {
            const cD = new Set;
            for (const ID of DD) {
              const DD = CD.chains.get(ID);
              DD && cD.add(DD)
            }
            await Promise.all(cD)
          },
          _e: function() {
            let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (CD.error) {
              const cD = CD.error;
              throw DD && (CD.error = null), cD
            }
          },
          _x: DD => {
            CD.error = DD instanceof Error ? DD : new Error("Runtime mesh build failed", {
              cause: DD
            })
          },
          _d: () => CD.Lt,
          exclusive: (DD, cD) => {
            const ID = [];
            CD.tail && ID.push(CD.tail);
            const pD = bD?.get(DD);
            pD && ID.push(pD);
            const iD = Promise.all(ID).then(cD),
              fD = iD.then((() => {}), (() => {}));
            return CD.tail = fD, (bD ??= new WeakMap).set(DD, fD), fD.then((() => {
              CD.tail === fD && (CD.tail = null), bD?.get(DD) === fD && bD.delete(DD)
            })), iD
          }
        };
      return DD._runtimeBuilds = wD, (DD._beforeRender ??= []).push((() => {
        wD._e()
      })), DD._disposables.push((() => {
        CD.Lt = !0, CD.active.clear();
        for (const cD of CD.installedMeshes) ZD(DD, CD, cD);
        for (const CD of DD._groups.keys()) QD?.get(CD)?.Z8.delete(DD);
        DD._runtimeBuilds = void 0, cD._pbrMeshGeomContexts = void 0
      })), wD
    }

    function tD(DD, CD, cD) {
      const ID = CD.installed.get(cD);
      if (ID) {
        for (const CD of ID) QD?.get(CD)?.scenes.get(DD)?.delete(cD);
        CD.installed.delete(cD), CD.installedMeshes.delete(cD)
      }
    }

    function ZD(DD, CD, cD) {
      tD(DD, CD, cD)
    }

    function oD(DD, CD, cD, ID, pD, iD) {
      return !CD.Lt && CD.generations.get(ID) === iD && DD.meshes.includes(ID) && ID.material === pD && pD._buildGroup === cD
    }

    function vD(DD, CD, cD, pD) {
      const iD = DD._meshDisposables.get(cD);
      if (iD && iD !== pD) {
        DD._meshDisposables.delete(cD);
        for (const DD of iD) DD()
      }
      if (pD)
        if (DD.meshes.includes(cD)) DD._meshDisposables.set(cD, pD);
        else if (CD.Lt)
        for (const ID of pD) ID();
      else(0, ID.e)(DD.surface.engine, (() => {
        for (const DD of pD) DD()
      }));
      fD(CD, cD, pD)
    }

    function ND(DD, CD) {
      if (!CD.Lt) return;
      const cD = DD._disposables.splice(0);
      for (const ID of cD) ID()
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);