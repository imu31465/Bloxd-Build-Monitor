export const id = 128;
export const ids = [128];
export const modules = {
  6400: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(1172),
      bk = ik(1066);

    function rk(kk) {
      let {
        item: ek,
        className: ik
      } = kk;
      const {
        t: Dk
      } = (0, Sk.D)();
      return null === ek.renderId || ek.previewsOutdated ? (0, bk.jsx)("div", {
        className: fk()("ShaderPackPreviewsNotice", ik),
        children: (0, bk.jsx)("span", {
          children: Dk(null === ek.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6421: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(6396),
      bk = ik(1172),
      rk = ik(6393),
      Pk = ik(1066);

    function mk(kk) {
      let {
        selected: ek,
        onSelect: ik,
        imageUrl: Dk
      } = kk;
      const {
        t: mk
      } = (0, bk.D)();
      return (0, Pk.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Sk.H.map((kk => {
          const Sk = Dk(kk);
          return (0, Pk.jsxs)("button", {
            type: "button",
            "aria-pressed": kk === ek,
            className: fk()("ShaderPackViewOption", {
              Selected: kk === ek
            }),
            onClick: () => {
              ik(kk)
            },
            children: [null !== Sk && (0, Pk.jsx)("img", {
              src: Sk,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Pk.jsx)("span", {
              className: "SmallTextBold",
              children: mk(rk.ib[kk])
            })]
          }, kk)
        }))
      })
    }
  },
  6406: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk,
      f: () => nk,
      h: () => Kk,
      i: () => Uk
    });
    var Dk = ik(60),
      fk = ik(6396),
      Sk = ik(1459),
      bk = ik(6393),
      rk = ik(6414),
      Pk = ik(1095);
    const mk = "shaderPackListingView",
      Mk = "shaderPackListingFilterOpen";

    function Kk() {
      var kk;
      const [ek, ik] = (0, rk.e)(mk, fk.H[0]);
      return [null !== (kk = fk.H.find((kk => kk === ek))) && void 0 !== kk ? kk : fk.H[0], ik]
    }

    function xk() {
      (0, Dk.useEffect)((() => () => {
        window.location.pathname.startsWith(bk.S) || (0, bk.m)()
      }), [])
    }

    function nk() {
      return (0, rk.e)(Mk, !1)
    }

    function Uk() {
      const {
        userContext: kk,
        isUserContextUpdating: ek
      } = (0, Pk.d)(), [ik, fk] = (0, Dk.useState)(null), bk = (0, Dk.useRef)(new Set);

      function rk(kk, ek) {
        fk((ik => {
          const Dk = new Set(ik);
          return ek ? Dk.add(kk) : Dk.delete(kk), Dk
        }))
      }
      return (0, Dk.useEffect)((() => {
        if (ek) return;
        let ik = !1;
        return Sk.b.getFavouriteShaderPacks(kk).then((kk => {
          ik || fk(new Set(kk))
        })).catch((kk => {
          console.error("Failed to get favourite shader packs", kk), ik || fk(new Set)
        })), () => {
          ik = !0
        }
      }), [kk, ek]), {
        isFavourite: kk => null === ik ? null : ik.has(kk),
        toggle: function(ek) {
          if (null === ik || bk.current.has(ek)) return;
          bk.current.add(ek);
          const Dk = !ik.has(ek);
          rk(ek, Dk), (Dk ? Sk.b.favouriteShaderPack(kk, ek) : Sk.b.unfavouriteShaderPack(kk, ek)).catch((kk => {
            console.error("Failed to change a favourite shader pack", kk), rk(ek, !Dk)
          })).finally((() => {
            bk.current.delete(ek)
          }))
        }
      }
    }
  },
  6393: (kk, ek, ik) => {
    ik.d(ek, {
      B: () => Ik,
      D: () => Wk,
      E: () => Uk,
      F: () => lk,
      I: () => Vk,
      L: () => Mk,
      M: () => uk,
      N: () => Hk,
      O: () => ak,
      P: () => Ek,
      S: () => bk,
      V: () => hk,
      Y: () => Pk,
      ab: () => rk,
      c: () => pk,
      eb: () => Qk,
      f: () => sk,
      ib: () => vk,
      j: () => wk,
      lb: () => yk,
      m: () => xk,
      ob: () => Fk,
      q: () => Kk,
      u: () => qk,
      x: () => nk
    });
    var Dk = ik(6396),
      fk = ik(165),
      Sk = ik(4505);
    const bk = "/shader-packs",
      rk = `${bk}/publish`;

    function Pk(kk) {
      return `${bk}/${encodeURIComponent(kk)}`
    }
    let mk = null;

    function Mk(kk) {
      mk = kk
    }

    function Kk() {
      return mk
    }

    function xk() {
      mk = null
    }

    function nk(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const Uk = ["terrain", "water", "models", "sunShadows", "strict"],
      Hk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function wk(kk, ek) {
      return kk.withFeatures.includes(ek) ? "with" : kk.withoutFeatures.includes(ek) ? "without" : null
    }

    function lk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function pk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function yk(kk, ek) {
      const ik = wk(kk, ek),
        Dk = kk => kk.filter((kk => kk !== ek));
      return {
        withFeatures: null === ik ? [...kk.withFeatures, ek] : Dk(kk.withFeatures),
        withoutFeatures: "with" === ik ? [...kk.withoutFeatures, ek] : Dk(kk.withoutFeatures)
      }
    }
    const Yk = "section",
      Lk = "sort",
      Ck = "filters",
      Ak = "q",
      jk = "banned",
      sk = "popular",
      dk = "strict";

    function Vk(kk) {
      var ek, ik, fk;
      const bk = kk.get(Yk),
        rk = (null !== (ek = kk.get(Ck)) && void 0 !== ek ? ek : dk).split(","),
        Pk = kk.get(jk);
      return {
        section: "favourites" === bk || "mine" === bk ? bk : "explore",
        sort: null !== (ik = Dk.C.find((ek => ek === kk.get(Lk)))) && void 0 !== ik ? ik : sk,
        withFeatures: Uk.filter((kk => rk.includes(kk) && !rk.includes(`-${kk}`))),
        withoutFeatures: Uk.filter((kk => rk.includes(`-${kk}`))),
        searchQuery: (null === (fk = kk.get(Ak)) || void 0 === fk ? void 0 : fk.slice(0, Dk.N)) || null,
        pageNumber: (0, Sk.g)(kk.get(Sk.e)),
        banned: "only" === Pk ? "with" : "include" === Pk ? null : "without"
      }
    }

    function Fk(kk, ek) {
      var ik;
      const Dk = zk(ek);
      (0, Sk.k)(kk, Yk, "explore" === ek.section ? null : ek.section), (0, Sk.k)(kk, Lk, ek.sort === sk ? null : ek.sort), (0, Sk.k)(kk, Ck, Dk === dk ? null : Dk), (0, Sk.k)(kk, Ak, ek.searchQuery), (0, Sk.k)(kk, jk, null !== (ik = pk(ek.banned)) && void 0 !== ik ? ik : null), (0, Sk.n)(kk, ek.pageNumber)
    }

    function uk(kk) {
      const ek = new URLSearchParams;
      return Fk(ek, {
        section: "explore",
        sort: sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${bk}?${ek.toString()}`
    }

    function qk(kk) {
      return zk(kk) === dk
    }

    function Ik(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || zk(kk) !== dk
    }

    function zk(kk) {
      return Uk.flatMap((ek => {
        const ik = wk(kk, ek);
        return "with" === ik ? [ek] : "without" === ik ? [`-${ek}`] : []
      })).join(",")
    }
    const Qk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      vk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Ek(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function hk(kk, ek, ik, fk) {
      const Sk = [];
      kk.isBanned && Sk.push({
        tone: "warning",
        text: fk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: bk
      } = kk;
      if (null === kk.brokenError || bk && !bk.error || Sk.push({
          tone: "warning",
          text: fk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== bk && void 0 !== bk && bk.error) Sk.push({
        tone: "warning",
        text: fk(ek ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Dk.p)(bk.error) ? null : bk.error
      });
      else if (bk) {
        const kk = null === bk.renderNotBefore ? 0 : bk.renderNotBefore - ik,
          Dk = String(Math.ceil(kk / 6e4)),
          rk = fk(ek ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Dk
          });
        Sk.push({
          tone: "info",
          text: rk,
          detail: null
        })
      }
      return kk.listed || Sk.push({
        tone: "info",
        text: fk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Sk
    }

    function ak(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function Wk(kk, ek, ik) {
      return kk instanceof fk.d && kk.errorMessageForUser ? kk.errorMessageForUser : ek(ik)
    }
  },
  6414: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(60),
      fk = ik(38);

    function Sk(kk, ek) {
      var ik;
      const [Sk, bk] = (0, Dk.useState)(null !== (ik = fk.f.getItem(kk)) && void 0 !== ik ? ik : ek);
      return [Sk, ek => {
        fk.f.setItem(kk, ek), bk(ek)
      }]
    }
  },
  6396: (kk, ek, ik) => {
    ik.d(ek, {
      C: () => Sk,
      F: () => rk,
      G: () => bk,
      H: () => Dk,
      K: () => xk,
      N: () => Mk,
      Q: () => Yk,
      R: () => Kk,
      V: () => mk,
      e: () => Uk,
      h: () => wk,
      i: () => Hk,
      m: () => nk,
      p: () => yk,
      t: () => Ck,
      v: () => Pk,
      x: () => fk,
      y: () => Lk
    });
    const Dk = ["forest", "desert", "water", "night", "cave"];
    const fk = {
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
      Sk = ["popular", "updated", "newest"],
      bk = 3,
      rk = 32,
      Pk = 300;

    function mk(kk, ek) {
      return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Mk = 64,
      Kk = 512,
      xk = 18e5;

    function nk(kk) {
      const ek = kk,
        ik = null === ek || void 0 === ek ? void 0 : ek.files;
      return "number" === typeof(null === ek || void 0 === ek ? void 0 : ek.apiVersion) && "string" === typeof ek.name && (null === ek.author || "string" === typeof ek.author) && (void 0 === ek.keepCircleShadows || "boolean" === typeof ek.keepCircleShadows) && "object" === typeof ik && null !== ik && Object.values(ik).every((kk => "string" === typeof kk))
    }
    const Uk = "Bloxdhub",
      Hk = "https://bloxdhub.com/shaders";

    function wk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const lk = "Screenshot generation failed.",
      pk = "Its screenshots couldn't be generated:";

    function yk(kk) {
      var ek;
      return kk === lk || null !== (ek = null === kk || void 0 === kk ? void 0 : kk.startsWith(pk)) && void 0 !== ek && ek
    }

    function Yk(kk, ek) {
      return `shaderPacks/${kk}/${ek}.json`
    }

    function Lk(kk, ek, ik, Dk) {
      return null === ek.renderId ? Ck(kk, ek.baselineVersion, ik, Dk) : `${kk}/${function(kk,ek,ik,Dk){return`shaderPacks/${kk}/${ek}/${ik}-${Dk}.webp`}(ek.packId,ek.renderId,ik,Dk)}`
    }

    function Ck(kk, ek, ik, Dk) {
      return `${kk}/${function(kk,ek,ik){return`shaderPacks/baseline/${kk}/${ek}-${ik}.webp`}(ek,ik,Dk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);