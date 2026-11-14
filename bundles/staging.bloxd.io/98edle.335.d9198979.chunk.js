export const id = 335;
export const ids = [335];
export const modules = {
  58697: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      A: () => NW,
      B: () => BW,
      C: () => eW,
      X: () => tR
    });
    var wW = MW(39196),
      CW = (WW, RW) => WW.order - RW.order;

    function zR(WW, RW, MW) {
      WW.pendingDisposers.set(RW, MW)
    }

    function AW(WW, RW, MW) {
      MW && WW.pendingDisposers.get(RW) === MW && WW.pendingDisposers.delete(RW)
    }
    var bR = null,
      yR = null;

    function NW(WW, RW, MW, wW) {
      if (!RW || MW.material !== RW) return wW ?? Promise.resolve();
      const CW = BW(WW, RW._buildGroup, MW);
      return wW ? Promise.all([wW, CW]).then((() => {})) : CW
    }

    function eW(WW, RW, MW) {
      let wW = MW;
      for (const CW of RW) {
        const RW = Array.isArray(CW),
          MW = RW ? CW[0] : CW;
        wW = NW(WW, RW ? CW[1] : MW.material, MW, wW)
      }
      return (wW ?? Promise.resolve()).catch((RW => {
        WW._runtimeBuilds?._x(RW)
      }))
    }

    function BW(WW, RW, wW) {
      if (WW._z || !WW.meshes.includes(wW)) return WW._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(WW, RW, MW) {
          for (const [CW, zR] of WW._groups)
            if (CW !== RW) {
              const WW = zR.indexOf(MW);
              WW >= 0 && zR.splice(WW, 1)
            } let wW = WW._groups.get(RW);
          wW || (wW = [], WW._groups.set(RW, wW));
          wW.includes(MW) || wW.push(MW)
        }(WW, RW, wW), "pbr" === RW._materialFamily && (WW._built || WW._groups.get(RW)?.r)) {
        const RW = WW._runtimeBuilds ?? TW(WW),
          wW = MW.e(365).then((() => MW(59285))).then((RW => {
            let {
              rebuildScenePbrPipelines: MW
            } = RW;
            return WW._z ? void 0 : MW(WW, !0)
          })).catch((RW => {
            WW._runtimeBuilds?._x(RW)
          }));
        return RW.track(wW)
      }
      return (WW._runtimeBuilds ?? TW(WW)).queue(RW, wW).catch((() => {}))
    }

    function tR(WW, RW, MW) {
      return WW._z ? Promise.resolve(void 0) : (WW._runtimeBuilds ?? TW(WW)).exclusive(RW, MW)
    }

    function TW(WW) {
      const RW = {
          Qw: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        MW = WW,
        NW = {
          queue: (MW, eW) => {
            const BW = (RW.generations.get(eW) ?? 0) + 1,
              tR = eW.material;
            RW.generations.set(eW, BW);
            const TW = RW.chains.get(eW),
              gR = [RW.tail, bR?.get(MW)].filter((WW => !!WW));
            let iR = () => {};
            const IW = new Promise((WW => {
              iR = WW
            }));
            RW.tail = IW, (bR ??= new WeakMap).set(MW, IW);
            const oW = (TW ? TW.catch((() => {})) : Promise.resolve()).then((() => Promise.all(gR))).then((() => async function(WW, RW, MW, bR, NW, eW) {
              if (!YW(WW, RW, MW, bR, NW, eW)) return;
              const BW = WW._meshDisposables.get(bR);
              BW && (WW._meshDisposables.delete(bR), zR(RW, bR, BW));
              const tR = MW._rebuildSingle,
                TW = yR?.get(MW)?.ozW.get(WW) ?? WW._groups.get(MW)?.r,
                gR = !!WW._groups.get(MW)?.r,
                iR = WW._disposables.length,
                IW = WW,
                oW = IW._pbrGeomContext;
              let lW, FW;
              try {
                FW = await MW(WW, [bR]), lW = IW._pbrGeomContext
              } catch (rR) {
                if (JW(WW, RW, bR, BW), PW(WW, RW), !YW(WW, RW, MW, bR, NW, eW)) return;
                throw rR
              } finally {
                MW._rebuildSingle = tR, "pbr" === MW._materialFamily && gR && (IW._pbrGeomContext = oW)
              }
              if (!YW(WW, RW, MW, bR, NW, eW)) return JW(WW, RW, bR, BW), void PW(WW, RW);
              for (let wW = WW._renderables.length - 1; wW >= 0; wW--) WW._renderables[wW].mesh === bR && WW._renderables.splice(wW, 1);
              if (BW) {
                for (const RW of BW) {
                  const MW = WW._disposables.indexOf(RW);
                  MW >= 0 && WW._disposables.splice(MW, 1);
                  const wW = RW.p;
                  if (wW) {
                    wW._disposed = !0;
                    const WW = wW._owner;
                    if (WW) {
                      const RW = WW.indexOf(wW);
                      RW >= 0 && WW.splice(RW, 1), wW._owner = void 0, 0 === WW.length && wW._onOwnerEmpty?.()
                    } else wW._onOwnerEmpty?.();
                    wW._onOwnerEmpty && (wW._onOwnerEmpty = void 0)
                  }
                }(0, wW.b)(WW.surface.engine, (() => {
                  for (const WW of BW) WW()
                }))
              }
              AW(RW, bR, BW), WW._renderables.push(...FW.renderables);
              const fW = WW._groups.get(MW);
              fW && (fW.o = [...(fW.o ?? []).filter((WW => WW.mesh !== bR)), ...FW.renderables]);
              FW.updater && WW._uniformUpdaters.push(FW.updater);
              gR && function(WW, RW) {
                const MW = new Set(WW._disposables.slice(0, RW));
                for (let wW = WW._disposables.length - 1; wW >= RW; wW--) MW.has(WW._disposables[wW]) && WW._disposables.splice(wW, 1)
              }(WW, iR);
              "pbr" === MW._materialFamily && gR && lW && (IW._pbrMeshGeomContexts ??= new WeakMap).set(bR, lW);
              (function(WW, RW, MW, wW, CW, zR) {
                let AW = yR?.get(MW);
                if (!AW) {
                  const WW = new WeakMap,
                    RW = new WeakMap,
                    wW = (wW, CW, zR, AW) => {
                      const bR = WW.get(wW)?.get(CW);
                      if (bR) return bR(wW, CW, zR, AW);
                      const yR = RW.get(wW) ?? wW._groups.get(MW)?.r;
                      if (yR) return yR(wW, CW, zR, AW);
                      throw new Error("Material group has not completed its initial build")
                    };
                  AW = {
                    ozW: RW,
                    dispatch: wW,
                    scenes: WW
                  }, (yR ??= new WeakMap).set(MW, AW)
                }
                let bR = AW.scenes.get(WW);
                bR || (bR = new WeakMap, AW.scenes.set(WW, bR));
                bR.set(wW, CW), AW.ozW.has(WW) || AW.ozW.set(WW, zR ?? CW);
                const NW = WW._groups.get(MW);
                NW && (NW.r = AW.dispatch);
                let eW = RW.installed.get(wW);
                eW || (eW = new Set, RW.installed.set(wW, eW));
                eW.add(MW), RW.installedMeshes.add(wW)
              })(WW, RW, MW, bR, FW.rebuildSingle, gR ? TW : FW.rebuildSingle), bR.material._csmGen = (bR.material._csmGen ?? 0) + 1;
              const QW = WW._groups.get(MW);
              QW && !gR && (QW.r = FW.rebuildSingle);
              WW._renderables.sort(CW), WW._renderableVersion++, WW._materialEpoch++
            }(WW, RW, MW, eW, tR, BW))).catch((wW => {
              throw YW(WW, RW, MW, eW, tR, BW) && (RW.error = wW instanceof Error ? wW : new Error("Runtime mesh build failed", {
                cause: wW
              })), wW
            })).finally((() => {
              iR(), RW.tail === IW && (RW.tail = null), bR?.get(MW) === IW && bR.delete(MW)
            })).finally((() => {
              RW.chains.get(eW) === oW && RW.chains.delete(eW)
            }));
            return RW.chains.set(eW, oW), NW.track(oW)
          },
          all: () => Promise.all(RW.active).then((() => {})),
          track: WW => {
            const MW = WW.finally((() => RW.active.delete(MW)));
            return RW.active.add(MW), Promise.all(RW.active).then((() => {}))
          },
          base: (RW, MW) => {
            const wW = yR?.get(RW);
            return wW && wW.ozW.set(WW, MW), wW?.dispatch ?? MW
          },
          get w() {
            return !!RW.tail
          },
          pendingDisposers: WW => RW.pendingDisposers.get(WW),
          holdPendingDisposers: (WW, MW) => zR(RW, WW, MW),
          releasePendingDisposers: (WW, MW) => AW(RW, WW, MW),
          reset: wW => {
            iR(WW, RW, wW), MW._pbrMeshGeomContexts?.delete(wW)
          },
          remove: wW => {
            RW.generations.set(wW, (RW.generations.get(wW) ?? 0) + 1), RW.chains.delete(wW), gR(WW, RW, wW), MW._pbrMeshGeomContexts?.delete(wW)
          },
          dropBase: RW => {
            const MW = yR?.get(RW);
            MW && (MW.ozW.delete(WW), MW.scenes.delete(WW))
          },
          wait: async WW => {
            const MW = new Set;
            for (const wW of WW) {
              const WW = RW.chains.get(wW);
              WW && MW.add(WW)
            }
            await Promise.all(MW)
          },
          _e: function() {
            let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (RW.error) {
              const MW = RW.error;
              throw WW && (RW.error = null), MW
            }
          },
          _x: WW => {
            RW.error = WW instanceof Error ? WW : new Error("Runtime mesh build failed", {
              cause: WW
            })
          },
          _d: () => RW.Qw,
          exclusive: (WW, MW) => {
            const wW = [];
            RW.tail && wW.push(RW.tail);
            const CW = bR?.get(WW);
            CW && wW.push(CW);
            const zR = Promise.all(wW).then(MW),
              AW = zR.then((() => {}), (() => {}));
            return RW.tail = AW, (bR ??= new WeakMap).set(WW, AW), AW.then((() => {
              RW.tail === AW && (RW.tail = null), bR?.get(WW) === AW && bR.delete(WW)
            })), zR
          }
        };
      return WW._runtimeBuilds = NW, (WW._beforeRender ??= []).push((() => {
        NW._e()
      })), WW._disposables.push((() => {
        RW.Qw = !0, RW.active.clear();
        for (const MW of RW.installedMeshes) iR(WW, RW, MW);
        for (const RW of WW._groups.keys()) yR?.get(RW)?.ozW.delete(WW);
        WW._runtimeBuilds = void 0, MW._pbrMeshGeomContexts = void 0
      })), NW
    }

    function gR(WW, RW, MW) {
      const wW = RW.installed.get(MW);
      if (wW) {
        for (const RW of wW) yR?.get(RW)?.scenes.get(WW)?.delete(MW);
        RW.installed.delete(MW), RW.installedMeshes.delete(MW)
      }
    }

    function iR(WW, RW, MW) {
      gR(WW, RW, MW)
    }

    function YW(WW, RW, MW, wW, CW, zR) {
      return !RW.Qw && RW.generations.get(wW) === zR && WW.meshes.includes(wW) && wW.material === CW && CW._buildGroup === MW
    }

    function JW(WW, RW, MW, CW) {
      const zR = WW._meshDisposables.get(MW);
      if (zR && zR !== CW) {
        WW._meshDisposables.delete(MW);
        for (const WW of zR) WW()
      }
      if (CW)
        if (WW.meshes.includes(MW)) WW._meshDisposables.set(MW, CW);
        else if (RW.Qw)
        for (const wW of CW) wW();
      else(0, wW.b)(WW.surface.engine, (() => {
        for (const WW of CW) WW()
      }));
      AW(RW, MW, CW)
    }

    function PW(WW, RW) {
      if (!RW.Qw) return;
      const MW = WW._disposables.splice(0);
      for (const wW of MW) wW()
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);