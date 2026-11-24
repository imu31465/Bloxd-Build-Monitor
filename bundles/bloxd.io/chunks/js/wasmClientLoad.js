export const id = 58;
export const ids = [58];
export const modules = {
  36814: (SS, HS, gS) => {
    async function tS(SS) {
      const HS = await fetch(SS, {
        priority: "low"
      });
      if (!HS.ok) throw new Error(`Fetching ${SS} failed: HTTP ${HS.status}`);
      const gS = HS.body.getReader();
      for (; !(await gS.read()).done;);
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  41066: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      prefetchWasmClient: () => ZS,
      startJoinLoad: () => QS,
      startLoadAheadOfJoin: () => wS
    });
    var tS = gS(3021),
      bS = gS(36322),
      XS = gS(40889),
      xS = gS(1149),
      NS = gS(699),
      qS = gS(40755),
      uS = (gS(40805), gS(36814)),
      IS = gS(40770),
      fS = gS(40748),
      kS = gS(41005),
      aS = gS(40876);
    const KS = "[bloxd-wasm-client]";
    let jS = null,
      GS = null,
      CS = null,
      nS = null,
      PS = null;

    function QS() {
      return nS ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const SS = await (0, fS.P)();
        if (null === SS) return;
        if ((0, qS.m)(SS)) return (0, fS.S)("none"), void DS("none");
        if ("wasm" !== (0, NS.g)(window.location.search) && null !== (0, IS.b)(SS, (0, IS.f)(SS))) return (0, fS.S)("none"), void DS("none");
        (0, fS.S)(SS.backend);
        const HS = await SS.load();
        DS(HS.name);
        const gS = "unloaded" === (0, tS.F)();
        if (gS && (0, fS.p)(), !await (0, kS.e)(HS)) return void console.warn(`${KS} the join's early wasm load failed: the boot loads the client itself`);
        if (!gS) return;
        const XS = (0, bS.g)(HS.name);
        void 0 !== XS ? (0, xS.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(XS.ms)
        }, {
          path: XS.path,
          build: HS.name
        }) : console.warn(`${KS} the join's wasm load left no record of how it compiled ${HS.name}`)
      })().catch((SS => {
        console.warn(`${KS} the join's early wasm load did not start: the boot loads the client itself`, SS)
      })), nS
    }

    function DS(SS) {
      null !== PS && (0, xS.logClientMeasurement)("wasm_compile_ahead", {
        hit: PS === SS ? 1 : 0
      }, {
        guessed: PS,
        loaded: SS
      })
    }

    function wS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === CS) {
        var HS;
        const gS = null !== (HS = SS.joinStarted) && void 0 !== HS ? HS : () => !1;
        CS = Promise.all([ZS(SS), hS(gS)]).then((() => {}))
      }
      return CS
    }

    function hS(SS) {
      return GS ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const HS = await (0, fS.k)();
        null === HS || SS() || "unloaded" !== (0, tS.F)() || (PS = HS.name, await (0, bS.b)([HS, XS.h], "low"))
      })().catch((SS => {
        console.warn(`${KS} the compile ahead of the join did not start: the join loads the client itself`, SS)
      })), GS
    }

    function ZS() {
      let {
        joinStarted: SS = () => !1,
        language: HS = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return jS ??= async function(SS, HS) {
        if (!await async function(SS) {
            if (SS()) return !1;
            let HS;
            try {
              var tS;
              const SS = await fetch(`${gS.p}static/js/fqwnlq.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!SS.ok) throw new Error(`HTTP ${SS.status}`);
              if (/\bno-store\b/.test(null !== (tS = SS.headers.get("Cache-Control")) && void 0 !== tS ? tS : "")) return !1;
              const bS = await SS.json();
              if (!Array.isArray(bS)) throw new Error("not a list");
              HS = bS
            } catch (XS) {
              return console.warn(`${KS} the join's chunk list did not load: the join downloads its chunks itself`, XS), !SS()
            }
            if (SS()) return !1;
            const bS = document.createElement("link").relList.supports("prefetch");
            for (const xS of HS) {
              const SS = `${gS.p}${xS}`;
              bS ? JS(SS) : (0, uS.e)(SS).catch((HS => {
                console.warn(`${KS} prefetching ${SS} failed`, HS)
              }))
            }
            return !0
          }(SS)) return;
        const tS = [(0, uS.e)((0, aS.h)())];
        (0, aS.e)(HS) && tS.push((0, uS.e)((0, aS.k)()));
        await Promise.all(tS)
      }(SS, HS).catch((SS => {
        console.warn(`${KS} the prefetch failed: the join downloads the client itself`, SS)
      })), jS
    }

    function JS(SS) {
      const HS = document.createElement("link");
      HS.rel = "prefetch", HS.href = SS, SS.endsWith(".js") && (HS.crossOrigin = "anonymous"), document.head.appendChild(HS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);