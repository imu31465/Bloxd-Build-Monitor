export const id = 131;
export const ids = [131];
export const modules = {
  6339: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      loadPageShaderPackCompiler: () => Wz
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      phv: () => Sv,
      L_: () => ev,
      default: () => Bv,
      dhv: () => gv,
      Nhv: () => pv,
      initSync: () => yv,
      hT: () => dv,
      Jzv: () => Nv,
      lhv: () => lv,
      Thv: () => Tv,
      qD: () => Wv,
      Whv: () => wv,
      RD: () => av,
      whv: () => sv
    });
    class Sv {
      static __wrap(vv) {
        const zv = Object.create(Sv.prototype);
        return zv.__wbg_ptr = vv, iv.register(zv, zv.__wbg_ptr, zv), zv
      }
      __destroy_into_raw() {
        const vv = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iv.unregister(this), vv
      }
      free() {
        const vv = this.__destroy_into_raw();
        Lv.t65c(vv, 0)
      }
      get errorsJson() {
        let vv, zv;
        try {
          const Pv = Lv.w1iY(this.__wbg_ptr);
          return vv = Pv[0], zv = Pv[1], Fv(Pv[0], Pv[1])
        } finally {
          Lv.bLS9(vv, zv, 1)
        }
      }
      get features() {
        const vv = Lv.ydfZ(this.__wbg_ptr);
        var zv = Gv(vv[0], vv[1]);
        return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
      }
      get hooks() {
        const vv = Lv.JQM6(this.__wbg_ptr);
        var zv = mv(vv[0], vv[1]).slice();
        return Lv.bLS9(vv[0], 1 * vv[1], 1), zv
      }
      mapValidationMessage(vv, zv, Pv, hv, Sv) {
        let ev, gv;
        try {
          const Nv = Lv.lkDN(this.__wbg_ptr, vv, zv, Pv, cv(hv), cv(Sv));
          var pv = Nv[0],
            dv = Nv[1];
          if (Nv[3]) throw pv = 0, dv = 0, xv(Nv[2]);
          return ev = pv, gv = dv, Fv(pv, dv)
        } finally {
          Lv.bLS9(ev, gv, 1)
        }
      }
      get moduleCodes() {
        const vv = Lv.wcbJ(this.__wbg_ptr);
        var zv = Gv(vv[0], vv[1]);
        return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
      }
      get offInStrictJson() {
        let vv, zv;
        try {
          const Pv = Lv.K7UP(this.__wbg_ptr);
          return vv = Pv[0], zv = Pv[1], Fv(Pv[0], Pv[1])
        } finally {
          Lv.bLS9(vv, zv, 1)
        }
      }
      get reads() {
        const vv = Lv.AmYO(this.__wbg_ptr);
        var zv = Gv(vv[0], vv[1]);
        return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
      }
      get validationModuleCodes() {
        const vv = Lv.T6QT(this.__wbg_ptr);
        var zv = Gv(vv[0], vv[1]);
        return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
      }
      get validationModuleKeys() {
        const vv = Lv.TYJ2(this.__wbg_ptr);
        var zv = mv(vv[0], vv[1]).slice();
        return Lv.bLS9(vv[0], 1 * vv[1], 1), zv
      }
      get variantFlags() {
        const vv = Lv.FGDi(this.__wbg_ptr);
        var zv = mv(vv[0], vv[1]).slice();
        return Lv.bLS9(vv[0], 1 * vv[1], 1), zv
      }
    }

    function ev(vv, zv, Pv, hv, ev, gv, pv) {
      const dv = Rv(vv, Lv.KYJk),
        Nv = Hv,
        lv = Rv(zv, Lv.KYJk),
        Tv = Hv,
        Wv = Rv(Pv, Lv.KYJk),
        wv = Hv,
        av = Uv(hv, Lv.KYJk),
        sv = Hv,
        Cv = Rv(ev, Lv.KYJk),
        iv = Hv,
        cv = Rv(gv, Lv.KYJk),
        Gv = Hv,
        mv = Rv(pv, Lv.KYJk),
        jv = Hv,
        fv = Lv.qVI4(dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv);
      if (fv[2]) throw xv(fv[1]);
      return Sv.__wrap(fv[0])
    }

    function gv() {
      const vv = Lv.DesA();
      var zv = Gv(vv[0], vv[1]);
      return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
    }

    function pv() {
      const vv = Lv.WFdD();
      var zv = Gv(vv[0], vv[1]);
      return Lv.bLS9(vv[0], 4 * vv[1], 4), zv
    }

    function dv() {
      Lv.vsgV()
    }

    function Nv(vv, zv, Pv, hv, Sv) {
      let ev, gv;
      try {
        const Nv = Rv(vv, Lv.KYJk),
          lv = Hv,
          Tv = Uv(zv, Lv.KYJk),
          Wv = Hv,
          wv = Rv(Pv, Lv.KYJk),
          av = Hv,
          sv = Uv(hv, Lv.KYJk),
          Cv = Hv,
          iv = function(vv, zv) {
            const Pv = zv(1 * vv.length, 1) >>> 0;
            return Ov().set(vv, Pv / 1), Hv = vv.length, Pv
          }(Sv, Lv.KYJk),
          cv = Hv,
          Gv = Lv.LBCf(Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv);
        var pv = Gv[0],
          dv = Gv[1];
        if (Gv[3]) throw pv = 0, dv = 0, xv(Gv[2]);
        return ev = pv, gv = dv, Fv(pv, dv)
      } finally {
        Lv.bLS9(ev, gv, 1)
      }
    }

    function lv() {
      let vv, zv;
      try {
        const Pv = Lv.qpUi();
        return vv = Pv[0], zv = Pv[1], Fv(Pv[0], Pv[1])
      } finally {
        Lv.bLS9(vv, zv, 1)
      }
    }

    function Tv(vv) {
      let zv, Pv;
      try {
        const ev = Lv.nnjL(vv);
        var hv = ev[0],
          Sv = ev[1];
        if (ev[3]) throw hv = 0, Sv = 0, xv(ev[2]);
        return zv = hv, Pv = Sv, Fv(hv, Sv)
      } finally {
        Lv.bLS9(zv, Pv, 1)
      }
    }

    function Wv() {
      return Lv.e9Ks() >>> 0
    }

    function wv() {
      let vv, zv;
      try {
        const Pv = Lv.qC3V();
        return vv = Pv[0], zv = Pv[1], Fv(Pv[0], Pv[1])
      } finally {
        Lv.bLS9(vv, zv, 1)
      }
    }

    function av(vv, zv) {
      let Pv, hv;
      try {
        const gv = Rv(vv, Lv.KYJk),
          pv = Hv,
          dv = Uv(zv, Lv.KYJk),
          Nv = Hv,
          lv = Lv.GYUl(gv, pv, dv, Nv);
        var Sv = lv[0],
          ev = lv[1];
        if (lv[3]) throw Sv = 0, ev = 0, xv(lv[2]);
        return Pv = Sv, hv = ev, Fv(Sv, ev)
      } finally {
        Lv.bLS9(Pv, hv, 1)
      }
    }

    function sv(vv) {
      let zv, Pv;
      try {
        const ev = Lv.t3lI(cv(vv));
        var hv = ev[0],
          Sv = ev[1];
        if (ev[3]) throw hv = 0, Sv = 0, xv(ev[2]);
        return zv = hv, Pv = Sv, Fv(hv, Sv)
      } finally {
        Lv.bLS9(zv, Pv, 1)
      }
    }

    function Cv() {
      return {
        __proto__: null,
        E2vW: {
          __proto__: null,
          gTey: function(vv, zv) {
            return cv(Error(Fv(vv, zv)))
          },
          XrSn: function(vv) {
            return null === Dv(vv)
          },
          wsRG: function(vv) {
            return "string" === typeof Dv(vv)
          },
          da6e: function(vv, zv) {
            const Pv = Dv(zv),
              hv = "string" === typeof Pv ? Pv : void 0;
            var Sv, ev = void 0 === (Sv = hv) || null === Sv ? 0 : function(vv, zv, Pv) {
                if (void 0 === Pv) {
                  const Pv = Qv.encode(vv),
                    hv = zv(Pv.length, 1) >>> 0;
                  return Ov().subarray(hv, hv + Pv.length).set(Pv), Hv = Pv.length, hv
                }
                let hv = vv.length,
                  Sv = zv(hv, 1) >>> 0;
                const ev = Ov();
                let gv = 0;
                for (; gv < hv; gv++) {
                  const zv = vv.charCodeAt(gv);
                  if (zv > 127) break;
                  ev[Sv + gv] = zv
                }
                if (gv !== hv) {
                  0 !== gv && (vv = vv.slice(gv)), Sv = Pv(Sv, hv, hv = gv + 3 * vv.length, 1) >>> 0;
                  const zv = Ov().subarray(Sv + gv, Sv + hv);
                  gv += Qv.encodeInto(vv, zv).written, Sv = Pv(Sv, hv, gv, 1) >>> 0
                }
                return Hv = gv, Sv
              }(hv, Lv.KYJk, Lv.GMV0),
              gv = Hv;
            fv().setInt32(vv + 4, gv, !0), fv().setInt32(vv + 0, ev, !0)
          },
          MZbj: function(vv, zv) {
            throw new Error(Fv(vv, zv))
          },
          GeTw: function(vv, zv) {
            return Dv(vv).charCodeAt(zv >>> 0)
          },
          LSvx: function(vv, zv) {
            console.error(Fv(vv, zv))
          },
          Gegd: function(vv) {
            return Dv(vv).length
          },
          dFzP: function(vv, zv) {
            return cv(Fv(vv, zv))
          },
          H9fO: function(vv) {
            xv(vv)
          }
        }
      }
    }
    Symbol.dispose && (Sv.prototype[Symbol.dispose] = Sv.prototype.free);
    const iv = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((vv => Lv.t65c(vv, 1)));

    function cv(vv) {
      Vv === Kv.length && Kv.push(Kv.length + 1);
      const zv = Vv;
      return Vv = Kv[zv], Kv[zv] = vv, zv
    }

    function Gv(vv, zv) {
      vv >>>= 0;
      const Pv = fv(),
        hv = [];
      for (let Sv = vv; Sv < vv + 4 * zv; Sv += 4) hv.push(xv(Pv.getUint32(Sv, !0)));
      return hv
    }

    function mv(vv, zv) {
      return vv >>>= 0, Ov().subarray(vv / 1, vv / 1 + zv)
    }
    let jv = null;

    function fv() {
      return (null === jv || !0 === jv.buffer.detached || void 0 === jv.buffer.detached && jv.buffer !== Lv.memory.buffer) && (jv = new DataView(Lv.memory.buffer)), jv
    }

    function Fv(vv, zv) {
      return function(vv, zv) {
        Iv += zv, Iv >= qv && (tv = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), tv.decode(), Iv = zv);
        return tv.decode(Ov().subarray(vv, vv + zv))
      }(vv >>> 0, zv)
    }
    let Yv = null;
    let nv = null;

    function Ov() {
      return null !== nv && 0 !== nv.byteLength || (nv = new Uint8Array(Lv.memory.buffer)), nv
    }

    function Dv(vv) {
      return Kv[vv]
    }
    let Kv = new Array(1024).fill(void 0);
    Kv.push(void 0, null, !0, !1);
    let Vv = Kv.length;

    function Uv(vv, zv) {
      const Pv = zv(4 * vv.length, 4) >>> 0;
      return (null !== Yv && 0 !== Yv.byteLength || (Yv = new Uint32Array(Lv.memory.buffer)), Yv).set(vv, Pv / 4), Hv = vv.length, Pv
    }

    function Rv(vv, zv) {
      const Pv = zv(4 * vv.length, 4) >>> 0,
        hv = fv();
      for (let Sv = 0; Sv < vv.length; Sv++) hv.setUint32(Pv + 4 * Sv, cv(vv[Sv]), !0);
      return Hv = vv.length, Pv
    }

    function xv(vv) {
      const zv = Dv(vv);
      return function(vv) {
        vv < 1028 || (Kv[vv] = Vv, Vv = vv)
      }(vv), zv
    }
    let tv = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    tv.decode();
    const qv = 2146435072;
    let Iv = 0;
    const Qv = new TextEncoder;
    "encodeInto" in Qv || (Qv.encodeInto = function(vv, zv) {
      const Pv = Qv.encode(vv);
      return zv.set(Pv), {
        read: vv.length,
        written: Pv.length
      }
    });
    let Zv, Av, Lv, Hv = 0;

    function Mv(vv, zv) {
      return Av = vv, Lv = vv.exports, Zv = zv, jv = null, Yv = null, nv = null, Lv.euml(), Lv
    }

    function yv(vv) {
      if (void 0 !== Lv) return Lv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module: vv
      } = vv) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const zv = Cv();
      vv instanceof WebAssembly.Module || (vv = new WebAssembly.Module(vv));
      return Mv(new WebAssembly.Instance(vv, zv), vv)
    }
    async function Bv(vv) {
      if (void 0 !== Lv) return Lv;
      void 0 !== vv && (Object.getPrototypeOf(vv) === Object.prototype ? ({
        module_or_path: vv
      } = vv) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const zv = Cv();
      ("string" === typeof vv || "function" === typeof Request && vv instanceof Request || "function" === typeof URL && vv instanceof URL) && (vv = fetch(vv));
      const {
        instance: Pv,
        module: hv
      } = await async function(vv, zv) {
        if ("function" === typeof Response && vv instanceof Response) {
          if (!vv.ok) throw new Error(`failed to fetch Wasm: ${vv.status} ${vv.statusText} fetching '${vv.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(vv, zv)
          } catch (Pv) {
            if (! function(vv) {
                switch (vv) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(vv.type) || "application/wasm" === vv.headers.get("Content-Type")) throw Pv;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Pv)
          }
          const hv = await vv.arrayBuffer();
          return await WebAssembly.instantiate(hv, zv)
        } {
          const Pv = await WebAssembly.instantiate(vv, zv);
          return Pv instanceof WebAssembly.Instance ? {
            instance: Pv,
            module: vv
          } : Pv
        }
      }(await vv, zv);
      return Mv(Pv, hv)
    }
    var Jv = Pv(3473),
      Ev = Pv(6343);
    class ov extends Error {
      stage;
      constructor(vv, zv) {
        super((0, Jv.D)(vv, zv), {
          cause: zv
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = vv
      }
    }
    let bv = null,
      rv = null;

    function kv() {
      return bv ? Promise.resolve(bv) : (rv || (rv = async function() {
        let vv;
        try {
          vv = await (0, Jv.F)(new Pv.U(Pv(6345)), (0, Ev.c)("bloxd_wasm_shader_pack"))
        } catch (zv) {
          throw new ov((0, Jv.M)(zv), zv)
        }
        try {
          await Bv({
            module_or_path: vv
          })
        } catch (zv) {
          throw new ov("instantiate", zv)
        }
        return bv = hv, bv
      }(), rv.then(void 0, (() => {
        rv = null
      }))), rv)
    }
    var Xv = Pv(6359);

    function uv(vv) {
      let [zv, Pv, hv, Sv] = vv;
      const ev = {
        file: zv,
        line: Pv,
        message: hv
      };
      return Sv && (ev.variants = Sv.map(Xv.k)), ev
    }

    function vz(vv) {
      return JSON.parse(vv).map(uv)
    }

    function zz(vv, zv) {
      if (!Number.isInteger(vv) || vv < 0 || vv > 4294967295) throw new Error(`${zv} ${vv} is not a whole number from 0 to 4294967295`);
      return vv
    }

    function Pz(vv) {
      return [vv.named.map((vv => vv.name)), Uint32Array.from(vv.named, (vv => zz(vv.id, "Texture ID")))]
    }
    const hz = new WeakMap;
    const Sz = new WeakMap,
      ez = new WeakSet;

    function gz(vv, zv) {
      if (ez.has(vv)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return zv()
      } catch (Pv) {
        throw Pv instanceof WebAssembly.RuntimeError && ez.add(vv), Pv
      }
    }

    function pz(vv) {
      let zv = Sz.get(vv);
      if (!zv) {
        let Pv, hv;
        zv = {
          L_: (zv, Pv) => gz(vv, (() => function(vv, zv, Pv) {
            const hv = vv.L_(zv.map((vv => vv.path)), zv.map((vv => vv.source)), ...Pz(Pv), Pv.aliases.map((vv => vv.name)), Pv.aliases.map((vv => vv.texture)), Pv.aliases.map((vv => vv.kind)));
            let Sv = !1;
            try {
              const vv = hv.validationModuleCodes,
                zv = Array.from(hv.validationModuleKeys, ((zv, Pv) => ({
                  key: (0, Xv.k)(zv),
                  code: vv[Pv]
                }))),
                Pv = {
                  errors: vz(hv.errorsJson),
                  offInStrict: vz(hv.offInStrictJson),
                  variants: (0, Xv.f)(hv),
                  validationModules: zv,
                  features: hv.features
                };
              return zv.forEach(((vv, zv) => {
                hz.set(vv, {
                  pack: hv,
                  index: zv
                })
              })), Sv = zv.length > 0, Pv
            } finally {
              Sv || hv.free()
            }
          }(vv, zv, Pv))),
          mapValidationMessage: (zv, Pv) => {
            const hv = hz.get(zv);
            if (!hv) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return uv(JSON.parse(gz(vv, (() => hv.pack.mapValidationMessage(hv.index, Pv.lineNum, Pv.linePos, Pv.message, Pv.type)))))
          },
          Jzv: zv => gz(vv, (() => function(vv, zv) {
            const Pv = new Int32Array(zv.length),
              hv = [];
            return zv.forEach(((vv, zv) => {
              Pv[zv] = vv.variants ? vv.variants.length : -1;
              for (const Pv of vv.variants ?? []) hv.push((0, Xv.h)(Pv))
            })), vz(vv.Jzv(zv.map((vv => vv.file)), Uint32Array.from(zv, (vv => zz(vv.line, "Diagnostic line"))), zv.map((vv => vv.message)), Pv, Uint8Array.from(hv)))
          }(vv, zv))),
          RD: zv => gz(vv, (() => vv.RD(...Pz(zv)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Pv ??= gz(vv, (() => vv.Whv())), Pv
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return hv ??= gz(vv, (() => {
              const zv = vv.Nhv();
              return vv.dhv().map(((vv, Pv) => ({
                path: vv,
                source: zv[Pv]
              })))
            })), hv
          },
          whv: zv => gz(vv, (() => vv.whv(zv))),
          resolveHeader: zv => gz(vv, (() => vv.Thv((0, Xv.h)(zv)))),
          lhv: () => gz(vv, (() => vv.lhv()))
        }, Sz.set(vv, zv)
      }
      return zv
    }
    var dz = Pv(2996),
      Nz = Pv(6351);
    const lz = "bloxdShaderPackWasmFailureReported";
    let Tz = null;

    function Wz() {
      return Tz ??= async function() {
        if ("undefined" === typeof WebAssembly) return wz("unsupported", "This browser has no WebAssembly"), null;
        const vv = (0, Nz.loadShaderPackTextures)().then((() => !0), (vv => (console.error("Could not load the shader pack textures, so shader packs can't run", vv), !1)));
        try {
          const zv = await async function() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kv;
            return pz(await vv())
          }();
          return await vv ? zv : null
        } catch (zv) {
          const vv = zv instanceof Error ? zv.message : String(zv);
          return wz(dz.b[zv instanceof ov ? zv.stage : "instantiate"], vv), null
        }
      }(), Tz
    }

    function wz(vv, zv) {
      (0, dz.g)(lz, `Shader pack wasm ${vv}, so shader packs can't run: ${zv}`, zv, `shader_pack_${vv}`)
    }
  },
  6345: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/bloxd_wasm_shader_pack_bg.4ee54bcbea01ff402e2f.wasm"
  },
  6343: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(3473);
    const Sv = {
      bloxd_wasm: () => "242cfb746367816b85c0d450194bdff4c53a9ad8bf401630f6949cb63852d1be",
      bloxd_wasm_client: () => "d02ab3ff378e3cabdd07cd9c554ec471bb49ecb41d1bcfc8f9f48d000f552813",
      bloxd_wasm_workers: () => "8664088122d5b673ff7a8e8f0b71864091addbd11a22fd8877301ef2e1d7d7c6",
      bloxd_wasm_models: () => "0ce508e0c3797e4d2237f5b419263b9df4627372af441dcaec1b4b4938917dcb",
      bloxd_wasm_webgpu: () => "d02362ea4b01ac0b3094c90bd530e9d9541fd4d02dbb0cf37e62ce03b504586a",
      bloxd_wasm_webgl: () => "5587f4c12aefda662a798fa76f5ef5f0d26531308da330b663163a4a6a353686",
      bloxd_wasm_webgl1: () => "330ca93132b966b9f2d177baefcf1ec86106db4d42b6875043c867a4fbf8f714",
      bloxd_wasm_replay: () => "970290489bfdef049310fc4e3d6c024c9afee7381deeccf9925d9d2bf1ad0949",
      bloxd_wasm_recorder: () => "2118a197767ebdac164a9fab410a0150f76cd900eb0e711f4a60fc6e38ae5205",
      bloxd_wasm_anim: () => "fb2fc3b43abfd08ad961098c6784b1c03d7af35338bbd752b5df3af261972615",
      bloxd_wasm_textures: () => "ac6c8ff1da71e10b1ed9866e9a4eb70d166a36bb2f0e1c05cef1de7d9d6b6043",
      bloxd_wasm_shader_pack: () => "d571fee4d34b97756c8d2b36706fa9baf34990285d56aea5ea806d4682070476"
    };
    var ev = Pv(4451);

    function gv(vv) {
      const zv = Object.prototype.hasOwnProperty.call(Sv, vv) ? Sv[vv]() : void 0;
      if (void 0 !== zv) return {
        sha256: zv,
        onMismatch: ev.y
      };
      throw new hv.h(`${vv} has no release digest, so this build refuses it`)
    }
  },
  6359: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => mv,
      f: () => jv,
      h: () => cv,
      k: () => iv
    });
    var hv = Pv(6363);
    const Sv = 6,
      ev = 3,
      gv = 1,
      pv = 2,
      dv = 4,
      Nv = 8,
      lv = 16,
      Tv = 32,
      Wv = 64,
      wv = 128,
      av = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function sv(vv) {
      if (!vv) return 0;
      const zv = av.indexOf(vv);
      if (zv <= 0) throw new Error(`"${vv}" is not a shader pack hook function`);
      return zv
    }

    function Cv(vv) {
      if (0 === vv) return null;
      const zv = av[vv];
      if (void 0 === zv) throw new Error(`${vv} is not a shader pack hook function id`);
      return zv
    }

    function iv(vv) {
      const zv = hv.d.length;
      return {
        strict: vv >= zv,
        program: hv.d[vv % zv]
      }
    }

    function cv(vv) {
      return Number(vv.strict) * hv.d.length + hv.d.indexOf(vv.program)
    }

    function Gv(vv) {
      return "" === vv ? [] : vv.split(" ")
    }

    function mv(vv) {
      const zv = {
        variantFlags: new Uint8Array(Sv),
        hooks: new Uint8Array(Sv * ev),
        moduleCodes: Array(Sv).fill(""),
        reads: Array(2 * Sv).fill("")
      };
      for (const Pv of vv) {
        const vv = cv(Pv.key),
          hv = (vv, zv) => null === Pv.hooks.surface || Pv.reads.fragment.includes(vv) ? 0 : zv;
        zv.variantFlags[vv] = (Pv.sceneDepth ? gv : 0) | (Pv.movesVertices ? pv : 0) | (Pv.sunShadow ? dv : 0) | (Pv.airShadow ? Nv : 0) | (Pv.discards ? lv : 0) | hv("localPosition", Tv) | hv("enchantSpeed", Wv) | hv("enchantTier", wv), zv.hooks[vv * ev] = sv(Pv.hooks.vertex), zv.hooks[vv * ev + 1] = sv(Pv.hooks.surface), zv.hooks[vv * ev + 2] = sv(Pv.hooks.light), zv.moduleCodes[vv] = Pv.moduleCode, zv.reads[2 * vv] = Pv.reads.vertex.join(" "), zv.reads[2 * vv + 1] = Pv.reads.fragment.join(" ")
      }
      return zv
    }

    function jv(vv) {
      const {
        hooks: zv,
        moduleCodes: Pv,
        reads: hv
      } = vv;
      return Array.from(vv.variantFlags, ((vv, Sv) => {
        const Tv = Sv * ev;
        return {
          key: iv(Sv),
          hooks: {
            vertex: Cv(zv[Tv]),
            surface: Cv(zv[Tv + 1]),
            light: Cv(zv[Tv + 2])
          },
          moduleCode: Pv[Sv],
          sceneDepth: 0 !== (vv & gv),
          sunShadow: 0 !== (vv & dv),
          airShadow: 0 !== (vv & Nv),
          movesVertices: 0 !== (vv & pv),
          discards: 0 !== (vv & lv),
          reads: {
            vertex: Gv(hv[2 * Sv]),
            fragment: Gv(hv[2 * Sv + 1])
          }
        }
      }))
    }
  },
  6363: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      h: () => gv,
      j: () => pv,
      k: () => Sv,
      l: () => ev
    });
    const hv = ["terrain", "liquid", "model"];

    function Sv() {
      const vv = [];
      for (const zv of [!1, !0])
        for (const Pv of hv) vv.push({
          strict: zv,
          program: Pv
        });
      return vv
    }

    function ev(vv) {
      return `${vv.strict?"strict":"allow"}.${vv.program}`
    }

    function gv(vv) {
      return !vv.hooks.vertex && !vv.hooks.surface && !vv.hooks.light
    }

    function pv(vv, zv) {
      return "off" !== zv && (null === vv || vv.some((vv => vv.key.strict === ("strict" === zv) && !gv(vv))))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);