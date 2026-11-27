export const id = 68;
export const ids = [68];
export const modules = {
  35297: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      announceStoredTexturePack: () => EW.c,
      takeOneShotTexturePack: () => mW.h
    });
    var mW = OW(35303),
      EW = OW(35307)
  },
  35307: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW,
      g: () => NW
    });
    var mW = OW(4431);

    function EW() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const WW = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const iW = new BroadcastChannel(mW.m);
        iW.postMessage({
          stored: WW
        }), iW.close()
      } catch {
        return null
      }
      return WW
    }

    function NW(WW) {
      const iW = "object" === typeof WW && null !== WW ? WW.stored : null;
      return "string" === typeof iW ? iW : null
    }
  },
  35303: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW,
      e: () => EW,
      h: () => NW
    });
    var mW = OW(4431);
    async function EW(WW, iW, OW) {
      let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const NW = PW(await WW.getItem(mW.h, iW));
      if (null === NW || EW()) return null;
      const LW = await WW.getItem(mW.l, iW);
      return EW() ? null : (await async function(WW) {
        await Promise.all([WW.removeItem(mW.h), WW.removeItem(mW.l)])
      }(WW).catch(OW), {
        pack: NW,
        source: "string" === typeof LW ? LW : null
      })
    }

    function NW(WW) {
      return (0, mW.t)() ? Promise.resolve(null) : EW(WW, !1, (WW => {
        console.error("Error removing temporary texture pack: ", WW)
      }), mW.t)
    }

    function PW(WW) {
      if ("object" !== typeof WW || null === WW) return null;
      const iW = WW.metaData;
      return "object" !== typeof iW || null === iW || "string" !== typeof iW.id ? null : WW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);