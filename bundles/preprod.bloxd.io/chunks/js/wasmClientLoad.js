export const id = 70;
export const ids = [70];
export const modules = {
  37514: (UU, XU, zU) => {
    async function cU(UU) {
      const XU = await fetch(UU, {
        priority: "low"
      });
      if (!XU.ok) throw new Error(`Fetching ${UU} failed: HTTP ${XU.status}`);
      const zU = XU.body.getReader();
      for (; !(await zU.read()).done;);
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  42151: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      prefetchWasmClient: () => PU,
      probeWebgl2AheadOfJoin: () => EU.R,
      startJoinLoad: () => GU,
      startLoadAheadOfJoin: () => ZU
    });
    var cU = zU(3169),
      yU = zU(37014),
      QU = zU(41959),
      AU = zU(1325),
      FU = zU(41795),
      oU = (zU(41865), zU(37514)),
      DU = zU(2217),
      EU = zU(41786),
      YU = zU(42084),
      NU = zU(41947);
    const IU = "[bloxd-wasm-client]";
    let pU = null,
      aU = null,
      tU = null,
      gU = null,
      kU = null;

    function GU() {
      return gU ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const UU = await (0, EU.N)();
        if (null === UU) return;
        if ((0, FU.r)(UU)) return (0, EU.T)("none"), void BU("none");
        (0, EU.T)(UU.backend);
        const XU = await UU.load();
        BU(XU.name);
        const zU = "unloaded" === (0, cU.A)();
        if (zU && (0, EU.l)(), !await (0, YU.e)(XU)) return void console.warn(`${IU} the join's early wasm load failed: the boot loads the client itself`);
        if (!zU) return;
        const QU = (0, yU.k)(XU.name);
        void 0 !== QU ? (0, AU.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(QU.ms)
        }, {
          path: QU.path,
          build: XU.name
        }) : console.warn(`${IU} the join's wasm load left no record of how it compiled ${XU.name}`)
      })().catch((UU => {
        console.warn(`${IU} the join's early wasm load did not start: the boot loads the client itself`, UU)
      })), gU
    }

    function BU(UU) {
      null !== kU && (0, AU.logClientMeasurement)("wasm_compile_ahead", {
        hit: kU === UU ? 1 : 0
      }, {
        guessed: kU,
        loaded: UU
      })
    }

    function ZU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === tU) {
        var XU;
        const zU = null !== (XU = UU.joinStarted) && void 0 !== XU ? XU : () => !1;
        tU = Promise.all([PU(UU), RU(zU)]).then((() => {}))
      }
      return tU
    }

    function RU(UU) {
      return aU ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const XU = await (0, EU.i)();
        null === XU || UU() || "unloaded" !== (0, cU.A)() || (kU = XU.name, await (0, yU.e)([XU, QU.g], "low"))
      })().catch((UU => {
        console.warn(`${IU} the compile ahead of the join did not start: the join loads the client itself`, UU)
      })), aU
    }

    function PU() {
      let {
        joinStarted: UU = () => !1,
        language: XU = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return pU ??= async function(UU, XU) {
        if (!await async function(UU) {
            if (UU()) return !1;
            let XU;
            try {
              var zU;
              const UU = await fetch((0, DU.f)("static/js/fecih8.wasmJoinFiles.json"), {
                ...DU.d,
                priority: "low"
              });
              if (UU.ok && /\bno-store\b/.test(null !== (zU = UU.headers.get("Cache-Control")) && void 0 !== zU ? zU : "")) return !1;
              XU = await (0, DU.g)(UU)
            } catch (yU) {
              return console.warn(`${IU} the join's chunk list did not load: the join downloads its chunks itself`, yU), !UU()
            }
            if (UU()) return !1;
            const cU = document.createElement("link").relList.supports("prefetch");
            for (const QU of XU) {
              const UU = (0, DU.f)(QU);
              cU ? WU(UU) : (0, oU.c)(UU).catch((XU => {
                console.warn(`${IU} prefetching ${UU} failed`, XU)
              }))
            }
            return !0
          }(UU)) return;
        const zU = [(0, oU.c)((0, NU.e)())];
        (0, NU.d)(XU) && zU.push((0, oU.c)((0, NU.f)()));
        await Promise.all(zU)
      }(UU, XU).catch((UU => {
        console.warn(`${IU} the prefetch failed: the join downloads the client itself`, UU)
      })), pU
    }

    function WU(UU) {
      const XU = document.createElement("link");
      XU.rel = "prefetch", XU.href = UU, UU.endsWith(".js") && (XU.crossOrigin = "anonymous"), document.head.appendChild(XU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);