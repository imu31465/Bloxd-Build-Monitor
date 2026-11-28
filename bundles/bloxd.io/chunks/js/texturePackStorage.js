export const id = 68;
export const ids = [68];
export const modules = {
  35623: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      announceStoredTexturePack: () => Fd.b,
      takeOneShotTexturePack: () => Wd.f
    });
    var Wd = md(35632),
      Fd = md(35639)
  },
  35639: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      c: () => Rd
    });
    var Wd = md(4470);

    function Fd() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const dd = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Od = new BroadcastChannel(Wd.k);
        Od.postMessage({
          stored: dd
        }), Od.close()
      } catch {
        return null
      }
      return dd
    }

    function Rd(dd) {
      const Od = "object" === typeof dd && null !== dd ? dd.stored : null;
      return "string" === typeof Od ? Od : null
    }
  },
  35632: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      e: () => Fd,
      f: () => Rd
    });
    var Wd = md(4470);
    async function Fd(dd, Od, md) {
      let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Rd = Xd(await dd.getItem(Wd.h, Od));
      if (null === Rd || Fd()) return null;
      const Kd = await dd.getItem(Wd.j, Od);
      return Fd() ? null : (await async function(dd) {
        await Promise.all([dd.removeItem(Wd.h), dd.removeItem(Wd.j)])
      }(dd).catch(md), {
        pack: Rd,
        source: "string" === typeof Kd ? Kd : null
      })
    }

    function Rd(dd) {
      return (0, Wd.p)() ? Promise.resolve(null) : Fd(dd, !1, (dd => {
        console.error("Error removing temporary texture pack: ", dd)
      }), Wd.p)
    }

    function Xd(dd) {
      if ("object" !== typeof dd || null === dd) return null;
      const Od = dd.metaData;
      return "object" !== typeof Od || null === Od || "string" !== typeof Od.id ? null : dd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);