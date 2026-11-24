export const id = 367;
export const ids = [367];
export const modules = {
  61634: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      A: () => Ht,
      B: () => Qt,
      C: () => Xt,
      X: () => lt
    });
    var Ot = Vt(41967),
      qt = (tt, et) => tt.order - et.order;

    function Dt(tt, et, Vt) {
      tt.pendingDisposers.set(et, Vt)
    }

    function mt(tt, et, Vt) {
      Vt && tt.pendingDisposers.get(et) === Vt && tt.pendingDisposers.delete(et)
    }
    var dt = null,
      jt = null;

    function Ht(tt, et, Vt, Ot) {
      if (!et || Vt.material !== et) return Ot ?? Promise.resolve();
      const qt = Qt(tt, et._buildGroup, Vt);
      return Ot ? Promise.all([Ot, qt]).then((() => {})) : qt
    }

    function Xt(tt, et, Vt) {
      let Ot = Vt;
      for (const qt of et) {
        const et = Array.isArray(qt),
          Vt = et ? qt[0] : qt;
        Ot = Ht(tt, et ? qt[1] : Vt.material, Vt, Ot)
      }
      return (Ot ?? Promise.resolve()).catch((et => {
        tt._runtimeBuilds?._x(et)
      }))
    }

    function Qt(tt, et, Ot) {
      if (tt._z || !tt.meshes.includes(Ot)) return tt._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(tt, et, Vt) {
          for (const [qt, Dt] of tt._groups)
            if (qt !== et) {
              const tt = Dt.indexOf(Vt);
              tt >= 0 && Dt.splice(tt, 1)
            } let Ot = tt._groups.get(et);
          Ot || (Ot = [], tt._groups.set(et, Ot));
          Ot.includes(Vt) || Ot.push(Vt)
        }(tt, et, Ot), "pbr" === et._materialFamily && (tt._built || tt._groups.get(et)?.r)) {
        const et = tt._runtimeBuilds ?? Et(tt),
          Ot = Vt.e(397).then((() => Vt(62136))).then((et => {
            let {
              rebuildScenePbrPipelines: Vt
            } = et;
            return tt._z ? void 0 : Vt(tt, !0)
          })).catch((et => {
            tt._runtimeBuilds?._x(et)
          }));
        return et.track(Ot)
      }
      return (tt._runtimeBuilds ?? Et(tt)).queue(et, Ot).catch((() => {}))
    }

    function lt(tt, et, Vt) {
      return tt._z ? Promise.resolve(void 0) : (tt._runtimeBuilds ?? Et(tt)).exclusive(et, Vt)
    }

    function Et(tt) {
      const et = {
          df: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Vt = tt,
        Ht = {
          queue: (Vt, Xt) => {
            const Qt = (et.generations.get(Xt) ?? 0) + 1,
              lt = Xt.material;
            et.generations.set(Xt, Qt);
            const Et = et.chains.get(Xt),
              ft = [et.tail, dt?.get(Vt)].filter((tt => !!tt));
            let wt = () => {};
            const bt = new Promise((tt => {
              wt = tt
            }));
            et.tail = bt, (dt ??= new WeakMap).set(Vt, bt);
            const Jt = (Et ? Et.catch((() => {})) : Promise.resolve()).then((() => Promise.all(ft))).then((() => async function(tt, et, Vt, dt, Ht, Xt) {
              if (!yt(tt, et, Vt, dt, Ht, Xt)) return;
              const Qt = tt._meshDisposables.get(dt);
              Qt && (tt._meshDisposables.delete(dt), Dt(et, dt, Qt));
              const lt = Vt._rebuildSingle,
                Et = jt?.get(Vt)?.F_.get(tt) ?? tt._groups.get(Vt)?.r,
                ft = !!tt._groups.get(Vt)?.r,
                wt = tt._disposables.length,
                bt = tt,
                Jt = bt._pbrGeomContext;
              let Ct, ut;
              try {
                ut = await Vt(tt, [dt]), Ct = bt._pbrGeomContext
              } catch (vt) {
                if (Nt(tt, et, dt, Qt), Mt(tt, et), !yt(tt, et, Vt, dt, Ht, Xt)) return;
                throw vt
              } finally {
                Vt._rebuildSingle = lt, "pbr" === Vt._materialFamily && ft && (bt._pbrGeomContext = Jt)
              }
              if (!yt(tt, et, Vt, dt, Ht, Xt)) return Nt(tt, et, dt, Qt), void Mt(tt, et);
              for (let Ot = tt._renderables.length - 1; Ot >= 0; Ot--) tt._renderables[Ot].mesh === dt && tt._renderables.splice(Ot, 1);
              if (Qt) {
                for (const et of Qt) {
                  const Vt = tt._disposables.indexOf(et);
                  Vt >= 0 && tt._disposables.splice(Vt, 1);
                  const Ot = et.p;
                  if (Ot) {
                    Ot._disposed = !0;
                    const tt = Ot._owner;
                    if (tt) {
                      const et = tt.indexOf(Ot);
                      et >= 0 && tt.splice(et, 1), Ot._owner = void 0, 0 === tt.length && Ot._onOwnerEmpty?.()
                    } else Ot._onOwnerEmpty?.();
                    Ot._onOwnerEmpty && (Ot._onOwnerEmpty = void 0)
                  }
                }(0, Ot.f)(tt.surface.engine, (() => {
                  for (const tt of Qt) tt()
                }))
              }
              mt(et, dt, Qt), tt._renderables.push(...ut.renderables);
              const Kt = tt._groups.get(Vt);
              Kt && (Kt.o = [...(Kt.o ?? []).filter((tt => tt.mesh !== dt)), ...ut.renderables]);
              ut.updater && tt._uniformUpdaters.push(ut.updater);
              ft && function(tt, et) {
                const Vt = new Set(tt._disposables.slice(0, et));
                for (let Ot = tt._disposables.length - 1; Ot >= et; Ot--) Vt.has(tt._disposables[Ot]) && tt._disposables.splice(Ot, 1)
              }(tt, wt);
              "pbr" === Vt._materialFamily && ft && Ct && (bt._pbrMeshGeomContexts ??= new WeakMap).set(dt, Ct);
              (function(tt, et, Vt, Ot, qt, Dt) {
                let mt = jt?.get(Vt);
                if (!mt) {
                  const tt = new WeakMap,
                    et = new WeakMap,
                    Ot = (Ot, qt, Dt, mt) => {
                      const dt = tt.get(Ot)?.get(qt);
                      if (dt) return dt(Ot, qt, Dt, mt);
                      const jt = et.get(Ot) ?? Ot._groups.get(Vt)?.r;
                      if (jt) return jt(Ot, qt, Dt, mt);
                      throw new Error("Material group has not completed its initial build")
                    };
                  mt = {
                    F_: et,
                    dispatch: Ot,
                    scenes: tt
                  }, (jt ??= new WeakMap).set(Vt, mt)
                }
                let dt = mt.scenes.get(tt);
                dt || (dt = new WeakMap, mt.scenes.set(tt, dt));
                dt.set(Ot, qt), mt.F_.has(tt) || mt.F_.set(tt, Dt ?? qt);
                const Ht = tt._groups.get(Vt);
                Ht && (Ht.r = mt.dispatch);
                let Xt = et.installed.get(Ot);
                Xt || (Xt = new Set, et.installed.set(Ot, Xt));
                Xt.add(Vt), et.installedMeshes.add(Ot)
              })(tt, et, Vt, dt, ut.rebuildSingle, ft ? Et : ut.rebuildSingle), dt.material._csmGen = (dt.material._csmGen ?? 0) + 1;
              const ht = tt._groups.get(Vt);
              ht && !ft && (ht.r = ut.rebuildSingle);
              tt._renderables.sort(qt), tt._renderableVersion++, tt._materialEpoch++
            }(tt, et, Vt, Xt, lt, Qt))).catch((Ot => {
              throw yt(tt, et, Vt, Xt, lt, Qt) && (et.error = Ot instanceof Error ? Ot : new Error("Runtime mesh build failed", {
                cause: Ot
              })), Ot
            })).finally((() => {
              wt(), et.tail === bt && (et.tail = null), dt?.get(Vt) === bt && dt.delete(Vt)
            })).finally((() => {
              et.chains.get(Xt) === Jt && et.chains.delete(Xt)
            }));
            return et.chains.set(Xt, Jt), Ht.track(Jt)
          },
          all: () => Promise.all(et.active).then((() => {})),
          track: tt => {
            const Vt = tt.finally((() => et.active.delete(Vt)));
            return et.active.add(Vt), Promise.all(et.active).then((() => {}))
          },
          base: (et, Vt) => {
            const Ot = jt?.get(et);
            return Ot && Ot.F_.set(tt, Vt), Ot?.dispatch ?? Vt
          },
          get w() {
            return !!et.tail
          },
          pendingDisposers: tt => et.pendingDisposers.get(tt),
          holdPendingDisposers: (tt, Vt) => Dt(et, tt, Vt),
          releasePendingDisposers: (tt, Vt) => mt(et, tt, Vt),
          reset: Ot => {
            wt(tt, et, Ot), Vt._pbrMeshGeomContexts?.delete(Ot)
          },
          remove: Ot => {
            et.generations.set(Ot, (et.generations.get(Ot) ?? 0) + 1), et.chains.delete(Ot), ft(tt, et, Ot), Vt._pbrMeshGeomContexts?.delete(Ot)
          },
          dropBase: et => {
            const Vt = jt?.get(et);
            Vt && (Vt.F_.delete(tt), Vt.scenes.delete(tt))
          },
          wait: async tt => {
            const Vt = new Set;
            for (const Ot of tt) {
              const tt = et.chains.get(Ot);
              tt && Vt.add(tt)
            }
            await Promise.all(Vt)
          },
          _e: function() {
            let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (et.error) {
              const Vt = et.error;
              throw tt && (et.error = null), Vt
            }
          },
          _x: tt => {
            et.error = tt instanceof Error ? tt : new Error("Runtime mesh build failed", {
              cause: tt
            })
          },
          _d: () => et.df,
          exclusive: (tt, Vt) => {
            const Ot = [];
            et.tail && Ot.push(et.tail);
            const qt = dt?.get(tt);
            qt && Ot.push(qt);
            const Dt = Promise.all(Ot).then(Vt),
              mt = Dt.then((() => {}), (() => {}));
            return et.tail = mt, (dt ??= new WeakMap).set(tt, mt), mt.then((() => {
              et.tail === mt && (et.tail = null), dt?.get(tt) === mt && dt.delete(tt)
            })), Dt
          }
        };
      return tt._runtimeBuilds = Ht, (tt._beforeRender ??= []).push((() => {
        Ht._e()
      })), tt._disposables.push((() => {
        et.df = !0, et.active.clear();
        for (const Vt of et.installedMeshes) wt(tt, et, Vt);
        for (const et of tt._groups.keys()) jt?.get(et)?.F_.delete(tt);
        tt._runtimeBuilds = void 0, Vt._pbrMeshGeomContexts = void 0
      })), Ht
    }

    function ft(tt, et, Vt) {
      const Ot = et.installed.get(Vt);
      if (Ot) {
        for (const et of Ot) jt?.get(et)?.scenes.get(tt)?.delete(Vt);
        et.installed.delete(Vt), et.installedMeshes.delete(Vt)
      }
    }

    function wt(tt, et, Vt) {
      ft(tt, et, Vt)
    }

    function yt(tt, et, Vt, Ot, qt, Dt) {
      return !et.df && et.generations.get(Ot) === Dt && tt.meshes.includes(Ot) && Ot.material === qt && qt._buildGroup === Vt
    }

    function Nt(tt, et, Vt, qt) {
      const Dt = tt._meshDisposables.get(Vt);
      if (Dt && Dt !== qt) {
        tt._meshDisposables.delete(Vt);
        for (const tt of Dt) tt()
      }
      if (qt)
        if (tt.meshes.includes(Vt)) tt._meshDisposables.set(Vt, qt);
        else if (et.df)
        for (const Ot of qt) Ot();
      else(0, Ot.f)(tt.surface.engine, (() => {
        for (const tt of qt) tt()
      }));
      mt(et, Vt, qt)
    }

    function Mt(tt, et) {
      if (!et.df) return;
      const Vt = tt._disposables.splice(0);
      for (const Ot of Vt) Ot()
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);