export const id = 53;
export const ids = [53];
export const modules = {
  9330: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      announceStoredTexturePack: () => lq.b,
      takeOneShotTexturePack: () => Yq.g
    });
    var Yq = gq(9336),
      lq = gq(9343)
  },
  9343: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      e: () => Oq
    });
    var Yq = gq(3150);

    function lq() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const qq = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Eq = new BroadcastChannel(Yq.n);
        Eq.postMessage({
          stored: qq
        }), Eq.close()
      } catch {
        return null
      }
      return qq
    }

    function Oq(qq) {
      const Eq = "object" === typeof qq && null !== qq ? qq.stored : null;
      return "string" === typeof Eq ? Eq : null
    }
  },
  9336: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      g: () => Oq
    });
    var Yq = gq(3150);
    async function lq(qq, Eq, gq) {
      let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Oq = mq(await qq.getItem(Yq.g, Eq));
      if (null === Oq || lq()) return null;
      const xq = await qq.getItem(Yq.j, Eq);
      return lq() ? null : (await async function(qq) {
        await Promise.all([qq.removeItem(Yq.g), qq.removeItem(Yq.j)])
      }(qq).catch(gq), {
        pack: Oq,
        source: "string" === typeof xq ? xq : null
      })
    }

    function Oq(qq) {
      return (0, Yq.u)() ? Promise.resolve(null) : lq(qq, !1, (qq => {
        console.error("Error removing temporary texture pack: ", qq)
      }), Yq.u)
    }

    function mq(qq) {
      if ("object" !== typeof qq || null === qq) return null;
      const Eq = qq.metaData;
      return "object" !== typeof Eq || null === Eq || "string" !== typeof Eq.id ? null : qq
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);