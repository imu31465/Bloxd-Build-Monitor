export const id = 136;
export const ids = [136];
export const modules = {
  6816: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadPageShaderPackCompiler: () => Ee
    });
    var Ot = {};
    Vt.r(Ot), Vt.d(Ot, {
      Zqt: () => qt,
      mtt: () => Dt,
      default: () => Yt,
      Lqt: () => mt,
      kqt: () => dt,
      initSync: () => it,
      dQ: () => jt,
      uOt: () => Ht,
      Gqt: () => Xt,
      zqt: () => Qt,
      MI: () => lt,
      oqt: () => Et,
      yI: () => ft,
      rqt: () => wt
    });
    class qt {
      static __wrap(tt) {
        const et = Object.create(qt.prototype);
        return et.__wbg_ptr = tt, Nt.register(et, et.__wbg_ptr, et), et
      }
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Nt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        rt.GelN(tt, 0)
      }
      get Uqt() {
        let tt, et;
        try {
          const Vt = rt.MyJ1(this.__wbg_ptr);
          return tt = Vt[0], et = Vt[1], Kt(Vt[0], Vt[1])
        } finally {
          rt.iTNU(tt, et, 1)
        }
      }
      get features() {
        const tt = rt.z3o2(this.__wbg_ptr);
        var et = bt(tt[0], tt[1]);
        return rt.iTNU(tt[0], 4 * tt[1], 4), et
      }
      get hooks() {
        const tt = rt.XuEX(this.__wbg_ptr);
        var et = Jt(tt[0], tt[1]).slice();
        return rt.iTNU(tt[0], 1 * tt[1], 1), et
      }
      mapValidationMessage(tt, et, Vt, Ot, qt) {
        let Dt, mt;
        try {
          const Ht = rt.ABzg(this.__wbg_ptr, tt, et, Vt, Mt(Ot), Mt(qt));
          var dt = Ht[0],
            jt = Ht[1];
          if (Ht[3]) throw dt = 0, jt = 0, Zt(Ht[2]);
          return Dt = dt, mt = jt, Kt(dt, jt)
        } finally {
          rt.iTNU(Dt, mt, 1)
        }
      }
      get moduleCodes() {
        const tt = rt.g3GX(this.__wbg_ptr);
        var et = bt(tt[0], tt[1]);
        return rt.iTNU(tt[0], 4 * tt[1], 4), et
      }
      get Aqt() {
        let tt, et;
        try {
          const Vt = rt.sx8N(this.__wbg_ptr);
          return tt = Vt[0], et = Vt[1], Kt(Vt[0], Vt[1])
        } finally {
          rt.iTNU(tt, et, 1)
        }
      }
      get reads() {
        const tt = rt.rvgN(this.__wbg_ptr);
        var et = bt(tt[0], tt[1]);
        return rt.iTNU(tt[0], 4 * tt[1], 4), et
      }
      get validationModuleCodes() {
        const tt = rt.jtrd(this.__wbg_ptr);
        var et = bt(tt[0], tt[1]);
        return rt.iTNU(tt[0], 4 * tt[1], 4), et
      }
      get validationModuleKeys() {
        const tt = rt.eu7S(this.__wbg_ptr);
        var et = Jt(tt[0], tt[1]).slice();
        return rt.iTNU(tt[0], 1 * tt[1], 1), et
      }
      get variantFlags() {
        const tt = rt.vW4b(this.__wbg_ptr);
        var et = Jt(tt[0], tt[1]).slice();
        return rt.iTNU(tt[0], 1 * tt[1], 1), et
      }
    }

    function Dt(tt, et, Vt, Ot, Dt, mt, dt) {
      const jt = Pt(tt, rt.RbMh),
        Ht = Ut,
        Xt = Pt(et, rt.RbMh),
        Qt = Ut,
        lt = Pt(Vt, rt.RbMh),
        Et = Ut,
        ft = It(Ot, rt.RbMh),
        wt = Ut,
        yt = Pt(Dt, rt.RbMh),
        Nt = Ut,
        Mt = Pt(mt, rt.RbMh),
        bt = Ut,
        Jt = Pt(dt, rt.RbMh),
        Ct = Ut,
        ut = rt.Ntbe(jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct);
      if (ut[2]) throw Zt(ut[1]);
      return qt.__wrap(ut[0])
    }

    function mt() {
      const tt = rt.raz0();
      var et = bt(tt[0], tt[1]);
      return rt.iTNU(tt[0], 4 * tt[1], 4), et
    }

    function dt() {
      const tt = rt.bxoi();
      var et = bt(tt[0], tt[1]);
      return rt.iTNU(tt[0], 4 * tt[1], 4), et
    }

    function jt() {
      rt.ujyK()
    }

    function Ht(tt, et, Vt, Ot, qt) {
      let Dt, mt;
      try {
        const Ht = Pt(tt, rt.RbMh),
          Xt = Ut,
          Qt = It(et, rt.RbMh),
          lt = Ut,
          Et = Pt(Vt, rt.RbMh),
          ft = Ut,
          wt = It(Ot, rt.RbMh),
          yt = Ut,
          Nt = function(tt, et) {
            const Vt = et(1 * tt.length, 1) >>> 0;
            return Wt().set(tt, Vt / 1), Ut = tt.length, Vt
          }(qt, rt.RbMh),
          Mt = Ut,
          bt = rt.kKBg(Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt);
        var dt = bt[0],
          jt = bt[1];
        if (bt[3]) throw dt = 0, jt = 0, Zt(bt[2]);
        return Dt = dt, mt = jt, Kt(dt, jt)
      } finally {
        rt.iTNU(Dt, mt, 1)
      }
    }

    function Xt() {
      let tt, et;
      try {
        const Vt = rt.w8Od();
        return tt = Vt[0], et = Vt[1], Kt(Vt[0], Vt[1])
      } finally {
        rt.iTNU(tt, et, 1)
      }
    }

    function Qt(tt) {
      let et, Vt;
      try {
        const Dt = rt.s5WP(tt);
        var Ot = Dt[0],
          qt = Dt[1];
        if (Dt[3]) throw Ot = 0, qt = 0, Zt(Dt[2]);
        return et = Ot, Vt = qt, Kt(Ot, qt)
      } finally {
        rt.iTNU(et, Vt, 1)
      }
    }

    function lt() {
      return rt.gppO() >>> 0
    }

    function Et() {
      let tt, et;
      try {
        const Vt = rt.sejk();
        return tt = Vt[0], et = Vt[1], Kt(Vt[0], Vt[1])
      } finally {
        rt.iTNU(tt, et, 1)
      }
    }

    function ft(tt, et) {
      let Vt, Ot;
      try {
        const mt = Pt(tt, rt.RbMh),
          dt = Ut,
          jt = It(et, rt.RbMh),
          Ht = Ut,
          Xt = rt.IIp9(mt, dt, jt, Ht);
        var qt = Xt[0],
          Dt = Xt[1];
        if (Xt[3]) throw qt = 0, Dt = 0, Zt(Xt[2]);
        return Vt = qt, Ot = Dt, Kt(qt, Dt)
      } finally {
        rt.iTNU(Vt, Ot, 1)
      }
    }

    function wt(tt) {
      let et, Vt;
      try {
        const Dt = rt.KlVq(Mt(tt));
        var Ot = Dt[0],
          qt = Dt[1];
        if (Dt[3]) throw Ot = 0, qt = 0, Zt(Dt[2]);
        return et = Ot, Vt = qt, Kt(Ot, qt)
      } finally {
        rt.iTNU(et, Vt, 1)
      }
    }

    function yt() {
      return {
        __proto__: null,
        y6As: {
          __proto__: null,
          Z07Q: function(tt, et) {
            return Mt(Error(Kt(tt, et)))
          },
          RURB: function(tt) {
            return null === St(tt)
          },
          YAbg: function(tt) {
            return "string" === typeof St(tt)
          },
          D4KD: function(tt, et) {
            const Vt = St(et),
              Ot = "string" === typeof Vt ? Vt : void 0;
            var qt, Dt = void 0 === (qt = Ot) || null === qt ? 0 : function(tt, et, Vt) {
                if (void 0 === Vt) {
                  const Vt = Gt.encode(tt),
                    Ot = et(Vt.length, 1) >>> 0;
                  return Wt().subarray(Ot, Ot + Vt.length).set(Vt), Ut = Vt.length, Ot
                }
                let Ot = tt.length,
                  qt = et(Ot, 1) >>> 0;
                const Dt = Wt();
                let mt = 0;
                for (; mt < Ot; mt++) {
                  const et = tt.charCodeAt(mt);
                  if (et > 127) break;
                  Dt[qt + mt] = et
                }
                if (mt !== Ot) {
                  0 !== mt && (tt = tt.slice(mt)), qt = Vt(qt, Ot, Ot = mt + 3 * tt.length, 1) >>> 0;
                  const et = Wt().subarray(qt + mt, qt + Ot);
                  mt += Gt.encodeInto(tt, et).written, qt = Vt(qt, Ot, mt, 1) >>> 0
                }
                return Ut = mt, qt
              }(Ot, rt.RbMh, rt.cFTQ),
              mt = Ut;
            ut().setInt32(tt + 4, mt, !0), ut().setInt32(tt + 0, Dt, !0)
          },
          ogtw: function(tt, et) {
            throw new Error(Kt(tt, et))
          },
          V3Ms: function(tt, et) {
            return St(tt).charCodeAt(et >>> 0)
          },
          rnpI: function(tt, et) {
            console.error(Kt(tt, et))
          },
          ZGKz: function(tt) {
            return St(tt).length
          },
          W3zI: function(tt, et) {
            return Mt(Kt(tt, et))
          },
          JG0r: function(tt) {
            Zt(tt)
          }
        }
      }
    }
    Symbol.dispose && (qt.prototype[Symbol.dispose] = qt.prototype.free);
    const Nt = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((tt => rt.GelN(tt, 1)));

    function Mt(tt) {
      Rt === ct.length && ct.push(ct.length + 1);
      const et = Rt;
      return Rt = ct[et], ct[et] = tt, et
    }

    function bt(tt, et) {
      tt >>>= 0;
      const Vt = ut(),
        Ot = [];
      for (let qt = tt; qt < tt + 4 * et; qt += 4) Ot.push(Zt(Vt.getUint32(qt, !0)));
      return Ot
    }

    function Jt(tt, et) {
      return tt >>>= 0, Wt().subarray(tt / 1, tt / 1 + et)
    }
    let Ct = null;

    function ut() {
      return null !== Ct && Ct.buffer === rt.memory.buffer || (Ct = new DataView(rt.memory.buffer)), Ct
    }

    function Kt(tt, et) {
      return function(tt, et) {
        kt += et, kt >= Ft && (Lt = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Lt.decode(), kt = et);
        return Lt.decode(Wt().subarray(tt, tt + et))
      }(tt >>> 0, et)
    }
    let ht = null;
    let vt = null;

    function Wt() {
      return null !== vt && 0 !== vt.byteLength || (vt = new Uint8Array(rt.memory.buffer)), vt
    }

    function St(tt) {
      return ct[tt]
    }
    let ct = new Array(1024).fill(void 0);
    ct.push(void 0, null, !0, !1);
    let Rt = ct.length;

    function It(tt, et) {
      const Vt = et(4 * tt.length, 4) >>> 0;
      return (null !== ht && 0 !== ht.byteLength || (ht = new Uint32Array(rt.memory.buffer)), ht).set(tt, Vt / 4), Ut = tt.length, Vt
    }

    function Pt(tt, et) {
      const Vt = et(4 * tt.length, 4) >>> 0,
        Ot = ut();
      for (let qt = 0; qt < tt.length; qt++) Ot.setUint32(Vt + 4 * qt, Mt(tt[qt]), !0);
      return Ut = tt.length, Vt
    }

    function Zt(tt) {
      const et = St(tt);
      return function(tt) {
        tt < 1028 || (ct[tt] = Rt, Rt = tt)
      }(tt), et
    }
    let Lt = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Lt.decode();
    const Ft = 2146435072;
    let kt = 0;
    const Gt = new TextEncoder;
    "encodeInto" in Gt || (Gt.encodeInto = function(tt, et) {
      const Vt = Gt.encode(tt);
      return et.set(Vt), {
        read: tt.length,
        written: Vt.length
      }
    });
    let zt, ot, rt, Ut = 0;

    function At(tt, et) {
      return ot = tt, rt = tt.exports, zt = et, Ct = null, ht = null, vt = null, rt.ld3y(), rt
    }

    function it(tt) {
      if (void 0 !== rt) return rt;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module: tt
      } = tt) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const et = yt();
      tt instanceof WebAssembly.Module || (tt = new WebAssembly.Module(tt));
      return At(new WebAssembly.Instance(tt, et), tt)
    }
    async function Yt(tt) {
      if (void 0 !== rt) return rt;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module_or_path: tt
      } = tt) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const et = yt();
      ("string" === typeof tt || "function" === typeof Request && tt instanceof Request || "function" === typeof URL && tt instanceof URL) && (tt = fetch(tt));
      const {
        instance: Vt,
        module: Ot
      } = await async function(tt, et) {
        if ("function" === typeof Response && tt instanceof Response) {
          if (!tt.ok) throw new Error(`failed to fetch Wasm: ${tt.status} ${tt.statusText} fetching '${tt.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(tt, et)
          } catch (Vt) {
            if (! function(tt) {
                switch (tt) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(tt.type) || "application/wasm" === tt.headers.get("Content-Type")) throw Vt;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Vt)
          }
          const Ot = await tt.arrayBuffer();
          return await WebAssembly.instantiate(Ot, et)
        } {
          const Vt = await WebAssembly.instantiate(tt, et);
          return Vt instanceof WebAssembly.Instance ? {
            instance: Vt,
            module: tt
          } : Vt
        }
      }(await tt, et);
      return At(Vt, Ot)
    }
    var Bt = Vt(2965),
      pt = Vt(6820);
    class xt extends Error {
      stage;
      constructor(tt, et) {
        super((0, Bt.F)(tt, et), {
          cause: et
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = tt
      }
    }
    let Tt = null,
      gt = null;

    function st() {
      return Tt ? Promise.resolve(Tt) : (gt || (gt = async function() {
        let tt;
        try {
          tt = await (0, Bt.G)(new Vt.U(Vt(6823)), (0, pt.c)("bloxd_wasm_shader_pack"))
        } catch (et) {
          throw new xt((0, Bt.J)(et), et)
        }
        try {
          await Yt({
            module_or_path: tt
          })
        } catch (et) {
          throw new xt("instantiate", et)
        }
        return Tt = Ot, Tt
      }(), gt.then(void 0, (() => {
        gt = null
      }))), gt)
    }
    var nt = Vt(6839);

    function te(tt) {
      let [et, Vt, Ot, qt] = tt;
      const Dt = {
        file: et,
        line: Vt,
        message: Ot
      };
      return qt && (Dt.variants = qt.map(nt.n)), Dt
    }

    function ee(tt) {
      return JSON.parse(tt).map(te)
    }

    function Ve(tt, et) {
      if (!Number.isInteger(tt) || tt < 0 || tt > 4294967295) throw new Error(`${et} ${tt} is not a whole number from 0 to 4294967295`);
      return tt
    }

    function Oe(tt) {
      return [tt.named.map((tt => tt.name)), Uint32Array.from(tt.named, (tt => Ve(tt.id, "Texture ID")))]
    }
    const qe = new WeakMap;
    const De = new WeakMap,
      me = new WeakSet;

    function de(tt, et) {
      if (me.has(tt)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return et()
      } catch (Vt) {
        throw Vt instanceof WebAssembly.RuntimeError && me.add(tt), Vt
      }
    }

    function je(tt) {
      let et = De.get(tt);
      if (!et) {
        let Vt, Ot;
        et = {
          mtt: (et, Vt) => de(tt, (() => function(tt, et, Vt) {
            const Ot = tt.mtt(et.map((tt => tt.path)), et.map((tt => tt.source)), ...Oe(Vt), Vt.aliases.map((tt => tt.name)), Vt.aliases.map((tt => tt.texture)), Vt.aliases.map((tt => tt.kind)));
            let qt = !1;
            try {
              const tt = Ot.validationModuleCodes,
                et = Array.from(Ot.validationModuleKeys, ((et, Vt) => ({
                  key: (0, nt.n)(et),
                  code: tt[Vt]
                }))),
                Vt = {
                  errors: ee(Ot.Uqt),
                  offInStrict: ee(Ot.Aqt),
                  variants: (0, nt.i)(Ot),
                  validationModules: et,
                  features: Ot.features
                };
              return et.forEach(((tt, et) => {
                qe.set(tt, {
                  pack: Ot,
                  index: et
                })
              })), qt = et.length > 0, Vt
            } finally {
              qt || Ot.free()
            }
          }(tt, et, Vt))),
          mapValidationMessage: (et, Vt) => {
            const Ot = qe.get(et);
            if (!Ot) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return te(JSON.parse(de(tt, (() => Ot.pack.mapValidationMessage(Ot.index, Vt.lineNum, Vt.linePos, Vt.message, Vt.type)))))
          },
          uOt: et => de(tt, (() => function(tt, et) {
            const Vt = new Int32Array(et.length),
              Ot = [];
            return et.forEach(((tt, et) => {
              Vt[et] = tt.variants ? tt.variants.length : -1;
              for (const Vt of tt.variants ?? []) Ot.push((0, nt.j)(Vt))
            })), ee(tt.uOt(et.map((tt => tt.file)), Uint32Array.from(et, (tt => Ve(tt.line, "Diagnostic line"))), et.map((tt => tt.message)), Vt, Uint8Array.from(Ot)))
          }(tt, et))),
          yI: et => de(tt, (() => tt.yI(...Oe(et)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Vt ??= de(tt, (() => tt.oqt())), Vt
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Ot ??= de(tt, (() => {
              const et = tt.kqt();
              return tt.Lqt().map(((tt, Vt) => ({
                path: tt,
                source: et[Vt]
              })))
            })), Ot
          },
          rqt: et => de(tt, (() => tt.rqt(et))),
          resolveHeader: et => de(tt, (() => tt.zqt((0, nt.j)(et)))),
          Gqt: () => de(tt, (() => tt.Gqt()))
        }, De.set(tt, et)
      }
      return et
    }
    var He = Vt(3290),
      Xe = Vt(6830);
    const Qe = "bloxdShaderPackWasmFailureReported";
    let le = null;

    function Ee() {
      return le ??= async function() {
        if ("undefined" === typeof WebAssembly) return fe("unsupported", "This browser has no WebAssembly"), null;
        const tt = (0, Xe.loadShaderPackTextures)().then((() => !0), (tt => (console.error("Could not load the shader pack textures, so shader packs can't run", tt), !1)));
        try {
          const et = await async function() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st;
            return je(await tt())
          }();
          return await tt ? et : null
        } catch (et) {
          const tt = et instanceof Error ? et.message : String(et);
          return fe(He.c[et instanceof xt ? et.stage : "instantiate"], tt), null
        }
      }(), le
    }

    function fe(tt, et) {
      (0, He.h)(Qe, `Shader pack wasm ${tt}, so shader packs can't run: ${et}`, et, `shader_pack_${tt}`)
    }
  },
  6823: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_shader_pack_bg.30e250bb399ca81715b9.wasm"
  },
  6820: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    var Ot = Vt(2965);
    const qt = {
      bloxd_wasm: () => "79e619b054ae905a5b8f4bf459846802c4d04f9c338bac0e93fb2e786ccb47d7",
      bloxd_wasm_client: () => "3e9d9c92e80b558e2418153f6d2a1a0bf080851fa9da2f3eac7b5d131fa1208b",
      bloxd_wasm_workers: () => "d6180b50b2f3a41f4cc9ec709c702b403d5c3c14c69a32a117a286fccc1c4cae",
      bloxd_wasm_models: () => "b0007ea7fdbd7aac2fc56ace41940bb9419c473b2c4e22ae586bd9617e961e50",
      bloxd_wasm_webgpu: () => "38c1dcbfb4bbcbb44a23823fffa818ded30864cfa8888b894791e58c09e2b45b",
      bloxd_wasm_webgl: () => "8bc9810de446335f886bb8ec7aec0faad1cf86d215d2899bc364d09bd9e8c969",
      bloxd_wasm_webgl1: () => "67ad9c6dce37796a8d5cd66908a5f05307a9f76718f363441e62f7df779cec5f",
      bloxd_wasm_replay: () => "d4cc807eadefc7c5a5335e66f0d7d03918d890434d43b5338a42fea1e7c35a35",
      bloxd_wasm_recorder: () => "cc2e46ae4efc8d6af5a399e7423d94f6da0332d05b530d991d7a4ca5439ac99d",
      bloxd_wasm_anim: () => "47a23fc87ecc8906f1edafe7d9d71bf5aac49598c5aefc455978f2bcc55551ff",
      bloxd_wasm_textures: () => "4becc450031cb7888091452fd459d969999d55161fb0d00265048d3df8dc21dd",
      bloxd_wasm_shader_pack: () => "9e65c9a3b97efeac864ceaa9c5b11bf65594610d8ff8caa0e62e9a1c70e7968d"
    };
    var Dt = Vt(4851);

    function mt(tt) {
      const et = Object.prototype.hasOwnProperty.call(qt, tt) ? qt[tt]() : void 0;
      if (void 0 !== et) return {
        sha256: et,
        onMismatch: Dt.y
      };
      throw new Ot.g(`${tt} has no release digest, so this build refuses it`)
    }
  },
  6839: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Jt,
      i: () => Ct,
      j: () => Mt,
      n: () => Nt
    });
    var Ot = Vt(6848);
    const qt = 6,
      Dt = 3,
      mt = 1,
      dt = 2,
      jt = 4,
      Ht = 8,
      Xt = 16,
      Qt = 32,
      lt = 64,
      Et = 128,
      ft = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function wt(tt) {
      if (!tt) return 0;
      const et = ft.indexOf(tt);
      if (et <= 0) throw new Error(`"${tt}" is not a shader pack hook function`);
      return et
    }

    function yt(tt) {
      if (0 === tt) return null;
      const et = ft[tt];
      if (void 0 === et) throw new Error(`${tt} is not a shader pack hook function id`);
      return et
    }

    function Nt(tt) {
      const et = Ot.b.length;
      return {
        strict: tt >= et,
        program: Ot.b[tt % et]
      }
    }

    function Mt(tt) {
      return Number(tt.strict) * Ot.b.length + Ot.b.indexOf(tt.program)
    }

    function bt(tt) {
      return "" === tt ? [] : tt.split(" ")
    }

    function Jt(tt) {
      const et = {
        variantFlags: new Uint8Array(qt),
        hooks: new Uint8Array(qt * Dt),
        moduleCodes: Array(qt).fill(""),
        reads: Array(2 * qt).fill("")
      };
      for (const Vt of tt) {
        const tt = Mt(Vt.key),
          Ot = (tt, et) => null === Vt.hooks.surface || Vt.reads.fragment.includes(tt) ? 0 : et;
        et.variantFlags[tt] = (Vt.sceneDepth ? mt : 0) | (Vt.movesVertices ? dt : 0) | (Vt.sunShadow ? jt : 0) | (Vt.airShadow ? Ht : 0) | (Vt.discards ? Xt : 0) | Ot("localPosition", Qt) | Ot("enchantSpeed", lt) | Ot("enchantTier", Et), et.hooks[tt * Dt] = wt(Vt.hooks.vertex), et.hooks[tt * Dt + 1] = wt(Vt.hooks.surface), et.hooks[tt * Dt + 2] = wt(Vt.hooks.light), et.moduleCodes[tt] = Vt.moduleCode, et.reads[2 * tt] = Vt.reads.vertex.join(" "), et.reads[2 * tt + 1] = Vt.reads.fragment.join(" ")
      }
      return et
    }

    function Ct(tt) {
      const {
        hooks: et,
        moduleCodes: Vt,
        reads: Ot
      } = tt;
      return Array.from(tt.variantFlags, ((tt, qt) => {
        const Qt = qt * Dt;
        return {
          key: Nt(qt),
          hooks: {
            vertex: yt(et[Qt]),
            surface: yt(et[Qt + 1]),
            light: yt(et[Qt + 2])
          },
          moduleCode: Vt[qt],
          sceneDepth: 0 !== (tt & mt),
          sunShadow: 0 !== (tt & jt),
          airShadow: 0 !== (tt & Ht),
          movesVertices: 0 !== (tt & dt),
          discards: 0 !== (tt & Xt),
          reads: {
            vertex: bt(Ot[2 * qt]),
            fragment: bt(Ot[2 * qt + 1])
          }
        }
      }))
    }
  },
  6848: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      f: () => mt,
      i: () => dt,
      j: () => qt,
      m: () => Dt
    });
    const Ot = ["terrain", "liquid", "model"];

    function qt() {
      const tt = [];
      for (const et of [!1, !0])
        for (const Vt of Ot) tt.push({
          strict: et,
          program: Vt
        });
      return tt
    }

    function Dt(tt) {
      return `${tt.strict?"strict":"allow"}.${tt.program}`
    }

    function mt(tt) {
      return !tt.hooks.vertex && !tt.hooks.surface && !tt.hooks.light
    }

    function dt(tt, et) {
      return "off" !== et && (null === tt || tt.some((tt => tt.key.strict === ("strict" === et) && !mt(tt))))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);