export const id = 356;
export const ids = [356];
export const modules = {
  60696: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      A: () => Nv,
      B: () => Tv,
      C: () => lv,
      X: () => Wv
    });
    var hv = Pv(41035),
      Sv = (vv, zv) => vv.order - zv.order;

    function ev(vv, zv, Pv) {
      vv.pendingDisposers.set(zv, Pv)
    }

    function gv(vv, zv, Pv) {
      Pv && vv.pendingDisposers.get(zv) === Pv && vv.pendingDisposers.delete(zv)
    }
    var pv = null,
      dv = null;

    function Nv(vv, zv, Pv, hv) {
      if (!zv || Pv.material !== zv) return hv ?? Promise.resolve();
      const Sv = Tv(vv, zv._buildGroup, Pv);
      return hv ? Promise.all([hv, Sv]).then((() => {})) : Sv
    }

    function lv(vv, zv, Pv) {
      let hv = Pv;
      for (const Sv of zv) {
        const zv = Array.isArray(Sv),
          Pv = zv ? Sv[0] : Sv;
        hv = Nv(vv, zv ? Sv[1] : Pv.material, Pv, hv)
      }
      return (hv ?? Promise.resolve()).catch((zv => {
        vv._runtimeBuilds?._x(zv)
      }))
    }

    function Tv(vv, zv, hv) {
      if (vv._z || !vv.meshes.includes(hv)) return vv._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(vv, zv, Pv) {
          for (const [Sv, ev] of vv._groups)
            if (Sv !== zv) {
              const vv = ev.indexOf(Pv);
              vv >= 0 && ev.splice(vv, 1)
            } let hv = vv._groups.get(zv);
          hv || (hv = [], vv._groups.set(zv, hv));
          hv.includes(Pv) || hv.push(Pv)
        }(vv, zv, hv), "pbr" === zv._materialFamily && (vv._built || vv._groups.get(zv)?.r)) {
        const zv = vv._runtimeBuilds ?? wv(vv),
          hv = Pv.e(386).then((() => Pv(61331))).then((zv => {
            let {
              rebuildScenePbrPipelines: Pv
            } = zv;
            return vv._z ? void 0 : Pv(vv, !0)
          })).catch((zv => {
            vv._runtimeBuilds?._x(zv)
          }));
        return zv.track(hv)
      }
      return (vv._runtimeBuilds ?? wv(vv)).queue(zv, hv).catch((() => {}))
    }

    function Wv(vv, zv, Pv) {
      return vv._z ? Promise.resolve(void 0) : (vv._runtimeBuilds ?? wv(vv)).exclusive(zv, Pv)
    }

    function wv(vv) {
      const zv = {
          ea: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Pv = vv,
        Nv = {
          queue: (Pv, lv) => {
            const Tv = (zv.generations.get(lv) ?? 0) + 1,
              Wv = lv.material;
            zv.generations.set(lv, Tv);
            const wv = zv.chains.get(lv),
              av = [zv.tail, pv?.get(Pv)].filter((vv => !!vv));
            let sv = () => {};
            const Gv = new Promise((vv => {
              sv = vv
            }));
            zv.tail = Gv, (pv ??= new WeakMap).set(Pv, Gv);
            const mv = (wv ? wv.catch((() => {})) : Promise.resolve()).then((() => Promise.all(av))).then((() => async function(vv, zv, Pv, pv, Nv, lv) {
              if (!Cv(vv, zv, Pv, pv, Nv, lv)) return;
              const Tv = vv._meshDisposables.get(pv);
              Tv && (vv._meshDisposables.delete(pv), ev(zv, pv, Tv));
              const Wv = Pv._rebuildSingle,
                wv = dv?.get(Pv)?.Lk.get(vv) ?? vv._groups.get(Pv)?.r,
                av = !!vv._groups.get(Pv)?.r,
                sv = vv._disposables.length,
                Gv = vv,
                mv = Gv._pbrGeomContext;
              let jv, fv;
              try {
                fv = await Pv(vv, [pv]), jv = Gv._pbrGeomContext
              } catch (nv) {
                if (iv(vv, zv, pv, Tv), cv(vv, zv), !Cv(vv, zv, Pv, pv, Nv, lv)) return;
                throw nv
              } finally {
                Pv._rebuildSingle = Wv, "pbr" === Pv._materialFamily && av && (Gv._pbrGeomContext = mv)
              }
              if (!Cv(vv, zv, Pv, pv, Nv, lv)) return iv(vv, zv, pv, Tv), void cv(vv, zv);
              for (let hv = vv._renderables.length - 1; hv >= 0; hv--) vv._renderables[hv].mesh === pv && vv._renderables.splice(hv, 1);
              if (Tv) {
                for (const zv of Tv) {
                  const Pv = vv._disposables.indexOf(zv);
                  Pv >= 0 && vv._disposables.splice(Pv, 1);
                  const hv = zv.p;
                  if (hv) {
                    hv._disposed = !0;
                    const vv = hv._owner;
                    if (vv) {
                      const zv = vv.indexOf(hv);
                      zv >= 0 && vv.splice(zv, 1), hv._owner = void 0, 0 === vv.length && hv._onOwnerEmpty?.()
                    } else hv._onOwnerEmpty?.();
                    hv._onOwnerEmpty && (hv._onOwnerEmpty = void 0)
                  }
                }(0, hv.b)(vv.surface.engine, (() => {
                  for (const vv of Tv) vv()
                }))
              }
              gv(zv, pv, Tv), vv._renderables.push(...fv.renderables);
              const Fv = vv._groups.get(Pv);
              Fv && (Fv.o = [...(Fv.o ?? []).filter((vv => vv.mesh !== pv)), ...fv.renderables]);
              fv.updater && vv._uniformUpdaters.push(fv.updater);
              av && function(vv, zv) {
                const Pv = new Set(vv._disposables.slice(0, zv));
                for (let hv = vv._disposables.length - 1; hv >= zv; hv--) Pv.has(vv._disposables[hv]) && vv._disposables.splice(hv, 1)
              }(vv, sv);
              "pbr" === Pv._materialFamily && av && jv && (Gv._pbrMeshGeomContexts ??= new WeakMap).set(pv, jv);
              (function(vv, zv, Pv, hv, Sv, ev) {
                let gv = dv?.get(Pv);
                if (!gv) {
                  const vv = new WeakMap,
                    zv = new WeakMap,
                    hv = (hv, Sv, ev, gv) => {
                      const pv = vv.get(hv)?.get(Sv);
                      if (pv) return pv(hv, Sv, ev, gv);
                      const dv = zv.get(hv) ?? hv._groups.get(Pv)?.r;
                      if (dv) return dv(hv, Sv, ev, gv);
                      throw new Error("Material group has not completed its initial build")
                    };
                  gv = {
                    Lk: zv,
                    dispatch: hv,
                    scenes: vv
                  }, (dv ??= new WeakMap).set(Pv, gv)
                }
                let pv = gv.scenes.get(vv);
                pv || (pv = new WeakMap, gv.scenes.set(vv, pv));
                pv.set(hv, Sv), gv.Lk.has(vv) || gv.Lk.set(vv, ev ?? Sv);
                const Nv = vv._groups.get(Pv);
                Nv && (Nv.r = gv.dispatch);
                let lv = zv.installed.get(hv);
                lv || (lv = new Set, zv.installed.set(hv, lv));
                lv.add(Pv), zv.installedMeshes.add(hv)
              })(vv, zv, Pv, pv, fv.rebuildSingle, av ? wv : fv.rebuildSingle), pv.material._csmGen = (pv.material._csmGen ?? 0) + 1;
              const Yv = vv._groups.get(Pv);
              Yv && !av && (Yv.r = fv.rebuildSingle);
              vv._renderables.sort(Sv), vv._renderableVersion++, vv._materialEpoch++
            }(vv, zv, Pv, lv, Wv, Tv))).catch((hv => {
              throw Cv(vv, zv, Pv, lv, Wv, Tv) && (zv.error = hv instanceof Error ? hv : new Error("Runtime mesh build failed", {
                cause: hv
              })), hv
            })).finally((() => {
              sv(), zv.tail === Gv && (zv.tail = null), pv?.get(Pv) === Gv && pv.delete(Pv)
            })).finally((() => {
              zv.chains.get(lv) === mv && zv.chains.delete(lv)
            }));
            return zv.chains.set(lv, mv), Nv.track(mv)
          },
          all: () => Promise.all(zv.active).then((() => {})),
          track: vv => {
            const Pv = vv.finally((() => zv.active.delete(Pv)));
            return zv.active.add(Pv), Promise.all(zv.active).then((() => {}))
          },
          base: (zv, Pv) => {
            const hv = dv?.get(zv);
            return hv && hv.Lk.set(vv, Pv), hv?.dispatch ?? Pv
          },
          get w() {
            return !!zv.tail
          },
          pendingDisposers: vv => zv.pendingDisposers.get(vv),
          holdPendingDisposers: (vv, Pv) => ev(zv, vv, Pv),
          releasePendingDisposers: (vv, Pv) => gv(zv, vv, Pv),
          reset: hv => {
            sv(vv, zv, hv), Pv._pbrMeshGeomContexts?.delete(hv)
          },
          remove: hv => {
            zv.generations.set(hv, (zv.generations.get(hv) ?? 0) + 1), zv.chains.delete(hv), av(vv, zv, hv), Pv._pbrMeshGeomContexts?.delete(hv)
          },
          dropBase: zv => {
            const Pv = dv?.get(zv);
            Pv && (Pv.Lk.delete(vv), Pv.scenes.delete(vv))
          },
          wait: async vv => {
            const Pv = new Set;
            for (const hv of vv) {
              const vv = zv.chains.get(hv);
              vv && Pv.add(vv)
            }
            await Promise.all(Pv)
          },
          _e: function() {
            let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (zv.error) {
              const Pv = zv.error;
              throw vv && (zv.error = null), Pv
            }
          },
          _x: vv => {
            zv.error = vv instanceof Error ? vv : new Error("Runtime mesh build failed", {
              cause: vv
            })
          },
          _d: () => zv.ea,
          exclusive: (vv, Pv) => {
            const hv = [];
            zv.tail && hv.push(zv.tail);
            const Sv = pv?.get(vv);
            Sv && hv.push(Sv);
            const ev = Promise.all(hv).then(Pv),
              gv = ev.then((() => {}), (() => {}));
            return zv.tail = gv, (pv ??= new WeakMap).set(vv, gv), gv.then((() => {
              zv.tail === gv && (zv.tail = null), pv?.get(vv) === gv && pv.delete(vv)
            })), ev
          }
        };
      return vv._runtimeBuilds = Nv, (vv._beforeRender ??= []).push((() => {
        Nv._e()
      })), vv._disposables.push((() => {
        zv.ea = !0, zv.active.clear();
        for (const Pv of zv.installedMeshes) sv(vv, zv, Pv);
        for (const zv of vv._groups.keys()) dv?.get(zv)?.Lk.delete(vv);
        vv._runtimeBuilds = void 0, Pv._pbrMeshGeomContexts = void 0
      })), Nv
    }

    function av(vv, zv, Pv) {
      const hv = zv.installed.get(Pv);
      if (hv) {
        for (const zv of hv) dv?.get(zv)?.scenes.get(vv)?.delete(Pv);
        zv.installed.delete(Pv), zv.installedMeshes.delete(Pv)
      }
    }

    function sv(vv, zv, Pv) {
      av(vv, zv, Pv)
    }

    function Cv(vv, zv, Pv, hv, Sv, ev) {
      return !zv.ea && zv.generations.get(hv) === ev && vv.meshes.includes(hv) && hv.material === Sv && Sv._buildGroup === Pv
    }

    function iv(vv, zv, Pv, Sv) {
      const ev = vv._meshDisposables.get(Pv);
      if (ev && ev !== Sv) {
        vv._meshDisposables.delete(Pv);
        for (const vv of ev) vv()
      }
      if (Sv)
        if (vv.meshes.includes(Pv)) vv._meshDisposables.set(Pv, Sv);
        else if (zv.ea)
        for (const hv of Sv) hv();
      else(0, hv.b)(vv.surface.engine, (() => {
        for (const vv of Sv) vv()
      }));
      gv(zv, Pv, Sv)
    }

    function cv(vv, zv) {
      if (!zv.ea) return;
      const Pv = vv._disposables.splice(0);
      for (const hv of Pv) hv()
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);