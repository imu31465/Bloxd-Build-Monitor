export const id = 68;
export const ids = [68];
export const modules = {
  35224: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      announceStoredTexturePack: () => tR.d,
      takeOneShotTexturePack: () => yR.k
    });
    var yR = GR(35230),
      tR = GR(35236)
  },
  35236: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => uR
    });
    var yR = GR(4521);

    function tR() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const RR = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const JR = new BroadcastChannel(yR.j);
        JR.postMessage({
          stored: RR
        }), JR.close()
      } catch {
        return null
      }
      return RR
    }

    function uR(RR) {
      const JR = "object" === typeof RR && null !== RR ? RR.stored : null;
      return "string" === typeof JR ? JR : null
    }
  },
  35230: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      h: () => tR,
      k: () => uR
    });
    var yR = GR(4521);
    async function tR(RR, JR, GR) {
      let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const uR = ZR(await RR.getItem(yR.g, JR));
      if (null === uR || tR()) return null;
      const qR = await RR.getItem(yR.i, JR);
      return tR() ? null : (await async function(RR) {
        await Promise.all([RR.removeItem(yR.g), RR.removeItem(yR.i)])
      }(RR).catch(GR), {
        pack: uR,
        source: "string" === typeof qR ? qR : null
      })
    }

    function uR(RR) {
      return (0, yR.s)() ? Promise.resolve(null) : tR(RR, !1, (RR => {
        console.error("Error removing temporary texture pack: ", RR)
      }), yR.s)
    }

    function ZR(RR) {
      if ("object" !== typeof RR || null === RR) return null;
      const JR = RR.metaData;
      return "object" !== typeof JR || null === JR || "string" !== typeof JR.id ? null : RR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);