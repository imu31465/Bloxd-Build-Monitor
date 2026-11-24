export const id = 66;
export const ids = [66];
export const modules = {
  61643: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/bloxd_wasm_replay_bg.4de846bbcbcbbc4d37c6.wasm"
  },
  6578: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(2974);
    const nB = {
      bloxd_wasm: () => "7b09e9f186f5fba9951cb6b712084b2a283fca06a42be21f6449860d6e7dc573",
      bloxd_wasm_client: () => "c15f866f14080480fea14857b9de7e539e335dce452b3ac1f19f0e3e937c9012",
      bloxd_wasm_workers: () => "00de63c66aff71381fa14ebd2820bcc01d1f74d973a6e00204eb827cb328e85b",
      bloxd_wasm_models: () => "32d703ec0b794e85682ae80d087c7f2eff99230a39b9a0cb5be5c019534d7923",
      bloxd_wasm_webgpu: () => "1d41e428ff1a8bf8ab5a5da0e8d9f622575ba5f347bc8d40eb30b5fceef8b724",
      bloxd_wasm_webgl: () => "312dff8c1bb47e85d35f931d8977e1ee5f52f92a42fa20f9d0123d9376d1a917",
      bloxd_wasm_webgl1: () => "4855e300e3e615d0266ab5ac62961960b1300dfb8770375a7b598d1264a1830f",
      bloxd_wasm_replay: () => "5423fc1dc63ea74c6d9a1fac1b68ef8b53800a6e323e74b70ac272cca42c91f0",
      bloxd_wasm_recorder: () => "70b2547fb7560662bf26d9ee964aae4306b95745e4a8f6ad1533e65a931bfcbd",
      bloxd_wasm_anim: () => "a442a15413a6d8e2fce5f258c2ba4985529d8bf26cece64b09dc4584f043ade6",
      bloxd_wasm_textures: () => "e405dd767a5408e017f07c07979684ef0a0b2226e22378a714bcaf40408edfe9",
      bloxd_wasm_shader_pack: () => "98655291aac1601e5d21cb4017dab03da1e258471aa722674ba91fc68305d170"
    };
    var dB = zB(4782);

    function IB(BB) {
      const jB = Object.prototype.hasOwnProperty.call(nB, BB) ? nB[BB]() : void 0;
      if (void 0 !== jB) return {
        sha256: jB,
        onMismatch: dB.t
      };
      throw new QB.h(`${BB} has no release digest, so this build refuses it`)
    }
  },
  61634: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BloxdReplayWasmError: () => VB,
      loadReplayModule: () => WB,
      markReplayTrapped: () => wB,
      replayMemoryBytes: () => lB,
      unloadReplayModule: () => eB
    });
    var QB = {};
    zB.r(QB), zB.d(QB, {
      lnB: () => nB,
      VIB: () => DB,
      np: () => dB,
      default: () => HB,
      initSync: () => oB,
      dp: () => IB,
      TnB: () => NB,
      wnB: () => uB
    });
    class nB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, aB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        iB.bxkV(BB, 0)
      }
      cnB(BB, jB, zB, QB, nB, dB) {
        iB.Q6kQ(this.__wbg_ptr, BB, jB, zB, QB, nB, dB)
      }
      close() {
        iB.dAdr(this.__wbg_ptr)
      }
      crop(BB, jB) {
        iB.p6rx(this.__wbg_ptr, BB, jB)
      }
      RnB(BB, jB) {
        iB.c4pU(this.__wbg_ptr, BB, jB)
      }
      BdB() {
        return iB.I89P(this.__wbg_ptr) >>> 0
      }
      OnB() {
        return iB.JQaJ(this.__wbg_ptr) >>> 0
      }
      jdB() {
        return iB.KXUm(this.__wbg_ptr) >>> 0
      }
      zdB() {
        return iB.lFpO(this.__wbg_ptr) >>> 0
      }
      vnB(BB, jB) {
        iB.GN3n(this.__wbg_ptr, BB, jB)
      }
      constructor() {
        const BB = iB.NVjG();
        return this.__wbg_ptr = BB, aB.register(this, this.__wbg_ptr, this), this
      }
      open() {
        iB.CdpC(this.__wbg_ptr)
      }
      hnB() {
        return iB.rBXn(this.__wbg_ptr) >>> 0
      }
      pause() {
        iB.xjHR(this.__wbg_ptr)
      }
      play() {
        iB.SfA5(this.__wbg_ptr)
      }
      save() {
        return iB.B0eV(this.__wbg_ptr) >>> 0
      }
      QdB() {
        iB.meLu(this.__wbg_ptr)
      }
      seek(BB, jB) {
        iB.YPn3(this.__wbg_ptr, BB, jB)
      }
      ddB(BB) {
        iB.fFUS(this.__wbg_ptr, BB)
      }
      bnB(BB, jB) {
        const zB = function(BB, jB) {
            const zB = jB(8 * BB.length, 8) >>> 0;
            return function() {
              null !== rB && 0 !== rB.byteLength || (rB = new Float64Array(iB.memory.buffer));
              return rB
            }().set(BB, zB / 8), qB = BB.length, zB
          }(jB, iB.zSIi),
          QB = qB;
        iB.h8eG(this.__wbg_ptr, BB, zB, QB)
      }
      CnB(BB, jB) {
        iB.iOwq(this.__wbg_ptr, BB, jB)
      }
      ndB(BB) {
        iB.Kw3q(this.__wbg_ptr, BB)
      }
      stage(BB) {
        return iB.OQs0(this.__wbg_ptr, BB) >>> 0
      }
      step(BB, jB) {
        return iB.QDL7(this.__wbg_ptr, BB, jB) >>> 0
      }
    }

    function dB(BB, jB) {
      const zB = function(BB, jB, zB) {
          if (void 0 === zB) {
            const zB = SB.encode(BB),
              QB = jB(zB.length, 1) >>> 0;
            return mB().subarray(QB, QB + zB.length).set(zB), qB = zB.length, QB
          }
          let QB = BB.length,
            nB = jB(QB, 1) >>> 0;
          const dB = mB();
          let IB = 0;
          for (; IB < QB; IB++) {
            const jB = BB.charCodeAt(IB);
            if (jB > 127) break;
            dB[nB + IB] = jB
          }
          if (IB !== QB) {
            0 !== IB && (BB = BB.slice(IB)), nB = zB(nB, QB, QB = IB + 3 * BB.length, 1) >>> 0;
            const jB = mB().subarray(nB + IB, nB + QB);
            IB += SB.encodeInto(BB, jB).written, nB = zB(nB, QB, IB, 1) >>> 0
          }
          return qB = IB, nB
        }(BB, iB.zSIi, iB.Ch6o),
        QB = qB,
        nB = iB.reku(zB, QB, jB);
      if (nB[1]) throw GB(nB[0])
    }

    function IB() {
      iB.LDRB()
    }

    function NB() {
      return iB.o1es() >>> 0
    }

    function uB() {
      return GB(iB.OMY8())
    }

    function UB() {
      return {
        __proto__: null,
        RMys: {
          __proto__: null,
          RaqO: function(BB, jB) {
            return pB(Error(sB(BB, jB)))
          },
          tFVs: function() {
            return pB(iB.memory)
          },
          wucv: function(BB, jB) {
            throw new Error(sB(BB, jB))
          },
          UWLb: function(BB, jB) {
            console.error(sB(BB, jB))
          },
          mOZS: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (nB.prototype[Symbol.dispose] = nB.prototype.free);
    const aB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => iB?.__wbg_replaymodule_free(BB, 1)));

    function pB(BB) {
      kB === yB.length && yB.push(yB.length + 1);
      const jB = kB;
      return kB = yB[jB], yB[jB] = BB, jB
    }
    let rB = null;

    function sB(BB, jB) {
      return function(BB, jB) {
        tB += jB, tB >= gB && (LB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), LB.decode(), tB = jB);
        return LB.decode(mB().subarray(BB, BB + jB))
      }(BB >>> 0, jB)
    }
    let JB = null;

    function mB() {
      return null !== JB && 0 !== JB.byteLength || (JB = new Uint8Array(iB.memory.buffer)), JB
    }
    let yB = new Array(1024).fill(void 0);
    yB.push(void 0, null, !0, !1);
    let kB = yB.length;

    function GB(BB) {
      const jB = function(BB) {
        return yB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (yB[BB] = kB, kB = BB)
      }(BB), jB
    }
    let LB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    LB.decode();
    const gB = 2146435072;
    let tB = 0;
    const SB = new TextEncoder;
    "encodeInto" in SB || (SB.encodeInto = function(BB, jB) {
      const zB = SB.encode(BB);
      return jB.set(zB), {
        read: BB.length,
        written: zB.length
      }
    });
    let MB, EB, iB, qB = 0;

    function fB(BB, jB) {
      return EB = BB, iB = BB.exports, MB = jB, rB = null, JB = null, iB.DHWJ(), iB
    }

    function oB(BB) {
      if (void 0 !== iB) return iB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const jB = UB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return fB(new WebAssembly.Instance(BB, jB), BB)
    }
    async function HB(BB) {
      if (void 0 !== iB) return iB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const jB = UB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: zB,
        module: QB
      } = await async function(BB, jB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, jB)
          } catch (zB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw zB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", zB)
          }
          const QB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(QB, jB)
        } {
          const zB = await WebAssembly.instantiate(BB, jB);
          return zB instanceof WebAssembly.Instance ? {
            instance: zB,
            module: BB
          } : zB
        }
      }(await BB, jB);
      return fB(zB, QB)
    }

    function DB() {
      iB = void 0, EB = void 0, rB = null, JB = null, yB = new Array(1024).fill(void 0), yB.push(void 0, null, !0, !1), kB = yB.length
    }
    var FB = zB(2974),
      YB = zB(6578);
    class VB extends Error {
      stage;
      constructor(BB, jB) {
        super((0, FB.F)(BB, jB), {
          cause: jB
        }), this.name = "BloxdReplayWasmError", this.stage = BB
      }
    }
    let hB = null,
      XB = null,
      ZB = Promise.resolve(),
      AB = 0,
      TB = null,
      PB = null;

    function WB() {
      if (PB) return Promise.reject(PB);
      if (XB) return XB;
      const BB = AB,
        jB = ZB,
        nB = (async () => {
          let nB;
          await jB, hB ??= (0, FB.I)(new zB.U(zB(61643)), (0, YB.b)("bloxd_wasm_replay"));
          try {
            nB = await hB
          } catch (dB) {
            throw hB = null, new VB((0, FB.M)(dB), dB)
          }
          if (BB !== AB) throw new VB("instantiate", new Error("unloaded while loading"));
          try {
            await HB({
              module_or_path: nB
            })
          } catch (dB) {
            throw DB(), new VB("instantiate", dB)
          }
          if (BB !== AB) throw DB(), new VB("instantiate", new Error("unloaded while loading"));
          return TB = uB(), QB
        })();
      return XB = nB, ZB = nB.catch((() => {})), nB.catch((() => {
        XB === nB && (XB = null)
      })), nB
    }

    function eB() {
      PB || xB()
    }

    function lB() {
      return TB?.buffer.byteLength ?? 0
    }

    function wB(BB) {
      return PB || (PB = new VB("call", BB), xB()), PB
    }

    function xB() {
      AB++, DB(), XB = null, TB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);