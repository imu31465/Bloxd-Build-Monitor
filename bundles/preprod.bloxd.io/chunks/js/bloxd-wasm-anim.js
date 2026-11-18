export const id = 5;
export const ids = [5];
export const modules = {
  41797: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/bloxd_wasm_anim_bg.134939ce2ad65d0202bd.wasm"
  },
  41795: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      BloxdAnimWasmError: () => rb,
      compileAnimationPackInWasm: () => py
    });
    var Uy = {};

    function hy(yb, bb, Wy, Uy, hy, fy) {
      const Zy = mb(yb, vb.DKFI),
        cb = ib,
        Py = mb(bb, vb.DKFI),
        oy = ib,
        By = mb(Wy, vb.DKFI),
        Ky = ib,
        ey = mb(Uy, vb.DKFI),
        sy = ib,
        Sy = mb(hy, vb.DKFI),
        Ey = ib;
      var Cy = ly(fy) ? 0 : function(yb, bb) {
          const Wy = bb(1 * yb.length, 1) >>> 0;
          return qb().set(yb, Wy / 1), ib = yb.length, Wy
        }(fy, vb.DKFI),
        Vy = ib;
      const Jy = vb.YvEY(Zy, cb, Py, oy, By, Ky, ey, sy, Sy, Ey, Cy, Vy);
      if (Jy[3]) throw Ty(Jy[2]);
      var gb, Gy, Oy = (gb = Jy[0], Gy = Jy[1], gb >>>= 0, qb().subarray(gb / 1, gb / 1 + Gy)).slice();
      return vb.qfdq(Jy[0], 1 * Jy[1], 1), Oy
    }

    function fy(yb, bb) {
      const Wy = Cy(yb, vb.DKFI, vb.mpFx),
        Uy = ib,
        hy = vb.bfJx(Wy, Uy, bb);
      if (hy[1]) throw Ty(hy[0])
    }

    function Zy() {
      vb.vLVz()
    }

    function cb() {
      return {
        __proto__: null,
        E2Er: {
          __proto__: null,
          pbhP: function(yb, bb) {
            return Py(Error(Ky(yb, bb)))
          },
          aJp2: function(yb, bb) {
            const Wy = sy(bb),
              Uy = "string" === typeof Wy ? Wy : void 0;
            var hy = ly(Uy) ? 0 : Cy(Uy, vb.DKFI, vb.mpFx),
              fy = ib;
            By().setInt32(yb + 4, fy, !0), By().setInt32(yb + 0, hy, !0)
          },
          YxoE: function(yb, bb) {
            throw new Error(Ky(yb, bb))
          },
          RdYF: function(yb, bb) {
            console.error(Ky(yb, bb))
          },
          qaL1: function(yb) {
            Ty(yb)
          }
        }
      }
    }

    function Py(yb) {
      Ey === Sy.length && Sy.push(Sy.length + 1);
      const bb = Ey;
      return Ey = Sy[bb], Sy[bb] = yb, bb
    }
    Wy.r(Uy), Wy.d(Uy, {
      isy: () => hy,
      Sy: () => fy,
      default: () => Xy,
      initSync: () => Yy,
      Ey: () => Zy
    });
    let oy = null;

    function By() {
      return (null === oy || !0 === oy.buffer.detached || void 0 === oy.buffer.detached && oy.buffer !== vb.memory.buffer) && (oy = new DataView(vb.memory.buffer)), oy
    }

    function Ky(yb, bb) {
      return function(yb, bb) {
        gb += bb, gb >= Jy && (Vy = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Vy.decode(), gb = bb);
        return Vy.decode(qb().subarray(yb, yb + bb))
      }(yb >>> 0, bb)
    }
    let ey = null;

    function qb() {
      return null !== ey && 0 !== ey.byteLength || (ey = new Uint8Array(vb.memory.buffer)), ey
    }

    function sy(yb) {
      return Sy[yb]
    }
    let Sy = new Array(1024).fill(void 0);
    Sy.push(void 0, null, !0, !1);
    let Ey = Sy.length;

    function ly(yb) {
      return void 0 === yb || null === yb
    }

    function mb(yb, bb) {
      const Wy = bb(4 * yb.length, 4) >>> 0,
        Uy = By();
      for (let hy = 0; hy < yb.length; hy++) Uy.setUint32(Wy + 4 * hy, Py(yb[hy]), !0);
      return ib = yb.length, Wy
    }

    function Cy(yb, bb, Wy) {
      if (void 0 === Wy) {
        const Wy = Gy.encode(yb),
          Uy = bb(Wy.length, 1) >>> 0;
        return qb().subarray(Uy, Uy + Wy.length).set(Wy), ib = Wy.length, Uy
      }
      let Uy = yb.length,
        hy = bb(Uy, 1) >>> 0;
      const fy = qb();
      let Zy = 0;
      for (; Zy < Uy; Zy++) {
        const bb = yb.charCodeAt(Zy);
        if (bb > 127) break;
        fy[hy + Zy] = bb
      }
      if (Zy !== Uy) {
        0 !== Zy && (yb = yb.slice(Zy)), hy = Wy(hy, Uy, Uy = Zy + 3 * yb.length, 1) >>> 0;
        const bb = qb().subarray(hy + Zy, hy + Uy);
        Zy += Gy.encodeInto(yb, bb).written, hy = Wy(hy, Uy, Zy, 1) >>> 0
      }
      return ib = Zy, hy
    }

    function Ty(yb) {
      const bb = sy(yb);
      return function(yb) {
        yb < 1028 || (Sy[yb] = Ey, Ey = yb)
      }(yb), bb
    }
    let Vy = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Vy.decode();
    const Jy = 2146435072;
    let gb = 0;
    const Gy = new TextEncoder;
    "encodeInto" in Gy || (Gy.encodeInto = function(yb, bb) {
      const Wy = Gy.encode(yb);
      return bb.set(Wy), {
        read: yb.length,
        written: Wy.length
      }
    });
    let Oy, Ry, vb, ib = 0;

    function My(yb, bb) {
      return Ry = yb, vb = yb.exports, Oy = bb, oy = null, ey = null, vb.tMRo(), vb
    }

    function Yy(yb) {
      if (void 0 !== vb) return vb;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module: yb
      } = yb) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const bb = cb();
      yb instanceof WebAssembly.Module || (yb = new WebAssembly.Module(yb));
      return My(new WebAssembly.Instance(yb, bb), yb)
    }
    async function Xy(yb) {
      if (void 0 !== vb) return vb;
      void 0 !== yb && (Object.getPrototypeOf(yb) === Object.prototype ? ({
        module_or_path: yb
      } = yb) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const bb = cb();
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
      return My(Wy, Uy)
    }
    var ny = Wy(3004),
      uy = Wy(5876);
    class rb extends Error {
      stage;
      constructor(yb, bb) {
        super((0, ny.v)(yb, bb), {
          cause: bb
        }), this.name = "BloxdAnimWasmError", this.stage = yb
      }
    }
    let Hy = null,
      ab = null;

    function Fy() {
      if (ab) throw ab
    }
    async function py(yb, bb, hy) {
      Fy();
      const fy = await (Hy ??= (async () => {
        let yb;
        try {
          yb = await (0, ny.z)(new Wy.U(Wy(41797)), (0, uy.c)("bloxd_wasm_anim"))
        } catch (bb) {
          throw new rb((0, ny.F)(bb), bb)
        }
        try {
          await Xy({
            module_or_path: yb
          })
        } catch (bb) {
          throw new rb("instantiate", bb)
        }
        return Uy
      })(), Hy.catch((() => {
        Hy = null
      })), Hy);
      Fy();
      try {
        return fy.isy(Object.entries(yb).flat(), [...bb.mobTypes], [...bb.vehicleTypes], [...bb.mobAiStates], [...bb.playerPoses], "builtIns" in hy ? hy.builtIns : void 0)
      } catch (Zy) {
        const yb = new rb("call", Zy);
        throw Zy instanceof WebAssembly.RuntimeError && (ab = yb), yb
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);