export const id = 156;
export const ids = [156, 159, 160];
export const modules = {
  7743: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(6076),
      tR = GR(1378);
    const uR = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function ZR(RR) {
      let {
        diagnostics: JR,
        more: GR = 0,
        t: ZR
      } = RR;
      return (0, tR.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [JR.map(((RR, JR) => {
          const GR = (0, yR.c)(RR),
            qR = function(RR, JR) {
              const GR = (0, yR.b)(null !== RR && void 0 !== RR ? RR : []);
              if (0 === GR.length) return null;
              return GR.map((RR => RR.map((RR => JR(uR[RR]))).join(", "))).join("; ")
            }(RR.variants, ZR);
          return (0, tR.jsxs)("li", {
            children: [GR && (0, tR.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: GR
            }), RR.message, qR && (0, tR.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: ZR("shaderPack:onlyIn", {
                variants: qR
              })
            })]
          }, JR)
        })), GR > 0 && (0, tR.jsx)("li", {
          children: ZR("shaderPack:moreErrors", {
            count: String(GR)
          })
        })]
      })
    }
  },
  7750: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => XR,
      i: () => MR
    });
    var yR = GR(66),
      tR = GR(1163),
      uR = GR.n(tR),
      ZR = GR(6003),
      qR = GR(1465),
      iR = GR(1468),
      fR = GR(1270),
      VR = GR(6084),
      KR = GR(6080),
      wR = GR(4436);
    const rR = 33554432,
      eR = 1024,
      aR = 65536;
    async function LR(RR) {
      const JR = (0, wR.o)(RR);
      if (JR) {
        if (JR.size > rR) throw new wR.c("shaderPack:loadZipTooBig", {
          megabytes: String(rR / 1048576)
        });
        return async function(RR) {
          return nR((0, wR.g)(RR, eR).map((JR => ({
            path: JR.path,
            read: GR => (0, wR.m)(RR, JR, GR)
          }))))
        }(new Uint8Array(await JR.arrayBuffer()))
      }
      return nR(RR.map((RR => ({
        path: (0, wR.j)(RR),
        read: JR => async function(RR, JR) {
          return RR.size > JR ? null : new Uint8Array(await RR.arrayBuffer())
        }(RR, JR)
      }))))
    }
    async function nR(RR) {
      const JR = function(RR) {
          const JR = RR.length > 0 ? RR[0].path.indexOf("/") : -1;
          if (-1 === JR) return RR;
          const GR = RR[0].path.slice(0, JR + 1);
          if (!RR.every((RR => RR.path.startsWith(GR)))) return RR;
          return RR.map((RR => ({
            ...RR,
            path: RR.path.slice(GR.length)
          })))
        }(RR.filter((RR => !(0, wR.d)(RR.path)))),
        GR = JR.filter((RR => "pack.json" === RR.path.toLowerCase()));
      if (0 === GR.length) throw new wR.c("shaderPack:loadNoManifest");
      if (GR.length > 1) throw new wR.c("shaderPack:loadDuplicateManifest");
      const yR = GR[0],
        tR = await yR.read(aR);
      if (null === tR) throw new wR.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(aR / 1024)
      });
      const uR = function(RR) {
          let JR;
          try {
            JR = JSON.parse(RR)
          } catch (qR) {
            throw new wR.c("shaderPack:loadManifestNotJson", {
              error: qR.message
            }, {
              cause: qR
            })
          }
          if ("object" !== typeof JR || null === JR || Array.isArray(JR)) throw new wR.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: GR,
            name: yR,
            author: tR,
            description: uR,
            keepCircleShadows: ZR
          } = JR;
          if (void 0 === GR) throw new wR.c("shaderPack:loadNoApiVersion", {
            version: String(KR.c)
          });
          if (!(0, KR.i)(GR)) throw new wR.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(GR),
            version: String(KR.c)
          });
          if ("string" !== typeof yR || "" === yR.trim()) throw new wR.c("shaderPack:loadNoName");
          if (void 0 !== tR && null !== tR && "string" !== typeof tR) throw new wR.c("shaderPack:loadAuthorNotString");
          if (void 0 !== uR && null !== uR && "string" !== typeof uR) throw new wR.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== ZR && "boolean" !== typeof ZR) throw new wR.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: GR,
            name: yR,
            author: "string" === typeof tR ? tR : null,
            description: "string" === typeof uR && "" !== uR.trim() ? uR : null,
            keepCircleShadows: !0 === ZR
          }
        }(UR(tR, yR.path)),
        ZR = JR.filter((RR => RR.path.toLowerCase().endsWith(".wgsl"))).sort(((RR, JR) => (0, VR.l)(RR.path, JR.path)));
      if (0 === ZR.length) throw new wR.c("shaderPack:loadNoWgsl");
      if (ZR.length > VR.c) throw new wR.c("shaderPack:loadTooManyWgsl", {
        count: String(VR.c)
      });
      const qR = ZR.find(((RR, JR) => JR > 0 && RR.path === ZR[JR - 1].path));
      if (qR) throw new wR.c("shaderPack:loadDuplicatePath", {
        path: qR.path
      });
      const iR = [];
      let fR = VR.e;
      for (const KR of ZR) {
        const RR = await KR.read(fR);
        if (null === RR) throw new wR.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(VR.e / 1024)
        });
        fR -= RR.byteLength, iR.push({
          path: KR.path,
          source: UR(RR, KR.path)
        })
      }
      return {
        manifest: uR,
        files: iR
      }
    }

    function UR(RR, JR) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(RR)
      } catch (GR) {
        throw new wR.c("shaderPack:loadNotUtf8", {
          path: JR
        }, {
          cause: GR
        })
      }
    }
    var WR = GR(6076),
      AR = GR(6092),
      CR = GR(1378);

    function XR(RR) {
      let {
        busy: JR,
        disabled: GR,
        onFiles: yR
      } = RR;
      const {
        t: tR
      } = (0, fR.A)(), {
        getRootProps: VR,
        getInputProps: KR,
        isDragActive: wR,
        open: rR
      } = (0, ZR.e)({
        onDrop: yR,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: GR
      });
      return (0, CR.jsxs)("div", {
        ...VR({
          className: uR()("ShaderPackDropZone", {
            ActiveDrag: wR,
            Disabled: GR
          })
        }),
        children: [(0, CR.jsx)("input", {
          ...KR({
            webkitdirectory: "true"
          })
        }), JR && (0, CR.jsx)(qR.d, {}), !JR && (0, CR.jsxs)(CR.Fragment, {
          children: [(0, CR.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, CR.jsx)(iR.d, {
              name: "up-from-bracket"
            })
          }), (0, CR.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: tR((0, AR.g)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, CR.jsx)(AR.c, {
            disabled: GR,
            openFolderPicker: rR,
            onFiles: yR
          })]
        })]
      })
    }

    function MR(RR) {
      const {
        t: JR
      } = (0, fR.A)(), [GR, tR] = (0, yR.useState)(!1), [uR, ZR] = (0, yR.useState)(null), qR = (0, yR.useRef)(!1);
      return {
        loading: GR,
        error: uR,
        setError: ZR,
        onFiles: async function(GR) {
          if (!qR.current) {
            qR.current = !0, tR(!0), ZR(null);
            try {
              await RR(await LR(GR))
            } catch (yR) {
              yR instanceof wR.c ? ZR((0, WR.d)(JR, yR.translationKey, yR.params)) : (console.error("Failed to load the shader pack", yR), ZR(JR("shaderPack:unexpectedError")))
            } finally {
              qR.current = !1, tR(!1)
            }
          }
        }
      }
    }
  },
  7800: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      forgetShaderPackActiveHint: () => bR,
      isOtherApiVersion: () => BR,
      isShaderPackActive: () => AR,
      isShaderPackChangePending: () => MR,
      markShaderPackChangePending: () => XR,
      pageShaderPackValidationVersion: () => lR,
      reconcileStoredShaderPackHint: () => gR,
      removeShaderPack: () => WR,
      replaceShaderPack: () => LR,
      saveShaderPack: () => aR,
      shaderPackNeedsCheck: () => pR,
      storedPackOutcome: () => CR,
      storedShaderPackFiles: () => wR,
      toStoredShaderPack: () => KR
    });
    var yR = GR(6084),
      tR = GR(6080),
      uR = GR(46),
      ZR = GR(4776),
      qR = GR(7802),
      iR = GR(7773);
    const fR = "shaderPackChangePending";
    let VR = null;

    function KR(RR, JR, GR) {
      return {
        manifest: RR.manifest,
        files: (0, yR.x)(RR.files),
        validation: JR,
        ...GR && {
          listing: GR
        }
      }
    }

    function wR(RR) {
      return Object.keys(RR.files).map((JR => ({
        path: JR,
        source: RR.files[JR]
      })))
    }
    let rR = Promise.resolve();

    function eR(RR) {
      const JR = rR.then(RR);
      return rR = JR.catch((() => {})), JR
    }

    function aR(RR, JR) {
      return eR((() => nR(RR, JR)))
    }

    function LR(RR, JR, GR) {
      return eR((async () => JSON.stringify(await (0, qR.d)()) === JSON.stringify(RR) && (null === JR ? (await UR(), !0) : nR(JR, GR))))
    }
    async function nR(RR, JR) {
      const GR = await uR.g.setItem(qR.c, RR);
      return GR && vR(RR, JR), GR
    }
    async function UR() {
      await uR.g.removeItem(qR.c), uR.i.removeItem(ZR.e)
    }

    function WR() {
      return eR(UR)
    }

    function AR(RR, JR) {
      return "active" === CR(RR, JR).kind
    }

    function CR(RR, JR) {
      var GR;
      return null === RR ? {
        kind: "none",
        reason: "nothingStored"
      } : BR(RR) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) || RR.validation.fromRecheck ? null === JR ? {
        kind: "none",
        reason: "noCompiler"
      } : pR(RR, JR) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : RR.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function XR() {
      uR.k.setItem(fR, performance.timeOrigin)
    }

    function MR() {
      return uR.k.getItem(fR) === performance.timeOrigin
    }

    function BR(RR) {
      return !(0, tR.i)(RR.manifest.apiVersion)
    }

    function lR(RR) {
      return VR ??= RR.iH((0, iR.shaderPackTextures)()), VR
    }

    function pR(RR, JR) {
      var GR;
      return (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.headerVersion) !== lR(JR)
    }

    function gR(RR) {
      return eR((async () => {
        vR(await (0, qR.d)(!0), RR)
      }))
    }

    function bR() {
      return eR((async () => {
        uR.i.removeItem(ZR.e)
      }))
    }

    function vR(RR, JR) {
      AR(RR, JR) ? uR.i.setItem(ZR.e, !0) : uR.i.removeItem(ZR.e)
    }
  },
  7773: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      loadShaderPackTextures: () => ZR,
      shaderPackTextures: () => qR
    });
    var yR = GR(6084);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= Promise.all([GR.e(85), GR.e(126)]).then((() => GR(42031))).then((RR => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: JR,
          textureNameToIndex: GR,
          textureAnimationData: uR
        } = RR;
        return tR ??= (0, yR.j)(GR, uR, JR), tR
      })), uR
    }

    function qR() {
      if (null === tR) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tR
    }
  },
  7792: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      h: () => qR
    });
    var yR = GR(7800),
      tR = GR(7773),
      uR = GR(123);
    const ZR = 100;
    async function qR(RR, JR) {
      var GR;
      let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GR = navigator.gpu) && void 0 !== GR ? GR : null;
      const ZR = RR.UJR(JR, (0, tR.shaderPackTextures)());
      if (ZR.errors.length > 0) return fR(RR, ZR.errors, ZR.offInStrict);
      const qR = await async function(RR) {
        if (!RR) return null;
        try {
          const JR = await (0, uR.y)(RR);
          return JR ? await JR.requestDevice() : null
        } catch (JR) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", JR), null
        }
      }(yR);
      if (!qR) return null;
      let iR = !1;
      qR.lost.then((() => {
        iR = !0
      }));
      try {
        const JR = await Promise.all(ZR.validationModules.map((JR => async function(RR, JR, GR) {
          JR.pushErrorScope("validation");
          const yR = JR.createShaderModule({
              code: GR.code
            }),
            tR = JR.popErrorScope(),
            {
              messages: uR
            } = await yR.getCompilationInfo(),
            ZR = uR.filter((RR => "error" === RR.type)).map((JR => RR.mapValidationMessage(GR, JR))),
            qR = await tR;
          qR && 0 === ZR.length && ZR.push({
            file: null,
            line: 0,
            message: qR.message,
            variants: [GR.key]
          });
          return ZR
        }(RR, qR, JR))));
        return iR ? null : fR(RR, RR.ZtR(JR.flat()), ZR.offInStrict)
      } catch (VR) {
        return console.error("Couldn't validate the shader pack on WebGPU.", VR), null
      } finally {
        qR.destroy()
      }
    }
    async function iR(RR, JR) {
      var GR;
      if (!(0, yR.shaderPackNeedsCheck)(RR, JR) || (0, yR.isOtherApiVersion)(RR)) return RR;
      const tR = await qR(JR, (0, yR.storedShaderPackFiles)(RR));
      if (!tR) return RR;
      const uR = !1 === (null === (GR = RR.validation) || void 0 === GR ? void 0 : GR.ok) && !RR.validation.fromRecheck,
        ZR = {
          ...RR,
          validation: uR ? tR : {
            ...tR,
            fromRecheck: !0
          }
        };
      return await (0, yR.replaceShaderPack)(RR, ZR, JR) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), ZR
    }

    function fR(RR, JR, GR) {
      return {
        headerVersion: (0, yR.pageShaderPackValidationVersion)(RR),
        ok: 0 === JR.length,
        errors: JR.slice(0, ZR),
        moreErrors: Math.max(0, JR.length - ZR),
        offInStrict: GR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);