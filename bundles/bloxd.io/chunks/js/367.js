export const id = 367;
export const ids = [367];
export const modules = {
  61420: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      A: () => cB,
      B: () => hB,
      C: () => nB,
      X: () => zB
    });
    var TB = ZB(41742),
      JB = (BB, IB) => BB.order - IB.order;

    function oB(BB, IB, ZB) {
      BB.pendingDisposers.set(IB, ZB)
    }

    function GB(BB, IB, ZB) {
      ZB && BB.pendingDisposers.get(IB) === ZB && BB.pendingDisposers.delete(IB)
    }
    var vB = null,
      kB = null;

    function cB(BB, IB, ZB, TB) {
      if (!IB || ZB.material !== IB) return TB ?? Promise.resolve();
      const JB = hB(BB, IB._buildGroup, ZB);
      return TB ? Promise.all([TB, JB]).then((() => {})) : JB
    }

    function nB(BB, IB, ZB) {
      let TB = ZB;
      for (const JB of IB) {
        const IB = Array.isArray(JB),
          ZB = IB ? JB[0] : JB;
        TB = cB(BB, IB ? JB[1] : ZB.material, ZB, TB)
      }
      return (TB ?? Promise.resolve()).catch((IB => {
        BB._runtimeBuilds?._x(IB)
      }))
    }

    function hB(BB, IB, TB) {
      if (BB._z || !BB.meshes.includes(TB)) return BB._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(BB, IB, ZB) {
          for (const [JB, oB] of BB._groups)
            if (JB !== IB) {
              const BB = oB.indexOf(ZB);
              BB >= 0 && oB.splice(BB, 1)
            } let TB = BB._groups.get(IB);
          TB || (TB = [], BB._groups.set(IB, TB));
          TB.includes(ZB) || TB.push(ZB)
        }(BB, IB, TB), "pbr" === IB._materialFamily && (BB._built || BB._groups.get(IB)?.r)) {
        const IB = BB._runtimeBuilds ?? FB(BB),
          TB = ZB.e(397).then((() => ZB(61907))).then((IB => {
            let {
              rebuildScenePbrPipelines: ZB
            } = IB;
            return BB._z ? void 0 : ZB(BB, !0)
          })).catch((IB => {
            BB._runtimeBuilds?._x(IB)
          }));
        return IB.track(TB)
      }
      return (BB._runtimeBuilds ?? FB(BB)).queue(IB, TB).catch((() => {}))
    }

    function zB(BB, IB, ZB) {
      return BB._z ? Promise.resolve(void 0) : (BB._runtimeBuilds ?? FB(BB)).exclusive(IB, ZB)
    }

    function FB(BB) {
      const IB = {
          WN: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ZB = BB,
        cB = {
          queue: (ZB, nB) => {
            const hB = (IB.generations.get(nB) ?? 0) + 1,
              zB = nB.material;
            IB.generations.set(nB, hB);
            const FB = IB.chains.get(nB),
              NB = [IB.tail, vB?.get(ZB)].filter((BB => !!BB));
            let gB = () => {};
            const WB = new Promise((BB => {
              gB = BB
            }));
            IB.tail = WB, (vB ??= new WeakMap).set(ZB, WB);
            const dB = (FB ? FB.catch((() => {})) : Promise.resolve()).then((() => Promise.all(NB))).then((() => async function(BB, IB, ZB, vB, cB, nB) {
              if (!qB(BB, IB, ZB, vB, cB, nB)) return;
              const hB = BB._meshDisposables.get(vB);
              hB && (BB._meshDisposables.delete(vB), oB(IB, vB, hB));
              const zB = ZB._rebuildSingle,
                FB = kB?.get(ZB)?.O4.get(BB) ?? BB._groups.get(ZB)?.r,
                NB = !!BB._groups.get(ZB)?.r,
                gB = BB._disposables.length,
                WB = BB,
                dB = WB._pbrGeomContext;
              let CB, QB;
              try {
                QB = await ZB(BB, [vB]), CB = WB._pbrGeomContext
              } catch (OB) {
                if (yB(BB, IB, vB, hB), UB(BB, IB), !qB(BB, IB, ZB, vB, cB, nB)) return;
                throw OB
              } finally {
                ZB._rebuildSingle = zB, "pbr" === ZB._materialFamily && NB && (WB._pbrGeomContext = dB)
              }
              if (!qB(BB, IB, ZB, vB, cB, nB)) return yB(BB, IB, vB, hB), void UB(BB, IB);
              for (let TB = BB._renderables.length - 1; TB >= 0; TB--) BB._renderables[TB].mesh === vB && BB._renderables.splice(TB, 1);
              if (hB) {
                for (const IB of hB) {
                  const ZB = BB._disposables.indexOf(IB);
                  ZB >= 0 && BB._disposables.splice(ZB, 1);
                  const TB = IB.p;
                  if (TB) {
                    TB._disposed = !0;
                    const BB = TB._owner;
                    if (BB) {
                      const IB = BB.indexOf(TB);
                      IB >= 0 && BB.splice(IB, 1), TB._owner = void 0, 0 === BB.length && TB._onOwnerEmpty?.()
                    } else TB._onOwnerEmpty?.();
                    TB._onOwnerEmpty && (TB._onOwnerEmpty = void 0)
                  }
                }(0, TB.f)(BB.surface.engine, (() => {
                  for (const BB of hB) BB()
                }))
              }
              GB(IB, vB, hB), BB._renderables.push(...QB.renderables);
              const sB = BB._groups.get(ZB);
              sB && (sB.o = [...(sB.o ?? []).filter((BB => BB.mesh !== vB)), ...QB.renderables]);
              QB.updater && BB._uniformUpdaters.push(QB.updater);
              NB && function(BB, IB) {
                const ZB = new Set(BB._disposables.slice(0, IB));
                for (let TB = BB._disposables.length - 1; TB >= IB; TB--) ZB.has(BB._disposables[TB]) && BB._disposables.splice(TB, 1)
              }(BB, gB);
              "pbr" === ZB._materialFamily && NB && CB && (WB._pbrMeshGeomContexts ??= new WeakMap).set(vB, CB);
              (function(BB, IB, ZB, TB, JB, oB) {
                let GB = kB?.get(ZB);
                if (!GB) {
                  const BB = new WeakMap,
                    IB = new WeakMap,
                    TB = (TB, JB, oB, GB) => {
                      const vB = BB.get(TB)?.get(JB);
                      if (vB) return vB(TB, JB, oB, GB);
                      const kB = IB.get(TB) ?? TB._groups.get(ZB)?.r;
                      if (kB) return kB(TB, JB, oB, GB);
                      throw new Error("Material group has not completed its initial build")
                    };
                  GB = {
                    O4: IB,
                    dispatch: TB,
                    scenes: BB
                  }, (kB ??= new WeakMap).set(ZB, GB)
                }
                let vB = GB.scenes.get(BB);
                vB || (vB = new WeakMap, GB.scenes.set(BB, vB));
                vB.set(TB, JB), GB.O4.has(BB) || GB.O4.set(BB, oB ?? JB);
                const cB = BB._groups.get(ZB);
                cB && (cB.r = GB.dispatch);
                let nB = IB.installed.get(TB);
                nB || (nB = new Set, IB.installed.set(TB, nB));
                nB.add(ZB), IB.installedMeshes.add(TB)
              })(BB, IB, ZB, vB, QB.rebuildSingle, NB ? FB : QB.rebuildSingle), vB.material._csmGen = (vB.material._csmGen ?? 0) + 1;
              const wB = BB._groups.get(ZB);
              wB && !NB && (wB.r = QB.rebuildSingle);
              BB._renderables.sort(JB), BB._renderableVersion++, BB._materialEpoch++
            }(BB, IB, ZB, nB, zB, hB))).catch((TB => {
              throw qB(BB, IB, ZB, nB, zB, hB) && (IB.error = TB instanceof Error ? TB : new Error("Runtime mesh build failed", {
                cause: TB
              })), TB
            })).finally((() => {
              gB(), IB.tail === WB && (IB.tail = null), vB?.get(ZB) === WB && vB.delete(ZB)
            })).finally((() => {
              IB.chains.get(nB) === dB && IB.chains.delete(nB)
            }));
            return IB.chains.set(nB, dB), cB.track(dB)
          },
          all: () => Promise.all(IB.active).then((() => {})),
          track: BB => {
            const ZB = BB.finally((() => IB.active.delete(ZB)));
            return IB.active.add(ZB), Promise.all(IB.active).then((() => {}))
          },
          base: (IB, ZB) => {
            const TB = kB?.get(IB);
            return TB && TB.O4.set(BB, ZB), TB?.dispatch ?? ZB
          },
          get w() {
            return !!IB.tail
          },
          pendingDisposers: BB => IB.pendingDisposers.get(BB),
          holdPendingDisposers: (BB, ZB) => oB(IB, BB, ZB),
          releasePendingDisposers: (BB, ZB) => GB(IB, BB, ZB),
          reset: TB => {
            gB(BB, IB, TB), ZB._pbrMeshGeomContexts?.delete(TB)
          },
          remove: TB => {
            IB.generations.set(TB, (IB.generations.get(TB) ?? 0) + 1), IB.chains.delete(TB), NB(BB, IB, TB), ZB._pbrMeshGeomContexts?.delete(TB)
          },
          dropBase: IB => {
            const ZB = kB?.get(IB);
            ZB && (ZB.O4.delete(BB), ZB.scenes.delete(BB))
          },
          wait: async BB => {
            const ZB = new Set;
            for (const TB of BB) {
              const BB = IB.chains.get(TB);
              BB && ZB.add(BB)
            }
            await Promise.all(ZB)
          },
          _e: function() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (IB.error) {
              const ZB = IB.error;
              throw BB && (IB.error = null), ZB
            }
          },
          _x: BB => {
            IB.error = BB instanceof Error ? BB : new Error("Runtime mesh build failed", {
              cause: BB
            })
          },
          _d: () => IB.WN,
          exclusive: (BB, ZB) => {
            const TB = [];
            IB.tail && TB.push(IB.tail);
            const JB = vB?.get(BB);
            JB && TB.push(JB);
            const oB = Promise.all(TB).then(ZB),
              GB = oB.then((() => {}), (() => {}));
            return IB.tail = GB, (vB ??= new WeakMap).set(BB, GB), GB.then((() => {
              IB.tail === GB && (IB.tail = null), vB?.get(BB) === GB && vB.delete(BB)
            })), oB
          }
        };
      return BB._runtimeBuilds = cB, (BB._beforeRender ??= []).push((() => {
        cB._e()
      })), BB._disposables.push((() => {
        IB.WN = !0, IB.active.clear();
        for (const ZB of IB.installedMeshes) gB(BB, IB, ZB);
        for (const IB of BB._groups.keys()) kB?.get(IB)?.O4.delete(BB);
        BB._runtimeBuilds = void 0, ZB._pbrMeshGeomContexts = void 0
      })), cB
    }

    function NB(BB, IB, ZB) {
      const TB = IB.installed.get(ZB);
      if (TB) {
        for (const IB of TB) kB?.get(IB)?.scenes.get(BB)?.delete(ZB);
        IB.installed.delete(ZB), IB.installedMeshes.delete(ZB)
      }
    }

    function gB(BB, IB, ZB) {
      NB(BB, IB, ZB)
    }

    function qB(BB, IB, ZB, TB, JB, oB) {
      return !IB.WN && IB.generations.get(TB) === oB && BB.meshes.includes(TB) && TB.material === JB && JB._buildGroup === ZB
    }

    function yB(BB, IB, ZB, JB) {
      const oB = BB._meshDisposables.get(ZB);
      if (oB && oB !== JB) {
        BB._meshDisposables.delete(ZB);
        for (const BB of oB) BB()
      }
      if (JB)
        if (BB.meshes.includes(ZB)) BB._meshDisposables.set(ZB, JB);
        else if (IB.WN)
        for (const TB of JB) TB();
      else(0, TB.f)(BB.surface.engine, (() => {
        for (const BB of JB) BB()
      }));
      GB(IB, ZB, JB)
    }

    function UB(BB, IB) {
      if (!IB.WN) return;
      const ZB = BB._disposables.splice(0);
      for (const TB of ZB) TB()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);