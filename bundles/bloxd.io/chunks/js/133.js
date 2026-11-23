export const id = 133;
export const ids = [133];
export const modules = {
  6596: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadPageShaderPackCompiler: () => jF
    });
    var Xk = {};
    Ik.r(Xk), Ik.d(Xk, {
      ITk: () => Tk,
      N7: () => ik,
      default: () => Yk,
      XTk: () => yk,
      TTk: () => lk,
      initSync: () => dk,
      lt: () => ak,
      YIk: () => qk,
      iTk: () => Lk,
      yTk: () => tk,
      pG: () => Zk,
      lTk: () => jk,
      nG: () => ek,
      aTk: () => wk
    });
    class Tk {
      static __wrap(kk) {
        const Fk = Object.create(Tk.prototype);
        return Fk.__wbg_ptr = kk, Jk.register(Fk, Fk.__wbg_ptr, Fk), Fk
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Jk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        Wk.kbFs(kk, 0)
      }
      get LTk() {
        let kk, Fk;
        try {
          const Ik = Wk.nWrC(this.__wbg_ptr);
          return kk = Ik[0], Fk = Ik[1], Vk(Ik[0], Ik[1])
        } finally {
          Wk.jNWg(kk, Fk, 1)
        }
      }
      get features() {
        const kk = Wk.iZ18(this.__wbg_ptr);
        var Fk = Pk(kk[0], kk[1]);
        return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
      }
      get hooks() {
        const kk = Wk.oaBU(this.__wbg_ptr);
        var Fk = Kk(kk[0], kk[1]).slice();
        return Wk.jNWg(kk[0], 1 * kk[1], 1), Fk
      }
      mapValidationMessage(kk, Fk, Ik, Xk, Tk) {
        let ik, yk;
        try {
          const qk = Wk.i8LE(this.__wbg_ptr, kk, Fk, Ik, xk(Xk), xk(Tk));
          var lk = qk[0],
            ak = qk[1];
          if (qk[3]) throw lk = 0, ak = 0, uk(qk[2]);
          return ik = lk, yk = ak, Vk(lk, ak)
        } finally {
          Wk.jNWg(ik, yk, 1)
        }
      }
      get moduleCodes() {
        const kk = Wk.PdEZ(this.__wbg_ptr);
        var Fk = Pk(kk[0], kk[1]);
        return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
      }
      get tTk() {
        let kk, Fk;
        try {
          const Ik = Wk.mO1A(this.__wbg_ptr);
          return kk = Ik[0], Fk = Ik[1], Vk(Ik[0], Ik[1])
        } finally {
          Wk.jNWg(kk, Fk, 1)
        }
      }
      get reads() {
        const kk = Wk.a7WS(this.__wbg_ptr);
        var Fk = Pk(kk[0], kk[1]);
        return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
      }
      get validationModuleCodes() {
        const kk = Wk.ovkz(this.__wbg_ptr);
        var Fk = Pk(kk[0], kk[1]);
        return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
      }
      get validationModuleKeys() {
        const kk = Wk.mlFj(this.__wbg_ptr);
        var Fk = Kk(kk[0], kk[1]).slice();
        return Wk.jNWg(kk[0], 1 * kk[1], 1), Fk
      }
      get variantFlags() {
        const kk = Wk.Ldc6(this.__wbg_ptr);
        var Fk = Kk(kk[0], kk[1]).slice();
        return Wk.jNWg(kk[0], 1 * kk[1], 1), Fk
      }
    }

    function ik(kk, Fk, Ik, Xk, ik, yk, lk) {
      const ak = pk(kk, Wk.gnXU),
        qk = fk,
        Lk = pk(Fk, Wk.gnXU),
        tk = fk,
        Zk = pk(Ik, Wk.gnXU),
        jk = fk,
        ek = Gk(Xk, Wk.gnXU),
        wk = fk,
        Hk = pk(ik, Wk.gnXU),
        Jk = fk,
        xk = pk(yk, Wk.gnXU),
        Pk = fk,
        Kk = pk(lk, Wk.gnXU),
        Qk = fk,
        sk = Wk.eC8A(ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk);
      if (sk[2]) throw uk(sk[1]);
      return Tk.__wrap(sk[0])
    }

    function yk() {
      const kk = Wk.C1kt();
      var Fk = Pk(kk[0], kk[1]);
      return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
    }

    function lk() {
      const kk = Wk.BnAr();
      var Fk = Pk(kk[0], kk[1]);
      return Wk.jNWg(kk[0], 4 * kk[1], 4), Fk
    }

    function ak() {
      Wk.PAf4()
    }

    function qk(kk, Fk, Ik, Xk, Tk) {
      let ik, yk;
      try {
        const qk = pk(kk, Wk.gnXU),
          Lk = fk,
          tk = Gk(Fk, Wk.gnXU),
          Zk = fk,
          jk = pk(Ik, Wk.gnXU),
          ek = fk,
          wk = Gk(Xk, Wk.gnXU),
          Hk = fk,
          Jk = function(kk, Fk) {
            const Ik = Fk(1 * kk.length, 1) >>> 0;
            return vk().set(kk, Ik / 1), fk = kk.length, Ik
          }(Tk, Wk.gnXU),
          xk = fk,
          Pk = Wk.wLQH(qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk);
        var lk = Pk[0],
          ak = Pk[1];
        if (Pk[3]) throw lk = 0, ak = 0, uk(Pk[2]);
        return ik = lk, yk = ak, Vk(lk, ak)
      } finally {
        Wk.jNWg(ik, yk, 1)
      }
    }

    function Lk() {
      let kk, Fk;
      try {
        const Ik = Wk.Sent();
        return kk = Ik[0], Fk = Ik[1], Vk(Ik[0], Ik[1])
      } finally {
        Wk.jNWg(kk, Fk, 1)
      }
    }

    function tk(kk) {
      let Fk, Ik;
      try {
        const ik = Wk.Th4b(kk);
        var Xk = ik[0],
          Tk = ik[1];
        if (ik[3]) throw Xk = 0, Tk = 0, uk(ik[2]);
        return Fk = Xk, Ik = Tk, Vk(Xk, Tk)
      } finally {
        Wk.jNWg(Fk, Ik, 1)
      }
    }

    function Zk() {
      return Wk.JIr9() >>> 0
    }

    function jk() {
      let kk, Fk;
      try {
        const Ik = Wk.vSS1();
        return kk = Ik[0], Fk = Ik[1], Vk(Ik[0], Ik[1])
      } finally {
        Wk.jNWg(kk, Fk, 1)
      }
    }

    function ek(kk, Fk) {
      let Ik, Xk;
      try {
        const yk = pk(kk, Wk.gnXU),
          lk = fk,
          ak = Gk(Fk, Wk.gnXU),
          qk = fk,
          Lk = Wk.GX0g(yk, lk, ak, qk);
        var Tk = Lk[0],
          ik = Lk[1];
        if (Lk[3]) throw Tk = 0, ik = 0, uk(Lk[2]);
        return Ik = Tk, Xk = ik, Vk(Tk, ik)
      } finally {
        Wk.jNWg(Ik, Xk, 1)
      }
    }

    function wk(kk) {
      let Fk, Ik;
      try {
        const ik = Wk.r2A2(xk(kk));
        var Xk = ik[0],
          Tk = ik[1];
        if (ik[3]) throw Xk = 0, Tk = 0, uk(ik[2]);
        return Fk = Xk, Ik = Tk, Vk(Xk, Tk)
      } finally {
        Wk.jNWg(Fk, Ik, 1)
      }
    }

    function Hk() {
      return {
        __proto__: null,
        KZsF: {
          __proto__: null,
          lSZO: function(kk, Fk) {
            return xk(Error(Vk(kk, Fk)))
          },
          VFwr: function(kk) {
            return null === Ek(kk)
          },
          XWz4: function(kk) {
            return "string" === typeof Ek(kk)
          },
          j82v: function(kk, Fk) {
            const Ik = Ek(Fk),
              Xk = "string" === typeof Ik ? Ik : void 0;
            var Tk, ik = void 0 === (Tk = Xk) || null === Tk ? 0 : function(kk, Fk, Ik) {
                if (void 0 === Ik) {
                  const Ik = Ck.encode(kk),
                    Xk = Fk(Ik.length, 1) >>> 0;
                  return vk().subarray(Xk, Xk + Ik.length).set(Ik), fk = Ik.length, Xk
                }
                let Xk = kk.length,
                  Tk = Fk(Xk, 1) >>> 0;
                const ik = vk();
                let yk = 0;
                for (; yk < Xk; yk++) {
                  const Fk = kk.charCodeAt(yk);
                  if (Fk > 127) break;
                  ik[Tk + yk] = Fk
                }
                if (yk !== Xk) {
                  0 !== yk && (kk = kk.slice(yk)), Tk = Ik(Tk, Xk, Xk = yk + 3 * kk.length, 1) >>> 0;
                  const Fk = vk().subarray(Tk + yk, Tk + Xk);
                  yk += Ck.encodeInto(kk, Fk).written, Tk = Ik(Tk, Xk, yk, 1) >>> 0
                }
                return fk = yk, Tk
              }(Xk, Wk.gnXU, Wk.frC5),
              yk = fk;
            sk().setInt32(kk + 4, yk, !0), sk().setInt32(kk + 0, ik, !0)
          },
          MLW6: function(kk, Fk) {
            throw new Error(Vk(kk, Fk))
          },
          tqgp: function(kk, Fk) {
            return Ek(kk).charCodeAt(Fk >>> 0)
          },
          FDIc: function(kk, Fk) {
            console.error(Vk(kk, Fk))
          },
          ILkq: function(kk) {
            return Ek(kk).length
          },
          qtMZ: function(kk, Fk) {
            return xk(Vk(kk, Fk))
          },
          ZvFS: function(kk) {
            uk(kk)
          }
        }
      }
    }
    Symbol.dispose && (Tk.prototype[Symbol.dispose] = Tk.prototype.free);
    const Jk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => Wk.kbFs(kk, 1)));

    function xk(kk) {
      nk === Ok.length && Ok.push(Ok.length + 1);
      const Fk = nk;
      return nk = Ok[Fk], Ok[Fk] = kk, Fk
    }

    function Pk(kk, Fk) {
      kk >>>= 0;
      const Ik = sk(),
        Xk = [];
      for (let Tk = kk; Tk < kk + 4 * Fk; Tk += 4) Xk.push(uk(Ik.getUint32(Tk, !0)));
      return Xk
    }

    function Kk(kk, Fk) {
      return kk >>>= 0, vk().subarray(kk / 1, kk / 1 + Fk)
    }
    let Qk = null;

    function sk() {
      return null !== Qk && Qk.buffer === Wk.memory.buffer || (Qk = new DataView(Wk.memory.buffer)), Qk
    }

    function Vk(kk, Fk) {
      return function(kk, Fk) {
        Uk += Fk, Uk >= Rk && (bk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), bk.decode(), Uk = Fk);
        return bk.decode(vk().subarray(kk, kk + Fk))
      }(kk >>> 0, Fk)
    }
    let zk = null;
    let Sk = null;

    function vk() {
      return null !== Sk && 0 !== Sk.byteLength || (Sk = new Uint8Array(Wk.memory.buffer)), Sk
    }

    function Ek(kk) {
      return Ok[kk]
    }
    let Ok = new Array(1024).fill(void 0);
    Ok.push(void 0, null, !0, !1);
    let nk = Ok.length;

    function Gk(kk, Fk) {
      const Ik = Fk(4 * kk.length, 4) >>> 0;
      return (null !== zk && 0 !== zk.byteLength || (zk = new Uint32Array(Wk.memory.buffer)), zk).set(kk, Ik / 4), fk = kk.length, Ik
    }

    function pk(kk, Fk) {
      const Ik = Fk(4 * kk.length, 4) >>> 0,
        Xk = sk();
      for (let Tk = 0; Tk < kk.length; Tk++) Xk.setUint32(Ik + 4 * Tk, xk(kk[Tk]), !0);
      return fk = kk.length, Ik
    }

    function uk(kk) {
      const Fk = Ek(kk);
      return function(kk) {
        kk < 1028 || (Ok[kk] = nk, nk = kk)
      }(kk), Fk
    }
    let bk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    bk.decode();
    const Rk = 2146435072;
    let Uk = 0;
    const Ck = new TextEncoder;
    "encodeInto" in Ck || (Ck.encodeInto = function(kk, Fk) {
      const Ik = Ck.encode(kk);
      return Fk.set(Ik), {
        read: kk.length,
        written: Ik.length
      }
    });
    let Nk, ck, Wk, fk = 0;

    function Bk(kk, Fk) {
      return ck = kk, Wk = kk.exports, Nk = Fk, Qk = null, zk = null, Sk = null, Wk.v3dY(), Wk
    }

    function dk(kk) {
      if (void 0 !== Wk) return Wk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Fk = Hk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Bk(new WebAssembly.Instance(kk, Fk), kk)
    }
    async function Yk(kk) {
      if (void 0 !== Wk) return Wk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Fk = Hk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: Ik,
        module: Xk
      } = await async function(kk, Fk) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, Fk)
          } catch (Ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw Ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ik)
          }
          const Xk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Xk, Fk)
        } {
          const Ik = await WebAssembly.instantiate(kk, Fk);
          return Ik instanceof WebAssembly.Instance ? {
            instance: Ik,
            module: kk
          } : Ik
        }
      }(await kk, Fk);
      return Bk(Ik, Xk)
    }
    var Ak = Ik(2803),
      gk = Ik(6599);
    class mk extends Error {
      stage;
      constructor(kk, Fk) {
        super((0, Ak.C)(kk, Fk), {
          cause: Fk
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = kk
      }
    }
    let hk = null,
      rk = null;

    function Dk() {
      return hk ? Promise.resolve(hk) : (rk || (rk = async function() {
        let kk;
        try {
          kk = await (0, Ak.G)(new Ik.U(Ik(6607)), (0, gk.c)("bloxd_wasm_shader_pack"))
        } catch (Fk) {
          throw new mk((0, Ak.M)(Fk), Fk)
        }
        try {
          await Yk({
            module_or_path: kk
          })
        } catch (Fk) {
          throw new mk("instantiate", Fk)
        }
        return hk = Xk, hk
      }(), rk.then(void 0, (() => {
        rk = null
      }))), rk)
    }
    var Mk = Ik(6614);

    function kF(kk) {
      let [Fk, Ik, Xk, Tk] = kk;
      const ik = {
        file: Fk,
        line: Ik,
        message: Xk
      };
      return Tk && (ik.variants = Tk.map(Mk.k)), ik
    }

    function FF(kk) {
      return JSON.parse(kk).map(kF)
    }

    function IF(kk, Fk) {
      if (!Number.isInteger(kk) || kk < 0 || kk > 4294967295) throw new Error(`${Fk} ${kk} is not a whole number from 0 to 4294967295`);
      return kk
    }

    function XF(kk) {
      return [kk.named.map((kk => kk.name)), Uint32Array.from(kk.named, (kk => IF(kk.id, "Texture ID")))]
    }
    const TF = new WeakMap;
    const iF = new WeakMap,
      yF = new WeakSet;

    function lF(kk, Fk) {
      if (yF.has(kk)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Fk()
      } catch (Ik) {
        throw Ik instanceof WebAssembly.RuntimeError && yF.add(kk), Ik
      }
    }

    function aF(kk) {
      let Fk = iF.get(kk);
      if (!Fk) {
        let Ik, Xk;
        Fk = {
          N7: (Fk, Ik) => lF(kk, (() => function(kk, Fk, Ik) {
            const Xk = kk.N7(Fk.map((kk => kk.path)), Fk.map((kk => kk.source)), ...XF(Ik), Ik.aliases.map((kk => kk.name)), Ik.aliases.map((kk => kk.texture)), Ik.aliases.map((kk => kk.kind)));
            let Tk = !1;
            try {
              const kk = Xk.validationModuleCodes,
                Fk = Array.from(Xk.validationModuleKeys, ((Fk, Ik) => ({
                  key: (0, Mk.k)(Fk),
                  code: kk[Ik]
                }))),
                Ik = {
                  errors: FF(Xk.LTk),
                  offInStrict: FF(Xk.tTk),
                  variants: (0, Mk.d)(Xk),
                  validationModules: Fk,
                  features: Xk.features
                };
              return Fk.forEach(((kk, Fk) => {
                TF.set(kk, {
                  pack: Xk,
                  index: Fk
                })
              })), Tk = Fk.length > 0, Ik
            } finally {
              Tk || Xk.free()
            }
          }(kk, Fk, Ik))),
          mapValidationMessage: (Fk, Ik) => {
            const Xk = TF.get(Fk);
            if (!Xk) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return kF(JSON.parse(lF(kk, (() => Xk.pack.mapValidationMessage(Xk.index, Ik.lineNum, Ik.linePos, Ik.message, Ik.type)))))
          },
          YIk: Fk => lF(kk, (() => function(kk, Fk) {
            const Ik = new Int32Array(Fk.length),
              Xk = [];
            return Fk.forEach(((kk, Fk) => {
              Ik[Fk] = kk.variants ? kk.variants.length : -1;
              for (const Ik of kk.variants ?? []) Xk.push((0, Mk.g)(Ik))
            })), FF(kk.YIk(Fk.map((kk => kk.file)), Uint32Array.from(Fk, (kk => IF(kk.line, "Diagnostic line"))), Fk.map((kk => kk.message)), Ik, Uint8Array.from(Xk)))
          }(kk, Fk))),
          nG: Fk => lF(kk, (() => kk.nG(...XF(Fk)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Ik ??= lF(kk, (() => kk.lTk())), Ik
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Xk ??= lF(kk, (() => {
              const Fk = kk.TTk();
              return kk.XTk().map(((kk, Ik) => ({
                path: kk,
                source: Fk[Ik]
              })))
            })), Xk
          },
          aTk: Fk => lF(kk, (() => kk.aTk(Fk))),
          resolveHeader: Fk => lF(kk, (() => kk.yTk((0, Mk.g)(Fk)))),
          iTk: () => lF(kk, (() => kk.iTk()))
        }, iF.set(kk, Fk)
      }
      return Fk
    }
    var qF = Ik(3157),
      LF = Ik(6611);
    const tF = "bloxdShaderPackWasmFailureReported";
    let ZF = null;

    function jF() {
      return ZF ??= async function() {
        if ("undefined" === typeof WebAssembly) return eF("unsupported", "This browser has no WebAssembly"), null;
        const kk = (0, LF.loadShaderPackTextures)().then((() => !0), (kk => (console.error("Could not load the shader pack textures, so shader packs can't run", kk), !1)));
        try {
          const Fk = await async function() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dk;
            return aF(await kk())
          }();
          return await kk ? Fk : null
        } catch (Fk) {
          const kk = Fk instanceof Error ? Fk.message : String(Fk);
          return eF(qF.c[Fk instanceof mk ? Fk.stage : "instantiate"], kk), null
        }
      }(), ZF
    }

    function eF(kk, Fk) {
      (0, qF.j)(tF, `Shader pack wasm ${kk}, so shader packs can't run: ${Fk}`, Fk, `shader_pack_${kk}`)
    }
  },
  6607: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/bloxd_wasm_shader_pack_bg.0b035301e43007771c4d.wasm"
  },
  6599: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(2803);
    const Tk = {
      bloxd_wasm: () => "e2f9e22926b42992a62e6da973b3cd1227290abc3e4b086f16ef7a6e7451e01c",
      bloxd_wasm_client: () => "197b3a58630dd256c73f6be56077b03aba52688d49b256cfcb5b4297a602be6f",
      bloxd_wasm_workers: () => "c531aa2c5eb2277940017568a817b82729d5bd8e37ed09fdb9542eeedecfabb2",
      bloxd_wasm_models: () => "82813a7dd849808b1d07d41cb80b2035277c675f83cdbe5540a809aa86e18dae",
      bloxd_wasm_webgpu: () => "2066e38e37e17624dae8b4b9c559f5daf047cb3ceb4eb8056d5135d5b3d9eb24",
      bloxd_wasm_webgl: () => "3d1d580992195f6369c2533ce100ae6e8452da7398faf88e49b339f937ec6192",
      bloxd_wasm_webgl1: () => "8032d9766cccf3c8343274c4d612b6bb3252bd4e5129a88b0ce812c44371db80",
      bloxd_wasm_replay: () => "8d3f5aa602437d8a622249e4b26ef375d3132f03479495456878d8869447f290",
      bloxd_wasm_recorder: () => "4e4293beaac6f6862394c42133a435a6ade3bf181e4ae4bc1a5a3c0c8e0c9dd2",
      bloxd_wasm_anim: () => "125adb66f5cee367958854d2a9364d34f8d55bf2c7b62e20f2a9dcc7b9af5035",
      bloxd_wasm_textures: () => "b45159af64c2cb22c8ac7c32ed16b3591e0026feb57c6ebfb95e710677904764",
      bloxd_wasm_shader_pack: () => "b4044fc49c30628f5ddaad152e8054fb78f46958556f35beebe36f24a022d42c"
    };
    var ik = Ik(4692);

    function yk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(Tk, kk) ? Tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ik.C
      };
      throw new Xk.g(`${kk} has no release digest, so this build refuses it`)
    }
  },
  6614: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Kk,
      d: () => Qk,
      g: () => xk,
      k: () => Jk
    });
    var Xk = Ik(6622);
    const Tk = 6,
      ik = 3,
      yk = 1,
      lk = 2,
      ak = 4,
      qk = 8,
      Lk = 16,
      tk = 32,
      Zk = 64,
      jk = 128,
      ek = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wk(kk) {
      if (!kk) return 0;
      const Fk = ek.indexOf(kk);
      if (Fk <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return Fk
    }

    function Hk(kk) {
      if (0 === kk) return null;
      const Fk = ek[kk];
      if (void 0 === Fk) throw new Error(`${kk} is not a shader pack hook function id`);
      return Fk
    }

    function Jk(kk) {
      const Fk = Xk.b.length;
      return {
        strict: kk >= Fk,
        program: Xk.b[kk % Fk]
      }
    }

    function xk(kk) {
      return Number(kk.strict) * Xk.b.length + Xk.b.indexOf(kk.program)
    }

    function Pk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Kk(kk) {
      const Fk = {
        variantFlags: new Uint8Array(Tk),
        hooks: new Uint8Array(Tk * ik),
        moduleCodes: Array(Tk).fill(""),
        reads: Array(2 * Tk).fill("")
      };
      for (const Ik of kk) {
        const kk = xk(Ik.key),
          Xk = (kk, Fk) => null === Ik.hooks.surface || Ik.reads.fragment.includes(kk) ? 0 : Fk;
        Fk.variantFlags[kk] = (Ik.sceneDepth ? yk : 0) | (Ik.movesVertices ? lk : 0) | (Ik.sunShadow ? ak : 0) | (Ik.airShadow ? qk : 0) | (Ik.discards ? Lk : 0) | Xk("localPosition", tk) | Xk("enchantSpeed", Zk) | Xk("enchantTier", jk), Fk.hooks[kk * ik] = wk(Ik.hooks.vertex), Fk.hooks[kk * ik + 1] = wk(Ik.hooks.surface), Fk.hooks[kk * ik + 2] = wk(Ik.hooks.light), Fk.moduleCodes[kk] = Ik.moduleCode, Fk.reads[2 * kk] = Ik.reads.vertex.join(" "), Fk.reads[2 * kk + 1] = Ik.reads.fragment.join(" ")
      }
      return Fk
    }

    function Qk(kk) {
      const {
        hooks: Fk,
        moduleCodes: Ik,
        reads: Xk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, Tk) => {
        const tk = Tk * ik;
        return {
          key: Jk(Tk),
          hooks: {
            vertex: Hk(Fk[tk]),
            surface: Hk(Fk[tk + 1]),
            light: Hk(Fk[tk + 2])
          },
          moduleCode: Ik[Tk],
          sceneDepth: 0 !== (kk & yk),
          sunShadow: 0 !== (kk & ak),
          airShadow: 0 !== (kk & qk),
          movesVertices: 0 !== (kk & lk),
          discards: 0 !== (kk & Lk),
          reads: {
            vertex: Pk(Xk[2 * Tk]),
            fragment: Pk(Xk[2 * Tk + 1])
          }
        }
      }))
    }
  },
  6622: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => yk,
      f: () => lk,
      h: () => Tk,
      i: () => ik
    });
    const Xk = ["terrain", "liquid", "model"];

    function Tk() {
      const kk = [];
      for (const Fk of [!1, !0])
        for (const Ik of Xk) kk.push({
          strict: Fk,
          program: Ik
        });
      return kk
    }

    function ik(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function yk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function lk(kk, Fk) {
      return "off" !== Fk && (null === kk || kk.some((kk => kk.key.strict === ("strict" === Fk) && !yk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);