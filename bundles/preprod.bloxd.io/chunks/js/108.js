export const id = 108;
export const ids = [108, 125];
export const modules = {
  4807: (qq, Eq, gq) => {
    var Yq = gq(4811);

    function lq() {}

    function Oq() {}
    Oq.resetWarningCache = lq, qq.exports = function() {
      function qq(qq, Eq, gq, lq, Oq, mq) {
        if (mq !== Yq) {
          var xq = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw xq.name = "Invariant Violation", xq
        }
      }

      function Eq() {
        return qq
      }
      qq.isRequired = qq;
      var gq = {
        array: qq,
        bigint: qq,
        bool: qq,
        func: qq,
        number: qq,
        object: qq,
        string: qq,
        symbol: qq,
        any: qq,
        arrayOf: Eq,
        element: qq,
        elementType: qq,
        instanceOf: Eq,
        node: qq,
        objectOf: Eq,
        oneOf: Eq,
        oneOfType: Eq,
        shape: Eq,
        exact: Eq,
        checkPropTypes: Oq,
        resetWarningCache: lq
      };
      return gq.PropTypes = gq, gq
    }
  },
  4800: (qq, Eq, gq) => {
    qq.exports = gq(4807)()
  },
  4811: qq => {
    qq.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6456: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ShaderPackPublishForm: () => oq
    });
    var Yq = gq(57),
      lq = gq(6424),
      Oq = gq(195),
      mq = gq(6458),
      xq = gq(1025),
      Aq = gq(1422),
      cq = gq(1659),
      uq = gq(1101),
      Bq = gq(6467),
      Wq = gq(6490),
      Nq = gq(1477),
      aq = gq(1183),
      Vq = gq(6496),
      dq = gq(6526),
      jq = gq(6422),
      Hq = gq(1070);

    function oq(qq) {
      var Eq, gq, Bq;
      let {
        existing: oq,
        onPublished: Qq
      } = qq;
      const {
        t: tq
      } = (0, aq.v)(), {
        userContext: rq,
        isUserContextUpdating: vq
      } = (0, uq.c)(), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(0), [Zq, fq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.name) && void 0 !== Eq ? Eq : ""), Mq = (0, Yq.useRef)(Zq), Tq = (0, Yq.useRef)(""), zq = qq => {
        Mq.current = qq, fq(qq)
      }, [Sq, pq] = (0, Yq.useState)(null !== (gq = null === oq || void 0 === oq ? void 0 : oq.description) && void 0 !== gq ? gq : ""), Gq = (0, Yq.useRef)(Sq), Lq = (0, Yq.useRef)(""), Jq = qq => {
        Gq.current = qq, pq(qq)
      }, [kq, Rq] = (0, Yq.useState)(!1), {
        loading: Uq,
        error: Fq,
        setError: sq,
        onFiles: Xq
      } = (0, Wq.c)((async qq => {
        const Eq = await (0, Vq.loadPageShaderPackCompiler)();
        if (!Eq) return void sq(tq("shaderPack:compilerUnavailable"));
        const gq = await (0, dq.e)(Eq, qq.files);
        if (nq({
            pack: qq,
            validation: gq,
            sourceBytes: (0, mq.A)(qq.files)
          }), !oq) {
          var Yq;
          if ("" !== Mq.current.trim() && Mq.current !== Tq.current || (Tq.current = (0, lq.R)(qq.manifest.name.trim(), lq.z), zq(Tq.current)), "" === Gq.current.trim() || Gq.current === Lq.current) Lq.current = (0, lq.R)((null !== (Yq = qq.manifest.description) && void 0 !== Yq ? Yq : "").trim(), lq.n), Jq(Lq.current);
          iq((qq => qq + 1))
        }
      })), wq = !vq && !rq.isLoggedIn() && !Oq.c.offlineMode, Kq = Zq.trim(), Cq = Kq.length < lq.D, Iq = null !== hq && !1 !== (null === (Bq = hq.validation) || void 0 === Bq ? void 0 : Bq.ok) && !Uq && !Cq && !wq && !vq;
      return (0, Hq.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Hq.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: oq ? tq("shaderPackListing:uploadIntro", {
            minutes: String(lq.G / 6e4)
          }) : tq("shaderPackListing:publishIntro")
        }), (0, Hq.jsx)(yq, {}), wq && (0, Hq.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: tq("shaderPackListing:publishNeedsLogin")
        }), (0, Hq.jsx)(Wq.b, {
          busy: Uq,
          disabled: Uq || kq,
          onFiles: qq => {
            nq(null), Xq(qq)
          }
        }), hq && (0, Hq.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Hq.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: hq.pack.manifest.name
          }), (0, Hq.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [tq("shaderPackListing:sizeValue", {
              kilobytes: String((0, jq.O)(hq.sourceBytes))
            }), " \xb7", " ", tq("shaderPackListing:filesValue", {
              files: String(hq.pack.files.length)
            })]
          }), (0, Hq.jsx)(Pq, {
            picked: hq
          })]
        }), !oq && (0, Hq.jsxs)(Hq.Fragment, {
          children: [(0, Hq.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Hq.jsx)("span", {
              children: tq("general:name")
            }), (0, Hq.jsx)(cq.b, {
              className: "ShaderPackPublishInput",
              defaultValue: Zq,
              maxLength: lq.z,
              onValueChange: zq
            }, bq), hq && Cq && (0, Hq.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: tq("shaderPackListing:nameTooShort", {
                min: String(lq.D)
              })
            })]
          }), (0, Hq.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Hq.jsx)("span", {
              children: tq("general:description")
            }), (0, Hq.jsx)(cq.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Sq,
              maxLength: lq.n,
              onValueChange: Jq,
              useTextarea: !0
            }, bq)]
          })]
        }), Fq && (0, Hq.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Fq
        }), (0, Hq.jsxs)(Aq.p, {
          className: "ShaderPackPublishButton",
          disabled: !Iq,
          loading: kq,
          onClick: () => {
            !async function() {
              var qq;
              if (!hq) return;
              const {
                name: Eq,
                description: gq
              } = null !== oq && void 0 !== oq ? oq : {
                name: Kq,
                description: Sq.trim()
              }, Yq = {
                packId: null !== (qq = null === oq || void 0 === oq ? void 0 : oq.packId) && void 0 !== qq ? qq : null,
                name: Eq,
                description: gq,
                apiVersion: hq.pack.manifest.apiVersion,
                files: (0, mq.w)(hq.pack.files),
                keepCircleShadows: !0 === hq.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Yq)).byteLength > 1024 * lq.N) sq(tq("shaderPackListing:publishTooBig", {
                kilobytes: String(lq.N)
              }));
              else {
                Rq(!0), sq(null);
                try {
                  Qq(await Nq.e.publishShaderPack(rq, Yq))
                } catch (Oq) {
                  console.error("Failed to publish the shader pack", Oq), sq((0, jq.s)(Oq, tq, "shaderPackListing:publishFailed"))
                } finally {
                  Rq(!1)
                }
              }
            }()
          },
          children: [(0, Hq.jsx)(xq.d, {
            name: "upload"
          }), " ", tq(oq ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Pq(qq) {
      let {
        picked: Eq
      } = qq;
      const {
        t: gq
      } = (0, aq.v)(), {
        validation: Yq
      } = Eq;
      return null === Yq ? (0, Hq.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: gq("shaderPackListing:publishUnchecked")
      }) : Yq.ok ? (0, Hq.jsxs)(Hq.Fragment, {
        children: [(0, Hq.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Hq.jsx)(xq.d, {
            name: "circle-check"
          }), " ", gq("shaderPackListing:publishReady")]
        }), Yq.offInStrict.length > 0 && (0, Hq.jsxs)(Hq.Fragment, {
          children: [(0, Hq.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Hq.jsx)(xq.d, {
              name: "triangle-exclamation"
            }), " ", gq("shaderPack:offInStrict")]
          }), (0, Hq.jsx)(Bq.b, {
            diagnostics: Yq.offInStrict,
            t: gq
          })]
        })]
      }) : (0, Hq.jsxs)(Hq.Fragment, {
        children: [(0, Hq.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Hq.jsx)(xq.d, {
            name: "triangle-exclamation"
          }), " ", gq("shaderPackListing:publishHasErrors")]
        }), (0, Hq.jsx)(Bq.b, {
          diagnostics: Yq.errors,
          more: Yq.moreErrors,
          t: gq
        })]
      })
    }
    const Qq = "\0";

    function yq() {
      const {
        t: qq
      } = (0, aq.v)(), [Eq, gq] = qq("shaderPackListing:bloxdhubHelp", {
        site: Qq
      }).split(Qq);
      return (0, Hq.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Eq, (0, Hq.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: lq.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: lq.e
        }), gq]
      })
    }
  },
  6447: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => uq
    });
    var Yq = gq(1498),
      lq = gq(1422),
      Oq = gq(1183),
      mq = gq(6456),
      xq = gq(6431),
      Aq = gq(6422),
      cq = gq(1070);

    function uq() {
      const {
        t: qq
      } = (0, Oq.v)(), Eq = (0, Yq.useNavigatePreserveSearch)();
      return (0, xq.e)(), (0, cq.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, cq.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, cq.jsx)(lq.d, {
            onClick: () => {
              Eq(Aq.V)
            },
            children: qq("shaderPackListing:backToPacks")
          })
        }), (0, cq.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: qq("shaderPackListing:publishTitle")
        }), (0, cq.jsx)(mq.ShaderPackPublishForm, {
          existing: null,
          onPublished: qq => {
            Eq((0, Aq.$)(qq.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6431: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Wq,
      h: () => Nq,
      l: () => Bq,
      m: () => aq
    });
    var Yq = gq(57),
      lq = gq(6424),
      Oq = gq(1477),
      mq = gq(6422),
      xq = gq(6434),
      Aq = gq(1101);
    const cq = "shaderPackListingView",
      uq = "shaderPackListingFilterOpen";

    function Bq() {
      var qq;
      const [Eq, gq] = (0, xq.b)(cq, lq.E[0]);
      return [null !== (qq = lq.E.find((qq => qq === Eq))) && void 0 !== qq ? qq : lq.E[0], gq]
    }

    function Wq() {
      (0, Yq.useEffect)((() => () => {
        window.location.pathname.startsWith(mq.V) || (0, mq.g)()
      }), [])
    }

    function Nq() {
      return (0, xq.b)(uq, !1)
    }

    function aq() {
      const {
        userContext: qq,
        isUserContextUpdating: Eq
      } = (0, Aq.c)(), [gq, lq] = (0, Yq.useState)(null), mq = (0, Yq.useRef)(new Set);

      function xq(qq, Eq) {
        lq((gq => {
          const Yq = new Set(gq);
          return Eq ? Yq.add(qq) : Yq.delete(qq), Yq
        }))
      }
      return (0, Yq.useEffect)((() => {
        if (Eq) return;
        let gq = !1;
        return Oq.e.getFavouriteShaderPacks(qq).then((qq => {
          gq || lq(new Set(qq))
        })).catch((qq => {
          console.error("Failed to get favourite shader packs", qq), gq || lq(new Set)
        })), () => {
          gq = !0
        }
      }), [qq, Eq]), {
        isFavourite: qq => null === gq ? null : gq.has(qq),
        toggle: function(Eq) {
          if (null === gq || mq.current.has(Eq)) return;
          mq.current.add(Eq);
          const Yq = !gq.has(Eq);
          xq(Eq, Yq), (Yq ? Oq.e.favouriteShaderPack(qq, Eq) : Oq.e.unfavouriteShaderPack(qq, Eq)).catch((qq => {
            console.error("Failed to change a favourite shader pack", qq), xq(Eq, !Yq)
          })).finally((() => {
            mq.current.delete(Eq)
          }))
        }
      }
    }
  },
  6422: (qq, Eq, gq) => {
    gq.d(Eq, {
      $: () => Aq,
      B: () => nq,
      C: () => uq,
      G: () => iq,
      K: () => Vq,
      O: () => Gq,
      R: () => Sq,
      V: () => mq,
      X: () => pq,
      ab: () => xq,
      b: () => Hq,
      c: () => vq,
      db: () => Tq,
      f: () => dq,
      fb: () => zq,
      g: () => Wq,
      hb: () => oq,
      ib: () => bq,
      j: () => Bq,
      m: () => Zq,
      p: () => Nq,
      r: () => fq,
      s: () => Lq,
      w: () => aq,
      z: () => jq
    });
    var Yq = gq(6424),
      lq = gq(163),
      Oq = gq(4387);
    const mq = "/shader-packs",
      xq = `${mq}/publish`;

    function Aq(qq) {
      return `${mq}/${encodeURIComponent(qq)}`
    }
    let cq = null;

    function uq(qq) {
      cq = qq
    }

    function Bq() {
      return cq
    }

    function Wq() {
      cq = null
    }

    function Nq(qq) {
      return qq.playerHasRank("developer") || qq.playerHasRank("admin")
    }
    const aq = ["terrain", "water", "models", "sunShadows", "strict"],
      Vq = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function dq(qq, Eq) {
      return qq.withFeatures.includes(Eq) ? "with" : qq.withoutFeatures.includes(Eq) ? "without" : null
    }

    function jq(qq) {
      return null === qq ? "with" : "with" === qq ? "without" : null
    }

    function Hq(qq) {
      return "with" === qq ? "only" : null === qq ? "include" : void 0
    }

    function oq(qq, Eq) {
      const gq = dq(qq, Eq),
        Yq = qq => qq.filter((qq => qq !== Eq));
      return {
        withFeatures: null === gq ? [...qq.withFeatures, Eq] : Yq(qq.withFeatures),
        withoutFeatures: "with" === gq ? [...qq.withoutFeatures, Eq] : Yq(qq.withoutFeatures)
      }
    }
    const Pq = "section",
      Qq = "sort",
      yq = "filters",
      tq = "q",
      rq = "banned",
      vq = "popular",
      hq = "strict";

    function nq(qq) {
      var Eq, gq, lq;
      const mq = qq.get(Pq),
        xq = (null !== (Eq = qq.get(yq)) && void 0 !== Eq ? Eq : hq).split(","),
        Aq = qq.get(rq);
      return {
        section: "favourites" === mq || "mine" === mq ? mq : "explore",
        sort: null !== (gq = Yq.v.find((Eq => Eq === qq.get(Qq)))) && void 0 !== gq ? gq : vq,
        withFeatures: aq.filter((qq => xq.includes(qq) && !xq.includes(`-${qq}`))),
        withoutFeatures: aq.filter((qq => xq.includes(`-${qq}`))),
        searchQuery: (null === (lq = qq.get(tq)) || void 0 === lq ? void 0 : lq.slice(0, Yq.I)) || null,
        pageNumber: (0, Oq.e)(qq.get(Oq.d)),
        banned: "only" === Aq ? "with" : "include" === Aq ? null : "without"
      }
    }

    function bq(qq, Eq) {
      var gq;
      const Yq = Mq(Eq);
      (0, Oq.f)(qq, Pq, "explore" === Eq.section ? null : Eq.section), (0, Oq.f)(qq, Qq, Eq.sort === vq ? null : Eq.sort), (0, Oq.f)(qq, yq, Yq === hq ? null : Yq), (0, Oq.f)(qq, tq, Eq.searchQuery), (0, Oq.f)(qq, rq, null !== (gq = Hq(Eq.banned)) && void 0 !== gq ? gq : null), (0, Oq.g)(qq, Eq.pageNumber)
    }

    function iq(qq) {
      const Eq = new URLSearchParams;
      return bq(Eq, {
        section: "explore",
        sort: vq,
        withFeatures: "strict" === qq ? [qq] : [qq, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${mq}?${Eq.toString()}`
    }

    function Zq(qq) {
      return Mq(qq) === hq
    }

    function fq(qq) {
      return null !== qq.searchQuery || "with" === qq.banned || Mq(qq) !== hq
    }

    function Mq(qq) {
      return aq.flatMap((Eq => {
        const gq = dq(qq, Eq);
        return "with" === gq ? [Eq] : "without" === gq ? [`-${Eq}`] : []
      })).join(",")
    }
    const Tq = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      zq = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Sq(qq) {
      return Math.round(100 * Math.max(0, 1 - 1 / qq))
    }

    function pq(qq, Eq, gq, lq) {
      const Oq = [];
      qq.isBanned && Oq.push({
        tone: "warning",
        text: lq("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: mq
      } = qq;
      if (null === qq.brokenError || mq && !mq.error || Oq.push({
          tone: "warning",
          text: lq("shaderPackListing:ownerBroken"),
          detail: qq.brokenError
        }), null !== mq && void 0 !== mq && mq.error) Oq.push({
        tone: "warning",
        text: lq(Eq ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Yq.k)(mq.error) ? null : mq.error
      });
      else if (mq) {
        const qq = null === mq.renderNotBefore ? 0 : mq.renderNotBefore - gq,
          Yq = String(Math.ceil(qq / 6e4)),
          xq = lq(Eq ? qq > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : qq > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Yq
          });
        Oq.push({
          tone: "info",
          text: xq,
          detail: null
        })
      }
      return qq.listed || Oq.push({
        tone: "info",
        text: lq("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Oq
    }

    function Gq(qq) {
      return Math.max(1, Math.round(qq / 1024))
    }

    function Lq(qq, Eq, gq) {
      return qq instanceof lq.b && qq.errorMessageForUser ? qq.errorMessageForUser : Eq(gq)
    }
  },
  6434: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(57),
      lq = gq(38);

    function Oq(qq, Eq) {
      var gq;
      const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
      return [Oq, Eq => {
        lq.i.setItem(qq, Eq), mq(Eq)
      }]
    }
  },
  6535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(38);
    const lq = "shaderPack";
    async function Oq() {
      var qq;
      let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
    }
  },
  6424: (qq, Eq, gq) => {
    gq.d(Eq, {
      D: () => mq,
      E: () => Yq,
      G: () => Wq,
      I: () => uq,
      K: () => oq,
      N: () => Bq,
      R: () => cq,
      e: () => Nq,
      g: () => Vq,
      i: () => aq,
      k: () => Hq,
      m: () => Qq,
      n: () => Aq,
      p: () => lq,
      r: () => Pq,
      v: () => Oq,
      z: () => xq
    });
    const Yq = ["forest", "desert", "water", "night", "cave"];
    const lq = {
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
      Oq = ["popular", "updated", "newest"],
      mq = 3,
      xq = 32,
      Aq = 300;

    function cq(qq, Eq) {
      return qq.slice(0, Eq).replace(/[\uD800-\uDBFF]$/, "")
    }
    const uq = 64,
      Bq = 512,
      Wq = 18e5;
    const Nq = "Bloxdhub",
      aq = "https://bloxdhub.com/shaders";

    function Vq(qq) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(qq)}`
    }
    const dq = "Screenshot generation failed.",
      jq = "Its screenshots couldn't be generated:";

    function Hq(qq) {
      var Eq;
      return qq === dq || null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.startsWith(jq)) && void 0 !== Eq && Eq
    }

    function oq(qq, Eq) {
      return `shaderPacks/${qq}/${Eq}.json`
    }

    function Pq(qq, Eq, gq, Yq) {
      return null === Eq.renderId ? Qq(qq, Eq.baselineVersion, gq, Yq) : `${qq}/${function(qq,Eq,gq,Yq){return`shaderPacks/${qq}/${Eq}/${gq}-${Yq}.webp`}(Eq.packId,Eq.renderId,gq,Yq)}`
    }

    function Qq(qq, Eq, gq, Yq) {
      return `${qq}/${function(qq,Eq,gq){return`shaderPacks/baseline/${qq}/${Eq}-${gq}.webp`}(Eq,gq,Yq)}`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);