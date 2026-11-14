export const id = 4;
export const ids = [4];
export const modules = {
  41145: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_anim_bg.68a429d0ac6dd9ee408d.wasm"
  },
  41143: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdAnimWasmError: () => GF,
      compileAnimationPackInWasm: () => yW
    });
    var CF = {};

    function AF(FF, WF, SF, CF, AF, uF) {
      const hF = TF(FF, OF.nGjN),
        bW = xW,
        dF = TF(WF, OF.nGjN),
        PF = xW,
        RF = TF(SF, OF.nGjN),
        iW = xW,
        eF = TF(CF, OF.nGjN),
        QF = xW,
        rW = TF(AF, OF.nGjN),
        gW = xW;
      var aW = tW(uF) ? 0 : function(FF, WF) {
          const SF = WF(1 * FF.length, 1) >>> 0;
          return EF().set(FF, SF / 1), xW = FF.length, SF
        }(uF, OF.nGjN),
        qW = xW;
      const VF = OF.HDo4(hF, bW, dF, PF, RF, iW, eF, QF, rW, gW, aW, qW);
      if (VF[3]) throw kW(VF[2]);
      var NF, DF, LF = (NF = VF[0], DF = VF[1], NF >>>= 0, EF().subarray(NF / 1, NF / 1 + DF)).slice();
      return OF.PO7q(VF[0], 1 * VF[1], 1), LF
    }

    function uF(FF, WF) {
      const SF = aW(FF, OF.nGjN, OF.TYVX),
        CF = xW,
        AF = OF.RJXU(SF, CF, WF);
      if (AF[1]) throw kW(AF[0])
    }

    function hF() {
      OF.sAXZ()
    }

    function bW() {
      return {
        __proto__: null,
        oePK: {
          __proto__: null,
          ZwGu: function(FF, WF) {
            return dF(Error(iW(FF, WF)))
          },
          fzUf: function(FF, WF) {
            const SF = QF(WF),
              CF = "string" === typeof SF ? SF : void 0;
            var AF = tW(CF) ? 0 : aW(CF, OF.nGjN, OF.TYVX),
              uF = xW;
            RF().setInt32(FF + 4, uF, !0), RF().setInt32(FF + 0, AF, !0)
          },
          oXvB: function(FF, WF) {
            throw new Error(iW(FF, WF))
          },
          jAWF: function(FF, WF) {
            console.error(iW(FF, WF))
          },
          m9Fo: function(FF) {
            kW(FF)
          }
        }
      }
    }

    function dF(FF) {
      gW === rW.length && rW.push(rW.length + 1);
      const WF = gW;
      return gW = rW[WF], rW[WF] = FF, WF
    }
    SF.r(CF), SF.d(CF, {
      feF: () => AF,
      eF: () => uF,
      default: () => YF,
      initSync: () => oF,
      EF: () => hF
    });
    let PF = null;

    function RF() {
      return (null === PF || !0 === PF.buffer.detached || void 0 === PF.buffer.detached && PF.buffer !== OF.memory.buffer) && (PF = new DataView(OF.memory.buffer)), PF
    }

    function iW(FF, WF) {
      return function(FF, WF) {
        NF += WF, NF >= VF && (qW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), qW.decode(), NF = WF);
        return qW.decode(EF().subarray(FF, FF + WF))
      }(FF >>> 0, WF)
    }
    let eF = null;

    function EF() {
      return null !== eF && 0 !== eF.byteLength || (eF = new Uint8Array(OF.memory.buffer)), eF
    }

    function QF(FF) {
      return rW[FF]
    }
    let rW = new Array(1024).fill(void 0);
    rW.push(void 0, null, !0, !1);
    let gW = rW.length;

    function tW(FF) {
      return void 0 === FF || null === FF
    }

    function TF(FF, WF) {
      const SF = WF(4 * FF.length, 4) >>> 0,
        CF = RF();
      for (let AF = 0; AF < FF.length; AF++) CF.setUint32(SF + 4 * AF, dF(FF[AF]), !0);
      return xW = FF.length, SF
    }

    function aW(FF, WF, SF) {
      if (void 0 === SF) {
        const SF = DF.encode(FF),
          CF = WF(SF.length, 1) >>> 0;
        return EF().subarray(CF, CF + SF.length).set(SF), xW = SF.length, CF
      }
      let CF = FF.length,
        AF = WF(CF, 1) >>> 0;
      const uF = EF();
      let hF = 0;
      for (; hF < CF; hF++) {
        const WF = FF.charCodeAt(hF);
        if (WF > 127) break;
        uF[AF + hF] = WF
      }
      if (hF !== CF) {
        0 !== hF && (FF = FF.slice(hF)), AF = SF(AF, CF, CF = hF + 3 * FF.length, 1) >>> 0;
        const WF = EF().subarray(AF + hF, AF + CF);
        hF += DF.encodeInto(FF, WF).written, AF = SF(AF, CF, hF, 1) >>> 0
      }
      return xW = hF, AF
    }

    function kW(FF) {
      const WF = QF(FF);
      return function(FF) {
        FF < 1028 || (rW[FF] = gW, gW = FF)
      }(FF), WF
    }
    let qW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    qW.decode();
    const VF = 2146435072;
    let NF = 0;
    const DF = new TextEncoder;
    "encodeInto" in DF || (DF.encodeInto = function(FF, WF) {
      const SF = DF.encode(FF);
      return WF.set(SF), {
        read: FF.length,
        written: SF.length
      }
    });
    let LF, mW, OF, xW = 0;

    function ZF(FF, WF) {
      return mW = FF, OF = FF.exports, LF = WF, PF = null, eF = null, OF.YJMu(), OF
    }

    function oF(FF) {
      if (void 0 !== OF) return OF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module: FF
      } = FF) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WF = bW();
      FF instanceof WebAssembly.Module || (FF = new WebAssembly.Module(FF));
      return ZF(new WebAssembly.Instance(FF, WF), FF)
    }
    async function YF(FF) {
      if (void 0 !== OF) return OF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module_or_path: FF
      } = FF) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WF = bW();
      ("string" === typeof FF || "function" === typeof Request && FF instanceof Request || "function" === typeof URL && FF instanceof URL) && (FF = fetch(FF));
      const {
        instance: SF,
        module: CF
      } = await async function(FF, WF) {
        if ("function" === typeof Response && FF instanceof Response) {
          if (!FF.ok) throw new Error(`failed to fetch Wasm: ${FF.status} ${FF.statusText} fetching '${FF.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(FF, WF)
          } catch (SF) {
            if (! function(FF) {
                switch (FF) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(FF.type) || "application/wasm" === FF.headers.get("Content-Type")) throw SF;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", SF)
          }
          const CF = await FF.arrayBuffer();
          return await WebAssembly.instantiate(CF, WF)
        } {
          const SF = await WebAssembly.instantiate(FF, WF);
          return SF instanceof WebAssembly.Instance ? {
            instance: SF,
            module: FF
          } : SF
        }
      }(await FF, WF);
      return ZF(SF, CF)
    }
    var MF = SF(2906),
      cW = SF(5592);
    class GF extends Error {
      stage;
      constructor(FF, WF) {
        super((0, MF.t)(FF, WF), {
          cause: WF
        }), this.name = "BloxdAnimWasmError", this.stage = FF
      }
    }
    let zW = null,
      IF = null;

    function fF() {
      if (IF) throw IF
    }
    async function yW(FF, WF, AF) {
      fF();
      const uF = await (zW ??= (async () => {
        let FF;
        try {
          FF = await (0, MF.w)(new SF.U(SF(41145)), (0, cW.c)("bloxd_wasm_anim"))
        } catch (WF) {
          throw new GF((0, MF.C)(WF), WF)
        }
        try {
          await YF({
            module_or_path: FF
          })
        } catch (WF) {
          throw new GF("instantiate", WF)
        }
        return CF
      })(), zW.catch((() => {
        zW = null
      })), zW);
      fF();
      try {
        return uF.feF(Object.entries(FF).flat(), [...WF.mobTypes], [...WF.vehicleTypes], [...WF.mobAiStates], [...WF.playerPoses], "builtIns" in AF ? AF.builtIns : void 0)
      } catch (hF) {
        const FF = new GF("call", hF);
        throw hF instanceof WebAssembly.RuntimeError && (IF = FF), FF
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);