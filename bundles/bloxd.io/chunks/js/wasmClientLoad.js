export const id = 70;
export const ids = [70];
export const modules = {
  37652: (HH, BH, LH) => {
    async function AH(HH) {
      const BH = await fetch(HH, {
        priority: "low"
      });
      if (!BH.ok) throw new Error(`Fetching ${HH} failed: HTTP ${BH.status}`);
      const LH = BH.body.getReader();
      for (; !(await LH.read()).done;);
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  42355: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      prefetchWasmClient: () => VH,
      probeWebgl2AheadOfJoin: () => EH.S,
      startJoinLoad: () => vH,
      startLoadAheadOfJoin: () => TH
    });
    var AH = LH(3168),
      rH = LH(37083),
      SH = LH(42172),
      hH = LH(1260),
      tH = LH(42034),
      zH = (LH(42101), LH(37652)),
      CH = LH(2224),
      EH = LH(42032),
      XH = LH(42295),
      GH = LH(37177);
    const YH = "[bloxd-wasm-client]";
    let uH = null,
      QH = null,
      WH = null,
      MH = null,
      xH = null;

    function vH() {
      return MH ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const HH = await (0, EH.R)();
        if (null === HH) return;
        if ((0, tH.k)(HH)) return (0, EH.W)("none"), void PH("none");
        (0, EH.W)(HH.backend);
        const BH = await HH.load();
        PH(BH.name);
        const LH = "unloaded" === (0, AH.B)();
        if (LH && (0, EH.o)(), !await (0, XH.d)(BH)) return void console.warn(`${YH} the join's early wasm load failed: the boot loads the client itself`);
        if (!LH) return;
        const SH = (0, rH.k)(BH.name);
        void 0 !== SH ? (0, hH.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(SH.ms)
        }, {
          path: SH.path,
          build: BH.name
        }) : console.warn(`${YH} the join's wasm load left no record of how it compiled ${BH.name}`)
      })().catch((HH => {
        console.warn(`${YH} the join's early wasm load did not start: the boot loads the client itself`, HH)
      })), MH
    }

    function PH(HH) {
      null !== xH && (0, hH.logClientMeasurement)("wasm_compile_ahead", {
        hit: xH === HH ? 1 : 0
      }, {
        guessed: xH,
        loaded: HH
      })
    }

    function TH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === WH) {
        var BH;
        const LH = null !== (BH = HH.joinStarted) && void 0 !== BH ? BH : () => !1;
        WH = Promise.all([VH(HH), UH(LH)]).then((() => {}))
      }
      return WH
    }

    function UH(HH) {
      return QH ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const BH = await (0, EH.j)();
        null === BH || HH() || "unloaded" !== (0, AH.B)() || (xH = BH.name, await (0, rH.d)([BH, SH.e], "low"))
      })().catch((HH => {
        console.warn(`${YH} the compile ahead of the join did not start: the join loads the client itself`, HH)
      })), QH
    }

    function VH() {
      let {
        joinStarted: HH = () => !1,
        language: BH = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return uH ??= async function(HH, BH) {
        if (!await async function(HH) {
            if (HH()) return !1;
            let BH;
            try {
              var LH;
              const HH = await fetch((0, CH.c)("static/js/cwj32u.wasmJoinFiles.json"), {
                ...CH.b,
                priority: "low"
              });
              if (HH.ok && /\bno-store\b/.test(null !== (LH = HH.headers.get("Cache-Control")) && void 0 !== LH ? LH : "")) return !1;
              BH = await (0, CH.d)(HH)
            } catch (rH) {
              return console.warn(`${YH} the join's chunk list did not load: the join downloads its chunks itself`, rH), !HH()
            }
            if (HH()) return !1;
            const AH = document.createElement("link").relList.supports("prefetch");
            for (const SH of BH) {
              const HH = (0, CH.c)(SH);
              AH ? OH(HH) : (0, zH.c)(HH).catch((BH => {
                console.warn(`${YH} prefetching ${HH} failed`, BH)
              }))
            }
            return !0
          }(HH)) return;
        const LH = [(0, zH.c)((0, GH.h)())];
        (0, GH.e)(BH) && LH.push((0, zH.c)((0, GH.k)()));
        await Promise.all(LH)
      }(HH, BH).catch((HH => {
        console.warn(`${YH} the prefetch failed: the join downloads the client itself`, HH)
      })), uH
    }

    function OH(HH) {
      const BH = document.createElement("link");
      BH.rel = "prefetch", BH.href = HH, HH.endsWith(".js") && (BH.crossOrigin = "anonymous"), document.head.appendChild(BH)
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);