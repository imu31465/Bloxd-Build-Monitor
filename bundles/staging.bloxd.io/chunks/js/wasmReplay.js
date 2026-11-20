export const id = 63;
export const ids = [63];
export const modules = {
  60914: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_replay_bg.c2c598376af7eac87ea4.wasm"
  },
  6343: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(3473);
    const Sv = {
      bloxd_wasm: () => "242cfb746367816b85c0d450194bdff4c53a9ad8bf401630f6949cb63852d1be",
      bloxd_wasm_client: () => "d02ab3ff378e3cabdd07cd9c554ec471bb49ecb41d1bcfc8f9f48d000f552813",
      bloxd_wasm_workers: () => "8664088122d5b673ff7a8e8f0b71864091addbd11a22fd8877301ef2e1d7d7c6",
      bloxd_wasm_models: () => "0ce508e0c3797e4d2237f5b419263b9df4627372af441dcaec1b4b4938917dcb",
      bloxd_wasm_webgpu: () => "d02362ea4b01ac0b3094c90bd530e9d9541fd4d02dbb0cf37e62ce03b504586a",
      bloxd_wasm_webgl: () => "5587f4c12aefda662a798fa76f5ef5f0d26531308da330b663163a4a6a353686",
      bloxd_wasm_webgl1: () => "330ca93132b966b9f2d177baefcf1ec86106db4d42b6875043c867a4fbf8f714",
      bloxd_wasm_replay: () => "970290489bfdef049310fc4e3d6c024c9afee7381deeccf9925d9d2bf1ad0949",
      bloxd_wasm_recorder: () => "2118a197767ebdac164a9fab410a0150f76cd900eb0e711f4a60fc6e38ae5205",
      bloxd_wasm_anim: () => "fb2fc3b43abfd08ad961098c6784b1c03d7af35338bbd752b5df3af261972615",
      bloxd_wasm_textures: () => "ac6c8ff1da71e10b1ed9866e9a4eb70d166a36bb2f0e1c05cef1de7d9d6b6043",
      bloxd_wasm_shader_pack: () => "d571fee4d34b97756c8d2b36706fa9baf34990285d56aea5ea806d4682070476"
    };
    var ev = Pv(4451);

    function gv(vv) {
      const zv = Object.prototype.hasOwnProperty.call(Sv, vv) ? Sv[vv]() : void 0;
      if (void 0 !== zv) return {
        sha256: zv,
        onMismatch: ev.y
      };
      throw new hv.h(`${vv} has no release digest, so this build refuses it`)
    }
  },
  60907: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BloxdReplayWasmError: () => tv,
      loadReplayModule: () => Hv,
      markReplayTrapped: () => Bv,
      replayMemoryBytes: () => yv,
      unloadReplayModule: () => Mv
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      rhv: () => Sv,
      yev: () => Uv,
      PT: () => ev,
      default: () => Vv,
      initSync: () => Kv,
      hT: () => gv,
      Jhv: () => pv,
      khv: () => dv
    });
    class Sv {
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        nv.GJlY(vv, 0)
      }
      zSv(vv, zv, Pv, hv, Sv, ev) {
        nv.CPwJ(this.__wbg_ptr, vv, zv, Pv, hv, Sv, ev)
      }
      close() {
        nv.AXNZ(this.__wbg_ptr)
      }
      crop(vv, zv) {
        nv.cFHr(this.__wbg_ptr, vv, zv)
      }
      SSv(vv, zv) {
        nv.ZVuf(this.__wbg_ptr, vv, zv)
      }
      gSv() {
        return nv.NnjC(this.__wbg_ptr) >>> 0
      }
      eSv() {
        return nv.Tp3T(this.__wbg_ptr) >>> 0
      }
      pSv() {
        return nv.k8yu(this.__wbg_ptr) >>> 0
      }
      dSv() {
        return nv.vRUB(this.__wbg_ptr) >>> 0
      }
      hSv(vv, zv) {
        nv.Geq9(this.__wbg_ptr, vv, zv)
      }
      constructor() {
        const vv = nv.B1eu();
        return this.__wbg_ptr = vv, lv.register(this, this.__wbg_ptr, this), this
      }
      open() {
        nv.l3Jn(this.__wbg_ptr)
      }
      Hhv() {
        return nv.Wv5E(this.__wbg_ptr) >>> 0
      }
      pause() {
        nv.O9KM(this.__wbg_ptr)
      }
      play() {
        nv.QLQJ(this.__wbg_ptr)
      }
      save() {
        return nv.QWip(this.__wbg_ptr) >>> 0
      }
      NSv() {
        nv.Ueyx(this.__wbg_ptr)
      }
      seek(vv, zv) {
        nv.OrKZ(this.__wbg_ptr, vv, zv)
      }
      TSv(vv) {
        nv.DU4G(this.__wbg_ptr, vv)
      }
      PSv(vv, zv) {
        const Pv = function(vv, zv) {
            const Pv = zv(8 * vv.length, 8) >>> 0;
            return function() {
              null !== Wv && 0 !== Wv.byteLength || (Wv = new Float64Array(nv.memory.buffer));
              return Wv
            }().set(vv, Pv / 8), Ov = vv.length, Pv
          }(zv, nv.W41u),
          hv = Ov;
        nv.k5q4(this.__wbg_ptr, vv, Pv, hv)
      }
      vSv(vv, zv) {
        nv.IbYA(this.__wbg_ptr, vv, zv)
      }
      lSv(vv) {
        nv.JIUp(this.__wbg_ptr, vv)
      }
      stage(vv) {
        return nv.vT9J(this.__wbg_ptr, vv) >>> 0
      }
      step(vv, zv) {
        return nv.Rjuk(this.__wbg_ptr, vv, zv) >>> 0
      }
    }

    function ev(vv, zv) {
      const Pv = function(vv, zv, Pv) {
          if (void 0 === Pv) {
            const Pv = fv.encode(vv),
              hv = zv(Pv.length, 1) >>> 0;
            return sv().subarray(hv, hv + Pv.length).set(Pv), Ov = Pv.length, hv
          }
          let hv = vv.length,
            Sv = zv(hv, 1) >>> 0;
          const ev = sv();
          let gv = 0;
          for (; gv < hv; gv++) {
            const zv = vv.charCodeAt(gv);
            if (zv > 127) break;
            ev[Sv + gv] = zv
          }
          if (gv !== hv) {
            0 !== gv && (vv = vv.slice(gv)), Sv = Pv(Sv, hv, hv = gv + 3 * vv.length, 1) >>> 0;
            const zv = sv().subarray(Sv + gv, Sv + hv);
            gv += fv.encodeInto(vv, zv).written, Sv = Pv(Sv, hv, gv, 1) >>> 0
          }
          return Ov = gv, Sv
        }(vv, nv.W41u, nv.bRDX),
        hv = Ov,
        Sv = nv.Job5(Pv, hv, zv);
      if (Sv[1]) throw cv(Sv[0])
    }

    function gv() {
      nv.tCVf()
    }

    function pv() {
      return nv.EGr4() >>> 0
    }

    function dv() {
      return cv(nv.lSbH())
    }

    function Nv() {
      return {
        __proto__: null,
        ieLK: {
          __proto__: null,
          jsdf: function(vv, zv) {
            return Tv(Error(wv(vv, zv)))
          },
          Ln2H: function() {
            return Tv(nv.memory)
          },
          bDFX: function(vv, zv) {
            throw new Error(wv(vv, zv))
          },
          NFrP: function(vv, zv) {
            console.error(wv(vv, zv))
          },
          kCVa: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Sv.prototype[Symbol.dispose] = Sv.prototype.free);
    const lv = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((vv => nv?.__wbg_replaymodule_free(vv, 1)));

    function Tv(vv) {
      iv === Cv.length && Cv.push(Cv.length + 1);
      const zv = iv;
      return iv = Cv[zv], Cv[zv] = vv, zv
    }
    let Wv = null;

    function wv(vv, zv) {
      return function(vv, zv) {
        jv += zv, jv >= mv && (Gv = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Gv.decode(), jv = zv);
        return Gv.decode(sv().subarray(vv, vv + zv))
      }(vv >>> 0, zv)
    }
    let av = null;

    function sv() {
      return null !== av && 0 !== av.byteLength || (av = new Uint8Array(nv.memory.buffer)), av
    }
    let Cv = new Array(1024).fill(void 0);
    Cv.push(void 0, null, !0, !1);
    let iv = Cv.length;

    function cv(vv) {
      const zv = function(vv) {
        return Cv[vv]
      }(vv);
      return function(vv) {
        vv < 1028 || (Cv[vv] = iv, iv = vv)
      }(vv), zv
    }
    let Gv = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Gv.decode();
    const mv = 2146435072;
    let jv = 0;
    const fv = new TextEncoder;
    "encodeInto" in fv || (fv.encodeInto = function(vv, zv) {
      const Pv = fv.encode(vv);
      return zv.set(Pv), {
        read: vv.length,
        written: Pv.length
      }
    });
    let Fv, Yv, nv, Ov = 0;

    function Dv(vv, zv) {
      return Yv = vv, nv = vv.exports, Fv = zv, Wv = null, av = null, nv.NHUG(), nv
    }

    function Kv(vv) {
      if (void 0 !== nv) return nv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module: vv
      } = vv) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zv = Nv();
      vv instanceof WebAssembly.Module || (vv = new WebAssembly.Module(vv));
      return Dv(new WebAssembly.Instance(vv, zv), vv)
    }
    async function Vv(vv) {
      if (void 0 !== nv) return nv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module_or_path: vv
      } = vv) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zv = Nv();
      ("string" === typeof vv || "function" === typeof Request && vv instanceof Request || "function" === typeof URL && vv instanceof URL) && (vv = fetch(vv));
      const {
        instance: Pv,
        module: hv
      } = await async function(vv, zv) {
        if ("function" === typeof Response && vv instanceof Response) {
          if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(vv, zv)
          } catch (Pv) {
            if (! function(vv) {
                switch (vv) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(vv.type) || "application/wasm" === vv.headers.get("Content-Type")) throw Pv;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Pv)
          }
          const hv = await vv.arrayBuffer();
          return await WebAssembly.instantiate(hv, zv)
        } {
          const Pv = await WebAssembly.instantiate(vv, zv);
          return Pv instanceof WebAssembly.Instance ? {
            instance: Pv,
            module: vv
          } : Pv
        }
      }(await vv, zv);
      return Dv(Pv, hv)
    }

    function Uv() {
      nv = void 0, Yv = void 0, Wv = null, av = null, Cv = new Array(1024).fill(void 0), Cv.push(void 0, null, !0, !1), iv = Cv.length
    }
    var Rv = Pv(3473),
      xv = Pv(6343);
    class tv extends Error {
      stage;
      constructor(vv, zv) {
        super((0, Rv.D)(vv, zv), {
          cause: zv
        }), this.name = "BloxdReplayWasmError", this.stage = vv
      }
    }
    let qv = null,
      Iv = null,
      Qv = Promise.resolve(),
      Zv = 0,
      Av = null,
      Lv = null;

    function Hv() {
      if (Lv) return Promise.reject(Lv);
      if (Iv) return Iv;
      const vv = Zv,
        zv = Qv,
        Sv = (async () => {
          let Sv;
          await zv, qv ??= (0, Rv.F)(new Pv.U(Pv(60914)), (0, xv.c)("bloxd_wasm_replay"));
          try {
            Sv = await qv
          } catch (ev) {
            throw qv = null, new tv((0, Rv.M)(ev), ev)
          }
          if (vv !== Zv) throw new tv("instantiate", new Error("unloaded while loading"));
          try {
            await Vv({
              module_or_path: Sv
            })
          } catch (ev) {
            throw Uv(), new tv("instantiate", ev)
          }
          if (vv !== Zv) throw Uv(), new tv("instantiate", new Error("unloaded while loading"));
          return Av = dv(), hv
        })();
      return Iv = Sv, Qv = Sv.catch((() => {})), Sv.catch((() => {
        Iv === Sv && (Iv = null)
      })), Sv
    }

    function Mv() {
      Lv || Jv()
    }

    function yv() {
      return Av?.buffer.byteLength ?? 0
    }

    function Bv(vv) {
      return Lv || (Lv = new tv("call", vv), Jv()), Lv
    }

    function Jv() {
      Zv++, Uv(), Iv = null, Av = null
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);