export const id = 62;
export const ids = [62];
export const modules = {
  60918: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_recorder_bg.9675488c77ecaf4f21cb.wasm"
  },
  60910: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdRecorderWasmError: () => Jb,
      RECORDER_MODULE_ID: () => tb,
      loadRecorderModule: () => sb,
      markRecorderTrapped: () => mb,
      prefetchRecorderModule: () => Mb,
      recorderMemoryBytes: () => Pb,
      unloadRecorderModule: () => Ib
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      cOb: () => Ob,
      MUb: () => gb,
      Ea: () => Gb,
      default: () => zb,
      initSync: () => xb,
      ya: () => Ub,
      kOb: () => Lb,
      POb: () => Yb
    });
    class Ob {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ab.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        jb.DWle(bb, 0)
      }
      busy() {
        return 0 !== jb.UBAL(this.__wbg_ptr)
      }
      command(bb, ub) {
        return 0 !== jb.xpKe(this.__wbg_ptr, bb, ub)
      }
      qOb(bb) {
        return jb.mkLL(this.__wbg_ptr, bb) >>> 0
      }
      IOb() {
        jb.fy8s(this.__wbg_ptr)
      }
      mOb() {
        return jb.mrju(this.__wbg_ptr) >>> 0
      }
      MOb() {
        return jb.tNXL(this.__wbg_ptr)
      }
      VOb() {
        return jb.bfNk(this.__wbg_ptr) >>> 0
      }
      FOb() {
        return jb.EuvX(this.__wbg_ptr) >>> 0
      }
      feed(bb) {
        return jb.Tf8E(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = jb.aGSt();
        return this.__wbg_ptr = bb, ab.register(this, this.__wbg_ptr, this), this
      }
      yOb() {
        return jb.hpqw(this.__wbg_ptr) >>> 0
      }
      mUb() {
        return jb.hHAY(this.__wbg_ptr) >>> 0
      }
      sOb(bb, ub, hb) {
        return 0 !== jb.D7Rv(this.__wbg_ptr, bb, ub, hb)
      }
      stage(bb) {
        return jb.O0jH(this.__wbg_ptr, bb) >>> 0
      }
      step() {
        return jb.yfnM(this.__wbg_ptr) >>> 0
      }
    }

    function Gb(bb, ub) {
      const hb = function(bb, ub, hb) {
          if (void 0 === hb) {
            const hb = Cb.encode(bb),
              Bb = ub(hb.length, 1) >>> 0;
            return Xb().subarray(Bb, Bb + hb.length).set(hb), nb = hb.length, Bb
          }
          let Bb = bb.length,
            Ob = ub(Bb, 1) >>> 0;
          const Gb = Xb();
          let Ub = 0;
          for (; Ub < Bb; Ub++) {
            const ub = bb.charCodeAt(Ub);
            if (ub > 127) break;
            Gb[Ob + Ub] = ub
          }
          if (Ub !== Bb) {
            0 !== Ub && (bb = bb.slice(Ub)), Ob = hb(Ob, Bb, Bb = Ub + 3 * bb.length, 1) >>> 0;
            const ub = Xb().subarray(Ob + Ub, Ob + Bb);
            Ub += Cb.encodeInto(bb, ub).written, Ob = hb(Ob, Bb, Ub, 1) >>> 0
          }
          return nb = Ub, Ob
        }(bb, jb.SykH, jb.ysOj),
        Bb = nb,
        Ob = jb.nAYt(hb, Bb, ub);
      if (Ob[1]) throw Ab(Ob[0])
    }

    function Ub() {
      jb.nCeB()
    }

    function Lb() {
      return jb.X3Av() >>> 0
    }

    function Yb() {
      return Ab(jb.qBfn())
    }

    function Sb() {
      return {
        __proto__: null,
        Nyex: {
          __proto__: null,
          uJOQ: function(bb, ub) {
            return Hb(Error(wb(bb, ub)))
          },
          SsUM: function() {
            return Hb(jb.memory)
          },
          kS8Z: function(bb, ub) {
            throw new Error(wb(bb, ub))
          },
          p3k0: function(bb, ub) {
            console.error(wb(bb, ub))
          },
          IcnC: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ob.prototype[Symbol.dispose] = Ob.prototype.free);
    const ab = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => jb?.__wbg_recordermodule_free(bb, 1)));

    function Hb(bb) {
      ob === pb.length && pb.push(pb.length + 1);
      const ub = ob;
      return ob = pb[ub], pb[ub] = bb, ub
    }

    function wb(bb, ub) {
      return function(bb, ub) {
        Wb += ub, Wb >= Kb && (lb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), lb.decode(), Wb = ub);
        return lb.decode(Xb().subarray(bb, bb + ub))
      }(bb >>> 0, ub)
    }
    let Zb = null;

    function Xb() {
      return null !== Zb && 0 !== Zb.byteLength || (Zb = new Uint8Array(jb.memory.buffer)), Zb
    }
    let pb = new Array(1024).fill(void 0);
    pb.push(void 0, null, !0, !1);
    let ob = pb.length;

    function Ab(bb) {
      const ub = function(bb) {
        return pb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (pb[bb] = ob, ob = bb)
      }(bb), ub
    }
    let lb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    lb.decode();
    const Kb = 2146435072;
    let Wb = 0;
    const Cb = new TextEncoder;
    "encodeInto" in Cb || (Cb.encodeInto = function(bb, ub) {
      const hb = Cb.encode(bb);
      return ub.set(hb), {
        read: bb.length,
        written: hb.length
      }
    });
    let db, rb, jb, nb = 0;

    function Db(bb, ub) {
      return rb = bb, jb = bb.exports, db = ub, Zb = null, jb.xsN1(), jb
    }

    function xb(bb) {
      if (void 0 !== jb) return jb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ub = Sb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Db(new WebAssembly.Instance(bb, ub), bb)
    }
    async function zb(bb) {
      if (void 0 !== jb) return jb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ub = Sb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: hb,
        module: Bb
      } = await async function(bb, ub) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ub)
          } catch (hb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw hb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", hb)
          }
          const Bb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Bb, ub)
        } {
          const hb = await WebAssembly.instantiate(bb, ub);
          return hb instanceof WebAssembly.Instance ? {
            instance: hb,
            module: bb
          } : hb
        }
      }(await bb, ub);
      return Db(hb, Bb)
    }

    function gb() {
      jb = void 0, rb = void 0, Zb = null, pb = new Array(1024).fill(void 0), pb.push(void 0, null, !0, !1), ob = pb.length
    }
    var ib = hb(2688),
      vb = hb(6358);
    const tb = 2;
    class Jb extends Error {
      stage;
      constructor(bb, ub) {
        super((0, ib.A)(bb, ub), {
          cause: ub
        }), this.name = "BloxdRecorderWasmError", this.stage = bb
      }
    }
    let eb = null;
    const Nb = function(bb) {
      let ub = null,
        hb = null,
        Bb = null,
        Ob = null;
      const Gb = async () => {
        let hb = null;
        try {
          return hb = ub ??= (0, ib.C)(bb.url(), (0, vb.d)(bb.name)), await hb
        } catch (Bb) {
          throw ub === hb && (ub = null), bb.error((0, ib.K)(Bb), Bb)
        }
      };
      return {
        load: () => {
          if (Ob) return Promise.reject(Ob);
          if (hb) return hb;
          const ub = (async () => {
            const ub = await Gb();
            try {
              await bb.init(ub)
            } catch (hb) {
              throw bb.error("instantiate", hb)
            }
            return bb.bindings
          })();
          hb = ub, Bb = ub;
          const Ub = () => {
            Bb === ub && (Bb = null)
          };
          return ub.then(Ub, (() => {
            Ub(), hb === ub && (hb = null)
          })), ub
        },
        prefetch: async () => {
          Ob || hb || await Gb()
        },
        markTrapped: ub => (Ob ??= bb.error("call", ub), Ob),
        unload: () => {
          Ob || !bb.reset || Bb || (bb.reset(), hb = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new hb.U(hb(60918)),
      init: async bb => {
        await zb({
          module_or_path: bb
        }), eb = Yb()
      },
      bindings: Bb,
      error: (bb, ub) => new Jb(bb, ub),
      reset: () => {
        gb(), eb = null
      }
    });

    function sb() {
      return Nb.load()
    }

    function Mb() {
      return Nb.prefetch()
    }

    function mb(bb) {
      return Nb.markTrapped(bb)
    }

    function Ib() {
      Nb.unload()
    }

    function Pb() {
      return eb?.buffer.byteLength ?? 0
    }
  },
  6358: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(2688);
    const Ob = {
      bloxd_wasm: () => "3b91fa895928d8c20ebf400bda89ab044ad7bc6b888817ddf1222f7c57feeb9c",
      bloxd_wasm_client: () => "f8fce5947f2faa12e1ab09590f42ab320ab7503a3faa2b92511d0c8b5961045e",
      bloxd_wasm_workers: () => "97913e9056cda526c2dc8ccbbbd9e745eb1ac954c2c44cba6c7873fc1747a23c",
      bloxd_wasm_models: () => "c8d7121eb692beab251440772c33579d323be2e080195d116336055405d68c6b",
      bloxd_wasm_webgpu: () => "19061547ec948fcba5a47bac197b276e7d2b5e59be20d2aaff03a98029648a35",
      bloxd_wasm_webgl: () => "368a1de884ceea9044ed27e803110479e191485e8237c1d5316b43218c30116d",
      bloxd_wasm_webgl1: () => "5a9131e0f012a1be4913bc2fcccdbb8d2fa9e6060e384fce80f6463266a8c00a",
      bloxd_wasm_replay: () => "2682ec56a7ca06252a5e84c7b45e4853cfe028e5944d11f804b256bb15d9e0af",
      bloxd_wasm_recorder: () => "4b50bdb382eedb09ed05f5762ed2c0dc0736e9ab3343761cacc34ca07ef84644",
      bloxd_wasm_anim: () => "e9760697ea51a31a4ccfa90e459f7ee2ef0e9d3e3212f5f9bdc92eccc7a75ce1",
      bloxd_wasm_textures: () => "435e32982ee604bfb0a866d92a90abb139a38b2cd93d29123f4edbda32e26fc0",
      bloxd_wasm_shader_pack: () => "752c76e3c73a60bbf217aaaf2e581c1eeace9b5713c141db27df430f66cfe32d"
    };
    var Gb = hb(4466);

    function Ub(bb) {
      const ub = Object.prototype.hasOwnProperty.call(Ob, bb) ? Ob[bb]() : void 0;
      if (void 0 !== ub) return {
        sha256: ub,
        onMismatch: Gb.v
      };
      throw new Bb.i(`${bb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);