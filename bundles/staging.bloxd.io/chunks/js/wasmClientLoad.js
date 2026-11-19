export const id = 55;
export const ids = [55];
export const modules = {
  39865: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      prefetchWasmClient: () => lY,
      startJoinLoad: () => EY,
      startLoadAheadOfJoin: () => VY
    });
    var FY = DY(3312),
      AY = DY(35750),
      IY = DY(39871),
      RY = DY(1113),
      OY = DY(649),
      gY = DY(39890),
      aY = (DY(39906), DY(39916)),
      vY = DY(39924),
      uY = DY(39951);
    const sY = "[bloxd-wasm-client]";
    let iY = null,
      yY = null,
      QY = null,
      oY = null,
      WY = null;

    function EY() {
      return oY ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const YY = await (0, vY.L)();
        if (null === YY) return;
        if ((0, gY.l)(YY)) return (0, vY.P)("none"), void mY("none");
        if ("wasm" !== (0, OY.f)(window.location.search) && null !== (0, aY.b)(YY, (0, aY.e)(YY, !0))) return (0, vY.P)("none"), void mY("none");
        (0, vY.P)(YY.backend);
        const rY = await YY.load();
        mY(rY.name), "unloaded" === (0, FY.B)() && (0, vY.k)(), await (0, AY.h)(rY, IY.f) || console.warn(`${sY} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((YY => {
        console.warn(`${sY} the join's early wasm load did not start: the boot loads the client itself`, YY)
      })), oY
    }

    function mY(YY) {
      null !== WY && (0, RY.logClientMeasurement)("wasm_compile_ahead", {
        hit: WY === YY ? 1 : 0
      }, {
        guessed: WY,
        loaded: YY
      })
    }

    function VY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === QY) {
        var rY;
        const DY = null !== (rY = YY.joinStarted) && void 0 !== rY ? rY : () => !1;
        QY = Promise.all([lY(YY), SY(DY)]).then((() => {}))
      }
      return QY
    }

    function SY(YY) {
      return yY ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const rY = await (0, vY.h)();
        null === rY || YY() || "unloaded" !== (0, FY.B)() || (WY = rY.name, await (0, AY.b)([rY, IY.f], "low"))
      })().catch((YY => {
        console.warn(`${sY} the compile ahead of the join did not start: the join loads the client itself`, YY)
      })), yY
    }

    function lY() {
      let {
        joinStarted: YY = () => !1,
        language: rY = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return iY ??= async function(YY, rY) {
        if (!await async function(YY) {
            if (YY()) return !1;
            let rY;
            try {
              var FY;
              const YY = await fetch(`${DY.p}static/js/zyyatq.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!YY.ok) throw new Error(`HTTP ${YY.status}`);
              if (/\bno-store\b/.test(null !== (FY = YY.headers.get("Cache-Control")) && void 0 !== FY ? FY : "")) return !1;
              const AY = await YY.json();
              if (!Array.isArray(AY)) throw new Error("not a list");
              rY = AY
            } catch (IY) {
              return console.warn(`${sY} the join's chunk list did not load: the join downloads its chunks itself`, IY), !YY()
            }
            if (YY()) return !1;
            const AY = document.createElement("link").relList.supports("prefetch");
            for (const RY of rY) {
              const YY = `${DY.p}${RY}`;
              AY ? TY(YY) : eY(YY).catch((rY => {
                console.warn(`${sY} prefetching ${YY} failed`, rY)
              }))
            }
            return !0
          }(YY)) return;
        const FY = [eY((0, uY.h)())];
        (0, uY.e)(rY) && FY.push(eY((0, uY.l)()));
        await Promise.all(FY)
      }(YY, rY).catch((YY => {
        console.warn(`${sY} the prefetch failed: the join downloads the client itself`, YY)
      })), iY
    }

    function TY(YY) {
      const rY = document.createElement("link");
      rY.rel = "prefetch", rY.href = YY, YY.endsWith(".js") && (rY.crossOrigin = "anonymous"), document.head.appendChild(rY)
    }
    async function eY(YY) {
      const rY = await fetch(YY, {
        priority: "low"
      });
      if (!rY.ok) throw new Error(`Fetching ${YY} failed: HTTP ${rY.status}`);
      const DY = rY.body.getReader();
      for (; !(await DY.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);