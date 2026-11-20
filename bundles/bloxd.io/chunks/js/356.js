export const id = 356;
export const ids = [356];
export const modules = {
  61241: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      A: () => cq,
      B: () => Bq,
      C: () => uq,
      X: () => Wq
    });
    var Yq = gq(41489),
      lq = (qq, Eq) => qq.order - Eq.order;

    function Oq(qq, Eq, gq) {
      qq.pendingDisposers.set(Eq, gq)
    }

    function mq(qq, Eq, gq) {
      gq && qq.pendingDisposers.get(Eq) === gq && qq.pendingDisposers.delete(Eq)
    }
    var xq = null,
      Aq = null;

    function cq(qq, Eq, gq, Yq) {
      if (!Eq || gq.material !== Eq) return Yq ?? Promise.resolve();
      const lq = Bq(qq, Eq._buildGroup, gq);
      return Yq ? Promise.all([Yq, lq]).then((() => {})) : lq
    }

    function uq(qq, Eq, gq) {
      let Yq = gq;
      for (const lq of Eq) {
        const Eq = Array.isArray(lq),
          gq = Eq ? lq[0] : lq;
        Yq = cq(qq, Eq ? lq[1] : gq.material, gq, Yq)
      }
      return (Yq ?? Promise.resolve()).catch((Eq => {
        qq._runtimeBuilds?._x(Eq)
      }))
    }

    function Bq(qq, Eq, Yq) {
      if (qq._z || !qq.meshes.includes(Yq)) return qq._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(qq, Eq, gq) {
          for (const [lq, Oq] of qq._groups)
            if (lq !== Eq) {
              const qq = Oq.indexOf(gq);
              qq >= 0 && Oq.splice(qq, 1)
            } let Yq = qq._groups.get(Eq);
          Yq || (Yq = [], qq._groups.set(Eq, Yq));
          Yq.includes(gq) || Yq.push(gq)
        }(qq, Eq, Yq), "pbr" === Eq._materialFamily && (qq._built || qq._groups.get(Eq)?.r)) {
        const Eq = qq._runtimeBuilds ?? Nq(qq),
          Yq = gq.e(386).then((() => gq(61853))).then((Eq => {
            let {
              rebuildScenePbrPipelines: gq
            } = Eq;
            return qq._z ? void 0 : gq(qq, !0)
          })).catch((Eq => {
            qq._runtimeBuilds?._x(Eq)
          }));
        return Eq.track(Yq)
      }
      return (qq._runtimeBuilds ?? Nq(qq)).queue(Eq, Yq).catch((() => {}))
    }

    function Wq(qq, Eq, gq) {
      return qq._z ? Promise.resolve(void 0) : (qq._runtimeBuilds ?? Nq(qq)).exclusive(Eq, gq)
    }

    function Nq(qq) {
      const Eq = {
          eN: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        gq = qq,
        cq = {
          queue: (gq, uq) => {
            const Bq = (Eq.generations.get(uq) ?? 0) + 1,
              Wq = uq.material;
            Eq.generations.set(uq, Bq);
            const Nq = Eq.chains.get(uq),
              aq = [Eq.tail, xq?.get(gq)].filter((qq => !!qq));
            let Vq = () => {};
            const oq = new Promise((qq => {
              Vq = qq
            }));
            Eq.tail = oq, (xq ??= new WeakMap).set(gq, oq);
            const Pq = (Nq ? Nq.catch((() => {})) : Promise.resolve()).then((() => Promise.all(aq))).then((() => async function(qq, Eq, gq, xq, cq, uq) {
              if (!dq(qq, Eq, gq, xq, cq, uq)) return;
              const Bq = qq._meshDisposables.get(xq);
              Bq && (qq._meshDisposables.delete(xq), Oq(Eq, xq, Bq));
              const Wq = gq._rebuildSingle,
                Nq = Aq?.get(gq)?.K4.get(qq) ?? qq._groups.get(gq)?.r,
                aq = !!qq._groups.get(gq)?.r,
                Vq = qq._disposables.length,
                oq = qq,
                Pq = oq._pbrGeomContext;
              let Qq, yq;
              try {
                yq = await gq(qq, [xq]), Qq = oq._pbrGeomContext
              } catch (vq) {
                if (jq(qq, Eq, xq, Bq), Hq(qq, Eq), !dq(qq, Eq, gq, xq, cq, uq)) return;
                throw vq
              } finally {
                gq._rebuildSingle = Wq, "pbr" === gq._materialFamily && aq && (oq._pbrGeomContext = Pq)
              }
              if (!dq(qq, Eq, gq, xq, cq, uq)) return jq(qq, Eq, xq, Bq), void Hq(qq, Eq);
              for (let Yq = qq._renderables.length - 1; Yq >= 0; Yq--) qq._renderables[Yq].mesh === xq && qq._renderables.splice(Yq, 1);
              if (Bq) {
                for (const Eq of Bq) {
                  const gq = qq._disposables.indexOf(Eq);
                  gq >= 0 && qq._disposables.splice(gq, 1);
                  const Yq = Eq.p;
                  if (Yq) {
                    Yq._disposed = !0;
                    const qq = Yq._owner;
                    if (qq) {
                      const Eq = qq.indexOf(Yq);
                      Eq >= 0 && qq.splice(Eq, 1), Yq._owner = void 0, 0 === qq.length && Yq._onOwnerEmpty?.()
                    } else Yq._onOwnerEmpty?.();
                    Yq._onOwnerEmpty && (Yq._onOwnerEmpty = void 0)
                  }
                }(0, Yq.c)(qq.surface.engine, (() => {
                  for (const qq of Bq) qq()
                }))
              }
              mq(Eq, xq, Bq), qq._renderables.push(...yq.renderables);
              const tq = qq._groups.get(gq);
              tq && (tq.o = [...(tq.o ?? []).filter((qq => qq.mesh !== xq)), ...yq.renderables]);
              yq.updater && qq._uniformUpdaters.push(yq.updater);
              aq && function(qq, Eq) {
                const gq = new Set(qq._disposables.slice(0, Eq));
                for (let Yq = qq._disposables.length - 1; Yq >= Eq; Yq--) gq.has(qq._disposables[Yq]) && qq._disposables.splice(Yq, 1)
              }(qq, Vq);
              "pbr" === gq._materialFamily && aq && Qq && (oq._pbrMeshGeomContexts ??= new WeakMap).set(xq, Qq);
              (function(qq, Eq, gq, Yq, lq, Oq) {
                let mq = Aq?.get(gq);
                if (!mq) {
                  const qq = new WeakMap,
                    Eq = new WeakMap,
                    Yq = (Yq, lq, Oq, mq) => {
                      const xq = qq.get(Yq)?.get(lq);
                      if (xq) return xq(Yq, lq, Oq, mq);
                      const Aq = Eq.get(Yq) ?? Yq._groups.get(gq)?.r;
                      if (Aq) return Aq(Yq, lq, Oq, mq);
                      throw new Error("Material group has not completed its initial build")
                    };
                  mq = {
                    K4: Eq,
                    dispatch: Yq,
                    scenes: qq
                  }, (Aq ??= new WeakMap).set(gq, mq)
                }
                let xq = mq.scenes.get(qq);
                xq || (xq = new WeakMap, mq.scenes.set(qq, xq));
                xq.set(Yq, lq), mq.K4.has(qq) || mq.K4.set(qq, Oq ?? lq);
                const cq = qq._groups.get(gq);
                cq && (cq.r = mq.dispatch);
                let uq = Eq.installed.get(Yq);
                uq || (uq = new Set, Eq.installed.set(Yq, uq));
                uq.add(gq), Eq.installedMeshes.add(Yq)
              })(qq, Eq, gq, xq, yq.rebuildSingle, aq ? Nq : yq.rebuildSingle), xq.material._csmGen = (xq.material._csmGen ?? 0) + 1;
              const rq = qq._groups.get(gq);
              rq && !aq && (rq.r = yq.rebuildSingle);
              qq._renderables.sort(lq), qq._renderableVersion++, qq._materialEpoch++
            }(qq, Eq, gq, uq, Wq, Bq))).catch((Yq => {
              throw dq(qq, Eq, gq, uq, Wq, Bq) && (Eq.error = Yq instanceof Error ? Yq : new Error("Runtime mesh build failed", {
                cause: Yq
              })), Yq
            })).finally((() => {
              Vq(), Eq.tail === oq && (Eq.tail = null), xq?.get(gq) === oq && xq.delete(gq)
            })).finally((() => {
              Eq.chains.get(uq) === Pq && Eq.chains.delete(uq)
            }));
            return Eq.chains.set(uq, Pq), cq.track(Pq)
          },
          all: () => Promise.all(Eq.active).then((() => {})),
          track: qq => {
            const gq = qq.finally((() => Eq.active.delete(gq)));
            return Eq.active.add(gq), Promise.all(Eq.active).then((() => {}))
          },
          base: (Eq, gq) => {
            const Yq = Aq?.get(Eq);
            return Yq && Yq.K4.set(qq, gq), Yq?.dispatch ?? gq
          },
          get w() {
            return !!Eq.tail
          },
          pendingDisposers: qq => Eq.pendingDisposers.get(qq),
          holdPendingDisposers: (qq, gq) => Oq(Eq, qq, gq),
          releasePendingDisposers: (qq, gq) => mq(Eq, qq, gq),
          reset: Yq => {
            Vq(qq, Eq, Yq), gq._pbrMeshGeomContexts?.delete(Yq)
          },
          remove: Yq => {
            Eq.generations.set(Yq, (Eq.generations.get(Yq) ?? 0) + 1), Eq.chains.delete(Yq), aq(qq, Eq, Yq), gq._pbrMeshGeomContexts?.delete(Yq)
          },
          dropBase: Eq => {
            const gq = Aq?.get(Eq);
            gq && (gq.K4.delete(qq), gq.scenes.delete(qq))
          },
          wait: async qq => {
            const gq = new Set;
            for (const Yq of qq) {
              const qq = Eq.chains.get(Yq);
              qq && gq.add(qq)
            }
            await Promise.all(gq)
          },
          _e: function() {
            let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Eq.error) {
              const gq = Eq.error;
              throw qq && (Eq.error = null), gq
            }
          },
          _x: qq => {
            Eq.error = qq instanceof Error ? qq : new Error("Runtime mesh build failed", {
              cause: qq
            })
          },
          _d: () => Eq.eN,
          exclusive: (qq, gq) => {
            const Yq = [];
            Eq.tail && Yq.push(Eq.tail);
            const lq = xq?.get(qq);
            lq && Yq.push(lq);
            const Oq = Promise.all(Yq).then(gq),
              mq = Oq.then((() => {}), (() => {}));
            return Eq.tail = mq, (xq ??= new WeakMap).set(qq, mq), mq.then((() => {
              Eq.tail === mq && (Eq.tail = null), xq?.get(qq) === mq && xq.delete(qq)
            })), Oq
          }
        };
      return qq._runtimeBuilds = cq, (qq._beforeRender ??= []).push((() => {
        cq._e()
      })), qq._disposables.push((() => {
        Eq.eN = !0, Eq.active.clear();
        for (const gq of Eq.installedMeshes) Vq(qq, Eq, gq);
        for (const Eq of qq._groups.keys()) Aq?.get(Eq)?.K4.delete(qq);
        qq._runtimeBuilds = void 0, gq._pbrMeshGeomContexts = void 0
      })), cq
    }

    function aq(qq, Eq, gq) {
      const Yq = Eq.installed.get(gq);
      if (Yq) {
        for (const Eq of Yq) Aq?.get(Eq)?.scenes.get(qq)?.delete(gq);
        Eq.installed.delete(gq), Eq.installedMeshes.delete(gq)
      }
    }

    function Vq(qq, Eq, gq) {
      aq(qq, Eq, gq)
    }

    function dq(qq, Eq, gq, Yq, lq, Oq) {
      return !Eq.eN && Eq.generations.get(Yq) === Oq && qq.meshes.includes(Yq) && Yq.material === lq && lq._buildGroup === gq
    }

    function jq(qq, Eq, gq, lq) {
      const Oq = qq._meshDisposables.get(gq);
      if (Oq && Oq !== lq) {
        qq._meshDisposables.delete(gq);
        for (const qq of Oq) qq()
      }
      if (lq)
        if (qq.meshes.includes(gq)) qq._meshDisposables.set(gq, lq);
        else if (Eq.eN)
        for (const Yq of lq) Yq();
      else(0, Yq.c)(qq.surface.engine, (() => {
        for (const qq of lq) qq()
      }));
      mq(Eq, gq, lq)
    }

    function Hq(qq, Eq) {
      if (!Eq.eN) return;
      const gq = qq._disposables.splice(0);
      for (const Yq of gq) Yq()
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);