export const id = 58;
export const ids = [58];
export const modules = {
  36744: (DD, zD, wD) => {
    async function pD(DD) {
      const zD = await fetch(DD, {
        priority: "low"
      });
      if (!zD.ok) throw new Error(`Fetching ${DD} failed: HTTP ${zD.status}`);
      const wD = zD.body.getReader();
      for (; !(await wD.read()).done;);
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  40967: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      prefetchWasmClient: () => XD,
      startJoinLoad: () => OD,
      startLoadAheadOfJoin: () => ED
    });
    var pD = wD(2861),
      sD = wD(36290),
      KD = wD(40780),
      rD = wD(1075),
      LD = wD(638),
      cD = wD(40634),
      gD = (wD(40689), wD(36744)),
      RD = wD(40654),
      AD = wD(40630),
      UD = wD(40895),
      fD = wD(40769);
    const ID = "[bloxd-wasm-client]";
    let BD = null,
      GD = null,
      hD = null,
      nD = null,
      MD = null;

    function OD() {
      return nD ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const DD = await (0, AD.N)();
        if (null === DD) return;
        if ((0, cD.n)(DD)) return (0, AD.Q)("none"), void JD("none");
        if ("wasm" !== (0, LD.f)(window.location.search) && null !== (0, RD.b)(DD, (0, RD.c)(DD))) return (0, AD.Q)("none"), void JD("none");
        (0, AD.Q)(DD.backend);
        const zD = await DD.load();
        JD(zD.name);
        const wD = "unloaded" === (0, pD.y)();
        if (wD && (0, AD.k)(), !await (0, UD.d)(zD)) return void console.warn(`${ID} the join's early wasm load failed: the boot loads the client itself`);
        if (!wD) return;
        const KD = (0, sD.j)(zD.name);
        void 0 !== KD ? (0, rD.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(KD.ms)
        }, {
          path: KD.path,
          build: zD.name
        }) : console.warn(`${ID} the join's wasm load left no record of how it compiled ${zD.name}`)
      })().catch((DD => {
        console.warn(`${ID} the join's early wasm load did not start: the boot loads the client itself`, DD)
      })), nD
    }

    function JD(DD) {
      null !== MD && (0, rD.logClientMeasurement)("wasm_compile_ahead", {
        hit: MD === DD ? 1 : 0
      }, {
        guessed: MD,
        loaded: DD
      })
    }

    function ED() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === hD) {
        var zD;
        const wD = null !== (zD = DD.joinStarted) && void 0 !== zD ? zD : () => !1;
        hD = Promise.all([XD(DD), QD(wD)]).then((() => {}))
      }
      return hD
    }

    function QD(DD) {
      return GD ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const zD = await (0, AD.f)();
        null === zD || DD() || "unloaded" !== (0, pD.y)() || (MD = zD.name, await (0, sD.b)([zD, KD.e], "low"))
      })().catch((DD => {
        console.warn(`${ID} the compile ahead of the join did not start: the join loads the client itself`, DD)
      })), GD
    }

    function XD() {
      let {
        joinStarted: DD = () => !1,
        language: zD = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return BD ??= async function(DD, zD) {
        if (!await async function(DD) {
            if (DD()) return !1;
            let zD;
            try {
              var pD;
              const DD = await fetch(`${wD.p}static/js/tz47m9.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!DD.ok) throw new Error(`HTTP ${DD.status}`);
              if (/\bno-store\b/.test(null !== (pD = DD.headers.get("Cache-Control")) && void 0 !== pD ? pD : "")) return !1;
              const sD = await DD.json();
              if (!Array.isArray(sD)) throw new Error("not a list");
              zD = sD
            } catch (KD) {
              return console.warn(`${ID} the join's chunk list did not load: the join downloads its chunks itself`, KD), !DD()
            }
            if (DD()) return !1;
            const sD = document.createElement("link").relList.supports("prefetch");
            for (const rD of zD) {
              const DD = `${wD.p}${rD}`;
              sD ? VD(DD) : (0, gD.e)(DD).catch((zD => {
                console.warn(`${ID} prefetching ${DD} failed`, zD)
              }))
            }
            return !0
          }(DD)) return;
        const pD = [(0, gD.e)((0, fD.f)())];
        (0, fD.d)(zD) && pD.push((0, gD.e)((0, fD.i)()));
        await Promise.all(pD)
      }(DD, zD).catch((DD => {
        console.warn(`${ID} the prefetch failed: the join downloads the client itself`, DD)
      })), BD
    }

    function VD(DD) {
      const zD = document.createElement("link");
      zD.rel = "prefetch", zD.href = DD, DD.endsWith(".js") && (zD.crossOrigin = "anonymous"), document.head.appendChild(zD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);