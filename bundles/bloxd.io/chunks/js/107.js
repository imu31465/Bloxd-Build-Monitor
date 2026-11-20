export const id = 107;
export const ids = [107, 124];
export const modules = {
  4635: (UU, RU, gU) => {
    var tU = gU(4642);

    function pU() {}

    function EU() {}
    EU.resetWarningCache = pU, UU.exports = function() {
      function UU(UU, RU, gU, pU, EU, PU) {
        if (PU !== tU) {
          var TU = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw TU.name = "Invariant Violation", TU
        }
      }

      function RU() {
        return UU
      }
      UU.isRequired = UU;
      var gU = {
        array: UU,
        bigint: UU,
        bool: UU,
        func: UU,
        number: UU,
        object: UU,
        string: UU,
        symbol: UU,
        any: UU,
        arrayOf: RU,
        element: UU,
        elementType: UU,
        instanceOf: RU,
        node: UU,
        objectOf: RU,
        oneOf: RU,
        oneOfType: RU,
        shape: RU,
        exact: RU,
        checkPropTypes: EU,
        resetWarningCache: pU
      };
      return gU.PropTypes = gU, gU
    }
  },
  4626: (UU, RU, gU) => {
    UU.exports = gU(4635)()
  },
  4642: UU => {
    UU.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6263: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ShaderPackPublishForm: () => fU
    });
    var tU = gU(56),
      pU = gU(6222),
      EU = gU(193),
      PU = gU(6265),
      TU = gU(1049),
      qU = gU(1412),
      KU = gU(1602),
      cU = gU(1112),
      GU = gU(6270),
      jU = gU(6292),
      uU = gU(1461),
      CU = gU(1181),
      hU = gU(6295),
      QU = gU(6321),
      eU = gU(6220),
      WU = gU(1090);

    function fU(UU) {
      var RU, gU, GU;
      let {
        existing: fU,
        onPublished: mU
      } = UU;
      const {
        t: JU
      } = (0, CU.B)(), {
        userContext: wU,
        isUserContextUpdating: nU
      } = (0, cU.e)(), [bU, oU] = (0, tU.useState)(null), [ZU, aU] = (0, tU.useState)(0), [YU, BU] = (0, tU.useState)(null !== (RU = null === fU || void 0 === fU ? void 0 : fU.name) && void 0 !== RU ? RU : ""), VU = (0, tU.useRef)(YU), rU = (0, tU.useRef)(""), XU = UU => {
        VU.current = UU, BU(UU)
      }, [vU, dU] = (0, tU.useState)(null !== (gU = null === fU || void 0 === fU ? void 0 : fU.description) && void 0 !== gU ? gU : ""), HU = (0, tU.useRef)(vU), SU = (0, tU.useRef)(""), sU = UU => {
        HU.current = UU, dU(UU)
      }, [yU, kU] = (0, tU.useState)(!1), {
        loading: FU,
        error: iU,
        setError: AU,
        onFiles: zU
      } = (0, jU.g)((async UU => {
        const RU = await (0, hU.loadPageShaderPackCompiler)();
        if (!RU) return void AU(JU("shaderPack:compilerUnavailable"));
        const gU = await (0, QU.f)(RU, UU.files);
        if (oU({
            pack: UU,
            validation: gU,
            sourceBytes: (0, PU.x)(UU.files)
          }), !fU) {
          var tU;
          if ("" !== VU.current.trim() && VU.current !== rU.current || (rU.current = (0, pU.P)(UU.manifest.name.trim(), pU.z), XU(rU.current)), "" === HU.current.trim() || HU.current === SU.current) SU.current = (0, pU.P)((null !== (tU = UU.manifest.description) && void 0 !== tU ? tU : "").trim(), pU.r), sU(SU.current);
          aU((UU => UU + 1))
        }
      })), MU = !nU && !wU.isLoggedIn() && !EU.b.offlineMode, DU = YU.trim(), LU = DU.length < pU.A, NU = null !== bU && !1 !== (null === (GU = bU.validation) || void 0 === GU ? void 0 : GU.ok) && !FU && !LU && !MU && !nU;
      return (0, WU.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, WU.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: fU ? JU("shaderPackListing:uploadIntro", {
            minutes: String(pU.I / 6e4)
          }) : JU("shaderPackListing:publishIntro")
        }), (0, WU.jsx)(IU, {}), MU && (0, WU.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: JU("shaderPackListing:publishNeedsLogin")
        }), (0, WU.jsx)(jU.e, {
          busy: FU,
          disabled: FU || yU,
          onFiles: UU => {
            oU(null), zU(UU)
          }
        }), bU && (0, WU.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, WU.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: bU.pack.manifest.name
          }), (0, WU.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [JU("shaderPackListing:sizeValue", {
              kilobytes: String((0, eU.L)(bU.sourceBytes))
            }), " \xb7", " ", JU("shaderPackListing:filesValue", {
              files: String(bU.pack.files.length)
            })]
          }), (0, WU.jsx)(xU, {
            picked: bU
          })]
        }), !fU && (0, WU.jsxs)(WU.Fragment, {
          children: [(0, WU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, WU.jsx)("span", {
              children: JU("general:name")
            }), (0, WU.jsx)(KU.d, {
              className: "ShaderPackPublishInput",
              defaultValue: YU,
              maxLength: pU.z,
              onValueChange: XU
            }, ZU), bU && LU && (0, WU.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: JU("shaderPackListing:nameTooShort", {
                min: String(pU.A)
              })
            })]
          }), (0, WU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, WU.jsx)("span", {
              children: JU("general:description")
            }), (0, WU.jsx)(KU.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: vU,
              maxLength: pU.r,
              onValueChange: sU,
              useTextarea: !0
            }, ZU)]
          })]
        }), iU && (0, WU.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: iU
        }), (0, WU.jsxs)(qU.j, {
          className: "ShaderPackPublishButton",
          disabled: !NU,
          loading: yU,
          onClick: () => {
            !async function() {
              var UU;
              if (!bU) return;
              const {
                name: RU,
                description: gU
              } = null !== fU && void 0 !== fU ? fU : {
                name: DU,
                description: vU.trim()
              }, tU = {
                packId: null !== (UU = null === fU || void 0 === fU ? void 0 : fU.packId) && void 0 !== UU ? UU : null,
                name: RU,
                description: gU,
                apiVersion: bU.pack.manifest.apiVersion,
                files: (0, PU.t)(bU.pack.files),
                keepCircleShadows: !0 === bU.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(tU)).byteLength > 1024 * pU.O) AU(JU("shaderPackListing:publishTooBig", {
                kilobytes: String(pU.O)
              }));
              else {
                kU(!0), AU(null);
                try {
                  mU(await uU.c.publishShaderPack(wU, tU))
                } catch (EU) {
                  console.error("Failed to publish the shader pack", EU), AU((0, eU.q)(EU, JU, "shaderPackListing:publishFailed"))
                } finally {
                  kU(!1)
                }
              }
            }()
          },
          children: [(0, WU.jsx)(TU.c, {
            name: "upload"
          }), " ", JU(fU ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function xU(UU) {
      let {
        picked: RU
      } = UU;
      const {
        t: gU
      } = (0, CU.B)(), {
        validation: tU
      } = RU;
      return null === tU ? (0, WU.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: gU("shaderPackListing:publishUnchecked")
      }) : tU.ok ? (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, WU.jsx)(TU.c, {
            name: "circle-check"
          }), " ", gU("shaderPackListing:publishReady")]
        }), tU.offInStrict.length > 0 && (0, WU.jsxs)(WU.Fragment, {
          children: [(0, WU.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, WU.jsx)(TU.c, {
              name: "triangle-exclamation"
            }), " ", gU("shaderPack:offInStrict")]
          }), (0, WU.jsx)(GU.b, {
            diagnostics: tU.offInStrict,
            t: gU
          })]
        })]
      }) : (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, WU.jsx)(TU.c, {
            name: "triangle-exclamation"
          }), " ", gU("shaderPackListing:publishHasErrors")]
        }), (0, WU.jsx)(GU.b, {
          diagnostics: tU.errors,
          more: tU.moreErrors,
          t: gU
        })]
      })
    }
    const mU = "\0";

    function IU() {
      const {
        t: UU
      } = (0, CU.B)(), [RU, gU] = UU("shaderPackListing:bloxdhubHelp", {
        site: mU
      }).split(mU);
      return (0, WU.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [RU, (0, WU.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: pU.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: pU.e
        }), gU]
      })
    }
  },
  6255: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => cU
    });
    var tU = gU(1475),
      pU = gU(1412),
      EU = gU(1181),
      PU = gU(6263),
      TU = gU(6235),
      qU = gU(6220),
      KU = gU(1090);

    function cU() {
      const {
        t: UU
      } = (0, EU.B)(), RU = (0, tU.useNavigatePreserveSearch)();
      return (0, TU.d)(), (0, KU.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, KU.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, KU.jsx)(pU.d, {
            onClick: () => {
              RU(qU.Q)
            },
            children: UU("shaderPackListing:backToPacks")
          })
        }), (0, KU.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: UU("shaderPackListing:publishTitle")
        }), (0, KU.jsx)(PU.ShaderPackPublishForm, {
          existing: null,
          onPublished: UU => {
            RU((0, qU.T)(UU.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6235: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      e: () => uU,
      i: () => GU,
      j: () => CU
    });
    var tU = gU(56),
      pU = gU(6222),
      EU = gU(1461),
      PU = gU(6220),
      TU = gU(6239),
      qU = gU(1112);
    const KU = "shaderPackListingView",
      cU = "shaderPackListingFilterOpen";

    function GU() {
      var UU;
      const [RU, gU] = (0, TU.b)(KU, pU.E[0]);
      return [null !== (UU = pU.E.find((UU => UU === RU))) && void 0 !== UU ? UU : pU.E[0], gU]
    }

    function jU() {
      (0, tU.useEffect)((() => () => {
        window.location.pathname.startsWith(PU.Q) || (0, PU.g)()
      }), [])
    }

    function uU() {
      return (0, TU.b)(cU, !1)
    }

    function CU() {
      const {
        userContext: UU,
        isUserContextUpdating: RU
      } = (0, qU.e)(), [gU, pU] = (0, tU.useState)(null), PU = (0, tU.useRef)(new Set);

      function TU(UU, RU) {
        pU((gU => {
          const tU = new Set(gU);
          return RU ? tU.add(UU) : tU.delete(UU), tU
        }))
      }
      return (0, tU.useEffect)((() => {
        if (RU) return;
        let gU = !1;
        return EU.c.getFavouriteShaderPacks(UU).then((UU => {
          gU || pU(new Set(UU))
        })).catch((UU => {
          console.error("Failed to get favourite shader packs", UU), gU || pU(new Set)
        })), () => {
          gU = !0
        }
      }), [UU, RU]), {
        isFavourite: UU => null === gU ? null : gU.has(UU),
        toggle: function(RU) {
          if (null === gU || PU.current.has(RU)) return;
          PU.current.add(RU);
          const tU = !gU.has(RU);
          TU(RU, tU), (tU ? EU.c.favouriteShaderPack(UU, RU) : EU.c.unfavouriteShaderPack(UU, RU)).catch((UU => {
            console.error("Failed to change a favourite shader pack", UU), TU(RU, !tU)
          })).finally((() => {
            PU.current.delete(RU)
          }))
        }
      }
    }
  },
  6220: (UU, RU, gU) => {
    gU.d(RU, {
      $: () => fU,
      C: () => cU,
      E: () => aU,
      H: () => hU,
      L: () => HU,
      O: () => vU,
      Q: () => PU,
      S: () => dU,
      T: () => qU,
      U: () => TU,
      X: () => rU,
      Y: () => XU,
      c: () => WU,
      cb: () => ZU,
      d: () => nU,
      e: () => QU,
      g: () => jU,
      h: () => GU,
      k: () => YU,
      o: () => uU,
      p: () => BU,
      q: () => SU,
      t: () => CU,
      x: () => eU,
      y: () => oU
    });
    var tU = gU(6222),
      pU = gU(165),
      EU = gU(4222);
    const PU = "/shader-packs",
      TU = `${PU}/publish`;

    function qU(UU) {
      return `${PU}/${encodeURIComponent(UU)}`
    }
    let KU = null;

    function cU(UU) {
      KU = UU
    }

    function GU() {
      return KU
    }

    function jU() {
      KU = null
    }

    function uU(UU) {
      return UU.playerHasRank("developer") || UU.playerHasRank("admin")
    }
    const CU = ["terrain", "water", "models", "sunShadows", "strict"],
      hU = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function QU(UU, RU) {
      return UU.withFeatures.includes(RU) ? "with" : UU.withoutFeatures.includes(RU) ? "without" : null
    }

    function eU(UU) {
      return null === UU ? "with" : "with" === UU ? "without" : null
    }

    function WU(UU) {
      return "with" === UU ? "only" : null === UU ? "include" : void 0
    }

    function fU(UU, RU) {
      const gU = QU(UU, RU),
        tU = UU => UU.filter((UU => UU !== RU));
      return {
        withFeatures: null === gU ? [...UU.withFeatures, RU] : tU(UU.withFeatures),
        withoutFeatures: "with" === gU ? [...UU.withoutFeatures, RU] : tU(UU.withoutFeatures)
      }
    }
    const xU = "section",
      mU = "sort",
      IU = "filters",
      JU = "q",
      wU = "banned",
      nU = "popular",
      bU = "strict";

    function oU(UU) {
      var RU, gU, pU;
      const PU = UU.get(xU),
        TU = (null !== (RU = UU.get(IU)) && void 0 !== RU ? RU : bU).split(","),
        qU = UU.get(wU);
      return {
        section: "favourites" === PU || "mine" === PU ? PU : "explore",
        sort: null !== (gU = tU.x.find((RU => RU === UU.get(mU)))) && void 0 !== gU ? gU : nU,
        withFeatures: CU.filter((UU => TU.includes(UU) && !TU.includes(`-${UU}`))),
        withoutFeatures: CU.filter((UU => TU.includes(`-${UU}`))),
        searchQuery: (null === (pU = UU.get(JU)) || void 0 === pU ? void 0 : pU.slice(0, tU.L)) || null,
        pageNumber: (0, EU.h)(UU.get(EU.e)),
        banned: "only" === qU ? "with" : "include" === qU ? null : "without"
      }
    }

    function ZU(UU, RU) {
      var gU;
      const tU = VU(RU);
      (0, EU.i)(UU, xU, "explore" === RU.section ? null : RU.section), (0, EU.i)(UU, mU, RU.sort === nU ? null : RU.sort), (0, EU.i)(UU, IU, tU === bU ? null : tU), (0, EU.i)(UU, JU, RU.searchQuery), (0, EU.i)(UU, wU, null !== (gU = WU(RU.banned)) && void 0 !== gU ? gU : null), (0, EU.l)(UU, RU.pageNumber)
    }

    function aU(UU) {
      const RU = new URLSearchParams;
      return ZU(RU, {
        section: "explore",
        sort: nU,
        withFeatures: "strict" === UU ? [UU] : [UU, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${PU}?${RU.toString()}`
    }

    function YU(UU) {
      return VU(UU) === bU
    }

    function BU(UU) {
      return null !== UU.searchQuery || "with" === UU.banned || VU(UU) !== bU
    }

    function VU(UU) {
      return CU.flatMap((RU => {
        const gU = QU(UU, RU);
        return "with" === gU ? [RU] : "without" === gU ? [`-${RU}`] : []
      })).join(",")
    }
    const rU = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      XU = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function vU(UU) {
      return Math.round(100 * Math.max(0, 1 - 1 / UU))
    }

    function dU(UU, RU, gU, pU) {
      const EU = [];
      UU.isBanned && EU.push({
        tone: "warning",
        text: pU("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: PU
      } = UU;
      if (null === UU.brokenError || PU && !PU.error || EU.push({
          tone: "warning",
          text: pU("shaderPackListing:ownerBroken"),
          detail: UU.brokenError
        }), null !== PU && void 0 !== PU && PU.error) EU.push({
        tone: "warning",
        text: pU(RU ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, tU.m)(PU.error) ? null : PU.error
      });
      else if (PU) {
        const UU = null === PU.renderNotBefore ? 0 : PU.renderNotBefore - gU,
          tU = String(Math.ceil(UU / 6e4)),
          TU = pU(RU ? UU > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : UU > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: tU
          });
        EU.push({
          tone: "info",
          text: TU,
          detail: null
        })
      }
      return UU.listed || EU.push({
        tone: "info",
        text: pU("shaderPackListing:ownerUnlisted"),
        detail: null
      }), EU
    }

    function HU(UU) {
      return Math.max(1, Math.round(UU / 1024))
    }

    function SU(UU, RU, gU) {
      return UU instanceof pU.e && UU.errorMessageForUser ? UU.errorMessageForUser : RU(gU)
    }
  },
  6239: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(56),
      pU = gU(34);

    function EU(UU, RU) {
      var gU;
      const [EU, PU] = (0, tU.useState)(null !== (gU = pU.k.getItem(UU)) && void 0 !== gU ? gU : RU);
      return [EU, RU => {
        pU.k.setItem(UU, RU), PU(RU)
      }]
    }
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  },
  6222: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => PU,
      E: () => tU,
      I: () => jU,
      L: () => cU,
      M: () => fU,
      O: () => GU,
      P: () => KU,
      e: () => uU,
      h: () => hU,
      k: () => CU,
      m: () => WU,
      q: () => mU,
      r: () => qU,
      s: () => pU,
      v: () => xU,
      x: () => EU,
      z: () => TU
    });
    const tU = ["forest", "desert", "water", "night", "cave"];
    const pU = {
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
      EU = ["popular", "updated", "newest"],
      PU = 3,
      TU = 32,
      qU = 300;

    function KU(UU, RU) {
      return UU.slice(0, RU).replace(/[\uD800-\uDBFF]$/, "")
    }
    const cU = 64,
      GU = 512,
      jU = 18e5;
    const uU = "Bloxdhub",
      CU = "https://bloxdhub.com/shaders";

    function hU(UU) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(UU)}`
    }
    const QU = "Screenshot generation failed.",
      eU = "Its screenshots couldn't be generated:";

    function WU(UU) {
      var RU;
      return UU === QU || null !== (RU = null === UU || void 0 === UU ? void 0 : UU.startsWith(eU)) && void 0 !== RU && RU
    }

    function fU(UU, RU) {
      return `shaderPacks/${UU}/${RU}.json`
    }

    function xU(UU, RU, gU, tU) {
      return null === RU.renderId ? mU(UU, RU.baselineVersion, gU, tU) : `${UU}/${function(UU,RU,gU,tU){return`shaderPacks/${UU}/${RU}/${gU}-${tU}.webp`}(RU.packId,RU.renderId,gU,tU)}`
    }

    function mU(UU, RU, gU, tU) {
      return `${UU}/${function(UU,RU,gU){return`shaderPacks/baseline/${UU}/${RU}-${gU}.webp`}(RU,gU,tU)}`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);