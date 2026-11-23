export const id = 58;
export const ids = [58];
export const modules = {
  36664: (CC, zC, ZC) => {
    async function QC(CC) {
      const zC = await fetch(CC, {
        priority: "low"
      });
      if (!zC.ok) throw new Error(`Fetching ${CC} failed: HTTP ${zC.status}`);
      const ZC = zC.body.getReader();
      for (; !(await ZC.read()).done;);
    }
    ZC.d(zC, {
      c: () => QC
    })
  },
  40885: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      prefetchWasmClient: () => iC,
      startJoinLoad: () => AC,
      startLoadAheadOfJoin: () => JC
    });
    var QC = ZC(2848),
      wC = ZC(36201),
      bC = ZC(40697),
      nC = ZC(1029),
      fC = ZC(615),
      oC = ZC(40542),
      qC = (ZC(40598), ZC(36664)),
      FC = ZC(40561),
      WC = ZC(40540),
      NC = ZC(40810),
      MC = ZC(40677);
    const gC = "[bloxd-wasm-client]";
    let SC = null,
      pC = null,
      PC = null,
      GC = null,
      RC = null;

    function AC() {
      return GC ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const CC = await (0, WC.P)();
        if (null === CC) return;
        if ((0, oC.q)(CC)) return (0, WC.S)("none"), void xC("none");
        if ("wasm" !== (0, fC.h)(window.location.search) && null !== (0, FC.e)(CC, (0, FC.g)(CC))) return (0, WC.S)("none"), void xC("none");
        (0, WC.S)(CC.backend);
        const zC = await CC.load();
        xC(zC.name);
        const ZC = "unloaded" === (0, QC.y)();
        if (ZC && (0, WC.m)(), !await (0, NC.b)(zC)) return void console.warn(`${gC} the join's early wasm load failed: the boot loads the client itself`);
        if (!ZC) return;
        const bC = (0, wC.g)(zC.name);
        void 0 !== bC ? (0, nC.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(bC.ms)
        }, {
          path: bC.path,
          build: zC.name
        }) : console.warn(`${gC} the join's wasm load left no record of how it compiled ${zC.name}`)
      })().catch((CC => {
        console.warn(`${gC} the join's early wasm load did not start: the boot loads the client itself`, CC)
      })), GC
    }

    function xC(CC) {
      null !== RC && (0, nC.logClientMeasurement)("wasm_compile_ahead", {
        hit: RC === CC ? 1 : 0
      }, {
        guessed: RC,
        loaded: CC
      })
    }

    function JC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === PC) {
        var zC;
        const ZC = null !== (zC = CC.joinStarted) && void 0 !== zC ? zC : () => !1;
        PC = Promise.all([iC(CC), IC(ZC)]).then((() => {}))
      }
      return PC
    }

    function IC(CC) {
      return pC ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const zC = await (0, WC.h)();
        null === zC || CC() || "unloaded" !== (0, QC.y)() || (RC = zC.name, await (0, wC.b)([zC, bC.e], "low"))
      })().catch((CC => {
        console.warn(`${gC} the compile ahead of the join did not start: the join loads the client itself`, CC)
      })), pC
    }

    function iC() {
      let {
        joinStarted: CC = () => !1,
        language: zC = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return SC ??= async function(CC, zC) {
        if (!await async function(CC) {
            if (CC()) return !1;
            let zC;
            try {
              var QC;
              const CC = await fetch(`${ZC.p}static/js/w4ddu.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!CC.ok) throw new Error(`HTTP ${CC.status}`);
              if (/\bno-store\b/.test(null !== (QC = CC.headers.get("Cache-Control")) && void 0 !== QC ? QC : "")) return !1;
              const wC = await CC.json();
              if (!Array.isArray(wC)) throw new Error("not a list");
              zC = wC
            } catch (bC) {
              return console.warn(`${gC} the join's chunk list did not load: the join downloads its chunks itself`, bC), !CC()
            }
            if (CC()) return !1;
            const wC = document.createElement("link").relList.supports("prefetch");
            for (const nC of zC) {
              const CC = `${ZC.p}${nC}`;
              wC ? vC(CC) : (0, qC.c)(CC).catch((zC => {
                console.warn(`${gC} prefetching ${CC} failed`, zC)
              }))
            }
            return !0
          }(CC)) return;
        const QC = [(0, qC.c)((0, MC.f)())];
        (0, MC.e)(zC) && QC.push((0, qC.c)((0, MC.j)()));
        await Promise.all(QC)
      }(CC, zC).catch((CC => {
        console.warn(`${gC} the prefetch failed: the join downloads the client itself`, CC)
      })), SC
    }

    function vC(CC) {
      const zC = document.createElement("link");
      zC.rel = "prefetch", zC.href = CC, CC.endsWith(".js") && (zC.crossOrigin = "anonymous"), document.head.appendChild(zC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);