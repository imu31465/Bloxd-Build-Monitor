export const id = 356;
export const ids = [356];
export const modules = {
  60704: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      A: () => Sb,
      B: () => Hb,
      C: () => ab,
      X: () => wb
    });
    var Bb = hb(41188),
      Ob = (bb, ub) => bb.order - ub.order;

    function Gb(bb, ub, hb) {
      bb.pendingDisposers.set(ub, hb)
    }

    function Ub(bb, ub, hb) {
      hb && bb.pendingDisposers.get(ub) === hb && bb.pendingDisposers.delete(ub)
    }
    var Lb = null,
      Yb = null;

    function Sb(bb, ub, hb, Bb) {
      if (!ub || hb.material !== ub) return Bb ?? Promise.resolve();
      const Ob = Hb(bb, ub._buildGroup, hb);
      return Bb ? Promise.all([Bb, Ob]).then((() => {})) : Ob
    }

    function ab(bb, ub, hb) {
      let Bb = hb;
      for (const Ob of ub) {
        const ub = Array.isArray(Ob),
          hb = ub ? Ob[0] : Ob;
        Bb = Sb(bb, ub ? Ob[1] : hb.material, hb, Bb)
      }
      return (Bb ?? Promise.resolve()).catch((ub => {
        bb._runtimeBuilds?._x(ub)
      }))
    }

    function Hb(bb, ub, Bb) {
      if (bb._z || !bb.meshes.includes(Bb)) return bb._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(bb, ub, hb) {
          for (const [Ob, Gb] of bb._groups)
            if (Ob !== ub) {
              const bb = Gb.indexOf(hb);
              bb >= 0 && Gb.splice(bb, 1)
            } let Bb = bb._groups.get(ub);
          Bb || (Bb = [], bb._groups.set(ub, Bb));
          Bb.includes(hb) || Bb.push(hb)
        }(bb, ub, Bb), "pbr" === ub._materialFamily && (bb._built || bb._groups.get(ub)?.r)) {
        const ub = bb._runtimeBuilds ?? Zb(bb),
          Bb = hb.e(386).then((() => hb(61312))).then((ub => {
            let {
              rebuildScenePbrPipelines: hb
            } = ub;
            return bb._z ? void 0 : hb(bb, !0)
          })).catch((ub => {
            bb._runtimeBuilds?._x(ub)
          }));
        return ub.track(Bb)
      }
      return (bb._runtimeBuilds ?? Zb(bb)).queue(ub, Bb).catch((() => {}))
    }

    function wb(bb, ub, hb) {
      return bb._z ? Promise.resolve(void 0) : (bb._runtimeBuilds ?? Zb(bb)).exclusive(ub, hb)
    }

    function Zb(bb) {
      const ub = {
          FZ: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        hb = bb,
        Sb = {
          queue: (hb, ab) => {
            const Hb = (ub.generations.get(ab) ?? 0) + 1,
              wb = ab.material;
            ub.generations.set(ab, Hb);
            const Zb = ub.chains.get(ab),
              Xb = [ub.tail, Lb?.get(hb)].filter((bb => !!bb));
            let pb = () => {};
            const Kb = new Promise((bb => {
              pb = bb
            }));
            ub.tail = Kb, (Lb ??= new WeakMap).set(hb, Kb);
            const Wb = (Zb ? Zb.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Xb))).then((() => async function(bb, ub, hb, Lb, Sb, ab) {
              if (!ob(bb, ub, hb, Lb, Sb, ab)) return;
              const Hb = bb._meshDisposables.get(Lb);
              Hb && (bb._meshDisposables.delete(Lb), Gb(ub, Lb, Hb));
              const wb = hb._rebuildSingle,
                Zb = Yb?.get(hb)?.o4.get(bb) ?? bb._groups.get(hb)?.r,
                Xb = !!bb._groups.get(hb)?.r,
                pb = bb._disposables.length,
                Kb = bb,
                Wb = Kb._pbrGeomContext;
              let Cb, db;
              try {
                db = await hb(bb, [Lb]), Cb = Kb._pbrGeomContext
              } catch (nb) {
                if (Ab(bb, ub, Lb, Hb), lb(bb, ub), !ob(bb, ub, hb, Lb, Sb, ab)) return;
                throw nb
              } finally {
                hb._rebuildSingle = wb, "pbr" === hb._materialFamily && Xb && (Kb._pbrGeomContext = Wb)
              }
              if (!ob(bb, ub, hb, Lb, Sb, ab)) return Ab(bb, ub, Lb, Hb), void lb(bb, ub);
              for (let Bb = bb._renderables.length - 1; Bb >= 0; Bb--) bb._renderables[Bb].mesh === Lb && bb._renderables.splice(Bb, 1);
              if (Hb) {
                for (const ub of Hb) {
                  const hb = bb._disposables.indexOf(ub);
                  hb >= 0 && bb._disposables.splice(hb, 1);
                  const Bb = ub.p;
                  if (Bb) {
                    Bb._disposed = !0;
                    const bb = Bb._owner;
                    if (bb) {
                      const ub = bb.indexOf(Bb);
                      ub >= 0 && bb.splice(ub, 1), Bb._owner = void 0, 0 === bb.length && Bb._onOwnerEmpty?.()
                    } else Bb._onOwnerEmpty?.();
                    Bb._onOwnerEmpty && (Bb._onOwnerEmpty = void 0)
                  }
                }(0, Bb.d)(bb.surface.engine, (() => {
                  for (const bb of Hb) bb()
                }))
              }
              Ub(ub, Lb, Hb), bb._renderables.push(...db.renderables);
              const rb = bb._groups.get(hb);
              rb && (rb.o = [...(rb.o ?? []).filter((bb => bb.mesh !== Lb)), ...db.renderables]);
              db.updater && bb._uniformUpdaters.push(db.updater);
              Xb && function(bb, ub) {
                const hb = new Set(bb._disposables.slice(0, ub));
                for (let Bb = bb._disposables.length - 1; Bb >= ub; Bb--) hb.has(bb._disposables[Bb]) && bb._disposables.splice(Bb, 1)
              }(bb, pb);
              "pbr" === hb._materialFamily && Xb && Cb && (Kb._pbrMeshGeomContexts ??= new WeakMap).set(Lb, Cb);
              (function(bb, ub, hb, Bb, Ob, Gb) {
                let Ub = Yb?.get(hb);
                if (!Ub) {
                  const bb = new WeakMap,
                    ub = new WeakMap,
                    Bb = (Bb, Ob, Gb, Ub) => {
                      const Lb = bb.get(Bb)?.get(Ob);
                      if (Lb) return Lb(Bb, Ob, Gb, Ub);
                      const Yb = ub.get(Bb) ?? Bb._groups.get(hb)?.r;
                      if (Yb) return Yb(Bb, Ob, Gb, Ub);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Ub = {
                    o4: ub,
                    dispatch: Bb,
                    scenes: bb
                  }, (Yb ??= new WeakMap).set(hb, Ub)
                }
                let Lb = Ub.scenes.get(bb);
                Lb || (Lb = new WeakMap, Ub.scenes.set(bb, Lb));
                Lb.set(Bb, Ob), Ub.o4.has(bb) || Ub.o4.set(bb, Gb ?? Ob);
                const Sb = bb._groups.get(hb);
                Sb && (Sb.r = Ub.dispatch);
                let ab = ub.installed.get(Bb);
                ab || (ab = new Set, ub.installed.set(Bb, ab));
                ab.add(hb), ub.installedMeshes.add(Bb)
              })(bb, ub, hb, Lb, db.rebuildSingle, Xb ? Zb : db.rebuildSingle), Lb.material._csmGen = (Lb.material._csmGen ?? 0) + 1;
              const jb = bb._groups.get(hb);
              jb && !Xb && (jb.r = db.rebuildSingle);
              bb._renderables.sort(Ob), bb._renderableVersion++, bb._materialEpoch++
            }(bb, ub, hb, ab, wb, Hb))).catch((Bb => {
              throw ob(bb, ub, hb, ab, wb, Hb) && (ub.error = Bb instanceof Error ? Bb : new Error("Runtime mesh build failed", {
                cause: Bb
              })), Bb
            })).finally((() => {
              pb(), ub.tail === Kb && (ub.tail = null), Lb?.get(hb) === Kb && Lb.delete(hb)
            })).finally((() => {
              ub.chains.get(ab) === Wb && ub.chains.delete(ab)
            }));
            return ub.chains.set(ab, Wb), Sb.track(Wb)
          },
          all: () => Promise.all(ub.active).then((() => {})),
          track: bb => {
            const hb = bb.finally((() => ub.active.delete(hb)));
            return ub.active.add(hb), Promise.all(ub.active).then((() => {}))
          },
          base: (ub, hb) => {
            const Bb = Yb?.get(ub);
            return Bb && Bb.o4.set(bb, hb), Bb?.dispatch ?? hb
          },
          get w() {
            return !!ub.tail
          },
          pendingDisposers: bb => ub.pendingDisposers.get(bb),
          holdPendingDisposers: (bb, hb) => Gb(ub, bb, hb),
          releasePendingDisposers: (bb, hb) => Ub(ub, bb, hb),
          reset: Bb => {
            pb(bb, ub, Bb), hb._pbrMeshGeomContexts?.delete(Bb)
          },
          remove: Bb => {
            ub.generations.set(Bb, (ub.generations.get(Bb) ?? 0) + 1), ub.chains.delete(Bb), Xb(bb, ub, Bb), hb._pbrMeshGeomContexts?.delete(Bb)
          },
          dropBase: ub => {
            const hb = Yb?.get(ub);
            hb && (hb.o4.delete(bb), hb.scenes.delete(bb))
          },
          wait: async bb => {
            const hb = new Set;
            for (const Bb of bb) {
              const bb = ub.chains.get(Bb);
              bb && hb.add(bb)
            }
            await Promise.all(hb)
          },
          _e: function() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (ub.error) {
              const hb = ub.error;
              throw bb && (ub.error = null), hb
            }
          },
          _x: bb => {
            ub.error = bb instanceof Error ? bb : new Error("Runtime mesh build failed", {
              cause: bb
            })
          },
          _d: () => ub.FZ,
          exclusive: (bb, hb) => {
            const Bb = [];
            ub.tail && Bb.push(ub.tail);
            const Ob = Lb?.get(bb);
            Ob && Bb.push(Ob);
            const Gb = Promise.all(Bb).then(hb),
              Ub = Gb.then((() => {}), (() => {}));
            return ub.tail = Ub, (Lb ??= new WeakMap).set(bb, Ub), Ub.then((() => {
              ub.tail === Ub && (ub.tail = null), Lb?.get(bb) === Ub && Lb.delete(bb)
            })), Gb
          }
        };
      return bb._runtimeBuilds = Sb, (bb._beforeRender ??= []).push((() => {
        Sb._e()
      })), bb._disposables.push((() => {
        ub.FZ = !0, ub.active.clear();
        for (const hb of ub.installedMeshes) pb(bb, ub, hb);
        for (const ub of bb._groups.keys()) Yb?.get(ub)?.o4.delete(bb);
        bb._runtimeBuilds = void 0, hb._pbrMeshGeomContexts = void 0
      })), Sb
    }

    function Xb(bb, ub, hb) {
      const Bb = ub.installed.get(hb);
      if (Bb) {
        for (const ub of Bb) Yb?.get(ub)?.scenes.get(bb)?.delete(hb);
        ub.installed.delete(hb), ub.installedMeshes.delete(hb)
      }
    }

    function pb(bb, ub, hb) {
      Xb(bb, ub, hb)
    }

    function ob(bb, ub, hb, Bb, Ob, Gb) {
      return !ub.FZ && ub.generations.get(Bb) === Gb && bb.meshes.includes(Bb) && Bb.material === Ob && Ob._buildGroup === hb
    }

    function Ab(bb, ub, hb, Ob) {
      const Gb = bb._meshDisposables.get(hb);
      if (Gb && Gb !== Ob) {
        bb._meshDisposables.delete(hb);
        for (const bb of Gb) bb()
      }
      if (Ob)
        if (bb.meshes.includes(hb)) bb._meshDisposables.set(hb, Ob);
        else if (ub.FZ)
        for (const Bb of Ob) Bb();
      else(0, Bb.d)(bb.surface.engine, (() => {
        for (const bb of Ob) bb()
      }));
      Ub(ub, hb, Ob)
    }

    function lb(bb, ub) {
      if (!ub.FZ) return;
      const hb = bb._disposables.splice(0);
      for (const Bb of hb) Bb()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);