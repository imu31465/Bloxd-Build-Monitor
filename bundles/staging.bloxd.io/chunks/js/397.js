export const id = 397;
export const ids = [397];
export const modules = {
  61981: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      rebuildScenePbrPipelines: () => xp,
      rebuildSceneRenderables: () => Lp
    });
    var Op = cp(41959),
      op = (pp, ip) => pp.order - ip.order,
      Ip = 8,
      Sp = pp => Lp(pp);
    async function xp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Yp(pp, "pbr", ip)
    }
    async function Lp(pp) {
      await Yp(pp, void 0, !1)
    }
    async function Yp(pp, ip, xp) {
      const Lp = pp;
      if (!Lp._built && !xp) return;
      const Yp = Lp._lightListVersion ?? 0,
        Dp = Lp.surface.engine,
        Ap = pp => {
          Lp._z ? pp.forEach((pp => pp())) : (0, Op.h)(Dp, (() => pp.forEach((pp => pp()))))
        };
      let Pp = !1,
        Wp = !1,
        yp = !1,
        Up = !1;
      try {
        for (let pp = 1;; pp++) {
          if (void 0 !== ip) {
            await wp();
            break
          }
          if (tp(Lp), await wp(), !vp(Lp)) break;
          if (pp >= Ip) {
            Lp._rebuildHook = Sp, Up = !0, Wp = !0;
            break
          }
        }
        yp = !0
      } finally {
        if (Pp && (Lp._renderables.sort(op), Lp._renderableVersion++, Lp._materialEpoch++, Lp._built && Lp._frameGraph.build()), void 0 === ip && yp && !Wp && (Lp._lightListVersion ?? 0) === Yp) {
          const pp = Lp._pendingTopologyRetirements?.splice(0);
          pp?.length && Ap(pp), Up || (Lp._rebuildHook = void 0)
        }
      }
      async function wp() {
        for (const [pp, Op] of Lp._groups) {
          if (void 0 !== ip && pp._materialFamily !== ip) continue;
          if (0 === Op.length) {
            (Op.o || Op.r) && (Hp(pp, Op), Pp = !0);
            continue
          }
          const op = Lp._runtimeBuilds;
          await (op?.wait(Op));
          let Ip = !1;
          const xp = async () => {
            const ip = Lp._runtimeBuilds,
              cp = [...Op].filter((ip => Lp.meshes.includes(ip) && ip.material?._buildGroup === pp));
            if (0 === cp.length) return void Hp(pp, Op);
            const Sp = !!Op.r,
              xp = Lp._disposables.length,
              Yp = new Map,
              Dp = new Map(cp.map((pp => [pp, pp.material])));
            for (const pp of cp) {
              const cp = Lp._meshDisposables.get(pp);
              cp && (Yp.set(pp, cp), Lp._meshDisposables.delete(pp), ip?.holdPendingDisposers(pp, cp))
            }
            let Pp, Wp;
            Lp._p = pp => (Wp = pp, !0);
            try {
              Pp = await pp(Lp, cp)
            } catch (jp) {
              Wp?.[1]();
              for (const op of cp) {
                const cp = Yp.get(op),
                  Ip = Lp._meshDisposables.get(op);
                if (Ip && Ip !== cp)
                  for (const pp of Ip) pp();
                const Sp = Lp.meshes.includes(op) && op.material === Dp.get(op) && op.material?._buildGroup === pp && Op.includes(op);
                cp && Sp ? Lp._meshDisposables.set(op, cp) : (Lp._meshDisposables.delete(op), cp && Ap(cp)), cp && ip?.releasePendingDisposers(op, cp)
              }
              throw jp
            } finally {
              delete Lp._p
            }
            if (Lp._z || op?._d()) {
              Wp?.[1]();
              for (const ip of cp) {
                const pp = Lp._meshDisposables.get(ip),
                  cp = Yp.get(ip);
                if (pp && pp !== cp)
                  for (const ip of pp) ip();
                Lp._meshDisposables.delete(ip)
              }
              for (const ip of Lp._disposables.splice(0)) ip();
              const pp = [...Yp.values()].flat();
              Ap(pp);
              for (const [cp, Op] of Yp) ip?.releasePendingDisposers(cp, Op);
              return
            }
            Wp?.[0](), pp._rebuildSingle = Pp.rebuildSingle, Op.r = Lp._runtimeBuilds?.base(pp, Pp.rebuildSingle) ?? Pp.rebuildSingle, "pbr" === pp._materialFamily && Pp._G && (Op._w = null), Sp && dp(Lp, xp);
            const yp = new Set(cp.filter((ip => Lp.meshes.includes(ip) && ip.material === Dp.get(ip) && ip.material?._buildGroup === pp && Op.includes(ip))));
            if (yp.size !== cp.length && Pp.renderables.some((pp => !pp.mesh))) {
              for (const pp of cp) {
                const cp = Lp._meshDisposables.get(pp),
                  Op = Yp.get(pp);
                if (cp && cp !== Op)
                  for (const pp of cp) pp();
                Op && Lp.meshes.includes(pp) ? Lp._meshDisposables.set(pp, Op) : (Lp._meshDisposables.delete(pp), Op && Ap(Op)), Op && ip?.releasePendingDisposers(pp, Op)
              }
              return void(Ip = !0)
            }
            const Up = new Set;
            for (const pp of cp)
              if (yp.has(pp)) Up.add(pp.material), Lp._runtimeBuilds?.reset(pp);
              else {
                const cp = Yp.get(pp),
                  Op = Lp._meshDisposables.get(pp);
                if (Op && Op !== cp)
                  for (const pp of Op) pp();
                cp && Lp.meshes.includes(pp) ? (Lp._meshDisposables.set(pp, cp), Yp.delete(pp), ip?.releasePendingDisposers(pp, cp)) : Lp._meshDisposables.delete(pp)
              } for (const pp of Up) pp._csmGen = (pp._csmGen ?? 0) + 1;
            const wp = Op.o,
              vp = wp?.length ? new Set(wp) : null;
            for (let pp = Lp._renderables.length - 1; pp >= 0; pp--) {
              const ip = Lp._renderables[pp];
              (yp.has(ip.mesh) || vp?.has(ip)) && Lp._renderables.splice(pp, 1)
            }
            const tp = Pp.renderables.filter((pp => !pp.mesh || yp.has(pp.mesh)));
            Lp._renderables.push(...tp), Op.o = tp;
            const ep = [...Yp.values()].flat();
            Ap(ep);
            for (const [pp, Op] of Yp) ip?.releasePendingDisposers(pp, Op)
          }, {
            X: Yp
          } = await Promise.resolve().then((() => cp(61471))), Dp = 3;
          for (let ip = 1;; ip++) {
            if (Ip = !1, await Yp(Lp, pp, xp), Lp._z || op?._d()) return void(Wp = !0);
            if (!Ip) break;
            if (ip >= Dp) {
              Hp(pp, Op), Lp._rebuildHook = Sp, Up = !0, Wp = !0;
              break
            }
          }
          Ip ? Pp = !0 : Pp = !0
        }
      }

      function vp(pp) {
        for (const ip of pp.meshes) {
          const cp = ip.material?._buildGroup;
          if (cp && !pp._groups.get(cp)?.includes(ip)) return !0
        }
        return !1
      }

      function tp(pp) {
        const ip = new Map;
        for (const cp of pp.meshes) {
          const pp = cp.material?._buildGroup;
          if (!pp) continue;
          const Op = ip.get(pp);
          Op ? Op.push(cp) : ip.set(pp, [cp])
        }
        for (const [cp, Op] of pp._groups) {
          const pp = ip.get(cp) ?? [];
          (Op.length !== pp.length || pp.some(((pp, ip) => Op[ip] !== pp))) && (Op.length = 0, Op.push(...pp)), ip.delete(cp)
        }
        for (const [cp, Op] of ip) {
          const ip = Op;
          pp._groups.set(cp, ip)
        }
      }

      function Hp(pp, ip) {
        const cp = ip.o;
        if (cp?.length) {
          const pp = new Set(cp);
          for (let ip = Lp._renderables.length - 1; ip >= 0; ip--) pp.has(Lp._renderables[ip]) && Lp._renderables.splice(ip, 1)
        }
        ip.o = void 0, ip.r = void 0, Lp._runtimeBuilds?.dropBase(pp), Lp._rebuildHook = Sp, Up = !0
      }

      function dp(pp, ip) {
        const cp = new Set(pp._disposables.slice(0, ip));
        for (let Op = pp._disposables.length - 1; Op >= ip; Op--) cp.has(pp._disposables[Op]) && pp._disposables.splice(Op, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);