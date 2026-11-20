export const id = 62;
export const ids = [62];
export const modules = {
  60854: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/bloxd_wasm_replay_bg.d28844f7e5abb302112a.wasm"
  },
  6297: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(3377);
    const pU = {
      bloxd_wasm: () => "9aea991b9dfc231682f5590d3cc7b71fdc8d10d57b6fc256a691170448cb241e",
      bloxd_wasm_client: () => "802e9a6883f55b00b2e9f994d468ef47c157db779d67da12a28169a4064f9ba2",
      bloxd_wasm_workers: () => "6e68db7fd51b5ae0bb150a4c2fcdf448b467f8cbd8e24efcf974a9654674f1d6",
      bloxd_wasm_models: () => "f3c8f0349e4b7cd2fe62824f818b019cb1ff9fda7d99058af5539dbe1c36e2ff",
      bloxd_wasm_webgpu: () => "7b8aba519ce147883d63480e46db11f2a6dd62b2bdebd6ff07895ba08f395e69",
      bloxd_wasm_webgl: () => "a107c8272b9d653c63376eb1e9164df07a85032e3f7cbbd1d972097394cfca11",
      bloxd_wasm_webgl1: () => "2c5aabca21f20977da3990bb0cf77633b2f229a640ab72f5a52f39d28d9e0fd9",
      bloxd_wasm_replay: () => "803e2c90d202bb5830af931fbeaac2469dcc5032d591607636dd72eecf9c8910",
      bloxd_wasm_recorder: () => "edcf2c59dbceafb4c90033bd8006f0358827a3de806838c1aa9aa5da84f115b3",
      bloxd_wasm_anim: () => "7a1e82ad213a41556d7866bfc1df7fce0247390479775e811f0b8f916b979482",
      bloxd_wasm_textures: () => "bc7a7de98d207f079e8f358dc014dee940cff8bd63182b40ac7fd19938da92d8",
      bloxd_wasm_shader_pack: () => "1e25de668a456adfdd95befe66a4ef213a16bedd08af3aac14531a1b656da9d3"
    };
    var EU = gU(4352);

    function PU(UU) {
      const RU = Object.prototype.hasOwnProperty.call(pU, UU) ? pU[UU]() : void 0;
      if (void 0 !== RU) return {
        sha256: RU,
        onMismatch: EU.E
      };
      throw new tU.j(`${UU} has no release digest, so this build refuses it`)
    }
  },
  60845: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      BloxdReplayWasmError: () => rU,
      loadReplayModule: () => yU,
      markReplayTrapped: () => iU,
      replayMemoryBytes: () => FU,
      unloadReplayModule: () => kU
    });
    var tU = {};
    gU.r(tU), gU.d(tU, {
      wpU: () => pU,
      jPU: () => YU,
      Nc: () => EU,
      default: () => aU,
      initSync: () => ZU,
      lc: () => PU,
      xpU: () => TU,
      npU: () => qU
    });
    class pU {
      __destroy_into_raw() {
        const UU = this.__wbg_ptr;
        return this.__wbg_ptr = 0, cU.unregister(this), UU
      }
      free() {
        const UU = this.__destroy_into_raw();
        nU.jHz0(UU, 0)
      }
      apU(UU, RU, gU, tU, pU, EU) {
        nU.DIlM(this.__wbg_ptr, UU, RU, gU, tU, pU, EU)
      }
      close() {
        nU.mpKX(this.__wbg_ptr)
      }
      crop(UU, RU) {
        nU.D6YE(this.__wbg_ptr, UU, RU)
      }
      VpU(UU, RU) {
        nU.aQKE(this.__wbg_ptr, UU, RU)
      }
      XpU() {
        return nU.cnco(this.__wbg_ptr) >>> 0
      }
      rpU() {
        return nU.nJWQ(this.__wbg_ptr) >>> 0
      }
      vpU() {
        return nU.Ek0t(this.__wbg_ptr) >>> 0
      }
      HpU() {
        return nU.ug67(this.__wbg_ptr) >>> 0
      }
      BpU(UU, RU) {
        nU.yNlI(this.__wbg_ptr, UU, RU)
      }
      constructor() {
        const UU = nU.tNB9();
        return this.__wbg_ptr = UU, cU.register(this, this.__wbg_ptr, this), this
      }
      open() {
        nU.vL1z(this.__wbg_ptr)
      }
      QpU() {
        return nU.gbUH(this.__wbg_ptr) >>> 0
      }
      pause() {
        nU.r1vV(this.__wbg_ptr)
      }
      play() {
        nU.HX8V(this.__wbg_ptr)
      }
      save() {
        return nU.BdV5(this.__wbg_ptr) >>> 0
      }
      SpU() {
        nU.WCuG(this.__wbg_ptr)
      }
      seek(UU, RU) {
        nU.WVIn(this.__wbg_ptr, UU, RU)
      }
      ypU(UU) {
        nU.yUca(this.__wbg_ptr, UU)
      }
      YpU(UU, RU) {
        const gU = function(UU, RU) {
            const gU = RU(8 * UU.length, 8) >>> 0;
            return function() {
              null !== jU && 0 !== jU.byteLength || (jU = new Float64Array(nU.memory.buffer));
              return jU
            }().set(UU, gU / 8), bU = UU.length, gU
          }(RU, nU.Ejpi),
          tU = bU;
        nU.Dv50(this.__wbg_ptr, UU, gU, tU)
      }
      ZpU(UU, RU) {
        nU.xkqg(this.__wbg_ptr, UU, RU)
      }
      spU(UU) {
        nU.HXxG(this.__wbg_ptr, UU)
      }
      stage(UU) {
        return nU.GU1b(this.__wbg_ptr, UU) >>> 0
      }
      step(UU, RU) {
        return nU.dMGp(this.__wbg_ptr, UU, RU) >>> 0
      }
    }

    function EU(UU, RU) {
      const gU = function(UU, RU, gU) {
          if (void 0 === gU) {
            const gU = IU.encode(UU),
              tU = RU(gU.length, 1) >>> 0;
            return hU().subarray(tU, tU + gU.length).set(gU), bU = gU.length, tU
          }
          let tU = UU.length,
            pU = RU(tU, 1) >>> 0;
          const EU = hU();
          let PU = 0;
          for (; PU < tU; PU++) {
            const RU = UU.charCodeAt(PU);
            if (RU > 127) break;
            EU[pU + PU] = RU
          }
          if (PU !== tU) {
            0 !== PU && (UU = UU.slice(PU)), pU = gU(pU, tU, tU = PU + 3 * UU.length, 1) >>> 0;
            const RU = hU().subarray(pU + PU, pU + tU);
            PU += IU.encodeInto(UU, RU).written, pU = gU(pU, tU, PU, 1) >>> 0
          }
          return bU = PU, pU
        }(UU, nU.Ejpi, nU.VVY6),
        tU = bU,
        pU = nU.FPXa(gU, tU, RU);
      if (pU[1]) throw WU(pU[0])
    }

    function PU() {
      nU.BYtD()
    }

    function TU() {
      return nU.fVsS() >>> 0
    }

    function qU() {
      return WU(nU.Dt0B())
    }

    function KU() {
      return {
        __proto__: null,
        Dn75: {
          __proto__: null,
          mltr: function(UU, RU) {
            return GU(Error(uU(UU, RU)))
          },
          BfCm: function() {
            return GU(nU.memory)
          },
          ugZW: function(UU, RU) {
            throw new Error(uU(UU, RU))
          },
          erwU: function(UU, RU) {
            console.error(uU(UU, RU))
          },
          HyuE: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (pU.prototype[Symbol.dispose] = pU.prototype.free);
    const cU = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((UU => nU?.__wbg_replaymodule_free(UU, 1)));

    function GU(UU) {
      eU === QU.length && QU.push(QU.length + 1);
      const RU = eU;
      return eU = QU[RU], QU[RU] = UU, RU
    }
    let jU = null;

    function uU(UU, RU) {
      return function(UU, RU) {
        mU += RU, mU >= xU && (fU = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fU.decode(), mU = RU);
        return fU.decode(hU().subarray(UU, UU + RU))
      }(UU >>> 0, RU)
    }
    let CU = null;

    function hU() {
      return null !== CU && 0 !== CU.byteLength || (CU = new Uint8Array(nU.memory.buffer)), CU
    }
    let QU = new Array(1024).fill(void 0);
    QU.push(void 0, null, !0, !1);
    let eU = QU.length;

    function WU(UU) {
      const RU = function(UU) {
        return QU[UU]
      }(UU);
      return function(UU) {
        UU < 1028 || (QU[UU] = eU, eU = UU)
      }(UU), RU
    }
    let fU = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fU.decode();
    const xU = 2146435072;
    let mU = 0;
    const IU = new TextEncoder;
    "encodeInto" in IU || (IU.encodeInto = function(UU, RU) {
      const gU = IU.encode(UU);
      return RU.set(gU), {
        read: UU.length,
        written: gU.length
      }
    });
    let JU, wU, nU, bU = 0;

    function oU(UU, RU) {
      return wU = UU, nU = UU.exports, JU = RU, jU = null, CU = null, nU.i5MY(), nU
    }

    function ZU(UU) {
      if (void 0 !== nU) return nU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module: UU
      } = UU) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const RU = KU();
      UU instanceof WebAssembly.Module || (UU = new WebAssembly.Module(UU));
      return oU(new WebAssembly.Instance(UU, RU), UU)
    }
    async function aU(UU) {
      if (void 0 !== nU) return nU;
      void 0 !== UU && (Object.getPrototypeOf(UU) === Object.prototype ? ({
        module_or_path: UU
      } = UU) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const RU = KU();
      ("string" === typeof UU || "function" === typeof Request && UU instanceof Request || "function" === typeof URL && UU instanceof URL) && (UU = fetch(UU));
      const {
        instance: gU,
        module: tU
      } = await async function(UU, RU) {
        if ("function" === typeof Response && UU instanceof Response) {
          if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(UU, RU)
          } catch (gU) {
            if (! function(UU) {
                switch (UU) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(UU.type) || "application/wasm" === UU.headers.get("Content-Type")) throw gU;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gU)
          }
          const tU = await UU.arrayBuffer();
          return await WebAssembly.instantiate(tU, RU)
        } {
          const gU = await WebAssembly.instantiate(UU, RU);
          return gU instanceof WebAssembly.Instance ? {
            instance: gU,
            module: UU
          } : gU
        }
      }(await UU, RU);
      return oU(gU, tU)
    }

    function YU() {
      nU = void 0, wU = void 0, jU = null, CU = null, QU = new Array(1024).fill(void 0), QU.push(void 0, null, !0, !1), eU = QU.length
    }
    var BU = gU(3377),
      VU = gU(6297);
    class rU extends Error {
      stage;
      constructor(UU, RU) {
        super((0, BU.z)(UU, RU), {
          cause: RU
        }), this.name = "BloxdReplayWasmError", this.stage = UU
      }
    }
    let XU = null,
      vU = null,
      dU = Promise.resolve(),
      HU = 0,
      SU = null,
      sU = null;

    function yU() {
      if (sU) return Promise.reject(sU);
      if (vU) return vU;
      const UU = HU,
        RU = dU,
        pU = (async () => {
          let pU;
          await RU, XU ??= (0, BU.D)(new gU.U(gU(60854)), (0, VU.b)("bloxd_wasm_replay"));
          try {
            pU = await XU
          } catch (EU) {
            throw XU = null, new rU((0, BU.K)(EU), EU)
          }
          if (UU !== HU) throw new rU("instantiate", new Error("unloaded while loading"));
          try {
            await aU({
              module_or_path: pU
            })
          } catch (EU) {
            throw YU(), new rU("instantiate", EU)
          }
          if (UU !== HU) throw YU(), new rU("instantiate", new Error("unloaded while loading"));
          return SU = qU(), tU
        })();
      return vU = pU, dU = pU.catch((() => {})), pU.catch((() => {
        vU === pU && (vU = null)
      })), pU
    }

    function kU() {
      sU || AU()
    }

    function FU() {
      return SU?.buffer.byteLength ?? 0
    }

    function iU(UU) {
      return sU || (sU = new rU("call", UU), AU()), sU
    }

    function AU() {
      HU++, YU(), vU = null, SU = null
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);