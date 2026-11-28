export const id = 681;
export const ids = [681];
export const modules = {
  64881: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      A: () => vd,
      B: () => td,
      C: () => Qd,
      X: () => od
    });
    var Wd = md(54139),
      Fd = (dd, Od) => dd.order - Od.order;

    function Rd(dd, Od, md) {
      dd.pendingDisposers.set(Od, md)
    }

    function Xd(dd, Od, md) {
      md && dd.pendingDisposers.get(Od) === md && dd.pendingDisposers.delete(Od)
    }
    var Kd = null,
      hd = null;

    function vd(dd, Od, md, Wd) {
      if (!Od || md.material !== Od) return Wd ?? Promise.resolve();
      const Fd = td(dd, Od._buildGroup, md);
      return Wd ? Promise.all([Wd, Fd]).then((() => {})) : Fd
    }

    function Qd(dd, Od, md) {
      let Wd = md;
      for (const Fd of Od) {
        const Od = Array.isArray(Fd),
          md = Od ? Fd[0] : Fd;
        Wd = vd(dd, Od ? Fd[1] : md.material, md, Wd)
      }
      return (Wd ?? Promise.resolve()).catch((Od => {
        dd._runtimeBuilds?._x(Od)
      }))
    }

    function td(dd, Od, Wd) {
      if (dd._z || !dd.meshes.includes(Wd)) return dd._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(dd, Od, md) {
          for (const [Fd, Rd] of dd._groups)
            if (Fd !== Od) {
              const dd = Rd.indexOf(md);
              dd >= 0 && Rd.splice(dd, 1)
            } let Wd = dd._groups.get(Od);
          Wd || (Wd = [], dd._groups.set(Od, Wd));
          Wd.includes(md) || Wd.push(md)
        }(dd, Od, Wd), "pbr" === Od._materialFamily && (dd._built || dd._groups.get(Od)?.r)) {
        const Od = dd._runtimeBuilds ?? Nd(dd),
          Wd = md.e(711).then((() => md(65378))).then((Od => {
            let {
              rebuildScenePbrPipelines: md
            } = Od;
            return dd._z ? void 0 : md(dd, !0)
          })).catch((Od => {
            dd._runtimeBuilds?._x(Od)
          }));
        return Od.track(Wd)
      }
      return (dd._runtimeBuilds ?? Nd(dd)).queue(Od, Wd).catch((() => {}))
    }

    function od(dd, Od, md) {
      return dd._z ? Promise.resolve(void 0) : (dd._runtimeBuilds ?? Nd(dd)).exclusive(Od, md)
    }

    function Nd(dd) {
      const Od = {
          Aq: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        md = dd,
        vd = {
          queue: (md, Qd) => {
            const td = (Od.generations.get(Qd) ?? 0) + 1,
              od = Qd.material;
            Od.generations.set(Qd, td);
            const Nd = Od.chains.get(Qd),
              qd = [Od.tail, Kd?.get(md)].filter((dd => !!dd));
            let Hd = () => {};
            const pd = new Promise((dd => {
              Hd = dd
            }));
            Od.tail = pd, (Kd ??= new WeakMap).set(md, pd);
            const Yd = (Nd ? Nd.catch((() => {})) : Promise.resolve()).then((() => Promise.all(qd))).then((() => async function(dd, Od, md, Kd, vd, Qd) {
              if (!yd(dd, Od, md, Kd, vd, Qd)) return;
              const td = dd._meshDisposables.get(Kd);
              td && (dd._meshDisposables.delete(Kd), Rd(Od, Kd, td));
              const od = md._rebuildSingle,
                Nd = hd?.get(md)?.idd.get(dd) ?? dd._groups.get(md)?.r,
                qd = !!dd._groups.get(md)?.r,
                Hd = dd._disposables.length,
                pd = dd,
                Yd = pd._pbrGeomContext;
              let gd, wd;
              try {
                wd = await md(dd, [Kd]), gd = pd._pbrGeomContext
              } catch (Ud) {
                if (bd(dd, Od, Kd, td), Td(dd, Od), !yd(dd, Od, md, Kd, vd, Qd)) return;
                throw Ud
              } finally {
                md._rebuildSingle = od, "pbr" === md._materialFamily && qd && (pd._pbrGeomContext = Yd)
              }
              if (!yd(dd, Od, md, Kd, vd, Qd)) return bd(dd, Od, Kd, td), void Td(dd, Od);
              for (let Wd = dd._renderables.length - 1; Wd >= 0; Wd--) dd._renderables[Wd].mesh === Kd && dd._renderables.splice(Wd, 1);
              if (td) {
                for (const Od of td) {
                  const md = dd._disposables.indexOf(Od);
                  md >= 0 && dd._disposables.splice(md, 1);
                  const Wd = Od.p;
                  if (Wd) {
                    Wd._disposed = !0;
                    const dd = Wd._owner;
                    if (dd) {
                      const Od = dd.indexOf(Wd);
                      Od >= 0 && dd.splice(Od, 1), Wd._owner = void 0, 0 === dd.length && Wd._onOwnerEmpty?.()
                    } else Wd._onOwnerEmpty?.();
                    Wd._onOwnerEmpty && (Wd._onOwnerEmpty = void 0)
                  }
                }(0, Wd.d)(dd.surface.engine, (() => {
                  for (const dd of td) dd()
                }))
              }
              Xd(Od, Kd, td), dd._renderables.push(...wd.renderables);
              const Ed = dd._groups.get(md);
              Ed && (Ed.o = [...(Ed.o ?? []).filter((dd => dd.mesh !== Kd)), ...wd.renderables]);
              wd.updater && dd._uniformUpdaters.push(wd.updater);
              qd && function(dd, Od) {
                const md = new Set(dd._disposables.slice(0, Od));
                for (let Wd = dd._disposables.length - 1; Wd >= Od; Wd--) md.has(dd._disposables[Wd]) && dd._disposables.splice(Wd, 1)
              }(dd, Hd);
              "pbr" === md._materialFamily && qd && gd && (pd._pbrMeshGeomContexts ??= new WeakMap).set(Kd, gd);
              (function(dd, Od, md, Wd, Fd, Rd) {
                let Xd = hd?.get(md);
                if (!Xd) {
                  const dd = new WeakMap,
                    Od = new WeakMap,
                    Wd = (Wd, Fd, Rd, Xd) => {
                      const Kd = dd.get(Wd)?.get(Fd);
                      if (Kd) return Kd(Wd, Fd, Rd, Xd);
                      const hd = Od.get(Wd) ?? Wd._groups.get(md)?.r;
                      if (hd) return hd(Wd, Fd, Rd, Xd);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Xd = {
                    idd: Od,
                    dispatch: Wd,
                    scenes: dd
                  }, (hd ??= new WeakMap).set(md, Xd)
                }
                let Kd = Xd.scenes.get(dd);
                Kd || (Kd = new WeakMap, Xd.scenes.set(dd, Kd));
                Kd.set(Wd, Fd), Xd.idd.has(dd) || Xd.idd.set(dd, Rd ?? Fd);
                const vd = dd._groups.get(md);
                vd && (vd.r = Xd.dispatch);
                let Qd = Od.installed.get(Wd);
                Qd || (Qd = new Set, Od.installed.set(Wd, Qd));
                Qd.add(md), Od.installedMeshes.add(Wd)
              })(dd, Od, md, Kd, wd.rebuildSingle, qd ? Nd : wd.rebuildSingle), Kd.material._csmGen = (Kd.material._csmGen ?? 0) + 1;
              const Jd = dd._groups.get(md);
              Jd && !qd && (Jd.r = wd.rebuildSingle);
              dd._renderables.sort(Fd), dd._renderableVersion++, dd._materialEpoch++
            }(dd, Od, md, Qd, od, td))).catch((Wd => {
              throw yd(dd, Od, md, Qd, od, td) && (Od.error = Wd instanceof Error ? Wd : new Error("Runtime mesh build failed", {
                cause: Wd
              })), Wd
            })).finally((() => {
              Hd(), Od.tail === pd && (Od.tail = null), Kd?.get(md) === pd && Kd.delete(md)
            })).finally((() => {
              Od.chains.get(Qd) === Yd && Od.chains.delete(Qd)
            }));
            return Od.chains.set(Qd, Yd), vd.track(Yd)
          },
          all: () => Promise.all(Od.active).then((() => {})),
          track: dd => {
            const md = dd.finally((() => Od.active.delete(md)));
            return Od.active.add(md), Promise.all(Od.active).then((() => {}))
          },
          base: (Od, md) => {
            const Wd = hd?.get(Od);
            return Wd && Wd.idd.set(dd, md), Wd?.dispatch ?? md
          },
          get w() {
            return !!Od.tail
          },
          pendingDisposers: dd => Od.pendingDisposers.get(dd),
          holdPendingDisposers: (dd, md) => Rd(Od, dd, md),
          releasePendingDisposers: (dd, md) => Xd(Od, dd, md),
          reset: Wd => {
            Hd(dd, Od, Wd), md._pbrMeshGeomContexts?.delete(Wd)
          },
          remove: Wd => {
            Od.generations.set(Wd, (Od.generations.get(Wd) ?? 0) + 1), Od.chains.delete(Wd), qd(dd, Od, Wd), md._pbrMeshGeomContexts?.delete(Wd)
          },
          dropBase: Od => {
            const md = hd?.get(Od);
            md && (md.idd.delete(dd), md.scenes.delete(dd))
          },
          wait: async dd => {
            const md = new Set;
            for (const Wd of dd) {
              const dd = Od.chains.get(Wd);
              dd && md.add(dd)
            }
            await Promise.all(md)
          },
          _e: function() {
            let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Od.error) {
              const md = Od.error;
              throw dd && (Od.error = null), md
            }
          },
          _x: dd => {
            Od.error = dd instanceof Error ? dd : new Error("Runtime mesh build failed", {
              cause: dd
            })
          },
          _d: () => Od.Aq,
          exclusive: (dd, md) => {
            const Wd = [];
            Od.tail && Wd.push(Od.tail);
            const Fd = Kd?.get(dd);
            Fd && Wd.push(Fd);
            const Rd = Promise.all(Wd).then(md),
              Xd = Rd.then((() => {}), (() => {}));
            return Od.tail = Xd, (Kd ??= new WeakMap).set(dd, Xd), Xd.then((() => {
              Od.tail === Xd && (Od.tail = null), Kd?.get(dd) === Xd && Kd.delete(dd)
            })), Rd
          }
        };
      return dd._runtimeBuilds = vd, (dd._beforeRender ??= []).push((() => {
        vd._e()
      })), dd._disposables.push((() => {
        Od.Aq = !0, Od.active.clear();
        for (const md of Od.installedMeshes) Hd(dd, Od, md);
        for (const Od of dd._groups.keys()) hd?.get(Od)?.idd.delete(dd);
        dd._runtimeBuilds = void 0, md._pbrMeshGeomContexts = void 0
      })), vd
    }

    function qd(dd, Od, md) {
      const Wd = Od.installed.get(md);
      if (Wd) {
        for (const Od of Wd) hd?.get(Od)?.scenes.get(dd)?.delete(md);
        Od.installed.delete(md), Od.installedMeshes.delete(md)
      }
    }

    function Hd(dd, Od, md) {
      qd(dd, Od, md)
    }

    function yd(dd, Od, md, Wd, Fd, Rd) {
      return !Od.Aq && Od.generations.get(Wd) === Rd && dd.meshes.includes(Wd) && Wd.material === Fd && Fd._buildGroup === md
    }

    function bd(dd, Od, md, Fd) {
      const Rd = dd._meshDisposables.get(md);
      if (Rd && Rd !== Fd) {
        dd._meshDisposables.delete(md);
        for (const dd of Rd) dd()
      }
      if (Fd)
        if (dd.meshes.includes(md)) dd._meshDisposables.set(md, Fd);
        else if (Od.Aq)
        for (const Wd of Fd) Wd();
      else(0, Wd.d)(dd.surface.engine, (() => {
        for (const dd of Fd) dd()
      }));
      Xd(Od, md, Fd)
    }

    function Td(dd, Od) {
      if (!Od.Aq) return;
      const md = dd._disposables.splice(0);
      for (const Wd of md) Wd()
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);