export const id = 135;
export const ids = [135, 138, 139];
export const modules = {
  6567: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => IB
    });
    var QB = zB(5110),
      nB = zB(1148);
    const dB = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function IB(BB) {
      let {
        diagnostics: jB,
        more: zB = 0,
        t: IB
      } = BB;
      return (0, nB.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [jB.map(((BB, jB) => {
          const zB = (0, QB.g)(BB),
            NB = function(BB, jB) {
              const zB = (0, QB.d)(null !== BB && void 0 !== BB ? BB : []);
              if (0 === zB.length) return null;
              return zB.map((BB => BB.map((BB => jB(dB[BB]))).join(", "))).join("; ")
            }(BB.variants, IB);
          return (0, nB.jsxs)("li", {
            children: [zB && (0, nB.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: zB
            }), BB.message, NB && (0, nB.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: IB("shaderPack:onlyIn", {
                variants: NB
              })
            })]
          }, jB)
        })), zB > 0 && (0, nB.jsx)("li", {
          children: IB("shaderPack:moreErrors", {
            count: String(zB)
          })
        })]
      })
    }
  },
  6572: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => SB,
      e: () => MB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(5041),
      NB = zB(1369),
      uB = zB(1108),
      UB = zB(1240),
      aB = zB(5120),
      pB = zB(5115),
      rB = zB(3278);
    const sB = 33554432,
      JB = 1024,
      mB = 65536;
    async function yB(BB) {
      const jB = (0, rB.r)(BB);
      if (jB) {
        if (jB.size > sB) throw new rB.b("shaderPack:loadZipTooBig", {
          megabytes: String(sB / 1048576)
        });
        return async function(BB) {
          return kB((0, rB.i)(BB, JB).map((jB => ({
            path: jB.path,
            read: zB => (0, rB.n)(BB, jB, zB)
          }))))
        }(new Uint8Array(await jB.arrayBuffer()))
      }
      return kB(BB.map((BB => ({
        path: (0, rB.j)(BB),
        read: jB => async function(BB, jB) {
          return BB.size > jB ? null : new Uint8Array(await BB.arrayBuffer())
        }(BB, jB)
      }))))
    }
    async function kB(BB) {
      const jB = function(BB) {
          const jB = BB.length > 0 ? BB[0].path.indexOf("/") : -1;
          if (-1 === jB) return BB;
          const zB = BB[0].path.slice(0, jB + 1);
          if (!BB.every((BB => BB.path.startsWith(zB)))) return BB;
          return BB.map((BB => ({
            ...BB,
            path: BB.path.slice(zB.length)
          })))
        }(BB.filter((BB => !(0, rB.f)(BB.path)))),
        zB = jB.filter((BB => "pack.json" === BB.path.toLowerCase()));
      if (0 === zB.length) throw new rB.b("shaderPack:loadNoManifest");
      if (zB.length > 1) throw new rB.b("shaderPack:loadDuplicateManifest");
      const QB = zB[0],
        nB = await QB.read(mB);
      if (null === nB) throw new rB.b("shaderPack:loadManifestTooBig", {
        kilobytes: String(mB / 1024)
      });
      const dB = function(BB) {
          let jB;
          try {
            jB = JSON.parse(BB)
          } catch (NB) {
            throw new rB.b("shaderPack:loadManifestNotJson", {
              error: NB.message
            }, {
              cause: NB
            })
          }
          if ("object" !== typeof jB || null === jB || Array.isArray(jB)) throw new rB.b("shaderPack:loadManifestNotObject");
          const {
            apiVersion: zB,
            name: QB,
            author: nB,
            description: dB,
            keepCircleShadows: IB
          } = jB;
          if (void 0 === zB) throw new rB.b("shaderPack:loadNoApiVersion", {
            version: String(pB.d)
          });
          if (!(0, pB.k)(zB)) throw new rB.b("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(zB),
            version: String(pB.d)
          });
          if ("string" !== typeof QB || "" === QB.trim()) throw new rB.b("shaderPack:loadNoName");
          if (void 0 !== nB && null !== nB && "string" !== typeof nB) throw new rB.b("shaderPack:loadAuthorNotString");
          if (void 0 !== dB && null !== dB && "string" !== typeof dB) throw new rB.b("shaderPack:loadDescriptionNotString");
          if (void 0 !== IB && "boolean" !== typeof IB) throw new rB.b("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: zB,
            name: QB,
            author: "string" === typeof nB ? nB : null,
            description: "string" === typeof dB && "" !== dB.trim() ? dB : null,
            keepCircleShadows: !0 === IB
          }
        }(GB(nB, QB.path)),
        IB = jB.filter((BB => BB.path.toLowerCase().endsWith(".wgsl"))).sort(((BB, jB) => (0, aB.m)(BB.path, jB.path)));
      if (0 === IB.length) throw new rB.b("shaderPack:loadNoWgsl");
      if (IB.length > aB.c) throw new rB.b("shaderPack:loadTooManyWgsl", {
        count: String(aB.c)
      });
      const NB = IB.find(((BB, jB) => jB > 0 && BB.path === IB[jB - 1].path));
      if (NB) throw new rB.b("shaderPack:loadDuplicatePath", {
        path: NB.path
      });
      const uB = [];
      let UB = aB.e;
      for (const pB of IB) {
        const BB = await pB.read(UB);
        if (null === BB) throw new rB.b("shaderPack:loadSourceTooBig", {
          kilobytes: String(aB.e / 1024)
        });
        UB -= BB.byteLength, uB.push({
          path: pB.path,
          source: GB(BB, pB.path)
        })
      }
      return {
        manifest: dB,
        files: uB
      }
    }

    function GB(BB, jB) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(BB)
      } catch (zB) {
        throw new rB.b("shaderPack:loadNotUtf8", {
          path: jB
        }, {
          cause: zB
        })
      }
    }
    var LB = zB(5110),
      gB = zB(5125),
      tB = zB(1148);

    function SB(BB) {
      let {
        busy: jB,
        disabled: zB,
        onFiles: QB
      } = BB;
      const {
        t: nB
      } = (0, UB.D)(), {
        getRootProps: aB,
        getInputProps: pB,
        isDragActive: rB,
        open: sB
      } = (0, IB.d)({
        onDrop: QB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: zB
      });
      return (0, tB.jsxs)("div", {
        ...aB({
          className: dB()("ShaderPackDropZone", {
            ActiveDrag: rB,
            Disabled: zB
          })
        }),
        children: [(0, tB.jsx)("input", {
          ...pB({
            webkitdirectory: "true"
          })
        }), jB && (0, tB.jsx)(NB.e, {}), !jB && (0, tB.jsxs)(tB.Fragment, {
          children: [(0, tB.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, tB.jsx)(uB.c, {
              name: "up-from-bracket"
            })
          }), (0, tB.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: nB((0, gB.f)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, tB.jsx)(gB.b, {
            disabled: zB,
            openFolderPicker: sB,
            onFiles: QB
          })]
        })]
      })
    }

    function MB(BB) {
      const {
        t: jB
      } = (0, UB.D)(), [zB, nB] = (0, QB.useState)(!1), [dB, IB] = (0, QB.useState)(null), NB = (0, QB.useRef)(!1);
      return {
        loading: zB,
        error: dB,
        setError: IB,
        onFiles: async function(zB) {
          if (!NB.current) {
            NB.current = !0, nB(!0), IB(null);
            try {
              await BB(await yB(zB))
            } catch (QB) {
              QB instanceof rB.b ? IB((0, LB.h)(jB, QB.translationKey, QB.params)) : (console.error("Failed to load the shader pack", QB), IB(jB("shaderPack:unexpectedError")))
            } finally {
              NB.current = !1, nB(!1)
            }
          }
        }
      }
    }
  },
  6601: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      forgetShaderPackActiveHint: () => oB,
      isOtherApiVersion: () => EB,
      isShaderPackActive: () => gB,
      isShaderPackChangePending: () => MB,
      markShaderPackChangePending: () => SB,
      pageShaderPackValidationVersion: () => iB,
      reconcileStoredShaderPackHint: () => fB,
      removeShaderPack: () => LB,
      replaceShaderPack: () => yB,
      saveShaderPack: () => mB,
      shaderPackNeedsCheck: () => qB,
      storedPackOutcome: () => tB,
      storedShaderPackFiles: () => rB,
      toStoredShaderPack: () => pB
    });
    var QB = zB(5120),
      nB = zB(5115),
      dB = zB(41),
      IB = zB(3572),
      NB = zB(6606),
      uB = zB(6585);
    const UB = "shaderPackChangePending";
    let aB = null;

    function pB(BB, jB, zB) {
      return {
        manifest: BB.manifest,
        files: (0, QB.w)(BB.files),
        validation: jB,
        ...zB && {
          listing: zB
        }
      }
    }

    function rB(BB) {
      return Object.keys(BB.files).map((jB => ({
        path: jB,
        source: BB.files[jB]
      })))
    }
    let sB = Promise.resolve();

    function JB(BB) {
      const jB = sB.then(BB);
      return sB = jB.catch((() => {})), jB
    }

    function mB(BB, jB) {
      return JB((() => kB(BB, jB)))
    }

    function yB(BB, jB, zB) {
      return JB((async () => JSON.stringify(await (0, NB.h)()) === JSON.stringify(BB) && (null === jB ? (await GB(), !0) : kB(jB, zB))))
    }
    async function kB(BB, jB) {
      const zB = await dB.g.setItem(NB.d, BB);
      return zB && HB(BB, jB), zB
    }
    async function GB() {
      await dB.g.removeItem(NB.d), dB.j.removeItem(IB.e)
    }

    function LB() {
      return JB(GB)
    }

    function gB(BB, jB) {
      return "active" === tB(BB, jB).kind
    }

    function tB(BB, jB) {
      var zB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : EB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) || BB.validation.fromRecheck ? null === jB ? {
        kind: "none",
        reason: "noCompiler"
      } : qB(BB, jB) ? {
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
      dB.k.setItem(UB, performance.timeOrigin)
    }

    function MB() {
      return dB.k.getItem(UB) === performance.timeOrigin
    }

    function EB(BB) {
      return !(0, nB.k)(BB.manifest.apiVersion)
    }

    function iB(BB) {
      return aB ??= BB.ZF((0, uB.shaderPackTextures)()), aB
    }

    function qB(BB, jB) {
      var zB;
      return (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.headerVersion) !== iB(jB)
    }

    function fB(BB) {
      return JB((async () => {
        HB(await (0, NB.h)(!0), BB)
      }))
    }

    function oB() {
      return JB((async () => {
        dB.j.removeItem(IB.e)
      }))
    }

    function HB(BB, jB) {
      gB(BB, jB) ? dB.j.setItem(IB.e, !0) : dB.j.removeItem(IB.e)
    }
  },
  6585: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      loadShaderPackTextures: () => IB,
      shaderPackTextures: () => NB
    });
    var QB = zB(5120);
    let nB = null,
      dB = null;

    function IB() {
      return dB ??= Promise.all([zB.e(73), zB.e(190)]).then((() => zB(40588))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: jB,
          textureNameToIndex: zB,
          textureAnimationData: dB
        } = BB;
        return nB ??= (0, QB.j)(zB, dB, jB), nB
      })), dB
    }

    function NB() {
      if (null === nB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return nB
    }
  },
  6598: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => uB,
      f: () => NB
    });
    var QB = zB(6601),
      nB = zB(6585),
      dB = zB(128);
    const IB = 100;
    async function NB(BB, jB) {
      var zB;
      let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (zB = navigator.gpu) && void 0 !== zB ? zB : null;
      const IB = BB.O4(jB, (0, nB.shaderPackTextures)());
      if (IB.errors.length > 0) return UB(BB, IB.errors, IB.offInStrict);
      const NB = await async function(BB) {
        if (!BB) return null;
        try {
          const jB = await (0, dB.x)(BB);
          return jB ? await jB.requestDevice() : null
        } catch (jB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", jB), null
        }
      }(QB);
      if (!NB) return null;
      let uB = !1;
      NB.lost.then((() => {
        uB = !0
      }));
      try {
        const jB = await Promise.all(IB.validationModules.map((jB => async function(BB, jB, zB) {
          jB.pushErrorScope("validation");
          const QB = jB.createShaderModule({
              code: zB.code
            }),
            nB = jB.popErrorScope(),
            {
              messages: dB
            } = await QB.getCompilationInfo(),
            IB = dB.filter((BB => "error" === BB.type)).map((jB => BB.mapValidationMessage(zB, jB))),
            NB = await nB;
          NB && 0 === IB.length && IB.push({
            file: null,
            line: 0,
            message: NB.message,
            variants: [zB.key]
          });
          return IB
        }(BB, NB, jB))));
        return uB ? null : UB(BB, BB.lzB(jB.flat()), IB.offInStrict)
      } catch (aB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", aB), null
      } finally {
        NB.destroy()
      }
    }
    async function uB(BB, jB) {
      var zB;
      if (!(0, QB.shaderPackNeedsCheck)(BB, jB) || (0, QB.isOtherApiVersion)(BB)) return BB;
      const nB = await NB(jB, (0, QB.storedShaderPackFiles)(BB));
      if (!nB) return BB;
      const dB = !1 === (null === (zB = BB.validation) || void 0 === zB ? void 0 : zB.ok) && !BB.validation.fromRecheck,
        IB = {
          ...BB,
          validation: dB ? nB : {
            ...nB,
            fromRecheck: !0
          }
        };
      return await (0, QB.replaceShaderPack)(BB, IB, jB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), IB
    }

    function UB(BB, jB, zB) {
      return {
        headerVersion: (0, QB.pageShaderPackValidationVersion)(BB),
        ok: 0 === jB.length,
        errors: jB.slice(0, IB),
        moreErrors: Math.max(0, jB.length - IB),
        offInStrict: zB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);