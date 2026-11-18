export const id = 116;
export const ids = [116, 119, 120, 123];
export const modules = {
  5940: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB.h,
      h: () => yB,
      l: () => VB.p
    });
    var VB = dB(5924);
    const yB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((TB => ({
      strict: BB,
      program: TB
    })))))
  },
  39236: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB,
      installListedShaderPack: () => oB
    });
    var VB = dB(5898),
      yB = dB(5924),
      pB = dB(1089),
      lB = dB(5949),
      JB = dB(5940),
      YB = dB(5987),
      gB = dB(5985);
    async function oB(BB) {
      const TB = await (0, lB.loadPageShaderPackCompiler)();
      if (null === TB) return {
        kind: "failed",
        reason: "compiler"
      };
      const dB = await kB(BB, TB);
      return "failed" === dB.kind ? dB : await (0, YB.saveShaderPack)(dB.stored, TB) ? ((0, YB.markShaderPackChangePending)(), dB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function kB(BB, TB) {
      const dB = await async function(BB) {
        let {
          packId: TB,
          sourceHash: dB
        } = BB;
        try {
          const BB = await fetch(`${pB.clientSideServerUrls.s3Url}/${(0,VB.N)(TB,dB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${TB} (${BB.status})`), null;
          const yB = await BB.json();
          return "object" !== typeof yB || null === yB ? (console.error(`Shader pack ${TB}'s source isn't an object`), null) : yB
        } catch (yB) {
          return console.error(`Failed to download shader pack ${TB}`, yB), null
        }
      }(BB);
      if (null === dB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, JB.l)(dB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const lB = (0, yB.q)(dB.files);
      if ("string" === typeof lB) return console.error(`A listed shader pack breaks the pack rules: ${lB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const oB = await (0, gB.f)(TB, lB);
      if (!1 === (null === oB || void 0 === oB ? void 0 : oB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const kB = {
        manifest: {
          apiVersion: dB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === dB.keepCircleShadows
        },
        files: lB
      };
      return {
        kind: "loaded",
        stored: (0, YB.toStoredShaderPack)(kB, oB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
      }
    }
  },
  39918: (BB, TB, dB) => {
    dB.d(TB, {
      followListingUpdates: () => LB
    });
    var VB = dB(670),
      yB = dB(21),
      pB = dB(1393),
      lB = dB(1020),
      JB = dB(5949),
      YB = dB(5940),
      gB = dB(39236),
      oB = dB(5987);
    const kB = ["apiVersion", "invalid", "errors"];
    async function LB(BB, TB) {
      const dB = await lB.userContextManager.getCurrentUserContext(),
        LB = await pB.c.getShaderPackVersions(dB, [TB.packId]),
        OB = function(BB, TB, dB) {
          var VB;
          if (void 0 === dB || "unlisted" === dB.status) return {
            kind: "none"
          };
          if ("banned" === dB.status) return {
            kind: "remove"
          };
          if (!(0, YB.l)(dB.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: yB,
            name: pB,
            ownerName: lB,
            description: JB
          } = dB;
          return yB !== TB.sourceHash && yB !== TB.rejectedSourceHash ? {
            kind: "update",
            sourceHash: yB,
            name: pB,
            ownerName: lB,
            description: JB
          } : pB !== BB.manifest.name || lB !== BB.manifest.author || (JB || null) !== (null !== (VB = BB.manifest.description) && void 0 !== VB ? VB : null) ? {
            kind: "rename",
            name: pB,
            ownerName: lB,
            description: JB
          } : {
            kind: "none"
          }
        }(BB, TB, (0, VB.b)(LB, TB.packId));
      if ("update" === OB.kind && "landingPage" !== yB.d.get("gameState")) return !1;
      const DB = "update" === OB.kind || "rename" === OB.kind,
        uB = DB ? await (0, JB.loadPageShaderPackCompiler)() : null;
      if (DB && null === uB) return console.warn(`Didn't follow shader pack ${TB.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const HB = await async function(BB, TB, dB, VB) {
        switch (dB.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...BB, manifest: {
                ...BB.manifest,
                name: dB.name,
                author: dB.ownerName,
                description: dB.description || null
              }
            };
          case "update": {
            if (null === VB) return;
            const {
              sourceHash: yB,
              name: pB,
              ownerName: lB,
              description: JB
            } = dB, YB = await (0, gB.e)({
              packId: TB.packId,
              sourceHash: yB,
              name: pB,
              ownerName: lB,
              description: JB
            }, VB);
            if ("loaded" === YB.kind && null !== YB.stored.validation) return YB.stored;
            const oB = "failed" === YB.kind ? YB.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${TB.packId}: ${oB}`), "failed" === YB.kind && kB.includes(YB.reason) ? {
              ...BB,
              listing: {
                ...TB,
                rejectedSourceHash: yB
              }
            } : void 0
          }
        }
      }(BB, TB, OB, uB);
      return void 0 === HB || (await (0, oB.replaceShaderPack)(BB, HB, uB) ? (null !== HB && HB.files === BB.files || (0, oB.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  5987: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      forgetShaderPackActiveHint: () => UB,
      isOtherApiVersion: () => sB,
      isShaderPackActive: () => iB,
      isShaderPackChangePending: () => fB,
      markShaderPackChangePending: () => tB,
      pageShaderPackValidationVersion: () => MB,
      reconcileStoredShaderPackHint: () => wB,
      removeShaderPack: () => mB,
      replaceShaderPack: () => HB,
      saveShaderPack: () => uB,
      shaderPackNeedsCheck: () => zB,
      storedPackOutcome: () => NB,
      storedShaderPackFiles: () => LB,
      toStoredShaderPack: () => kB
    });
    var VB = dB(5924),
      yB = dB(5940),
      pB = dB(33),
      lB = dB(2939),
      JB = dB(5994),
      YB = dB(5973);
    const gB = "shaderPackChangePending";
    let oB = null;

    function kB(BB, TB, dB) {
      return {
        manifest: BB.manifest,
        files: (0, VB.u)(BB.files),
        validation: TB,
        ...dB && {
          listing: dB
        }
      }
    }

    function LB(BB) {
      return Object.keys(BB.files).map((TB => ({
        path: TB,
        source: BB.files[TB]
      })))
    }
    let OB = Promise.resolve();

    function DB(BB) {
      const TB = OB.then(BB);
      return OB = TB.catch((() => {})), TB
    }

    function uB(BB, TB) {
      return DB((() => EB(BB, TB)))
    }

    function HB(BB, TB, dB) {
      return DB((async () => JSON.stringify(await (0, JB.d)()) === JSON.stringify(BB) && (null === TB ? (await vB(), !0) : EB(TB, dB))))
    }
    async function EB(BB, TB) {
      const dB = await pB.f.setItem(JB.b, BB);
      return dB && FB(BB, TB), dB
    }
    async function vB() {
      await pB.f.removeItem(JB.b), pB.j.removeItem(lB.d)
    }

    function mB() {
      return DB(vB)
    }

    function iB(BB, TB) {
      return "active" === NB(BB, TB).kind
    }

    function NB(BB, TB) {
      var dB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : sB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) || BB.validation.fromRecheck ? null === TB ? {
        kind: "none",
        reason: "noCompiler"
      } : zB(BB, TB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function tB() {
      pB.m.setItem(gB, performance.timeOrigin)
    }

    function fB() {
      return pB.m.getItem(gB) === performance.timeOrigin
    }

    function sB(BB) {
      return !(0, yB.l)(BB.manifest.apiVersion)
    }

    function MB(BB) {
      return oB ??= BB.PU((0, YB.shaderPackTextures)()), oB
    }

    function zB(BB, TB) {
      var dB;
      return (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.headerVersion) !== MB(TB)
    }

    function wB(BB) {
      return DB((async () => {
        FB(await (0, JB.d)(!0), BB)
      }))
    }

    function UB() {
      return DB((async () => {
        pB.j.removeItem(lB.d)
      }))
    }

    function FB(BB, TB) {
      iB(BB, TB) ? pB.j.setItem(lB.d, !0) : pB.j.removeItem(lB.d)
    }
  },
  5973: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadShaderPackTextures: () => lB,
      shaderPackTextures: () => JB
    });
    var VB = dB(5924);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= Promise.all([dB.e(64), dB.e(184)]).then((() => dB(39231))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: TB,
          textureNameToIndex: dB,
          textureAnimationData: pB
        } = BB;
        return yB ??= (0, VB.l)(dB, pB, TB), yB
      })), pB
    }

    function JB() {
      if (null === yB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yB
    }
  },
  5985: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      f: () => JB
    });
    var VB = dB(5987),
      yB = dB(5973),
      pB = dB(113);
    const lB = 100;
    async function JB(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (dB = navigator.gpu) && void 0 !== dB ? dB : null;
      const lB = BB.iBB(TB, (0, yB.shaderPackTextures)());
      if (lB.errors.length > 0) return gB(BB, lB.errors, lB.offInStrict);
      const JB = await async function(BB) {
        if (!BB) return null;
        try {
          const TB = await (0, pB.q)(BB);
          return TB ? await TB.requestDevice() : null
        } catch (TB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", TB), null
        }
      }(VB);
      if (!JB) return null;
      let YB = !1;
      JB.lost.then((() => {
        YB = !0
      }));
      try {
        const TB = await Promise.all(lB.validationModules.map((TB => async function(BB, TB, dB) {
          TB.pushErrorScope("validation");
          const VB = TB.createShaderModule({
              code: dB.code
            }),
            yB = TB.popErrorScope(),
            {
              messages: pB
            } = await VB.getCompilationInfo(),
            lB = pB.filter((BB => "error" === BB.type)).map((TB => BB.mapValidationMessage(dB, TB))),
            JB = await yB;
          JB && 0 === lB.length && lB.push({
            file: null,
            line: 0,
            message: JB.message,
            variants: [dB.key]
          });
          return lB
        }(BB, JB, TB))));
        return YB ? null : gB(BB, BB.LVB(TB.flat()), lB.offInStrict)
      } catch (oB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oB), null
      } finally {
        JB.destroy()
      }
    }
    async function YB(BB, TB) {
      var dB;
      if (!(0, VB.shaderPackNeedsCheck)(BB, TB) || (0, VB.isOtherApiVersion)(BB)) return BB;
      const yB = await JB(TB, (0, VB.storedShaderPackFiles)(BB));
      if (!yB) return BB;
      const pB = !1 === (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) && !BB.validation.fromRecheck,
        lB = {
          ...BB,
          validation: pB ? yB : {
            ...yB,
            fromRecheck: !0
          }
        };
      return await (0, VB.replaceShaderPack)(BB, lB, TB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), lB
    }

    function gB(BB, TB, dB) {
      return {
        headerVersion: (0, VB.pageShaderPackValidationVersion)(BB),
        ok: 0 === TB.length,
        errors: TB.slice(0, lB),
        moreErrors: Math.max(0, TB.length - lB),
        offInStrict: dB
      }
    }
  },
  5898: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      D: () => VB,
      H: () => LB,
      J: () => oB,
      N: () => mB,
      P: () => kB,
      S: () => gB,
      b: () => OB,
      c: () => uB,
      f: () => DB,
      j: () => vB,
      k: () => NB,
      n: () => YB,
      q: () => yB,
      r: () => iB,
      u: () => pB,
      w: () => JB
    });
    const VB = ["forest", "desert", "water", "night", "cave"];
    const yB = {
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
      pB = ["popular", "updated", "newest"],
      lB = 3,
      JB = 32,
      YB = 300;

    function gB(BB, TB) {
      return BB.slice(0, TB).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oB = 64,
      kB = 512,
      LB = 18e5;
    const OB = "Bloxdhub",
      DB = "https://bloxdhub.com/shaders";

    function uB(BB) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(BB)}`
    }
    const HB = "Screenshot generation failed.",
      EB = "Its screenshots couldn't be generated:";

    function vB(BB) {
      var TB;
      return BB === HB || null !== (TB = null === BB || void 0 === BB ? void 0 : BB.startsWith(EB)) && void 0 !== TB && TB
    }

    function mB(BB, TB) {
      return `shaderPacks/${BB}/${TB}.json`
    }

    function iB(BB, TB, dB, VB) {
      return null === TB.renderId ? NB(BB, TB.baselineVersion, dB, VB) : `${BB}/${function(BB,TB,dB,VB){return`shaderPacks/${BB}/${TB}/${dB}-${VB}.webp`}(TB.packId,TB.renderId,dB,VB)}`
    }

    function NB(BB, TB, dB, VB) {
      return `${BB}/${function(BB,TB,dB){return`shaderPacks/baseline/${BB}/${TB}-${dB}.webp`}(TB,dB,VB)}`
    }
  },
  5924: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      d: () => pB,
      h: () => VB,
      l: () => DB,
      m: () => oB,
      p: () => yB,
      q: () => YB,
      u: () => gB,
      x: () => kB
    });
    const VB = 5;

    function yB(BB) {
      return BB === VB
    }
    const pB = 262144,
      lB = 256,
      JB = 256;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const TB = [];
      for (const [dB, VB] of Object.entries(BB)) {
        if ("string" !== typeof VB) return `${dB} isn't text.`;
        TB.push({
          path: dB,
          source: VB
        })
      }
      return TB.sort(((BB, TB) => oB(BB.path, TB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > lB) return `The pack has more than ${lB} .wgsl files.`;
          const TB = new Set;
          for (const {
              path: dB
            }
            of BB) {
            const BB = LB(dB);
            if (null !== BB) return BB;
            if (TB.has(dB)) return `The pack has two files at ${dB}.`;
            TB.add(dB)
          }
          return kB(BB) > pB ? `The pack's .wgsl files are over ${pB/1024} KB in total.` : null
        }(TB) ?? TB
    }

    function gB(BB) {
      const TB = {};
      for (const dB of BB) TB[dB.path] = dB.source;
      return TB
    }

    function oB(BB, TB) {
      return BB < TB ? -1 : BB > TB ? 1 : 0
    }

    function kB(BB) {
      const TB = new TextEncoder;
      let dB = 0;
      for (const {
          source: VB
        }
        of BB) dB += TB.encode(VB).byteLength;
      return dB
    }

    function LB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > JB) return `A file path is over ${JB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const OB = /^(.*)\[rot\[([1-4])$/;

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const VB = new Map;
      TB.forEach(((BB, TB) => {
        let {
          numAnimStates: dB,
          animStartIdx: yB
        } = BB;
        for (let pB = 1; pB < dB; pB++) VB.set(yB + pB - 1, TB)
      }));
      const yB = Object.entries(BB),
        pB = new Map;
      for (const [uB, HB] of yB) {
        const BB = OB.exec(uB);
        "1" === BB?.[2] && pB.set(BB[1], HB + 1)
      }
      const lB = BB => {
          const TB = OB.exec(BB);
          return TB && pB.has(TB[1]) ? {
            root: TB[1],
            rotation: Number(TB[2]) - 1
          } : null
        },
        JB = new Set(yB.map((BB => {
          let [TB] = BB;
          return lB(TB)?.root ?? TB
        }))),
        YB = (BB, dB) => {
          const VB = BB.replace(/_?0$/, "");
          return (TB[dB]?.numAnimStates ?? 0) > 1 && !JB.has(VB) ? VB : BB
        },
        gB = new Map;
      for (const [OB, uB] of yB) gB.set(uB, YB(lB(OB)?.root ?? OB, uB));
      const oB = yB.reduce(((BB, TB) => {
          let [, dB] = TB;
          return Math.max(BB, dB + 1)
        }), 0),
        kB = Array.from({
          length: oB
        }, ((BB, TB) => ({
          id: TB + 1,
          rotation: 0
        }))),
        LB = new Map,
        DB = new Map;
      for (const [OB, uB] of yB) {
        const BB = lB(OB),
          TB = VB.get(uB);
        if (void 0 !== TB) {
          const dB = gB.get(TB);
          DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "frame"
          }), BB && !DB.has(BB.root) && DB.set(BB.root, {
            name: BB.root,
            texture: dB,
            kind: "frame"
          });
          continue
        }
        const dB = gB.get(uB),
          yB = BB?.root ?? OB;
        if (dB !== yB && DB.set(yB, {
            name: yB,
            texture: dB,
            kind: "frame"
          }), BB) {
          const TB = pB.get(BB.root);
          kB[uB] = {
            id: TB,
            rotation: BB.rotation
          }, LB.set(dB, TB), DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "rotation"
          })
        } else LB.set(dB, uB + 1)
      }
      for (const OB of LB.keys()) DB.delete(OB);
      for (const [OB, uB] of dB) {
        const BB = LB.get(uB);
        void 0 === BB || LB.has(OB) || (LB.set(OB, BB), DB.delete(OB))
      }
      return {
        named: [...LB].sort(((BB, TB) => {
          let [dB] = BB, [VB] = TB;
          return dB < VB ? -1 : dB > VB ? 1 : 0
        })).map((BB => {
          let [TB, dB] = BB;
          return {
            name: TB,
            id: dB
          }
        })),
        aliases: [...DB.values()],
        layers: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);