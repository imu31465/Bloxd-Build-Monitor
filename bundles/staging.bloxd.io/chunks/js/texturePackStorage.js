export const id = 55;
export const ids = [55];
export const modules = {
  34332: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      announceStoredTexturePack: () => Am.e,
      takeOneShotTexturePack: () => hm.g
    });
    var hm = fm(34337),
      Am = fm(34346)
  },
  34346: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => am
    });
    var hm = fm(3251);

    function Am() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const mm = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Tm = new BroadcastChannel(hm.h);
        Tm.postMessage({
          stored: mm
        }), Tm.close()
      } catch {
        return null
      }
      return mm
    }

    function am(mm) {
      const Tm = "object" === typeof mm && null !== mm ? mm.stored : null;
      return "string" === typeof Tm ? Tm : null
    }
  },
  34337: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => Am,
      g: () => am
    });
    var hm = fm(3251);
    async function Am(mm, Tm, fm) {
      let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const am = xm(await mm.getItem(hm.e, Tm));
      if (null === am || Am()) return null;
      const wm = await mm.getItem(hm.f, Tm);
      return Am() ? null : (await async function(mm) {
        await Promise.all([mm.removeItem(hm.e), mm.removeItem(hm.f)])
      }(mm).catch(fm), {
        pack: am,
        source: "string" === typeof wm ? wm : null
      })
    }

    function am(mm) {
      return (0, hm.n)() ? Promise.resolve(null) : Am(mm, !1, (mm => {
        console.error("Error removing temporary texture pack: ", mm)
      }), hm.n)
    }

    function xm(mm) {
      if ("object" !== typeof mm || null === mm) return null;
      const Tm = mm.metaData;
      return "object" !== typeof Tm || null === Tm || "string" !== typeof Tm.id ? null : mm
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);