export const id = 62;
export const ids = [62];
export const modules = {
  60609: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_replay_bg.cf1de34791668c36dc38.wasm"
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
  },
  60607: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      BloxdReplayWasmError: () => Gb,
      loadReplayModule: () => lb,
      markReplayTrapped: () => sb,
      replayMemoryBytes: () => wb,
      unloadReplayModule: () => tb
    });
    var Ab = {};
    Ub.r(Ab), Ub.d(Ab, {
      fMb: () => Mb,
      vEb: () => db,
      Ov: () => Tb,
      default: () => Ib,
      initSync: () => Hb,
      cv: () => Eb,
      DMb: () => Yb,
      mMb: () => Bb
    });
    class Mb {
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, vb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        pb.GzBP(bb, 0)
      }
      HMb(bb, ab, Ub, Ab, Mb, Tb) {
        pb.w4WM(this.__wbg_ptr, bb, ab, Ub, Ab, Mb, Tb)
      }
      close() {
        pb.N7Do(this.__wbg_ptr)
      }
      crop(bb, ab) {
        pb.BC4f(this.__wbg_ptr, bb, ab)
      }
      FMb(bb, ab) {
        pb.LuU2(this.__wbg_ptr, bb, ab)
      }
      GMb() {
        return pb.F3rD(this.__wbg_ptr) >>> 0
      }
      hMb() {
        return pb.TYro(this.__wbg_ptr) >>> 0
      }
      QMb() {
        return pb.jpHR(this.__wbg_ptr) >>> 0
      }
      qMb() {
        return pb.Gyfe(this.__wbg_ptr) >>> 0
      }
      dMb(bb, ab) {
        pb.Oe5R(this.__wbg_ptr, bb, ab)
      }
      constructor() {
        const bb = pb.Bh1C();
        return this.__wbg_ptr = bb, vb.register(this, this.__wbg_ptr, this), this
      }
      open() {
        pb.UHU2(this.__wbg_ptr)
      }
      RMb() {
        return pb.byG3(this.__wbg_ptr) >>> 0
      }
      pause() {
        pb.LoOV(this.__wbg_ptr)
      }
      play() {
        pb.KEEr(this.__wbg_ptr)
      }
      save() {
        return pb.wih8(this.__wbg_ptr) >>> 0
      }
      uMb() {
        pb.lfzY(this.__wbg_ptr)
      }
      seek(bb, ab) {
        pb.s2PS(this.__wbg_ptr, bb, ab)
      }
      KMb(bb) {
        pb.lpdg(this.__wbg_ptr, bb)
      }
      IMb(bb, ab) {
        const Ub = function(bb, ab) {
            const Ub = ab(8 * bb.length, 8) >>> 0;
            return function() {
              null !== Pb && 0 !== Pb.byteLength || (Pb = new Float64Array(pb.memory.buffer));
              return Pb
            }().set(bb, Ub / 8), Nb = bb.length, Ub
          }(ab, pb.cHs4),
          Ab = Nb;
        pb.ERH9(this.__wbg_ptr, bb, Ub, Ab)
      }
      WMb(bb, ab) {
        pb.etnv(this.__wbg_ptr, bb, ab)
      }
      rMb(bb) {
        pb.Bnf5(this.__wbg_ptr, bb)
      }
      stage(bb) {
        return pb.DfJt(this.__wbg_ptr, bb) >>> 0
      }
      step(bb, ab) {
        return pb.yjyr(this.__wbg_ptr, bb, ab) >>> 0
      }
    }

    function Tb(bb, ab) {
      const Ub = function(bb, ab, Ub) {
          if (void 0 === Ub) {
            const Ub = ib.encode(bb),
              Ab = ab(Ub.length, 1) >>> 0;
            return Rb().subarray(Ab, Ab + Ub.length).set(Ub), Nb = Ub.length, Ab
          }
          let Ab = bb.length,
            Mb = ab(Ab, 1) >>> 0;
          const Tb = Rb();
          let Eb = 0;
          for (; Eb < Ab; Eb++) {
            const ab = bb.charCodeAt(Eb);
            if (ab > 127) break;
            Tb[Mb + Eb] = ab
          }
          if (Eb !== Ab) {
            0 !== Eb && (bb = bb.slice(Eb)), Mb = Ub(Mb, Ab, Ab = Eb + 3 * bb.length, 1) >>> 0;
            const ab = Rb().subarray(Mb + Eb, Mb + Ab);
            Eb += ib.encodeInto(bb, ab).written, Mb = Ub(Mb, Ab, Eb, 1) >>> 0
          }
          return Nb = Eb, Mb
        }(bb, pb.cHs4, pb.jqsw),
        Ab = Nb,
        Mb = pb.UZuZ(Ub, Ab, ab);
      if (Mb[1]) throw Zb(Mb[0])
    }

    function Eb() {
      pb.wikl()
    }

    function Yb() {
      return pb.Pg1C() >>> 0
    }

    function Bb() {
      return Zb(pb.Y0Wx())
    }

    function eb() {
      return {
        __proto__: null,
        gc8R: {
          __proto__: null,
          Dvxf: function(bb, ab) {
            return Lb(Error(Xb(bb, ab)))
          },
          cxDs: function() {
            return Lb(pb.memory)
          },
          Ary6: function(bb, ab) {
            throw new Error(Xb(bb, ab))
          },
          ROA1: function(bb, ab) {
            console.error(Xb(bb, ab))
          },
          PUAn: function() {
            return performance.now()
          }
        }
      }
    }
    Symbol.dispose && (Mb.prototype[Symbol.dispose] = Mb.prototype.free);
    const vb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => pb?.__wbg_replaymodule_free(bb, 1)));

    function Lb(bb) {
      yb === kb.length && kb.push(kb.length + 1);
      const ab = yb;
      return yb = kb[ab], kb[ab] = bb, ab
    }
    let Pb = null;

    function Xb(bb, ab) {
      return function(bb, ab) {
        xb += ab, xb >= zb && (Db = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Db.decode(), xb = ab);
        return Db.decode(Rb().subarray(bb, bb + ab))
      }(bb >>> 0, ab)
    }
    let jb = null;

    function Rb() {
      return null !== jb && 0 !== jb.byteLength || (jb = new Uint8Array(pb.memory.buffer)), jb
    }
    let kb = new Array(1024).fill(void 0);
    kb.push(void 0, null, !0, !1);
    let yb = kb.length;

    function Zb(bb) {
      const ab = function(bb) {
        return kb[bb]
      }(bb);
      return function(bb) {
        bb < 1028 || (kb[bb] = yb, yb = bb)
      }(bb), ab
    }
    let Db = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Db.decode();
    const zb = 2146435072;
    let xb = 0;
    const ib = new TextEncoder;
    "encodeInto" in ib || (ib.encodeInto = function(bb, ab) {
      const Ub = ib.encode(bb);
      return ab.set(Ub), {
        read: bb.length,
        written: Ub.length
      }
    });
    let fb, mb, pb, Nb = 0;

    function Wb(bb, ab) {
      return mb = bb, pb = bb.exports, fb = ab, Pb = null, jb = null, pb.R7ix(), pb
    }

    function Hb(bb) {
      if (void 0 !== pb) return pb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ab = eb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Wb(new WebAssembly.Instance(bb, ab), bb)
    }
    async function Ib(bb) {
      if (void 0 !== pb) return pb;
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
      return Wb(Ub, Ab)
    }

    function db() {
      pb = void 0, mb = void 0, Pb = null, jb = null, kb = new Array(1024).fill(void 0), kb.push(void 0, null, !0, !1), yb = kb.length
    }
    var Fb = Ub(3382),
      hb = Ub(6251);
    class Gb extends Error {
      stage;
      constructor(bb, ab) {
        super((0, Fb.w)(bb, ab), {
          cause: ab
        }), this.name = "BloxdReplayWasmError", this.stage = bb
      }
    }
    let Qb = null,
      qb = null,
      ub = Promise.resolve(),
      rb = 0,
      Kb = null,
      ob = null;

    function lb() {
      if (ob) return Promise.reject(ob);
      if (qb) return qb;
      const bb = rb,
        ab = ub,
        Mb = (async () => {
          let Mb;
          await ab, Qb ??= (0, Fb.A)(new Ub.U(Ub(60609)), (0, hb.b)("bloxd_wasm_replay"));
          try {
            Mb = await Qb
          } catch (Tb) {
            throw Qb = null, new Gb((0, Fb.G)(Tb), Tb)
          }
          if (bb !== rb) throw new Gb("instantiate", new Error("unloaded while loading"));
          try {
            await Ib({
              module_or_path: Mb
            })
          } catch (Tb) {
            throw db(), new Gb("instantiate", Tb)
          }
          if (bb !== rb) throw db(), new Gb("instantiate", new Error("unloaded while loading"));
          return Kb = Bb(), Ab
        })();
      return qb = Mb, ub = Mb.catch((() => {})), Mb.catch((() => {
        qb === Mb && (qb = null)
      })), Mb
    }

    function tb() {
      ob || gb()
    }

    function wb() {
      return Kb?.buffer.byteLength ?? 0
    }

    function sb(bb) {
      return ob || (ob = new Gb("call", bb), gb()), ob
    }

    function gb() {
      rb++, db(), qb = null, Kb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);