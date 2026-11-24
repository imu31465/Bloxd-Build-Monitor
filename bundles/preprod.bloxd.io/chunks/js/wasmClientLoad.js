export const id = 59;
export const ids = [59];
export const modules = {
  36986: (pp, ip, cp) => {
    async function Op(pp) {
      const ip = await fetch(pp, {
        priority: "low"
      });
      if (!ip.ok) throw new Error(`Fetching ${pp} failed: HTTP ${ip.status}`);
      const cp = ip.body.getReader();
      for (; !(await cp.read()).done;);
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  39241: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Lp
    });
    var Op = cp(9034),
      op = cp(36689),
      Ip = cp(39244);
    const Sp = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      xp = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Lp(pp, ip) {
      if (pp instanceof op.f) return {
        at: Sp[ip],
        code: 0
      };
      const cp = (0, Op.f)(pp),
        Lp = "number" === typeof cp ? cp : 0;
      return null !== (0, Ip.h)(Lp).name ? {
        at: "refused",
        code: Lp
      } : {
        at: xp[ip],
        code: Lp
      }
    }
  },
  9034: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      f: () => Sp,
      h: () => xp,
      l: () => Yp,
      o: () => Lp
    });
    var Op = cp(195),
      op = cp(4719);

    function Ip(pp) {
      return Sp(pp) === Op.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Sp(pp) {
      return "object" === typeof pp && null !== pp ? pp.code : void 0
    }

    function xp(pp) {
      var ip;
      return null !== (ip = Object.keys(op.c).find((ip => op.c[ip] === pp))) && void 0 !== ip ? ip : null
    }

    function Lp(pp) {
      return "notWhitelisted" === pp ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Yp = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41270: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      prefetchWasmClient: () => jp,
      startJoinLoad: () => tp,
      startLoadAheadOfJoin: () => dp
    });
    var Op = cp(2963),
      op = cp(36519),
      Ip = cp(41058),
      Sp = cp(1080),
      xp = cp(40911),
      Lp = (cp(40976), cp(36986)),
      Yp = cp(40902),
      Dp = cp(41185),
      Ap = cp(41046);
    const Pp = "[bloxd-wasm-client]";
    let Wp = null,
      yp = null,
      Up = null,
      wp = null,
      vp = null;

    function tp() {
      return wp ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const pp = await (0, Yp.L)();
        if (null === pp) return;
        if ((0, xp.s)(pp)) return (0, Yp.N)("none"), void Hp("none");
        (0, Yp.N)(pp.backend);
        const ip = await pp.load();
        Hp(ip.name);
        const cp = "unloaded" === (0, Op.E)();
        if (cp && (0, Yp.j)(), !await (0, Dp.e)(ip)) return void console.warn(`${Pp} the join's early wasm load failed: the boot loads the client itself`);
        if (!cp) return;
        const Ip = (0, op.i)(ip.name);
        void 0 !== Ip ? (0, Sp.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Ip.ms)
        }, {
          path: Ip.path,
          build: ip.name
        }) : console.warn(`${Pp} the join's wasm load left no record of how it compiled ${ip.name}`)
      })().catch((pp => {
        console.warn(`${Pp} the join's early wasm load did not start: the boot loads the client itself`, pp)
      })), wp
    }

    function Hp(pp) {
      null !== vp && (0, Sp.logClientMeasurement)("wasm_compile_ahead", {
        hit: vp === pp ? 1 : 0
      }, {
        guessed: vp,
        loaded: pp
      })
    }

    function dp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Up) {
        var ip;
        const cp = null !== (ip = pp.joinStarted) && void 0 !== ip ? ip : () => !1;
        Up = Promise.all([jp(pp), ep(cp)]).then((() => {}))
      }
      return Up
    }

    function ep(pp) {
      return yp ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ip = await (0, Yp.f)();
        null === ip || pp() || "unloaded" !== (0, Op.E)() || (vp = ip.name, await (0, op.e)([ip, Ip.g], "low"))
      })().catch((pp => {
        console.warn(`${Pp} the compile ahead of the join did not start: the join loads the client itself`, pp)
      })), yp
    }

    function jp() {
      let {
        joinStarted: pp = () => !1,
        language: ip = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Wp ??= async function(pp, ip) {
        if (!await async function(pp) {
            if (pp()) return !1;
            let ip;
            try {
              var Op;
              const pp = await fetch(`${cp.p}static/js/sn3sfj.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!pp.ok) throw new Error(`HTTP ${pp.status}`);
              if (/\bno-store\b/.test(null !== (Op = pp.headers.get("Cache-Control")) && void 0 !== Op ? Op : "")) return !1;
              const op = await pp.json();
              if (!Array.isArray(op)) throw new Error("not a list");
              ip = op
            } catch (Ip) {
              return console.warn(`${Pp} the join's chunk list did not load: the join downloads its chunks itself`, Ip), !pp()
            }
            if (pp()) return !1;
            const op = document.createElement("link").relList.supports("prefetch");
            for (const Sp of ip) {
              const pp = `${cp.p}${Sp}`;
              op ? kp(pp) : (0, Lp.c)(pp).catch((ip => {
                console.warn(`${Pp} prefetching ${pp} failed`, ip)
              }))
            }
            return !0
          }(pp)) return;
        const Op = [(0, Lp.c)((0, Ap.f)())];
        (0, Ap.e)(ip) && Op.push((0, Lp.c)((0, Ap.j)()));
        await Promise.all(Op)
      }(pp, ip).catch((pp => {
        console.warn(`${Pp} the prefetch failed: the join downloads the client itself`, pp)
      })), Wp
    }

    function kp(pp) {
      const ip = document.createElement("link");
      ip.rel = "prefetch", ip.href = pp, pp.endsWith(".js") && (ip.crossOrigin = "anonymous"), document.head.appendChild(ip)
    }
  },
  39244: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      e: () => Ip,
      g: () => xp,
      h: () => Dp,
      k: () => Lp,
      n: () => Sp
    });
    var Op = cp(195);
    const op = 3e3,
      Ip = 15e3;

    function Sp(pp) {
      const ip = pp.endsWith(Op.l);
      return {
        text: (ip ? pp.slice(0, -Op.l.length) : pp) || null,
        dropsCache: ip
      }
    }
    const xp = "Either your internet isn't working or this is a bug.";

    function Lp(pp, ip) {
      const cp = Dp(pp);
      return null !== cp.name && "" === Op.e[cp.name].text && null !== ip ? ip : cp.reason
    }
    const Yp = "You were removed from the game.";

    function Dp(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const op = null !== (ip = Object.keys(Op.e).find((ip => Op.e[ip].code === pp))) && void 0 !== ip ? ip : null;
      if (null === op) return {
        code: pp,
        name: op,
        reason: null !== cp && void 0 !== cp ? cp : `${xp}\nCode: ${pp}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Ip,
        canReconnect: Sp = !1
      } = Op.e[op], Lp = pp === Op.e.outdatedVersion.code || pp === Op.e.loadRecaptchaError.code;
      return {
        code: pp,
        name: op,
        reason: "" !== Ip ? Ip : null !== cp && void 0 !== cp ? cp : pp === Op.e.gameOrPluginKick.code ? Yp : `Code: ${pp}`,
        canReconnect: Sp,
        automaticallyReconnect: pp === Op.e.customGameUpdated.code || pp === Op.e.duplicateLobbyNameError.code,
        requiresRefresh: Lp
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);