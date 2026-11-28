export const id = 152;
export const ids = [152];
export const modules = {
  7762: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(1259),
      Vb = Mb(1364);

    function gb(bb) {
      let {
        item: wb,
        className: Mb
      } = bb;
      const {
        t: eb
      } = (0, pb.C)();
      return null === wb.renderId || wb.previewsOutdated ? (0, Vb.jsx)("div", {
        className: Hb()("ShaderPackPreviewsNotice", Mb),
        children: (0, Vb.jsx)("span", {
          children: eb(null === wb.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  7780: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Lb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(7760),
      Vb = Mb(1259),
      gb = Mb(7754),
      lb = Mb(1364);

    function Lb(bb) {
      let {
        selected: wb,
        onSelect: Mb,
        imageUrl: eb
      } = bb;
      const {
        t: Lb
      } = (0, Vb.C)();
      return (0, lb.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: pb.I.map((bb => {
          const pb = eb(bb);
          return (0, lb.jsxs)("button", {
            type: "button",
            "aria-pressed": bb === wb,
            className: Hb()("ShaderPackViewOption", {
              Selected: bb === wb
            }),
            onClick: () => {
              Mb(bb)
            },
            children: [null !== pb && (0, lb.jsx)("img", {
              src: pb,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, lb.jsx)("span", {
              className: "SmallTextBold",
              children: Lb(gb.cb[bb])
            })]
          }, bb)
        }))
      })
    }
  },
  7768: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      h: () => tb,
      j: () => Ob,
      n: () => Cb
    });
    var eb = Mb(64),
      Hb = Mb(7760),
      pb = Mb(1677),
      Vb = Mb(7754),
      gb = Mb(7771),
      lb = Mb(1179);
    const Lb = "shaderPackListingView",
      Ib = "shaderPackListingFilterOpen";

    function Ob() {
      var bb;
      const [wb, Mb] = (0, gb.c)(Lb, Hb.I[0]);
      return [null !== (bb = Hb.I.find((bb => bb === wb))) && void 0 !== bb ? bb : Hb.I[0], Mb]
    }

    function Ub() {
      (0, eb.useEffect)((() => () => {
        window.location.pathname.startsWith(Vb.N) || (0, Vb.i)()
      }), [])
    }

    function tb() {
      return (0, gb.c)(Ib, !1)
    }

    function Cb() {
      const {
        userContext: bb,
        isUserContextUpdating: wb
      } = (0, lb.e)(), [Mb, Hb] = (0, eb.useState)(null), Vb = (0, eb.useRef)(new Set);

      function gb(bb, wb) {
        Hb((Mb => {
          const eb = new Set(Mb);
          return wb ? eb.add(bb) : eb.delete(bb), eb
        }))
      }
      return (0, eb.useEffect)((() => {
        if (wb) return;
        let Mb = !1;
        return pb.e.getFavouriteShaderPacks(bb).then((bb => {
          Mb || Hb(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), Mb || Hb(new Set)
        })), () => {
          Mb = !0
        }
      }), [bb, wb]), {
        isFavourite: bb => null === Mb ? null : Mb.has(bb),
        toggle: function(wb) {
          if (null === Mb || Vb.current.has(wb)) return;
          Vb.current.add(wb);
          const eb = !Mb.has(wb);
          gb(wb, eb), (eb ? pb.e.favouriteShaderPack(bb, wb) : pb.e.unfavouriteShaderPack(bb, wb)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), gb(wb, !eb)
          })).finally((() => {
            Vb.current.delete(wb)
          }))
        }
      }
    }
  },
  7754: (bb, wb, Mb) => {
    Mb.d(wb, {
      C: () => Rb,
      D: () => Ib,
      G: () => cb,
      H: () => Eb,
      I: () => Nb,
      L: () => Jb,
      N: () => Vb,
      Q: () => Sb,
      T: () => lb,
      W: () => gb,
      _: () => Ab,
      b: () => sb,
      cb: () => Wb,
      d: () => Kb,
      eb: () => mb,
      fb: () => Db,
      h: () => Fb,
      i: () => Ub,
      j: () => Ob,
      l: () => Yb,
      m: () => tb,
      q: () => Zb,
      t: () => vb,
      w: () => Cb,
      y: () => Bb
    });
    var eb = Mb(7760),
      Hb = Mb(192),
      pb = Mb(5411);
    const Vb = "/shader-packs",
      gb = `${Vb}/publish`;

    function lb(bb) {
      return `${Vb}/${encodeURIComponent(bb)}`
    }
    let Lb = null;

    function Ib(bb) {
      Lb = bb
    }

    function Ob() {
      return Lb
    }

    function Ub() {
      Lb = null
    }

    function tb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const Cb = ["terrain", "water", "models", "sunShadows", "strict"],
      Eb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Fb(bb, wb) {
      return bb.withFeatures.includes(wb) ? "with" : bb.withoutFeatures.includes(wb) ? "without" : null
    }

    function Bb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function sb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function mb(bb, wb) {
      const Mb = Fb(bb, wb),
        eb = bb => bb.filter((bb => bb !== wb));
      return {
        withFeatures: null === Mb ? [...bb.withFeatures, wb] : eb(bb.withFeatures),
        withoutFeatures: "with" === Mb ? [...bb.withoutFeatures, wb] : eb(bb.withoutFeatures)
      }
    }
    const hb = "section",
      zb = "sort",
      Xb = "filters",
      xb = "q",
      jb = "banned",
      Kb = "popular",
      rb = "strict";

    function Rb(bb) {
      var wb, Mb, Hb;
      const Vb = bb.get(hb),
        gb = (null !== (wb = bb.get(Xb)) && void 0 !== wb ? wb : rb).split(","),
        lb = bb.get(jb);
      return {
        section: "favourites" === Vb || "mine" === Vb ? Vb : "explore",
        sort: null !== (Mb = eb.C.find((wb => wb === bb.get(zb)))) && void 0 !== Mb ? Mb : Kb,
        withFeatures: Cb.filter((bb => gb.includes(bb) && !gb.includes(`-${bb}`))),
        withoutFeatures: Cb.filter((bb => gb.includes(`-${bb}`))),
        searchQuery: (null === (Hb = bb.get(xb)) || void 0 === Hb ? void 0 : Hb.slice(0, eb.M)) || null,
        pageNumber: (0, pb.f)(bb.get(pb.b)),
        banned: "only" === lb ? "with" : "include" === lb ? null : "without"
      }
    }

    function Db(bb, wb) {
      var Mb;
      const eb = fb(wb);
      (0, pb.g)(bb, hb, "explore" === wb.section ? null : wb.section), (0, pb.g)(bb, zb, wb.sort === Kb ? null : wb.sort), (0, pb.g)(bb, Xb, eb === rb ? null : eb), (0, pb.g)(bb, xb, wb.searchQuery), (0, pb.g)(bb, jb, null !== (Mb = sb(wb.banned)) && void 0 !== Mb ? Mb : null), (0, pb.i)(bb, wb.pageNumber)
    }

    function cb(bb) {
      const wb = new URLSearchParams;
      return Db(wb, {
        section: "explore",
        sort: Kb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Vb}?${wb.toString()}`
    }

    function Yb(bb) {
      return fb(bb) === rb
    }

    function Zb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || fb(bb) !== rb
    }

    function fb(bb) {
      return Cb.flatMap((wb => {
        const Mb = Fb(bb, wb);
        return "with" === Mb ? [wb] : "without" === Mb ? [`-${wb}`] : []
      })).join(",")
    }
    const Ab = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Wb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Jb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function Sb(bb, wb, Mb, Hb) {
      const pb = [];
      bb.isBanned && pb.push({
        tone: "warning",
        text: Hb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Vb
      } = bb;
      if (null === bb.brokenError || Vb && !Vb.error || pb.push({
          tone: "warning",
          text: Hb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Vb && void 0 !== Vb && Vb.error) pb.push({
        tone: "warning",
        text: Hb(wb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, eb.q)(Vb.error) ? null : Vb.error
      });
      else if (Vb) {
        const bb = null === Vb.renderNotBefore ? 0 : Vb.renderNotBefore - Mb,
          eb = String(Math.ceil(bb / 6e4)),
          gb = Hb(wb ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: eb
          });
        pb.push({
          tone: "info",
          text: gb,
          detail: null
        })
      }
      return bb.listed || pb.push({
        tone: "info",
        text: Hb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), pb
    }

    function Nb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function vb(bb, wb, Mb) {
      return bb instanceof Hb.b && bb.errorMessageForUser ? bb.errorMessageForUser : wb(Mb)
    }
  },
  7771: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb
    });
    var eb = Mb(64),
      Hb = Mb(43);

    function pb(bb, wb) {
      var Mb;
      const [pb, Vb] = (0, eb.useState)(null !== (Mb = Hb.i.getItem(bb)) && void 0 !== Mb ? Mb : wb);
      return [pb, wb => {
        Hb.i.setItem(bb, wb), Vb(wb)
      }]
    }
  },
  7760: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => zb,
      C: () => pb,
      G: () => gb,
      H: () => Vb,
      I: () => eb,
      J: () => Ub,
      M: () => Ib,
      O: () => hb,
      S: () => Ob,
      T: () => Lb,
      e: () => Cb,
      i: () => Fb,
      j: () => Eb,
      m: () => tb,
      q: () => mb,
      u: () => Xb,
      y: () => lb,
      z: () => Hb
    });
    const eb = ["forest", "desert", "water", "night", "cave"];
    const Hb = {
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
      pb = ["popular", "updated", "newest"],
      Vb = 3,
      gb = 32,
      lb = 300;

    function Lb(bb, wb) {
      return bb.slice(0, wb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Ib = 64,
      Ob = 512,
      Ub = 18e5;

    function tb(bb) {
      const wb = bb,
        Mb = null === wb || void 0 === wb ? void 0 : wb.files;
      return "number" === typeof(null === wb || void 0 === wb ? void 0 : wb.apiVersion) && "string" === typeof wb.name && (null === wb.author || "string" === typeof wb.author) && (void 0 === wb.keepCircleShadows || "boolean" === typeof wb.keepCircleShadows) && "object" === typeof Mb && null !== Mb && Object.values(Mb).every((bb => "string" === typeof bb))
    }
    const Cb = "Bloxdhub",
      Eb = "https://bloxdhub.com/shaders";

    function Fb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Bb = "Screenshot generation failed.",
      sb = "Its screenshots couldn't be generated:";

    function mb(bb) {
      var wb;
      return bb === Bb || null !== (wb = null === bb || void 0 === bb ? void 0 : bb.startsWith(sb)) && void 0 !== wb && wb
    }

    function hb(bb, wb) {
      return `shaderPacks/${bb}/${wb}.json`
    }

    function zb(bb, wb, Mb, eb) {
      return null === wb.renderId ? Xb(bb, wb.baselineVersion, Mb, eb) : `${bb}/${function(bb,wb,Mb,eb){return`shaderPacks/${bb}/${wb}/${Mb}-${eb}.webp`}(wb.packId,wb.renderId,Mb,eb)}`
    }

    function Xb(bb, wb, Mb, eb) {
      return `${bb}/${function(bb,wb,Mb){return`shaderPacks/baseline/${bb}/${wb}-${Mb}.webp`}(wb,Mb,eb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);