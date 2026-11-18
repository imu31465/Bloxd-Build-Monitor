export const id = 97;
export const ids = [97, 116];
export const modules = {
  4175: (yb, bb, Wy) => {
    var Uy = Wy(4183);

    function hy() {}

    function fy() {}
    fy.resetWarningCache = hy, yb.exports = function() {
      function yb(yb, bb, Wy, hy, fy, Zy) {
        if (Zy !== Uy) {
          var cb = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw cb.name = "Invariant Violation", cb
        }
      }

      function bb() {
        return yb
      }
      yb.isRequired = yb;
      var Wy = {
        array: yb,
        bigint: yb,
        bool: yb,
        func: yb,
        number: yb,
        object: yb,
        string: yb,
        symbol: yb,
        any: yb,
        arrayOf: bb,
        element: yb,
        elementType: yb,
        instanceOf: bb,
        node: yb,
        objectOf: bb,
        oneOf: bb,
        oneOfType: bb,
        shape: bb,
        exact: bb,
        checkPropTypes: fy,
        resetWarningCache: hy
      };
      return Wy.PropTypes = Wy, Wy
    }
  },
  4172: (yb, bb, Wy) => {
    yb.exports = Wy(4175)()
  },
  4183: yb => {
    yb.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5833: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ShaderPackPublishForm: () => Cy
    });
    var Uy = Wy(55),
      hy = Wy(5801),
      fy = Wy(175),
      Zy = Wy(5835),
      cb = Wy(910),
      Py = Wy(1273),
      oy = Wy(1486),
      By = Wy(980),
      Ky = Wy(5844),
      ey = Wy(5860),
      qb = Wy(1339),
      sy = Wy(1042),
      Sy = Wy(5867),
      Ey = Wy(5911),
      ly = Wy(5799),
      mb = Wy(952);

    function Cy(yb) {
      var bb, Wy, Ky;
      let {
        existing: Cy,
        onPublished: Vy
      } = yb;
      const {
        t: gb
      } = (0, sy.D)(), {
        userContext: Gy,
        isUserContextUpdating: Oy
      } = (0, By.c)(), [Ry, vb] = (0, Uy.useState)(null), [ib, My] = (0, Uy.useState)(0), [Yy, Xy] = (0, Uy.useState)(null !== (bb = null === Cy || void 0 === Cy ? void 0 : Cy.name) && void 0 !== bb ? bb : ""), ny = (0, Uy.useRef)(Yy), uy = (0, Uy.useRef)(""), rb = yb => {
        ny.current = yb, Xy(yb)
      }, [Hy, ab] = (0, Uy.useState)(null !== (Wy = null === Cy || void 0 === Cy ? void 0 : Cy.description) && void 0 !== Wy ? Wy : ""), Fy = (0, Uy.useRef)(Hy), py = (0, Uy.useRef)(""), Ly = yb => {
        Fy.current = yb, ab(yb)
      }, [Qy, jb] = (0, Uy.useState)(!1), {
        loading: Dy,
        error: tb,
        setError: wy,
        onFiles: kb
      } = (0, ey.f)((async yb => {
        const bb = await (0, Sy.loadPageShaderPackCompiler)();
        if (!bb) return void wy(gb("shaderPack:compilerUnavailable"));
        const Wy = await (0, Ey.e)(bb, yb.files);
        if (vb({
            pack: yb,
            validation: Wy,
            sourceBytes: (0, Zy.x)(yb.files)
          }), !Cy) {
          var Uy;
          if ("" !== ny.current.trim() && ny.current !== uy.current || (uy.current = (0, hy.Y)(yb.manifest.name.trim(), hy.H), rb(uy.current)), "" === Fy.current.trim() || Fy.current === py.current) py.current = (0, hy.Y)((null !== (Uy = yb.manifest.description) && void 0 !== Uy ? Uy : "").trim(), hy.r), Ly(py.current);
          My((yb => yb + 1))
        }
      })), Ny = !Oy && !Gy.isLoggedIn() && !fy.e.offlineMode, zb = Yy.trim(), Iy = zb.length < hy.J, xb = null !== Ry && !1 !== (null === (Ky = Ry.validation) || void 0 === Ky ? void 0 : Ky.ok) && !Dy && !Iy && !Ny && !Oy;
      return (0, mb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, mb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Cy ? gb("shaderPackListing:uploadIntro", {
            minutes: String(hy.R / 6e4)
          }) : gb("shaderPackListing:publishIntro")
        }), (0, mb.jsx)(Jy, {}), Ny && (0, mb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: gb("shaderPackListing:publishNeedsLogin")
        }), (0, mb.jsx)(ey.d, {
          busy: Dy,
          disabled: Dy || Qy,
          onFiles: yb => {
            vb(null), kb(yb)
          }
        }), Ry && (0, mb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, mb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Ry.pack.manifest.name
          }), (0, mb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [gb("shaderPackListing:sizeValue", {
              kilobytes: String((0, ly.J)(Ry.sourceBytes))
            }), " \xb7", " ", gb("shaderPackListing:filesValue", {
              files: String(Ry.pack.files.length)
            })]
          }), (0, mb.jsx)(Ty, {
            picked: Ry
          })]
        }), !Cy && (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, mb.jsx)("span", {
              children: gb("general:name")
            }), (0, mb.jsx)(oy.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Yy,
              maxLength: hy.H,
              onValueChange: rb
            }, ib), Ry && Iy && (0, mb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: gb("shaderPackListing:nameTooShort", {
                min: String(hy.J)
              })
            })]
          }), (0, mb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, mb.jsx)("span", {
              children: gb("general:description")
            }), (0, mb.jsx)(oy.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Hy,
              maxLength: hy.r,
              onValueChange: Ly,
              useTextarea: !0
            }, ib)]
          })]
        }), tb && (0, mb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: tb
        }), (0, mb.jsxs)(Py.i, {
          className: "ShaderPackPublishButton",
          disabled: !xb,
          loading: Qy,
          onClick: () => {
            !async function() {
              var yb;
              if (!Ry) return;
              const {
                name: bb,
                description: Wy
              } = null !== Cy && void 0 !== Cy ? Cy : {
                name: zb,
                description: Hy.trim()
              }, Uy = {
                packId: null !== (yb = null === Cy || void 0 === Cy ? void 0 : Cy.packId) && void 0 !== yb ? yb : null,
                name: bb,
                description: Wy,
                apiVersion: Ry.pack.manifest.apiVersion,
                files: (0, Zy.u)(Ry.pack.files),
                keepCircleShadows: !0 === Ry.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Uy)).byteLength > 1024 * hy.V) wy(gb("shaderPackListing:publishTooBig", {
                kilobytes: String(hy.V)
              }));
              else {
                jb(!0), wy(null);
                try {
                  Vy(await qb.c.publishShaderPack(Gy, Uy))
                } catch (fy) {
                  console.error("Failed to publish the shader pack", fy), wy((0, ly.t)(fy, gb, "shaderPackListing:publishFailed"))
                } finally {
                  jb(!1)
                }
              }
            }()
          },
          children: [(0, mb.jsx)(cb.e, {
            name: "upload"
          }), " ", gb(Cy ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Ty(yb) {
      let {
        picked: bb
      } = yb;
      const {
        t: Wy
      } = (0, sy.D)(), {
        validation: Uy
      } = bb;
      return null === Uy ? (0, mb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Wy("shaderPackListing:publishUnchecked")
      }) : Uy.ok ? (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, mb.jsx)(cb.e, {
            name: "circle-check"
          }), " ", Wy("shaderPackListing:publishReady")]
        }), Uy.offInStrict.length > 0 && (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, mb.jsx)(cb.e, {
              name: "triangle-exclamation"
            }), " ", Wy("shaderPack:offInStrict")]
          }), (0, mb.jsx)(Ky.d, {
            diagnostics: Uy.offInStrict,
            t: Wy
          })]
        })]
      }) : (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, mb.jsx)(cb.e, {
            name: "triangle-exclamation"
          }), " ", Wy("shaderPackListing:publishHasErrors")]
        }), (0, mb.jsx)(Ky.d, {
          diagnostics: Uy.errors,
          more: Uy.moreErrors,
          t: Wy
        })]
      })
    }
    const Vy = "\0";

    function Jy() {
      const {
        t: yb
      } = (0, sy.D)(), [bb, Wy] = yb("shaderPackListing:bloxdhubHelp", {
        site: Vy
      }).split(Vy);
      return (0, mb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [bb, (0, mb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: hy.l,
          target: "_blank",
          rel: "noopener noreferrer",
          children: hy.e
        }), Wy]
      })
    }
  },
  5826: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => By
    });
    var Uy = Wy(1356),
      hy = Wy(1273),
      fy = Wy(1042),
      Zy = Wy(5833),
      cb = Wy(5815),
      Py = Wy(5799),
      oy = Wy(952);

    function By() {
      const {
        t: yb
      } = (0, fy.D)(), bb = (0, Uy.useNavigatePreserveSearch)();
      return (0, cb.e)(), (0, oy.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, oy.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, oy.jsx)(hy.d, {
            onClick: () => {
              bb(Py.P)
            },
            children: yb("shaderPackListing:backToPacks")
          })
        }), (0, oy.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: yb("shaderPackListing:publishTitle")
        }), (0, oy.jsx)(Zy.ShaderPackPublishForm, {
          existing: null,
          onPublished: yb => {
            bb((0, Py.U)(yb.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  5815: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey,
      h: () => qb,
      k: () => Ky,
      o: () => sy
    });
    var Uy = Wy(55),
      hy = Wy(5801),
      fy = Wy(1339),
      Zy = Wy(5799),
      cb = Wy(5819),
      Py = Wy(980);
    const oy = "shaderPackListingView",
      By = "shaderPackListingFilterOpen";

    function Ky() {
      var yb;
      const [bb, Wy] = (0, cb.d)(oy, hy.N[0]);
      return [null !== (yb = hy.N.find((yb => yb === bb))) && void 0 !== yb ? yb : hy.N[0], Wy]
    }

    function ey() {
      (0, Uy.useEffect)((() => () => {
        window.location.pathname.startsWith(Zy.P) || (0, Zy.k)()
      }), [])
    }

    function qb() {
      return (0, cb.d)(By, !1)
    }

    function sy() {
      const {
        userContext: yb,
        isUserContextUpdating: bb
      } = (0, Py.c)(), [Wy, hy] = (0, Uy.useState)(null), Zy = (0, Uy.useRef)(new Set);

      function cb(yb, bb) {
        hy((Wy => {
          const Uy = new Set(Wy);
          return bb ? Uy.add(yb) : Uy.delete(yb), Uy
        }))
      }
      return (0, Uy.useEffect)((() => {
        if (bb) return;
        let Wy = !1;
        return fy.c.getFavouriteShaderPacks(yb).then((yb => {
          Wy || hy(new Set(yb))
        })).catch((yb => {
          console.error("Failed to get favourite shader packs", yb), Wy || hy(new Set)
        })), () => {
          Wy = !0
        }
      }), [yb, bb]), {
        isFavourite: yb => null === Wy ? null : Wy.has(yb),
        toggle: function(bb) {
          if (null === Wy || Zy.current.has(bb)) return;
          Zy.current.add(bb);
          const Uy = !Wy.has(bb);
          cb(bb, Uy), (Uy ? fy.c.favouriteShaderPack(yb, bb) : fy.c.unfavouriteShaderPack(yb, bb)).catch((yb => {
            console.error("Failed to change a favourite shader pack", yb), cb(bb, !Uy)
          })).finally((() => {
            Zy.current.delete(bb)
          }))
        }
      }
    }
  },
  5799: (yb, bb, Wy) => {
    Wy.d(bb, {
      $: () => rb,
      D: () => By,
      F: () => My,
      I: () => Sy,
      J: () => Fy,
      L: () => Hy,
      P: () => Zy,
      S: () => ab,
      U: () => Py,
      V: () => cb,
      Z: () => uy,
      ab: () => Cy,
      bb: () => ib,
      d: () => mb,
      g: () => Oy,
      j: () => Ey,
      k: () => ey,
      m: () => Ky,
      n: () => Yy,
      o: () => qb,
      p: () => Xy,
      t: () => py,
      u: () => sy,
      v: () => ly,
      z: () => vb
    });
    var Uy = Wy(5801),
      hy = Wy(143),
      fy = Wy(3758);
    const Zy = "/shader-packs",
      cb = `${Zy}/publish`;

    function Py(yb) {
      return `${Zy}/${encodeURIComponent(yb)}`
    }
    let oy = null;

    function By(yb) {
      oy = yb
    }

    function Ky() {
      return oy
    }

    function ey() {
      oy = null
    }

    function qb(yb) {
      return yb.playerHasRank("developer") || yb.playerHasRank("admin")
    }
    const sy = ["terrain", "water", "models", "sunShadows", "strict"],
      Sy = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Ey(yb, bb) {
      return yb.withFeatures.includes(bb) ? "with" : yb.withoutFeatures.includes(bb) ? "without" : null
    }

    function ly(yb) {
      return null === yb ? "with" : "with" === yb ? "without" : null
    }

    function mb(yb) {
      return "with" === yb ? "only" : null === yb ? "include" : void 0
    }

    function Cy(yb, bb) {
      const Wy = Ey(yb, bb),
        Uy = yb => yb.filter((yb => yb !== bb));
      return {
        withFeatures: null === Wy ? [...yb.withFeatures, bb] : Uy(yb.withFeatures),
        withoutFeatures: "with" === Wy ? [...yb.withoutFeatures, bb] : Uy(yb.withoutFeatures)
      }
    }
    const Ty = "section",
      Vy = "sort",
      Jy = "filters",
      gb = "q",
      Gy = "banned",
      Oy = "popular",
      Ry = "strict";

    function vb(yb) {
      var bb, Wy, hy;
      const Zy = yb.get(Ty),
        cb = (null !== (bb = yb.get(Jy)) && void 0 !== bb ? bb : Ry).split(","),
        Py = yb.get(Gy);
      return {
        section: "favourites" === Zy || "mine" === Zy ? Zy : "explore",
        sort: null !== (Wy = Uy.D.find((bb => bb === yb.get(Vy)))) && void 0 !== Wy ? Wy : Oy,
        withFeatures: sy.filter((yb => cb.includes(yb) && !cb.includes(`-${yb}`))),
        withoutFeatures: sy.filter((yb => cb.includes(`-${yb}`))),
        searchQuery: (null === (hy = yb.get(gb)) || void 0 === hy ? void 0 : hy.slice(0, Uy.S)) || null,
        pageNumber: (0, fy.i)(yb.get(fy.e)),
        banned: "only" === Py ? "with" : "include" === Py ? null : "without"
      }
    }

    function ib(yb, bb) {
      var Wy;
      const Uy = ny(bb);
      (0, fy.k)(yb, Ty, "explore" === bb.section ? null : bb.section), (0, fy.k)(yb, Vy, bb.sort === Oy ? null : bb.sort), (0, fy.k)(yb, Jy, Uy === Ry ? null : Uy), (0, fy.k)(yb, gb, bb.searchQuery), (0, fy.k)(yb, Gy, null !== (Wy = mb(bb.banned)) && void 0 !== Wy ? Wy : null), (0, fy.n)(yb, bb.pageNumber)
    }

    function My(yb) {
      const bb = new URLSearchParams;
      return ib(bb, {
        section: "explore",
        sort: Oy,
        withFeatures: "strict" === yb ? [yb] : [yb, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Zy}?${bb.toString()}`
    }

    function Yy(yb) {
      return ny(yb) === Ry
    }

    function Xy(yb) {
      return null !== yb.searchQuery || "with" === yb.banned || ny(yb) !== Ry
    }

    function ny(yb) {
      return sy.flatMap((bb => {
        const Wy = Ey(yb, bb);
        return "with" === Wy ? [bb] : "without" === Wy ? [`-${bb}`] : []
      })).join(",")
    }
    const uy = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      rb = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Hy(yb) {
      return Math.round(100 * Math.max(0, 1 - 1 / yb))
    }

    function ab(yb, bb, Wy, hy) {
      const fy = [];
      yb.isBanned && fy.push({
        tone: "warning",
        text: hy("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Zy
      } = yb;
      if (null === yb.brokenError || Zy && !Zy.error || fy.push({
          tone: "warning",
          text: hy("shaderPackListing:ownerBroken"),
          detail: yb.brokenError
        }), null !== Zy && void 0 !== Zy && Zy.error) fy.push({
        tone: "warning",
        text: hy(bb ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Uy.m)(Zy.error) ? null : Zy.error
      });
      else if (Zy) {
        const yb = null === Zy.renderNotBefore ? 0 : Zy.renderNotBefore - Wy,
          Uy = String(Math.ceil(yb / 6e4)),
          cb = hy(bb ? yb > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : yb > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Uy
          });
        fy.push({
          tone: "info",
          text: cb,
          detail: null
        })
      }
      return yb.listed || fy.push({
        tone: "info",
        text: hy("shaderPackListing:ownerUnlisted"),
        detail: null
      }), fy
    }

    function Fy(yb) {
      return Math.max(1, Math.round(yb / 1024))
    }

    function py(yb, bb, Wy) {
      return yb instanceof hy.c && yb.errorMessageForUser ? yb.errorMessageForUser : bb(Wy)
    }
  },
  5819: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(55),
      hy = Wy(33);

    function fy(yb, bb) {
      var Wy;
      const [fy, Zy] = (0, Uy.useState)(null !== (Wy = hy.e.getItem(yb)) && void 0 !== Wy ? Wy : bb);
      return [fy, bb => {
        hy.e.setItem(yb, bb), Zy(bb)
      }]
    }
  },
  5923: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy
    });
    var Uy = Wy(33);
    const hy = "shaderPack";
    async function fy() {
      var yb;
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (yb = await Uy.d.getItem(hy, bb)) && void 0 !== yb ? yb : null
    }
  },
  5801: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => fy,
      H: () => cb,
      J: () => Zy,
      N: () => Uy,
      R: () => ey,
      S: () => By,
      U: () => Cy,
      V: () => Ky,
      Y: () => oy,
      e: () => qb,
      h: () => Sy,
      l: () => sy,
      m: () => mb,
      p: () => Vy,
      r: () => Py,
      v: () => hy,
      z: () => Ty
    });
    const Uy = ["forest", "desert", "water", "night", "cave"];
    const hy = {
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
      fy = ["popular", "updated", "newest"],
      Zy = 3,
      cb = 32,
      Py = 300;

    function oy(yb, bb) {
      return yb.slice(0, bb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const By = 64,
      Ky = 512,
      ey = 18e5;
    const qb = "Bloxdhub",
      sy = "https://bloxdhub.com/shaders";

    function Sy(yb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(yb)}`
    }
    const Ey = "Screenshot generation failed.",
      ly = "Its screenshots couldn't be generated:";

    function mb(yb) {
      var bb;
      return yb === Ey || null !== (bb = null === yb || void 0 === yb ? void 0 : yb.startsWith(ly)) && void 0 !== bb && bb
    }

    function Cy(yb, bb) {
      return `shaderPacks/${yb}/${bb}.json`
    }

    function Ty(yb, bb, Wy, Uy) {
      return null === bb.renderId ? Vy(yb, bb.baselineVersion, Wy, Uy) : `${yb}/${function(yb,bb,Wy,Uy){return`shaderPacks/${yb}/${bb}/${Wy}-${Uy}.webp`}(bb.packId,bb.renderId,Wy,Uy)}`
    }

    function Vy(yb, bb, Wy, Uy) {
      return `${yb}/${function(yb,bb,Wy){return`shaderPacks/baseline/${yb}/${bb}-${Wy}.webp`}(bb,Wy,Uy)}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);