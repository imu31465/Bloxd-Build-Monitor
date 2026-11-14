export const id = 91;
export const ids = [91, 110, 122];
export const modules = {
  5589: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ShaderPackPublishForm: () => IW
    });
    var wW = MW(75),
      CW = MW(5557),
      zR = MW(182),
      AW = MW(5596),
      bR = MW(904),
      yR = MW(1255),
      NW = MW(1489),
      eW = MW(969),
      BW = MW(5605),
      tR = MW(5619),
      TW = MW(1314),
      gR = MW(1027),
      iR = MW(5621),
      YW = MW(5653),
      JW = MW(5548),
      PW = MW(940);

    function IW(WW) {
      var RW, MW, BW;
      let {
        existing: IW,
        onPublished: lW
      } = WW;
      const {
        t: fW
      } = (0, gR.C)(), {
        userContext: QW,
        isUserContextUpdating: rR
      } = (0, eW.c)(), [cR, XW] = (0, wW.useState)(null), [jR, kR] = (0, wW.useState)(0), [aR, sW] = (0, wW.useState)(null !== (RW = null === IW || void 0 === IW ? void 0 : IW.name) && void 0 !== RW ? RW : ""), dW = (0, wW.useRef)(aR), pW = (0, wW.useRef)(""), hW = WW => {
        dW.current = WW, sW(WW)
      }, [UW, EW] = (0, wW.useState)(null !== (MW = null === IW || void 0 === IW ? void 0 : IW.description) && void 0 !== MW ? MW : ""), VW = (0, wW.useRef)(UW), mR = (0, wW.useRef)(""), xR = WW => {
        VW.current = WW, EW(WW)
      }, [vR, KW] = (0, wW.useState)(!1), {
        loading: uW,
        error: OW,
        setError: nW,
        onFiles: GW
      } = (0, tR.h)((async WW => {
        const RW = await (0, iR.loadPageShaderPackCompiler)();
        if (!RW) return void nW(fW("shaderPack:compilerUnavailable"));
        const MW = await (0, YW.f)(RW, WW.files);
        if (XW({
            pack: WW,
            validation: MW,
            sourceBytes: (0, AW.v)(WW.files)
          }), !IW) {
          var wW;
          if ("" !== dW.current.trim() && dW.current !== pW.current || (pW.current = (0, CW.M)(WW.manifest.name.trim(), CW.t), hW(pW.current)), "" === VW.current.trim() || VW.current === mR.current) mR.current = (0, CW.M)((null !== (wW = WW.manifest.description) && void 0 !== wW ? wW : "").trim(), CW.k), xR(mR.current);
          kR((WW => WW + 1))
        }
      })), LW = !rR && !QW.isLoggedIn() && !zR.d.offlineMode, HW = aR.trim(), DW = HW.length < CW.u, qR = null !== cR && !1 !== (null === (BW = cR.validation) || void 0 === BW ? void 0 : BW.ok) && !uW && !DW && !LW && !rR;
      return (0, PW.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, PW.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: IW ? fW("shaderPackListing:uploadIntro", {
            minutes: String(CW.C / 6e4)
          }) : fW("shaderPackListing:publishIntro")
        }), (0, PW.jsx)(FW, {}), LW && (0, PW.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fW("shaderPackListing:publishNeedsLogin")
        }), (0, PW.jsx)(tR.d, {
          busy: uW,
          disabled: uW || vR,
          onFiles: WW => {
            XW(null), GW(WW)
          }
        }), cR && (0, PW.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, PW.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: cR.pack.manifest.name
          }), (0, PW.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fW("shaderPackListing:sizeValue", {
              kilobytes: String((0, JW.T)(cR.sourceBytes))
            }), " \xb7", " ", fW("shaderPackListing:filesValue", {
              files: String(cR.pack.files.length)
            })]
          }), (0, PW.jsx)(oW, {
            picked: cR
          })]
        }), !IW && (0, PW.jsxs)(PW.Fragment, {
          children: [(0, PW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, PW.jsx)("span", {
              children: fW("general:name")
            }), (0, PW.jsx)(NW.e, {
              className: "ShaderPackPublishInput",
              defaultValue: aR,
              maxLength: CW.t,
              onValueChange: hW
            }, jR), cR && DW && (0, PW.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fW("shaderPackListing:nameTooShort", {
                min: String(CW.u)
              })
            })]
          }), (0, PW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, PW.jsx)("span", {
              children: fW("general:description")
            }), (0, PW.jsx)(NW.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: UW,
              maxLength: CW.k,
              onValueChange: xR,
              useTextarea: !0
            }, jR)]
          })]
        }), OW && (0, PW.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: OW
        }), (0, PW.jsxs)(yR.m, {
          className: "ShaderPackPublishButton",
          disabled: !qR,
          loading: vR,
          onClick: () => {
            !async function() {
              var WW;
              if (!cR) return;
              const {
                name: RW,
                description: MW
              } = null !== IW && void 0 !== IW ? IW : {
                name: HW,
                description: UW.trim()
              }, wW = {
                packId: null !== (WW = null === IW || void 0 === IW ? void 0 : IW.packId) && void 0 !== WW ? WW : null,
                name: RW,
                description: MW,
                apiVersion: cR.pack.manifest.apiVersion,
                files: (0, AW.r)(cR.pack.files),
                keepCircleShadows: !0 === cR.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(wW)).byteLength > 1024 * CW.K) nW(fW("shaderPackListing:publishTooBig", {
                kilobytes: String(CW.K)
              }));
              else {
                KW(!0), nW(null);
                try {
                  lW(await TW.c.publishShaderPack(QW, wW))
                } catch (zR) {
                  console.error("Failed to publish the shader pack", zR), nW((0, JW.y)(zR, fW, "shaderPackListing:publishFailed"))
                } finally {
                  KW(!1)
                }
              }
            }()
          },
          children: [(0, PW.jsx)(bR.e, {
            name: "upload"
          }), " ", fW(IW ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function oW(WW) {
      let {
        picked: RW
      } = WW;
      const {
        t: MW
      } = (0, gR.C)(), {
        validation: wW
      } = RW;
      return null === wW ? (0, PW.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: MW("shaderPackListing:publishUnchecked")
      }) : wW.ok ? (0, PW.jsxs)(PW.Fragment, {
        children: [(0, PW.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, PW.jsx)(bR.e, {
            name: "circle-check"
          }), " ", MW("shaderPackListing:publishReady")]
        }), wW.offInStrict.length > 0 && (0, PW.jsxs)(PW.Fragment, {
          children: [(0, PW.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, PW.jsx)(bR.e, {
              name: "triangle-exclamation"
            }), " ", MW("shaderPack:offInStrict")]
          }), (0, PW.jsx)(BW.c, {
            diagnostics: wW.offInStrict,
            t: MW
          })]
        })]
      }) : (0, PW.jsxs)(PW.Fragment, {
        children: [(0, PW.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, PW.jsx)(bR.e, {
            name: "triangle-exclamation"
          }), " ", MW("shaderPackListing:publishHasErrors")]
        }), (0, PW.jsx)(BW.c, {
          diagnostics: wW.errors,
          more: wW.moreErrors,
          t: MW
        })]
      })
    }
    const lW = "\0";

    function FW() {
      const {
        t: WW
      } = (0, gR.C)(), [RW, MW] = WW("shaderPackListing:bloxdhubHelp", {
        site: lW
      }).split(lW);
      return (0, PW.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [RW, (0, PW.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: CW.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: CW.c
        }), MW]
      })
    }
  },
  5580: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => eW
    });
    var wW = MW(1330),
      CW = MW(1255),
      zR = MW(1027),
      AW = MW(5589),
      bR = MW(5565),
      yR = MW(5548),
      NW = MW(940);

    function eW() {
      const {
        t: WW
      } = (0, zR.C)(), RW = (0, wW.useNavigatePreserveSearch)();
      return (0, bR.d)(), (0, NW.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, NW.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, NW.jsx)(CW.d, {
            onClick: () => {
              RW(yR.$)
            },
            children: WW("shaderPackListing:backToPacks")
          })
        }), (0, NW.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: WW("shaderPackListing:publishTitle")
        }), (0, NW.jsx)(AW.ShaderPackPublishForm, {
          existing: null,
          onPublished: WW => {
            RW((0, yR.cb)(WW.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  5565: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => tR,
      f: () => TW,
      i: () => BW,
      k: () => gR
    });
    var wW = MW(75),
      CW = MW(5557),
      zR = MW(1314),
      AW = MW(5548),
      bR = MW(5568),
      yR = MW(969);
    const NW = "shaderPackListingView",
      eW = "shaderPackListingFilterOpen";

    function BW() {
      var WW;
      const [RW, MW] = (0, bR.c)(NW, CW.y[0]);
      return [null !== (WW = CW.y.find((WW => WW === RW))) && void 0 !== WW ? WW : CW.y[0], MW]
    }

    function tR() {
      (0, wW.useEffect)((() => () => {
        window.location.pathname.startsWith(AW.$) || (0, AW.m)()
      }), [])
    }

    function TW() {
      return (0, bR.c)(eW, !1)
    }

    function gR() {
      const {
        userContext: WW,
        isUserContextUpdating: RW
      } = (0, yR.c)(), [MW, CW] = (0, wW.useState)(null), AW = (0, wW.useRef)(new Set);

      function bR(WW, RW) {
        CW((MW => {
          const wW = new Set(MW);
          return RW ? wW.add(WW) : wW.delete(WW), wW
        }))
      }
      return (0, wW.useEffect)((() => {
        if (RW) return;
        let MW = !1;
        return zR.c.getFavouriteShaderPacks(WW).then((WW => {
          MW || CW(new Set(WW))
        })).catch((WW => {
          console.error("Failed to get favourite shader packs", WW), MW || CW(new Set)
        })), () => {
          MW = !0
        }
      }), [WW, RW]), {
        isFavourite: WW => null === MW ? null : MW.has(WW),
        toggle: function(RW) {
          if (null === MW || AW.current.has(RW)) return;
          AW.current.add(RW);
          const wW = !MW.has(RW);
          bR(RW, wW), (wW ? zR.c.favouriteShaderPack(WW, RW) : zR.c.unfavouriteShaderPack(WW, RW)).catch((WW => {
            console.error("Failed to change a favourite shader pack", WW), bR(RW, !wW)
          })).finally((() => {
            AW.current.delete(RW)
          }))
        }
      }
    }
  },
  5548: (WW, RW, MW) => {
    MW.d(RW, {
      $: () => AW,
      C: () => gR,
      G: () => JW,
      K: () => XW,
      L: () => eW,
      M: () => kR,
      P: () => iR,
      T: () => VW,
      X: () => UW,
      bb: () => EW,
      cb: () => yR,
      db: () => bR,
      e: () => PW,
      h: () => rR,
      hb: () => pW,
      ib: () => hW,
      j: () => YW,
      lb: () => IW,
      m: () => tR,
      o: () => BW,
      ob: () => jR,
      r: () => aR,
      v: () => TW,
      w: () => sW,
      y: () => mR
    });
    var wW = MW(5557),
      CW = MW(156),
      zR = MW(3600);
    const AW = "/shader-packs",
      bR = `${AW}/publish`;

    function yR(WW) {
      return `${AW}/${encodeURIComponent(WW)}`
    }
    let NW = null;

    function eW(WW) {
      NW = WW
    }

    function BW() {
      return NW
    }

    function tR() {
      NW = null
    }

    function TW(WW) {
      return WW.playerHasRank("developer") || WW.playerHasRank("admin")
    }
    const gR = ["terrain", "water", "models", "sunShadows", "strict"],
      iR = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function YW(WW, RW) {
      return WW.withFeatures.includes(RW) ? "with" : WW.withoutFeatures.includes(RW) ? "without" : null
    }

    function JW(WW) {
      return null === WW ? "with" : "with" === WW ? "without" : null
    }

    function PW(WW) {
      return "with" === WW ? "only" : null === WW ? "include" : void 0
    }

    function IW(WW, RW) {
      const MW = YW(WW, RW),
        wW = WW => WW.filter((WW => WW !== RW));
      return {
        withFeatures: null === MW ? [...WW.withFeatures, RW] : wW(WW.withFeatures),
        withoutFeatures: "with" === MW ? [...WW.withoutFeatures, RW] : wW(WW.withoutFeatures)
      }
    }
    const oW = "section",
      lW = "sort",
      FW = "filters",
      fW = "q",
      QW = "banned",
      rR = "popular",
      cR = "strict";

    function XW(WW) {
      var RW, MW, CW;
      const AW = WW.get(oW),
        bR = (null !== (RW = WW.get(FW)) && void 0 !== RW ? RW : cR).split(","),
        yR = WW.get(QW);
      return {
        section: "favourites" === AW || "mine" === AW ? AW : "explore",
        sort: null !== (MW = wW.q.find((RW => RW === WW.get(lW)))) && void 0 !== MW ? MW : rR,
        withFeatures: gR.filter((WW => bR.includes(WW) && !bR.includes(`-${WW}`))),
        withoutFeatures: gR.filter((WW => bR.includes(`-${WW}`))),
        searchQuery: (null === (CW = WW.get(fW)) || void 0 === CW ? void 0 : CW.slice(0, wW.G)) || null,
        pageNumber: (0, zR.f)(WW.get(zR.b)),
        banned: "only" === yR ? "with" : "include" === yR ? null : "without"
      }
    }

    function jR(WW, RW) {
      var MW;
      const wW = dW(RW);
      (0, zR.i)(WW, oW, "explore" === RW.section ? null : RW.section), (0, zR.i)(WW, lW, RW.sort === rR ? null : RW.sort), (0, zR.i)(WW, FW, wW === cR ? null : wW), (0, zR.i)(WW, fW, RW.searchQuery), (0, zR.i)(WW, QW, null !== (MW = PW(RW.banned)) && void 0 !== MW ? MW : null), (0, zR.k)(WW, RW.pageNumber)
    }

    function kR(WW) {
      const RW = new URLSearchParams;
      return jR(RW, {
        section: "explore",
        sort: rR,
        withFeatures: "strict" === WW ? [WW] : [WW, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${AW}?${RW.toString()}`
    }

    function aR(WW) {
      return dW(WW) === cR
    }

    function sW(WW) {
      return null !== WW.searchQuery || "with" === WW.banned || dW(WW) !== cR
    }

    function dW(WW) {
      return gR.flatMap((RW => {
        const MW = YW(WW, RW);
        return "with" === MW ? [RW] : "without" === MW ? [`-${RW}`] : []
      })).join(",")
    }
    const pW = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      hW = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function UW(WW) {
      return Math.round(100 * Math.max(0, 1 - 1 / WW))
    }

    function EW(WW, RW, MW, CW) {
      const zR = [];
      WW.isBanned && zR.push({
        tone: "warning",
        text: CW("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: AW
      } = WW;
      if (null === WW.brokenError || AW && !AW.error || zR.push({
          tone: "warning",
          text: CW("shaderPackListing:ownerBroken"),
          detail: WW.brokenError
        }), null !== AW && void 0 !== AW && AW.error) zR.push({
        tone: "warning",
        text: CW(RW ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, wW.i)(AW.error) ? null : AW.error
      });
      else if (AW) {
        const WW = null === AW.renderNotBefore ? 0 : AW.renderNotBefore - MW,
          wW = String(Math.ceil(WW / 6e4)),
          bR = CW(RW ? WW > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : WW > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: wW
          });
        zR.push({
          tone: "info",
          text: bR,
          detail: null
        })
      }
      return WW.listed || zR.push({
        tone: "info",
        text: CW("shaderPackListing:ownerUnlisted"),
        detail: null
      }), zR
    }

    function VW(WW) {
      return Math.max(1, Math.round(WW / 1024))
    }

    function mR(WW, RW, MW) {
      return WW instanceof CW.d && WW.errorMessageForUser ? WW.errorMessageForUser : RW(MW)
    }
  },
  5568: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(75),
      CW = MW(50);

    function zR(WW, RW) {
      var MW;
      const [zR, AW] = (0, wW.useState)(null !== (MW = CW.g.getItem(WW)) && void 0 !== MW ? MW : RW);
      return [zR, RW => {
        CW.g.setItem(WW, RW), AW(RW)
      }]
    }
  },
  5661: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    var wW = MW(50);
    const CW = "shaderPack";
    async function zR() {
      var WW;
      let RW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (WW = await wW.e.getItem(CW, RW)) && void 0 !== WW ? WW : null
    }
  },
  5557: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => tR,
      G: () => eW,
      J: () => IW,
      K: () => BW,
      M: () => NW,
      c: () => TW,
      e: () => iR,
      f: () => gR,
      i: () => PW,
      j: () => lW,
      k: () => yR,
      m: () => CW,
      o: () => oW,
      q: () => zR,
      t: () => bR,
      u: () => AW,
      y: () => wW
    });
    const wW = ["forest", "desert", "water", "night", "cave"];
    const CW = {
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
      zR = ["popular", "updated", "newest"],
      AW = 3,
      bR = 32,
      yR = 300;

    function NW(WW, RW) {
      return WW.slice(0, RW).replace(/[\uD800-\uDBFF]$/, "")
    }
    const eW = 64,
      BW = 512,
      tR = 18e5;
    const TW = "Bloxdhub",
      gR = "https://bloxdhub.com/shaders";

    function iR(WW) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
    }
    const YW = "Screenshot generation failed.",
      JW = "Its screenshots couldn't be generated:";

    function PW(WW) {
      var RW;
      return WW === YW || null !== (RW = null === WW || void 0 === WW ? void 0 : WW.startsWith(JW)) && void 0 !== RW && RW
    }

    function IW(WW, RW) {
      return `shaderPacks/${WW}/${RW}.json`
    }

    function oW(WW, RW, MW, wW) {
      return null === RW.renderId ? lW(WW, RW.baselineVersion, MW, wW) : `${WW}/${function(WW,RW,MW,wW){return`shaderPacks/${WW}/${RW}/${MW}-${wW}.webp`}(RW.packId,RW.renderId,MW,wW)}`
    }

    function lW(WW, RW, MW, wW) {
      return `${WW}/${function(WW,RW,MW){return`shaderPacks/baseline/${WW}/${RW}-${MW}.webp`}(RW,MW,wW)}`
    }
  },
  3942: (WW, RW, MW) => {
    var wW = MW(3944);

    function CW() {}

    function zR() {}
    zR.resetWarningCache = CW, WW.exports = function() {
      function WW(WW, RW, MW, CW, zR, AW) {
        if (AW !== wW) {
          var bR = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bR.name = "Invariant Violation", bR
        }
      }

      function RW() {
        return WW
      }
      WW.isRequired = WW;
      var MW = {
        array: WW,
        bigint: WW,
        bool: WW,
        func: WW,
        number: WW,
        object: WW,
        string: WW,
        symbol: WW,
        any: WW,
        arrayOf: RW,
        element: WW,
        elementType: WW,
        instanceOf: RW,
        node: WW,
        objectOf: RW,
        oneOf: RW,
        oneOfType: RW,
        shape: RW,
        exact: RW,
        checkPropTypes: zR,
        resetWarningCache: CW
      };
      return MW.PropTypes = MW, MW
    }
  },
  3940: (WW, RW, MW) => {
    WW.exports = MW(3942)()
  },
  3944: WW => {
    WW.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);