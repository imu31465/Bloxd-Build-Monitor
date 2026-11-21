export const id = 63;
export const ids = [63];
export const modules = {
  61213: (dd, Jd, kd) => {
    dd.exports = kd.p + "static/media/bloxd_wasm_replay_bg.b5e6e24b7cd4f7bda6f6.wasm"
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
  },
  61211: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      BloxdReplayWasmError: () => Xd,
      loadReplayModule: () => Ed,
      markReplayTrapped: () => rd,
      replayMemoryBytes: () => hd,
      unloadReplayModule: () => cd
    });
    var pd = {};
    kd.r(pd), kd.d(pd, {
      KWd: () => Nd,
      HPd: () => bd,
      hK: () => Wd,
      default: () => md,
      initSync: () => Yd,
      rK: () => Pd,
      PWd: () => Zd,
      oWd: () => gd
    });
    class Nd {
      __destroy_into_raw() {
        const dd = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Kd.unregister(this), dd
      }
      free() {
        const dd = this.__destroy_into_raw();
        ad.VXYC(dd, 0)
      }
      eWd(dd, Jd, kd, pd, Nd, Wd) {
        ad.e3KC(this.__wbg_ptr, dd, Jd, kd, pd, Nd, Wd)
      }
      close() {
        ad.Yg9h(this.__wbg_ptr)
      }
      crop(dd, Jd) {
        ad.uYh3(this.__wbg_ptr, dd, Jd)
      }
      GWd(dd, Jd) {
        ad.WMfU(this.__wbg_ptr, dd, Jd)
      }
      xWd() {
        return ad.Wj2h(this.__wbg_ptr) >>> 0
      }
      vWd() {
        return ad.C4Cm(this.__wbg_ptr) >>> 0
      }
      qWd() {
        return ad.um6I(this.__wbg_ptr) >>> 0
      }
      BWd() {
        return ad.Uull(this.__wbg_ptr) >>> 0
      }
      IWd(dd, Jd) {
        ad.RgRc(this.__wbg_ptr, dd, Jd)
      }
      constructor() {
        const dd = ad.hJqx();
        return this.__wbg_ptr = dd, Kd.register(this, this.__wbg_ptr, this), this
      }
      open() {
        ad.aRIB(this.__wbg_ptr)
      }
      kWd() {
        return ad.OWjI(this.__wbg_ptr) >>> 0
      }
      pause() {
        ad.yRGC(this.__wbg_ptr)
      }
      play() {
        ad.N2V6(this.__wbg_ptr)
      }
      save() {
        return ad.ViaV(this.__wbg_ptr) >>> 0
      }
      sWd() {
        ad.ANai(this.__wbg_ptr)
      }
      seek(dd, Jd) {
        ad.Upew(this.__wbg_ptr, dd, Jd)
      }
      aWd(dd) {
        ad.a0m2(this.__wbg_ptr, dd)
      }
      RWd(dd, Jd) {
        const kd = function(dd, Jd) {
            const kd = Jd(8 * dd.length, 8) >>> 0;
            return function() {
              null !== ld && 0 !== ld.byteLength || (ld = new Float64Array(ad.memory.buffer));
              return ld
            }().set(dd, kd / 8), Md = dd.length, kd
          }(Jd, ad.fThp),
          pd = Md;
        ad.U7n2(this.__wbg_ptr, dd, kd, pd)
      }
      OWd(dd, Jd) {
        ad.DCTO(this.__wbg_ptr, dd, Jd)
      }
      iWd(dd) {
        ad.bbLy(this.__wbg_ptr, dd)
      }
      stage(dd) {
        return ad.QP85(this.__wbg_ptr, dd) >>> 0
      }
      step(dd, Jd) {
        return ad.go56(this.__wbg_ptr, dd, Jd) >>> 0
      }
    }

    function Wd(dd, Jd) {
      const kd = function(dd, Jd, kd) {
          if (void 0 === kd) {
            const kd = qd.encode(dd),
              pd = Jd(kd.length, 1) >>> 0;
            return Od().subarray(pd, pd + kd.length).set(kd), Md = kd.length, pd
          }
          let pd = dd.length,
            Nd = Jd(pd, 1) >>> 0;
          const Wd = Od();
          let Pd = 0;
          for (; Pd < pd; Pd++) {
            const Jd = dd.charCodeAt(Pd);
            if (Jd > 127) break;
            Wd[Nd + Pd] = Jd
          }
          if (Pd !== pd) {
            0 !== Pd && (dd = dd.slice(Pd)), Nd = kd(Nd, pd, pd = Pd + 3 * dd.length, 1) >>> 0;
            const Jd = Od().subarray(Nd + Pd, Nd + pd);
            Pd += qd.encodeInto(dd, Jd).written, Nd = kd(Nd, pd, Pd, 1) >>> 0
          }
          return Md = Pd, Nd
        }(dd, ad.fThp, ad.QMY6),
        pd = Md,
        Nd = ad.lAmF(kd, pd, Jd);
      if (Nd[1]) throw Id(Nd[0])
    }

    function Pd() {
      ad.XXT3()
    }

    function Zd() {
      return ad.AHKj() >>> 0
    }

    function gd() {
      return Id(ad.PCJW())
    }

    function Cd() {
      return {
        __proto__: null,
        yqJQ: {
          __proto__: null,
          jDX5: function(dd, Jd) {
            return od(Error(Qd(dd, Jd)))
          },
          cMjD: function() {
            return od(ad.memory)
          },
          RK9r: function(dd, Jd) {
            throw new Error(Qd(dd, Jd))
          },
          Fl89: function(dd, Jd) {
            console.error(Qd(dd, Jd))
          },
          Y6JG: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Nd.prototype[Symbol.dispose] = Nd.prototype.free);
    const Kd = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((dd => ad?.__wbg_replaymodule_free(dd, 1)));

    function od(dd) {
      Rd === ed.length && ed.push(ed.length + 1);
      const Jd = Rd;
      return Rd = ed[Jd], ed[Jd] = dd, Jd
    }
    let ld = null;

    function Qd(dd, Jd) {
      return function(dd, Jd) {
        xd += Jd, xd >= vd && (Gd = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Gd.decode(), xd = Jd);
        return Gd.decode(Od().subarray(dd, dd + Jd))
      }(dd >>> 0, Jd)
    }
    let Ld = null;

    function Od() {
      return null !== Ld && 0 !== Ld.byteLength || (Ld = new Uint8Array(ad.memory.buffer)), Ld
    }
    let ed = new Array(1024).fill(void 0);
    ed.push(void 0, null, !0, !1);
    let Rd = ed.length;

    function Id(dd) {
      const Jd = function(dd) {
        return ed[dd]
      }(dd);
      return function(dd) {
        dd < 1028 || (ed[dd] = Rd, Rd = dd)
      }(dd), Jd
    }
    let Gd = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Gd.decode();
    const vd = 2146435072;
    let xd = 0;
    const qd = new TextEncoder;
    "encodeInto" in qd || (qd.encodeInto = function(dd, Jd) {
      const kd = qd.encode(dd);
      return Jd.set(kd), {
        read: dd.length,
        written: kd.length
      }
    });
    let Bd, sd, ad, Md = 0;

    function Fd(dd, Jd) {
      return sd = dd, ad = dd.exports, Bd = Jd, ld = null, Ld = null, ad.cWLt(), ad
    }

    function Yd(dd) {
      if (void 0 !== ad) return ad;
      void 0 !== dd && (Object.getPrototypeOf(dd) === Object.prototype ? ({
        module: dd
      } = dd) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Jd = Cd();
      dd instanceof WebAssembly.Module || (dd = new WebAssembly.Module(dd));
      return Fd(new WebAssembly.Instance(dd, Jd), dd)
    }
    async function md(dd) {
      if (void 0 !== ad) return ad;
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
      return Fd(kd, pd)
    }

    function bd() {
      ad = void 0, sd = void 0, ld = null, Ld = null, ed = new Array(1024).fill(void 0), ed.push(void 0, null, !0, !1), Rd = ed.length
    }
    var Sd = kd(2770),
      jd = kd(6483);
    class Xd extends Error {
      stage;
      constructor(dd, Jd) {
        super((0, Sd.A)(dd, Jd), {
          cause: Jd
        }), this.name = "BloxdReplayWasmError", this.stage = dd
      }
    }
    let fd = null,
      nd = null,
      Ud = Promise.resolve(),
      yd = 0,
      Dd = null,
      Td = null;

    function Ed() {
      if (Td) return Promise.reject(Td);
      if (nd) return nd;
      const dd = yd,
        Jd = Ud,
        Nd = (async () => {
          let Nd;
          await Jd, fd ??= (0, Sd.B)(new kd.U(kd(61213)), (0, jd.e)("bloxd_wasm_replay"));
          try {
            Nd = await fd
          } catch (Wd) {
            throw fd = null, new Xd((0, Sd.G)(Wd), Wd)
          }
          if (dd !== yd) throw new Xd("instantiate", new Error("unloaded while loading"));
          try {
            await md({
              module_or_path: Nd
            })
          } catch (Wd) {
            throw bd(), new Xd("instantiate", Wd)
          }
          if (dd !== yd) throw bd(), new Xd("instantiate", new Error("unloaded while loading"));
          return Dd = gd(), pd
        })();
      return nd = Nd, Ud = Nd.catch((() => {})), Nd.catch((() => {
        nd === Nd && (nd = null)
      })), Nd
    }

    function cd() {
      Td || ud()
    }

    function hd() {
      return Dd?.buffer.byteLength ?? 0
    }

    function rd(dd) {
      return Td || (Td = new Xd("call", dd), ud()), Td
    }

    function ud() {
      yd++, bd(), nd = null, Dd = null
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);