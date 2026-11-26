export const id = 146;
export const ids = [146, 150, 151];
export const modules = {
  7198: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU
    });
    var cU = zU(5597),
      yU = zU(1305);
    const QU = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function AU(UU) {
      let {
        diagnostics: XU,
        more: zU = 0,
        t: AU
      } = UU;
      return (0, yU.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [XU.map(((UU, XU) => {
          const zU = (0, cU.e)(UU),
            FU = function(UU, XU) {
              const zU = (0, cU.c)(null !== UU && void 0 !== UU ? UU : []);
              if (0 === zU.length) return null;
              return zU.map((UU => UU.map((UU => XU(QU[UU]))).join(", "))).join("; ")
            }(UU.variants, AU);
          return (0, yU.jsxs)("li", {
            children: [zU && (0, yU.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: zU
            }), UU.message, FU && (0, yU.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: AU("shaderPack:onlyIn", {
                variants: FU
              })
            })]
          }, XU)
        })), zU > 0 && (0, yU.jsx)("li", {
          children: AU("shaderPack:moreErrors", {
            count: String(zU)
          })
        })]
      })
    }
  },
  7203: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => RU,
      f: () => PU
    });
    var cU = zU(61),
      yU = zU(1106),
      QU = zU.n(yU),
      AU = zU(5490),
      FU = zU(1384),
      oU = zU(1390),
      DU = zU(1193),
      EU = zU(5608),
      YU = zU(5603),
      NU = zU(3528);
    const IU = 33554432,
      pU = 1024,
      aU = 65536;
    async function tU(UU) {
      const XU = (0, NU.t)(UU);
      if (XU) {
        if (XU.size > IU) throw new NU.e("shaderPack:loadZipTooBig", {
          megabytes: String(IU / 1048576)
        });
        return async function(UU) {
          return gU((0, NU.l)(UU, pU).map((XU => ({
            path: XU.path,
            read: zU => (0, NU.s)(UU, XU, zU)
          }))))
        }(new Uint8Array(await XU.arrayBuffer()))
      }
      return gU(UU.map((UU => ({
        path: (0, NU.o)(UU),
        read: XU => async function(UU, XU) {
          return UU.size > XU ? null : new Uint8Array(await UU.arrayBuffer())
        }(UU, XU)
      }))))
    }
    async function gU(UU) {
      const XU = function(UU) {
          const XU = UU.length > 0 ? UU[0].path.indexOf("/") : -1;
          if (-1 === XU) return UU;
          const zU = UU[0].path.slice(0, XU + 1);
          if (!UU.every((UU => UU.path.startsWith(zU)))) return UU;
          return UU.map((UU => ({
            ...UU,
            path: UU.path.slice(zU.length)
          })))
        }(UU.filter((UU => !(0, NU.h)(UU.path)))),
        zU = XU.filter((UU => "pack.json" === UU.path.toLowerCase()));
      if (0 === zU.length) throw new NU.e("shaderPack:loadNoManifest");
      if (zU.length > 1) throw new NU.e("shaderPack:loadDuplicateManifest");
      const cU = zU[0],
        yU = await cU.read(aU);
      if (null === yU) throw new NU.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(aU / 1024)
      });
      const QU = function(UU) {
          let XU;
          try {
            XU = JSON.parse(UU)
          } catch (FU) {
            throw new NU.e("shaderPack:loadManifestNotJson", {
              error: FU.message
            }, {
              cause: FU
            })
          }
          if ("object" !== typeof XU || null === XU || Array.isArray(XU)) throw new NU.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: zU,
            name: cU,
            author: yU,
            description: QU,
            keepCircleShadows: AU
          } = XU;
          if (void 0 === zU) throw new NU.e("shaderPack:loadNoApiVersion", {
            version: String(YU.d)
          });
          if (!(0, YU.i)(zU)) throw new NU.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(zU),
            version: String(YU.d)
          });
          if ("string" !== typeof cU || "" === cU.trim()) throw new NU.e("shaderPack:loadNoName");
          if (void 0 !== yU && null !== yU && "string" !== typeof yU) throw new NU.e("shaderPack:loadAuthorNotString");
          if (void 0 !== QU && null !== QU && "string" !== typeof QU) throw new NU.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== AU && "boolean" !== typeof AU) throw new NU.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: zU,
            name: cU,
            author: "string" === typeof yU ? yU : null,
            description: "string" === typeof QU && "" !== QU.trim() ? QU : null,
            keepCircleShadows: !0 === AU
          }
        }(kU(yU, cU.path)),
        AU = XU.filter((UU => UU.path.toLowerCase().endsWith(".wgsl"))).sort(((UU, XU) => (0, EU.m)(UU.path, XU.path)));
      if (0 === AU.length) throw new NU.e("shaderPack:loadNoWgsl");
      if (AU.length > EU.e) throw new NU.e("shaderPack:loadTooManyWgsl", {
        count: String(EU.e)
      });
      const FU = AU.find(((UU, XU) => XU > 0 && UU.path === AU[XU - 1].path));
      if (FU) throw new NU.e("shaderPack:loadDuplicatePath", {
        path: FU.path
      });
      const oU = [];
      let DU = EU.h;
      for (const YU of AU) {
        const UU = await YU.read(DU);
        if (null === UU) throw new NU.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(EU.h / 1024)
        });
        DU -= UU.byteLength, oU.push({
          path: YU.path,
          source: kU(UU, YU.path)
        })
      }
      return {
        manifest: QU,
        files: oU
      }
    }

    function kU(UU, XU) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(UU)
      } catch (zU) {
        throw new NU.e("shaderPack:loadNotUtf8", {
          path: XU
        }, {
          cause: zU
        })
      }
    }
    var GU = zU(5597),
      BU = zU(5617),
      ZU = zU(1305);

    function RU(UU) {
      let {
        busy: XU,
        disabled: zU,
        onFiles: cU
      } = UU;
      const {
        t: yU
      } = (0, DU.I)(), {
        getRootProps: EU,
        getInputProps: YU,
        isDragActive: NU,
        open: IU
      } = (0, AU.b)({
        onDrop: cU,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: zU
      });
      return (0, ZU.jsxs)("div", {
        ...EU({
          className: QU()("ShaderPackDropZone", {
            ActiveDrag: NU,
            Disabled: zU
          })
        }),
        children: [(0, ZU.jsx)("input", {
          ...YU({
            webkitdirectory: "true"
          })
        }), XU && (0, ZU.jsx)(FU.b, {}), !XU && (0, ZU.jsxs)(ZU.Fragment, {
          children: [(0, ZU.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, ZU.jsx)(oU.d, {
              name: "up-from-bracket"
            })
          }), (0, ZU.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: yU((0, BU.h)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, ZU.jsx)(BU.e, {
            disabled: zU,
            openFolderPicker: IU,
            onFiles: cU
          })]
        })]
      })
    }

    function PU(UU) {
      const {
        t: XU
      } = (0, DU.I)(), [zU, yU] = (0, cU.useState)(!1), [QU, AU] = (0, cU.useState)(null), FU = (0, cU.useRef)(!1);
      return {
        loading: zU,
        error: QU,
        setError: AU,
        onFiles: async function(zU) {
          if (!FU.current) {
            FU.current = !0, yU(!0), AU(null);
            try {
              await UU(await tU(zU))
            } catch (cU) {
              cU instanceof NU.e ? AU((0, GU.i)(XU, cU.translationKey, cU.params)) : (console.error("Failed to load the shader pack", cU), AU(XU("shaderPack:unexpectedError")))
            } finally {
              FU.current = !1, yU(!1)
            }
          }
        }
      }
    }
  },
  7251: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      forgetShaderPackActiveHint: () => CU,
      isOtherApiVersion: () => WU,
      isShaderPackActive: () => BU,
      isShaderPackChangePending: () => PU,
      markShaderPackChangePending: () => RU,
      pageShaderPackValidationVersion: () => dU,
      reconcileStoredShaderPackHint: () => eU,
      removeShaderPack: () => GU,
      replaceShaderPack: () => tU,
      saveShaderPack: () => aU,
      shaderPackNeedsCheck: () => LU,
      storedPackOutcome: () => ZU,
      storedShaderPackFiles: () => NU,
      toStoredShaderPack: () => YU
    });
    var cU = zU(5608),
      yU = zU(5603),
      QU = zU(42),
      AU = zU(3849),
      FU = zU(7253),
      oU = zU(7219);
    const DU = "shaderPackChangePending";
    let EU = null;

    function YU(UU, XU, zU) {
      return {
        manifest: UU.manifest,
        files: (0, cU.u)(UU.files),
        validation: XU,
        ...zU && {
          listing: zU
        }
      }
    }

    function NU(UU) {
      return Object.keys(UU.files).map((XU => ({
        path: XU,
        source: UU.files[XU]
      })))
    }
    let IU = Promise.resolve();

    function pU(UU) {
      const XU = IU.then(UU);
      return IU = XU.catch((() => {})), XU
    }

    function aU(UU, XU) {
      return pU((() => gU(UU, XU)))
    }

    function tU(UU, XU, zU) {
      return pU((async () => JSON.stringify(await (0, FU.f)()) === JSON.stringify(UU) && (null === XU ? (await kU(), !0) : gU(XU, zU))))
    }
    async function gU(UU, XU) {
      const zU = await QU.g.setItem(FU.e, UU);
      return zU && wU(UU, XU), zU
    }
    async function kU() {
      await QU.g.removeItem(FU.e), QU.k.removeItem(AU.b)
    }

    function GU() {
      return pU(kU)
    }

    function BU(UU, XU) {
      return "active" === ZU(UU, XU).kind
    }

    function ZU(UU, XU) {
      var zU;
      return null === UU ? {
        kind: "none",
        reason: "nothingStored"
      } : WU(UU) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) || UU.validation.fromRecheck ? null === XU ? {
        kind: "none",
        reason: "noCompiler"
      } : LU(UU, XU) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : UU.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function RU() {
      QU.n.setItem(DU, performance.timeOrigin)
    }

    function PU() {
      return QU.n.getItem(DU) === performance.timeOrigin
    }

    function WU(UU) {
      return !(0, yU.i)(UU.manifest.apiVersion)
    }

    function dU(UU) {
      return EU ??= UU.mq((0, oU.shaderPackTextures)()), EU
    }

    function LU(UU, XU) {
      var zU;
      return (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.headerVersion) !== dU(XU)
    }

    function eU(UU) {
      return pU((async () => {
        wU(await (0, FU.f)(!0), UU)
      }))
    }

    function CU() {
      return pU((async () => {
        QU.k.removeItem(AU.b)
      }))
    }

    function wU(UU, XU) {
      BU(UU, XU) ? QU.k.setItem(AU.b, !0) : QU.k.removeItem(AU.b)
    }
  },
  7219: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      loadShaderPackTextures: () => AU,
      shaderPackTextures: () => FU
    });
    var cU = zU(5608);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= Promise.all([zU.e(84), zU.e(202)]).then((() => zU(41573))).then((UU => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: XU,
          textureNameToIndex: zU,
          textureAnimationData: QU
        } = UU;
        return yU ??= (0, cU.k)(zU, QU, XU), yU
      })), QU
    }

    function FU() {
      if (null === yU) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yU
    }
  },
  7242: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      h: () => FU
    });
    var cU = zU(7251),
      yU = zU(7219),
      QU = zU(123);
    const AU = 100;
    async function FU(UU, XU) {
      var zU;
      let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zU = navigator.gpu) && void 0 !== zU ? zU : null;
      const AU = UU.bUU(XU, (0, yU.shaderPackTextures)());
      if (AU.errors.length > 0) return DU(UU, AU.errors, AU.offInStrict);
      const FU = await async function(UU) {
        if (!UU) return null;
        try {
          const XU = await (0, QU.q)(UU);
          return XU ? await XU.requestDevice() : null
        } catch (XU) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", XU), null
        }
      }(cU);
      if (!FU) return null;
      let oU = !1;
      FU.lost.then((() => {
        oU = !0
      }));
      try {
        const XU = await Promise.all(AU.validationModules.map((XU => async function(UU, XU, zU) {
          XU.pushErrorScope("validation");
          const cU = XU.createShaderModule({
              code: zU.code
            }),
            yU = XU.popErrorScope(),
            {
              messages: QU
            } = await cU.getCompilationInfo(),
            AU = QU.filter((UU => "error" === UU.type)).map((XU => UU.mapValidationMessage(zU, XU))),
            FU = await yU;
          FU && 0 === AU.length && AU.push({
            file: null,
            line: 0,
            message: FU.message,
            variants: [zU.key]
          });
          return AU
        }(UU, FU, XU))));
        return oU ? null : DU(UU, UU.scU(XU.flat()), AU.offInStrict)
      } catch (EU) {
        return console.error("Couldn't validate the shader pack on WebGPU.", EU), null
      } finally {
        FU.destroy()
      }
    }
    async function oU(UU, XU) {
      var zU;
      if (!(0, cU.shaderPackNeedsCheck)(UU, XU) || (0, cU.isOtherApiVersion)(UU)) return UU;
      const yU = await FU(XU, (0, cU.storedShaderPackFiles)(UU));
      if (!yU) return UU;
      const QU = !1 === (null === (zU = UU.validation) || void 0 === zU ? void 0 : zU.ok) && !UU.validation.fromRecheck,
        AU = {
          ...UU,
          validation: QU ? yU : {
            ...yU,
            fromRecheck: !0
          }
        };
      return await (0, cU.replaceShaderPack)(UU, AU, XU) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AU
    }

    function DU(UU, XU, zU) {
      return {
        headerVersion: (0, cU.pageShaderPackValidationVersion)(UU),
        ok: 0 === XU.length,
        errors: XU.slice(0, AU),
        moreErrors: Math.max(0, XU.length - AU),
        offInStrict: zU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);