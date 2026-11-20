export const id = 355;
export const ids = [355];
export const modules = {
  60359: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      A: () => eb,
      B: () => Lb,
      C: () => vb,
      X: () => Pb
    });
    var Ab = Ub(40849),
      Mb = (bb, ab) => bb.order - ab.order;

    function Tb(bb, ab, Ub) {
      bb.pendingDisposers.set(ab, Ub)
    }

    function Eb(bb, ab, Ub) {
      Ub && bb.pendingDisposers.get(ab) === Ub && bb.pendingDisposers.delete(ab)
    }
    var Yb = null,
      Bb = null;

    function eb(bb, ab, Ub, Ab) {
      if (!ab || Ub.material !== ab) return Ab ?? Promise.resolve();
      const Mb = Lb(bb, ab._buildGroup, Ub);
      return Ab ? Promise.all([Ab, Mb]).then((() => {})) : Mb
    }

    function vb(bb, ab, Ub) {
      let Ab = Ub;
      for (const Mb of ab) {
        const ab = Array.isArray(Mb),
          Ub = ab ? Mb[0] : Mb;
        Ab = eb(bb, ab ? Mb[1] : Ub.material, Ub, Ab)
      }
      return (Ab ?? Promise.resolve()).catch((ab => {
        bb._runtimeBuilds?._x(ab)
      }))
    }

    function Lb(bb, ab, Ab) {
      if (bb._z || !bb.meshes.includes(Ab)) return bb._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(bb, ab, Ub) {
          for (const [Mb, Tb] of bb._groups)
            if (Mb !== ab) {
              const bb = Tb.indexOf(Ub);
              bb >= 0 && Tb.splice(bb, 1)
            } let Ab = bb._groups.get(ab);
          Ab || (Ab = [], bb._groups.set(ab, Ab));
          Ab.includes(Ub) || Ab.push(Ub)
        }(bb, ab, Ab), "pbr" === ab._materialFamily && (bb._built || bb._groups.get(ab)?.r)) {
        const ab = bb._runtimeBuilds ?? Xb(bb),
          Ab = Ub.e(385).then((() => Ub(61044))).then((ab => {
            let {
              rebuildScenePbrPipelines: Ub
            } = ab;
            return bb._z ? void 0 : Ub(bb, !0)
          })).catch((ab => {
            bb._runtimeBuilds?._x(ab)
          }));
        return ab.track(Ab)
      }
      return (bb._runtimeBuilds ?? Xb(bb)).queue(ab, Ab).catch((() => {}))
    }

    function Pb(bb, ab, Ub) {
      return bb._z ? Promise.resolve(void 0) : (bb._runtimeBuilds ?? Xb(bb)).exclusive(ab, Ub)
    }

    function Xb(bb) {
      const ab = {
          cX: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Ub = bb,
        eb = {
          queue: (Ub, vb) => {
            const Lb = (ab.generations.get(vb) ?? 0) + 1,
              Pb = vb.material;
            ab.generations.set(vb, Lb);
            const Xb = ab.chains.get(vb),
              jb = [ab.tail, Yb?.get(Ub)].filter((bb => !!bb));
            let Rb = () => {};
            const Db = new Promise((bb => {
              Rb = bb
            }));
            ab.tail = Db, (Yb ??= new WeakMap).set(Ub, Db);
            const zb = (Xb ? Xb.catch((() => {})) : Promise.resolve()).then((() => Promise.all(jb))).then((() => async function(bb, ab, Ub, Yb, eb, vb) {
              if (!kb(bb, ab, Ub, Yb, eb, vb)) return;
              const Lb = bb._meshDisposables.get(Yb);
              Lb && (bb._meshDisposables.delete(Yb), Tb(ab, Yb, Lb));
              const Pb = Ub._rebuildSingle,
                Xb = Bb?.get(Ub)?.o3.get(bb) ?? bb._groups.get(Ub)?.r,
                jb = !!bb._groups.get(Ub)?.r,
                Rb = bb._disposables.length,
                Db = bb,
                zb = Db._pbrGeomContext;
              let xb, ib;
              try {
                ib = await Ub(bb, [Yb]), xb = Db._pbrGeomContext
              } catch (pb) {
                if (yb(bb, ab, Yb, Lb), Zb(bb, ab), !kb(bb, ab, Ub, Yb, eb, vb)) return;
                throw pb
              } finally {
                Ub._rebuildSingle = Pb, "pbr" === Ub._materialFamily && jb && (Db._pbrGeomContext = zb)
              }
              if (!kb(bb, ab, Ub, Yb, eb, vb)) return yb(bb, ab, Yb, Lb), void Zb(bb, ab);
              for (let Ab = bb._renderables.length - 1; Ab >= 0; Ab--) bb._renderables[Ab].mesh === Yb && bb._renderables.splice(Ab, 1);
              if (Lb) {
                for (const ab of Lb) {
                  const Ub = bb._disposables.indexOf(ab);
                  Ub >= 0 && bb._disposables.splice(Ub, 1);
                  const Ab = ab.p;
                  if (Ab) {
                    Ab._disposed = !0;
                    const bb = Ab._owner;
                    if (bb) {
                      const ab = bb.indexOf(Ab);
                      ab >= 0 && bb.splice(ab, 1), Ab._owner = void 0, 0 === bb.length && Ab._onOwnerEmpty?.()
                    } else Ab._onOwnerEmpty?.();
                    Ab._onOwnerEmpty && (Ab._onOwnerEmpty = void 0)
                  }
                }(0, Ab.b)(bb.surface.engine, (() => {
                  for (const bb of Lb) bb()
                }))
              }
              Eb(ab, Yb, Lb), bb._renderables.push(...ib.renderables);
              const fb = bb._groups.get(Ub);
              fb && (fb.o = [...(fb.o ?? []).filter((bb => bb.mesh !== Yb)), ...ib.renderables]);
              ib.updater && bb._uniformUpdaters.push(ib.updater);
              jb && function(bb, ab) {
                const Ub = new Set(bb._disposables.slice(0, ab));
                for (let Ab = bb._disposables.length - 1; Ab >= ab; Ab--) Ub.has(bb._disposables[Ab]) && bb._disposables.splice(Ab, 1)
              }(bb, Rb);
              "pbr" === Ub._materialFamily && jb && xb && (Db._pbrMeshGeomContexts ??= new WeakMap).set(Yb, xb);
              (function(bb, ab, Ub, Ab, Mb, Tb) {
                let Eb = Bb?.get(Ub);
                if (!Eb) {
                  const bb = new WeakMap,
                    ab = new WeakMap,
                    Ab = (Ab, Mb, Tb, Eb) => {
                      const Yb = bb.get(Ab)?.get(Mb);
                      if (Yb) return Yb(Ab, Mb, Tb, Eb);
                      const Bb = ab.get(Ab) ?? Ab._groups.get(Ub)?.r;
                      if (Bb) return Bb(Ab, Mb, Tb, Eb);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Eb = {
                    o3: ab,
                    dispatch: Ab,
                    scenes: bb
                  }, (Bb ??= new WeakMap).set(Ub, Eb)
                }
                let Yb = Eb.scenes.get(bb);
                Yb || (Yb = new WeakMap, Eb.scenes.set(bb, Yb));
                Yb.set(Ab, Mb), Eb.o3.has(bb) || Eb.o3.set(bb, Tb ?? Mb);
                const eb = bb._groups.get(Ub);
                eb && (eb.r = Eb.dispatch);
                let vb = ab.installed.get(Ab);
                vb || (vb = new Set, ab.installed.set(Ab, vb));
                vb.add(Ub), ab.installedMeshes.add(Ab)
              })(bb, ab, Ub, Yb, ib.rebuildSingle, jb ? Xb : ib.rebuildSingle), Yb.material._csmGen = (Yb.material._csmGen ?? 0) + 1;
              const mb = bb._groups.get(Ub);
              mb && !jb && (mb.r = ib.rebuildSingle);
              bb._renderables.sort(Mb), bb._renderableVersion++, bb._materialEpoch++
            }(bb, ab, Ub, vb, Pb, Lb))).catch((Ab => {
              throw kb(bb, ab, Ub, vb, Pb, Lb) && (ab.error = Ab instanceof Error ? Ab : new Error("Runtime mesh build failed", {
                cause: Ab
              })), Ab
            })).finally((() => {
              Rb(), ab.tail === Db && (ab.tail = null), Yb?.get(Ub) === Db && Yb.delete(Ub)
            })).finally((() => {
              ab.chains.get(vb) === zb && ab.chains.delete(vb)
            }));
            return ab.chains.set(vb, zb), eb.track(zb)
          },
          all: () => Promise.all(ab.active).then((() => {})),
          track: bb => {
            const Ub = bb.finally((() => ab.active.delete(Ub)));
            return ab.active.add(Ub), Promise.all(ab.active).then((() => {}))
          },
          base: (ab, Ub) => {
            const Ab = Bb?.get(ab);
            return Ab && Ab.o3.set(bb, Ub), Ab?.dispatch ?? Ub
          },
          get w() {
            return !!ab.tail
          },
          pendingDisposers: bb => ab.pendingDisposers.get(bb),
          holdPendingDisposers: (bb, Ub) => Tb(ab, bb, Ub),
          releasePendingDisposers: (bb, Ub) => Eb(ab, bb, Ub),
          reset: Ab => {
            Rb(bb, ab, Ab), Ub._pbrMeshGeomContexts?.delete(Ab)
          },
          remove: Ab => {
            ab.generations.set(Ab, (ab.generations.get(Ab) ?? 0) + 1), ab.chains.delete(Ab), jb(bb, ab, Ab), Ub._pbrMeshGeomContexts?.delete(Ab)
          },
          dropBase: ab => {
            const Ub = Bb?.get(ab);
            Ub && (Ub.o3.delete(bb), Ub.scenes.delete(bb))
          },
          wait: async bb => {
            const Ub = new Set;
            for (const Ab of bb) {
              const bb = ab.chains.get(Ab);
              bb && Ub.add(bb)
            }
            await Promise.all(Ub)
          },
          _e: function() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (ab.error) {
              const Ub = ab.error;
              throw bb && (ab.error = null), Ub
            }
          },
          _x: bb => {
            ab.error = bb instanceof Error ? bb : new Error("Runtime mesh build failed", {
              cause: bb
            })
          },
          _d: () => ab.cX,
          exclusive: (bb, Ub) => {
            const Ab = [];
            ab.tail && Ab.push(ab.tail);
            const Mb = Yb?.get(bb);
            Mb && Ab.push(Mb);
            const Tb = Promise.all(Ab).then(Ub),
              Eb = Tb.then((() => {}), (() => {}));
            return ab.tail = Eb, (Yb ??= new WeakMap).set(bb, Eb), Eb.then((() => {
              ab.tail === Eb && (ab.tail = null), Yb?.get(bb) === Eb && Yb.delete(bb)
            })), Tb
          }
        };
      return bb._runtimeBuilds = eb, (bb._beforeRender ??= []).push((() => {
        eb._e()
      })), bb._disposables.push((() => {
        ab.cX = !0, ab.active.clear();
        for (const Ub of ab.installedMeshes) Rb(bb, ab, Ub);
        for (const ab of bb._groups.keys()) Bb?.get(ab)?.o3.delete(bb);
        bb._runtimeBuilds = void 0, Ub._pbrMeshGeomContexts = void 0
      })), eb
    }

    function jb(bb, ab, Ub) {
      const Ab = ab.installed.get(Ub);
      if (Ab) {
        for (const ab of Ab) Bb?.get(ab)?.scenes.get(bb)?.delete(Ub);
        ab.installed.delete(Ub), ab.installedMeshes.delete(Ub)
      }
    }

    function Rb(bb, ab, Ub) {
      jb(bb, ab, Ub)
    }

    function kb(bb, ab, Ub, Ab, Mb, Tb) {
      return !ab.cX && ab.generations.get(Ab) === Tb && bb.meshes.includes(Ab) && Ab.material === Mb && Mb._buildGroup === Ub
    }

    function yb(bb, ab, Ub, Mb) {
      const Tb = bb._meshDisposables.get(Ub);
      if (Tb && Tb !== Mb) {
        bb._meshDisposables.delete(Ub);
        for (const bb of Tb) bb()
      }
      if (Mb)
        if (bb.meshes.includes(Ub)) bb._meshDisposables.set(Ub, Mb);
        else if (ab.cX)
        for (const Ab of Mb) Ab();
      else(0, Ab.b)(bb.surface.engine, (() => {
        for (const bb of Mb) bb()
      }));
      Eb(ab, Ub, Mb)
    }

    function Zb(bb, ab) {
      if (!ab.cX) return;
      const Ub = bb._disposables.splice(0);
      for (const Ab of Ub) Ab()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);