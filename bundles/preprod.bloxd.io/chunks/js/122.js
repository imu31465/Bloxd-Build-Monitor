export const id = 122;
export const ids = [122];
export const modules = {
  6428: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(1183),
      mq = gq(1070);

    function xq(qq) {
      let {
        item: Eq,
        className: gq
      } = qq;
      const {
        t: Yq
      } = (0, Oq.v)();
      return null === Eq.renderId || Eq.previewsOutdated ? (0, mq.jsx)("div", {
        className: lq()("ShaderPackPreviewsNotice", gq),
        children: (0, mq.jsx)("span", {
          children: Yq(null === Eq.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6443: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(6424),
      mq = gq(1183),
      xq = gq(6422),
      Aq = gq(1070);

    function cq(qq) {
      let {
        selected: Eq,
        onSelect: gq,
        imageUrl: Yq
      } = qq;
      const {
        t: cq
      } = (0, mq.v)();
      return (0, Aq.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Oq.E.map((qq => {
          const Oq = Yq(qq);
          return (0, Aq.jsxs)("button", {
            type: "button",
            "aria-pressed": qq === Eq,
            className: lq()("ShaderPackViewOption", {
              Selected: qq === Eq
            }),
            onClick: () => {
              gq(qq)
            },
            children: [null !== Oq && (0, Aq.jsx)("img", {
              src: Oq,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Aq.jsx)("span", {
              className: "SmallTextBold",
              children: cq(xq.fb[qq])
            })]
          }, qq)
        }))
      })
    }
  },
  6431: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      h: () => Nq,
      l: () => Bq,
      m: () => aq
    });
    var Yq = gq(57),
      lq = gq(6424),
      Oq = gq(1477),
      mq = gq(6422),
      xq = gq(6434),
      Aq = gq(1101);
    const cq = "shaderPackListingView",
      uq = "shaderPackListingFilterOpen";

    function Bq() {
      var qq;
      const [Eq, gq] = (0, xq.b)(cq, lq.E[0]);
      return [null !== (qq = lq.E.find((qq => qq === Eq))) && void 0 !== qq ? qq : lq.E[0], gq]
    }

    function Wq() {
      (0, Yq.useEffect)((() => () => {
        window.location.pathname.startsWith(mq.V) || (0, mq.g)()
      }), [])
    }

    function Nq() {
      return (0, xq.b)(uq, !1)
    }

    function aq() {
      const {
        userContext: qq,
        isUserContextUpdating: Eq
      } = (0, Aq.c)(), [gq, lq] = (0, Yq.useState)(null), mq = (0, Yq.useRef)(new Set);

      function xq(qq, Eq) {
        lq((gq => {
          const Yq = new Set(gq);
          return Eq ? Yq.add(qq) : Yq.delete(qq), Yq
        }))
      }
      return (0, Yq.useEffect)((() => {
        if (Eq) return;
        let gq = !1;
        return Oq.e.getFavouriteShaderPacks(qq).then((qq => {
          gq || lq(new Set(qq))
        })).catch((qq => {
          console.error("Failed to get favourite shader packs", qq), gq || lq(new Set)
        })), () => {
          gq = !0
        }
      }), [qq, Eq]), {
        isFavourite: qq => null === gq ? null : gq.has(qq),
        toggle: function(Eq) {
          if (null === gq || mq.current.has(Eq)) return;
          mq.current.add(Eq);
          const Yq = !gq.has(Eq);
          xq(Eq, Yq), (Yq ? Oq.e.favouriteShaderPack(qq, Eq) : Oq.e.unfavouriteShaderPack(qq, Eq)).catch((qq => {
            console.error("Failed to change a favourite shader pack", qq), xq(Eq, !Yq)
          })).finally((() => {
            mq.current.delete(Eq)
          }))
        }
      }
    }
  },
  6422: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => Aq,
      B: () => nq,
      C: () => uq,
      G: () => iq,
      K: () => Vq,
      O: () => Gq,
      R: () => Sq,
      V: () => mq,
      X: () => pq,
      ab: () => xq,
      b: () => Hq,
      c: () => vq,
      db: () => Tq,
      f: () => dq,
      fb: () => zq,
      g: () => Wq,
      hb: () => oq,
      ib: () => bq,
      j: () => Bq,
      m: () => Zq,
      p: () => Nq,
      r: () => fq,
      s: () => Lq,
      w: () => aq,
      z: () => jq
    });
    var Yq = gq(6424),
      lq = gq(163),
      Oq = gq(4387);
    const mq = "/shader-packs",
      xq = `${mq}/publish`;

    function Aq(qq) {
      return `${mq}/${encodeURIComponent(qq)}`
    }
    let cq = null;

    function uq(qq) {
      cq = qq
    }

    function Bq() {
      return cq
    }

    function Wq() {
      cq = null
    }

    function Nq(qq) {
      return qq.playerHasRank("developer") || qq.playerHasRank("admin")
    }
    const aq = ["terrain", "water", "models", "sunShadows", "strict"],
      Vq = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dq(qq, Eq) {
      return qq.withFeatures.includes(Eq) ? "with" : qq.withoutFeatures.includes(Eq) ? "without" : null
    }

    function jq(qq) {
      return null === qq ? "with" : "with" === qq ? "without" : null
    }

    function Hq(qq) {
      return "with" === qq ? "only" : null === qq ? "include" : void 0
    }

    function oq(qq, Eq) {
      const gq = dq(qq, Eq),
        Yq = qq => qq.filter((qq => qq !== Eq));
      return {
        withFeatures: null === gq ? [...qq.withFeatures, Eq] : Yq(qq.withFeatures),
        withoutFeatures: "with" === gq ? [...qq.withoutFeatures, Eq] : Yq(qq.withoutFeatures)
      }
    }
    const Pq = "section",
      Qq = "sort",
      yq = "filters",
      tq = "q",
      rq = "banned",
      vq = "popular",
      hq = "strict";

    function nq(qq) {
      var Eq, gq, lq;
      const mq = qq.get(Pq),
        xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
        Aq = qq.get(rq);
      return {
        section: "favourites" === mq || "mine" === mq ? mq : "explore",
        sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
        withFeatures: aq.filter((qq => xq.includes(qq) && !xq.includes(`-${qq}`))),
        withoutFeatures: aq.filter((qq => xq.includes(`-${qq}`))),
        searchQuery: (null === (lq = qq.get(tq)) || void 0 === lq ? void 0 : lq.slice(0, Yq.I)) || null,
        pageNumber: (0, Oq.e)(qq.get(Oq.d)),
        banned: "only" === Aq ? "with" : "include" === Aq ? null : "without"
      }
    }

    function bq(qq, Eq) {
      var gq;
      const Yq = Mq(Eq);
      (0, Oq.f)(qq, Pq, "explore" === Eq.section ? null : Eq.section), (0, Oq.f)(qq, Qq, Eq.sort === vq ? null : Eq.sort), (0, Oq.f)(qq, yq, Yq === hq ? null : Yq), (0, Oq.f)(qq, tq, Eq.searchQuery), (0, Oq.f)(qq, rq, null !== (gq = Hq(Eq.banned)) && void 0 !== gq ? gq : null), (0, Oq.g)(qq, Eq.pageNumber)
    }

    function iq(qq) {
      const Eq = new URLSearchParams;
      return bq(Eq, {
        section: "explore",
        sort: vq,
        withFeatures: "strict" === qq ? [qq] : [qq, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mq}?${Eq.toString()}`
    }

    function Zq(qq) {
      return Mq(qq) === hq
    }

    function fq(qq) {
      return null !== qq.searchQuery || "with" === qq.banned || Mq(qq) !== hq
    }

    function Mq(qq) {
      return aq.flatMap((Eq => {
        const gq = dq(qq, Eq);
        return "with" === gq ? [Eq] : "without" === gq ? [`-${Eq}`] : []
      })).join(",")
    }
    const Tq = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      zq = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Sq(qq) {
      return Math.round(100 * Math.max(0, 1 - 1 / qq))
    }

    function pq(qq, Eq, gq, lq) {
      const Oq = [];
      qq.isBanned && Oq.push({
        tone: "warning",
        text: lq("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mq
      } = qq;
      if (null === qq.brokenError || mq && !mq.error || Oq.push({
          tone: "warning",
          text: lq("shaderPackListing:ownerBroken"),
          detail: qq.brokenError
        }), null !== mq && void 0 !== mq && mq.error) Oq.push({
        tone: "warning",
        text: lq(Eq ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Yq.k)(mq.error) ? null : mq.error
      });
      else if (mq) {
        const qq = null === mq.renderNotBefore ? 0 : mq.renderNotBefore - gq,
          Yq = String(Math.ceil(qq / 6e4)),
          xq = lq(Eq ? qq > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : qq > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Yq
          });
        Oq.push({
          tone: "info",
          text: xq,
          detail: null
        })
      }
      return qq.listed || Oq.push({
        tone: "info",
        text: lq("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Oq
    }

    function Gq(qq) {
      return Math.max(1, Math.round(qq / 1024))
    }

    function Lq(qq, Eq, gq) {
      return qq instanceof lq.b && qq.errorMessageForUser ? qq.errorMessageForUser : Eq(gq)
    }
  },
  6434: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(57),
      lq = gq(38);

    function Oq(qq, Eq) {
      var gq;
      const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
      return [Oq, Eq => {
        lq.i.setItem(qq, Eq), mq(Eq)
      }]
    }
  },
  6424: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => mq,
      E: () => Yq,
      G: () => Wq,
      I: () => uq,
      K: () => oq,
      N: () => Bq,
      R: () => cq,
      e: () => Nq,
      g: () => Vq,
      i: () => aq,
      k: () => Hq,
      m: () => Qq,
      n: () => Aq,
      p: () => lq,
      r: () => Pq,
      v: () => Oq,
      z: () => xq
    });
    const Yq = ["forest", "desert", "water", "night", "cave"];
    const lq = {
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
      Oq = ["popular", "updated", "newest"],
      mq = 3,
      xq = 32,
      Aq = 300;

    function cq(qq, Eq) {
      return qq.slice(0, Eq).replace(/[\uD800-\uDBFF]$/, "")
    }
    const uq = 64,
      Bq = 512,
      Wq = 18e5;
    const Nq = "Bloxdhub",
      aq = "https://bloxdhub.com/shaders";

    function Vq(qq) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
    }
    const dq = "Screenshot generation failed.",
      jq = "Its screenshots couldn't be generated:";

    function Hq(qq) {
      var Eq;
      return qq === dq || null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.startsWith(jq)) && void 0 !== Eq && Eq
    }

    function oq(qq, Eq) {
      return `shaderPacks/${qq}/${Eq}.json`
    }

    function Pq(qq, Eq, gq, Yq) {
      return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
    }

    function Qq(qq, Eq, gq, Yq) {
      return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);