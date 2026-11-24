export const id = 65;
export const ids = [65];
export const modules = {
  61252: (DD, zD, wD) => {
    DD.exports = wD.p + "static/media/bloxd_wasm_replay_bg.71161e5e13d388d8b3b1.wasm"
  },
  6653: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(2868);
    const sD = {
      bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
      bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
      bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
      bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
      bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
      bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
      bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
      bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
      bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
      bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
      bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
      bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
    };
    var KD = wD(4722);

    function rD(DD) {
      const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
      if (void 0 !== zD) return {
        sha256: zD,
        onMismatch: KD.B
      };
      throw new pD.l(`${DD} has no release digest, so this build refuses it`)
    }
  },
  61246: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      BloxdReplayWasmError: () => SD,
      loadReplayModule: () => kD,
      markReplayTrapped: () => oD,
      replayMemoryBytes: () => eD,
      unloadReplayModule: () => mD
    });
    var pD = {};
    wD.r(pD), wD.d(pD, {
      IKD: () => sD,
      KLD: () => bD,
      UA: () => KD,
      default: () => TD,
      initSync: () => xD,
      fA: () => rD,
      gKD: () => LD,
      BKD: () => cD
    });
    class sD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, RD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        VD.xm4J(DD, 0)
      }
      OKD(DD, zD, wD, pD, sD, KD) {
        VD.sEhO(this.__wbg_ptr, DD, zD, wD, pD, sD, KD)
      }
      close() {
        VD.Bs6N(this.__wbg_ptr)
      }
      crop(DD, zD) {
        VD.gKGi(this.__wbg_ptr, DD, zD)
      }
      QKD(DD, zD) {
        VD.nlMP(this.__wbg_ptr, DD, zD)
      }
      VKD() {
        return VD.Nxsh(this.__wbg_ptr) >>> 0
      }
      XKD() {
        return VD.rajl(this.__wbg_ptr) >>> 0
      }
      PKD() {
        return VD.ISbK(this.__wbg_ptr) >>> 0
      }
      CKD() {
        return VD.W5ld(this.__wbg_ptr) >>> 0
      }
      EKD(DD, zD) {
        VD.Wzy2(this.__wbg_ptr, DD, zD)
      }
      constructor() {
        const DD = VD.BNeU();
        return this.__wbg_ptr = DD, RD.register(this, this.__wbg_ptr, this), this
      }
      open() {
        VD.GJMt(this.__wbg_ptr)
      }
      KKD() {
        return VD.mMPu(this.__wbg_ptr) >>> 0
      }
      pause() {
        VD.m8LD(this.__wbg_ptr)
      }
      play() {
        VD.oai2(this.__wbg_ptr)
      }
      save() {
        return VD.pKFg(this.__wbg_ptr) >>> 0
      }
      xKD() {
        VD.pqI2(this.__wbg_ptr)
      }
      seek(DD, zD) {
        VD.VU9I(this.__wbg_ptr, DD, zD)
      }
      bKD(DD) {
        VD.lOPV(this.__wbg_ptr, DD)
      }
      JKD(DD, zD) {
        const wD = function(DD, zD) {
            const wD = zD(8 * DD.length, 8) >>> 0;
            return function() {
              null !== UD && 0 !== UD.byteLength || (UD = new Float64Array(VD.memory.buffer));
              return UD
            }().set(DD, wD / 8), PD = DD.length, wD
          }(zD, VD.iguB),
          pD = PD;
        VD.S92l(this.__wbg_ptr, DD, wD, pD)
      }
      nKD(DD, zD) {
        VD.rj97(this.__wbg_ptr, DD, zD)
      }
      TKD(DD) {
        VD.nk5G(this.__wbg_ptr, DD)
      }
      stage(DD) {
        return VD.mfFK(this.__wbg_ptr, DD) >>> 0
      }
      step(DD, zD) {
        return VD.PXm2(this.__wbg_ptr, DD, zD) >>> 0
      }
    }

    function KD(DD, zD) {
      const wD = function(DD, zD, wD) {
          if (void 0 === wD) {
            const wD = ED.encode(DD),
              pD = zD(wD.length, 1) >>> 0;
            return BD().subarray(pD, pD + wD.length).set(wD), PD = wD.length, pD
          }
          let pD = DD.length,
            sD = zD(pD, 1) >>> 0;
          const KD = BD();
          let rD = 0;
          for (; rD < pD; rD++) {
            const zD = DD.charCodeAt(rD);
            if (zD > 127) break;
            KD[sD + rD] = zD
          }
          if (rD !== pD) {
            0 !== rD && (DD = DD.slice(rD)), sD = wD(sD, pD, pD = rD + 3 * DD.length, 1) >>> 0;
            const zD = BD().subarray(sD + rD, sD + pD);
            rD += ED.encodeInto(DD, zD).written, sD = wD(sD, pD, rD, 1) >>> 0
          }
          return PD = rD, sD
        }(DD, VD.iguB, VD.UqE8),
        pD = PD,
        sD = VD.HKU1(wD, pD, zD);
      if (sD[1]) throw nD(sD[0])
    }

    function rD() {
      VD.T89V()
    }

    function LD() {
      return VD.s9gt() >>> 0
    }

    function cD() {
      return nD(VD.NRPP())
    }

    function gD() {
      return {
        __proto__: null,
        VlEM: {
          __proto__: null,
          hFRU: function(DD, zD) {
            return AD(Error(fD(DD, zD)))
          },
          s10s: function() {
            return AD(VD.memory)
          },
          Pchc: function(DD, zD) {
            throw new Error(fD(DD, zD))
          },
          BZJj: function(DD, zD) {
            console.error(fD(DD, zD))
          },
          bojE: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (sD.prototype[Symbol.dispose] = sD.prototype.free);
    const RD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => VD?.__wbg_replaymodule_free(DD, 1)));

    function AD(DD) {
      hD === GD.length && GD.push(GD.length + 1);
      const zD = hD;
      return hD = GD[zD], GD[zD] = DD, zD
    }
    let UD = null;

    function fD(DD, zD) {
      return function(DD, zD) {
        JD += zD, JD >= OD && (MD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), MD.decode(), JD = zD);
        return MD.decode(BD().subarray(DD, DD + zD))
      }(DD >>> 0, zD)
    }
    let ID = null;

    function BD() {
      return null !== ID && 0 !== ID.byteLength || (ID = new Uint8Array(VD.memory.buffer)), ID
    }
    let GD = new Array(1024).fill(void 0);
    GD.push(void 0, null, !0, !1);
    let hD = GD.length;

    function nD(DD) {
      const zD = function(DD) {
        return GD[DD]
      }(DD);
      return function(DD) {
        DD < 1028 || (GD[DD] = hD, hD = DD)
      }(DD), zD
    }
    let MD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    MD.decode();
    const OD = 2146435072;
    let JD = 0;
    const ED = new TextEncoder;
    "encodeInto" in ED || (ED.encodeInto = function(DD, zD) {
      const wD = ED.encode(DD);
      return zD.set(wD), {
        read: DD.length,
        written: wD.length
      }
    });
    let QD, XD, VD, PD = 0;

    function CD(DD, zD) {
      return XD = DD, VD = DD.exports, QD = zD, UD = null, ID = null, VD.F06e(), VD
    }

    function xD(DD) {
      if (void 0 !== VD) return VD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zD = gD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return CD(new WebAssembly.Instance(DD, zD), DD)
    }
    async function TD(DD) {
      if (void 0 !== VD) return VD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zD = gD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: wD,
        module: pD
      } = await async function(DD, zD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, zD)
          } catch (wD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw wD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", wD)
          }
          const pD = await DD.arrayBuffer();
          return await WebAssembly.instantiate(pD, zD)
        } {
          const wD = await WebAssembly.instantiate(DD, zD);
          return wD instanceof WebAssembly.Instance ? {
            instance: wD,
            module: DD
          } : wD
        }
      }(await DD, zD);
      return CD(wD, pD)
    }

    function bD() {
      VD = void 0, XD = void 0, UD = null, ID = null, GD = new Array(1024).fill(void 0), GD.push(void 0, null, !0, !1), hD = GD.length
    }
    var jD = wD(2868),
      dD = wD(6653);
    class SD extends Error {
      stage;
      constructor(DD, zD) {
        super((0, jD.A)(DD, zD), {
          cause: zD
        }), this.name = "BloxdReplayWasmError", this.stage = DD
      }
    }
    let iD = null,
      lD = null,
      WD = Promise.resolve(),
      ND = 0,
      ZD = null,
      yD = null;

    function kD() {
      if (yD) return Promise.reject(yD);
      if (lD) return lD;
      const DD = ND,
        zD = WD,
        sD = (async () => {
          let sD;
          await zD, iD ??= (0, jD.B)(new wD.U(wD(61252)), (0, dD.d)("bloxd_wasm_replay"));
          try {
            sD = await iD
          } catch (KD) {
            throw iD = null, new SD((0, jD.G)(KD), KD)
          }
          if (DD !== ND) throw new SD("instantiate", new Error("unloaded while loading"));
          try {
            await TD({
              module_or_path: sD
            })
          } catch (KD) {
            throw bD(), new SD("instantiate", KD)
          }
          if (DD !== ND) throw bD(), new SD("instantiate", new Error("unloaded while loading"));
          return ZD = cD(), pD
        })();
      return lD = sD, WD = sD.catch((() => {})), sD.catch((() => {
        lD === sD && (lD = null)
      })), sD
    }

    function mD() {
      yD || aD()
    }

    function eD() {
      return ZD?.buffer.byteLength ?? 0
    }

    function oD(DD) {
      return yD || (yD = new SD("call", DD), aD()), yD
    }

    function aD() {
      ND++, bD(), lD = null, ZD = null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);