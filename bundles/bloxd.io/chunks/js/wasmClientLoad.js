export const id = 55;
export const ids = [55];
export const modules = {
  39544: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      prefetchWasmClient: () => mT,
      startJoinLoad: () => AT,
      startLoadAheadOfJoin: () => hT
    });
    var iT = IT(3276),
      zT = IT(35343),
      kT = IT(39553),
      WT = IT(1071),
      XT = IT(637),
      BT = IT(39567),
      FT = (IT(39581), IT(39588)),
      ST = IT(39593),
      DT = IT(39624);
    const LT = "[bloxd-wasm-client]";
    let xT = null,
      cT = null,
      KT = null,
      MT = null,
      rT = null;

    function AT() {
      return MT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const TT = await (0, ST.F)();
        if (null === TT) return;
        if ((0, BT.r)(TT)) return (0, ST.H)("none"), void gT("none");
        if ("wasm" !== (0, XT.g)(window.location.search) && null !== (0, FT.d)(TT, (0, FT.f)(TT, !0))) return (0, ST.H)("none"), void gT("none");
        (0, ST.H)(TT.backend);
        const oT = await TT.load();
        gT(oT.name), "unloaded" === (0, iT.w)() && (0, ST.l)(), await (0, zT.h)(oT, kT.c) || console.warn(`${LT} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((TT => {
        console.warn(`${LT} the join's early wasm load did not start: the boot loads the client itself`, TT)
      })), MT
    }

    function gT(TT) {
      null !== rT && (0, WT.logClientMeasurement)("wasm_compile_ahead", {
        hit: rT === TT ? 1 : 0
      }, {
        guessed: rT,
        loaded: TT
      })
    }

    function hT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === KT) {
        var oT;
        const IT = null !== (oT = TT.joinStarted) && void 0 !== oT ? oT : () => !1;
        KT = Promise.all([mT(TT), wT(IT)]).then((() => {}))
      }
      return KT
    }

    function wT(TT) {
      return cT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const oT = await (0, ST.h)();
        null === oT || TT() || "unloaded" !== (0, iT.w)() || (rT = oT.name, await (0, zT.c)([oT, kT.c], "low"))
      })().catch((TT => {
        console.warn(`${LT} the compile ahead of the join did not start: the join loads the client itself`, TT)
      })), cT
    }

    function mT() {
      let {
        joinStarted: TT = () => !1,
        language: oT = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return xT ??= async function(TT, oT) {
        if (!await async function(TT) {
            if (TT()) return !1;
            let oT;
            try {
              var iT;
              const TT = await fetch(`${IT.p}static/js/qsji88.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!TT.ok) throw new Error(`HTTP ${TT.status}`);
              if (/\bno-store\b/.test(null !== (iT = TT.headers.get("Cache-Control")) && void 0 !== iT ? iT : "")) return !1;
              const zT = await TT.json();
              if (!Array.isArray(zT)) throw new Error("not a list");
              oT = zT
            } catch (kT) {
              return console.warn(`${LT} the join's chunk list did not load: the join downloads its chunks itself`, kT), !TT()
            }
            if (TT()) return !1;
            const zT = document.createElement("link").relList.supports("prefetch");
            for (const WT of oT) {
              const TT = `${IT.p}${WT}`;
              zT ? eT(TT) : RT(TT).catch((oT => {
                console.warn(`${LT} prefetching ${TT} failed`, oT)
              }))
            }
            return !0
          }(TT)) return;
        const iT = [RT((0, DT.d)())];
        (0, DT.c)(oT) && iT.push(RT((0, DT.g)()));
        await Promise.all(iT)
      }(TT, oT).catch((TT => {
        console.warn(`${LT} the prefetch failed: the join downloads the client itself`, TT)
      })), xT
    }

    function eT(TT) {
      const oT = document.createElement("link");
      oT.rel = "prefetch", oT.href = TT, TT.endsWith(".js") && (oT.crossOrigin = "anonymous"), document.head.appendChild(oT)
    }
    async function RT(TT) {
      const oT = await fetch(TT, {
        priority: "low"
      });
      if (!oT.ok) throw new Error(`Fetching ${TT} failed: HTTP ${oT.status}`);
      const IT = oT.body.getReader();
      for (; !(await IT.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);