export const id = 132;
export const ids = [132];
export const modules = {
  6350: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      loadPageShaderPackCompiler: () => wu
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      HOb: () => Ob,
      k_: () => Gb,
      default: () => yb,
      wOb: () => Ub,
      ZOb: () => Lb,
      initSync: () => Eb,
      ya: () => Yb,
      Rhb: () => Sb,
      XOb: () => ab,
      pOb: () => Hb,
      QJ: () => wb,
      oOb: () => Zb,
      VJ: () => Xb,
      AOb: () => pb
    });
    class Ob {
      static __wrap(bb) {
        const ub = Object.create(Ob.prototype);
        return ub.__wbg_ptr = bb, Ab.register(ub, ub.__wbg_ptr, ub), ub
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ab.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Ib.r8eJ(bb, 0)
      }
      get errorsJson() {
        let bb, ub;
        try {
          const hb = Ib.Moqq(this.__wbg_ptr);
          return bb = hb[0], ub = hb[1], rb(hb[0], hb[1])
        } finally {
          Ib.MFNl(bb, ub, 1)
        }
      }
      get features() {
        const bb = Ib.Et5J(this.__wbg_ptr);
        var ub = Kb(bb[0], bb[1]);
        return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
      }
      get hooks() {
        const bb = Ib.gxts(this.__wbg_ptr);
        var ub = Wb(bb[0], bb[1]).slice();
        return Ib.MFNl(bb[0], 1 * bb[1], 1), ub
      }
      mapValidationMessage(bb, ub, hb, Bb, Ob) {
        let Gb, Ub;
        try {
          const Sb = Ib.dP1A(this.__wbg_ptr, bb, ub, hb, lb(Bb), lb(Ob));
          var Lb = Sb[0],
            Yb = Sb[1];
          if (Sb[3]) throw Lb = 0, Yb = 0, tb(Sb[2]);
          return Gb = Lb, Ub = Yb, rb(Lb, Yb)
        } finally {
          Ib.MFNl(Gb, Ub, 1)
        }
      }
      get moduleCodes() {
        const bb = Ib.DnFv(this.__wbg_ptr);
        var ub = Kb(bb[0], bb[1]);
        return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
      }
      get offInStrictJson() {
        let bb, ub;
        try {
          const hb = Ib.Hgwj(this.__wbg_ptr);
          return bb = hb[0], ub = hb[1], rb(hb[0], hb[1])
        } finally {
          Ib.MFNl(bb, ub, 1)
        }
      }
      get reads() {
        const bb = Ib.i4Ah(this.__wbg_ptr);
        var ub = Kb(bb[0], bb[1]);
        return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
      }
      get validationModuleCodes() {
        const bb = Ib.tgAn(this.__wbg_ptr);
        var ub = Kb(bb[0], bb[1]);
        return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
      }
      get validationModuleKeys() {
        const bb = Ib.cHQw(this.__wbg_ptr);
        var ub = Wb(bb[0], bb[1]).slice();
        return Ib.MFNl(bb[0], 1 * bb[1], 1), ub
      }
      get variantFlags() {
        const bb = Ib.Wlli(this.__wbg_ptr);
        var ub = Wb(bb[0], bb[1]).slice();
        return Ib.MFNl(bb[0], 1 * bb[1], 1), ub
      }
    }

    function Gb(bb, ub, hb, Bb, Gb, Ub, Lb) {
      const Yb = vb(bb, Ib.Tzo2),
        Sb = Pb,
        ab = vb(ub, Ib.Tzo2),
        Hb = Pb,
        wb = vb(hb, Ib.Tzo2),
        Zb = Pb,
        Xb = ib(Bb, Ib.Tzo2),
        pb = Pb,
        ob = vb(Gb, Ib.Tzo2),
        Ab = Pb,
        lb = vb(Ub, Ib.Tzo2),
        Kb = Pb,
        Wb = vb(Lb, Ib.Tzo2),
        Cb = Pb,
        db = Ib.Jxov(Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb);
      if (db[2]) throw tb(db[1]);
      return Ob.__wrap(db[0])
    }

    function Ub() {
      const bb = Ib.Oj3k();
      var ub = Kb(bb[0], bb[1]);
      return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
    }

    function Lb() {
      const bb = Ib.ggfP();
      var ub = Kb(bb[0], bb[1]);
      return Ib.MFNl(bb[0], 4 * bb[1], 4), ub
    }

    function Yb() {
      Ib.my6Y()
    }

    function Sb(bb, ub, hb, Bb, Ob) {
      let Gb, Ub;
      try {
        const Sb = vb(bb, Ib.Tzo2),
          ab = Pb,
          Hb = ib(ub, Ib.Tzo2),
          wb = Pb,
          Zb = vb(hb, Ib.Tzo2),
          Xb = Pb,
          pb = ib(Bb, Ib.Tzo2),
          ob = Pb,
          Ab = function(bb, ub) {
            const hb = ub(1 * bb.length, 1) >>> 0;
            return Db().set(bb, hb / 1), Pb = bb.length, hb
          }(Ob, Ib.Tzo2),
          lb = Pb,
          Kb = Ib.nCv3(Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb);
        var Lb = Kb[0],
          Yb = Kb[1];
        if (Kb[3]) throw Lb = 0, Yb = 0, tb(Kb[2]);
        return Gb = Lb, Ub = Yb, rb(Lb, Yb)
      } finally {
        Ib.MFNl(Gb, Ub, 1)
      }
    }

    function ab() {
      let bb, ub;
      try {
        const hb = Ib.qF0Z();
        return bb = hb[0], ub = hb[1], rb(hb[0], hb[1])
      } finally {
        Ib.MFNl(bb, ub, 1)
      }
    }

    function Hb(bb) {
      let ub, hb;
      try {
        const Gb = Ib.fxtu(bb);
        var Bb = Gb[0],
          Ob = Gb[1];
        if (Gb[3]) throw Bb = 0, Ob = 0, tb(Gb[2]);
        return ub = Bb, hb = Ob, rb(Bb, Ob)
      } finally {
        Ib.MFNl(ub, hb, 1)
      }
    }

    function wb() {
      return Ib.zhoQ() >>> 0
    }

    function Zb() {
      let bb, ub;
      try {
        const hb = Ib.P6xR();
        return bb = hb[0], ub = hb[1], rb(hb[0], hb[1])
      } finally {
        Ib.MFNl(bb, ub, 1)
      }
    }

    function Xb(bb, ub) {
      let hb, Bb;
      try {
        const Ub = vb(bb, Ib.Tzo2),
          Lb = Pb,
          Yb = ib(ub, Ib.Tzo2),
          Sb = Pb,
          ab = Ib.WFEJ(Ub, Lb, Yb, Sb);
        var Ob = ab[0],
          Gb = ab[1];
        if (ab[3]) throw Ob = 0, Gb = 0, tb(ab[2]);
        return hb = Ob, Bb = Gb, rb(Ob, Gb)
      } finally {
        Ib.MFNl(hb, Bb, 1)
      }
    }

    function pb(bb) {
      let ub, hb;
      try {
        const Gb = Ib.lwOy(lb(bb));
        var Bb = Gb[0],
          Ob = Gb[1];
        if (Gb[3]) throw Bb = 0, Ob = 0, tb(Gb[2]);
        return ub = Bb, hb = Ob, rb(Bb, Ob)
      } finally {
        Ib.MFNl(ub, hb, 1)
      }
    }

    function ob() {
      return {
        __proto__: null,
        Dhd5: {
          __proto__: null,
          Ru0G: function(bb, ub) {
            return lb(Error(rb(bb, ub)))
          },
          Qjq2: function(bb) {
            return null === xb(bb)
          },
          jQQR: function(bb) {
            return "string" === typeof xb(bb)
          },
          iuoe: function(bb, ub) {
            const hb = xb(ub),
              Bb = "string" === typeof hb ? hb : void 0;
            var Ob, Gb = void 0 === (Ob = Bb) || null === Ob ? 0 : function(bb, ub, hb) {
                if (void 0 === hb) {
                  const hb = sb.encode(bb),
                    Bb = ub(hb.length, 1) >>> 0;
                  return Db().subarray(Bb, Bb + hb.length).set(hb), Pb = hb.length, Bb
                }
                let Bb = bb.length,
                  Ob = ub(Bb, 1) >>> 0;
                const Gb = Db();
                let Ub = 0;
                for (; Ub < Bb; Ub++) {
                  const ub = bb.charCodeAt(Ub);
                  if (ub > 127) break;
                  Gb[Ob + Ub] = ub
                }
                if (Ub !== Bb) {
                  0 !== Ub && (bb = bb.slice(Ub)), Ob = hb(Ob, Bb, Bb = Ub + 3 * bb.length, 1) >>> 0;
                  const ub = Db().subarray(Ob + Ub, Ob + Bb);
                  Ub += sb.encodeInto(bb, ub).written, Ob = hb(Ob, Bb, Ub, 1) >>> 0
                }
                return Pb = Ub, Ob
              }(Bb, Ib.Tzo2, Ib.rwCv),
              Ub = Pb;
            db().setInt32(bb + 4, Ub, !0), db().setInt32(bb + 0, Gb, !0)
          },
          HETD: function(bb, ub) {
            throw new Error(rb(bb, ub))
          },
          IR8G: function(bb, ub) {
            return xb(bb).charCodeAt(ub >>> 0)
          },
          zX6N: function(bb, ub) {
            console.error(rb(bb, ub))
          },
          mwaK: function(bb) {
            return xb(bb).length
          },
          gO8m: function(bb, ub) {
            return lb(rb(bb, ub))
          },
          oVe8: function(bb) {
            tb(bb)
          }
        }
      }
    }
    Symbol.dispose && (Ob.prototype[Symbol.dispose] = Ob.prototype.free);
    const Ab = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => Ib.r8eJ(bb, 1)));

    function lb(bb) {
      gb === zb.length && zb.push(zb.length + 1);
      const ub = gb;
      return gb = zb[ub], zb[ub] = bb, ub
    }

    function Kb(bb, ub) {
      bb >>>= 0;
      const hb = db(),
        Bb = [];
      for (let Ob = bb; Ob < bb + 4 * ub; Ob += 4) Bb.push(tb(hb.getUint32(Ob, !0)));
      return Bb
    }

    function Wb(bb, ub) {
      return bb >>>= 0, Db().subarray(bb / 1, bb / 1 + ub)
    }
    let Cb = null;

    function db() {
      return (null === Cb || !0 === Cb.buffer.detached || void 0 === Cb.buffer.detached && Cb.buffer !== Ib.memory.buffer) && (Cb = new DataView(Ib.memory.buffer)), Cb
    }

    function rb(bb, ub) {
      return function(bb, ub) {
        Nb += ub, Nb >= eb && (Jb = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Jb.decode(), Nb = ub);
        return Jb.decode(Db().subarray(bb, bb + ub))
      }(bb >>> 0, ub)
    }
    let jb = null;
    let nb = null;

    function Db() {
      return null !== nb && 0 !== nb.byteLength || (nb = new Uint8Array(Ib.memory.buffer)), nb
    }

    function xb(bb) {
      return zb[bb]
    }
    let zb = new Array(1024).fill(void 0);
    zb.push(void 0, null, !0, !1);
    let gb = zb.length;

    function ib(bb, ub) {
      const hb = ub(4 * bb.length, 4) >>> 0;
      return (null !== jb && 0 !== jb.byteLength || (jb = new Uint32Array(Ib.memory.buffer)), jb).set(bb, hb / 4), Pb = bb.length, hb
    }

    function vb(bb, ub) {
      const hb = ub(4 * bb.length, 4) >>> 0,
        Bb = db();
      for (let Ob = 0; Ob < bb.length; Ob++) Bb.setUint32(hb + 4 * Ob, lb(bb[Ob]), !0);
      return Pb = bb.length, hb
    }

    function tb(bb) {
      const ub = xb(bb);
      return function(bb) {
        bb < 1028 || (zb[bb] = gb, gb = bb)
      }(bb), ub
    }
    let Jb = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Jb.decode();
    const eb = 2146435072;
    let Nb = 0;
    const sb = new TextEncoder;
    "encodeInto" in sb || (sb.encodeInto = function(bb, ub) {
      const hb = sb.encode(bb);
      return ub.set(hb), {
        read: bb.length,
        written: hb.length
      }
    });
    let Mb, mb, Ib, Pb = 0;

    function qb(bb, ub) {
      return mb = bb, Ib = bb.exports, Mb = ub, Cb = null, jb = null, nb = null, Ib.ZcZg(), Ib
    }

    function Eb(bb) {
      if (void 0 !== Ib) return Ib;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ub = ob();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return qb(new WebAssembly.Instance(bb, ub), bb)
    }
    async function yb(bb) {
      if (void 0 !== Ib) return Ib;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ub = ob();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: hb,
        module: Bb
      } = await async function(bb, ub) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, ub)
          } catch (hb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw hb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", hb)
          }
          const Bb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(Bb, ub)
        } {
          const hb = await WebAssembly.instantiate(bb, ub);
          return hb instanceof WebAssembly.Instance ? {
            instance: hb,
            module: bb
          } : hb
        }
      }(await bb, ub);
      return qb(hb, Bb)
    }
    var Vb = hb(2688),
      Fb = hb(6358);
    class fb extends Error {
      stage;
      constructor(bb, ub) {
        super((0, Vb.A)(bb, ub), {
          cause: ub
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = bb
      }
    }
    let kb = null,
      Tb = null;

    function cb() {
      return kb ? Promise.resolve(kb) : (Tb || (Tb = async function() {
        let bb;
        try {
          bb = await (0, Vb.C)(new hb.U(hb(6363)), (0, Fb.d)("bloxd_wasm_shader_pack"))
        } catch (ub) {
          throw new fb((0, Vb.K)(ub), ub)
        }
        try {
          await yb({
            module_or_path: bb
          })
        } catch (ub) {
          throw new fb("instantiate", ub)
        }
        return kb = Bb, kb
      }(), Tb.then(void 0, (() => {
        Tb = null
      }))), Tb)
    }
    var Qb = hb(6367);

    function Rb(bb) {
      let [ub, hb, Bb, Ob] = bb;
      const Gb = {
        file: ub,
        line: hb,
        message: Bb
      };
      return Ob && (Gb.variants = Ob.map(Qb.m)), Gb
    }

    function bu(bb) {
      return JSON.parse(bb).map(Rb)
    }

    function uu(bb, ub) {
      if (!Number.isInteger(bb) || bb < 0 || bb > 4294967295) throw new Error(`${ub} ${bb} is not a whole number from 0 to 4294967295`);
      return bb
    }

    function hu(bb) {
      return [bb.named.map((bb => bb.name)), Uint32Array.from(bb.named, (bb => uu(bb.id, "Texture ID")))]
    }
    const Bu = new WeakMap;
    const Ou = new WeakMap,
      Gu = new WeakSet;

    function Uu(bb, ub) {
      if (Gu.has(bb)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return ub()
      } catch (hb) {
        throw hb instanceof WebAssembly.RuntimeError && Gu.add(bb), hb
      }
    }

    function Lu(bb) {
      let ub = Ou.get(bb);
      if (!ub) {
        let hb, Bb;
        ub = {
          k_: (ub, hb) => Uu(bb, (() => function(bb, ub, hb) {
            const Bb = bb.k_(ub.map((bb => bb.path)), ub.map((bb => bb.source)), ...hu(hb), hb.aliases.map((bb => bb.name)), hb.aliases.map((bb => bb.texture)), hb.aliases.map((bb => bb.kind)));
            let Ob = !1;
            try {
              const bb = Bb.validationModuleCodes,
                ub = Array.from(Bb.validationModuleKeys, ((ub, hb) => ({
                  key: (0, Qb.m)(ub),
                  code: bb[hb]
                }))),
                hb = {
                  errors: bu(Bb.errorsJson),
                  offInStrict: bu(Bb.offInStrictJson),
                  variants: (0, Qb.h)(Bb),
                  validationModules: ub,
                  features: Bb.features
                };
              return ub.forEach(((bb, ub) => {
                Bu.set(bb, {
                  pack: Bb,
                  index: ub
                })
              })), Ob = ub.length > 0, hb
            } finally {
              Ob || Bb.free()
            }
          }(bb, ub, hb))),
          mapValidationMessage: (ub, hb) => {
            const Bb = Bu.get(ub);
            if (!Bb) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return Rb(JSON.parse(Uu(bb, (() => Bb.pack.mapValidationMessage(Bb.index, hb.lineNum, hb.linePos, hb.message, hb.type)))))
          },
          Rhb: ub => Uu(bb, (() => function(bb, ub) {
            const hb = new Int32Array(ub.length),
              Bb = [];
            return ub.forEach(((bb, ub) => {
              hb[ub] = bb.variants ? bb.variants.length : -1;
              for (const hb of bb.variants ?? []) Bb.push((0, Qb.l)(hb))
            })), bu(bb.Rhb(ub.map((bb => bb.file)), Uint32Array.from(ub, (bb => uu(bb.line, "Diagnostic line"))), ub.map((bb => bb.message)), hb, Uint8Array.from(Bb)))
          }(bb, ub))),
          VJ: ub => Uu(bb, (() => bb.VJ(...hu(ub)))),
          get SHADER_PACK_HEADER_VERSION() {
            return hb ??= Uu(bb, (() => bb.oOb())), hb
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Bb ??= Uu(bb, (() => {
              const ub = bb.ZOb();
              return bb.wOb().map(((bb, hb) => ({
                path: bb,
                source: ub[hb]
              })))
            })), Bb
          },
          AOb: ub => Uu(bb, (() => bb.AOb(ub))),
          resolveHeader: ub => Uu(bb, (() => bb.pOb((0, Qb.l)(ub)))),
          XOb: () => Uu(bb, (() => bb.XOb()))
        }, Ou.set(bb, ub)
      }
      return ub
    }
    var Yu = hb(3020),
      Su = hb(6365);
    const au = "bloxdShaderPackWasmFailureReported";
    let Hu = null;

    function wu() {
      return Hu ??= async function() {
        if ("undefined" === typeof WebAssembly) return Zu("unsupported", "This browser has no WebAssembly"), null;
        const bb = (0, Su.loadShaderPackTextures)().then((() => !0), (bb => (console.error("Could not load the shader pack textures, so shader packs can't run", bb), !1)));
        try {
          const ub = await async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cb;
            return Lu(await bb())
          }();
          return await bb ? ub : null
        } catch (ub) {
          const bb = ub instanceof Error ? ub.message : String(ub);
          return Zu(Yu.d[ub instanceof fb ? ub.stage : "instantiate"], bb), null
        }
      }(), Hu
    }

    function Zu(bb, ub) {
      (0, Yu.l)(au, `Shader pack wasm ${bb}, so shader packs can't run: ${ub}`, ub, `shader_pack_${bb}`)
    }
  },
  6363: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/bloxd_wasm_shader_pack_bg.2cc09f413df7fcaba0cc.wasm"
  },
  6358: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(2688);
    const Ob = {
      bloxd_wasm: () => "3b91fa895928d8c20ebf400bda89ab044ad7bc6b888817ddf1222f7c57feeb9c",
      bloxd_wasm_client: () => "f8fce5947f2faa12e1ab09590f42ab320ab7503a3faa2b92511d0c8b5961045e",
      bloxd_wasm_workers: () => "97913e9056cda526c2dc8ccbbbd9e745eb1ac954c2c44cba6c7873fc1747a23c",
      bloxd_wasm_models: () => "c8d7121eb692beab251440772c33579d323be2e080195d116336055405d68c6b",
      bloxd_wasm_webgpu: () => "19061547ec948fcba5a47bac197b276e7d2b5e59be20d2aaff03a98029648a35",
      bloxd_wasm_webgl: () => "368a1de884ceea9044ed27e803110479e191485e8237c1d5316b43218c30116d",
      bloxd_wasm_webgl1: () => "5a9131e0f012a1be4913bc2fcccdbb8d2fa9e6060e384fce80f6463266a8c00a",
      bloxd_wasm_replay: () => "2682ec56a7ca06252a5e84c7b45e4853cfe028e5944d11f804b256bb15d9e0af",
      bloxd_wasm_recorder: () => "4b50bdb382eedb09ed05f5762ed2c0dc0736e9ab3343761cacc34ca07ef84644",
      bloxd_wasm_anim: () => "e9760697ea51a31a4ccfa90e459f7ee2ef0e9d3e3212f5f9bdc92eccc7a75ce1",
      bloxd_wasm_textures: () => "435e32982ee604bfb0a866d92a90abb139a38b2cd93d29123f4edbda32e26fc0",
      bloxd_wasm_shader_pack: () => "752c76e3c73a60bbf217aaaf2e581c1eeace9b5713c141db27df430f66cfe32d"
    };
    var Gb = hb(4466);

    function Ub(bb) {
      const ub = Object.prototype.hasOwnProperty.call(Ob, bb) ? Ob[bb]() : void 0;
      if (void 0 !== ub) return {
        sha256: ub,
        onMismatch: Gb.v
      };
      throw new Bb.i(`${bb} has no release digest, so this build refuses it`)
    }
  },
  6367: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Wb,
      h: () => Cb,
      l: () => lb,
      m: () => Ab
    });
    var Bb = hb(6375);
    const Ob = 6,
      Gb = 3,
      Ub = 1,
      Lb = 2,
      Yb = 4,
      Sb = 8,
      ab = 16,
      Hb = 32,
      wb = 64,
      Zb = 128,
      Xb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function pb(bb) {
      if (!bb) return 0;
      const ub = Xb.indexOf(bb);
      if (ub <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return ub
    }

    function ob(bb) {
      if (0 === bb) return null;
      const ub = Xb[bb];
      if (void 0 === ub) throw new Error(`${bb} is not a shader pack hook function id`);
      return ub
    }

    function Ab(bb) {
      const ub = Bb.b.length;
      return {
        strict: bb >= ub,
        program: Bb.b[bb % ub]
      }
    }

    function lb(bb) {
      return Number(bb.strict) * Bb.b.length + Bb.b.indexOf(bb.program)
    }

    function Kb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function Wb(bb) {
      const ub = {
        variantFlags: new Uint8Array(Ob),
        hooks: new Uint8Array(Ob * Gb),
        moduleCodes: Array(Ob).fill(""),
        reads: Array(2 * Ob).fill("")
      };
      for (const hb of bb) {
        const bb = lb(hb.key),
          Bb = (bb, ub) => null === hb.hooks.surface || hb.reads.fragment.includes(bb) ? 0 : ub;
        ub.variantFlags[bb] = (hb.sceneDepth ? Ub : 0) | (hb.movesVertices ? Lb : 0) | (hb.sunShadow ? Yb : 0) | (hb.airShadow ? Sb : 0) | (hb.discards ? ab : 0) | Bb("localPosition", Hb) | Bb("enchantSpeed", wb) | Bb("enchantTier", Zb), ub.hooks[bb * Gb] = pb(hb.hooks.vertex), ub.hooks[bb * Gb + 1] = pb(hb.hooks.surface), ub.hooks[bb * Gb + 2] = pb(hb.hooks.light), ub.moduleCodes[bb] = hb.moduleCode, ub.reads[2 * bb] = hb.reads.vertex.join(" "), ub.reads[2 * bb + 1] = hb.reads.fragment.join(" ")
      }
      return ub
    }

    function Cb(bb) {
      const {
        hooks: ub,
        moduleCodes: hb,
        reads: Bb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Ob) => {
        const Hb = Ob * Gb;
        return {
          key: Ab(Ob),
          hooks: {
            vertex: ob(ub[Hb]),
            surface: ob(ub[Hb + 1]),
            light: ob(ub[Hb + 2])
          },
          moduleCode: hb[Ob],
          sceneDepth: 0 !== (bb & Ub),
          sunShadow: 0 !== (bb & Yb),
          airShadow: 0 !== (bb & Sb),
          movesVertices: 0 !== (bb & Lb),
          discards: 0 !== (bb & ab),
          reads: {
            vertex: Kb(Bb[2 * Ob]),
            fragment: Kb(Bb[2 * Ob + 1])
          }
        }
      }))
    }
  },
  6375: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      f: () => Ub,
      i: () => Lb,
      k: () => Ob,
      o: () => Gb
    });
    const Bb = ["terrain", "liquid", "model"];

    function Ob() {
      const bb = [];
      for (const ub of [!1, !0])
        for (const hb of Bb) bb.push({
          strict: ub,
          program: hb
        });
      return bb
    }

    function Gb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Ub(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function Lb(bb, ub) {
      return "off" !== ub && (null === bb || bb.some((bb => bb.key.strict === ("strict" === ub) && !Ub(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);