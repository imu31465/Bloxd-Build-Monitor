export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
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
  39648: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => pz,
      installListedShaderPack: () => Oz
    });
    var Ez = bz(6283),
      nz = bz(6307),
      iz = bz(1195),
      lz = bz(6340),
      Mz = bz(6331),
      tz = bz(6379),
      Hz = bz(6371);
    async function Oz(zz) {
      const uz = await (0, lz.loadPageShaderPackCompiler)();
      if (null === uz) return {
        kind: "failed",
        reason: "compiler"
      };
      const bz = await pz(zz, uz);
      return "failed" === bz.kind ? bz : await (0, tz.saveShaderPack)(bz.stored, uz) ? ((0, tz.markShaderPackChangePending)(), bz) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function pz(zz, uz) {
      const bz = await async function(zz) {
        let {
          packId: uz,
          sourceHash: bz
        } = zz;
        try {
          const zz = await fetch(`${iz.clientSideServerUrls.s3Url}/${(0,Ez.K)(uz,bz)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!zz.ok) return console.error(`Failed to download shader pack ${uz} (${zz.status})`), null;
          const nz = await zz.json();
          return "object" !== typeof nz || null === nz ? (console.error(`Shader pack ${uz}'s source isn't an object`), null) : nz
        } catch (nz) {
          return console.error(`Failed to download shader pack ${uz}`, nz), null
        }
      }(zz);
      if (null === bz) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Mz.g)(bz.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const lz = (0, nz.r)(bz.files);
      if ("string" === typeof lz) return console.error(`A listed shader pack breaks the pack rules: ${lz}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Oz = await (0, Hz.g)(uz, lz);
      if (!1 === (null === Oz || void 0 === Oz ? void 0 : Oz.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const pz = {
        manifest: {
          apiVersion: bz.apiVersion,
          name: zz.name,
          author: zz.ownerName,
          description: zz.description || null,
          keepCircleShadows: !0 === bz.keepCircleShadows
        },
        files: lz
      };
      return {
        kind: "loaded",
        stored: (0, tz.toStoredShaderPack)(pz, Oz, {
          packId: zz.packId,
          sourceHash: zz.sourceHash
        })
      }
    }
  },
  40506: (zz, uz, bz) => {
    bz.d(uz, {
      followListingUpdates: () => dz
    });
    var Ez = bz(206),
      nz = bz(20),
      iz = bz(1473),
      lz = bz(1118),
      Mz = bz(6340),
      tz = bz(6331),
      Hz = bz(39648),
      Oz = bz(6379);
    const pz = ["apiVersion", "invalid", "errors"];
    async function dz(zz, uz) {
      const bz = await lz.userContextManager.getCurrentUserContext(),
        dz = await iz.c.getShaderPackVersions(bz, [uz.packId]),
        Fz = function(zz, uz, bz) {
          var Ez;
          if (void 0 === bz || "unlisted" === bz.status) return {
            kind: "none"
          };
          if ("banned" === bz.status) return {
            kind: "remove"
          };
          if (!(0, tz.g)(bz.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: nz,
            name: iz,
            ownerName: lz,
            description: Mz
          } = bz;
          return nz !== uz.sourceHash && nz !== uz.rejectedSourceHash ? {
            kind: "update",
            sourceHash: nz,
            name: iz,
            ownerName: lz,
            description: Mz
          } : iz !== zz.manifest.name || lz !== zz.manifest.author || (Mz || null) !== (null !== (Ez = zz.manifest.description) && void 0 !== Ez ? Ez : null) ? {
            kind: "rename",
            name: iz,
            ownerName: lz,
            description: Mz
          } : {
            kind: "none"
          }
        }(zz, uz, (0, Ez.e)(dz, uz.packId));
      if ("update" === Fz.kind && "landingPage" !== nz.e.get("gameState")) return !1;
      const Zz = "update" === Fz.kind || "rename" === Fz.kind,
        Rz = Zz ? await (0, Mz.loadPageShaderPackCompiler)() : null;
      if (Zz && null === Rz) return console.warn(`Didn't follow shader pack ${uz.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const Kz = await async function(zz, uz, bz, Ez) {
        switch (bz.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...zz, manifest: {
                ...zz.manifest,
                name: bz.name,
                author: bz.ownerName,
                description: bz.description || null
              }
            };
          case "update": {
            if (null === Ez) return;
            const {
              sourceHash: nz,
              name: iz,
              ownerName: lz,
              description: Mz
            } = bz, tz = await (0, Hz.d)({
              packId: uz.packId,
              sourceHash: nz,
              name: iz,
              ownerName: lz,
              description: Mz
            }, Ez);
            if ("loaded" === tz.kind && null !== tz.stored.validation) return tz.stored;
            const Oz = "failed" === tz.kind ? tz.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${uz.packId}: ${Oz}`), "failed" === tz.kind && pz.includes(tz.reason) ? {
              ...zz,
              listing: {
                ...uz,
                rejectedSourceHash: nz
              }
            } : void 0
          }
        }
      }(zz, uz, Fz, Rz);
      return void 0 === Kz || (await (0, Oz.replaceShaderPack)(zz, Kz, Rz) ? (null !== Kz && Kz.files === zz.files || (0, Oz.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
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