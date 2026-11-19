export const id = 62;
export const ids = [62];
export const modules = {
  60711: (DD, CD, cD) => {
    DD.exports = cD.p + "static/media/bloxd_wasm_replay_bg.56b4f9f5de6c0d5a105c.wasm"
  },
  6372: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(3529);
    const pD = {
      bloxd_wasm: () => "0d17f541f551a53f4dab724907dfd17c2f5e497131bb2f0746463cf7a85b45bd",
      bloxd_wasm_client: () => "d6e226c9d75d445b020168abe06f72e7048eeb030e81e1c51b07a85852e3609f",
      bloxd_wasm_workers: () => "a532339ee7770d546b5211eae4811431c5af4bef0f6bb1f1bd9d9cedfe642720",
      bloxd_wasm_models: () => "5831b416c1ed8d38d5851a3544f33f1dbf9ce134ab804da19046d201729a0e57",
      bloxd_wasm_webgpu: () => "f931d06e251abe5711fda5efd0c8f6b13c28366b4ac2d5d8847dd6de0a7c2502",
      bloxd_wasm_webgl: () => "76d7d6a654e5f0a7055ecf5f60b4be1c5fa941239d1fc25cad0eeb9117a9d50d",
      bloxd_wasm_webgl1: () => "bbb62056b165fcb2da03a0e26b34e721e5d1836ef01440ade5fd39a17ef2351f",
      bloxd_wasm_replay: () => "ab1e675b3f2654cebc6cb9fcc2eb625d7e3becf9545d6aaec6d35e28d2b68a56",
      bloxd_wasm_recorder: () => "191548def26c8771cc0d55137afcbedfc047ac41e34a07f34acfc4a9c88d9352",
      bloxd_wasm_anim: () => "8df2ff23aed1fe182321a7874775d9d81cd1a481ed48f89ab986aeb54b6aba72",
      bloxd_wasm_textures: () => "24200f89bea0ac9a6bb6d6c36427b0a05df327d7b83abe32fb2d1e0b136a1861",
      bloxd_wasm_shader_pack: () => "7e7c31d2eef819d6f78ae283bdf7f325715093016c9b3415b5500d163bb24552"
    };
    var iD = cD(4495);

    function fD(DD) {
      const CD = Object.prototype.hasOwnProperty.call(pD, DD) ? pD[DD]() : void 0;
      if (void 0 !== CD) return {
        sha256: CD,
        onMismatch: iD.y
      };
      throw new ID.h(`${DD} has no release digest, so this build refuses it`)
    }
  },
  60704: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      BloxdReplayWasmError: () => zD,
      loadReplayModule: () => kD,
      markReplayTrapped: () => WD,
      replayMemoryBytes: () => YD,
      unloadReplayModule: () => dD
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      XpD: () => pD,
      SfD: () => KD,
      NB: () => iD,
      default: () => JD,
      initSync: () => qD,
      gB: () => fD,
      opD: () => bD,
      mpD: () => QD
    });
    class pD {
      __destroy_into_raw() {
        const DD = this.__wbg_ptr;
        return this.__wbg_ptr = 0, SD.unregister(this), DD
      }
      free() {
        const DD = this.__destroy_into_raw();
        HD.ZPWE(DD, 0)
      }
      UpD(DD, CD, cD, ID, pD, iD) {
        HD.Qjpz(this.__wbg_ptr, DD, CD, cD, ID, pD, iD)
      }
      close() {
        HD.vBZX(this.__wbg_ptr)
      }
      crop(DD, CD) {
        HD.uuqc(this.__wbg_ptr, DD, CD)
      }
      JpD(DD, CD) {
        HD.YDJz(this.__wbg_ptr, DD, CD)
      }
      apD() {
        return HD.XA7C(this.__wbg_ptr) >>> 0
      }
      KpD() {
        return HD.Dpm1(this.__wbg_ptr) >>> 0
      }
      VpD() {
        return HD.TIPF(this.__wbg_ptr) >>> 0
      }
      zpD() {
        return HD.dbEN(this.__wbg_ptr) >>> 0
      }
      qpD(DD, CD) {
        HD.Rs13(this.__wbg_ptr, DD, CD)
      }
      constructor() {
        const DD = HD.rSlZ();
        return this.__wbg_ptr = DD, SD.register(this, this.__wbg_ptr, this), this
      }
      open() {
        HD.g6rc(this.__wbg_ptr)
      }
      ypD() {
        return HD.KtsZ(this.__wbg_ptr) >>> 0
      }
      pause() {
        HD.VKTF(this.__wbg_ptr)
      }
      play() {
        HD.kTi0(this.__wbg_ptr)
      }
      save() {
        return HD.tfWA(this.__wbg_ptr) >>> 0
      }
      jpD() {
        HD.KNIQ(this.__wbg_ptr)
      }
      seek(DD, CD) {
        HD.JtoH(this.__wbg_ptr, DD, CD)
      }
      LpD(DD) {
        HD.uWM0(this.__wbg_ptr, DD)
      }
      xpD(DD, CD) {
        const cD = function(DD, CD) {
            const cD = CD(8 * DD.length, 8) >>> 0;
            return function() {
              null !== yD && 0 !== yD.byteLength || (yD = new Float64Array(HD.memory.buffer));
              return yD
            }().set(DD, cD / 8), UD = DD.length, cD
          }(CD, HD.zkZo),
          ID = UD;
        HD.GbiP(this.__wbg_ptr, DD, cD, ID)
      }
      HpD(DD, CD) {
        HD.P4Fr(this.__wbg_ptr, DD, CD)
      }
      lpD(DD) {
        HD.etk9(this.__wbg_ptr, DD)
      }
      stage(DD) {
        return HD.yKAY(this.__wbg_ptr, DD) >>> 0
      }
      step(DD, CD) {
        return HD.yNoD(this.__wbg_ptr, DD, CD) >>> 0
      }
    }

    function iD(DD, CD) {
      const cD = function(DD, CD, cD) {
          if (void 0 === cD) {
            const cD = nD.encode(DD),
              ID = CD(cD.length, 1) >>> 0;
            return ZD().subarray(ID, ID + cD.length).set(cD), UD = cD.length, ID
          }
          let ID = DD.length,
            pD = CD(ID, 1) >>> 0;
          const iD = ZD();
          let fD = 0;
          for (; fD < ID; fD++) {
            const CD = DD.charCodeAt(fD);
            if (CD > 127) break;
            iD[pD + fD] = CD
          }
          if (fD !== ID) {
            0 !== fD && (DD = DD.slice(fD)), pD = cD(pD, ID, ID = fD + 3 * DD.length, 1) >>> 0;
            const CD = ZD().subarray(pD + fD, pD + ID);
            fD += nD.encodeInto(DD, CD).written, pD = cD(pD, ID, fD, 1) >>> 0
          }
          return UD = fD, pD
        }(DD, HD.zkZo, HD.ZXFV),
        ID = UD,
        pD = HD.F6fC(cD, ID, CD);
      if (pD[1]) throw ND(pD[0])
    }

    function fD() {
      HD.QBHN()
    }

    function bD() {
      return HD.jUq3() >>> 0
    }

    function QD() {
      return ND(HD.hQVQ())
    }

    function wD() {
      return {
        __proto__: null,
        yF7O: {
          __proto__: null,
          ltwD: function(DD, CD) {
            return BD(Error(MD(DD, CD)))
          },
          I9TI: function() {
            return BD(HD.memory)
          },
          xVR9: function(DD, CD) {
            throw new Error(MD(DD, CD))
          },
          nPha: function(DD, CD) {
            console.error(MD(DD, CD))
          },
          gpgQ: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (pD.prototype[Symbol.dispose] = pD.prototype.free);
    const SD = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((DD => HD?.__wbg_replaymodule_free(DD, 1)));

    function BD(DD) {
      vD === oD.length && oD.push(oD.length + 1);
      const CD = vD;
      return vD = oD[CD], oD[CD] = DD, CD
    }
    let yD = null;

    function MD(DD, CD) {
      return function(DD, CD) {
        mD += CD, mD >= XD && (gD = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), gD.decode(), mD = CD);
        return gD.decode(ZD().subarray(DD, DD + CD))
      }(DD >>> 0, CD)
    }
    let tD = null;

    function ZD() {
      return null !== tD && 0 !== tD.byteLength || (tD = new Uint8Array(HD.memory.buffer)), tD
    }
    let oD = new Array(1024).fill(void 0);
    oD.push(void 0, null, !0, !1);
    let vD = oD.length;

    function ND(DD) {
      const CD = function(DD) {
        return oD[DD]
      }(DD);
      return function(DD) {
        DD < 1028 || (oD[DD] = vD, vD = DD)
      }(DD), CD
    }
    let gD = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    gD.decode();
    const XD = 2146435072;
    let mD = 0;
    const nD = new TextEncoder;
    "encodeInto" in nD || (nD.encodeInto = function(DD, CD) {
      const cD = nD.encode(DD);
      return CD.set(cD), {
        read: DD.length,
        written: cD.length
      }
    });
    let OD, PD, HD, UD = 0;

    function xD(DD, CD) {
      return PD = DD, HD = DD.exports, OD = CD, yD = null, tD = null, HD.Nh8b(), HD
    }

    function qD(DD) {
      if (void 0 !== HD) return HD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module: DD
      } = DD) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const CD = wD();
      DD instanceof WebAssembly.Module || (DD = new WebAssembly.Module(DD));
      return xD(new WebAssembly.Instance(DD, CD), DD)
    }
    async function JD(DD) {
      if (void 0 !== HD) return HD;
      void 0 !== DD && (Object.getPrototypeOf(DD) === Object.prototype ? ({
        module_or_path: DD
      } = DD) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const CD = wD();
      ("string" === typeof DD || "function" === typeof Request && DD instanceof Request || "function" === typeof URL && DD instanceof URL) && (DD = fetch(DD));
      const {
        instance: cD,
        module: ID
      } = await async function(DD, CD) {
        if ("function" === typeof Response && DD instanceof Response) {
          if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(DD, CD)
          } catch (cD) {
            if (! function(DD) {
                switch (DD) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(DD.type) || "application/wasm" === DD.headers.get("Content-Type")) throw cD;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cD)
          }
          const ID = await DD.arrayBuffer();
          return await WebAssembly.instantiate(ID, CD)
        } {
          const cD = await WebAssembly.instantiate(DD, CD);
          return cD instanceof WebAssembly.Instance ? {
            instance: cD,
            module: DD
          } : cD
        }
      }(await DD, CD);
      return xD(cD, ID)
    }

    function KD() {
      HD = void 0, PD = void 0, yD = null, tD = null, oD = new Array(1024).fill(void 0), oD.push(void 0, null, !0, !1), vD = oD.length
    }
    var aD = cD(3529),
      VD = cD(6372);
    class zD extends Error {
      stage;
      constructor(DD, CD) {
        super((0, aD.D)(DD, CD), {
          cause: CD
        }), this.name = "BloxdReplayWasmError", this.stage = DD
      }
    }
    let jD = null,
      lD = null,
      LD = Promise.resolve(),
      TD = 0,
      GD = null,
      RD = null;

    function kD() {
      if (RD) return Promise.reject(RD);
      if (lD) return lD;
      const DD = TD,
        CD = LD,
        pD = (async () => {
          let pD;
          await CD, jD ??= (0, aD.H)(new cD.U(cD(60711)), (0, VD.e)("bloxd_wasm_replay"));
          try {
            pD = await jD
          } catch (iD) {
            throw jD = null, new zD((0, aD.L)(iD), iD)
          }
          if (DD !== TD) throw new zD("instantiate", new Error("unloaded while loading"));
          try {
            await JD({
              module_or_path: pD
            })
          } catch (iD) {
            throw KD(), new zD("instantiate", iD)
          }
          if (DD !== TD) throw KD(), new zD("instantiate", new Error("unloaded while loading"));
          return GD = QD(), ID
        })();
      return lD = pD, LD = pD.catch((() => {})), pD.catch((() => {
        lD === pD && (lD = null)
      })), pD
    }

    function dD() {
      RD || sD()
    }

    function YD() {
      return GD?.buffer.byteLength ?? 0
    }

    function WD(DD) {
      return RD || (RD = new zD("call", DD), sD()), RD
    }

    function sD() {
      TD++, KD(), lD = null, GD = null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);