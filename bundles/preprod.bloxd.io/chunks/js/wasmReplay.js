export const id = 58;
export const ids = [58];
export const modules = {
  60037: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_replay_bg.0a1327ff0885aff5a5eb.wasm"
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
  },
  60028: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdReplayWasmError: () => uy,
      loadReplayModule: () => Qy,
      markReplayTrapped: () => tb,
      replayMemoryBytes: () => Dy,
      unloadReplayModule: () => jb
    });
    var Uy = {};
    Wy.r(Uy), Wy.d(Uy, {
      QKy: () => hy,
      uqy: () => Yy,
      Sy: () => fy,
      default: () => My,
      initSync: () => ib,
      Ey: () => Zy,
      aey: () => cb,
      jey: () => Py
    });
    class hy {
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, By.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Oy.ynkG(yb, 0)
      }
      NKy(yb, bb, Wy, Uy, hy, fy) {
        Oy.hO0Y(this.__wbg_ptr, yb, bb, Wy, Uy, hy, fy)
      }
      close() {
        Oy.wUIv(this.__wbg_ptr)
      }
      crop(yb, bb) {
        Oy.iUxL(this.__wbg_ptr, yb, bb)
      }
      xey(yb, bb) {
        Oy.jTdf(this.__wbg_ptr, yb, bb)
      }
      dKy() {
        return Oy.robM(this.__wbg_ptr) >>> 0
      }
      AKy() {
        return Oy.ILPE(this.__wbg_ptr) >>> 0
      }
      yqy() {
        return Oy.c3pL(this.__wbg_ptr) >>> 0
      }
      bqy() {
        return Oy.Vt5s(this.__wbg_ptr) >>> 0
      }
      IKy(yb, bb) {
        Oy.i4hM(this.__wbg_ptr, yb, bb)
      }
      constructor() {
        const yb = Oy.GH1z();
        return this.__wbg_ptr = yb, By.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Oy.Iw3Y(this.__wbg_ptr)
      }
      nKy() {
        return Oy.OmH7(this.__wbg_ptr) >>> 0
      }
      pause() {
        Oy.wdsy(this.__wbg_ptr)
      }
      play() {
        Oy.MGON(this.__wbg_ptr)
      }
      save() {
        return Oy.pvLU(this.__wbg_ptr) >>> 0
      }
      Wey() {
        Oy.sxF9(this.__wbg_ptr)
      }
      seek(yb, bb) {
        Oy.wMJK(this.__wbg_ptr, yb, bb)
      }
      Zey(yb) {
        Oy.PJA1(this.__wbg_ptr, yb)
      }
      zey(yb, bb) {
        const Wy = function(yb, bb) {
            const Wy = bb(8 * yb.length, 8) >>> 0;
            return function() {
              null !== ey && 0 !== ey.byteLength || (ey = new Float64Array(Oy.memory.buffer));
              return ey
            }().set(yb, Wy / 8), Ry = yb.length, Wy
          }(bb, Oy.QfTZ),
          Uy = Ry;
        Oy.brXu(this.__wbg_ptr, yb, Wy, Uy)
      }
      wKy(yb, bb) {
        Oy.WGWE(this.__wbg_ptr, yb, bb)
      }
      fey(yb) {
        Oy.WZaV(this.__wbg_ptr, yb)
      }
      stage(yb) {
        return Oy.KDmr(this.__wbg_ptr, yb) >>> 0
      }
      step(yb, bb) {
        return Oy.CB4G(this.__wbg_ptr, yb, bb) >>> 0
      }
    }

    function fy(yb, bb) {
      const Wy = function(yb, bb, Wy) {
          if (void 0 === Wy) {
            const Wy = Jy.encode(yb),
              Uy = bb(Wy.length, 1) >>> 0;
            return Sy().subarray(Uy, Uy + Wy.length).set(Wy), Ry = Wy.length, Uy
          }
          let Uy = yb.length,
            hy = bb(Uy, 1) >>> 0;
          const fy = Sy();
          let Zy = 0;
          for (; Zy < Uy; Zy++) {
            const bb = yb.charCodeAt(Zy);
            if (bb > 127) break;
            fy[hy + Zy] = bb
          }
          if (Zy !== Uy) {
            0 !== Zy && (yb = yb.slice(Zy)), hy = Wy(hy, Uy, Uy = Zy + 3 * yb.length, 1) >>> 0;
            const bb = Sy().subarray(hy + Zy, hy + Uy);
            Zy += Jy.encodeInto(yb, bb).written, hy = Wy(hy, Uy, Zy, 1) >>> 0
          }
          return Ry = Zy, hy
        }(yb, Oy.QfTZ, Oy.XUXE),
        Uy = Ry,
        hy = Oy.ek98(Wy, Uy, bb);
      if (hy[1]) throw mb(hy[0])
    }

    function Zy() {
      Oy.aeWN()
    }

    function cb() {
      return Oy.hDeN() >>> 0
    }

    function Py() {
      return mb(Oy.RLym())
    }

    function oy() {
      return {
        __proto__: null,
        dcaQ: {
          __proto__: null,
          kfid: function(yb, bb) {
            return Ky(Error(qb(yb, bb)))
          },
          CWe5: function() {
            return Ky(Oy.memory)
          },
          lJ1d: function(yb, bb) {
            throw new Error(qb(yb, bb))
          },
          ICb1: function(yb, bb) {
            console.error(qb(yb, bb))
          },
          qpug: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (hy.prototype[Symbol.dispose] = hy.prototype.free);
    const By = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((yb => Oy?.__wbg_replaymodule_free(yb, 1)));

    function Ky(yb) {
      ly === Ey.length && Ey.push(Ey.length + 1);
      const bb = ly;
      return ly = Ey[bb], Ey[bb] = yb, bb
    }
    let ey = null;

    function qb(yb, bb) {
      return function(yb, bb) {
        Vy += bb, Vy >= Ty && (Cy = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Cy.decode(), Vy = bb);
        return Cy.decode(Sy().subarray(yb, yb + bb))
      }(yb >>> 0, bb)
    }
    let sy = null;

    function Sy() {
      return null !== sy && 0 !== sy.byteLength || (sy = new Uint8Array(Oy.memory.buffer)), sy
    }
    let Ey = new Array(1024).fill(void 0);
    Ey.push(void 0, null, !0, !1);
    let ly = Ey.length;

    function mb(yb) {
      const bb = function(yb) {
        return Ey[yb]
      }(yb);
      return function(yb) {
        yb < 1028 || (Ey[yb] = ly, ly = yb)
      }(yb), bb
    }
    let Cy = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Cy.decode();
    const Ty = 2146435072;
    let Vy = 0;
    const Jy = new TextEncoder;
    "encodeInto" in Jy || (Jy.encodeInto = function(yb, bb) {
      const Wy = Jy.encode(yb);
      return bb.set(Wy), {
        read: yb.length,
        written: Wy.length
      }
    });
    let gb, Gy, Oy, Ry = 0;

    function vb(yb, bb) {
      return Gy = yb, Oy = yb.exports, gb = bb, ey = null, sy = null, Oy.kBXA(), Oy
    }

    function ib(yb) {
      if (void 0 !== Oy) return Oy;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module: yb
      } = yb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bb = oy();
      yb instanceof WebAssembly.Module || (yb = new WebAssembly.Module(yb));
      return vb(new WebAssembly.Instance(yb, bb), yb)
    }
    async function My(yb) {
      if (void 0 !== Oy) return Oy;
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
      return vb(Wy, Uy)
    }

    function Yy() {
      Oy = void 0, Gy = void 0, ey = null, sy = null, Ey = new Array(1024).fill(void 0), Ey.push(void 0, null, !0, !1), ly = Ey.length
    }
    var Xy = Wy(3004),
      ny = Wy(5876);
    class uy extends Error {
      stage;
      constructor(yb, bb) {
        super((0, Xy.v)(yb, bb), {
          cause: bb
        }), this.name = "BloxdReplayWasmError", this.stage = yb
      }
    }
    let rb = null,
      Hy = null,
      ab = Promise.resolve(),
      Fy = 0,
      py = null,
      Ly = null;

    function Qy() {
      if (Ly) return Promise.reject(Ly);
      if (Hy) return Hy;
      const yb = Fy,
        bb = ab,
        hy = (async () => {
          let hy;
          await bb, rb ??= (0, Xy.z)(new Wy.U(Wy(60037)), (0, ny.c)("bloxd_wasm_replay"));
          try {
            hy = await rb
          } catch (fy) {
            throw rb = null, new uy((0, Xy.F)(fy), fy)
          }
          if (yb !== Fy) throw new uy("instantiate", new Error("unloaded while loading"));
          try {
            await My({
              module_or_path: hy
            })
          } catch (fy) {
            throw Yy(), new uy("instantiate", fy)
          }
          if (yb !== Fy) throw Yy(), new uy("instantiate", new Error("unloaded while loading"));
          return py = Py(), Uy
        })();
      return Hy = hy, ab = hy.catch((() => {})), hy.catch((() => {
        Hy === hy && (Hy = null)
      })), hy
    }

    function jb() {
      Ly || wy()
    }

    function Dy() {
      return py?.buffer.byteLength ?? 0
    }

    function tb(yb) {
      return Ly || (Ly = new uy("call", yb), wy()), Ly
    }

    function wy() {
      Fy++, Yy(), Hy = null, py = null
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);