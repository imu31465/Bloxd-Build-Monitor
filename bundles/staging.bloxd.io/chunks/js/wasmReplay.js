export const id = 66;
export const ids = [66];
export const modules = {
  61514: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/bloxd_wasm_replay_bg.ea454bebcd8b92e64577.wasm"
  },
  6771: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(3043);
    const JB = {
      bloxd_wasm: () => "3929318ab85efbe7fbf015b7202f97f9213e396225d80b3db1d6eea98607e192",
      bloxd_wasm_client: () => "de8797e7a2073a4b84142d0cdd231107132c281529510d44e15de2b324a3a30f",
      bloxd_wasm_workers: () => "e392be22de1540260052c3350081c85739d1c5bc24a5222edf6de5771f9d53cc",
      bloxd_wasm_models: () => "18f455c31b6430161028848ff988084c6b16d32d8fa12d4af984837abfc3144f",
      bloxd_wasm_webgpu: () => "5526ae404536156accd26af71c2bbbeb37703fbb83da322278378d23a1e1d759",
      bloxd_wasm_webgl: () => "cbc2e38eabd8d787bc137c7584b67ac7d90d219065d8b2cfc013c2b7b96e44bf",
      bloxd_wasm_webgl1: () => "729c4755d993e2a2b24848672562e1cfcebc5f2cf7acaf33d9fc9440993d6ec7",
      bloxd_wasm_replay: () => "42d3e76b4bdf858378fb0fb477290e11c66f2e51aa3947bbbd34ee4a53e1e6c0",
      bloxd_wasm_recorder: () => "d9158108e4a445accd8d7aa1bf531832e077768eae0055f5cadb78f130f5884f",
      bloxd_wasm_anim: () => "1aac61a86d6f89bb60de30b43c299b746d630e8811ba65a52be7c2f8e04ccd3d",
      bloxd_wasm_textures: () => "24c39accf0c81e5ab4e85e999b876eef419c50c2e0b92783b293de227d550aeb",
      bloxd_wasm_shader_pack: () => "6ef135dd10de9c09f7158eff62c3ec8671e1706d2e1ff29eeda717db01789bd3"
    };
    var oB = ZB(4874);

    function GB(BB) {
      const IB = Object.prototype.hasOwnProperty.call(JB, BB) ? JB[BB]() : void 0;
      if (void 0 !== IB) return {
        sha256: IB,
        onMismatch: oB.D
      };
      throw new TB.g(`${BB} has no release digest, so this build refuses it`)
    }
  },
  61507: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      BloxdReplayWasmError: () => PB,
      loadReplayModule: () => uB,
      markReplayTrapped: () => AB,
      replayMemoryBytes: () => lB,
      unloadReplayModule: () => fB
    });
    var TB = {};
    ZB.r(TB), ZB.d(TB, {
      qoB: () => JB,
      cvB: () => HB,
      hh: () => oB,
      default: () => aB,
      initSync: () => pB,
      zh: () => GB,
      zoB: () => vB,
      yoB: () => kB
    });
    class JB {
      __destroy_into_raw() {
        const BB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, nB.unregister(this), BB
      }
      free() {
        const BB = this.__destroy_into_raw();
        OB.ZkLM(BB, 0)
      }
      CoB(BB, IB, ZB, TB, JB, oB) {
        OB.s7yQ(this.__wbg_ptr, BB, IB, ZB, TB, JB, oB)
      }
      close() {
        OB.TCJL(this.__wbg_ptr)
      }
      crop(BB, IB) {
        OB.dsDP(this.__wbg_ptr, BB, IB)
      }
      woB(BB, IB) {
        OB.UkuY(this.__wbg_ptr, BB, IB)
      }
      YoB() {
        return OB.j32U(this.__wbg_ptr) >>> 0
      }
      OoB() {
        return OB.MauT(this.__wbg_ptr) >>> 0
      }
      ioB() {
        return OB.EIOy(this.__wbg_ptr) >>> 0
      }
      poB() {
        return OB.QqQr(this.__wbg_ptr) >>> 0
      }
      soB(BB, IB) {
        OB.Ljdo(this.__wbg_ptr, BB, IB)
      }
      constructor() {
        const BB = OB.J60Q();
        return this.__wbg_ptr = BB, nB.register(this, this.__wbg_ptr, this), this
      }
      open() {
        OB.QCEo(this.__wbg_ptr)
      }
      koB() {
        return OB.vgq4(this.__wbg_ptr) >>> 0
      }
      pause() {
        OB.ZqKg(this.__wbg_ptr)
      }
      play() {
        OB.BBOo(this.__wbg_ptr)
      }
      save() {
        return OB.Ncpt(this.__wbg_ptr) >>> 0
      }
      aoB() {
        OB.nQA9(this.__wbg_ptr)
      }
      seek(BB, IB) {
        OB.vvEk(this.__wbg_ptr, BB, IB)
      }
      MoB(BB) {
        OB.nm9e(this.__wbg_ptr, BB)
      }
      QoB(BB, IB) {
        const ZB = function(BB, IB) {
            const ZB = IB(8 * BB.length, 8) >>> 0;
            return function() {
              null !== zB && 0 !== zB.byteLength || (zB = new Float64Array(OB.memory.buffer));
              return zB
            }().set(BB, ZB / 8), YB = BB.length, ZB
          }(IB, OB.amDJ),
          TB = YB;
        OB.TnTl(this.__wbg_ptr, BB, ZB, TB)
      }
      doB(BB, IB) {
        OB.MREN(this.__wbg_ptr, BB, IB)
      }
      HoB(BB) {
        OB.q1yQ(this.__wbg_ptr, BB)
      }
      stage(BB) {
        return OB.PcAP(this.__wbg_ptr, BB) >>> 0
      }
      step(BB, IB) {
        return OB.jWg7(this.__wbg_ptr, BB, IB) >>> 0
      }
    }

    function oB(BB, IB) {
      const ZB = function(BB, IB, ZB) {
          if (void 0 === ZB) {
            const ZB = QB.encode(BB),
              TB = IB(ZB.length, 1) >>> 0;
            return gB().subarray(TB, TB + ZB.length).set(ZB), YB = ZB.length, TB
          }
          let TB = BB.length,
            JB = IB(TB, 1) >>> 0;
          const oB = gB();
          let GB = 0;
          for (; GB < TB; GB++) {
            const IB = BB.charCodeAt(GB);
            if (IB > 127) break;
            oB[JB + GB] = IB
          }
          if (GB !== TB) {
            0 !== GB && (BB = BB.slice(GB)), JB = ZB(JB, TB, TB = GB + 3 * BB.length, 1) >>> 0;
            const IB = gB().subarray(JB + GB, JB + TB);
            GB += QB.encodeInto(BB, IB).written, JB = ZB(JB, TB, GB, 1) >>> 0
          }
          return YB = GB, JB
        }(BB, OB.amDJ, OB.z3o0),
        TB = YB,
        JB = OB.FWAw(ZB, TB, IB);
      if (JB[1]) throw UB(JB[0])
    }

    function GB() {
      OB.rEBz()
    }

    function vB() {
      return OB.qPV6() >>> 0
    }

    function kB() {
      return UB(OB.hEdr())
    }

    function cB() {
      return {
        __proto__: null,
        NUdP: {
          __proto__: null,
          KHF1: function(BB, IB) {
            return hB(Error(FB(BB, IB)))
          },
          Nrjp: function() {
            return hB(OB.memory)
          },
          gCvx: function(BB, IB) {
            throw new Error(FB(BB, IB))
          },
          hMmc: function(BB, IB) {
            console.error(FB(BB, IB))
          },
          Crey: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (JB.prototype[Symbol.dispose] = JB.prototype.free);
    const nB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((BB => OB?.__wbg_replaymodule_free(BB, 1)));

    function hB(BB) {
      yB === qB.length && qB.push(qB.length + 1);
      const IB = yB;
      return yB = qB[IB], qB[IB] = BB, IB
    }
    let zB = null;

    function FB(BB, IB) {
      return function(BB, IB) {
        CB += IB, CB >= dB && (WB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), WB.decode(), CB = IB);
        return WB.decode(gB().subarray(BB, BB + IB))
      }(BB >>> 0, IB)
    }
    let NB = null;

    function gB() {
      return null !== NB && 0 !== NB.byteLength || (NB = new Uint8Array(OB.memory.buffer)), NB
    }
    let qB = new Array(1024).fill(void 0);
    qB.push(void 0, null, !0, !1);
    let yB = qB.length;

    function UB(BB) {
      const IB = function(BB) {
        return qB[BB]
      }(BB);
      return function(BB) {
        BB < 1028 || (qB[BB] = yB, yB = BB)
      }(BB), IB
    }
    let WB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    WB.decode();
    const dB = 2146435072;
    let CB = 0;
    const QB = new TextEncoder;
    "encodeInto" in QB || (QB.encodeInto = function(BB, IB) {
      const ZB = QB.encode(BB);
      return IB.set(ZB), {
        read: BB.length,
        written: ZB.length
      }
    });
    let sB, wB, OB, YB = 0;

    function iB(BB, IB) {
      return wB = BB, OB = BB.exports, sB = IB, zB = null, NB = null, OB.PnfU(), OB
    }

    function pB(BB) {
      if (void 0 !== OB) return OB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module: BB
      } = BB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const IB = cB();
      BB instanceof WebAssembly.Module || (BB = new WebAssembly.Module(BB));
      return iB(new WebAssembly.Instance(BB, IB), BB)
    }
    async function aB(BB) {
      if (void 0 !== OB) return OB;
      void 0 !== BB && (Object.getPrototypeOf(BB) === Object.prototype ? ({
        module_or_path: BB
      } = BB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const IB = cB();
      ("string" === typeof BB || "function" === typeof Request && BB instanceof Request || "function" === typeof URL && BB instanceof URL) && (BB = fetch(BB));
      const {
        instance: ZB,
        module: TB
      } = await async function(BB, IB) {
        if ("function" === typeof Response && BB instanceof Response) {
          if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(BB, IB)
          } catch (ZB) {
            if (! function(BB) {
                switch (BB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(BB.type) || "application/wasm" === BB.headers.get("Content-Type")) throw ZB;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ZB)
          }
          const TB = await BB.arrayBuffer();
          return await WebAssembly.instantiate(TB, IB)
        } {
          const ZB = await WebAssembly.instantiate(BB, IB);
          return ZB instanceof WebAssembly.Instance ? {
            instance: ZB,
            module: BB
          } : ZB
        }
      }(await BB, IB);
      return iB(ZB, TB)
    }

    function HB() {
      OB = void 0, wB = void 0, zB = null, NB = null, qB = new Array(1024).fill(void 0), qB.push(void 0, null, !0, !1), yB = qB.length
    }
    var MB = ZB(3043),
      jB = ZB(6771);
    class PB extends Error {
      stage;
      constructor(BB, IB) {
        super((0, MB.G)(BB, IB), {
          cause: IB
        }), this.name = "BloxdReplayWasmError", this.stage = BB
      }
    }
    let RB = null,
      rB = null,
      mB = Promise.resolve(),
      XB = 0,
      LB = null,
      eB = null;

    function uB() {
      if (eB) return Promise.reject(eB);
      if (rB) return rB;
      const BB = XB,
        IB = mB,
        JB = (async () => {
          let JB;
          await IB, RB ??= (0, MB.J)(new ZB.U(ZB(61514)), (0, jB.e)("bloxd_wasm_replay"));
          try {
            JB = await RB
          } catch (oB) {
            throw RB = null, new PB((0, MB.N)(oB), oB)
          }
          if (BB !== XB) throw new PB("instantiate", new Error("unloaded while loading"));
          try {
            await aB({
              module_or_path: JB
            })
          } catch (oB) {
            throw HB(), new PB("instantiate", oB)
          }
          if (BB !== XB) throw HB(), new PB("instantiate", new Error("unloaded while loading"));
          return LB = kB(), TB
        })();
      return rB = JB, mB = JB.catch((() => {})), JB.catch((() => {
        rB === JB && (rB = null)
      })), JB
    }

    function fB() {
      eB || tB()
    }

    function lB() {
      return LB?.buffer.byteLength ?? 0
    }

    function AB(BB) {
      return eB || (eB = new PB("call", BB), tB()), eB
    }

    function tB() {
      XB++, HB(), rB = null, LB = null
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);