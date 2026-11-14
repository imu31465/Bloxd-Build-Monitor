export const id = 111;
export const ids = [111, 113, 116];
export const modules = {
  5572: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(5576),
      AF = SF(971);
    const uF = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function hF(FF) {
      let {
        diagnostics: WF,
        more: SF = 0,
        t: hF
      } = FF;
      return (0, AF.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [WF.map(((FF, WF) => {
          const SF = (0, CF.f)(FF),
            bW = function(FF, WF) {
              const SF = (0, CF.b)(null !== FF && void 0 !== FF ? FF : []);
              if (0 === SF.length) return null;
              return SF.map((FF => FF.map((FF => WF(uF[FF]))).join(", "))).join("; ")
            }(FF.variants, hF);
          return (0, AF.jsxs)("li", {
            children: [SF && (0, AF.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: SF
            }), FF.message, bW && (0, AF.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: hF("shaderPack:onlyIn", {
                variants: bW
              })
            })]
          }, WF)
        })), SF > 0 && (0, AF.jsx)("li", {
          children: hF("shaderPack:moreErrors", {
            count: String(SF)
          })
        })]
      })
    }
  },
  5585: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => HF,
      d: () => KF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(3957),
      bW = SF(1186),
      dF = SF(929),
      PF = SF(1266),
      RF = SF(1046),
      iW = SF(89),
      eF = SF(5564),
      EF = SF(5578);
    class QF extends Error {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(FF, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = FF, this.params = WF
      }
    }
    const rW = 1024,
      gW = 101010256,
      tW = 33639248,
      TF = 67324752,
      aW = 22,
      kW = 46,
      qW = 30,
      VF = 65535,
      NF = 65535,
      DF = 4294967295,
      LF = 0,
      mW = 8,
      OF = new TextDecoder;

    function xW(FF) {
      const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength),
        SF = function(FF) {
          const WF = FF.byteLength - aW;
          for (let SF = WF; SF >= Math.max(0, WF - VF); SF--)
            if (FF.getUint32(SF, !0) === gW && SF + aW + FF.getUint16(SF + 20, !0) <= FF.byteLength) return SF;
          throw new QF("shaderPack:loadNotZip")
        }(WF),
        CF = WF.getUint16(SF + 8, !0),
        AF = WF.getUint16(SF + 10, !0),
        uF = WF.getUint32(SF + 12, !0),
        hF = WF.getUint32(SF + 16, !0);
      if (AF === NF || uF === DF || hF === DF) throw MF();
      if (0 !== WF.getUint16(SF + 4, !0) || 0 !== WF.getUint16(SF + 6, !0) || CF !== AF) throw new QF("shaderPack:loadSplitZip");
      if (AF > rW) throw new QF("shaderPack:loadTooManyZipEntries", {
        count: String(rW)
      });
      const bW = hF + uF;
      if (bW > SF) throw YF();
      const dF = [];
      let PF = hF;
      for (let RF = 0; RF < AF; RF++) {
        if (PF + kW > bW || WF.getUint32(PF, !0) !== tW) throw YF();
        const SF = WF.getUint16(PF + 8, !0),
          CF = WF.getUint16(PF + 10, !0),
          AF = WF.getUint32(PF + 20, !0),
          uF = WF.getUint32(PF + 24, !0),
          RF = WF.getUint16(PF + 28, !0),
          iW = WF.getUint16(PF + 30, !0),
          eF = WF.getUint16(PF + 32, !0),
          EF = WF.getUint32(PF + 42, !0),
          QF = PF + kW;
        if (PF = QF + RF + iW + eF, PF > bW) throw YF();
        if (AF === DF || uF === DF || EF === DF) throw MF();
        const rW = OF.decode(FF.subarray(QF, QF + RF)).replace(/\\/g, "/");
        rW.endsWith("/") || dF.push({
          path: rW,
          method: CF,
          encrypted: 0 !== (1 & SF),
          compressedSize: AF,
          dataOffset: oF(WF, EF, AF, hF)
        })
      }
      return dF
    }
    async function ZF(FF, WF, SF) {
      if (WF.encrypted) throw new QF("shaderPack:loadEncrypted", {
        path: WF.path
      });
      if (WF.method === LF) return WF.compressedSize > SF ? null : FF.subarray(WF.dataOffset, WF.dataOffset + WF.compressedSize);
      if (WF.method === mW) return async function(FF, WF, SF) {
        const CF = new Blob([FF]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          AF = [];
        let uF = 0;
        try {
          for (;;) {
            const {
              done: FF,
              value: SF
            } = await CF.read();
            if (FF) break;
            if (uF += SF.byteLength, uF > WF) return await CF.cancel(), null;
            AF.push(SF)
          }
        } catch (dF) {
          throw new QF("shaderPack:loadDecompressFailed", {
            path: SF
          }, {
            cause: dF
          })
        }
        const hF = new Uint8Array(uF);
        let bW = 0;
        for (const PF of AF) hF.set(PF, bW), bW += PF.byteLength;
        return hF
      }(FF.slice(WF.dataOffset, WF.dataOffset + WF.compressedSize), SF, WF.path);
      throw new QF("shaderPack:loadUnsupportedCompression", {
        path: WF.path,
        method: String(WF.method)
      })
    }

    function oF(FF, WF, SF, CF) {
      if (WF + qW > CF || FF.getUint32(WF, !0) !== TF) throw YF();
      const AF = WF + qW + FF.getUint16(WF + 26, !0) + FF.getUint16(WF + 28, !0);
      if (AF + SF > CF) throw YF();
      return AF
    }

    function YF() {
      return new QF("shaderPack:loadZipDamaged")
    }

    function MF() {
      return new QF("shaderPack:loadZip64")
    }
    const cW = 33554432,
      GF = 65536;
    async function zW(FF) {
      if (1 === FF.length && FF[0].name.toLowerCase().endsWith(".zip")) {
        const WF = FF[0];
        if (WF.size > cW) throw new QF("shaderPack:loadZipTooBig", {
          megabytes: String(cW / 1048576)
        });
        return async function(FF) {
          return IF(xW(FF).map((WF => ({
            path: WF.path,
            read: SF => ZF(FF, WF, SF)
          }))))
        }(new Uint8Array(await WF.arrayBuffer()))
      }
      return IF(FF.map((FF => ({
        path: fF(FF),
        read: WF => async function(FF, WF) {
          return FF.size > WF ? null : new Uint8Array(await FF.arrayBuffer())
        }(FF, WF)
      }))))
    }
    async function IF(FF) {
      const WF = function(FF) {
          const WF = FF.length > 0 ? FF[0].path.indexOf("/") : -1;
          if (-1 === WF) return FF;
          const SF = FF[0].path.slice(0, WF + 1);
          if (!FF.every((FF => FF.path.startsWith(SF)))) return FF;
          return FF.map((FF => ({
            ...FF,
            path: FF.path.slice(SF.length)
          })))
        }(FF.filter((FF => ! function(FF) {
          const WF = FF.split("/"),
            SF = WF[WF.length - 1];
          return WF.includes("__MACOSX") || SF.startsWith("._") || ".DS_Store" === SF
        }(FF.path)))),
        SF = WF.filter((FF => "pack.json" === FF.path.toLowerCase()));
      if (0 === SF.length) throw new QF("shaderPack:loadNoManifest");
      if (SF.length > 1) throw new QF("shaderPack:loadDuplicateManifest");
      const CF = SF[0],
        AF = await CF.read(GF);
      if (null === AF) throw new QF("shaderPack:loadManifestTooBig", {
        kilobytes: String(GF / 1024)
      });
      const uF = function(FF) {
          let WF;
          try {
            WF = JSON.parse(FF)
          } catch (bW) {
            throw new QF("shaderPack:loadManifestNotJson", {
              error: bW.message
            }, {
              cause: bW
            })
          }
          if ("object" !== typeof WF || null === WF || Array.isArray(WF)) throw new QF("shaderPack:loadManifestNotObject");
          const {
            apiVersion: SF,
            name: CF,
            author: AF,
            description: uF,
            keepCircleShadows: hF
          } = WF;
          if (void 0 === SF) throw new QF("shaderPack:loadNoApiVersion", {
            version: String(EF.b)
          });
          if (!(0, EF.f)(SF)) throw new QF("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(SF),
            version: String(EF.b)
          });
          if ("string" !== typeof CF || "" === CF.trim()) throw new QF("shaderPack:loadNoName");
          if (void 0 !== AF && null !== AF && "string" !== typeof AF) throw new QF("shaderPack:loadAuthorNotString");
          if (void 0 !== uF && null !== uF && "string" !== typeof uF) throw new QF("shaderPack:loadDescriptionNotString");
          if (void 0 !== hF && "boolean" !== typeof hF) throw new QF("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: SF,
            name: CF,
            author: "string" === typeof AF ? AF : null,
            description: "string" === typeof uF && "" !== uF.trim() ? uF : null,
            keepCircleShadows: !0 === hF
          }
        }(yW(AF, CF.path)),
        hF = WF.filter((FF => FF.path.toLowerCase().endsWith(".wgsl"))).sort(((FF, WF) => (0, eF.o)(FF.path, WF.path)));
      if (0 === hF.length) throw new QF("shaderPack:loadNoWgsl");
      if (hF.length > eF.c) throw new QF("shaderPack:loadTooManyWgsl", {
        count: String(eF.c)
      });
      const bW = hF.find(((FF, WF) => WF > 0 && FF.path === hF[WF - 1].path));
      if (bW) throw new QF("shaderPack:loadDuplicatePath", {
        path: bW.path
      });
      const dF = [];
      let PF = eF.f;
      for (const RF of hF) {
        const FF = await RF.read(PF);
        if (null === FF) throw new QF("shaderPack:loadSourceTooBig", {
          kilobytes: String(eF.f / 1024)
        });
        PF -= FF.byteLength, dF.push({
          path: RF.path,
          source: yW(FF, RF.path)
        })
      }
      return {
        manifest: uF,
        files: dF
      }
    }

    function fF(FF) {
      return (FF.webkitRelativePath || FF.path || FF.name).replace(/^\.?\//, "")
    }

    function yW(FF, WF) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(FF)
      } catch (SF) {
        throw new QF("shaderPack:loadNotUtf8", {
          path: WF
        }, {
          cause: SF
        })
      }
    }
    var sF = SF(5576),
      nF = SF(971);

    function HF(FF) {
      let {
        busy: WF,
        disabled: SF,
        onFiles: AF
      } = FF;
      const {
        t: eF
      } = (0, RF.B)(), EF = (0, CF.useRef)(null), QF = !(0, iW.isMobile)(), {
        getRootProps: rW,
        getInputProps: gW,
        isDragActive: tW,
        open: TF
      } = (0, hF.c)({
        onDrop: AF,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: SF
      });
      return (0, nF.jsxs)("div", {
        ...rW({
          className: uF()("ShaderPackDropZone", {
            ActiveDrag: tW,
            Disabled: SF
          })
        }),
        children: [(0, nF.jsx)("input", {
          ...gW({
            webkitdirectory: "true"
          })
        }), (0, nF.jsx)("input", {
          ref: EF,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(FF) {
            const WF = Array.from(FF.target.files);
            FF.target.value = "", AF(WF)
          }
        }), WF && (0, nF.jsx)(bW.c, {}), !WF && (0, nF.jsxs)(nF.Fragment, {
          children: [(0, nF.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, nF.jsx)(dF.e, {
              name: "up-from-bracket"
            })
          }), (0, nF.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: eF(QF ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, nF.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [QF && (0, nF.jsx)(PF.e, {
              disabled: SF,
              onClick: TF,
              children: eF("shaderPack:chooseFolder")
            }), (0, nF.jsx)(PF.e, {
              disabled: SF,
              onClick: () => {
                EF.current.click()
              },
              children: eF("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function KF(FF) {
      const {
        t: WF
      } = (0, RF.B)(), [SF, AF] = (0, CF.useState)(!1), [uF, hF] = (0, CF.useState)(null), bW = (0, CF.useRef)(!1);
      return {
        loading: SF,
        error: uF,
        setError: hF,
        onFiles: async function(SF) {
          if (!bW.current) {
            bW.current = !0, AF(!0), hF(null);
            try {
              await FF(await zW(SF))
            } catch (CF) {
              CF instanceof QF ? hF((0, sF.i)(WF, CF.translationKey, CF.params)) : (console.error("Failed to load the shader pack", CF), hF(WF("shaderPack:unexpectedError")))
            } finally {
              bW.current = !1, AF(!1)
            }
          }
        }
      }
    }
  },
  5576: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => hF,
      i: () => uF
    });
    var CF = SF(5578);
    const AF = [FF => FF.strict ? "strict" : "nonStrict", FF => FF.program];

    function uF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const CF = {};
      for (const AF in SF) CF[AF] = `\0${AF}\0`;
      return FF(WF, CF).replace(/\0(\w+)\0/g, ((FF, WF) => SF[WF]))
    }

    function hF(FF) {
      return null === FF.file ? null : FF.line > 0 ? `${FF.file}:${FF.line}` : FF.file
    }

    function bW(FF) {
      const WF = new Map(FF.map((FF => [dF(FF).join("."), FF])));
      if (0 === WF.size) return [];
      const SF = RF([...WF.values()]);
      return 0 === SF[0].length ? [] : SF
    }

    function dF(FF) {
      return AF.map((WF => WF(FF)))
    }
    const PF = AF.map((FF => new Set(CF.e.map(FF)).size));

    function RF(FF) {
      const WF = AF.map((WF => new Set(FF.map(WF)))),
        SF = WF.reduce(((FF, WF) => FF * WF.size), 1),
        CF = WF.every(((FF, WF) => 1 === FF.size || FF.size === PF[WF]));
      if (SF === FF.length && CF) return [AF.filter(((FF, SF) => 1 === WF[SF].size)).map((WF => WF(FF[0])))];
      let uF = null;
      for (let hF = 0; hF < AF.length; hF++) {
        if (1 === WF[hF].size) continue;
        const SF = iW(FF, AF[hF]).flatMap(RF);
        (null === uF || SF.length < uF.length) && (uF = SF)
      }
      return uF
    }

    function iW(FF, WF) {
      const SF = new Map;
      for (const AF of FF) {
        var CF;
        const FF = WF(AF);
        SF.set(FF, [...null !== (CF = SF.get(FF)) && void 0 !== CF ? CF : [], AF])
      }
      return [...SF.values()]
    }
  },
  5578: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF.j,
      e: () => AF,
      f: () => CF.p
    });
    var CF = SF(5564);
    const AF = [!1, !0].flatMap((FF => ["terrain", "liquid", "model"].map((WF => ({
      strict: FF,
      program: WF
    })))))
  },
  5626: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      forgetShaderPackActiveHint: () => xW,
      isOtherApiVersion: () => DF,
      isShaderPackActive: () => kW,
      isShaderPackChangePending: () => NF,
      markShaderPackChangePending: () => VF,
      pageShaderPackValidationVersion: () => LF,
      reconcileStoredShaderPackHint: () => OF,
      removeShaderPack: () => aW,
      replaceShaderPack: () => gW,
      saveShaderPack: () => rW,
      shaderPackNeedsCheck: () => mW,
      storedPackOutcome: () => qW,
      storedShaderPackFiles: () => eF,
      toStoredShaderPack: () => iW
    });
    var CF = SF(5564),
      AF = SF(5578),
      uF = SF(33),
      hF = SF(2591),
      bW = SF(5630),
      dF = SF(5603);
    const PF = "shaderPackChangePending";
    let RF = null;

    function iW(FF, WF, SF) {
      return {
        manifest: FF.manifest,
        files: (0, CF.r)(FF.files),
        validation: WF,
        ...SF && {
          listing: SF
        }
      }
    }

    function eF(FF) {
      return Object.keys(FF.files).map((WF => ({
        path: WF,
        source: FF.files[WF]
      })))
    }
    let EF = Promise.resolve();

    function QF(FF) {
      const WF = EF.then(FF);
      return EF = WF.catch((() => {})), WF
    }

    function rW(FF, WF) {
      return QF((() => tW(FF, WF)))
    }

    function gW(FF, WF, SF) {
      return QF((async () => JSON.stringify(await (0, bW.f)()) === JSON.stringify(FF) && (null === WF ? (await TF(), !0) : tW(WF, SF))))
    }
    async function tW(FF, WF) {
      const SF = await uF.f.setItem(bW.e, FF);
      return SF && ZF(FF, WF), SF
    }
    async function TF() {
      await uF.f.removeItem(bW.e), uF.h.removeItem(hF.e)
    }

    function aW() {
      return QF(TF)
    }

    function kW(FF, WF) {
      return "active" === qW(FF, WF).kind
    }

    function qW(FF, WF) {
      var SF;
      return null === FF ? {
        kind: "none",
        reason: "nothingStored"
      } : DF(FF) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) || FF.validation.fromRecheck ? null === WF ? {
        kind: "none",
        reason: "noCompiler"
      } : mW(FF, WF) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : FF.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function VF() {
      uF.k.setItem(PF, performance.timeOrigin)
    }

    function NF() {
      return uF.k.getItem(PF) === performance.timeOrigin
    }

    function DF(FF) {
      return !(0, AF.f)(FF.manifest.apiVersion)
    }

    function LF(FF) {
      return RF ??= FF.NWF((0, dF.shaderPackTextures)()), RF
    }

    function mW(FF, WF) {
      var SF;
      return (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.headerVersion) !== LF(WF)
    }

    function OF(FF) {
      return QF((async () => {
        ZF(await (0, bW.f)(!0), FF)
      }))
    }

    function xW() {
      return QF((async () => {
        uF.h.removeItem(hF.e)
      }))
    }

    function ZF(FF, WF) {
      kW(FF, WF) ? uF.h.setItem(hF.e, !0) : uF.h.removeItem(hF.e)
    }
  },
  5603: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      loadShaderPackTextures: () => hF,
      shaderPackTextures: () => bW
    });
    var CF = SF(5564);
    let AF = null,
      uF = null;

    function hF() {
      return uF ??= Promise.all([SF.e(59), SF.e(177)]).then((() => SF(38458))).then((FF => {
        let {
          textureNameToIndex: WF,
          textureAnimationData: SF
        } = FF;
        return AF ??= (0, CF.m)(WF, SF), AF
      })), uF
    }

    function bW() {
      if (null === AF) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AF
    }
  },
  5624: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      f: () => bW
    });
    var CF = SF(5626),
      AF = SF(5603),
      uF = SF(112);
    const hF = 100;
    async function bW(FF, WF) {
      var SF;
      let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (SF = navigator.gpu) && void 0 !== SF ? SF : null;
      const hF = FF.RhF(WF, (0, AF.shaderPackTextures)());
      if (hF.errors.length > 0) return PF(FF, hF.errors, hF.offInStrict);
      const bW = await async function(FF) {
        if (!FF) return null;
        try {
          const WF = await (0, uF.s)(FF);
          return WF ? await WF.requestDevice() : null
        } catch (WF) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", WF), null
        }
      }(CF);
      if (!bW) return null;
      let dF = !1;
      bW.lost.then((() => {
        dF = !0
      }));
      try {
        const WF = await Promise.all(hF.validationModules.map((WF => async function(FF, WF, SF) {
          WF.pushErrorScope("validation");
          const CF = WF.createShaderModule({
              code: SF.code
            }),
            AF = WF.popErrorScope(),
            {
              messages: uF
            } = await CF.getCompilationInfo(),
            hF = uF.filter((FF => "error" === FF.type)).map((WF => FF.mapValidationMessage(SF, WF))),
            bW = await AF;
          bW && 0 === hF.length && hF.push({
            file: null,
            line: 0,
            message: bW.message,
            variants: [SF.key]
          });
          return hF
        }(FF, bW, WF))));
        return dF ? null : PF(FF, FF.WPF(WF.flat()), hF.offInStrict)
      } catch (RF) {
        return console.error("Couldn't validate the shader pack on WebGPU.", RF), null
      } finally {
        bW.destroy()
      }
    }
    async function dF(FF, WF) {
      var SF;
      if (!(0, CF.shaderPackNeedsCheck)(FF, WF) || (0, CF.isOtherApiVersion)(FF)) return FF;
      const AF = await bW(WF, (0, CF.storedShaderPackFiles)(FF));
      if (!AF) return FF;
      const uF = !1 === (null === (SF = FF.validation) || void 0 === SF ? void 0 : SF.ok) && !FF.validation.fromRecheck,
        hF = {
          ...FF,
          validation: uF ? AF : {
            ...AF,
            fromRecheck: !0
          }
        };
      return await (0, CF.replaceShaderPack)(FF, hF, WF) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), hF
    }

    function PF(FF, WF, SF) {
      return {
        headerVersion: (0, CF.pageShaderPackValidationVersion)(FF),
        ok: 0 === WF.length,
        errors: WF.slice(0, hF),
        moreErrors: Math.max(0, WF.length - hF),
        offInStrict: SF
      }
    }
  },
  5564: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      f: () => uF,
      j: () => CF,
      m: () => QF,
      o: () => RF,
      p: () => AF,
      q: () => dF,
      r: () => PF,
      t: () => iW
    });
    const CF = 5;

    function AF(FF) {
      return FF === CF
    }
    const uF = 262144,
      hF = 256,
      bW = 256;

    function dF(FF) {
      if ("object" !== typeof FF || null === FF || Array.isArray(FF)) return "The pack has no files.";
      const WF = [];
      for (const [SF, CF] of Object.entries(FF)) {
        if ("string" !== typeof CF) return `${SF} isn't text.`;
        WF.push({
          path: SF,
          source: CF
        })
      }
      return WF.sort(((FF, WF) => RF(FF.path, WF.path))),
        function(FF) {
          if (0 === FF.length) return "The pack has no .wgsl files.";
          if (FF.length > hF) return `The pack has more than ${hF} .wgsl files.`;
          const WF = new Set;
          for (const {
              path: SF
            }
            of FF) {
            const FF = eF(SF);
            if (null !== FF) return FF;
            if (WF.has(SF)) return `The pack has two files at ${SF}.`;
            WF.add(SF)
          }
          return iW(FF) > uF ? `The pack's .wgsl files are over ${uF/1024} KB in total.` : null
        }(WF) ?? WF
    }

    function PF(FF) {
      const WF = {};
      for (const SF of FF) WF[SF.path] = SF.source;
      return WF
    }

    function RF(FF, WF) {
      return FF < WF ? -1 : FF > WF ? 1 : 0
    }

    function iW(FF) {
      const WF = new TextEncoder;
      let SF = 0;
      for (const {
          source: CF
        }
        of FF) SF += WF.encode(CF).byteLength;
      return SF
    }

    function eF(FF) {
      if (!FF.toLowerCase().endsWith(".wgsl")) return `${FF} isn't a .wgsl file.`;
      if (FF.length > bW) return `A file path is over ${bW} characters.`;
      if (FF.includes("\\") || /[\u0000-\u001f]/.test(FF)) return `${FF} isn't a valid file path.`;
      return FF.split("/").some((FF => "" === FF || "." === FF || ".." === FF)) ? `${FF} isn't a valid file path.` : null
    }
    const EF = /^(.*)\[rot\[([1-4])$/;

    function QF(FF, WF) {
      const SF = new Map;
      WF.forEach(((FF, WF) => {
        let {
          numAnimStates: CF,
          animStartIdx: AF
        } = FF;
        for (let uF = 1; uF < CF; uF++) SF.set(AF + uF - 1, WF)
      }));
      const CF = Object.entries(FF),
        AF = new Map;
      for (const [QF, rW] of CF) {
        const FF = EF.exec(QF);
        "1" === FF?.[2] && AF.set(FF[1], rW + 1)
      }
      const uF = FF => {
          const WF = EF.exec(FF);
          return WF && AF.has(WF[1]) ? {
            root: WF[1],
            rotation: Number(WF[2]) - 1
          } : null
        },
        hF = new Set(CF.map((FF => {
          let [WF] = FF;
          return uF(WF)?.root ?? WF
        }))),
        bW = (FF, SF) => {
          const CF = FF.replace(/_?0$/, "");
          return (WF[SF]?.numAnimStates ?? 0) > 1 && !hF.has(CF) ? CF : FF
        },
        dF = new Map;
      for (const [EF, QF] of CF) dF.set(QF, bW(uF(EF)?.root ?? EF, QF));
      const PF = CF.reduce(((FF, WF) => {
          let [, SF] = WF;
          return Math.max(FF, SF + 1)
        }), 0),
        RF = Array.from({
          length: PF
        }, ((FF, WF) => ({
          id: WF + 1,
          rotation: 0
        }))),
        iW = new Map,
        eF = new Map;
      for (const [EF, QF] of CF) {
        const FF = uF(EF),
          WF = SF.get(QF);
        if (void 0 !== WF) {
          const SF = dF.get(WF);
          eF.set(EF, {
            name: EF,
            texture: SF,
            kind: "frame"
          }), FF && !eF.has(FF.root) && eF.set(FF.root, {
            name: FF.root,
            texture: SF,
            kind: "frame"
          });
          continue
        }
        const CF = dF.get(QF),
          hF = FF?.root ?? EF;
        if (CF !== hF && eF.set(hF, {
            name: hF,
            texture: CF,
            kind: "frame"
          }), FF) {
          const WF = AF.get(FF.root);
          RF[QF] = {
            id: WF,
            rotation: FF.rotation
          }, iW.set(CF, WF), eF.set(EF, {
            name: EF,
            texture: CF,
            kind: "rotation"
          })
        } else iW.set(CF, QF + 1)
      }
      for (const EF of iW.keys()) eF.delete(EF);
      return {
        named: [...iW].sort(((FF, WF) => {
          let [SF] = FF, [CF] = WF;
          return SF < CF ? -1 : SF > CF ? 1 : 0
        })).map((FF => {
          let [WF, SF] = FF;
          return {
            name: WF,
            id: SF
          }
        })),
        aliases: [...eF.values()],
        layers: RF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);