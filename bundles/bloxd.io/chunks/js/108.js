export const id = 108;
export const ids = [108, 125];
export const modules = {
  4733: (bb, ub, hb) => {
    var Bb = hb(4740);

    function Ob() {}

    function Gb() {}
    Gb.resetWarningCache = Ob, bb.exports = function() {
      function bb(bb, ub, hb, Ob, Gb, Ub) {
        if (Ub !== Bb) {
          var Lb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Lb.name = "Invariant Violation", Lb
        }
      }

      function ub() {
        return bb
      }
      bb.isRequired = bb;
      var hb = {
        array: bb,
        bigint: bb,
        bool: bb,
        func: bb,
        number: bb,
        object: bb,
        string: bb,
        symbol: bb,
        any: bb,
        arrayOf: ub,
        element: bb,
        elementType: bb,
        instanceOf: ub,
        node: bb,
        objectOf: ub,
        oneOf: ub,
        oneOfType: ub,
        shape: ub,
        exact: ub,
        checkPropTypes: Gb,
        resetWarningCache: Ob
      };
      return hb.PropTypes = hb, hb
    }
  },
  4729: (bb, ub, hb) => {
    bb.exports = hb(4733)()
  },
  4740: bb => {
    bb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6316: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ShaderPackPublishForm: () => Kb
    });
    var Bb = hb(49),
      Ob = hb(6281),
      Gb = hb(194),
      Ub = hb(6324),
      Lb = hb(966),
      Yb = hb(1357),
      Sb = hb(1585),
      ab = hb(1029),
      Hb = hb(6331),
      wb = hb(6347),
      Zb = hb(1398),
      Xb = hb(1095),
      pb = hb(6350),
      ob = hb(6384),
      Ab = hb(6279),
      lb = hb(1007);

    function Kb(bb) {
      var ub, hb, Hb;
      let {
        existing: Kb,
        onPublished: Cb
      } = bb;
      const {
        t: rb
      } = (0, Xb.K)(), {
        userContext: jb,
        isUserContextUpdating: nb
      } = (0, ab.d)(), [Db, xb] = (0, Bb.useState)(null), [zb, gb] = (0, Bb.useState)(0), [ib, vb] = (0, Bb.useState)(null !== (ub = null === Kb || void 0 === Kb ? void 0 : Kb.name) && void 0 !== ub ? ub : ""), tb = (0, Bb.useRef)(ib), Jb = (0, Bb.useRef)(""), eb = bb => {
        tb.current = bb, vb(bb)
      }, [Nb, sb] = (0, Bb.useState)(null !== (hb = null === Kb || void 0 === Kb ? void 0 : Kb.description) && void 0 !== hb ? hb : ""), Mb = (0, Bb.useRef)(Nb), mb = (0, Bb.useRef)(""), Ib = bb => {
        Mb.current = bb, sb(bb)
      }, [Pb, qb] = (0, Bb.useState)(!1), {
        loading: Eb,
        error: yb,
        setError: Vb,
        onFiles: Fb
      } = (0, wb.d)((async bb => {
        const ub = await (0, pb.loadPageShaderPackCompiler)();
        if (!ub) return void Vb(rb("shaderPack:compilerUnavailable"));
        const hb = await (0, ob.d)(ub, bb.files);
        if (xb({
            pack: bb,
            validation: hb,
            sourceBytes: (0, Ub.z)(bb.files)
          }), !Kb) {
          var Bb;
          if ("" !== tb.current.trim() && tb.current !== Jb.current || (Jb.current = (0, Ob.L)(bb.manifest.name.trim(), Ob.s), eb(Jb.current)), "" === Mb.current.trim() || Mb.current === mb.current) mb.current = (0, Ob.L)((null !== (Bb = bb.manifest.description) && void 0 !== Bb ? Bb : "").trim(), Ob.l), Ib(mb.current);
          gb((bb => bb + 1))
        }
      })), fb = !nb && !jb.isLoggedIn() && !Gb.e.offlineMode, kb = ib.trim(), Tb = kb.length < Ob.v, cb = null !== Db && !1 !== (null === (Hb = Db.validation) || void 0 === Hb ? void 0 : Hb.ok) && !Eb && !Tb && !fb && !nb;
      return (0, lb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, lb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Kb ? rb("shaderPackListing:uploadIntro", {
            minutes: String(Ob.A / 6e4)
          }) : rb("shaderPackListing:publishIntro")
        }), (0, lb.jsx)(db, {}), fb && (0, lb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: rb("shaderPackListing:publishNeedsLogin")
        }), (0, lb.jsx)(wb.c, {
          busy: Eb,
          disabled: Eb || Pb,
          onFiles: bb => {
            xb(null), Fb(bb)
          }
        }), Db && (0, lb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, lb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Db.pack.manifest.name
          }), (0, lb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [rb("shaderPackListing:sizeValue", {
              kilobytes: String((0, Ab.P)(Db.sourceBytes))
            }), " \xb7", " ", rb("shaderPackListing:filesValue", {
              files: String(Db.pack.files.length)
            })]
          }), (0, lb.jsx)(Wb, {
            picked: Db
          })]
        }), !Kb && (0, lb.jsxs)(lb.Fragment, {
          children: [(0, lb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lb.jsx)("span", {
              children: rb("general:name")
            }), (0, lb.jsx)(Sb.b, {
              className: "ShaderPackPublishInput",
              defaultValue: ib,
              maxLength: Ob.s,
              onValueChange: eb
            }, zb), Db && Tb && (0, lb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: rb("shaderPackListing:nameTooShort", {
                min: String(Ob.v)
              })
            })]
          }), (0, lb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lb.jsx)("span", {
              children: rb("general:description")
            }), (0, lb.jsx)(Sb.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Nb,
              maxLength: Ob.l,
              onValueChange: Ib,
              useTextarea: !0
            }, zb)]
          })]
        }), yb && (0, lb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: yb
        }), (0, lb.jsxs)(Yb.m, {
          className: "ShaderPackPublishButton",
          disabled: !cb,
          loading: Pb,
          onClick: () => {
            !async function() {
              var bb;
              if (!Db) return;
              const {
                name: ub,
                description: hb
              } = null !== Kb && void 0 !== Kb ? Kb : {
                name: kb,
                description: Nb.trim()
              }, Bb = {
                packId: null !== (bb = null === Kb || void 0 === Kb ? void 0 : Kb.packId) && void 0 !== bb ? bb : null,
                name: ub,
                description: hb,
                apiVersion: Db.pack.manifest.apiVersion,
                files: (0, Ub.v)(Db.pack.files),
                keepCircleShadows: !0 === Db.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Bb)).byteLength > 1024 * Ob.J) Vb(rb("shaderPackListing:publishTooBig", {
                kilobytes: String(Ob.J)
              }));
              else {
                qb(!0), Vb(null);
                try {
                  Cb(await Zb.e.publishShaderPack(jb, Bb))
                } catch (Gb) {
                  console.error("Failed to publish the shader pack", Gb), Vb((0, Ab.w)(Gb, rb, "shaderPackListing:publishFailed"))
                } finally {
                  qb(!1)
                }
              }
            }()
          },
          children: [(0, lb.jsx)(Lb.e, {
            name: "upload"
          }), " ", rb(Kb ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Wb(bb) {
      let {
        picked: ub
      } = bb;
      const {
        t: hb
      } = (0, Xb.K)(), {
        validation: Bb
      } = ub;
      return null === Bb ? (0, lb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: hb("shaderPackListing:publishUnchecked")
      }) : Bb.ok ? (0, lb.jsxs)(lb.Fragment, {
        children: [(0, lb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, lb.jsx)(Lb.e, {
            name: "circle-check"
          }), " ", hb("shaderPackListing:publishReady")]
        }), Bb.offInStrict.length > 0 && (0, lb.jsxs)(lb.Fragment, {
          children: [(0, lb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, lb.jsx)(Lb.e, {
              name: "triangle-exclamation"
            }), " ", hb("shaderPack:offInStrict")]
          }), (0, lb.jsx)(Hb.b, {
            diagnostics: Bb.offInStrict,
            t: hb
          })]
        })]
      }) : (0, lb.jsxs)(lb.Fragment, {
        children: [(0, lb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, lb.jsx)(Lb.e, {
            name: "triangle-exclamation"
          }), " ", hb("shaderPackListing:publishHasErrors")]
        }), (0, lb.jsx)(Hb.b, {
          diagnostics: Bb.errors,
          more: Bb.moreErrors,
          t: hb
        })]
      })
    }
    const Cb = "\0";

    function db() {
      const {
        t: bb
      } = (0, Xb.K)(), [ub, hb] = bb("shaderPackListing:bloxdhubHelp", {
        site: Cb
      }).split(Cb);
      return (0, lb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ub, (0, lb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ob.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ob.d
        }), hb]
      })
    }
  },
  6311: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => ab
    });
    var Bb = hb(1415),
      Ob = hb(1357),
      Gb = hb(1095),
      Ub = hb(6316),
      Lb = hb(6292),
      Yb = hb(6279),
      Sb = hb(1007);

    function ab() {
      const {
        t: bb
      } = (0, Gb.K)(), ub = (0, Bb.useNavigatePreserveSearch)();
      return (0, Lb.b)(), (0, Sb.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Sb.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Sb.jsx)(Ob.d, {
            onClick: () => {
              ub(Yb.U)
            },
            children: bb("shaderPackListing:backToPacks")
          })
        }), (0, Sb.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: bb("shaderPackListing:publishTitle")
        }), (0, Sb.jsx)(Ub.ShaderPackPublishForm, {
          existing: null,
          onPublished: bb => {
            ub((0, Yb.Z)(bb.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6292: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      c: () => Zb,
      d: () => Hb,
      f: () => Xb
    });
    var Bb = hb(49),
      Ob = hb(6281),
      Gb = hb(1398),
      Ub = hb(6279),
      Lb = hb(6300),
      Yb = hb(1029);
    const Sb = "shaderPackListingView",
      ab = "shaderPackListingFilterOpen";

    function Hb() {
      var bb;
      const [ub, hb] = (0, Lb.d)(Sb, Ob.z[0]);
      return [null !== (bb = Ob.z.find((bb => bb === ub))) && void 0 !== bb ? bb : Ob.z[0], hb]
    }

    function wb() {
      (0, Bb.useEffect)((() => () => {
        window.location.pathname.startsWith(Ub.U) || (0, Ub.k)()
      }), [])
    }

    function Zb() {
      return (0, Lb.d)(ab, !1)
    }

    function Xb() {
      const {
        userContext: bb,
        isUserContextUpdating: ub
      } = (0, Yb.d)(), [hb, Ob] = (0, Bb.useState)(null), Ub = (0, Bb.useRef)(new Set);

      function Lb(bb, ub) {
        Ob((hb => {
          const Bb = new Set(hb);
          return ub ? Bb.add(bb) : Bb.delete(bb), Bb
        }))
      }
      return (0, Bb.useEffect)((() => {
        if (ub) return;
        let hb = !1;
        return Gb.e.getFavouriteShaderPacks(bb).then((bb => {
          hb || Ob(new Set(bb))
        })).catch((bb => {
          console.error("Failed to get favourite shader packs", bb), hb || Ob(new Set)
        })), () => {
          hb = !0
        }
      }), [bb, ub]), {
        isFavourite: bb => null === hb ? null : hb.has(bb),
        toggle: function(ub) {
          if (null === hb || Ub.current.has(ub)) return;
          Ub.current.add(ub);
          const Bb = !hb.has(ub);
          Lb(ub, Bb), (Bb ? Gb.e.favouriteShaderPack(bb, ub) : Gb.e.unfavouriteShaderPack(bb, ub)).catch((bb => {
            console.error("Failed to change a favourite shader pack", bb), Lb(ub, !Bb)
          })).finally((() => {
            Ub.current.delete(ub)
          }))
        }
      }
    }
  },
  6279: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => Xb,
      D: () => Ab,
      F: () => xb,
      I: () => ab,
      L: () => gb,
      M: () => pb,
      P: () => Mb,
      R: () => Nb,
      U: () => Ub,
      V: () => sb,
      Z: () => Yb,
      _: () => Lb,
      cb: () => Jb,
      db: () => eb,
      e: () => lb,
      gb: () => Kb,
      i: () => nb,
      j: () => ob,
      jb: () => zb,
      k: () => wb,
      m: () => Hb,
      q: () => ib,
      u: () => Zb,
      v: () => vb,
      w: () => mb
    });
    var Bb = hb(6281),
      Ob = hb(148),
      Gb = hb(4322);
    const Ub = "/shader-packs",
      Lb = `${Ub}/publish`;

    function Yb(bb) {
      return `${Ub}/${encodeURIComponent(bb)}`
    }
    let Sb = null;

    function ab(bb) {
      Sb = bb
    }

    function Hb() {
      return Sb
    }

    function wb() {
      Sb = null
    }

    function Zb(bb) {
      return bb.playerHasRank("developer") || bb.playerHasRank("admin")
    }
    const Xb = ["terrain", "water", "models", "sunShadows", "strict"],
      pb = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function ob(bb, ub) {
      return bb.withFeatures.includes(ub) ? "with" : bb.withoutFeatures.includes(ub) ? "without" : null
    }

    function Ab(bb) {
      return null === bb ? "with" : "with" === bb ? "without" : null
    }

    function lb(bb) {
      return "with" === bb ? "only" : null === bb ? "include" : void 0
    }

    function Kb(bb, ub) {
      const hb = ob(bb, ub),
        Bb = bb => bb.filter((bb => bb !== ub));
      return {
        withFeatures: null === hb ? [...bb.withFeatures, ub] : Bb(bb.withFeatures),
        withoutFeatures: "with" === hb ? [...bb.withoutFeatures, ub] : Bb(bb.withoutFeatures)
      }
    }
    const Wb = "section",
      Cb = "sort",
      db = "filters",
      rb = "q",
      jb = "banned",
      nb = "popular",
      Db = "strict";

    function xb(bb) {
      var ub, hb, Ob;
      const Ub = bb.get(Wb),
        Lb = (null !== (ub = bb.get(db)) && void 0 !== ub ? ub : Db).split(","),
        Yb = bb.get(jb);
      return {
        section: "favourites" === Ub || "mine" === Ub ? Ub : "explore",
        sort: null !== (hb = Bb.q.find((ub => ub === bb.get(Cb)))) && void 0 !== hb ? hb : nb,
        withFeatures: Xb.filter((bb => Lb.includes(bb) && !Lb.includes(`-${bb}`))),
        withoutFeatures: Xb.filter((bb => Lb.includes(`-${bb}`))),
        searchQuery: (null === (Ob = bb.get(rb)) || void 0 === Ob ? void 0 : Ob.slice(0, Bb.C)) || null,
        pageNumber: (0, Gb.d)(bb.get(Gb.c)),
        banned: "only" === Yb ? "with" : "include" === Yb ? null : "without"
      }
    }

    function zb(bb, ub) {
      var hb;
      const Bb = tb(ub);
      (0, Gb.g)(bb, Wb, "explore" === ub.section ? null : ub.section), (0, Gb.g)(bb, Cb, ub.sort === nb ? null : ub.sort), (0, Gb.g)(bb, db, Bb === Db ? null : Bb), (0, Gb.g)(bb, rb, ub.searchQuery), (0, Gb.g)(bb, jb, null !== (hb = lb(ub.banned)) && void 0 !== hb ? hb : null), (0, Gb.h)(bb, ub.pageNumber)
    }

    function gb(bb) {
      const ub = new URLSearchParams;
      return zb(ub, {
        section: "explore",
        sort: nb,
        withFeatures: "strict" === bb ? [bb] : [bb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Ub}?${ub.toString()}`
    }

    function ib(bb) {
      return tb(bb) === Db
    }

    function vb(bb) {
      return null !== bb.searchQuery || "with" === bb.banned || tb(bb) !== Db
    }

    function tb(bb) {
      return Xb.flatMap((ub => {
        const hb = ob(bb, ub);
        return "with" === hb ? [ub] : "without" === hb ? [`-${ub}`] : []
      })).join(",")
    }
    const Jb = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      eb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Nb(bb) {
      return Math.round(100 * Math.max(0, 1 - 1 / bb))
    }

    function sb(bb, ub, hb, Ob) {
      const Gb = [];
      bb.isBanned && Gb.push({
        tone: "warning",
        text: Ob("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Ub
      } = bb;
      if (null === bb.brokenError || Ub && !Ub.error || Gb.push({
          tone: "warning",
          text: Ob("shaderPackListing:ownerBroken"),
          detail: bb.brokenError
        }), null !== Ub && void 0 !== Ub && Ub.error) Gb.push({
        tone: "warning",
        text: Ob(ub ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Bb.j)(Ub.error) ? null : Ub.error
      });
      else if (Ub) {
        const bb = null === Ub.renderNotBefore ? 0 : Ub.renderNotBefore - hb,
          Bb = String(Math.ceil(bb / 6e4)),
          Lb = Ob(ub ? bb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : bb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Bb
          });
        Gb.push({
          tone: "info",
          text: Lb,
          detail: null
        })
      }
      return bb.listed || Gb.push({
        tone: "info",
        text: Ob("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Gb
    }

    function Mb(bb) {
      return Math.max(1, Math.round(bb / 1024))
    }

    function mb(bb, ub, hb) {
      return bb instanceof Ob.b && bb.errorMessageForUser ? bb.errorMessageForUser : ub(hb)
    }
  },
  6300: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = hb(49),
      Ob = hb(29);

    function Gb(bb, ub) {
      var hb;
      const [Gb, Ub] = (0, Bb.useState)(null !== (hb = Ob.j.getItem(bb)) && void 0 !== hb ? hb : ub);
      return [Gb, ub => {
        Ob.j.setItem(bb, ub), Ub(ub)
      }]
    }
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  },
  6281: (bb, ub, hb) => {
    hb.d(ub, {
      A: () => wb,
      C: () => ab,
      G: () => Kb,
      J: () => Hb,
      L: () => Sb,
      d: () => Zb,
      f: () => pb,
      g: () => Xb,
      j: () => lb,
      k: () => Cb,
      l: () => Yb,
      o: () => Ob,
      p: () => Wb,
      q: () => Gb,
      s: () => Lb,
      v: () => Ub,
      z: () => Bb
    });
    const Bb = ["forest", "desert", "water", "night", "cave"];
    const Ob = {
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
      Gb = ["popular", "updated", "newest"],
      Ub = 3,
      Lb = 32,
      Yb = 300;

    function Sb(bb, ub) {
      return bb.slice(0, ub).replace(/[\uD800-\uDBFF]$/, "")
    }
    const ab = 64,
      Hb = 512,
      wb = 18e5;
    const Zb = "Bloxdhub",
      Xb = "https://bloxdhub.com/shaders";

    function pb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const ob = "Screenshot generation failed.",
      Ab = "Its screenshots couldn't be generated:";

    function lb(bb) {
      var ub;
      return bb === ob || null !== (ub = null === bb || void 0 === bb ? void 0 : bb.startsWith(Ab)) && void 0 !== ub && ub
    }

    function Kb(bb, ub) {
      return `shaderPacks/${bb}/${ub}.json`
    }

    function Wb(bb, ub, hb, Bb) {
      return null === ub.renderId ? Cb(bb, ub.baselineVersion, hb, Bb) : `${bb}/${function(bb,ub,hb,Bb){return`shaderPacks/${bb}/${ub}/${hb}-${Bb}.webp`}(ub.packId,ub.renderId,hb,Bb)}`
    }

    function Cb(bb, ub, hb, Bb) {
      return `${bb}/${function(bb,ub,hb){return`shaderPacks/baseline/${bb}/${ub}-${hb}.webp`}(ub,hb,Bb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);