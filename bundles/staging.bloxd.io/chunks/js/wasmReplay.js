export const id = 63;
export const ids = [63];
export const modules = {
  60931: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_replay_bg.e6bdd8250ca08175aff3.wasm"
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
  },
  60922: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      BloxdReplayWasmError: () => Jb,
      loadReplayModule: () => Pb,
      markReplayTrapped: () => yb,
      replayMemoryBytes: () => Eb,
      unloadReplayModule: () => qb
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      ROb: () => Ob,
      MUb: () => ib,
      Ea: () => Gb,
      default: () => gb,
      initSync: () => zb,
      ya: () => Ub,
      kOb: () => Lb,
      bGb: () => Yb
    });
    class Ob {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ab.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        nb.rhuJ(bb, 0)
      }
      OGb(bb, ub, hb, Bb, Ob, Gb) {
        nb.QDez(this.__wbg_ptr, bb, ub, hb, Bb, Ob, Gb)
      }
      close() {
        nb.zUgM(this.__wbg_ptr)
      }
      crop(bb, ub) {
        nb.J97x(this.__wbg_ptr, bb, ub)
      }
      LGb(bb, ub) {
        nb.H4bm(this.__wbg_ptr, bb, ub)
      }
      SGb() {
        return nb.yr2O(this.__wbg_ptr) >>> 0
      }
      YGb() {
        return nb.BNRm(this.__wbg_ptr) >>> 0
      }
      aGb() {
        return nb.Hm8W(this.__wbg_ptr) >>> 0
      }
      HGb() {
        return nb.EJeL(this.__wbg_ptr) >>> 0
      }
      UGb(bb, ub) {
        nb.nFi0(this.__wbg_ptr, bb, ub)
      }
      constructor() {
        const bb = nb.ZuN8();
        return this.__wbg_ptr = bb, ab.register(this, this.__wbg_ptr, this), this
      }
      open() {
        nb.sjsQ(this.__wbg_ptr)
      }
      yOb() {
        return nb.RKhx(this.__wbg_ptr) >>> 0
      }
      pause() {
        nb.mbVU(this.__wbg_ptr)
      }
      play() {
        nb.b9fx(this.__wbg_ptr)
      }
      save() {
        return nb.WiWu(this.__wbg_ptr) >>> 0
      }
      wGb() {
        nb.LJzW(this.__wbg_ptr)
      }
      seek(bb, ub) {
        nb.Gczx(this.__wbg_ptr, bb, ub)
      }
      XGb(bb) {
        nb.d4oC(this.__wbg_ptr, bb)
      }
      GGb(bb, ub) {
        const hb = function(bb, ub) {
            const hb = ub(8 * bb.length, 8) >>> 0;
            return function() {
              null !== wb && 0 !== wb.byteLength || (wb = new Float64Array(nb.memory.buffer));
              return wb
            }().set(bb, hb / 8), Db = bb.length, hb
          }(ub, nb.zpYj),
          Bb = Db;
        nb.b32F(this.__wbg_ptr, bb, hb, Bb)
      }
      BGb(bb, ub) {
        nb.gQfc(this.__wbg_ptr, bb, ub)
      }
      ZGb(bb) {
        nb.RVLA(this.__wbg_ptr, bb)
      }
      stage(bb) {
        return nb.ZeKS(this.__wbg_ptr, bb) >>> 0
      }
      step(bb, ub) {
        return nb.Kkg5(this.__wbg_ptr, bb, ub) >>> 0
      }
    }

    function Gb(bb, ub) {
      const hb = function(bb, ub, hb) {
          if (void 0 === hb) {
            const hb = db.encode(bb),
              Bb = ub(hb.length, 1) >>> 0;
            return pb().subarray(Bb, Bb + hb.length).set(hb), Db = hb.length, Bb
          }
          let Bb = bb.length,
            Ob = ub(Bb, 1) >>> 0;
          const Gb = pb();
          let Ub = 0;
          for (; Ub < Bb; Ub++) {
            const ub = bb.charCodeAt(Ub);
            if (ub > 127) break;
            Gb[Ob + Ub] = ub
          }
          if (Ub !== Bb) {
            0 !== Ub && (bb = bb.slice(Ub)), Ob = hb(Ob, Bb, Bb = Ub + 3 * bb.length, 1) >>> 0;
            const ub = pb().subarray(Ob + Ub, Ob + Bb);
            Ub += db.encodeInto(bb, ub).written, Ob = hb(Ob, Bb, Ub, 1) >>> 0
          }
          return Db = Ub, Ob
        }(bb, nb.zpYj, nb.Dvv1),
        Bb = Db,
        Ob = nb.Zpk1(hb, Bb, ub);
      if (Ob[1]) throw lb(Ob[0])
    }

    function Ub() {
      nb.FtcI()
    }

    function Lb() {
      return nb.VjNf() >>> 0
    }

    function Yb() {
      return lb(nb.vbFe())
    }

    function Sb() {
      return {
        __proto__: null,
        sxyZ: {
          __proto__: null,
          zxEP: function(bb, ub) {
            return Hb(Error(Zb(bb, ub)))
          },
          vqlc: function() {
            return Hb(nb.memory)
          },
          bUn8: function(bb, ub) {
            throw new Error(Zb(bb, ub))
          },
          g6Mg: function(bb, ub) {
            console.error(Zb(bb, ub))
          },
          njVw: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ob.prototype[Symbol.dispose] = Ob.prototype.free);
    const ab = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => nb?.__wbg_replaymodule_free(bb, 1)));

    function Hb(bb) {
      Ab === ob.length && ob.push(ob.length + 1);
      const ub = Ab;
      return Ab = ob[ub], ob[ub] = bb, ub
    }
    let wb = null;

    function Zb(bb, ub) {
      return function(bb, ub) {
        Cb += ub, Cb >= Wb && (Kb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Kb.decode(), Cb = ub);
        return Kb.decode(pb().subarray(bb, bb + ub))
      }(bb >>> 0, ub)
    }
    let Xb = null;

    function pb() {
      return null !== Xb && 0 !== Xb.byteLength || (Xb = new Uint8Array(nb.memory.buffer)), Xb
    }
    let ob = new Array(1024).fill(void 0);
    ob.push(void 0, null, !0, !1);
    let Ab = ob.length;

    function lb(bb) {
      const ub = function(bb) {
        return ob[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (ob[bb] = Ab, Ab = bb)
      }(bb), ub
    }
    let Kb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Kb.decode();
    const Wb = 2146435072;
    let Cb = 0;
    const db = new TextEncoder;
    "encodeInto" in db || (db.encodeInto = function(bb, ub) {
      const hb = db.encode(bb);
      return ub.set(hb), {
        read: bb.length,
        written: hb.length
      }
    });
    let rb, jb, nb, Db = 0;

    function xb(bb, ub) {
      return jb = bb, nb = bb.exports, rb = ub, wb = null, Xb = null, nb.qK8i(), nb
    }

    function zb(bb) {
      if (void 0 !== nb) return nb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ub = Sb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return xb(new WebAssembly.Instance(bb, ub), bb)
    }
    async function gb(bb) {
      if (void 0 !== nb) return nb;
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
      return xb(hb, Bb)
    }

    function ib() {
      nb = void 0, jb = void 0, wb = null, Xb = null, ob = new Array(1024).fill(void 0), ob.push(void 0, null, !0, !1), Ab = ob.length
    }
    var vb = hb(2688),
      tb = hb(6358);
    class Jb extends Error {
      stage;
      constructor(bb, ub) {
        super((0, vb.A)(bb, ub), {
          cause: ub
        }), this.name = "BloxdReplayWasmError", this.stage = bb
      }
    }
    let eb = null,
      Nb = null,
      sb = Promise.resolve(),
      Mb = 0,
      mb = null,
      Ib = null;

    function Pb() {
      if (Ib) return Promise.reject(Ib);
      if (Nb) return Nb;
      const bb = Mb,
        ub = sb,
        Ob = (async () => {
          let Ob;
          await ub, eb ??= (0, vb.C)(new hb.U(hb(60931)), (0, tb.d)("bloxd_wasm_replay"));
          try {
            Ob = await eb
          } catch (Gb) {
            throw eb = null, new Jb((0, vb.K)(Gb), Gb)
          }
          if (bb !== Mb) throw new Jb("instantiate", new Error("unloaded while loading"));
          try {
            await gb({
              module_or_path: Ob
            })
          } catch (Gb) {
            throw ib(), new Jb("instantiate", Gb)
          }
          if (bb !== Mb) throw ib(), new Jb("instantiate", new Error("unloaded while loading"));
          return mb = Yb(), Bb
        })();
      return Nb = Ob, sb = Ob.catch((() => {})), Ob.catch((() => {
        Nb === Ob && (Nb = null)
      })), Ob
    }

    function qb() {
      Ib || Vb()
    }

    function Eb() {
      return mb?.buffer.byteLength ?? 0
    }

    function yb(bb) {
      return Ib || (Ib = new Jb("call", bb), Vb()), Ib
    }

    function Vb() {
      Mb++, ib(), Nb = null, mb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);