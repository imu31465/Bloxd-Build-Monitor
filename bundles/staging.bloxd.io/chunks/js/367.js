export const id = 367;
export const ids = [367];
export const modules = {
  61251: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      A: () => kT,
      B: () => lT,
      C: () => jT,
      X: () => LT
    });
    var WT = mT(41850),
      zT = (TT, UT) => TT.order - UT.order;

    function MT(TT, UT, mT) {
      TT.pendingDisposers.set(UT, mT)
    }

    function gT(TT, UT, mT) {
      mT && TT.pendingDisposers.get(UT) === mT && TT.pendingDisposers.delete(UT)
    }
    var nT = null,
      HT = null;

    function kT(TT, UT, mT, WT) {
      if (!UT || mT.material !== UT) return WT ?? Promise.resolve();
      const zT = lT(TT, UT._buildGroup, mT);
      return WT ? Promise.all([WT, zT]).then((() => {})) : zT
    }

    function jT(TT, UT, mT) {
      let WT = mT;
      for (const zT of UT) {
        const UT = Array.isArray(zT),
          mT = UT ? zT[0] : zT;
        WT = kT(TT, UT ? zT[1] : mT.material, mT, WT)
      }
      return (WT ?? Promise.resolve()).catch((UT => {
        TT._runtimeBuilds?._x(UT)
      }))
    }

    function lT(TT, UT, WT) {
      if (TT._z || !TT.meshes.includes(WT)) return TT._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(TT, UT, mT) {
          for (const [zT, MT] of TT._groups)
            if (zT !== UT) {
              const TT = MT.indexOf(mT);
              TT >= 0 && MT.splice(TT, 1)
            } let WT = TT._groups.get(UT);
          WT || (WT = [], TT._groups.set(UT, WT));
          WT.includes(mT) || WT.push(mT)
        }(TT, UT, WT), "pbr" === UT._materialFamily && (TT._built || TT._groups.get(UT)?.r)) {
        const UT = TT._runtimeBuilds ?? pT(TT),
          WT = mT.e(397).then((() => mT(61771))).then((UT => {
            let {
              rebuildScenePbrPipelines: mT
            } = UT;
            return TT._z ? void 0 : mT(TT, !0)
          })).catch((UT => {
            TT._runtimeBuilds?._x(UT)
          }));
        return UT.track(WT)
      }
      return (TT._runtimeBuilds ?? pT(TT)).queue(UT, WT).catch((() => {}))
    }

    function LT(TT, UT, mT) {
      return TT._z ? Promise.resolve(void 0) : (TT._runtimeBuilds ?? pT(TT)).exclusive(UT, mT)
    }

    function pT(TT) {
      const UT = {
          kB: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        mT = TT,
        kT = {
          queue: (mT, jT) => {
            const lT = (UT.generations.get(jT) ?? 0) + 1,
              LT = jT.material;
            UT.generations.set(jT, lT);
            const pT = UT.chains.get(jT),
              BT = [UT.tail, nT?.get(mT)].filter((TT => !!TT));
            let ZT = () => {};
            const qT = new Promise((TT => {
              ZT = TT
            }));
            UT.tail = qT, (nT ??= new WeakMap).set(mT, qT);
            const iT = (pT ? pT.catch((() => {})) : Promise.resolve()).then((() => Promise.all(BT))).then((() => async function(TT, UT, mT, nT, kT, jT) {
              if (!cT(TT, UT, mT, nT, kT, jT)) return;
              const lT = TT._meshDisposables.get(nT);
              lT && (TT._meshDisposables.delete(nT), MT(UT, nT, lT));
              const LT = mT._rebuildSingle,
                pT = HT?.get(mT)?.Z2.get(TT) ?? TT._groups.get(mT)?.r,
                BT = !!TT._groups.get(mT)?.r,
                ZT = TT._disposables.length,
                qT = TT,
                iT = qT._pbrGeomContext;
              let bT, OT;
              try {
                OT = await mT(TT, [nT]), bT = qT._pbrGeomContext
              } catch (JT) {
                if (vT(TT, UT, nT, lT), fT(TT, UT), !cT(TT, UT, mT, nT, kT, jT)) return;
                throw JT
              } finally {
                mT._rebuildSingle = LT, "pbr" === mT._materialFamily && BT && (qT._pbrGeomContext = iT)
              }
              if (!cT(TT, UT, mT, nT, kT, jT)) return vT(TT, UT, nT, lT), void fT(TT, UT);
              for (let WT = TT._renderables.length - 1; WT >= 0; WT--) TT._renderables[WT].mesh === nT && TT._renderables.splice(WT, 1);
              if (lT) {
                for (const UT of lT) {
                  const mT = TT._disposables.indexOf(UT);
                  mT >= 0 && TT._disposables.splice(mT, 1);
                  const WT = UT.p;
                  if (WT) {
                    WT._disposed = !0;
                    const TT = WT._owner;
                    if (TT) {
                      const UT = TT.indexOf(WT);
                      UT >= 0 && TT.splice(UT, 1), WT._owner = void 0, 0 === TT.length && WT._onOwnerEmpty?.()
                    } else WT._onOwnerEmpty?.();
                    WT._onOwnerEmpty && (WT._onOwnerEmpty = void 0)
                  }
                }(0, WT.f)(TT.surface.engine, (() => {
                  for (const TT of lT) TT()
                }))
              }
              gT(UT, nT, lT), TT._renderables.push(...OT.renderables);
              const eT = TT._groups.get(mT);
              eT && (eT.o = [...(eT.o ?? []).filter((TT => TT.mesh !== nT)), ...OT.renderables]);
              OT.updater && TT._uniformUpdaters.push(OT.updater);
              BT && function(TT, UT) {
                const mT = new Set(TT._disposables.slice(0, UT));
                for (let WT = TT._disposables.length - 1; WT >= UT; WT--) mT.has(TT._disposables[WT]) && TT._disposables.splice(WT, 1)
              }(TT, ZT);
              "pbr" === mT._materialFamily && BT && bT && (qT._pbrMeshGeomContexts ??= new WeakMap).set(nT, bT);
              (function(TT, UT, mT, WT, zT, MT) {
                let gT = HT?.get(mT);
                if (!gT) {
                  const TT = new WeakMap,
                    UT = new WeakMap,
                    WT = (WT, zT, MT, gT) => {
                      const nT = TT.get(WT)?.get(zT);
                      if (nT) return nT(WT, zT, MT, gT);
                      const HT = UT.get(WT) ?? WT._groups.get(mT)?.r;
                      if (HT) return HT(WT, zT, MT, gT);
                      throw new Error("Material group has not completed its initial build")
                    };
                  gT = {
                    Z2: UT,
                    dispatch: WT,
                    scenes: TT
                  }, (HT ??= new WeakMap).set(mT, gT)
                }
                let nT = gT.scenes.get(TT);
                nT || (nT = new WeakMap, gT.scenes.set(TT, nT));
                nT.set(WT, zT), gT.Z2.has(TT) || gT.Z2.set(TT, MT ?? zT);
                const kT = TT._groups.get(mT);
                kT && (kT.r = gT.dispatch);
                let jT = UT.installed.get(WT);
                jT || (jT = new Set, UT.installed.set(WT, jT));
                jT.add(mT), UT.installedMeshes.add(WT)
              })(TT, UT, mT, nT, OT.rebuildSingle, BT ? pT : OT.rebuildSingle), nT.material._csmGen = (nT.material._csmGen ?? 0) + 1;
              const YT = TT._groups.get(mT);
              YT && !BT && (YT.r = OT.rebuildSingle);
              TT._renderables.sort(zT), TT._renderableVersion++, TT._materialEpoch++
            }(TT, UT, mT, jT, LT, lT))).catch((WT => {
              throw cT(TT, UT, mT, jT, LT, lT) && (UT.error = WT instanceof Error ? WT : new Error("Runtime mesh build failed", {
                cause: WT
              })), WT
            })).finally((() => {
              ZT(), UT.tail === qT && (UT.tail = null), nT?.get(mT) === qT && nT.delete(mT)
            })).finally((() => {
              UT.chains.get(jT) === iT && UT.chains.delete(jT)
            }));
            return UT.chains.set(jT, iT), kT.track(iT)
          },
          all: () => Promise.all(UT.active).then((() => {})),
          track: TT => {
            const mT = TT.finally((() => UT.active.delete(mT)));
            return UT.active.add(mT), Promise.all(UT.active).then((() => {}))
          },
          base: (UT, mT) => {
            const WT = HT?.get(UT);
            return WT && WT.Z2.set(TT, mT), WT?.dispatch ?? mT
          },
          get w() {
            return !!UT.tail
          },
          pendingDisposers: TT => UT.pendingDisposers.get(TT),
          holdPendingDisposers: (TT, mT) => MT(UT, TT, mT),
          releasePendingDisposers: (TT, mT) => gT(UT, TT, mT),
          reset: WT => {
            ZT(TT, UT, WT), mT._pbrMeshGeomContexts?.delete(WT)
          },
          remove: WT => {
            UT.generations.set(WT, (UT.generations.get(WT) ?? 0) + 1), UT.chains.delete(WT), BT(TT, UT, WT), mT._pbrMeshGeomContexts?.delete(WT)
          },
          dropBase: UT => {
            const mT = HT?.get(UT);
            mT && (mT.Z2.delete(TT), mT.scenes.delete(TT))
          },
          wait: async TT => {
            const mT = new Set;
            for (const WT of TT) {
              const TT = UT.chains.get(WT);
              TT && mT.add(TT)
            }
            await Promise.all(mT)
          },
          _e: function() {
            let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (UT.error) {
              const mT = UT.error;
              throw TT && (UT.error = null), mT
            }
          },
          _x: TT => {
            UT.error = TT instanceof Error ? TT : new Error("Runtime mesh build failed", {
              cause: TT
            })
          },
          _d: () => UT.kB,
          exclusive: (TT, mT) => {
            const WT = [];
            UT.tail && WT.push(UT.tail);
            const zT = nT?.get(TT);
            zT && WT.push(zT);
            const MT = Promise.all(WT).then(mT),
              gT = MT.then((() => {}), (() => {}));
            return UT.tail = gT, (nT ??= new WeakMap).set(TT, gT), gT.then((() => {
              UT.tail === gT && (UT.tail = null), nT?.get(TT) === gT && nT.delete(TT)
            })), MT
          }
        };
      return TT._runtimeBuilds = kT, (TT._beforeRender ??= []).push((() => {
        kT._e()
      })), TT._disposables.push((() => {
        UT.kB = !0, UT.active.clear();
        for (const mT of UT.installedMeshes) ZT(TT, UT, mT);
        for (const UT of TT._groups.keys()) HT?.get(UT)?.Z2.delete(TT);
        TT._runtimeBuilds = void 0, mT._pbrMeshGeomContexts = void 0
      })), kT
    }

    function BT(TT, UT, mT) {
      const WT = UT.installed.get(mT);
      if (WT) {
        for (const UT of WT) HT?.get(UT)?.scenes.get(TT)?.delete(mT);
        UT.installed.delete(mT), UT.installedMeshes.delete(mT)
      }
    }

    function ZT(TT, UT, mT) {
      BT(TT, UT, mT)
    }

    function cT(TT, UT, mT, WT, zT, MT) {
      return !UT.kB && UT.generations.get(WT) === MT && TT.meshes.includes(WT) && WT.material === zT && zT._buildGroup === mT
    }

    function vT(TT, UT, mT, zT) {
      const MT = TT._meshDisposables.get(mT);
      if (MT && MT !== zT) {
        TT._meshDisposables.delete(mT);
        for (const TT of MT) TT()
      }
      if (zT)
        if (TT.meshes.includes(mT)) TT._meshDisposables.set(mT, zT);
        else if (UT.kB)
        for (const WT of zT) WT();
      else(0, WT.f)(TT.surface.engine, (() => {
        for (const TT of zT) TT()
      }));
      gT(UT, mT, zT)
    }

    function fT(TT, UT) {
      if (!UT.kB) return;
      const mT = TT._disposables.splice(0);
      for (const WT of mT) WT()
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);