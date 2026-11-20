export const id = 62;
export const ids = [62];
export const modules = {
  61446: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_recorder_bg.3117481d82752fd072e8.wasm"
  },
  61439: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdRecorderWasmError: () => Tq,
      RECORDER_MODULE_ID: () => Mq,
      loadRecorderModule: () => pq,
      markRecorderTrapped: () => Lq,
      prefetchRecorderModule: () => Gq,
      recorderMemoryBytes: () => kq,
      unloadRecorderModule: () => Jq
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      cOq: () => lq,
      Imq: () => iq,
      Ku: () => Oq,
      default: () => bq,
      initSync: () => nq,
      Cu: () => mq,
      xOq: () => xq,
      qOq: () => Aq
    });
    class lq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        rq.hrUH(qq, 0)
      }
      busy() {
        return 0 !== rq.tLzM(this.__wbg_ptr)
      }
      command(qq, Eq) {
        return 0 !== rq.g8AJ(this.__wbg_ptr, qq, Eq)
      }
      EOq(qq) {
        return rq.Rq4R(this.__wbg_ptr, qq) >>> 0
      }
      Dlq() {
        rq.vntq(this.__wbg_ptr)
      }
      elq() {
        return rq.IMz5(this.__wbg_ptr) >>> 0
      }
      Ilq() {
        return rq.G7rY(this.__wbg_ptr)
      }
      lOq() {
        return rq.zcHe(this.__wbg_ptr) >>> 0
      }
      OOq() {
        return rq.Qs5O(this.__wbg_ptr) >>> 0
      }
      feed(qq) {
        return rq.RFGK(this.__wbg_ptr, qq) >>> 0
      }
      constructor() {
        const qq = rq.xfFa();
        return this.__wbg_ptr = qq, uq.register(this, this.__wbg_ptr, this), this
      }
      YOq() {
        return rq.hq5I(this.__wbg_ptr) >>> 0
      }
      emq() {
        return rq.KRup(this.__wbg_ptr) >>> 0
      }
      Clq(qq, Eq, gq) {
        return 0 !== rq.e7O6(this.__wbg_ptr, qq, Eq, gq)
      }
      stage(qq) {
        return rq.OJBy(this.__wbg_ptr, qq) >>> 0
      }
      step() {
        return rq.gLzk(this.__wbg_ptr) >>> 0
      }
    }

    function Oq(qq, Eq) {
      const gq = function(qq, Eq, gq) {
          if (void 0 === gq) {
            const gq = Qq.encode(qq),
              Yq = Eq(gq.length, 1) >>> 0;
            return aq().subarray(Yq, Yq + gq.length).set(gq), vq = gq.length, Yq
          }
          let Yq = qq.length,
            lq = Eq(Yq, 1) >>> 0;
          const Oq = aq();
          let mq = 0;
          for (; mq < Yq; mq++) {
            const Eq = qq.charCodeAt(mq);
            if (Eq > 127) break;
            Oq[lq + mq] = Eq
          }
          if (mq !== Yq) {
            0 !== mq && (qq = qq.slice(mq)), lq = gq(lq, Yq, Yq = mq + 3 * qq.length, 1) >>> 0;
            const Eq = aq().subarray(lq + mq, lq + Yq);
            mq += Qq.encodeInto(qq, Eq).written, lq = gq(lq, Yq, mq, 1) >>> 0
          }
          return vq = mq, lq
        }(qq, rq.v3Eb, rq.ukv0),
        Yq = vq,
        lq = rq.RZkX(gq, Yq, Eq);
      if (lq[1]) throw jq(lq[0])
    }

    function mq() {
      rq.epqW()
    }

    function xq() {
      return rq.EbJF() >>> 0
    }

    function Aq() {
      return jq(rq.ErG5())
    }

    function cq() {
      return {
        __proto__: null,
        djMj: {
          __proto__: null,
          sU3c: function(qq, Eq) {
            return Bq(Error(Wq(qq, Eq)))
          },
          OYKd: function() {
            return Bq(rq.memory)
          },
          M6Sf: function(qq, Eq) {
            throw new Error(Wq(qq, Eq))
          },
          T69r: function(qq, Eq) {
            console.error(Wq(qq, Eq))
          },
          ddYf: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (lq.prototype[Symbol.dispose] = lq.prototype.free);
    const uq = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((qq => rq?.__wbg_recordermodule_free(qq, 1)));

    function Bq(qq) {
      dq === Vq.length && Vq.push(Vq.length + 1);
      const Eq = dq;
      return dq = Vq[Eq], Vq[Eq] = qq, Eq
    }

    function Wq(qq, Eq) {
      return function(qq, Eq) {
        Pq += Eq, Pq >= oq && (Hq = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Hq.decode(), Pq = Eq);
        return Hq.decode(aq().subarray(qq, qq + Eq))
      }(qq >>> 0, Eq)
    }
    let Nq = null;

    function aq() {
      return null !== Nq && 0 !== Nq.byteLength || (Nq = new Uint8Array(rq.memory.buffer)), Nq
    }
    let Vq = new Array(1024).fill(void 0);
    Vq.push(void 0, null, !0, !1);
    let dq = Vq.length;

    function jq(qq) {
      const Eq = function(qq) {
        return Vq[qq]
      }(qq);
      return function(qq) {
        qq < 1028 || (Vq[qq] = dq, dq = qq)
      }(qq), Eq
    }
    let Hq = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Hq.decode();
    const oq = 2146435072;
    let Pq = 0;
    const Qq = new TextEncoder;
    "encodeInto" in Qq || (Qq.encodeInto = function(qq, Eq) {
      const gq = Qq.encode(qq);
      return Eq.set(gq), {
        read: qq.length,
        written: gq.length
      }
    });
    let yq, tq, rq, vq = 0;

    function hq(qq, Eq) {
      return tq = qq, rq = qq.exports, yq = Eq, Nq = null, rq.LLwF(), rq
    }

    function nq(qq) {
      if (void 0 !== rq) return rq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module: qq
      } = qq) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eq = cq();
      qq instanceof WebAssembly.Module || (qq = new WebAssembly.Module(qq));
      return hq(new WebAssembly.Instance(qq, Eq), qq)
    }
    async function bq(qq) {
      if (void 0 !== rq) return rq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module_or_path: qq
      } = qq) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eq = cq();
      ("string" === typeof qq || "function" === typeof Request && qq instanceof Request || "function" === typeof URL && qq instanceof URL) && (qq = fetch(qq));
      const {
        instance: gq,
        module: Yq
      } = await async function(qq, Eq) {
        if ("function" === typeof Response && qq instanceof Response) {
          if (!qq.ok) throw new Error(`failed to fetch Wasm: ${qq.status} ${qq.statusText} fetching '${qq.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(qq, Eq)
          } catch (gq) {
            if (! function(qq) {
                switch (qq) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(qq.type) || "application/wasm" === qq.headers.get("Content-Type")) throw gq;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", gq)
          }
          const Yq = await qq.arrayBuffer();
          return await WebAssembly.instantiate(Yq, Eq)
        } {
          const gq = await WebAssembly.instantiate(qq, Eq);
          return gq instanceof WebAssembly.Instance ? {
            instance: gq,
            module: qq
          } : gq
        }
      }(await qq, Eq);
      return hq(gq, Yq)
    }

    function iq() {
      rq = void 0, tq = void 0, Nq = null, Vq = new Array(1024).fill(void 0), Vq.push(void 0, null, !0, !1), dq = Vq.length
    }
    var Zq = gq(2805),
      fq = gq(6500);
    const Mq = 2;
    class Tq extends Error {
      stage;
      constructor(qq, Eq) {
        super((0, Zq.M)(qq, Eq), {
          cause: Eq
        }), this.name = "BloxdRecorderWasmError", this.stage = qq
      }
    }
    let zq = null;
    const Sq = function(qq) {
      let Eq = null,
        gq = null,
        Yq = null,
        lq = null;
      const Oq = async () => {
        let gq = null;
        try {
          return gq = Eq ??= (0, Zq.N)(qq.url(), (0, fq.d)(qq.name)), await gq
        } catch (Yq) {
          throw Eq === gq && (Eq = null), qq.error((0, Zq.R)(Yq), Yq)
        }
      };
      return {
        load: () => {
          if (lq) return Promise.reject(lq);
          if (gq) return gq;
          const Eq = (async () => {
            const Eq = await Oq();
            try {
              await qq.init(Eq)
            } catch (gq) {
              throw qq.error("instantiate", gq)
            }
            return qq.bindings
          })();
          gq = Eq, Yq = Eq;
          const mq = () => {
            Yq === Eq && (Yq = null)
          };
          return Eq.then(mq, (() => {
            mq(), gq === Eq && (gq = null)
          })), Eq
        },
        prefetch: async () => {
          lq || gq || await Oq()
        },
        markTrapped: Eq => (lq ??= qq.error("call", Eq), lq),
        unload: () => {
          lq || !qq.reset || Yq || (qq.reset(), gq = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new gq.U(gq(61446)),
      init: async qq => {
        await bq({
          module_or_path: qq
        }), zq = Aq()
      },
      bindings: Yq,
      error: (qq, Eq) => new Tq(qq, Eq),
      reset: () => {
        iq(), zq = null
      }
    });

    function pq() {
      return Sq.load()
    }

    function Gq() {
      return Sq.prefetch()
    }

    function Lq(qq) {
      return Sq.markTrapped(qq)
    }

    function Jq() {
      Sq.unload()
    }

    function kq() {
      return zq?.buffer.byteLength ?? 0
    }
  },
  6500: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(2805);
    const lq = {
      bloxd_wasm: () => "6d78896f037d6c3dd2ec91f53e012efc14d4c7478e36fc57749ae14be1df3096",
      bloxd_wasm_client: () => "132c78fe4d5d985a39aef9cb5338e6d40926f1581f341ef925ca4f1b873982cf",
      bloxd_wasm_workers: () => "9fa00e1e679c4b317e391d15a0e20bcce764b10ac53881c003b3245b86db6cf5",
      bloxd_wasm_models: () => "9dd9f9fb8ff600ad7045604d8a17da38690a8b012f1e8b7f578a1a671baf7185",
      bloxd_wasm_webgpu: () => "72b5e9034b38cfcfd84eb4e4b1607ea3fedbb7078518766dd27ac431c9922848",
      bloxd_wasm_webgl: () => "a5cefc5390d0e4cf10eab192e6d4403fc337fb14cfe0e3164c3430a7c721595d",
      bloxd_wasm_webgl1: () => "3cb76bb92c5501eb795864d943ed2c567c8b5ff7777cd5f2c08b0940197979c9",
      bloxd_wasm_replay: () => "f8132694ecb3c07d332a67ad7dab19d035d58dc2cea1ddbf2ca6dc7ec556cd0c",
      bloxd_wasm_recorder: () => "166b4da1bfa19d1d90b1f2d66b23de17c858096a88eb92fe87a8c9e58f77c3bb",
      bloxd_wasm_anim: () => "11dd5bcc2c7323ae0a5b9e4cd8b8c81d457a9ea85d6e339c6454ed1bb80a27c4",
      bloxd_wasm_textures: () => "2ba4917ae218104948db870865715dacd8571878aedd4fece740312291892fac",
      bloxd_wasm_shader_pack: () => "dfb97693642c8a1ee7219f62c2557fcfb1c20ef622361f5b18389c544478cae6"
    };
    var Oq = gq(4524);

    function mq(qq) {
      const Eq = Object.prototype.hasOwnProperty.call(lq, qq) ? lq[qq]() : void 0;
      if (void 0 !== Eq) return {
        sha256: Eq,
        onMismatch: Oq.C
      };
      throw new Yq.j(`${qq} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);