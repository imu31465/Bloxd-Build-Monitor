export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6099: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(6101),
      zT = IT(1083);
    const kT = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function WT(TT) {
      let {
        diagnostics: oT,
        more: IT = 0,
        t: WT
      } = TT;
      return (0, zT.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [oT.map(((TT, oT) => {
          const IT = (0, iT.d)(TT),
            XT = function(TT, oT) {
              const IT = (0, iT.c)(null !== TT && void 0 !== TT ? TT : []);
              if (0 === IT.length) return null;
              return IT.map((TT => TT.map((TT => oT(kT[TT]))).join(", "))).join("; ")
            }(TT.variants, WT);
          return (0, zT.jsxs)("li", {
            children: [IT && (0, zT.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: IT
            }), TT.message, XT && (0, zT.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: WT("shaderPack:onlyIn", {
                variants: XT
              })
            })]
          }, oT)
        })), IT > 0 && (0, zT.jsx)("li", {
          children: WT("shaderPack:moreErrors", {
            count: String(IT)
          })
        })]
      })
    }
  },
  6107: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => lT,
      d: () => sT
    });
    var iT = IT(46),
      zT = IT(1042),
      kT = IT.n(zT),
      WT = IT(4439),
      XT = IT(1310),
      BT = IT(1055),
      FT = IT(1408),
      ST = IT(1171),
      DT = IT(90),
      LT = IT(6092),
      xT = IT(6103);
    class cT extends Error {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(TT, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = TT, this.params = oT
      }
    }
    const KT = 1024,
      MT = 101010256,
      rT = 33639248,
      AT = 67324752,
      gT = 22,
      hT = 46,
      wT = 30,
      mT = 65535,
      eT = 65535,
      RT = 4294967295,
      uT = 0,
      vT = 8,
      ET = new TextDecoder;

    function fT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength),
        IT = function(TT) {
          const oT = TT.byteLength - gT;
          for (let IT = oT; IT >= Math.max(0, oT - mT); IT--)
            if (TT.getUint32(IT, !0) === MT && IT + gT + TT.getUint16(IT + 20, !0) <= TT.byteLength) return IT;
          throw new cT("shaderPack:loadNotZip")
        }(oT),
        iT = oT.getUint16(IT + 8, !0),
        zT = oT.getUint16(IT + 10, !0),
        kT = oT.getUint32(IT + 12, !0),
        WT = oT.getUint32(IT + 16, !0);
      if (zT === eT || kT === RT || WT === RT) throw UT();
      if (0 !== oT.getUint16(IT + 4, !0) || 0 !== oT.getUint16(IT + 6, !0) || iT !== zT) throw new cT("shaderPack:loadSplitZip");
      if (zT > KT) throw new cT("shaderPack:loadTooManyZipEntries", {
        count: String(KT)
      });
      const XT = WT + kT;
      if (XT > IT) throw JT();
      const BT = [];
      let FT = WT;
      for (let ST = 0; ST < zT; ST++) {
        if (FT + hT > XT || oT.getUint32(FT, !0) !== rT) throw JT();
        const IT = oT.getUint16(FT + 8, !0),
          iT = oT.getUint16(FT + 10, !0),
          zT = oT.getUint32(FT + 20, !0),
          kT = oT.getUint32(FT + 24, !0),
          ST = oT.getUint16(FT + 28, !0),
          DT = oT.getUint16(FT + 30, !0),
          LT = oT.getUint16(FT + 32, !0),
          xT = oT.getUint32(FT + 42, !0),
          cT = FT + hT;
        if (FT = cT + ST + DT + LT, FT > XT) throw JT();
        if (zT === RT || kT === RT || xT === RT) throw UT();
        const KT = ET.decode(TT.subarray(cT, cT + ST)).replace(/\\/g, "/");
        KT.endsWith("/") || BT.push({
          path: KT,
          method: iT,
          encrypted: 0 !== (1 & IT),
          compressedSize: zT,
          dataOffset: jT(oT, xT, zT, WT)
        })
      }
      return BT
    }
    async function CT(TT, oT, IT) {
      if (oT.encrypted) throw new cT("shaderPack:loadEncrypted", {
        path: oT.path
      });
      if (oT.method === uT) return oT.compressedSize > IT ? null : TT.subarray(oT.dataOffset, oT.dataOffset + oT.compressedSize);
      if (oT.method === vT) return async function(TT, oT, IT) {
        const iT = new Blob([TT]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          zT = [];
        let kT = 0;
        try {
          for (;;) {
            const {
              done: TT,
              value: IT
            } = await iT.read();
            if (TT) break;
            if (kT += IT.byteLength, kT > oT) return await iT.cancel(), null;
            zT.push(IT)
          }
        } catch (BT) {
          throw new cT("shaderPack:loadDecompressFailed", {
            path: IT
          }, {
            cause: BT
          })
        }
        const WT = new Uint8Array(kT);
        let XT = 0;
        for (const FT of zT) WT.set(FT, XT), XT += FT.byteLength;
        return WT
      }(TT.slice(oT.dataOffset, oT.dataOffset + oT.compressedSize), IT, oT.path);
      throw new cT("shaderPack:loadUnsupportedCompression", {
        path: oT.path,
        method: String(oT.method)
      })
    }

    function jT(TT, oT, IT, iT) {
      if (oT + wT > iT || TT.getUint32(oT, !0) !== AT) throw JT();
      const zT = oT + wT + TT.getUint16(oT + 26, !0) + TT.getUint16(oT + 28, !0);
      if (zT + IT > iT) throw JT();
      return zT
    }

    function JT() {
      return new cT("shaderPack:loadZipDamaged")
    }

    function UT() {
      return new cT("shaderPack:loadZip64")
    }
    const aT = 33554432,
      YT = 65536;
    async function QT(TT) {
      if (1 === TT.length && TT[0].name.toLowerCase().endsWith(".zip")) {
        const oT = TT[0];
        if (oT.size > aT) throw new cT("shaderPack:loadZipTooBig", {
          megabytes: String(aT / 1048576)
        });
        return async function(TT) {
          return OT(fT(TT).map((oT => ({
            path: oT.path,
            read: IT => CT(TT, oT, IT)
          }))))
        }(new Uint8Array(await oT.arrayBuffer()))
      }
      return OT(TT.map((TT => ({
        path: HT(TT),
        read: oT => async function(TT, oT) {
          return TT.size > oT ? null : new Uint8Array(await TT.arrayBuffer())
        }(TT, oT)
      }))))
    }
    async function OT(TT) {
      const oT = function(TT) {
          const oT = TT.length > 0 ? TT[0].path.indexOf("/") : -1;
          if (-1 === oT) return TT;
          const IT = TT[0].path.slice(0, oT + 1);
          if (!TT.every((TT => TT.path.startsWith(IT)))) return TT;
          return TT.map((TT => ({
            ...TT,
            path: TT.path.slice(IT.length)
          })))
        }(TT.filter((TT => ! function(TT) {
          const oT = TT.split("/"),
            IT = oT[oT.length - 1];
          return oT.includes("__MACOSX") || IT.startsWith("._") || ".DS_Store" === IT
        }(TT.path)))),
        IT = oT.filter((TT => "pack.json" === TT.path.toLowerCase()));
      if (0 === IT.length) throw new cT("shaderPack:loadNoManifest");
      if (IT.length > 1) throw new cT("shaderPack:loadDuplicateManifest");
      const iT = IT[0],
        zT = await iT.read(YT);
      if (null === zT) throw new cT("shaderPack:loadManifestTooBig", {
        kilobytes: String(YT / 1024)
      });
      const kT = function(TT) {
          let oT;
          try {
            oT = JSON.parse(TT)
          } catch (XT) {
            throw new cT("shaderPack:loadManifestNotJson", {
              error: XT.message
            }, {
              cause: XT
            })
          }
          if ("object" !== typeof oT || null === oT || Array.isArray(oT)) throw new cT("shaderPack:loadManifestNotObject");
          const {
            apiVersion: IT,
            name: iT,
            author: zT,
            description: kT,
            keepCircleShadows: WT
          } = oT;
          if (void 0 === IT) throw new cT("shaderPack:loadNoApiVersion", {
            version: String(xT.e)
          });
          if (!(0, xT.h)(IT)) throw new cT("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(IT),
            version: String(xT.e)
          });
          if ("string" !== typeof iT || "" === iT.trim()) throw new cT("shaderPack:loadNoName");
          if (void 0 !== zT && null !== zT && "string" !== typeof zT) throw new cT("shaderPack:loadAuthorNotString");
          if (void 0 !== kT && null !== kT && "string" !== typeof kT) throw new cT("shaderPack:loadDescriptionNotString");
          if (void 0 !== WT && "boolean" !== typeof WT) throw new cT("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: IT,
            name: iT,
            author: "string" === typeof zT ? zT : null,
            description: "string" === typeof kT && "" !== kT.trim() ? kT : null,
            keepCircleShadows: !0 === WT
          }
        }(nT(zT, iT.path)),
        WT = oT.filter((TT => TT.path.toLowerCase().endsWith(".wgsl"))).sort(((TT, oT) => (0, LT.m)(TT.path, oT.path)));
      if (0 === WT.length) throw new cT("shaderPack:loadNoWgsl");
      if (WT.length > LT.c) throw new cT("shaderPack:loadTooManyWgsl", {
        count: String(LT.c)
      });
      const XT = WT.find(((TT, oT) => oT > 0 && TT.path === WT[oT - 1].path));
      if (XT) throw new cT("shaderPack:loadDuplicatePath", {
        path: XT.path
      });
      const BT = [];
      let FT = LT.f;
      for (const ST of WT) {
        const TT = await ST.read(FT);
        if (null === TT) throw new cT("shaderPack:loadSourceTooBig", {
          kilobytes: String(LT.f / 1024)
        });
        FT -= TT.byteLength, BT.push({
          path: ST.path,
          source: nT(TT, ST.path)
        })
      }
      return {
        manifest: kT,
        files: BT
      }
    }

    function HT(TT) {
      return (TT.webkitRelativePath || TT.path || TT.name).replace(/^\.?\//, "")
    }

    function nT(TT, oT) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(TT)
      } catch (IT) {
        throw new cT("shaderPack:loadNotUtf8", {
          path: oT
        }, {
          cause: IT
        })
      }
    }
    var qT = IT(6101),
      ZT = IT(1083);

    function lT(TT) {
      let {
        busy: oT,
        disabled: IT,
        onFiles: zT
      } = TT;
      const {
        t: LT
      } = (0, ST.t)(), xT = (0, iT.useRef)(null), cT = !(0, DT.isMobile)(), {
        getRootProps: KT,
        getInputProps: MT,
        isDragActive: rT,
        open: AT
      } = (0, WT.e)({
        onDrop: zT,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: IT
      });
      return (0, ZT.jsxs)("div", {
        ...KT({
          className: kT()("ShaderPackDropZone", {
            ActiveDrag: rT,
            Disabled: IT
          })
        }),
        children: [(0, ZT.jsx)("input", {
          ...MT({
            webkitdirectory: "true"
          })
        }), (0, ZT.jsx)("input", {
          ref: xT,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(TT) {
            const oT = Array.from(TT.target.files);
            TT.target.value = "", zT(oT)
          }
        }), oT && (0, ZT.jsx)(XT.d, {}), !oT && (0, ZT.jsxs)(ZT.Fragment, {
          children: [(0, ZT.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, ZT.jsx)(BT.e, {
              name: "up-from-bracket"
            })
          }), (0, ZT.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: LT(cT ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, ZT.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [cT && (0, ZT.jsx)(FT.e, {
              disabled: IT,
              onClick: AT,
              children: LT("shaderPack:chooseFolder")
            }), (0, ZT.jsx)(FT.e, {
              disabled: IT,
              onClick: () => {
                xT.current.click()
              },
              children: LT("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function sT(TT) {
      const {
        t: oT
      } = (0, ST.t)(), [IT, zT] = (0, iT.useState)(!1), [kT, WT] = (0, iT.useState)(null), XT = (0, iT.useRef)(!1);
      return {
        loading: IT,
        error: kT,
        setError: WT,
        onFiles: async function(IT) {
          if (!XT.current) {
            XT.current = !0, zT(!0), WT(null);
            try {
              await TT(await QT(IT))
            } catch (iT) {
              iT instanceof cT ? WT((0, qT.f)(oT, iT.translationKey, iT.params)) : (console.error("Failed to load the shader pack", iT), WT(oT("shaderPack:unexpectedError")))
            } finally {
              XT.current = !1, zT(!1)
            }
          }
        }
      }
    }
  },
  6101: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => WT,
      f: () => kT
    });
    var iT = IT(6103);
    const zT = [TT => TT.strict ? "strict" : "nonStrict", TT => TT.program];

    function kT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const iT = {};
      for (const zT in IT) iT[zT] = `\0${zT}\0`;
      return TT(oT, iT).replace(/\0(\w+)\0/g, ((TT, oT) => IT[oT]))
    }

    function WT(TT) {
      return null === TT.file ? null : TT.line > 0 ? `${TT.file}:${TT.line}` : TT.file
    }

    function XT(TT) {
      const oT = new Map(TT.map((TT => [BT(TT).join("."), TT])));
      if (0 === oT.size) return [];
      const IT = ST([...oT.values()]);
      return 0 === IT[0].length ? [] : IT
    }

    function BT(TT) {
      return zT.map((oT => oT(TT)))
    }
    const FT = zT.map((TT => new Set(iT.g.map(TT)).size));

    function ST(TT) {
      const oT = zT.map((oT => new Set(TT.map(oT)))),
        IT = oT.reduce(((TT, oT) => TT * oT.size), 1),
        iT = oT.every(((TT, oT) => 1 === TT.size || TT.size === FT[oT]));
      if (IT === TT.length && iT) return [zT.filter(((TT, IT) => 1 === oT[IT].size)).map((oT => oT(TT[0])))];
      let kT = null;
      for (let WT = 0; WT < zT.length; WT++) {
        if (1 === oT[WT].size) continue;
        const IT = DT(TT, zT[WT]).flatMap(ST);
        (null === kT || IT.length < kT.length) && (kT = IT)
      }
      return kT
    }

    function DT(TT, oT) {
      const IT = new Map;
      for (const zT of TT) {
        var iT;
        const TT = oT(zT);
        IT.set(TT, [...null !== (iT = IT.get(TT)) && void 0 !== iT ? iT : [], zT])
      }
      return [...IT.values()]
    }
  },
  6103: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT.g,
      g: () => zT,
      h: () => iT.q
    });
    var iT = IT(6092);
    const zT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((oT => ({
      strict: TT,
      program: oT
    })))))
  },
  6154: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      forgetShaderPackActiveHint: () => fT,
      isOtherApiVersion: () => RT,
      isShaderPackActive: () => hT,
      isShaderPackChangePending: () => eT,
      markShaderPackChangePending: () => mT,
      pageShaderPackValidationVersion: () => uT,
      reconcileStoredShaderPackHint: () => ET,
      removeShaderPack: () => gT,
      replaceShaderPack: () => MT,
      saveShaderPack: () => KT,
      shaderPackNeedsCheck: () => vT,
      storedPackOutcome: () => wT,
      storedShaderPackFiles: () => LT,
      toStoredShaderPack: () => DT
    });
    var iT = IT(6092),
      zT = IT(6103),
      kT = IT(26),
      WT = IT(3012),
      XT = IT(6158),
      BT = IT(6138);
    const FT = "shaderPackChangePending";
    let ST = null;

    function DT(TT, oT, IT) {
      return {
        manifest: TT.manifest,
        files: (0, iT.t)(TT.files),
        validation: oT,
        ...IT && {
          listing: IT
        }
      }
    }

    function LT(TT) {
      return Object.keys(TT.files).map((oT => ({
        path: oT,
        source: TT.files[oT]
      })))
    }
    let xT = Promise.resolve();

    function cT(TT) {
      const oT = xT.then(TT);
      return xT = oT.catch((() => {})), oT
    }

    function KT(TT, oT) {
      return cT((() => rT(TT, oT)))
    }

    function MT(TT, oT, IT) {
      return cT((async () => JSON.stringify(await (0, XT.e)()) === JSON.stringify(TT) && (null === oT ? (await AT(), !0) : rT(oT, IT))))
    }
    async function rT(TT, oT) {
      const IT = await kT.c.setItem(XT.d, TT);
      return IT && CT(TT, oT), IT
    }
    async function AT() {
      await kT.c.removeItem(XT.d), kT.e.removeItem(WT.e)
    }

    function gT() {
      return cT(AT)
    }

    function hT(TT, oT) {
      return "active" === wT(TT, oT).kind
    }

    function wT(TT, oT) {
      var IT;
      return null === TT ? {
        kind: "none",
        reason: "nothingStored"
      } : RT(TT) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.ok) || TT.validation.fromRecheck ? null === oT ? {
        kind: "none",
        reason: "noCompiler"
      } : vT(TT, oT) ? {
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

    function mT() {
      kT.h.setItem(FT, performance.timeOrigin)
    }

    function eT() {
      return kT.h.getItem(FT) === performance.timeOrigin
    }

    function RT(TT) {
      return !(0, zT.h)(TT.manifest.apiVersion)
    }

    function uT(TT) {
      return ST ??= TT.ZC((0, BT.shaderPackTextures)()), ST
    }

    function vT(TT, oT) {
      var IT;
      return (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.headerVersion) !== uT(oT)
    }

    function ET(TT) {
      return cT((async () => {
        CT(await (0, XT.e)(!0), TT)
      }))
    }

    function fT() {
      return cT((async () => {
        kT.e.removeItem(WT.e)
      }))
    }

    function CT(TT, oT) {
      hT(TT, oT) ? kT.e.setItem(WT.e, !0) : kT.e.removeItem(WT.e)
    }
  },
  6138: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      loadShaderPackTextures: () => WT,
      shaderPackTextures: () => XT
    });
    var iT = IT(6092);
    let zT = null,
      kT = null;

    function WT() {
      return kT ??= Promise.all([IT.e(69), IT.e(193)]).then((() => IT(39278))).then((TT => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: oT,
          textureNameToIndex: IT,
          textureAnimationData: kT
        } = TT;
        return zT ??= (0, iT.k)(IT, kT, oT), zT
      })), kT
    }

    function XT() {
      if (null === zT) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return zT
    }
  },
  6146: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => BT,
      c: () => XT
    });
    var iT = IT(6154),
      zT = IT(6138),
      kT = IT(120);
    const WT = 100;
    async function XT(TT, oT) {
      var IT;
      let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (IT = navigator.gpu) && void 0 !== IT ? IT : null;
      const WT = TT.v_(oT, (0, zT.shaderPackTextures)());
      if (WT.errors.length > 0) return FT(TT, WT.errors, WT.offInStrict);
      const XT = await async function(TT) {
        if (!TT) return null;
        try {
          const oT = await (0, kT.u)(TT);
          return oT ? await oT.requestDevice() : null
        } catch (oT) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", oT), null
        }
      }(iT);
      if (!XT) return null;
      let BT = !1;
      XT.lost.then((() => {
        BT = !0
      }));
      try {
        const oT = await Promise.all(WT.validationModules.map((oT => async function(TT, oT, IT) {
          oT.pushErrorScope("validation");
          const iT = oT.createShaderModule({
              code: IT.code
            }),
            zT = oT.popErrorScope(),
            {
              messages: kT
            } = await iT.getCompilationInfo(),
            WT = kT.filter((TT => "error" === TT.type)).map((oT => TT.mapValidationMessage(IT, oT))),
            XT = await zT;
          XT && 0 === WT.length && WT.push({
            file: null,
            line: 0,
            message: XT.message,
            variants: [IT.key]
          });
          return WT
        }(TT, XT, oT))));
        return BT ? null : FT(TT, TT.EIT(oT.flat()), WT.offInStrict)
      } catch (ST) {
        return console.error("Couldn't validate the shader pack on WebGPU.", ST), null
      } finally {
        XT.destroy()
      }
    }
    async function BT(TT, oT) {
      var IT;
      if (!(0, iT.shaderPackNeedsCheck)(TT, oT) || (0, iT.isOtherApiVersion)(TT)) return TT;
      const zT = await XT(oT, (0, iT.storedShaderPackFiles)(TT));
      if (!zT) return TT;
      const kT = !1 === (null === (IT = TT.validation) || void 0 === IT ? void 0 : IT.ok) && !TT.validation.fromRecheck,
        WT = {
          ...TT,
          validation: kT ? zT : {
            ...zT,
            fromRecheck: !0
          }
        };
      return await (0, iT.replaceShaderPack)(TT, WT, oT) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), WT
    }

    function FT(TT, oT, IT) {
      return {
        headerVersion: (0, iT.pageShaderPackValidationVersion)(TT),
        ok: 0 === oT.length,
        errors: oT.slice(0, WT),
        moreErrors: Math.max(0, oT.length - WT),
        offInStrict: IT
      }
    }
  },
  6092: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT,
      f: () => kT,
      g: () => iT,
      k: () => cT,
      m: () => ST,
      q: () => zT,
      r: () => BT,
      t: () => FT,
      u: () => DT
    });
    const iT = 5;

    function zT(TT) {
      return TT === iT
    }
    const kT = 262144,
      WT = 256,
      XT = 256;

    function BT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const oT = [];
      for (const [IT, iT] of Object.entries(TT)) {
        if ("string" !== typeof iT) return `${IT} isn't text.`;
        oT.push({
          path: IT,
          source: iT
        })
      }
      return oT.sort(((TT, oT) => ST(TT.path, oT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > WT) return `The pack has more than ${WT} .wgsl files.`;
          const oT = new Set;
          for (const {
              path: IT
            }
            of TT) {
            const TT = LT(IT);
            if (null !== TT) return TT;
            if (oT.has(IT)) return `The pack has two files at ${IT}.`;
            oT.add(IT)
          }
          return DT(TT) > kT ? `The pack's .wgsl files are over ${kT/1024} KB in total.` : null
        }(oT) ?? oT
    }

    function FT(TT) {
      const oT = {};
      for (const IT of TT) oT[IT.path] = IT.source;
      return oT
    }

    function ST(TT, oT) {
      return TT < oT ? -1 : TT > oT ? 1 : 0
    }

    function DT(TT) {
      const oT = new TextEncoder;
      let IT = 0;
      for (const {
          source: iT
        }
        of TT) IT += oT.encode(iT).byteLength;
      return IT
    }

    function LT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > XT) return `A file path is over ${XT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const xT = /^(.*)\[rot\[([1-4])$/;

    function cT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const iT = new Map;
      oT.forEach(((TT, oT) => {
        let {
          numAnimStates: IT,
          animStartIdx: zT
        } = TT;
        for (let kT = 1; kT < IT; kT++) iT.set(zT + kT - 1, oT)
      }));
      const zT = Object.entries(TT),
        kT = new Map;
      for (const [KT, MT] of zT) {
        const TT = xT.exec(KT);
        "1" === TT?.[2] && kT.set(TT[1], MT + 1)
      }
      const WT = TT => {
          const oT = xT.exec(TT);
          return oT && kT.has(oT[1]) ? {
            root: oT[1],
            rotation: Number(oT[2]) - 1
          } : null
        },
        XT = new Set(zT.map((TT => {
          let [oT] = TT;
          return WT(oT)?.root ?? oT
        }))),
        BT = (TT, IT) => {
          const iT = TT.replace(/_?0$/, "");
          return (oT[IT]?.numAnimStates ?? 0) > 1 && !XT.has(iT) ? iT : TT
        },
        FT = new Map;
      for (const [xT, KT] of zT) FT.set(KT, BT(WT(xT)?.root ?? xT, KT));
      const ST = zT.reduce(((TT, oT) => {
          let [, IT] = oT;
          return Math.max(TT, IT + 1)
        }), 0),
        DT = Array.from({
          length: ST
        }, ((TT, oT) => ({
          id: oT + 1,
          rotation: 0
        }))),
        LT = new Map,
        cT = new Map;
      for (const [xT, KT] of zT) {
        const TT = WT(xT),
          oT = iT.get(KT);
        if (void 0 !== oT) {
          const IT = FT.get(oT);
          cT.set(xT, {
            name: xT,
            texture: IT,
            kind: "frame"
          }), TT && !cT.has(TT.root) && cT.set(TT.root, {
            name: TT.root,
            texture: IT,
            kind: "frame"
          });
          continue
        }
        const IT = FT.get(KT),
          zT = TT?.root ?? xT;
        if (IT !== zT && cT.set(zT, {
            name: zT,
            texture: IT,
            kind: "frame"
          }), TT) {
          const oT = kT.get(TT.root);
          DT[KT] = {
            id: oT,
            rotation: TT.rotation
          }, LT.set(IT, oT), cT.set(xT, {
            name: xT,
            texture: IT,
            kind: "rotation"
          })
        } else LT.set(IT, KT + 1)
      }
      for (const xT of LT.keys()) cT.delete(xT);
      for (const [xT, KT] of IT) {
        const TT = LT.get(KT);
        void 0 === TT || LT.has(xT) || (LT.set(xT, TT), cT.delete(xT))
      }
      return {
        named: [...LT].sort(((TT, oT) => {
          let [IT] = TT, [iT] = oT;
          return IT < iT ? -1 : IT > iT ? 1 : 0
        })).map((TT => {
          let [oT, IT] = TT;
          return {
            name: oT,
            id: IT
          }
        })),
        aliases: [...cT.values()],
        layers: DT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);