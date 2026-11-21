export const id = 56;
export const ids = [56];
export const modules = {
  36962: (dd, Jd, kd) => {
    async function pd(dd) {
      const Jd = await fetch(dd, {
        priority: "low"
      });
      if (!Jd.ok) throw new Error(`Fetching ${dd} failed: HTTP ${Jd.status}`);
      const kd = Jd.body.getReader();
      for (; !(await kd.read()).done;);
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  40737: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      prefetchWasmClient: () => Bd,
      startJoinLoad: () => Gd,
      startLoadAheadOfJoin: () => xd
    });
    var pd = kd(2761),
      Nd = kd(36480),
      Wd = kd(40745),
      Pd = kd(1078),
      Zd = kd(626),
      gd = kd(40771),
      Cd = (kd(40781), kd(36962)),
      Kd = kd(40792),
      od = kd(40801),
      ld = kd(40827);
    const Qd = "[bloxd-wasm-client]";
    let Ld = null,
      Od = null,
      ed = null,
      Rd = null,
      Id = null;

    function Gd() {
      return Rd ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const dd = await (0, od.R)();
        if (null === dd) return;
        if ((0, gd.l)(dd)) return (0, od.S)("none"), void vd("none");
        if ("wasm" !== (0, Zd.f)(window.location.search) && null !== (0, Kd.e)(dd, (0, Kd.f)(dd, !0))) return (0, od.S)("none"), void vd("none");
        (0, od.S)(dd.backend);
        const Jd = await dd.load();
        vd(Jd.name);
        const kd = "unloaded" === (0, pd.v)();
        if (kd && (0, od.k)(), !await (0, Nd.h)(Jd, Wd.g)) return void console.warn(`${Qd} the join's early wasm load failed: the boot loads the client itself`);
        if (!kd) return;
        const Cd = (0, Nd.g)(Jd.name);
        void 0 !== Cd ? (0, Pd.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Cd.ms)
        }, {
          path: Cd.path,
          build: Jd.name
        }) : console.warn(`${Qd} the join's wasm load left no record of how it compiled ${Jd.name}`)
      })().catch((dd => {
        console.warn(`${Qd} the join's early wasm load did not start: the boot loads the client itself`, dd)
      })), Rd
    }

    function vd(dd) {
      null !== Id && (0, Pd.logClientMeasurement)("wasm_compile_ahead", {
        hit: Id === dd ? 1 : 0
      }, {
        guessed: Id,
        loaded: dd
      })
    }

    function xd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === ed) {
        var Jd;
        const kd = null !== (Jd = dd.joinStarted) && void 0 !== Jd ? Jd : () => !1;
        ed = Promise.all([Bd(dd), qd(kd)]).then((() => {}))
      }
      return ed
    }

    function qd(dd) {
      return Od ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Jd = await (0, od.h)();
        null === Jd || dd() || "unloaded" !== (0, pd.v)() || (Id = Jd.name, await (0, Nd.c)([Jd, Wd.g], "low"))
      })().catch((dd => {
        console.warn(`${Qd} the compile ahead of the join did not start: the join loads the client itself`, dd)
      })), Od
    }

    function Bd() {
      let {
        joinStarted: dd = () => !1,
        language: Jd = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ld ??= async function(dd, Jd) {
        if (!await async function(dd) {
            if (dd()) return !1;
            let Jd;
            try {
              var pd;
              const dd = await fetch(`${kd.p}static/js/x17cru.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!dd.ok) throw new Error(`HTTP ${dd.status}`);
              if (/\bno-store\b/.test(null !== (pd = dd.headers.get("Cache-Control")) && void 0 !== pd ? pd : "")) return !1;
              const Nd = await dd.json();
              if (!Array.isArray(Nd)) throw new Error("not a list");
              Jd = Nd
            } catch (Wd) {
              return console.warn(`${Qd} the join's chunk list did not load: the join downloads its chunks itself`, Wd), !dd()
            }
            if (dd()) return !1;
            const Nd = document.createElement("link").relList.supports("prefetch");
            for (const Pd of Jd) {
              const dd = `${kd.p}${Pd}`;
              Nd ? sd(dd) : (0, Cd.c)(dd).catch((Jd => {
                console.warn(`${Qd} prefetching ${dd} failed`, Jd)
              }))
            }
            return !0
          }(dd)) return;
        const pd = [(0, Cd.c)((0, ld.g)())];
        (0, ld.e)(Jd) && pd.push((0, Cd.c)((0, ld.h)()));
        await Promise.all(pd)
      }(dd, Jd).catch((dd => {
        console.warn(`${Qd} the prefetch failed: the join downloads the client itself`, dd)
      })), Ld
    }

    function sd(dd) {
      const Jd = document.createElement("link");
      Jd.rel = "prefetch", Jd.href = dd, dd.endsWith(".js") && (Jd.crossOrigin = "anonymous"), document.head.appendChild(Jd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);