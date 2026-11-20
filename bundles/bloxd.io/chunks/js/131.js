export const id = 131;
export const ids = [131];
export const modules = {
  6244: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      loadPageShaderPackCompiler: () => Pa
    });
    var Ab = {};
    Ub.r(Ab), Ub.d(Ab, {
      qAb: () => Mb,
      i6: () => Tb,
      default: () => sb,
      uAb: () => Eb,
      rAb: () => Yb,
      initSync: () => wb,
      cv: () => Bb,
      xUb: () => eb,
      KAb: () => vb,
      oAb: () => Lb,
      pN: () => Pb,
      lAb: () => Xb,
      mN: () => jb,
      tAb: () => Rb
    });
    class Mb {
      static __wrap(bb) {
        const ab = Object.create(Mb.prototype);
        return ab.__wbg_ptr = bb, yb.register(ab, ab.__wbg_ptr, ab), ab
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, yb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        ob.SYrA(bb, 0)
      }
      get errorsJson() {
        let bb, ab;
        try {
          const Ub = ob.cq7T(this.__wbg_ptr);
          return bb = Ub[0], ab = Ub[1], fb(Ub[0], Ub[1])
        } finally {
          ob.N13g(bb, ab, 1)
        }
      }
      get features() {
        const bb = ob.GL0N(this.__wbg_ptr);
        var ab = Db(bb[0], bb[1]);
        return ob.N13g(bb[0], 4 * bb[1], 4), ab
      }
      get hooks() {
        const bb = ob.TLti(this.__wbg_ptr);
        var ab = zb(bb[0], bb[1]).slice();
        return ob.N13g(bb[0], 1 * bb[1], 1), ab
      }
      mapValidationMessage(bb, ab, Ub, Ab, Mb) {
        let Tb, Eb;
        try {
          const eb = ob.jPKq(this.__wbg_ptr, bb, ab, Ub, Zb(Ab), Zb(Mb));
          var Yb = eb[0],
            Bb = eb[1];
          if (eb[3]) throw Yb = 0, Bb = 0, hb(eb[2]);
          return Tb = Yb, Eb = Bb, fb(Yb, Bb)
        } finally {
          ob.N13g(Tb, Eb, 1)
        }
      }
      get moduleCodes() {
        const bb = ob.G8DJ(this.__wbg_ptr);
        var ab = Db(bb[0], bb[1]);
        return ob.N13g(bb[0], 4 * bb[1], 4), ab
      }
      get offInStrictJson() {
        let bb, ab;
        try {
          const Ub = ob.IMfm(this.__wbg_ptr);
          return bb = Ub[0], ab = Ub[1], fb(Ub[0], Ub[1])
        } finally {
          ob.N13g(bb, ab, 1)
        }
      }
      get reads() {
        const bb = ob.arct(this.__wbg_ptr);
        var ab = Db(bb[0], bb[1]);
        return ob.N13g(bb[0], 4 * bb[1], 4), ab
      }
      get validationModuleCodes() {
        const bb = ob.uvM1(this.__wbg_ptr);
        var ab = Db(bb[0], bb[1]);
        return ob.N13g(bb[0], 4 * bb[1], 4), ab
      }
      get validationModuleKeys() {
        const bb = ob.e7ua(this.__wbg_ptr);
        var ab = zb(bb[0], bb[1]).slice();
        return ob.N13g(bb[0], 1 * bb[1], 1), ab
      }
      get variantFlags() {
        const bb = ob.UUkp(this.__wbg_ptr);
        var ab = zb(bb[0], bb[1]).slice();
        return ob.N13g(bb[0], 1 * bb[1], 1), ab
      }
    }

    function Tb(bb, ab, Ub, Ab, Tb, Eb, Yb) {
      const Bb = Fb(bb, ob.dimf),
        eb = lb,
        vb = Fb(ab, ob.dimf),
        Lb = lb,
        Pb = Fb(Ub, ob.dimf),
        Xb = lb,
        jb = db(Ab, ob.dimf),
        Rb = lb,
        kb = Fb(Tb, ob.dimf),
        yb = lb,
        Zb = Fb(Eb, ob.dimf),
        Db = lb,
        zb = Fb(Yb, ob.dimf),
        xb = lb,
        ib = ob.KdqA(Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb);
      if (ib[2]) throw hb(ib[1]);
      return Mb.__wrap(ib[0])
    }

    function Eb() {
      const bb = ob.ezSF();
      var ab = Db(bb[0], bb[1]);
      return ob.N13g(bb[0], 4 * bb[1], 4), ab
    }

    function Yb() {
      const bb = ob.XaTw();
      var ab = Db(bb[0], bb[1]);
      return ob.N13g(bb[0], 4 * bb[1], 4), ab
    }

    function Bb() {
      ob.TXjK()
    }

    function eb(bb, ab, Ub, Ab, Mb) {
      let Tb, Eb;
      try {
        const eb = Fb(bb, ob.dimf),
          vb = lb,
          Lb = db(ab, ob.dimf),
          Pb = lb,
          Xb = Fb(Ub, ob.dimf),
          jb = lb,
          Rb = db(Ab, ob.dimf),
          kb = lb,
          yb = function(bb, ab) {
            const Ub = ab(1 * bb.length, 1) >>> 0;
            return Nb().set(bb, Ub / 1), lb = bb.length, Ub
          }(Mb, ob.dimf),
          Zb = lb,
          Db = ob.tR7L(eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb);
        var Yb = Db[0],
          Bb = Db[1];
        if (Db[3]) throw Yb = 0, Bb = 0, hb(Db[2]);
        return Tb = Yb, Eb = Bb, fb(Yb, Bb)
      } finally {
        ob.N13g(Tb, Eb, 1)
      }
    }

    function vb() {
      let bb, ab;
      try {
        const Ub = ob.NGZl();
        return bb = Ub[0], ab = Ub[1], fb(Ub[0], Ub[1])
      } finally {
        ob.N13g(bb, ab, 1)
      }
    }

    function Lb(bb) {
      let ab, Ub;
      try {
        const Tb = ob.epsH(bb);
        var Ab = Tb[0],
          Mb = Tb[1];
        if (Tb[3]) throw Ab = 0, Mb = 0, hb(Tb[2]);
        return ab = Ab, Ub = Mb, fb(Ab, Mb)
      } finally {
        ob.N13g(ab, Ub, 1)
      }
    }

    function Pb() {
      return ob.rhPe() >>> 0
    }

    function Xb() {
      let bb, ab;
      try {
        const Ub = ob.pTCL();
        return bb = Ub[0], ab = Ub[1], fb(Ub[0], Ub[1])
      } finally {
        ob.N13g(bb, ab, 1)
      }
    }

    function jb(bb, ab) {
      let Ub, Ab;
      try {
        const Eb = Fb(bb, ob.dimf),
          Yb = lb,
          Bb = db(ab, ob.dimf),
          eb = lb,
          vb = ob.rSKs(Eb, Yb, Bb, eb);
        var Mb = vb[0],
          Tb = vb[1];
        if (vb[3]) throw Mb = 0, Tb = 0, hb(vb[2]);
        return Ub = Mb, Ab = Tb, fb(Mb, Tb)
      } finally {
        ob.N13g(Ub, Ab, 1)
      }
    }

    function Rb(bb) {
      let ab, Ub;
      try {
        const Tb = ob.zgG5(Zb(bb));
        var Ab = Tb[0],
          Mb = Tb[1];
        if (Tb[3]) throw Ab = 0, Mb = 0, hb(Tb[2]);
        return ab = Ab, Ub = Mb, fb(Ab, Mb)
      } finally {
        ob.N13g(ab, Ub, 1)
      }
    }

    function kb() {
      return {
        __proto__: null,
        V7RF: {
          __proto__: null,
          milE: function(bb, ab) {
            return Zb(Error(fb(bb, ab)))
          },
          vuul: function(bb) {
            return null === Wb(bb)
          },
          EX54: function(bb) {
            return "string" === typeof Wb(bb)
          },
          jNFS: function(bb, ab) {
            const Ub = Wb(ab),
              Ab = "string" === typeof Ub ? Ub : void 0;
            var Mb, Tb = void 0 === (Mb = Ab) || null === Mb ? 0 : function(bb, ab, Ub) {
                if (void 0 === Ub) {
                  const Ub = ub.encode(bb),
                    Ab = ab(Ub.length, 1) >>> 0;
                  return Nb().subarray(Ab, Ab + Ub.length).set(Ub), lb = Ub.length, Ab
                }
                let Ab = bb.length,
                  Mb = ab(Ab, 1) >>> 0;
                const Tb = Nb();
                let Eb = 0;
                for (; Eb < Ab; Eb++) {
                  const ab = bb.charCodeAt(Eb);
                  if (ab > 127) break;
                  Tb[Mb + Eb] = ab
                }
                if (Eb !== Ab) {
                  0 !== Eb && (bb = bb.slice(Eb)), Mb = Ub(Mb, Ab, Ab = Eb + 3 * bb.length, 1) >>> 0;
                  const ab = Nb().subarray(Mb + Eb, Mb + Ab);
                  Eb += ub.encodeInto(bb, ab).written, Mb = Ub(Mb, Ab, Eb, 1) >>> 0
                }
                return lb = Eb, Mb
              }(Ab, ob.dimf, ob.bchF),
              Eb = lb;
            ib().setInt32(bb + 4, Eb, !0), ib().setInt32(bb + 0, Tb, !0)
          },
          HWKy: function(bb, ab) {
            throw new Error(fb(bb, ab))
          },
          TyBx: function(bb, ab) {
            return Wb(bb).charCodeAt(ab >>> 0)
          },
          Xbvx: function(bb, ab) {
            console.error(fb(bb, ab))
          },
          y23Q: function(bb) {
            return Wb(bb).length
          },
          qyPa: function(bb, ab) {
            return Zb(fb(bb, ab))
          },
          zNVf: function(bb) {
            hb(bb)
          }
        }
      }
    }
    Symbol.dispose && (Mb.prototype[Symbol.dispose] = Mb.prototype.free);
    const yb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => ob.SYrA(bb, 1)));

    function Zb(bb) {
      Ib === Hb.length && Hb.push(Hb.length + 1);
      const ab = Ib;
      return Ib = Hb[ab], Hb[ab] = bb, ab
    }

    function Db(bb, ab) {
      bb >>>= 0;
      const Ub = ib(),
        Ab = [];
      for (let Mb = bb; Mb < bb + 4 * ab; Mb += 4) Ab.push(hb(Ub.getUint32(Mb, !0)));
      return Ab
    }

    function zb(bb, ab) {
      return bb >>>= 0, Nb().subarray(bb / 1, bb / 1 + ab)
    }
    let xb = null;

    function ib() {
      return (null === xb || !0 === xb.buffer.detached || void 0 === xb.buffer.detached && xb.buffer !== ob.memory.buffer) && (xb = new DataView(ob.memory.buffer)), xb
    }

    function fb(bb, ab) {
      return function(bb, ab) {
        qb += ab, qb >= Qb && (Gb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Gb.decode(), qb = ab);
        return Gb.decode(Nb().subarray(bb, bb + ab))
      }(bb >>> 0, ab)
    }
    let mb = null;
    let pb = null;

    function Nb() {
      return null !== pb && 0 !== pb.byteLength || (pb = new Uint8Array(ob.memory.buffer)), pb
    }

    function Wb(bb) {
      return Hb[bb]
    }
    let Hb = new Array(1024).fill(void 0);
    Hb.push(void 0, null, !0, !1);
    let Ib = Hb.length;

    function db(bb, ab) {
      const Ub = ab(4 * bb.length, 4) >>> 0;
      return (null !== mb && 0 !== mb.byteLength || (mb = new Uint32Array(ob.memory.buffer)), mb).set(bb, Ub / 4), lb = bb.length, Ub
    }

    function Fb(bb, ab) {
      const Ub = ab(4 * bb.length, 4) >>> 0,
        Ab = ib();
      for (let Mb = 0; Mb < bb.length; Mb++) Ab.setUint32(Ub + 4 * Mb, Zb(bb[Mb]), !0);
      return lb = bb.length, Ub
    }

    function hb(bb) {
      const ab = Wb(bb);
      return function(bb) {
        bb < 1028 || (Hb[bb] = Ib, Ib = bb)
      }(bb), ab
    }
    let Gb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Gb.decode();
    const Qb = 2146435072;
    let qb = 0;
    const ub = new TextEncoder;
    "encodeInto" in ub || (ub.encodeInto = function(bb, ab) {
      const Ub = ub.encode(bb);
      return ab.set(Ub), {
        read: bb.length,
        written: Ub.length
      }
    });
    let rb, Kb, ob, lb = 0;

    function tb(bb, ab) {
      return Kb = bb, ob = bb.exports, rb = ab, xb = null, mb = null, pb = null, ob.rokt(), ob
    }

    function wb(bb) {
      if (void 0 !== ob) return ob;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ab = kb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return tb(new WebAssembly.Instance(bb, ab), bb)
    }
    async function sb(bb) {
      if (void 0 !== ob) return ob;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ab = kb();
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
      return tb(Ub, Ab)
    }
    var gb = Ub(3382),
      Cb = Ub(6251);
    class Vb extends Error {
      stage;
      constructor(bb, ab) {
        super((0, gb.w)(bb, ab), {
          cause: ab
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = bb
      }
    }
    let Ob = null,
      cb = null;

    function Jb() {
      return Ob ? Promise.resolve(Ob) : (cb || (cb = async function() {
        let bb;
        try {
          bb = await (0, gb.A)(new Ub.U(Ub(6254)), (0, Cb.b)("bloxd_wasm_shader_pack"))
        } catch (ab) {
          throw new Vb((0, gb.G)(ab), ab)
        }
        try {
          await sb({
            module_or_path: bb
          })
        } catch (ab) {
          throw new Vb("instantiate", ab)
        }
        return Ob = Ab, Ob
      }(), cb.then(void 0, (() => {
        cb = null
      }))), cb)
    }
    var nb = Ub(6271);

    function Sb(bb) {
      let [ab, Ub, Ab, Mb] = bb;
      const Tb = {
        file: ab,
        line: Ub,
        message: Ab
      };
      return Mb && (Tb.variants = Mb.map(nb.n)), Tb
    }

    function ba(bb) {
      return JSON.parse(bb).map(Sb)
    }

    function aa(bb, ab) {
      if (!Number.isInteger(bb) || bb < 0 || bb > 4294967295) throw new Error(`${ab} ${bb} is not a whole number from 0 to 4294967295`);
      return bb
    }

    function Ua(bb) {
      return [bb.named.map((bb => bb.name)), Uint32Array.from(bb.named, (bb => aa(bb.id, "Texture ID")))]
    }
    const Aa = new WeakMap;
    const Ma = new WeakMap,
      Ta = new WeakSet;

    function Ea(bb, ab) {
      if (Ta.has(bb)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return ab()
      } catch (Ub) {
        throw Ub instanceof WebAssembly.RuntimeError && Ta.add(bb), Ub
      }
    }

    function Ya(bb) {
      let ab = Ma.get(bb);
      if (!ab) {
        let Ub, Ab;
        ab = {
          i6: (ab, Ub) => Ea(bb, (() => function(bb, ab, Ub) {
            const Ab = bb.i6(ab.map((bb => bb.path)), ab.map((bb => bb.source)), ...Ua(Ub), Ub.aliases.map((bb => bb.name)), Ub.aliases.map((bb => bb.texture)), Ub.aliases.map((bb => bb.kind)));
            let Mb = !1;
            try {
              const bb = Ab.validationModuleCodes,
                ab = Array.from(Ab.validationModuleKeys, ((ab, Ub) => ({
                  key: (0, nb.n)(ab),
                  code: bb[Ub]
                }))),
                Ub = {
                  errors: ba(Ab.errorsJson),
                  offInStrict: ba(Ab.offInStrictJson),
                  variants: (0, nb.h)(Ab),
                  validationModules: ab,
                  features: Ab.features
                };
              return ab.forEach(((bb, ab) => {
                Aa.set(bb, {
                  pack: Ab,
                  index: ab
                })
              })), Mb = ab.length > 0, Ub
            } finally {
              Mb || Ab.free()
            }
          }(bb, ab, Ub))),
          mapValidationMessage: (ab, Ub) => {
            const Ab = Aa.get(ab);
            if (!Ab) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Sb(JSON.parse(Ea(bb, (() => Ab.pack.mapValidationMessage(Ab.index, Ub.lineNum, Ub.linePos, Ub.message, Ub.type)))))
          },
          xUb: ab => Ea(bb, (() => function(bb, ab) {
            const Ub = new Int32Array(ab.length),
              Ab = [];
            return ab.forEach(((bb, ab) => {
              Ub[ab] = bb.variants ? bb.variants.length : -1;
              for (const Ub of bb.variants ?? []) Ab.push((0, nb.l)(Ub))
            })), ba(bb.xUb(ab.map((bb => bb.file)), Uint32Array.from(ab, (bb => aa(bb.line, "Diagnostic line"))), ab.map((bb => bb.message)), Ub, Uint8Array.from(Ab)))
          }(bb, ab))),
          mN: ab => Ea(bb, (() => bb.mN(...Ua(ab)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Ub ??= Ea(bb, (() => bb.lAb())), Ub
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Ab ??= Ea(bb, (() => {
              const ab = bb.rAb();
              return bb.uAb().map(((bb, Ub) => ({
                path: bb,
                source: ab[Ub]
              })))
            })), Ab
          },
          tAb: ab => Ea(bb, (() => bb.tAb(ab))),
          resolveHeader: ab => Ea(bb, (() => bb.oAb((0, nb.l)(ab)))),
          KAb: () => Ea(bb, (() => bb.KAb()))
        }, Ma.set(bb, ab)
      }
      return ab
    }
    var Ba = Ub(2953),
      ea = Ub(6262);
    const va = "bloxdShaderPackWasmFailureReported";
    let La = null;

    function Pa() {
      return La ??= async function() {
        if ("undefined" === typeof WebAssembly) return Xa("unsupported", "This browser has no WebAssembly"), null;
        const bb = (0, ea.loadShaderPackTextures)().then((() => !0), (bb => (console.error("Could not load the shader pack textures, so shader packs can't run", bb), !1)));
        try {
          const ab = await async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jb;
            return Ya(await bb())
          }();
          return await bb ? ab : null
        } catch (ab) {
          const bb = ab instanceof Error ? ab.message : String(ab);
          return Xa(Ba.e[ab instanceof Vb ? ab.stage : "instantiate"], bb), null
        }
      }(), La
    }

    function Xa(bb, ab) {
      (0, Ba.l)(va, `Shader pack wasm ${bb}, so shader packs can't run: ${ab}`, ab, `shader_pack_${bb}`)
    }
  },
  6254: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/bloxd_wasm_shader_pack_bg.eedc38e7f0adb4f3179e.wasm"
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
  6271: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => zb,
      h: () => xb,
      l: () => Zb,
      n: () => yb
    });
    var Ab = Ub(6273);
    const Mb = 6,
      Tb = 3,
      Eb = 1,
      Yb = 2,
      Bb = 4,
      eb = 8,
      vb = 16,
      Lb = 32,
      Pb = 64,
      Xb = 128,
      jb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Rb(bb) {
      if (!bb) return 0;
      const ab = jb.indexOf(bb);
      if (ab <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ab
    }

    function kb(bb) {
      if (0 === bb) return null;
      const ab = jb[bb];
      if (void 0 === ab) throw new Error(`${bb} is not a shader pack hook function id`);
      return ab
    }

    function yb(bb) {
      const ab = Ab.b.length;
      return {
        strict: bb >= ab,
        program: Ab.b[bb % ab]
      }
    }

    function Zb(bb) {
      return Number(bb.strict) * Ab.b.length + Ab.b.indexOf(bb.program)
    }

    function Db(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function zb(bb) {
      const ab = {
        variantFlags: new Uint8Array(Mb),
        hooks: new Uint8Array(Mb * Tb),
        moduleCodes: Array(Mb).fill(""),
        reads: Array(2 * Mb).fill("")
      };
      for (const Ub of bb) {
        const bb = Zb(Ub.key),
          Ab = (bb, ab) => null === Ub.hooks.surface || Ub.reads.fragment.includes(bb) ? 0 : ab;
        ab.variantFlags[bb] = (Ub.sceneDepth ? Eb : 0) | (Ub.movesVertices ? Yb : 0) | (Ub.sunShadow ? Bb : 0) | (Ub.airShadow ? eb : 0) | (Ub.discards ? vb : 0) | Ab("localPosition", Lb) | Ab("enchantSpeed", Pb) | Ab("enchantTier", Xb), ab.hooks[bb * Tb] = Rb(Ub.hooks.vertex), ab.hooks[bb * Tb + 1] = Rb(Ub.hooks.surface), ab.hooks[bb * Tb + 2] = Rb(Ub.hooks.light), ab.moduleCodes[bb] = Ub.moduleCode, ab.reads[2 * bb] = Ub.reads.vertex.join(" "), ab.reads[2 * bb + 1] = Ub.reads.fragment.join(" ")
      }
      return ab
    }

    function xb(bb) {
      const {
        hooks: ab,
        moduleCodes: Ub,
        reads: Ab
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Mb) => {
        const Lb = Mb * Tb;
        return {
          key: yb(Mb),
          hooks: {
            vertex: kb(ab[Lb]),
            surface: kb(ab[Lb + 1]),
            light: kb(ab[Lb + 2])
          },
          moduleCode: Ub[Mb],
          sceneDepth: 0 !== (bb & Eb),
          sunShadow: 0 !== (bb & Bb),
          airShadow: 0 !== (bb & eb),
          movesVertices: 0 !== (bb & Yb),
          discards: 0 !== (bb & vb),
          reads: {
            vertex: Db(Ab[2 * Mb]),
            fragment: Db(Ab[2 * Mb + 1])
          }
        }
      }))
    }
  },
  6273: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      f: () => Eb,
      i: () => Yb,
      l: () => Mb,
      m: () => Tb
    });
    const Ab = ["terrain", "liquid", "model"];

    function Mb() {
      const bb = [];
      for (const ab of [!1, !0])
        for (const Ub of Ab) bb.push({
          strict: ab,
          program: Ub
        });
      return bb
    }

    function Tb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Eb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Yb(bb, ab) {
      return "off" !== ab && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ab) && !Eb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);