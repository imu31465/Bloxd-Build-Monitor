export const id = 132;
export const ids = [132];
export const modules = {
  6182: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      loadPageShaderPackCompiler: () => sr
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      QFY: () => AY,
      I6: () => IY,
      default: () => pY,
      oFY: () => RY,
      WFY: () => OY,
      initSync: () => qY,
      kv: () => gY,
      FDY: () => aY,
      EFY: () => vY,
      mFY: () => uY,
      lT: () => sY,
      VFY: () => iY,
      aT: () => yY,
      SFY: () => QY
    });
    class AY {
      static __wrap(YY) {
        const rY = Object.create(AY.prototype);
        return rY.__wbg_ptr = YY, WY.register(rY, rY.__wbg_ptr, rY), rY
      }
      __destroy_into_raw() {
        const YY = this.__wbg_ptr;
        return this.__wbg_ptr = 0, WY.unregister(this), YY
      }
      free() {
        const YY = this.__destroy_into_raw();
        wY.Pi5D(YY, 0)
      }
      get errorsJson() {
        let YY, rY;
        try {
          const DY = wY.X4tm(this.__wbg_ptr);
          return YY = DY[0], rY = DY[1], TY(DY[0], DY[1])
        } finally {
          wY.M5co(YY, rY, 1)
        }
      }
      get features() {
        const YY = wY.c1ZH(this.__wbg_ptr);
        var rY = mY(YY[0], YY[1]);
        return wY.M5co(YY[0], 4 * YY[1], 4), rY
      }
      get hooks() {
        const YY = wY.ToEK(this.__wbg_ptr);
        var rY = VY(YY[0], YY[1]).slice();
        return wY.M5co(YY[0], 1 * YY[1], 1), rY
      }
      mapValidationMessage(YY, rY, DY, FY, AY) {
        let IY, RY;
        try {
          const aY = wY.YKyR(this.__wbg_ptr, YY, rY, DY, EY(FY), EY(AY));
          var OY = aY[0],
            gY = aY[1];
          if (aY[3]) throw OY = 0, gY = 0, CY(aY[2]);
          return IY = OY, RY = gY, TY(OY, gY)
        } finally {
          wY.M5co(IY, RY, 1)
        }
      }
      get moduleCodes() {
        const YY = wY.LZLi(this.__wbg_ptr);
        var rY = mY(YY[0], YY[1]);
        return wY.M5co(YY[0], 4 * YY[1], 4), rY
      }
      get offInStrictJson() {
        let YY, rY;
        try {
          const DY = wY.DerO(this.__wbg_ptr);
          return YY = DY[0], rY = DY[1], TY(DY[0], DY[1])
        } finally {
          wY.M5co(YY, rY, 1)
        }
      }
      get reads() {
        const YY = wY.vDQV(this.__wbg_ptr);
        var rY = mY(YY[0], YY[1]);
        return wY.M5co(YY[0], 4 * YY[1], 4), rY
      }
      get validationModuleCodes() {
        const YY = wY.TS88(this.__wbg_ptr);
        var rY = mY(YY[0], YY[1]);
        return wY.M5co(YY[0], 4 * YY[1], 4), rY
      }
      get validationModuleKeys() {
        const YY = wY.ZKa4(this.__wbg_ptr);
        var rY = VY(YY[0], YY[1]).slice();
        return wY.M5co(YY[0], 1 * YY[1], 1), rY
      }
      get variantFlags() {
        const YY = wY.Vw4S(this.__wbg_ptr);
        var rY = VY(YY[0], YY[1]).slice();
        return wY.M5co(YY[0], 1 * YY[1], 1), rY
      }
    }

    function IY(YY, rY, DY, FY, IY, RY, OY) {
      const gY = ZY(YY, wY.vG3a),
        aY = bY,
        vY = ZY(rY, wY.vG3a),
        uY = bY,
        sY = ZY(DY, wY.vG3a),
        iY = bY,
        yY = zY(FY, wY.vG3a),
        QY = bY,
        oY = ZY(IY, wY.vG3a),
        WY = bY,
        EY = ZY(RY, wY.vG3a),
        mY = bY,
        VY = ZY(OY, wY.vG3a),
        SY = bY,
        lY = wY.OGiE(gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY);
      if (lY[2]) throw CY(lY[1]);
      return AY.__wrap(lY[0])
    }

    function RY() {
      const YY = wY.p9p8();
      var rY = mY(YY[0], YY[1]);
      return wY.M5co(YY[0], 4 * YY[1], 4), rY
    }

    function OY() {
      const YY = wY.I4kq();
      var rY = mY(YY[0], YY[1]);
      return wY.M5co(YY[0], 4 * YY[1], 4), rY
    }

    function gY() {
      wY.WzA4()
    }

    function aY(YY, rY, DY, FY, AY) {
      let IY, RY;
      try {
        const aY = ZY(YY, wY.vG3a),
          vY = bY,
          uY = zY(rY, wY.vG3a),
          sY = bY,
          iY = ZY(DY, wY.vG3a),
          yY = bY,
          QY = zY(FY, wY.vG3a),
          oY = bY,
          WY = function(YY, rY) {
            const DY = rY(1 * YY.length, 1) >>> 0;
            return BY().set(YY, DY / 1), bY = YY.length, DY
          }(AY, wY.vG3a),
          EY = bY,
          mY = wY.YGSA(aY, vY, uY, sY, iY, yY, QY, oY, WY, EY);
        var OY = mY[0],
          gY = mY[1];
        if (mY[3]) throw OY = 0, gY = 0, CY(mY[2]);
        return IY = OY, RY = gY, TY(OY, gY)
      } finally {
        wY.M5co(IY, RY, 1)
      }
    }

    function vY() {
      let YY, rY;
      try {
        const DY = wY.mHJw();
        return YY = DY[0], rY = DY[1], TY(DY[0], DY[1])
      } finally {
        wY.M5co(YY, rY, 1)
      }
    }

    function uY(YY) {
      let rY, DY;
      try {
        const IY = wY.u6E9(YY);
        var FY = IY[0],
          AY = IY[1];
        if (IY[3]) throw FY = 0, AY = 0, CY(IY[2]);
        return rY = FY, DY = AY, TY(FY, AY)
      } finally {
        wY.M5co(rY, DY, 1)
      }
    }

    function sY() {
      return wY.pKqj() >>> 0
    }

    function iY() {
      let YY, rY;
      try {
        const DY = wY.iAIc();
        return YY = DY[0], rY = DY[1], TY(DY[0], DY[1])
      } finally {
        wY.M5co(YY, rY, 1)
      }
    }

    function yY(YY, rY) {
      let DY, FY;
      try {
        const RY = ZY(YY, wY.vG3a),
          OY = bY,
          gY = zY(rY, wY.vG3a),
          aY = bY,
          vY = wY.XJsh(RY, OY, gY, aY);
        var AY = vY[0],
          IY = vY[1];
        if (vY[3]) throw AY = 0, IY = 0, CY(vY[2]);
        return DY = AY, FY = IY, TY(AY, IY)
      } finally {
        wY.M5co(DY, FY, 1)
      }
    }

    function QY(YY) {
      let rY, DY;
      try {
        const IY = wY.oRez(EY(YY));
        var FY = IY[0],
          AY = IY[1];
        if (IY[3]) throw FY = 0, AY = 0, CY(IY[2]);
        return rY = FY, DY = AY, TY(FY, AY)
      } finally {
        wY.M5co(rY, DY, 1)
      }
    }

    function oY() {
      return {
        __proto__: null,
        z1XG: {
          __proto__: null,
          UPjL: function(YY, rY) {
            return EY(Error(TY(YY, rY)))
          },
          vcjQ: function(YY) {
            return null === cY(YY)
          },
          jKgx: function(YY) {
            return "string" === typeof cY(YY)
          },
          W2eo: function(YY, rY) {
            const DY = cY(rY),
              FY = "string" === typeof DY ? DY : void 0;
            var AY, IY = void 0 === (AY = FY) || null === AY ? 0 : function(YY, rY, DY) {
                if (void 0 === DY) {
                  const DY = dY.encode(YY),
                    FY = rY(DY.length, 1) >>> 0;
                  return BY().subarray(FY, FY + DY.length).set(DY), bY = DY.length, FY
                }
                let FY = YY.length,
                  AY = rY(FY, 1) >>> 0;
                const IY = BY();
                let RY = 0;
                for (; RY < FY; RY++) {
                  const rY = YY.charCodeAt(RY);
                  if (rY > 127) break;
                  IY[AY + RY] = rY
                }
                if (RY !== FY) {
                  0 !== RY && (YY = YY.slice(RY)), AY = DY(AY, FY, FY = RY + 3 * YY.length, 1) >>> 0;
                  const rY = BY().subarray(AY + RY, AY + FY);
                  RY += dY.encodeInto(YY, rY).written, AY = DY(AY, FY, RY, 1) >>> 0
                }
                return bY = RY, AY
              }(FY, wY.vG3a, wY.eQmX),
              RY = bY;
            lY().setInt32(YY + 4, RY, !0), lY().setInt32(YY + 0, IY, !0)
          },
          ybcu: function(YY, rY) {
            throw new Error(TY(YY, rY))
          },
          owZk: function(YY, rY) {
            return cY(YY).charCodeAt(rY >>> 0)
          },
          duBV: function(YY, rY) {
            console.error(TY(YY, rY))
          },
          qg4H: function(YY) {
            return cY(YY).length
          },
          Y7Gu: function(YY, rY) {
            return EY(TY(YY, rY))
          },
          rfgG: function(YY) {
            CY(YY)
          }
        }
      }
    }
    Symbol.dispose && (AY.prototype[Symbol.dispose] = AY.prototype.free);
    const WY = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((YY => wY.Pi5D(YY, 1)));

    function EY(YY) {
      HY === KY.length && KY.push(KY.length + 1);
      const rY = HY;
      return HY = KY[rY], KY[rY] = YY, rY
    }

    function mY(YY, rY) {
      YY >>>= 0;
      const DY = lY(),
        FY = [];
      for (let AY = YY; AY < YY + 4 * rY; AY += 4) FY.push(CY(DY.getUint32(AY, !0)));
      return FY
    }

    function VY(YY, rY) {
      return YY >>>= 0, BY().subarray(YY / 1, YY / 1 + rY)
    }
    let SY = null;

    function lY() {
      return (null === SY || !0 === SY.buffer.detached || void 0 === SY.buffer.detached && SY.buffer !== wY.memory.buffer) && (SY = new DataView(wY.memory.buffer)), SY
    }

    function TY(YY, rY) {
      return function(YY, rY) {
        hY += rY, hY >= jY && (fY = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fY.decode(), hY = rY);
        return fY.decode(BY().subarray(YY, YY + rY))
      }(YY >>> 0, rY)
    }
    let eY = null;
    let NY = null;

    function BY() {
      return null !== NY && 0 !== NY.byteLength || (NY = new Uint8Array(wY.memory.buffer)), NY
    }

    function cY(YY) {
      return KY[YY]
    }
    let KY = new Array(1024).fill(void 0);
    KY.push(void 0, null, !0, !1);
    let HY = KY.length;

    function zY(YY, rY) {
      const DY = rY(4 * YY.length, 4) >>> 0;
      return (null !== eY && 0 !== eY.byteLength || (eY = new Uint32Array(wY.memory.buffer)), eY).set(YY, DY / 4), bY = YY.length, DY
    }

    function ZY(YY, rY) {
      const DY = rY(4 * YY.length, 4) >>> 0,
        FY = lY();
      for (let AY = 0; AY < YY.length; AY++) FY.setUint32(DY + 4 * AY, EY(YY[AY]), !0);
      return bY = YY.length, DY
    }

    function CY(YY) {
      const rY = cY(YY);
      return function(YY) {
        YY < 1028 || (KY[YY] = HY, HY = YY)
      }(YY), rY
    }
    let fY = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fY.decode();
    const jY = 2146435072;
    let hY = 0;
    const dY = new TextEncoder;
    "encodeInto" in dY || (dY.encodeInto = function(YY, rY) {
      const DY = dY.encode(YY);
      return rY.set(DY), {
        read: YY.length,
        written: DY.length
      }
    });
    let JY, MY, wY, bY = 0;

    function XY(YY, rY) {
      return MY = YY, wY = YY.exports, JY = rY, SY = null, eY = null, NY = null, wY.sih7(), wY
    }

    function qY(YY) {
      if (void 0 !== wY) return wY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module: YY
      } = YY) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rY = oY();
      YY instanceof WebAssembly.Module || (YY = new WebAssembly.Module(YY));
      return XY(new WebAssembly.Instance(YY, rY), YY)
    }
    async function pY(YY) {
      if (void 0 !== wY) return wY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module_or_path: YY
      } = YY) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rY = oY();
      ("string" === typeof YY || "function" === typeof Request && YY instanceof Request || "function" === typeof URL && YY instanceof URL) && (YY = fetch(YY));
      const {
        instance: DY,
        module: FY
      } = await async function(YY, rY) {
        if ("function" === typeof Response && YY instanceof Response) {
          if (!YY.ok) throw new Error(`failed to fetch Wasm: ${YY.status} ${YY.statusText} fetching '${YY.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(YY, rY)
          } catch (DY) {
            if (! function(YY) {
                switch (YY) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(YY.type) || "application/wasm" === YY.headers.get("Content-Type")) throw DY;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", DY)
          }
          const FY = await YY.arrayBuffer();
          return await WebAssembly.instantiate(FY, rY)
        } {
          const DY = await WebAssembly.instantiate(YY, rY);
          return DY instanceof WebAssembly.Instance ? {
            instance: DY,
            module: YY
          } : DY
        }
      }(await YY, rY);
      return XY(DY, FY)
    }
    var kY = DY(3316),
      GY = DY(6185);
    class xY extends Error {
      stage;
      constructor(YY, rY) {
        super((0, kY.z)(YY, rY), {
          cause: rY
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = YY
      }
    }
    let nY = null,
      PY = null;

    function UY() {
      return nY ? Promise.resolve(nY) : (PY || (PY = async function() {
        let YY;
        try {
          YY = await (0, kY.C)(new DY.U(DY(6190)), (0, GY.d)("bloxd_wasm_shader_pack"))
        } catch (rY) {
          throw new xY((0, kY.E)(rY), rY)
        }
        try {
          await pY({
            module_or_path: YY
          })
        } catch (rY) {
          throw new xY("instantiate", rY)
        }
        return nY = FY, nY
      }(), PY.then(void 0, (() => {
        PY = null
      }))), PY)
    }
    var LY = DY(6200);

    function tY(YY) {
      let [rY, DY, FY, AY] = YY;
      const IY = {
        file: rY,
        line: DY,
        message: FY
      };
      return AY && (IY.variants = AY.map(LY.m)), IY
    }

    function Yr(YY) {
      return JSON.parse(YY).map(tY)
    }

    function rr(YY, rY) {
      if (!Number.isInteger(YY) || YY < 0 || YY > 4294967295) throw new Error(`${rY} ${YY} is not a whole number from 0 to 4294967295`);
      return YY
    }

    function Dr(YY) {
      return [YY.named.map((YY => YY.name)), Uint32Array.from(YY.named, (YY => rr(YY.id, "Texture ID")))]
    }
    const Fr = new WeakMap;
    const Ar = new WeakMap,
      Ir = new WeakSet;

    function Rr(YY, rY) {
      if (Ir.has(YY)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return rY()
      } catch (DY) {
        throw DY instanceof WebAssembly.RuntimeError && Ir.add(YY), DY
      }
    }

    function Or(YY) {
      let rY = Ar.get(YY);
      if (!rY) {
        let DY, FY;
        rY = {
          I6: (rY, DY) => Rr(YY, (() => function(YY, rY, DY) {
            const FY = YY.I6(rY.map((YY => YY.path)), rY.map((YY => YY.source)), ...Dr(DY), DY.aliases.map((YY => YY.name)), DY.aliases.map((YY => YY.texture)), DY.aliases.map((YY => YY.kind)));
            let AY = !1;
            try {
              const YY = FY.validationModuleCodes,
                rY = Array.from(FY.validationModuleKeys, ((rY, DY) => ({
                  key: (0, LY.m)(rY),
                  code: YY[DY]
                }))),
                DY = {
                  errors: Yr(FY.errorsJson),
                  offInStrict: Yr(FY.offInStrictJson),
                  variants: (0, LY.f)(FY),
                  validationModules: rY,
                  features: FY.features
                };
              return rY.forEach(((YY, rY) => {
                Fr.set(YY, {
                  pack: FY,
                  index: rY
                })
              })), AY = rY.length > 0, DY
            } finally {
              AY || FY.free()
            }
          }(YY, rY, DY))),
          mapValidationMessage: (rY, DY) => {
            const FY = Fr.get(rY);
            if (!FY) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return tY(JSON.parse(Rr(YY, (() => FY.pack.mapValidationMessage(FY.index, DY.lineNum, DY.linePos, DY.message, DY.type)))))
          },
          FDY: rY => Rr(YY, (() => function(YY, rY) {
            const DY = new Int32Array(rY.length),
              FY = [];
            return rY.forEach(((YY, rY) => {
              DY[rY] = YY.variants ? YY.variants.length : -1;
              for (const DY of YY.variants ?? []) FY.push((0, LY.i)(DY))
            })), Yr(YY.FDY(rY.map((YY => YY.file)), Uint32Array.from(rY, (YY => rr(YY.line, "Diagnostic line"))), rY.map((YY => YY.message)), DY, Uint8Array.from(FY)))
          }(YY, rY))),
          aT: rY => Rr(YY, (() => YY.aT(...Dr(rY)))),
          get SHADER_PACK_HEADER_VERSION() {
            return DY ??= Rr(YY, (() => YY.VFY())), DY
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return FY ??= Rr(YY, (() => {
              const rY = YY.WFY();
              return YY.oFY().map(((YY, DY) => ({
                path: YY,
                source: rY[DY]
              })))
            })), FY
          },
          SFY: rY => Rr(YY, (() => YY.SFY(rY))),
          resolveHeader: rY => Rr(YY, (() => YY.mFY((0, LY.i)(rY)))),
          EFY: () => Rr(YY, (() => YY.EFY()))
        }, Ar.set(YY, rY)
      }
      return rY
    }
    var gr = DY(2812),
      ar = DY(6194);
    const vr = "bloxdShaderPackWasmFailureReported";
    let ur = null;

    function sr() {
      return ur ??= async function() {
        if ("undefined" === typeof WebAssembly) return ir("unsupported", "This browser has no WebAssembly"), null;
        const YY = (0, ar.loadShaderPackTextures)().then((() => !0), (YY => (console.error("Could not load the shader pack textures, so shader packs can't run", YY), !1)));
        try {
          const rY = await async function() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : UY;
            return Or(await YY())
          }();
          return await YY ? rY : null
        } catch (rY) {
          const YY = rY instanceof Error ? rY.message : String(rY);
          return ir(gr.c[rY instanceof xY ? rY.stage : "instantiate"], YY), null
        }
      }(), ur
    }

    function ir(YY, rY) {
      (0, gr.g)(vr, `Shader pack wasm ${YY}, so shader packs can't run: ${rY}`, rY, `shader_pack_${YY}`)
    }
  },
  6190: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_shader_pack_bg.597717e8810c05eda113.wasm"
  },
  6185: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(3316);
    const AY = {
      bloxd_wasm: () => "903337e90214806242ef5ad341398181be3c87ea5226f5d308c1f706cca47468",
      bloxd_wasm_client: () => "d9f45f5c46370841da4c8574a141121ea34c64a996f4d1841ecd95c2e1c42524",
      bloxd_wasm_workers: () => "e832a210d1a00892314a96a90d4a810c538ccaba01655c65f515d94a02133b57",
      bloxd_wasm_models: () => "2f768b4533240fc126cb3ccd5bdd269ed4498ed1fa63eed4e2b125cc3c87dc9b",
      bloxd_wasm_webgpu: () => "13ae76830081d62490819e5586d96d611b16f3d36319392e7684b387dbb9a0ed",
      bloxd_wasm_webgl: () => "75d934553815430308e568d5596dcf3cbeac88e44101ca29221bb1053d751211",
      bloxd_wasm_webgl1: () => "b26fe3e2f92ba241e60c4d5654b9403c8c421137a13bbf9dcd393877458f3414",
      bloxd_wasm_replay: () => "48557d8c4d7642abff5e313d857ceb9ccf1d9842abaebd08aa0b5e4cbb90872b",
      bloxd_wasm_recorder: () => "68796f2c46f67a890c7e7a667a741a45748b338eb4307c043ddd50d779195794",
      bloxd_wasm_anim: () => "64d4b11d72243c88f5656437b1d8dfffaf2dae8a64597e8568942258a1cd2cc6",
      bloxd_wasm_textures: () => "129a63db7ae9f368dd82ca48a44da3bbf65d4eca5fdba1989a22ec841eb964c3",
      bloxd_wasm_shader_pack: () => "907c252f98c6434be7b5e8e7e6ecbbf37da692dc3544d16a95f87d273dc21da1"
    };
    var IY = DY(4269);

    function RY(YY) {
      const rY = Object.prototype.hasOwnProperty.call(AY, YY) ? AY[YY]() : void 0;
      if (void 0 !== rY) return {
        sha256: rY,
        onMismatch: IY.z
      };
      throw new FY.h(`${YY} has no release digest, so this build refuses it`)
    }
  },
  6200: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => VY,
      f: () => SY,
      i: () => EY,
      m: () => WY
    });
    var FY = DY(6208);
    const AY = 6,
      IY = 3,
      RY = 1,
      OY = 2,
      gY = 4,
      aY = 8,
      vY = 16,
      uY = 32,
      sY = 64,
      iY = 128,
      yY = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function QY(YY) {
      if (!YY) return 0;
      const rY = yY.indexOf(YY);
      if (rY <= 0) throw new Error(`"${YY}" is not a shader pack hook function`);
      return rY
    }

    function oY(YY) {
      if (0 === YY) return null;
      const rY = yY[YY];
      if (void 0 === rY) throw new Error(`${YY} is not a shader pack hook function id`);
      return rY
    }

    function WY(YY) {
      const rY = FY.c.length;
      return {
        strict: YY >= rY,
        program: FY.c[YY % rY]
      }
    }

    function EY(YY) {
      return Number(YY.strict) * FY.c.length + FY.c.indexOf(YY.program)
    }

    function mY(YY) {
      return "" === YY ? [] : YY.split(" ")
    }

    function VY(YY) {
      const rY = {
        variantFlags: new Uint8Array(AY),
        hooks: new Uint8Array(AY * IY),
        moduleCodes: Array(AY).fill(""),
        reads: Array(2 * AY).fill("")
      };
      for (const DY of YY) {
        const YY = EY(DY.key),
          FY = (YY, rY) => null === DY.hooks.surface || DY.reads.fragment.includes(YY) ? 0 : rY;
        rY.variantFlags[YY] = (DY.sceneDepth ? RY : 0) | (DY.movesVertices ? OY : 0) | (DY.sunShadow ? gY : 0) | (DY.airShadow ? aY : 0) | (DY.discards ? vY : 0) | FY("localPosition", uY) | FY("enchantSpeed", sY) | FY("enchantTier", iY), rY.hooks[YY * IY] = QY(DY.hooks.vertex), rY.hooks[YY * IY + 1] = QY(DY.hooks.surface), rY.hooks[YY * IY + 2] = QY(DY.hooks.light), rY.moduleCodes[YY] = DY.moduleCode, rY.reads[2 * YY] = DY.reads.vertex.join(" "), rY.reads[2 * YY + 1] = DY.reads.fragment.join(" ")
      }
      return rY
    }

    function SY(YY) {
      const {
        hooks: rY,
        moduleCodes: DY,
        reads: FY
      } = YY;
      return Array.from(YY.variantFlags, ((YY, AY) => {
        const uY = AY * IY;
        return {
          key: WY(AY),
          hooks: {
            vertex: oY(rY[uY]),
            surface: oY(rY[uY + 1]),
            light: oY(rY[uY + 2])
          },
          moduleCode: DY[AY],
          sceneDepth: 0 !== (YY & RY),
          sunShadow: 0 !== (YY & gY),
          airShadow: 0 !== (YY & aY),
          movesVertices: 0 !== (YY & OY),
          discards: 0 !== (YY & vY),
          reads: {
            vertex: mY(FY[2 * AY]),
            fragment: mY(FY[2 * AY + 1])
          }
        }
      }))
    }
  },
  6208: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      e: () => RY,
      h: () => OY,
      l: () => AY,
      o: () => IY
    });
    const FY = ["terrain", "liquid", "model"];

    function AY() {
      const YY = [];
      for (const rY of [!1, !0])
        for (const DY of FY) YY.push({
          strict: rY,
          program: DY
        });
      return YY
    }

    function IY(YY) {
      return `${YY.strict?"strict":"allow"}.${YY.program}`
    }

    function RY(YY) {
      return !YY.hooks.vertex && !YY.hooks.surface && !YY.hooks.light
    }

    function OY(YY, rY) {
      return "off" !== rY && (null === YY || YY.some((YY => YY.key.strict === ("strict" === rY) && !RY(YY))))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);