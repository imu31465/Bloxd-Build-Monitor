export const id = 77;
export const ids = [77];
export const modules = {
  64041: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_replay_bg.e57e4a5223492ebcf54c.wasm"
  },
  7251: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(3101);
    const be = {
      bloxd_wasm: () => "e02d54b065b2f499b180e1b3347d16df55a2947d0e605d2078a3d3b6da48d9a9",
      bloxd_wasm_client: () => "c679f6743194014168c148d06b29ff43ac2ebd65af96551ab04742237da2cbc0",
      bloxd_wasm_workers: () => "64996202cfa4b1e69476b5072e56b0cfcea62edff120e603bbcded9c0cc2f2b2",
      bloxd_wasm_models: () => "d8940e8e7ccbe7fea2cc7bbf2297c0d75ddbf7e4f7faf3d9bb2ad0765fbba5c2",
      bloxd_wasm_webgpu: () => "cf5aebafb7e2919918851e5ade65769e47a6978ba139ea29c093aa7d03105200",
      bloxd_wasm_webgl: () => "8ae617ef40b6df6e9c6b2b4fb13fbb620e731d320ec11ddc75acee07da832d88",
      bloxd_wasm_webgl1: () => "5541e97c52b53f4d16d1e55f9d8eb127812f263b741e67830d3bb080322b1915",
      bloxd_wasm_replay: () => "fa06c4ee5e806830b3ad4c2e2323335346c04bf67f500d15ce0c53d3a6cad80e",
      bloxd_wasm_recorder: () => "f6eb834fb863f1cd66bacc3bb3d9505f0a66acb7d26cea69ffc0ae9f1664e920",
      bloxd_wasm_anim: () => "b7f47661c5c9230379971e76cc8f09962d7323de4ff12c8fdf43c1fd62033f90",
      bloxd_wasm_textures: () => "5c62f6a16c856ae74984e597d42471c5a63fb99862f370b47f78d95328e7a101",
      bloxd_wasm_shader_pack: () => "e3e6a3571f741530e11f118b8afcc85da15081a89450db4b464665c2ed09dc09"
    };
    var Me = He(5153);

    function Ke(ee) {
      const ie = Object.prototype.hasOwnProperty.call(be, ee) ? be[ee]() : void 0;
      if (void 0 !== ie) return {
        sha256: ie,
        onMismatch: Me.B
      };
      throw new ye.i(`${ee} has no release digest, so this build refuses it`)
    }
  },
  64036: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdReplayWasmError: () => ae,
      loadReplayModule: () => me,
      markReplayTrapped: () => ne,
      replayMemoryBytes: () => Se,
      unloadReplayModule: () => le
    });
    var ye = {};
    He.r(ye), He.d(ye, {
      vKe: () => be,
      DFe: () => Ae,
      vR: () => Me,
      default: () => Pe,
      initSync: () => De,
      uR: () => Ke,
      cKe: () => Ue,
      uKe: () => Fe
    });
    class be {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oe.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        te.vvVk(ee, 0)
      }
      jKe(ee, ie, He, ye, be, Me) {
        te.y1xC(this.__wbg_ptr, ee, ie, He, ye, be, Me)
      }
      close() {
        te.rV9N(this.__wbg_ptr)
      }
      crop(ee, ie) {
        te.VVRe(this.__wbg_ptr, ee, ie)
      }
      hKe(ee, ie) {
        te.ZUbI(this.__wbg_ptr, ee, ie)
      }
      GKe() {
        return te.KZVZ(this.__wbg_ptr) >>> 0
      }
      NKe() {
        return te.k5f3(this.__wbg_ptr) >>> 0
      }
      rKe() {
        return te.cDcG(this.__wbg_ptr) >>> 0
      }
      QKe() {
        return te.EV7G(this.__wbg_ptr) >>> 0
      }
      IKe(ee, ie) {
        te.XFt3(this.__wbg_ptr, ee, ie)
      }
      constructor() {
        const ee = te.XIu5();
        return this.__wbg_ptr = ee, oe.register(this, this.__wbg_ptr, this), this
      }
      open() {
        te.RP5I(this.__wbg_ptr)
      }
      AKe() {
        return te.VNCq(this.__wbg_ptr) >>> 0
      }
      pause() {
        te.DtIp(this.__wbg_ptr)
      }
      play() {
        te.yxje(this.__wbg_ptr)
      }
      save() {
        return te.eeog(this.__wbg_ptr) >>> 0
      }
      eUe() {
        te.mfRd(this.__wbg_ptr)
      }
      seek(ee, ie) {
        te.tnkp(this.__wbg_ptr, ee, ie)
      }
      HUe(ee) {
        te.XXWo(this.__wbg_ptr, ee)
      }
      sKe(ee, ie) {
        const He = function(ee, ie) {
            const He = ie(8 * ee.length, 8) >>> 0;
            return function() {
              null !== ke && 0 !== ke.byteLength || (ke = new Float64Array(te.memory.buffer));
              return ke
            }().set(ee, He / 8), Ze = ee.length, He
          }(ie, te.gZu6),
          ye = Ze;
        te.qnMC(this.__wbg_ptr, ee, He, ye)
      }
      nKe(ee, ie) {
        te.O1R0(this.__wbg_ptr, ee, ie)
      }
      iUe(ee) {
        te.cazd(this.__wbg_ptr, ee)
      }
      stage(ee) {
        return te.bIi6(this.__wbg_ptr, ee) >>> 0
      }
      step(ee, ie) {
        return te.aXva(this.__wbg_ptr, ee, ie) >>> 0
      }
    }

    function Me(ee, ie) {
      const He = function(ee, ie, He) {
          if (void 0 === He) {
            const He = Oe.encode(ee),
              ye = ie(He.length, 1) >>> 0;
            return Te().subarray(ye, ye + He.length).set(He), Ze = He.length, ye
          }
          let ye = ee.length,
            be = ie(ye, 1) >>> 0;
          const Me = Te();
          let Ke = 0;
          for (; Ke < ye; Ke++) {
            const ie = ee.charCodeAt(Ke);
            if (ie > 127) break;
            Me[be + Ke] = ie
          }
          if (Ke !== ye) {
            0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
            const ie = Te().subarray(be + Ke, be + ye);
            Ke += Oe.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
          }
          return Ze = Ke, be
        }(ee, te.gZu6, te.bIg9),
        ye = Ze,
        be = te.po1x(He, ye, ie);
      if (be[1]) throw ze(be[0])
    }

    function Ke() {
      te.OVMr()
    }

    function Ue() {
      return te.PaJW() >>> 0
    }

    function Fe() {
      return ze(te.uXZY())
    }

    function Je() {
      return {
        __proto__: null,
        JUFy: {
          __proto__: null,
          uoCx: function(ee, ie) {
            return Re(Error(qe(ee, ie)))
          },
          UfIs: function() {
            return Re(te.memory)
          },
          Q8o5: function(ee, ie) {
            throw new Error(qe(ee, ie))
          },
          npnh: function(ee, ie) {
            console.error(qe(ee, ie))
          },
          w8Jx: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (be.prototype[Symbol.dispose] = be.prototype.free);
    const oe = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((ee => te?.__wbg_replaymodule_free(ee, 1)));

    function Re(ee) {
      Xe === pe.length && pe.push(pe.length + 1);
      const ie = Xe;
      return Xe = pe[ie], pe[ie] = ee, ie
    }
    let ke = null;

    function qe(ee, ie) {
      return function(ee, ie) {
        ge += ie, ge >= Ee && (Be = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Be.decode(), ge = ie);
        return Be.decode(Te().subarray(ee, ee + ie))
      }(ee >>> 0, ie)
    }
    let fe = null;

    function Te() {
      return null !== fe && 0 !== fe.byteLength || (fe = new Uint8Array(te.memory.buffer)), fe
    }
    let pe = new Array(1024).fill(void 0);
    pe.push(void 0, null, !0, !1);
    let Xe = pe.length;

    function ze(ee) {
      const ie = function(ee) {
        return pe[ee]
      }(ee);
      return function(ee) {
        ee < 1028 || (pe[ee] = Xe, Xe = ee)
      }(ee), ie
    }
    let Be = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Be.decode();
    const Ee = 2146435072;
    let ge = 0;
    const Oe = new TextEncoder;
    "encodeInto" in Oe || (Oe.encodeInto = function(ee, ie) {
      const He = Oe.encode(ee);
      return ie.set(He), {
        read: ee.length,
        written: He.length
      }
    });
    let de, We, te, Ze = 0;

    function we(ee, ie) {
      return We = ee, te = ee.exports, de = ie, ke = null, fe = null, te.cjou(), te
    }

    function De(ee) {
      if (void 0 !== te) return te;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module: ee
      } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ie = Je();
      ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
      return we(new WebAssembly.Instance(ee, ie), ee)
    }
    async function Pe(ee) {
      if (void 0 !== te) return te;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module_or_path: ee
      } = ee) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ie = Je();
      ("string" === typeof ee || "function" === typeof Request && ee instanceof Request || "function" === typeof URL && ee instanceof URL) && (ee = fetch(ee));
      const {
        instance: He,
        module: ye
      } = await async function(ee, ie) {
        if ("function" === typeof Response && ee instanceof Response) {
          if (!ee.ok) throw new Error(`failed to fetch Wasm: ${ee.status} ${ee.statusText} fetching '${ee.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(ee, ie)
          } catch (He) {
            if (! function(ee) {
                switch (ee) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(ee.type) || "application/wasm" === ee.headers.get("Content-Type")) throw He;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", He)
          }
          const ye = await ee.arrayBuffer();
          return await WebAssembly.instantiate(ye, ie)
        } {
          const He = await WebAssembly.instantiate(ee, ie);
          return He instanceof WebAssembly.Instance ? {
            instance: He,
            module: ee
          } : He
        }
      }(await ee, ie);
      return we(He, ye)
    }

    function Ae() {
      te = void 0, We = void 0, ke = null, fe = null, pe = new Array(1024).fill(void 0), pe.push(void 0, null, !0, !1), Xe = pe.length
    }
    var Ye = He(3101),
      Ve = He(7251);
    class ae extends Error {
      stage;
      constructor(ee, ie) {
        super((0, Ye.A)(ee, ie), {
          cause: ie
        }), this.name = "BloxdReplayWasmError", this.stage = ee
      }
    }
    let ce = null,
      xe = null,
      Le = Promise.resolve(),
      Ce = 0,
      ve = null,
      ue = null;

    function me() {
      if (ue) return Promise.reject(ue);
      if (xe) return xe;
      const ee = Ce,
        ie = Le,
        be = (async () => {
          let be;
          await ie, ce ??= (0, Ye.B)(new He.U(He(64041)), (0, Ve.d)("bloxd_wasm_replay"));
          try {
            be = await ce
          } catch (Me) {
            throw ce = null, new ae((0, Ye.J)(Me), Me)
          }
          if (ee !== Ce) throw new ae("instantiate", new Error("unloaded while loading"));
          try {
            await Pe({
              module_or_path: be
            })
          } catch (Me) {
            throw Ae(), new ae("instantiate", Me)
          }
          if (ee !== Ce) throw Ae(), new ae("instantiate", new Error("unloaded while loading"));
          return ve = Fe(), ye
        })();
      return xe = be, Le = be.catch((() => {})), be.catch((() => {
        xe === be && (xe = null)
      })), be
    }

    function le() {
      ue || je()
    }

    function Se() {
      return ve?.buffer.byteLength ?? 0
    }

    function ne(ee) {
      return ue || (ue = new ae("call", ee), je()), ue
    }

    function je() {
      Ce++, Ae(), xe = null, ve = null
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);