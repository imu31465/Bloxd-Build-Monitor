export const id = 58;
export const ids = [58];
export const modules = {
  36810: (kk, Fk, Ik) => {
    async function Xk(kk) {
      const Fk = await fetch(kk, {
        priority: "low"
      });
      if (!Fk.ok) throw new Error(`Fetching ${kk} failed: HTTP ${Fk.status}`);
      const Ik = Fk.body.getReader();
      for (; !(await Ik.read()).done;);
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  41063: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      prefetchWasmClient: () => zk,
      startJoinLoad: () => Kk,
      startLoadAheadOfJoin: () => sk
    });
    var Xk = Ik(2801),
      Tk = Ik(36297),
      ik = Ik(40870),
      yk = Ik(1076),
      lk = Ik(646),
      ak = Ik(40726),
      qk = (Ik(40779), Ik(36810)),
      Lk = Ik(40745),
      tk = Ik(40721),
      Zk = Ik(40991),
      jk = Ik(40852);
    const ek = "[bloxd-wasm-client]";
    let wk = null,
      Hk = null,
      Jk = null,
      xk = null,
      Pk = null;

    function Kk() {
      return xk ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const kk = await (0, tk.Q)();
        if (null === kk) return;
        if ((0, ak.h)(kk)) return (0, tk.S)("none"), void Qk("none");
        if ("wasm" !== (0, lk.f)(window.location.search) && null !== (0, Lk.c)(kk, (0, Lk.f)(kk))) return (0, tk.S)("none"), void Qk("none");
        (0, tk.S)(kk.backend);
        const Fk = await kk.load();
        Qk(Fk.name);
        const Ik = "unloaded" === (0, Xk.w)();
        if (Ik && (0, tk.p)(), !await (0, Zk.b)(Fk)) return void console.warn(`${ek} the join's early wasm load failed: the boot loads the client itself`);
        if (!Ik) return;
        const ik = (0, Tk.e)(Fk.name);
        void 0 !== ik ? (0, yk.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(ik.ms)
        }, {
          path: ik.path,
          build: Fk.name
        }) : console.warn(`${ek} the join's wasm load left no record of how it compiled ${Fk.name}`)
      })().catch((kk => {
        console.warn(`${ek} the join's early wasm load did not start: the boot loads the client itself`, kk)
      })), xk
    }

    function Qk(kk) {
      null !== Pk && (0, yk.logClientMeasurement)("wasm_compile_ahead", {
        hit: Pk === kk ? 1 : 0
      }, {
        guessed: Pk,
        loaded: kk
      })
    }

    function sk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Jk) {
        var Fk;
        const Ik = null !== (Fk = kk.joinStarted) && void 0 !== Fk ? Fk : () => !1;
        Jk = Promise.all([zk(kk), Vk(Ik)]).then((() => {}))
      }
      return Jk
    }

    function Vk(kk) {
      return Hk ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Fk = await (0, tk.j)();
        null === Fk || kk() || "unloaded" !== (0, Xk.w)() || (Pk = Fk.name, await (0, Tk.b)([Fk, ik.f], "low"))
      })().catch((kk => {
        console.warn(`${ek} the compile ahead of the join did not start: the join loads the client itself`, kk)
      })), Hk
    }

    function zk() {
      let {
        joinStarted: kk = () => !1,
        language: Fk = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return wk ??= async function(kk, Fk) {
        if (!await async function(kk) {
            if (kk()) return !1;
            let Fk;
            try {
              var Xk;
              const kk = await fetch(`${Ik.p}static/js/31kiid.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!kk.ok) throw new Error(`HTTP ${kk.status}`);
              if (/\bno-store\b/.test(null !== (Xk = kk.headers.get("Cache-Control")) && void 0 !== Xk ? Xk : "")) return !1;
              const Tk = await kk.json();
              if (!Array.isArray(Tk)) throw new Error("not a list");
              Fk = Tk
            } catch (ik) {
              return console.warn(`${ek} the join's chunk list did not load: the join downloads its chunks itself`, ik), !kk()
            }
            if (kk()) return !1;
            const Tk = document.createElement("link").relList.supports("prefetch");
            for (const yk of Fk) {
              const kk = `${Ik.p}${yk}`;
              Tk ? Sk(kk) : (0, qk.e)(kk).catch((Fk => {
                console.warn(`${ek} prefetching ${kk} failed`, Fk)
              }))
            }
            return !0
          }(kk)) return;
        const Xk = [(0, qk.e)((0, jk.h)())];
        (0, jk.e)(Fk) && Xk.push((0, qk.e)((0, jk.i)()));
        await Promise.all(Xk)
      }(kk, Fk).catch((kk => {
        console.warn(`${ek} the prefetch failed: the join downloads the client itself`, kk)
      })), wk
    }

    function Sk(kk) {
      const Fk = document.createElement("link");
      Fk.rel = "prefetch", Fk.href = kk, kk.endsWith(".js") && (Fk.crossOrigin = "anonymous"), document.head.appendChild(Fk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);