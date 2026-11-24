export const id = 66;
export const ids = [66];
export const modules = {
  61349: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/bloxd_wasm_replay_bg.f973fa266eebecf4fed0.wasm"
  },
  6688: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(3001);
    const zT = {
      bloxd_wasm: () => "f27f4f7ab88718881db9d78f55a901cbbb02cd6bf05768435c5f2febd84d596d",
      bloxd_wasm_client: () => "fe788e9625b49e5678303f11a8ccc6a8c723d74fb00195130bf800992df44145",
      bloxd_wasm_workers: () => "9fb7dbb4f3017c2cc6380a2c767b44a4b54fa9ed16a4abd92a7532b57861043e",
      bloxd_wasm_models: () => "c20178931ac19cee58b7771522bf0ba147ea1510835a2c987e0b1db7fea6ed31",
      bloxd_wasm_webgpu: () => "35eb5bbeecb540e751c7772a16e8c673eae334d8012cb03c16848cbcaead6ddb",
      bloxd_wasm_webgl: () => "cec6d5fa8c55e39d3e1d139626227ac277edded615c086119498fb33675206ab",
      bloxd_wasm_webgl1: () => "74b3f9f1c13416de2df904cf4e4ab62ffa42eac861f93b0a1bccb4d2143350c5",
      bloxd_wasm_replay: () => "f779c38a59848818069249dcb1a8196265b0837c473149c9b69b1b4da8202e06",
      bloxd_wasm_recorder: () => "51a9fb786a0c5f3456cd21a32d84b845b2ae56e9d50089027c682f1bd37ca3f5",
      bloxd_wasm_anim: () => "9afb84ad58982f160166f83214a1898ab627c7d097478d5712c0084c9f41f151",
      bloxd_wasm_textures: () => "4cb0448cd98b7a67e67215005f76b27fa8e465345a667579443082f00c6c20a6",
      bloxd_wasm_shader_pack: () => "b8b683214f5ac4a8b9de92714a869aeb3ab931c2e3e084bdd9355b16df02f922"
    };
    var MT = mT(4780);

    function gT(TT) {
      const UT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== UT) return {
        sha256: UT,
        onMismatch: MT.z
      };
      throw new WT.i(`${TT} has no release digest, so this build refuses it`)
    }
  },
  61346: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      BloxdReplayWasmError: () => IT,
      loadReplayModule: () => CT,
      markReplayTrapped: () => ST,
      replayMemoryBytes: () => KT,
      unloadReplayModule: () => rT
    });
    var WT = {};
    mT.r(WT), mT.d(WT, {
      LMT: () => zT,
      mnT: () => aT,
      Ul: () => MT,
      default: () => tT,
      initSync: () => wT,
      ml: () => gT,
      HMT: () => nT,
      pMT: () => HT
    });
    class zT {
      __destroy_into_raw() {
        const TT = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jT.unregister(this), TT
      }
      free() {
        const TT = this.__destroy_into_raw();
        JT.RKIW(TT, 0)
      }
      vMT(TT, UT, mT, WT, zT, MT) {
        JT.djFC(this.__wbg_ptr, TT, UT, mT, WT, zT, MT)
      }
      close() {
        JT.HcTW(this.__wbg_ptr)
      }
      crop(TT, UT) {
        JT.Qp6L(this.__wbg_ptr, TT, UT)
      }
      iMT(TT, UT) {
        JT.XtUZ(this.__wbg_ptr, TT, UT)
      }
      OMT() {
        return JT.rxKC(this.__wbg_ptr) >>> 0
      }
      bMT() {
        return JT.qNbQ(this.__wbg_ptr) >>> 0
      }
      eMT() {
        return JT.ucxG(this.__wbg_ptr) >>> 0
      }
      YMT() {
        return JT.Hqwo(this.__wbg_ptr) >>> 0
      }
      qMT(TT, UT) {
        JT.pRnr(this.__wbg_ptr, TT, UT)
      }
      constructor() {
        const TT = JT.aJTE();
        return this.__wbg_ptr = TT, jT.register(this, this.__wbg_ptr, this), this
      }
      open() {
        JT.e2oa(this.__wbg_ptr)
      }
      zMT() {
        return JT.YTDp(this.__wbg_ptr) >>> 0
      }
      pause() {
        JT.XZKF(this.__wbg_ptr)
      }
      play() {
        JT.HokV(this.__wbg_ptr)
      }
      save() {
        return JT.xjJl(this.__wbg_ptr) >>> 0
      }
      JMT() {
        JT.KWpj(this.__wbg_ptr)
      }
      seek(TT, UT) {
        JT.uCvg(this.__wbg_ptr, TT, UT)
      }
      dMT(TT) {
        JT.ydTi(this.__wbg_ptr, TT)
      }
      fMT(TT, UT) {
        const mT = function(TT, UT) {
            const mT = UT(8 * TT.length, 8) >>> 0;
            return function() {
              null !== LT && 0 !== LT.byteLength || (LT = new Float64Array(JT.memory.buffer));
              return LT
            }().set(TT, mT / 8), xT = TT.length, mT
          }(UT, JT.ICL7),
          WT = xT;
        JT.WfnA(this.__wbg_ptr, TT, mT, WT)
      }
      cMT(TT, UT) {
        JT.dS4z(this.__wbg_ptr, TT, UT)
      }
      xMT(TT) {
        JT.fYqm(this.__wbg_ptr, TT)
      }
      stage(TT) {
        return JT.d9t0(this.__wbg_ptr, TT) >>> 0
      }
      step(TT, UT) {
        return JT.nVm3(this.__wbg_ptr, TT, UT) >>> 0
      }
    }

    function MT(TT, UT) {
      const mT = function(TT, UT, mT) {
          if (void 0 === mT) {
            const mT = OT.encode(TT),
              WT = UT(mT.length, 1) >>> 0;
            return ZT().subarray(WT, WT + mT.length).set(mT), xT = mT.length, WT
          }
          let WT = TT.length,
            zT = UT(WT, 1) >>> 0;
          const MT = ZT();
          let gT = 0;
          for (; gT < WT; gT++) {
            const UT = TT.charCodeAt(gT);
            if (UT > 127) break;
            MT[zT + gT] = UT
          }
          if (gT !== WT) {
            0 !== gT && (TT = TT.slice(gT)), zT = mT(zT, WT, WT = gT + 3 * TT.length, 1) >>> 0;
            const UT = ZT().subarray(zT + gT, zT + WT);
            gT += OT.encodeInto(TT, UT).written, zT = mT(zT, WT, gT, 1) >>> 0
          }
          return xT = gT, zT
        }(TT, JT.ICL7, JT.c7Sl),
        WT = xT,
        zT = JT.tsrF(mT, WT, UT);
      if (zT[1]) throw fT(zT[0])
    }

    function gT() {
      JT.Kf9Q()
    }

    function nT() {
      return JT.LZvg() >>> 0
    }

    function HT() {
      return fT(JT.OUbM())
    }

    function kT() {
      return {
        __proto__: null,
        Kzol: {
          __proto__: null,
          l3o3: function(TT, UT) {
            return lT(Error(pT(TT, UT)))
          },
          VGQ3: function() {
            return lT(JT.memory)
          },
          qjQK: function(TT, UT) {
            throw new Error(pT(TT, UT))
          },
          naKR: function(TT, UT) {
            console.error(pT(TT, UT))
          },
          QlQW: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (zT.prototype[Symbol.dispose] = zT.prototype.free);
    const jT = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((TT => JT?.__wbg_replaymodule_free(TT, 1)));

    function lT(TT) {
      vT === cT.length && cT.push(cT.length + 1);
      const UT = vT;
      return vT = cT[UT], cT[UT] = TT, UT
    }
    let LT = null;

    function pT(TT, UT) {
      return function(TT, UT) {
        bT += UT, bT >= iT && (qT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), qT.decode(), bT = UT);
        return qT.decode(ZT().subarray(TT, TT + UT))
      }(TT >>> 0, UT)
    }
    let BT = null;

    function ZT() {
      return null !== BT && 0 !== BT.byteLength || (BT = new Uint8Array(JT.memory.buffer)), BT
    }
    let cT = new Array(1024).fill(void 0);
    cT.push(void 0, null, !0, !1);
    let vT = cT.length;

    function fT(TT) {
      const UT = function(TT) {
        return cT[TT]
      }(TT);
      return function(TT) {
        TT < 1028 || (cT[TT] = vT, vT = TT)
      }(TT), UT
    }
    let qT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    qT.decode();
    const iT = 2146435072;
    let bT = 0;
    const OT = new TextEncoder;
    "encodeInto" in OT || (OT.encodeInto = function(TT, UT) {
      const mT = OT.encode(TT);
      return UT.set(mT), {
        read: TT.length,
        written: mT.length
      }
    });
    let eT, YT, JT, xT = 0;

    function dT(TT, UT) {
      return YT = TT, JT = TT.exports, eT = UT, LT = null, BT = null, JT.lynH(), JT
    }

    function wT(TT) {
      if (void 0 !== JT) return JT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module: TT
      } = TT) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const UT = kT();
      TT instanceof WebAssembly.Module || (TT = new WebAssembly.Module(TT));
      return dT(new WebAssembly.Instance(TT, UT), TT)
    }
    async function tT(TT) {
      if (void 0 !== JT) return JT;
      void 0 !== TT && (Object.getPrototypeOf(TT) === Object.prototype ? ({
        module_or_path: TT
      } = TT) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const UT = kT();
      ("string" === typeof TT || "function" === typeof Request && TT instanceof Request || "function" === typeof URL && TT instanceof URL) && (TT = fetch(TT));
      const {
        instance: mT,
        module: WT
      } = await async function(TT, UT) {
        if ("function" === typeof Response && TT instanceof Response) {
          if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(TT, UT)
          } catch (mT) {
            if (! function(TT) {
                switch (TT) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw mT;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", mT)
          }
          const WT = await TT.arrayBuffer();
          return await WebAssembly.instantiate(WT, UT)
        } {
          const mT = await WebAssembly.instantiate(TT, UT);
          return mT instanceof WebAssembly.Instance ? {
            instance: mT,
            module: TT
          } : mT
        }
      }(await TT, UT);
      return dT(mT, WT)
    }

    function aT() {
      JT = void 0, YT = void 0, LT = null, BT = null, cT = new Array(1024).fill(void 0), cT.push(void 0, null, !0, !1), vT = cT.length
    }
    var yT = mT(3001),
      XT = mT(6688);
    class IT extends Error {
      stage;
      constructor(TT, UT) {
        super((0, yT.F)(TT, UT), {
          cause: UT
        }), this.name = "BloxdReplayWasmError", this.stage = TT
      }
    }
    let QT = null,
      sT = null,
      FT = Promise.resolve(),
      PT = 0,
      VT = null,
      uT = null;

    function CT() {
      if (uT) return Promise.reject(uT);
      if (sT) return sT;
      const TT = PT,
        UT = FT,
        zT = (async () => {
          let zT;
          await UT, QT ??= (0, yT.I)(new mT.U(mT(61349)), (0, XT.b)("bloxd_wasm_replay"));
          try {
            zT = await QT
          } catch (MT) {
            throw QT = null, new IT((0, yT.P)(MT), MT)
          }
          if (TT !== PT) throw new IT("instantiate", new Error("unloaded while loading"));
          try {
            await tT({
              module_or_path: zT
            })
          } catch (MT) {
            throw aT(), new IT("instantiate", MT)
          }
          if (TT !== PT) throw aT(), new IT("instantiate", new Error("unloaded while loading"));
          return VT = HT(), WT
        })();
      return sT = zT, FT = zT.catch((() => {})), zT.catch((() => {
        sT === zT && (sT = null)
      })), zT
    }

    function rT() {
      uT || GT()
    }

    function KT() {
      return VT?.buffer.byteLength ?? 0
    }

    function ST(TT) {
      return uT || (uT = new IT("call", TT), GT()), uT
    }

    function GT() {
      PT++, aT(), sT = null, VT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);