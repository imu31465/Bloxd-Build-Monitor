export const id = 56;
export const ids = [56];
export const modules = {
  36302: (vv, zv, Pv) => {
    async function hv(vv) {
      const zv = await fetch(vv, {
        priority: "low"
      });
      if (!zv.ok) throw new Error(`Fetching ${vv} failed: HTTP ${zv.status}`);
      const Pv = zv.body.getReader();
      for (; !(await Pv.read()).done;);
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  40061: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      prefetchWasmClient: () => Fv,
      startJoinLoad: () => Gv,
      startLoadAheadOfJoin: () => jv
    });
    var hv = Pv(3466),
      Sv = Pv(35885),
      ev = Pv(40065),
      gv = Pv(1056),
      pv = Pv(635),
      dv = Pv(40078),
      Nv = (Pv(40096), Pv(36302)),
      lv = Pv(40108),
      Tv = Pv(40112),
      Wv = Pv(40134);
    const wv = "[bloxd-wasm-client]";
    let av = null,
      sv = null,
      Cv = null,
      iv = null,
      cv = null;

    function Gv() {
      return iv ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const vv = await (0, Tv.I)();
        if (null === vv) return;
        if ((0, dv.o)(vv)) return (0, Tv.M)("none"), void mv("none");
        if ("wasm" !== (0, pv.f)(window.location.search) && null !== (0, lv.e)(vv, (0, lv.i)(vv, !0))) return (0, Tv.M)("none"), void mv("none");
        (0, Tv.M)(vv.backend);
        const zv = await vv.load();
        mv(zv.name);
        const Pv = "unloaded" === (0, hv.z)();
        if (Pv && (0, Tv.i)(), !await (0, Sv.j)(zv, ev.e)) return void console.warn(`${wv} the join's early wasm load failed: the boot loads the client itself`);
        if (!Pv) return;
        const Nv = (0, Sv.g)(zv.name);
        void 0 !== Nv ? (0, gv.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Nv.ms)
        }, {
          path: Nv.path,
          build: zv.name
        }) : console.warn(`${wv} the join's wasm load left no record of how it compiled ${zv.name}`)
      })().catch((vv => {
        console.warn(`${wv} the join's early wasm load did not start: the boot loads the client itself`, vv)
      })), iv
    }

    function mv(vv) {
      null !== cv && (0, gv.logClientMeasurement)("wasm_compile_ahead", {
        hit: cv === vv ? 1 : 0
      }, {
        guessed: cv,
        loaded: vv
      })
    }

    function jv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Cv) {
        var zv;
        const Pv = null !== (zv = vv.joinStarted) && void 0 !== zv ? zv : () => !1;
        Cv = Promise.all([Fv(vv), fv(Pv)]).then((() => {}))
      }
      return Cv
    }

    function fv(vv) {
      return sv ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const zv = await (0, Tv.f)();
        null === zv || vv() || "unloaded" !== (0, hv.z)() || (cv = zv.name, await (0, Sv.d)([zv, ev.e], "low"))
      })().catch((vv => {
        console.warn(`${wv} the compile ahead of the join did not start: the join loads the client itself`, vv)
      })), sv
    }

    function Fv() {
      let {
        joinStarted: vv = () => !1,
        language: zv = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return av ??= async function(vv, zv) {
        if (!await async function(vv) {
            if (vv()) return !1;
            let zv;
            try {
              var hv;
              const vv = await fetch(`${Pv.p}static/js/qepqb8.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!vv.ok) throw new Error(`HTTP ${vv.status}`);
              if (/\bno-store\b/.test(null !== (hv = vv.headers.get("Cache-Control")) && void 0 !== hv ? hv : "")) return !1;
              const Sv = await vv.json();
              if (!Array.isArray(Sv)) throw new Error("not a list");
              zv = Sv
            } catch (ev) {
              return console.warn(`${wv} the join's chunk list did not load: the join downloads its chunks itself`, ev), !vv()
            }
            if (vv()) return !1;
            const Sv = document.createElement("link").relList.supports("prefetch");
            for (const gv of zv) {
              const vv = `${Pv.p}${gv}`;
              Sv ? Yv(vv) : (0, Nv.d)(vv).catch((zv => {
                console.warn(`${wv} prefetching ${vv} failed`, zv)
              }))
            }
            return !0
          }(vv)) return;
        const hv = [(0, Nv.d)((0, Wv.e)())];
        (0, Wv.d)(zv) && hv.push((0, Nv.d)((0, Wv.g)()));
        await Promise.all(hv)
      }(vv, zv).catch((vv => {
        console.warn(`${wv} the prefetch failed: the join downloads the client itself`, vv)
      })), av
    }

    function Yv(vv) {
      const zv = document.createElement("link");
      zv.rel = "prefetch", zv.href = vv, vv.endsWith(".js") && (zv.crossOrigin = "anonymous"), document.head.appendChild(zv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);