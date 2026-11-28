export const id = 71;
export const ids = [71];
export const modules = {
  37991: (dd, Od, md) => {
    async function Wd(dd) {
      const Od = await fetch(dd, {
        priority: "low"
      });
      if (!Od.ok) throw new Error(`Fetching ${dd} failed: HTTP ${Od.status}`);
      const md = Od.body.getReader();
      for (; !(await md.read()).done;);
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  42638: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      prefetchWasmClient: () => Ed,
      probeWebgl2AheadOfJoin: () => Qd.K,
      startJoinLoad: () => pd,
      startLoadAheadOfJoin: () => gd
    });
    var Wd = md(2421),
      Fd = md(37688),
      Rd = md(42640),
      Xd = md(1368),
      Kd = md(42658),
      hd = (md(42685), md(37991)),
      vd = md(2330),
      Qd = md(42693),
      td = md(42811),
      od = md(37851);
    const Nd = "[bloxd-wasm-client]";
    let qd = null,
      Hd = null,
      yd = null,
      bd = null,
      Td = null;

    function pd() {
      return bd ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const dd = await (0, Qd.J)();
        if (null === dd) return;
        if ((0, Kd.p)(dd)) return (0, Qd.O)("none"), void Yd("none");
        (0, Qd.O)(dd.backend);
        const Od = await dd.load();
        Yd(Od.name);
        const md = "unloaded" === (0, Wd.y)();
        if (md && (0, Qd.n)(), !await (0, td.d)(Od)) return void console.warn(`${Nd} the join's early wasm load failed: the boot loads the client itself`);
        if (!md) return;
        const Rd = (0, Fd.j)(Od.name);
        void 0 !== Rd ? (0, Xd.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Rd.ms)
        }, {
          path: Rd.path,
          build: Od.name
        }) : console.warn(`${Nd} the join's wasm load left no record of how it compiled ${Od.name}`)
      })().catch((dd => {
        console.warn(`${Nd} the join's early wasm load did not start: the boot loads the client itself`, dd)
      })), bd
    }

    function Yd(dd) {
      null !== Td && (0, Xd.logClientMeasurement)("wasm_compile_ahead", {
        hit: Td === dd ? 1 : 0
      }, {
        guessed: Td,
        loaded: dd
      })
    }

    function gd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === yd) {
        var Od;
        const md = null !== (Od = dd.joinStarted) && void 0 !== Od ? Od : () => !1;
        yd = Promise.all([Ed(dd), wd(md)]).then((() => {}))
      }
      return yd
    }

    function wd(dd) {
      return Hd ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Od = await (0, Qd.h)();
        null === Od || dd() || "unloaded" !== (0, Wd.y)() || (Td = Od.name, await (0, Fd.b)([Od, Rd.e], "low"))
      })().catch((dd => {
        console.warn(`${Nd} the compile ahead of the join did not start: the join loads the client itself`, dd)
      })), Hd
    }

    function Ed() {
      let {
        joinStarted: dd = () => !1,
        language: Od = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return qd ??= async function(dd, Od) {
        if (!await async function(dd) {
            if (dd()) return !1;
            let Od;
            try {
              var md;
              const dd = await fetch((0, vd.d)("static/js/yteou.wasmJoinFiles.json"), {
                ...vd.b,
                priority: "low"
              });
              if (dd.ok && /\bno-store\b/.test(null !== (md = dd.headers.get("Cache-Control")) && void 0 !== md ? md : "")) return !1;
              Od = await (0, vd.g)(dd)
            } catch (Fd) {
              return console.warn(`${Nd} the join's chunk list did not load: the join downloads its chunks itself`, Fd), !dd()
            }
            if (dd()) return !1;
            const Wd = document.createElement("link").relList.supports("prefetch");
            for (const Rd of Od) {
              const dd = (0, vd.d)(Rd);
              Wd ? Jd(dd) : (0, hd.c)(dd).catch((Od => {
                console.warn(`${Nd} prefetching ${dd} failed`, Od)
              }))
            }
            return !0
          }(dd)) return;
        const md = [(0, hd.c)((0, od.d)())];
        (0, od.b)(Od) && md.push((0, hd.c)((0, od.f)()));
        await Promise.all(md)
      }(dd, Od).catch((dd => {
        console.warn(`${Nd} the prefetch failed: the join downloads the client itself`, dd)
      })), qd
    }

    function Jd(dd) {
      const Od = document.createElement("link");
      Od.rel = "prefetch", Od.href = dd, dd.endsWith(".js") && (Od.crossOrigin = "anonymous"), document.head.appendChild(Od)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);