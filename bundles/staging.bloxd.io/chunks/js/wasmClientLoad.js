export const id = 56;
export const ids = [56];
export const modules = {
  36417: (QQ, FQ, wQ) => {
    async function LQ(QQ) {
      const FQ = await fetch(QQ, {
        priority: "low"
      });
      if (!FQ.ok) throw new Error(`Fetching ${QQ} failed: HTTP ${FQ.status}`);
      const wQ = FQ.body.getReader();
      for (; !(await wQ.read()).done;);
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  40196: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      prefetchWasmClient: () => SQ,
      startJoinLoad: () => GQ,
      startLoadAheadOfJoin: () => cQ
    });
    var LQ = wQ(2809),
      qQ = wQ(35962),
      oQ = wQ(40201),
      DQ = wQ(1087),
      kQ = wQ(634),
      vQ = wQ(40222),
      mQ = (wQ(40229), wQ(36417)),
      uQ = wQ(40239),
      HQ = wQ(40242),
      bQ = wQ(40262);
    const YQ = "[bloxd-wasm-client]";
    let xQ = null,
      AQ = null,
      tQ = null,
      eQ = null,
      MQ = null;

    function GQ() {
      return eQ ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const QQ = await (0, HQ.M)();
        if (null === QQ) return;
        if ((0, vQ.p)(QQ)) return (0, HQ.O)("none"), void pQ("none");
        if ("wasm" !== (0, kQ.e)(window.location.search) && null !== (0, uQ.b)(QQ, (0, uQ.d)(QQ, !0))) return (0, HQ.O)("none"), void pQ("none");
        (0, HQ.O)(QQ.backend);
        const FQ = await QQ.load();
        pQ(FQ.name);
        const wQ = "unloaded" === (0, LQ.z)();
        if (wQ && (0, HQ.n)(), !await (0, qQ.l)(FQ, oQ.e)) return void console.warn(`${YQ} the join's early wasm load failed: the boot loads the client itself`);
        if (!wQ) return;
        const mQ = (0, qQ.h)(FQ.name);
        void 0 !== mQ ? (0, DQ.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(mQ.ms)
        }, {
          path: mQ.path,
          build: FQ.name
        }) : console.warn(`${YQ} the join's wasm load left no record of how it compiled ${FQ.name}`)
      })().catch((QQ => {
        console.warn(`${YQ} the join's early wasm load did not start: the boot loads the client itself`, QQ)
      })), eQ
    }

    function pQ(QQ) {
      null !== MQ && (0, DQ.logClientMeasurement)("wasm_compile_ahead", {
        hit: MQ === QQ ? 1 : 0
      }, {
        guessed: MQ,
        loaded: QQ
      })
    }

    function cQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === tQ) {
        var FQ;
        const wQ = null !== (FQ = QQ.joinStarted) && void 0 !== FQ ? FQ : () => !1;
        tQ = Promise.all([SQ(QQ), CQ(wQ)]).then((() => {}))
      }
      return tQ
    }

    function CQ(QQ) {
      return AQ ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const FQ = await (0, HQ.h)();
        null === FQ || QQ() || "unloaded" !== (0, LQ.z)() || (MQ = FQ.name, await (0, qQ.b)([FQ, oQ.e], "low"))
      })().catch((QQ => {
        console.warn(`${YQ} the compile ahead of the join did not start: the join loads the client itself`, QQ)
      })), AQ
    }

    function SQ() {
      let {
        joinStarted: QQ = () => !1,
        language: FQ = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return xQ ??= async function(QQ, FQ) {
        if (!await async function(QQ) {
            if (QQ()) return !1;
            let FQ;
            try {
              var LQ;
              const QQ = await fetch(`${wQ.p}static/js/bqoxjr.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!QQ.ok) throw new Error(`HTTP ${QQ.status}`);
              if (/\bno-store\b/.test(null !== (LQ = QQ.headers.get("Cache-Control")) && void 0 !== LQ ? LQ : "")) return !1;
              const qQ = await QQ.json();
              if (!Array.isArray(qQ)) throw new Error("not a list");
              FQ = qQ
            } catch (oQ) {
              return console.warn(`${YQ} the join's chunk list did not load: the join downloads its chunks itself`, oQ), !QQ()
            }
            if (QQ()) return !1;
            const qQ = document.createElement("link").relList.supports("prefetch");
            for (const DQ of FQ) {
              const QQ = `${wQ.p}${DQ}`;
              qQ ? iQ(QQ) : (0, mQ.d)(QQ).catch((FQ => {
                console.warn(`${YQ} prefetching ${QQ} failed`, FQ)
              }))
            }
            return !0
          }(QQ)) return;
        const LQ = [(0, mQ.d)((0, bQ.d)())];
        (0, bQ.c)(FQ) && LQ.push((0, mQ.d)((0, bQ.e)()));
        await Promise.all(LQ)
      }(QQ, FQ).catch((QQ => {
        console.warn(`${YQ} the prefetch failed: the join downloads the client itself`, QQ)
      })), xQ
    }

    function iQ(QQ) {
      const FQ = document.createElement("link");
      FQ.rel = "prefetch", FQ.href = QQ, QQ.endsWith(".js") && (FQ.crossOrigin = "anonymous"), document.head.appendChild(FQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);