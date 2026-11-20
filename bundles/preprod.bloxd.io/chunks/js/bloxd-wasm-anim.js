export const id = 5;
export const ids = [5];
export const modules = {
  43039: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_anim_bg.e877f14ffbaecd066601.wasm"
  },
  43032: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BloxdAnimWasmError: () => zq,
      compileAnimationPackInWasm: () => Lq
    });
    var Yq = {};

    function lq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = Hq(qq, nq.tSYw),
        xq = bq,
        Aq = Hq(Eq, nq.tSYw),
        cq = bq,
        uq = Hq(gq, nq.tSYw),
        Bq = bq,
        Wq = Hq(Yq, nq.tSYw),
        aq = bq,
        Vq = Hq(lq, nq.tSYw),
        dq = bq;
      var oq = jq(Oq) ? 0 : function(qq, Eq) {
          const gq = Eq(1 * qq.length, 1) >>> 0;
          return Nq().set(qq, gq / 1), bq = qq.length, gq
        }(Oq, nq.tSYw),
        Qq = bq;
      const yq = nq.fbAU(mq, xq, Aq, cq, uq, Bq, Wq, aq, Vq, dq, oq, Qq);
      if (yq[3]) throw Pq(yq[2]);
      var tq, rq, vq = (tq = yq[0], rq = yq[1], tq >>>= 0, Nq().subarray(tq / 1, tq / 1 + rq)).slice();
      return nq.NJFj(yq[0], 1 * yq[1], 1), vq
    }

    function Oq(qq, Eq) {
      const gq = oq(qq, nq.tSYw, nq.j6Cc),
        Yq = bq,
        lq = nq.zrWh(gq, Yq, Eq);
      if (lq[1]) throw Pq(lq[0])
    }

    function mq() {
      nq.d7Th()
    }

    function xq() {
      return {
        __proto__: null,
        cVIT: {
          __proto__: null,
          EvN0: function(qq, Eq) {
            return Aq(Error(Bq(qq, Eq)))
          },
          GJzs: function(qq, Eq) {
            const gq = aq(Eq),
              Yq = "string" === typeof gq ? gq : void 0;
            var lq = jq(Yq) ? 0 : oq(Yq, nq.tSYw, nq.j6Cc),
              Oq = bq;
            uq().setInt32(qq + 4, Oq, !0), uq().setInt32(qq + 0, lq, !0)
          },
          PBxs: function(qq, Eq) {
            throw new Error(Bq(qq, Eq))
          },
          puT8: function(qq, Eq) {
            console.error(Bq(qq, Eq))
          },
          F1HB: function(qq) {
            Pq(qq)
          }
        }
      }
    }

    function Aq(qq) {
      dq === Vq.length && Vq.push(Vq.length + 1);
      const Eq = dq;
      return dq = Vq[Eq], Vq[Eq] = qq, Eq
    }
    gq.r(Yq), gq.d(Yq, {
      Xmq: () => lq,
      Ku: () => Oq,
      default: () => fq,
      initSync: () => Zq,
      Cu: () => mq
    });
    let cq = null;

    function uq() {
      return (null === cq || !0 === cq.buffer.detached || void 0 === cq.buffer.detached && cq.buffer !== nq.memory.buffer) && (cq = new DataView(nq.memory.buffer)), cq
    }

    function Bq(qq, Eq) {
      return function(qq, Eq) {
        tq += Eq, tq >= yq && (Qq = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Qq.decode(), tq = Eq);
        return Qq.decode(Nq().subarray(qq, qq + Eq))
      }(qq >>> 0, Eq)
    }
    let Wq = null;

    function Nq() {
      return null !== Wq && 0 !== Wq.byteLength || (Wq = new Uint8Array(nq.memory.buffer)), Wq
    }

    function aq(qq) {
      return Vq[qq]
    }
    let Vq = new Array(1024).fill(void 0);
    Vq.push(void 0, null, !0, !1);
    let dq = Vq.length;

    function jq(qq) {
      return void 0 === qq || null === qq
    }

    function Hq(qq, Eq) {
      const gq = Eq(4 * qq.length, 4) >>> 0,
        Yq = uq();
      for (let lq = 0; lq < qq.length; lq++) Yq.setUint32(gq + 4 * lq, Aq(qq[lq]), !0);
      return bq = qq.length, gq
    }

    function oq(qq, Eq, gq) {
      if (void 0 === gq) {
        const gq = rq.encode(qq),
          Yq = Eq(gq.length, 1) >>> 0;
        return Nq().subarray(Yq, Yq + gq.length).set(gq), bq = gq.length, Yq
      }
      let Yq = qq.length,
        lq = Eq(Yq, 1) >>> 0;
      const Oq = Nq();
      let mq = 0;
      for (; mq < Yq; mq++) {
        const Eq = qq.charCodeAt(mq);
        if (Eq > 127) break;
        Oq[lq + mq] = Eq
      }
      if (mq !== Yq) {
        0 !== mq && (qq = qq.slice(mq)), lq = gq(lq, Yq, Yq = mq + 3 * qq.length, 1) >>> 0;
        const Eq = Nq().subarray(lq + mq, lq + Yq);
        mq += rq.encodeInto(qq, Eq).written, lq = gq(lq, Yq, mq, 1) >>> 0
      }
      return bq = mq, lq
    }

    function Pq(qq) {
      const Eq = aq(qq);
      return function(qq) {
        qq < 1028 || (Vq[qq] = dq, dq = qq)
      }(qq), Eq
    }
    let Qq = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Qq.decode();
    const yq = 2146435072;
    let tq = 0;
    const rq = new TextEncoder;
    "encodeInto" in rq || (rq.encodeInto = function(qq, Eq) {
      const gq = rq.encode(qq);
      return Eq.set(gq), {
        read: qq.length,
        written: gq.length
      }
    });
    let vq, hq, nq, bq = 0;

    function iq(qq, Eq) {
      return hq = qq, nq = qq.exports, vq = Eq, cq = null, Wq = null, nq.vZUi(), nq
    }

    function Zq(qq) {
      if (void 0 !== nq) return nq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module: qq
      } = qq) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eq = xq();
      qq instanceof WebAssembly.Module || (qq = new WebAssembly.Module(qq));
      return iq(new WebAssembly.Instance(qq, Eq), qq)
    }
    async function fq(qq) {
      if (void 0 !== nq) return nq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module_or_path: qq
      } = qq) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eq = xq();
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
      return iq(gq, Yq)
    }
    var Mq = gq(2805),
      Tq = gq(6500);
    class zq extends Error {
      stage;
      constructor(qq, Eq) {
        super((0, Mq.M)(qq, Eq), {
          cause: Eq
        }), this.name = "BloxdAnimWasmError", this.stage = qq
      }
    }
    let Sq = null,
      pq = null;

    function Gq() {
      if (pq) throw pq
    }
    async function Lq(qq, Eq, lq) {
      Gq();
      const Oq = await (Sq ??= (async () => {
        let qq;
        try {
          qq = await (0, Mq.N)(new gq.U(gq(43039)), (0, Tq.d)("bloxd_wasm_anim"))
        } catch (Eq) {
          throw new zq((0, Mq.R)(Eq), Eq)
        }
        try {
          await fq({
            module_or_path: qq
          })
        } catch (Eq) {
          throw new zq("instantiate", Eq)
        }
        return Yq
      })(), Sq.catch((() => {
        Sq = null
      })), Sq);
      Gq();
      try {
        return Oq.Xmq(Object.entries(qq).flat(), [...Eq.mobTypes], [...Eq.vehicleTypes], [...Eq.mobAiStates], [...Eq.playerPoses], "builtIns" in lq ? lq.builtIns : void 0)
      } catch (mq) {
        const qq = new zq("call", mq);
        throw mq instanceof WebAssembly.RuntimeError && (pq = qq), qq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);