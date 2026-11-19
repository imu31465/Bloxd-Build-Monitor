export const id = 355;
export const ids = [355];
export const modules = {
  60320: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      A: () => aY,
      B: () => uY,
      C: () => vY,
      X: () => sY
    });
    var FY = DY(40791),
      AY = (YY, rY) => YY.order - rY.order;

    function IY(YY, rY, DY) {
      YY.pendingDisposers.set(rY, DY)
    }

    function RY(YY, rY, DY) {
      DY && YY.pendingDisposers.get(rY) === DY && YY.pendingDisposers.delete(rY)
    }
    var OY = null,
      gY = null;

    function aY(YY, rY, DY, FY) {
      if (!rY || DY.material !== rY) return FY ?? Promise.resolve();
      const AY = uY(YY, rY._buildGroup, DY);
      return FY ? Promise.all([FY, AY]).then((() => {})) : AY
    }

    function vY(YY, rY, DY) {
      let FY = DY;
      for (const AY of rY) {
        const rY = Array.isArray(AY),
          DY = rY ? AY[0] : AY;
        FY = aY(YY, rY ? AY[1] : DY.material, DY, FY)
      }
      return (FY ?? Promise.resolve()).catch((rY => {
        YY._runtimeBuilds?._x(rY)
      }))
    }

    function uY(YY, rY, FY) {
      if (YY._z || !YY.meshes.includes(FY)) return YY._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(YY, rY, DY) {
          for (const [AY, IY] of YY._groups)
            if (AY !== rY) {
              const YY = IY.indexOf(DY);
              YY >= 0 && IY.splice(YY, 1)
            } let FY = YY._groups.get(rY);
          FY || (FY = [], YY._groups.set(rY, FY));
          FY.includes(DY) || FY.push(DY)
        }(YY, rY, FY), "pbr" === rY._materialFamily && (YY._built || YY._groups.get(rY)?.r)) {
        const rY = YY._runtimeBuilds ?? iY(YY),
          FY = DY.e(385).then((() => DY(60975))).then((rY => {
            let {
              rebuildScenePbrPipelines: DY
            } = rY;
            return YY._z ? void 0 : DY(YY, !0)
          })).catch((rY => {
            YY._runtimeBuilds?._x(rY)
          }));
        return rY.track(FY)
      }
      return (YY._runtimeBuilds ?? iY(YY)).queue(rY, FY).catch((() => {}))
    }

    function sY(YY, rY, DY) {
      return YY._z ? Promise.resolve(void 0) : (YY._runtimeBuilds ?? iY(YY)).exclusive(rY, DY)
    }

    function iY(YY) {
      const rY = {
          Ky: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        DY = YY,
        aY = {
          queue: (DY, vY) => {
            const uY = (rY.generations.get(vY) ?? 0) + 1,
              sY = vY.material;
            rY.generations.set(vY, uY);
            const iY = rY.chains.get(vY),
              yY = [rY.tail, OY?.get(DY)].filter((YY => !!YY));
            let QY = () => {};
            const mY = new Promise((YY => {
              QY = YY
            }));
            rY.tail = mY, (OY ??= new WeakMap).set(DY, mY);
            const VY = (iY ? iY.catch((() => {})) : Promise.resolve()).then((() => Promise.all(yY))).then((() => async function(YY, rY, DY, OY, aY, vY) {
              if (!oY(YY, rY, DY, OY, aY, vY)) return;
              const uY = YY._meshDisposables.get(OY);
              uY && (YY._meshDisposables.delete(OY), IY(rY, OY, uY));
              const sY = DY._rebuildSingle,
                iY = gY?.get(DY)?.r_.get(YY) ?? YY._groups.get(DY)?.r,
                yY = !!YY._groups.get(DY)?.r,
                QY = YY._disposables.length,
                mY = YY,
                VY = mY._pbrGeomContext;
              let SY, lY;
              try {
                lY = await DY(YY, [OY]), SY = mY._pbrGeomContext
              } catch (NY) {
                if (WY(YY, rY, OY, uY), EY(YY, rY), !oY(YY, rY, DY, OY, aY, vY)) return;
                throw NY
              } finally {
                DY._rebuildSingle = sY, "pbr" === DY._materialFamily && yY && (mY._pbrGeomContext = VY)
              }
              if (!oY(YY, rY, DY, OY, aY, vY)) return WY(YY, rY, OY, uY), void EY(YY, rY);
              for (let FY = YY._renderables.length - 1; FY >= 0; FY--) YY._renderables[FY].mesh === OY && YY._renderables.splice(FY, 1);
              if (uY) {
                for (const rY of uY) {
                  const DY = YY._disposables.indexOf(rY);
                  DY >= 0 && YY._disposables.splice(DY, 1);
                  const FY = rY.p;
                  if (FY) {
                    FY._disposed = !0;
                    const YY = FY._owner;
                    if (YY) {
                      const rY = YY.indexOf(FY);
                      rY >= 0 && YY.splice(rY, 1), FY._owner = void 0, 0 === YY.length && FY._onOwnerEmpty?.()
                    } else FY._onOwnerEmpty?.();
                    FY._onOwnerEmpty && (FY._onOwnerEmpty = void 0)
                  }
                }(0, FY.e)(YY.surface.engine, (() => {
                  for (const YY of uY) YY()
                }))
              }
              RY(rY, OY, uY), YY._renderables.push(...lY.renderables);
              const TY = YY._groups.get(DY);
              TY && (TY.o = [...(TY.o ?? []).filter((YY => YY.mesh !== OY)), ...lY.renderables]);
              lY.updater && YY._uniformUpdaters.push(lY.updater);
              yY && function(YY, rY) {
                const DY = new Set(YY._disposables.slice(0, rY));
                for (let FY = YY._disposables.length - 1; FY >= rY; FY--) DY.has(YY._disposables[FY]) && YY._disposables.splice(FY, 1)
              }(YY, QY);
              "pbr" === DY._materialFamily && yY && SY && (mY._pbrMeshGeomContexts ??= new WeakMap).set(OY, SY);
              (function(YY, rY, DY, FY, AY, IY) {
                let RY = gY?.get(DY);
                if (!RY) {
                  const YY = new WeakMap,
                    rY = new WeakMap,
                    FY = (FY, AY, IY, RY) => {
                      const OY = YY.get(FY)?.get(AY);
                      if (OY) return OY(FY, AY, IY, RY);
                      const gY = rY.get(FY) ?? FY._groups.get(DY)?.r;
                      if (gY) return gY(FY, AY, IY, RY);
                      throw new Error("Material group has not completed its initial build")
                    };
                  RY = {
                    r_: rY,
                    dispatch: FY,
                    scenes: YY
                  }, (gY ??= new WeakMap).set(DY, RY)
                }
                let OY = RY.scenes.get(YY);
                OY || (OY = new WeakMap, RY.scenes.set(YY, OY));
                OY.set(FY, AY), RY.r_.has(YY) || RY.r_.set(YY, IY ?? AY);
                const aY = YY._groups.get(DY);
                aY && (aY.r = RY.dispatch);
                let vY = rY.installed.get(FY);
                vY || (vY = new Set, rY.installed.set(FY, vY));
                vY.add(DY), rY.installedMeshes.add(FY)
              })(YY, rY, DY, OY, lY.rebuildSingle, yY ? iY : lY.rebuildSingle), OY.material._csmGen = (OY.material._csmGen ?? 0) + 1;
              const eY = YY._groups.get(DY);
              eY && !yY && (eY.r = lY.rebuildSingle);
              YY._renderables.sort(AY), YY._renderableVersion++, YY._materialEpoch++
            }(YY, rY, DY, vY, sY, uY))).catch((FY => {
              throw oY(YY, rY, DY, vY, sY, uY) && (rY.error = FY instanceof Error ? FY : new Error("Runtime mesh build failed", {
                cause: FY
              })), FY
            })).finally((() => {
              QY(), rY.tail === mY && (rY.tail = null), OY?.get(DY) === mY && OY.delete(DY)
            })).finally((() => {
              rY.chains.get(vY) === VY && rY.chains.delete(vY)
            }));
            return rY.chains.set(vY, VY), aY.track(VY)
          },
          all: () => Promise.all(rY.active).then((() => {})),
          track: YY => {
            const DY = YY.finally((() => rY.active.delete(DY)));
            return rY.active.add(DY), Promise.all(rY.active).then((() => {}))
          },
          base: (rY, DY) => {
            const FY = gY?.get(rY);
            return FY && FY.r_.set(YY, DY), FY?.dispatch ?? DY
          },
          get w() {
            return !!rY.tail
          },
          pendingDisposers: YY => rY.pendingDisposers.get(YY),
          holdPendingDisposers: (YY, DY) => IY(rY, YY, DY),
          releasePendingDisposers: (YY, DY) => RY(rY, YY, DY),
          reset: FY => {
            QY(YY, rY, FY), DY._pbrMeshGeomContexts?.delete(FY)
          },
          remove: FY => {
            rY.generations.set(FY, (rY.generations.get(FY) ?? 0) + 1), rY.chains.delete(FY), yY(YY, rY, FY), DY._pbrMeshGeomContexts?.delete(FY)
          },
          dropBase: rY => {
            const DY = gY?.get(rY);
            DY && (DY.r_.delete(YY), DY.scenes.delete(YY))
          },
          wait: async YY => {
            const DY = new Set;
            for (const FY of YY) {
              const YY = rY.chains.get(FY);
              YY && DY.add(YY)
            }
            await Promise.all(DY)
          },
          _e: function() {
            let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (rY.error) {
              const DY = rY.error;
              throw YY && (rY.error = null), DY
            }
          },
          _x: YY => {
            rY.error = YY instanceof Error ? YY : new Error("Runtime mesh build failed", {
              cause: YY
            })
          },
          _d: () => rY.Ky,
          exclusive: (YY, DY) => {
            const FY = [];
            rY.tail && FY.push(rY.tail);
            const AY = OY?.get(YY);
            AY && FY.push(AY);
            const IY = Promise.all(FY).then(DY),
              RY = IY.then((() => {}), (() => {}));
            return rY.tail = RY, (OY ??= new WeakMap).set(YY, RY), RY.then((() => {
              rY.tail === RY && (rY.tail = null), OY?.get(YY) === RY && OY.delete(YY)
            })), IY
          }
        };
      return YY._runtimeBuilds = aY, (YY._beforeRender ??= []).push((() => {
        aY._e()
      })), YY._disposables.push((() => {
        rY.Ky = !0, rY.active.clear();
        for (const DY of rY.installedMeshes) QY(YY, rY, DY);
        for (const rY of YY._groups.keys()) gY?.get(rY)?.r_.delete(YY);
        YY._runtimeBuilds = void 0, DY._pbrMeshGeomContexts = void 0
      })), aY
    }

    function yY(YY, rY, DY) {
      const FY = rY.installed.get(DY);
      if (FY) {
        for (const rY of FY) gY?.get(rY)?.scenes.get(YY)?.delete(DY);
        rY.installed.delete(DY), rY.installedMeshes.delete(DY)
      }
    }

    function QY(YY, rY, DY) {
      yY(YY, rY, DY)
    }

    function oY(YY, rY, DY, FY, AY, IY) {
      return !rY.Ky && rY.generations.get(FY) === IY && YY.meshes.includes(FY) && FY.material === AY && AY._buildGroup === DY
    }

    function WY(YY, rY, DY, AY) {
      const IY = YY._meshDisposables.get(DY);
      if (IY && IY !== AY) {
        YY._meshDisposables.delete(DY);
        for (const YY of IY) YY()
      }
      if (AY)
        if (YY.meshes.includes(DY)) YY._meshDisposables.set(DY, AY);
        else if (rY.Ky)
        for (const FY of AY) FY();
      else(0, FY.e)(YY.surface.engine, (() => {
        for (const YY of AY) YY()
      }));
      RY(rY, DY, AY)
    }

    function EY(YY, rY) {
      if (!rY.Ky) return;
      const DY = YY._disposables.splice(0);
      for (const FY of DY) FY()
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);