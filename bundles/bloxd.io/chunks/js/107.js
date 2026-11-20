export const id = 107;
export const ids = [107, 124];
export const modules = {
  4676: (bb, cb, sb) => {
    var kb = sb(4684);

    function Wb() {}

    function ab() {}
    ab.resetWarningCache = Wb, bb.exports = function() {
      function bb(bb, cb, sb, Wb, ab, Tb) {
        if (Tb !== kb) {
          var Ub = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ub.name = "Invariant Violation", Ub
        }
      }

      function cb() {
        return bb
      }
      bb.isRequired = bb;
      var sb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: cb,
        element: bb,
        elementType: bb,
        instanceOf: cb,
        node: bb,
        objectOf: cb,
        oneOf: cb,
        oneOfType: cb,
        shape: cb,
        exact: cb,
        checkPropTypes: ab,
        resetWarningCache: Wb
      };
      return sb.PropTypes = sb, sb
    }
  },
  4669: (bb, cb, sb) => {
    bb.exports = sb(4676)()
  },
  4684: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6244: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ShaderPackPublishForm: () => Nb
    });
    var kb = sb(64),
      Wb = sb(6209),
      ab = sb(230),
      Tb = sb(6250),
      Ub = sb(1039),
      Ib = sb(1431),
      Hb = sb(1664),
      fb = sb(1117),
      Mb = sb(6258),
      Xb = sb(6273),
      nb = sb(1474),
      mb = sb(1197),
      lb = sb(6276),
      Qb = sb(6314),
      eb = sb(6204),
      Cb = sb(1087);

    function Nb(bb) {
      var cb, sb, Mb;
      let {
        existing: Nb,
        onPublished: Lb
      } = bb;
      const {
        t: Yb
      } = (0, mb.E)(), {
        userContext: hb,
        isUserContextUpdating: Jb
      } = (0, fb.c)(), [gb, Bb] = (0, kb.useState)(null), [tb, yb] = (0, kb.useState)(0), [Pb, Db] = (0, kb.useState)(null !== (cb = null === Nb || void 0 === Nb ? void 0 : Nb.name) && void 0 !== cb ? cb : ""), Eb = (0, kb.useRef)(Pb), ib = (0, kb.useRef)(""), Ob = bb => {
        Eb.current = bb, Db(bb)
      }, [Gb, Kb] = (0, kb.useState)(null !== (sb = null === Nb || void 0 === Nb ? void 0 : Nb.description) && void 0 !== sb ? sb : ""), Zb = (0, kb.useRef)(Gb), zb = (0, kb.useRef)(""), qb = bb => {
        Zb.current = bb, Kb(bb)
      }, [db, Ab] = (0, kb.useState)(!1), {
        loading: wb,
        error: rb,
        setError: ob,
        onFiles: Sb
      } = (0, Xb.h)((async bb => {
        const cb = await (0, lb.loadPageShaderPackCompiler)();
        if (!cb) return void ob(Yb("shaderPack:compilerUnavailable"));
        const sb = await (0, Qb.d)(cb, bb.files);
        if (Bb({
            pack: bb,
            validation: sb,
            sourceBytes: (0, Tb.w)(bb.files)
          }), !Nb) {
          var kb;
          if ("" !== Eb.current.trim() && Eb.current !== ib.current || (ib.current = (0, Wb.Y)(bb.manifest.name.trim(), Wb.D), Ob(ib.current)), "" === Zb.current.trim() || Zb.current === zb.current) zb.current = (0, Wb.Y)((null !== (kb = bb.manifest.description) && void 0 !== kb ? kb : "").trim(), Wb.t), qb(zb.current);
          yb((bb => bb + 1))
        }
      })), Rb = !Jb && !hb.isLoggedIn() && !ab.d.offlineMode, vb = Pb.trim(), Fb = vb.length < Wb.H, xb = null !== gb && !1 !== (null === (Mb = gb.validation) || void 0 === Mb ? void 0 : Mb.ok) && !wb && !Fb && !Rb && !Jb;
      return (0, Cb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Cb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Nb ? Yb("shaderPackListing:uploadIntro", {
            minutes: String(Wb.M / 6e4)
          }) : Yb("shaderPackListing:publishIntro")
        }), (0, Cb.jsx)(ub, {}), Rb && (0, Cb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Yb("shaderPackListing:publishNeedsLogin")
        }), (0, Cb.jsx)(Xb.e, {
          busy: wb,
          disabled: wb || db,
          onFiles: bb => {
            Bb(null), Sb(bb)
          }
        }), gb && (0, Cb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Cb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: gb.pack.manifest.name
          }), (0, Cb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Yb("shaderPackListing:sizeValue", {
              kilobytes: String((0, eb.O)(gb.sourceBytes))
            }), " \xb7", " ", Yb("shaderPackListing:filesValue", {
              files: String(gb.pack.files.length)
            })]
          }), (0, Cb.jsx)(Vb, {
            picked: gb
          })]
        }), !Nb && (0, Cb.jsxs)(Cb.Fragment, {
          children: [(0, Cb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Cb.jsx)("span", {
              children: Yb("general:name")
            }), (0, Cb.jsx)(Hb.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Pb,
              maxLength: Wb.D,
              onValueChange: Ob
            }, tb), gb && Fb && (0, Cb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Yb("shaderPackListing:nameTooShort", {
                min: String(Wb.H)
              })
            })]
          }), (0, Cb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Cb.jsx)("span", {
              children: Yb("general:description")
            }), (0, Cb.jsx)(Hb.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Gb,
              maxLength: Wb.t,
              onValueChange: qb,
              useTextarea: !0
            }, tb)]
          })]
        }), rb && (0, Cb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: rb
        }), (0, Cb.jsxs)(Ib.n, {
          className: "ShaderPackPublishButton",
          disabled: !xb,
          loading: db,
          onClick: () => {
            !async function() {
              var bb;
              if (!gb) return;
              const {
                name: cb,
                description: sb
              } = null !== Nb && void 0 !== Nb ? Nb : {
                name: vb,
                description: Gb.trim()
              }, kb = {
                packId: null !== (bb = null === Nb || void 0 === Nb ? void 0 : Nb.packId) && void 0 !== bb ? bb : null,
                name: cb,
                description: sb,
                apiVersion: gb.pack.manifest.apiVersion,
                files: (0, Tb.u)(gb.pack.files),
                keepCircleShadows: !0 === gb.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(kb)).byteLength > 1024 * Wb.U) ob(Yb("shaderPackListing:publishTooBig", {
                kilobytes: String(Wb.U)
              }));
              else {
                Ab(!0), ob(null);
                try {
                  Lb(await nb.b.publishShaderPack(hb, kb))
                } catch (ab) {
                  console.error("Failed to publish the shader pack", ab), ob((0, eb.y)(ab, Yb, "shaderPackListing:publishFailed"))
                } finally {
                  Ab(!1)
                }
              }
            }()
          },
          children: [(0, Cb.jsx)(Ub.b, {
            name: "upload"
          }), " ", Yb(Nb ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Vb(bb) {
      let {
        picked: cb
      } = bb;
      const {
        t: sb
      } = (0, mb.E)(), {
        validation: kb
      } = cb;
      return null === kb ? (0, Cb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: sb("shaderPackListing:publishUnchecked")
      }) : kb.ok ? (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Cb.jsx)(Ub.b, {
            name: "circle-check"
          }), " ", sb("shaderPackListing:publishReady")]
        }), kb.offInStrict.length > 0 && (0, Cb.jsxs)(Cb.Fragment, {
          children: [(0, Cb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Cb.jsx)(Ub.b, {
              name: "triangle-exclamation"
            }), " ", sb("shaderPack:offInStrict")]
          }), (0, Cb.jsx)(Mb.c, {
            diagnostics: kb.offInStrict,
            t: sb
          })]
        })]
      }) : (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Cb.jsx)(Ub.b, {
            name: "triangle-exclamation"
          }), " ", sb("shaderPackListing:publishHasErrors")]
        }), (0, Cb.jsx)(Mb.c, {
          diagnostics: kb.errors,
          more: kb.moreErrors,
          t: sb
        })]
      })
    }
    const Lb = "\0";

    function ub() {
      const {
        t: bb
      } = (0, mb.E)(), [cb, sb] = bb("shaderPackListing:bloxdhubHelp", {
        site: Lb
      }).split(Lb);
      return (0, Cb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [cb, (0, Cb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Wb.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Wb.b
        }), sb]
      })
    }
  },
  6238: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => fb
    });
    var kb = sb(1495),
      Wb = sb(1431),
      ab = sb(1197),
      Tb = sb(6244),
      Ub = sb(6219),
      Ib = sb(6204),
      Hb = sb(1087);

    function fb() {
      const {
        t: bb
      } = (0, ab.E)(), cb = (0, kb.useNavigatePreserveSearch)();
      return (0, Ub.c)(), (0, Hb.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Hb.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Hb.jsx)(Wb.b, {
            onClick: () => {
              cb(Ib.T)
            },
            children: bb("shaderPackListing:backToPacks")
          })
        }), (0, Hb.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: bb("shaderPackListing:publishTitle")
        }), (0, Hb.jsx)(Tb.ShaderPackPublishForm, {
          existing: null,
          onPublished: bb => {
            cb((0, Ib.Z)(bb.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6219: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb,
      f: () => nb,
      h: () => Mb,
      l: () => mb
    });
    var kb = sb(64),
      Wb = sb(6209),
      ab = sb(1474),
      Tb = sb(6204),
      Ub = sb(6226),
      Ib = sb(1117);
    const Hb = "shaderPackListingView",
      fb = "shaderPackListingFilterOpen";

    function Mb() {
      var bb;
      const [cb, sb] = (0, Ub.d)(Hb, Wb.K[0]);
      return [null !== (bb = Wb.K.find((bb => bb === cb))) && void 0 !== bb ? bb : Wb.K[0], sb]
    }

    function Xb() {
      (0, kb.useEffect)((() => () => {
        window.location.pathname.startsWith(Tb.T) || (0, Tb.k)()
      }), [])
    }

    function nb() {
      return (0, Ub.d)(fb, !1)
    }

    function mb() {
      const {
        userContext: bb,
        isUserContextUpdating: cb
      } = (0, Ib.c)(), [sb, Wb] = (0, kb.useState)(null), Tb = (0, kb.useRef)(new Set);

      function Ub(bb, cb) {
        Wb((sb => {
          const kb = new Set(sb);
          return cb ? kb.add(bb) : kb.delete(bb), kb
        }))
      }
      return (0, kb.useEffect)((() => {
        if (cb) return;
        let sb = !1;
        return ab.b.getFavouriteShaderPacks(bb).then((bb => {
          sb || Wb(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), sb || Wb(new Set)
        })), () => {
          sb = !0
        }
      }), [bb, cb]), {
        isFavourite: bb => null === sb ? null : sb.has(bb),
        toggle: function(cb) {
          if (null === sb || Tb.current.has(cb)) return;
          Tb.current.add(cb);
          const kb = !sb.has(cb);
          Ub(cb, kb), (kb ? ab.b.favouriteShaderPack(bb, cb) : ab.b.unfavouriteShaderPack(bb, cb)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Ub(cb, !kb)
          })).finally((() => {
            Tb.current.delete(cb)
          }))
        }
      }
    }
  },
  6204: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => mb,
      D: () => eb,
      F: () => Bb,
      G: () => fb,
      I: () => yb,
      K: () => lb,
      O: () => Zb,
      Q: () => Gb,
      T: () => Tb,
      X: () => Kb,
      Z: () => Ib,
      _: () => Ub,
      ab: () => ib,
      cb: () => Ob,
      db: () => Nb,
      e: () => Cb,
      f: () => Jb,
      gb: () => tb,
      h: () => Qb,
      k: () => Xb,
      m: () => Mb,
      p: () => Pb,
      t: () => nb,
      x: () => Db,
      y: () => zb
    });
    var kb = sb(6209),
      Wb = sb(195),
      ab = sb(4295);
    const Tb = "/shader-packs",
      Ub = `${Tb}/publish`;

    function Ib(bb) {
      return `${Tb}/${encodeURIComponent(bb)}`
    }
    let Hb = null;

    function fb(bb) {
      Hb = bb
    }

    function Mb() {
      return Hb
    }

    function Xb() {
      Hb = null
    }

    function nb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const mb = ["terrain", "water", "models", "sunShadows", "strict"],
      lb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Qb(bb, cb) {
      return bb.withFeatures.includes(cb) ? "with" : bb.withoutFeatures.includes(cb) ? "without" : null
    }

    function eb(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function Cb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Nb(bb, cb) {
      const sb = Qb(bb, cb),
        kb = bb => bb.filter((bb => bb !== cb));
      return {
        withFeatures: null === sb ? [...bb.withFeatures, cb] : kb(bb.withFeatures),
        withoutFeatures: "with" === sb ? [...bb.withoutFeatures, cb] : kb(bb.withoutFeatures)
      }
    }
    const Vb = "section",
      Lb = "sort",
      ub = "filters",
      Yb = "q",
      hb = "banned",
      Jb = "popular",
      gb = "strict";

    function Bb(bb) {
      var cb, sb, Wb;
      const Tb = bb.get(Vb),
        Ub = (null !== (cb = bb.get(ub)) && void 0 !== cb ? cb : gb).split(","),
        Ib = bb.get(hb);
      return {
        section: "favourites" === Tb || "mine" === Tb ? Tb : "explore",
        sort: null !== (sb = kb.A.find((cb => cb === bb.get(Lb)))) && void 0 !== sb ? sb : Jb,
        withFeatures: mb.filter((bb => Ub.includes(bb) && !Ub.includes(`-${bb}`))),
        withoutFeatures: mb.filter((bb => Ub.includes(`-${bb}`))),
        searchQuery: (null === (Wb = bb.get(Yb)) || void 0 === Wb ? void 0 : Wb.slice(0, kb.N)) || null,
        pageNumber: (0, ab.d)(bb.get(ab.b)),
        banned: "only" === Ib ? "with" : "include" === Ib ? null : "without"
      }
    }

    function tb(bb, cb) {
      var sb;
      const kb = Eb(cb);
      (0, ab.g)(bb, Vb, "explore" === cb.section ? null : cb.section), (0, ab.g)(bb, Lb, cb.sort === Jb ? null : cb.sort), (0, ab.g)(bb, ub, kb === gb ? null : kb), (0, ab.g)(bb, Yb, cb.searchQuery), (0, ab.g)(bb, hb, null !== (sb = Cb(cb.banned)) && void 0 !== sb ? sb : null), (0, ab.k)(bb, cb.pageNumber)
    }

    function yb(bb) {
      const cb = new URLSearchParams;
      return tb(cb, {
        section: "explore",
        sort: Jb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Tb}?${cb.toString()}`
    }

    function Pb(bb) {
      return Eb(bb) === gb
    }

    function Db(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || Eb(bb) !== gb
    }

    function Eb(bb) {
      return mb.flatMap((cb => {
        const sb = Qb(bb, cb);
        return "with" === sb ? [cb] : "without" === sb ? [`-${cb}`] : []
      })).join(",")
    }
    const ib = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Ob = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Gb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function Kb(bb, cb, sb, Wb) {
      const ab = [];
      bb.isBanned && ab.push({
        tone: "warning",
        text: Wb("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Tb
      } = bb;
      if (null === bb.brokenError || Tb && !Tb.error || ab.push({
          tone: "warning",
          text: Wb("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Tb && void 0 !== Tb && Tb.error) ab.push({
        tone: "warning",
        text: Wb(cb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, kb.l)(Tb.error) ? null : Tb.error
      });
      else if (Tb) {
        const bb = null === Tb.renderNotBefore ? 0 : Tb.renderNotBefore - sb,
          kb = String(Math.ceil(bb / 6e4)),
          Ub = Wb(cb ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: kb
          });
        ab.push({
          tone: "info",
          text: Ub,
          detail: null
        })
      }
      return bb.listed || ab.push({
        tone: "info",
        text: Wb("shaderPackListing:ownerUnlisted"),
        detail: null
      }), ab
    }

    function Zb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function zb(bb, cb, sb) {
      return bb instanceof Wb.d && bb.errorMessageForUser ? bb.errorMessageForUser : cb(sb)
    }
  },
  6226: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(64),
      Wb = sb(37);

    function ab(bb, cb) {
      var sb;
      const [ab, Tb] = (0, kb.useState)(null !== (sb = Wb.h.getItem(bb)) && void 0 !== sb ? sb : cb);
      return [ab, cb => {
        Wb.h.setItem(bb, cb), Tb(cb)
      }]
    }
  },
  6328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    var kb = sb(37);
    const Wb = "shaderPack";
    async function ab() {
      var bb;
      let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await kb.d.getItem(Wb, cb)) && void 0 !== bb ? bb : null
    }
  },
  6209: (bb, cb, sb) => {
    sb.d(cb, {
      A: () => ab,
      D: () => Ub,
      H: () => Tb,
      K: () => kb,
      M: () => Xb,
      N: () => fb,
      R: () => Nb,
      U: () => Mb,
      Y: () => Hb,
      b: () => nb,
      f: () => lb,
      h: () => mb,
      l: () => Cb,
      p: () => Lb,
      t: () => Ib,
      w: () => Wb,
      y: () => Vb
    });
    const kb = ["forest", "desert", "water", "night", "cave"];
    const Wb = {
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
      ab = ["popular", "updated", "newest"],
      Tb = 3,
      Ub = 32,
      Ib = 300;

    function Hb(bb, cb) {
      return bb.slice(0, cb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const fb = 64,
      Mb = 512,
      Xb = 18e5;
    const nb = "Bloxdhub",
      mb = "https://bloxdhub.com/shaders";

    function lb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Qb = "Screenshot generation failed.",
      eb = "Its screenshots couldn't be generated:";

    function Cb(bb) {
      var cb;
      return bb === Qb || null !== (cb = null === bb || void 0 === bb ? void 0 : bb.startsWith(eb)) && void 0 !== cb && cb
    }

    function Nb(bb, cb) {
      return `shaderPacks/${bb}/${cb}.json`
    }

    function Vb(bb, cb, sb, kb) {
      return null === cb.renderId ? Lb(bb, cb.baselineVersion, sb, kb) : `${bb}/${function(bb,cb,sb,kb){return`shaderPacks/${bb}/${cb}/${sb}-${kb}.webp`}(cb.packId,cb.renderId,sb,kb)}`
    }

    function Lb(bb, cb, sb, kb) {
      return `${bb}/${function(bb,cb,sb){return`shaderPacks/baseline/${bb}/${cb}-${sb}.webp`}(cb,sb,kb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);