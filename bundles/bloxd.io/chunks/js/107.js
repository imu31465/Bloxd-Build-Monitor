export const id = 107;
export const ids = [107, 124];
export const modules = {
  4753: (uu, Ru, yu) => {
    var Eu = yu(4758);

    function Ku() {}

    function Qu() {}
    Qu.resetWarningCache = Ku, uu.exports = function() {
      function uu(uu, Ru, yu, Ku, Qu, mu) {
        if (mu !== Eu) {
          var Ju = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ju.name = "Invariant Violation", Ju
        }
      }

      function Ru() {
        return uu
      }
      uu.isRequired = uu;
      var yu = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Ru,
        element: uu,
        elementType: uu,
        instanceOf: Ru,
        node: uu,
        objectOf: Ru,
        oneOf: Ru,
        oneOfType: Ru,
        shape: Ru,
        exact: Ru,
        checkPropTypes: Qu,
        resetWarningCache: Ku
      };
      return yu.PropTypes = yu, yu
    }
  },
  4745: (uu, Ru, yu) => {
    uu.exports = yu(4753)()
  },
  4758: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6357: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ShaderPackPublishForm: () => Hu
    });
    var Eu = yu(64),
      Ku = yu(6322),
      Qu = yu(219),
      mu = yu(6362),
      Ju = yu(1043),
      Nu = yu(1408),
      Xu = yu(1617),
      Vu = yu(1107),
      ru = yu(6370),
      Bu = yu(6389),
      xu = yu(1447),
      Su = yu(1170),
      pu = yu(6395),
      Tu = yu(6424),
      Wu = yu(6314),
      ju = yu(1079);

    function Hu(uu) {
      var Ru, yu, ru;
      let {
        existing: Hu,
        onPublished: bu
      } = uu;
      const {
        t: ku
      } = (0, Su.E)(), {
        userContext: eu,
        isUserContextUpdating: Au
      } = (0, Vu.d)(), [Du, Mu] = (0, Eu.useState)(null), [Iu, Gu] = (0, Eu.useState)(0), [Uu, nu] = (0, Eu.useState)(null !== (Ru = null === Hu || void 0 === Hu ? void 0 : Hu.name) && void 0 !== Ru ? Ru : ""), su = (0, Eu.useRef)(Uu), tu = (0, Eu.useRef)(""), lu = uu => {
        su.current = uu, nu(uu)
      }, [gu, cu] = (0, Eu.useState)(null !== (yu = null === Hu || void 0 === Hu ? void 0 : Hu.description) && void 0 !== yu ? yu : ""), Lu = (0, Eu.useRef)(gu), zu = (0, Eu.useRef)(""), Fu = uu => {
        Lu.current = uu, cu(uu)
      }, [wu, Zu] = (0, Eu.useState)(!1), {
        loading: hu,
        error: Pu,
        setError: iu,
        onFiles: Yu
      } = (0, Bu.d)((async uu => {
        const Ru = await (0, pu.loadPageShaderPackCompiler)();
        if (!Ru) return void iu(ku("shaderPack:compilerUnavailable"));
        const yu = await (0, Tu.g)(Ru, uu.files);
        if (Mu({
            pack: uu,
            validation: yu,
            sourceBytes: (0, mu.x)(uu.files)
          }), !Hu) {
          var Eu;
          if ("" !== su.current.trim() && su.current !== tu.current || (tu.current = (0, Ku.R)(uu.manifest.name.trim(), Ku.w), lu(tu.current)), "" === Lu.current.trim() || Lu.current === zu.current) zu.current = (0, Ku.R)((null !== (Eu = uu.manifest.description) && void 0 !== Eu ? Eu : "").trim(), Ku.l), Fu(zu.current);
          Gu((uu => uu + 1))
        }
      })), ou = !Au && !eu.isLoggedIn() && !Qu.b.offlineMode, qu = Uu.trim(), Ou = qu.length < Ku.x, vu = null !== Du && !1 !== (null === (ru = Du.validation) || void 0 === ru ? void 0 : ru.ok) && !hu && !Ou && !ou && !Au;
      return (0, ju.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, ju.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Hu ? ku("shaderPackListing:uploadIntro", {
            minutes: String(Ku.D / 6e4)
          }) : ku("shaderPackListing:publishIntro")
        }), (0, ju.jsx)(Cu, {}), ou && (0, ju.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: ku("shaderPackListing:publishNeedsLogin")
        }), (0, ju.jsx)(Bu.b, {
          busy: hu,
          disabled: hu || wu,
          onFiles: uu => {
            Mu(null), Yu(uu)
          }
        }), Du && (0, ju.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, ju.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Du.pack.manifest.name
          }), (0, ju.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [ku("shaderPackListing:sizeValue", {
              kilobytes: String((0, Wu.K)(Du.sourceBytes))
            }), " \xb7", " ", ku("shaderPackListing:filesValue", {
              files: String(Du.pack.files.length)
            })]
          }), (0, ju.jsx)(du, {
            picked: Du
          })]
        }), !Hu && (0, ju.jsxs)(ju.Fragment, {
          children: [(0, ju.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ju.jsx)("span", {
              children: ku("general:name")
            }), (0, ju.jsx)(Xu.b, {
              className: "ShaderPackPublishInput",
              defaultValue: Uu,
              maxLength: Ku.w,
              onValueChange: lu
            }, Iu), Du && Ou && (0, ju.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: ku("shaderPackListing:nameTooShort", {
                min: String(Ku.x)
              })
            })]
          }), (0, ju.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ju.jsx)("span", {
              children: ku("general:description")
            }), (0, ju.jsx)(Xu.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: gu,
              maxLength: Ku.l,
              onValueChange: Fu,
              useTextarea: !0
            }, Iu)]
          })]
        }), Pu && (0, ju.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Pu
        }), (0, ju.jsxs)(Nu.l, {
          className: "ShaderPackPublishButton",
          disabled: !vu,
          loading: wu,
          onClick: () => {
            !async function() {
              var uu;
              if (!Du) return;
              const {
                name: Ru,
                description: yu
              } = null !== Hu && void 0 !== Hu ? Hu : {
                name: qu,
                description: gu.trim()
              }, Eu = {
                packId: null !== (uu = null === Hu || void 0 === Hu ? void 0 : Hu.packId) && void 0 !== uu ? uu : null,
                name: Ru,
                description: yu,
                apiVersion: Du.pack.manifest.apiVersion,
                files: (0, mu.w)(Du.pack.files),
                keepCircleShadows: !0 === Du.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Eu)).byteLength > 1024 * Ku.N) iu(ku("shaderPackListing:publishTooBig", {
                kilobytes: String(Ku.N)
              }));
              else {
                Zu(!0), iu(null);
                try {
                  bu(await xu.e.publishShaderPack(eu, Eu))
                } catch (Qu) {
                  console.error("Failed to publish the shader pack", Qu), iu((0, Wu.u)(Qu, ku, "shaderPackListing:publishFailed"))
                } finally {
                  Zu(!1)
                }
              }
            }()
          },
          children: [(0, ju.jsx)(Ju.c, {
            name: "upload"
          }), " ", ku(Hu ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function du(uu) {
      let {
        picked: Ru
      } = uu;
      const {
        t: yu
      } = (0, Su.E)(), {
        validation: Eu
      } = Ru;
      return null === Eu ? (0, ju.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: yu("shaderPackListing:publishUnchecked")
      }) : Eu.ok ? (0, ju.jsxs)(ju.Fragment, {
        children: [(0, ju.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, ju.jsx)(Ju.c, {
            name: "circle-check"
          }), " ", yu("shaderPackListing:publishReady")]
        }), Eu.offInStrict.length > 0 && (0, ju.jsxs)(ju.Fragment, {
          children: [(0, ju.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, ju.jsx)(Ju.c, {
              name: "triangle-exclamation"
            }), " ", yu("shaderPack:offInStrict")]
          }), (0, ju.jsx)(ru.d, {
            diagnostics: Eu.offInStrict,
            t: yu
          })]
        })]
      }) : (0, ju.jsxs)(ju.Fragment, {
        children: [(0, ju.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, ju.jsx)(Ju.c, {
            name: "triangle-exclamation"
          }), " ", yu("shaderPackListing:publishHasErrors")]
        }), (0, ju.jsx)(ru.d, {
          diagnostics: Eu.errors,
          more: Eu.moreErrors,
          t: yu
        })]
      })
    }
    const bu = "\0";

    function Cu() {
      const {
        t: uu
      } = (0, Su.E)(), [Ru, yu] = uu("shaderPackListing:bloxdhubHelp", {
        site: bu
      }).split(bu);
      return (0, ju.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Ru, (0, ju.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ku.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ku.c
        }), yu]
      })
    }
  },
  6353: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => Vu
    });
    var Eu = yu(1467),
      Ku = yu(1408),
      Qu = yu(1170),
      mu = yu(6357),
      Ju = yu(6333),
      Nu = yu(6314),
      Xu = yu(1079);

    function Vu() {
      const {
        t: uu
      } = (0, Qu.E)(), Ru = (0, Eu.useNavigatePreserveSearch)();
      return (0, Ju.b)(), (0, Xu.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Xu.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Xu.jsx)(Ku.b, {
            onClick: () => {
              Ru(Nu.S)
            },
            children: uu("shaderPackListing:backToPacks")
          })
        }), (0, Xu.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: uu("shaderPackListing:publishTitle")
        }), (0, Xu.jsx)(mu.ShaderPackPublishForm, {
          existing: null,
          onPublished: uu => {
            Ru((0, Nu.X)(uu.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6333: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Bu,
      e: () => xu,
      i: () => ru,
      m: () => Su
    });
    var Eu = yu(64),
      Ku = yu(6322),
      Qu = yu(1447),
      mu = yu(6314),
      Ju = yu(6336),
      Nu = yu(1107);
    const Xu = "shaderPackListingView",
      Vu = "shaderPackListingFilterOpen";

    function ru() {
      var uu;
      const [Ru, yu] = (0, Ju.d)(Xu, Ku.A[0]);
      return [null !== (uu = Ku.A.find((uu => uu === Ru))) && void 0 !== uu ? uu : Ku.A[0], yu]
    }

    function Bu() {
      (0, Eu.useEffect)((() => () => {
        window.location.pathname.startsWith(mu.S) || (0, mu.j)()
      }), [])
    }

    function xu() {
      return (0, Ju.d)(Vu, !1)
    }

    function Su() {
      const {
        userContext: uu,
        isUserContextUpdating: Ru
      } = (0, Nu.d)(), [yu, Ku] = (0, Eu.useState)(null), mu = (0, Eu.useRef)(new Set);

      function Ju(uu, Ru) {
        Ku((yu => {
          const Eu = new Set(yu);
          return Ru ? Eu.add(uu) : Eu.delete(uu), Eu
        }))
      }
      return (0, Eu.useEffect)((() => {
        if (Ru) return;
        let yu = !1;
        return Qu.e.getFavouriteShaderPacks(uu).then((uu => {
          yu || Ku(new Set(uu))
        })).catch((uu => {
          console.error("Failed to get favourite shader packs", uu), yu || Ku(new Set)
        })), () => {
          yu = !0
        }
      }), [uu, Ru]), {
        isFavourite: uu => null === yu ? null : yu.has(uu),
        toggle: function(Ru) {
          if (null === yu || mu.current.has(Ru)) return;
          mu.current.add(Ru);
          const Eu = !yu.has(Ru);
          Ju(Ru, Eu), (Eu ? Qu.e.favouriteShaderPack(uu, Ru) : Qu.e.unfavouriteShaderPack(uu, Ru)).catch((uu => {
            console.error("Failed to change a favourite shader pack", uu), Ju(Ru, !Eu)
          })).finally((() => {
            mu.current.delete(Ru)
          }))
        }
      }
    }
  },
  6314: (uu, Ru, yu) => {
    yu.d(Ru, {
      D: () => Vu,
      E: () => Gu,
      I: () => pu,
      K: () => Lu,
      O: () => gu,
      S: () => mu,
      W: () => cu,
      X: () => Nu,
      _: () => Ju,
      cb: () => tu,
      d: () => ju,
      g: () => Au,
      gb: () => lu,
      h: () => Tu,
      hb: () => Hu,
      ib: () => Iu,
      j: () => Bu,
      k: () => ru,
      m: () => Uu,
      p: () => xu,
      t: () => nu,
      u: () => zu,
      v: () => Su,
      x: () => Wu,
      z: () => Mu
    });
    var Eu = yu(6322),
      Ku = yu(174),
      Qu = yu(4331);
    const mu = "/shader-packs",
      Ju = `${mu}/publish`;

    function Nu(uu) {
      return `${mu}/${encodeURIComponent(uu)}`
    }
    let Xu = null;

    function Vu(uu) {
      Xu = uu
    }

    function ru() {
      return Xu
    }

    function Bu() {
      Xu = null
    }

    function xu(uu) {
      return uu.playerHasRank("developer") || uu.playerHasRank("admin")
    }
    const Su = ["terrain", "water", "models", "sunShadows", "strict"],
      pu = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Tu(uu, Ru) {
      return uu.withFeatures.includes(Ru) ? "with" : uu.withoutFeatures.includes(Ru) ? "without" : null
    }

    function Wu(uu) {
      return null === uu ? "with" : "with" === uu ? "without" : null
    }

    function ju(uu) {
      return "with" === uu ? "only" : null === uu ? "include" : void 0
    }

    function Hu(uu, Ru) {
      const yu = Tu(uu, Ru),
        Eu = uu => uu.filter((uu => uu !== Ru));
      return {
        withFeatures: null === yu ? [...uu.withFeatures, Ru] : Eu(uu.withFeatures),
        withoutFeatures: "with" === yu ? [...uu.withoutFeatures, Ru] : Eu(uu.withoutFeatures)
      }
    }
    const du = "section",
      bu = "sort",
      Cu = "filters",
      ku = "q",
      eu = "banned",
      Au = "popular",
      Du = "strict";

    function Mu(uu) {
      var Ru, yu, Ku;
      const mu = uu.get(du),
        Ju = (null !== (Ru = uu.get(Cu)) && void 0 !== Ru ? Ru : Du).split(","),
        Nu = uu.get(eu);
      return {
        section: "favourites" === mu || "mine" === mu ? mu : "explore",
        sort: null !== (yu = Eu.u.find((Ru => Ru === uu.get(bu)))) && void 0 !== yu ? yu : Au,
        withFeatures: Su.filter((uu => Ju.includes(uu) && !Ju.includes(`-${uu}`))),
        withoutFeatures: Su.filter((uu => Ju.includes(`-${uu}`))),
        searchQuery: (null === (Ku = uu.get(ku)) || void 0 === Ku ? void 0 : Ku.slice(0, Eu.H)) || null,
        pageNumber: (0, Qu.d)(uu.get(Qu.c)),
        banned: "only" === Nu ? "with" : "include" === Nu ? null : "without"
      }
    }

    function Iu(uu, Ru) {
      var yu;
      const Eu = su(Ru);
      (0, Qu.h)(uu, du, "explore" === Ru.section ? null : Ru.section), (0, Qu.h)(uu, bu, Ru.sort === Au ? null : Ru.sort), (0, Qu.h)(uu, Cu, Eu === Du ? null : Eu), (0, Qu.h)(uu, ku, Ru.searchQuery), (0, Qu.h)(uu, eu, null !== (yu = ju(Ru.banned)) && void 0 !== yu ? yu : null), (0, Qu.j)(uu, Ru.pageNumber)
    }

    function Gu(uu) {
      const Ru = new URLSearchParams;
      return Iu(Ru, {
        section: "explore",
        sort: Au,
        withFeatures: "strict" === uu ? [uu] : [uu, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mu}?${Ru.toString()}`
    }

    function Uu(uu) {
      return su(uu) === Du
    }

    function nu(uu) {
      return null !== uu.searchQuery || "with" === uu.banned || su(uu) !== Du
    }

    function su(uu) {
      return Su.flatMap((Ru => {
        const yu = Tu(uu, Ru);
        return "with" === yu ? [Ru] : "without" === yu ? [`-${Ru}`] : []
      })).join(",")
    }
    const tu = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      lu = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function gu(uu) {
      return Math.round(100 * Math.max(0, 1 - 1 / uu))
    }

    function cu(uu, Ru, yu, Ku) {
      const Qu = [];
      uu.isBanned && Qu.push({
        tone: "warning",
        text: Ku("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mu
      } = uu;
      if (null === uu.brokenError || mu && !mu.error || Qu.push({
          tone: "warning",
          text: Ku("shaderPackListing:ownerBroken"),
          detail: uu.brokenError
        }), null !== mu && void 0 !== mu && mu.error) Qu.push({
        tone: "warning",
        text: Ku(Ru ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Eu.g)(mu.error) ? null : mu.error
      });
      else if (mu) {
        const uu = null === mu.renderNotBefore ? 0 : mu.renderNotBefore - yu,
          Eu = String(Math.ceil(uu / 6e4)),
          Ju = Ku(Ru ? uu > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : uu > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Eu
          });
        Qu.push({
          tone: "info",
          text: Ju,
          detail: null
        })
      }
      return uu.listed || Qu.push({
        tone: "info",
        text: Ku("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Qu
    }

    function Lu(uu) {
      return Math.max(1, Math.round(uu / 1024))
    }

    function zu(uu, Ru, yu) {
      return uu instanceof Ku.e && uu.errorMessageForUser ? uu.errorMessageForUser : Ru(yu)
    }
  },
  6336: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = yu(64),
      Ku = yu(47);

    function Qu(uu, Ru) {
      var yu;
      const [Qu, mu] = (0, Eu.useState)(null !== (yu = Ku.i.getItem(uu)) && void 0 !== yu ? yu : Ru);
      return [Qu, Ru => {
        Ku.i.setItem(uu, Ru), mu(Ru)
      }]
    }
  },
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
    }
  },
  6322: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Eu,
      D: () => Bu,
      H: () => Vu,
      K: () => Hu,
      N: () => ru,
      R: () => Xu,
      c: () => xu,
      e: () => pu,
      f: () => Su,
      g: () => ju,
      h: () => bu,
      l: () => Nu,
      o: () => Ku,
      q: () => du,
      u: () => Qu,
      w: () => Ju,
      x: () => mu
    });
    const Eu = ["forest", "desert", "water", "night", "cave"];
    const Ku = {
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
      Qu = ["popular", "updated", "newest"],
      mu = 3,
      Ju = 32,
      Nu = 300;

    function Xu(uu, Ru) {
      return uu.slice(0, Ru).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Vu = 64,
      ru = 512,
      Bu = 18e5;
    const xu = "Bloxdhub",
      Su = "https://bloxdhub.com/shaders";

    function pu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Tu = "Screenshot generation failed.",
      Wu = "Its screenshots couldn't be generated:";

    function ju(uu) {
      var Ru;
      return uu === Tu || null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.startsWith(Wu)) && void 0 !== Ru && Ru
    }

    function Hu(uu, Ru) {
      return `shaderPacks/${uu}/${Ru}.json`
    }

    function du(uu, Ru, yu, Eu) {
      return null === Ru.renderId ? bu(uu, Ru.baselineVersion, yu, Eu) : `${uu}/${function(uu,Ru,yu,Eu){return`shaderPacks/${uu}/${Ru}/${yu}-${Eu}.webp`}(Ru.packId,Ru.renderId,yu,Eu)}`
    }

    function bu(uu, Ru, yu, Eu) {
      return `${uu}/${function(uu,Ru,yu){return`shaderPacks/baseline/${uu}/${Ru}-${yu}.webp`}(Ru,yu,Eu)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);