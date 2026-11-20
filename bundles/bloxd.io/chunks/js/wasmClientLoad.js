export const id = 55;
export const ids = [55];
export const modules = {
  39877: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      prefetchWasmClient: () => ib,
      startJoinLoad: () => Zb,
      startLoadAheadOfJoin: () => zb
    });
    var Ab = Ub(3376),
      Mb = Ub(35776),
      Tb = Ub(39882),
      Eb = Ub(1003),
      Yb = Ub(603),
      Bb = Ub(39902),
      eb = (Ub(39921), Ub(39932)),
      vb = Ub(39940),
      Lb = Ub(39961);
    const Pb = "[bloxd-wasm-client]";
    let Xb = null,
      jb = null,
      Rb = null,
      kb = null,
      yb = null;

    function Zb() {
      return kb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const bb = await (0, vb.R)();
        if (null === bb) return;
        if ((0, Bb.p)(bb)) return (0, vb.U)("none"), void Db("none");
        if ("wasm" !== (0, Yb.e)(window.location.search) && null !== (0, eb.b)(bb, (0, eb.d)(bb, !0))) return (0, vb.U)("none"), void Db("none");
        (0, vb.U)(bb.backend);
        const ab = await bb.load();
        Db(ab.name), "unloaded" === (0, Ab.v)() && (0, vb.k)(), await (0, Mb.k)(ab, Tb.g) || console.warn(`${Pb} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((bb => {
        console.warn(`${Pb} the join's early wasm load did not start: the boot loads the client itself`, bb)
      })), kb
    }

    function Db(bb) {
      null !== yb && (0, Eb.logClientMeasurement)("wasm_compile_ahead", {
        hit: yb === bb ? 1 : 0
      }, {
        guessed: yb,
        loaded: bb
      })
    }

    function zb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Rb) {
        var ab;
        const Ub = null !== (ab = bb.joinStarted) && void 0 !== ab ? ab : () => !1;
        Rb = Promise.all([ib(bb), xb(Ub)]).then((() => {}))
      }
      return Rb
    }

    function xb(bb) {
      return jb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ab = await (0, vb.f)();
        null === ab || bb() || "unloaded" !== (0, Ab.v)() || (yb = ab.name, await (0, Mb.d)([ab, Tb.g], "low"))
      })().catch((bb => {
        console.warn(`${Pb} the compile ahead of the join did not start: the join loads the client itself`, bb)
      })), jb
    }

    function ib() {
      let {
        joinStarted: bb = () => !1,
        language: ab = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Xb ??= async function(bb, ab) {
        if (!await async function(bb) {
            if (bb()) return !1;
            let ab;
            try {
              var Ab;
              const bb = await fetch(`${Ub.p}static/js/teusab.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!bb.ok) throw new Error(`HTTP ${bb.status}`);
              if (/\bno-store\b/.test(null !== (Ab = bb.headers.get("Cache-Control")) && void 0 !== Ab ? Ab : "")) return !1;
              const Mb = await bb.json();
              if (!Array.isArray(Mb)) throw new Error("not a list");
              ab = Mb
            } catch (Tb) {
              return console.warn(`${Pb} the join's chunk list did not load: the join downloads its chunks itself`, Tb), !bb()
            }
            if (bb()) return !1;
            const Mb = document.createElement("link").relList.supports("prefetch");
            for (const Eb of ab) {
              const bb = `${Ub.p}${Eb}`;
              Mb ? fb(bb) : mb(bb).catch((ab => {
                console.warn(`${Pb} prefetching ${bb} failed`, ab)
              }))
            }
            return !0
          }(bb)) return;
        const Ab = [mb((0, Lb.g)())];
        (0, Lb.e)(ab) && Ab.push(mb((0, Lb.k)()));
        await Promise.all(Ab)
      }(bb, ab).catch((bb => {
        console.warn(`${Pb} the prefetch failed: the join downloads the client itself`, bb)
      })), Xb
    }

    function fb(bb) {
      const ab = document.createElement("link");
      ab.rel = "prefetch", ab.href = bb, bb.endsWith(".js") && (ab.crossOrigin = "anonymous"), document.head.appendChild(ab)
    }
    async function mb(bb) {
      const ab = await fetch(bb, {
        priority: "low"
      });
      if (!ab.ok) throw new Error(`Fetching ${bb} failed: HTTP ${ab.status}`);
      const Ub = ab.body.getReader();
      for (; !(await Ub.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);