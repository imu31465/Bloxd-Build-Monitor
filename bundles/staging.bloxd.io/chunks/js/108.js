export const id = 108;
export const ids = [108, 125];
export const modules = {
  4806: (QQ, FQ, wQ) => {
    var LQ = wQ(4815);

    function qQ() {}

    function oQ() {}
    oQ.resetWarningCache = qQ, QQ.exports = function() {
      function QQ(QQ, FQ, wQ, qQ, oQ, DQ) {
        if (DQ !== LQ) {
          var kQ = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw kQ.name = "Invariant Violation", kQ
        }
      }

      function FQ() {
        return QQ
      }
      QQ.isRequired = QQ;
      var wQ = {
        array: QQ,
        bigint: QQ,
        bool: QQ,
        func: QQ,
        number: QQ,
        object: QQ,
        string: QQ,
        symbol: QQ,
        any: QQ,
        arrayOf: FQ,
        element: QQ,
        elementType: QQ,
        instanceOf: FQ,
        node: QQ,
        objectOf: FQ,
        oneOf: FQ,
        oneOfType: FQ,
        shape: FQ,
        exact: FQ,
        checkPropTypes: oQ,
        resetWarningCache: qQ
      };
      return wQ.PropTypes = wQ, wQ
    }
  },
  4799: (QQ, FQ, wQ) => {
    QQ.exports = wQ(4806)()
  },
  4815: QQ => {
    QQ.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6406: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ShaderPackPublishForm: () => GQ
    });
    var LQ = wQ(53),
      qQ = wQ(6374),
      oQ = wQ(210),
      DQ = wQ(6414),
      kQ = wQ(1079),
      vQ = wQ(1451),
      mQ = wQ(1682),
      uQ = wQ(1140),
      HQ = wQ(6422),
      bQ = wQ(6435),
      YQ = wQ(1489),
      xQ = wQ(1207),
      AQ = wQ(6438),
      tQ = wQ(6476),
      eQ = wQ(6371),
      MQ = wQ(1107);

    function GQ(QQ) {
      var FQ, wQ, HQ;
      let {
        existing: GQ,
        onPublished: cQ
      } = QQ;
      const {
        t: SQ
      } = (0, xQ.y)(), {
        userContext: iQ,
        isUserContextUpdating: WQ
      } = (0, uQ.e)(), [RQ, OQ] = (0, LQ.useState)(null), [sQ, rQ] = (0, LQ.useState)(0), [IQ, UQ] = (0, LQ.useState)(null !== (FQ = null === GQ || void 0 === GQ ? void 0 : GQ.name) && void 0 !== FQ ? FQ : ""), NQ = (0, LQ.useRef)(IQ), TQ = (0, LQ.useRef)(""), KQ = QQ => {
        NQ.current = QQ, UQ(QQ)
      }, [zQ, lQ] = (0, LQ.useState)(null !== (wQ = null === GQ || void 0 === GQ ? void 0 : GQ.description) && void 0 !== wQ ? wQ : ""), jQ = (0, LQ.useRef)(zQ), aQ = (0, LQ.useRef)(""), XQ = QQ => {
        jQ.current = QQ, lQ(QQ)
      }, [fQ, VQ] = (0, LQ.useState)(!1), {
        loading: hQ,
        error: JQ,
        setError: EQ,
        onFiles: nQ
      } = (0, bQ.g)((async QQ => {
        const FQ = await (0, AQ.loadPageShaderPackCompiler)();
        if (!FQ) return void EQ(SQ("shaderPack:compilerUnavailable"));
        const wQ = await (0, tQ.f)(FQ, QQ.files);
        if (OQ({
            pack: QQ,
            validation: wQ,
            sourceBytes: (0, DQ.v)(QQ.files)
          }), !GQ) {
          var LQ;
          if ("" !== NQ.current.trim() && NQ.current !== TQ.current || (TQ.current = (0, qQ.O)(QQ.manifest.name.trim(), qQ.z), KQ(TQ.current)), "" === jQ.current.trim() || jQ.current === aQ.current) aQ.current = (0, qQ.O)((null !== (LQ = QQ.manifest.description) && void 0 !== LQ ? LQ : "").trim(), qQ.p), XQ(aQ.current);
          rQ((QQ => QQ + 1))
        }
      })), gQ = !WQ && !iQ.isLoggedIn() && !oQ.d.offlineMode, PQ = IQ.trim(), ZQ = PQ.length < qQ.B, yQ = null !== RQ && !1 !== (null === (HQ = RQ.validation) || void 0 === HQ ? void 0 : HQ.ok) && !hQ && !ZQ && !gQ && !WQ;
      return (0, MQ.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, MQ.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: GQ ? SQ("shaderPackListing:uploadIntro", {
            minutes: String(qQ.H / 6e4)
          }) : SQ("shaderPackListing:publishIntro")
        }), (0, MQ.jsx)(CQ, {}), gQ && (0, MQ.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: SQ("shaderPackListing:publishNeedsLogin")
        }), (0, MQ.jsx)(bQ.c, {
          busy: hQ,
          disabled: hQ || fQ,
          onFiles: QQ => {
            OQ(null), nQ(QQ)
          }
        }), RQ && (0, MQ.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, MQ.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: RQ.pack.manifest.name
          }), (0, MQ.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [SQ("shaderPackListing:sizeValue", {
              kilobytes: String((0, eQ.R)(RQ.sourceBytes))
            }), " \xb7", " ", SQ("shaderPackListing:filesValue", {
              files: String(RQ.pack.files.length)
            })]
          }), (0, MQ.jsx)(pQ, {
            picked: RQ
          })]
        }), !GQ && (0, MQ.jsxs)(MQ.Fragment, {
          children: [(0, MQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, MQ.jsx)("span", {
              children: SQ("general:name")
            }), (0, MQ.jsx)(mQ.b, {
              className: "ShaderPackPublishInput",
              defaultValue: IQ,
              maxLength: qQ.z,
              onValueChange: KQ
            }, sQ), RQ && ZQ && (0, MQ.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: SQ("shaderPackListing:nameTooShort", {
                min: String(qQ.B)
              })
            })]
          }), (0, MQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, MQ.jsx)("span", {
              children: SQ("general:description")
            }), (0, MQ.jsx)(mQ.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: zQ,
              maxLength: qQ.p,
              onValueChange: XQ,
              useTextarea: !0
            }, sQ)]
          })]
        }), JQ && (0, MQ.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: JQ
        }), (0, MQ.jsxs)(vQ.m, {
          className: "ShaderPackPublishButton",
          disabled: !yQ,
          loading: fQ,
          onClick: () => {
            !async function() {
              var QQ;
              if (!RQ) return;
              const {
                name: FQ,
                description: wQ
              } = null !== GQ && void 0 !== GQ ? GQ : {
                name: PQ,
                description: zQ.trim()
              }, LQ = {
                packId: null !== (QQ = null === GQ || void 0 === GQ ? void 0 : GQ.packId) && void 0 !== QQ ? QQ : null,
                name: FQ,
                description: wQ,
                apiVersion: RQ.pack.manifest.apiVersion,
                files: (0, DQ.r)(RQ.pack.files),
                keepCircleShadows: !0 === RQ.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(LQ)).byteLength > 1024 * qQ.L) EQ(SQ("shaderPackListing:publishTooBig", {
                kilobytes: String(qQ.L)
              }));
              else {
                VQ(!0), EQ(null);
                try {
                  cQ(await YQ.b.publishShaderPack(iQ, LQ))
                } catch (oQ) {
                  console.error("Failed to publish the shader pack", oQ), EQ((0, eQ.z)(oQ, SQ, "shaderPackListing:publishFailed"))
                } finally {
                  VQ(!1)
                }
              }
            }()
          },
          children: [(0, MQ.jsx)(kQ.c, {
            name: "upload"
          }), " ", SQ(GQ ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function pQ(QQ) {
      let {
        picked: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, xQ.y)(), {
        validation: LQ
      } = FQ;
      return null === LQ ? (0, MQ.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: wQ("shaderPackListing:publishUnchecked")
      }) : LQ.ok ? (0, MQ.jsxs)(MQ.Fragment, {
        children: [(0, MQ.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, MQ.jsx)(kQ.c, {
            name: "circle-check"
          }), " ", wQ("shaderPackListing:publishReady")]
        }), LQ.offInStrict.length > 0 && (0, MQ.jsxs)(MQ.Fragment, {
          children: [(0, MQ.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, MQ.jsx)(kQ.c, {
              name: "triangle-exclamation"
            }), " ", wQ("shaderPack:offInStrict")]
          }), (0, MQ.jsx)(HQ.e, {
            diagnostics: LQ.offInStrict,
            t: wQ
          })]
        })]
      }) : (0, MQ.jsxs)(MQ.Fragment, {
        children: [(0, MQ.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, MQ.jsx)(kQ.c, {
            name: "triangle-exclamation"
          }), " ", wQ("shaderPackListing:publishHasErrors")]
        }), (0, MQ.jsx)(HQ.e, {
          diagnostics: LQ.errors,
          more: LQ.moreErrors,
          t: wQ
        })]
      })
    }
    const cQ = "\0";

    function CQ() {
      const {
        t: QQ
      } = (0, xQ.y)(), [FQ, wQ] = QQ("shaderPackListing:bloxdhubHelp", {
        site: cQ
      }).split(cQ);
      return (0, MQ.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [FQ, (0, MQ.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: qQ.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: qQ.c
        }), wQ]
      })
    }
  },
  6397: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => uQ
    });
    var LQ = wQ(1503),
      qQ = wQ(1451),
      oQ = wQ(1207),
      DQ = wQ(6406),
      kQ = wQ(6382),
      vQ = wQ(6371),
      mQ = wQ(1107);

    function uQ() {
      const {
        t: QQ
      } = (0, oQ.y)(), FQ = (0, LQ.useNavigatePreserveSearch)();
      return (0, kQ.d)(), (0, mQ.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, mQ.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, mQ.jsx)(qQ.b, {
            onClick: () => {
              FQ(vQ.W)
            },
            children: QQ("shaderPackListing:backToPacks")
          })
        }), (0, mQ.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: QQ("shaderPackListing:publishTitle")
        }), (0, mQ.jsx)(DQ.ShaderPackPublishForm, {
          existing: null,
          onPublished: QQ => {
            FQ((0, vQ.Z)(QQ.packId), {
              replace: !0
            })
          }
        })]
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
  6485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(27);
    const qQ = "shaderPack";
    async function oQ() {
      var QQ;
      let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
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