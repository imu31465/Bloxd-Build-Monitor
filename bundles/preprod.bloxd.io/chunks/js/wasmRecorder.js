export const id = 57;
export const ids = [57];
export const modules = {
  60023: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_recorder_bg.eb5a37789a3bf93a36c2.wasm"
  },
  60021: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdRecorderWasmError: () => uy,
      RECORDER_MODULE_ID: () => ny,
      loadRecorderModule: () => ab,
      markRecorderTrapped: () => py,
      prefetchRecorderModule: () => Fy,
      recorderMemoryBytes: () => Qy,
      unloadRecorderModule: () => Ly
    });
    var Uy = {};
    Wy.r(Uy), Wy.d(Uy, {
      pKy: () => hy,
      uqy: () => My,
      Sy: () => fy,
      default: () => ib,
      initSync: () => vb,
      Ey: () => Zy,
      aey: () => cb,
      MKy: () => Py
    });
    class hy {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, By.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Gy.UgvP(yb, 0)
      }
      busy() {
        return 0 !== Gy.y1FX(this.__wbg_ptr)
      }
      command(yb, bb) {
        return 0 !== Gy.YC8j(this.__wbg_ptr, yb, bb)
      }
      YKy(yb) {
        return Gy.Jjp6(this.__wbg_ptr, yb) >>> 0
      }
      iey() {
        Gy.o35k(this.__wbg_ptr)
      }
      vey() {
        return Gy.pSWH(this.__wbg_ptr) >>> 0
      }
      RKy() {
        return Gy.Rs7Z(this.__wbg_ptr)
      }
      uKy() {
        return Gy.zhm8(this.__wbg_ptr) >>> 0
      }
      rey() {
        return Gy.mQUC(this.__wbg_ptr) >>> 0
      }
      feed(yb) {
        return Gy.tuTm(this.__wbg_ptr, yb) >>> 0
      }
      constructor() {
        const yb = Gy.XMAg();
        return this.__wbg_ptr = yb, By.register(this, this.__wbg_ptr, this), this
      }
      nKy() {
        return Gy.aKtf(this.__wbg_ptr) >>> 0
      }
      rsy() {
        return Gy.ZMLS(this.__wbg_ptr) >>> 0
      }
      OKy(yb, bb, Wy) {
        return 0 !== Gy.Ifyi(this.__wbg_ptr, yb, bb, Wy)
      }
      stage(yb) {
        return Gy.UxXv(this.__wbg_ptr, yb) >>> 0
      }
      step() {
        return Gy.zM0s(this.__wbg_ptr) >>> 0
      }
    }

    function fy(yb, bb) {
      const Wy = function(yb, bb, Wy) {
          if (void 0 === Wy) {
            const Wy = Vy.encode(yb),
              Uy = bb(Wy.length, 1) >>> 0;
            return sy().subarray(Uy, Uy + Wy.length).set(Wy), Oy = Wy.length, Uy
          }
          let Uy = yb.length,
            hy = bb(Uy, 1) >>> 0;
          const fy = sy();
          let Zy = 0;
          for (; Zy < Uy; Zy++) {
            const bb = yb.charCodeAt(Zy);
            if (bb > 127) break;
            fy[hy + Zy] = bb
          }
          if (Zy !== Uy) {
            0 !== Zy && (yb = yb.slice(Zy)), hy = Wy(hy, Uy, Uy = Zy + 3 * yb.length, 1) >>> 0;
            const bb = sy().subarray(hy + Zy, hy + Uy);
            Zy += Vy.encodeInto(yb, bb).written, hy = Wy(hy, Uy, Zy, 1) >>> 0
          }
          return Oy = Zy, hy
        }(yb, Gy.hG5r, Gy.JrvR),
        Uy = Oy,
        hy = Gy.t4xQ(Wy, Uy, bb);
      if (hy[1]) throw ly(hy[0])
    }

    function Zy() {
      Gy.ghn7()
    }

    function cb() {
      return Gy.wMX7() >>> 0
    }

    function Py() {
      return ly(Gy.ZTpV())
    }

    function oy() {
      return {
        __proto__: null,
        qNJh: {
          __proto__: null,
          NU4V: function(yb, bb) {
            return Ky(Error(ey(yb, bb)))
          },
          NhdL: function() {
            return Ky(Gy.memory)
          },
          I4E9: function(yb, bb) {
            throw new Error(ey(yb, bb))
          },
          oUPF: function(yb, bb) {
            console.error(ey(yb, bb))
          },
          kB5m: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (hy.prototype[Symbol.dispose] = hy.prototype.free);
    const By = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((yb => Gy?.__wbg_recordermodule_free(yb, 1)));

    function Ky(yb) {
      Ey === Sy.length && Sy.push(Sy.length + 1);
      const bb = Ey;
      return Ey = Sy[bb], Sy[bb] = yb, bb
    }

    function ey(yb, bb) {
      return function(yb, bb) {
        Ty += bb, Ty >= Cy && (mb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mb.decode(), Ty = bb);
        return mb.decode(sy().subarray(yb, yb + bb))
      }(yb >>> 0, bb)
    }
    let qb = null;

    function sy() {
      return null !== qb && 0 !== qb.byteLength || (qb = new Uint8Array(Gy.memory.buffer)), qb
    }
    let Sy = new Array(1024).fill(void 0);
    Sy.push(void 0, null, !0, !1);
    let Ey = Sy.length;

    function ly(yb) {
      const bb = function(yb) {
        return Sy[yb]
      }(yb);
      return function(yb) {
        yb < 1028 || (Sy[yb] = Ey, Ey = yb)
      }(yb), bb
    }
    let mb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mb.decode();
    const Cy = 2146435072;
    let Ty = 0;
    const Vy = new TextEncoder;
    "encodeInto" in Vy || (Vy.encodeInto = function(yb, bb) {
      const Wy = Vy.encode(yb);
      return bb.set(Wy), {
        read: yb.length,
        written: Wy.length
      }
    });
    let Jy, gb, Gy, Oy = 0;

    function Ry(yb, bb) {
      return gb = yb, Gy = yb.exports, Jy = bb, qb = null, Gy.bKxt(), Gy
    }

    function vb(yb) {
      if (void 0 !== Gy) return Gy;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module: yb
      } = yb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bb = oy();
      yb instanceof WebAssembly.Module || (yb = new WebAssembly.Module(yb));
      return Ry(new WebAssembly.Instance(yb, bb), yb)
    }
    async function ib(yb) {
      if (void 0 !== Gy) return Gy;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module_or_path: yb
      } = yb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bb = oy();
      ("string" === typeof yb || "function" === typeof Request && yb instanceof Request || "function" === typeof URL && yb instanceof URL) && (yb = fetch(yb));
      const {
        instance: Wy,
        module: Uy
      } = await async function(yb, bb) {
        if ("function" === typeof Response && yb instanceof Response) {
          if (!yb.ok) throw new Error(`failed to fetch Wasm: ${yb.status} ${yb.statusText} fetching '${yb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(yb, bb)
          } catch (Wy) {
            if (! function(yb) {
                switch (yb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(yb.type) || "application/wasm" === yb.headers.get("Content-Type")) throw Wy;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Wy)
          }
          const Uy = await yb.arrayBuffer();
          return await WebAssembly.instantiate(Uy, bb)
        } {
          const Wy = await WebAssembly.instantiate(yb, bb);
          return Wy instanceof WebAssembly.Instance ? {
            instance: Wy,
            module: yb
          } : Wy
        }
      }(await yb, bb);
      return Ry(Wy, Uy)
    }

    function My() {
      Gy = void 0, gb = void 0, qb = null, Sy = new Array(1024).fill(void 0), Sy.push(void 0, null, !0, !1), Ey = Sy.length
    }
    var Yy = Wy(3004),
      Xy = Wy(5876);
    const ny = 2;
    class uy extends Error {
      stage;
      constructor(yb, bb) {
        super((0, Yy.v)(yb, bb), {
          cause: bb
        }), this.name = "BloxdRecorderWasmError", this.stage = yb
      }
    }
    let rb = null;
    const Hy = function(yb) {
      let bb = null,
        Wy = null,
        Uy = null,
        hy = null;
      const fy = async () => {
        let Wy = null;
        try {
          return Wy = bb ??= (0, Yy.z)(yb.url(), (0, Xy.c)(yb.name)), await Wy
        } catch (Uy) {
          throw bb === Wy && (bb = null), yb.error((0, Yy.F)(Uy), Uy)
        }
      };
      return {
        load: () => {
          if (hy) return Promise.reject(hy);
          if (Wy) return Wy;
          const bb = (async () => {
            const bb = await fy();
            try {
              await yb.init(bb)
            } catch (Wy) {
              throw yb.error("instantiate", Wy)
            }
            return yb.sU
          })();
          Wy = bb, Uy = bb;
          const Zy = () => {
            Uy === bb && (Uy = null)
          };
          return bb.then(Zy, (() => {
            Zy(), Wy === bb && (Wy = null)
          })), bb
        },
        prefetch: async () => {
          hy || Wy || await fy()
        },
        markTrapped: bb => (hy ??= yb.error("call", bb), hy),
        unload: () => {
          hy || !yb.reset || Uy || (yb.reset(), Wy = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Wy.U(Wy(60023)),
      init: async yb => {
        await ib({
          module_or_path: yb
        }), rb = Py()
      },
      sU: Uy,
      error: (yb, bb) => new uy(yb, bb),
      reset: () => {
        My(), rb = null
      }
    });

    function ab() {
      return Hy.load()
    }

    function Fy() {
      return Hy.prefetch()
    }

    function py(yb) {
      return Hy.markTrapped(yb)
    }

    function Ly() {
      Hy.unload()
    }

    function Qy() {
      return rb?.buffer.byteLength ?? 0
    }
  },
  5876: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(3004);
    const hy = {
      bloxd_wasm: () => "e989db87a5f557ada4026e67d4a47376d430f543eee7f32e573c5d2b0032769c",
      bloxd_wasm_client: () => "8d612fbb1f0fe61d983b3bb2556fca3c1e0e6e782fc4ff198ebb3ba8107630a1",
      bloxd_wasm_workers: () => "cbab96479f2e9d4b565163fbfed0a59652418d0ac96c6e003d25c290e07d4914",
      bloxd_wasm_models: () => "cc3b97b02887fd959e6aac8c92ca5a5dfadcad1b80974004972b3a75c05d019a",
      bloxd_wasm_webgpu: () => "f3096279c3044b96be48162245d6e2e7da73e95228a85108b38562687782c907",
      bloxd_wasm_webgl: () => "d1cf22f5f978b51ac1b571ba29da08f1047b0873e044e89ec4676008d8fb7dbe",
      bloxd_wasm_webgl1: () => "4f03aae37dd37be5853f99a485338b001156b35ae47408243bd7f398d9dadad0",
      bloxd_wasm_replay: () => "3a65742f81727412c93734593748664778ee7e0f880fb5b4fe95355c282b47f8",
      bloxd_wasm_recorder: () => "bdd92d3bc5cb3b7a56800dfdad0945608d21aaed71ba700787eff7a8f099dcb8",
      bloxd_wasm_anim: () => "fa451e940fd7a94a9f64df816befb028036aee037b6fddac4025b8a26ccc6baa",
      bloxd_wasm_textures: () => "a73fa025fa307732d8ccf3d5ffb9a75731ee9d6cc37337ca3de332d06d5f932c",
      bloxd_wasm_shader_pack: () => "f3b46e3e760a1ee4ffe1e8533bd7ea8910dfaab4ac6a38d16a2f09b79c3a124d"
    };
    var fy = Wy(5885);

    function Zy(yb) {
      const bb = Object.prototype.hasOwnProperty.call(hy, yb) ? hy[yb]() : void 0;
      if (void 0 !== bb) return {
        sha256: bb,
        onMismatch: fy.z
      };
      throw new Uy.f(`${yb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);