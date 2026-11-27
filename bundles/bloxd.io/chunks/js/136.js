export const id = 136;
export const ids = [136, 139, 159, 160];
export const modules = {
  5961: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.l,
      c: () => EW,
      g: () => mW.r
    });
    var mW = OW(5970);
    const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
      strict: WW,
      program: iW
    })))))
  },
  42022: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => ZW,
      installListedShaderPack: () => tW
    });
    var mW = OW(7570),
      EW = OW(5970),
      NW = OW(1185),
      PW = OW(7621),
      LW = OW(5961),
      cW = OW(7656),
      wW = OW(7648);
    async function tW(WW) {
      const iW = await (0, PW.loadPageShaderPackCompiler)();
      if (null === iW) return {
        kind: "failed",
        reason: "compiler"
      };
      const OW = await ZW(WW, iW);
      return "failed" === OW.kind ? OW : await (0, cW.saveShaderPack)(OW.stored, iW) ? ((0, cW.markShaderPackChangePending)(), OW) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function ZW(WW, iW) {
      const OW = await async function(WW) {
        let {
          packId: iW,
          sourceHash: OW
        } = WW;
        try {
          const WW = await fetch(`${NW.clientSideServerUrls.s3Url}/${(0,mW.L)(iW,OW)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!WW.ok) return console.error(`Failed to download shader pack ${iW} (${WW.status})`), null;
          const EW = await WW.json();
          return "object" !== typeof EW || null === EW ? (console.error(`Shader pack ${iW}'s source isn't an object`), null) : EW
        } catch (EW) {
          return console.error(`Failed to download shader pack ${iW}`, EW), null
        }
      }(WW);
      if (null === OW) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, LW.g)(OW.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const PW = (0, EW.x)(OW.files);
      if ("string" === typeof PW) return console.error(`A listed shader pack breaks the pack rules: ${PW}`), {
        kind: "failed",
        reason: "invalid"
      };
      const tW = await (0, wW.g)(iW, PW);
      if (!1 === (null === tW || void 0 === tW ? void 0 : tW.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const ZW = {
        manifest: {
          apiVersion: OW.apiVersion,
          name: WW.name,
          author: WW.ownerName,
          description: WW.description || null,
          keepCircleShadows: !0 === OW.keepCircleShadows
        },
        files: PW
      };
      return {
        kind: "loaded",
        stored: (0, cW.toStoredShaderPack)(ZW, tW, {
          packId: WW.packId,
          sourceHash: WW.sourceHash
        })
      }
    }
  },
  7656: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      forgetShaderPackActiveHint: () => HW,
      isOtherApiVersion: () => yW,
      isShaderPackActive: () => MW,
      isShaderPackChangePending: () => YW,
      markShaderPackChangePending: () => SW,
      pageShaderPackValidationVersion: () => TW,
      reconcileStoredShaderPackHint: () => hW,
      removeShaderPack: () => sW,
      replaceShaderPack: () => jW,
      saveShaderPack: () => bW,
      shaderPackNeedsCheck: () => JW,
      storedPackOutcome: () => KW,
      storedShaderPackFiles: () => xW,
      toStoredShaderPack: () => ZW
    });
    var mW = OW(5970),
      EW = OW(5961),
      NW = OW(39),
      PW = OW(4666),
      LW = OW(7659),
      cW = OW(7637);
    const wW = "shaderPackChangePending";
    let tW = null;

    function ZW(WW, iW, OW) {
      return {
        manifest: WW.manifest,
        files: (0, mW.A)(WW.files),
        validation: iW,
        ...OW && {
          listing: OW
        }
      }
    }

    function xW(WW) {
      return Object.keys(WW.files).map((iW => ({
        path: iW,
        source: WW.files[iW]
      })))
    }
    let lW = Promise.resolve();

    function AW(WW) {
      const iW = lW.then(WW);
      return lW = iW.catch((() => {})), iW
    }

    function bW(WW, iW) {
      return AW((() => UW(WW, iW)))
    }

    function jW(WW, iW, OW) {
      return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
    }
    async function UW(WW, iW) {
      const OW = await NW.f.setItem(LW.c, WW);
      return OW && nW(WW, iW), OW
    }
    async function kW() {
      await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
    }

    function sW() {
      return AW(kW)
    }

    function MW(WW, iW) {
      return "active" === KW(WW, iW).kind
    }

    function KW(WW, iW) {
      var OW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : yW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) || WW.validation.fromRecheck ? null === iW ? {
        kind: "none",
        reason: "noCompiler"
      } : JW(WW, iW) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : WW.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function SW() {
      NW.j.setItem(wW, performance.timeOrigin)
    }

    function YW() {
      return NW.j.getItem(wW) === performance.timeOrigin
    }

    function yW(WW) {
      return !(0, EW.g)(WW.manifest.apiVersion)
    }

    function TW(WW) {
      return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
    }

    function JW(WW, iW) {
      var OW;
      return (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.headerVersion) !== TW(iW)
    }

    function hW(WW) {
      return AW((async () => {
        nW(await (0, LW.g)(!0), WW)
      }))
    }

    function HW() {
      return AW((async () => {
        NW.i.removeItem(PW.b)
      }))
    }

    function nW(WW, iW) {
      MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
    }
  },
  7637: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      loadShaderPackTextures: () => PW,
      shaderPackTextures: () => LW
    });
    var mW = OW(5970);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: iW,
          textureNameToIndex: OW,
          textureAnimationData: NW
        } = WW;
        return EW ??= (0, mW.o)(OW, NW, iW), EW
      })), NW
    }

    function LW() {
      if (null === EW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return EW
    }
  },
  7648: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => cW,
      g: () => LW
    });
    var mW = OW(7656),
      EW = OW(7637),
      NW = OW(119);
    const PW = 100;
    async function LW(WW, iW) {
      var OW;
      let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
      const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
      if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
      const LW = await async function(WW) {
        if (!WW) return null;
        try {
          const iW = await (0, NW.r)(WW);
          return iW ? await iW.requestDevice() : null
        } catch (iW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
        }
      }(mW);
      if (!LW) return null;
      let cW = !1;
      LW.lost.then((() => {
        cW = !0
      }));
      try {
        const iW = await Promise.all(PW.validationModules.map((iW => async function(WW, iW, OW) {
          iW.pushErrorScope("validation");
          const mW = iW.createShaderModule({
              code: OW.code
            }),
            EW = iW.popErrorScope(),
            {
              messages: NW
            } = await mW.getCompilationInfo(),
            PW = NW.filter((WW => "error" === WW.type)).map((iW => WW.mapValidationMessage(OW, iW))),
            LW = await EW;
          LW && 0 === PW.length && PW.push({
            file: null,
            line: 0,
            message: LW.message,
            variants: [OW.key]
          });
          return PW
        }(WW, LW, iW))));
        return cW ? null : wW(WW, WW.smW(iW.flat()), PW.offInStrict)
      } catch (tW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", tW), null
      } finally {
        LW.destroy()
      }
    }
    async function cW(WW, iW) {
      var OW;
      if (!(0, mW.shaderPackNeedsCheck)(WW, iW) || (0, mW.isOtherApiVersion)(WW)) return WW;
      const EW = await LW(iW, (0, mW.storedShaderPackFiles)(WW));
      if (!EW) return WW;
      const NW = !1 === (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) && !WW.validation.fromRecheck,
        PW = {
          ...WW,
          validation: NW ? EW : {
            ...EW,
            fromRecheck: !0
          }
        };
      return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
    }

    function wW(WW, iW, OW) {
      return {
        headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
        ok: 0 === iW.length,
        errors: iW.slice(0, PW),
        moreErrors: Math.max(0, iW.length - PW),
        offInStrict: OW
      }
    }
  },
  5970: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => tW,
      D: () => xW,
      e: () => LW,
      i: () => PW,
      l: () => mW,
      o: () => bW,
      p: () => ZW,
      r: () => EW,
      v: () => NW,
      x: () => wW
    });
    const mW = 5;

    function EW(WW) {
      return WW === mW
    }

    function NW(WW) {
      return [...WW.features]
    }
    const PW = 262144,
      LW = 256,
      cW = 256;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const iW = [];
      for (const [OW, mW] of Object.entries(WW)) {
        if ("string" !== typeof mW) return `${OW} isn't text.`;
        iW.push({
          path: OW,
          source: mW
        })
      }
      return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
          const iW = new Set;
          for (const {
              path: OW
            }
            of WW) {
            const WW = lW(OW);
            if (null !== WW) return WW;
            if (iW.has(OW)) return `The pack has two files at ${OW}.`;
            iW.add(OW)
          }
          return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
        }(iW) ?? iW
    }

    function tW(WW) {
      const iW = {};
      for (const OW of WW) iW[OW.path] = OW.source;
      return iW
    }

    function ZW(WW, iW) {
      return WW < iW ? -1 : WW > iW ? 1 : 0
    }

    function xW(WW) {
      const iW = new TextEncoder;
      let OW = 0;
      for (const {
          source: mW
        }
        of WW) OW += iW.encode(mW).byteLength;
      return OW
    }

    function lW(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > cW) return `A file path is over ${cW} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const AW = /^(.*)\[rot\[([1-4])$/;

    function bW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const mW = new Map;
      iW.forEach(((WW, iW) => {
        let {
          numAnimStates: OW,
          animStartIdx: EW
        } = WW;
        for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
      }));
      const EW = Object.entries(WW),
        NW = new Map;
      for (const [bW, jW] of EW) {
        const WW = AW.exec(bW);
        "1" === WW?.[2] && NW.set(WW[1], jW + 1)
      }
      const PW = WW => {
          const iW = AW.exec(WW);
          return iW && NW.has(iW[1]) ? {
            root: iW[1],
            rotation: Number(iW[2]) - 1
          } : null
        },
        LW = new Set(EW.map((WW => {
          let [iW] = WW;
          return PW(iW)?.root ?? iW
        }))),
        cW = (WW, OW) => {
          const mW = WW.replace(/_?0$/, "");
          return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
        },
        wW = new Map;
      for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
      const tW = EW.reduce(((WW, iW) => {
          let [, OW] = iW;
          return Math.max(WW, OW + 1)
        }), 0),
        ZW = Array.from({
          length: tW
        }, ((WW, iW) => ({
          id: iW + 1,
          rotation: 0
        }))),
        xW = new Map,
        lW = new Map;
      for (const [AW, bW] of EW) {
        const WW = PW(AW),
          iW = mW.get(bW);
        if (void 0 !== iW) {
          const OW = wW.get(iW);
          lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "frame"
          }), WW && !lW.has(WW.root) && lW.set(WW.root, {
            name: WW.root,
            texture: OW,
            kind: "frame"
          });
          continue
        }
        const OW = wW.get(bW),
          EW = WW?.root ?? AW;
        if (OW !== EW && lW.set(EW, {
            name: EW,
            texture: OW,
            kind: "frame"
          }), WW) {
          const iW = NW.get(WW.root);
          ZW[bW] = {
            id: iW,
            rotation: WW.rotation
          }, xW.set(OW, iW), lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "rotation"
          })
        } else xW.set(OW, bW + 1)
      }
      for (const AW of xW.keys()) lW.delete(AW);
      for (const [AW, bW] of OW) {
        const WW = xW.get(bW);
        void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
      }
      return {
        named: [...xW].sort(((WW, iW) => {
          let [OW] = WW, [mW] = iW;
          return OW < mW ? -1 : OW > mW ? 1 : 0
        })).map((WW => {
          let [iW, OW] = WW;
          return {
            name: iW,
            id: OW
          }
        })),
        aliases: [...lW.values()],
        layers: ZW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);