export const id = 109;
export const ids = [109, 397];
export const modules = {
  4917: (mm, Tm, fm) => {
    var hm = fm(4926);

    function Am() {}

    function am() {}
    am.resetWarningCache = Am, mm.exports = function() {
      function mm(mm, Tm, fm, Am, am, xm) {
        if (xm !== hm) {
          var wm = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw wm.name = "Invariant Violation", wm
        }
      }

      function Tm() {
        return mm
      }
      mm.isRequired = mm;
      var fm = {
        array: mm,
        bigint: mm,
        bool: mm,
        func: mm,
        number: mm,
        object: mm,
        string: mm,
        symbol: mm,
        any: mm,
        arrayOf: Tm,
        element: mm,
        elementType: mm,
        instanceOf: Tm,
        node: mm,
        objectOf: Tm,
        oneOf: Tm,
        oneOfType: Tm,
        shape: Tm,
        exact: Tm,
        checkPropTypes: am,
        resetWarningCache: Am
      };
      return fm.PropTypes = fm, fm
    }
  },
  4909: (mm, Tm, fm) => {
    mm.exports = fm(4917)()
  },
  4926: mm => {
    mm.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6542: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Rm
    });
    var hm = fm(1519),
      Am = fm(1454),
      am = fm(1208),
      xm = fm(6547),
      wm = fm(6521),
      Dm = fm(6507),
      im = fm(1135);

    function Rm() {
      const {
        t: mm
      } = (0, am.A)(), Tm = (0, hm.useNavigatePreserveSearch)();
      return (0, wm.e)(), (0, im.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, im.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, im.jsx)(Am.d, {
            onClick: () => {
              Tm(Dm.S)
            },
            children: mm("shaderPackListing:backToPacks")
          })
        }), (0, im.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: mm("shaderPackListing:publishTitle")
        }), (0, im.jsx)(xm.ShaderPackPublishForm, {
          existing: null,
          onPublished: mm => {
            Tm((0, Dm.V)(mm.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6521: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      f: () => om,
      h: () => pm,
      k: () => Om
    });
    var hm = fm(59),
      Am = fm(6509),
      am = fm(1494),
      xm = fm(6507),
      wm = fm(6529),
      Dm = fm(1160);
    const im = "shaderPackListingView",
      Rm = "shaderPackListingFilterOpen";

    function pm() {
      var mm;
      const [Tm, fm] = (0, wm.b)(im, Am.K[0]);
      return [null !== (mm = Am.K.find((mm => mm === Tm))) && void 0 !== mm ? mm : Am.K[0], fm]
    }

    function Em() {
      (0, hm.useEffect)((() => () => {
        window.location.pathname.startsWith(xm.S) || (0, xm.n)()
      }), [])
    }

    function om() {
      return (0, wm.b)(Rm, !1)
    }

    function Om() {
      const {
        userContext: mm,
        isUserContextUpdating: Tm
      } = (0, Dm.e)(), [fm, Am] = (0, hm.useState)(null), xm = (0, hm.useRef)(new Set);

      function wm(mm, Tm) {
        Am((fm => {
          const hm = new Set(fm);
          return Tm ? hm.add(mm) : hm.delete(mm), hm
        }))
      }
      return (0, hm.useEffect)((() => {
        if (Tm) return;
        let fm = !1;
        return am.d.getFavouriteShaderPacks(mm).then((mm => {
          fm || Am(new Set(mm))
        })).catch((mm => {
          console.error("Failed to get favourite shader packs", mm), fm || Am(new Set)
        })), () => {
          fm = !0
        }
      }), [mm, Tm]), {
        isFavourite: mm => null === fm ? null : fm.has(mm),
        toggle: function(Tm) {
          if (null === fm || xm.current.has(Tm)) return;
          xm.current.add(Tm);
          const hm = !fm.has(Tm);
          wm(Tm, hm), (hm ? am.d.favouriteShaderPack(mm, Tm) : am.d.unfavouriteShaderPack(mm, Tm)).catch((mm => {
            console.error("Failed to change a favourite shader pack", mm), wm(Tm, !hm)
          })).finally((() => {
            xm.current.delete(Tm)
          }))
        }
      }
    }
  },
  6507: (mm, Tm, fm) => {
    fm.d(Tm, {
      C: () => jm,
      F: () => km,
      I: () => Rm,
      J: () => Sm,
      L: () => Ym,
      N: () => Cm,
      O: () => Hm,
      S: () => xm,
      U: () => ym,
      V: () => Dm,
      W: () => wm,
      Z: () => Xm,
      ab: () => Pm,
      d: () => Vm,
      eb: () => Im,
      fb: () => bm,
      g: () => zm,
      j: () => qm,
      n: () => Em,
      o: () => pm,
      q: () => em,
      t: () => om,
      w: () => Nm,
      x: () => rm,
      y: () => Om
    });
    var hm = fm(6509),
      Am = fm(168),
      am = fm(4501);
    const xm = "/shader-packs",
      wm = `${xm}/publish`;

    function Dm(mm) {
      return `${xm}/${encodeURIComponent(mm)}`
    }
    let im = null;

    function Rm(mm) {
      im = mm
    }

    function pm() {
      return im
    }

    function Em() {
      im = null
    }

    function om(mm) {
      return mm.playerHasRank("developer") || mm.playerHasRank("admin")
    }
    const Om = ["terrain", "water", "models", "sunShadows", "strict"],
      Ym = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function qm(mm, Tm) {
      return mm.withFeatures.includes(Tm) ? "with" : mm.withoutFeatures.includes(Tm) ? "without" : null
    }

    function jm(mm) {
      return null === mm ? "with" : "with" === mm ? "without" : null
    }

    function Vm(mm) {
      return "with" === mm ? "only" : null === mm ? "include" : void 0
    }

    function Im(mm, Tm) {
      const fm = qm(mm, Tm),
        hm = mm => mm.filter((mm => mm !== Tm));
      return {
        withFeatures: null === fm ? [...mm.withFeatures, Tm] : hm(mm.withFeatures),
        withoutFeatures: "with" === fm ? [...mm.withoutFeatures, Tm] : hm(mm.withoutFeatures)
      }
    }
    const Km = "section",
      Qm = "sort",
      nm = "filters",
      Jm = "q",
      cm = "banned",
      zm = "popular",
      Zm = "strict";

    function km(mm) {
      var Tm, fm, Am;
      const xm = mm.get(Km),
        wm = (null !== (Tm = mm.get(nm)) && void 0 !== Tm ? Tm : Zm).split(","),
        Dm = mm.get(cm);
      return {
        section: "favourites" === xm || "mine" === xm ? xm : "explore",
        sort: null !== (fm = hm.z.find((Tm => Tm === mm.get(Qm)))) && void 0 !== fm ? fm : zm,
        withFeatures: Om.filter((mm => wm.includes(mm) && !wm.includes(`-${mm}`))),
        withoutFeatures: Om.filter((mm => wm.includes(`-${mm}`))),
        searchQuery: (null === (Am = mm.get(Jm)) || void 0 === Am ? void 0 : Am.slice(0, hm.P)) || null,
        pageNumber: (0, am.f)(mm.get(am.d)),
        banned: "only" === Dm ? "with" : "include" === Dm ? null : "without"
      }
    }

    function bm(mm, Tm) {
      var fm;
      const hm = Gm(Tm);
      (0, am.h)(mm, Km, "explore" === Tm.section ? null : Tm.section), (0, am.h)(mm, Qm, Tm.sort === zm ? null : Tm.sort), (0, am.h)(mm, nm, hm === Zm ? null : hm), (0, am.h)(mm, Jm, Tm.searchQuery), (0, am.h)(mm, cm, null !== (fm = Vm(Tm.banned)) && void 0 !== fm ? fm : null), (0, am.i)(mm, Tm.pageNumber)
    }

    function Sm(mm) {
      const Tm = new URLSearchParams;
      return bm(Tm, {
        section: "explore",
        sort: zm,
        withFeatures: "strict" === mm ? [mm] : [mm, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${xm}?${Tm.toString()}`
    }

    function em(mm) {
      return Gm(mm) === Zm
    }

    function Nm(mm) {
      return null !== mm.searchQuery || "with" === mm.banned || Gm(mm) !== Zm
    }

    function Gm(mm) {
      return Om.flatMap((Tm => {
        const fm = qm(mm, Tm);
        return "with" === fm ? [Tm] : "without" === fm ? [`-${Tm}`] : []
      })).join(",")
    }
    const Xm = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Pm = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Hm(mm) {
      return Math.round(100 * Math.max(0, 1 - 1 / mm))
    }

    function ym(mm, Tm, fm, Am) {
      const am = [];
      mm.isBanned && am.push({
        tone: "warning",
        text: Am("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: xm
      } = mm;
      if (null === mm.brokenError || xm && !xm.error || am.push({
          tone: "warning",
          text: Am("shaderPackListing:ownerBroken"),
          detail: mm.brokenError
        }), null !== xm && void 0 !== xm && xm.error) am.push({
        tone: "warning",
        text: Am(Tm ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, hm.m)(xm.error) ? null : xm.error
      });
      else if (xm) {
        const mm = null === xm.renderNotBefore ? 0 : xm.renderNotBefore - fm,
          hm = String(Math.ceil(mm / 6e4)),
          wm = Am(Tm ? mm > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : mm > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: hm
          });
        am.push({
          tone: "info",
          text: wm,
          detail: null
        })
      }
      return mm.listed || am.push({
        tone: "info",
        text: Am("shaderPackListing:ownerUnlisted"),
        detail: null
      }), am
    }

    function Cm(mm) {
      return Math.max(1, Math.round(mm / 1024))
    }

    function rm(mm, Tm, fm) {
      return mm instanceof Am.d && mm.errorMessageForUser ? mm.errorMessageForUser : Tm(fm)
    }
  },
  6529: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(59),
      Am = fm(37);

    function am(mm, Tm) {
      var fm;
      const [am, xm] = (0, hm.useState)(null !== (fm = Am.g.getItem(mm)) && void 0 !== fm ? fm : Tm);
      return [am, Tm => {
        Am.g.setItem(mm, Tm), xm(Tm)
      }]
    }
  },
  6609: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(37);
    const Am = "shaderPack";
    async function am() {
      var mm;
      let Tm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (mm = await hm.e.getItem(Am, Tm)) && void 0 !== mm ? mm : null
    }
  },
  6509: (mm, Tm, fm) => {
    fm.d(Tm, {
      D: () => wm,
      H: () => xm,
      K: () => hm,
      L: () => Em,
      P: () => Rm,
      S: () => Km,
      V: () => pm,
      X: () => im,
      e: () => Om,
      g: () => qm,
      k: () => Ym,
      l: () => om,
      m: () => Im,
      o: () => nm,
      r: () => Dm,
      t: () => Am,
      v: () => Qm,
      z: () => am
    });
    const hm = ["forest", "desert", "water", "night", "cave"];
    const Am = {
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
      am = ["popular", "updated", "newest"],
      xm = 3,
      wm = 32,
      Dm = 300;

    function im(mm, Tm) {
      return mm.slice(0, Tm).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Rm = 64,
      pm = 512,
      Em = 18e5;

    function om(mm) {
      const Tm = mm,
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.files;
      return "number" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.apiVersion) && "string" === typeof Tm.name && (null === Tm.author || "string" === typeof Tm.author) && (void 0 === Tm.keepCircleShadows || "boolean" === typeof Tm.keepCircleShadows) && "object" === typeof fm && null !== fm && Object.values(fm).every((mm => "string" === typeof mm))
    }
    const Om = "Bloxdhub",
      Ym = "https://bloxdhub.com/shaders";

    function qm(mm) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(mm)}`
    }
    const jm = "Screenshot generation failed.",
      Vm = "Its screenshots couldn't be generated:";

    function Im(mm) {
      var Tm;
      return mm === jm || null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.startsWith(Vm)) && void 0 !== Tm && Tm
    }

    function Km(mm, Tm) {
      return `shaderPacks/${mm}/${Tm}.json`
    }

    function Qm(mm, Tm, fm, hm) {
      return null === Tm.renderId ? nm(mm, Tm.baselineVersion, fm, hm) : `${mm}/${function(mm,Tm,fm,hm){return`shaderPacks/${mm}/${Tm}/${fm}-${hm}.webp`}(Tm.packId,Tm.renderId,fm,hm)}`
    }

    function nm(mm, Tm, fm, hm) {
      return `${mm}/${function(mm,Tm,fm){return`shaderPacks/baseline/${mm}/${Tm}-${fm}.webp`}(Tm,fm,hm)}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);