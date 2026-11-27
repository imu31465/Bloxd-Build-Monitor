export const id = 71;
export const ids = [71];
export const modules = {
  37520: (RR, JR, GR) => {
    async function yR(RR) {
      const JR = await fetch(RR, {
        priority: "low"
      });
      if (!JR.ok) throw new Error(`Fetching ${RR} failed: HTTP ${JR.status}`);
      const GR = JR.body.getReader();
      for (; !(await GR.read()).done;);
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  42208: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      prefetchWasmClient: () => MR,
      probeWebgl2AheadOfJoin: () => VR._,
      startJoinLoad: () => WR,
      startLoadAheadOfJoin: () => CR
    });
    var yR = GR(2448),
      tR = GR(37213),
      uR = GR(42212),
      ZR = GR(1406),
      qR = GR(42230),
      iR = (GR(42265), GR(37520)),
      fR = GR(2372),
      VR = GR(42281),
      KR = GR(42379),
      wR = GR(37362);
    const rR = "[bloxd-wasm-client]";
    let eR = null,
      aR = null,
      LR = null,
      nR = null,
      UR = null;

    function WR() {
      return nR ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const RR = await (0, VR.W)();
        if (null === RR) return;
        if ((0, qR.o)(RR)) return (0, VR.bb)("none"), void AR("none");
        (0, VR.bb)(RR.backend);
        const JR = await RR.load();
        AR(JR.name);
        const GR = "unloaded" === (0, yR.s)();
        if (GR && (0, VR.r)(), !await (0, KR.e)(JR)) return void console.warn(`${rR} the join's early wasm load failed: the boot loads the client itself`);
        if (!GR) return;
        const uR = (0, tR.o)(JR.name);
        void 0 !== uR ? (0, ZR.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(uR.ms)
        }, {
          path: uR.path,
          build: JR.name
        }) : console.warn(`${rR} the join's wasm load left no record of how it compiled ${JR.name}`)
      })().catch((RR => {
        console.warn(`${rR} the join's early wasm load did not start: the boot loads the client itself`, RR)
      })), nR
    }

    function AR(RR) {
      null !== UR && (0, ZR.logClientMeasurement)("wasm_compile_ahead", {
        hit: UR === RR ? 1 : 0
      }, {
        guessed: UR,
        loaded: RR
      })
    }

    function CR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === LR) {
        var JR;
        const GR = null !== (JR = RR.joinStarted) && void 0 !== JR ? JR : () => !1;
        LR = Promise.all([MR(RR), XR(GR)]).then((() => {}))
      }
      return LR
    }

    function XR(RR) {
      return aR ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const JR = await (0, VR.j)();
        null === JR || RR() || "unloaded" !== (0, yR.s)() || (UR = JR.name, await (0, tR.e)([JR, uR.d], "low"))
      })().catch((RR => {
        console.warn(`${rR} the compile ahead of the join did not start: the join loads the client itself`, RR)
      })), aR
    }

    function MR() {
      let {
        joinStarted: RR = () => !1,
        language: JR = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return eR ??= async function(RR, JR) {
        if (!await async function(RR) {
            if (RR()) return !1;
            let JR;
            try {
              var GR;
              const RR = await fetch((0, fR.h)("static/js/4udp6d.wasmJoinFiles.json"), {
                ...fR.d,
                priority: "low"
              });
              if (RR.ok && /\bno-store\b/.test(null !== (GR = RR.headers.get("Cache-Control")) && void 0 !== GR ? GR : "")) return !1;
              JR = await (0, fR.k)(RR)
            } catch (tR) {
              return console.warn(`${rR} the join's chunk list did not load: the join downloads its chunks itself`, tR), !RR()
            }
            if (RR()) return !1;
            const yR = document.createElement("link").relList.supports("prefetch");
            for (const uR of JR) {
              const RR = (0, fR.h)(uR);
              yR ? BR(RR) : (0, iR.b)(RR).catch((JR => {
                console.warn(`${rR} prefetching ${RR} failed`, JR)
              }))
            }
            return !0
          }(RR)) return;
        const GR = [(0, iR.b)((0, wR.f)())];
        (0, wR.c)(JR) && GR.push((0, iR.b)((0, wR.j)()));
        await Promise.all(GR)
      }(RR, JR).catch((RR => {
        console.warn(`${rR} the prefetch failed: the join downloads the client itself`, RR)
      })), eR
    }

    function BR(RR) {
      const JR = document.createElement("link");
      JR.rel = "prefetch", JR.href = RR, RR.endsWith(".js") && (JR.crossOrigin = "anonymous"), document.head.appendChild(JR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);