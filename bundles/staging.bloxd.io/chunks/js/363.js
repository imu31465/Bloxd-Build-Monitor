export const id = 363;
export const ids = [363];
export const modules = {
  61433: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      A: () => uS,
      B: () => fS,
      C: () => IS,
      X: () => kS
    });
    var tS = gS(41737),
      bS = (SS, HS) => SS.order - HS.order;

    function XS(SS, HS, gS) {
      SS.pendingDisposers.set(HS, gS)
    }

    function xS(SS, HS, gS) {
      gS && SS.pendingDisposers.get(HS) === gS && SS.pendingDisposers.delete(HS)
    }
    var NS = null,
      qS = null;

    function uS(SS, HS, gS, tS) {
      if (!HS || gS.material !== HS) return tS ?? Promise.resolve();
      const bS = fS(SS, HS._buildGroup, gS);
      return tS ? Promise.all([tS, bS]).then((() => {})) : bS
    }

    function IS(SS, HS, gS) {
      let tS = gS;
      for (const bS of HS) {
        const HS = Array.isArray(bS),
          gS = HS ? bS[0] : bS;
        tS = uS(SS, HS ? bS[1] : gS.material, gS, tS)
      }
      return (tS ?? Promise.resolve()).catch((HS => {
        SS._runtimeBuilds?._x(HS)
      }))
    }

    function fS(SS, HS, tS) {
      if (SS._z || !SS.meshes.includes(tS)) return SS._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(SS, HS, gS) {
          for (const [bS, XS] of SS._groups)
            if (bS !== HS) {
              const SS = XS.indexOf(gS);
              SS >= 0 && XS.splice(SS, 1)
            } let tS = SS._groups.get(HS);
          tS || (tS = [], SS._groups.set(HS, tS));
          tS.includes(gS) || tS.push(gS)
        }(SS, HS, tS), "pbr" === HS._materialFamily && (SS._built || SS._groups.get(HS)?.r)) {
        const HS = SS._runtimeBuilds ?? aS(SS),
          tS = gS.e(393).then((() => gS(61983))).then((HS => {
            let {
              rebuildScenePbrPipelines: gS
            } = HS;
            return SS._z ? void 0 : gS(SS, !0)
          })).catch((HS => {
            SS._runtimeBuilds?._x(HS)
          }));
        return HS.track(tS)
      }
      return (SS._runtimeBuilds ?? aS(SS)).queue(HS, tS).catch((() => {}))
    }

    function kS(SS, HS, gS) {
      return SS._z ? Promise.resolve(void 0) : (SS._runtimeBuilds ?? aS(SS)).exclusive(HS, gS)
    }

    function aS(SS) {
      const HS = {
          nK: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        gS = SS,
        uS = {
          queue: (gS, IS) => {
            const fS = (HS.generations.get(IS) ?? 0) + 1,
              kS = IS.material;
            HS.generations.set(IS, fS);
            const aS = HS.chains.get(IS),
              KS = [HS.tail, NS?.get(gS)].filter((SS => !!SS));
            let jS = () => {};
            const PS = new Promise((SS => {
              jS = SS
            }));
            HS.tail = PS, (NS ??= new WeakMap).set(gS, PS);
            const QS = (aS ? aS.catch((() => {})) : Promise.resolve()).then((() => Promise.all(KS))).then((() => async function(SS, HS, gS, NS, uS, IS) {
              if (!GS(SS, HS, gS, NS, uS, IS)) return;
              const fS = SS._meshDisposables.get(NS);
              fS && (SS._meshDisposables.delete(NS), XS(HS, NS, fS));
              const kS = gS._rebuildSingle,
                aS = qS?.get(gS)?.r_.get(SS) ?? SS._groups.get(gS)?.r,
                KS = !!SS._groups.get(gS)?.r,
                jS = SS._disposables.length,
                PS = SS,
                QS = PS._pbrGeomContext;
              let DS, wS;
              try {
                wS = await gS(SS, [NS]), DS = PS._pbrGeomContext
              } catch (JS) {
                if (CS(SS, HS, NS, fS), nS(SS, HS), !GS(SS, HS, gS, NS, uS, IS)) return;
                throw JS
              } finally {
                gS._rebuildSingle = kS, "pbr" === gS._materialFamily && KS && (PS._pbrGeomContext = QS)
              }
              if (!GS(SS, HS, gS, NS, uS, IS)) return CS(SS, HS, NS, fS), void nS(SS, HS);
              for (let tS = SS._renderables.length - 1; tS >= 0; tS--) SS._renderables[tS].mesh === NS && SS._renderables.splice(tS, 1);
              if (fS) {
                for (const HS of fS) {
                  const gS = SS._disposables.indexOf(HS);
                  gS >= 0 && SS._disposables.splice(gS, 1);
                  const tS = HS.p;
                  if (tS) {
                    tS._disposed = !0;
                    const SS = tS._owner;
                    if (SS) {
                      const HS = SS.indexOf(tS);
                      HS >= 0 && SS.splice(HS, 1), tS._owner = void 0, 0 === SS.length && tS._onOwnerEmpty?.()
                    } else tS._onOwnerEmpty?.();
                    tS._onOwnerEmpty && (tS._onOwnerEmpty = void 0)
                  }
                }(0, tS.c)(SS.surface.engine, (() => {
                  for (const SS of fS) SS()
                }))
              }
              xS(HS, NS, fS), SS._renderables.push(...wS.renderables);
              const hS = SS._groups.get(gS);
              hS && (hS.o = [...(hS.o ?? []).filter((SS => SS.mesh !== NS)), ...wS.renderables]);
              wS.updater && SS._uniformUpdaters.push(wS.updater);
              KS && function(SS, HS) {
                const gS = new Set(SS._disposables.slice(0, HS));
                for (let tS = SS._disposables.length - 1; tS >= HS; tS--) gS.has(SS._disposables[tS]) && SS._disposables.splice(tS, 1)
              }(SS, jS);
              "pbr" === gS._materialFamily && KS && DS && (PS._pbrMeshGeomContexts ??= new WeakMap).set(NS, DS);
              (function(SS, HS, gS, tS, bS, XS) {
                let xS = qS?.get(gS);
                if (!xS) {
                  const SS = new WeakMap,
                    HS = new WeakMap,
                    tS = (tS, bS, XS, xS) => {
                      const NS = SS.get(tS)?.get(bS);
                      if (NS) return NS(tS, bS, XS, xS);
                      const qS = HS.get(tS) ?? tS._groups.get(gS)?.r;
                      if (qS) return qS(tS, bS, XS, xS);
                      throw new Error("Material group has not completed its initial build")
                    };
                  xS = {
                    r_: HS,
                    dispatch: tS,
                    scenes: SS
                  }, (qS ??= new WeakMap).set(gS, xS)
                }
                let NS = xS.scenes.get(SS);
                NS || (NS = new WeakMap, xS.scenes.set(SS, NS));
                NS.set(tS, bS), xS.r_.has(SS) || xS.r_.set(SS, XS ?? bS);
                const uS = SS._groups.get(gS);
                uS && (uS.r = xS.dispatch);
                let IS = HS.installed.get(tS);
                IS || (IS = new Set, HS.installed.set(tS, IS));
                IS.add(gS), HS.installedMeshes.add(tS)
              })(SS, HS, gS, NS, wS.rebuildSingle, KS ? aS : wS.rebuildSingle), NS.material._csmGen = (NS.material._csmGen ?? 0) + 1;
              const ZS = SS._groups.get(gS);
              ZS && !KS && (ZS.r = wS.rebuildSingle);
              SS._renderables.sort(bS), SS._renderableVersion++, SS._materialEpoch++
            }(SS, HS, gS, IS, kS, fS))).catch((tS => {
              throw GS(SS, HS, gS, IS, kS, fS) && (HS.error = tS instanceof Error ? tS : new Error("Runtime mesh build failed", {
                cause: tS
              })), tS
            })).finally((() => {
              jS(), HS.tail === PS && (HS.tail = null), NS?.get(gS) === PS && NS.delete(gS)
            })).finally((() => {
              HS.chains.get(IS) === QS && HS.chains.delete(IS)
            }));
            return HS.chains.set(IS, QS), uS.track(QS)
          },
          all: () => Promise.all(HS.active).then((() => {})),
          track: SS => {
            const gS = SS.finally((() => HS.active.delete(gS)));
            return HS.active.add(gS), Promise.all(HS.active).then((() => {}))
          },
          base: (HS, gS) => {
            const tS = qS?.get(HS);
            return tS && tS.r_.set(SS, gS), tS?.dispatch ?? gS
          },
          get w() {
            return !!HS.tail
          },
          pendingDisposers: SS => HS.pendingDisposers.get(SS),
          holdPendingDisposers: (SS, gS) => XS(HS, SS, gS),
          releasePendingDisposers: (SS, gS) => xS(HS, SS, gS),
          reset: tS => {
            jS(SS, HS, tS), gS._pbrMeshGeomContexts?.delete(tS)
          },
          remove: tS => {
            HS.generations.set(tS, (HS.generations.get(tS) ?? 0) + 1), HS.chains.delete(tS), KS(SS, HS, tS), gS._pbrMeshGeomContexts?.delete(tS)
          },
          dropBase: HS => {
            const gS = qS?.get(HS);
            gS && (gS.r_.delete(SS), gS.scenes.delete(SS))
          },
          wait: async SS => {
            const gS = new Set;
            for (const tS of SS) {
              const SS = HS.chains.get(tS);
              SS && gS.add(SS)
            }
            await Promise.all(gS)
          },
          _e: function() {
            let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (HS.error) {
              const gS = HS.error;
              throw SS && (HS.error = null), gS
            }
          },
          _x: SS => {
            HS.error = SS instanceof Error ? SS : new Error("Runtime mesh build failed", {
              cause: SS
            })
          },
          _d: () => HS.nK,
          exclusive: (SS, gS) => {
            const tS = [];
            HS.tail && tS.push(HS.tail);
            const bS = NS?.get(SS);
            bS && tS.push(bS);
            const XS = Promise.all(tS).then(gS),
              xS = XS.then((() => {}), (() => {}));
            return HS.tail = xS, (NS ??= new WeakMap).set(SS, xS), xS.then((() => {
              HS.tail === xS && (HS.tail = null), NS?.get(SS) === xS && NS.delete(SS)
            })), XS
          }
        };
      return SS._runtimeBuilds = uS, (SS._beforeRender ??= []).push((() => {
        uS._e()
      })), SS._disposables.push((() => {
        HS.nK = !0, HS.active.clear();
        for (const gS of HS.installedMeshes) jS(SS, HS, gS);
        for (const HS of SS._groups.keys()) qS?.get(HS)?.r_.delete(SS);
        SS._runtimeBuilds = void 0, gS._pbrMeshGeomContexts = void 0
      })), uS
    }

    function KS(SS, HS, gS) {
      const tS = HS.installed.get(gS);
      if (tS) {
        for (const HS of tS) qS?.get(HS)?.scenes.get(SS)?.delete(gS);
        HS.installed.delete(gS), HS.installedMeshes.delete(gS)
      }
    }

    function jS(SS, HS, gS) {
      KS(SS, HS, gS)
    }

    function GS(SS, HS, gS, tS, bS, XS) {
      return !HS.nK && HS.generations.get(tS) === XS && SS.meshes.includes(tS) && tS.material === bS && bS._buildGroup === gS
    }

    function CS(SS, HS, gS, bS) {
      const XS = SS._meshDisposables.get(gS);
      if (XS && XS !== bS) {
        SS._meshDisposables.delete(gS);
        for (const SS of XS) SS()
      }
      if (bS)
        if (SS.meshes.includes(gS)) SS._meshDisposables.set(gS, bS);
        else if (HS.nK)
        for (const tS of bS) tS();
      else(0, tS.c)(SS.surface.engine, (() => {
        for (const SS of bS) SS()
      }));
      xS(HS, gS, bS)
    }

    function nS(SS, HS) {
      if (!HS.nK) return;
      const gS = SS._disposables.splice(0);
      for (const tS of gS) tS()
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);