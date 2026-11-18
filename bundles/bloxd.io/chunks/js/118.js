export const id = 118;
export const ids = [118, 120, 123];
export const modules = {
  5939: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    var FJ = ZJ(5944),
      UJ = ZJ(990);
    const eJ = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function XJ(JJ) {
      let {
        diagnostics: cJ,
        more: ZJ = 0,
        t: XJ
      } = JJ;
      return (0, UJ.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [cJ.map(((JJ, cJ) => {
          const ZJ = (0, FJ.c)(JJ),
            AJ = function(JJ, cJ) {
              const ZJ = (0, FJ.b)(null !== JJ && void 0 !== JJ ? JJ : []);
              if (0 === ZJ.length) return null;
              return ZJ.map((JJ => JJ.map((JJ => cJ(eJ[JJ]))).join(", "))).join("; ")
            }(JJ.variants, XJ);
          return (0, UJ.jsxs)("li", {
            children: [ZJ && (0, UJ.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ZJ
            }), JJ.message, AJ && (0, UJ.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: XJ("shaderPack:onlyIn", {
                variants: AJ
              })
            })]
          }, cJ)
        })), ZJ > 0 && (0, UJ.jsx)("li", {
          children: XJ("shaderPack:moreErrors", {
            count: String(ZJ)
          })
        })]
      })
    }
  },
  5955: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => TJ,
      g: () => CJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(4365),
      AJ = ZJ(1232),
      qJ = ZJ(942),
      jJ = ZJ(1329),
      YJ = ZJ(1086),
      hJ = ZJ(80),
      DJ = ZJ(5934),
      sJ = ZJ(5951);
    class nJ extends Error {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(JJ, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = JJ, this.params = cJ
      }
    }
    const GJ = 1024,
      fJ = 101010256,
      xJ = 33639248,
      rJ = 67324752,
      vJ = 22,
      mJ = 46,
      QJ = 30,
      EJ = 65535,
      VJ = 65535,
      KJ = 4294967295,
      yJ = 0,
      SJ = 8,
      IJ = new TextDecoder;

    function MJ(JJ) {
      const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength),
        ZJ = function(JJ) {
          const cJ = JJ.byteLength - vJ;
          for (let ZJ = cJ; ZJ >= Math.max(0, cJ - EJ); ZJ--)
            if (JJ.getUint32(ZJ, !0) === fJ && ZJ + vJ + JJ.getUint16(ZJ + 20, !0) <= JJ.byteLength) return ZJ;
          throw new nJ("shaderPack:loadNotZip")
        }(cJ),
        FJ = cJ.getUint16(ZJ + 8, !0),
        UJ = cJ.getUint16(ZJ + 10, !0),
        eJ = cJ.getUint32(ZJ + 12, !0),
        XJ = cJ.getUint32(ZJ + 16, !0);
      if (UJ === VJ || eJ === KJ || XJ === KJ) throw gJ();
      if (0 !== cJ.getUint16(ZJ + 4, !0) || 0 !== cJ.getUint16(ZJ + 6, !0) || FJ !== UJ) throw new nJ("shaderPack:loadSplitZip");
      if (UJ > GJ) throw new nJ("shaderPack:loadTooManyZipEntries", {
        count: String(GJ)
      });
      const AJ = XJ + eJ;
      if (AJ > ZJ) throw WJ();
      const qJ = [];
      let jJ = XJ;
      for (let YJ = 0; YJ < UJ; YJ++) {
        if (jJ + mJ > AJ || cJ.getUint32(jJ, !0) !== xJ) throw WJ();
        const ZJ = cJ.getUint16(jJ + 8, !0),
          FJ = cJ.getUint16(jJ + 10, !0),
          UJ = cJ.getUint32(jJ + 20, !0),
          eJ = cJ.getUint32(jJ + 24, !0),
          YJ = cJ.getUint16(jJ + 28, !0),
          hJ = cJ.getUint16(jJ + 30, !0),
          DJ = cJ.getUint16(jJ + 32, !0),
          sJ = cJ.getUint32(jJ + 42, !0),
          nJ = jJ + mJ;
        if (jJ = nJ + YJ + hJ + DJ, jJ > AJ) throw WJ();
        if (UJ === KJ || eJ === KJ || sJ === KJ) throw gJ();
        const GJ = IJ.decode(JJ.subarray(nJ, nJ + YJ)).replace(/\\/g, "/");
        GJ.endsWith("/") || qJ.push({
          path: GJ,
          method: FJ,
          encrypted: 0 !== (1 & ZJ),
          compressedSize: UJ,
          dataOffset: wJ(cJ, sJ, UJ, XJ)
        })
      }
      return qJ
    }
    async function bJ(JJ, cJ, ZJ) {
      if (cJ.encrypted) throw new nJ("shaderPack:loadEncrypted", {
        path: cJ.path
      });
      if (cJ.method === yJ) return cJ.compressedSize > ZJ ? null : JJ.subarray(cJ.dataOffset, cJ.dataOffset + cJ.compressedSize);
      if (cJ.method === SJ) return async function(JJ, cJ, ZJ) {
        const FJ = new Blob([JJ]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          UJ = [];
        let eJ = 0;
        try {
          for (;;) {
            const {
              done: JJ,
              value: ZJ
            } = await FJ.read();
            if (JJ) break;
            if (eJ += ZJ.byteLength, eJ > cJ) return await FJ.cancel(), null;
            UJ.push(ZJ)
          }
        } catch (qJ) {
          throw new nJ("shaderPack:loadDecompressFailed", {
            path: ZJ
          }, {
            cause: qJ
          })
        }
        const XJ = new Uint8Array(eJ);
        let AJ = 0;
        for (const jJ of UJ) XJ.set(jJ, AJ), AJ += jJ.byteLength;
        return XJ
      }(JJ.slice(cJ.dataOffset, cJ.dataOffset + cJ.compressedSize), ZJ, cJ.path);
      throw new nJ("shaderPack:loadUnsupportedCompression", {
        path: cJ.path,
        method: String(cJ.method)
      })
    }

    function wJ(JJ, cJ, ZJ, FJ) {
      if (cJ + QJ > FJ || JJ.getUint32(cJ, !0) !== rJ) throw WJ();
      const UJ = cJ + QJ + JJ.getUint16(cJ + 26, !0) + JJ.getUint16(cJ + 28, !0);
      if (UJ + ZJ > FJ) throw WJ();
      return UJ
    }

    function WJ() {
      return new nJ("shaderPack:loadZipDamaged")
    }

    function gJ() {
      return new nJ("shaderPack:loadZip64")
    }
    const HJ = 33554432,
      PJ = 65536;
    async function kJ(JJ) {
      if (1 === JJ.length && JJ[0].name.toLowerCase().endsWith(".zip")) {
        const cJ = JJ[0];
        if (cJ.size > HJ) throw new nJ("shaderPack:loadZipTooBig", {
          megabytes: String(HJ / 1048576)
        });
        return async function(JJ) {
          return pJ(MJ(JJ).map((cJ => ({
            path: cJ.path,
            read: ZJ => bJ(JJ, cJ, ZJ)
          }))))
        }(new Uint8Array(await cJ.arrayBuffer()))
      }
      return pJ(JJ.map((JJ => ({
        path: dJ(JJ),
        read: cJ => async function(JJ, cJ) {
          return JJ.size > cJ ? null : new Uint8Array(await JJ.arrayBuffer())
        }(JJ, cJ)
      }))))
    }
    async function pJ(JJ) {
      const cJ = function(JJ) {
          const cJ = JJ.length > 0 ? JJ[0].path.indexOf("/") : -1;
          if (-1 === cJ) return JJ;
          const ZJ = JJ[0].path.slice(0, cJ + 1);
          if (!JJ.every((JJ => JJ.path.startsWith(ZJ)))) return JJ;
          return JJ.map((JJ => ({
            ...JJ,
            path: JJ.path.slice(ZJ.length)
          })))
        }(JJ.filter((JJ => ! function(JJ) {
          const cJ = JJ.split("/"),
            ZJ = cJ[cJ.length - 1];
          return cJ.includes("__MACOSX") || ZJ.startsWith("._") || ".DS_Store" === ZJ
        }(JJ.path)))),
        ZJ = cJ.filter((JJ => "pack.json" === JJ.path.toLowerCase()));
      if (0 === ZJ.length) throw new nJ("shaderPack:loadNoManifest");
      if (ZJ.length > 1) throw new nJ("shaderPack:loadDuplicateManifest");
      const FJ = ZJ[0],
        UJ = await FJ.read(PJ);
      if (null === UJ) throw new nJ("shaderPack:loadManifestTooBig", {
        kilobytes: String(PJ / 1024)
      });
      const eJ = function(JJ) {
          let cJ;
          try {
            cJ = JSON.parse(JJ)
          } catch (AJ) {
            throw new nJ("shaderPack:loadManifestNotJson", {
              error: AJ.message
            }, {
              cause: AJ
            })
          }
          if ("object" !== typeof cJ || null === cJ || Array.isArray(cJ)) throw new nJ("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ZJ,
            name: FJ,
            author: UJ,
            description: eJ,
            keepCircleShadows: XJ
          } = cJ;
          if (void 0 === ZJ) throw new nJ("shaderPack:loadNoApiVersion", {
            version: String(sJ.b)
          });
          if (!(0, sJ.i)(ZJ)) throw new nJ("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ZJ),
            version: String(sJ.b)
          });
          if ("string" !== typeof FJ || "" === FJ.trim()) throw new nJ("shaderPack:loadNoName");
          if (void 0 !== UJ && null !== UJ && "string" !== typeof UJ) throw new nJ("shaderPack:loadAuthorNotString");
          if (void 0 !== eJ && null !== eJ && "string" !== typeof eJ) throw new nJ("shaderPack:loadDescriptionNotString");
          if (void 0 !== XJ && "boolean" !== typeof XJ) throw new nJ("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ZJ,
            name: FJ,
            author: "string" === typeof UJ ? UJ : null,
            description: "string" === typeof eJ && "" !== eJ.trim() ? eJ : null,
            keepCircleShadows: !0 === XJ
          }
        }(zJ(UJ, FJ.path)),
        XJ = cJ.filter((JJ => JJ.path.toLowerCase().endsWith(".wgsl"))).sort(((JJ, cJ) => (0, DJ.j)(JJ.path, cJ.path)));
      if (0 === XJ.length) throw new nJ("shaderPack:loadNoWgsl");
      if (XJ.length > DJ.b) throw new nJ("shaderPack:loadTooManyWgsl", {
        count: String(DJ.b)
      });
      const AJ = XJ.find(((JJ, cJ) => cJ > 0 && JJ.path === XJ[cJ - 1].path));
      if (AJ) throw new nJ("shaderPack:loadDuplicatePath", {
        path: AJ.path
      });
      const qJ = [];
      let jJ = DJ.d;
      for (const YJ of XJ) {
        const JJ = await YJ.read(jJ);
        if (null === JJ) throw new nJ("shaderPack:loadSourceTooBig", {
          kilobytes: String(DJ.d / 1024)
        });
        jJ -= JJ.byteLength, qJ.push({
          path: YJ.path,
          source: zJ(JJ, YJ.path)
        })
      }
      return {
        manifest: eJ,
        files: qJ
      }
    }

    function dJ(JJ) {
      return (JJ.webkitRelativePath || JJ.path || JJ.name).replace(/^\.?\//, "")
    }

    function zJ(JJ, cJ) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(JJ)
      } catch (ZJ) {
        throw new nJ("shaderPack:loadNotUtf8", {
          path: cJ
        }, {
          cause: ZJ
        })
      }
    }
    var NJ = ZJ(5944),
      OJ = ZJ(990);

    function TJ(JJ) {
      let {
        busy: cJ,
        disabled: ZJ,
        onFiles: UJ
      } = JJ;
      const {
        t: DJ
      } = (0, YJ.F)(), sJ = (0, FJ.useRef)(null), nJ = !(0, hJ.isMobile)(), {
        getRootProps: GJ,
        getInputProps: fJ,
        isDragActive: xJ,
        open: rJ
      } = (0, XJ.c)({
        onDrop: UJ,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ZJ
      });
      return (0, OJ.jsxs)("div", {
        ...GJ({
          className: eJ()("ShaderPackDropZone", {
            ActiveDrag: xJ,
            Disabled: ZJ
          })
        }),
        children: [(0, OJ.jsx)("input", {
          ...fJ({
            webkitdirectory: "true"
          })
        }), (0, OJ.jsx)("input", {
          ref: sJ,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(JJ) {
            const cJ = Array.from(JJ.target.files);
            JJ.target.value = "", UJ(cJ)
          }
        }), cJ && (0, OJ.jsx)(AJ.c, {}), !cJ && (0, OJ.jsxs)(OJ.Fragment, {
          children: [(0, OJ.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, OJ.jsx)(qJ.c, {
              name: "up-from-bracket"
            })
          }), (0, OJ.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: DJ(nJ ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, OJ.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [nJ && (0, OJ.jsx)(jJ.d, {
              disabled: ZJ,
              onClick: rJ,
              children: DJ("shaderPack:chooseFolder")
            }), (0, OJ.jsx)(jJ.d, {
              disabled: ZJ,
              onClick: () => {
                sJ.current.click()
              },
              children: DJ("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function CJ(JJ) {
      const {
        t: cJ
      } = (0, YJ.F)(), [ZJ, UJ] = (0, FJ.useState)(!1), [eJ, XJ] = (0, FJ.useState)(null), AJ = (0, FJ.useRef)(!1);
      return {
        loading: ZJ,
        error: eJ,
        setError: XJ,
        onFiles: async function(ZJ) {
          if (!AJ.current) {
            AJ.current = !0, UJ(!0), XJ(null);
            try {
              await JJ(await kJ(ZJ))
            } catch (FJ) {
              FJ instanceof nJ ? XJ((0, NJ.g)(cJ, FJ.translationKey, FJ.params)) : (console.error("Failed to load the shader pack", FJ), XJ(cJ("shaderPack:unexpectedError")))
            } finally {
              AJ.current = !1, UJ(!1)
            }
          }
        }
      }
    }
  },
  5944: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      c: () => XJ,
      g: () => eJ
    });
    var FJ = ZJ(5951);
    const UJ = [JJ => JJ.strict ? "strict" : "nonStrict", JJ => JJ.program];

    function eJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const FJ = {};
      for (const UJ in ZJ) FJ[UJ] = `\0${UJ}\0`;
      return JJ(cJ, FJ).replace(/\0(\w+)\0/g, ((JJ, cJ) => ZJ[cJ]))
    }

    function XJ(JJ) {
      return null === JJ.file ? null : JJ.line > 0 ? `${JJ.file}:${JJ.line}` : JJ.file
    }

    function AJ(JJ) {
      const cJ = new Map(JJ.map((JJ => [qJ(JJ).join("."), JJ])));
      if (0 === cJ.size) return [];
      const ZJ = YJ([...cJ.values()]);
      return 0 === ZJ[0].length ? [] : ZJ
    }

    function qJ(JJ) {
      return UJ.map((cJ => cJ(JJ)))
    }
    const jJ = UJ.map((JJ => new Set(FJ.e.map(JJ)).size));

    function YJ(JJ) {
      const cJ = UJ.map((cJ => new Set(JJ.map(cJ)))),
        ZJ = cJ.reduce(((JJ, cJ) => JJ * cJ.size), 1),
        FJ = cJ.every(((JJ, cJ) => 1 === JJ.size || JJ.size === jJ[cJ]));
      if (ZJ === JJ.length && FJ) return [UJ.filter(((JJ, ZJ) => 1 === cJ[ZJ].size)).map((cJ => cJ(JJ[0])))];
      let eJ = null;
      for (let XJ = 0; XJ < UJ.length; XJ++) {
        if (1 === cJ[XJ].size) continue;
        const ZJ = hJ(JJ, UJ[XJ]).flatMap(YJ);
        (null === eJ || ZJ.length < eJ.length) && (eJ = ZJ)
      }
      return eJ
    }

    function hJ(JJ, cJ) {
      const ZJ = new Map;
      for (const UJ of JJ) {
        var FJ;
        const JJ = cJ(UJ);
        ZJ.set(JJ, [...null !== (FJ = ZJ.get(JJ)) && void 0 !== FJ ? FJ : [], UJ])
      }
      return [...ZJ.values()]
    }
  },
  5951: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.f,
      e: () => UJ,
      i: () => FJ.k
    });
    var FJ = ZJ(5934);
    const UJ = [!1, !0].flatMap((JJ => ["terrain", "liquid", "model"].map((cJ => ({
      strict: JJ,
      program: cJ
    })))))
  },
  5996: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      forgetShaderPackActiveHint: () => MJ,
      isOtherApiVersion: () => KJ,
      isShaderPackActive: () => mJ,
      isShaderPackChangePending: () => VJ,
      markShaderPackChangePending: () => EJ,
      pageShaderPackValidationVersion: () => yJ,
      reconcileStoredShaderPackHint: () => IJ,
      removeShaderPack: () => vJ,
      replaceShaderPack: () => fJ,
      saveShaderPack: () => GJ,
      shaderPackNeedsCheck: () => SJ,
      storedPackOutcome: () => QJ,
      storedShaderPackFiles: () => DJ,
      toStoredShaderPack: () => hJ
    });
    var FJ = ZJ(5934),
      UJ = ZJ(5951),
      eJ = ZJ(29),
      XJ = ZJ(2938),
      AJ = ZJ(6004),
      qJ = ZJ(5977);
    const jJ = "shaderPackChangePending";
    let YJ = null;

    function hJ(JJ, cJ, ZJ) {
      return {
        manifest: JJ.manifest,
        files: (0, FJ.o)(JJ.files),
        validation: cJ,
        ...ZJ && {
          listing: ZJ
        }
      }
    }

    function DJ(JJ) {
      return Object.keys(JJ.files).map((cJ => ({
        path: cJ,
        source: JJ.files[cJ]
      })))
    }
    let sJ = Promise.resolve();

    function nJ(JJ) {
      const cJ = sJ.then(JJ);
      return sJ = cJ.catch((() => {})), cJ
    }

    function GJ(JJ, cJ) {
      return nJ((() => xJ(JJ, cJ)))
    }

    function fJ(JJ, cJ, ZJ) {
      return nJ((async () => JSON.stringify(await (0, AJ.f)()) === JSON.stringify(JJ) && (null === cJ ? (await rJ(), !0) : xJ(cJ, ZJ))))
    }
    async function xJ(JJ, cJ) {
      const ZJ = await eJ.g.setItem(AJ.e, JJ);
      return ZJ && bJ(JJ, cJ), ZJ
    }
    async function rJ() {
      await eJ.g.removeItem(AJ.e), eJ.j.removeItem(XJ.b)
    }

    function vJ() {
      return nJ(rJ)
    }

    function mJ(JJ, cJ) {
      return "active" === QJ(JJ, cJ).kind
    }

    function QJ(JJ, cJ) {
      var ZJ;
      return null === JJ ? {
        kind: "none",
        reason: "nothingStored"
      } : KJ(JJ) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) || JJ.validation.fromRecheck ? null === cJ ? {
        kind: "none",
        reason: "noCompiler"
      } : SJ(JJ, cJ) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : JJ.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function EJ() {
      eJ.k.setItem(jJ, performance.timeOrigin)
    }

    function VJ() {
      return eJ.k.getItem(jJ) === performance.timeOrigin
    }

    function KJ(JJ) {
      return !(0, UJ.i)(JJ.manifest.apiVersion)
    }

    function yJ(JJ) {
      return YJ ??= JJ.Uy((0, qJ.shaderPackTextures)()), YJ
    }

    function SJ(JJ, cJ) {
      var ZJ;
      return (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.headerVersion) !== yJ(cJ)
    }

    function IJ(JJ) {
      return nJ((async () => {
        bJ(await (0, AJ.f)(!0), JJ)
      }))
    }

    function MJ() {
      return nJ((async () => {
        eJ.j.removeItem(XJ.b)
      }))
    }

    function bJ(JJ, cJ) {
      mJ(JJ, cJ) ? eJ.j.setItem(XJ.b, !0) : eJ.j.removeItem(XJ.b)
    }
  },
  5977: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadShaderPackTextures: () => XJ,
      shaderPackTextures: () => AJ
    });
    var FJ = ZJ(5934);
    let UJ = null,
      eJ = null;

    function XJ() {
      return eJ ??= Promise.all([ZJ.e(64), ZJ.e(184)]).then((() => ZJ(39255))).then((JJ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: cJ,
          textureNameToIndex: ZJ,
          textureAnimationData: eJ
        } = JJ;
        return UJ ??= (0, FJ.g)(ZJ, eJ, cJ), UJ
      })), eJ
    }

    function AJ() {
      if (null === UJ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return UJ
    }
  },
  5994: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ,
      f: () => AJ
    });
    var FJ = ZJ(5996),
      UJ = ZJ(5977),
      eJ = ZJ(95);
    const XJ = 100;
    async function AJ(JJ, cJ) {
      var ZJ;
      let FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ZJ = navigator.gpu) && void 0 !== ZJ ? ZJ : null;
      const XJ = JJ.W4(cJ, (0, UJ.shaderPackTextures)());
      if (XJ.errors.length > 0) return jJ(JJ, XJ.errors, XJ.offInStrict);
      const AJ = await async function(JJ) {
        if (!JJ) return null;
        try {
          const cJ = await (0, eJ.u)(JJ);
          return cJ ? await cJ.requestDevice() : null
        } catch (cJ) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", cJ), null
        }
      }(FJ);
      if (!AJ) return null;
      let qJ = !1;
      AJ.lost.then((() => {
        qJ = !0
      }));
      try {
        const cJ = await Promise.all(XJ.validationModules.map((cJ => async function(JJ, cJ, ZJ) {
          cJ.pushErrorScope("validation");
          const FJ = cJ.createShaderModule({
              code: ZJ.code
            }),
            UJ = cJ.popErrorScope(),
            {
              messages: eJ
            } = await FJ.getCompilationInfo(),
            XJ = eJ.filter((JJ => "error" === JJ.type)).map((cJ => JJ.mapValidationMessage(ZJ, cJ))),
            AJ = await UJ;
          AJ && 0 === XJ.length && XJ.push({
            file: null,
            line: 0,
            message: AJ.message,
            variants: [ZJ.key]
          });
          return XJ
        }(JJ, AJ, cJ))));
        return qJ ? null : jJ(JJ, JJ.kZJ(cJ.flat()), XJ.offInStrict)
      } catch (YJ) {
        return console.error("Couldn't validate the shader pack on WebGPU.", YJ), null
      } finally {
        AJ.destroy()
      }
    }
    async function qJ(JJ, cJ) {
      var ZJ;
      if (!(0, FJ.shaderPackNeedsCheck)(JJ, cJ) || (0, FJ.isOtherApiVersion)(JJ)) return JJ;
      const UJ = await AJ(cJ, (0, FJ.storedShaderPackFiles)(JJ));
      if (!UJ) return JJ;
      const eJ = !1 === (null === (ZJ = JJ.validation) || void 0 === ZJ ? void 0 : ZJ.ok) && !JJ.validation.fromRecheck,
        XJ = {
          ...JJ,
          validation: eJ ? UJ : {
            ...UJ,
            fromRecheck: !0
          }
        };
      return await (0, FJ.replaceShaderPack)(JJ, XJ, cJ) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), XJ
    }

    function jJ(JJ, cJ, ZJ) {
      return {
        headerVersion: (0, FJ.pageShaderPackValidationVersion)(JJ),
        ok: 0 === cJ.length,
        errors: cJ.slice(0, XJ),
        moreErrors: Math.max(0, cJ.length - XJ),
        offInStrict: ZJ
      }
    }
  },
  5934: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      d: () => eJ,
      f: () => FJ,
      g: () => nJ,
      j: () => YJ,
      k: () => UJ,
      l: () => qJ,
      o: () => jJ,
      q: () => hJ
    });
    const FJ = 5;

    function UJ(JJ) {
      return JJ === FJ
    }
    const eJ = 262144,
      XJ = 256,
      AJ = 256;

    function qJ(JJ) {
      if ("object" !== typeof JJ || null === JJ || Array.isArray(JJ)) return "The pack has no files.";
      const cJ = [];
      for (const [ZJ, FJ] of Object.entries(JJ)) {
        if ("string" !== typeof FJ) return `${ZJ} isn't text.`;
        cJ.push({
          path: ZJ,
          source: FJ
        })
      }
      return cJ.sort(((JJ, cJ) => YJ(JJ.path, cJ.path))),
        function(JJ) {
          if (0 === JJ.length) return "The pack has no .wgsl files.";
          if (JJ.length > XJ) return `The pack has more than ${XJ} .wgsl files.`;
          const cJ = new Set;
          for (const {
              path: ZJ
            }
            of JJ) {
            const JJ = DJ(ZJ);
            if (null !== JJ) return JJ;
            if (cJ.has(ZJ)) return `The pack has two files at ${ZJ}.`;
            cJ.add(ZJ)
          }
          return hJ(JJ) > eJ ? `The pack's .wgsl files are over ${eJ/1024} KB in total.` : null
        }(cJ) ?? cJ
    }

    function jJ(JJ) {
      const cJ = {};
      for (const ZJ of JJ) cJ[ZJ.path] = ZJ.source;
      return cJ
    }

    function YJ(JJ, cJ) {
      return JJ < cJ ? -1 : JJ > cJ ? 1 : 0
    }

    function hJ(JJ) {
      const cJ = new TextEncoder;
      let ZJ = 0;
      for (const {
          source: FJ
        }
        of JJ) ZJ += cJ.encode(FJ).byteLength;
      return ZJ
    }

    function DJ(JJ) {
      if (!JJ.toLowerCase().endsWith(".wgsl")) return `${JJ} isn't a .wgsl file.`;
      if (JJ.length > AJ) return `A file path is over ${AJ} characters.`;
      if (JJ.includes("\\") || /[\u0000-\u001f]/.test(JJ)) return `${JJ} isn't a valid file path.`;
      return JJ.split("/").some((JJ => "" === JJ || "." === JJ || ".." === JJ)) ? `${JJ} isn't a valid file path.` : null
    }
    const sJ = /^(.*)\[rot\[([1-4])$/;

    function nJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FJ = new Map;
      cJ.forEach(((JJ, cJ) => {
        let {
          numAnimStates: ZJ,
          animStartIdx: UJ
        } = JJ;
        for (let eJ = 1; eJ < ZJ; eJ++) FJ.set(UJ + eJ - 1, cJ)
      }));
      const UJ = Object.entries(JJ),
        eJ = new Map;
      for (const [GJ, fJ] of UJ) {
        const JJ = sJ.exec(GJ);
        "1" === JJ?.[2] && eJ.set(JJ[1], fJ + 1)
      }
      const XJ = JJ => {
          const cJ = sJ.exec(JJ);
          return cJ && eJ.has(cJ[1]) ? {
            root: cJ[1],
            rotation: Number(cJ[2]) - 1
          } : null
        },
        AJ = new Set(UJ.map((JJ => {
          let [cJ] = JJ;
          return XJ(cJ)?.root ?? cJ
        }))),
        qJ = (JJ, ZJ) => {
          const FJ = JJ.replace(/_?0$/, "");
          return (cJ[ZJ]?.numAnimStates ?? 0) > 1 && !AJ.has(FJ) ? FJ : JJ
        },
        jJ = new Map;
      for (const [sJ, GJ] of UJ) jJ.set(GJ, qJ(XJ(sJ)?.root ?? sJ, GJ));
      const YJ = UJ.reduce(((JJ, cJ) => {
          let [, ZJ] = cJ;
          return Math.max(JJ, ZJ + 1)
        }), 0),
        hJ = Array.from({
          length: YJ
        }, ((JJ, cJ) => ({
          id: cJ + 1,
          rotation: 0
        }))),
        DJ = new Map,
        nJ = new Map;
      for (const [sJ, GJ] of UJ) {
        const JJ = XJ(sJ),
          cJ = FJ.get(GJ);
        if (void 0 !== cJ) {
          const ZJ = jJ.get(cJ);
          nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "frame"
          }), JJ && !nJ.has(JJ.root) && nJ.set(JJ.root, {
            name: JJ.root,
            texture: ZJ,
            kind: "frame"
          });
          continue
        }
        const ZJ = jJ.get(GJ),
          UJ = JJ?.root ?? sJ;
        if (ZJ !== UJ && nJ.set(UJ, {
            name: UJ,
            texture: ZJ,
            kind: "frame"
          }), JJ) {
          const cJ = eJ.get(JJ.root);
          hJ[GJ] = {
            id: cJ,
            rotation: JJ.rotation
          }, DJ.set(ZJ, cJ), nJ.set(sJ, {
            name: sJ,
            texture: ZJ,
            kind: "rotation"
          })
        } else DJ.set(ZJ, GJ + 1)
      }
      for (const sJ of DJ.keys()) nJ.delete(sJ);
      for (const [sJ, GJ] of ZJ) {
        const JJ = DJ.get(GJ);
        void 0 === JJ || DJ.has(sJ) || (DJ.set(sJ, JJ), nJ.delete(sJ))
      }
      return {
        named: [...DJ].sort(((JJ, cJ) => {
          let [ZJ] = JJ, [FJ] = cJ;
          return ZJ < FJ ? -1 : ZJ > FJ ? 1 : 0
        })).map((JJ => {
          let [cJ, ZJ] = JJ;
          return {
            name: cJ,
            id: ZJ
          }
        })),
        aliases: [...nJ.values()],
        layers: hJ
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);