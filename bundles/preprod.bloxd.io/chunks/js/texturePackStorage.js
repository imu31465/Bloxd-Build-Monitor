export const id = 56;
export const ids = [56];
export const modules = {
  34476: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      announceStoredTexturePack: () => op.d,
      takeOneShotTexturePack: () => Op.i
    });
    var Op = cp(34480),
      op = cp(34482)
  },
  34482: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      f: () => Ip
    });
    var Op = cp(3352);

    function op() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const pp = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const ip = new BroadcastChannel(Op.j);
        ip.postMessage({
          stored: pp
        }), ip.close()
      } catch {
        return null
      }
      return pp
    }

    function Ip(pp) {
      const ip = "object" === typeof pp && null !== pp ? pp.stored : null;
      return "string" === typeof ip ? ip : null
    }
  },
  34480: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp,
      h: () => op,
      i: () => Ip
    });
    var Op = cp(3352);
    async function op(pp, ip, cp) {
      let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Ip = Sp(await pp.getItem(Op.d, ip));
      if (null === Ip || op()) return null;
      const xp = await pp.getItem(Op.h, ip);
      return op() ? null : (await async function(pp) {
        await Promise.all([pp.removeItem(Op.d), pp.removeItem(Op.h)])
      }(pp).catch(cp), {
        pack: Ip,
        source: "string" === typeof xp ? xp : null
      })
    }

    function Ip(pp) {
      return (0, Op.u)() ? Promise.resolve(null) : op(pp, !1, (pp => {
        console.error("Error removing temporary texture pack: ", pp)
      }), Op.u)
    }

    function Sp(pp) {
      if ("object" !== typeof pp || null === pp) return null;
      const ip = pp.metaData;
      return "object" !== typeof ip || null === ip || "string" !== typeof ip.id ? null : pp
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);