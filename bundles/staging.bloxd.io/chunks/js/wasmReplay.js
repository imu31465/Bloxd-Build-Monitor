export const id = 78;
export const ids = [78];
export const modules = {
  64624: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_replay_bg.7f63b7d2b0ca276cd1b9.wasm"
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
  },
  64615: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      BloxdReplayWasmError: () => Ab,
      loadReplayModule: () => Gb,
      markReplayTrapped: () => ib,
      replayMemoryBytes: () => ab,
      unloadReplayModule: () => qb
    });
    var eb = {};
    Mb.r(eb), Mb.d(eb, {
      uVb: () => Hb,
      Blb: () => Yb,
      xO: () => pb,
      default: () => cb,
      initSync: () => Db,
      jO: () => Vb,
      GVb: () => gb,
      dVb: () => lb
    });
    class Hb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ib.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Kb.XOtO(bb, 0)
      }
      oVb(bb, wb, Mb, eb, Hb, pb) {
        Kb.QJiz(this.__wbg_ptr, bb, wb, Mb, eb, Hb, pb)
      }
      close() {
        Kb.oZpv(this.__wbg_ptr)
      }
      crop(bb, wb) {
        Kb.YkM8(this.__wbg_ptr, bb, wb)
      }
      bgb(bb, wb) {
        Kb.U9U8(this.__wbg_ptr, bb, wb)
      }
      Mgb() {
        return Kb.VwdE(this.__wbg_ptr) >>> 0
      }
      wgb() {
        return Kb.gcaM(this.__wbg_ptr) >>> 0
      }
      egb() {
        return Kb.l8XF(this.__wbg_ptr) >>> 0
      }
      Hgb() {
        return Kb.rAnX(this.__wbg_ptr) >>> 0
      }
      kVb(bb, wb) {
        Kb.eIYw(this.__wbg_ptr, bb, wb)
      }
      constructor() {
        const bb = Kb.cWVn();
        return this.__wbg_ptr = bb, Ib.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Kb.mmpP(this.__wbg_ptr)
      }
      SVb() {
        return Kb.fTPD(this.__wbg_ptr) >>> 0
      }
      pause() {
        Kb.ZO0x(this.__wbg_ptr)
      }
      play() {
        Kb.MOYp(this.__wbg_ptr)
      }
      save() {
        return Kb.UEAW(this.__wbg_ptr) >>> 0
      }
      pgb() {
        Kb.WQYF(this.__wbg_ptr)
      }
      seek(bb, wb) {
        Kb.CzRg(this.__wbg_ptr, bb, wb)
      }
      ggb(bb) {
        Kb.f7cG(this.__wbg_ptr, bb)
      }
      TVb(bb, wb) {
        const Mb = function(bb, wb) {
            const Mb = wb(8 * bb.length, 8) >>> 0;
            return function() {
              null !== Ub && 0 !== Ub.byteLength || (Ub = new Float64Array(Kb.memory.buffer));
              return Ub
            }().set(bb, Mb / 8), rb = bb.length, Mb
          }(wb, Kb.T0sg),
          eb = rb;
        Kb.Jzbq(this.__wbg_ptr, bb, Mb, eb)
      }
      yVb(bb, wb) {
        Kb.OihM(this.__wbg_ptr, bb, wb)
      }
      Vgb(bb) {
        Kb.Er5T(this.__wbg_ptr, bb)
      }
      stage(bb) {
        return Kb.H6Nd(this.__wbg_ptr, bb) >>> 0
      }
      step(bb, wb) {
        return Kb.gFaC(this.__wbg_ptr, bb, wb) >>> 0
      }
    }

    function pb(bb, wb) {
      const Mb = function(bb, wb, Mb) {
          if (void 0 === Mb) {
            const Mb = Xb.encode(bb),
              eb = wb(Mb.length, 1) >>> 0;
            return Eb().subarray(eb, eb + Mb.length).set(Mb), rb = Mb.length, eb
          }
          let eb = bb.length,
            Hb = wb(eb, 1) >>> 0;
          const pb = Eb();
          let Vb = 0;
          for (; Vb < eb; Vb++) {
            const wb = bb.charCodeAt(Vb);
            if (wb > 127) break;
            pb[Hb + Vb] = wb
          }
          if (Vb !== eb) {
            0 !== Vb && (bb = bb.slice(Vb)), Hb = Mb(Hb, eb, eb = Vb + 3 * bb.length, 1) >>> 0;
            const wb = Eb().subarray(Hb + Vb, Hb + eb);
            Vb += Xb.encodeInto(bb, wb).written, Hb = Mb(Hb, eb, Vb, 1) >>> 0
          }
          return rb = Vb, Hb
        }(bb, Kb.T0sg, Kb.YxCK),
        eb = rb,
        Hb = Kb.iT4y(Mb, eb, wb);
      if (Hb[1]) throw sb(Hb[0])
    }

    function Vb() {
      Kb.E0gw()
    }

    function gb() {
      return Kb.GbKz() >>> 0
    }

    function lb() {
      return sb(Kb.HDGE())
    }

    function Lb() {
      return {
        __proto__: null,
        O4Od: {
          __proto__: null,
          lp8v: function(bb, wb) {
            return Ob(Error(tb(bb, wb)))
          },
          RK8Y: function() {
            return Ob(Kb.memory)
          },
          TZ46: function(bb, wb) {
            throw new Error(tb(bb, wb))
          },
          DwPh: function(bb, wb) {
            console.error(tb(bb, wb))
          },
          Uqsh: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Hb.prototype[Symbol.dispose] = Hb.prototype.free);
    const Ib = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => Kb?.__wbg_replaymodule_free(bb, 1)));

    function Ob(bb) {
      Bb === Fb.length && Fb.push(Fb.length + 1);
      const wb = Bb;
      return Bb = Fb[wb], Fb[wb] = bb, wb
    }
    let Ub = null;

    function tb(bb, wb) {
      return function(bb, wb) {
        zb += wb, zb >= hb && (mb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), mb.decode(), zb = wb);
        return mb.decode(Eb().subarray(bb, bb + wb))
      }(bb >>> 0, wb)
    }
    let Cb = null;

    function Eb() {
      return null !== Cb && 0 !== Cb.byteLength || (Cb = new Uint8Array(Kb.memory.buffer)), Cb
    }
    let Fb = new Array(1024).fill(void 0);
    Fb.push(void 0, null, !0, !1);
    let Bb = Fb.length;

    function sb(bb) {
      const wb = function(bb) {
        return Fb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (Fb[bb] = Bb, Bb = bb)
      }(bb), wb
    }
    let mb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    mb.decode();
    const hb = 2146435072;
    let zb = 0;
    const Xb = new TextEncoder;
    "encodeInto" in Xb || (Xb.encodeInto = function(bb, wb) {
      const Mb = Xb.encode(bb);
      return wb.set(Mb), {
        read: bb.length,
        written: Mb.length
      }
    });
    let xb, jb, Kb, rb = 0;

    function Rb(bb, wb) {
      return jb = bb, Kb = bb.exports, xb = wb, Ub = null, Cb = null, Kb.yC52(), Kb
    }

    function Db(bb) {
      if (void 0 !== Kb) return Kb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const wb = Lb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Rb(new WebAssembly.Instance(bb, wb), bb)
    }
    async function cb(bb) {
      if (void 0 !== Kb) return Kb;
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
      return Rb(Mb, eb)
    }

    function Yb() {
      Kb = void 0, jb = void 0, Ub = null, Cb = null, Fb = new Array(1024).fill(void 0), Fb.push(void 0, null, !0, !1), Bb = Fb.length
    }
    var Zb = Mb(2471),
      fb = Mb(7804);
    class Ab extends Error {
      stage;
      constructor(bb, wb) {
        super((0, Zb.x)(bb, wb), {
          cause: wb
        }), this.name = "BloxdReplayWasmError", this.stage = bb
      }
    }
    let Wb = null,
      Jb = null,
      Sb = Promise.resolve(),
      Nb = 0,
      vb = null,
      Qb = null;

    function Gb() {
      if (Qb) return Promise.reject(Qb);
      if (Jb) return Jb;
      const bb = Nb,
        wb = Sb,
        Hb = (async () => {
          let Hb;
          await wb, Wb ??= (0, Zb.y)(new Mb.U(Mb(64624)), (0, fb.e)("bloxd_wasm_replay"));
          try {
            Hb = await Wb
          } catch (pb) {
            throw Wb = null, new Ab((0, Zb.E)(pb), pb)
          }
          if (bb !== Nb) throw new Ab("instantiate", new Error("unloaded while loading"));
          try {
            await cb({
              module_or_path: Hb
            })
          } catch (pb) {
            throw Yb(), new Ab("instantiate", pb)
          }
          if (bb !== Nb) throw Yb(), new Ab("instantiate", new Error("unloaded while loading"));
          return vb = lb(), eb
        })();
      return Jb = Hb, Sb = Hb.catch((() => {})), Hb.catch((() => {
        Jb === Hb && (Jb = null)
      })), Hb
    }

    function qb() {
      Qb || ub()
    }

    function ab() {
      return vb?.buffer.byteLength ?? 0
    }

    function ib(bb) {
      return Qb || (Qb = new Ab("call", bb), ub()), Qb
    }

    function ub() {
      Nb++, Yb(), Jb = null, vb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);