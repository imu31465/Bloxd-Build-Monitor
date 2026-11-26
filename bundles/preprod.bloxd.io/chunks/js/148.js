export const id = 148;
export const ids = [148, 152, 153];
export const modules = {
  7147: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(5531),
      DB = GB(1282);
    const QB = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function oB(BB) {
      let {
        diagnostics: OB,
        more: GB = 0,
        t: oB
      } = BB;
      return (0, DB.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [OB.map(((BB, OB) => {
          const GB = (0, YB.g)(BB),
            jB = function(BB, OB) {
              const GB = (0, YB.e)(null !== BB && void 0 !== BB ? BB : []);
              if (0 === GB.length) return null;
              return GB.map((BB => BB.map((BB => OB(QB[BB]))).join(", "))).join("; ")
            }(BB.variants, oB);
          return (0, DB.jsxs)("li", {
            children: [GB && (0, DB.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: GB
            }), BB.message, jB && (0, DB.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: oB("shaderPack:onlyIn", {
                variants: jB
              })
            })]
          }, OB)
        })), GB > 0 && (0, DB.jsx)("li", {
          children: oB("shaderPack:moreErrors", {
            count: String(GB)
          })
        })]
      })
    }
  },
  7152: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => SB,
      e: () => nB
    });
    var YB = GB(56),
      DB = GB(1090),
      QB = GB.n(DB),
      oB = GB(5452),
      jB = GB(1375),
      yB = GB(1383),
      JB = GB(1175),
      MB = GB(5546),
      PB = GB(5538),
      zB = GB(3588);
    const lB = 33554432,
      pB = 1024,
      qB = 65536;
    async function ZB(BB) {
      const OB = (0, zB.p)(BB);
      if (OB) {
        if (OB.size > lB) throw new zB.b("shaderPack:loadZipTooBig", {
          megabytes: String(lB / 1048576)
        });
        return async function(BB) {
          return NB((0, zB.g)(BB, pB).map((OB => ({
            path: OB.path,
            read: GB => (0, zB.l)(BB, OB, GB)
          }))))
        }(new Uint8Array(await OB.arrayBuffer()))
      }
      return NB(BB.map((BB => ({
        path: (0, zB.k)(BB),
        read: OB => async function(BB, OB) {
          return BB.size > OB ? null : new Uint8Array(await BB.arrayBuffer())
        }(BB, OB)
      }))))
    }
    async function NB(BB) {
      const OB = function(BB) {
          const OB = BB.length > 0 ? BB[0].path.indexOf("/") : -1;
          if (-1 === OB) return BB;
          const GB = BB[0].path.slice(0, OB + 1);
          if (!BB.every((BB => BB.path.startsWith(GB)))) return BB;
          return BB.map((BB => ({
            ...BB,
            path: BB.path.slice(GB.length)
          })))
        }(BB.filter((BB => !(0, zB.d)(BB.path)))),
        GB = OB.filter((BB => "pack.json" === BB.path.toLowerCase()));
      if (0 === GB.length) throw new zB.b("shaderPack:loadNoManifest");
      if (GB.length > 1) throw new zB.b("shaderPack:loadDuplicateManifest");
      const YB = GB[0],
        DB = await YB.read(qB);
      if (null === DB) throw new zB.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(qB / 1024)
      });
      const QB = function(BB) {
          let OB;
          try {
            OB = JSON.parse(BB)
          } catch (jB) {
            throw new zB.b("shaderPack:loadManifestNotJson", {
              error: jB.message
            }, {
              cause: jB
            })
          }
          if ("object" !== typeof OB || null === OB || Array.isArray(OB)) throw new zB.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: GB,
            name: YB,
            author: DB,
            description: QB,
            keepCircleShadows: oB
          } = OB;
          if (void 0 === GB) throw new zB.b("shaderPack:loadNoApiVersion", {
            version: String(PB.b)
          });
          if (!(0, PB.g)(GB)) throw new zB.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(GB),
            version: String(PB.b)
          });
          if ("string" !== typeof YB || "" === YB.trim()) throw new zB.b("shaderPack:loadNoName");
          if (void 0 !== DB && null !== DB && "string" !== typeof DB) throw new zB.b("shaderPack:loadAuthorNotString");
          if (void 0 !== QB && null !== QB && "string" !== typeof QB) throw new zB.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== oB && "boolean" !== typeof oB) throw new zB.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: GB,
            name: YB,
            author: "string" === typeof DB ? DB : null,
            description: "string" === typeof QB && "" !== QB.trim() ? QB : null,
            keepCircleShadows: !0 === oB
          }
        }(RB(DB, YB.path)),
        oB = OB.filter((BB => BB.path.toLowerCase().endsWith(".wgsl"))).sort(((BB, OB) => (0, MB.p)(BB.path, OB.path)));
      if (0 === oB.length) throw new zB.b("shaderPack:loadNoWgsl");
      if (oB.length > MB.e) throw new zB.b("shaderPack:loadTooManyWgsl", {
        count: String(MB.e)
      });
      const jB = oB.find(((BB, OB) => OB > 0 && BB.path === oB[OB - 1].path));
      if (jB) throw new zB.b("shaderPack:loadDuplicatePath", {
        path: jB.path
      });
      const yB = [];
      let JB = MB.h;
      for (const PB of oB) {
        const BB = await PB.read(JB);
        if (null === BB) throw new zB.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(MB.h / 1024)
        });
        JB -= BB.byteLength, yB.push({
          path: PB.path,
          source: RB(BB, PB.path)
        })
      }
      return {
        manifest: QB,
        files: yB
      }
    }

    function RB(BB, OB) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(BB)
      } catch (GB) {
        throw new zB.b("shaderPack:loadNotUtf8", {
          path: OB
        }, {
          cause: GB
        })
      }
    }
    var WB = GB(5531),
      AB = GB(5549),
      VB = GB(1282);

    function SB(BB) {
      let {
        busy: OB,
        disabled: GB,
        onFiles: YB
      } = BB;
      const {
        t: DB
      } = (0, JB.H)(), {
        getRootProps: MB,
        getInputProps: PB,
        isDragActive: zB,
        open: lB
      } = (0, oB.e)({
        onDrop: YB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: GB
      });
      return (0, VB.jsxs)("div", {
        ...MB({
          className: QB()("ShaderPackDropZone", {
            ActiveDrag: zB,
            Disabled: GB
          })
        }),
        children: [(0, VB.jsx)("input", {
          ...PB({
            webkitdirectory: "true"
          })
        }), OB && (0, VB.jsx)(jB.b, {}), !OB && (0, VB.jsxs)(VB.Fragment, {
          children: [(0, VB.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, VB.jsx)(yB.b, {
              name: "up-from-bracket"
            })
          }), (0, VB.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: DB((0, AB.d)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, VB.jsx)(AB.b, {
            disabled: GB,
            openFolderPicker: lB,
            onFiles: YB
          })]
        })]
      })
    }

    function nB(BB) {
      const {
        t: OB
      } = (0, JB.H)(), [GB, DB] = (0, YB.useState)(!1), [QB, oB] = (0, YB.useState)(null), jB = (0, YB.useRef)(!1);
      return {
        loading: GB,
        error: QB,
        setError: oB,
        onFiles: async function(GB) {
          if (!jB.current) {
            jB.current = !0, DB(!0), oB(null);
            try {
              await BB(await ZB(GB))
            } catch (YB) {
              YB instanceof zB.b ? oB((0, WB.j)(OB, YB.translationKey, YB.params)) : (console.error("Failed to load the shader pack", YB), oB(OB("shaderPack:unexpectedError")))
            } finally {
              jB.current = !1, DB(!1)
            }
          }
        }
      }
    }
  },
  7193: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      forgetShaderPackActiveHint: () => KB,
      isOtherApiVersion: () => UB,
      isShaderPackActive: () => AB,
      isShaderPackChangePending: () => nB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => fB,
      reconcileStoredShaderPackHint: () => dB,
      removeShaderPack: () => WB,
      replaceShaderPack: () => ZB,
      saveShaderPack: () => qB,
      shaderPackNeedsCheck: () => kB,
      storedPackOutcome: () => VB,
      storedShaderPackFiles: () => zB,
      toStoredShaderPack: () => PB
    });
    var YB = GB(5546),
      DB = GB(5538),
      QB = GB(31),
      oB = GB(3885),
      jB = GB(7198),
      yB = GB(7174);
    const JB = "shaderPackChangePending";
    let MB = null;

    function PB(BB, OB, GB) {
      return {
        manifest: BB.manifest,
        files: (0, YB.y)(BB.files),
        validation: OB,
        ...GB && {
          listing: GB
        }
      }
    }

    function zB(BB) {
      return Object.keys(BB.files).map((OB => ({
        path: OB,
        source: BB.files[OB]
      })))
    }
    let lB = Promise.resolve();

    function pB(BB) {
      const OB = lB.then(BB);
      return lB = OB.catch((() => {})), OB
    }

    function qB(BB, OB) {
      return pB((() => NB(BB, OB)))
    }

    function ZB(BB, OB, GB) {
      return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
    }
    async function NB(BB, OB) {
      const GB = await QB.d.setItem(jB.c, BB);
      return GB && uB(BB, OB), GB
    }
    async function RB() {
      await QB.d.removeItem(jB.c), QB.g.removeItem(oB.d)
    }

    function WB() {
      return pB(RB)
    }

    function AB(BB, OB) {
      return "active" === VB(BB, OB).kind
    }

    function VB(BB, OB) {
      var GB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : UB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) || BB.validation.fromRecheck ? null === OB ? {
        kind: "none",
        reason: "noCompiler"
      } : kB(BB, OB) ? {
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

    function SB() {
      QB.i.setItem(JB, performance.timeOrigin)
    }

    function nB() {
      return QB.i.getItem(JB) === performance.timeOrigin
    }

    function UB(BB) {
      return !(0, DB.g)(BB.manifest.apiVersion)
    }

    function fB(BB) {
      return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
    }

    function kB(BB, OB) {
      var GB;
      return (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.headerVersion) !== fB(OB)
    }

    function dB(BB) {
      return pB((async () => {
        uB(await (0, jB.e)(!0), BB)
      }))
    }

    function KB() {
      return pB((async () => {
        QB.g.removeItem(oB.d)
      }))
    }

    function uB(BB, OB) {
      AB(BB, OB) ? QB.g.setItem(oB.d, !0) : QB.g.removeItem(oB.d)
    }
  },
  7174: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadShaderPackTextures: () => oB,
      shaderPackTextures: () => jB
    });
    var YB = GB(5546);
    let DB = null,
      QB = null;

    function oB() {
      return QB ??= Promise.all([GB.e(84), GB.e(206)]).then((() => GB(41493))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: OB,
          textureNameToIndex: GB,
          textureAnimationData: QB
        } = BB;
        return DB ??= (0, YB.o)(GB, QB, OB), DB
      })), QB
    }

    function jB() {
      if (null === DB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return DB
    }
  },
  7186: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => yB,
      f: () => jB
    });
    var YB = GB(7193),
      DB = GB(7174),
      QB = GB(113);
    const oB = 100;
    async function jB(BB, OB) {
      var GB;
      let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = navigator.gpu) && void 0 !== GB ? GB : null;
      const oB = BB.VOB(OB, (0, DB.shaderPackTextures)());
      if (oB.errors.length > 0) return JB(BB, oB.errors, oB.offInStrict);
      const jB = await async function(BB) {
        if (!BB) return null;
        try {
          const OB = await (0, QB.w)(BB);
          return OB ? await OB.requestDevice() : null
        } catch (OB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", OB), null
        }
      }(YB);
      if (!jB) return null;
      let yB = !1;
      jB.lost.then((() => {
        yB = !0
      }));
      try {
        const OB = await Promise.all(oB.validationModules.map((OB => async function(BB, OB, GB) {
          OB.pushErrorScope("validation");
          const YB = OB.createShaderModule({
              code: GB.code
            }),
            DB = OB.popErrorScope(),
            {
              messages: QB
            } = await YB.getCompilationInfo(),
            oB = QB.filter((BB => "error" === BB.type)).map((OB => BB.mapValidationMessage(GB, OB))),
            jB = await DB;
          jB && 0 === oB.length && oB.push({
            file: null,
            line: 0,
            message: jB.message,
            variants: [GB.key]
          });
          return oB
        }(BB, jB, OB))));
        return yB ? null : JB(BB, BB.lDB(OB.flat()), oB.offInStrict)
      } catch (MB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", MB), null
      } finally {
        jB.destroy()
      }
    }
    async function yB(BB, OB) {
      var GB;
      if (!(0, YB.shaderPackNeedsCheck)(BB, OB) || (0, YB.isOtherApiVersion)(BB)) return BB;
      const DB = await jB(OB, (0, YB.storedShaderPackFiles)(BB));
      if (!DB) return BB;
      const QB = !1 === (null === (GB = BB.validation) || void 0 === GB ? void 0 : GB.ok) && !BB.validation.fromRecheck,
        oB = {
          ...BB,
          validation: QB ? DB : {
            ...DB,
            fromRecheck: !0
          }
        };
      return await (0, YB.replaceShaderPack)(BB, oB, OB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), oB
    }

    function JB(BB, OB, GB) {
      return {
        headerVersion: (0, YB.pageShaderPackValidationVersion)(BB),
        ok: 0 === OB.length,
        errors: OB.slice(0, oB),
        moreErrors: Math.max(0, OB.length - oB),
        offInStrict: GB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);