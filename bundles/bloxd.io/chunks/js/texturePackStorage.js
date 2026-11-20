export const id = 52;
export const ids = [52];
export const modules = {
  9109: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      announceStoredTexturePack: () => Ku.c,
      takeOneShotTexturePack: () => Eu.i
    });
    var Eu = yu(9116),
      Ku = yu(9123)
  },
  9123: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Qu
    });
    var Eu = yu(3077);

    function Ku() {
      if ("undefined" === typeof BroadcastChannel) return null;
      const uu = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      try {
        const Ru = new BroadcastChannel(Eu.l);
        Ru.postMessage({
          stored: uu
        }), Ru.close()
      } catch {
        return null
      }
      return uu
    }

    function Qu(uu) {
      const Ru = "object" === typeof uu && null !== uu ? uu.stored : null;
      return "string" === typeof Ru ? Ru : null
    }
  },
  9116: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      h: () => Ku,
      i: () => Qu
    });
    var Eu = yu(3077);
    async function Ku(uu, Ru, yu) {
      let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
      const Qu = mu(await uu.getItem(Eu.f, Ru));
      if (null === Qu || Ku()) return null;
      const Ju = await uu.getItem(Eu.h, Ru);
      return Ku() ? null : (await async function(uu) {
        await Promise.all([uu.removeItem(Eu.f), uu.removeItem(Eu.h)])
      }(uu).catch(yu), {
        pack: Qu,
        source: "string" === typeof Ju ? Ju : null
      })
    }

    function Qu(uu) {
      return (0, Eu.p)() ? Promise.resolve(null) : Ku(uu, !1, (uu => {
        console.error("Error removing temporary texture pack: ", uu)
      }), Eu.p)
    }

    function mu(uu) {
      if ("object" !== typeof uu || null === uu) return null;
      const Ru = uu.metaData;
      return "object" !== typeof Ru || null === Ru || "string" !== typeof Ru.id ? null : uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);