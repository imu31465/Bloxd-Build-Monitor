export const id = 91;
export const ids = [91, 110, 122];
export const modules = {
  5557: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ShaderPackPublishForm: () => aW
    });
    var CF = SF(46),
      AF = SF(5520),
      uF = SF(170),
      hF = SF(5564),
      bW = SF(929),
      dF = SF(1266),
      PF = SF(1504),
      RF = SF(996),
      iW = SF(5572),
      eF = SF(5585),
      EF = SF(1336),
      QF = SF(1046),
      rW = SF(5589),
      gW = SF(5624),
      tW = SF(5512),
      TF = SF(971);

    function aW(FF) {
      var WF, SF, iW;
      let {
        existing: aW,
        onPublished: qW
      } = FF;
      const {
        t: NF
      } = (0, QF.B)(), {
        userContext: DF,
        isUserContextUpdating: LF
      } = (0, RF.b)(), [mW, OF] = (0, CF.useState)(null), [xW, ZF] = (0, CF.useState)(0), [oF, YF] = (0, CF.useState)(null !== (WF = null === aW || void 0 === aW ? void 0 : aW.name) && void 0 !== WF ? WF : ""), MF = (0, CF.useRef)(oF), cW = (0, CF.useRef)(""), GF = FF => {
        MF.current = FF, YF(FF)
      }, [zW, IF] = (0, CF.useState)(null !== (SF = null === aW || void 0 === aW ? void 0 : aW.description) && void 0 !== SF ? SF : ""), fF = (0, CF.useRef)(zW), yW = (0, CF.useRef)(""), sF = FF => {
        fF.current = FF, IF(FF)
      }, [nF, HF] = (0, CF.useState)(!1), {
        loading: KF,
        error: wF,
        setError: XF,
        onFiles: UF
      } = (0, eF.d)((async FF => {
        const WF = await (0, rW.loadPageShaderPackCompiler)();
        if (!WF) return void XF(NF("shaderPack:compilerUnavailable"));
        const SF = await (0, gW.f)(WF, FF.files);
        if (OF({
            pack: FF,
            validation: SF,
            sourceBytes: (0, hF.t)(FF.files)
          }), !aW) {
          var CF;
          if ("" !== MF.current.trim() && MF.current !== cW.current || (cW.current = (0, AF.Q)(FF.manifest.name.trim(), AF.E), GF(cW.current)), "" === fF.current.trim() || fF.current === yW.current) yW.current = (0, AF.Q)((null !== (CF = FF.manifest.description) && void 0 !== CF ? CF : "").trim(), AF.q), sF(yW.current);
          ZF((FF => FF + 1))
        }
      })), BF = !LF && !DF.isLoggedIn() && !uF.e.offlineMode, jW = oF.trim(), vW = jW.length < AF.F, JF = null !== mW && !1 !== (null === (iW = mW.validation) || void 0 === iW ? void 0 : iW.ok) && !KF && !vW && !BF && !LF;
      return (0, TF.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, TF.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: aW ? NF("shaderPackListing:uploadIntro", {
            minutes: String(AF.L / 6e4)
          }) : NF("shaderPackListing:publishIntro")
        }), (0, TF.jsx)(VF, {}), BF && (0, TF.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: NF("shaderPackListing:publishNeedsLogin")
        }), (0, TF.jsx)(eF.b, {
          busy: KF,
          disabled: KF || nF,
          onFiles: FF => {
            OF(null), UF(FF)
          }
        }), mW && (0, TF.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, TF.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: mW.pack.manifest.name
          }), (0, TF.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [NF("shaderPackListing:sizeValue", {
              kilobytes: String((0, tW.K)(mW.sourceBytes))
            }), " \xb7", " ", NF("shaderPackListing:filesValue", {
              files: String(mW.pack.files.length)
            })]
          }), (0, TF.jsx)(kW, {
            picked: mW
          })]
        }), !aW && (0, TF.jsxs)(TF.Fragment, {
          children: [(0, TF.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, TF.jsx)("span", {
              children: NF("general:name")
            }), (0, TF.jsx)(PF.d, {
              className: "ShaderPackPublishInput",
              defaultValue: oF,
              maxLength: AF.E,
              onValueChange: GF
            }, xW), mW && vW && (0, TF.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: NF("shaderPackListing:nameTooShort", {
                min: String(AF.F)
              })
            })]
          }), (0, TF.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, TF.jsx)("span", {
              children: NF("general:description")
            }), (0, TF.jsx)(PF.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: zW,
              maxLength: AF.q,
              onValueChange: sF,
              useTextarea: !0
            }, xW)]
          })]
        }), wF && (0, TF.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: wF
        }), (0, TF.jsxs)(dF.k, {
          className: "ShaderPackPublishButton",
          disabled: !JF,
          loading: nF,
          onClick: () => {
            !async function() {
              var FF;
              if (!mW) return;
              const {
                name: WF,
                description: SF
              } = null !== aW && void 0 !== aW ? aW : {
                name: jW,
                description: zW.trim()
              }, CF = {
                packId: null !== (FF = null === aW || void 0 === aW ? void 0 : aW.packId) && void 0 !== FF ? FF : null,
                name: WF,
                description: SF,
                apiVersion: mW.pack.manifest.apiVersion,
                files: (0, hF.r)(mW.pack.files),
                keepCircleShadows: !0 === mW.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(CF)).byteLength > 1024 * AF.P) XF(NF("shaderPackListing:publishTooBig", {
                kilobytes: String(AF.P)
              }));
              else {
                HF(!0), XF(null);
                try {
                  qW(await EF.b.publishShaderPack(DF, CF))
                } catch (uF) {
                  console.error("Failed to publish the shader pack", uF), XF((0, tW.u)(uF, NF, "shaderPackListing:publishFailed"))
                } finally {
                  HF(!1)
                }
              }
            }()
          },
          children: [(0, TF.jsx)(bW.e, {
            name: "upload"
          }), " ", NF(aW ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function kW(FF) {
      let {
        picked: WF
      } = FF;
      const {
        t: SF
      } = (0, QF.B)(), {
        validation: CF
      } = WF;
      return null === CF ? (0, TF.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: SF("shaderPackListing:publishUnchecked")
      }) : CF.ok ? (0, TF.jsxs)(TF.Fragment, {
        children: [(0, TF.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, TF.jsx)(bW.e, {
            name: "circle-check"
          }), " ", SF("shaderPackListing:publishReady")]
        }), CF.offInStrict.length > 0 && (0, TF.jsxs)(TF.Fragment, {
          children: [(0, TF.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, TF.jsx)(bW.e, {
              name: "triangle-exclamation"
            }), " ", SF("shaderPack:offInStrict")]
          }), (0, TF.jsx)(iW.d, {
            diagnostics: CF.offInStrict,
            t: SF
          })]
        })]
      }) : (0, TF.jsxs)(TF.Fragment, {
        children: [(0, TF.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, TF.jsx)(bW.e, {
            name: "triangle-exclamation"
          }), " ", SF("shaderPackListing:publishHasErrors")]
        }), (0, TF.jsx)(iW.d, {
          diagnostics: CF.errors,
          more: CF.moreErrors,
          t: SF
        })]
      })
    }
    const qW = "\0";

    function VF() {
      const {
        t: FF
      } = (0, QF.B)(), [WF, SF] = FF("shaderPackListing:bloxdhubHelp", {
        site: qW
      }).split(qW);
      return (0, TF.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [WF, (0, TF.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: AF.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: AF.d
        }), SF]
      })
    }
  },
  5549: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => RF
    });
    var CF = SF(1352),
      AF = SF(1266),
      uF = SF(1046),
      hF = SF(5557),
      bW = SF(5533),
      dF = SF(5512),
      PF = SF(971);

    function RF() {
      const {
        t: FF
      } = (0, uF.B)(), WF = (0, CF.useNavigatePreserveSearch)();
      return (0, bW.b)(), (0, PF.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, PF.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, PF.jsx)(AF.c, {
            onClick: () => {
              WF(dF.Q)
            },
            children: FF("shaderPackListing:backToPacks")
          })
        }), (0, PF.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: FF("shaderPackListing:publishTitle")
        }), (0, PF.jsx)(hF.ShaderPackPublishForm, {
          existing: null,
          onPublished: FF => {
            WF((0, dF.W)(FF.packId), {
              replace: !0
            })
          }
        })]
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
  5630: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      f: () => uF
    });
    var CF = SF(33);
    const AF = "shaderPack";
    async function uF() {
      var FF;
      let WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (FF = await CF.f.getItem(AF, WF)) && void 0 !== FF ? FF : null
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
  },
  3969: (FF, WF, SF) => {
    var CF = SF(3976);

    function AF() {}

    function uF() {}
    uF.resetWarningCache = AF, FF.exports = function() {
      function FF(FF, WF, SF, AF, uF, hF) {
        if (hF !== CF) {
          var bW = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bW.name = "Invariant Violation", bW
        }
      }

      function WF() {
        return FF
      }
      FF.isRequired = FF;
      var SF = {
        array: FF,
        bigint: FF,
        bool: FF,
        func: FF,
        number: FF,
        object: FF,
        string: FF,
        symbol: FF,
        any: FF,
        arrayOf: WF,
        element: FF,
        elementType: FF,
        instanceOf: WF,
        node: FF,
        objectOf: WF,
        oneOf: WF,
        oneOfType: WF,
        shape: WF,
        exact: WF,
        checkPropTypes: uF,
        resetWarningCache: AF
      };
      return SF.PropTypes = SF, SF
    }
  },
  3961: (FF, WF, SF) => {
    FF.exports = SF(3969)()
  },
  3976: FF => {
    FF.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);