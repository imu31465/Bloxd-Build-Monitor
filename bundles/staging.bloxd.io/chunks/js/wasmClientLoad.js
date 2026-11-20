export const id = 56;
export const ids = [56];
export const modules = {
  36610: (TT, kT, cT) => {
    async function lT(TT) {
      const kT = await fetch(TT, {
        priority: "low"
      });
      if (!kT.ok) throw new Error(`Fetching ${TT} failed: HTTP ${kT.status}`);
      const cT = kT.body.getReader();
      for (; !(await cT.read()).done;);
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  40404: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      prefetchWasmClient: () => rT,
      startJoinLoad: () => ST,
      startLoadAheadOfJoin: () => aT
    });
    var lT = cT(3679),
      MT = cT(36113),
      KT = cT(40409),
      OT = cT(1082),
      yT = cT(636),
      fT = cT(40426),
      xT = (cT(40443), cT(36610)),
      IT = cT(40458),
      AT = cT(40461),
      CT = cT(40477);
    const jT = "[bloxd-wasm-client]";
    let vT = null,
      tT = null,
      hT = null,
      NT = null,
      QT = null;

    function ST() {
      return NT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const TT = await (0, AT.Y)();
        if (null === TT) return;
        if ((0, fT.l)(TT)) return (0, AT._)("none"), void DT("none");
        if ("wasm" !== (0, yT.g)(window.location.search) && null !== (0, IT.e)(TT, (0, IT.g)(TT, !0))) return (0, AT._)("none"), void DT("none");
        (0, AT._)(TT.backend);
        const kT = await TT.load();
        DT(kT.name);
        const cT = "unloaded" === (0, lT.w)();
        if (cT && (0, AT.s)(), !await (0, MT.h)(kT, KT.f)) return void console.warn(`${jT} the join's early wasm load failed: the boot loads the client itself`);
        if (!cT) return;
        const xT = (0, MT.e)(kT.name);
        void 0 !== xT ? (0, OT.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(xT.ms)
        }, {
          path: xT.path,
          build: kT.name
        }) : console.warn(`${jT} the join's wasm load left no record of how it compiled ${kT.name}`)
      })().catch((TT => {
        console.warn(`${jT} the join's early wasm load did not start: the boot loads the client itself`, TT)
      })), NT
    }

    function DT(TT) {
      null !== QT && (0, OT.logClientMeasurement)("wasm_compile_ahead", {
        hit: QT === TT ? 1 : 0
      }, {
        guessed: QT,
        loaded: TT
      })
    }

    function aT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === hT) {
        var kT;
        const cT = null !== (kT = TT.joinStarted) && void 0 !== kT ? kT : () => !1;
        hT = Promise.all([rT(TT), FT(cT)]).then((() => {}))
      }
      return hT
    }

    function FT(TT) {
      return tT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const kT = await (0, AT.m)();
        null === kT || TT() || "unloaded" !== (0, lT.w)() || (QT = kT.name, await (0, MT.b)([kT, KT.f], "low"))
      })().catch((TT => {
        console.warn(`${jT} the compile ahead of the join did not start: the join loads the client itself`, TT)
      })), tT
    }

    function rT() {
      let {
        joinStarted: TT = () => !1,
        language: kT = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return vT ??= async function(TT, kT) {
        if (!await async function(TT) {
            if (TT()) return !1;
            let kT;
            try {
              var lT;
              const TT = await fetch(`${cT.p}static/js/bcgkc.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!TT.ok) throw new Error(`HTTP ${TT.status}`);
              if (/\bno-store\b/.test(null !== (lT = TT.headers.get("Cache-Control")) && void 0 !== lT ? lT : "")) return !1;
              const MT = await TT.json();
              if (!Array.isArray(MT)) throw new Error("not a list");
              kT = MT
            } catch (KT) {
              return console.warn(`${jT} the join's chunk list did not load: the join downloads its chunks itself`, KT), !TT()
            }
            if (TT()) return !1;
            const MT = document.createElement("link").relList.supports("prefetch");
            for (const OT of kT) {
              const TT = `${cT.p}${OT}`;
              MT ? PT(TT) : (0, xT.b)(TT).catch((kT => {
                console.warn(`${jT} prefetching ${TT} failed`, kT)
              }))
            }
            return !0
          }(TT)) return;
        const lT = [(0, xT.b)((0, CT.g)())];
        (0, CT.c)(kT) && lT.push((0, xT.b)((0, CT.h)()));
        await Promise.all(lT)
      }(TT, kT).catch((TT => {
        console.warn(`${jT} the prefetch failed: the join downloads the client itself`, TT)
      })), vT
    }

    function PT(TT) {
      const kT = document.createElement("link");
      kT.rel = "prefetch", kT.href = TT, TT.endsWith(".js") && (kT.crossOrigin = "anonymous"), document.head.appendChild(kT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);