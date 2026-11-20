export const id = 107;
export const ids = [107, 124];
export const modules = {
  4589: (zz, tz, sz) => {
    var Fz = sz(4598);

    function Wz() {}

    function Xz() {}
    Xz.resetWarningCache = Wz, zz.exports = function() {
      function zz(zz, tz, sz, Wz, Xz, Oz) {
        if (Oz !== Fz) {
          var oz = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw oz.name = "Invariant Violation", oz
        }
      }

      function tz() {
        return zz
      }
      zz.isRequired = zz;
      var sz = {
        array: zz,
        bigint: zz,
        bool: zz,
        func: zz,
        number: zz,
        object: zz,
        string: zz,
        symbol: zz,
        any: zz,
        arrayOf: tz,
        element: zz,
        elementType: zz,
        instanceOf: tz,
        node: zz,
        objectOf: tz,
        oneOf: tz,
        oneOfType: tz,
        shape: tz,
        exact: tz,
        checkPropTypes: Xz,
        resetWarningCache: Wz
      };
      return sz.PropTypes = sz, sz
    }
  },
  4582: (zz, tz, sz) => {
    zz.exports = sz(4589)()
  },
  4598: zz => {
    zz.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6158: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ShaderPackPublishForm: () => Pz
    });
    var Fz = sz(65),
      Wz = sz(6129),
      Xz = sz(205),
      Oz = sz(6161),
      oz = sz(1036),
      vz = sz(1419),
      Uz = sz(1622),
      Kz = sz(1116),
      uz = sz(6169),
      Nz = sz(6188),
      bz = sz(1466),
      wz = sz(1173),
      Dz = sz(6193),
      gz = sz(6225),
      Hz = sz(6122),
      Bz = sz(1087);

    function Pz(zz) {
      var tz, sz, uz;
      let {
        existing: Pz,
        onPublished: Yz
      } = zz;
      const {
        t: mz
      } = (0, wz.B)(), {
        userContext: Jz,
        isUserContextUpdating: Iz
      } = (0, Kz.b)(), [Cz, ez] = (0, Fz.useState)(null), [Zz, Gz] = (0, Fz.useState)(0), [Tz, cz] = (0, Fz.useState)(null !== (tz = null === Pz || void 0 === Pz ? void 0 : Pz.name) && void 0 !== tz ? tz : ""), jz = (0, Fz.useRef)(Tz), Az = (0, Fz.useRef)(""), yz = zz => {
        jz.current = zz, cz(zz)
      }, [Mz, dz] = (0, Fz.useState)(null !== (sz = null === Pz || void 0 === Pz ? void 0 : Pz.description) && void 0 !== sz ? sz : ""), hz = (0, Fz.useRef)(Mz), Qz = (0, Fz.useRef)(""), kz = zz => {
        hz.current = zz, dz(zz)
      }, [iz, Lz] = (0, Fz.useState)(!1), {
        loading: lz,
        error: nz,
        setError: az,
        onFiles: qz
      } = (0, Nz.d)((async zz => {
        const tz = await (0, Dz.loadPageShaderPackCompiler)();
        if (!tz) return void az(mz("shaderPack:compilerUnavailable"));
        const sz = await (0, gz.f)(tz, zz.files);
        if (ez({
            pack: zz,
            validation: sz,
            sourceBytes: (0, Oz.y)(zz.files)
          }), !Pz) {
          var Fz;
          if ("" !== jz.current.trim() && jz.current !== Az.current || (Az.current = (0, Wz.N)(zz.manifest.name.trim(), Wz.w), yz(Az.current)), "" === hz.current.trim() || hz.current === Qz.current) Qz.current = (0, Wz.N)((null !== (Fz = zz.manifest.description) && void 0 !== Fz ? Fz : "").trim(), Wz.p), kz(Qz.current);
          Gz((zz => zz + 1))
        }
      })), Sz = !Iz && !Jz.isLoggedIn() && !Xz.c.offlineMode, Vz = Tz.trim(), Rz = Vz.length < Wz.A, pz = null !== Cz && !1 !== (null === (uz = Cz.validation) || void 0 === uz ? void 0 : uz.ok) && !lz && !Rz && !Sz && !Iz;
      return (0, Bz.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Bz.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Pz ? mz("shaderPackListing:uploadIntro", {
            minutes: String(Wz.F / 6e4)
          }) : mz("shaderPackListing:publishIntro")
        }), (0, Bz.jsx)(xz, {}), Sz && (0, Bz.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: mz("shaderPackListing:publishNeedsLogin")
        }), (0, Bz.jsx)(Nz.b, {
          busy: lz,
          disabled: lz || iz,
          onFiles: zz => {
            ez(null), qz(zz)
          }
        }), Cz && (0, Bz.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Bz.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Cz.pack.manifest.name
          }), (0, Bz.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [mz("shaderPackListing:sizeValue", {
              kilobytes: String((0, Hz.Y)(Cz.sourceBytes))
            }), " \xb7", " ", mz("shaderPackListing:filesValue", {
              files: String(Cz.pack.files.length)
            })]
          }), (0, Bz.jsx)(rz, {
            picked: Cz
          })]
        }), !Pz && (0, Bz.jsxs)(Bz.Fragment, {
          children: [(0, Bz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Bz.jsx)("span", {
              children: mz("general:name")
            }), (0, Bz.jsx)(Uz.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Tz,
              maxLength: Wz.w,
              onValueChange: yz
            }, Zz), Cz && Rz && (0, Bz.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: mz("shaderPackListing:nameTooShort", {
                min: String(Wz.A)
              })
            })]
          }), (0, Bz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Bz.jsx)("span", {
              children: mz("general:description")
            }), (0, Bz.jsx)(Uz.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Mz,
              maxLength: Wz.p,
              onValueChange: kz,
              useTextarea: !0
            }, Zz)]
          })]
        }), nz && (0, Bz.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: nz
        }), (0, Bz.jsxs)(vz.p, {
          className: "ShaderPackPublishButton",
          disabled: !pz,
          loading: iz,
          onClick: () => {
            !async function() {
              var zz;
              if (!Cz) return;
              const {
                name: tz,
                description: sz
              } = null !== Pz && void 0 !== Pz ? Pz : {
                name: Vz,
                description: Mz.trim()
              }, Fz = {
                packId: null !== (zz = null === Pz || void 0 === Pz ? void 0 : Pz.packId) && void 0 !== zz ? zz : null,
                name: tz,
                description: sz,
                apiVersion: Cz.pack.manifest.apiVersion,
                files: (0, Oz.u)(Cz.pack.files),
                keepCircleShadows: !0 === Cz.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Fz)).byteLength > 1024 * Wz.J) az(mz("shaderPackListing:publishTooBig", {
                kilobytes: String(Wz.J)
              }));
              else {
                Lz(!0), az(null);
                try {
                  Yz(await bz.d.publishShaderPack(Jz, Fz))
                } catch (Xz) {
                  console.error("Failed to publish the shader pack", Xz), az((0, Hz.B)(Xz, mz, "shaderPackListing:publishFailed"))
                } finally {
                  Lz(!1)
                }
              }
            }()
          },
          children: [(0, Bz.jsx)(oz.c, {
            name: "upload"
          }), " ", mz(Pz ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function rz(zz) {
      let {
        picked: tz
      } = zz;
      const {
        t: sz
      } = (0, wz.B)(), {
        validation: Fz
      } = tz;
      return null === Fz ? (0, Bz.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: sz("shaderPackListing:publishUnchecked")
      }) : Fz.ok ? (0, Bz.jsxs)(Bz.Fragment, {
        children: [(0, Bz.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Bz.jsx)(oz.c, {
            name: "circle-check"
          }), " ", sz("shaderPackListing:publishReady")]
        }), Fz.offInStrict.length > 0 && (0, Bz.jsxs)(Bz.Fragment, {
          children: [(0, Bz.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Bz.jsx)(oz.c, {
              name: "triangle-exclamation"
            }), " ", sz("shaderPack:offInStrict")]
          }), (0, Bz.jsx)(uz.c, {
            diagnostics: Fz.offInStrict,
            t: sz
          })]
        })]
      }) : (0, Bz.jsxs)(Bz.Fragment, {
        children: [(0, Bz.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Bz.jsx)(oz.c, {
            name: "triangle-exclamation"
          }), " ", sz("shaderPackListing:publishHasErrors")]
        }), (0, Bz.jsx)(uz.c, {
          diagnostics: Fz.errors,
          more: Fz.moreErrors,
          t: sz
        })]
      })
    }
    const Yz = "\0";

    function xz() {
      const {
        t: zz
      } = (0, wz.B)(), [tz, sz] = zz("shaderPackListing:bloxdhubHelp", {
        site: Yz
      }).split(Yz);
      return (0, Bz.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [tz, (0, Bz.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Wz.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Wz.b
        }), sz]
      })
    }
  },
  6155: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Kz
    });
    var Fz = sz(1483),
      Wz = sz(1419),
      Xz = sz(1173),
      Oz = sz(6158),
      oz = sz(6143),
      vz = sz(6122),
      Uz = sz(1087);

    function Kz() {
      const {
        t: zz
      } = (0, Xz.B)(), tz = (0, Fz.useNavigatePreserveSearch)();
      return (0, oz.c)(), (0, Uz.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Uz.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Uz.jsx)(Wz.e, {
            onClick: () => {
              tz(vz.db)
            },
            children: zz("shaderPackListing:backToPacks")
          })
        }), (0, Uz.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: zz("shaderPackListing:publishTitle")
        }), (0, Uz.jsx)(Oz.ShaderPackPublishForm, {
          existing: null,
          onPublished: zz => {
            tz((0, vz.jb)(zz.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6143: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz,
      e: () => bz,
      f: () => uz,
      g: () => wz
    });
    var Fz = sz(65),
      Wz = sz(6129),
      Xz = sz(1466),
      Oz = sz(6122),
      oz = sz(6151),
      vz = sz(1116);
    const Uz = "shaderPackListingView",
      Kz = "shaderPackListingFilterOpen";

    function uz() {
      var zz;
      const [tz, sz] = (0, oz.c)(Uz, Wz.B[0]);
      return [null !== (zz = Wz.B.find((zz => zz === tz))) && void 0 !== zz ? zz : Wz.B[0], sz]
    }

    function Nz() {
      (0, Fz.useEffect)((() => () => {
        window.location.pathname.startsWith(Oz.db) || (0, Oz.p)()
      }), [])
    }

    function bz() {
      return (0, oz.c)(Kz, !1)
    }

    function wz() {
      const {
        userContext: zz,
        isUserContextUpdating: tz
      } = (0, vz.b)(), [sz, Wz] = (0, Fz.useState)(null), Oz = (0, Fz.useRef)(new Set);

      function oz(zz, tz) {
        Wz((sz => {
          const Fz = new Set(sz);
          return tz ? Fz.add(zz) : Fz.delete(zz), Fz
        }))
      }
      return (0, Fz.useEffect)((() => {
        if (tz) return;
        let sz = !1;
        return Xz.d.getFavouriteShaderPacks(zz).then((zz => {
          sz || Wz(new Set(zz))
        })).catch((zz => {
          console.error("Failed to get favourite shader packs", zz), sz || Wz(new Set)
        })), () => {
          sz = !0
        }
      }), [zz, tz]), {
        isFavourite: zz => null === sz ? null : sz.has(zz),
        toggle: function(tz) {
          if (null === sz || Oz.current.has(tz)) return;
          Oz.current.add(tz);
          const Fz = !sz.has(tz);
          oz(tz, Fz), (Fz ? Xz.d.favouriteShaderPack(zz, tz) : Xz.d.unfavouriteShaderPack(zz, tz)).catch((zz => {
            console.error("Failed to change a favourite shader pack", zz), oz(tz, !Fz)
          })).finally((() => {
            Oz.current.delete(tz)
          }))
        }
      }
    }
  },
  6122: (zz, tz, sz) => {
    sz.d(tz, {
      B: () => Qz,
      E: () => wz,
      H: () => Hz,
      K: () => ez,
      N: () => Kz,
      Q: () => Gz,
      U: () => Dz,
      Y: () => hz,
      ab: () => Mz,
      d: () => Bz,
      db: () => Oz,
      h: () => Iz,
      hb: () => dz,
      jb: () => vz,
      kb: () => oz,
      l: () => gz,
      mb: () => Az,
      p: () => Nz,
      qb: () => yz,
      s: () => uz,
      t: () => Tz,
      u: () => bz,
      ub: () => Pz,
      wb: () => Zz,
      x: () => cz
    });
    var Fz = sz(6129),
      Wz = sz(161),
      Xz = sz(4194);
    const Oz = "/shader-packs",
      oz = `${Oz}/publish`;

    function vz(zz) {
      return `${Oz}/${encodeURIComponent(zz)}`
    }
    let Uz = null;

    function Kz(zz) {
      Uz = zz
    }

    function uz() {
      return Uz
    }

    function Nz() {
      Uz = null
    }

    function bz(zz) {
      return zz.playerHasRank("developer") || zz.playerHasRank("admin")
    }
    const wz = ["terrain", "water", "models", "sunShadows", "strict"],
      Dz = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function gz(zz, tz) {
      return zz.withFeatures.includes(tz) ? "with" : zz.withoutFeatures.includes(tz) ? "without" : null
    }

    function Hz(zz) {
      return null === zz ? "with" : "with" === zz ? "without" : null
    }

    function Bz(zz) {
      return "with" === zz ? "only" : null === zz ? "include" : void 0
    }

    function Pz(zz, tz) {
      const sz = gz(zz, tz),
        Fz = zz => zz.filter((zz => zz !== tz));
      return {
        withFeatures: null === sz ? [...zz.withFeatures, tz] : Fz(zz.withFeatures),
        withoutFeatures: "with" === sz ? [...zz.withoutFeatures, tz] : Fz(zz.withoutFeatures)
      }
    }
    const rz = "section",
      Yz = "sort",
      xz = "filters",
      mz = "q",
      Jz = "banned",
      Iz = "popular",
      Cz = "strict";

    function ez(zz) {
      var tz, sz, Wz;
      const Oz = zz.get(rz),
        oz = (null !== (tz = zz.get(xz)) && void 0 !== tz ? tz : Cz).split(","),
        vz = zz.get(Jz);
      return {
        section: "favourites" === Oz || "mine" === Oz ? Oz : "explore",
        sort: null !== (sz = Fz.u.find((tz => tz === zz.get(Yz)))) && void 0 !== sz ? sz : Iz,
        withFeatures: wz.filter((zz => oz.includes(zz) && !oz.includes(`-${zz}`))),
        withoutFeatures: wz.filter((zz => oz.includes(`-${zz}`))),
        searchQuery: (null === (Wz = zz.get(mz)) || void 0 === Wz ? void 0 : Wz.slice(0, Fz.G)) || null,
        pageNumber: (0, Xz.e)(zz.get(Xz.b)),
        banned: "only" === vz ? "with" : "include" === vz ? null : "without"
      }
    }

    function Zz(zz, tz) {
      var sz;
      const Fz = jz(tz);
      (0, Xz.f)(zz, rz, "explore" === tz.section ? null : tz.section), (0, Xz.f)(zz, Yz, tz.sort === Iz ? null : tz.sort), (0, Xz.f)(zz, xz, Fz === Cz ? null : Fz), (0, Xz.f)(zz, mz, tz.searchQuery), (0, Xz.f)(zz, Jz, null !== (sz = Bz(tz.banned)) && void 0 !== sz ? sz : null), (0, Xz.g)(zz, tz.pageNumber)
    }

    function Gz(zz) {
      const tz = new URLSearchParams;
      return Zz(tz, {
        section: "explore",
        sort: Iz,
        withFeatures: "strict" === zz ? [zz] : [zz, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${Oz}?${tz.toString()}`
    }

    function Tz(zz) {
      return jz(zz) === Cz
    }

    function cz(zz) {
      return null !== zz.searchQuery || "with" === zz.banned || jz(zz) !== Cz
    }

    function jz(zz) {
      return wz.flatMap((tz => {
        const sz = gz(zz, tz);
        return "with" === sz ? [tz] : "without" === sz ? [`-${tz}`] : []
      })).join(",")
    }
    const Az = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      yz = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function Mz(zz) {
      return Math.round(100 * Math.max(0, 1 - 1 / zz))
    }

    function dz(zz, tz, sz, Wz) {
      const Xz = [];
      zz.isBanned && Xz.push({
        tone: "warning",
        text: Wz("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: Oz
      } = zz;
      if (null === zz.brokenError || Oz && !Oz.error || Xz.push({
          tone: "warning",
          text: Wz("shaderPackListing:ownerBroken"),
          detail: zz.brokenError
        }), null !== Oz && void 0 !== Oz && Oz.error) Xz.push({
        tone: "warning",
        text: Wz(tz ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Fz.j)(Oz.error) ? null : Oz.error
      });
      else if (Oz) {
        const zz = null === Oz.renderNotBefore ? 0 : Oz.renderNotBefore - sz,
          Fz = String(Math.ceil(zz / 6e4)),
          oz = Wz(tz ? zz > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : zz > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Fz
          });
        Xz.push({
          tone: "info",
          text: oz,
          detail: null
        })
      }
      return zz.listed || Xz.push({
        tone: "info",
        text: Wz("shaderPackListing:ownerUnlisted"),
        detail: null
      }), Xz
    }

    function hz(zz) {
      return Math.max(1, Math.round(zz / 1024))
    }

    function Qz(zz, tz, sz) {
      return zz instanceof Wz.e && zz.errorMessageForUser ? zz.errorMessageForUser : tz(sz)
    }
  },
  6151: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(65),
      Wz = sz(44);

    function Xz(zz, tz) {
      var sz;
      const [Xz, Oz] = (0, Fz.useState)(null !== (sz = Wz.f.getItem(zz)) && void 0 !== sz ? sz : tz);
      return [Xz, tz => {
        Wz.f.setItem(zz, tz), Oz(tz)
      }]
    }
  },
  6237: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    var Fz = sz(44);
    const Wz = "shaderPack";
    async function Xz() {
      var zz;
      let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
    }
  },
  6129: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Oz,
      B: () => Fz,
      F: () => Nz,
      G: () => Kz,
      I: () => Pz,
      J: () => uz,
      N: () => Uz,
      b: () => bz,
      f: () => Dz,
      i: () => wz,
      j: () => Bz,
      m: () => Yz,
      p: () => vz,
      q: () => Wz,
      r: () => rz,
      u: () => Xz,
      w: () => oz
    });
    const Fz = ["forest", "desert", "water", "night", "cave"];
    const Wz = {
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
      Xz = ["popular", "updated", "newest"],
      Oz = 3,
      oz = 32,
      vz = 300;

    function Uz(zz, tz) {
      return zz.slice(0, tz).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kz = 64,
      uz = 512,
      Nz = 18e5;
    const bz = "Bloxdhub",
      wz = "https://bloxdhub.com/shaders";

    function Dz(zz) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
    }
    const gz = "Screenshot generation failed.",
      Hz = "Its screenshots couldn't be generated:";

    function Bz(zz) {
      var tz;
      return zz === gz || null !== (tz = null === zz || void 0 === zz ? void 0 : zz.startsWith(Hz)) && void 0 !== tz && tz
    }

    function Pz(zz, tz) {
      return `shaderPacks/${zz}/${tz}.json`
    }

    function rz(zz, tz, sz, Fz) {
      return null === tz.renderId ? Yz(zz, tz.baselineVersion, sz, Fz) : `${zz}/${function(zz,tz,sz,Fz){return`shaderPacks/${zz}/${tz}/${sz}-${Fz}.webp`}(tz.packId,tz.renderId,sz,Fz)}`
    }

    function Yz(zz, tz, sz, Fz) {
      return `${zz}/${function(zz,tz,sz){return`shaderPacks/baseline/${zz}/${tz}-${sz}.webp`}(tz,sz,Fz)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);