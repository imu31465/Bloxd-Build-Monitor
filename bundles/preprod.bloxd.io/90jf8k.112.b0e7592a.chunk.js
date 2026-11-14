export const id = 112;
export const ids = [112, 113, 116];
export const modules = {
  5578: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF.j,
      e: () => AF,
      f: () => CF.p
    });
    var CF = SF(5564);
    const AF = [!1, !0].flatMap((FF => ["terrain", "liquid", "model"].map((WF => ({
      strict: FF,
      program: WF
    })))))
  },
  38464: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW,
      installListedShaderPack: () => RF
    });
    var CF = SF(5520),
      AF = SF(5564),
      uF = SF(1056),
      hF = SF(5589),
      bW = SF(5578),
      dF = SF(5626),
      PF = SF(5624);
    async function RF(FF) {
      const WF = await (0, hF.loadPageShaderPackCompiler)();
      if (null === WF) return {
        kind: "failed",
        reason: "compiler"
      };
      const SF = await iW(FF, WF);
      return "failed" === SF.kind ? SF : await (0, dF.saveShaderPack)(SF.stored, WF) ? ((0, dF.markShaderPackChangePending)(), SF) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function iW(FF, WF) {
      const SF = await async function(FF) {
        let {
          packId: WF,
          sourceHash: SF
        } = FF;
        try {
          const FF = await fetch(`${uF.clientSideServerUrls.s3Url}/${(0,CF.O)(WF,SF)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!FF.ok) return console.error(`Failed to download shader pack ${WF} (${FF.status})`), null;
          const AF = await FF.json();
          return "object" !== typeof AF || null === AF ? (console.error(`Shader pack ${WF}'s source isn't an object`), null) : AF
        } catch (AF) {
          return console.error(`Failed to download shader pack ${WF}`, AF), null
        }
      }(FF);
      if (null === SF) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, bW.f)(SF.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const hF = (0, AF.q)(SF.files);
      if ("string" === typeof hF) return console.error(`A listed shader pack breaks the pack rules: ${hF}`), {
        kind: "failed",
        reason: "invalid"
      };
      const RF = await (0, PF.f)(WF, hF);
      if (!1 === (null === RF || void 0 === RF ? void 0 : RF.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const iW = {
        manifest: {
          apiVersion: SF.apiVersion,
          name: FF.name,
          author: FF.ownerName,
          description: FF.description || null,
          keepCircleShadows: !0 === SF.keepCircleShadows
        },
        files: hF
      };
      return {
        kind: "loaded",
        stored: (0, dF.toStoredShaderPack)(iW, RF, {
          packId: FF.packId,
          sourceHash: FF.sourceHash
        })
      }
    }
  },
  5626: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      forgetShaderPackActiveHint: () => xW,
      isOtherApiVersion: () => DF,
      isShaderPackActive: () => kW,
      isShaderPackChangePending: () => NF,
      markShaderPackChangePending: () => VF,
      pageShaderPackValidationVersion: () => LF,
      reconcileStoredShaderPackHint: () => OF,
      removeShaderPack: () => aW,
      replaceShaderPack: () => gW,
      saveShaderPack: () => rW,
      shaderPackNeedsCheck: () => mW,
      storedPackOutcome: () => qW,
      storedShaderPackFiles: () => eF,
      toStoredShaderPack: () => iW
    });
    var CF = SF(5564),
      AF = SF(5578),
      uF = SF(33),
      hF = SF(2591),
      bW = SF(5630),
      dF = SF(5603);
    const PF = "shaderPackChangePending";
    let RF = null;

    function iW(FF, WF, SF) {
      return {
        manifest: FF.manifest,
        files: (0, CF.r)(FF.files),
        validation: WF,
        ...SF && {
          listing: SF
        }
      }
    }

    function eF(FF) {
      return Object.keys(FF.files).map((WF => ({
        path: WF,
        source: FF.files[WF]
      })))
    }
    let EF = Promise.resolve();

    function QF(FF) {
      const WF = EF.then(FF);
      return EF = WF.catch((() => {})), WF
    }

    function rW(FF, WF) {
      return QF((() => tW(FF, WF)))
    }

    function gW(FF, WF, SF) {
      return QF((async () => JSON.stringify(await (0, bW.f)()) === JSON.stringify(FF) && (null === WF ? (await TF(), !0) : tW(WF, SF))))
    }
    async function tW(FF, WF) {
      const SF = await uF.f.setItem(bW.e, FF);
      return SF && ZF(FF, WF), SF
    }
    async function TF() {
      await uF.f.removeItem(bW.e), uF.h.removeItem(hF.e)
    }

    function aW() {
      return QF(TF)
    }

    function kW(FF, WF) {
      return "active" === qW(FF, WF).kind
    }

    function qW(FF, WF) {
      var SF;
      return null === FF ? {
        kind: "none",
        reason: "nothingStored"
      } : DF(FF) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) || FF.validation.fromRecheck ? null === WF ? {
        kind: "none",
        reason: "noCompiler"
      } : mW(FF, WF) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : FF.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function VF() {
      uF.k.setItem(PF, performance.timeOrigin)
    }

    function NF() {
      return uF.k.getItem(PF) === performance.timeOrigin
    }

    function DF(FF) {
      return !(0, AF.f)(FF.manifest.apiVersion)
    }

    function LF(FF) {
      return RF ??= FF.NWF((0, dF.shaderPackTextures)()), RF
    }

    function mW(FF, WF) {
      var SF;
      return (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.headerVersion) !== LF(WF)
    }

    function OF(FF) {
      return QF((async () => {
        ZF(await (0, bW.f)(!0), FF)
      }))
    }

    function xW() {
      return QF((async () => {
        uF.h.removeItem(hF.e)
      }))
    }

    function ZF(FF, WF) {
      kW(FF, WF) ? uF.h.setItem(hF.e, !0) : uF.h.removeItem(hF.e)
    }
  },
  5603: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadShaderPackTextures: () => hF,
      shaderPackTextures: () => bW
    });
    var CF = SF(5564);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= Promise.all([SF.e(59), SF.e(177)]).then((() => SF(38458))).then((FF => {
        let {
          textureNameToIndex: WF,
          textureAnimationData: SF
        } = FF;
        return AF ??= (0, CF.m)(WF, SF), AF
      })), uF
    }

    function bW() {
      if (null === AF) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AF
    }
  },
  5624: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      f: () => bW
    });
    var CF = SF(5626),
      AF = SF(5603),
      uF = SF(112);
    const hF = 100;
    async function bW(FF, WF) {
      var SF;
      let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (SF = navigator.gpu) && void 0 !== SF ? SF : null;
      const hF = FF.RhF(WF, (0, AF.shaderPackTextures)());
      if (hF.errors.length > 0) return PF(FF, hF.errors, hF.offInStrict);
      const bW = await async function(FF) {
        if (!FF) return null;
        try {
          const WF = await (0, uF.s)(FF);
          return WF ? await WF.requestDevice() : null
        } catch (WF) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WF), null
        }
      }(CF);
      if (!bW) return null;
      let dF = !1;
      bW.lost.then((() => {
        dF = !0
      }));
      try {
        const WF = await Promise.all(hF.validationModules.map((WF => async function(FF, WF, SF) {
          WF.pushErrorScope("validation");
          const CF = WF.createShaderModule({
              code: SF.code
            }),
            AF = WF.popErrorScope(),
            {
              messages: uF
            } = await CF.getCompilationInfo(),
            hF = uF.filter((FF => "error" === FF.type)).map((WF => FF.mapValidationMessage(SF, WF))),
            bW = await AF;
          bW && 0 === hF.length && hF.push({
            file: null,
            line: 0,
            message: bW.message,
            variants: [SF.key]
          });
          return hF
        }(FF, bW, WF))));
        return dF ? null : PF(FF, FF.WPF(WF.flat()), hF.offInStrict)
      } catch (RF) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RF), null
      } finally {
        bW.destroy()
      }
    }
    async function dF(FF, WF) {
      var SF;
      if (!(0, CF.shaderPackNeedsCheck)(FF, WF) || (0, CF.isOtherApiVersion)(FF)) return FF;
      const AF = await bW(WF, (0, CF.storedShaderPackFiles)(FF));
      if (!AF) return FF;
      const uF = !1 === (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) && !FF.validation.fromRecheck,
        hF = {
          ...FF,
          validation: uF ? AF : {
            ...AF,
            fromRecheck: !0
          }
        };
      return await (0, CF.replaceShaderPack)(FF, hF, WF) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hF
    }

    function PF(FF, WF, SF) {
      return {
        headerVersion: (0, CF.pageShaderPackValidationVersion)(FF),
        ok: 0 === WF.length,
        errors: WF.slice(0, hF),
        moreErrors: Math.max(0, WF.length - hF),
        offInStrict: SF
      }
    }
  },
  5564: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      f: () => uF,
      j: () => CF,
      m: () => QF,
      o: () => RF,
      p: () => AF,
      q: () => dF,
      r: () => PF,
      t: () => iW
    });
    const CF = 5;

    function AF(FF) {
      return FF === CF
    }
    const uF = 262144,
      hF = 256,
      bW = 256;

    function dF(FF) {
      if ("object" !== typeof FF || null === FF || Array.isArray(FF)) return "The pack has no files.";
      const WF = [];
      for (const [SF, CF] of Object.entries(FF)) {
        if ("string" !== typeof CF) return `${SF} isn't text.`;
        WF.push({
          path: SF,
          source: CF
        })
      }
      return WF.sort(((FF, WF) => RF(FF.path, WF.path))),
        function(FF) {
          if (0 === FF.length) return "The pack has no .wgsl files.";
          if (FF.length > hF) return `The pack has more than ${hF} .wgsl files.`;
          const WF = new Set;
          for (const {
              path: SF
            }
            of FF) {
            const FF = eF(SF);
            if (null !== FF) return FF;
            if (WF.has(SF)) return `The pack has two files at ${SF}.`;
            WF.add(SF)
          }
          return iW(FF) > uF ? `The pack's .wgsl files are over ${uF/1024} KB in total.` : null
        }(WF) ?? WF
    }

    function PF(FF) {
      const WF = {};
      for (const SF of FF) WF[SF.path] = SF.source;
      return WF
    }

    function RF(FF, WF) {
      return FF < WF ? -1 : FF > WF ? 1 : 0
    }

    function iW(FF) {
      const WF = new TextEncoder;
      let SF = 0;
      for (const {
          source: CF
        }
        of FF) SF += WF.encode(CF).byteLength;
      return SF
    }

    function eF(FF) {
      if (!FF.toLowerCase().endsWith(".wgsl")) return `${FF} isn't a .wgsl file.`;
      if (FF.length > bW) return `A file path is over ${bW} characters.`;
      if (FF.includes("\\") || /[\u0000-\u001f]/.test(FF)) return `${FF} isn't a valid file path.`;
      return FF.split("/").some((FF => "" === FF || "." === FF || ".." === FF)) ? `${FF} isn't a valid file path.` : null
    }
    const EF = /^(.*)\[rot\[([1-4])$/;

    function QF(FF, WF) {
      const SF = new Map;
      WF.forEach(((FF, WF) => {
        let {
          numAnimStates: CF,
          animStartIdx: AF
        } = FF;
        for (let uF = 1; uF < CF; uF++) SF.set(AF + uF - 1, WF)
      }));
      const CF = Object.entries(FF),
        AF = new Map;
      for (const [QF, rW] of CF) {
        const FF = EF.exec(QF);
        "1" === FF?.[2] && AF.set(FF[1], rW + 1)
      }
      const uF = FF => {
          const WF = EF.exec(FF);
          return WF && AF.has(WF[1]) ? {
            root: WF[1],
            rotation: Number(WF[2]) - 1
          } : null
        },
        hF = new Set(CF.map((FF => {
          let [WF] = FF;
          return uF(WF)?.root ?? WF
        }))),
        bW = (FF, SF) => {
          const CF = FF.replace(/_?0$/, "");
          return (WF[SF]?.numAnimStates ?? 0) > 1 && !hF.has(CF) ? CF : FF
        },
        dF = new Map;
      for (const [EF, QF] of CF) dF.set(QF, bW(uF(EF)?.root ?? EF, QF));
      const PF = CF.reduce(((FF, WF) => {
          let [, SF] = WF;
          return Math.max(FF, SF + 1)
        }), 0),
        RF = Array.from({
          length: PF
        }, ((FF, WF) => ({
          id: WF + 1,
          rotation: 0
        }))),
        iW = new Map,
        eF = new Map;
      for (const [EF, QF] of CF) {
        const FF = uF(EF),
          WF = SF.get(QF);
        if (void 0 !== WF) {
          const SF = dF.get(WF);
          eF.set(EF, {
            name: EF,
            texture: SF,
            kind: "frame"
          }), FF && !eF.has(FF.root) && eF.set(FF.root, {
            name: FF.root,
            texture: SF,
            kind: "frame"
          });
          continue
        }
        const CF = dF.get(QF),
          hF = FF?.root ?? EF;
        if (CF !== hF && eF.set(hF, {
            name: hF,
            texture: CF,
            kind: "frame"
          }), FF) {
          const WF = AF.get(FF.root);
          RF[QF] = {
            id: WF,
            rotation: FF.rotation
          }, iW.set(CF, WF), eF.set(EF, {
            name: EF,
            texture: CF,
            kind: "rotation"
          })
        } else iW.set(CF, QF + 1)
      }
      for (const EF of iW.keys()) eF.delete(EF);
      return {
        named: [...iW].sort(((FF, WF) => {
          let [SF] = FF, [CF] = WF;
          return SF < CF ? -1 : SF > CF ? 1 : 0
        })).map((FF => {
          let [WF, SF] = FF;
          return {
            name: WF,
            id: SF
          }
        })),
        aliases: [...eF.values()],
        layers: RF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);