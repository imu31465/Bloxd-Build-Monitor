export const id = 53;
export const ids = [53];
export const modules = {
  9408: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      announceStoredTexturePack: () => MT.d,
      takeOneShotTexturePack: () => lT.g
    });
    var lT = cT(9415),
      MT = cT(9420)
  },
  9420: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT,
      f: () => KT
    });
    var lT = cT(3198);

    function MT() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const TT = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const kT = new BroadcastChannel(lT.l);
        kT.postMessage({
          stored: TT
        }), kT.close()
      } catch {
        return null
      }
      return TT
    }

    function KT(TT) {
      const kT = "object" === typeof TT && null !== TT ? TT.stored : null;
      return "string" === typeof kT ? kT : null
    }
  },
  9415: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      f: () => MT,
      g: () => KT
    });
    var lT = cT(3198);
    async function MT(TT, kT, cT) {
      let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const KT = OT(await TT.getItem(lT.h, kT));
      if (null === KT || MT()) return null;
      const yT = await TT.getItem(lT.k, kT);
      return MT() ? null : (await async function(TT) {
        await Promise.all([TT.removeItem(lT.h), TT.removeItem(lT.k)])
      }(TT).catch(cT), {
        pack: KT,
        source: "string" === typeof yT ? yT : null
      })
    }

    function KT(TT) {
      return (0, lT.x)() ? Promise.resolve(null) : MT(TT, !1, (TT => {
        console.error("Error removing temporary texture pack: ", TT)
      }), lT.x)
    }

    function OT(TT) {
      if ("object" !== typeof TT || null === TT) return null;
      const kT = TT.metaData;
      return "object" !== typeof kT || null === kT || "string" !== typeof kT.id ? null : TT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);