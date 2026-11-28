export const id = 157;
export const ids = [157];
export const modules = {
  7798: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadPageShaderPackCompiler: () => tw
    });
    var eb = {};
    Mb.r(eb), Mb.d(eb, {
      bVb: () => Hb,
      Xwb: () => pb,
      default: () => ib,
      wVb: () => Vb,
      MVb: () => gb,
      initSync: () => ab,
      jO: () => lb,
      FHb: () => Lb,
      eVb: () => Ib,
      HVb: () => Ob,
      eJ: () => Ub,
      pVb: () => tb,
      MJ: () => Cb,
      VVb: () => Eb
    });
    class Hb {
      static __wrap(bb) {
        const wb = Object.create(Hb.prototype);
        return wb.__wbg_ptr = bb, Bb.register(wb, wb.__wbg_ptr, wb), wb
      }
      __destroy_into_raw() {
        const bb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Bb.unregister(this), bb
      }
      free() {
        const bb = this.__destroy_into_raw();
        Qb.IwNy(bb, 0)
      }
      get gVb() {
        let bb, wb;
        try {
          const Mb = Qb.WrWA(this.__wbg_ptr);
          return bb = Mb[0], wb = Mb[1], xb(Mb[0], Mb[1])
        } finally {
          Qb.ferq(bb, wb, 1)
        }
      }
      get features() {
        const bb = Qb.NaU3(this.__wbg_ptr);
        var wb = mb(bb[0], bb[1]);
        return Qb.ferq(bb[0], 4 * bb[1], 4), wb
      }
      get hooks() {
        const bb = Qb.OONZ(this.__wbg_ptr);
        var wb = hb(bb[0], bb[1]).slice();
        return Qb.ferq(bb[0], 1 * bb[1], 1), wb
      }
      mapValidationMessage(bb, wb, Mb, eb, Hb) {
        let pb, Vb;
        try {
          const Lb = Qb.Ey3v(this.__wbg_ptr, bb, wb, Mb, sb(eb), sb(Hb));
          var gb = Lb[0],
            lb = Lb[1];
          if (Lb[3]) throw gb = 0, lb = 0, fb(Lb[2]);
          return pb = gb, Vb = lb, xb(gb, lb)
        } finally {
          Qb.ferq(pb, Vb, 1)
        }
      }
      get moduleCodes() {
        const bb = Qb.pg9N(this.__wbg_ptr);
        var wb = mb(bb[0], bb[1]);
        return Qb.ferq(bb[0], 4 * bb[1], 4), wb
      }
      get lVb() {
        let bb, wb;
        try {
          const Mb = Qb.p0GL(this.__wbg_ptr);
          return bb = Mb[0], wb = Mb[1], xb(Mb[0], Mb[1])
        } finally {
          Qb.ferq(bb, wb, 1)
        }
      }
      get reads() {
        const bb = Qb.V8PM(this.__wbg_ptr);
        var wb = mb(bb[0], bb[1]);
        return Qb.ferq(bb[0], 4 * bb[1], 4), wb
      }
      get validationModuleCodes() {
        const bb = Qb.uhjV(this.__wbg_ptr);
        var wb = mb(bb[0], bb[1]);
        return Qb.ferq(bb[0], 4 * bb[1], 4), wb
      }
      get validationModuleKeys() {
        const bb = Qb.bKrn(this.__wbg_ptr);
        var wb = hb(bb[0], bb[1]).slice();
        return Qb.ferq(bb[0], 1 * bb[1], 1), wb
      }
      get variantFlags() {
        const bb = Qb.ieR8(this.__wbg_ptr);
        var wb = hb(bb[0], bb[1]).slice();
        return Qb.ferq(bb[0], 1 * bb[1], 1), wb
      }
    }

    function pb(bb, wb, Mb, eb, pb, Vb, gb) {
      const lb = Zb(bb, Qb.Rgnb),
        Lb = Gb,
        Ib = Zb(wb, Qb.Rgnb),
        Ob = Gb,
        Ub = Zb(Mb, Qb.Rgnb),
        tb = Gb,
        Cb = Yb(eb, Qb.Rgnb),
        Eb = Gb,
        Fb = Zb(pb, Qb.Rgnb),
        Bb = Gb,
        sb = Zb(Vb, Qb.Rgnb),
        mb = Gb,
        hb = Zb(gb, Qb.Rgnb),
        zb = Gb,
        Xb = Qb.gCei(lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb);
      if (Xb[2]) throw fb(Xb[1]);
      return Hb.__wrap(Xb[0])
    }

    function Vb() {
      const bb = Qb.CS1y();
      var wb = mb(bb[0], bb[1]);
      return Qb.ferq(bb[0], 4 * bb[1], 4), wb
    }

    function gb() {
      const bb = Qb.wWht();
      var wb = mb(bb[0], bb[1]);
      return Qb.ferq(bb[0], 4 * bb[1], 4), wb
    }

    function lb() {
      Qb.sr8s()
    }

    function Lb(bb, wb, Mb, eb, Hb) {
      let pb, Vb;
      try {
        const Lb = Zb(bb, Qb.Rgnb),
          Ib = Gb,
          Ob = Yb(wb, Qb.Rgnb),
          Ub = Gb,
          tb = Zb(Mb, Qb.Rgnb),
          Cb = Gb,
          Eb = Yb(eb, Qb.Rgnb),
          Fb = Gb,
          Bb = function(bb, wb) {
            const Mb = wb(1 * bb.length, 1) >>> 0;
            return rb().set(bb, Mb / 1), Gb = bb.length, Mb
          }(Hb, Qb.Rgnb),
          sb = Gb,
          mb = Qb.OO3O(Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb);
        var gb = mb[0],
          lb = mb[1];
        if (mb[3]) throw gb = 0, lb = 0, fb(mb[2]);
        return pb = gb, Vb = lb, xb(gb, lb)
      } finally {
        Qb.ferq(pb, Vb, 1)
      }
    }

    function Ib() {
      let bb, wb;
      try {
        const Mb = Qb.VFy9();
        return bb = Mb[0], wb = Mb[1], xb(Mb[0], Mb[1])
      } finally {
        Qb.ferq(bb, wb, 1)
      }
    }

    function Ob(bb) {
      let wb, Mb;
      try {
        const pb = Qb.HgEV(bb);
        var eb = pb[0],
          Hb = pb[1];
        if (pb[3]) throw eb = 0, Hb = 0, fb(pb[2]);
        return wb = eb, Mb = Hb, xb(eb, Hb)
      } finally {
        Qb.ferq(wb, Mb, 1)
      }
    }

    function Ub() {
      return Qb.hG6W() >>> 0
    }

    function tb() {
      let bb, wb;
      try {
        const Mb = Qb.uws2();
        return bb = Mb[0], wb = Mb[1], xb(Mb[0], Mb[1])
      } finally {
        Qb.ferq(bb, wb, 1)
      }
    }

    function Cb(bb, wb) {
      let Mb, eb;
      try {
        const Vb = Zb(bb, Qb.Rgnb),
          gb = Gb,
          lb = Yb(wb, Qb.Rgnb),
          Lb = Gb,
          Ib = Qb.Kam3(Vb, gb, lb, Lb);
        var Hb = Ib[0],
          pb = Ib[1];
        if (Ib[3]) throw Hb = 0, pb = 0, fb(Ib[2]);
        return Mb = Hb, eb = pb, xb(Hb, pb)
      } finally {
        Qb.ferq(Mb, eb, 1)
      }
    }

    function Eb(bb) {
      let wb, Mb;
      try {
        const pb = Qb.sk9e(sb(bb));
        var eb = pb[0],
          Hb = pb[1];
        if (pb[3]) throw eb = 0, Hb = 0, fb(pb[2]);
        return wb = eb, Mb = Hb, xb(eb, Hb)
      } finally {
        Qb.ferq(wb, Mb, 1)
      }
    }

    function Fb() {
      return {
        __proto__: null,
        mYmI: {
          __proto__: null,
          cYhY: function(bb, wb) {
            return sb(Error(xb(bb, wb)))
          },
          E9pG: function(bb) {
            return null === Rb(bb)
          },
          xFp6: function(bb) {
            return "string" === typeof Rb(bb)
          },
          JNq9: function(bb, wb) {
            const Mb = Rb(wb),
              eb = "string" === typeof Mb ? Mb : void 0;
            var Hb, pb = void 0 === (Hb = eb) || null === Hb ? 0 : function(bb, wb, Mb) {
                if (void 0 === Mb) {
                  const Mb = Sb.encode(bb),
                    eb = wb(Mb.length, 1) >>> 0;
                  return rb().subarray(eb, eb + Mb.length).set(Mb), Gb = Mb.length, eb
                }
                let eb = bb.length,
                  Hb = wb(eb, 1) >>> 0;
                const pb = rb();
                let Vb = 0;
                for (; Vb < eb; Vb++) {
                  const wb = bb.charCodeAt(Vb);
                  if (wb > 127) break;
                  pb[Hb + Vb] = wb
                }
                if (Vb !== eb) {
                  0 !== Vb && (bb = bb.slice(Vb)), Hb = Mb(Hb, eb, eb = Vb + 3 * bb.length, 1) >>> 0;
                  const wb = rb().subarray(Hb + Vb, Hb + eb);
                  Vb += Sb.encodeInto(bb, wb).written, Hb = Mb(Hb, eb, Vb, 1) >>> 0
                }
                return Gb = Vb, Hb
              }(eb, Qb.Rgnb, Qb.Y0I6),
              Vb = Gb;
            Xb().setInt32(bb + 4, Vb, !0), Xb().setInt32(bb + 0, pb, !0)
          },
          iY5A: function(bb, wb) {
            throw new Error(xb(bb, wb))
          },
          oIc4: function(bb, wb) {
            return Rb(bb).charCodeAt(wb >>> 0)
          },
          HdTO: function(bb, wb) {
            console.error(xb(bb, wb))
          },
          fb78: function(bb) {
            return Rb(bb).length
          },
          PNFe: function(bb, wb) {
            return sb(xb(bb, wb))
          },
          pmvE: function(bb) {
            fb(bb)
          }
        }
      }
    }
    Symbol.dispose && (Hb.prototype[Symbol.dispose] = Hb.prototype.free);
    const Bb = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((bb => Qb.IwNy(bb, 1)));

    function sb(bb) {
      cb === Db.length && Db.push(Db.length + 1);
      const wb = cb;
      return cb = Db[wb], Db[wb] = bb, wb
    }

    function mb(bb, wb) {
      bb >>>= 0;
      const Mb = Xb(),
        eb = [];
      for (let Hb = bb; Hb < bb + 4 * wb; Hb += 4) eb.push(fb(Mb.getUint32(Hb, !0)));
      return eb
    }

    function hb(bb, wb) {
      return bb >>>= 0, rb().subarray(bb / 1, bb / 1 + wb)
    }
    let zb = null;

    function Xb() {
      return null !== zb && zb.buffer === Qb.memory.buffer || (zb = new DataView(Qb.memory.buffer)), zb
    }

    function xb(bb, wb) {
      return function(bb, wb) {
        Jb += wb, Jb >= Wb && (Ab = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Ab.decode(), Jb = wb);
        return Ab.decode(rb().subarray(bb, bb + wb))
      }(bb >>> 0, wb)
    }
    let jb = null;
    let Kb = null;

    function rb() {
      return null !== Kb && 0 !== Kb.byteLength || (Kb = new Uint8Array(Qb.memory.buffer)), Kb
    }

    function Rb(bb) {
      return Db[bb]
    }
    let Db = new Array(1024).fill(void 0);
    Db.push(void 0, null, !0, !1);
    let cb = Db.length;

    function Yb(bb, wb) {
      const Mb = wb(4 * bb.length, 4) >>> 0;
      return (null !== jb && 0 !== jb.byteLength || (jb = new Uint32Array(Qb.memory.buffer)), jb).set(bb, Mb / 4), Gb = bb.length, Mb
    }

    function Zb(bb, wb) {
      const Mb = wb(4 * bb.length, 4) >>> 0,
        eb = Xb();
      for (let Hb = 0; Hb < bb.length; Hb++) eb.setUint32(Mb + 4 * Hb, sb(bb[Hb]), !0);
      return Gb = bb.length, Mb
    }

    function fb(bb) {
      const wb = Rb(bb);
      return function(bb) {
        bb < 1028 || (Db[bb] = cb, cb = bb)
      }(bb), wb
    }
    let Ab = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Ab.decode();
    const Wb = 2146435072;
    let Jb = 0;
    const Sb = new TextEncoder;
    "encodeInto" in Sb || (Sb.encodeInto = function(bb, wb) {
      const Mb = Sb.encode(bb);
      return wb.set(Mb), {
        read: bb.length,
        written: Mb.length
      }
    });
    let Nb, vb, Qb, Gb = 0;

    function qb(bb, wb) {
      return vb = bb, Qb = bb.exports, Nb = wb, zb = null, jb = null, Kb = null, Qb.osWt(), Qb
    }

    function ab(bb) {
      if (void 0 !== Qb) return Qb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module: bb
      } = bb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const wb = Fb();
      bb instanceof WebAssembly.Module || (bb = new WebAssembly.Module(bb));
      return qb(new WebAssembly.Instance(bb, wb), bb)
    }
    async function ib(bb) {
      if (void 0 !== Qb) return Qb;
      void 0 !== bb && (Object.getPrototypeOf(bb) === Object.prototype ? ({
        module_or_path: bb
      } = bb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const wb = Fb();
      ("string" === typeof bb || "function" === typeof Request && bb instanceof Request || "function" === typeof URL && bb instanceof URL) && (bb = fetch(bb));
      const {
        instance: Mb,
        module: eb
      } = await async function(bb, wb) {
        if ("function" === typeof Response && bb instanceof Response) {
          if (!bb.ok) throw new Error(`failed to fetch Wasm: ${bb.status} ${bb.statusText} fetching '${bb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(bb, wb)
          } catch (Mb) {
            if (! function(bb) {
                switch (bb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(bb.type) || "application/wasm" === bb.headers.get("Content-Type")) throw Mb;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Mb)
          }
          const eb = await bb.arrayBuffer();
          return await WebAssembly.instantiate(eb, wb)
        } {
          const Mb = await WebAssembly.instantiate(bb, wb);
          return Mb instanceof WebAssembly.Instance ? {
            instance: Mb,
            module: bb
          } : Mb
        }
      }(await bb, wb);
      return qb(Mb, eb)
    }
    var ub = Mb(2471),
      db = Mb(7804);
    class Pb extends Error {
      stage;
      constructor(bb, wb) {
        super((0, ub.x)(bb, wb), {
          cause: wb
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = bb
      }
    }
    let nb = null,
      yb = null;

    function ob() {
      return nb ? Promise.resolve(nb) : (yb || (yb = async function() {
        let bb;
        try {
          bb = await (0, ub.y)(new Mb.U(Mb(7810)), (0, db.e)("bloxd_wasm_shader_pack"))
        } catch (wb) {
          throw new Pb((0, ub.E)(wb), wb)
        }
        try {
          await ib({
            module_or_path: bb
          })
        } catch (wb) {
          throw new Pb("instantiate", wb)
        }
        return nb = eb, nb
      }(), yb.then(void 0, (() => {
        yb = null
      }))), yb)
    }
    var Tb = Mb(7821);

    function kb(bb) {
      let [wb, Mb, eb, Hb] = bb;
      const pb = {
        file: wb,
        line: Mb,
        message: eb
      };
      return Hb && (pb.variants = Hb.map(Tb.n)), pb
    }

    function bw(bb) {
      return JSON.parse(bb).map(kb)
    }

    function ww(bb, wb) {
      if (!Number.isInteger(bb) || bb < 0 || bb > 4294967295) throw new Error(`${wb} ${bb} is not a whole number from 0 to 4294967295`);
      return bb
    }

    function Mw(bb) {
      return [bb.named.map((bb => bb.name)), Uint32Array.from(bb.named, (bb => ww(bb.id, "Texture ID")))]
    }
    const ew = new WeakMap;
    const Hw = new WeakMap,
      pw = new WeakSet;

    function Vw(bb, wb) {
      if (pw.has(bb)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return wb()
      } catch (Mb) {
        throw Mb instanceof WebAssembly.RuntimeError && pw.add(bb), Mb
      }
    }

    function gw(bb) {
      let wb = Hw.get(bb);
      if (!wb) {
        let Mb, eb;
        wb = {
          Xwb: (wb, Mb) => Vw(bb, (() => function(bb, wb, Mb) {
            const eb = bb.Xwb(wb.map((bb => bb.path)), wb.map((bb => bb.source)), ...Mw(Mb), Mb.aliases.map((bb => bb.name)), Mb.aliases.map((bb => bb.texture)), Mb.aliases.map((bb => bb.kind)));
            let Hb = !1;
            try {
              const bb = eb.validationModuleCodes,
                wb = Array.from(eb.validationModuleKeys, ((wb, Mb) => ({
                  key: (0, Tb.n)(wb),
                  code: bb[Mb]
                }))),
                Mb = {
                  errors: bw(eb.gVb),
                  offInStrict: bw(eb.lVb),
                  variants: (0, Tb.i)(eb),
                  validationModules: wb,
                  features: eb.features
                };
              return wb.forEach(((bb, wb) => {
                ew.set(bb, {
                  pack: eb,
                  index: wb
                })
              })), Hb = wb.length > 0, Mb
            } finally {
              Hb || eb.free()
            }
          }(bb, wb, Mb))),
          mapValidationMessage: (wb, Mb) => {
            const eb = ew.get(wb);
            if (!eb) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return kb(JSON.parse(Vw(bb, (() => eb.pack.mapValidationMessage(eb.index, Mb.lineNum, Mb.linePos, Mb.message, Mb.type)))))
          },
          FHb: wb => Vw(bb, (() => function(bb, wb) {
            const Mb = new Int32Array(wb.length),
              eb = [];
            return wb.forEach(((bb, wb) => {
              Mb[wb] = bb.variants ? bb.variants.length : -1;
              for (const Mb of bb.variants ?? []) eb.push((0, Tb.l)(Mb))
            })), bw(bb.FHb(wb.map((bb => bb.file)), Uint32Array.from(wb, (bb => ww(bb.line, "Diagnostic line"))), wb.map((bb => bb.message)), Mb, Uint8Array.from(eb)))
          }(bb, wb))),
          MJ: wb => Vw(bb, (() => bb.MJ(...Mw(wb)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Mb ??= Vw(bb, (() => bb.pVb())), Mb
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return eb ??= Vw(bb, (() => {
              const wb = bb.MVb();
              return bb.wVb().map(((bb, Mb) => ({
                path: bb,
                source: wb[Mb]
              })))
            })), eb
          },
          VVb: wb => Vw(bb, (() => bb.VVb(wb))),
          resolveHeader: wb => Vw(bb, (() => bb.HVb((0, Tb.l)(wb)))),
          eVb: () => Vw(bb, (() => bb.eVb()))
        }, Hw.set(bb, wb)
      }
      return wb
    }
    var lw = Mb(4589),
      Lw = Mb(352),
      Iw = Mb(7819);
    const Ow = "bloxdShaderPackWasmFailureReported";
    let Uw = null;

    function tw() {
      return Uw ??= async function() {
        if ("undefined" === typeof WebAssembly) return Cw("unsupported", "This browser has no WebAssembly"), null;
        const bb = (0, Iw.loadShaderPackTextures)().then((() => !0), (bb => (console.error("Could not load the shader pack textures, so shader packs can't run", bb), !1)));
        try {
          await (0, Lw.l)();
          const wb = await async function() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ob;
            return gw(await bb())
          }();
          return await bb ? wb : null
        } catch (wb) {
          const bb = wb instanceof Error ? wb.message : String(wb);
          return Cw(lw.c[wb instanceof Pb ? wb.stage : "instantiate"], bb), null
        }
      }(), Uw
    }

    function Cw(bb, wb) {
      (0, lw.g)(Ow, `Shader pack wasm ${bb}, so shader packs can't run: ${wb}`, wb, `shader_pack_${bb}`)
    }
  },
  7810: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/bloxd_wasm_shader_pack_bg.b1d69c6d09b5cb98cd5a.wasm"
  },
  7804: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(2471);
    const Hb = {
      bloxd_wasm: () => "0021d096c0b495869173e1bf089a555fc306fc598e02546bb9c216172e53332d",
      bloxd_wasm_client: () => "6a63b6c47ad21756d57227bbac24ae049881afbff210f713c0b0aeaceae2e102",
      bloxd_wasm_workers: () => "68ec8fbb485ec5b7fcde94a988fa5914ddd0a7f0de80b29453220567a879b36d",
      bloxd_wasm_models: () => "6bd85ee20b75ed8b1a8a698da23b9eff9236c4776496360982bd2c00ace99b99",
      bloxd_wasm_webgpu: () => "d8909c14a3b536315fb7502719927466cd7873d70297d564639a12b8734d8f30",
      bloxd_wasm_webgl: () => "c49c3dd2ef01f7ca5d6fe08e3373b8ab934ecbd11c01d27eab1ada606f835e3e",
      bloxd_wasm_webgl1: () => "d98f1a2e5f8bf52c5604e5bd19ba8dfbee684e74c8841277cf32d7be7bdc3226",
      bloxd_wasm_replay: () => "5a90bae27ebce9aceafb0b6ee704660127b6865c72068e5cc9c9ddbab78d8239",
      bloxd_wasm_recorder: () => "4a0b3b1fe1477637cddb48ba5d0f06c50cb40ec42c31a1b963b0e14a086c2590",
      bloxd_wasm_anim: () => "c4812501582860f01a67ad5cb5cac665ddfc865a422d1a2d38caef1ad60a0c73",
      bloxd_wasm_textures: () => "4df5cb3be0ab097262d9f7d404625e34c0cb698b3c1c16687afeb13ba867808d",
      bloxd_wasm_shader_pack: () => "ce62ad8f961659fd0f926ef62c3463ae7aefa972b86660e6c0f3e3f0bab25ee6"
    };
    var pb = Mb(5587);

    function Vb(bb) {
      const wb = Object.prototype.hasOwnProperty.call(Hb, bb) ? Hb[bb]() : void 0;
      if (void 0 !== wb) return {
        sha256: wb,
        onMismatch: pb.B
      };
      throw new eb.j(`${bb} has no release digest, so this build refuses it`)
    }
  },
  7821: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => hb,
      i: () => zb,
      l: () => sb,
      n: () => Bb
    });
    var eb = Mb(7825);
    const Hb = 6,
      pb = 3,
      Vb = 1,
      gb = 2,
      lb = 4,
      Lb = 8,
      Ib = 16,
      Ob = 32,
      Ub = 64,
      tb = 128,
      Cb = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Eb(bb) {
      if (!bb) return 0;
      const wb = Cb.indexOf(bb);
      if (wb <= 0) throw new Error(`"${bb}" is not a shader pack hook function`);
      return wb
    }

    function Fb(bb) {
      if (0 === bb) return null;
      const wb = Cb[bb];
      if (void 0 === wb) throw new Error(`${bb} is not a shader pack hook function id`);
      return wb
    }

    function Bb(bb) {
      const wb = eb.d.length;
      return {
        strict: bb >= wb,
        program: eb.d[bb % wb]
      }
    }

    function sb(bb) {
      return Number(bb.strict) * eb.d.length + eb.d.indexOf(bb.program)
    }

    function mb(bb) {
      return "" === bb ? [] : bb.split(" ")
    }

    function hb(bb) {
      const wb = {
        variantFlags: new Uint8Array(Hb),
        hooks: new Uint8Array(Hb * pb),
        moduleCodes: Array(Hb).fill(""),
        reads: Array(2 * Hb).fill("")
      };
      for (const Mb of bb) {
        const bb = sb(Mb.key),
          eb = (bb, wb) => null === Mb.hooks.surface || Mb.reads.fragment.includes(bb) ? 0 : wb;
        wb.variantFlags[bb] = (Mb.sceneDepth ? Vb : 0) | (Mb.movesVertices ? gb : 0) | (Mb.sunShadow ? lb : 0) | (Mb.airShadow ? Lb : 0) | (Mb.discards ? Ib : 0) | eb("localPosition", Ob) | eb("enchantSpeed", Ub) | eb("enchantTier", tb), wb.hooks[bb * pb] = Eb(Mb.hooks.vertex), wb.hooks[bb * pb + 1] = Eb(Mb.hooks.surface), wb.hooks[bb * pb + 2] = Eb(Mb.hooks.light), wb.moduleCodes[bb] = Mb.moduleCode, wb.reads[2 * bb] = Mb.reads.vertex.join(" "), wb.reads[2 * bb + 1] = Mb.reads.fragment.join(" ")
      }
      return wb
    }

    function zb(bb) {
      const {
        hooks: wb,
        moduleCodes: Mb,
        reads: eb
      } = bb;
      return Array.from(bb.variantFlags, ((bb, Hb) => {
        const Ob = Hb * pb;
        return {
          key: Bb(Hb),
          hooks: {
            vertex: Fb(wb[Ob]),
            surface: Fb(wb[Ob + 1]),
            light: Fb(wb[Ob + 2])
          },
          moduleCode: Mb[Hb],
          sceneDepth: 0 !== (bb & Vb),
          sunShadow: 0 !== (bb & lb),
          airShadow: 0 !== (bb & Lb),
          movesVertices: 0 !== (bb & gb),
          discards: 0 !== (bb & Ib),
          reads: {
            vertex: mb(eb[2 * Hb]),
            fragment: mb(eb[2 * Hb + 1])
          }
        }
      }))
    }
  },
  7825: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      f: () => Vb,
      i: () => gb,
      l: () => Hb,
      o: () => pb
    });
    const eb = ["terrain", "liquid", "model"];

    function Hb() {
      const bb = [];
      for (const wb of [!1, !0])
        for (const Mb of eb) bb.push({
          strict: wb,
          program: Mb
        });
      return bb
    }

    function pb(bb) {
      return `${bb.strict?"strict":"allow"}.${bb.program}`
    }

    function Vb(bb) {
      return !bb.hooks.vertex && !bb.hooks.surface && !bb.hooks.light
    }

    function gb(bb, wb) {
      return "off" !== wb && (null === bb || bb.some((bb => bb.key.strict === ("strict" === wb) && !Vb(bb))))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);