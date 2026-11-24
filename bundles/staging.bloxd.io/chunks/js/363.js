export const id = 363;
export const ids = [363];
export const modules = {
  61450: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      A: () => im,
      B: () => pm,
      C: () => Rm,
      X: () => Em
    });
    var hm = fm(41743),
      Am = (mm, Tm) => mm.order - Tm.order;

    function am(mm, Tm, fm) {
      mm.pendingDisposers.set(Tm, fm)
    }

    function xm(mm, Tm, fm) {
      fm && mm.pendingDisposers.get(Tm) === fm && mm.pendingDisposers.delete(Tm)
    }
    var wm = null,
      Dm = null;

    function im(mm, Tm, fm, hm) {
      if (!Tm || fm.material !== Tm) return hm ?? Promise.resolve();
      const Am = pm(mm, Tm._buildGroup, fm);
      return hm ? Promise.all([hm, Am]).then((() => {})) : Am
    }

    function Rm(mm, Tm, fm) {
      let hm = fm;
      for (const Am of Tm) {
        const Tm = Array.isArray(Am),
          fm = Tm ? Am[0] : Am;
        hm = im(mm, Tm ? Am[1] : fm.material, fm, hm)
      }
      return (hm ?? Promise.resolve()).catch((Tm => {
        mm._runtimeBuilds?._x(Tm)
      }))
    }

    function pm(mm, Tm, hm) {
      if (mm._z || !mm.meshes.includes(hm)) return mm._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(mm, Tm, fm) {
          for (const [Am, am] of mm._groups)
            if (Am !== Tm) {
              const mm = am.indexOf(fm);
              mm >= 0 && am.splice(mm, 1)
            } let hm = mm._groups.get(Tm);
          hm || (hm = [], mm._groups.set(Tm, hm));
          hm.includes(fm) || hm.push(fm)
        }(mm, Tm, hm), "pbr" === Tm._materialFamily && (mm._built || mm._groups.get(Tm)?.r)) {
        const Tm = mm._runtimeBuilds ?? om(mm),
          hm = fm.e(393).then((() => fm(62008))).then((Tm => {
            let {
              rebuildScenePbrPipelines: fm
            } = Tm;
            return mm._z ? void 0 : fm(mm, !0)
          })).catch((Tm => {
            mm._runtimeBuilds?._x(Tm)
          }));
        return Tm.track(hm)
      }
      return (mm._runtimeBuilds ?? om(mm)).queue(Tm, hm).catch((() => {}))
    }

    function Em(mm, Tm, fm) {
      return mm._z ? Promise.resolve(void 0) : (mm._runtimeBuilds ?? om(mm)).exclusive(Tm, fm)
    }

    function om(mm) {
      const Tm = {
          PO: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        fm = mm,
        im = {
          queue: (fm, Rm) => {
            const pm = (Tm.generations.get(Rm) ?? 0) + 1,
              Em = Rm.material;
            Tm.generations.set(Rm, pm);
            const om = Tm.chains.get(Rm),
              Om = [Tm.tail, wm?.get(fm)].filter((mm => !!mm));
            let Ym = () => {};
            const Im = new Promise((mm => {
              Ym = mm
            }));
            Tm.tail = Im, (wm ??= new WeakMap).set(fm, Im);
            const Km = (om ? om.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Om))).then((() => async function(mm, Tm, fm, wm, im, Rm) {
              if (!qm(mm, Tm, fm, wm, im, Rm)) return;
              const pm = mm._meshDisposables.get(wm);
              pm && (mm._meshDisposables.delete(wm), am(Tm, wm, pm));
              const Em = fm._rebuildSingle,
                om = Dm?.get(fm)?.B5.get(mm) ?? mm._groups.get(fm)?.r,
                Om = !!mm._groups.get(fm)?.r,
                Ym = mm._disposables.length,
                Im = mm,
                Km = Im._pbrGeomContext;
              let Qm, nm;
              try {
                nm = await fm(mm, [wm]), Qm = Im._pbrGeomContext
              } catch (zm) {
                if (jm(mm, Tm, wm, pm), Vm(mm, Tm), !qm(mm, Tm, fm, wm, im, Rm)) return;
                throw zm
              } finally {
                fm._rebuildSingle = Em, "pbr" === fm._materialFamily && Om && (Im._pbrGeomContext = Km)
              }
              if (!qm(mm, Tm, fm, wm, im, Rm)) return jm(mm, Tm, wm, pm), void Vm(mm, Tm);
              for (let hm = mm._renderables.length - 1; hm >= 0; hm--) mm._renderables[hm].mesh === wm && mm._renderables.splice(hm, 1);
              if (pm) {
                for (const Tm of pm) {
                  const fm = mm._disposables.indexOf(Tm);
                  fm >= 0 && mm._disposables.splice(fm, 1);
                  const hm = Tm.p;
                  if (hm) {
                    hm._disposed = !0;
                    const mm = hm._owner;
                    if (mm) {
                      const Tm = mm.indexOf(hm);
                      Tm >= 0 && mm.splice(Tm, 1), hm._owner = void 0, 0 === mm.length && hm._onOwnerEmpty?.()
                    } else hm._onOwnerEmpty?.();
                    hm._onOwnerEmpty && (hm._onOwnerEmpty = void 0)
                  }
                }(0, hm.c)(mm.surface.engine, (() => {
                  for (const mm of pm) mm()
                }))
              }
              xm(Tm, wm, pm), mm._renderables.push(...nm.renderables);
              const Jm = mm._groups.get(fm);
              Jm && (Jm.o = [...(Jm.o ?? []).filter((mm => mm.mesh !== wm)), ...nm.renderables]);
              nm.updater && mm._uniformUpdaters.push(nm.updater);
              Om && function(mm, Tm) {
                const fm = new Set(mm._disposables.slice(0, Tm));
                for (let hm = mm._disposables.length - 1; hm >= Tm; hm--) fm.has(mm._disposables[hm]) && mm._disposables.splice(hm, 1)
              }(mm, Ym);
              "pbr" === fm._materialFamily && Om && Qm && (Im._pbrMeshGeomContexts ??= new WeakMap).set(wm, Qm);
              (function(mm, Tm, fm, hm, Am, am) {
                let xm = Dm?.get(fm);
                if (!xm) {
                  const mm = new WeakMap,
                    Tm = new WeakMap,
                    hm = (hm, Am, am, xm) => {
                      const wm = mm.get(hm)?.get(Am);
                      if (wm) return wm(hm, Am, am, xm);
                      const Dm = Tm.get(hm) ?? hm._groups.get(fm)?.r;
                      if (Dm) return Dm(hm, Am, am, xm);
                      throw new Error("Material group has not completed its initial build")
                    };
                  xm = {
                    B5: Tm,
                    dispatch: hm,
                    scenes: mm
                  }, (Dm ??= new WeakMap).set(fm, xm)
                }
                let wm = xm.scenes.get(mm);
                wm || (wm = new WeakMap, xm.scenes.set(mm, wm));
                wm.set(hm, Am), xm.B5.has(mm) || xm.B5.set(mm, am ?? Am);
                const im = mm._groups.get(fm);
                im && (im.r = xm.dispatch);
                let Rm = Tm.installed.get(hm);
                Rm || (Rm = new Set, Tm.installed.set(hm, Rm));
                Rm.add(fm), Tm.installedMeshes.add(hm)
              })(mm, Tm, fm, wm, nm.rebuildSingle, Om ? om : nm.rebuildSingle), wm.material._csmGen = (wm.material._csmGen ?? 0) + 1;
              const cm = mm._groups.get(fm);
              cm && !Om && (cm.r = nm.rebuildSingle);
              mm._renderables.sort(Am), mm._renderableVersion++, mm._materialEpoch++
            }(mm, Tm, fm, Rm, Em, pm))).catch((hm => {
              throw qm(mm, Tm, fm, Rm, Em, pm) && (Tm.error = hm instanceof Error ? hm : new Error("Runtime mesh build failed", {
                cause: hm
              })), hm
            })).finally((() => {
              Ym(), Tm.tail === Im && (Tm.tail = null), wm?.get(fm) === Im && wm.delete(fm)
            })).finally((() => {
              Tm.chains.get(Rm) === Km && Tm.chains.delete(Rm)
            }));
            return Tm.chains.set(Rm, Km), im.track(Km)
          },
          all: () => Promise.all(Tm.active).then((() => {})),
          track: mm => {
            const fm = mm.finally((() => Tm.active.delete(fm)));
            return Tm.active.add(fm), Promise.all(Tm.active).then((() => {}))
          },
          base: (Tm, fm) => {
            const hm = Dm?.get(Tm);
            return hm && hm.B5.set(mm, fm), hm?.dispatch ?? fm
          },
          get w() {
            return !!Tm.tail
          },
          pendingDisposers: mm => Tm.pendingDisposers.get(mm),
          holdPendingDisposers: (mm, fm) => am(Tm, mm, fm),
          releasePendingDisposers: (mm, fm) => xm(Tm, mm, fm),
          reset: hm => {
            Ym(mm, Tm, hm), fm._pbrMeshGeomContexts?.delete(hm)
          },
          remove: hm => {
            Tm.generations.set(hm, (Tm.generations.get(hm) ?? 0) + 1), Tm.chains.delete(hm), Om(mm, Tm, hm), fm._pbrMeshGeomContexts?.delete(hm)
          },
          dropBase: Tm => {
            const fm = Dm?.get(Tm);
            fm && (fm.B5.delete(mm), fm.scenes.delete(mm))
          },
          wait: async mm => {
            const fm = new Set;
            for (const hm of mm) {
              const mm = Tm.chains.get(hm);
              mm && fm.add(mm)
            }
            await Promise.all(fm)
          },
          _e: function() {
            let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (Tm.error) {
              const fm = Tm.error;
              throw mm && (Tm.error = null), fm
            }
          },
          _x: mm => {
            Tm.error = mm instanceof Error ? mm : new Error("Runtime mesh build failed", {
              cause: mm
            })
          },
          _d: () => Tm.PO,
          exclusive: (mm, fm) => {
            const hm = [];
            Tm.tail && hm.push(Tm.tail);
            const Am = wm?.get(mm);
            Am && hm.push(Am);
            const am = Promise.all(hm).then(fm),
              xm = am.then((() => {}), (() => {}));
            return Tm.tail = xm, (wm ??= new WeakMap).set(mm, xm), xm.then((() => {
              Tm.tail === xm && (Tm.tail = null), wm?.get(mm) === xm && wm.delete(mm)
            })), am
          }
        };
      return mm._runtimeBuilds = im, (mm._beforeRender ??= []).push((() => {
        im._e()
      })), mm._disposables.push((() => {
        Tm.PO = !0, Tm.active.clear();
        for (const fm of Tm.installedMeshes) Ym(mm, Tm, fm);
        for (const Tm of mm._groups.keys()) Dm?.get(Tm)?.B5.delete(mm);
        mm._runtimeBuilds = void 0, fm._pbrMeshGeomContexts = void 0
      })), im
    }

    function Om(mm, Tm, fm) {
      const hm = Tm.installed.get(fm);
      if (hm) {
        for (const Tm of hm) Dm?.get(Tm)?.scenes.get(mm)?.delete(fm);
        Tm.installed.delete(fm), Tm.installedMeshes.delete(fm)
      }
    }

    function Ym(mm, Tm, fm) {
      Om(mm, Tm, fm)
    }

    function qm(mm, Tm, fm, hm, Am, am) {
      return !Tm.PO && Tm.generations.get(hm) === am && mm.meshes.includes(hm) && hm.material === Am && Am._buildGroup === fm
    }

    function jm(mm, Tm, fm, Am) {
      const am = mm._meshDisposables.get(fm);
      if (am && am !== Am) {
        mm._meshDisposables.delete(fm);
        for (const mm of am) mm()
      }
      if (Am)
        if (mm.meshes.includes(fm)) mm._meshDisposables.set(fm, Am);
        else if (Tm.PO)
        for (const hm of Am) hm();
      else(0, hm.c)(mm.surface.engine, (() => {
        for (const mm of Am) mm()
      }));
      xm(Tm, fm, Am)
    }

    function Vm(mm, Tm) {
      if (!Tm.PO) return;
      const fm = mm._disposables.splice(0);
      for (const hm of fm) hm()
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);