export const id = 56;
export const ids = [56];
export const modules = {
  36828: (qq, Eq, gq) => {
    async function Yq(qq) {
      const Eq = await fetch(qq, {
        priority: "low"
      });
      if (!Eq.ok) throw new Error(`Fetching ${qq} failed: HTTP ${Eq.status}`);
      const gq = Eq.body.getReader();
      for (; !(await gq.read()).done;);
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  40483: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      prefetchWasmClient: () => tq,
      startJoinLoad: () => oq,
      startLoadAheadOfJoin: () => Qq
    });
    var Yq = gq(2797),
      lq = gq(36380),
      Oq = gq(40490),
      mq = gq(1046),
      xq = gq(611),
      Aq = gq(40498),
      cq = (gq(40515), gq(36828)),
      uq = gq(40526),
      Bq = gq(40534),
      Wq = gq(40559);
    const Nq = "[bloxd-wasm-client]";
    let aq = null,
      Vq = null,
      dq = null,
      jq = null,
      Hq = null;

    function oq() {
      return jq ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const qq = await (0, Bq.P)();
        if (null === qq) return;
        if ((0, Aq.p)(qq)) return (0, Bq.Q)("none"), void Pq("none");
        if ("wasm" !== (0, xq.g)(window.location.search) && null !== (0, uq.c)(qq, (0, uq.g)(qq, !0))) return (0, Bq.Q)("none"), void Pq("none");
        (0, Bq.Q)(qq.backend);
        const Eq = await qq.load();
        Pq(Eq.name);
        const gq = "unloaded" === (0, Yq.B)();
        if (gq && (0, Bq.l)(), !await (0, lq.n)(Eq, Oq.c)) return void console.warn(`${Nq} the join's early wasm load failed: the boot loads the client itself`);
        if (!gq) return;
        const cq = (0, lq.j)(Eq.name);
        void 0 !== cq ? (0, mq.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(cq.ms)
        }, {
          path: cq.path,
          build: Eq.name
        }) : console.warn(`${Nq} the join's wasm load left no record of how it compiled ${Eq.name}`)
      })().catch((qq => {
        console.warn(`${Nq} the join's early wasm load did not start: the boot loads the client itself`, qq)
      })), jq
    }

    function Pq(qq) {
      null !== Hq && (0, mq.logClientMeasurement)("wasm_compile_ahead", {
        hit: Hq === qq ? 1 : 0
      }, {
        guessed: Hq,
        loaded: qq
      })
    }

    function Qq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === dq) {
        var Eq;
        const gq = null !== (Eq = qq.joinStarted) && void 0 !== Eq ? Eq : () => !1;
        dq = Promise.all([tq(qq), yq(gq)]).then((() => {}))
      }
      return dq
    }

    function yq(qq) {
      return Vq ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Eq = await (0, Bq.g)();
        null === Eq || qq() || "unloaded" !== (0, Yq.B)() || (Hq = Eq.name, await (0, lq.b)([Eq, Oq.c], "low"))
      })().catch((qq => {
        console.warn(`${Nq} the compile ahead of the join did not start: the join loads the client itself`, qq)
      })), Vq
    }

    function tq() {
      let {
        joinStarted: qq = () => !1,
        language: Eq = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return aq ??= async function(qq, Eq) {
        if (!await async function(qq) {
            if (qq()) return !1;
            let Eq;
            try {
              var Yq;
              const qq = await fetch(`${gq.p}static/js/bbb6l5.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!qq.ok) throw new Error(`HTTP ${qq.status}`);
              if (/\bno-store\b/.test(null !== (Yq = qq.headers.get("Cache-Control")) && void 0 !== Yq ? Yq : "")) return !1;
              const lq = await qq.json();
              if (!Array.isArray(lq)) throw new Error("not a list");
              Eq = lq
            } catch (Oq) {
              return console.warn(`${Nq} the join's chunk list did not load: the join downloads its chunks itself`, Oq), !qq()
            }
            if (qq()) return !1;
            const lq = document.createElement("link").relList.supports("prefetch");
            for (const mq of Eq) {
              const qq = `${gq.p}${mq}`;
              lq ? rq(qq) : (0, cq.c)(qq).catch((Eq => {
                console.warn(`${Nq} prefetching ${qq} failed`, Eq)
              }))
            }
            return !0
          }(qq)) return;
        const Yq = [(0, cq.c)((0, Wq.e)())];
        (0, Wq.c)(Eq) && Yq.push((0, cq.c)((0, Wq.g)()));
        await Promise.all(Yq)
      }(qq, Eq).catch((qq => {
        console.warn(`${Nq} the prefetch failed: the join downloads the client itself`, qq)
      })), aq
    }

    function rq(qq) {
      const Eq = document.createElement("link");
      Eq.rel = "prefetch", Eq.href = qq, qq.endsWith(".js") && (Eq.crossOrigin = "anonymous"), document.head.appendChild(Eq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);