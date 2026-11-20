export const id = 121;
export const ids = [121];
export const modules = {
  6325: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(1170),
      mu = yu(1079);

    function Ju(uu) {
      let {
        item: Ru,
        className: yu
      } = uu;
      const {
        t: Eu
      } = (0, Qu.E)();
      return null === Ru.renderId || Ru.previewsOutdated ? (0, mu.jsx)("div", {
        className: Ku()("ShaderPackPreviewsNotice", yu),
        children: (0, mu.jsx)("span", {
          children: Eu(null === Ru.renderId ? "shaderPackListing:screenshotsNotGenerated" : "shaderPackListing:screenshotsNotRegenerated")
        })
      }) : null
    }
  },
  6344: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(6322),
      mu = yu(1170),
      Ju = yu(6314),
      Nu = yu(1079);

    function Xu(uu) {
      let {
        selected: Ru,
        onSelect: yu,
        imageUrl: Eu
      } = uu;
      const {
        t: Xu
      } = (0, mu.E)();
      return (0, Nu.jsx)("div", {
        className: "ShaderPackViewPicker",
        children: Qu.A.map((uu => {
          const Qu = Eu(uu);
          return (0, Nu.jsxs)("button", {
            type: "button",
            "aria-pressed": uu === Ru,
            className: Ku()("ShaderPackViewOption", {
              Selected: uu === Ru
            }),
            onClick: () => {
              yu(uu)
            },
            children: [null !== Qu && (0, Nu.jsx)("img", {
              src: Qu,
              alt: "",
              loading: "lazy",
              draggable: !1
            }), (0, Nu.jsx)("span", {
              className: "SmallTextBold",
              children: Xu(Ju.gb[uu])
            })]
          }, uu)
        }))
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