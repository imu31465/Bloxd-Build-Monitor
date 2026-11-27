export const id = 71;
export const ids = [71];
export const modules = {
  37908: (rr, Sr, Qr) => {
    async function Zr(rr) {
      const Sr = await fetch(rr, {
        priority: "low"
      });
      if (!Sr.ok) throw new Error(`Fetching ${rr} failed: HTTP ${Sr.status}`);
      const Qr = Sr.body.getReader();
      for (; !(await Qr.read()).done;);
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  42541: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      prefetchWasmClient: () => Br,
      probeWebgl2AheadOfJoin: () => pr.I,
      startJoinLoad: () => nr,
      startLoadAheadOfJoin: () => Kr
    });
    var Zr = Qr(2396),
      Wr = Qr(37566),
      ar = Qr(42550),
      jr = Qr(1371),
      Ir = Qr(42559),
      fr = (Qr(42589), Qr(37908)),
      Er = Qr(2318),
      pr = Qr(42598),
      xr = Qr(42715),
      mr = Qr(37748);
    const Nr = "[bloxd-wasm-client]";
    let Ur = null,
      tr = null,
      hr = null,
      zr = null,
      Yr = null;

    function nr() {
      return zr ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const rr = await (0, pr.H)();
        if (null === rr) return;
        if ((0, Ir.p)(rr)) return (0, pr.L)("none"), void er("none");
        (0, pr.L)(rr.backend);
        const Sr = await rr.load();
        er(Sr.name);
        const Qr = "unloaded" === (0, Zr.y)();
        if (Qr && (0, pr.j)(), !await (0, xr.e)(Sr)) return void console.warn(`${Nr} the join's early wasm load failed: the boot loads the client itself`);
        if (!Qr) return;
        const ar = (0, Wr.l)(Sr.name);
        void 0 !== ar ? (0, jr.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(ar.ms)
        }, {
          path: ar.path,
          build: Sr.name
        }) : console.warn(`${Nr} the join's wasm load left no record of how it compiled ${Sr.name}`)
      })().catch((rr => {
        console.warn(`${Nr} the join's early wasm load did not start: the boot loads the client itself`, rr)
      })), zr
    }

    function er(rr) {
      null !== Yr && (0, jr.logClientMeasurement)("wasm_compile_ahead", {
        hit: Yr === rr ? 1 : 0
      }, {
        guessed: Yr,
        loaded: rr
      })
    }

    function Kr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === hr) {
        var Sr;
        const Qr = null !== (Sr = rr.joinStarted) && void 0 !== Sr ? Sr : () => !1;
        hr = Promise.all([Br(rr), yr(Qr)]).then((() => {}))
      }
      return hr
    }

    function yr(rr) {
      return tr ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Sr = await (0, pr.f)();
        null === Sr || rr() || "unloaded" !== (0, Zr.y)() || (Yr = Sr.name, await (0, Wr.e)([Sr, ar.i], "low"))
      })().catch((rr => {
        console.warn(`${Nr} the compile ahead of the join did not start: the join loads the client itself`, rr)
      })), tr
    }

    function Br() {
      let {
        joinStarted: rr = () => !1,
        language: Sr = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ur ??= async function(rr, Sr) {
        if (!await async function(rr) {
            if (rr()) return !1;
            let Sr;
            try {
              var Qr;
              const rr = await fetch((0, Er.c)("static/js/fl4vv.wasmJoinFiles.json"), {
                ...Er.b,
                priority: "low"
              });
              if (rr.ok && /\bno-store\b/.test(null !== (Qr = rr.headers.get("Cache-Control")) && void 0 !== Qr ? Qr : "")) return !1;
              Sr = await (0, Er.d)(rr)
            } catch (Wr) {
              return console.warn(`${Nr} the join's chunk list did not load: the join downloads its chunks itself`, Wr), !rr()
            }
            if (rr()) return !1;
            const Zr = document.createElement("link").relList.supports("prefetch");
            for (const ar of Sr) {
              const rr = (0, Er.c)(ar);
              Zr ? Tr(rr) : (0, fr.e)(rr).catch((Sr => {
                console.warn(`${Nr} prefetching ${rr} failed`, Sr)
              }))
            }
            return !0
          }(rr)) return;
        const Qr = [(0, fr.e)((0, mr.c)())];
        (0, mr.b)(Sr) && Qr.push((0, fr.e)((0, mr.e)()));
        await Promise.all(Qr)
      }(rr, Sr).catch((rr => {
        console.warn(`${Nr} the prefetch failed: the join downloads the client itself`, rr)
      })), Ur
    }

    function Tr(rr) {
      const Sr = document.createElement("link");
      Sr.rel = "prefetch", Sr.href = rr, rr.endsWith(".js") && (Sr.crossOrigin = "anonymous"), document.head.appendChild(Sr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);