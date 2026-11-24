export const id = 56;
export const ids = [56];
export const modules = {
  34432: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      announceStoredTexturePack: () => qt.e,
      takeOneShotTexturePack: () => Ot.e
    });
    var Ot = Vt(34436),
      qt = Vt(34444)
  },
  34444: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt
    });
    var Ot = Vt(3314);

    function qt() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const tt = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const et = new BroadcastChannel(Ot.l);
        et.postMessage({
          stored: tt
        }), et.close()
      } catch {
        return null
      }
      return tt
    }

    function Dt(tt) {
      const et = "object" === typeof tt && null !== tt ? tt.stored : null;
      return "string" === typeof et ? et : null
    }
  },
  34436: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt,
      d: () => qt,
      e: () => Dt
    });
    var Ot = Vt(3314);
    async function qt(tt, et, Vt) {
      let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Dt = mt(await tt.getItem(Ot.e, et));
      if (null === Dt || qt()) return null;
      const dt = await tt.getItem(Ot.h, et);
      return qt() ? null : (await async function(tt) {
        await Promise.all([tt.removeItem(Ot.e), tt.removeItem(Ot.h)])
      }(tt).catch(Vt), {
        pack: Dt,
        source: "string" === typeof dt ? dt : null
      })
    }

    function Dt(tt) {
      return (0, Ot.q)() ? Promise.resolve(null) : qt(tt, !1, (tt => {
        console.error("Error removing temporary texture pack: ", tt)
      }), Ot.q)
    }

    function mt(tt) {
      if ("object" !== typeof tt || null === tt) return null;
      const et = tt.metaData;
      return "object" !== typeof et || null === et || "string" !== typeof et.id ? null : tt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);