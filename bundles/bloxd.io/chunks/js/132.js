export const id = 132;
export const ids = [132, 136, 137];
export const modules = {
  6796: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(5204),
      bS = gS(1181);
    const XS = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function xS(SS) {
      let {
        diagnostics: HS,
        more: gS = 0,
        t: xS
      } = SS;
      return (0, bS.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [HS.map(((SS, HS) => {
          const gS = (0, tS.f)(SS),
            NS = function(SS, HS) {
              const gS = (0, tS.e)(null !== SS && void 0 !== SS ? SS : []);
              if (0 === gS.length) return null;
              return gS.map((SS => SS.map((SS => HS(XS[SS]))).join(", "))).join("; ")
            }(SS.variants, xS);
          return (0, bS.jsxs)("li", {
            children: [gS && (0, bS.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: gS
            }), SS.message, NS && (0, bS.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: xS("shaderPack:onlyIn", {
                variants: NS
              })
            })]
          }, HS)
        })), gS > 0 && (0, bS.jsx)("li", {
          children: xS("shaderPack:moreErrors", {
            count: String(gS)
          })
        })]
      })
    }
  },
  6805: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => wS,
      h: () => hS
    });
    var tS = gS(64),
      bS = gS(1121),
      XS = gS.n(bS),
      xS = gS(5114),
      NS = gS(1419),
      qS = gS(1127),
      uS = gS(1281),
      IS = gS(5221),
      fS = gS(5212),
      kS = gS(3330);
    const aS = 33554432,
      KS = 1024,
      jS = 65536;
    async function GS(SS) {
      const HS = (0, kS.n)(SS);
      if (HS) {
        if (HS.size > aS) throw new kS.c("shaderPack:loadZipTooBig", {
          megabytes: String(aS / 1048576)
        });
        return async function(SS) {
          return CS((0, kS.i)(SS, KS).map((HS => ({
            path: HS.path,
            read: gS => (0, kS.l)(SS, HS, gS)
          }))))
        }(new Uint8Array(await HS.arrayBuffer()))
      }
      return CS(SS.map((SS => ({
        path: (0, kS.k)(SS),
        read: HS => async function(SS, HS) {
          return SS.size > HS ? null : new Uint8Array(await SS.arrayBuffer())
        }(SS, HS)
      }))))
    }
    async function CS(SS) {
      const HS = function(SS) {
          const HS = SS.length > 0 ? SS[0].path.indexOf("/") : -1;
          if (-1 === HS) return SS;
          const gS = SS[0].path.slice(0, HS + 1);
          if (!SS.every((SS => SS.path.startsWith(gS)))) return SS;
          return SS.map((SS => ({
            ...SS,
            path: SS.path.slice(gS.length)
          })))
        }(SS.filter((SS => !(0, kS.g)(SS.path)))),
        gS = HS.filter((SS => "pack.json" === SS.path.toLowerCase()));
      if (0 === gS.length) throw new kS.c("shaderPack:loadNoManifest");
      if (gS.length > 1) throw new kS.c("shaderPack:loadDuplicateManifest");
      const tS = gS[0],
        bS = await tS.read(jS);
      if (null === bS) throw new kS.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(jS / 1024)
      });
      const XS = function(SS) {
          let HS;
          try {
            HS = JSON.parse(SS)
          } catch (NS) {
            throw new kS.c("shaderPack:loadManifestNotJson", {
              error: NS.message
            }, {
              cause: NS
            })
          }
          if ("object" !== typeof HS || null === HS || Array.isArray(HS)) throw new kS.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: gS,
            name: tS,
            author: bS,
            description: XS,
            keepCircleShadows: xS
          } = HS;
          if (void 0 === gS) throw new kS.c("shaderPack:loadNoApiVersion", {
            version: String(fS.e)
          });
          if (!(0, fS.j)(gS)) throw new kS.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(gS),
            version: String(fS.e)
          });
          if ("string" !== typeof tS || "" === tS.trim()) throw new kS.c("shaderPack:loadNoName");
          if (void 0 !== bS && null !== bS && "string" !== typeof bS) throw new kS.c("shaderPack:loadAuthorNotString");
          if (void 0 !== XS && null !== XS && "string" !== typeof XS) throw new kS.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== xS && "boolean" !== typeof xS) throw new kS.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: gS,
            name: tS,
            author: "string" === typeof bS ? bS : null,
            description: "string" === typeof XS && "" !== XS.trim() ? XS : null,
            keepCircleShadows: !0 === xS
          }
        }(nS(bS, tS.path)),
        xS = HS.filter((SS => SS.path.toLowerCase().endsWith(".wgsl"))).sort(((SS, HS) => (0, IS.m)(SS.path, HS.path)));
      if (0 === xS.length) throw new kS.c("shaderPack:loadNoWgsl");
      if (xS.length > IS.b) throw new kS.c("shaderPack:loadTooManyWgsl", {
        count: String(IS.b)
      });
      const NS = xS.find(((SS, HS) => HS > 0 && SS.path === xS[HS - 1].path));
      if (NS) throw new kS.c("shaderPack:loadDuplicatePath", {
        path: NS.path
      });
      const qS = [];
      let uS = IS.e;
      for (const fS of xS) {
        const SS = await fS.read(uS);
        if (null === SS) throw new kS.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(IS.e / 1024)
        });
        uS -= SS.byteLength, qS.push({
          path: fS.path,
          source: nS(SS, fS.path)
        })
      }
      return {
        manifest: XS,
        files: qS
      }
    }

    function nS(SS, HS) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(SS)
      } catch (gS) {
        throw new kS.c("shaderPack:loadNotUtf8", {
          path: HS
        }, {
          cause: gS
        })
      }
    }
    var PS = gS(5204),
      QS = gS(5228),
      DS = gS(1181);

    function wS(SS) {
      let {
        busy: HS,
        disabled: gS,
        onFiles: tS
      } = SS;
      const {
        t: bS
      } = (0, uS.F)(), {
        getRootProps: IS,
        getInputProps: fS,
        isDragActive: kS,
        open: aS
      } = (0, xS.b)({
        onDrop: tS,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: gS
      });
      return (0, DS.jsxs)("div", {
        ...IS({
          className: XS()("ShaderPackDropZone", {
            ActiveDrag: kS,
            Disabled: gS
          })
        }),
        children: [(0, DS.jsx)("input", {
          ...fS({
            webkitdirectory: "true"
          })
        }), HS && (0, DS.jsx)(NS.c, {}), !HS && (0, DS.jsxs)(DS.Fragment, {
          children: [(0, DS.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, DS.jsx)(qS.d, {
              name: "up-from-bracket"
            })
          }), (0, DS.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: bS((0, QS.f)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, DS.jsx)(QS.d, {
            disabled: gS,
            openFolderPicker: aS,
            onFiles: tS
          })]
        })]
      })
    }

    function hS(SS) {
      const {
        t: HS
      } = (0, uS.F)(), [gS, bS] = (0, tS.useState)(!1), [XS, xS] = (0, tS.useState)(null), NS = (0, tS.useRef)(!1);
      return {
        loading: gS,
        error: XS,
        setError: xS,
        onFiles: async function(gS) {
          if (!NS.current) {
            NS.current = !0, bS(!0), xS(null);
            try {
              await SS(await GS(gS))
            } catch (tS) {
              tS instanceof kS.c ? xS((0, PS.j)(HS, tS.translationKey, tS.params)) : (console.error("Failed to load the shader pack", tS), xS(HS("shaderPack:unexpectedError")))
            } finally {
              NS.current = !1, bS(!1)
            }
          }
        }
      }
    }
  },
  6844: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      forgetShaderPackActiveHint: () => cS,
      isOtherApiVersion: () => ZS,
      isShaderPackActive: () => QS,
      isShaderPackChangePending: () => hS,
      markShaderPackChangePending: () => wS,
      pageShaderPackValidationVersion: () => JS,
      reconcileStoredShaderPackHint: () => dS,
      removeShaderPack: () => PS,
      replaceShaderPack: () => GS,
      saveShaderPack: () => jS,
      shaderPackNeedsCheck: () => OS,
      storedPackOutcome: () => DS,
      storedShaderPackFiles: () => kS,
      toStoredShaderPack: () => fS
    });
    var tS = gS(5221),
      bS = gS(5212),
      XS = gS(45),
      xS = gS(3591),
      NS = gS(6848),
      qS = gS(6824);
    const uS = "shaderPackChangePending";
    let IS = null;

    function fS(SS, HS, gS) {
      return {
        manifest: SS.manifest,
        files: (0, tS.v)(SS.files),
        validation: HS,
        ...gS && {
          listing: gS
        }
      }
    }

    function kS(SS) {
      return Object.keys(SS.files).map((HS => ({
        path: HS,
        source: SS.files[HS]
      })))
    }
    let aS = Promise.resolve();

    function KS(SS) {
      const HS = aS.then(SS);
      return aS = HS.catch((() => {})), HS
    }

    function jS(SS, HS) {
      return KS((() => CS(SS, HS)))
    }

    function GS(SS, HS, gS) {
      return KS((async () => JSON.stringify(await (0, NS.f)()) === JSON.stringify(SS) && (null === HS ? (await nS(), !0) : CS(HS, gS))))
    }
    async function CS(SS, HS) {
      const gS = await XS.e.setItem(NS.d, SS);
      return gS && vS(SS, HS), gS
    }
    async function nS() {
      await XS.e.removeItem(NS.d), XS.g.removeItem(xS.d)
    }

    function PS() {
      return KS(nS)
    }

    function QS(SS, HS) {
      return "active" === DS(SS, HS).kind
    }

    function DS(SS, HS) {
      var gS;
      return null === SS ? {
        kind: "none",
        reason: "nothingStored"
      } : ZS(SS) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) || SS.validation.fromRecheck ? null === HS ? {
        kind: "none",
        reason: "noCompiler"
      } : OS(SS, HS) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : SS.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wS() {
      XS.h.setItem(uS, performance.timeOrigin)
    }

    function hS() {
      return XS.h.getItem(uS) === performance.timeOrigin
    }

    function ZS(SS) {
      return !(0, bS.j)(SS.manifest.apiVersion)
    }

    function JS(SS) {
      return IS ??= SS.dL((0, qS.shaderPackTextures)()), IS
    }

    function OS(SS, HS) {
      var gS;
      return (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.headerVersion) !== JS(HS)
    }

    function dS(SS) {
      return KS((async () => {
        vS(await (0, NS.f)(!0), SS)
      }))
    }

    function cS() {
      return KS((async () => {
        XS.g.removeItem(xS.d)
      }))
    }

    function vS(SS, HS) {
      QS(SS, HS) ? XS.g.setItem(xS.d, !0) : XS.g.removeItem(xS.d)
    }
  },
  6824: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadShaderPackTextures: () => xS,
      shaderPackTextures: () => NS
    });
    var tS = gS(5221);
    let bS = null,
      XS = null;

    function xS() {
      return XS ??= Promise.all([gS.e(72), gS.e(188)]).then((() => gS(40526))).then((SS => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: HS,
          textureNameToIndex: gS,
          textureAnimationData: XS
        } = SS;
        return bS ??= (0, tS.j)(gS, XS, HS), bS
      })), XS
    }

    function NS() {
      if (null === bS) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return bS
    }
  },
  6839: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      g: () => NS
    });
    var tS = gS(6844),
      bS = gS(6824),
      XS = gS(122);
    const xS = 100;
    async function NS(SS, HS) {
      var gS;
      let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gS = navigator.gpu) && void 0 !== gS ? gS : null;
      const xS = SS.f6(HS, (0, bS.shaderPackTextures)());
      if (xS.errors.length > 0) return uS(SS, xS.errors, xS.offInStrict);
      const NS = await async function(SS) {
        if (!SS) return null;
        try {
          const HS = await (0, XS.x)(SS);
          return HS ? await HS.requestDevice() : null
        } catch (HS) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", HS), null
        }
      }(tS);
      if (!NS) return null;
      let qS = !1;
      NS.lost.then((() => {
        qS = !0
      }));
      try {
        const HS = await Promise.all(xS.validationModules.map((HS => async function(SS, HS, gS) {
          HS.pushErrorScope("validation");
          const tS = HS.createShaderModule({
              code: gS.code
            }),
            bS = HS.popErrorScope(),
            {
              messages: XS
            } = await tS.getCompilationInfo(),
            xS = XS.filter((SS => "error" === SS.type)).map((HS => SS.mapValidationMessage(gS, HS))),
            NS = await bS;
          NS && 0 === xS.length && xS.push({
            file: null,
            line: 0,
            message: NS.message,
            variants: [gS.key]
          });
          return xS
        }(SS, NS, HS))));
        return qS ? null : uS(SS, SS.VgS(HS.flat()), xS.offInStrict)
      } catch (IS) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IS), null
      } finally {
        NS.destroy()
      }
    }
    async function qS(SS, HS) {
      var gS;
      if (!(0, tS.shaderPackNeedsCheck)(SS, HS) || (0, tS.isOtherApiVersion)(SS)) return SS;
      const bS = await NS(HS, (0, tS.storedShaderPackFiles)(SS));
      if (!bS) return SS;
      const XS = !1 === (null === (gS = SS.validation) || void 0 === gS ? void 0 : gS.ok) && !SS.validation.fromRecheck,
        xS = {
          ...SS,
          validation: XS ? bS : {
            ...bS,
            fromRecheck: !0
          }
        };
      return await (0, tS.replaceShaderPack)(SS, xS, HS) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xS
    }

    function uS(SS, HS, gS) {
      return {
        headerVersion: (0, tS.pageShaderPackValidationVersion)(SS),
        ok: 0 === HS.length,
        errors: HS.slice(0, xS),
        moreErrors: Math.max(0, HS.length - xS),
        offInStrict: gS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);