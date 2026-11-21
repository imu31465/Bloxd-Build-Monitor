export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6422: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(6427),
      qQ = wQ(1107);
    const oQ = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function DQ(QQ) {
      let {
        diagnostics: FQ,
        more: wQ = 0,
        t: DQ
      } = QQ;
      return (0, qQ.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [FQ.map(((QQ, FQ) => {
          const wQ = (0, LQ.h)(QQ),
            kQ = function(QQ, FQ) {
              const wQ = (0, LQ.e)(null !== QQ && void 0 !== QQ ? QQ : []);
              if (0 === wQ.length) return null;
              return wQ.map((QQ => QQ.map((QQ => FQ(oQ[QQ]))).join(", "))).join("; ")
            }(QQ.variants, DQ);
          return (0, qQ.jsxs)("li", {
            children: [wQ && (0, qQ.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: wQ
            }), QQ.message, kQ && (0, qQ.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: DQ("shaderPack:onlyIn", {
                variants: kQ
              })
            })]
          }, FQ)
        })), wQ > 0 && (0, qQ.jsx)("li", {
          children: DQ("shaderPack:moreErrors", {
            count: String(wQ)
          })
        })]
      })
    }
  },
  6435: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => VQ,
      g: () => hQ
    });
    var LQ = wQ(53),
      qQ = wQ(1070),
      oQ = wQ.n(qQ),
      DQ = wQ(4794),
      kQ = wQ(1348),
      vQ = wQ(1079),
      mQ = wQ(1451),
      uQ = wQ(1207),
      HQ = wQ(96),
      bQ = wQ(6414),
      YQ = wQ(6429);
    class xQ extends Error {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(QQ, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = QQ, this.params = FQ
      }
    }
    const AQ = 1024,
      tQ = 101010256,
      eQ = 33639248,
      MQ = 67324752,
      GQ = 22,
      pQ = 46,
      cQ = 30,
      CQ = 65535,
      SQ = 65535,
      iQ = 4294967295,
      WQ = 0,
      RQ = 8,
      OQ = new TextDecoder;

    function sQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength),
        wQ = function(QQ) {
          const FQ = QQ.byteLength - GQ;
          for (let wQ = FQ; wQ >= Math.max(0, FQ - CQ); wQ--)
            if (QQ.getUint32(wQ, !0) === tQ && wQ + GQ + QQ.getUint16(wQ + 20, !0) <= QQ.byteLength) return wQ;
          throw new xQ("shaderPack:loadNotZip")
        }(FQ),
        LQ = FQ.getUint16(wQ + 8, !0),
        qQ = FQ.getUint16(wQ + 10, !0),
        oQ = FQ.getUint32(wQ + 12, !0),
        DQ = FQ.getUint32(wQ + 16, !0);
      if (qQ === SQ || oQ === iQ || DQ === iQ) throw NQ();
      if (0 !== FQ.getUint16(wQ + 4, !0) || 0 !== FQ.getUint16(wQ + 6, !0) || LQ !== qQ) throw new xQ("shaderPack:loadSplitZip");
      if (qQ > AQ) throw new xQ("shaderPack:loadTooManyZipEntries", {
        count: String(AQ)
      });
      const kQ = DQ + oQ;
      if (kQ > wQ) throw UQ();
      const vQ = [];
      let mQ = DQ;
      for (let uQ = 0; uQ < qQ; uQ++) {
        if (mQ + pQ > kQ || FQ.getUint32(mQ, !0) !== eQ) throw UQ();
        const wQ = FQ.getUint16(mQ + 8, !0),
          LQ = FQ.getUint16(mQ + 10, !0),
          qQ = FQ.getUint32(mQ + 20, !0),
          oQ = FQ.getUint32(mQ + 24, !0),
          uQ = FQ.getUint16(mQ + 28, !0),
          HQ = FQ.getUint16(mQ + 30, !0),
          bQ = FQ.getUint16(mQ + 32, !0),
          YQ = FQ.getUint32(mQ + 42, !0),
          xQ = mQ + pQ;
        if (mQ = xQ + uQ + HQ + bQ, mQ > kQ) throw UQ();
        if (qQ === iQ || oQ === iQ || YQ === iQ) throw NQ();
        const AQ = OQ.decode(QQ.subarray(xQ, xQ + uQ)).replace(/\\/g, "/");
        AQ.endsWith("/") || vQ.push({
          path: AQ,
          method: LQ,
          encrypted: 0 !== (1 & wQ),
          compressedSize: qQ,
          dataOffset: IQ(FQ, YQ, qQ, DQ)
        })
      }
      return vQ
    }
    async function rQ(QQ, FQ, wQ) {
      if (FQ.encrypted) throw new xQ("shaderPack:loadEncrypted", {
        path: FQ.path
      });
      if (FQ.method === WQ) return FQ.compressedSize > wQ ? null : QQ.subarray(FQ.dataOffset, FQ.dataOffset + FQ.compressedSize);
      if (FQ.method === RQ) return async function(QQ, FQ, wQ) {
        const LQ = new Blob([QQ]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          qQ = [];
        let oQ = 0;
        try {
          for (;;) {
            const {
              done: QQ,
              value: wQ
            } = await LQ.read();
            if (QQ) break;
            if (oQ += wQ.byteLength, oQ > FQ) return await LQ.cancel(), null;
            qQ.push(wQ)
          }
        } catch (vQ) {
          throw new xQ("shaderPack:loadDecompressFailed", {
            path: wQ
          }, {
            cause: vQ
          })
        }
        const DQ = new Uint8Array(oQ);
        let kQ = 0;
        for (const mQ of qQ) DQ.set(mQ, kQ), kQ += mQ.byteLength;
        return DQ
      }(QQ.slice(FQ.dataOffset, FQ.dataOffset + FQ.compressedSize), wQ, FQ.path);
      throw new xQ("shaderPack:loadUnsupportedCompression", {
        path: FQ.path,
        method: String(FQ.method)
      })
    }

    function IQ(QQ, FQ, wQ, LQ) {
      if (FQ + cQ > LQ || QQ.getUint32(FQ, !0) !== MQ) throw UQ();
      const qQ = FQ + cQ + QQ.getUint16(FQ + 26, !0) + QQ.getUint16(FQ + 28, !0);
      if (qQ + wQ > LQ) throw UQ();
      return qQ
    }

    function UQ() {
      return new xQ("shaderPack:loadZipDamaged")
    }

    function NQ() {
      return new xQ("shaderPack:loadZip64")
    }
    const TQ = 33554432,
      KQ = 65536;
    async function zQ(QQ) {
      if (1 === QQ.length && QQ[0].name.toLowerCase().endsWith(".zip")) {
        const FQ = QQ[0];
        if (FQ.size > TQ) throw new xQ("shaderPack:loadZipTooBig", {
          megabytes: String(TQ / 1048576)
        });
        return async function(QQ) {
          return lQ(sQ(QQ).map((FQ => ({
            path: FQ.path,
            read: wQ => rQ(QQ, FQ, wQ)
          }))))
        }(new Uint8Array(await FQ.arrayBuffer()))
      }
      return lQ(QQ.map((QQ => ({
        path: jQ(QQ),
        read: FQ => async function(QQ, FQ) {
          return QQ.size > FQ ? null : new Uint8Array(await QQ.arrayBuffer())
        }(QQ, FQ)
      }))))
    }
    async function lQ(QQ) {
      const FQ = function(QQ) {
          const FQ = QQ.length > 0 ? QQ[0].path.indexOf("/") : -1;
          if (-1 === FQ) return QQ;
          const wQ = QQ[0].path.slice(0, FQ + 1);
          if (!QQ.every((QQ => QQ.path.startsWith(wQ)))) return QQ;
          return QQ.map((QQ => ({
            ...QQ,
            path: QQ.path.slice(wQ.length)
          })))
        }(QQ.filter((QQ => ! function(QQ) {
          const FQ = QQ.split("/"),
            wQ = FQ[FQ.length - 1];
          return FQ.includes("__MACOSX") || wQ.startsWith("._") || ".DS_Store" === wQ
        }(QQ.path)))),
        wQ = FQ.filter((QQ => "pack.json" === QQ.path.toLowerCase()));
      if (0 === wQ.length) throw new xQ("shaderPack:loadNoManifest");
      if (wQ.length > 1) throw new xQ("shaderPack:loadDuplicateManifest");
      const LQ = wQ[0],
        qQ = await LQ.read(KQ);
      if (null === qQ) throw new xQ("shaderPack:loadManifestTooBig", {
        kilobytes: String(KQ / 1024)
      });
      const oQ = function(QQ) {
          let FQ;
          try {
            FQ = JSON.parse(QQ)
          } catch (kQ) {
            throw new xQ("shaderPack:loadManifestNotJson", {
              error: kQ.message
            }, {
              cause: kQ
            })
          }
          if ("object" !== typeof FQ || null === FQ || Array.isArray(FQ)) throw new xQ("shaderPack:loadManifestNotObject");
          const {
            apiVersion: wQ,
            name: LQ,
            author: qQ,
            description: oQ,
            keepCircleShadows: DQ
          } = FQ;
          if (void 0 === wQ) throw new xQ("shaderPack:loadNoApiVersion", {
            version: String(YQ.e)
          });
          if (!(0, YQ.m)(wQ)) throw new xQ("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(wQ),
            version: String(YQ.e)
          });
          if ("string" !== typeof LQ || "" === LQ.trim()) throw new xQ("shaderPack:loadNoName");
          if (void 0 !== qQ && null !== qQ && "string" !== typeof qQ) throw new xQ("shaderPack:loadAuthorNotString");
          if (void 0 !== oQ && null !== oQ && "string" !== typeof oQ) throw new xQ("shaderPack:loadDescriptionNotString");
          if (void 0 !== DQ && "boolean" !== typeof DQ) throw new xQ("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: wQ,
            name: LQ,
            author: "string" === typeof qQ ? qQ : null,
            description: "string" === typeof oQ && "" !== oQ.trim() ? oQ : null,
            keepCircleShadows: !0 === DQ
          }
        }(aQ(qQ, LQ.path)),
        DQ = FQ.filter((QQ => QQ.path.toLowerCase().endsWith(".wgsl"))).sort(((QQ, FQ) => (0, bQ.k)(QQ.path, FQ.path)));
      if (0 === DQ.length) throw new xQ("shaderPack:loadNoWgsl");
      if (DQ.length > bQ.b) throw new xQ("shaderPack:loadTooManyWgsl", {
        count: String(bQ.b)
      });
      const kQ = DQ.find(((QQ, FQ) => FQ > 0 && QQ.path === DQ[FQ - 1].path));
      if (kQ) throw new xQ("shaderPack:loadDuplicatePath", {
        path: kQ.path
      });
      const vQ = [];
      let mQ = bQ.f;
      for (const uQ of DQ) {
        const QQ = await uQ.read(mQ);
        if (null === QQ) throw new xQ("shaderPack:loadSourceTooBig", {
          kilobytes: String(bQ.f / 1024)
        });
        mQ -= QQ.byteLength, vQ.push({
          path: uQ.path,
          source: aQ(QQ, uQ.path)
        })
      }
      return {
        manifest: oQ,
        files: vQ
      }
    }

    function jQ(QQ) {
      return (QQ.webkitRelativePath || QQ.path || QQ.name).replace(/^\.?\//, "")
    }

    function aQ(QQ, FQ) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(QQ)
      } catch (wQ) {
        throw new xQ("shaderPack:loadNotUtf8", {
          path: FQ
        }, {
          cause: wQ
        })
      }
    }
    var XQ = wQ(6427),
      fQ = wQ(1107);

    function VQ(QQ) {
      let {
        busy: FQ,
        disabled: wQ,
        onFiles: qQ
      } = QQ;
      const {
        t: bQ
      } = (0, uQ.y)(), YQ = (0, LQ.useRef)(null), xQ = !(0, HQ.isMobile)(), {
        getRootProps: AQ,
        getInputProps: tQ,
        isDragActive: eQ,
        open: MQ
      } = (0, DQ.b)({
        onDrop: qQ,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: wQ
      });
      return (0, fQ.jsxs)("div", {
        ...AQ({
          className: oQ()("ShaderPackDropZone", {
            ActiveDrag: eQ,
            Disabled: wQ
          })
        }),
        children: [(0, fQ.jsx)("input", {
          ...tQ({
            webkitdirectory: "true"
          })
        }), (0, fQ.jsx)("input", {
          ref: YQ,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(QQ) {
            const FQ = Array.from(QQ.target.files);
            QQ.target.value = "", qQ(FQ)
          }
        }), FQ && (0, fQ.jsx)(kQ.c, {}), !FQ && (0, fQ.jsxs)(fQ.Fragment, {
          children: [(0, fQ.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, fQ.jsx)(vQ.c, {
              name: "up-from-bracket"
            })
          }), (0, fQ.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: bQ(xQ ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, fQ.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [xQ && (0, fQ.jsx)(mQ.f, {
              disabled: wQ,
              onClick: MQ,
              children: bQ("shaderPack:chooseFolder")
            }), (0, fQ.jsx)(mQ.f, {
              disabled: wQ,
              onClick: () => {
                YQ.current.click()
              },
              children: bQ("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function hQ(QQ) {
      const {
        t: FQ
      } = (0, uQ.y)(), [wQ, qQ] = (0, LQ.useState)(!1), [oQ, DQ] = (0, LQ.useState)(null), kQ = (0, LQ.useRef)(!1);
      return {
        loading: wQ,
        error: oQ,
        setError: DQ,
        onFiles: async function(wQ) {
          if (!kQ.current) {
            kQ.current = !0, qQ(!0), DQ(null);
            try {
              await QQ(await zQ(wQ))
            } catch (LQ) {
              LQ instanceof xQ ? DQ((0, XQ.k)(FQ, LQ.translationKey, LQ.params)) : (console.error("Failed to load the shader pack", LQ), DQ(FQ("shaderPack:unexpectedError")))
            } finally {
              kQ.current = !1, qQ(!1)
            }
          }
        }
      }
    }
  },
  6427: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      h: () => DQ,
      k: () => oQ
    });
    var LQ = wQ(6429);
    const qQ = [QQ => QQ.strict ? "strict" : "nonStrict", QQ => QQ.program];

    function oQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const LQ = {};
      for (const qQ in wQ) LQ[qQ] = `\0${qQ}\0`;
      return QQ(FQ, LQ).replace(/\0(\w+)\0/g, ((QQ, FQ) => wQ[FQ]))
    }

    function DQ(QQ) {
      return null === QQ.file ? null : QQ.line > 0 ? `${QQ.file}:${QQ.line}` : QQ.file
    }

    function kQ(QQ) {
      const FQ = new Map(QQ.map((QQ => [vQ(QQ).join("."), QQ])));
      if (0 === FQ.size) return [];
      const wQ = uQ([...FQ.values()]);
      return 0 === wQ[0].length ? [] : wQ
    }

    function vQ(QQ) {
      return qQ.map((FQ => FQ(QQ)))
    }
    const mQ = qQ.map((QQ => new Set(LQ.i.map(QQ)).size));

    function uQ(QQ) {
      const FQ = qQ.map((FQ => new Set(QQ.map(FQ)))),
        wQ = FQ.reduce(((QQ, FQ) => QQ * FQ.size), 1),
        LQ = FQ.every(((QQ, FQ) => 1 === QQ.size || QQ.size === mQ[FQ]));
      if (wQ === QQ.length && LQ) return [qQ.filter(((QQ, wQ) => 1 === FQ[wQ].size)).map((FQ => FQ(QQ[0])))];
      let oQ = null;
      for (let DQ = 0; DQ < qQ.length; DQ++) {
        if (1 === FQ[DQ].size) continue;
        const wQ = HQ(QQ, qQ[DQ]).flatMap(uQ);
        (null === oQ || wQ.length < oQ.length) && (oQ = wQ)
      }
      return oQ
    }

    function HQ(QQ, FQ) {
      const wQ = new Map;
      for (const qQ of QQ) {
        var LQ;
        const QQ = FQ(qQ);
        wQ.set(QQ, [...null !== (LQ = wQ.get(QQ)) && void 0 !== LQ ? LQ : [], qQ])
      }
      return [...wQ.values()]
    }
  },
  6429: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.h,
      i: () => qQ,
      m: () => LQ.m
    });
    var LQ = wQ(6414);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((FQ => ({
      strict: QQ,
      program: FQ
    })))))
  },
  6481: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      forgetShaderPackActiveHint: () => sQ,
      isOtherApiVersion: () => iQ,
      isShaderPackActive: () => pQ,
      isShaderPackChangePending: () => SQ,
      markShaderPackChangePending: () => CQ,
      pageShaderPackValidationVersion: () => WQ,
      reconcileStoredShaderPackHint: () => OQ,
      removeShaderPack: () => GQ,
      replaceShaderPack: () => tQ,
      saveShaderPack: () => AQ,
      shaderPackNeedsCheck: () => RQ,
      storedPackOutcome: () => cQ,
      storedShaderPackFiles: () => bQ,
      toStoredShaderPack: () => HQ
    });
    var LQ = wQ(6414),
      qQ = wQ(6429),
      oQ = wQ(27),
      DQ = wQ(3318),
      kQ = wQ(6485),
      vQ = wQ(6460);
    const mQ = "shaderPackChangePending";
    let uQ = null;

    function HQ(QQ, FQ, wQ) {
      return {
        manifest: QQ.manifest,
        files: (0, LQ.r)(QQ.files),
        validation: FQ,
        ...wQ && {
          listing: wQ
        }
      }
    }

    function bQ(QQ) {
      return Object.keys(QQ.files).map((FQ => ({
        path: FQ,
        source: QQ.files[FQ]
      })))
    }
    let YQ = Promise.resolve();

    function xQ(QQ) {
      const FQ = YQ.then(QQ);
      return YQ = FQ.catch((() => {})), FQ
    }

    function AQ(QQ, FQ) {
      return xQ((() => eQ(QQ, FQ)))
    }

    function tQ(QQ, FQ, wQ) {
      return xQ((async () => JSON.stringify(await (0, kQ.f)()) === JSON.stringify(QQ) && (null === FQ ? (await MQ(), !0) : eQ(FQ, wQ))))
    }
    async function eQ(QQ, FQ) {
      const wQ = await oQ.h.setItem(kQ.d, QQ);
      return wQ && rQ(QQ, FQ), wQ
    }
    async function MQ() {
      await oQ.h.removeItem(kQ.d), oQ.i.removeItem(DQ.d)
    }

    function GQ() {
      return xQ(MQ)
    }

    function pQ(QQ, FQ) {
      return "active" === cQ(QQ, FQ).kind
    }

    function cQ(QQ, FQ) {
      var wQ;
      return null === QQ ? {
        kind: "none",
        reason: "nothingStored"
      } : iQ(QQ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) || QQ.validation.fromRecheck ? null === FQ ? {
        kind: "none",
        reason: "noCompiler"
      } : RQ(QQ, FQ) ? {
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

    function CQ() {
      oQ.m.setItem(mQ, performance.timeOrigin)
    }

    function SQ() {
      return oQ.m.getItem(mQ) === performance.timeOrigin
    }

    function iQ(QQ) {
      return !(0, qQ.m)(QQ.manifest.apiVersion)
    }

    function WQ(QQ) {
      return uQ ??= QQ.kN((0, vQ.shaderPackTextures)()), uQ
    }

    function RQ(QQ, FQ) {
      var wQ;
      return (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.headerVersion) !== WQ(FQ)
    }

    function OQ(QQ) {
      return xQ((async () => {
        rQ(await (0, kQ.f)(!0), QQ)
      }))
    }

    function sQ() {
      return xQ((async () => {
        oQ.i.removeItem(DQ.d)
      }))
    }

    function rQ(QQ, FQ) {
      pQ(QQ, FQ) ? oQ.i.setItem(DQ.d, !0) : oQ.i.removeItem(DQ.d)
    }
  },
  6460: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      loadShaderPackTextures: () => DQ,
      shaderPackTextures: () => kQ
    });
    var LQ = wQ(6414);
    let qQ = null,
      oQ = null;

    function DQ() {
      return oQ ??= Promise.all([wQ.e(70), wQ.e(199)]).then((() => wQ(39913))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: FQ,
          textureNameToIndex: wQ,
          textureAnimationData: oQ
        } = QQ;
        return qQ ??= (0, LQ.i)(wQ, oQ, FQ), qQ
      })), oQ
    }

    function kQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  6476: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => vQ,
      f: () => kQ
    });
    var LQ = wQ(6481),
      qQ = wQ(6460),
      oQ = wQ(118);
    const DQ = 100;
    async function kQ(QQ, FQ) {
      var wQ;
      let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (wQ = navigator.gpu) && void 0 !== wQ ? wQ : null;
      const DQ = QQ.tQQ(FQ, (0, qQ.shaderPackTextures)());
      if (DQ.errors.length > 0) return mQ(QQ, DQ.errors, DQ.offInStrict);
      const kQ = await async function(QQ) {
        if (!QQ) return null;
        try {
          const FQ = await (0, oQ.w)(QQ);
          return FQ ? await FQ.requestDevice() : null
        } catch (FQ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", FQ), null
        }
      }(LQ);
      if (!kQ) return null;
      let vQ = !1;
      kQ.lost.then((() => {
        vQ = !0
      }));
      try {
        const FQ = await Promise.all(DQ.validationModules.map((FQ => async function(QQ, FQ, wQ) {
          FQ.pushErrorScope("validation");
          const LQ = FQ.createShaderModule({
              code: wQ.code
            }),
            qQ = FQ.popErrorScope(),
            {
              messages: oQ
            } = await LQ.getCompilationInfo(),
            DQ = oQ.filter((QQ => "error" === QQ.type)).map((FQ => QQ.mapValidationMessage(wQ, FQ))),
            kQ = await qQ;
          kQ && 0 === DQ.length && DQ.push({
            file: null,
            line: 0,
            message: kQ.message,
            variants: [wQ.key]
          });
          return DQ
        }(QQ, kQ, FQ))));
        return vQ ? null : mQ(QQ, QQ.uLQ(FQ.flat()), DQ.offInStrict)
      } catch (uQ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", uQ), null
      } finally {
        kQ.destroy()
      }
    }
    async function vQ(QQ, FQ) {
      var wQ;
      if (!(0, LQ.shaderPackNeedsCheck)(QQ, FQ) || (0, LQ.isOtherApiVersion)(QQ)) return QQ;
      const qQ = await kQ(FQ, (0, LQ.storedShaderPackFiles)(QQ));
      if (!qQ) return QQ;
      const oQ = !1 === (null === (wQ = QQ.validation) || void 0 === wQ ? void 0 : wQ.ok) && !QQ.validation.fromRecheck,
        DQ = {
          ...QQ,
          validation: oQ ? qQ : {
            ...qQ,
            fromRecheck: !0
          }
        };
      return await (0, LQ.replaceShaderPack)(QQ, DQ, FQ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), DQ
    }

    function mQ(QQ, FQ, wQ) {
      return {
        headerVersion: (0, LQ.pageShaderPackValidationVersion)(QQ),
        ok: 0 === FQ.length,
        errors: FQ.slice(0, DQ),
        moreErrors: Math.max(0, FQ.length - DQ),
        offInStrict: wQ
      }
    }
  },
  6414: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => oQ,
      h: () => LQ,
      i: () => xQ,
      k: () => uQ,
      m: () => qQ,
      p: () => vQ,
      r: () => mQ,
      v: () => HQ
    });
    const LQ = 5;

    function qQ(QQ) {
      return QQ === LQ
    }
    const oQ = 262144,
      DQ = 256,
      kQ = 256;

    function vQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const FQ = [];
      for (const [wQ, LQ] of Object.entries(QQ)) {
        if ("string" !== typeof LQ) return `${wQ} isn't text.`;
        FQ.push({
          path: wQ,
          source: LQ
        })
      }
      return FQ.sort(((QQ, FQ) => uQ(QQ.path, FQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > DQ) return `The pack has more than ${DQ} .wgsl files.`;
          const FQ = new Set;
          for (const {
              path: wQ
            }
            of QQ) {
            const QQ = bQ(wQ);
            if (null !== QQ) return QQ;
            if (FQ.has(wQ)) return `The pack has two files at ${wQ}.`;
            FQ.add(wQ)
          }
          return HQ(QQ) > oQ ? `The pack's .wgsl files are over ${oQ/1024} KB in total.` : null
        }(FQ) ?? FQ
    }

    function mQ(QQ) {
      const FQ = {};
      for (const wQ of QQ) FQ[wQ.path] = wQ.source;
      return FQ
    }

    function uQ(QQ, FQ) {
      return QQ < FQ ? -1 : QQ > FQ ? 1 : 0
    }

    function HQ(QQ) {
      const FQ = new TextEncoder;
      let wQ = 0;
      for (const {
          source: LQ
        }
        of QQ) wQ += FQ.encode(LQ).byteLength;
      return wQ
    }

    function bQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > kQ) return `A file path is over ${kQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const YQ = /^(.*)\[rot\[([1-4])$/;

    function xQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const LQ = new Map;
      FQ.forEach(((QQ, FQ) => {
        let {
          numAnimStates: wQ,
          animStartIdx: qQ
        } = QQ;
        for (let oQ = 1; oQ < wQ; oQ++) LQ.set(qQ + oQ - 1, FQ)
      }));
      const qQ = Object.entries(QQ),
        oQ = new Map;
      for (const [AQ, tQ] of qQ) {
        const QQ = YQ.exec(AQ);
        "1" === QQ?.[2] && oQ.set(QQ[1], tQ + 1)
      }
      const DQ = QQ => {
          const FQ = YQ.exec(QQ);
          return FQ && oQ.has(FQ[1]) ? {
            root: FQ[1],
            rotation: Number(FQ[2]) - 1
          } : null
        },
        kQ = new Set(qQ.map((QQ => {
          let [FQ] = QQ;
          return DQ(FQ)?.root ?? FQ
        }))),
        vQ = (QQ, wQ) => {
          const LQ = QQ.replace(/_?0$/, "");
          return (FQ[wQ]?.numAnimStates ?? 0) > 1 && !kQ.has(LQ) ? LQ : QQ
        },
        mQ = new Map;
      for (const [YQ, AQ] of qQ) mQ.set(AQ, vQ(DQ(YQ)?.root ?? YQ, AQ));
      const uQ = qQ.reduce(((QQ, FQ) => {
          let [, wQ] = FQ;
          return Math.max(QQ, wQ + 1)
        }), 0),
        HQ = Array.from({
          length: uQ
        }, ((QQ, FQ) => ({
          id: FQ + 1,
          rotation: 0
        }))),
        bQ = new Map,
        xQ = new Map;
      for (const [YQ, AQ] of qQ) {
        const QQ = DQ(YQ),
          FQ = LQ.get(AQ);
        if (void 0 !== FQ) {
          const wQ = mQ.get(FQ);
          xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "frame"
          }), QQ && !xQ.has(QQ.root) && xQ.set(QQ.root, {
            name: QQ.root,
            texture: wQ,
            kind: "frame"
          });
          continue
        }
        const wQ = mQ.get(AQ),
          qQ = QQ?.root ?? YQ;
        if (wQ !== qQ && xQ.set(qQ, {
            name: qQ,
            texture: wQ,
            kind: "frame"
          }), QQ) {
          const FQ = oQ.get(QQ.root);
          HQ[AQ] = {
            id: FQ,
            rotation: QQ.rotation
          }, bQ.set(wQ, FQ), xQ.set(YQ, {
            name: YQ,
            texture: wQ,
            kind: "rotation"
          })
        } else bQ.set(wQ, AQ + 1)
      }
      for (const YQ of bQ.keys()) xQ.delete(YQ);
      for (const [YQ, AQ] of wQ) {
        const QQ = bQ.get(AQ);
        void 0 === QQ || bQ.has(YQ) || (bQ.set(YQ, QQ), xQ.delete(YQ))
      }
      return {
        named: [...bQ].sort(((QQ, FQ) => {
          let [wQ] = QQ, [LQ] = FQ;
          return wQ < LQ ? -1 : wQ > LQ ? 1 : 0
        })).map((QQ => {
          let [FQ, wQ] = QQ;
          return {
            name: FQ,
            id: wQ
          }
        })),
        aliases: [...xQ.values()],
        layers: HQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);