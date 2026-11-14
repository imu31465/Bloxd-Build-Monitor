export const id = 44;
export const ids = [44];
export const modules = {
  8159: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      announceStoredTexturePack: () => CW.b,
      takeOneShotTexturePack: () => wW.h
    });
    var wW = MW(8168),
      CW = MW(8174)
  },
  8174: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW,
      d: () => zR
    });
    var wW = MW(2396);

    function CW() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const RW = new BroadcastChannel(wW.o);
        RW.postMessage({
          stored: WW
        }), RW.close()
      } catch {
        return null
      }
      return WW
    }

    function zR(WW) {
      const RW = "object" === typeof WW && null !== WW ? WW.stored : null;
      return "string" === typeof RW ? RW : null
    }
  },
  8168: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      f: () => CW,
      h: () => zR
    });
    var wW = MW(2396);
    async function CW(WW, RW, MW) {
      let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const zR = AW(await WW.getItem(wW.g, RW));
      if (null === zR || CW()) return null;
      const bR = await WW.getItem(wW.k, RW);
      return CW() ? null : (await Promise.all([WW.removeItem(wW.g), WW.removeItem(wW.k)]).catch(MW), {
        pack: zR,
        source: "string" === typeof bR ? bR : null
      })
    }

    function zR(WW) {
      return (0, wW.t)() ? Promise.resolve(null) : CW(WW, !1, (WW => {
        console.error("Error removing temporary texture pack: ", WW)
      }), wW.t)
    }

    function AW(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const RW = WW.metaData;
      return "object" !== typeof RW || null === RW || "string" !== typeof RW.id ? null : WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);