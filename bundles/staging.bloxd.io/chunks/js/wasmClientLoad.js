export const id = 58;
export const ids = [58];
export const modules = {
  36877: (mm, Tm, fm) => {
    async function hm(mm) {
      const Tm = await fetch(mm, {
        priority: "low"
      });
      if (!Tm.ok) throw new Error(`Fetching ${mm} failed: HTTP ${Tm.status}`);
      const fm = Tm.body.getReader();
      for (; !(await fm.read()).done;);
    }
    fm.d(Tm, {
      d: () => hm
    })
  },
  41116: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      prefetchWasmClient: () => cm,
      startJoinLoad: () => Km,
      startLoadAheadOfJoin: () => nm
    });
    var hm = fm(2873),
      Am = fm(36395),
      am = fm(40950),
      xm = fm(1103),
      wm = fm(675),
      Dm = fm(40793),
      im = (fm(40848), fm(36877)),
      Rm = fm(40814),
      pm = fm(40790),
      Em = fm(41052),
      om = fm(40931);
    const Om = "[bloxd-wasm-client]";
    let Ym = null,
      qm = null,
      jm = null,
      Vm = null,
      Im = null;

    function Km() {
      return Vm ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const mm = await (0, pm.X)();
        if (null === mm) return;
        if ((0, Dm.o)(mm)) return (0, pm.Z)("none"), void Qm("none");
        if ("wasm" !== (0, wm.e)(window.location.search) && null !== (0, Rm.c)(mm, (0, Rm.g)(mm))) return (0, pm.Z)("none"), void Qm("none");
        (0, pm.Z)(mm.backend);
        const Tm = await mm.load();
        Qm(Tm.name);
        const fm = "unloaded" === (0, hm.A)();
        if (fm && (0, pm.s)(), !await (0, Em.e)(Tm)) return void console.warn(`${Om} the join's early wasm load failed: the boot loads the client itself`);
        if (!fm) return;
        const am = (0, Am.g)(Tm.name);
        void 0 !== am ? (0, xm.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(am.ms)
        }, {
          path: am.path,
          build: Tm.name
        }) : console.warn(`${Om} the join's wasm load left no record of how it compiled ${Tm.name}`)
      })().catch((mm => {
        console.warn(`${Om} the join's early wasm load did not start: the boot loads the client itself`, mm)
      })), Vm
    }

    function Qm(mm) {
      null !== Im && (0, xm.logClientMeasurement)("wasm_compile_ahead", {
        hit: Im === mm ? 1 : 0
      }, {
        guessed: Im,
        loaded: mm
      })
    }

    function nm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === jm) {
        var Tm;
        const fm = null !== (Tm = mm.joinStarted) && void 0 !== Tm ? Tm : () => !1;
        jm = Promise.all([cm(mm), Jm(fm)]).then((() => {}))
      }
      return jm
    }

    function Jm(mm) {
      return qm ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Tm = await (0, pm.m)();
        null === Tm || mm() || "unloaded" !== (0, hm.A)() || (Im = Tm.name, await (0, Am.b)([Tm, am.g], "low"))
      })().catch((mm => {
        console.warn(`${Om} the compile ahead of the join did not start: the join loads the client itself`, mm)
      })), qm
    }

    function cm() {
      let {
        joinStarted: mm = () => !1,
        language: Tm = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ym ??= async function(mm, Tm) {
        if (!await async function(mm) {
            if (mm()) return !1;
            let Tm;
            try {
              var hm;
              const mm = await fetch(`${fm.p}static/js/mpd96o.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!mm.ok) throw new Error(`HTTP ${mm.status}`);
              if (/\bno-store\b/.test(null !== (hm = mm.headers.get("Cache-Control")) && void 0 !== hm ? hm : "")) return !1;
              const Am = await mm.json();
              if (!Array.isArray(Am)) throw new Error("not a list");
              Tm = Am
            } catch (am) {
              return console.warn(`${Om} the join's chunk list did not load: the join downloads its chunks itself`, am), !mm()
            }
            if (mm()) return !1;
            const Am = document.createElement("link").relList.supports("prefetch");
            for (const xm of Tm) {
              const mm = `${fm.p}${xm}`;
              Am ? zm(mm) : (0, im.d)(mm).catch((Tm => {
                console.warn(`${Om} prefetching ${mm} failed`, Tm)
              }))
            }
            return !0
          }(mm)) return;
        const hm = [(0, im.d)((0, om.e)())];
        (0, om.d)(Tm) && hm.push((0, im.d)((0, om.f)()));
        await Promise.all(hm)
      }(mm, Tm).catch((mm => {
        console.warn(`${Om} the prefetch failed: the join downloads the client itself`, mm)
      })), Ym
    }

    function zm(mm) {
      const Tm = document.createElement("link");
      Tm.rel = "prefetch", Tm.href = mm, mm.endsWith(".js") && (Tm.crossOrigin = "anonymous"), document.head.appendChild(Tm)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);