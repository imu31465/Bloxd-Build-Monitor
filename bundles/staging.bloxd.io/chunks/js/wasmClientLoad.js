export const id = 56;
export const ids = [56];
export const modules = {
  36426: (bb, ub, hb) => {
    async function Bb(bb) {
      const ub = await fetch(bb, {
        priority: "low"
      });
      if (!ub.ok) throw new Error(`Fetching ${bb} failed: HTTP ${ub.status}`);
      const hb = ub.body.getReader();
      for (; !(await hb.read()).done;);
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  40192: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      prefetchWasmClient: () => rb,
      startJoinLoad: () => Kb,
      startLoadAheadOfJoin: () => Cb
    });
    var Bb = hb(2683),
      Ob = hb(35948),
      Gb = hb(40198),
      Ub = hb(981),
      Lb = hb(599),
      Yb = hb(40212),
      Sb = (hb(40238), hb(36426)),
      ab = hb(40250),
      Hb = hb(40256),
      wb = hb(40278);
    const Zb = "[bloxd-wasm-client]";
    let Xb = null,
      pb = null,
      ob = null,
      Ab = null,
      lb = null;

    function Kb() {
      return Ab ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const bb = await (0, Hb.K)();
        if (null === bb) return;
        if ((0, Yb.p)(bb)) return (0, Hb.L)("none"), void Wb("none");
        if ("wasm" !== (0, Lb.d)(window.location.search) && null !== (0, ab.d)(bb, (0, ab.h)(bb, !0))) return (0, Hb.L)("none"), void Wb("none");
        (0, Hb.L)(bb.backend);
        const ub = await bb.load();
        Wb(ub.name);
        const hb = "unloaded" === (0, Bb.z)();
        if (hb && (0, Hb.k)(), !await (0, Ob.k)(ub, Gb.g)) return void console.warn(`${Zb} the join's early wasm load failed: the boot loads the client itself`);
        if (!hb) return;
        const Sb = (0, Ob.h)(ub.name);
        void 0 !== Sb ? (0, Ub.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Sb.ms)
        }, {
          path: Sb.path,
          build: ub.name
        }) : console.warn(`${Zb} the join's wasm load left no record of how it compiled ${ub.name}`)
      })().catch((bb => {
        console.warn(`${Zb} the join's early wasm load did not start: the boot loads the client itself`, bb)
      })), Ab
    }

    function Wb(bb) {
      null !== lb && (0, Ub.logClientMeasurement)("wasm_compile_ahead", {
        hit: lb === bb ? 1 : 0
      }, {
        guessed: lb,
        loaded: bb
      })
    }

    function Cb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === ob) {
        var ub;
        const hb = null !== (ub = bb.joinStarted) && void 0 !== ub ? ub : () => !1;
        ob = Promise.all([rb(bb), db(hb)]).then((() => {}))
      }
      return ob
    }

    function db(bb) {
      return pb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ub = await (0, Hb.g)();
        null === ub || bb() || "unloaded" !== (0, Bb.z)() || (lb = ub.name, await (0, Ob.c)([ub, Gb.g], "low"))
      })().catch((bb => {
        console.warn(`${Zb} the compile ahead of the join did not start: the join loads the client itself`, bb)
      })), pb
    }

    function rb() {
      let {
        joinStarted: bb = () => !1,
        language: ub = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Xb ??= async function(bb, ub) {
        if (!await async function(bb) {
            if (bb()) return !1;
            let ub;
            try {
              var Bb;
              const bb = await fetch(`${hb.p}static/js/halsg.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!bb.ok) throw new Error(`HTTP ${bb.status}`);
              if (/\bno-store\b/.test(null !== (Bb = bb.headers.get("Cache-Control")) && void 0 !== Bb ? Bb : "")) return !1;
              const Ob = await bb.json();
              if (!Array.isArray(Ob)) throw new Error("not a list");
              ub = Ob
            } catch (Gb) {
              return console.warn(`${Zb} the join's chunk list did not load: the join downloads its chunks itself`, Gb), !bb()
            }
            if (bb()) return !1;
            const Ob = document.createElement("link").relList.supports("prefetch");
            for (const Ub of ub) {
              const bb = `${hb.p}${Ub}`;
              Ob ? jb(bb) : (0, Sb.c)(bb).catch((ub => {
                console.warn(`${Zb} prefetching ${bb} failed`, ub)
              }))
            }
            return !0
          }(bb)) return;
        const Bb = [(0, Sb.c)((0, wb.h)())];
        (0, wb.e)(ub) && Bb.push((0, Sb.c)((0, wb.i)()));
        await Promise.all(Bb)
      }(bb, ub).catch((bb => {
        console.warn(`${Zb} the prefetch failed: the join downloads the client itself`, bb)
      })), Xb
    }

    function jb(bb) {
      const ub = document.createElement("link");
      ub.rel = "prefetch", ub.href = bb, bb.endsWith(".js") && (ub.crossOrigin = "anonymous"), document.head.appendChild(ub)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);