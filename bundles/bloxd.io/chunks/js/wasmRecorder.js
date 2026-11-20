export const id = 61;
export const ids = [61];
export const modules = {
  60896: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_recorder_bg.270c7de1b649c9653ddf.wasm"
  },
  60894: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdRecorderWasmError: () => ib,
      RECORDER_MODULE_ID: () => Eb,
      loadRecorderModule: () => Kb,
      markRecorderTrapped: () => zb,
      prefetchRecorderModule: () => Zb,
      recorderMemoryBytes: () => db,
      unloadRecorderModule: () => qb
    });
    var kb = {};
    sb.r(kb), sb.d(kb, {
      VWb: () => Wb,
      NTb: () => yb,
      CM: () => ab,
      default: () => tb,
      initSync: () => Bb,
      NM: () => Tb,
      CWb: () => Ub,
      MWb: () => Ib
    });
    class Wb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        hb.bmBA(bb, 0)
      }
      busy() {
        return 0 !== hb.JxR5(this.__wbg_ptr)
      }
      command(bb, cb) {
        return 0 !== hb.Sask(this.__wbg_ptr, bb, cb)
      }
      XWb(bb) {
        return hb.EQod(this.__wbg_ptr, bb) >>> 0
      }
      fWb() {
        hb.DHHZ(this.__wbg_ptr)
      }
      HWb() {
        return hb.uPrt(this.__wbg_ptr) >>> 0
      }
      IWb() {
        return hb.qose(this.__wbg_ptr)
      }
      lWb() {
        return hb.u8K9(this.__wbg_ptr) >>> 0
      }
      QWb() {
        return hb.SEqn(this.__wbg_ptr) >>> 0
      }
      feed(bb) {
        return hb.Zgjd(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = hb.JAVb();
        return this.__wbg_ptr = bb, fb.register(this, this.__wbg_ptr, this), this
      }
      mWb() {
        return hb.Sa6v(this.__wbg_ptr) >>> 0
      }
      VTb() {
        return hb.LFzZ(this.__wbg_ptr) >>> 0
      }
      UWb(bb, cb, sb) {
        return 0 !== hb.aUpL(this.__wbg_ptr, bb, cb, sb)
      }
      stage(bb) {
        return hb.zXIw(this.__wbg_ptr, bb) >>> 0
      }
      step() {
        return hb.u2NN(this.__wbg_ptr) >>> 0
      }
    }

    function ab(bb, cb) {
      const sb = function(bb, cb, sb) {
          if (void 0 === sb) {
            const sb = Lb.encode(bb),
              kb = cb(sb.length, 1) >>> 0;
            return mb().subarray(kb, kb + sb.length).set(sb), Jb = sb.length, kb
          }
          let kb = bb.length,
            Wb = cb(kb, 1) >>> 0;
          const ab = mb();
          let Tb = 0;
          for (; Tb < kb; Tb++) {
            const cb = bb.charCodeAt(Tb);
            if (cb > 127) break;
            ab[Wb + Tb] = cb
          }
          if (Tb !== kb) {
            0 !== Tb && (bb = bb.slice(Tb)), Wb = sb(Wb, kb, kb = Tb + 3 * bb.length, 1) >>> 0;
            const cb = mb().subarray(Wb + Tb, Wb + kb);
            Tb += Lb.encodeInto(bb, cb).written, Wb = sb(Wb, kb, Tb, 1) >>> 0
          }
          return Jb = Tb, Wb
        }(bb, hb.dPAW, hb.cXVi),
        kb = Jb,
        Wb = hb.rJ3W(sb, kb, cb);
      if (Wb[1]) throw eb(Wb[0])
    }

    function Tb() {
      hb.kwsd()
    }

    function Ub() {
      return hb.KnUk() >>> 0
    }

    function Ib() {
      return eb(hb.LuIo())
    }

    function Hb() {
      return {
        __proto__: null,
        rfze: {
          __proto__: null,
          N01i: function(bb, cb) {
            return Mb(Error(Xb(bb, cb)))
          },
          mdXr: function() {
            return Mb(hb.memory)
          },
          pWsU: function(bb, cb) {
            throw new Error(Xb(bb, cb))
          },
          gBYD: function(bb, cb) {
            console.error(Xb(bb, cb))
          },
          MhKg: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wb.prototype[Symbol.dispose] = Wb.prototype.free);
    const fb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => hb?.__wbg_recordermodule_free(bb, 1)));

    function Mb(bb) {
      Qb === lb.length && lb.push(lb.length + 1);
      const cb = Qb;
      return Qb = lb[cb], lb[cb] = bb, cb
    }

    function Xb(bb, cb) {
      return function(bb, cb) {
        Vb += cb, Vb >= Nb && (Cb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Cb.decode(), Vb = cb);
        return Cb.decode(mb().subarray(bb, bb + cb))
      }(bb >>> 0, cb)
    }
    let nb = null;

    function mb() {
      return null !== nb && 0 !== nb.byteLength || (nb = new Uint8Array(hb.memory.buffer)), nb
    }
    let lb = new Array(1024).fill(void 0);
    lb.push(void 0, null, !0, !1);
    let Qb = lb.length;

    function eb(bb) {
      const cb = function(bb) {
        return lb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (lb[bb] = Qb, Qb = bb)
      }(bb), cb
    }
    let Cb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Cb.decode();
    const Nb = 2146435072;
    let Vb = 0;
    const Lb = new TextEncoder;
    "encodeInto" in Lb || (Lb.encodeInto = function(bb, cb) {
      const sb = Lb.encode(bb);
      return cb.set(sb), {
        read: bb.length,
        written: sb.length
      }
    });
    let ub, Yb, hb, Jb = 0;

    function gb(bb, cb) {
      return Yb = bb, hb = bb.exports, ub = cb, nb = null, hb.nExP(), hb
    }

    function Bb(bb) {
      if (void 0 !== hb) return hb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cb = Hb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return gb(new WebAssembly.Instance(bb, cb), bb)
    }
    async function tb(bb) {
      if (void 0 !== hb) return hb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cb = Hb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: sb,
        module: kb
      } = await async function(bb, cb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, cb)
          } catch (sb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw sb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sb)
          }
          const kb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(kb, cb)
        } {
          const sb = await WebAssembly.instantiate(bb, cb);
          return sb instanceof WebAssembly.Instance ? {
            instance: sb,
            module: bb
          } : sb
        }
      }(await bb, cb);
      return gb(sb, kb)
    }

    function yb() {
      hb = void 0, Yb = void 0, nb = null, lb = new Array(1024).fill(void 0), lb.push(void 0, null, !0, !1), Qb = lb.length
    }
    var Pb = sb(3505),
      Db = sb(6285);
    const Eb = 2;
    class ib extends Error {
      stage;
      constructor(bb, cb) {
        super((0, Pb.x)(bb, cb), {
          cause: cb
        }), this.name = "BloxdRecorderWasmError", this.stage = bb
      }
    }
    let Ob = null;
    const Gb = function(bb) {
      let cb = null,
        sb = null,
        kb = null,
        Wb = null;
      const ab = async () => {
        let sb = null;
        try {
          return sb = cb ??= (0, Pb.A)(bb.url(), (0, Db.d)(bb.name)), await sb
        } catch (kb) {
          throw cb === sb && (cb = null), bb.error((0, Pb.E)(kb), kb)
        }
      };
      return {
        load: () => {
          if (Wb) return Promise.reject(Wb);
          if (sb) return sb;
          const cb = (async () => {
            const cb = await ab();
            try {
              await bb.init(cb)
            } catch (sb) {
              throw bb.error("instantiate", sb)
            }
            return bb.bindings
          })();
          sb = cb, kb = cb;
          const Tb = () => {
            kb === cb && (kb = null)
          };
          return cb.then(Tb, (() => {
            Tb(), sb === cb && (sb = null)
          })), cb
        },
        prefetch: async () => {
          Wb || sb || await ab()
        },
        markTrapped: cb => (Wb ??= bb.error("call", cb), Wb),
        unload: () => {
          Wb || !bb.reset || kb || (bb.reset(), sb = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new sb.U(sb(60896)),
      init: async bb => {
        await tb({
          module_or_path: bb
        }), Ob = Ib()
      },
      bindings: kb,
      error: (bb, cb) => new ib(bb, cb),
      reset: () => {
        yb(), Ob = null
      }
    });

    function Kb() {
      return Gb.load()
    }

    function Zb() {
      return Gb.prefetch()
    }

    function zb(bb) {
      return Gb.markTrapped(bb)
    }

    function qb() {
      Gb.unload()
    }

    function db() {
      return Ob?.buffer.byteLength ?? 0
    }
  },
  6285: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(3505);
    const Wb = {
      bloxd_wasm: () => "f2deac3a95fa77a1cc5890e21cb7e030da96c92da9c75cfa932f9a05cc40aedf",
      bloxd_wasm_client: () => "c6edcc46054cb735afeff08b33217275937707f8ac70cb8b5c7fe62e431251e6",
      bloxd_wasm_workers: () => "ee974f129bda12a85ed082f9b65c9090670a876bf96b379c144444c65ae2556f",
      bloxd_wasm_models: () => "be9aa9cb71680943564eddd1ec021aeec179278909b015f5d2a33e60342d2293",
      bloxd_wasm_webgpu: () => "1222801256cc2a9e528e331282389fe7d62a604e5a30a57b7e6ca38c959a97ce",
      bloxd_wasm_webgl: () => "a247bd9c10bbe2122d8318fff093620ecc23a8410aefd142dee1eb8008d469d7",
      bloxd_wasm_webgl1: () => "0cd01e4687f9eeba42a0db9058b3cf081f0505bd121d0557c726f14a96fb53d3",
      bloxd_wasm_replay: () => "f83c21ccc0c7a81aefe9fb3e9a587eed0f5383826de96ef3a2a1c8e928043141",
      bloxd_wasm_recorder: () => "277aa1b73dae5d8884eae1750f1cf9d8f869748ec3475a6969370783baa9a02b",
      bloxd_wasm_anim: () => "f46cab251d1e83f32e96bf21fb33222f8a75cffb040d22ef03fa834808ad9e4a",
      bloxd_wasm_textures: () => "907026c21e1eb3ae09c055455f18b265720f79b678cb47985a1937fd2ee774bc",
      bloxd_wasm_shader_pack: () => "0e34d623eecc459030b0abc5924b121a8566443bf7626c416308af84f6e66a00"
    };
    var ab = sb(4425);

    function Tb(bb) {
      const cb = Object.prototype.hasOwnProperty.call(Wb, bb) ? Wb[bb]() : void 0;
      if (void 0 !== cb) return {
        sha256: cb,
        onMismatch: ab.u
      };
      throw new kb.j(`${bb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);