export const id = 109;
export const ids = [109, 397];
export const modules = {
  4953: (kk, Fk, Ik) => {
    var Xk = Ik(4960);

    function Tk() {}

    function ik() {}
    ik.resetWarningCache = Tk, kk.exports = function() {
      function kk(kk, Fk, Ik, Tk, ik, yk) {
        if (yk !== Xk) {
          var lk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lk.name = "Invariant Violation", lk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Ik = {
        array: kk,
        bigint: kk,
        bool: kk,
        func: kk,
        number: kk,
        object: kk,
        string: kk,
        symbol: kk,
        any: kk,
        arrayOf: Fk,
        element: kk,
        elementType: kk,
        instanceOf: Fk,
        node: kk,
        objectOf: Fk,
        oneOf: Fk,
        oneOfType: Fk,
        shape: Fk,
        exact: Fk,
        checkPropTypes: ik,
        resetWarningCache: Tk
      };
      return Ik.PropTypes = Ik, Ik
    }
  },
  4946: (kk, Fk, Ik) => {
    kk.exports = Ik(4953)()
  },
  4960: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6575: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Lk
    });
    var Xk = Ik(1475),
      Tk = Ik(1406),
      ik = Ik(1179),
      yk = Ik(6582),
      lk = Ik(6560),
      ak = Ik(6541),
      qk = Ik(1096);

    function Lk() {
      const {
        t: kk
      } = (0, ik.y)(), Fk = (0, Xk.useNavigatePreserveSearch)();
      return (0, lk.c)(), (0, qk.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, qk.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, qk.jsx)(Tk.c, {
            onClick: () => {
              Fk(ak.X)
            },
            children: kk("shaderPackListing:backToPacks")
          })
        }), (0, qk.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: kk("shaderPackListing:publishTitle")
        }), (0, qk.jsx)(yk.ShaderPackPublishForm, {
          existing: null,
          onPublished: kk => {
            Fk((0, ak.ab)(kk.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6560: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Zk,
      e: () => jk,
      h: () => tk,
      i: () => ek
    });
    var Xk = Ik(58),
      Tk = Ik(6544),
      ik = Ik(1453),
      yk = Ik(6541),
      lk = Ik(6566),
      ak = Ik(1118);
    const qk = "shaderPackListingView",
      Lk = "shaderPackListingFilterOpen";

    function tk() {
      var kk;
      const [Fk, Ik] = (0, lk.b)(qk, Tk.I[0]);
      return [null !== (kk = Tk.I.find((kk => kk === Fk))) && void 0 !== kk ? kk : Tk.I[0], Ik]
    }

    function Zk() {
      (0, Xk.useEffect)((() => () => {
        window.location.pathname.startsWith(yk.X) || (0, yk.n)()
      }), [])
    }

    function jk() {
      return (0, lk.b)(Lk, !1)
    }

    function ek() {
      const {
        userContext: kk,
        isUserContextUpdating: Fk
      } = (0, ak.d)(), [Ik, Tk] = (0, Xk.useState)(null), yk = (0, Xk.useRef)(new Set);

      function lk(kk, Fk) {
        Tk((Ik => {
          const Xk = new Set(Ik);
          return Fk ? Xk.add(kk) : Xk.delete(kk), Xk
        }))
      }
      return (0, Xk.useEffect)((() => {
        if (Fk) return;
        let Ik = !1;
        return ik.e.getFavouriteShaderPacks(kk).then((kk => {
          Ik || Tk(new Set(kk))
        })).catch((kk => {
          console.error("Failed to get favourite shader packs", kk), Ik || Tk(new Set)
        })), () => {
          Ik = !0
        }
      }), [kk, Fk]), {
        isFavourite: kk => null === Ik ? null : Ik.has(kk),
        toggle: function(Fk) {
          if (null === Ik || yk.current.has(Fk)) return;
          yk.current.add(Fk);
          const Xk = !Ik.has(Fk);
          lk(Fk, Xk), (Xk ? ik.e.favouriteShaderPack(kk, Fk) : ik.e.unfavouriteShaderPack(kk, Fk)).catch((kk => {
            console.error("Failed to change a favourite shader pack", kk), lk(Fk, !Xk)
          })).finally((() => {
            yk.current.delete(Fk)
          }))
        }
      }
    }
  },
  6541: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => ck,
      E: () => ek,
      G: () => Jk,
      J: () => Ek,
      K: () => Lk,
      O: () => nk,
      R: () => wk,
      V: () => Nk,
      W: () => Uk,
      X: () => yk,
      Z: () => Ck,
      ab: () => ak,
      db: () => lk,
      e: () => xk,
      gb: () => bk,
      i: () => Sk,
      ib: () => Rk,
      k: () => Hk,
      kb: () => Pk,
      n: () => Zk,
      ob: () => Ok,
      p: () => tk,
      r: () => Gk,
      u: () => jk,
      y: () => pk
    });
    var Xk = Ik(6544),
      Tk = Ik(149),
      ik = Ik(4550);
    const yk = "/shader-packs",
      lk = `${yk}/publish`;

    function ak(kk) {
      return `${yk}/${encodeURIComponent(kk)}`
    }
    let qk = null;

    function Lk(kk) {
      qk = kk
    }

    function tk() {
      return qk
    }

    function Zk() {
      qk = null
    }

    function jk(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const ek = ["terrain", "water", "models", "sunShadows", "strict"],
      wk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Hk(kk, Fk) {
      return kk.withFeatures.includes(Fk) ? "with" : kk.withoutFeatures.includes(Fk) ? "without" : null
    }

    function Jk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function xk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function Pk(kk, Fk) {
      const Ik = Hk(kk, Fk),
        Xk = kk => kk.filter((kk => kk !== Fk));
      return {
        withFeatures: null === Ik ? [...kk.withFeatures, Fk] : Xk(kk.withFeatures),
        withoutFeatures: "with" === Ik ? [...kk.withoutFeatures, Fk] : Xk(kk.withoutFeatures)
      }
    }
    const Kk = "section",
      Qk = "sort",
      sk = "filters",
      Vk = "q",
      zk = "banned",
      Sk = "popular",
      vk = "strict";

    function Ek(kk) {
      var Fk, Ik, Tk;
      const yk = kk.get(Kk),
        lk = (null !== (Fk = kk.get(sk)) && void 0 !== Fk ? Fk : vk).split(","),
        ak = kk.get(zk);
      return {
        section: "favourites" === yk || "mine" === yk ? yk : "explore",
        sort: null !== (Ik = Xk.z.find((Fk => Fk === kk.get(Qk)))) && void 0 !== Ik ? Ik : Sk,
        withFeatures: ek.filter((kk => lk.includes(kk) && !lk.includes(`-${kk}`))),
        withoutFeatures: ek.filter((kk => lk.includes(`-${kk}`))),
        searchQuery: (null === (Tk = kk.get(Vk)) || void 0 === Tk ? void 0 : Tk.slice(0, Xk.N)) || null,
        pageNumber: (0, ik.f)(kk.get(ik.b)),
        banned: "only" === ak ? "with" : "include" === ak ? null : "without"
      }
    }

    function Ok(kk, Fk) {
      var Ik;
      const Xk = uk(Fk);
      (0, ik.g)(kk, Kk, "explore" === Fk.section ? null : Fk.section), (0, ik.g)(kk, Qk, Fk.sort === Sk ? null : Fk.sort), (0, ik.g)(kk, sk, Xk === vk ? null : Xk), (0, ik.g)(kk, Vk, Fk.searchQuery), (0, ik.g)(kk, zk, null !== (Ik = xk(Fk.banned)) && void 0 !== Ik ? Ik : null), (0, ik.i)(kk, Fk.pageNumber)
    }

    function nk(kk) {
      const Fk = new URLSearchParams;
      return Ok(Fk, {
        section: "explore",
        sort: Sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${yk}?${Fk.toString()}`
    }

    function Gk(kk) {
      return uk(kk) === vk
    }

    function pk(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || uk(kk) !== vk
    }

    function uk(kk) {
      return ek.flatMap((Fk => {
        const Ik = Hk(kk, Fk);
        return "with" === Ik ? [Fk] : "without" === Ik ? [`-${Fk}`] : []
      })).join(",")
    }
    const bk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Rk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Uk(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function Ck(kk, Fk, Ik, Tk) {
      const ik = [];
      kk.isBanned && ik.push({
        tone: "warning",
        text: Tk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: yk
      } = kk;
      if (null === kk.brokenError || yk && !yk.error || ik.push({
          tone: "warning",
          text: Tk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== yk && void 0 !== yk && yk.error) ik.push({
        tone: "warning",
        text: Tk(Fk ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Xk.l)(yk.error) ? null : yk.error
      });
      else if (yk) {
        const kk = null === yk.renderNotBefore ? 0 : yk.renderNotBefore - Ik,
          Xk = String(Math.ceil(kk / 6e4)),
          lk = Tk(Fk ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Xk
          });
        ik.push({
          tone: "info",
          text: lk,
          detail: null
        })
      }
      return kk.listed || ik.push({
        tone: "info",
        text: Tk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ik
    }

    function Nk(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function ck(kk, Fk, Ik) {
      return kk instanceof Tk.b && kk.errorMessageForUser ? kk.errorMessageForUser : Fk(Ik)
    }
  },
  6566: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik
    });
    var Xk = Ik(58),
      Tk = Ik(41);

    function ik(kk, Fk) {
      var Ik;
      const [ik, yk] = (0, Xk.useState)(null !== (Ik = Tk.j.getItem(kk)) && void 0 !== Ik ? Ik : Fk);
      return [ik, Fk => {
        Tk.j.setItem(kk, Fk), yk(Fk)
      }]
    }
  },
  6644: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      i: () => ik
    });
    var Xk = Ik(41);
    const Tk = "shaderPack";
    async function ik() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Xk.g.getItem(Tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  6544: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => lk,
      E: () => yk,
      I: () => Xk,
      K: () => Zk,
      N: () => Lk,
      P: () => Kk,
      Q: () => tk,
      U: () => qk,
      d: () => ek,
      e: () => Hk,
      g: () => wk,
      j: () => jk,
      l: () => Pk,
      p: () => sk,
      q: () => ak,
      u: () => Tk,
      y: () => Qk,
      z: () => ik
    });
    const Xk = ["forest", "desert", "water", "night", "cave"];
    const Tk = {
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
      ik = ["popular", "updated", "newest"],
      yk = 3,
      lk = 32,
      ak = 300;

    function qk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Lk = 64,
      tk = 512,
      Zk = 18e5;

    function jk(kk) {
      const Fk = kk,
        Ik = null === Fk || void 0 === Fk ? void 0 : Fk.files;
      return "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.apiVersion) && "string" === typeof Fk.name && (null === Fk.author || "string" === typeof Fk.author) && (void 0 === Fk.keepCircleShadows || "boolean" === typeof Fk.keepCircleShadows) && "object" === typeof Ik && null !== Ik && Object.values(Ik).every((kk => "string" === typeof kk))
    }
    const ek = "Bloxdhub",
      wk = "https://bloxdhub.com/shaders";

    function Hk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const Jk = "Screenshot generation failed.",
      xk = "Its screenshots couldn't be generated:";

    function Pk(kk) {
      var Fk;
      return kk === Jk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(xk)) && void 0 !== Fk && Fk
    }

    function Kk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function Qk(kk, Fk, Ik, Xk) {
      return null === Fk.renderId ? sk(kk, Fk.baselineVersion, Ik, Xk) : `${kk}/${function(kk,Fk,Ik,Xk){return`shaderPacks/${kk}/${Fk}/${Ik}-${Xk}.webp`}(Fk.packId,Fk.renderId,Ik,Xk)}`
    }

    function sk(kk, Fk, Ik, Xk) {
      return `${kk}/${function(kk,Fk,Ik){return`shaderPacks/baseline/${kk}/${Fk}-${Ik}.webp`}(Fk,Ik,Xk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);