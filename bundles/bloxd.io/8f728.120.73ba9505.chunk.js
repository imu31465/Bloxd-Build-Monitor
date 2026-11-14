export const id = 120;
export const ids = [120];
export const modules = {
  5583: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      loadPageShaderPackCompiler: () => TB
    });
    var Vc = {};
    nc.r(Vc), nc.d(Vc, {
      Jqc: () => Ic,
      Cuc: () => rB,
      default: () => Jc,
      jOc: () => uc,
      Rqc: () => sc,
      initSync: () => Fc,
      fc: () => Mc,
      UPc: () => Pc,
      iOc: () => qB,
      Kqc: () => Oc,
      oBc: () => Tc,
      xOc: () => fc,
      EBc: () => mB,
      dqc: () => ec
    });
    class Ic {
      static __wrap(cB) {
        const Bc = Object.create(Ic.prototype);
        return Bc.__wbg_ptr = cB, Sc.register(Bc, Bc.__wbg_ptr, Bc), Bc
      }
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Sc.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        kB.I0AO(cB, 0)
      }
      get errorsJson() {
        let cB, Bc;
        try {
          const nc = kB.lccd(this.__wbg_ptr);
          return cB = nc[0], Bc = nc[1], lc(nc[0], nc[1])
        } finally {
          kB.HIAK(cB, Bc, 1)
        }
      }
      get features() {
        const cB = kB.hBzx(this.__wbg_ptr);
        var Bc = zB(cB[0], cB[1]);
        return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
      }
      get hooks() {
        const cB = kB.uEiP(this.__wbg_ptr);
        var Bc = pc(cB[0], cB[1]).slice();
        return kB.HIAK(cB[0], 1 * cB[1], 1), Bc
      }
      mapValidationMessage(cB, Bc, nc, Vc, Ic) {
        let rB, uc;
        try {
          const Pc = kB.MX1Y(this.__wbg_ptr, cB, Bc, nc, yB(Vc), yB(Ic));
          var sc = Pc[0],
            Mc = Pc[1];
          if (Pc[3]) throw sc = 0, Mc = 0, vB(Pc[2]);
          return rB = sc, uc = Mc, lc(sc, Mc)
        } finally {
          kB.HIAK(rB, uc, 1)
        }
      }
      get moduleCodes() {
        const cB = kB.rAZo(this.__wbg_ptr);
        var Bc = zB(cB[0], cB[1]);
        return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
      }
      get offInStrictJson() {
        let cB, Bc;
        try {
          const nc = kB.bwGp(this.__wbg_ptr);
          return cB = nc[0], Bc = nc[1], lc(nc[0], nc[1])
        } finally {
          kB.HIAK(cB, Bc, 1)
        }
      }
      get reads() {
        const cB = kB.mmyA(this.__wbg_ptr);
        var Bc = zB(cB[0], cB[1]);
        return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
      }
      get validationModuleCodes() {
        const cB = kB.dYMb(this.__wbg_ptr);
        var Bc = zB(cB[0], cB[1]);
        return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
      }
      get validationModuleKeys() {
        const cB = kB.pKRr(this.__wbg_ptr);
        var Bc = pc(cB[0], cB[1]).slice();
        return kB.HIAK(cB[0], 1 * cB[1], 1), Bc
      }
      get variantFlags() {
        const cB = kB.Dx5V(this.__wbg_ptr);
        var Bc = pc(cB[0], cB[1]).slice();
        return kB.HIAK(cB[0], 1 * cB[1], 1), Bc
      }
    }

    function rB(cB, Bc, nc, Vc, rB, uc, sc) {
      const Mc = Cc(cB, kB.RZkE),
        Pc = Xc,
        qB = Cc(Bc, kB.RZkE),
        Oc = Xc,
        Tc = Cc(nc, kB.RZkE),
        fc = Xc,
        mB = Qc(Vc, kB.RZkE),
        ec = Xc,
        tB = Cc(rB, kB.RZkE),
        Sc = Xc,
        yB = Cc(uc, kB.RZkE),
        zB = Xc,
        pc = Cc(sc, kB.RZkE),
        hc = Xc,
        aB = kB.U7aF(Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc);
      if (aB[2]) throw vB(aB[1]);
      return Ic.__wrap(aB[0])
    }

    function uc() {
      const cB = kB.MuBT();
      var Bc = zB(cB[0], cB[1]);
      return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
    }

    function sc() {
      const cB = kB.yl9Q();
      var Bc = zB(cB[0], cB[1]);
      return kB.HIAK(cB[0], 4 * cB[1], 4), Bc
    }

    function Mc() {
      kB.zcx0()
    }

    function Pc(cB, Bc, nc, Vc, Ic) {
      let rB, uc;
      try {
        const Pc = Cc(cB, kB.RZkE),
          qB = Xc,
          Oc = Qc(Bc, kB.RZkE),
          Tc = Xc,
          fc = Cc(nc, kB.RZkE),
          mB = Xc,
          ec = Qc(Vc, kB.RZkE),
          tB = Xc,
          Sc = function(cB, Bc) {
            const nc = Bc(1 * cB.length, 1) >>> 0;
            return gB().set(cB, nc / 1), Xc = cB.length, nc
          }(Ic, kB.RZkE),
          yB = Xc,
          zB = kB.qBGJ(Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB);
        var sc = zB[0],
          Mc = zB[1];
        if (zB[3]) throw sc = 0, Mc = 0, vB(zB[2]);
        return rB = sc, uc = Mc, lc(sc, Mc)
      } finally {
        kB.HIAK(rB, uc, 1)
      }
    }

    function qB() {
      let cB, Bc;
      try {
        const nc = kB.XmPc();
        return cB = nc[0], Bc = nc[1], lc(nc[0], nc[1])
      } finally {
        kB.HIAK(cB, Bc, 1)
      }
    }

    function Oc(cB) {
      let Bc, nc;
      try {
        const rB = kB.Ioni(cB);
        var Vc = rB[0],
          Ic = rB[1];
        if (rB[3]) throw Vc = 0, Ic = 0, vB(rB[2]);
        return Bc = Vc, nc = Ic, lc(Vc, Ic)
      } finally {
        kB.HIAK(Bc, nc, 1)
      }
    }

    function Tc() {
      return kB.YWky() >>> 0
    }

    function fc() {
      let cB, Bc;
      try {
        const nc = kB.PbEg();
        return cB = nc[0], Bc = nc[1], lc(nc[0], nc[1])
      } finally {
        kB.HIAK(cB, Bc, 1)
      }
    }

    function mB(cB, Bc) {
      let nc, Vc;
      try {
        const uc = Cc(cB, kB.RZkE),
          sc = Xc,
          Mc = Qc(Bc, kB.RZkE),
          Pc = Xc,
          qB = kB.y7ee(uc, sc, Mc, Pc);
        var Ic = qB[0],
          rB = qB[1];
        if (qB[3]) throw Ic = 0, rB = 0, vB(qB[2]);
        return nc = Ic, Vc = rB, lc(Ic, rB)
      } finally {
        kB.HIAK(nc, Vc, 1)
      }
    }

    function ec(cB) {
      let Bc, nc;
      try {
        const rB = kB.WeWk(yB(cB));
        var Vc = rB[0],
          Ic = rB[1];
        if (rB[3]) throw Vc = 0, Ic = 0, vB(rB[2]);
        return Bc = Vc, nc = Ic, lc(Vc, Ic)
      } finally {
        kB.HIAK(Bc, nc, 1)
      }
    }

    function tB() {
      return {
        __proto__: null,
        Tnvg: {
          __proto__: null,
          xhoN: function(cB, Bc) {
            return yB(Error(lc(cB, Bc)))
          },
          bY8g: function(cB) {
            return null === Uc(cB)
          },
          eN0K: function(cB) {
            return "string" === typeof Uc(cB)
          },
          OxN3: function(cB, Bc) {
            const nc = Uc(Bc),
              Vc = "string" === typeof nc ? nc : void 0;
            var Ic, rB = void 0 === (Ic = Vc) || null === Ic ? 0 : function(cB, Bc, nc) {
                if (void 0 === nc) {
                  const nc = oc.encode(cB),
                    Vc = Bc(nc.length, 1) >>> 0;
                  return gB().subarray(Vc, Vc + nc.length).set(nc), Xc = nc.length, Vc
                }
                let Vc = cB.length,
                  Ic = Bc(Vc, 1) >>> 0;
                const rB = gB();
                let uc = 0;
                for (; uc < Vc; uc++) {
                  const Bc = cB.charCodeAt(uc);
                  if (Bc > 127) break;
                  rB[Ic + uc] = Bc
                }
                if (uc !== Vc) {
                  0 !== uc && (cB = cB.slice(uc)), Ic = nc(Ic, Vc, Vc = uc + 3 * cB.length, 1) >>> 0;
                  const Bc = gB().subarray(Ic + uc, Ic + Vc);
                  uc += oc.encodeInto(cB, Bc).written, Ic = nc(Ic, Vc, uc, 1) >>> 0
                }
                return Xc = uc, Ic
              }(Vc, kB.RZkE, kB.eM8h),
              uc = Xc;
            aB().setInt32(cB + 4, uc, !0), aB().setInt32(cB + 0, rB, !0)
          },
          OCjP: function(cB, Bc) {
            throw new Error(lc(cB, Bc))
          },
          fo27: function(cB, Bc) {
            return Uc(cB).charCodeAt(Bc >>> 0)
          },
          i4R3: function(cB, Bc) {
            console.error(lc(cB, Bc))
          },
          R8eB: function(cB) {
            return Uc(cB).length
          },
          bOsA: function(cB, Bc) {
            return yB(lc(cB, Bc))
          },
          OR3w: function(cB) {
            vB(cB)
          }
        }
      }
    }
    Symbol.dispose && (Ic.prototype[Symbol.dispose] = Ic.prototype.free);
    const Sc = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((cB => kB.I0AO(cB, 1)));

    function yB(cB) {
      Zc === bB.length && bB.push(bB.length + 1);
      const Bc = Zc;
      return Zc = bB[Bc], bB[Bc] = cB, Bc
    }

    function zB(cB, Bc) {
      cB >>>= 0;
      const nc = aB(),
        Vc = [];
      for (let Ic = cB; Ic < cB + 4 * Bc; Ic += 4) Vc.push(vB(nc.getUint32(Ic, !0)));
      return Vc
    }

    function pc(cB, Bc) {
      return cB >>>= 0, gB().subarray(cB / 1, cB / 1 + Bc)
    }
    let hc = null;

    function aB() {
      return (null === hc || !0 === hc.buffer.detached || void 0 === hc.buffer.detached && hc.buffer !== kB.memory.buffer) && (hc = new DataView(kB.memory.buffer)), hc
    }

    function lc(cB, Bc) {
      return function(cB, Bc) {
        Ec += Bc, Ec >= Nc && (Dc = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Dc.decode(), Ec = Bc);
        return Dc.decode(gB().subarray(cB, cB + Bc))
      }(cB >>> 0, Bc)
    }
    let Yc = null;
    let Lc = null;

    function gB() {
      return null !== Lc && 0 !== Lc.byteLength || (Lc = new Uint8Array(kB.memory.buffer)), Lc
    }

    function Uc(cB) {
      return bB[cB]
    }
    let bB = new Array(1024).fill(void 0);
    bB.push(void 0, null, !0, !1);
    let Zc = bB.length;

    function Qc(cB, Bc) {
      const nc = Bc(4 * cB.length, 4) >>> 0;
      return (null !== Yc && 0 !== Yc.byteLength || (Yc = new Uint32Array(kB.memory.buffer)), Yc).set(cB, nc / 4), Xc = cB.length, nc
    }

    function Cc(cB, Bc) {
      const nc = Bc(4 * cB.length, 4) >>> 0,
        Vc = aB();
      for (let Ic = 0; Ic < cB.length; Ic++) Vc.setUint32(nc + 4 * Ic, yB(cB[Ic]), !0);
      return Xc = cB.length, nc
    }

    function vB(cB) {
      const Bc = Uc(cB);
      return function(cB) {
        cB < 1028 || (bB[cB] = Zc, Zc = cB)
      }(cB), Bc
    }
    let Dc = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Dc.decode();
    const Nc = 2146435072;
    let Ec = 0;
    const oc = new TextEncoder;
    "encodeInto" in oc || (oc.encodeInto = function(cB, Bc) {
      const nc = oc.encode(cB);
      return Bc.set(nc), {
        read: cB.length,
        written: nc.length
      }
    });
    let Wc, wc, kB, Xc = 0;

    function Hc(cB, Bc) {
      return wc = cB, kB = cB.exports, Wc = Bc, hc = null, Yc = null, Lc = null, kB.RGsb(), kB
    }

    function Fc(cB) {
      if (void 0 !== kB) return kB;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module: cB
      } = cB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Bc = tB();
      cB instanceof WebAssembly.Module || (cB = new WebAssembly.Module(cB));
      return Hc(new WebAssembly.Instance(cB, Bc), cB)
    }
    async function Jc(cB) {
      if (void 0 !== kB) return kB;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module_or_path: cB
      } = cB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Bc = tB();
      ("string" === typeof cB || "function" === typeof Request && cB instanceof Request || "function" === typeof URL && cB instanceof URL) && (cB = fetch(cB));
      const {
        instance: nc,
        module: Vc
      } = await async function(cB, Bc) {
        if ("function" === typeof Response && cB instanceof Response) {
          if (!cB.ok) throw new Error(`failed to fetch Wasm: ${cB.status} ${cB.statusText} fetching '${cB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(cB, Bc)
          } catch (nc) {
            if (! function(cB) {
                switch (cB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(cB.type) || "application/wasm" === cB.headers.get("Content-Type")) throw nc;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", nc)
          }
          const Vc = await cB.arrayBuffer();
          return await WebAssembly.instantiate(Vc, Bc)
        } {
          const nc = await WebAssembly.instantiate(cB, Bc);
          return nc instanceof WebAssembly.Instance ? {
            instance: nc,
            module: cB
          } : nc
        }
      }(await cB, Bc);
      return Hc(nc, Vc)
    }
    var jB = nc(2876),
      Rc = nc(5590);
    class iB extends Error {
      stage;
      constructor(cB, Bc) {
        super((0, jB.v)(cB, Bc), {
          cause: Bc
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = cB
      }
    }
    let Kc = null,
      xB = null;

    function dc() {
      return Kc ? Promise.resolve(Kc) : (xB || (xB = async function() {
        let cB;
        try {
          cB = await (0, jB.w)(new nc.U(nc(5601)), (0, Rc.c)("bloxd_wasm_shader_pack"))
        } catch (Bc) {
          throw new iB((0, jB.y)(Bc), Bc)
        }
        try {
          await Jc({
            module_or_path: cB
          })
        } catch (Bc) {
          throw new iB("instantiate", Bc)
        }
        return Kc = Vc, Kc
      }(), xB.then(void 0, (() => {
        xB = null
      }))), xB)
    }
    var Ac = nc(5610);

    function Gc(cB) {
      let [Bc, nc, Vc, Ic] = cB;
      const rB = {
        file: Bc,
        line: nc,
        message: Vc
      };
      return Ic && (rB.variants = Ic.map(Ac.l)), rB
    }

    function cn(cB) {
      return JSON.parse(cB).map(Gc)
    }

    function BB(cB, Bc) {
      if (!Number.isInteger(cB) || cB < 0 || cB > 4294967295) throw new Error(`${Bc} ${cB} is not a whole number from 0 to 4294967295`);
      return cB
    }

    function nB(cB) {
      return [cB.named.map((cB => cB.name)), Uint32Array.from(cB.named, (cB => BB(cB.id, "Texture ID")))]
    }
    const VB = new WeakMap;
    const IB = new WeakMap,
      rn = new WeakSet;

    function uB(cB, Bc) {
      if (rn.has(cB)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return Bc()
      } catch (nc) {
        throw nc instanceof WebAssembly.RuntimeError && rn.add(cB), nc
      }
    }

    function sB(cB) {
      let Bc = IB.get(cB);
      if (!Bc) {
        let nc, Vc;
        Bc = {
          Cuc: (Bc, nc) => uB(cB, (() => function(cB, Bc, nc) {
            const Vc = cB.Cuc(Bc.map((cB => cB.path)), Bc.map((cB => cB.source)), ...nB(nc), nc.aliases.map((cB => cB.name)), nc.aliases.map((cB => cB.texture)), nc.aliases.map((cB => cB.kind)));
            let Ic = !1;
            try {
              const cB = Vc.validationModuleCodes,
                Bc = Array.from(Vc.validationModuleKeys, ((Bc, nc) => ({
                  key: (0, Ac.l)(Bc),
                  code: cB[nc]
                }))),
                nc = {
                  errors: cn(Vc.errorsJson),
                  offInStrict: cn(Vc.offInStrictJson),
                  variants: (0, Ac.g)(Vc),
                  validationModules: Bc,
                  features: Vc.features
                };
              return Bc.forEach(((cB, Bc) => {
                VB.set(cB, {
                  pack: Vc,
                  index: Bc
                })
              })), Ic = Bc.length > 0, nc
            } finally {
              Ic || Vc.free()
            }
          }(cB, Bc, nc))),
          mapValidationMessage: (Bc, nc) => {
            const Vc = VB.get(Bc);
            if (!Vc) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Gc(JSON.parse(uB(cB, (() => Vc.pack.mapValidationMessage(Vc.index, nc.lineNum, nc.linePos, nc.message, nc.type)))))
          },
          UPc: Bc => uB(cB, (() => function(cB, Bc) {
            const nc = new Int32Array(Bc.length),
              Vc = [];
            return Bc.forEach(((cB, Bc) => {
              nc[Bc] = cB.variants ? cB.variants.length : -1;
              for (const nc of cB.variants ?? []) Vc.push((0, Ac.j)(nc))
            })), cn(cB.UPc(Bc.map((cB => cB.file)), Uint32Array.from(Bc, (cB => BB(cB.line, "Diagnostic line"))), Bc.map((cB => cB.message)), nc, Uint8Array.from(Vc)))
          }(cB, Bc))),
          EBc: Bc => uB(cB, (() => cB.EBc(...nB(Bc)))),
          get SHADER_PACK_HEADER_VERSION() {
            return nc ??= uB(cB, (() => cB.xOc())), nc
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Vc ??= uB(cB, (() => {
              const Bc = cB.Rqc();
              return cB.jOc().map(((cB, nc) => ({
                path: cB,
                source: Bc[nc]
              })))
            })), Vc
          },
          dqc: Bc => uB(cB, (() => cB.dqc(Bc))),
          resolveHeader: Bc => uB(cB, (() => cB.Kqc((0, Ac.j)(Bc)))),
          iOc: () => uB(cB, (() => cB.iOc()))
        }, IB.set(cB, Bc)
      }
      return Bc
    }
    var MB = nc(2397),
      PB = nc(5608);
    const qn = "bloxdShaderPackWasmFailureReported";
    let OB = null;

    function TB() {
      return OB ??= async function() {
        if ("undefined" === typeof WebAssembly) return fB("unsupported", "This browser has no WebAssembly"), null;
        const cB = (0, PB.loadShaderPackTextures)().then((() => !0), (cB => (console.error("Could not load the shader pack textures, so shader packs can't run", cB), !1)));
        try {
          const Bc = await async function() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc;
            return sB(await cB())
          }();
          return await cB ? Bc : null
        } catch (Bc) {
          const cB = Bc instanceof Error ? Bc.message : String(Bc);
          return fB(MB.b[Bc instanceof iB ? Bc.stage : "instantiate"], cB), null
        }
      }(), OB
    }

    function fB(cB, Bc) {
      (0, MB.f)(qn, `Shader pack wasm ${cB}, so shader packs can't run: ${Bc}`, Bc, `shader_pack_${cB}`)
    }
  },
  5601: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_shader_pack_bg.2b8860c84d40b37fad64.wasm"
  },
  5590: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(2876);
    const Ic = {
      bloxd_wasm: () => "9830e55728d5b3a3e8e247acd9246d2afe9397afee3d7679c5186851b795279c",
      bloxd_wasm_client: () => "43b3dfe64b3f024b6ccadbc049b79c4bb01c3e906087eb702c13c76147ff6677",
      bloxd_wasm_workers: () => "f4667efb6edb11a5211786ebcbc8ff7ce445266c880aec3c3d635a4938e6ddee",
      bloxd_wasm_models: () => "e94dddee8db9a336b3072dca709432712894517261740ac0727858f4eb30123c",
      bloxd_wasm_webgpu: () => "dc3942e9838cce244b965d553196c7d403b31e947a3320d8fe5125346df312a4",
      bloxd_wasm_webgl: () => "a7d28f783db7c957405c1710e67df1a6dd352be69de5c1e6f77063bd8a448f21",
      bloxd_wasm_webgl1: () => "8c83eaeef0605129534a3d33690b45134286f4be4c6b67256ccbc82b15fb0a71",
      bloxd_wasm_replay: () => "26e1b96269b08aacc0c285eeee797aaac2ec51f6c54851fc1f5723fb98d27bc7",
      bloxd_wasm_recorder: () => "4fb59ecd47035f4cb6fb6b1e85d7546f4a01834acf32b594b6cd3fcac63a1867",
      bloxd_wasm_anim: () => "8ad9f4be7b931ce1b3f37c84ac34ed980350e5fc2f4b2d370736511ed2d289b4",
      bloxd_wasm_textures: () => "c51701085747355a7c41b99390b0bf4d2f6651a7c8972b29cc009568c50194b7",
      bloxd_wasm_shader_pack: () => "20f2099776f53d80b4976988e6dc4239208c30631bebb5d9cd48e9735424635d"
    };
    var rB = nc(5599);

    function uc(cB) {
      const Bc = Object.prototype.hasOwnProperty.call(Ic, cB) ? Ic[cB]() : void 0;
      if (void 0 !== Bc) return {
        sha256: Bc,
        onMismatch: rB.y
      };
      throw new Vc.j(`${cB} has no release digest, so this build refuses it`)
    }
  },
  5610: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => pc,
      g: () => hc,
      j: () => yB,
      l: () => Sc
    });
    var Vc = nc(5616);
    const Ic = 6,
      rB = 3,
      uc = 1,
      sc = 2,
      Mc = 4,
      Pc = 8,
      qB = 16,
      Oc = 32,
      Tc = 64,
      fc = 128,
      mB = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function ec(cB) {
      if (!cB) return 0;
      const Bc = mB.indexOf(cB);
      if (Bc <= 0) throw new Error(`"${cB}" is not a shader pack hook function`);
      return Bc
    }

    function tB(cB) {
      if (0 === cB) return null;
      const Bc = mB[cB];
      if (void 0 === Bc) throw new Error(`${cB} is not a shader pack hook function id`);
      return Bc
    }

    function Sc(cB) {
      const Bc = Vc.b.length;
      return {
        strict: cB >= Bc,
        program: Vc.b[cB % Bc]
      }
    }

    function yB(cB) {
      return Number(cB.strict) * Vc.b.length + Vc.b.indexOf(cB.program)
    }

    function zB(cB) {
      return "" === cB ? [] : cB.split(" ")
    }

    function pc(cB) {
      const Bc = {
        variantFlags: new Uint8Array(Ic),
        hooks: new Uint8Array(Ic * rB),
        moduleCodes: Array(Ic).fill(""),
        reads: Array(2 * Ic).fill("")
      };
      for (const nc of cB) {
        const cB = yB(nc.key),
          Vc = (cB, Bc) => null === nc.hooks.surface || nc.reads.fragment.includes(cB) ? 0 : Bc;
        Bc.variantFlags[cB] = (nc.sceneDepth ? uc : 0) | (nc.movesVertices ? sc : 0) | (nc.sunShadow ? Mc : 0) | (nc.airShadow ? Pc : 0) | (nc.discards ? qB : 0) | Vc("localPosition", Oc) | Vc("enchantSpeed", Tc) | Vc("enchantTier", fc), Bc.hooks[cB * rB] = ec(nc.hooks.vertex), Bc.hooks[cB * rB + 1] = ec(nc.hooks.surface), Bc.hooks[cB * rB + 2] = ec(nc.hooks.light), Bc.moduleCodes[cB] = nc.moduleCode, Bc.reads[2 * cB] = nc.reads.vertex.join(" "), Bc.reads[2 * cB + 1] = nc.reads.fragment.join(" ")
      }
      return Bc
    }

    function hc(cB) {
      const {
        hooks: Bc,
        moduleCodes: nc,
        reads: Vc
      } = cB;
      return Array.from(cB.variantFlags, ((cB, Ic) => {
        const Oc = Ic * rB;
        return {
          key: Sc(Ic),
          hooks: {
            vertex: tB(Bc[Oc]),
            surface: tB(Bc[Oc + 1]),
            light: tB(Bc[Oc + 2])
          },
          moduleCode: nc[Ic],
          sceneDepth: 0 !== (cB & uc),
          sunShadow: 0 !== (cB & Mc),
          airShadow: 0 !== (cB & Pc),
          movesVertices: 0 !== (cB & sc),
          discards: 0 !== (cB & qB),
          reads: {
            vertex: zB(Vc[2 * Ic]),
            fragment: zB(Vc[2 * Ic + 1])
          }
        }
      }))
    }
  },
  5616: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc,
      d: () => Ic,
      f: () => rB
    });
    const Vc = ["terrain", "liquid", "model"];

    function Ic(cB) {
      return !cB.hooks.vertex && !cB.hooks.surface && !cB.hooks.light
    }

    function rB(cB, Bc) {
      return "off" !== Bc && (null === cB || cB.some((cB => cB.key.strict === ("strict" === Bc) && !Ic(cB))))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);