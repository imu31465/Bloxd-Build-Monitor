export const id = 131;
export const ids = [131];
export const modules = {
  6316: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadPageShaderPackCompiler: () => AF
    });
    var Rk = {};
    Bk.r(Rk), Bk.d(Rk, {
      qRk: () => tk,
      N7: () => ak,
      default: () => pk,
      CRk: () => Xk,
      ZRk: () => bk,
      initSync: () => Zk,
      uV: () => wk,
      EBk: () => dk,
      pRk: () => sk,
      KRk: () => Vk,
      nS: () => Jk,
      xRk: () => Ak,
      qS: () => ek,
      jRk: () => yk
    });
    class tk {
      static __wrap(kk) {
        const Fk = Object.create(tk.prototype);
        return Fk.__wbg_ptr = kk, mk.register(Fk, Fk.__wbg_ptr, Fk), Fk
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, mk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        hk.cOfe(kk, 0)
      }
      get errorsJson() {
        let kk, Fk;
        try {
          const Bk = hk.laXO(this.__wbg_ptr);
          return kk = Bk[0], Fk = Bk[1], Ok(Bk[0], Bk[1])
        } finally {
          hk.FRHd(kk, Fk, 1)
        }
      }
      get features() {
        const kk = hk.Yxau(this.__wbg_ptr);
        var Fk = vk(kk[0], kk[1]);
        return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
      }
      get hooks() {
        const kk = hk.m5W2(this.__wbg_ptr);
        var Fk = ik(kk[0], kk[1]).slice();
        return hk.FRHd(kk[0], 1 * kk[1], 1), Fk
      }
      mapValidationMessage(kk, Fk, Bk, Rk, tk) {
        let ak, Xk;
        try {
          const dk = hk.ktcZ(this.__wbg_ptr, kk, Fk, Bk, Wk(Rk), Wk(tk));
          var bk = dk[0],
            wk = dk[1];
          if (dk[3]) throw bk = 0, wk = 0, ck(dk[2]);
          return ak = bk, Xk = wk, Ok(bk, wk)
        } finally {
          hk.FRHd(ak, Xk, 1)
        }
      }
      get moduleCodes() {
        const kk = hk.ZxGD(this.__wbg_ptr);
        var Fk = vk(kk[0], kk[1]);
        return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
      }
      get offInStrictJson() {
        let kk, Fk;
        try {
          const Bk = hk.UkUD(this.__wbg_ptr);
          return kk = Bk[0], Fk = Bk[1], Ok(Bk[0], Bk[1])
        } finally {
          hk.FRHd(kk, Fk, 1)
        }
      }
      get reads() {
        const kk = hk.cmzF(this.__wbg_ptr);
        var Fk = vk(kk[0], kk[1]);
        return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
      }
      get validationModuleCodes() {
        const kk = hk.NyQa(this.__wbg_ptr);
        var Fk = vk(kk[0], kk[1]);
        return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
      }
      get validationModuleKeys() {
        const kk = hk.bPTg(this.__wbg_ptr);
        var Fk = ik(kk[0], kk[1]).slice();
        return hk.FRHd(kk[0], 1 * kk[1], 1), Fk
      }
      get variantFlags() {
        const kk = hk.Knus(this.__wbg_ptr);
        var Fk = ik(kk[0], kk[1]).slice();
        return hk.FRHd(kk[0], 1 * kk[1], 1), Fk
      }
    }

    function ak(kk, Fk, Bk, Rk, ak, Xk, bk) {
      const wk = Uk(kk, hk.SWb9),
        dk = qk,
        sk = Uk(Fk, hk.SWb9),
        Vk = qk,
        Jk = Uk(Bk, hk.SWb9),
        Ak = qk,
        ek = gk(Rk, hk.SWb9),
        yk = qk,
        fk = Uk(ak, hk.SWb9),
        mk = qk,
        Wk = Uk(Xk, hk.SWb9),
        vk = qk,
        ik = Uk(bk, hk.SWb9),
        Yk = qk,
        Lk = hk.z2la(wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk);
      if (Lk[2]) throw ck(Lk[1]);
      return tk.__wrap(Lk[0])
    }

    function Xk() {
      const kk = hk.jaEg();
      var Fk = vk(kk[0], kk[1]);
      return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
    }

    function bk() {
      const kk = hk.T8ib();
      var Fk = vk(kk[0], kk[1]);
      return hk.FRHd(kk[0], 4 * kk[1], 4), Fk
    }

    function wk() {
      hk.BB9p()
    }

    function dk(kk, Fk, Bk, Rk, tk) {
      let ak, Xk;
      try {
        const dk = Uk(kk, hk.SWb9),
          sk = qk,
          Vk = gk(Fk, hk.SWb9),
          Jk = qk,
          Ak = Uk(Bk, hk.SWb9),
          ek = qk,
          yk = gk(Rk, hk.SWb9),
          fk = qk,
          mk = function(kk, Fk) {
            const Bk = Fk(1 * kk.length, 1) >>> 0;
            return Nk().set(kk, Bk / 1), qk = kk.length, Bk
          }(tk, hk.SWb9),
          Wk = qk,
          vk = hk.Wndl(dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk);
        var bk = vk[0],
          wk = vk[1];
        if (vk[3]) throw bk = 0, wk = 0, ck(vk[2]);
        return ak = bk, Xk = wk, Ok(bk, wk)
      } finally {
        hk.FRHd(ak, Xk, 1)
      }
    }

    function sk() {
      let kk, Fk;
      try {
        const Bk = hk.YLbA();
        return kk = Bk[0], Fk = Bk[1], Ok(Bk[0], Bk[1])
      } finally {
        hk.FRHd(kk, Fk, 1)
      }
    }

    function Vk(kk) {
      let Fk, Bk;
      try {
        const ak = hk.rwxx(kk);
        var Rk = ak[0],
          tk = ak[1];
        if (ak[3]) throw Rk = 0, tk = 0, ck(ak[2]);
        return Fk = Rk, Bk = tk, Ok(Rk, tk)
      } finally {
        hk.FRHd(Fk, Bk, 1)
      }
    }

    function Jk() {
      return hk.PGld() >>> 0
    }

    function Ak() {
      let kk, Fk;
      try {
        const Bk = hk.sJl4();
        return kk = Bk[0], Fk = Bk[1], Ok(Bk[0], Bk[1])
      } finally {
        hk.FRHd(kk, Fk, 1)
      }
    }

    function ek(kk, Fk) {
      let Bk, Rk;
      try {
        const Xk = Uk(kk, hk.SWb9),
          bk = qk,
          wk = gk(Fk, hk.SWb9),
          dk = qk,
          sk = hk.nclr(Xk, bk, wk, dk);
        var tk = sk[0],
          ak = sk[1];
        if (sk[3]) throw tk = 0, ak = 0, ck(sk[2]);
        return Bk = tk, Rk = ak, Ok(tk, ak)
      } finally {
        hk.FRHd(Bk, Rk, 1)
      }
    }

    function yk(kk) {
      let Fk, Bk;
      try {
        const ak = hk.Kmw1(Wk(kk));
        var Rk = ak[0],
          tk = ak[1];
        if (ak[3]) throw Rk = 0, tk = 0, ck(ak[2]);
        return Fk = Rk, Bk = tk, Ok(Rk, tk)
      } finally {
        hk.FRHd(Fk, Bk, 1)
      }
    }

    function fk() {
      return {
        __proto__: null,
        EqcT: {
          __proto__: null,
          PfTn: function(kk, Fk) {
            return Wk(Error(Ok(kk, Fk)))
          },
          QA5S: function(kk) {
            return null === Hk(kk)
          },
          vAwY: function(kk) {
            return "string" === typeof Hk(kk)
          },
          eCuy: function(kk, Fk) {
            const Bk = Hk(Fk),
              Rk = "string" === typeof Bk ? Bk : void 0;
            var tk, ak = void 0 === (tk = Rk) || null === tk ? 0 : function(kk, Fk, Bk) {
                if (void 0 === Bk) {
                  const Bk = Dk.encode(kk),
                    Rk = Fk(Bk.length, 1) >>> 0;
                  return Nk().subarray(Rk, Rk + Bk.length).set(Bk), qk = Bk.length, Rk
                }
                let Rk = kk.length,
                  tk = Fk(Rk, 1) >>> 0;
                const ak = Nk();
                let Xk = 0;
                for (; Xk < Rk; Xk++) {
                  const Fk = kk.charCodeAt(Xk);
                  if (Fk > 127) break;
                  ak[tk + Xk] = Fk
                }
                if (Xk !== Rk) {
                  0 !== Xk && (kk = kk.slice(Xk)), tk = Bk(tk, Rk, Rk = Xk + 3 * kk.length, 1) >>> 0;
                  const Fk = Nk().subarray(tk + Xk, tk + Rk);
                  Xk += Dk.encodeInto(kk, Fk).written, tk = Bk(tk, Rk, Xk, 1) >>> 0
                }
                return qk = Xk, tk
              }(Rk, hk.SWb9, hk.zw8W),
              Xk = qk;
            Lk().setInt32(kk + 4, Xk, !0), Lk().setInt32(kk + 0, ak, !0)
          },
          YliL: function(kk, Fk) {
            throw new Error(Ok(kk, Fk))
          },
          wMoC: function(kk, Fk) {
            return Hk(kk).charCodeAt(Fk >>> 0)
          },
          LHPW: function(kk, Fk) {
            console.error(Ok(kk, Fk))
          },
          TqRI: function(kk) {
            return Hk(kk).length
          },
          g8S5: function(kk, Fk) {
            return Wk(Ok(kk, Fk))
          },
          hbuU: function(kk) {
            ck(kk)
          }
        }
      }
    }
    Symbol.dispose && (tk.prototype[Symbol.dispose] = tk.prototype.free);
    const mk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => hk.cOfe(kk, 1)));

    function Wk(kk) {
      Mk === uk.length && uk.push(uk.length + 1);
      const Fk = Mk;
      return Mk = uk[Fk], uk[Fk] = kk, Fk
    }

    function vk(kk, Fk) {
      kk >>>= 0;
      const Bk = Lk(),
        Rk = [];
      for (let tk = kk; tk < kk + 4 * Fk; tk += 4) Rk.push(ck(Bk.getUint32(tk, !0)));
      return Rk
    }

    function ik(kk, Fk) {
      return kk >>>= 0, Nk().subarray(kk / 1, kk / 1 + Fk)
    }
    let Yk = null;

    function Lk() {
      return (null === Yk || !0 === Yk.buffer.detached || void 0 === Yk.buffer.detached && Yk.buffer !== hk.memory.buffer) && (Yk = new DataView(hk.memory.buffer)), Yk
    }

    function Ok(kk, Fk) {
      return function(kk, Fk) {
        rk += Fk, rk >= Tk && (Gk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Gk.decode(), rk = Fk);
        return Gk.decode(Nk().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let Ek = null;
    let Sk = null;

    function Nk() {
      return null !== Sk && 0 !== Sk.byteLength || (Sk = new Uint8Array(hk.memory.buffer)), Sk
    }

    function Hk(kk) {
      return uk[kk]
    }
    let uk = new Array(1024).fill(void 0);
    uk.push(void 0, null, !0, !1);
    let Mk = uk.length;

    function gk(kk, Fk) {
      const Bk = Fk(4 * kk.length, 4) >>> 0;
      return (null !== Ek && 0 !== Ek.byteLength || (Ek = new Uint32Array(hk.memory.buffer)), Ek).set(kk, Bk / 4), qk = kk.length, Bk
    }

    function Uk(kk, Fk) {
      const Bk = Fk(4 * kk.length, 4) >>> 0,
        Rk = Lk();
      for (let tk = 0; tk < kk.length; tk++) Rk.setUint32(Bk + 4 * tk, Wk(kk[tk]), !0);
      return qk = kk.length, Bk
    }

    function ck(kk) {
      const Fk = Hk(kk);
      return function(kk) {
        kk < 1028 || (uk[kk] = Mk, Mk = kk)
      }(kk), Fk
    }
    let Gk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Gk.decode();
    const Tk = 2146435072;
    let rk = 0;
    const Dk = new TextEncoder;
    "encodeInto" in Dk || (Dk.encodeInto = function(kk, Fk) {
      const Bk = Dk.encode(kk);
      return Fk.set(Bk), {
        read: kk.length,
        written: Bk.length
      }
    });
    let zk, Pk, hk, qk = 0;

    function Ck(kk, Fk) {
      return Pk = kk, hk = kk.exports, zk = Fk, Yk = null, Ek = null, Sk = null, hk.IbZq(), hk
    }

    function Zk(kk) {
      if (void 0 !== hk) return hk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = fk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Ck(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function pk(kk) {
      if (void 0 !== hk) return hk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = fk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Bk,
        module: Rk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Bk) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Bk;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Bk)
          }
          const Rk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Rk, Fk)
        } {
          const Bk = await WebAssembly.instantiate(kk, Fk);
          return Bk instanceof WebAssembly.Instance ? {
            instance: Bk,
            module: kk
          } : Bk
        }
      }(await kk, Fk);
      return Ck(Bk, Rk)
    }
    var Kk = Bk(3506),
      xk = Bk(6325);
    class jk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, Kk.F)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = kk
      }
    }
    let lk = null,
      nk = null;

    function Ik() {
      return lk ? Promise.resolve(lk) : (nk || (nk = async function() {
        let kk;
        try {
          kk = await (0, Kk.J)(new Bk.U(Bk(6332)), (0, xk.d)("bloxd_wasm_shader_pack"))
        } catch (Fk) {
          throw new jk((0, Kk.P)(Fk), Fk)
        }
        try {
          await pk({
            module_or_path: kk
          })
        } catch (Fk) {
          throw new jk("instantiate", Fk)
        }
        return lk = Rk, lk
      }(), nk.then(void 0, (() => {
        nk = null
      }))), nk)
    }
    var Qk = Bk(6343);

    function kF(kk) {
      let [Fk, Bk, Rk, tk] = kk;
      const ak = {
        file: Fk,
        line: Bk,
        message: Rk
      };
      return tk && (ak.variants = tk.map(Qk.g)), ak
    }

    function FF(kk) {
      return JSON.parse(kk).map(kF)
    }

    function BF(kk, Fk) {
      if (!Number.isInteger(kk) || kk < 0 || kk > 4294967295) throw new Error(`${Fk} ${kk} is not a whole number from 0 to 4294967295`);
      return kk
    }

    function RF(kk) {
      return [kk.named.map((kk => kk.name)), Uint32Array.from(kk.named, (kk => BF(kk.id, "Texture ID")))]
    }
    const tF = new WeakMap;
    const aF = new WeakMap,
      XF = new WeakSet;

    function bF(kk, Fk) {
      if (XF.has(kk)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Fk()
      } catch (Bk) {
        throw Bk instanceof WebAssembly.RuntimeError && XF.add(kk), Bk
      }
    }

    function wF(kk) {
      let Fk = aF.get(kk);
      if (!Fk) {
        let Bk, Rk;
        Fk = {
          N7: (Fk, Bk) => bF(kk, (() => function(kk, Fk, Bk) {
            const Rk = kk.N7(Fk.map((kk => kk.path)), Fk.map((kk => kk.source)), ...RF(Bk), Bk.aliases.map((kk => kk.name)), Bk.aliases.map((kk => kk.texture)), Bk.aliases.map((kk => kk.kind)));
            let tk = !1;
            try {
              const kk = Rk.validationModuleCodes,
                Fk = Array.from(Rk.validationModuleKeys, ((Fk, Bk) => ({
                  key: (0, Qk.g)(Fk),
                  code: kk[Bk]
                }))),
                Bk = {
                  errors: FF(Rk.errorsJson),
                  offInStrict: FF(Rk.offInStrictJson),
                  variants: (0, Qk.e)(Rk),
                  validationModules: Fk,
                  features: Rk.features
                };
              return Fk.forEach(((kk, Fk) => {
                tF.set(kk, {
                  pack: Rk,
                  index: Fk
                })
              })), tk = Fk.length > 0, Bk
            } finally {
              tk || Rk.free()
            }
          }(kk, Fk, Bk))),
          mapValidationMessage: (Fk, Bk) => {
            const Rk = tF.get(Fk);
            if (!Rk) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return kF(JSON.parse(bF(kk, (() => Rk.pack.mapValidationMessage(Rk.index, Bk.lineNum, Bk.linePos, Bk.message, Bk.type)))))
          },
          EBk: Fk => bF(kk, (() => function(kk, Fk) {
            const Bk = new Int32Array(Fk.length),
              Rk = [];
            return Fk.forEach(((kk, Fk) => {
              Bk[Fk] = kk.variants ? kk.variants.length : -1;
              for (const Bk of kk.variants ?? []) Rk.push((0, Qk.f)(Bk))
            })), FF(kk.EBk(Fk.map((kk => kk.file)), Uint32Array.from(Fk, (kk => BF(kk.line, "Diagnostic line"))), Fk.map((kk => kk.message)), Bk, Uint8Array.from(Rk)))
          }(kk, Fk))),
          qS: Fk => bF(kk, (() => kk.qS(...RF(Fk)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Bk ??= bF(kk, (() => kk.xRk())), Bk
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Rk ??= bF(kk, (() => {
              const Fk = kk.ZRk();
              return kk.CRk().map(((kk, Bk) => ({
                path: kk,
                source: Fk[Bk]
              })))
            })), Rk
          },
          jRk: Fk => bF(kk, (() => kk.jRk(Fk))),
          resolveHeader: Fk => bF(kk, (() => kk.KRk((0, Qk.f)(Fk)))),
          pRk: () => bF(kk, (() => kk.pRk()))
        }, aF.set(kk, Fk)
      }
      return Fk
    }
    var dF = Bk(3029),
      sF = Bk(6340);
    const VF = "bloxdShaderPackWasmFailureReported";
    let JF = null;

    function AF() {
      return JF ??= async function() {
        if ("undefined" === typeof WebAssembly) return eF("unsupported", "This browser has no WebAssembly"), null;
        const kk = (0, sF.loadShaderPackTextures)().then((() => !0), (kk => (console.error("Could not load the shader pack textures, so shader packs can't run", kk), !1)));
        try {
          const Fk = await async function() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ik;
            return wF(await kk())
          }();
          return await kk ? Fk : null
        } catch (Fk) {
          const kk = Fk instanceof Error ? Fk.message : String(Fk);
          return eF(dF.e[Fk instanceof jk ? Fk.stage : "instantiate"], kk), null
        }
      }(), JF
    }

    function eF(kk, Fk) {
      (0, dF.i)(VF, `Shader pack wasm ${kk}, so shader packs can't run: ${Fk}`, Fk, `shader_pack_${kk}`)
    }
  },
  6332: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/bloxd_wasm_shader_pack_bg.7ebd5584117c85b01497.wasm"
  },
  6325: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(3506);
    const tk = {
      bloxd_wasm: () => "0a084eabef9950ab2a7e71c5d9de42289fbfae2d87a10d8ea83b0d640034d04e",
      bloxd_wasm_client: () => "670064b0efa28d20ee2652f560d980392b14b8f575d78dbc148a398783212dd9",
      bloxd_wasm_workers: () => "e54ffb745a3a64b4eff08d3acff88bafa819b4a1d24982975989975b8c465d7c",
      bloxd_wasm_models: () => "3510593bc144c34047bb046244d4f79681313b64dc4db62f262e4940cf2ac935",
      bloxd_wasm_webgpu: () => "7227c7fb095ae833899f1bc6083c6fd008f81638c2024bb597f02a7221b8b9f3",
      bloxd_wasm_webgl: () => "5973cccff624afdd2d9ac129d6f0410128c5eb760d9c1d374fcacade730af5c8",
      bloxd_wasm_webgl1: () => "2ea465bc1bd601e27e7b5fa0838d1029260ab0f8117b76b80379a1022f1bc97f",
      bloxd_wasm_replay: () => "5250a6be4ccaa643dd55bed731d226b43b001447adaac84ccb3f3d6e643166e0",
      bloxd_wasm_recorder: () => "c25abb16c2b998f3635848bcd240bb48a3dcf3a54feacc8db2b427a87519c394",
      bloxd_wasm_anim: () => "f47375bb802972bde149d1e0bb1d06c729d525fa6881c46c5ac4757224208b36",
      bloxd_wasm_textures: () => "a81b39f82de7af92548359d4ee9d763c26ee7b3342018c2571590a49dd51e093",
      bloxd_wasm_shader_pack: () => "b47f8831d78bff4de588686f88a8db44a0115f8cadda219f585be50545eff9c2"
    };
    var ak = Bk(4425);

    function Xk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(tk, kk) ? tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ak.v
      };
      throw new Rk.k(`${kk} has no release digest, so this build refuses it`)
    }
  },
  6343: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ik,
      e: () => Yk,
      f: () => Wk,
      g: () => mk
    });
    var Rk = Bk(6349);
    const tk = 6,
      ak = 3,
      Xk = 1,
      bk = 2,
      wk = 4,
      dk = 8,
      sk = 16,
      Vk = 32,
      Jk = 64,
      Ak = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function yk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function fk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function mk(kk) {
      const Fk = Rk.d.length;
      return {
        strict: kk >= Fk,
        program: Rk.d[kk % Fk]
      }
    }

    function Wk(kk) {
      return Number(kk.strict) * Rk.d.length + Rk.d.indexOf(kk.program)
    }

    function vk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function ik(kk) {
      const Fk = {
        variantFlags: new Uint8Array(tk),
        hooks: new Uint8Array(tk * ak),
        moduleCodes: Array(tk).fill(""),
        reads: Array(2 * tk).fill("")
      };
      for (const Bk of kk) {
        const kk = Wk(Bk.key),
          Rk = (kk, Fk) => null === Bk.hooks.surface || Bk.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Bk.sceneDepth ? Xk : 0) | (Bk.movesVertices ? bk : 0) | (Bk.sunShadow ? wk : 0) | (Bk.airShadow ? dk : 0) | (Bk.discards ? sk : 0) | Rk("localPosition", Vk) | Rk("enchantSpeed", Jk) | Rk("enchantTier", Ak), Fk.hooks[kk * ak] = yk(Bk.hooks.vertex), Fk.hooks[kk * ak + 1] = yk(Bk.hooks.surface), Fk.hooks[kk * ak + 2] = yk(Bk.hooks.light), Fk.moduleCodes[kk] = Bk.moduleCode, Fk.reads[2 * kk] = Bk.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Bk.reads.fragment.join(" ")
      }
      return Fk
    }

    function Yk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Bk,
        reads: Rk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, tk) => {
        const Vk = tk * ak;
        return {
          key: mk(tk),
          hooks: {
            vertex: fk(Fk[Vk]),
            surface: fk(Fk[Vk + 1]),
            light: fk(Fk[Vk + 2])
          },
          moduleCode: Bk[tk],
          sceneDepth: 0 !== (kk & Xk),
          sunShadow: 0 !== (kk & wk),
          airShadow: 0 !== (kk & dk),
          movesVertices: 0 !== (kk & bk),
          discards: 0 !== (kk & sk),
          reads: {
            vertex: vk(Rk[2 * tk]),
            fragment: vk(Rk[2 * tk + 1])
          }
        }
      }))
    }
  },
  6349: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      g: () => Xk,
      h: () => bk,
      l: () => tk,
      m: () => ak
    });
    const Rk = ["terrain", "liquid", "model"];

    function tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Bk of Rk) kk.push({
          strict: Fk,
          program: Bk
        });
      return kk
    }

    function ak(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function Xk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function bk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !Xk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);