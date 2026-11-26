export const id = 671;
export const ids = [671];
export const modules = {
  63982: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      A: () => JB,
      B: () => PB,
      C: () => MB,
      X: () => zB
    });
    var YB = GB(44838),
      DB = (BB, OB) => BB.order - OB.order;

    function QB(BB, OB, GB) {
      BB.pendingDisposers.set(OB, GB)
    }

    function oB(BB, OB, GB) {
      GB && BB.pendingDisposers.get(OB) === GB && BB.pendingDisposers.delete(OB)
    }
    var jB = null,
      yB = null;

    function JB(BB, OB, GB, YB) {
      if (!OB || GB.material !== OB) return YB ?? Promise.resolve();
      const DB = PB(BB, OB._buildGroup, GB);
      return YB ? Promise.all([YB, DB]).then((() => {})) : DB
    }

    function MB(BB, OB, GB) {
      let YB = GB;
      for (const DB of OB) {
        const OB = Array.isArray(DB),
          GB = OB ? DB[0] : DB;
        YB = JB(BB, OB ? DB[1] : GB.material, GB, YB)
      }
      return (YB ?? Promise.resolve()).catch((OB => {
        BB._runtimeBuilds?._x(OB)
      }))
    }

    function PB(BB, OB, YB) {
      if (BB._z || !BB.meshes.includes(YB)) return BB._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(BB, OB, GB) {
          for (const [DB, QB] of BB._groups)
            if (DB !== OB) {
              const BB = QB.indexOf(GB);
              BB >= 0 && QB.splice(BB, 1)
            } let YB = BB._groups.get(OB);
          YB || (YB = [], BB._groups.set(OB, YB));
          YB.includes(GB) || YB.push(GB)
        }(BB, OB, YB), "pbr" === OB._materialFamily && (BB._built || BB._groups.get(OB)?.r)) {
        const OB = BB._runtimeBuilds ?? lB(BB),
          YB = GB.e(701).then((() => GB(64471))).then((OB => {
            let {
              rebuildScenePbrPipelines: GB
            } = OB;
            return BB._z ? void 0 : GB(BB, !0)
          })).catch((OB => {
            BB._runtimeBuilds?._x(OB)
          }));
        return OB.track(YB)
      }
      return (BB._runtimeBuilds ?? lB(BB)).queue(OB, YB).catch((() => {}))
    }

    function zB(BB, OB, GB) {
      return BB._z ? Promise.resolve(void 0) : (BB._runtimeBuilds ?? lB(BB)).exclusive(OB, GB)
    }

    function lB(BB) {
      const OB = {
          Vp: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        GB = BB,
        JB = {
          queue: (GB, MB) => {
            const PB = (OB.generations.get(MB) ?? 0) + 1,
              zB = MB.material;
            OB.generations.set(MB, PB);
            const lB = OB.chains.get(MB),
              pB = [OB.tail, jB?.get(GB)].filter((BB => !!BB));
            let qB = () => {};
            const WB = new Promise((BB => {
              qB = BB
            }));
            OB.tail = WB, (jB ??= new WeakMap).set(GB, WB);
            const AB = (lB ? lB.catch((() => {})) : Promise.resolve()).then((() => Promise.all(pB))).then((() => async function(BB, OB, GB, jB, JB, MB) {
              if (!ZB(BB, OB, GB, jB, JB, MB)) return;
              const PB = BB._meshDisposables.get(jB);
              PB && (BB._meshDisposables.delete(jB), QB(OB, jB, PB));
              const zB = GB._rebuildSingle,
                lB = yB?.get(GB)?.iBB.get(BB) ?? BB._groups.get(GB)?.r,
                pB = !!BB._groups.get(GB)?.r,
                qB = BB._disposables.length,
                WB = BB,
                AB = WB._pbrGeomContext;
              let VB, SB;
              try {
                SB = await GB(BB, [jB]), VB = WB._pbrGeomContext
              } catch (fB) {
                if (NB(BB, OB, jB, PB), RB(BB, OB), !ZB(BB, OB, GB, jB, JB, MB)) return;
                throw fB
              } finally {
                GB._rebuildSingle = zB, "pbr" === GB._materialFamily && pB && (WB._pbrGeomContext = AB)
              }
              if (!ZB(BB, OB, GB, jB, JB, MB)) return NB(BB, OB, jB, PB), void RB(BB, OB);
              for (let YB = BB._renderables.length - 1; YB >= 0; YB--) BB._renderables[YB].mesh === jB && BB._renderables.splice(YB, 1);
              if (PB) {
                for (const OB of PB) {
                  const GB = BB._disposables.indexOf(OB);
                  GB >= 0 && BB._disposables.splice(GB, 1);
                  const YB = OB.p;
                  if (YB) {
                    YB._disposed = !0;
                    const BB = YB._owner;
                    if (BB) {
                      const OB = BB.indexOf(YB);
                      OB >= 0 && BB.splice(OB, 1), YB._owner = void 0, 0 === BB.length && YB._onOwnerEmpty?.()
                    } else YB._onOwnerEmpty?.();
                    YB._onOwnerEmpty && (YB._onOwnerEmpty = void 0)
                  }
                }(0, YB.e)(BB.surface.engine, (() => {
                  for (const BB of PB) BB()
                }))
              }
              oB(OB, jB, PB), BB._renderables.push(...SB.renderables);
              const nB = BB._groups.get(GB);
              nB && (nB.o = [...(nB.o ?? []).filter((BB => BB.mesh !== jB)), ...SB.renderables]);
              SB.updater && BB._uniformUpdaters.push(SB.updater);
              pB && function(BB, OB) {
                const GB = new Set(BB._disposables.slice(0, OB));
                for (let YB = BB._disposables.length - 1; YB >= OB; YB--) GB.has(BB._disposables[YB]) && BB._disposables.splice(YB, 1)
              }(BB, qB);
              "pbr" === GB._materialFamily && pB && VB && (WB._pbrMeshGeomContexts ??= new WeakMap).set(jB, VB);
              (function(BB, OB, GB, YB, DB, QB) {
                let oB = yB?.get(GB);
                if (!oB) {
                  const BB = new WeakMap,
                    OB = new WeakMap,
                    YB = (YB, DB, QB, oB) => {
                      const jB = BB.get(YB)?.get(DB);
                      if (jB) return jB(YB, DB, QB, oB);
                      const yB = OB.get(YB) ?? YB._groups.get(GB)?.r;
                      if (yB) return yB(YB, DB, QB, oB);
                      throw new Error("Material group has not completed its initial build")
                    };
                  oB = {
                    iBB: OB,
                    dispatch: YB,
                    scenes: BB
                  }, (yB ??= new WeakMap).set(GB, oB)
                }
                let jB = oB.scenes.get(BB);
                jB || (jB = new WeakMap, oB.scenes.set(BB, jB));
                jB.set(YB, DB), oB.iBB.has(BB) || oB.iBB.set(BB, QB ?? DB);
                const JB = BB._groups.get(GB);
                JB && (JB.r = oB.dispatch);
                let MB = OB.installed.get(YB);
                MB || (MB = new Set, OB.installed.set(YB, MB));
                MB.add(GB), OB.installedMeshes.add(YB)
              })(BB, OB, GB, jB, SB.rebuildSingle, pB ? lB : SB.rebuildSingle), jB.material._csmGen = (jB.material._csmGen ?? 0) + 1;
              const UB = BB._groups.get(GB);
              UB && !pB && (UB.r = SB.rebuildSingle);
              BB._renderables.sort(DB), BB._renderableVersion++, BB._materialEpoch++
            }(BB, OB, GB, MB, zB, PB))).catch((YB => {
              throw ZB(BB, OB, GB, MB, zB, PB) && (OB.error = YB instanceof Error ? YB : new Error("Runtime mesh build failed", {
                cause: YB
              })), YB
            })).finally((() => {
              qB(), OB.tail === WB && (OB.tail = null), jB?.get(GB) === WB && jB.delete(GB)
            })).finally((() => {
              OB.chains.get(MB) === AB && OB.chains.delete(MB)
            }));
            return OB.chains.set(MB, AB), JB.track(AB)
          },
          all: () => Promise.all(OB.active).then((() => {})),
          track: BB => {
            const GB = BB.finally((() => OB.active.delete(GB)));
            return OB.active.add(GB), Promise.all(OB.active).then((() => {}))
          },
          base: (OB, GB) => {
            const YB = yB?.get(OB);
            return YB && YB.iBB.set(BB, GB), YB?.dispatch ?? GB
          },
          get w() {
            return !!OB.tail
          },
          pendingDisposers: BB => OB.pendingDisposers.get(BB),
          holdPendingDisposers: (BB, GB) => QB(OB, BB, GB),
          releasePendingDisposers: (BB, GB) => oB(OB, BB, GB),
          reset: YB => {
            qB(BB, OB, YB), GB._pbrMeshGeomContexts?.delete(YB)
          },
          remove: YB => {
            OB.generations.set(YB, (OB.generations.get(YB) ?? 0) + 1), OB.chains.delete(YB), pB(BB, OB, YB), GB._pbrMeshGeomContexts?.delete(YB)
          },
          dropBase: OB => {
            const GB = yB?.get(OB);
            GB && (GB.iBB.delete(BB), GB.scenes.delete(BB))
          },
          wait: async BB => {
            const GB = new Set;
            for (const YB of BB) {
              const BB = OB.chains.get(YB);
              BB && GB.add(BB)
            }
            await Promise.all(GB)
          },
          _e: function() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (OB.error) {
              const GB = OB.error;
              throw BB && (OB.error = null), GB
            }
          },
          _x: BB => {
            OB.error = BB instanceof Error ? BB : new Error("Runtime mesh build failed", {
              cause: BB
            })
          },
          _d: () => OB.Vp,
          exclusive: (BB, GB) => {
            const YB = [];
            OB.tail && YB.push(OB.tail);
            const DB = jB?.get(BB);
            DB && YB.push(DB);
            const QB = Promise.all(YB).then(GB),
              oB = QB.then((() => {}), (() => {}));
            return OB.tail = oB, (jB ??= new WeakMap).set(BB, oB), oB.then((() => {
              OB.tail === oB && (OB.tail = null), jB?.get(BB) === oB && jB.delete(BB)
            })), QB
          }
        };
      return BB._runtimeBuilds = JB, (BB._beforeRender ??= []).push((() => {
        JB._e()
      })), BB._disposables.push((() => {
        OB.Vp = !0, OB.active.clear();
        for (const GB of OB.installedMeshes) qB(BB, OB, GB);
        for (const OB of BB._groups.keys()) yB?.get(OB)?.iBB.delete(BB);
        BB._runtimeBuilds = void 0, GB._pbrMeshGeomContexts = void 0
      })), JB
    }

    function pB(BB, OB, GB) {
      const YB = OB.installed.get(GB);
      if (YB) {
        for (const OB of YB) yB?.get(OB)?.scenes.get(BB)?.delete(GB);
        OB.installed.delete(GB), OB.installedMeshes.delete(GB)
      }
    }

    function qB(BB, OB, GB) {
      pB(BB, OB, GB)
    }

    function ZB(BB, OB, GB, YB, DB, QB) {
      return !OB.Vp && OB.generations.get(YB) === QB && BB.meshes.includes(YB) && YB.material === DB && DB._buildGroup === GB
    }

    function NB(BB, OB, GB, DB) {
      const QB = BB._meshDisposables.get(GB);
      if (QB && QB !== DB) {
        BB._meshDisposables.delete(GB);
        for (const BB of QB) BB()
      }
      if (DB)
        if (BB.meshes.includes(GB)) BB._meshDisposables.set(GB, DB);
        else if (OB.Vp)
        for (const YB of DB) YB();
      else(0, YB.e)(BB.surface.engine, (() => {
        for (const BB of DB) BB()
      }));
      oB(OB, GB, DB)
    }

    function RB(BB, OB) {
      if (!OB.Vp) return;
      const GB = BB._disposables.splice(0);
      for (const YB of GB) YB()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);