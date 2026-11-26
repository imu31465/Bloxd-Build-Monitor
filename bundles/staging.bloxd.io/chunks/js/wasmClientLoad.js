export const id = 70;
export const ids = [70];
export const modules = {
  37968: (VV, eV, xV) => {
    async function JV(VV) {
      const eV = await fetch(VV, {
        priority: "low"
      });
      if (!eV.ok) throw new Error(`Fetching ${VV} failed: HTTP ${eV.status}`);
      const xV = eV.body.getReader();
      for (; !(await xV.read()).done;);
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  40258: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => QV
    });
    var JV = xV(9527),
      YV = xV(37633),
      UV = xV(40264);
    const yV = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      pV = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function QV(VV, eV) {
      if (VV instanceof YV.d) return {
        at: yV[eV],
        code: 0
      };
      const xV = (0, JV.d)(VV),
        QV = "number" === typeof xV ? xV : 0;
      return null !== (0, UV.l)(QV).name ? {
        at: "refused",
        code: QV
      } : {
        at: pV[eV],
        code: QV
      }
    }
  },
  9527: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => yV,
      f: () => pV,
      h: () => nV,
      j: () => QV
    });
    var JV = xV(206),
      YV = xV(5103);

    function UV(VV) {
      return yV(VV) === JV.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yV(VV) {
      return "object" === typeof VV && null !== VV ? VV.code : void 0
    }

    function pV(VV) {
      var eV;
      return null !== (eV = Object.keys(YV.b).find((eV => YV.b[eV] === VV))) && void 0 !== eV ? eV : null
    }

    function QV(VV) {
      return "notWhitelisted" === VV ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const nV = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  42363: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      prefetchWasmClient: () => TV,
      probeWebgl2AheadOfJoin: () => nV.S,
      startJoinLoad: () => jV,
      startLoadAheadOfJoin: () => tV
    });
    var JV = xV(3194),
      YV = xV(37469),
      UV = xV(42158),
      yV = xV(1353),
      pV = xV(42001),
      QV = (xV(42066), xV(37968)),
      nV = xV(41994),
      wV = xV(42295),
      ZV = xV(42140);
    const vV = "[bloxd-wasm-client]";
    let rV = null,
      kV = null,
      bV = null,
      EV = null,
      BV = null;

    function jV() {
      return EV ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const VV = await (0, nV.R)();
        if (null === VV) return;
        if ((0, pV.q)(VV)) return (0, nV.U)("none"), void qV("none");
        (0, nV.U)(VV.backend);
        const eV = await VV.load();
        qV(eV.name);
        const xV = "unloaded" === (0, JV.C)();
        if (xV && (0, nV.n)(), !await (0, wV.d)(eV)) return void console.warn(`${vV} the join's early wasm load failed: the boot loads the client itself`);
        if (!xV) return;
        const UV = (0, YV.d)(eV.name);
        void 0 !== UV ? (0, yV.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(UV.ms)
        }, {
          path: UV.path,
          build: eV.name
        }) : console.warn(`${vV} the join's wasm load left no record of how it compiled ${eV.name}`)
      })().catch((VV => {
        console.warn(`${vV} the join's early wasm load did not start: the boot loads the client itself`, VV)
      })), EV
    }

    function qV(VV) {
      null !== BV && (0, yV.logClientMeasurement)("wasm_compile_ahead", {
        hit: BV === VV ? 1 : 0
      }, {
        guessed: BV,
        loaded: VV
      })
    }

    function tV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === bV) {
        var eV;
        const xV = null !== (eV = VV.joinStarted) && void 0 !== eV ? eV : () => !1;
        bV = Promise.all([TV(VV), FV(xV)]).then((() => {}))
      }
      return bV
    }

    function FV(VV) {
      return kV ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const eV = await (0, nV.j)();
        null === eV || VV() || "unloaded" !== (0, JV.C)() || (BV = eV.name, await (0, YV.b)([eV, UV.f], "low"))
      })().catch((VV => {
        console.warn(`${vV} the compile ahead of the join did not start: the join loads the client itself`, VV)
      })), kV
    }

    function TV() {
      let {
        joinStarted: VV = () => !1,
        language: eV = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return rV ??= async function(VV, eV) {
        if (!await async function(VV) {
            if (VV()) return !1;
            let eV;
            try {
              var JV;
              const VV = await fetch(`${xV.p}static/js/pxmq3aq.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!VV.ok) throw new Error(`HTTP ${VV.status}`);
              if (/\bno-store\b/.test(null !== (JV = VV.headers.get("Cache-Control")) && void 0 !== JV ? JV : "")) return !1;
              const YV = await VV.json();
              if (!Array.isArray(YV)) throw new Error("not a list");
              eV = YV
            } catch (UV) {
              return console.warn(`${vV} the join's chunk list did not load: the join downloads its chunks itself`, UV), !VV()
            }
            if (VV()) return !1;
            const YV = document.createElement("link").relList.supports("prefetch");
            for (const yV of eV) {
              const VV = `${xV.p}${yV}`;
              YV ? PV(VV) : (0, QV.b)(VV).catch((eV => {
                console.warn(`${vV} prefetching ${VV} failed`, eV)
              }))
            }
            return !0
          }(VV)) return;
        const JV = [(0, QV.b)((0, ZV.g)())];
        (0, ZV.d)(eV) && JV.push((0, QV.b)((0, ZV.h)()));
        await Promise.all(JV)
      }(VV, eV).catch((VV => {
        console.warn(`${vV} the prefetch failed: the join downloads the client itself`, VV)
      })), rV
    }

    function PV(VV) {
      const eV = document.createElement("link");
      eV.rel = "prefetch", eV.href = VV, VV.endsWith(".js") && (eV.crossOrigin = "anonymous"), document.head.appendChild(eV)
    }
  },
  40264: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV,
      f: () => UV,
      i: () => pV,
      l: () => wV,
      n: () => QV,
      q: () => yV
    });
    var JV = xV(206);
    const YV = 3e3,
      UV = 15e3;

    function yV(VV) {
      const eV = VV.endsWith(JV.l);
      return {
        text: (eV ? VV.slice(0, -JV.l.length) : VV) || null,
        dropsCache: eV
      }
    }
    const pV = "Either your internet isn't working or this is a bug.";

    function QV(VV, eV) {
      const xV = wV(VV);
      return null !== xV.name && "" === JV.b[xV.name].text && null !== eV ? eV : xV.reason
    }
    const nV = "You were removed from the game.";

    function wV(VV) {
      var eV;
      let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const YV = null !== (eV = Object.keys(JV.b).find((eV => JV.b[eV].code === VV))) && void 0 !== eV ? eV : null;
      if (null === YV) return {
        code: VV,
        name: YV,
        reason: null !== xV && void 0 !== xV ? xV : `${pV}\nCode: ${VV}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: UV,
        canReconnect: yV = !1
      } = JV.b[YV], QV = VV === JV.b.outdatedVersion.code || VV === JV.b.loadRecaptchaError.code;
      return {
        code: VV,
        name: YV,
        reason: "" !== UV ? UV : null !== xV && void 0 !== xV ? xV : VV === JV.b.gameOrPluginKick.code ? nV : `Code: ${VV}`,
        canReconnect: yV,
        automaticallyReconnect: VV === JV.b.customGameUpdated.code || VV === JV.b.duplicateLobbyNameError.code,
        requiresRefresh: QV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);