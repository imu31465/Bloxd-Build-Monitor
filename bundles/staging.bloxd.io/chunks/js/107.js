export const id = 107;
export const ids = [107, 124];
export const modules = {
  4669: (kk, Fk, Bk) => {
    var Rk = Bk(4671);

    function tk() {}

    function ak() {}
    ak.resetWarningCache = tk, kk.exports = function() {
      function kk(kk, Fk, Bk, tk, ak, Xk) {
        if (Xk !== Rk) {
          var bk = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw bk.name = "Invariant Violation", bk
        }
      }

      function Fk() {
        return kk
      }
      kk.isRequired = kk;
      var Bk = {
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
        checkPropTypes: ak,
        resetWarningCache: tk
      };
      return Bk.PropTypes = Bk, Bk
    }
  },
  4667: (kk, Fk, Bk) => {
    kk.exports = Bk(4669)()
  },
  4671: kk => {
    kk.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6286: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ShaderPackPublishForm: () => vk
    });
    var Rk = Bk(61),
      tk = Bk(6253),
      ak = Bk(188),
      Xk = Bk(6289),
      bk = Bk(1028),
      wk = Bk(1389),
      dk = Bk(1620),
      sk = Bk(1096),
      Vk = Bk(6293),
      Jk = Bk(6307),
      Ak = Bk(1441),
      ek = Bk(1149),
      yk = Bk(6316),
      fk = Bk(6356),
      mk = Bk(6245),
      Wk = Bk(1069);

    function vk(kk) {
      var Fk, Bk, Vk;
      let {
        existing: vk,
        onPublished: Yk
      } = kk;
      const {
        t: Ok
      } = (0, ek.x)(), {
        userContext: Ek,
        isUserContextUpdating: Sk
      } = (0, sk.e)(), [Nk, Hk] = (0, Rk.useState)(null), [uk, Mk] = (0, Rk.useState)(0), [gk, Uk] = (0, Rk.useState)(null !== (Fk = null === vk || void 0 === vk ? void 0 : vk.name) && void 0 !== Fk ? Fk : ""), ck = (0, Rk.useRef)(gk), Gk = (0, Rk.useRef)(""), Tk = kk => {
        ck.current = kk, Uk(kk)
      }, [rk, Dk] = (0, Rk.useState)(null !== (Bk = null === vk || void 0 === vk ? void 0 : vk.description) && void 0 !== Bk ? Bk : ""), zk = (0, Rk.useRef)(rk), Pk = (0, Rk.useRef)(""), hk = kk => {
        zk.current = kk, Dk(kk)
      }, [qk, Ck] = (0, Rk.useState)(!1), {
        loading: Zk,
        error: pk,
        setError: Kk,
        onFiles: xk
      } = (0, Jk.i)((async kk => {
        const Fk = await (0, yk.loadPageShaderPackCompiler)();
        if (!Fk) return void Kk(Ok("shaderPack:compilerUnavailable"));
        const Bk = await (0, fk.g)(Fk, kk.files);
        if (Hk({
            pack: kk,
            validation: Bk,
            sourceBytes: (0, Xk.w)(kk.files)
          }), !vk) {
          var Rk;
          if ("" !== ck.current.trim() && ck.current !== Gk.current || (Gk.current = (0, tk.T)(kk.manifest.name.trim(), tk.D), Tk(Gk.current)), "" === zk.current.trim() || zk.current === Pk.current) Pk.current = (0, tk.T)((null !== (Rk = kk.manifest.description) && void 0 !== Rk ? Rk : "").trim(), tk.p), hk(Pk.current);
          Mk((kk => kk + 1))
        }
      })), jk = !Sk && !Ek.isLoggedIn() && !ak.d.offlineMode, lk = gk.trim(), nk = lk.length < tk.G, Ik = null !== Nk && !1 !== (null === (Vk = Nk.validation) || void 0 === Vk ? void 0 : Vk.ok) && !Zk && !nk && !jk && !Sk;
      return (0, Wk.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Wk.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: vk ? Ok("shaderPackListing:uploadIntro", {
            minutes: String(tk.J / 6e4)
          }) : Ok("shaderPackListing:publishIntro")
        }), (0, Wk.jsx)(Lk, {}), jk && (0, Wk.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Ok("shaderPackListing:publishNeedsLogin")
        }), (0, Wk.jsx)(Jk.e, {
          busy: Zk,
          disabled: Zk || qk,
          onFiles: kk => {
            Hk(null), xk(kk)
          }
        }), Nk && (0, Wk.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Wk.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Nk.pack.manifest.name
          }), (0, Wk.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Ok("shaderPackListing:sizeValue", {
              kilobytes: String((0, mk.M)(Nk.sourceBytes))
            }), " \xb7", " ", Ok("shaderPackListing:filesValue", {
              files: String(Nk.pack.files.length)
            })]
          }), (0, Wk.jsx)(ik, {
            picked: Nk
          })]
        }), !vk && (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Wk.jsx)("span", {
              children: Ok("general:name")
            }), (0, Wk.jsx)(dk.e, {
              className: "ShaderPackPublishInput",
              defaultValue: gk,
              maxLength: tk.D,
              onValueChange: Tk
            }, uk), Nk && nk && (0, Wk.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Ok("shaderPackListing:nameTooShort", {
                min: String(tk.G)
              })
            })]
          }), (0, Wk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Wk.jsx)("span", {
              children: Ok("general:description")
            }), (0, Wk.jsx)(dk.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: rk,
              maxLength: tk.p,
              onValueChange: hk,
              useTextarea: !0
            }, uk)]
          })]
        }), pk && (0, Wk.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: pk
        }), (0, Wk.jsxs)(wk.o, {
          className: "ShaderPackPublishButton",
          disabled: !Ik,
          loading: qk,
          onClick: () => {
            !async function() {
              var kk;
              if (!Nk) return;
              const {
                name: Fk,
                description: Bk
              } = null !== vk && void 0 !== vk ? vk : {
                name: lk,
                description: rk.trim()
              }, Rk = {
                packId: null !== (kk = null === vk || void 0 === vk ? void 0 : vk.packId) && void 0 !== kk ? kk : null,
                name: Fk,
                description: Bk,
                apiVersion: Nk.pack.manifest.apiVersion,
                files: (0, Xk.s)(Nk.pack.files),
                keepCircleShadows: !0 === Nk.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Rk)).byteLength > 1024 * tk.R) Kk(Ok("shaderPackListing:publishTooBig", {
                kilobytes: String(tk.R)
              }));
              else {
                Ck(!0), Kk(null);
                try {
                  Yk(await Ak.b.publishShaderPack(Ek, Rk))
                } catch (ak) {
                  console.error("Failed to publish the shader pack", ak), Kk((0, mk.v)(ak, Ok, "shaderPackListing:publishFailed"))
                } finally {
                  Ck(!1)
                }
              }
            }()
          },
          children: [(0, Wk.jsx)(bk.d, {
            name: "upload"
          }), " ", Ok(vk ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function ik(kk) {
      let {
        picked: Fk
      } = kk;
      const {
        t: Bk
      } = (0, ek.x)(), {
        validation: Rk
      } = Fk;
      return null === Rk ? (0, Wk.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Bk("shaderPackListing:publishUnchecked")
      }) : Rk.ok ? (0, Wk.jsxs)(Wk.Fragment, {
        children: [(0, Wk.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Wk.jsx)(bk.d, {
            name: "circle-check"
          }), " ", Bk("shaderPackListing:publishReady")]
        }), Rk.offInStrict.length > 0 && (0, Wk.jsxs)(Wk.Fragment, {
          children: [(0, Wk.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Wk.jsx)(bk.d, {
              name: "triangle-exclamation"
            }), " ", Bk("shaderPack:offInStrict")]
          }), (0, Wk.jsx)(Vk.e, {
            diagnostics: Rk.offInStrict,
            t: Bk
          })]
        })]
      }) : (0, Wk.jsxs)(Wk.Fragment, {
        children: [(0, Wk.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Wk.jsx)(bk.d, {
            name: "triangle-exclamation"
          }), " ", Bk("shaderPackListing:publishHasErrors")]
        }), (0, Wk.jsx)(Vk.e, {
          diagnostics: Rk.errors,
          more: Rk.moreErrors,
          t: Bk
        })]
      })
    }
    const Yk = "\0";

    function Lk() {
      const {
        t: kk
      } = (0, ek.x)(), [Fk, Bk] = kk("shaderPackListing:bloxdhubHelp", {
        site: Yk
      }).split(Yk);
      return (0, Wk.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Fk, (0, Wk.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: tk.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: tk.e
        }), Bk]
      })
    }
  },
  6277: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => sk
    });
    var Rk = Bk(1459),
      tk = Bk(1389),
      ak = Bk(1149),
      Xk = Bk(6286),
      bk = Bk(6264),
      wk = Bk(6245),
      dk = Bk(1069);

    function sk() {
      const {
        t: kk
      } = (0, ak.x)(), Fk = (0, Rk.useNavigatePreserveSearch)();
      return (0, bk.d)(), (0, dk.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, dk.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, dk.jsx)(tk.c, {
            onClick: () => {
              Fk(wk.S)
            },
            children: kk("shaderPackListing:backToPacks")
          })
        }), (0, dk.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: kk("shaderPackListing:publishTitle")
        }), (0, dk.jsx)(Xk.ShaderPackPublishForm, {
          existing: null,
          onPublished: kk => {
            Fk((0, wk.W)(kk.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6264: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Jk,
      f: () => Ak,
      g: () => Vk,
      h: () => ek
    });
    var Rk = Bk(61),
      tk = Bk(6253),
      ak = Bk(1441),
      Xk = Bk(6245),
      bk = Bk(6267),
      wk = Bk(1096);
    const dk = "shaderPackListingView",
      sk = "shaderPackListingFilterOpen";

    function Vk() {
      var kk;
      const [Fk, Bk] = (0, bk.c)(dk, tk.I[0]);
      return [null !== (kk = tk.I.find((kk => kk === Fk))) && void 0 !== kk ? kk : tk.I[0], Bk]
    }

    function Jk() {
      (0, Rk.useEffect)((() => () => {
        window.location.pathname.startsWith(Xk.S) || (0, Xk.h)()
      }), [])
    }

    function Ak() {
      return (0, bk.c)(sk, !1)
    }

    function ek() {
      const {
        userContext: kk,
        isUserContextUpdating: Fk
      } = (0, wk.e)(), [Bk, tk] = (0, Rk.useState)(null), Xk = (0, Rk.useRef)(new Set);

      function bk(kk, Fk) {
        tk((Bk => {
          const Rk = new Set(Bk);
          return Fk ? Rk.add(kk) : Rk.delete(kk), Rk
        }))
      }
      return (0, Rk.useEffect)((() => {
        if (Fk) return;
        let Bk = !1;
        return ak.b.getFavouriteShaderPacks(kk).then((kk => {
          Bk || tk(new Set(kk))
        })).catch((kk => {
          console.error("Failed to get favourite shader packs", kk), Bk || tk(new Set)
        })), () => {
          Bk = !0
        }
      }), [kk, Fk]), {
        isFavourite: kk => null === Bk ? null : Bk.has(kk),
        toggle: function(Fk) {
          if (null === Bk || Xk.current.has(Fk)) return;
          Xk.current.add(Fk);
          const Rk = !Bk.has(Fk);
          bk(Fk, Rk), (Rk ? ak.b.favouriteShaderPack(kk, Fk) : ak.b.unfavouriteShaderPack(kk, Fk)).catch((kk => {
            console.error("Failed to change a favourite shader pack", kk), bk(Fk, !Rk)
          })).finally((() => {
            Xk.current.delete(Fk)
          }))
        }
      }
    }
  },
  6245: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      A: () => mk,
      E: () => Hk,
      G: () => sk,
      K: () => Mk,
      L: () => yk,
      M: () => zk,
      O: () => rk,
      S: () => Xk,
      U: () => Dk,
      W: () => wk,
      Y: () => bk,
      Z: () => Gk,
      ab: () => Tk,
      b: () => Wk,
      db: () => vk,
      e: () => Sk,
      eb: () => uk,
      f: () => fk,
      h: () => Jk,
      j: () => Vk,
      m: () => gk,
      q: () => Ak,
      r: () => Uk,
      v: () => Pk,
      z: () => ek
    });
    var Rk = Bk(6253),
      tk = Bk(152),
      ak = Bk(4299);
    const Xk = "/shader-packs",
      bk = `${Xk}/publish`;

    function wk(kk) {
      return `${Xk}/${encodeURIComponent(kk)}`
    }
    let dk = null;

    function sk(kk) {
      dk = kk
    }

    function Vk() {
      return dk
    }

    function Jk() {
      dk = null
    }

    function Ak(kk) {
      return kk.playerHasRank("developer") || kk.playerHasRank("admin")
    }
    const ek = ["terrain", "water", "models", "sunShadows", "strict"],
      yk = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function fk(kk, Fk) {
      return kk.withFeatures.includes(Fk) ? "with" : kk.withoutFeatures.includes(Fk) ? "without" : null
    }

    function mk(kk) {
      return null === kk ? "with" : "with" === kk ? "without" : null
    }

    function Wk(kk) {
      return "with" === kk ? "only" : null === kk ? "include" : void 0
    }

    function vk(kk, Fk) {
      const Bk = fk(kk, Fk),
        Rk = kk => kk.filter((kk => kk !== Fk));
      return {
        withFeatures: null === Bk ? [...kk.withFeatures, Fk] : Rk(kk.withFeatures),
        withoutFeatures: "with" === Bk ? [...kk.withoutFeatures, Fk] : Rk(kk.withoutFeatures)
      }
    }
    const ik = "section",
      Yk = "sort",
      Lk = "filters",
      Ok = "q",
      Ek = "banned",
      Sk = "popular",
      Nk = "strict";

    function Hk(kk) {
      var Fk, Bk, tk;
      const Xk = kk.get(ik),
        bk = (null !== (Fk = kk.get(Lk)) && void 0 !== Fk ? Fk : Nk).split(","),
        wk = kk.get(Ek);
      return {
        section: "favourites" === Xk || "mine" === Xk ? Xk : "explore",
        sort: null !== (Bk = Rk.B.find((Fk => Fk === kk.get(Yk)))) && void 0 !== Bk ? Bk : Sk,
        withFeatures: ek.filter((kk => bk.includes(kk) && !bk.includes(`-${kk}`))),
        withoutFeatures: ek.filter((kk => bk.includes(`-${kk}`))),
        searchQuery: (null === (tk = kk.get(Ok)) || void 0 === tk ? void 0 : tk.slice(0, Rk.M)) || null,
        pageNumber: (0, ak.g)(kk.get(ak.d)),
        banned: "only" === wk ? "with" : "include" === wk ? null : "without"
      }
    }

    function uk(kk, Fk) {
      var Bk;
      const Rk = ck(Fk);
      (0, ak.k)(kk, ik, "explore" === Fk.section ? null : Fk.section), (0, ak.k)(kk, Yk, Fk.sort === Sk ? null : Fk.sort), (0, ak.k)(kk, Lk, Rk === Nk ? null : Rk), (0, ak.k)(kk, Ok, Fk.searchQuery), (0, ak.k)(kk, Ek, null !== (Bk = Wk(Fk.banned)) && void 0 !== Bk ? Bk : null), (0, ak.l)(kk, Fk.pageNumber)
    }

    function Mk(kk) {
      const Fk = new URLSearchParams;
      return uk(Fk, {
        section: "explore",
        sort: Sk,
        withFeatures: "strict" === kk ? [kk] : [kk, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Xk}?${Fk.toString()}`
    }

    function gk(kk) {
      return ck(kk) === Nk
    }

    function Uk(kk) {
      return null !== kk.searchQuery || "with" === kk.banned || ck(kk) !== Nk
    }

    function ck(kk) {
      return ek.flatMap((Fk => {
        const Bk = fk(kk, Fk);
        return "with" === Bk ? [Fk] : "without" === Bk ? [`-${Fk}`] : []
      })).join(",")
    }
    const Gk = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Tk = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function rk(kk) {
      return Math.round(100 * Math.max(0, 1 - 1 / kk))
    }

    function Dk(kk, Fk, Bk, tk) {
      const ak = [];
      kk.isBanned && ak.push({
        tone: "warning",
        text: tk("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Xk
      } = kk;
      if (null === kk.brokenError || Xk && !Xk.error || ak.push({
          tone: "warning",
          text: tk("shaderPackListing:ownerBroken"),
          detail: kk.brokenError
        }), null !== Xk && void 0 !== Xk && Xk.error) ak.push({
        tone: "warning",
        text: tk(Fk ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Rk.k)(Xk.error) ? null : Xk.error
      });
      else if (Xk) {
        const kk = null === Xk.renderNotBefore ? 0 : Xk.renderNotBefore - Bk,
          Rk = String(Math.ceil(kk / 6e4)),
          bk = tk(Fk ? kk > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : kk > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Rk
          });
        ak.push({
          tone: "info",
          text: bk,
          detail: null
        })
      }
      return kk.listed || ak.push({
        tone: "info",
        text: tk("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ak
    }

    function zk(kk) {
      return Math.max(1, Math.round(kk / 1024))
    }

    function Pk(kk, Fk, Bk) {
      return kk instanceof tk.c && kk.errorMessageForUser ? kk.errorMessageForUser : Fk(Bk)
    }
  },
  6267: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(61),
      tk = Bk(42);

    function ak(kk, Fk) {
      var Bk;
      const [ak, Xk] = (0, Rk.useState)(null !== (Bk = tk.i.getItem(kk)) && void 0 !== Bk ? Bk : Fk);
      return [ak, Fk => {
        tk.i.setItem(kk, Fk), Xk(Fk)
      }]
    }
  },
  6361: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => ak
    });
    var Rk = Bk(42);
    const tk = "shaderPack";
    async function ak() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Rk.f.getItem(tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  6253: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => ak,
      D: () => bk,
      G: () => Xk,
      I: () => Rk,
      J: () => Jk,
      M: () => sk,
      Q: () => vk,
      R: () => Vk,
      T: () => dk,
      e: () => Ak,
      h: () => yk,
      i: () => ek,
      k: () => Wk,
      n: () => Yk,
      p: () => wk,
      t: () => tk,
      x: () => ik
    });
    const Rk = ["forest", "desert", "water", "night", "cave"];
    const tk = {
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
      ak = ["popular", "updated", "newest"],
      Xk = 3,
      bk = 32,
      wk = 300;

    function dk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const sk = 64,
      Vk = 512,
      Jk = 18e5;
    const Ak = "Bloxdhub",
      ek = "https://bloxdhub.com/shaders";

    function yk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const fk = "Screenshot generation failed.",
      mk = "Its screenshots couldn't be generated:";

    function Wk(kk) {
      var Fk;
      return kk === fk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(mk)) && void 0 !== Fk && Fk
    }

    function vk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function ik(kk, Fk, Bk, Rk) {
      return null === Fk.renderId ? Yk(kk, Fk.baselineVersion, Bk, Rk) : `${kk}/${function(kk,Fk,Bk,Rk){return`shaderPacks/${kk}/${Fk}/${Bk}-${Rk}.webp`}(Fk.packId,Fk.renderId,Bk,Rk)}`
    }

    function Yk(kk, Fk, Bk, Rk) {
      return `${kk}/${function(kk,Fk,Bk){return`shaderPacks/baseline/${kk}/${Fk}-${Bk}.webp`}(Fk,Bk,Rk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);