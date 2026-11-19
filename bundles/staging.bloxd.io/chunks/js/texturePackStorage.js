export const id = 52;
export const ids = [52];
export const modules = {
  8785: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      announceStoredTexturePack: () => zT.d,
      takeOneShotTexturePack: () => iT.i
    });
    var iT = IT(8789),
      zT = IT(8796)
  },
  8796: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      g: () => kT
    });
    var iT = IT(2822);

    function zT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const oT = new BroadcastChannel(iT.l);
        oT.postMessage({
          stored: TT
        }), oT.close()
      } catch {
        return null
      }
      return TT
    }

    function kT(TT) {
      const oT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof oT ? oT : null
    }
  },
  8789: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      g: () => zT,
      i: () => kT
    });
    var iT = IT(2822);
    async function zT(TT, oT, IT) {
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const kT = WT(await TT.getItem(iT.h, oT));
      if (null === kT || zT()) return null;
      const XT = await TT.getItem(iT.j, oT);
      return zT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(iT.h), TT.removeItem(iT.j)])
      }(TT).catch(IT), {
        pack: kT,
        source: "string" === typeof XT ? XT : null
      })
    }

    function kT(TT) {
      return (0, iT.s)() ? Promise.resolve(null) : zT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), iT.s)
    }

    function WT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const oT = TT.metaData;
      return "object" !== typeof oT || null === oT || "string" !== typeof oT.id ? null : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);