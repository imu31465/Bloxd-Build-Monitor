export const id = 148;
export const ids = [148, 151, 152];
export const modules = {
  7169: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(5548),
      YV = xV(1321);
    const UV = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function yV(VV) {
      let {
        diagnostics: eV,
        more: xV = 0,
        t: yV
      } = VV;
      return (0, YV.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [eV.map(((VV, eV) => {
          const xV = (0, JV.f)(VV),
            pV = function(VV, eV) {
              const xV = (0, JV.c)(null !== VV && void 0 !== VV ? VV : []);
              if (0 === xV.length) return null;
              return xV.map((VV => VV.map((VV => eV(UV[VV]))).join(", "))).join("; ")
            }(VV.variants, yV);
          return (0, YV.jsxs)("li", {
            children: [xV && (0, YV.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: xV
            }), VV.message, pV && (0, YV.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: yV("shaderPack:onlyIn", {
                variants: pV
              })
            })]
          }, eV)
        })), xV > 0 && (0, YV.jsx)("li", {
          children: yV("shaderPack:moreErrors", {
            count: String(xV)
          })
        })]
      })
    }
  },
  7174: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => TV,
      c: () => PV
    });
    var JV = xV(62),
      YV = xV(1146),
      UV = xV.n(YV),
      yV = xV(5448),
      pV = xV(1408),
      QV = xV(1414),
      nV = xV(1220),
      wV = xV(5561),
      ZV = xV(5556),
      vV = xV(3588);
    const rV = 33554432,
      kV = 1024,
      bV = 65536;
    async function EV(VV) {
      const eV = (0, vV.p)(VV);
      if (eV) {
        if (eV.size > rV) throw new vV.d("shaderPack:loadZipTooBig", {
          megabytes: String(rV / 1048576)
        });
        return async function(VV) {
          return BV((0, vV.j)(VV, kV).map((eV => ({
            path: eV.path,
            read: xV => (0, vV.n)(VV, eV, xV)
          }))))
        }(new Uint8Array(await eV.arrayBuffer()))
      }
      return BV(VV.map((VV => ({
        path: (0, vV.m)(VV),
        read: eV => async function(VV, eV) {
          return VV.size > eV ? null : new Uint8Array(await VV.arrayBuffer())
        }(VV, eV)
      }))))
    }
    async function BV(VV) {
      const eV = function(VV) {
          const eV = VV.length > 0 ? VV[0].path.indexOf("/") : -1;
          if (-1 === eV) return VV;
          const xV = VV[0].path.slice(0, eV + 1);
          if (!VV.every((VV => VV.path.startsWith(xV)))) return VV;
          return VV.map((VV => ({
            ...VV,
            path: VV.path.slice(xV.length)
          })))
        }(VV.filter((VV => !(0, vV.h)(VV.path)))),
        xV = eV.filter((VV => "pack.json" === VV.path.toLowerCase()));
      if (0 === xV.length) throw new vV.d("shaderPack:loadNoManifest");
      if (xV.length > 1) throw new vV.d("shaderPack:loadDuplicateManifest");
      const JV = xV[0],
        YV = await JV.read(bV);
      if (null === YV) throw new vV.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(bV / 1024)
      });
      const UV = function(VV) {
          let eV;
          try {
            eV = JSON.parse(VV)
          } catch (pV) {
            throw new vV.d("shaderPack:loadManifestNotJson", {
              error: pV.message
            }, {
              cause: pV
            })
          }
          if ("object" !== typeof eV || null === eV || Array.isArray(eV)) throw new vV.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: xV,
            name: JV,
            author: YV,
            description: UV,
            keepCircleShadows: yV
          } = eV;
          if (void 0 === xV) throw new vV.d("shaderPack:loadNoApiVersion", {
            version: String(ZV.d)
          });
          if (!(0, ZV.j)(xV)) throw new vV.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(xV),
            version: String(ZV.d)
          });
          if ("string" !== typeof JV || "" === JV.trim()) throw new vV.d("shaderPack:loadNoName");
          if (void 0 !== YV && null !== YV && "string" !== typeof YV) throw new vV.d("shaderPack:loadAuthorNotString");
          if (void 0 !== UV && null !== UV && "string" !== typeof UV) throw new vV.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== yV && "boolean" !== typeof yV) throw new vV.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: xV,
            name: JV,
            author: "string" === typeof YV ? YV : null,
            description: "string" === typeof UV && "" !== UV.trim() ? UV : null,
            keepCircleShadows: !0 === yV
          }
        }(jV(YV, JV.path)),
        yV = eV.filter((VV => VV.path.toLowerCase().endsWith(".wgsl"))).sort(((VV, eV) => (0, wV.n)(VV.path, eV.path)));
      if (0 === yV.length) throw new vV.d("shaderPack:loadNoWgsl");
      if (yV.length > wV.c) throw new vV.d("shaderPack:loadTooManyWgsl", {
        count: String(wV.c)
      });
      const pV = yV.find(((VV, eV) => eV > 0 && VV.path === yV[eV - 1].path));
      if (pV) throw new vV.d("shaderPack:loadDuplicatePath", {
        path: pV.path
      });
      const QV = [];
      let nV = wV.d;
      for (const ZV of yV) {
        const VV = await ZV.read(nV);
        if (null === VV) throw new vV.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(wV.d / 1024)
        });
        nV -= VV.byteLength, QV.push({
          path: ZV.path,
          source: jV(VV, ZV.path)
        })
      }
      return {
        manifest: UV,
        files: QV
      }
    }

    function jV(VV, eV) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(VV)
      } catch (xV) {
        throw new vV.d("shaderPack:loadNotUtf8", {
          path: eV
        }, {
          cause: xV
        })
      }
    }
    var qV = xV(5548),
      tV = xV(5564),
      FV = xV(1321);

    function TV(VV) {
      let {
        busy: eV,
        disabled: xV,
        onFiles: JV
      } = VV;
      const {
        t: YV
      } = (0, nV.A)(), {
        getRootProps: wV,
        getInputProps: ZV,
        isDragActive: vV,
        open: rV
      } = (0, yV.e)({
        onDrop: JV,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: xV
      });
      return (0, FV.jsxs)("div", {
        ...wV({
          className: UV()("ShaderPackDropZone", {
            ActiveDrag: vV,
            Disabled: xV
          })
        }),
        children: [(0, FV.jsx)("input", {
          ...ZV({
            webkitdirectory: "true"
          })
        }), eV && (0, FV.jsx)(pV.d, {}), !eV && (0, FV.jsxs)(FV.Fragment, {
          children: [(0, FV.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, FV.jsx)(QV.b, {
              name: "up-from-bracket"
            })
          }), (0, FV.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: YV((0, tV.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, FV.jsx)(tV.e, {
            disabled: xV,
            openFolderPicker: rV,
            onFiles: JV
          })]
        })]
      })
    }

    function PV(VV) {
      const {
        t: eV
      } = (0, nV.A)(), [xV, YV] = (0, JV.useState)(!1), [UV, yV] = (0, JV.useState)(null), pV = (0, JV.useRef)(!1);
      return {
        loading: xV,
        error: UV,
        setError: yV,
        onFiles: async function(xV) {
          if (!pV.current) {
            pV.current = !0, YV(!0), yV(null);
            try {
              await VV(await EV(xV))
            } catch (JV) {
              JV instanceof vV.d ? yV((0, qV.h)(eV, JV.translationKey, JV.params)) : (console.error("Failed to load the shader pack", JV), yV(eV("shaderPack:unexpectedError")))
            } finally {
              pV.current = !1, YV(!1)
            }
          }
        }
      }
    }
  },
  7212: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      forgetShaderPackActiveHint: () => zV,
      isOtherApiVersion: () => AV,
      isShaderPackActive: () => tV,
      isShaderPackChangePending: () => PV,
      markShaderPackChangePending: () => TV,
      pageShaderPackValidationVersion: () => NV,
      reconcileStoredShaderPackHint: () => MV,
      removeShaderPack: () => qV,
      replaceShaderPack: () => EV,
      saveShaderPack: () => bV,
      shaderPackNeedsCheck: () => XV,
      storedPackOutcome: () => FV,
      storedShaderPackFiles: () => vV,
      toStoredShaderPack: () => ZV
    });
    var JV = xV(5561),
      YV = xV(5556),
      UV = xV(40),
      yV = xV(3907),
      pV = xV(7216),
      QV = xV(7191);
    const nV = "shaderPackChangePending";
    let wV = null;

    function ZV(VV, eV, xV) {
      return {
        manifest: VV.manifest,
        files: (0, JV.t)(VV.files),
        validation: eV,
        ...xV && {
          listing: xV
        }
      }
    }

    function vV(VV) {
      return Object.keys(VV.files).map((eV => ({
        path: eV,
        source: VV.files[eV]
      })))
    }
    let rV = Promise.resolve();

    function kV(VV) {
      const eV = rV.then(VV);
      return rV = eV.catch((() => {})), eV
    }

    function bV(VV, eV) {
      return kV((() => BV(VV, eV)))
    }

    function EV(VV, eV, xV) {
      return kV((async () => JSON.stringify(await (0, pV.f)()) === JSON.stringify(VV) && (null === eV ? (await jV(), !0) : BV(eV, xV))))
    }
    async function BV(VV, eV) {
      const xV = await UV.i.setItem(pV.d, VV);
      return xV && GV(VV, eV), xV
    }
    async function jV() {
      await UV.i.removeItem(pV.d), UV.m.removeItem(yV.d)
    }

    function qV() {
      return kV(jV)
    }

    function tV(VV, eV) {
      return "active" === FV(VV, eV).kind
    }

    function FV(VV, eV) {
      var xV;
      return null === VV ? {
        kind: "none",
        reason: "nothingStored"
      } : AV(VV) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) || VV.validation.fromRecheck ? null === eV ? {
        kind: "none",
        reason: "noCompiler"
      } : XV(VV, eV) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : VV.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function TV() {
      UV.q.setItem(nV, performance.timeOrigin)
    }

    function PV() {
      return UV.q.getItem(nV) === performance.timeOrigin
    }

    function AV(VV) {
      return !(0, YV.j)(VV.manifest.apiVersion)
    }

    function NV(VV) {
      return wV ??= VV.lD((0, QV.shaderPackTextures)()), wV
    }

    function XV(VV, eV) {
      var xV;
      return (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.headerVersion) !== NV(eV)
    }

    function MV(VV) {
      return kV((async () => {
        GV(await (0, pV.f)(!0), VV)
      }))
    }

    function zV() {
      return kV((async () => {
        UV.m.removeItem(yV.d)
      }))
    }

    function GV(VV, eV) {
      tV(VV, eV) ? UV.m.setItem(yV.d, !0) : UV.m.removeItem(yV.d)
    }
  },
  7191: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      loadShaderPackTextures: () => yV,
      shaderPackTextures: () => pV
    });
    var JV = xV(5561);
    let YV = null,
      UV = null;

    function yV() {
      return UV ??= Promise.all([xV.e(84), xV.e(204)]).then((() => xV(41764))).then((VV => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: eV,
          textureNameToIndex: xV,
          textureAnimationData: UV
        } = VV;
        return YV ??= (0, JV.j)(xV, UV, eV), YV
      })), UV
    }

    function pV() {
      if (null === YV) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return YV
    }
  },
  7208: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => QV,
      d: () => pV
    });
    var JV = xV(7212),
      YV = xV(7191),
      UV = xV(124);
    const yV = 100;
    async function pV(VV, eV) {
      var xV;
      let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (xV = navigator.gpu) && void 0 !== xV ? xV : null;
      const yV = VV.GeV(eV, (0, YV.shaderPackTextures)());
      if (yV.errors.length > 0) return nV(VV, yV.errors, yV.offInStrict);
      const pV = await async function(VV) {
        if (!VV) return null;
        try {
          const eV = await (0, UV.w)(VV);
          return eV ? await eV.requestDevice() : null
        } catch (eV) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", eV), null
        }
      }(JV);
      if (!pV) return null;
      let QV = !1;
      pV.lost.then((() => {
        QV = !0
      }));
      try {
        const eV = await Promise.all(yV.validationModules.map((eV => async function(VV, eV, xV) {
          eV.pushErrorScope("validation");
          const JV = eV.createShaderModule({
              code: xV.code
            }),
            YV = eV.popErrorScope(),
            {
              messages: UV
            } = await JV.getCompilationInfo(),
            yV = UV.filter((VV => "error" === VV.type)).map((eV => VV.mapValidationMessage(xV, eV))),
            pV = await YV;
          pV && 0 === yV.length && yV.push({
            file: null,
            line: 0,
            message: pV.message,
            variants: [xV.key]
          });
          return yV
        }(VV, pV, eV))));
        return QV ? null : nV(VV, VV.BYV(eV.flat()), yV.offInStrict)
      } catch (wV) {
        return console.error("Couldn't validate the shader pack on WebGPU.", wV), null
      } finally {
        pV.destroy()
      }
    }
    async function QV(VV, eV) {
      var xV;
      if (!(0, JV.shaderPackNeedsCheck)(VV, eV) || (0, JV.isOtherApiVersion)(VV)) return VV;
      const YV = await pV(eV, (0, JV.storedShaderPackFiles)(VV));
      if (!YV) return VV;
      const UV = !1 === (null === (xV = VV.validation) || void 0 === xV ? void 0 : xV.ok) && !VV.validation.fromRecheck,
        yV = {
          ...VV,
          validation: UV ? YV : {
            ...YV,
            fromRecheck: !0
          }
        };
      return await (0, JV.replaceShaderPack)(VV, yV, eV) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yV
    }

    function nV(VV, eV, xV) {
      return {
        headerVersion: (0, JV.pageShaderPackValidationVersion)(VV),
        ok: 0 === eV.length,
        errors: eV.slice(0, yV),
        moreErrors: Math.max(0, eV.length - yV),
        offInStrict: xV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);