export const id = 63;
export const ids = [63];
export const modules = {
  60877: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_replay_bg.df880f3f283e3197128a.wasm"
  },
  6609: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(3684);
    const MT = {
      bloxd_wasm: () => "a0f424b25368d6393787ae0cadc74c38a79bf45853cbc8fe0d3b4b00ed2f3987",
      bloxd_wasm_client: () => "0848a1ad8f1a6acd15190097c16d6c8cee3ea20961c9a5135fb70c8e5a3a8765",
      bloxd_wasm_workers: () => "70acc026337513cb3482a9557a18f648e482d0083d7e5e1b6fe3e07bdcb2f8e3",
      bloxd_wasm_models: () => "634d37ef8cef3ee4f695383ddf3aede7e518819fda02f111669a55711db8829c",
      bloxd_wasm_webgpu: () => "af696a84742b4427e456975c7e2c98397cd27946ad3057ca6a41701cfdd49270",
      bloxd_wasm_webgl: () => "47a865a6f0812bc9a2a7d464d212069d989bfc60e391a5b004c51ed9559d1e27",
      bloxd_wasm_webgl1: () => "5aba3664c214844c153b620384afd9cea74130cc607a9c685d1bcb6b1c27c0ab",
      bloxd_wasm_replay: () => "e3dd0cd7ff45dd407891c5abf1fcf21a49472dcaf48a1de94d52bdc122668ccb",
      bloxd_wasm_recorder: () => "2ae924a7cec0f9372a697abc3ae0b17fe0bb9ee6dd19eec21dc29e9750c477ef",
      bloxd_wasm_anim: () => "430af23f79668b6e0629c901770a89c5c28880e27fbfff3d39abec128e94239a",
      bloxd_wasm_textures: () => "b21f3145552327388bc76ac1444ca300a6882c320fa905c6294cbf6b199edb5f",
      bloxd_wasm_shader_pack: () => "8971c80e16c937b8809bd65766732ac5b19a0f1e03dd98d4cfc7cc2bf271b324"
    };
    var KT = cT(4681);

    function OT(TT) {
      const kT = Object.prototype.hasOwnProperty.call(MT, TT) ? MT[TT]() : void 0;
      if (void 0 !== kT) return {
        sha256: kT,
        onMismatch: KT.x
      };
      throw new lT.f(`${TT} has no release digest, so this build refuses it`)
    }
  },
  60871: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdReplayWasmError: () => GT,
      loadReplayModule: () => LT,
      markReplayTrapped: () => UT,
      replayMemoryBytes: () => gT,
      unloadReplayModule: () => RT
    });
    var lT = {};
    cT.r(lT), cT.d(lT, {
      IMT: () => MT,
      sKT: () => oT,
      lA: () => KT,
      default: () => JT,
      initSync: () => zT,
      MA: () => OT,
      OMT: () => yT,
      CMT: () => fT
    });
    class MT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        wT.Fevu(TT, 0)
      }
      hMT(TT, kT, cT, lT, MT, KT) {
        wT.UmgD(this.__wbg_ptr, TT, kT, cT, lT, MT, KT)
      }
      close() {
        wT.WwqG(this.__wbg_ptr)
      }
      crop(TT, kT) {
        wT.KJou(this.__wbg_ptr, TT, kT)
      }
      SMT(TT, kT) {
        wT.PVpv(this.__wbg_ptr, TT, kT)
      }
      aMT() {
        return wT.UYpE(this.__wbg_ptr) >>> 0
      }
      DMT() {
        return wT.RMca(this.__wbg_ptr) >>> 0
      }
      FMT() {
        return wT.cyb5(this.__wbg_ptr) >>> 0
      }
      rMT() {
        return wT.bxsh(this.__wbg_ptr) >>> 0
      }
      QMT(TT, kT) {
        wT.p0dU(this.__wbg_ptr, TT, kT)
      }
      constructor() {
        const TT = wT.Y9sL();
        return this.__wbg_ptr = TT, IT.register(this, this.__wbg_ptr, this), this
      }
      open() {
        wT.uB4I(this.__wbg_ptr)
      }
      cMT() {
        return wT.tuF6(this.__wbg_ptr) >>> 0
      }
      pause() {
        wT.zf7I(this.__wbg_ptr)
      }
      play() {
        wT.OAhV(this.__wbg_ptr)
      }
      save() {
        return wT.JBzw(this.__wbg_ptr) >>> 0
      }
      PMT() {
        wT.FSTN(this.__wbg_ptr)
      }
      seek(TT, kT) {
        wT.cZRo(this.__wbg_ptr, TT, kT)
      }
      mMT(TT) {
        wT.VvNZ(this.__wbg_ptr, TT)
      }
      NMT(TT, kT) {
        const cT = function(TT, kT) {
            const cT = kT(8 * TT.length, 8) >>> 0;
            return function() {
              null !== CT && 0 !== CT.byteLength || (CT = new Float64Array(wT.memory.buffer));
              return CT
            }().set(TT, cT / 8), mT = TT.length, cT
          }(kT, wT.LqQx),
          lT = mT;
        wT.Ds9z(this.__wbg_ptr, TT, cT, lT)
      }
      tMT(TT, kT) {
        wT.spQM(this.__wbg_ptr, TT, kT)
      }
      wMT(TT) {
        wT.cX5m(this.__wbg_ptr, TT)
      }
      stage(TT) {
        return wT.C5wG(this.__wbg_ptr, TT) >>> 0
      }
      step(TT, kT) {
        return wT.hvfo(this.__wbg_ptr, TT, kT) >>> 0
      }
    }

    function KT(TT, kT) {
      const cT = function(TT, kT, cT) {
          if (void 0 === cT) {
            const cT = FT.encode(TT),
              lT = kT(cT.length, 1) >>> 0;
            return tT().subarray(lT, lT + cT.length).set(cT), mT = cT.length, lT
          }
          let lT = TT.length,
            MT = kT(lT, 1) >>> 0;
          const KT = tT();
          let OT = 0;
          for (; OT < lT; OT++) {
            const kT = TT.charCodeAt(OT);
            if (kT > 127) break;
            KT[MT + OT] = kT
          }
          if (OT !== lT) {
            0 !== OT && (TT = TT.slice(OT)), MT = cT(MT, lT, lT = OT + 3 * TT.length, 1) >>> 0;
            const kT = tT().subarray(MT + OT, MT + lT);
            OT += FT.encodeInto(TT, kT).written, MT = cT(MT, lT, OT, 1) >>> 0
          }
          return mT = OT, MT
        }(TT, wT.LqQx, wT.J7YP),
        lT = mT,
        MT = wT.gpJa(cT, lT, kT);
      if (MT[1]) throw QT(MT[0])
    }

    function OT() {
      wT.LrZc()
    }

    function yT() {
      return wT.lRgG() >>> 0
    }

    function fT() {
      return QT(wT.xeJt())
    }

    function xT() {
      return {
        __proto__: null,
        TtLY: {
          __proto__: null,
          WrHe: function(TT, kT) {
            return AT(Error(jT(TT, kT)))
          },
          m4kD: function() {
            return AT(wT.memory)
          },
          Z7Tb: function(TT, kT) {
            throw new Error(jT(TT, kT))
          },
          v8lg: function(TT, kT) {
            console.error(jT(TT, kT))
          },
          eVA0: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (MT.prototype[Symbol.dispose] = MT.prototype.free);
    const IT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => wT?.__wbg_replaymodule_free(TT, 1)));

    function AT(TT) {
      NT === hT.length && hT.push(hT.length + 1);
      const kT = NT;
      return NT = hT[kT], hT[kT] = TT, kT
    }
    let CT = null;

    function jT(TT, kT) {
      return function(TT, kT) {
        aT += kT, aT >= DT && (ST = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ST.decode(), aT = kT);
        return ST.decode(tT().subarray(TT, TT + kT))
      }(TT >>> 0, kT)
    }
    let vT = null;

    function tT() {
      return null !== vT && 0 !== vT.byteLength || (vT = new Uint8Array(wT.memory.buffer)), vT
    }
    let hT = new Array(1024).fill(void 0);
    hT.push(void 0, null, !0, !1);
    let NT = hT.length;

    function QT(TT) {
      const kT = function(TT) {
        return hT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (hT[TT] = NT, NT = TT)
      }(TT), kT
    }
    let ST = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ST.decode();
    const DT = 2146435072;
    let aT = 0;
    const FT = new TextEncoder;
    "encodeInto" in FT || (FT.encodeInto = function(TT, kT) {
      const cT = FT.encode(TT);
      return kT.set(cT), {
        read: TT.length,
        written: cT.length
      }
    });
    let rT, PT, wT, mT = 0;

    function bT(TT, kT) {
      return PT = TT, wT = TT.exports, rT = kT, CT = null, vT = null, wT.oZmi(), wT
    }

    function zT(TT) {
      if (void 0 !== wT) return wT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const kT = xT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return bT(new WebAssembly.Instance(TT, kT), TT)
    }
    async function JT(TT) {
      if (void 0 !== wT) return wT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const kT = xT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: cT,
        module: lT
      } = await async function(TT, kT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, kT)
          } catch (cT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw cT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cT)
          }
          const lT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(lT, kT)
        } {
          const cT = await WebAssembly.instantiate(TT, kT);
          return cT instanceof WebAssembly.Instance ? {
            instance: cT,
            module: TT
          } : cT
        }
      }(await TT, kT);
      return bT(cT, lT)
    }

    function oT() {
      wT = void 0, PT = void 0, CT = null, vT = null, hT = new Array(1024).fill(void 0), hT.push(void 0, null, !0, !1), NT = hT.length
    }
    var HT = cT(3684),
      eT = cT(6609);
    class GT extends Error {
      stage;
      constructor(TT, kT) {
        super((0, HT.F)(TT, kT), {
          cause: kT
        }), this.name = "BloxdReplayWasmError", this.stage = TT
      }
    }
    let VT = null,
      ET = null,
      ZT = Promise.resolve(),
      uT = 0,
      XT = null,
      dT = null;

    function LT() {
      if (dT) return Promise.reject(dT);
      if (ET) return ET;
      const TT = uT,
        kT = ZT,
        MT = (async () => {
          let MT;
          await kT, VT ??= (0, HT.J)(new cT.U(cT(60877)), (0, eT.e)("bloxd_wasm_replay"));
          try {
            MT = await VT
          } catch (KT) {
            throw VT = null, new GT((0, HT.R)(KT), KT)
          }
          if (TT !== uT) throw new GT("instantiate", new Error("unloaded while loading"));
          try {
            await JT({
              module_or_path: MT
            })
          } catch (KT) {
            throw oT(), new GT("instantiate", KT)
          }
          if (TT !== uT) throw oT(), new GT("instantiate", new Error("unloaded while loading"));
          return XT = fT(), lT
        })();
      return ET = MT, ZT = MT.catch((() => {})), MT.catch((() => {
        ET === MT && (ET = null)
      })), MT
    }

    function RT() {
      dT || YT()
    }

    function gT() {
      return XT?.buffer.byteLength ?? 0
    }

    function UT(TT) {
      return dT || (dT = new GT("call", TT), YT()), dT
    }

    function YT() {
      uT++, oT(), ET = null, XT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);