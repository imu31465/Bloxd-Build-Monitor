export const id = 157;
export const ids = [157];
export const modules = {
  7575: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadPageShaderPackCompiler: () => NS
    });
    var Zr = {};
    Qr.r(Zr), Qr.d(Zr, {
      Aar: () => Wr,
      Vrr: () => ar,
      default: () => cr,
      Var: () => jr,
      Jar: () => Ir,
      initSync: () => wr,
      ip: () => fr,
      RZr: () => Er,
      Dar: () => pr,
      dar: () => xr,
      ZC: () => mr,
      uar: () => Nr,
      rC: () => Ur,
      rjr: () => tr
    });
    class Wr {
      static __wrap(rr) {
        const Sr = Object.create(Wr.prototype);
        return Sr.__wbg_ptr = rr, zr.register(Sr, Sr.__wbg_ptr, Sr), Sr
      }
      __destroy_into_raw() {
        const rr = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zr.unregister(this), rr
      }
      free() {
        const rr = this.__destroy_into_raw();
        Ar.MfqQ(rr, 0)
      }
      get Sjr() {
        let rr, Sr;
        try {
          const Qr = Ar.dNY9(this.__wbg_ptr);
          return rr = Qr[0], Sr = Qr[1], Br(Qr[0], Qr[1])
        } finally {
          Ar.gDuS(rr, Sr, 1)
        }
      }
      get features() {
        const rr = Ar.M3mv(this.__wbg_ptr);
        var Sr = nr(rr[0], rr[1]);
        return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
      }
      get hooks() {
        const rr = Ar.mJps(this.__wbg_ptr);
        var Sr = er(rr[0], rr[1]).slice();
        return Ar.gDuS(rr[0], 1 * rr[1], 1), Sr
      }
      mapValidationMessage(rr, Sr, Qr, Zr, Wr) {
        let ar, jr;
        try {
          const Er = Ar.WQJD(this.__wbg_ptr, rr, Sr, Qr, Yr(Zr), Yr(Wr));
          var Ir = Er[0],
            fr = Er[1];
          if (Er[3]) throw Ir = 0, fr = 0, qr(Er[2]);
          return ar = Ir, jr = fr, Br(Ir, fr)
        } finally {
          Ar.gDuS(ar, jr, 1)
        }
      }
      get moduleCodes() {
        const rr = Ar.OiXG(this.__wbg_ptr);
        var Sr = nr(rr[0], rr[1]);
        return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
      }
      get Qjr() {
        let rr, Sr;
        try {
          const Qr = Ar.KHg9(this.__wbg_ptr);
          return rr = Qr[0], Sr = Qr[1], Br(Qr[0], Qr[1])
        } finally {
          Ar.gDuS(rr, Sr, 1)
        }
      }
      get reads() {
        const rr = Ar.l6Ia(this.__wbg_ptr);
        var Sr = nr(rr[0], rr[1]);
        return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
      }
      get validationModuleCodes() {
        const rr = Ar.gPKP(this.__wbg_ptr);
        var Sr = nr(rr[0], rr[1]);
        return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
      }
      get validationModuleKeys() {
        const rr = Ar.aqnI(this.__wbg_ptr);
        var Sr = er(rr[0], rr[1]).slice();
        return Ar.gDuS(rr[0], 1 * rr[1], 1), Sr
      }
      get variantFlags() {
        const rr = Ar.Y2I8(this.__wbg_ptr);
        var Sr = er(rr[0], rr[1]).slice();
        return Ar.gDuS(rr[0], 1 * rr[1], 1), Sr
      }
    }

    function ar(rr, Sr, Qr, Zr, ar, jr, Ir) {
      const fr = Hr(rr, Ar.mkeo),
        Er = Vr,
        pr = Hr(Sr, Ar.mkeo),
        xr = Vr,
        mr = Hr(Qr, Ar.mkeo),
        Nr = Vr,
        Ur = Pr(Zr, Ar.mkeo),
        tr = Vr,
        hr = Hr(ar, Ar.mkeo),
        zr = Vr,
        Yr = Hr(jr, Ar.mkeo),
        nr = Vr,
        er = Hr(Ir, Ar.mkeo),
        Kr = Vr,
        yr = Ar.EwC1(fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr);
      if (yr[2]) throw qr(yr[1]);
      return Wr.__wrap(yr[0])
    }

    function jr() {
      const rr = Ar.V2Vd();
      var Sr = nr(rr[0], rr[1]);
      return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
    }

    function Ir() {
      const rr = Ar.xngU();
      var Sr = nr(rr[0], rr[1]);
      return Ar.gDuS(rr[0], 4 * rr[1], 4), Sr
    }

    function fr() {
      Ar.D2Ug()
    }

    function Er(rr, Sr, Qr, Zr, Wr) {
      let ar, jr;
      try {
        const Er = Hr(rr, Ar.mkeo),
          pr = Vr,
          xr = Pr(Sr, Ar.mkeo),
          mr = Vr,
          Nr = Hr(Qr, Ar.mkeo),
          Ur = Vr,
          tr = Pr(Zr, Ar.mkeo),
          hr = Vr,
          zr = function(rr, Sr) {
            const Qr = Sr(1 * rr.length, 1) >>> 0;
            return Or().set(rr, Qr / 1), Vr = rr.length, Qr
          }(Wr, Ar.mkeo),
          Yr = Vr,
          nr = Ar.Een5(Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr);
        var Ir = nr[0],
          fr = nr[1];
        if (nr[3]) throw Ir = 0, fr = 0, qr(nr[2]);
        return ar = Ir, jr = fr, Br(Ir, fr)
      } finally {
        Ar.gDuS(ar, jr, 1)
      }
    }

    function pr() {
      let rr, Sr;
      try {
        const Qr = Ar.PEiv();
        return rr = Qr[0], Sr = Qr[1], Br(Qr[0], Qr[1])
      } finally {
        Ar.gDuS(rr, Sr, 1)
      }
    }

    function xr(rr) {
      let Sr, Qr;
      try {
        const ar = Ar.BZxR(rr);
        var Zr = ar[0],
          Wr = ar[1];
        if (ar[3]) throw Zr = 0, Wr = 0, qr(ar[2]);
        return Sr = Zr, Qr = Wr, Br(Zr, Wr)
      } finally {
        Ar.gDuS(Sr, Qr, 1)
      }
    }

    function mr() {
      return Ar.kqD4() >>> 0
    }

    function Nr() {
      let rr, Sr;
      try {
        const Qr = Ar.XNqY();
        return rr = Qr[0], Sr = Qr[1], Br(Qr[0], Qr[1])
      } finally {
        Ar.gDuS(rr, Sr, 1)
      }
    }

    function Ur(rr, Sr) {
      let Qr, Zr;
      try {
        const jr = Hr(rr, Ar.mkeo),
          Ir = Vr,
          fr = Pr(Sr, Ar.mkeo),
          Er = Vr,
          pr = Ar.yc8p(jr, Ir, fr, Er);
        var Wr = pr[0],
          ar = pr[1];
        if (pr[3]) throw Wr = 0, ar = 0, qr(pr[2]);
        return Qr = Wr, Zr = ar, Br(Wr, ar)
      } finally {
        Ar.gDuS(Qr, Zr, 1)
      }
    }

    function tr(rr) {
      let Sr, Qr;
      try {
        const ar = Ar.Foh4(Yr(rr));
        var Zr = ar[0],
          Wr = ar[1];
        if (ar[3]) throw Zr = 0, Wr = 0, qr(ar[2]);
        return Sr = Zr, Qr = Wr, Br(Zr, Wr)
      } finally {
        Ar.gDuS(Sr, Qr, 1)
      }
    }

    function hr() {
      return {
        __proto__: null,
        CyM5: {
          __proto__: null,
          sQ8M: function(rr, Sr) {
            return Yr(Error(Br(rr, Sr)))
          },
          FYzC: function(rr) {
            return null === Lr(rr)
          },
          WzKq: function(rr) {
            return "string" === typeof Lr(rr)
          },
          f9ec: function(rr, Sr) {
            const Qr = Lr(Sr),
              Zr = "string" === typeof Qr ? Qr : void 0;
            var Wr, ar = void 0 === (Wr = Zr) || null === Wr ? 0 : function(rr, Sr, Qr) {
                if (void 0 === Qr) {
                  const Qr = Mr.encode(rr),
                    Zr = Sr(Qr.length, 1) >>> 0;
                  return Or().subarray(Zr, Zr + Qr.length).set(Qr), Vr = Qr.length, Zr
                }
                let Zr = rr.length,
                  Wr = Sr(Zr, 1) >>> 0;
                const ar = Or();
                let jr = 0;
                for (; jr < Zr; jr++) {
                  const Sr = rr.charCodeAt(jr);
                  if (Sr > 127) break;
                  ar[Wr + jr] = Sr
                }
                if (jr !== Zr) {
                  0 !== jr && (rr = rr.slice(jr)), Wr = Qr(Wr, Zr, Zr = jr + 3 * rr.length, 1) >>> 0;
                  const Sr = Or().subarray(Wr + jr, Wr + Zr);
                  jr += Mr.encodeInto(rr, Sr).written, Wr = Qr(Wr, Zr, jr, 1) >>> 0
                }
                return Vr = jr, Wr
              }(Zr, Ar.mkeo, Ar.JN0D),
              jr = Vr;
            yr().setInt32(rr + 4, jr, !0), yr().setInt32(rr + 0, ar, !0)
          },
          CPRo: function(rr, Sr) {
            throw new Error(Br(rr, Sr))
          },
          KszC: function(rr, Sr) {
            return Lr(rr).charCodeAt(Sr >>> 0)
          },
          l3Ju: function(rr, Sr) {
            console.error(Br(rr, Sr))
          },
          YAoG: function(rr) {
            return Lr(rr).length
          },
          CV6t: function(rr, Sr) {
            return Yr(Br(rr, Sr))
          },
          a0zy: function(rr) {
            qr(rr)
          }
        }
      }
    }
    Symbol.dispose && (Wr.prototype[Symbol.dispose] = Wr.prototype.free);
    const zr = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((rr => Ar.MfqQ(rr, 1)));

    function Yr(rr) {
      Xr === lr.length && lr.push(lr.length + 1);
      const Sr = Xr;
      return Xr = lr[Sr], lr[Sr] = rr, Sr
    }

    function nr(rr, Sr) {
      rr >>>= 0;
      const Qr = yr(),
        Zr = [];
      for (let Wr = rr; Wr < rr + 4 * Sr; Wr += 4) Zr.push(qr(Qr.getUint32(Wr, !0)));
      return Zr
    }

    function er(rr, Sr) {
      return rr >>>= 0, Or().subarray(rr / 1, rr / 1 + Sr)
    }
    let Kr = null;

    function yr() {
      return null !== Kr && Kr.buffer === Ar.memory.buffer || (Kr = new DataView(Ar.memory.buffer)), Kr
    }

    function Br(rr, Sr) {
      return function(rr, Sr) {
        Cr += Sr, Cr >= gr && (Rr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Rr.decode(), Cr = Sr);
        return Rr.decode(Or().subarray(rr, rr + Sr))
      }(rr >>> 0, Sr)
    }
    let Tr = null;
    let vr = null;

    function Or() {
      return null !== vr && 0 !== vr.byteLength || (vr = new Uint8Array(Ar.memory.buffer)), vr
    }

    function Lr(rr) {
      return lr[rr]
    }
    let lr = new Array(1024).fill(void 0);
    lr.push(void 0, null, !0, !1);
    let Xr = lr.length;

    function Pr(rr, Sr) {
      const Qr = Sr(4 * rr.length, 4) >>> 0;
      return (null !== Tr && 0 !== Tr.byteLength || (Tr = new Uint32Array(Ar.memory.buffer)), Tr).set(rr, Qr / 4), Vr = rr.length, Qr
    }

    function Hr(rr, Sr) {
      const Qr = Sr(4 * rr.length, 4) >>> 0,
        Zr = yr();
      for (let Wr = 0; Wr < rr.length; Wr++) Zr.setUint32(Qr + 4 * Wr, Yr(rr[Wr]), !0);
      return Vr = rr.length, Qr
    }

    function qr(rr) {
      const Sr = Lr(rr);
      return function(rr) {
        rr < 1028 || (lr[rr] = Xr, Xr = rr)
      }(rr), Sr
    }
    let Rr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Rr.decode();
    const gr = 2146435072;
    let Cr = 0;
    const Mr = new TextEncoder;
    "encodeInto" in Mr || (Mr.encodeInto = function(rr, Sr) {
      const Qr = Mr.encode(rr);
      return Sr.set(Qr), {
        read: rr.length,
        written: Qr.length
      }
    });
    let Gr, kr, Ar, Vr = 0;

    function ir(rr, Sr) {
      return kr = rr, Ar = rr.exports, Gr = Sr, Kr = null, Tr = null, vr = null, Ar.tBFa(), Ar
    }

    function wr(rr) {
      if (void 0 !== Ar) return Ar;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module: rr
      } = rr) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Sr = hr();
      rr instanceof WebAssembly.Module || (rr = new WebAssembly.Module(rr));
      return ir(new WebAssembly.Instance(rr, Sr), rr)
    }
    async function cr(rr) {
      if (void 0 !== Ar) return Ar;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module_or_path: rr
      } = rr) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Sr = hr();
      ("string" === typeof rr || "function" === typeof Request && rr instanceof Request || "function" === typeof URL && rr instanceof URL) && (rr = fetch(rr));
      const {
        instance: Qr,
        module: Zr
      } = await async function(rr, Sr) {
        if ("function" === typeof Response && rr instanceof Response) {
          if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(rr, Sr)
          } catch (Qr) {
            if (! function(rr) {
                switch (rr) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(rr.type) || "application/wasm" === rr.headers.get("Content-Type")) throw Qr;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Qr)
          }
          const Zr = await rr.arrayBuffer();
          return await WebAssembly.instantiate(Zr, Sr)
        } {
          const Qr = await WebAssembly.instantiate(rr, Sr);
          return Qr instanceof WebAssembly.Instance ? {
            instance: Qr,
            module: rr
          } : Qr
        }
      }(await rr, Sr);
      return ir(Qr, Zr)
    }
    var Fr = Qr(2398),
      or = Qr(7577);
    class br extends Error {
      stage;
      constructor(rr, Sr) {
        super((0, Fr.F)(rr, Sr), {
          cause: Sr
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = rr
      }
    }
    let Jr = null,
      Dr = null;

    function dr() {
      return Jr ? Promise.resolve(Jr) : (Dr || (Dr = async function() {
        let rr;
        try {
          rr = await (0, Fr.I)(new Qr.U(Qr(7580)), (0, or.c)("bloxd_wasm_shader_pack"))
        } catch (Sr) {
          throw new br((0, Fr.M)(Sr), Sr)
        }
        try {
          await cr({
            module_or_path: rr
          })
        } catch (Sr) {
          throw new br("instantiate", Sr)
        }
        return Jr = Zr, Jr
      }(), Dr.then(void 0, (() => {
        Dr = null
      }))), Dr)
    }
    var sr = Qr(7595);

    function ur(rr) {
      let [Sr, Qr, Zr, Wr] = rr;
      const ar = {
        file: Sr,
        line: Qr,
        message: Zr
      };
      return Wr && (ar.variants = Wr.map(sr.k)), ar
    }

    function rS(rr) {
      return JSON.parse(rr).map(ur)
    }

    function SS(rr, Sr) {
      if (!Number.isInteger(rr) || rr < 0 || rr > 4294967295) throw new Error(`${Sr} ${rr} is not a whole number from 0 to 4294967295`);
      return rr
    }

    function QS(rr) {
      return [rr.named.map((rr => rr.name)), Uint32Array.from(rr.named, (rr => SS(rr.id, "Texture ID")))]
    }
    const ZS = new WeakMap;
    const WS = new WeakMap,
      aS = new WeakSet;

    function jS(rr, Sr) {
      if (aS.has(rr)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Sr()
      } catch (Qr) {
        throw Qr instanceof WebAssembly.RuntimeError && aS.add(rr), Qr
      }
    }

    function IS(rr) {
      let Sr = WS.get(rr);
      if (!Sr) {
        let Qr, Zr;
        Sr = {
          Vrr: (Sr, Qr) => jS(rr, (() => function(rr, Sr, Qr) {
            const Zr = rr.Vrr(Sr.map((rr => rr.path)), Sr.map((rr => rr.source)), ...QS(Qr), Qr.aliases.map((rr => rr.name)), Qr.aliases.map((rr => rr.texture)), Qr.aliases.map((rr => rr.kind)));
            let Wr = !1;
            try {
              const rr = Zr.validationModuleCodes,
                Sr = Array.from(Zr.validationModuleKeys, ((Sr, Qr) => ({
                  key: (0, sr.k)(Sr),
                  code: rr[Qr]
                }))),
                Qr = {
                  errors: rS(Zr.Sjr),
                  offInStrict: rS(Zr.Qjr),
                  variants: (0, sr.g)(Zr),
                  validationModules: Sr,
                  features: Zr.features
                };
              return Sr.forEach(((rr, Sr) => {
                ZS.set(rr, {
                  pack: Zr,
                  index: Sr
                })
              })), Wr = Sr.length > 0, Qr
            } finally {
              Wr || Zr.free()
            }
          }(rr, Sr, Qr))),
          mapValidationMessage: (Sr, Qr) => {
            const Zr = ZS.get(Sr);
            if (!Zr) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return ur(JSON.parse(jS(rr, (() => Zr.pack.mapValidationMessage(Zr.index, Qr.lineNum, Qr.linePos, Qr.message, Qr.type)))))
          },
          RZr: Sr => jS(rr, (() => function(rr, Sr) {
            const Qr = new Int32Array(Sr.length),
              Zr = [];
            return Sr.forEach(((rr, Sr) => {
              Qr[Sr] = rr.variants ? rr.variants.length : -1;
              for (const Qr of rr.variants ?? []) Zr.push((0, sr.i)(Qr))
            })), rS(rr.RZr(Sr.map((rr => rr.file)), Uint32Array.from(Sr, (rr => SS(rr.line, "Diagnostic line"))), Sr.map((rr => rr.message)), Qr, Uint8Array.from(Zr)))
          }(rr, Sr))),
          rC: Sr => jS(rr, (() => rr.rC(...QS(Sr)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Qr ??= jS(rr, (() => rr.uar())), Qr
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Zr ??= jS(rr, (() => {
              const Sr = rr.Jar();
              return rr.Var().map(((rr, Qr) => ({
                path: rr,
                source: Sr[Qr]
              })))
            })), Zr
          },
          rjr: Sr => jS(rr, (() => rr.rjr(Sr))),
          resolveHeader: Sr => jS(rr, (() => rr.dar((0, sr.i)(Sr)))),
          Dar: () => jS(rr, (() => rr.Dar()))
        }, WS.set(rr, Sr)
      }
      return Sr
    }
    var fS = Qr(4425),
      ES = Qr(335),
      pS = Qr(7588);
    const xS = "bloxdShaderPackWasmFailureReported";
    let mS = null;

    function NS() {
      return mS ??= async function() {
        if ("undefined" === typeof WebAssembly) return US("unsupported", "This browser has no WebAssembly"), null;
        const rr = (0, pS.loadShaderPackTextures)().then((() => !0), (rr => (console.error("Could not load the shader pack textures, so shader packs can't run", rr), !1)));
        try {
          await (0, ES.p)();
          const Sr = await async function() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr;
            return IS(await rr())
          }();
          return await rr ? Sr : null
        } catch (Sr) {
          const rr = Sr instanceof Error ? Sr.message : String(Sr);
          return US(fS.e[Sr instanceof br ? Sr.stage : "instantiate"], rr), null
        }
      }(), mS
    }

    function US(rr, Sr) {
      (0, fS.k)(xS, `Shader pack wasm ${rr}, so shader packs can't run: ${Sr}`, Sr, `shader_pack_${rr}`)
    }
  },
  7580: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_shader_pack_bg.57d655048cabc284946d.wasm"
  },
  7577: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(2398);
    const Wr = {
      bloxd_wasm: () => "0c8b86ea7f87e28f201c328dade5c6244d58a98edf5279fe5c0ea9b57062f385",
      bloxd_wasm_client: () => "299c35eb71d5d037788ea25f6b7287e40485e2a6ed22851efd5823593ae5be1b",
      bloxd_wasm_workers: () => "eaeeb1e1d8f554dcf56047201f83b3954f1d231f54df5846dca6de7c92e59bde",
      bloxd_wasm_models: () => "dc6d52b18d6afa3461a33750f7f1f0c757dbae6ea30bca3991affab56fad42de",
      bloxd_wasm_webgpu: () => "4397e4e2e7e494aef2a757d6873b432cca5ceac83c5a3e54dd330b4ece9ba81a",
      bloxd_wasm_webgl: () => "e3e0bf0da073da5cd2c55227a812527d1d5b4fd38f91e8c71b70364278ad47cf",
      bloxd_wasm_webgl1: () => "6b69ab072c5f9793e3fee3b1fa30c246fb689a2400aefd7f486fe41358e364e5",
      bloxd_wasm_replay: () => "f884251e5cfbdf122fa0e4c2746c9cc8bb3465ab2dcf3e9877f29ba5868851b0",
      bloxd_wasm_recorder: () => "92aabaf952eabf5eb693775f1095c77a6582e07a32896291ede0cd044a026b22",
      bloxd_wasm_anim: () => "74e18404f7ee650a703373595c2a2a131482e1a0dcb950788bac36e01714fec0",
      bloxd_wasm_textures: () => "4752f813d0338c3727c1127168df7e6c13b50988f32409a906ecc533947797ed",
      bloxd_wasm_shader_pack: () => "bc15fb00e7a581fb79301bdbfc659bdbc7ccbe7b0e189b588edf35cbec796fbe"
    };
    var ar = Qr(5498);

    function jr(rr) {
      const Sr = Object.prototype.hasOwnProperty.call(Wr, rr) ? Wr[rr]() : void 0;
      if (void 0 !== Sr) return {
        sha256: Sr,
        onMismatch: ar.F
      };
      throw new Zr.g(`${rr} has no release digest, so this build refuses it`)
    }
  },
  7595: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => er,
      g: () => Kr,
      i: () => Yr,
      k: () => zr
    });
    var Zr = Qr(7604);
    const Wr = 6,
      ar = 3,
      jr = 1,
      Ir = 2,
      fr = 4,
      Er = 8,
      pr = 16,
      xr = 32,
      mr = 64,
      Nr = 128,
      Ur = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function tr(rr) {
      if (!rr) return 0;
      const Sr = Ur.indexOf(rr);
      if (Sr <= 0) throw new Error(`"${rr}" is not a shader pack hook function`);
      return Sr
    }

    function hr(rr) {
      if (0 === rr) return null;
      const Sr = Ur[rr];
      if (void 0 === Sr) throw new Error(`${rr} is not a shader pack hook function id`);
      return Sr
    }

    function zr(rr) {
      const Sr = Zr.e.length;
      return {
        strict: rr >= Sr,
        program: Zr.e[rr % Sr]
      }
    }

    function Yr(rr) {
      return Number(rr.strict) * Zr.e.length + Zr.e.indexOf(rr.program)
    }

    function nr(rr) {
      return "" === rr ? [] : rr.split(" ")
    }

    function er(rr) {
      const Sr = {
        variantFlags: new Uint8Array(Wr),
        hooks: new Uint8Array(Wr * ar),
        moduleCodes: Array(Wr).fill(""),
        reads: Array(2 * Wr).fill("")
      };
      for (const Qr of rr) {
        const rr = Yr(Qr.key),
          Zr = (rr, Sr) => null === Qr.hooks.surface || Qr.reads.fragment.includes(rr) ? 0 : Sr;
        Sr.variantFlags[rr] = (Qr.sceneDepth ? jr : 0) | (Qr.movesVertices ? Ir : 0) | (Qr.sunShadow ? fr : 0) | (Qr.airShadow ? Er : 0) | (Qr.discards ? pr : 0) | Zr("localPosition", xr) | Zr("enchantSpeed", mr) | Zr("enchantTier", Nr), Sr.hooks[rr * ar] = tr(Qr.hooks.vertex), Sr.hooks[rr * ar + 1] = tr(Qr.hooks.surface), Sr.hooks[rr * ar + 2] = tr(Qr.hooks.light), Sr.moduleCodes[rr] = Qr.moduleCode, Sr.reads[2 * rr] = Qr.reads.vertex.join(" "), Sr.reads[2 * rr + 1] = Qr.reads.fragment.join(" ")
      }
      return Sr
    }

    function Kr(rr) {
      const {
        hooks: Sr,
        moduleCodes: Qr,
        reads: Zr
      } = rr;
      return Array.from(rr.variantFlags, ((rr, Wr) => {
        const xr = Wr * ar;
        return {
          key: zr(Wr),
          hooks: {
            vertex: hr(Sr[xr]),
            surface: hr(Sr[xr + 1]),
            light: hr(Sr[xr + 2])
          },
          moduleCode: Qr[Wr],
          sceneDepth: 0 !== (rr & jr),
          sunShadow: 0 !== (rr & fr),
          airShadow: 0 !== (rr & Er),
          movesVertices: 0 !== (rr & Ir),
          discards: 0 !== (rr & pr),
          reads: {
            vertex: nr(Zr[2 * Wr]),
            fragment: nr(Zr[2 * Wr + 1])
          }
        }
      }))
    }
  },
  7604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr,
      f: () => jr,
      g: () => Ir,
      k: () => Wr,
      n: () => ar
    });
    const Zr = ["terrain", "liquid", "model"];

    function Wr() {
      const rr = [];
      for (const Sr of [!1, !0])
        for (const Qr of Zr) rr.push({
          strict: Sr,
          program: Qr
        });
      return rr
    }

    function ar(rr) {
      return `${rr.strict?"strict":"allow"}.${rr.program}`
    }

    function jr(rr) {
      return !rr.hooks.vertex && !rr.hooks.surface && !rr.hooks.light
    }

    function Ir(rr, Sr) {
      return "off" !== Sr && (null === rr || rr.some((rr => rr.key.strict === ("strict" === Sr) && !jr(rr))))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);