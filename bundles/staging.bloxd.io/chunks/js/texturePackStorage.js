export const id = 53;
export const ids = [53];
export const modules = {
  9284: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      announceStoredTexturePack: () => Nd.c,
      takeOneShotTexturePack: () => pd.g
    });
    var pd = kd(9291),
      Nd = kd(9299)
  },
  9299: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(3112);

    function Nd() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const dd = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Jd = new BroadcastChannel(pd.h);
        Jd.postMessage({
          stored: dd
        }), Jd.close()
      } catch {
        return null
      }
      return dd
    }

    function Wd(dd) {
      const Jd = "object" === typeof dd && null !== dd ? dd.stored : null;
      return "string" === typeof Jd ? Jd : null
    }
  },
  9291: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Pd,
      f: () => Nd,
      g: () => Wd
    });
    var pd = kd(3112);
    async function Nd(dd, Jd, kd) {
      let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Wd = Pd(await dd.getItem(pd.e, Jd));
      if (null === Wd || Nd()) return null;
      const Zd = await dd.getItem(pd.g, Jd);
      return Nd() ? null : (await async function(dd) {
        await Promise.all([dd.removeItem(pd.e), dd.removeItem(pd.g)])
      }(dd).catch(kd), {
        pack: Wd,
        source: "string" === typeof Zd ? Zd : null
      })
    }

    function Wd(dd) {
      return (0, pd.m)() ? Promise.resolve(null) : Nd(dd, !1, (dd => {
        console.error("Error removing temporary texture pack: ", dd)
      }), pd.m)
    }

    function Pd(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Jd = dd.metaData;
      return "object" !== typeof Jd || null === Jd || "string" !== typeof Jd.id ? null : dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);