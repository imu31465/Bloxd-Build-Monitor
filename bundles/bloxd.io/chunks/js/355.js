export const id = 355;
export const ids = [355];
export const modules = {
  60125: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      A: () => FT,
      B: () => DT,
      C: () => ST,
      X: () => LT
    });
    var iT = IT(40561),
      zT = (TT, oT) => TT.order - oT.order;

    function kT(TT, oT, IT) {
      TT.pendingDisposers.set(oT, IT)
    }

    function WT(TT, oT, IT) {
      IT && TT.pendingDisposers.get(oT) === IT && TT.pendingDisposers.delete(oT)
    }
    var XT = null,
      BT = null;

    function FT(TT, oT, IT, iT) {
      if (!oT || IT.material !== oT) return iT ?? Promise.resolve();
      const zT = DT(TT, oT._buildGroup, IT);
      return iT ? Promise.all([iT, zT]).then((() => {})) : zT
    }

    function ST(TT, oT, IT) {
      let iT = IT;
      for (const zT of oT) {
        const oT = Array.isArray(zT),
          IT = oT ? zT[0] : zT;
        iT = FT(TT, oT ? zT[1] : IT.material, IT, iT)
      }
      return (iT ?? Promise.resolve()).catch((oT => {
        TT._runtimeBuilds?._x(oT)
      }))
    }

    function DT(TT, oT, iT) {
      if (TT._z || !TT.meshes.includes(iT)) return TT._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(TT, oT, IT) {
          for (const [zT, kT] of TT._groups)
            if (zT !== oT) {
              const TT = kT.indexOf(IT);
              TT >= 0 && kT.splice(TT, 1)
            } let iT = TT._groups.get(oT);
          iT || (iT = [], TT._groups.set(oT, iT));
          iT.includes(IT) || iT.push(IT)
        }(TT, oT, iT), "pbr" === oT._materialFamily && (TT._built || TT._groups.get(oT)?.r)) {
        const oT = TT._runtimeBuilds ?? xT(TT),
          iT = IT.e(385).then((() => IT(60768))).then((oT => {
            let {
              rebuildScenePbrPipelines: IT
            } = oT;
            return TT._z ? void 0 : IT(TT, !0)
          })).catch((oT => {
            TT._runtimeBuilds?._x(oT)
          }));
        return oT.track(iT)
      }
      return (TT._runtimeBuilds ?? xT(TT)).queue(oT, iT).catch((() => {}))
    }

    function LT(TT, oT, IT) {
      return TT._z ? Promise.resolve(void 0) : (TT._runtimeBuilds ?? xT(TT)).exclusive(oT, IT)
    }

    function xT(TT) {
      const oT = {
          Ec: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        IT = TT,
        FT = {
          queue: (IT, ST) => {
            const DT = (oT.generations.get(ST) ?? 0) + 1,
              LT = ST.material;
            oT.generations.set(ST, DT);
            const xT = oT.chains.get(ST),
              cT = [oT.tail, XT?.get(IT)].filter((TT => !!TT));
            let KT = () => {};
            const gT = new Promise((TT => {
              KT = TT
            }));
            oT.tail = gT, (XT ??= new WeakMap).set(IT, gT);
            const hT = (xT ? xT.catch((() => {})) : Promise.resolve()).then((() => Promise.all(cT))).then((() => async function(TT, oT, IT, XT, FT, ST) {
              if (!MT(TT, oT, IT, XT, FT, ST)) return;
              const DT = TT._meshDisposables.get(XT);
              DT && (TT._meshDisposables.delete(XT), kT(oT, XT, DT));
              const LT = IT._rebuildSingle,
                xT = BT?.get(IT)?.Q0.get(TT) ?? TT._groups.get(IT)?.r,
                cT = !!TT._groups.get(IT)?.r,
                KT = TT._disposables.length,
                gT = TT,
                hT = gT._pbrGeomContext;
              let wT, mT;
              try {
                mT = await IT(TT, [XT]), wT = gT._pbrGeomContext
              } catch (uT) {
                if (rT(TT, oT, XT, DT), AT(TT, oT), !MT(TT, oT, IT, XT, FT, ST)) return;
                throw uT
              } finally {
                IT._rebuildSingle = LT, "pbr" === IT._materialFamily && cT && (gT._pbrGeomContext = hT)
              }
              if (!MT(TT, oT, IT, XT, FT, ST)) return rT(TT, oT, XT, DT), void AT(TT, oT);
              for (let iT = TT._renderables.length - 1; iT >= 0; iT--) TT._renderables[iT].mesh === XT && TT._renderables.splice(iT, 1);
              if (DT) {
                for (const oT of DT) {
                  const IT = TT._disposables.indexOf(oT);
                  IT >= 0 && TT._disposables.splice(IT, 1);
                  const iT = oT.p;
                  if (iT) {
                    iT._disposed = !0;
                    const TT = iT._owner;
                    if (TT) {
                      const oT = TT.indexOf(iT);
                      oT >= 0 && TT.splice(oT, 1), iT._owner = void 0, 0 === TT.length && iT._onOwnerEmpty?.()
                    } else iT._onOwnerEmpty?.();
                    iT._onOwnerEmpty && (iT._onOwnerEmpty = void 0)
                  }
                }(0, iT.c)(TT.surface.engine, (() => {
                  for (const TT of DT) TT()
                }))
              }
              WT(oT, XT, DT), TT._renderables.push(...mT.renderables);
              const eT = TT._groups.get(IT);
              eT && (eT.o = [...(eT.o ?? []).filter((TT => TT.mesh !== XT)), ...mT.renderables]);
              mT.updater && TT._uniformUpdaters.push(mT.updater);
              cT && function(TT, oT) {
                const IT = new Set(TT._disposables.slice(0, oT));
                for (let iT = TT._disposables.length - 1; iT >= oT; iT--) IT.has(TT._disposables[iT]) && TT._disposables.splice(iT, 1)
              }(TT, KT);
              "pbr" === IT._materialFamily && cT && wT && (gT._pbrMeshGeomContexts ??= new WeakMap).set(XT, wT);
              (function(TT, oT, IT, iT, zT, kT) {
                let WT = BT?.get(IT);
                if (!WT) {
                  const TT = new WeakMap,
                    oT = new WeakMap,
                    iT = (iT, zT, kT, WT) => {
                      const XT = TT.get(iT)?.get(zT);
                      if (XT) return XT(iT, zT, kT, WT);
                      const BT = oT.get(iT) ?? iT._groups.get(IT)?.r;
                      if (BT) return BT(iT, zT, kT, WT);
                      throw new Error("Material group has not completed its initial build")
                    };
                  WT = {
                    Q0: oT,
                    dispatch: iT,
                    scenes: TT
                  }, (BT ??= new WeakMap).set(IT, WT)
                }
                let XT = WT.scenes.get(TT);
                XT || (XT = new WeakMap, WT.scenes.set(TT, XT));
                XT.set(iT, zT), WT.Q0.has(TT) || WT.Q0.set(TT, kT ?? zT);
                const FT = TT._groups.get(IT);
                FT && (FT.r = WT.dispatch);
                let ST = oT.installed.get(iT);
                ST || (ST = new Set, oT.installed.set(iT, ST));
                ST.add(IT), oT.installedMeshes.add(iT)
              })(TT, oT, IT, XT, mT.rebuildSingle, cT ? xT : mT.rebuildSingle), XT.material._csmGen = (XT.material._csmGen ?? 0) + 1;
              const RT = TT._groups.get(IT);
              RT && !cT && (RT.r = mT.rebuildSingle);
              TT._renderables.sort(zT), TT._renderableVersion++, TT._materialEpoch++
            }(TT, oT, IT, ST, LT, DT))).catch((iT => {
              throw MT(TT, oT, IT, ST, LT, DT) && (oT.error = iT instanceof Error ? iT : new Error("Runtime mesh build failed", {
                cause: iT
              })), iT
            })).finally((() => {
              KT(), oT.tail === gT && (oT.tail = null), XT?.get(IT) === gT && XT.delete(IT)
            })).finally((() => {
              oT.chains.get(ST) === hT && oT.chains.delete(ST)
            }));
            return oT.chains.set(ST, hT), FT.track(hT)
          },
          all: () => Promise.all(oT.active).then((() => {})),
          track: TT => {
            const IT = TT.finally((() => oT.active.delete(IT)));
            return oT.active.add(IT), Promise.all(oT.active).then((() => {}))
          },
          base: (oT, IT) => {
            const iT = BT?.get(oT);
            return iT && iT.Q0.set(TT, IT), iT?.dispatch ?? IT
          },
          get w() {
            return !!oT.tail
          },
          pendingDisposers: TT => oT.pendingDisposers.get(TT),
          holdPendingDisposers: (TT, IT) => kT(oT, TT, IT),
          releasePendingDisposers: (TT, IT) => WT(oT, TT, IT),
          reset: iT => {
            KT(TT, oT, iT), IT._pbrMeshGeomContexts?.delete(iT)
          },
          remove: iT => {
            oT.generations.set(iT, (oT.generations.get(iT) ?? 0) + 1), oT.chains.delete(iT), cT(TT, oT, iT), IT._pbrMeshGeomContexts?.delete(iT)
          },
          dropBase: oT => {
            const IT = BT?.get(oT);
            IT && (IT.Q0.delete(TT), IT.scenes.delete(TT))
          },
          wait: async TT => {
            const IT = new Set;
            for (const iT of TT) {
              const TT = oT.chains.get(iT);
              TT && IT.add(TT)
            }
            await Promise.all(IT)
          },
          _e: function() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (oT.error) {
              const IT = oT.error;
              throw TT && (oT.error = null), IT
            }
          },
          _x: TT => {
            oT.error = TT instanceof Error ? TT : new Error("Runtime mesh build failed", {
              cause: TT
            })
          },
          _d: () => oT.Ec,
          exclusive: (TT, IT) => {
            const iT = [];
            oT.tail && iT.push(oT.tail);
            const zT = XT?.get(TT);
            zT && iT.push(zT);
            const kT = Promise.all(iT).then(IT),
              WT = kT.then((() => {}), (() => {}));
            return oT.tail = WT, (XT ??= new WeakMap).set(TT, WT), WT.then((() => {
              oT.tail === WT && (oT.tail = null), XT?.get(TT) === WT && XT.delete(TT)
            })), kT
          }
        };
      return TT._runtimeBuilds = FT, (TT._beforeRender ??= []).push((() => {
        FT._e()
      })), TT._disposables.push((() => {
        oT.Ec = !0, oT.active.clear();
        for (const IT of oT.installedMeshes) KT(TT, oT, IT);
        for (const oT of TT._groups.keys()) BT?.get(oT)?.Q0.delete(TT);
        TT._runtimeBuilds = void 0, IT._pbrMeshGeomContexts = void 0
      })), FT
    }

    function cT(TT, oT, IT) {
      const iT = oT.installed.get(IT);
      if (iT) {
        for (const oT of iT) BT?.get(oT)?.scenes.get(TT)?.delete(IT);
        oT.installed.delete(IT), oT.installedMeshes.delete(IT)
      }
    }

    function KT(TT, oT, IT) {
      cT(TT, oT, IT)
    }

    function MT(TT, oT, IT, iT, zT, kT) {
      return !oT.Ec && oT.generations.get(iT) === kT && TT.meshes.includes(iT) && iT.material === zT && zT._buildGroup === IT
    }

    function rT(TT, oT, IT, zT) {
      const kT = TT._meshDisposables.get(IT);
      if (kT && kT !== zT) {
        TT._meshDisposables.delete(IT);
        for (const TT of kT) TT()
      }
      if (zT)
        if (TT.meshes.includes(IT)) TT._meshDisposables.set(IT, zT);
        else if (oT.Ec)
        for (const iT of zT) iT();
      else(0, iT.c)(TT.surface.engine, (() => {
        for (const TT of zT) TT()
      }));
      WT(oT, IT, zT)
    }

    function AT(TT, oT) {
      if (!oT.Ec) return;
      const IT = TT._disposables.splice(0);
      for (const iT of IT) iT()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);