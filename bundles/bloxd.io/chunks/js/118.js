export const id = 118;
export const ids = [118, 120, 123];
export const modules = {
  5932: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(5934),
      yB = dB(980);
    const pB = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function lB(BB) {
      let {
        diagnostics: TB,
        more: dB = 0,
        t: lB
      } = BB;
      return (0, yB.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [TB.map(((BB, TB) => {
          const dB = (0, VB.d)(BB),
            JB = function(BB, TB) {
              const dB = (0, VB.b)(null !== BB && void 0 !== BB ? BB : []);
              if (0 === dB.length) return null;
              return dB.map((BB => BB.map((BB => TB(pB[BB]))).join(", "))).join("; ")
            }(BB.variants, lB);
          return (0, yB.jsxs)("li", {
            children: [dB && (0, yB.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: dB
            }), BB.message, JB && (0, yB.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: lB("shaderPack:onlyIn", {
                variants: JB
              })
            })]
          }, TB)
        })), dB > 0 && (0, yB.jsx)("li", {
          children: lB("shaderPack:moreErrors", {
            count: String(dB)
          })
        })]
      })
    }
  },
  5943: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => WB,
      g: () => hB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(4367),
      JB = dB(1225),
      YB = dB(946),
      gB = dB(1324),
      oB = dB(1078),
      kB = dB(95),
      LB = dB(5924),
      OB = dB(5940);
    class DB extends Error {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(BB, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = BB, this.params = TB
      }
    }
    const uB = 1024,
      HB = 101010256,
      EB = 33639248,
      vB = 67324752,
      mB = 22,
      iB = 46,
      NB = 30,
      tB = 65535,
      fB = 65535,
      sB = 4294967295,
      MB = 0,
      zB = 8,
      wB = new TextDecoder;

    function UB(BB) {
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength),
        dB = function(BB) {
          const TB = BB.byteLength - mB;
          for (let dB = TB; dB >= Math.max(0, TB - tB); dB--)
            if (BB.getUint32(dB, !0) === HB && dB + mB + BB.getUint16(dB + 20, !0) <= BB.byteLength) return dB;
          throw new DB("shaderPack:loadNotZip")
        }(TB),
        VB = TB.getUint16(dB + 8, !0),
        yB = TB.getUint16(dB + 10, !0),
        pB = TB.getUint32(dB + 12, !0),
        lB = TB.getUint32(dB + 16, !0);
      if (yB === fB || pB === sB || lB === sB) throw IB();
      if (0 !== TB.getUint16(dB + 4, !0) || 0 !== TB.getUint16(dB + 6, !0) || VB !== yB) throw new DB("shaderPack:loadSplitZip");
      if (yB > uB) throw new DB("shaderPack:loadTooManyZipEntries", {
        count: String(uB)
      });
      const JB = lB + pB;
      if (JB > dB) throw rB();
      const YB = [];
      let gB = lB;
      for (let oB = 0; oB < yB; oB++) {
        if (gB + iB > JB || TB.getUint32(gB, !0) !== EB) throw rB();
        const dB = TB.getUint16(gB + 8, !0),
          VB = TB.getUint16(gB + 10, !0),
          yB = TB.getUint32(gB + 20, !0),
          pB = TB.getUint32(gB + 24, !0),
          oB = TB.getUint16(gB + 28, !0),
          kB = TB.getUint16(gB + 30, !0),
          LB = TB.getUint16(gB + 32, !0),
          OB = TB.getUint32(gB + 42, !0),
          DB = gB + iB;
        if (gB = DB + oB + kB + LB, gB > JB) throw rB();
        if (yB === sB || pB === sB || OB === sB) throw IB();
        const uB = wB.decode(BB.subarray(DB, DB + oB)).replace(/\\/g, "/");
        uB.endsWith("/") || YB.push({
          path: uB,
          method: VB,
          encrypted: 0 !== (1 & dB),
          compressedSize: yB,
          dataOffset: KB(TB, OB, yB, lB)
        })
      }
      return YB
    }
    async function FB(BB, TB, dB) {
      if (TB.encrypted) throw new DB("shaderPack:loadEncrypted", {
        path: TB.path
      });
      if (TB.method === MB) return TB.compressedSize > dB ? null : BB.subarray(TB.dataOffset, TB.dataOffset + TB.compressedSize);
      if (TB.method === zB) return async function(BB, TB, dB) {
        const VB = new Blob([BB]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          yB = [];
        let pB = 0;
        try {
          for (;;) {
            const {
              done: BB,
              value: dB
            } = await VB.read();
            if (BB) break;
            if (pB += dB.byteLength, pB > TB) return await VB.cancel(), null;
            yB.push(dB)
          }
        } catch (YB) {
          throw new DB("shaderPack:loadDecompressFailed", {
            path: dB
          }, {
            cause: YB
          })
        }
        const lB = new Uint8Array(pB);
        let JB = 0;
        for (const gB of yB) lB.set(gB, JB), JB += gB.byteLength;
        return lB
      }(BB.slice(TB.dataOffset, TB.dataOffset + TB.compressedSize), dB, TB.path);
      throw new DB("shaderPack:loadUnsupportedCompression", {
        path: TB.path,
        method: String(TB.method)
      })
    }

    function KB(BB, TB, dB, VB) {
      if (TB + NB > VB || BB.getUint32(TB, !0) !== vB) throw rB();
      const yB = TB + NB + BB.getUint16(TB + 26, !0) + BB.getUint16(TB + 28, !0);
      if (yB + dB > VB) throw rB();
      return yB
    }

    function rB() {
      return new DB("shaderPack:loadZipDamaged")
    }

    function IB() {
      return new DB("shaderPack:loadZip64")
    }
    const cB = 33554432,
      SB = 65536;
    async function PB(BB) {
      if (1 === BB.length && BB[0].name.toLowerCase().endsWith(".zip")) {
        const TB = BB[0];
        if (TB.size > cB) throw new DB("shaderPack:loadZipTooBig", {
          megabytes: String(cB / 1048576)
        });
        return async function(BB) {
          return QB(UB(BB).map((TB => ({
            path: TB.path,
            read: dB => FB(BB, TB, dB)
          }))))
        }(new Uint8Array(await TB.arrayBuffer()))
      }
      return QB(BB.map((BB => ({
        path: RB(BB),
        read: TB => async function(BB, TB) {
          return BB.size > TB ? null : new Uint8Array(await BB.arrayBuffer())
        }(BB, TB)
      }))))
    }
    async function QB(BB) {
      const TB = function(BB) {
          const TB = BB.length > 0 ? BB[0].path.indexOf("/") : -1;
          if (-1 === TB) return BB;
          const dB = BB[0].path.slice(0, TB + 1);
          if (!BB.every((BB => BB.path.startsWith(dB)))) return BB;
          return BB.map((BB => ({
            ...BB,
            path: BB.path.slice(dB.length)
          })))
        }(BB.filter((BB => ! function(BB) {
          const TB = BB.split("/"),
            dB = TB[TB.length - 1];
          return TB.includes("__MACOSX") || dB.startsWith("._") || ".DS_Store" === dB
        }(BB.path)))),
        dB = TB.filter((BB => "pack.json" === BB.path.toLowerCase()));
      if (0 === dB.length) throw new DB("shaderPack:loadNoManifest");
      if (dB.length > 1) throw new DB("shaderPack:loadDuplicateManifest");
      const VB = dB[0],
        yB = await VB.read(SB);
      if (null === yB) throw new DB("shaderPack:loadManifestTooBig", {
        kilobytes: String(SB / 1024)
      });
      const pB = function(BB) {
          let TB;
          try {
            TB = JSON.parse(BB)
          } catch (JB) {
            throw new DB("shaderPack:loadManifestNotJson", {
              error: JB.message
            }, {
              cause: JB
            })
          }
          if ("object" !== typeof TB || null === TB || Array.isArray(TB)) throw new DB("shaderPack:loadManifestNotObject");
          const {
            apiVersion: dB,
            name: VB,
            author: yB,
            description: pB,
            keepCircleShadows: lB
          } = TB;
          if (void 0 === dB) throw new DB("shaderPack:loadNoApiVersion", {
            version: String(OB.d)
          });
          if (!(0, OB.l)(dB)) throw new DB("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(dB),
            version: String(OB.d)
          });
          if ("string" !== typeof VB || "" === VB.trim()) throw new DB("shaderPack:loadNoName");
          if (void 0 !== yB && null !== yB && "string" !== typeof yB) throw new DB("shaderPack:loadAuthorNotString");
          if (void 0 !== pB && null !== pB && "string" !== typeof pB) throw new DB("shaderPack:loadDescriptionNotString");
          if (void 0 !== lB && "boolean" !== typeof lB) throw new DB("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: dB,
            name: VB,
            author: "string" === typeof yB ? yB : null,
            description: "string" === typeof pB && "" !== pB.trim() ? pB : null,
            keepCircleShadows: !0 === lB
          }
        }(aB(yB, VB.path)),
        lB = TB.filter((BB => BB.path.toLowerCase().endsWith(".wgsl"))).sort(((BB, TB) => (0, LB.m)(BB.path, TB.path)));
      if (0 === lB.length) throw new DB("shaderPack:loadNoWgsl");
      if (lB.length > LB.c) throw new DB("shaderPack:loadTooManyWgsl", {
        count: String(LB.c)
      });
      const JB = lB.find(((BB, TB) => TB > 0 && BB.path === lB[TB - 1].path));
      if (JB) throw new DB("shaderPack:loadDuplicatePath", {
        path: JB.path
      });
      const YB = [];
      let gB = LB.d;
      for (const oB of lB) {
        const BB = await oB.read(gB);
        if (null === BB) throw new DB("shaderPack:loadSourceTooBig", {
          kilobytes: String(LB.d / 1024)
        });
        gB -= BB.byteLength, YB.push({
          path: oB.path,
          source: aB(BB, oB.path)
        })
      }
      return {
        manifest: pB,
        files: YB
      }
    }

    function RB(BB) {
      return (BB.webkitRelativePath || BB.path || BB.name).replace(/^\.?\//, "")
    }

    function aB(BB, TB) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(BB)
      } catch (dB) {
        throw new DB("shaderPack:loadNotUtf8", {
          path: TB
        }, {
          cause: dB
        })
      }
    }
    var ZB = dB(5934),
      XB = dB(980);

    function WB(BB) {
      let {
        busy: TB,
        disabled: dB,
        onFiles: yB
      } = BB;
      const {
        t: LB
      } = (0, oB.z)(), OB = (0, VB.useRef)(null), DB = !(0, kB.isMobile)(), {
        getRootProps: uB,
        getInputProps: HB,
        isDragActive: EB,
        open: vB
      } = (0, lB.c)({
        onDrop: yB,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: dB
      });
      return (0, XB.jsxs)("div", {
        ...uB({
          className: pB()("ShaderPackDropZone", {
            ActiveDrag: EB,
            Disabled: dB
          })
        }),
        children: [(0, XB.jsx)("input", {
          ...HB({
            webkitdirectory: "true"
          })
        }), (0, XB.jsx)("input", {
          ref: OB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const TB = Array.from(BB.target.files);
            BB.target.value = "", yB(TB)
          }
        }), TB && (0, XB.jsx)(JB.b, {}), !TB && (0, XB.jsxs)(XB.Fragment, {
          children: [(0, XB.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, XB.jsx)(YB.e, {
              name: "up-from-bracket"
            })
          }), (0, XB.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: LB(DB ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, XB.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [DB && (0, XB.jsx)(gB.d, {
              disabled: dB,
              onClick: vB,
              children: LB("shaderPack:chooseFolder")
            }), (0, XB.jsx)(gB.d, {
              disabled: dB,
              onClick: () => {
                OB.current.click()
              },
              children: LB("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function hB(BB) {
      const {
        t: TB
      } = (0, oB.z)(), [dB, yB] = (0, VB.useState)(!1), [pB, lB] = (0, VB.useState)(null), JB = (0, VB.useRef)(!1);
      return {
        loading: dB,
        error: pB,
        setError: lB,
        onFiles: async function(dB) {
          if (!JB.current) {
            JB.current = !0, yB(!0), lB(null);
            try {
              await BB(await PB(dB))
            } catch (VB) {
              VB instanceof DB ? lB((0, ZB.f)(TB, VB.translationKey, VB.params)) : (console.error("Failed to load the shader pack", VB), lB(TB("shaderPack:unexpectedError")))
            } finally {
              JB.current = !1, yB(!1)
            }
          }
        }
      }
    }
  },
  5934: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB,
      d: () => lB,
      f: () => pB
    });
    var VB = dB(5940);
    const yB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function pB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const VB = {};
      for (const yB in dB) VB[yB] = `\0${yB}\0`;
      return BB(TB, VB).replace(/\0(\w+)\0/g, ((BB, TB) => dB[TB]))
    }

    function lB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function JB(BB) {
      const TB = new Map(BB.map((BB => [YB(BB).join("."), BB])));
      if (0 === TB.size) return [];
      const dB = oB([...TB.values()]);
      return 0 === dB[0].length ? [] : dB
    }

    function YB(BB) {
      return yB.map((TB => TB(BB)))
    }
    const gB = yB.map((BB => new Set(VB.h.map(BB)).size));

    function oB(BB) {
      const TB = yB.map((TB => new Set(BB.map(TB)))),
        dB = TB.reduce(((BB, TB) => BB * TB.size), 1),
        VB = TB.every(((BB, TB) => 1 === BB.size || BB.size === gB[TB]));
      if (dB === BB.length && VB) return [yB.filter(((BB, dB) => 1 === TB[dB].size)).map((TB => TB(BB[0])))];
      let pB = null;
      for (let lB = 0; lB < yB.length; lB++) {
        if (1 === TB[lB].size) continue;
        const dB = kB(BB, yB[lB]).flatMap(oB);
        (null === pB || dB.length < pB.length) && (pB = dB)
      }
      return pB
    }

    function kB(BB, TB) {
      const dB = new Map;
      for (const yB of BB) {
        var VB;
        const BB = TB(yB);
        dB.set(BB, [...null !== (VB = dB.get(BB)) && void 0 !== VB ? VB : [], yB])
      }
      return [...dB.values()]
    }
  },
  5940: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB.h,
      h: () => yB,
      l: () => VB.p
    });
    var VB = dB(5924);
    const yB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((TB => ({
      strict: BB,
      program: TB
    })))))
  },
  5987: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      forgetShaderPackActiveHint: () => UB,
      isOtherApiVersion: () => sB,
      isShaderPackActive: () => iB,
      isShaderPackChangePending: () => fB,
      markShaderPackChangePending: () => tB,
      pageShaderPackValidationVersion: () => MB,
      reconcileStoredShaderPackHint: () => wB,
      removeShaderPack: () => mB,
      replaceShaderPack: () => HB,
      saveShaderPack: () => uB,
      shaderPackNeedsCheck: () => zB,
      storedPackOutcome: () => NB,
      storedShaderPackFiles: () => LB,
      toStoredShaderPack: () => kB
    });
    var VB = dB(5924),
      yB = dB(5940),
      pB = dB(33),
      lB = dB(2939),
      JB = dB(5994),
      YB = dB(5973);
    const gB = "shaderPackChangePending";
    let oB = null;

    function kB(BB, TB, dB) {
      return {
        manifest: BB.manifest,
        files: (0, VB.u)(BB.files),
        validation: TB,
        ...dB && {
          listing: dB
        }
      }
    }

    function LB(BB) {
      return Object.keys(BB.files).map((TB => ({
        path: TB,
        source: BB.files[TB]
      })))
    }
    let OB = Promise.resolve();

    function DB(BB) {
      const TB = OB.then(BB);
      return OB = TB.catch((() => {})), TB
    }

    function uB(BB, TB) {
      return DB((() => EB(BB, TB)))
    }

    function HB(BB, TB, dB) {
      return DB((async () => JSON.stringify(await (0, JB.d)()) === JSON.stringify(BB) && (null === TB ? (await vB(), !0) : EB(TB, dB))))
    }
    async function EB(BB, TB) {
      const dB = await pB.f.setItem(JB.b, BB);
      return dB && FB(BB, TB), dB
    }
    async function vB() {
      await pB.f.removeItem(JB.b), pB.j.removeItem(lB.d)
    }

    function mB() {
      return DB(vB)
    }

    function iB(BB, TB) {
      return "active" === NB(BB, TB).kind
    }

    function NB(BB, TB) {
      var dB;
      return null === BB ? {
        kind: "none",
        reason: "nothingStored"
      } : sB(BB) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) || BB.validation.fromRecheck ? null === TB ? {
        kind: "none",
        reason: "noCompiler"
      } : zB(BB, TB) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : BB.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function tB() {
      pB.m.setItem(gB, performance.timeOrigin)
    }

    function fB() {
      return pB.m.getItem(gB) === performance.timeOrigin
    }

    function sB(BB) {
      return !(0, yB.l)(BB.manifest.apiVersion)
    }

    function MB(BB) {
      return oB ??= BB.PU((0, YB.shaderPackTextures)()), oB
    }

    function zB(BB, TB) {
      var dB;
      return (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.headerVersion) !== MB(TB)
    }

    function wB(BB) {
      return DB((async () => {
        FB(await (0, JB.d)(!0), BB)
      }))
    }

    function UB() {
      return DB((async () => {
        pB.j.removeItem(lB.d)
      }))
    }

    function FB(BB, TB) {
      iB(BB, TB) ? pB.j.setItem(lB.d, !0) : pB.j.removeItem(lB.d)
    }
  },
  5973: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      loadShaderPackTextures: () => lB,
      shaderPackTextures: () => JB
    });
    var VB = dB(5924);
    let yB = null,
      pB = null;

    function lB() {
      return pB ??= Promise.all([dB.e(64), dB.e(184)]).then((() => dB(39231))).then((BB => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: TB,
          textureNameToIndex: dB,
          textureAnimationData: pB
        } = BB;
        return yB ??= (0, VB.l)(dB, pB, TB), yB
      })), pB
    }

    function JB() {
      if (null === yB) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return yB
    }
  },
  5985: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      f: () => JB
    });
    var VB = dB(5987),
      yB = dB(5973),
      pB = dB(113);
    const lB = 100;
    async function JB(BB, TB) {
      var dB;
      let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (dB = navigator.gpu) && void 0 !== dB ? dB : null;
      const lB = BB.iBB(TB, (0, yB.shaderPackTextures)());
      if (lB.errors.length > 0) return gB(BB, lB.errors, lB.offInStrict);
      const JB = await async function(BB) {
        if (!BB) return null;
        try {
          const TB = await (0, pB.q)(BB);
          return TB ? await TB.requestDevice() : null
        } catch (TB) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", TB), null
        }
      }(VB);
      if (!JB) return null;
      let YB = !1;
      JB.lost.then((() => {
        YB = !0
      }));
      try {
        const TB = await Promise.all(lB.validationModules.map((TB => async function(BB, TB, dB) {
          TB.pushErrorScope("validation");
          const VB = TB.createShaderModule({
              code: dB.code
            }),
            yB = TB.popErrorScope(),
            {
              messages: pB
            } = await VB.getCompilationInfo(),
            lB = pB.filter((BB => "error" === BB.type)).map((TB => BB.mapValidationMessage(dB, TB))),
            JB = await yB;
          JB && 0 === lB.length && lB.push({
            file: null,
            line: 0,
            message: JB.message,
            variants: [dB.key]
          });
          return lB
        }(BB, JB, TB))));
        return YB ? null : gB(BB, BB.LVB(TB.flat()), lB.offInStrict)
      } catch (oB) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oB), null
      } finally {
        JB.destroy()
      }
    }
    async function YB(BB, TB) {
      var dB;
      if (!(0, VB.shaderPackNeedsCheck)(BB, TB) || (0, VB.isOtherApiVersion)(BB)) return BB;
      const yB = await JB(TB, (0, VB.storedShaderPackFiles)(BB));
      if (!yB) return BB;
      const pB = !1 === (null === (dB = BB.validation) || void 0 === dB ? void 0 : dB.ok) && !BB.validation.fromRecheck,
        lB = {
          ...BB,
          validation: pB ? yB : {
            ...yB,
            fromRecheck: !0
          }
        };
      return await (0, VB.replaceShaderPack)(BB, lB, TB) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), lB
    }

    function gB(BB, TB, dB) {
      return {
        headerVersion: (0, VB.pageShaderPackValidationVersion)(BB),
        ok: 0 === TB.length,
        errors: TB.slice(0, lB),
        moreErrors: Math.max(0, TB.length - lB),
        offInStrict: dB
      }
    }
  },
  5924: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      d: () => pB,
      h: () => VB,
      l: () => DB,
      m: () => oB,
      p: () => yB,
      q: () => YB,
      u: () => gB,
      x: () => kB
    });
    const VB = 5;

    function yB(BB) {
      return BB === VB
    }
    const pB = 262144,
      lB = 256,
      JB = 256;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const TB = [];
      for (const [dB, VB] of Object.entries(BB)) {
        if ("string" !== typeof VB) return `${dB} isn't text.`;
        TB.push({
          path: dB,
          source: VB
        })
      }
      return TB.sort(((BB, TB) => oB(BB.path, TB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > lB) return `The pack has more than ${lB} .wgsl files.`;
          const TB = new Set;
          for (const {
              path: dB
            }
            of BB) {
            const BB = LB(dB);
            if (null !== BB) return BB;
            if (TB.has(dB)) return `The pack has two files at ${dB}.`;
            TB.add(dB)
          }
          return kB(BB) > pB ? `The pack's .wgsl files are over ${pB/1024} KB in total.` : null
        }(TB) ?? TB
    }

    function gB(BB) {
      const TB = {};
      for (const dB of BB) TB[dB.path] = dB.source;
      return TB
    }

    function oB(BB, TB) {
      return BB < TB ? -1 : BB > TB ? 1 : 0
    }

    function kB(BB) {
      const TB = new TextEncoder;
      let dB = 0;
      for (const {
          source: VB
        }
        of BB) dB += TB.encode(VB).byteLength;
      return dB
    }

    function LB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > JB) return `A file path is over ${JB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const OB = /^(.*)\[rot\[([1-4])$/;

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const VB = new Map;
      TB.forEach(((BB, TB) => {
        let {
          numAnimStates: dB,
          animStartIdx: yB
        } = BB;
        for (let pB = 1; pB < dB; pB++) VB.set(yB + pB - 1, TB)
      }));
      const yB = Object.entries(BB),
        pB = new Map;
      for (const [uB, HB] of yB) {
        const BB = OB.exec(uB);
        "1" === BB?.[2] && pB.set(BB[1], HB + 1)
      }
      const lB = BB => {
          const TB = OB.exec(BB);
          return TB && pB.has(TB[1]) ? {
            root: TB[1],
            rotation: Number(TB[2]) - 1
          } : null
        },
        JB = new Set(yB.map((BB => {
          let [TB] = BB;
          return lB(TB)?.root ?? TB
        }))),
        YB = (BB, dB) => {
          const VB = BB.replace(/_?0$/, "");
          return (TB[dB]?.numAnimStates ?? 0) > 1 && !JB.has(VB) ? VB : BB
        },
        gB = new Map;
      for (const [OB, uB] of yB) gB.set(uB, YB(lB(OB)?.root ?? OB, uB));
      const oB = yB.reduce(((BB, TB) => {
          let [, dB] = TB;
          return Math.max(BB, dB + 1)
        }), 0),
        kB = Array.from({
          length: oB
        }, ((BB, TB) => ({
          id: TB + 1,
          rotation: 0
        }))),
        LB = new Map,
        DB = new Map;
      for (const [OB, uB] of yB) {
        const BB = lB(OB),
          TB = VB.get(uB);
        if (void 0 !== TB) {
          const dB = gB.get(TB);
          DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "frame"
          }), BB && !DB.has(BB.root) && DB.set(BB.root, {
            name: BB.root,
            texture: dB,
            kind: "frame"
          });
          continue
        }
        const dB = gB.get(uB),
          yB = BB?.root ?? OB;
        if (dB !== yB && DB.set(yB, {
            name: yB,
            texture: dB,
            kind: "frame"
          }), BB) {
          const TB = pB.get(BB.root);
          kB[uB] = {
            id: TB,
            rotation: BB.rotation
          }, LB.set(dB, TB), DB.set(OB, {
            name: OB,
            texture: dB,
            kind: "rotation"
          })
        } else LB.set(dB, uB + 1)
      }
      for (const OB of LB.keys()) DB.delete(OB);
      for (const [OB, uB] of dB) {
        const BB = LB.get(uB);
        void 0 === BB || LB.has(OB) || (LB.set(OB, BB), DB.delete(OB))
      }
      return {
        named: [...LB].sort(((BB, TB) => {
          let [dB] = BB, [VB] = TB;
          return dB < VB ? -1 : dB > VB ? 1 : 0
        })).map((BB => {
          let [TB, dB] = BB;
          return {
            name: TB,
            id: dB
          }
        })),
        aliases: [...DB.values()],
        layers: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);