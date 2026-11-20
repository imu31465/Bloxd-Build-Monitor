export const id = 355;
export const ids = [355];
export const modules = {
  61123: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      A: () => Xu,
      B: () => ru,
      C: () => Vu,
      X: () => Bu
    });
    var Eu = yu(41315),
      Ku = (uu, Ru) => uu.order - Ru.order;

    function Qu(uu, Ru, yu) {
      uu.pendingDisposers.set(Ru, yu)
    }

    function mu(uu, Ru, yu) {
      yu && uu.pendingDisposers.get(Ru) === yu && uu.pendingDisposers.delete(Ru)
    }
    var Ju = null,
      Nu = null;

    function Xu(uu, Ru, yu, Eu) {
      if (!Ru || yu.material !== Ru) return Eu ?? Promise.resolve();
      const Ku = ru(uu, Ru._buildGroup, yu);
      return Eu ? Promise.all([Eu, Ku]).then((() => {})) : Ku
    }

    function Vu(uu, Ru, yu) {
      let Eu = yu;
      for (const Ku of Ru) {
        const Ru = Array.isArray(Ku),
          yu = Ru ? Ku[0] : Ku;
        Eu = Xu(uu, Ru ? Ku[1] : yu.material, yu, Eu)
      }
      return (Eu ?? Promise.resolve()).catch((Ru => {
        uu._runtimeBuilds?._x(Ru)
      }))
    }

    function ru(uu, Ru, Eu) {
      if (uu._z || !uu.meshes.includes(Eu)) return uu._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(uu, Ru, yu) {
          for (const [Ku, Qu] of uu._groups)
            if (Ku !== Ru) {
              const uu = Qu.indexOf(yu);
              uu >= 0 && Qu.splice(uu, 1)
            } let Eu = uu._groups.get(Ru);
          Eu || (Eu = [], uu._groups.set(Ru, Eu));
          Eu.includes(yu) || Eu.push(yu)
        }(uu, Ru, Eu), "pbr" === Ru._materialFamily && (uu._built || uu._groups.get(Ru)?.r)) {
        const Ru = uu._runtimeBuilds ?? xu(uu),
          Eu = yu.e(385).then((() => yu(61752))).then((Ru => {
            let {
              rebuildScenePbrPipelines: yu
            } = Ru;
            return uu._z ? void 0 : yu(uu, !0)
          })).catch((Ru => {
            uu._runtimeBuilds?._x(Ru)
          }));
        return Ru.track(Eu)
      }
      return (uu._runtimeBuilds ?? xu(uu)).queue(Ru, Eu).catch((() => {}))
    }

    function Bu(uu, Ru, yu) {
      return uu._z ? Promise.resolve(void 0) : (uu._runtimeBuilds ?? xu(uu)).exclusive(Ru, yu)
    }

    function xu(uu) {
      const Ru = {
          VS: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        yu = uu,
        Xu = {
          queue: (yu, Vu) => {
            const ru = (Ru.generations.get(Vu) ?? 0) + 1,
              Bu = Vu.material;
            Ru.generations.set(Vu, ru);
            const xu = Ru.chains.get(Vu),
              Su = [Ru.tail, Ju?.get(yu)].filter((uu => !!uu));
            let pu = () => {};
            const Hu = new Promise((uu => {
              pu = uu
            }));
            Ru.tail = Hu, (Ju ??= new WeakMap).set(yu, Hu);
            const du = (xu ? xu.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Su))).then((() => async function(uu, Ru, yu, Ju, Xu, Vu) {
              if (!Tu(uu, Ru, yu, Ju, Xu, Vu)) return;
              const ru = uu._meshDisposables.get(Ju);
              ru && (uu._meshDisposables.delete(Ju), Qu(Ru, Ju, ru));
              const Bu = yu._rebuildSingle,
                xu = Nu?.get(yu)?.n_.get(uu) ?? uu._groups.get(yu)?.r,
                Su = !!uu._groups.get(yu)?.r,
                pu = uu._disposables.length,
                Hu = uu,
                du = Hu._pbrGeomContext;
              let bu, Cu;
              try {
                Cu = await yu(uu, [Ju]), bu = Hu._pbrGeomContext
              } catch (Au) {
                if (Wu(uu, Ru, Ju, ru), ju(uu, Ru), !Tu(uu, Ru, yu, Ju, Xu, Vu)) return;
                throw Au
              } finally {
                yu._rebuildSingle = Bu, "pbr" === yu._materialFamily && Su && (Hu._pbrGeomContext = du)
              }
              if (!Tu(uu, Ru, yu, Ju, Xu, Vu)) return Wu(uu, Ru, Ju, ru), void ju(uu, Ru);
              for (let Eu = uu._renderables.length - 1; Eu >= 0; Eu--) uu._renderables[Eu].mesh === Ju && uu._renderables.splice(Eu, 1);
              if (ru) {
                for (const Ru of ru) {
                  const yu = uu._disposables.indexOf(Ru);
                  yu >= 0 && uu._disposables.splice(yu, 1);
                  const Eu = Ru.p;
                  if (Eu) {
                    Eu._disposed = !0;
                    const uu = Eu._owner;
                    if (uu) {
                      const Ru = uu.indexOf(Eu);
                      Ru >= 0 && uu.splice(Ru, 1), Eu._owner = void 0, 0 === uu.length && Eu._onOwnerEmpty?.()
                    } else Eu._onOwnerEmpty?.();
                    Eu._onOwnerEmpty && (Eu._onOwnerEmpty = void 0)
                  }
                }(0, Eu.e)(uu.surface.engine, (() => {
                  for (const uu of ru) uu()
                }))
              }
              mu(Ru, Ju, ru), uu._renderables.push(...Cu.renderables);
              const ku = uu._groups.get(yu);
              ku && (ku.o = [...(ku.o ?? []).filter((uu => uu.mesh !== Ju)), ...Cu.renderables]);
              Cu.updater && uu._uniformUpdaters.push(Cu.updater);
              Su && function(uu, Ru) {
                const yu = new Set(uu._disposables.slice(0, Ru));
                for (let Eu = uu._disposables.length - 1; Eu >= Ru; Eu--) yu.has(uu._disposables[Eu]) && uu._disposables.splice(Eu, 1)
              }(uu, pu);
              "pbr" === yu._materialFamily && Su && bu && (Hu._pbrMeshGeomContexts ??= new WeakMap).set(Ju, bu);
              (function(uu, Ru, yu, Eu, Ku, Qu) {
                let mu = Nu?.get(yu);
                if (!mu) {
                  const uu = new WeakMap,
                    Ru = new WeakMap,
                    Eu = (Eu, Ku, Qu, mu) => {
                      const Ju = uu.get(Eu)?.get(Ku);
                      if (Ju) return Ju(Eu, Ku, Qu, mu);
                      const Nu = Ru.get(Eu) ?? Eu._groups.get(yu)?.r;
                      if (Nu) return Nu(Eu, Ku, Qu, mu);
                      throw new Error("Material group has not completed its initial build")
                    };
                  mu = {
                    n_: Ru,
                    dispatch: Eu,
                    scenes: uu
                  }, (Nu ??= new WeakMap).set(yu, mu)
                }
                let Ju = mu.scenes.get(uu);
                Ju || (Ju = new WeakMap, mu.scenes.set(uu, Ju));
                Ju.set(Eu, Ku), mu.n_.has(uu) || mu.n_.set(uu, Qu ?? Ku);
                const Xu = uu._groups.get(yu);
                Xu && (Xu.r = mu.dispatch);
                let Vu = Ru.installed.get(Eu);
                Vu || (Vu = new Set, Ru.installed.set(Eu, Vu));
                Vu.add(yu), Ru.installedMeshes.add(Eu)
              })(uu, Ru, yu, Ju, Cu.rebuildSingle, Su ? xu : Cu.rebuildSingle), Ju.material._csmGen = (Ju.material._csmGen ?? 0) + 1;
              const eu = uu._groups.get(yu);
              eu && !Su && (eu.r = Cu.rebuildSingle);
              uu._renderables.sort(Ku), uu._renderableVersion++, uu._materialEpoch++
            }(uu, Ru, yu, Vu, Bu, ru))).catch((Eu => {
              throw Tu(uu, Ru, yu, Vu, Bu, ru) && (Ru.error = Eu instanceof Error ? Eu : new Error("Runtime mesh build failed", {
                cause: Eu
              })), Eu
            })).finally((() => {
              pu(), Ru.tail === Hu && (Ru.tail = null), Ju?.get(yu) === Hu && Ju.delete(yu)
            })).finally((() => {
              Ru.chains.get(Vu) === du && Ru.chains.delete(Vu)
            }));
            return Ru.chains.set(Vu, du), Xu.track(du)
          },
          all: () => Promise.all(Ru.active).then((() => {})),
          track: uu => {
            const yu = uu.finally((() => Ru.active.delete(yu)));
            return Ru.active.add(yu), Promise.all(Ru.active).then((() => {}))
          },
          base: (Ru, yu) => {
            const Eu = Nu?.get(Ru);
            return Eu && Eu.n_.set(uu, yu), Eu?.dispatch ?? yu
          },
          get w() {
            return !!Ru.tail
          },
          pendingDisposers: uu => Ru.pendingDisposers.get(uu),
          holdPendingDisposers: (uu, yu) => Qu(Ru, uu, yu),
          releasePendingDisposers: (uu, yu) => mu(Ru, uu, yu),
          reset: Eu => {
            pu(uu, Ru, Eu), yu._pbrMeshGeomContexts?.delete(Eu)
          },
          remove: Eu => {
            Ru.generations.set(Eu, (Ru.generations.get(Eu) ?? 0) + 1), Ru.chains.delete(Eu), Su(uu, Ru, Eu), yu._pbrMeshGeomContexts?.delete(Eu)
          },
          dropBase: Ru => {
            const yu = Nu?.get(Ru);
            yu && (yu.n_.delete(uu), yu.scenes.delete(uu))
          },
          wait: async uu => {
            const yu = new Set;
            for (const Eu of uu) {
              const uu = Ru.chains.get(Eu);
              uu && yu.add(uu)
            }
            await Promise.all(yu)
          },
          _e: function() {
            let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Ru.error) {
              const yu = Ru.error;
              throw uu && (Ru.error = null), yu
            }
          },
          _x: uu => {
            Ru.error = uu instanceof Error ? uu : new Error("Runtime mesh build failed", {
              cause: uu
            })
          },
          _d: () => Ru.VS,
          exclusive: (uu, yu) => {
            const Eu = [];
            Ru.tail && Eu.push(Ru.tail);
            const Ku = Ju?.get(uu);
            Ku && Eu.push(Ku);
            const Qu = Promise.all(Eu).then(yu),
              mu = Qu.then((() => {}), (() => {}));
            return Ru.tail = mu, (Ju ??= new WeakMap).set(uu, mu), mu.then((() => {
              Ru.tail === mu && (Ru.tail = null), Ju?.get(uu) === mu && Ju.delete(uu)
            })), Qu
          }
        };
      return uu._runtimeBuilds = Xu, (uu._beforeRender ??= []).push((() => {
        Xu._e()
      })), uu._disposables.push((() => {
        Ru.VS = !0, Ru.active.clear();
        for (const yu of Ru.installedMeshes) pu(uu, Ru, yu);
        for (const Ru of uu._groups.keys()) Nu?.get(Ru)?.n_.delete(uu);
        uu._runtimeBuilds = void 0, yu._pbrMeshGeomContexts = void 0
      })), Xu
    }

    function Su(uu, Ru, yu) {
      const Eu = Ru.installed.get(yu);
      if (Eu) {
        for (const Ru of Eu) Nu?.get(Ru)?.scenes.get(uu)?.delete(yu);
        Ru.installed.delete(yu), Ru.installedMeshes.delete(yu)
      }
    }

    function pu(uu, Ru, yu) {
      Su(uu, Ru, yu)
    }

    function Tu(uu, Ru, yu, Eu, Ku, Qu) {
      return !Ru.VS && Ru.generations.get(Eu) === Qu && uu.meshes.includes(Eu) && Eu.material === Ku && Ku._buildGroup === yu
    }

    function Wu(uu, Ru, yu, Ku) {
      const Qu = uu._meshDisposables.get(yu);
      if (Qu && Qu !== Ku) {
        uu._meshDisposables.delete(yu);
        for (const uu of Qu) uu()
      }
      if (Ku)
        if (uu.meshes.includes(yu)) uu._meshDisposables.set(yu, Ku);
        else if (Ru.VS)
        for (const Eu of Ku) Eu();
      else(0, Eu.e)(uu.surface.engine, (() => {
        for (const uu of Ku) uu()
      }));
      mu(Ru, yu, Ku)
    }

    function ju(uu, Ru) {
      if (!Ru.VS) return;
      const yu = uu._disposables.splice(0);
      for (const Eu of yu) Eu()
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);