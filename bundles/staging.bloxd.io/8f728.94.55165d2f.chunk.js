export const id = 94;
export const ids = [94, 113, 125];
export const modules = {
  5558: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ShaderPackPublishForm: () => zB
    });
    var Vc = nc(73),
      Ic = nc(5523),
      rB = nc(181),
      uc = nc(5561),
      sc = nc(926),
      Mc = nc(1255),
      Pc = nc(1485),
      qB = nc(985),
      Oc = nc(5564),
      Tc = nc(5577),
      fc = nc(1314),
      mB = nc(1051),
      ec = nc(5583),
      tB = nc(5618),
      Sc = nc(5516),
      yB = nc(957);

    function zB(cB) {
      var Bc, nc, Oc;
      let {
        existing: zB,
        onPublished: hc
      } = cB;
      const {
        t: lc
      } = (0, mB.x)(), {
        userContext: Yc,
        isUserContextUpdating: Lc
      } = (0, qB.c)(), [gB, Uc] = (0, Vc.useState)(null), [bB, Zc] = (0, Vc.useState)(0), [Qc, Cc] = (0, Vc.useState)(null !== (Bc = null === zB || void 0 === zB ? void 0 : zB.name) && void 0 !== Bc ? Bc : ""), vB = (0, Vc.useRef)(Qc), Dc = (0, Vc.useRef)(""), Nc = cB => {
        vB.current = cB, Cc(cB)
      }, [Ec, oc] = (0, Vc.useState)(null !== (nc = null === zB || void 0 === zB ? void 0 : zB.description) && void 0 !== nc ? nc : ""), Wc = (0, Vc.useRef)(Ec), wc = (0, Vc.useRef)(""), kB = cB => {
        Wc.current = cB, oc(cB)
      }, [Xc, Hc] = (0, Vc.useState)(!1), {
        loading: Fc,
        error: Jc,
        setError: jB,
        onFiles: Rc
      } = (0, Tc.g)((async cB => {
        const Bc = await (0, ec.loadPageShaderPackCompiler)();
        if (!Bc) return void jB(lc("shaderPack:compilerUnavailable"));
        const nc = await (0, tB.h)(Bc, cB.files);
        if (Uc({
            pack: cB,
            validation: nc,
            sourceBytes: (0, uc.x)(cB.files)
          }), !zB) {
          var Vc;
          if ("" !== vB.current.trim() && vB.current !== Dc.current || (Dc.current = (0, Ic.T)(cB.manifest.name.trim(), Ic.z), Nc(Dc.current)), "" === Wc.current.trim() || Wc.current === wc.current) wc.current = (0, Ic.T)((null !== (Vc = cB.manifest.description) && void 0 !== Vc ? Vc : "").trim(), Ic.p), kB(wc.current);
          Zc((cB => cB + 1))
        }
      })), iB = !Lc && !Yc.isLoggedIn() && !rB.b.offlineMode, Kc = Qc.trim(), xB = Kc.length < Ic.C, dc = null !== gB && !1 !== (null === (Oc = gB.validation) || void 0 === Oc ? void 0 : Oc.ok) && !Fc && !xB && !iB && !Lc;
      return (0, yB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, yB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: zB ? lc("shaderPackListing:uploadIntro", {
            minutes: String(Ic.I / 6e4)
          }) : lc("shaderPackListing:publishIntro")
        }), (0, yB.jsx)(aB, {}), iB && (0, yB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: lc("shaderPackListing:publishNeedsLogin")
        }), (0, yB.jsx)(Tc.c, {
          busy: Fc,
          disabled: Fc || Xc,
          onFiles: cB => {
            Uc(null), Rc(cB)
          }
        }), gB && (0, yB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, yB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: gB.pack.manifest.name
          }), (0, yB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [lc("shaderPackListing:sizeValue", {
              kilobytes: String((0, Sc.R)(gB.sourceBytes))
            }), " \xb7", " ", lc("shaderPackListing:filesValue", {
              files: String(gB.pack.files.length)
            })]
          }), (0, yB.jsx)(pc, {
            picked: gB
          })]
        }), !zB && (0, yB.jsxs)(yB.Fragment, {
          children: [(0, yB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, yB.jsx)("span", {
              children: lc("general:name")
            }), (0, yB.jsx)(Pc.e, {
              className: "ShaderPackPublishInput",
              defaultValue: Qc,
              maxLength: Ic.z,
              onValueChange: Nc
            }, bB), gB && xB && (0, yB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: lc("shaderPackListing:nameTooShort", {
                min: String(Ic.C)
              })
            })]
          }), (0, yB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, yB.jsx)("span", {
              children: lc("general:description")
            }), (0, yB.jsx)(Pc.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Ec,
              maxLength: Ic.p,
              onValueChange: kB,
              useTextarea: !0
            }, bB)]
          })]
        }), Jc && (0, yB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Jc
        }), (0, yB.jsxs)(Mc.n, {
          className: "ShaderPackPublishButton",
          disabled: !dc,
          loading: Xc,
          onClick: () => {
            !async function() {
              var cB;
              if (!gB) return;
              const {
                name: Bc,
                description: nc
              } = null !== zB && void 0 !== zB ? zB : {
                name: Kc,
                description: Ec.trim()
              }, Vc = {
                packId: null !== (cB = null === zB || void 0 === zB ? void 0 : zB.packId) && void 0 !== cB ? cB : null,
                name: Bc,
                description: nc,
                apiVersion: gB.pack.manifest.apiVersion,
                files: (0, uc.u)(gB.pack.files),
                keepCircleShadows: !0 === gB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Vc)).byteLength > 1024 * Ic.P) jB(lc("shaderPackListing:publishTooBig", {
                kilobytes: String(Ic.P)
              }));
              else {
                Hc(!0), jB(null);
                try {
                  hc(await fc.e.publishShaderPack(Yc, Vc))
                } catch (rB) {
                  console.error("Failed to publish the shader pack", rB), jB((0, Sc.z)(rB, lc, "shaderPackListing:publishFailed"))
                } finally {
                  Hc(!1)
                }
              }
            }()
          },
          children: [(0, yB.jsx)(sc.e, {
            name: "upload"
          }), " ", lc(zB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function pc(cB) {
      let {
        picked: Bc
      } = cB;
      const {
        t: nc
      } = (0, mB.x)(), {
        validation: Vc
      } = Bc;
      return null === Vc ? (0, yB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: nc("shaderPackListing:publishUnchecked")
      }) : Vc.ok ? (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, yB.jsx)(sc.e, {
            name: "circle-check"
          }), " ", nc("shaderPackListing:publishReady")]
        }), Vc.offInStrict.length > 0 && (0, yB.jsxs)(yB.Fragment, {
          children: [(0, yB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, yB.jsx)(sc.e, {
              name: "triangle-exclamation"
            }), " ", nc("shaderPack:offInStrict")]
          }), (0, yB.jsx)(Oc.b, {
            diagnostics: Vc.offInStrict,
            t: nc
          })]
        })]
      }) : (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, yB.jsx)(sc.e, {
            name: "triangle-exclamation"
          }), " ", nc("shaderPackListing:publishHasErrors")]
        }), (0, yB.jsx)(Oc.b, {
          diagnostics: Vc.errors,
          more: Vc.moreErrors,
          t: nc
        })]
      })
    }
    const hc = "\0";

    function aB() {
      const {
        t: cB
      } = (0, mB.x)(), [Bc, nc] = cB("shaderPackListing:bloxdhubHelp", {
        site: hc
      }).split(hc);
      return (0, yB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Bc, (0, yB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ic.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ic.c
        }), nc]
      })
    }
  },
  5551: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => qB
    });
    var Vc = nc(1330),
      Ic = nc(1255),
      rB = nc(1051),
      uc = nc(5558),
      sc = nc(5533),
      Mc = nc(5516),
      Pc = nc(957);

    function qB() {
      const {
        t: cB
      } = (0, rB.x)(), Bc = (0, Vc.useNavigatePreserveSearch)();
      return (0, sc.d)(), (0, Pc.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Pc.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Pc.jsx)(Ic.c, {
            onClick: () => {
              Bc(Mc.Z)
            },
            children: cB("shaderPackListing:backToPacks")
          })
        }), (0, Pc.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: cB("shaderPackListing:publishTitle")
        }), (0, Pc.jsx)(uc.ShaderPackPublishForm, {
          existing: null,
          onPublished: cB => {
            Bc((0, Mc.db)(cB.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  5533: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      g: () => fc,
      k: () => Oc,
      n: () => mB
    });
    var Vc = nc(73),
      Ic = nc(5523),
      rB = nc(1314),
      uc = nc(5516),
      sc = nc(5542),
      Mc = nc(985);
    const Pc = "shaderPackListingView",
      qB = "shaderPackListingFilterOpen";

    function Oc() {
      var cB;
      const [Bc, nc] = (0, sc.c)(Pc, Ic.E[0]);
      return [null !== (cB = Ic.E.find((cB => cB === Bc))) && void 0 !== cB ? cB : Ic.E[0], nc]
    }

    function Tc() {
      (0, Vc.useEffect)((() => () => {
        window.location.pathname.startsWith(uc.Z) || (0, uc.n)()
      }), [])
    }

    function fc() {
      return (0, sc.c)(qB, !1)
    }

    function mB() {
      const {
        userContext: cB,
        isUserContextUpdating: Bc
      } = (0, Mc.c)(), [nc, Ic] = (0, Vc.useState)(null), uc = (0, Vc.useRef)(new Set);

      function sc(cB, Bc) {
        Ic((nc => {
          const Vc = new Set(nc);
          return Bc ? Vc.add(cB) : Vc.delete(cB), Vc
        }))
      }
      return (0, Vc.useEffect)((() => {
        if (Bc) return;
        let nc = !1;
        return rB.e.getFavouriteShaderPacks(cB).then((cB => {
          nc || Ic(new Set(cB))
        })).catch((cB => {
          console.error("Failed to get favourite shader packs", cB), nc || Ic(new Set)
        })), () => {
          nc = !0
        }
      }), [cB, Bc]), {
        isFavourite: cB => null === nc ? null : nc.has(cB),
        toggle: function(Bc) {
          if (null === nc || uc.current.has(Bc)) return;
          uc.current.add(Bc);
          const Vc = !nc.has(Bc);
          sc(Bc, Vc), (Vc ? rB.e.favouriteShaderPack(cB, Bc) : rB.e.unfavouriteShaderPack(cB, Bc)).catch((cB => {
            console.error("Failed to change a favourite shader pack", cB), sc(Bc, !Vc)
          })).finally((() => {
            uc.current.delete(Bc)
          }))
        }
      }
    }
  },
  5516: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => oc,
      D: () => mB,
      H: () => Sc,
      I: () => Uc,
      J: () => qB,
      N: () => Zc,
      O: () => ec,
      R: () => Wc,
      V: () => Ec,
      Z: () => uc,
      c: () => yB,
      db: () => Mc,
      g: () => Lc,
      gb: () => sc,
      ib: () => Dc,
      jb: () => Nc,
      k: () => tB,
      mb: () => zB,
      n: () => Tc,
      o: () => Oc,
      pb: () => bB,
      r: () => Qc,
      t: () => fc,
      x: () => Cc,
      z: () => wc
    });
    var Vc = nc(5523),
      Ic = nc(152),
      rB = nc(3668);
    const uc = "/shader-packs",
      sc = `${uc}/publish`;

    function Mc(cB) {
      return `${uc}/${encodeURIComponent(cB)}`
    }
    let Pc = null;

    function qB(cB) {
      Pc = cB
    }

    function Oc() {
      return Pc
    }

    function Tc() {
      Pc = null
    }

    function fc(cB) {
      return cB.playerHasRank("developer") || cB.playerHasRank("admin")
    }
    const mB = ["terrain", "water", "models", "sunShadows", "strict"],
      ec = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function tB(cB, Bc) {
      return cB.withFeatures.includes(Bc) ? "with" : cB.withoutFeatures.includes(Bc) ? "without" : null
    }

    function Sc(cB) {
      return null === cB ? "with" : "with" === cB ? "without" : null
    }

    function yB(cB) {
      return "with" === cB ? "only" : null === cB ? "include" : void 0
    }

    function zB(cB, Bc) {
      const nc = tB(cB, Bc),
        Vc = cB => cB.filter((cB => cB !== Bc));
      return {
        withFeatures: null === nc ? [...cB.withFeatures, Bc] : Vc(cB.withFeatures),
        withoutFeatures: "with" === nc ? [...cB.withoutFeatures, Bc] : Vc(cB.withoutFeatures)
      }
    }
    const pc = "section",
      hc = "sort",
      aB = "filters",
      lc = "q",
      Yc = "banned",
      Lc = "popular",
      gB = "strict";

    function Uc(cB) {
      var Bc, nc, Ic;
      const uc = cB.get(pc),
        sc = (null !== (Bc = cB.get(aB)) && void 0 !== Bc ? Bc : gB).split(","),
        Mc = cB.get(Yc);
      return {
        section: "favourites" === uc || "mine" === uc ? uc : "explore",
        sort: null !== (nc = Vc.w.find((Bc => Bc === cB.get(hc)))) && void 0 !== nc ? nc : Lc,
        withFeatures: mB.filter((cB => sc.includes(cB) && !sc.includes(`-${cB}`))),
        withoutFeatures: mB.filter((cB => sc.includes(`-${cB}`))),
        searchQuery: (null === (Ic = cB.get(lc)) || void 0 === Ic ? void 0 : Ic.slice(0, Vc.L)) || null,
        pageNumber: (0, rB.g)(cB.get(rB.c)),
        banned: "only" === Mc ? "with" : "include" === Mc ? null : "without"
      }
    }

    function bB(cB, Bc) {
      var nc;
      const Vc = vB(Bc);
      (0, rB.j)(cB, pc, "explore" === Bc.section ? null : Bc.section), (0, rB.j)(cB, hc, Bc.sort === Lc ? null : Bc.sort), (0, rB.j)(cB, aB, Vc === gB ? null : Vc), (0, rB.j)(cB, lc, Bc.searchQuery), (0, rB.j)(cB, Yc, null !== (nc = yB(Bc.banned)) && void 0 !== nc ? nc : null), (0, rB.k)(cB, Bc.pageNumber)
    }

    function Zc(cB) {
      const Bc = new URLSearchParams;
      return bB(Bc, {
        section: "explore",
        sort: Lc,
        withFeatures: "strict" === cB ? [cB] : [cB, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${uc}?${Bc.toString()}`
    }

    function Qc(cB) {
      return vB(cB) === gB
    }

    function Cc(cB) {
      return null !== cB.searchQuery || "with" === cB.banned || vB(cB) !== gB
    }

    function vB(cB) {
      return mB.flatMap((Bc => {
        const nc = tB(cB, Bc);
        return "with" === nc ? [Bc] : "without" === nc ? [`-${Bc}`] : []
      })).join(",")
    }
    const Dc = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      Nc = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Ec(cB) {
      return Math.round(100 * Math.max(0, 1 - 1 / cB))
    }

    function oc(cB, Bc, nc, Ic) {
      const rB = [];
      cB.isBanned && rB.push({
        tone: "warning",
        text: Ic("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: uc
      } = cB;
      if (null === cB.brokenError || uc && !uc.error || rB.push({
          tone: "warning",
          text: Ic("shaderPackListing:ownerBroken"),
          detail: cB.brokenError
        }), null !== uc && void 0 !== uc && uc.error) rB.push({
        tone: "warning",
        text: Ic(Bc ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Vc.i)(uc.error) ? null : uc.error
      });
      else if (uc) {
        const cB = null === uc.renderNotBefore ? 0 : uc.renderNotBefore - nc,
          Vc = String(Math.ceil(cB / 6e4)),
          sc = Ic(Bc ? cB > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : cB > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Vc
          });
        rB.push({
          tone: "info",
          text: sc,
          detail: null
        })
      }
      return cB.listed || rB.push({
        tone: "info",
        text: Ic("shaderPackListing:ownerUnlisted"),
        detail: null
      }), rB
    }

    function Wc(cB) {
      return Math.max(1, Math.round(cB / 1024))
    }

    function wc(cB, Bc, nc) {
      return cB instanceof Ic.c && cB.errorMessageForUser ? cB.errorMessageForUser : Bc(nc)
    }
  },
  5542: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(73),
      Ic = nc(51);

    function rB(cB, Bc) {
      var nc;
      const [rB, uc] = (0, Vc.useState)(null !== (nc = Ic.h.getItem(cB)) && void 0 !== nc ? nc : Bc);
      return [rB, Bc => {
        Ic.h.setItem(cB, Bc), uc(Bc)
      }]
    }
  },
  5626: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      e: () => rB
    });
    var Vc = nc(51);
    const Ic = "shaderPack";
    async function rB() {
      var cB;
      let Bc = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (cB = await Vc.d.getItem(Ic, Bc)) && void 0 !== cB ? cB : null
    }
  },
  5523: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => uc,
      E: () => Vc,
      I: () => Tc,
      L: () => qB,
      O: () => zB,
      P: () => Oc,
      T: () => Pc,
      c: () => fc,
      d: () => ec,
      f: () => mB,
      i: () => yB,
      l: () => hc,
      p: () => Mc,
      q: () => Ic,
      t: () => pc,
      w: () => rB,
      z: () => sc
    });
    const Vc = ["forest", "desert", "water", "night", "cave"];
    const Ic = {
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
      rB = ["popular", "updated", "newest"],
      uc = 3,
      sc = 32,
      Mc = 300;

    function Pc(cB, Bc) {
      return cB.slice(0, Bc).replace(/[\uD800-\uDBFF]$/, "")
    }
    const qB = 64,
      Oc = 512,
      Tc = 18e5;
    const fc = "Bloxdhub",
      mB = "https://bloxdhub.com/shaders";

    function ec(cB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(cB)}`
    }
    const tB = "Screenshot generation failed.",
      Sc = "Its screenshots couldn't be generated:";

    function yB(cB) {
      var Bc;
      return cB === tB || null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.startsWith(Sc)) && void 0 !== Bc && Bc
    }

    function zB(cB, Bc) {
      return `shaderPacks/${cB}/${Bc}.json`
    }

    function pc(cB, Bc, nc, Vc) {
      return null === Bc.renderId ? hc(cB, Bc.baselineVersion, nc, Vc) : `${cB}/${function(cB,Bc,nc,Vc){return`shaderPacks/${cB}/${Bc}/${nc}-${Vc}.webp`}(Bc.packId,Bc.renderId,nc,Vc)}`
    }

    function hc(cB, Bc, nc, Vc) {
      return `${cB}/${function(cB,Bc,nc){return`shaderPacks/baseline/${cB}/${Bc}-${nc}.webp`}(Bc,nc,Vc)}`
    }
  },
  4016: (cB, Bc, nc) => {
    var Vc = nc(4018);

    function Ic() {}

    function rB() {}
    rB.resetWarningCache = Ic, cB.exports = function() {
      function cB(cB, Bc, nc, Ic, rB, uc) {
        if (uc !== Vc) {
          var sc = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw sc.name = "Invariant Violation", sc
        }
      }

      function Bc() {
        return cB
      }
      cB.isRequired = cB;
      var nc = {
        array: cB,
        bigint: cB,
        bool: cB,
        func: cB,
        number: cB,
        object: cB,
        string: cB,
        symbol: cB,
        any: cB,
        arrayOf: Bc,
        element: cB,
        elementType: cB,
        instanceOf: Bc,
        node: cB,
        objectOf: Bc,
        oneOf: Bc,
        oneOfType: Bc,
        shape: Bc,
        exact: Bc,
        checkPropTypes: rB,
        resetWarningCache: Ic
      };
      return nc.PropTypes = nc, nc
    }
  },
  4013: (cB, Bc, nc) => {
    cB.exports = nc(4016)()
  },
  4018: cB => {
    cB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);