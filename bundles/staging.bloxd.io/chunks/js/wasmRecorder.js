export const id = 62;
export const ids = [62];
export const modules = {
  61203: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_recorder_bg.d119923b8651229b232f.wasm"
  },
  61196: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdRecorderWasmError: () => Xd,
      RECORDER_MODULE_ID: () => jd,
      loadRecorderModule: () => Ud,
      markRecorderTrapped: () => Dd,
      prefetchRecorderModule: () => yd,
      recorderMemoryBytes: () => Ed,
      unloadRecorderModule: () => Td
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      gWd: () => Nd,
      HPd: () => md,
      hK: () => Wd,
      default: () => Yd,
      initSync: () => Fd,
      rK: () => Pd,
      PWd: () => Zd,
      ANd: () => gd
    });
    class Nd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        sd.sZM9(dd, 0)
      }
      busy() {
        return 0 !== sd.kggy(this.__wbg_ptr)
      }
      command(dd, Jd) {
        return 0 !== sd.etXm(this.__wbg_ptr, dd, Jd)
      }
      dWd(dd) {
        return sd.pOE6(this.__wbg_ptr, dd) >>> 0
      }
      wNd() {
        sd.T8F1(this.__wbg_ptr)
      }
      HNd() {
        return sd.UweB(this.__wbg_ptr) >>> 0
      }
      zNd() {
        return sd.RxMw(this.__wbg_ptr)
      }
      pWd() {
        return sd.aOxq(this.__wbg_ptr) >>> 0
      }
      NWd() {
        return sd.Omp3(this.__wbg_ptr) >>> 0
      }
      feed(dd) {
        return sd.B63a(this.__wbg_ptr, dd) >>> 0
      }
      constructor() {
        const dd = sd.NJkv();
        return this.__wbg_ptr = dd, Kd.register(this, this.__wbg_ptr, this), this
      }
      kWd() {
        return sd.lPx9(this.__wbg_ptr) >>> 0
      }
      wPd() {
        return sd.hT6h(this.__wbg_ptr) >>> 0
      }
      VNd(dd, Jd, kd) {
        return 0 !== sd.wbOa(this.__wbg_ptr, dd, Jd, kd)
      }
      stage(dd) {
        return sd.DTIV(this.__wbg_ptr, dd) >>> 0
      }
      step() {
        return sd.TcJy(this.__wbg_ptr) >>> 0
      }
    }

    function Wd(dd, Jd) {
      const kd = function(dd, Jd, kd) {
          if (void 0 === kd) {
            const kd = xd.encode(dd),
              pd = Jd(kd.length, 1) >>> 0;
            return Ld().subarray(pd, pd + kd.length).set(kd), ad = kd.length, pd
          }
          let pd = dd.length,
            Nd = Jd(pd, 1) >>> 0;
          const Wd = Ld();
          let Pd = 0;
          for (; Pd < pd; Pd++) {
            const Jd = dd.charCodeAt(Pd);
            if (Jd > 127) break;
            Wd[Nd + Pd] = Jd
          }
          if (Pd !== pd) {
            0 !== Pd && (dd = dd.slice(Pd)), Nd = kd(Nd, pd, pd = Pd + 3 * dd.length, 1) >>> 0;
            const Jd = Ld().subarray(Nd + Pd, Nd + pd);
            Pd += xd.encodeInto(dd, Jd).written, Nd = kd(Nd, pd, Pd, 1) >>> 0
          }
          return ad = Pd, Nd
        }(dd, sd.p1NM, sd.mcG5),
        pd = ad,
        Nd = sd.PcQs(kd, pd, Jd);
      if (Nd[1]) throw Rd(Nd[0])
    }

    function Pd() {
      sd.niFd()
    }

    function Zd() {
      return sd.XUS1() >>> 0
    }

    function gd() {
      return Rd(sd.cwpR())
    }

    function Cd() {
      return {
        __proto__: null,
        zUuS: {
          __proto__: null,
          Uzuc: function(dd, Jd) {
            return od(Error(ld(dd, Jd)))
          },
          ZJkE: function() {
            return od(sd.memory)
          },
          Grzm: function(dd, Jd) {
            throw new Error(ld(dd, Jd))
          },
          SKNr: function(dd, Jd) {
            console.error(ld(dd, Jd))
          },
          R4Bs: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Nd.prototype[Symbol.dispose] = Nd.prototype.free);
    const Kd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => sd?.__wbg_recordermodule_free(dd, 1)));

    function od(dd) {
      ed === Od.length && Od.push(Od.length + 1);
      const Jd = ed;
      return ed = Od[Jd], Od[Jd] = dd, Jd
    }

    function ld(dd, Jd) {
      return function(dd, Jd) {
        vd += Jd, vd >= Gd && (Id = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Id.decode(), vd = Jd);
        return Id.decode(Ld().subarray(dd, dd + Jd))
      }(dd >>> 0, Jd)
    }
    let Qd = null;

    function Ld() {
      return null !== Qd && 0 !== Qd.byteLength || (Qd = new Uint8Array(sd.memory.buffer)), Qd
    }
    let Od = new Array(1024).fill(void 0);
    Od.push(void 0, null, !0, !1);
    let ed = Od.length;

    function Rd(dd) {
      const Jd = function(dd) {
        return Od[dd]
      }(dd);
      return function(dd) {
        dd < 1028 || (Od[dd] = ed, ed = dd)
      }(dd), Jd
    }
    let Id = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Id.decode();
    const Gd = 2146435072;
    let vd = 0;
    const xd = new TextEncoder;
    "encodeInto" in xd || (xd.encodeInto = function(dd, Jd) {
      const kd = xd.encode(dd);
      return Jd.set(kd), {
        read: dd.length,
        written: kd.length
      }
    });
    let qd, Bd, sd, ad = 0;

    function Md(dd, Jd) {
      return Bd = dd, sd = dd.exports, qd = Jd, Qd = null, sd.OQRv(), sd
    }

    function Fd(dd) {
      if (void 0 !== sd) return sd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Jd = Cd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return Md(new WebAssembly.Instance(dd, Jd), dd)
    }
    async function Yd(dd) {
      if (void 0 !== sd) return sd;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module_or_path: dd
      } = dd) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Jd = Cd();
      ("string" === typeof dd || "function" === typeof Request && dd instanceof Request || "function" === typeof URL && dd instanceof URL) && (dd = fetch(dd));
      const {
        instance: kd,
        module: pd
      } = await async function(dd, Jd) {
        if ("function" === typeof Response && dd instanceof Response) {
          if (!dd.ok) throw new Error(`failed to fetch Wasm: ${dd.status} ${dd.statusText} fetching '${dd.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(dd, Jd)
          } catch (kd) {
            if (! function(dd) {
                switch (dd) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(dd.type) || "application/wasm" === dd.headers.get("Content-Type")) throw kd;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", kd)
          }
          const pd = await dd.arrayBuffer();
          return await WebAssembly.instantiate(pd, Jd)
        } {
          const kd = await WebAssembly.instantiate(dd, Jd);
          return kd instanceof WebAssembly.Instance ? {
            instance: kd,
            module: dd
          } : kd
        }
      }(await dd, Jd);
      return Md(kd, pd)
    }

    function md() {
      sd = void 0, Bd = void 0, Qd = null, Od = new Array(1024).fill(void 0), Od.push(void 0, null, !0, !1), ed = Od.length
    }
    var bd = kd(2770),
      Sd = kd(6483);
    const jd = 2;
    class Xd extends Error {
      stage;
      constructor(dd, Jd) {
        super((0, bd.A)(dd, Jd), {
          cause: Jd
        }), this.name = "BloxdRecorderWasmError", this.stage = dd
      }
    }
    let fd = null;
    const nd = function(dd) {
      let Jd = null,
        kd = null,
        pd = null,
        Nd = null;
      const Wd = async () => {
        let kd = null;
        try {
          return kd = Jd ??= (0, bd.B)(dd.url(), (0, Sd.e)(dd.name)), await kd
        } catch (pd) {
          throw Jd === kd && (Jd = null), dd.error((0, bd.G)(pd), pd)
        }
      };
      return {
        load: () => {
          if (Nd) return Promise.reject(Nd);
          if (kd) return kd;
          const Jd = (async () => {
            const Jd = await Wd();
            try {
              await dd.init(Jd)
            } catch (kd) {
              throw dd.error("instantiate", kd)
            }
            return dd.bindings
          })();
          kd = Jd, pd = Jd;
          const Pd = () => {
            pd === Jd && (pd = null)
          };
          return Jd.then(Pd, (() => {
            Pd(), kd === Jd && (kd = null)
          })), Jd
        },
        prefetch: async () => {
          Nd || kd || await Wd()
        },
        markTrapped: Jd => (Nd ??= dd.error("call", Jd), Nd),
        unload: () => {
          Nd || !dd.reset || pd || (dd.reset(), kd = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new kd.U(kd(61203)),
      init: async dd => {
        await Yd({
          module_or_path: dd
        }), fd = gd()
      },
      bindings: pd,
      error: (dd, Jd) => new Xd(dd, Jd),
      reset: () => {
        md(), fd = null
      }
    });

    function Ud() {
      return nd.load()
    }

    function yd() {
      return nd.prefetch()
    }

    function Dd(dd) {
      return nd.markTrapped(dd)
    }

    function Td() {
      nd.unload()
    }

    function Ed() {
      return fd?.buffer.byteLength ?? 0
    }
  },
  6483: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(2770);
    const Nd = {
      bloxd_wasm: () => "67c6401d5811eb7b9cff2814a29f966a9dd1ab923e175fa19497af26b4502816",
      bloxd_wasm_client: () => "6258b24df63176123d93f549bb48f56da442317b3a5ee1b22458e2637caf578d",
      bloxd_wasm_workers: () => "be7c28fa29cbecc24e19062f2c6bc0a5894a203c3dda65452eccc860e930d821",
      bloxd_wasm_models: () => "6bdd581d4d0becff3e95b66a27a1a5da4e04f924bcd5bc0dd36e885168896016",
      bloxd_wasm_webgpu: () => "7696327997962eac9535a5b8094b153b4298d06883723f642562040590146af1",
      bloxd_wasm_webgl: () => "8873dc66cf374a905034792d179a1bc9e3d8a0d5138b511825a78d7a954240d0",
      bloxd_wasm_webgl1: () => "8397ed5ce5c8ac7579e7003101c4f8c9a1ce8368296cd2e41ac9a9b90beb7a65",
      bloxd_wasm_replay: () => "d71b023241834dbfc2db6804be33469db924450506350004c541b0b754121656",
      bloxd_wasm_recorder: () => "f2e9b9c8ae12c235b86b64a44b272450d96f214d5d6982878bbf330e3339f352",
      bloxd_wasm_anim: () => "3c8d34a5af00d244cdef6e97addab208455d3fad6df89d6004ea567630021fe8",
      bloxd_wasm_textures: () => "dfcd6892e79c79af74dba72d92f489620c1624d3bfcd825b670886933b48749c",
      bloxd_wasm_shader_pack: () => "ca7501d2ff0cccb80272a18641201d2ce4e4b1e9ec5a5ceca284d9a4fa45907f"
    };
    var Wd = kd(4563);

    function Pd(dd) {
      const Jd = Object.prototype.hasOwnProperty.call(Nd, dd) ? Nd[dd]() : void 0;
      if (void 0 !== Jd) return {
        sha256: Jd,
        onMismatch: Wd.G
      };
      throw new pd.f(`${dd} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);