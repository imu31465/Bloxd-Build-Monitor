export const id = 5;
export const ids = [5];
export const modules = {
  54241: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_anim_bg.89418a6564cbd67bad6a.wasm"
  },
  54238: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      BloxdAnimWasmError: () => ce,
      compileAnimationPackInWasm: () => ve
    });
    var ye = {};

    function be(ee, ie, He, ye, be, Me) {
      const Ke = ze(ee, we.FAv6),
        Ue = De,
        Fe = ze(ie, we.FAv6),
        Je = De,
        oe = ze(He, we.FAv6),
        Re = De,
        ke = ze(ye, we.FAv6),
        fe = De,
        Te = ze(be, we.FAv6),
        pe = De;
      var Be = Xe(Me) ? 0 : function(ee, ie) {
          const He = ie(1 * ee.length, 1) >>> 0;
          return qe().set(ee, He / 1), De = ee.length, He
        }(Me, we.FAv6),
        ge = De;
      const Oe = we.VFZj(Ke, Ue, Fe, Je, oe, Re, ke, fe, Te, pe, Be, ge);
      if (Oe[3]) throw Ee(Oe[2]);
      var de, We, te = (de = Oe[0], We = Oe[1], de >>>= 0, qe().subarray(de / 1, de / 1 + We)).slice();
      return we.Q6q2(Oe[0], 1 * Oe[1], 1), te
    }

    function Me(ee, ie) {
      const He = Be(ee, we.FAv6, we.e9iw),
        ye = De,
        be = we.dnEm(He, ye, ie);
      if (be[1]) throw Ee(be[0])
    }

    function Ke() {
      we.Zx71()
    }

    function Ue() {
      return {
        __proto__: null,
        VMk7: {
          __proto__: null,
          O7wX: function(ee, ie) {
            return Fe(Error(Re(ee, ie)))
          },
          xNza: function(ee, ie) {
            const He = fe(ie),
              ye = "string" === typeof He ? He : void 0;
            var be = Xe(ye) ? 0 : Be(ye, we.FAv6, we.e9iw),
              Me = De;
            oe().setInt32(ee + 4, Me, !0), oe().setInt32(ee + 0, be, !0)
          },
          KwCh: function(ee, ie) {
            throw new Error(Re(ee, ie))
          },
          f3x2: function(ee, ie) {
            console.error(Re(ee, ie))
          },
          AeIi: function(ee) {
            Ee(ee)
          }
        }
      }
    }

    function Fe(ee) {
      pe === Te.length && Te.push(Te.length + 1);
      const ie = pe;
      return pe = Te[ie], Te[ie] = ee, ie
    }
    He.r(ye), He.d(ye, {
      WFe: () => be,
      vR: () => Me,
      default: () => Ye,
      initSync: () => Ae,
      uR: () => Ke
    });
    let Je = null;

    function oe() {
      return null !== Je && Je.buffer === we.memory.buffer || (Je = new DataView(we.memory.buffer)), Je
    }

    function Re(ee, ie) {
      return function(ee, ie) {
        de += ie, de >= Oe && (ge = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), ge.decode(), de = ie);
        return ge.decode(qe().subarray(ee, ee + ie))
      }(ee >>> 0, ie)
    }
    let ke = null;

    function qe() {
      return null !== ke && 0 !== ke.byteLength || (ke = new Uint8Array(we.memory.buffer)), ke
    }

    function fe(ee) {
      return Te[ee]
    }
    let Te = new Array(1024).fill(void 0);
    Te.push(void 0, null, !0, !1);
    let pe = Te.length;

    function Xe(ee) {
      return void 0 === ee || null === ee
    }

    function ze(ee, ie) {
      const He = ie(4 * ee.length, 4) >>> 0,
        ye = oe();
      for (let be = 0; be < ee.length; be++) ye.setUint32(He + 4 * be, Fe(ee[be]), !0);
      return De = ee.length, He
    }

    function Be(ee, ie, He) {
      if (void 0 === He) {
        const He = We.encode(ee),
          ye = ie(He.length, 1) >>> 0;
        return qe().subarray(ye, ye + He.length).set(He), De = He.length, ye
      }
      let ye = ee.length,
        be = ie(ye, 1) >>> 0;
      const Me = qe();
      let Ke = 0;
      for (; Ke < ye; Ke++) {
        const ie = ee.charCodeAt(Ke);
        if (ie > 127) break;
        Me[be + Ke] = ie
      }
      if (Ke !== ye) {
        0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
        const ie = qe().subarray(be + Ke, be + ye);
        Ke += We.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
      }
      return De = Ke, be
    }

    function Ee(ee) {
      const ie = fe(ee);
      return function(ee) {
        ee < 1028 || (Te[ee] = pe, pe = ee)
      }(ee), ie
    }
    let ge = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    ge.decode();
    const Oe = 2146435072;
    let de = 0;
    const We = new TextEncoder;
    "encodeInto" in We || (We.encodeInto = function(ee, ie) {
      const He = We.encode(ee);
      return ie.set(He), {
        read: ee.length,
        written: He.length
      }
    });
    let te, Ze, we, De = 0;

    function Pe(ee, ie) {
      return Ze = ee, we = ee.exports, te = ie, Je = null, ke = null, we.UmbL(), we
    }

    function Ae(ee) {
      if (void 0 !== we) return we;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module: ee
      } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ie = Ue();
      ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
      return Pe(new WebAssembly.Instance(ee, ie), ee)
    }
    async function Ye(ee) {
      if (void 0 !== we) return we;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module_or_path: ee
      } = ee) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ie = Ue();
      ("string" === typeof ee || "function" === typeof Request && ee instanceof Request || "function" === typeof URL && ee instanceof URL) && (ee = fetch(ee));
      const {
        instance: He,
        module: ye
      } = await async function(ee, ie) {
        if ("function" === typeof Response && ee instanceof Response) {
          if (!ee.ok) throw new Error(`failed to fetch Wasm: ${ee.status} ${ee.statusText} fetching '${ee.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(ee, ie)
          } catch (He) {
            if (! function(ee) {
                switch (ee) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(ee.type) || "application/wasm" === ee.headers.get("Content-Type")) throw He;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", He)
          }
          const ye = await ee.arrayBuffer();
          return await WebAssembly.instantiate(ye, ie)
        } {
          const He = await WebAssembly.instantiate(ee, ie);
          return He instanceof WebAssembly.Instance ? {
            instance: He,
            module: ee
          } : He
        }
      }(await ee, ie);
      return Pe(He, ye)
    }
    var Ve = He(3101),
      ae = He(7251);
    class ce extends Error {
      stage;
      constructor(ee, ie) {
        super((0, Ve.A)(ee, ie), {
          cause: ie
        }), this.name = "BloxdAnimWasmError", this.stage = ee
      }
    }
    let xe = null,
      Le = null;

    function Ce() {
      if (Le) throw Le
    }
    async function ve(ee, ie, be) {
      Ce();
      const Me = await (xe ??= (async () => {
        let ee;
        try {
          ee = await (0, Ve.B)(new He.U(He(54241)), (0, ae.d)("bloxd_wasm_anim"))
        } catch (ie) {
          throw new ce((0, Ve.J)(ie), ie)
        }
        try {
          await Ye({
            module_or_path: ee
          })
        } catch (ie) {
          throw new ce("instantiate", ie)
        }
        return ye
      })(), xe.catch((() => {
        xe = null
      })), xe);
      Ce();
      try {
        return Me.WFe(Object.entries(ee).flat(), [...ie.mobTypes], [...ie.vehicleTypes], [...ie.mobAiStates], [...ie.playerPoses], "builtIns" in be ? be.builtIns : void 0)
      } catch (Ke) {
        const ee = new ce("call", Ke);
        throw Ke instanceof WebAssembly.RuntimeError && (Le = ee), ee
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);