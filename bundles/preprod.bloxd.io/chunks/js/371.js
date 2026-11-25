export const id = 371;
export const ids = [371];
export const modules = {
  61644: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      A: () => PQ,
      B: () => JQ,
      C: () => gQ,
      X: () => rQ
    });
    var wQ = XQ(41963),
      qQ = (QQ, WQ) => QQ.order - WQ.order;

    function TQ(QQ, WQ, XQ) {
      QQ.pendingDisposers.set(WQ, XQ)
    }

    function zQ(QQ, WQ, XQ) {
      XQ && QQ.pendingDisposers.get(WQ) === XQ && QQ.pendingDisposers.delete(WQ)
    }
    var sQ = null,
      FQ = null;

    function PQ(QQ, WQ, XQ, wQ) {
      if (!WQ || XQ.material !== WQ) return wQ ?? Promise.resolve();
      const qQ = JQ(QQ, WQ._buildGroup, XQ);
      return wQ ? Promise.all([wQ, qQ]).then((() => {})) : qQ
    }

    function gQ(QQ, WQ, XQ) {
      let wQ = XQ;
      for (const qQ of WQ) {
        const WQ = Array.isArray(qQ),
          XQ = WQ ? qQ[0] : qQ;
        wQ = PQ(QQ, WQ ? qQ[1] : XQ.material, XQ, wQ)
      }
      return (wQ ?? Promise.resolve()).catch((WQ => {
        QQ._runtimeBuilds?._x(WQ)
      }))
    }

    function JQ(QQ, WQ, wQ) {
      if (QQ._z || !QQ.meshes.includes(wQ)) return QQ._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(QQ, WQ, XQ) {
          for (const [qQ, TQ] of QQ._groups)
            if (qQ !== WQ) {
              const QQ = TQ.indexOf(XQ);
              QQ >= 0 && TQ.splice(QQ, 1)
            } let wQ = QQ._groups.get(WQ);
          wQ || (wQ = [], QQ._groups.set(WQ, wQ));
          wQ.includes(XQ) || wQ.push(XQ)
        }(QQ, WQ, wQ), "pbr" === WQ._materialFamily && (QQ._built || QQ._groups.get(WQ)?.r)) {
        const WQ = QQ._runtimeBuilds ?? IQ(QQ),
          wQ = XQ.e(401).then((() => XQ(62170))).then((WQ => {
            let {
              rebuildScenePbrPipelines: XQ
            } = WQ;
            return QQ._z ? void 0 : XQ(QQ, !0)
          })).catch((WQ => {
            QQ._runtimeBuilds?._x(WQ)
          }));
        return WQ.track(wQ)
      }
      return (QQ._runtimeBuilds ?? IQ(QQ)).queue(WQ, wQ).catch((() => {}))
    }

    function rQ(QQ, WQ, XQ) {
      return QQ._z ? Promise.resolve(void 0) : (QQ._runtimeBuilds ?? IQ(QQ)).exclusive(WQ, XQ)
    }

    function IQ(QQ) {
      const WQ = {
          zj: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        XQ = QQ,
        PQ = {
          queue: (XQ, gQ) => {
            const JQ = (WQ.generations.get(gQ) ?? 0) + 1,
              rQ = gQ.material;
            WQ.generations.set(gQ, JQ);
            const IQ = WQ.chains.get(gQ),
              jQ = [WQ.tail, sQ?.get(XQ)].filter((QQ => !!QQ));
            let BQ = () => {};
            const pQ = new Promise((QQ => {
              BQ = QQ
            }));
            WQ.tail = pQ, (sQ ??= new WeakMap).set(XQ, pQ);
            const GQ = (IQ ? IQ.catch((() => {})) : Promise.resolve()).then((() => Promise.all(jQ))).then((() => async function(QQ, WQ, XQ, sQ, PQ, gQ) {
              if (!yQ(QQ, WQ, XQ, sQ, PQ, gQ)) return;
              const JQ = QQ._meshDisposables.get(sQ);
              JQ && (QQ._meshDisposables.delete(sQ), TQ(WQ, sQ, JQ));
              const rQ = XQ._rebuildSingle,
                IQ = FQ?.get(XQ)?.E_.get(QQ) ?? QQ._groups.get(XQ)?.r,
                jQ = !!QQ._groups.get(XQ)?.r,
                BQ = QQ._disposables.length,
                pQ = QQ,
                GQ = pQ._pbrGeomContext;
              let UQ, bQ;
              try {
                bQ = await XQ(QQ, [sQ]), UQ = pQ._pbrGeomContext
              } catch (HQ) {
                if (VQ(QQ, WQ, sQ, JQ), DQ(QQ, WQ), !yQ(QQ, WQ, XQ, sQ, PQ, gQ)) return;
                throw HQ
              } finally {
                XQ._rebuildSingle = rQ, "pbr" === XQ._materialFamily && jQ && (pQ._pbrGeomContext = GQ)
              }
              if (!yQ(QQ, WQ, XQ, sQ, PQ, gQ)) return VQ(QQ, WQ, sQ, JQ), void DQ(QQ, WQ);
              for (let wQ = QQ._renderables.length - 1; wQ >= 0; wQ--) QQ._renderables[wQ].mesh === sQ && QQ._renderables.splice(wQ, 1);
              if (JQ) {
                for (const WQ of JQ) {
                  const XQ = QQ._disposables.indexOf(WQ);
                  XQ >= 0 && QQ._disposables.splice(XQ, 1);
                  const wQ = WQ.p;
                  if (wQ) {
                    wQ._disposed = !0;
                    const QQ = wQ._owner;
                    if (QQ) {
                      const WQ = QQ.indexOf(wQ);
                      WQ >= 0 && QQ.splice(WQ, 1), wQ._owner = void 0, 0 === QQ.length && wQ._onOwnerEmpty?.()
                    } else wQ._onOwnerEmpty?.();
                    wQ._onOwnerEmpty && (wQ._onOwnerEmpty = void 0)
                  }
                }(0, wQ.g)(QQ.surface.engine, (() => {
                  for (const QQ of JQ) QQ()
                }))
              }
              zQ(WQ, sQ, JQ), QQ._renderables.push(...bQ.renderables);
              const vQ = QQ._groups.get(XQ);
              vQ && (vQ.o = [...(vQ.o ?? []).filter((QQ => QQ.mesh !== sQ)), ...bQ.renderables]);
              bQ.updater && QQ._uniformUpdaters.push(bQ.updater);
              jQ && function(QQ, WQ) {
                const XQ = new Set(QQ._disposables.slice(0, WQ));
                for (let wQ = QQ._disposables.length - 1; wQ >= WQ; wQ--) XQ.has(QQ._disposables[wQ]) && QQ._disposables.splice(wQ, 1)
              }(QQ, BQ);
              "pbr" === XQ._materialFamily && jQ && UQ && (pQ._pbrMeshGeomContexts ??= new WeakMap).set(sQ, UQ);
              (function(QQ, WQ, XQ, wQ, qQ, TQ) {
                let zQ = FQ?.get(XQ);
                if (!zQ) {
                  const QQ = new WeakMap,
                    WQ = new WeakMap,
                    wQ = (wQ, qQ, TQ, zQ) => {
                      const sQ = QQ.get(wQ)?.get(qQ);
                      if (sQ) return sQ(wQ, qQ, TQ, zQ);
                      const FQ = WQ.get(wQ) ?? wQ._groups.get(XQ)?.r;
                      if (FQ) return FQ(wQ, qQ, TQ, zQ);
                      throw new Error("Material group has not completed its initial build")
                    };
                  zQ = {
                    E_: WQ,
                    dispatch: wQ,
                    scenes: QQ
                  }, (FQ ??= new WeakMap).set(XQ, zQ)
                }
                let sQ = zQ.scenes.get(QQ);
                sQ || (sQ = new WeakMap, zQ.scenes.set(QQ, sQ));
                sQ.set(wQ, qQ), zQ.E_.has(QQ) || zQ.E_.set(QQ, TQ ?? qQ);
                const PQ = QQ._groups.get(XQ);
                PQ && (PQ.r = zQ.dispatch);
                let gQ = WQ.installed.get(wQ);
                gQ || (gQ = new Set, WQ.installed.set(wQ, gQ));
                gQ.add(XQ), WQ.installedMeshes.add(wQ)
              })(QQ, WQ, XQ, sQ, bQ.rebuildSingle, jQ ? IQ : bQ.rebuildSingle), sQ.material._csmGen = (sQ.material._csmGen ?? 0) + 1;
              const dQ = QQ._groups.get(XQ);
              dQ && !jQ && (dQ.r = bQ.rebuildSingle);
              QQ._renderables.sort(qQ), QQ._renderableVersion++, QQ._materialEpoch++
            }(QQ, WQ, XQ, gQ, rQ, JQ))).catch((wQ => {
              throw yQ(QQ, WQ, XQ, gQ, rQ, JQ) && (WQ.error = wQ instanceof Error ? wQ : new Error("Runtime mesh build failed", {
                cause: wQ
              })), wQ
            })).finally((() => {
              BQ(), WQ.tail === pQ && (WQ.tail = null), sQ?.get(XQ) === pQ && sQ.delete(XQ)
            })).finally((() => {
              WQ.chains.get(gQ) === GQ && WQ.chains.delete(gQ)
            }));
            return WQ.chains.set(gQ, GQ), PQ.track(GQ)
          },
          all: () => Promise.all(WQ.active).then((() => {})),
          track: QQ => {
            const XQ = QQ.finally((() => WQ.active.delete(XQ)));
            return WQ.active.add(XQ), Promise.all(WQ.active).then((() => {}))
          },
          base: (WQ, XQ) => {
            const wQ = FQ?.get(WQ);
            return wQ && wQ.E_.set(QQ, XQ), wQ?.dispatch ?? XQ
          },
          get w() {
            return !!WQ.tail
          },
          pendingDisposers: QQ => WQ.pendingDisposers.get(QQ),
          holdPendingDisposers: (QQ, XQ) => TQ(WQ, QQ, XQ),
          releasePendingDisposers: (QQ, XQ) => zQ(WQ, QQ, XQ),
          reset: wQ => {
            BQ(QQ, WQ, wQ), XQ._pbrMeshGeomContexts?.delete(wQ)
          },
          remove: wQ => {
            WQ.generations.set(wQ, (WQ.generations.get(wQ) ?? 0) + 1), WQ.chains.delete(wQ), jQ(QQ, WQ, wQ), XQ._pbrMeshGeomContexts?.delete(wQ)
          },
          dropBase: WQ => {
            const XQ = FQ?.get(WQ);
            XQ && (XQ.E_.delete(QQ), XQ.scenes.delete(QQ))
          },
          wait: async QQ => {
            const XQ = new Set;
            for (const wQ of QQ) {
              const QQ = WQ.chains.get(wQ);
              QQ && XQ.add(QQ)
            }
            await Promise.all(XQ)
          },
          _e: function() {
            let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (WQ.error) {
              const XQ = WQ.error;
              throw QQ && (WQ.error = null), XQ
            }
          },
          _x: QQ => {
            WQ.error = QQ instanceof Error ? QQ : new Error("Runtime mesh build failed", {
              cause: QQ
            })
          },
          _d: () => WQ.zj,
          exclusive: (QQ, XQ) => {
            const wQ = [];
            WQ.tail && wQ.push(WQ.tail);
            const qQ = sQ?.get(QQ);
            qQ && wQ.push(qQ);
            const TQ = Promise.all(wQ).then(XQ),
              zQ = TQ.then((() => {}), (() => {}));
            return WQ.tail = zQ, (sQ ??= new WeakMap).set(QQ, zQ), zQ.then((() => {
              WQ.tail === zQ && (WQ.tail = null), sQ?.get(QQ) === zQ && sQ.delete(QQ)
            })), TQ
          }
        };
      return QQ._runtimeBuilds = PQ, (QQ._beforeRender ??= []).push((() => {
        PQ._e()
      })), QQ._disposables.push((() => {
        WQ.zj = !0, WQ.active.clear();
        for (const XQ of WQ.installedMeshes) BQ(QQ, WQ, XQ);
        for (const WQ of QQ._groups.keys()) FQ?.get(WQ)?.E_.delete(QQ);
        QQ._runtimeBuilds = void 0, XQ._pbrMeshGeomContexts = void 0
      })), PQ
    }

    function jQ(QQ, WQ, XQ) {
      const wQ = WQ.installed.get(XQ);
      if (wQ) {
        for (const WQ of wQ) FQ?.get(WQ)?.scenes.get(QQ)?.delete(XQ);
        WQ.installed.delete(XQ), WQ.installedMeshes.delete(XQ)
      }
    }

    function BQ(QQ, WQ, XQ) {
      jQ(QQ, WQ, XQ)
    }

    function yQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      return !WQ.zj && WQ.generations.get(wQ) === TQ && QQ.meshes.includes(wQ) && wQ.material === qQ && qQ._buildGroup === XQ
    }

    function VQ(QQ, WQ, XQ, qQ) {
      const TQ = QQ._meshDisposables.get(XQ);
      if (TQ && TQ !== qQ) {
        QQ._meshDisposables.delete(XQ);
        for (const QQ of TQ) QQ()
      }
      if (qQ)
        if (QQ.meshes.includes(XQ)) QQ._meshDisposables.set(XQ, qQ);
        else if (WQ.zj)
        for (const wQ of qQ) wQ();
      else(0, wQ.g)(QQ.surface.engine, (() => {
        for (const QQ of qQ) QQ()
      }));
      zQ(WQ, XQ, qQ)
    }

    function DQ(QQ, WQ) {
      if (!WQ.zj) return;
      const XQ = QQ._disposables.splice(0);
      for (const wQ of XQ) wQ()
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);