export const id = 367;
export const ids = [367];
export const modules = {
  61471: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      A: () => Yp,
      B: () => Ap,
      C: () => Dp,
      X: () => Pp
    });
    var Op = cp(41959),
      op = (pp, ip) => pp.order - ip.order;

    function Ip(pp, ip, cp) {
      pp.pendingDisposers.set(ip, cp)
    }

    function Sp(pp, ip, cp) {
      cp && pp.pendingDisposers.get(ip) === cp && pp.pendingDisposers.delete(ip)
    }
    var xp = null,
      Lp = null;

    function Yp(pp, ip, cp, Op) {
      if (!ip || cp.material !== ip) return Op ?? Promise.resolve();
      const op = Ap(pp, ip._buildGroup, cp);
      return Op ? Promise.all([Op, op]).then((() => {})) : op
    }

    function Dp(pp, ip, cp) {
      let Op = cp;
      for (const op of ip) {
        const ip = Array.isArray(op),
          cp = ip ? op[0] : op;
        Op = Yp(pp, ip ? op[1] : cp.material, cp, Op)
      }
      return (Op ?? Promise.resolve()).catch((ip => {
        pp._runtimeBuilds?._x(ip)
      }))
    }

    function Ap(pp, ip, Op) {
      if (pp._z || !pp.meshes.includes(Op)) return pp._runtimeBuilds?.all().catch((() => {})) ?? Promise.resolve();
      if (function(pp, ip, cp) {
          for (const [op, Ip] of pp._groups)
            if (op !== ip) {
              const pp = Ip.indexOf(cp);
              pp >= 0 && Ip.splice(pp, 1)
            } let Op = pp._groups.get(ip);
          Op || (Op = [], pp._groups.set(ip, Op));
          Op.includes(cp) || Op.push(cp)
        }(pp, ip, Op), "pbr" === ip._materialFamily && (pp._built || pp._groups.get(ip)?.r)) {
        const ip = pp._runtimeBuilds ?? Wp(pp),
          Op = cp.e(397).then((() => cp(61981))).then((ip => {
            let {
              rebuildScenePbrPipelines: cp
            } = ip;
            return pp._z ? void 0 : cp(pp, !0)
          })).catch((ip => {
            pp._runtimeBuilds?._x(ip)
          }));
        return ip.track(Op)
      }
      return (pp._runtimeBuilds ?? Wp(pp)).queue(ip, Op).catch((() => {}))
    }

    function Pp(pp, ip, cp) {
      return pp._z ? Promise.resolve(void 0) : (pp._runtimeBuilds ?? Wp(pp)).exclusive(ip, cp)
    }

    function Wp(pp) {
      const ip = {
          Ry: !1,
          error: null,
          active: new Set,
          chains: new WeakMap,
          generations: new WeakMap,
          installed: new WeakMap,
          installedMeshes: new Set,
          pendingDisposers: new WeakMap,
          tail: null
        },
        cp = pp,
        Yp = {
          queue: (cp, Dp) => {
            const Ap = (ip.generations.get(Dp) ?? 0) + 1,
              Pp = Dp.material;
            ip.generations.set(Dp, Ap);
            const Wp = ip.chains.get(Dp),
              yp = [ip.tail, xp?.get(cp)].filter((pp => !!pp));
            let Up = () => {};
            const Hp = new Promise((pp => {
              Up = pp
            }));
            ip.tail = Hp, (xp ??= new WeakMap).set(cp, Hp);
            const dp = (Wp ? Wp.catch((() => {})) : Promise.resolve()).then((() => Promise.all(yp))).then((() => async function(pp, ip, cp, xp, Yp, Dp) {
              if (!wp(pp, ip, cp, xp, Yp, Dp)) return;
              const Ap = pp._meshDisposables.get(xp);
              Ap && (pp._meshDisposables.delete(xp), Ip(ip, xp, Ap));
              const Pp = cp._rebuildSingle,
                Wp = Lp?.get(cp)?.B_.get(pp) ?? pp._groups.get(cp)?.r,
                yp = !!pp._groups.get(cp)?.r,
                Up = pp._disposables.length,
                Hp = pp,
                dp = Hp._pbrGeomContext;
              let ep, jp;
              try {
                jp = await cp(pp, [xp]), ep = Hp._pbrGeomContext
              } catch (Rp) {
                if (vp(pp, ip, xp, Ap), tp(pp, ip), !wp(pp, ip, cp, xp, Yp, Dp)) return;
                throw Rp
              } finally {
                cp._rebuildSingle = Pp, "pbr" === cp._materialFamily && yp && (Hp._pbrGeomContext = dp)
              }
              if (!wp(pp, ip, cp, xp, Yp, Dp)) return vp(pp, ip, xp, Ap), void tp(pp, ip);
              for (let Op = pp._renderables.length - 1; Op >= 0; Op--) pp._renderables[Op].mesh === xp && pp._renderables.splice(Op, 1);
              if (Ap) {
                for (const ip of Ap) {
                  const cp = pp._disposables.indexOf(ip);
                  cp >= 0 && pp._disposables.splice(cp, 1);
                  const Op = ip.p;
                  if (Op) {
                    Op._disposed = !0;
                    const pp = Op._owner;
                    if (pp) {
                      const ip = pp.indexOf(Op);
                      ip >= 0 && pp.splice(ip, 1), Op._owner = void 0, 0 === pp.length && Op._onOwnerEmpty?.()
                    } else Op._onOwnerEmpty?.();
                    Op._onOwnerEmpty && (Op._onOwnerEmpty = void 0)
                  }
                }(0, Op.h)(pp.surface.engine, (() => {
                  for (const pp of Ap) pp()
                }))
              }
              Sp(ip, xp, Ap), pp._renderables.push(...jp.renderables);
              const kp = pp._groups.get(cp);
              kp && (kp.o = [...(kp.o ?? []).filter((pp => pp.mesh !== xp)), ...jp.renderables]);
              jp.updater && pp._uniformUpdaters.push(jp.updater);
              yp && function(pp, ip) {
                const cp = new Set(pp._disposables.slice(0, ip));
                for (let Op = pp._disposables.length - 1; Op >= ip; Op--) cp.has(pp._disposables[Op]) && pp._disposables.splice(Op, 1)
              }(pp, Up);
              "pbr" === cp._materialFamily && yp && ep && (Hp._pbrMeshGeomContexts ??= new WeakMap).set(xp, ep);
              (function(pp, ip, cp, Op, op, Ip) {
                let Sp = Lp?.get(cp);
                if (!Sp) {
                  const pp = new WeakMap,
                    ip = new WeakMap,
                    Op = (Op, op, Ip, Sp) => {
                      const xp = pp.get(Op)?.get(op);
                      if (xp) return xp(Op, op, Ip, Sp);
                      const Lp = ip.get(Op) ?? Op._groups.get(cp)?.r;
                      if (Lp) return Lp(Op, op, Ip, Sp);
                      throw new Error("Material group has not completed its initial build")
                    };
                  Sp = {
                    B_: ip,
                    dispatch: Op,
                    scenes: pp
                  }, (Lp ??= new WeakMap).set(cp, Sp)
                }
                let xp = Sp.scenes.get(pp);
                xp || (xp = new WeakMap, Sp.scenes.set(pp, xp));
                xp.set(Op, op), Sp.B_.has(pp) || Sp.B_.set(pp, Ip ?? op);
                const Yp = pp._groups.get(cp);
                Yp && (Yp.r = Sp.dispatch);
                let Dp = ip.installed.get(Op);
                Dp || (Dp = new Set, ip.installed.set(Op, Dp));
                Dp.add(cp), ip.installedMeshes.add(Op)
              })(pp, ip, cp, xp, jp.rebuildSingle, yp ? Wp : jp.rebuildSingle), xp.material._csmGen = (xp.material._csmGen ?? 0) + 1;
              const mp = pp._groups.get(cp);
              mp && !yp && (mp.r = jp.rebuildSingle);
              pp._renderables.sort(op), pp._renderableVersion++, pp._materialEpoch++
            }(pp, ip, cp, Dp, Pp, Ap))).catch((Op => {
              throw wp(pp, ip, cp, Dp, Pp, Ap) && (ip.error = Op instanceof Error ? Op : new Error("Runtime mesh build failed", {
                cause: Op
              })), Op
            })).finally((() => {
              Up(), ip.tail === Hp && (ip.tail = null), xp?.get(cp) === Hp && xp.delete(cp)
            })).finally((() => {
              ip.chains.get(Dp) === dp && ip.chains.delete(Dp)
            }));
            return ip.chains.set(Dp, dp), Yp.track(dp)
          },
          all: () => Promise.all(ip.active).then((() => {})),
          track: pp => {
            const cp = pp.finally((() => ip.active.delete(cp)));
            return ip.active.add(cp), Promise.all(ip.active).then((() => {}))
          },
          base: (ip, cp) => {
            const Op = Lp?.get(ip);
            return Op && Op.B_.set(pp, cp), Op?.dispatch ?? cp
          },
          get w() {
            return !!ip.tail
          },
          pendingDisposers: pp => ip.pendingDisposers.get(pp),
          holdPendingDisposers: (pp, cp) => Ip(ip, pp, cp),
          releasePendingDisposers: (pp, cp) => Sp(ip, pp, cp),
          reset: Op => {
            Up(pp, ip, Op), cp._pbrMeshGeomContexts?.delete(Op)
          },
          remove: Op => {
            ip.generations.set(Op, (ip.generations.get(Op) ?? 0) + 1), ip.chains.delete(Op), yp(pp, ip, Op), cp._pbrMeshGeomContexts?.delete(Op)
          },
          dropBase: ip => {
            const cp = Lp?.get(ip);
            cp && (cp.B_.delete(pp), cp.scenes.delete(pp))
          },
          wait: async pp => {
            const cp = new Set;
            for (const Op of pp) {
              const pp = ip.chains.get(Op);
              pp && cp.add(pp)
            }
            await Promise.all(cp)
          },
          _e: function() {
            let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (ip.error) {
              const cp = ip.error;
              throw pp && (ip.error = null), cp
            }
          },
          _x: pp => {
            ip.error = pp instanceof Error ? pp : new Error("Runtime mesh build failed", {
              cause: pp
            })
          },
          _d: () => ip.Ry,
          exclusive: (pp, cp) => {
            const Op = [];
            ip.tail && Op.push(ip.tail);
            const op = xp?.get(pp);
            op && Op.push(op);
            const Ip = Promise.all(Op).then(cp),
              Sp = Ip.then((() => {}), (() => {}));
            return ip.tail = Sp, (xp ??= new WeakMap).set(pp, Sp), Sp.then((() => {
              ip.tail === Sp && (ip.tail = null), xp?.get(pp) === Sp && xp.delete(pp)
            })), Ip
          }
        };
      return pp._runtimeBuilds = Yp, (pp._beforeRender ??= []).push((() => {
        Yp._e()
      })), pp._disposables.push((() => {
        ip.Ry = !0, ip.active.clear();
        for (const cp of ip.installedMeshes) Up(pp, ip, cp);
        for (const ip of pp._groups.keys()) Lp?.get(ip)?.B_.delete(pp);
        pp._runtimeBuilds = void 0, cp._pbrMeshGeomContexts = void 0
      })), Yp
    }

    function yp(pp, ip, cp) {
      const Op = ip.installed.get(cp);
      if (Op) {
        for (const ip of Op) Lp?.get(ip)?.scenes.get(pp)?.delete(cp);
        ip.installed.delete(cp), ip.installedMeshes.delete(cp)
      }
    }

    function Up(pp, ip, cp) {
      yp(pp, ip, cp)
    }

    function wp(pp, ip, cp, Op, op, Ip) {
      return !ip.Ry && ip.generations.get(Op) === Ip && pp.meshes.includes(Op) && Op.material === op && op._buildGroup === cp
    }

    function vp(pp, ip, cp, op) {
      const Ip = pp._meshDisposables.get(cp);
      if (Ip && Ip !== op) {
        pp._meshDisposables.delete(cp);
        for (const pp of Ip) pp()
      }
      if (op)
        if (pp.meshes.includes(cp)) pp._meshDisposables.set(cp, op);
        else if (ip.Ry)
        for (const Op of op) Op();
      else(0, Op.h)(pp.surface.engine, (() => {
        for (const pp of op) pp()
      }));
      Sp(ip, cp, op)
    }

    function tp(pp, ip) {
      if (!ip.Ry) return;
      const cp = pp._disposables.splice(0);
      for (const Op of cp) Op()
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);