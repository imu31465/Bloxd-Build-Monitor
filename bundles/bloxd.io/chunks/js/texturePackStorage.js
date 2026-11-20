export const id = 52;
export const ids = [52];
export const modules = {
  9053: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      announceStoredTexturePack: () => tk.d,
      takeOneShotTexturePack: () => Rk.i
    });
    var Rk = Bk(9055),
      tk = Bk(9064)
  },
  9064: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      f: () => ak
    });
    var Rk = Bk(3073);

    function tk() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Fk = new BroadcastChannel(Rk.l);
        Fk.postMessage({
          stored: kk
        }), Fk.close()
      } catch {
        return null
      }
      return kk
    }

    function ak(kk) {
      const Fk = "object" === typeof kk && null !== kk ? kk.stored : null;
      return "string" === typeof Fk ? Fk : null
    }
  },
  9055: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      g: () => tk,
      i: () => ak
    });
    var Rk = Bk(3073);
    async function tk(kk, Fk, Bk) {
      let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const ak = Xk(await kk.getItem(Rk.h, Fk));
      if (null === ak || tk()) return null;
      const bk = await kk.getItem(Rk.i, Fk);
      return tk() ? null : (await async function(kk) {
        await Promise.all([kk.removeItem(Rk.h), kk.removeItem(Rk.i)])
      }(kk).catch(Bk), {
        pack: ak,
        source: "string" === typeof bk ? bk : null
      })
    }

    function ak(kk) {
      return (0, Rk.s)() ? Promise.resolve(null) : tk(kk, !1, (kk => {
        console.error("Error removing temporary texture pack: ", kk)
      }), Rk.s)
    }

    function Xk(kk) {
      if ("object" !== typeof kk || null === kk) return null;
      const Fk = kk.metaData;
      return "object" !== typeof Fk || null === Fk || "string" !== typeof Fk.id ? null : kk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);