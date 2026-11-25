export const id = 137;
export const ids = [137, 140, 141];
export const modules = {
  6972: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(5386),
      qQ = XQ(1145);
    const TQ = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function zQ(QQ) {
      let {
        diagnostics: WQ,
        more: XQ = 0,
        t: zQ
      } = QQ;
      return (0, qQ.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [WQ.map(((QQ, WQ) => {
          const XQ = (0, wQ.i)(QQ),
            sQ = function(QQ, WQ) {
              const XQ = (0, wQ.e)(null !== QQ && void 0 !== QQ ? QQ : []);
              if (0 === XQ.length) return null;
              return XQ.map((QQ => QQ.map((QQ => WQ(TQ[QQ]))).join(", "))).join("; ")
            }(QQ.variants, zQ);
          return (0, qQ.jsxs)("li", {
            children: [XQ && (0, qQ.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: XQ
            }), QQ.message, sQ && (0, qQ.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: zQ("shaderPack:onlyIn", {
                variants: sQ
              })
            })]
          }, WQ)
        })), XQ > 0 && (0, qQ.jsx)("li", {
          children: zQ("shaderPack:moreErrors", {
            count: String(XQ)
          })
        })]
      })
    }
  },
  6979: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => bQ,
      d: () => vQ
    });
    var wQ = XQ(61),
      qQ = XQ(1081),
      TQ = XQ.n(qQ),
      zQ = XQ(5310),
      sQ = XQ(1391),
      FQ = XQ(1094),
      PQ = XQ(1226),
      gQ = XQ(5396),
      JQ = XQ(5394),
      rQ = XQ(3435);
    const IQ = 33554432,
      jQ = 1024,
      BQ = 65536;
    async function yQ(QQ) {
      const WQ = (0, rQ.m)(QQ);
      if (WQ) {
        if (WQ.size > IQ) throw new rQ.c("shaderPack:loadZipTooBig", {
          megabytes: String(IQ / 1048576)
        });
        return async function(QQ) {
          return VQ((0, rQ.j)(QQ, jQ).map((WQ => ({
            path: WQ.path,
            read: XQ => (0, rQ.l)(QQ, WQ, XQ)
          }))))
        }(new Uint8Array(await WQ.arrayBuffer()))
      }
      return VQ(QQ.map((QQ => ({
        path: (0, rQ.k)(QQ),
        read: WQ => async function(QQ, WQ) {
          return QQ.size > WQ ? null : new Uint8Array(await QQ.arrayBuffer())
        }(QQ, WQ)
      }))))
    }
    async function VQ(QQ) {
      const WQ = function(QQ) {
          const WQ = QQ.length > 0 ? QQ[0].path.indexOf("/") : -1;
          if (-1 === WQ) return QQ;
          const XQ = QQ[0].path.slice(0, WQ + 1);
          if (!QQ.every((QQ => QQ.path.startsWith(XQ)))) return QQ;
          return QQ.map((QQ => ({
            ...QQ,
            path: QQ.path.slice(XQ.length)
          })))
        }(QQ.filter((QQ => !(0, rQ.f)(QQ.path)))),
        XQ = WQ.filter((QQ => "pack.json" === QQ.path.toLowerCase()));
      if (0 === XQ.length) throw new rQ.c("shaderPack:loadNoManifest");
      if (XQ.length > 1) throw new rQ.c("shaderPack:loadDuplicateManifest");
      const wQ = XQ[0],
        qQ = await wQ.read(BQ);
      if (null === qQ) throw new rQ.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(BQ / 1024)
      });
      const TQ = function(QQ) {
          let WQ;
          try {
            WQ = JSON.parse(QQ)
          } catch (sQ) {
            throw new rQ.c("shaderPack:loadManifestNotJson", {
              error: sQ.message
            }, {
              cause: sQ
            })
          }
          if ("object" !== typeof WQ || null === WQ || Array.isArray(WQ)) throw new rQ.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: XQ,
            name: wQ,
            author: qQ,
            description: TQ,
            keepCircleShadows: zQ
          } = WQ;
          if (void 0 === XQ) throw new rQ.c("shaderPack:loadNoApiVersion", {
            version: String(JQ.b)
          });
          if (!(0, JQ.g)(XQ)) throw new rQ.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(XQ),
            version: String(JQ.b)
          });
          if ("string" !== typeof wQ || "" === wQ.trim()) throw new rQ.c("shaderPack:loadNoName");
          if (void 0 !== qQ && null !== qQ && "string" !== typeof qQ) throw new rQ.c("shaderPack:loadAuthorNotString");
          if (void 0 !== TQ && null !== TQ && "string" !== typeof TQ) throw new rQ.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== zQ && "boolean" !== typeof zQ) throw new rQ.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: XQ,
            name: wQ,
            author: "string" === typeof qQ ? qQ : null,
            description: "string" === typeof TQ && "" !== TQ.trim() ? TQ : null,
            keepCircleShadows: !0 === zQ
          }
        }(DQ(qQ, wQ.path)),
        zQ = WQ.filter((QQ => QQ.path.toLowerCase().endsWith(".wgsl"))).sort(((QQ, WQ) => (0, gQ.m)(QQ.path, WQ.path)));
      if (0 === zQ.length) throw new rQ.c("shaderPack:loadNoWgsl");
      if (zQ.length > gQ.d) throw new rQ.c("shaderPack:loadTooManyWgsl", {
        count: String(gQ.d)
      });
      const sQ = zQ.find(((QQ, WQ) => WQ > 0 && QQ.path === zQ[WQ - 1].path));
      if (sQ) throw new rQ.c("shaderPack:loadDuplicatePath", {
        path: sQ.path
      });
      const FQ = [];
      let PQ = gQ.f;
      for (const JQ of zQ) {
        const QQ = await JQ.read(PQ);
        if (null === QQ) throw new rQ.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(gQ.f / 1024)
        });
        PQ -= QQ.byteLength, FQ.push({
          path: JQ.path,
          source: DQ(QQ, JQ.path)
        })
      }
      return {
        manifest: TQ,
        files: FQ
      }
    }

    function DQ(QQ, WQ) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(QQ)
      } catch (XQ) {
        throw new rQ.c("shaderPack:loadNotUtf8", {
          path: WQ
        }, {
          cause: XQ
        })
      }
    }
    var pQ = XQ(5386),
      GQ = XQ(5398),
      UQ = XQ(1145);

    function bQ(QQ) {
      let {
        busy: WQ,
        disabled: XQ,
        onFiles: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, PQ.C)(), {
        getRootProps: gQ,
        getInputProps: JQ,
        isDragActive: rQ,
        open: IQ
      } = (0, zQ.c)({
        onDrop: wQ,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: XQ
      });
      return (0, UQ.jsxs)("div", {
        ...gQ({
          className: TQ()("ShaderPackDropZone", {
            ActiveDrag: rQ,
            Disabled: XQ
          })
        }),
        children: [(0, UQ.jsx)("input", {
          ...JQ({
            webkitdirectory: "true"
          })
        }), WQ && (0, UQ.jsx)(sQ.e, {}), !WQ && (0, UQ.jsxs)(UQ.Fragment, {
          children: [(0, UQ.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, UQ.jsx)(FQ.d, {
              name: "up-from-bracket"
            })
          }), (0, UQ.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: qQ((0, GQ.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, UQ.jsx)(GQ.d, {
            disabled: XQ,
            openFolderPicker: IQ,
            onFiles: wQ
          })]
        })]
      })
    }

    function vQ(QQ) {
      const {
        t: WQ
      } = (0, PQ.C)(), [XQ, qQ] = (0, wQ.useState)(!1), [TQ, zQ] = (0, wQ.useState)(null), sQ = (0, wQ.useRef)(!1);
      return {
        loading: XQ,
        error: TQ,
        setError: zQ,
        onFiles: async function(XQ) {
          if (!sQ.current) {
            sQ.current = !0, qQ(!0), zQ(null);
            try {
              await QQ(await yQ(XQ))
            } catch (wQ) {
              wQ instanceof rQ.c ? zQ((0, pQ.l)(WQ, wQ.translationKey, wQ.params)) : (console.error("Failed to load the shader pack", wQ), zQ(WQ("shaderPack:unexpectedError")))
            } finally {
              sQ.current = !1, qQ(!1)
            }
          }
        }
      }
    }
  },
  7024: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      forgetShaderPackActiveHint: () => hQ,
      isOtherApiVersion: () => dQ,
      isShaderPackActive: () => GQ,
      isShaderPackChangePending: () => vQ,
      markShaderPackChangePending: () => bQ,
      pageShaderPackValidationVersion: () => HQ,
      reconcileStoredShaderPackHint: () => lQ,
      removeShaderPack: () => pQ,
      replaceShaderPack: () => yQ,
      saveShaderPack: () => BQ,
      shaderPackNeedsCheck: () => aQ,
      storedPackOutcome: () => UQ,
      storedShaderPackFiles: () => rQ,
      toStoredShaderPack: () => JQ
    });
    var wQ = XQ(5396),
      qQ = XQ(5394),
      TQ = XQ(43),
      zQ = XQ(3716),
      sQ = XQ(7026),
      FQ = XQ(7002);
    const PQ = "shaderPackChangePending";
    let gQ = null;

    function JQ(QQ, WQ, XQ) {
      return {
        manifest: QQ.manifest,
        files: (0, wQ.w)(QQ.files),
        validation: WQ,
        ...XQ && {
          listing: XQ
        }
      }
    }

    function rQ(QQ) {
      return Object.keys(QQ.files).map((WQ => ({
        path: WQ,
        source: QQ.files[WQ]
      })))
    }
    let IQ = Promise.resolve();

    function jQ(QQ) {
      const WQ = IQ.then(QQ);
      return IQ = WQ.catch((() => {})), WQ
    }

    function BQ(QQ, WQ) {
      return jQ((() => VQ(QQ, WQ)))
    }

    function yQ(QQ, WQ, XQ) {
      return jQ((async () => JSON.stringify(await (0, sQ.f)()) === JSON.stringify(QQ) && (null === WQ ? (await DQ(), !0) : VQ(WQ, XQ))))
    }
    async function VQ(QQ, WQ) {
      const XQ = await TQ.f.setItem(sQ.b, QQ);
      return XQ && iQ(QQ, WQ), XQ
    }
    async function DQ() {
      await TQ.f.removeItem(sQ.b), TQ.i.removeItem(zQ.c)
    }

    function pQ() {
      return jQ(DQ)
    }

    function GQ(QQ, WQ) {
      return "active" === UQ(QQ, WQ).kind
    }

    function UQ(QQ, WQ) {
      var XQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : dQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) || QQ.validation.fromRecheck ? null === WQ ? {
        kind: "none",
        reason: "noCompiler"
      } : aQ(QQ, WQ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : QQ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function bQ() {
      TQ.m.setItem(PQ, performance.timeOrigin)
    }

    function vQ() {
      return TQ.m.getItem(PQ) === performance.timeOrigin
    }

    function dQ(QQ) {
      return !(0, qQ.g)(QQ.manifest.apiVersion)
    }

    function HQ(QQ) {
      return gQ ??= QQ.WE((0, FQ.shaderPackTextures)()), gQ
    }

    function aQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.headerVersion) !== HQ(WQ)
    }

    function lQ(QQ) {
      return jQ((async () => {
        iQ(await (0, sQ.f)(!0), QQ)
      }))
    }

    function hQ() {
      return jQ((async () => {
        TQ.i.removeItem(zQ.c)
      }))
    }

    function iQ(QQ, WQ) {
      GQ(QQ, WQ) ? TQ.i.setItem(zQ.c, !0) : TQ.i.removeItem(zQ.c)
    }
  },
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  7018: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      g: () => sQ
    });
    var wQ = XQ(7024),
      qQ = XQ(7002),
      TQ = XQ(134);
    const zQ = 100;
    async function sQ(QQ, WQ) {
      var XQ;
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (XQ = navigator.gpu) && void 0 !== XQ ? XQ : null;
      const zQ = QQ.JQQ(WQ, (0, qQ.shaderPackTextures)());
      if (zQ.errors.length > 0) return PQ(QQ, zQ.errors, zQ.offInStrict);
      const sQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const WQ = await (0, TQ.q)(QQ);
          return WQ ? await WQ.requestDevice() : null
        } catch (WQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WQ), null
        }
      }(wQ);
      if (!sQ) return null;
      let FQ = !1;
      sQ.lost.then((() => {
        FQ = !0
      }));
      try {
        const WQ = await Promise.all(zQ.validationModules.map((WQ => async function(QQ, WQ, XQ) {
          WQ.pushErrorScope("validation");
          const wQ = WQ.createShaderModule({
              code: XQ.code
            }),
            qQ = WQ.popErrorScope(),
            {
              messages: TQ
            } = await wQ.getCompilationInfo(),
            zQ = TQ.filter((QQ => "error" === QQ.type)).map((WQ => QQ.mapValidationMessage(XQ, WQ))),
            sQ = await qQ;
          sQ && 0 === zQ.length && zQ.push({
            file: null,
            line: 0,
            message: sQ.message,
            variants: [XQ.key]
          });
          return zQ
        }(QQ, sQ, WQ))));
        return FQ ? null : PQ(QQ, QQ.gwQ(WQ.flat()), zQ.offInStrict)
      } catch (gQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", gQ), null
      } finally {
        sQ.destroy()
      }
    }
    async function FQ(QQ, WQ) {
      var XQ;
      if (!(0, wQ.shaderPackNeedsCheck)(QQ, WQ) || (0, wQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await sQ(WQ, (0, wQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const TQ = !1 === (null === (XQ = QQ.validation) || void 0 === XQ ? void 0 : XQ.ok) && !QQ.validation.fromRecheck,
        zQ = {
          ...QQ,
          validation: TQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, wQ.replaceShaderPack)(QQ, zQ, WQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), zQ
    }

    function PQ(QQ, WQ, XQ) {
      return {
        headerVersion: (0, wQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === WQ.length,
        errors: WQ.slice(0, zQ),
        moreErrors: Math.max(0, WQ.length - zQ),
        offInStrict: XQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);