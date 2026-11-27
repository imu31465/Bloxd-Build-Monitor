export const id = 78;
export const ids = [78];
export const modules = {
  64617: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/bloxd_wasm_replay_bg.811820514872d2833db1.wasm"
  },
  7625: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(2388);
    const EW = {
      bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
      bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
      bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
      bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
      bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
      bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
      bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
      bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
      bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
      bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
      bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
      bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
    };
    var NW = OW(5427);

    function PW(WW) {
      const iW = Object.prototype.hasOwnProperty.call(EW, WW) ? EW[WW]() : void 0;
      if (void 0 !== iW) return {
        sha256: iW,
        onMismatch: NW.y
      };
      throw new mW.k(`${WW} has no release digest, so this build refuses it`)
    }
  },
  64611: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      BloxdReplayWasmError: () => eW,
      loadReplayModule: () => CW,
      markReplayTrapped: () => qW,
      replayMemoryBytes: () => BW,
      unloadReplayModule: () => XW
    });
    var mW = {};
    OW.r(mW), OW.d(mW, {
      GNW: () => EW,
      ULW: () => uW,
      sw: () => NW,
      default: () => nW,
      initSync: () => HW,
      qt: () => PW,
      XNW: () => LW,
      INW: () => cW
    });
    class EW {
      __destroy_into_raw() {
        const WW = this.__wbg_ptr;
        return this.__wbg_ptr = 0, tW.unregister(this), WW
      }
      free() {
        const WW = this.__destroy_into_raw();
        TW.kuAe(WW, 0)
      }
      QNW(WW, iW, OW, mW, EW, NW) {
        TW.PMHZ(this.__wbg_ptr, WW, iW, OW, mW, EW, NW)
      }
      close() {
        TW.A7hu(this.__wbg_ptr)
      }
      crop(WW, iW) {
        TW.dLbl(this.__wbg_ptr, WW, iW)
      }
      OPW(WW, iW) {
        TW.tWTr(this.__wbg_ptr, WW, iW)
      }
      EPW() {
        return TW.Zv1i(this.__wbg_ptr) >>> 0
      }
      mPW() {
        return TW.Togg(this.__wbg_ptr) >>> 0
      }
      NPW() {
        return TW.ilZg(this.__wbg_ptr) >>> 0
      }
      PPW() {
        return TW.aZe1(this.__wbg_ptr) >>> 0
      }
      iPW(WW, iW) {
        TW.yJQh(this.__wbg_ptr, WW, iW)
      }
      constructor() {
        const WW = TW.n1hN();
        return this.__wbg_ptr = WW, tW.register(this, this.__wbg_ptr, this), this
      }
      open() {
        TW.XK7X(this.__wbg_ptr)
      }
      VNW() {
        return TW.RTgT(this.__wbg_ptr) >>> 0
      }
      pause() {
        TW.vJNc(this.__wbg_ptr)
      }
      play() {
        TW.GCli(this.__wbg_ptr)
      }
      save() {
        return TW.klh7(this.__wbg_ptr) >>> 0
      }
      LPW() {
        TW.Xy8E(this.__wbg_ptr)
      }
      seek(WW, iW) {
        TW.PdaH(this.__wbg_ptr, WW, iW)
      }
      wPW(WW) {
        TW.RFNU(this.__wbg_ptr, WW)
      }
      WPW(WW, iW) {
        const OW = function(WW, iW) {
            const OW = iW(8 * WW.length, 8) >>> 0;
            return function() {
              null !== xW && 0 !== xW.byteLength || (xW = new Float64Array(TW.memory.buffer));
              return xW
            }().set(WW, OW / 8), JW = WW.length, OW
          }(iW, TW.cTv3),
          mW = JW;
        TW.xoaL(this.__wbg_ptr, WW, OW, mW)
      }
      FNW(WW, iW) {
        TW.In8b(this.__wbg_ptr, WW, iW)
      }
      cPW(WW) {
        TW.XRNq(this.__wbg_ptr, WW)
      }
      stage(WW) {
        return TW.ckUu(this.__wbg_ptr, WW) >>> 0
      }
      step(WW, iW) {
        return TW.BlUp(this.__wbg_ptr, WW, iW) >>> 0
      }
    }

    function NW(WW, iW) {
      const OW = function(WW, iW, OW) {
          if (void 0 === OW) {
            const OW = SW.encode(WW),
              mW = iW(OW.length, 1) >>> 0;
            return bW().subarray(mW, mW + OW.length).set(OW), JW = OW.length, mW
          }
          let mW = WW.length,
            EW = iW(mW, 1) >>> 0;
          const NW = bW();
          let PW = 0;
          for (; PW < mW; PW++) {
            const iW = WW.charCodeAt(PW);
            if (iW > 127) break;
            NW[EW + PW] = iW
          }
          if (PW !== mW) {
            0 !== PW && (WW = WW.slice(PW)), EW = OW(EW, mW, mW = PW + 3 * WW.length, 1) >>> 0;
            const iW = bW().subarray(EW + PW, EW + mW);
            PW += SW.encodeInto(WW, iW).written, EW = OW(EW, mW, PW, 1) >>> 0
          }
          return JW = PW, EW
        }(WW, TW.cTv3, TW.jvWT),
        mW = JW,
        EW = TW.HWDw(OW, mW, iW);
      if (EW[1]) throw kW(EW[0])
    }

    function PW() {
      TW.njwJ()
    }

    function LW() {
      return TW.azgf() >>> 0
    }

    function cW() {
      return kW(TW.rLtI())
    }

    function wW() {
      return {
        __proto__: null,
        ydfC: {
          __proto__: null,
          lYyc: function(WW, iW) {
            return ZW(Error(lW(WW, iW)))
          },
          jFgf: function() {
            return ZW(TW.memory)
          },
          Onkj: function(WW, iW) {
            throw new Error(lW(WW, iW))
          },
          lI6t: function(WW, iW) {
            console.error(lW(WW, iW))
          },
          jDgW: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (EW.prototype[Symbol.dispose] = EW.prototype.free);
    const tW = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((WW => TW?.__wbg_replaymodule_free(WW, 1)));

    function ZW(WW) {
      UW === jW.length && jW.push(jW.length + 1);
      const iW = UW;
      return UW = jW[iW], jW[iW] = WW, iW
    }
    let xW = null;

    function lW(WW, iW) {
      return function(WW, iW) {
        KW += iW, KW >= MW && (sW = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), sW.decode(), KW = iW);
        return sW.decode(bW().subarray(WW, WW + iW))
      }(WW >>> 0, iW)
    }
    let AW = null;

    function bW() {
      return null !== AW && 0 !== AW.byteLength || (AW = new Uint8Array(TW.memory.buffer)), AW
    }
    let jW = new Array(1024).fill(void 0);
    jW.push(void 0, null, !0, !1);
    let UW = jW.length;

    function kW(WW) {
      const iW = function(WW) {
        return jW[WW]
      }(WW);
      return function(WW) {
        WW < 1028 || (jW[WW] = UW, UW = WW)
      }(WW), iW
    }
    let sW = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    sW.decode();
    const MW = 2146435072;
    let KW = 0;
    const SW = new TextEncoder;
    "encodeInto" in SW || (SW.encodeInto = function(WW, iW) {
      const OW = SW.encode(WW);
      return iW.set(OW), {
        read: WW.length,
        written: OW.length
      }
    });
    let YW, yW, TW, JW = 0;

    function hW(WW, iW) {
      return yW = WW, TW = WW.exports, YW = iW, xW = null, AW = null, TW.xIzz(), TW
    }

    function HW(WW) {
      if (void 0 !== TW) return TW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module: WW
      } = WW) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const iW = wW();
      WW instanceof WebAssembly.Module || (WW = new WebAssembly.Module(WW));
      return hW(new WebAssembly.Instance(WW, iW), WW)
    }
    async function nW(WW) {
      if (void 0 !== TW) return TW;
      void 0 !== WW && (Object.getPrototypeOf(WW) === Object.prototype ? ({
        module_or_path: WW
      } = WW) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const iW = wW();
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
      return hW(OW, mW)
    }

    function uW() {
      TW = void 0, yW = void 0, xW = null, AW = null, jW = new Array(1024).fill(void 0), jW.push(void 0, null, !0, !1), UW = jW.length
    }
    var oW = OW(2388),
      dW = OW(7625);
    class eW extends Error {
      stage;
      constructor(WW, iW) {
        super((0, oW.A)(WW, iW), {
          cause: iW
        }), this.name = "BloxdReplayWasmError", this.stage = WW
      }
    }
    let vW = null,
      gW = null,
      DW = Promise.resolve(),
      VW = 0,
      pW = null,
      fW = null;

    function CW() {
      if (fW) return Promise.reject(fW);
      if (gW) return gW;
      const WW = VW,
        iW = DW,
        EW = (async () => {
          let EW;
          await iW, vW ??= (0, oW.B)(new OW.U(OW(64617)), (0, dW.c)("bloxd_wasm_replay"));
          try {
            EW = await vW
          } catch (NW) {
            throw vW = null, new eW((0, oW.E)(NW), NW)
          }
          if (WW !== VW) throw new eW("instantiate", new Error("unloaded while loading"));
          try {
            await nW({
              module_or_path: EW
            })
          } catch (NW) {
            throw uW(), new eW("instantiate", NW)
          }
          if (WW !== VW) throw uW(), new eW("instantiate", new Error("unloaded while loading"));
          return pW = cW(), mW
        })();
      return gW = EW, DW = EW.catch((() => {})), EW.catch((() => {
        gW === EW && (gW = null)
      })), EW
    }

    function XW() {
      fW || RW()
    }

    function BW() {
      return pW?.buffer.byteLength ?? 0
    }

    function qW(WW) {
      return fW || (fW = new eW("call", WW), RW()), fW
    }

    function RW() {
      VW++, uW(), gW = null, pW = null
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);