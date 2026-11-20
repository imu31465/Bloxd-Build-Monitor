export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6586: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(6591),
      MT = cT(1099);
    const KT = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function OT(TT) {
      let {
        diagnostics: kT,
        more: cT = 0,
        t: OT
      } = TT;
      return (0, MT.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [kT.map(((TT, kT) => {
          const cT = (0, lT.e)(TT),
            yT = function(TT, kT) {
              const cT = (0, lT.c)(null !== TT && void 0 !== TT ? TT : []);
              if (0 === cT.length) return null;
              return cT.map((TT => TT.map((TT => kT(KT[TT]))).join(", "))).join("; ")
            }(TT.variants, OT);
          return (0, MT.jsxs)("li", {
            children: [cT && (0, MT.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: cT
            }), TT.message, yT && (0, MT.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: OT("shaderPack:onlyIn", {
                variants: yT
              })
            })]
          }, kT)
        })), cT > 0 && (0, MT.jsx)("li", {
          children: OT("shaderPack:moreErrors", {
            count: String(cT)
          })
        })]
      })
    }
  },
  6604: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => RT,
      f: () => gT
    });
    var lT = cT(71),
      MT = cT(1046),
      KT = cT.n(MT),
      OT = cT(4909),
      yT = cT(1348),
      fT = cT(1061),
      xT = cT(1470),
      IT = cT(1195),
      AT = cT(118),
      CT = cT(6581),
      jT = cT(6597);
    class vT extends Error {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(TT, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = TT, this.params = kT
      }
    }
    const tT = 1024,
      hT = 101010256,
      NT = 33639248,
      QT = 67324752,
      ST = 22,
      DT = 46,
      aT = 30,
      FT = 65535,
      rT = 65535,
      PT = 4294967295,
      wT = 0,
      mT = 8,
      bT = new TextDecoder;

    function zT(TT) {
      const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength),
        cT = function(TT) {
          const kT = TT.byteLength - ST;
          for (let cT = kT; cT >= Math.max(0, kT - FT); cT--)
            if (TT.getUint32(cT, !0) === hT && cT + ST + TT.getUint16(cT + 20, !0) <= TT.byteLength) return cT;
          throw new vT("shaderPack:loadNotZip")
        }(kT),
        lT = kT.getUint16(cT + 8, !0),
        MT = kT.getUint16(cT + 10, !0),
        KT = kT.getUint32(cT + 12, !0),
        OT = kT.getUint32(cT + 16, !0);
      if (MT === rT || KT === PT || OT === PT) throw eT();
      if (0 !== kT.getUint16(cT + 4, !0) || 0 !== kT.getUint16(cT + 6, !0) || lT !== MT) throw new vT("shaderPack:loadSplitZip");
      if (MT > tT) throw new vT("shaderPack:loadTooManyZipEntries", {
        count: String(tT)
      });
      const yT = OT + KT;
      if (yT > cT) throw HT();
      const fT = [];
      let xT = OT;
      for (let IT = 0; IT < MT; IT++) {
        if (xT + DT > yT || kT.getUint32(xT, !0) !== NT) throw HT();
        const cT = kT.getUint16(xT + 8, !0),
          lT = kT.getUint16(xT + 10, !0),
          MT = kT.getUint32(xT + 20, !0),
          KT = kT.getUint32(xT + 24, !0),
          IT = kT.getUint16(xT + 28, !0),
          AT = kT.getUint16(xT + 30, !0),
          CT = kT.getUint16(xT + 32, !0),
          jT = kT.getUint32(xT + 42, !0),
          vT = xT + DT;
        if (xT = vT + IT + AT + CT, xT > yT) throw HT();
        if (MT === PT || KT === PT || jT === PT) throw eT();
        const tT = bT.decode(TT.subarray(vT, vT + IT)).replace(/\\/g, "/");
        tT.endsWith("/") || fT.push({
          path: tT,
          method: lT,
          encrypted: 0 !== (1 & cT),
          compressedSize: MT,
          dataOffset: oT(kT, jT, MT, OT)
        })
      }
      return fT
    }
    async function JT(TT, kT, cT) {
      if (kT.encrypted) throw new vT("shaderPack:loadEncrypted", {
        path: kT.path
      });
      if (kT.method === wT) return kT.compressedSize > cT ? null : TT.subarray(kT.dataOffset, kT.dataOffset + kT.compressedSize);
      if (kT.method === mT) return async function(TT, kT, cT) {
        const lT = new Blob([TT]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          MT = [];
        let KT = 0;
        try {
          for (;;) {
            const {
              done: TT,
              value: cT
            } = await lT.read();
            if (TT) break;
            if (KT += cT.byteLength, KT > kT) return await lT.cancel(), null;
            MT.push(cT)
          }
        } catch (fT) {
          throw new vT("shaderPack:loadDecompressFailed", {
            path: cT
          }, {
            cause: fT
          })
        }
        const OT = new Uint8Array(KT);
        let yT = 0;
        for (const xT of MT) OT.set(xT, yT), yT += xT.byteLength;
        return OT
      }(TT.slice(kT.dataOffset, kT.dataOffset + kT.compressedSize), cT, kT.path);
      throw new vT("shaderPack:loadUnsupportedCompression", {
        path: kT.path,
        method: String(kT.method)
      })
    }

    function oT(TT, kT, cT, lT) {
      if (kT + aT > lT || TT.getUint32(kT, !0) !== QT) throw HT();
      const MT = kT + aT + TT.getUint16(kT + 26, !0) + TT.getUint16(kT + 28, !0);
      if (MT + cT > lT) throw HT();
      return MT
    }

    function HT() {
      return new vT("shaderPack:loadZipDamaged")
    }

    function eT() {
      return new vT("shaderPack:loadZip64")
    }
    const GT = 33554432,
      VT = 65536;
    async function ET(TT) {
      if (1 === TT.length && TT[0].name.toLowerCase().endsWith(".zip")) {
        const kT = TT[0];
        if (kT.size > GT) throw new vT("shaderPack:loadZipTooBig", {
          megabytes: String(GT / 1048576)
        });
        return async function(TT) {
          return ZT(zT(TT).map((kT => ({
            path: kT.path,
            read: cT => JT(TT, kT, cT)
          }))))
        }(new Uint8Array(await kT.arrayBuffer()))
      }
      return ZT(TT.map((TT => ({
        path: uT(TT),
        read: kT => async function(TT, kT) {
          return TT.size > kT ? null : new Uint8Array(await TT.arrayBuffer())
        }(TT, kT)
      }))))
    }
    async function ZT(TT) {
      const kT = function(TT) {
          const kT = TT.length > 0 ? TT[0].path.indexOf("/") : -1;
          if (-1 === kT) return TT;
          const cT = TT[0].path.slice(0, kT + 1);
          if (!TT.every((TT => TT.path.startsWith(cT)))) return TT;
          return TT.map((TT => ({
            ...TT,
            path: TT.path.slice(cT.length)
          })))
        }(TT.filter((TT => ! function(TT) {
          const kT = TT.split("/"),
            cT = kT[kT.length - 1];
          return kT.includes("__MACOSX") || cT.startsWith("._") || ".DS_Store" === cT
        }(TT.path)))),
        cT = kT.filter((TT => "pack.json" === TT.path.toLowerCase()));
      if (0 === cT.length) throw new vT("shaderPack:loadNoManifest");
      if (cT.length > 1) throw new vT("shaderPack:loadDuplicateManifest");
      const lT = cT[0],
        MT = await lT.read(VT);
      if (null === MT) throw new vT("shaderPack:loadManifestTooBig", {
        kilobytes: String(VT / 1024)
      });
      const KT = function(TT) {
          let kT;
          try {
            kT = JSON.parse(TT)
          } catch (yT) {
            throw new vT("shaderPack:loadManifestNotJson", {
              error: yT.message
            }, {
              cause: yT
            })
          }
          if ("object" !== typeof kT || null === kT || Array.isArray(kT)) throw new vT("shaderPack:loadManifestNotObject");
          const {
            apiVersion: cT,
            name: lT,
            author: MT,
            description: KT,
            keepCircleShadows: OT
          } = kT;
          if (void 0 === cT) throw new vT("shaderPack:loadNoApiVersion", {
            version: String(jT.c)
          });
          if (!(0, jT.f)(cT)) throw new vT("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(cT),
            version: String(jT.c)
          });
          if ("string" !== typeof lT || "" === lT.trim()) throw new vT("shaderPack:loadNoName");
          if (void 0 !== MT && null !== MT && "string" !== typeof MT) throw new vT("shaderPack:loadAuthorNotString");
          if (void 0 !== KT && null !== KT && "string" !== typeof KT) throw new vT("shaderPack:loadDescriptionNotString");
          if (void 0 !== OT && "boolean" !== typeof OT) throw new vT("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: cT,
            name: lT,
            author: "string" === typeof MT ? MT : null,
            description: "string" === typeof KT && "" !== KT.trim() ? KT : null,
            keepCircleShadows: !0 === OT
          }
        }(XT(MT, lT.path)),
        OT = kT.filter((TT => TT.path.toLowerCase().endsWith(".wgsl"))).sort(((TT, kT) => (0, CT.j)(TT.path, kT.path)));
      if (0 === OT.length) throw new vT("shaderPack:loadNoWgsl");
      if (OT.length > CT.b) throw new vT("shaderPack:loadTooManyWgsl", {
        count: String(CT.b)
      });
      const yT = OT.find(((TT, kT) => kT > 0 && TT.path === OT[kT - 1].path));
      if (yT) throw new vT("shaderPack:loadDuplicatePath", {
        path: yT.path
      });
      const fT = [];
      let xT = CT.c;
      for (const IT of OT) {
        const TT = await IT.read(xT);
        if (null === TT) throw new vT("shaderPack:loadSourceTooBig", {
          kilobytes: String(CT.c / 1024)
        });
        xT -= TT.byteLength, fT.push({
          path: IT.path,
          source: XT(TT, IT.path)
        })
      }
      return {
        manifest: KT,
        files: fT
      }
    }

    function uT(TT) {
      return (TT.webkitRelativePath || TT.path || TT.name).replace(/^\.?\//, "")
    }

    function XT(TT, kT) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(TT)
      } catch (cT) {
        throw new vT("shaderPack:loadNotUtf8", {
          path: kT
        }, {
          cause: cT
        })
      }
    }
    var dT = cT(6591),
      LT = cT(1099);

    function RT(TT) {
      let {
        busy: kT,
        disabled: cT,
        onFiles: MT
      } = TT;
      const {
        t: CT
      } = (0, IT.B)(), jT = (0, lT.useRef)(null), vT = !(0, AT.isMobile)(), {
        getRootProps: tT,
        getInputProps: hT,
        isDragActive: NT,
        open: QT
      } = (0, OT.c)({
        onDrop: MT,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: cT
      });
      return (0, LT.jsxs)("div", {
        ...tT({
          className: KT()("ShaderPackDropZone", {
            ActiveDrag: NT,
            Disabled: cT
          })
        }),
        children: [(0, LT.jsx)("input", {
          ...hT({
            webkitdirectory: "true"
          })
        }), (0, LT.jsx)("input", {
          ref: jT,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(TT) {
            const kT = Array.from(TT.target.files);
            TT.target.value = "", MT(kT)
          }
        }), kT && (0, LT.jsx)(yT.d, {}), !kT && (0, LT.jsxs)(LT.Fragment, {
          children: [(0, LT.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, LT.jsx)(fT.e, {
              name: "up-from-bracket"
            })
          }), (0, LT.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: CT(vT ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, LT.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [vT && (0, LT.jsx)(xT.e, {
              disabled: cT,
              onClick: QT,
              children: CT("shaderPack:chooseFolder")
            }), (0, LT.jsx)(xT.e, {
              disabled: cT,
              onClick: () => {
                jT.current.click()
              },
              children: CT("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function gT(TT) {
      const {
        t: kT
      } = (0, IT.B)(), [cT, MT] = (0, lT.useState)(!1), [KT, OT] = (0, lT.useState)(null), yT = (0, lT.useRef)(!1);
      return {
        loading: cT,
        error: KT,
        setError: OT,
        onFiles: async function(cT) {
          if (!yT.current) {
            yT.current = !0, MT(!0), OT(null);
            try {
              await TT(await ET(cT))
            } catch (lT) {
              lT instanceof vT ? OT((0, dT.g)(kT, lT.translationKey, lT.params)) : (console.error("Failed to load the shader pack", lT), OT(kT("shaderPack:unexpectedError")))
            } finally {
              yT.current = !1, MT(!1)
            }
          }
        }
      }
    }
  },
  6591: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      e: () => OT,
      g: () => KT
    });
    var lT = cT(6597);
    const MT = [TT => TT.strict ? "strict" : "nonStrict", TT => TT.program];

    function KT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const lT = {};
      for (const MT in cT) lT[MT] = `\0${MT}\0`;
      return TT(kT, lT).replace(/\0(\w+)\0/g, ((TT, kT) => cT[kT]))
    }

    function OT(TT) {
      return null === TT.file ? null : TT.line > 0 ? `${TT.file}:${TT.line}` : TT.file
    }

    function yT(TT) {
      const kT = new Map(TT.map((TT => [fT(TT).join("."), TT])));
      if (0 === kT.size) return [];
      const cT = IT([...kT.values()]);
      return 0 === cT[0].length ? [] : cT
    }

    function fT(TT) {
      return MT.map((kT => kT(TT)))
    }
    const xT = MT.map((TT => new Set(lT.d.map(TT)).size));

    function IT(TT) {
      const kT = MT.map((kT => new Set(TT.map(kT)))),
        cT = kT.reduce(((TT, kT) => TT * kT.size), 1),
        lT = kT.every(((TT, kT) => 1 === TT.size || TT.size === xT[kT]));
      if (cT === TT.length && lT) return [MT.filter(((TT, cT) => 1 === kT[cT].size)).map((kT => kT(TT[0])))];
      let KT = null;
      for (let OT = 0; OT < MT.length; OT++) {
        if (1 === kT[OT].size) continue;
        const cT = AT(TT, MT[OT]).flatMap(IT);
        (null === KT || cT.length < KT.length) && (KT = cT)
      }
      return KT
    }

    function AT(TT, kT) {
      const cT = new Map;
      for (const MT of TT) {
        var lT;
        const TT = kT(MT);
        cT.set(TT, [...null !== (lT = cT.get(TT)) && void 0 !== lT ? lT : [], MT])
      }
      return [...cT.values()]
    }
  },
  6597: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.e,
      d: () => MT,
      f: () => lT.l
    });
    var lT = cT(6581);
    const MT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((kT => ({
      strict: TT,
      program: kT
    })))))
  },
  6641: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      forgetShaderPackActiveHint: () => zT,
      isOtherApiVersion: () => PT,
      isShaderPackActive: () => DT,
      isShaderPackChangePending: () => rT,
      markShaderPackChangePending: () => FT,
      pageShaderPackValidationVersion: () => wT,
      reconcileStoredShaderPackHint: () => bT,
      removeShaderPack: () => ST,
      replaceShaderPack: () => hT,
      saveShaderPack: () => tT,
      shaderPackNeedsCheck: () => mT,
      storedPackOutcome: () => aT,
      storedShaderPackFiles: () => CT,
      toStoredShaderPack: () => AT
    });
    var lT = cT(6581),
      MT = cT(6597),
      KT = cT(47),
      OT = cT(3383),
      yT = cT(6647),
      fT = cT(6623);
    const xT = "shaderPackChangePending";
    let IT = null;

    function AT(TT, kT, cT) {
      return {
        manifest: TT.manifest,
        files: (0, lT.s)(TT.files),
        validation: kT,
        ...cT && {
          listing: cT
        }
      }
    }

    function CT(TT) {
      return Object.keys(TT.files).map((kT => ({
        path: kT,
        source: TT.files[kT]
      })))
    }
    let jT = Promise.resolve();

    function vT(TT) {
      const kT = jT.then(TT);
      return jT = kT.catch((() => {})), kT
    }

    function tT(TT, kT) {
      return vT((() => NT(TT, kT)))
    }

    function hT(TT, kT, cT) {
      return vT((async () => JSON.stringify(await (0, yT.e)()) === JSON.stringify(TT) && (null === kT ? (await QT(), !0) : NT(kT, cT))))
    }
    async function NT(TT, kT) {
      const cT = await KT.d.setItem(yT.b, TT);
      return cT && JT(TT, kT), cT
    }
    async function QT() {
      await KT.d.removeItem(yT.b), KT.e.removeItem(OT.d)
    }

    function ST() {
      return vT(QT)
    }

    function DT(TT, kT) {
      return "active" === aT(TT, kT).kind
    }

    function aT(TT, kT) {
      var cT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : PT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) || TT.validation.fromRecheck ? null === kT ? {
        kind: "none",
        reason: "noCompiler"
      } : mT(TT, kT) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : TT.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function FT() {
      KT.g.setItem(xT, performance.timeOrigin)
    }

    function rT() {
      return KT.g.getItem(xT) === performance.timeOrigin
    }

    function PT(TT) {
      return !(0, MT.f)(TT.manifest.apiVersion)
    }

    function wT(TT) {
      return IT ??= TT.OJ((0, fT.shaderPackTextures)()), IT
    }

    function mT(TT, kT) {
      var cT;
      return (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.headerVersion) !== wT(kT)
    }

    function bT(TT) {
      return vT((async () => {
        JT(await (0, yT.e)(!0), TT)
      }))
    }

    function zT() {
      return vT((async () => {
        KT.e.removeItem(OT.d)
      }))
    }

    function JT(TT, kT) {
      DT(TT, kT) ? KT.e.setItem(OT.d, !0) : KT.e.removeItem(OT.d)
    }
  },
  6623: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      loadShaderPackTextures: () => OT,
      shaderPackTextures: () => yT
    });
    var lT = cT(6581);
    let MT = null,
      KT = null;

    function OT() {
      return KT ??= Promise.all([cT.e(70), cT.e(198)]).then((() => cT(40123))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: kT,
          textureNameToIndex: cT,
          textureAnimationData: KT
        } = TT;
        return MT ??= (0, lT.i)(cT, KT, kT), MT
      })), KT
    }

    function yT() {
      if (null === MT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return MT
    }
  },
  6636: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      h: () => yT
    });
    var lT = cT(6641),
      MT = cT(6623),
      KT = cT(141);
    const OT = 100;
    async function yT(TT, kT) {
      var cT;
      let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cT = navigator.gpu) && void 0 !== cT ? cT : null;
      const OT = TT.k_(kT, (0, MT.shaderPackTextures)());
      if (OT.errors.length > 0) return xT(TT, OT.errors, OT.offInStrict);
      const yT = await async function(TT) {
        if (!TT) return null;
        try {
          const kT = await (0, KT.w)(TT);
          return kT ? await kT.requestDevice() : null
        } catch (kT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", kT), null
        }
      }(lT);
      if (!yT) return null;
      let fT = !1;
      yT.lost.then((() => {
        fT = !0
      }));
      try {
        const kT = await Promise.all(OT.validationModules.map((kT => async function(TT, kT, cT) {
          kT.pushErrorScope("validation");
          const lT = kT.createShaderModule({
              code: cT.code
            }),
            MT = kT.popErrorScope(),
            {
              messages: KT
            } = await lT.getCompilationInfo(),
            OT = KT.filter((TT => "error" === TT.type)).map((kT => TT.mapValidationMessage(cT, kT))),
            yT = await MT;
          yT && 0 === OT.length && OT.push({
            file: null,
            line: 0,
            message: yT.message,
            variants: [cT.key]
          });
          return OT
        }(TT, yT, kT))));
        return fT ? null : xT(TT, TT.OcT(kT.flat()), OT.offInStrict)
      } catch (IT) {
        return console.error("Couldn't validate the shader pack on WebGPU.", IT), null
      } finally {
        yT.destroy()
      }
    }
    async function fT(TT, kT) {
      var cT;
      if (!(0, lT.shaderPackNeedsCheck)(TT, kT) || (0, lT.isOtherApiVersion)(TT)) return TT;
      const MT = await yT(kT, (0, lT.storedShaderPackFiles)(TT));
      if (!MT) return TT;
      const KT = !1 === (null === (cT = TT.validation) || void 0 === cT ? void 0 : cT.ok) && !TT.validation.fromRecheck,
        OT = {
          ...TT,
          validation: KT ? MT : {
            ...MT,
            fromRecheck: !0
          }
        };
      return await (0, lT.replaceShaderPack)(TT, OT, kT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), OT
    }

    function xT(TT, kT, cT) {
      return {
        headerVersion: (0, lT.pageShaderPackValidationVersion)(TT),
        ok: 0 === kT.length,
        errors: kT.slice(0, OT),
        moreErrors: Math.max(0, kT.length - OT),
        offInStrict: cT
      }
    }
  },
  6581: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      c: () => KT,
      e: () => lT,
      i: () => vT,
      j: () => IT,
      l: () => MT,
      p: () => fT,
      s: () => xT,
      u: () => AT
    });
    const lT = 5;

    function MT(TT) {
      return TT === lT
    }
    const KT = 262144,
      OT = 256,
      yT = 256;

    function fT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const kT = [];
      for (const [cT, lT] of Object.entries(TT)) {
        if ("string" !== typeof lT) return `${cT} isn't text.`;
        kT.push({
          path: cT,
          source: lT
        })
      }
      return kT.sort(((TT, kT) => IT(TT.path, kT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > OT) return `The pack has more than ${OT} .wgsl files.`;
          const kT = new Set;
          for (const {
              path: cT
            }
            of TT) {
            const TT = CT(cT);
            if (null !== TT) return TT;
            if (kT.has(cT)) return `The pack has two files at ${cT}.`;
            kT.add(cT)
          }
          return AT(TT) > KT ? `The pack's .wgsl files are over ${KT/1024} KB in total.` : null
        }(kT) ?? kT
    }

    function xT(TT) {
      const kT = {};
      for (const cT of TT) kT[cT.path] = cT.source;
      return kT
    }

    function IT(TT, kT) {
      return TT < kT ? -1 : TT > kT ? 1 : 0
    }

    function AT(TT) {
      const kT = new TextEncoder;
      let cT = 0;
      for (const {
          source: lT
        }
        of TT) cT += kT.encode(lT).byteLength;
      return cT
    }

    function CT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > yT) return `A file path is over ${yT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const jT = /^(.*)\[rot\[([1-4])$/;

    function vT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const lT = new Map;
      kT.forEach(((TT, kT) => {
        let {
          numAnimStates: cT,
          animStartIdx: MT
        } = TT;
        for (let KT = 1; KT < cT; KT++) lT.set(MT + KT - 1, kT)
      }));
      const MT = Object.entries(TT),
        KT = new Map;
      for (const [tT, hT] of MT) {
        const TT = jT.exec(tT);
        "1" === TT?.[2] && KT.set(TT[1], hT + 1)
      }
      const OT = TT => {
          const kT = jT.exec(TT);
          return kT && KT.has(kT[1]) ? {
            root: kT[1],
            rotation: Number(kT[2]) - 1
          } : null
        },
        yT = new Set(MT.map((TT => {
          let [kT] = TT;
          return OT(kT)?.root ?? kT
        }))),
        fT = (TT, cT) => {
          const lT = TT.replace(/_?0$/, "");
          return (kT[cT]?.numAnimStates ?? 0) > 1 && !yT.has(lT) ? lT : TT
        },
        xT = new Map;
      for (const [jT, tT] of MT) xT.set(tT, fT(OT(jT)?.root ?? jT, tT));
      const IT = MT.reduce(((TT, kT) => {
          let [, cT] = kT;
          return Math.max(TT, cT + 1)
        }), 0),
        AT = Array.from({
          length: IT
        }, ((TT, kT) => ({
          id: kT + 1,
          rotation: 0
        }))),
        CT = new Map,
        vT = new Map;
      for (const [jT, tT] of MT) {
        const TT = OT(jT),
          kT = lT.get(tT);
        if (void 0 !== kT) {
          const cT = xT.get(kT);
          vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "frame"
          }), TT && !vT.has(TT.root) && vT.set(TT.root, {
            name: TT.root,
            texture: cT,
            kind: "frame"
          });
          continue
        }
        const cT = xT.get(tT),
          MT = TT?.root ?? jT;
        if (cT !== MT && vT.set(MT, {
            name: MT,
            texture: cT,
            kind: "frame"
          }), TT) {
          const kT = KT.get(TT.root);
          AT[tT] = {
            id: kT,
            rotation: TT.rotation
          }, CT.set(cT, kT), vT.set(jT, {
            name: jT,
            texture: cT,
            kind: "rotation"
          })
        } else CT.set(cT, tT + 1)
      }
      for (const jT of CT.keys()) vT.delete(jT);
      for (const [jT, tT] of cT) {
        const TT = CT.get(tT);
        void 0 === TT || CT.has(jT) || (CT.set(jT, TT), vT.delete(jT))
      }
      return {
        named: [...CT].sort(((TT, kT) => {
          let [cT] = TT, [lT] = kT;
          return cT < lT ? -1 : cT > lT ? 1 : 0
        })).map((TT => {
          let [kT, cT] = TT;
          return {
            name: kT,
            id: cT
          }
        })),
        aliases: [...vT.values()],
        layers: AT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);