export const id = 671;
export const ids = [671];
export const modules = {
  64015: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      A: () => QM,
      B: () => LM,
      C: () => zM,
      X: () => mM
    });
    var OM = iM(44368),
      SM = (MM, rM) => MM.order - rM.order;

    function jM(MM, rM, iM) {
      MM.pendingDisposers.set(rM, iM)
    }

    function aM(MM, rM, iM) {
      iM && MM.pendingDisposers.get(rM) === iM && MM.pendingDisposers.delete(rM)
    }
    var PM = null,
      nM = null;

    function QM(MM, rM, iM, OM) {
      if (!rM || iM.material !== rM) return OM ?? Promise.resolve();
      const SM = LM(MM, rM._buildGroup, iM);
      return OM ? Promise.all([OM, SM]).then((() => {})) : SM
    }

    function zM(MM, rM, iM) {
      let OM = iM;
      for (const SM of rM) {
        const rM = Array.isArray(SM),
          iM = rM ? SM[0] : SM;
        OM = QM(MM, rM ? SM[1] : iM.material, iM, OM)
      }
      return (OM ?? Promise.resolve()).catch((rM => {
        MM._runtimeBuilds?._x(rM)
      }))
    }

    function LM(MM, rM, OM) {
      if (MM._z || !MM.meshes.includes(OM)) return MM._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(MM, rM, iM) {
          for (const [SM, jM] of MM._groups)
            if (SM !== rM) {
              const MM = jM.indexOf(iM);
              MM >= 0 && jM.splice(MM, 1)
            } let OM = MM._groups.get(rM);
          OM || (OM = [], MM._groups.set(rM, OM));
          OM.includes(iM) || OM.push(iM)
        }(MM, rM, OM), "pbr" === rM._materialFamily && (MM._built || MM._groups.get(rM)?.r)) {
        const rM = MM._runtimeBuilds ?? HM(MM),
          OM = iM.e(701).then((() => iM(64517))).then((rM => {
            let {
              rebuildScenePbrPipelines: iM
            } = rM;
            return MM._z ? void 0 : iM(MM, !0)
          })).catch((rM => {
            MM._runtimeBuilds?._x(rM)
          }));
        return rM.track(OM)
      }
      return (MM._runtimeBuilds ?? HM(MM)).queue(rM, OM).catch((() => {}))
    }

    function mM(MM, rM, iM) {
      return MM._z ? Promise.resolve(void 0) : (MM._runtimeBuilds ?? HM(MM)).exclusive(rM, iM)
    }

    function HM(MM) {
      const rM = {
          dh: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        iM = MM,
        QM = {
          queue: (iM, zM) => {
            const LM = (rM.generations.get(zM) ?? 0) + 1,
              mM = zM.material;
            rM.generations.set(zM, LM);
            const HM = rM.chains.get(zM),
              hM = [rM.tail, PM?.get(iM)].filter((MM => !!MM));
            let JM = () => {};
            const EM = new Promise((MM => {
              JM = MM
            }));
            rM.tail = EM, (PM ??= new WeakMap).set(iM, EM);
            const UM = (HM ? HM.catch((() => {})) : Promise.resolve()).then((() => Promise.all(hM))).then((() => async function(MM, rM, iM, PM, QM, zM) {
              if (!dM(MM, rM, iM, PM, QM, zM)) return;
              const LM = MM._meshDisposables.get(PM);
              LM && (MM._meshDisposables.delete(PM), jM(rM, PM, LM));
              const mM = iM._rebuildSingle,
                HM = nM?.get(iM)?.m_.get(MM) ?? MM._groups.get(iM)?.r,
                hM = !!MM._groups.get(iM)?.r,
                JM = MM._disposables.length,
                EM = MM,
                UM = EM._pbrGeomContext;
              let GM, CM;
              try {
                CM = await iM(MM, [PM]), GM = EM._pbrGeomContext
              } catch (wM) {
                if (yM(MM, rM, PM, LM), lM(MM, rM), !dM(MM, rM, iM, PM, QM, zM)) return;
                throw wM
              } finally {
                iM._rebuildSingle = mM, "pbr" === iM._materialFamily && hM && (EM._pbrGeomContext = UM)
              }
              if (!dM(MM, rM, iM, PM, QM, zM)) return yM(MM, rM, PM, LM), void lM(MM, rM);
              for (let OM = MM._renderables.length - 1; OM >= 0; OM--) MM._renderables[OM].mesh === PM && MM._renderables.splice(OM, 1);
              if (LM) {
                for (const rM of LM) {
                  const iM = MM._disposables.indexOf(rM);
                  iM >= 0 && MM._disposables.splice(iM, 1);
                  const OM = rM.p;
                  if (OM) {
                    OM._disposed = !0;
                    const MM = OM._owner;
                    if (MM) {
                      const rM = MM.indexOf(OM);
                      rM >= 0 && MM.splice(rM, 1), OM._owner = void 0, 0 === MM.length && OM._onOwnerEmpty?.()
                    } else OM._onOwnerEmpty?.();
                    OM._onOwnerEmpty && (OM._onOwnerEmpty = void 0)
                  }
                }(0, OM.g)(MM.surface.engine, (() => {
                  for (const MM of LM) MM()
                }))
              }
              aM(rM, PM, LM), MM._renderables.push(...CM.renderables);
              const eM = MM._groups.get(iM);
              eM && (eM.o = [...(eM.o ?? []).filter((MM => MM.mesh !== PM)), ...CM.renderables]);
              CM.updater && MM._uniformUpdaters.push(CM.updater);
              hM && function(MM, rM) {
                const iM = new Set(MM._disposables.slice(0, rM));
                for (let OM = MM._disposables.length - 1; OM >= rM; OM--) iM.has(MM._disposables[OM]) && MM._disposables.splice(OM, 1)
              }(MM, JM);
              "pbr" === iM._materialFamily && hM && GM && (EM._pbrMeshGeomContexts ??= new WeakMap).set(PM, GM);
              (function(MM, rM, iM, OM, SM, jM) {
                let aM = nM?.get(iM);
                if (!aM) {
                  const MM = new WeakMap,
                    rM = new WeakMap,
                    OM = (OM, SM, jM, aM) => {
                      const PM = MM.get(OM)?.get(SM);
                      if (PM) return PM(OM, SM, jM, aM);
                      const nM = rM.get(OM) ?? OM._groups.get(iM)?.r;
                      if (nM) return nM(OM, SM, jM, aM);
                      throw new Error("Material group has not completed its initial build")
                    };
                  aM = {
                    m_: rM,
                    dispatch: OM,
                    scenes: MM
                  }, (nM ??= new WeakMap).set(iM, aM)
                }
                let PM = aM.scenes.get(MM);
                PM || (PM = new WeakMap, aM.scenes.set(MM, PM));
                PM.set(OM, SM), aM.m_.has(MM) || aM.m_.set(MM, jM ?? SM);
                const QM = MM._groups.get(iM);
                QM && (QM.r = aM.dispatch);
                let zM = rM.installed.get(OM);
                zM || (zM = new Set, rM.installed.set(OM, zM));
                zM.add(iM), rM.installedMeshes.add(OM)
              })(MM, rM, iM, PM, CM.rebuildSingle, hM ? HM : CM.rebuildSingle), PM.material._csmGen = (PM.material._csmGen ?? 0) + 1;
              const bM = MM._groups.get(iM);
              bM && !hM && (bM.r = CM.rebuildSingle);
              MM._renderables.sort(SM), MM._renderableVersion++, MM._materialEpoch++
            }(MM, rM, iM, zM, mM, LM))).catch((OM => {
              throw dM(MM, rM, iM, zM, mM, LM) && (rM.error = OM instanceof Error ? OM : new Error("Runtime mesh build failed", {
                cause: OM
              })), OM
            })).finally((() => {
              JM(), rM.tail === EM && (rM.tail = null), PM?.get(iM) === EM && PM.delete(iM)
            })).finally((() => {
              rM.chains.get(zM) === UM && rM.chains.delete(zM)
            }));
            return rM.chains.set(zM, UM), QM.track(UM)
          },
          all: () => Promise.all(rM.active).then((() => {})),
          track: MM => {
            const iM = MM.finally((() => rM.active.delete(iM)));
            return rM.active.add(iM), Promise.all(rM.active).then((() => {}))
          },
          base: (rM, iM) => {
            const OM = nM?.get(rM);
            return OM && OM.m_.set(MM, iM), OM?.dispatch ?? iM
          },
          get w() {
            return !!rM.tail
          },
          pendingDisposers: MM => rM.pendingDisposers.get(MM),
          holdPendingDisposers: (MM, iM) => jM(rM, MM, iM),
          releasePendingDisposers: (MM, iM) => aM(rM, MM, iM),
          reset: OM => {
            JM(MM, rM, OM), iM._pbrMeshGeomContexts?.delete(OM)
          },
          remove: OM => {
            rM.generations.set(OM, (rM.generations.get(OM) ?? 0) + 1), rM.chains.delete(OM), hM(MM, rM, OM), iM._pbrMeshGeomContexts?.delete(OM)
          },
          dropBase: rM => {
            const iM = nM?.get(rM);
            iM && (iM.m_.delete(MM), iM.scenes.delete(MM))
          },
          wait: async MM => {
            const iM = new Set;
            for (const OM of MM) {
              const MM = rM.chains.get(OM);
              MM && iM.add(MM)
            }
            await Promise.all(iM)
          },
          _e: function() {
            let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (rM.error) {
              const iM = rM.error;
              throw MM && (rM.error = null), iM
            }
          },
          _x: MM => {
            rM.error = MM instanceof Error ? MM : new Error("Runtime mesh build failed", {
              cause: MM
            })
          },
          _d: () => rM.dh,
          exclusive: (MM, iM) => {
            const OM = [];
            rM.tail && OM.push(rM.tail);
            const SM = PM?.get(MM);
            SM && OM.push(SM);
            const jM = Promise.all(OM).then(iM),
              aM = jM.then((() => {}), (() => {}));
            return rM.tail = aM, (PM ??= new WeakMap).set(MM, aM), aM.then((() => {
              rM.tail === aM && (rM.tail = null), PM?.get(MM) === aM && PM.delete(MM)
            })), jM
          }
        };
      return MM._runtimeBuilds = QM, (MM._beforeRender ??= []).push((() => {
        QM._e()
      })), MM._disposables.push((() => {
        rM.dh = !0, rM.active.clear();
        for (const iM of rM.installedMeshes) JM(MM, rM, iM);
        for (const rM of MM._groups.keys()) nM?.get(rM)?.m_.delete(MM);
        MM._runtimeBuilds = void 0, iM._pbrMeshGeomContexts = void 0
      })), QM
    }

    function hM(MM, rM, iM) {
      const OM = rM.installed.get(iM);
      if (OM) {
        for (const rM of OM) nM?.get(rM)?.scenes.get(MM)?.delete(iM);
        rM.installed.delete(iM), rM.installedMeshes.delete(iM)
      }
    }

    function JM(MM, rM, iM) {
      hM(MM, rM, iM)
    }

    function dM(MM, rM, iM, OM, SM, jM) {
      return !rM.dh && rM.generations.get(OM) === jM && MM.meshes.includes(OM) && OM.material === SM && SM._buildGroup === iM
    }

    function yM(MM, rM, iM, SM) {
      const jM = MM._meshDisposables.get(iM);
      if (jM && jM !== SM) {
        MM._meshDisposables.delete(iM);
        for (const MM of jM) MM()
      }
      if (SM)
        if (MM.meshes.includes(iM)) MM._meshDisposables.set(iM, SM);
        else if (rM.dh)
        for (const OM of SM) OM();
      else(0, OM.g)(MM.surface.engine, (() => {
        for (const MM of SM) MM()
      }));
      aM(rM, iM, SM)
    }

    function lM(MM, rM) {
      if (!rM.dh) return;
      const iM = MM._disposables.splice(0);
      for (const OM of iM) OM()
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);