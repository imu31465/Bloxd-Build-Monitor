export const id = 121;
export const ids = [121];
export const modules = {
  6214: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(1197),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        item: cb,
        className: sb
      } = bb;
      const {
        t: kb
      } = (0, ab.E)();
      return null === cb.renderId || cb.previewsOutdated ? (0, Tb.jsx)("div", {
        className: Wb()("ShaderPackPreviewsNotice", sb),
        children: (0, Tb.jsx)("span", {
          children: kb(null === cb.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6232: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(6209),
      Tb = sb(1197),
      Ub = sb(6204),
      Ib = sb(1087);

    function Hb(bb) {
      let {
        selected: cb,
        onSelect: sb,
        imageUrl: kb
      } = bb;
      const {
        t: Hb
      } = (0, Tb.E)();
      return (0, Ib.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: ab.K.map((bb => {
          const ab = kb(bb);
          return (0, Ib.jsxs)("button", {
            type: "button",
            "aria-pressed": bb === cb,
            className: Wb()("ShaderPackViewOption", {
              Selected: bb === cb
            }),
            onClick: () => {
              sb(bb)
            },
            children: [null !== ab && (0, Ib.jsx)("img", {
              src: ab,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Ib.jsx)("span", {
              className: "SmallTextBold",
              children: Hb(Ub.cb[bb])
            })]
          }, bb)
        }))
      })
    }
  },
  6219: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb,
      f: () => nb,
      h: () => Mb,
      l: () => mb
    });
    var kb = sb(64),
      Wb = sb(6209),
      ab = sb(1474),
      Tb = sb(6204),
      Ub = sb(6226),
      Ib = sb(1117);
    const Hb = "shaderPackListingView",
      fb = "shaderPackListingFilterOpen";

    function Mb() {
      var bb;
      const [cb, sb] = (0, Ub.d)(Hb, Wb.K[0]);
      return [null !== (bb = Wb.K.find((bb => bb === cb))) && void 0 !== bb ? bb : Wb.K[0], sb]
    }

    function Xb() {
      (0, kb.useEffect)((() => () => {
        window.location.pathname.startsWith(Tb.T) || (0, Tb.k)()
      }), [])
    }

    function nb() {
      return (0, Ub.d)(fb, !1)
    }

    function mb() {
      const {
        userContext: bb,
        isUserContextUpdating: cb
      } = (0, Ib.c)(), [sb, Wb] = (0, kb.useState)(null), Tb = (0, kb.useRef)(new Set);

      function Ub(bb, cb) {
        Wb((sb => {
          const kb = new Set(sb);
          return cb ? kb.add(bb) : kb.delete(bb), kb
        }))
      }
      return (0, kb.useEffect)((() => {
        if (cb) return;
        let sb = !1;
        return ab.b.getFavouriteShaderPacks(bb).then((bb => {
          sb || Wb(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), sb || Wb(new Set)
        })), () => {
          sb = !0
        }
      }), [bb, cb]), {
        isFavourite: bb => null === sb ? null : sb.has(bb),
        toggle: function(cb) {
          if (null === sb || Tb.current.has(cb)) return;
          Tb.current.add(cb);
          const kb = !sb.has(cb);
          Ub(cb, kb), (kb ? ab.b.favouriteShaderPack(bb, cb) : ab.b.unfavouriteShaderPack(bb, cb)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Ub(cb, !kb)
          })).finally((() => {
            Tb.current.delete(cb)
          }))
        }
      }
    }
  },
  6204: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => mb,
      D: () => eb,
      F: () => Bb,
      G: () => fb,
      I: () => yb,
      K: () => lb,
      O: () => Zb,
      Q: () => Gb,
      T: () => Tb,
      X: () => Kb,
      Z: () => Ib,
      _: () => Ub,
      ab: () => ib,
      cb: () => Ob,
      db: () => Nb,
      e: () => Cb,
      f: () => Jb,
      gb: () => tb,
      h: () => Qb,
      k: () => Xb,
      m: () => Mb,
      p: () => Pb,
      t: () => nb,
      x: () => Db,
      y: () => zb
    });
    var kb = sb(6209),
      Wb = sb(195),
      ab = sb(4295);
    const Tb = "/shader-packs",
      Ub = `${Tb}/publish`;

    function Ib(bb) {
      return `${Tb}/${encodeURIComponent(bb)}`
    }
    let Hb = null;

    function fb(bb) {
      Hb = bb
    }

    function Mb() {
      return Hb
    }

    function Xb() {
      Hb = null
    }

    function nb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const mb = ["terrain", "water", "models", "sunShadows", "strict"],
      lb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Qb(bb, cb) {
      return bb.withFeatures.includes(cb) ? "with" : bb.withoutFeatures.includes(cb) ? "without" : null
    }

    function eb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Cb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Nb(bb, cb) {
      const sb = Qb(bb, cb),
        kb = bb => bb.filter((bb => bb !== cb));
      return {
        withFeatures: null === sb ? [...bb.withFeatures, cb] : kb(bb.withFeatures),
        withoutFeatures: "with" === sb ? [...bb.withoutFeatures, cb] : kb(bb.withoutFeatures)
      }
    }
    const Vb = "section",
      Lb = "sort",
      ub = "filters",
      Yb = "q",
      hb = "banned",
      Jb = "popular",
      gb = "strict";

    function Bb(bb) {
      var cb, sb, Wb;
      const Tb = bb.get(Vb),
        Ub = (null !== (cb = bb.get(ub)) && void 0 !== cb ? cb : gb).split(","),
        Ib = bb.get(hb);
      return {
        section: "favourites" === Tb || "mine" === Tb ? Tb : "explore",
        sort: null !== (sb = kb.A.find((cb => cb === bb.get(Lb)))) && void 0 !== sb ? sb : Jb,
        withFeatures: mb.filter((bb => Ub.includes(bb) && !Ub.includes(`-${bb}`))),
        withoutFeatures: mb.filter((bb => Ub.includes(`-${bb}`))),
        searchQuery: (null === (Wb = bb.get(Yb)) || void 0 === Wb ? void 0 : Wb.slice(0, kb.N)) || null,
        pageNumber: (0, ab.d)(bb.get(ab.b)),
        banned: "only" === Ib ? "with" : "include" === Ib ? null : "without"
      }
    }

    function tb(bb, cb) {
      var sb;
      const kb = Eb(cb);
      (0, ab.g)(bb, Vb, "explore" === cb.section ? null : cb.section), (0, ab.g)(bb, Lb, cb.sort === Jb ? null : cb.sort), (0, ab.g)(bb, ub, kb === gb ? null : kb), (0, ab.g)(bb, Yb, cb.searchQuery), (0, ab.g)(bb, hb, null !== (sb = Cb(cb.banned)) && void 0 !== sb ? sb : null), (0, ab.k)(bb, cb.pageNumber)
    }

    function yb(bb) {
      const cb = new URLSearchParams;
      return tb(cb, {
        section: "explore",
        sort: Jb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Tb}?${cb.toString()}`
    }

    function Pb(bb) {
      return Eb(bb) === gb
    }

    function Db(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || Eb(bb) !== gb
    }

    function Eb(bb) {
      return mb.flatMap((cb => {
        const sb = Qb(bb, cb);
        return "with" === sb ? [cb] : "without" === sb ? [`-${cb}`] : []
      })).join(",")
    }
    const ib = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Ob = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Gb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function Kb(bb, cb, sb, Wb) {
      const ab = [];
      bb.isBanned && ab.push({
        tone: "warning",
        text: Wb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Tb
      } = bb;
      if (null === bb.brokenError || Tb && !Tb.error || ab.push({
          tone: "warning",
          text: Wb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Tb && void 0 !== Tb && Tb.error) ab.push({
        tone: "warning",
        text: Wb(cb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, kb.l)(Tb.error) ? null : Tb.error
      });
      else if (Tb) {
        const bb = null === Tb.renderNotBefore ? 0 : Tb.renderNotBefore - sb,
          kb = String(Math.ceil(bb / 6e4)),
          Ub = Wb(cb ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: kb
          });
        ab.push({
          tone: "info",
          text: Ub,
          detail: null
        })
      }
      return bb.listed || ab.push({
        tone: "info",
        text: Wb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ab
    }

    function Zb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function zb(bb, cb, sb) {
      return bb instanceof Wb.d && bb.errorMessageForUser ? bb.errorMessageForUser : cb(sb)
    }
  },
  6226: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(64),
      Wb = sb(37);

    function ab(bb, cb) {
      var sb;
      const [ab, Tb] = (0, kb.useState)(null !== (sb = Wb.h.getItem(bb)) && void 0 !== sb ? sb : cb);
      return [ab, cb => {
        Wb.h.setItem(bb, cb), Tb(cb)
      }]
    }
  },
  6209: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => ab,
      D: () => Ub,
      H: () => Tb,
      K: () => kb,
      M: () => Xb,
      N: () => fb,
      R: () => Nb,
      U: () => Mb,
      Y: () => Hb,
      b: () => nb,
      f: () => lb,
      h: () => mb,
      l: () => Cb,
      p: () => Lb,
      t: () => Ib,
      w: () => Wb,
      y: () => Vb
    });
    const kb = ["forest", "desert", "water", "night", "cave"];
    const Wb = {
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
      ab = ["popular", "updated", "newest"],
      Tb = 3,
      Ub = 32,
      Ib = 300;

    function Hb(bb, cb) {
      return bb.slice(0, cb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const fb = 64,
      Mb = 512,
      Xb = 18e5;
    const nb = "Bloxdhub",
      mb = "https://bloxdhub.com/shaders";

    function lb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Qb = "Screenshot generation failed.",
      eb = "Its screenshots couldn't be generated:";

    function Cb(bb) {
      var cb;
      return bb === Qb || null !== (cb = null === bb || void 0 === bb ? void 0 : bb.startsWith(eb)) && void 0 !== cb && cb
    }

    function Nb(bb, cb) {
      return `shaderPacks/${bb}/${cb}.json`
    }

    function Vb(bb, cb, sb, kb) {
      return null === cb.renderId ? Lb(bb, cb.baselineVersion, sb, kb) : `${bb}/${function(bb,cb,sb,kb){return`shaderPacks/${bb}/${cb}/${sb}-${kb}.webp`}(cb.packId,cb.renderId,sb,kb)}`
    }

    function Lb(bb, cb, sb, kb) {
      return `${bb}/${function(bb,cb,sb){return`shaderPacks/baseline/${bb}/${cb}-${sb}.webp`}(cb,sb,kb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);