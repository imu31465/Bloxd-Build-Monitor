export const id = 55;
export const ids = [55];
export const modules = {
  40334: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      prefetchWasmClient: () => Cu,
      startJoinLoad: () => ju,
      startLoadAheadOfJoin: () => du
    });
    var Eu = yu(3510),
      Ku = yu(36199),
      Qu = yu(40341),
      mu = yu(1056),
      Ju = yu(624),
      Nu = yu(40361),
      Xu = (yu(40374), yu(40384)),
      Vu = yu(40393),
      ru = yu(40410);
    const Bu = "[bloxd-wasm-client]";
    let xu = null,
      Su = null,
      pu = null,
      Tu = null,
      Wu = null;

    function ju() {
      return Tu ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const uu = await (0, Vu.L)();
        if (null === uu) return;
        if ((0, Nu.l)(uu)) return (0, Vu.O)("none"), void Hu("none");
        if ("wasm" !== (0, Ju.e)(window.location.search) && null !== (0, Xu.b)(uu, (0, Xu.e)(uu, !0))) return (0, Vu.O)("none"), void Hu("none");
        (0, Vu.O)(uu.backend);
        const Ru = await uu.load();
        Hu(Ru.name), "unloaded" === (0, Eu.u)() && (0, Vu.o)(), await (0, Ku.h)(Ru, Qu.e) || console.warn(`${Bu} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((uu => {
        console.warn(`${Bu} the join's early wasm load did not start: the boot loads the client itself`, uu)
      })), Tu
    }

    function Hu(uu) {
      null !== Wu && (0, mu.logClientMeasurement)("wasm_compile_ahead", {
        hit: Wu === uu ? 1 : 0
      }, {
        guessed: Wu,
        loaded: uu
      })
    }

    function du() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === pu) {
        var Ru;
        const yu = null !== (Ru = uu.joinStarted) && void 0 !== Ru ? Ru : () => !1;
        pu = Promise.all([Cu(uu), bu(yu)]).then((() => {}))
      }
      return pu
    }

    function bu(uu) {
      return Su ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Ru = await (0, Vu.k)();
        null === Ru || uu() || "unloaded" !== (0, Eu.u)() || (Wu = Ru.name, await (0, Ku.d)([Ru, Qu.e], "low"))
      })().catch((uu => {
        console.warn(`${Bu} the compile ahead of the join did not start: the join loads the client itself`, uu)
      })), Su
    }

    function Cu() {
      let {
        joinStarted: uu = () => !1,
        language: Ru = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return xu ??= async function(uu, Ru) {
        if (!await async function(uu) {
            if (uu()) return !1;
            let Ru;
            try {
              var Eu;
              const uu = await fetch(`${yu.p}static/js/q3ynmh.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!uu.ok) throw new Error(`HTTP ${uu.status}`);
              if (/\bno-store\b/.test(null !== (Eu = uu.headers.get("Cache-Control")) && void 0 !== Eu ? Eu : "")) return !1;
              const Ku = await uu.json();
              if (!Array.isArray(Ku)) throw new Error("not a list");
              Ru = Ku
            } catch (Qu) {
              return console.warn(`${Bu} the join's chunk list did not load: the join downloads its chunks itself`, Qu), !uu()
            }
            if (uu()) return !1;
            const Ku = document.createElement("link").relList.supports("prefetch");
            for (const mu of Ru) {
              const uu = `${yu.p}${mu}`;
              Ku ? ku(uu) : eu(uu).catch((Ru => {
                console.warn(`${Bu} prefetching ${uu} failed`, Ru)
              }))
            }
            return !0
          }(uu)) return;
        const Eu = [eu((0, ru.g)())];
        (0, ru.c)(Ru) && Eu.push(eu((0, ru.i)()));
        await Promise.all(Eu)
      }(uu, Ru).catch((uu => {
        console.warn(`${Bu} the prefetch failed: the join downloads the client itself`, uu)
      })), xu
    }

    function ku(uu) {
      const Ru = document.createElement("link");
      Ru.rel = "prefetch", Ru.href = uu, uu.endsWith(".js") && (Ru.crossOrigin = "anonymous"), document.head.appendChild(Ru)
    }
    async function eu(uu) {
      const Ru = await fetch(uu, {
        priority: "low"
      });
      if (!Ru.ok) throw new Error(`Fetching ${uu} failed: HTTP ${Ru.status}`);
      const yu = Ru.body.getReader();
      for (; !(await yu.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);