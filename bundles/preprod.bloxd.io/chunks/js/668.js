export const id = 668;
export const ids = [668];
export const modules = {
  64045: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      A: () => DU,
      B: () => YU,
      C: () => EU,
      X: () => NU
    });
    var cU = zU(44400),
      yU = (UU, XU) => UU.order - XU.order;

    function QU(UU, XU, zU) {
      UU.pendingDisposers.set(XU, zU)
    }

    function AU(UU, XU, zU) {
      zU && UU.pendingDisposers.get(XU) === zU && UU.pendingDisposers.delete(XU)
    }
    var FU = null,
      oU = null;

    function DU(UU, XU, zU, cU) {
      if (!XU || zU.material !== XU) return cU ?? Promise.resolve();
      const yU = YU(UU, XU._buildGroup, zU);
      return cU ? Promise.all([cU, yU]).then((() => {})) : yU
    }

    function EU(UU, XU, zU) {
      let cU = zU;
      for (const yU of XU) {
        const XU = Array.isArray(yU),
          zU = XU ? yU[0] : yU;
        cU = DU(UU, XU ? yU[1] : zU.material, zU, cU)
      }
      return (cU ?? Promise.resolve()).catch((XU => {
        UU._runtimeBuilds?._x(XU)
      }))
    }

    function YU(UU, XU, cU) {
      if (UU._z || !UU.meshes.includes(cU)) return UU._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(UU, XU, zU) {
          for (const [yU, QU] of UU._groups)
            if (yU !== XU) {
              const UU = QU.indexOf(zU);
              UU >= 0 && QU.splice(UU, 1)
            } let cU = UU._groups.get(XU);
          cU || (cU = [], UU._groups.set(XU, cU));
          cU.includes(zU) || cU.push(zU)
        }(UU, XU, cU), "pbr" === XU._materialFamily && (UU._built || UU._groups.get(XU)?.r)) {
        const XU = UU._runtimeBuilds ?? IU(UU),
          cU = zU.e(698).then((() => zU(64572))).then((XU => {
            let {
              rebuildScenePbrPipelines: zU
            } = XU;
            return UU._z ? void 0 : zU(UU, !0)
          })).catch((XU => {
            UU._runtimeBuilds?._x(XU)
          }));
        return XU.track(cU)
      }
      return (UU._runtimeBuilds ?? IU(UU)).queue(XU, cU).catch((() => {}))
    }

    function NU(UU, XU, zU) {
      return UU._z ? Promise.resolve(void 0) : (UU._runtimeBuilds ?? IU(UU)).exclusive(XU, zU)
    }

    function IU(UU) {
      const XU = {
          kp: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        zU = UU,
        DU = {
          queue: (zU, EU) => {
            const YU = (XU.generations.get(EU) ?? 0) + 1,
              NU = EU.material;
            XU.generations.set(EU, YU);
            const IU = XU.chains.get(EU),
              pU = [XU.tail, FU?.get(zU)].filter((UU => !!UU));
            let aU = () => {};
            const GU = new Promise((UU => {
              aU = UU
            }));
            XU.tail = GU, (FU ??= new WeakMap).set(zU, GU);
            const BU = (IU ? IU.catch((() => {})) : Promise.resolve()).then((() => Promise.all(pU))).then((() => async function(UU, XU, zU, FU, DU, EU) {
              if (!tU(UU, XU, zU, FU, DU, EU)) return;
              const YU = UU._meshDisposables.get(FU);
              YU && (UU._meshDisposables.delete(FU), QU(XU, FU, YU));
              const NU = zU._rebuildSingle,
                IU = oU?.get(zU)?.gUU.get(UU) ?? UU._groups.get(zU)?.r,
                pU = !!UU._groups.get(zU)?.r,
                aU = UU._disposables.length,
                GU = UU,
                BU = GU._pbrGeomContext;
              let ZU, RU;
              try {
                RU = await zU(UU, [FU]), ZU = GU._pbrGeomContext
              } catch (dU) {
                if (gU(UU, XU, FU, YU), kU(UU, XU), !tU(UU, XU, zU, FU, DU, EU)) return;
                throw dU
              } finally {
                zU._rebuildSingle = NU, "pbr" === zU._materialFamily && pU && (GU._pbrGeomContext = BU)
              }
              if (!tU(UU, XU, zU, FU, DU, EU)) return gU(UU, XU, FU, YU), void kU(UU, XU);
              for (let cU = UU._renderables.length - 1; cU >= 0; cU--) UU._renderables[cU].mesh === FU && UU._renderables.splice(cU, 1);
              if (YU) {
                for (const XU of YU) {
                  const zU = UU._disposables.indexOf(XU);
                  zU >= 0 && UU._disposables.splice(zU, 1);
                  const cU = XU.p;
                  if (cU) {
                    cU._disposed = !0;
                    const UU = cU._owner;
                    if (UU) {
                      const XU = UU.indexOf(cU);
                      XU >= 0 && UU.splice(XU, 1), cU._owner = void 0, 0 === UU.length && cU._onOwnerEmpty?.()
                    } else cU._onOwnerEmpty?.();
                    cU._onOwnerEmpty && (cU._onOwnerEmpty = void 0)
                  }
                }(0, cU.h)(UU.surface.engine, (() => {
                  for (const UU of YU) UU()
                }))
              }
              AU(XU, FU, YU), UU._renderables.push(...RU.renderables);
              const PU = UU._groups.get(zU);
              PU && (PU.o = [...(PU.o ?? []).filter((UU => UU.mesh !== FU)), ...RU.renderables]);
              RU.updater && UU._uniformUpdaters.push(RU.updater);
              pU && function(UU, XU) {
                const zU = new Set(UU._disposables.slice(0, XU));
                for (let cU = UU._disposables.length - 1; cU >= XU; cU--) zU.has(UU._disposables[cU]) && UU._disposables.splice(cU, 1)
              }(UU, aU);
              "pbr" === zU._materialFamily && pU && ZU && (GU._pbrMeshGeomContexts ??= new WeakMap).set(FU, ZU);
              (function(UU, XU, zU, cU, yU, QU) {
                let AU = oU?.get(zU);
                if (!AU) {
                  const UU = new WeakMap,
                    XU = new WeakMap,
                    cU = (cU, yU, QU, AU) => {
                      const FU = UU.get(cU)?.get(yU);
                      if (FU) return FU(cU, yU, QU, AU);
                      const oU = XU.get(cU) ?? cU._groups.get(zU)?.r;
                      if (oU) return oU(cU, yU, QU, AU);
                      throw new Error("Material group has not completed its initial build")
                    };
                  AU = {
                    gUU: XU,
                    dispatch: cU,
                    scenes: UU
                  }, (oU ??= new WeakMap).set(zU, AU)
                }
                let FU = AU.scenes.get(UU);
                FU || (FU = new WeakMap, AU.scenes.set(UU, FU));
                FU.set(cU, yU), AU.gUU.has(UU) || AU.gUU.set(UU, QU ?? yU);
                const DU = UU._groups.get(zU);
                DU && (DU.r = AU.dispatch);
                let EU = XU.installed.get(cU);
                EU || (EU = new Set, XU.installed.set(cU, EU));
                EU.add(zU), XU.installedMeshes.add(cU)
              })(UU, XU, zU, FU, RU.rebuildSingle, pU ? IU : RU.rebuildSingle), FU.material._csmGen = (FU.material._csmGen ?? 0) + 1;
              const WU = UU._groups.get(zU);
              WU && !pU && (WU.r = RU.rebuildSingle);
              UU._renderables.sort(yU), UU._renderableVersion++, UU._materialEpoch++
            }(UU, XU, zU, EU, NU, YU))).catch((cU => {
              throw tU(UU, XU, zU, EU, NU, YU) && (XU.error = cU instanceof Error ? cU : new Error("Runtime mesh build failed", {
                cause: cU
              })), cU
            })).finally((() => {
              aU(), XU.tail === GU && (XU.tail = null), FU?.get(zU) === GU && FU.delete(zU)
            })).finally((() => {
              XU.chains.get(EU) === BU && XU.chains.delete(EU)
            }));
            return XU.chains.set(EU, BU), DU.track(BU)
          },
          all: () => Promise.all(XU.active).then((() => {})),
          track: UU => {
            const zU = UU.finally((() => XU.active.delete(zU)));
            return XU.active.add(zU), Promise.all(XU.active).then((() => {}))
          },
          base: (XU, zU) => {
            const cU = oU?.get(XU);
            return cU && cU.gUU.set(UU, zU), cU?.dispatch ?? zU
          },
          get w() {
            return !!XU.tail
          },
          pendingDisposers: UU => XU.pendingDisposers.get(UU),
          holdPendingDisposers: (UU, zU) => QU(XU, UU, zU),
          releasePendingDisposers: (UU, zU) => AU(XU, UU, zU),
          reset: cU => {
            aU(UU, XU, cU), zU._pbrMeshGeomContexts?.delete(cU)
          },
          remove: cU => {
            XU.generations.set(cU, (XU.generations.get(cU) ?? 0) + 1), XU.chains.delete(cU), pU(UU, XU, cU), zU._pbrMeshGeomContexts?.delete(cU)
          },
          dropBase: XU => {
            const zU = oU?.get(XU);
            zU && (zU.gUU.delete(UU), zU.scenes.delete(UU))
          },
          wait: async UU => {
            const zU = new Set;
            for (const cU of UU) {
              const UU = XU.chains.get(cU);
              UU && zU.add(UU)
            }
            await Promise.all(zU)
          },
          _e: function() {
            let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (XU.error) {
              const zU = XU.error;
              throw UU && (XU.error = null), zU
            }
          },
          _x: UU => {
            XU.error = UU instanceof Error ? UU : new Error("Runtime mesh build failed", {
              cause: UU
            })
          },
          _d: () => XU.kp,
          exclusive: (UU, zU) => {
            const cU = [];
            XU.tail && cU.push(XU.tail);
            const yU = FU?.get(UU);
            yU && cU.push(yU);
            const QU = Promise.all(cU).then(zU),
              AU = QU.then((() => {}), (() => {}));
            return XU.tail = AU, (FU ??= new WeakMap).set(UU, AU), AU.then((() => {
              XU.tail === AU && (XU.tail = null), FU?.get(UU) === AU && FU.delete(UU)
            })), QU
          }
        };
      return UU._runtimeBuilds = DU, (UU._beforeRender ??= []).push((() => {
        DU._e()
      })), UU._disposables.push((() => {
        XU.kp = !0, XU.active.clear();
        for (const zU of XU.installedMeshes) aU(UU, XU, zU);
        for (const XU of UU._groups.keys()) oU?.get(XU)?.gUU.delete(UU);
        UU._runtimeBuilds = void 0, zU._pbrMeshGeomContexts = void 0
      })), DU
    }

    function pU(UU, XU, zU) {
      const cU = XU.installed.get(zU);
      if (cU) {
        for (const XU of cU) oU?.get(XU)?.scenes.get(UU)?.delete(zU);
        XU.installed.delete(zU), XU.installedMeshes.delete(zU)
      }
    }

    function aU(UU, XU, zU) {
      pU(UU, XU, zU)
    }

    function tU(UU, XU, zU, cU, yU, QU) {
      return !XU.kp && XU.generations.get(cU) === QU && UU.meshes.includes(cU) && cU.material === yU && yU._buildGroup === zU
    }

    function gU(UU, XU, zU, yU) {
      const QU = UU._meshDisposables.get(zU);
      if (QU && QU !== yU) {
        UU._meshDisposables.delete(zU);
        for (const UU of QU) UU()
      }
      if (yU)
        if (UU.meshes.includes(zU)) UU._meshDisposables.set(zU, yU);
        else if (XU.kp)
        for (const cU of yU) cU();
      else(0, cU.h)(UU.surface.engine, (() => {
        for (const UU of yU) UU()
      }));
      AU(XU, zU, yU)
    }

    function kU(UU, XU) {
      if (!XU.kp) return;
      const zU = UU._disposables.splice(0);
      for (const cU of zU) cU()
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);