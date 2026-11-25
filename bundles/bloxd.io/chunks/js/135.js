export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6598: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(5046),
      SG = ZG(1067);
    const LG = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function yG(GG) {
      let {
        diagnostics: bG,
        more: ZG = 0,
        t: yG
      } = GG;
      return (0, SG.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [bG.map(((GG, bG) => {
          const ZG = (0, wG.d)(GG),
            kG = function(GG, bG) {
              const ZG = (0, wG.b)(null !== GG && void 0 !== GG ? GG : []);
              if (0 === ZG.length) return null;
              return ZG.map((GG => GG.map((GG => bG(LG[GG]))).join(", "))).join("; ")
            }(GG.variants, yG);
          return (0, SG.jsxs)("li", {
            children: [ZG && (0, SG.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ZG
            }), GG.message, kG && (0, SG.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: yG("shaderPack:onlyIn", {
                variants: kG
              })
            })]
          }, bG)
        })), ZG > 0 && (0, SG.jsx)("li", {
          children: yG("shaderPack:moreErrors", {
            count: String(ZG)
          })
        })]
      })
    }
  },
  6602: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => XG,
      g: () => uG
    });
    var wG = ZG(51),
      SG = ZG(1006),
      LG = ZG.n(SG),
      yG = ZG(4977),
      kG = ZG(1302),
      UG = ZG(1016),
      YG = ZG(1151),
      VG = ZG(5062),
      pG = ZG(5055),
      fG = ZG(3141);
    const QG = 33554432,
      KG = 1024,
      hG = 65536;
    async function dG(GG) {
      const bG = (0, fG.o)(GG);
      if (bG) {
        if (bG.size > QG) throw new fG.e("shaderPack:loadZipTooBig", {
          megabytes: String(QG / 1048576)
        });
        return async function(GG) {
          return JG((0, fG.g)(GG, KG).map((bG => ({
            path: bG.path,
            read: ZG => (0, fG.k)(GG, bG, ZG)
          }))))
        }(new Uint8Array(await bG.arrayBuffer()))
      }
      return JG(GG.map((GG => ({
        path: (0, fG.j)(GG),
        read: bG => async function(GG, bG) {
          return GG.size > bG ? null : new Uint8Array(await GG.arrayBuffer())
        }(GG, bG)
      }))))
    }
    async function JG(GG) {
      const bG = function(GG) {
          const bG = GG.length > 0 ? GG[0].path.indexOf("/") : -1;
          if (-1 === bG) return GG;
          const ZG = GG[0].path.slice(0, bG + 1);
          if (!GG.every((GG => GG.path.startsWith(ZG)))) return GG;
          return GG.map((GG => ({
            ...GG,
            path: GG.path.slice(ZG.length)
          })))
        }(GG.filter((GG => !(0, fG.f)(GG.path)))),
        ZG = bG.filter((GG => "pack.json" === GG.path.toLowerCase()));
      if (0 === ZG.length) throw new fG.e("shaderPack:loadNoManifest");
      if (ZG.length > 1) throw new fG.e("shaderPack:loadDuplicateManifest");
      const wG = ZG[0],
        SG = await wG.read(hG);
      if (null === SG) throw new fG.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(hG / 1024)
      });
      const LG = function(GG) {
          let bG;
          try {
            bG = JSON.parse(GG)
          } catch (kG) {
            throw new fG.e("shaderPack:loadManifestNotJson", {
              error: kG.message
            }, {
              cause: kG
            })
          }
          if ("object" !== typeof bG || null === bG || Array.isArray(bG)) throw new fG.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ZG,
            name: wG,
            author: SG,
            description: LG,
            keepCircleShadows: yG
          } = bG;
          if (void 0 === ZG) throw new fG.e("shaderPack:loadNoApiVersion", {
            version: String(pG.e)
          });
          if (!(0, pG.g)(ZG)) throw new fG.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ZG),
            version: String(pG.e)
          });
          if ("string" !== typeof wG || "" === wG.trim()) throw new fG.e("shaderPack:loadNoName");
          if (void 0 !== SG && null !== SG && "string" !== typeof SG) throw new fG.e("shaderPack:loadAuthorNotString");
          if (void 0 !== LG && null !== LG && "string" !== typeof LG) throw new fG.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== yG && "boolean" !== typeof yG) throw new fG.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ZG,
            name: wG,
            author: "string" === typeof SG ? SG : null,
            description: "string" === typeof LG && "" !== LG.trim() ? LG : null,
            keepCircleShadows: !0 === yG
          }
        }(rG(SG, wG.path)),
        yG = bG.filter((GG => GG.path.toLowerCase().endsWith(".wgsl"))).sort(((GG, bG) => (0, VG.k)(GG.path, bG.path)));
      if (0 === yG.length) throw new fG.e("shaderPack:loadNoWgsl");
      if (yG.length > VG.d) throw new fG.e("shaderPack:loadTooManyWgsl", {
        count: String(VG.d)
      });
      const kG = yG.find(((GG, bG) => bG > 0 && GG.path === yG[bG - 1].path));
      if (kG) throw new fG.e("shaderPack:loadDuplicatePath", {
        path: kG.path
      });
      const UG = [];
      let YG = VG.h;
      for (const pG of yG) {
        const GG = await pG.read(YG);
        if (null === GG) throw new fG.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(VG.h / 1024)
        });
        YG -= GG.byteLength, UG.push({
          path: pG.path,
          source: rG(GG, pG.path)
        })
      }
      return {
        manifest: LG,
        files: UG
      }
    }

    function rG(GG, bG) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(GG)
      } catch (ZG) {
        throw new fG.e("shaderPack:loadNotUtf8", {
          path: bG
        }, {
          cause: ZG
        })
      }
    }
    var zG = ZG(5046),
      EG = ZG(5064),
      oG = ZG(1067);

    function XG(GG) {
      let {
        busy: bG,
        disabled: ZG,
        onFiles: wG
      } = GG;
      const {
        t: SG
      } = (0, YG.w)(), {
        getRootProps: VG,
        getInputProps: pG,
        isDragActive: fG,
        open: QG
      } = (0, yG.c)({
        onDrop: wG,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ZG
      });
      return (0, oG.jsxs)("div", {
        ...VG({
          className: LG()("ShaderPackDropZone", {
            ActiveDrag: fG,
            Disabled: ZG
          })
        }),
        children: [(0, oG.jsx)("input", {
          ...pG({
            webkitdirectory: "true"
          })
        }), bG && (0, oG.jsx)(kG.b, {}), !bG && (0, oG.jsxs)(oG.Fragment, {
          children: [(0, oG.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, oG.jsx)(UG.c, {
              name: "up-from-bracket"
            })
          }), (0, oG.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: SG((0, EG.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, oG.jsx)(EG.d, {
            disabled: ZG,
            openFolderPicker: QG,
            onFiles: wG
          })]
        })]
      })
    }

    function uG(GG) {
      const {
        t: bG
      } = (0, YG.w)(), [ZG, SG] = (0, wG.useState)(!1), [LG, yG] = (0, wG.useState)(null), kG = (0, wG.useRef)(!1);
      return {
        loading: ZG,
        error: LG,
        setError: yG,
        onFiles: async function(ZG) {
          if (!kG.current) {
            kG.current = !0, SG(!0), yG(null);
            try {
              await GG(await dG(ZG))
            } catch (wG) {
              wG instanceof fG.e ? yG((0, zG.h)(bG, wG.translationKey, wG.params)) : (console.error("Failed to load the shader pack", wG), yG(bG("shaderPack:unexpectedError")))
            } finally {
              kG.current = !1, SG(!1)
            }
          }
        }
      }
    }
  },
  6653: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      forgetShaderPackActiveHint: () => IG,
      isOtherApiVersion: () => iG,
      isShaderPackActive: () => EG,
      isShaderPackChangePending: () => uG,
      markShaderPackChangePending: () => XG,
      pageShaderPackValidationVersion: () => CG,
      reconcileStoredShaderPackHint: () => mG,
      removeShaderPack: () => zG,
      replaceShaderPack: () => dG,
      saveShaderPack: () => hG,
      shaderPackNeedsCheck: () => WG,
      storedPackOutcome: () => oG,
      storedShaderPackFiles: () => fG,
      toStoredShaderPack: () => pG
    });
    var wG = ZG(5062),
      SG = ZG(5055),
      LG = ZG(29),
      yG = ZG(3441),
      kG = ZG(6661),
      UG = ZG(6627);
    const YG = "shaderPackChangePending";
    let VG = null;

    function pG(GG, bG, ZG) {
      return {
        manifest: GG.manifest,
        files: (0, wG.y)(GG.files),
        validation: bG,
        ...ZG && {
          listing: ZG
        }
      }
    }

    function fG(GG) {
      return Object.keys(GG.files).map((bG => ({
        path: bG,
        source: GG.files[bG]
      })))
    }
    let QG = Promise.resolve();

    function KG(GG) {
      const bG = QG.then(GG);
      return QG = bG.catch((() => {})), bG
    }

    function hG(GG, bG) {
      return KG((() => JG(GG, bG)))
    }

    function dG(GG, bG, ZG) {
      return KG((async () => JSON.stringify(await (0, kG.e)()) === JSON.stringify(GG) && (null === bG ? (await rG(), !0) : JG(bG, ZG))))
    }
    async function JG(GG, bG) {
      const ZG = await LG.e.setItem(kG.b, GG);
      return ZG && FG(GG, bG), ZG
    }
    async function rG() {
      await LG.e.removeItem(kG.b), LG.h.removeItem(yG.d)
    }

    function zG() {
      return KG(rG)
    }

    function EG(GG, bG) {
      return "active" === oG(GG, bG).kind
    }

    function oG(GG, bG) {
      var ZG;
      return null === GG ? {
        kind: "none",
        reason: "nothingStored"
      } : iG(GG) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) || GG.validation.fromRecheck ? null === bG ? {
        kind: "none",
        reason: "noCompiler"
      } : WG(GG, bG) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : GG.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XG() {
      LG.l.setItem(YG, performance.timeOrigin)
    }

    function uG() {
      return LG.l.getItem(YG) === performance.timeOrigin
    }

    function iG(GG) {
      return !(0, SG.g)(GG.manifest.apiVersion)
    }

    function CG(GG) {
      return VG ??= GG.sF((0, UG.shaderPackTextures)()), VG
    }

    function WG(GG, bG) {
      var ZG;
      return (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.headerVersion) !== CG(bG)
    }

    function mG(GG) {
      return KG((async () => {
        FG(await (0, kG.e)(!0), GG)
      }))
    }

    function IG() {
      return KG((async () => {
        LG.h.removeItem(yG.d)
      }))
    }

    function FG(GG, bG) {
      EG(GG, bG) ? LG.h.setItem(yG.d, !0) : LG.h.removeItem(yG.d)
    }
  },
  6627: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadShaderPackTextures: () => yG,
      shaderPackTextures: () => kG
    });
    var wG = ZG(5062);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= Promise.all([ZG.e(73), ZG.e(190)]).then((() => ZG(40868))).then((GG => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bG,
          textureNameToIndex: ZG,
          textureAnimationData: LG
        } = GG;
        return SG ??= (0, wG.j)(ZG, LG, bG), SG
      })), LG
    }

    function kG() {
      if (null === SG) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return SG
    }
  },
  6645: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      g: () => kG
    });
    var wG = ZG(6653),
      SG = ZG(6627),
      LG = ZG(101);
    const yG = 100;
    async function kG(GG, bG) {
      var ZG;
      let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZG = navigator.gpu) && void 0 !== ZG ? ZG : null;
      const yG = GG.EGG(bG, (0, SG.shaderPackTextures)());
      if (yG.errors.length > 0) return YG(GG, yG.errors, yG.offInStrict);
      const kG = await async function(GG) {
        if (!GG) return null;
        try {
          const bG = await (0, LG.r)(GG);
          return bG ? await bG.requestDevice() : null
        } catch (bG) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bG), null
        }
      }(wG);
      if (!kG) return null;
      let UG = !1;
      kG.lost.then((() => {
        UG = !0
      }));
      try {
        const bG = await Promise.all(yG.validationModules.map((bG => async function(GG, bG, ZG) {
          bG.pushErrorScope("validation");
          const wG = bG.createShaderModule({
              code: ZG.code
            }),
            SG = bG.popErrorScope(),
            {
              messages: LG
            } = await wG.getCompilationInfo(),
            yG = LG.filter((GG => "error" === GG.type)).map((bG => GG.mapValidationMessage(ZG, bG))),
            kG = await SG;
          kG && 0 === yG.length && yG.push({
            file: null,
            line: 0,
            message: kG.message,
            variants: [ZG.key]
          });
          return yG
        }(GG, kG, bG))));
        return UG ? null : YG(GG, GG.QwG(bG.flat()), yG.offInStrict)
      } catch (VG) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VG), null
      } finally {
        kG.destroy()
      }
    }
    async function UG(GG, bG) {
      var ZG;
      if (!(0, wG.shaderPackNeedsCheck)(GG, bG) || (0, wG.isOtherApiVersion)(GG)) return GG;
      const SG = await kG(bG, (0, wG.storedShaderPackFiles)(GG));
      if (!SG) return GG;
      const LG = !1 === (null === (ZG = GG.validation) || void 0 === ZG ? void 0 : ZG.ok) && !GG.validation.fromRecheck,
        yG = {
          ...GG,
          validation: LG ? SG : {
            ...SG,
            fromRecheck: !0
          }
        };
      return await (0, wG.replaceShaderPack)(GG, yG, bG) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yG
    }

    function YG(GG, bG, ZG) {
      return {
        headerVersion: (0, wG.pageShaderPackValidationVersion)(GG),
        ok: 0 === bG.length,
        errors: bG.slice(0, yG),
        moreErrors: Math.max(0, bG.length - yG),
        offInStrict: ZG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);