export const id = 55;
export const ids = [55];
export const modules = {
  40145: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      prefetchWasmClient: () => IU,
      startJoinLoad: () => WU,
      startLoadAheadOfJoin: () => xU
    });
    var tU = gU(3372),
      pU = gU(35912),
      EU = gU(40150),
      PU = gU(1064),
      TU = gU(603),
      qU = gU(40166),
      KU = (gU(40186), gU(40193)),
      cU = gU(40201),
      GU = gU(40218);
    const jU = "[bloxd-wasm-client]";
    let uU = null,
      CU = null,
      hU = null,
      QU = null,
      eU = null;

    function WU() {
      return QU ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const UU = await (0, cU.P)();
        if (null === UU) return;
        if ((0, qU.k)(UU)) return (0, cU.S)("none"), void fU("none");
        if ("wasm" !== (0, TU.h)(window.location.search) && null !== (0, KU.c)(UU, (0, KU.g)(UU, !0))) return (0, cU.S)("none"), void fU("none");
        (0, cU.S)(UU.backend);
        const RU = await UU.load();
        fU(RU.name), "unloaded" === (0, tU.y)() && (0, cU.m)(), await (0, pU.f)(RU, EU.d) || console.warn(`${jU} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((UU => {
        console.warn(`${jU} the join's early wasm load did not start: the boot loads the client itself`, UU)
      })), QU
    }

    function fU(UU) {
      null !== eU && (0, PU.logClientMeasurement)("wasm_compile_ahead", {
        hit: eU === UU ? 1 : 0
      }, {
        guessed: eU,
        loaded: UU
      })
    }

    function xU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === hU) {
        var RU;
        const gU = null !== (RU = UU.joinStarted) && void 0 !== RU ? RU : () => !1;
        hU = Promise.all([IU(UU), mU(gU)]).then((() => {}))
      }
      return hU
    }

    function mU(UU) {
      return CU ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const RU = await (0, cU.h)();
        null === RU || UU() || "unloaded" !== (0, tU.y)() || (eU = RU.name, await (0, pU.b)([RU, EU.d], "low"))
      })().catch((UU => {
        console.warn(`${jU} the compile ahead of the join did not start: the join loads the client itself`, UU)
      })), CU
    }

    function IU() {
      let {
        joinStarted: UU = () => !1,
        language: RU = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return uU ??= async function(UU, RU) {
        if (!await async function(UU) {
            if (UU()) return !1;
            let RU;
            try {
              var tU;
              const UU = await fetch(`${gU.p}static/js/eulrrq.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!UU.ok) throw new Error(`HTTP ${UU.status}`);
              if (/\bno-store\b/.test(null !== (tU = UU.headers.get("Cache-Control")) && void 0 !== tU ? tU : "")) return !1;
              const pU = await UU.json();
              if (!Array.isArray(pU)) throw new Error("not a list");
              RU = pU
            } catch (EU) {
              return console.warn(`${jU} the join's chunk list did not load: the join downloads its chunks itself`, EU), !UU()
            }
            if (UU()) return !1;
            const pU = document.createElement("link").relList.supports("prefetch");
            for (const PU of RU) {
              const UU = `${gU.p}${PU}`;
              pU ? JU(UU) : wU(UU).catch((RU => {
                console.warn(`${jU} prefetching ${UU} failed`, RU)
              }))
            }
            return !0
          }(UU)) return;
        const tU = [wU((0, GU.f)())];
        (0, GU.e)(RU) && tU.push(wU((0, GU.g)()));
        await Promise.all(tU)
      }(UU, RU).catch((UU => {
        console.warn(`${jU} the prefetch failed: the join downloads the client itself`, UU)
      })), uU
    }

    function JU(UU) {
      const RU = document.createElement("link");
      RU.rel = "prefetch", RU.href = UU, UU.endsWith(".js") && (RU.crossOrigin = "anonymous"), document.head.appendChild(RU)
    }
    async function wU(UU) {
      const RU = await fetch(UU, {
        priority: "low"
      });
      if (!RU.ok) throw new Error(`Fetching ${UU} failed: HTTP ${RU.status}`);
      const gU = RU.body.getReader();
      for (; !(await gU.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);