export const id = 108;
export const ids = [108, 124];
export const modules = {
  4706: (vv, zv, Pv) => {
    var hv = Pv(4711);

    function Sv() {}

    function ev() {}
    ev.resetWarningCache = Sv, vv.exports = function() {
      function vv(vv, zv, Pv, Sv, ev, gv) {
        if (gv !== hv) {
          var pv = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw pv.name = "Invariant Violation", pv
        }
      }

      function zv() {
        return vv
      }
      vv.isRequired = vv;
      var Pv = {
        array: vv,
        bigint: vv,
        bool: vv,
        func: vv,
        number: vv,
        object: vv,
        string: vv,
        symbol: vv,
        any: vv,
        arrayOf: zv,
        element: vv,
        elementType: vv,
        instanceOf: zv,
        node: vv,
        objectOf: zv,
        oneOf: zv,
        oneOfType: zv,
        shape: zv,
        exact: zv,
        checkPropTypes: ev,
        resetWarningCache: Sv
      };
      return Pv.PropTypes = Pv, Pv
    }
  },
  4702: (vv, zv, Pv) => {
    vv.exports = Pv(4706)()
  },
  4711: vv => {
    vv.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6302: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ShaderPackPublishForm: () => Gv
    });
    var hv = Pv(52),
      Sv = Pv(6268),
      ev = Pv(194),
      gv = Pv(6306),
      pv = Pv(1042),
      dv = Pv(1442),
      Nv = Pv(1647),
      lv = Pv(1108),
      Tv = Pv(6315),
      Wv = Pv(6335),
      wv = Pv(1482),
      av = Pv(1175),
      sv = Pv(6339),
      Cv = Pv(6367),
      iv = Pv(6263),
      cv = Pv(1082);

    function Gv(vv) {
      var zv, Pv, Tv;
      let {
        existing: Gv,
        onPublished: jv
      } = vv;
      const {
        t: Fv
      } = (0, av.x)(), {
        userContext: Yv,
        isUserContextUpdating: nv
      } = (0, lv.d)(), [Ov, Dv] = (0, hv.useState)(null), [Kv, Vv] = (0, hv.useState)(0), [Uv, Rv] = (0, hv.useState)(null !== (zv = null === Gv || void 0 === Gv ? void 0 : Gv.name) && void 0 !== zv ? zv : ""), xv = (0, hv.useRef)(Uv), tv = (0, hv.useRef)(""), qv = vv => {
        xv.current = vv, Rv(vv)
      }, [Iv, Qv] = (0, hv.useState)(null !== (Pv = null === Gv || void 0 === Gv ? void 0 : Gv.description) && void 0 !== Pv ? Pv : ""), Zv = (0, hv.useRef)(Iv), Av = (0, hv.useRef)(""), Lv = vv => {
        Zv.current = vv, Qv(vv)
      }, [Hv, Mv] = (0, hv.useState)(!1), {
        loading: yv,
        error: Bv,
        setError: Jv,
        onFiles: Ev
      } = (0, Wv.f)((async vv => {
        const zv = await (0, sv.loadPageShaderPackCompiler)();
        if (!zv) return void Jv(Fv("shaderPack:compilerUnavailable"));
        const Pv = await (0, Cv.e)(zv, vv.files);
        if (Dv({
            pack: vv,
            validation: Pv,
            sourceBytes: (0, gv.x)(vv.files)
          }), !Gv) {
          var hv;
          if ("" !== xv.current.trim() && xv.current !== tv.current || (tv.current = (0, Sv.R)(vv.manifest.name.trim(), Sv.A), qv(tv.current)), "" === Zv.current.trim() || Zv.current === Av.current) Av.current = (0, Sv.R)((null !== (hv = vv.manifest.description) && void 0 !== hv ? hv : "").trim(), Sv.q), Lv(Av.current);
          Vv((vv => vv + 1))
        }
      })), ov = !nv && !Yv.isLoggedIn() && !ev.e.offlineMode, bv = Uv.trim(), rv = bv.length < Sv.B, kv = null !== Ov && !1 !== (null === (Tv = Ov.validation) || void 0 === Tv ? void 0 : Tv.ok) && !yv && !rv && !ov && !nv;
      return (0, cv.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, cv.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Gv ? Fv("shaderPackListing:uploadIntro", {
            minutes: String(Sv.G / 6e4)
          }) : Fv("shaderPackListing:publishIntro")
        }), (0, cv.jsx)(fv, {}), ov && (0, cv.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Fv("shaderPackListing:publishNeedsLogin")
        }), (0, cv.jsx)(Wv.d, {
          busy: yv,
          disabled: yv || Hv,
          onFiles: vv => {
            Dv(null), Ev(vv)
          }
        }), Ov && (0, cv.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, cv.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Ov.pack.manifest.name
          }), (0, cv.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Fv("shaderPackListing:sizeValue", {
              kilobytes: String((0, iv.K)(Ov.sourceBytes))
            }), " \xb7", " ", Fv("shaderPackListing:filesValue", {
              files: String(Ov.pack.files.length)
            })]
          }), (0, cv.jsx)(mv, {
            picked: Ov
          })]
        }), !Gv && (0, cv.jsxs)(cv.Fragment, {
          children: [(0, cv.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, cv.jsx)("span", {
              children: Fv("general:name")
            }), (0, cv.jsx)(Nv.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Uv,
              maxLength: Sv.A,
              onValueChange: qv
            }, Kv), Ov && rv && (0, cv.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Fv("shaderPackListing:nameTooShort", {
                min: String(Sv.B)
              })
            })]
          }), (0, cv.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, cv.jsx)("span", {
              children: Fv("general:description")
            }), (0, cv.jsx)(Nv.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Iv,
              maxLength: Sv.q,
              onValueChange: Lv,
              useTextarea: !0
            }, Kv)]
          })]
        }), Bv && (0, cv.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Bv
        }), (0, cv.jsxs)(dv.j, {
          className: "ShaderPackPublishButton",
          disabled: !kv,
          loading: Hv,
          onClick: () => {
            !async function() {
              var vv;
              if (!Ov) return;
              const {
                name: zv,
                description: Pv
              } = null !== Gv && void 0 !== Gv ? Gv : {
                name: bv,
                description: Iv.trim()
              }, hv = {
                packId: null !== (vv = null === Gv || void 0 === Gv ? void 0 : Gv.packId) && void 0 !== vv ? vv : null,
                name: zv,
                description: Pv,
                apiVersion: Ov.pack.manifest.apiVersion,
                files: (0, gv.u)(Ov.pack.files),
                keepCircleShadows: !0 === Ov.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(hv)).byteLength > 1024 * Sv.N) Jv(Fv("shaderPackListing:publishTooBig", {
                kilobytes: String(Sv.N)
              }));
              else {
                Mv(!0), Jv(null);
                try {
                  jv(await wv.e.publishShaderPack(Yv, hv))
                } catch (ev) {
                  console.error("Failed to publish the shader pack", ev), Jv((0, iv.w)(ev, Fv, "shaderPackListing:publishFailed"))
                } finally {
                  Mv(!1)
                }
              }
            }()
          },
          children: [(0, cv.jsx)(pv.b, {
            name: "upload"
          }), " ", Fv(Gv ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function mv(vv) {
      let {
        picked: zv
      } = vv;
      const {
        t: Pv
      } = (0, av.x)(), {
        validation: hv
      } = zv;
      return null === hv ? (0, cv.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Pv("shaderPackListing:publishUnchecked")
      }) : hv.ok ? (0, cv.jsxs)(cv.Fragment, {
        children: [(0, cv.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, cv.jsx)(pv.b, {
            name: "circle-check"
          }), " ", Pv("shaderPackListing:publishReady")]
        }), hv.offInStrict.length > 0 && (0, cv.jsxs)(cv.Fragment, {
          children: [(0, cv.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, cv.jsx)(pv.b, {
              name: "triangle-exclamation"
            }), " ", Pv("shaderPack:offInStrict")]
          }), (0, cv.jsx)(Tv.e, {
            diagnostics: hv.offInStrict,
            t: Pv
          })]
        })]
      }) : (0, cv.jsxs)(cv.Fragment, {
        children: [(0, cv.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, cv.jsx)(pv.b, {
            name: "triangle-exclamation"
          }), " ", Pv("shaderPackListing:publishHasErrors")]
        }), (0, cv.jsx)(Tv.e, {
          diagnostics: hv.errors,
          more: hv.moreErrors,
          t: Pv
        })]
      })
    }
    const jv = "\0";

    function fv() {
      const {
        t: vv
      } = (0, av.x)(), [zv, Pv] = vv("shaderPackListing:bloxdhubHelp", {
        site: jv
      }).split(jv);
      return (0, cv.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [zv, (0, cv.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Sv.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Sv.c
        }), Pv]
      })
    }
  },
  6296: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => lv
    });
    var hv = Pv(1492),
      Sv = Pv(1442),
      ev = Pv(1175),
      gv = Pv(6302),
      pv = Pv(6278),
      dv = Pv(6263),
      Nv = Pv(1082);

    function lv() {
      const {
        t: vv
      } = (0, ev.x)(), zv = (0, hv.useNavigatePreserveSearch)();
      return (0, pv.d)(), (0, Nv.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Nv.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Nv.jsx)(Sv.b, {
            onClick: () => {
              zv(dv.O)
            },
            children: vv("shaderPackListing:backToPacks")
          })
        }), (0, Nv.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: vv("shaderPackListing:publishTitle")
        }), (0, Nv.jsx)(gv.ShaderPackPublishForm, {
          existing: null,
          onPublished: vv => {
            zv((0, dv.U)(vv.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6278: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      e: () => wv,
      h: () => Tv,
      i: () => av
    });
    var hv = Pv(52),
      Sv = Pv(6268),
      ev = Pv(1482),
      gv = Pv(6263),
      pv = Pv(6287),
      dv = Pv(1108);
    const Nv = "shaderPackListingView",
      lv = "shaderPackListingFilterOpen";

    function Tv() {
      var vv;
      const [zv, Pv] = (0, pv.d)(Nv, Sv.D[0]);
      return [null !== (vv = Sv.D.find((vv => vv === zv))) && void 0 !== vv ? vv : Sv.D[0], Pv]
    }

    function Wv() {
      (0, hv.useEffect)((() => () => {
        window.location.pathname.startsWith(gv.O) || (0, gv.l)()
      }), [])
    }

    function wv() {
      return (0, pv.d)(lv, !1)
    }

    function av() {
      const {
        userContext: vv,
        isUserContextUpdating: zv
      } = (0, dv.d)(), [Pv, Sv] = (0, hv.useState)(null), gv = (0, hv.useRef)(new Set);

      function pv(vv, zv) {
        Sv((Pv => {
          const hv = new Set(Pv);
          return zv ? hv.add(vv) : hv.delete(vv), hv
        }))
      }
      return (0, hv.useEffect)((() => {
        if (zv) return;
        let Pv = !1;
        return ev.e.getFavouriteShaderPacks(vv).then((vv => {
          Pv || Sv(new Set(vv))
        })).catch((vv => {
          console.error("Failed to get favourite shader packs", vv), Pv || Sv(new Set)
        })), () => {
          Pv = !0
        }
      }), [vv, zv]), {
        isFavourite: vv => null === Pv ? null : Pv.has(vv),
        toggle: function(zv) {
          if (null === Pv || gv.current.has(zv)) return;
          gv.current.add(zv);
          const hv = !Pv.has(zv);
          pv(zv, hv), (hv ? ev.e.favouriteShaderPack(vv, zv) : ev.e.unfavouriteShaderPack(vv, zv)).catch((vv => {
            console.error("Failed to change a favourite shader pack", vv), pv(zv, !hv)
          })).finally((() => {
            gv.current.delete(zv)
          }))
        }
      }
    }
  },
  6263: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => iv,
      E: () => Dv,
      H: () => lv,
      I: () => Vv,
      J: () => sv,
      K: () => Zv,
      L: () => Iv,
      O: () => gv,
      R: () => Qv,
      U: () => dv,
      W: () => pv,
      _: () => tv,
      cb: () => qv,
      e: () => cv,
      fb: () => Gv,
      gb: () => Kv,
      h: () => nv,
      k: () => Cv,
      l: () => Wv,
      m: () => Tv,
      n: () => Uv,
      q: () => wv,
      u: () => Rv,
      w: () => Av,
      y: () => av
    });
    var hv = Pv(6268),
      Sv = Pv(144),
      ev = Pv(4319);
    const gv = "/shader-packs",
      pv = `${gv}/publish`;

    function dv(vv) {
      return `${gv}/${encodeURIComponent(vv)}`
    }
    let Nv = null;

    function lv(vv) {
      Nv = vv
    }

    function Tv() {
      return Nv
    }

    function Wv() {
      Nv = null
    }

    function wv(vv) {
      return vv.playerHasRank("developer") || vv.playerHasRank("admin")
    }
    const av = ["terrain", "water", "models", "sunShadows", "strict"],
      sv = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Cv(vv, zv) {
      return vv.withFeatures.includes(zv) ? "with" : vv.withoutFeatures.includes(zv) ? "without" : null
    }

    function iv(vv) {
      return null === vv ? "with" : "with" === vv ? "without" : null
    }

    function cv(vv) {
      return "with" === vv ? "only" : null === vv ? "include" : void 0
    }

    function Gv(vv, zv) {
      const Pv = Cv(vv, zv),
        hv = vv => vv.filter((vv => vv !== zv));
      return {
        withFeatures: null === Pv ? [...vv.withFeatures, zv] : hv(vv.withFeatures),
        withoutFeatures: "with" === Pv ? [...vv.withoutFeatures, zv] : hv(vv.withoutFeatures)
      }
    }
    const mv = "section",
      jv = "sort",
      fv = "filters",
      Fv = "q",
      Yv = "banned",
      nv = "popular",
      Ov = "strict";

    function Dv(vv) {
      var zv, Pv, Sv;
      const gv = vv.get(mv),
        pv = (null !== (zv = vv.get(fv)) && void 0 !== zv ? zv : Ov).split(","),
        dv = vv.get(Yv);
      return {
        section: "favourites" === gv || "mine" === gv ? gv : "explore",
        sort: null !== (Pv = hv.z.find((zv => zv === vv.get(jv)))) && void 0 !== Pv ? Pv : nv,
        withFeatures: av.filter((vv => pv.includes(vv) && !pv.includes(`-${vv}`))),
        withoutFeatures: av.filter((vv => pv.includes(`-${vv}`))),
        searchQuery: (null === (Sv = vv.get(Fv)) || void 0 === Sv ? void 0 : Sv.slice(0, hv.I)) || null,
        pageNumber: (0, ev.f)(vv.get(ev.d)),
        banned: "only" === dv ? "with" : "include" === dv ? null : "without"
      }
    }

    function Kv(vv, zv) {
      var Pv;
      const hv = xv(zv);
      (0, ev.j)(vv, mv, "explore" === zv.section ? null : zv.section), (0, ev.j)(vv, jv, zv.sort === nv ? null : zv.sort), (0, ev.j)(vv, fv, hv === Ov ? null : hv), (0, ev.j)(vv, Fv, zv.searchQuery), (0, ev.j)(vv, Yv, null !== (Pv = cv(zv.banned)) && void 0 !== Pv ? Pv : null), (0, ev.n)(vv, zv.pageNumber)
    }

    function Vv(vv) {
      const zv = new URLSearchParams;
      return Kv(zv, {
        section: "explore",
        sort: nv,
        withFeatures: "strict" === vv ? [vv] : [vv, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${gv}?${zv.toString()}`
    }

    function Uv(vv) {
      return xv(vv) === Ov
    }

    function Rv(vv) {
      return null !== vv.searchQuery || "with" === vv.banned || xv(vv) !== Ov
    }

    function xv(vv) {
      return av.flatMap((zv => {
        const Pv = Cv(vv, zv);
        return "with" === Pv ? [zv] : "without" === Pv ? [`-${zv}`] : []
      })).join(",")
    }
    const tv = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      qv = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Iv(vv) {
      return Math.round(100 * Math.max(0, 1 - 1 / vv))
    }

    function Qv(vv, zv, Pv, Sv) {
      const ev = [];
      vv.isBanned && ev.push({
        tone: "warning",
        text: Sv("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: gv
      } = vv;
      if (null === vv.brokenError || gv && !gv.error || ev.push({
          tone: "warning",
          text: Sv("shaderPackListing:ownerBroken"),
          detail: vv.brokenError
        }), null !== gv && void 0 !== gv && gv.error) ev.push({
        tone: "warning",
        text: Sv(zv ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, hv.k)(gv.error) ? null : gv.error
      });
      else if (gv) {
        const vv = null === gv.renderNotBefore ? 0 : gv.renderNotBefore - Pv,
          hv = String(Math.ceil(vv / 6e4)),
          pv = Sv(zv ? vv > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : vv > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: hv
          });
        ev.push({
          tone: "info",
          text: pv,
          detail: null
        })
      }
      return vv.listed || ev.push({
        tone: "info",
        text: Sv("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ev
    }

    function Zv(vv) {
      return Math.max(1, Math.round(vv / 1024))
    }

    function Av(vv, zv, Pv) {
      return vv instanceof Sv.c && vv.errorMessageForUser ? vv.errorMessageForUser : zv(Pv)
    }
  },
  6287: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(39);

    function ev(vv, zv) {
      var Pv;
      const [ev, gv] = (0, hv.useState)(null !== (Pv = Sv.h.getItem(vv)) && void 0 !== Pv ? Pv : zv);
      return [ev, zv => {
        Sv.h.setItem(vv, zv), gv(zv)
      }]
    }
  },
  6377: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    var hv = Pv(39);
    const Sv = "shaderPack";
    async function ev() {
      var vv;
      let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
    }
  },
  6268: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => pv,
      B: () => gv,
      D: () => hv,
      G: () => Wv,
      I: () => lv,
      L: () => Gv,
      N: () => Tv,
      R: () => Nv,
      c: () => wv,
      f: () => sv,
      h: () => av,
      k: () => cv,
      o: () => jv,
      q: () => dv,
      t: () => Sv,
      v: () => mv,
      z: () => ev
    });
    const hv = ["forest", "desert", "water", "night", "cave"];
    const Sv = {
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
      ev = ["popular", "updated", "newest"],
      gv = 3,
      pv = 32,
      dv = 300;

    function Nv(vv, zv) {
      return vv.slice(0, zv).replace(/[\uD800-\uDBFF]$/, "")
    }
    const lv = 64,
      Tv = 512,
      Wv = 18e5;
    const wv = "Bloxdhub",
      av = "https://bloxdhub.com/shaders";

    function sv(vv) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(vv)}`
    }
    const Cv = "Screenshot generation failed.",
      iv = "Its screenshots couldn't be generated:";

    function cv(vv) {
      var zv;
      return vv === Cv || null !== (zv = null === vv || void 0 === vv ? void 0 : vv.startsWith(iv)) && void 0 !== zv && zv
    }

    function Gv(vv, zv) {
      return `shaderPacks/${vv}/${zv}.json`
    }

    function mv(vv, zv, Pv, hv) {
      return null === zv.renderId ? jv(vv, zv.baselineVersion, Pv, hv) : `${vv}/${function(vv,zv,Pv,hv){return`shaderPacks/${vv}/${zv}/${Pv}-${hv}.webp`}(zv.packId,zv.renderId,Pv,hv)}`
    }

    function jv(vv, zv, Pv, hv) {
      return `${vv}/${function(vv,zv,Pv){return`shaderPacks/baseline/${vv}/${zv}-${Pv}.webp`}(zv,Pv,hv)}`
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);