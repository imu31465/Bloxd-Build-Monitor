export const id = 62;
export const ids = [62];
export const modules = {
  60865: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/bloxd_wasm_recorder_bg.eabc3e0f662613c5a7a7.wasm"
  },
  60858: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      BloxdRecorderWasmError: () => GT,
      RECORDER_MODULE_ID: () => eT,
      loadRecorderModule: () => ZT,
      markRecorderTrapped: () => XT,
      prefetchRecorderModule: () => uT,
      recorderMemoryBytes: () => LT,
      unloadRecorderModule: () => dT
    });
    var lT = {};
    cT.r(lT), cT.d(lT, {
      fMT: () => MT,
      sKT: () => JT,
      lA: () => KT,
      default: () => zT,
      initSync: () => bT,
      MA: () => OT,
      OMT: () => yT,
      qlT: () => fT
    });
    class MT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, IT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        PT.e2MK(TT, 0)
      }
      busy() {
        return 0 !== PT.Llpe(this.__wbg_ptr)
      }
      command(TT, kT) {
        return 0 !== PT.rE5b(this.__wbg_ptr, TT, kT)
      }
      slT(TT) {
        return PT.XNgT(this.__wbg_ptr, TT) >>> 0
      }
      ilT() {
        PT.ieh2(this.__wbg_ptr)
      }
      plT() {
        return PT.Pwrb(this.__wbg_ptr) >>> 0
      }
      nlT() {
        return PT.PxIy(this.__wbg_ptr)
      }
      lMT() {
        return PT.JQyx(this.__wbg_ptr) >>> 0
      }
      MMT() {
        return PT.IAUe(this.__wbg_ptr) >>> 0
      }
      feed(TT) {
        return PT.zonp(this.__wbg_ptr, TT) >>> 0
      }
      constructor() {
        const TT = PT.yQl9();
        return this.__wbg_ptr = TT, IT.register(this, this.__wbg_ptr, this), this
      }
      cMT() {
        return PT.g1CL(this.__wbg_ptr) >>> 0
      }
      TOT() {
        return PT.gJ4o(this.__wbg_ptr) >>> 0
      }
      WlT(TT, kT, cT) {
        return 0 !== PT.bSYy(this.__wbg_ptr, TT, kT, cT)
      }
      stage(TT) {
        return PT.HrQX(this.__wbg_ptr, TT) >>> 0
      }
      step() {
        return PT.dk9r(this.__wbg_ptr) >>> 0
      }
    }

    function KT(TT, kT) {
      const cT = function(TT, kT, cT) {
          if (void 0 === cT) {
            const cT = aT.encode(TT),
              lT = kT(cT.length, 1) >>> 0;
            return vT().subarray(lT, lT + cT.length).set(cT), wT = cT.length, lT
          }
          let lT = TT.length,
            MT = kT(lT, 1) >>> 0;
          const KT = vT();
          let OT = 0;
          for (; OT < lT; OT++) {
            const kT = TT.charCodeAt(OT);
            if (kT > 127) break;
            KT[MT + OT] = kT
          }
          if (OT !== lT) {
            0 !== OT && (TT = TT.slice(OT)), MT = cT(MT, lT, lT = OT + 3 * TT.length, 1) >>> 0;
            const kT = vT().subarray(MT + OT, MT + lT);
            OT += aT.encodeInto(TT, kT).written, MT = cT(MT, lT, OT, 1) >>> 0
          }
          return wT = OT, MT
        }(TT, PT.Pi3e, PT.Ly5m),
        lT = wT,
        MT = PT.EyFL(cT, lT, kT);
      if (MT[1]) throw NT(MT[0])
    }

    function OT() {
      PT.gCoF()
    }

    function yT() {
      return PT.uxPR() >>> 0
    }

    function fT() {
      return NT(PT.bDIV())
    }

    function xT() {
      return {
        __proto__: null,
        Cegg: {
          __proto__: null,
          uChZ: function(TT, kT) {
            return AT(Error(CT(TT, kT)))
          },
          oGBI: function() {
            return AT(PT.memory)
          },
          cKTK: function(TT, kT) {
            throw new Error(CT(TT, kT))
          },
          a8aL: function(TT, kT) {
            console.error(CT(TT, kT))
          },
          ycNg: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (MT.prototype[Symbol.dispose] = MT.prototype.free);
    const IT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => PT?.__wbg_recordermodule_free(TT, 1)));

    function AT(TT) {
      hT === tT.length && tT.push(tT.length + 1);
      const kT = hT;
      return hT = tT[kT], tT[kT] = TT, kT
    }

    function CT(TT, kT) {
      return function(TT, kT) {
        DT += kT, DT >= ST && (QT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), QT.decode(), DT = kT);
        return QT.decode(vT().subarray(TT, TT + kT))
      }(TT >>> 0, kT)
    }
    let jT = null;

    function vT() {
      return null !== jT && 0 !== jT.byteLength || (jT = new Uint8Array(PT.memory.buffer)), jT
    }
    let tT = new Array(1024).fill(void 0);
    tT.push(void 0, null, !0, !1);
    let hT = tT.length;

    function NT(TT) {
      const kT = function(TT) {
        return tT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (tT[TT] = hT, hT = TT)
      }(TT), kT
    }
    let QT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    QT.decode();
    const ST = 2146435072;
    let DT = 0;
    const aT = new TextEncoder;
    "encodeInto" in aT || (aT.encodeInto = function(TT, kT) {
      const cT = aT.encode(TT);
      return kT.set(cT), {
        read: TT.length,
        written: cT.length
      }
    });
    let FT, rT, PT, wT = 0;

    function mT(TT, kT) {
      return rT = TT, PT = TT.exports, FT = kT, jT = null, PT.dRE7(), PT
    }

    function bT(TT) {
      if (void 0 !== PT) return PT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const kT = xT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return mT(new WebAssembly.Instance(TT, kT), TT)
    }
    async function zT(TT) {
      if (void 0 !== PT) return PT;
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
      return mT(cT, lT)
    }

    function JT() {
      PT = void 0, rT = void 0, jT = null, tT = new Array(1024).fill(void 0), tT.push(void 0, null, !0, !1), hT = tT.length
    }
    var oT = cT(3684),
      HT = cT(6609);
    const eT = 2;
    class GT extends Error {
      stage;
      constructor(TT, kT) {
        super((0, oT.F)(TT, kT), {
          cause: kT
        }), this.name = "BloxdRecorderWasmError", this.stage = TT
      }
    }
    let VT = null;
    const ET = function(TT) {
      let kT = null,
        cT = null,
        lT = null,
        MT = null;
      const KT = async () => {
        let cT = null;
        try {
          return cT = kT ??= (0, oT.J)(TT.url(), (0, HT.e)(TT.name)), await cT
        } catch (lT) {
          throw kT === cT && (kT = null), TT.error((0, oT.R)(lT), lT)
        }
      };
      return {
        load: () => {
          if (MT) return Promise.reject(MT);
          if (cT) return cT;
          const kT = (async () => {
            const kT = await KT();
            try {
              await TT.init(kT)
            } catch (cT) {
              throw TT.error("instantiate", cT)
            }
            return TT.bindings
          })();
          cT = kT, lT = kT;
          const OT = () => {
            lT === kT && (lT = null)
          };
          return kT.then(OT, (() => {
            OT(), cT === kT && (cT = null)
          })), kT
        },
        prefetch: async () => {
          MT || cT || await KT()
        },
        markTrapped: kT => (MT ??= TT.error("call", kT), MT),
        unload: () => {
          MT || !TT.reset || lT || (TT.reset(), cT = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new cT.U(cT(60865)),
      init: async TT => {
        await zT({
          module_or_path: TT
        }), VT = fT()
      },
      bindings: lT,
      error: (TT, kT) => new GT(TT, kT),
      reset: () => {
        JT(), VT = null
      }
    });

    function ZT() {
      return ET.load()
    }

    function uT() {
      return ET.prefetch()
    }

    function XT(TT) {
      return ET.markTrapped(TT)
    }

    function dT() {
      ET.unload()
    }

    function LT() {
      return VT?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);