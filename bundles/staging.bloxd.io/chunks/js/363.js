export const id = 363;
export const ids = [363];
export const modules = {
  61035: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      A: () => qC,
      B: () => WC,
      C: () => FC,
      X: () => NC
    });
    var QC = ZC(41540),
      wC = (CC, zC) => CC.order - zC.order;

    function bC(CC, zC, ZC) {
      CC.pendingDisposers.set(zC, ZC)
    }

    function nC(CC, zC, ZC) {
      ZC && CC.pendingDisposers.get(zC) === ZC && CC.pendingDisposers.delete(zC)
    }
    var fC = null,
      oC = null;

    function qC(CC, zC, ZC, QC) {
      if (!zC || ZC.material !== zC) return QC ?? Promise.resolve();
      const wC = WC(CC, zC._buildGroup, ZC);
      return QC ? Promise.all([QC, wC]).then((() => {})) : wC
    }

    function FC(CC, zC, ZC) {
      let QC = ZC;
      for (const wC of zC) {
        const zC = Array.isArray(wC),
          ZC = zC ? wC[0] : wC;
        QC = qC(CC, zC ? wC[1] : ZC.material, ZC, QC)
      }
      return (QC ?? Promise.resolve()).catch((zC => {
        CC._runtimeBuilds?._x(zC)
      }))
    }

    function WC(CC, zC, QC) {
      if (CC._z || !CC.meshes.includes(QC)) return CC._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(CC, zC, ZC) {
          for (const [wC, bC] of CC._groups)
            if (wC !== zC) {
              const CC = bC.indexOf(ZC);
              CC >= 0 && bC.splice(CC, 1)
            } let QC = CC._groups.get(zC);
          QC || (QC = [], CC._groups.set(zC, QC));
          QC.includes(ZC) || QC.push(ZC)
        }(CC, zC, QC), "pbr" === zC._materialFamily && (CC._built || CC._groups.get(zC)?.r)) {
        const zC = CC._runtimeBuilds ?? MC(CC),
          QC = ZC.e(393).then((() => ZC(61555))).then((zC => {
            let {
              rebuildScenePbrPipelines: ZC
            } = zC;
            return CC._z ? void 0 : ZC(CC, !0)
          })).catch((zC => {
            CC._runtimeBuilds?._x(zC)
          }));
        return zC.track(QC)
      }
      return (CC._runtimeBuilds ?? MC(CC)).queue(zC, QC).catch((() => {}))
    }

    function NC(CC, zC, ZC) {
      return CC._z ? Promise.resolve(void 0) : (CC._runtimeBuilds ?? MC(CC)).exclusive(zC, ZC)
    }

    function MC(CC) {
      const zC = {
          Sg: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ZC = CC,
        qC = {
          queue: (ZC, FC) => {
            const WC = (zC.generations.get(FC) ?? 0) + 1,
              NC = FC.material;
            zC.generations.set(FC, WC);
            const MC = zC.chains.get(FC),
              gC = [zC.tail, fC?.get(ZC)].filter((CC => !!CC));
            let SC = () => {};
            const RC = new Promise((CC => {
              SC = CC
            }));
            zC.tail = RC, (fC ??= new WeakMap).set(ZC, RC);
            const AC = (MC ? MC.catch((() => {})) : Promise.resolve()).then((() => Promise.all(gC))).then((() => async function(CC, zC, ZC, fC, qC, FC) {
              if (!pC(CC, zC, ZC, fC, qC, FC)) return;
              const WC = CC._meshDisposables.get(fC);
              WC && (CC._meshDisposables.delete(fC), bC(zC, fC, WC));
              const NC = ZC._rebuildSingle,
                MC = oC?.get(ZC)?.o_.get(CC) ?? CC._groups.get(ZC)?.r,
                gC = !!CC._groups.get(ZC)?.r,
                SC = CC._disposables.length,
                RC = CC,
                AC = RC._pbrGeomContext;
              let xC, JC;
              try {
                JC = await ZC(CC, [fC]), xC = RC._pbrGeomContext
              } catch (vC) {
                if (PC(CC, zC, fC, WC), GC(CC, zC), !pC(CC, zC, ZC, fC, qC, FC)) return;
                throw vC
              } finally {
                ZC._rebuildSingle = NC, "pbr" === ZC._materialFamily && gC && (RC._pbrGeomContext = AC)
              }
              if (!pC(CC, zC, ZC, fC, qC, FC)) return PC(CC, zC, fC, WC), void GC(CC, zC);
              for (let QC = CC._renderables.length - 1; QC >= 0; QC--) CC._renderables[QC].mesh === fC && CC._renderables.splice(QC, 1);
              if (WC) {
                for (const zC of WC) {
                  const ZC = CC._disposables.indexOf(zC);
                  ZC >= 0 && CC._disposables.splice(ZC, 1);
                  const QC = zC.p;
                  if (QC) {
                    QC._disposed = !0;
                    const CC = QC._owner;
                    if (CC) {
                      const zC = CC.indexOf(QC);
                      zC >= 0 && CC.splice(zC, 1), QC._owner = void 0, 0 === CC.length && QC._onOwnerEmpty?.()
                    } else QC._onOwnerEmpty?.();
                    QC._onOwnerEmpty && (QC._onOwnerEmpty = void 0)
                  }
                }(0, QC.b)(CC.surface.engine, (() => {
                  for (const CC of WC) CC()
                }))
              }
              nC(zC, fC, WC), CC._renderables.push(...JC.renderables);
              const IC = CC._groups.get(ZC);
              IC && (IC.o = [...(IC.o ?? []).filter((CC => CC.mesh !== fC)), ...JC.renderables]);
              JC.updater && CC._uniformUpdaters.push(JC.updater);
              gC && function(CC, zC) {
                const ZC = new Set(CC._disposables.slice(0, zC));
                for (let QC = CC._disposables.length - 1; QC >= zC; QC--) ZC.has(CC._disposables[QC]) && CC._disposables.splice(QC, 1)
              }(CC, SC);
              "pbr" === ZC._materialFamily && gC && xC && (RC._pbrMeshGeomContexts ??= new WeakMap).set(fC, xC);
              (function(CC, zC, ZC, QC, wC, bC) {
                let nC = oC?.get(ZC);
                if (!nC) {
                  const CC = new WeakMap,
                    zC = new WeakMap,
                    QC = (QC, wC, bC, nC) => {
                      const fC = CC.get(QC)?.get(wC);
                      if (fC) return fC(QC, wC, bC, nC);
                      const oC = zC.get(QC) ?? QC._groups.get(ZC)?.r;
                      if (oC) return oC(QC, wC, bC, nC);
                      throw new Error("Material group has not completed its initial build")
                    };
                  nC = {
                    o_: zC,
                    dispatch: QC,
                    scenes: CC
                  }, (oC ??= new WeakMap).set(ZC, nC)
                }
                let fC = nC.scenes.get(CC);
                fC || (fC = new WeakMap, nC.scenes.set(CC, fC));
                fC.set(QC, wC), nC.o_.has(CC) || nC.o_.set(CC, bC ?? wC);
                const qC = CC._groups.get(ZC);
                qC && (qC.r = nC.dispatch);
                let FC = zC.installed.get(QC);
                FC || (FC = new Set, zC.installed.set(QC, FC));
                FC.add(ZC), zC.installedMeshes.add(QC)
              })(CC, zC, ZC, fC, JC.rebuildSingle, gC ? MC : JC.rebuildSingle), fC.material._csmGen = (fC.material._csmGen ?? 0) + 1;
              const iC = CC._groups.get(ZC);
              iC && !gC && (iC.r = JC.rebuildSingle);
              CC._renderables.sort(wC), CC._renderableVersion++, CC._materialEpoch++
            }(CC, zC, ZC, FC, NC, WC))).catch((QC => {
              throw pC(CC, zC, ZC, FC, NC, WC) && (zC.error = QC instanceof Error ? QC : new Error("Runtime mesh build failed", {
                cause: QC
              })), QC
            })).finally((() => {
              SC(), zC.tail === RC && (zC.tail = null), fC?.get(ZC) === RC && fC.delete(ZC)
            })).finally((() => {
              zC.chains.get(FC) === AC && zC.chains.delete(FC)
            }));
            return zC.chains.set(FC, AC), qC.track(AC)
          },
          all: () => Promise.all(zC.active).then((() => {})),
          track: CC => {
            const ZC = CC.finally((() => zC.active.delete(ZC)));
            return zC.active.add(ZC), Promise.all(zC.active).then((() => {}))
          },
          base: (zC, ZC) => {
            const QC = oC?.get(zC);
            return QC && QC.o_.set(CC, ZC), QC?.dispatch ?? ZC
          },
          get w() {
            return !!zC.tail
          },
          pendingDisposers: CC => zC.pendingDisposers.get(CC),
          holdPendingDisposers: (CC, ZC) => bC(zC, CC, ZC),
          releasePendingDisposers: (CC, ZC) => nC(zC, CC, ZC),
          reset: QC => {
            SC(CC, zC, QC), ZC._pbrMeshGeomContexts?.delete(QC)
          },
          remove: QC => {
            zC.generations.set(QC, (zC.generations.get(QC) ?? 0) + 1), zC.chains.delete(QC), gC(CC, zC, QC), ZC._pbrMeshGeomContexts?.delete(QC)
          },
          dropBase: zC => {
            const ZC = oC?.get(zC);
            ZC && (ZC.o_.delete(CC), ZC.scenes.delete(CC))
          },
          wait: async CC => {
            const ZC = new Set;
            for (const QC of CC) {
              const CC = zC.chains.get(QC);
              CC && ZC.add(CC)
            }
            await Promise.all(ZC)
          },
          _e: function() {
            let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (zC.error) {
              const ZC = zC.error;
              throw CC && (zC.error = null), ZC
            }
          },
          _x: CC => {
            zC.error = CC instanceof Error ? CC : new Error("Runtime mesh build failed", {
              cause: CC
            })
          },
          _d: () => zC.Sg,
          exclusive: (CC, ZC) => {
            const QC = [];
            zC.tail && QC.push(zC.tail);
            const wC = fC?.get(CC);
            wC && QC.push(wC);
            const bC = Promise.all(QC).then(ZC),
              nC = bC.then((() => {}), (() => {}));
            return zC.tail = nC, (fC ??= new WeakMap).set(CC, nC), nC.then((() => {
              zC.tail === nC && (zC.tail = null), fC?.get(CC) === nC && fC.delete(CC)
            })), bC
          }
        };
      return CC._runtimeBuilds = qC, (CC._beforeRender ??= []).push((() => {
        qC._e()
      })), CC._disposables.push((() => {
        zC.Sg = !0, zC.active.clear();
        for (const ZC of zC.installedMeshes) SC(CC, zC, ZC);
        for (const zC of CC._groups.keys()) oC?.get(zC)?.o_.delete(CC);
        CC._runtimeBuilds = void 0, ZC._pbrMeshGeomContexts = void 0
      })), qC
    }

    function gC(CC, zC, ZC) {
      const QC = zC.installed.get(ZC);
      if (QC) {
        for (const zC of QC) oC?.get(zC)?.scenes.get(CC)?.delete(ZC);
        zC.installed.delete(ZC), zC.installedMeshes.delete(ZC)
      }
    }

    function SC(CC, zC, ZC) {
      gC(CC, zC, ZC)
    }

    function pC(CC, zC, ZC, QC, wC, bC) {
      return !zC.Sg && zC.generations.get(QC) === bC && CC.meshes.includes(QC) && QC.material === wC && wC._buildGroup === ZC
    }

    function PC(CC, zC, ZC, wC) {
      const bC = CC._meshDisposables.get(ZC);
      if (bC && bC !== wC) {
        CC._meshDisposables.delete(ZC);
        for (const CC of bC) CC()
      }
      if (wC)
        if (CC.meshes.includes(ZC)) CC._meshDisposables.set(ZC, wC);
        else if (zC.Sg)
        for (const QC of wC) QC();
      else(0, QC.b)(CC.surface.engine, (() => {
        for (const CC of wC) CC()
      }));
      nC(zC, ZC, wC)
    }

    function GC(CC, zC) {
      if (!zC.Sg) return;
      const ZC = CC._disposables.splice(0);
      for (const QC of ZC) QC()
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);