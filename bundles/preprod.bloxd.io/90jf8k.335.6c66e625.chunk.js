export const id = 335;
export const ids = [335];
export const modules = {
  59019: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      A: () => PF,
      B: () => iW,
      C: () => RF,
      X: () => eF
    });
    var CF = SF(39588),
      AF = (FF, WF) => FF.order - WF.order;

    function uF(FF, WF, SF) {
      FF.pendingDisposers.set(WF, SF)
    }

    function hF(FF, WF, SF) {
      SF && FF.pendingDisposers.get(WF) === SF && FF.pendingDisposers.delete(WF)
    }
    var bW = null,
      dF = null;

    function PF(FF, WF, SF, CF) {
      if (!WF || SF.material !== WF) return CF ?? Promise.resolve();
      const AF = iW(FF, WF._buildGroup, SF);
      return CF ? Promise.all([CF, AF]).then((() => {})) : AF
    }

    function RF(FF, WF, SF) {
      let CF = SF;
      for (const AF of WF) {
        const WF = Array.isArray(AF),
          SF = WF ? AF[0] : AF;
        CF = PF(FF, WF ? AF[1] : SF.material, SF, CF)
      }
      return (CF ?? Promise.resolve()).catch((WF => {
        FF._runtimeBuilds?._x(WF)
      }))
    }

    function iW(FF, WF, CF) {
      if (FF._z || !FF.meshes.includes(CF)) return FF._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(FF, WF, SF) {
          for (const [AF, uF] of FF._groups)
            if (AF !== WF) {
              const FF = uF.indexOf(SF);
              FF >= 0 && uF.splice(FF, 1)
            } let CF = FF._groups.get(WF);
          CF || (CF = [], FF._groups.set(WF, CF));
          CF.includes(SF) || CF.push(SF)
        }(FF, WF, CF), "pbr" === WF._materialFamily && (FF._built || FF._groups.get(WF)?.r)) {
        const WF = FF._runtimeBuilds ?? EF(FF),
          CF = SF.e(365).then((() => SF(59587))).then((WF => {
            let {
              rebuildScenePbrPipelines: SF
            } = WF;
            return FF._z ? void 0 : SF(FF, !0)
          })).catch((WF => {
            FF._runtimeBuilds?._x(WF)
          }));
        return WF.track(CF)
      }
      return (FF._runtimeBuilds ?? EF(FF)).queue(WF, CF).catch((() => {}))
    }

    function eF(FF, WF, SF) {
      return FF._z ? Promise.resolve(void 0) : (FF._runtimeBuilds ?? EF(FF)).exclusive(WF, SF)
    }

    function EF(FF) {
      const WF = {
          DC: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        SF = FF,
        PF = {
          queue: (SF, RF) => {
            const iW = (WF.generations.get(RF) ?? 0) + 1,
              eF = RF.material;
            WF.generations.set(RF, iW);
            const EF = WF.chains.get(RF),
              QF = [WF.tail, bW?.get(SF)].filter((FF => !!FF));
            let rW = () => {};
            const aW = new Promise((FF => {
              rW = FF
            }));
            WF.tail = aW, (bW ??= new WeakMap).set(SF, aW);
            const kW = (EF ? EF.catch((() => {})) : Promise.resolve()).then((() => Promise.all(QF))).then((() => async function(FF, WF, SF, bW, PF, RF) {
              if (!gW(FF, WF, SF, bW, PF, RF)) return;
              const iW = FF._meshDisposables.get(bW);
              iW && (FF._meshDisposables.delete(bW), uF(WF, bW, iW));
              const eF = SF._rebuildSingle,
                EF = dF?.get(SF)?.xhF.get(FF) ?? FF._groups.get(SF)?.r,
                QF = !!FF._groups.get(SF)?.r,
                rW = FF._disposables.length,
                aW = FF,
                kW = aW._pbrGeomContext;
              let qW, VF;
              try {
                VF = await SF(FF, [bW]), qW = aW._pbrGeomContext
              } catch (LF) {
                if (tW(FF, WF, bW, iW), TF(FF, WF), !gW(FF, WF, SF, bW, PF, RF)) return;
                throw LF
              } finally {
                SF._rebuildSingle = eF, "pbr" === SF._materialFamily && QF && (aW._pbrGeomContext = kW)
              }
              if (!gW(FF, WF, SF, bW, PF, RF)) return tW(FF, WF, bW, iW), void TF(FF, WF);
              for (let CF = FF._renderables.length - 1; CF >= 0; CF--) FF._renderables[CF].mesh === bW && FF._renderables.splice(CF, 1);
              if (iW) {
                for (const WF of iW) {
                  const SF = FF._disposables.indexOf(WF);
                  SF >= 0 && FF._disposables.splice(SF, 1);
                  const CF = WF.p;
                  if (CF) {
                    CF._disposed = !0;
                    const FF = CF._owner;
                    if (FF) {
                      const WF = FF.indexOf(CF);
                      WF >= 0 && FF.splice(WF, 1), CF._owner = void 0, 0 === FF.length && CF._onOwnerEmpty?.()
                    } else CF._onOwnerEmpty?.();
                    CF._onOwnerEmpty && (CF._onOwnerEmpty = void 0)
                  }
                }(0, CF.b)(FF.surface.engine, (() => {
                  for (const FF of iW) FF()
                }))
              }
              hF(WF, bW, iW), FF._renderables.push(...VF.renderables);
              const NF = FF._groups.get(SF);
              NF && (NF.o = [...(NF.o ?? []).filter((FF => FF.mesh !== bW)), ...VF.renderables]);
              VF.updater && FF._uniformUpdaters.push(VF.updater);
              QF && function(FF, WF) {
                const SF = new Set(FF._disposables.slice(0, WF));
                for (let CF = FF._disposables.length - 1; CF >= WF; CF--) SF.has(FF._disposables[CF]) && FF._disposables.splice(CF, 1)
              }(FF, rW);
              "pbr" === SF._materialFamily && QF && qW && (aW._pbrMeshGeomContexts ??= new WeakMap).set(bW, qW);
              (function(FF, WF, SF, CF, AF, uF) {
                let hF = dF?.get(SF);
                if (!hF) {
                  const FF = new WeakMap,
                    WF = new WeakMap,
                    CF = (CF, AF, uF, hF) => {
                      const bW = FF.get(CF)?.get(AF);
                      if (bW) return bW(CF, AF, uF, hF);
                      const dF = WF.get(CF) ?? CF._groups.get(SF)?.r;
                      if (dF) return dF(CF, AF, uF, hF);
                      throw new Error("Material group has not completed its initial build")
                    };
                  hF = {
                    xhF: WF,
                    dispatch: CF,
                    scenes: FF
                  }, (dF ??= new WeakMap).set(SF, hF)
                }
                let bW = hF.scenes.get(FF);
                bW || (bW = new WeakMap, hF.scenes.set(FF, bW));
                bW.set(CF, AF), hF.xhF.has(FF) || hF.xhF.set(FF, uF ?? AF);
                const PF = FF._groups.get(SF);
                PF && (PF.r = hF.dispatch);
                let RF = WF.installed.get(CF);
                RF || (RF = new Set, WF.installed.set(CF, RF));
                RF.add(SF), WF.installedMeshes.add(CF)
              })(FF, WF, SF, bW, VF.rebuildSingle, QF ? EF : VF.rebuildSingle), bW.material._csmGen = (bW.material._csmGen ?? 0) + 1;
              const DF = FF._groups.get(SF);
              DF && !QF && (DF.r = VF.rebuildSingle);
              FF._renderables.sort(AF), FF._renderableVersion++, FF._materialEpoch++
            }(FF, WF, SF, RF, eF, iW))).catch((CF => {
              throw gW(FF, WF, SF, RF, eF, iW) && (WF.error = CF instanceof Error ? CF : new Error("Runtime mesh build failed", {
                cause: CF
              })), CF
            })).finally((() => {
              rW(), WF.tail === aW && (WF.tail = null), bW?.get(SF) === aW && bW.delete(SF)
            })).finally((() => {
              WF.chains.get(RF) === kW && WF.chains.delete(RF)
            }));
            return WF.chains.set(RF, kW), PF.track(kW)
          },
          all: () => Promise.all(WF.active).then((() => {})),
          track: FF => {
            const SF = FF.finally((() => WF.active.delete(SF)));
            return WF.active.add(SF), Promise.all(WF.active).then((() => {}))
          },
          base: (WF, SF) => {
            const CF = dF?.get(WF);
            return CF && CF.xhF.set(FF, SF), CF?.dispatch ?? SF
          },
          get w() {
            return !!WF.tail
          },
          pendingDisposers: FF => WF.pendingDisposers.get(FF),
          holdPendingDisposers: (FF, SF) => uF(WF, FF, SF),
          releasePendingDisposers: (FF, SF) => hF(WF, FF, SF),
          reset: CF => {
            rW(FF, WF, CF), SF._pbrMeshGeomContexts?.delete(CF)
          },
          remove: CF => {
            WF.generations.set(CF, (WF.generations.get(CF) ?? 0) + 1), WF.chains.delete(CF), QF(FF, WF, CF), SF._pbrMeshGeomContexts?.delete(CF)
          },
          dropBase: WF => {
            const SF = dF?.get(WF);
            SF && (SF.xhF.delete(FF), SF.scenes.delete(FF))
          },
          wait: async FF => {
            const SF = new Set;
            for (const CF of FF) {
              const FF = WF.chains.get(CF);
              FF && SF.add(FF)
            }
            await Promise.all(SF)
          },
          _e: function() {
            let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (WF.error) {
              const SF = WF.error;
              throw FF && (WF.error = null), SF
            }
          },
          _x: FF => {
            WF.error = FF instanceof Error ? FF : new Error("Runtime mesh build failed", {
              cause: FF
            })
          },
          _d: () => WF.DC,
          exclusive: (FF, SF) => {
            const CF = [];
            WF.tail && CF.push(WF.tail);
            const AF = bW?.get(FF);
            AF && CF.push(AF);
            const uF = Promise.all(CF).then(SF),
              hF = uF.then((() => {}), (() => {}));
            return WF.tail = hF, (bW ??= new WeakMap).set(FF, hF), hF.then((() => {
              WF.tail === hF && (WF.tail = null), bW?.get(FF) === hF && bW.delete(FF)
            })), uF
          }
        };
      return FF._runtimeBuilds = PF, (FF._beforeRender ??= []).push((() => {
        PF._e()
      })), FF._disposables.push((() => {
        WF.DC = !0, WF.active.clear();
        for (const SF of WF.installedMeshes) rW(FF, WF, SF);
        for (const WF of FF._groups.keys()) dF?.get(WF)?.xhF.delete(FF);
        FF._runtimeBuilds = void 0, SF._pbrMeshGeomContexts = void 0
      })), PF
    }

    function QF(FF, WF, SF) {
      const CF = WF.installed.get(SF);
      if (CF) {
        for (const WF of CF) dF?.get(WF)?.scenes.get(FF)?.delete(SF);
        WF.installed.delete(SF), WF.installedMeshes.delete(SF)
      }
    }

    function rW(FF, WF, SF) {
      QF(FF, WF, SF)
    }

    function gW(FF, WF, SF, CF, AF, uF) {
      return !WF.DC && WF.generations.get(CF) === uF && FF.meshes.includes(CF) && CF.material === AF && AF._buildGroup === SF
    }

    function tW(FF, WF, SF, AF) {
      const uF = FF._meshDisposables.get(SF);
      if (uF && uF !== AF) {
        FF._meshDisposables.delete(SF);
        for (const FF of uF) FF()
      }
      if (AF)
        if (FF.meshes.includes(SF)) FF._meshDisposables.set(SF, AF);
        else if (WF.DC)
        for (const CF of AF) CF();
      else(0, CF.b)(FF.surface.engine, (() => {
        for (const FF of AF) FF()
      }));
      hF(WF, SF, AF)
    }

    function TF(FF, WF) {
      if (!WF.DC) return;
      const SF = FF._disposables.splice(0);
      for (const CF of SF) CF()
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);