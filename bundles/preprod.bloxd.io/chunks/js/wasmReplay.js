export const id = 77;
export const ids = [77];
export const modules = {
  64073: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/bloxd_wasm_replay_bg.f3d19767c69dc0db5521.wasm"
  },
  7161: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(3210);
    const DB = {
      bloxd_wasm: () => "bbd4532b4204ac6b037d21981a0077e27c49bf77bad5ade13596319f1c6101a5",
      bloxd_wasm_client: () => "8365f73c3472844058a4a0f574b2102c245aef505acbb602a81be3847509c8fa",
      bloxd_wasm_workers: () => "8409ee2ec92a1f5bf3cf7df6088eeb4c89a7f9ab0b6c537ab5e6bee5e1c85a52",
      bloxd_wasm_models: () => "4297705d02ef7091b212436b1b1d90f181427336ab1bf97d3c1a2eebcb00ef44",
      bloxd_wasm_webgpu: () => "feb1e82520617426b733fd3101371d0a4d1be5eea8eb5f7115ad8b481c5ecc2a",
      bloxd_wasm_webgl: () => "ccc8a64ee7a944567fefa835e06af6da6175cc2ce9d8d4fb5fc2acb63861821b",
      bloxd_wasm_webgl1: () => "ef3b6328394821ae9f35e9d6eb203b2d9872f6911c2948b8b5bd2bd784af58be",
      bloxd_wasm_replay: () => "e6bfd69259d4961ba1c2eff287fb0493dd998b3af1045ea9988589f9c1c784a6",
      bloxd_wasm_recorder: () => "61e54a37d20be582fb8a73e1f48e79e660cbedc06e1fc696d3d52ad467693eb7",
      bloxd_wasm_anim: () => "412a9ead222a90865e84867e83bc25acfd52a0e1c584c793e1f272639ce5dc2c",
      bloxd_wasm_textures: () => "43d7ae101efe7b39af19b5e650a2896a40d167bca827906978d39975a015e416",
      bloxd_wasm_shader_pack: () => "072b43f08a8ed6ea1336897ed9d7881ce755636d8b8a8f34eaa208a897665b42"
    };
    var QB = GB(5165);

    function oB(BB) {
      const OB = Object.prototype.hasOwnProperty.call(DB, BB) ? DB[BB]() : void 0;
      if (void 0 !== OB) return {
        sha256: OB,
        onMismatch: QB.s
      };
      throw new YB.g(`${BB} has no release digest, so this build refuses it`)
    }
  },
  64066: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      BloxdReplayWasmError: () => iB,
      loadReplayModule: () => cB,
      markReplayTrapped: () => eB,
      replayMemoryBytes: () => aB,
      unloadReplayModule: () => hB
    });
    var YB = {};
    GB.r(YB), GB.d(YB, {
      poB: () => DB,
      oyB: () => mB,
      sy: () => QB,
      default: () => uB,
      initSync: () => KB,
      VP: () => oB,
      JoB: () => jB,
      qoB: () => yB
    });
    class DB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, MB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        fB.GbiZ(BB, 0)
      }
      WoB(BB, OB, GB, YB, DB, QB) {
        fB.qAwr(this.__wbg_ptr, BB, OB, GB, YB, DB, QB)
      }
      close() {
        fB.dB9K(this.__wbg_ptr)
      }
      crop(BB, OB) {
        fB.lvif(this.__wbg_ptr, BB, OB)
      }
      noB(BB, OB) {
        fB.EkWX(this.__wbg_ptr, BB, OB)
      }
      foB() {
        return fB.zobd(this.__wbg_ptr) >>> 0
      }
      UoB() {
        return fB.zd2m(this.__wbg_ptr) >>> 0
      }
      koB() {
        return fB.SIcJ(this.__wbg_ptr) >>> 0
      }
      doB() {
        return fB.VqJ2(this.__wbg_ptr) >>> 0
      }
      SoB(BB, OB) {
        fB.PRAi(this.__wbg_ptr, BB, OB)
      }
      constructor() {
        const BB = fB.jbJk();
        return this.__wbg_ptr = BB, MB.register(this, this.__wbg_ptr, this), this
      }
      open() {
        fB.IeIE(this.__wbg_ptr)
      }
      QoB() {
        return fB.dy5f(this.__wbg_ptr) >>> 0
      }
      pause() {
        fB.sgCI(this.__wbg_ptr)
      }
      play() {
        fB.ssIo(this.__wbg_ptr)
      }
      save() {
        return fB.r694(this.__wbg_ptr) >>> 0
      }
      KoB() {
        fB.Czm7(this.__wbg_ptr)
      }
      seek(BB, OB) {
        fB.zUsM(this.__wbg_ptr, BB, OB)
      }
      moB(BB) {
        fB.aBCQ(this.__wbg_ptr, BB)
      }
      VoB(BB, OB) {
        const GB = function(BB, OB) {
            const GB = OB(8 * BB.length, 8) >>> 0;
            return function() {
              null !== zB && 0 !== zB.byteLength || (zB = new Float64Array(fB.memory.buffer));
              return zB
            }().set(BB, GB / 8), kB = BB.length, GB
          }(OB, fB.FEax),
          YB = kB;
        fB.m0jB(this.__wbg_ptr, BB, GB, YB)
      }
      RoB(BB, OB) {
        fB.jXOY(this.__wbg_ptr, BB, OB)
      }
      uoB(BB) {
        fB.p56u(this.__wbg_ptr, BB)
      }
      stage(BB) {
        return fB.UADR(this.__wbg_ptr, BB) >>> 0
      }
      step(BB, OB) {
        return fB.LHA5(this.__wbg_ptr, BB, OB) >>> 0
      }
    }

    function QB(BB, OB) {
      const GB = function(BB, OB, GB) {
          if (void 0 === GB) {
            const GB = SB.encode(BB),
              YB = OB(GB.length, 1) >>> 0;
            return qB().subarray(YB, YB + GB.length).set(GB), kB = GB.length, YB
          }
          let YB = BB.length,
            DB = OB(YB, 1) >>> 0;
          const QB = qB();
          let oB = 0;
          for (; oB < YB; oB++) {
            const OB = BB.charCodeAt(oB);
            if (OB > 127) break;
            QB[DB + oB] = OB
          }
          if (oB !== YB) {
            0 !== oB && (BB = BB.slice(oB)), DB = GB(DB, YB, YB = oB + 3 * BB.length, 1) >>> 0;
            const OB = qB().subarray(DB + oB, DB + YB);
            oB += SB.encodeInto(BB, OB).written, DB = GB(DB, YB, oB, 1) >>> 0
          }
          return kB = oB, DB
        }(BB, fB.FEax, fB.NpdS),
        YB = kB,
        DB = fB.JFID(GB, YB, OB);
      if (DB[1]) throw RB(DB[0])
    }

    function oB() {
      fB.RFo4()
    }

    function jB() {
      return fB.hike() >>> 0
    }

    function yB() {
      return RB(fB.Sup8())
    }

    function JB() {
      return {
        __proto__: null,
        yvV8: {
          __proto__: null,
          QGhX: function(BB, OB) {
            return PB(Error(lB(BB, OB)))
          },
          txzL: function() {
            return PB(fB.memory)
          },
          FsUw: function(BB, OB) {
            throw new Error(lB(BB, OB))
          },
          IqCK: function(BB, OB) {
            console.error(lB(BB, OB))
          },
          Lmnj: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (DB.prototype[Symbol.dispose] = DB.prototype.free);
    const MB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => fB?.__wbg_replaymodule_free(BB, 1)));

    function PB(BB) {
      NB === ZB.length && ZB.push(ZB.length + 1);
      const OB = NB;
      return NB = ZB[OB], ZB[OB] = BB, OB
    }
    let zB = null;

    function lB(BB, OB) {
      return function(BB, OB) {
        VB += OB, VB >= AB && (WB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), WB.decode(), VB = OB);
        return WB.decode(qB().subarray(BB, BB + OB))
      }(BB >>> 0, OB)
    }
    let pB = null;

    function qB() {
      return null !== pB && 0 !== pB.byteLength || (pB = new Uint8Array(fB.memory.buffer)), pB
    }
    let ZB = new Array(1024).fill(void 0);
    ZB.push(void 0, null, !0, !1);
    let NB = ZB.length;

    function RB(BB) {
      const OB = function(BB) {
        return ZB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (ZB[BB] = NB, NB = BB)
      }(BB), OB
    }
    let WB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    WB.decode();
    const AB = 2146435072;
    let VB = 0;
    const SB = new TextEncoder;
    "encodeInto" in SB || (SB.encodeInto = function(BB, OB) {
      const GB = SB.encode(BB);
      return OB.set(GB), {
        read: BB.length,
        written: GB.length
      }
    });
    let nB, UB, fB, kB = 0;

    function dB(BB, OB) {
      return UB = BB, fB = BB.exports, nB = OB, zB = null, pB = null, fB.l4x2(), fB
    }

    function KB(BB) {
      if (void 0 !== fB) return fB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const OB = JB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return dB(new WebAssembly.Instance(BB, OB), BB)
    }
    async function uB(BB) {
      if (void 0 !== fB) return fB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const OB = JB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: GB,
        module: YB
      } = await async function(BB, OB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, OB)
          } catch (GB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw GB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GB)
          }
          const YB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(YB, OB)
        } {
          const GB = await WebAssembly.instantiate(BB, OB);
          return GB instanceof WebAssembly.Instance ? {
            instance: GB,
            module: BB
          } : GB
        }
      }(await BB, OB);
      return dB(GB, YB)
    }

    function mB() {
      fB = void 0, UB = void 0, zB = null, pB = null, ZB = new Array(1024).fill(void 0), ZB.push(void 0, null, !0, !1), NB = ZB.length
    }
    var IB = GB(3210),
      FB = GB(7161);
    class iB extends Error {
      stage;
      constructor(BB, OB) {
        super((0, IB.C)(BB, OB), {
          cause: OB
        }), this.name = "BloxdReplayWasmError", this.stage = BB
      }
    }
    let LB = null,
      gB = null,
      rB = Promise.resolve(),
      XB = 0,
      wB = null,
      EB = null;

    function cB() {
      if (EB) return Promise.reject(EB);
      if (gB) return gB;
      const BB = XB,
        OB = rB,
        DB = (async () => {
          let DB;
          await OB, LB ??= (0, IB.G)(new GB.U(GB(64073)), (0, FB.d)("bloxd_wasm_replay"));
          try {
            DB = await LB
          } catch (QB) {
            throw LB = null, new iB((0, IB.M)(QB), QB)
          }
          if (BB !== XB) throw new iB("instantiate", new Error("unloaded while loading"));
          try {
            await uB({
              module_or_path: DB
            })
          } catch (QB) {
            throw mB(), new iB("instantiate", QB)
          }
          if (BB !== XB) throw mB(), new iB("instantiate", new Error("unloaded while loading"));
          return wB = yB(), YB
        })();
      return gB = DB, rB = DB.catch((() => {})), DB.catch((() => {
        gB === DB && (gB = null)
      })), DB
    }

    function hB() {
      EB || TB()
    }

    function aB() {
      return wB?.buffer.byteLength ?? 0
    }

    function eB(BB) {
      return EB || (EB = new iB("call", BB), TB()), EB
    }

    function TB() {
      XB++, mB(), gB = null, wB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);