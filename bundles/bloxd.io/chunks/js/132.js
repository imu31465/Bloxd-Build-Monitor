export const id = 132;
export const ids = [132, 136, 137];
export const modules = {
  6630: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    var pD = wD(5070),
      sD = wD(1096);
    const KD = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function rD(DD) {
      let {
        diagnostics: zD,
        more: wD = 0,
        t: rD
      } = DD;
      return (0, sD.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [zD.map(((DD, zD) => {
          const wD = (0, pD.g)(DD),
            LD = function(DD, zD) {
              const wD = (0, pD.d)(null !== DD && void 0 !== DD ? DD : []);
              if (0 === wD.length) return null;
              return wD.map((DD => DD.map((DD => zD(KD[DD]))).join(", "))).join("; ")
            }(DD.variants, rD);
          return (0, sD.jsxs)("li", {
            children: [wD && (0, sD.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: wD
            }), DD.message, LD && (0, sD.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: rD("shaderPack:onlyIn", {
                variants: LD
              })
            })]
          }, zD)
        })), wD > 0 && (0, sD.jsx)("li", {
          children: rD("shaderPack:moreErrors", {
            count: String(wD)
          })
        })]
      })
    }
  },
  6637: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => ED,
      f: () => QD
    });
    var pD = wD(58),
      sD = wD(1044),
      KD = wD.n(sD),
      rD = wD(4974),
      LD = wD(1346),
      cD = wD(1057),
      gD = wD(1200),
      RD = wD(5084),
      AD = wD(5076),
      UD = wD(3150);
    const fD = 33554432,
      ID = 1024,
      BD = 65536;
    async function GD(DD) {
      const zD = (0, UD.n)(DD);
      if (zD) {
        if (zD.size > fD) throw new UD.c("shaderPack:loadZipTooBig", {
          megabytes: String(fD / 1048576)
        });
        return async function(DD) {
          return hD((0, UD.j)(DD, ID).map((zD => ({
            path: zD.path,
            read: wD => (0, UD.m)(DD, zD, wD)
          }))))
        }(new Uint8Array(await zD.arrayBuffer()))
      }
      return hD(DD.map((DD => ({
        path: (0, UD.k)(DD),
        read: zD => async function(DD, zD) {
          return DD.size > zD ? null : new Uint8Array(await DD.arrayBuffer())
        }(DD, zD)
      }))))
    }
    async function hD(DD) {
      const zD = function(DD) {
          const zD = DD.length > 0 ? DD[0].path.indexOf("/") : -1;
          if (-1 === zD) return DD;
          const wD = DD[0].path.slice(0, zD + 1);
          if (!DD.every((DD => DD.path.startsWith(wD)))) return DD;
          return DD.map((DD => ({
            ...DD,
            path: DD.path.slice(wD.length)
          })))
        }(DD.filter((DD => !(0, UD.f)(DD.path)))),
        wD = zD.filter((DD => "pack.json" === DD.path.toLowerCase()));
      if (0 === wD.length) throw new UD.c("shaderPack:loadNoManifest");
      if (wD.length > 1) throw new UD.c("shaderPack:loadDuplicateManifest");
      const pD = wD[0],
        sD = await pD.read(BD);
      if (null === sD) throw new UD.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(BD / 1024)
      });
      const KD = function(DD) {
          let zD;
          try {
            zD = JSON.parse(DD)
          } catch (LD) {
            throw new UD.c("shaderPack:loadManifestNotJson", {
              error: LD.message
            }, {
              cause: LD
            })
          }
          if ("object" !== typeof zD || null === zD || Array.isArray(zD)) throw new UD.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: wD,
            name: pD,
            author: sD,
            description: KD,
            keepCircleShadows: rD
          } = zD;
          if (void 0 === wD) throw new UD.c("shaderPack:loadNoApiVersion", {
            version: String(AD.b)
          });
          if (!(0, AD.h)(wD)) throw new UD.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(wD),
            version: String(AD.b)
          });
          if ("string" !== typeof pD || "" === pD.trim()) throw new UD.c("shaderPack:loadNoName");
          if (void 0 !== sD && null !== sD && "string" !== typeof sD) throw new UD.c("shaderPack:loadAuthorNotString");
          if (void 0 !== KD && null !== KD && "string" !== typeof KD) throw new UD.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== rD && "boolean" !== typeof rD) throw new UD.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: wD,
            name: pD,
            author: "string" === typeof sD ? sD : null,
            description: "string" === typeof KD && "" !== KD.trim() ? KD : null,
            keepCircleShadows: !0 === rD
          }
        }(nD(sD, pD.path)),
        rD = zD.filter((DD => DD.path.toLowerCase().endsWith(".wgsl"))).sort(((DD, zD) => (0, RD.n)(DD.path, zD.path)));
      if (0 === rD.length) throw new UD.c("shaderPack:loadNoWgsl");
      if (rD.length > RD.d) throw new UD.c("shaderPack:loadTooManyWgsl", {
        count: String(RD.d)
      });
      const LD = rD.find(((DD, zD) => zD > 0 && DD.path === rD[zD - 1].path));
      if (LD) throw new UD.c("shaderPack:loadDuplicatePath", {
        path: LD.path
      });
      const cD = [];
      let gD = RD.e;
      for (const AD of rD) {
        const DD = await AD.read(gD);
        if (null === DD) throw new UD.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(RD.e / 1024)
        });
        gD -= DD.byteLength, cD.push({
          path: AD.path,
          source: nD(DD, AD.path)
        })
      }
      return {
        manifest: KD,
        files: cD
      }
    }

    function nD(DD, zD) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(DD)
      } catch (wD) {
        throw new UD.c("shaderPack:loadNotUtf8", {
          path: zD
        }, {
          cause: wD
        })
      }
    }
    var MD = wD(5070),
      OD = wD(5091),
      JD = wD(1096);

    function ED(DD) {
      let {
        busy: zD,
        disabled: wD,
        onFiles: pD
      } = DD;
      const {
        t: sD
      } = (0, gD.E)(), {
        getRootProps: RD,
        getInputProps: AD,
        isDragActive: UD,
        open: fD
      } = (0, rD.c)({
        onDrop: pD,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: wD
      });
      return (0, JD.jsxs)("div", {
        ...RD({
          className: KD()("ShaderPackDropZone", {
            ActiveDrag: UD,
            Disabled: wD
          })
        }),
        children: [(0, JD.jsx)("input", {
          ...AD({
            webkitdirectory: "true"
          })
        }), zD && (0, JD.jsx)(LD.e, {}), !zD && (0, JD.jsxs)(JD.Fragment, {
          children: [(0, JD.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, JD.jsx)(cD.e, {
              name: "up-from-bracket"
            })
          }), (0, JD.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: sD((0, OD.h)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, JD.jsx)(OD.d, {
            disabled: wD,
            openFolderPicker: fD,
            onFiles: pD
          })]
        })]
      })
    }

    function QD(DD) {
      const {
        t: zD
      } = (0, gD.E)(), [wD, sD] = (0, pD.useState)(!1), [KD, rD] = (0, pD.useState)(null), LD = (0, pD.useRef)(!1);
      return {
        loading: wD,
        error: KD,
        setError: rD,
        onFiles: async function(wD) {
          if (!LD.current) {
            LD.current = !0, sD(!0), rD(null);
            try {
              await DD(await GD(wD))
            } catch (pD) {
              pD instanceof UD.c ? rD((0, MD.i)(zD, pD.translationKey, pD.params)) : (console.error("Failed to load the shader pack", pD), rD(zD("shaderPack:unexpectedError")))
            } finally {
              LD.current = !1, sD(!1)
            }
          }
        }
      }
    }
  },
  6691: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      forgetShaderPackActiveHint: () => xD,
      isOtherApiVersion: () => XD,
      isShaderPackActive: () => OD,
      isShaderPackChangePending: () => QD,
      markShaderPackChangePending: () => ED,
      pageShaderPackValidationVersion: () => VD,
      reconcileStoredShaderPackHint: () => CD,
      removeShaderPack: () => MD,
      replaceShaderPack: () => GD,
      saveShaderPack: () => BD,
      shaderPackNeedsCheck: () => PD,
      storedPackOutcome: () => JD,
      storedShaderPackFiles: () => UD,
      toStoredShaderPack: () => AD
    });
    var pD = wD(5084),
      sD = wD(5076),
      KD = wD(35),
      rD = wD(3462),
      LD = wD(6693),
      cD = wD(6664);
    const gD = "shaderPackChangePending";
    let RD = null;

    function AD(DD, zD, wD) {
      return {
        manifest: DD.manifest,
        files: (0, pD.z)(DD.files),
        validation: zD,
        ...wD && {
          listing: wD
        }
      }
    }

    function UD(DD) {
      return Object.keys(DD.files).map((zD => ({
        path: zD,
        source: DD.files[zD]
      })))
    }
    let fD = Promise.resolve();

    function ID(DD) {
      const zD = fD.then(DD);
      return fD = zD.catch((() => {})), zD
    }

    function BD(DD, zD) {
      return ID((() => hD(DD, zD)))
    }

    function GD(DD, zD, wD) {
      return ID((async () => JSON.stringify(await (0, LD.c)()) === JSON.stringify(DD) && (null === zD ? (await nD(), !0) : hD(zD, wD))))
    }
    async function hD(DD, zD) {
      const wD = await KD.g.setItem(LD.b, DD);
      return wD && TD(DD, zD), wD
    }
    async function nD() {
      await KD.g.removeItem(LD.b), KD.h.removeItem(rD.e)
    }

    function MD() {
      return ID(nD)
    }

    function OD(DD, zD) {
      return "active" === JD(DD, zD).kind
    }

    function JD(DD, zD) {
      var wD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : XD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) || DD.validation.fromRecheck ? null === zD ? {
        kind: "none",
        reason: "noCompiler"
      } : PD(DD, zD) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : DD.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ED() {
      KD.k.setItem(gD, performance.timeOrigin)
    }

    function QD() {
      return KD.k.getItem(gD) === performance.timeOrigin
    }

    function XD(DD) {
      return !(0, sD.h)(DD.manifest.apiVersion)
    }

    function VD(DD) {
      return RD ??= DD.qS((0, cD.shaderPackTextures)()), RD
    }

    function PD(DD, zD) {
      var wD;
      return (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.headerVersion) !== VD(zD)
    }

    function CD(DD) {
      return ID((async () => {
        TD(await (0, LD.c)(!0), DD)
      }))
    }

    function xD() {
      return ID((async () => {
        KD.h.removeItem(rD.e)
      }))
    }

    function TD(DD, zD) {
      OD(DD, zD) ? KD.h.setItem(rD.e, !0) : KD.h.removeItem(rD.e)
    }
  },
  6664: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      loadShaderPackTextures: () => rD,
      shaderPackTextures: () => LD
    });
    var pD = wD(5084);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= Promise.all([wD.e(72), wD.e(188)]).then((() => wD(40415))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zD,
          textureNameToIndex: wD,
          textureAnimationData: KD
        } = DD;
        return sD ??= (0, pD.m)(wD, KD, zD), sD
      })), KD
    }

    function LD() {
      if (null === sD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return sD
    }
  },
  6682: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cD,
      h: () => LD
    });
    var pD = wD(6691),
      sD = wD(6664),
      KD = wD(119);
    const rD = 100;
    async function LD(DD, zD) {
      var wD;
      let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wD = navigator.gpu) && void 0 !== wD ? wD : null;
      const rD = DD.LDD(zD, (0, sD.shaderPackTextures)());
      if (rD.errors.length > 0) return gD(DD, rD.errors, rD.offInStrict);
      const LD = await async function(DD) {
        if (!DD) return null;
        try {
          const zD = await (0, KD.x)(DD);
          return zD ? await zD.requestDevice() : null
        } catch (zD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zD), null
        }
      }(pD);
      if (!LD) return null;
      let cD = !1;
      LD.lost.then((() => {
        cD = !0
      }));
      try {
        const zD = await Promise.all(rD.validationModules.map((zD => async function(DD, zD, wD) {
          zD.pushErrorScope("validation");
          const pD = zD.createShaderModule({
              code: wD.code
            }),
            sD = zD.popErrorScope(),
            {
              messages: KD
            } = await pD.getCompilationInfo(),
            rD = KD.filter((DD => "error" === DD.type)).map((zD => DD.mapValidationMessage(wD, zD))),
            LD = await sD;
          LD && 0 === rD.length && rD.push({
            file: null,
            line: 0,
            message: LD.message,
            variants: [wD.key]
          });
          return rD
        }(DD, LD, zD))));
        return cD ? null : gD(DD, DD.RpD(zD.flat()), rD.offInStrict)
      } catch (RD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RD), null
      } finally {
        LD.destroy()
      }
    }
    async function cD(DD, zD) {
      var wD;
      if (!(0, pD.shaderPackNeedsCheck)(DD, zD) || (0, pD.isOtherApiVersion)(DD)) return DD;
      const sD = await LD(zD, (0, pD.storedShaderPackFiles)(DD));
      if (!sD) return DD;
      const KD = !1 === (null === (wD = DD.validation) || void 0 === wD ? void 0 : wD.ok) && !DD.validation.fromRecheck,
        rD = {
          ...DD,
          validation: KD ? sD : {
            ...sD,
            fromRecheck: !0
          }
        };
      return await (0, pD.replaceShaderPack)(DD, rD, zD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), rD
    }

    function gD(DD, zD, wD) {
      return {
        headerVersion: (0, pD.pageShaderPackValidationVersion)(DD),
        ok: 0 === zD.length,
        errors: zD.slice(0, rD),
        moreErrors: Math.max(0, zD.length - rD),
        offInStrict: wD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);