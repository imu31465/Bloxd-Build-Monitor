export const id = 52;
export const ids = [52];
export const modules = {
  8786: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      announceStoredTexturePack: () => AY.d,
      takeOneShotTexturePack: () => FY.k
    });
    var FY = DY(8791),
      AY = DY(8794)
  },
  8794: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY,
      e: () => IY
    });
    var FY = DY(2848);

    function AY() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const YY = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const rY = new BroadcastChannel(FY.j);
        rY.postMessage({
          stored: YY
        }), rY.close()
      } catch {
        return null
      }
      return YY
    }

    function IY(YY) {
      const rY = "object" === typeof YY && null !== YY ? YY.stored : null;
      return "string" === typeof rY ? rY : null
    }
  },
  8791: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY,
      h: () => AY,
      k: () => IY
    });
    var FY = DY(2848);
    async function AY(YY, rY, DY) {
      let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const IY = RY(await YY.getItem(FY.e, rY));
      if (null === IY || AY()) return null;
      const OY = await YY.getItem(FY.g, rY);
      return AY() ? null : (await async function(YY) {
        await Promise.all([YY.removeItem(FY.e), YY.removeItem(FY.g)])
      }(YY).catch(DY), {
        pack: IY,
        source: "string" === typeof OY ? OY : null
      })
    }

    function IY(YY) {
      return (0, FY.q)() ? Promise.resolve(null) : AY(YY, !1, (YY => {
        console.error("Error removing temporary texture pack: ", YY)
      }), FY.q)
    }

    function RY(YY) {
      if ("object" !== typeof YY || null === YY) return null;
      const rY = YY.metaData;
      return "object" !== typeof rY || null === rY || "string" !== typeof rY.id ? null : YY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);