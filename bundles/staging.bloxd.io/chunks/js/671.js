export const id = 671;
export const ids = [671];
export const modules = {
  64396: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      A: () => nV,
      B: () => ZV,
      C: () => wV,
      X: () => vV
    });
    var JV = xV(44615),
      YV = (VV, eV) => VV.order - eV.order;

    function UV(VV, eV, xV) {
      VV.pendingDisposers.set(eV, xV)
    }

    function yV(VV, eV, xV) {
      xV && VV.pendingDisposers.get(eV) === xV && VV.pendingDisposers.delete(eV)
    }
    var pV = null,
      QV = null;

    function nV(VV, eV, xV, JV) {
      if (!eV || xV.material !== eV) return JV ?? Promise.resolve();
      const YV = ZV(VV, eV._buildGroup, xV);
      return JV ? Promise.all([JV, YV]).then((() => {})) : YV
    }

    function wV(VV, eV, xV) {
      let JV = xV;
      for (const YV of eV) {
        const eV = Array.isArray(YV),
          xV = eV ? YV[0] : YV;
        JV = nV(VV, eV ? YV[1] : xV.material, xV, JV)
      }
      return (JV ?? Promise.resolve()).catch((eV => {
        VV._runtimeBuilds?._x(eV)
      }))
    }

    function ZV(VV, eV, JV) {
      if (VV._z || !VV.meshes.includes(JV)) return VV._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(VV, eV, xV) {
          for (const [YV, UV] of VV._groups)
            if (YV !== eV) {
              const VV = UV.indexOf(xV);
              VV >= 0 && UV.splice(VV, 1)
            } let JV = VV._groups.get(eV);
          JV || (JV = [], VV._groups.set(eV, JV));
          JV.includes(xV) || JV.push(xV)
        }(VV, eV, JV), "pbr" === eV._materialFamily && (VV._built || VV._groups.get(eV)?.r)) {
        const eV = VV._runtimeBuilds ?? rV(VV),
          JV = xV.e(701).then((() => xV(64900))).then((eV => {
            let {
              rebuildScenePbrPipelines: xV
            } = eV;
            return VV._z ? void 0 : xV(VV, !0)
          })).catch((eV => {
            VV._runtimeBuilds?._x(eV)
          }));
        return eV.track(JV)
      }
      return (VV._runtimeBuilds ?? rV(VV)).queue(eV, JV).catch((() => {}))
    }

    function vV(VV, eV, xV) {
      return VV._z ? Promise.resolve(void 0) : (VV._runtimeBuilds ?? rV(VV)).exclusive(eV, xV)
    }

    function rV(VV) {
      const eV = {
          ik: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        xV = VV,
        nV = {
          queue: (xV, wV) => {
            const ZV = (eV.generations.get(wV) ?? 0) + 1,
              vV = wV.material;
            eV.generations.set(wV, ZV);
            const rV = eV.chains.get(wV),
              kV = [eV.tail, pV?.get(xV)].filter((VV => !!VV));
            let bV = () => {};
            const qV = new Promise((VV => {
              bV = VV
            }));
            eV.tail = qV, (pV ??= new WeakMap).set(xV, qV);
            const tV = (rV ? rV.catch((() => {})) : Promise.resolve()).then((() => Promise.all(kV))).then((() => async function(VV, eV, xV, pV, nV, wV) {
              if (!EV(VV, eV, xV, pV, nV, wV)) return;
              const ZV = VV._meshDisposables.get(pV);
              ZV && (VV._meshDisposables.delete(pV), UV(eV, pV, ZV));
              const vV = xV._rebuildSingle,
                rV = QV?.get(xV)?.IVV.get(VV) ?? VV._groups.get(xV)?.r,
                kV = !!VV._groups.get(xV)?.r,
                bV = VV._disposables.length,
                qV = VV,
                tV = qV._pbrGeomContext;
              let FV, TV;
              try {
                TV = await xV(VV, [pV]), FV = qV._pbrGeomContext
              } catch (NV) {
                if (BV(VV, eV, pV, ZV), jV(VV, eV), !EV(VV, eV, xV, pV, nV, wV)) return;
                throw NV
              } finally {
                xV._rebuildSingle = vV, "pbr" === xV._materialFamily && kV && (qV._pbrGeomContext = tV)
              }
              if (!EV(VV, eV, xV, pV, nV, wV)) return BV(VV, eV, pV, ZV), void jV(VV, eV);
              for (let JV = VV._renderables.length - 1; JV >= 0; JV--) VV._renderables[JV].mesh === pV && VV._renderables.splice(JV, 1);
              if (ZV) {
                for (const eV of ZV) {
                  const xV = VV._disposables.indexOf(eV);
                  xV >= 0 && VV._disposables.splice(xV, 1);
                  const JV = eV.p;
                  if (JV) {
                    JV._disposed = !0;
                    const VV = JV._owner;
                    if (VV) {
                      const eV = VV.indexOf(JV);
                      eV >= 0 && VV.splice(eV, 1), JV._owner = void 0, 0 === VV.length && JV._onOwnerEmpty?.()
                    } else JV._onOwnerEmpty?.();
                    JV._onOwnerEmpty && (JV._onOwnerEmpty = void 0)
                  }
                }(0, JV.e)(VV.surface.engine, (() => {
                  for (const VV of ZV) VV()
                }))
              }
              yV(eV, pV, ZV), VV._renderables.push(...TV.renderables);
              const PV = VV._groups.get(xV);
              PV && (PV.o = [...(PV.o ?? []).filter((VV => VV.mesh !== pV)), ...TV.renderables]);
              TV.updater && VV._uniformUpdaters.push(TV.updater);
              kV && function(VV, eV) {
                const xV = new Set(VV._disposables.slice(0, eV));
                for (let JV = VV._disposables.length - 1; JV >= eV; JV--) xV.has(VV._disposables[JV]) && VV._disposables.splice(JV, 1)
              }(VV, bV);
              "pbr" === xV._materialFamily && kV && FV && (qV._pbrMeshGeomContexts ??= new WeakMap).set(pV, FV);
              (function(VV, eV, xV, JV, YV, UV) {
                let yV = QV?.get(xV);
                if (!yV) {
                  const VV = new WeakMap,
                    eV = new WeakMap,
                    JV = (JV, YV, UV, yV) => {
                      const pV = VV.get(JV)?.get(YV);
                      if (pV) return pV(JV, YV, UV, yV);
                      const QV = eV.get(JV) ?? JV._groups.get(xV)?.r;
                      if (QV) return QV(JV, YV, UV, yV);
                      throw new Error("Material group has not completed its initial build")
                    };
                  yV = {
                    IVV: eV,
                    dispatch: JV,
                    scenes: VV
                  }, (QV ??= new WeakMap).set(xV, yV)
                }
                let pV = yV.scenes.get(VV);
                pV || (pV = new WeakMap, yV.scenes.set(VV, pV));
                pV.set(JV, YV), yV.IVV.has(VV) || yV.IVV.set(VV, UV ?? YV);
                const nV = VV._groups.get(xV);
                nV && (nV.r = yV.dispatch);
                let wV = eV.installed.get(JV);
                wV || (wV = new Set, eV.installed.set(JV, wV));
                wV.add(xV), eV.installedMeshes.add(JV)
              })(VV, eV, xV, pV, TV.rebuildSingle, kV ? rV : TV.rebuildSingle), pV.material._csmGen = (pV.material._csmGen ?? 0) + 1;
              const AV = VV._groups.get(xV);
              AV && !kV && (AV.r = TV.rebuildSingle);
              VV._renderables.sort(YV), VV._renderableVersion++, VV._materialEpoch++
            }(VV, eV, xV, wV, vV, ZV))).catch((JV => {
              throw EV(VV, eV, xV, wV, vV, ZV) && (eV.error = JV instanceof Error ? JV : new Error("Runtime mesh build failed", {
                cause: JV
              })), JV
            })).finally((() => {
              bV(), eV.tail === qV && (eV.tail = null), pV?.get(xV) === qV && pV.delete(xV)
            })).finally((() => {
              eV.chains.get(wV) === tV && eV.chains.delete(wV)
            }));
            return eV.chains.set(wV, tV), nV.track(tV)
          },
          all: () => Promise.all(eV.active).then((() => {})),
          track: VV => {
            const xV = VV.finally((() => eV.active.delete(xV)));
            return eV.active.add(xV), Promise.all(eV.active).then((() => {}))
          },
          base: (eV, xV) => {
            const JV = QV?.get(eV);
            return JV && JV.IVV.set(VV, xV), JV?.dispatch ?? xV
          },
          get w() {
            return !!eV.tail
          },
          pendingDisposers: VV => eV.pendingDisposers.get(VV),
          holdPendingDisposers: (VV, xV) => UV(eV, VV, xV),
          releasePendingDisposers: (VV, xV) => yV(eV, VV, xV),
          reset: JV => {
            bV(VV, eV, JV), xV._pbrMeshGeomContexts?.delete(JV)
          },
          remove: JV => {
            eV.generations.set(JV, (eV.generations.get(JV) ?? 0) + 1), eV.chains.delete(JV), kV(VV, eV, JV), xV._pbrMeshGeomContexts?.delete(JV)
          },
          dropBase: eV => {
            const xV = QV?.get(eV);
            xV && (xV.IVV.delete(VV), xV.scenes.delete(VV))
          },
          wait: async VV => {
            const xV = new Set;
            for (const JV of VV) {
              const VV = eV.chains.get(JV);
              VV && xV.add(VV)
            }
            await Promise.all(xV)
          },
          _e: function() {
            let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (eV.error) {
              const xV = eV.error;
              throw VV && (eV.error = null), xV
            }
          },
          _x: VV => {
            eV.error = VV instanceof Error ? VV : new Error("Runtime mesh build failed", {
              cause: VV
            })
          },
          _d: () => eV.ik,
          exclusive: (VV, xV) => {
            const JV = [];
            eV.tail && JV.push(eV.tail);
            const YV = pV?.get(VV);
            YV && JV.push(YV);
            const UV = Promise.all(JV).then(xV),
              yV = UV.then((() => {}), (() => {}));
            return eV.tail = yV, (pV ??= new WeakMap).set(VV, yV), yV.then((() => {
              eV.tail === yV && (eV.tail = null), pV?.get(VV) === yV && pV.delete(VV)
            })), UV
          }
        };
      return VV._runtimeBuilds = nV, (VV._beforeRender ??= []).push((() => {
        nV._e()
      })), VV._disposables.push((() => {
        eV.ik = !0, eV.active.clear();
        for (const xV of eV.installedMeshes) bV(VV, eV, xV);
        for (const eV of VV._groups.keys()) QV?.get(eV)?.IVV.delete(VV);
        VV._runtimeBuilds = void 0, xV._pbrMeshGeomContexts = void 0
      })), nV
    }

    function kV(VV, eV, xV) {
      const JV = eV.installed.get(xV);
      if (JV) {
        for (const eV of JV) QV?.get(eV)?.scenes.get(VV)?.delete(xV);
        eV.installed.delete(xV), eV.installedMeshes.delete(xV)
      }
    }

    function bV(VV, eV, xV) {
      kV(VV, eV, xV)
    }

    function EV(VV, eV, xV, JV, YV, UV) {
      return !eV.ik && eV.generations.get(JV) === UV && VV.meshes.includes(JV) && JV.material === YV && YV._buildGroup === xV
    }

    function BV(VV, eV, xV, YV) {
      const UV = VV._meshDisposables.get(xV);
      if (UV && UV !== YV) {
        VV._meshDisposables.delete(xV);
        for (const VV of UV) VV()
      }
      if (YV)
        if (VV.meshes.includes(xV)) VV._meshDisposables.set(xV, YV);
        else if (eV.ik)
        for (const JV of YV) JV();
      else(0, JV.e)(VV.surface.engine, (() => {
        for (const VV of YV) VV()
      }));
      yV(eV, xV, YV)
    }

    function jV(VV, eV) {
      if (!eV.ik) return;
      const xV = VV._disposables.splice(0);
      for (const JV of xV) JV()
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);