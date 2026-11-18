export const id = 51;
export const ids = [51];
export const modules = {
  39476: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      prefetchWasmClient: () => mB,
      startGamePageLoad: () => EB,
      startJoinLoad: () => HB
    });
    var VB = dB(3211),
      yB = dB(35348),
      pB = dB(35355),
      lB = dB(39481),
      JB = dB(586),
      YB = dB(39499),
      gB = dB(39524),
      oB = dB(39527),
      kB = dB(39550);
    const LB = "[bloxd-wasm-client]";
    let OB = null,
      DB = null,
      uB = !1;

    function HB() {
      return uB = !0, vB()
    }

    function EB() {
      return vB()
    }

    function vB() {
      return DB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const BB = await (0, oB.L)();
        if (null === BB || (0, YB.C)(BB)) return;
        if ("wasm" !== (0, JB.e)(window.location.search) && null !== (0, gB.e)(BB)) return;
        const TB = await BB.load();
        uB && "unloaded" === (0, VB.C)() && (0, oB.m)(), await (0, yB.h)(TB, lB.i, uB ? void 0 : {
          priority: "low"
        })
      })().catch((BB => {
        console.warn(`${LB} the early wasm load did not start: the boot loads the client itself`, BB)
      })), DB
    }

    function mB() {
      let {
        joinStarted: BB = () => !1,
        language: TB = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return OB ??= async function(BB, TB) {
        if (!await async function(BB) {
            if (BB()) return !1;
            let TB;
            try {
              var VB;
              const BB = await fetch(`${dB.p}static/js/l9xvfg.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!BB.ok) throw new Error(`HTTP ${BB.status}`);
              if (/\bno-store\b/.test(null !== (VB = BB.headers.get("Cache-Control")) && void 0 !== VB ? VB : "")) return !1;
              const yB = await BB.json();
              if (!Array.isArray(yB)) throw new Error("not a list");
              TB = yB
            } catch (pB) {
              return console.warn(`${LB} the join's chunk list did not load: the join downloads its chunks itself`, pB), !BB()
            }
            if (BB()) return !1;
            const yB = document.createElement("link").relList.supports("prefetch");
            for (const lB of TB) {
              const BB = `${dB.p}${lB}`;
              yB ? iB(BB) : NB(BB).catch((TB => {
                console.warn(`${LB} prefetching ${BB} failed`, TB)
              }))
            }
            return !0
          }(BB)) return;
        const yB = [NB((0, kB.g)())];
        (0, kB.c)(TB) && yB.push(NB((0, kB.i)()));
        "unloaded" === (0, VB.C)() && yB.push(NB((0, pB.b)(lB.i)), (0, oB.g)().then((TB => {
          if (null === TB || "unloaded" !== (0, VB.C)() || BB()) return;
          const dB = new AbortController;
          return TB.superseded.then((() => {
            dB.abort()
          })), NB((0, pB.b)(TB.build), dB.signal).catch((BB => {
            if (!dB.signal.aborted) throw BB
          }))
        })));
        await Promise.all(yB)
      }(BB, TB).catch((BB => {
        console.warn(`${LB} the prefetch failed: the join downloads the client itself`, BB)
      })), OB
    }

    function iB(BB) {
      const TB = document.createElement("link");
      TB.rel = "prefetch", TB.href = BB, BB.endsWith(".js") && (TB.crossOrigin = "anonymous"), document.head.appendChild(TB)
    }
    async function NB(BB, TB) {
      const dB = await fetch(BB, {
        priority: "low",
        signal: TB
      });
      if (!dB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${dB.status}`);
      const VB = dB.body.getReader();
      for (; !(await VB.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);