export const id = 356;
export const ids = [356];
export const modules = {
  60981: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      A: () => Cd,
      B: () => od,
      C: () => Kd,
      X: () => ld
    });
    var pd = kd(41690),
      Nd = (dd, Jd) => dd.order - Jd.order;

    function Wd(dd, Jd, kd) {
      dd.pendingDisposers.set(Jd, kd)
    }

    function Pd(dd, Jd, kd) {
      kd && dd.pendingDisposers.get(Jd) === kd && dd.pendingDisposers.delete(Jd)
    }
    var Zd = null,
      gd = null;

    function Cd(dd, Jd, kd, pd) {
      if (!Jd || kd.material !== Jd) return pd ?? Promise.resolve();
      const Nd = od(dd, Jd._buildGroup, kd);
      return pd ? Promise.all([pd, Nd]).then((() => {})) : Nd
    }

    function Kd(dd, Jd, kd) {
      let pd = kd;
      for (const Nd of Jd) {
        const Jd = Array.isArray(Nd),
          kd = Jd ? Nd[0] : Nd;
        pd = Cd(dd, Jd ? Nd[1] : kd.material, kd, pd)
      }
      return (pd ?? Promise.resolve()).catch((Jd => {
        dd._runtimeBuilds?._x(Jd)
      }))
    }

    function od(dd, Jd, pd) {
      if (dd._z || !dd.meshes.includes(pd)) return dd._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(dd, Jd, kd) {
          for (const [Nd, Wd] of dd._groups)
            if (Nd !== Jd) {
              const dd = Wd.indexOf(kd);
              dd >= 0 && Wd.splice(dd, 1)
            } let pd = dd._groups.get(Jd);
          pd || (pd = [], dd._groups.set(Jd, pd));
          pd.includes(kd) || pd.push(kd)
        }(dd, Jd, pd), "pbr" === Jd._materialFamily && (dd._built || dd._groups.get(Jd)?.r)) {
        const Jd = dd._runtimeBuilds ?? Qd(dd),
          pd = kd.e(386).then((() => kd(61618))).then((Jd => {
            let {
              rebuildScenePbrPipelines: kd
            } = Jd;
            return dd._z ? void 0 : kd(dd, !0)
          })).catch((Jd => {
            dd._runtimeBuilds?._x(Jd)
          }));
        return Jd.track(pd)
      }
      return (dd._runtimeBuilds ?? Qd(dd)).queue(Jd, pd).catch((() => {}))
    }

    function ld(dd, Jd, kd) {
      return dd._z ? Promise.resolve(void 0) : (dd._runtimeBuilds ?? Qd(dd)).exclusive(Jd, kd)
    }

    function Qd(dd) {
      const Jd = {
          pL: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        kd = dd,
        Cd = {
          queue: (kd, Kd) => {
            const od = (Jd.generations.get(Kd) ?? 0) + 1,
              ld = Kd.material;
            Jd.generations.set(Kd, od);
            const Qd = Jd.chains.get(Kd),
              Ld = [Jd.tail, Zd?.get(kd)].filter((dd => !!dd));
            let Od = () => {};
            const Gd = new Promise((dd => {
              Od = dd
            }));
            Jd.tail = Gd, (Zd ??= new WeakMap).set(kd, Gd);
            const vd = (Qd ? Qd.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Ld))).then((() => async function(dd, Jd, kd, Zd, Cd, Kd) {
              if (!ed(dd, Jd, kd, Zd, Cd, Kd)) return;
              const od = dd._meshDisposables.get(Zd);
              od && (dd._meshDisposables.delete(Zd), Wd(Jd, Zd, od));
              const ld = kd._rebuildSingle,
                Qd = gd?.get(kd)?.Y5.get(dd) ?? dd._groups.get(kd)?.r,
                Ld = !!dd._groups.get(kd)?.r,
                Od = dd._disposables.length,
                Gd = dd,
                vd = Gd._pbrGeomContext;
              let xd, qd;
              try {
                qd = await kd(dd, [Zd]), xd = Gd._pbrGeomContext
              } catch (ad) {
                if (Rd(dd, Jd, Zd, od), Id(dd, Jd), !ed(dd, Jd, kd, Zd, Cd, Kd)) return;
                throw ad
              } finally {
                kd._rebuildSingle = ld, "pbr" === kd._materialFamily && Ld && (Gd._pbrGeomContext = vd)
              }
              if (!ed(dd, Jd, kd, Zd, Cd, Kd)) return Rd(dd, Jd, Zd, od), void Id(dd, Jd);
              for (let pd = dd._renderables.length - 1; pd >= 0; pd--) dd._renderables[pd].mesh === Zd && dd._renderables.splice(pd, 1);
              if (od) {
                for (const Jd of od) {
                  const kd = dd._disposables.indexOf(Jd);
                  kd >= 0 && dd._disposables.splice(kd, 1);
                  const pd = Jd.p;
                  if (pd) {
                    pd._disposed = !0;
                    const dd = pd._owner;
                    if (dd) {
                      const Jd = dd.indexOf(pd);
                      Jd >= 0 && dd.splice(Jd, 1), pd._owner = void 0, 0 === dd.length && pd._onOwnerEmpty?.()
                    } else pd._onOwnerEmpty?.();
                    pd._onOwnerEmpty && (pd._onOwnerEmpty = void 0)
                  }
                }(0, pd.c)(dd.surface.engine, (() => {
                  for (const dd of od) dd()
                }))
              }
              Pd(Jd, Zd, od), dd._renderables.push(...qd.renderables);
              const Bd = dd._groups.get(kd);
              Bd && (Bd.o = [...(Bd.o ?? []).filter((dd => dd.mesh !== Zd)), ...qd.renderables]);
              qd.updater && dd._uniformUpdaters.push(qd.updater);
              Ld && function(dd, Jd) {
                const kd = new Set(dd._disposables.slice(0, Jd));
                for (let pd = dd._disposables.length - 1; pd >= Jd; pd--) kd.has(dd._disposables[pd]) && dd._disposables.splice(pd, 1)
              }(dd, Od);
              "pbr" === kd._materialFamily && Ld && xd && (Gd._pbrMeshGeomContexts ??= new WeakMap).set(Zd, xd);
              (function(dd, Jd, kd, pd, Nd, Wd) {
                let Pd = gd?.get(kd);
                if (!Pd) {
                  const dd = new WeakMap,
                    Jd = new WeakMap,
                    pd = (pd, Nd, Wd, Pd) => {
                      const Zd = dd.get(pd)?.get(Nd);
                      if (Zd) return Zd(pd, Nd, Wd, Pd);
                      const gd = Jd.get(pd) ?? pd._groups.get(kd)?.r;
                      if (gd) return gd(pd, Nd, Wd, Pd);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Pd = {
                    Y5: Jd,
                    dispatch: pd,
                    scenes: dd
                  }, (gd ??= new WeakMap).set(kd, Pd)
                }
                let Zd = Pd.scenes.get(dd);
                Zd || (Zd = new WeakMap, Pd.scenes.set(dd, Zd));
                Zd.set(pd, Nd), Pd.Y5.has(dd) || Pd.Y5.set(dd, Wd ?? Nd);
                const Cd = dd._groups.get(kd);
                Cd && (Cd.r = Pd.dispatch);
                let Kd = Jd.installed.get(pd);
                Kd || (Kd = new Set, Jd.installed.set(pd, Kd));
                Kd.add(kd), Jd.installedMeshes.add(pd)
              })(dd, Jd, kd, Zd, qd.rebuildSingle, Ld ? Qd : qd.rebuildSingle), Zd.material._csmGen = (Zd.material._csmGen ?? 0) + 1;
              const sd = dd._groups.get(kd);
              sd && !Ld && (sd.r = qd.rebuildSingle);
              dd._renderables.sort(Nd), dd._renderableVersion++, dd._materialEpoch++
            }(dd, Jd, kd, Kd, ld, od))).catch((pd => {
              throw ed(dd, Jd, kd, Kd, ld, od) && (Jd.error = pd instanceof Error ? pd : new Error("Runtime mesh build failed", {
                cause: pd
              })), pd
            })).finally((() => {
              Od(), Jd.tail === Gd && (Jd.tail = null), Zd?.get(kd) === Gd && Zd.delete(kd)
            })).finally((() => {
              Jd.chains.get(Kd) === vd && Jd.chains.delete(Kd)
            }));
            return Jd.chains.set(Kd, vd), Cd.track(vd)
          },
          all: () => Promise.all(Jd.active).then((() => {})),
          track: dd => {
            const kd = dd.finally((() => Jd.active.delete(kd)));
            return Jd.active.add(kd), Promise.all(Jd.active).then((() => {}))
          },
          base: (Jd, kd) => {
            const pd = gd?.get(Jd);
            return pd && pd.Y5.set(dd, kd), pd?.dispatch ?? kd
          },
          get w() {
            return !!Jd.tail
          },
          pendingDisposers: dd => Jd.pendingDisposers.get(dd),
          holdPendingDisposers: (dd, kd) => Wd(Jd, dd, kd),
          releasePendingDisposers: (dd, kd) => Pd(Jd, dd, kd),
          reset: pd => {
            Od(dd, Jd, pd), kd._pbrMeshGeomContexts?.delete(pd)
          },
          remove: pd => {
            Jd.generations.set(pd, (Jd.generations.get(pd) ?? 0) + 1), Jd.chains.delete(pd), Ld(dd, Jd, pd), kd._pbrMeshGeomContexts?.delete(pd)
          },
          dropBase: Jd => {
            const kd = gd?.get(Jd);
            kd && (kd.Y5.delete(dd), kd.scenes.delete(dd))
          },
          wait: async dd => {
            const kd = new Set;
            for (const pd of dd) {
              const dd = Jd.chains.get(pd);
              dd && kd.add(dd)
            }
            await Promise.all(kd)
          },
          _e: function() {
            let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Jd.error) {
              const kd = Jd.error;
              throw dd && (Jd.error = null), kd
            }
          },
          _x: dd => {
            Jd.error = dd instanceof Error ? dd : new Error("Runtime mesh build failed", {
              cause: dd
            })
          },
          _d: () => Jd.pL,
          exclusive: (dd, kd) => {
            const pd = [];
            Jd.tail && pd.push(Jd.tail);
            const Nd = Zd?.get(dd);
            Nd && pd.push(Nd);
            const Wd = Promise.all(pd).then(kd),
              Pd = Wd.then((() => {}), (() => {}));
            return Jd.tail = Pd, (Zd ??= new WeakMap).set(dd, Pd), Pd.then((() => {
              Jd.tail === Pd && (Jd.tail = null), Zd?.get(dd) === Pd && Zd.delete(dd)
            })), Wd
          }
        };
      return dd._runtimeBuilds = Cd, (dd._beforeRender ??= []).push((() => {
        Cd._e()
      })), dd._disposables.push((() => {
        Jd.pL = !0, Jd.active.clear();
        for (const kd of Jd.installedMeshes) Od(dd, Jd, kd);
        for (const Jd of dd._groups.keys()) gd?.get(Jd)?.Y5.delete(dd);
        dd._runtimeBuilds = void 0, kd._pbrMeshGeomContexts = void 0
      })), Cd
    }

    function Ld(dd, Jd, kd) {
      const pd = Jd.installed.get(kd);
      if (pd) {
        for (const Jd of pd) gd?.get(Jd)?.scenes.get(dd)?.delete(kd);
        Jd.installed.delete(kd), Jd.installedMeshes.delete(kd)
      }
    }

    function Od(dd, Jd, kd) {
      Ld(dd, Jd, kd)
    }

    function ed(dd, Jd, kd, pd, Nd, Wd) {
      return !Jd.pL && Jd.generations.get(pd) === Wd && dd.meshes.includes(pd) && pd.material === Nd && Nd._buildGroup === kd
    }

    function Rd(dd, Jd, kd, Nd) {
      const Wd = dd._meshDisposables.get(kd);
      if (Wd && Wd !== Nd) {
        dd._meshDisposables.delete(kd);
        for (const dd of Wd) dd()
      }
      if (Nd)
        if (dd.meshes.includes(kd)) dd._meshDisposables.set(kd, Nd);
        else if (Jd.pL)
        for (const pd of Nd) pd();
      else(0, pd.c)(dd.surface.engine, (() => {
        for (const dd of Nd) dd()
      }));
      Pd(Jd, kd, Nd)
    }

    function Id(dd, Jd) {
      if (!Jd.pL) return;
      const kd = dd._disposables.splice(0);
      for (const pd of kd) pd()
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);