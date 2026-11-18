export const id = 101;
export const ids = [101, 117];
export const modules = {
  4375: (JJ, cJ, ZJ) => {
    var FJ = ZJ(4383);

    function UJ() {}

    function eJ() {}
    eJ.resetWarningCache = UJ, JJ.exports = function() {
      function JJ(JJ, cJ, ZJ, UJ, eJ, XJ) {
        if (XJ !== FJ) {
          var AJ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw AJ.name = "Invariant Violation", AJ
        }
      }

      function cJ() {
        return JJ
      }
      JJ.isRequired = JJ;
      var ZJ = {
        array: JJ,
        bigint: JJ,
        bool: JJ,
        func: JJ,
        number: JJ,
        object: JJ,
        string: JJ,
        symbol: JJ,
        any: JJ,
        arrayOf: cJ,
        element: JJ,
        elementType: JJ,
        instanceOf: cJ,
        node: JJ,
        objectOf: cJ,
        oneOf: cJ,
        oneOfType: cJ,
        shape: cJ,
        exact: cJ,
        checkPropTypes: eJ,
        resetWarningCache: UJ
      };
      return ZJ.PropTypes = ZJ, ZJ
    }
  },
  4367: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ(4375)()
  },
  4383: JJ => {
    JJ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5926: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ShaderPackPublishForm: () => vJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5889),
      eJ = ZJ(164),
      XJ = ZJ(5934),
      AJ = ZJ(942),
      qJ = ZJ(1329),
      jJ = ZJ(1566),
      YJ = ZJ(1022),
      hJ = ZJ(5939),
      DJ = ZJ(5955),
      sJ = ZJ(1389),
      nJ = ZJ(1086),
      GJ = ZJ(5960),
      fJ = ZJ(5994),
      xJ = ZJ(5886),
      rJ = ZJ(990);

    function vJ(JJ) {
      var cJ, ZJ, hJ;
      let {
        existing: vJ,
        onPublished: QJ
      } = JJ;
      const {
        t: VJ
      } = (0, nJ.F)(), {
        userContext: KJ,
        isUserContextUpdating: yJ
      } = (0, YJ.d)(), [SJ, IJ] = (0, FJ.useState)(null), [MJ, bJ] = (0, FJ.useState)(0), [wJ, WJ] = (0, FJ.useState)(null !== (cJ = null === vJ || void 0 === vJ ? void 0 : vJ.name) && void 0 !== cJ ? cJ : ""), gJ = (0, FJ.useRef)(wJ), HJ = (0, FJ.useRef)(""), PJ = JJ => {
        gJ.current = JJ, WJ(JJ)
      }, [kJ, pJ] = (0, FJ.useState)(null !== (ZJ = null === vJ || void 0 === vJ ? void 0 : vJ.description) && void 0 !== ZJ ? ZJ : ""), dJ = (0, FJ.useRef)(kJ), zJ = (0, FJ.useRef)(""), NJ = JJ => {
        dJ.current = JJ, pJ(JJ)
      }, [OJ, TJ] = (0, FJ.useState)(!1), {
        loading: CJ,
        error: uJ,
        setError: iJ,
        onFiles: RJ
      } = (0, DJ.g)((async JJ => {
        const cJ = await (0, GJ.loadPageShaderPackCompiler)();
        if (!cJ) return void iJ(VJ("shaderPack:compilerUnavailable"));
        const ZJ = await (0, fJ.f)(cJ, JJ.files);
        if (IJ({
            pack: JJ,
            validation: ZJ,
            sourceBytes: (0, XJ.q)(JJ.files)
          }), !vJ) {
          var FJ;
          if ("" !== gJ.current.trim() && gJ.current !== HJ.current || (HJ.current = (0, UJ.L)(JJ.manifest.name.trim(), UJ.u), PJ(HJ.current)), "" === dJ.current.trim() || dJ.current === zJ.current) zJ.current = (0, UJ.L)((null !== (FJ = JJ.manifest.description) && void 0 !== FJ ? FJ : "").trim(), UJ.n), NJ(zJ.current);
          bJ((JJ => JJ + 1))
        }
      })), LJ = !yJ && !KJ.isLoggedIn() && !eJ.e.offlineMode, aJ = wJ.trim(), BJ = aJ.length < UJ.x, tJ = null !== SJ && !1 !== (null === (hJ = SJ.validation) || void 0 === hJ ? void 0 : hJ.ok) && !CJ && !BJ && !LJ && !yJ;
      return (0, rJ.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, rJ.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: vJ ? VJ("shaderPackListing:uploadIntro", {
            minutes: String(UJ.C / 6e4)
          }) : VJ("shaderPackListing:publishIntro")
        }), (0, rJ.jsx)(EJ, {}), LJ && (0, rJ.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: VJ("shaderPackListing:publishNeedsLogin")
        }), (0, rJ.jsx)(DJ.e, {
          busy: CJ,
          disabled: CJ || OJ,
          onFiles: JJ => {
            IJ(null), RJ(JJ)
          }
        }), SJ && (0, rJ.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, rJ.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: SJ.pack.manifest.name
          }), (0, rJ.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [VJ("shaderPackListing:sizeValue", {
              kilobytes: String((0, xJ.Q)(SJ.sourceBytes))
            }), " \xb7", " ", VJ("shaderPackListing:filesValue", {
              files: String(SJ.pack.files.length)
            })]
          }), (0, rJ.jsx)(mJ, {
            picked: SJ
          })]
        }), !vJ && (0, rJ.jsxs)(rJ.Fragment, {
          children: [(0, rJ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rJ.jsx)("span", {
              children: VJ("general:name")
            }), (0, rJ.jsx)(jJ.e, {
              className: "ShaderPackPublishInput",
              defaultValue: wJ,
              maxLength: UJ.u,
              onValueChange: PJ
            }, MJ), SJ && BJ && (0, rJ.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: VJ("shaderPackListing:nameTooShort", {
                min: String(UJ.x)
              })
            })]
          }), (0, rJ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rJ.jsx)("span", {
              children: VJ("general:description")
            }), (0, rJ.jsx)(jJ.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: kJ,
              maxLength: UJ.n,
              onValueChange: NJ,
              useTextarea: !0
            }, MJ)]
          })]
        }), uJ && (0, rJ.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: uJ
        }), (0, rJ.jsxs)(qJ.m, {
          className: "ShaderPackPublishButton",
          disabled: !tJ,
          loading: OJ,
          onClick: () => {
            !async function() {
              var JJ;
              if (!SJ) return;
              const {
                name: cJ,
                description: ZJ
              } = null !== vJ && void 0 !== vJ ? vJ : {
                name: aJ,
                description: kJ.trim()
              }, FJ = {
                packId: null !== (JJ = null === vJ || void 0 === vJ ? void 0 : vJ.packId) && void 0 !== JJ ? JJ : null,
                name: cJ,
                description: ZJ,
                apiVersion: SJ.pack.manifest.apiVersion,
                files: (0, XJ.o)(SJ.pack.files),
                keepCircleShadows: !0 === SJ.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(FJ)).byteLength > 1024 * UJ.I) iJ(VJ("shaderPackListing:publishTooBig", {
                kilobytes: String(UJ.I)
              }));
              else {
                TJ(!0), iJ(null);
                try {
                  QJ(await sJ.c.publishShaderPack(KJ, FJ))
                } catch (eJ) {
                  console.error("Failed to publish the shader pack", eJ), iJ((0, xJ.C)(eJ, VJ, "shaderPackListing:publishFailed"))
                } finally {
                  TJ(!1)
                }
              }
            }()
          },
          children: [(0, rJ.jsx)(AJ.c, {
            name: "upload"
          }), " ", VJ(vJ ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function mJ(JJ) {
      let {
        picked: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, nJ.F)(), {
        validation: FJ
      } = cJ;
      return null === FJ ? (0, rJ.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ZJ("shaderPackListing:publishUnchecked")
      }) : FJ.ok ? (0, rJ.jsxs)(rJ.Fragment, {
        children: [(0, rJ.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, rJ.jsx)(AJ.c, {
            name: "circle-check"
          }), " ", ZJ("shaderPackListing:publishReady")]
        }), FJ.offInStrict.length > 0 && (0, rJ.jsxs)(rJ.Fragment, {
          children: [(0, rJ.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, rJ.jsx)(AJ.c, {
              name: "triangle-exclamation"
            }), " ", ZJ("shaderPack:offInStrict")]
          }), (0, rJ.jsx)(hJ.e, {
            diagnostics: FJ.offInStrict,
            t: ZJ
          })]
        })]
      }) : (0, rJ.jsxs)(rJ.Fragment, {
        children: [(0, rJ.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, rJ.jsx)(AJ.c, {
            name: "triangle-exclamation"
          }), " ", ZJ("shaderPackListing:publishHasErrors")]
        }), (0, rJ.jsx)(hJ.e, {
          diagnostics: FJ.errors,
          more: FJ.moreErrors,
          t: ZJ
        })]
      })
    }
    const QJ = "\0";

    function EJ() {
      const {
        t: JJ
      } = (0, nJ.F)(), [cJ, ZJ] = JJ("shaderPackListing:bloxdhubHelp", {
        site: QJ
      }).split(QJ);
      return (0, rJ.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [cJ, (0, rJ.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: UJ.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: UJ.b
        }), ZJ]
      })
    }
  },
  5919: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => YJ
    });
    var FJ = ZJ(1406),
      UJ = ZJ(1329),
      eJ = ZJ(1086),
      XJ = ZJ(5926),
      AJ = ZJ(5903),
      qJ = ZJ(5886),
      jJ = ZJ(990);

    function YJ() {
      const {
        t: JJ
      } = (0, eJ.F)(), cJ = (0, FJ.useNavigatePreserveSearch)();
      return (0, AJ.b)(), (0, jJ.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, jJ.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, jJ.jsx)(UJ.b, {
            onClick: () => {
              cJ(qJ.S)
            },
            children: JJ("shaderPackListing:backToPacks")
          })
        }), (0, jJ.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: JJ("shaderPackListing:publishTitle")
        }), (0, jJ.jsx)(XJ.ShaderPackPublishForm, {
          existing: null,
          onPublished: JJ => {
            cJ((0, qJ.W)(JJ.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  5903: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      c: () => sJ,
      g: () => hJ,
      h: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5889),
      eJ = ZJ(1389),
      XJ = ZJ(5886),
      AJ = ZJ(5910),
      qJ = ZJ(1022);
    const jJ = "shaderPackListingView",
      YJ = "shaderPackListingFilterOpen";

    function hJ() {
      var JJ;
      const [cJ, ZJ] = (0, AJ.b)(jJ, UJ.B[0]);
      return [null !== (JJ = UJ.B.find((JJ => JJ === cJ))) && void 0 !== JJ ? JJ : UJ.B[0], ZJ]
    }

    function DJ() {
      (0, FJ.useEffect)((() => () => {
        window.location.pathname.startsWith(XJ.S) || (0, XJ.n)()
      }), [])
    }

    function sJ() {
      return (0, AJ.b)(YJ, !1)
    }

    function nJ() {
      const {
        userContext: JJ,
        isUserContextUpdating: cJ
      } = (0, qJ.d)(), [ZJ, UJ] = (0, FJ.useState)(null), XJ = (0, FJ.useRef)(new Set);

      function AJ(JJ, cJ) {
        UJ((ZJ => {
          const FJ = new Set(ZJ);
          return cJ ? FJ.add(JJ) : FJ.delete(JJ), FJ
        }))
      }
      return (0, FJ.useEffect)((() => {
        if (cJ) return;
        let ZJ = !1;
        return eJ.c.getFavouriteShaderPacks(JJ).then((JJ => {
          ZJ || UJ(new Set(JJ))
        })).catch((JJ => {
          console.error("Failed to get favourite shader packs", JJ), ZJ || UJ(new Set)
        })), () => {
          ZJ = !0
        }
      }), [JJ, cJ]), {
        isFavourite: JJ => null === ZJ ? null : ZJ.has(JJ),
        toggle: function(cJ) {
          if (null === ZJ || XJ.current.has(cJ)) return;
          XJ.current.add(cJ);
          const FJ = !ZJ.has(cJ);
          AJ(cJ, FJ), (FJ ? eJ.c.favouriteShaderPack(JJ, cJ) : eJ.c.unfavouriteShaderPack(JJ, cJ)).catch((JJ => {
            console.error("Failed to change a favourite shader pack", JJ), AJ(cJ, !FJ)
          })).finally((() => {
            XJ.current.delete(cJ)
          }))
        }
      }
    }
  },
  5886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => WJ,
      C: () => zJ,
      G: () => nJ,
      H: () => xJ,
      K: () => IJ,
      L: () => YJ,
      M: () => bJ,
      N: () => GJ,
      Q: () => dJ,
      R: () => kJ,
      S: () => XJ,
      U: () => pJ,
      W: () => qJ,
      Y: () => AJ,
      ab: () => HJ,
      c: () => rJ,
      eb: () => PJ,
      g: () => yJ,
      ib: () => vJ,
      j: () => fJ,
      kb: () => MJ,
      n: () => DJ,
      r: () => hJ,
      s: () => wJ,
      w: () => sJ
    });
    var FJ = ZJ(5889),
      UJ = ZJ(143),
      eJ = ZJ(3982);
    const XJ = "/shader-packs",
      AJ = `${XJ}/publish`;

    function qJ(JJ) {
      return `${XJ}/${encodeURIComponent(JJ)}`
    }
    let jJ = null;

    function YJ(JJ) {
      jJ = JJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      jJ = null
    }

    function sJ(JJ) {
      return JJ.playerHasRank("developer") || JJ.playerHasRank("admin")
    }
    const nJ = ["terrain", "water", "models", "sunShadows", "strict"],
      GJ = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fJ(JJ, cJ) {
      return JJ.withFeatures.includes(cJ) ? "with" : JJ.withoutFeatures.includes(cJ) ? "without" : null
    }

    function xJ(JJ) {
      return null === JJ ? "with" : "with" === JJ ? "without" : null
    }

    function rJ(JJ) {
      return "with" === JJ ? "only" : null === JJ ? "include" : void 0
    }

    function vJ(JJ, cJ) {
      const ZJ = fJ(JJ, cJ),
        FJ = JJ => JJ.filter((JJ => JJ !== cJ));
      return {
        withFeatures: null === ZJ ? [...JJ.withFeatures, cJ] : FJ(JJ.withFeatures),
        withoutFeatures: "with" === ZJ ? [...JJ.withoutFeatures, cJ] : FJ(JJ.withoutFeatures)
      }
    }
    const mJ = "section",
      QJ = "sort",
      EJ = "filters",
      VJ = "q",
      KJ = "banned",
      yJ = "popular",
      SJ = "strict";

    function IJ(JJ) {
      var cJ, ZJ, UJ;
      const XJ = JJ.get(mJ),
        AJ = (null !== (cJ = JJ.get(EJ)) && void 0 !== cJ ? cJ : SJ).split(","),
        qJ = JJ.get(KJ);
      return {
        section: "favourites" === XJ || "mine" === XJ ? XJ : "explore",
        sort: null !== (ZJ = FJ.t.find((cJ => cJ === JJ.get(QJ)))) && void 0 !== ZJ ? ZJ : yJ,
        withFeatures: nJ.filter((JJ => AJ.includes(JJ) && !AJ.includes(`-${JJ}`))),
        withoutFeatures: nJ.filter((JJ => AJ.includes(`-${JJ}`))),
        searchQuery: (null === (UJ = JJ.get(VJ)) || void 0 === UJ ? void 0 : UJ.slice(0, FJ.E)) || null,
        pageNumber: (0, eJ.h)(JJ.get(eJ.e)),
        banned: "only" === qJ ? "with" : "include" === qJ ? null : "without"
      }
    }

    function MJ(JJ, cJ) {
      var ZJ;
      const FJ = gJ(cJ);
      (0, eJ.l)(JJ, mJ, "explore" === cJ.section ? null : cJ.section), (0, eJ.l)(JJ, QJ, cJ.sort === yJ ? null : cJ.sort), (0, eJ.l)(JJ, EJ, FJ === SJ ? null : FJ), (0, eJ.l)(JJ, VJ, cJ.searchQuery), (0, eJ.l)(JJ, KJ, null !== (ZJ = rJ(cJ.banned)) && void 0 !== ZJ ? ZJ : null), (0, eJ.m)(JJ, cJ.pageNumber)
    }

    function bJ(JJ) {
      const cJ = new URLSearchParams;
      return MJ(cJ, {
        section: "explore",
        sort: yJ,
        withFeatures: "strict" === JJ ? [JJ] : [JJ, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${XJ}?${cJ.toString()}`
    }

    function wJ(JJ) {
      return gJ(JJ) === SJ
    }

    function WJ(JJ) {
      return null !== JJ.searchQuery || "with" === JJ.banned || gJ(JJ) !== SJ
    }

    function gJ(JJ) {
      return nJ.flatMap((cJ => {
        const ZJ = fJ(JJ, cJ);
        return "with" === ZJ ? [cJ] : "without" === ZJ ? [`-${cJ}`] : []
      })).join(",")
    }
    const HJ = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      PJ = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function kJ(JJ) {
      return Math.round(100 * Math.max(0, 1 - 1 / JJ))
    }

    function pJ(JJ, cJ, ZJ, UJ) {
      const eJ = [];
      JJ.isBanned && eJ.push({
        tone: "warning",
        text: UJ("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: XJ
      } = JJ;
      if (null === JJ.brokenError || XJ && !XJ.error || eJ.push({
          tone: "warning",
          text: UJ("shaderPackListing:ownerBroken"),
          detail: JJ.brokenError
        }), null !== XJ && void 0 !== XJ && XJ.error) eJ.push({
        tone: "warning",
        text: UJ(cJ ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FJ.j)(XJ.error) ? null : XJ.error
      });
      else if (XJ) {
        const JJ = null === XJ.renderNotBefore ? 0 : XJ.renderNotBefore - ZJ,
          FJ = String(Math.ceil(JJ / 6e4)),
          AJ = UJ(cJ ? JJ > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : JJ > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FJ
          });
        eJ.push({
          tone: "info",
          text: AJ,
          detail: null
        })
      }
      return JJ.listed || eJ.push({
        tone: "info",
        text: UJ("shaderPackListing:ownerUnlisted"),
        detail: null
      }), eJ
    }

    function dJ(JJ) {
      return Math.max(1, Math.round(JJ / 1024))
    }

    function zJ(JJ, cJ, ZJ) {
      return JJ instanceof UJ.b && JJ.errorMessageForUser ? JJ.errorMessageForUser : cJ(ZJ)
    }
  },
  5910: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(29);

    function eJ(JJ, cJ) {
      var ZJ;
      const [eJ, XJ] = (0, FJ.useState)(null !== (ZJ = UJ.j.getItem(JJ)) && void 0 !== ZJ ? ZJ : cJ);
      return [eJ, cJ => {
        UJ.j.setItem(JJ, cJ), XJ(cJ)
      }]
    }
  },
  6004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(29);
    const UJ = "shaderPack";
    async function eJ() {
      var JJ;
      let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (JJ = await FJ.g.getItem(UJ, cJ)) && void 0 !== JJ ? JJ : null
    }
  },
  5889: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => FJ,
      C: () => DJ,
      E: () => YJ,
      G: () => vJ,
      I: () => hJ,
      L: () => jJ,
      b: () => sJ,
      f: () => GJ,
      i: () => nJ,
      j: () => rJ,
      l: () => QJ,
      n: () => qJ,
      o: () => UJ,
      q: () => mJ,
      t: () => eJ,
      u: () => AJ,
      x: () => XJ
    });
    const FJ = ["forest", "desert", "water", "night", "cave"];
    const UJ = {
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
      eJ = ["popular", "updated", "newest"],
      XJ = 3,
      AJ = 32,
      qJ = 300;

    function jJ(JJ, cJ) {
      return JJ.slice(0, cJ).replace(/[\uD800-\uDBFF]$/, "")
    }
    const YJ = 64,
      hJ = 512,
      DJ = 18e5;
    const sJ = "Bloxdhub",
      nJ = "https://bloxdhub.com/shaders";

    function GJ(JJ) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(JJ)}`
    }
    const fJ = "Screenshot generation failed.",
      xJ = "Its screenshots couldn't be generated:";

    function rJ(JJ) {
      var cJ;
      return JJ === fJ || null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.startsWith(xJ)) && void 0 !== cJ && cJ
    }

    function vJ(JJ, cJ) {
      return `shaderPacks/${JJ}/${cJ}.json`
    }

    function mJ(JJ, cJ, ZJ, FJ) {
      return null === cJ.renderId ? QJ(JJ, cJ.baselineVersion, ZJ, FJ) : `${JJ}/${function(JJ,cJ,ZJ,FJ){return`shaderPacks/${JJ}/${cJ}/${ZJ}-${FJ}.webp`}(cJ.packId,cJ.renderId,ZJ,FJ)}`
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      return `${JJ}/${function(JJ,cJ,ZJ){return`shaderPacks/baseline/${JJ}/${cJ}-${ZJ}.webp`}(cJ,ZJ,FJ)}`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);