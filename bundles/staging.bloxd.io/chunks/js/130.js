export const id = 130;
export const ids = [130, 716];
export const modules = {
  5929: (rr, Sr, Qr) => {
    var Zr = Qr(5933);

    function Wr() {}

    function ar() {}
    ar.resetWarningCache = Wr, rr.exports = function() {
      function rr(rr, Sr, Qr, Wr, ar, jr) {
        if (jr !== Zr) {
          var Ir = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ir.name = "Invariant Violation", Ir
        }
      }

      function Sr() {
        return rr
      }
      rr.isRequired = rr;
      var Qr = {
        array: rr,
        bigint: rr,
        bool: rr,
        func: rr,
        number: rr,
        object: rr,
        string: rr,
        symbol: rr,
        any: rr,
        arrayOf: Sr,
        element: rr,
        elementType: rr,
        instanceOf: Sr,
        node: rr,
        objectOf: Sr,
        oneOf: Sr,
        oneOfType: Sr,
        shape: Sr,
        exact: Sr,
        checkPropTypes: ar,
        resetWarningCache: Wr
      };
      return Qr.PropTypes = Qr, Qr
    }
  },
  5927: (rr, Sr, Qr) => {
    rr.exports = Qr(5929)()
  },
  5933: rr => {
    rr.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  7556: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => pr
    });
    var Zr = Qr(1644),
      Wr = Qr(1576),
      ar = Qr(1251),
      jr = Qr(7561),
      Ir = Qr(7541),
      fr = Qr(7526),
      Er = Qr(1338);

    function pr() {
      const {
        t: rr
      } = (0, ar.E)(), Sr = (0, Zr.useNavigatePreserveSearch)();
      return (0, Ir.b)(), (0, Er.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Er.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Er.jsx)(Wr.d, {
            onClick: () => {
              Sr(fr.X)
            },
            children: rr("shaderPackListing:backToPacks")
          })
        }), (0, Er.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: rr("shaderPackListing:publishTitle")
        }), (0, Er.jsx)(jr.ShaderPackPublishForm, {
          existing: null,
          onPublished: rr => {
            Sr((0, fr._)(rr.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  7541: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => mr,
      f: () => Nr,
      i: () => xr,
      l: () => Ur
    });
    var Zr = Qr(72),
      Wr = Qr(7533),
      ar = Qr(1629),
      jr = Qr(7526),
      Ir = Qr(7550),
      fr = Qr(1181);
    const Er = "shaderPackListingView",
      pr = "shaderPackListingFilterOpen";

    function xr() {
      var rr;
      const [Sr, Qr] = (0, Ir.e)(Er, Wr.D[0]);
      return [null !== (rr = Wr.D.find((rr => rr === Sr))) && void 0 !== rr ? rr : Wr.D[0], Qr]
    }

    function mr() {
      (0, Zr.useEffect)((() => () => {
        window.location.pathname.startsWith(jr.X) || (0, jr.l)()
      }), [])
    }

    function Nr() {
      return (0, Ir.e)(pr, !1)
    }

    function Ur() {
      const {
        userContext: rr,
        isUserContextUpdating: Sr
      } = (0, fr.c)(), [Qr, Wr] = (0, Zr.useState)(null), jr = (0, Zr.useRef)(new Set);

      function Ir(rr, Sr) {
        Wr((Qr => {
          const Zr = new Set(Qr);
          return Sr ? Zr.add(rr) : Zr.delete(rr), Zr
        }))
      }
      return (0, Zr.useEffect)((() => {
        if (Sr) return;
        let Qr = !1;
        return ar.c.getFavouriteShaderPacks(rr).then((rr => {
          Qr || Wr(new Set(rr))
        })).catch((rr => {
          console.error("Failed to get favourite shader packs", rr), Qr || Wr(new Set)
        })), () => {
          Qr = !0
        }
      }), [rr, Sr]), {
        isFavourite: rr => null === Qr ? null : Qr.has(rr),
        toggle: function(Sr) {
          if (null === Qr || jr.current.has(Sr)) return;
          jr.current.add(Sr);
          const Zr = !Qr.has(Sr);
          Ir(Sr, Zr), (Zr ? ar.c.favouriteShaderPack(rr, Sr) : ar.c.unfavouriteShaderPack(rr, Sr)).catch((rr => {
            console.error("Failed to change a favourite shader pack", rr), Ir(Sr, !Zr)
          })).finally((() => {
            jr.current.delete(Sr)
          }))
        }
      }
    }
  },
  7526: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      A: () => Ur,
      B: () => zr,
      F: () => Lr,
      I: () => pr,
      M: () => Xr,
      Q: () => tr,
      R: () => Gr,
      V: () => Cr,
      X: () => jr,
      Z: () => Mr,
      _: () => fr,
      bb: () => Ir,
      cb: () => Rr,
      d: () => Yr,
      eb: () => gr,
      gb: () => nr,
      h: () => vr,
      i: () => hr,
      kb: () => lr,
      l: () => mr,
      n: () => xr,
      p: () => Pr,
      t: () => Nr,
      v: () => Hr,
      z: () => kr
    });
    var Zr = Qr(7533),
      Wr = Qr(161),
      ar = Qr(5323);
    const jr = "/shader-packs",
      Ir = `${jr}/publish`;

    function fr(rr) {
      return `${jr}/${encodeURIComponent(rr)}`
    }
    let Er = null;

    function pr(rr) {
      Er = rr
    }

    function xr() {
      return Er
    }

    function mr() {
      Er = null
    }

    function Nr(rr) {
      return rr.playerHasRank("developer") || rr.playerHasRank("admin")
    }
    const Ur = ["terrain", "water", "models", "sunShadows", "strict"],
      tr = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hr(rr, Sr) {
      return rr.withFeatures.includes(Sr) ? "with" : rr.withoutFeatures.includes(Sr) ? "without" : null
    }

    function zr(rr) {
      return null === rr ? "with" : "with" === rr ? "without" : null
    }

    function Yr(rr) {
      return "with" === rr ? "only" : null === rr ? "include" : void 0
    }

    function nr(rr, Sr) {
      const Qr = hr(rr, Sr),
        Zr = rr => rr.filter((rr => rr !== Sr));
      return {
        withFeatures: null === Qr ? [...rr.withFeatures, Sr] : Zr(rr.withFeatures),
        withoutFeatures: "with" === Qr ? [...rr.withoutFeatures, Sr] : Zr(rr.withoutFeatures)
      }
    }
    const er = "section",
      Kr = "sort",
      yr = "filters",
      Br = "q",
      Tr = "banned",
      vr = "popular",
      Or = "strict";

    function Lr(rr) {
      var Sr, Qr, Wr;
      const jr = rr.get(er),
        Ir = (null !== (Sr = rr.get(yr)) && void 0 !== Sr ? Sr : Or).split(","),
        fr = rr.get(Tr);
      return {
        section: "favourites" === jr || "mine" === jr ? jr : "explore",
        sort: null !== (Qr = Zr.w.find((Sr => Sr === rr.get(Kr)))) && void 0 !== Qr ? Qr : vr,
        withFeatures: Ur.filter((rr => Ir.includes(rr) && !Ir.includes(`-${rr}`))),
        withoutFeatures: Ur.filter((rr => Ir.includes(`-${rr}`))),
        searchQuery: (null === (Wr = rr.get(Br)) || void 0 === Wr ? void 0 : Wr.slice(0, Zr.I)) || null,
        pageNumber: (0, ar.c)(rr.get(ar.b)),
        banned: "only" === fr ? "with" : "include" === fr ? null : "without"
      }
    }

    function lr(rr, Sr) {
      var Qr;
      const Zr = qr(Sr);
      (0, ar.g)(rr, er, "explore" === Sr.section ? null : Sr.section), (0, ar.g)(rr, Kr, Sr.sort === vr ? null : Sr.sort), (0, ar.g)(rr, yr, Zr === Or ? null : Zr), (0, ar.g)(rr, Br, Sr.searchQuery), (0, ar.g)(rr, Tr, null !== (Qr = Yr(Sr.banned)) && void 0 !== Qr ? Qr : null), (0, ar.j)(rr, Sr.pageNumber)
    }

    function Xr(rr) {
      const Sr = new URLSearchParams;
      return lr(Sr, {
        section: "explore",
        sort: vr,
        withFeatures: "strict" === rr ? [rr] : [rr, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${jr}?${Sr.toString()}`
    }

    function Pr(rr) {
      return qr(rr) === Or
    }

    function Hr(rr) {
      return null !== rr.searchQuery || "with" === rr.banned || qr(rr) !== Or
    }

    function qr(rr) {
      return Ur.flatMap((Sr => {
        const Qr = hr(rr, Sr);
        return "with" === Qr ? [Sr] : "without" === Qr ? [`-${Sr}`] : []
      })).join(",")
    }
    const Rr = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      gr = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Cr(rr) {
      return Math.round(100 * Math.max(0, 1 - 1 / rr))
    }

    function Mr(rr, Sr, Qr, Wr) {
      const ar = [];
      rr.isBanned && ar.push({
        tone: "warning",
        text: Wr("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: jr
      } = rr;
      if (null === rr.brokenError || jr && !jr.error || ar.push({
          tone: "warning",
          text: Wr("shaderPackListing:ownerBroken"),
          detail: rr.brokenError
        }), null !== jr && void 0 !== jr && jr.error) ar.push({
        tone: "warning",
        text: Wr(Sr ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Zr.l)(jr.error) ? null : jr.error
      });
      else if (jr) {
        const rr = null === jr.renderNotBefore ? 0 : jr.renderNotBefore - Qr,
          Zr = String(Math.ceil(rr / 6e4)),
          Ir = Wr(Sr ? rr > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : rr > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Zr
          });
        ar.push({
          tone: "info",
          text: Ir,
          detail: null
        })
      }
      return rr.listed || ar.push({
        tone: "info",
        text: Wr("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ar
    }

    function Gr(rr) {
      return Math.max(1, Math.round(rr / 1024))
    }

    function kr(rr, Sr, Qr) {
      return rr instanceof Wr.b && rr.errorMessageForUser ? rr.errorMessageForUser : Sr(Qr)
    }
  },
  7550: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(72),
      Wr = Qr(43);

    function ar(rr, Sr) {
      var Qr;
      const [ar, jr] = (0, Zr.useState)(null !== (Qr = Wr.j.getItem(rr)) && void 0 !== Qr ? Qr : Sr);
      return [ar, Sr => {
        Wr.j.setItem(rr, Sr), jr(Sr)
      }]
    }
  },
  7617: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      e: () => ar
    });
    var Zr = Qr(43);
    const Wr = "shaderPack";
    async function ar() {
      var rr;
      let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (rr = await Zr.h.getItem(Wr, Sr)) && void 0 !== rr ? rr : null
    }
  },
  7533: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => jr,
      D: () => Zr,
      E: () => mr,
      I: () => pr,
      J: () => er,
      K: () => xr,
      L: () => Er,
      c: () => Ur,
      g: () => hr,
      i: () => tr,
      j: () => Nr,
      l: () => nr,
      o: () => yr,
      q: () => fr,
      r: () => Wr,
      u: () => Kr,
      w: () => ar,
      z: () => Ir
    });
    const Zr = ["forest", "desert", "water", "night", "cave"];
    const Wr = {
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
      ar = ["popular", "updated", "newest"],
      jr = 3,
      Ir = 32,
      fr = 300;

    function Er(rr, Sr) {
      return rr.slice(0, Sr).replace(/[\uD800-\uDBFF]$/, "")
    }
    const pr = 64,
      xr = 512,
      mr = 18e5;

    function Nr(rr) {
      const Sr = rr,
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.files;
      return "number" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.apiVersion) && "string" === typeof Sr.name && (null === Sr.author || "string" === typeof Sr.author) && (void 0 === Sr.keepCircleShadows || "boolean" === typeof Sr.keepCircleShadows) && "object" === typeof Qr && null !== Qr && Object.values(Qr).every((rr => "string" === typeof rr))
    }
    const Ur = "Bloxdhub",
      tr = "https://bloxdhub.com/shaders";

    function hr(rr) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(rr)}`
    }
    const zr = "Screenshot generation failed.",
      Yr = "Its screenshots couldn't be generated:";

    function nr(rr) {
      var Sr;
      return rr === zr || null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.startsWith(Yr)) && void 0 !== Sr && Sr
    }

    function er(rr, Sr) {
      return `shaderPacks/${rr}/${Sr}.json`
    }

    function Kr(rr, Sr, Qr, Zr) {
      return null === Sr.renderId ? yr(rr, Sr.baselineVersion, Qr, Zr) : `${rr}/${function(rr,Sr,Qr,Zr){return`shaderPacks/${rr}/${Sr}/${Qr}-${Zr}.webp`}(Sr.packId,Sr.renderId,Qr,Zr)}`
    }

    function yr(rr, Sr, Qr, Zr) {
      return `${rr}/${function(rr,Sr,Qr){return`shaderPacks/baseline/${rr}/${Sr}-${Qr}.webp`}(Sr,Qr,Zr)}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);