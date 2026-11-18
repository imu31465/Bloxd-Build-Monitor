export const id = 345;
export const ids = [345];
export const modules = {
  59823: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      A: () => gB,
      B: () => kB,
      C: () => oB,
      X: () => LB
    });
    var VB = dB(40438),
      yB = (BB, TB) => BB.order - TB.order;

    function pB(BB, TB, dB) {
      BB.pendingDisposers.set(TB, dB)
    }

    function lB(BB, TB, dB) {
      dB && BB.pendingDisposers.get(TB) === dB && BB.pendingDisposers.delete(TB)
    }
    var JB = null,
      YB = null;

    function gB(BB, TB, dB, VB) {
      if (!TB || dB.material !== TB) return VB ?? Promise.resolve();
      const yB = kB(BB, TB._buildGroup, dB);
      return VB ? Promise.all([VB, yB]).then((() => {})) : yB
    }

    function oB(BB, TB, dB) {
      let VB = dB;
      for (const yB of TB) {
        const TB = Array.isArray(yB),
          dB = TB ? yB[0] : yB;
        VB = gB(BB, TB ? yB[1] : dB.material, dB, VB)
      }
      return (VB ?? Promise.resolve()).catch((TB => {
        BB._runtimeBuilds?._x(TB)
      }))
    }

    function kB(BB, TB, VB) {
      if (BB._z || !BB.meshes.includes(VB)) return BB._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(BB, TB, dB) {
          for (const [yB, pB] of BB._groups)
            if (yB !== TB) {
              const BB = pB.indexOf(dB);
              BB >= 0 && pB.splice(BB, 1)
            } let VB = BB._groups.get(TB);
          VB || (VB = [], BB._groups.set(TB, VB));
          VB.includes(dB) || VB.push(dB)
        }(BB, TB, VB), "pbr" === TB._materialFamily && (BB._built || BB._groups.get(TB)?.r)) {
        const TB = BB._runtimeBuilds ?? OB(BB),
          VB = dB.e(375).then((() => dB(60439))).then((TB => {
            let {
              rebuildScenePbrPipelines: dB
            } = TB;
            return BB._z ? void 0 : dB(BB, !0)
          })).catch((TB => {
            BB._runtimeBuilds?._x(TB)
          }));
        return TB.track(VB)
      }
      return (BB._runtimeBuilds ?? OB(BB)).queue(TB, VB).catch((() => {}))
    }

    function LB(BB, TB, dB) {
      return BB._z ? Promise.resolve(void 0) : (BB._runtimeBuilds ?? OB(BB)).exclusive(TB, dB)
    }

    function OB(BB) {
      const TB = {
          ND: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        dB = BB,
        gB = {
          queue: (dB, oB) => {
            const kB = (TB.generations.get(oB) ?? 0) + 1,
              LB = oB.material;
            TB.generations.set(oB, kB);
            const OB = TB.chains.get(oB),
              DB = [TB.tail, JB?.get(dB)].filter((BB => !!BB));
            let uB = () => {};
            const mB = new Promise((BB => {
              uB = BB
            }));
            TB.tail = mB, (JB ??= new WeakMap).set(dB, mB);
            const iB = (OB ? OB.catch((() => {})) : Promise.resolve()).then((() => Promise.all(DB))).then((() => async function(BB, TB, dB, JB, gB, oB) {
              if (!HB(BB, TB, dB, JB, gB, oB)) return;
              const kB = BB._meshDisposables.get(JB);
              kB && (BB._meshDisposables.delete(JB), pB(TB, JB, kB));
              const LB = dB._rebuildSingle,
                OB = YB?.get(dB)?.o9.get(BB) ?? BB._groups.get(dB)?.r,
                DB = !!BB._groups.get(dB)?.r,
                uB = BB._disposables.length,
                mB = BB,
                iB = mB._pbrGeomContext;
              let NB, tB;
              try {
                tB = await dB(BB, [JB]), NB = mB._pbrGeomContext
              } catch (MB) {
                if (EB(BB, TB, JB, kB), vB(BB, TB), !HB(BB, TB, dB, JB, gB, oB)) return;
                throw MB
              } finally {
                dB._rebuildSingle = LB, "pbr" === dB._materialFamily && DB && (mB._pbrGeomContext = iB)
              }
              if (!HB(BB, TB, dB, JB, gB, oB)) return EB(BB, TB, JB, kB), void vB(BB, TB);
              for (let VB = BB._renderables.length - 1; VB >= 0; VB--) BB._renderables[VB].mesh === JB && BB._renderables.splice(VB, 1);
              if (kB) {
                for (const TB of kB) {
                  const dB = BB._disposables.indexOf(TB);
                  dB >= 0 && BB._disposables.splice(dB, 1);
                  const VB = TB.p;
                  if (VB) {
                    VB._disposed = !0;
                    const BB = VB._owner;
                    if (BB) {
                      const TB = BB.indexOf(VB);
                      TB >= 0 && BB.splice(TB, 1), VB._owner = void 0, 0 === BB.length && VB._onOwnerEmpty?.()
                    } else VB._onOwnerEmpty?.();
                    VB._onOwnerEmpty && (VB._onOwnerEmpty = void 0)
                  }
                }(0, VB.b)(BB.surface.engine, (() => {
                  for (const BB of kB) BB()
                }))
              }
              lB(TB, JB, kB), BB._renderables.push(...tB.renderables);
              const fB = BB._groups.get(dB);
              fB && (fB.o = [...(fB.o ?? []).filter((BB => BB.mesh !== JB)), ...tB.renderables]);
              tB.updater && BB._uniformUpdaters.push(tB.updater);
              DB && function(BB, TB) {
                const dB = new Set(BB._disposables.slice(0, TB));
                for (let VB = BB._disposables.length - 1; VB >= TB; VB--) dB.has(BB._disposables[VB]) && BB._disposables.splice(VB, 1)
              }(BB, uB);
              "pbr" === dB._materialFamily && DB && NB && (mB._pbrMeshGeomContexts ??= new WeakMap).set(JB, NB);
              (function(BB, TB, dB, VB, yB, pB) {
                let lB = YB?.get(dB);
                if (!lB) {
                  const BB = new WeakMap,
                    TB = new WeakMap,
                    VB = (VB, yB, pB, lB) => {
                      const JB = BB.get(VB)?.get(yB);
                      if (JB) return JB(VB, yB, pB, lB);
                      const YB = TB.get(VB) ?? VB._groups.get(dB)?.r;
                      if (YB) return YB(VB, yB, pB, lB);
                      throw new Error("Material group has not completed its initial build")
                    };
                  lB = {
                    o9: TB,
                    dispatch: VB,
                    scenes: BB
                  }, (YB ??= new WeakMap).set(dB, lB)
                }
                let JB = lB.scenes.get(BB);
                JB || (JB = new WeakMap, lB.scenes.set(BB, JB));
                JB.set(VB, yB), lB.o9.has(BB) || lB.o9.set(BB, pB ?? yB);
                const gB = BB._groups.get(dB);
                gB && (gB.r = lB.dispatch);
                let oB = TB.installed.get(VB);
                oB || (oB = new Set, TB.installed.set(VB, oB));
                oB.add(dB), TB.installedMeshes.add(VB)
              })(BB, TB, dB, JB, tB.rebuildSingle, DB ? OB : tB.rebuildSingle), JB.material._csmGen = (JB.material._csmGen ?? 0) + 1;
              const sB = BB._groups.get(dB);
              sB && !DB && (sB.r = tB.rebuildSingle);
              BB._renderables.sort(yB), BB._renderableVersion++, BB._materialEpoch++
            }(BB, TB, dB, oB, LB, kB))).catch((VB => {
              throw HB(BB, TB, dB, oB, LB, kB) && (TB.error = VB instanceof Error ? VB : new Error("Runtime mesh build failed", {
                cause: VB
              })), VB
            })).finally((() => {
              uB(), TB.tail === mB && (TB.tail = null), JB?.get(dB) === mB && JB.delete(dB)
            })).finally((() => {
              TB.chains.get(oB) === iB && TB.chains.delete(oB)
            }));
            return TB.chains.set(oB, iB), gB.track(iB)
          },
          all: () => Promise.all(TB.active).then((() => {})),
          track: BB => {
            const dB = BB.finally((() => TB.active.delete(dB)));
            return TB.active.add(dB), Promise.all(TB.active).then((() => {}))
          },
          base: (TB, dB) => {
            const VB = YB?.get(TB);
            return VB && VB.o9.set(BB, dB), VB?.dispatch ?? dB
          },
          get w() {
            return !!TB.tail
          },
          pendingDisposers: BB => TB.pendingDisposers.get(BB),
          holdPendingDisposers: (BB, dB) => pB(TB, BB, dB),
          releasePendingDisposers: (BB, dB) => lB(TB, BB, dB),
          reset: VB => {
            uB(BB, TB, VB), dB._pbrMeshGeomContexts?.delete(VB)
          },
          remove: VB => {
            TB.generations.set(VB, (TB.generations.get(VB) ?? 0) + 1), TB.chains.delete(VB), DB(BB, TB, VB), dB._pbrMeshGeomContexts?.delete(VB)
          },
          dropBase: TB => {
            const dB = YB?.get(TB);
            dB && (dB.o9.delete(BB), dB.scenes.delete(BB))
          },
          wait: async BB => {
            const dB = new Set;
            for (const VB of BB) {
              const BB = TB.chains.get(VB);
              BB && dB.add(BB)
            }
            await Promise.all(dB)
          },
          _e: function() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (TB.error) {
              const dB = TB.error;
              throw BB && (TB.error = null), dB
            }
          },
          _x: BB => {
            TB.error = BB instanceof Error ? BB : new Error("Runtime mesh build failed", {
              cause: BB
            })
          },
          _d: () => TB.ND,
          exclusive: (BB, dB) => {
            const VB = [];
            TB.tail && VB.push(TB.tail);
            const yB = JB?.get(BB);
            yB && VB.push(yB);
            const pB = Promise.all(VB).then(dB),
              lB = pB.then((() => {}), (() => {}));
            return TB.tail = lB, (JB ??= new WeakMap).set(BB, lB), lB.then((() => {
              TB.tail === lB && (TB.tail = null), JB?.get(BB) === lB && JB.delete(BB)
            })), pB
          }
        };
      return BB._runtimeBuilds = gB, (BB._beforeRender ??= []).push((() => {
        gB._e()
      })), BB._disposables.push((() => {
        TB.ND = !0, TB.active.clear();
        for (const dB of TB.installedMeshes) uB(BB, TB, dB);
        for (const TB of BB._groups.keys()) YB?.get(TB)?.o9.delete(BB);
        BB._runtimeBuilds = void 0, dB._pbrMeshGeomContexts = void 0
      })), gB
    }

    function DB(BB, TB, dB) {
      const VB = TB.installed.get(dB);
      if (VB) {
        for (const TB of VB) YB?.get(TB)?.scenes.get(BB)?.delete(dB);
        TB.installed.delete(dB), TB.installedMeshes.delete(dB)
      }
    }

    function uB(BB, TB, dB) {
      DB(BB, TB, dB)
    }

    function HB(BB, TB, dB, VB, yB, pB) {
      return !TB.ND && TB.generations.get(VB) === pB && BB.meshes.includes(VB) && VB.material === yB && yB._buildGroup === dB
    }

    function EB(BB, TB, dB, yB) {
      const pB = BB._meshDisposables.get(dB);
      if (pB && pB !== yB) {
        BB._meshDisposables.delete(dB);
        for (const BB of pB) BB()
      }
      if (yB)
        if (BB.meshes.includes(dB)) BB._meshDisposables.set(dB, yB);
        else if (TB.ND)
        for (const VB of yB) VB();
      else(0, VB.b)(BB.surface.engine, (() => {
        for (const BB of yB) BB()
      }));
      lB(TB, dB, yB)
    }

    function vB(BB, TB) {
      if (!TB.ND) return;
      const dB = BB._disposables.splice(0);
      for (const VB of dB) VB()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);