export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
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
  39632: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => uz,
      installListedShaderPack: () => Kz
    });
    var Fz = sz(6129),
      Wz = sz(6161),
      Xz = sz(1191),
      Oz = sz(6193),
      oz = sz(6180),
      vz = sz(6234),
      Uz = sz(6225);
    async function Kz(zz) {
      const tz = await (0, Oz.loadPageShaderPackCompiler)();
      if (null === tz) return {
        kind: "failed",
        reason: "compiler"
      };
      const sz = await uz(zz, tz);
      return "failed" === sz.kind ? sz : await (0, vz.saveShaderPack)(sz.stored, tz) ? ((0, vz.markShaderPackChangePending)(), sz) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function uz(zz, tz) {
      const sz = await async function(zz) {
        let {
          packId: tz,
          sourceHash: sz
        } = zz;
        try {
          const zz = await fetch(`${Xz.clientSideServerUrls.s3Url}/${(0,Fz.I)(tz,sz)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!zz.ok) return console.error(`Failed to download shader pack ${tz} (${zz.status})`), null;
          const Wz = await zz.json();
          return "object" !== typeof Wz || null === Wz ? (console.error(`Shader pack ${tz}'s source isn't an object`), null) : Wz
        } catch (Wz) {
          return console.error(`Failed to download shader pack ${tz}`, Wz), null
        }
      }(zz);
      if (null === sz) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, oz.k)(sz.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Oz = (0, Wz.s)(sz.files);
      if ("string" === typeof Oz) return console.error(`A listed shader pack breaks the pack rules: ${Oz}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Kz = await (0, Uz.f)(tz, Oz);
      if (!1 === (null === Kz || void 0 === Kz ? void 0 : Kz.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const uz = {
        manifest: {
          apiVersion: sz.apiVersion,
          name: zz.name,
          author: zz.ownerName,
          description: zz.description || null,
          keepCircleShadows: !0 === sz.keepCircleShadows
        },
        files: Oz
      };
      return {
        kind: "loaded",
        stored: (0, vz.toStoredShaderPack)(uz, Kz, {
          packId: zz.packId,
          sourceHash: zz.sourceHash
        })
      }
    }
  },
  40413: (zz, tz, sz) => {
    sz.d(tz, {
      followListingUpdates: () => Nz
    });
    var Fz = sz(214),
      Wz = sz(30),
      Xz = sz(1466),
      Oz = sz(1120),
      oz = sz(6193),
      vz = sz(6180),
      Uz = sz(39632),
      Kz = sz(6234);
    const uz = ["apiVersion", "invalid", "errors"];
    async function Nz(zz, tz) {
      const sz = await Oz.userContextManager.getCurrentUserContext(),
        Nz = await Xz.d.getShaderPackVersions(sz, [tz.packId]),
        bz = function(zz, tz, sz) {
          var Fz;
          if (void 0 === sz || "unlisted" === sz.status) return {
            kind: "none"
          };
          if ("banned" === sz.status) return {
            kind: "remove"
          };
          if (!(0, vz.k)(sz.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Wz,
            name: Xz,
            ownerName: Oz,
            description: oz
          } = sz;
          return Wz !== tz.sourceHash && Wz !== tz.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Wz,
            name: Xz,
            ownerName: Oz,
            description: oz
          } : Xz !== zz.manifest.name || Oz !== zz.manifest.author || (oz || null) !== (null !== (Fz = zz.manifest.description) && void 0 !== Fz ? Fz : null) ? {
            kind: "rename",
            name: Xz,
            ownerName: Oz,
            description: oz
          } : {
            kind: "none"
          }
        }(zz, tz, (0, Fz.e)(Nz, tz.packId));
      if ("update" === bz.kind && "landingPage" !== Wz.b.get("gameState")) return !1;
      const wz = "update" === bz.kind || "rename" === bz.kind,
        Dz = wz ? await (0, oz.loadPageShaderPackCompiler)() : null;
      if (wz && null === Dz) return console.warn(`Didn't follow shader pack ${tz.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const gz = await async function(zz, tz, sz, Fz) {
        switch (sz.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...zz, manifest: {
                ...zz.manifest,
                name: sz.name,
                author: sz.ownerName,
                description: sz.description || null
              }
            };
          case "update": {
            if (null === Fz) return;
            const {
              sourceHash: Wz,
              name: Xz,
              ownerName: Oz,
              description: oz
            } = sz, vz = await (0, Uz.b)({
              packId: tz.packId,
              sourceHash: Wz,
              name: Xz,
              ownerName: Oz,
              description: oz
            }, Fz);
            if ("loaded" === vz.kind && null !== vz.stored.validation) return vz.stored;
            const Kz = "failed" === vz.kind ? vz.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${tz.packId}: ${Kz}`), "failed" === vz.kind && uz.includes(vz.reason) ? {
              ...zz,
              listing: {
                ...tz,
                rejectedSourceHash: Wz
              }
            } : void 0
          }
        }
      }(zz, tz, bz, Dz);
      return void 0 === gz || (await (0, Kz.replaceShaderPack)(zz, gz, Dz) ? (null !== gz && gz.files === zz.files || (0, Kz.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
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