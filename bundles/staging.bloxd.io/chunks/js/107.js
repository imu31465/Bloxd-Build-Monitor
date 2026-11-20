export const id = 107;
export const ids = [107, 124];
export const modules = {
  4648: (bb, ab, Ub) => {
    var Ab = Ub(4651);

    function Mb() {}

    function Tb() {}
    Tb.resetWarningCache = Mb, bb.exports = function() {
      function bb(bb, ab, Ub, Mb, Tb, Eb) {
        if (Eb !== Ab) {
          var Yb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Yb.name = "Invariant Violation", Yb
        }
      }

      function ab() {
        return bb
      }
      bb.isRequired = bb;
      var Ub = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ab,
        element: bb,
        elementType: bb,
        instanceOf: ab,
        node: bb,
        objectOf: ab,
        oneOf: ab,
        oneOfType: ab,
        shape: ab,
        exact: ab,
        checkPropTypes: Tb,
        resetWarningCache: Mb
      };
      return Ub.PropTypes = Ub, Ub
    }
  },
  4642: (bb, ab, Ub) => {
    bb.exports = Ub(4648)()
  },
  4651: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6203: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ShaderPackPublishForm: () => Db
    });
    var Ab = Ub(52),
      Mb = Ub(6167),
      Tb = Ub(210),
      Eb = Ub(6212),
      Yb = Ub(990),
      Bb = Ub(1352),
      eb = Ub(1589),
      vb = Ub(1060),
      Lb = Ub(6219),
      Pb = Ub(6237),
      Xb = Ub(1413),
      jb = Ub(1134),
      Rb = Ub(6244),
      kb = Ub(6281),
      yb = Ub(6161),
      Zb = Ub(1023);

    function Db(bb) {
      var ab, Ub, Lb;
      let {
        existing: Db,
        onPublished: xb
      } = bb;
      const {
        t: fb
      } = (0, jb.A)(), {
        userContext: mb,
        isUserContextUpdating: pb
      } = (0, vb.c)(), [Nb, Wb] = (0, Ab.useState)(null), [Hb, Ib] = (0, Ab.useState)(0), [db, Fb] = (0, Ab.useState)(null !== (ab = null === Db || void 0 === Db ? void 0 : Db.name) && void 0 !== ab ? ab : ""), hb = (0, Ab.useRef)(db), Gb = (0, Ab.useRef)(""), Qb = bb => {
        hb.current = bb, Fb(bb)
      }, [qb, ub] = (0, Ab.useState)(null !== (Ub = null === Db || void 0 === Db ? void 0 : Db.description) && void 0 !== Ub ? Ub : ""), rb = (0, Ab.useRef)(qb), Kb = (0, Ab.useRef)(""), ob = bb => {
        rb.current = bb, ub(bb)
      }, [lb, tb] = (0, Ab.useState)(!1), {
        loading: wb,
        error: sb,
        setError: gb,
        onFiles: Cb
      } = (0, Pb.g)((async bb => {
        const ab = await (0, Rb.loadPageShaderPackCompiler)();
        if (!ab) return void gb(fb("shaderPack:compilerUnavailable"));
        const Ub = await (0, kb.d)(ab, bb.files);
        if (Wb({
            pack: bb,
            validation: Ub,
            sourceBytes: (0, Eb.y)(bb.files)
          }), !Db) {
          var Ab;
          if ("" !== hb.current.trim() && hb.current !== Gb.current || (Gb.current = (0, Mb.T)(bb.manifest.name.trim(), Mb.C), Qb(Gb.current)), "" === rb.current.trim() || rb.current === Kb.current) Kb.current = (0, Mb.T)((null !== (Ab = bb.manifest.description) && void 0 !== Ab ? Ab : "").trim(), Mb.o), ob(Kb.current);
          Ib((bb => bb + 1))
        }
      })), Vb = !pb && !mb.isLoggedIn() && !Tb.e.offlineMode, Ob = db.trim(), cb = Ob.length < Mb.E, Jb = null !== Nb && !1 !== (null === (Lb = Nb.validation) || void 0 === Lb ? void 0 : Lb.ok) && !wb && !cb && !Vb && !pb;
      return (0, Zb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Zb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Db ? fb("shaderPackListing:uploadIntro", {
            minutes: String(Mb.I / 6e4)
          }) : fb("shaderPackListing:publishIntro")
        }), (0, Zb.jsx)(ib, {}), Vb && (0, Zb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fb("shaderPackListing:publishNeedsLogin")
        }), (0, Zb.jsx)(Pb.d, {
          busy: wb,
          disabled: wb || lb,
          onFiles: bb => {
            Wb(null), Cb(bb)
          }
        }), Nb && (0, Zb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Zb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Nb.pack.manifest.name
          }), (0, Zb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fb("shaderPackListing:sizeValue", {
              kilobytes: String((0, yb.O)(Nb.sourceBytes))
            }), " \xb7", " ", fb("shaderPackListing:filesValue", {
              files: String(Nb.pack.files.length)
            })]
          }), (0, Zb.jsx)(zb, {
            picked: Nb
          })]
        }), !Db && (0, Zb.jsxs)(Zb.Fragment, {
          children: [(0, Zb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Zb.jsx)("span", {
              children: fb("general:name")
            }), (0, Zb.jsx)(eb.c, {
              className: "ShaderPackPublishInput",
              defaultValue: db,
              maxLength: Mb.C,
              onValueChange: Qb
            }, Hb), Nb && cb && (0, Zb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fb("shaderPackListing:nameTooShort", {
                min: String(Mb.E)
              })
            })]
          }), (0, Zb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Zb.jsx)("span", {
              children: fb("general:description")
            }), (0, Zb.jsx)(eb.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: qb,
              maxLength: Mb.o,
              onValueChange: ob,
              useTextarea: !0
            }, Hb)]
          })]
        }), sb && (0, Zb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: sb
        }), (0, Zb.jsxs)(Bb.m, {
          className: "ShaderPackPublishButton",
          disabled: !Jb,
          loading: lb,
          onClick: () => {
            !async function() {
              var bb;
              if (!Nb) return;
              const {
                name: ab,
                description: Ub
              } = null !== Db && void 0 !== Db ? Db : {
                name: Ob,
                description: qb.trim()
              }, Ab = {
                packId: null !== (bb = null === Db || void 0 === Db ? void 0 : Db.packId) && void 0 !== bb ? bb : null,
                name: ab,
                description: Ub,
                apiVersion: Nb.pack.manifest.apiVersion,
                files: (0, Eb.w)(Nb.pack.files),
                keepCircleShadows: !0 === Nb.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Ab)).byteLength > 1024 * Mb.R) gb(fb("shaderPackListing:publishTooBig", {
                kilobytes: String(Mb.R)
              }));
              else {
                tb(!0), gb(null);
                try {
                  xb(await Xb.b.publishShaderPack(mb, Ab))
                } catch (Tb) {
                  console.error("Failed to publish the shader pack", Tb), gb((0, yb.z)(Tb, fb, "shaderPackListing:publishFailed"))
                } finally {
                  tb(!1)
                }
              }
            }()
          },
          children: [(0, Zb.jsx)(Yb.e, {
            name: "upload"
          }), " ", fb(Db ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function zb(bb) {
      let {
        picked: ab
      } = bb;
      const {
        t: Ub
      } = (0, jb.A)(), {
        validation: Ab
      } = ab;
      return null === Ab ? (0, Zb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Ub("shaderPackListing:publishUnchecked")
      }) : Ab.ok ? (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Zb.jsx)(Yb.e, {
            name: "circle-check"
          }), " ", Ub("shaderPackListing:publishReady")]
        }), Ab.offInStrict.length > 0 && (0, Zb.jsxs)(Zb.Fragment, {
          children: [(0, Zb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Zb.jsx)(Yb.e, {
              name: "triangle-exclamation"
            }), " ", Ub("shaderPack:offInStrict")]
          }), (0, Zb.jsx)(Lb.d, {
            diagnostics: Ab.offInStrict,
            t: Ub
          })]
        })]
      }) : (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Zb.jsx)(Yb.e, {
            name: "triangle-exclamation"
          }), " ", Ub("shaderPackListing:publishHasErrors")]
        }), (0, Zb.jsx)(Lb.d, {
          diagnostics: Ab.errors,
          more: Ab.moreErrors,
          t: Ub
        })]
      })
    }
    const xb = "\0";

    function ib() {
      const {
        t: bb
      } = (0, jb.A)(), [ab, Ub] = bb("shaderPackListing:bloxdhubHelp", {
        site: xb
      }).split(xb);
      return (0, Zb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ab, (0, Zb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Mb.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Mb.e
        }), Ub]
      })
    }
  },
  6199: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => vb
    });
    var Ab = Ub(1433),
      Mb = Ub(1352),
      Tb = Ub(1134),
      Eb = Ub(6203),
      Yb = Ub(6179),
      Bb = Ub(6161),
      eb = Ub(1023);

    function vb() {
      const {
        t: bb
      } = (0, Tb.A)(), ab = (0, Ab.useNavigatePreserveSearch)();
      return (0, Yb.e)(), (0, eb.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, eb.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, eb.jsx)(Mb.e, {
            onClick: () => {
              ab(Bb.U)
            },
            children: bb("shaderPackListing:backToPacks")
          })
        }), (0, eb.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: bb("shaderPackListing:publishTitle")
        }), (0, eb.jsx)(Eb.ShaderPackPublishForm, {
          existing: null,
          onPublished: bb => {
            ab((0, Bb.Z)(bb.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6179: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      h: () => Xb,
      k: () => Lb,
      n: () => jb
    });
    var Ab = Ub(52),
      Mb = Ub(6167),
      Tb = Ub(1413),
      Eb = Ub(6161),
      Yb = Ub(6188),
      Bb = Ub(1060);
    const eb = "shaderPackListingView",
      vb = "shaderPackListingFilterOpen";

    function Lb() {
      var bb;
      const [ab, Ub] = (0, Yb.b)(eb, Mb.G[0]);
      return [null !== (bb = Mb.G.find((bb => bb === ab))) && void 0 !== bb ? bb : Mb.G[0], Ub]
    }

    function Pb() {
      (0, Ab.useEffect)((() => () => {
        window.location.pathname.startsWith(Eb.U) || (0, Eb.l)()
      }), [])
    }

    function Xb() {
      return (0, Yb.b)(vb, !1)
    }

    function jb() {
      const {
        userContext: bb,
        isUserContextUpdating: ab
      } = (0, Bb.c)(), [Ub, Mb] = (0, Ab.useState)(null), Eb = (0, Ab.useRef)(new Set);

      function Yb(bb, ab) {
        Mb((Ub => {
          const Ab = new Set(Ub);
          return ab ? Ab.add(bb) : Ab.delete(bb), Ab
        }))
      }
      return (0, Ab.useEffect)((() => {
        if (ab) return;
        let Ub = !1;
        return Tb.b.getFavouriteShaderPacks(bb).then((bb => {
          Ub || Mb(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), Ub || Mb(new Set)
        })), () => {
          Ub = !0
        }
      }), [bb, ab]), {
        isFavourite: bb => null === Ub ? null : Ub.has(bb),
        toggle: function(ab) {
          if (null === Ub || Eb.current.has(ab)) return;
          Eb.current.add(ab);
          const Ab = !Ub.has(ab);
          Yb(ab, Ab), (Ab ? Tb.b.favouriteShaderPack(bb, ab) : Tb.b.unfavouriteShaderPack(bb, ab)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Yb(ab, !Ab)
          })).finally((() => {
            Eb.current.delete(ab)
          }))
        }
      }
    }
  },
  6161: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => jb,
      E: () => yb,
      H: () => Wb,
      I: () => vb,
      J: () => Ib,
      K: () => Rb,
      O: () => rb,
      R: () => qb,
      U: () => Eb,
      V: () => ub,
      Z: () => Bb,
      ab: () => Yb,
      db: () => Gb,
      e: () => Zb,
      eb: () => Qb,
      g: () => pb,
      hb: () => Db,
      ib: () => Hb,
      j: () => kb,
      l: () => Pb,
      m: () => Lb,
      p: () => db,
      t: () => Xb,
      x: () => Fb,
      z: () => Kb
    });
    var Ab = Ub(6167),
      Mb = Ub(166),
      Tb = Ub(4239);
    const Eb = "/shader-packs",
      Yb = `${Eb}/publish`;

    function Bb(bb) {
      return `${Eb}/${encodeURIComponent(bb)}`
    }
    let eb = null;

    function vb(bb) {
      eb = bb
    }

    function Lb() {
      return eb
    }

    function Pb() {
      eb = null
    }

    function Xb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const jb = ["terrain", "water", "models", "sunShadows", "strict"],
      Rb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function kb(bb, ab) {
      return bb.withFeatures.includes(ab) ? "with" : bb.withoutFeatures.includes(ab) ? "without" : null
    }

    function yb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Zb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Db(bb, ab) {
      const Ub = kb(bb, ab),
        Ab = bb => bb.filter((bb => bb !== ab));
      return {
        withFeatures: null === Ub ? [...bb.withFeatures, ab] : Ab(bb.withFeatures),
        withoutFeatures: "with" === Ub ? [...bb.withoutFeatures, ab] : Ab(bb.withoutFeatures)
      }
    }
    const zb = "section",
      xb = "sort",
      ib = "filters",
      fb = "q",
      mb = "banned",
      pb = "popular",
      Nb = "strict";

    function Wb(bb) {
      var ab, Ub, Mb;
      const Eb = bb.get(zb),
        Yb = (null !== (ab = bb.get(ib)) && void 0 !== ab ? ab : Nb).split(","),
        Bb = bb.get(mb);
      return {
        section: "favourites" === Eb || "mine" === Eb ? Eb : "explore",
        sort: null !== (Ub = Ab.z.find((ab => ab === bb.get(xb)))) && void 0 !== Ub ? Ub : pb,
        withFeatures: jb.filter((bb => Yb.includes(bb) && !Yb.includes(`-${bb}`))),
        withoutFeatures: jb.filter((bb => Yb.includes(`-${bb}`))),
        searchQuery: (null === (Mb = bb.get(fb)) || void 0 === Mb ? void 0 : Mb.slice(0, Ab.M)) || null,
        pageNumber: (0, Tb.e)(bb.get(Tb.b)),
        banned: "only" === Bb ? "with" : "include" === Bb ? null : "without"
      }
    }

    function Hb(bb, ab) {
      var Ub;
      const Ab = hb(ab);
      (0, Tb.f)(bb, zb, "explore" === ab.section ? null : ab.section), (0, Tb.f)(bb, xb, ab.sort === pb ? null : ab.sort), (0, Tb.f)(bb, ib, Ab === Nb ? null : Ab), (0, Tb.f)(bb, fb, ab.searchQuery), (0, Tb.f)(bb, mb, null !== (Ub = Zb(ab.banned)) && void 0 !== Ub ? Ub : null), (0, Tb.h)(bb, ab.pageNumber)
    }

    function Ib(bb) {
      const ab = new URLSearchParams;
      return Hb(ab, {
        section: "explore",
        sort: pb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Eb}?${ab.toString()}`
    }

    function db(bb) {
      return hb(bb) === Nb
    }

    function Fb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || hb(bb) !== Nb
    }

    function hb(bb) {
      return jb.flatMap((ab => {
        const Ub = kb(bb, ab);
        return "with" === Ub ? [ab] : "without" === Ub ? [`-${ab}`] : []
      })).join(",")
    }
    const Gb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Qb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function ub(bb, ab, Ub, Mb) {
      const Tb = [];
      bb.isBanned && Tb.push({
        tone: "warning",
        text: Mb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Eb
      } = bb;
      if (null === bb.brokenError || Eb && !Eb.error || Tb.push({
          tone: "warning",
          text: Mb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Eb && void 0 !== Eb && Eb.error) Tb.push({
        tone: "warning",
        text: Mb(ab ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ab.l)(Eb.error) ? null : Eb.error
      });
      else if (Eb) {
        const bb = null === Eb.renderNotBefore ? 0 : Eb.renderNotBefore - Ub,
          Ab = String(Math.ceil(bb / 6e4)),
          Yb = Mb(ab ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ab
          });
        Tb.push({
          tone: "info",
          text: Yb,
          detail: null
        })
      }
      return bb.listed || Tb.push({
        tone: "info",
        text: Mb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Tb
    }

    function rb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function Kb(bb, ab, Ub) {
      return bb instanceof Mb.c && bb.errorMessageForUser ? bb.errorMessageForUser : ab(Ub)
    }
  },
  6188: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(31);

    function Tb(bb, ab) {
      var Ub;
      const [Tb, Eb] = (0, Ab.useState)(null !== (Ub = Mb.f.getItem(bb)) && void 0 !== Ub ? Ub : ab);
      return [Tb, ab => {
        Mb.f.setItem(bb, ab), Eb(ab)
      }]
    }
  },
  6294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(31);
    const Mb = "shaderPack";
    async function Tb() {
      var bb;
      let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Ab.c.getItem(Mb, ab)) && void 0 !== bb ? bb : null
    }
  },
  6167: (bb, ab, Ub) => {
    Ub.d(ab, {
      C: () => Yb,
      E: () => Eb,
      G: () => Ab,
      I: () => Pb,
      M: () => vb,
      P: () => Db,
      R: () => Lb,
      T: () => eb,
      e: () => Xb,
      f: () => Rb,
      j: () => jb,
      l: () => Zb,
      m: () => xb,
      o: () => Bb,
      s: () => Mb,
      w: () => zb,
      z: () => Tb
    });
    const Ab = ["forest", "desert", "water", "night", "cave"];
    const Mb = {
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
      Tb = ["popular", "updated", "newest"],
      Eb = 3,
      Yb = 32,
      Bb = 300;

    function eb(bb, ab) {
      return bb.slice(0, ab).replace(/[\uD800-\uDBFF]$/, "")
    }
    const vb = 64,
      Lb = 512,
      Pb = 18e5;
    const Xb = "Bloxdhub",
      jb = "https://bloxdhub.com/shaders";

    function Rb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const kb = "Screenshot generation failed.",
      yb = "Its screenshots couldn't be generated:";

    function Zb(bb) {
      var ab;
      return bb === kb || null !== (ab = null === bb || void 0 === bb ? void 0 : bb.startsWith(yb)) && void 0 !== ab && ab
    }

    function Db(bb, ab) {
      return `shaderPacks/${bb}/${ab}.json`
    }

    function zb(bb, ab, Ub, Ab) {
      return null === ab.renderId ? xb(bb, ab.baselineVersion, Ub, Ab) : `${bb}/${function(bb,ab,Ub,Ab){return`shaderPacks/${bb}/${ab}/${Ub}-${Ab}.webp`}(ab.packId,ab.renderId,Ub,Ab)}`
    }

    function xb(bb, ab, Ub, Ab) {
      return `${bb}/${function(bb,ab,Ub){return`shaderPacks/baseline/${bb}/${ab}-${Ub}.webp`}(ab,Ub,Ab)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);