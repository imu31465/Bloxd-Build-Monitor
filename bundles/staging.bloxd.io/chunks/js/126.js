export const id = 126;
export const ids = [126, 128, 131];
export const modules = {
  6157: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(6162),
      AY = DY(1125);
    const IY = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function RY(YY) {
      let {
        diagnostics: rY,
        more: DY = 0,
        t: RY
      } = YY;
      return (0, AY.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [rY.map(((YY, rY) => {
          const DY = (0, FY.f)(YY),
            OY = function(YY, rY) {
              const DY = (0, FY.e)(null !== YY && void 0 !== YY ? YY : []);
              if (0 === DY.length) return null;
              return DY.map((YY => YY.map((YY => rY(IY[YY]))).join(", "))).join("; ")
            }(YY.variants, RY);
          return (0, AY.jsxs)("li", {
            children: [DY && (0, AY.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: DY
            }), YY.message, OY && (0, AY.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: RY("shaderPack:onlyIn", {
                variants: OY
              })
            })]
          }, rY)
        })), DY > 0 && (0, AY.jsx)("li", {
          children: RY("shaderPack:moreErrors", {
            count: String(DY)
          })
        })]
      })
    }
  },
  6176: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => XY,
      i: () => qY
    });
    var FY = DY(61),
      AY = DY(1092),
      IY = DY.n(AY),
      RY = DY(4536),
      OY = DY(1337),
      gY = DY(1098),
      aY = DY(1437),
      vY = DY(1211),
      uY = DY(99),
      sY = DY(6150),
      iY = DY(6168);
    class yY extends Error {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(YY, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = YY, this.params = rY
      }
    }
    const QY = 1024,
      oY = 101010256,
      WY = 33639248,
      EY = 67324752,
      mY = 22,
      VY = 46,
      SY = 30,
      lY = 65535,
      TY = 65535,
      eY = 4294967295,
      NY = 0,
      BY = 8,
      cY = new TextDecoder;

    function KY(YY) {
      const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength),
        DY = function(YY) {
          const rY = YY.byteLength - mY;
          for (let DY = rY; DY >= Math.max(0, rY - lY); DY--)
            if (YY.getUint32(DY, !0) === oY && DY + mY + YY.getUint16(DY + 20, !0) <= YY.byteLength) return DY;
          throw new yY("shaderPack:loadNotZip")
        }(rY),
        FY = rY.getUint16(DY + 8, !0),
        AY = rY.getUint16(DY + 10, !0),
        IY = rY.getUint32(DY + 12, !0),
        RY = rY.getUint32(DY + 16, !0);
      if (AY === TY || IY === eY || RY === eY) throw CY();
      if (0 !== rY.getUint16(DY + 4, !0) || 0 !== rY.getUint16(DY + 6, !0) || FY !== AY) throw new yY("shaderPack:loadSplitZip");
      if (AY > QY) throw new yY("shaderPack:loadTooManyZipEntries", {
        count: String(QY)
      });
      const OY = RY + IY;
      if (OY > DY) throw ZY();
      const gY = [];
      let aY = RY;
      for (let vY = 0; vY < AY; vY++) {
        if (aY + VY > OY || rY.getUint32(aY, !0) !== WY) throw ZY();
        const DY = rY.getUint16(aY + 8, !0),
          FY = rY.getUint16(aY + 10, !0),
          AY = rY.getUint32(aY + 20, !0),
          IY = rY.getUint32(aY + 24, !0),
          vY = rY.getUint16(aY + 28, !0),
          uY = rY.getUint16(aY + 30, !0),
          sY = rY.getUint16(aY + 32, !0),
          iY = rY.getUint32(aY + 42, !0),
          yY = aY + VY;
        if (aY = yY + vY + uY + sY, aY > OY) throw ZY();
        if (AY === eY || IY === eY || iY === eY) throw CY();
        const QY = cY.decode(YY.subarray(yY, yY + vY)).replace(/\\/g, "/");
        QY.endsWith("/") || gY.push({
          path: QY,
          method: FY,
          encrypted: 0 !== (1 & DY),
          compressedSize: AY,
          dataOffset: zY(rY, iY, AY, RY)
        })
      }
      return gY
    }
    async function HY(YY, rY, DY) {
      if (rY.encrypted) throw new yY("shaderPack:loadEncrypted", {
        path: rY.path
      });
      if (rY.method === NY) return rY.compressedSize > DY ? null : YY.subarray(rY.dataOffset, rY.dataOffset + rY.compressedSize);
      if (rY.method === BY) return async function(YY, rY, DY) {
        const FY = new Blob([YY]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          AY = [];
        let IY = 0;
        try {
          for (;;) {
            const {
              done: YY,
              value: DY
            } = await FY.read();
            if (YY) break;
            if (IY += DY.byteLength, IY > rY) return await FY.cancel(), null;
            AY.push(DY)
          }
        } catch (gY) {
          throw new yY("shaderPack:loadDecompressFailed", {
            path: DY
          }, {
            cause: gY
          })
        }
        const RY = new Uint8Array(IY);
        let OY = 0;
        for (const aY of AY) RY.set(aY, OY), OY += aY.byteLength;
        return RY
      }(YY.slice(rY.dataOffset, rY.dataOffset + rY.compressedSize), DY, rY.path);
      throw new yY("shaderPack:loadUnsupportedCompression", {
        path: rY.path,
        method: String(rY.method)
      })
    }

    function zY(YY, rY, DY, FY) {
      if (rY + SY > FY || YY.getUint32(rY, !0) !== EY) throw ZY();
      const AY = rY + SY + YY.getUint16(rY + 26, !0) + YY.getUint16(rY + 28, !0);
      if (AY + DY > FY) throw ZY();
      return AY
    }

    function ZY() {
      return new yY("shaderPack:loadZipDamaged")
    }

    function CY() {
      return new yY("shaderPack:loadZip64")
    }
    const fY = 33554432,
      jY = 65536;
    async function hY(YY) {
      if (1 === YY.length && YY[0].name.toLowerCase().endsWith(".zip")) {
        const rY = YY[0];
        if (rY.size > fY) throw new yY("shaderPack:loadZipTooBig", {
          megabytes: String(fY / 1048576)
        });
        return async function(YY) {
          return dY(KY(YY).map((rY => ({
            path: rY.path,
            read: DY => HY(YY, rY, DY)
          }))))
        }(new Uint8Array(await rY.arrayBuffer()))
      }
      return dY(YY.map((YY => ({
        path: JY(YY),
        read: rY => async function(YY, rY) {
          return YY.size > rY ? null : new Uint8Array(await YY.arrayBuffer())
        }(YY, rY)
      }))))
    }
    async function dY(YY) {
      const rY = function(YY) {
          const rY = YY.length > 0 ? YY[0].path.indexOf("/") : -1;
          if (-1 === rY) return YY;
          const DY = YY[0].path.slice(0, rY + 1);
          if (!YY.every((YY => YY.path.startsWith(DY)))) return YY;
          return YY.map((YY => ({
            ...YY,
            path: YY.path.slice(DY.length)
          })))
        }(YY.filter((YY => ! function(YY) {
          const rY = YY.split("/"),
            DY = rY[rY.length - 1];
          return rY.includes("__MACOSX") || DY.startsWith("._") || ".DS_Store" === DY
        }(YY.path)))),
        DY = rY.filter((YY => "pack.json" === YY.path.toLowerCase()));
      if (0 === DY.length) throw new yY("shaderPack:loadNoManifest");
      if (DY.length > 1) throw new yY("shaderPack:loadDuplicateManifest");
      const FY = DY[0],
        AY = await FY.read(jY);
      if (null === AY) throw new yY("shaderPack:loadManifestTooBig", {
        kilobytes: String(jY / 1024)
      });
      const IY = function(YY) {
          let rY;
          try {
            rY = JSON.parse(YY)
          } catch (OY) {
            throw new yY("shaderPack:loadManifestNotJson", {
              error: OY.message
            }, {
              cause: OY
            })
          }
          if ("object" !== typeof rY || null === rY || Array.isArray(rY)) throw new yY("shaderPack:loadManifestNotObject");
          const {
            apiVersion: DY,
            name: FY,
            author: AY,
            description: IY,
            keepCircleShadows: RY
          } = rY;
          if (void 0 === DY) throw new yY("shaderPack:loadNoApiVersion", {
            version: String(iY.c)
          });
          if (!(0, iY.j)(DY)) throw new yY("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(DY),
            version: String(iY.c)
          });
          if ("string" !== typeof FY || "" === FY.trim()) throw new yY("shaderPack:loadNoName");
          if (void 0 !== AY && null !== AY && "string" !== typeof AY) throw new yY("shaderPack:loadAuthorNotString");
          if (void 0 !== IY && null !== IY && "string" !== typeof IY) throw new yY("shaderPack:loadDescriptionNotString");
          if (void 0 !== RY && "boolean" !== typeof RY) throw new yY("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: DY,
            name: FY,
            author: "string" === typeof AY ? AY : null,
            description: "string" === typeof IY && "" !== IY.trim() ? IY : null,
            keepCircleShadows: !0 === RY
          }
        }(MY(AY, FY.path)),
        RY = rY.filter((YY => YY.path.toLowerCase().endsWith(".wgsl"))).sort(((YY, rY) => (0, sY.r)(YY.path, rY.path)));
      if (0 === RY.length) throw new yY("shaderPack:loadNoWgsl");
      if (RY.length > sY.b) throw new yY("shaderPack:loadTooManyWgsl", {
        count: String(sY.b)
      });
      const OY = RY.find(((YY, rY) => rY > 0 && YY.path === RY[rY - 1].path));
      if (OY) throw new yY("shaderPack:loadDuplicatePath", {
        path: OY.path
      });
      const gY = [];
      let aY = sY.f;
      for (const vY of RY) {
        const YY = await vY.read(aY);
        if (null === YY) throw new yY("shaderPack:loadSourceTooBig", {
          kilobytes: String(sY.f / 1024)
        });
        aY -= YY.byteLength, gY.push({
          path: vY.path,
          source: MY(YY, vY.path)
        })
      }
      return {
        manifest: IY,
        files: gY
      }
    }

    function JY(YY) {
      return (YY.webkitRelativePath || YY.path || YY.name).replace(/^\.?\//, "")
    }

    function MY(YY, rY) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(YY)
      } catch (DY) {
        throw new yY("shaderPack:loadNotUtf8", {
          path: rY
        }, {
          cause: DY
        })
      }
    }
    var wY = DY(6162),
      bY = DY(1125);

    function XY(YY) {
      let {
        busy: rY,
        disabled: DY,
        onFiles: AY
      } = YY;
      const {
        t: sY
      } = (0, vY.C)(), iY = (0, FY.useRef)(null), yY = !(0, uY.isMobile)(), {
        getRootProps: QY,
        getInputProps: oY,
        isDragActive: WY,
        open: EY
      } = (0, RY.d)({
        onDrop: AY,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: DY
      });
      return (0, bY.jsxs)("div", {
        ...QY({
          className: IY()("ShaderPackDropZone", {
            ActiveDrag: WY,
            Disabled: DY
          })
        }),
        children: [(0, bY.jsx)("input", {
          ...oY({
            webkitdirectory: "true"
          })
        }), (0, bY.jsx)("input", {
          ref: iY,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(YY) {
            const rY = Array.from(YY.target.files);
            YY.target.value = "", AY(rY)
          }
        }), rY && (0, bY.jsx)(OY.c, {}), !rY && (0, bY.jsxs)(bY.Fragment, {
          children: [(0, bY.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, bY.jsx)(gY.e, {
              name: "up-from-bracket"
            })
          }), (0, bY.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: sY(yY ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, bY.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [yY && (0, bY.jsx)(aY.f, {
              disabled: DY,
              onClick: EY,
              children: sY("shaderPack:chooseFolder")
            }), (0, bY.jsx)(aY.f, {
              disabled: DY,
              onClick: () => {
                iY.current.click()
              },
              children: sY("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function qY(YY) {
      const {
        t: rY
      } = (0, vY.C)(), [DY, AY] = (0, FY.useState)(!1), [IY, RY] = (0, FY.useState)(null), OY = (0, FY.useRef)(!1);
      return {
        loading: DY,
        error: IY,
        setError: RY,
        onFiles: async function(DY) {
          if (!OY.current) {
            OY.current = !0, AY(!0), RY(null);
            try {
              await YY(await hY(DY))
            } catch (FY) {
              FY instanceof yY ? RY((0, wY.j)(rY, FY.translationKey, FY.params)) : (console.error("Failed to load the shader pack", FY), RY(rY("shaderPack:unexpectedError")))
            } finally {
              OY.current = !1, AY(!1)
            }
          }
        }
      }
    }
  },
  6162: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      f: () => RY,
      j: () => IY
    });
    var FY = DY(6168);
    const AY = [YY => YY.strict ? "strict" : "nonStrict", YY => YY.program];

    function IY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const FY = {};
      for (const AY in DY) FY[AY] = `\0${AY}\0`;
      return YY(rY, FY).replace(/\0(\w+)\0/g, ((YY, rY) => DY[rY]))
    }

    function RY(YY) {
      return null === YY.file ? null : YY.line > 0 ? `${YY.file}:${YY.line}` : YY.file
    }

    function OY(YY) {
      const rY = new Map(YY.map((YY => [gY(YY).join("."), YY])));
      if (0 === rY.size) return [];
      const DY = vY([...rY.values()]);
      return 0 === DY[0].length ? [] : DY
    }

    function gY(YY) {
      return AY.map((rY => rY(YY)))
    }
    const aY = AY.map((YY => new Set(FY.f.map(YY)).size));

    function vY(YY) {
      const rY = AY.map((rY => new Set(YY.map(rY)))),
        DY = rY.reduce(((YY, rY) => YY * rY.size), 1),
        FY = rY.every(((YY, rY) => 1 === YY.size || YY.size === aY[rY]));
      if (DY === YY.length && FY) return [AY.filter(((YY, DY) => 1 === rY[DY].size)).map((rY => rY(YY[0])))];
      let IY = null;
      for (let RY = 0; RY < AY.length; RY++) {
        if (1 === rY[RY].size) continue;
        const DY = uY(YY, AY[RY]).flatMap(vY);
        (null === IY || DY.length < IY.length) && (IY = DY)
      }
      return IY
    }

    function uY(YY, rY) {
      const DY = new Map;
      for (const AY of YY) {
        var FY;
        const YY = rY(AY);
        DY.set(YY, [...null !== (FY = DY.get(YY)) && void 0 !== FY ? FY : [], AY])
      }
      return [...DY.values()]
    }
  },
  6168: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.j,
      f: () => AY,
      j: () => FY.t
    });
    var FY = DY(6150);
    const AY = [!1, !0].flatMap((YY => ["terrain", "liquid", "model"].map((rY => ({
      strict: YY,
      program: rY
    })))))
  },
  6221: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      forgetShaderPackActiveHint: () => KY,
      isOtherApiVersion: () => eY,
      isShaderPackActive: () => VY,
      isShaderPackChangePending: () => TY,
      markShaderPackChangePending: () => lY,
      pageShaderPackValidationVersion: () => NY,
      reconcileStoredShaderPackHint: () => cY,
      removeShaderPack: () => mY,
      replaceShaderPack: () => oY,
      saveShaderPack: () => QY,
      shaderPackNeedsCheck: () => BY,
      storedPackOutcome: () => SY,
      storedShaderPackFiles: () => sY,
      toStoredShaderPack: () => uY
    });
    var FY = DY(6150),
      AY = DY(6168),
      IY = DY(40),
      RY = DY(3015),
      OY = DY(6230),
      gY = DY(6194);
    const aY = "shaderPackChangePending";
    let vY = null;

    function uY(YY, rY, DY) {
      return {
        manifest: YY.manifest,
        files: (0, FY.z)(YY.files),
        validation: rY,
        ...DY && {
          listing: DY
        }
      }
    }

    function sY(YY) {
      return Object.keys(YY.files).map((rY => ({
        path: rY,
        source: YY.files[rY]
      })))
    }
    let iY = Promise.resolve();

    function yY(YY) {
      const rY = iY.then(YY);
      return iY = rY.catch((() => {})), rY
    }

    function QY(YY, rY) {
      return yY((() => WY(YY, rY)))
    }

    function oY(YY, rY, DY) {
      return yY((async () => JSON.stringify(await (0, OY.e)()) === JSON.stringify(YY) && (null === rY ? (await EY(), !0) : WY(rY, DY))))
    }
    async function WY(YY, rY) {
      const DY = await IY.i.setItem(OY.c, YY);
      return DY && HY(YY, rY), DY
    }
    async function EY() {
      await IY.i.removeItem(OY.c), IY.m.removeItem(RY.b)
    }

    function mY() {
      return yY(EY)
    }

    function VY(YY, rY) {
      return "active" === SY(YY, rY).kind
    }

    function SY(YY, rY) {
      var DY;
      return null === YY ? {
        kind: "none",
        reason: "nothingStored"
      } : eY(YY) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) || YY.validation.fromRecheck ? null === rY ? {
        kind: "none",
        reason: "noCompiler"
      } : BY(YY, rY) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : YY.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function lY() {
      IY.q.setItem(aY, performance.timeOrigin)
    }

    function TY() {
      return IY.q.getItem(aY) === performance.timeOrigin
    }

    function eY(YY) {
      return !(0, AY.j)(YY.manifest.apiVersion)
    }

    function NY(YY) {
      return vY ??= YY.aT((0, gY.shaderPackTextures)()), vY
    }

    function BY(YY, rY) {
      var DY;
      return (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.headerVersion) !== NY(rY)
    }

    function cY(YY) {
      return yY((async () => {
        HY(await (0, OY.e)(!0), YY)
      }))
    }

    function KY() {
      return yY((async () => {
        IY.m.removeItem(RY.b)
      }))
    }

    function HY(YY, rY) {
      VY(YY, rY) ? IY.m.setItem(RY.b, !0) : IY.m.removeItem(RY.b)
    }
  },
  6194: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadShaderPackTextures: () => RY,
      shaderPackTextures: () => OY
    });
    var FY = DY(6150);
    let AY = null,
      IY = null;

    function RY() {
      return IY ??= Promise.all([DY.e(69), DY.e(193)]).then((() => DY(39609))).then((YY => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: rY,
          textureNameToIndex: DY,
          textureAnimationData: IY
        } = YY;
        return AY ??= (0, FY.n)(DY, IY, rY), AY
      })), IY
    }

    function OY() {
      if (null === AY) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return AY
    }
  },
  6212: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      g: () => OY
    });
    var FY = DY(6221),
      AY = DY(6194),
      IY = DY(121);
    const RY = 100;
    async function OY(YY, rY) {
      var DY;
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (DY = navigator.gpu) && void 0 !== DY ? DY : null;
      const RY = YY.I6(rY, (0, AY.shaderPackTextures)());
      if (RY.errors.length > 0) return aY(YY, RY.errors, RY.offInStrict);
      const OY = await async function(YY) {
        if (!YY) return null;
        try {
          const rY = await (0, IY.B)(YY);
          return rY ? await rY.requestDevice() : null
        } catch (rY) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", rY), null
        }
      }(FY);
      if (!OY) return null;
      let gY = !1;
      OY.lost.then((() => {
        gY = !0
      }));
      try {
        const rY = await Promise.all(RY.validationModules.map((rY => async function(YY, rY, DY) {
          rY.pushErrorScope("validation");
          const FY = rY.createShaderModule({
              code: DY.code
            }),
            AY = rY.popErrorScope(),
            {
              messages: IY
            } = await FY.getCompilationInfo(),
            RY = IY.filter((YY => "error" === YY.type)).map((rY => YY.mapValidationMessage(DY, rY))),
            OY = await AY;
          OY && 0 === RY.length && RY.push({
            file: null,
            line: 0,
            message: OY.message,
            variants: [DY.key]
          });
          return RY
        }(YY, OY, rY))));
        return gY ? null : aY(YY, YY.FDY(rY.flat()), RY.offInStrict)
      } catch (vY) {
        return console.error("Couldn't validate the shader pack on WebGPU.", vY), null
      } finally {
        OY.destroy()
      }
    }
    async function gY(YY, rY) {
      var DY;
      if (!(0, FY.shaderPackNeedsCheck)(YY, rY) || (0, FY.isOtherApiVersion)(YY)) return YY;
      const AY = await OY(rY, (0, FY.storedShaderPackFiles)(YY));
      if (!AY) return YY;
      const IY = !1 === (null === (DY = YY.validation) || void 0 === DY ? void 0 : DY.ok) && !YY.validation.fromRecheck,
        RY = {
          ...YY,
          validation: IY ? AY : {
            ...AY,
            fromRecheck: !0
          }
        };
      return await (0, FY.replaceShaderPack)(YY, RY, rY) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), RY
    }

    function aY(YY, rY, DY) {
      return {
        headerVersion: (0, FY.pageShaderPackValidationVersion)(YY),
        ok: 0 === rY.length,
        errors: rY.slice(0, RY),
        moreErrors: Math.max(0, rY.length - RY),
        offInStrict: DY
      }
    }
  },
  6150: (YY, rY, DY) => {
    DY.d(rY, {
      A: () => uY,
      b: () => RY,
      f: () => IY,
      j: () => FY,
      n: () => yY,
      r: () => vY,
      t: () => AY,
      w: () => gY,
      z: () => aY
    });
    const FY = 5;

    function AY(YY) {
      return YY === FY
    }
    const IY = 262144,
      RY = 256,
      OY = 256;

    function gY(YY) {
      if ("object" !== typeof YY || null === YY || Array.isArray(YY)) return "The pack has no files.";
      const rY = [];
      for (const [DY, FY] of Object.entries(YY)) {
        if ("string" !== typeof FY) return `${DY} isn't text.`;
        rY.push({
          path: DY,
          source: FY
        })
      }
      return rY.sort(((YY, rY) => vY(YY.path, rY.path))),
        function(YY) {
          if (0 === YY.length) return "The pack has no .wgsl files.";
          if (YY.length > RY) return `The pack has more than ${RY} .wgsl files.`;
          const rY = new Set;
          for (const {
              path: DY
            }
            of YY) {
            const YY = sY(DY);
            if (null !== YY) return YY;
            if (rY.has(DY)) return `The pack has two files at ${DY}.`;
            rY.add(DY)
          }
          return uY(YY) > IY ? `The pack's .wgsl files are over ${IY/1024} KB in total.` : null
        }(rY) ?? rY
    }

    function aY(YY) {
      const rY = {};
      for (const DY of YY) rY[DY.path] = DY.source;
      return rY
    }

    function vY(YY, rY) {
      return YY < rY ? -1 : YY > rY ? 1 : 0
    }

    function uY(YY) {
      const rY = new TextEncoder;
      let DY = 0;
      for (const {
          source: FY
        }
        of YY) DY += rY.encode(FY).byteLength;
      return DY
    }

    function sY(YY) {
      if (!YY.toLowerCase().endsWith(".wgsl")) return `${YY} isn't a .wgsl file.`;
      if (YY.length > OY) return `A file path is over ${OY} characters.`;
      if (YY.includes("\\") || /[\u0000-\u001f]/.test(YY)) return `${YY} isn't a valid file path.`;
      return YY.split("/").some((YY => "" === YY || "." === YY || ".." === YY)) ? `${YY} isn't a valid file path.` : null
    }
    const iY = /^(.*)\[rot\[([1-4])$/;

    function yY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const FY = new Map;
      rY.forEach(((YY, rY) => {
        let {
          numAnimStates: DY,
          animStartIdx: AY
        } = YY;
        for (let IY = 1; IY < DY; IY++) FY.set(AY + IY - 1, rY)
      }));
      const AY = Object.entries(YY),
        IY = new Map;
      for (const [QY, oY] of AY) {
        const YY = iY.exec(QY);
        "1" === YY?.[2] && IY.set(YY[1], oY + 1)
      }
      const RY = YY => {
          const rY = iY.exec(YY);
          return rY && IY.has(rY[1]) ? {
            root: rY[1],
            rotation: Number(rY[2]) - 1
          } : null
        },
        OY = new Set(AY.map((YY => {
          let [rY] = YY;
          return RY(rY)?.root ?? rY
        }))),
        gY = (YY, DY) => {
          const FY = YY.replace(/_?0$/, "");
          return (rY[DY]?.numAnimStates ?? 0) > 1 && !OY.has(FY) ? FY : YY
        },
        aY = new Map;
      for (const [iY, QY] of AY) aY.set(QY, gY(RY(iY)?.root ?? iY, QY));
      const vY = AY.reduce(((YY, rY) => {
          let [, DY] = rY;
          return Math.max(YY, DY + 1)
        }), 0),
        uY = Array.from({
          length: vY
        }, ((YY, rY) => ({
          id: rY + 1,
          rotation: 0
        }))),
        sY = new Map,
        yY = new Map;
      for (const [iY, QY] of AY) {
        const YY = RY(iY),
          rY = FY.get(QY);
        if (void 0 !== rY) {
          const DY = aY.get(rY);
          yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "frame"
          }), YY && !yY.has(YY.root) && yY.set(YY.root, {
            name: YY.root,
            texture: DY,
            kind: "frame"
          });
          continue
        }
        const DY = aY.get(QY),
          AY = YY?.root ?? iY;
        if (DY !== AY && yY.set(AY, {
            name: AY,
            texture: DY,
            kind: "frame"
          }), YY) {
          const rY = IY.get(YY.root);
          uY[QY] = {
            id: rY,
            rotation: YY.rotation
          }, sY.set(DY, rY), yY.set(iY, {
            name: iY,
            texture: DY,
            kind: "rotation"
          })
        } else sY.set(DY, QY + 1)
      }
      for (const iY of sY.keys()) yY.delete(iY);
      for (const [iY, QY] of DY) {
        const YY = sY.get(QY);
        void 0 === YY || sY.has(iY) || (sY.set(iY, YY), yY.delete(iY))
      }
      return {
        named: [...sY].sort(((YY, rY) => {
          let [DY] = YY, [FY] = rY;
          return DY < FY ? -1 : DY > FY ? 1 : 0
        })).map((YY => {
          let [rY, DY] = YY;
          return {
            name: rY,
            id: DY
          }
        })),
        aliases: [...yY.values()],
        layers: uY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);