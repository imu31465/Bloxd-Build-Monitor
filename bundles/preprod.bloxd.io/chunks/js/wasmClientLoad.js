export const id = 71;
export const ids = [71];
export const modules = {
  37606: (WW, iW, OW) => {
    async function mW(WW) {
      const iW = await fetch(WW, {
        priority: "low"
      });
      if (!iW.ok) throw new Error(`Fetching ${WW} failed: HTTP ${iW.status}`);
      const OW = iW.body.getReader();
      for (; !(await OW.read()).done;);
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  42198: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      prefetchWasmClient: () => YW,
      probeWebgl2AheadOfJoin: () => tW.K,
      startJoinLoad: () => sW,
      startLoadAheadOfJoin: () => KW
    });
    var mW = OW(2381),
      EW = OW(37297),
      NW = OW(42202),
      PW = OW(1303),
      LW = OW(42216),
      cW = (OW(42244), OW(37606)),
      wW = OW(2296),
      tW = OW(42255),
      ZW = OW(42362),
      xW = OW(37446);
    const lW = "[bloxd-wasm-client]";
    let AW = null,
      bW = null,
      jW = null,
      UW = null,
      kW = null;

    function sW() {
      return UW ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const WW = await (0, tW.J)();
        if (null === WW) return;
        if ((0, LW.r)(WW)) return (0, tW.L)("none"), void MW("none");
        (0, tW.L)(WW.backend);
        const iW = await WW.load();
        MW(iW.name);
        const OW = "unloaded" === (0, mW.D)();
        if (OW && (0, tW.n)(), !await (0, ZW.c)(iW)) return void console.warn(`${lW} the join's early wasm load failed: the boot loads the client itself`);
        if (!OW) return;
        const NW = (0, EW.n)(iW.name);
        void 0 !== NW ? (0, PW.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(NW.ms)
        }, {
          path: NW.path,
          build: iW.name
        }) : console.warn(`${lW} the join's wasm load left no record of how it compiled ${iW.name}`)
      })().catch((WW => {
        console.warn(`${lW} the join's early wasm load did not start: the boot loads the client itself`, WW)
      })), UW
    }

    function MW(WW) {
      null !== kW && (0, PW.logClientMeasurement)("wasm_compile_ahead", {
        hit: kW === WW ? 1 : 0
      }, {
        guessed: kW,
        loaded: WW
      })
    }

    function KW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === jW) {
        var iW;
        const OW = null !== (iW = WW.joinStarted) && void 0 !== iW ? iW : () => !1;
        jW = Promise.all([YW(WW), SW(OW)]).then((() => {}))
      }
      return jW
    }

    function SW(WW) {
      return bW ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const iW = await (0, tW.h)();
        null === iW || WW() || "unloaded" !== (0, mW.D)() || (kW = iW.name, await (0, EW.e)([iW, NW.d], "low"))
      })().catch((WW => {
        console.warn(`${lW} the compile ahead of the join did not start: the join loads the client itself`, WW)
      })), bW
    }

    function YW() {
      let {
        joinStarted: WW = () => !1,
        language: iW = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return AW ??= async function(WW, iW) {
        if (!await async function(WW) {
            if (WW()) return !1;
            let iW;
            try {
              var OW;
              const WW = await fetch((0, wW.g)("static/js/1yqdn.wasmJoinFiles.json"), {
                ...wW.d,
                priority: "low"
              });
              if (WW.ok && /\bno-store\b/.test(null !== (OW = WW.headers.get("Cache-Control")) && void 0 !== OW ? OW : "")) return !1;
              iW = await (0, wW.j)(WW)
            } catch (EW) {
              return console.warn(`${lW} the join's chunk list did not load: the join downloads its chunks itself`, EW), !WW()
            }
            if (WW()) return !1;
            const mW = document.createElement("link").relList.supports("prefetch");
            for (const NW of iW) {
              const WW = (0, wW.g)(NW);
              mW ? yW(WW) : (0, cW.d)(WW).catch((iW => {
                console.warn(`${lW} prefetching ${WW} failed`, iW)
              }))
            }
            return !0
          }(WW)) return;
        const OW = [(0, cW.d)((0, xW.d)())];
        (0, xW.b)(iW) && OW.push((0, cW.d)((0, xW.h)()));
        await Promise.all(OW)
      }(WW, iW).catch((WW => {
        console.warn(`${lW} the prefetch failed: the join downloads the client itself`, WW)
      })), AW
    }

    function yW(WW) {
      const iW = document.createElement("link");
      iW.rel = "prefetch", iW.href = WW, WW.endsWith(".js") && (iW.crossOrigin = "anonymous"), document.head.appendChild(iW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);