export const id = 4;
export const ids = [4];
export const modules = {
  40710: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/bloxd_wasm_anim_bg.f65dbc588b57c95172b7.wasm"
  },
  40701: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      BloxdAnimWasmError: () => hW,
      compileAnimationPackInWasm: () => mR
    });
    var wW = {};

    function CW(WW, RW, MW, wW, CW, zR) {
      const AW = PW(WW, XW.eITN),
        bR = jR,
        yR = PW(RW, XW.eITN),
        NW = jR,
        eW = PW(MW, XW.eITN),
        BW = jR,
        tR = PW(wW, XW.eITN),
        gR = jR,
        iR = PW(CW, XW.eITN),
        YW = jR;
      var IW = JW(zR) ? 0 : function(WW, RW) {
          const MW = RW(1 * WW.length, 1) >>> 0;
          return TW().set(WW, MW / 1), jR = WW.length, MW
        }(zR, XW.eITN),
        lW = jR;
      const FW = XW.dqRk(AW, bR, yR, NW, eW, BW, tR, gR, iR, YW, IW, lW);
      if (FW[3]) throw oW(FW[2]);
      var fW, QW, rR = (fW = FW[0], QW = FW[1], fW >>>= 0, TW().subarray(fW / 1, fW / 1 + QW)).slice();
      return XW.yFvI(FW[0], 1 * FW[1], 1), rR
    }

    function zR(WW, RW) {
      const MW = IW(WW, XW.eITN, XW.s4QQ),
        wW = jR,
        CW = XW.WkEd(MW, wW, RW);
      if (CW[1]) throw oW(CW[0])
    }

    function AW() {
      XW.u9cc()
    }

    function bR() {
      return {
        __proto__: null,
        cw3f: {
          __proto__: null,
          UWHr: function(WW, RW) {
            return yR(Error(BW(WW, RW)))
          },
          lCKX: function(WW, RW) {
            const MW = gR(RW),
              wW = "string" === typeof MW ? MW : void 0;
            var CW = JW(wW) ? 0 : IW(wW, XW.eITN, XW.s4QQ),
              zR = jR;
            eW().setInt32(WW + 4, zR, !0), eW().setInt32(WW + 0, CW, !0)
          },
          fsbW: function(WW, RW) {
            throw new Error(BW(WW, RW))
          },
          S691: function(WW, RW) {
            console.error(BW(WW, RW))
          },
          GB2v: function(WW) {
            oW(WW)
          }
        }
      }
    }

    function yR(WW) {
      YW === iR.length && iR.push(iR.length + 1);
      const RW = YW;
      return YW = iR[RW], iR[RW] = WW, RW
    }
    MW.r(wW), MW.d(wW, {
      dtW: () => CW,
      TW: () => zR,
      default: () => sW,
      initSync: () => aR,
      gR: () => AW
    });
    let NW = null;

    function eW() {
      return (null === NW || !0 === NW.buffer.detached || void 0 === NW.buffer.detached && NW.buffer !== XW.memory.buffer) && (NW = new DataView(XW.memory.buffer)), NW
    }

    function BW(WW, RW) {
      return function(WW, RW) {
        fW += RW, fW >= FW && (lW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), lW.decode(), fW = RW);
        return lW.decode(TW().subarray(WW, WW + RW))
      }(WW >>> 0, RW)
    }
    let tR = null;

    function TW() {
      return null !== tR && 0 !== tR.byteLength || (tR = new Uint8Array(XW.memory.buffer)), tR
    }

    function gR(WW) {
      return iR[WW]
    }
    let iR = new Array(1024).fill(void 0);
    iR.push(void 0, null, !0, !1);
    let YW = iR.length;

    function JW(WW) {
      return void 0 === WW || null === WW
    }

    function PW(WW, RW) {
      const MW = RW(4 * WW.length, 4) >>> 0,
        wW = eW();
      for (let CW = 0; CW < WW.length; CW++) wW.setUint32(MW + 4 * CW, yR(WW[CW]), !0);
      return jR = WW.length, MW
    }

    function IW(WW, RW, MW) {
      if (void 0 === MW) {
        const MW = QW.encode(WW),
          wW = RW(MW.length, 1) >>> 0;
        return TW().subarray(wW, wW + MW.length).set(MW), jR = MW.length, wW
      }
      let wW = WW.length,
        CW = RW(wW, 1) >>> 0;
      const zR = TW();
      let AW = 0;
      for (; AW < wW; AW++) {
        const RW = WW.charCodeAt(AW);
        if (RW > 127) break;
        zR[CW + AW] = RW
      }
      if (AW !== wW) {
        0 !== AW && (WW = WW.slice(AW)), CW = MW(CW, wW, wW = AW + 3 * WW.length, 1) >>> 0;
        const RW = TW().subarray(CW + AW, CW + wW);
        AW += QW.encodeInto(WW, RW).written, CW = MW(CW, wW, AW, 1) >>> 0
      }
      return jR = AW, CW
    }

    function oW(WW) {
      const RW = gR(WW);
      return function(WW) {
        WW < 1028 || (iR[WW] = YW, YW = WW)
      }(WW), RW
    }
    let lW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    lW.decode();
    const FW = 2146435072;
    let fW = 0;
    const QW = new TextEncoder;
    "encodeInto" in QW || (QW.encodeInto = function(WW, RW) {
      const MW = QW.encode(WW);
      return RW.set(MW), {
        read: WW.length,
        written: MW.length
      }
    });
    let rR, cR, XW, jR = 0;

    function kR(WW, RW) {
      return cR = WW, XW = WW.exports, rR = RW, NW = null, tR = null, XW.QMWq(), XW
    }

    function aR(WW) {
      if (void 0 !== XW) return XW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RW = bR();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return kR(new WebAssembly.Instance(WW, RW), WW)
    }
    async function sW(WW) {
      if (void 0 !== XW) return XW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RW = bR();
      ("string" === typeof WW || "function" === typeof Request && WW instanceof Request || "function" === typeof URL && WW instanceof URL) && (WW = fetch(WW));
      const {
        instance: MW,
        module: wW
      } = await async function(WW, RW) {
        if ("function" === typeof Response && WW instanceof Response) {
          if (!WW.ok) throw new Error(`failed to fetch Wasm: ${WW.status} ${WW.statusText} fetching '${WW.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(WW, RW)
          } catch (MW) {
            if (! function(WW) {
                switch (WW) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(WW.type) || "application/wasm" === WW.headers.get("Content-Type")) throw MW;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", MW)
          }
          const wW = await WW.arrayBuffer();
          return await WebAssembly.instantiate(wW, RW)
        } {
          const MW = await WebAssembly.instantiate(WW, RW);
          return MW instanceof WebAssembly.Instance ? {
            instance: MW,
            module: WW
          } : MW
        }
      }(await WW, RW);
      return kR(MW, wW)
    }
    var dW = MW(2801),
      pW = MW(5629);
    class hW extends Error {
      stage;
      constructor(WW, RW) {
        super((0, dW.l)(WW, RW), {
          cause: RW
        }), this.name = "BloxdAnimWasmError", this.stage = WW
      }
    }
    let UW = null,
      EW = null;

    function VW() {
      if (EW) throw EW
    }
    async function mR(WW, RW, CW) {
      VW();
      const zR = await (UW ??= (async () => {
        let WW;
        try {
          WW = await (0, dW.p)(new MW.U(MW(40710)), (0, pW.e)("bloxd_wasm_anim"))
        } catch (RW) {
          throw new hW((0, dW.s)(RW), RW)
        }
        try {
          await sW({
            module_or_path: WW
          })
        } catch (RW) {
          throw new hW("instantiate", RW)
        }
        return wW
      })(), UW.catch((() => {
        UW = null
      })), UW);
      VW();
      try {
        return zR.dtW(Object.entries(WW).flat(), [...RW.mobTypes], [...RW.vehicleTypes], [...RW.mobAiStates], [...RW.playerPoses], "builtIns" in CW ? CW.builtIns : void 0)
      } catch (AW) {
        const WW = new hW("call", AW);
        throw AW instanceof WebAssembly.RuntimeError && (EW = WW), WW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);