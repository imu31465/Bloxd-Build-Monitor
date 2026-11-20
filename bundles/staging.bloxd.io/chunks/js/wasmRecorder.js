export const id = 61;
export const ids = [61];
export const modules = {
  60603: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_recorder_bg.76931e4ac4de14a65f3d.wasm"
  },
  60595: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdRecorderWasmError: () => Gb,
      RECORDER_MODULE_ID: () => hb,
      loadRecorderModule: () => ub,
      markRecorderTrapped: () => Kb,
      prefetchRecorderModule: () => rb,
      recorderMemoryBytes: () => lb,
      unloadRecorderModule: () => ob
    });
    var Ab = {};
    Ub.r(Ab), Ub.d(Ab, {
      xMb: () => Mb,
      vEb: () => Ib,
      Ov: () => Tb,
      default: () => Hb,
      initSync: () => Wb,
      cv: () => Eb,
      DMb: () => Yb,
      PMb: () => Bb
    });
    class Mb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        mb.H4CF(bb, 0)
      }
      busy() {
        return 0 !== mb.fnDb(this.__wbg_ptr)
      }
      command(bb, ab) {
        return 0 !== mb.OM29(this.__wbg_ptr, bb, ab)
      }
      XMb(bb) {
        return mb.NLZD(this.__wbg_ptr, bb) >>> 0
      }
      LMb() {
        mb.VJqF(this.__wbg_ptr)
      }
      vMb() {
        return mb.kckr(this.__wbg_ptr) >>> 0
      }
      eMb() {
        return mb.GskF(this.__wbg_ptr)
      }
      kMb() {
        return mb.z7ML(this.__wbg_ptr) >>> 0
      }
      yMb() {
        return mb.W41O(this.__wbg_ptr) >>> 0
      }
      feed(bb) {
        return mb.EMS8(this.__wbg_ptr, bb) >>> 0
      }
      constructor() {
        const bb = mb.rtaD();
        return this.__wbg_ptr = bb, vb.register(this, this.__wbg_ptr, this), this
      }
      RMb() {
        return mb.Jcsq(this.__wbg_ptr) >>> 0
      }
      LEb() {
        return mb.ilil(this.__wbg_ptr) >>> 0
      }
      BMb(bb, ab, Ub) {
        return 0 !== mb.RhpZ(this.__wbg_ptr, bb, ab, Ub)
      }
      stage(bb) {
        return mb.cYQ2(this.__wbg_ptr, bb) >>> 0
      }
      step() {
        return mb.vibV(this.__wbg_ptr) >>> 0
      }
    }

    function Tb(bb, ab) {
      const Ub = function(bb, ab, Ub) {
          if (void 0 === Ub) {
            const Ub = xb.encode(bb),
              Ab = ab(Ub.length, 1) >>> 0;
            return jb().subarray(Ab, Ab + Ub.length).set(Ub), pb = Ub.length, Ab
          }
          let Ab = bb.length,
            Mb = ab(Ab, 1) >>> 0;
          const Tb = jb();
          let Eb = 0;
          for (; Eb < Ab; Eb++) {
            const ab = bb.charCodeAt(Eb);
            if (ab > 127) break;
            Tb[Mb + Eb] = ab
          }
          if (Eb !== Ab) {
            0 !== Eb && (bb = bb.slice(Eb)), Mb = Ub(Mb, Ab, Ab = Eb + 3 * bb.length, 1) >>> 0;
            const ab = jb().subarray(Mb + Eb, Mb + Ab);
            Eb += xb.encodeInto(bb, ab).written, Mb = Ub(Mb, Ab, Eb, 1) >>> 0
          }
          return pb = Eb, Mb
        }(bb, mb.jd7l, mb.PJJl),
        Ab = pb,
        Mb = mb.gqEW(Ub, Ab, ab);
      if (Mb[1]) throw yb(Mb[0])
    }

    function Eb() {
      mb.EPq4()
    }

    function Yb() {
      return mb.QVjn() >>> 0
    }

    function Bb() {
      return yb(mb.vCPd())
    }

    function eb() {
      return {
        __proto__: null,
        U3CW: {
          __proto__: null,
          M1yi: function(bb, ab) {
            return Lb(Error(Pb(bb, ab)))
          },
          vEvx: function() {
            return Lb(mb.memory)
          },
          ser2: function(bb, ab) {
            throw new Error(Pb(bb, ab))
          },
          TSBU: function(bb, ab) {
            console.error(Pb(bb, ab))
          },
          LXIV: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Mb.prototype[Symbol.dispose] = Mb.prototype.free);
    const vb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => mb?.__wbg_recordermodule_free(bb, 1)));

    function Lb(bb) {
      kb === Rb.length && Rb.push(Rb.length + 1);
      const ab = kb;
      return kb = Rb[ab], Rb[ab] = bb, ab
    }

    function Pb(bb, ab) {
      return function(bb, ab) {
        zb += ab, zb >= Db && (Zb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Zb.decode(), zb = ab);
        return Zb.decode(jb().subarray(bb, bb + ab))
      }(bb >>> 0, ab)
    }
    let Xb = null;

    function jb() {
      return null !== Xb && 0 !== Xb.byteLength || (Xb = new Uint8Array(mb.memory.buffer)), Xb
    }
    let Rb = new Array(1024).fill(void 0);
    Rb.push(void 0, null, !0, !1);
    let kb = Rb.length;

    function yb(bb) {
      const ab = function(bb) {
        return Rb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (Rb[bb] = kb, kb = bb)
      }(bb), ab
    }
    let Zb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Zb.decode();
    const Db = 2146435072;
    let zb = 0;
    const xb = new TextEncoder;
    "encodeInto" in xb || (xb.encodeInto = function(bb, ab) {
      const Ub = xb.encode(bb);
      return ab.set(Ub), {
        read: bb.length,
        written: Ub.length
      }
    });
    let ib, fb, mb, pb = 0;

    function Nb(bb, ab) {
      return fb = bb, mb = bb.exports, ib = ab, Xb = null, mb.MWq0(), mb
    }

    function Wb(bb) {
      if (void 0 !== mb) return mb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ab = eb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Nb(new WebAssembly.Instance(bb, ab), bb)
    }
    async function Hb(bb) {
      if (void 0 !== mb) return mb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ab = eb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Ub,
        module: Ab
      } = await async function(bb, ab) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ab)
          } catch (Ub) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Ub;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Ub)
          }
          const Ab = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Ab, ab)
        } {
          const Ub = await WebAssembly.instantiate(bb, ab);
          return Ub instanceof WebAssembly.Instance ? {
            instance: Ub,
            module: bb
          } : Ub
        }
      }(await bb, ab);
      return Nb(Ub, Ab)
    }

    function Ib() {
      mb = void 0, fb = void 0, Xb = null, Rb = new Array(1024).fill(void 0), Rb.push(void 0, null, !0, !1), kb = Rb.length
    }
    var db = Ub(3382),
      Fb = Ub(6251);
    const hb = 2;
    class Gb extends Error {
      stage;
      constructor(bb, ab) {
        super((0, db.w)(bb, ab), {
          cause: ab
        }), this.name = "BloxdRecorderWasmError", this.stage = bb
      }
    }
    let Qb = null;
    const qb = function(bb) {
      let ab = null,
        Ub = null,
        Ab = null,
        Mb = null;
      const Tb = async () => {
        let Ub = null;
        try {
          return Ub = ab ??= (0, db.A)(bb.url(), (0, Fb.b)(bb.name)), await Ub
        } catch (Ab) {
          throw ab === Ub && (ab = null), bb.error((0, db.G)(Ab), Ab)
        }
      };
      return {
        load: () => {
          if (Mb) return Promise.reject(Mb);
          if (Ub) return Ub;
          const ab = (async () => {
            const ab = await Tb();
            try {
              await bb.init(ab)
            } catch (Ub) {
              throw bb.error("instantiate", Ub)
            }
            return bb.bindings
          })();
          Ub = ab, Ab = ab;
          const Eb = () => {
            Ab === ab && (Ab = null)
          };
          return ab.then(Eb, (() => {
            Eb(), Ub === ab && (Ub = null)
          })), ab
        },
        prefetch: async () => {
          Mb || Ub || await Tb()
        },
        markTrapped: ab => (Mb ??= bb.error("call", ab), Mb),
        unload: () => {
          Mb || !bb.reset || Ab || (bb.reset(), Ub = null)
        }
      }
    }({
      name: "bloxd_wasm_recorder",
      url: () => new Ub.U(Ub(60603)),
      init: async bb => {
        await Hb({
          module_or_path: bb
        }), Qb = Bb()
      },
      bindings: Ab,
      error: (bb, ab) => new Gb(bb, ab),
      reset: () => {
        Ib(), Qb = null
      }
    });

    function ub() {
      return qb.load()
    }

    function rb() {
      return qb.prefetch()
    }

    function Kb(bb) {
      return qb.markTrapped(bb)
    }

    function ob() {
      qb.unload()
    }

    function lb() {
      return Qb?.buffer.byteLength ?? 0
    }
  },
  6251: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(3382);
    const Mb = {
      bloxd_wasm: () => "df1b903500ac83f65c5a12ae0334be78271c1261b3baef97884984177efc2869",
      bloxd_wasm_client: () => "ddba43704f4b51c2b9b5e92ffcaa509732e889b3b53b6c1830f73369267affe0",
      bloxd_wasm_workers: () => "668b24c55828dde98b17e59e8893929e323d32ef04dadc3f78b9ac5e28cbde92",
      bloxd_wasm_models: () => "8a1b9cd4204a64965dd8d06b574b18326dae4bff2cae212232f2bf0705ec3afc",
      bloxd_wasm_webgpu: () => "ab3a793e0fd1809915590d6cda9fe854833ed761936844d9006f3c2d1762ce81",
      bloxd_wasm_webgl: () => "8ae04686ca2b26d1c6c479775a829553f69bef25b7a02fb3caee127c21b6eadf",
      bloxd_wasm_webgl1: () => "f0ec2aa440ca05962fee255848703e54bf0da446fc7ef678f36cbb27fe626abf",
      bloxd_wasm_replay: () => "193eaac7b48b77e013cff0f1dcf90bc00cce15c5f029d1e2198b0dd324467273",
      bloxd_wasm_recorder: () => "d22122b8d2df98b8030d0fd0125ea9d4ed0bd919d0989f19e5b6bdcdf9376225",
      bloxd_wasm_anim: () => "b62ffaebae3ed7e68aaa528dd187235246f0fe0bdb4702b8d0334196ae51d05b",
      bloxd_wasm_textures: () => "fc6c03ba22ccf00e54dfe8ca9b3a0ef2dfd30c3397e1fc7ceac769892957ec5f",
      bloxd_wasm_shader_pack: () => "8381e40a377cb85dbad2bcff788fc083a71f4231d6c775dad91a853065eff4fe"
    };
    var Tb = Ub(4376);

    function Eb(bb) {
      const ab = Object.prototype.hasOwnProperty.call(Mb, bb) ? Mb[bb]() : void 0;
      if (void 0 !== ab) return {
        sha256: ab,
        onMismatch: Tb.G
      };
      throw new Ab.f(`${bb} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);