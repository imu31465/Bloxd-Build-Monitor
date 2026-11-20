export const id = 121;
export const ids = [121];
export const modules = {
  6276: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(1175),
      gv = Pv(1082);

    function pv(vv) {
      let {
        item: zv,
        className: Pv
      } = vv;
      const {
        t: hv
      } = (0, ev.x)();
      return null === zv.renderId || zv.previewsOutdated ? (0, gv.jsx)("div", {
        className: Sv()("ShaderPackPreviewsNotice", Pv),
        children: (0, gv.jsx)("span", {
          children: hv(null === zv.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6294: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(6268),
      gv = Pv(1175),
      pv = Pv(6263),
      dv = Pv(1082);

    function Nv(vv) {
      let {
        selected: zv,
        onSelect: Pv,
        imageUrl: hv
      } = vv;
      const {
        t: Nv
      } = (0, gv.x)();
      return (0, dv.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: ev.D.map((vv => {
          const ev = hv(vv);
          return (0, dv.jsxs)("button", {
            type: "button",
            "aria-pressed": vv === zv,
            className: Sv()("ShaderPackViewOption", {
              Selected: vv === zv
            }),
            onClick: () => {
              Pv(vv)
            },
            children: [null !== ev && (0, dv.jsx)("img", {
              src: ev,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, dv.jsx)("span", {
              className: "SmallTextBold",
              children: Nv(pv.cb[vv])
            })]
          }, vv)
        }))
      })
    }
  },
  6278: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      e: () => wv,
      h: () => Tv,
      i: () => av
    });
    var hv = Pv(52),
      Sv = Pv(6268),
      ev = Pv(1482),
      gv = Pv(6263),
      pv = Pv(6287),
      dv = Pv(1108);
    const Nv = "shaderPackListingView",
      lv = "shaderPackListingFilterOpen";

    function Tv() {
      var vv;
      const [zv, Pv] = (0, pv.d)(Nv, Sv.D[0]);
      return [null !== (vv = Sv.D.find((vv => vv === zv))) && void 0 !== vv ? vv : Sv.D[0], Pv]
    }

    function Wv() {
      (0, hv.useEffect)((() => () => {
        window.location.pathname.startsWith(gv.O) || (0, gv.l)()
      }), [])
    }

    function wv() {
      return (0, pv.d)(lv, !1)
    }

    function av() {
      const {
        userContext: vv,
        isUserContextUpdating: zv
      } = (0, dv.d)(), [Pv, Sv] = (0, hv.useState)(null), gv = (0, hv.useRef)(new Set);

      function pv(vv, zv) {
        Sv((Pv => {
          const hv = new Set(Pv);
          return zv ? hv.add(vv) : hv.delete(vv), hv
        }))
      }
      return (0, hv.useEffect)((() => {
        if (zv) return;
        let Pv = !1;
        return ev.e.getFavouriteShaderPacks(vv).then((vv => {
          Pv || Sv(new Set(vv))
        })).catch((vv => {
          console.error("Failed to get favourite shader packs", vv), Pv || Sv(new Set)
        })), () => {
          Pv = !0
        }
      }), [vv, zv]), {
        isFavourite: vv => null === Pv ? null : Pv.has(vv),
        toggle: function(zv) {
          if (null === Pv || gv.current.has(zv)) return;
          gv.current.add(zv);
          const hv = !Pv.has(zv);
          pv(zv, hv), (hv ? ev.e.favouriteShaderPack(vv, zv) : ev.e.unfavouriteShaderPack(vv, zv)).catch((vv => {
            console.error("Failed to change a favourite shader pack", vv), pv(zv, !hv)
          })).finally((() => {
            gv.current.delete(zv)
          }))
        }
      }
    }
  },
  6263: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => iv,
      E: () => Dv,
      H: () => lv,
      I: () => Vv,
      J: () => sv,
      K: () => Zv,
      L: () => Iv,
      O: () => gv,
      R: () => Qv,
      U: () => dv,
      W: () => pv,
      _: () => tv,
      cb: () => qv,
      e: () => cv,
      fb: () => Gv,
      gb: () => Kv,
      h: () => nv,
      k: () => Cv,
      l: () => Wv,
      m: () => Tv,
      n: () => Uv,
      q: () => wv,
      u: () => Rv,
      w: () => Av,
      y: () => av
    });
    var hv = Pv(6268),
      Sv = Pv(144),
      ev = Pv(4319);
    const gv = "/shader-packs",
      pv = `${gv}/publish`;

    function dv(vv) {
      return `${gv}/${encodeURIComponent(vv)}`
    }
    let Nv = null;

    function lv(vv) {
      Nv = vv
    }

    function Tv() {
      return Nv
    }

    function Wv() {
      Nv = null
    }

    function wv(vv) {
      return vv.playerHasRank("developer") || vv.playerHasRank("admin")
    }
    const av = ["terrain", "water", "models", "sunShadows", "strict"],
      sv = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Cv(vv, zv) {
      return vv.withFeatures.includes(zv) ? "with" : vv.withoutFeatures.includes(zv) ? "without" : null
    }

    function iv(vv) {
      return null === vv ? "with" : "with" === vv ? "without" : null
    }

    function cv(vv) {
      return "with" === vv ? "only" : null === vv ? "include" : void 0
    }

    function Gv(vv, zv) {
      const Pv = Cv(vv, zv),
        hv = vv => vv.filter((vv => vv !== zv));
      return {
        withFeatures: null === Pv ? [...vv.withFeatures, zv] : hv(vv.withFeatures),
        withoutFeatures: "with" === Pv ? [...vv.withoutFeatures, zv] : hv(vv.withoutFeatures)
      }
    }
    const mv = "section",
      jv = "sort",
      fv = "filters",
      Fv = "q",
      Yv = "banned",
      nv = "popular",
      Ov = "strict";

    function Dv(vv) {
      var zv, Pv, Sv;
      const gv = vv.get(mv),
        pv = (null !== (zv = vv.get(fv)) && void 0 !== zv ? zv : Ov).split(","),
        dv = vv.get(Yv);
      return {
        section: "favourites" === gv || "mine" === gv ? gv : "explore",
        sort: null !== (Pv = hv.z.find((zv => zv === vv.get(jv)))) && void 0 !== Pv ? Pv : nv,
        withFeatures: av.filter((vv => pv.includes(vv) && !pv.includes(`-${vv}`))),
        withoutFeatures: av.filter((vv => pv.includes(`-${vv}`))),
        searchQuery: (null === (Sv = vv.get(Fv)) || void 0 === Sv ? void 0 : Sv.slice(0, hv.I)) || null,
        pageNumber: (0, ev.f)(vv.get(ev.d)),
        banned: "only" === dv ? "with" : "include" === dv ? null : "without"
      }
    }

    function Kv(vv, zv) {
      var Pv;
      const hv = xv(zv);
      (0, ev.j)(vv, mv, "explore" === zv.section ? null : zv.section), (0, ev.j)(vv, jv, zv.sort === nv ? null : zv.sort), (0, ev.j)(vv, fv, hv === Ov ? null : hv), (0, ev.j)(vv, Fv, zv.searchQuery), (0, ev.j)(vv, Yv, null !== (Pv = cv(zv.banned)) && void 0 !== Pv ? Pv : null), (0, ev.n)(vv, zv.pageNumber)
    }

    function Vv(vv) {
      const zv = new URLSearchParams;
      return Kv(zv, {
        section: "explore",
        sort: nv,
        withFeatures: "strict" === vv ? [vv] : [vv, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${gv}?${zv.toString()}`
    }

    function Uv(vv) {
      return xv(vv) === Ov
    }

    function Rv(vv) {
      return null !== vv.searchQuery || "with" === vv.banned || xv(vv) !== Ov
    }

    function xv(vv) {
      return av.flatMap((zv => {
        const Pv = Cv(vv, zv);
        return "with" === Pv ? [zv] : "without" === Pv ? [`-${zv}`] : []
      })).join(",")
    }
    const tv = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      qv = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Iv(vv) {
      return Math.round(100 * Math.max(0, 1 - 1 / vv))
    }

    function Qv(vv, zv, Pv, Sv) {
      const ev = [];
      vv.isBanned && ev.push({
        tone: "warning",
        text: Sv("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: gv
      } = vv;
      if (null === vv.brokenError || gv && !gv.error || ev.push({
          tone: "warning",
          text: Sv("shaderPackListing:ownerBroken"),
          detail: vv.brokenError
        }), null !== gv && void 0 !== gv && gv.error) ev.push({
        tone: "warning",
        text: Sv(zv ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, hv.k)(gv.error) ? null : gv.error
      });
      else if (gv) {
        const vv = null === gv.renderNotBefore ? 0 : gv.renderNotBefore - Pv,
          hv = String(Math.ceil(vv / 6e4)),
          pv = Sv(zv ? vv > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : vv > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: hv
          });
        ev.push({
          tone: "info",
          text: pv,
          detail: null
        })
      }
      return vv.listed || ev.push({
        tone: "info",
        text: Sv("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ev
    }

    function Zv(vv) {
      return Math.max(1, Math.round(vv / 1024))
    }

    function Av(vv, zv, Pv) {
      return vv instanceof Sv.c && vv.errorMessageForUser ? vv.errorMessageForUser : zv(Pv)
    }
  },
  6287: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(39);

    function ev(vv, zv) {
      var Pv;
      const [ev, gv] = (0, hv.useState)(null !== (Pv = Sv.h.getItem(vv)) && void 0 !== Pv ? Pv : zv);
      return [ev, zv => {
        Sv.h.setItem(vv, zv), gv(zv)
      }]
    }
  },
  6268: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => pv,
      B: () => gv,
      D: () => hv,
      G: () => Wv,
      I: () => lv,
      L: () => Gv,
      N: () => Tv,
      R: () => Nv,
      c: () => wv,
      f: () => sv,
      h: () => av,
      k: () => cv,
      o: () => jv,
      q: () => dv,
      t: () => Sv,
      v: () => mv,
      z: () => ev
    });
    const hv = ["forest", "desert", "water", "night", "cave"];
    const Sv = {
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
      ev = ["popular", "updated", "newest"],
      gv = 3,
      pv = 32,
      dv = 300;

    function Nv(vv, zv) {
      return vv.slice(0, zv).replace(/[\uD800-\uDBFF]$/, "")
    }
    const lv = 64,
      Tv = 512,
      Wv = 18e5;
    const wv = "Bloxdhub",
      av = "https://bloxdhub.com/shaders";

    function sv(vv) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(vv)}`
    }
    const Cv = "Screenshot generation failed.",
      iv = "Its screenshots couldn't be generated:";

    function cv(vv) {
      var zv;
      return vv === Cv || null !== (zv = null === vv || void 0 === vv ? void 0 : vv.startsWith(iv)) && void 0 !== zv && zv
    }

    function Gv(vv, zv) {
      return `shaderPacks/${vv}/${zv}.json`
    }

    function mv(vv, zv, Pv, hv) {
      return null === zv.renderId ? jv(vv, zv.baselineVersion, Pv, hv) : `${vv}/${function(vv,zv,Pv,hv){return`shaderPacks/${vv}/${zv}/${Pv}-${hv}.webp`}(zv.packId,zv.renderId,Pv,hv)}`
    }

    function jv(vv, zv, Pv, hv) {
      return `${vv}/${function(vv,zv,Pv){return`shaderPacks/baseline/${vv}/${zv}-${Pv}.webp`}(zv,Pv,hv)}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);