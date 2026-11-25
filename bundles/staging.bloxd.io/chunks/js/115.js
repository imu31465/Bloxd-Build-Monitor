export const id = 115;
export const ids = [115, 118, 138, 139];
export const modules = {
  5204: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.j,
      d: () => JB,
      g: () => TB.o
    });
    var TB = ZB(5210);
    const JB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((IB => ({
      strict: BB,
      program: IB
    })))))
  },
  40541: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB,
      installListedShaderPack: () => nB
    });
    var TB = ZB(6731),
      JB = ZB(5210),
      oB = ZB(1258),
      GB = ZB(6763),
      vB = ZB(5204),
      kB = ZB(6800),
      cB = ZB(6792);
    async function nB(BB) {
      const IB = await (0, GB.loadPageShaderPackCompiler)();
      if (null === IB) return {
        kind: "failed",
        reason: "compiler"
      };
      const ZB = await hB(BB, IB);
      return "failed" === ZB.kind ? ZB : await (0, kB.saveShaderPack)(ZB.stored, IB) ? ((0, kB.markShaderPackChangePending)(), ZB) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function hB(BB, IB) {
      const ZB = await async function(BB) {
        let {
          packId: IB,
          sourceHash: ZB
        } = BB;
        try {
          const BB = await fetch(`${oB.clientSideServerUrls.s3Url}/${(0,TB.O)(IB,ZB)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!BB.ok) return console.error(`Failed to download shader pack ${IB} (${BB.status})`), null;
          const JB = await BB.json();
          return "object" !== typeof JB || null === JB ? (console.error(`Shader pack ${IB}'s source isn't an object`), null) : JB
        } catch (JB) {
          return console.error(`Failed to download shader pack ${IB}`, JB), null
        }
      }(BB);
      if (null === ZB) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, vB.g)(ZB.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const GB = (0, JB.u)(ZB.files);
      if ("string" === typeof GB) return console.error(`A listed shader pack breaks the pack rules: ${GB}`), {
        kind: "failed",
        reason: "invalid"
      };
      const nB = await (0, cB.h)(IB, GB);
      if (!1 === (null === nB || void 0 === nB ? void 0 : nB.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const hB = {
        manifest: {
          apiVersion: ZB.apiVersion,
          name: BB.name,
          author: BB.ownerName,
          description: BB.description || null,
          keepCircleShadows: !0 === ZB.keepCircleShadows
        },
        files: GB
      };
      return {
        kind: "loaded",
        stored: (0, kB.toStoredShaderPack)(hB, nB, {
          packId: BB.packId,
          sourceHash: BB.sourceHash
        })
      }
    }
  },
  6800: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      forgetShaderPackActiveHint: () => pB,
      isOtherApiVersion: () => wB,
      isShaderPackActive: () => dB,
      isShaderPackChangePending: () => sB,
      markShaderPackChangePending: () => QB,
      pageShaderPackValidationVersion: () => OB,
      reconcileStoredShaderPackHint: () => iB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => qB,
      saveShaderPack: () => gB,
      shaderPackNeedsCheck: () => YB,
      storedPackOutcome: () => CB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => hB
    });
    var TB = ZB(5210),
      JB = ZB(5204),
      oB = ZB(36),
      GB = ZB(3640),
      vB = ZB(6808),
      kB = ZB(6778);
    const cB = "shaderPackChangePending";
    let nB = null;

    function hB(BB, IB, ZB) {
      return {
        manifest: BB.manifest,
        files: (0, TB.y)(BB.files),
        validation: IB,
        ...ZB && {
          listing: ZB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((IB => ({
        path: IB,
        source: BB.files[IB]
      })))
    }
    let FB = Promise.resolve();

    function NB(BB) {
      const IB = FB.then(BB);
      return FB = IB.catch((() => {})), IB
    }

    function gB(BB, IB) {
      return NB((() => yB(BB, IB)))
    }

    function qB(BB, IB, ZB) {
      return NB((async () => JSON.stringify(await (0, vB.i)()) === JSON.stringify(BB) && (null === IB ? (await UB(), !0) : yB(IB, ZB))))
    }
    async function yB(BB, IB) {
      const ZB = await oB.i.setItem(vB.e, BB);
      return ZB && aB(BB, IB), ZB
    }
    async function UB() {
      await oB.i.removeItem(vB.e), oB.m.removeItem(GB.e)
    }

    function WB() {
      return NB(UB)
    }

    function dB(BB, IB) {
      return "active" === CB(BB, IB).kind
    }

    function CB(BB, IB) {
      var ZB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : wB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) || BB.validation.fromRecheck ? null === IB ? {
        kind: "none",
        reason: "noCompiler"
      } : YB(BB, IB) ? {
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

    function QB() {
      oB.n.setItem(cB, performance.timeOrigin)
    }

    function sB() {
      return oB.n.getItem(cB) === performance.timeOrigin
    }

    function wB(BB) {
      return !(0, JB.g)(BB.manifest.apiVersion)
    }

    function OB(BB) {
      return nB ??= BB.rM((0, kB.shaderPackTextures)()), nB
    }

    function YB(BB, IB) {
      var ZB;
      return (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.headerVersion) !== OB(IB)
    }

    function iB(BB) {
      return NB((async () => {
        aB(await (0, vB.i)(!0), BB)
      }))
    }

    function pB() {
      return NB((async () => {
        oB.m.removeItem(GB.e)
      }))
    }

    function aB(BB, IB) {
      dB(BB, IB) ? oB.m.setItem(GB.e, !0) : oB.m.removeItem(GB.e)
    }
  },
  6778: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      loadShaderPackTextures: () => GB,
      shaderPackTextures: () => vB
    });
    var TB = ZB(5210);
    let JB = null,
      oB = null;

    function GB() {
      return oB ??= Promise.all([ZB.e(73), ZB.e(190)]).then((() => ZB(40534))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: IB,
          textureNameToIndex: ZB,
          textureAnimationData: oB
        } = BB;
        return JB ??= (0, TB.l)(ZB, oB, IB), JB
      })), oB
    }

    function vB() {
      if (null === JB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return JB
    }
  },
  6792: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB,
      h: () => vB
    });
    var TB = ZB(6800),
      JB = ZB(6778),
      oB = ZB(129);
    const GB = 100;
    async function vB(BB, IB) {
      var ZB;
      let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZB = navigator.gpu) && void 0 !== ZB ? ZB : null;
      const GB = BB.yBB(IB, (0, JB.shaderPackTextures)());
      if (GB.errors.length > 0) return cB(BB, GB.errors, GB.offInStrict);
      const vB = await async function(BB) {
        if (!BB) return null;
        try {
          const IB = await (0, oB.w)(BB);
          return IB ? await IB.requestDevice() : null
        } catch (IB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", IB), null
        }
      }(TB);
      if (!vB) return null;
      let kB = !1;
      vB.lost.then((() => {
        kB = !0
      }));
      try {
        const IB = await Promise.all(GB.validationModules.map((IB => async function(BB, IB, ZB) {
          IB.pushErrorScope("validation");
          const TB = IB.createShaderModule({
              code: ZB.code
            }),
            JB = IB.popErrorScope(),
            {
              messages: oB
            } = await TB.getCompilationInfo(),
            GB = oB.filter((BB => "error" === BB.type)).map((IB => BB.mapValidationMessage(ZB, IB))),
            vB = await JB;
          vB && 0 === GB.length && GB.push({
            file: null,
            line: 0,
            message: vB.message,
            variants: [ZB.key]
          });
          return GB
        }(BB, vB, IB))));
        return kB ? null : cB(BB, BB.qTB(IB.flat()), GB.offInStrict)
      } catch (nB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", nB), null
      } finally {
        vB.destroy()
      }
    }
    async function kB(BB, IB) {
      var ZB;
      if (!(0, TB.shaderPackNeedsCheck)(BB, IB) || (0, TB.isOtherApiVersion)(BB)) return BB;
      const JB = await vB(IB, (0, TB.storedShaderPackFiles)(BB));
      if (!JB) return BB;
      const oB = !1 === (null === (ZB = BB.validation) || void 0 === ZB ? void 0 : ZB.ok) && !BB.validation.fromRecheck,
        GB = {
          ...BB,
          validation: oB ? JB : {
            ...JB,
            fromRecheck: !0
          }
        };
      return await (0, TB.replaceShaderPack)(BB, GB, IB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), GB
    }

    function cB(BB, IB, ZB) {
      return {
        headerVersion: (0, TB.pageShaderPackValidationVersion)(BB),
        ok: 0 === IB.length,
        errors: IB.slice(0, GB),
        moreErrors: Math.max(0, IB.length - GB),
        offInStrict: ZB
      }
    }
  },
  5210: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => zB,
      d: () => vB,
      g: () => GB,
      j: () => TB,
      l: () => gB,
      m: () => hB,
      o: () => JB,
      q: () => oB,
      u: () => cB,
      y: () => nB
    });
    const TB = 5;

    function JB(BB) {
      return BB === TB
    }

    function oB(BB) {
      return [...BB.features]
    }
    const GB = 262144,
      vB = 256,
      kB = 256;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const IB = [];
      for (const [ZB, TB] of Object.entries(BB)) {
        if ("string" !== typeof TB) return `${ZB} isn't text.`;
        IB.push({
          path: ZB,
          source: TB
        })
      }
      return IB.sort(((BB, IB) => hB(BB.path, IB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > vB) return `The pack has more than ${vB} .wgsl files.`;
          const IB = new Set;
          for (const {
              path: ZB
            }
            of BB) {
            const BB = FB(ZB);
            if (null !== BB) return BB;
            if (IB.has(ZB)) return `The pack has two files at ${ZB}.`;
            IB.add(ZB)
          }
          return zB(BB) > GB ? `The pack's .wgsl files are over ${GB/1024} KB in total.` : null
        }(IB) ?? IB
    }

    function nB(BB) {
      const IB = {};
      for (const ZB of BB) IB[ZB.path] = ZB.source;
      return IB
    }

    function hB(BB, IB) {
      return BB < IB ? -1 : BB > IB ? 1 : 0
    }

    function zB(BB) {
      const IB = new TextEncoder;
      let ZB = 0;
      for (const {
          source: TB
        }
        of BB) ZB += IB.encode(TB).byteLength;
      return ZB
    }

    function FB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > kB) return `A file path is over ${kB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const NB = /^(.*)\[rot\[([1-4])$/;

    function gB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const TB = new Map;
      IB.forEach(((BB, IB) => {
        let {
          numAnimStates: ZB,
          animStartIdx: JB
        } = BB;
        for (let oB = 1; oB < ZB; oB++) TB.set(JB + oB - 1, IB)
      }));
      const JB = Object.entries(BB),
        oB = new Map;
      for (const [gB, qB] of JB) {
        const BB = NB.exec(gB);
        "1" === BB?.[2] && oB.set(BB[1], qB + 1)
      }
      const GB = BB => {
          const IB = NB.exec(BB);
          return IB && oB.has(IB[1]) ? {
            root: IB[1],
            rotation: Number(IB[2]) - 1
          } : null
        },
        vB = new Set(JB.map((BB => {
          let [IB] = BB;
          return GB(IB)?.root ?? IB
        }))),
        kB = (BB, ZB) => {
          const TB = BB.replace(/_?0$/, "");
          return (IB[ZB]?.numAnimStates ?? 0) > 1 && !vB.has(TB) ? TB : BB
        },
        cB = new Map;
      for (const [NB, gB] of JB) cB.set(gB, kB(GB(NB)?.root ?? NB, gB));
      const nB = JB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return Math.max(BB, ZB + 1)
        }), 0),
        hB = Array.from({
          length: nB
        }, ((BB, IB) => ({
          id: IB + 1,
          rotation: 0
        }))),
        zB = new Map,
        FB = new Map;
      for (const [NB, gB] of JB) {
        const BB = GB(NB),
          IB = TB.get(gB);
        if (void 0 !== IB) {
          const ZB = cB.get(IB);
          FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "frame"
          }), BB && !FB.has(BB.root) && FB.set(BB.root, {
            name: BB.root,
            texture: ZB,
            kind: "frame"
          });
          continue
        }
        const ZB = cB.get(gB),
          JB = BB?.root ?? NB;
        if (ZB !== JB && FB.set(JB, {
            name: JB,
            texture: ZB,
            kind: "frame"
          }), BB) {
          const IB = oB.get(BB.root);
          hB[gB] = {
            id: IB,
            rotation: BB.rotation
          }, zB.set(ZB, IB), FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "rotation"
          })
        } else zB.set(ZB, gB + 1)
      }
      for (const NB of zB.keys()) FB.delete(NB);
      for (const [NB, gB] of ZB) {
        const BB = zB.get(gB);
        void 0 === BB || zB.has(NB) || (zB.set(NB, BB), FB.delete(NB))
      }
      return {
        named: [...zB].sort(((BB, IB) => {
          let [ZB] = BB, [TB] = IB;
          return ZB < TB ? -1 : ZB > TB ? 1 : 0
        })).map((BB => {
          let [IB, ZB] = BB;
          return {
            name: IB,
            id: ZB
          }
        })),
        aliases: [...FB.values()],
        layers: hB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);