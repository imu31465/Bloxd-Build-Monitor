export const id = 113;
export const ids = [113, 406];
export const modules = {
  5320: (QQ, WQ, XQ) => {
    var wQ = XQ(5328);

    function qQ() {}

    function TQ() {}
    TQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, WQ, XQ, qQ, TQ, zQ) {
        if (zQ !== wQ) {
          var sQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sQ.name = "Invariant Violation", sQ
        }
      }

      function WQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var XQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: WQ,
        element: QQ,
        elementType: QQ,
        instanceOf: WQ,
        node: QQ,
        objectOf: WQ,
        oneOf: WQ,
        oneOfType: WQ,
        shape: WQ,
        exact: WQ,
        checkPropTypes: TQ,
        resetWarningCache: qQ
      };
      return XQ.PropTypes = XQ, XQ
    }
  },
  5318: (QQ, WQ, XQ) => {
    QQ.exports = XQ(5320)()
  },
  5328: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6966: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => gQ
    });
    var wQ = XQ(1567),
      qQ = XQ(1507),
      TQ = XQ(1226),
      zQ = XQ(6970),
      sQ = XQ(6957),
      FQ = XQ(6946),
      PQ = XQ(1145);

    function gQ() {
      const {
        t: QQ
      } = (0, TQ.C)(), WQ = (0, wQ.useNavigatePreserveSearch)();
      return (0, sQ.c)(), (0, PQ.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, PQ.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, PQ.jsx)(qQ.e, {
            onClick: () => {
              WQ(FQ.R)
            },
            children: QQ("shaderPackListing:backToPacks")
          })
        }), (0, PQ.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: QQ("shaderPackListing:publishTitle")
        }), (0, PQ.jsx)(zQ.ShaderPackPublishForm, {
          existing: null,
          onPublished: QQ => {
            WQ((0, FQ.V)(QQ.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6957: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      g: () => IQ,
      j: () => JQ,
      m: () => jQ
    });
    var wQ = XQ(61),
      qQ = XQ(6952),
      TQ = XQ(1548),
      zQ = XQ(6946),
      sQ = XQ(6960),
      FQ = XQ(1162);
    const PQ = "shaderPackListingView",
      gQ = "shaderPackListingFilterOpen";

    function JQ() {
      var QQ;
      const [WQ, XQ] = (0, sQ.d)(PQ, qQ.A[0]);
      return [null !== (QQ = qQ.A.find((QQ => QQ === WQ))) && void 0 !== QQ ? QQ : qQ.A[0], XQ]
    }

    function rQ() {
      (0, wQ.useEffect)((() => () => {
        window.location.pathname.startsWith(zQ.R) || (0, zQ.l)()
      }), [])
    }

    function IQ() {
      return (0, sQ.d)(gQ, !1)
    }

    function jQ() {
      const {
        userContext: QQ,
        isUserContextUpdating: WQ
      } = (0, FQ.c)(), [XQ, qQ] = (0, wQ.useState)(null), zQ = (0, wQ.useRef)(new Set);

      function sQ(QQ, WQ) {
        qQ((XQ => {
          const wQ = new Set(XQ);
          return WQ ? wQ.add(QQ) : wQ.delete(QQ), wQ
        }))
      }
      return (0, wQ.useEffect)((() => {
        if (WQ) return;
        let XQ = !1;
        return TQ.e.getFavouriteShaderPacks(QQ).then((QQ => {
          XQ || qQ(new Set(QQ))
        })).catch((QQ => {
          console.error("Failed to get favourite shader packs", QQ), XQ || qQ(new Set)
        })), () => {
          XQ = !0
        }
      }), [QQ, WQ]), {
        isFavourite: QQ => null === XQ ? null : XQ.has(QQ),
        toggle: function(WQ) {
          if (null === XQ || zQ.current.has(WQ)) return;
          zQ.current.add(WQ);
          const wQ = !XQ.has(WQ);
          sQ(WQ, wQ), (wQ ? TQ.e.favouriteShaderPack(QQ, WQ) : TQ.e.unfavouriteShaderPack(QQ, WQ)).catch((QQ => {
            console.error("Failed to change a favourite shader pack", QQ), sQ(WQ, !wQ)
          })).finally((() => {
            zQ.current.delete(WQ)
          }))
        }
      }
    }
  },
  6946: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      $: () => EQ,
      A: () => jQ,
      B: () => VQ,
      D: () => lQ,
      E: () => gQ,
      H: () => iQ,
      I: () => BQ,
      L: () => kQ,
      O: () => uQ,
      R: () => zQ,
      S: () => LQ,
      V: () => FQ,
      Z: () => sQ,
      cb: () => CQ,
      d: () => DQ,
      eb: () => pQ,
      f: () => HQ,
      hb: () => hQ,
      j: () => yQ,
      l: () => rQ,
      m: () => JQ,
      q: () => cQ,
      s: () => IQ,
      v: () => AQ,
      y: () => fQ
    });
    var wQ = XQ(6952),
      qQ = XQ(193),
      TQ = XQ(4879);
    const zQ = "/shader-packs",
      sQ = `${zQ}/publish`;

    function FQ(QQ) {
      return `${zQ}/${encodeURIComponent(QQ)}`
    }
    let PQ = null;

    function gQ(QQ) {
      PQ = QQ
    }

    function JQ() {
      return PQ
    }

    function rQ() {
      PQ = null
    }

    function IQ(QQ) {
      return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
    }
    const jQ = ["terrain", "water", "models", "sunShadows", "strict"],
      BQ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function yQ(QQ, WQ) {
      return QQ.withFeatures.includes(WQ) ? "with" : QQ.withoutFeatures.includes(WQ) ? "without" : null
    }

    function VQ(QQ) {
      return null === QQ ? "with" : "with" === QQ ? "without" : null
    }

    function DQ(QQ) {
      return "with" === QQ ? "only" : null === QQ ? "include" : void 0
    }

    function pQ(QQ, WQ) {
      const XQ = yQ(QQ, WQ),
        wQ = QQ => QQ.filter((QQ => QQ !== WQ));
      return {
        withFeatures: null === XQ ? [...QQ.withFeatures, WQ] : wQ(QQ.withFeatures),
        withoutFeatures: "with" === XQ ? [...QQ.withoutFeatures, WQ] : wQ(QQ.withoutFeatures)
      }
    }
    const GQ = "section",
      UQ = "sort",
      bQ = "filters",
      vQ = "q",
      dQ = "banned",
      HQ = "popular",
      aQ = "strict";

    function lQ(QQ) {
      var WQ, XQ, qQ;
      const zQ = QQ.get(GQ),
        sQ = (null !== (WQ = QQ.get(bQ)) && void 0 !== WQ ? WQ : aQ).split(","),
        FQ = QQ.get(dQ);
      return {
        section: "favourites" === zQ || "mine" === zQ ? zQ : "explore",
        sort: null !== (XQ = wQ.u.find((WQ => WQ === QQ.get(UQ)))) && void 0 !== XQ ? XQ : HQ,
        withFeatures: jQ.filter((QQ => sQ.includes(QQ) && !sQ.includes(`-${QQ}`))),
        withoutFeatures: jQ.filter((QQ => sQ.includes(`-${QQ}`))),
        searchQuery: (null === (qQ = QQ.get(vQ)) || void 0 === qQ ? void 0 : qQ.slice(0, wQ.G)) || null,
        pageNumber: (0, TQ.f)(QQ.get(TQ.e)),
        banned: "only" === FQ ? "with" : "include" === FQ ? null : "without"
      }
    }

    function hQ(QQ, WQ) {
      var XQ;
      const wQ = RQ(WQ);
      (0, TQ.i)(QQ, GQ, "explore" === WQ.section ? null : WQ.section), (0, TQ.i)(QQ, UQ, WQ.sort === HQ ? null : WQ.sort), (0, TQ.i)(QQ, bQ, wQ === aQ ? null : wQ), (0, TQ.i)(QQ, vQ, WQ.searchQuery), (0, TQ.i)(QQ, dQ, null !== (XQ = DQ(WQ.banned)) && void 0 !== XQ ? XQ : null), (0, TQ.m)(QQ, WQ.pageNumber)
    }

    function iQ(QQ) {
      const WQ = new URLSearchParams;
      return hQ(WQ, {
        section: "explore",
        sort: HQ,
        withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${zQ}?${WQ.toString()}`
    }

    function cQ(QQ) {
      return RQ(QQ) === aQ
    }

    function AQ(QQ) {
      return null !== QQ.searchQuery || "with" === QQ.banned || RQ(QQ) !== aQ
    }

    function RQ(QQ) {
      return jQ.flatMap((WQ => {
        const XQ = yQ(QQ, WQ);
        return "with" === XQ ? [WQ] : "without" === XQ ? [`-${WQ}`] : []
      })).join(",")
    }
    const EQ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      CQ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function uQ(QQ) {
      return Math.round(100 * Math.max(0, 1 - 1 / QQ))
    }

    function LQ(QQ, WQ, XQ, qQ) {
      const TQ = [];
      QQ.isBanned && TQ.push({
        tone: "warning",
        text: qQ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: zQ
      } = QQ;
      if (null === QQ.brokenError || zQ && !zQ.error || TQ.push({
          tone: "warning",
          text: qQ("shaderPackListing:ownerBroken"),
          detail: QQ.brokenError
        }), null !== zQ && void 0 !== zQ && zQ.error) TQ.push({
        tone: "warning",
        text: qQ(WQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wQ.l)(zQ.error) ? null : zQ.error
      });
      else if (zQ) {
        const QQ = null === zQ.renderNotBefore ? 0 : zQ.renderNotBefore - XQ,
          wQ = String(Math.ceil(QQ / 6e4)),
          sQ = qQ(WQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wQ
          });
        TQ.push({
          tone: "info",
          text: sQ,
          detail: null
        })
      }
      return QQ.listed || TQ.push({
        tone: "info",
        text: qQ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), TQ
    }

    function kQ(QQ) {
      return Math.max(1, Math.round(QQ / 1024))
    }

    function fQ(QQ, WQ, XQ) {
      return QQ instanceof qQ.b && QQ.errorMessageForUser ? QQ.errorMessageForUser : WQ(XQ)
    }
  },
  6960: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(61),
      qQ = XQ(43);

    function TQ(QQ, WQ) {
      var XQ;
      const [TQ, zQ] = (0, wQ.useState)(null !== (XQ = qQ.i.getItem(QQ)) && void 0 !== XQ ? XQ : WQ);
      return [TQ, WQ => {
        qQ.i.setItem(QQ, WQ), zQ(WQ)
      }]
    }
  },
  7026: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(43);
    const qQ = "shaderPack";
    async function TQ() {
      var QQ;
      let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
    }
  },
  6952: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      A: () => wQ,
      E: () => rQ,
      G: () => gQ,
      J: () => GQ,
      K: () => JQ,
      M: () => PQ,
      c: () => jQ,
      f: () => yQ,
      i: () => BQ,
      j: () => IQ,
      l: () => pQ,
      m: () => bQ,
      o: () => FQ,
      p: () => qQ,
      r: () => UQ,
      u: () => TQ,
      w: () => sQ,
      z: () => zQ
    });
    const wQ = ["forest", "desert", "water", "night", "cave"];
    const qQ = {
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
      TQ = ["popular", "updated", "newest"],
      zQ = 3,
      sQ = 32,
      FQ = 300;

    function PQ(QQ, WQ) {
      return QQ.slice(0, WQ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const gQ = 64,
      JQ = 512,
      rQ = 18e5;

    function IQ(QQ) {
      const WQ = QQ,
        XQ = null === WQ || void 0 === WQ ? void 0 : WQ.files;
      return "number" === typeof(null === WQ || void 0 === WQ ? void 0 : WQ.apiVersion) && "string" === typeof WQ.name && (null === WQ.author || "string" === typeof WQ.author) && (void 0 === WQ.keepCircleShadows || "boolean" === typeof WQ.keepCircleShadows) && "object" === typeof XQ && null !== XQ && Object.values(XQ).every((QQ => "string" === typeof QQ))
    }
    const jQ = "Bloxdhub",
      BQ = "https://bloxdhub.com/shaders";

    function yQ(QQ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
    }
    const VQ = "Screenshot generation failed.",
      DQ = "Its screenshots couldn't be generated:";

    function pQ(QQ) {
      var WQ;
      return QQ === VQ || null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(DQ)) && void 0 !== WQ && WQ
    }

    function GQ(QQ, WQ) {
      return `shaderPacks/${QQ}/${WQ}.json`
    }

    function UQ(QQ, WQ, XQ, wQ) {
      return null === WQ.renderId ? bQ(QQ, WQ.baselineVersion, XQ, wQ) : `${QQ}/${function(QQ,WQ,XQ,wQ){return`shaderPacks/${QQ}/${WQ}/${XQ}-${wQ}.webp`}(WQ.packId,WQ.renderId,XQ,wQ)}`
    }

    function bQ(QQ, WQ, XQ, wQ) {
      return `${QQ}/${function(QQ,WQ,XQ){return`shaderPacks/baseline/${QQ}/${WQ}-${XQ}.webp`}(WQ,XQ,wQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);