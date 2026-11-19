export const id = 5;
export const ids = [5];
export const modules = {
  42329: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/bloxd_wasm_anim_bg.1c10e4dc4bc0f74381c8.wasm"
  },
  42327: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      BloxdAnimWasmError: () => jY,
      compileAnimationPackInWasm: () => MY
    });
    var FY = {};

    function AY(YY, rY, DY, FY, AY, IY) {
      const RY = EY(YY, cY.vEFZ),
        OY = KY,
        gY = EY(rY, cY.vEFZ),
        aY = KY,
        vY = EY(DY, cY.vEFZ),
        uY = KY,
        sY = EY(FY, cY.vEFZ),
        yY = KY,
        QY = EY(AY, cY.vEFZ),
        oY = KY;
      var mY = WY(IY) ? 0 : function(YY, rY) {
          const DY = rY(1 * YY.length, 1) >>> 0;
          return iY().set(YY, DY / 1), KY = YY.length, DY
        }(IY, cY.vEFZ),
        SY = KY;
      const lY = cY.UsyN(RY, OY, gY, aY, vY, uY, sY, yY, QY, oY, mY, SY);
      if (lY[3]) throw VY(lY[2]);
      var TY, eY, NY = (TY = lY[0], eY = lY[1], TY >>>= 0, iY().subarray(TY / 1, TY / 1 + eY)).slice();
      return cY.DqQT(lY[0], 1 * lY[1], 1), NY
    }

    function IY(YY, rY) {
      const DY = mY(YY, cY.vEFZ, cY.EsKd),
        FY = KY,
        AY = cY.Fke2(DY, FY, rY);
      if (AY[1]) throw VY(AY[0])
    }

    function RY() {
      cY.q5F1()
    }

    function OY() {
      return {
        __proto__: null,
        vjKU: {
          __proto__: null,
          qQR5: function(YY, rY) {
            return gY(Error(uY(YY, rY)))
          },
          pyqD: function(YY, rY) {
            const DY = yY(rY),
              FY = "string" === typeof DY ? DY : void 0;
            var AY = WY(FY) ? 0 : mY(FY, cY.vEFZ, cY.EsKd),
              IY = KY;
            vY().setInt32(YY + 4, IY, !0), vY().setInt32(YY + 0, AY, !0)
          },
          u5SX: function(YY, rY) {
            throw new Error(uY(YY, rY))
          },
          lDVn: function(YY, rY) {
            console.error(uY(YY, rY))
          },
          j9QL: function(YY) {
            VY(YY)
          }
        }
      }
    }

    function gY(YY) {
      oY === QY.length && QY.push(QY.length + 1);
      const rY = oY;
      return oY = QY[rY], QY[rY] = YY, rY
    }
    DY.r(FY), DY.d(FY, {
      bIY: () => AY,
      qv: () => IY,
      default: () => ZY,
      initSync: () => zY,
      kv: () => RY
    });
    let aY = null;

    function vY() {
      return (null === aY || !0 === aY.buffer.detached || void 0 === aY.buffer.detached && aY.buffer !== cY.memory.buffer) && (aY = new DataView(cY.memory.buffer)), aY
    }

    function uY(YY, rY) {
      return function(YY, rY) {
        TY += rY, TY >= lY && (SY = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), SY.decode(), TY = rY);
        return SY.decode(iY().subarray(YY, YY + rY))
      }(YY >>> 0, rY)
    }
    let sY = null;

    function iY() {
      return null !== sY && 0 !== sY.byteLength || (sY = new Uint8Array(cY.memory.buffer)), sY
    }

    function yY(YY) {
      return QY[YY]
    }
    let QY = new Array(1024).fill(void 0);
    QY.push(void 0, null, !0, !1);
    let oY = QY.length;

    function WY(YY) {
      return void 0 === YY || null === YY
    }

    function EY(YY, rY) {
      const DY = rY(4 * YY.length, 4) >>> 0,
        FY = vY();
      for (let AY = 0; AY < YY.length; AY++) FY.setUint32(DY + 4 * AY, gY(YY[AY]), !0);
      return KY = YY.length, DY
    }

    function mY(YY, rY, DY) {
      if (void 0 === DY) {
        const DY = eY.encode(YY),
          FY = rY(DY.length, 1) >>> 0;
        return iY().subarray(FY, FY + DY.length).set(DY), KY = DY.length, FY
      }
      let FY = YY.length,
        AY = rY(FY, 1) >>> 0;
      const IY = iY();
      let RY = 0;
      for (; RY < FY; RY++) {
        const rY = YY.charCodeAt(RY);
        if (rY > 127) break;
        IY[AY + RY] = rY
      }
      if (RY !== FY) {
        0 !== RY && (YY = YY.slice(RY)), AY = DY(AY, FY, FY = RY + 3 * YY.length, 1) >>> 0;
        const rY = iY().subarray(AY + RY, AY + FY);
        RY += eY.encodeInto(YY, rY).written, AY = DY(AY, FY, RY, 1) >>> 0
      }
      return KY = RY, AY
    }

    function VY(YY) {
      const rY = yY(YY);
      return function(YY) {
        YY < 1028 || (QY[YY] = oY, oY = YY)
      }(YY), rY
    }
    let SY = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    SY.decode();
    const lY = 2146435072;
    let TY = 0;
    const eY = new TextEncoder;
    "encodeInto" in eY || (eY.encodeInto = function(YY, rY) {
      const DY = eY.encode(YY);
      return rY.set(DY), {
        read: YY.length,
        written: DY.length
      }
    });
    let NY, BY, cY, KY = 0;

    function HY(YY, rY) {
      return BY = YY, cY = YY.exports, NY = rY, aY = null, sY = null, cY.gjkQ(), cY
    }

    function zY(YY) {
      if (void 0 !== cY) return cY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module: YY
      } = YY) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rY = OY();
      YY instanceof WebAssembly.Module || (YY = new WebAssembly.Module(YY));
      return HY(new WebAssembly.Instance(YY, rY), YY)
    }
    async function ZY(YY) {
      if (void 0 !== cY) return cY;
      void 0 !== YY && (Object.getPrototypeOf(YY) === Object.prototype ? ({
        module_or_path: YY
      } = YY) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rY = OY();
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
      return HY(DY, FY)
    }
    var CY = DY(3316),
      fY = DY(6185);
    class jY extends Error {
      stage;
      constructor(YY, rY) {
        super((0, CY.z)(YY, rY), {
          cause: rY
        }), this.name = "BloxdAnimWasmError", this.stage = YY
      }
    }
    let hY = null,
      dY = null;

    function JY() {
      if (dY) throw dY
    }
    async function MY(YY, rY, AY) {
      JY();
      const IY = await (hY ??= (async () => {
        let YY;
        try {
          YY = await (0, CY.C)(new DY.U(DY(42329)), (0, fY.d)("bloxd_wasm_anim"))
        } catch (rY) {
          throw new jY((0, CY.E)(rY), rY)
        }
        try {
          await ZY({
            module_or_path: YY
          })
        } catch (rY) {
          throw new jY("instantiate", rY)
        }
        return FY
      })(), hY.catch((() => {
        hY = null
      })), hY);
      JY();
      try {
        return IY.bIY(Object.entries(YY).flat(), [...rY.mobTypes], [...rY.vehicleTypes], [...rY.mobAiStates], [...rY.playerPoses], "builtIns" in AY ? AY.builtIns : void 0)
      } catch (RY) {
        const YY = new jY("call", RY);
        throw RY instanceof WebAssembly.RuntimeError && (dY = YY), YY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);