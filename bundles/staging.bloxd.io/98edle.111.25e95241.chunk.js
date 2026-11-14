export const id = 111;
export const ids = [111, 113, 116];
export const modules = {
  5605: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(5613),
      CW = MW(940);
    const zR = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function AW(WW) {
      let {
        diagnostics: RW,
        more: MW = 0,
        t: AW
      } = WW;
      return (0, CW.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [RW.map(((WW, RW) => {
          const MW = (0, wW.e)(WW),
            bR = function(WW, RW) {
              const MW = (0, wW.d)(null !== WW && void 0 !== WW ? WW : []);
              if (0 === MW.length) return null;
              return MW.map((WW => WW.map((WW => RW(zR[WW]))).join(", "))).join("; ")
            }(WW.variants, AW);
          return (0, CW.jsxs)("li", {
            children: [MW && (0, CW.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: MW
            }), WW.message, bR && (0, CW.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: AW("shaderPack:onlyIn", {
                variants: bR
              })
            })]
          }, RW)
        })), MW > 0 && (0, CW.jsx)("li", {
          children: AW("shaderPack:moreErrors", {
            count: String(MW)
          })
        })]
      })
    }
  },
  5619: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => KW,
      h: () => uW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(3933),
      bR = MW(1157),
      yR = MW(904),
      NW = MW(1255),
      eW = MW(1027),
      BW = MW(116),
      tR = MW(5596),
      TW = MW(5615);
    class gR extends Error {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(WW, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = WW, this.params = RW
      }
    }
    const iR = 1024,
      YW = 101010256,
      JW = 33639248,
      PW = 67324752,
      IW = 22,
      oW = 46,
      lW = 30,
      FW = 65535,
      fW = 65535,
      QW = 4294967295,
      rR = 0,
      cR = 8,
      XW = new TextDecoder;

    function jR(WW) {
      const RW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength),
        MW = function(WW) {
          const RW = WW.byteLength - IW;
          for (let MW = RW; MW >= Math.max(0, RW - FW); MW--)
            if (WW.getUint32(MW, !0) === YW && MW + IW + WW.getUint16(MW + 20, !0) <= WW.byteLength) return MW;
          throw new gR("shaderPack:loadNotZip")
        }(RW),
        wW = RW.getUint16(MW + 8, !0),
        CW = RW.getUint16(MW + 10, !0),
        zR = RW.getUint32(MW + 12, !0),
        AW = RW.getUint32(MW + 16, !0);
      if (CW === fW || zR === QW || AW === QW) throw dW();
      if (0 !== RW.getUint16(MW + 4, !0) || 0 !== RW.getUint16(MW + 6, !0) || wW !== CW) throw new gR("shaderPack:loadSplitZip");
      if (CW > iR) throw new gR("shaderPack:loadTooManyZipEntries", {
        count: String(iR)
      });
      const bR = AW + zR;
      if (bR > MW) throw sW();
      const yR = [];
      let NW = AW;
      for (let eW = 0; eW < CW; eW++) {
        if (NW + oW > bR || RW.getUint32(NW, !0) !== JW) throw sW();
        const MW = RW.getUint16(NW + 8, !0),
          wW = RW.getUint16(NW + 10, !0),
          CW = RW.getUint32(NW + 20, !0),
          zR = RW.getUint32(NW + 24, !0),
          eW = RW.getUint16(NW + 28, !0),
          BW = RW.getUint16(NW + 30, !0),
          tR = RW.getUint16(NW + 32, !0),
          TW = RW.getUint32(NW + 42, !0),
          gR = NW + oW;
        if (NW = gR + eW + BW + tR, NW > bR) throw sW();
        if (CW === QW || zR === QW || TW === QW) throw dW();
        const iR = XW.decode(WW.subarray(gR, gR + eW)).replace(/\\/g, "/");
        iR.endsWith("/") || yR.push({
          path: iR,
          method: wW,
          encrypted: 0 !== (1 & MW),
          compressedSize: CW,
          dataOffset: aR(RW, TW, CW, AW)
        })
      }
      return yR
    }
    async function kR(WW, RW, MW) {
      if (RW.encrypted) throw new gR("shaderPack:loadEncrypted", {
        path: RW.path
      });
      if (RW.method === rR) return RW.compressedSize > MW ? null : WW.subarray(RW.dataOffset, RW.dataOffset + RW.compressedSize);
      if (RW.method === cR) return async function(WW, RW, MW) {
        const wW = new Blob([WW]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          CW = [];
        let zR = 0;
        try {
          for (;;) {
            const {
              done: WW,
              value: MW
            } = await wW.read();
            if (WW) break;
            if (zR += MW.byteLength, zR > RW) return await wW.cancel(), null;
            CW.push(MW)
          }
        } catch (yR) {
          throw new gR("shaderPack:loadDecompressFailed", {
            path: MW
          }, {
            cause: yR
          })
        }
        const AW = new Uint8Array(zR);
        let bR = 0;
        for (const NW of CW) AW.set(NW, bR), bR += NW.byteLength;
        return AW
      }(WW.slice(RW.dataOffset, RW.dataOffset + RW.compressedSize), MW, RW.path);
      throw new gR("shaderPack:loadUnsupportedCompression", {
        path: RW.path,
        method: String(RW.method)
      })
    }

    function aR(WW, RW, MW, wW) {
      if (RW + lW > wW || WW.getUint32(RW, !0) !== PW) throw sW();
      const CW = RW + lW + WW.getUint16(RW + 26, !0) + WW.getUint16(RW + 28, !0);
      if (CW + MW > wW) throw sW();
      return CW
    }

    function sW() {
      return new gR("shaderPack:loadZipDamaged")
    }

    function dW() {
      return new gR("shaderPack:loadZip64")
    }
    const pW = 33554432,
      hW = 65536;
    async function UW(WW) {
      if (1 === WW.length && WW[0].name.toLowerCase().endsWith(".zip")) {
        const RW = WW[0];
        if (RW.size > pW) throw new gR("shaderPack:loadZipTooBig", {
          megabytes: String(pW / 1048576)
        });
        return async function(WW) {
          return EW(jR(WW).map((RW => ({
            path: RW.path,
            read: MW => kR(WW, RW, MW)
          }))))
        }(new Uint8Array(await RW.arrayBuffer()))
      }
      return EW(WW.map((WW => ({
        path: VW(WW),
        read: RW => async function(WW, RW) {
          return WW.size > RW ? null : new Uint8Array(await WW.arrayBuffer())
        }(WW, RW)
      }))))
    }
    async function EW(WW) {
      const RW = function(WW) {
          const RW = WW.length > 0 ? WW[0].path.indexOf("/") : -1;
          if (-1 === RW) return WW;
          const MW = WW[0].path.slice(0, RW + 1);
          if (!WW.every((WW => WW.path.startsWith(MW)))) return WW;
          return WW.map((WW => ({
            ...WW,
            path: WW.path.slice(MW.length)
          })))
        }(WW.filter((WW => ! function(WW) {
          const RW = WW.split("/"),
            MW = RW[RW.length - 1];
          return RW.includes("__MACOSX") || MW.startsWith("._") || ".DS_Store" === MW
        }(WW.path)))),
        MW = RW.filter((WW => "pack.json" === WW.path.toLowerCase()));
      if (0 === MW.length) throw new gR("shaderPack:loadNoManifest");
      if (MW.length > 1) throw new gR("shaderPack:loadDuplicateManifest");
      const wW = MW[0],
        CW = await wW.read(hW);
      if (null === CW) throw new gR("shaderPack:loadManifestTooBig", {
        kilobytes: String(hW / 1024)
      });
      const zR = function(WW) {
          let RW;
          try {
            RW = JSON.parse(WW)
          } catch (bR) {
            throw new gR("shaderPack:loadManifestNotJson", {
              error: bR.message
            }, {
              cause: bR
            })
          }
          if ("object" !== typeof RW || null === RW || Array.isArray(RW)) throw new gR("shaderPack:loadManifestNotObject");
          const {
            apiVersion: MW,
            name: wW,
            author: CW,
            description: zR,
            keepCircleShadows: AW
          } = RW;
          if (void 0 === MW) throw new gR("shaderPack:loadNoApiVersion", {
            version: String(TW.e)
          });
          if (!(0, TW.j)(MW)) throw new gR("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(MW),
            version: String(TW.e)
          });
          if ("string" !== typeof wW || "" === wW.trim()) throw new gR("shaderPack:loadNoName");
          if (void 0 !== CW && null !== CW && "string" !== typeof CW) throw new gR("shaderPack:loadAuthorNotString");
          if (void 0 !== zR && null !== zR && "string" !== typeof zR) throw new gR("shaderPack:loadDescriptionNotString");
          if (void 0 !== AW && "boolean" !== typeof AW) throw new gR("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: MW,
            name: wW,
            author: "string" === typeof CW ? CW : null,
            description: "string" === typeof zR && "" !== zR.trim() ? zR : null,
            keepCircleShadows: !0 === AW
          }
        }(mR(CW, wW.path)),
        AW = RW.filter((WW => WW.path.toLowerCase().endsWith(".wgsl"))).sort(((WW, RW) => (0, tR.h)(WW.path, RW.path)));
      if (0 === AW.length) throw new gR("shaderPack:loadNoWgsl");
      if (AW.length > tR.c) throw new gR("shaderPack:loadTooManyWgsl", {
        count: String(tR.c)
      });
      const bR = AW.find(((WW, RW) => RW > 0 && WW.path === AW[RW - 1].path));
      if (bR) throw new gR("shaderPack:loadDuplicatePath", {
        path: bR.path
      });
      const yR = [];
      let NW = tR.e;
      for (const eW of AW) {
        const WW = await eW.read(NW);
        if (null === WW) throw new gR("shaderPack:loadSourceTooBig", {
          kilobytes: String(tR.e / 1024)
        });
        NW -= WW.byteLength, yR.push({
          path: eW.path,
          source: mR(WW, eW.path)
        })
      }
      return {
        manifest: zR,
        files: yR
      }
    }

    function VW(WW) {
      return (WW.webkitRelativePath || WW.path || WW.name).replace(/^\.?\//, "")
    }

    function mR(WW, RW) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(WW)
      } catch (MW) {
        throw new gR("shaderPack:loadNotUtf8", {
          path: RW
        }, {
          cause: MW
        })
      }
    }
    var xR = MW(5613),
      vR = MW(940);

    function KW(WW) {
      let {
        busy: RW,
        disabled: MW,
        onFiles: CW
      } = WW;
      const {
        t: tR
      } = (0, eW.C)(), TW = (0, wW.useRef)(null), gR = !(0, BW.isMobile)(), {
        getRootProps: iR,
        getInputProps: YW,
        isDragActive: JW,
        open: PW
      } = (0, AW.d)({
        onDrop: CW,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: MW
      });
      return (0, vR.jsxs)("div", {
        ...iR({
          className: zR()("ShaderPackDropZone", {
            ActiveDrag: JW,
            Disabled: MW
          })
        }),
        children: [(0, vR.jsx)("input", {
          ...YW({
            webkitdirectory: "true"
          })
        }), (0, vR.jsx)("input", {
          ref: TW,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(WW) {
            const RW = Array.from(WW.target.files);
            WW.target.value = "", CW(RW)
          }
        }), RW && (0, vR.jsx)(bR.d, {}), !RW && (0, vR.jsxs)(vR.Fragment, {
          children: [(0, vR.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, vR.jsx)(yR.e, {
              name: "up-from-bracket"
            })
          }), (0, vR.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: tR(gR ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, vR.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [gR && (0, vR.jsx)(NW.h, {
              disabled: MW,
              onClick: PW,
              children: tR("shaderPack:chooseFolder")
            }), (0, vR.jsx)(NW.h, {
              disabled: MW,
              onClick: () => {
                TW.current.click()
              },
              children: tR("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function uW(WW) {
      const {
        t: RW
      } = (0, eW.C)(), [MW, CW] = (0, wW.useState)(!1), [zR, AW] = (0, wW.useState)(null), bR = (0, wW.useRef)(!1);
      return {
        loading: MW,
        error: zR,
        setError: AW,
        onFiles: async function(MW) {
          if (!bR.current) {
            bR.current = !0, CW(!0), AW(null);
            try {
              await WW(await UW(MW))
            } catch (wW) {
              wW instanceof gR ? AW((0, xR.g)(RW, wW.translationKey, wW.params)) : (console.error("Failed to load the shader pack", wW), AW(RW("shaderPack:unexpectedError")))
            } finally {
              bR.current = !1, CW(!1)
            }
          }
        }
      }
    }
  },
  5613: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      e: () => AW,
      g: () => zR
    });
    var wW = MW(5615);
    const CW = [WW => WW.strict ? "strict" : "nonStrict", WW => WW.program];

    function zR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wW = {};
      for (const CW in MW) wW[CW] = `\0${CW}\0`;
      return WW(RW, wW).replace(/\0(\w+)\0/g, ((WW, RW) => MW[RW]))
    }

    function AW(WW) {
      return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
    }

    function bR(WW) {
      const RW = new Map(WW.map((WW => [yR(WW).join("."), WW])));
      if (0 === RW.size) return [];
      const MW = eW([...RW.values()]);
      return 0 === MW[0].length ? [] : MW
    }

    function yR(WW) {
      return CW.map((RW => RW(WW)))
    }
    const NW = CW.map((WW => new Set(wW.g.map(WW)).size));

    function eW(WW) {
      const RW = CW.map((RW => new Set(WW.map(RW)))),
        MW = RW.reduce(((WW, RW) => WW * RW.size), 1),
        wW = RW.every(((WW, RW) => 1 === WW.size || WW.size === NW[RW]));
      if (MW === WW.length && wW) return [CW.filter(((WW, MW) => 1 === RW[MW].size)).map((RW => RW(WW[0])))];
      let zR = null;
      for (let AW = 0; AW < CW.length; AW++) {
        if (1 === RW[AW].size) continue;
        const MW = BW(WW, CW[AW]).flatMap(eW);
        (null === zR || MW.length < zR.length) && (zR = MW)
      }
      return zR
    }

    function BW(WW, RW) {
      const MW = new Map;
      for (const CW of WW) {
        var wW;
        const WW = RW(CW);
        MW.set(WW, [...null !== (wW = MW.get(WW)) && void 0 !== wW ? wW : [], CW])
      }
      return [...MW.values()]
    }
  },
  5615: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.f,
      g: () => CW,
      j: () => wW.l
    });
    var wW = MW(5596);
    const CW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((RW => ({
      strict: WW,
      program: RW
    })))))
  },
  5656: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      forgetShaderPackActiveHint: () => jR,
      isOtherApiVersion: () => QW,
      isShaderPackActive: () => oW,
      isShaderPackChangePending: () => fW,
      markShaderPackChangePending: () => FW,
      pageShaderPackValidationVersion: () => rR,
      reconcileStoredShaderPackHint: () => XW,
      removeShaderPack: () => IW,
      replaceShaderPack: () => YW,
      saveShaderPack: () => iR,
      shaderPackNeedsCheck: () => cR,
      storedPackOutcome: () => lW,
      storedShaderPackFiles: () => tR,
      toStoredShaderPack: () => BW
    });
    var wW = MW(5596),
      CW = MW(5615),
      zR = MW(50),
      AW = MW(2518),
      bR = MW(5661),
      yR = MW(5638);
    const NW = "shaderPackChangePending";
    let eW = null;

    function BW(WW, RW, MW) {
      return {
        manifest: WW.manifest,
        files: (0, wW.r)(WW.files),
        validation: RW,
        ...MW && {
          listing: MW
        }
      }
    }

    function tR(WW) {
      return Object.keys(WW.files).map((RW => ({
        path: RW,
        source: WW.files[RW]
      })))
    }
    let TW = Promise.resolve();

    function gR(WW) {
      const RW = TW.then(WW);
      return TW = RW.catch((() => {})), RW
    }

    function iR(WW, RW) {
      return gR((() => JW(WW, RW)))
    }

    function YW(WW, RW, MW) {
      return gR((async () => JSON.stringify(await (0, bR.h)()) === JSON.stringify(WW) && (null === RW ? (await PW(), !0) : JW(RW, MW))))
    }
    async function JW(WW, RW) {
      const MW = await zR.e.setItem(bR.e, WW);
      return MW && kR(WW, RW), MW
    }
    async function PW() {
      await zR.e.removeItem(bR.e), zR.g.removeItem(AW.c)
    }

    function IW() {
      return gR(PW)
    }

    function oW(WW, RW) {
      return "active" === lW(WW, RW).kind
    }

    function lW(WW, RW) {
      var MW;
      return null === WW ? {
        kind: "none",
        reason: "nothingStored"
      } : QW(WW) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) || WW.validation.fromRecheck ? null === RW ? {
        kind: "none",
        reason: "noCompiler"
      } : cR(WW, RW) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : WW.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function FW() {
      zR.j.setItem(NW, performance.timeOrigin)
    }

    function fW() {
      return zR.j.getItem(NW) === performance.timeOrigin
    }

    function QW(WW) {
      return !(0, CW.j)(WW.manifest.apiVersion)
    }

    function rR(WW) {
      return eW ??= WW.oRW((0, yR.shaderPackTextures)()), eW
    }

    function cR(WW, RW) {
      var MW;
      return (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.headerVersion) !== rR(RW)
    }

    function XW(WW) {
      return gR((async () => {
        kR(await (0, bR.h)(!0), WW)
      }))
    }

    function jR() {
      return gR((async () => {
        zR.g.removeItem(AW.c)
      }))
    }

    function kR(WW, RW) {
      oW(WW, RW) ? zR.g.setItem(AW.c, !0) : zR.g.removeItem(AW.c)
    }
  },
  5638: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadShaderPackTextures: () => AW,
      shaderPackTextures: () => bR
    });
    var wW = MW(5596);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= Promise.all([MW.e(59), MW.e(177)]).then((() => MW(38083))).then((WW => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: RW,
          textureNameToIndex: MW,
          textureAnimationData: zR
        } = WW;
        return CW ??= (0, wW.g)(MW, zR, RW), CW
      })), zR
    }

    function bR() {
      if (null === CW) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return CW
    }
  },
  5653: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR,
      f: () => bR
    });
    var wW = MW(5656),
      CW = MW(5638),
      zR = MW(137);
    const AW = 100;
    async function bR(WW, RW) {
      var MW;
      let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (MW = navigator.gpu) && void 0 !== MW ? MW : null;
      const AW = WW.wAW(RW, (0, CW.shaderPackTextures)());
      if (AW.errors.length > 0) return NW(WW, AW.errors, AW.offInStrict);
      const bR = await async function(WW) {
        if (!WW) return null;
        try {
          const RW = await (0, zR.p)(WW);
          return RW ? await RW.requestDevice() : null
        } catch (RW) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", RW), null
        }
      }(wW);
      if (!bR) return null;
      let yR = !1;
      bR.lost.then((() => {
        yR = !0
      }));
      try {
        const RW = await Promise.all(AW.validationModules.map((RW => async function(WW, RW, MW) {
          RW.pushErrorScope("validation");
          const wW = RW.createShaderModule({
              code: MW.code
            }),
            CW = RW.popErrorScope(),
            {
              messages: zR
            } = await wW.getCompilationInfo(),
            AW = zR.filter((WW => "error" === WW.type)).map((RW => WW.mapValidationMessage(MW, RW))),
            bR = await CW;
          bR && 0 === AW.length && AW.push({
            file: null,
            line: 0,
            message: bR.message,
            variants: [MW.key]
          });
          return AW
        }(WW, bR, RW))));
        return yR ? null : NW(WW, WW.ZyW(RW.flat()), AW.offInStrict)
      } catch (eW) {
        return console.error("Couldn't validate the shader pack on WebGPU.", eW), null
      } finally {
        bR.destroy()
      }
    }
    async function yR(WW, RW) {
      var MW;
      if (!(0, wW.shaderPackNeedsCheck)(WW, RW) || (0, wW.isOtherApiVersion)(WW)) return WW;
      const CW = await bR(RW, (0, wW.storedShaderPackFiles)(WW));
      if (!CW) return WW;
      const zR = !1 === (null === (MW = WW.validation) || void 0 === MW ? void 0 : MW.ok) && !WW.validation.fromRecheck,
        AW = {
          ...WW,
          validation: zR ? CW : {
            ...CW,
            fromRecheck: !0
          }
        };
      return await (0, wW.replaceShaderPack)(WW, AW, RW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), AW
    }

    function NW(WW, RW, MW) {
      return {
        headerVersion: (0, wW.pageShaderPackValidationVersion)(WW),
        ok: 0 === RW.length,
        errors: RW.slice(0, AW),
        moreErrors: Math.max(0, RW.length - AW),
        offInStrict: MW
      }
    }
  },
  5596: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      e: () => zR,
      f: () => wW,
      g: () => gR,
      h: () => eW,
      l: () => CW,
      n: () => yR,
      r: () => NW,
      v: () => BW
    });
    const wW = 5;

    function CW(WW) {
      return WW === wW
    }
    const zR = 262144,
      AW = 256,
      bR = 256;

    function yR(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const RW = [];
      for (const [MW, wW] of Object.entries(WW)) {
        if ("string" !== typeof wW) return `${MW} isn't text.`;
        RW.push({
          path: MW,
          source: wW
        })
      }
      return RW.sort(((WW, RW) => eW(WW.path, RW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > AW) return `The pack has more than ${AW} .wgsl files.`;
          const RW = new Set;
          for (const {
              path: MW
            }
            of WW) {
            const WW = tR(MW);
            if (null !== WW) return WW;
            if (RW.has(MW)) return `The pack has two files at ${MW}.`;
            RW.add(MW)
          }
          return BW(WW) > zR ? `The pack's .wgsl files are over ${zR/1024} KB in total.` : null
        }(RW) ?? RW
    }

    function NW(WW) {
      const RW = {};
      for (const MW of WW) RW[MW.path] = MW.source;
      return RW
    }

    function eW(WW, RW) {
      return WW < RW ? -1 : WW > RW ? 1 : 0
    }

    function BW(WW) {
      const RW = new TextEncoder;
      let MW = 0;
      for (const {
          source: wW
        }
        of WW) MW += RW.encode(wW).byteLength;
      return MW
    }

    function tR(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > bR) return `A file path is over ${bR} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const TW = /^(.*)\[rot\[([1-4])$/;

    function gR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wW = new Map;
      RW.forEach(((WW, RW) => {
        let {
          numAnimStates: MW,
          animStartIdx: CW
        } = WW;
        for (let zR = 1; zR < MW; zR++) wW.set(CW + zR - 1, RW)
      }));
      const CW = Object.entries(WW),
        zR = new Map;
      for (const [iR, YW] of CW) {
        const WW = TW.exec(iR);
        "1" === WW?.[2] && zR.set(WW[1], YW + 1)
      }
      const AW = WW => {
          const RW = TW.exec(WW);
          return RW && zR.has(RW[1]) ? {
            root: RW[1],
            rotation: Number(RW[2]) - 1
          } : null
        },
        bR = new Set(CW.map((WW => {
          let [RW] = WW;
          return AW(RW)?.root ?? RW
        }))),
        yR = (WW, MW) => {
          const wW = WW.replace(/_?0$/, "");
          return (RW[MW]?.numAnimStates ?? 0) > 1 && !bR.has(wW) ? wW : WW
        },
        NW = new Map;
      for (const [TW, iR] of CW) NW.set(iR, yR(AW(TW)?.root ?? TW, iR));
      const eW = CW.reduce(((WW, RW) => {
          let [, MW] = RW;
          return Math.max(WW, MW + 1)
        }), 0),
        BW = Array.from({
          length: eW
        }, ((WW, RW) => ({
          id: RW + 1,
          rotation: 0
        }))),
        tR = new Map,
        gR = new Map;
      for (const [TW, iR] of CW) {
        const WW = AW(TW),
          RW = wW.get(iR);
        if (void 0 !== RW) {
          const MW = NW.get(RW);
          gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "frame"
          }), WW && !gR.has(WW.root) && gR.set(WW.root, {
            name: WW.root,
            texture: MW,
            kind: "frame"
          });
          continue
        }
        const MW = NW.get(iR),
          CW = WW?.root ?? TW;
        if (MW !== CW && gR.set(CW, {
            name: CW,
            texture: MW,
            kind: "frame"
          }), WW) {
          const RW = zR.get(WW.root);
          BW[iR] = {
            id: RW,
            rotation: WW.rotation
          }, tR.set(MW, RW), gR.set(TW, {
            name: TW,
            texture: MW,
            kind: "rotation"
          })
        } else tR.set(MW, iR + 1)
      }
      for (const TW of tR.keys()) gR.delete(TW);
      for (const [TW, iR] of MW) {
        const WW = tR.get(iR);
        void 0 === WW || tR.has(TW) || (tR.set(TW, WW), gR.delete(TW))
      }
      return {
        named: [...tR].sort(((WW, RW) => {
          let [MW] = WW, [wW] = RW;
          return MW < wW ? -1 : MW > wW ? 1 : 0
        })).map((WW => {
          let [RW, MW] = WW;
          return {
            name: RW,
            id: MW
          }
        })),
        aliases: [...gR.values()],
        layers: BW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);