export const id = 367;
export const ids = [367];
export const modules = {
  61920: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      A: () => YG,
      B: () => pG,
      C: () => VG,
      X: () => fG
    });
    var wG = ZG(42155),
      SG = (GG, bG) => GG.order - bG.order;

    function LG(GG, bG, ZG) {
      GG.pendingDisposers.set(bG, ZG)
    }

    function yG(GG, bG, ZG) {
      ZG && GG.pendingDisposers.get(bG) === ZG && GG.pendingDisposers.delete(bG)
    }
    var kG = null,
      UG = null;

    function YG(GG, bG, ZG, wG) {
      if (!bG || ZG.material !== bG) return wG ?? Promise.resolve();
      const SG = pG(GG, bG._buildGroup, ZG);
      return wG ? Promise.all([wG, SG]).then((() => {})) : SG
    }

    function VG(GG, bG, ZG) {
      let wG = ZG;
      for (const SG of bG) {
        const bG = Array.isArray(SG),
          ZG = bG ? SG[0] : SG;
        wG = YG(GG, bG ? SG[1] : ZG.material, ZG, wG)
      }
      return (wG ?? Promise.resolve()).catch((bG => {
        GG._runtimeBuilds?._x(bG)
      }))
    }

    function pG(GG, bG, wG) {
      if (GG._z || !GG.meshes.includes(wG)) return GG._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(GG, bG, ZG) {
          for (const [SG, LG] of GG._groups)
            if (SG !== bG) {
              const GG = LG.indexOf(ZG);
              GG >= 0 && LG.splice(GG, 1)
            } let wG = GG._groups.get(bG);
          wG || (wG = [], GG._groups.set(bG, wG));
          wG.includes(ZG) || wG.push(ZG)
        }(GG, bG, wG), "pbr" === bG._materialFamily && (GG._built || GG._groups.get(bG)?.r)) {
        const bG = GG._runtimeBuilds ?? QG(GG),
          wG = ZG.e(397).then((() => ZG(62457))).then((bG => {
            let {
              rebuildScenePbrPipelines: ZG
            } = bG;
            return GG._z ? void 0 : ZG(GG, !0)
          })).catch((bG => {
            GG._runtimeBuilds?._x(bG)
          }));
        return bG.track(wG)
      }
      return (GG._runtimeBuilds ?? QG(GG)).queue(bG, wG).catch((() => {}))
    }

    function fG(GG, bG, ZG) {
      return GG._z ? Promise.resolve(void 0) : (GG._runtimeBuilds ?? QG(GG)).exclusive(bG, ZG)
    }

    function QG(GG) {
      const bG = {
          pK: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ZG = GG,
        YG = {
          queue: (ZG, VG) => {
            const pG = (bG.generations.get(VG) ?? 0) + 1,
              fG = VG.material;
            bG.generations.set(VG, pG);
            const QG = bG.chains.get(VG),
              KG = [bG.tail, kG?.get(ZG)].filter((GG => !!GG));
            let hG = () => {};
            const zG = new Promise((GG => {
              hG = GG
            }));
            bG.tail = zG, (kG ??= new WeakMap).set(ZG, zG);
            const EG = (QG ? QG.catch((() => {})) : Promise.resolve()).then((() => Promise.all(KG))).then((() => async function(GG, bG, ZG, kG, YG, VG) {
              if (!dG(GG, bG, ZG, kG, YG, VG)) return;
              const pG = GG._meshDisposables.get(kG);
              pG && (GG._meshDisposables.delete(kG), LG(bG, kG, pG));
              const fG = ZG._rebuildSingle,
                QG = UG?.get(ZG)?.i5.get(GG) ?? GG._groups.get(ZG)?.r,
                KG = !!GG._groups.get(ZG)?.r,
                hG = GG._disposables.length,
                zG = GG,
                EG = zG._pbrGeomContext;
              let oG, XG;
              try {
                XG = await ZG(GG, [kG]), oG = zG._pbrGeomContext
              } catch (CG) {
                if (JG(GG, bG, kG, pG), rG(GG, bG), !dG(GG, bG, ZG, kG, YG, VG)) return;
                throw CG
              } finally {
                ZG._rebuildSingle = fG, "pbr" === ZG._materialFamily && KG && (zG._pbrGeomContext = EG)
              }
              if (!dG(GG, bG, ZG, kG, YG, VG)) return JG(GG, bG, kG, pG), void rG(GG, bG);
              for (let wG = GG._renderables.length - 1; wG >= 0; wG--) GG._renderables[wG].mesh === kG && GG._renderables.splice(wG, 1);
              if (pG) {
                for (const bG of pG) {
                  const ZG = GG._disposables.indexOf(bG);
                  ZG >= 0 && GG._disposables.splice(ZG, 1);
                  const wG = bG.p;
                  if (wG) {
                    wG._disposed = !0;
                    const GG = wG._owner;
                    if (GG) {
                      const bG = GG.indexOf(wG);
                      bG >= 0 && GG.splice(bG, 1), wG._owner = void 0, 0 === GG.length && wG._onOwnerEmpty?.()
                    } else wG._onOwnerEmpty?.();
                    wG._onOwnerEmpty && (wG._onOwnerEmpty = void 0)
                  }
                }(0, wG.d)(GG.surface.engine, (() => {
                  for (const GG of pG) GG()
                }))
              }
              yG(bG, kG, pG), GG._renderables.push(...XG.renderables);
              const uG = GG._groups.get(ZG);
              uG && (uG.o = [...(uG.o ?? []).filter((GG => GG.mesh !== kG)), ...XG.renderables]);
              XG.updater && GG._uniformUpdaters.push(XG.updater);
              KG && function(GG, bG) {
                const ZG = new Set(GG._disposables.slice(0, bG));
                for (let wG = GG._disposables.length - 1; wG >= bG; wG--) ZG.has(GG._disposables[wG]) && GG._disposables.splice(wG, 1)
              }(GG, hG);
              "pbr" === ZG._materialFamily && KG && oG && (zG._pbrMeshGeomContexts ??= new WeakMap).set(kG, oG);
              (function(GG, bG, ZG, wG, SG, LG) {
                let yG = UG?.get(ZG);
                if (!yG) {
                  const GG = new WeakMap,
                    bG = new WeakMap,
                    wG = (wG, SG, LG, yG) => {
                      const kG = GG.get(wG)?.get(SG);
                      if (kG) return kG(wG, SG, LG, yG);
                      const UG = bG.get(wG) ?? wG._groups.get(ZG)?.r;
                      if (UG) return UG(wG, SG, LG, yG);
                      throw new Error("Material group has not completed its initial build")
                    };
                  yG = {
                    i5: bG,
                    dispatch: wG,
                    scenes: GG
                  }, (UG ??= new WeakMap).set(ZG, yG)
                }
                let kG = yG.scenes.get(GG);
                kG || (kG = new WeakMap, yG.scenes.set(GG, kG));
                kG.set(wG, SG), yG.i5.has(GG) || yG.i5.set(GG, LG ?? SG);
                const YG = GG._groups.get(ZG);
                YG && (YG.r = yG.dispatch);
                let VG = bG.installed.get(wG);
                VG || (VG = new Set, bG.installed.set(wG, VG));
                VG.add(ZG), bG.installedMeshes.add(wG)
              })(GG, bG, ZG, kG, XG.rebuildSingle, KG ? QG : XG.rebuildSingle), kG.material._csmGen = (kG.material._csmGen ?? 0) + 1;
              const iG = GG._groups.get(ZG);
              iG && !KG && (iG.r = XG.rebuildSingle);
              GG._renderables.sort(SG), GG._renderableVersion++, GG._materialEpoch++
            }(GG, bG, ZG, VG, fG, pG))).catch((wG => {
              throw dG(GG, bG, ZG, VG, fG, pG) && (bG.error = wG instanceof Error ? wG : new Error("Runtime mesh build failed", {
                cause: wG
              })), wG
            })).finally((() => {
              hG(), bG.tail === zG && (bG.tail = null), kG?.get(ZG) === zG && kG.delete(ZG)
            })).finally((() => {
              bG.chains.get(VG) === EG && bG.chains.delete(VG)
            }));
            return bG.chains.set(VG, EG), YG.track(EG)
          },
          all: () => Promise.all(bG.active).then((() => {})),
          track: GG => {
            const ZG = GG.finally((() => bG.active.delete(ZG)));
            return bG.active.add(ZG), Promise.all(bG.active).then((() => {}))
          },
          base: (bG, ZG) => {
            const wG = UG?.get(bG);
            return wG && wG.i5.set(GG, ZG), wG?.dispatch ?? ZG
          },
          get w() {
            return !!bG.tail
          },
          pendingDisposers: GG => bG.pendingDisposers.get(GG),
          holdPendingDisposers: (GG, ZG) => LG(bG, GG, ZG),
          releasePendingDisposers: (GG, ZG) => yG(bG, GG, ZG),
          reset: wG => {
            hG(GG, bG, wG), ZG._pbrMeshGeomContexts?.delete(wG)
          },
          remove: wG => {
            bG.generations.set(wG, (bG.generations.get(wG) ?? 0) + 1), bG.chains.delete(wG), KG(GG, bG, wG), ZG._pbrMeshGeomContexts?.delete(wG)
          },
          dropBase: bG => {
            const ZG = UG?.get(bG);
            ZG && (ZG.i5.delete(GG), ZG.scenes.delete(GG))
          },
          wait: async GG => {
            const ZG = new Set;
            for (const wG of GG) {
              const GG = bG.chains.get(wG);
              GG && ZG.add(GG)
            }
            await Promise.all(ZG)
          },
          _e: function() {
            let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (bG.error) {
              const ZG = bG.error;
              throw GG && (bG.error = null), ZG
            }
          },
          _x: GG => {
            bG.error = GG instanceof Error ? GG : new Error("Runtime mesh build failed", {
              cause: GG
            })
          },
          _d: () => bG.pK,
          exclusive: (GG, ZG) => {
            const wG = [];
            bG.tail && wG.push(bG.tail);
            const SG = kG?.get(GG);
            SG && wG.push(SG);
            const LG = Promise.all(wG).then(ZG),
              yG = LG.then((() => {}), (() => {}));
            return bG.tail = yG, (kG ??= new WeakMap).set(GG, yG), yG.then((() => {
              bG.tail === yG && (bG.tail = null), kG?.get(GG) === yG && kG.delete(GG)
            })), LG
          }
        };
      return GG._runtimeBuilds = YG, (GG._beforeRender ??= []).push((() => {
        YG._e()
      })), GG._disposables.push((() => {
        bG.pK = !0, bG.active.clear();
        for (const ZG of bG.installedMeshes) hG(GG, bG, ZG);
        for (const bG of GG._groups.keys()) UG?.get(bG)?.i5.delete(GG);
        GG._runtimeBuilds = void 0, ZG._pbrMeshGeomContexts = void 0
      })), YG
    }

    function KG(GG, bG, ZG) {
      const wG = bG.installed.get(ZG);
      if (wG) {
        for (const bG of wG) UG?.get(bG)?.scenes.get(GG)?.delete(ZG);
        bG.installed.delete(ZG), bG.installedMeshes.delete(ZG)
      }
    }

    function hG(GG, bG, ZG) {
      KG(GG, bG, ZG)
    }

    function dG(GG, bG, ZG, wG, SG, LG) {
      return !bG.pK && bG.generations.get(wG) === LG && GG.meshes.includes(wG) && wG.material === SG && SG._buildGroup === ZG
    }

    function JG(GG, bG, ZG, SG) {
      const LG = GG._meshDisposables.get(ZG);
      if (LG && LG !== SG) {
        GG._meshDisposables.delete(ZG);
        for (const GG of LG) GG()
      }
      if (SG)
        if (GG.meshes.includes(ZG)) GG._meshDisposables.set(ZG, SG);
        else if (bG.pK)
        for (const wG of SG) wG();
      else(0, wG.d)(GG.surface.engine, (() => {
        for (const GG of SG) GG()
      }));
      yG(bG, ZG, SG)
    }

    function rG(GG, bG) {
      if (!bG.pK) return;
      const ZG = GG._disposables.splice(0);
      for (const wG of ZG) wG()
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);