export const id = 55;
export const ids = [55];
export const modules = {
  40163: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      prefetchWasmClient: () => Lk,
      startJoinLoad: () => Wk,
      startLoadAheadOfJoin: () => ik
    });
    var Rk = Bk(3502),
      tk = Bk(36046),
      ak = Bk(40171),
      Xk = Bk(1047),
      bk = Bk(624),
      wk = Bk(40189),
      dk = (Bk(40207), Bk(40224)),
      sk = Bk(40231),
      Vk = Bk(40254);
    const Jk = "[bloxd-wasm-client]";
    let Ak = null,
      ek = null,
      yk = null,
      fk = null,
      mk = null;

    function Wk() {
      return fk ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const kk = await (0, sk.P)();
        if (null === kk) return;
        if ((0, wk.k)(kk)) return (0, sk.Q)("none"), void vk("none");
        if ("wasm" !== (0, bk.e)(window.location.search) && null !== (0, dk.c)(kk, (0, dk.f)(kk, !0))) return (0, sk.Q)("none"), void vk("none");
        (0, sk.Q)(kk.backend);
        const Fk = await kk.load();
        vk(Fk.name), "unloaded" === (0, Rk.v)() && (0, sk.s)(), await (0, tk.f)(Fk, ak.f) || console.warn(`${Jk} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((kk => {
        console.warn(`${Jk} the join's early wasm load did not start: the boot loads the client itself`, kk)
      })), fk
    }

    function vk(kk) {
      null !== mk && (0, Xk.logClientMeasurement)("wasm_compile_ahead", {
        hit: mk === kk ? 1 : 0
      }, {
        guessed: mk,
        loaded: kk
      })
    }

    function ik() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === yk) {
        var Fk;
        const Bk = null !== (Fk = kk.joinStarted) && void 0 !== Fk ? Fk : () => !1;
        yk = Promise.all([Lk(kk), Yk(Bk)]).then((() => {}))
      }
      return yk
    }

    function Yk(kk) {
      return ek ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Fk = await (0, sk.k)();
        null === Fk || kk() || "unloaded" !== (0, Rk.v)() || (mk = Fk.name, await (0, tk.c)([Fk, ak.f], "low"))
      })().catch((kk => {
        console.warn(`${Jk} the compile ahead of the join did not start: the join loads the client itself`, kk)
      })), ek
    }

    function Lk() {
      let {
        joinStarted: kk = () => !1,
        language: Fk = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Ak ??= async function(kk, Fk) {
        if (!await async function(kk) {
            if (kk()) return !1;
            let Fk;
            try {
              var Rk;
              const kk = await fetch(`${Bk.p}static/js/6ndy1f.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!kk.ok) throw new Error(`HTTP ${kk.status}`);
              if (/\bno-store\b/.test(null !== (Rk = kk.headers.get("Cache-Control")) && void 0 !== Rk ? Rk : "")) return !1;
              const tk = await kk.json();
              if (!Array.isArray(tk)) throw new Error("not a list");
              Fk = tk
            } catch (ak) {
              return console.warn(`${Jk} the join's chunk list did not load: the join downloads its chunks itself`, ak), !kk()
            }
            if (kk()) return !1;
            const tk = document.createElement("link").relList.supports("prefetch");
            for (const Xk of Fk) {
              const kk = `${Bk.p}${Xk}`;
              tk ? Ok(kk) : Ek(kk).catch((Fk => {
                console.warn(`${Jk} prefetching ${kk} failed`, Fk)
              }))
            }
            return !0
          }(kk)) return;
        const Rk = [Ek((0, Vk.g)())];
        (0, Vk.d)(Fk) && Rk.push(Ek((0, Vk.i)()));
        await Promise.all(Rk)
      }(kk, Fk).catch((kk => {
        console.warn(`${Jk} the prefetch failed: the join downloads the client itself`, kk)
      })), Ak
    }

    function Ok(kk) {
      const Fk = document.createElement("link");
      Fk.rel = "prefetch", Fk.href = kk, kk.endsWith(".js") && (Fk.crossOrigin = "anonymous"), document.head.appendChild(Fk)
    }
    async function Ek(kk) {
      const Fk = await fetch(kk, {
        priority: "low"
      });
      if (!Fk.ok) throw new Error(`Fetching ${kk} failed: HTTP ${Fk.status}`);
      const Bk = Fk.body.getReader();
      for (; !(await Bk.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);