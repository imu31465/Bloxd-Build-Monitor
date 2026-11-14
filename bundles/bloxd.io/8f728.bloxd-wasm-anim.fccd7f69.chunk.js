export const id = 5;
export const ids = [5];
export const modules = {
  41183: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/bloxd_wasm_anim_bg.a5ce8bbe99dc7cb2a240.wasm"
  },
  41179: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BloxdAnimWasmError: () => Nc,
      compileAnimationPackInWasm: () => wc
    });
    var Vc = {};

    function Ic(cB, Bc, nc, Vc, Ic, rB) {
      const uc = yB(cB, Uc.tfxS),
        sc = bB,
        Mc = yB(Bc, Uc.tfxS),
        Pc = bB,
        qB = yB(nc, Uc.tfxS),
        Oc = bB,
        Tc = yB(Vc, Uc.tfxS),
        mB = bB,
        ec = yB(Ic, Uc.tfxS),
        tB = bB;
      var zB = Sc(rB) ? 0 : function(cB, Bc) {
          const nc = Bc(1 * cB.length, 1) >>> 0;
          return fc().set(cB, nc / 1), bB = cB.length, nc
        }(rB, Uc.tfxS),
        hc = bB;
      const aB = Uc.IprL(uc, sc, Mc, Pc, qB, Oc, Tc, mB, ec, tB, zB, hc);
      if (aB[3]) throw pc(aB[2]);
      var lc, Yc, Lc = (lc = aB[0], Yc = aB[1], lc >>>= 0, fc().subarray(lc / 1, lc / 1 + Yc)).slice();
      return Uc.wpNT(aB[0], 1 * aB[1], 1), Lc
    }

    function rB(cB, Bc) {
      const nc = zB(cB, Uc.tfxS, Uc.pmR6),
        Vc = bB,
        Ic = Uc.RkAT(nc, Vc, Bc);
      if (Ic[1]) throw pc(Ic[0])
    }

    function uc() {
      Uc.ROYg()
    }

    function sc() {
      return {
        __proto__: null,
        PopI: {
          __proto__: null,
          jtNp: function(cB, Bc) {
            return Mc(Error(Oc(cB, Bc)))
          },
          vjn2: function(cB, Bc) {
            const nc = mB(Bc),
              Vc = "string" === typeof nc ? nc : void 0;
            var Ic = Sc(Vc) ? 0 : zB(Vc, Uc.tfxS, Uc.pmR6),
              rB = bB;
            qB().setInt32(cB + 4, rB, !0), qB().setInt32(cB + 0, Ic, !0)
          },
          IY5c: function(cB, Bc) {
            throw new Error(Oc(cB, Bc))
          },
          quco: function(cB, Bc) {
            console.error(Oc(cB, Bc))
          },
          ZbkS: function(cB) {
            pc(cB)
          }
        }
      }
    }

    function Mc(cB) {
      tB === ec.length && ec.push(ec.length + 1);
      const Bc = tB;
      return tB = ec[Bc], ec[Bc] = cB, Bc
    }
    nc.r(Vc), nc.d(Vc, {
      Ofc: () => Ic,
      Tc: () => rB,
      default: () => Cc,
      initSync: () => Qc,
      fc: () => uc
    });
    let Pc = null;

    function qB() {
      return (null === Pc || !0 === Pc.buffer.detached || void 0 === Pc.buffer.detached && Pc.buffer !== Uc.memory.buffer) && (Pc = new DataView(Uc.memory.buffer)), Pc
    }

    function Oc(cB, Bc) {
      return function(cB, Bc) {
        lc += Bc, lc >= aB && (hc = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), hc.decode(), lc = Bc);
        return hc.decode(fc().subarray(cB, cB + Bc))
      }(cB >>> 0, Bc)
    }
    let Tc = null;

    function fc() {
      return null !== Tc && 0 !== Tc.byteLength || (Tc = new Uint8Array(Uc.memory.buffer)), Tc
    }

    function mB(cB) {
      return ec[cB]
    }
    let ec = new Array(1024).fill(void 0);
    ec.push(void 0, null, !0, !1);
    let tB = ec.length;

    function Sc(cB) {
      return void 0 === cB || null === cB
    }

    function yB(cB, Bc) {
      const nc = Bc(4 * cB.length, 4) >>> 0,
        Vc = qB();
      for (let Ic = 0; Ic < cB.length; Ic++) Vc.setUint32(nc + 4 * Ic, Mc(cB[Ic]), !0);
      return bB = cB.length, nc
    }

    function zB(cB, Bc, nc) {
      if (void 0 === nc) {
        const nc = Yc.encode(cB),
          Vc = Bc(nc.length, 1) >>> 0;
        return fc().subarray(Vc, Vc + nc.length).set(nc), bB = nc.length, Vc
      }
      let Vc = cB.length,
        Ic = Bc(Vc, 1) >>> 0;
      const rB = fc();
      let uc = 0;
      for (; uc < Vc; uc++) {
        const Bc = cB.charCodeAt(uc);
        if (Bc > 127) break;
        rB[Ic + uc] = Bc
      }
      if (uc !== Vc) {
        0 !== uc && (cB = cB.slice(uc)), Ic = nc(Ic, Vc, Vc = uc + 3 * cB.length, 1) >>> 0;
        const Bc = fc().subarray(Ic + uc, Ic + Vc);
        uc += Yc.encodeInto(cB, Bc).written, Ic = nc(Ic, Vc, uc, 1) >>> 0
      }
      return bB = uc, Ic
    }

    function pc(cB) {
      const Bc = mB(cB);
      return function(cB) {
        cB < 1028 || (ec[cB] = tB, tB = cB)
      }(cB), Bc
    }
    let hc = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    hc.decode();
    const aB = 2146435072;
    let lc = 0;
    const Yc = new TextEncoder;
    "encodeInto" in Yc || (Yc.encodeInto = function(cB, Bc) {
      const nc = Yc.encode(cB);
      return Bc.set(nc), {
        read: cB.length,
        written: nc.length
      }
    });
    let Lc, gB, Uc, bB = 0;

    function Zc(cB, Bc) {
      return gB = cB, Uc = cB.exports, Lc = Bc, Pc = null, Tc = null, Uc.LXy1(), Uc
    }

    function Qc(cB) {
      if (void 0 !== Uc) return Uc;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module: cB
      } = cB) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Bc = sc();
      cB instanceof WebAssembly.Module || (cB = new WebAssembly.Module(cB));
      return Zc(new WebAssembly.Instance(cB, Bc), cB)
    }
    async function Cc(cB) {
      if (void 0 !== Uc) return Uc;
      void 0 !== cB && (Object.getPrototypeOf(cB) === Object.prototype ? ({
        module_or_path: cB
      } = cB) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Bc = sc();
      ("string" === typeof cB || "function" === typeof Request && cB instanceof Request || "function" === typeof URL && cB instanceof URL) && (cB = fetch(cB));
      const {
        instance: nc,
        module: Vc
      } = await async function(cB, Bc) {
        if ("function" === typeof Response && cB instanceof Response) {
          if (!cB.ok) throw new Error(`failed to fetch Wasm: ${cB.status} ${cB.statusText} fetching '${cB.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(cB, Bc)
          } catch (nc) {
            if (! function(cB) {
                switch (cB) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(cB.type) || "application/wasm" === cB.headers.get("Content-Type")) throw nc;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", nc)
          }
          const Vc = await cB.arrayBuffer();
          return await WebAssembly.instantiate(Vc, Bc)
        } {
          const nc = await WebAssembly.instantiate(cB, Bc);
          return nc instanceof WebAssembly.Instance ? {
            instance: nc,
            module: cB
          } : nc
        }
      }(await cB, Bc);
      return Zc(nc, Vc)
    }
    var vB = nc(2876),
      Dc = nc(5590);
    class Nc extends Error {
      stage;
      constructor(cB, Bc) {
        super((0, vB.v)(cB, Bc), {
          cause: Bc
        }), this.name = "BloxdAnimWasmError", this.stage = cB
      }
    }
    let Ec = null,
      oc = null;

    function Wc() {
      if (oc) throw oc
    }
    async function wc(cB, Bc, Ic) {
      Wc();
      const rB = await (Ec ??= (async () => {
        let cB;
        try {
          cB = await (0, vB.w)(new nc.U(nc(41183)), (0, Dc.c)("bloxd_wasm_anim"))
        } catch (Bc) {
          throw new Nc((0, vB.y)(Bc), Bc)
        }
        try {
          await Cc({
            module_or_path: cB
          })
        } catch (Bc) {
          throw new Nc("instantiate", Bc)
        }
        return Vc
      })(), Ec.catch((() => {
        Ec = null
      })), Ec);
      Wc();
      try {
        return rB.Ofc(Object.entries(cB).flat(), [...Bc.mobTypes], [...Bc.vehicleTypes], [...Bc.mobAiStates], [...Bc.playerPoses], "builtIns" in Ic ? Ic.builtIns : void 0)
      } catch (uc) {
        const cB = new Nc("call", uc);
        throw uc instanceof WebAssembly.RuntimeError && (oc = cB), cB
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);