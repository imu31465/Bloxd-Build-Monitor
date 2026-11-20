export const id = 355;
export const ids = [355];
export const modules = {
  60644: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      A: () => KU,
      B: () => GU,
      C: () => cU,
      X: () => jU
    });
    var tU = gU(41090),
      pU = (UU, RU) => UU.order - RU.order;

    function EU(UU, RU, gU) {
      UU.pendingDisposers.set(RU, gU)
    }

    function PU(UU, RU, gU) {
      gU && UU.pendingDisposers.get(RU) === gU && UU.pendingDisposers.delete(RU)
    }
    var TU = null,
      qU = null;

    function KU(UU, RU, gU, tU) {
      if (!RU || gU.material !== RU) return tU ?? Promise.resolve();
      const pU = GU(UU, RU._buildGroup, gU);
      return tU ? Promise.all([tU, pU]).then((() => {})) : pU
    }

    function cU(UU, RU, gU) {
      let tU = gU;
      for (const pU of RU) {
        const RU = Array.isArray(pU),
          gU = RU ? pU[0] : pU;
        tU = KU(UU, RU ? pU[1] : gU.material, gU, tU)
      }
      return (tU ?? Promise.resolve()).catch((RU => {
        UU._runtimeBuilds?._x(RU)
      }))
    }

    function GU(UU, RU, tU) {
      if (UU._z || !UU.meshes.includes(tU)) return UU._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(UU, RU, gU) {
          for (const [pU, EU] of UU._groups)
            if (pU !== RU) {
              const UU = EU.indexOf(gU);
              UU >= 0 && EU.splice(UU, 1)
            } let tU = UU._groups.get(RU);
          tU || (tU = [], UU._groups.set(RU, tU));
          tU.includes(gU) || tU.push(gU)
        }(UU, RU, tU), "pbr" === RU._materialFamily && (UU._built || UU._groups.get(RU)?.r)) {
        const RU = UU._runtimeBuilds ?? uU(UU),
          tU = gU.e(385).then((() => gU(61259))).then((RU => {
            let {
              rebuildScenePbrPipelines: gU
            } = RU;
            return UU._z ? void 0 : gU(UU, !0)
          })).catch((RU => {
            UU._runtimeBuilds?._x(RU)
          }));
        return RU.track(tU)
      }
      return (UU._runtimeBuilds ?? uU(UU)).queue(RU, tU).catch((() => {}))
    }

    function jU(UU, RU, gU) {
      return UU._z ? Promise.resolve(void 0) : (UU._runtimeBuilds ?? uU(UU)).exclusive(RU, gU)
    }

    function uU(UU) {
      const RU = {
          pC: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        gU = UU,
        KU = {
          queue: (gU, cU) => {
            const GU = (RU.generations.get(cU) ?? 0) + 1,
              jU = cU.material;
            RU.generations.set(cU, GU);
            const uU = RU.chains.get(cU),
              CU = [RU.tail, TU?.get(gU)].filter((UU => !!UU));
            let hU = () => {};
            const fU = new Promise((UU => {
              hU = UU
            }));
            RU.tail = fU, (TU ??= new WeakMap).set(gU, fU);
            const xU = (uU ? uU.catch((() => {})) : Promise.resolve()).then((() => Promise.all(CU))).then((() => async function(UU, RU, gU, TU, KU, cU) {
              if (!QU(UU, RU, gU, TU, KU, cU)) return;
              const GU = UU._meshDisposables.get(TU);
              GU && (UU._meshDisposables.delete(TU), EU(RU, TU, GU));
              const jU = gU._rebuildSingle,
                uU = qU?.get(gU)?.R6.get(UU) ?? UU._groups.get(gU)?.r,
                CU = !!UU._groups.get(gU)?.r,
                hU = UU._disposables.length,
                fU = UU,
                xU = fU._pbrGeomContext;
              let mU, IU;
              try {
                IU = await gU(UU, [TU]), mU = fU._pbrGeomContext
              } catch (nU) {
                if (eU(UU, RU, TU, GU), WU(UU, RU), !QU(UU, RU, gU, TU, KU, cU)) return;
                throw nU
              } finally {
                gU._rebuildSingle = jU, "pbr" === gU._materialFamily && CU && (fU._pbrGeomContext = xU)
              }
              if (!QU(UU, RU, gU, TU, KU, cU)) return eU(UU, RU, TU, GU), void WU(UU, RU);
              for (let tU = UU._renderables.length - 1; tU >= 0; tU--) UU._renderables[tU].mesh === TU && UU._renderables.splice(tU, 1);
              if (GU) {
                for (const RU of GU) {
                  const gU = UU._disposables.indexOf(RU);
                  gU >= 0 && UU._disposables.splice(gU, 1);
                  const tU = RU.p;
                  if (tU) {
                    tU._disposed = !0;
                    const UU = tU._owner;
                    if (UU) {
                      const RU = UU.indexOf(tU);
                      RU >= 0 && UU.splice(RU, 1), tU._owner = void 0, 0 === UU.length && tU._onOwnerEmpty?.()
                    } else tU._onOwnerEmpty?.();
                    tU._onOwnerEmpty && (tU._onOwnerEmpty = void 0)
                  }
                }(0, tU.c)(UU.surface.engine, (() => {
                  for (const UU of GU) UU()
                }))
              }
              PU(RU, TU, GU), UU._renderables.push(...IU.renderables);
              const JU = UU._groups.get(gU);
              JU && (JU.o = [...(JU.o ?? []).filter((UU => UU.mesh !== TU)), ...IU.renderables]);
              IU.updater && UU._uniformUpdaters.push(IU.updater);
              CU && function(UU, RU) {
                const gU = new Set(UU._disposables.slice(0, RU));
                for (let tU = UU._disposables.length - 1; tU >= RU; tU--) gU.has(UU._disposables[tU]) && UU._disposables.splice(tU, 1)
              }(UU, hU);
              "pbr" === gU._materialFamily && CU && mU && (fU._pbrMeshGeomContexts ??= new WeakMap).set(TU, mU);
              (function(UU, RU, gU, tU, pU, EU) {
                let PU = qU?.get(gU);
                if (!PU) {
                  const UU = new WeakMap,
                    RU = new WeakMap,
                    tU = (tU, pU, EU, PU) => {
                      const TU = UU.get(tU)?.get(pU);
                      if (TU) return TU(tU, pU, EU, PU);
                      const qU = RU.get(tU) ?? tU._groups.get(gU)?.r;
                      if (qU) return qU(tU, pU, EU, PU);
                      throw new Error("Material group has not completed its initial build")
                    };
                  PU = {
                    R6: RU,
                    dispatch: tU,
                    scenes: UU
                  }, (qU ??= new WeakMap).set(gU, PU)
                }
                let TU = PU.scenes.get(UU);
                TU || (TU = new WeakMap, PU.scenes.set(UU, TU));
                TU.set(tU, pU), PU.R6.has(UU) || PU.R6.set(UU, EU ?? pU);
                const KU = UU._groups.get(gU);
                KU && (KU.r = PU.dispatch);
                let cU = RU.installed.get(tU);
                cU || (cU = new Set, RU.installed.set(tU, cU));
                cU.add(gU), RU.installedMeshes.add(tU)
              })(UU, RU, gU, TU, IU.rebuildSingle, CU ? uU : IU.rebuildSingle), TU.material._csmGen = (TU.material._csmGen ?? 0) + 1;
              const wU = UU._groups.get(gU);
              wU && !CU && (wU.r = IU.rebuildSingle);
              UU._renderables.sort(pU), UU._renderableVersion++, UU._materialEpoch++
            }(UU, RU, gU, cU, jU, GU))).catch((tU => {
              throw QU(UU, RU, gU, cU, jU, GU) && (RU.error = tU instanceof Error ? tU : new Error("Runtime mesh build failed", {
                cause: tU
              })), tU
            })).finally((() => {
              hU(), RU.tail === fU && (RU.tail = null), TU?.get(gU) === fU && TU.delete(gU)
            })).finally((() => {
              RU.chains.get(cU) === xU && RU.chains.delete(cU)
            }));
            return RU.chains.set(cU, xU), KU.track(xU)
          },
          all: () => Promise.all(RU.active).then((() => {})),
          track: UU => {
            const gU = UU.finally((() => RU.active.delete(gU)));
            return RU.active.add(gU), Promise.all(RU.active).then((() => {}))
          },
          base: (RU, gU) => {
            const tU = qU?.get(RU);
            return tU && tU.R6.set(UU, gU), tU?.dispatch ?? gU
          },
          get w() {
            return !!RU.tail
          },
          pendingDisposers: UU => RU.pendingDisposers.get(UU),
          holdPendingDisposers: (UU, gU) => EU(RU, UU, gU),
          releasePendingDisposers: (UU, gU) => PU(RU, UU, gU),
          reset: tU => {
            hU(UU, RU, tU), gU._pbrMeshGeomContexts?.delete(tU)
          },
          remove: tU => {
            RU.generations.set(tU, (RU.generations.get(tU) ?? 0) + 1), RU.chains.delete(tU), CU(UU, RU, tU), gU._pbrMeshGeomContexts?.delete(tU)
          },
          dropBase: RU => {
            const gU = qU?.get(RU);
            gU && (gU.R6.delete(UU), gU.scenes.delete(UU))
          },
          wait: async UU => {
            const gU = new Set;
            for (const tU of UU) {
              const UU = RU.chains.get(tU);
              UU && gU.add(UU)
            }
            await Promise.all(gU)
          },
          _e: function() {
            let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (RU.error) {
              const gU = RU.error;
              throw UU && (RU.error = null), gU
            }
          },
          _x: UU => {
            RU.error = UU instanceof Error ? UU : new Error("Runtime mesh build failed", {
              cause: UU
            })
          },
          _d: () => RU.pC,
          exclusive: (UU, gU) => {
            const tU = [];
            RU.tail && tU.push(RU.tail);
            const pU = TU?.get(UU);
            pU && tU.push(pU);
            const EU = Promise.all(tU).then(gU),
              PU = EU.then((() => {}), (() => {}));
            return RU.tail = PU, (TU ??= new WeakMap).set(UU, PU), PU.then((() => {
              RU.tail === PU && (RU.tail = null), TU?.get(UU) === PU && TU.delete(UU)
            })), EU
          }
        };
      return UU._runtimeBuilds = KU, (UU._beforeRender ??= []).push((() => {
        KU._e()
      })), UU._disposables.push((() => {
        RU.pC = !0, RU.active.clear();
        for (const gU of RU.installedMeshes) hU(UU, RU, gU);
        for (const RU of UU._groups.keys()) qU?.get(RU)?.R6.delete(UU);
        UU._runtimeBuilds = void 0, gU._pbrMeshGeomContexts = void 0
      })), KU
    }

    function CU(UU, RU, gU) {
      const tU = RU.installed.get(gU);
      if (tU) {
        for (const RU of tU) qU?.get(RU)?.scenes.get(UU)?.delete(gU);
        RU.installed.delete(gU), RU.installedMeshes.delete(gU)
      }
    }

    function hU(UU, RU, gU) {
      CU(UU, RU, gU)
    }

    function QU(UU, RU, gU, tU, pU, EU) {
      return !RU.pC && RU.generations.get(tU) === EU && UU.meshes.includes(tU) && tU.material === pU && pU._buildGroup === gU
    }

    function eU(UU, RU, gU, pU) {
      const EU = UU._meshDisposables.get(gU);
      if (EU && EU !== pU) {
        UU._meshDisposables.delete(gU);
        for (const UU of EU) UU()
      }
      if (pU)
        if (UU.meshes.includes(gU)) UU._meshDisposables.set(gU, pU);
        else if (RU.pC)
        for (const tU of pU) tU();
      else(0, tU.c)(UU.surface.engine, (() => {
        for (const UU of pU) UU()
      }));
      PU(RU, gU, pU)
    }

    function WU(UU, RU) {
      if (!RU.pC) return;
      const gU = UU._disposables.splice(0);
      for (const tU of gU) tU()
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);