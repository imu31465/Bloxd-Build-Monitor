export const id = 77;
export const ids = [77];
export const modules = {
  64130: (MM, rM, iM) => {
    MM.exports = iM.p + "static/media/bloxd_wasm_replay_bg.5bfb766340e78bc8c330.wasm"
  },
  7116: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(3188);
    const SM = {
      bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
      bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
      bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
      bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
      bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
      bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
      bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
      bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
      bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
      bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
      bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
      bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
    };
    var jM = iM(5069);

    function aM(MM) {
      const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
      if (void 0 !== rM) return {
        sha256: rM,
        onMismatch: jM.B
      };
      throw new OM.f(`${MM} has no release digest, so this build refuses it`)
    }
  },
  64121: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      BloxdReplayWasmError: () => DM,
      loadReplayModule: () => AM,
      markReplayTrapped: () => FM,
      replayMemoryBytes: () => vM,
      unloadReplayModule: () => xM
    });
    var OM = {};
    iM.r(OM), iM.d(OM, {
      jjM: () => SM,
      KaM: () => pM,
      PQ: () => jM,
      default: () => RM,
      initSync: () => uM,
      HQ: () => aM,
      rjM: () => PM,
      ajM: () => nM
    });
    class SM {
      __destroy_into_raw() {
        const MM = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zM.unregister(this), MM
      }
      free() {
        const MM = this.__destroy_into_raw();
        wM.mNrw(MM, 0)
      }
      zjM(MM, rM, iM, OM, SM, jM) {
        wM.oEE8(this.__wbg_ptr, MM, rM, iM, OM, SM, jM)
      }
      close() {
        wM.x9gf(this.__wbg_ptr)
      }
      crop(MM, rM) {
        wM.PSDc(this.__wbg_ptr, MM, rM)
      }
      HjM(MM, rM) {
        wM.sSXl(this.__wbg_ptr, MM, rM)
      }
      JjM() {
        return wM.HYqg(this.__wbg_ptr) >>> 0
      }
      hjM() {
        return wM.f0rI(this.__wbg_ptr) >>> 0
      }
      djM() {
        return wM.Vb2q(this.__wbg_ptr) >>> 0
      }
      yjM() {
        return wM.jYSt(this.__wbg_ptr) >>> 0
      }
      mjM(MM, rM) {
        wM.VBz7(this.__wbg_ptr, MM, rM)
      }
      constructor() {
        const MM = wM.W6Tx();
        return this.__wbg_ptr = MM, zM.register(this, this.__wbg_ptr, this), this
      }
      open() {
        wM.OJuX(this.__wbg_ptr)
      }
      TSM() {
        return wM.pF24(this.__wbg_ptr) >>> 0
      }
      pause() {
        wM.VEWU(this.__wbg_ptr)
      }
      play() {
        wM.Poaz(this.__wbg_ptr)
      }
      save() {
        return wM.wMna(this.__wbg_ptr) >>> 0
      }
      ljM() {
        wM.tVxW(this.__wbg_ptr)
      }
      seek(MM, rM) {
        wM.fsgl(this.__wbg_ptr, MM, rM)
      }
      UjM(MM) {
        wM.qGKS(this.__wbg_ptr, MM)
      }
      LjM(MM, rM) {
        const iM = function(MM, rM) {
            const iM = rM(8 * MM.length, 8) >>> 0;
            return function() {
              null !== mM && 0 !== mM.byteLength || (mM = new Float64Array(wM.memory.buffer));
              return mM
            }().set(MM, iM / 8), tM = MM.length, iM
          }(rM, wM.u4DY),
          OM = tM;
        wM.y4FI(this.__wbg_ptr, MM, iM, OM)
      }
      QjM(MM, rM) {
        wM.C9MA(this.__wbg_ptr, MM, rM)
      }
      EjM(MM) {
        wM.y8Nc(this.__wbg_ptr, MM)
      }
      stage(MM) {
        return wM.Ce05(this.__wbg_ptr, MM) >>> 0
      }
      step(MM, rM) {
        return wM.VtoM(this.__wbg_ptr, MM, rM) >>> 0
      }
    }

    function jM(MM, rM) {
      const iM = function(MM, rM, iM) {
          if (void 0 === iM) {
            const iM = CM.encode(MM),
              OM = rM(iM.length, 1) >>> 0;
            return JM().subarray(OM, OM + iM.length).set(iM), tM = iM.length, OM
          }
          let OM = MM.length,
            SM = rM(OM, 1) >>> 0;
          const jM = JM();
          let aM = 0;
          for (; aM < OM; aM++) {
            const rM = MM.charCodeAt(aM);
            if (rM > 127) break;
            jM[SM + aM] = rM
          }
          if (aM !== OM) {
            0 !== aM && (MM = MM.slice(aM)), SM = iM(SM, OM, OM = aM + 3 * MM.length, 1) >>> 0;
            const rM = JM().subarray(SM + aM, SM + OM);
            aM += CM.encodeInto(MM, rM).written, SM = iM(SM, OM, aM, 1) >>> 0
          }
          return tM = aM, SM
        }(MM, wM.u4DY, wM.FKnL),
        OM = tM,
        SM = wM.e1E5(iM, OM, rM);
      if (SM[1]) throw lM(SM[0])
    }

    function aM() {
      wM.gNPv()
    }

    function PM() {
      return wM.YTYT() >>> 0
    }

    function nM() {
      return lM(wM.lusX())
    }

    function QM() {
      return {
        __proto__: null,
        Z7zw: {
          __proto__: null,
          EXKD: function(MM, rM) {
            return LM(Error(HM(MM, rM)))
          },
          WR5F: function() {
            return LM(wM.memory)
          },
          HKlq: function(MM, rM) {
            throw new Error(HM(MM, rM))
          },
          ioLI: function(MM, rM) {
            console.error(HM(MM, rM))
          },
          h7uG: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (SM.prototype[Symbol.dispose] = SM.prototype.free);
    const zM = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((MM => wM?.__wbg_replaymodule_free(MM, 1)));

    function LM(MM) {
      yM === dM.length && dM.push(dM.length + 1);
      const rM = yM;
      return yM = dM[rM], dM[rM] = MM, rM
    }
    let mM = null;

    function HM(MM, rM) {
      return function(MM, rM) {
        GM += rM, GM >= UM && (EM = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), EM.decode(), GM = rM);
        return EM.decode(JM().subarray(MM, MM + rM))
      }(MM >>> 0, rM)
    }
    let hM = null;

    function JM() {
      return null !== hM && 0 !== hM.byteLength || (hM = new Uint8Array(wM.memory.buffer)), hM
    }
    let dM = new Array(1024).fill(void 0);
    dM.push(void 0, null, !0, !1);
    let yM = dM.length;

    function lM(MM) {
      const rM = function(MM) {
        return dM[MM]
      }(MM);
      return function(MM) {
        MM < 1028 || (dM[MM] = yM, yM = MM)
      }(MM), rM
    }
    let EM = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    EM.decode();
    const UM = 2146435072;
    let GM = 0;
    const CM = new TextEncoder;
    "encodeInto" in CM || (CM.encodeInto = function(MM, rM) {
      const iM = CM.encode(MM);
      return rM.set(iM), {
        read: MM.length,
        written: iM.length
      }
    });
    let eM, bM, wM, tM = 0;

    function gM(MM, rM) {
      return bM = MM, wM = MM.exports, eM = rM, mM = null, hM = null, wM.mo7Q(), wM
    }

    function uM(MM) {
      if (void 0 !== wM) return wM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module: MM
      } = MM) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const rM = QM();
      MM instanceof WebAssembly.Module || (MM = new WebAssembly.Module(MM));
      return gM(new WebAssembly.Instance(MM, rM), MM)
    }
    async function RM(MM) {
      if (void 0 !== wM) return wM;
      void 0 !== MM && (Object.getPrototypeOf(MM) === Object.prototype ? ({
        module_or_path: MM
      } = MM) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const rM = QM();
      ("string" === typeof MM || "function" === typeof Request && MM instanceof Request || "function" === typeof URL && MM instanceof URL) && (MM = fetch(MM));
      const {
        instance: iM,
        module: OM
      } = await async function(MM, rM) {
        if ("function" === typeof Response && MM instanceof Response) {
          if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(MM, rM)
          } catch (iM) {
            if (! function(MM) {
                switch (MM) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(MM.type) || "application/wasm" === MM.headers.get("Content-Type")) throw iM;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", iM)
          }
          const OM = await MM.arrayBuffer();
          return await WebAssembly.instantiate(OM, rM)
        } {
          const iM = await WebAssembly.instantiate(MM, rM);
          return iM instanceof WebAssembly.Instance ? {
            instance: iM,
            module: MM
          } : iM
        }
      }(await MM, rM);
      return gM(iM, OM)
    }

    function pM() {
      wM = void 0, bM = void 0, mM = null, hM = null, dM = new Array(1024).fill(void 0), dM.push(void 0, null, !0, !1), yM = dM.length
    }
    var WM = iM(3188),
      sM = iM(7116);
    class DM extends Error {
      stage;
      constructor(MM, rM) {
        super((0, WM.B)(MM, rM), {
          cause: rM
        }), this.name = "BloxdReplayWasmError", this.stage = MM
      }
    }
    let kM = null,
      ZM = null,
      oM = Promise.resolve(),
      fM = 0,
      YM = null,
      NM = null;

    function AM() {
      if (NM) return Promise.reject(NM);
      if (ZM) return ZM;
      const MM = fM,
        rM = oM,
        SM = (async () => {
          let SM;
          await rM, kM ??= (0, WM.E)(new iM.U(iM(64130)), (0, sM.b)("bloxd_wasm_replay"));
          try {
            SM = await kM
          } catch (jM) {
            throw kM = null, new DM((0, WM.J)(jM), jM)
          }
          if (MM !== fM) throw new DM("instantiate", new Error("unloaded while loading"));
          try {
            await RM({
              module_or_path: SM
            })
          } catch (jM) {
            throw pM(), new DM("instantiate", jM)
          }
          if (MM !== fM) throw pM(), new DM("instantiate", new Error("unloaded while loading"));
          return YM = nM(), OM
        })();
      return ZM = SM, oM = SM.catch((() => {})), SM.catch((() => {
        ZM === SM && (ZM = null)
      })), SM
    }

    function xM() {
      NM || BM()
    }

    function vM() {
      return YM?.buffer.byteLength ?? 0
    }

    function FM(MM) {
      return NM || (NM = new DM("call", MM), BM()), NM
    }

    function BM() {
      fM++, pM(), ZM = null, YM = null
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);