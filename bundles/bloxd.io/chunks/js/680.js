export const id = 680;
export const ids = [680];
export const modules = {
  64244: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      A: () => fR,
      B: () => KR,
      C: () => VR,
      X: () => wR
    });
    var yR = GR(53735),
      tR = (RR, JR) => RR.order - JR.order;

    function uR(RR, JR, GR) {
      RR.pendingDisposers.set(JR, GR)
    }

    function ZR(RR, JR, GR) {
      GR && RR.pendingDisposers.get(JR) === GR && RR.pendingDisposers.delete(JR)
    }
    var qR = null,
      iR = null;

    function fR(RR, JR, GR, yR) {
      if (!JR || GR.material !== JR) return yR ?? Promise.resolve();
      const tR = KR(RR, JR._buildGroup, GR);
      return yR ? Promise.all([yR, tR]).then((() => {})) : tR
    }

    function VR(RR, JR, GR) {
      let yR = GR;
      for (const tR of JR) {
        const JR = Array.isArray(tR),
          GR = JR ? tR[0] : tR;
        yR = fR(RR, JR ? tR[1] : GR.material, GR, yR)
      }
      return (yR ?? Promise.resolve()).catch((JR => {
        RR._runtimeBuilds?._x(JR)
      }))
    }

    function KR(RR, JR, yR) {
      if (RR._z || !RR.meshes.includes(yR)) return RR._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(RR, JR, GR) {
          for (const [tR, uR] of RR._groups)
            if (tR !== JR) {
              const RR = uR.indexOf(GR);
              RR >= 0 && uR.splice(RR, 1)
            } let yR = RR._groups.get(JR);
          yR || (yR = [], RR._groups.set(JR, yR));
          yR.includes(GR) || yR.push(GR)
        }(RR, JR, yR), "pbr" === JR._materialFamily && (RR._built || RR._groups.get(JR)?.r)) {
        const JR = RR._runtimeBuilds ?? rR(RR),
          yR = GR.e(710).then((() => GR(64790))).then((JR => {
            let {
              rebuildScenePbrPipelines: GR
            } = JR;
            return RR._z ? void 0 : GR(RR, !0)
          })).catch((JR => {
            RR._runtimeBuilds?._x(JR)
          }));
        return JR.track(yR)
      }
      return (RR._runtimeBuilds ?? rR(RR)).queue(JR, yR).catch((() => {}))
    }

    function wR(RR, JR, GR) {
      return RR._z ? Promise.resolve(void 0) : (RR._runtimeBuilds ?? rR(RR)).exclusive(JR, GR)
    }

    function rR(RR) {
      const JR = {
          He: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        GR = RR,
        fR = {
          queue: (GR, VR) => {
            const KR = (JR.generations.get(VR) ?? 0) + 1,
              wR = VR.material;
            JR.generations.set(VR, KR);
            const rR = JR.chains.get(VR),
              eR = [JR.tail, qR?.get(GR)].filter((RR => !!RR));
            let aR = () => {};
            const WR = new Promise((RR => {
              aR = RR
            }));
            JR.tail = WR, (qR ??= new WeakMap).set(GR, WR);
            const AR = (rR ? rR.catch((() => {})) : Promise.resolve()).then((() => Promise.all(eR))).then((() => async function(RR, JR, GR, qR, fR, VR) {
              if (!LR(RR, JR, GR, qR, fR, VR)) return;
              const KR = RR._meshDisposables.get(qR);
              KR && (RR._meshDisposables.delete(qR), uR(JR, qR, KR));
              const wR = GR._rebuildSingle,
                rR = iR?.get(GR)?.cRR.get(RR) ?? RR._groups.get(GR)?.r,
                eR = !!RR._groups.get(GR)?.r,
                aR = RR._disposables.length,
                WR = RR,
                AR = WR._pbrGeomContext;
              let CR, XR;
              try {
                XR = await GR(RR, [qR]), CR = WR._pbrGeomContext
              } catch (lR) {
                if (nR(RR, JR, qR, KR), UR(RR, JR), !LR(RR, JR, GR, qR, fR, VR)) return;
                throw lR
              } finally {
                GR._rebuildSingle = wR, "pbr" === GR._materialFamily && eR && (WR._pbrGeomContext = AR)
              }
              if (!LR(RR, JR, GR, qR, fR, VR)) return nR(RR, JR, qR, KR), void UR(RR, JR);
              for (let yR = RR._renderables.length - 1; yR >= 0; yR--) RR._renderables[yR].mesh === qR && RR._renderables.splice(yR, 1);
              if (KR) {
                for (const JR of KR) {
                  const GR = RR._disposables.indexOf(JR);
                  GR >= 0 && RR._disposables.splice(GR, 1);
                  const yR = JR.p;
                  if (yR) {
                    yR._disposed = !0;
                    const RR = yR._owner;
                    if (RR) {
                      const JR = RR.indexOf(yR);
                      JR >= 0 && RR.splice(JR, 1), yR._owner = void 0, 0 === RR.length && yR._onOwnerEmpty?.()
                    } else yR._onOwnerEmpty?.();
                    yR._onOwnerEmpty && (yR._onOwnerEmpty = void 0)
                  }
                }(0, yR.e)(RR.surface.engine, (() => {
                  for (const RR of KR) RR()
                }))
              }
              ZR(JR, qR, KR), RR._renderables.push(...XR.renderables);
              const MR = RR._groups.get(GR);
              MR && (MR.o = [...(MR.o ?? []).filter((RR => RR.mesh !== qR)), ...XR.renderables]);
              XR.updater && RR._uniformUpdaters.push(XR.updater);
              eR && function(RR, JR) {
                const GR = new Set(RR._disposables.slice(0, JR));
                for (let yR = RR._disposables.length - 1; yR >= JR; yR--) GR.has(RR._disposables[yR]) && RR._disposables.splice(yR, 1)
              }(RR, aR);
              "pbr" === GR._materialFamily && eR && CR && (WR._pbrMeshGeomContexts ??= new WeakMap).set(qR, CR);
              (function(RR, JR, GR, yR, tR, uR) {
                let ZR = iR?.get(GR);
                if (!ZR) {
                  const RR = new WeakMap,
                    JR = new WeakMap,
                    yR = (yR, tR, uR, ZR) => {
                      const qR = RR.get(yR)?.get(tR);
                      if (qR) return qR(yR, tR, uR, ZR);
                      const iR = JR.get(yR) ?? yR._groups.get(GR)?.r;
                      if (iR) return iR(yR, tR, uR, ZR);
                      throw new Error("Material group has not completed its initial build")
                    };
                  ZR = {
                    cRR: JR,
                    dispatch: yR,
                    scenes: RR
                  }, (iR ??= new WeakMap).set(GR, ZR)
                }
                let qR = ZR.scenes.get(RR);
                qR || (qR = new WeakMap, ZR.scenes.set(RR, qR));
                qR.set(yR, tR), ZR.cRR.has(RR) || ZR.cRR.set(RR, uR ?? tR);
                const fR = RR._groups.get(GR);
                fR && (fR.r = ZR.dispatch);
                let VR = JR.installed.get(yR);
                VR || (VR = new Set, JR.installed.set(yR, VR));
                VR.add(GR), JR.installedMeshes.add(yR)
              })(RR, JR, GR, qR, XR.rebuildSingle, eR ? rR : XR.rebuildSingle), qR.material._csmGen = (qR.material._csmGen ?? 0) + 1;
              const BR = RR._groups.get(GR);
              BR && !eR && (BR.r = XR.rebuildSingle);
              RR._renderables.sort(tR), RR._renderableVersion++, RR._materialEpoch++
            }(RR, JR, GR, VR, wR, KR))).catch((yR => {
              throw LR(RR, JR, GR, VR, wR, KR) && (JR.error = yR instanceof Error ? yR : new Error("Runtime mesh build failed", {
                cause: yR
              })), yR
            })).finally((() => {
              aR(), JR.tail === WR && (JR.tail = null), qR?.get(GR) === WR && qR.delete(GR)
            })).finally((() => {
              JR.chains.get(VR) === AR && JR.chains.delete(VR)
            }));
            return JR.chains.set(VR, AR), fR.track(AR)
          },
          all: () => Promise.all(JR.active).then((() => {})),
          track: RR => {
            const GR = RR.finally((() => JR.active.delete(GR)));
            return JR.active.add(GR), Promise.all(JR.active).then((() => {}))
          },
          base: (JR, GR) => {
            const yR = iR?.get(JR);
            return yR && yR.cRR.set(RR, GR), yR?.dispatch ?? GR
          },
          get w() {
            return !!JR.tail
          },
          pendingDisposers: RR => JR.pendingDisposers.get(RR),
          holdPendingDisposers: (RR, GR) => uR(JR, RR, GR),
          releasePendingDisposers: (RR, GR) => ZR(JR, RR, GR),
          reset: yR => {
            aR(RR, JR, yR), GR._pbrMeshGeomContexts?.delete(yR)
          },
          remove: yR => {
            JR.generations.set(yR, (JR.generations.get(yR) ?? 0) + 1), JR.chains.delete(yR), eR(RR, JR, yR), GR._pbrMeshGeomContexts?.delete(yR)
          },
          dropBase: JR => {
            const GR = iR?.get(JR);
            GR && (GR.cRR.delete(RR), GR.scenes.delete(RR))
          },
          wait: async RR => {
            const GR = new Set;
            for (const yR of RR) {
              const RR = JR.chains.get(yR);
              RR && GR.add(RR)
            }
            await Promise.all(GR)
          },
          _e: function() {
            let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (JR.error) {
              const GR = JR.error;
              throw RR && (JR.error = null), GR
            }
          },
          _x: RR => {
            JR.error = RR instanceof Error ? RR : new Error("Runtime mesh build failed", {
              cause: RR
            })
          },
          _d: () => JR.He,
          exclusive: (RR, GR) => {
            const yR = [];
            JR.tail && yR.push(JR.tail);
            const tR = qR?.get(RR);
            tR && yR.push(tR);
            const uR = Promise.all(yR).then(GR),
              ZR = uR.then((() => {}), (() => {}));
            return JR.tail = ZR, (qR ??= new WeakMap).set(RR, ZR), ZR.then((() => {
              JR.tail === ZR && (JR.tail = null), qR?.get(RR) === ZR && qR.delete(RR)
            })), uR
          }
        };
      return RR._runtimeBuilds = fR, (RR._beforeRender ??= []).push((() => {
        fR._e()
      })), RR._disposables.push((() => {
        JR.He = !0, JR.active.clear();
        for (const GR of JR.installedMeshes) aR(RR, JR, GR);
        for (const JR of RR._groups.keys()) iR?.get(JR)?.cRR.delete(RR);
        RR._runtimeBuilds = void 0, GR._pbrMeshGeomContexts = void 0
      })), fR
    }

    function eR(RR, JR, GR) {
      const yR = JR.installed.get(GR);
      if (yR) {
        for (const JR of yR) iR?.get(JR)?.scenes.get(RR)?.delete(GR);
        JR.installed.delete(GR), JR.installedMeshes.delete(GR)
      }
    }

    function aR(RR, JR, GR) {
      eR(RR, JR, GR)
    }

    function LR(RR, JR, GR, yR, tR, uR) {
      return !JR.He && JR.generations.get(yR) === uR && RR.meshes.includes(yR) && yR.material === tR && tR._buildGroup === GR
    }

    function nR(RR, JR, GR, tR) {
      const uR = RR._meshDisposables.get(GR);
      if (uR && uR !== tR) {
        RR._meshDisposables.delete(GR);
        for (const RR of uR) RR()
      }
      if (tR)
        if (RR.meshes.includes(GR)) RR._meshDisposables.set(GR, tR);
        else if (JR.He)
        for (const yR of tR) yR();
      else(0, yR.e)(RR.surface.engine, (() => {
        for (const RR of tR) RR()
      }));
      ZR(JR, GR, tR)
    }

    function UR(RR, JR) {
      if (!JR.He) return;
      const GR = RR._disposables.splice(0);
      for (const yR of GR) yR()
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);