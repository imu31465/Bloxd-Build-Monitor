export const id = 54;
export const ids = [54];
export const modules = {
  59383: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_recorder_bg.fee1d60c7630ab225686.wasm"
  },
  59377: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdRecorderWasmError: () => Dc,
      RECORDER_MODULE_ID: () => vB,
      loadRecorderModule: () => oc,
      markRecorderTrapped: () => wc,
      prefetchRecorderModule: () => Wc,
      recorderMemoryBytes: () => Xc,
      unloadRecorderModule: () => kB
    });
    var Vc = {};
    nc.r(Vc), nc.d(Vc, {
      UOc: () => Ic,
      tmc: () => Zc,
      Tc: () => rB,
      default: () => bB,
      initSync: () => Uc,
      fc: () => uc,
      LOc: () => sc,
      yTc: () => Mc
    });
    class Ic {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qB.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        Yc.u4pL(cB, 0)
      }
      busy() {
        return 0 !== Yc.Ww2T(this.__wbg_ptr)
      }
      command(cB, Bc) {
        return 0 !== Yc.PHoZ(this.__wbg_ptr, cB, Bc)
      }
      zTc(cB) {
        return Yc.T34T(this.__wbg_ptr, cB) >>> 0
      }
      SOc() {
        Yc.Z3AP(this.__wbg_ptr)
      }
      tTc() {
        return Yc.bh8m(this.__wbg_ptr) >>> 0
      }
      eOc() {
        return Yc.MVH4(this.__wbg_ptr)
      }
      aTc() {
        return Yc.GStK(this.__wbg_ptr) >>> 0
      }
      lOc() {
        return Yc.EcRO(this.__wbg_ptr) >>> 0
      }
      feed(cB) {
        return Yc.XZBt(this.__wbg_ptr, cB) >>> 0
      }
      constructor() {
        const cB = Yc.r9ue();
        return this.__wbg_ptr = cB, qB.register(this, this.__wbg_ptr, this), this
      }
      hOc() {
        return Yc.xZeI(this.__wbg_ptr) >>> 0
      }
      Sfc() {
        return Yc.I9pk(this.__wbg_ptr) >>> 0
      }
      mTc(cB, Bc, nc) {
        return 0 !== Yc.ObFV(this.__wbg_ptr, cB, Bc, nc)
      }
      stage(cB) {
        return Yc.do3h(this.__wbg_ptr, cB) >>> 0
      }
      step() {
        return Yc.fJr4(this.__wbg_ptr) >>> 0
      }
    }

    function rB(cB, Bc) {
      const nc = function(cB, Bc, nc) {
          if (void 0 === nc) {
            const nc = hc.encode(cB),
              Vc = Bc(nc.length, 1) >>> 0;
            return mB().subarray(Vc, Vc + nc.length).set(nc), Lc = nc.length, Vc
          }
          let Vc = cB.length,
            Ic = Bc(Vc, 1) >>> 0;
          const rB = mB();
          let uc = 0;
          for (; uc < Vc; uc++) {
            const Bc = cB.charCodeAt(uc);
            if (Bc > 127) break;
            rB[Ic + uc] = Bc
          }
          if (uc !== Vc) {
            0 !== uc && (cB = cB.slice(uc)), Ic = nc(Ic, Vc, Vc = uc + 3 * cB.length, 1) >>> 0;
            const Bc = mB().subarray(Ic + uc, Ic + Vc);
            uc += hc.encodeInto(cB, Bc).written, Ic = nc(Ic, Vc, uc, 1) >>> 0
          }
          return Lc = uc, Ic
        }(cB, Yc.tPFg, Yc.lwWk),
        Vc = Lc,
        Ic = Yc.dU6r(nc, Vc, Bc);
      if (Ic[1]) throw Sc(Ic[0])
    }

    function uc() {
      Yc.rOEK()
    }

    function sc() {
      return Yc.MVki() >>> 0
    }

    function Mc() {
      return Sc(Yc.PAeL())
    }

    function Pc() {
      return {
        __proto__: null,
        YCmo: {
          __proto__: null,
          XAft: function(cB, Bc) {
            return Oc(Error(Tc(cB, Bc)))
          },
          lgzQ: function() {
            return Oc(Yc.memory)
          },
          Dokn: function(cB, Bc) {
            throw new Error(Tc(cB, Bc))
          },
          a05U: function(cB, Bc) {
            console.error(Tc(cB, Bc))
          },
          KLZ3: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ic.prototype[Symbol.dispose] = Ic.prototype.free);
    const qB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((cB => Yc?.__wbg_recordermodule_free(cB, 1)));

    function Oc(cB) {
      tB === ec.length && ec.push(ec.length + 1);
      const Bc = tB;
      return tB = ec[Bc], ec[Bc] = cB, Bc
    }

    function Tc(cB, Bc) {
      return function(cB, Bc) {
        pc += Bc, pc >= zB && (yB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), yB.decode(), pc = Bc);
        return yB.decode(mB().subarray(cB, cB + Bc))
      }(cB >>> 0, Bc)
    }
    let fc = null;

    function mB() {
      return null !== fc && 0 !== fc.byteLength || (fc = new Uint8Array(Yc.memory.buffer)), fc
    }
    let ec = new Array(1024).fill(void 0);
    ec.push(void 0, null, !0, !1);
    let tB = ec.length;

    function Sc(cB) {
      const Bc = function(cB) {
        return ec[cB]
      }(cB);
      return function(cB) {
        cB < 1028 || (ec[cB] = tB, tB = cB)
      }(cB), Bc
    }
    let yB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    yB.decode();
    const zB = 2146435072;
    let pc = 0;
    const hc = new TextEncoder;
    "encodeInto" in hc || (hc.encodeInto = function(cB, Bc) {
      const nc = hc.encode(cB);
      return Bc.set(nc), {
        read: cB.length,
        written: nc.length
      }
    });
    let aB, lc, Yc, Lc = 0;

    function gB(cB, Bc) {
      return lc = cB, Yc = cB.exports, aB = Bc, fc = null, Yc.W6Ye(), Yc
    }

    function Uc(cB) {
      if (void 0 !== Yc) return Yc;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module: cB
      } = cB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Bc = Pc();
      cB instanceof WebAssembly.Module || (cB = new WebAssembly.Module(cB));
      return gB(new WebAssembly.Instance(cB, Bc), cB)
    }
    async function bB(cB) {
      if (void 0 !== Yc) return Yc;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module_or_path: cB
      } = cB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Bc = Pc();
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
      return gB(nc, Vc)
    }

    function Zc() {
      Yc = void 0, lc = void 0, fc = null, ec = new Array(1024).fill(void 0), ec.push(void 0, null, !0, !1), tB = ec.length
    }
    var Qc = nc(2876),
      Cc = nc(5590);
    const vB = 2;
    class Dc extends Error {
      stage;
      constructor(cB, Bc) {
        super((0, Qc.v)(cB, Bc), {
          cause: Bc
        }), this.name = "BloxdRecorderWasmError", this.stage = cB
      }
    }
    let Nc = null;
    const Ec = function(cB) {
      let Bc = null,
        nc = null,
        Vc = null,
        Ic = null;
      const rB = async () => {
        let nc = null;
        try {
          return nc = Bc ??= (0, Qc.w)(cB.url(), (0, Cc.c)(cB.name)), await nc
        } catch (Vc) {
          throw Bc === nc && (Bc = null), cB.error((0, Qc.y)(Vc), Vc)
        }
      };
      return {
        load: () => {
          if (Ic) return Promise.reject(Ic);
          if (nc) return nc;
          const Bc = (async () => {
            const Bc = await rB();
            try {
              await cB.init(Bc)
            } catch (nc) {
              throw cB.error("instantiate", nc)
            }
            return cB.TV
          })();
          nc = Bc, Vc = Bc;
          const uc = () => {
            Vc === Bc && (Vc = null)
          };
          return Bc.then(uc, (() => {
            uc(), nc === Bc && (nc = null)
          })), Bc
        },
        prefetch: async () => {
          Ic || nc || await rB()
        },
        markTrapped: Bc => (Ic ??= cB.error("call", Bc), Ic),
        unload: () => {
          Ic || !cB.reset || Vc || (cB.reset(), nc = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new nc.U(nc(59383)),
      init: async cB => {
        await bB({
          module_or_path: cB
        }), Nc = Mc()
      },
      TV: Vc,
      error: (cB, Bc) => new Dc(cB, Bc),
      reset: () => {
        Zc(), Nc = null
      }
    });

    function oc() {
      return Ec.load()
    }

    function Wc() {
      return Ec.prefetch()
    }

    function wc(cB) {
      return Ec.markTrapped(cB)
    }

    function kB() {
      Ec.unload()
    }

    function Xc() {
      return Nc?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);