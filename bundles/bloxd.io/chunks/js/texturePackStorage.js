export const id = 56;
export const ids = [56];
export const modules = {
  34594: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      announceStoredTexturePack: () => Uu.e,
      takeOneShotTexturePack: () => su.h
    });
    var su = ju(34599),
      Uu = ju(34606)
  },
  34606: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu
    });
    var su = ju(3427);

    function Uu() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const uu = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Eu = new BroadcastChannel(su.i);
        Eu.postMessage({
          stored: uu
        }), Eu.close()
      } catch {
        return null
      }
      return uu
    }

    function Zu(uu) {
      const Eu = "object" === typeof uu && null !== uu ? uu.stored : null;
      return "string" === typeof Eu ? Eu : null
    }
  },
  34599: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      f: () => Uu,
      h: () => Zu
    });
    var su = ju(3427);
    async function Uu(uu, Eu, ju) {
      let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Zu = Xu(await uu.getItem(su.d, Eu));
      if (null === Zu || Uu()) return null;
      const lu = await uu.getItem(su.g, Eu);
      return Uu() ? null : (await async function(uu) {
        await Promise.all([uu.removeItem(su.d), uu.removeItem(su.g)])
      }(uu).catch(ju), {
        pack: Zu,
        source: "string" === typeof lu ? lu : null
      })
    }

    function Zu(uu) {
      return (0, su.t)() ? Promise.resolve(null) : Uu(uu, !1, (uu => {
        console.error("Error removing temporary texture pack: ", uu)
      }), su.t)
    }

    function Xu(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Eu = uu.metaData;
      return "object" !== typeof Eu || null === Eu || "string" !== typeof Eu.id ? null : uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);