export const id = 78;
export const ids = [78];
export const modules = {
  64357: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/bloxd_wasm_replay_bg.547b5be7aba9dc782cfc.wasm"
  },
  7762: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(2457);
    const tR = {
      bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
      bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
      bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
      bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
      bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
      bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
      bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
      bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
      bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
      bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
      bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
      bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
    };
    var uR = GR(5554);

    function ZR(RR) {
      const JR = Object.prototype.hasOwnProperty.call(tR, RR) ? tR[RR]() : void 0;
      if (void 0 !== JR) return {
        sha256: JR,
        onMismatch: uR.E
      };
      throw new yR.g(`${RR} has no release digest, so this build refuses it`)
    }
  },
  64348: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      BloxdReplayWasmError: () => DR,
      loadReplayModule: () => zR,
      markReplayTrapped: () => dR,
      replayMemoryBytes: () => jR,
      unloadReplayModule: () => SR
    });
    var yR = {};
    GR.r(yR), GR.d(yR, {
      xZR: () => tR,
      GiR: () => OR,
      HK: () => uR,
      default: () => vR,
      initSync: () => bR,
      oK: () => ZR,
      gZR: () => qR,
      NZR: () => iR
    });
    class tR {
      __destroy_into_raw() {
        const RR = this.__wbg_ptr;
        return this.__wbg_ptr = 0, VR.unregister(this), RR
      }
      free() {
        const RR = this.__destroy_into_raw();
        lR.d11U(RR, 0)
      }
      PZR(RR, JR, GR, yR, tR, uR) {
        lR.df3w(this.__wbg_ptr, RR, JR, GR, yR, tR, uR)
      }
      close() {
        lR.A5dd(this.__wbg_ptr)
      }
      crop(RR, JR) {
        lR.iQJZ(this.__wbg_ptr, RR, JR)
      }
      zZR(RR, JR) {
        lR.W2K5(this.__wbg_ptr, RR, JR)
      }
      jZR() {
        return lR.QdSl(this.__wbg_ptr) >>> 0
      }
      SZR() {
        return lR.XTlY(this.__wbg_ptr) >>> 0
      }
      dZR() {
        return lR.RBb8(this.__wbg_ptr) >>> 0
      }
      EZR() {
        return lR.G7o6(this.__wbg_ptr) >>> 0
      }
      mZR(RR, JR) {
        lR.PyrX(this.__wbg_ptr, RR, JR)
      }
      constructor() {
        const RR = lR.FJIm();
        return this.__wbg_ptr = RR, VR.register(this, this.__wbg_ptr, this), this
      }
      open() {
        lR.MkdV(this.__wbg_ptr)
      }
      MZR() {
        return lR.X6Zm(this.__wbg_ptr) >>> 0
      }
      pause() {
        lR.WgJ1(this.__wbg_ptr)
      }
      play() {
        lR.HiHc(this.__wbg_ptr)
      }
      save() {
        return lR.kBKw(this.__wbg_ptr) >>> 0
      }
      YZR() {
        lR.KCa1(this.__wbg_ptr)
      }
      seek(RR, JR) {
        lR.wayX(this.__wbg_ptr, RR, JR)
      }
      QZR(RR) {
        lR.fxXN(this.__wbg_ptr, RR)
      }
      IZR(RR, JR) {
        const GR = function(RR, JR) {
            const GR = JR(8 * RR.length, 8) >>> 0;
            return function() {
              null !== wR && 0 !== wR.byteLength || (wR = new Float64Array(lR.memory.buffer));
              return wR
            }().set(RR, GR / 8), pR = RR.length, GR
          }(JR, lR.OYjn),
          yR = pR;
        lR.PAAb(this.__wbg_ptr, RR, GR, yR)
      }
      cZR(RR, JR) {
        lR.EO0H(this.__wbg_ptr, RR, JR)
      }
      kZR(RR) {
        lR.uNHK(this.__wbg_ptr, RR)
      }
      stage(RR) {
        return lR.ra9W(this.__wbg_ptr, RR) >>> 0
      }
      step(RR, JR) {
        return lR.pWAM(this.__wbg_ptr, RR, JR) >>> 0
      }
    }

    function uR(RR, JR) {
      const GR = function(RR, JR, GR) {
          if (void 0 === GR) {
            const GR = XR.encode(RR),
              yR = JR(GR.length, 1) >>> 0;
            return aR().subarray(yR, yR + GR.length).set(GR), pR = GR.length, yR
          }
          let yR = RR.length,
            tR = JR(yR, 1) >>> 0;
          const uR = aR();
          let ZR = 0;
          for (; ZR < yR; ZR++) {
            const JR = RR.charCodeAt(ZR);
            if (JR > 127) break;
            uR[tR + ZR] = JR
          }
          if (ZR !== yR) {
            0 !== ZR && (RR = RR.slice(ZR)), tR = GR(tR, yR, yR = ZR + 3 * RR.length, 1) >>> 0;
            const JR = aR().subarray(tR + ZR, tR + yR);
            ZR += XR.encodeInto(RR, JR).written, tR = GR(tR, yR, ZR, 1) >>> 0
          }
          return pR = ZR, tR
        }(RR, lR.OYjn, lR.q9Ov),
        yR = pR,
        tR = lR.wuWY(GR, yR, JR);
      if (tR[1]) throw UR(tR[0])
    }

    function ZR() {
      lR.nCoM()
    }

    function qR() {
      return lR.ooOE() >>> 0
    }

    function iR() {
      return UR(lR.Fv70())
    }

    function fR() {
      return {
        __proto__: null,
        ZZFq: {
          __proto__: null,
          AMzf: function(RR, JR) {
            return KR(Error(rR(RR, JR)))
          },
          kqIg: function() {
            return KR(lR.memory)
          },
          haMa: function(RR, JR) {
            throw new Error(rR(RR, JR))
          },
          Lo33: function(RR, JR) {
            console.error(rR(RR, JR))
          },
          GP1j: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (tR.prototype[Symbol.dispose] = tR.prototype.free);
    const VR = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((RR => lR?.__wbg_replaymodule_free(RR, 1)));

    function KR(RR) {
      nR === LR.length && LR.push(LR.length + 1);
      const JR = nR;
      return nR = LR[JR], LR[JR] = RR, JR
    }
    let wR = null;

    function rR(RR, JR) {
      return function(RR, JR) {
        CR += JR, CR >= AR && (WR = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), WR.decode(), CR = JR);
        return WR.decode(aR().subarray(RR, RR + JR))
      }(RR >>> 0, JR)
    }
    let eR = null;

    function aR() {
      return null !== eR && 0 !== eR.byteLength || (eR = new Uint8Array(lR.memory.buffer)), eR
    }
    let LR = new Array(1024).fill(void 0);
    LR.push(void 0, null, !0, !1);
    let nR = LR.length;

    function UR(RR) {
      const JR = function(RR) {
        return LR[RR]
      }(RR);
      return function(RR) {
        RR < 1028 || (LR[RR] = nR, nR = RR)
      }(RR), JR
    }
    let WR = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    WR.decode();
    const AR = 2146435072;
    let CR = 0;
    const XR = new TextEncoder;
    "encodeInto" in XR || (XR.encodeInto = function(RR, JR) {
      const GR = XR.encode(RR);
      return JR.set(GR), {
        read: RR.length,
        written: GR.length
      }
    });
    let MR, BR, lR, pR = 0;

    function gR(RR, JR) {
      return BR = RR, lR = RR.exports, MR = JR, wR = null, eR = null, lR.PM74(), lR
    }

    function bR(RR) {
      if (void 0 !== lR) return lR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module: RR
      } = RR) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const JR = fR();
      RR instanceof WebAssembly.Module || (RR = new WebAssembly.Module(RR));
      return gR(new WebAssembly.Instance(RR, JR), RR)
    }
    async function vR(RR) {
      if (void 0 !== lR) return lR;
      void 0 !== RR && (Object.getPrototypeOf(RR) === Object.prototype ? ({
        module_or_path: RR
      } = RR) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const JR = fR();
      ("string" === typeof RR || "function" === typeof Request && RR instanceof Request || "function" === typeof URL && RR instanceof URL) && (RR = fetch(RR));
      const {
        instance: GR,
        module: yR
      } = await async function(RR, JR) {
        if ("function" === typeof Response && RR instanceof Response) {
          if (!RR.ok) throw new Error(`failed to fetch Wasm: ${RR.status} ${RR.statusText} fetching '${RR.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(RR, JR)
          } catch (GR) {
            if (! function(RR) {
                switch (RR) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(RR.type) || "application/wasm" === RR.headers.get("Content-Type")) throw GR;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", GR)
          }
          const yR = await RR.arrayBuffer();
          return await WebAssembly.instantiate(yR, JR)
        } {
          const GR = await WebAssembly.instantiate(RR, JR);
          return GR instanceof WebAssembly.Instance ? {
            instance: GR,
            module: RR
          } : GR
        }
      }(await RR, JR);
      return gR(GR, yR)
    }

    function OR() {
      lR = void 0, BR = void 0, wR = null, eR = null, LR = new Array(1024).fill(void 0), LR.push(void 0, null, !0, !1), nR = LR.length
    }
    var xR = GR(2457),
      NR = GR(7762);
    class DR extends Error {
      stage;
      constructor(RR, JR) {
        super((0, xR.z)(RR, JR), {
          cause: JR
        }), this.name = "BloxdReplayWasmError", this.stage = RR
      }
    }
    let HR = null,
      oR = null,
      cR = Promise.resolve(),
      PR = 0,
      IR = null,
      mR = null;

    function zR() {
      if (mR) return Promise.reject(mR);
      if (oR) return oR;
      const RR = PR,
        JR = cR,
        tR = (async () => {
          let tR;
          await JR, HR ??= (0, xR.A)(new GR.U(GR(64357)), (0, NR.c)("bloxd_wasm_replay"));
          try {
            tR = await HR
          } catch (uR) {
            throw HR = null, new DR((0, xR.E)(uR), uR)
          }
          if (RR !== PR) throw new DR("instantiate", new Error("unloaded while loading"));
          try {
            await vR({
              module_or_path: tR
            })
          } catch (uR) {
            throw OR(), new DR("instantiate", uR)
          }
          if (RR !== PR) throw OR(), new DR("instantiate", new Error("unloaded while loading"));
          return IR = iR(), yR
        })();
      return oR = tR, cR = tR.catch((() => {})), tR.catch((() => {
        oR === tR && (oR = null)
      })), tR
    }

    function SR() {
      mR || ER()
    }

    function jR() {
      return IR?.buffer.byteLength ?? 0
    }

    function dR(RR) {
      return mR || (mR = new DR("call", RR), ER()), mR
    }

    function ER() {
      PR++, OR(), oR = null, IR = null
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);