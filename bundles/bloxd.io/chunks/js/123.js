export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
  6356: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.l,
      e: () => pD,
      f: () => ID.r
    });
    var ID = cD(6343);
    const pD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((CD => ({
      strict: DD,
      program: CD
    })))))
  },
  39614: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => BD,
      installListedShaderPack: () => SD
    });
    var ID = cD(6298),
      pD = cD(6343),
      iD = cD(1199),
      fD = cD(6366),
      bD = cD(6356),
      QD = cD(6404),
      wD = cD(6401);
    async function SD(DD) {
      const CD = await (0, fD.loadPageShaderPackCompiler)();
      if (null === CD) return {
        kind: "failed",
        reason: "compiler"
      };
      const cD = await BD(DD, CD);
      return "failed" === cD.kind ? cD : await (0, QD.saveShaderPack)(cD.stored, CD) ? ((0, QD.markShaderPackChangePending)(), cD) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function BD(DD, CD) {
      const cD = await async function(DD) {
        let {
          packId: CD,
          sourceHash: cD
        } = DD;
        try {
          const DD = await fetch(`${iD.clientSideServerUrls.s3Url}/${(0,ID.Q)(CD,cD)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!DD.ok) return console.error(`Failed to download shader pack ${CD} (${DD.status})`), null;
          const pD = await DD.json();
          return "object" !== typeof pD || null === pD ? (console.error(`Shader pack ${CD}'s source isn't an object`), null) : pD
        } catch (pD) {
          return console.error(`Failed to download shader pack ${CD}`, pD), null
        }
      }(DD);
      if (null === cD) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, bD.f)(cD.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const fD = (0, pD.s)(cD.files);
      if ("string" === typeof fD) return console.error(`A listed shader pack breaks the pack rules: ${fD}`), {
        kind: "failed",
        reason: "invalid"
      };
      const SD = await (0, wD.f)(CD, fD);
      if (!1 === (null === SD || void 0 === SD ? void 0 : SD.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const BD = {
        manifest: {
          apiVersion: cD.apiVersion,
          name: DD.name,
          author: DD.ownerName,
          description: DD.description || null,
          keepCircleShadows: !0 === cD.keepCircleShadows
        },
        files: fD
      };
      return {
        kind: "loaded",
        stored: (0, QD.toStoredShaderPack)(BD, SD, {
          packId: DD.packId,
          sourceHash: DD.sourceHash
        })
      }
    }
  },
  40358: (DD, CD, cD) => {
    cD.d(CD, {
      followListingUpdates: () => yD
    });
    var ID = cD(208),
      pD = cD(16),
      iD = cD(1497),
      fD = cD(1127),
      bD = cD(6366),
      QD = cD(6356),
      wD = cD(39614),
      SD = cD(6404);
    const BD = ["apiVersion", "invalid", "errors"];
    async function yD(DD, CD) {
      const cD = await fD.userContextManager.getCurrentUserContext(),
        yD = await iD.c.getShaderPackVersions(cD, [CD.packId]),
        MD = function(DD, CD, cD) {
          var ID;
          if (void 0 === cD || "unlisted" === cD.status) return {
            kind: "none"
          };
          if ("banned" === cD.status) return {
            kind: "remove"
          };
          if (!(0, QD.f)(cD.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: pD,
            name: iD,
            ownerName: fD,
            description: bD
          } = cD;
          return pD !== CD.sourceHash && pD !== CD.rejectedSourceHash ? {
            kind: "update",
            sourceHash: pD,
            name: iD,
            ownerName: fD,
            description: bD
          } : iD !== DD.manifest.name || fD !== DD.manifest.author || (bD || null) !== (null !== (ID = DD.manifest.description) && void 0 !== ID ? ID : null) ? {
            kind: "rename",
            name: iD,
            ownerName: fD,
            description: bD
          } : {
            kind: "none"
          }
        }(DD, CD, (0, ID.c)(yD, CD.packId));
      if ("update" === MD.kind && "landingPage" !== pD.d.get("gameState")) return !1;
      const tD = "update" === MD.kind || "rename" === MD.kind,
        ZD = tD ? await (0, bD.loadPageShaderPackCompiler)() : null;
      if (tD && null === ZD) return console.warn(`Didn't follow shader pack ${CD.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const oD = await async function(DD, CD, cD, ID) {
        switch (cD.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...DD, manifest: {
                ...DD.manifest,
                name: cD.name,
                author: cD.ownerName,
                description: cD.description || null
              }
            };
          case "update": {
            if (null === ID) return;
            const {
              sourceHash: pD,
              name: iD,
              ownerName: fD,
              description: bD
            } = cD, QD = await (0, wD.d)({
              packId: CD.packId,
              sourceHash: pD,
              name: iD,
              ownerName: fD,
              description: bD
            }, ID);
            if ("loaded" === QD.kind && null !== QD.stored.validation) return QD.stored;
            const SD = "failed" === QD.kind ? QD.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${CD.packId}: ${SD}`), "failed" === QD.kind && BD.includes(QD.reason) ? {
              ...DD,
              listing: {
                ...CD,
                rejectedSourceHash: pD
              }
            } : void 0
          }
        }
      }(DD, CD, MD, ZD);
      return void 0 === oD || (await (0, SD.replaceShaderPack)(DD, oD, ZD) ? (null !== oD && oD.files === DD.files || (0, SD.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6404: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      forgetShaderPackActiveHint: () => qD,
      isOtherApiVersion: () => PD,
      isShaderPackActive: () => XD,
      isShaderPackChangePending: () => OD,
      markShaderPackChangePending: () => nD,
      pageShaderPackValidationVersion: () => HD,
      reconcileStoredShaderPackHint: () => xD,
      removeShaderPack: () => gD,
      replaceShaderPack: () => oD,
      saveShaderPack: () => ZD,
      shaderPackNeedsCheck: () => UD,
      storedPackOutcome: () => mD,
      storedShaderPackFiles: () => yD,
      toStoredShaderPack: () => BD
    });
    var ID = cD(6343),
      pD = cD(6356),
      iD = cD(36),
      fD = cD(3255),
      bD = cD(6409),
      QD = cD(6379);
    const wD = "shaderPackChangePending";
    let SD = null;

    function BD(DD, CD, cD) {
      return {
        manifest: DD.manifest,
        files: (0, ID.w)(DD.files),
        validation: CD,
        ...cD && {
          listing: cD
        }
      }
    }

    function yD(DD) {
      return Object.keys(DD.files).map((CD => ({
        path: CD,
        source: DD.files[CD]
      })))
    }
    let MD = Promise.resolve();

    function tD(DD) {
      const CD = MD.then(DD);
      return MD = CD.catch((() => {})), CD
    }

    function ZD(DD, CD) {
      return tD((() => vD(DD, CD)))
    }

    function oD(DD, CD, cD) {
      return tD((async () => JSON.stringify(await (0, bD.d)()) === JSON.stringify(DD) && (null === CD ? (await ND(), !0) : vD(CD, cD))))
    }
    async function vD(DD, CD) {
      const cD = await iD.f.setItem(bD.c, DD);
      return cD && JD(DD, CD), cD
    }
    async function ND() {
      await iD.f.removeItem(bD.c), iD.h.removeItem(fD.e)
    }

    function gD() {
      return tD(ND)
    }

    function XD(DD, CD) {
      return "active" === mD(DD, CD).kind
    }

    function mD(DD, CD) {
      var cD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : PD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) || DD.validation.fromRecheck ? null === CD ? {
        kind: "none",
        reason: "noCompiler"
      } : UD(DD, CD) ? {
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

    function nD() {
      iD.j.setItem(wD, performance.timeOrigin)
    }

    function OD() {
      return iD.j.getItem(wD) === performance.timeOrigin
    }

    function PD(DD) {
      return !(0, pD.f)(DD.manifest.apiVersion)
    }

    function HD(DD) {
      return SD ??= DD.zq((0, QD.shaderPackTextures)()), SD
    }

    function UD(DD, CD) {
      var cD;
      return (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.headerVersion) !== HD(CD)
    }

    function xD(DD) {
      return tD((async () => {
        JD(await (0, bD.d)(!0), DD)
      }))
    }

    function qD() {
      return tD((async () => {
        iD.h.removeItem(fD.e)
      }))
    }

    function JD(DD, CD) {
      XD(DD, CD) ? iD.h.setItem(fD.e, !0) : iD.h.removeItem(fD.e)
    }
  },
  6379: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadShaderPackTextures: () => fD,
      shaderPackTextures: () => bD
    });
    var ID = cD(6343);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= Promise.all([cD.e(69), cD.e(198)]).then((() => cD(39608))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: CD,
          textureNameToIndex: cD,
          textureAnimationData: iD
        } = DD;
        return pD ??= (0, ID.m)(cD, iD, CD), pD
      })), iD
    }

    function bD() {
      if (null === pD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pD
    }
  },
  6401: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      f: () => bD
    });
    var ID = cD(6404),
      pD = cD(6379),
      iD = cD(110);
    const fD = 100;
    async function bD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cD = navigator.gpu) && void 0 !== cD ? cD : null;
      const fD = DD.R6(CD, (0, pD.shaderPackTextures)());
      if (fD.errors.length > 0) return wD(DD, fD.errors, fD.offInStrict);
      const bD = await async function(DD) {
        if (!DD) return null;
        try {
          const CD = await (0, iD.v)(DD);
          return CD ? await CD.requestDevice() : null
        } catch (CD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", CD), null
        }
      }(ID);
      if (!bD) return null;
      let QD = !1;
      bD.lost.then((() => {
        QD = !0
      }));
      try {
        const CD = await Promise.all(fD.validationModules.map((CD => async function(DD, CD, cD) {
          CD.pushErrorScope("validation");
          const ID = CD.createShaderModule({
              code: cD.code
            }),
            pD = CD.popErrorScope(),
            {
              messages: iD
            } = await ID.getCompilationInfo(),
            fD = iD.filter((DD => "error" === DD.type)).map((CD => DD.mapValidationMessage(cD, CD))),
            bD = await pD;
          bD && 0 === fD.length && fD.push({
            file: null,
            line: 0,
            message: bD.message,
            variants: [cD.key]
          });
          return fD
        }(DD, bD, CD))));
        return QD ? null : wD(DD, DD.icD(CD.flat()), fD.offInStrict)
      } catch (SD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", SD), null
      } finally {
        bD.destroy()
      }
    }
    async function QD(DD, CD) {
      var cD;
      if (!(0, ID.shaderPackNeedsCheck)(DD, CD) || (0, ID.isOtherApiVersion)(DD)) return DD;
      const pD = await bD(CD, (0, ID.storedShaderPackFiles)(DD));
      if (!pD) return DD;
      const iD = !1 === (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) && !DD.validation.fromRecheck,
        fD = {
          ...DD,
          validation: iD ? pD : {
            ...pD,
            fromRecheck: !0
          }
        };
      return await (0, ID.replaceShaderPack)(DD, fD, CD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), fD
    }

    function wD(DD, CD, cD) {
      return {
        headerVersion: (0, ID.pageShaderPackValidationVersion)(DD),
        ok: 0 === CD.length,
        errors: CD.slice(0, fD),
        moreErrors: Math.max(0, CD.length - fD),
        offInStrict: cD
      }
    }
  },
  6298: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => bD,
      E: () => fD,
      H: () => ID,
      L: () => yD,
      N: () => SD,
      Q: () => gD,
      T: () => BD,
      U: () => wD,
      e: () => MD,
      h: () => ZD,
      k: () => tD,
      n: () => ND,
      p: () => mD,
      t: () => QD,
      u: () => pD,
      w: () => XD,
      z: () => iD
    });
    const ID = ["forest", "desert", "water", "night", "cave"];
    const pD = {
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
      iD = ["popular", "updated", "newest"],
      fD = 3,
      bD = 32,
      QD = 300;

    function wD(DD, CD) {
      return DD.slice(0, CD).replace(/[\uD800-\uDBFF]$/, "")
    }
    const SD = 64,
      BD = 512,
      yD = 18e5;
    const MD = "Bloxdhub",
      tD = "https://bloxdhub.com/shaders";

    function ZD(DD) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(DD)}`
    }
    const oD = "Screenshot generation failed.",
      vD = "Its screenshots couldn't be generated:";

    function ND(DD) {
      var CD;
      return DD === oD || null !== (CD = null === DD || void 0 === DD ? void 0 : DD.startsWith(vD)) && void 0 !== CD && CD
    }

    function gD(DD, CD) {
      return `shaderPacks/${DD}/${CD}.json`
    }

    function XD(DD, CD, cD, ID) {
      return null === CD.renderId ? mD(DD, CD.baselineVersion, cD, ID) : `${DD}/${function(DD,CD,cD,ID){return`shaderPacks/${DD}/${CD}/${cD}-${ID}.webp`}(CD.packId,CD.renderId,cD,ID)}`
    }

    function mD(DD, CD, cD, ID) {
      return `${DD}/${function(DD,CD,cD){return`shaderPacks/baseline/${DD}/${CD}-${cD}.webp`}(CD,cD,ID)}`
    }
  },
  6343: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => BD,
      d: () => fD,
      h: () => iD,
      l: () => ID,
      m: () => tD,
      n: () => SD,
      r: () => pD,
      s: () => QD,
      w: () => wD
    });
    const ID = 5;

    function pD(DD) {
      return DD === ID
    }
    const iD = 262144,
      fD = 256,
      bD = 256;

    function QD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const CD = [];
      for (const [cD, ID] of Object.entries(DD)) {
        if ("string" !== typeof ID) return `${cD} isn't text.`;
        CD.push({
          path: cD,
          source: ID
        })
      }
      return CD.sort(((DD, CD) => SD(DD.path, CD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > fD) return `The pack has more than ${fD} .wgsl files.`;
          const CD = new Set;
          for (const {
              path: cD
            }
            of DD) {
            const DD = yD(cD);
            if (null !== DD) return DD;
            if (CD.has(cD)) return `The pack has two files at ${cD}.`;
            CD.add(cD)
          }
          return BD(DD) > iD ? `The pack's .wgsl files are over ${iD/1024} KB in total.` : null
        }(CD) ?? CD
    }

    function wD(DD) {
      const CD = {};
      for (const cD of DD) CD[cD.path] = cD.source;
      return CD
    }

    function SD(DD, CD) {
      return DD < CD ? -1 : DD > CD ? 1 : 0
    }

    function BD(DD) {
      const CD = new TextEncoder;
      let cD = 0;
      for (const {
          source: ID
        }
        of DD) cD += CD.encode(ID).byteLength;
      return cD
    }

    function yD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > bD) return `A file path is over ${bD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const MD = /^(.*)\[rot\[([1-4])$/;

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ID = new Map;
      CD.forEach(((DD, CD) => {
        let {
          numAnimStates: cD,
          animStartIdx: pD
        } = DD;
        for (let iD = 1; iD < cD; iD++) ID.set(pD + iD - 1, CD)
      }));
      const pD = Object.entries(DD),
        iD = new Map;
      for (const [ZD, oD] of pD) {
        const DD = MD.exec(ZD);
        "1" === DD?.[2] && iD.set(DD[1], oD + 1)
      }
      const fD = DD => {
          const CD = MD.exec(DD);
          return CD && iD.has(CD[1]) ? {
            root: CD[1],
            rotation: Number(CD[2]) - 1
          } : null
        },
        bD = new Set(pD.map((DD => {
          let [CD] = DD;
          return fD(CD)?.root ?? CD
        }))),
        QD = (DD, cD) => {
          const ID = DD.replace(/_?0$/, "");
          return (CD[cD]?.numAnimStates ?? 0) > 1 && !bD.has(ID) ? ID : DD
        },
        wD = new Map;
      for (const [MD, ZD] of pD) wD.set(ZD, QD(fD(MD)?.root ?? MD, ZD));
      const SD = pD.reduce(((DD, CD) => {
          let [, cD] = CD;
          return Math.max(DD, cD + 1)
        }), 0),
        BD = Array.from({
          length: SD
        }, ((DD, CD) => ({
          id: CD + 1,
          rotation: 0
        }))),
        yD = new Map,
        tD = new Map;
      for (const [MD, ZD] of pD) {
        const DD = fD(MD),
          CD = ID.get(ZD);
        if (void 0 !== CD) {
          const cD = wD.get(CD);
          tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "frame"
          }), DD && !tD.has(DD.root) && tD.set(DD.root, {
            name: DD.root,
            texture: cD,
            kind: "frame"
          });
          continue
        }
        const cD = wD.get(ZD),
          pD = DD?.root ?? MD;
        if (cD !== pD && tD.set(pD, {
            name: pD,
            texture: cD,
            kind: "frame"
          }), DD) {
          const CD = iD.get(DD.root);
          BD[ZD] = {
            id: CD,
            rotation: DD.rotation
          }, yD.set(cD, CD), tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "rotation"
          })
        } else yD.set(cD, ZD + 1)
      }
      for (const MD of yD.keys()) tD.delete(MD);
      for (const [MD, ZD] of cD) {
        const DD = yD.get(ZD);
        void 0 === DD || yD.has(MD) || (yD.set(MD, DD), tD.delete(MD))
      }
      return {
        named: [...yD].sort(((DD, CD) => {
          let [cD] = DD, [ID] = CD;
          return cD < ID ? -1 : cD > ID ? 1 : 0
        })).map((DD => {
          let [CD, cD] = DD;
          return {
            name: CD,
            id: cD
          }
        })),
        aliases: [...tD.values()],
        layers: BD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);