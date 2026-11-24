export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6758: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(5198),
      JB = ZB(1153);
    const oB = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function GB(BB) {
      let {
        diagnostics: IB,
        more: ZB = 0,
        t: GB
      } = BB;
      return (0, JB.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [IB.map(((BB, IB) => {
          const ZB = (0, TB.g)(BB),
            vB = function(BB, IB) {
              const ZB = (0, TB.c)(null !== BB && void 0 !== BB ? BB : []);
              if (0 === ZB.length) return null;
              return ZB.map((BB => BB.map((BB => IB(oB[BB]))).join(", "))).join("; ")
            }(BB.variants, GB);
          return (0, JB.jsxs)("li", {
            children: [ZB && (0, JB.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ZB
            }), BB.message, vB && (0, JB.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: GB("shaderPack:onlyIn", {
                variants: vB
              })
            })]
          }, IB)
        })), ZB > 0 && (0, JB.jsx)("li", {
          children: GB("shaderPack:moreErrors", {
            count: String(ZB)
          })
        })]
      })
    }
  },
  6760: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => QB,
      e: () => sB
    });
    var TB = ZB(63),
      JB = ZB(1091),
      oB = ZB.n(JB),
      GB = ZB(5112),
      vB = ZB(1397),
      kB = ZB(1102),
      cB = ZB(1248),
      nB = ZB(5210),
      hB = ZB(5204),
      zB = ZB(3332);
    const FB = 33554432,
      NB = 1024,
      gB = 65536;
    async function qB(BB) {
      const IB = (0, zB.r)(BB);
      if (IB) {
        if (IB.size > FB) throw new zB.d("shaderPack:loadZipTooBig", {
          megabytes: String(FB / 1048576)
        });
        return async function(BB) {
          return yB((0, zB.l)(BB, NB).map((IB => ({
            path: IB.path,
            read: ZB => (0, zB.p)(BB, IB, ZB)
          }))))
        }(new Uint8Array(await IB.arrayBuffer()))
      }
      return yB(BB.map((BB => ({
        path: (0, zB.m)(BB),
        read: IB => async function(BB, IB) {
          return BB.size > IB ? null : new Uint8Array(await BB.arrayBuffer())
        }(BB, IB)
      }))))
    }
    async function yB(BB) {
      const IB = function(BB) {
          const IB = BB.length > 0 ? BB[0].path.indexOf("/") : -1;
          if (-1 === IB) return BB;
          const ZB = BB[0].path.slice(0, IB + 1);
          if (!BB.every((BB => BB.path.startsWith(ZB)))) return BB;
          return BB.map((BB => ({
            ...BB,
            path: BB.path.slice(ZB.length)
          })))
        }(BB.filter((BB => !(0, zB.h)(BB.path)))),
        ZB = IB.filter((BB => "pack.json" === BB.path.toLowerCase()));
      if (0 === ZB.length) throw new zB.d("shaderPack:loadNoManifest");
      if (ZB.length > 1) throw new zB.d("shaderPack:loadDuplicateManifest");
      const TB = ZB[0],
        JB = await TB.read(gB);
      if (null === JB) throw new zB.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(gB / 1024)
      });
      const oB = function(BB) {
          let IB;
          try {
            IB = JSON.parse(BB)
          } catch (vB) {
            throw new zB.d("shaderPack:loadManifestNotJson", {
              error: vB.message
            }, {
              cause: vB
            })
          }
          if ("object" !== typeof IB || null === IB || Array.isArray(IB)) throw new zB.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ZB,
            name: TB,
            author: JB,
            description: oB,
            keepCircleShadows: GB
          } = IB;
          if (void 0 === ZB) throw new zB.d("shaderPack:loadNoApiVersion", {
            version: String(hB.b)
          });
          if (!(0, hB.g)(ZB)) throw new zB.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ZB),
            version: String(hB.b)
          });
          if ("string" !== typeof TB || "" === TB.trim()) throw new zB.d("shaderPack:loadNoName");
          if (void 0 !== JB && null !== JB && "string" !== typeof JB) throw new zB.d("shaderPack:loadAuthorNotString");
          if (void 0 !== oB && null !== oB && "string" !== typeof oB) throw new zB.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== GB && "boolean" !== typeof GB) throw new zB.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ZB,
            name: TB,
            author: "string" === typeof JB ? JB : null,
            description: "string" === typeof oB && "" !== oB.trim() ? oB : null,
            keepCircleShadows: !0 === GB
          }
        }(UB(JB, TB.path)),
        GB = IB.filter((BB => BB.path.toLowerCase().endsWith(".wgsl"))).sort(((BB, IB) => (0, nB.m)(BB.path, IB.path)));
      if (0 === GB.length) throw new zB.d("shaderPack:loadNoWgsl");
      if (GB.length > nB.d) throw new zB.d("shaderPack:loadTooManyWgsl", {
        count: String(nB.d)
      });
      const vB = GB.find(((BB, IB) => IB > 0 && BB.path === GB[IB - 1].path));
      if (vB) throw new zB.d("shaderPack:loadDuplicatePath", {
        path: vB.path
      });
      const kB = [];
      let cB = nB.g;
      for (const hB of GB) {
        const BB = await hB.read(cB);
        if (null === BB) throw new zB.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(nB.g / 1024)
        });
        cB -= BB.byteLength, kB.push({
          path: hB.path,
          source: UB(BB, hB.path)
        })
      }
      return {
        manifest: oB,
        files: kB
      }
    }

    function UB(BB, IB) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(BB)
      } catch (ZB) {
        throw new zB.d("shaderPack:loadNotUtf8", {
          path: IB
        }, {
          cause: ZB
        })
      }
    }
    var WB = ZB(5198),
      dB = ZB(5214),
      CB = ZB(1153);

    function QB(BB) {
      let {
        busy: IB,
        disabled: ZB,
        onFiles: TB
      } = BB;
      const {
        t: JB
      } = (0, cB.G)(), {
        getRootProps: nB,
        getInputProps: hB,
        isDragActive: zB,
        open: FB
      } = (0, GB.d)({
        onDrop: TB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ZB
      });
      return (0, CB.jsxs)("div", {
        ...nB({
          className: oB()("ShaderPackDropZone", {
            ActiveDrag: zB,
            Disabled: ZB
          })
        }),
        children: [(0, CB.jsx)("input", {
          ...hB({
            webkitdirectory: "true"
          })
        }), IB && (0, CB.jsx)(vB.d, {}), !IB && (0, CB.jsxs)(CB.Fragment, {
          children: [(0, CB.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, CB.jsx)(kB.d, {
              name: "up-from-bracket"
            })
          }), (0, CB.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: JB((0, dB.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, CB.jsx)(dB.e, {
            disabled: ZB,
            openFolderPicker: FB,
            onFiles: TB
          })]
        })]
      })
    }

    function sB(BB) {
      const {
        t: IB
      } = (0, cB.G)(), [ZB, JB] = (0, TB.useState)(!1), [oB, GB] = (0, TB.useState)(null), vB = (0, TB.useRef)(!1);
      return {
        loading: ZB,
        error: oB,
        setError: GB,
        onFiles: async function(ZB) {
          if (!vB.current) {
            vB.current = !0, JB(!0), GB(null);
            try {
              await BB(await qB(ZB))
            } catch (TB) {
              TB instanceof zB.d ? GB((0, WB.h)(IB, TB.translationKey, TB.params)) : (console.error("Failed to load the shader pack", TB), GB(IB("shaderPack:unexpectedError")))
            } finally {
              vB.current = !1, JB(!1)
            }
          }
        }
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
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);