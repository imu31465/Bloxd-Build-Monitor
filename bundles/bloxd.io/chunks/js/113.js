export const id = 113;
export const ids = [113, 116, 136, 137];
export const modules = {
  5076: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.i,
      d: () => sD,
      h: () => pD.q
    });
    var pD = wD(5084);
    const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
      strict: DD,
      program: zD
    })))))
  },
  40420: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => AD,
      installListedShaderPack: () => RD
    });
    var pD = wD(6594),
      sD = wD(5084),
      KD = wD(1211),
      rD = wD(6645),
      LD = wD(5076),
      cD = wD(6691),
      gD = wD(6682);
    async function RD(DD) {
      const zD = await (0, rD.loadPageShaderPackCompiler)();
      if (null === zD) return {
        kind: "failed",
        reason: "compiler"
      };
      const wD = await AD(DD, zD);
      return "failed" === wD.kind ? wD : await (0, cD.saveShaderPack)(wD.stored, zD) ? ((0, cD.markShaderPackChangePending)(), wD) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function AD(DD, zD) {
      const wD = await async function(DD) {
        let {
          packId: zD,
          sourceHash: wD
        } = DD;
        try {
          const DD = await fetch(`${KD.clientSideServerUrls.s3Url}/${(0,pD.M)(zD,wD)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!DD.ok) return console.error(`Failed to download shader pack ${zD} (${DD.status})`), null;
          const sD = await DD.json();
          return "object" !== typeof sD || null === sD ? (console.error(`Shader pack ${zD}'s source isn't an object`), null) : sD
        } catch (sD) {
          return console.error(`Failed to download shader pack ${zD}`, sD), null
        }
      }(DD);
      if (null === wD) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, LD.h)(wD.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const rD = (0, sD.v)(wD.files);
      if ("string" === typeof rD) return console.error(`A listed shader pack breaks the pack rules: ${rD}`), {
        kind: "failed",
        reason: "invalid"
      };
      const RD = await (0, gD.h)(zD, rD);
      if (!1 === (null === RD || void 0 === RD ? void 0 : RD.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const AD = {
        manifest: {
          apiVersion: wD.apiVersion,
          name: DD.name,
          author: DD.ownerName,
          description: DD.description || null,
          keepCircleShadows: !0 === wD.keepCircleShadows
        },
        files: rD
      };
      return {
        kind: "loaded",
        stored: (0, cD.toStoredShaderPack)(AD, RD, {
          packId: DD.packId,
          sourceHash: DD.sourceHash
        })
      }
    }
  },
  6691: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      forgetShaderPackActiveHint: () => xD,
      isOtherApiVersion: () => XD,
      isShaderPackActive: () => OD,
      isShaderPackChangePending: () => QD,
      markShaderPackChangePending: () => ED,
      pageShaderPackValidationVersion: () => VD,
      reconcileStoredShaderPackHint: () => CD,
      removeShaderPack: () => MD,
      replaceShaderPack: () => GD,
      saveShaderPack: () => BD,
      shaderPackNeedsCheck: () => PD,
      storedPackOutcome: () => JD,
      storedShaderPackFiles: () => UD,
      toStoredShaderPack: () => AD
    });
    var pD = wD(5084),
      sD = wD(5076),
      KD = wD(35),
      rD = wD(3462),
      LD = wD(6693),
      cD = wD(6664);
    const gD = "shaderPackChangePending";
    let RD = null;

    function AD(DD, zD, wD) {
      return {
        manifest: DD.manifest,
        files: (0, pD.z)(DD.files),
        validation: zD,
        ...wD && {
          listing: wD
        }
      }
    }

    function UD(DD) {
      return Object.keys(DD.files).map((zD => ({
        path: zD,
        source: DD.files[zD]
      })))
    }
    let fD = Promise.resolve();

    function ID(DD) {
      const zD = fD.then(DD);
      return fD = zD.catch((() => {})), zD
    }

    function BD(DD, zD) {
      return ID((() => hD(DD, zD)))
    }

    function GD(DD, zD, wD) {
      return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
    }
    async function hD(DD, zD) {
      const wD = await KD.g.setItem(LD.b, DD);
      return wD && TD(DD, zD), wD
    }
    async function nD() {
      await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
    }

    function MD() {
      return ID(nD)
    }

    function OD(DD, zD) {
      return "active" === JD(DD, zD).kind
    }

    function JD(DD, zD) {
      var wD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : XD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
        kind: "none",
        reason: "noCompiler"
      } : PD(DD, zD) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : DD.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ED() {
      KD.k.setItem(gD, performance.timeOrigin)
    }

    function QD() {
      return KD.k.getItem(gD) === performance.timeOrigin
    }

    function XD(DD) {
      return !(0, sD.h)(DD.manifest.apiVersion)
    }

    function VD(DD) {
      return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
    }

    function PD(DD, zD) {
      var wD;
      return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
    }

    function CD(DD) {
      return ID((async () => {
        TD(await (0, LD.c)(!0), DD)
      }))
    }

    function xD() {
      return ID((async () => {
        KD.h.removeItem(rD.e)
      }))
    }

    function TD(DD, zD) {
      OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
    }
  },
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  },
  6682: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      h: () => LD
    });
    var pD = wD(6691),
      sD = wD(6664),
      KD = wD(119);
    const rD = 100;
    async function LD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
      const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
      if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
      const LD = await async function(DD) {
        if (!DD) return null;
        try {
          const zD = await (0, KD.x)(DD);
          return zD ? await zD.requestDevice() : null
        } catch (zD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
        }
      }(pD);
      if (!LD) return null;
      let cD = !1;
      LD.lost.then((() => {
        cD = !0
      }));
      try {
        const zD = await Promise.all(rD.validationModules.map((zD => async function(DD, zD, wD) {
          zD.pushErrorScope("validation");
          const pD = zD.createShaderModule({
              code: wD.code
            }),
            sD = zD.popErrorScope(),
            {
              messages: KD
            } = await pD.getCompilationInfo(),
            rD = KD.filter((DD => "error" === DD.type)).map((zD => DD.mapValidationMessage(wD, zD))),
            LD = await sD;
          LD && 0 === rD.length && rD.push({
            file: null,
            line: 0,
            message: LD.message,
            variants: [wD.key]
          });
          return rD
        }(DD, LD, zD))));
        return cD ? null : gD(DD, DD.RpD(zD.flat()), rD.offInStrict)
      } catch (RD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RD), null
      } finally {
        LD.destroy()
      }
    }
    async function cD(DD, zD) {
      var wD;
      if (!(0, pD.shaderPackNeedsCheck)(DD, zD) || (0, pD.isOtherApiVersion)(DD)) return DD;
      const sD = await LD(zD, (0, pD.storedShaderPackFiles)(DD));
      if (!sD) return DD;
      const KD = !1 === (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) && !DD.validation.fromRecheck,
        rD = {
          ...DD,
          validation: KD ? sD : {
            ...sD,
            fromRecheck: !0
          }
        };
      return await (0, pD.replaceShaderPack)(DD, rD, zD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), rD
    }

    function gD(DD, zD, wD) {
      return {
        headerVersion: (0, pD.pageShaderPackValidationVersion)(DD),
        ok: 0 === zD.length,
        errors: zD.slice(0, rD),
        moreErrors: Math.max(0, zD.length - rD),
        offInStrict: wD
      }
    }
  },
  5084: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => UD,
      d: () => LD,
      e: () => rD,
      i: () => pD,
      m: () => BD,
      n: () => AD,
      q: () => sD,
      r: () => KD,
      v: () => gD,
      z: () => RD
    });
    const pD = 5;

    function sD(DD) {
      return DD === pD
    }

    function KD(DD) {
      return [...DD.features]
    }
    const rD = 262144,
      LD = 256,
      cD = 256;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const zD = [];
      for (const [wD, pD] of Object.entries(DD)) {
        if ("string" !== typeof pD) return `${wD} isn't text.`;
        zD.push({
          path: wD,
          source: pD
        })
      }
      return zD.sort(((DD, zD) => AD(DD.path, zD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
          const zD = new Set;
          for (const {
              path: wD
            }
            of DD) {
            const DD = fD(wD);
            if (null !== DD) return DD;
            if (zD.has(wD)) return `The pack has two files at ${wD}.`;
            zD.add(wD)
          }
          return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
        }(zD) ?? zD
    }

    function RD(DD) {
      const zD = {};
      for (const wD of DD) zD[wD.path] = wD.source;
      return zD
    }

    function AD(DD, zD) {
      return DD < zD ? -1 : DD > zD ? 1 : 0
    }

    function UD(DD) {
      const zD = new TextEncoder;
      let wD = 0;
      for (const {
          source: pD
        }
        of DD) wD += zD.encode(pD).byteLength;
      return wD
    }

    function fD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > cD) return `A file path is over ${cD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const ID = /^(.*)\[rot\[([1-4])$/;

    function BD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pD = new Map;
      zD.forEach(((DD, zD) => {
        let {
          numAnimStates: wD,
          animStartIdx: sD
        } = DD;
        for (let KD = 1; KD < wD; KD++) pD.set(sD + KD - 1, zD)
      }));
      const sD = Object.entries(DD),
        KD = new Map;
      for (const [BD, GD] of sD) {
        const DD = ID.exec(BD);
        "1" === DD?.[2] && KD.set(DD[1], GD + 1)
      }
      const rD = DD => {
          const zD = ID.exec(DD);
          return zD && KD.has(zD[1]) ? {
            root: zD[1],
            rotation: Number(zD[2]) - 1
          } : null
        },
        LD = new Set(sD.map((DD => {
          let [zD] = DD;
          return rD(zD)?.root ?? zD
        }))),
        cD = (DD, wD) => {
          const pD = DD.replace(/_?0$/, "");
          return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
        },
        gD = new Map;
      for (const [ID, BD] of sD) gD.set(BD, cD(rD(ID)?.root ?? ID, BD));
      const RD = sD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return Math.max(DD, wD + 1)
        }), 0),
        AD = Array.from({
          length: RD
        }, ((DD, zD) => ({
          id: zD + 1,
          rotation: 0
        }))),
        UD = new Map,
        fD = new Map;
      for (const [ID, BD] of sD) {
        const DD = rD(ID),
          zD = pD.get(BD);
        if (void 0 !== zD) {
          const wD = gD.get(zD);
          fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "frame"
          }), DD && !fD.has(DD.root) && fD.set(DD.root, {
            name: DD.root,
            texture: wD,
            kind: "frame"
          });
          continue
        }
        const wD = gD.get(BD),
          sD = DD?.root ?? ID;
        if (wD !== sD && fD.set(sD, {
            name: sD,
            texture: wD,
            kind: "frame"
          }), DD) {
          const zD = KD.get(DD.root);
          AD[BD] = {
            id: zD,
            rotation: DD.rotation
          }, UD.set(wD, zD), fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "rotation"
          })
        } else UD.set(wD, BD + 1)
      }
      for (const ID of UD.keys()) fD.delete(ID);
      for (const [ID, BD] of wD) {
        const DD = UD.get(BD);
        void 0 === DD || UD.has(ID) || (UD.set(ID, DD), fD.delete(ID))
      }
      return {
        named: [...UD].sort(((DD, zD) => {
          let [wD] = DD, [pD] = zD;
          return wD < pD ? -1 : wD > pD ? 1 : 0
        })).map((DD => {
          let [zD, wD] = DD;
          return {
            name: zD,
            id: wD
          }
        })),
        aliases: [...fD.values()],
        layers: AD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);