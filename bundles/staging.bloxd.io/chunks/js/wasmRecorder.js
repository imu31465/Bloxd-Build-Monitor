export const id = 77;
export const ids = [77];
export const modules = {
  64609: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_recorder_bg.bdbc5561705e1dc29756.wasm"
  },
  64601: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdRecorderWasmError: () => Ab,
      RECORDER_MODULE_ID: () => fb,
      loadRecorderModule: () => Sb,
      markRecorderTrapped: () => vb,
      prefetchRecorderModule: () => Nb,
      recorderMemoryBytes: () => Gb,
      unloadRecorderModule: () => Qb
    });
    var eb = {};
    Mb.r(eb), Mb.d(eb, {
      aVb: () => Hb,
      Blb: () => cb,
      xO: () => pb,
      default: () => Db,
      initSync: () => Rb,
      jO: () => Vb,
      GVb: () => gb,
      AVb: () => lb
    });
    class Hb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ib.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        jb.lTzG(bb, 0)
      }
      busy() {
        return 0 !== jb.Wvrs(this.__wbg_ptr)
      }
      command(bb, wb) {
        return 0 !== jb.Hnet(this.__wbg_ptr, bb, wb)
      }
      WVb(bb) {
        return jb.JYr1(this.__wbg_ptr, bb) >>> 0
      }
      ZVb() {
        jb.eOLo(this.__wbg_ptr)
      }
      YVb() {
        return jb.w6Qy(this.__wbg_ptr) >>> 0
      }
      cVb() {
        return jb.MW6s(this.__wbg_ptr)
      }
      NVb() {
        return jb.V1sP(this.__wbg_ptr) >>> 0
      }
      vVb() {
        return jb.rk6T(this.__wbg_ptr) >>> 0
      }
      feed(bb) {
        return jb.y5cu(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = jb.O38L();
        return this.__wbg_ptr = bb, Ib.register(this, this.__wbg_ptr, this), this
      }
      SVb() {
        return jb.GC3V(this.__wbg_ptr) >>> 0
      }
      slb() {
        return jb.I1Lb(this.__wbg_ptr) >>> 0
      }
      DVb(bb, wb, Mb) {
        return 0 !== jb.ECUP(this.__wbg_ptr, bb, wb, Mb)
      }
      stage(bb) {
        return jb.I6vz(this.__wbg_ptr, bb) >>> 0
      }
      step() {
        return jb.Ij2J(this.__wbg_ptr) >>> 0
      }
    }

    function pb(bb, wb) {
      const Mb = function(bb, wb, Mb) {
          if (void 0 === Mb) {
            const Mb = zb.encode(bb),
              eb = wb(Mb.length, 1) >>> 0;
            return Cb().subarray(eb, eb + Mb.length).set(Mb), Kb = Mb.length, eb
          }
          let eb = bb.length,
            Hb = wb(eb, 1) >>> 0;
          const pb = Cb();
          let Vb = 0;
          for (; Vb < eb; Vb++) {
            const wb = bb.charCodeAt(Vb);
            if (wb > 127) break;
            pb[Hb + Vb] = wb
          }
          if (Vb !== eb) {
            0 !== Vb && (bb = bb.slice(Vb)), Hb = Mb(Hb, eb, eb = Vb + 3 * bb.length, 1) >>> 0;
            const wb = Cb().subarray(Hb + Vb, Hb + eb);
            Vb += zb.encodeInto(bb, wb).written, Hb = Mb(Hb, eb, Vb, 1) >>> 0
          }
          return Kb = Vb, Hb
        }(bb, jb.dFDJ, jb.m9ee),
        eb = Kb,
        Hb = jb.V5Cu(Mb, eb, wb);
      if (Hb[1]) throw Bb(Hb[0])
    }

    function Vb() {
      jb.vBgm()
    }

    function gb() {
      return jb.oRRX() >>> 0
    }

    function lb() {
      return Bb(jb.Miy1())
    }

    function Lb() {
      return {
        __proto__: null,
        nWZO: {
          __proto__: null,
          gA3R: function(bb, wb) {
            return Ob(Error(Ub(bb, wb)))
          },
          aIEE: function() {
            return Ob(jb.memory)
          },
          wSzY: function(bb, wb) {
            throw new Error(Ub(bb, wb))
          },
          Au5Z: function(bb, wb) {
            console.error(Ub(bb, wb))
          },
          wrzk: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Hb.prototype[Symbol.dispose] = Hb.prototype.free);
    const Ib = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => jb?.__wbg_recordermodule_free(bb, 1)));

    function Ob(bb) {
      Fb === Eb.length && Eb.push(Eb.length + 1);
      const wb = Fb;
      return Fb = Eb[wb], Eb[wb] = bb, wb
    }

    function Ub(bb, wb) {
      return function(bb, wb) {
        hb += wb, hb >= mb && (sb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), sb.decode(), hb = wb);
        return sb.decode(Cb().subarray(bb, bb + wb))
      }(bb >>> 0, wb)
    }
    let tb = null;

    function Cb() {
      return null !== tb && 0 !== tb.byteLength || (tb = new Uint8Array(jb.memory.buffer)), tb
    }
    let Eb = new Array(1024).fill(void 0);
    Eb.push(void 0, null, !0, !1);
    let Fb = Eb.length;

    function Bb(bb) {
      const wb = function(bb) {
        return Eb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (Eb[bb] = Fb, Fb = bb)
      }(bb), wb
    }
    let sb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    sb.decode();
    const mb = 2146435072;
    let hb = 0;
    const zb = new TextEncoder;
    "encodeInto" in zb || (zb.encodeInto = function(bb, wb) {
      const Mb = zb.encode(bb);
      return wb.set(Mb), {
        read: bb.length,
        written: Mb.length
      }
    });
    let Xb, xb, jb, Kb = 0;

    function rb(bb, wb) {
      return xb = bb, jb = bb.exports, Xb = wb, tb = null, jb.KlYM(), jb
    }

    function Rb(bb) {
      if (void 0 !== jb) return jb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const wb = Lb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return rb(new WebAssembly.Instance(bb, wb), bb)
    }
    async function Db(bb) {
      if (void 0 !== jb) return jb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const wb = Lb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Mb,
        module: eb
      } = await async function(bb, wb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, wb)
          } catch (Mb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Mb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Mb)
          }
          const eb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(eb, wb)
        } {
          const Mb = await WebAssembly.instantiate(bb, wb);
          return Mb instanceof WebAssembly.Instance ? {
            instance: Mb,
            module: bb
          } : Mb
        }
      }(await bb, wb);
      return rb(Mb, eb)
    }

    function cb() {
      jb = void 0, xb = void 0, tb = null, Eb = new Array(1024).fill(void 0), Eb.push(void 0, null, !0, !1), Fb = Eb.length
    }
    var Yb = Mb(2471),
      Zb = Mb(7804);
    const fb = 2;
    class Ab extends Error {
      stage;
      constructor(bb, wb) {
        super((0, Yb.x)(bb, wb), {
          cause: wb
        }), this.name = "BloxdRecorderWasmError", this.stage = bb
      }
    }
    let Wb = null;
    const Jb = function(bb) {
      let wb = null,
        Mb = null,
        eb = null,
        Hb = null;
      const pb = async () => {
        let Mb = null;
        try {
          return Mb = wb ??= (0, Yb.y)(bb.url(), (0, Zb.e)(bb.name)), await Mb
        } catch (eb) {
          throw wb === Mb && (wb = null), bb.error((0, Yb.E)(eb), eb)
        }
      };
      return {
        load: () => {
          if (Hb) return Promise.reject(Hb);
          if (Mb) return Mb;
          const wb = (async () => {
            const wb = await pb();
            try {
              await bb.init(wb)
            } catch (Mb) {
              throw bb.error("instantiate", Mb)
            }
            return bb.bindings
          })();
          Mb = wb, eb = wb;
          const Vb = () => {
            eb === wb && (eb = null)
          };
          return wb.then(Vb, (() => {
            Vb(), Mb === wb && (Mb = null)
          })), wb
        },
        prefetch: async () => {
          Hb || Mb || await pb()
        },
        markTrapped: wb => (Hb ??= bb.error("call", wb), Hb),
        unload: () => {
          Hb || !bb.reset || eb || (bb.reset(), Mb = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Mb.U(Mb(64609)),
      init: async bb => {
        await Db({
          module_or_path: bb
        }), Wb = lb()
      },
      bindings: eb,
      error: (bb, wb) => new Ab(bb, wb),
      reset: () => {
        cb(), Wb = null
      }
    });

    function Sb() {
      return Jb.load()
    }

    function Nb() {
      return Jb.prefetch()
    }

    function vb(bb) {
      return Jb.markTrapped(bb)
    }

    function Qb() {
      Jb.unload()
    }

    function Gb() {
      return Wb?.buffer.byteLength ?? 0
    }
  },
  7804: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(2471);
    const Hb = {
      bloxd_wasm: () => "0021d096c0b495869173e1bf089a555fc306fc598e02546bb9c216172e53332d",
      bloxd_wasm_client: () => "6a63b6c47ad21756d57227bbac24ae049881afbff210f713c0b0aeaceae2e102",
      bloxd_wasm_workers: () => "68ec8fbb485ec5b7fcde94a988fa5914ddd0a7f0de80b29453220567a879b36d",
      bloxd_wasm_models: () => "6bd85ee20b75ed8b1a8a698da23b9eff9236c4776496360982bd2c00ace99b99",
      bloxd_wasm_webgpu: () => "d8909c14a3b536315fb7502719927466cd7873d70297d564639a12b8734d8f30",
      bloxd_wasm_webgl: () => "c49c3dd2ef01f7ca5d6fe08e3373b8ab934ecbd11c01d27eab1ada606f835e3e",
      bloxd_wasm_webgl1: () => "d98f1a2e5f8bf52c5604e5bd19ba8dfbee684e74c8841277cf32d7be7bdc3226",
      bloxd_wasm_replay: () => "5a90bae27ebce9aceafb0b6ee704660127b6865c72068e5cc9c9ddbab78d8239",
      bloxd_wasm_recorder: () => "4a0b3b1fe1477637cddb48ba5d0f06c50cb40ec42c31a1b963b0e14a086c2590",
      bloxd_wasm_anim: () => "c4812501582860f01a67ad5cb5cac665ddfc865a422d1a2d38caef1ad60a0c73",
      bloxd_wasm_textures: () => "4df5cb3be0ab097262d9f7d404625e34c0cb698b3c1c16687afeb13ba867808d",
      bloxd_wasm_shader_pack: () => "ce62ad8f961659fd0f926ef62c3463ae7aefa972b86660e6c0f3e3f0bab25ee6"
    };
    var pb = Mb(5587);

    function Vb(bb) {
      const wb = Object.prototype.hasOwnProperty.call(Hb, bb) ? Hb[bb]() : void 0;
      if (void 0 !== wb) return {
        sha256: wb,
        onMismatch: pb.B
      };
      throw new eb.j(`${bb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);