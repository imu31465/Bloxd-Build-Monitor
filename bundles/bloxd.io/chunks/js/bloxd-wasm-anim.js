export const id = 5;
export const ids = [5];
export const modules = {
  55138: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/bloxd_wasm_anim_bg.a8411e8f2270451227c3.wasm"
  },
  55136: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BloxdAnimWasmError: () => gr,
      compileAnimationPackInWasm: () => kr
    });
    var Zr = {};

    function Wr(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = Yr(rr, Lr.eOsi),
        Ir = lr,
        fr = Yr(Sr, Lr.eOsi),
        Er = lr,
        pr = Yr(Qr, Lr.eOsi),
        xr = lr,
        mr = Yr(Zr, Lr.eOsi),
        Ur = lr,
        tr = Yr(Wr, Lr.eOsi),
        hr = lr;
      var nr = zr(ar) ? 0 : function(rr, Sr) {
          const Qr = Sr(1 * rr.length, 1) >>> 0;
          return Nr().set(rr, Qr / 1), lr = rr.length, Qr
        }(ar, Lr.eOsi),
        Kr = lr;
      const yr = Lr.OAGh(jr, Ir, fr, Er, pr, xr, mr, Ur, tr, hr, nr, Kr);
      if (yr[3]) throw er(yr[2]);
      var Br, Tr, vr = (Br = yr[0], Tr = yr[1], Br >>>= 0, Nr().subarray(Br / 1, Br / 1 + Tr)).slice();
      return Lr.DHsO(yr[0], 1 * yr[1], 1), vr
    }

    function ar(rr, Sr) {
      const Qr = nr(rr, Lr.eOsi, Lr.vvGV),
        Zr = lr,
        Wr = Lr.WiOA(Qr, Zr, Sr);
      if (Wr[1]) throw er(Wr[0])
    }

    function jr() {
      Lr.FKKK()
    }

    function Ir() {
      return {
        __proto__: null,
        iw9n: {
          __proto__: null,
          b99R: function(rr, Sr) {
            return fr(Error(xr(rr, Sr)))
          },
          Zxnl: function(rr, Sr) {
            const Qr = Ur(Sr),
              Zr = "string" === typeof Qr ? Qr : void 0;
            var Wr = zr(Zr) ? 0 : nr(Zr, Lr.eOsi, Lr.vvGV),
              ar = lr;
            pr().setInt32(rr + 4, ar, !0), pr().setInt32(rr + 0, Wr, !0)
          },
          TBUq: function(rr, Sr) {
            throw new Error(xr(rr, Sr))
          },
          DU5k: function(rr, Sr) {
            console.error(xr(rr, Sr))
          },
          dlt8: function(rr) {
            er(rr)
          }
        }
      }
    }

    function fr(rr) {
      hr === tr.length && tr.push(tr.length + 1);
      const Sr = hr;
      return hr = tr[Sr], tr[Sr] = rr, Sr
    }
    Qr.r(Zr), Qr.d(Zr, {
      Wfr: () => Wr,
      HE: () => ar,
      default: () => Hr,
      initSync: () => Pr,
      ip: () => jr
    });
    let Er = null;

    function pr() {
      return null !== Er && Er.buffer === Lr.memory.buffer || (Er = new DataView(Lr.memory.buffer)), Er
    }

    function xr(rr, Sr) {
      return function(rr, Sr) {
        Br += Sr, Br >= yr && (Kr = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), Kr.decode(), Br = Sr);
        return Kr.decode(Nr().subarray(rr, rr + Sr))
      }(rr >>> 0, Sr)
    }
    let mr = null;

    function Nr() {
      return null !== mr && 0 !== mr.byteLength || (mr = new Uint8Array(Lr.memory.buffer)), mr
    }

    function Ur(rr) {
      return tr[rr]
    }
    let tr = new Array(1024).fill(void 0);
    tr.push(void 0, null, !0, !1);
    let hr = tr.length;

    function zr(rr) {
      return void 0 === rr || null === rr
    }

    function Yr(rr, Sr) {
      const Qr = Sr(4 * rr.length, 4) >>> 0,
        Zr = pr();
      for (let Wr = 0; Wr < rr.length; Wr++) Zr.setUint32(Qr + 4 * Wr, fr(rr[Wr]), !0);
      return lr = rr.length, Qr
    }

    function nr(rr, Sr, Qr) {
      if (void 0 === Qr) {
        const Qr = Tr.encode(rr),
          Zr = Sr(Qr.length, 1) >>> 0;
        return Nr().subarray(Zr, Zr + Qr.length).set(Qr), lr = Qr.length, Zr
      }
      let Zr = rr.length,
        Wr = Sr(Zr, 1) >>> 0;
      const ar = Nr();
      let jr = 0;
      for (; jr < Zr; jr++) {
        const Sr = rr.charCodeAt(jr);
        if (Sr > 127) break;
        ar[Wr + jr] = Sr
      }
      if (jr !== Zr) {
        0 !== jr && (rr = rr.slice(jr)), Wr = Qr(Wr, Zr, Zr = jr + 3 * rr.length, 1) >>> 0;
        const Sr = Nr().subarray(Wr + jr, Wr + Zr);
        jr += Tr.encodeInto(rr, Sr).written, Wr = Qr(Wr, Zr, jr, 1) >>> 0
      }
      return lr = jr, Wr
    }

    function er(rr) {
      const Sr = Ur(rr);
      return function(rr) {
        rr < 1028 || (tr[rr] = hr, hr = rr)
      }(rr), Sr
    }
    let Kr = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    Kr.decode();
    const yr = 2146435072;
    let Br = 0;
    const Tr = new TextEncoder;
    "encodeInto" in Tr || (Tr.encodeInto = function(rr, Sr) {
      const Qr = Tr.encode(rr);
      return Sr.set(Qr), {
        read: rr.length,
        written: Qr.length
      }
    });
    let vr, Or, Lr, lr = 0;

    function Xr(rr, Sr) {
      return Or = rr, Lr = rr.exports, vr = Sr, Er = null, mr = null, Lr.ojo3(), Lr
    }

    function Pr(rr) {
      if (void 0 !== Lr) return Lr;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module: rr
      } = rr) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Sr = Ir();
      rr instanceof WebAssembly.Module || (rr = new WebAssembly.Module(rr));
      return Xr(new WebAssembly.Instance(rr, Sr), rr)
    }
    async function Hr(rr) {
      if (void 0 !== Lr) return Lr;
      void 0 !== rr && (Object.getPrototypeOf(rr) === Object.prototype ? ({
        module_or_path: rr
      } = rr) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Sr = Ir();
      ("string" === typeof rr || "function" === typeof Request && rr instanceof Request || "function" === typeof URL && rr instanceof URL) && (rr = fetch(rr));
      const {
        instance: Qr,
        module: Zr
      } = await async function(rr, Sr) {
        if ("function" === typeof Response && rr instanceof Response) {
          if (!rr.ok) throw new Error(`failed to fetch Wasm: ${rr.status} ${rr.statusText} fetching '${rr.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(rr, Sr)
          } catch (Qr) {
            if (! function(rr) {
                switch (rr) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(rr.type) || "application/wasm" === rr.headers.get("Content-Type")) throw Qr;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Qr)
          }
          const Zr = await rr.arrayBuffer();
          return await WebAssembly.instantiate(Zr, Sr)
        } {
          const Qr = await WebAssembly.instantiate(rr, Sr);
          return Qr instanceof WebAssembly.Instance ? {
            instance: Qr,
            module: rr
          } : Qr
        }
      }(await rr, Sr);
      return Xr(Qr, Zr)
    }
    var qr = Qr(2398),
      Rr = Qr(7577);
    class gr extends Error {
      stage;
      constructor(rr, Sr) {
        super((0, qr.F)(rr, Sr), {
          cause: Sr
        }), this.name = "BloxdAnimWasmError", this.stage = rr
      }
    }
    let Cr = null,
      Mr = null;

    function Gr() {
      if (Mr) throw Mr
    }
    async function kr(rr, Sr, Wr) {
      Gr();
      const ar = await (Cr ??= (async () => {
        let rr;
        try {
          rr = await (0, qr.I)(new Qr.U(Qr(55138)), (0, Rr.c)("bloxd_wasm_anim"))
        } catch (Sr) {
          throw new gr((0, qr.M)(Sr), Sr)
        }
        try {
          await Hr({
            module_or_path: rr
          })
        } catch (Sr) {
          throw new gr("instantiate", Sr)
        }
        return Zr
      })(), Cr.catch((() => {
        Cr = null
      })), Cr);
      Gr();
      try {
        return ar.Wfr(Object.entries(rr).flat(), [...Sr.mobTypes], [...Sr.vehicleTypes], [...Sr.mobAiStates], [...Sr.playerPoses], "builtIns" in Wr ? Wr.builtIns : void 0)
      } catch (jr) {
        const rr = new gr("call", jr);
        throw jr instanceof WebAssembly.RuntimeError && (Mr = rr), rr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);