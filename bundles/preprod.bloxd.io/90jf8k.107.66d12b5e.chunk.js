export const id = 107;
export const ids = [107];
export const modules = {
  5529: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(1046),
      hF = SF(971);

    function bW(FF) {
      let {
        item: WF,
        className: SF
      } = FF;
      const {
        t: CF
      } = (0, uF.B)();
      return null === WF.renderId || WF.previewsOutdated ? (0, hF.jsx)("div", {
        className: AF()("ShaderPackPreviewsNotice", SF),
        children: (0, hF.jsx)("span", {
          children: CF(null === WF.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  5543: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(5520),
      hF = SF(1046),
      bW = SF(5512),
      dF = SF(971);

    function PF(FF) {
      let {
        selected: WF,
        onSelect: SF,
        imageUrl: CF
      } = FF;
      const {
        t: PF
      } = (0, hF.B)();
      return (0, dF.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: uF.H.map((FF => {
          const uF = CF(FF);
          return (0, dF.jsxs)("button", {
            type: "button",
            "aria-pressed": FF === WF,
            className: AF()("ShaderPackViewOption", {
              Selected: FF === WF
            }),
            onClick: () => {
              SF(FF)
            },
            children: [null !== uF && (0, dF.jsx)("img", {
              src: uF,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, dF.jsx)("span", {
              className: "SmallTextBold",
              children: PF(bW.ab[FF])
            })]
          }, FF)
        }))
      })
    }
  },
  5533: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => eF,
      d: () => EF,
      e: () => iW,
      h: () => QF
    });
    var CF = SF(46),
      AF = SF(5520),
      uF = SF(1336),
      hF = SF(5512),
      bW = SF(5538),
      dF = SF(996);
    const PF = "shaderPackListingView",
      RF = "shaderPackListingFilterOpen";

    function iW() {
      var FF;
      const [WF, SF] = (0, bW.c)(PF, AF.H[0]);
      return [null !== (FF = AF.H.find((FF => FF === WF))) && void 0 !== FF ? FF : AF.H[0], SF]
    }

    function eF() {
      (0, CF.useEffect)((() => () => {
        window.location.pathname.startsWith(hF.Q) || (0, hF.k)()
      }), [])
    }

    function EF() {
      return (0, bW.c)(RF, !1)
    }

    function QF() {
      const {
        userContext: FF,
        isUserContextUpdating: WF
      } = (0, dF.b)(), [SF, AF] = (0, CF.useState)(null), hF = (0, CF.useRef)(new Set);

      function bW(FF, WF) {
        AF((SF => {
          const CF = new Set(SF);
          return WF ? CF.add(FF) : CF.delete(FF), CF
        }))
      }
      return (0, CF.useEffect)((() => {
        if (WF) return;
        let SF = !1;
        return uF.b.getFavouriteShaderPacks(FF).then((FF => {
          SF || AF(new Set(FF))
        })).catch((FF => {
          console.error("Failed to get favourite shader packs", FF), SF || AF(new Set)
        })), () => {
          SF = !0
        }
      }), [FF, WF]), {
        isFavourite: FF => null === SF ? null : SF.has(FF),
        toggle: function(WF) {
          if (null === SF || hF.current.has(WF)) return;
          hF.current.add(WF);
          const CF = !SF.has(WF);
          bW(WF, CF), (CF ? uF.b.favouriteShaderPack(FF, WF) : uF.b.unfavouriteShaderPack(FF, WF)).catch((FF => {
            console.error("Failed to change a favourite shader pack", FF), bW(WF, !CF)
          })).finally((() => {
            hF.current.delete(WF)
          }))
        }
      }
    }
  },
  5512: (FF, WF, SF) => {
    SF.d(WF, {
      $: () => cW,
      A: () => tW,
      C: () => OF,
      F: () => RF,
      I: () => ZF,
      J: () => rW,
      K: () => fF,
      O: () => zW,
      Q: () => hF,
      U: () => IF,
      W: () => dF,
      _: () => bW,
      ab: () => GF,
      db: () => aW,
      e: () => TF,
      eb: () => xW,
      h: () => LF,
      j: () => gW,
      k: () => eF,
      l: () => iW,
      m: () => oF,
      o: () => EF,
      q: () => YF,
      u: () => yW,
      y: () => QF
    });
    var CF = SF(5520),
      AF = SF(138),
      uF = SF(3629);
    const hF = "/shader-packs",
      bW = `${hF}/publish`;

    function dF(FF) {
      return `${hF}/${encodeURIComponent(FF)}`
    }
    let PF = null;

    function RF(FF) {
      PF = FF
    }

    function iW() {
      return PF
    }

    function eF() {
      PF = null
    }

    function EF(FF) {
      return FF.playerHasRank("developer") || FF.playerHasRank("admin")
    }
    const QF = ["terrain", "water", "models", "sunShadows", "strict"],
      rW = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function gW(FF, WF) {
      return FF.withFeatures.includes(WF) ? "with" : FF.withoutFeatures.includes(WF) ? "without" : null
    }

    function tW(FF) {
      return null === FF ? "with" : "with" === FF ? "without" : null
    }

    function TF(FF) {
      return "with" === FF ? "only" : null === FF ? "include" : void 0
    }

    function aW(FF, WF) {
      const SF = gW(FF, WF),
        CF = FF => FF.filter((FF => FF !== WF));
      return {
        withFeatures: null === SF ? [...FF.withFeatures, WF] : CF(FF.withFeatures),
        withoutFeatures: "with" === SF ? [...FF.withoutFeatures, WF] : CF(FF.withoutFeatures)
      }
    }
    const kW = "section",
      qW = "sort",
      VF = "filters",
      NF = "q",
      DF = "banned",
      LF = "popular",
      mW = "strict";

    function OF(FF) {
      var WF, SF, AF;
      const hF = FF.get(kW),
        bW = (null !== (WF = FF.get(VF)) && void 0 !== WF ? WF : mW).split(","),
        dF = FF.get(DF);
      return {
        section: "favourites" === hF || "mine" === hF ? hF : "explore",
        sort: null !== (SF = CF.A.find((WF => WF === FF.get(qW)))) && void 0 !== SF ? SF : LF,
        withFeatures: QF.filter((FF => bW.includes(FF) && !bW.includes(`-${FF}`))),
        withoutFeatures: QF.filter((FF => bW.includes(`-${FF}`))),
        searchQuery: (null === (AF = FF.get(NF)) || void 0 === AF ? void 0 : AF.slice(0, CF.M)) || null,
        pageNumber: (0, uF.g)(FF.get(uF.e)),
        banned: "only" === dF ? "with" : "include" === dF ? null : "without"
      }
    }

    function xW(FF, WF) {
      var SF;
      const CF = MF(WF);
      (0, uF.i)(FF, kW, "explore" === WF.section ? null : WF.section), (0, uF.i)(FF, qW, WF.sort === LF ? null : WF.sort), (0, uF.i)(FF, VF, CF === mW ? null : CF), (0, uF.i)(FF, NF, WF.searchQuery), (0, uF.i)(FF, DF, null !== (SF = TF(WF.banned)) && void 0 !== SF ? SF : null), (0, uF.l)(FF, WF.pageNumber)
    }

    function ZF(FF) {
      const WF = new URLSearchParams;
      return xW(WF, {
        section: "explore",
        sort: LF,
        withFeatures: "strict" === FF ? [FF] : [FF, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${hF}?${WF.toString()}`
    }

    function oF(FF) {
      return MF(FF) === mW
    }

    function YF(FF) {
      return null !== FF.searchQuery || "with" === FF.banned || MF(FF) !== mW
    }

    function MF(FF) {
      return QF.flatMap((WF => {
        const SF = gW(FF, WF);
        return "with" === SF ? [WF] : "without" === SF ? [`-${WF}`] : []
      })).join(",")
    }
    const cW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      GF = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function zW(FF) {
      return Math.round(100 * Math.max(0, 1 - 1 / FF))
    }

    function IF(FF, WF, SF, AF) {
      const uF = [];
      FF.isBanned && uF.push({
        tone: "warning",
        text: AF("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: hF
      } = FF;
      if (null === FF.brokenError || hF && !hF.error || uF.push({
          tone: "warning",
          text: AF("shaderPackListing:ownerBroken"),
          detail: FF.brokenError
        }), null !== hF && void 0 !== hF && hF.error) uF.push({
        tone: "warning",
        text: AF(WF ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, CF.l)(hF.error) ? null : hF.error
      });
      else if (hF) {
        const FF = null === hF.renderNotBefore ? 0 : hF.renderNotBefore - SF,
          CF = String(Math.ceil(FF / 6e4)),
          bW = AF(WF ? FF > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : FF > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: CF
          });
        uF.push({
          tone: "info",
          text: bW,
          detail: null
        })
      }
      return FF.listed || uF.push({
        tone: "info",
        text: AF("shaderPackListing:ownerUnlisted"),
        detail: null
      }), uF
    }

    function fF(FF) {
      return Math.max(1, Math.round(FF / 1024))
    }

    function yW(FF, WF, SF) {
      return FF instanceof AF.c && FF.errorMessageForUser ? FF.errorMessageForUser : WF(SF)
    }
  },
  5538: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(46),
      AF = SF(33);

    function uF(FF, WF) {
      var SF;
      const [uF, hF] = (0, CF.useState)(null !== (SF = AF.h.getItem(FF)) && void 0 !== SF ? SF : WF);
      return [uF, WF => {
        AF.h.setItem(FF, WF), hF(WF)
      }]
    }
  },
  5520: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => uF,
      E: () => bW,
      F: () => hF,
      H: () => CF,
      L: () => eF,
      M: () => RF,
      O: () => aW,
      P: () => iW,
      Q: () => PF,
      d: () => EF,
      g: () => rW,
      h: () => QF,
      l: () => TF,
      o: () => qW,
      q: () => dF,
      t: () => AF,
      w: () => kW
    });
    const CF = ["forest", "desert", "water", "night", "cave"];
    const AF = {
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
      uF = ["popular", "updated", "newest"],
      hF = 3,
      bW = 32,
      dF = 300;

    function PF(FF, WF) {
      return FF.slice(0, WF).replace(/[\uD800-\uDBFF]$/, "")
    }
    const RF = 64,
      iW = 512,
      eF = 18e5;
    const EF = "Bloxdhub",
      QF = "https://bloxdhub.com/shaders";

    function rW(FF) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(FF)}`
    }
    const gW = "Screenshot generation failed.",
      tW = "Its screenshots couldn't be generated:";

    function TF(FF) {
      var WF;
      return FF === gW || null !== (WF = null === FF || void 0 === FF ? void 0 : FF.startsWith(tW)) && void 0 !== WF && WF
    }

    function aW(FF, WF) {
      return `shaderPacks/${FF}/${WF}.json`
    }

    function kW(FF, WF, SF, CF) {
      return null === WF.renderId ? qW(FF, WF.baselineVersion, SF, CF) : `${FF}/${function(FF,WF,SF,CF){return`shaderPacks/${FF}/${WF}/${SF}-${CF}.webp`}(WF.packId,WF.renderId,SF,CF)}`
    }

    function qW(FF, WF, SF, CF) {
      return `${FF}/${function(FF,WF,SF){return`shaderPacks/baseline/${FF}/${WF}-${SF}.webp`}(WF,SF,CF)}`
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);