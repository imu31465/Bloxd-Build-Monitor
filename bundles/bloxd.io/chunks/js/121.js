export const id = 121;
export const ids = [121];
export const modules = {
  6176: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(1134),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        item: ab,
        className: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Tb.A)();
      return null === ab.renderId || ab.previewsOutdated ? (0, Eb.jsx)("div", {
        className: Mb()("ShaderPackPreviewsNotice", Ub),
        children: (0, Eb.jsx)("span", {
          children: Ab(null === ab.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6194: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(6167),
      Eb = Ub(1134),
      Yb = Ub(6161),
      Bb = Ub(1023);

    function eb(bb) {
      let {
        selected: ab,
        onSelect: Ub,
        imageUrl: Ab
      } = bb;
      const {
        t: eb
      } = (0, Eb.A)();
      return (0, Bb.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Tb.G.map((bb => {
          const Tb = Ab(bb);
          return (0, Bb.jsxs)("button", {
            type: "button",
            "aria-pressed": bb === ab,
            className: Mb()("ShaderPackViewOption", {
              Selected: bb === ab
            }),
            onClick: () => {
              Ub(bb)
            },
            children: [null !== Tb && (0, Bb.jsx)("img", {
              src: Tb,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Bb.jsx)("span", {
              className: "SmallTextBold",
              children: eb(Yb.eb[bb])
            })]
          }, bb)
        }))
      })
    }
  },
  6179: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      h: () => Xb,
      k: () => Lb,
      n: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(6167),
      Tb = Ub(1413),
      Eb = Ub(6161),
      Yb = Ub(6188),
      Bb = Ub(1060);
    const eb = "shaderPackListingView",
      vb = "shaderPackListingFilterOpen";

    function Lb() {
      var bb;
      const [ab, Ub] = (0, Yb.b)(eb, Mb.G[0]);
      return [null !== (bb = Mb.G.find((bb => bb === ab))) && void 0 !== bb ? bb : Mb.G[0], Ub]
    }

    function Pb() {
      (0, Ab.useEffect)((() => () => {
        window.location.pathname.startsWith(Eb.U) || (0, Eb.l)()
      }), [])
    }

    function Xb() {
      return (0, Yb.b)(vb, !1)
    }

    function jb() {
      const {
        userContext: bb,
        isUserContextUpdating: ab
      } = (0, Bb.c)(), [Ub, Mb] = (0, Ab.useState)(null), Eb = (0, Ab.useRef)(new Set);

      function Yb(bb, ab) {
        Mb((Ub => {
          const Ab = new Set(Ub);
          return ab ? Ab.add(bb) : Ab.delete(bb), Ab
        }))
      }
      return (0, Ab.useEffect)((() => {
        if (ab) return;
        let Ub = !1;
        return Tb.b.getFavouriteShaderPacks(bb).then((bb => {
          Ub || Mb(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), Ub || Mb(new Set)
        })), () => {
          Ub = !0
        }
      }), [bb, ab]), {
        isFavourite: bb => null === Ub ? null : Ub.has(bb),
        toggle: function(ab) {
          if (null === Ub || Eb.current.has(ab)) return;
          Eb.current.add(ab);
          const Ab = !Ub.has(ab);
          Yb(ab, Ab), (Ab ? Tb.b.favouriteShaderPack(bb, ab) : Tb.b.unfavouriteShaderPack(bb, ab)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Yb(ab, !Ab)
          })).finally((() => {
            Eb.current.delete(ab)
          }))
        }
      }
    }
  },
  6161: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => jb,
      E: () => yb,
      H: () => Wb,
      I: () => vb,
      J: () => Ib,
      K: () => Rb,
      O: () => rb,
      R: () => qb,
      U: () => Eb,
      V: () => ub,
      Z: () => Bb,
      ab: () => Yb,
      db: () => Gb,
      e: () => Zb,
      eb: () => Qb,
      g: () => pb,
      hb: () => Db,
      ib: () => Hb,
      j: () => kb,
      l: () => Pb,
      m: () => Lb,
      p: () => db,
      t: () => Xb,
      x: () => Fb,
      z: () => Kb
    });
    var Ab = Ub(6167),
      Mb = Ub(166),
      Tb = Ub(4239);
    const Eb = "/shader-packs",
      Yb = `${Eb}/publish`;

    function Bb(bb) {
      return `${Eb}/${encodeURIComponent(bb)}`
    }
    let eb = null;

    function vb(bb) {
      eb = bb
    }

    function Lb() {
      return eb
    }

    function Pb() {
      eb = null
    }

    function Xb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const jb = ["terrain", "water", "models", "sunShadows", "strict"],
      Rb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function kb(bb, ab) {
      return bb.withFeatures.includes(ab) ? "with" : bb.withoutFeatures.includes(ab) ? "without" : null
    }

    function yb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Zb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Db(bb, ab) {
      const Ub = kb(bb, ab),
        Ab = bb => bb.filter((bb => bb !== ab));
      return {
        withFeatures: null === Ub ? [...bb.withFeatures, ab] : Ab(bb.withFeatures),
        withoutFeatures: "with" === Ub ? [...bb.withoutFeatures, ab] : Ab(bb.withoutFeatures)
      }
    }
    const zb = "section",
      xb = "sort",
      ib = "filters",
      fb = "q",
      mb = "banned",
      pb = "popular",
      Nb = "strict";

    function Wb(bb) {
      var ab, Ub, Mb;
      const Eb = bb.get(zb),
        Yb = (null !== (ab = bb.get(ib)) && void 0 !== ab ? ab : Nb).split(","),
        Bb = bb.get(mb);
      return {
        section: "favourites" === Eb || "mine" === Eb ? Eb : "explore",
        sort: null !== (Ub = Ab.z.find((ab => ab === bb.get(xb)))) && void 0 !== Ub ? Ub : pb,
        withFeatures: jb.filter((bb => Yb.includes(bb) && !Yb.includes(`-${bb}`))),
        withoutFeatures: jb.filter((bb => Yb.includes(`-${bb}`))),
        searchQuery: (null === (Mb = bb.get(fb)) || void 0 === Mb ? void 0 : Mb.slice(0, Ab.M)) || null,
        pageNumber: (0, Tb.e)(bb.get(Tb.b)),
        banned: "only" === Bb ? "with" : "include" === Bb ? null : "without"
      }
    }

    function Hb(bb, ab) {
      var Ub;
      const Ab = hb(ab);
      (0, Tb.f)(bb, zb, "explore" === ab.section ? null : ab.section), (0, Tb.f)(bb, xb, ab.sort === pb ? null : ab.sort), (0, Tb.f)(bb, ib, Ab === Nb ? null : Ab), (0, Tb.f)(bb, fb, ab.searchQuery), (0, Tb.f)(bb, mb, null !== (Ub = Zb(ab.banned)) && void 0 !== Ub ? Ub : null), (0, Tb.h)(bb, ab.pageNumber)
    }

    function Ib(bb) {
      const ab = new URLSearchParams;
      return Hb(ab, {
        section: "explore",
        sort: pb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Eb}?${ab.toString()}`
    }

    function db(bb) {
      return hb(bb) === Nb
    }

    function Fb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || hb(bb) !== Nb
    }

    function hb(bb) {
      return jb.flatMap((ab => {
        const Ub = kb(bb, ab);
        return "with" === Ub ? [ab] : "without" === Ub ? [`-${ab}`] : []
      })).join(",")
    }
    const Gb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Qb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function ub(bb, ab, Ub, Mb) {
      const Tb = [];
      bb.isBanned && Tb.push({
        tone: "warning",
        text: Mb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Eb
      } = bb;
      if (null === bb.brokenError || Eb && !Eb.error || Tb.push({
          tone: "warning",
          text: Mb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Eb && void 0 !== Eb && Eb.error) Tb.push({
        tone: "warning",
        text: Mb(ab ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ab.l)(Eb.error) ? null : Eb.error
      });
      else if (Eb) {
        const bb = null === Eb.renderNotBefore ? 0 : Eb.renderNotBefore - Ub,
          Ab = String(Math.ceil(bb / 6e4)),
          Yb = Mb(ab ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ab
          });
        Tb.push({
          tone: "info",
          text: Yb,
          detail: null
        })
      }
      return bb.listed || Tb.push({
        tone: "info",
        text: Mb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Tb
    }

    function rb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function Kb(bb, ab, Ub) {
      return bb instanceof Mb.c && bb.errorMessageForUser ? bb.errorMessageForUser : ab(Ub)
    }
  },
  6188: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(31);

    function Tb(bb, ab) {
      var Ub;
      const [Tb, Eb] = (0, Ab.useState)(null !== (Ub = Mb.f.getItem(bb)) && void 0 !== Ub ? Ub : ab);
      return [Tb, ab => {
        Mb.f.setItem(bb, ab), Eb(ab)
      }]
    }
  },
  6167: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Yb,
      E: () => Eb,
      G: () => Ab,
      I: () => Pb,
      M: () => vb,
      P: () => Db,
      R: () => Lb,
      T: () => eb,
      e: () => Xb,
      f: () => Rb,
      j: () => jb,
      l: () => Zb,
      m: () => xb,
      o: () => Bb,
      s: () => Mb,
      w: () => zb,
      z: () => Tb
    });
    const Ab = ["forest", "desert", "water", "night", "cave"];
    const Mb = {
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
      Tb = ["popular", "updated", "newest"],
      Eb = 3,
      Yb = 32,
      Bb = 300;

    function eb(bb, ab) {
      return bb.slice(0, ab).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vb = 64,
      Lb = 512,
      Pb = 18e5;
    const Xb = "Bloxdhub",
      jb = "https://bloxdhub.com/shaders";

    function Rb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const kb = "Screenshot generation failed.",
      yb = "Its screenshots couldn't be generated:";

    function Zb(bb) {
      var ab;
      return bb === kb || null !== (ab = null === bb || void 0 === bb ? void 0 : bb.startsWith(yb)) && void 0 !== ab && ab
    }

    function Db(bb, ab) {
      return `shaderPacks/${bb}/${ab}.json`
    }

    function zb(bb, ab, Ub, Ab) {
      return null === ab.renderId ? xb(bb, ab.baselineVersion, Ub, Ab) : `${bb}/${function(bb,ab,Ub,Ab){return`shaderPacks/${bb}/${ab}/${Ub}-${Ab}.webp`}(ab.packId,ab.renderId,Ub,Ab)}`
    }

    function xb(bb, ab, Ub, Ab) {
      return `${bb}/${function(bb,ab,Ub){return`shaderPacks/baseline/${bb}/${ab}-${Ub}.webp`}(ab,Ub,Ab)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);