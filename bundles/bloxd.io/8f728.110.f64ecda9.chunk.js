export const id = 110;
export const ids = [110];
export const modules = {
  5526: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(1051),
      uc = nc(957);

    function sc(cB) {
      let {
        item: Bc,
        className: nc
      } = cB;
      const {
        t: Vc
      } = (0, rB.x)();
      return null === Bc.renderId || Bc.previewsOutdated ? (0, uc.jsx)("div", {
        className: Ic()("ShaderPackPreviewsNotice", nc),
        children: (0, uc.jsx)("span", {
          children: Vc(null === Bc.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5546: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(5523),
      uc = nc(1051),
      sc = nc(5516),
      Mc = nc(957);

    function Pc(cB) {
      let {
        selected: Bc,
        onSelect: nc,
        imageUrl: Vc
      } = cB;
      const {
        t: Pc
      } = (0, uc.x)();
      return (0, Mc.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: rB.E.map((cB => {
          const rB = Vc(cB);
          return (0, Mc.jsxs)("button", {
            type: "button",
            "aria-pressed": cB === Bc,
            className: Ic()("ShaderPackViewOption", {
              Selected: cB === Bc
            }),
            onClick: () => {
              nc(cB)
            },
            children: [null !== rB && (0, Mc.jsx)("img", {
              src: rB,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Mc.jsx)("span", {
              className: "SmallTextBold",
              children: Pc(sc.jb[cB])
            })]
          }, cB)
        }))
      })
    }
  },
  5533: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      g: () => fc,
      k: () => Oc,
      n: () => mB
    });
    var Vc = nc(73),
      Ic = nc(5523),
      rB = nc(1314),
      uc = nc(5516),
      sc = nc(5542),
      Mc = nc(985);
    const Pc = "shaderPackListingView",
      qB = "shaderPackListingFilterOpen";

    function Oc() {
      var cB;
      const [Bc, nc] = (0, sc.c)(Pc, Ic.E[0]);
      return [null !== (cB = Ic.E.find((cB => cB === Bc))) && void 0 !== cB ? cB : Ic.E[0], nc]
    }

    function Tc() {
      (0, Vc.useEffect)((() => () => {
        window.location.pathname.startsWith(uc.Z) || (0, uc.n)()
      }), [])
    }

    function fc() {
      return (0, sc.c)(qB, !1)
    }

    function mB() {
      const {
        userContext: cB,
        isUserContextUpdating: Bc
      } = (0, Mc.c)(), [nc, Ic] = (0, Vc.useState)(null), uc = (0, Vc.useRef)(new Set);

      function sc(cB, Bc) {
        Ic((nc => {
          const Vc = new Set(nc);
          return Bc ? Vc.add(cB) : Vc.delete(cB), Vc
        }))
      }
      return (0, Vc.useEffect)((() => {
        if (Bc) return;
        let nc = !1;
        return rB.e.getFavouriteShaderPacks(cB).then((cB => {
          nc || Ic(new Set(cB))
        })).catch((cB => {
          console.error("Failed to get favourite shader packs", cB), nc || Ic(new Set)
        })), () => {
          nc = !0
        }
      }), [cB, Bc]), {
        isFavourite: cB => null === nc ? null : nc.has(cB),
        toggle: function(Bc) {
          if (null === nc || uc.current.has(Bc)) return;
          uc.current.add(Bc);
          const Vc = !nc.has(Bc);
          sc(Bc, Vc), (Vc ? rB.e.favouriteShaderPack(cB, Bc) : rB.e.unfavouriteShaderPack(cB, Bc)).catch((cB => {
            console.error("Failed to change a favourite shader pack", cB), sc(Bc, !Vc)
          })).finally((() => {
            uc.current.delete(Bc)
          }))
        }
      }
    }
  },
  5516: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => oc,
      D: () => mB,
      H: () => Sc,
      I: () => Uc,
      J: () => qB,
      N: () => Zc,
      O: () => ec,
      R: () => Wc,
      V: () => Ec,
      Z: () => uc,
      c: () => yB,
      db: () => Mc,
      g: () => Lc,
      gb: () => sc,
      ib: () => Dc,
      jb: () => Nc,
      k: () => tB,
      mb: () => zB,
      n: () => Tc,
      o: () => Oc,
      pb: () => bB,
      r: () => Qc,
      t: () => fc,
      x: () => Cc,
      z: () => wc
    });
    var Vc = nc(5523),
      Ic = nc(152),
      rB = nc(3668);
    const uc = "/shader-packs",
      sc = `${uc}/publish`;

    function Mc(cB) {
      return `${uc}/${encodeURIComponent(cB)}`
    }
    let Pc = null;

    function qB(cB) {
      Pc = cB
    }

    function Oc() {
      return Pc
    }

    function Tc() {
      Pc = null
    }

    function fc(cB) {
      return cB.playerHasRank("developer") || cB.playerHasRank("admin")
    }
    const mB = ["terrain", "water", "models", "sunShadows", "strict"],
      ec = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tB(cB, Bc) {
      return cB.withFeatures.includes(Bc) ? "with" : cB.withoutFeatures.includes(Bc) ? "without" : null
    }

    function Sc(cB) {
      return null === cB ? "with" : "with" === cB ? "without" : null
    }

    function yB(cB) {
      return "with" === cB ? "only" : null === cB ? "include" : void 0
    }

    function zB(cB, Bc) {
      const nc = tB(cB, Bc),
        Vc = cB => cB.filter((cB => cB !== Bc));
      return {
        withFeatures: null === nc ? [...cB.withFeatures, Bc] : Vc(cB.withFeatures),
        withoutFeatures: "with" === nc ? [...cB.withoutFeatures, Bc] : Vc(cB.withoutFeatures)
      }
    }
    const pc = "section",
      hc = "sort",
      aB = "filters",
      lc = "q",
      Yc = "banned",
      Lc = "popular",
      gB = "strict";

    function Uc(cB) {
      var Bc, nc, Ic;
      const uc = cB.get(pc),
        sc = (null !== (Bc = cB.get(aB)) && void 0 !== Bc ? Bc : gB).split(","),
        Mc = cB.get(Yc);
      return {
        section: "favourites" === uc || "mine" === uc ? uc : "explore",
        sort: null !== (nc = Vc.w.find((Bc => Bc === cB.get(hc)))) && void 0 !== nc ? nc : Lc,
        withFeatures: mB.filter((cB => sc.includes(cB) && !sc.includes(`-${cB}`))),
        withoutFeatures: mB.filter((cB => sc.includes(`-${cB}`))),
        searchQuery: (null === (Ic = cB.get(lc)) || void 0 === Ic ? void 0 : Ic.slice(0, Vc.L)) || null,
        pageNumber: (0, rB.g)(cB.get(rB.c)),
        banned: "only" === Mc ? "with" : "include" === Mc ? null : "without"
      }
    }

    function bB(cB, Bc) {
      var nc;
      const Vc = vB(Bc);
      (0, rB.j)(cB, pc, "explore" === Bc.section ? null : Bc.section), (0, rB.j)(cB, hc, Bc.sort === Lc ? null : Bc.sort), (0, rB.j)(cB, aB, Vc === gB ? null : Vc), (0, rB.j)(cB, lc, Bc.searchQuery), (0, rB.j)(cB, Yc, null !== (nc = yB(Bc.banned)) && void 0 !== nc ? nc : null), (0, rB.k)(cB, Bc.pageNumber)
    }

    function Zc(cB) {
      const Bc = new URLSearchParams;
      return bB(Bc, {
        section: "explore",
        sort: Lc,
        withFeatures: "strict" === cB ? [cB] : [cB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${uc}?${Bc.toString()}`
    }

    function Qc(cB) {
      return vB(cB) === gB
    }

    function Cc(cB) {
      return null !== cB.searchQuery || "with" === cB.banned || vB(cB) !== gB
    }

    function vB(cB) {
      return mB.flatMap((Bc => {
        const nc = tB(cB, Bc);
        return "with" === nc ? [Bc] : "without" === nc ? [`-${Bc}`] : []
      })).join(",")
    }
    const Dc = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Nc = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Ec(cB) {
      return Math.round(100 * Math.max(0, 1 - 1 / cB))
    }

    function oc(cB, Bc, nc, Ic) {
      const rB = [];
      cB.isBanned && rB.push({
        tone: "warning",
        text: Ic("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: uc
      } = cB;
      if (null === cB.brokenError || uc && !uc.error || rB.push({
          tone: "warning",
          text: Ic("shaderPackListing:ownerBroken"),
          detail: cB.brokenError
        }), null !== uc && void 0 !== uc && uc.error) rB.push({
        tone: "warning",
        text: Ic(Bc ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Vc.i)(uc.error) ? null : uc.error
      });
      else if (uc) {
        const cB = null === uc.renderNotBefore ? 0 : uc.renderNotBefore - nc,
          Vc = String(Math.ceil(cB / 6e4)),
          sc = Ic(Bc ? cB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : cB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Vc
          });
        rB.push({
          tone: "info",
          text: sc,
          detail: null
        })
      }
      return cB.listed || rB.push({
        tone: "info",
        text: Ic("shaderPackListing:ownerUnlisted"),
        detail: null
      }), rB
    }

    function Wc(cB) {
      return Math.max(1, Math.round(cB / 1024))
    }

    function wc(cB, Bc, nc) {
      return cB instanceof Ic.c && cB.errorMessageForUser ? cB.errorMessageForUser : Bc(nc)
    }
  },
  5542: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(73),
      Ic = nc(51);

    function rB(cB, Bc) {
      var nc;
      const [rB, uc] = (0, Vc.useState)(null !== (nc = Ic.h.getItem(cB)) && void 0 !== nc ? nc : Bc);
      return [rB, Bc => {
        Ic.h.setItem(cB, Bc), uc(Bc)
      }]
    }
  },
  5523: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => uc,
      E: () => Vc,
      I: () => Tc,
      L: () => qB,
      O: () => zB,
      P: () => Oc,
      T: () => Pc,
      c: () => fc,
      d: () => ec,
      f: () => mB,
      i: () => yB,
      l: () => hc,
      p: () => Mc,
      q: () => Ic,
      t: () => pc,
      w: () => rB,
      z: () => sc
    });
    const Vc = ["forest", "desert", "water", "night", "cave"];
    const Ic = {
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
      rB = ["popular", "updated", "newest"],
      uc = 3,
      sc = 32,
      Mc = 300;

    function Pc(cB, Bc) {
      return cB.slice(0, Bc).replace(/[\uD800-\uDBFF]$/, "")
    }
    const qB = 64,
      Oc = 512,
      Tc = 18e5;
    const fc = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function ec(cB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(cB)}`
    }
    const tB = "Screenshot generation failed.",
      Sc = "Its screenshots couldn't be generated:";

    function yB(cB) {
      var Bc;
      return cB === tB || null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.startsWith(Sc)) && void 0 !== Bc && Bc
    }

    function zB(cB, Bc) {
      return `shaderPacks/${cB}/${Bc}.json`
    }

    function pc(cB, Bc, nc, Vc) {
      return null === Bc.renderId ? hc(cB, Bc.baselineVersion, nc, Vc) : `${cB}/${function(cB,Bc,nc,Vc){return`shaderPacks/${cB}/${Bc}/${nc}-${Vc}.webp`}(Bc.packId,Bc.renderId,nc,Vc)}`
    }

    function hc(cB, Bc, nc, Vc) {
      return `${cB}/${function(cB,Bc,nc){return`shaderPacks/baseline/${cB}/${Bc}-${nc}.webp`}(Bc,nc,Vc)}`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);