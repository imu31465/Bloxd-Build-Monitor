export const id = 345;
export const ids = [345];
export const modules = {
  59514: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      A: () => jJ,
      B: () => hJ,
      C: () => YJ,
      X: () => DJ
    });
    var FJ = ZJ(40448),
      UJ = (JJ, cJ) => JJ.order - cJ.order;

    function eJ(JJ, cJ, ZJ) {
      JJ.pendingDisposers.set(cJ, ZJ)
    }

    function XJ(JJ, cJ, ZJ) {
      ZJ && JJ.pendingDisposers.get(cJ) === ZJ && JJ.pendingDisposers.delete(cJ)
    }
    var AJ = null,
      qJ = null;

    function jJ(JJ, cJ, ZJ, FJ) {
      if (!cJ || ZJ.material !== cJ) return FJ ?? Promise.resolve();
      const UJ = hJ(JJ, cJ._buildGroup, ZJ);
      return FJ ? Promise.all([FJ, UJ]).then((() => {})) : UJ
    }

    function YJ(JJ, cJ, ZJ) {
      let FJ = ZJ;
      for (const UJ of cJ) {
        const cJ = Array.isArray(UJ),
          ZJ = cJ ? UJ[0] : UJ;
        FJ = jJ(JJ, cJ ? UJ[1] : ZJ.material, ZJ, FJ)
      }
      return (FJ ?? Promise.resolve()).catch((cJ => {
        JJ._runtimeBuilds?._x(cJ)
      }))
    }

    function hJ(JJ, cJ, FJ) {
      if (JJ._z || !JJ.meshes.includes(FJ)) return JJ._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(JJ, cJ, ZJ) {
          for (const [UJ, eJ] of JJ._groups)
            if (UJ !== cJ) {
              const JJ = eJ.indexOf(ZJ);
              JJ >= 0 && eJ.splice(JJ, 1)
            } let FJ = JJ._groups.get(cJ);
          FJ || (FJ = [], JJ._groups.set(cJ, FJ));
          FJ.includes(ZJ) || FJ.push(ZJ)
        }(JJ, cJ, FJ), "pbr" === cJ._materialFamily && (JJ._built || JJ._groups.get(cJ)?.r)) {
        const cJ = JJ._runtimeBuilds ?? sJ(JJ),
          FJ = ZJ.e(375).then((() => ZJ(60154))).then((cJ => {
            let {
              rebuildScenePbrPipelines: ZJ
            } = cJ;
            return JJ._z ? void 0 : ZJ(JJ, !0)
          })).catch((cJ => {
            JJ._runtimeBuilds?._x(cJ)
          }));
        return cJ.track(FJ)
      }
      return (JJ._runtimeBuilds ?? sJ(JJ)).queue(cJ, FJ).catch((() => {}))
    }

    function DJ(JJ, cJ, ZJ) {
      return JJ._z ? Promise.resolve(void 0) : (JJ._runtimeBuilds ?? sJ(JJ)).exclusive(cJ, ZJ)
    }

    function sJ(JJ) {
      const cJ = {
          xn: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ZJ = JJ,
        jJ = {
          queue: (ZJ, YJ) => {
            const hJ = (cJ.generations.get(YJ) ?? 0) + 1,
              DJ = YJ.material;
            cJ.generations.set(YJ, hJ);
            const sJ = cJ.chains.get(YJ),
              nJ = [cJ.tail, AJ?.get(ZJ)].filter((JJ => !!JJ));
            let GJ = () => {};
            const vJ = new Promise((JJ => {
              GJ = JJ
            }));
            cJ.tail = vJ, (AJ ??= new WeakMap).set(ZJ, vJ);
            const mJ = (sJ ? sJ.catch((() => {})) : Promise.resolve()).then((() => Promise.all(nJ))).then((() => async function(JJ, cJ, ZJ, AJ, jJ, YJ) {
              if (!fJ(JJ, cJ, ZJ, AJ, jJ, YJ)) return;
              const hJ = JJ._meshDisposables.get(AJ);
              hJ && (JJ._meshDisposables.delete(AJ), eJ(cJ, AJ, hJ));
              const DJ = ZJ._rebuildSingle,
                sJ = qJ?.get(ZJ)?.o3.get(JJ) ?? JJ._groups.get(ZJ)?.r,
                nJ = !!JJ._groups.get(ZJ)?.r,
                GJ = JJ._disposables.length,
                vJ = JJ,
                mJ = vJ._pbrGeomContext;
              let QJ, EJ;
              try {
                EJ = await ZJ(JJ, [AJ]), QJ = vJ._pbrGeomContext
              } catch (yJ) {
                if (xJ(JJ, cJ, AJ, hJ), rJ(JJ, cJ), !fJ(JJ, cJ, ZJ, AJ, jJ, YJ)) return;
                throw yJ
              } finally {
                ZJ._rebuildSingle = DJ, "pbr" === ZJ._materialFamily && nJ && (vJ._pbrGeomContext = mJ)
              }
              if (!fJ(JJ, cJ, ZJ, AJ, jJ, YJ)) return xJ(JJ, cJ, AJ, hJ), void rJ(JJ, cJ);
              for (let FJ = JJ._renderables.length - 1; FJ >= 0; FJ--) JJ._renderables[FJ].mesh === AJ && JJ._renderables.splice(FJ, 1);
              if (hJ) {
                for (const cJ of hJ) {
                  const ZJ = JJ._disposables.indexOf(cJ);
                  ZJ >= 0 && JJ._disposables.splice(ZJ, 1);
                  const FJ = cJ.p;
                  if (FJ) {
                    FJ._disposed = !0;
                    const JJ = FJ._owner;
                    if (JJ) {
                      const cJ = JJ.indexOf(FJ);
                      cJ >= 0 && JJ.splice(cJ, 1), FJ._owner = void 0, 0 === JJ.length && FJ._onOwnerEmpty?.()
                    } else FJ._onOwnerEmpty?.();
                    FJ._onOwnerEmpty && (FJ._onOwnerEmpty = void 0)
                  }
                }(0, FJ.b)(JJ.surface.engine, (() => {
                  for (const JJ of hJ) JJ()
                }))
              }
              XJ(cJ, AJ, hJ), JJ._renderables.push(...EJ.renderables);
              const VJ = JJ._groups.get(ZJ);
              VJ && (VJ.o = [...(VJ.o ?? []).filter((JJ => JJ.mesh !== AJ)), ...EJ.renderables]);
              EJ.updater && JJ._uniformUpdaters.push(EJ.updater);
              nJ && function(JJ, cJ) {
                const ZJ = new Set(JJ._disposables.slice(0, cJ));
                for (let FJ = JJ._disposables.length - 1; FJ >= cJ; FJ--) ZJ.has(JJ._disposables[FJ]) && JJ._disposables.splice(FJ, 1)
              }(JJ, GJ);
              "pbr" === ZJ._materialFamily && nJ && QJ && (vJ._pbrMeshGeomContexts ??= new WeakMap).set(AJ, QJ);
              (function(JJ, cJ, ZJ, FJ, UJ, eJ) {
                let XJ = qJ?.get(ZJ);
                if (!XJ) {
                  const JJ = new WeakMap,
                    cJ = new WeakMap,
                    FJ = (FJ, UJ, eJ, XJ) => {
                      const AJ = JJ.get(FJ)?.get(UJ);
                      if (AJ) return AJ(FJ, UJ, eJ, XJ);
                      const qJ = cJ.get(FJ) ?? FJ._groups.get(ZJ)?.r;
                      if (qJ) return qJ(FJ, UJ, eJ, XJ);
                      throw new Error("Material group has not completed its initial build")
                    };
                  XJ = {
                    o3: cJ,
                    dispatch: FJ,
                    scenes: JJ
                  }, (qJ ??= new WeakMap).set(ZJ, XJ)
                }
                let AJ = XJ.scenes.get(JJ);
                AJ || (AJ = new WeakMap, XJ.scenes.set(JJ, AJ));
                AJ.set(FJ, UJ), XJ.o3.has(JJ) || XJ.o3.set(JJ, eJ ?? UJ);
                const jJ = JJ._groups.get(ZJ);
                jJ && (jJ.r = XJ.dispatch);
                let YJ = cJ.installed.get(FJ);
                YJ || (YJ = new Set, cJ.installed.set(FJ, YJ));
                YJ.add(ZJ), cJ.installedMeshes.add(FJ)
              })(JJ, cJ, ZJ, AJ, EJ.rebuildSingle, nJ ? sJ : EJ.rebuildSingle), AJ.material._csmGen = (AJ.material._csmGen ?? 0) + 1;
              const KJ = JJ._groups.get(ZJ);
              KJ && !nJ && (KJ.r = EJ.rebuildSingle);
              JJ._renderables.sort(UJ), JJ._renderableVersion++, JJ._materialEpoch++
            }(JJ, cJ, ZJ, YJ, DJ, hJ))).catch((FJ => {
              throw fJ(JJ, cJ, ZJ, YJ, DJ, hJ) && (cJ.error = FJ instanceof Error ? FJ : new Error("Runtime mesh build failed", {
                cause: FJ
              })), FJ
            })).finally((() => {
              GJ(), cJ.tail === vJ && (cJ.tail = null), AJ?.get(ZJ) === vJ && AJ.delete(ZJ)
            })).finally((() => {
              cJ.chains.get(YJ) === mJ && cJ.chains.delete(YJ)
            }));
            return cJ.chains.set(YJ, mJ), jJ.track(mJ)
          },
          all: () => Promise.all(cJ.active).then((() => {})),
          track: JJ => {
            const ZJ = JJ.finally((() => cJ.active.delete(ZJ)));
            return cJ.active.add(ZJ), Promise.all(cJ.active).then((() => {}))
          },
          base: (cJ, ZJ) => {
            const FJ = qJ?.get(cJ);
            return FJ && FJ.o3.set(JJ, ZJ), FJ?.dispatch ?? ZJ
          },
          get w() {
            return !!cJ.tail
          },
          pendingDisposers: JJ => cJ.pendingDisposers.get(JJ),
          holdPendingDisposers: (JJ, ZJ) => eJ(cJ, JJ, ZJ),
          releasePendingDisposers: (JJ, ZJ) => XJ(cJ, JJ, ZJ),
          reset: FJ => {
            GJ(JJ, cJ, FJ), ZJ._pbrMeshGeomContexts?.delete(FJ)
          },
          remove: FJ => {
            cJ.generations.set(FJ, (cJ.generations.get(FJ) ?? 0) + 1), cJ.chains.delete(FJ), nJ(JJ, cJ, FJ), ZJ._pbrMeshGeomContexts?.delete(FJ)
          },
          dropBase: cJ => {
            const ZJ = qJ?.get(cJ);
            ZJ && (ZJ.o3.delete(JJ), ZJ.scenes.delete(JJ))
          },
          wait: async JJ => {
            const ZJ = new Set;
            for (const FJ of JJ) {
              const JJ = cJ.chains.get(FJ);
              JJ && ZJ.add(JJ)
            }
            await Promise.all(ZJ)
          },
          _e: function() {
            let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (cJ.error) {
              const ZJ = cJ.error;
              throw JJ && (cJ.error = null), ZJ
            }
          },
          _x: JJ => {
            cJ.error = JJ instanceof Error ? JJ : new Error("Runtime mesh build failed", {
              cause: JJ
            })
          },
          _d: () => cJ.xn,
          exclusive: (JJ, ZJ) => {
            const FJ = [];
            cJ.tail && FJ.push(cJ.tail);
            const UJ = AJ?.get(JJ);
            UJ && FJ.push(UJ);
            const eJ = Promise.all(FJ).then(ZJ),
              XJ = eJ.then((() => {}), (() => {}));
            return cJ.tail = XJ, (AJ ??= new WeakMap).set(JJ, XJ), XJ.then((() => {
              cJ.tail === XJ && (cJ.tail = null), AJ?.get(JJ) === XJ && AJ.delete(JJ)
            })), eJ
          }
        };
      return JJ._runtimeBuilds = jJ, (JJ._beforeRender ??= []).push((() => {
        jJ._e()
      })), JJ._disposables.push((() => {
        cJ.xn = !0, cJ.active.clear();
        for (const ZJ of cJ.installedMeshes) GJ(JJ, cJ, ZJ);
        for (const cJ of JJ._groups.keys()) qJ?.get(cJ)?.o3.delete(JJ);
        JJ._runtimeBuilds = void 0, ZJ._pbrMeshGeomContexts = void 0
      })), jJ
    }

    function nJ(JJ, cJ, ZJ) {
      const FJ = cJ.installed.get(ZJ);
      if (FJ) {
        for (const cJ of FJ) qJ?.get(cJ)?.scenes.get(JJ)?.delete(ZJ);
        cJ.installed.delete(ZJ), cJ.installedMeshes.delete(ZJ)
      }
    }

    function GJ(JJ, cJ, ZJ) {
      nJ(JJ, cJ, ZJ)
    }

    function fJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      return !cJ.xn && cJ.generations.get(FJ) === eJ && JJ.meshes.includes(FJ) && FJ.material === UJ && UJ._buildGroup === ZJ
    }

    function xJ(JJ, cJ, ZJ, UJ) {
      const eJ = JJ._meshDisposables.get(ZJ);
      if (eJ && eJ !== UJ) {
        JJ._meshDisposables.delete(ZJ);
        for (const JJ of eJ) JJ()
      }
      if (UJ)
        if (JJ.meshes.includes(ZJ)) JJ._meshDisposables.set(ZJ, UJ);
        else if (cJ.xn)
        for (const FJ of UJ) FJ();
      else(0, FJ.b)(JJ.surface.engine, (() => {
        for (const JJ of UJ) JJ()
      }));
      XJ(cJ, ZJ, UJ)
    }

    function rJ(JJ, cJ) {
      if (!cJ.xn) return;
      const ZJ = JJ._disposables.splice(0);
      for (const FJ of ZJ) FJ()
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);