export const id = 55;
export const ids = [55];
export const modules = {
  59393: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_replay_bg.f581713d71626be0f994.wasm"
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
  59390: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdReplayWasmError: () => Dc,
      loadReplayModule: () => Xc,
      markReplayTrapped: () => Jc,
      replayMemoryBytes: () => Fc,
      unloadReplayModule: () => Hc
    });
    var Vc = {};
    nc.r(Vc), nc.d(Vc, {
      ZOc: () => Ic,
      tmc: () => Qc,
      Tc: () => rB,
      default: () => Zc,
      initSync: () => bB,
      fc: () => uc,
      LOc: () => sc,
      QOc: () => Mc
    });
    class Ic {
      __destroy_into_raw() {
        const cB = this.__wbg_ptr;
        return this.__wbg_ptr = 0, qB.unregister(this), cB
      }
      free() {
        const cB = this.__destroy_into_raw();
        Lc.Ldk3(cB, 0)
      }
      NOc(cB, Bc, nc, Vc, Ic, rB) {
        Lc.SfdK(this.__wbg_ptr, cB, Bc, nc, Vc, Ic, rB)
      }
      close() {
        Lc.hf7U(this.__wbg_ptr)
      }
      crop(cB, Bc) {
        Lc.KfiG(this.__wbg_ptr, cB, Bc)
      }
      WOc(cB, Bc) {
        Lc.bY48(this.__wbg_ptr, cB, Bc)
      }
      kTc() {
        return Lc.NfbM(this.__wbg_ptr) >>> 0
      }
      wOc() {
        return Lc.zXdr(this.__wbg_ptr) >>> 0
      }
      XOc() {
        return Lc.zWFm(this.__wbg_ptr) >>> 0
      }
      HOc() {
        return Lc.E4wW(this.__wbg_ptr) >>> 0
      }
      oOc(cB, Bc) {
        Lc.KnUw(this.__wbg_ptr, cB, Bc)
      }
      constructor() {
        const cB = Lc.nsxi();
        return this.__wbg_ptr = cB, qB.register(this, this.__wbg_ptr, this), this
      }
      open() {
        Lc.R67x(this.__wbg_ptr)
      }
      hOc() {
        return Lc.xl5f(this.__wbg_ptr) >>> 0
      }
      pause() {
        Lc.BUyk(this.__wbg_ptr)
      }
      play() {
        Lc.P6Bj(this.__wbg_ptr)
      }
      save() {
        return Lc.uMON(this.__wbg_ptr) >>> 0
      }
      FOc() {
        Lc.Mnic(this.__wbg_ptr)
      }
      seek(cB, Bc) {
        Lc.dF9v(this.__wbg_ptr, cB, Bc)
      }
      jTc(cB) {
        Lc.g1kg(this.__wbg_ptr, cB)
      }
      EOc(cB, Bc) {
        const nc = function(cB, Bc) {
            const nc = Bc(8 * cB.length, 8) >>> 0;
            return function() {
              null !== Tc && 0 !== Tc.byteLength || (Tc = new Float64Array(Lc.memory.buffer));
              return Tc
            }().set(cB, nc / 8), gB = cB.length, nc
          }(Bc, Lc.c5lx),
          Vc = gB;
        Lc.dmP7(this.__wbg_ptr, cB, nc, Vc)
      }
      DOc(cB, Bc) {
        Lc.SpK3(this.__wbg_ptr, cB, Bc)
      }
      JOc(cB) {
        Lc.t2v1(this.__wbg_ptr, cB)
      }
      stage(cB) {
        return Lc.iarI(this.__wbg_ptr, cB) >>> 0
      }
      step(cB, Bc) {
        return Lc.bqNa(this.__wbg_ptr, cB, Bc) >>> 0
      }
    }

    function rB(cB, Bc) {
      const nc = function(cB, Bc, nc) {
          if (void 0 === nc) {
            const nc = aB.encode(cB),
              Vc = Bc(nc.length, 1) >>> 0;
            return ec().subarray(Vc, Vc + nc.length).set(nc), gB = nc.length, Vc
          }
          let Vc = cB.length,
            Ic = Bc(Vc, 1) >>> 0;
          const rB = ec();
          let uc = 0;
          for (; uc < Vc; uc++) {
            const Bc = cB.charCodeAt(uc);
            if (Bc > 127) break;
            rB[Ic + uc] = Bc
          }
          if (uc !== Vc) {
            0 !== uc && (cB = cB.slice(uc)), Ic = nc(Ic, Vc, Vc = uc + 3 * cB.length, 1) >>> 0;
            const Bc = ec().subarray(Ic + uc, Ic + Vc);
            uc += aB.encodeInto(cB, Bc).written, Ic = nc(Ic, Vc, uc, 1) >>> 0
          }
          return gB = uc, Ic
        }(cB, Lc.c5lx, Lc.Xk2v),
        Vc = gB,
        Ic = Lc.rfD2(nc, Vc, Bc);
      if (Ic[1]) throw yB(Ic[0])
    }

    function uc() {
      Lc.duZg()
    }

    function sc() {
      return Lc.jjmF() >>> 0
    }

    function Mc() {
      return yB(Lc.LyEj())
    }

    function Pc() {
      return {
        __proto__: null,
        TIX7: {
          __proto__: null,
          TOrt: function(cB, Bc) {
            return Oc(Error(fc(cB, Bc)))
          },
          PJwm: function() {
            return Oc(Lc.memory)
          },
          k9rG: function(cB, Bc) {
            throw new Error(fc(cB, Bc))
          },
          L8IG: function(cB, Bc) {
            console.error(fc(cB, Bc))
          },
          Pvwp: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Ic.prototype[Symbol.dispose] = Ic.prototype.free);
    const qB = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((cB => Lc?.__wbg_replaymodule_free(cB, 1)));

    function Oc(cB) {
      Sc === tB.length && tB.push(tB.length + 1);
      const Bc = Sc;
      return Sc = tB[Bc], tB[Bc] = cB, Bc
    }
    let Tc = null;

    function fc(cB, Bc) {
      return function(cB, Bc) {
        hc += Bc, hc >= pc && (zB = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), zB.decode(), hc = Bc);
        return zB.decode(ec().subarray(cB, cB + Bc))
      }(cB >>> 0, Bc)
    }
    let mB = null;

    function ec() {
      return null !== mB && 0 !== mB.byteLength || (mB = new Uint8Array(Lc.memory.buffer)), mB
    }
    let tB = new Array(1024).fill(void 0);
    tB.push(void 0, null, !0, !1);
    let Sc = tB.length;

    function yB(cB) {
      const Bc = function(cB) {
        return tB[cB]
      }(cB);
      return function(cB) {
        cB < 1028 || (tB[cB] = Sc, Sc = cB)
      }(cB), Bc
    }
    let zB = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    zB.decode();
    const pc = 2146435072;
    let hc = 0;
    const aB = new TextEncoder;
    "encodeInto" in aB || (aB.encodeInto = function(cB, Bc) {
      const nc = aB.encode(cB);
      return Bc.set(nc), {
        read: cB.length,
        written: nc.length
      }
    });
    let lc, Yc, Lc, gB = 0;

    function Uc(cB, Bc) {
      return Yc = cB, Lc = cB.exports, lc = Bc, Tc = null, mB = null, Lc.cLvY(), Lc
    }

    function bB(cB) {
      if (void 0 !== Lc) return Lc;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module: cB
      } = cB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Bc = Pc();
      cB instanceof WebAssembly.Module || (cB = new WebAssembly.Module(cB));
      return Uc(new WebAssembly.Instance(cB, Bc), cB)
    }
    async function Zc(cB) {
      if (void 0 !== Lc) return Lc;
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
      return Uc(nc, Vc)
    }

    function Qc() {
      Lc = void 0, Yc = void 0, Tc = null, mB = null, tB = new Array(1024).fill(void 0), tB.push(void 0, null, !0, !1), Sc = tB.length
    }
    var Cc = nc(2876),
      vB = nc(5590);
    class Dc extends Error {
      stage;
      constructor(cB, Bc) {
        super((0, Cc.v)(cB, Bc), {
          cause: Bc
        }), this.name = "BloxdReplayWasmError", this.stage = cB
      }
    }
    let Nc = null,
      Ec = null,
      oc = Promise.resolve(),
      Wc = 0,
      wc = null,
      kB = null;

    function Xc() {
      if (kB) return Promise.reject(kB);
      if (Ec) return Ec;
      const cB = Wc,
        Bc = oc,
        Ic = (async () => {
          let Ic;
          await Bc, Nc ??= (0, Cc.w)(new nc.U(nc(59393)), (0, vB.c)("bloxd_wasm_replay"));
          try {
            Ic = await Nc
          } catch (rB) {
            throw Nc = null, new Dc((0, Cc.y)(rB), rB)
          }
          if (cB !== Wc) throw new Dc("instantiate", new Error("unloaded while loading"));
          try {
            await Zc({
              module_or_path: Ic
            })
          } catch (rB) {
            throw Qc(), new Dc("instantiate", rB)
          }
          if (cB !== Wc) throw Qc(), new Dc("instantiate", new Error("unloaded while loading"));
          return wc = Mc(), Vc
        })();
      return Ec = Ic, oc = Ic.catch((() => {})), Ic.catch((() => {
        Ec === Ic && (Ec = null)
      })), Ic
    }

    function Hc() {
      kB || jB()
    }

    function Fc() {
      return wc?.buffer.byteLength ?? 0
    }

    function Jc(cB) {
      return kB || (kB = new Dc("call", cB), jB()), kB
    }

    function jB() {
      Wc++, Qc(), Ec = null, wc = null
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);