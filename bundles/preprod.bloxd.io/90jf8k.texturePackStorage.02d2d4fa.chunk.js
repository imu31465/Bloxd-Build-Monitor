export const id = 44;
export const ids = [44];
export const modules = {
  8229: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      announceStoredTexturePack: () => AF.e,
      takeOneShotTexturePack: () => CF.h
    });
    var CF = SF(8233),
      AF = SF(8235)
  },
  8235: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(2459);

    function AF() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const FF = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const WF = new BroadcastChannel(CF.i);
        WF.postMessage({
          stored: FF
        }), WF.close()
      } catch {
        return null
      }
      return FF
    }

    function uF(FF) {
      const WF = "object" === typeof FF && null !== FF ? FF.stored : null;
      return "string" === typeof WF ? WF : null
    }
  },
  8233: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      f: () => AF,
      h: () => uF
    });
    var CF = SF(2459);
    async function AF(FF, WF, SF) {
      let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const uF = hF(await FF.getItem(CF.e, WF));
      if (null === uF || AF()) return null;
      const bW = await FF.getItem(CF.h, WF);
      return AF() ? null : (await Promise.all([FF.removeItem(CF.e), FF.removeItem(CF.h)]).catch(SF), {
        pack: uF,
        source: "string" === typeof bW ? bW : null
      })
    }

    function uF(FF) {
      return (0, CF.q)() ? Promise.resolve(null) : AF(FF, !1, (FF => {
        console.error("Error removing temporary texture pack: ", FF)
      }), CF.q)
    }

    function hF(FF) {
      if ("object" !== typeof FF || null === FF) return null;
      const WF = FF.metaData;
      return "object" !== typeof WF || null === WF || "string" !== typeof WF.id ? null : FF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);