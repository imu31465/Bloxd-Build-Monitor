export const id = 356;
export const ids = [356];
export const modules = {
  60666: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      A: () => xT,
      B: () => AT,
      C: () => IT,
      X: () => CT
    });
    var lT = cT(41302),
      MT = (TT, kT) => TT.order - kT.order;

    function KT(TT, kT, cT) {
      TT.pendingDisposers.set(kT, cT)
    }

    function OT(TT, kT, cT) {
      cT && TT.pendingDisposers.get(kT) === cT && TT.pendingDisposers.delete(kT)
    }
    var yT = null,
      fT = null;

    function xT(TT, kT, cT, lT) {
      if (!kT || cT.material !== kT) return lT ?? Promise.resolve();
      const MT = AT(TT, kT._buildGroup, cT);
      return lT ? Promise.all([lT, MT]).then((() => {})) : MT
    }

    function IT(TT, kT, cT) {
      let lT = cT;
      for (const MT of kT) {
        const kT = Array.isArray(MT),
          cT = kT ? MT[0] : MT;
        lT = xT(TT, kT ? MT[1] : cT.material, cT, lT)
      }
      return (lT ?? Promise.resolve()).catch((kT => {
        TT._runtimeBuilds?._x(kT)
      }))
    }

    function AT(TT, kT, lT) {
      if (TT._z || !TT.meshes.includes(lT)) return TT._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(TT, kT, cT) {
          for (const [MT, KT] of TT._groups)
            if (MT !== kT) {
              const TT = KT.indexOf(cT);
              TT >= 0 && KT.splice(TT, 1)
            } let lT = TT._groups.get(kT);
          lT || (lT = [], TT._groups.set(kT, lT));
          lT.includes(cT) || lT.push(cT)
        }(TT, kT, lT), "pbr" === kT._materialFamily && (TT._built || TT._groups.get(kT)?.r)) {
        const kT = TT._runtimeBuilds ?? jT(TT),
          lT = cT.e(386).then((() => cT(61304))).then((kT => {
            let {
              rebuildScenePbrPipelines: cT
            } = kT;
            return TT._z ? void 0 : cT(TT, !0)
          })).catch((kT => {
            TT._runtimeBuilds?._x(kT)
          }));
        return kT.track(lT)
      }
      return (TT._runtimeBuilds ?? jT(TT)).queue(kT, lT).catch((() => {}))
    }

    function CT(TT, kT, cT) {
      return TT._z ? Promise.resolve(void 0) : (TT._runtimeBuilds ?? jT(TT)).exclusive(kT, cT)
    }

    function jT(TT) {
      const kT = {
          yv: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        cT = TT,
        xT = {
          queue: (cT, IT) => {
            const AT = (kT.generations.get(IT) ?? 0) + 1,
              CT = IT.material;
            kT.generations.set(IT, AT);
            const jT = kT.chains.get(IT),
              vT = [kT.tail, yT?.get(cT)].filter((TT => !!TT));
            let tT = () => {};
            const ST = new Promise((TT => {
              tT = TT
            }));
            kT.tail = ST, (yT ??= new WeakMap).set(cT, ST);
            const DT = (jT ? jT.catch((() => {})) : Promise.resolve()).then((() => Promise.all(vT))).then((() => async function(TT, kT, cT, yT, xT, IT) {
              if (!hT(TT, kT, cT, yT, xT, IT)) return;
              const AT = TT._meshDisposables.get(yT);
              AT && (TT._meshDisposables.delete(yT), KT(kT, yT, AT));
              const CT = cT._rebuildSingle,
                jT = fT?.get(cT)?.M6.get(TT) ?? TT._groups.get(cT)?.r,
                vT = !!TT._groups.get(cT)?.r,
                tT = TT._disposables.length,
                ST = TT,
                DT = ST._pbrGeomContext;
              let aT, FT;
              try {
                FT = await cT(TT, [yT]), aT = ST._pbrGeomContext
              } catch (wT) {
                if (NT(TT, kT, yT, AT), QT(TT, kT), !hT(TT, kT, cT, yT, xT, IT)) return;
                throw wT
              } finally {
                cT._rebuildSingle = CT, "pbr" === cT._materialFamily && vT && (ST._pbrGeomContext = DT)
              }
              if (!hT(TT, kT, cT, yT, xT, IT)) return NT(TT, kT, yT, AT), void QT(TT, kT);
              for (let lT = TT._renderables.length - 1; lT >= 0; lT--) TT._renderables[lT].mesh === yT && TT._renderables.splice(lT, 1);
              if (AT) {
                for (const kT of AT) {
                  const cT = TT._disposables.indexOf(kT);
                  cT >= 0 && TT._disposables.splice(cT, 1);
                  const lT = kT.p;
                  if (lT) {
                    lT._disposed = !0;
                    const TT = lT._owner;
                    if (TT) {
                      const kT = TT.indexOf(lT);
                      kT >= 0 && TT.splice(kT, 1), lT._owner = void 0, 0 === TT.length && lT._onOwnerEmpty?.()
                    } else lT._onOwnerEmpty?.();
                    lT._onOwnerEmpty && (lT._onOwnerEmpty = void 0)
                  }
                }(0, lT.b)(TT.surface.engine, (() => {
                  for (const TT of AT) TT()
                }))
              }
              OT(kT, yT, AT), TT._renderables.push(...FT.renderables);
              const rT = TT._groups.get(cT);
              rT && (rT.o = [...(rT.o ?? []).filter((TT => TT.mesh !== yT)), ...FT.renderables]);
              FT.updater && TT._uniformUpdaters.push(FT.updater);
              vT && function(TT, kT) {
                const cT = new Set(TT._disposables.slice(0, kT));
                for (let lT = TT._disposables.length - 1; lT >= kT; lT--) cT.has(TT._disposables[lT]) && TT._disposables.splice(lT, 1)
              }(TT, tT);
              "pbr" === cT._materialFamily && vT && aT && (ST._pbrMeshGeomContexts ??= new WeakMap).set(yT, aT);
              (function(TT, kT, cT, lT, MT, KT) {
                let OT = fT?.get(cT);
                if (!OT) {
                  const TT = new WeakMap,
                    kT = new WeakMap,
                    lT = (lT, MT, KT, OT) => {
                      const yT = TT.get(lT)?.get(MT);
                      if (yT) return yT(lT, MT, KT, OT);
                      const fT = kT.get(lT) ?? lT._groups.get(cT)?.r;
                      if (fT) return fT(lT, MT, KT, OT);
                      throw new Error("Material group has not completed its initial build")
                    };
                  OT = {
                    M6: kT,
                    dispatch: lT,
                    scenes: TT
                  }, (fT ??= new WeakMap).set(cT, OT)
                }
                let yT = OT.scenes.get(TT);
                yT || (yT = new WeakMap, OT.scenes.set(TT, yT));
                yT.set(lT, MT), OT.M6.has(TT) || OT.M6.set(TT, KT ?? MT);
                const xT = TT._groups.get(cT);
                xT && (xT.r = OT.dispatch);
                let IT = kT.installed.get(lT);
                IT || (IT = new Set, kT.installed.set(lT, IT));
                IT.add(cT), kT.installedMeshes.add(lT)
              })(TT, kT, cT, yT, FT.rebuildSingle, vT ? jT : FT.rebuildSingle), yT.material._csmGen = (yT.material._csmGen ?? 0) + 1;
              const PT = TT._groups.get(cT);
              PT && !vT && (PT.r = FT.rebuildSingle);
              TT._renderables.sort(MT), TT._renderableVersion++, TT._materialEpoch++
            }(TT, kT, cT, IT, CT, AT))).catch((lT => {
              throw hT(TT, kT, cT, IT, CT, AT) && (kT.error = lT instanceof Error ? lT : new Error("Runtime mesh build failed", {
                cause: lT
              })), lT
            })).finally((() => {
              tT(), kT.tail === ST && (kT.tail = null), yT?.get(cT) === ST && yT.delete(cT)
            })).finally((() => {
              kT.chains.get(IT) === DT && kT.chains.delete(IT)
            }));
            return kT.chains.set(IT, DT), xT.track(DT)
          },
          all: () => Promise.all(kT.active).then((() => {})),
          track: TT => {
            const cT = TT.finally((() => kT.active.delete(cT)));
            return kT.active.add(cT), Promise.all(kT.active).then((() => {}))
          },
          base: (kT, cT) => {
            const lT = fT?.get(kT);
            return lT && lT.M6.set(TT, cT), lT?.dispatch ?? cT
          },
          get w() {
            return !!kT.tail
          },
          pendingDisposers: TT => kT.pendingDisposers.get(TT),
          holdPendingDisposers: (TT, cT) => KT(kT, TT, cT),
          releasePendingDisposers: (TT, cT) => OT(kT, TT, cT),
          reset: lT => {
            tT(TT, kT, lT), cT._pbrMeshGeomContexts?.delete(lT)
          },
          remove: lT => {
            kT.generations.set(lT, (kT.generations.get(lT) ?? 0) + 1), kT.chains.delete(lT), vT(TT, kT, lT), cT._pbrMeshGeomContexts?.delete(lT)
          },
          dropBase: kT => {
            const cT = fT?.get(kT);
            cT && (cT.M6.delete(TT), cT.scenes.delete(TT))
          },
          wait: async TT => {
            const cT = new Set;
            for (const lT of TT) {
              const TT = kT.chains.get(lT);
              TT && cT.add(TT)
            }
            await Promise.all(cT)
          },
          _e: function() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (kT.error) {
              const cT = kT.error;
              throw TT && (kT.error = null), cT
            }
          },
          _x: TT => {
            kT.error = TT instanceof Error ? TT : new Error("Runtime mesh build failed", {
              cause: TT
            })
          },
          _d: () => kT.yv,
          exclusive: (TT, cT) => {
            const lT = [];
            kT.tail && lT.push(kT.tail);
            const MT = yT?.get(TT);
            MT && lT.push(MT);
            const KT = Promise.all(lT).then(cT),
              OT = KT.then((() => {}), (() => {}));
            return kT.tail = OT, (yT ??= new WeakMap).set(TT, OT), OT.then((() => {
              kT.tail === OT && (kT.tail = null), yT?.get(TT) === OT && yT.delete(TT)
            })), KT
          }
        };
      return TT._runtimeBuilds = xT, (TT._beforeRender ??= []).push((() => {
        xT._e()
      })), TT._disposables.push((() => {
        kT.yv = !0, kT.active.clear();
        for (const cT of kT.installedMeshes) tT(TT, kT, cT);
        for (const kT of TT._groups.keys()) fT?.get(kT)?.M6.delete(TT);
        TT._runtimeBuilds = void 0, cT._pbrMeshGeomContexts = void 0
      })), xT
    }

    function vT(TT, kT, cT) {
      const lT = kT.installed.get(cT);
      if (lT) {
        for (const kT of lT) fT?.get(kT)?.scenes.get(TT)?.delete(cT);
        kT.installed.delete(cT), kT.installedMeshes.delete(cT)
      }
    }

    function tT(TT, kT, cT) {
      vT(TT, kT, cT)
    }

    function hT(TT, kT, cT, lT, MT, KT) {
      return !kT.yv && kT.generations.get(lT) === KT && TT.meshes.includes(lT) && lT.material === MT && MT._buildGroup === cT
    }

    function NT(TT, kT, cT, MT) {
      const KT = TT._meshDisposables.get(cT);
      if (KT && KT !== MT) {
        TT._meshDisposables.delete(cT);
        for (const TT of KT) TT()
      }
      if (MT)
        if (TT.meshes.includes(cT)) TT._meshDisposables.set(cT, MT);
        else if (kT.yv)
        for (const lT of MT) lT();
      else(0, lT.b)(TT.surface.engine, (() => {
        for (const TT of MT) TT()
      }));
      OT(kT, cT, MT)
    }

    function QT(TT, kT) {
      if (!kT.yv) return;
      const cT = TT._disposables.splice(0);
      for (const lT of cT) lT()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);