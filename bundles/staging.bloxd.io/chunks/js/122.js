export const id = 122;
export const ids = [122];
export const modules = {
  6285: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(1095),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        item: ub,
        className: hb
      } = bb;
      const {
        t: Bb
      } = (0, Gb.K)();
      return null === ub.renderId || ub.previewsOutdated ? (0, Ub.jsx)("div", {
        className: Ob()("ShaderPackPreviewsNotice", hb),
        children: (0, Ub.jsx)("span", {
          children: Bb(null === ub.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6309: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(6281),
      Ub = hb(1095),
      Lb = hb(6279),
      Yb = hb(1007);

    function Sb(bb) {
      let {
        selected: ub,
        onSelect: hb,
        imageUrl: Bb
      } = bb;
      const {
        t: Sb
      } = (0, Ub.K)();
      return (0, Yb.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Gb.z.map((bb => {
          const Gb = Bb(bb);
          return (0, Yb.jsxs)("button", {
            type: "button",
            "aria-pressed": bb === ub,
            className: Ob()("ShaderPackViewOption", {
              Selected: bb === ub
            }),
            onClick: () => {
              hb(bb)
            },
            children: [null !== Gb && (0, Yb.jsx)("img", {
              src: Gb,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Yb.jsx)("span", {
              className: "SmallTextBold",
              children: Sb(Lb.db[bb])
            })]
          }, bb)
        }))
      })
    }
  },
  6292: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      c: () => Zb,
      d: () => Hb,
      f: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(6281),
      Gb = hb(1398),
      Ub = hb(6279),
      Lb = hb(6300),
      Yb = hb(1029);
    const Sb = "shaderPackListingView",
      ab = "shaderPackListingFilterOpen";

    function Hb() {
      var bb;
      const [ub, hb] = (0, Lb.d)(Sb, Ob.z[0]);
      return [null !== (bb = Ob.z.find((bb => bb === ub))) && void 0 !== bb ? bb : Ob.z[0], hb]
    }

    function wb() {
      (0, Bb.useEffect)((() => () => {
        window.location.pathname.startsWith(Ub.U) || (0, Ub.k)()
      }), [])
    }

    function Zb() {
      return (0, Lb.d)(ab, !1)
    }

    function Xb() {
      const {
        userContext: bb,
        isUserContextUpdating: ub
      } = (0, Yb.d)(), [hb, Ob] = (0, Bb.useState)(null), Ub = (0, Bb.useRef)(new Set);

      function Lb(bb, ub) {
        Ob((hb => {
          const Bb = new Set(hb);
          return ub ? Bb.add(bb) : Bb.delete(bb), Bb
        }))
      }
      return (0, Bb.useEffect)((() => {
        if (ub) return;
        let hb = !1;
        return Gb.e.getFavouriteShaderPacks(bb).then((bb => {
          hb || Ob(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), hb || Ob(new Set)
        })), () => {
          hb = !0
        }
      }), [bb, ub]), {
        isFavourite: bb => null === hb ? null : hb.has(bb),
        toggle: function(ub) {
          if (null === hb || Ub.current.has(ub)) return;
          Ub.current.add(ub);
          const Bb = !hb.has(ub);
          Lb(ub, Bb), (Bb ? Gb.e.favouriteShaderPack(bb, ub) : Gb.e.unfavouriteShaderPack(bb, ub)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Lb(ub, !Bb)
          })).finally((() => {
            Ub.current.delete(ub)
          }))
        }
      }
    }
  },
  6279: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => Xb,
      D: () => Ab,
      F: () => xb,
      I: () => ab,
      L: () => gb,
      M: () => pb,
      P: () => Mb,
      R: () => Nb,
      U: () => Ub,
      V: () => sb,
      Z: () => Yb,
      _: () => Lb,
      cb: () => Jb,
      db: () => eb,
      e: () => lb,
      gb: () => Kb,
      i: () => nb,
      j: () => ob,
      jb: () => zb,
      k: () => wb,
      m: () => Hb,
      q: () => ib,
      u: () => Zb,
      v: () => vb,
      w: () => mb
    });
    var Bb = hb(6281),
      Ob = hb(148),
      Gb = hb(4322);
    const Ub = "/shader-packs",
      Lb = `${Ub}/publish`;

    function Yb(bb) {
      return `${Ub}/${encodeURIComponent(bb)}`
    }
    let Sb = null;

    function ab(bb) {
      Sb = bb
    }

    function Hb() {
      return Sb
    }

    function wb() {
      Sb = null
    }

    function Zb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const Xb = ["terrain", "water", "models", "sunShadows", "strict"],
      pb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ob(bb, ub) {
      return bb.withFeatures.includes(ub) ? "with" : bb.withoutFeatures.includes(ub) ? "without" : null
    }

    function Ab(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function lb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Kb(bb, ub) {
      const hb = ob(bb, ub),
        Bb = bb => bb.filter((bb => bb !== ub));
      return {
        withFeatures: null === hb ? [...bb.withFeatures, ub] : Bb(bb.withFeatures),
        withoutFeatures: "with" === hb ? [...bb.withoutFeatures, ub] : Bb(bb.withoutFeatures)
      }
    }
    const Wb = "section",
      Cb = "sort",
      db = "filters",
      rb = "q",
      jb = "banned",
      nb = "popular",
      Db = "strict";

    function xb(bb) {
      var ub, hb, Ob;
      const Ub = bb.get(Wb),
        Lb = (null !== (ub = bb.get(db)) && void 0 !== ub ? ub : Db).split(","),
        Yb = bb.get(jb);
      return {
        section: "favourites" === Ub || "mine" === Ub ? Ub : "explore",
        sort: null !== (hb = Bb.q.find((ub => ub === bb.get(Cb)))) && void 0 !== hb ? hb : nb,
        withFeatures: Xb.filter((bb => Lb.includes(bb) && !Lb.includes(`-${bb}`))),
        withoutFeatures: Xb.filter((bb => Lb.includes(`-${bb}`))),
        searchQuery: (null === (Ob = bb.get(rb)) || void 0 === Ob ? void 0 : Ob.slice(0, Bb.C)) || null,
        pageNumber: (0, Gb.d)(bb.get(Gb.c)),
        banned: "only" === Yb ? "with" : "include" === Yb ? null : "without"
      }
    }

    function zb(bb, ub) {
      var hb;
      const Bb = tb(ub);
      (0, Gb.g)(bb, Wb, "explore" === ub.section ? null : ub.section), (0, Gb.g)(bb, Cb, ub.sort === nb ? null : ub.sort), (0, Gb.g)(bb, db, Bb === Db ? null : Bb), (0, Gb.g)(bb, rb, ub.searchQuery), (0, Gb.g)(bb, jb, null !== (hb = lb(ub.banned)) && void 0 !== hb ? hb : null), (0, Gb.h)(bb, ub.pageNumber)
    }

    function gb(bb) {
      const ub = new URLSearchParams;
      return zb(ub, {
        section: "explore",
        sort: nb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Ub}?${ub.toString()}`
    }

    function ib(bb) {
      return tb(bb) === Db
    }

    function vb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || tb(bb) !== Db
    }

    function tb(bb) {
      return Xb.flatMap((ub => {
        const hb = ob(bb, ub);
        return "with" === hb ? [ub] : "without" === hb ? [`-${ub}`] : []
      })).join(",")
    }
    const Jb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      eb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Nb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function sb(bb, ub, hb, Ob) {
      const Gb = [];
      bb.isBanned && Gb.push({
        tone: "warning",
        text: Ob("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Ub
      } = bb;
      if (null === bb.brokenError || Ub && !Ub.error || Gb.push({
          tone: "warning",
          text: Ob("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Ub && void 0 !== Ub && Ub.error) Gb.push({
        tone: "warning",
        text: Ob(ub ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Bb.j)(Ub.error) ? null : Ub.error
      });
      else if (Ub) {
        const bb = null === Ub.renderNotBefore ? 0 : Ub.renderNotBefore - hb,
          Bb = String(Math.ceil(bb / 6e4)),
          Lb = Ob(ub ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Bb
          });
        Gb.push({
          tone: "info",
          text: Lb,
          detail: null
        })
      }
      return bb.listed || Gb.push({
        tone: "info",
        text: Ob("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Gb
    }

    function Mb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function mb(bb, ub, hb) {
      return bb instanceof Ob.b && bb.errorMessageForUser ? bb.errorMessageForUser : ub(hb)
    }
  },
  6300: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(29);

    function Gb(bb, ub) {
      var hb;
      const [Gb, Ub] = (0, Bb.useState)(null !== (hb = Ob.j.getItem(bb)) && void 0 !== hb ? hb : ub);
      return [Gb, ub => {
        Ob.j.setItem(bb, ub), Ub(ub)
      }]
    }
  },
  6281: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => wb,
      C: () => ab,
      G: () => Kb,
      J: () => Hb,
      L: () => Sb,
      d: () => Zb,
      f: () => pb,
      g: () => Xb,
      j: () => lb,
      k: () => Cb,
      l: () => Yb,
      o: () => Ob,
      p: () => Wb,
      q: () => Gb,
      s: () => Lb,
      v: () => Ub,
      z: () => Bb
    });
    const Bb = ["forest", "desert", "water", "night", "cave"];
    const Ob = {
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
      Gb = ["popular", "updated", "newest"],
      Ub = 3,
      Lb = 32,
      Yb = 300;

    function Sb(bb, ub) {
      return bb.slice(0, ub).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ab = 64,
      Hb = 512,
      wb = 18e5;
    const Zb = "Bloxdhub",
      Xb = "https://bloxdhub.com/shaders";

    function pb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const ob = "Screenshot generation failed.",
      Ab = "Its screenshots couldn't be generated:";

    function lb(bb) {
      var ub;
      return bb === ob || null !== (ub = null === bb || void 0 === bb ? void 0 : bb.startsWith(Ab)) && void 0 !== ub && ub
    }

    function Kb(bb, ub) {
      return `shaderPacks/${bb}/${ub}.json`
    }

    function Wb(bb, ub, hb, Bb) {
      return null === ub.renderId ? Cb(bb, ub.baselineVersion, hb, Bb) : `${bb}/${function(bb,ub,hb,Bb){return`shaderPacks/${bb}/${ub}/${hb}-${Bb}.webp`}(ub.packId,ub.renderId,hb,Bb)}`
    }

    function Cb(bb, ub, hb, Bb) {
      return `${bb}/${function(bb,ub,hb){return`shaderPacks/baseline/${bb}/${ub}-${hb}.webp`}(ub,hb,Bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);