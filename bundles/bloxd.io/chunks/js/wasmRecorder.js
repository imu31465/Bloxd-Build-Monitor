export const id = 76;
export const ids = [76];
export const modules = {
  64029: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_recorder_bg.c4568df370b658aabbb9.wasm"
  },
  64027: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdRecorderWasmError: () => ae,
      RECORDER_MODULE_ID: () => Ve,
      loadRecorderModule: () => Le,
      markRecorderTrapped: () => ve,
      prefetchRecorderModule: () => Ce,
      recorderMemoryBytes: () => me,
      unloadRecorderModule: () => ue
    });
    var ye = {};
    He.r(ye), He.d(ye, {
      LKe: () => be,
      DFe: () => Pe,
      vR: () => Me,
      default: () => De,
      initSync: () => we,
      uR: () => Ke,
      cKe: () => Ue,
      wKe: () => Fe
    });
    class be {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, oe.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        We.H1TV(ee, 0)
      }
      busy() {
        return 0 !== We.JiWD(this.__wbg_ptr)
      }
      command(ee, ie) {
        return 0 !== We.SgmW(this.__wbg_ptr, ee, ie)
      }
      DKe(ee) {
        return We.PAXw(this.__wbg_ptr, ee) >>> 0
      }
      ZKe() {
        We.Cq2A(this.__wbg_ptr)
      }
      tKe() {
        return We.AKgJ(this.__wbg_ptr) >>> 0
      }
      WKe() {
        return We.zjVs(this.__wbg_ptr)
      }
      YKe() {
        return We.X7Fh(this.__wbg_ptr) >>> 0
      }
      VKe() {
        return We.V3zF(this.__wbg_ptr) >>> 0
      }
      feed(ee) {
        return We.s6Xe(this.__wbg_ptr, ee) >>> 0
      }
      constructor() {
        const ee = We.yLUP();
        return this.__wbg_ptr = ee, oe.register(this, this.__wbg_ptr, this), this
      }
      AKe() {
        return We.T6UV(this.__wbg_ptr) >>> 0
      }
      PFe() {
        return We.Wh9z(this.__wbg_ptr) >>> 0
      }
      dKe(ee, ie, He) {
        return 0 !== We.bRvo(this.__wbg_ptr, ee, ie, He)
      }
      stage(ee) {
        return We.uw5O(this.__wbg_ptr, ee) >>> 0
      }
      step() {
        return We.KMhY(this.__wbg_ptr) >>> 0
      }
    }

    function Me(ee, ie) {
      const He = function(ee, ie, He) {
          if (void 0 === He) {
            const He = ge.encode(ee),
              ye = ie(He.length, 1) >>> 0;
            return fe().subarray(ye, ye + He.length).set(He), te = He.length, ye
          }
          let ye = ee.length,
            be = ie(ye, 1) >>> 0;
          const Me = fe();
          let Ke = 0;
          for (; Ke < ye; Ke++) {
            const ie = ee.charCodeAt(Ke);
            if (ie > 127) break;
            Me[be + Ke] = ie
          }
          if (Ke !== ye) {
            0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
            const ie = fe().subarray(be + Ke, be + ye);
            Ke += ge.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
          }
          return te = Ke, be
        }(ee, We.NYuO, We.hoQJ),
        ye = te,
        be = We.raEf(He, ye, ie);
      if (be[1]) throw Xe(be[0])
    }

    function Ke() {
      We.EHT3()
    }

    function Ue() {
      return We.bTSz() >>> 0
    }

    function Fe() {
      return Xe(We.IJOJ())
    }

    function Je() {
      return {
        __proto__: null,
        BvMy: {
          __proto__: null,
          vRNZ: function(ee, ie) {
            return Re(Error(ke(ee, ie)))
          },
          l2V2: function() {
            return Re(We.memory)
          },
          y7C5: function(ee, ie) {
            throw new Error(ke(ee, ie))
          },
          QAfA: function(ee, ie) {
            console.error(ke(ee, ie))
          },
          DX6s: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (be.prototype[Symbol.dispose] = be.prototype.free);
    const oe = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((ee => We?.__wbg_recordermodule_free(ee, 1)));

    function Re(ee) {
      pe === Te.length && Te.push(Te.length + 1);
      const ie = pe;
      return pe = Te[ie], Te[ie] = ee, ie
    }

    function ke(ee, ie) {
      return function(ee, ie) {
        Ee += ie, Ee >= Be && (ze = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ze.decode(), Ee = ie);
        return ze.decode(fe().subarray(ee, ee + ie))
      }(ee >>> 0, ie)
    }
    let qe = null;

    function fe() {
      return null !== qe && 0 !== qe.byteLength || (qe = new Uint8Array(We.memory.buffer)), qe
    }
    let Te = new Array(1024).fill(void 0);
    Te.push(void 0, null, !0, !1);
    let pe = Te.length;

    function Xe(ee) {
      const ie = function(ee) {
        return Te[ee]
      }(ee);
      return function(ee) {
        ee < 1028 || (Te[ee] = pe, pe = ee)
      }(ee), ie
    }
    let ze = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ze.decode();
    const Be = 2146435072;
    let Ee = 0;
    const ge = new TextEncoder;
    "encodeInto" in ge || (ge.encodeInto = function(ee, ie) {
      const He = ge.encode(ee);
      return ie.set(He), {
        read: ee.length,
        written: He.length
      }
    });
    let Oe, de, We, te = 0;

    function Ze(ee, ie) {
      return de = ee, We = ee.exports, Oe = ie, qe = null, We.ZnUB(), We
    }

    function we(ee) {
      if (void 0 !== We) return We;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module: ee
      } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ie = Je();
      ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
      return Ze(new WebAssembly.Instance(ee, ie), ee)
    }
    async function De(ee) {
      if (void 0 !== We) return We;
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
      return Ze(He, ye)
    }

    function Pe() {
      We = void 0, de = void 0, qe = null, Te = new Array(1024).fill(void 0), Te.push(void 0, null, !0, !1), pe = Te.length
    }
    var Ae = He(3101),
      Ye = He(7251);
    const Ve = 2;
    class ae extends Error {
      stage;
      constructor(ee, ie) {
        super((0, Ae.A)(ee, ie), {
          cause: ie
        }), this.name = "BloxdRecorderWasmError", this.stage = ee
      }
    }
    let ce = null;
    const xe = function(ee) {
      let ie = null,
        He = null,
        ye = null,
        be = null;
      const Me = async () => {
        let He = null;
        try {
          return He = ie ??= (0, Ae.B)(ee.url(), (0, Ye.d)(ee.name)), await He
        } catch (ye) {
          throw ie === He && (ie = null), ee.error((0, Ae.J)(ye), ye)
        }
      };
      return {
        load: () => {
          if (be) return Promise.reject(be);
          if (He) return He;
          const ie = (async () => {
            const ie = await Me();
            try {
              await ee.init(ie)
            } catch (He) {
              throw ee.error("instantiate", He)
            }
            return ee.bindings
          })();
          He = ie, ye = ie;
          const Ke = () => {
            ye === ie && (ye = null)
          };
          return ie.then(Ke, (() => {
            Ke(), He === ie && (He = null)
          })), ie
        },
        prefetch: async () => {
          be || He || await Me()
        },
        markTrapped: ie => (be ??= ee.error("call", ie), be),
        unload: () => {
          be || !ee.reset || ye || (ee.reset(), He = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new He.U(He(64029)),
      init: async ee => {
        await De({
          module_or_path: ee
        }), ce = Fe()
      },
      bindings: ye,
      error: (ee, ie) => new ae(ee, ie),
      reset: () => {
        Pe(), ce = null
      }
    });

    function Le() {
      return xe.load()
    }

    function Ce() {
      return xe.prefetch()
    }

    function ve(ee) {
      return xe.markTrapped(ee)
    }

    function ue() {
      xe.unload()
    }

    function me() {
      return ce?.buffer.byteLength ?? 0
    }
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
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);