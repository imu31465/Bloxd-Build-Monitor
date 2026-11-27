export const id = 70;
export const ids = [70];
export const modules = {
  37617: (ee, ie, He) => {
    async function ye(ee) {
      const ie = await fetch(ee, {
        priority: "low"
      });
      if (!ie.ok) throw new Error(`Fetching ${ee} failed: HTTP ${ie.status}`);
      const He = ie.body.getReader();
      for (; !(await He.read()).done;);
    }
    He.d(ie, {
      e: () => ye
    })
  },
  42125: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      prefetchWasmClient: () => de,
      probeWebgl2AheadOfJoin: () => oe.Q,
      startJoinLoad: () => Be,
      startLoadAheadOfJoin: () => ge
    });
    var ye = He(3094),
      be = He(37003),
      Me = He(41955),
      Ke = He(1268),
      Ue = He(41827),
      Fe = (He(41890), He(37617)),
      Je = He(2177),
      oe = He(41823),
      Re = He(42068),
      ke = He(37102);
    const qe = "[bloxd-wasm-client]";
    let fe = null,
      Te = null,
      pe = null,
      Xe = null,
      ze = null;

    function Be() {
      return Xe ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ee = await (0, oe.N)();
        if (null === ee) return;
        if ((0, Ue.p)(ee)) return (0, oe.S)("none"), void Ee("none");
        (0, oe.S)(ee.backend);
        const ie = await ee.load();
        Ee(ie.name);
        const He = "unloaded" === (0, ye.B)();
        if (He && (0, oe.j)(), !await (0, Re.c)(ie)) return void console.warn(`${qe} the join's early wasm load failed: the boot loads the client itself`);
        if (!He) return;
        const Me = (0, be.j)(ie.name);
        void 0 !== Me ? (0, Ke.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Me.ms)
        }, {
          path: Me.path,
          build: ie.name
        }) : console.warn(`${qe} the join's wasm load left no record of how it compiled ${ie.name}`)
      })().catch((ee => {
        console.warn(`${qe} the join's early wasm load did not start: the boot loads the client itself`, ee)
      })), Xe
    }

    function Ee(ee) {
      null !== ze && (0, Ke.logClientMeasurement)("wasm_compile_ahead", {
        hit: ze === ee ? 1 : 0
      }, {
        guessed: ze,
        loaded: ee
      })
    }

    function ge() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === pe) {
        var ie;
        const He = null !== (ie = ee.joinStarted) && void 0 !== ie ? ie : () => !1;
        pe = Promise.all([de(ee), Oe(He)]).then((() => {}))
      }
      return pe
    }

    function Oe(ee) {
      return Te ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ie = await (0, oe.f)();
        null === ie || ee() || "unloaded" !== (0, ye.B)() || (ze = ie.name, await (0, be.e)([ie, Me.e], "low"))
      })().catch((ee => {
        console.warn(`${qe} the compile ahead of the join did not start: the join loads the client itself`, ee)
      })), Te
    }

    function de() {
      let {
        joinStarted: ee = () => !1,
        language: ie = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return fe ??= async function(ee, ie) {
        if (!await async function(ee) {
            if (ee()) return !1;
            let ie;
            try {
              var He;
              const ee = await fetch((0, Je.c)("static/js/u88b9b.wasmJoinFiles.json"), {
                ...Je.b,
                priority: "low"
              });
              if (ee.ok && /\bno-store\b/.test(null !== (He = ee.headers.get("Cache-Control")) && void 0 !== He ? He : "")) return !1;
              ie = await (0, Je.f)(ee)
            } catch (be) {
              return console.warn(`${qe} the join's chunk list did not load: the join downloads its chunks itself`, be), !ee()
            }
            if (ee()) return !1;
            const ye = document.createElement("link").relList.supports("prefetch");
            for (const Me of ie) {
              const ee = (0, Je.c)(Me);
              ye ? We(ee) : (0, Fe.e)(ee).catch((ie => {
                console.warn(`${qe} prefetching ${ee} failed`, ie)
              }))
            }
            return !0
          }(ee)) return;
        const He = [(0, Fe.e)((0, ke.e)())];
        (0, ke.b)(ie) && He.push((0, Fe.e)((0, ke.h)()));
        await Promise.all(He)
      }(ee, ie).catch((ee => {
        console.warn(`${qe} the prefetch failed: the join downloads the client itself`, ee)
      })), fe
    }

    function We(ee) {
      const ie = document.createElement("link");
      ie.rel = "prefetch", ie.href = ee, ee.endsWith(".js") && (ie.crossOrigin = "anonymous"), document.head.appendChild(ie)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);