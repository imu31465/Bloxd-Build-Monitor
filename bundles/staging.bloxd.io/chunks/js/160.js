export const id = 160;
export const ids = [160];
export const modules = {
  38662: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      f: () => bk
    });
    var Dk = ik(26);
    let fk = !1;

    function Sk() {
      return fk
    }

    function bk(kk) {
      fk !== kk && (fk = kk, Dk.j.tm("replayViewer|videoExportChanged"))
    }
  },
  38672: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Yk,
      i: () => Lk,
      l: () => yk
    });
    var Dk = ik(4741),
      fk = ik(2752),
      Sk = ik(1850);
    const bk = new Map(Object.entries(Dk.m).map((kk => {
      let [ek, ik] = kk;
      return [ik, ek]
    })));

    function rk(kk) {
      return (0, Sk.C)(kk).toFixed(1)
    }

    function Pk(kk, ek) {
      return `camera set by ${bk.get(kk[ek+1])}: heading ${`${rk(kk[ek+2])} -> ${rk(kk[ek+4])}`} deg, pitch ${`${rk(kk[ek+3])} -> ${rk(kk[ek+5])}`} deg, at ${kk[ek].toFixed(1)} ms`
    }
    class mk {
      constructor(kk, ek) {
        this.width = kk, this.vK = ek, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * ek)
      }
      push(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Dk = 0; Dk < this.width; Dk++) ik[Dk] = kk[ek + Dk];
        return this.next = (this.next + 1) % this.vK, this.size = Math.min(this.size + 1, this.vK), ik
      }
      lines() {
        const kk = [],
          ek = (this.next - this.size + this.vK) % this.vK;
        for (let ik = 0; ik < this.size; ik++) {
          const Dk = (ek + ik) % this.vK * this.width;
          kk.push(Array.from(this.data.subarray(Dk, Dk + this.width)).join(","))
        }
        return kk
      }
    }
    const Mk = 0,
      Kk = 2,
      xk = 3,
      nk = 4;

    function Uk(kk) {
      return Number.isFinite(kk) ? String(Math.round(10 * kk) / 10) : String(kk)
    }

    function Hk(kk) {
      return Number.isFinite(kk) ? kk.toFixed(1) : String(kk)
    }
    class wk {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.FX = 0, this.pastLimit = 0, this.lockSkips = 0, this.Aw = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.FX > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.FX > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class lk {
      constructor() {
        var kk = this;
        this.remote = (0, fk.t)(), this.tally = new wk, this.records = new mk(10, this.remote ? 1 : 3600), this.events = new mk(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Dk, fk, Sk, bk, rk, Pk, mk, wk, lk, pk] = kk.records.push(ek, ik), yk = kk.tally;
          switch (yk.frames++, mk) {
            case Mk:
              return void yk.idle++;
            case nk:
              return void yk.Aw++;
            case xk:
              return yk.lockSkips++, void(0 === Sk && 0 === bk || kk.outlier(`lock skip dropped raw (${Uk(Sk)}, ${Uk(bk)}) at ${Hk(Dk)} ms`))
          }
          yk.looked++, Number.isFinite(fk) && (yk.dtMin = Math.min(yk.dtMin, fk), yk.dtMax = Math.max(yk.dtMax, fk), yk.dtSum += fk, fk > 0 && (yk.peakRate = Math.max(yk.peakRate, Math.hypot(rk, Pk) / fk))), yk.raw[0] += Sk, yk.raw[1] += bk, yk.turned[0] += rk, yk.turned[1] += Pk;
          const Yk = Math.abs(Sk) > pk || Math.abs(bk) > pk,
            Lk = `raw (${Uk(Sk)}, ${Uk(bk)}) over ${Hk(fk)} ms, limit ${Uk(pk)}, filter v (${wk.toFixed(3)}, ${lk.toFixed(3)}) px/ms, at ${Hk(Dk)} ms`;
          mk === Kk ? (yk.FX++, kk.outlier(`spike put right: ${Lk} -> turned (${Uk(rk)}, ${Uk(Pk)})`)) : Yk ? (yk.pastLimit++, kk.outlier(`kept past limit: ${Lk}`)) : fk > 50 && (yk.longFrames++, kk.remote || kk.outlier(`long frame: ${Lk}, turned in full`))
        }, this.onMouseMove = kk => {
          const ek = this.tally,
            {
              movementX: ik,
              movementY: Dk
            } = kk;
          ek.events++;
          const fk = Math.max(Math.abs(ik), Math.abs(Dk));
          ek.eventMax = Math.max(ek.eventMax, fk);
          const Sk = null !== document.pointerLockElement,
            bk = this.event;
          bk[0] = kk.timeStamp, bk[1] = ik, bk[2] = Dk, bk[3] = Sk ? 1 : 0, this.events.push(bk), fk >= 200 && (ek.bigEvents++, this.eventOutlier(`big mousemove (${ik}, ${Dk}) at ${Hk(kk.timeStamp)} ms, lock ${Sk?"XM":"free"}`))
        }, this.onLockChange = () => {
          const kk = document.pointerLockElement;
          (0, fk.l)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${Hk(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, fk.l)("look", `pointer lock request failed at ${Hk(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, fk.l)("look", `page ${document.visibilityState} at ${Hk(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const kk = this.tally;
          if (this.tally = new wk, !kk.moved() || this.remote && !kk.hasEvent()) return;
          const ek = kk.looked > 0 ? kk.dtSum / kk.looked : NaN,
            ik = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.Aw} carried`:""})`, `dt avg ${Hk(ek)} min ${Hk(kk.dtMin)} max ${Hk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${Uk(kk.eventMax)} px, ${kk.bigEvents} big)`, `raw (${Uk(kk.raw[0])}, ${Uk(kk.raw[1])}) turned (${Uk(kk.turned[0])}, ${Uk(kk.turned[1])})`, `peak ${kk.peakRate.toFixed(2)} px/ms`, `put right ${kk.FX}, past limit ${kk.pastLimit}, lock skips ${kk.lockSkips}`, "lock " + (document.pointerLockElement ? "XM" : "free")];
          kk.dropped > 0 && ik.push(`${kk.dropped} doubled spike copies dropped`), kk.cameraSets > 0 && ik.push(`${kk.cameraSets} camera sets`), kk.cameraSetsLost > 0 && ik.push(`${kk.cameraSetsLost} camera set records lost`), kk.lost > 0 && ik.push(`${kk.lost} records lost`), kk.suppressed > 0 && ik.push(`${kk.suppressed} outlier lines not shown`), (0, fk.l)("look", `1s: ${ik.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(kk, ek) {
        this.client = kk, this.takes = ek;
        const {
          screen: ik
        } = window;
        (0, fk.l)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${ik.width}x${ik.height}, pointer lock ${document.pointerLockElement?"XM":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, fk.k)("look", this.dump))
      }
      outlier(kk) {
        const ek = this.tally;
        ek.outliers >= 20 ? ek.suppressed++ : (ek.outliers++, (0, fk.l)("look", kk))
      }
      eventOutlier(kk) {
        const ek = this.tally;
        ek.eventLines >= 10 ? ek.suppressed++ : (ek.eventLines++, (0, fk.l)("look", kk))
      }
      takeRecords() {
        if (null === this.takes) return;
        const kk = this.takes.look();
        if (kk.length >= 2) {
          this.tally.lost += kk[0], this.tally.dropped += kk[1];
          for (let ek = 2; ek + 10 <= kk.length; ek += 10) this.record(kk, ek)
        }
        const ek = this.takes.cameraSets();
        if (ek.length >= Dk.e) {
          this.tally.cameraSetsLost += ek[0];
          for (let kk = Dk.e; kk + Dk.i <= ek.length; kk += Dk.i) this.tally.cameraSets++, this.outlier(Pk(ek, kk))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let pk = null;

    function yk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return pk ??= new lk, pk.start(kk, ek), pk.record
    }

    function Yk() {
      var kk;
      null === (kk = pk) || void 0 === kk || kk.endTake()
    }

    function Lk() {
      var kk;
      null === (kk = pk) || void 0 === kk || kk.droppedCopy()
    }
  },
  38615: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk
    });
    var Dk = ik(26),
      fk = ik(1273),
      Sk = ik(2910);
    const bk = "Reconnecting";
    class rk {
      constructor(kk) {
        this.hooks = kk, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = kk => {
          kk.persisted || this.leave()
        }, this.controller = new Sk.e((ek => kk.reconnect(ek)), {
          isSessionLive: () => !this.ended && kk.isLive(),
          onPhaseChanged: kk => {
            this.onPhaseChanged(kk)
          },
          onReconnected: ek => {
            kk.onReconnected(ek)
          },
          onGaveUp: ek => {
            !this.ended && kk.isLive() && kk.onGaveUp(this.sessionBased, ek)
          }
        })
      }
      onInitialInfo(kk, ek) {
        this.graceMs = kk, this.sessionBased = ek
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(kk) {
        this.ended || this.controller.onConnectionLost(kk, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const kk = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ek = this.controller.heldToken;
        this.end(), kk && "" !== ek && this.hooks.releaseSeat(ek)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(kk) {
        const ek = (0, Sk.n)(kk);
        ek !== this.stopped && (this.stopped = ek, this.hooks.freeze(ek));
        const ik = "frozen" === kk || "resuming" === kk && this.frozen;
        ik && !this.frozen ? (0, fk.s)(bk, {
          overridesPause: !0
        }) : !ik && this.frozen && (0, fk.p)(bk), this.frozen = ik, this.setListening("connected" !== kk), Dk.j.tm(Sk.k, ik ? "frozen" : kk)
      }
      setListening(kk) {
        kk !== this.listening && (this.listening = kk, kk ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38620: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    class Dk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = kk, this.now = ek, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const kk = this.now(),
            ek = kk - this.lastCheckAt <= 2e3;
          this.lastCheckAt = kk;
          const ik = "visible" === document.visibilityState;
          !ik || ek && this.wasVisible || (this.resumedAt = kk), this.wasVisible = ik, ik && kk - this.lastHeardAt > 12e3 && kk - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ek(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38636: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => mk,
      g: () => Mk
    });
    var Dk = ik(1676),
      fk = ik(189),
      Sk = ik(1659),
      bk = ik(1740),
      rk = ik(1177),
      Pk = ik(1104);
    async function mk(kk, ek) {
      return function(kk) {
        return "object" === typeof kk && null !== kk && kk.code === fk.c.VpnIp.code
      }(ek) && function(kk) {
        return Sk.b.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
      }(kk) && await async function(kk) {
        try {
          const {
            token: ek
          } = await (0, bk.b)(), {
            "3PSIDMCPP": ik
          } = await (0, Pk.postJsonWithMetricsCookiesAndJsonResponse)(`${rk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ek
          }, {
            retries: 0
          }, kk.getMetricsCookies());
          return kk.setAppAttestedAuthJwt(ik), !0
        } catch (ek) {
          return ek instanceof Dk.b && "failed" === ek.code ? (console.warn("The app couldn't get an App Check token:", ek), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", ek), !1
        }
      }(kk)
    }
    async function Mk(kk, ek) {
      try {
        return await ek()
      } catch (ik) {
        if (!await mk(kk, ik)) throw ik
      }
      return ek()
    }
  },
  38628: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => xk,
      d: () => Mk
    });
    var Dk = ik(189),
      fk = ik(1778),
      Sk = ik(1187),
      bk = ik(8718);
    const rk = [250, 500, 1e3, 2e3, 1250],
      Pk = 406;

    function mk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const {
        code: ek,
        message: ik
      } = kk, fk = Dk.c.duplicateLobbyNameError;
      return (ek === fk.code || ek === Pk) && (ik === fk.text || ik === fk.text + Dk.k)
    }
    async function Mk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.c;
      for (let fk = 0;; fk++) {
        let bk;
        (0, Sk.q)(ek);
        try {
          return await kk()
        } catch (Dk) {
          if (bk = rk[fk], void 0 === bk || !mk(Dk)) throw Dk
        }
        await ik(bk, ek)
      }
    }
    const Kk = new Set([Dk.c.duplicateLobbyNameError.code, Dk.c.lobbyCantBeCreated.code, Dk.c.roomDisposedEarlyError.code, Dk.c.roomDisposedLateError.code, Dk.c.serverRoomLimitReached.code]);

    function xk(kk) {
      if (mk(kk)) return !0;
      const ek = (0, bk.i)(kk);
      return "number" === typeof ek && Kk.has(ek)
    }
  },
  38644: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk
    });
    var Dk = ik(8718),
      fk = ik(36011),
      Sk = ik(38647);
    const bk = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      rk = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Pk(kk, ek) {
      if (kk instanceof fk.e) return {
        at: bk[ek],
        code: 0
      };
      const ik = (0, Dk.i)(kk),
        Pk = "number" === typeof ik ? ik : 0;
      return null !== (0, Sk.n)(Pk).name ? {
        at: "refused",
        code: Pk
      } : {
        at: rk[ek],
        code: Pk
      }
    }
  },
  8718: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      i: () => bk,
      m: () => rk,
      n: () => mk,
      r: () => Pk
    });
    var Dk = ik(189),
      fk = ik(4563);

    function Sk(kk) {
      return bk(kk) === Dk.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function bk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function rk(kk) {
      var ek;
      return null !== (ek = Object.keys(fk.c).find((ek => fk.c[ek] === kk))) && void 0 !== ek ? ek : null
    }

    function Pk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  35995: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => xk,
      d: () => Mk,
      g: () => nk,
      k: () => Kk
    });
    var Dk = ik(314),
      fk = ik(623),
      Sk = ik(634),
      bk = ik(38);
    const rk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Pk = "playSessionGameNameWithVariation",
      mk = "wasMatchmakePlayer";

    function Mk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      (0, Sk.h)(kk, rk)
    }

    function Kk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).setItem(mk, !0)
    }

    function xk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      return (0, Sk.c)(kk, rk)
    }

    function nk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.g;
      const ik = (0, Sk.c)(ek, rk),
        Mk = function(kk) {
          const ek = kk.getItem(Pk);
          return "string" !== typeof ek ? null : ek
        }(ek),
        Kk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).getItem(mk)
        }(ek);
      let xk;
      return xk = null !== ik && null !== Mk && (0, Sk.e)(ek, rk) && function(kk, ek, ik) {
          const fk = (0, Dk.Db)(kk),
            Sk = (0, Dk.Db)(ek),
            bk = (0, Dk.yb)(kk),
            rk = (0, Dk.yb)(ek);
          return !(fk !== Sk || !ik) || fk === Sk && bk === rk
        }(Mk, kk, Kk) ? ik : (0, fk.d)(), (0, Sk.i)(ek, rk, xk), ek.setItem(Pk, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).removeItem(mk)
        }(ek), xk
    }
  },
  35986: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => pk,
      g: () => yk
    });
    var Dk = ik(996),
      fk = ik(600),
      Sk = ik(314),
      bk = ik(1e3),
      rk = ik(610),
      Pk = ik(646),
      mk = ik(4458),
      Mk = ik(99),
      Kk = ik(131),
      xk = ik(1688),
      nk = ik(111),
      Uk = ik(35995),
      Hk = ik(38),
      wk = ik(630),
      lk = ik(36001);

    function pk() {
      var kk, ek;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (ek = navigator.language) && void 0 !== ek ? ek : "none"], "en-gb"]
    }

    function yk(kk, ek, ik, yk, Yk) {
      const Lk = (0, Dk.j)(ek) ? (0, Dk.p)(ek) : null,
        Ck = {
          cookies: (0, xk.getAllCookiesForGameNameWithVariation)(ek),
          isMobile: (0, Mk.isMobile)(),
          isUsingCustomGameTexturePack: null !== Lk && Yk(Lk),
          generalCookies: {
            joinDiscord: !!Hk.f.getItem("DiscordPressed"),
            newGo: mk.b,
            ...kk.getMetricsCookies(),
            trafficCode: yk,
            compliance: Mk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Mk.getBrowserName)(),
            version: (0, Mk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Mk.getPlatformType)(),
            deviceType: (0, nk.d)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: ik,
          languages: pk(),
          version: fk.c,
          siteUsed: Kk.t,
          subsiteUsed: Kk.E,
          playSessionId: (0, Uk.g)(ek),
          visitSessionId: (0, wk.d)(),
          clientReason: rk.l.reason,
          budgetBasis: (0, lk.c)(),
          ...null !== Pk.q && {
            diagClaim: Pk.q.claimId
          }
        };
      return null !== Lk && (0, Sk.tc)(Lk) ? (Ck.lobbyName = (0, Dk.g)(Lk, (0, Dk.m)(ek), ik), {
        roomName: `classic_${bk.f}`,
        joinOptions: Ck
      }) : {
        roomName: ek,
        joinOptions: Ck
      }
    }
  },
  36011: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      e: () => fk,
      g: () => Sk
    });
    var Dk = ik(1756);
    class fk extends Error {
      constructor(kk) {
        super("The game server didn't answer in time"), this.leg = kk, this.name = "SeatRequestTimedOut"
      }
    }
    const Sk = new class {
      constructor() {
        this.count = 0, this.answers = 0, this.waiting = new Set
      }
      get answered() {
        return this.answers
      }
      answer() {
        this.answers++
      }
      add() {
        this.count++;
        for (const kk of this.waiting) kk()
      }
      remove() {
        this.count--
      }
      whenSlow(kk) {
        return this.count > 0 || kk.aborted ? Promise.resolve(!kk.aborted) : new Promise((ek => {
          const ik = () => {
            this.waiting.delete(ik), ek(!kk.aborted)
          };
          this.waiting.add(ik), kk.addEventListener("abort", ik, {
            once: !0
          })
        }))
      }
    };
    class bk {
      constructor(kk) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Dk.b(45e3, kk), this.slow = new Dk.b(8e3, (() => {
          this.countedSlow = !0, Sk.add()
        }))
      }
      restart() {
        Sk.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Sk.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Sk.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Sk.remove())
      }
    }
  },
  36004: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => rk,
      k: () => bk,
      o: () => Pk,
      r: () => mk,
      v: () => Mk
    });
    var Dk = ik(189);
    const fk = 32 * ik(35841).h,
      Sk = 6144,
      bk = 4608,
      rk = 512;

    function Pk(kk) {
      return Math.floor(fk * kk / Sk)
    }

    function mk(kk) {
      const ek = kk - Math.floor(kk / 6);
      let ik = Dk.g.maxChunkHorizAddDistance,
        fk = Dk.g.maxChunkVertAddDistance;
      if (Mk(ik + 1, fk + 1) <= ek) return null;
      for (; Mk(ik + 1, fk + 1) > ek && (ik > 0 || fk > 0);) ik > fk ? ik-- : fk--;
      return {
        horizontal: ik,
        vertical: fk
      }
    }

    function Mk(kk, ek) {
      const ik = Math.max(kk, ek);
      let Dk = 0;
      for (let fk = -ik; fk <= ik; fk++)
        for (let Sk = -ik; Sk <= ik; Sk++)
          for (let bk = -ik; bk <= ik; bk++) Kk(kk, ek, fk, Sk, bk) && Dk++;
      return Dk
    }

    function Kk(kk, ek, ik, Dk, fk) {
      const Sk = ik * ik + fk * fk;
      return kk === ek ? Sk + Dk * Dk <= kk * kk : kk > ek ? Math.abs(Dk) <= ek && Sk + Dk * Dk <= kk * kk : Sk <= kk * kk && Sk + Dk * Dk <= ek * ek
    }
  },
  38647: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => Sk,
      k: () => rk,
      n: () => Mk,
      p: () => Pk,
      s: () => bk
    });
    var Dk = ik(189);
    const fk = 3e3,
      Sk = 15e3;

    function bk(kk) {
      const ek = kk.endsWith(Dk.k);
      return {
        text: (ek ? kk.slice(0, -Dk.k.length) : kk) || null,
        dropsCache: ek
      }
    }
    const rk = "Either your internet isn't working or this is a bug.";

    function Pk(kk, ek) {
      const ik = Mk(kk);
      return null !== ik.name && "" === Dk.c[ik.name].text && null !== ek ? ek : ik.reason
    }
    const mk = "You were removed from the game.";

    function Mk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const fk = null !== (ek = Object.keys(Dk.c).find((ek => Dk.c[ek].code === kk))) && void 0 !== ek ? ek : null;
      if (null === fk) return {
        code: kk,
        name: fk,
        reason: null !== ik && void 0 !== ik ? ik : `${rk}\nCode: ${kk}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Sk,
        canReconnect: bk = !1
      } = Dk.c[fk], Pk = kk === Dk.c.outdatedVersion.code || kk === Dk.c.loadRecaptchaError.code;
      return {
        code: kk,
        name: fk,
        reason: "" !== Sk ? Sk : null !== ik && void 0 !== ik ? ik : kk === Dk.c.gameOrPluginKick.code ? mk : `Code: ${kk}`,
        canReconnect: bk,
        automaticallyReconnect: kk === Dk.c.customGameUpdated.code || kk === Dk.c.duplicateLobbyNameError.code,
        requiresRefresh: Pk
      }
    }
  },
  36001: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ck,
      c: () => Lk,
      e: () => Yk
    });
    var Dk = ik(189),
      fk = ik(99),
      Sk = ik(686),
      bk = ik(4352),
      rk = ik(618),
      Pk = ik(36004);
    const mk = 1048576,
      Mk = 1024 * mk,
      Kk = 400 * mk,
      xk = 147456,
      nk = .5,
      Uk = 1.5 * Mk,
      Hk = 768 * mk;

    function wk(kk) {
      return Kk + kk * xk
    }

    function lk(kk, ek, ik) {
      var fk, bk;
      let {
        footprintBytes: rk,
        basis: mk,
        namesLimit: lk
      } = function(kk) {
        const {
          os: ek,
          deviceMemory: ik
        } = kk;
        if ("ios" === ek) switch ((0, Sk.e)(kk)) {
          case "ipad_m":
            return {
              footprintBytes: wk(Pk.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Hk, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Uk, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Hk, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof ik && Number.isFinite(ik) && ik > 0 ? {
          footprintBytes: ik * Mk * nk,
          basis: `memory-${ik}`,
          namesLimit: !0
        } : "android" === ek ? {
          footprintBytes: Hk,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: wk(Pk.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(kk);
      if (ik) {
        const kk = Math.min(rk, wk(Pk.d));
        rk = Kk + Math.max(0, kk - Kk) / 2, mk += "+killed", lk = !0
      }
      null !== ek && wk(ek) < rk && (rk = wk(ek), mk += "+learned", lk = !0);
      const pk = function(kk) {
          const ek = Math.floor((kk - Kk) / xk);
          return Math.min(Pk.d, Math.max(Pk.h, ek))
        }(rk),
        yk = (0, Pk.r)(pk);
      return {
        footprintBytes: rk,
        shedFootprintBytes: lk ? Math.max(rk, wk(pk)) : null,
        chunkCap: pk,
        maxHorizDistance: null !== (fk = null === yk || void 0 === yk ? void 0 : yk.horizontal) && void 0 !== fk ? fk : Dk.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (bk = null === yk || void 0 === yk ? void 0 : yk.vertical) && void 0 !== bk ? bk : Dk.g.maxChunkVertAddDistance,
        basis: mk
      }
    }
    let pk = null;

    function yk() {
      return lk({
        os: (0, fk.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Sk.i)()
      }, (0, bk.c)(), (0, rk.D)("wasm").length > 0)
    }

    function Yk() {
      return pk ??= yk(), pk
    }

    function Lk() {
      var kk;
      return (null !== (kk = pk) && void 0 !== kk ? kk : yk()).basis
    }

    function Ck(kk, ek) {
      return kk.setChunkCap(ek.chunkCap)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);