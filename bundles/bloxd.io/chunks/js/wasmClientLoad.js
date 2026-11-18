export const id = 51;
export const ids = [51];
export const modules = {
  39512: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      prefetchWasmClient: () => vJ,
      startGamePageLoad: () => xJ,
      startJoinLoad: () => fJ
    });
    var FJ = ZJ(3178),
      UJ = ZJ(35441),
      eJ = ZJ(35447),
      XJ = ZJ(39516),
      AJ = ZJ(547),
      qJ = ZJ(39529),
      jJ = ZJ(39548),
      YJ = ZJ(39555),
      hJ = ZJ(39580);
    const DJ = "[bloxd-wasm-client]";
    let sJ = null,
      nJ = null,
      GJ = !1;

    function fJ() {
      return GJ = !0, rJ()
    }

    function xJ() {
      return rJ()
    }

    function rJ() {
      return nJ ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const JJ = await (0, YJ.O)();
        if (null === JJ || (0, qJ.t)(JJ)) return;
        if ("wasm" !== (0, AJ.h)(window.location.search) && null !== (0, jJ.b)(JJ)) return;
        const cJ = await JJ.load();
        GJ && "unloaded" === (0, FJ.B)() && (0, YJ.o)(), await (0, UJ.i)(cJ, XJ.g, GJ ? void 0 : {
          priority: "low"
        })
      })().catch((JJ => {
        console.warn(`${DJ} the early wasm load did not start: the boot loads the client itself`, JJ)
      })), nJ
    }

    function vJ() {
      let {
        joinStarted: JJ = () => !1,
        language: cJ = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return sJ ??= async function(JJ, cJ) {
        if (!await async function(JJ) {
            if (JJ()) return !1;
            let cJ;
            try {
              var FJ;
              const JJ = await fetch(`${ZJ.p}static/js/symm5.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!JJ.ok) throw new Error(`HTTP ${JJ.status}`);
              if (/\bno-store\b/.test(null !== (FJ = JJ.headers.get("Cache-Control")) && void 0 !== FJ ? FJ : "")) return !1;
              const UJ = await JJ.json();
              if (!Array.isArray(UJ)) throw new Error("not a list");
              cJ = UJ
            } catch (eJ) {
              return console.warn(`${DJ} the join's chunk list did not load: the join downloads its chunks itself`, eJ), !JJ()
            }
            if (JJ()) return !1;
            const UJ = document.createElement("link").relList.supports("prefetch");
            for (const XJ of cJ) {
              const JJ = `${ZJ.p}${XJ}`;
              UJ ? mJ(JJ) : QJ(JJ).catch((cJ => {
                console.warn(`${DJ} prefetching ${JJ} failed`, cJ)
              }))
            }
            return !0
          }(JJ)) return;
        const UJ = [QJ((0, hJ.c)())];
        (0, hJ.b)(cJ) && UJ.push(QJ((0, hJ.e)()));
        "unloaded" === (0, FJ.B)() && UJ.push(QJ((0, eJ.b)(XJ.g)), (0, YJ.k)().then((cJ => {
          if (null === cJ || "unloaded" !== (0, FJ.B)() || JJ()) return;
          const ZJ = new AbortController;
          return cJ.superseded.then((() => {
            ZJ.abort()
          })), QJ((0, eJ.b)(cJ.build), ZJ.signal).catch((JJ => {
            if (!ZJ.signal.aborted) throw JJ
          }))
        })));
        await Promise.all(UJ)
      }(JJ, cJ).catch((JJ => {
        console.warn(`${DJ} the prefetch failed: the join downloads the client itself`, JJ)
      })), sJ
    }

    function mJ(JJ) {
      const cJ = document.createElement("link");
      cJ.rel = "prefetch", cJ.href = JJ, JJ.endsWith(".js") && (cJ.crossOrigin = "anonymous"), document.head.appendChild(cJ)
    }
    async function QJ(JJ, cJ) {
      const ZJ = await fetch(JJ, {
        priority: "low",
        signal: cJ
      });
      if (!ZJ.ok) throw new Error(`Fetching ${JJ} failed: HTTP ${ZJ.status}`);
      const FJ = ZJ.body.getReader();
      for (; !(await FJ.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);