export const id = 123;
export const ids = [123];
export const modules = {
  5867: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadPageShaderPackCompiler: () => eb
    });
    var Uy = {};
    Wy.r(Uy), Wy.d(Uy, {
      yey: () => hy,
      pZy: () => fy,
      default: () => tb,
      bey: () => Zy,
      WKy: () => cb,
      initSync: () => Dy,
      Ey: () => Py,
      aBy: () => oy,
      UKy: () => By,
      hKy: () => Ky,
      Dby: () => ey,
      ZKy: () => qb,
      jWy: () => sy,
      cey: () => Sy
    });
    class hy {
      static __wrap(yb) {
        const bb = Object.create(hy.prototype);
        return bb.__wbg_ptr = yb, ly.register(bb, bb.__wbg_ptr, bb), bb
      }
      __destroy_into_raw() {
        const yb = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ly.unregister(this), yb
      }
      free() {
        const yb = this.__destroy_into_raw();
        Ly.jPuJ(yb, 0)
      }
      get errorsJson() {
        let yb, bb;
        try {
          const Wy = Ly.P0Jw(this.__wbg_ptr);
          return yb = Wy[0], bb = Wy[1], gb(Wy[0], Wy[1])
        } finally {
          Ly.putA(yb, bb, 1)
        }
      }
      get features() {
        const yb = Ly.iQjm(this.__wbg_ptr);
        var bb = Cy(yb[0], yb[1]);
        return Ly.putA(yb[0], 4 * yb[1], 4), bb
      }
      get hooks() {
        const yb = Ly.YvnP(this.__wbg_ptr);
        var bb = Ty(yb[0], yb[1]).slice();
        return Ly.putA(yb[0], 1 * yb[1], 1), bb
      }
      mapValidationMessage(yb, bb, Wy, Uy, hy) {
        let fy, Zy;
        try {
          const oy = Ly.UaTm(this.__wbg_ptr, yb, bb, Wy, mb(Uy), mb(hy));
          var cb = oy[0],
            Py = oy[1];
          if (oy[3]) throw cb = 0, Py = 0, ny(oy[2]);
          return fy = cb, Zy = Py, gb(cb, Py)
        } finally {
          Ly.putA(fy, Zy, 1)
        }
      }
      get moduleCodes() {
        const yb = Ly.QoGd(this.__wbg_ptr);
        var bb = Cy(yb[0], yb[1]);
        return Ly.putA(yb[0], 4 * yb[1], 4), bb
      }
      get offInStrictJson() {
        let yb, bb;
        try {
          const Wy = Ly.h0dy(this.__wbg_ptr);
          return yb = Wy[0], bb = Wy[1], gb(Wy[0], Wy[1])
        } finally {
          Ly.putA(yb, bb, 1)
        }
      }
      get reads() {
        const yb = Ly.VxRd(this.__wbg_ptr);
        var bb = Cy(yb[0], yb[1]);
        return Ly.putA(yb[0], 4 * yb[1], 4), bb
      }
      get validationModuleCodes() {
        const yb = Ly.g9ne(this.__wbg_ptr);
        var bb = Cy(yb[0], yb[1]);
        return Ly.putA(yb[0], 4 * yb[1], 4), bb
      }
      get validationModuleKeys() {
        const yb = Ly.uwt1(this.__wbg_ptr);
        var bb = Ty(yb[0], yb[1]).slice();
        return Ly.putA(yb[0], 1 * yb[1], 1), bb
      }
      get variantFlags() {
        const yb = Ly.lFrk(this.__wbg_ptr);
        var bb = Ty(yb[0], yb[1]).slice();
        return Ly.putA(yb[0], 1 * yb[1], 1), bb
      }
    }

    function fy(yb, bb, Wy, Uy, fy, Zy, cb) {
      const Py = Xy(yb, Ly.zvei),
        oy = Qy,
        By = Xy(bb, Ly.zvei),
        Ky = Qy,
        ey = Xy(Wy, Ly.zvei),
        qb = Qy,
        sy = Yy(Uy, Ly.zvei),
        Sy = Qy,
        Ey = Xy(fy, Ly.zvei),
        ly = Qy,
        mb = Xy(Zy, Ly.zvei),
        Cy = Qy,
        Ty = Xy(cb, Ly.zvei),
        Vy = Qy,
        Jy = Ly.P3hd(Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy);
      if (Jy[2]) throw ny(Jy[1]);
      return hy.__wrap(Jy[0])
    }

    function Zy() {
      const yb = Ly.CaXX();
      var bb = Cy(yb[0], yb[1]);
      return Ly.putA(yb[0], 4 * yb[1], 4), bb
    }

    function cb() {
      const yb = Ly.ssmV();
      var bb = Cy(yb[0], yb[1]);
      return Ly.putA(yb[0], 4 * yb[1], 4), bb
    }

    function Py() {
      Ly.mUzK()
    }

    function oy(yb, bb, Wy, Uy, hy) {
      let fy, Zy;
      try {
        const oy = Xy(yb, Ly.zvei),
          By = Qy,
          Ky = Yy(bb, Ly.zvei),
          ey = Qy,
          qb = Xy(Wy, Ly.zvei),
          sy = Qy,
          Sy = Yy(Uy, Ly.zvei),
          Ey = Qy,
          ly = function(yb, bb) {
            const Wy = bb(1 * yb.length, 1) >>> 0;
            return Ry().set(yb, Wy / 1), Qy = yb.length, Wy
          }(hy, Ly.zvei),
          mb = Qy,
          Cy = Ly.j5td(oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb);
        var cb = Cy[0],
          Py = Cy[1];
        if (Cy[3]) throw cb = 0, Py = 0, ny(Cy[2]);
        return fy = cb, Zy = Py, gb(cb, Py)
      } finally {
        Ly.putA(fy, Zy, 1)
      }
    }

    function By() {
      let yb, bb;
      try {
        const Wy = Ly.fGM5();
        return yb = Wy[0], bb = Wy[1], gb(Wy[0], Wy[1])
      } finally {
        Ly.putA(yb, bb, 1)
      }
    }

    function Ky(yb) {
      let bb, Wy;
      try {
        const fy = Ly.e0jy(yb);
        var Uy = fy[0],
          hy = fy[1];
        if (fy[3]) throw Uy = 0, hy = 0, ny(fy[2]);
        return bb = Uy, Wy = hy, gb(Uy, hy)
      } finally {
        Ly.putA(bb, Wy, 1)
      }
    }

    function ey() {
      return Ly.zXzB() >>> 0
    }

    function qb() {
      let yb, bb;
      try {
        const Wy = Ly.auFU();
        return yb = Wy[0], bb = Wy[1], gb(Wy[0], Wy[1])
      } finally {
        Ly.putA(yb, bb, 1)
      }
    }

    function sy(yb, bb) {
      let Wy, Uy;
      try {
        const Zy = Xy(yb, Ly.zvei),
          cb = Qy,
          Py = Yy(bb, Ly.zvei),
          oy = Qy,
          By = Ly.J77m(Zy, cb, Py, oy);
        var hy = By[0],
          fy = By[1];
        if (By[3]) throw hy = 0, fy = 0, ny(By[2]);
        return Wy = hy, Uy = fy, gb(hy, fy)
      } finally {
        Ly.putA(Wy, Uy, 1)
      }
    }

    function Sy(yb) {
      let bb, Wy;
      try {
        const fy = Ly.Csw9(mb(yb));
        var Uy = fy[0],
          hy = fy[1];
        if (fy[3]) throw Uy = 0, hy = 0, ny(fy[2]);
        return bb = Uy, Wy = hy, gb(Uy, hy)
      } finally {
        Ly.putA(bb, Wy, 1)
      }
    }

    function Ey() {
      return {
        __proto__: null,
        KLiE: {
          __proto__: null,
          rZA4: function(yb, bb) {
            return mb(Error(gb(yb, bb)))
          },
          PAtG: function(yb) {
            return null === vb(yb)
          },
          NdJZ: function(yb) {
            return "string" === typeof vb(yb)
          },
          X37O: function(yb, bb) {
            const Wy = vb(bb),
              Uy = "string" === typeof Wy ? Wy : void 0;
            var hy, fy = void 0 === (hy = Uy) || null === hy ? 0 : function(yb, bb, Wy) {
                if (void 0 === Wy) {
                  const Wy = ab.encode(yb),
                    Uy = bb(Wy.length, 1) >>> 0;
                  return Ry().subarray(Uy, Uy + Wy.length).set(Wy), Qy = Wy.length, Uy
                }
                let Uy = yb.length,
                  hy = bb(Uy, 1) >>> 0;
                const fy = Ry();
                let Zy = 0;
                for (; Zy < Uy; Zy++) {
                  const bb = yb.charCodeAt(Zy);
                  if (bb > 127) break;
                  fy[hy + Zy] = bb
                }
                if (Zy !== Uy) {
                  0 !== Zy && (yb = yb.slice(Zy)), hy = Wy(hy, Uy, Uy = Zy + 3 * yb.length, 1) >>> 0;
                  const bb = Ry().subarray(hy + Zy, hy + Uy);
                  Zy += ab.encodeInto(yb, bb).written, hy = Wy(hy, Uy, Zy, 1) >>> 0
                }
                return Qy = Zy, hy
              }(Uy, Ly.zvei, Ly.Lhk1),
              Zy = Qy;
            Jy().setInt32(yb + 4, Zy, !0), Jy().setInt32(yb + 0, fy, !0)
          },
          tg7m: function(yb, bb) {
            throw new Error(gb(yb, bb))
          },
          cjxx: function(yb, bb) {
            return vb(yb).charCodeAt(bb >>> 0)
          },
          jtGI: function(yb, bb) {
            console.error(gb(yb, bb))
          },
          ttje: function(yb) {
            return vb(yb).length
          },
          EZph: function(yb, bb) {
            return mb(gb(yb, bb))
          },
          lHV3: function(yb) {
            ny(yb)
          }
        }
      }
    }
    Symbol.dispose && (hy.prototype[Symbol.dispose] = hy.prototype.free);
    const ly = "undefined" === typeof FinalizationRegistry ? {
      register: () => {},
      unregister: () => {}
    } : new FinalizationRegistry((yb => Ly.jPuJ(yb, 1)));

    function mb(yb) {
      My === ib.length && ib.push(ib.length + 1);
      const bb = My;
      return My = ib[bb], ib[bb] = yb, bb
    }

    function Cy(yb, bb) {
      yb >>>= 0;
      const Wy = Jy(),
        Uy = [];
      for (let hy = yb; hy < yb + 4 * bb; hy += 4) Uy.push(ny(Wy.getUint32(hy, !0)));
      return Uy
    }

    function Ty(yb, bb) {
      return yb >>>= 0, Ry().subarray(yb / 1, yb / 1 + bb)
    }
    let Vy = null;

    function Jy() {
      return (null === Vy || !0 === Vy.buffer.detached || void 0 === Vy.buffer.detached && Vy.buffer !== Ly.memory.buffer) && (Vy = new DataView(Ly.memory.buffer)), Vy
    }

    function gb(yb, bb) {
      return function(yb, bb) {
        Hy += bb, Hy >= rb && (uy = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), uy.decode(), Hy = bb);
        return uy.decode(Ry().subarray(yb, yb + bb))
      }(yb >>> 0, bb)
    }
    let Gy = null;
    let Oy = null;

    function Ry() {
      return null !== Oy && 0 !== Oy.byteLength || (Oy = new Uint8Array(Ly.memory.buffer)), Oy
    }

    function vb(yb) {
      return ib[yb]
    }
    let ib = new Array(1024).fill(void 0);
    ib.push(void 0, null, !0, !1);
    let My = ib.length;

    function Yy(yb, bb) {
      const Wy = bb(4 * yb.length, 4) >>> 0;
      return (null !== Gy && 0 !== Gy.byteLength || (Gy = new Uint32Array(Ly.memory.buffer)), Gy).set(yb, Wy / 4), Qy = yb.length, Wy
    }

    function Xy(yb, bb) {
      const Wy = bb(4 * yb.length, 4) >>> 0,
        Uy = Jy();
      for (let hy = 0; hy < yb.length; hy++) Uy.setUint32(Wy + 4 * hy, mb(yb[hy]), !0);
      return Qy = yb.length, Wy
    }

    function ny(yb) {
      const bb = vb(yb);
      return function(yb) {
        yb < 1028 || (ib[yb] = My, My = yb)
      }(yb), bb
    }
    let uy = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    uy.decode();
    const rb = 2146435072;
    let Hy = 0;
    const ab = new TextEncoder;
    "encodeInto" in ab || (ab.encodeInto = function(yb, bb) {
      const Wy = ab.encode(yb);
      return bb.set(Wy), {
        read: yb.length,
        written: Wy.length
      }
    });
    let Fy, py, Ly, Qy = 0;

    function jb(yb, bb) {
      return py = yb, Ly = yb.exports, Fy = bb, Vy = null, Gy = null, Oy = null, Ly.JXiL(), Ly
    }

    function Dy(yb) {
      if (void 0 !== Ly) return Ly;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module: yb
      } = yb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bb = Ey();
      yb instanceof WebAssembly.Module || (yb = new WebAssembly.Module(yb));
      return jb(new WebAssembly.Instance(yb, bb), yb)
    }
    async function tb(yb) {
      if (void 0 !== Ly) return Ly;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module_or_path: yb
      } = yb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bb = Ey();
      ("string" === typeof yb || "function" === typeof Request && yb instanceof Request || "function" === typeof URL && yb instanceof URL) && (yb = fetch(yb));
      const {
        instance: Wy,
        module: Uy
      } = await async function(yb, bb) {
        if ("function" === typeof Response && yb instanceof Response) {
          if (!yb.ok) throw new Error(`failed to fetch Wasm: ${yb.status} ${yb.statusText} fetching '${yb.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(yb, bb)
          } catch (Wy) {
            if (! function(yb) {
                switch (yb) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(yb.type) || "application/wasm" === yb.headers.get("Content-Type")) throw Wy;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Wy)
          }
          const Uy = await yb.arrayBuffer();
          return await WebAssembly.instantiate(Uy, bb)
        } {
          const Wy = await WebAssembly.instantiate(yb, bb);
          return Wy instanceof WebAssembly.Instance ? {
            instance: Wy,
            module: yb
          } : Wy
        }
      }(await yb, bb);
      return jb(Wy, Uy)
    }
    var wy = Wy(3004),
      kb = Wy(5876);
    class Ny extends Error {
      stage;
      constructor(yb, bb) {
        super((0, wy.v)(yb, bb), {
          cause: bb
        }), this.name = "BloxdShaderPackWasmLoadError", this.stage = yb
      }
    }
    let zb = null,
      Iy = null;

    function xb() {
      return zb ? Promise.resolve(zb) : (Iy || (Iy = async function() {
        let yb;
        try {
          yb = await (0, wy.z)(new Wy.U(Wy(5889)), (0, kb.c)("bloxd_wasm_shader_pack"))
        } catch (bb) {
          throw new Ny((0, wy.F)(bb), bb)
        }
        try {
          await tb({
            module_or_path: yb
          })
        } catch (bb) {
          throw new Ny("instantiate", bb)
        }
        return zb = Uy, zb
      }(), Iy.then(void 0, (() => {
        Iy = null
      }))), Iy)
    }
    var Ay = Wy(5898);

    function dy(yb) {
      let [bb, Wy, Uy, hy] = yb;
      const fy = {
        file: bb,
        line: Wy,
        message: Uy
      };
      return hy && (fy.variants = hy.map(Ay.m)), fy
    }

    function yW(yb) {
      return JSON.parse(yb).map(dy)
    }

    function bW(yb, bb) {
      if (!Number.isInteger(yb) || yb < 0 || yb > 4294967295) throw new Error(`${bb} ${yb} is not a whole number from 0 to 4294967295`);
      return yb
    }

    function Wb(yb) {
      return [yb.named.map((yb => yb.name)), Uint32Array.from(yb.named, (yb => bW(yb.id, "Texture ID")))]
    }
    const Ub = new WeakMap;
    const hb = new WeakMap,
      fb = new WeakSet;

    function Zb(yb, bb) {
      if (fb.has(yb)) throw new Error("The shader pack compiler crashed earlier on this page, so it can't run again until a reload");
      try {
        return bb()
      } catch (Wy) {
        throw Wy instanceof WebAssembly.RuntimeError && fb.add(yb), Wy
      }
    }

    function cW(yb) {
      let bb = hb.get(yb);
      if (!bb) {
        let Wy, Uy;
        bb = {
          pZy: (bb, Wy) => Zb(yb, (() => function(yb, bb, Wy) {
            const Uy = yb.pZy(bb.map((yb => yb.path)), bb.map((yb => yb.source)), ...Wb(Wy), Wy.aliases.map((yb => yb.name)), Wy.aliases.map((yb => yb.texture)), Wy.aliases.map((yb => yb.kind)));
            let hy = !1;
            try {
              const yb = Uy.validationModuleCodes,
                bb = Array.from(Uy.validationModuleKeys, ((bb, Wy) => ({
                  key: (0, Ay.m)(bb),
                  code: yb[Wy]
                }))),
                Wy = {
                  errors: yW(Uy.errorsJson),
                  offInStrict: yW(Uy.offInStrictJson),
                  variants: (0, Ay.f)(Uy),
                  validationModules: bb,
                  features: Uy.features
                };
              return bb.forEach(((yb, bb) => {
                Ub.set(yb, {
                  pack: Uy,
                  index: bb
                })
              })), hy = bb.length > 0, Wy
            } finally {
              hy || Uy.free()
            }
          }(yb, bb, Wy))),
          mapValidationMessage: (bb, Wy) => {
            const Uy = Ub.get(bb);
            if (!Uy) throw new Error("mapValidationMessage takes a validation module this compiler made");
            return dy(JSON.parse(Zb(yb, (() => Uy.pack.mapValidationMessage(Uy.index, Wy.lineNum, Wy.linePos, Wy.message, Wy.type)))))
          },
          aBy: bb => Zb(yb, (() => function(yb, bb) {
            const Wy = new Int32Array(bb.length),
              Uy = [];
            return bb.forEach(((yb, bb) => {
              Wy[bb] = yb.variants ? yb.variants.length : -1;
              for (const Wy of yb.variants ?? []) Uy.push((0, Ay.j)(Wy))
            })), yW(yb.aBy(bb.map((yb => yb.file)), Uint32Array.from(bb, (yb => bW(yb.line, "Diagnostic line"))), bb.map((yb => yb.message)), Wy, Uint8Array.from(Uy)))
          }(yb, bb))),
          jWy: bb => Zb(yb, (() => yb.jWy(...Wb(bb)))),
          get SHADER_PACK_HEADER_VERSION() {
            return Wy ??= Zb(yb, (() => yb.ZKy())), Wy
          },
          get DEFAULT_SHADER_PACK_FILES() {
            return Uy ??= Zb(yb, (() => {
              const bb = yb.WKy();
              return yb.bey().map(((yb, Wy) => ({
                path: yb,
                source: bb[Wy]
              })))
            })), Uy
          },
          cey: bb => Zb(yb, (() => yb.cey(bb))),
          resolveHeader: bb => Zb(yb, (() => yb.hKy((0, Ay.j)(bb)))),
          UKy: () => Zb(yb, (() => yb.UKy()))
        }, hb.set(yb, bb)
      }
      return bb
    }
    var Pb = Wy(2534),
      ob = Wy(5893);
    const Bb = "bloxdShaderPackWasmFailureReported";
    let Kb = null;

    function eb() {
      return Kb ??= async function() {
        if ("undefined" === typeof WebAssembly) return qW("unsupported", "This browser has no WebAssembly"), null;
        const yb = (0, ob.loadShaderPackTextures)().then((() => !0), (yb => (console.error("Could not load the shader pack textures, so shader packs can't run", yb), !1)));
        try {
          const bb = await async function() {
            let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xb;
            return cW(await yb())
          }();
          return await yb ? bb : null
        } catch (bb) {
          const yb = bb instanceof Error ? bb.message : String(bb);
          return qW(Pb.c[bb instanceof Ny ? bb.stage : "instantiate"], yb), null
        }
      }(), Kb
    }

    function qW(yb, bb) {
      (0, Pb.g)(Bb, `Shader pack wasm ${yb}, so shader packs can't run: ${bb}`, bb, `shader_pack_${yb}`)
    }
  },
  5889: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_shader_pack_bg.b0f6eea82b660cd118ce.wasm"
  },
  5876: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(3004);
    const hy = {
      bloxd_wasm: () => "e989db87a5f557ada4026e67d4a47376d430f543eee7f32e573c5d2b0032769c",
      bloxd_wasm_client: () => "8d612fbb1f0fe61d983b3bb2556fca3c1e0e6e782fc4ff198ebb3ba8107630a1",
      bloxd_wasm_workers: () => "cbab96479f2e9d4b565163fbfed0a59652418d0ac96c6e003d25c290e07d4914",
      bloxd_wasm_models: () => "cc3b97b02887fd959e6aac8c92ca5a5dfadcad1b80974004972b3a75c05d019a",
      bloxd_wasm_webgpu: () => "f3096279c3044b96be48162245d6e2e7da73e95228a85108b38562687782c907",
      bloxd_wasm_webgl: () => "d1cf22f5f978b51ac1b571ba29da08f1047b0873e044e89ec4676008d8fb7dbe",
      bloxd_wasm_webgl1: () => "4f03aae37dd37be5853f99a485338b001156b35ae47408243bd7f398d9dadad0",
      bloxd_wasm_replay: () => "3a65742f81727412c93734593748664778ee7e0f880fb5b4fe95355c282b47f8",
      bloxd_wasm_recorder: () => "bdd92d3bc5cb3b7a56800dfdad0945608d21aaed71ba700787eff7a8f099dcb8",
      bloxd_wasm_anim: () => "fa451e940fd7a94a9f64df816befb028036aee037b6fddac4025b8a26ccc6baa",
      bloxd_wasm_textures: () => "a73fa025fa307732d8ccf3d5ffb9a75731ee9d6cc37337ca3de332d06d5f932c",
      bloxd_wasm_shader_pack: () => "f3b46e3e760a1ee4ffe1e8533bd7ea8910dfaab4ac6a38d16a2f09b79c3a124d"
    };
    var fy = Wy(5885);

    function Zy(yb) {
      const bb = Object.prototype.hasOwnProperty.call(hy, yb) ? hy[yb]() : void 0;
      if (void 0 !== bb) return {
        sha256: bb,
        onMismatch: fy.z
      };
      throw new Uy.f(`${yb} has no release digest, so this build refuses it`)
    }
  },
  5898: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ty,
      f: () => Vy,
      j: () => mb,
      m: () => ly
    });
    var Uy = Wy(5905);
    const hy = 6,
      fy = 3,
      Zy = 1,
      cb = 2,
      Py = 4,
      oy = 8,
      By = 16,
      Ky = 32,
      ey = 64,
      qb = 128,
      sy = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];

    function Sy(yb) {
      if (!yb) return 0;
      const bb = sy.indexOf(yb);
      if (bb <= 0) throw new Error(`"${yb}" is not a shader pack hook function`);
      return bb
    }

    function Ey(yb) {
      if (0 === yb) return null;
      const bb = sy[yb];
      if (void 0 === bb) throw new Error(`${yb} is not a shader pack hook function id`);
      return bb
    }

    function ly(yb) {
      const bb = Uy.e.length;
      return {
        strict: yb >= bb,
        program: Uy.e[yb % bb]
      }
    }

    function mb(yb) {
      return Number(yb.strict) * Uy.e.length + Uy.e.indexOf(yb.program)
    }

    function Cy(yb) {
      return "" === yb ? [] : yb.split(" ")
    }

    function Ty(yb) {
      const bb = {
        variantFlags: new Uint8Array(hy),
        hooks: new Uint8Array(hy * fy),
        moduleCodes: Array(hy).fill(""),
        reads: Array(2 * hy).fill("")
      };
      for (const Wy of yb) {
        const yb = mb(Wy.key),
          Uy = (yb, bb) => null === Wy.hooks.surface || Wy.reads.fragment.includes(yb) ? 0 : bb;
        bb.variantFlags[yb] = (Wy.sceneDepth ? Zy : 0) | (Wy.movesVertices ? cb : 0) | (Wy.sunShadow ? Py : 0) | (Wy.airShadow ? oy : 0) | (Wy.discards ? By : 0) | Uy("localPosition", Ky) | Uy("enchantSpeed", ey) | Uy("enchantTier", qb), bb.hooks[yb * fy] = Sy(Wy.hooks.vertex), bb.hooks[yb * fy + 1] = Sy(Wy.hooks.surface), bb.hooks[yb * fy + 2] = Sy(Wy.hooks.light), bb.moduleCodes[yb] = Wy.moduleCode, bb.reads[2 * yb] = Wy.reads.vertex.join(" "), bb.reads[2 * yb + 1] = Wy.reads.fragment.join(" ")
      }
      return bb
    }

    function Vy(yb) {
      const {
        hooks: bb,
        moduleCodes: Wy,
        reads: Uy
      } = yb;
      return Array.from(yb.variantFlags, ((yb, hy) => {
        const Ky = hy * fy;
        return {
          key: ly(hy),
          hooks: {
            vertex: Ey(bb[Ky]),
            surface: Ey(bb[Ky + 1]),
            light: Ey(bb[Ky + 2])
          },
          moduleCode: Wy[hy],
          sceneDepth: 0 !== (yb & Zy),
          sunShadow: 0 !== (yb & Py),
          airShadow: 0 !== (yb & oy),
          movesVertices: 0 !== (yb & cb),
          discards: 0 !== (yb & By),
          reads: {
            vertex: Cy(Uy[2 * hy]),
            fragment: Cy(Uy[2 * hy + 1])
          }
        }
      }))
    }
  },
  5905: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      f: () => hy,
      h: () => fy
    });
    const Uy = ["terrain", "liquid", "model"];

    function hy(yb) {
      return !yb.hooks.vertex && !yb.hooks.surface && !yb.hooks.light
    }

    function fy(yb, bb) {
      return "off" !== bb && (null === yb || yb.some((yb => yb.key.strict === ("strict" === bb) && !hy(yb))))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);