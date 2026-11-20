export const id = 132;
export const ids = [132];
export const modules = {
  6496: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      loadPageShaderPackCompiler: () => WE
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      rlq: () => lq,
      tqq: () => Oq,
      default: () => Fq,
      vlq: () => mq,
      hlq: () => xq,
      initSync: () => Uq,
      Cu: () => Aq,
      aYq: () => cq,
      nlq: () => uq,
      blq: () => Bq,
      vJ: () => Wq,
      ilq: () => Nq,
      yJ: () => aq,
      Zlq: () => Vq
    });
    class lq {
      static __wrap(qq) {
        const Eq = Object.create(lq.prototype);
        return Eq.__wbg_ptr = qq, jq.register(Eq, Eq.__wbg_ptr, Eq), Eq
      }
      __destroy_into_raw() {
        const qq = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jq.unregister(this), qq
      }
      free() {
        const qq = this.__destroy_into_raw();
        Jq.mpnV(qq, 0)
      }
      get errorsJson() {
        let qq, Eq;
        try {
          const gq = Jq.Un78(this.__wbg_ptr);
          return qq = gq[0], Eq = gq[1], tq(gq[0], gq[1])
        } finally {
          Jq.HLoe(qq, Eq, 1)
        }
      }
      get features() {
        const qq = Jq.lkVE(this.__wbg_ptr);
        var Eq = oq(qq[0], qq[1]);
        return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
      }
      get hooks() {
        const qq = Jq.Zjru(this.__wbg_ptr);
        var Eq = Pq(qq[0], qq[1]).slice();
        return Jq.HLoe(qq[0], 1 * qq[1], 1), Eq
      }
      mapValidationMessage(qq, Eq, gq, Yq, lq) {
        let Oq, mq;
        try {
          const cq = Jq.CJsj(this.__wbg_ptr, qq, Eq, gq, Hq(Yq), Hq(lq));
          var xq = cq[0],
            Aq = cq[1];
          if (cq[3]) throw xq = 0, Aq = 0, Mq(cq[2]);
          return Oq = xq, mq = Aq, tq(xq, Aq)
        } finally {
          Jq.HLoe(Oq, mq, 1)
        }
      }
      get moduleCodes() {
        const qq = Jq.bI5u(this.__wbg_ptr);
        var Eq = oq(qq[0], qq[1]);
        return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
      }
      get offInStrictJson() {
        let qq, Eq;
        try {
          const gq = Jq.AP2v(this.__wbg_ptr);
          return qq = gq[0], Eq = gq[1], tq(gq[0], gq[1])
        } finally {
          Jq.HLoe(qq, Eq, 1)
        }
      }
      get reads() {
        const qq = Jq.KG2d(this.__wbg_ptr);
        var Eq = oq(qq[0], qq[1]);
        return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
      }
      get validationModuleCodes() {
        const qq = Jq.mSlF(this.__wbg_ptr);
        var Eq = oq(qq[0], qq[1]);
        return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
      }
      get validationModuleKeys() {
        const qq = Jq.EfPO(this.__wbg_ptr);
        var Eq = Pq(qq[0], qq[1]).slice();
        return Jq.HLoe(qq[0], 1 * qq[1], 1), Eq
      }
      get variantFlags() {
        const qq = Jq.ySwX(this.__wbg_ptr);
        var Eq = Pq(qq[0], qq[1]).slice();
        return Jq.HLoe(qq[0], 1 * qq[1], 1), Eq
      }
    }

    function Oq(qq, Eq, gq, Yq, Oq, mq, xq) {
      const Aq = fq(qq, Jq.QPs9),
        cq = kq,
        uq = fq(Eq, Jq.QPs9),
        Bq = kq,
        Wq = fq(gq, Jq.QPs9),
        Nq = kq,
        aq = Zq(Yq, Jq.QPs9),
        Vq = kq,
        dq = fq(Oq, Jq.QPs9),
        jq = kq,
        Hq = fq(mq, Jq.QPs9),
        oq = kq,
        Pq = fq(xq, Jq.QPs9),
        Qq = kq,
        yq = Jq.t5es(Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq);
      if (yq[2]) throw Mq(yq[1]);
      return lq.__wrap(yq[0])
    }

    function mq() {
      const qq = Jq.xyN8();
      var Eq = oq(qq[0], qq[1]);
      return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
    }

    function xq() {
      const qq = Jq.FQZs();
      var Eq = oq(qq[0], qq[1]);
      return Jq.HLoe(qq[0], 4 * qq[1], 4), Eq
    }

    function Aq() {
      Jq.GItG()
    }

    function cq(qq, Eq, gq, Yq, lq) {
      let Oq, mq;
      try {
        const cq = fq(qq, Jq.QPs9),
          uq = kq,
          Bq = Zq(Eq, Jq.QPs9),
          Wq = kq,
          Nq = fq(gq, Jq.QPs9),
          aq = kq,
          Vq = Zq(Yq, Jq.QPs9),
          dq = kq,
          jq = function(qq, Eq) {
            const gq = Eq(1 * qq.length, 1) >>> 0;
            return hq().set(qq, gq / 1), kq = qq.length, gq
          }(lq, Jq.QPs9),
          Hq = kq,
          oq = Jq.mIvI(cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq);
        var xq = oq[0],
          Aq = oq[1];
        if (oq[3]) throw xq = 0, Aq = 0, Mq(oq[2]);
        return Oq = xq, mq = Aq, tq(xq, Aq)
      } finally {
        Jq.HLoe(Oq, mq, 1)
      }
    }

    function uq() {
      let qq, Eq;
      try {
        const gq = Jq.N1CF();
        return qq = gq[0], Eq = gq[1], tq(gq[0], gq[1])
      } finally {
        Jq.HLoe(qq, Eq, 1)
      }
    }

    function Bq(qq) {
      let Eq, gq;
      try {
        const Oq = Jq.RnxY(qq);
        var Yq = Oq[0],
          lq = Oq[1];
        if (Oq[3]) throw Yq = 0, lq = 0, Mq(Oq[2]);
        return Eq = Yq, gq = lq, tq(Yq, lq)
      } finally {
        Jq.HLoe(Eq, gq, 1)
      }
    }

    function Wq() {
      return Jq.yE0z() >>> 0
    }

    function Nq() {
      let qq, Eq;
      try {
        const gq = Jq.AUTO();
        return qq = gq[0], Eq = gq[1], tq(gq[0], gq[1])
      } finally {
        Jq.HLoe(qq, Eq, 1)
      }
    }

    function aq(qq, Eq) {
      let gq, Yq;
      try {
        const mq = fq(qq, Jq.QPs9),
          xq = kq,
          Aq = Zq(Eq, Jq.QPs9),
          cq = kq,
          uq = Jq.YIMe(mq, xq, Aq, cq);
        var lq = uq[0],
          Oq = uq[1];
        if (uq[3]) throw lq = 0, Oq = 0, Mq(uq[2]);
        return gq = lq, Yq = Oq, tq(lq, Oq)
      } finally {
        Jq.HLoe(gq, Yq, 1)
      }
    }

    function Vq(qq) {
      let Eq, gq;
      try {
        const Oq = Jq.LPWj(Hq(qq));
        var Yq = Oq[0],
          lq = Oq[1];
        if (Oq[3]) throw Yq = 0, lq = 0, Mq(Oq[2]);
        return Eq = Yq, gq = lq, tq(Yq, lq)
      } finally {
        Jq.HLoe(Eq, gq, 1)
      }
    }

    function dq() {
      return {
        __proto__: null,
        kCZL: {
          __proto__: null,
          dFih: function(qq, Eq) {
            return Hq(Error(tq(qq, Eq)))
          },
          YKNr: function(qq) {
            return null === nq(qq)
          },
          zU3V: function(qq) {
            return "string" === typeof nq(qq)
          },
          voR9: function(qq, Eq) {
            const gq = nq(Eq),
              Yq = "string" === typeof gq ? gq : void 0;
            var lq, Oq = void 0 === (lq = Yq) || null === lq ? 0 : function(qq, Eq, gq) {
                if (void 0 === gq) {
                  const gq = pq.encode(qq),
                    Yq = Eq(gq.length, 1) >>> 0;
                  return hq().subarray(Yq, Yq + gq.length).set(gq), kq = gq.length, Yq
                }
                let Yq = qq.length,
                  lq = Eq(Yq, 1) >>> 0;
                const Oq = hq();
                let mq = 0;
                for (; mq < Yq; mq++) {
                  const Eq = qq.charCodeAt(mq);
                  if (Eq > 127) break;
                  Oq[lq + mq] = Eq
                }
                if (mq !== Yq) {
                  0 !== mq && (qq = qq.slice(mq)), lq = gq(lq, Yq, Yq = mq + 3 * qq.length, 1) >>> 0;
                  const Eq = hq().subarray(lq + mq, lq + Yq);
                  mq += pq.encodeInto(qq, Eq).written, lq = gq(lq, Yq, mq, 1) >>> 0
                }
                return kq = mq, lq
              }(Yq, Jq.QPs9, Jq.CIkR),
              mq = kq;
            yq().setInt32(qq + 4, mq, !0), yq().setInt32(qq + 0, Oq, !0)
          },
          EBho: function(qq, Eq) {
            throw new Error(tq(qq, Eq))
          },
          iYbJ: function(qq, Eq) {
            return nq(qq).charCodeAt(Eq >>> 0)
          },
          RHb0: function(qq, Eq) {
            console.error(tq(qq, Eq))
          },
          ArrS: function(qq) {
            return nq(qq).length
          },
          EteA: function(qq, Eq) {
            return Hq(tq(qq, Eq))
          },
          FD1m: function(qq) {
            Mq(qq)
          }
        }
      }
    }
    Symbol.dispose && (lq.prototype[Symbol.dispose] = lq.prototype.free);
    const jq = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((qq => Jq.mpnV(qq, 1)));

    function Hq(qq) {
      iq === bq.length && bq.push(bq.length + 1);
      const Eq = iq;
      return iq = bq[Eq], bq[Eq] = qq, Eq
    }

    function oq(qq, Eq) {
      qq >>>= 0;
      const gq = yq(),
        Yq = [];
      for (let lq = qq; lq < qq + 4 * Eq; lq += 4) Yq.push(Mq(gq.getUint32(lq, !0)));
      return Yq
    }

    function Pq(qq, Eq) {
      return qq >>>= 0, hq().subarray(qq / 1, qq / 1 + Eq)
    }
    let Qq = null;

    function yq() {
      return (null === Qq || !0 === Qq.buffer.detached || void 0 === Qq.buffer.detached && Qq.buffer !== Jq.memory.buffer) && (Qq = new DataView(Jq.memory.buffer)), Qq
    }

    function tq(qq, Eq) {
      return function(qq, Eq) {
        Sq += Eq, Sq >= zq && (Tq = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Tq.decode(), Sq = Eq);
        return Tq.decode(hq().subarray(qq, qq + Eq))
      }(qq >>> 0, Eq)
    }
    let rq = null;
    let vq = null;

    function hq() {
      return null !== vq && 0 !== vq.byteLength || (vq = new Uint8Array(Jq.memory.buffer)), vq
    }

    function nq(qq) {
      return bq[qq]
    }
    let bq = new Array(1024).fill(void 0);
    bq.push(void 0, null, !0, !1);
    let iq = bq.length;

    function Zq(qq, Eq) {
      const gq = Eq(4 * qq.length, 4) >>> 0;
      return (null !== rq && 0 !== rq.byteLength || (rq = new Uint32Array(Jq.memory.buffer)), rq).set(qq, gq / 4), kq = qq.length, gq
    }

    function fq(qq, Eq) {
      const gq = Eq(4 * qq.length, 4) >>> 0,
        Yq = yq();
      for (let lq = 0; lq < qq.length; lq++) Yq.setUint32(gq + 4 * lq, Hq(qq[lq]), !0);
      return kq = qq.length, gq
    }

    function Mq(qq) {
      const Eq = nq(qq);
      return function(qq) {
        qq < 1028 || (bq[qq] = iq, iq = qq)
      }(qq), Eq
    }
    let Tq = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Tq.decode();
    const zq = 2146435072;
    let Sq = 0;
    const pq = new TextEncoder;
    "encodeInto" in pq || (pq.encodeInto = function(qq, Eq) {
      const gq = pq.encode(qq);
      return Eq.set(gq), {
        read: qq.length,
        written: gq.length
      }
    });
    let Gq, Lq, Jq, kq = 0;

    function Rq(qq, Eq) {
      return Lq = qq, Jq = qq.exports, Gq = Eq, Qq = null, rq = null, vq = null, Jq.u0o2(), Jq
    }

    function Uq(qq) {
      if (void 0 !== Jq) return Jq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module: qq
      } = qq) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eq = dq();
      qq instanceof WebAssembly.Module || (qq = new WebAssembly.Module(qq));
      return Rq(new WebAssembly.Instance(qq, Eq), qq)
    }
    async function Fq(qq) {
      if (void 0 !== Jq) return Jq;
      void 0 !== qq && (Object.getPrototypeOf(qq) === Object.prototype ? ({
        module_or_path: qq
      } = qq) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eq = dq();
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
      return Rq(gq, Yq)
    }
    var sq = gq(2805),
      Xq = gq(6500);
    class wq extends Error {
      stage;
      constructor(qq, Eq) {
        super((0, sq.M)(qq, Eq), {
          cause: Eq
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = qq
      }
    }
    let Kq = null,
      Cq = null;

    function Iq() {
      return Kq ? Promise.resolve(Kq) : (Cq || (Cq = async function() {
        let qq;
        try {
          qq = await (0, sq.N)(new gq.U(gq(6508)), (0, Xq.d)("bloxd_wasm_shader_pack"))
        } catch (Eq) {
          throw new wq((0, sq.R)(Eq), Eq)
        }
        try {
          await Fq({
            module_or_path: qq
          })
        } catch (Eq) {
          throw new wq("instantiate", Eq)
        }
        return Kq = Yq, Kq
      }(), Cq.then(void 0, (() => {
        Cq = null
      }))), Cq)
    }
    var eq = gq(6517);

    function Dq(qq) {
      let [Eq, gq, Yq, lq] = qq;
      const Oq = {
        file: Eq,
        line: gq,
        message: Yq
      };
      return lq && (Oq.variants = lq.map(eq.l)), Oq
    }

    function qE(qq) {
      return JSON.parse(qq).map(Dq)
    }

    function EE(qq, Eq) {
      if (!Number.isInteger(qq) || qq < 0 || qq > 4294967295) throw new Error(`${Eq} ${qq} is not a whole number from 0 to 4294967295`);
      return qq
    }

    function gE(qq) {
      return [qq.named.map((qq => qq.name)), Uint32Array.from(qq.named, (qq => EE(qq.id, "Texture ID")))]
    }
    const YE = new WeakMap;
    const lE = new WeakMap,
      OE = new WeakSet;

    function mE(qq, Eq) {
      if (OE.has(qq)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Eq()
      } catch (gq) {
        throw gq instanceof WebAssembly.RuntimeError && OE.add(qq), gq
      }
    }

    function xE(qq) {
      let Eq = lE.get(qq);
      if (!Eq) {
        let gq, Yq;
        Eq = {
          tqq: (Eq, gq) => mE(qq, (() => function(qq, Eq, gq) {
            const Yq = qq.tqq(Eq.map((qq => qq.path)), Eq.map((qq => qq.source)), ...gE(gq), gq.aliases.map((qq => qq.name)), gq.aliases.map((qq => qq.texture)), gq.aliases.map((qq => qq.kind)));
            let lq = !1;
            try {
              const qq = Yq.validationModuleCodes,
                Eq = Array.from(Yq.validationModuleKeys, ((Eq, gq) => ({
                  key: (0, eq.l)(Eq),
                  code: qq[gq]
                }))),
                gq = {
                  errors: qE(Yq.errorsJson),
                  offInStrict: qE(Yq.offInStrictJson),
                  variants: (0, eq.f)(Yq),
                  validationModules: Eq,
                  features: Yq.features
                };
              return Eq.forEach(((qq, Eq) => {
                YE.set(qq, {
                  pack: Yq,
                  index: Eq
                })
              })), lq = Eq.length > 0, gq
            } finally {
              lq || Yq.free()
            }
          }(qq, Eq, gq))),
          mapValidationMessage: (Eq, gq) => {
            const Yq = YE.get(Eq);
            if (!Yq) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Dq(JSON.parse(mE(qq, (() => Yq.pack.mapValidationMessage(Yq.index, gq.lineNum, gq.linePos, gq.message, gq.type)))))
          },
          aYq: Eq => mE(qq, (() => function(qq, Eq) {
            const gq = new Int32Array(Eq.length),
              Yq = [];
            return Eq.forEach(((qq, Eq) => {
              gq[Eq] = qq.variants ? qq.variants.length : -1;
              for (const gq of qq.variants ?? []) Yq.push((0, eq.j)(gq))
            })), qE(qq.aYq(Eq.map((qq => qq.file)), Uint32Array.from(Eq, (qq => EE(qq.line, "Diagnostic line"))), Eq.map((qq => qq.message)), gq, Uint8Array.from(Yq)))
          }(qq, Eq))),
          yJ: Eq => mE(qq, (() => qq.yJ(...gE(Eq)))),
          get SHADER_PACK_HEADER_VERSION() {
            return gq ??= mE(qq, (() => qq.ilq())), gq
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Yq ??= mE(qq, (() => {
              const Eq = qq.hlq();
              return qq.vlq().map(((qq, gq) => ({
                path: qq,
                source: Eq[gq]
              })))
            })), Yq
          },
          Zlq: Eq => mE(qq, (() => qq.Zlq(Eq))),
          resolveHeader: Eq => mE(qq, (() => qq.blq((0, eq.j)(Eq)))),
          nlq: () => mE(qq, (() => qq.nlq()))
        }, lE.set(qq, Eq)
      }
      return Eq
    }
    var AE = gq(3120),
      cE = gq(6514);
    const uE = "bloxdShaderPackWasmFailureReported";
    let BE = null;

    function WE() {
      return BE ??= async function() {
        if ("undefined" === typeof WebAssembly) return NE("unsupported", "This browser has no WebAssembly"), null;
        const qq = (0, cE.loadShaderPackTextures)().then((() => !0), (qq => (console.error("Could not load the shader pack textures, so shader packs can't run", qq), !1)));
        try {
          const Eq = await async function() {
            let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iq;
            return xE(await qq())
          }();
          return await qq ? Eq : null
        } catch (Eq) {
          const qq = Eq instanceof Error ? Eq.message : String(Eq);
          return NE(AE.c[Eq instanceof wq ? Eq.stage : "instantiate"], qq), null
        }
      }(), BE
    }

    function NE(qq, Eq) {
      (0, AE.e)(uE, `Shader pack wasm ${qq}, so shader packs can't run: ${Eq}`, Eq, `shader_pack_${qq}`)
    }
  },
  6508: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/bloxd_wasm_shader_pack_bg.85a99b3f49b7ce9ed7dc.wasm"
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
  6517: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Pq,
      f: () => Qq,
      j: () => Hq,
      l: () => jq
    });
    var Yq = gq(6521);
    const lq = 6,
      Oq = 3,
      mq = 1,
      xq = 2,
      Aq = 4,
      cq = 8,
      uq = 16,
      Bq = 32,
      Wq = 64,
      Nq = 128,
      aq = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Vq(qq) {
      if (!qq) return 0;
      const Eq = aq.indexOf(qq);
      if (Eq <= 0) throw new Error(`"${qq}" is not a shader pack hook function`);
      return Eq
    }

    function dq(qq) {
      if (0 === qq) return null;
      const Eq = aq[qq];
      if (void 0 === Eq) throw new Error(`${qq} is not a shader pack hook function id`);
      return Eq
    }

    function jq(qq) {
      const Eq = Yq.b.length;
      return {
        strict: qq >= Eq,
        program: Yq.b[qq % Eq]
      }
    }

    function Hq(qq) {
      return Number(qq.strict) * Yq.b.length + Yq.b.indexOf(qq.program)
    }

    function oq(qq) {
      return "" === qq ? [] : qq.split(" ")
    }

    function Pq(qq) {
      const Eq = {
        variantFlags: new Uint8Array(lq),
        hooks: new Uint8Array(lq * Oq),
        moduleCodes: Array(lq).fill(""),
        reads: Array(2 * lq).fill("")
      };
      for (const gq of qq) {
        const qq = Hq(gq.key),
          Yq = (qq, Eq) => null === gq.hooks.surface || gq.reads.fragment.includes(qq) ? 0 : Eq;
        Eq.variantFlags[qq] = (gq.sceneDepth ? mq : 0) | (gq.movesVertices ? xq : 0) | (gq.sunShadow ? Aq : 0) | (gq.airShadow ? cq : 0) | (gq.discards ? uq : 0) | Yq("localPosition", Bq) | Yq("enchantSpeed", Wq) | Yq("enchantTier", Nq), Eq.hooks[qq * Oq] = Vq(gq.hooks.vertex), Eq.hooks[qq * Oq + 1] = Vq(gq.hooks.surface), Eq.hooks[qq * Oq + 2] = Vq(gq.hooks.light), Eq.moduleCodes[qq] = gq.moduleCode, Eq.reads[2 * qq] = gq.reads.vertex.join(" "), Eq.reads[2 * qq + 1] = gq.reads.fragment.join(" ")
      }
      return Eq
    }

    function Qq(qq) {
      const {
        hooks: Eq,
        moduleCodes: gq,
        reads: Yq
      } = qq;
      return Array.from(qq.variantFlags, ((qq, lq) => {
        const Bq = lq * Oq;
        return {
          key: jq(lq),
          hooks: {
            vertex: dq(Eq[Bq]),
            surface: dq(Eq[Bq + 1]),
            light: dq(Eq[Bq + 2])
          },
          moduleCode: gq[lq],
          sceneDepth: 0 !== (qq & mq),
          sunShadow: 0 !== (qq & Aq),
          airShadow: 0 !== (qq & cq),
          movesVertices: 0 !== (qq & xq),
          discards: 0 !== (qq & uq),
          reads: {
            vertex: oq(Yq[2 * lq]),
            fragment: oq(Yq[2 * lq + 1])
          }
        }
      }))
    }
  },
  6521: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      d: () => mq,
      g: () => xq,
      j: () => lq,
      m: () => Oq
    });
    const Yq = ["terrain", "liquid", "model"];

    function lq() {
      const qq = [];
      for (const Eq of [!1, !0])
        for (const gq of Yq) qq.push({
          strict: Eq,
          program: gq
        });
      return qq
    }

    function Oq(qq) {
      return `${qq.strict?"strict":"allow"}.${qq.program}`
    }

    function mq(qq) {
      return !qq.hooks.vertex && !qq.hooks.surface && !qq.hooks.light
    }

    function xq(qq, Eq) {
      return "off" !== Eq && (null === qq || qq.some((qq => qq.key.strict === ("strict" === Eq) && !mq(qq))))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);