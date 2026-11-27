export const id = 156;
export const ids = [156, 159, 160];
export const modules = {
  7609: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => PW
    });
    var mW = OW(5952),
      EW = OW(1283);
    const NW = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function PW(WW) {
      let {
        diagnostics: iW,
        more: OW = 0,
        t: PW
      } = WW;
      return (0, EW.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [iW.map(((WW, iW) => {
          const OW = (0, mW.e)(WW),
            LW = function(WW, iW) {
              const OW = (0, mW.d)(null !== WW && void 0 !== WW ? WW : []);
              if (0 === OW.length) return null;
              return OW.map((WW => WW.map((WW => iW(NW[WW]))).join(", "))).join("; ")
            }(WW.variants, PW);
          return (0, EW.jsxs)("li", {
            children: [OW && (0, EW.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: OW
            }), WW.message, LW && (0, EW.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: PW("shaderPack:onlyIn", {
                variants: LW
              })
            })]
          }, iW)
        })), OW > 0 && (0, EW.jsx)("li", {
          children: PW("shaderPack:moreErrors", {
            count: String(OW)
          })
        })]
      })
    }
  },
  7615: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => SW,
      d: () => YW
    });
    var mW = OW(62),
      EW = OW(1089),
      NW = OW.n(EW),
      PW = OW(5864),
      LW = OW(1383),
      cW = OW(1391),
      wW = OW(1172),
      tW = OW(5970),
      ZW = OW(5961),
      xW = OW(4349);
    const lW = 33554432,
      AW = 1024,
      bW = 65536;
    async function jW(WW) {
      const iW = (0, xW.t)(WW);
      if (iW) {
        if (iW.size > lW) throw new xW.e("shaderPack:loadZipTooBig", {
          megabytes: String(lW / 1048576)
        });
        return async function(WW) {
          return UW((0, xW.j)(WW, AW).map((iW => ({
            path: iW.path,
            read: OW => (0, xW.p)(WW, iW, OW)
          }))))
        }(new Uint8Array(await iW.arrayBuffer()))
      }
      return UW(WW.map((WW => ({
        path: (0, xW.n)(WW),
        read: iW => async function(WW, iW) {
          return WW.size > iW ? null : new Uint8Array(await WW.arrayBuffer())
        }(WW, iW)
      }))))
    }
    async function UW(WW) {
      const iW = function(WW) {
          const iW = WW.length > 0 ? WW[0].path.indexOf("/") : -1;
          if (-1 === iW) return WW;
          const OW = WW[0].path.slice(0, iW + 1);
          if (!WW.every((WW => WW.path.startsWith(OW)))) return WW;
          return WW.map((WW => ({
            ...WW,
            path: WW.path.slice(OW.length)
          })))
        }(WW.filter((WW => !(0, xW.i)(WW.path)))),
        OW = iW.filter((WW => "pack.json" === WW.path.toLowerCase()));
      if (0 === OW.length) throw new xW.e("shaderPack:loadNoManifest");
      if (OW.length > 1) throw new xW.e("shaderPack:loadDuplicateManifest");
      const mW = OW[0],
        EW = await mW.read(bW);
      if (null === EW) throw new xW.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(bW / 1024)
      });
      const NW = function(WW) {
          let iW;
          try {
            iW = JSON.parse(WW)
          } catch (LW) {
            throw new xW.e("shaderPack:loadManifestNotJson", {
              error: LW.message
            }, {
              cause: LW
            })
          }
          if ("object" !== typeof iW || null === iW || Array.isArray(iW)) throw new xW.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: OW,
            name: mW,
            author: EW,
            description: NW,
            keepCircleShadows: PW
          } = iW;
          if (void 0 === OW) throw new xW.e("shaderPack:loadNoApiVersion", {
            version: String(ZW.b)
          });
          if (!(0, ZW.g)(OW)) throw new xW.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(OW),
            version: String(ZW.b)
          });
          if ("string" !== typeof mW || "" === mW.trim()) throw new xW.e("shaderPack:loadNoName");
          if (void 0 !== EW && null !== EW && "string" !== typeof EW) throw new xW.e("shaderPack:loadAuthorNotString");
          if (void 0 !== NW && null !== NW && "string" !== typeof NW) throw new xW.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== PW && "boolean" !== typeof PW) throw new xW.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: OW,
            name: mW,
            author: "string" === typeof EW ? EW : null,
            description: "string" === typeof NW && "" !== NW.trim() ? NW : null,
            keepCircleShadows: !0 === PW
          }
        }(kW(EW, mW.path)),
        PW = iW.filter((WW => WW.path.toLowerCase().endsWith(".wgsl"))).sort(((WW, iW) => (0, tW.p)(WW.path, iW.path)));
      if (0 === PW.length) throw new xW.e("shaderPack:loadNoWgsl");
      if (PW.length > tW.e) throw new xW.e("shaderPack:loadTooManyWgsl", {
        count: String(tW.e)
      });
      const LW = PW.find(((WW, iW) => iW > 0 && WW.path === PW[iW - 1].path));
      if (LW) throw new xW.e("shaderPack:loadDuplicatePath", {
        path: LW.path
      });
      const cW = [];
      let wW = tW.i;
      for (const ZW of PW) {
        const WW = await ZW.read(wW);
        if (null === WW) throw new xW.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(tW.i / 1024)
        });
        wW -= WW.byteLength, cW.push({
          path: ZW.path,
          source: kW(WW, ZW.path)
        })
      }
      return {
        manifest: NW,
        files: cW
      }
    }

    function kW(WW, iW) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(WW)
      } catch (OW) {
        throw new xW.e("shaderPack:loadNotUtf8", {
          path: iW
        }, {
          cause: OW
        })
      }
    }
    var sW = OW(5952),
      MW = OW(5978),
      KW = OW(1283);

    function SW(WW) {
      let {
        busy: iW,
        disabled: OW,
        onFiles: mW
      } = WW;
      const {
        t: EW
      } = (0, wW.B)(), {
        getRootProps: tW,
        getInputProps: ZW,
        isDragActive: xW,
        open: lW
      } = (0, PW.e)({
        onDrop: mW,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: OW
      });
      return (0, KW.jsxs)("div", {
        ...tW({
          className: NW()("ShaderPackDropZone", {
            ActiveDrag: xW,
            Disabled: OW
          })
        }),
        children: [(0, KW.jsx)("input", {
          ...ZW({
            webkitdirectory: "true"
          })
        }), iW && (0, KW.jsx)(LW.d, {}), !iW && (0, KW.jsxs)(KW.Fragment, {
          children: [(0, KW.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, KW.jsx)(cW.c, {
              name: "up-from-bracket"
            })
          }), (0, KW.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: EW((0, MW.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, KW.jsx)(MW.b, {
            disabled: OW,
            openFolderPicker: lW,
            onFiles: mW
          })]
        })]
      })
    }

    function YW(WW) {
      const {
        t: iW
      } = (0, wW.B)(), [OW, EW] = (0, mW.useState)(!1), [NW, PW] = (0, mW.useState)(null), LW = (0, mW.useRef)(!1);
      return {
        loading: OW,
        error: NW,
        setError: PW,
        onFiles: async function(OW) {
          if (!LW.current) {
            LW.current = !0, EW(!0), PW(null);
            try {
              await WW(await jW(OW))
            } catch (mW) {
              mW instanceof xW.e ? PW((0, sW.h)(iW, mW.translationKey, mW.params)) : (console.error("Failed to load the shader pack", mW), PW(iW("shaderPack:unexpectedError")))
            } finally {
              LW.current = !1, EW(!1)
            }
          }
        }
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
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);