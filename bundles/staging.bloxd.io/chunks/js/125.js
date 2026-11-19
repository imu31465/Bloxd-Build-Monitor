export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6350: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(6354),
      pD = cD(1093);
    const iD = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function fD(DD) {
      let {
        diagnostics: CD,
        more: cD = 0,
        t: fD
      } = DD;
      return (0, pD.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [CD.map(((DD, CD) => {
          const cD = (0, ID.c)(DD),
            bD = function(DD, CD) {
              const cD = (0, ID.b)(null !== DD && void 0 !== DD ? DD : []);
              if (0 === cD.length) return null;
              return cD.map((DD => DD.map((DD => CD(iD[DD]))).join(", "))).join("; ")
            }(DD.variants, fD);
          return (0, pD.jsxs)("li", {
            children: [cD && (0, pD.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: cD
            }), DD.message, bD && (0, pD.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: fD("shaderPack:onlyIn", {
                variants: bD
              })
            })]
          }, CD)
        })), cD > 0 && (0, pD.jsx)("li", {
          children: fD("shaderPack:moreErrors", {
            count: String(cD)
          })
        })]
      })
    }
  },
  6362: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => dD,
      e: () => YD
    });
    var ID = cD(53),
      pD = cD(1049),
      iD = cD.n(pD),
      fD = cD(4734),
      bD = cD(1328),
      QD = cD(1064),
      wD = cD(1442),
      SD = cD(1192),
      BD = cD(90),
      yD = cD(6343),
      MD = cD(6356);
    class tD extends Error {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(DD, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = DD, this.params = CD
      }
    }
    const ZD = 1024,
      oD = 101010256,
      vD = 33639248,
      ND = 67324752,
      gD = 22,
      XD = 46,
      mD = 30,
      nD = 65535,
      OD = 65535,
      PD = 4294967295,
      HD = 0,
      UD = 8,
      xD = new TextDecoder;

    function qD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength),
        cD = function(DD) {
          const CD = DD.byteLength - gD;
          for (let cD = CD; cD >= Math.max(0, CD - nD); cD--)
            if (DD.getUint32(cD, !0) === oD && cD + gD + DD.getUint16(cD + 20, !0) <= DD.byteLength) return cD;
          throw new tD("shaderPack:loadNotZip")
        }(CD),
        ID = CD.getUint16(cD + 8, !0),
        pD = CD.getUint16(cD + 10, !0),
        iD = CD.getUint32(cD + 12, !0),
        fD = CD.getUint32(cD + 16, !0);
      if (pD === OD || iD === PD || fD === PD) throw VD();
      if (0 !== CD.getUint16(cD + 4, !0) || 0 !== CD.getUint16(cD + 6, !0) || ID !== pD) throw new tD("shaderPack:loadSplitZip");
      if (pD > ZD) throw new tD("shaderPack:loadTooManyZipEntries", {
        count: String(ZD)
      });
      const bD = fD + iD;
      if (bD > cD) throw aD();
      const QD = [];
      let wD = fD;
      for (let SD = 0; SD < pD; SD++) {
        if (wD + XD > bD || CD.getUint32(wD, !0) !== vD) throw aD();
        const cD = CD.getUint16(wD + 8, !0),
          ID = CD.getUint16(wD + 10, !0),
          pD = CD.getUint32(wD + 20, !0),
          iD = CD.getUint32(wD + 24, !0),
          SD = CD.getUint16(wD + 28, !0),
          BD = CD.getUint16(wD + 30, !0),
          yD = CD.getUint16(wD + 32, !0),
          MD = CD.getUint32(wD + 42, !0),
          tD = wD + XD;
        if (wD = tD + SD + BD + yD, wD > bD) throw aD();
        if (pD === PD || iD === PD || MD === PD) throw VD();
        const ZD = xD.decode(DD.subarray(tD, tD + SD)).replace(/\\/g, "/");
        ZD.endsWith("/") || QD.push({
          path: ZD,
          method: ID,
          encrypted: 0 !== (1 & cD),
          compressedSize: pD,
          dataOffset: KD(CD, MD, pD, fD)
        })
      }
      return QD
    }
    async function JD(DD, CD, cD) {
      if (CD.encrypted) throw new tD("shaderPack:loadEncrypted", {
        path: CD.path
      });
      if (CD.method === HD) return CD.compressedSize > cD ? null : DD.subarray(CD.dataOffset, CD.dataOffset + CD.compressedSize);
      if (CD.method === UD) return async function(DD, CD, cD) {
        const ID = new Blob([DD]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          pD = [];
        let iD = 0;
        try {
          for (;;) {
            const {
              done: DD,
              value: cD
            } = await ID.read();
            if (DD) break;
            if (iD += cD.byteLength, iD > CD) return await ID.cancel(), null;
            pD.push(cD)
          }
        } catch (QD) {
          throw new tD("shaderPack:loadDecompressFailed", {
            path: cD
          }, {
            cause: QD
          })
        }
        const fD = new Uint8Array(iD);
        let bD = 0;
        for (const wD of pD) fD.set(wD, bD), bD += wD.byteLength;
        return fD
      }(DD.slice(CD.dataOffset, CD.dataOffset + CD.compressedSize), cD, CD.path);
      throw new tD("shaderPack:loadUnsupportedCompression", {
        path: CD.path,
        method: String(CD.method)
      })
    }

    function KD(DD, CD, cD, ID) {
      if (CD + mD > ID || DD.getUint32(CD, !0) !== ND) throw aD();
      const pD = CD + mD + DD.getUint16(CD + 26, !0) + DD.getUint16(CD + 28, !0);
      if (pD + cD > ID) throw aD();
      return pD
    }

    function aD() {
      return new tD("shaderPack:loadZipDamaged")
    }

    function VD() {
      return new tD("shaderPack:loadZip64")
    }
    const zD = 33554432,
      jD = 65536;
    async function lD(DD) {
      if (1 === DD.length && DD[0].name.toLowerCase().endsWith(".zip")) {
        const CD = DD[0];
        if (CD.size > zD) throw new tD("shaderPack:loadZipTooBig", {
          megabytes: String(zD / 1048576)
        });
        return async function(DD) {
          return LD(qD(DD).map((CD => ({
            path: CD.path,
            read: cD => JD(DD, CD, cD)
          }))))
        }(new Uint8Array(await CD.arrayBuffer()))
      }
      return LD(DD.map((DD => ({
        path: TD(DD),
        read: CD => async function(DD, CD) {
          return DD.size > CD ? null : new Uint8Array(await DD.arrayBuffer())
        }(DD, CD)
      }))))
    }
    async function LD(DD) {
      const CD = function(DD) {
          const CD = DD.length > 0 ? DD[0].path.indexOf("/") : -1;
          if (-1 === CD) return DD;
          const cD = DD[0].path.slice(0, CD + 1);
          if (!DD.every((DD => DD.path.startsWith(cD)))) return DD;
          return DD.map((DD => ({
            ...DD,
            path: DD.path.slice(cD.length)
          })))
        }(DD.filter((DD => ! function(DD) {
          const CD = DD.split("/"),
            cD = CD[CD.length - 1];
          return CD.includes("__MACOSX") || cD.startsWith("._") || ".DS_Store" === cD
        }(DD.path)))),
        cD = CD.filter((DD => "pack.json" === DD.path.toLowerCase()));
      if (0 === cD.length) throw new tD("shaderPack:loadNoManifest");
      if (cD.length > 1) throw new tD("shaderPack:loadDuplicateManifest");
      const ID = cD[0],
        pD = await ID.read(jD);
      if (null === pD) throw new tD("shaderPack:loadManifestTooBig", {
        kilobytes: String(jD / 1024)
      });
      const iD = function(DD) {
          let CD;
          try {
            CD = JSON.parse(DD)
          } catch (bD) {
            throw new tD("shaderPack:loadManifestNotJson", {
              error: bD.message
            }, {
              cause: bD
            })
          }
          if ("object" !== typeof CD || null === CD || Array.isArray(CD)) throw new tD("shaderPack:loadManifestNotObject");
          const {
            apiVersion: cD,
            name: ID,
            author: pD,
            description: iD,
            keepCircleShadows: fD
          } = CD;
          if (void 0 === cD) throw new tD("shaderPack:loadNoApiVersion", {
            version: String(MD.c)
          });
          if (!(0, MD.f)(cD)) throw new tD("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(cD),
            version: String(MD.c)
          });
          if ("string" !== typeof ID || "" === ID.trim()) throw new tD("shaderPack:loadNoName");
          if (void 0 !== pD && null !== pD && "string" !== typeof pD) throw new tD("shaderPack:loadAuthorNotString");
          if (void 0 !== iD && null !== iD && "string" !== typeof iD) throw new tD("shaderPack:loadDescriptionNotString");
          if (void 0 !== fD && "boolean" !== typeof fD) throw new tD("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: cD,
            name: ID,
            author: "string" === typeof pD ? pD : null,
            description: "string" === typeof iD && "" !== iD.trim() ? iD : null,
            keepCircleShadows: !0 === fD
          }
        }(GD(pD, ID.path)),
        fD = CD.filter((DD => DD.path.toLowerCase().endsWith(".wgsl"))).sort(((DD, CD) => (0, yD.n)(DD.path, CD.path)));
      if (0 === fD.length) throw new tD("shaderPack:loadNoWgsl");
      if (fD.length > yD.d) throw new tD("shaderPack:loadTooManyWgsl", {
        count: String(yD.d)
      });
      const bD = fD.find(((DD, CD) => CD > 0 && DD.path === fD[CD - 1].path));
      if (bD) throw new tD("shaderPack:loadDuplicatePath", {
        path: bD.path
      });
      const QD = [];
      let wD = yD.h;
      for (const SD of fD) {
        const DD = await SD.read(wD);
        if (null === DD) throw new tD("shaderPack:loadSourceTooBig", {
          kilobytes: String(yD.h / 1024)
        });
        wD -= DD.byteLength, QD.push({
          path: SD.path,
          source: GD(DD, SD.path)
        })
      }
      return {
        manifest: iD,
        files: QD
      }
    }

    function TD(DD) {
      return (DD.webkitRelativePath || DD.path || DD.name).replace(/^\.?\//, "")
    }

    function GD(DD, CD) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(DD)
      } catch (cD) {
        throw new tD("shaderPack:loadNotUtf8", {
          path: CD
        }, {
          cause: cD
        })
      }
    }
    var RD = cD(6354),
      kD = cD(1093);

    function dD(DD) {
      let {
        busy: CD,
        disabled: cD,
        onFiles: pD
      } = DD;
      const {
        t: yD
      } = (0, SD.F)(), MD = (0, ID.useRef)(null), tD = !(0, BD.isMobile)(), {
        getRootProps: ZD,
        getInputProps: oD,
        isDragActive: vD,
        open: ND
      } = (0, fD.b)({
        onDrop: pD,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: cD
      });
      return (0, kD.jsxs)("div", {
        ...ZD({
          className: iD()("ShaderPackDropZone", {
            ActiveDrag: vD,
            Disabled: cD
          })
        }),
        children: [(0, kD.jsx)("input", {
          ...oD({
            webkitdirectory: "true"
          })
        }), (0, kD.jsx)("input", {
          ref: MD,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(DD) {
            const CD = Array.from(DD.target.files);
            DD.target.value = "", pD(CD)
          }
        }), CD && (0, kD.jsx)(bD.e, {}), !CD && (0, kD.jsxs)(kD.Fragment, {
          children: [(0, kD.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, kD.jsx)(QD.c, {
              name: "up-from-bracket"
            })
          }), (0, kD.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: yD(tD ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, kD.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [tD && (0, kD.jsx)(wD.i, {
              disabled: cD,
              onClick: ND,
              children: yD("shaderPack:chooseFolder")
            }), (0, kD.jsx)(wD.i, {
              disabled: cD,
              onClick: () => {
                MD.current.click()
              },
              children: yD("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function YD(DD) {
      const {
        t: CD
      } = (0, SD.F)(), [cD, pD] = (0, ID.useState)(!1), [iD, fD] = (0, ID.useState)(null), bD = (0, ID.useRef)(!1);
      return {
        loading: cD,
        error: iD,
        setError: fD,
        onFiles: async function(cD) {
          if (!bD.current) {
            bD.current = !0, pD(!0), fD(null);
            try {
              await DD(await lD(cD))
            } catch (ID) {
              ID instanceof tD ? fD((0, RD.d)(CD, ID.translationKey, ID.params)) : (console.error("Failed to load the shader pack", ID), fD(CD("shaderPack:unexpectedError")))
            } finally {
              bD.current = !1, pD(!1)
            }
          }
        }
      }
    }
  },
  6354: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      c: () => fD,
      d: () => iD
    });
    var ID = cD(6356);
    const pD = [DD => DD.strict ? "strict" : "nonStrict", DD => DD.program];

    function iD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ID = {};
      for (const pD in cD) ID[pD] = `\0${pD}\0`;
      return DD(CD, ID).replace(/\0(\w+)\0/g, ((DD, CD) => cD[CD]))
    }

    function fD(DD) {
      return null === DD.file ? null : DD.line > 0 ? `${DD.file}:${DD.line}` : DD.file
    }

    function bD(DD) {
      const CD = new Map(DD.map((DD => [QD(DD).join("."), DD])));
      if (0 === CD.size) return [];
      const cD = SD([...CD.values()]);
      return 0 === cD[0].length ? [] : cD
    }

    function QD(DD) {
      return pD.map((CD => CD(DD)))
    }
    const wD = pD.map((DD => new Set(ID.e.map(DD)).size));

    function SD(DD) {
      const CD = pD.map((CD => new Set(DD.map(CD)))),
        cD = CD.reduce(((DD, CD) => DD * CD.size), 1),
        ID = CD.every(((DD, CD) => 1 === DD.size || DD.size === wD[CD]));
      if (cD === DD.length && ID) return [pD.filter(((DD, cD) => 1 === CD[cD].size)).map((CD => CD(DD[0])))];
      let iD = null;
      for (let fD = 0; fD < pD.length; fD++) {
        if (1 === CD[fD].size) continue;
        const cD = BD(DD, pD[fD]).flatMap(SD);
        (null === iD || cD.length < iD.length) && (iD = cD)
      }
      return iD
    }

    function BD(DD, CD) {
      const cD = new Map;
      for (const pD of DD) {
        var ID;
        const DD = CD(pD);
        cD.set(DD, [...null !== (ID = cD.get(DD)) && void 0 !== ID ? ID : [], pD])
      }
      return [...cD.values()]
    }
  },
  6356: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID.l,
      e: () => pD,
      f: () => ID.r
    });
    var ID = cD(6343);
    const pD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((CD => ({
      strict: DD,
      program: CD
    })))))
  },
  6404: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      forgetShaderPackActiveHint: () => qD,
      isOtherApiVersion: () => PD,
      isShaderPackActive: () => XD,
      isShaderPackChangePending: () => OD,
      markShaderPackChangePending: () => nD,
      pageShaderPackValidationVersion: () => HD,
      reconcileStoredShaderPackHint: () => xD,
      removeShaderPack: () => gD,
      replaceShaderPack: () => oD,
      saveShaderPack: () => ZD,
      shaderPackNeedsCheck: () => UD,
      storedPackOutcome: () => mD,
      storedShaderPackFiles: () => yD,
      toStoredShaderPack: () => BD
    });
    var ID = cD(6343),
      pD = cD(6356),
      iD = cD(36),
      fD = cD(3255),
      bD = cD(6409),
      QD = cD(6379);
    const wD = "shaderPackChangePending";
    let SD = null;

    function BD(DD, CD, cD) {
      return {
        manifest: DD.manifest,
        files: (0, ID.w)(DD.files),
        validation: CD,
        ...cD && {
          listing: cD
        }
      }
    }

    function yD(DD) {
      return Object.keys(DD.files).map((CD => ({
        path: CD,
        source: DD.files[CD]
      })))
    }
    let MD = Promise.resolve();

    function tD(DD) {
      const CD = MD.then(DD);
      return MD = CD.catch((() => {})), CD
    }

    function ZD(DD, CD) {
      return tD((() => vD(DD, CD)))
    }

    function oD(DD, CD, cD) {
      return tD((async () => JSON.stringify(await (0, bD.d)()) === JSON.stringify(DD) && (null === CD ? (await ND(), !0) : vD(CD, cD))))
    }
    async function vD(DD, CD) {
      const cD = await iD.f.setItem(bD.c, DD);
      return cD && JD(DD, CD), cD
    }
    async function ND() {
      await iD.f.removeItem(bD.c), iD.h.removeItem(fD.e)
    }

    function gD() {
      return tD(ND)
    }

    function XD(DD, CD) {
      return "active" === mD(DD, CD).kind
    }

    function mD(DD, CD) {
      var cD;
      return null === DD ? {
        kind: "none",
        reason: "nothingStored"
      } : PD(DD) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) || DD.validation.fromRecheck ? null === CD ? {
        kind: "none",
        reason: "noCompiler"
      } : UD(DD, CD) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : DD.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function nD() {
      iD.j.setItem(wD, performance.timeOrigin)
    }

    function OD() {
      return iD.j.getItem(wD) === performance.timeOrigin
    }

    function PD(DD) {
      return !(0, pD.f)(DD.manifest.apiVersion)
    }

    function HD(DD) {
      return SD ??= DD.zq((0, QD.shaderPackTextures)()), SD
    }

    function UD(DD, CD) {
      var cD;
      return (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.headerVersion) !== HD(CD)
    }

    function xD(DD) {
      return tD((async () => {
        JD(await (0, bD.d)(!0), DD)
      }))
    }

    function qD() {
      return tD((async () => {
        iD.h.removeItem(fD.e)
      }))
    }

    function JD(DD, CD) {
      XD(DD, CD) ? iD.h.setItem(fD.e, !0) : iD.h.removeItem(fD.e)
    }
  },
  6379: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      loadShaderPackTextures: () => fD,
      shaderPackTextures: () => bD
    });
    var ID = cD(6343);
    let pD = null,
      iD = null;

    function fD() {
      return iD ??= Promise.all([cD.e(69), cD.e(198)]).then((() => cD(39608))).then((DD => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: CD,
          textureNameToIndex: cD,
          textureAnimationData: iD
        } = DD;
        return pD ??= (0, ID.m)(cD, iD, CD), pD
      })), iD
    }

    function bD() {
      if (null === pD) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return pD
    }
  },
  6401: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD,
      f: () => bD
    });
    var ID = cD(6404),
      pD = cD(6379),
      iD = cD(110);
    const fD = 100;
    async function bD(DD, CD) {
      var cD;
      let ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cD = navigator.gpu) && void 0 !== cD ? cD : null;
      const fD = DD.R6(CD, (0, pD.shaderPackTextures)());
      if (fD.errors.length > 0) return wD(DD, fD.errors, fD.offInStrict);
      const bD = await async function(DD) {
        if (!DD) return null;
        try {
          const CD = await (0, iD.v)(DD);
          return CD ? await CD.requestDevice() : null
        } catch (CD) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", CD), null
        }
      }(ID);
      if (!bD) return null;
      let QD = !1;
      bD.lost.then((() => {
        QD = !0
      }));
      try {
        const CD = await Promise.all(fD.validationModules.map((CD => async function(DD, CD, cD) {
          CD.pushErrorScope("validation");
          const ID = CD.createShaderModule({
              code: cD.code
            }),
            pD = CD.popErrorScope(),
            {
              messages: iD
            } = await ID.getCompilationInfo(),
            fD = iD.filter((DD => "error" === DD.type)).map((CD => DD.mapValidationMessage(cD, CD))),
            bD = await pD;
          bD && 0 === fD.length && fD.push({
            file: null,
            line: 0,
            message: bD.message,
            variants: [cD.key]
          });
          return fD
        }(DD, bD, CD))));
        return QD ? null : wD(DD, DD.icD(CD.flat()), fD.offInStrict)
      } catch (SD) {
        return console.error("Couldn't validate the shader pack on WebGPU.", SD), null
      } finally {
        bD.destroy()
      }
    }
    async function QD(DD, CD) {
      var cD;
      if (!(0, ID.shaderPackNeedsCheck)(DD, CD) || (0, ID.isOtherApiVersion)(DD)) return DD;
      const pD = await bD(CD, (0, ID.storedShaderPackFiles)(DD));
      if (!pD) return DD;
      const iD = !1 === (null === (cD = DD.validation) || void 0 === cD ? void 0 : cD.ok) && !DD.validation.fromRecheck,
        fD = {
          ...DD,
          validation: iD ? pD : {
            ...pD,
            fromRecheck: !0
          }
        };
      return await (0, ID.replaceShaderPack)(DD, fD, CD) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), fD
    }

    function wD(DD, CD, cD) {
      return {
        headerVersion: (0, ID.pageShaderPackValidationVersion)(DD),
        ok: 0 === CD.length,
        errors: CD.slice(0, fD),
        moreErrors: Math.max(0, CD.length - fD),
        offInStrict: cD
      }
    }
  },
  6343: (DD, CD, cD) => {
    cD.d(CD, {
      A: () => BD,
      d: () => fD,
      h: () => iD,
      l: () => ID,
      m: () => tD,
      n: () => SD,
      r: () => pD,
      s: () => QD,
      w: () => wD
    });
    const ID = 5;

    function pD(DD) {
      return DD === ID
    }
    const iD = 262144,
      fD = 256,
      bD = 256;

    function QD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const CD = [];
      for (const [cD, ID] of Object.entries(DD)) {
        if ("string" !== typeof ID) return `${cD} isn't text.`;
        CD.push({
          path: cD,
          source: ID
        })
      }
      return CD.sort(((DD, CD) => SD(DD.path, CD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > fD) return `The pack has more than ${fD} .wgsl files.`;
          const CD = new Set;
          for (const {
              path: cD
            }
            of DD) {
            const DD = yD(cD);
            if (null !== DD) return DD;
            if (CD.has(cD)) return `The pack has two files at ${cD}.`;
            CD.add(cD)
          }
          return BD(DD) > iD ? `The pack's .wgsl files are over ${iD/1024} KB in total.` : null
        }(CD) ?? CD
    }

    function wD(DD) {
      const CD = {};
      for (const cD of DD) CD[cD.path] = cD.source;
      return CD
    }

    function SD(DD, CD) {
      return DD < CD ? -1 : DD > CD ? 1 : 0
    }

    function BD(DD) {
      const CD = new TextEncoder;
      let cD = 0;
      for (const {
          source: ID
        }
        of DD) cD += CD.encode(ID).byteLength;
      return cD
    }

    function yD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > bD) return `A file path is over ${bD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const MD = /^(.*)\[rot\[([1-4])$/;

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ID = new Map;
      CD.forEach(((DD, CD) => {
        let {
          numAnimStates: cD,
          animStartIdx: pD
        } = DD;
        for (let iD = 1; iD < cD; iD++) ID.set(pD + iD - 1, CD)
      }));
      const pD = Object.entries(DD),
        iD = new Map;
      for (const [ZD, oD] of pD) {
        const DD = MD.exec(ZD);
        "1" === DD?.[2] && iD.set(DD[1], oD + 1)
      }
      const fD = DD => {
          const CD = MD.exec(DD);
          return CD && iD.has(CD[1]) ? {
            root: CD[1],
            rotation: Number(CD[2]) - 1
          } : null
        },
        bD = new Set(pD.map((DD => {
          let [CD] = DD;
          return fD(CD)?.root ?? CD
        }))),
        QD = (DD, cD) => {
          const ID = DD.replace(/_?0$/, "");
          return (CD[cD]?.numAnimStates ?? 0) > 1 && !bD.has(ID) ? ID : DD
        },
        wD = new Map;
      for (const [MD, ZD] of pD) wD.set(ZD, QD(fD(MD)?.root ?? MD, ZD));
      const SD = pD.reduce(((DD, CD) => {
          let [, cD] = CD;
          return Math.max(DD, cD + 1)
        }), 0),
        BD = Array.from({
          length: SD
        }, ((DD, CD) => ({
          id: CD + 1,
          rotation: 0
        }))),
        yD = new Map,
        tD = new Map;
      for (const [MD, ZD] of pD) {
        const DD = fD(MD),
          CD = ID.get(ZD);
        if (void 0 !== CD) {
          const cD = wD.get(CD);
          tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "frame"
          }), DD && !tD.has(DD.root) && tD.set(DD.root, {
            name: DD.root,
            texture: cD,
            kind: "frame"
          });
          continue
        }
        const cD = wD.get(ZD),
          pD = DD?.root ?? MD;
        if (cD !== pD && tD.set(pD, {
            name: pD,
            texture: cD,
            kind: "frame"
          }), DD) {
          const CD = iD.get(DD.root);
          BD[ZD] = {
            id: CD,
            rotation: DD.rotation
          }, yD.set(cD, CD), tD.set(MD, {
            name: MD,
            texture: cD,
            kind: "rotation"
          })
        } else yD.set(cD, ZD + 1)
      }
      for (const MD of yD.keys()) tD.delete(MD);
      for (const [MD, ZD] of cD) {
        const DD = yD.get(ZD);
        void 0 === DD || yD.has(MD) || (yD.set(MD, DD), tD.delete(MD))
      }
      return {
        named: [...yD].sort(((DD, CD) => {
          let [cD] = DD, [ID] = CD;
          return cD < ID ? -1 : cD > ID ? 1 : 0
        })).map((DD => {
          let [CD, cD] = DD;
          return {
            name: CD,
            id: cD
          }
        })),
        aliases: [...tD.values()],
        layers: BD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);