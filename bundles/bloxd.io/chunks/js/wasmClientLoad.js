export const id = 71;
export const ids = [71];
export const modules = {
  37685: (bb, wb, Mb) => {
    async function eb(bb) {
      const wb = await fetch(bb, {
        priority: "low"
      });
      if (!wb.ok) throw new Error(`Fetching ${bb} failed: HTTP ${wb.status}`);
      const Mb = wb.body.getReader();
      for (; !(await Mb.read()).done;);
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  42346: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      prefetchWasmClient: () => xb,
      probeWebgl2AheadOfJoin: () => Ib.K,
      startJoinLoad: () => mb,
      startLoadAheadOfJoin: () => zb
    });
    var eb = Mb(2463),
      Hb = Mb(37435),
      pb = Mb(42353),
      Vb = Mb(1400),
      gb = Mb(42375),
      lb = (Mb(42406), Mb(37685)),
      Lb = Mb(2372),
      Ib = Mb(42422),
      Ob = Mb(42528),
      Ub = Mb(37544);
    const tb = "[bloxd-wasm-client]";
    let Cb = null,
      Eb = null,
      Fb = null,
      Bb = null,
      sb = null;

    function mb() {
      return Bb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const bb = await (0, Ib.J)();
        if (null === bb) return;
        if ((0, gb.q)(bb)) return (0, Ib.N)("none"), void hb("none");
        (0, Ib.N)(bb.backend);
        const wb = await bb.load();
        hb(wb.name);
        const Mb = "unloaded" === (0, eb.v)();
        if (Mb && (0, Ib.m)(), !await (0, Ob.c)(wb)) return void console.warn(`${tb} the join's early wasm load failed: the boot loads the client itself`);
        if (!Mb) return;
        const pb = (0, Hb.m)(wb.name);
        void 0 !== pb ? (0, Vb.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(pb.ms)
        }, {
          path: pb.path,
          build: wb.name
        }) : console.warn(`${tb} the join's wasm load left no record of how it compiled ${wb.name}`)
      })().catch((bb => {
        console.warn(`${tb} the join's early wasm load did not start: the boot loads the client itself`, bb)
      })), Bb
    }

    function hb(bb) {
      null !== sb && (0, Vb.logClientMeasurement)("wasm_compile_ahead", {
        hit: sb === bb ? 1 : 0
      }, {
        guessed: sb,
        loaded: bb
      })
    }

    function zb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Fb) {
        var wb;
        const Mb = null !== (wb = bb.joinStarted) && void 0 !== wb ? wb : () => !1;
        Fb = Promise.all([xb(bb), Xb(Mb)]).then((() => {}))
      }
      return Fb
    }

    function Xb(bb) {
      return Eb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const wb = await (0, Ib.i)();
        null === wb || bb() || "unloaded" !== (0, eb.v)() || (sb = wb.name, await (0, Hb.d)([wb, pb.h], "low"))
      })().catch((bb => {
        console.warn(`${tb} the compile ahead of the join did not start: the join loads the client itself`, bb)
      })), Eb
    }

    function xb() {
      let {
        joinStarted: bb = () => !1,
        language: wb = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Cb ??= async function(bb, wb) {
        if (!await async function(bb) {
            if (bb()) return !1;
            let wb;
            try {
              var Mb;
              const bb = await fetch((0, Lb.e)("static/js/welxxc.wasmJoinFiles.json"), {
                ...Lb.d,
                priority: "low"
              });
              if (bb.ok && /\bno-store\b/.test(null !== (Mb = bb.headers.get("Cache-Control")) && void 0 !== Mb ? Mb : "")) return !1;
              wb = await (0, Lb.g)(bb)
            } catch (Hb) {
              return console.warn(`${tb} the join's chunk list did not load: the join downloads its chunks itself`, Hb), !bb()
            }
            if (bb()) return !1;
            const eb = document.createElement("link").relList.supports("prefetch");
            for (const pb of wb) {
              const bb = (0, Lb.e)(pb);
              eb ? jb(bb) : (0, lb.b)(bb).catch((wb => {
                console.warn(`${tb} prefetching ${bb} failed`, wb)
              }))
            }
            return !0
          }(bb)) return;
        const Mb = [(0, lb.b)((0, Ub.e)())];
        (0, Ub.b)(wb) && Mb.push((0, lb.b)((0, Ub.f)()));
        await Promise.all(Mb)
      }(bb, wb).catch((bb => {
        console.warn(`${tb} the prefetch failed: the join downloads the client itself`, bb)
      })), Cb
    }

    function jb(bb) {
      const wb = document.createElement("link");
      wb.rel = "prefetch", wb.href = bb, bb.endsWith(".js") && (wb.crossOrigin = "anonymous"), document.head.appendChild(wb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);