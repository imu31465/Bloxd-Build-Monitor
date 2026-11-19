export const id = 107;
export const ids = [107, 124];
export const modules = {
  4722: (zz, uz, bz) => {
    var Ez = bz(4726);

    function nz() {}

    function iz() {}
    iz.resetWarningCache = nz, zz.exports = function() {
      function zz(zz, uz, bz, nz, iz, lz) {
        if (lz !== Ez) {
          var Mz = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Mz.name = "Invariant Violation", Mz
        }
      }

      function uz() {
        return zz
      }
      zz.isRequired = zz;
      var bz = {
        array: zz,
        bigint: zz,
        bool: zz,
        func: zz,
        number: zz,
        object: zz,
        string: zz,
        symbol: zz,
        any: zz,
        arrayOf: uz,
        element: zz,
        elementType: zz,
        instanceOf: uz,
        node: zz,
        objectOf: uz,
        oneOf: uz,
        oneOfType: uz,
        shape: uz,
        exact: uz,
        checkPropTypes: iz,
        resetWarningCache: nz
      };
      return bz.PropTypes = bz, bz
    }
  },
  4714: (zz, uz, bz) => {
    zz.exports = bz(4722)()
  },
  4726: zz => {
    zz.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  6301: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ShaderPackPublishForm: () => fz
    });
    var Ez = bz(56),
      nz = bz(6283),
      iz = bz(199),
      lz = bz(6307),
      Mz = bz(1047),
      tz = bz(1419),
      Hz = bz(1628),
      Oz = bz(1114),
      pz = bz(6316),
      dz = bz(6337),
      Fz = bz(1473),
      Zz = bz(1181),
      Rz = bz(6340),
      Kz = bz(6371),
      wz = bz(6274),
      Xz = bz(1089);

    function fz(zz) {
      var uz, bz, pz;
      let {
        existing: fz,
        onPublished: rz
      } = zz;
      const {
        t: Nz
      } = (0, Zz.F)(), {
        userContext: vz,
        isUserContextUpdating: xz
      } = (0, Oz.c)(), [Jz, Az] = (0, Ez.useState)(null), [Tz, Lz] = (0, Ez.useState)(0), [Pz, Gz] = (0, Ez.useState)(null !== (uz = null === fz || void 0 === fz ? void 0 : fz.name) && void 0 !== uz ? uz : ""), az = (0, Ez.useRef)(Pz), Vz = (0, Ez.useRef)(""), mz = zz => {
        az.current = zz, Gz(zz)
      }, [qz, hz] = (0, Ez.useState)(null !== (bz = null === fz || void 0 === fz ? void 0 : fz.description) && void 0 !== bz ? bz : ""), Uz = (0, Ez.useRef)(qz), cz = (0, Ez.useRef)(""), gz = zz => {
        Uz.current = zz, hz(zz)
      }, [Sz, yz] = (0, Ez.useState)(!1), {
        loading: Dz,
        error: Qz,
        setError: Wz,
        onFiles: ez
      } = (0, dz.e)((async zz => {
        const uz = await (0, Rz.loadPageShaderPackCompiler)();
        if (!uz) return void Wz(Nz("shaderPack:compilerUnavailable"));
        const bz = await (0, Kz.g)(uz, zz.files);
        if (Az({
            pack: zz,
            validation: bz,
            sourceBytes: (0, lz.u)(zz.files)
          }), !fz) {
          var Ez;
          if ("" !== az.current.trim() && az.current !== Vz.current || (Vz.current = (0, nz.O)(zz.manifest.name.trim(), nz.y), mz(Vz.current)), "" === Uz.current.trim() || Uz.current === cz.current) cz.current = (0, nz.O)((null !== (Ez = zz.manifest.description) && void 0 !== Ez ? Ez : "").trim(), nz.l), gz(cz.current);
          Lz((zz => zz + 1))
        }
      })), jz = !xz && !vz.isLoggedIn() && !iz.e.offlineMode, Iz = Pz.trim(), Bz = Iz.length < nz.z, Cz = null !== Jz && !1 !== (null === (pz = Jz.validation) || void 0 === pz ? void 0 : pz.ok) && !Dz && !Bz && !jz && !xz;
      return (0, Xz.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Xz.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: fz ? Nz("shaderPackListing:uploadIntro", {
            minutes: String(nz.D / 6e4)
          }) : Nz("shaderPackListing:publishIntro")
        }), (0, Xz.jsx)(oz, {}), jz && (0, Xz.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Nz("shaderPackListing:publishNeedsLogin")
        }), (0, Xz.jsx)(dz.c, {
          busy: Dz,
          disabled: Dz || Sz,
          onFiles: zz => {
            Az(null), ez(zz)
          }
        }), Jz && (0, Xz.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Xz.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Jz.pack.manifest.name
          }), (0, Xz.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Nz("shaderPackListing:sizeValue", {
              kilobytes: String((0, wz.N)(Jz.sourceBytes))
            }), " \xb7", " ", Nz("shaderPackListing:filesValue", {
              files: String(Jz.pack.files.length)
            })]
          }), (0, Xz.jsx)(sz, {
            picked: Jz
          })]
        }), !fz && (0, Xz.jsxs)(Xz.Fragment, {
          children: [(0, Xz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Xz.jsx)("span", {
              children: Nz("general:name")
            }), (0, Xz.jsx)(Hz.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Pz,
              maxLength: nz.y,
              onValueChange: mz
            }, Tz), Jz && Bz && (0, Xz.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Nz("shaderPackListing:nameTooShort", {
                min: String(nz.z)
              })
            })]
          }), (0, Xz.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Xz.jsx)("span", {
              children: Nz("general:description")
            }), (0, Xz.jsx)(Hz.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: qz,
              maxLength: nz.l,
              onValueChange: gz,
              useTextarea: !0
            }, Tz)]
          })]
        }), Qz && (0, Xz.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Qz
        }), (0, Xz.jsxs)(tz.q, {
          className: "ShaderPackPublishButton",
          disabled: !Cz,
          loading: Sz,
          onClick: () => {
            !async function() {
              var zz;
              if (!Jz) return;
              const {
                name: uz,
                description: bz
              } = null !== fz && void 0 !== fz ? fz : {
                name: Iz,
                description: qz.trim()
              }, Ez = {
                packId: null !== (zz = null === fz || void 0 === fz ? void 0 : fz.packId) && void 0 !== zz ? zz : null,
                name: uz,
                description: bz,
                apiVersion: Jz.pack.manifest.apiVersion,
                files: (0, lz.s)(Jz.pack.files),
                keepCircleShadows: !0 === Jz.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Ez)).byteLength > 1024 * nz.M) Wz(Nz("shaderPackListing:publishTooBig", {
                kilobytes: String(nz.M)
              }));
              else {
                yz(!0), Wz(null);
                try {
                  rz(await Fz.c.publishShaderPack(vz, Ez))
                } catch (iz) {
                  console.error("Failed to publish the shader pack", iz), Wz((0, wz.v)(iz, Nz, "shaderPackListing:publishFailed"))
                } finally {
                  yz(!1)
                }
              }
            }()
          },
          children: [(0, Xz.jsx)(Mz.c, {
            name: "upload"
          }), " ", Nz(fz ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function sz(zz) {
      let {
        picked: uz
      } = zz;
      const {
        t: bz
      } = (0, Zz.F)(), {
        validation: Ez
      } = uz;
      return null === Ez ? (0, Xz.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: bz("shaderPackListing:publishUnchecked")
      }) : Ez.ok ? (0, Xz.jsxs)(Xz.Fragment, {
        children: [(0, Xz.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Xz.jsx)(Mz.c, {
            name: "circle-check"
          }), " ", bz("shaderPackListing:publishReady")]
        }), Ez.offInStrict.length > 0 && (0, Xz.jsxs)(Xz.Fragment, {
          children: [(0, Xz.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Xz.jsx)(Mz.c, {
              name: "triangle-exclamation"
            }), " ", bz("shaderPack:offInStrict")]
          }), (0, Xz.jsx)(pz.b, {
            diagnostics: Ez.offInStrict,
            t: bz
          })]
        })]
      }) : (0, Xz.jsxs)(Xz.Fragment, {
        children: [(0, Xz.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Xz.jsx)(Mz.c, {
            name: "triangle-exclamation"
          }), " ", bz("shaderPackListing:publishHasErrors")]
        }), (0, Xz.jsx)(pz.b, {
          diagnostics: Ez.errors,
          more: Ez.moreErrors,
          t: bz
        })]
      })
    }
    const rz = "\0";

    function oz() {
      const {
        t: zz
      } = (0, Zz.F)(), [uz, bz] = zz("shaderPackListing:bloxdhubHelp", {
        site: rz
      }).split(rz);
      return (0, Xz.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [uz, (0, Xz.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: nz.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: nz.b
        }), bz]
      })
    }
  },
  6299: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Oz
    });
    var Ez = bz(1482),
      nz = bz(1419),
      iz = bz(1181),
      lz = bz(6301),
      Mz = bz(6289),
      tz = bz(6274),
      Hz = bz(1089);

    function Oz() {
      const {
        t: zz
      } = (0, iz.F)(), uz = (0, Ez.useNavigatePreserveSearch)();
      return (0, Mz.e)(), (0, Hz.jsxs)("div", {
        className: "ShaderPackPublishPage AnimFadeIn",
        children: [(0, Hz.jsx)("div", {
          className: "ShaderPackPublishBack",
          children: (0, Hz.jsx)(nz.d, {
            onClick: () => {
              uz(tz.P)
            },
            children: zz("shaderPackListing:backToPacks")
          })
        }), (0, Hz.jsx)("h1", {
          className: "ShaderPackPublishTitle",
          children: zz("shaderPackListing:publishTitle")
        }), (0, Hz.jsx)(lz.ShaderPackPublishForm, {
          existing: null,
          onPublished: zz => {
            uz((0, tz.W)(zz.packId), {
              replace: !0
            })
          }
        })]
      })
    }
  },
  6289: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz,
      g: () => Fz,
      k: () => pz,
      m: () => Zz
    });
    var Ez = bz(56),
      nz = bz(6283),
      iz = bz(1473),
      lz = bz(6274),
      Mz = bz(6291),
      tz = bz(1114);
    const Hz = "shaderPackListingView",
      Oz = "shaderPackListingFilterOpen";

    function pz() {
      var zz;
      const [uz, bz] = (0, Mz.d)(Hz, nz.B[0]);
      return [null !== (zz = nz.B.find((zz => zz === uz))) && void 0 !== zz ? zz : nz.B[0], bz]
    }

    function dz() {
      (0, Ez.useEffect)((() => () => {
        window.location.pathname.startsWith(lz.P) || (0, lz.j)()
      }), [])
    }

    function Fz() {
      return (0, Mz.d)(Oz, !1)
    }

    function Zz() {
      const {
        userContext: zz,
        isUserContextUpdating: uz
      } = (0, tz.c)(), [bz, nz] = (0, Ez.useState)(null), lz = (0, Ez.useRef)(new Set);

      function Mz(zz, uz) {
        nz((bz => {
          const Ez = new Set(bz);
          return uz ? Ez.add(zz) : Ez.delete(zz), Ez
        }))
      }
      return (0, Ez.useEffect)((() => {
        if (uz) return;
        let bz = !1;
        return iz.c.getFavouriteShaderPacks(zz).then((zz => {
          bz || nz(new Set(zz))
        })).catch((zz => {
          console.error("Failed to get favourite shader packs", zz), bz || nz(new Set)
        })), () => {
          bz = !0
        }
      }), [zz, uz]), {
        isFavourite: zz => null === bz ? null : bz.has(zz),
        toggle: function(uz) {
          if (null === bz || lz.current.has(uz)) return;
          lz.current.add(uz);
          const Ez = !bz.has(uz);
          Mz(uz, Ez), (Ez ? iz.c.favouriteShaderPack(zz, uz) : iz.c.unfavouriteShaderPack(zz, uz)).catch((zz => {
            console.error("Failed to change a favourite shader pack", zz), Mz(uz, !Ez)
          })).finally((() => {
            lz.current.delete(uz)
          }))
        }
      }
    }
  },
  6274: (zz, uz, bz) => {
    bz.d(uz, {
      D: () => wz,
      F: () => Az,
      G: () => Oz,
      J: () => Lz,
      M: () => Rz,
      N: () => Uz,
      O: () => qz,
      P: () => lz,
      T: () => hz,
      W: () => tz,
      _: () => Mz,
      bb: () => Vz,
      db: () => mz,
      e: () => Xz,
      eb: () => fz,
      f: () => xz,
      gb: () => Tz,
      h: () => Kz,
      j: () => dz,
      m: () => pz,
      p: () => Pz,
      q: () => Fz,
      u: () => Gz,
      v: () => cz,
      z: () => Zz
    });
    var Ez = bz(6283),
      nz = bz(158),
      iz = bz(4313);
    const lz = "/shader-packs",
      Mz = `${lz}/publish`;

    function tz(zz) {
      return `${lz}/${encodeURIComponent(zz)}`
    }
    let Hz = null;

    function Oz(zz) {
      Hz = zz
    }

    function pz() {
      return Hz
    }

    function dz() {
      Hz = null
    }

    function Fz(zz) {
      return zz.playerHasRank("developer") || zz.playerHasRank("admin")
    }
    const Zz = ["terrain", "water", "models", "sunShadows", "strict"],
      Rz = {
        terrain: "shaderPackListing:filterTerrain",
        water: "shaderPackListing:filterWater",
        models: "shaderPackListing:filterModels",
        sunShadows: "shaderPackListing:filterShadows",
        strict: "shaderPackListing:filterAllGames"
      };

    function Kz(zz, uz) {
      return zz.withFeatures.includes(uz) ? "with" : zz.withoutFeatures.includes(uz) ? "without" : null
    }

    function wz(zz) {
      return null === zz ? "with" : "with" === zz ? "without" : null
    }

    function Xz(zz) {
      return "with" === zz ? "only" : null === zz ? "include" : void 0
    }

    function fz(zz, uz) {
      const bz = Kz(zz, uz),
        Ez = zz => zz.filter((zz => zz !== uz));
      return {
        withFeatures: null === bz ? [...zz.withFeatures, uz] : Ez(zz.withFeatures),
        withoutFeatures: "with" === bz ? [...zz.withoutFeatures, uz] : Ez(zz.withoutFeatures)
      }
    }
    const sz = "section",
      rz = "sort",
      oz = "filters",
      Nz = "q",
      vz = "banned",
      xz = "popular",
      Jz = "strict";

    function Az(zz) {
      var uz, bz, nz;
      const lz = zz.get(sz),
        Mz = (null !== (uz = zz.get(oz)) && void 0 !== uz ? uz : Jz).split(","),
        tz = zz.get(vz);
      return {
        section: "favourites" === lz || "mine" === lz ? lz : "explore",
        sort: null !== (bz = Ez.u.find((uz => uz === zz.get(rz)))) && void 0 !== bz ? bz : xz,
        withFeatures: Zz.filter((zz => Mz.includes(zz) && !Mz.includes(`-${zz}`))),
        withoutFeatures: Zz.filter((zz => Mz.includes(`-${zz}`))),
        searchQuery: (null === (nz = zz.get(Nz)) || void 0 === nz ? void 0 : nz.slice(0, Ez.G)) || null,
        pageNumber: (0, iz.h)(zz.get(iz.e)),
        banned: "only" === tz ? "with" : "include" === tz ? null : "without"
      }
    }

    function Tz(zz, uz) {
      var bz;
      const Ez = az(uz);
      (0, iz.k)(zz, sz, "explore" === uz.section ? null : uz.section), (0, iz.k)(zz, rz, uz.sort === xz ? null : uz.sort), (0, iz.k)(zz, oz, Ez === Jz ? null : Ez), (0, iz.k)(zz, Nz, uz.searchQuery), (0, iz.k)(zz, vz, null !== (bz = Xz(uz.banned)) && void 0 !== bz ? bz : null), (0, iz.m)(zz, uz.pageNumber)
    }

    function Lz(zz) {
      const uz = new URLSearchParams;
      return Tz(uz, {
        section: "explore",
        sort: xz,
        withFeatures: "strict" === zz ? [zz] : [zz, "strict"],
        withoutFeatures: [],
        searchQuery: null,
        pageNumber: 1,
        banned: "without"
      }), `${lz}?${uz.toString()}`
    }

    function Pz(zz) {
      return az(zz) === Jz
    }

    function Gz(zz) {
      return null !== zz.searchQuery || "with" === zz.banned || az(zz) !== Jz
    }

    function az(zz) {
      return Zz.flatMap((uz => {
        const bz = Kz(zz, uz);
        return "with" === bz ? [uz] : "without" === bz ? [`-${uz}`] : []
      })).join(",")
    }
    const Vz = {
        popular: "shaderPackListing:sortPopular",
        updated: "shaderPackListing:sortUpdated",
        newest: "shaderPackListing:sortNewest"
      },
      mz = {
        forest: "shaderPackListing:viewForest",
        desert: "shaderPackListing:viewDesert",
        water: "shaderPackListing:viewWater",
        night: "shaderPackListing:viewNight",
        cave: "shaderPackListing:viewCave"
      };

    function qz(zz) {
      return Math.round(100 * Math.max(0, 1 - 1 / zz))
    }

    function hz(zz, uz, bz, nz) {
      const iz = [];
      zz.isBanned && iz.push({
        tone: "warning",
        text: nz("shaderPackListing:ownerBanned"),
        detail: null
      });
      const {
        pending: lz
      } = zz;
      if (null === zz.brokenError || lz && !lz.error || iz.push({
          tone: "warning",
          text: nz("shaderPackListing:ownerBroken"),
          detail: zz.brokenError
        }), null !== lz && void 0 !== lz && lz.error) iz.push({
        tone: "warning",
        text: nz(uz ? "shaderPackListing:ownerUpdateFailed" : "shaderPackListing:ownerFirstFailed"),
        detail: (0, Ez.g)(lz.error) ? null : lz.error
      });
      else if (lz) {
        const zz = null === lz.renderNotBefore ? 0 : lz.renderNotBefore - bz,
          Ez = String(Math.ceil(zz / 6e4)),
          Mz = nz(uz ? zz > 0 ? "shaderPackListing:ownerUpdateWaiting" : "shaderPackListing:ownerUpdateSoon" : zz > 0 ? "shaderPackListing:ownerFirstWaiting" : "shaderPackListing:ownerFirstSoon", {
            minutes: Ez
          });
        iz.push({
          tone: "info",
          text: Mz,
          detail: null
        })
      }
      return zz.listed || iz.push({
        tone: "info",
        text: nz("shaderPackListing:ownerUnlisted"),
        detail: null
      }), iz
    }

    function Uz(zz) {
      return Math.max(1, Math.round(zz / 1024))
    }

    function cz(zz, uz, bz) {
      return zz instanceof nz.c && zz.errorMessageForUser ? zz.errorMessageForUser : uz(bz)
    }
  },
  6291: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(56),
      nz = bz(33);

    function iz(zz, uz) {
      var bz;
      const [iz, lz] = (0, Ez.useState)(null !== (bz = nz.g.getItem(zz)) && void 0 !== bz ? bz : uz);
      return [iz, uz => {
        nz.g.setItem(zz, uz), lz(uz)
      }]
    }
  },
  6382: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    var Ez = bz(33);
    const nz = "shaderPack";
    async function iz() {
      var zz;
      let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
    }
  },
  6283: (zz, uz, bz) => {
    bz.d(uz, {
      B: () => Ez,
      D: () => dz,
      G: () => Oz,
      K: () => fz,
      M: () => pz,
      O: () => Hz,
      b: () => Fz,
      e: () => Rz,
      f: () => Zz,
      g: () => Xz,
      i: () => rz,
      l: () => tz,
      m: () => nz,
      q: () => sz,
      u: () => iz,
      y: () => Mz,
      z: () => lz
    });
    const Ez = ["forest", "desert", "water", "night", "cave"];
    const nz = {
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
      iz = ["popular", "updated", "newest"],
      lz = 3,
      Mz = 32,
      tz = 300;

    function Hz(zz, uz) {
      return zz.slice(0, uz).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Oz = 64,
      pz = 512,
      dz = 18e5;
    const Fz = "Bloxdhub",
      Zz = "https://bloxdhub.com/shaders";

    function Rz(zz) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(zz)}`
    }
    const Kz = "Screenshot generation failed.",
      wz = "Its screenshots couldn't be generated:";

    function Xz(zz) {
      var uz;
      return zz === Kz || null !== (uz = null === zz || void 0 === zz ? void 0 : zz.startsWith(wz)) && void 0 !== uz && uz
    }

    function fz(zz, uz) {
      return `shaderPacks/${zz}/${uz}.json`
    }

    function sz(zz, uz, bz, Ez) {
      return null === uz.renderId ? rz(zz, uz.baselineVersion, bz, Ez) : `${zz}/${function(zz,uz,bz,Ez){return`shaderPacks/${zz}/${uz}/${bz}-${Ez}.webp`}(uz.packId,uz.renderId,bz,Ez)}`
    }

    function rz(zz, uz, bz, Ez) {
      return `${zz}/${function(zz,uz,bz){return`shaderPacks/baseline/${zz}/${uz}-${bz}.webp`}(uz,bz,Ez)}`
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);