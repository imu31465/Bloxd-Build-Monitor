export const id = 121;
export const ids = [121];
export const modules = {
  6260: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(1149),
      Xk = Bk(1069);

    function bk(kk) {
      let {
        item: Fk,
        className: Bk
      } = kk;
      const {
        t: Rk
      } = (0, ak.x)();
      return null === Fk.renderId || Fk.previewsOutdated ? (0, Xk.jsx)("div", {
        className: tk()("ShaderPackPreviewsNotice", Bk),
        children: (0, Xk.jsx)("span", {
          children: Rk(null === Fk.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6273: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(6253),
      Xk = Bk(1149),
      bk = Bk(6245),
      wk = Bk(1069);

    function dk(kk) {
      let {
        selected: Fk,
        onSelect: Bk,
        imageUrl: Rk
      } = kk;
      const {
        t: dk
      } = (0, Xk.x)();
      return (0, wk.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: ak.I.map((kk => {
          const ak = Rk(kk);
          return (0, wk.jsxs)("button", {
            type: "button",
            "aria-pressed": kk === Fk,
            className: tk()("ShaderPackViewOption", {
              Selected: kk === Fk
            }),
            onClick: () => {
              Bk(kk)
            },
            children: [null !== ak && (0, wk.jsx)("img", {
              src: ak,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, wk.jsx)("span", {
              className: "SmallTextBold",
              children: dk(bk.ab[kk])
            })]
          }, kk)
        }))
      })
    }
  },
  6264: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      f: () => Ak,
      g: () => Vk,
      h: () => ek
    });
    var Rk = Bk(61),
      tk = Bk(6253),
      ak = Bk(1441),
      Xk = Bk(6245),
      bk = Bk(6267),
      wk = Bk(1096);
    const dk = "shaderPackListingView",
      sk = "shaderPackListingFilterOpen";

    function Vk() {
      var kk;
      const [Fk, Bk] = (0, bk.c)(dk, tk.I[0]);
      return [null !== (kk = tk.I.find((kk => kk === Fk))) && void 0 !== kk ? kk : tk.I[0], Bk]
    }

    function Jk() {
      (0, Rk.useEffect)((() => () => {
        window.location.pathname.startsWith(Xk.S) || (0, Xk.h)()
      }), [])
    }

    function Ak() {
      return (0, bk.c)(sk, !1)
    }

    function ek() {
      const {
        userContext: kk,
        isUserContextUpdating: Fk
      } = (0, wk.e)(), [Bk, tk] = (0, Rk.useState)(null), Xk = (0, Rk.useRef)(new Set);

      function bk(kk, Fk) {
        tk((Bk => {
          const Rk = new Set(Bk);
          return Fk ? Rk.add(kk) : Rk.delete(kk), Rk
        }))
      }
      return (0, Rk.useEffect)((() => {
        if (Fk) return;
        let Bk = !1;
        return ak.b.getFavouriteShaderPacks(kk).then((kk => {
          Bk || tk(new Set(kk))
        })).catch((kk => {
          console.error("Failed to get favourite shader packs", kk), Bk || tk(new Set)
        })), () => {
          Bk = !0
        }
      }), [kk, Fk]), {
        isFavourite: kk => null === Bk ? null : Bk.has(kk),
        toggle: function(Fk) {
          if (null === Bk || Xk.current.has(Fk)) return;
          Xk.current.add(Fk);
          const Rk = !Bk.has(Fk);
          bk(Fk, Rk), (Rk ? ak.b.favouriteShaderPack(kk, Fk) : ak.b.unfavouriteShaderPack(kk, Fk)).catch((kk => {
            console.error("Failed to change a favourite shader pack", kk), bk(Fk, !Rk)
          })).finally((() => {
            Xk.current.delete(Fk)
          }))
        }
      }
    }
  },
  6245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => mk,
      E: () => Hk,
      G: () => sk,
      K: () => Mk,
      L: () => yk,
      M: () => zk,
      O: () => rk,
      S: () => Xk,
      U: () => Dk,
      W: () => wk,
      Y: () => bk,
      Z: () => Gk,
      ab: () => Tk,
      b: () => Wk,
      db: () => vk,
      e: () => Sk,
      eb: () => uk,
      f: () => fk,
      h: () => Jk,
      j: () => Vk,
      m: () => gk,
      q: () => Ak,
      r: () => Uk,
      v: () => Pk,
      z: () => ek
    });
    var Rk = Bk(6253),
      tk = Bk(152),
      ak = Bk(4299);
    const Xk = "/shader-packs",
      bk = `${Xk}/publish`;

    function wk(kk) {
      return `${Xk}/${encodeURIComponent(kk)}`
    }
    let dk = null;

    function sk(kk) {
      dk = kk
    }

    function Vk() {
      return dk
    }

    function Jk() {
      dk = null
    }

    function Ak(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const ek = ["terrain", "water", "models", "sunShadows", "strict"],
      yk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fk(kk, Fk) {
      return kk.withFeatures.includes(Fk) ? "with" : kk.withoutFeatures.includes(Fk) ? "without" : null
    }

    function mk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function Wk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function vk(kk, Fk) {
      const Bk = fk(kk, Fk),
        Rk = kk => kk.filter((kk => kk !== Fk));
      return {
        withFeatures: null === Bk ? [...kk.withFeatures, Fk] : Rk(kk.withFeatures),
        withoutFeatures: "with" === Bk ? [...kk.withoutFeatures, Fk] : Rk(kk.withoutFeatures)
      }
    }
    const ik = "section",
      Yk = "sort",
      Lk = "filters",
      Ok = "q",
      Ek = "banned",
      Sk = "popular",
      Nk = "strict";

    function Hk(kk) {
      var Fk, Bk, tk;
      const Xk = kk.get(ik),
        bk = (null !== (Fk = kk.get(Lk)) && void 0 !== Fk ? Fk : Nk).split(","),
        wk = kk.get(Ek);
      return {
        section: "favourites" === Xk || "mine" === Xk ? Xk : "explore",
        sort: null !== (Bk = Rk.B.find((Fk => Fk === kk.get(Yk)))) && void 0 !== Bk ? Bk : Sk,
        withFeatures: ek.filter((kk => bk.includes(kk) && !bk.includes(`-${kk}`))),
        withoutFeatures: ek.filter((kk => bk.includes(`-${kk}`))),
        searchQuery: (null === (tk = kk.get(Ok)) || void 0 === tk ? void 0 : tk.slice(0, Rk.M)) || null,
        pageNumber: (0, ak.g)(kk.get(ak.d)),
        banned: "only" === wk ? "with" : "include" === wk ? null : "without"
      }
    }

    function uk(kk, Fk) {
      var Bk;
      const Rk = ck(Fk);
      (0, ak.k)(kk, ik, "explore" === Fk.section ? null : Fk.section), (0, ak.k)(kk, Yk, Fk.sort === Sk ? null : Fk.sort), (0, ak.k)(kk, Lk, Rk === Nk ? null : Rk), (0, ak.k)(kk, Ok, Fk.searchQuery), (0, ak.k)(kk, Ek, null !== (Bk = Wk(Fk.banned)) && void 0 !== Bk ? Bk : null), (0, ak.l)(kk, Fk.pageNumber)
    }

    function Mk(kk) {
      const Fk = new URLSearchParams;
      return uk(Fk, {
        section: "explore",
        sort: Sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xk}?${Fk.toString()}`
    }

    function gk(kk) {
      return ck(kk) === Nk
    }

    function Uk(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || ck(kk) !== Nk
    }

    function ck(kk) {
      return ek.flatMap((Fk => {
        const Bk = fk(kk, Fk);
        return "with" === Bk ? [Fk] : "without" === Bk ? [`-${Fk}`] : []
      })).join(",")
    }
    const Gk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Tk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function rk(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function Dk(kk, Fk, Bk, tk) {
      const ak = [];
      kk.isBanned && ak.push({
        tone: "warning",
        text: tk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xk
      } = kk;
      if (null === kk.brokenError || Xk && !Xk.error || ak.push({
          tone: "warning",
          text: tk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== Xk && void 0 !== Xk && Xk.error) ak.push({
        tone: "warning",
        text: tk(Fk ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Rk.k)(Xk.error) ? null : Xk.error
      });
      else if (Xk) {
        const kk = null === Xk.renderNotBefore ? 0 : Xk.renderNotBefore - Bk,
          Rk = String(Math.ceil(kk / 6e4)),
          bk = tk(Fk ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Rk
          });
        ak.push({
          tone: "info",
          text: bk,
          detail: null
        })
      }
      return kk.listed || ak.push({
        tone: "info",
        text: tk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ak
    }

    function zk(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function Pk(kk, Fk, Bk) {
      return kk instanceof tk.c && kk.errorMessageForUser ? kk.errorMessageForUser : Fk(Bk)
    }
  },
  6267: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(42);

    function ak(kk, Fk) {
      var Bk;
      const [ak, Xk] = (0, Rk.useState)(null !== (Bk = tk.i.getItem(kk)) && void 0 !== Bk ? Bk : Fk);
      return [ak, Fk => {
        tk.i.setItem(kk, Fk), Xk(Fk)
      }]
    }
  },
  6253: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => ak,
      D: () => bk,
      G: () => Xk,
      I: () => Rk,
      J: () => Jk,
      M: () => sk,
      Q: () => vk,
      R: () => Vk,
      T: () => dk,
      e: () => Ak,
      h: () => yk,
      i: () => ek,
      k: () => Wk,
      n: () => Yk,
      p: () => wk,
      t: () => tk,
      x: () => ik
    });
    const Rk = ["forest", "desert", "water", "night", "cave"];
    const tk = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      ak = ["popular", "updated", "newest"],
      Xk = 3,
      bk = 32,
      wk = 300;

    function dk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const sk = 64,
      Vk = 512,
      Jk = 18e5;
    const Ak = "Bloxdhub",
      ek = "https://bloxdhub.com/shaders";

    function yk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const fk = "Screenshot generation failed.",
      mk = "Its screenshots couldn't be generated:";

    function Wk(kk) {
      var Fk;
      return kk === fk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(mk)) && void 0 !== Fk && Fk
    }

    function vk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function ik(kk, Fk, Bk, Rk) {
      return null === Fk.renderId ? Yk(kk, Fk.baselineVersion, Bk, Rk) : `${kk}/${function(kk,Fk,Bk,Rk){return`shaderPacks/${kk}/${Fk}/${Bk}-${Rk}.webp`}(Fk.packId,Fk.renderId,Bk,Rk)}`
    }

    function Yk(kk, Fk, Bk, Rk) {
      return `${kk}/${function(kk,Fk,Bk){return`shaderPacks/baseline/${kk}/${Fk}-${Bk}.webp`}(Fk,Bk,Rk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);