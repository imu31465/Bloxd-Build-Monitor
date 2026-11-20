export const id = 355;
export const ids = [355];
export const modules = {
  60691: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      A: () => Hb,
      B: () => Mb,
      C: () => fb,
      X: () => Xb
    });
    var kb = sb(41130),
      Wb = (bb, cb) => bb.order - cb.order;

    function ab(bb, cb, sb) {
      bb.pendingDisposers.set(cb, sb)
    }

    function Tb(bb, cb, sb) {
      sb && bb.pendingDisposers.get(cb) === sb && bb.pendingDisposers.delete(cb)
    }
    var Ub = null,
      Ib = null;

    function Hb(bb, cb, sb, kb) {
      if (!cb || sb.material !== cb) return kb ?? Promise.resolve();
      const Wb = Mb(bb, cb._buildGroup, sb);
      return kb ? Promise.all([kb, Wb]).then((() => {})) : Wb
    }

    function fb(bb, cb, sb) {
      let kb = sb;
      for (const Wb of cb) {
        const cb = Array.isArray(Wb),
          sb = cb ? Wb[0] : Wb;
        kb = Hb(bb, cb ? Wb[1] : sb.material, sb, kb)
      }
      return (kb ?? Promise.resolve()).catch((cb => {
        bb._runtimeBuilds?._x(cb)
      }))
    }

    function Mb(bb, cb, kb) {
      if (bb._z || !bb.meshes.includes(kb)) return bb._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(bb, cb, sb) {
          for (const [Wb, ab] of bb._groups)
            if (Wb !== cb) {
              const bb = ab.indexOf(sb);
              bb >= 0 && ab.splice(bb, 1)
            } let kb = bb._groups.get(cb);
          kb || (kb = [], bb._groups.set(cb, kb));
          kb.includes(sb) || kb.push(sb)
        }(bb, cb, kb), "pbr" === cb._materialFamily && (bb._built || bb._groups.get(cb)?.r)) {
        const cb = bb._runtimeBuilds ?? nb(bb),
          kb = sb.e(385).then((() => sb(61329))).then((cb => {
            let {
              rebuildScenePbrPipelines: sb
            } = cb;
            return bb._z ? void 0 : sb(bb, !0)
          })).catch((cb => {
            bb._runtimeBuilds?._x(cb)
          }));
        return cb.track(kb)
      }
      return (bb._runtimeBuilds ?? nb(bb)).queue(cb, kb).catch((() => {}))
    }

    function Xb(bb, cb, sb) {
      return bb._z ? Promise.resolve(void 0) : (bb._runtimeBuilds ?? nb(bb)).exclusive(cb, sb)
    }

    function nb(bb) {
      const cb = {
          Em: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        sb = bb,
        Hb = {
          queue: (sb, fb) => {
            const Mb = (cb.generations.get(fb) ?? 0) + 1,
              Xb = fb.material;
            cb.generations.set(fb, Mb);
            const nb = cb.chains.get(fb),
              mb = [cb.tail, Ub?.get(sb)].filter((bb => !!bb));
            let lb = () => {};
            const Nb = new Promise((bb => {
              lb = bb
            }));
            cb.tail = Nb, (Ub ??= new WeakMap).set(sb, Nb);
            const Vb = (nb ? nb.catch((() => {})) : Promise.resolve()).then((() => Promise.all(mb))).then((() => async function(bb, cb, sb, Ub, Hb, fb) {
              if (!Qb(bb, cb, sb, Ub, Hb, fb)) return;
              const Mb = bb._meshDisposables.get(Ub);
              Mb && (bb._meshDisposables.delete(Ub), ab(cb, Ub, Mb));
              const Xb = sb._rebuildSingle,
                nb = Ib?.get(sb)?.Z6.get(bb) ?? bb._groups.get(sb)?.r,
                mb = !!bb._groups.get(sb)?.r,
                lb = bb._disposables.length,
                Nb = bb,
                Vb = Nb._pbrGeomContext;
              let Lb, ub;
              try {
                ub = await sb(bb, [Ub]), Lb = Nb._pbrGeomContext
              } catch (Jb) {
                if (eb(bb, cb, Ub, Mb), Cb(bb, cb), !Qb(bb, cb, sb, Ub, Hb, fb)) return;
                throw Jb
              } finally {
                sb._rebuildSingle = Xb, "pbr" === sb._materialFamily && mb && (Nb._pbrGeomContext = Vb)
              }
              if (!Qb(bb, cb, sb, Ub, Hb, fb)) return eb(bb, cb, Ub, Mb), void Cb(bb, cb);
              for (let kb = bb._renderables.length - 1; kb >= 0; kb--) bb._renderables[kb].mesh === Ub && bb._renderables.splice(kb, 1);
              if (Mb) {
                for (const cb of Mb) {
                  const sb = bb._disposables.indexOf(cb);
                  sb >= 0 && bb._disposables.splice(sb, 1);
                  const kb = cb.p;
                  if (kb) {
                    kb._disposed = !0;
                    const bb = kb._owner;
                    if (bb) {
                      const cb = bb.indexOf(kb);
                      cb >= 0 && bb.splice(cb, 1), kb._owner = void 0, 0 === bb.length && kb._onOwnerEmpty?.()
                    } else kb._onOwnerEmpty?.();
                    kb._onOwnerEmpty && (kb._onOwnerEmpty = void 0)
                  }
                }(0, kb.b)(bb.surface.engine, (() => {
                  for (const bb of Mb) bb()
                }))
              }
              Tb(cb, Ub, Mb), bb._renderables.push(...ub.renderables);
              const Yb = bb._groups.get(sb);
              Yb && (Yb.o = [...(Yb.o ?? []).filter((bb => bb.mesh !== Ub)), ...ub.renderables]);
              ub.updater && bb._uniformUpdaters.push(ub.updater);
              mb && function(bb, cb) {
                const sb = new Set(bb._disposables.slice(0, cb));
                for (let kb = bb._disposables.length - 1; kb >= cb; kb--) sb.has(bb._disposables[kb]) && bb._disposables.splice(kb, 1)
              }(bb, lb);
              "pbr" === sb._materialFamily && mb && Lb && (Nb._pbrMeshGeomContexts ??= new WeakMap).set(Ub, Lb);
              (function(bb, cb, sb, kb, Wb, ab) {
                let Tb = Ib?.get(sb);
                if (!Tb) {
                  const bb = new WeakMap,
                    cb = new WeakMap,
                    kb = (kb, Wb, ab, Tb) => {
                      const Ub = bb.get(kb)?.get(Wb);
                      if (Ub) return Ub(kb, Wb, ab, Tb);
                      const Ib = cb.get(kb) ?? kb._groups.get(sb)?.r;
                      if (Ib) return Ib(kb, Wb, ab, Tb);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Tb = {
                    Z6: cb,
                    dispatch: kb,
                    scenes: bb
                  }, (Ib ??= new WeakMap).set(sb, Tb)
                }
                let Ub = Tb.scenes.get(bb);
                Ub || (Ub = new WeakMap, Tb.scenes.set(bb, Ub));
                Ub.set(kb, Wb), Tb.Z6.has(bb) || Tb.Z6.set(bb, ab ?? Wb);
                const Hb = bb._groups.get(sb);
                Hb && (Hb.r = Tb.dispatch);
                let fb = cb.installed.get(kb);
                fb || (fb = new Set, cb.installed.set(kb, fb));
                fb.add(sb), cb.installedMeshes.add(kb)
              })(bb, cb, sb, Ub, ub.rebuildSingle, mb ? nb : ub.rebuildSingle), Ub.material._csmGen = (Ub.material._csmGen ?? 0) + 1;
              const hb = bb._groups.get(sb);
              hb && !mb && (hb.r = ub.rebuildSingle);
              bb._renderables.sort(Wb), bb._renderableVersion++, bb._materialEpoch++
            }(bb, cb, sb, fb, Xb, Mb))).catch((kb => {
              throw Qb(bb, cb, sb, fb, Xb, Mb) && (cb.error = kb instanceof Error ? kb : new Error("Runtime mesh build failed", {
                cause: kb
              })), kb
            })).finally((() => {
              lb(), cb.tail === Nb && (cb.tail = null), Ub?.get(sb) === Nb && Ub.delete(sb)
            })).finally((() => {
              cb.chains.get(fb) === Vb && cb.chains.delete(fb)
            }));
            return cb.chains.set(fb, Vb), Hb.track(Vb)
          },
          all: () => Promise.all(cb.active).then((() => {})),
          track: bb => {
            const sb = bb.finally((() => cb.active.delete(sb)));
            return cb.active.add(sb), Promise.all(cb.active).then((() => {}))
          },
          base: (cb, sb) => {
            const kb = Ib?.get(cb);
            return kb && kb.Z6.set(bb, sb), kb?.dispatch ?? sb
          },
          get w() {
            return !!cb.tail
          },
          pendingDisposers: bb => cb.pendingDisposers.get(bb),
          holdPendingDisposers: (bb, sb) => ab(cb, bb, sb),
          releasePendingDisposers: (bb, sb) => Tb(cb, bb, sb),
          reset: kb => {
            lb(bb, cb, kb), sb._pbrMeshGeomContexts?.delete(kb)
          },
          remove: kb => {
            cb.generations.set(kb, (cb.generations.get(kb) ?? 0) + 1), cb.chains.delete(kb), mb(bb, cb, kb), sb._pbrMeshGeomContexts?.delete(kb)
          },
          dropBase: cb => {
            const sb = Ib?.get(cb);
            sb && (sb.Z6.delete(bb), sb.scenes.delete(bb))
          },
          wait: async bb => {
            const sb = new Set;
            for (const kb of bb) {
              const bb = cb.chains.get(kb);
              bb && sb.add(bb)
            }
            await Promise.all(sb)
          },
          _e: function() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (cb.error) {
              const sb = cb.error;
              throw bb && (cb.error = null), sb
            }
          },
          _x: bb => {
            cb.error = bb instanceof Error ? bb : new Error("Runtime mesh build failed", {
              cause: bb
            })
          },
          _d: () => cb.Em,
          exclusive: (bb, sb) => {
            const kb = [];
            cb.tail && kb.push(cb.tail);
            const Wb = Ub?.get(bb);
            Wb && kb.push(Wb);
            const ab = Promise.all(kb).then(sb),
              Tb = ab.then((() => {}), (() => {}));
            return cb.tail = Tb, (Ub ??= new WeakMap).set(bb, Tb), Tb.then((() => {
              cb.tail === Tb && (cb.tail = null), Ub?.get(bb) === Tb && Ub.delete(bb)
            })), ab
          }
        };
      return bb._runtimeBuilds = Hb, (bb._beforeRender ??= []).push((() => {
        Hb._e()
      })), bb._disposables.push((() => {
        cb.Em = !0, cb.active.clear();
        for (const sb of cb.installedMeshes) lb(bb, cb, sb);
        for (const cb of bb._groups.keys()) Ib?.get(cb)?.Z6.delete(bb);
        bb._runtimeBuilds = void 0, sb._pbrMeshGeomContexts = void 0
      })), Hb
    }

    function mb(bb, cb, sb) {
      const kb = cb.installed.get(sb);
      if (kb) {
        for (const cb of kb) Ib?.get(cb)?.scenes.get(bb)?.delete(sb);
        cb.installed.delete(sb), cb.installedMeshes.delete(sb)
      }
    }

    function lb(bb, cb, sb) {
      mb(bb, cb, sb)
    }

    function Qb(bb, cb, sb, kb, Wb, ab) {
      return !cb.Em && cb.generations.get(kb) === ab && bb.meshes.includes(kb) && kb.material === Wb && Wb._buildGroup === sb
    }

    function eb(bb, cb, sb, Wb) {
      const ab = bb._meshDisposables.get(sb);
      if (ab && ab !== Wb) {
        bb._meshDisposables.delete(sb);
        for (const bb of ab) bb()
      }
      if (Wb)
        if (bb.meshes.includes(sb)) bb._meshDisposables.set(sb, Wb);
        else if (cb.Em)
        for (const kb of Wb) kb();
      else(0, kb.b)(bb.surface.engine, (() => {
        for (const bb of Wb) bb()
      }));
      Tb(cb, sb, Wb)
    }

    function Cb(bb, cb) {
      if (!cb.Em) return;
      const sb = bb._disposables.splice(0);
      for (const kb of sb) kb()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);