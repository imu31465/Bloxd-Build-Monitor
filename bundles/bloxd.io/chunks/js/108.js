export const id = 108;
export const ids = [108, 125];
export const modules = {
  4444: (TT, oT, IT) => {
    var iT = IT(4451);

    function zT() {}

    function kT() {}
    kT.resetWarningCache = zT, TT.exports = function() {
      function TT(TT, oT, IT, zT, kT, WT) {
        if (WT !== iT) {
          var XT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw XT.name = "Invariant Violation", XT
        }
      }

      function oT() {
        return TT
      }
      TT.isRequired = TT;
      var IT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: oT,
        element: TT,
        elementType: TT,
        instanceOf: oT,
        node: TT,
        objectOf: oT,
        oneOf: oT,
        oneOfType: oT,
        shape: oT,
        exact: oT,
        checkPropTypes: kT,
        resetWarningCache: zT
      };
      return IT.PropTypes = IT, IT
    }
  },
  4442: (TT, oT, IT) => {
    TT.exports = IT(4444)()
  },
  4451: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6085: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ShaderPackPublishForm: () => gT
    });
    var iT = IT(46),
      zT = IT(6045),
      kT = IT(195),
      WT = IT(6092),
      XT = IT(1055),
      BT = IT(1408),
      FT = IT(1624),
      ST = IT(1110),
      DT = IT(6099),
      LT = IT(6107),
      xT = IT(1451),
      cT = IT(1171),
      KT = IT(6114),
      MT = IT(6146),
      rT = IT(6042),
      AT = IT(1083);

    function gT(TT) {
      var oT, IT, DT;
      let {
        existing: gT,
        onPublished: wT
      } = TT;
      const {
        t: eT
      } = (0, cT.t)(), {
        userContext: RT,
        isUserContextUpdating: uT
      } = (0, ST.b)(), [vT, ET] = (0, iT.useState)(null), [fT, CT] = (0, iT.useState)(0), [jT, JT] = (0, iT.useState)(null !== (oT = null === gT || void 0 === gT ? void 0 : gT.name) && void 0 !== oT ? oT : ""), UT = (0, iT.useRef)(jT), aT = (0, iT.useRef)(""), YT = TT => {
        UT.current = TT, JT(TT)
      }, [QT, OT] = (0, iT.useState)(null !== (IT = null === gT || void 0 === gT ? void 0 : gT.description) && void 0 !== IT ? IT : ""), HT = (0, iT.useRef)(QT), nT = (0, iT.useRef)(""), qT = TT => {
        HT.current = TT, OT(TT)
      }, [ZT, lT] = (0, iT.useState)(!1), {
        loading: sT,
        error: tT,
        setError: GT,
        onFiles: pT
      } = (0, LT.d)((async TT => {
        const oT = await (0, KT.loadPageShaderPackCompiler)();
        if (!oT) return void GT(eT("shaderPack:compilerUnavailable"));
        const IT = await (0, MT.c)(oT, TT.files);
        if (ET({
            pack: TT,
            validation: IT,
            sourceBytes: (0, WT.u)(TT.files)
          }), !gT) {
          var iT;
          if ("" !== UT.current.trim() && UT.current !== aT.current || (aT.current = (0, zT.Y)(TT.manifest.name.trim(), zT.E), YT(aT.current)), "" === HT.current.trim() || HT.current === nT.current) nT.current = (0, zT.Y)((null !== (iT = TT.manifest.description) && void 0 !== iT ? iT : "").trim(), zT.s), qT(nT.current);
          CT((TT => TT + 1))
        }
      })), bT = !uT && !RT.isLoggedIn() && !kT.d.offlineMode, yT = jT.trim(), NT = yT.length < zT.I, PT = null !== vT && !1 !== (null === (DT = vT.validation) || void 0 === DT ? void 0 : DT.ok) && !sT && !NT && !bT && !uT;
      return (0, AT.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, AT.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: gT ? eT("shaderPackListing:uploadIntro", {
            minutes: String(zT.N / 6e4)
          }) : eT("shaderPackListing:publishIntro")
        }), (0, AT.jsx)(mT, {}), bT && (0, AT.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: eT("shaderPackListing:publishNeedsLogin")
        }), (0, AT.jsx)(LT.b, {
          busy: sT,
          disabled: sT || ZT,
          onFiles: TT => {
            ET(null), pT(TT)
          }
        }), vT && (0, AT.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, AT.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: vT.pack.manifest.name
          }), (0, AT.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [eT("shaderPackListing:sizeValue", {
              kilobytes: String((0, rT.P)(vT.sourceBytes))
            }), " \xb7", " ", eT("shaderPackListing:filesValue", {
              files: String(vT.pack.files.length)
            })]
          }), (0, AT.jsx)(hT, {
            picked: vT
          })]
        }), !gT && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, AT.jsx)("span", {
              children: eT("general:name")
            }), (0, AT.jsx)(FT.e, {
              className: "ShaderPackPublishInput",
              defaultValue: jT,
              maxLength: zT.E,
              onValueChange: YT
            }, fT), vT && NT && (0, AT.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: eT("shaderPackListing:nameTooShort", {
                min: String(zT.I)
              })
            })]
          }), (0, AT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, AT.jsx)("span", {
              children: eT("general:description")
            }), (0, AT.jsx)(FT.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: QT,
              maxLength: zT.s,
              onValueChange: qT,
              useTextarea: !0
            }, fT)]
          })]
        }), tT && (0, AT.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: tT
        }), (0, AT.jsxs)(BT.m, {
          className: "ShaderPackPublishButton",
          disabled: !PT,
          loading: ZT,
          onClick: () => {
            !async function() {
              var TT;
              if (!vT) return;
              const {
                name: oT,
                description: IT
              } = null !== gT && void 0 !== gT ? gT : {
                name: yT,
                description: QT.trim()
              }, iT = {
                packId: null !== (TT = null === gT || void 0 === gT ? void 0 : gT.packId) && void 0 !== TT ? TT : null,
                name: oT,
                description: IT,
                apiVersion: vT.pack.manifest.apiVersion,
                files: (0, WT.t)(vT.pack.files),
                keepCircleShadows: !0 === vT.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(iT)).byteLength > 1024 * zT.U) GT(eT("shaderPackListing:publishTooBig", {
                kilobytes: String(zT.U)
              }));
              else {
                lT(!0), GT(null);
                try {
                  wT(await xT.e.publishShaderPack(RT, iT))
                } catch (kT) {
                  console.error("Failed to publish the shader pack", kT), GT((0, rT.A)(kT, eT, "shaderPackListing:publishFailed"))
                } finally {
                  lT(!1)
                }
              }
            }()
          },
          children: [(0, AT.jsx)(XT.e, {
            name: "upload"
          }), " ", eT(gT ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function hT(TT) {
      let {
        picked: oT
      } = TT;
      const {
        t: IT
      } = (0, cT.t)(), {
        validation: iT
      } = oT;
      return null === iT ? (0, AT.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: IT("shaderPackListing:publishUnchecked")
      }) : iT.ok ? (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, AT.jsx)(XT.e, {
            name: "circle-check"
          }), " ", IT("shaderPackListing:publishReady")]
        }), iT.offInStrict.length > 0 && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, AT.jsx)(XT.e, {
              name: "triangle-exclamation"
            }), " ", IT("shaderPack:offInStrict")]
          }), (0, AT.jsx)(DT.e, {
            diagnostics: iT.offInStrict,
            t: IT
          })]
        })]
      }) : (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, AT.jsx)(XT.e, {
            name: "triangle-exclamation"
          }), " ", IT("shaderPackListing:publishHasErrors")]
        }), (0, AT.jsx)(DT.e, {
          diagnostics: iT.errors,
          more: iT.moreErrors,
          t: IT
        })]
      })
    }
    const wT = "\0";

    function mT() {
      const {
        t: TT
      } = (0, cT.t)(), [oT, IT] = TT("shaderPackListing:bloxdhubHelp", {
        site: wT
      }).split(wT);
      return (0, AT.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [oT, (0, AT.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: zT.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: zT.c
        }), IT]
      })
    }
  },
  6076: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => ST
    });
    var iT = IT(1468),
      zT = IT(1408),
      kT = IT(1171),
      WT = IT(6085),
      XT = IT(6059),
      BT = IT(6042),
      FT = IT(1083);

    function ST() {
      const {
        t: TT
      } = (0, kT.t)(), oT = (0, iT.useNavigatePreserveSearch)();
      return (0, XT.b)(), (0, FT.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, FT.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, FT.jsx)(zT.c, {
            onClick: () => {
              oT(BT.V)
            },
            children: TT("shaderPackListing:backToPacks")
          })
        }), (0, FT.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: TT("shaderPackListing:publishTitle")
        }), (0, FT.jsx)(WT.ShaderPackPublishForm, {
          existing: null,
          onPublished: TT => {
            oT((0, BT.ab)(TT.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6059: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      e: () => xT,
      g: () => DT,
      i: () => cT
    });
    var iT = IT(46),
      zT = IT(6045),
      kT = IT(1451),
      WT = IT(6042),
      XT = IT(6062),
      BT = IT(1110);
    const FT = "shaderPackListingView",
      ST = "shaderPackListingFilterOpen";

    function DT() {
      var TT;
      const [oT, IT] = (0, XT.c)(FT, zT.J[0]);
      return [null !== (TT = zT.J.find((TT => TT === oT))) && void 0 !== TT ? TT : zT.J[0], IT]
    }

    function LT() {
      (0, iT.useEffect)((() => () => {
        window.location.pathname.startsWith(WT.V) || (0, WT.m)()
      }), [])
    }

    function xT() {
      return (0, XT.c)(ST, !1)
    }

    function cT() {
      const {
        userContext: TT,
        isUserContextUpdating: oT
      } = (0, BT.b)(), [IT, zT] = (0, iT.useState)(null), WT = (0, iT.useRef)(new Set);

      function XT(TT, oT) {
        zT((IT => {
          const iT = new Set(IT);
          return oT ? iT.add(TT) : iT.delete(TT), iT
        }))
      }
      return (0, iT.useEffect)((() => {
        if (oT) return;
        let IT = !1;
        return kT.e.getFavouriteShaderPacks(TT).then((TT => {
          IT || zT(new Set(TT))
        })).catch((TT => {
          console.error("Failed to get favourite shader packs", TT), IT || zT(new Set)
        })), () => {
          IT = !0
        }
      }), [TT, oT]), {
        isFavourite: TT => null === IT ? null : IT.has(TT),
        toggle: function(oT) {
          if (null === IT || WT.current.has(oT)) return;
          WT.current.add(oT);
          const iT = !IT.has(oT);
          XT(oT, iT), (iT ? kT.e.favouriteShaderPack(TT, oT) : kT.e.unfavouriteShaderPack(TT, oT)).catch((TT => {
            console.error("Failed to change a favourite shader pack", TT), XT(oT, !iT)
          })).finally((() => {
            WT.current.delete(oT)
          }))
        }
      }
    }
  },
  6042: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => nT,
      D: () => cT,
      G: () => rT,
      I: () => ET,
      K: () => ST,
      L: () => CT,
      N: () => KT,
      P: () => HT,
      S: () => QT,
      V: () => WT,
      Y: () => OT,
      ab: () => BT,
      d: () => AT,
      db: () => XT,
      f: () => uT,
      fb: () => aT,
      i: () => MT,
      jb: () => YT,
      kb: () => gT,
      m: () => LT,
      mb: () => fT,
      p: () => DT,
      t: () => jT,
      u: () => xT,
      x: () => JT
    });
    var iT = IT(6045),
      zT = IT(159),
      kT = IT(4074);
    const WT = "/shader-packs",
      XT = `${WT}/publish`;

    function BT(TT) {
      return `${WT}/${encodeURIComponent(TT)}`
    }
    let FT = null;

    function ST(TT) {
      FT = TT
    }

    function DT() {
      return FT
    }

    function LT() {
      FT = null
    }

    function xT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const cT = ["terrain", "water", "models", "sunShadows", "strict"],
      KT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function MT(TT, oT) {
      return TT.withFeatures.includes(oT) ? "with" : TT.withoutFeatures.includes(oT) ? "without" : null
    }

    function rT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function AT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function gT(TT, oT) {
      const IT = MT(TT, oT),
        iT = TT => TT.filter((TT => TT !== oT));
      return {
        withFeatures: null === IT ? [...TT.withFeatures, oT] : iT(TT.withFeatures),
        withoutFeatures: "with" === IT ? [...TT.withoutFeatures, oT] : iT(TT.withoutFeatures)
      }
    }
    const hT = "section",
      wT = "sort",
      mT = "filters",
      eT = "q",
      RT = "banned",
      uT = "popular",
      vT = "strict";

    function ET(TT) {
      var oT, IT, zT;
      const WT = TT.get(hT),
        XT = (null !== (oT = TT.get(mT)) && void 0 !== oT ? oT : vT).split(","),
        BT = TT.get(RT);
      return {
        section: "favourites" === WT || "mine" === WT ? WT : "explore",
        sort: null !== (IT = iT.A.find((oT => oT === TT.get(wT)))) && void 0 !== IT ? IT : uT,
        withFeatures: cT.filter((TT => XT.includes(TT) && !XT.includes(`-${TT}`))),
        withoutFeatures: cT.filter((TT => XT.includes(`-${TT}`))),
        searchQuery: (null === (zT = TT.get(eT)) || void 0 === zT ? void 0 : zT.slice(0, iT.Q)) || null,
        pageNumber: (0, kT.i)(TT.get(kT.e)),
        banned: "only" === BT ? "with" : "include" === BT ? null : "without"
      }
    }

    function fT(TT, oT) {
      var IT;
      const iT = UT(oT);
      (0, kT.l)(TT, hT, "explore" === oT.section ? null : oT.section), (0, kT.l)(TT, wT, oT.sort === uT ? null : oT.sort), (0, kT.l)(TT, mT, iT === vT ? null : iT), (0, kT.l)(TT, eT, oT.searchQuery), (0, kT.l)(TT, RT, null !== (IT = AT(oT.banned)) && void 0 !== IT ? IT : null), (0, kT.n)(TT, oT.pageNumber)
    }

    function CT(TT) {
      const oT = new URLSearchParams;
      return fT(oT, {
        section: "explore",
        sort: uT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${WT}?${oT.toString()}`
    }

    function jT(TT) {
      return UT(TT) === vT
    }

    function JT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || UT(TT) !== vT
    }

    function UT(TT) {
      return cT.flatMap((oT => {
        const IT = MT(TT, oT);
        return "with" === IT ? [oT] : "without" === IT ? [`-${oT}`] : []
      })).join(",")
    }
    const aT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      YT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function QT(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function OT(TT, oT, IT, zT) {
      const kT = [];
      TT.isBanned && kT.push({
        tone: "warning",
        text: zT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: WT
      } = TT;
      if (null === TT.brokenError || WT && !WT.error || kT.push({
          tone: "warning",
          text: zT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== WT && void 0 !== WT && WT.error) kT.push({
        tone: "warning",
        text: zT(oT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, iT.l)(WT.error) ? null : WT.error
      });
      else if (WT) {
        const TT = null === WT.renderNotBefore ? 0 : WT.renderNotBefore - IT,
          iT = String(Math.ceil(TT / 6e4)),
          XT = zT(oT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: iT
          });
        kT.push({
          tone: "info",
          text: XT,
          detail: null
        })
      }
      return TT.listed || kT.push({
        tone: "info",
        text: zT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), kT
    }

    function HT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function nT(TT, oT, IT) {
      return TT instanceof zT.d && TT.errorMessageForUser ? TT.errorMessageForUser : oT(IT)
    }
  },
  6062: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT
    });
    var iT = IT(46),
      zT = IT(26);

    function kT(TT, oT) {
      var IT;
      const [kT, WT] = (0, iT.useState)(null !== (IT = zT.e.getItem(TT)) && void 0 !== IT ? IT : oT);
      return [kT, oT => {
        zT.e.setItem(TT, oT), WT(oT)
      }]
    }
  },
  6158: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT
    });
    var iT = IT(26);
    const zT = "shaderPack";
    async function kT() {
      var TT;
      let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await iT.c.getItem(zT, oT)) && void 0 !== TT ? TT : null
    }
  },
  6045: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => kT,
      E: () => XT,
      I: () => WT,
      J: () => iT,
      N: () => LT,
      Q: () => ST,
      T: () => gT,
      U: () => DT,
      Y: () => FT,
      c: () => xT,
      g: () => KT,
      i: () => cT,
      l: () => AT,
      o: () => wT,
      s: () => BT,
      v: () => zT,
      y: () => hT
    });
    const iT = ["forest", "desert", "water", "night", "cave"];
    const zT = {
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
      kT = ["popular", "updated", "newest"],
      WT = 3,
      XT = 32,
      BT = 300;

    function FT(TT, oT) {
      return TT.slice(0, oT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ST = 64,
      DT = 512,
      LT = 18e5;
    const xT = "Bloxdhub",
      cT = "https://bloxdhub.com/shaders";

    function KT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const MT = "Screenshot generation failed.",
      rT = "Its screenshots couldn't be generated:";

    function AT(TT) {
      var oT;
      return TT === MT || null !== (oT = null === TT || void 0 === TT ? void 0 : TT.startsWith(rT)) && void 0 !== oT && oT
    }

    function gT(TT, oT) {
      return `shaderPacks/${TT}/${oT}.json`
    }

    function hT(TT, oT, IT, iT) {
      return null === oT.renderId ? wT(TT, oT.baselineVersion, IT, iT) : `${TT}/${function(TT,oT,IT,iT){return`shaderPacks/${TT}/${oT}/${IT}-${iT}.webp`}(oT.packId,oT.renderId,IT,iT)}`
    }

    function wT(TT, oT, IT, iT) {
      return `${TT}/${function(TT,oT,IT){return`shaderPacks/baseline/${TT}/${oT}-${IT}.webp`}(oT,IT,iT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);