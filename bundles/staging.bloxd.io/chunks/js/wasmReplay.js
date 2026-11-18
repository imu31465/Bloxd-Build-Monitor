export const id = 58;
export const ids = [58];
export const modules = {
  60042: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/bloxd_wasm_replay_bg.ee28eb068f6a09290403.wasm"
  },
  5953: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(3216);
    const yB = {
      bloxd_wasm: () => "6a2efd5680223ac4664cc3045620a185da94b2f4e06849c44e38e480fc80e38a",
      bloxd_wasm_client: () => "607784131ab158c610f964eeccd0a0852f74d8ce3d4f4aee969d2f319a80e3b6",
      bloxd_wasm_workers: () => "d5276c08ec0e736252a42b7c12c1091036eec7cc17105f167a56c574e34a0505",
      bloxd_wasm_models: () => "92f9285c30a7dd1629d525045b29e9aca6c3d567d620b4834fec4760fd172ddc",
      bloxd_wasm_webgpu: () => "ed656d46a24419edcd62f7bc46fd9a190039bf0f388edff699daa513cf32f6d2",
      bloxd_wasm_webgl: () => "52116128612eeabf26c6510c105a72c4a8c70bb8b756449209899fb860a93f15",
      bloxd_wasm_webgl1: () => "3697a90b61a47ddbbdceb28b1c9caaf73e71aabf414852b8293dc48cb3f6a6a8",
      bloxd_wasm_replay: () => "5464460b78e15b4bb176525399accbb59f863e7383feb54312b177c696166e48",
      bloxd_wasm_recorder: () => "e1fdcb56336c3bc38215a981e4378ac3821b8912419bc7fd948eb1da353324ba",
      bloxd_wasm_anim: () => "74e56eee078a428190364a7d35938aac7810b6b32140848c6b994c19e70e3042",
      bloxd_wasm_textures: () => "4b25ea5144f7ce6b7af54af6beda3d49671ed61aae27771d204b13971136dce5",
      bloxd_wasm_shader_pack: () => "4746bfad07ac1f13f98ece970e8e224d9432f9561a8a4390c6f598c4e17052f5"
    };
    var pB = dB(5959);

    function lB(BB) {
      const TB = Object.prototype.hasOwnProperty.call(yB, BB) ? yB[BB]() : void 0;
      if (void 0 !== TB) return {
        sha256: TB,
        onMismatch: pB.w
      };
      throw new VB.j(`${BB} has no release digest, so this build refuses it`)
    }
  },
  60035: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      BloxdReplayWasmError: () => cB,
      loadReplayModule: () => XB,
      markReplayTrapped: () => CB,
      replayMemoryBytes: () => hB,
      unloadReplayModule: () => WB
    });
    var VB = {};
    dB.r(VB), dB.d(VB, {
      OpB: () => yB,
      VJB: () => KB,
      Ok: () => pB,
      default: () => FB,
      initSync: () => UB,
      Dk: () => lB,
      gpB: () => JB,
      DpB: () => YB
    });
    class yB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        MB.Fg6H(BB, 0)
      }
      mpB(BB, TB, dB, VB, yB, pB) {
        MB.CvWo(this.__wbg_ptr, BB, TB, dB, VB, yB, pB)
      }
      close() {
        MB.v7Gv(this.__wbg_ptr)
      }
      crop(BB, TB) {
        MB.Pu6B(this.__wbg_ptr, BB, TB)
      }
      tpB(BB, TB) {
        MB.Sxcf(this.__wbg_ptr, BB, TB)
      }
      spB() {
        return MB.RYAH(this.__wbg_ptr) >>> 0
      }
      fpB() {
        return MB.Mrsg(this.__wbg_ptr) >>> 0
      }
      MpB() {
        return MB.MbXx(this.__wbg_ptr) >>> 0
      }
      zpB() {
        return MB.ravY(this.__wbg_ptr) >>> 0
      }
      NpB(BB, TB) {
        MB.a1AZ(this.__wbg_ptr, BB, TB)
      }
      constructor() {
        const BB = MB.HoGQ();
        return this.__wbg_ptr = BB, oB.register(this, this.__wbg_ptr, this), this
      }
      open() {
        MB.Xwcr(this.__wbg_ptr)
      }
      ppB() {
        return MB.mu33(this.__wbg_ptr) >>> 0
      }
      pause() {
        MB.aIqo(this.__wbg_ptr)
      }
      play() {
        MB.PQ3D(this.__wbg_ptr)
      }
      save() {
        return MB.njmh(this.__wbg_ptr) >>> 0
      }
      wpB() {
        MB.dQB1(this.__wbg_ptr)
      }
      seek(BB, TB) {
        MB.ZOzq(this.__wbg_ptr, BB, TB)
      }
      FpB(BB) {
        MB.wJcE(this.__wbg_ptr, BB)
      }
      ipB(BB, TB) {
        const dB = function(BB, TB) {
            const dB = TB(8 * BB.length, 8) >>> 0;
            return function() {
              null !== LB && 0 !== LB.byteLength || (LB = new Float64Array(MB.memory.buffer));
              return LB
            }().set(BB, dB / 8), zB = BB.length, dB
          }(TB, MB.GXho),
          VB = zB;
        MB.JBTi(this.__wbg_ptr, BB, dB, VB)
      }
      EpB(BB, TB) {
        MB.jjnB(this.__wbg_ptr, BB, TB)
      }
      UpB(BB) {
        MB.V6vt(this.__wbg_ptr, BB)
      }
      stage(BB) {
        return MB.AL3j(this.__wbg_ptr, BB) >>> 0
      }
      step(BB, TB) {
        return MB.iDXx(this.__wbg_ptr, BB, TB) >>> 0
      }
    }

    function pB(BB, TB) {
      const dB = function(BB, TB, dB) {
          if (void 0 === dB) {
            const dB = tB.encode(BB),
              VB = TB(dB.length, 1) >>> 0;
            return uB().subarray(VB, VB + dB.length).set(dB), zB = dB.length, VB
          }
          let VB = BB.length,
            yB = TB(VB, 1) >>> 0;
          const pB = uB();
          let lB = 0;
          for (; lB < VB; lB++) {
            const TB = BB.charCodeAt(lB);
            if (TB > 127) break;
            pB[yB + lB] = TB
          }
          if (lB !== VB) {
            0 !== lB && (BB = BB.slice(lB)), yB = dB(yB, VB, VB = lB + 3 * BB.length, 1) >>> 0;
            const TB = uB().subarray(yB + lB, yB + VB);
            lB += tB.encodeInto(BB, TB).written, yB = dB(yB, VB, lB, 1) >>> 0
          }
          return zB = lB, yB
        }(BB, MB.GXho, MB.v3s0),
        VB = zB,
        yB = MB.Wtu4(dB, VB, TB);
      if (yB[1]) throw vB(yB[0])
    }

    function lB() {
      MB.pm4r()
    }

    function JB() {
      return MB.erhj() >>> 0
    }

    function YB() {
      return vB(MB.jiNs())
    }

    function gB() {
      return {
        __proto__: null,
        zOAE: {
          __proto__: null,
          Xkws: function(BB, TB) {
            return kB(Error(OB(BB, TB)))
          },
          wK46: function() {
            return kB(MB.memory)
          },
          DvXj: function(BB, TB) {
            throw new Error(OB(BB, TB))
          },
          o7iP: function(BB, TB) {
            console.error(OB(BB, TB))
          },
          Xis8: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (yB.prototype[Symbol.dispose] = yB.prototype.free);
    const oB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => MB?.__wbg_replaymodule_free(BB, 1)));

    function kB(BB) {
      EB === HB.length && HB.push(HB.length + 1);
      const TB = EB;
      return EB = HB[TB], HB[TB] = BB, TB
    }
    let LB = null;

    function OB(BB, TB) {
      return function(BB, TB) {
        NB += TB, NB >= iB && (mB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mB.decode(), NB = TB);
        return mB.decode(uB().subarray(BB, BB + TB))
      }(BB >>> 0, TB)
    }
    let DB = null;

    function uB() {
      return null !== DB && 0 !== DB.byteLength || (DB = new Uint8Array(MB.memory.buffer)), DB
    }
    let HB = new Array(1024).fill(void 0);
    HB.push(void 0, null, !0, !1);
    let EB = HB.length;

    function vB(BB) {
      const TB = function(BB) {
        return HB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (HB[BB] = EB, EB = BB)
      }(BB), TB
    }
    let mB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mB.decode();
    const iB = 2146435072;
    let NB = 0;
    const tB = new TextEncoder;
    "encodeInto" in tB || (tB.encodeInto = function(BB, TB) {
      const dB = tB.encode(BB);
      return TB.set(dB), {
        read: BB.length,
        written: dB.length
      }
    });
    let fB, sB, MB, zB = 0;

    function wB(BB, TB) {
      return sB = BB, MB = BB.exports, fB = TB, LB = null, DB = null, MB.Qt3H(), MB
    }

    function UB(BB) {
      if (void 0 !== MB) return MB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const TB = gB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return wB(new WebAssembly.Instance(BB, TB), BB)
    }
    async function FB(BB) {
      if (void 0 !== MB) return MB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const TB = gB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: dB,
        module: VB
      } = await async function(BB, TB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, TB)
          } catch (dB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw dB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", dB)
          }
          const VB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(VB, TB)
        } {
          const dB = await WebAssembly.instantiate(BB, TB);
          return dB instanceof WebAssembly.Instance ? {
            instance: dB,
            module: BB
          } : dB
        }
      }(await BB, TB);
      return wB(dB, VB)
    }

    function KB() {
      MB = void 0, sB = void 0, LB = null, DB = null, HB = new Array(1024).fill(void 0), HB.push(void 0, null, !0, !1), EB = HB.length
    }
    var rB = dB(3216),
      IB = dB(5953);
    class cB extends Error {
      stage;
      constructor(BB, TB) {
        super((0, rB.E)(BB, TB), {
          cause: TB
        }), this.name = "BloxdReplayWasmError", this.stage = BB
      }
    }
    let SB = null,
      PB = null,
      QB = Promise.resolve(),
      RB = 0,
      aB = null,
      ZB = null;

    function XB() {
      if (ZB) return Promise.reject(ZB);
      if (PB) return PB;
      const BB = RB,
        TB = QB,
        yB = (async () => {
          let yB;
          await TB, SB ??= (0, rB.G)(new dB.U(dB(60042)), (0, IB.c)("bloxd_wasm_replay"));
          try {
            yB = await SB
          } catch (pB) {
            throw SB = null, new cB((0, rB.M)(pB), pB)
          }
          if (BB !== RB) throw new cB("instantiate", new Error("unloaded while loading"));
          try {
            await FB({
              module_or_path: yB
            })
          } catch (pB) {
            throw KB(), new cB("instantiate", pB)
          }
          if (BB !== RB) throw KB(), new cB("instantiate", new Error("unloaded while loading"));
          return aB = YB(), VB
        })();
      return PB = yB, QB = yB.catch((() => {})), yB.catch((() => {
        PB === yB && (PB = null)
      })), yB
    }

    function WB() {
      ZB || GB()
    }

    function hB() {
      return aB?.buffer.byteLength ?? 0
    }

    function CB(BB) {
      return ZB || (ZB = new cB("call", BB), GB()), ZB
    }

    function GB() {
      RB++, KB(), PB = null, aB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);