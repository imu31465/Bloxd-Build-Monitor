export const id = 101;
export const ids = [101, 117];
export const modules = {
  4384: (BB, TB, dB) => {
    var VB = dB(4388);

    function yB() {}

    function pB() {}
    pB.resetWarningCache = yB, BB.exports = function() {
      function BB(BB, TB, dB, yB, pB, lB) {
        if (lB !== VB) {
          var JB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw JB.name = "Invariant Violation", JB
        }
      }

      function TB() {
        return BB
      }
      BB.isRequired = BB;
      var dB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: TB,
        element: BB,
        elementType: BB,
        instanceOf: TB,
        node: BB,
        objectOf: TB,
        oneOf: TB,
        oneOfType: TB,
        shape: TB,
        exact: TB,
        checkPropTypes: pB,
        resetWarningCache: yB
      };
      return dB.PropTypes = dB, dB
    }
  },
  4376: (BB, TB, dB) => {
    BB.exports = dB(4384)()
  },
  4388: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5921: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ShaderPackPublishForm: () => mB
    });
    var VB = dB(62),
      yB = dB(5898),
      pB = dB(193),
      lB = dB(5924),
      JB = dB(946),
      YB = dB(1324),
      gB = dB(1555),
      oB = dB(1011),
      kB = dB(5932),
      LB = dB(5943),
      OB = dB(1393),
      DB = dB(1078),
      uB = dB(5949),
      HB = dB(5985),
      EB = dB(5891),
      vB = dB(980);

    function mB(BB) {
      var TB, dB, kB;
      let {
        existing: mB,
        onPublished: NB
      } = BB;
      const {
        t: fB
      } = (0, DB.z)(), {
        userContext: sB,
        isUserContextUpdating: MB
      } = (0, oB.b)(), [zB, wB] = (0, VB.useState)(null), [UB, FB] = (0, VB.useState)(0), [KB, rB] = (0, VB.useState)(null !== (TB = null === mB || void 0 === mB ? void 0 : mB.name) && void 0 !== TB ? TB : ""), IB = (0, VB.useRef)(KB), cB = (0, VB.useRef)(""), SB = BB => {
        IB.current = BB, rB(BB)
      }, [PB, QB] = (0, VB.useState)(null !== (dB = null === mB || void 0 === mB ? void 0 : mB.description) && void 0 !== dB ? dB : ""), RB = (0, VB.useRef)(PB), aB = (0, VB.useRef)(""), ZB = BB => {
        RB.current = BB, QB(BB)
      }, [XB, WB] = (0, VB.useState)(!1), {
        loading: hB,
        error: CB,
        setError: GB,
        onFiles: qB
      } = (0, LB.g)((async BB => {
        const TB = await (0, uB.loadPageShaderPackCompiler)();
        if (!TB) return void GB(fB("shaderPack:compilerUnavailable"));
        const dB = await (0, HB.f)(TB, BB.files);
        if (wB({
            pack: BB,
            validation: dB,
            sourceBytes: (0, lB.x)(BB.files)
          }), !mB) {
          var VB;
          if ("" !== IB.current.trim() && IB.current !== cB.current || (cB.current = (0, yB.S)(BB.manifest.name.trim(), yB.w), SB(cB.current)), "" === RB.current.trim() || RB.current === aB.current) aB.current = (0, yB.S)((null !== (VB = BB.manifest.description) && void 0 !== VB ? VB : "").trim(), yB.n), ZB(aB.current);
          FB((BB => BB + 1))
        }
      })), xB = !MB && !sB.isLoggedIn() && !pB.c.offlineMode, jB = KB.trim(), AB = jB.length < yB.A, bB = null !== zB && !1 !== (null === (kB = zB.validation) || void 0 === kB ? void 0 : kB.ok) && !hB && !AB && !xB && !MB;
      return (0, vB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, vB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: mB ? fB("shaderPackListing:uploadIntro", {
            minutes: String(yB.H / 6e4)
          }) : fB("shaderPackListing:publishIntro")
        }), (0, vB.jsx)(tB, {}), xB && (0, vB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fB("shaderPackListing:publishNeedsLogin")
        }), (0, vB.jsx)(LB.e, {
          busy: hB,
          disabled: hB || XB,
          onFiles: BB => {
            wB(null), qB(BB)
          }
        }), zB && (0, vB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, vB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: zB.pack.manifest.name
          }), (0, vB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fB("shaderPackListing:sizeValue", {
              kilobytes: String((0, EB.O)(zB.sourceBytes))
            }), " \xb7", " ", fB("shaderPackListing:filesValue", {
              files: String(zB.pack.files.length)
            })]
          }), (0, vB.jsx)(iB, {
            picked: zB
          })]
        }), !mB && (0, vB.jsxs)(vB.Fragment, {
          children: [(0, vB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, vB.jsx)("span", {
              children: fB("general:name")
            }), (0, vB.jsx)(gB.e, {
              className: "ShaderPackPublishInput",
              defaultValue: KB,
              maxLength: yB.w,
              onValueChange: SB
            }, UB), zB && AB && (0, vB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fB("shaderPackListing:nameTooShort", {
                min: String(yB.A)
              })
            })]
          }), (0, vB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, vB.jsx)("span", {
              children: fB("general:description")
            }), (0, vB.jsx)(gB.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: PB,
              maxLength: yB.n,
              onValueChange: ZB,
              useTextarea: !0
            }, UB)]
          })]
        }), CB && (0, vB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: CB
        }), (0, vB.jsxs)(YB.k, {
          className: "ShaderPackPublishButton",
          disabled: !bB,
          loading: XB,
          onClick: () => {
            !async function() {
              var BB;
              if (!zB) return;
              const {
                name: TB,
                description: dB
              } = null !== mB && void 0 !== mB ? mB : {
                name: jB,
                description: PB.trim()
              }, VB = {
                packId: null !== (BB = null === mB || void 0 === mB ? void 0 : mB.packId) && void 0 !== BB ? BB : null,
                name: TB,
                description: dB,
                apiVersion: zB.pack.manifest.apiVersion,
                files: (0, lB.u)(zB.pack.files),
                keepCircleShadows: !0 === zB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(VB)).byteLength > 1024 * yB.P) GB(fB("shaderPackListing:publishTooBig", {
                kilobytes: String(yB.P)
              }));
              else {
                WB(!0), GB(null);
                try {
                  NB(await OB.c.publishShaderPack(sB, VB))
                } catch (pB) {
                  console.error("Failed to publish the shader pack", pB), GB((0, EB.D)(pB, fB, "shaderPackListing:publishFailed"))
                } finally {
                  WB(!1)
                }
              }
            }()
          },
          children: [(0, vB.jsx)(JB.e, {
            name: "upload"
          }), " ", fB(mB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function iB(BB) {
      let {
        picked: TB
      } = BB;
      const {
        t: dB
      } = (0, DB.z)(), {
        validation: VB
      } = TB;
      return null === VB ? (0, vB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: dB("shaderPackListing:publishUnchecked")
      }) : VB.ok ? (0, vB.jsxs)(vB.Fragment, {
        children: [(0, vB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, vB.jsx)(JB.e, {
            name: "circle-check"
          }), " ", dB("shaderPackListing:publishReady")]
        }), VB.offInStrict.length > 0 && (0, vB.jsxs)(vB.Fragment, {
          children: [(0, vB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, vB.jsx)(JB.e, {
              name: "triangle-exclamation"
            }), " ", dB("shaderPack:offInStrict")]
          }), (0, vB.jsx)(kB.c, {
            diagnostics: VB.offInStrict,
            t: dB
          })]
        })]
      }) : (0, vB.jsxs)(vB.Fragment, {
        children: [(0, vB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, vB.jsx)(JB.e, {
            name: "triangle-exclamation"
          }), " ", dB("shaderPackListing:publishHasErrors")]
        }), (0, vB.jsx)(kB.c, {
          diagnostics: VB.errors,
          more: VB.moreErrors,
          t: dB
        })]
      })
    }
    const NB = "\0";

    function tB() {
      const {
        t: BB
      } = (0, DB.z)(), [TB, dB] = BB("shaderPackListing:bloxdhubHelp", {
        site: NB
      }).split(NB);
      return (0, vB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [TB, (0, vB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: yB.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: yB.b
        }), dB]
      })
    }
  },
  5917: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => oB
    });
    var VB = dB(1407),
      yB = dB(1324),
      pB = dB(1078),
      lB = dB(5921),
      JB = dB(5906),
      YB = dB(5891),
      gB = dB(980);

    function oB() {
      const {
        t: BB
      } = (0, pB.z)(), TB = (0, VB.useNavigatePreserveSearch)();
      return (0, JB.d)(), (0, gB.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, gB.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, gB.jsx)(yB.b, {
            onClick: () => {
              TB(YB.T)
            },
            children: BB("shaderPackListing:backToPacks")
          })
        }), (0, gB.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: BB("shaderPackListing:publishTitle")
        }), (0, gB.jsx)(lB.ShaderPackPublishForm, {
          existing: null,
          onPublished: BB => {
            TB((0, YB.X)(BB.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  5906: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => LB,
      g: () => OB,
      i: () => kB,
      k: () => DB
    });
    var VB = dB(62),
      yB = dB(5898),
      pB = dB(1393),
      lB = dB(5891),
      JB = dB(5913),
      YB = dB(1011);
    const gB = "shaderPackListingView",
      oB = "shaderPackListingFilterOpen";

    function kB() {
      var BB;
      const [TB, dB] = (0, JB.e)(gB, yB.D[0]);
      return [null !== (BB = yB.D.find((BB => BB === TB))) && void 0 !== BB ? BB : yB.D[0], dB]
    }

    function LB() {
      (0, VB.useEffect)((() => () => {
        window.location.pathname.startsWith(lB.T) || (0, lB.q)()
      }), [])
    }

    function OB() {
      return (0, JB.e)(oB, !1)
    }

    function DB() {
      const {
        userContext: BB,
        isUserContextUpdating: TB
      } = (0, YB.b)(), [dB, yB] = (0, VB.useState)(null), lB = (0, VB.useRef)(new Set);

      function JB(BB, TB) {
        yB((dB => {
          const VB = new Set(dB);
          return TB ? VB.add(BB) : VB.delete(BB), VB
        }))
      }
      return (0, VB.useEffect)((() => {
        if (TB) return;
        let dB = !1;
        return pB.c.getFavouriteShaderPacks(BB).then((BB => {
          dB || yB(new Set(BB))
        })).catch((BB => {
          console.error("Failed to get favourite shader packs", BB), dB || yB(new Set)
        })), () => {
          dB = !0
        }
      }), [BB, TB]), {
        isFavourite: BB => null === dB ? null : dB.has(BB),
        toggle: function(TB) {
          if (null === dB || lB.current.has(TB)) return;
          lB.current.add(TB);
          const VB = !dB.has(TB);
          JB(TB, VB), (VB ? pB.c.favouriteShaderPack(BB, TB) : pB.c.unfavouriteShaderPack(BB, TB)).catch((BB => {
            console.error("Failed to change a favourite shader pack", BB), JB(TB, !VB)
          })).finally((() => {
            lB.current.delete(TB)
          }))
        }
      }
    }
  },
  5891: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => cB,
      D: () => aB,
      E: () => DB,
      H: () => EB,
      J: () => wB,
      K: () => oB,
      L: () => FB,
      M: () => uB,
      O: () => RB,
      Q: () => PB,
      T: () => lB,
      V: () => QB,
      X: () => YB,
      Y: () => JB,
      cb: () => SB,
      e: () => vB,
      eb: () => mB,
      gb: () => UB,
      i: () => MB,
      m: () => HB,
      q: () => LB,
      s: () => kB,
      v: () => KB,
      w: () => OB,
      z: () => rB
    });
    var VB = dB(5898),
      yB = dB(163),
      pB = dB(3971);
    const lB = "/shader-packs",
      JB = `${lB}/publish`;

    function YB(BB) {
      return `${lB}/${encodeURIComponent(BB)}`
    }
    let gB = null;

    function oB(BB) {
      gB = BB
    }

    function kB() {
      return gB
    }

    function LB() {
      gB = null
    }

    function OB(BB) {
      return BB.playerHasRank("developer") || BB.playerHasRank("admin")
    }
    const DB = ["terrain", "water", "models", "sunShadows", "strict"],
      uB = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function HB(BB, TB) {
      return BB.withFeatures.includes(TB) ? "with" : BB.withoutFeatures.includes(TB) ? "without" : null
    }

    function EB(BB) {
      return null === BB ? "with" : "with" === BB ? "without" : null
    }

    function vB(BB) {
      return "with" === BB ? "only" : null === BB ? "include" : void 0
    }

    function mB(BB, TB) {
      const dB = HB(BB, TB),
        VB = BB => BB.filter((BB => BB !== TB));
      return {
        withFeatures: null === dB ? [...BB.withFeatures, TB] : VB(BB.withFeatures),
        withoutFeatures: "with" === dB ? [...BB.withoutFeatures, TB] : VB(BB.withoutFeatures)
      }
    }
    const iB = "section",
      NB = "sort",
      tB = "filters",
      fB = "q",
      sB = "banned",
      MB = "popular",
      zB = "strict";

    function wB(BB) {
      var TB, dB, yB;
      const lB = BB.get(iB),
        JB = (null !== (TB = BB.get(tB)) && void 0 !== TB ? TB : zB).split(","),
        YB = BB.get(sB);
      return {
        section: "favourites" === lB || "mine" === lB ? lB : "explore",
        sort: null !== (dB = VB.u.find((TB => TB === BB.get(NB)))) && void 0 !== dB ? dB : MB,
        withFeatures: DB.filter((BB => JB.includes(BB) && !JB.includes(`-${BB}`))),
        withoutFeatures: DB.filter((BB => JB.includes(`-${BB}`))),
        searchQuery: (null === (yB = BB.get(fB)) || void 0 === yB ? void 0 : yB.slice(0, VB.J)) || null,
        pageNumber: (0, pB.f)(BB.get(pB.b)),
        banned: "only" === YB ? "with" : "include" === YB ? null : "without"
      }
    }

    function UB(BB, TB) {
      var dB;
      const VB = IB(TB);
      (0, pB.h)(BB, iB, "explore" === TB.section ? null : TB.section), (0, pB.h)(BB, NB, TB.sort === MB ? null : TB.sort), (0, pB.h)(BB, tB, VB === zB ? null : VB), (0, pB.h)(BB, fB, TB.searchQuery), (0, pB.h)(BB, sB, null !== (dB = vB(TB.banned)) && void 0 !== dB ? dB : null), (0, pB.i)(BB, TB.pageNumber)
    }

    function FB(BB) {
      const TB = new URLSearchParams;
      return UB(TB, {
        section: "explore",
        sort: MB,
        withFeatures: "strict" === BB ? [BB] : [BB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${lB}?${TB.toString()}`
    }

    function KB(BB) {
      return IB(BB) === zB
    }

    function rB(BB) {
      return null !== BB.searchQuery || "with" === BB.banned || IB(BB) !== zB
    }

    function IB(BB) {
      return DB.flatMap((TB => {
        const dB = HB(BB, TB);
        return "with" === dB ? [TB] : "without" === dB ? [`-${TB}`] : []
      })).join(",")
    }
    const cB = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      SB = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function PB(BB) {
      return Math.round(100 * Math.max(0, 1 - 1 / BB))
    }

    function QB(BB, TB, dB, yB) {
      const pB = [];
      BB.isBanned && pB.push({
        tone: "warning",
        text: yB("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: lB
      } = BB;
      if (null === BB.brokenError || lB && !lB.error || pB.push({
          tone: "warning",
          text: yB("shaderPackListing:ownerBroken"),
          detail: BB.brokenError
        }), null !== lB && void 0 !== lB && lB.error) pB.push({
        tone: "warning",
        text: yB(TB ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, VB.j)(lB.error) ? null : lB.error
      });
      else if (lB) {
        const BB = null === lB.renderNotBefore ? 0 : lB.renderNotBefore - dB,
          VB = String(Math.ceil(BB / 6e4)),
          JB = yB(TB ? BB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : BB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: VB
          });
        pB.push({
          tone: "info",
          text: JB,
          detail: null
        })
      }
      return BB.listed || pB.push({
        tone: "info",
        text: yB("shaderPackListing:ownerUnlisted"),
        detail: null
      }), pB
    }

    function RB(BB) {
      return Math.max(1, Math.round(BB / 1024))
    }

    function aB(BB, TB, dB) {
      return BB instanceof yB.b && BB.errorMessageForUser ? BB.errorMessageForUser : TB(dB)
    }
  },
  5913: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB
    });
    var VB = dB(62),
      yB = dB(33);

    function pB(BB, TB) {
      var dB;
      const [pB, lB] = (0, VB.useState)(null !== (dB = yB.j.getItem(BB)) && void 0 !== dB ? dB : TB);
      return [pB, TB => {
        yB.j.setItem(BB, TB), lB(TB)
      }]
    }
  },
  5994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB
    });
    var VB = dB(33);
    const yB = "shaderPack";
    async function pB() {
      var BB;
      let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await VB.f.getItem(yB, TB)) && void 0 !== BB ? BB : null
    }
  },
  5898: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      D: () => VB,
      H: () => LB,
      J: () => oB,
      N: () => mB,
      P: () => kB,
      S: () => gB,
      b: () => OB,
      c: () => uB,
      f: () => DB,
      j: () => vB,
      k: () => NB,
      n: () => YB,
      q: () => yB,
      r: () => iB,
      u: () => pB,
      w: () => JB
    });
    const VB = ["forest", "desert", "water", "night", "cave"];
    const yB = {
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
      pB = ["popular", "updated", "newest"],
      lB = 3,
      JB = 32,
      YB = 300;

    function gB(BB, TB) {
      return BB.slice(0, TB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oB = 64,
      kB = 512,
      LB = 18e5;
    const OB = "Bloxdhub",
      DB = "https://bloxdhub.com/shaders";

    function uB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const HB = "Screenshot generation failed.",
      EB = "Its screenshots couldn't be generated:";

    function vB(BB) {
      var TB;
      return BB === HB || null !== (TB = null === BB || void 0 === BB ? void 0 : BB.startsWith(EB)) && void 0 !== TB && TB
    }

    function mB(BB, TB) {
      return `shaderPacks/${BB}/${TB}.json`
    }

    function iB(BB, TB, dB, VB) {
      return null === TB.renderId ? NB(BB, TB.baselineVersion, dB, VB) : `${BB}/${function(BB,TB,dB,VB){return`shaderPacks/${BB}/${TB}/${dB}-${VB}.webp`}(TB.packId,TB.renderId,dB,VB)}`
    }

    function NB(BB, TB, dB, VB) {
      return `${BB}/${function(BB,TB,dB){return`shaderPacks/baseline/${BB}/${TB}-${dB}.webp`}(TB,dB,VB)}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);