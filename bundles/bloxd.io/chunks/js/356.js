export const id = 356;
export const ids = [356];
export const modules = {
  60749: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      A: () => mQ,
      B: () => HQ,
      C: () => uQ,
      X: () => bQ
    });
    var LQ = wQ(41129),
      qQ = (QQ, FQ) => QQ.order - FQ.order;

    function oQ(QQ, FQ, wQ) {
      QQ.pendingDisposers.set(FQ, wQ)
    }

    function DQ(QQ, FQ, wQ) {
      wQ && QQ.pendingDisposers.get(FQ) === wQ && QQ.pendingDisposers.delete(FQ)
    }
    var kQ = null,
      vQ = null;

    function mQ(QQ, FQ, wQ, LQ) {
      if (!FQ || wQ.material !== FQ) return LQ ?? Promise.resolve();
      const qQ = HQ(QQ, FQ._buildGroup, wQ);
      return LQ ? Promise.all([LQ, qQ]).then((() => {})) : qQ
    }

    function uQ(QQ, FQ, wQ) {
      let LQ = wQ;
      for (const qQ of FQ) {
        const FQ = Array.isArray(qQ),
          wQ = FQ ? qQ[0] : qQ;
        LQ = mQ(QQ, FQ ? qQ[1] : wQ.material, wQ, LQ)
      }
      return (LQ ?? Promise.resolve()).catch((FQ => {
        QQ._runtimeBuilds?._x(FQ)
      }))
    }

    function HQ(QQ, FQ, LQ) {
      if (QQ._z || !QQ.meshes.includes(LQ)) return QQ._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(QQ, FQ, wQ) {
          for (const [qQ, oQ] of QQ._groups)
            if (qQ !== FQ) {
              const QQ = oQ.indexOf(wQ);
              QQ >= 0 && oQ.splice(QQ, 1)
            } let LQ = QQ._groups.get(FQ);
          LQ || (LQ = [], QQ._groups.set(FQ, LQ));
          LQ.includes(wQ) || LQ.push(wQ)
        }(QQ, FQ, LQ), "pbr" === FQ._materialFamily && (QQ._built || QQ._groups.get(FQ)?.r)) {
        const FQ = QQ._runtimeBuilds ?? YQ(QQ),
          LQ = wQ.e(386).then((() => wQ(61402))).then((FQ => {
            let {
              rebuildScenePbrPipelines: wQ
            } = FQ;
            return QQ._z ? void 0 : wQ(QQ, !0)
          })).catch((FQ => {
            QQ._runtimeBuilds?._x(FQ)
          }));
        return FQ.track(LQ)
      }
      return (QQ._runtimeBuilds ?? YQ(QQ)).queue(FQ, LQ).catch((() => {}))
    }

    function bQ(QQ, FQ, wQ) {
      return QQ._z ? Promise.resolve(void 0) : (QQ._runtimeBuilds ?? YQ(QQ)).exclusive(FQ, wQ)
    }

    function YQ(QQ) {
      const FQ = {
          kx: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        wQ = QQ,
        mQ = {
          queue: (wQ, uQ) => {
            const HQ = (FQ.generations.get(uQ) ?? 0) + 1,
              bQ = uQ.material;
            FQ.generations.set(uQ, HQ);
            const YQ = FQ.chains.get(uQ),
              xQ = [FQ.tail, kQ?.get(wQ)].filter((QQ => !!QQ));
            let AQ = () => {};
            const GQ = new Promise((QQ => {
              AQ = QQ
            }));
            FQ.tail = GQ, (kQ ??= new WeakMap).set(wQ, GQ);
            const pQ = (YQ ? YQ.catch((() => {})) : Promise.resolve()).then((() => Promise.all(xQ))).then((() => async function(QQ, FQ, wQ, kQ, mQ, uQ) {
              if (!tQ(QQ, FQ, wQ, kQ, mQ, uQ)) return;
              const HQ = QQ._meshDisposables.get(kQ);
              HQ && (QQ._meshDisposables.delete(kQ), oQ(FQ, kQ, HQ));
              const bQ = wQ._rebuildSingle,
                YQ = vQ?.get(wQ)?.N7.get(QQ) ?? QQ._groups.get(wQ)?.r,
                xQ = !!QQ._groups.get(wQ)?.r,
                AQ = QQ._disposables.length,
                GQ = QQ,
                pQ = GQ._pbrGeomContext;
              let cQ, CQ;
              try {
                CQ = await wQ(QQ, [kQ]), cQ = GQ._pbrGeomContext
              } catch (WQ) {
                if (eQ(QQ, FQ, kQ, HQ), MQ(QQ, FQ), !tQ(QQ, FQ, wQ, kQ, mQ, uQ)) return;
                throw WQ
              } finally {
                wQ._rebuildSingle = bQ, "pbr" === wQ._materialFamily && xQ && (GQ._pbrGeomContext = pQ)
              }
              if (!tQ(QQ, FQ, wQ, kQ, mQ, uQ)) return eQ(QQ, FQ, kQ, HQ), void MQ(QQ, FQ);
              for (let LQ = QQ._renderables.length - 1; LQ >= 0; LQ--) QQ._renderables[LQ].mesh === kQ && QQ._renderables.splice(LQ, 1);
              if (HQ) {
                for (const FQ of HQ) {
                  const wQ = QQ._disposables.indexOf(FQ);
                  wQ >= 0 && QQ._disposables.splice(wQ, 1);
                  const LQ = FQ.p;
                  if (LQ) {
                    LQ._disposed = !0;
                    const QQ = LQ._owner;
                    if (QQ) {
                      const FQ = QQ.indexOf(LQ);
                      FQ >= 0 && QQ.splice(FQ, 1), LQ._owner = void 0, 0 === QQ.length && LQ._onOwnerEmpty?.()
                    } else LQ._onOwnerEmpty?.();
                    LQ._onOwnerEmpty && (LQ._onOwnerEmpty = void 0)
                  }
                }(0, LQ.e)(QQ.surface.engine, (() => {
                  for (const QQ of HQ) QQ()
                }))
              }
              DQ(FQ, kQ, HQ), QQ._renderables.push(...CQ.renderables);
              const SQ = QQ._groups.get(wQ);
              SQ && (SQ.o = [...(SQ.o ?? []).filter((QQ => QQ.mesh !== kQ)), ...CQ.renderables]);
              CQ.updater && QQ._uniformUpdaters.push(CQ.updater);
              xQ && function(QQ, FQ) {
                const wQ = new Set(QQ._disposables.slice(0, FQ));
                for (let LQ = QQ._disposables.length - 1; LQ >= FQ; LQ--) wQ.has(QQ._disposables[LQ]) && QQ._disposables.splice(LQ, 1)
              }(QQ, AQ);
              "pbr" === wQ._materialFamily && xQ && cQ && (GQ._pbrMeshGeomContexts ??= new WeakMap).set(kQ, cQ);
              (function(QQ, FQ, wQ, LQ, qQ, oQ) {
                let DQ = vQ?.get(wQ);
                if (!DQ) {
                  const QQ = new WeakMap,
                    FQ = new WeakMap,
                    LQ = (LQ, qQ, oQ, DQ) => {
                      const kQ = QQ.get(LQ)?.get(qQ);
                      if (kQ) return kQ(LQ, qQ, oQ, DQ);
                      const vQ = FQ.get(LQ) ?? LQ._groups.get(wQ)?.r;
                      if (vQ) return vQ(LQ, qQ, oQ, DQ);
                      throw new Error("Material group has not completed its initial build")
                    };
                  DQ = {
                    N7: FQ,
                    dispatch: LQ,
                    scenes: QQ
                  }, (vQ ??= new WeakMap).set(wQ, DQ)
                }
                let kQ = DQ.scenes.get(QQ);
                kQ || (kQ = new WeakMap, DQ.scenes.set(QQ, kQ));
                kQ.set(LQ, qQ), DQ.N7.has(QQ) || DQ.N7.set(QQ, oQ ?? qQ);
                const mQ = QQ._groups.get(wQ);
                mQ && (mQ.r = DQ.dispatch);
                let uQ = FQ.installed.get(LQ);
                uQ || (uQ = new Set, FQ.installed.set(LQ, uQ));
                uQ.add(wQ), FQ.installedMeshes.add(LQ)
              })(QQ, FQ, wQ, kQ, CQ.rebuildSingle, xQ ? YQ : CQ.rebuildSingle), kQ.material._csmGen = (kQ.material._csmGen ?? 0) + 1;
              const iQ = QQ._groups.get(wQ);
              iQ && !xQ && (iQ.r = CQ.rebuildSingle);
              QQ._renderables.sort(qQ), QQ._renderableVersion++, QQ._materialEpoch++
            }(QQ, FQ, wQ, uQ, bQ, HQ))).catch((LQ => {
              throw tQ(QQ, FQ, wQ, uQ, bQ, HQ) && (FQ.error = LQ instanceof Error ? LQ : new Error("Runtime mesh build failed", {
                cause: LQ
              })), LQ
            })).finally((() => {
              AQ(), FQ.tail === GQ && (FQ.tail = null), kQ?.get(wQ) === GQ && kQ.delete(wQ)
            })).finally((() => {
              FQ.chains.get(uQ) === pQ && FQ.chains.delete(uQ)
            }));
            return FQ.chains.set(uQ, pQ), mQ.track(pQ)
          },
          all: () => Promise.all(FQ.active).then((() => {})),
          track: QQ => {
            const wQ = QQ.finally((() => FQ.active.delete(wQ)));
            return FQ.active.add(wQ), Promise.all(FQ.active).then((() => {}))
          },
          base: (FQ, wQ) => {
            const LQ = vQ?.get(FQ);
            return LQ && LQ.N7.set(QQ, wQ), LQ?.dispatch ?? wQ
          },
          get w() {
            return !!FQ.tail
          },
          pendingDisposers: QQ => FQ.pendingDisposers.get(QQ),
          holdPendingDisposers: (QQ, wQ) => oQ(FQ, QQ, wQ),
          releasePendingDisposers: (QQ, wQ) => DQ(FQ, QQ, wQ),
          reset: LQ => {
            AQ(QQ, FQ, LQ), wQ._pbrMeshGeomContexts?.delete(LQ)
          },
          remove: LQ => {
            FQ.generations.set(LQ, (FQ.generations.get(LQ) ?? 0) + 1), FQ.chains.delete(LQ), xQ(QQ, FQ, LQ), wQ._pbrMeshGeomContexts?.delete(LQ)
          },
          dropBase: FQ => {
            const wQ = vQ?.get(FQ);
            wQ && (wQ.N7.delete(QQ), wQ.scenes.delete(QQ))
          },
          wait: async QQ => {
            const wQ = new Set;
            for (const LQ of QQ) {
              const QQ = FQ.chains.get(LQ);
              QQ && wQ.add(QQ)
            }
            await Promise.all(wQ)
          },
          _e: function() {
            let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (FQ.error) {
              const wQ = FQ.error;
              throw QQ && (FQ.error = null), wQ
            }
          },
          _x: QQ => {
            FQ.error = QQ instanceof Error ? QQ : new Error("Runtime mesh build failed", {
              cause: QQ
            })
          },
          _d: () => FQ.kx,
          exclusive: (QQ, wQ) => {
            const LQ = [];
            FQ.tail && LQ.push(FQ.tail);
            const qQ = kQ?.get(QQ);
            qQ && LQ.push(qQ);
            const oQ = Promise.all(LQ).then(wQ),
              DQ = oQ.then((() => {}), (() => {}));
            return FQ.tail = DQ, (kQ ??= new WeakMap).set(QQ, DQ), DQ.then((() => {
              FQ.tail === DQ && (FQ.tail = null), kQ?.get(QQ) === DQ && kQ.delete(QQ)
            })), oQ
          }
        };
      return QQ._runtimeBuilds = mQ, (QQ._beforeRender ??= []).push((() => {
        mQ._e()
      })), QQ._disposables.push((() => {
        FQ.kx = !0, FQ.active.clear();
        for (const wQ of FQ.installedMeshes) AQ(QQ, FQ, wQ);
        for (const FQ of QQ._groups.keys()) vQ?.get(FQ)?.N7.delete(QQ);
        QQ._runtimeBuilds = void 0, wQ._pbrMeshGeomContexts = void 0
      })), mQ
    }

    function xQ(QQ, FQ, wQ) {
      const LQ = FQ.installed.get(wQ);
      if (LQ) {
        for (const FQ of LQ) vQ?.get(FQ)?.scenes.get(QQ)?.delete(wQ);
        FQ.installed.delete(wQ), FQ.installedMeshes.delete(wQ)
      }
    }

    function AQ(QQ, FQ, wQ) {
      xQ(QQ, FQ, wQ)
    }

    function tQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      return !FQ.kx && FQ.generations.get(LQ) === oQ && QQ.meshes.includes(LQ) && LQ.material === qQ && qQ._buildGroup === wQ
    }

    function eQ(QQ, FQ, wQ, qQ) {
      const oQ = QQ._meshDisposables.get(wQ);
      if (oQ && oQ !== qQ) {
        QQ._meshDisposables.delete(wQ);
        for (const QQ of oQ) QQ()
      }
      if (qQ)
        if (QQ.meshes.includes(wQ)) QQ._meshDisposables.set(wQ, qQ);
        else if (FQ.kx)
        for (const LQ of qQ) LQ();
      else(0, LQ.e)(QQ.surface.engine, (() => {
        for (const QQ of qQ) QQ()
      }));
      DQ(FQ, wQ, qQ)
    }

    function MQ(QQ, FQ) {
      if (!FQ.kx) return;
      const wQ = QQ._disposables.splice(0);
      for (const LQ of wQ) LQ()
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);