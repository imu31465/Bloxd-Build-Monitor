export const id = 78;
export const ids = [78];
export const modules = {
  64827: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_replay_bg.860cd0e877c2f616376e.wasm"
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
  },
  64824: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdReplayWasmError: () => Rr,
      loadReplayModule: () => Vr,
      markReplayTrapped: () => cr,
      replayMemoryBytes: () => wr,
      unloadReplayModule: () => ir
    });
    var Zr = {};
    Qr.r(Zr), Qr.d(Zr, {
      Gjr: () => Wr,
      Efr: () => Pr,
      HE: () => ar,
      default: () => Xr,
      initSync: () => lr,
      ip: () => jr,
      Rjr: () => Ir,
      kjr: () => fr
    });
    class Wr {
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, pr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        vr.vkxj(rr, 0)
      }
      wjr(rr, Sr, Qr, Zr, Wr, ar) {
        vr.lvz0(this.__wbg_ptr, rr, Sr, Qr, Zr, Wr, ar)
      }
      close() {
        vr.VL0L(this.__wbg_ptr)
      }
      crop(rr, Sr) {
        vr.iyiL(this.__wbg_ptr, rr, Sr)
      }
      bjr(rr, Sr) {
        vr.DjWb(this.__wbg_ptr, rr, Sr)
      }
      Djr() {
        return vr.vJ3X(this.__wbg_ptr) >>> 0
      }
      Jjr() {
        return vr.oBrn(this.__wbg_ptr) >>> 0
      }
      djr() {
        return vr.GdHs(this.__wbg_ptr) >>> 0
      }
      ujr() {
        return vr.FoEU(this.__wbg_ptr) >>> 0
      }
      ojr(rr, Sr) {
        vr.V3qh(this.__wbg_ptr, rr, Sr)
      }
      constructor() {
        const rr = vr.QXcA();
        return this.__wbg_ptr = rr, pr.register(this, this.__wbg_ptr, this), this
      }
      open() {
        vr.kZzq(this.__wbg_ptr)
      }
      Xjr() {
        return vr.StfA(this.__wbg_ptr) >>> 0
      }
      pause() {
        vr.uGIA(this.__wbg_ptr)
      }
      play() {
        vr.fNWx(this.__wbg_ptr)
      }
      save() {
        return vr.RyCt(this.__wbg_ptr) >>> 0
      }
      rIr() {
        vr.Elf7(this.__wbg_ptr)
      }
      seek(rr, Sr) {
        vr.iEs5(this.__wbg_ptr, rr, Sr)
      }
      QIr(rr) {
        vr.aHui(this.__wbg_ptr, rr)
      }
      cjr(rr, Sr) {
        const Qr = function(rr, Sr) {
            const Qr = Sr(8 * rr.length, 8) >>> 0;
            return function() {
              null !== mr && 0 !== mr.byteLength || (mr = new Float64Array(vr.memory.buffer));
              return mr
            }().set(rr, Qr / 8), Or = rr.length, Qr
          }(Sr, vr.NziH),
          Zr = Or;
        vr.F9si(this.__wbg_ptr, rr, Qr, Zr)
      }
      ijr(rr, Sr) {
        vr.LSLu(this.__wbg_ptr, rr, Sr)
      }
      SIr(rr) {
        vr.w9Kl(this.__wbg_ptr, rr)
      }
      stage(rr) {
        return vr.sQWX(this.__wbg_ptr, rr) >>> 0
      }
      step(rr, Sr) {
        return vr.xVYn(this.__wbg_ptr, rr, Sr) >>> 0
      }
    }

    function ar(rr, Sr) {
      const Qr = function(rr, Sr, Qr) {
          if (void 0 === Qr) {
            const Qr = yr.encode(rr),
              Zr = Sr(Qr.length, 1) >>> 0;
            return tr().subarray(Zr, Zr + Qr.length).set(Qr), Or = Qr.length, Zr
          }
          let Zr = rr.length,
            Wr = Sr(Zr, 1) >>> 0;
          const ar = tr();
          let jr = 0;
          for (; jr < Zr; jr++) {
            const Sr = rr.charCodeAt(jr);
            if (Sr > 127) break;
            ar[Wr + jr] = Sr
          }
          if (jr !== Zr) {
            0 !== jr && (rr = rr.slice(jr)), Wr = Qr(Wr, Zr, Zr = jr + 3 * rr.length, 1) >>> 0;
            const Sr = tr().subarray(Wr + jr, Wr + Zr);
            jr += yr.encodeInto(rr, Sr).written, Wr = Qr(Wr, Zr, jr, 1) >>> 0
          }
          return Or = jr, Wr
        }(rr, vr.NziH, vr.AXWx),
        Zr = Or,
        Wr = vr.xgH7(Qr, Zr, Sr);
      if (Wr[1]) throw Yr(Wr[0])
    }

    function jr() {
      vr.ZAgD()
    }

    function Ir() {
      return vr.lGzk() >>> 0
    }

    function fr() {
      return Yr(vr.hysy())
    }

    function Er() {
      return {
        __proto__: null,
        oPxw: {
          __proto__: null,
          Snw8: function(rr, Sr) {
            return xr(Error(Nr(rr, Sr)))
          },
          kk0o: function() {
            return xr(vr.memory)
          },
          P1F0: function(rr, Sr) {
            throw new Error(Nr(rr, Sr))
          },
          MHQf: function(rr, Sr) {
            console.error(Nr(rr, Sr))
          },
          zTd5: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wr.prototype[Symbol.dispose] = Wr.prototype.free);
    const pr = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((rr => vr?.__wbg_replaymodule_free(rr, 1)));

    function xr(rr) {
      zr === hr.length && hr.push(hr.length + 1);
      const Sr = zr;
      return zr = hr[Sr], hr[Sr] = rr, Sr
    }
    let mr = null;

    function Nr(rr, Sr) {
      return function(rr, Sr) {
        Kr += Sr, Kr >= er && (nr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), nr.decode(), Kr = Sr);
        return nr.decode(tr().subarray(rr, rr + Sr))
      }(rr >>> 0, Sr)
    }
    let Ur = null;

    function tr() {
      return null !== Ur && 0 !== Ur.byteLength || (Ur = new Uint8Array(vr.memory.buffer)), Ur
    }
    let hr = new Array(1024).fill(void 0);
    hr.push(void 0, null, !0, !1);
    let zr = hr.length;

    function Yr(rr) {
      const Sr = function(rr) {
        return hr[rr]
      }(rr);
      return function(rr) {
        rr < 1028 || (hr[rr] = zr, zr = rr)
      }(rr), Sr
    }
    let nr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    nr.decode();
    const er = 2146435072;
    let Kr = 0;
    const yr = new TextEncoder;
    "encodeInto" in yr || (yr.encodeInto = function(rr, Sr) {
      const Qr = yr.encode(rr);
      return Sr.set(Qr), {
        read: rr.length,
        written: Qr.length
      }
    });
    let Br, Tr, vr, Or = 0;

    function Lr(rr, Sr) {
      return Tr = rr, vr = rr.exports, Br = Sr, mr = null, Ur = null, vr.ktA6(), vr
    }

    function lr(rr) {
      if (void 0 !== vr) return vr;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module: rr
      } = rr) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Sr = Er();
      rr instanceof WebAssembly.Module || (rr = new WebAssembly.Module(rr));
      return Lr(new WebAssembly.Instance(rr, Sr), rr)
    }
    async function Xr(rr) {
      if (void 0 !== vr) return vr;
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
      return Lr(Qr, Zr)
    }

    function Pr() {
      vr = void 0, Tr = void 0, mr = null, Ur = null, hr = new Array(1024).fill(void 0), hr.push(void 0, null, !0, !1), zr = hr.length
    }
    var Hr = Qr(2398),
      qr = Qr(7577);
    class Rr extends Error {
      stage;
      constructor(rr, Sr) {
        super((0, Hr.F)(rr, Sr), {
          cause: Sr
        }), this.name = "BloxdReplayWasmError", this.stage = rr
      }
    }
    let gr = null,
      Cr = null,
      Mr = Promise.resolve(),
      Gr = 0,
      kr = null,
      Ar = null;

    function Vr() {
      if (Ar) return Promise.reject(Ar);
      if (Cr) return Cr;
      const rr = Gr,
        Sr = Mr,
        Wr = (async () => {
          let Wr;
          await Sr, gr ??= (0, Hr.I)(new Qr.U(Qr(64827)), (0, qr.c)("bloxd_wasm_replay"));
          try {
            Wr = await gr
          } catch (ar) {
            throw gr = null, new Rr((0, Hr.M)(ar), ar)
          }
          if (rr !== Gr) throw new Rr("instantiate", new Error("unloaded while loading"));
          try {
            await Xr({
              module_or_path: Wr
            })
          } catch (ar) {
            throw Pr(), new Rr("instantiate", ar)
          }
          if (rr !== Gr) throw Pr(), new Rr("instantiate", new Error("unloaded while loading"));
          return kr = fr(), Zr
        })();
      return Cr = Wr, Mr = Wr.catch((() => {})), Wr.catch((() => {
        Cr === Wr && (Cr = null)
      })), Wr
    }

    function ir() {
      Ar || Fr()
    }

    function wr() {
      return kr?.buffer.byteLength ?? 0
    }

    function cr(rr) {
      return Ar || (Ar = new Rr("call", rr), Fr()), Ar
    }

    function Fr() {
      Gr++, Pr(), Cr = null, kr = null
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);