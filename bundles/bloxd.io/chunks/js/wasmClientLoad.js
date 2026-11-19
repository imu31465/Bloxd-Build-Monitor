export const id = 55;
export const ids = [55];
export const modules = {
  39831: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      prefetchWasmClient: () => nD,
      startJoinLoad: () => ND,
      startLoadAheadOfJoin: () => XD
    });
    var ID = cD(3525),
      pD = cD(35734),
      iD = cD(39834),
      fD = cD(1077),
      bD = cD(646),
      QD = cD(39852),
      wD = (cD(39875), cD(39883)),
      SD = cD(39890),
      BD = cD(39913);
    const yD = "[bloxd-wasm-client]";
    let MD = null,
      tD = null,
      ZD = null,
      oD = null,
      vD = null;

    function ND() {
      return oD ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const DD = await (0, SD.N)();
        if (null === DD) return;
        if ((0, QD.o)(DD)) return (0, SD.R)("none"), void gD("none");
        if ("wasm" !== (0, bD.c)(window.location.search) && null !== (0, wD.c)(DD, (0, wD.g)(DD, !0))) return (0, SD.R)("none"), void gD("none");
        (0, SD.R)(DD.backend);
        const CD = await DD.load();
        gD(CD.name), "unloaded" === (0, ID.u)() && (0, SD.o)(), await (0, pD.i)(CD, iD.e) || console.warn(`${yD} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((DD => {
        console.warn(`${yD} the join's early wasm load did not start: the boot loads the client itself`, DD)
      })), oD
    }

    function gD(DD) {
      null !== vD && (0, fD.logClientMeasurement)("wasm_compile_ahead", {
        hit: vD === DD ? 1 : 0
      }, {
        guessed: vD,
        loaded: DD
      })
    }

    function XD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === ZD) {
        var CD;
        const cD = null !== (CD = DD.joinStarted) && void 0 !== CD ? CD : () => !1;
        ZD = Promise.all([nD(DD), mD(cD)]).then((() => {}))
      }
      return ZD
    }

    function mD(DD) {
      return tD ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const CD = await (0, SD.j)();
        null === CD || DD() || "unloaded" !== (0, ID.u)() || (vD = CD.name, await (0, pD.e)([CD, iD.e], "low"))
      })().catch((DD => {
        console.warn(`${yD} the compile ahead of the join did not start: the join loads the client itself`, DD)
      })), tD
    }

    function nD() {
      let {
        joinStarted: DD = () => !1,
        language: CD = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return MD ??= async function(DD, CD) {
        if (!await async function(DD) {
            if (DD()) return !1;
            let CD;
            try {
              var ID;
              const DD = await fetch(`${cD.p}static/js/wd13r.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!DD.ok) throw new Error(`HTTP ${DD.status}`);
              if (/\bno-store\b/.test(null !== (ID = DD.headers.get("Cache-Control")) && void 0 !== ID ? ID : "")) return !1;
              const pD = await DD.json();
              if (!Array.isArray(pD)) throw new Error("not a list");
              CD = pD
            } catch (iD) {
              return console.warn(`${yD} the join's chunk list did not load: the join downloads its chunks itself`, iD), !DD()
            }
            if (DD()) return !1;
            const pD = document.createElement("link").relList.supports("prefetch");
            for (const fD of CD) {
              const DD = `${cD.p}${fD}`;
              pD ? OD(DD) : PD(DD).catch((CD => {
                console.warn(`${yD} prefetching ${DD} failed`, CD)
              }))
            }
            return !0
          }(DD)) return;
        const ID = [PD((0, BD.d)())];
        (0, BD.b)(CD) && ID.push(PD((0, BD.e)()));
        await Promise.all(ID)
      }(DD, CD).catch((DD => {
        console.warn(`${yD} the prefetch failed: the join downloads the client itself`, DD)
      })), MD
    }

    function OD(DD) {
      const CD = document.createElement("link");
      CD.rel = "prefetch", CD.href = DD, DD.endsWith(".js") && (CD.crossOrigin = "anonymous"), document.head.appendChild(CD)
    }
    async function PD(DD) {
      const CD = await fetch(DD, {
        priority: "low"
      });
      if (!CD.ok) throw new Error(`Fetching ${DD} failed: HTTP ${CD.status}`);
      const cD = CD.body.getReader();
      for (; !(await cD.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);