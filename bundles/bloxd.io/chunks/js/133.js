export const id = 133;
export const ids = [133];
export const modules = {
  6451: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadPageShaderPackCompiler: () => ne
    });
    var Dk = {};
    ik.r(Dk), ik.d(Dk, {
      BDk: () => fk,
      B5: () => Sk,
      default: () => Tk,
      cDk: () => bk,
      TDk: () => rk,
      initSync: () => ck,
      pK: () => Pk,
      uik: () => mk,
      oDk: () => Mk,
      ZDk: () => Kk,
      sF: () => xk,
      ODk: () => nk,
      jF: () => Uk,
      gDk: () => Hk
    });
    class fk {
      static __wrap(kk) {
        const ek = Object.create(fk.prototype);
        return ek.__wbg_ptr = kk, lk.register(ek, ek.__wbg_ptr, ek), ek
      }
      __destroy_into_raw() {
        const kk = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lk.unregister(this), kk
      }
      free() {
        const kk = this.__destroy_into_raw();
        tk.yxVu(kk, 0)
      }
      get errorsJson() {
        let kk, ek;
        try {
          const ik = tk.H18f(this.__wbg_ptr);
          return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
        } finally {
          tk.DXat(kk, ek, 1)
        }
      }
      get features() {
        const kk = tk.S36g(this.__wbg_ptr);
        var ek = yk(kk[0], kk[1]);
        return tk.DXat(kk[0], 4 * kk[1], 4), ek
      }
      get hooks() {
        const kk = tk.s4Ns(this.__wbg_ptr);
        var ek = Yk(kk[0], kk[1]).slice();
        return tk.DXat(kk[0], 1 * kk[1], 1), ek
      }
      mapValidationMessage(kk, ek, ik, Dk, fk) {
        let Sk, bk;
        try {
          const mk = tk.Ybbn(this.__wbg_ptr, kk, ek, ik, pk(Dk), pk(fk));
          var rk = mk[0],
            Pk = mk[1];
          if (mk[3]) throw rk = 0, Pk = 0, zk(mk[2]);
          return Sk = rk, bk = Pk, Ak(rk, Pk)
        } finally {
          tk.DXat(Sk, bk, 1)
        }
      }
      get moduleCodes() {
        const kk = tk.ypys(this.__wbg_ptr);
        var ek = yk(kk[0], kk[1]);
        return tk.DXat(kk[0], 4 * kk[1], 4), ek
      }
      get offInStrictJson() {
        let kk, ek;
        try {
          const ik = tk.awsx(this.__wbg_ptr);
          return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
        } finally {
          tk.DXat(kk, ek, 1)
        }
      }
      get reads() {
        const kk = tk.U5JA(this.__wbg_ptr);
        var ek = yk(kk[0], kk[1]);
        return tk.DXat(kk[0], 4 * kk[1], 4), ek
      }
      get validationModuleCodes() {
        const kk = tk.CHhG(this.__wbg_ptr);
        var ek = yk(kk[0], kk[1]);
        return tk.DXat(kk[0], 4 * kk[1], 4), ek
      }
      get validationModuleKeys() {
        const kk = tk.N48Y(this.__wbg_ptr);
        var ek = Yk(kk[0], kk[1]).slice();
        return tk.DXat(kk[0], 1 * kk[1], 1), ek
      }
      get variantFlags() {
        const kk = tk.htzm(this.__wbg_ptr);
        var ek = Yk(kk[0], kk[1]).slice();
        return tk.DXat(kk[0], 1 * kk[1], 1), ek
      }
    }

    function Sk(kk, ek, ik, Dk, Sk, bk, rk) {
      const Pk = Ik(kk, tk.ohRF),
        mk = Xk,
        Mk = Ik(ek, tk.ohRF),
        Kk = Xk,
        xk = Ik(ik, tk.ohRF),
        nk = Xk,
        Uk = qk(Dk, tk.ohRF),
        Hk = Xk,
        wk = Ik(Sk, tk.ohRF),
        lk = Xk,
        pk = Ik(bk, tk.ohRF),
        yk = Xk,
        Yk = Ik(rk, tk.ohRF),
        Lk = Xk,
        Ck = tk.jRro(Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk);
      if (Ck[2]) throw zk(Ck[1]);
      return fk.__wrap(Ck[0])
    }

    function bk() {
      const kk = tk.ef4m();
      var ek = yk(kk[0], kk[1]);
      return tk.DXat(kk[0], 4 * kk[1], 4), ek
    }

    function rk() {
      const kk = tk.lHky();
      var ek = yk(kk[0], kk[1]);
      return tk.DXat(kk[0], 4 * kk[1], 4), ek
    }

    function Pk() {
      tk.JzMG()
    }

    function mk(kk, ek, ik, Dk, fk) {
      let Sk, bk;
      try {
        const mk = Ik(kk, tk.ohRF),
          Mk = Xk,
          Kk = qk(ek, tk.ohRF),
          xk = Xk,
          nk = Ik(ik, tk.ohRF),
          Uk = Xk,
          Hk = qk(Dk, tk.ohRF),
          wk = Xk,
          lk = function(kk, ek) {
            const ik = ek(1 * kk.length, 1) >>> 0;
            return dk().set(kk, ik / 1), Xk = kk.length, ik
          }(fk, tk.ohRF),
          pk = Xk,
          yk = tk.yY7q(mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk);
        var rk = yk[0],
          Pk = yk[1];
        if (yk[3]) throw rk = 0, Pk = 0, zk(yk[2]);
        return Sk = rk, bk = Pk, Ak(rk, Pk)
      } finally {
        tk.DXat(Sk, bk, 1)
      }
    }

    function Mk() {
      let kk, ek;
      try {
        const ik = tk.B2tr();
        return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
      } finally {
        tk.DXat(kk, ek, 1)
      }
    }

    function Kk(kk) {
      let ek, ik;
      try {
        const Sk = tk.L0Ce(kk);
        var Dk = Sk[0],
          fk = Sk[1];
        if (Sk[3]) throw Dk = 0, fk = 0, zk(Sk[2]);
        return ek = Dk, ik = fk, Ak(Dk, fk)
      } finally {
        tk.DXat(ek, ik, 1)
      }
    }

    function xk() {
      return tk.FCRf() >>> 0
    }

    function nk() {
      let kk, ek;
      try {
        const ik = tk.qO95();
        return kk = ik[0], ek = ik[1], Ak(ik[0], ik[1])
      } finally {
        tk.DXat(kk, ek, 1)
      }
    }

    function Uk(kk, ek) {
      let ik, Dk;
      try {
        const bk = Ik(kk, tk.ohRF),
          rk = Xk,
          Pk = qk(ek, tk.ohRF),
          mk = Xk,
          Mk = tk.GrdO(bk, rk, Pk, mk);
        var fk = Mk[0],
          Sk = Mk[1];
        if (Mk[3]) throw fk = 0, Sk = 0, zk(Mk[2]);
        return ik = fk, Dk = Sk, Ak(fk, Sk)
      } finally {
        tk.DXat(ik, Dk, 1)
      }
    }

    function Hk(kk) {
      let ek, ik;
      try {
        const Sk = tk.RLBX(pk(kk));
        var Dk = Sk[0],
          fk = Sk[1];
        if (Sk[3]) throw Dk = 0, fk = 0, zk(Sk[2]);
        return ek = Dk, ik = fk, Ak(Dk, fk)
      } finally {
        tk.DXat(ek, ik, 1)
      }
    }

    function wk() {
      return {
        __proto__: null,
        k3P0: {
          __proto__: null,
          wygH: function(kk, ek) {
            return pk(Error(Ak(kk, ek)))
          },
          Hwtb: function(kk) {
            return null === Vk(kk)
          },
          Nsse: function(kk) {
            return "string" === typeof Vk(kk)
          },
          fM67: function(kk, ek) {
            const ik = Vk(ek),
              Dk = "string" === typeof ik ? ik : void 0;
            var fk, Sk = void 0 === (fk = Dk) || null === fk ? 0 : function(kk, ek, ik) {
                if (void 0 === ik) {
                  const ik = hk.encode(kk),
                    Dk = ek(ik.length, 1) >>> 0;
                  return dk().subarray(Dk, Dk + ik.length).set(ik), Xk = ik.length, Dk
                }
                let Dk = kk.length,
                  fk = ek(Dk, 1) >>> 0;
                const Sk = dk();
                let bk = 0;
                for (; bk < Dk; bk++) {
                  const ek = kk.charCodeAt(bk);
                  if (ek > 127) break;
                  Sk[fk + bk] = ek
                }
                if (bk !== Dk) {
                  0 !== bk && (kk = kk.slice(bk)), fk = ik(fk, Dk, Dk = bk + 3 * kk.length, 1) >>> 0;
                  const ek = dk().subarray(fk + bk, fk + Dk);
                  bk += hk.encodeInto(kk, ek).written, fk = ik(fk, Dk, bk, 1) >>> 0
                }
                return Xk = bk, fk
              }(Dk, tk.ohRF, tk.LMB8),
              bk = Xk;
            Ck().setInt32(kk + 4, bk, !0), Ck().setInt32(kk + 0, Sk, !0)
          },
          jLqx: function(kk, ek) {
            throw new Error(Ak(kk, ek))
          },
          jPUq: function(kk, ek) {
            return Vk(kk).charCodeAt(ek >>> 0)
          },
          KzYk: function(kk, ek) {
            console.error(Ak(kk, ek))
          },
          ehLM: function(kk) {
            return Vk(kk).length
          },
          vgVU: function(kk, ek) {
            return pk(Ak(kk, ek))
          },
          WNZ0: function(kk) {
            zk(kk)
          }
        }
      }
    }
    Symbol.dispose && (fk.prototype[Symbol.dispose] = fk.prototype.free);
    const lk = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((kk => tk.yxVu(kk, 1)));

    function pk(kk) {
      uk === Fk.length && Fk.push(Fk.length + 1);
      const ek = uk;
      return uk = Fk[ek], Fk[ek] = kk, ek
    }

    function yk(kk, ek) {
      kk >>>= 0;
      const ik = Ck(),
        Dk = [];
      for (let fk = kk; fk < kk + 4 * ek; fk += 4) Dk.push(zk(ik.getUint32(fk, !0)));
      return Dk
    }

    function Yk(kk, ek) {
      return kk >>>= 0, dk().subarray(kk / 1, kk / 1 + ek)
    }
    let Lk = null;

    function Ck() {
      return (null === Lk || !0 === Lk.buffer.detached || void 0 === Lk.buffer.detached && Lk.buffer !== tk.memory.buffer) && (Lk = new DataView(tk.memory.buffer)), Lk
    }

    function Ak(kk, ek) {
      return function(kk, ek) {
        Ek += ek, Ek >= vk && (Qk = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Qk.decode(), Ek = ek);
        return Qk.decode(dk().subarray(kk, kk + ek))
      }(kk >>> 0, ek)
    }
    let jk = null;
    let sk = null;

    function dk() {
      return null !== sk && 0 !== sk.byteLength || (sk = new Uint8Array(tk.memory.buffer)), sk
    }

    function Vk(kk) {
      return Fk[kk]
    }
    let Fk = new Array(1024).fill(void 0);
    Fk.push(void 0, null, !0, !1);
    let uk = Fk.length;

    function qk(kk, ek) {
      const ik = ek(4 * kk.length, 4) >>> 0;
      return (null !== jk && 0 !== jk.byteLength || (jk = new Uint32Array(tk.memory.buffer)), jk).set(kk, ik / 4), Xk = kk.length, ik
    }

    function Ik(kk, ek) {
      const ik = ek(4 * kk.length, 4) >>> 0,
        Dk = Ck();
      for (let fk = 0; fk < kk.length; fk++) Dk.setUint32(ik + 4 * fk, pk(kk[fk]), !0);
      return Xk = kk.length, ik
    }

    function zk(kk) {
      const ek = Vk(kk);
      return function(kk) {
        kk < 1028 || (Fk[kk] = uk, uk = kk)
      }(kk), ek
    }
    let Qk = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Qk.decode();
    const vk = 2146435072;
    let Ek = 0;
    const hk = new TextEncoder;
    "encodeInto" in hk || (hk.encodeInto = function(kk, ek) {
      const ik = hk.encode(kk);
      return ek.set(ik), {
        read: kk.length,
        written: ik.length
      }
    });
    let ak, Wk, tk, Xk = 0;

    function Bk(kk, ek) {
      return Wk = kk, tk = kk.exports, ak = ek, Lk = null, jk = null, sk = null, tk.pM8e(), tk
    }

    function ck(kk) {
      if (void 0 !== tk) return tk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module: kk
      } = kk) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ek = wk();
      kk instanceof WebAssembly.Module || (kk = new WebAssembly.Module(kk));
      return Bk(new WebAssembly.Instance(kk, ek), kk)
    }
    async function Tk(kk) {
      if (void 0 !== tk) return tk;
      void 0 !== kk && (Object.getPrototypeOf(kk) === Object.prototype ? ({
        module_or_path: kk
      } = kk) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ek = wk();
      ("string" === typeof kk || "function" === typeof Request && kk instanceof Request || "function" === typeof URL && kk instanceof URL) && (kk = fetch(kk));
      const {
        instance: ik,
        module: Dk
      } = await async function(kk, ek) {
        if ("function" === typeof Response && kk instanceof Response) {
          if (!kk.ok) throw new Error(`failed to fetch Wasm: ${kk.status} ${kk.statusText} fetching '${kk.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(kk, ek)
          } catch (ik) {
            if (! function(kk) {
                switch (kk) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(kk.type) || "application/wasm" === kk.headers.get("Content-Type")) throw ik;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ik)
          }
          const Dk = await kk.arrayBuffer();
          return await WebAssembly.instantiate(Dk, ek)
        } {
          const ik = await WebAssembly.instantiate(kk, ek);
          return ik instanceof WebAssembly.Instance ? {
            instance: ik,
            module: kk
          } : ik
        }
      }(await kk, ek);
      return Bk(ik, Dk)
    }
    var Zk = ik(2823),
      Ok = ik(6459);
    class gk extends Error {
      stage;
      constructor(kk, ek) {
        super((0, Zk.E)(kk, ek), {
          cause: ek
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = kk
      }
    }
    let Gk = null,
      Nk = null;

    function Rk() {
      return Gk ? Promise.resolve(Gk) : (Nk || (Nk = async function() {
        let kk;
        try {
          kk = await (0, Zk.I)(new ik.U(ik(6468)), (0, Ok.d)("bloxd_wasm_shader_pack"))
        } catch (ek) {
          throw new gk((0, Zk.N)(ek), ek)
        }
        try {
          await Tk({
            module_or_path: kk
          })
        } catch (ek) {
          throw new gk("instantiate", ek)
        }
        return Gk = Dk, Gk
      }(), Nk.then(void 0, (() => {
        Nk = null
      }))), Nk)
    }
    var Jk = ik(6479);

    function ke(kk) {
      let [ek, ik, Dk, fk] = kk;
      const Sk = {
        file: ek,
        line: ik,
        message: Dk
      };
      return fk && (Sk.variants = fk.map(Jk.n)), Sk
    }

    function ee(kk) {
      return JSON.parse(kk).map(ke)
    }

    function ie(kk, ek) {
      if (!Number.isInteger(kk) || kk < 0 || kk > 4294967295) throw new Error(`${ek} ${kk} is not a whole number from 0 to 4294967295`);
      return kk
    }

    function De(kk) {
      return [kk.named.map((kk => kk.name)), Uint32Array.from(kk.named, (kk => ie(kk.id, "Texture ID")))]
    }
    const fe = new WeakMap;
    const Se = new WeakMap,
      be = new WeakSet;

    function re(kk, ek) {
      if (be.has(kk)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return ek()
      } catch (ik) {
        throw ik instanceof WebAssembly.RuntimeError && be.add(kk), ik
      }
    }

    function Pe(kk) {
      let ek = Se.get(kk);
      if (!ek) {
        let ik, Dk;
        ek = {
          B5: (ek, ik) => re(kk, (() => function(kk, ek, ik) {
            const Dk = kk.B5(ek.map((kk => kk.path)), ek.map((kk => kk.source)), ...De(ik), ik.aliases.map((kk => kk.name)), ik.aliases.map((kk => kk.texture)), ik.aliases.map((kk => kk.kind)));
            let fk = !1;
            try {
              const kk = Dk.validationModuleCodes,
                ek = Array.from(Dk.validationModuleKeys, ((ek, ik) => ({
                  key: (0, Jk.n)(ek),
                  code: kk[ik]
                }))),
                ik = {
                  errors: ee(Dk.errorsJson),
                  offInStrict: ee(Dk.offInStrictJson),
                  variants: (0, Jk.g)(Dk),
                  validationModules: ek,
                  features: Dk.features
                };
              return ek.forEach(((kk, ek) => {
                fe.set(kk, {
                  pack: Dk,
                  index: ek
                })
              })), fk = ek.length > 0, ik
            } finally {
              fk || Dk.free()
            }
          }(kk, ek, ik))),
          mapValidationMessage: (ek, ik) => {
            const Dk = fe.get(ek);
            if (!Dk) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return ke(JSON.parse(re(kk, (() => Dk.pack.mapValidationMessage(Dk.index, ik.lineNum, ik.linePos, ik.message, ik.type)))))
          },
          uik: ek => re(kk, (() => function(kk, ek) {
            const ik = new Int32Array(ek.length),
              Dk = [];
            return ek.forEach(((kk, ek) => {
              ik[ek] = kk.variants ? kk.variants.length : -1;
              for (const ik of kk.variants ?? []) Dk.push((0, Jk.j)(ik))
            })), ee(kk.uik(ek.map((kk => kk.file)), Uint32Array.from(ek, (kk => ie(kk.line, "Diagnostic line"))), ek.map((kk => kk.message)), ik, Uint8Array.from(Dk)))
          }(kk, ek))),
          jF: ek => re(kk, (() => kk.jF(...De(ek)))),
          get SHADER_PACK_HEADER_VERSION() {
            return ik ??= re(kk, (() => kk.ODk())), ik
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Dk ??= re(kk, (() => {
              const ek = kk.TDk();
              return kk.cDk().map(((kk, ik) => ({
                path: kk,
                source: ek[ik]
              })))
            })), Dk
          },
          gDk: ek => re(kk, (() => kk.gDk(ek))),
          resolveHeader: ek => re(kk, (() => kk.ZDk((0, Jk.j)(ek)))),
          oDk: () => re(kk, (() => kk.oDk()))
        }, Se.set(kk, ek)
      }
      return ek
    }
    var me = ik(3190),
      Me = ik(6477);
    const Ke = "bloxdShaderPackWasmFailureReported";
    let xe = null;

    function ne() {
      return xe ??= async function() {
        if ("undefined" === typeof WebAssembly) return Ue("unsupported", "This browser has no WebAssembly"), null;
        const kk = (0, Me.loadShaderPackTextures)().then((() => !0), (kk => (console.error("Could not load the shader pack textures, so shader packs can't run", kk), !1)));
        try {
          const ek = await async function() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rk;
            return Pe(await kk())
          }();
          return await kk ? ek : null
        } catch (ek) {
          const kk = ek instanceof Error ? ek.message : String(ek);
          return Ue(me.d[ek instanceof gk ? ek.stage : "instantiate"], kk), null
        }
      }(), xe
    }

    function Ue(kk, ek) {
      (0, me.i)(Ke, `Shader pack wasm ${kk}, so shader packs can't run: ${ek}`, ek, `shader_pack_${kk}`)
    }
  },
  6468: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/bloxd_wasm_shader_pack_bg.0ec0aac09a9dc6e3be94.wasm"
  },
  6459: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(2823);
    const fk = {
      bloxd_wasm: () => "295c5cd2cc27f19595e8622c000a7c41e60e485a07dbba504442890cbd24a8aa",
      bloxd_wasm_client: () => "416b91d2a16ae728bbeca95bbffddabc8a3a7b4a34aa66d1fe6f3b3eaf78245d",
      bloxd_wasm_workers: () => "1d7067ca0a5537d6f71a4946b88fe0f1c972f70665e18d64e4adb5d5285f18e2",
      bloxd_wasm_models: () => "867866320707b9f1ca78d6925955f07814ec1ca44420a0c7cde5311c04365e33",
      bloxd_wasm_webgpu: () => "9867480be13b90b64fe4abafb562dec31eaac1bd6f0fcc19b9bb76500d4fdc10",
      bloxd_wasm_webgl: () => "9f4c0bbaef65b13dad73d1ed314d3c8b192b18cfc30179c3542f3ca03efb48fd",
      bloxd_wasm_webgl1: () => "014507591fe08d6df7d489a19d8df0b9f54e5fadda2418f355e9f2ae9280bb00",
      bloxd_wasm_replay: () => "03359aae307812a1ddfe49365a61deb594b3a7b4fb670fa4cb1f3ee68976c741",
      bloxd_wasm_recorder: () => "0b07d8728842a235c0e7a2c268ef34837026080bff9775bbc59cb6b2df75da11",
      bloxd_wasm_anim: () => "39f782ac95bb53f159aa901360aa630676baa5e6c493e3edb2871e65cc6a978c",
      bloxd_wasm_textures: () => "ef551c40e5bb3fca12998cd42e0e4317f1aad8584357c16a578ec219fc254bcb",
      bloxd_wasm_shader_pack: () => "9f488776af56b7975c23b43dfcad2bdc3764d5025ab085512a39009b8882a5ef"
    };
    var Sk = ik(4629);

    function bk(kk) {
      const ek = Object.prototype.hasOwnProperty.call(fk, kk) ? fk[kk]() : void 0;
      if (void 0 !== ek) return {
        sha256: ek,
        onMismatch: Sk.s
      };
      throw new Dk.l(`${kk} has no release digest, so this build refuses it`)
    }
  },
  6479: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Yk,
      g: () => Lk,
      j: () => pk,
      n: () => lk
    });
    var Dk = ik(6484);
    const fk = 6,
      Sk = 3,
      bk = 1,
      rk = 2,
      Pk = 4,
      mk = 8,
      Mk = 16,
      Kk = 32,
      xk = 64,
      nk = 128,
      Uk = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Hk(kk) {
      if (!kk) return 0;
      const ek = Uk.indexOf(kk);
      if (ek <= 0) throw new Error(`"${kk}" is not a shader pack hook function`);
      return ek
    }

    function wk(kk) {
      if (0 === kk) return null;
      const ek = Uk[kk];
      if (void 0 === ek) throw new Error(`${kk} is not a shader pack hook function id`);
      return ek
    }

    function lk(kk) {
      const ek = Dk.c.length;
      return {
        strict: kk >= ek,
        program: Dk.c[kk % ek]
      }
    }

    function pk(kk) {
      return Number(kk.strict) * Dk.c.length + Dk.c.indexOf(kk.program)
    }

    function yk(kk) {
      return "" === kk ? [] : kk.split(" ")
    }

    function Yk(kk) {
      const ek = {
        variantFlags: new Uint8Array(fk),
        hooks: new Uint8Array(fk * Sk),
        moduleCodes: Array(fk).fill(""),
        reads: Array(2 * fk).fill("")
      };
      for (const ik of kk) {
        const kk = pk(ik.key),
          Dk = (kk, ek) => null === ik.hooks.surface || ik.reads.fragment.includes(kk) ? 0 : ek;
        ek.variantFlags[kk] = (ik.sceneDepth ? bk : 0) | (ik.movesVertices ? rk : 0) | (ik.sunShadow ? Pk : 0) | (ik.airShadow ? mk : 0) | (ik.discards ? Mk : 0) | Dk("localPosition", Kk) | Dk("enchantSpeed", xk) | Dk("enchantTier", nk), ek.hooks[kk * Sk] = Hk(ik.hooks.vertex), ek.hooks[kk * Sk + 1] = Hk(ik.hooks.surface), ek.hooks[kk * Sk + 2] = Hk(ik.hooks.light), ek.moduleCodes[kk] = ik.moduleCode, ek.reads[2 * kk] = ik.reads.vertex.join(" "), ek.reads[2 * kk + 1] = ik.reads.fragment.join(" ")
      }
      return ek
    }

    function Lk(kk) {
      const {
        hooks: ek,
        moduleCodes: ik,
        reads: Dk
      } = kk;
      return Array.from(kk.variantFlags, ((kk, fk) => {
        const Kk = fk * Sk;
        return {
          key: lk(fk),
          hooks: {
            vertex: wk(ek[Kk]),
            surface: wk(ek[Kk + 1]),
            light: wk(ek[Kk + 2])
          },
          moduleCode: ik[fk],
          sceneDepth: 0 !== (kk & bk),
          sunShadow: 0 !== (kk & Pk),
          airShadow: 0 !== (kk & mk),
          movesVertices: 0 !== (kk & rk),
          discards: 0 !== (kk & Mk),
          reads: {
            vertex: yk(Dk[2 * fk]),
            fragment: yk(Dk[2 * fk + 1])
          }
        }
      }))
    }
  },
  6484: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      f: () => bk,
      j: () => rk,
      k: () => fk,
      m: () => Sk
    });
    const Dk = ["terrain", "liquid", "model"];

    function fk() {
      const kk = [];
      for (const ek of [!1, !0])
        for (const ik of Dk) kk.push({
          strict: ek,
          program: ik
        });
      return kk
    }

    function Sk(kk) {
      return `${kk.strict?"strict":"allow"}.${kk.program}`
    }

    function bk(kk) {
      return !kk.hooks.vertex && !kk.hooks.surface && !kk.hooks.light
    }

    function rk(kk, ek) {
      return "off" !== ek && (null === kk || kk.some((kk => kk.key.strict === ("strict" === ek) && !bk(kk))))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);