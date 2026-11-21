export const id = 122;
export const ids = [122];
export const modules = {
  6377: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(1207),
      DQ = wQ(1107);

    function kQ(QQ) {
      let {
        item: FQ,
        className: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, oQ.y)();
      return null === FQ.renderId || FQ.previewsOutdated ? (0, DQ.jsx)("div", {
        className: qQ()("ShaderPackPreviewsNotice", wQ),
        children: (0, DQ.jsx)("span", {
          children: LQ(null === FQ.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6388: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => mQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(6374),
      DQ = wQ(1207),
      kQ = wQ(6371),
      vQ = wQ(1107);

    function mQ(QQ) {
      let {
        selected: FQ,
        onSelect: wQ,
        imageUrl: LQ
      } = QQ;
      const {
        t: mQ
      } = (0, DQ.y)();
      return (0, vQ.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: oQ.E.map((QQ => {
          const oQ = LQ(QQ);
          return (0, vQ.jsxs)("button", {
            type: "button",
            "aria-pressed": QQ === FQ,
            className: qQ()("ShaderPackViewOption", {
              Selected: QQ === FQ
            }),
            onClick: () => {
              wQ(QQ)
            },
            children: [null !== oQ && (0, vQ.jsx)("img", {
              src: oQ,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, vQ.jsx)("span", {
              className: "SmallTextBold",
              children: mQ(kQ.gb[QQ])
            })]
          }, QQ)
        }))
      })
    }
  },
  6382: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => bQ,
      e: () => YQ,
      g: () => HQ,
      j: () => xQ
    });
    var LQ = wQ(53),
      qQ = wQ(6374),
      oQ = wQ(1489),
      DQ = wQ(6371),
      kQ = wQ(6386),
      vQ = wQ(1140);
    const mQ = "shaderPackListingView",
      uQ = "shaderPackListingFilterOpen";

    function HQ() {
      var QQ;
      const [FQ, wQ] = (0, kQ.b)(mQ, qQ.E[0]);
      return [null !== (QQ = qQ.E.find((QQ => QQ === FQ))) && void 0 !== QQ ? QQ : qQ.E[0], wQ]
    }

    function bQ() {
      (0, LQ.useEffect)((() => () => {
        window.location.pathname.startsWith(DQ.W) || (0, DQ.l)()
      }), [])
    }

    function YQ() {
      return (0, kQ.b)(uQ, !1)
    }

    function xQ() {
      const {
        userContext: QQ,
        isUserContextUpdating: FQ
      } = (0, vQ.e)(), [wQ, qQ] = (0, LQ.useState)(null), DQ = (0, LQ.useRef)(new Set);

      function kQ(QQ, FQ) {
        qQ((wQ => {
          const LQ = new Set(wQ);
          return FQ ? LQ.add(QQ) : LQ.delete(QQ), LQ
        }))
      }
      return (0, LQ.useEffect)((() => {
        if (FQ) return;
        let wQ = !1;
        return oQ.b.getFavouriteShaderPacks(QQ).then((QQ => {
          wQ || qQ(new Set(QQ))
        })).catch((QQ => {
          console.error("Failed to get favourite shader packs", QQ), wQ || qQ(new Set)
        })), () => {
          wQ = !0
        }
      }), [QQ, FQ]), {
        isFavourite: QQ => null === wQ ? null : wQ.has(QQ),
        toggle: function(FQ) {
          if (null === wQ || DQ.current.has(FQ)) return;
          DQ.current.add(FQ);
          const LQ = !wQ.has(FQ);
          kQ(FQ, LQ), (LQ ? oQ.b.favouriteShaderPack(QQ, FQ) : oQ.b.unfavouriteShaderPack(QQ, FQ)).catch((QQ => {
            console.error("Failed to change a favourite shader pack", QQ), kQ(FQ, !LQ)
          })).finally((() => {
            DQ.current.delete(FQ)
          }))
        }
      }
    }
  },
  6371: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => xQ,
      C: () => eQ,
      G: () => OQ,
      H: () => uQ,
      K: () => rQ,
      N: () => AQ,
      R: () => jQ,
      U: () => zQ,
      W: () => DQ,
      Y: () => lQ,
      Z: () => vQ,
      bb: () => kQ,
      d: () => MQ,
      fb: () => TQ,
      g: () => WQ,
      gb: () => KQ,
      j: () => tQ,
      jb: () => GQ,
      l: () => bQ,
      mb: () => sQ,
      p: () => HQ,
      q: () => IQ,
      u: () => YQ,
      x: () => UQ,
      z: () => aQ
    });
    var LQ = wQ(6374),
      qQ = wQ(160),
      oQ = wQ(4409);
    const DQ = "/shader-packs",
      kQ = `${DQ}/publish`;

    function vQ(QQ) {
      return `${DQ}/${encodeURIComponent(QQ)}`
    }
    let mQ = null;

    function uQ(QQ) {
      mQ = QQ
    }

    function HQ() {
      return mQ
    }

    function bQ() {
      mQ = null
    }

    function YQ(QQ) {
      return QQ.playerHasRank("developer") || QQ.playerHasRank("admin")
    }
    const xQ = ["terrain", "water", "models", "sunShadows", "strict"],
      AQ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tQ(QQ, FQ) {
      return QQ.withFeatures.includes(FQ) ? "with" : QQ.withoutFeatures.includes(FQ) ? "without" : null
    }

    function eQ(QQ) {
      return null === QQ ? "with" : "with" === QQ ? "without" : null
    }

    function MQ(QQ) {
      return "with" === QQ ? "only" : null === QQ ? "include" : void 0
    }

    function GQ(QQ, FQ) {
      const wQ = tQ(QQ, FQ),
        LQ = QQ => QQ.filter((QQ => QQ !== FQ));
      return {
        withFeatures: null === wQ ? [...QQ.withFeatures, FQ] : LQ(QQ.withFeatures),
        withoutFeatures: "with" === wQ ? [...QQ.withoutFeatures, FQ] : LQ(QQ.withoutFeatures)
      }
    }
    const pQ = "section",
      cQ = "sort",
      CQ = "filters",
      SQ = "q",
      iQ = "banned",
      WQ = "popular",
      RQ = "strict";

    function OQ(QQ) {
      var FQ, wQ, qQ;
      const DQ = QQ.get(pQ),
        kQ = (null !== (FQ = QQ.get(CQ)) && void 0 !== FQ ? FQ : RQ).split(","),
        vQ = QQ.get(iQ);
      return {
        section: "favourites" === DQ || "mine" === DQ ? DQ : "explore",
        sort: null !== (wQ = LQ.x.find((FQ => FQ === QQ.get(cQ)))) && void 0 !== wQ ? wQ : WQ,
        withFeatures: xQ.filter((QQ => kQ.includes(QQ) && !kQ.includes(`-${QQ}`))),
        withoutFeatures: xQ.filter((QQ => kQ.includes(`-${QQ}`))),
        searchQuery: (null === (qQ = QQ.get(SQ)) || void 0 === qQ ? void 0 : qQ.slice(0, LQ.I)) || null,
        pageNumber: (0, oQ.d)(QQ.get(oQ.b)),
        banned: "only" === vQ ? "with" : "include" === vQ ? null : "without"
      }
    }

    function sQ(QQ, FQ) {
      var wQ;
      const LQ = NQ(FQ);
      (0, oQ.g)(QQ, pQ, "explore" === FQ.section ? null : FQ.section), (0, oQ.g)(QQ, cQ, FQ.sort === WQ ? null : FQ.sort), (0, oQ.g)(QQ, CQ, LQ === RQ ? null : LQ), (0, oQ.g)(QQ, SQ, FQ.searchQuery), (0, oQ.g)(QQ, iQ, null !== (wQ = MQ(FQ.banned)) && void 0 !== wQ ? wQ : null), (0, oQ.i)(QQ, FQ.pageNumber)
    }

    function rQ(QQ) {
      const FQ = new URLSearchParams;
      return sQ(FQ, {
        section: "explore",
        sort: WQ,
        withFeatures: "strict" === QQ ? [QQ] : [QQ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${DQ}?${FQ.toString()}`
    }

    function IQ(QQ) {
      return NQ(QQ) === RQ
    }

    function UQ(QQ) {
      return null !== QQ.searchQuery || "with" === QQ.banned || NQ(QQ) !== RQ
    }

    function NQ(QQ) {
      return xQ.flatMap((FQ => {
        const wQ = tQ(QQ, FQ);
        return "with" === wQ ? [FQ] : "without" === wQ ? [`-${FQ}`] : []
      })).join(",")
    }
    const TQ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      KQ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function zQ(QQ) {
      return Math.round(100 * Math.max(0, 1 - 1 / QQ))
    }

    function lQ(QQ, FQ, wQ, qQ) {
      const oQ = [];
      QQ.isBanned && oQ.push({
        tone: "warning",
        text: qQ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: DQ
      } = QQ;
      if (null === QQ.brokenError || DQ && !DQ.error || oQ.push({
          tone: "warning",
          text: qQ("shaderPackListing:ownerBroken"),
          detail: QQ.brokenError
        }), null !== DQ && void 0 !== DQ && DQ.error) oQ.push({
        tone: "warning",
        text: qQ(FQ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, LQ.l)(DQ.error) ? null : DQ.error
      });
      else if (DQ) {
        const QQ = null === DQ.renderNotBefore ? 0 : DQ.renderNotBefore - wQ,
          LQ = String(Math.ceil(QQ / 6e4)),
          kQ = qQ(FQ ? QQ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : QQ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: LQ
          });
        oQ.push({
          tone: "info",
          text: kQ,
          detail: null
        })
      }
      return QQ.listed || oQ.push({
        tone: "info",
        text: qQ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), oQ
    }

    function jQ(QQ) {
      return Math.max(1, Math.round(QQ / 1024))
    }

    function aQ(QQ, FQ, wQ) {
      return QQ instanceof qQ.d && QQ.errorMessageForUser ? QQ.errorMessageForUser : FQ(wQ)
    }
  },
  6386: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(53),
      qQ = wQ(27);

    function oQ(QQ, FQ) {
      var wQ;
      const [oQ, DQ] = (0, LQ.useState)(null !== (wQ = qQ.i.getItem(QQ)) && void 0 !== wQ ? wQ : FQ);
      return [oQ, FQ => {
        qQ.i.setItem(QQ, FQ), DQ(FQ)
      }]
    }
  },
  6374: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      B: () => DQ,
      E: () => LQ,
      H: () => bQ,
      I: () => uQ,
      J: () => GQ,
      L: () => HQ,
      O: () => mQ,
      c: () => YQ,
      e: () => AQ,
      h: () => xQ,
      l: () => MQ,
      n: () => cQ,
      p: () => vQ,
      t: () => qQ,
      u: () => pQ,
      x: () => oQ,
      z: () => kQ
    });
    const LQ = ["forest", "desert", "water", "night", "cave"];
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
      oQ = ["popular", "updated", "newest"],
      DQ = 3,
      kQ = 32,
      vQ = 300;

    function mQ(QQ, FQ) {
      return QQ.slice(0, FQ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const uQ = 64,
      HQ = 512,
      bQ = 18e5;
    const YQ = "Bloxdhub",
      xQ = "https://bloxdhub.com/shaders";

    function AQ(QQ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(QQ)}`
    }
    const tQ = "Screenshot generation failed.",
      eQ = "Its screenshots couldn't be generated:";

    function MQ(QQ) {
      var FQ;
      return QQ === tQ || null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.startsWith(eQ)) && void 0 !== FQ && FQ
    }

    function GQ(QQ, FQ) {
      return `shaderPacks/${QQ}/${FQ}.json`
    }

    function pQ(QQ, FQ, wQ, LQ) {
      return null === FQ.renderId ? cQ(QQ, FQ.baselineVersion, wQ, LQ) : `${QQ}/${function(QQ,FQ,wQ,LQ){return`shaderPacks/${QQ}/${FQ}/${wQ}-${LQ}.webp`}(FQ.packId,FQ.renderId,wQ,LQ)}`
    }

    function cQ(QQ, FQ, wQ, LQ) {
      return `${QQ}/${function(QQ,FQ,wQ){return`shaderPacks/baseline/${QQ}/${FQ}-${wQ}.webp`}(FQ,wQ,LQ)}`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);