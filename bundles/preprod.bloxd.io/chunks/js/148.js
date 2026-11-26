export const id = 148;
export const ids = [148, 152, 153];
export const modules = {
  7155: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(5520),
      rH = LH(1225);
    const SH = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function hH(HH) {
      let {
        diagnostics: BH,
        more: LH = 0,
        t: hH
      } = HH;
      return (0, rH.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [BH.map(((HH, BH) => {
          const LH = (0, AH.f)(HH),
            tH = function(HH, BH) {
              const LH = (0, AH.d)(null !== HH && void 0 !== HH ? HH : []);
              if (0 === LH.length) return null;
              return LH.map((HH => HH.map((HH => BH(SH[HH]))).join(", "))).join("; ")
            }(HH.variants, hH);
          return (0, rH.jsxs)("li", {
            children: [LH && (0, rH.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: LH
            }), HH.message, tH && (0, rH.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: hH("shaderPack:onlyIn", {
                variants: tH
              })
            })]
          }, BH)
        })), LH > 0 && (0, rH.jsx)("li", {
          children: hH("shaderPack:moreErrors", {
            count: String(LH)
          })
        })]
      })
    }
  },
  7161: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => UH,
      f: () => VH
    });
    var AH = LH(45),
      rH = LH(1038),
      SH = LH.n(rH),
      hH = LH(5446),
      tH = LH(1313),
      zH = LH(1315),
      CH = LH(1123),
      EH = LH(5531),
      XH = LH(5523),
      GH = LH(3514);
    const YH = 33554432,
      uH = 1024,
      QH = 65536;
    async function WH(HH) {
      const BH = (0, GH.p)(HH);
      if (BH) {
        if (BH.size > YH) throw new GH.d("shaderPack:loadZipTooBig", {
          megabytes: String(YH / 1048576)
        });
        return async function(HH) {
          return MH((0, GH.g)(HH, uH).map((BH => ({
            path: BH.path,
            read: LH => (0, GH.l)(HH, BH, LH)
          }))))
        }(new Uint8Array(await BH.arrayBuffer()))
      }
      return MH(HH.map((HH => ({
        path: (0, GH.h)(HH),
        read: BH => async function(HH, BH) {
          return HH.size > BH ? null : new Uint8Array(await HH.arrayBuffer())
        }(HH, BH)
      }))))
    }
    async function MH(HH) {
      const BH = function(HH) {
          const BH = HH.length > 0 ? HH[0].path.indexOf("/") : -1;
          if (-1 === BH) return HH;
          const LH = HH[0].path.slice(0, BH + 1);
          if (!HH.every((HH => HH.path.startsWith(LH)))) return HH;
          return HH.map((HH => ({
            ...HH,
            path: HH.path.slice(LH.length)
          })))
        }(HH.filter((HH => !(0, GH.f)(HH.path)))),
        LH = BH.filter((HH => "pack.json" === HH.path.toLowerCase()));
      if (0 === LH.length) throw new GH.d("shaderPack:loadNoManifest");
      if (LH.length > 1) throw new GH.d("shaderPack:loadDuplicateManifest");
      const AH = LH[0],
        rH = await AH.read(QH);
      if (null === rH) throw new GH.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(QH / 1024)
      });
      const SH = function(HH) {
          let BH;
          try {
            BH = JSON.parse(HH)
          } catch (tH) {
            throw new GH.d("shaderPack:loadManifestNotJson", {
              error: tH.message
            }, {
              cause: tH
            })
          }
          if ("object" !== typeof BH || null === BH || Array.isArray(BH)) throw new GH.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: LH,
            name: AH,
            author: rH,
            description: SH,
            keepCircleShadows: hH
          } = BH;
          if (void 0 === LH) throw new GH.d("shaderPack:loadNoApiVersion", {
            version: String(XH.b)
          });
          if (!(0, XH.g)(LH)) throw new GH.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(LH),
            version: String(XH.b)
          });
          if ("string" !== typeof AH || "" === AH.trim()) throw new GH.d("shaderPack:loadNoName");
          if (void 0 !== rH && null !== rH && "string" !== typeof rH) throw new GH.d("shaderPack:loadAuthorNotString");
          if (void 0 !== SH && null !== SH && "string" !== typeof SH) throw new GH.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== hH && "boolean" !== typeof hH) throw new GH.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: LH,
            name: AH,
            author: "string" === typeof rH ? rH : null,
            description: "string" === typeof SH && "" !== SH.trim() ? SH : null,
            keepCircleShadows: !0 === hH
          }
        }(xH(rH, AH.path)),
        hH = BH.filter((HH => HH.path.toLowerCase().endsWith(".wgsl"))).sort(((HH, BH) => (0, EH.j)(HH.path, BH.path)));
      if (0 === hH.length) throw new GH.d("shaderPack:loadNoWgsl");
      if (hH.length > EH.c) throw new GH.d("shaderPack:loadTooManyWgsl", {
        count: String(EH.c)
      });
      const tH = hH.find(((HH, BH) => BH > 0 && HH.path === hH[BH - 1].path));
      if (tH) throw new GH.d("shaderPack:loadDuplicatePath", {
        path: tH.path
      });
      const zH = [];
      let CH = EH.d;
      for (const XH of hH) {
        const HH = await XH.read(CH);
        if (null === HH) throw new GH.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(EH.d / 1024)
        });
        CH -= HH.byteLength, zH.push({
          path: XH.path,
          source: xH(HH, XH.path)
        })
      }
      return {
        manifest: SH,
        files: zH
      }
    }

    function xH(HH, BH) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(HH)
      } catch (LH) {
        throw new GH.d("shaderPack:loadNotUtf8", {
          path: BH
        }, {
          cause: LH
        })
      }
    }
    var vH = LH(5520),
      PH = LH(5539),
      TH = LH(1225);

    function UH(HH) {
      let {
        busy: BH,
        disabled: LH,
        onFiles: AH
      } = HH;
      const {
        t: rH
      } = (0, CH.B)(), {
        getRootProps: EH,
        getInputProps: XH,
        isDragActive: GH,
        open: YH
      } = (0, hH.c)({
        onDrop: AH,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: LH
      });
      return (0, TH.jsxs)("div", {
        ...EH({
          className: SH()("ShaderPackDropZone", {
            ActiveDrag: GH,
            Disabled: LH
          })
        }),
        children: [(0, TH.jsx)("input", {
          ...XH({
            webkitdirectory: "true"
          })
        }), BH && (0, TH.jsx)(tH.d, {}), !BH && (0, TH.jsxs)(TH.Fragment, {
          children: [(0, TH.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, TH.jsx)(zH.c, {
              name: "up-from-bracket"
            })
          }), (0, TH.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: rH((0, PH.d)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, TH.jsx)(PH.c, {
            disabled: LH,
            openFolderPicker: YH,
            onFiles: AH
          })]
        })]
      })
    }

    function VH(HH) {
      const {
        t: BH
      } = (0, CH.B)(), [LH, rH] = (0, AH.useState)(!1), [SH, hH] = (0, AH.useState)(null), tH = (0, AH.useRef)(!1);
      return {
        loading: LH,
        error: SH,
        setError: hH,
        onFiles: async function(LH) {
          if (!tH.current) {
            tH.current = !0, rH(!0), hH(null);
            try {
              await HH(await WH(LH))
            } catch (AH) {
              AH instanceof GH.d ? hH((0, vH.i)(BH, AH.translationKey, AH.params)) : (console.error("Failed to load the shader pack", AH), hH(BH("shaderPack:unexpectedError")))
            } finally {
              tH.current = !1, rH(!1)
            }
          }
        }
      }
    }
  },
  7201: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      forgetShaderPackActiveHint: () => oH,
      isOtherApiVersion: () => OH,
      isShaderPackActive: () => PH,
      isShaderPackChangePending: () => VH,
      markShaderPackChangePending: () => UH,
      pageShaderPackValidationVersion: () => bH,
      reconcileStoredShaderPackHint: () => mH,
      removeShaderPack: () => vH,
      replaceShaderPack: () => WH,
      saveShaderPack: () => QH,
      shaderPackNeedsCheck: () => kH,
      storedPackOutcome: () => TH,
      storedShaderPackFiles: () => GH,
      toStoredShaderPack: () => XH
    });
    var AH = LH(5531),
      rH = LH(5523),
      SH = LH(30),
      hH = LH(3831),
      tH = LH(7209),
      zH = LH(7179);
    const CH = "shaderPackChangePending";
    let EH = null;

    function XH(HH, BH, LH) {
      return {
        manifest: HH.manifest,
        files: (0, AH.t)(HH.files),
        validation: BH,
        ...LH && {
          listing: LH
        }
      }
    }

    function GH(HH) {
      return Object.keys(HH.files).map((BH => ({
        path: BH,
        source: HH.files[BH]
      })))
    }
    let YH = Promise.resolve();

    function uH(HH) {
      const BH = YH.then(HH);
      return YH = BH.catch((() => {})), BH
    }

    function QH(HH, BH) {
      return uH((() => MH(HH, BH)))
    }

    function WH(HH, BH, LH) {
      return uH((async () => JSON.stringify(await (0, tH.e)()) === JSON.stringify(HH) && (null === BH ? (await xH(), !0) : MH(BH, LH))))
    }
    async function MH(HH, BH) {
      const LH = await SH.c.setItem(tH.c, HH);
      return LH && IH(HH, BH), LH
    }
    async function xH() {
      await SH.c.removeItem(tH.c), SH.e.removeItem(hH.d)
    }

    function vH() {
      return uH(xH)
    }

    function PH(HH, BH) {
      return "active" === TH(HH, BH).kind
    }

    function TH(HH, BH) {
      var LH;
      return null === HH ? {
        kind: "none",
        reason: "nothingStored"
      } : OH(HH) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) || HH.validation.fromRecheck ? null === BH ? {
        kind: "none",
        reason: "noCompiler"
      } : kH(HH, BH) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : HH.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function UH() {
      SH.f.setItem(CH, performance.timeOrigin)
    }

    function VH() {
      return SH.f.getItem(CH) === performance.timeOrigin
    }

    function OH(HH) {
      return !(0, rH.g)(HH.manifest.apiVersion)
    }

    function bH(HH) {
      return EH ??= HH.kN((0, zH.shaderPackTextures)()), EH
    }

    function kH(HH, BH) {
      var LH;
      return (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.headerVersion) !== bH(BH)
    }

    function mH(HH) {
      return uH((async () => {
        IH(await (0, tH.e)(!0), HH)
      }))
    }

    function oH() {
      return uH((async () => {
        SH.e.removeItem(hH.d)
      }))
    }

    function IH(HH, BH) {
      PH(HH, BH) ? SH.e.setItem(hH.d, !0) : SH.e.removeItem(hH.d)
    }
  },
  7179: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadShaderPackTextures: () => hH,
      shaderPackTextures: () => tH
    });
    var AH = LH(5531);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: BH,
          textureNameToIndex: LH,
          textureAnimationData: SH
        } = HH;
        return rH ??= (0, AH.f)(LH, SH, BH), rH
      })), SH
    }

    function tH() {
      if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return rH
    }
  },
  7196: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      d: () => tH
    });
    var AH = LH(7201),
      rH = LH(7179),
      SH = LH(105);
    const hH = 100;
    async function tH(HH, BH) {
      var LH;
      let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (LH = navigator.gpu) && void 0 !== LH ? LH : null;
      const hH = HH.YBH(BH, (0, rH.shaderPackTextures)());
      if (hH.errors.length > 0) return CH(HH, hH.errors, hH.offInStrict);
      const tH = await async function(HH) {
        if (!HH) return null;
        try {
          const BH = await (0, SH.y)(HH);
          return BH ? await BH.requestDevice() : null
        } catch (BH) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", BH), null
        }
      }(AH);
      if (!tH) return null;
      let zH = !1;
      tH.lost.then((() => {
        zH = !0
      }));
      try {
        const BH = await Promise.all(hH.validationModules.map((BH => async function(HH, BH, LH) {
          BH.pushErrorScope("validation");
          const AH = BH.createShaderModule({
              code: LH.code
            }),
            rH = BH.popErrorScope(),
            {
              messages: SH
            } = await AH.getCompilationInfo(),
            hH = SH.filter((HH => "error" === HH.type)).map((BH => HH.mapValidationMessage(LH, BH))),
            tH = await rH;
          tH && 0 === hH.length && hH.push({
            file: null,
            line: 0,
            message: tH.message,
            variants: [LH.key]
          });
          return hH
        }(HH, tH, BH))));
        return zH ? null : CH(HH, HH.rrH(BH.flat()), hH.offInStrict)
      } catch (EH) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EH), null
      } finally {
        tH.destroy()
      }
    }
    async function zH(HH, BH) {
      var LH;
      if (!(0, AH.shaderPackNeedsCheck)(HH, BH) || (0, AH.isOtherApiVersion)(HH)) return HH;
      const rH = await tH(BH, (0, AH.storedShaderPackFiles)(HH));
      if (!rH) return HH;
      const SH = !1 === (null === (LH = HH.validation) || void 0 === LH ? void 0 : LH.ok) && !HH.validation.fromRecheck,
        hH = {
          ...HH,
          validation: SH ? rH : {
            ...rH,
            fromRecheck: !0
          }
        };
      return await (0, AH.replaceShaderPack)(HH, hH, BH) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hH
    }

    function CH(HH, BH, LH) {
      return {
        headerVersion: (0, AH.pageShaderPackValidationVersion)(HH),
        ok: 0 === BH.length,
        errors: BH.slice(0, hH),
        moreErrors: Math.max(0, BH.length - hH),
        offInStrict: LH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);