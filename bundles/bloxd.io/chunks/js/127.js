export const id = 127;
export const ids = [127, 130, 151, 152];
export const modules = {
  5435: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.g,
      g: () => SM,
      k: () => OM.o
    });
    var OM = iM(5442);
    const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
      strict: MM,
      program: rM
    })))))
  },
  41591: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      installListedShaderPack: () => zM
    });
    var OM = iM(7054),
      SM = iM(5442),
      jM = iM(1202),
      aM = iM(7111),
      PM = iM(5435),
      nM = iM(7142),
      QM = iM(7134);
    async function zM(MM) {
      const rM = await (0, aM.loadPageShaderPackCompiler)();
      if (null === rM) return {
        kind: "failed",
        reason: "compiler"
      };
      const iM = await LM(MM, rM);
      return "failed" === iM.kind ? iM : await (0, nM.saveShaderPack)(iM.stored, rM) ? ((0, nM.markShaderPackChangePending)(), iM) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function LM(MM, rM) {
      const iM = await async function(MM) {
        let {
          packId: rM,
          sourceHash: iM
        } = MM;
        try {
          const MM = await fetch(`${jM.clientSideServerUrls.s3Url}/${(0,OM.Q)(rM,iM)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!MM.ok) return console.error(`Failed to download shader pack ${rM} (${MM.status})`), null;
          const SM = await MM.json();
          return "object" !== typeof SM || null === SM ? (console.error(`Shader pack ${rM}'s source isn't an object`), null) : SM
        } catch (SM) {
          return console.error(`Failed to download shader pack ${rM}`, SM), null
        }
      }(MM);
      if (null === iM) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, PM.k)(iM.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const aM = (0, SM.t)(iM.files);
      if ("string" === typeof aM) return console.error(`A listed shader pack breaks the pack rules: ${aM}`), {
        kind: "failed",
        reason: "invalid"
      };
      const zM = await (0, QM.f)(rM, aM);
      if (!1 === (null === zM || void 0 === zM ? void 0 : zM.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const LM = {
        manifest: {
          apiVersion: iM.apiVersion,
          name: MM.name,
          author: MM.ownerName,
          description: MM.description || null,
          keepCircleShadows: !0 === iM.keepCircleShadows
        },
        files: aM
      };
      return {
        kind: "loaded",
        stored: (0, nM.toStoredShaderPack)(LM, zM, {
          packId: MM.packId,
          sourceHash: MM.sourceHash
        })
      }
    }
  },
  7142: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      forgetShaderPackActiveHint: () => uM,
      isOtherApiVersion: () => bM,
      isShaderPackActive: () => UM,
      isShaderPackChangePending: () => eM,
      markShaderPackChangePending: () => CM,
      pageShaderPackValidationVersion: () => wM,
      reconcileStoredShaderPackHint: () => gM,
      removeShaderPack: () => EM,
      replaceShaderPack: () => dM,
      saveShaderPack: () => JM,
      shaderPackNeedsCheck: () => tM,
      storedPackOutcome: () => GM,
      storedShaderPackFiles: () => mM,
      toStoredShaderPack: () => LM
    });
    var OM = iM(5442),
      SM = iM(5435),
      jM = iM(30),
      aM = iM(3855),
      PM = iM(7148),
      nM = iM(7120);
    const QM = "shaderPackChangePending";
    let zM = null;

    function LM(MM, rM, iM) {
      return {
        manifest: MM.manifest,
        files: (0, OM.w)(MM.files),
        validation: rM,
        ...iM && {
          listing: iM
        }
      }
    }

    function mM(MM) {
      return Object.keys(MM.files).map((rM => ({
        path: rM,
        source: MM.files[rM]
      })))
    }
    let HM = Promise.resolve();

    function hM(MM) {
      const rM = HM.then(MM);
      return HM = rM.catch((() => {})), rM
    }

    function JM(MM, rM) {
      return hM((() => yM(MM, rM)))
    }

    function dM(MM, rM, iM) {
      return hM((async () => JSON.stringify(await (0, PM.d)()) === JSON.stringify(MM) && (null === rM ? (await lM(), !0) : yM(rM, iM))))
    }
    async function yM(MM, rM) {
      const iM = await jM.f.setItem(PM.b, MM);
      return iM && RM(MM, rM), iM
    }
    async function lM() {
      await jM.f.removeItem(PM.b), jM.g.removeItem(aM.c)
    }

    function EM() {
      return hM(lM)
    }

    function UM(MM, rM) {
      return "active" === GM(MM, rM).kind
    }

    function GM(MM, rM) {
      var iM;
      return null === MM ? {
        kind: "none",
        reason: "nothingStored"
      } : bM(MM) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) || MM.validation.fromRecheck ? null === rM ? {
        kind: "none",
        reason: "noCompiler"
      } : tM(MM, rM) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : MM.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function CM() {
      jM.k.setItem(QM, performance.timeOrigin)
    }

    function eM() {
      return jM.k.getItem(QM) === performance.timeOrigin
    }

    function bM(MM) {
      return !(0, SM.k)(MM.manifest.apiVersion)
    }

    function wM(MM) {
      return zM ??= MM.KD((0, nM.shaderPackTextures)()), zM
    }

    function tM(MM, rM) {
      var iM;
      return (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.headerVersion) !== wM(rM)
    }

    function gM(MM) {
      return hM((async () => {
        RM(await (0, PM.d)(!0), MM)
      }))
    }

    function uM() {
      return hM((async () => {
        jM.g.removeItem(aM.c)
      }))
    }

    function RM(MM, rM) {
      UM(MM, rM) ? jM.g.setItem(aM.c, !0) : jM.g.removeItem(aM.c)
    }
  },
  7120: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      loadShaderPackTextures: () => aM,
      shaderPackTextures: () => PM
    });
    var OM = iM(5442);
    let SM = null,
      jM = null;

    function aM() {
      return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rM,
          textureNameToIndex: iM,
          textureAnimationData: jM
        } = MM;
        return SM ??= (0, OM.j)(iM, jM, rM), SM
      })), jM
    }

    function PM() {
      if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SM
    }
  },
  7134: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM,
      f: () => PM
    });
    var OM = iM(7142),
      SM = iM(7120),
      jM = iM(106);
    const aM = 100;
    async function PM(MM, rM) {
      var iM;
      let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (iM = navigator.gpu) && void 0 !== iM ? iM : null;
      const aM = MM.zMM(rM, (0, SM.shaderPackTextures)());
      if (aM.errors.length > 0) return QM(MM, aM.errors, aM.offInStrict);
      const PM = await async function(MM) {
        if (!MM) return null;
        try {
          const rM = await (0, jM.z)(MM);
          return rM ? await rM.requestDevice() : null
        } catch (rM) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
        }
      }(OM);
      if (!PM) return null;
      let nM = !1;
      PM.lost.then((() => {
        nM = !0
      }));
      try {
        const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
          rM.pushErrorScope("validation");
          const OM = rM.createShaderModule({
              code: iM.code
            }),
            SM = rM.popErrorScope(),
            {
              messages: jM
            } = await OM.getCompilationInfo(),
            aM = jM.filter((MM => "error" === MM.type)).map((rM => MM.mapValidationMessage(iM, rM))),
            PM = await SM;
          PM && 0 === aM.length && aM.push({
            file: null,
            line: 0,
            message: PM.message,
            variants: [iM.key]
          });
          return aM
        }(MM, PM, rM))));
        return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
      } catch (zM) {
        return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
      } finally {
        PM.destroy()
      }
    }
    async function nM(MM, rM) {
      var iM;
      if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
      const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
      if (!SM) return MM;
      const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
        aM = {
          ...MM,
          validation: jM ? SM : {
            ...SM,
            fromRecheck: !0
          }
        };
      return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
    }

    function QM(MM, rM, iM) {
      return {
        headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
        ok: 0 === rM.length,
        errors: rM.slice(0, aM),
        moreErrors: Math.max(0, rM.length - aM),
        offInStrict: iM
      }
    }
  },
  5442: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => aM,
      g: () => OM,
      j: () => JM,
      k: () => LM,
      o: () => SM,
      q: () => jM,
      t: () => QM,
      w: () => zM,
      z: () => mM
    });
    const OM = 5;

    function SM(MM) {
      return MM === OM
    }

    function jM(MM) {
      return [...MM.features]
    }
    const aM = 262144,
      PM = 256,
      nM = 256;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
      const rM = [];
      for (const [iM, OM] of Object.entries(MM)) {
        if ("string" !== typeof OM) return `${iM} isn't text.`;
        rM.push({
          path: iM,
          source: OM
        })
      }
      return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
        function(MM) {
          if (0 === MM.length) return "The pack has no .wgsl files.";
          if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
          const rM = new Set;
          for (const {
              path: iM
            }
            of MM) {
            const MM = HM(iM);
            if (null !== MM) return MM;
            if (rM.has(iM)) return `The pack has two files at ${iM}.`;
            rM.add(iM)
          }
          return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
        }(rM) ?? rM
    }

    function zM(MM) {
      const rM = {};
      for (const iM of MM) rM[iM.path] = iM.source;
      return rM
    }

    function LM(MM, rM) {
      return MM < rM ? -1 : MM > rM ? 1 : 0
    }

    function mM(MM) {
      const rM = new TextEncoder;
      let iM = 0;
      for (const {
          source: OM
        }
        of MM) iM += rM.encode(OM).byteLength;
      return iM
    }

    function HM(MM) {
      if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
      if (MM.length > nM) return `A file path is over ${nM} characters.`;
      if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
      return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
    }
    const hM = /^(.*)\[rot\[([1-4])$/;

    function JM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const OM = new Map;
      rM.forEach(((MM, rM) => {
        let {
          numAnimStates: iM,
          animStartIdx: SM
        } = MM;
        for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
      }));
      const SM = Object.entries(MM),
        jM = new Map;
      for (const [JM, dM] of SM) {
        const MM = hM.exec(JM);
        "1" === MM?.[2] && jM.set(MM[1], dM + 1)
      }
      const aM = MM => {
          const rM = hM.exec(MM);
          return rM && jM.has(rM[1]) ? {
            root: rM[1],
            rotation: Number(rM[2]) - 1
          } : null
        },
        PM = new Set(SM.map((MM => {
          let [rM] = MM;
          return aM(rM)?.root ?? rM
        }))),
        nM = (MM, iM) => {
          const OM = MM.replace(/_?0$/, "");
          return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
        },
        QM = new Map;
      for (const [hM, JM] of SM) QM.set(JM, nM(aM(hM)?.root ?? hM, JM));
      const zM = SM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return Math.max(MM, iM + 1)
        }), 0),
        LM = Array.from({
          length: zM
        }, ((MM, rM) => ({
          id: rM + 1,
          rotation: 0
        }))),
        mM = new Map,
        HM = new Map;
      for (const [hM, JM] of SM) {
        const MM = aM(hM),
          rM = OM.get(JM);
        if (void 0 !== rM) {
          const iM = QM.get(rM);
          HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "frame"
          }), MM && !HM.has(MM.root) && HM.set(MM.root, {
            name: MM.root,
            texture: iM,
            kind: "frame"
          });
          continue
        }
        const iM = QM.get(JM),
          SM = MM?.root ?? hM;
        if (iM !== SM && HM.set(SM, {
            name: SM,
            texture: iM,
            kind: "frame"
          }), MM) {
          const rM = jM.get(MM.root);
          LM[JM] = {
            id: rM,
            rotation: MM.rotation
          }, mM.set(iM, rM), HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "rotation"
          })
        } else mM.set(iM, JM + 1)
      }
      for (const hM of mM.keys()) HM.delete(hM);
      for (const [hM, JM] of iM) {
        const MM = mM.get(JM);
        void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
      }
      return {
        named: [...mM].sort(((MM, rM) => {
          let [iM] = MM, [OM] = rM;
          return iM < OM ? -1 : iM > OM ? 1 : 0
        })).map((MM => {
          let [rM, iM] = MM;
          return {
            name: rM,
            id: iM
          }
        })),
        aliases: [...HM.values()],
        layers: LM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);