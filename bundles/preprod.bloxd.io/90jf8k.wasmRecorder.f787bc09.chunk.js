export const id = 53;
export const ids = [53];
export const modules = {
  59217: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_recorder_bg.84a5bb323b6cb46623a8.wasm"
  },
  59210: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdRecorderWasmError: () => cW,
      RECORDER_MODULE_ID: () => MF,
      loadRecorderModule: () => IF,
      markRecorderTrapped: () => yW,
      prefetchRecorderModule: () => fF,
      recorderMemoryBytes: () => nF,
      unloadRecorderModule: () => sF
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      FiF: () => AF,
      KeF: () => ZF,
      eF: () => uF,
      default: () => xW,
      initSync: () => OF,
      EF: () => hF,
      pRF: () => bW,
      wRF: () => dF
    });
    class AF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        DF.TBB7(FF, 0)
      }
      busy() {
        return 0 !== DF.namN(this.__wbg_ptr)
      }
      command(FF, WF) {
        return 0 !== DF.En5t(this.__wbg_ptr, FF, WF)
      }
      XRF(FF) {
        return DF.eAh1(this.__wbg_ptr, FF) >>> 0
      }
      KRF() {
        DF.fKqM(this.__wbg_ptr)
      }
      HRF() {
        return DF.lz11(this.__wbg_ptr) >>> 0
      }
      nRF() {
        return DF.auY0(this.__wbg_ptr)
      }
      jiF() {
        return DF.Koho(this.__wbg_ptr) >>> 0
      }
      viF() {
        return DF.CuMH(this.__wbg_ptr) >>> 0
      }
      feed(FF) {
        return DF.mdSi(this.__wbg_ptr, FF) >>> 0
      }
      constructor() {
        const FF = DF.EZ6r();
        return this.__wbg_ptr = FF, RF.register(this, this.__wbg_ptr, this), this
      }
      BRF() {
        return DF.BBsc(this.__wbg_ptr) >>> 0
      }
      weF() {
        return DF.G465(this.__wbg_ptr) >>> 0
      }
      sRF(FF, WF, SF) {
        return 0 !== DF.ECvx(this.__wbg_ptr, FF, WF, SF)
      }
      stage(FF) {
        return DF.JxdK(this.__wbg_ptr, FF) >>> 0
      }
      step() {
        return DF.UiGi(this.__wbg_ptr) >>> 0
      }
    }

    function uF(FF, WF) {
      const SF = function(FF, WF, SF) {
          if (void 0 === SF) {
            const SF = qW.encode(FF),
              CF = WF(SF.length, 1) >>> 0;
            return QF().subarray(CF, CF + SF.length).set(SF), LF = SF.length, CF
          }
          let CF = FF.length,
            AF = WF(CF, 1) >>> 0;
          const uF = QF();
          let hF = 0;
          for (; hF < CF; hF++) {
            const WF = FF.charCodeAt(hF);
            if (WF > 127) break;
            uF[AF + hF] = WF
          }
          if (hF !== CF) {
            0 !== hF && (FF = FF.slice(hF)), AF = SF(AF, CF, CF = hF + 3 * FF.length, 1) >>> 0;
            const WF = QF().subarray(AF + hF, AF + CF);
            hF += qW.encodeInto(FF, WF).written, AF = SF(AF, CF, hF, 1) >>> 0
          }
          return LF = hF, AF
        }(FF, DF.Kf4x, DF.XbwW),
        CF = LF,
        AF = DF.yoMb(SF, CF, WF);
      if (AF[1]) throw tW(AF[0])
    }

    function hF() {
      DF.SJST()
    }

    function bW() {
      return DF.SKNr() >>> 0
    }

    function dF() {
      return tW(DF.c8Wp())
    }

    function PF() {
      return {
        __proto__: null,
        jSvo: {
          __proto__: null,
          jtZd: function(FF, WF) {
            return iW(Error(eF(FF, WF)))
          },
          LbJY: function() {
            return iW(DF.memory)
          },
          OlCz: function(FF, WF) {
            throw new Error(eF(FF, WF))
          },
          eJRy: function(FF, WF) {
            console.error(eF(FF, WF))
          },
          a1GR: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (AF.prototype[Symbol.dispose] = AF.prototype.free);
    const RF = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((FF => DF?.__wbg_recordermodule_free(FF, 1)));

    function iW(FF) {
      gW === rW.length && rW.push(rW.length + 1);
      const WF = gW;
      return gW = rW[WF], rW[WF] = FF, WF
    }

    function eF(FF, WF) {
      return function(FF, WF) {
        kW += WF, kW >= aW && (TF = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), TF.decode(), kW = WF);
        return TF.decode(QF().subarray(FF, FF + WF))
      }(FF >>> 0, WF)
    }
    let EF = null;

    function QF() {
      return null !== EF && 0 !== EF.byteLength || (EF = new Uint8Array(DF.memory.buffer)), EF
    }
    let rW = new Array(1024).fill(void 0);
    rW.push(void 0, null, !0, !1);
    let gW = rW.length;

    function tW(FF) {
      const WF = function(FF) {
        return rW[FF]
      }(FF);
      return function(FF) {
        FF < 1028 || (rW[FF] = gW, gW = FF)
      }(FF), WF
    }
    let TF = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    TF.decode();
    const aW = 2146435072;
    let kW = 0;
    const qW = new TextEncoder;
    "encodeInto" in qW || (qW.encodeInto = function(FF, WF) {
      const SF = qW.encode(FF);
      return WF.set(SF), {
        read: FF.length,
        written: SF.length
      }
    });
    let VF, NF, DF, LF = 0;

    function mW(FF, WF) {
      return NF = FF, DF = FF.exports, VF = WF, EF = null, DF.Le1D(), DF
    }

    function OF(FF) {
      if (void 0 !== DF) return DF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module: FF
      } = FF) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WF = PF();
      FF instanceof WebAssembly.Module || (FF = new WebAssembly.Module(FF));
      return mW(new WebAssembly.Instance(FF, WF), FF)
    }
    async function xW(FF) {
      if (void 0 !== DF) return DF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module_or_path: FF
      } = FF) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const WF = PF();
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
      return mW(SF, CF)
    }

    function ZF() {
      DF = void 0, NF = void 0, EF = null, rW = new Array(1024).fill(void 0), rW.push(void 0, null, !0, !1), gW = rW.length
    }
    var oF = SF(2906),
      YF = SF(5592);
    const MF = 2;
    class cW extends Error {
      stage;
      constructor(FF, WF) {
        super((0, oF.t)(FF, WF), {
          cause: WF
        }), this.name = "BloxdRecorderWasmError", this.stage = FF
      }
    }
    let GF = null;
    const zW = function(FF) {
      let WF = null,
        SF = null,
        CF = null,
        AF = null;
      const uF = async () => {
        let SF = null;
        try {
          return SF = WF ??= (0, oF.w)(FF.url(), (0, YF.c)(FF.name)), await SF
        } catch (CF) {
          throw WF === SF && (WF = null), FF.error((0, oF.C)(CF), CF)
        }
      };
      return {
        load: () => {
          if (AF) return Promise.reject(AF);
          if (SF) return SF;
          const WF = (async () => {
            const WF = await uF();
            try {
              await FF.init(WF)
            } catch (SF) {
              throw FF.error("instantiate", SF)
            }
            return FF.uC
          })();
          SF = WF, CF = WF;
          const hF = () => {
            CF === WF && (CF = null)
          };
          return WF.then(hF, (() => {
            hF(), SF === WF && (SF = null)
          })), WF
        },
        prefetch: async () => {
          AF || SF || await uF()
        },
        markTrapped: WF => (AF ??= FF.error("call", WF), AF),
        unload: () => {
          AF || !FF.reset || CF || (FF.reset(), SF = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new SF.U(SF(59217)),
      init: async FF => {
        await xW({
          module_or_path: FF
        }), GF = dF()
      },
      uC: CF,
      error: (FF, WF) => new cW(FF, WF),
      reset: () => {
        ZF(), GF = null
      }
    });

    function IF() {
      return zW.load()
    }

    function fF() {
      return zW.prefetch()
    }

    function yW(FF) {
      return zW.markTrapped(FF)
    }

    function sF() {
      zW.unload()
    }

    function nF() {
      return GF?.buffer.byteLength ?? 0
    }
  },
  5592: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(2906);
    const AF = {
      bloxd_wasm: () => "efcb444ad55054c75697ffc5686b17c1e3eb879bb002e111d264400e5de1a7ef",
      bloxd_wasm_client: () => "65255c90568b92887cb7530f65eed7c264bd4d50f08bc9bc108e00e98823fda1",
      bloxd_wasm_workers: () => "2cf8c5bb27543bd4c7dd6eabc3ff93edf11951f5cdb3a91906a467fc555106a3",
      bloxd_wasm_models: () => "a35d9de38e3cf77c5e0fd6302e8d6441c7b74c8d7bbbc2107b391ee98e2a8705",
      bloxd_wasm_webgpu: () => "4651122938542673b8d1bb5182e5a3e9ea54388c7db91adaeb4e878c90357e28",
      bloxd_wasm_webgl: () => "2da9697d5fa07af2fa6a6c154de5747af69b0b82f9d43c42e23748cb38e5d792",
      bloxd_wasm_webgl1: () => "3291109b80221408283e1499ae815394058938b8c353b9666d4b000ec38111b5",
      bloxd_wasm_replay: () => "fbae3a18b4e1534e284a9b41c64ea1f4ca46295ede9f96f6f2eb289bfbc00eb7",
      bloxd_wasm_recorder: () => "4da07565cbac43c165e972a237929edb5cb5009240c5c6feb67a3d80d0a13d20",
      bloxd_wasm_anim: () => "92ff8c8ca8cb8ec6f988da657ebcbaa7cc34b2565776af355950e873d8dba0ec",
      bloxd_wasm_textures: () => "87d7ce2c083790ea891ab410fab82340e4cae9ea4816c1f40ed5a2411f277fef",
      bloxd_wasm_shader_pack: () => "0618b025e02df188195cc584c0eaec51b0034deee6589ca394e966c72f4d3bfa"
    };
    var uF = SF(5597);

    function hF(FF) {
      const WF = Object.prototype.hasOwnProperty.call(AF, FF) ? AF[FF]() : void 0;
      if (void 0 !== WF) return {
        sha256: WF,
        onMismatch: uF.x
      };
      throw new CF.g(`${FF} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);