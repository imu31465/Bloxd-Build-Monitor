export const id = 131;
export const ids = [131];
export const modules = {
  6276: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      loadPageShaderPackCompiler: () => Xc
    });
    var kb = {};
    sb.r(kb), sb.d(kb, {
      Gkb: () => Wb,
      N9: () => ab,
      default: () => rb,
      Kkb: () => Tb,
      Zkb: () => Ub,
      initSync: () => wb,
      NM: () => Ib,
      Nsb: () => Hb,
      zkb: () => fb,
      qkb: () => Mb,
      VY: () => Xb,
      dkb: () => nb,
      lY: () => mb,
      Akb: () => lb
    });
    class Wb {
      static __wrap(bb) {
        const cb = Object.create(Wb.prototype);
        return cb.__wbg_ptr = bb, eb.register(cb, cb.__wbg_ptr, cb), cb
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, eb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        qb.f3Cz(bb, 0)
      }
      get errorsJson() {
        let bb, cb;
        try {
          const sb = qb.xbmW(this.__wbg_ptr);
          return bb = sb[0], cb = sb[1], Yb(sb[0], sb[1])
        } finally {
          qb.Svvl(bb, cb, 1)
        }
      }
      get features() {
        const bb = qb.fQm1(this.__wbg_ptr);
        var cb = Nb(bb[0], bb[1]);
        return qb.Svvl(bb[0], 4 * bb[1], 4), cb
      }
      get hooks() {
        const bb = qb.BvYU(this.__wbg_ptr);
        var cb = Vb(bb[0], bb[1]).slice();
        return qb.Svvl(bb[0], 1 * bb[1], 1), cb
      }
      mapValidationMessage(bb, cb, sb, kb, Wb) {
        let ab, Tb;
        try {
          const Hb = qb.TIrW(this.__wbg_ptr, bb, cb, sb, Cb(kb), Cb(Wb));
          var Ub = Hb[0],
            Ib = Hb[1];
          if (Hb[3]) throw Ub = 0, Ib = 0, Eb(Hb[2]);
          return ab = Ub, Tb = Ib, Yb(Ub, Ib)
        } finally {
          qb.Svvl(ab, Tb, 1)
        }
      }
      get moduleCodes() {
        const bb = qb.exG7(this.__wbg_ptr);
        var cb = Nb(bb[0], bb[1]);
        return qb.Svvl(bb[0], 4 * bb[1], 4), cb
      }
      get offInStrictJson() {
        let bb, cb;
        try {
          const sb = qb.TYzk(this.__wbg_ptr);
          return bb = sb[0], cb = sb[1], Yb(sb[0], sb[1])
        } finally {
          qb.Svvl(bb, cb, 1)
        }
      }
      get reads() {
        const bb = qb.QFK3(this.__wbg_ptr);
        var cb = Nb(bb[0], bb[1]);
        return qb.Svvl(bb[0], 4 * bb[1], 4), cb
      }
      get validationModuleCodes() {
        const bb = qb.XVPl(this.__wbg_ptr);
        var cb = Nb(bb[0], bb[1]);
        return qb.Svvl(bb[0], 4 * bb[1], 4), cb
      }
      get validationModuleKeys() {
        const bb = qb.JVYT(this.__wbg_ptr);
        var cb = Vb(bb[0], bb[1]).slice();
        return qb.Svvl(bb[0], 1 * bb[1], 1), cb
      }
      get variantFlags() {
        const bb = qb.o4ZU(this.__wbg_ptr);
        var cb = Vb(bb[0], bb[1]).slice();
        return qb.Svvl(bb[0], 1 * bb[1], 1), cb
      }
    }

    function ab(bb, cb, sb, kb, ab, Tb, Ub) {
      const Ib = Db(bb, qb.pYUd),
        Hb = db,
        fb = Db(cb, qb.pYUd),
        Mb = db,
        Xb = Db(sb, qb.pYUd),
        nb = db,
        mb = Pb(kb, qb.pYUd),
        lb = db,
        Qb = Db(ab, qb.pYUd),
        eb = db,
        Cb = Db(Tb, qb.pYUd),
        Nb = db,
        Vb = Db(Ub, qb.pYUd),
        Lb = db,
        ub = qb.HkNI(Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb);
      if (ub[2]) throw Eb(ub[1]);
      return Wb.__wrap(ub[0])
    }

    function Tb() {
      const bb = qb.Kpws();
      var cb = Nb(bb[0], bb[1]);
      return qb.Svvl(bb[0], 4 * bb[1], 4), cb
    }

    function Ub() {
      const bb = qb.C18C();
      var cb = Nb(bb[0], bb[1]);
      return qb.Svvl(bb[0], 4 * bb[1], 4), cb
    }

    function Ib() {
      qb.LClW()
    }

    function Hb(bb, cb, sb, kb, Wb) {
      let ab, Tb;
      try {
        const Hb = Db(bb, qb.pYUd),
          fb = db,
          Mb = Pb(cb, qb.pYUd),
          Xb = db,
          nb = Db(sb, qb.pYUd),
          mb = db,
          lb = Pb(kb, qb.pYUd),
          Qb = db,
          eb = function(bb, cb) {
            const sb = cb(1 * bb.length, 1) >>> 0;
            return gb().set(bb, sb / 1), db = bb.length, sb
          }(Wb, qb.pYUd),
          Cb = db,
          Nb = qb.YFeH(Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb);
        var Ub = Nb[0],
          Ib = Nb[1];
        if (Nb[3]) throw Ub = 0, Ib = 0, Eb(Nb[2]);
        return ab = Ub, Tb = Ib, Yb(Ub, Ib)
      } finally {
        qb.Svvl(ab, Tb, 1)
      }
    }

    function fb() {
      let bb, cb;
      try {
        const sb = qb.bkpi();
        return bb = sb[0], cb = sb[1], Yb(sb[0], sb[1])
      } finally {
        qb.Svvl(bb, cb, 1)
      }
    }

    function Mb(bb) {
      let cb, sb;
      try {
        const ab = qb.I7GM(bb);
        var kb = ab[0],
          Wb = ab[1];
        if (ab[3]) throw kb = 0, Wb = 0, Eb(ab[2]);
        return cb = kb, sb = Wb, Yb(kb, Wb)
      } finally {
        qb.Svvl(cb, sb, 1)
      }
    }

    function Xb() {
      return qb.FIyR() >>> 0
    }

    function nb() {
      let bb, cb;
      try {
        const sb = qb.H5qB();
        return bb = sb[0], cb = sb[1], Yb(sb[0], sb[1])
      } finally {
        qb.Svvl(bb, cb, 1)
      }
    }

    function mb(bb, cb) {
      let sb, kb;
      try {
        const Tb = Db(bb, qb.pYUd),
          Ub = db,
          Ib = Pb(cb, qb.pYUd),
          Hb = db,
          fb = qb.z43B(Tb, Ub, Ib, Hb);
        var Wb = fb[0],
          ab = fb[1];
        if (fb[3]) throw Wb = 0, ab = 0, Eb(fb[2]);
        return sb = Wb, kb = ab, Yb(Wb, ab)
      } finally {
        qb.Svvl(sb, kb, 1)
      }
    }

    function lb(bb) {
      let cb, sb;
      try {
        const ab = qb.Htbx(Cb(bb));
        var kb = ab[0],
          Wb = ab[1];
        if (ab[3]) throw kb = 0, Wb = 0, Eb(ab[2]);
        return cb = kb, sb = Wb, Yb(kb, Wb)
      } finally {
        qb.Svvl(cb, sb, 1)
      }
    }

    function Qb() {
      return {
        __proto__: null,
        aUB2: {
          __proto__: null,
          lZd6: function(bb, cb) {
            return Cb(Error(Yb(bb, cb)))
          },
          kt38: function(bb) {
            return null === Bb(bb)
          },
          EtBj: function(bb) {
            return "string" === typeof Bb(bb)
          },
          GcNp: function(bb, cb) {
            const sb = Bb(cb),
              kb = "string" === typeof sb ? sb : void 0;
            var Wb, ab = void 0 === (Wb = kb) || null === Wb ? 0 : function(bb, cb, sb) {
                if (void 0 === sb) {
                  const sb = Kb.encode(bb),
                    kb = cb(sb.length, 1) >>> 0;
                  return gb().subarray(kb, kb + sb.length).set(sb), db = sb.length, kb
                }
                let kb = bb.length,
                  Wb = cb(kb, 1) >>> 0;
                const ab = gb();
                let Tb = 0;
                for (; Tb < kb; Tb++) {
                  const cb = bb.charCodeAt(Tb);
                  if (cb > 127) break;
                  ab[Wb + Tb] = cb
                }
                if (Tb !== kb) {
                  0 !== Tb && (bb = bb.slice(Tb)), Wb = sb(Wb, kb, kb = Tb + 3 * bb.length, 1) >>> 0;
                  const cb = gb().subarray(Wb + Tb, Wb + kb);
                  Tb += Kb.encodeInto(bb, cb).written, Wb = sb(Wb, kb, Tb, 1) >>> 0
                }
                return db = Tb, Wb
              }(kb, qb.pYUd, qb.lEKE),
              Tb = db;
            ub().setInt32(bb + 4, Tb, !0), ub().setInt32(bb + 0, ab, !0)
          },
          XbpR: function(bb, cb) {
            throw new Error(Yb(bb, cb))
          },
          I0Ts: function(bb, cb) {
            return Bb(bb).charCodeAt(cb >>> 0)
          },
          tURV: function(bb, cb) {
            console.error(Yb(bb, cb))
          },
          UUGi: function(bb) {
            return Bb(bb).length
          },
          hAMp: function(bb, cb) {
            return Cb(Yb(bb, cb))
          },
          iWWD: function(bb) {
            Eb(bb)
          }
        }
      }
    }
    Symbol.dispose && (Wb.prototype[Symbol.dispose] = Wb.prototype.free);
    const eb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => qb.f3Cz(bb, 1)));

    function Cb(bb) {
      yb === tb.length && tb.push(tb.length + 1);
      const cb = yb;
      return yb = tb[cb], tb[cb] = bb, cb
    }

    function Nb(bb, cb) {
      bb >>>= 0;
      const sb = ub(),
        kb = [];
      for (let Wb = bb; Wb < bb + 4 * cb; Wb += 4) kb.push(Eb(sb.getUint32(Wb, !0)));
      return kb
    }

    function Vb(bb, cb) {
      return bb >>>= 0, gb().subarray(bb / 1, bb / 1 + cb)
    }
    let Lb = null;

    function ub() {
      return (null === Lb || !0 === Lb.buffer.detached || void 0 === Lb.buffer.detached && Lb.buffer !== qb.memory.buffer) && (Lb = new DataView(qb.memory.buffer)), Lb
    }

    function Yb(bb, cb) {
      return function(bb, cb) {
        Gb += cb, Gb >= Ob && (ib = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ib.decode(), Gb = cb);
        return ib.decode(gb().subarray(bb, bb + cb))
      }(bb >>> 0, cb)
    }
    let hb = null;
    let Jb = null;

    function gb() {
      return null !== Jb && 0 !== Jb.byteLength || (Jb = new Uint8Array(qb.memory.buffer)), Jb
    }

    function Bb(bb) {
      return tb[bb]
    }
    let tb = new Array(1024).fill(void 0);
    tb.push(void 0, null, !0, !1);
    let yb = tb.length;

    function Pb(bb, cb) {
      const sb = cb(4 * bb.length, 4) >>> 0;
      return (null !== hb && 0 !== hb.byteLength || (hb = new Uint32Array(qb.memory.buffer)), hb).set(bb, sb / 4), db = bb.length, sb
    }

    function Db(bb, cb) {
      const sb = cb(4 * bb.length, 4) >>> 0,
        kb = ub();
      for (let Wb = 0; Wb < bb.length; Wb++) kb.setUint32(sb + 4 * Wb, Cb(bb[Wb]), !0);
      return db = bb.length, sb
    }

    function Eb(bb) {
      const cb = Bb(bb);
      return function(bb) {
        bb < 1028 || (tb[bb] = yb, yb = bb)
      }(bb), cb
    }
    let ib = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ib.decode();
    const Ob = 2146435072;
    let Gb = 0;
    const Kb = new TextEncoder;
    "encodeInto" in Kb || (Kb.encodeInto = function(bb, cb) {
      const sb = Kb.encode(bb);
      return cb.set(sb), {
        read: bb.length,
        written: sb.length
      }
    });
    let Zb, zb, qb, db = 0;

    function Ab(bb, cb) {
      return zb = bb, qb = bb.exports, Zb = cb, Lb = null, hb = null, Jb = null, qb.zT61(), qb
    }

    function wb(bb) {
      if (void 0 !== qb) return qb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const cb = Qb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return Ab(new WebAssembly.Instance(bb, cb), bb)
    }
    async function rb(bb) {
      if (void 0 !== qb) return qb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const cb = Qb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: sb,
        module: kb
      } = await async function(bb, cb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, cb)
          } catch (sb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw sb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", sb)
          }
          const kb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(kb, cb)
        } {
          const sb = await WebAssembly.instantiate(bb, cb);
          return sb instanceof WebAssembly.Instance ? {
            instance: sb,
            module: bb
          } : sb
        }
      }(await bb, cb);
      return Ab(sb, kb)
    }
    var ob = sb(3505),
      Sb = sb(6285);
    class Rb extends Error {
      stage;
      constructor(bb, cb) {
        super((0, ob.x)(bb, cb), {
          cause: cb
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = bb
      }
    }
    let vb = null,
      Fb = null;

    function xb() {
      return vb ? Promise.resolve(vb) : (Fb || (Fb = async function() {
        let bb;
        try {
          bb = await (0, ob.A)(new sb.U(sb(6293)), (0, Sb.d)("bloxd_wasm_shader_pack"))
        } catch (cb) {
          throw new Rb((0, ob.E)(cb), cb)
        }
        try {
          await rb({
            module_or_path: bb
          })
        } catch (cb) {
          throw new Rb("instantiate", cb)
        }
        return vb = kb, vb
      }(), Fb.then(void 0, (() => {
        Fb = null
      }))), Fb)
    }
    var jb = sb(6309);

    function pb(bb) {
      let [cb, sb, kb, Wb] = bb;
      const ab = {
        file: cb,
        line: sb,
        message: kb
      };
      return Wb && (ab.variants = Wb.map(jb.e)), ab
    }

    function bc(bb) {
      return JSON.parse(bb).map(pb)
    }

    function cc(bb, cb) {
      if (!Number.isInteger(bb) || bb < 0 || bb > 4294967295) throw new Error(`${cb} ${bb} is not a whole number from 0 to 4294967295`);
      return bb
    }

    function sc(bb) {
      return [bb.named.map((bb => bb.name)), Uint32Array.from(bb.named, (bb => cc(bb.id, "Texture ID")))]
    }
    const kc = new WeakMap;
    const Wc = new WeakMap,
      ac = new WeakSet;

    function Tc(bb, cb) {
      if (ac.has(bb)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return cb()
      } catch (sb) {
        throw sb instanceof WebAssembly.RuntimeError && ac.add(bb), sb
      }
    }

    function Uc(bb) {
      let cb = Wc.get(bb);
      if (!cb) {
        let sb, kb;
        cb = {
          N9: (cb, sb) => Tc(bb, (() => function(bb, cb, sb) {
            const kb = bb.N9(cb.map((bb => bb.path)), cb.map((bb => bb.source)), ...sc(sb), sb.aliases.map((bb => bb.name)), sb.aliases.map((bb => bb.texture)), sb.aliases.map((bb => bb.kind)));
            let Wb = !1;
            try {
              const bb = kb.validationModuleCodes,
                cb = Array.from(kb.validationModuleKeys, ((cb, sb) => ({
                  key: (0, jb.e)(cb),
                  code: bb[sb]
                }))),
                sb = {
                  errors: bc(kb.errorsJson),
                  offInStrict: bc(kb.offInStrictJson),
                  variants: (0, jb.c)(kb),
                  validationModules: cb,
                  features: kb.features
                };
              return cb.forEach(((bb, cb) => {
                kc.set(bb, {
                  pack: kb,
                  index: cb
                })
              })), Wb = cb.length > 0, sb
            } finally {
              Wb || kb.free()
            }
          }(bb, cb, sb))),
          mapValidationMessage: (cb, sb) => {
            const kb = kc.get(cb);
            if (!kb) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return pb(JSON.parse(Tc(bb, (() => kb.pack.mapValidationMessage(kb.index, sb.lineNum, sb.linePos, sb.message, sb.type)))))
          },
          Nsb: cb => Tc(bb, (() => function(bb, cb) {
            const sb = new Int32Array(cb.length),
              kb = [];
            return cb.forEach(((bb, cb) => {
              sb[cb] = bb.variants ? bb.variants.length : -1;
              for (const sb of bb.variants ?? []) kb.push((0, jb.d)(sb))
            })), bc(bb.Nsb(cb.map((bb => bb.file)), Uint32Array.from(cb, (bb => cc(bb.line, "Diagnostic line"))), cb.map((bb => bb.message)), sb, Uint8Array.from(kb)))
          }(bb, cb))),
          lY: cb => Tc(bb, (() => bb.lY(...sc(cb)))),
          get SHADER_PACK_HEADER_VERSION() {
            return sb ??= Tc(bb, (() => bb.dkb())), sb
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return kb ??= Tc(bb, (() => {
              const cb = bb.Zkb();
              return bb.Kkb().map(((bb, sb) => ({
                path: bb,
                source: cb[sb]
              })))
            })), kb
          },
          Akb: cb => Tc(bb, (() => bb.Akb(cb))),
          resolveHeader: cb => Tc(bb, (() => bb.qkb((0, jb.d)(cb)))),
          zkb: () => Tc(bb, (() => bb.zkb()))
        }, Wc.set(bb, cb)
      }
      return cb
    }
    var Ic = sb(2982),
      Hc = sb(6301);
    const fc = "bloxdShaderPackWasmFailureReported";
    let Mc = null;

    function Xc() {
      return Mc ??= async function() {
        if ("undefined" === typeof WebAssembly) return nc("unsupported", "This browser has no WebAssembly"), null;
        const bb = (0, Hc.loadShaderPackTextures)().then((() => !0), (bb => (console.error("Could not load the shader pack textures, so shader packs can't run", bb), !1)));
        try {
          const cb = await async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb;
            return Uc(await bb())
          }();
          return await bb ? cb : null
        } catch (cb) {
          const bb = cb instanceof Error ? cb.message : String(cb);
          return nc(Ic.b[cb instanceof Rb ? cb.stage : "instantiate"], bb), null
        }
      }(), Mc
    }

    function nc(bb, cb) {
      (0, Ic.f)(fc, `Shader pack wasm ${bb}, so shader packs can't run: ${cb}`, cb, `shader_pack_${bb}`)
    }
  },
  6293: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/bloxd_wasm_shader_pack_bg.e0c3446a5716409e6a9d.wasm"
  },
  6285: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(3505);
    const Wb = {
      bloxd_wasm: () => "f2deac3a95fa77a1cc5890e21cb7e030da96c92da9c75cfa932f9a05cc40aedf",
      bloxd_wasm_client: () => "c6edcc46054cb735afeff08b33217275937707f8ac70cb8b5c7fe62e431251e6",
      bloxd_wasm_workers: () => "ee974f129bda12a85ed082f9b65c9090670a876bf96b379c144444c65ae2556f",
      bloxd_wasm_models: () => "be9aa9cb71680943564eddd1ec021aeec179278909b015f5d2a33e60342d2293",
      bloxd_wasm_webgpu: () => "1222801256cc2a9e528e331282389fe7d62a604e5a30a57b7e6ca38c959a97ce",
      bloxd_wasm_webgl: () => "a247bd9c10bbe2122d8318fff093620ecc23a8410aefd142dee1eb8008d469d7",
      bloxd_wasm_webgl1: () => "0cd01e4687f9eeba42a0db9058b3cf081f0505bd121d0557c726f14a96fb53d3",
      bloxd_wasm_replay: () => "f83c21ccc0c7a81aefe9fb3e9a587eed0f5383826de96ef3a2a1c8e928043141",
      bloxd_wasm_recorder: () => "277aa1b73dae5d8884eae1750f1cf9d8f869748ec3475a6969370783baa9a02b",
      bloxd_wasm_anim: () => "f46cab251d1e83f32e96bf21fb33222f8a75cffb040d22ef03fa834808ad9e4a",
      bloxd_wasm_textures: () => "907026c21e1eb3ae09c055455f18b265720f79b678cb47985a1937fd2ee774bc",
      bloxd_wasm_shader_pack: () => "0e34d623eecc459030b0abc5924b121a8566443bf7626c416308af84f6e66a00"
    };
    var ab = sb(4425);

    function Tb(bb) {
      const cb = Object.prototype.hasOwnProperty.call(Wb, bb) ? Wb[bb]() : void 0;
      if (void 0 !== cb) return {
        sha256: cb,
        onMismatch: ab.u
      };
      throw new kb.j(`${bb} has no release digest, so this build refuses it`)
    }
  },
  6309: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Vb,
      c: () => Lb,
      d: () => Cb,
      e: () => eb
    });
    var kb = sb(6312);
    const Wb = 6,
      ab = 3,
      Tb = 1,
      Ub = 2,
      Ib = 4,
      Hb = 8,
      fb = 16,
      Mb = 32,
      Xb = 64,
      nb = 128,
      mb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function lb(bb) {
      if (!bb) return 0;
      const cb = mb.indexOf(bb);
      if (cb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return cb
    }

    function Qb(bb) {
      if (0 === bb) return null;
      const cb = mb[bb];
      if (void 0 === cb) throw new Error(`${bb} is not a shader pack hook function id`);
      return cb
    }

    function eb(bb) {
      const cb = kb.b.length;
      return {
        strict: bb >= cb,
        program: kb.b[bb % cb]
      }
    }

    function Cb(bb) {
      return Number(bb.strict) * kb.b.length + kb.b.indexOf(bb.program)
    }

    function Nb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Vb(bb) {
      const cb = {
        variantFlags: new Uint8Array(Wb),
        hooks: new Uint8Array(Wb * ab),
        moduleCodes: Array(Wb).fill(""),
        reads: Array(2 * Wb).fill("")
      };
      for (const sb of bb) {
        const bb = Cb(sb.key),
          kb = (bb, cb) => null === sb.hooks.surface || sb.reads.fragment.includes(bb) ? 0 : cb;
        cb.variantFlags[bb] = (sb.sceneDepth ? Tb : 0) | (sb.movesVertices ? Ub : 0) | (sb.sunShadow ? Ib : 0) | (sb.airShadow ? Hb : 0) | (sb.discards ? fb : 0) | kb("localPosition", Mb) | kb("enchantSpeed", Xb) | kb("enchantTier", nb), cb.hooks[bb * ab] = lb(sb.hooks.vertex), cb.hooks[bb * ab + 1] = lb(sb.hooks.surface), cb.hooks[bb * ab + 2] = lb(sb.hooks.light), cb.moduleCodes[bb] = sb.moduleCode, cb.reads[2 * bb] = sb.reads.vertex.join(" "), cb.reads[2 * bb + 1] = sb.reads.fragment.join(" ")
      }
      return cb
    }

    function Lb(bb) {
      const {
        hooks: cb,
        moduleCodes: sb,
        reads: kb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Wb) => {
        const Mb = Wb * ab;
        return {
          key: eb(Wb),
          hooks: {
            vertex: Qb(cb[Mb]),
            surface: Qb(cb[Mb + 1]),
            light: Qb(cb[Mb + 2])
          },
          moduleCode: sb[Wb],
          sceneDepth: 0 !== (bb & Tb),
          sunShadow: 0 !== (bb & Ib),
          airShadow: 0 !== (bb & Hb),
          movesVertices: 0 !== (bb & Ub),
          discards: 0 !== (bb & fb),
          reads: {
            vertex: Nb(kb[2 * Wb]),
            fragment: Nb(kb[2 * Wb + 1])
          }
        }
      }))
    }
  },
  6312: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Tb,
      f: () => Ub,
      g: () => Wb,
      k: () => ab
    });
    const kb = ["terrain", "liquid", "model"];

    function Wb() {
      const bb = [];
      for (const cb of [!1, !0])
        for (const sb of kb) bb.push({
          strict: cb,
          program: sb
        });
      return bb
    }

    function ab(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Tb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Ub(bb, cb) {
      return "off" !== cb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === cb) && !Tb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);