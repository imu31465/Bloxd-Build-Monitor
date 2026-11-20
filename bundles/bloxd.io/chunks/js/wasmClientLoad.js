export const id = 55;
export const ids = [55];
export const modules = {
  40182: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      prefetchWasmClient: () => ub,
      startJoinLoad: () => Cb,
      startLoadAheadOfJoin: () => Vb
    });
    var kb = sb(3500),
      Wb = sb(35976),
      ab = sb(40189),
      Tb = sb(1058),
      Ub = sb(649),
      Ib = sb(40207),
      Hb = (sb(40223), sb(40235)),
      fb = sb(40238),
      Mb = sb(40259);
    const Xb = "[bloxd-wasm-client]";
    let nb = null,
      mb = null,
      lb = null,
      Qb = null,
      eb = null;

    function Cb() {
      return Qb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const bb = await (0, fb.I)();
        if (null === bb) return;
        if ((0, Ib.l)(bb)) return (0, fb.M)("none"), void Nb("none");
        if ("wasm" !== (0, Ub.f)(window.location.search) && null !== (0, Hb.b)(bb, (0, Hb.e)(bb, !0))) return (0, fb.M)("none"), void Nb("none");
        (0, fb.M)(bb.backend);
        const cb = await bb.load();
        Nb(cb.name), "unloaded" === (0, kb.C)() && (0, fb.o)(), await (0, Wb.j)(cb, ab.f) || console.warn(`${Xb} the join's early wasm load failed: the boot loads the client itself`)
      })().catch((bb => {
        console.warn(`${Xb} the join's early wasm load did not start: the boot loads the client itself`, bb)
      })), Qb
    }

    function Nb(bb) {
      null !== eb && (0, Tb.logClientMeasurement)("wasm_compile_ahead", {
        hit: eb === bb ? 1 : 0
      }, {
        guessed: eb,
        loaded: bb
      })
    }

    function Vb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === lb) {
        var cb;
        const sb = null !== (cb = bb.joinStarted) && void 0 !== cb ? cb : () => !1;
        lb = Promise.all([ub(bb), Lb(sb)]).then((() => {}))
      }
      return lb
    }

    function Lb(bb) {
      return mb ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const cb = await (0, fb.j)();
        null === cb || bb() || "unloaded" !== (0, kb.C)() || (eb = cb.name, await (0, Wb.b)([cb, ab.f], "low"))
      })().catch((bb => {
        console.warn(`${Xb} the compile ahead of the join did not start: the join loads the client itself`, bb)
      })), mb
    }

    function ub() {
      let {
        joinStarted: bb = () => !1,
        language: cb = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return nb ??= async function(bb, cb) {
        if (!await async function(bb) {
            if (bb()) return !1;
            let cb;
            try {
              var kb;
              const bb = await fetch(`${sb.p}static/js/fsa8nn.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!bb.ok) throw new Error(`HTTP ${bb.status}`);
              if (/\bno-store\b/.test(null !== (kb = bb.headers.get("Cache-Control")) && void 0 !== kb ? kb : "")) return !1;
              const Wb = await bb.json();
              if (!Array.isArray(Wb)) throw new Error("not a list");
              cb = Wb
            } catch (ab) {
              return console.warn(`${Xb} the join's chunk list did not load: the join downloads its chunks itself`, ab), !bb()
            }
            if (bb()) return !1;
            const Wb = document.createElement("link").relList.supports("prefetch");
            for (const Tb of cb) {
              const bb = `${sb.p}${Tb}`;
              Wb ? Yb(bb) : hb(bb).catch((cb => {
                console.warn(`${Xb} prefetching ${bb} failed`, cb)
              }))
            }
            return !0
          }(bb)) return;
        const kb = [hb((0, Mb.f)())];
        (0, Mb.e)(cb) && kb.push(hb((0, Mb.g)()));
        await Promise.all(kb)
      }(bb, cb).catch((bb => {
        console.warn(`${Xb} the prefetch failed: the join downloads the client itself`, bb)
      })), nb
    }

    function Yb(bb) {
      const cb = document.createElement("link");
      cb.rel = "prefetch", cb.href = bb, bb.endsWith(".js") && (cb.crossOrigin = "anonymous"), document.head.appendChild(cb)
    }
    async function hb(bb) {
      const cb = await fetch(bb, {
        priority: "low"
      });
      if (!cb.ok) throw new Error(`Fetching ${bb} failed: HTTP ${cb.status}`);
      const sb = cb.body.getReader();
      for (; !(await sb.read()).done;);
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);