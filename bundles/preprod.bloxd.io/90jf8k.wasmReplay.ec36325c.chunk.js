export const id = 54;
export const ids = [54];
export const modules = {
  59226: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/bloxd_wasm_replay_bg.683a4e1ca3fdad492789.wasm"
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
  },
  59221: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      BloxdReplayWasmError: () => cW,
      loadReplayModule: () => nF,
      markReplayTrapped: () => wF,
      replayMemoryBytes: () => KF,
      unloadReplayModule: () => HF
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      SiF: () => AF,
      KeF: () => oF,
      eF: () => uF,
      default: () => ZF,
      initSync: () => xW,
      EF: () => hF,
      pRF: () => bW,
      CiF: () => dF
    });
    class AF {
      __destroy_into_raw() {
        const FF = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RF.unregister(this), FF
      }
      free() {
        const FF = this.__destroy_into_raw();
        LF.MKfa(FF, 0)
      }
      beF(FF, WF, SF, CF, AF, uF) {
        LF.bjH0(this.__wbg_ptr, FF, WF, SF, CF, AF, uF)
      }
      close() {
        LF.Oif7(this.__wbg_ptr)
      }
      crop(FF, WF) {
        LF.XBat(this.__wbg_ptr, FF, WF)
      }
      RiF(FF, WF) {
        LF.oyGF(this.__wbg_ptr, FF, WF)
      }
      eiF() {
        return LF.gS3I(this.__wbg_ptr) >>> 0
      }
      ieF() {
        return LF.RyVL(this.__wbg_ptr) >>> 0
      }
      EiF() {
        return LF.IQPq(this.__wbg_ptr) >>> 0
      }
      QiF() {
        return LF.zV51(this.__wbg_ptr) >>> 0
      }
      PiF(FF, WF) {
        LF.CpD1(this.__wbg_ptr, FF, WF)
      }
      constructor() {
        const FF = LF.THkl();
        return this.__wbg_ptr = FF, RF.register(this, this.__wbg_ptr, this), this
      }
      open() {
        LF.G57x(this.__wbg_ptr)
      }
      BRF() {
        return LF.SJnU(this.__wbg_ptr) >>> 0
      }
      pause() {
        LF.igRg(this.__wbg_ptr)
      }
      play() {
        LF.VHDy(this.__wbg_ptr)
      }
      save() {
        return LF.EbSe(this.__wbg_ptr) >>> 0
      }
      reF() {
        LF.lnUI(this.__wbg_ptr)
      }
      seek(FF, WF) {
        LF.AvPr(this.__wbg_ptr, FF, WF)
      }
      teF(FF) {
        LF.Pe4t(this.__wbg_ptr, FF)
      }
      diF(FF, WF) {
        const SF = function(FF, WF) {
            const SF = WF(8 * FF.length, 8) >>> 0;
            return function() {
              null !== eF && 0 !== eF.byteLength || (eF = new Float64Array(LF.memory.buffer));
              return eF
            }().set(FF, SF / 8), mW = FF.length, SF
          }(WF, LF.GfJT),
          CF = mW;
        LF.NTsN(this.__wbg_ptr, FF, SF, CF)
      }
      hiW(FF, WF) {
        LF.kQKu(this.__wbg_ptr, FF, WF)
      }
      geF(FF) {
        LF.JBRp(this.__wbg_ptr, FF)
      }
      stage(FF) {
        return LF.tgr8(this.__wbg_ptr, FF) >>> 0
      }
      step(FF, WF) {
        return LF.YvNw(this.__wbg_ptr, FF, WF) >>> 0
      }
    }

    function uF(FF, WF) {
      const SF = function(FF, WF, SF) {
          if (void 0 === SF) {
            const SF = VF.encode(FF),
              CF = WF(SF.length, 1) >>> 0;
            return rW().subarray(CF, CF + SF.length).set(SF), mW = SF.length, CF
          }
          let CF = FF.length,
            AF = WF(CF, 1) >>> 0;
          const uF = rW();
          let hF = 0;
          for (; hF < CF; hF++) {
            const WF = FF.charCodeAt(hF);
            if (WF > 127) break;
            uF[AF + hF] = WF
          }
          if (hF !== CF) {
            0 !== hF && (FF = FF.slice(hF)), AF = SF(AF, CF, CF = hF + 3 * FF.length, 1) >>> 0;
            const WF = rW().subarray(AF + hF, AF + CF);
            hF += VF.encodeInto(FF, WF).written, AF = SF(AF, CF, hF, 1) >>> 0
          }
          return mW = hF, AF
        }(FF, LF.GfJT, LF.rTy9),
        CF = mW,
        AF = LF.GzLO(SF, CF, WF);
      if (AF[1]) throw TF(AF[0])
    }

    function hF() {
      LF.mVgE()
    }

    function bW() {
      return LF.mKyP() >>> 0
    }

    function dF() {
      return TF(LF.Uvbe())
    }

    function PF() {
      return {
        __proto__: null,
        Uw7v: {
          __proto__: null,
          htFe: function(FF, WF) {
            return iW(Error(EF(FF, WF)))
          },
          hy6r: function() {
            return iW(LF.memory)
          },
          SvyH: function(FF, WF) {
            throw new Error(EF(FF, WF))
          },
          DIZ1: function(FF, WF) {
            console.error(EF(FF, WF))
          },
          eVuy: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (AF.prototype[Symbol.dispose] = AF.prototype.free);
    const RF = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((FF => LF?.__wbg_replaymodule_free(FF, 1)));

    function iW(FF) {
      tW === gW.length && gW.push(gW.length + 1);
      const WF = tW;
      return tW = gW[WF], gW[WF] = FF, WF
    }
    let eF = null;

    function EF(FF, WF) {
      return function(FF, WF) {
        qW += WF, qW >= kW && (aW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), aW.decode(), qW = WF);
        return aW.decode(rW().subarray(FF, FF + WF))
      }(FF >>> 0, WF)
    }
    let QF = null;

    function rW() {
      return null !== QF && 0 !== QF.byteLength || (QF = new Uint8Array(LF.memory.buffer)), QF
    }
    let gW = new Array(1024).fill(void 0);
    gW.push(void 0, null, !0, !1);
    let tW = gW.length;

    function TF(FF) {
      const WF = function(FF) {
        return gW[FF]
      }(FF);
      return function(FF) {
        FF < 1028 || (gW[FF] = tW, tW = FF)
      }(FF), WF
    }
    let aW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    aW.decode();
    const kW = 2146435072;
    let qW = 0;
    const VF = new TextEncoder;
    "encodeInto" in VF || (VF.encodeInto = function(FF, WF) {
      const SF = VF.encode(FF);
      return WF.set(SF), {
        read: FF.length,
        written: SF.length
      }
    });
    let NF, DF, LF, mW = 0;

    function OF(FF, WF) {
      return DF = FF, LF = FF.exports, NF = WF, eF = null, QF = null, LF.ri3g(), LF
    }

    function xW(FF) {
      if (void 0 !== LF) return LF;
      void 0 !== FF && (Object.getPrototypeOf(FF) === Object.prototype ? ({
        module: FF
      } = FF) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const WF = PF();
      FF instanceof WebAssembly.Module || (FF = new WebAssembly.Module(FF));
      return OF(new WebAssembly.Instance(FF, WF), FF)
    }
    async function ZF(FF) {
      if (void 0 !== LF) return LF;
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
      return OF(SF, CF)
    }

    function oF() {
      LF = void 0, DF = void 0, eF = null, QF = null, gW = new Array(1024).fill(void 0), gW.push(void 0, null, !0, !1), tW = gW.length
    }
    var YF = SF(2906),
      MF = SF(5592);
    class cW extends Error {
      stage;
      constructor(FF, WF) {
        super((0, YF.t)(FF, WF), {
          cause: WF
        }), this.name = "BloxdReplayWasmError", this.stage = FF
      }
    }
    let GF = null,
      zW = null,
      IF = Promise.resolve(),
      fF = 0,
      yW = null,
      sF = null;

    function nF() {
      if (sF) return Promise.reject(sF);
      if (zW) return zW;
      const FF = fF,
        WF = IF,
        AF = (async () => {
          let AF;
          await WF, GF ??= (0, YF.w)(new SF.U(SF(59226)), (0, MF.c)("bloxd_wasm_replay"));
          try {
            AF = await GF
          } catch (uF) {
            throw GF = null, new cW((0, YF.C)(uF), uF)
          }
          if (FF !== fF) throw new cW("instantiate", new Error("unloaded while loading"));
          try {
            await ZF({
              module_or_path: AF
            })
          } catch (uF) {
            throw oF(), new cW("instantiate", uF)
          }
          if (FF !== fF) throw oF(), new cW("instantiate", new Error("unloaded while loading"));
          return yW = dF(), CF
        })();
      return zW = AF, IF = AF.catch((() => {})), AF.catch((() => {
        zW === AF && (zW = null)
      })), AF
    }

    function HF() {
      sF || XF()
    }

    function KF() {
      return yW?.buffer.byteLength ?? 0
    }

    function wF(FF) {
      return sF || (sF = new cW("call", FF), XF()), sF
    }

    function XF() {
      fF++, oF(), zW = null, yW = null
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);