export const id = 111;
export const ids = [111, 402];
export const modules = {
  5131: (uu, Eu, ju) => {
    var su = ju(5135);

    function Uu() {}

    function Zu() {}
    Zu.resetWarningCache = Uu, uu.exports = function() {
      function uu(uu, Eu, ju, Uu, Zu, Xu) {
        if (Xu !== su) {
          var lu = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lu.name = "Invariant Violation", lu
        }
      }

      function Eu() {
        return uu
      }
      uu.isRequired = uu;
      var ju = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Eu,
        element: uu,
        elementType: uu,
        instanceOf: Eu,
        node: uu,
        objectOf: Eu,
        oneOf: Eu,
        oneOfType: Eu,
        shape: Eu,
        exact: Eu,
        checkPropTypes: Zu,
        resetWarningCache: Uu
      };
      return ju.PropTypes = ju, ju
    }
  },
  5128: (uu, Eu, ju) => {
    uu.exports = ju(5131)()
  },
  5135: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6787: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Cu
    });
    var su = ju(1570),
      Uu = ju(1506),
      Zu = ju(1244),
      Xu = ju(6796),
      lu = ju(6771),
      qu = ju(6761),
      fu = ju(1154);

    function Cu() {
      const {
        t: uu
      } = (0, Zu.A)(), Eu = (0, su.useNavigatePreserveSearch)();
      return (0, lu.b)(), (0, fu.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, fu.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, fu.jsx)(Uu.d, {
            onClick: () => {
              Eu(qu.R)
            },
            children: uu("shaderPackListing:backToPacks")
          })
        }), (0, fu.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: uu("shaderPackListing:publishTitle")
        }), (0, fu.jsx)(Xu.ShaderPackPublishForm, {
          existing: null,
          onPublished: uu => {
            Eu((0, qu.U)(uu.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6771: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      c: () => Nu,
      f: () => bu,
      g: () => Ou
    });
    var su = ju(58),
      Uu = ju(6764),
      Zu = ju(1559),
      Xu = ju(6761),
      lu = ju(6777),
      qu = ju(1178);
    const fu = "shaderPackListingView",
      Cu = "shaderPackListingFilterOpen";

    function bu() {
      var uu;
      const [Eu, ju] = (0, lu.c)(fu, Uu.M[0]);
      return [null !== (uu = Uu.M.find((uu => uu === Eu))) && void 0 !== uu ? uu : Uu.M[0], ju]
    }

    function cu() {
      (0, su.useEffect)((() => () => {
        window.location.pathname.startsWith(Xu.R) || (0, Xu.l)()
      }), [])
    }

    function Nu() {
      return (0, lu.c)(Cu, !1)
    }

    function Ou() {
      const {
        userContext: uu,
        isUserContextUpdating: Eu
      } = (0, qu.c)(), [ju, Uu] = (0, su.useState)(null), Xu = (0, su.useRef)(new Set);

      function lu(uu, Eu) {
        Uu((ju => {
          const su = new Set(ju);
          return Eu ? su.add(uu) : su.delete(uu), su
        }))
      }
      return (0, su.useEffect)((() => {
        if (Eu) return;
        let ju = !1;
        return Zu.b.getFavouriteShaderPacks(uu).then((uu => {
          ju || Uu(new Set(uu))
        })).catch((uu => {
          console.error("Failed to get favourite shader packs", uu), ju || Uu(new Set)
        })), () => {
          ju = !0
        }
      }), [uu, Eu]), {
        isFavourite: uu => null === ju ? null : ju.has(uu),
        toggle: function(Eu) {
          if (null === ju || Xu.current.has(Eu)) return;
          Xu.current.add(Eu);
          const su = !ju.has(Eu);
          lu(Eu, su), (su ? Zu.b.favouriteShaderPack(uu, Eu) : Zu.b.unfavouriteShaderPack(uu, Eu)).catch((uu => {
            console.error("Failed to change a favourite shader pack", uu), lu(Eu, !su)
          })).finally((() => {
            Xu.current.delete(Eu)
          }))
        }
      }
    }
  },
  6761: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => Du,
      B: () => Pu,
      F: () => Cu,
      H: () => ku,
      I: () => Yu,
      M: () => Wu,
      N: () => Qu,
      R: () => Xu,
      T: () => iu,
      U: () => qu,
      V: () => lu,
      Y: () => Vu,
      ab: () => ru,
      d: () => gu,
      eb: () => Mu,
      gb: () => ou,
      h: () => du,
      k: () => hu,
      l: () => cu,
      o: () => bu,
      r: () => mu,
      s: () => Nu,
      w: () => vu,
      x: () => Su,
      y: () => Ou
    });
    var su = ju(6764),
      Uu = ju(166),
      Zu = ju(4740);
    const Xu = "/shader-packs",
      lu = `${Xu}/publish`;

    function qu(uu) {
      return `${Xu}/${encodeURIComponent(uu)}`
    }
    let fu = null;

    function Cu(uu) {
      fu = uu
    }

    function bu() {
      return fu
    }

    function cu() {
      fu = null
    }

    function Nu(uu) {
      return uu.playerHasRank("developer") || uu.playerHasRank("admin")
    }
    const Ou = ["terrain", "water", "models", "sunShadows", "strict"],
      Yu = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function hu(uu, Eu) {
      return uu.withFeatures.includes(Eu) ? "with" : uu.withoutFeatures.includes(Eu) ? "without" : null
    }

    function Du(uu) {
      return null === uu ? "with" : "with" === uu ? "without" : null
    }

    function gu(uu) {
      return "with" === uu ? "only" : null === uu ? "include" : void 0
    }

    function Mu(uu, Eu) {
      const ju = hu(uu, Eu),
        su = uu => uu.filter((uu => uu !== Eu));
      return {
        withFeatures: null === ju ? [...uu.withFeatures, Eu] : su(uu.withFeatures),
        withoutFeatures: "with" === ju ? [...uu.withoutFeatures, Eu] : su(uu.withoutFeatures)
      }
    }
    const eu = "section",
      Gu = "sort",
      pu = "filters",
      wu = "q",
      Ju = "banned",
      du = "popular",
      au = "strict";

    function Pu(uu) {
      var Eu, ju, Uu;
      const Xu = uu.get(eu),
        lu = (null !== (Eu = uu.get(pu)) && void 0 !== Eu ? Eu : au).split(","),
        qu = uu.get(Ju);
      return {
        section: "favourites" === Xu || "mine" === Xu ? Xu : "explore",
        sort: null !== (ju = su.E.find((Eu => Eu === uu.get(Gu)))) && void 0 !== ju ? ju : du,
        withFeatures: Ou.filter((uu => lu.includes(uu) && !lu.includes(`-${uu}`))),
        withoutFeatures: Ou.filter((uu => lu.includes(`-${uu}`))),
        searchQuery: (null === (Uu = uu.get(wu)) || void 0 === Uu ? void 0 : Uu.slice(0, su.R)) || null,
        pageNumber: (0, Zu.c)(uu.get(Zu.b)),
        banned: "only" === qu ? "with" : "include" === qu ? null : "without"
      }
    }

    function ou(uu, Eu) {
      var ju;
      const su = Ku(Eu);
      (0, Zu.f)(uu, eu, "explore" === Eu.section ? null : Eu.section), (0, Zu.f)(uu, Gu, Eu.sort === du ? null : Eu.sort), (0, Zu.f)(uu, pu, su === au ? null : su), (0, Zu.f)(uu, wu, Eu.searchQuery), (0, Zu.f)(uu, Ju, null !== (ju = gu(Eu.banned)) && void 0 !== ju ? ju : null), (0, Zu.i)(uu, Eu.pageNumber)
    }

    function ku(uu) {
      const Eu = new URLSearchParams;
      return ou(Eu, {
        section: "explore",
        sort: du,
        withFeatures: "strict" === uu ? [uu] : [uu, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xu}?${Eu.toString()}`
    }

    function mu(uu) {
      return Ku(uu) === au
    }

    function vu(uu) {
      return null !== uu.searchQuery || "with" === uu.banned || Ku(uu) !== au
    }

    function Ku(uu) {
      return Ou.flatMap((Eu => {
        const ju = hu(uu, Eu);
        return "with" === ju ? [Eu] : "without" === ju ? [`-${Eu}`] : []
      })).join(",")
    }
    const Vu = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      ru = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Qu(uu) {
      return Math.round(100 * Math.max(0, 1 - 1 / uu))
    }

    function iu(uu, Eu, ju, Uu) {
      const Zu = [];
      uu.isBanned && Zu.push({
        tone: "warning",
        text: Uu("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xu
      } = uu;
      if (null === uu.brokenError || Xu && !Xu.error || Zu.push({
          tone: "warning",
          text: Uu("shaderPackListing:ownerBroken"),
          detail: uu.brokenError
        }), null !== Xu && void 0 !== Xu && Xu.error) Zu.push({
        tone: "warning",
        text: Uu(Eu ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, su.r)(Xu.error) ? null : Xu.error
      });
      else if (Xu) {
        const uu = null === Xu.renderNotBefore ? 0 : Xu.renderNotBefore - ju,
          su = String(Math.ceil(uu / 6e4)),
          lu = Uu(Eu ? uu > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : uu > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: su
          });
        Zu.push({
          tone: "info",
          text: lu,
          detail: null
        })
      }
      return uu.listed || Zu.push({
        tone: "info",
        text: Uu("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Zu
    }

    function Wu(uu) {
      return Math.max(1, Math.round(uu / 1024))
    }

    function Su(uu, Eu, ju) {
      return uu instanceof Uu.b && uu.errorMessageForUser ? uu.errorMessageForUser : Eu(ju)
    }
  },
  6777: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu
    });
    var su = ju(58),
      Uu = ju(31);

    function Zu(uu, Eu) {
      var ju;
      const [Zu, Xu] = (0, su.useState)(null !== (ju = Uu.k.getItem(uu)) && void 0 !== ju ? ju : Eu);
      return [Zu, Eu => {
        Uu.k.setItem(uu, Eu), Xu(Eu)
      }]
    }
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  },
  6764: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => Gu,
      E: () => Zu,
      F: () => lu,
      I: () => Xu,
      M: () => su,
      Q: () => cu,
      R: () => Cu,
      U: () => eu,
      X: () => bu,
      _: () => fu,
      c: () => Ou,
      f: () => hu,
      j: () => Yu,
      n: () => Nu,
      r: () => Mu,
      t: () => pu,
      x: () => qu,
      z: () => Uu
    });
    const su = ["forest", "desert", "water", "night", "cave"];
    const Uu = {
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
      Zu = ["popular", "updated", "newest"],
      Xu = 3,
      lu = 32,
      qu = 300;

    function fu(uu, Eu) {
      return uu.slice(0, Eu).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Cu = 64,
      bu = 512,
      cu = 18e5;

    function Nu(uu) {
      const Eu = uu,
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.files;
      return "number" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.apiVersion) && "string" === typeof Eu.name && (null === Eu.author || "string" === typeof Eu.author) && (void 0 === Eu.keepCircleShadows || "boolean" === typeof Eu.keepCircleShadows) && "object" === typeof ju && null !== ju && Object.values(ju).every((uu => "string" === typeof uu))
    }
    const Ou = "Bloxdhub",
      Yu = "https://bloxdhub.com/shaders";

    function hu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Du = "Screenshot generation failed.",
      gu = "Its screenshots couldn't be generated:";

    function Mu(uu) {
      var Eu;
      return uu === Du || null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.startsWith(gu)) && void 0 !== Eu && Eu
    }

    function eu(uu, Eu) {
      return `shaderPacks/${uu}/${Eu}.json`
    }

    function Gu(uu, Eu, ju, su) {
      return null === Eu.renderId ? pu(uu, Eu.baselineVersion, ju, su) : `${uu}/${function(uu,Eu,ju,su){return`shaderPacks/${uu}/${Eu}/${ju}-${su}.webp`}(Eu.packId,Eu.renderId,ju,su)}`
    }

    function pu(uu, Eu, ju, su) {
      return `${uu}/${function(uu,Eu,ju){return`shaderPacks/baseline/${uu}/${Eu}-${ju}.webp`}(Eu,ju,su)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);