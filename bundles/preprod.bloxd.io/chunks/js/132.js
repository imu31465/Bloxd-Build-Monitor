export const id = 132;
export const ids = [132, 136, 137];
export const modules = {
  6596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    var QC = ZC(4992),
      wC = ZC(1056);
    const bC = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function nC(CC) {
      let {
        diagnostics: zC,
        more: ZC = 0,
        t: nC
      } = CC;
      return (0, wC.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [zC.map(((CC, zC) => {
          const ZC = (0, QC.g)(CC),
            fC = function(CC, zC) {
              const ZC = (0, QC.d)(null !== CC && void 0 !== CC ? CC : []);
              if (0 === ZC.length) return null;
              return ZC.map((CC => CC.map((CC => zC(bC[CC]))).join(", "))).join("; ")
            }(CC.variants, nC);
          return (0, wC.jsxs)("li", {
            children: [ZC && (0, wC.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ZC
            }), CC.message, fC && (0, wC.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: nC("shaderPack:onlyIn", {
                variants: fC
              })
            })]
          }, zC)
        })), ZC > 0 && (0, wC.jsx)("li", {
          children: nC("shaderPack:moreErrors", {
            count: String(ZC)
          })
        })]
      })
    }
  },
  6600: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => JC,
      i: () => IC
    });
    var QC = ZC(48),
      wC = ZC(1002),
      bC = ZC.n(wC),
      nC = ZC(4895),
      fC = ZC(1295),
      oC = ZC(1013),
      qC = ZC(1143),
      FC = ZC(5002),
      WC = ZC(4998),
      NC = ZC(3142);
    const MC = 33554432,
      gC = 1024,
      SC = 65536;
    async function pC(CC) {
      const zC = (0, NC.t)(CC);
      if (zC) {
        if (zC.size > MC) throw new NC.d("shaderPack:loadZipTooBig", {
          megabytes: String(MC / 1048576)
        });
        return async function(CC) {
          return PC((0, NC.k)(CC, gC).map((zC => ({
            path: zC.path,
            read: ZC => (0, NC.s)(CC, zC, ZC)
          }))))
        }(new Uint8Array(await zC.arrayBuffer()))
      }
      return PC(CC.map((CC => ({
        path: (0, NC.o)(CC),
        read: zC => async function(CC, zC) {
          return CC.size > zC ? null : new Uint8Array(await CC.arrayBuffer())
        }(CC, zC)
      }))))
    }
    async function PC(CC) {
      const zC = function(CC) {
          const zC = CC.length > 0 ? CC[0].path.indexOf("/") : -1;
          if (-1 === zC) return CC;
          const ZC = CC[0].path.slice(0, zC + 1);
          if (!CC.every((CC => CC.path.startsWith(ZC)))) return CC;
          return CC.map((CC => ({
            ...CC,
            path: CC.path.slice(ZC.length)
          })))
        }(CC.filter((CC => !(0, NC.g)(CC.path)))),
        ZC = zC.filter((CC => "pack.json" === CC.path.toLowerCase()));
      if (0 === ZC.length) throw new NC.d("shaderPack:loadNoManifest");
      if (ZC.length > 1) throw new NC.d("shaderPack:loadDuplicateManifest");
      const QC = ZC[0],
        wC = await QC.read(SC);
      if (null === wC) throw new NC.d("shaderPack:loadManifestTooBig", {
        kilobytes: String(SC / 1024)
      });
      const bC = function(CC) {
          let zC;
          try {
            zC = JSON.parse(CC)
          } catch (fC) {
            throw new NC.d("shaderPack:loadManifestNotJson", {
              error: fC.message
            }, {
              cause: fC
            })
          }
          if ("object" !== typeof zC || null === zC || Array.isArray(zC)) throw new NC.d("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ZC,
            name: QC,
            author: wC,
            description: bC,
            keepCircleShadows: nC
          } = zC;
          if (void 0 === ZC) throw new NC.d("shaderPack:loadNoApiVersion", {
            version: String(WC.b)
          });
          if (!(0, WC.i)(ZC)) throw new NC.d("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ZC),
            version: String(WC.b)
          });
          if ("string" !== typeof QC || "" === QC.trim()) throw new NC.d("shaderPack:loadNoName");
          if (void 0 !== wC && null !== wC && "string" !== typeof wC) throw new NC.d("shaderPack:loadAuthorNotString");
          if (void 0 !== bC && null !== bC && "string" !== typeof bC) throw new NC.d("shaderPack:loadDescriptionNotString");
          if (void 0 !== nC && "boolean" !== typeof nC) throw new NC.d("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ZC,
            name: QC,
            author: "string" === typeof wC ? wC : null,
            description: "string" === typeof bC && "" !== bC.trim() ? bC : null,
            keepCircleShadows: !0 === nC
          }
        }(GC(wC, QC.path)),
        nC = zC.filter((CC => CC.path.toLowerCase().endsWith(".wgsl"))).sort(((CC, zC) => (0, FC.m)(CC.path, zC.path)));
      if (0 === nC.length) throw new NC.d("shaderPack:loadNoWgsl");
      if (nC.length > FC.c) throw new NC.d("shaderPack:loadTooManyWgsl", {
        count: String(FC.c)
      });
      const fC = nC.find(((CC, zC) => zC > 0 && CC.path === nC[zC - 1].path));
      if (fC) throw new NC.d("shaderPack:loadDuplicatePath", {
        path: fC.path
      });
      const oC = [];
      let qC = FC.g;
      for (const WC of nC) {
        const CC = await WC.read(qC);
        if (null === CC) throw new NC.d("shaderPack:loadSourceTooBig", {
          kilobytes: String(FC.g / 1024)
        });
        qC -= CC.byteLength, oC.push({
          path: WC.path,
          source: GC(CC, WC.path)
        })
      }
      return {
        manifest: bC,
        files: oC
      }
    }

    function GC(CC, zC) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(CC)
      } catch (ZC) {
        throw new NC.d("shaderPack:loadNotUtf8", {
          path: zC
        }, {
          cause: ZC
        })
      }
    }
    var RC = ZC(4992),
      AC = ZC(5008),
      xC = ZC(1056);

    function JC(CC) {
      let {
        busy: zC,
        disabled: ZC,
        onFiles: QC
      } = CC;
      const {
        t: wC
      } = (0, qC.y)(), {
        getRootProps: FC,
        getInputProps: WC,
        isDragActive: NC,
        open: MC
      } = (0, nC.d)({
        onDrop: QC,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ZC
      });
      return (0, xC.jsxs)("div", {
        ...FC({
          className: bC()("ShaderPackDropZone", {
            ActiveDrag: NC,
            Disabled: ZC
          })
        }),
        children: [(0, xC.jsx)("input", {
          ...WC({
            webkitdirectory: "true"
          })
        }), zC && (0, xC.jsx)(fC.d, {}), !zC && (0, xC.jsxs)(xC.Fragment, {
          children: [(0, xC.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, xC.jsx)(oC.c, {
              name: "up-from-bracket"
            })
          }), (0, xC.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: wC((0, AC.f)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, xC.jsx)(AC.b, {
            disabled: ZC,
            openFolderPicker: MC,
            onFiles: QC
          })]
        })]
      })
    }

    function IC(CC) {
      const {
        t: zC
      } = (0, qC.y)(), [ZC, wC] = (0, QC.useState)(!1), [bC, nC] = (0, QC.useState)(null), fC = (0, QC.useRef)(!1);
      return {
        loading: ZC,
        error: bC,
        setError: nC,
        onFiles: async function(ZC) {
          if (!fC.current) {
            fC.current = !0, wC(!0), nC(null);
            try {
              await CC(await pC(ZC))
            } catch (QC) {
              QC instanceof NC.d ? nC((0, RC.h)(zC, QC.translationKey, QC.params)) : (console.error("Failed to load the shader pack", QC), nC(zC("shaderPack:unexpectedError")))
            } finally {
              fC.current = !1, wC(!1)
            }
          }
        }
      }
    }
  },
  6658: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      forgetShaderPackActiveHint: () => KC,
      isOtherApiVersion: () => iC,
      isShaderPackActive: () => AC,
      isShaderPackChangePending: () => IC,
      markShaderPackChangePending: () => JC,
      pageShaderPackValidationVersion: () => vC,
      reconcileStoredShaderPackHint: () => hC,
      removeShaderPack: () => RC,
      replaceShaderPack: () => pC,
      saveShaderPack: () => SC,
      shaderPackNeedsCheck: () => eC,
      storedPackOutcome: () => xC,
      storedShaderPackFiles: () => NC,
      toStoredShaderPack: () => WC
    });
    var QC = ZC(5002),
      wC = ZC(4998),
      bC = ZC(38),
      nC = ZC(3432),
      fC = ZC(6660),
      oC = ZC(6630);
    const qC = "shaderPackChangePending";
    let FC = null;

    function WC(CC, zC, ZC) {
      return {
        manifest: CC.manifest,
        files: (0, QC.w)(CC.files),
        validation: zC,
        ...ZC && {
          listing: ZC
        }
      }
    }

    function NC(CC) {
      return Object.keys(CC.files).map((zC => ({
        path: zC,
        source: CC.files[zC]
      })))
    }
    let MC = Promise.resolve();

    function gC(CC) {
      const zC = MC.then(CC);
      return MC = zC.catch((() => {})), zC
    }

    function SC(CC, zC) {
      return gC((() => PC(CC, zC)))
    }

    function pC(CC, zC, ZC) {
      return gC((async () => JSON.stringify(await (0, fC.e)()) === JSON.stringify(CC) && (null === zC ? (await GC(), !0) : PC(zC, ZC))))
    }
    async function PC(CC, zC) {
      const ZC = await bC.g.setItem(fC.c, CC);
      return ZC && YC(CC, zC), ZC
    }
    async function GC() {
      await bC.g.removeItem(fC.c), bC.i.removeItem(nC.b)
    }

    function RC() {
      return gC(GC)
    }

    function AC(CC, zC) {
      return "active" === xC(CC, zC).kind
    }

    function xC(CC, zC) {
      var ZC;
      return null === CC ? {
        kind: "none",
        reason: "nothingStored"
      } : iC(CC) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) || CC.validation.fromRecheck ? null === zC ? {
        kind: "none",
        reason: "noCompiler"
      } : eC(CC, zC) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : CC.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function JC() {
      bC.k.setItem(qC, performance.timeOrigin)
    }

    function IC() {
      return bC.k.getItem(qC) === performance.timeOrigin
    }

    function iC(CC) {
      return !(0, wC.i)(CC.manifest.apiVersion)
    }

    function vC(CC) {
      return FC ??= CC.Rm((0, oC.shaderPackTextures)()), FC
    }

    function eC(CC, zC) {
      var ZC;
      return (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.headerVersion) !== vC(zC)
    }

    function hC(CC) {
      return gC((async () => {
        YC(await (0, fC.e)(!0), CC)
      }))
    }

    function KC() {
      return gC((async () => {
        bC.i.removeItem(nC.b)
      }))
    }

    function YC(CC, zC) {
      AC(CC, zC) ? bC.i.setItem(nC.b, !0) : bC.i.removeItem(nC.b)
    }
  },
  6630: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      loadShaderPackTextures: () => nC,
      shaderPackTextures: () => fC
    });
    var QC = ZC(5002);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= Promise.all([ZC.e(72), ZC.e(188)]).then((() => ZC(40313))).then((CC => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zC,
          textureNameToIndex: ZC,
          textureAnimationData: bC
        } = CC;
        return wC ??= (0, QC.k)(ZC, bC, zC), wC
      })), bC
    }

    function fC() {
      if (null === wC) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return wC
    }
  },
  6651: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC,
      c: () => fC
    });
    var QC = ZC(6658),
      wC = ZC(6630),
      bC = ZC(94);
    const nC = 100;
    async function fC(CC, zC) {
      var ZC;
      let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZC = navigator.gpu) && void 0 !== ZC ? ZC : null;
      const nC = CC.K3(zC, (0, wC.shaderPackTextures)());
      if (nC.errors.length > 0) return qC(CC, nC.errors, nC.offInStrict);
      const fC = await async function(CC) {
        if (!CC) return null;
        try {
          const zC = await (0, bC.z)(CC);
          return zC ? await zC.requestDevice() : null
        } catch (zC) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zC), null
        }
      }(QC);
      if (!fC) return null;
      let oC = !1;
      fC.lost.then((() => {
        oC = !0
      }));
      try {
        const zC = await Promise.all(nC.validationModules.map((zC => async function(CC, zC, ZC) {
          zC.pushErrorScope("validation");
          const QC = zC.createShaderModule({
              code: ZC.code
            }),
            wC = zC.popErrorScope(),
            {
              messages: bC
            } = await QC.getCompilationInfo(),
            nC = bC.filter((CC => "error" === CC.type)).map((zC => CC.mapValidationMessage(ZC, zC))),
            fC = await wC;
          fC && 0 === nC.length && nC.push({
            file: null,
            line: 0,
            message: fC.message,
            variants: [ZC.key]
          });
          return nC
        }(CC, fC, zC))));
        return oC ? null : qC(CC, CC.rZC(zC.flat()), nC.offInStrict)
      } catch (FC) {
        return console.error("Couldn't validate the shader pack on WebGPU.", FC), null
      } finally {
        fC.destroy()
      }
    }
    async function oC(CC, zC) {
      var ZC;
      if (!(0, QC.shaderPackNeedsCheck)(CC, zC) || (0, QC.isOtherApiVersion)(CC)) return CC;
      const wC = await fC(zC, (0, QC.storedShaderPackFiles)(CC));
      if (!wC) return CC;
      const bC = !1 === (null === (ZC = CC.validation) || void 0 === ZC ? void 0 : ZC.ok) && !CC.validation.fromRecheck,
        nC = {
          ...CC,
          validation: bC ? wC : {
            ...wC,
            fromRecheck: !0
          }
        };
      return await (0, QC.replaceShaderPack)(CC, nC, zC) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), nC
    }

    function qC(CC, zC, ZC) {
      return {
        headerVersion: (0, QC.pageShaderPackValidationVersion)(CC),
        ok: 0 === zC.length,
        errors: zC.slice(0, nC),
        moreErrors: Math.max(0, zC.length - nC),
        offInStrict: ZC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);