export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6316: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(6323),
      nz = bz(1089);
    const iz = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function lz(zz) {
      let {
        diagnostics: uz,
        more: bz = 0,
        t: lz
      } = zz;
      return (0, nz.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [uz.map(((zz, uz) => {
          const bz = (0, Ez.e)(zz),
            Mz = function(zz, uz) {
              const bz = (0, Ez.d)(null !== zz && void 0 !== zz ? zz : []);
              if (0 === bz.length) return null;
              return bz.map((zz => zz.map((zz => uz(iz[zz]))).join(", "))).join("; ")
            }(zz.variants, lz);
          return (0, nz.jsxs)("li", {
            children: [bz && (0, nz.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: bz
            }), zz.message, Mz && (0, nz.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: lz("shaderPack:onlyIn", {
                variants: Mz
              })
            })]
          }, uz)
        })), bz > 0 && (0, nz.jsx)("li", {
          children: lz("shaderPack:moreErrors", {
            count: String(bz)
          })
        })]
      })
    }
  },
  6337: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => yz,
      e: () => Dz
    });
    var Ez = bz(56),
      nz = bz(1038),
      iz = bz.n(nz),
      lz = bz(4706),
      Mz = bz(1305),
      tz = bz(1047),
      Hz = bz(1419),
      Oz = bz(1181),
      pz = bz(96),
      dz = bz(6307),
      Fz = bz(6331);
    class Zz extends Error {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(zz, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = zz, this.params = uz
      }
    }
    const Rz = 1024,
      Kz = 101010256,
      wz = 33639248,
      Xz = 67324752,
      fz = 22,
      sz = 46,
      rz = 30,
      oz = 65535,
      Nz = 65535,
      vz = 4294967295,
      xz = 0,
      Jz = 8,
      Az = new TextDecoder;

    function Tz(zz) {
      const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength),
        bz = function(zz) {
          const uz = zz.byteLength - fz;
          for (let bz = uz; bz >= Math.max(0, uz - oz); bz--)
            if (zz.getUint32(bz, !0) === Kz && bz + fz + zz.getUint16(bz + 20, !0) <= zz.byteLength) return bz;
          throw new Zz("shaderPack:loadNotZip")
        }(uz),
        Ez = uz.getUint16(bz + 8, !0),
        nz = uz.getUint16(bz + 10, !0),
        iz = uz.getUint32(bz + 12, !0),
        lz = uz.getUint32(bz + 16, !0);
      if (nz === Nz || iz === vz || lz === vz) throw az();
      if (0 !== uz.getUint16(bz + 4, !0) || 0 !== uz.getUint16(bz + 6, !0) || Ez !== nz) throw new Zz("shaderPack:loadSplitZip");
      if (nz > Rz) throw new Zz("shaderPack:loadTooManyZipEntries", {
        count: String(Rz)
      });
      const Mz = lz + iz;
      if (Mz > bz) throw Gz();
      const tz = [];
      let Hz = lz;
      for (let Oz = 0; Oz < nz; Oz++) {
        if (Hz + sz > Mz || uz.getUint32(Hz, !0) !== wz) throw Gz();
        const bz = uz.getUint16(Hz + 8, !0),
          Ez = uz.getUint16(Hz + 10, !0),
          nz = uz.getUint32(Hz + 20, !0),
          iz = uz.getUint32(Hz + 24, !0),
          Oz = uz.getUint16(Hz + 28, !0),
          pz = uz.getUint16(Hz + 30, !0),
          dz = uz.getUint16(Hz + 32, !0),
          Fz = uz.getUint32(Hz + 42, !0),
          Zz = Hz + sz;
        if (Hz = Zz + Oz + pz + dz, Hz > Mz) throw Gz();
        if (nz === vz || iz === vz || Fz === vz) throw az();
        const Rz = Az.decode(zz.subarray(Zz, Zz + Oz)).replace(/\\/g, "/");
        Rz.endsWith("/") || tz.push({
          path: Rz,
          method: Ez,
          encrypted: 0 !== (1 & bz),
          compressedSize: nz,
          dataOffset: Pz(uz, Fz, nz, lz)
        })
      }
      return tz
    }
    async function Lz(zz, uz, bz) {
      if (uz.encrypted) throw new Zz("shaderPack:loadEncrypted", {
        path: uz.path
      });
      if (uz.method === xz) return uz.compressedSize > bz ? null : zz.subarray(uz.dataOffset, uz.dataOffset + uz.compressedSize);
      if (uz.method === Jz) return async function(zz, uz, bz) {
        const Ez = new Blob([zz]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          nz = [];
        let iz = 0;
        try {
          for (;;) {
            const {
              done: zz,
              value: bz
            } = await Ez.read();
            if (zz) break;
            if (iz += bz.byteLength, iz > uz) return await Ez.cancel(), null;
            nz.push(bz)
          }
        } catch (tz) {
          throw new Zz("shaderPack:loadDecompressFailed", {
            path: bz
          }, {
            cause: tz
          })
        }
        const lz = new Uint8Array(iz);
        let Mz = 0;
        for (const Hz of nz) lz.set(Hz, Mz), Mz += Hz.byteLength;
        return lz
      }(zz.slice(uz.dataOffset, uz.dataOffset + uz.compressedSize), bz, uz.path);
      throw new Zz("shaderPack:loadUnsupportedCompression", {
        path: uz.path,
        method: String(uz.method)
      })
    }

    function Pz(zz, uz, bz, Ez) {
      if (uz + rz > Ez || zz.getUint32(uz, !0) !== Xz) throw Gz();
      const nz = uz + rz + zz.getUint16(uz + 26, !0) + zz.getUint16(uz + 28, !0);
      if (nz + bz > Ez) throw Gz();
      return nz
    }

    function Gz() {
      return new Zz("shaderPack:loadZipDamaged")
    }

    function az() {
      return new Zz("shaderPack:loadZip64")
    }
    const Vz = 33554432,
      mz = 65536;
    async function qz(zz) {
      if (1 === zz.length && zz[0].name.toLowerCase().endsWith(".zip")) {
        const uz = zz[0];
        if (uz.size > Vz) throw new Zz("shaderPack:loadZipTooBig", {
          megabytes: String(Vz / 1048576)
        });
        return async function(zz) {
          return hz(Tz(zz).map((uz => ({
            path: uz.path,
            read: bz => Lz(zz, uz, bz)
          }))))
        }(new Uint8Array(await uz.arrayBuffer()))
      }
      return hz(zz.map((zz => ({
        path: Uz(zz),
        read: uz => async function(zz, uz) {
          return zz.size > uz ? null : new Uint8Array(await zz.arrayBuffer())
        }(zz, uz)
      }))))
    }
    async function hz(zz) {
      const uz = function(zz) {
          const uz = zz.length > 0 ? zz[0].path.indexOf("/") : -1;
          if (-1 === uz) return zz;
          const bz = zz[0].path.slice(0, uz + 1);
          if (!zz.every((zz => zz.path.startsWith(bz)))) return zz;
          return zz.map((zz => ({
            ...zz,
            path: zz.path.slice(bz.length)
          })))
        }(zz.filter((zz => ! function(zz) {
          const uz = zz.split("/"),
            bz = uz[uz.length - 1];
          return uz.includes("__MACOSX") || bz.startsWith("._") || ".DS_Store" === bz
        }(zz.path)))),
        bz = uz.filter((zz => "pack.json" === zz.path.toLowerCase()));
      if (0 === bz.length) throw new Zz("shaderPack:loadNoManifest");
      if (bz.length > 1) throw new Zz("shaderPack:loadDuplicateManifest");
      const Ez = bz[0],
        nz = await Ez.read(mz);
      if (null === nz) throw new Zz("shaderPack:loadManifestTooBig", {
        kilobytes: String(mz / 1024)
      });
      const iz = function(zz) {
          let uz;
          try {
            uz = JSON.parse(zz)
          } catch (Mz) {
            throw new Zz("shaderPack:loadManifestNotJson", {
              error: Mz.message
            }, {
              cause: Mz
            })
          }
          if ("object" !== typeof uz || null === uz || Array.isArray(uz)) throw new Zz("shaderPack:loadManifestNotObject");
          const {
            apiVersion: bz,
            name: Ez,
            author: nz,
            description: iz,
            keepCircleShadows: lz
          } = uz;
          if (void 0 === bz) throw new Zz("shaderPack:loadNoApiVersion", {
            version: String(Fz.d)
          });
          if (!(0, Fz.g)(bz)) throw new Zz("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(bz),
            version: String(Fz.d)
          });
          if ("string" !== typeof Ez || "" === Ez.trim()) throw new Zz("shaderPack:loadNoName");
          if (void 0 !== nz && null !== nz && "string" !== typeof nz) throw new Zz("shaderPack:loadAuthorNotString");
          if (void 0 !== iz && null !== iz && "string" !== typeof iz) throw new Zz("shaderPack:loadDescriptionNotString");
          if (void 0 !== lz && "boolean" !== typeof lz) throw new Zz("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: bz,
            name: Ez,
            author: "string" === typeof nz ? nz : null,
            description: "string" === typeof iz && "" !== iz.trim() ? iz : null,
            keepCircleShadows: !0 === lz
          }
        }(cz(nz, Ez.path)),
        lz = uz.filter((zz => zz.path.toLowerCase().endsWith(".wgsl"))).sort(((zz, uz) => (0, dz.n)(zz.path, uz.path)));
      if (0 === lz.length) throw new Zz("shaderPack:loadNoWgsl");
      if (lz.length > dz.c) throw new Zz("shaderPack:loadTooManyWgsl", {
        count: String(dz.c)
      });
      const Mz = lz.find(((zz, uz) => uz > 0 && zz.path === lz[uz - 1].path));
      if (Mz) throw new Zz("shaderPack:loadDuplicatePath", {
        path: Mz.path
      });
      const tz = [];
      let Hz = dz.e;
      for (const Oz of lz) {
        const zz = await Oz.read(Hz);
        if (null === zz) throw new Zz("shaderPack:loadSourceTooBig", {
          kilobytes: String(dz.e / 1024)
        });
        Hz -= zz.byteLength, tz.push({
          path: Oz.path,
          source: cz(zz, Oz.path)
        })
      }
      return {
        manifest: iz,
        files: tz
      }
    }

    function Uz(zz) {
      return (zz.webkitRelativePath || zz.path || zz.name).replace(/^\.?\//, "")
    }

    function cz(zz, uz) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(zz)
      } catch (bz) {
        throw new Zz("shaderPack:loadNotUtf8", {
          path: uz
        }, {
          cause: bz
        })
      }
    }
    var gz = bz(6323),
      Sz = bz(1089);

    function yz(zz) {
      let {
        busy: uz,
        disabled: bz,
        onFiles: nz
      } = zz;
      const {
        t: dz
      } = (0, Oz.F)(), Fz = (0, Ez.useRef)(null), Zz = !(0, pz.isMobile)(), {
        getRootProps: Rz,
        getInputProps: Kz,
        isDragActive: wz,
        open: Xz
      } = (0, lz.b)({
        onDrop: nz,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: bz
      });
      return (0, Sz.jsxs)("div", {
        ...Rz({
          className: iz()("ShaderPackDropZone", {
            ActiveDrag: wz,
            Disabled: bz
          })
        }),
        children: [(0, Sz.jsx)("input", {
          ...Kz({
            webkitdirectory: "true"
          })
        }), (0, Sz.jsx)("input", {
          ref: Fz,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(zz) {
            const uz = Array.from(zz.target.files);
            zz.target.value = "", nz(uz)
          }
        }), uz && (0, Sz.jsx)(Mz.c, {}), !uz && (0, Sz.jsxs)(Sz.Fragment, {
          children: [(0, Sz.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Sz.jsx)(tz.c, {
              name: "up-from-bracket"
            })
          }), (0, Sz.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: dz(Zz ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Sz.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [Zz && (0, Sz.jsx)(Hz.f, {
              disabled: bz,
              onClick: Xz,
              children: dz("shaderPack:chooseFolder")
            }), (0, Sz.jsx)(Hz.f, {
              disabled: bz,
              onClick: () => {
                Fz.current.click()
              },
              children: dz("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function Dz(zz) {
      const {
        t: uz
      } = (0, Oz.F)(), [bz, nz] = (0, Ez.useState)(!1), [iz, lz] = (0, Ez.useState)(null), Mz = (0, Ez.useRef)(!1);
      return {
        loading: bz,
        error: iz,
        setError: lz,
        onFiles: async function(bz) {
          if (!Mz.current) {
            Mz.current = !0, nz(!0), lz(null);
            try {
              await zz(await qz(bz))
            } catch (Ez) {
              Ez instanceof Zz ? lz((0, gz.h)(uz, Ez.translationKey, Ez.params)) : (console.error("Failed to load the shader pack", Ez), lz(uz("shaderPack:unexpectedError")))
            } finally {
              Mz.current = !1, nz(!1)
            }
          }
        }
      }
    }
  },
  6323: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      e: () => lz,
      h: () => iz
    });
    var Ez = bz(6331);
    const nz = [zz => zz.strict ? "strict" : "nonStrict", zz => zz.program];

    function iz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ez = {};
      for (const nz in bz) Ez[nz] = `\0${nz}\0`;
      return zz(uz, Ez).replace(/\0(\w+)\0/g, ((zz, uz) => bz[uz]))
    }

    function lz(zz) {
      return null === zz.file ? null : zz.line > 0 ? `${zz.file}:${zz.line}` : zz.file
    }

    function Mz(zz) {
      const uz = new Map(zz.map((zz => [tz(zz).join("."), zz])));
      if (0 === uz.size) return [];
      const bz = Oz([...uz.values()]);
      return 0 === bz[0].length ? [] : bz
    }

    function tz(zz) {
      return nz.map((uz => uz(zz)))
    }
    const Hz = nz.map((zz => new Set(Ez.f.map(zz)).size));

    function Oz(zz) {
      const uz = nz.map((uz => new Set(zz.map(uz)))),
        bz = uz.reduce(((zz, uz) => zz * uz.size), 1),
        Ez = uz.every(((zz, uz) => 1 === zz.size || zz.size === Hz[uz]));
      if (bz === zz.length && Ez) return [nz.filter(((zz, bz) => 1 === uz[bz].size)).map((uz => uz(zz[0])))];
      let iz = null;
      for (let lz = 0; lz < nz.length; lz++) {
        if (1 === uz[lz].size) continue;
        const bz = pz(zz, nz[lz]).flatMap(Oz);
        (null === iz || bz.length < iz.length) && (iz = bz)
      }
      return iz
    }

    function pz(zz, uz) {
      const bz = new Map;
      for (const nz of zz) {
        var Ez;
        const zz = uz(nz);
        bz.set(zz, [...null !== (Ez = bz.get(zz)) && void 0 !== Ez ? Ez : [], nz])
      }
      return [...bz.values()]
    }
  },
  6331: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez.i,
      f: () => nz,
      g: () => Ez.q
    });
    var Ez = bz(6307);
    const nz = [!1, !0].flatMap((zz => ["terrain", "liquid", "model"].map((uz => ({
      strict: zz,
      program: uz
    })))))
  },
  6379: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      forgetShaderPackActiveHint: () => Tz,
      isOtherApiVersion: () => vz,
      isShaderPackActive: () => sz,
      isShaderPackChangePending: () => Nz,
      markShaderPackChangePending: () => oz,
      pageShaderPackValidationVersion: () => xz,
      reconcileStoredShaderPackHint: () => Az,
      removeShaderPack: () => fz,
      replaceShaderPack: () => Kz,
      saveShaderPack: () => Rz,
      shaderPackNeedsCheck: () => Jz,
      storedPackOutcome: () => rz,
      storedShaderPackFiles: () => dz,
      toStoredShaderPack: () => pz
    });
    var Ez = bz(6307),
      nz = bz(6331),
      iz = bz(33),
      lz = bz(3198),
      Mz = bz(6382),
      tz = bz(6352);
    const Hz = "shaderPackChangePending";
    let Oz = null;

    function pz(zz, uz, bz) {
      return {
        manifest: zz.manifest,
        files: (0, Ez.s)(zz.files),
        validation: uz,
        ...bz && {
          listing: bz
        }
      }
    }

    function dz(zz) {
      return Object.keys(zz.files).map((uz => ({
        path: uz,
        source: zz.files[uz]
      })))
    }
    let Fz = Promise.resolve();

    function Zz(zz) {
      const uz = Fz.then(zz);
      return Fz = uz.catch((() => {})), uz
    }

    function Rz(zz, uz) {
      return Zz((() => wz(zz, uz)))
    }

    function Kz(zz, uz, bz) {
      return Zz((async () => JSON.stringify(await (0, Mz.e)()) === JSON.stringify(zz) && (null === uz ? (await Xz(), !0) : wz(uz, bz))))
    }
    async function wz(zz, uz) {
      const bz = await iz.d.setItem(Mz.d, zz);
      return bz && Lz(zz, uz), bz
    }
    async function Xz() {
      await iz.d.removeItem(Mz.d), iz.g.removeItem(lz.b)
    }

    function fz() {
      return Zz(Xz)
    }

    function sz(zz, uz) {
      return "active" === rz(zz, uz).kind
    }

    function rz(zz, uz) {
      var bz;
      return null === zz ? {
        kind: "none",
        reason: "nothingStored"
      } : vz(zz) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.ok) || zz.validation.fromRecheck ? null === uz ? {
        kind: "none",
        reason: "noCompiler"
      } : Jz(zz, uz) ? {
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

    function oz() {
      iz.h.setItem(Hz, performance.timeOrigin)
    }

    function Nz() {
      return iz.h.getItem(Hz) === performance.timeOrigin
    }

    function vz(zz) {
      return !(0, nz.g)(zz.manifest.apiVersion)
    }

    function xz(zz) {
      return Oz ??= zz.hA((0, tz.shaderPackTextures)()), Oz
    }

    function Jz(zz, uz) {
      var bz;
      return (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.headerVersion) !== xz(uz)
    }

    function Az(zz) {
      return Zz((async () => {
        Lz(await (0, Mz.e)(!0), zz)
      }))
    }

    function Tz() {
      return Zz((async () => {
        iz.g.removeItem(lz.b)
      }))
    }

    function Lz(zz, uz) {
      sz(zz, uz) ? iz.g.setItem(lz.b, !0) : iz.g.removeItem(lz.b)
    }
  },
  6352: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadShaderPackTextures: () => lz,
      shaderPackTextures: () => Mz
    });
    var Ez = bz(6307);
    let nz = null,
      iz = null;

    function lz() {
      return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: uz,
          textureNameToIndex: bz,
          textureAnimationData: iz
        } = zz;
        return nz ??= (0, Ez.m)(bz, iz, uz), nz
      })), iz
    }

    function Mz() {
      if (null === nz) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nz
    }
  },
  6371: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      g: () => Mz
    });
    var Ez = bz(6379),
      nz = bz(6352),
      iz = bz(115);
    const lz = 100;
    async function Mz(zz, uz) {
      var bz;
      let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (bz = navigator.gpu) && void 0 !== bz ? bz : null;
      const lz = zz.B_(uz, (0, nz.shaderPackTextures)());
      if (lz.errors.length > 0) return Hz(zz, lz.errors, lz.offInStrict);
      const Mz = await async function(zz) {
        if (!zz) return null;
        try {
          const uz = await (0, iz.w)(zz);
          return uz ? await uz.requestDevice() : null
        } catch (uz) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", uz), null
        }
      }(Ez);
      if (!Mz) return null;
      let tz = !1;
      Mz.lost.then((() => {
        tz = !0
      }));
      try {
        const uz = await Promise.all(lz.validationModules.map((uz => async function(zz, uz, bz) {
          uz.pushErrorScope("validation");
          const Ez = uz.createShaderModule({
              code: bz.code
            }),
            nz = uz.popErrorScope(),
            {
              messages: iz
            } = await Ez.getCompilationInfo(),
            lz = iz.filter((zz => "error" === zz.type)).map((uz => zz.mapValidationMessage(bz, uz))),
            Mz = await nz;
          Mz && 0 === lz.length && lz.push({
            file: null,
            line: 0,
            message: Mz.message,
            variants: [bz.key]
          });
          return lz
        }(zz, Mz, uz))));
        return tz ? null : Hz(zz, zz.tbz(uz.flat()), lz.offInStrict)
      } catch (Oz) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Oz), null
      } finally {
        Mz.destroy()
      }
    }
    async function tz(zz, uz) {
      var bz;
      if (!(0, Ez.shaderPackNeedsCheck)(zz, uz) || (0, Ez.isOtherApiVersion)(zz)) return zz;
      const nz = await Mz(uz, (0, Ez.storedShaderPackFiles)(zz));
      if (!nz) return zz;
      const iz = !1 === (null === (bz = zz.validation) || void 0 === bz ? void 0 : bz.ok) && !zz.validation.fromRecheck,
        lz = {
          ...zz,
          validation: iz ? nz : {
            ...nz,
            fromRecheck: !0
          }
        };
      return await (0, Ez.replaceShaderPack)(zz, lz, uz) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), lz
    }

    function Hz(zz, uz, bz) {
      return {
        headerVersion: (0, Ez.pageShaderPackValidationVersion)(zz),
        ok: 0 === uz.length,
        errors: uz.slice(0, lz),
        moreErrors: Math.max(0, uz.length - lz),
        offInStrict: bz
      }
    }
  },
  6307: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      e: () => iz,
      i: () => Ez,
      m: () => Zz,
      n: () => Oz,
      q: () => nz,
      r: () => tz,
      s: () => Hz,
      u: () => pz
    });
    const Ez = 5;

    function nz(zz) {
      return zz === Ez
    }
    const iz = 262144,
      lz = 256,
      Mz = 256;

    function tz(zz) {
      if ("object" !== typeof zz || null === zz || Array.isArray(zz)) return "The pack has no files.";
      const uz = [];
      for (const [bz, Ez] of Object.entries(zz)) {
        if ("string" !== typeof Ez) return `${bz} isn't text.`;
        uz.push({
          path: bz,
          source: Ez
        })
      }
      return uz.sort(((zz, uz) => Oz(zz.path, uz.path))),
        function(zz) {
          if (0 === zz.length) return "The pack has no .wgsl files.";
          if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
          const uz = new Set;
          for (const {
              path: bz
            }
            of zz) {
            const zz = dz(bz);
            if (null !== zz) return zz;
            if (uz.has(bz)) return `The pack has two files at ${bz}.`;
            uz.add(bz)
          }
          return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
        }(uz) ?? uz
    }

    function Hz(zz) {
      const uz = {};
      for (const bz of zz) uz[bz.path] = bz.source;
      return uz
    }

    function Oz(zz, uz) {
      return zz < uz ? -1 : zz > uz ? 1 : 0
    }

    function pz(zz) {
      const uz = new TextEncoder;
      let bz = 0;
      for (const {
          source: Ez
        }
        of zz) bz += uz.encode(Ez).byteLength;
      return bz
    }

    function dz(zz) {
      if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
      if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
      if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
      return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
    }
    const Fz = /^(.*)\[rot\[([1-4])$/;

    function Zz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ez = new Map;
      uz.forEach(((zz, uz) => {
        let {
          numAnimStates: bz,
          animStartIdx: nz
        } = zz;
        for (let iz = 1; iz < bz; iz++) Ez.set(nz + iz - 1, uz)
      }));
      const nz = Object.entries(zz),
        iz = new Map;
      for (const [Rz, Kz] of nz) {
        const zz = Fz.exec(Rz);
        "1" === zz?.[2] && iz.set(zz[1], Kz + 1)
      }
      const lz = zz => {
          const uz = Fz.exec(zz);
          return uz && iz.has(uz[1]) ? {
            root: uz[1],
            rotation: Number(uz[2]) - 1
          } : null
        },
        Mz = new Set(nz.map((zz => {
          let [uz] = zz;
          return lz(uz)?.root ?? uz
        }))),
        tz = (zz, bz) => {
          const Ez = zz.replace(/_?0$/, "");
          return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
        },
        Hz = new Map;
      for (const [Fz, Rz] of nz) Hz.set(Rz, tz(lz(Fz)?.root ?? Fz, Rz));
      const Oz = nz.reduce(((zz, uz) => {
          let [, bz] = uz;
          return Math.max(zz, bz + 1)
        }), 0),
        pz = Array.from({
          length: Oz
        }, ((zz, uz) => ({
          id: uz + 1,
          rotation: 0
        }))),
        dz = new Map,
        Zz = new Map;
      for (const [Fz, Rz] of nz) {
        const zz = lz(Fz),
          uz = Ez.get(Rz);
        if (void 0 !== uz) {
          const bz = Hz.get(uz);
          Zz.set(Fz, {
            name: Fz,
            texture: bz,
            kind: "frame"
          }), zz && !Zz.has(zz.root) && Zz.set(zz.root, {
            name: zz.root,
            texture: bz,
            kind: "frame"
          });
          continue
        }
        const bz = Hz.get(Rz),
          nz = zz?.root ?? Fz;
        if (bz !== nz && Zz.set(nz, {
            name: nz,
            texture: bz,
            kind: "frame"
          }), zz) {
          const uz = iz.get(zz.root);
          pz[Rz] = {
            id: uz,
            rotation: zz.rotation
          }, dz.set(bz, uz), Zz.set(Fz, {
            name: Fz,
            texture: bz,
            kind: "rotation"
          })
        } else dz.set(bz, Rz + 1)
      }
      for (const Fz of dz.keys()) Zz.delete(Fz);
      for (const [Fz, Rz] of bz) {
        const zz = dz.get(Rz);
        void 0 === zz || dz.has(Fz) || (dz.set(Fz, zz), Zz.delete(Fz))
      }
      return {
        named: [...dz].sort(((zz, uz) => {
          let [bz] = zz, [Ez] = uz;
          return bz < Ez ? -1 : bz > Ez ? 1 : 0
        })).map((zz => {
          let [uz, bz] = zz;
          return {
            name: uz,
            id: bz
          }
        })),
        aliases: [...Zz.values()],
        layers: pz
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);