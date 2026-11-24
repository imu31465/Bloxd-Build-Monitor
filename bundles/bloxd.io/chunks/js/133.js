export const id = 133;
export const ids = [133];
export const modules = {
  6562: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadPageShaderPackCompiler: () => oT
    });
    var hm = {};
    fm.r(hm), fm.d(hm, {
      AAm: () => Am,
      Z6: () => am,
      default: () => Bm,
      aAm: () => xm,
      xAm: () => wm,
      initSync: () => um,
      Ip: () => Dm,
      Lfm: () => im,
      wAm: () => Rm,
      DAm: () => pm,
      hG: () => Em,
      iAm: () => om,
      mG: () => Om,
      RAm: () => Ym
    });
    class Am {
      static __wrap(mm) {
        const Tm = Object.create(Am.prototype);
        return Tm.__wbg_ptr = mm, jm.register(Tm, Tm.__wbg_ptr, Tm), Tm
      }
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, jm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        sm.HMM0(mm, 0)
      }
      get pAm() {
        let mm, Tm;
        try {
          const fm = sm.QvdY(this.__wbg_ptr);
          return mm = fm[0], Tm = fm[1], Jm(fm[0], fm[1])
        } finally {
          sm.Cuvu(mm, Tm, 1)
        }
      }
      get features() {
        const mm = sm.VpR7(this.__wbg_ptr);
        var Tm = Im(mm[0], mm[1]);
        return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
      }
      get hooks() {
        const mm = sm.hd2l(this.__wbg_ptr);
        var Tm = Km(mm[0], mm[1]).slice();
        return sm.Cuvu(mm[0], 1 * mm[1], 1), Tm
      }
      mapValidationMessage(mm, Tm, fm, hm, Am) {
        let am, xm;
        try {
          const im = sm.sw4X(this.__wbg_ptr, mm, Tm, fm, Vm(hm), Vm(Am));
          var wm = im[0],
            Dm = im[1];
          if (im[3]) throw wm = 0, Dm = 0, Gm(im[2]);
          return am = wm, xm = Dm, Jm(wm, Dm)
        } finally {
          sm.Cuvu(am, xm, 1)
        }
      }
      get moduleCodes() {
        const mm = sm.Pglb(this.__wbg_ptr);
        var Tm = Im(mm[0], mm[1]);
        return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
      }
      get EAm() {
        let mm, Tm;
        try {
          const fm = sm.QfcB(this.__wbg_ptr);
          return mm = fm[0], Tm = fm[1], Jm(fm[0], fm[1])
        } finally {
          sm.Cuvu(mm, Tm, 1)
        }
      }
      get reads() {
        const mm = sm.jq9I(this.__wbg_ptr);
        var Tm = Im(mm[0], mm[1]);
        return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
      }
      get validationModuleCodes() {
        const mm = sm.qZLp(this.__wbg_ptr);
        var Tm = Im(mm[0], mm[1]);
        return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
      }
      get validationModuleKeys() {
        const mm = sm.Dkpo(this.__wbg_ptr);
        var Tm = Km(mm[0], mm[1]).slice();
        return sm.Cuvu(mm[0], 1 * mm[1], 1), Tm
      }
      get variantFlags() {
        const mm = sm.aC3p(this.__wbg_ptr);
        var Tm = Km(mm[0], mm[1]).slice();
        return sm.Cuvu(mm[0], 1 * mm[1], 1), Tm
      }
    }

    function am(mm, Tm, fm, hm, am, xm, wm) {
      const Dm = Nm(mm, sm.YRie),
        im = lm,
        Rm = Nm(Tm, sm.YRie),
        pm = lm,
        Em = Nm(fm, sm.YRie),
        om = lm,
        Om = em(hm, sm.YRie),
        Ym = lm,
        qm = Nm(am, sm.YRie),
        jm = lm,
        Vm = Nm(xm, sm.YRie),
        Im = lm,
        Km = Nm(wm, sm.YRie),
        Qm = lm,
        nm = sm.RZ5J(Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm);
      if (nm[2]) throw Gm(nm[1]);
      return Am.__wrap(nm[0])
    }

    function xm() {
      const mm = sm.EK6q();
      var Tm = Im(mm[0], mm[1]);
      return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
    }

    function wm() {
      const mm = sm.QaJN();
      var Tm = Im(mm[0], mm[1]);
      return sm.Cuvu(mm[0], 4 * mm[1], 4), Tm
    }

    function Dm() {
      sm.DMwA()
    }

    function im(mm, Tm, fm, hm, Am) {
      let am, xm;
      try {
        const im = Nm(mm, sm.YRie),
          Rm = lm,
          pm = em(Tm, sm.YRie),
          Em = lm,
          om = Nm(fm, sm.YRie),
          Om = lm,
          Ym = em(hm, sm.YRie),
          qm = lm,
          jm = function(mm, Tm) {
            const fm = Tm(1 * mm.length, 1) >>> 0;
            return Zm().set(mm, fm / 1), lm = mm.length, fm
          }(Am, sm.YRie),
          Vm = lm,
          Im = sm.az99(im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm);
        var wm = Im[0],
          Dm = Im[1];
        if (Im[3]) throw wm = 0, Dm = 0, Gm(Im[2]);
        return am = wm, xm = Dm, Jm(wm, Dm)
      } finally {
        sm.Cuvu(am, xm, 1)
      }
    }

    function Rm() {
      let mm, Tm;
      try {
        const fm = sm.DyR8();
        return mm = fm[0], Tm = fm[1], Jm(fm[0], fm[1])
      } finally {
        sm.Cuvu(mm, Tm, 1)
      }
    }

    function pm(mm) {
      let Tm, fm;
      try {
        const am = sm.G2Te(mm);
        var hm = am[0],
          Am = am[1];
        if (am[3]) throw hm = 0, Am = 0, Gm(am[2]);
        return Tm = hm, fm = Am, Jm(hm, Am)
      } finally {
        sm.Cuvu(Tm, fm, 1)
      }
    }

    function Em() {
      return sm.ntP4() >>> 0
    }

    function om() {
      let mm, Tm;
      try {
        const fm = sm.HeUK();
        return mm = fm[0], Tm = fm[1], Jm(fm[0], fm[1])
      } finally {
        sm.Cuvu(mm, Tm, 1)
      }
    }

    function Om(mm, Tm) {
      let fm, hm;
      try {
        const xm = Nm(mm, sm.YRie),
          wm = lm,
          Dm = em(Tm, sm.YRie),
          im = lm,
          Rm = sm.Soie(xm, wm, Dm, im);
        var Am = Rm[0],
          am = Rm[1];
        if (Rm[3]) throw Am = 0, am = 0, Gm(Rm[2]);
        return fm = Am, hm = am, Jm(Am, am)
      } finally {
        sm.Cuvu(fm, hm, 1)
      }
    }

    function Ym(mm) {
      let Tm, fm;
      try {
        const am = sm.Jntx(Vm(mm));
        var hm = am[0],
          Am = am[1];
        if (am[3]) throw hm = 0, Am = 0, Gm(am[2]);
        return Tm = hm, fm = Am, Jm(hm, Am)
      } finally {
        sm.Cuvu(Tm, fm, 1)
      }
    }

    function qm() {
      return {
        __proto__: null,
        tMVm: {
          __proto__: null,
          UVEz: function(mm, Tm) {
            return Vm(Error(Jm(mm, Tm)))
          },
          nOcV: function(mm) {
            return null === km(mm)
          },
          vyZ5: function(mm) {
            return "string" === typeof km(mm)
          },
          BbZC: function(mm, Tm) {
            const fm = km(Tm),
              hm = "string" === typeof fm ? fm : void 0;
            var Am, am = void 0 === (Am = hm) || null === Am ? 0 : function(mm, Tm, fm) {
                if (void 0 === fm) {
                  const fm = ym.encode(mm),
                    hm = Tm(fm.length, 1) >>> 0;
                  return Zm().subarray(hm, hm + fm.length).set(fm), lm = fm.length, hm
                }
                let hm = mm.length,
                  Am = Tm(hm, 1) >>> 0;
                const am = Zm();
                let xm = 0;
                for (; xm < hm; xm++) {
                  const Tm = mm.charCodeAt(xm);
                  if (Tm > 127) break;
                  am[Am + xm] = Tm
                }
                if (xm !== hm) {
                  0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
                  const Tm = Zm().subarray(Am + xm, Am + hm);
                  xm += ym.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
                }
                return lm = xm, Am
              }(hm, sm.YRie, sm.rk7X),
              xm = lm;
            nm().setInt32(mm + 4, xm, !0), nm().setInt32(mm + 0, am, !0)
          },
          IbE5: function(mm, Tm) {
            throw new Error(Jm(mm, Tm))
          },
          OeCC: function(mm, Tm) {
            return km(mm).charCodeAt(Tm >>> 0)
          },
          hN1v: function(mm, Tm) {
            console.error(Jm(mm, Tm))
          },
          waJu: function(mm) {
            return km(mm).length
          },
          nc2o: function(mm, Tm) {
            return Vm(Jm(mm, Tm))
          },
          tJ04: function(mm) {
            Gm(mm)
          }
        }
      }
    }
    Symbol.dispose && (Am.prototype[Symbol.dispose] = Am.prototype.free);
    const jm = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((mm => sm.HMM0(mm, 1)));

    function Vm(mm) {
      Sm === bm.length && bm.push(bm.length + 1);
      const Tm = Sm;
      return Sm = bm[Tm], bm[Tm] = mm, Tm
    }

    function Im(mm, Tm) {
      mm >>>= 0;
      const fm = nm(),
        hm = [];
      for (let Am = mm; Am < mm + 4 * Tm; Am += 4) hm.push(Gm(fm.getUint32(Am, !0)));
      return hm
    }

    function Km(mm, Tm) {
      return mm >>>= 0, Zm().subarray(mm / 1, mm / 1 + Tm)
    }
    let Qm = null;

    function nm() {
      return null !== Qm && Qm.buffer === sm.memory.buffer || (Qm = new DataView(sm.memory.buffer)), Qm
    }

    function Jm(mm, Tm) {
      return function(mm, Tm) {
        Hm += Tm, Hm >= Pm && (Xm = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Xm.decode(), Hm = Tm);
        return Xm.decode(Zm().subarray(mm, mm + Tm))
      }(mm >>> 0, Tm)
    }
    let cm = null;
    let zm = null;

    function Zm() {
      return null !== zm && 0 !== zm.byteLength || (zm = new Uint8Array(sm.memory.buffer)), zm
    }

    function km(mm) {
      return bm[mm]
    }
    let bm = new Array(1024).fill(void 0);
    bm.push(void 0, null, !0, !1);
    let Sm = bm.length;

    function em(mm, Tm) {
      const fm = Tm(4 * mm.length, 4) >>> 0;
      return (null !== cm && 0 !== cm.byteLength || (cm = new Uint32Array(sm.memory.buffer)), cm).set(mm, fm / 4), lm = mm.length, fm
    }

    function Nm(mm, Tm) {
      const fm = Tm(4 * mm.length, 4) >>> 0,
        hm = nm();
      for (let Am = 0; Am < mm.length; Am++) hm.setUint32(fm + 4 * Am, Vm(mm[Am]), !0);
      return lm = mm.length, fm
    }

    function Gm(mm) {
      const Tm = km(mm);
      return function(mm) {
        mm < 1028 || (bm[mm] = Sm, Sm = mm)
      }(mm), Tm
    }
    let Xm = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Xm.decode();
    const Pm = 2146435072;
    let Hm = 0;
    const ym = new TextEncoder;
    "encodeInto" in ym || (ym.encodeInto = function(mm, Tm) {
      const fm = ym.encode(mm);
      return Tm.set(fm), {
        read: mm.length,
        written: fm.length
      }
    });
    let Cm, rm, sm, lm = 0;

    function Mm(mm, Tm) {
      return rm = mm, sm = mm.exports, Cm = Tm, Qm = null, cm = null, zm = null, sm.TbUq(), sm
    }

    function um(mm) {
      if (void 0 !== sm) return sm;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module: mm
      } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Tm = qm();
      mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
      return Mm(new WebAssembly.Instance(mm, Tm), mm)
    }
    async function Bm(mm) {
      if (void 0 !== sm) return sm;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module_or_path: mm
      } = mm) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Tm = qm();
      ("string" === typeof mm || "function" === typeof Request && mm instanceof Request || "function" === typeof URL && mm instanceof URL) && (mm = fetch(mm));
      const {
        instance: fm,
        module: hm
      } = await async function(mm, Tm) {
        if ("function" === typeof Response && mm instanceof Response) {
          if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(mm, Tm)
          } catch (fm) {
            if (! function(mm) {
                switch (mm) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(mm.type) || "application/wasm" === mm.headers.get("Content-Type")) throw fm;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", fm)
          }
          const hm = await mm.arrayBuffer();
          return await WebAssembly.instantiate(hm, Tm)
        } {
          const fm = await WebAssembly.instantiate(mm, Tm);
          return fm instanceof WebAssembly.Instance ? {
            instance: fm,
            module: mm
          } : fm
        }
      }(await mm, Tm);
      return Mm(fm, hm)
    }
    var Lm = fm(2876),
      tm = fm(6571);
    class Um extends Error {
      stage;
      constructor(mm, Tm) {
        super((0, Lm.C)(mm, Tm), {
          cause: Tm
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = mm
      }
    }
    let dm = null,
      gm = null;

    function Wm() {
      return dm ? Promise.resolve(dm) : (gm || (gm = async function() {
        let mm;
        try {
          mm = await (0, Lm.G)(new fm.U(fm(6576)), (0, tm.c)("bloxd_wasm_shader_pack"))
        } catch (Tm) {
          throw new Um((0, Lm.M)(Tm), Tm)
        }
        try {
          await Bm({
            module_or_path: mm
          })
        } catch (Tm) {
          throw new Um("instantiate", Tm)
        }
        return dm = hm, dm
      }(), gm.then(void 0, (() => {
        gm = null
      }))), gm)
    }
    var Fm = fm(6580);

    function mT(mm) {
      let [Tm, fm, hm, Am] = mm;
      const am = {
        file: Tm,
        line: fm,
        message: hm
      };
      return Am && (am.variants = Am.map(Fm.i)), am
    }

    function TT(mm) {
      return JSON.parse(mm).map(mT)
    }

    function fT(mm, Tm) {
      if (!Number.isInteger(mm) || mm < 0 || mm > 4294967295) throw new Error(`${Tm} ${mm} is not a whole number from 0 to 4294967295`);
      return mm
    }

    function hT(mm) {
      return [mm.named.map((mm => mm.name)), Uint32Array.from(mm.named, (mm => fT(mm.id, "Texture ID")))]
    }
    const AT = new WeakMap;
    const aT = new WeakMap,
      xT = new WeakSet;

    function wT(mm, Tm) {
      if (xT.has(mm)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Tm()
      } catch (fm) {
        throw fm instanceof WebAssembly.RuntimeError && xT.add(mm), fm
      }
    }

    function DT(mm) {
      let Tm = aT.get(mm);
      if (!Tm) {
        let fm, hm;
        Tm = {
          Z6: (Tm, fm) => wT(mm, (() => function(mm, Tm, fm) {
            const hm = mm.Z6(Tm.map((mm => mm.path)), Tm.map((mm => mm.source)), ...hT(fm), fm.aliases.map((mm => mm.name)), fm.aliases.map((mm => mm.texture)), fm.aliases.map((mm => mm.kind)));
            let Am = !1;
            try {
              const mm = hm.validationModuleCodes,
                Tm = Array.from(hm.validationModuleKeys, ((Tm, fm) => ({
                  key: (0, Fm.i)(Tm),
                  code: mm[fm]
                }))),
                fm = {
                  errors: TT(hm.pAm),
                  offInStrict: TT(hm.EAm),
                  variants: (0, Fm.e)(hm),
                  validationModules: Tm,
                  features: hm.features
                };
              return Tm.forEach(((mm, Tm) => {
                AT.set(mm, {
                  pack: hm,
                  index: Tm
                })
              })), Am = Tm.length > 0, fm
            } finally {
              Am || hm.free()
            }
          }(mm, Tm, fm))),
          mapValidationMessage: (Tm, fm) => {
            const hm = AT.get(Tm);
            if (!hm) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return mT(JSON.parse(wT(mm, (() => hm.pack.mapValidationMessage(hm.index, fm.lineNum, fm.linePos, fm.message, fm.type)))))
          },
          Lfm: Tm => wT(mm, (() => function(mm, Tm) {
            const fm = new Int32Array(Tm.length),
              hm = [];
            return Tm.forEach(((mm, Tm) => {
              fm[Tm] = mm.variants ? mm.variants.length : -1;
              for (const fm of mm.variants ?? []) hm.push((0, Fm.f)(fm))
            })), TT(mm.Lfm(Tm.map((mm => mm.file)), Uint32Array.from(Tm, (mm => fT(mm.line, "Diagnostic line"))), Tm.map((mm => mm.message)), fm, Uint8Array.from(hm)))
          }(mm, Tm))),
          mG: Tm => wT(mm, (() => mm.mG(...hT(Tm)))),
          get SHADER_PACK_HEADER_VERSION() {
            return fm ??= wT(mm, (() => mm.iAm())), fm
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return hm ??= wT(mm, (() => {
              const Tm = mm.xAm();
              return mm.aAm().map(((mm, fm) => ({
                path: mm,
                source: Tm[fm]
              })))
            })), hm
          },
          RAm: Tm => wT(mm, (() => mm.RAm(Tm))),
          resolveHeader: Tm => wT(mm, (() => mm.DAm((0, Fm.f)(Tm)))),
          wAm: () => wT(mm, (() => mm.wAm()))
        }, aT.set(mm, Tm)
      }
      return Tm
    }
    var iT = fm(3217),
      RT = fm(6578);
    const pT = "bloxdShaderPackWasmFailureReported";
    let ET = null;

    function oT() {
      return ET ??= async function() {
        if ("undefined" === typeof WebAssembly) return OT("unsupported", "This browser has no WebAssembly"), null;
        const mm = (0, RT.loadShaderPackTextures)().then((() => !0), (mm => (console.error("Could not load the shader pack textures, so shader packs can't run", mm), !1)));
        try {
          const Tm = await async function() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wm;
            return DT(await mm())
          }();
          return await mm ? Tm : null
        } catch (Tm) {
          const mm = Tm instanceof Error ? Tm.message : String(Tm);
          return OT(iT.b[Tm instanceof Um ? Tm.stage : "instantiate"], mm), null
        }
      }(), ET
    }

    function OT(mm, Tm) {
      (0, iT.f)(pT, `Shader pack wasm ${mm}, so shader packs can't run: ${Tm}`, Tm, `shader_pack_${mm}`)
    }
  },
  6576: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_shader_pack_bg.a1beb63474852f1908f1.wasm"
  },
  6571: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(2876);
    const Am = {
      bloxd_wasm: () => "613a21bc0b0d6795610be638608f6f896b7ac6493e7e1f81f22f78c10c130b20",
      bloxd_wasm_client: () => "f500bfdaa7b954839685358849e4855ad2aa63607292f3b2cdd2ad1665214c7a",
      bloxd_wasm_workers: () => "7dd9b485307e91e305e2fb397554b566560181e06f5a5b081a6f1c61898558ff",
      bloxd_wasm_models: () => "9693b1d78529633a0838c883241b819b5bd68812b4c6423ce62c95631b8c3415",
      bloxd_wasm_webgpu: () => "de2f06fb711bba52682b2f003e06cf94cb10abdd72e4193fc794f84415757080",
      bloxd_wasm_webgl: () => "7e9ad7e1a934a29dd92aaf8ef4a10e072c55d9316e0d80238bf66fd7535f3ddf",
      bloxd_wasm_webgl1: () => "700b62082439f7ae7c202d3ac83cf13cabe29e7e952f1a87e7cd44b1133e3b9f",
      bloxd_wasm_replay: () => "5341c2187f01707d5afbab140cf74533d8b2076e23e63e9a772320066cfa1513",
      bloxd_wasm_recorder: () => "c80280c22c0f6493e551f45d0599c93183458a244f322d6edf6273a3ebf0b864",
      bloxd_wasm_anim: () => "44db7f8e6b21308f32edc10720aadbb617cfd625a2a950f110c26990904d5bc8",
      bloxd_wasm_textures: () => "273e6f1c6bf63d7b0982fe740c5c8b042be9257ae55fae593545099e99bf76a8",
      bloxd_wasm_shader_pack: () => "2cca231ad5b1288911ab113a53e7191b13627c0fdb4147c6e779bb6b366f71af"
    };
    var am = fm(4632);

    function xm(mm) {
      const Tm = Object.prototype.hasOwnProperty.call(Am, mm) ? Am[mm]() : void 0;
      if (void 0 !== Tm) return {
        sha256: Tm,
        onMismatch: am.x
      };
      throw new hm.j(`${mm} has no release digest, so this build refuses it`)
    }
  },
  6580: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Km,
      e: () => Qm,
      f: () => Vm,
      i: () => jm
    });
    var hm = fm(6586);
    const Am = 6,
      am = 3,
      xm = 1,
      wm = 2,
      Dm = 4,
      im = 8,
      Rm = 16,
      pm = 32,
      Em = 64,
      om = 128,
      Om = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Ym(mm) {
      if (!mm) return 0;
      const Tm = Om.indexOf(mm);
      if (Tm <= 0) throw new Error(`"${mm}" is not a shader pack hook function`);
      return Tm
    }

    function qm(mm) {
      if (0 === mm) return null;
      const Tm = Om[mm];
      if (void 0 === Tm) throw new Error(`${mm} is not a shader pack hook function id`);
      return Tm
    }

    function jm(mm) {
      const Tm = hm.e.length;
      return {
        strict: mm >= Tm,
        program: hm.e[mm % Tm]
      }
    }

    function Vm(mm) {
      return Number(mm.strict) * hm.e.length + hm.e.indexOf(mm.program)
    }

    function Im(mm) {
      return "" === mm ? [] : mm.split(" ")
    }

    function Km(mm) {
      const Tm = {
        variantFlags: new Uint8Array(Am),
        hooks: new Uint8Array(Am * am),
        moduleCodes: Array(Am).fill(""),
        reads: Array(2 * Am).fill("")
      };
      for (const fm of mm) {
        const mm = Vm(fm.key),
          hm = (mm, Tm) => null === fm.hooks.surface || fm.reads.fragment.includes(mm) ? 0 : Tm;
        Tm.variantFlags[mm] = (fm.sceneDepth ? xm : 0) | (fm.movesVertices ? wm : 0) | (fm.sunShadow ? Dm : 0) | (fm.airShadow ? im : 0) | (fm.discards ? Rm : 0) | hm("localPosition", pm) | hm("enchantSpeed", Em) | hm("enchantTier", om), Tm.hooks[mm * am] = Ym(fm.hooks.vertex), Tm.hooks[mm * am + 1] = Ym(fm.hooks.surface), Tm.hooks[mm * am + 2] = Ym(fm.hooks.light), Tm.moduleCodes[mm] = fm.moduleCode, Tm.reads[2 * mm] = fm.reads.vertex.join(" "), Tm.reads[2 * mm + 1] = fm.reads.fragment.join(" ")
      }
      return Tm
    }

    function Qm(mm) {
      const {
        hooks: Tm,
        moduleCodes: fm,
        reads: hm
      } = mm;
      return Array.from(mm.variantFlags, ((mm, Am) => {
        const pm = Am * am;
        return {
          key: jm(Am),
          hooks: {
            vertex: qm(Tm[pm]),
            surface: qm(Tm[pm + 1]),
            light: qm(Tm[pm + 2])
          },
          moduleCode: fm[Am],
          sceneDepth: 0 !== (mm & xm),
          sunShadow: 0 !== (mm & Dm),
          airShadow: 0 !== (mm & im),
          movesVertices: 0 !== (mm & wm),
          discards: 0 !== (mm & Rm),
          reads: {
            vertex: Im(hm[2 * Am]),
            fragment: Im(hm[2 * Am + 1])
          }
        }
      }))
    }
  },
  6586: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      i: () => xm,
      l: () => wm,
      p: () => Am,
      t: () => am
    });
    const hm = ["terrain", "liquid", "model"];

    function Am() {
      const mm = [];
      for (const Tm of [!1, !0])
        for (const fm of hm) mm.push({
          strict: Tm,
          program: fm
        });
      return mm
    }

    function am(mm) {
      return `${mm.strict?"strict":"allow"}.${mm.program}`
    }

    function xm(mm) {
      return !mm.hooks.vertex && !mm.hooks.surface && !mm.hooks.light
    }

    function wm(mm, Tm) {
      return "off" !== Tm && (null === mm || mm.some((mm => mm.key.strict === ("strict" === Tm) && !xm(mm))))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);