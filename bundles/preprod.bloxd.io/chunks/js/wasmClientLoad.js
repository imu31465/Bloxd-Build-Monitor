export const id = 61;
export const ids = [61];
export const modules = {
  37086: (QQ, WQ, XQ) => {
    async function wQ(QQ) {
      const WQ = await fetch(QQ, {
        priority: "low"
      });
      if (!WQ.ok) throw new Error(`Fetching ${QQ} failed: HTTP ${WQ.status}`);
      const XQ = WQ.body.getReader();
      for (; !(await XQ.read()).done;);
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  39336: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ
    });
    var wQ = XQ(9285),
      qQ = XQ(36795),
      TQ = XQ(39341);
    const zQ = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      sQ = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function FQ(QQ, WQ) {
      if (QQ instanceof qQ.f) return {
        at: zQ[WQ],
        code: 0
      };
      const XQ = (0, wQ.g)(QQ),
        FQ = "number" === typeof XQ ? XQ : 0;
      return null !== (0, TQ.m)(FQ).name ? {
        at: "refused",
        code: FQ
      } : {
        at: sQ[WQ],
        code: FQ
      }
    }
  },
  9285: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      g: () => zQ,
      j: () => sQ,
      k: () => PQ,
      n: () => FQ
    });
    var wQ = XQ(231),
      qQ = XQ(4948);

    function TQ(QQ) {
      return zQ(QQ) === wQ.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function zQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function sQ(QQ) {
      var WQ;
      return null !== (WQ = Object.keys(qQ.d).find((WQ => qQ.d[WQ] === QQ))) && void 0 !== WQ ? WQ : null
    }

    function FQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const PQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41257: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      prefetchWasmClient: () => bQ,
      probeWebgl2AheadOfJoin: () => PQ.N,
      startJoinLoad: () => DQ,
      startLoadAheadOfJoin: () => GQ
    });
    var wQ = XQ(3107),
      qQ = XQ(36608),
      TQ = XQ(41076),
      zQ = XQ(1109),
      sQ = XQ(40930),
      FQ = (XQ(40991), XQ(37086)),
      PQ = XQ(40928),
      gQ = XQ(41186),
      JQ = XQ(41056);
    const rQ = "[bloxd-wasm-client]";
    let IQ = null,
      jQ = null,
      BQ = null,
      yQ = null,
      VQ = null;

    function DQ() {
      return yQ ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const QQ = await (0, PQ.J)();
        if (null === QQ) return;
        if ((0, sQ.n)(QQ)) return (0, PQ.O)("none"), void pQ("none");
        (0, PQ.O)(QQ.backend);
        const WQ = await QQ.load();
        pQ(WQ.name);
        const XQ = "unloaded" === (0, wQ.z)();
        if (XQ && (0, PQ.n)(), !await (0, gQ.e)(WQ)) return void console.warn(`${rQ} the join's early wasm load failed: the boot loads the client itself`);
        if (!XQ) return;
        const TQ = (0, qQ.h)(WQ.name);
        void 0 !== TQ ? (0, zQ.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(TQ.ms)
        }, {
          path: TQ.path,
          build: WQ.name
        }) : console.warn(`${rQ} the join's wasm load left no record of how it compiled ${WQ.name}`)
      })().catch((QQ => {
        console.warn(`${rQ} the join's early wasm load did not start: the boot loads the client itself`, QQ)
      })), yQ
    }

    function pQ(QQ) {
      null !== VQ && (0, zQ.logClientMeasurement)("wasm_compile_ahead", {
        hit: VQ === QQ ? 1 : 0
      }, {
        guessed: VQ,
        loaded: QQ
      })
    }

    function GQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === BQ) {
        var WQ;
        const XQ = null !== (WQ = QQ.joinStarted) && void 0 !== WQ ? WQ : () => !1;
        BQ = Promise.all([bQ(QQ), UQ(XQ)]).then((() => {}))
      }
      return BQ
    }

    function UQ(QQ) {
      return jQ ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const WQ = await (0, PQ.f)();
        null === WQ || QQ() || "unloaded" !== (0, wQ.z)() || (VQ = WQ.name, await (0, qQ.c)([WQ, TQ.e], "low"))
      })().catch((QQ => {
        console.warn(`${rQ} the compile ahead of the join did not start: the join loads the client itself`, QQ)
      })), jQ
    }

    function bQ() {
      let {
        joinStarted: QQ = () => !1,
        language: WQ = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return IQ ??= async function(QQ, WQ) {
        if (!await async function(QQ) {
            if (QQ()) return !1;
            let WQ;
            try {
              var wQ;
              const QQ = await fetch(`${XQ.p}static/js/8104he.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!QQ.ok) throw new Error(`HTTP ${QQ.status}`);
              if (/\bno-store\b/.test(null !== (wQ = QQ.headers.get("Cache-Control")) && void 0 !== wQ ? wQ : "")) return !1;
              const qQ = await QQ.json();
              if (!Array.isArray(qQ)) throw new Error("not a list");
              WQ = qQ
            } catch (TQ) {
              return console.warn(`${rQ} the join's chunk list did not load: the join downloads its chunks itself`, TQ), !QQ()
            }
            if (QQ()) return !1;
            const qQ = document.createElement("link").relList.supports("prefetch");
            for (const zQ of WQ) {
              const QQ = `${XQ.p}${zQ}`;
              qQ ? vQ(QQ) : (0, FQ.c)(QQ).catch((WQ => {
                console.warn(`${rQ} prefetching ${QQ} failed`, WQ)
              }))
            }
            return !0
          }(QQ)) return;
        const wQ = [(0, FQ.c)((0, JQ.f)())];
        (0, JQ.c)(WQ) && wQ.push((0, FQ.c)((0, JQ.g)()));
        await Promise.all(wQ)
      }(QQ, WQ).catch((QQ => {
        console.warn(`${rQ} the prefetch failed: the join downloads the client itself`, QQ)
      })), IQ
    }

    function vQ(QQ) {
      const WQ = document.createElement("link");
      WQ.rel = "prefetch", WQ.href = QQ, QQ.endsWith(".js") && (WQ.crossOrigin = "anonymous"), document.head.appendChild(WQ)
    }
  },
  39341: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      e: () => TQ,
      i: () => sQ,
      m: () => gQ,
      o: () => FQ,
      q: () => zQ
    });
    var wQ = XQ(231);
    const qQ = 3e3,
      TQ = 15e3;

    function zQ(QQ) {
      const WQ = QQ.endsWith(wQ.n);
      return {
        text: (WQ ? QQ.slice(0, -wQ.n.length) : QQ) || null,
        dropsCache: WQ
      }
    }
    const sQ = "Either your internet isn't working or this is a bug.";

    function FQ(QQ, WQ) {
      const XQ = gQ(QQ);
      return null !== XQ.name && "" === wQ.e[XQ.name].text && null !== WQ ? WQ : XQ.reason
    }
    const PQ = "You were removed from the game.";

    function gQ(QQ) {
      var WQ;
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const qQ = null !== (WQ = Object.keys(wQ.e).find((WQ => wQ.e[WQ].code === QQ))) && void 0 !== WQ ? WQ : null;
      if (null === qQ) return {
        code: QQ,
        name: qQ,
        reason: null !== XQ && void 0 !== XQ ? XQ : `${sQ}\nCode: ${QQ}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: TQ,
        canReconnect: zQ = !1
      } = wQ.e[qQ], FQ = QQ === wQ.e.outdatedVersion.code || QQ === wQ.e.loadRecaptchaError.code;
      return {
        code: QQ,
        name: qQ,
        reason: "" !== TQ ? TQ : null !== XQ && void 0 !== XQ ? XQ : QQ === wQ.e.gameOrPluginKick.code ? PQ : `Code: ${QQ}`,
        canReconnect: zQ,
        automaticallyReconnect: QQ === wQ.e.customGameUpdated.code || QQ === wQ.e.duplicateLobbyNameError.code,
        requiresRefresh: FQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);