export const id = 681;
export const ids = [681];
export const modules = {
  64519: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      A: () => Lb,
      B: () => Ob,
      C: () => Ib,
      X: () => Ub
    });
    var eb = Mb(53939),
      Hb = (bb, wb) => bb.order - wb.order;

    function pb(bb, wb, Mb) {
      bb.pendingDisposers.set(wb, Mb)
    }

    function Vb(bb, wb, Mb) {
      Mb && bb.pendingDisposers.get(wb) === Mb && bb.pendingDisposers.delete(wb)
    }
    var gb = null,
      lb = null;

    function Lb(bb, wb, Mb, eb) {
      if (!wb || Mb.material !== wb) return eb ?? Promise.resolve();
      const Hb = Ob(bb, wb._buildGroup, Mb);
      return eb ? Promise.all([eb, Hb]).then((() => {})) : Hb
    }

    function Ib(bb, wb, Mb) {
      let eb = Mb;
      for (const Hb of wb) {
        const wb = Array.isArray(Hb),
          Mb = wb ? Hb[0] : Hb;
        eb = Lb(bb, wb ? Hb[1] : Mb.material, Mb, eb)
      }
      return (eb ?? Promise.resolve()).catch((wb => {
        bb._runtimeBuilds?._x(wb)
      }))
    }

    function Ob(bb, wb, eb) {
      if (bb._z || !bb.meshes.includes(eb)) return bb._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(bb, wb, Mb) {
          for (const [Hb, pb] of bb._groups)
            if (Hb !== wb) {
              const bb = pb.indexOf(Mb);
              bb >= 0 && pb.splice(bb, 1)
            } let eb = bb._groups.get(wb);
          eb || (eb = [], bb._groups.set(wb, eb));
          eb.includes(Mb) || eb.push(Mb)
        }(bb, wb, eb), "pbr" === wb._materialFamily && (bb._built || bb._groups.get(wb)?.r)) {
        const wb = bb._runtimeBuilds ?? tb(bb),
          eb = Mb.e(711).then((() => Mb(65048))).then((wb => {
            let {
              rebuildScenePbrPipelines: Mb
            } = wb;
            return bb._z ? void 0 : Mb(bb, !0)
          })).catch((wb => {
            bb._runtimeBuilds?._x(wb)
          }));
        return wb.track(eb)
      }
      return (bb._runtimeBuilds ?? tb(bb)).queue(wb, eb).catch((() => {}))
    }

    function Ub(bb, wb, Mb) {
      return bb._z ? Promise.resolve(void 0) : (bb._runtimeBuilds ?? tb(bb)).exclusive(wb, Mb)
    }

    function tb(bb) {
      const wb = {
          BC: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        Mb = bb,
        Lb = {
          queue: (Mb, Ib) => {
            const Ob = (wb.generations.get(Ib) ?? 0) + 1,
              Ub = Ib.material;
            wb.generations.set(Ib, Ob);
            const tb = wb.chains.get(Ib),
              Cb = [wb.tail, gb?.get(Mb)].filter((bb => !!bb));
            let Eb = () => {};
            const mb = new Promise((bb => {
              Eb = bb
            }));
            wb.tail = mb, (gb ??= new WeakMap).set(Mb, mb);
            const hb = (tb ? tb.catch((() => {})) : Promise.resolve()).then((() => Promise.all(Cb))).then((() => async function(bb, wb, Mb, gb, Lb, Ib) {
              if (!Fb(bb, wb, Mb, gb, Lb, Ib)) return;
              const Ob = bb._meshDisposables.get(gb);
              Ob && (bb._meshDisposables.delete(gb), pb(wb, gb, Ob));
              const Ub = Mb._rebuildSingle,
                tb = lb?.get(Mb)?.Qbb.get(bb) ?? bb._groups.get(Mb)?.r,
                Cb = !!bb._groups.get(Mb)?.r,
                Eb = bb._disposables.length,
                mb = bb,
                hb = mb._pbrGeomContext;
              let zb, Xb;
              try {
                Xb = await Mb(bb, [gb]), zb = mb._pbrGeomContext
              } catch (Kb) {
                if (Bb(bb, wb, gb, Ob), sb(bb, wb), !Fb(bb, wb, Mb, gb, Lb, Ib)) return;
                throw Kb
              } finally {
                Mb._rebuildSingle = Ub, "pbr" === Mb._materialFamily && Cb && (mb._pbrGeomContext = hb)
              }
              if (!Fb(bb, wb, Mb, gb, Lb, Ib)) return Bb(bb, wb, gb, Ob), void sb(bb, wb);
              for (let eb = bb._renderables.length - 1; eb >= 0; eb--) bb._renderables[eb].mesh === gb && bb._renderables.splice(eb, 1);
              if (Ob) {
                for (const wb of Ob) {
                  const Mb = bb._disposables.indexOf(wb);
                  Mb >= 0 && bb._disposables.splice(Mb, 1);
                  const eb = wb.p;
                  if (eb) {
                    eb._disposed = !0;
                    const bb = eb._owner;
                    if (bb) {
                      const wb = bb.indexOf(eb);
                      wb >= 0 && bb.splice(wb, 1), eb._owner = void 0, 0 === bb.length && eb._onOwnerEmpty?.()
                    } else eb._onOwnerEmpty?.();
                    eb._onOwnerEmpty && (eb._onOwnerEmpty = void 0)
                  }
                }(0, eb.f)(bb.surface.engine, (() => {
                  for (const bb of Ob) bb()
                }))
              }
              Vb(wb, gb, Ob), bb._renderables.push(...Xb.renderables);
              const xb = bb._groups.get(Mb);
              xb && (xb.o = [...(xb.o ?? []).filter((bb => bb.mesh !== gb)), ...Xb.renderables]);
              Xb.updater && bb._uniformUpdaters.push(Xb.updater);
              Cb && function(bb, wb) {
                const Mb = new Set(bb._disposables.slice(0, wb));
                for (let eb = bb._disposables.length - 1; eb >= wb; eb--) Mb.has(bb._disposables[eb]) && bb._disposables.splice(eb, 1)
              }(bb, Eb);
              "pbr" === Mb._materialFamily && Cb && zb && (mb._pbrMeshGeomContexts ??= new WeakMap).set(gb, zb);
              (function(bb, wb, Mb, eb, Hb, pb) {
                let Vb = lb?.get(Mb);
                if (!Vb) {
                  const bb = new WeakMap,
                    wb = new WeakMap,
                    eb = (eb, Hb, pb, Vb) => {
                      const gb = bb.get(eb)?.get(Hb);
                      if (gb) return gb(eb, Hb, pb, Vb);
                      const lb = wb.get(eb) ?? eb._groups.get(Mb)?.r;
                      if (lb) return lb(eb, Hb, pb, Vb);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Vb = {
                    Qbb: wb,
                    dispatch: eb,
                    scenes: bb
                  }, (lb ??= new WeakMap).set(Mb, Vb)
                }
                let gb = Vb.scenes.get(bb);
                gb || (gb = new WeakMap, Vb.scenes.set(bb, gb));
                gb.set(eb, Hb), Vb.Qbb.has(bb) || Vb.Qbb.set(bb, pb ?? Hb);
                const Lb = bb._groups.get(Mb);
                Lb && (Lb.r = Vb.dispatch);
                let Ib = wb.installed.get(eb);
                Ib || (Ib = new Set, wb.installed.set(eb, Ib));
                Ib.add(Mb), wb.installedMeshes.add(eb)
              })(bb, wb, Mb, gb, Xb.rebuildSingle, Cb ? tb : Xb.rebuildSingle), gb.material._csmGen = (gb.material._csmGen ?? 0) + 1;
              const jb = bb._groups.get(Mb);
              jb && !Cb && (jb.r = Xb.rebuildSingle);
              bb._renderables.sort(Hb), bb._renderableVersion++, bb._materialEpoch++
            }(bb, wb, Mb, Ib, Ub, Ob))).catch((eb => {
              throw Fb(bb, wb, Mb, Ib, Ub, Ob) && (wb.error = eb instanceof Error ? eb : new Error("Runtime mesh build failed", {
                cause: eb
              })), eb
            })).finally((() => {
              Eb(), wb.tail === mb && (wb.tail = null), gb?.get(Mb) === mb && gb.delete(Mb)
            })).finally((() => {
              wb.chains.get(Ib) === hb && wb.chains.delete(Ib)
            }));
            return wb.chains.set(Ib, hb), Lb.track(hb)
          },
          all: () => Promise.all(wb.active).then((() => {})),
          track: bb => {
            const Mb = bb.finally((() => wb.active.delete(Mb)));
            return wb.active.add(Mb), Promise.all(wb.active).then((() => {}))
          },
          base: (wb, Mb) => {
            const eb = lb?.get(wb);
            return eb && eb.Qbb.set(bb, Mb), eb?.dispatch ?? Mb
          },
          get w() {
            return !!wb.tail
          },
          pendingDisposers: bb => wb.pendingDisposers.get(bb),
          holdPendingDisposers: (bb, Mb) => pb(wb, bb, Mb),
          releasePendingDisposers: (bb, Mb) => Vb(wb, bb, Mb),
          reset: eb => {
            Eb(bb, wb, eb), Mb._pbrMeshGeomContexts?.delete(eb)
          },
          remove: eb => {
            wb.generations.set(eb, (wb.generations.get(eb) ?? 0) + 1), wb.chains.delete(eb), Cb(bb, wb, eb), Mb._pbrMeshGeomContexts?.delete(eb)
          },
          dropBase: wb => {
            const Mb = lb?.get(wb);
            Mb && (Mb.Qbb.delete(bb), Mb.scenes.delete(bb))
          },
          wait: async bb => {
            const Mb = new Set;
            for (const eb of bb) {
              const bb = wb.chains.get(eb);
              bb && Mb.add(bb)
            }
            await Promise.all(Mb)
          },
          _e: function() {
            let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (wb.error) {
              const Mb = wb.error;
              throw bb && (wb.error = null), Mb
            }
          },
          _x: bb => {
            wb.error = bb instanceof Error ? bb : new Error("Runtime mesh build failed", {
              cause: bb
            })
          },
          _d: () => wb.BC,
          exclusive: (bb, Mb) => {
            const eb = [];
            wb.tail && eb.push(wb.tail);
            const Hb = gb?.get(bb);
            Hb && eb.push(Hb);
            const pb = Promise.all(eb).then(Mb),
              Vb = pb.then((() => {}), (() => {}));
            return wb.tail = Vb, (gb ??= new WeakMap).set(bb, Vb), Vb.then((() => {
              wb.tail === Vb && (wb.tail = null), gb?.get(bb) === Vb && gb.delete(bb)
            })), pb
          }
        };
      return bb._runtimeBuilds = Lb, (bb._beforeRender ??= []).push((() => {
        Lb._e()
      })), bb._disposables.push((() => {
        wb.BC = !0, wb.active.clear();
        for (const Mb of wb.installedMeshes) Eb(bb, wb, Mb);
        for (const wb of bb._groups.keys()) lb?.get(wb)?.Qbb.delete(bb);
        bb._runtimeBuilds = void 0, Mb._pbrMeshGeomContexts = void 0
      })), Lb
    }

    function Cb(bb, wb, Mb) {
      const eb = wb.installed.get(Mb);
      if (eb) {
        for (const wb of eb) lb?.get(wb)?.scenes.get(bb)?.delete(Mb);
        wb.installed.delete(Mb), wb.installedMeshes.delete(Mb)
      }
    }

    function Eb(bb, wb, Mb) {
      Cb(bb, wb, Mb)
    }

    function Fb(bb, wb, Mb, eb, Hb, pb) {
      return !wb.BC && wb.generations.get(eb) === pb && bb.meshes.includes(eb) && eb.material === Hb && Hb._buildGroup === Mb
    }

    function Bb(bb, wb, Mb, Hb) {
      const pb = bb._meshDisposables.get(Mb);
      if (pb && pb !== Hb) {
        bb._meshDisposables.delete(Mb);
        for (const bb of pb) bb()
      }
      if (Hb)
        if (bb.meshes.includes(Mb)) bb._meshDisposables.set(Mb, Hb);
        else if (wb.BC)
        for (const eb of Hb) eb();
      else(0, eb.f)(bb.surface.engine, (() => {
        for (const bb of Hb) bb()
      }));
      Vb(wb, Mb, Hb)
    }

    function sb(bb, wb) {
      if (!wb.BC) return;
      const Mb = bb._disposables.splice(0);
      for (const eb of Mb) eb()
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);