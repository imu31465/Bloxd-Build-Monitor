export const id = 108;
export const ids = [108, 124];
export const modules = {
  4919: (TT, kT, cT) => {
    var lT = cT(4923);

    function MT() {}

    function KT() {}
    KT.resetWarningCache = MT, TT.exports = function() {
      function TT(TT, kT, cT, MT, KT, OT) {
        if (OT !== lT) {
          var yT = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw yT.name = "Invariant Violation", yT
        }
      }

      function kT() {
        return TT
      }
      TT.isRequired = TT;
      var cT = {
        array: TT,
        bigint: TT,
        bool: TT,
        func: TT,
        number: TT,
        object: TT,
        string: TT,
        symbol: TT,
        any: TT,
        arrayOf: kT,
        element: TT,
        elementType: TT,
        instanceOf: kT,
        node: TT,
        objectOf: kT,
        oneOf: kT,
        oneOfType: kT,
        shape: kT,
        exact: kT,
        checkPropTypes: KT,
        resetWarningCache: MT
      };
      return cT.PropTypes = cT, cT
    }
  },
  4917: (TT, kT, cT) => {
    TT.exports = cT(4919)()
  },
  4923: TT => {
    TT.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6578: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ShaderPackPublishForm: () => ST
    });
    var lT = cT(71),
      MT = cT(6550),
      KT = cT(221),
      OT = cT(6581),
      yT = cT(1061),
      fT = cT(1470),
      xT = cT(1692),
      IT = cT(1130),
      AT = cT(6586),
      CT = cT(6604),
      jT = cT(1518),
      vT = cT(1195),
      tT = cT(6607),
      hT = cT(6636),
      NT = cT(6547),
      QT = cT(1099);

    function ST(TT) {
      var kT, cT, AT;
      let {
        existing: ST,
        onPublished: aT
      } = TT;
      const {
        t: rT
      } = (0, vT.B)(), {
        userContext: PT,
        isUserContextUpdating: wT
      } = (0, IT.b)(), [mT, bT] = (0, lT.useState)(null), [zT, JT] = (0, lT.useState)(0), [oT, HT] = (0, lT.useState)(null !== (kT = null === ST || void 0 === ST ? void 0 : ST.name) && void 0 !== kT ? kT : ""), eT = (0, lT.useRef)(oT), GT = (0, lT.useRef)(""), VT = TT => {
        eT.current = TT, HT(TT)
      }, [ET, ZT] = (0, lT.useState)(null !== (cT = null === ST || void 0 === ST ? void 0 : ST.description) && void 0 !== cT ? cT : ""), uT = (0, lT.useRef)(ET), XT = (0, lT.useRef)(""), dT = TT => {
        uT.current = TT, ZT(TT)
      }, [LT, RT] = (0, lT.useState)(!1), {
        loading: gT,
        error: UT,
        setError: YT,
        onFiles: BT
      } = (0, CT.f)((async TT => {
        const kT = await (0, tT.loadPageShaderPackCompiler)();
        if (!kT) return void YT(rT("shaderPack:compilerUnavailable"));
        const cT = await (0, hT.h)(kT, TT.files);
        if (bT({
            pack: TT,
            validation: cT,
            sourceBytes: (0, OT.u)(TT.files)
          }), !ST) {
          var lT;
          if ("" !== eT.current.trim() && eT.current !== GT.current || (GT.current = (0, MT.L)(TT.manifest.name.trim(), MT.v), VT(GT.current)), "" === uT.current.trim() || uT.current === XT.current) XT.current = (0, MT.L)((null !== (lT = TT.manifest.description) && void 0 !== lT ? lT : "").trim(), MT.m), dT(XT.current);
          JT((TT => TT + 1))
        }
      })), WT = !wT && !PT.isLoggedIn() && !KT.d.offlineMode, nT = oT.trim(), pT = nT.length < MT.w, iT = null !== mT && !1 !== (null === (AT = mT.validation) || void 0 === AT ? void 0 : AT.ok) && !gT && !pT && !WT && !wT;
      return (0, QT.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, QT.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: ST ? rT("shaderPackListing:uploadIntro", {
            minutes: String(MT.A / 6e4)
          }) : rT("shaderPackListing:publishIntro")
        }), (0, QT.jsx)(FT, {}), WT && (0, QT.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: rT("shaderPackListing:publishNeedsLogin")
        }), (0, QT.jsx)(CT.c, {
          busy: gT,
          disabled: gT || LT,
          onFiles: TT => {
            bT(null), BT(TT)
          }
        }), mT && (0, QT.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, QT.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: mT.pack.manifest.name
          }), (0, QT.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [rT("shaderPackListing:sizeValue", {
              kilobytes: String((0, NT.K)(mT.sourceBytes))
            }), " \xb7", " ", rT("shaderPackListing:filesValue", {
              files: String(mT.pack.files.length)
            })]
          }), (0, QT.jsx)(DT, {
            picked: mT
          })]
        }), !ST && (0, QT.jsxs)(QT.Fragment, {
          children: [(0, QT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, QT.jsx)("span", {
              children: rT("general:name")
            }), (0, QT.jsx)(xT.b, {
              className: "ShaderPackPublishInput",
              defaultValue: oT,
              maxLength: MT.v,
              onValueChange: VT
            }, zT), mT && pT && (0, QT.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: rT("shaderPackListing:nameTooShort", {
                min: String(MT.w)
              })
            })]
          }), (0, QT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, QT.jsx)("span", {
              children: rT("general:description")
            }), (0, QT.jsx)(xT.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: ET,
              maxLength: MT.m,
              onValueChange: dT,
              useTextarea: !0
            }, zT)]
          })]
        }), UT && (0, QT.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: UT
        }), (0, QT.jsxs)(fT.m, {
          className: "ShaderPackPublishButton",
          disabled: !iT,
          loading: LT,
          onClick: () => {
            !async function() {
              var TT;
              if (!mT) return;
              const {
                name: kT,
                description: cT
              } = null !== ST && void 0 !== ST ? ST : {
                name: nT,
                description: ET.trim()
              }, lT = {
                packId: null !== (TT = null === ST || void 0 === ST ? void 0 : ST.packId) && void 0 !== TT ? TT : null,
                name: kT,
                description: cT,
                apiVersion: mT.pack.manifest.apiVersion,
                files: (0, OT.s)(mT.pack.files),
                keepCircleShadows: !0 === mT.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(lT)).byteLength > 1024 * MT.H) YT(rT("shaderPackListing:publishTooBig", {
                kilobytes: String(MT.H)
              }));
              else {
                RT(!0), YT(null);
                try {
                  aT(await jT.d.publishShaderPack(PT, lT))
                } catch (KT) {
                  console.error("Failed to publish the shader pack", KT), YT((0, NT.v)(KT, rT, "shaderPackListing:publishFailed"))
                } finally {
                  RT(!1)
                }
              }
            }()
          },
          children: [(0, QT.jsx)(yT.e, {
            name: "upload"
          }), " ", rT(ST ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function DT(TT) {
      let {
        picked: kT
      } = TT;
      const {
        t: cT
      } = (0, vT.B)(), {
        validation: lT
      } = kT;
      return null === lT ? (0, QT.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: cT("shaderPackListing:publishUnchecked")
      }) : lT.ok ? (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, QT.jsx)(yT.e, {
            name: "circle-check"
          }), " ", cT("shaderPackListing:publishReady")]
        }), lT.offInStrict.length > 0 && (0, QT.jsxs)(QT.Fragment, {
          children: [(0, QT.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, QT.jsx)(yT.e, {
              name: "triangle-exclamation"
            }), " ", cT("shaderPack:offInStrict")]
          }), (0, QT.jsx)(AT.e, {
            diagnostics: lT.offInStrict,
            t: cT
          })]
        })]
      }) : (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, QT.jsx)(yT.e, {
            name: "triangle-exclamation"
          }), " ", cT("shaderPackListing:publishHasErrors")]
        }), (0, QT.jsx)(AT.e, {
          diagnostics: lT.errors,
          more: lT.moreErrors,
          t: cT
        })]
      })
    }
    const aT = "\0";

    function FT() {
      const {
        t: TT
      } = (0, vT.B)(), [kT, cT] = TT("shaderPackListing:bloxdhubHelp", {
        site: aT
      }).split(aT);
      return (0, QT.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [kT, (0, QT.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: MT.e,
          target: "_blank",
          rel: "noopener noreferrer",
          children: MT.b
        }), cT]
      })
    }
  },
  6569: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => IT
    });
    var lT = cT(1530),
      MT = cT(1470),
      KT = cT(1195),
      OT = cT(6578),
      yT = cT(6557),
      fT = cT(6547),
      xT = cT(1099);

    function IT() {
      const {
        t: TT
      } = (0, KT.B)(), kT = (0, lT.useNavigatePreserveSearch)();
      return (0, yT.d)(), (0, xT.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, xT.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, xT.jsx)(MT.b, {
            onClick: () => {
              kT(fT.Q)
            },
            children: TT("shaderPackListing:backToPacks")
          })
        }), (0, xT.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: TT("shaderPackListing:publishTitle")
        }), (0, xT.jsx)(OT.ShaderPackPublishForm, {
          existing: null,
          onPublished: TT => {
            kT((0, fT.V)(TT.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6557: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => jT,
      g: () => AT,
      j: () => vT
    });
    var lT = cT(71),
      MT = cT(6550),
      KT = cT(1518),
      OT = cT(6547),
      yT = cT(6563),
      fT = cT(1130);
    const xT = "shaderPackListingView",
      IT = "shaderPackListingFilterOpen";

    function AT() {
      var TT;
      const [kT, cT] = (0, yT.e)(xT, MT.z[0]);
      return [null !== (TT = MT.z.find((TT => TT === kT))) && void 0 !== TT ? TT : MT.z[0], cT]
    }

    function CT() {
      (0, lT.useEffect)((() => () => {
        window.location.pathname.startsWith(OT.Q) || (0, OT.k)()
      }), [])
    }

    function jT() {
      return (0, yT.e)(IT, !1)
    }

    function vT() {
      const {
        userContext: TT,
        isUserContextUpdating: kT
      } = (0, fT.b)(), [cT, MT] = (0, lT.useState)(null), OT = (0, lT.useRef)(new Set);

      function yT(TT, kT) {
        MT((cT => {
          const lT = new Set(cT);
          return kT ? lT.add(TT) : lT.delete(TT), lT
        }))
      }
      return (0, lT.useEffect)((() => {
        if (kT) return;
        let cT = !1;
        return KT.d.getFavouriteShaderPacks(TT).then((TT => {
          cT || MT(new Set(TT))
        })).catch((TT => {
          console.error("Failed to get favourite shader packs", TT), cT || MT(new Set)
        })), () => {
          cT = !0
        }
      }), [TT, kT]), {
        isFavourite: TT => null === cT ? null : cT.has(TT),
        toggle: function(kT) {
          if (null === cT || OT.current.has(kT)) return;
          OT.current.add(kT);
          const lT = !cT.has(kT);
          yT(kT, lT), (lT ? KT.d.favouriteShaderPack(TT, kT) : KT.d.unfavouriteShaderPack(TT, kT)).catch((TT => {
            console.error("Failed to change a favourite shader pack", TT), yT(kT, !lT)
          })).finally((() => {
            OT.current.delete(kT)
          }))
        }
      }
    }
  },
  6547: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => IT,
      D: () => JT,
      G: () => tT,
      K: () => uT,
      O: () => ET,
      Q: () => OT,
      R: () => ZT,
      V: () => fT,
      Y: () => yT,
      ab: () => GT,
      b: () => QT,
      db: () => VT,
      f: () => wT,
      hb: () => ST,
      j: () => hT,
      k: () => CT,
      kb: () => zT,
      l: () => AT,
      n: () => oT,
      r: () => jT,
      t: () => HT,
      v: () => XT,
      w: () => vT,
      y: () => NT,
      z: () => bT
    });
    var lT = cT(6550),
      MT = cT(184),
      KT = cT(4543);
    const OT = "/shader-packs",
      yT = `${OT}/publish`;

    function fT(TT) {
      return `${OT}/${encodeURIComponent(TT)}`
    }
    let xT = null;

    function IT(TT) {
      xT = TT
    }

    function AT() {
      return xT
    }

    function CT() {
      xT = null
    }

    function jT(TT) {
      return TT.playerHasRank("developer") || TT.playerHasRank("admin")
    }
    const vT = ["terrain", "water", "models", "sunShadows", "strict"],
      tT = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hT(TT, kT) {
      return TT.withFeatures.includes(kT) ? "with" : TT.withoutFeatures.includes(kT) ? "without" : null
    }

    function NT(TT) {
      return null === TT ? "with" : "with" === TT ? "without" : null
    }

    function QT(TT) {
      return "with" === TT ? "only" : null === TT ? "include" : void 0
    }

    function ST(TT, kT) {
      const cT = hT(TT, kT),
        lT = TT => TT.filter((TT => TT !== kT));
      return {
        withFeatures: null === cT ? [...TT.withFeatures, kT] : lT(TT.withFeatures),
        withoutFeatures: "with" === cT ? [...TT.withoutFeatures, kT] : lT(TT.withoutFeatures)
      }
    }
    const DT = "section",
      aT = "sort",
      FT = "filters",
      rT = "q",
      PT = "banned",
      wT = "popular",
      mT = "strict";

    function bT(TT) {
      var kT, cT, MT;
      const OT = TT.get(DT),
        yT = (null !== (kT = TT.get(FT)) && void 0 !== kT ? kT : mT).split(","),
        fT = TT.get(PT);
      return {
        section: "favourites" === OT || "mine" === OT ? OT : "explore",
        sort: null !== (cT = lT.r.find((kT => kT === TT.get(aT)))) && void 0 !== cT ? cT : wT,
        withFeatures: vT.filter((TT => yT.includes(TT) && !yT.includes(`-${TT}`))),
        withoutFeatures: vT.filter((TT => yT.includes(`-${TT}`))),
        searchQuery: (null === (MT = TT.get(rT)) || void 0 === MT ? void 0 : MT.slice(0, lT.C)) || null,
        pageNumber: (0, KT.f)(TT.get(KT.d)),
        banned: "only" === fT ? "with" : "include" === fT ? null : "without"
      }
    }

    function zT(TT, kT) {
      var cT;
      const lT = eT(kT);
      (0, KT.g)(TT, DT, "explore" === kT.section ? null : kT.section), (0, KT.g)(TT, aT, kT.sort === wT ? null : kT.sort), (0, KT.g)(TT, FT, lT === mT ? null : lT), (0, KT.g)(TT, rT, kT.searchQuery), (0, KT.g)(TT, PT, null !== (cT = QT(kT.banned)) && void 0 !== cT ? cT : null), (0, KT.k)(TT, kT.pageNumber)
    }

    function JT(TT) {
      const kT = new URLSearchParams;
      return zT(kT, {
        section: "explore",
        sort: wT,
        withFeatures: "strict" === TT ? [TT] : [TT, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${OT}?${kT.toString()}`
    }

    function oT(TT) {
      return eT(TT) === mT
    }

    function HT(TT) {
      return null !== TT.searchQuery || "with" === TT.banned || eT(TT) !== mT
    }

    function eT(TT) {
      return vT.flatMap((kT => {
        const cT = hT(TT, kT);
        return "with" === cT ? [kT] : "without" === cT ? [`-${kT}`] : []
      })).join(",")
    }
    const GT = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      VT = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function ET(TT) {
      return Math.round(100 * Math.max(0, 1 - 1 / TT))
    }

    function ZT(TT, kT, cT, MT) {
      const KT = [];
      TT.isBanned && KT.push({
        tone: "warning",
        text: MT("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: OT
      } = TT;
      if (null === TT.brokenError || OT && !OT.error || KT.push({
          tone: "warning",
          text: MT("shaderPackListing:ownerBroken"),
          detail: TT.brokenError
        }), null !== OT && void 0 !== OT && OT.error) KT.push({
        tone: "warning",
        text: MT(kT ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, lT.f)(OT.error) ? null : OT.error
      });
      else if (OT) {
        const TT = null === OT.renderNotBefore ? 0 : OT.renderNotBefore - cT,
          lT = String(Math.ceil(TT / 6e4)),
          yT = MT(kT ? TT > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : TT > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: lT
          });
        KT.push({
          tone: "info",
          text: yT,
          detail: null
        })
      }
      return TT.listed || KT.push({
        tone: "info",
        text: MT("shaderPackListing:ownerUnlisted"),
        detail: null
      }), KT
    }

    function uT(TT) {
      return Math.max(1, Math.round(TT / 1024))
    }

    function XT(TT, kT, cT) {
      return TT instanceof MT.c && TT.errorMessageForUser ? TT.errorMessageForUser : kT(cT)
    }
  },
  6563: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT
    });
    var lT = cT(71),
      MT = cT(47);

    function KT(TT, kT) {
      var cT;
      const [KT, OT] = (0, lT.useState)(null !== (cT = MT.e.getItem(TT)) && void 0 !== cT ? cT : kT);
      return [KT, kT => {
        MT.e.setItem(TT, kT), OT(kT)
      }]
    }
  },
  6647: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(47);
    const MT = "shaderPack";
    async function KT() {
      var TT;
      let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await lT.d.getItem(MT, kT)) && void 0 !== TT ? TT : null
    }
  },
  6550: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => CT,
      C: () => IT,
      D: () => ST,
      H: () => AT,
      L: () => xT,
      b: () => jT,
      c: () => tT,
      e: () => vT,
      f: () => QT,
      i: () => aT,
      m: () => fT,
      o: () => MT,
      q: () => DT,
      r: () => KT,
      v: () => yT,
      w: () => OT,
      z: () => lT
    });
    const lT = ["forest", "desert", "water", "night", "cave"];
    const MT = {
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
      KT = ["popular", "updated", "newest"],
      OT = 3,
      yT = 32,
      fT = 300;

    function xT(TT, kT) {
      return TT.slice(0, kT).replace(/[\uD800-\uDBFF]$/, "")
    }
    const IT = 64,
      AT = 512,
      CT = 18e5;
    const jT = "Bloxdhub",
      vT = "https://bloxdhub.com/shaders";

    function tT(TT) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(TT)}`
    }
    const hT = "Screenshot generation failed.",
      NT = "Its screenshots couldn't be generated:";

    function QT(TT) {
      var kT;
      return TT === hT || null !== (kT = null === TT || void 0 === TT ? void 0 : TT.startsWith(NT)) && void 0 !== kT && kT
    }

    function ST(TT, kT) {
      return `shaderPacks/${TT}/${kT}.json`
    }

    function DT(TT, kT, cT, lT) {
      return null === kT.renderId ? aT(TT, kT.baselineVersion, cT, lT) : `${TT}/${function(TT,kT,cT,lT){return`shaderPacks/${TT}/${kT}/${cT}-${lT}.webp`}(kT.packId,kT.renderId,cT,lT)}`
    }

    function aT(TT, kT, cT, lT) {
      return `${TT}/${function(TT,kT,cT){return`shaderPacks/baseline/${TT}/${kT}-${cT}.webp`}(kT,cT,lT)}`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);