export const id = 70;
export const ids = [70];
export const modules = {
  37484: (BB, OB, GB) => {
    async function YB(BB) {
      const OB = await fetch(BB, {
        priority: "low"
      });
      if (!OB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${OB.status}`);
      const GB = OB.body.getReader();
      for (; !(await GB.read()).done;);
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  42053: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      prefetchWasmClient: () => nB,
      probeWebgl2AheadOfJoin: () => MB.R,
      startJoinLoad: () => WB,
      startLoadAheadOfJoin: () => VB
    });
    var YB = GB(3206),
      DB = GB(36912),
      QB = GB(41882),
      oB = GB(1308),
      jB = GB(41729),
      yB = (GB(41805), GB(37484)),
      JB = GB(2265),
      MB = GB(41723),
      PB = GB(41995),
      zB = GB(37009);
    const lB = "[bloxd-wasm-client]";
    let pB = null,
      qB = null,
      ZB = null,
      NB = null,
      RB = null;

    function WB() {
      return NB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const BB = await (0, MB.P)();
        if (null === BB) return;
        if ((0, jB.u)(BB)) return (0, MB.S)("none"), void AB("none");
        (0, MB.S)(BB.backend);
        const OB = await BB.load();
        AB(OB.name);
        const GB = "unloaded" === (0, YB.x)();
        if (GB && (0, MB.q)(), !await (0, PB.b)(OB)) return void console.warn(`${lB} the join's early wasm load failed: the boot loads the client itself`);
        if (!GB) return;
        const QB = (0, DB.j)(OB.name);
        void 0 !== QB ? (0, oB.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(QB.ms)
        }, {
          path: QB.path,
          build: OB.name
        }) : console.warn(`${lB} the join's wasm load left no record of how it compiled ${OB.name}`)
      })().catch((BB => {
        console.warn(`${lB} the join's early wasm load did not start: the boot loads the client itself`, BB)
      })), NB
    }

    function AB(BB) {
      null !== RB && (0, oB.logClientMeasurement)("wasm_compile_ahead", {
        hit: RB === BB ? 1 : 0
      }, {
        guessed: RB,
        loaded: BB
      })
    }

    function VB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === ZB) {
        var OB;
        const GB = null !== (OB = BB.joinStarted) && void 0 !== OB ? OB : () => !1;
        ZB = Promise.all([nB(BB), SB(GB)]).then((() => {}))
      }
      return ZB
    }

    function SB(BB) {
      return qB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const OB = await (0, MB.k)();
        null === OB || BB() || "unloaded" !== (0, YB.x)() || (RB = OB.name, await (0, DB.e)([OB, QB.e], "low"))
      })().catch((BB => {
        console.warn(`${lB} the compile ahead of the join did not start: the join loads the client itself`, BB)
      })), qB
    }

    function nB() {
      let {
        joinStarted: BB = () => !1,
        language: OB = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return pB ??= async function(BB, OB) {
        if (!await async function(BB) {
            if (BB()) return !1;
            let OB;
            try {
              var GB;
              const BB = await fetch((0, JB.f)("static/js/gw4e3a.wasmJoinFiles.json"), {
                ...JB.d,
                priority: "low"
              });
              if (BB.ok && /\bno-store\b/.test(null !== (GB = BB.headers.get("Cache-Control")) && void 0 !== GB ? GB : "")) return !1;
              OB = await (0, JB.g)(BB)
            } catch (DB) {
              return console.warn(`${lB} the join's chunk list did not load: the join downloads its chunks itself`, DB), !BB()
            }
            if (BB()) return !1;
            const YB = document.createElement("link").relList.supports("prefetch");
            for (const QB of OB) {
              const BB = (0, JB.f)(QB);
              YB ? UB(BB) : (0, yB.b)(BB).catch((OB => {
                console.warn(`${lB} prefetching ${BB} failed`, OB)
              }))
            }
            return !0
          }(BB)) return;
        const GB = [(0, yB.b)((0, zB.c)())];
        (0, zB.b)(OB) && GB.push((0, yB.b)((0, zB.e)()));
        await Promise.all(GB)
      }(BB, OB).catch((BB => {
        console.warn(`${lB} the prefetch failed: the join downloads the client itself`, BB)
      })), pB
    }

    function UB(BB) {
      const OB = document.createElement("link");
      OB.rel = "prefetch", OB.href = BB, BB.endsWith(".js") && (OB.crossOrigin = "anonymous"), document.head.appendChild(OB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);