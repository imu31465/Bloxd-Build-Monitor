export const id = 62;
export const ids = [62];
export const modules = {
  60355: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/bloxd_wasm_replay_bg.0c2286cf2e9411c54265.wasm"
  },
  6123: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(3280);
    const zT = {
      bloxd_wasm: () => "891b125e1fa53c747db8046ca1a7828990783e6318b475060b2689b2c62ec64b",
      bloxd_wasm_client: () => "afe376ddb7e074ef28dc003cae65be2019ba85870176102f5c99327651531a90",
      bloxd_wasm_workers: () => "bdacf110fdd54ff050ae9c3d3c9c40fa9932196a316574c38050f09f93d5d4d0",
      bloxd_wasm_models: () => "d431807fb8651e0a5be03886feec149ab2c5d8f7292513bb4f5f6f8198ccd3fa",
      bloxd_wasm_webgpu: () => "36744cc13e8d59f3d9a2cc30379d81ca4b0e563c1ccd9032a15b3d5d2fd1f9b1",
      bloxd_wasm_webgl: () => "d7f8f069066a9513edfd41a54bdc46943132c54fd47d41226907a9c5957c5a3e",
      bloxd_wasm_webgl1: () => "1f274f498c33507fd74ae865400b574dec316d2e2535b8bdd60f2679aec71305",
      bloxd_wasm_replay: () => "308a6b9500ce1acc37831e57249009d9c05a3a9b3821582ea4fe8330d515270a",
      bloxd_wasm_recorder: () => "c2dd3c772eaa41d9a4cfcd9261204dae143353c48db7c49556d0089946997bff",
      bloxd_wasm_anim: () => "92da9dc930879a101e815385ac8673ac818daddd3cc10a9e6f242c32dd68abe8",
      bloxd_wasm_textures: () => "de7050a0a81f4523efadc506fed6ff11ef5e5819f30494428008fcaceee90545",
      bloxd_wasm_shader_pack: () => "012d029967fec4420d84f73dad4d7e807ec1901518f66edd03a82520f373fb43"
    };
    var kT = IT(4191);

    function WT(TT) {
      const oT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== oT) return {
        sha256: oT,
        onMismatch: kT.y
      };
      throw new iT.k(`${TT} has no release digest, so this build refuses it`)
    }
  },
  60349: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      BloxdReplayWasmError: () => aT,
      loadReplayModule: () => ZT,
      markReplayTrapped: () => tT,
      replayMemoryBytes: () => sT,
      unloadReplayModule: () => lT
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      YzT: () => zT,
      RWT: () => jT,
      DD: () => kT,
      default: () => CT,
      initSync: () => fT,
      LD: () => WT,
      CzT: () => XT,
      OzT: () => BT
    });
    class zT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ST.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        uT.B9OX(TT, 0)
      }
      ZzT(TT, oT, IT, iT, zT, kT) {
        uT.BwRp(this.__wbg_ptr, TT, oT, IT, iT, zT, kT)
      }
      close() {
        uT.YR8F(this.__wbg_ptr)
      }
      crop(TT, oT) {
        uT.tWme(this.__wbg_ptr, TT, oT)
      }
      tzT(TT, oT) {
        uT.aJVe(this.__wbg_ptr, TT, oT)
      }
      pzT() {
        return uT.sfqK(this.__wbg_ptr) >>> 0
      }
      GzT() {
        return uT.VXsK(this.__wbg_ptr) >>> 0
      }
      bzT() {
        return uT.J0Ct(this.__wbg_ptr) >>> 0
      }
      yzT() {
        return uT.Cofu(this.__wbg_ptr) >>> 0
      }
      szT(TT, oT) {
        uT.zcVL(this.__wbg_ptr, TT, oT)
      }
      constructor() {
        const TT = uT.eVh3();
        return this.__wbg_ptr = TT, ST.register(this, this.__wbg_ptr, this), this
      }
      open() {
        uT.bKCG(this.__wbg_ptr)
      }
      uzT() {
        return uT.vo1c(this.__wbg_ptr) >>> 0
      }
      pause() {
        uT.xYh9(this.__wbg_ptr)
      }
      play() {
        uT.bmTs(this.__wbg_ptr)
      }
      save() {
        return uT.JItg(this.__wbg_ptr) >>> 0
      }
      NzT() {
        uT.TYbZ(this.__wbg_ptr)
      }
      seek(TT, oT) {
        uT.y11n(this.__wbg_ptr, TT, oT)
      }
      dzT(TT) {
        uT.RDao(this.__wbg_ptr, TT)
      }
      lzT(TT, oT) {
        const IT = function(TT, oT) {
            const IT = oT(8 * TT.length, 8) >>> 0;
            return function() {
              null !== LT && 0 !== LT.byteLength || (LT = new Float64Array(uT.memory.buffer));
              return LT
            }().set(TT, IT / 8), vT = TT.length, IT
          }(oT, uT.wLGp),
          iT = vT;
        uT.AdGF(this.__wbg_ptr, TT, IT, iT)
      }
      qzT(TT, oT) {
        uT.H7gJ(this.__wbg_ptr, TT, oT)
      }
      PzT(TT) {
        uT.UV6N(this.__wbg_ptr, TT)
      }
      stage(TT) {
        return uT.tPnZ(this.__wbg_ptr, TT) >>> 0
      }
      step(TT, oT) {
        return uT.V8xw(this.__wbg_ptr, TT, oT) >>> 0
      }
    }

    function kT(TT, oT) {
      const IT = function(TT, oT, IT) {
          if (void 0 === IT) {
            const IT = mT.encode(TT),
              iT = oT(IT.length, 1) >>> 0;
            return KT().subarray(iT, iT + IT.length).set(IT), vT = IT.length, iT
          }
          let iT = TT.length,
            zT = oT(iT, 1) >>> 0;
          const kT = KT();
          let WT = 0;
          for (; WT < iT; WT++) {
            const oT = TT.charCodeAt(WT);
            if (oT > 127) break;
            kT[zT + WT] = oT
          }
          if (WT !== iT) {
            0 !== WT && (TT = TT.slice(WT)), zT = IT(zT, iT, iT = WT + 3 * TT.length, 1) >>> 0;
            const oT = KT().subarray(zT + WT, zT + iT);
            WT += mT.encodeInto(TT, oT).written, zT = IT(zT, iT, WT, 1) >>> 0
          }
          return vT = WT, zT
        }(TT, uT.wLGp, uT.Leue),
        iT = vT,
        zT = uT.WbSx(IT, iT, oT);
      if (zT[1]) throw AT(zT[0])
    }

    function WT() {
      uT.HBvk()
    }

    function XT() {
      return uT.d4fO() >>> 0
    }

    function BT() {
      return AT(uT.gTvQ())
    }

    function FT() {
      return {
        __proto__: null,
        tXAx: {
          __proto__: null,
          fZFO: function(TT, oT) {
            return DT(Error(xT(TT, oT)))
          },
          KxJB: function() {
            return DT(uT.memory)
          },
          yAje: function(TT, oT) {
            throw new Error(xT(TT, oT))
          },
          xagr: function(TT, oT) {
            console.error(xT(TT, oT))
          },
          CaDK: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const ST = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => uT?.__wbg_replaymodule_free(TT, 1)));

    function DT(TT) {
      rT === MT.length && MT.push(MT.length + 1);
      const oT = rT;
      return rT = MT[oT], MT[oT] = TT, oT
    }
    let LT = null;

    function xT(TT, oT) {
      return function(TT, oT) {
        wT += oT, wT >= hT && (gT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), gT.decode(), wT = oT);
        return gT.decode(KT().subarray(TT, TT + oT))
      }(TT >>> 0, oT)
    }
    let cT = null;

    function KT() {
      return null !== cT && 0 !== cT.byteLength || (cT = new Uint8Array(uT.memory.buffer)), cT
    }
    let MT = new Array(1024).fill(void 0);
    MT.push(void 0, null, !0, !1);
    let rT = MT.length;

    function AT(TT) {
      const oT = function(TT) {
        return MT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (MT[TT] = rT, rT = TT)
      }(TT), oT
    }
    let gT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    gT.decode();
    const hT = 2146435072;
    let wT = 0;
    const mT = new TextEncoder;
    "encodeInto" in mT || (mT.encodeInto = function(TT, oT) {
      const IT = mT.encode(TT);
      return oT.set(IT), {
        read: TT.length,
        written: IT.length
      }
    });
    let eT, RT, uT, vT = 0;

    function ET(TT, oT) {
      return RT = TT, uT = TT.exports, eT = oT, LT = null, cT = null, uT.bJ2e(), uT
    }

    function fT(TT) {
      if (void 0 !== uT) return uT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const oT = FT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return ET(new WebAssembly.Instance(TT, oT), TT)
    }
    async function CT(TT) {
      if (void 0 !== uT) return uT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const oT = FT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: IT,
        module: iT
      } = await async function(TT, oT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, oT)
          } catch (IT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw IT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", IT)
          }
          const iT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(iT, oT)
        } {
          const IT = await WebAssembly.instantiate(TT, oT);
          return IT instanceof WebAssembly.Instance ? {
            instance: IT,
            module: TT
          } : IT
        }
      }(await TT, oT);
      return ET(IT, iT)
    }

    function jT() {
      uT = void 0, RT = void 0, LT = null, cT = null, MT = new Array(1024).fill(void 0), MT.push(void 0, null, !0, !1), rT = MT.length
    }
    var JT = IT(3280),
      UT = IT(6123);
    class aT extends Error {
      stage;
      constructor(TT, oT) {
        super((0, JT.G)(TT, oT), {
          cause: oT
        }), this.name = "BloxdReplayWasmError", this.stage = TT
      }
    }
    let YT = null,
      QT = null,
      OT = Promise.resolve(),
      HT = 0,
      nT = null,
      qT = null;

    function ZT() {
      if (qT) return Promise.reject(qT);
      if (QT) return QT;
      const TT = HT,
        oT = OT,
        zT = (async () => {
          let zT;
          await oT, YT ??= (0, JT.J)(new IT.U(IT(60355)), (0, UT.c)("bloxd_wasm_replay"));
          try {
            zT = await YT
          } catch (kT) {
            throw YT = null, new aT((0, JT.N)(kT), kT)
          }
          if (TT !== HT) throw new aT("instantiate", new Error("unloaded while loading"));
          try {
            await CT({
              module_or_path: zT
            })
          } catch (kT) {
            throw jT(), new aT("instantiate", kT)
          }
          if (TT !== HT) throw jT(), new aT("instantiate", new Error("unloaded while loading"));
          return nT = BT(), iT
        })();
      return QT = zT, OT = zT.catch((() => {})), zT.catch((() => {
        QT === zT && (QT = null)
      })), zT
    }

    function lT() {
      qT || GT()
    }

    function sT() {
      return nT?.buffer.byteLength ?? 0
    }

    function tT(TT) {
      return qT || (qT = new aT("call", TT), GT()), qT
    }

    function GT() {
      HT++, jT(), QT = null, nT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);