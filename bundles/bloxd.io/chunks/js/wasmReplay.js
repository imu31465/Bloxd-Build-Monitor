export const id = 62;
export const ids = [62];
export const modules = {
  60907: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_replay_bg.7061541e05fedfe7e5b9.wasm"
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
  },
  60899: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      BloxdReplayWasmError: () => ib,
      loadReplayModule: () => db,
      markReplayTrapped: () => rb,
      replayMemoryBytes: () => wb,
      unloadReplayModule: () => Ab
    });
    var kb = {};
    sb.r(kb), sb.d(kb, {
      uWb: () => Wb,
      NTb: () => Pb,
      CM: () => ab,
      default: () => yb,
      initSync: () => tb,
      NM: () => Tb,
      CWb: () => Ub,
      hWb: () => Ib
    });
    class Wb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, fb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Jb.staJ(bb, 0)
      }
      tWb(bb, cb, sb, kb, Wb, ab) {
        Jb.ugDG(this.__wbg_ptr, bb, cb, sb, kb, Wb, ab)
      }
      close() {
        Jb.e1Ye(this.__wbg_ptr)
      }
      crop(bb, cb) {
        Jb.ezlc(this.__wbg_ptr, bb, cb)
      }
      DWb(bb, cb) {
        Jb.OOm1(this.__wbg_ptr, bb, cb)
      }
      iWb() {
        return Jb.MiJI(this.__wbg_ptr) >>> 0
      }
      EWb() {
        return Jb.U1IA(this.__wbg_ptr) >>> 0
      }
      OWb() {
        return Jb.IPZh(this.__wbg_ptr) >>> 0
      }
      GWb() {
        return Jb.R8zp(this.__wbg_ptr) >>> 0
      }
      PWb(bb, cb) {
        Jb.ZPU4(this.__wbg_ptr, bb, cb)
      }
      constructor() {
        const bb = Jb.ujkF();
        return this.__wbg_ptr = bb, fb.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Jb.f0gN(this.__wbg_ptr)
      }
      mWb() {
        return Jb.i3JG(this.__wbg_ptr) >>> 0
      }
      pause() {
        Jb.ZjKi(this.__wbg_ptr)
      }
      play() {
        Jb.dwp7(this.__wbg_ptr)
      }
      save() {
        return Jb.hgDI(this.__wbg_ptr) >>> 0
      }
      KWb() {
        Jb.R7RA(this.__wbg_ptr)
      }
      seek(bb, cb) {
        Jb.zoTn(this.__wbg_ptr, bb, cb)
      }
      zWb(bb) {
        Jb.jOJL(this.__wbg_ptr, bb)
      }
      yWb(bb, cb) {
        const sb = function(bb, cb) {
            const sb = cb(8 * bb.length, 8) >>> 0;
            return function() {
              null !== Xb && 0 !== Xb.byteLength || (Xb = new Float64Array(Jb.memory.buffer));
              return Xb
            }().set(bb, sb / 8), gb = bb.length, sb
          }(cb, Jb.ceKR),
          kb = gb;
        Jb.jsXT(this.__wbg_ptr, bb, sb, kb)
      }
      BWb(bb, cb) {
        Jb.EqRh(this.__wbg_ptr, bb, cb)
      }
      ZWb(bb) {
        Jb.g1gE(this.__wbg_ptr, bb)
      }
      stage(bb) {
        return Jb.zClR(this.__wbg_ptr, bb) >>> 0
      }
      step(bb, cb) {
        return Jb.hTq0(this.__wbg_ptr, bb, cb) >>> 0
      }
    }

    function ab(bb, cb) {
      const sb = function(bb, cb, sb) {
          if (void 0 === sb) {
            const sb = ub.encode(bb),
              kb = cb(sb.length, 1) >>> 0;
            return lb().subarray(kb, kb + sb.length).set(sb), gb = sb.length, kb
          }
          let kb = bb.length,
            Wb = cb(kb, 1) >>> 0;
          const ab = lb();
          let Tb = 0;
          for (; Tb < kb; Tb++) {
            const cb = bb.charCodeAt(Tb);
            if (cb > 127) break;
            ab[Wb + Tb] = cb
          }
          if (Tb !== kb) {
            0 !== Tb && (bb = bb.slice(Tb)), Wb = sb(Wb, kb, kb = Tb + 3 * bb.length, 1) >>> 0;
            const cb = lb().subarray(Wb + Tb, Wb + kb);
            Tb += ub.encodeInto(bb, cb).written, Wb = sb(Wb, kb, Tb, 1) >>> 0
          }
          return gb = Tb, Wb
        }(bb, Jb.ceKR, Jb.aK5F),
        kb = gb,
        Wb = Jb.aUyF(sb, kb, cb);
      if (Wb[1]) throw Cb(Wb[0])
    }

    function Tb() {
      Jb.Nfa7()
    }

    function Ub() {
      return Jb.I4Fm() >>> 0
    }

    function Ib() {
      return Cb(Jb.TMUU())
    }

    function Hb() {
      return {
        __proto__: null,
        HYpv: {
          __proto__: null,
          eHHe: function(bb, cb) {
            return Mb(Error(nb(bb, cb)))
          },
          FrAl: function() {
            return Mb(Jb.memory)
          },
          fTty: function(bb, cb) {
            throw new Error(nb(bb, cb))
          },
          EKfR: function(bb, cb) {
            console.error(nb(bb, cb))
          },
          cx1E: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Wb.prototype[Symbol.dispose] = Wb.prototype.free);
    const fb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => Jb?.__wbg_replaymodule_free(bb, 1)));

    function Mb(bb) {
      eb === Qb.length && Qb.push(Qb.length + 1);
      const cb = eb;
      return eb = Qb[cb], Qb[cb] = bb, cb
    }
    let Xb = null;

    function nb(bb, cb) {
      return function(bb, cb) {
        Lb += cb, Lb >= Vb && (Nb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Nb.decode(), Lb = cb);
        return Nb.decode(lb().subarray(bb, bb + cb))
      }(bb >>> 0, cb)
    }
    let mb = null;

    function lb() {
      return null !== mb && 0 !== mb.byteLength || (mb = new Uint8Array(Jb.memory.buffer)), mb
    }
    let Qb = new Array(1024).fill(void 0);
    Qb.push(void 0, null, !0, !1);
    let eb = Qb.length;

    function Cb(bb) {
      const cb = function(bb) {
        return Qb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (Qb[bb] = eb, eb = bb)
      }(bb), cb
    }
    let Nb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Nb.decode();
    const Vb = 2146435072;
    let Lb = 0;
    const ub = new TextEncoder;
    "encodeInto" in ub || (ub.encodeInto = function(bb, cb) {
      const sb = ub.encode(bb);
      return cb.set(sb), {
        read: bb.length,
        written: sb.length
      }
    });
    let Yb, hb, Jb, gb = 0;

    function Bb(bb, cb) {
      return hb = bb, Jb = bb.exports, Yb = cb, Xb = null, mb = null, Jb.WnX4(), Jb
    }

    function tb(bb) {
      if (void 0 !== Jb) return Jb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cb = Hb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Bb(new WebAssembly.Instance(bb, cb), bb)
    }
    async function yb(bb) {
      if (void 0 !== Jb) return Jb;
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
      return Bb(sb, kb)
    }

    function Pb() {
      Jb = void 0, hb = void 0, Xb = null, mb = null, Qb = new Array(1024).fill(void 0), Qb.push(void 0, null, !0, !1), eb = Qb.length
    }
    var Db = sb(3505),
      Eb = sb(6285);
    class ib extends Error {
      stage;
      constructor(bb, cb) {
        super((0, Db.x)(bb, cb), {
          cause: cb
        }), this.name = "BloxdReplayWasmError", this.stage = bb
      }
    }
    let Ob = null,
      Gb = null,
      Kb = Promise.resolve(),
      Zb = 0,
      zb = null,
      qb = null;

    function db() {
      if (qb) return Promise.reject(qb);
      if (Gb) return Gb;
      const bb = Zb,
        cb = Kb,
        Wb = (async () => {
          let Wb;
          await cb, Ob ??= (0, Db.A)(new sb.U(sb(60907)), (0, Eb.d)("bloxd_wasm_replay"));
          try {
            Wb = await Ob
          } catch (ab) {
            throw Ob = null, new ib((0, Db.E)(ab), ab)
          }
          if (bb !== Zb) throw new ib("instantiate", new Error("unloaded while loading"));
          try {
            await yb({
              module_or_path: Wb
            })
          } catch (ab) {
            throw Pb(), new ib("instantiate", ab)
          }
          if (bb !== Zb) throw Pb(), new ib("instantiate", new Error("unloaded while loading"));
          return zb = Ib(), kb
        })();
      return Gb = Wb, Kb = Wb.catch((() => {})), Wb.catch((() => {
        Gb === Wb && (Gb = null)
      })), Wb
    }

    function Ab() {
      qb || ob()
    }

    function wb() {
      return zb?.buffer.byteLength ?? 0
    }

    function rb(bb) {
      return qb || (qb = new ib("call", bb), ob()), qb
    }

    function ob() {
      Zb++, Pb(), Gb = null, zb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);