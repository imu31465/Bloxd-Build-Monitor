export const id = 113;
export const ids = [113];
export const modules = {
  5807: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(1042),
      Zy = Wy(952);

    function cb(yb) {
      let {
        item: bb,
        className: Wy
      } = yb;
      const {
        t: Uy
      } = (0, fy.D)();
      return null === bb.renderId || bb.previewsOutdated ? (0, Zy.jsx)("div", {
        className: hy()("ShaderPackPreviewsNotice", Wy),
        children: (0, Zy.jsx)("span", {
          children: Uy(null === bb.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5821: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(5801),
      Zy = Wy(1042),
      cb = Wy(5799),
      Py = Wy(952);

    function oy(yb) {
      let {
        selected: bb,
        onSelect: Wy,
        imageUrl: Uy
      } = yb;
      const {
        t: oy
      } = (0, Zy.D)();
      return (0, Py.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: fy.N.map((yb => {
          const fy = Uy(yb);
          return (0, Py.jsxs)("button", {
            type: "button",
            "aria-pressed": yb === bb,
            className: hy()("ShaderPackViewOption", {
              Selected: yb === bb
            }),
            onClick: () => {
              Wy(yb)
            },
            children: [null !== fy && (0, Py.jsx)("img", {
              src: fy,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Py.jsx)("span", {
              className: "SmallTextBold",
              children: oy(cb.$[yb])
            })]
          }, yb)
        }))
      })
    }
  },
  5815: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => qb,
      k: () => Ky,
      o: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(5801),
      fy = Wy(1339),
      Zy = Wy(5799),
      cb = Wy(5819),
      Py = Wy(980);
    const oy = "shaderPackListingView",
      By = "shaderPackListingFilterOpen";

    function Ky() {
      var yb;
      const [bb, Wy] = (0, cb.d)(oy, hy.N[0]);
      return [null !== (yb = hy.N.find((yb => yb === bb))) && void 0 !== yb ? yb : hy.N[0], Wy]
    }

    function ey() {
      (0, Uy.useEffect)((() => () => {
        window.location.pathname.startsWith(Zy.P) || (0, Zy.k)()
      }), [])
    }

    function qb() {
      return (0, cb.d)(By, !1)
    }

    function sy() {
      const {
        userContext: yb,
        isUserContextUpdating: bb
      } = (0, Py.c)(), [Wy, hy] = (0, Uy.useState)(null), Zy = (0, Uy.useRef)(new Set);

      function cb(yb, bb) {
        hy((Wy => {
          const Uy = new Set(Wy);
          return bb ? Uy.add(yb) : Uy.delete(yb), Uy
        }))
      }
      return (0, Uy.useEffect)((() => {
        if (bb) return;
        let Wy = !1;
        return fy.c.getFavouriteShaderPacks(yb).then((yb => {
          Wy || hy(new Set(yb))
        })).catch((yb => {
          console.error("Failed to get favourite shader packs", yb), Wy || hy(new Set)
        })), () => {
          Wy = !0
        }
      }), [yb, bb]), {
        isFavourite: yb => null === Wy ? null : Wy.has(yb),
        toggle: function(bb) {
          if (null === Wy || Zy.current.has(bb)) return;
          Zy.current.add(bb);
          const Uy = !Wy.has(bb);
          cb(bb, Uy), (Uy ? fy.c.favouriteShaderPack(yb, bb) : fy.c.unfavouriteShaderPack(yb, bb)).catch((yb => {
            console.error("Failed to change a favourite shader pack", yb), cb(bb, !Uy)
          })).finally((() => {
            Zy.current.delete(bb)
          }))
        }
      }
    }
  },
  5799: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => rb,
      D: () => By,
      F: () => My,
      I: () => Sy,
      J: () => Fy,
      L: () => Hy,
      P: () => Zy,
      S: () => ab,
      U: () => Py,
      V: () => cb,
      Z: () => uy,
      ab: () => Cy,
      bb: () => ib,
      d: () => mb,
      g: () => Oy,
      j: () => Ey,
      k: () => ey,
      m: () => Ky,
      n: () => Yy,
      o: () => qb,
      p: () => Xy,
      t: () => py,
      u: () => sy,
      v: () => ly,
      z: () => vb
    });
    var Uy = Wy(5801),
      hy = Wy(143),
      fy = Wy(3758);
    const Zy = "/shader-packs",
      cb = `${Zy}/publish`;

    function Py(yb) {
      return `${Zy}/${encodeURIComponent(yb)}`
    }
    let oy = null;

    function By(yb) {
      oy = yb
    }

    function Ky() {
      return oy
    }

    function ey() {
      oy = null
    }

    function qb(yb) {
      return yb.playerHasRank("developer") || yb.playerHasRank("admin")
    }
    const sy = ["terrain", "water", "models", "sunShadows", "strict"],
      Sy = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Ey(yb, bb) {
      return yb.withFeatures.includes(bb) ? "with" : yb.withoutFeatures.includes(bb) ? "without" : null
    }

    function ly(yb) {
      return null === yb ? "with" : "with" === yb ? "without" : null
    }

    function mb(yb) {
      return "with" === yb ? "only" : null === yb ? "include" : void 0
    }

    function Cy(yb, bb) {
      const Wy = Ey(yb, bb),
        Uy = yb => yb.filter((yb => yb !== bb));
      return {
        withFeatures: null === Wy ? [...yb.withFeatures, bb] : Uy(yb.withFeatures),
        withoutFeatures: "with" === Wy ? [...yb.withoutFeatures, bb] : Uy(yb.withoutFeatures)
      }
    }
    const Ty = "section",
      Vy = "sort",
      Jy = "filters",
      gb = "q",
      Gy = "banned",
      Oy = "popular",
      Ry = "strict";

    function vb(yb) {
      var bb, Wy, hy;
      const Zy = yb.get(Ty),
        cb = (null !== (bb = yb.get(Jy)) && void 0 !== bb ? bb : Ry).split(","),
        Py = yb.get(Gy);
      return {
        section: "favourites" === Zy || "mine" === Zy ? Zy : "explore",
        sort: null !== (Wy = Uy.D.find((bb => bb === yb.get(Vy)))) && void 0 !== Wy ? Wy : Oy,
        withFeatures: sy.filter((yb => cb.includes(yb) && !cb.includes(`-${yb}`))),
        withoutFeatures: sy.filter((yb => cb.includes(`-${yb}`))),
        searchQuery: (null === (hy = yb.get(gb)) || void 0 === hy ? void 0 : hy.slice(0, Uy.S)) || null,
        pageNumber: (0, fy.i)(yb.get(fy.e)),
        banned: "only" === Py ? "with" : "include" === Py ? null : "without"
      }
    }

    function ib(yb, bb) {
      var Wy;
      const Uy = ny(bb);
      (0, fy.k)(yb, Ty, "explore" === bb.section ? null : bb.section), (0, fy.k)(yb, Vy, bb.sort === Oy ? null : bb.sort), (0, fy.k)(yb, Jy, Uy === Ry ? null : Uy), (0, fy.k)(yb, gb, bb.searchQuery), (0, fy.k)(yb, Gy, null !== (Wy = mb(bb.banned)) && void 0 !== Wy ? Wy : null), (0, fy.n)(yb, bb.pageNumber)
    }

    function My(yb) {
      const bb = new URLSearchParams;
      return ib(bb, {
        section: "explore",
        sort: Oy,
        withFeatures: "strict" === yb ? [yb] : [yb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Zy}?${bb.toString()}`
    }

    function Yy(yb) {
      return ny(yb) === Ry
    }

    function Xy(yb) {
      return null !== yb.searchQuery || "with" === yb.banned || ny(yb) !== Ry
    }

    function ny(yb) {
      return sy.flatMap((bb => {
        const Wy = Ey(yb, bb);
        return "with" === Wy ? [bb] : "without" === Wy ? [`-${bb}`] : []
      })).join(",")
    }
    const uy = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      rb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Hy(yb) {
      return Math.round(100 * Math.max(0, 1 - 1 / yb))
    }

    function ab(yb, bb, Wy, hy) {
      const fy = [];
      yb.isBanned && fy.push({
        tone: "warning",
        text: hy("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Zy
      } = yb;
      if (null === yb.brokenError || Zy && !Zy.error || fy.push({
          tone: "warning",
          text: hy("shaderPackListing:ownerBroken"),
          detail: yb.brokenError
        }), null !== Zy && void 0 !== Zy && Zy.error) fy.push({
        tone: "warning",
        text: hy(bb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Uy.m)(Zy.error) ? null : Zy.error
      });
      else if (Zy) {
        const yb = null === Zy.renderNotBefore ? 0 : Zy.renderNotBefore - Wy,
          Uy = String(Math.ceil(yb / 6e4)),
          cb = hy(bb ? yb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : yb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Uy
          });
        fy.push({
          tone: "info",
          text: cb,
          detail: null
        })
      }
      return yb.listed || fy.push({
        tone: "info",
        text: hy("shaderPackListing:ownerUnlisted"),
        detail: null
      }), fy
    }

    function Fy(yb) {
      return Math.max(1, Math.round(yb / 1024))
    }

    function py(yb, bb, Wy) {
      return yb instanceof hy.c && yb.errorMessageForUser ? yb.errorMessageForUser : bb(Wy)
    }
  },
  5819: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(55),
      hy = Wy(33);

    function fy(yb, bb) {
      var Wy;
      const [fy, Zy] = (0, Uy.useState)(null !== (Wy = hy.e.getItem(yb)) && void 0 !== Wy ? Wy : bb);
      return [fy, bb => {
        hy.e.setItem(yb, bb), Zy(bb)
      }]
    }
  },
  5801: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => fy,
      H: () => cb,
      J: () => Zy,
      N: () => Uy,
      R: () => ey,
      S: () => By,
      U: () => Cy,
      V: () => Ky,
      Y: () => oy,
      e: () => qb,
      h: () => Sy,
      l: () => sy,
      m: () => mb,
      p: () => Vy,
      r: () => Py,
      v: () => hy,
      z: () => Ty
    });
    const Uy = ["forest", "desert", "water", "night", "cave"];
    const hy = {
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
      fy = ["popular", "updated", "newest"],
      Zy = 3,
      cb = 32,
      Py = 300;

    function oy(yb, bb) {
      return yb.slice(0, bb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const By = 64,
      Ky = 512,
      ey = 18e5;
    const qb = "Bloxdhub",
      sy = "https://bloxdhub.com/shaders";

    function Sy(yb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(yb)}`
    }
    const Ey = "Screenshot generation failed.",
      ly = "Its screenshots couldn't be generated:";

    function mb(yb) {
      var bb;
      return yb === Ey || null !== (bb = null === yb || void 0 === yb ? void 0 : yb.startsWith(ly)) && void 0 !== bb && bb
    }

    function Cy(yb, bb) {
      return `shaderPacks/${yb}/${bb}.json`
    }

    function Ty(yb, bb, Wy, Uy) {
      return null === bb.renderId ? Vy(yb, bb.baselineVersion, Wy, Uy) : `${yb}/${function(yb,bb,Wy,Uy){return`shaderPacks/${yb}/${bb}/${Wy}-${Uy}.webp`}(bb.packId,bb.renderId,Wy,Uy)}`
    }

    function Vy(yb, bb, Wy, Uy) {
      return `${yb}/${function(yb,bb,Wy){return`shaderPacks/baseline/${yb}/${bb}-${Wy}.webp`}(bb,Wy,Uy)}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);