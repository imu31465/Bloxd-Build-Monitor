export const id = 680;
export const ids = [680];
export const modules = {
  64503: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      A: () => wW,
      B: () => ZW,
      C: () => tW,
      X: () => xW
    });
    var mW = OW(53885),
      EW = (WW, iW) => WW.order - iW.order;

    function NW(WW, iW, OW) {
      WW.pendingDisposers.set(iW, OW)
    }

    function PW(WW, iW, OW) {
      OW && WW.pendingDisposers.get(iW) === OW && WW.pendingDisposers.delete(iW)
    }
    var LW = null,
      cW = null;

    function wW(WW, iW, OW, mW) {
      if (!iW || OW.material !== iW) return mW ?? Promise.resolve();
      const EW = ZW(WW, iW._buildGroup, OW);
      return mW ? Promise.all([mW, EW]).then((() => {})) : EW
    }

    function tW(WW, iW, OW) {
      let mW = OW;
      for (const EW of iW) {
        const iW = Array.isArray(EW),
          OW = iW ? EW[0] : EW;
        mW = wW(WW, iW ? EW[1] : OW.material, OW, mW)
      }
      return (mW ?? Promise.resolve()).catch((iW => {
        WW._runtimeBuilds?._x(iW)
      }))
    }

    function ZW(WW, iW, mW) {
      if (WW._z || !WW.meshes.includes(mW)) return WW._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(WW, iW, OW) {
          for (const [EW, NW] of WW._groups)
            if (EW !== iW) {
              const WW = NW.indexOf(OW);
              WW >= 0 && NW.splice(WW, 1)
            } let mW = WW._groups.get(iW);
          mW || (mW = [], WW._groups.set(iW, mW));
          mW.includes(OW) || mW.push(OW)
        }(WW, iW, mW), "pbr" === iW._materialFamily && (WW._built || WW._groups.get(iW)?.r)) {
        const iW = WW._runtimeBuilds ?? lW(WW),
          mW = OW.e(710).then((() => OW(65059))).then((iW => {
            let {
              rebuildScenePbrPipelines: OW
            } = iW;
            return WW._z ? void 0 : OW(WW, !0)
          })).catch((iW => {
            WW._runtimeBuilds?._x(iW)
          }));
        return iW.track(mW)
      }
      return (WW._runtimeBuilds ?? lW(WW)).queue(iW, mW).catch((() => {}))
    }

    function xW(WW, iW, OW) {
      return WW._z ? Promise.resolve(void 0) : (WW._runtimeBuilds ?? lW(WW)).exclusive(iW, OW)
    }

    function lW(WW) {
      const iW = {
          JA: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        OW = WW,
        wW = {
          queue: (OW, tW) => {
            const ZW = (iW.generations.get(tW) ?? 0) + 1,
              xW = tW.material;
            iW.generations.set(tW, ZW);
            const lW = iW.chains.get(tW),
              AW = [iW.tail, LW?.get(OW)].filter((WW => !!WW));
            let bW = () => {};
            const sW = new Promise((WW => {
              bW = WW
            }));
            iW.tail = sW, (LW ??= new WeakMap).set(OW, sW);
            const MW = (lW ? lW.catch((() => {})) : Promise.resolve()).then((() => Promise.all(AW))).then((() => async function(WW, iW, OW, LW, wW, tW) {
              if (!jW(WW, iW, OW, LW, wW, tW)) return;
              const ZW = WW._meshDisposables.get(LW);
              ZW && (WW._meshDisposables.delete(LW), NW(iW, LW, ZW));
              const xW = OW._rebuildSingle,
                lW = cW?.get(OW)?.B5.get(WW) ?? WW._groups.get(OW)?.r,
                AW = !!WW._groups.get(OW)?.r,
                bW = WW._disposables.length,
                sW = WW,
                MW = sW._pbrGeomContext;
              let KW, SW;
              try {
                SW = await OW(WW, [LW]), KW = sW._pbrGeomContext
              } catch (TW) {
                if (UW(WW, iW, LW, ZW), kW(WW, iW), !jW(WW, iW, OW, LW, wW, tW)) return;
                throw TW
              } finally {
                OW._rebuildSingle = xW, "pbr" === OW._materialFamily && AW && (sW._pbrGeomContext = MW)
              }
              if (!jW(WW, iW, OW, LW, wW, tW)) return UW(WW, iW, LW, ZW), void kW(WW, iW);
              for (let mW = WW._renderables.length - 1; mW >= 0; mW--) WW._renderables[mW].mesh === LW && WW._renderables.splice(mW, 1);
              if (ZW) {
                for (const iW of ZW) {
                  const OW = WW._disposables.indexOf(iW);
                  OW >= 0 && WW._disposables.splice(OW, 1);
                  const mW = iW.p;
                  if (mW) {
                    mW._disposed = !0;
                    const WW = mW._owner;
                    if (WW) {
                      const iW = WW.indexOf(mW);
                      iW >= 0 && WW.splice(iW, 1), mW._owner = void 0, 0 === WW.length && mW._onOwnerEmpty?.()
                    } else mW._onOwnerEmpty?.();
                    mW._onOwnerEmpty && (mW._onOwnerEmpty = void 0)
                  }
                }(0, mW.g)(WW.surface.engine, (() => {
                  for (const WW of ZW) WW()
                }))
              }
              PW(iW, LW, ZW), WW._renderables.push(...SW.renderables);
              const YW = WW._groups.get(OW);
              YW && (YW.o = [...(YW.o ?? []).filter((WW => WW.mesh !== LW)), ...SW.renderables]);
              SW.updater && WW._uniformUpdaters.push(SW.updater);
              AW && function(WW, iW) {
                const OW = new Set(WW._disposables.slice(0, iW));
                for (let mW = WW._disposables.length - 1; mW >= iW; mW--) OW.has(WW._disposables[mW]) && WW._disposables.splice(mW, 1)
              }(WW, bW);
              "pbr" === OW._materialFamily && AW && KW && (sW._pbrMeshGeomContexts ??= new WeakMap).set(LW, KW);
              (function(WW, iW, OW, mW, EW, NW) {
                let PW = cW?.get(OW);
                if (!PW) {
                  const WW = new WeakMap,
                    iW = new WeakMap,
                    mW = (mW, EW, NW, PW) => {
                      const LW = WW.get(mW)?.get(EW);
                      if (LW) return LW(mW, EW, NW, PW);
                      const cW = iW.get(mW) ?? mW._groups.get(OW)?.r;
                      if (cW) return cW(mW, EW, NW, PW);
                      throw new Error("Material group has not completed its initial build")
                    };
                  PW = {
                    B5: iW,
                    dispatch: mW,
                    scenes: WW
                  }, (cW ??= new WeakMap).set(OW, PW)
                }
                let LW = PW.scenes.get(WW);
                LW || (LW = new WeakMap, PW.scenes.set(WW, LW));
                LW.set(mW, EW), PW.B5.has(WW) || PW.B5.set(WW, NW ?? EW);
                const wW = WW._groups.get(OW);
                wW && (wW.r = PW.dispatch);
                let tW = iW.installed.get(mW);
                tW || (tW = new Set, iW.installed.set(mW, tW));
                tW.add(OW), iW.installedMeshes.add(mW)
              })(WW, iW, OW, LW, SW.rebuildSingle, AW ? lW : SW.rebuildSingle), LW.material._csmGen = (LW.material._csmGen ?? 0) + 1;
              const yW = WW._groups.get(OW);
              yW && !AW && (yW.r = SW.rebuildSingle);
              WW._renderables.sort(EW), WW._renderableVersion++, WW._materialEpoch++
            }(WW, iW, OW, tW, xW, ZW))).catch((mW => {
              throw jW(WW, iW, OW, tW, xW, ZW) && (iW.error = mW instanceof Error ? mW : new Error("Runtime mesh build failed", {
                cause: mW
              })), mW
            })).finally((() => {
              bW(), iW.tail === sW && (iW.tail = null), LW?.get(OW) === sW && LW.delete(OW)
            })).finally((() => {
              iW.chains.get(tW) === MW && iW.chains.delete(tW)
            }));
            return iW.chains.set(tW, MW), wW.track(MW)
          },
          all: () => Promise.all(iW.active).then((() => {})),
          track: WW => {
            const OW = WW.finally((() => iW.active.delete(OW)));
            return iW.active.add(OW), Promise.all(iW.active).then((() => {}))
          },
          base: (iW, OW) => {
            const mW = cW?.get(iW);
            return mW && mW.B5.set(WW, OW), mW?.dispatch ?? OW
          },
          get w() {
            return !!iW.tail
          },
          pendingDisposers: WW => iW.pendingDisposers.get(WW),
          holdPendingDisposers: (WW, OW) => NW(iW, WW, OW),
          releasePendingDisposers: (WW, OW) => PW(iW, WW, OW),
          reset: mW => {
            bW(WW, iW, mW), OW._pbrMeshGeomContexts?.delete(mW)
          },
          remove: mW => {
            iW.generations.set(mW, (iW.generations.get(mW) ?? 0) + 1), iW.chains.delete(mW), AW(WW, iW, mW), OW._pbrMeshGeomContexts?.delete(mW)
          },
          dropBase: iW => {
            const OW = cW?.get(iW);
            OW && (OW.B5.delete(WW), OW.scenes.delete(WW))
          },
          wait: async WW => {
            const OW = new Set;
            for (const mW of WW) {
              const WW = iW.chains.get(mW);
              WW && OW.add(WW)
            }
            await Promise.all(OW)
          },
          _e: function() {
            let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (iW.error) {
              const OW = iW.error;
              throw WW && (iW.error = null), OW
            }
          },
          _x: WW => {
            iW.error = WW instanceof Error ? WW : new Error("Runtime mesh build failed", {
              cause: WW
            })
          },
          _d: () => iW.JA,
          exclusive: (WW, OW) => {
            const mW = [];
            iW.tail && mW.push(iW.tail);
            const EW = LW?.get(WW);
            EW && mW.push(EW);
            const NW = Promise.all(mW).then(OW),
              PW = NW.then((() => {}), (() => {}));
            return iW.tail = PW, (LW ??= new WeakMap).set(WW, PW), PW.then((() => {
              iW.tail === PW && (iW.tail = null), LW?.get(WW) === PW && LW.delete(WW)
            })), NW
          }
        };
      return WW._runtimeBuilds = wW, (WW._beforeRender ??= []).push((() => {
        wW._e()
      })), WW._disposables.push((() => {
        iW.JA = !0, iW.active.clear();
        for (const OW of iW.installedMeshes) bW(WW, iW, OW);
        for (const iW of WW._groups.keys()) cW?.get(iW)?.B5.delete(WW);
        WW._runtimeBuilds = void 0, OW._pbrMeshGeomContexts = void 0
      })), wW
    }

    function AW(WW, iW, OW) {
      const mW = iW.installed.get(OW);
      if (mW) {
        for (const iW of mW) cW?.get(iW)?.scenes.get(WW)?.delete(OW);
        iW.installed.delete(OW), iW.installedMeshes.delete(OW)
      }
    }

    function bW(WW, iW, OW) {
      AW(WW, iW, OW)
    }

    function jW(WW, iW, OW, mW, EW, NW) {
      return !iW.JA && iW.generations.get(mW) === NW && WW.meshes.includes(mW) && mW.material === EW && EW._buildGroup === OW
    }

    function UW(WW, iW, OW, EW) {
      const NW = WW._meshDisposables.get(OW);
      if (NW && NW !== EW) {
        WW._meshDisposables.delete(OW);
        for (const WW of NW) WW()
      }
      if (EW)
        if (WW.meshes.includes(OW)) WW._meshDisposables.set(OW, EW);
        else if (iW.JA)
        for (const mW of EW) mW();
      else(0, mW.g)(WW.surface.engine, (() => {
        for (const WW of EW) WW()
      }));
      PW(iW, OW, EW)
    }

    function kW(WW, iW) {
      if (!iW.JA) return;
      const OW = WW._disposables.splice(0);
      for (const mW of OW) mW()
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);