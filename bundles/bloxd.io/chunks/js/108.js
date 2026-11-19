export const id = 108;
export const ids = [108, 125];
export const modules = {
  4552: (YY, rY, DY) => {
    var FY = DY(4560);

    function AY() {}

    function IY() {}
    IY.resetWarningCache = AY, YY.exports = function() {
      function YY(YY, rY, DY, AY, IY, RY) {
        if (RY !== FY) {
          var OY = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw OY.name = "Invariant Violation", OY
        }
      }

      function rY() {
        return YY
      }
      YY.isRequired = YY;
      var DY = {
        array: YY,
        bigint: YY,
        bool: YY,
        func: YY,
        number: YY,
        object: YY,
        string: YY,
        symbol: YY,
        any: YY,
        arrayOf: rY,
        element: YY,
        elementType: YY,
        instanceOf: rY,
        node: YY,
        objectOf: rY,
        oneOf: rY,
        oneOfType: rY,
        shape: rY,
        exact: rY,
        checkPropTypes: IY,
        resetWarningCache: AY
      };
      return DY.PropTypes = DY, DY
    }
  },
  4543: (YY, rY, DY) => {
    YY.exports = DY(4552)()
  },
  4560: YY => {
    YY.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6144: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ShaderPackPublishForm: () => mY
    });
    var FY = DY(61),
      AY = DY(6112),
      IY = DY(222),
      RY = DY(6150),
      OY = DY(1098),
      gY = DY(1437),
      aY = DY(1654),
      vY = DY(1152),
      uY = DY(6157),
      sY = DY(6176),
      iY = DY(1471),
      yY = DY(1211),
      QY = DY(6182),
      oY = DY(6212),
      WY = DY(6108),
      EY = DY(1125);

    function mY(YY) {
      var rY, DY, uY;
      let {
        existing: mY,
        onPublished: SY
      } = YY;
      const {
        t: TY
      } = (0, yY.C)(), {
        userContext: eY,
        isUserContextUpdating: NY
      } = (0, vY.d)(), [BY, cY] = (0, FY.useState)(null), [KY, HY] = (0, FY.useState)(0), [zY, ZY] = (0, FY.useState)(null !== (rY = null === mY || void 0 === mY ? void 0 : mY.name) && void 0 !== rY ? rY : ""), CY = (0, FY.useRef)(zY), fY = (0, FY.useRef)(""), jY = YY => {
        CY.current = YY, ZY(YY)
      }, [hY, dY] = (0, FY.useState)(null !== (DY = null === mY || void 0 === mY ? void 0 : mY.description) && void 0 !== DY ? DY : ""), JY = (0, FY.useRef)(hY), MY = (0, FY.useRef)(""), wY = YY => {
        JY.current = YY, dY(YY)
      }, [bY, XY] = (0, FY.useState)(!1), {
        loading: qY,
        error: pY,
        setError: kY,
        onFiles: GY
      } = (0, sY.i)((async YY => {
        const rY = await (0, QY.loadPageShaderPackCompiler)();
        if (!rY) return void kY(TY("shaderPack:compilerUnavailable"));
        const DY = await (0, oY.g)(rY, YY.files);
        if (cY({
            pack: YY,
            validation: DY,
            sourceBytes: (0, RY.A)(YY.files)
          }), !mY) {
          var FY;
          if ("" !== CY.current.trim() && CY.current !== fY.current || (fY.current = (0, AY.V)(YY.manifest.name.trim(), AY.D), jY(fY.current)), "" === JY.current.trim() || JY.current === MY.current) MY.current = (0, AY.V)((null !== (FY = YY.manifest.description) && void 0 !== FY ? FY : "").trim(), AY.t), wY(MY.current);
          HY((YY => YY + 1))
        }
      })), xY = !NY && !eY.isLoggedIn() && !IY.b.offlineMode, nY = zY.trim(), PY = nY.length < AY.G, UY = null !== BY && !1 !== (null === (uY = BY.validation) || void 0 === uY ? void 0 : uY.ok) && !qY && !PY && !xY && !NY;
      return (0, EY.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, EY.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: mY ? TY("shaderPackListing:uploadIntro", {
            minutes: String(AY.K / 6e4)
          }) : TY("shaderPackListing:publishIntro")
        }), (0, EY.jsx)(lY, {}), xY && (0, EY.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: TY("shaderPackListing:publishNeedsLogin")
        }), (0, EY.jsx)(sY.e, {
          busy: qY,
          disabled: qY || bY,
          onFiles: YY => {
            cY(null), GY(YY)
          }
        }), BY && (0, EY.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, EY.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: BY.pack.manifest.name
          }), (0, EY.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [TY("shaderPackListing:sizeValue", {
              kilobytes: String((0, WY.N)(BY.sourceBytes))
            }), " \xb7", " ", TY("shaderPackListing:filesValue", {
              files: String(BY.pack.files.length)
            })]
          }), (0, EY.jsx)(VY, {
            picked: BY
          })]
        }), !mY && (0, EY.jsxs)(EY.Fragment, {
          children: [(0, EY.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, EY.jsx)("span", {
              children: TY("general:name")
            }), (0, EY.jsx)(aY.d, {
              className: "ShaderPackPublishInput",
              defaultValue: zY,
              maxLength: AY.D,
              onValueChange: jY
            }, KY), BY && PY && (0, EY.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: TY("shaderPackListing:nameTooShort", {
                min: String(AY.G)
              })
            })]
          }), (0, EY.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, EY.jsx)("span", {
              children: TY("general:description")
            }), (0, EY.jsx)(aY.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: hY,
              maxLength: AY.t,
              onValueChange: wY,
              useTextarea: !0
            }, KY)]
          })]
        }), pY && (0, EY.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: pY
        }), (0, EY.jsxs)(gY.n, {
          className: "ShaderPackPublishButton",
          disabled: !UY,
          loading: bY,
          onClick: () => {
            !async function() {
              var YY;
              if (!BY) return;
              const {
                name: rY,
                description: DY
              } = null !== mY && void 0 !== mY ? mY : {
                name: nY,
                description: hY.trim()
              }, FY = {
                packId: null !== (YY = null === mY || void 0 === mY ? void 0 : mY.packId) && void 0 !== YY ? YY : null,
                name: rY,
                description: DY,
                apiVersion: BY.pack.manifest.apiVersion,
                files: (0, RY.z)(BY.pack.files),
                keepCircleShadows: !0 === BY.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(FY)).byteLength > 1024 * AY.S) kY(TY("shaderPackListing:publishTooBig", {
                kilobytes: String(AY.S)
              }));
              else {
                XY(!0), kY(null);
                try {
                  SY(await iY.e.publishShaderPack(eY, FY))
                } catch (IY) {
                  console.error("Failed to publish the shader pack", IY), kY((0, WY.y)(IY, TY, "shaderPackListing:publishFailed"))
                } finally {
                  XY(!1)
                }
              }
            }()
          },
          children: [(0, EY.jsx)(OY.e, {
            name: "upload"
          }), " ", TY(mY ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function VY(YY) {
      let {
        picked: rY
      } = YY;
      const {
        t: DY
      } = (0, yY.C)(), {
        validation: FY
      } = rY;
      return null === FY ? (0, EY.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: DY("shaderPackListing:publishUnchecked")
      }) : FY.ok ? (0, EY.jsxs)(EY.Fragment, {
        children: [(0, EY.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, EY.jsx)(OY.e, {
            name: "circle-check"
          }), " ", DY("shaderPackListing:publishReady")]
        }), FY.offInStrict.length > 0 && (0, EY.jsxs)(EY.Fragment, {
          children: [(0, EY.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, EY.jsx)(OY.e, {
              name: "triangle-exclamation"
            }), " ", DY("shaderPack:offInStrict")]
          }), (0, EY.jsx)(uY.e, {
            diagnostics: FY.offInStrict,
            t: DY
          })]
        })]
      }) : (0, EY.jsxs)(EY.Fragment, {
        children: [(0, EY.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, EY.jsx)(OY.e, {
            name: "triangle-exclamation"
          }), " ", DY("shaderPackListing:publishHasErrors")]
        }), (0, EY.jsx)(uY.e, {
          diagnostics: FY.errors,
          more: FY.moreErrors,
          t: DY
        })]
      })
    }
    const SY = "\0";

    function lY() {
      const {
        t: YY
      } = (0, yY.C)(), [rY, DY] = YY("shaderPackListing:bloxdhubHelp", {
        site: SY
      }).split(SY);
      return (0, EY.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [rY, (0, EY.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: AY.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: AY.d
        }), DY]
      })
    }
  },
  6142: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => vY
    });
    var FY = DY(1488),
      AY = DY(1437),
      IY = DY(1211),
      RY = DY(6144),
      OY = DY(6123),
      gY = DY(6108),
      aY = DY(1125);

    function vY() {
      const {
        t: YY
      } = (0, IY.C)(), rY = (0, FY.useNavigatePreserveSearch)();
      return (0, OY.d)(), (0, aY.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, aY.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, aY.jsx)(AY.b, {
            onClick: () => {
              rY(gY.R)
            },
            children: YY("shaderPackListing:backToPacks")
          })
        }), (0, aY.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: YY("shaderPackListing:publishTitle")
        }), (0, aY.jsx)(RY.ShaderPackPublishForm, {
          existing: null,
          onPublished: YY => {
            rY((0, gY.Y)(YY.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6123: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => sY,
      e: () => iY,
      f: () => uY,
      h: () => yY
    });
    var FY = DY(61),
      AY = DY(6112),
      IY = DY(1471),
      RY = DY(6108),
      OY = DY(6128),
      gY = DY(1152);
    const aY = "shaderPackListingView",
      vY = "shaderPackListingFilterOpen";

    function uY() {
      var YY;
      const [rY, DY] = (0, OY.e)(aY, AY.J[0]);
      return [null !== (YY = AY.J.find((YY => YY === rY))) && void 0 !== YY ? YY : AY.J[0], DY]
    }

    function sY() {
      (0, FY.useEffect)((() => () => {
        window.location.pathname.startsWith(RY.R) || (0, RY.l)()
      }), [])
    }

    function iY() {
      return (0, OY.e)(vY, !1)
    }

    function yY() {
      const {
        userContext: YY,
        isUserContextUpdating: rY
      } = (0, gY.d)(), [DY, AY] = (0, FY.useState)(null), RY = (0, FY.useRef)(new Set);

      function OY(YY, rY) {
        AY((DY => {
          const FY = new Set(DY);
          return rY ? FY.add(YY) : FY.delete(YY), FY
        }))
      }
      return (0, FY.useEffect)((() => {
        if (rY) return;
        let DY = !1;
        return IY.e.getFavouriteShaderPacks(YY).then((YY => {
          DY || AY(new Set(YY))
        })).catch((YY => {
          console.error("Failed to get favourite shader packs", YY), DY || AY(new Set)
        })), () => {
          DY = !0
        }
      }), [YY, rY]), {
        isFavourite: YY => null === DY ? null : DY.has(YY),
        toggle: function(rY) {
          if (null === DY || RY.current.has(rY)) return;
          RY.current.add(rY);
          const FY = !DY.has(rY);
          OY(rY, FY), (FY ? IY.e.favouriteShaderPack(YY, rY) : IY.e.unfavouriteShaderPack(YY, rY)).catch((YY => {
            console.error("Failed to change a favourite shader pack", YY), OY(rY, !FY)
          })).finally((() => {
            RY.current.delete(rY)
          }))
        }
      }
    }
  },
  6108: (YY, rY, DY) => {
    DY.d(rY, {
      B: () => WY,
      C: () => cY,
      E: () => vY,
      I: () => HY,
      J: () => QY,
      N: () => JY,
      Q: () => hY,
      R: () => RY,
      V: () => dY,
      Y: () => gY,
      ab: () => OY,
      bb: () => fY,
      e: () => EY,
      eb: () => jY,
      fb: () => mY,
      h: () => NY,
      j: () => oY,
      jb: () => KY,
      l: () => sY,
      o: () => uY,
      q: () => zY,
      s: () => iY,
      u: () => ZY,
      y: () => MY,
      z: () => yY
    });
    var FY = DY(6112),
      AY = DY(183),
      IY = DY(4122);
    const RY = "/shader-packs",
      OY = `${RY}/publish`;

    function gY(YY) {
      return `${RY}/${encodeURIComponent(YY)}`
    }
    let aY = null;

    function vY(YY) {
      aY = YY
    }

    function uY() {
      return aY
    }

    function sY() {
      aY = null
    }

    function iY(YY) {
      return YY.playerHasRank("developer") || YY.playerHasRank("admin")
    }
    const yY = ["terrain", "water", "models", "sunShadows", "strict"],
      QY = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oY(YY, rY) {
      return YY.withFeatures.includes(rY) ? "with" : YY.withoutFeatures.includes(rY) ? "without" : null
    }

    function WY(YY) {
      return null === YY ? "with" : "with" === YY ? "without" : null
    }

    function EY(YY) {
      return "with" === YY ? "only" : null === YY ? "include" : void 0
    }

    function mY(YY, rY) {
      const DY = oY(YY, rY),
        FY = YY => YY.filter((YY => YY !== rY));
      return {
        withFeatures: null === DY ? [...YY.withFeatures, rY] : FY(YY.withFeatures),
        withoutFeatures: "with" === DY ? [...YY.withoutFeatures, rY] : FY(YY.withoutFeatures)
      }
    }
    const VY = "section",
      SY = "sort",
      lY = "filters",
      TY = "q",
      eY = "banned",
      NY = "popular",
      BY = "strict";

    function cY(YY) {
      var rY, DY, AY;
      const RY = YY.get(VY),
        OY = (null !== (rY = YY.get(lY)) && void 0 !== rY ? rY : BY).split(","),
        gY = YY.get(eY);
      return {
        section: "favourites" === RY || "mine" === RY ? RY : "explore",
        sort: null !== (DY = FY.A.find((rY => rY === YY.get(SY)))) && void 0 !== DY ? DY : NY,
        withFeatures: yY.filter((YY => OY.includes(YY) && !OY.includes(`-${YY}`))),
        withoutFeatures: yY.filter((YY => OY.includes(`-${YY}`))),
        searchQuery: (null === (AY = YY.get(TY)) || void 0 === AY ? void 0 : AY.slice(0, FY.L)) || null,
        pageNumber: (0, IY.i)(YY.get(IY.e)),
        banned: "only" === gY ? "with" : "include" === gY ? null : "without"
      }
    }

    function KY(YY, rY) {
      var DY;
      const FY = CY(rY);
      (0, IY.l)(YY, VY, "explore" === rY.section ? null : rY.section), (0, IY.l)(YY, SY, rY.sort === NY ? null : rY.sort), (0, IY.l)(YY, lY, FY === BY ? null : FY), (0, IY.l)(YY, TY, rY.searchQuery), (0, IY.l)(YY, eY, null !== (DY = EY(rY.banned)) && void 0 !== DY ? DY : null), (0, IY.n)(YY, rY.pageNumber)
    }

    function HY(YY) {
      const rY = new URLSearchParams;
      return KY(rY, {
        section: "explore",
        sort: NY,
        withFeatures: "strict" === YY ? [YY] : [YY, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${RY}?${rY.toString()}`
    }

    function zY(YY) {
      return CY(YY) === BY
    }

    function ZY(YY) {
      return null !== YY.searchQuery || "with" === YY.banned || CY(YY) !== BY
    }

    function CY(YY) {
      return yY.flatMap((rY => {
        const DY = oY(YY, rY);
        return "with" === DY ? [rY] : "without" === DY ? [`-${rY}`] : []
      })).join(",")
    }
    const fY = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jY = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function hY(YY) {
      return Math.round(100 * Math.max(0, 1 - 1 / YY))
    }

    function dY(YY, rY, DY, AY) {
      const IY = [];
      YY.isBanned && IY.push({
        tone: "warning",
        text: AY("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: RY
      } = YY;
      if (null === YY.brokenError || RY && !RY.error || IY.push({
          tone: "warning",
          text: AY("shaderPackListing:ownerBroken"),
          detail: YY.brokenError
        }), null !== RY && void 0 !== RY && RY.error) IY.push({
        tone: "warning",
        text: AY(rY ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, FY.m)(RY.error) ? null : RY.error
      });
      else if (RY) {
        const YY = null === RY.renderNotBefore ? 0 : RY.renderNotBefore - DY,
          FY = String(Math.ceil(YY / 6e4)),
          OY = AY(rY ? YY > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : YY > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: FY
          });
        IY.push({
          tone: "info",
          text: OY,
          detail: null
        })
      }
      return YY.listed || IY.push({
        tone: "info",
        text: AY("shaderPackListing:ownerUnlisted"),
        detail: null
      }), IY
    }

    function JY(YY) {
      return Math.max(1, Math.round(YY / 1024))
    }

    function MY(YY, rY, DY) {
      return YY instanceof AY.e && YY.errorMessageForUser ? YY.errorMessageForUser : rY(DY)
    }
  },
  6128: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(61),
      AY = DY(40);

    function IY(YY, rY) {
      var DY;
      const [IY, RY] = (0, FY.useState)(null !== (DY = AY.m.getItem(YY)) && void 0 !== DY ? DY : rY);
      return [IY, rY => {
        AY.m.setItem(YY, rY), RY(rY)
      }]
    }
  },
  6230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    var FY = DY(40);
    const AY = "shaderPack";
    async function IY() {
      var YY;
      let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (YY = await FY.i.getItem(AY, rY)) && void 0 !== YY ? YY : null
    }
  },
  6112: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => IY,
      D: () => OY,
      G: () => RY,
      J: () => FY,
      K: () => sY,
      L: () => vY,
      P: () => mY,
      S: () => uY,
      V: () => aY,
      d: () => iY,
      e: () => QY,
      i: () => yY,
      m: () => EY,
      q: () => SY,
      t: () => gY,
      u: () => AY,
      x: () => VY
    });
    const FY = ["forest", "desert", "water", "night", "cave"];
    const AY = {
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
      IY = ["popular", "updated", "newest"],
      RY = 3,
      OY = 32,
      gY = 300;

    function aY(YY, rY) {
      return YY.slice(0, rY).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vY = 64,
      uY = 512,
      sY = 18e5;
    const iY = "Bloxdhub",
      yY = "https://bloxdhub.com/shaders";

    function QY(YY) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(YY)}`
    }
    const oY = "Screenshot generation failed.",
      WY = "Its screenshots couldn't be generated:";

    function EY(YY) {
      var rY;
      return YY === oY || null !== (rY = null === YY || void 0 === YY ? void 0 : YY.startsWith(WY)) && void 0 !== rY && rY
    }

    function mY(YY, rY) {
      return `shaderPacks/${YY}/${rY}.json`
    }

    function VY(YY, rY, DY, FY) {
      return null === rY.renderId ? SY(YY, rY.baselineVersion, DY, FY) : `${YY}/${function(YY,rY,DY,FY){return`shaderPacks/${YY}/${rY}/${DY}-${FY}.webp`}(rY.packId,rY.renderId,DY,FY)}`
    }

    function SY(YY, rY, DY, FY) {
      return `${YY}/${function(YY,rY,DY){return`shaderPacks/baseline/${YY}/${rY}-${DY}.webp`}(rY,DY,FY)}`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);