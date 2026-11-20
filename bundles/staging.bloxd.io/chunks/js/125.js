export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6169: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(6174),
      Wz = sz(1087);
    const Xz = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function Oz(zz) {
      let {
        diagnostics: tz,
        more: sz = 0,
        t: Oz
      } = zz;
      return (0, Wz.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [tz.map(((zz, tz) => {
          const sz = (0, Fz.f)(zz),
            oz = function(zz, tz) {
              const sz = (0, Fz.d)(null !== zz && void 0 !== zz ? zz : []);
              if (0 === sz.length) return null;
              return sz.map((zz => zz.map((zz => tz(Xz[zz]))).join(", "))).join("; ")
            }(zz.variants, Oz);
          return (0, Wz.jsxs)("li", {
            children: [sz && (0, Wz.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: sz
            }), zz.message, oz && (0, Wz.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: Oz("shaderPack:onlyIn", {
                variants: oz
              })
            })]
          }, tz)
        })), sz > 0 && (0, Wz.jsx)("li", {
          children: Oz("shaderPack:moreErrors", {
            count: String(sz)
          })
        })]
      })
    }
  },
  6188: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Lz,
      d: () => lz
    });
    var Fz = sz(65),
      Wz = sz(1020),
      Xz = sz.n(Wz),
      Oz = sz(4580),
      oz = sz(1306),
      vz = sz(1036),
      Uz = sz(1419),
      Kz = sz(1173),
      uz = sz(106),
      Nz = sz(6161),
      bz = sz(6180);
    class wz extends Error {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(zz, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = zz, this.params = tz
      }
    }
    const Dz = 1024,
      gz = 101010256,
      Hz = 33639248,
      Bz = 67324752,
      Pz = 22,
      rz = 46,
      Yz = 30,
      xz = 65535,
      mz = 65535,
      Jz = 4294967295,
      Iz = 0,
      Cz = 8,
      ez = new TextDecoder;

    function Zz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength),
        sz = function(zz) {
          const tz = zz.byteLength - Pz;
          for (let sz = tz; sz >= Math.max(0, tz - xz); sz--)
            if (zz.getUint32(sz, !0) === gz && sz + Pz + zz.getUint16(sz + 20, !0) <= zz.byteLength) return sz;
          throw new wz("shaderPack:loadNotZip")
        }(tz),
        Fz = tz.getUint16(sz + 8, !0),
        Wz = tz.getUint16(sz + 10, !0),
        Xz = tz.getUint32(sz + 12, !0),
        Oz = tz.getUint32(sz + 16, !0);
      if (Wz === mz || Xz === Jz || Oz === Jz) throw jz();
      if (0 !== tz.getUint16(sz + 4, !0) || 0 !== tz.getUint16(sz + 6, !0) || Fz !== Wz) throw new wz("shaderPack:loadSplitZip");
      if (Wz > Dz) throw new wz("shaderPack:loadTooManyZipEntries", {
        count: String(Dz)
      });
      const oz = Oz + Xz;
      if (oz > sz) throw cz();
      const vz = [];
      let Uz = Oz;
      for (let Kz = 0; Kz < Wz; Kz++) {
        if (Uz + rz > oz || tz.getUint32(Uz, !0) !== Hz) throw cz();
        const sz = tz.getUint16(Uz + 8, !0),
          Fz = tz.getUint16(Uz + 10, !0),
          Wz = tz.getUint32(Uz + 20, !0),
          Xz = tz.getUint32(Uz + 24, !0),
          Kz = tz.getUint16(Uz + 28, !0),
          uz = tz.getUint16(Uz + 30, !0),
          Nz = tz.getUint16(Uz + 32, !0),
          bz = tz.getUint32(Uz + 42, !0),
          wz = Uz + rz;
        if (Uz = wz + Kz + uz + Nz, Uz > oz) throw cz();
        if (Wz === Jz || Xz === Jz || bz === Jz) throw jz();
        const Dz = ez.decode(zz.subarray(wz, wz + Kz)).replace(/\\/g, "/");
        Dz.endsWith("/") || vz.push({
          path: Dz,
          method: Fz,
          encrypted: 0 !== (1 & sz),
          compressedSize: Wz,
          dataOffset: Tz(tz, bz, Wz, Oz)
        })
      }
      return vz
    }
    async function Gz(zz, tz, sz) {
      if (tz.encrypted) throw new wz("shaderPack:loadEncrypted", {
        path: tz.path
      });
      if (tz.method === Iz) return tz.compressedSize > sz ? null : zz.subarray(tz.dataOffset, tz.dataOffset + tz.compressedSize);
      if (tz.method === Cz) return async function(zz, tz, sz) {
        const Fz = new Blob([zz]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Wz = [];
        let Xz = 0;
        try {
          for (;;) {
            const {
              done: zz,
              value: sz
            } = await Fz.read();
            if (zz) break;
            if (Xz += sz.byteLength, Xz > tz) return await Fz.cancel(), null;
            Wz.push(sz)
          }
        } catch (vz) {
          throw new wz("shaderPack:loadDecompressFailed", {
            path: sz
          }, {
            cause: vz
          })
        }
        const Oz = new Uint8Array(Xz);
        let oz = 0;
        for (const Uz of Wz) Oz.set(Uz, oz), oz += Uz.byteLength;
        return Oz
      }(zz.slice(tz.dataOffset, tz.dataOffset + tz.compressedSize), sz, tz.path);
      throw new wz("shaderPack:loadUnsupportedCompression", {
        path: tz.path,
        method: String(tz.method)
      })
    }

    function Tz(zz, tz, sz, Fz) {
      if (tz + Yz > Fz || zz.getUint32(tz, !0) !== Bz) throw cz();
      const Wz = tz + Yz + zz.getUint16(tz + 26, !0) + zz.getUint16(tz + 28, !0);
      if (Wz + sz > Fz) throw cz();
      return Wz
    }

    function cz() {
      return new wz("shaderPack:loadZipDamaged")
    }

    function jz() {
      return new wz("shaderPack:loadZip64")
    }
    const Az = 33554432,
      yz = 65536;
    async function Mz(zz) {
      if (1 === zz.length && zz[0].name.toLowerCase().endsWith(".zip")) {
        const tz = zz[0];
        if (tz.size > Az) throw new wz("shaderPack:loadZipTooBig", {
          megabytes: String(Az / 1048576)
        });
        return async function(zz) {
          return dz(Zz(zz).map((tz => ({
            path: tz.path,
            read: sz => Gz(zz, tz, sz)
          }))))
        }(new Uint8Array(await tz.arrayBuffer()))
      }
      return dz(zz.map((zz => ({
        path: hz(zz),
        read: tz => async function(zz, tz) {
          return zz.size > tz ? null : new Uint8Array(await zz.arrayBuffer())
        }(zz, tz)
      }))))
    }
    async function dz(zz) {
      const tz = function(zz) {
          const tz = zz.length > 0 ? zz[0].path.indexOf("/") : -1;
          if (-1 === tz) return zz;
          const sz = zz[0].path.slice(0, tz + 1);
          if (!zz.every((zz => zz.path.startsWith(sz)))) return zz;
          return zz.map((zz => ({
            ...zz,
            path: zz.path.slice(sz.length)
          })))
        }(zz.filter((zz => ! function(zz) {
          const tz = zz.split("/"),
            sz = tz[tz.length - 1];
          return tz.includes("__MACOSX") || sz.startsWith("._") || ".DS_Store" === sz
        }(zz.path)))),
        sz = tz.filter((zz => "pack.json" === zz.path.toLowerCase()));
      if (0 === sz.length) throw new wz("shaderPack:loadNoManifest");
      if (sz.length > 1) throw new wz("shaderPack:loadDuplicateManifest");
      const Fz = sz[0],
        Wz = await Fz.read(yz);
      if (null === Wz) throw new wz("shaderPack:loadManifestTooBig", {
        kilobytes: String(yz / 1024)
      });
      const Xz = function(zz) {
          let tz;
          try {
            tz = JSON.parse(zz)
          } catch (oz) {
            throw new wz("shaderPack:loadManifestNotJson", {
              error: oz.message
            }, {
              cause: oz
            })
          }
          if ("object" !== typeof tz || null === tz || Array.isArray(tz)) throw new wz("shaderPack:loadManifestNotObject");
          const {
            apiVersion: sz,
            name: Fz,
            author: Wz,
            description: Xz,
            keepCircleShadows: Oz
          } = tz;
          if (void 0 === sz) throw new wz("shaderPack:loadNoApiVersion", {
            version: String(bz.e)
          });
          if (!(0, bz.k)(sz)) throw new wz("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(sz),
            version: String(bz.e)
          });
          if ("string" !== typeof Fz || "" === Fz.trim()) throw new wz("shaderPack:loadNoName");
          if (void 0 !== Wz && null !== Wz && "string" !== typeof Wz) throw new wz("shaderPack:loadAuthorNotString");
          if (void 0 !== Xz && null !== Xz && "string" !== typeof Xz) throw new wz("shaderPack:loadDescriptionNotString");
          if (void 0 !== Oz && "boolean" !== typeof Oz) throw new wz("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: sz,
            name: Fz,
            author: "string" === typeof Wz ? Wz : null,
            description: "string" === typeof Xz && "" !== Xz.trim() ? Xz : null,
            keepCircleShadows: !0 === Oz
          }
        }(Qz(Wz, Fz.path)),
        Oz = tz.filter((zz => zz.path.toLowerCase().endsWith(".wgsl"))).sort(((zz, tz) => (0, Nz.l)(zz.path, tz.path)));
      if (0 === Oz.length) throw new wz("shaderPack:loadNoWgsl");
      if (Oz.length > Nz.c) throw new wz("shaderPack:loadTooManyWgsl", {
        count: String(Nz.c)
      });
      const oz = Oz.find(((zz, tz) => tz > 0 && zz.path === Oz[tz - 1].path));
      if (oz) throw new wz("shaderPack:loadDuplicatePath", {
        path: oz.path
      });
      const vz = [];
      let Uz = Nz.d;
      for (const Kz of Oz) {
        const zz = await Kz.read(Uz);
        if (null === zz) throw new wz("shaderPack:loadSourceTooBig", {
          kilobytes: String(Nz.d / 1024)
        });
        Uz -= zz.byteLength, vz.push({
          path: Kz.path,
          source: Qz(zz, Kz.path)
        })
      }
      return {
        manifest: Xz,
        files: vz
      }
    }

    function hz(zz) {
      return (zz.webkitRelativePath || zz.path || zz.name).replace(/^\.?\//, "")
    }

    function Qz(zz, tz) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(zz)
      } catch (sz) {
        throw new wz("shaderPack:loadNotUtf8", {
          path: tz
        }, {
          cause: sz
        })
      }
    }
    var kz = sz(6174),
      iz = sz(1087);

    function Lz(zz) {
      let {
        busy: tz,
        disabled: sz,
        onFiles: Wz
      } = zz;
      const {
        t: Nz
      } = (0, Kz.B)(), bz = (0, Fz.useRef)(null), wz = !(0, uz.isMobile)(), {
        getRootProps: Dz,
        getInputProps: gz,
        isDragActive: Hz,
        open: Bz
      } = (0, Oz.e)({
        onDrop: Wz,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: sz
      });
      return (0, iz.jsxs)("div", {
        ...Dz({
          className: Xz()("ShaderPackDropZone", {
            ActiveDrag: Hz,
            Disabled: sz
          })
        }),
        children: [(0, iz.jsx)("input", {
          ...gz({
            webkitdirectory: "true"
          })
        }), (0, iz.jsx)("input", {
          ref: bz,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(zz) {
            const tz = Array.from(zz.target.files);
            zz.target.value = "", Wz(tz)
          }
        }), tz && (0, iz.jsx)(oz.d, {}), !tz && (0, iz.jsxs)(iz.Fragment, {
          children: [(0, iz.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, iz.jsx)(vz.c, {
              name: "up-from-bracket"
            })
          }), (0, iz.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Nz(wz ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, iz.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [wz && (0, iz.jsx)(Uz.h, {
              disabled: sz,
              onClick: Bz,
              children: Nz("shaderPack:chooseFolder")
            }), (0, iz.jsx)(Uz.h, {
              disabled: sz,
              onClick: () => {
                bz.current.click()
              },
              children: Nz("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function lz(zz) {
      const {
        t: tz
      } = (0, Kz.B)(), [sz, Wz] = (0, Fz.useState)(!1), [Xz, Oz] = (0, Fz.useState)(null), oz = (0, Fz.useRef)(!1);
      return {
        loading: sz,
        error: Xz,
        setError: Oz,
        onFiles: async function(sz) {
          if (!oz.current) {
            oz.current = !0, Wz(!0), Oz(null);
            try {
              await zz(await Mz(sz))
            } catch (Fz) {
              Fz instanceof wz ? Oz((0, kz.h)(tz, Fz.translationKey, Fz.params)) : (console.error("Failed to load the shader pack", Fz), Oz(tz("shaderPack:unexpectedError")))
            } finally {
              oz.current = !1, Wz(!1)
            }
          }
        }
      }
    }
  },
  6174: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      f: () => Oz,
      h: () => Xz
    });
    var Fz = sz(6180);
    const Wz = [zz => zz.strict ? "strict" : "nonStrict", zz => zz.program];

    function Xz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Fz = {};
      for (const Wz in sz) Fz[Wz] = `\0${Wz}\0`;
      return zz(tz, Fz).replace(/\0(\w+)\0/g, ((zz, tz) => sz[tz]))
    }

    function Oz(zz) {
      return null === zz.file ? null : zz.line > 0 ? `${zz.file}:${zz.line}` : zz.file
    }

    function oz(zz) {
      const tz = new Map(zz.map((zz => [vz(zz).join("."), zz])));
      if (0 === tz.size) return [];
      const sz = Kz([...tz.values()]);
      return 0 === sz[0].length ? [] : sz
    }

    function vz(zz) {
      return Wz.map((tz => tz(zz)))
    }
    const Uz = Wz.map((zz => new Set(Fz.h.map(zz)).size));

    function Kz(zz) {
      const tz = Wz.map((tz => new Set(zz.map(tz)))),
        sz = tz.reduce(((zz, tz) => zz * tz.size), 1),
        Fz = tz.every(((zz, tz) => 1 === zz.size || zz.size === Uz[tz]));
      if (sz === zz.length && Fz) return [Wz.filter(((zz, sz) => 1 === tz[sz].size)).map((tz => tz(zz[0])))];
      let Xz = null;
      for (let Oz = 0; Oz < Wz.length; Oz++) {
        if (1 === tz[Oz].size) continue;
        const sz = uz(zz, Wz[Oz]).flatMap(Kz);
        (null === Xz || sz.length < Xz.length) && (Xz = sz)
      }
      return Xz
    }

    function uz(zz, tz) {
      const sz = new Map;
      for (const Wz of zz) {
        var Fz;
        const zz = tz(Wz);
        sz.set(zz, [...null !== (Fz = sz.get(zz)) && void 0 !== Fz ? Fz : [], Wz])
      }
      return [...sz.values()]
    }
  },
  6180: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz.h,
      h: () => Wz,
      k: () => Fz.p
    });
    var Fz = sz(6161);
    const Wz = [!1, !0].flatMap((zz => ["terrain", "liquid", "model"].map((tz => ({
      strict: zz,
      program: tz
    })))))
  },
  6234: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      forgetShaderPackActiveHint: () => Zz,
      isOtherApiVersion: () => Jz,
      isShaderPackActive: () => rz,
      isShaderPackChangePending: () => mz,
      markShaderPackChangePending: () => xz,
      pageShaderPackValidationVersion: () => Iz,
      reconcileStoredShaderPackHint: () => ez,
      removeShaderPack: () => Pz,
      replaceShaderPack: () => gz,
      saveShaderPack: () => Dz,
      shaderPackNeedsCheck: () => Cz,
      storedPackOutcome: () => Yz,
      storedShaderPackFiles: () => Nz,
      toStoredShaderPack: () => uz
    });
    var Fz = sz(6161),
      Wz = sz(6180),
      Xz = sz(44),
      Oz = sz(3133),
      oz = sz(6237),
      vz = sz(6211);
    const Uz = "shaderPackChangePending";
    let Kz = null;

    function uz(zz, tz, sz) {
      return {
        manifest: zz.manifest,
        files: (0, Fz.u)(zz.files),
        validation: tz,
        ...sz && {
          listing: sz
        }
      }
    }

    function Nz(zz) {
      return Object.keys(zz.files).map((tz => ({
        path: tz,
        source: zz.files[tz]
      })))
    }
    let bz = Promise.resolve();

    function wz(zz) {
      const tz = bz.then(zz);
      return bz = tz.catch((() => {})), tz
    }

    function Dz(zz, tz) {
      return wz((() => Hz(zz, tz)))
    }

    function gz(zz, tz, sz) {
      return wz((async () => JSON.stringify(await (0, oz.g)()) === JSON.stringify(zz) && (null === tz ? (await Bz(), !0) : Hz(tz, sz))))
    }
    async function Hz(zz, tz) {
      const sz = await Xz.e.setItem(oz.e, zz);
      return sz && Gz(zz, tz), sz
    }
    async function Bz() {
      await Xz.e.removeItem(oz.e), Xz.f.removeItem(Oz.e)
    }

    function Pz() {
      return wz(Bz)
    }

    function rz(zz, tz) {
      return "active" === Yz(zz, tz).kind
    }

    function Yz(zz, tz) {
      var sz;
      return null === zz ? {
        kind: "none",
        reason: "nothingStored"
      } : Jz(zz) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.ok) || zz.validation.fromRecheck ? null === tz ? {
        kind: "none",
        reason: "noCompiler"
      } : Cz(zz, tz) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : zz.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function xz() {
      Xz.j.setItem(Uz, performance.timeOrigin)
    }

    function mz() {
      return Xz.j.getItem(Uz) === performance.timeOrigin
    }

    function Jz(zz) {
      return !(0, Wz.k)(zz.manifest.apiVersion)
    }

    function Iz(zz) {
      return Kz ??= zz.dJ((0, vz.shaderPackTextures)()), Kz
    }

    function Cz(zz, tz) {
      var sz;
      return (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.headerVersion) !== Iz(tz)
    }

    function ez(zz) {
      return wz((async () => {
        Gz(await (0, oz.g)(!0), zz)
      }))
    }

    function Zz() {
      return wz((async () => {
        Xz.f.removeItem(Oz.e)
      }))
    }

    function Gz(zz, tz) {
      rz(zz, tz) ? Xz.f.setItem(Oz.e, !0) : Xz.f.removeItem(Oz.e)
    }
  },
  6211: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadShaderPackTextures: () => Oz,
      shaderPackTextures: () => oz
    });
    var Fz = sz(6161);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Xz ??= Promise.all([sz.e(69), sz.e(198)]).then((() => sz(39630))).then((zz => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: tz,
          textureNameToIndex: sz,
          textureAnimationData: Xz
        } = zz;
        return Wz ??= (0, Fz.i)(sz, Xz, tz), Wz
      })), Xz
    }

    function oz() {
      if (null === Wz) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wz
    }
  },
  6225: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => vz,
      f: () => oz
    });
    var Fz = sz(6234),
      Wz = sz(6211),
      Xz = sz(123);
    const Oz = 100;
    async function oz(zz, tz) {
      var sz;
      let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (sz = navigator.gpu) && void 0 !== sz ? sz : null;
      const Oz = zz.k_(tz, (0, Wz.shaderPackTextures)());
      if (Oz.errors.length > 0) return Uz(zz, Oz.errors, Oz.offInStrict);
      const oz = await async function(zz) {
        if (!zz) return null;
        try {
          const tz = await (0, Xz.p)(zz);
          return tz ? await tz.requestDevice() : null
        } catch (tz) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", tz), null
        }
      }(Fz);
      if (!oz) return null;
      let vz = !1;
      oz.lost.then((() => {
        vz = !0
      }));
      try {
        const tz = await Promise.all(Oz.validationModules.map((tz => async function(zz, tz, sz) {
          tz.pushErrorScope("validation");
          const Fz = tz.createShaderModule({
              code: sz.code
            }),
            Wz = tz.popErrorScope(),
            {
              messages: Xz
            } = await Fz.getCompilationInfo(),
            Oz = Xz.filter((zz => "error" === zz.type)).map((tz => zz.mapValidationMessage(sz, tz))),
            oz = await Wz;
          oz && 0 === Oz.length && Oz.push({
            file: null,
            line: 0,
            message: oz.message,
            variants: [sz.key]
          });
          return Oz
        }(zz, oz, tz))));
        return vz ? null : Uz(zz, zz.msz(tz.flat()), Oz.offInStrict)
      } catch (Kz) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Kz), null
      } finally {
        oz.destroy()
      }
    }
    async function vz(zz, tz) {
      var sz;
      if (!(0, Fz.shaderPackNeedsCheck)(zz, tz) || (0, Fz.isOtherApiVersion)(zz)) return zz;
      const Wz = await oz(tz, (0, Fz.storedShaderPackFiles)(zz));
      if (!Wz) return zz;
      const Xz = !1 === (null === (sz = zz.validation) || void 0 === sz ? void 0 : sz.ok) && !zz.validation.fromRecheck,
        Oz = {
          ...zz,
          validation: Xz ? Wz : {
            ...Wz,
            fromRecheck: !0
          }
        };
      return await (0, Fz.replaceShaderPack)(zz, Oz, tz) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Oz
    }

    function Uz(zz, tz, sz) {
      return {
        headerVersion: (0, Fz.pageShaderPackValidationVersion)(zz),
        ok: 0 === tz.length,
        errors: tz.slice(0, Oz),
        moreErrors: Math.max(0, tz.length - Oz),
        offInStrict: sz
      }
    }
  },
  6161: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      d: () => Xz,
      h: () => Fz,
      i: () => wz,
      l: () => Kz,
      p: () => Wz,
      s: () => vz,
      u: () => Uz,
      y: () => uz
    });
    const Fz = 5;

    function Wz(zz) {
      return zz === Fz
    }
    const Xz = 262144,
      Oz = 256,
      oz = 256;

    function vz(zz) {
      if ("object" !== typeof zz || null === zz || Array.isArray(zz)) return "The pack has no files.";
      const tz = [];
      for (const [sz, Fz] of Object.entries(zz)) {
        if ("string" !== typeof Fz) return `${sz} isn't text.`;
        tz.push({
          path: sz,
          source: Fz
        })
      }
      return tz.sort(((zz, tz) => Kz(zz.path, tz.path))),
        function(zz) {
          if (0 === zz.length) return "The pack has no .wgsl files.";
          if (zz.length > Oz) return `The pack has more than ${Oz} .wgsl files.`;
          const tz = new Set;
          for (const {
              path: sz
            }
            of zz) {
            const zz = Nz(sz);
            if (null !== zz) return zz;
            if (tz.has(sz)) return `The pack has two files at ${sz}.`;
            tz.add(sz)
          }
          return uz(zz) > Xz ? `The pack's .wgsl files are over ${Xz/1024} KB in total.` : null
        }(tz) ?? tz
    }

    function Uz(zz) {
      const tz = {};
      for (const sz of zz) tz[sz.path] = sz.source;
      return tz
    }

    function Kz(zz, tz) {
      return zz < tz ? -1 : zz > tz ? 1 : 0
    }

    function uz(zz) {
      const tz = new TextEncoder;
      let sz = 0;
      for (const {
          source: Fz
        }
        of zz) sz += tz.encode(Fz).byteLength;
      return sz
    }

    function Nz(zz) {
      if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
      if (zz.length > oz) return `A file path is over ${oz} characters.`;
      if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
      return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
    }
    const bz = /^(.*)\[rot\[([1-4])$/;

    function wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Fz = new Map;
      tz.forEach(((zz, tz) => {
        let {
          numAnimStates: sz,
          animStartIdx: Wz
        } = zz;
        for (let Xz = 1; Xz < sz; Xz++) Fz.set(Wz + Xz - 1, tz)
      }));
      const Wz = Object.entries(zz),
        Xz = new Map;
      for (const [Dz, gz] of Wz) {
        const zz = bz.exec(Dz);
        "1" === zz?.[2] && Xz.set(zz[1], gz + 1)
      }
      const Oz = zz => {
          const tz = bz.exec(zz);
          return tz && Xz.has(tz[1]) ? {
            root: tz[1],
            rotation: Number(tz[2]) - 1
          } : null
        },
        oz = new Set(Wz.map((zz => {
          let [tz] = zz;
          return Oz(tz)?.root ?? tz
        }))),
        vz = (zz, sz) => {
          const Fz = zz.replace(/_?0$/, "");
          return (tz[sz]?.numAnimStates ?? 0) > 1 && !oz.has(Fz) ? Fz : zz
        },
        Uz = new Map;
      for (const [bz, Dz] of Wz) Uz.set(Dz, vz(Oz(bz)?.root ?? bz, Dz));
      const Kz = Wz.reduce(((zz, tz) => {
          let [, sz] = tz;
          return Math.max(zz, sz + 1)
        }), 0),
        uz = Array.from({
          length: Kz
        }, ((zz, tz) => ({
          id: tz + 1,
          rotation: 0
        }))),
        Nz = new Map,
        wz = new Map;
      for (const [bz, Dz] of Wz) {
        const zz = Oz(bz),
          tz = Fz.get(Dz);
        if (void 0 !== tz) {
          const sz = Uz.get(tz);
          wz.set(bz, {
            name: bz,
            texture: sz,
            kind: "frame"
          }), zz && !wz.has(zz.root) && wz.set(zz.root, {
            name: zz.root,
            texture: sz,
            kind: "frame"
          });
          continue
        }
        const sz = Uz.get(Dz),
          Wz = zz?.root ?? bz;
        if (sz !== Wz && wz.set(Wz, {
            name: Wz,
            texture: sz,
            kind: "frame"
          }), zz) {
          const tz = Xz.get(zz.root);
          uz[Dz] = {
            id: tz,
            rotation: zz.rotation
          }, Nz.set(sz, tz), wz.set(bz, {
            name: bz,
            texture: sz,
            kind: "rotation"
          })
        } else Nz.set(sz, Dz + 1)
      }
      for (const bz of Nz.keys()) wz.delete(bz);
      for (const [bz, Dz] of sz) {
        const zz = Nz.get(Dz);
        void 0 === zz || Nz.has(bz) || (Nz.set(bz, zz), wz.delete(bz))
      }
      return {
        named: [...Nz].sort(((zz, tz) => {
          let [sz] = zz, [Fz] = tz;
          return sz < Fz ? -1 : sz > Fz ? 1 : 0
        })).map((zz => {
          let [tz, sz] = zz;
          return {
            name: tz,
            id: sz
          }
        })),
        aliases: [...wz.values()],
        layers: uz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);