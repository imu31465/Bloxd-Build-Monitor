export const id = 148;
export const ids = [148, 151, 152];
export const modules = {
  7102: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(5430),
      SM = iM(1303);
    const jM = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function aM(MM) {
      let {
        diagnostics: rM,
        more: iM = 0,
        t: aM
      } = MM;
      return (0, SM.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [rM.map(((MM, rM) => {
          const iM = (0, OM.e)(MM),
            PM = function(MM, rM) {
              const iM = (0, OM.d)(null !== MM && void 0 !== MM ? MM : []);
              if (0 === iM.length) return null;
              return iM.map((MM => MM.map((MM => rM(jM[MM]))).join(", "))).join("; ")
            }(MM.variants, aM);
          return (0, SM.jsxs)("li", {
            children: [iM && (0, SM.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: iM
            }), MM.message, PM && (0, SM.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: aM("shaderPack:onlyIn", {
                variants: PM
              })
            })]
          }, rM)
        })), iM > 0 && (0, SM.jsx)("li", {
          children: aM("shaderPack:moreErrors", {
            count: String(iM)
          })
        })]
      })
    }
  },
  7105: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => CM,
      e: () => eM
    });
    var OM = iM(44),
      SM = iM(1116),
      jM = iM.n(SM),
      aM = iM(5364),
      PM = iM(1396),
      nM = iM(1398),
      QM = iM(1188),
      zM = iM(5442),
      LM = iM(5435),
      mM = iM(3573);
    const HM = 33554432,
      hM = 1024,
      JM = 65536;
    async function dM(MM) {
      const rM = (0, mM.s)(MM);
      if (rM) {
        if (rM.size > HM) throw new mM.e("shaderPack:loadZipTooBig", {
          megabytes: String(HM / 1048576)
        });
        return async function(MM) {
          return yM((0, mM.j)(MM, hM).map((rM => ({
            path: rM.path,
            read: iM => (0, mM.o)(MM, rM, iM)
          }))))
        }(new Uint8Array(await rM.arrayBuffer()))
      }
      return yM(MM.map((MM => ({
        path: (0, mM.l)(MM),
        read: rM => async function(MM, rM) {
          return MM.size > rM ? null : new Uint8Array(await MM.arrayBuffer())
        }(MM, rM)
      }))))
    }
    async function yM(MM) {
      const rM = function(MM) {
          const rM = MM.length > 0 ? MM[0].path.indexOf("/") : -1;
          if (-1 === rM) return MM;
          const iM = MM[0].path.slice(0, rM + 1);
          if (!MM.every((MM => MM.path.startsWith(iM)))) return MM;
          return MM.map((MM => ({
            ...MM,
            path: MM.path.slice(iM.length)
          })))
        }(MM.filter((MM => !(0, mM.h)(MM.path)))),
        iM = rM.filter((MM => "pack.json" === MM.path.toLowerCase()));
      if (0 === iM.length) throw new mM.e("shaderPack:loadNoManifest");
      if (iM.length > 1) throw new mM.e("shaderPack:loadDuplicateManifest");
      const OM = iM[0],
        SM = await OM.read(JM);
      if (null === SM) throw new mM.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(JM / 1024)
      });
      const jM = function(MM) {
          let rM;
          try {
            rM = JSON.parse(MM)
          } catch (PM) {
            throw new mM.e("shaderPack:loadManifestNotJson", {
              error: PM.message
            }, {
              cause: PM
            })
          }
          if ("object" !== typeof rM || null === rM || Array.isArray(rM)) throw new mM.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: iM,
            name: OM,
            author: SM,
            description: jM,
            keepCircleShadows: aM
          } = rM;
          if (void 0 === iM) throw new mM.e("shaderPack:loadNoApiVersion", {
            version: String(LM.e)
          });
          if (!(0, LM.k)(iM)) throw new mM.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(iM),
            version: String(LM.e)
          });
          if ("string" !== typeof OM || "" === OM.trim()) throw new mM.e("shaderPack:loadNoName");
          if (void 0 !== SM && null !== SM && "string" !== typeof SM) throw new mM.e("shaderPack:loadAuthorNotString");
          if (void 0 !== jM && null !== jM && "string" !== typeof jM) throw new mM.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== aM && "boolean" !== typeof aM) throw new mM.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: iM,
            name: OM,
            author: "string" === typeof SM ? SM : null,
            description: "string" === typeof jM && "" !== jM.trim() ? jM : null,
            keepCircleShadows: !0 === aM
          }
        }(lM(SM, OM.path)),
        aM = rM.filter((MM => MM.path.toLowerCase().endsWith(".wgsl"))).sort(((MM, rM) => (0, zM.k)(MM.path, rM.path)));
      if (0 === aM.length) throw new mM.e("shaderPack:loadNoWgsl");
      if (aM.length > zM.d) throw new mM.e("shaderPack:loadTooManyWgsl", {
        count: String(zM.d)
      });
      const PM = aM.find(((MM, rM) => rM > 0 && MM.path === aM[rM - 1].path));
      if (PM) throw new mM.e("shaderPack:loadDuplicatePath", {
        path: PM.path
      });
      const nM = [];
      let QM = zM.f;
      for (const LM of aM) {
        const MM = await LM.read(QM);
        if (null === MM) throw new mM.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(zM.f / 1024)
        });
        QM -= MM.byteLength, nM.push({
          path: LM.path,
          source: lM(MM, LM.path)
        })
      }
      return {
        manifest: jM,
        files: nM
      }
    }

    function lM(MM, rM) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(MM)
      } catch (iM) {
        throw new mM.e("shaderPack:loadNotUtf8", {
          path: rM
        }, {
          cause: iM
        })
      }
    }
    var EM = iM(5430),
      UM = iM(5451),
      GM = iM(1303);

    function CM(MM) {
      let {
        busy: rM,
        disabled: iM,
        onFiles: OM
      } = MM;
      const {
        t: SM
      } = (0, QM.A)(), {
        getRootProps: zM,
        getInputProps: LM,
        isDragActive: mM,
        open: HM
      } = (0, aM.e)({
        onDrop: OM,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: iM
      });
      return (0, GM.jsxs)("div", {
        ...zM({
          className: jM()("ShaderPackDropZone", {
            ActiveDrag: mM,
            Disabled: iM
          })
        }),
        children: [(0, GM.jsx)("input", {
          ...LM({
            webkitdirectory: "true"
          })
        }), rM && (0, GM.jsx)(PM.d, {}), !rM && (0, GM.jsxs)(GM.Fragment, {
          children: [(0, GM.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, GM.jsx)(nM.b, {
              name: "up-from-bracket"
            })
          }), (0, GM.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: SM((0, UM.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, GM.jsx)(UM.d, {
            disabled: iM,
            openFolderPicker: HM,
            onFiles: OM
          })]
        })]
      })
    }

    function eM(MM) {
      const {
        t: rM
      } = (0, QM.A)(), [iM, SM] = (0, OM.useState)(!1), [jM, aM] = (0, OM.useState)(null), PM = (0, OM.useRef)(!1);
      return {
        loading: iM,
        error: jM,
        setError: aM,
        onFiles: async function(iM) {
          if (!PM.current) {
            PM.current = !0, SM(!0), aM(null);
            try {
              await MM(await dM(iM))
            } catch (OM) {
              OM instanceof mM.e ? aM((0, EM.i)(rM, OM.translationKey, OM.params)) : (console.error("Failed to load the shader pack", OM), aM(rM("shaderPack:unexpectedError")))
            } finally {
              PM.current = !1, SM(!1)
            }
          }
        }
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
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);