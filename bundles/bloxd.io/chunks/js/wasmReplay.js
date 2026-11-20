export const id = 63;
export const ids = [63];
export const modules = {
  61457: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_replay_bg.70b4068ae185c9fabaff.wasm"
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
  },
  61454: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdReplayWasmError: () => Tq,
      loadReplayModule: () => kq,
      markReplayTrapped: () => Fq,
      replayMemoryBytes: () => Uq,
      unloadReplayModule: () => Rq
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      BOq: () => lq,
      Imq: () => Zq,
      Ku: () => Oq,
      default: () => iq,
      initSync: () => bq,
      Cu: () => mq,
      xOq: () => xq,
      WOq: () => Aq
    });
    class lq {
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, uq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        vq.gZX9(qq, 0)
      }
      dOq(qq, Eq, gq, Yq, lq, Oq) {
        vq.MoEW(this.__wbg_ptr, qq, Eq, gq, Yq, lq, Oq)
      }
      close() {
        vq.NDjT(this.__wbg_ptr)
      }
      crop(qq, Eq) {
        vq.jHrd(this.__wbg_ptr, qq, Eq)
      }
      oOq(qq, Eq) {
        vq.Qw9v(this.__wbg_ptr, qq, Eq)
      }
      QOq() {
        return vq.Ftcr(this.__wbg_ptr) >>> 0
      }
      POq() {
        return vq.T5F7(this.__wbg_ptr) >>> 0
      }
      yOq() {
        return vq.tclq(this.__wbg_ptr) >>> 0
      }
      tOq() {
        return vq.jNvn(this.__wbg_ptr) >>> 0
      }
      HOq(qq, Eq) {
        vq.bgJK(this.__wbg_ptr, qq, Eq)
      }
      constructor() {
        const qq = vq.yVmz();
        return this.__wbg_ptr = qq, uq.register(this, this.__wbg_ptr, this), this
      }
      open() {
        vq.rJhc(this.__wbg_ptr)
      }
      YOq() {
        return vq.TRnV(this.__wbg_ptr) >>> 0
      }
      pause() {
        vq.XsLm(this.__wbg_ptr)
      }
      play() {
        vq.IbV2(this.__wbg_ptr)
      }
      save() {
        return vq.BiTh(this.__wbg_ptr) >>> 0
      }
      rOq() {
        vq.hkaw(this.__wbg_ptr)
      }
      seek(qq, Eq) {
        vq.s7HY(this.__wbg_ptr, qq, Eq)
      }
      hOq(qq) {
        vq.VNsy(this.__wbg_ptr, qq)
      }
      jOq(qq, Eq) {
        const gq = function(qq, Eq) {
            const gq = Eq(8 * qq.length, 8) >>> 0;
            return function() {
              null !== Wq && 0 !== Wq.byteLength || (Wq = new Float64Array(vq.memory.buffer));
              return Wq
            }().set(qq, gq / 8), hq = qq.length, gq
          }(Eq, vq.TM1c),
          Yq = hq;
        vq.b2wm(this.__wbg_ptr, qq, gq, Yq)
      }
      VOq(qq, Eq) {
        vq.eE3w(this.__wbg_ptr, qq, Eq)
      }
      vOq(qq) {
        vq.a9cJ(this.__wbg_ptr, qq)
      }
      stage(qq) {
        return vq.KLmO(this.__wbg_ptr, qq) >>> 0
      }
      step(qq, Eq) {
        return vq.zK6l(this.__wbg_ptr, qq, Eq) >>> 0
      }
    }

    function Oq(qq, Eq) {
      const gq = function(qq, Eq, gq) {
          if (void 0 === gq) {
            const gq = yq.encode(qq),
              Yq = Eq(gq.length, 1) >>> 0;
            return Vq().subarray(Yq, Yq + gq.length).set(gq), hq = gq.length, Yq
          }
          let Yq = qq.length,
            lq = Eq(Yq, 1) >>> 0;
          const Oq = Vq();
          let mq = 0;
          for (; mq < Yq; mq++) {
            const Eq = qq.charCodeAt(mq);
            if (Eq > 127) break;
            Oq[lq + mq] = Eq
          }
          if (mq !== Yq) {
            0 !== mq && (qq = qq.slice(mq)), lq = gq(lq, Yq, Yq = mq + 3 * qq.length, 1) >>> 0;
            const Eq = Vq().subarray(lq + mq, lq + Yq);
            mq += yq.encodeInto(qq, Eq).written, lq = gq(lq, Yq, mq, 1) >>> 0
          }
          return hq = mq, lq
        }(qq, vq.TM1c, vq.js0g),
        Yq = hq,
        lq = vq.n1B7(gq, Yq, Eq);
      if (lq[1]) throw Hq(lq[0])
    }

    function mq() {
      vq.jgJG()
    }

    function xq() {
      return vq.mOlN() >>> 0
    }

    function Aq() {
      return Hq(vq.d3rV())
    }

    function cq() {
      return {
        __proto__: null,
        BhHJ: {
          __proto__: null,
          kHLm: function(qq, Eq) {
            return Bq(Error(Nq(qq, Eq)))
          },
          CDYW: function() {
            return Bq(vq.memory)
          },
          tUDO: function(qq, Eq) {
            throw new Error(Nq(qq, Eq))
          },
          MxRl: function(qq, Eq) {
            console.error(Nq(qq, Eq))
          },
          Z9rq: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (lq.prototype[Symbol.dispose] = lq.prototype.free);
    const uq = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((qq => vq?.__wbg_replaymodule_free(qq, 1)));

    function Bq(qq) {
      jq === dq.length && dq.push(dq.length + 1);
      const Eq = jq;
      return jq = dq[Eq], dq[Eq] = qq, Eq
    }
    let Wq = null;

    function Nq(qq, Eq) {
      return function(qq, Eq) {
        Qq += Eq, Qq >= Pq && (oq = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), oq.decode(), Qq = Eq);
        return oq.decode(Vq().subarray(qq, qq + Eq))
      }(qq >>> 0, Eq)
    }
    let aq = null;

    function Vq() {
      return null !== aq && 0 !== aq.byteLength || (aq = new Uint8Array(vq.memory.buffer)), aq
    }
    let dq = new Array(1024).fill(void 0);
    dq.push(void 0, null, !0, !1);
    let jq = dq.length;

    function Hq(qq) {
      const Eq = function(qq) {
        return dq[qq]
      }(qq);
      return function(qq) {
        qq < 1028 || (dq[qq] = jq, jq = qq)
      }(qq), Eq
    }
    let oq = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    oq.decode();
    const Pq = 2146435072;
    let Qq = 0;
    const yq = new TextEncoder;
    "encodeInto" in yq || (yq.encodeInto = function(qq, Eq) {
      const gq = yq.encode(qq);
      return Eq.set(gq), {
        read: qq.length,
        written: gq.length
      }
    });
    let tq, rq, vq, hq = 0;

    function nq(qq, Eq) {
      return rq = qq, vq = qq.exports, tq = Eq, Wq = null, aq = null, vq.IALG(), vq
    }

    function bq(qq) {
      if (void 0 !== vq) return vq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module: qq
      } = qq) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eq = cq();
      qq instanceof WebAssembly.Module || (qq = new WebAssembly.Module(qq));
      return nq(new WebAssembly.Instance(qq, Eq), qq)
    }
    async function iq(qq) {
      if (void 0 !== vq) return vq;
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
      return nq(gq, Yq)
    }

    function Zq() {
      vq = void 0, rq = void 0, Wq = null, aq = null, dq = new Array(1024).fill(void 0), dq.push(void 0, null, !0, !1), jq = dq.length
    }
    var fq = gq(2805),
      Mq = gq(6500);
    class Tq extends Error {
      stage;
      constructor(qq, Eq) {
        super((0, fq.M)(qq, Eq), {
          cause: Eq
        }), this.name = "BloxdReplayWasmError", this.stage = qq
      }
    }
    let zq = null,
      Sq = null,
      pq = Promise.resolve(),
      Gq = 0,
      Lq = null,
      Jq = null;

    function kq() {
      if (Jq) return Promise.reject(Jq);
      if (Sq) return Sq;
      const qq = Gq,
        Eq = pq,
        lq = (async () => {
          let lq;
          await Eq, zq ??= (0, fq.N)(new gq.U(gq(61457)), (0, Mq.d)("bloxd_wasm_replay"));
          try {
            lq = await zq
          } catch (Oq) {
            throw zq = null, new Tq((0, fq.R)(Oq), Oq)
          }
          if (qq !== Gq) throw new Tq("instantiate", new Error("unloaded while loading"));
          try {
            await iq({
              module_or_path: lq
            })
          } catch (Oq) {
            throw Zq(), new Tq("instantiate", Oq)
          }
          if (qq !== Gq) throw Zq(), new Tq("instantiate", new Error("unloaded while loading"));
          return Lq = Aq(), Yq
        })();
      return Sq = lq, pq = lq.catch((() => {})), lq.catch((() => {
        Sq === lq && (Sq = null)
      })), lq
    }

    function Rq() {
      Jq || sq()
    }

    function Uq() {
      return Lq?.buffer.byteLength ?? 0
    }

    function Fq(qq) {
      return Jq || (Jq = new Tq("call", qq), sq()), Jq
    }

    function sq() {
      Gq++, Zq(), Sq = null, Lq = null
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);