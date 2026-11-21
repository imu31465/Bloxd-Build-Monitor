export const id = 108;
export const ids = [108, 125];
export const modules = {
  4854: (dd, Jd, kd) => {
    var pd = kd(4856);

    function Nd() {}

    function Wd() {}
    Wd.resetWarningCache = Nd, dd.exports = function() {
      function dd(dd, Jd, kd, Nd, Wd, Pd) {
        if (Pd !== pd) {
          var Zd = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Zd.name = "Invariant Violation", Zd
        }
      }

      function Jd() {
        return dd
      }
      dd.isRequired = dd;
      var kd = {
        array: dd,
        bigint: dd,
        bool: dd,
        func: dd,
        number: dd,
        object: dd,
        string: dd,
        symbol: dd,
        any: dd,
        arrayOf: Jd,
        element: dd,
        elementType: dd,
        instanceOf: Jd,
        node: dd,
        objectOf: Jd,
        oneOf: Jd,
        oneOfType: Jd,
        shape: Jd,
        exact: Jd,
        checkPropTypes: Wd,
        resetWarningCache: Nd
      };
      return kd.PropTypes = kd, kd
    }
  },
  4845: (dd, Jd, kd) => {
    dd.exports = kd(4854)()
  },
  4856: dd => {
    dd.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6451: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ShaderPackPublishForm: () => Gd
    });
    var pd = kd(56),
      Nd = kd(6425),
      Wd = kd(195),
      Pd = kd(6457),
      Zd = kd(1059),
      gd = kd(1461),
      Cd = kd(1714),
      Kd = kd(1140),
      od = kd(6459),
      ld = kd(6472),
      Qd = kd(1520),
      Ld = kd(1211),
      Od = kd(6478),
      ed = kd(6522),
      Rd = kd(6419),
      Id = kd(1103);

    function Gd(dd) {
      var Jd, kd, od;
      let {
        existing: Gd,
        onPublished: xd
      } = dd;
      const {
        t: Bd
      } = (0, Ld.B)(), {
        userContext: sd,
        isUserContextUpdating: ad
      } = (0, Kd.c)(), [Md, Fd] = (0, pd.useState)(null), [Yd, md] = (0, pd.useState)(0), [bd, Sd] = (0, pd.useState)(null !== (Jd = null === Gd || void 0 === Gd ? void 0 : Gd.name) && void 0 !== Jd ? Jd : ""), jd = (0, pd.useRef)(bd), Xd = (0, pd.useRef)(""), fd = dd => {
        jd.current = dd, Sd(dd)
      }, [nd, Ud] = (0, pd.useState)(null !== (kd = null === Gd || void 0 === Gd ? void 0 : Gd.description) && void 0 !== kd ? kd : ""), yd = (0, pd.useRef)(nd), Dd = (0, pd.useRef)(""), Td = dd => {
        yd.current = dd, Ud(dd)
      }, [Ed, cd] = (0, pd.useState)(!1), {
        loading: hd,
        error: rd,
        setError: ud,
        onFiles: td
      } = (0, ld.h)((async dd => {
        const Jd = await (0, Od.loadPageShaderPackCompiler)();
        if (!Jd) return void ud(Bd("shaderPack:compilerUnavailable"));
        const kd = await (0, ed.f)(Jd, dd.files);
        if (Fd({
            pack: dd,
            validation: kd,
            sourceBytes: (0, Pd.w)(dd.files)
          }), !Gd) {
          var pd;
          if ("" !== jd.current.trim() && jd.current !== Xd.current || (Xd.current = (0, Nd.I)(dd.manifest.name.trim(), Nd.t), fd(Xd.current)), "" === yd.current.trim() || yd.current === Dd.current) Dd.current = (0, Nd.I)((null !== (pd = dd.manifest.description) && void 0 !== pd ? pd : "").trim(), Nd.m), Td(Dd.current);
          md((dd => dd + 1))
        }
      })), Vd = !ad && !sd.isLoggedIn() && !Wd.b.offlineMode, zd = bd.trim(), Hd = zd.length < Nd.v, wd = null !== Md && !1 !== (null === (od = Md.validation) || void 0 === od ? void 0 : od.ok) && !hd && !Hd && !Vd && !ad;
      return (0, Id.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Id.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Gd ? Bd("shaderPackListing:uploadIntro", {
            minutes: String(Nd.z / 6e4)
          }) : Bd("shaderPackListing:publishIntro")
        }), (0, Id.jsx)(qd, {}), Vd && (0, Id.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Bd("shaderPackListing:publishNeedsLogin")
        }), (0, Id.jsx)(ld.e, {
          busy: hd,
          disabled: hd || Ed,
          onFiles: dd => {
            Fd(null), td(dd)
          }
        }), Md && (0, Id.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Id.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Md.pack.manifest.name
          }), (0, Id.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Bd("shaderPackListing:sizeValue", {
              kilobytes: String((0, Rd.R)(Md.sourceBytes))
            }), " \xb7", " ", Bd("shaderPackListing:filesValue", {
              files: String(Md.pack.files.length)
            })]
          }), (0, Id.jsx)(vd, {
            picked: Md
          })]
        }), !Gd && (0, Id.jsxs)(Id.Fragment, {
          children: [(0, Id.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Id.jsx)("span", {
              children: Bd("general:name")
            }), (0, Id.jsx)(Cd.e, {
              className: "ShaderPackPublishInput",
              defaultValue: bd,
              maxLength: Nd.t,
              onValueChange: fd
            }, Yd), Md && Hd && (0, Id.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Bd("shaderPackListing:nameTooShort", {
                min: String(Nd.v)
              })
            })]
          }), (0, Id.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Id.jsx)("span", {
              children: Bd("general:description")
            }), (0, Id.jsx)(Cd.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: nd,
              maxLength: Nd.m,
              onValueChange: Td,
              useTextarea: !0
            }, Yd)]
          })]
        }), rd && (0, Id.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: rd
        }), (0, Id.jsxs)(gd.j, {
          className: "ShaderPackPublishButton",
          disabled: !wd,
          loading: Ed,
          onClick: () => {
            !async function() {
              var dd;
              if (!Md) return;
              const {
                name: Jd,
                description: kd
              } = null !== Gd && void 0 !== Gd ? Gd : {
                name: zd,
                description: nd.trim()
              }, pd = {
                packId: null !== (dd = null === Gd || void 0 === Gd ? void 0 : Gd.packId) && void 0 !== dd ? dd : null,
                name: Jd,
                description: kd,
                apiVersion: Md.pack.manifest.apiVersion,
                files: (0, Pd.v)(Md.pack.files),
                keepCircleShadows: !0 === Md.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(pd)).byteLength > 1024 * Nd.G) ud(Bd("shaderPackListing:publishTooBig", {
                kilobytes: String(Nd.G)
              }));
              else {
                cd(!0), ud(null);
                try {
                  xd(await Qd.d.publishShaderPack(sd, pd))
                } catch (Wd) {
                  console.error("Failed to publish the shader pack", Wd), ud((0, Rd.x)(Wd, Bd, "shaderPackListing:publishFailed"))
                } finally {
                  cd(!1)
                }
              }
            }()
          },
          children: [(0, Id.jsx)(Zd.e, {
            name: "upload"
          }), " ", Bd(Gd ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function vd(dd) {
      let {
        picked: Jd
      } = dd;
      const {
        t: kd
      } = (0, Ld.B)(), {
        validation: pd
      } = Jd;
      return null === pd ? (0, Id.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: kd("shaderPackListing:publishUnchecked")
      }) : pd.ok ? (0, Id.jsxs)(Id.Fragment, {
        children: [(0, Id.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Id.jsx)(Zd.e, {
            name: "circle-check"
          }), " ", kd("shaderPackListing:publishReady")]
        }), pd.offInStrict.length > 0 && (0, Id.jsxs)(Id.Fragment, {
          children: [(0, Id.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Id.jsx)(Zd.e, {
              name: "triangle-exclamation"
            }), " ", kd("shaderPack:offInStrict")]
          }), (0, Id.jsx)(od.c, {
            diagnostics: pd.offInStrict,
            t: kd
          })]
        })]
      }) : (0, Id.jsxs)(Id.Fragment, {
        children: [(0, Id.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Id.jsx)(Zd.e, {
            name: "triangle-exclamation"
          }), " ", kd("shaderPackListing:publishHasErrors")]
        }), (0, Id.jsx)(od.c, {
          diagnostics: pd.errors,
          more: pd.moreErrors,
          t: kd
        })]
      })
    }
    const xd = "\0";

    function qd() {
      const {
        t: dd
      } = (0, Ld.B)(), [Jd, kd] = dd("shaderPackListing:bloxdhubHelp", {
        site: xd
      }).split(xd);
      return (0, Id.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Jd, (0, Id.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Nd.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Nd.c
        }), kd]
      })
    }
  },
  6443: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => Kd
    });
    var pd = kd(1543),
      Nd = kd(1461),
      Wd = kd(1211),
      Pd = kd(6451),
      Zd = kd(6430),
      gd = kd(6419),
      Cd = kd(1103);

    function Kd() {
      const {
        t: dd
      } = (0, Wd.B)(), Jd = (0, pd.useNavigatePreserveSearch)();
      return (0, Zd.d)(), (0, Cd.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Cd.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Cd.jsx)(Nd.b, {
            onClick: () => {
              Jd(gd.X)
            },
            children: dd("shaderPackListing:backToPacks")
          })
        }), (0, Cd.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: dd("shaderPackListing:publishTitle")
        }), (0, Cd.jsx)(Pd.ShaderPackPublishForm, {
          existing: null,
          onPublished: dd => {
            Jd((0, gd.$)(dd.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6430: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld,
      g: () => Qd,
      i: () => od,
      j: () => Ld
    });
    var pd = kd(56),
      Nd = kd(6425),
      Wd = kd(1520),
      Pd = kd(6419),
      Zd = kd(6435),
      gd = kd(1140);
    const Cd = "shaderPackListingView",
      Kd = "shaderPackListingFilterOpen";

    function od() {
      var dd;
      const [Jd, kd] = (0, Zd.d)(Cd, Nd.w[0]);
      return [null !== (dd = Nd.w.find((dd => dd === Jd))) && void 0 !== dd ? dd : Nd.w[0], kd]
    }

    function ld() {
      (0, pd.useEffect)((() => () => {
        window.location.pathname.startsWith(Pd.X) || (0, Pd.n)()
      }), [])
    }

    function Qd() {
      return (0, Zd.d)(Kd, !1)
    }

    function Ld() {
      const {
        userContext: dd,
        isUserContextUpdating: Jd
      } = (0, gd.c)(), [kd, Nd] = (0, pd.useState)(null), Pd = (0, pd.useRef)(new Set);

      function Zd(dd, Jd) {
        Nd((kd => {
          const pd = new Set(kd);
          return Jd ? pd.add(dd) : pd.delete(dd), pd
        }))
      }
      return (0, pd.useEffect)((() => {
        if (Jd) return;
        let kd = !1;
        return Wd.d.getFavouriteShaderPacks(dd).then((dd => {
          kd || Nd(new Set(dd))
        })).catch((dd => {
          console.error("Failed to get favourite shader packs", dd), kd || Nd(new Set)
        })), () => {
          kd = !0
        }
      }), [dd, Jd]), {
        isFavourite: dd => null === kd ? null : kd.has(dd),
        toggle: function(Jd) {
          if (null === kd || Pd.current.has(Jd)) return;
          Pd.current.add(Jd);
          const pd = !kd.has(Jd);
          Zd(Jd, pd), (pd ? Wd.d.favouriteShaderPack(dd, Jd) : Wd.d.unfavouriteShaderPack(dd, Jd)).catch((dd => {
            console.error("Failed to change a favourite shader pack", dd), Zd(Jd, !pd)
          })).finally((() => {
            Pd.current.delete(Jd)
          }))
        }
      }
    }
  },
  6419: (dd, Jd, kd) => {
    kd.d(Jd, {
      $: () => gd,
      B: () => Ld,
      C: () => Rd,
      E: () => Fd,
      H: () => Kd,
      L: () => md,
      P: () => Od,
      R: () => yd,
      U: () => nd,
      X: () => Pd,
      _: () => Ud,
      cb: () => Zd,
      e: () => Id,
      fb: () => Xd,
      g: () => ad,
      gb: () => fd,
      ib: () => Gd,
      j: () => ed,
      kb: () => Yd,
      n: () => ld,
      q: () => od,
      r: () => bd,
      t: () => Qd,
      v: () => Sd,
      x: () => Dd
    });
    var pd = kd(6425),
      Nd = kd(149),
      Wd = kd(4411);
    const Pd = "/shader-packs",
      Zd = `${Pd}/publish`;

    function gd(dd) {
      return `${Pd}/${encodeURIComponent(dd)}`
    }
    let Cd = null;

    function Kd(dd) {
      Cd = dd
    }

    function od() {
      return Cd
    }

    function ld() {
      Cd = null
    }

    function Qd(dd) {
      return dd.playerHasRank("developer") || dd.playerHasRank("admin")
    }
    const Ld = ["terrain", "water", "models", "sunShadows", "strict"],
      Od = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ed(dd, Jd) {
      return dd.withFeatures.includes(Jd) ? "with" : dd.withoutFeatures.includes(Jd) ? "without" : null
    }

    function Rd(dd) {
      return null === dd ? "with" : "with" === dd ? "without" : null
    }

    function Id(dd) {
      return "with" === dd ? "only" : null === dd ? "include" : void 0
    }

    function Gd(dd, Jd) {
      const kd = ed(dd, Jd),
        pd = dd => dd.filter((dd => dd !== Jd));
      return {
        withFeatures: null === kd ? [...dd.withFeatures, Jd] : pd(dd.withFeatures),
        withoutFeatures: "with" === kd ? [...dd.withoutFeatures, Jd] : pd(dd.withoutFeatures)
      }
    }
    const vd = "section",
      xd = "sort",
      qd = "filters",
      Bd = "q",
      sd = "banned",
      ad = "popular",
      Md = "strict";

    function Fd(dd) {
      var Jd, kd, Nd;
      const Pd = dd.get(vd),
        Zd = (null !== (Jd = dd.get(qd)) && void 0 !== Jd ? Jd : Md).split(","),
        gd = dd.get(sd);
      return {
        section: "favourites" === Pd || "mine" === Pd ? Pd : "explore",
        sort: null !== (kd = pd.s.find((Jd => Jd === dd.get(xd)))) && void 0 !== kd ? kd : ad,
        withFeatures: Ld.filter((dd => Zd.includes(dd) && !Zd.includes(`-${dd}`))),
        withoutFeatures: Ld.filter((dd => Zd.includes(`-${dd}`))),
        searchQuery: (null === (Nd = dd.get(Bd)) || void 0 === Nd ? void 0 : Nd.slice(0, pd.B)) || null,
        pageNumber: (0, Wd.e)(dd.get(Wd.b)),
        banned: "only" === gd ? "with" : "include" === gd ? null : "without"
      }
    }

    function Yd(dd, Jd) {
      var kd;
      const pd = jd(Jd);
      (0, Wd.i)(dd, vd, "explore" === Jd.section ? null : Jd.section), (0, Wd.i)(dd, xd, Jd.sort === ad ? null : Jd.sort), (0, Wd.i)(dd, qd, pd === Md ? null : pd), (0, Wd.i)(dd, Bd, Jd.searchQuery), (0, Wd.i)(dd, sd, null !== (kd = Id(Jd.banned)) && void 0 !== kd ? kd : null), (0, Wd.k)(dd, Jd.pageNumber)
    }

    function md(dd) {
      const Jd = new URLSearchParams;
      return Yd(Jd, {
        section: "explore",
        sort: ad,
        withFeatures: "strict" === dd ? [dd] : [dd, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Pd}?${Jd.toString()}`
    }

    function bd(dd) {
      return jd(dd) === Md
    }

    function Sd(dd) {
      return null !== dd.searchQuery || "with" === dd.banned || jd(dd) !== Md
    }

    function jd(dd) {
      return Ld.flatMap((Jd => {
        const kd = ed(dd, Jd);
        return "with" === kd ? [Jd] : "without" === kd ? [`-${Jd}`] : []
      })).join(",")
    }
    const Xd = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      fd = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function nd(dd) {
      return Math.round(100 * Math.max(0, 1 - 1 / dd))
    }

    function Ud(dd, Jd, kd, Nd) {
      const Wd = [];
      dd.isBanned && Wd.push({
        tone: "warning",
        text: Nd("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Pd
      } = dd;
      if (null === dd.brokenError || Pd && !Pd.error || Wd.push({
          tone: "warning",
          text: Nd("shaderPackListing:ownerBroken"),
          detail: dd.brokenError
        }), null !== Pd && void 0 !== Pd && Pd.error) Wd.push({
        tone: "warning",
        text: Nd(Jd ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, pd.h)(Pd.error) ? null : Pd.error
      });
      else if (Pd) {
        const dd = null === Pd.renderNotBefore ? 0 : Pd.renderNotBefore - kd,
          pd = String(Math.ceil(dd / 6e4)),
          Zd = Nd(Jd ? dd > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : dd > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: pd
          });
        Wd.push({
          tone: "info",
          text: Zd,
          detail: null
        })
      }
      return dd.listed || Wd.push({
        tone: "info",
        text: Nd("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Wd
    }

    function yd(dd) {
      return Math.max(1, Math.round(dd / 1024))
    }

    function Dd(dd, Jd, kd) {
      return dd instanceof Nd.c && dd.errorMessageForUser ? dd.errorMessageForUser : Jd(kd)
    }
  },
  6435: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(56),
      Nd = kd(33);

    function Wd(dd, Jd) {
      var kd;
      const [Wd, Pd] = (0, pd.useState)(null !== (kd = Nd.i.getItem(dd)) && void 0 !== kd ? kd : Jd);
      return [Wd, Jd => {
        Nd.i.setItem(dd, Jd), Pd(Jd)
      }]
    }
  },
  6534: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(33);
    const Nd = "shaderPack";
    async function Wd() {
      var dd;
      let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await pd.f.getItem(Nd, Jd)) && void 0 !== dd ? dd : null
    }
  },
  6425: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Kd,
      D: () => Gd,
      G: () => od,
      I: () => Cd,
      c: () => Qd,
      f: () => Od,
      g: () => Ld,
      h: () => Id,
      k: () => xd,
      m: () => gd,
      p: () => Nd,
      q: () => vd,
      s: () => Wd,
      t: () => Zd,
      v: () => Pd,
      w: () => pd,
      z: () => ld
    });
    const pd = ["forest", "desert", "water", "night", "cave"];
    const Nd = {
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
      Wd = ["popular", "updated", "newest"],
      Pd = 3,
      Zd = 32,
      gd = 300;

    function Cd(dd, Jd) {
      return dd.slice(0, Jd).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kd = 64,
      od = 512,
      ld = 18e5;
    const Qd = "Bloxdhub",
      Ld = "https://bloxdhub.com/shaders";

    function Od(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const ed = "Screenshot generation failed.",
      Rd = "Its screenshots couldn't be generated:";

    function Id(dd) {
      var Jd;
      return dd === ed || null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.startsWith(Rd)) && void 0 !== Jd && Jd
    }

    function Gd(dd, Jd) {
      return `shaderPacks/${dd}/${Jd}.json`
    }

    function vd(dd, Jd, kd, pd) {
      return null === Jd.renderId ? xd(dd, Jd.baselineVersion, kd, pd) : `${dd}/${function(dd,Jd,kd,pd){return`shaderPacks/${dd}/${Jd}/${kd}-${pd}.webp`}(Jd.packId,Jd.renderId,kd,pd)}`
    }

    function xd(dd, Jd, kd, pd) {
      return `${dd}/${function(dd,Jd,kd){return`shaderPacks/baseline/${dd}/${Jd}-${kd}.webp`}(Jd,kd,pd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);