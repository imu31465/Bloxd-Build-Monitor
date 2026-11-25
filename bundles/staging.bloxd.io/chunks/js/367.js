export const id = 367;
export const ids = [367];
export const modules = {
  61601: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      A: () => fu,
      B: () => bu,
      C: () => Cu,
      X: () => cu
    });
    var su = ju(41976),
      Uu = (uu, Eu) => uu.order - Eu.order;

    function Zu(uu, Eu, ju) {
      uu.pendingDisposers.set(Eu, ju)
    }

    function Xu(uu, Eu, ju) {
      ju && uu.pendingDisposers.get(Eu) === ju && uu.pendingDisposers.delete(Eu)
    }
    var lu = null,
      qu = null;

    function fu(uu, Eu, ju, su) {
      if (!Eu || ju.material !== Eu) return su ?? Promise.resolve();
      const Uu = bu(uu, Eu._buildGroup, ju);
      return su ? Promise.all([su, Uu]).then((() => {})) : Uu
    }

    function Cu(uu, Eu, ju) {
      let su = ju;
      for (const Uu of Eu) {
        const Eu = Array.isArray(Uu),
          ju = Eu ? Uu[0] : Uu;
        su = fu(uu, Eu ? Uu[1] : ju.material, ju, su)
      }
      return (su ?? Promise.resolve()).catch((Eu => {
        uu._runtimeBuilds?._x(Eu)
      }))
    }

    function bu(uu, Eu, su) {
      if (uu._z || !uu.meshes.includes(su)) return uu._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(uu, Eu, ju) {
          for (const [Uu, Zu] of uu._groups)
            if (Uu !== Eu) {
              const uu = Zu.indexOf(ju);
              uu >= 0 && Zu.splice(uu, 1)
            } let su = uu._groups.get(Eu);
          su || (su = [], uu._groups.set(Eu, su));
          su.includes(ju) || su.push(ju)
        }(uu, Eu, su), "pbr" === Eu._materialFamily && (uu._built || uu._groups.get(Eu)?.r)) {
        const Eu = uu._runtimeBuilds ?? Nu(uu),
          su = ju.e(397).then((() => ju(62126))).then((Eu => {
            let {
              rebuildScenePbrPipelines: ju
            } = Eu;
            return uu._z ? void 0 : ju(uu, !0)
          })).catch((Eu => {
            uu._runtimeBuilds?._x(Eu)
          }));
        return Eu.track(su)
      }
      return (uu._runtimeBuilds ?? Nu(uu)).queue(Eu, su).catch((() => {}))
    }

    function cu(uu, Eu, ju) {
      return uu._z ? Promise.resolve(void 0) : (uu._runtimeBuilds ?? Nu(uu)).exclusive(Eu, ju)
    }

    function Nu(uu) {
      const Eu = {
          fO: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        ju = uu,
        fu = {
          queue: (ju, Cu) => {
            const bu = (Eu.generations.get(Cu) ?? 0) + 1,
              cu = Cu.material;
            Eu.generations.set(Cu, bu);
            const Nu = Eu.chains.get(Cu),
              Ou = [Eu.tail, lu?.get(ju)].filter((uu => !!uu));
            let Yu = () => {};
            const Mu = new Promise((uu => {
              Yu = uu
            }));
            Eu.tail = Mu, (lu ??= new WeakMap).set(ju, Mu);
            const eu = (Nu ? Nu.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Ou))).then((() => async function(uu, Eu, ju, lu, fu, Cu) {
              if (!hu(uu, Eu, ju, lu, fu, Cu)) return;
              const bu = uu._meshDisposables.get(lu);
              bu && (uu._meshDisposables.delete(lu), Zu(Eu, lu, bu));
              const cu = ju._rebuildSingle,
                Nu = qu?.get(ju)?.Q_.get(uu) ?? uu._groups.get(ju)?.r,
                Ou = !!uu._groups.get(ju)?.r,
                Yu = uu._disposables.length,
                Mu = uu,
                eu = Mu._pbrGeomContext;
              let Gu, pu;
              try {
                pu = await ju(uu, [lu]), Gu = Mu._pbrGeomContext
              } catch (du) {
                if (Du(uu, Eu, lu, bu), gu(uu, Eu), !hu(uu, Eu, ju, lu, fu, Cu)) return;
                throw du
              } finally {
                ju._rebuildSingle = cu, "pbr" === ju._materialFamily && Ou && (Mu._pbrGeomContext = eu)
              }
              if (!hu(uu, Eu, ju, lu, fu, Cu)) return Du(uu, Eu, lu, bu), void gu(uu, Eu);
              for (let su = uu._renderables.length - 1; su >= 0; su--) uu._renderables[su].mesh === lu && uu._renderables.splice(su, 1);
              if (bu) {
                for (const Eu of bu) {
                  const ju = uu._disposables.indexOf(Eu);
                  ju >= 0 && uu._disposables.splice(ju, 1);
                  const su = Eu.p;
                  if (su) {
                    su._disposed = !0;
                    const uu = su._owner;
                    if (uu) {
                      const Eu = uu.indexOf(su);
                      Eu >= 0 && uu.splice(Eu, 1), su._owner = void 0, 0 === uu.length && su._onOwnerEmpty?.()
                    } else su._onOwnerEmpty?.();
                    su._onOwnerEmpty && (su._onOwnerEmpty = void 0)
                  }
                }(0, su.d)(uu.surface.engine, (() => {
                  for (const uu of bu) uu()
                }))
              }
              Xu(Eu, lu, bu), uu._renderables.push(...pu.renderables);
              const wu = uu._groups.get(ju);
              wu && (wu.o = [...(wu.o ?? []).filter((uu => uu.mesh !== lu)), ...pu.renderables]);
              pu.updater && uu._uniformUpdaters.push(pu.updater);
              Ou && function(uu, Eu) {
                const ju = new Set(uu._disposables.slice(0, Eu));
                for (let su = uu._disposables.length - 1; su >= Eu; su--) ju.has(uu._disposables[su]) && uu._disposables.splice(su, 1)
              }(uu, Yu);
              "pbr" === ju._materialFamily && Ou && Gu && (Mu._pbrMeshGeomContexts ??= new WeakMap).set(lu, Gu);
              (function(uu, Eu, ju, su, Uu, Zu) {
                let Xu = qu?.get(ju);
                if (!Xu) {
                  const uu = new WeakMap,
                    Eu = new WeakMap,
                    su = (su, Uu, Zu, Xu) => {
                      const lu = uu.get(su)?.get(Uu);
                      if (lu) return lu(su, Uu, Zu, Xu);
                      const qu = Eu.get(su) ?? su._groups.get(ju)?.r;
                      if (qu) return qu(su, Uu, Zu, Xu);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Xu = {
                    Q_: Eu,
                    dispatch: su,
                    scenes: uu
                  }, (qu ??= new WeakMap).set(ju, Xu)
                }
                let lu = Xu.scenes.get(uu);
                lu || (lu = new WeakMap, Xu.scenes.set(uu, lu));
                lu.set(su, Uu), Xu.Q_.has(uu) || Xu.Q_.set(uu, Zu ?? Uu);
                const fu = uu._groups.get(ju);
                fu && (fu.r = Xu.dispatch);
                let Cu = Eu.installed.get(su);
                Cu || (Cu = new Set, Eu.installed.set(su, Cu));
                Cu.add(ju), Eu.installedMeshes.add(su)
              })(uu, Eu, ju, lu, pu.rebuildSingle, Ou ? Nu : pu.rebuildSingle), lu.material._csmGen = (lu.material._csmGen ?? 0) + 1;
              const Ju = uu._groups.get(ju);
              Ju && !Ou && (Ju.r = pu.rebuildSingle);
              uu._renderables.sort(Uu), uu._renderableVersion++, uu._materialEpoch++
            }(uu, Eu, ju, Cu, cu, bu))).catch((su => {
              throw hu(uu, Eu, ju, Cu, cu, bu) && (Eu.error = su instanceof Error ? su : new Error("Runtime mesh build failed", {
                cause: su
              })), su
            })).finally((() => {
              Yu(), Eu.tail === Mu && (Eu.tail = null), lu?.get(ju) === Mu && lu.delete(ju)
            })).finally((() => {
              Eu.chains.get(Cu) === eu && Eu.chains.delete(Cu)
            }));
            return Eu.chains.set(Cu, eu), fu.track(eu)
          },
          all: () => Promise.all(Eu.active).then((() => {})),
          track: uu => {
            const ju = uu.finally((() => Eu.active.delete(ju)));
            return Eu.active.add(ju), Promise.all(Eu.active).then((() => {}))
          },
          base: (Eu, ju) => {
            const su = qu?.get(Eu);
            return su && su.Q_.set(uu, ju), su?.dispatch ?? ju
          },
          get w() {
            return !!Eu.tail
          },
          pendingDisposers: uu => Eu.pendingDisposers.get(uu),
          holdPendingDisposers: (uu, ju) => Zu(Eu, uu, ju),
          releasePendingDisposers: (uu, ju) => Xu(Eu, uu, ju),
          reset: su => {
            Yu(uu, Eu, su), ju._pbrMeshGeomContexts?.delete(su)
          },
          remove: su => {
            Eu.generations.set(su, (Eu.generations.get(su) ?? 0) + 1), Eu.chains.delete(su), Ou(uu, Eu, su), ju._pbrMeshGeomContexts?.delete(su)
          },
          dropBase: Eu => {
            const ju = qu?.get(Eu);
            ju && (ju.Q_.delete(uu), ju.scenes.delete(uu))
          },
          wait: async uu => {
            const ju = new Set;
            for (const su of uu) {
              const uu = Eu.chains.get(su);
              uu && ju.add(uu)
            }
            await Promise.all(ju)
          },
          _e: function() {
            let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Eu.error) {
              const ju = Eu.error;
              throw uu && (Eu.error = null), ju
            }
          },
          _x: uu => {
            Eu.error = uu instanceof Error ? uu : new Error("Runtime mesh build failed", {
              cause: uu
            })
          },
          _d: () => Eu.fO,
          exclusive: (uu, ju) => {
            const su = [];
            Eu.tail && su.push(Eu.tail);
            const Uu = lu?.get(uu);
            Uu && su.push(Uu);
            const Zu = Promise.all(su).then(ju),
              Xu = Zu.then((() => {}), (() => {}));
            return Eu.tail = Xu, (lu ??= new WeakMap).set(uu, Xu), Xu.then((() => {
              Eu.tail === Xu && (Eu.tail = null), lu?.get(uu) === Xu && lu.delete(uu)
            })), Zu
          }
        };
      return uu._runtimeBuilds = fu, (uu._beforeRender ??= []).push((() => {
        fu._e()
      })), uu._disposables.push((() => {
        Eu.fO = !0, Eu.active.clear();
        for (const ju of Eu.installedMeshes) Yu(uu, Eu, ju);
        for (const Eu of uu._groups.keys()) qu?.get(Eu)?.Q_.delete(uu);
        uu._runtimeBuilds = void 0, ju._pbrMeshGeomContexts = void 0
      })), fu
    }

    function Ou(uu, Eu, ju) {
      const su = Eu.installed.get(ju);
      if (su) {
        for (const Eu of su) qu?.get(Eu)?.scenes.get(uu)?.delete(ju);
        Eu.installed.delete(ju), Eu.installedMeshes.delete(ju)
      }
    }

    function Yu(uu, Eu, ju) {
      Ou(uu, Eu, ju)
    }

    function hu(uu, Eu, ju, su, Uu, Zu) {
      return !Eu.fO && Eu.generations.get(su) === Zu && uu.meshes.includes(su) && su.material === Uu && Uu._buildGroup === ju
    }

    function Du(uu, Eu, ju, Uu) {
      const Zu = uu._meshDisposables.get(ju);
      if (Zu && Zu !== Uu) {
        uu._meshDisposables.delete(ju);
        for (const uu of Zu) uu()
      }
      if (Uu)
        if (uu.meshes.includes(ju)) uu._meshDisposables.set(ju, Uu);
        else if (Eu.fO)
        for (const su of Uu) su();
      else(0, su.d)(uu.surface.engine, (() => {
        for (const uu of Uu) uu()
      }));
      Xu(Eu, ju, Uu)
    }

    function gu(uu, Eu) {
      if (!Eu.fO) return;
      const ju = uu._disposables.splice(0);
      for (const su of ju) su()
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);