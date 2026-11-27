export const id = 5;
export const ids = [5];
export const modules = {
  54791: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_anim_bg.39cfafebdd7463cb374f.wasm"
  },
  54787: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdAnimWasmError: () => vW,
      compileAnimationPackInWasm: () => pW
    });
    var mW = {};

    function EW(WW, iW, OW, mW, EW, NW) {
      const PW = kW(WW, hW.VnNx),
        LW = HW,
        cW = kW(iW, hW.VnNx),
        wW = HW,
        tW = kW(OW, hW.VnNx),
        ZW = HW,
        xW = kW(mW, hW.VnNx),
        AW = HW,
        bW = kW(EW, hW.VnNx),
        jW = HW;
      var sW = UW(NW) ? 0 : function(WW, iW) {
          const OW = iW(1 * WW.length, 1) >>> 0;
          return lW().set(WW, OW / 1), HW = WW.length, OW
        }(NW, hW.VnNx),
        KW = HW;
      const SW = hW.Ncmb(PW, LW, cW, wW, tW, ZW, xW, AW, bW, jW, sW, KW);
      if (SW[3]) throw MW(SW[2]);
      var YW, yW, TW = (YW = SW[0], yW = SW[1], YW >>>= 0, lW().subarray(YW / 1, YW / 1 + yW)).slice();
      return hW.AlF0(SW[0], 1 * SW[1], 1), TW
    }

    function NW(WW, iW) {
      const OW = sW(WW, hW.VnNx, hW.Rmm1),
        mW = HW,
        EW = hW.JLiP(OW, mW, iW);
      if (EW[1]) throw MW(EW[0])
    }

    function PW() {
      hW.xFkT()
    }

    function LW() {
      return {
        __proto__: null,
        rthQ: {
          __proto__: null,
          Mjwu: function(WW, iW) {
            return cW(Error(ZW(WW, iW)))
          },
          dZ7X: function(WW, iW) {
            const OW = AW(iW),
              mW = "string" === typeof OW ? OW : void 0;
            var EW = UW(mW) ? 0 : sW(mW, hW.VnNx, hW.Rmm1),
              NW = HW;
            tW().setInt32(WW + 4, NW, !0), tW().setInt32(WW + 0, EW, !0)
          },
          v1Mk: function(WW, iW) {
            throw new Error(ZW(WW, iW))
          },
          iaoL: function(WW, iW) {
            console.error(ZW(WW, iW))
          },
          lgNX: function(WW) {
            MW(WW)
          }
        }
      }
    }

    function cW(WW) {
      jW === bW.length && bW.push(bW.length + 1);
      const iW = jW;
      return jW = bW[iW], bW[iW] = WW, iW
    }
    OW.r(mW), OW.d(mW, {
      lLW: () => EW,
      sw: () => NW,
      default: () => oW,
      initSync: () => uW,
      qt: () => PW
    });
    let wW = null;

    function tW() {
      return null !== wW && wW.buffer === hW.memory.buffer || (wW = new DataView(hW.memory.buffer)), wW
    }

    function ZW(WW, iW) {
      return function(WW, iW) {
        YW += iW, YW >= SW && (KW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), KW.decode(), YW = iW);
        return KW.decode(lW().subarray(WW, WW + iW))
      }(WW >>> 0, iW)
    }
    let xW = null;

    function lW() {
      return null !== xW && 0 !== xW.byteLength || (xW = new Uint8Array(hW.memory.buffer)), xW
    }

    function AW(WW) {
      return bW[WW]
    }
    let bW = new Array(1024).fill(void 0);
    bW.push(void 0, null, !0, !1);
    let jW = bW.length;

    function UW(WW) {
      return void 0 === WW || null === WW
    }

    function kW(WW, iW) {
      const OW = iW(4 * WW.length, 4) >>> 0,
        mW = tW();
      for (let EW = 0; EW < WW.length; EW++) mW.setUint32(OW + 4 * EW, cW(WW[EW]), !0);
      return HW = WW.length, OW
    }

    function sW(WW, iW, OW) {
      if (void 0 === OW) {
        const OW = yW.encode(WW),
          mW = iW(OW.length, 1) >>> 0;
        return lW().subarray(mW, mW + OW.length).set(OW), HW = OW.length, mW
      }
      let mW = WW.length,
        EW = iW(mW, 1) >>> 0;
      const NW = lW();
      let PW = 0;
      for (; PW < mW; PW++) {
        const iW = WW.charCodeAt(PW);
        if (iW > 127) break;
        NW[EW + PW] = iW
      }
      if (PW !== mW) {
        0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
        const iW = lW().subarray(EW + PW, EW + mW);
        PW += yW.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
      }
      return HW = PW, EW
    }

    function MW(WW) {
      const iW = AW(WW);
      return function(WW) {
        WW < 1028 || (bW[WW] = jW, jW = WW)
      }(WW), iW
    }
    let KW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    KW.decode();
    const SW = 2146435072;
    let YW = 0;
    const yW = new TextEncoder;
    "encodeInto" in yW || (yW.encodeInto = function(WW, iW) {
      const OW = yW.encode(WW);
      return iW.set(OW), {
        read: WW.length,
        written: OW.length
      }
    });
    let TW, JW, hW, HW = 0;

    function nW(WW, iW) {
      return JW = WW, hW = WW.exports, TW = iW, wW = null, xW = null, hW.zNwJ(), hW
    }

    function uW(WW) {
      if (void 0 !== hW) return hW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const iW = LW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return nW(new WebAssembly.Instance(WW, iW), WW)
    }
    async function oW(WW) {
      if (void 0 !== hW) return hW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const iW = LW();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: OW,
        module: mW
      } = await async function(WW, iW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, iW)
          } catch (OW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw OW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", OW)
          }
          const mW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(mW, iW)
        } {
          const OW = await WebAssembly.instantiate(WW, iW);
          return OW instanceof WebAssembly.Instance ? {
            instance: OW,
            module: WW
          } : OW
        }
      }(await WW, iW);
      return nW(OW, mW)
    }
    var dW = OW(2388),
      eW = OW(7625);
    class vW extends Error {
      stage;
      constructor(WW, iW) {
        super((0, dW.A)(WW, iW), {
          cause: iW
        }), this.name = "BloxdAnimWasmError", this.stage = WW
      }
    }
    let gW = null,
      DW = null;

    function VW() {
      if (DW) throw DW
    }
    async function pW(WW, iW, EW) {
      VW();
      const NW = await (gW ??= (async () => {
        let WW;
        try {
          WW = await (0, dW.B)(new OW.U(OW(54791)), (0, eW.c)("bloxd_wasm_anim"))
        } catch (iW) {
          throw new vW((0, dW.E)(iW), iW)
        }
        try {
          await oW({
            module_or_path: WW
          })
        } catch (iW) {
          throw new vW("instantiate", iW)
        }
        return mW
      })(), gW.catch((() => {
        gW = null
      })), gW);
      VW();
      try {
        return NW.lLW(Object.entries(WW).flat(), [...iW.mobTypes], [...iW.vehicleTypes], [...iW.mobAiStates], [...iW.playerPoses], "builtIns" in EW ? EW.builtIns : void 0)
      } catch (PW) {
        const WW = new vW("call", PW);
        throw PW instanceof WebAssembly.RuntimeError && (DW = WW), WW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);