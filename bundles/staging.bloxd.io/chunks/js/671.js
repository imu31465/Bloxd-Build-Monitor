export const id = 671;
export const ids = [671];
export const modules = {
  63923: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      A: () => Je,
      B: () => Re,
      C: () => oe,
      X: () => ke
    });
    var ye = He(44904),
      be = (ee, ie) => ee.order - ie.order;

    function Me(ee, ie, He) {
      ee.pendingDisposers.set(ie, He)
    }

    function Ke(ee, ie, He) {
      He && ee.pendingDisposers.get(ie) === He && ee.pendingDisposers.delete(ie)
    }
    var Ue = null,
      Fe = null;

    function Je(ee, ie, He, ye) {
      if (!ie || He.material !== ie) return ye ?? Promise.resolve();
      const be = Re(ee, ie._buildGroup, He);
      return ye ? Promise.all([ye, be]).then((() => {})) : be
    }

    function oe(ee, ie, He) {
      let ye = He;
      for (const be of ie) {
        const ie = Array.isArray(be),
          He = ie ? be[0] : be;
        ye = Je(ee, ie ? be[1] : He.material, He, ye)
      }
      return (ye ?? Promise.resolve()).catch((ie => {
        ee._runtimeBuilds?._x(ie)
      }))
    }

    function Re(ee, ie, ye) {
      if (ee._z || !ee.meshes.includes(ye)) return ee._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(ee, ie, He) {
          for (const [be, Me] of ee._groups)
            if (be !== ie) {
              const ee = Me.indexOf(He);
              ee >= 0 && Me.splice(ee, 1)
            } let ye = ee._groups.get(ie);
          ye || (ye = [], ee._groups.set(ie, ye));
          ye.includes(He) || ye.push(He)
        }(ee, ie, ye), "pbr" === ie._materialFamily && (ee._built || ee._groups.get(ie)?.r)) {
        const ie = ee._runtimeBuilds ?? qe(ee),
          ye = He.e(701).then((() => He(64466))).then((ie => {
            let {
              rebuildScenePbrPipelines: He
            } = ie;
            return ee._z ? void 0 : He(ee, !0)
          })).catch((ie => {
            ee._runtimeBuilds?._x(ie)
          }));
        return ie.track(ye)
      }
      return (ee._runtimeBuilds ?? qe(ee)).queue(ie, ye).catch((() => {}))
    }

    function ke(ee, ie, He) {
      return ee._z ? Promise.resolve(void 0) : (ee._runtimeBuilds ?? qe(ee)).exclusive(ie, He)
    }

    function qe(ee) {
      const ie = {
          xf: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        He = ee,
        Je = {
          queue: (He, oe) => {
            const Re = (ie.generations.get(oe) ?? 0) + 1,
              ke = oe.material;
            ie.generations.set(oe, Re);
            const qe = ie.chains.get(oe),
              fe = [ie.tail, Ue?.get(He)].filter((ee => !!ee));
            let Te = () => {};
            const Be = new Promise((ee => {
              Te = ee
            }));
            ie.tail = Be, (Ue ??= new WeakMap).set(He, Be);
            const Ee = (qe ? qe.catch((() => {})) : Promise.resolve()).then((() => Promise.all(fe))).then((() => async function(ee, ie, He, Ue, Je, oe) {
              if (!pe(ee, ie, He, Ue, Je, oe)) return;
              const Re = ee._meshDisposables.get(Ue);
              Re && (ee._meshDisposables.delete(Ue), Me(ie, Ue, Re));
              const ke = He._rebuildSingle,
                qe = Fe?.get(He)?.Qee.get(ee) ?? ee._groups.get(He)?.r,
                fe = !!ee._groups.get(He)?.r,
                Te = ee._disposables.length,
                Be = ee,
                Ee = Be._pbrGeomContext;
              let ge, Oe;
              try {
                Oe = await He(ee, [Ue]), ge = Be._pbrGeomContext
              } catch (te) {
                if (Xe(ee, ie, Ue, Re), ze(ee, ie), !pe(ee, ie, He, Ue, Je, oe)) return;
                throw te
              } finally {
                He._rebuildSingle = ke, "pbr" === He._materialFamily && fe && (Be._pbrGeomContext = Ee)
              }
              if (!pe(ee, ie, He, Ue, Je, oe)) return Xe(ee, ie, Ue, Re), void ze(ee, ie);
              for (let ye = ee._renderables.length - 1; ye >= 0; ye--) ee._renderables[ye].mesh === Ue && ee._renderables.splice(ye, 1);
              if (Re) {
                for (const ie of Re) {
                  const He = ee._disposables.indexOf(ie);
                  He >= 0 && ee._disposables.splice(He, 1);
                  const ye = ie.p;
                  if (ye) {
                    ye._disposed = !0;
                    const ee = ye._owner;
                    if (ee) {
                      const ie = ee.indexOf(ye);
                      ie >= 0 && ee.splice(ie, 1), ye._owner = void 0, 0 === ee.length && ye._onOwnerEmpty?.()
                    } else ye._onOwnerEmpty?.();
                    ye._onOwnerEmpty && (ye._onOwnerEmpty = void 0)
                  }
                }(0, ye.c)(ee.surface.engine, (() => {
                  for (const ee of Re) ee()
                }))
              }
              Ke(ie, Ue, Re), ee._renderables.push(...Oe.renderables);
              const de = ee._groups.get(He);
              de && (de.o = [...(de.o ?? []).filter((ee => ee.mesh !== Ue)), ...Oe.renderables]);
              Oe.updater && ee._uniformUpdaters.push(Oe.updater);
              fe && function(ee, ie) {
                const He = new Set(ee._disposables.slice(0, ie));
                for (let ye = ee._disposables.length - 1; ye >= ie; ye--) He.has(ee._disposables[ye]) && ee._disposables.splice(ye, 1)
              }(ee, Te);
              "pbr" === He._materialFamily && fe && ge && (Be._pbrMeshGeomContexts ??= new WeakMap).set(Ue, ge);
              (function(ee, ie, He, ye, be, Me) {
                let Ke = Fe?.get(He);
                if (!Ke) {
                  const ee = new WeakMap,
                    ie = new WeakMap,
                    ye = (ye, be, Me, Ke) => {
                      const Ue = ee.get(ye)?.get(be);
                      if (Ue) return Ue(ye, be, Me, Ke);
                      const Fe = ie.get(ye) ?? ye._groups.get(He)?.r;
                      if (Fe) return Fe(ye, be, Me, Ke);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Ke = {
                    Qee: ie,
                    dispatch: ye,
                    scenes: ee
                  }, (Fe ??= new WeakMap).set(He, Ke)
                }
                let Ue = Ke.scenes.get(ee);
                Ue || (Ue = new WeakMap, Ke.scenes.set(ee, Ue));
                Ue.set(ye, be), Ke.Qee.has(ee) || Ke.Qee.set(ee, Me ?? be);
                const Je = ee._groups.get(He);
                Je && (Je.r = Ke.dispatch);
                let oe = ie.installed.get(ye);
                oe || (oe = new Set, ie.installed.set(ye, oe));
                oe.add(He), ie.installedMeshes.add(ye)
              })(ee, ie, He, Ue, Oe.rebuildSingle, fe ? qe : Oe.rebuildSingle), Ue.material._csmGen = (Ue.material._csmGen ?? 0) + 1;
              const We = ee._groups.get(He);
              We && !fe && (We.r = Oe.rebuildSingle);
              ee._renderables.sort(be), ee._renderableVersion++, ee._materialEpoch++
            }(ee, ie, He, oe, ke, Re))).catch((ye => {
              throw pe(ee, ie, He, oe, ke, Re) && (ie.error = ye instanceof Error ? ye : new Error("Runtime mesh build failed", {
                cause: ye
              })), ye
            })).finally((() => {
              Te(), ie.tail === Be && (ie.tail = null), Ue?.get(He) === Be && Ue.delete(He)
            })).finally((() => {
              ie.chains.get(oe) === Ee && ie.chains.delete(oe)
            }));
            return ie.chains.set(oe, Ee), Je.track(Ee)
          },
          all: () => Promise.all(ie.active).then((() => {})),
          track: ee => {
            const He = ee.finally((() => ie.active.delete(He)));
            return ie.active.add(He), Promise.all(ie.active).then((() => {}))
          },
          base: (ie, He) => {
            const ye = Fe?.get(ie);
            return ye && ye.Qee.set(ee, He), ye?.dispatch ?? He
          },
          get w() {
            return !!ie.tail
          },
          pendingDisposers: ee => ie.pendingDisposers.get(ee),
          holdPendingDisposers: (ee, He) => Me(ie, ee, He),
          releasePendingDisposers: (ee, He) => Ke(ie, ee, He),
          reset: ye => {
            Te(ee, ie, ye), He._pbrMeshGeomContexts?.delete(ye)
          },
          remove: ye => {
            ie.generations.set(ye, (ie.generations.get(ye) ?? 0) + 1), ie.chains.delete(ye), fe(ee, ie, ye), He._pbrMeshGeomContexts?.delete(ye)
          },
          dropBase: ie => {
            const He = Fe?.get(ie);
            He && (He.Qee.delete(ee), He.scenes.delete(ee))
          },
          wait: async ee => {
            const He = new Set;
            for (const ye of ee) {
              const ee = ie.chains.get(ye);
              ee && He.add(ee)
            }
            await Promise.all(He)
          },
          _e: function() {
            let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (ie.error) {
              const He = ie.error;
              throw ee && (ie.error = null), He
            }
          },
          _x: ee => {
            ie.error = ee instanceof Error ? ee : new Error("Runtime mesh build failed", {
              cause: ee
            })
          },
          _d: () => ie.xf,
          exclusive: (ee, He) => {
            const ye = [];
            ie.tail && ye.push(ie.tail);
            const be = Ue?.get(ee);
            be && ye.push(be);
            const Me = Promise.all(ye).then(He),
              Ke = Me.then((() => {}), (() => {}));
            return ie.tail = Ke, (Ue ??= new WeakMap).set(ee, Ke), Ke.then((() => {
              ie.tail === Ke && (ie.tail = null), Ue?.get(ee) === Ke && Ue.delete(ee)
            })), Me
          }
        };
      return ee._runtimeBuilds = Je, (ee._beforeRender ??= []).push((() => {
        Je._e()
      })), ee._disposables.push((() => {
        ie.xf = !0, ie.active.clear();
        for (const He of ie.installedMeshes) Te(ee, ie, He);
        for (const ie of ee._groups.keys()) Fe?.get(ie)?.Qee.delete(ee);
        ee._runtimeBuilds = void 0, He._pbrMeshGeomContexts = void 0
      })), Je
    }

    function fe(ee, ie, He) {
      const ye = ie.installed.get(He);
      if (ye) {
        for (const ie of ye) Fe?.get(ie)?.scenes.get(ee)?.delete(He);
        ie.installed.delete(He), ie.installedMeshes.delete(He)
      }
    }

    function Te(ee, ie, He) {
      fe(ee, ie, He)
    }

    function pe(ee, ie, He, ye, be, Me) {
      return !ie.xf && ie.generations.get(ye) === Me && ee.meshes.includes(ye) && ye.material === be && be._buildGroup === He
    }

    function Xe(ee, ie, He, be) {
      const Me = ee._meshDisposables.get(He);
      if (Me && Me !== be) {
        ee._meshDisposables.delete(He);
        for (const ee of Me) ee()
      }
      if (be)
        if (ee.meshes.includes(He)) ee._meshDisposables.set(He, be);
        else if (ie.xf)
        for (const ye of be) ye();
      else(0, ye.c)(ee.surface.engine, (() => {
        for (const ee of be) ee()
      }));
      Ke(ie, He, be)
    }

    function ze(ee, ie) {
      if (!ie.xf) return;
      const He = ee._disposables.splice(0);
      for (const ye of He) ye()
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);