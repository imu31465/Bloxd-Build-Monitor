export const id = 107;
export const ids = [107, 124];
export const modules = {
  4746: (DD, CD, cD) => {
    var ID = cD(4752);

    function pD() {}

    function iD() {}
    iD.resetWarningCache = pD, DD.exports = function() {
      function DD(DD, CD, cD, pD, iD, fD) {
        if (fD !== ID) {
          var bD = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bD.name = "Invariant Violation", bD
        }
      }

      function CD() {
        return DD
      }
      DD.isRequired = DD;
      var cD = {
        array: DD,
        bigint: DD,
        bool: DD,
        func: DD,
        number: DD,
        object: DD,
        string: DD,
        symbol: DD,
        any: DD,
        arrayOf: CD,
        element: DD,
        elementType: DD,
        instanceOf: CD,
        node: DD,
        objectOf: CD,
        oneOf: CD,
        oneOfType: CD,
        shape: CD,
        exact: CD,
        checkPropTypes: iD,
        resetWarningCache: pD
      };
      return cD.PropTypes = cD, cD
    }
  },
  4741: (DD, CD, cD) => {
    DD.exports = cD(4746)()
  },
  4752: DD => {
    DD.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6337: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ShaderPackPublishForm: () => gD
    });
    var ID = cD(53),
      pD = cD(6298),
      iD = cD(199),
      fD = cD(6343),
      bD = cD(1064),
      QD = cD(1442),
      wD = cD(1655),
      SD = cD(1120),
      BD = cD(6350),
      yD = cD(6362),
      MD = cD(1497),
      tD = cD(1192),
      ZD = cD(6366),
      oD = cD(6401),
      vD = cD(6291),
      ND = cD(1093);

    function gD(DD) {
      var CD, cD, BD;
      let {
        existing: gD,
        onPublished: mD
      } = DD;
      const {
        t: OD
      } = (0, tD.F)(), {
        userContext: PD,
        isUserContextUpdating: HD
      } = (0, SD.c)(), [UD, xD] = (0, ID.useState)(null), [qD, JD] = (0, ID.useState)(0), [KD, aD] = (0, ID.useState)(null !== (CD = null === gD || void 0 === gD ? void 0 : gD.name) && void 0 !== CD ? CD : ""), VD = (0, ID.useRef)(KD), zD = (0, ID.useRef)(""), jD = DD => {
        VD.current = DD, aD(DD)
      }, [lD, LD] = (0, ID.useState)(null !== (cD = null === gD || void 0 === gD ? void 0 : gD.description) && void 0 !== cD ? cD : ""), TD = (0, ID.useRef)(lD), GD = (0, ID.useRef)(""), RD = DD => {
        TD.current = DD, LD(DD)
      }, [kD, dD] = (0, ID.useState)(!1), {
        loading: YD,
        error: WD,
        setError: sD,
        onFiles: ED
      } = (0, yD.e)((async DD => {
        const CD = await (0, ZD.loadPageShaderPackCompiler)();
        if (!CD) return void sD(OD("shaderPack:compilerUnavailable"));
        const cD = await (0, oD.f)(CD, DD.files);
        if (xD({
            pack: DD,
            validation: cD,
            sourceBytes: (0, fD.A)(DD.files)
          }), !gD) {
          var ID;
          if ("" !== VD.current.trim() && VD.current !== zD.current || (zD.current = (0, pD.U)(DD.manifest.name.trim(), pD.C), jD(zD.current)), "" === TD.current.trim() || TD.current === GD.current) GD.current = (0, pD.U)((null !== (ID = DD.manifest.description) && void 0 !== ID ? ID : "").trim(), pD.t), RD(GD.current);
          JD((DD => DD + 1))
        }
      })), eD = !HD && !PD.isLoggedIn() && !iD.e.offlineMode, uD = KD.trim(), hD = uD.length < pD.E, rD = null !== UD && !1 !== (null === (BD = UD.validation) || void 0 === BD ? void 0 : BD.ok) && !YD && !hD && !eD && !HD;
      return (0, ND.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, ND.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: gD ? OD("shaderPackListing:uploadIntro", {
            minutes: String(pD.L / 6e4)
          }) : OD("shaderPackListing:publishIntro")
        }), (0, ND.jsx)(nD, {}), eD && (0, ND.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: OD("shaderPackListing:publishNeedsLogin")
        }), (0, ND.jsx)(yD.d, {
          busy: YD,
          disabled: YD || kD,
          onFiles: DD => {
            xD(null), ED(DD)
          }
        }), UD && (0, ND.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, ND.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: UD.pack.manifest.name
          }), (0, ND.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [OD("shaderPackListing:sizeValue", {
              kilobytes: String((0, vD.P)(UD.sourceBytes))
            }), " \xb7", " ", OD("shaderPackListing:filesValue", {
              files: String(UD.pack.files.length)
            })]
          }), (0, ND.jsx)(XD, {
            picked: UD
          })]
        }), !gD && (0, ND.jsxs)(ND.Fragment, {
          children: [(0, ND.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ND.jsx)("span", {
              children: OD("general:name")
            }), (0, ND.jsx)(wD.b, {
              className: "ShaderPackPublishInput",
              defaultValue: KD,
              maxLength: pD.C,
              onValueChange: jD
            }, qD), UD && hD && (0, ND.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: OD("shaderPackListing:nameTooShort", {
                min: String(pD.E)
              })
            })]
          }), (0, ND.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ND.jsx)("span", {
              children: OD("general:description")
            }), (0, ND.jsx)(wD.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: lD,
              maxLength: pD.t,
              onValueChange: RD,
              useTextarea: !0
            }, qD)]
          })]
        }), WD && (0, ND.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: WD
        }), (0, ND.jsxs)(QD.o, {
          className: "ShaderPackPublishButton",
          disabled: !rD,
          loading: kD,
          onClick: () => {
            !async function() {
              var DD;
              if (!UD) return;
              const {
                name: CD,
                description: cD
              } = null !== gD && void 0 !== gD ? gD : {
                name: uD,
                description: lD.trim()
              }, ID = {
                packId: null !== (DD = null === gD || void 0 === gD ? void 0 : gD.packId) && void 0 !== DD ? DD : null,
                name: CD,
                description: cD,
                apiVersion: UD.pack.manifest.apiVersion,
                files: (0, fD.w)(UD.pack.files),
                keepCircleShadows: !0 === UD.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(ID)).byteLength > 1024 * pD.T) sD(OD("shaderPackListing:publishTooBig", {
                kilobytes: String(pD.T)
              }));
              else {
                dD(!0), sD(null);
                try {
                  mD(await MD.c.publishShaderPack(PD, ID))
                } catch (iD) {
                  console.error("Failed to publish the shader pack", iD), sD((0, vD.w)(iD, OD, "shaderPackListing:publishFailed"))
                } finally {
                  dD(!1)
                }
              }
            }()
          },
          children: [(0, ND.jsx)(bD.c, {
            name: "upload"
          }), " ", OD(gD ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function XD(DD) {
      let {
        picked: CD
      } = DD;
      const {
        t: cD
      } = (0, tD.F)(), {
        validation: ID
      } = CD;
      return null === ID ? (0, ND.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: cD("shaderPackListing:publishUnchecked")
      }) : ID.ok ? (0, ND.jsxs)(ND.Fragment, {
        children: [(0, ND.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, ND.jsx)(bD.c, {
            name: "circle-check"
          }), " ", cD("shaderPackListing:publishReady")]
        }), ID.offInStrict.length > 0 && (0, ND.jsxs)(ND.Fragment, {
          children: [(0, ND.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, ND.jsx)(bD.c, {
              name: "triangle-exclamation"
            }), " ", cD("shaderPack:offInStrict")]
          }), (0, ND.jsx)(BD.b, {
            diagnostics: ID.offInStrict,
            t: cD
          })]
        })]
      }) : (0, ND.jsxs)(ND.Fragment, {
        children: [(0, ND.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, ND.jsx)(bD.c, {
            name: "triangle-exclamation"
          }), " ", cD("shaderPackListing:publishHasErrors")]
        }), (0, ND.jsx)(BD.b, {
          diagnostics: ID.errors,
          more: ID.moreErrors,
          t: cD
        })]
      })
    }
    const mD = "\0";

    function nD() {
      const {
        t: DD
      } = (0, tD.F)(), [CD, cD] = DD("shaderPackListing:bloxdhubHelp", {
        site: mD
      }).split(mD);
      return (0, ND.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [CD, (0, ND.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: pD.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: pD.e
        }), cD]
      })
    }
  },
  6332: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => SD
    });
    var ID = cD(1508),
      pD = cD(1442),
      iD = cD(1192),
      fD = cD(6337),
      bD = cD(6312),
      QD = cD(6291),
      wD = cD(1093);

    function SD() {
      const {
        t: DD
      } = (0, iD.F)(), CD = (0, ID.useNavigatePreserveSearch)();
      return (0, bD.c)(), (0, wD.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, wD.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, wD.jsx)(pD.e, {
            onClick: () => {
              CD(QD.W)
            },
            children: DD("shaderPackListing:backToPacks")
          })
        }), (0, wD.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: DD("shaderPackListing:publishTitle")
        }), (0, wD.jsx)(fD.ShaderPackPublishForm, {
          existing: null,
          onPublished: DD => {
            CD((0, QD.$)(DD.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6312: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => yD,
      f: () => MD,
      g: () => BD,
      i: () => tD
    });
    var ID = cD(53),
      pD = cD(6298),
      iD = cD(1497),
      fD = cD(6291),
      bD = cD(6320),
      QD = cD(1120);
    const wD = "shaderPackListingView",
      SD = "shaderPackListingFilterOpen";

    function BD() {
      var DD;
      const [CD, cD] = (0, bD.c)(wD, pD.H[0]);
      return [null !== (DD = pD.H.find((DD => DD === CD))) && void 0 !== DD ? DD : pD.H[0], cD]
    }

    function yD() {
      (0, ID.useEffect)((() => () => {
        window.location.pathname.startsWith(fD.W) || (0, fD.n)()
      }), [])
    }

    function MD() {
      return (0, bD.c)(SD, !1)
    }

    function tD() {
      const {
        userContext: DD,
        isUserContextUpdating: CD
      } = (0, QD.c)(), [cD, pD] = (0, ID.useState)(null), fD = (0, ID.useRef)(new Set);

      function bD(DD, CD) {
        pD((cD => {
          const ID = new Set(cD);
          return CD ? ID.add(DD) : ID.delete(DD), ID
        }))
      }
      return (0, ID.useEffect)((() => {
        if (CD) return;
        let cD = !1;
        return iD.c.getFavouriteShaderPacks(DD).then((DD => {
          cD || pD(new Set(DD))
        })).catch((DD => {
          console.error("Failed to get favourite shader packs", DD), cD || pD(new Set)
        })), () => {
          cD = !0
        }
      }), [DD, CD]), {
        isFavourite: DD => null === cD ? null : cD.has(DD),
        toggle: function(CD) {
          if (null === cD || fD.current.has(CD)) return;
          fD.current.add(CD);
          const ID = !cD.has(CD);
          bD(CD, ID), (ID ? iD.c.favouriteShaderPack(DD, CD) : iD.c.unfavouriteShaderPack(DD, CD)).catch((DD => {
            console.error("Failed to change a favourite shader pack", DD), bD(CD, !ID)
          })).finally((() => {
            fD.current.delete(CD)
          }))
        }
      }
    }
  },
  6291: (DD, CD, cD) => {
    cD.d(CD, {
      $: () => QD,
      A: () => vD,
      E: () => xD,
      G: () => SD,
      I: () => JD,
      M: () => ZD,
      P: () => TD,
      S: () => lD,
      W: () => fD,
      Y: () => LD,
      ab: () => bD,
      bb: () => zD,
      c: () => ND,
      db: () => jD,
      eb: () => gD,
      fb: () => qD,
      g: () => HD,
      k: () => oD,
      n: () => yD,
      p: () => BD,
      q: () => KD,
      r: () => MD,
      s: () => aD,
      w: () => GD,
      x: () => tD
    });
    var ID = cD(6298),
      pD = cD(162),
      iD = cD(4353);
    const fD = "/shader-packs",
      bD = `${fD}/publish`;

    function QD(DD) {
      return `${fD}/${encodeURIComponent(DD)}`
    }
    let wD = null;

    function SD(DD) {
      wD = DD
    }

    function BD() {
      return wD
    }

    function yD() {
      wD = null
    }

    function MD(DD) {
      return DD.playerHasRank("developer") || DD.playerHasRank("admin")
    }
    const tD = ["terrain", "water", "models", "sunShadows", "strict"],
      ZD = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function oD(DD, CD) {
      return DD.withFeatures.includes(CD) ? "with" : DD.withoutFeatures.includes(CD) ? "without" : null
    }

    function vD(DD) {
      return null === DD ? "with" : "with" === DD ? "without" : null
    }

    function ND(DD) {
      return "with" === DD ? "only" : null === DD ? "include" : void 0
    }

    function gD(DD, CD) {
      const cD = oD(DD, CD),
        ID = DD => DD.filter((DD => DD !== CD));
      return {
        withFeatures: null === cD ? [...DD.withFeatures, CD] : ID(DD.withFeatures),
        withoutFeatures: "with" === cD ? [...DD.withoutFeatures, CD] : ID(DD.withoutFeatures)
      }
    }
    const XD = "section",
      mD = "sort",
      nD = "filters",
      OD = "q",
      PD = "banned",
      HD = "popular",
      UD = "strict";

    function xD(DD) {
      var CD, cD, pD;
      const fD = DD.get(XD),
        bD = (null !== (CD = DD.get(nD)) && void 0 !== CD ? CD : UD).split(","),
        QD = DD.get(PD);
      return {
        section: "favourites" === fD || "mine" === fD ? fD : "explore",
        sort: null !== (cD = ID.z.find((CD => CD === DD.get(mD)))) && void 0 !== cD ? cD : HD,
        withFeatures: tD.filter((DD => bD.includes(DD) && !bD.includes(`-${DD}`))),
        withoutFeatures: tD.filter((DD => bD.includes(`-${DD}`))),
        searchQuery: (null === (pD = DD.get(OD)) || void 0 === pD ? void 0 : pD.slice(0, ID.N)) || null,
        pageNumber: (0, iD.e)(DD.get(iD.b)),
        banned: "only" === QD ? "with" : "include" === QD ? null : "without"
      }
    }

    function qD(DD, CD) {
      var cD;
      const ID = VD(CD);
      (0, iD.f)(DD, XD, "explore" === CD.section ? null : CD.section), (0, iD.f)(DD, mD, CD.sort === HD ? null : CD.sort), (0, iD.f)(DD, nD, ID === UD ? null : ID), (0, iD.f)(DD, OD, CD.searchQuery), (0, iD.f)(DD, PD, null !== (cD = ND(CD.banned)) && void 0 !== cD ? cD : null), (0, iD.h)(DD, CD.pageNumber)
    }

    function JD(DD) {
      const CD = new URLSearchParams;
      return qD(CD, {
        section: "explore",
        sort: HD,
        withFeatures: "strict" === DD ? [DD] : [DD, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${fD}?${CD.toString()}`
    }

    function KD(DD) {
      return VD(DD) === UD
    }

    function aD(DD) {
      return null !== DD.searchQuery || "with" === DD.banned || VD(DD) !== UD
    }

    function VD(DD) {
      return tD.flatMap((CD => {
        const cD = oD(DD, CD);
        return "with" === cD ? [CD] : "without" === cD ? [`-${CD}`] : []
      })).join(",")
    }
    const zD = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      jD = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function lD(DD) {
      return Math.round(100 * Math.max(0, 1 - 1 / DD))
    }

    function LD(DD, CD, cD, pD) {
      const iD = [];
      DD.isBanned && iD.push({
        tone: "warning",
        text: pD("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: fD
      } = DD;
      if (null === DD.brokenError || fD && !fD.error || iD.push({
          tone: "warning",
          text: pD("shaderPackListing:ownerBroken"),
          detail: DD.brokenError
        }), null !== fD && void 0 !== fD && fD.error) iD.push({
        tone: "warning",
        text: pD(CD ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, ID.n)(fD.error) ? null : fD.error
      });
      else if (fD) {
        const DD = null === fD.renderNotBefore ? 0 : fD.renderNotBefore - cD,
          ID = String(Math.ceil(DD / 6e4)),
          bD = pD(CD ? DD > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : DD > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: ID
          });
        iD.push({
          tone: "info",
          text: bD,
          detail: null
        })
      }
      return DD.listed || iD.push({
        tone: "info",
        text: pD("shaderPackListing:ownerUnlisted"),
        detail: null
      }), iD
    }

    function TD(DD) {
      return Math.max(1, Math.round(DD / 1024))
    }

    function GD(DD, CD, cD) {
      return DD instanceof pD.d && DD.errorMessageForUser ? DD.errorMessageForUser : CD(cD)
    }
  },
  6320: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(53),
      pD = cD(36);

    function iD(DD, CD) {
      var cD;
      const [iD, fD] = (0, ID.useState)(null !== (cD = pD.h.getItem(DD)) && void 0 !== cD ? cD : CD);
      return [iD, CD => {
        pD.h.setItem(DD, CD), fD(CD)
      }]
    }
  },
  6409: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD
    });
    var ID = cD(36);
    const pD = "shaderPack";
    async function iD() {
      var DD;
      let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await ID.f.getItem(pD, CD)) && void 0 !== DD ? DD : null
    }
  },
  6298: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => bD,
      E: () => fD,
      H: () => ID,
      L: () => yD,
      N: () => SD,
      Q: () => gD,
      T: () => BD,
      U: () => wD,
      e: () => MD,
      h: () => ZD,
      k: () => tD,
      n: () => ND,
      p: () => mD,
      t: () => QD,
      u: () => pD,
      w: () => XD,
      z: () => iD
    });
    const ID = ["forest", "desert", "water", "night", "cave"];
    const pD = {
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
      iD = ["popular", "updated", "newest"],
      fD = 3,
      bD = 32,
      QD = 300;

    function wD(DD, CD) {
      return DD.slice(0, CD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const SD = 64,
      BD = 512,
      yD = 18e5;
    const MD = "Bloxdhub",
      tD = "https://bloxdhub.com/shaders";

    function ZD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const oD = "Screenshot generation failed.",
      vD = "Its screenshots couldn't be generated:";

    function ND(DD) {
      var CD;
      return DD === oD || null !== (CD = null === DD || void 0 === DD ? void 0 : DD.startsWith(vD)) && void 0 !== CD && CD
    }

    function gD(DD, CD) {
      return `shaderPacks/${DD}/${CD}.json`
    }

    function XD(DD, CD, cD, ID) {
      return null === CD.renderId ? mD(DD, CD.baselineVersion, cD, ID) : `${DD}/${function(DD,CD,cD,ID){return`shaderPacks/${DD}/${CD}/${cD}-${ID}.webp`}(CD.packId,CD.renderId,cD,ID)}`
    }

    function mD(DD, CD, cD, ID) {
      return `${DD}/${function(DD,CD,cD){return`shaderPacks/baseline/${DD}/${CD}-${cD}.webp`}(CD,cD,ID)}`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);