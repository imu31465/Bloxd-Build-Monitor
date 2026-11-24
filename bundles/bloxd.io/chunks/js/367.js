export const id = 367;
export const ids = [367];
export const modules = {
  61536: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      A: () => UB,
      B: () => pB,
      C: () => aB,
      X: () => rB
    });
    var QB = zB(41807),
      nB = (BB, jB) => BB.order - jB.order;

    function dB(BB, jB, zB) {
      BB.pendingDisposers.set(jB, zB)
    }

    function IB(BB, jB, zB) {
      zB && BB.pendingDisposers.get(jB) === zB && BB.pendingDisposers.delete(jB)
    }
    var NB = null,
      uB = null;

    function UB(BB, jB, zB, QB) {
      if (!jB || zB.material !== jB) return QB ?? Promise.resolve();
      const nB = pB(BB, jB._buildGroup, zB);
      return QB ? Promise.all([QB, nB]).then((() => {})) : nB
    }

    function aB(BB, jB, zB) {
      let QB = zB;
      for (const nB of jB) {
        const jB = Array.isArray(nB),
          zB = jB ? nB[0] : nB;
        QB = UB(BB, jB ? nB[1] : zB.material, zB, QB)
      }
      return (QB ?? Promise.resolve()).catch((jB => {
        BB._runtimeBuilds?._x(jB)
      }))
    }

    function pB(BB, jB, QB) {
      if (BB._z || !BB.meshes.includes(QB)) return BB._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(BB, jB, zB) {
          for (const [nB, dB] of BB._groups)
            if (nB !== jB) {
              const BB = dB.indexOf(zB);
              BB >= 0 && dB.splice(BB, 1)
            } let QB = BB._groups.get(jB);
          QB || (QB = [], BB._groups.set(jB, QB));
          QB.includes(zB) || QB.push(zB)
        }(BB, jB, QB), "pbr" === jB._materialFamily && (BB._built || BB._groups.get(jB)?.r)) {
        const jB = BB._runtimeBuilds ?? sB(BB),
          QB = zB.e(397).then((() => zB(62067))).then((jB => {
            let {
              rebuildScenePbrPipelines: zB
            } = jB;
            return BB._z ? void 0 : zB(BB, !0)
          })).catch((jB => {
            BB._runtimeBuilds?._x(jB)
          }));
        return jB.track(QB)
      }
      return (BB._runtimeBuilds ?? sB(BB)).queue(jB, QB).catch((() => {}))
    }

    function rB(BB, jB, zB) {
      return BB._z ? Promise.resolve(void 0) : (BB._runtimeBuilds ?? sB(BB)).exclusive(jB, zB)
    }

    function sB(BB) {
      const jB = {
          HJ: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        zB = BB,
        UB = {
          queue: (zB, aB) => {
            const pB = (jB.generations.get(aB) ?? 0) + 1,
              rB = aB.material;
            jB.generations.set(aB, pB);
            const sB = jB.chains.get(aB),
              JB = [jB.tail, NB?.get(zB)].filter((BB => !!BB));
            let mB = () => {};
            const LB = new Promise((BB => {
              mB = BB
            }));
            jB.tail = LB, (NB ??= new WeakMap).set(zB, LB);
            const gB = (sB ? sB.catch((() => {})) : Promise.resolve()).then((() => Promise.all(JB))).then((() => async function(BB, jB, zB, NB, UB, aB) {
              if (!yB(BB, jB, zB, NB, UB, aB)) return;
              const pB = BB._meshDisposables.get(NB);
              pB && (BB._meshDisposables.delete(NB), dB(jB, NB, pB));
              const rB = zB._rebuildSingle,
                sB = uB?.get(zB)?.q_.get(BB) ?? BB._groups.get(zB)?.r,
                JB = !!BB._groups.get(zB)?.r,
                mB = BB._disposables.length,
                LB = BB,
                gB = LB._pbrGeomContext;
              let tB, SB;
              try {
                SB = await zB(BB, [NB]), tB = LB._pbrGeomContext
              } catch (iB) {
                if (kB(BB, jB, NB, pB), GB(BB, jB), !yB(BB, jB, zB, NB, UB, aB)) return;
                throw iB
              } finally {
                zB._rebuildSingle = rB, "pbr" === zB._materialFamily && JB && (LB._pbrGeomContext = gB)
              }
              if (!yB(BB, jB, zB, NB, UB, aB)) return kB(BB, jB, NB, pB), void GB(BB, jB);
              for (let QB = BB._renderables.length - 1; QB >= 0; QB--) BB._renderables[QB].mesh === NB && BB._renderables.splice(QB, 1);
              if (pB) {
                for (const jB of pB) {
                  const zB = BB._disposables.indexOf(jB);
                  zB >= 0 && BB._disposables.splice(zB, 1);
                  const QB = jB.p;
                  if (QB) {
                    QB._disposed = !0;
                    const BB = QB._owner;
                    if (BB) {
                      const jB = BB.indexOf(QB);
                      jB >= 0 && BB.splice(jB, 1), QB._owner = void 0, 0 === BB.length && QB._onOwnerEmpty?.()
                    } else QB._onOwnerEmpty?.();
                    QB._onOwnerEmpty && (QB._onOwnerEmpty = void 0)
                  }
                }(0, QB.f)(BB.surface.engine, (() => {
                  for (const BB of pB) BB()
                }))
              }
              IB(jB, NB, pB), BB._renderables.push(...SB.renderables);
              const MB = BB._groups.get(zB);
              MB && (MB.o = [...(MB.o ?? []).filter((BB => BB.mesh !== NB)), ...SB.renderables]);
              SB.updater && BB._uniformUpdaters.push(SB.updater);
              JB && function(BB, jB) {
                const zB = new Set(BB._disposables.slice(0, jB));
                for (let QB = BB._disposables.length - 1; QB >= jB; QB--) zB.has(BB._disposables[QB]) && BB._disposables.splice(QB, 1)
              }(BB, mB);
              "pbr" === zB._materialFamily && JB && tB && (LB._pbrMeshGeomContexts ??= new WeakMap).set(NB, tB);
              (function(BB, jB, zB, QB, nB, dB) {
                let IB = uB?.get(zB);
                if (!IB) {
                  const BB = new WeakMap,
                    jB = new WeakMap,
                    QB = (QB, nB, dB, IB) => {
                      const NB = BB.get(QB)?.get(nB);
                      if (NB) return NB(QB, nB, dB, IB);
                      const uB = jB.get(QB) ?? QB._groups.get(zB)?.r;
                      if (uB) return uB(QB, nB, dB, IB);
                      throw new Error("Material group has not completed its initial build")
                    };
                  IB = {
                    q_: jB,
                    dispatch: QB,
                    scenes: BB
                  }, (uB ??= new WeakMap).set(zB, IB)
                }
                let NB = IB.scenes.get(BB);
                NB || (NB = new WeakMap, IB.scenes.set(BB, NB));
                NB.set(QB, nB), IB.q_.has(BB) || IB.q_.set(BB, dB ?? nB);
                const UB = BB._groups.get(zB);
                UB && (UB.r = IB.dispatch);
                let aB = jB.installed.get(QB);
                aB || (aB = new Set, jB.installed.set(QB, aB));
                aB.add(zB), jB.installedMeshes.add(QB)
              })(BB, jB, zB, NB, SB.rebuildSingle, JB ? sB : SB.rebuildSingle), NB.material._csmGen = (NB.material._csmGen ?? 0) + 1;
              const EB = BB._groups.get(zB);
              EB && !JB && (EB.r = SB.rebuildSingle);
              BB._renderables.sort(nB), BB._renderableVersion++, BB._materialEpoch++
            }(BB, jB, zB, aB, rB, pB))).catch((QB => {
              throw yB(BB, jB, zB, aB, rB, pB) && (jB.error = QB instanceof Error ? QB : new Error("Runtime mesh build failed", {
                cause: QB
              })), QB
            })).finally((() => {
              mB(), jB.tail === LB && (jB.tail = null), NB?.get(zB) === LB && NB.delete(zB)
            })).finally((() => {
              jB.chains.get(aB) === gB && jB.chains.delete(aB)
            }));
            return jB.chains.set(aB, gB), UB.track(gB)
          },
          all: () => Promise.all(jB.active).then((() => {})),
          track: BB => {
            const zB = BB.finally((() => jB.active.delete(zB)));
            return jB.active.add(zB), Promise.all(jB.active).then((() => {}))
          },
          base: (jB, zB) => {
            const QB = uB?.get(jB);
            return QB && QB.q_.set(BB, zB), QB?.dispatch ?? zB
          },
          get w() {
            return !!jB.tail
          },
          pendingDisposers: BB => jB.pendingDisposers.get(BB),
          holdPendingDisposers: (BB, zB) => dB(jB, BB, zB),
          releasePendingDisposers: (BB, zB) => IB(jB, BB, zB),
          reset: QB => {
            mB(BB, jB, QB), zB._pbrMeshGeomContexts?.delete(QB)
          },
          remove: QB => {
            jB.generations.set(QB, (jB.generations.get(QB) ?? 0) + 1), jB.chains.delete(QB), JB(BB, jB, QB), zB._pbrMeshGeomContexts?.delete(QB)
          },
          dropBase: jB => {
            const zB = uB?.get(jB);
            zB && (zB.q_.delete(BB), zB.scenes.delete(BB))
          },
          wait: async BB => {
            const zB = new Set;
            for (const QB of BB) {
              const BB = jB.chains.get(QB);
              BB && zB.add(BB)
            }
            await Promise.all(zB)
          },
          _e: function() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (jB.error) {
              const zB = jB.error;
              throw BB && (jB.error = null), zB
            }
          },
          _x: BB => {
            jB.error = BB instanceof Error ? BB : new Error("Runtime mesh build failed", {
              cause: BB
            })
          },
          _d: () => jB.HJ,
          exclusive: (BB, zB) => {
            const QB = [];
            jB.tail && QB.push(jB.tail);
            const nB = NB?.get(BB);
            nB && QB.push(nB);
            const dB = Promise.all(QB).then(zB),
              IB = dB.then((() => {}), (() => {}));
            return jB.tail = IB, (NB ??= new WeakMap).set(BB, IB), IB.then((() => {
              jB.tail === IB && (jB.tail = null), NB?.get(BB) === IB && NB.delete(BB)
            })), dB
          }
        };
      return BB._runtimeBuilds = UB, (BB._beforeRender ??= []).push((() => {
        UB._e()
      })), BB._disposables.push((() => {
        jB.HJ = !0, jB.active.clear();
        for (const zB of jB.installedMeshes) mB(BB, jB, zB);
        for (const jB of BB._groups.keys()) uB?.get(jB)?.q_.delete(BB);
        BB._runtimeBuilds = void 0, zB._pbrMeshGeomContexts = void 0
      })), UB
    }

    function JB(BB, jB, zB) {
      const QB = jB.installed.get(zB);
      if (QB) {
        for (const jB of QB) uB?.get(jB)?.scenes.get(BB)?.delete(zB);
        jB.installed.delete(zB), jB.installedMeshes.delete(zB)
      }
    }

    function mB(BB, jB, zB) {
      JB(BB, jB, zB)
    }

    function yB(BB, jB, zB, QB, nB, dB) {
      return !jB.HJ && jB.generations.get(QB) === dB && BB.meshes.includes(QB) && QB.material === nB && nB._buildGroup === zB
    }

    function kB(BB, jB, zB, nB) {
      const dB = BB._meshDisposables.get(zB);
      if (dB && dB !== nB) {
        BB._meshDisposables.delete(zB);
        for (const BB of dB) BB()
      }
      if (nB)
        if (BB.meshes.includes(zB)) BB._meshDisposables.set(zB, nB);
        else if (jB.HJ)
        for (const QB of nB) QB();
      else(0, QB.f)(BB.surface.engine, (() => {
        for (const BB of nB) BB()
      }));
      IB(jB, zB, nB)
    }

    function GB(BB, jB) {
      if (!jB.HJ) return;
      const zB = BB._disposables.splice(0);
      for (const QB of zB) QB()
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);