export const id = 144;
export const ids = [144];
export const modules = {
  42378: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ShaderPackCategory: () => lH
    });
    var AH = LH(45),
      rH = LH(1520),
      SH = LH(1455),
      hH = LH(1509),
      tH = LH(1123),
      zH = LH(81),
      CH = LH(15),
      EH = LH(1659),
      XH = LH(7165),
      GH = LH(293),
      YH = LH(7201),
      uH = LH(7196),
      QH = LH(7209),
      WH = LH(7111),
      MH = LH(5478),
      xH = LH(5520),
      vH = LH(7161),
      PH = LH(3835);

    function TH(HH, BH) {
      const LH = (0, YH.storedPackOutcome)(HH, BH);
      return "none" !== LH.kind || "noCompiler" === LH.reason
    }
    var UH = LH(1038),
      VH = LH.n(UH),
      OH = LH(5523),
      bH = LH(1315),
      kH = LH(7155),
      mH = LH(1225);
    const oH = {
      ready: "shaderPack:statusReady",
      readyAfterReload: "shaderPack:statusReadyAfterReload",
      noWebGpu: "shaderPack:statusNoWebGpu",
      offNoWebGpu: "shaderPack:statusOffNoWebGpu",
      failed: "shaderPack:statusFailed",
      failedRecheck: "shaderPack:statusFailedRecheck",
      wrongApiVersion: "shaderPack:statusWrongApiVersion",
      checking: "shaderPack:statusChecking",
      unchecked: "shaderPack:statusUnchecked",
      noCompiler: "shaderPack:statusNoCompiler"
    };

    function IH(HH, BH) {
      return "failedRecheck" === HH && BH.listing ? "shaderPack:statusFailedRecheckListed" : oH[HH]
    }

    function fH(HH) {
      let {
        stored: BH,
        checking: LH,
        webGpuUsable: AH,
        changePending: rH,
        compiler: SH,
        t: hH
      } = HH;
      const tH = function(HH, BH, LH, AH, rH) {
          const SH = (0, YH.storedPackOutcome)(HH, rH);
          return "none" === SH.kind ? "noCompiler" === SH.reason ? BH ? "checking" : "noCompiler" : "otherApiVersion" === SH.reason ? "wrongApiVersion" : "failed" : (0, PH.i)() ? "harnessBuild" : "blocked" === SH.kind ? (0, YH.shaderPackNeedsCheck)(HH, rH) ? BH ? "checking" : !1 === LH ? "noWebGpu" : "unchecked" : "failedRecheck" : !1 === LH ? "offNoWebGpu" : AH ? "readyAfterReload" : "ready"
        }(BH, LH, AH, rH, SH),
        zH = "failed" === tH || "failedRecheck" === tH,
        CH = zH || "wrongApiVersion" === tH || "noCompiler" === tH,
        EH = "ready" === tH || "readyAfterReload" === tH ? BH.validation.offInStrict : [];
      return (0, mH.jsxs)(mH.Fragment, {
        children: [(0, mH.jsxs)("div", {
          className: VH()("ShaderPackStatus", {
            Ready: "ready" === tH,
            Failed: CH
          }),
          children: ["ready" === tH && (0, mH.jsx)(bH.c, {
            name: "circle-check"
          }), CH && (0, mH.jsx)(bH.c, {
            name: "triangle-exclamation"
          }), "harnessBuild" === tH ? (0, PH.e)() : hH(IH(tH, BH), {
            packVersion: String(BH.manifest.apiVersion),
            version: String(OH.b)
          })]
        }), zH && (0, mH.jsx)(kH.d, {
          diagnostics: BH.validation.errors,
          more: BH.validation.moreErrors,
          t: hH
        }), EH.length > 0 && (0, mH.jsxs)(mH.Fragment, {
          children: [(0, mH.jsxs)("div", {
            className: "ShaderPackStatus OffInStrict",
            children: [(0, mH.jsx)(bH.c, {
              name: "triangle-exclamation"
            }), hH("shaderPack:offInStrict")]
          }), (0, mH.jsx)(kH.d, {
            diagnostics: EH,
            t: hH
          })]
        })]
      })
    }

    function lH(HH) {
      let {
        setApplySettingsCallback: BH
      } = HH;
      const {
        t: LH
      } = (0, tH.B)(), [rH, hH] = (0, AH.useState)(null), [CH, EH] = (0, AH.useState)(null), [PH, UH] = (0, AH.useState)(null), [VH] = (0, AH.useState)(GH.l), [OH, bH] = (0, AH.useState)(!0), [kH, oH] = (0, AH.useState)(!1), {
        loading: IH,
        error: lH,
        setError: cH,
        onFiles: eH
      } = (0, vH.f)((async HH => {
        const BH = await (0, XH.loadPageShaderPackCompiler)();
        if (!BH) return void cH(LH("shaderPack:compilerUnavailable"));
        EH(BH);
        const AH = (0, YH.toStoredShaderPack)(HH, await (0, uH.d)(BH, HH.files));
        await (0, YH.saveShaderPack)(AH, BH) ? (hH(AH), qH(rH, AH, BH)) : cH(LH("shaderPack:saveFailed"))
      }));

      function qH(HH, LH, AH) {
        (function(HH, BH, LH, AH) {
          return LH || TH(HH, AH) || TH(BH, AH)
        })(HH, LH, (0, YH.isShaderPackChangePending)(), AH) && ((0, YH.markShaderPackChangePending)(), BH((() => MH.i)))
      }
      return (0, AH.useEffect)((() => {
        let HH = !1;
        return async function() {
          const BH = (0, zH.hasUsableWebGpuAdapter)(),
            LH = await (0, QH.e)();
          if (HH) return;
          hH(LH), oH(!0), bH(!1);
          const AH = null !== LH ? (0, XH.loadPageShaderPackCompiler)() : null,
            rH = await BH;
          if (HH) return;
          UH(rH);
          const SH = await AH;
          if (!HH && (EH(SH), null !== LH && rH && null !== SH && (0, YH.shaderPackNeedsCheck)(LH, SH))) {
            const BH = await (0, uH.b)(LH, SH);
            HH || hH((HH => HH === LH ? BH : HH))
          }
        }().catch((BH => {
          console.error("Failed to load the stored shader pack", BH), HH || cH(LH("shaderPack:unexpectedError"))
        })).finally((() => {
          HH || (bH(!1), oH(!1))
        })), () => {
          HH = !0
        }
      }), []), (0, mH.jsxs)("div", {
        className: "ShaderPackCategory SettingsMenuRightInner",
        children: [(0, mH.jsx)("div", {
          className: "ShaderPackIntro",
          children: LH("shaderPack:intro")
        }), (0, mH.jsx)(KH, {
          to: WH.P,
          className: "ShaderPackBrowseLink",
          children: (0, mH.jsx)(SH.u, {
            className: "ShaderPackBrowseButton",
            children: LH("shaderPackListing:browse")
          })
        }), !1 === PH && (0, mH.jsx)("div", {
          className: "SettingsBoxWarning",
          children: LH(VH ? "shaderPack:needsWebGpuDisabledUntilRestart" : "shaderPack:needsWebGpu")
        }), null !== lH && (0, mH.jsxs)("div", {
          className: "ShaderPackCategoryError",
          children: [LH("general:error"), ": ", lH]
        }), rH && (0, mH.jsxs)("div", {
          className: "SettingBox ShaderPackSummary",
          children: [(0, mH.jsxs)("div", {
            className: "ShaderPackSummaryHeader",
            children: [(0, mH.jsxs)("div", {
              children: [(0, mH.jsx)("div", {
                className: "ShaderPackName",
                children: rH.manifest.name
              }), rH.manifest.author && (0, mH.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, xH.i)(LH, "shaderPack:byAuthor", {
                  author: rH.manifest.author
                })
              }), rH.manifest.description && (0, mH.jsx)("div", {
                className: "ShaderPackDescription",
                children: rH.manifest.description
              }), rH.listing && (0, mH.jsx)("div", {
                className: "ShaderPackAuthor",
                children: (0, mH.jsx)(KH, {
                  to: (0, WH.S)(rH.listing.packId),
                  className: "ShaderPackListingLink",
                  children: LH("shaderPackListing:openPackPage")
                })
              })]
            }), (0, mH.jsx)(SH.S, {
              disabled: OH || IH,
              onClick: async function() {
                bH(!0), cH(null), await (0, YH.removeShaderPack)(), hH(null), bH(!1), qH(rH, null, CH)
              },
              children: LH("shaderPack:removePack")
            })]
          }), (0, mH.jsx)(fH, {
            stored: rH,
            checking: kH,
            webGpuUsable: PH,
            changePending: (0, YH.isShaderPackChangePending)(),
            compiler: CH,
            t: LH
          })]
        }), (0, mH.jsx)(vH.b, {
          busy: OH || IH || kH,
          disabled: OH || IH || kH || !0 !== PH,
          onFiles: eH
        })]
      })
    }

    function KH(HH) {
      let {
        to: BH,
        className: LH,
        children: AH
      } = HH;
      const {
        gameState: SH
      } = (0, CH.m)(["gameState"]), {
        pathname: tH,
        search: zH
      } = (0, rH.s)(), XH = "landingPage" !== SH && "studio" !== SH;
      return (0, mH.jsx)(hH.LinkPreserveSearch, {
        to: BH,
        className: LH,
        target: XH ? "_blank" : void 0,
        onClick: () => {
          XH || ((0, WH.F)(`${tH}${zH}`), (0, EH.g)())
        },
        children: AH
      })
    }
  },
  7111: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => mH,
      F: () => EH,
      I: () => IH,
      L: () => QH,
      M: () => NH,
      N: () => qH,
      P: () => hH,
      R: () => gH,
      S: () => zH,
      T: () => tH,
      X: () => cH,
      _: () => eH,
      ab: () => vH,
      bb: () => oH,
      e: () => xH,
      h: () => bH,
      j: () => WH,
      k: () => GH,
      m: () => XH,
      n: () => fH,
      p: () => YH,
      q: () => lH,
      s: () => RH,
      w: () => uH,
      z: () => MH
    });
    var AH = LH(7114),
      rH = LH(152),
      SH = LH(4969);
    const hH = "/shader-packs",
      tH = `${hH}/publish`;

    function zH(HH) {
      return `${hH}/${encodeURIComponent(HH)}`
    }
    let CH = null;

    function EH(HH) {
      CH = HH
    }

    function XH() {
      return CH
    }

    function GH() {
      CH = null
    }

    function YH(HH) {
      return HH.playerHasRank("developer") || HH.playerHasRank("admin")
    }
    const uH = ["terrain", "water", "models", "sunShadows", "strict"],
      QH = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function WH(HH, BH) {
      return HH.withFeatures.includes(BH) ? "with" : HH.withoutFeatures.includes(BH) ? "without" : null
    }

    function MH(HH) {
      return null === HH ? "with" : "with" === HH ? "without" : null
    }

    function xH(HH) {
      return "with" === HH ? "only" : null === HH ? "include" : void 0
    }

    function vH(HH, BH) {
      const LH = WH(HH, BH),
        AH = HH => HH.filter((HH => HH !== BH));
      return {
        withFeatures: null === LH ? [...HH.withFeatures, BH] : AH(HH.withFeatures),
        withoutFeatures: "with" === LH ? [...HH.withoutFeatures, BH] : AH(HH.withoutFeatures)
      }
    }
    const PH = "section",
      TH = "sort",
      UH = "filters",
      VH = "q",
      OH = "banned",
      bH = "popular",
      kH = "strict";

    function mH(HH) {
      var BH, LH, rH;
      const hH = HH.get(PH),
        tH = (null !== (BH = HH.get(UH)) && void 0 !== BH ? BH : kH).split(","),
        zH = HH.get(OH);
      return {
        section: "favourites" === hH || "mine" === hH ? hH : "explore",
        sort: null !== (LH = AH.B.find((BH => BH === HH.get(TH)))) && void 0 !== LH ? LH : bH,
        withFeatures: uH.filter((HH => tH.includes(HH) && !tH.includes(`-${HH}`))),
        withoutFeatures: uH.filter((HH => tH.includes(`-${HH}`))),
        searchQuery: (null === (rH = HH.get(VH)) || void 0 === rH ? void 0 : rH.slice(0, AH.P)) || null,
        pageNumber: (0, SH.g)(HH.get(SH.c)),
        banned: "only" === zH ? "with" : "include" === zH ? null : "without"
      }
    }

    function oH(HH, BH) {
      var LH;
      const AH = KH(BH);
      (0, SH.j)(HH, PH, "explore" === BH.section ? null : BH.section), (0, SH.j)(HH, TH, BH.sort === bH ? null : BH.sort), (0, SH.j)(HH, UH, AH === kH ? null : AH), (0, SH.j)(HH, VH, BH.searchQuery), (0, SH.j)(HH, OH, null !== (LH = xH(BH.banned)) && void 0 !== LH ? LH : null), (0, SH.m)(HH, BH.pageNumber)
    }

    function IH(HH) {
      const BH = new URLSearchParams;
      return oH(BH, {
        section: "explore",
        sort: bH,
        withFeatures: "strict" === HH ? [HH] : [HH, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${hH}?${BH.toString()}`
    }

    function fH(HH) {
      return KH(HH) === kH
    }

    function lH(HH) {
      return null !== HH.searchQuery || "with" === HH.banned || KH(HH) !== kH
    }

    function KH(HH) {
      return uH.flatMap((BH => {
        const LH = WH(HH, BH);
        return "with" === LH ? [BH] : "without" === LH ? [`-${BH}`] : []
      })).join(",")
    }
    const cH = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      eH = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qH(HH) {
      return Math.round(100 * Math.max(0, 1 - 1 / HH))
    }

    function gH(HH, BH, LH, rH) {
      const SH = [];
      HH.isBanned && SH.push({
        tone: "warning",
        text: rH("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: hH
      } = HH;
      if (null === HH.brokenError || hH && !hH.error || SH.push({
          tone: "warning",
          text: rH("shaderPackListing:ownerBroken"),
          detail: HH.brokenError
        }), null !== hH && void 0 !== hH && hH.error) SH.push({
        tone: "warning",
        text: rH(BH ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, AH.o)(hH.error) ? null : hH.error
      });
      else if (hH) {
        const HH = null === hH.renderNotBefore ? 0 : hH.renderNotBefore - LH,
          AH = String(Math.ceil(HH / 6e4)),
          tH = rH(BH ? HH > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : HH > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: AH
          });
        SH.push({
          tone: "info",
          text: tH,
          detail: null
        })
      }
      return HH.listed || SH.push({
        tone: "info",
        text: rH("shaderPackListing:ownerUnlisted"),
        detail: null
      }), SH
    }

    function NH(HH) {
      return Math.max(1, Math.round(HH / 1024))
    }

    function RH(HH, BH, LH) {
      return HH instanceof rH.e && HH.errorMessageForUser ? HH.errorMessageForUser : BH(LH)
    }
  },
  7114: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => SH,
      F: () => tH,
      H: () => hH,
      L: () => AH,
      M: () => GH,
      P: () => EH,
      Q: () => PH,
      R: () => XH,
      V: () => CH,
      d: () => uH,
      g: () => WH,
      i: () => QH,
      m: () => YH,
      o: () => vH,
      s: () => UH,
      v: () => zH,
      w: () => rH,
      x: () => TH
    });
    const AH = ["forest", "desert", "water", "night", "cave"];
    const rH = {
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
      SH = ["popular", "updated", "newest"],
      hH = 3,
      tH = 32,
      zH = 300;

    function CH(HH, BH) {
      return HH.slice(0, BH).replace(/[\uD800-\uDBFF]$/, "")
    }
    const EH = 64,
      XH = 512,
      GH = 18e5;

    function YH(HH) {
      const BH = HH,
        LH = null === BH || void 0 === BH ? void 0 : BH.files;
      return "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.apiVersion) && "string" === typeof BH.name && (null === BH.author || "string" === typeof BH.author) && (void 0 === BH.keepCircleShadows || "boolean" === typeof BH.keepCircleShadows) && "object" === typeof LH && null !== LH && Object.values(LH).every((HH => "string" === typeof HH))
    }
    const uH = "Bloxdhub",
      QH = "https://bloxdhub.com/shaders";

    function WH(HH) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(HH)}`
    }
    const MH = "Screenshot generation failed.",
      xH = "Its screenshots couldn't be generated:";

    function vH(HH) {
      var BH;
      return HH === MH || null !== (BH = null === HH || void 0 === HH ? void 0 : HH.startsWith(xH)) && void 0 !== BH && BH
    }

    function PH(HH, BH) {
      return `shaderPacks/${HH}/${BH}.json`
    }

    function TH(HH, BH, LH, AH) {
      return null === BH.renderId ? UH(HH, BH.baselineVersion, LH, AH) : `${HH}/${function(HH,BH,LH,AH){return`shaderPacks/${HH}/${BH}/${LH}-${AH}.webp`}(BH.packId,BH.renderId,LH,AH)}`
    }

    function UH(HH, BH, LH, AH) {
      return `${HH}/${function(HH,BH,LH){return`shaderPacks/baseline/${HH}/${BH}-${LH}.webp`}(BH,LH,AH)}`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);