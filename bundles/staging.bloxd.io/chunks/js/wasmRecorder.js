export const id = 77;
export const ids = [77];
export const modules = {
  64815: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_recorder_bg.f5359b830e339e18ba6d.wasm"
  },
  64808: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdRecorderWasmError: () => Rr,
      RECORDER_MODULE_ID: () => qr,
      loadRecorderModule: () => Mr,
      markRecorderTrapped: () => kr,
      prefetchRecorderModule: () => Gr,
      recorderMemoryBytes: () => Vr,
      unloadRecorderModule: () => Ar
    });
    var Zr = {};
    Qr.r(Zr), Qr.d(Zr, {
      Cjr: () => Wr,
      Efr: () => Xr,
      HE: () => ar,
      default: () => lr,
      initSync: () => Lr,
      ip: () => jr,
      Rjr: () => Ir,
      Ojr: () => fr
    });
    class Wr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        Tr.WUYS(rr, 0)
      }
      busy() {
        return 0 !== Tr.kbZ0(this.__wbg_ptr)
      }
      command(rr, Sr) {
        return 0 !== Tr.F4bQ(this.__wbg_ptr, rr, Sr)
      }
      Ljr(rr) {
        return Tr.WIJm(this.__wbg_ptr, rr) >>> 0
      }
      vjr() {
        Tr.WF2N(this.__wbg_ptr)
      }
      Tjr() {
        return Tr.ABz1(this.__wbg_ptr) >>> 0
      }
      yjr() {
        return Tr.Uonh(this.__wbg_ptr)
      }
      Pjr() {
        return Tr.g0p0(this.__wbg_ptr) >>> 0
      }
      Hjr() {
        return Tr.PKxT(this.__wbg_ptr) >>> 0
      }
      feed(rr) {
        return Tr.y2oM(this.__wbg_ptr, rr) >>> 0
      }
      constructor() {
        const rr = Tr.C8Z9();
        return this.__wbg_ptr = rr, pr.register(this, this.__wbg_ptr, this), this
      }
      Xjr() {
        return Tr.n4dt(this.__wbg_ptr) >>> 0
      }
      pfr() {
        return Tr.tgn8(this.__wbg_ptr) >>> 0
      }
      Kjr(rr, Sr, Qr) {
        return 0 !== Tr.vfZv(this.__wbg_ptr, rr, Sr, Qr)
      }
      stage(rr) {
        return Tr.Bnzg(this.__wbg_ptr, rr) >>> 0
      }
      step() {
        return Tr.Y27G(this.__wbg_ptr) >>> 0
      }
    }

    function ar(rr, Sr) {
      const Qr = function(rr, Sr, Qr) {
          if (void 0 === Qr) {
            const Qr = Kr.encode(rr),
              Zr = Sr(Qr.length, 1) >>> 0;
            return Ur().subarray(Zr, Zr + Qr.length).set(Qr), vr = Qr.length, Zr
          }
          let Zr = rr.length,
            Wr = Sr(Zr, 1) >>> 0;
          const ar = Ur();
          let jr = 0;
          for (; jr < Zr; jr++) {
            const Sr = rr.charCodeAt(jr);
            if (Sr > 127) break;
            ar[Wr + jr] = Sr
          }
          if (jr !== Zr) {
            0 !== jr && (rr = rr.slice(jr)), Wr = Qr(Wr, Zr, Zr = jr + 3 * rr.length, 1) >>> 0;
            const Sr = Ur().subarray(Wr + jr, Wr + Zr);
            jr += Kr.encodeInto(rr, Sr).written, Wr = Qr(Wr, Zr, jr, 1) >>> 0
          }
          return vr = jr, Wr
        }(rr, Tr.I9Tm, Tr.cBEG),
        Zr = vr,
        Wr = Tr.IheL(Qr, Zr, Sr);
      if (Wr[1]) throw zr(Wr[0])
    }

    function jr() {
      Tr.hYWI()
    }

    function Ir() {
      return Tr.qGvy() >>> 0
    }

    function fr() {
      return zr(Tr.l8cP())
    }

    function Er() {
      return {
        __proto__: null,
        cKxT: {
          __proto__: null,
          ZmCF: function(rr, Sr) {
            return xr(Error(mr(rr, Sr)))
          },
          ORnr: function() {
            return xr(Tr.memory)
          },
          g1KC: function(rr, Sr) {
            throw new Error(mr(rr, Sr))
          },
          PEwc: function(rr, Sr) {
            console.error(mr(rr, Sr))
          },
          KTum: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wr.prototype[Symbol.dispose] = Wr.prototype.free);
    const pr = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((rr => Tr?.__wbg_recordermodule_free(rr, 1)));

    function xr(rr) {
      hr === tr.length && tr.push(tr.length + 1);
      const Sr = hr;
      return hr = tr[Sr], tr[Sr] = rr, Sr
    }

    function mr(rr, Sr) {
      return function(rr, Sr) {
        er += Sr, er >= nr && (Yr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Yr.decode(), er = Sr);
        return Yr.decode(Ur().subarray(rr, rr + Sr))
      }(rr >>> 0, Sr)
    }
    let Nr = null;

    function Ur() {
      return null !== Nr && 0 !== Nr.byteLength || (Nr = new Uint8Array(Tr.memory.buffer)), Nr
    }
    let tr = new Array(1024).fill(void 0);
    tr.push(void 0, null, !0, !1);
    let hr = tr.length;

    function zr(rr) {
      const Sr = function(rr) {
        return tr[rr]
      }(rr);
      return function(rr) {
        rr < 1028 || (tr[rr] = hr, hr = rr)
      }(rr), Sr
    }
    let Yr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Yr.decode();
    const nr = 2146435072;
    let er = 0;
    const Kr = new TextEncoder;
    "encodeInto" in Kr || (Kr.encodeInto = function(rr, Sr) {
      const Qr = Kr.encode(rr);
      return Sr.set(Qr), {
        read: rr.length,
        written: Qr.length
      }
    });
    let yr, Br, Tr, vr = 0;

    function Or(rr, Sr) {
      return Br = rr, Tr = rr.exports, yr = Sr, Nr = null, Tr.TpM8(), Tr
    }

    function Lr(rr) {
      if (void 0 !== Tr) return Tr;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module: rr
      } = rr) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Sr = Er();
      rr instanceof WebAssembly.Module || (rr = new WebAssembly.Module(rr));
      return Or(new WebAssembly.Instance(rr, Sr), rr)
    }
    async function lr(rr) {
      if (void 0 !== Tr) return Tr;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module_or_path: rr
      } = rr) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Sr = Er();
      ("string" === typeof rr || "function" === typeof Request && rr instanceof Request || "function" === typeof URL && rr instanceof URL) && (rr = fetch(rr));
      const {
        instance: Qr,
        module: Zr
      } = await async function(rr, Sr) {
        if ("function" === typeof Response && rr instanceof Response) {
          if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(rr, Sr)
          } catch (Qr) {
            if (! function(rr) {
                switch (rr) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(rr.type) || "application/wasm" === rr.headers.get("Content-Type")) throw Qr;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Qr)
          }
          const Zr = await rr.arrayBuffer();
          return await WebAssembly.instantiate(Zr, Sr)
        } {
          const Qr = await WebAssembly.instantiate(rr, Sr);
          return Qr instanceof WebAssembly.Instance ? {
            instance: Qr,
            module: rr
          } : Qr
        }
      }(await rr, Sr);
      return Or(Qr, Zr)
    }

    function Xr() {
      Tr = void 0, Br = void 0, Nr = null, tr = new Array(1024).fill(void 0), tr.push(void 0, null, !0, !1), hr = tr.length
    }
    var Pr = Qr(2398),
      Hr = Qr(7577);
    const qr = 2;
    class Rr extends Error {
      stage;
      constructor(rr, Sr) {
        super((0, Pr.F)(rr, Sr), {
          cause: Sr
        }), this.name = "BloxdRecorderWasmError", this.stage = rr
      }
    }
    let gr = null;
    const Cr = function(rr) {
      let Sr = null,
        Qr = null,
        Zr = null,
        Wr = null;
      const ar = async () => {
        let Qr = null;
        try {
          return Qr = Sr ??= (0, Pr.I)(rr.url(), (0, Hr.c)(rr.name)), await Qr
        } catch (Zr) {
          throw Sr === Qr && (Sr = null), rr.error((0, Pr.M)(Zr), Zr)
        }
      };
      return {
        load: () => {
          if (Wr) return Promise.reject(Wr);
          if (Qr) return Qr;
          const Sr = (async () => {
            const Sr = await ar();
            try {
              await rr.init(Sr)
            } catch (Qr) {
              throw rr.error("instantiate", Qr)
            }
            return rr.bindings
          })();
          Qr = Sr, Zr = Sr;
          const jr = () => {
            Zr === Sr && (Zr = null)
          };
          return Sr.then(jr, (() => {
            jr(), Qr === Sr && (Qr = null)
          })), Sr
        },
        prefetch: async () => {
          Wr || Qr || await ar()
        },
        markTrapped: Sr => (Wr ??= rr.error("call", Sr), Wr),
        unload: () => {
          Wr || !rr.reset || Zr || (rr.reset(), Qr = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Qr.U(Qr(64815)),
      init: async rr => {
        await lr({
          module_or_path: rr
        }), gr = fr()
      },
      bindings: Zr,
      error: (rr, Sr) => new Rr(rr, Sr),
      reset: () => {
        Xr(), gr = null
      }
    });

    function Mr() {
      return Cr.load()
    }

    function Gr() {
      return Cr.prefetch()
    }

    function kr(rr) {
      return Cr.markTrapped(rr)
    }

    function Ar() {
      Cr.unload()
    }

    function Vr() {
      return gr?.buffer.byteLength ?? 0
    }
  },
  7577: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(2398);
    const Wr = {
      bloxd_wasm: () => "0c8b86ea7f87e28f201c328dade5c6244d58a98edf5279fe5c0ea9b57062f385",
      bloxd_wasm_client: () => "299c35eb71d5d037788ea25f6b7287e40485e2a6ed22851efd5823593ae5be1b",
      bloxd_wasm_workers: () => "eaeeb1e1d8f554dcf56047201f83b3954f1d231f54df5846dca6de7c92e59bde",
      bloxd_wasm_models: () => "dc6d52b18d6afa3461a33750f7f1f0c757dbae6ea30bca3991affab56fad42de",
      bloxd_wasm_webgpu: () => "4397e4e2e7e494aef2a757d6873b432cca5ceac83c5a3e54dd330b4ece9ba81a",
      bloxd_wasm_webgl: () => "e3e0bf0da073da5cd2c55227a812527d1d5b4fd38f91e8c71b70364278ad47cf",
      bloxd_wasm_webgl1: () => "6b69ab072c5f9793e3fee3b1fa30c246fb689a2400aefd7f486fe41358e364e5",
      bloxd_wasm_replay: () => "f884251e5cfbdf122fa0e4c2746c9cc8bb3465ab2dcf3e9877f29ba5868851b0",
      bloxd_wasm_recorder: () => "92aabaf952eabf5eb693775f1095c77a6582e07a32896291ede0cd044a026b22",
      bloxd_wasm_anim: () => "74e18404f7ee650a703373595c2a2a131482e1a0dcb950788bac36e01714fec0",
      bloxd_wasm_textures: () => "4752f813d0338c3727c1127168df7e6c13b50988f32409a906ecc533947797ed",
      bloxd_wasm_shader_pack: () => "bc15fb00e7a581fb79301bdbfc659bdbc7ccbe7b0e189b588edf35cbec796fbe"
    };
    var ar = Qr(5498);

    function jr(rr) {
      const Sr = Object.prototype.hasOwnProperty.call(Wr, rr) ? Wr[rr]() : void 0;
      if (void 0 !== Sr) return {
        sha256: Sr,
        onMismatch: ar.F
      };
      throw new Zr.g(`${rr} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);