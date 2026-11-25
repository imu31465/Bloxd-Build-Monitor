export const id = 70;
export const ids = [70];
export const modules = {
  37750: (MM, rM, iM) => {
    async function OM(MM) {
      const rM = await fetch(MM, {
        priority: "low"
      });
      if (!rM.ok) throw new Error(`Fetching ${MM} failed: HTTP ${rM.status}`);
      const iM = rM.body.getReader();
      for (; !(await iM.read()).done;);
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  40094: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => nM
    });
    var OM = iM(9510),
      SM = iM(37437),
      jM = iM(40100);
    const aM = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      PM = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function nM(MM, rM) {
      if (MM instanceof SM.i) return {
        at: aM[rM],
        code: 0
      };
      const iM = (0, OM.f)(MM),
        nM = "number" === typeof iM ? iM : 0;
      return null !== (0, jM.m)(nM).name ? {
        at: "refused",
        code: nM
      } : {
        at: PM[rM],
        code: nM
      }
    }
  },
  9510: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      f: () => aM,
      h: () => PM,
      l: () => QM,
      p: () => nM
    });
    var OM = iM(181),
      SM = iM(5003);

    function jM(MM) {
      return aM(MM) === OM.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function aM(MM) {
      return "object" === typeof MM && null !== MM ? MM.code : void 0
    }

    function PM(MM) {
      var rM;
      return null !== (rM = Object.keys(SM.e).find((rM => SM.e[rM] === MM))) && void 0 !== rM ? rM : null
    }

    function nM(MM) {
      return "notWhitelisted" === MM ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const QM = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  42162: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      prefetchWasmClient: () => CM,
      probeWebgl2AheadOfJoin: () => QM.W,
      startJoinLoad: () => lM,
      startLoadAheadOfJoin: () => UM
    });
    var OM = iM(3185),
      SM = iM(37257),
      jM = iM(41961),
      aM = iM(1329),
      PM = iM(41798),
      nM = (iM(41862), iM(37750)),
      QM = iM(41793),
      zM = iM(42076),
      LM = iM(41939);
    const mM = "[bloxd-wasm-client]";
    let HM = null,
      hM = null,
      JM = null,
      dM = null,
      yM = null;

    function lM() {
      return dM ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const MM = await (0, QM.U)();
        if (null === MM) return;
        if ((0, PM.l)(MM)) return (0, QM.Y)("none"), void EM("none");
        (0, QM.Y)(MM.backend);
        const rM = await MM.load();
        EM(rM.name);
        const iM = "unloaded" === (0, OM.B)();
        if (iM && (0, QM.r)(), !await (0, zM.b)(rM)) return void console.warn(`${mM} the join's early wasm load failed: the boot loads the client itself`);
        if (!iM) return;
        const jM = (0, SM.j)(rM.name);
        void 0 !== jM ? (0, aM.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(jM.ms)
        }, {
          path: jM.path,
          build: rM.name
        }) : console.warn(`${mM} the join's wasm load left no record of how it compiled ${rM.name}`)
      })().catch((MM => {
        console.warn(`${mM} the join's early wasm load did not start: the boot loads the client itself`, MM)
      })), dM
    }

    function EM(MM) {
      null !== yM && (0, aM.logClientMeasurement)("wasm_compile_ahead", {
        hit: yM === MM ? 1 : 0
      }, {
        guessed: yM,
        loaded: MM
      })
    }

    function UM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === JM) {
        var rM;
        const iM = null !== (rM = MM.joinStarted) && void 0 !== rM ? rM : () => !1;
        JM = Promise.all([CM(MM), GM(iM)]).then((() => {}))
      }
      return JM
    }

    function GM(MM) {
      return hM ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const rM = await (0, QM.k)();
        null === rM || MM() || "unloaded" !== (0, OM.B)() || (yM = rM.name, await (0, SM.d)([rM, jM.f], "low"))
      })().catch((MM => {
        console.warn(`${mM} the compile ahead of the join did not start: the join loads the client itself`, MM)
      })), hM
    }

    function CM() {
      let {
        joinStarted: MM = () => !1,
        language: rM = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return HM ??= async function(MM, rM) {
        if (!await async function(MM) {
            if (MM()) return !1;
            let rM;
            try {
              var OM;
              const MM = await fetch(`${iM.p}static/js/fo1voe.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!MM.ok) throw new Error(`HTTP ${MM.status}`);
              if (/\bno-store\b/.test(null !== (OM = MM.headers.get("Cache-Control")) && void 0 !== OM ? OM : "")) return !1;
              const SM = await MM.json();
              if (!Array.isArray(SM)) throw new Error("not a list");
              rM = SM
            } catch (jM) {
              return console.warn(`${mM} the join's chunk list did not load: the join downloads its chunks itself`, jM), !MM()
            }
            if (MM()) return !1;
            const SM = document.createElement("link").relList.supports("prefetch");
            for (const aM of rM) {
              const MM = `${iM.p}${aM}`;
              SM ? eM(MM) : (0, nM.b)(MM).catch((rM => {
                console.warn(`${mM} prefetching ${MM} failed`, rM)
              }))
            }
            return !0
          }(MM)) return;
        const OM = [(0, nM.b)((0, LM.f)())];
        (0, LM.d)(rM) && OM.push((0, nM.b)((0, LM.g)()));
        await Promise.all(OM)
      }(MM, rM).catch((MM => {
        console.warn(`${mM} the prefetch failed: the join downloads the client itself`, MM)
      })), HM
    }

    function eM(MM) {
      const rM = document.createElement("link");
      rM.rel = "prefetch", rM.href = MM, MM.endsWith(".js") && (rM.crossOrigin = "anonymous"), document.head.appendChild(rM)
    }
  },
  40100: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM,
      f: () => jM,
      j: () => PM,
      m: () => zM,
      p: () => nM,
      t: () => aM
    });
    var OM = iM(181);
    const SM = 3e3,
      jM = 15e3;

    function aM(MM) {
      const rM = MM.endsWith(OM.k);
      return {
        text: (rM ? MM.slice(0, -OM.k.length) : MM) || null,
        dropsCache: rM
      }
    }
    const PM = "Either your internet isn't working or this is a bug.";

    function nM(MM, rM) {
      const iM = zM(MM);
      return null !== iM.name && "" === OM.d[iM.name].text && null !== rM ? rM : iM.reason
    }
    const QM = "You were removed from the game.";

    function zM(MM) {
      var rM;
      let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const SM = null !== (rM = Object.keys(OM.d).find((rM => OM.d[rM].code === MM))) && void 0 !== rM ? rM : null;
      if (null === SM) return {
        code: MM,
        name: SM,
        reason: null !== iM && void 0 !== iM ? iM : `${PM}\nCode: ${MM}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: jM,
        canReconnect: aM = !1
      } = OM.d[SM], nM = MM === OM.d.outdatedVersion.code || MM === OM.d.loadRecaptchaError.code;
      return {
        code: MM,
        name: SM,
        reason: "" !== jM ? jM : null !== iM && void 0 !== iM ? iM : MM === OM.d.gameOrPluginKick.code ? QM : `Code: ${MM}`,
        canReconnect: aM,
        automaticallyReconnect: MM === OM.d.customGameUpdated.code || MM === OM.d.duplicateLobbyNameError.code,
        requiresRefresh: nM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);