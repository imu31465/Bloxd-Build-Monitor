export const id = 61;
export const ids = [61];
export const modules = {
  39535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      d: () => lq
    });
    const Yq = "The world isn't loaded, so no blocks can be seen.",
      lq = "The world isn't loaded, so nothing in it can be seen."
  },
  39047: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq,
      h: () => dq,
      k: () => aq
    });
    var Yq = gq(2733);
    const lq = 0,
      Oq = 2,
      mq = 3,
      xq = 4;
    class Aq {
      constructor(qq, Eq) {
        this.width = qq, this.WB = Eq, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(qq * Eq)
      }
      push(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Yq = 0; Yq < this.width; Yq++) gq[Yq] = qq[Eq + Yq];
        return this.next = (this.next + 1) % this.WB, this.size = Math.min(this.size + 1, this.WB), gq
      }
      lines() {
        const qq = [],
          Eq = (this.next - this.size + this.WB) % this.WB;
        for (let gq = 0; gq < this.size; gq++) {
          const Yq = (Eq + gq) % this.WB * this.width;
          qq.push(Array.from(this.data.subarray(Yq, Yq + this.width)).join(","))
        }
        return qq
      }
    }

    function cq(qq) {
      return Number.isFinite(qq) ? String(Math.round(10 * qq) / 10) : String(qq)
    }

    function uq(qq) {
      return Number.isFinite(qq) ? qq.toFixed(1) : String(qq)
    }
    class Bq {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lK = 0, this.pastLimit = 0, this.lockSkips = 0, this.kV = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Wq {
      constructor() {
        var qq = this;
        this.tally = new Bq, this.records = new Aq(10, 3600), this.events = new Aq(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Yq, Aq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq] = qq.records.push(Eq, gq), oq = qq.tally;
          switch (oq.frames++, Vq) {
            case lq:
              return void oq.idle++;
            case xq:
              return void oq.kV++;
            case mq:
              return oq.lockSkips++, void(0 === Bq && 0 === Wq || qq.outlier(`lock skip dropped raw (${cq(Bq)}, ${cq(Wq)}) at ${uq(Yq)} ms`))
          }
          oq.looked++, Number.isFinite(Aq) && (oq.dtMin = Math.min(oq.dtMin, Aq), oq.dtMax = Math.max(oq.dtMax, Aq), oq.dtSum += Aq, Aq > 0 && (oq.peakRate = Math.max(oq.peakRate, Math.hypot(Nq, aq) / Aq))), oq.raw[0] += Bq, oq.raw[1] += Wq, oq.turned[0] += Nq, oq.turned[1] += aq;
          const Pq = Math.abs(Bq) > Hq || Math.abs(Wq) > Hq,
            Qq = `raw (${cq(Bq)}, ${cq(Wq)}) over ${uq(Aq)} ms, limit ${cq(Hq)}, filter v (${dq.toFixed(3)}, ${jq.toFixed(3)}) px/ms, at ${uq(Yq)} ms`;
          Vq === Oq ? (oq.lK++, qq.outlier(`spike put right: ${Qq} -> turned (${cq(Nq)}, ${cq(aq)})`)) : Pq ? (oq.pastLimit++, qq.outlier(`kept past limit: ${Qq}`)) : Aq > 50 && (oq.longFrames++, qq.outlier(`long frame: ${Qq}, turned in full`))
        }, this.onMouseMove = qq => {
          const Eq = this.tally,
            {
              movementX: gq,
              movementY: Yq
            } = qq;
          Eq.events++;
          const lq = Math.max(Math.abs(gq), Math.abs(Yq));
          Eq.eventMax = Math.max(Eq.eventMax, lq);
          const Oq = null !== document.pointerLockElement,
            mq = this.event;
          mq[0] = qq.timeStamp, mq[1] = gq, mq[2] = Yq, mq[3] = Oq ? 1 : 0, this.events.push(mq), lq >= 200 && (Eq.bigEvents++, this.eventOutlier(`big mousemove (${gq}, ${Yq}) at ${uq(qq.timeStamp)} ms, lock ${Oq?"Fc":"free"}`))
        }, this.onLockChange = () => {
          const qq = document.pointerLockElement;
          (0, Yq.m)("look", `pointer lock ${qq?`gained (${qq.tagName.toLowerCase()})`:"lost"} at ${uq(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Yq.m)("look", `pointer lock request failed at ${uq(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Yq.m)("look", `page ${document.visibilityState} at ${uq(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const qq = this.tally;
          if (this.tally = new Bq, 0 === qq.events && 0 === qq.raw[0] && 0 === qq.raw[1] && 0 === qq.lockSkips && 0 === qq.lK && 0 === qq.dropped) return;
          const Eq = qq.looked > 0 ? qq.dtSum / qq.looked : NaN,
            gq = [`${qq.frames} frames (${qq.looked} looked, ${qq.idle} idle${"wasm"===this.client?`, ${qq.kV} carried`:""})`, `dt avg ${uq(Eq)} min ${uq(qq.dtMin)} max ${uq(qq.dtMax)}, ${qq.longFrames} long`, `${qq.events} mousemoves (max ${cq(qq.eventMax)} px, ${qq.bigEvents} big)`, `raw (${cq(qq.raw[0])}, ${cq(qq.raw[1])}) turned (${cq(qq.turned[0])}, ${cq(qq.turned[1])})`, `peak ${qq.peakRate.toFixed(2)} px/ms`, `put right ${qq.lK}, past limit ${qq.pastLimit}, lock skips ${qq.lockSkips}`, "lock " + (document.pointerLockElement ? "Fc" : "free")];
          qq.dropped > 0 && gq.push(`${qq.dropped} doubled spike copies dropped`), qq.lost > 0 && gq.push(`${qq.lost} records lost`), qq.suppressed > 0 && gq.push(`${qq.suppressed} outlier lines not shown`), (0, Yq.m)("look", `1s: ${gq.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(qq, Eq) {
        this.client = qq, this.take = Eq;
        const {
          screen: gq
        } = window;
        (0, Yq.m)("look", `start: ${qq} client, dpr ${window.devicePixelRatio}, screen ${gq.width}x${gq.height}, pointer lock ${document.pointerLockElement?"Fc":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Yq.j)("look", this.dump))
      }
      outlier(qq) {
        const Eq = this.tally;
        Eq.outliers >= 20 ? Eq.suppressed++ : (Eq.outliers++, (0, Yq.m)("look", qq))
      }
      eventOutlier(qq) {
        const Eq = this.tally;
        Eq.eventLines >= 10 ? Eq.suppressed++ : (Eq.eventLines++, (0, Yq.m)("look", qq))
      }
      takeRecords() {
        var qq;
        const Eq = null === (qq = this.take) || void 0 === qq ? void 0 : qq.call(this);
        if (Eq && Eq.length >= 2) {
          this.tally.lost += Eq[0], this.tally.dropped += Eq[1];
          for (let qq = 2; qq + 10 <= Eq.length; qq += 10) this.record(Eq, qq)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Nq = null;

    function aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Nq ??= new Wq, Nq.start(qq, Eq), Nq.record
    }

    function Vq() {
      var qq;
      null === (qq = Nq) || void 0 === qq || qq.endTake()
    }

    function dq() {
      var qq;
      null === (qq = Nq) || void 0 === qq || qq.droppedCopy()
    }
  },
  9167: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    const Yq = new Set(["chunkBorders"])
  },
  9321: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      f: () => uq
    });
    var Yq = gq(1547);

    function lq(qq) {
      var Eq;
      return {
        ...mq.store,
        yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
      }
    }
    const Oq = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mq = {
        player: Oq,
        store: {
          ...Oq,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xq(qq, Eq) {
      qq instanceof Promise ? qq.then(Eq).catch((qq => {
        console.error("Couldn't open the preview", qq)
      })) : Eq(qq)
    }
    class Aq {
      constructor(qq) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
        }))
      }
      show(qq) {
        var Eq;
        this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    class cq {
      constructor(qq) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(qq).then((qq => qq.ready)), xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
      }
      setCosmetic(qq, Eq) {
        var gq;
        null === (gq = this.opened) || void 0 === gq || gq.setCosmetic(qq, Eq)
      }
      playEmote(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.playEmote(qq)
      }
      setOrbit(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.setOrbit(qq)
      }
      resetCamera() {
        var qq;
        null === (qq = this.opened) || void 0 === qq || qq.resetCamera()
      }
      async untilDrawn(qq) {
        var Eq;
        await this.ready, await (null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    const uq = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(qq) {
        this.host = qq
      }
      setDefaultHost(qq) {
        this.makeDefault = qq
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(qq) {
        return new Aq(this.current().openMob(qq))
      }
      openPet(qq) {
        return new Aq(this.current().openPet(qq))
      }
      openMobLineup(qq) {
        return new Aq(this.current().openMobLineup(qq))
      }
      openCharacter(qq, Eq) {
        return new cq(this.current().openCharacter(qq, Eq))
      }
    }
  },
  39189: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq,
      d: () => Wq
    });
    var Yq = gq(163),
      lq = gq(183),
      Oq = gq(1459),
      mq = gq(2853),
      xq = gq(1477),
      Aq = gq(36519),
      cq = gq(623),
      uq = gq(39158);

    function Bq(qq) {
      (0, mq.d)("matchmake_failed", qq, Yq.h[Yq.h.SHADER_PACK])
    }
    async function Wq(qq, Eq) {
      var gq;
      const Yq = null === (gq = await uq.shaderPackPage.preload()) || void 0 === gq ? void 0 : gq.listing,
        mq = (0, Aq.e)();
      Yq && null !== mq && await xq.e.reportShaderPackSession(qq, {
        packId: Yq.packId,
        sourceHash: Yq.sourceHash,
        game: (0, Oq.d)(Eq, lq.n, "other"),
        playSessionId: mq,
        visitSessionId: (0, cq.e)()
      })
    }
  },
  38983: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    var Yq = gq(31),
      lq = gq(1274),
      Oq = gq(3341);
    const mq = "Reconnecting";
    class xq {
      constructor(qq) {
        this.hooks = qq, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = qq => {
          qq.persisted || this.leave()
        }, this.controller = new Oq.c((Eq => qq.reconnect(Eq)), {
          isSessionLive: () => !this.ended && qq.isLive(),
          onPhaseChanged: qq => {
            this.onPhaseChanged(qq)
          },
          onReconnected: Eq => {
            qq.onReconnected(Eq)
          },
          onGaveUp: Eq => {
            !this.ended && qq.isLive() && qq.onGaveUp(this.sessionBased, Eq)
          }
        })
      }
      onInitialInfo(qq, Eq) {
        this.graceMs = qq, this.sessionBased = Eq
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(qq) {
        this.ended || this.controller.onConnectionLost(qq, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const qq = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Eq = this.controller.heldToken;
        this.end(), qq && "" !== Eq && this.hooks.releaseSeat(Eq)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(qq) {
        const Eq = "frozen" === qq || "resuming" === qq;
        Eq !== this.stopped && (this.stopped = Eq, this.hooks.freeze(Eq));
        const gq = "frozen" === qq || "resuming" === qq && this.frozen;
        gq && !this.frozen ? (0, lq.m)(mq) : !gq && this.frozen && (0, lq.j)(mq), this.frozen = gq, this.setListening("connected" !== qq), Yq.i.TV(Oq.n, gq ? "frozen" : qq)
      }
      setListening(qq) {
        qq !== this.listening && (this.listening = qq, qq ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38991: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = qq, this.now = Eq, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const qq = this.now(),
            Eq = qq - this.lastCheckAt <= 2e3;
          this.lastCheckAt = qq;
          const gq = "visible" === document.visibilityState;
          !gq || Eq && this.wasVisible || (this.resumedAt = qq), this.wasVisible = gq, gq && qq - this.lastHeardAt > 12e3 && qq - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Eq(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  9200: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(1046);

    function lq() {
      var qq, Eq;
      return null !== (qq = null === (Eq = screen.orientation) || void 0 === Eq ? void 0 : Eq.type) && void 0 !== qq ? qq : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Oq = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && lq() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = lq(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Yq.lV)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const qq of this.resizers) qq()
          }
        }), 1e3)
      }
      heldSizer(qq) {
        let Eq = !1;
        return () => {
          if (Eq && this.isHeld()) return null;
          const gq = qq();
          return Eq ||= null !== gq, gq
        }
      }
      onRelease(qq) {
        return this.resizers.add(qq), () => {
          this.resizers.delete(qq)
        }
      }
    }
  },
  39177: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    let Yq = !1;
    async function lq(qq, Eq) {
      if (!Yq) {
        Yq = !0;
        try {
          const [{
            reloadBloxd: Yq
          }, {
            NotificationProvider: lq
          }] = await Promise.all([Promise.resolve().then((() => gq(1710))), Promise.resolve().then((() => gq(1336)))]);
          if (!qq || !0 === await lq.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Yq(Eq)
        } catch (lq) {
          console.error("Leaving the replay failed", lq)
        }
        Yq = !1
      }
    }
  },
  39004: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      f: () => uq
    });
    var Yq = gq(1697),
      lq = gq(190),
      Oq = gq(1677),
      mq = gq(1753),
      xq = gq(1195),
      Aq = gq(1109);
    async function cq(qq, Eq) {
      return function(qq) {
        return "object" === typeof qq && null !== qq && qq.code === lq.b.VpnIp.code
      }(Eq) && function(qq) {
        return Oq.c.supports("appCheck") && qq.isLoggedIn() && !qq.hasTriedAppAttestation()
      }(qq) && await async function(qq) {
        try {
          const {
            token: Eq
          } = await (0, mq.e)(), {
            "3PSIDMCPP": gq
          } = await (0, Aq.postJsonWithMetricsCookiesAndJsonResponse)(`${xq.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Eq
          }, {
            retries: 0
          }, qq.getMetricsCookies());
          return qq.setAppAttestedAuthJwt(gq), !0
        } catch (Eq) {
          return Eq instanceof Yq.d && "failed" === Eq.code ? (console.warn("The app couldn't get an App Check token:", Eq), qq.markAppAttestationTried()) : console.error("Failed to attest the app:", Eq), !1
        }
      }(qq)
    }
    async function uq(qq, Eq) {
      try {
        return await Eq()
      } catch (gq) {
        if (!await cq(qq, gq)) throw gq
      }
      return Eq()
    }
  },
  40778: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq
    });
    var Yq = gq(1725);
    const lq = 33177600,
      Oq = 3e4;
    let mq = !1;

    function xq(qq, Eq, gq) {
      if (!qq.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (mq) return Promise.reject(new Error("A screenshot is already being taken"));
      mq = !0;
      const Yq = function(qq, Eq, gq) {
        const Yq = Math.max(1, qq),
          Oq = Math.max(1, Eq),
          mq = Math.min(1, gq / Math.max(Yq, Oq), Math.sqrt(lq / (Yq * Oq)));
        return {
          width: Math.max(1, Math.floor(Yq * mq)),
          height: Math.max(1, Math.floor(Oq * mq))
        }
      }(Eq, gq, qq.maxTextureSize);
      return qq.resize(Yq.width, Yq.height), new Promise(((Eq, gq) => {
        let Yq, lq = 2,
          xq = null;
        const Aq = () => {
          var Eq;
          mq = !1, null === (Eq = xq) || void 0 === Eq || Eq(), clearTimeout(Yq), qq.restoreSize()
        };
        Yq = setTimeout((() => {
          Aq(), gq(new Error("No frame was drawn to capture"))
        }), Oq), xq = qq.onFrameDrawn((() => {
          if (lq--, lq > 0) return;
          const {
            canvas: Yq
          } = qq, Oq = {
            width: Yq.width,
            height: Yq.height
          };
          try {
            Yq.toBlob((qq => {
              qq ? Eq({
                blob: qq,
                ...Oq
              }) : gq(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (mq) {
            gq(mq)
          } finally {
            Aq()
          }
        }))
      }))
    }
    async function Aq(qq, Eq, gq) {
      try {
        const lq = await xq(qq, Eq, gq);
        (0, Yq.e)(lq.blob, `bloxd-screenshot-${lq.width}x${lq.height}-${Date.now()}.png`)
      } catch (lq) {
        console.error("Error taking screenshot:", lq)
      }
    }
  },
  39544: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(1677),
      lq = gq(96),
      Oq = gq(136),
      mq = gq(36496),
      xq = gq(614),
      Aq = gq(1702);

    function cq(qq) {
      var Eq, gq, Aq, cq;
      const Bq = (0, mq.c)();
      return {
        game: qq,
        os: (0, lq.getOperatingSystem)(),
        decodedAudioMiB: null === Bq ? null : (0, xq.J)(Bq.bytes),
        songsDecoded: null !== (Eq = null === Bq || void 0 === Bq ? void 0 : Bq.songsDecoded) && void 0 !== Eq ? Eq : null,
        sheetsDecoded: null !== (gq = null === Bq || void 0 === Bq ? void 0 : Bq.sheetsDecoded) && void 0 !== gq ? gq : null,
        siteUsed: Oq.n,
        appVersion: (null === (Aq = Yq.c.appHello) || void 0 === Aq ? void 0 : Aq.appVersion) || null,
        appBuild: (null === (cq = Yq.c.appHello) || void 0 === cq ? void 0 : cq.build) || null,
        msSinceVideoAd: uq()
      }
    }

    function uq() {
      if ((0, Aq.d)()) return 0;
      const qq = (0, Aq.c)();
      return null === qq ? null : Math.round(performance.now() - qq.endedAt)
    }(0, Aq.l)(xq.H)
  },
  36496: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq() {
      return null === Yq ? null : Yq()
    }
  },
  38995: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      f: () => uq
    });
    var Yq = gq(190),
      lq = gq(1789),
      Oq = gq(1792),
      mq = gq(8858);
    const xq = [250, 500, 1e3, 2e3, 1250],
      Aq = 406;

    function cq(qq) {
      if ("object" !== typeof qq || null === qq) return !1;
      const {
        code: Eq,
        message: gq
      } = qq, lq = Yq.b.duplicateLobbyNameError;
      return (Eq === lq.code || Eq === Aq) && (gq === lq.text || gq === lq.text + Yq.h)
    }
    async function uq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.b;
      for (let lq = 0;; lq++) {
        let mq;
        (0, Oq.o)(Eq);
        try {
          return await qq()
        } catch (Yq) {
          if (mq = xq[lq], void 0 === mq || !cq(Yq)) throw Yq
        }
        await gq(mq, Eq)
      }
    }
    const Bq = new Set([Yq.b.duplicateLobbyNameError.code, Yq.b.lobbyCantBeCreated.code, Yq.b.roomDisposedEarlyError.code, Yq.b.roomDisposedLateError.code, Yq.b.serverRoomLimitReached.code]);

    function Wq(qq) {
      if (cq(qq)) return !0;
      const Eq = (0, mq.f)(qq);
      return "number" === typeof Eq && Bq.has(Eq)
    }
  },
  8858: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      f: () => mq,
      i: () => xq,
      j: () => cq,
      l: () => Aq
    });
    var Yq = gq(190),
      lq = gq(4456);

    function Oq(qq) {
      return mq(qq) === Yq.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mq(qq) {
      return "object" === typeof qq && null !== qq ? qq.code : void 0
    }

    function xq(qq) {
      var Eq;
      return null !== (Eq = Object.keys(lq.c).find((Eq => lq.c[Eq] === qq))) && void 0 !== Eq ? Eq : null
    }

    function Aq(qq) {
      return "notWhitelisted" === qq ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cq = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39110: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(296),
      lq = gq(136),
      Oq = gq(38);

    function mq() {
      Oq.i.setItem(Yq.Fb, Oq.i.getItem(Yq.Fb) + 1), (0, lq.i)() && Oq.i.setItem(Yq.Eb, Oq.i.getItem(Yq.Eb) + 1)
    }
  },
  36515: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Hq,
      c: () => oq
    });
    var Yq = gq(987),
      lq = gq(600),
      Oq = gq(307),
      mq = gq(989),
      xq = gq(611),
      Aq = gq(642),
      cq = gq(4346),
      uq = gq(96),
      Bq = gq(136),
      Wq = gq(1710),
      Nq = gq(114),
      aq = gq(36519),
      Vq = gq(38),
      dq = gq(623),
      jq = gq(36523);

    function Hq() {
      var qq, Eq;
      return [...null !== (qq = navigator.languages) && void 0 !== qq ? qq : [null !== (Eq = navigator.language) && void 0 !== Eq ? Eq : "none"], "EN-gb"]
    }

    function oq(qq, Eq, gq, oq, Pq) {
      const Qq = (0, Yq.j)(Eq) ? (0, Yq.o)(Eq) : null,
        yq = {
          cookies: (0, Wq.getAllCookiesForGameNameWithVariation)(Eq),
          isMobile: (0, uq.isMobile)(),
          isUsingCustomGameTexturePack: null !== Qq && Pq(Qq),
          generalCookies: {
            joinDiscord: !!Vq.i.getItem("DiscordPressed"),
            newGo: cq.b,
            ...qq.getMetricsCookies(),
            trafficCode: oq,
            compliance: uq.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, uq.getBrowserName)(),
            version: (0, uq.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, uq.getPlatformType)(),
            deviceType: (0, Nq.d)()
          },
          isLoggedIn: qq.isLoggedIn(),
          lobbyName: gq,
          languages: Hq(),
          version: lq.e,
          siteUsed: Bq.n,
          subsiteUsed: Bq.q,
          playSessionId: (0, aq.g)(Eq),
          visitSessionId: (0, dq.e)(),
          clientReason: xq.k.reason,
          budgetBasis: (0, jq.c)(),
          ...null !== Aq.r && {
            diagClaim: Aq.r.claimId
          }
        };
      return null !== Qq && (0, Oq.Pc)(Qq) ? (yq.lobbyName = (0, Yq.f)(Qq, (0, Yq.k)(Eq), gq), {
        roomName: `classic_${mq.i}`,
        joinOptions: yq
      }) : {
        roomName: Eq,
        joinOptions: yq
      }
    }
  },
  40385: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq
    });
    var Yq = gq(39535);

    function lq(qq) {
      return {
        current: () => qq,
        watch: () => () => {}
      }
    }

    function Oq() {}
    const mq = Object.freeze([0, 0, 0]),
      xq = {
        states: {
          health: lq({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: lq({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: lq({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: lq({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: lq({}),
          creativeVisibility: lq({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: lq(null),
          heldItemAim: lq({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: lq(!1),
          gliderBoostFuel: lq(0),
          flight: lq({
            canFly: !1,
            flying: !1
          }),
          crafting: lq({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: lq({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: lq({}),
          fullInventory: lq(!1),
          crosshairTarget: lq({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: lq(!0),
          freeCamera: lq({
            allowed: !1,
            movesFly: !1
          }),
          replay: lq(null),
          replayEdits: lq(null),
          replayRecorder: lq({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: lq(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: Oq,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Oq,
          setInventoryOpen: Oq,
          changeIronChestPasskey: Oq,
          dragReplayCamera: Oq,
          applyTemporaryThirdPerson: Oq,
          holdEmoteWheel: Oq,
          recordFlyingMiddleText: Oq,
          focusCrafting: Oq,
          craftRecipe: () => ({
            ac: 0,
            eA: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Oq,
          setShopOpen: Oq,
          buyShopItem: Oq,
          lobbyManage: Oq,
          sendChatMessage: Oq,
          ignorePlayer: Oq,
          reportPlayer: Oq,
          reportWorldCodeChat: Oq,
          requestDiscordReportKey: Oq,
          reportLobbyOrGame: Oq,
          playEmote: Oq,
          updateMyCosmetic: Oq,
          writeOnBoard: Oq,
          writeBook: Oq,
          writeNameTag: Oq,
          setCustomLobbyBlock: Oq,
          openIronChest: Oq,
          sendCodeCollab: Oq,
          clickCodeBlock: Oq,
          bindCustomButtonKeys: Oq,
          pressCustomButton: Oq,
          moveReplayFreecam: Oq,
          holdReplayFreecamVertical: Oq,
          respawn: Oq,
          wakeUp: Oq,
          requestLeaderboard: Oq,
          completeTask: Oq,
          setServerCookie: Oq,
          answerUiRequest: Oq,
          chooseRewardedAd: Oq,
          setCameraZoom: Oq,
          setFreeCameraMovesFly: Oq,
          setBlockHighlight: Oq,
          setCrosshairInteractPrompt: Oq,
          setLookSensitivity: Oq,
          replayAction: Oq,
          setReplayPlaying: Oq,
          seekReplay: Oq,
          setReplayCameraMode: Oq,
          syncReplayCameraMode: Oq,
          setReplayCameraKeyframe: Oq,
          moveReplayCameraKeyframe: Oq,
          deleteReplayCameraKeyframes: Oq,
          setReplayPlaybackMark: Oq,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Oq,
          exportReplayVideo: Oq,
          toggleRecording: Oq,
          saveClip: Oq,
          setRecorderPrefs: Oq,
          setReplayViewerOpen: Oq
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Yq.b,
          worldCodeAiGameState: () => Yq.d
        },
        lookups: {
          localPos: () => mq,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  36523: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => yq,
      c: () => Qq,
      e: () => Pq
    });
    var Yq = gq(190),
      lq = gq(96),
      Oq = gq(2825),
      mq = gq(4231),
      xq = gq(614),
      Aq = gq(36528);
    const cq = 1048576,
      uq = 1024 * cq,
      Bq = 400 * cq,
      Wq = 147456,
      Nq = .5,
      aq = 1.5 * uq,
      Vq = 768 * cq;

    function dq(qq) {
      return Bq + qq * Wq
    }

    function jq(qq, Eq, gq) {
      var lq, mq;
      let {
        footprintBytes: xq,
        basis: cq,
        namesLimit: jq
      } = function(qq) {
        const {
          os: Eq,
          deviceMemory: gq
        } = qq;
        if ("ios" === Eq) switch ((0, Oq.h)(qq)) {
          case "ipad_m":
            return {
              footprintBytes: dq(Aq.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Vq, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: aq, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Vq, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof gq && Number.isFinite(gq) && gq > 0 ? {
          footprintBytes: gq * uq * Nq,
          basis: `memory-${gq}`,
          namesLimit: !0
        } : "android" === Eq ? {
          footprintBytes: Vq,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: dq(Aq.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(qq);
      if (gq) {
        const qq = Math.min(xq, dq(Aq.c));
        xq = Bq + Math.max(0, qq - Bq) / 2, cq += "+killed", jq = !0
      }
      null !== Eq && dq(Eq) < xq && (xq = dq(Eq), cq += "+learned", jq = !0);
      const Hq = function(qq) {
          const Eq = Math.floor((qq - Bq) / Wq);
          return Math.min(Aq.c, Math.max(Aq.f, Eq))
        }(xq),
        oq = (0, Aq.j)(Hq);
      return {
        footprintBytes: xq,
        shedFootprintBytes: jq ? Math.max(xq, dq(Hq)) : null,
        chunkCap: Hq,
        maxHorizDistance: null !== (lq = null === oq || void 0 === oq ? void 0 : oq.horizontal) && void 0 !== lq ? lq : Yq.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (mq = null === oq || void 0 === oq ? void 0 : oq.vertical) && void 0 !== mq ? mq : Yq.c.maxChunkVertAddDistance,
        basis: cq
      }
    }
    let Hq = null;

    function oq() {
      return jq({
        os: (0, lq.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Oq.k)()
      }, (0, mq.g)(), (0, xq.D)("wasm").length > 0)
    }

    function Pq() {
      return Hq ??= oq(), Hq
    }

    function Qq() {
      var qq;
      return (null !== (qq = Hq) && void 0 !== qq ? qq : oq()).basis
    }

    function yq(qq, Eq) {
      return qq.setChunkCap(Eq.chunkCap)
    }
  },
  40770: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      f: () => Oq
    });
    var Yq = gq(3067),
      lq = gq(987);

    function Oq(qq, Eq) {
      return null !== qq.gameSource && (0, Yq.k)(Eq, qq.gameSource)
    }

    function mq(qq, Eq) {
      if (null === qq.gameSource || "" === qq.gameSource || null === Eq) return !0;
      const gq = (0, lq.j)(Eq) ? (0, lq.o)(Eq) : null;
      return null !== gq && Oq(qq, gq)
    }
  },
  40752: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq
    });
    var Yq = gq(583),
      lq = gq(40760),
      Oq = gq(40731);
    async function mq(qq) {
      const Eq = await (0, lq.h)({
        Helmet: gq(37925),
        Chestplate: gq(37927),
        Gauntlets: gq(37950),
        Leggings: gq(37934),
        Boots: gq(37942)
      } [Yq.c[qq]]);
      try {
        return (0, Oq.n)(Eq)
      } finally {
        Eq.close()
      }
    }
    const xq = new class {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq.n;
        this.decode = qq, this.register = Eq, this.decoded = new Map
      }
      warm() {
        for (let qq = 0; qq < Yq.c.length; qq++) this.part(qq).catch((Eq => {
          console.warn(`The grayscale armour ${Yq.c[qq]} image didn't decode ahead of use`, Eq)
        }))
      }
      async load(qq, Eq) {
        const {
          width: gq,
          height: Oq,
          pixels: mq
        } = await this.part(qq), xq = new ImageData(function(qq, Eq) {
          const gq = new Uint8ClampedArray(qq.length);
          for (let Yq = 0; Yq < qq.length; Yq += 4) gq[Yq] = Math.round(qq[Yq] * Eq[0] / 255), gq[Yq + 1] = Math.round(qq[Yq + 1] * Eq[1] / 255), gq[Yq + 2] = Math.round(qq[Yq + 2] * Eq[2] / 255), gq[Yq + 3] = qq[Yq + 3];
          return gq
        }(mq, function(qq) {
          return [qq >>> 16 & 255, qq >>> 8 & 255, 255 & qq]
        }(Eq)), gq, Oq);
        let Aq;
        try {
          Aq = await createImageBitmap(xq, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (cq) {
          throw new lq.b("decode", `grayscale armour ${Yq.c[qq]}`, {
            cause: cq
          })
        }
        return {
          id: this.register(Aq),
          width: gq,
          height: Oq
        }
      }
      part(qq) {
        const Eq = this.decoded.get(qq);
        if (void 0 !== Eq) return Eq;
        const gq = this.decode(qq).catch((Eq => {
          throw this.decoded.delete(qq), Eq instanceof lq.b ? Eq : new lq.b("decode", `grayscale armour ${Yq.c[qq]}`, {
            cause: Eq
          })
        }));
        return this.decoded.set(qq, gq), gq
      }
    }
  },
  40747: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      g: () => dq,
      k: () => uq,
      l: () => Bq,
      p: () => Vq
    });
    var Yq = gq(40707),
      lq = gq(40752),
      Oq = gq(40760);
    const mq = 396,
      xq = 1,
      Aq = 2,
      cq = 3,
      uq = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8,
        GreyscaleArmour: 9
      },
      Bq = {
        File: 0,
        Item: 1
      },
      Wq = 0,
      Nq = 1,
      aq = 2;

    function Vq(qq) {
      const Eq = (0, Yq.o)();
      Eq.catch((() => {}));
      let lq = null;
      return {
        glbUrl: qq,
        lifeformAtlasUrl: async qq => (await Eq).lifeformAtlasUrl(qq),
        armourAtlasUrl: async () => (await gq.e(202).then((() => gq(34302)))).armourAtlasUrl,
        capeUrl: async qq => (await Eq).capeUrl(qq),
        attachmentImageUrl: async qq => (await Eq).attachmentImageUrl(qq),
        blockImageUrl: async qq => (await Eq).blockImageUrl(qq),
        groupAtlasUrl: async qq => (await Eq).groupAtlasUrl(qq),
        particleTextureUrl: async qq => (await Eq).particleTextureUrl(qq),
        particleItemUrl: async qq => (lq ??= gq.e(38).then((() => gq(51491))).catch((qq => {
          throw lq = null, qq
        })), (await lq).particleItemUrl(qq))
      }
    }
    class dq {
      constructor(qq, Eq) {
        var gq, mq, xq, Aq;
        let cq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = qq, this.onFailure = Eq, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.eN = !1, this.load = null !== (gq = cq.load) && void 0 !== gq ? gq : (qq, Eq) => (0, Oq.k)(qq, cq.fetchImage, Eq), this.release = null !== (mq = cq.release) && void 0 !== mq ? mq : Oq.r, this.fetchFile = null !== (xq = cq.fetchFile) && void 0 !== xq ? xq : qq => (0, Yq.i)(qq), this.greyscaleArmour = null !== (Aq = cq.greyscaleArmour) && void 0 !== Aq ? Aq : lq.c
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(qq, Eq) {
        this.glbWrittenImages.set(qq, tq(Eq))
      }
      glbTaken(qq, Eq) {
        const gq = this.glbWrittenImages.get(qq);
        this.glbWrittenImages.delete(qq), Eq && this.setGlbImages(qq, void 0 !== gq && gq.length > 0 ? gq : void 0)
      }
      setGlbImages(qq, Eq) {
        var gq;
        this.glbTakenCount.set(qq, (null !== (gq = this.glbTakenCount.get(qq)) && void 0 !== gq ? gq : 0) + 1), void 0 === Eq ? this.glbImages.delete(qq) : this.glbImages.set(qq, Eq);
        const Yq = [];
        for (const {
            key: lq
          }
          of this.loading.values()) lq.kind === uq.Glb && lq.word === qq && Yq.push(lq);
        for (let lq = this.ready.length - 1; lq >= 0; lq--) {
          const {
            key: Eq,
            id: gq
          } = this.ready[lq];
          Eq.kind === uq.Glb && Eq.word === qq && (this.ready.splice(lq, 1), null !== gq && (this.answered.delete(gq), this.release(gq)), Yq.push(Eq))
        }
        this.loadAgain(Yq)
      }
      onEvent(qq) {
        if (this.eN) return;
        const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
        for (let gq = 0; gq + 8 <= qq.byteLength; gq += 8) {
          const qq = Eq.getUint8(gq),
            Yq = Eq.getUint32(gq + 4, !0);
          if (qq === cq) {
            this.answered.delete(Yq), this.release(Yq);
            continue
          }
          const lq = {
            kind: Eq.getUint8(gq + 1),
            index: Eq.getUint8(gq + 2),
            word: Yq
          };
          qq === xq ? this.want(lq) : qq === Aq && this.loading.delete(jq(lq))
        }
      }
      reload(qq, Eq) {
        const gq = gq => qq.includes(gq.kind) && (void 0 === Eq || Eq(gq)),
          Yq = new Map;
        for (const lq of this.answered.values()) gq(lq) && Yq.set(jq(lq), lq);
        for (const [lq, {
            key: Oq
          }] of this.loading) gq(Oq) && Yq.set(lq, Oq);
        this.loadAgain(Yq.values())
      }
      loadAgain(qq) {
        for (const Eq of qq) this.loading.delete(jq(Eq)), this.want(Eq)
      }
      drain(qq) {
        if (null !== qq)
          for (; this.ready.length > 0;) {
            if (!qq(mq, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.eN = !0, this.loading.clear(), this.ready.length = 0;
        for (const qq of this.answered.keys()) this.release(qq);
        this.answered.clear()
      }
      want(qq) {
        const Eq = jq(qq);
        if (this.loading.has(Eq)) return;
        const gq = {
          key: qq
        };
        this.loading.set(Eq, gq), this.loadKey(qq).then((Yq => {
          this.eN || this.loading.get(Eq) !== gq ? this.release(Yq.id) : (this.loading.delete(Eq), this.answered.set(Yq.id, qq), this.ready.push({
            record: oq(qq, Wq, Yq),
            key: qq,
            id: Yq.id
          }))
        }), (Yq => {
          if (this.eN || this.loading.get(Eq) !== gq) return;
          this.loading.delete(Eq), this.onFailure({
            key: qq,
            error: Yq
          });
          const lq = Yq instanceof Oq.b && "decode" === Yq.stage ? Nq : aq;
          this.ready.push({
            record: oq(qq, lq, null),
            key: qq,
            id: null
          })
        }))
      }
      async loadKey(qq) {
        switch (qq.kind) {
          case uq.Glb:
            return this.load(await this.glbImage(qq), "none");
          case uq.LifeformAtlas:
            return this.load(Hq(await this.sources.lifeformAtlasUrl(qq.word), qq), "none");
          case uq.ArmourAtlas:
            return this.load(Hq(await this.sources.armourAtlasUrl(), qq), "none");
          case uq.Cape:
            return this.load(Hq(await this.sources.capeUrl(qq.word), qq), "none");
          case uq.AttachmentImage:
            return this.load(Hq(await this.sources.attachmentImageUrl(qq.word), qq), "none");
          case uq.GroupAtlas:
            return this.load(Hq(await this.sources.groupAtlasUrl(qq.word), qq), "none");
          case uq.BlockImage:
            return this.load(Hq(await this.sources.blockImageUrl(qq.word), qq), "none");
          case uq.Particle: {
            const Eq = await (qq.index === Bq.Item ? this.sources.particleItemUrl(qq.word) : this.sources.particleTextureUrl(qq.word));
            return this.load(Hq(Eq, qq), "flipY")
          }
          case uq.GreyscaleArmour:
            return this.greyscaleArmour.load(qq.index, qq.word);
          default:
            throw new Oq.b("fetch", `image kind ${qq.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(qq) {
        var Eq;
        let gq = this.glbImages.get(qq.word);
        if (void 0 === gq) {
          const Eq = this.glbTakenCount.get(qq.word),
            Yq = Hq(await this.sources.glbUrl(qq.word), qq);
          try {
            gq = tq(await this.fetchFile(Yq))
          } catch (lq) {
            throw new Oq.b("fetch", Yq, {
              cause: lq
            })
          }
          this.glbTakenCount.get(qq.word) === Eq && this.glbImages.set(qq.word, gq)
        }
        const Yq = null === (Eq = gq) || void 0 === Eq ? void 0 : Eq[qq.index];
        if (!Yq) throw new Oq.b("decode", `image ${qq.index} of file ${2147483647&qq.word}`, {
          cause: null
        });
        return Yq
      }
    }

    function jq(qq) {
      let {
        kind: Eq,
        index: gq,
        word: Yq
      } = qq;
      return `${Eq}:${gq}:${Yq}`
    }

    function Hq(qq, Eq) {
      if (null === qq) throw new Oq.b("fetch", `no URL for image ${jq(Eq)}`, {
        cause: null
      });
      return qq
    }

    function oq(qq, Eq, gq) {
      var Yq, lq, Oq;
      const mq = new Uint8Array(16),
        xq = new DataView(mq.buffer);
      return xq.setUint8(0, qq.kind), xq.setUint8(1, qq.index), xq.setUint8(2, Eq), xq.setUint32(4, qq.word, !0), xq.setUint32(8, null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.id) && void 0 !== Yq ? Yq : 0, !0), xq.setUint16(12, Math.min(null !== (lq = null === gq || void 0 === gq ? void 0 : gq.width) && void 0 !== lq ? lq : 0, 65535), !0), xq.setUint16(14, Math.min(null !== (Oq = null === gq || void 0 === gq ? void 0 : gq.height) && void 0 !== Oq ? Oq : 0, 65535), !0), mq
    }
    const Pq = 1179937895,
      Qq = 1313821514,
      yq = 5130562;

    function tq(qq) {
      var Eq;
      const gq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      if (qq.byteLength < 20 || gq.getUint32(0, !0) !== Pq || gq.getUint32(16, !0) !== Qq) return [];
      let Yq, lq = 20 + gq.getUint32(12, !0);
      try {
        Yq = JSON.parse((new TextDecoder).decode(qq.subarray(20, lq)))
      } catch {
        return []
      }
      for (; lq + 8 <= qq.byteLength && gq.getUint32(lq + 4, !0) !== yq;) lq += 8 + gq.getUint32(lq, !0);
      const Oq = null !== (Eq = Yq.images) && void 0 !== Eq ? Eq : [];
      if (0 === Oq.length || lq + 8 > qq.byteLength) return Oq.map((() => null));
      const mq = qq.subarray(lq + 8, Math.min(qq.byteLength, lq + 8 + gq.getUint32(lq, !0)));
      return Oq.map((qq => {
        var Eq, gq, lq;
        const Oq = void 0 === qq.bufferView || null === (Eq = Yq.bufferViews) || void 0 === Eq ? void 0 : Eq[qq.bufferView];
        if (!Oq || 0 !== (null !== (gq = Oq.buffer) && void 0 !== gq ? gq : 0) || void 0 === Oq.byteLength) return null;
        const xq = null !== (lq = Oq.byteOffset) && void 0 !== lq ? lq : 0,
          Aq = xq + Oq.byteLength;
        return Aq <= mq.byteLength ? mq.slice(xq, Aq) : null
      }))
    }
  },
  40394: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq,
      f: () => Oq,
      i: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq(qq) {
      Yq === qq && (Yq = null)
    }

    function mq() {
      var qq;
      null === (qq = Yq) || void 0 === qq || qq()
    }
  },
  36644: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Wq,
      k: () => jq,
      l: () => cq
    });
    var Yq = gq(24),
      lq = gq(2357),
      Oq = gq(2364),
      mq = gq(2371),
      xq = gq(2437),
      Aq = gq(31);

    function cq(qq, Eq) {
      return (!(0, mq.b)() || 0 === qq && 0 === Eq) && (0, Oq.u)(lq.i.Joystick, 0, qq, Eq, 0)
    }
    const uq = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Bq(qq) {
      return qq.classList.contains("TouchKeyHit") && Nq() ? null : qq.firstElementChild
    }

    function Wq(qq) {
      return qq.classList.contains("TouchKeyHit") && !qq.classList.contains("CanvasZone") ? {
        whole: !Nq(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: aq(Bq(qq))
      }
    }

    function Nq() {
      return document.documentElement.classList.contains(xq.j)
    }

    function aq(qq) {
      return !(qq instanceof HTMLElement) || qq.offsetWidth <= 0 || qq.offsetHeight <= 0 ? null : {
        width: qq.offsetWidth,
        height: qq.offsetHeight
      }
    }

    function Vq(qq, Eq) {
      const gq = qq => Math.min(65535, Math.round(4 * qq));
      return (gq(qq) | gq(Eq) << 16) >>> 0
    }

    function dq(qq) {
      return {
        x: qq.left + qq.width / 2,
        y: qq.top + qq.height / 2,
        radius: Math.min(qq.width, qq.height) / 2
      }
    }
    const jq = new class {
      constructor(qq) {
        this.write = qq, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Eq ? this.elements.set(qq, {
          element: Eq,
          hidden: gq
        }) : this.elements.delete(qq), this.measureOne(qq)
      }
      measure() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = qq.left, this.canvasTop = qq.top;
        for (const Eq of this.elements.keys()) this.measureOne(Eq)
      }
      hitZone(qq, Eq) {
        let gq = null,
          Yq = 1;
        for (const lq of this.elements.keys()) {
          const Oq = this.shown(lq);
          if (!Oq) continue;
          const {
            rect: mq,
            element: xq
          } = Oq, Aq = dq(mq), cq = Math.max(0, mq.width / 2 - Aq.radius), uq = Math.max(0, mq.height / 2 - Aq.radius), Wq = Math.max(0, Math.abs(qq - Aq.x) - cq), Nq = Math.max(0, Math.abs(Eq - Aq.y) - uq), Vq = xq.firstElementChild;
          let jq = Math.hypot(Wq, Nq) / Aq.radius;
          const Hq = aq(Bq(xq));
          Hq && (jq = Math.min(jq, Math.max(2 * Math.abs(qq - Aq.x) / Hq.width, 2 * Math.abs(Eq - Aq.y) / Hq.height))), jq < Yq && (gq = {
            code: lq,
            element: xq,
            key: Vq,
            ...Aq
          }, Yq = jq)
        }
        return gq
      }
      measureOne(qq) {
        const Eq = this.shown(qq);
        if (!Eq) return void this.write(lq.i.TouchZone, qq, 0, 0, 0);
        const {
          rect: gq,
          element: Yq
        } = Eq, Oq = dq(gq);
        this.write(lq.i.TouchZone, qq, Oq.x - this.canvasLeft, Oq.y - this.canvasTop, Vq(gq.width, gq.height));
        const mq = aq(Bq(Yq));
        this.write(lq.i.TouchZone, 256 | qq, 0, 0, mq ? Vq(mq.width, mq.height) : 0)
      }
      shown(qq) {
        const Eq = this.elements.get(qq),
          gq = Yq.b.get("worldPanelHud");
        if (!Eq || Eq.hidden || "none" === gq) return null;
        const lq = Eq.element.getBoundingClientRect();
        return lq.width <= 0 || lq.height <= 0 ? null : {
          rect: lq,
          element: Eq.element
        }
      }
    }(Oq.u);
    (0, Aq.k)(xq.d, (() => {
      jq.measure()
    }))
  },
  40628: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Aq,
      h: () => cq
    });
    var Yq = gq(40633),
      lq = gq(39004),
      Oq = gq(36515),
      mq = gq(40534),
      xq = gq(40599);
    const Aq = Yq.d.timeForPlayerToConnect - 1e4;
    async function cq(qq, Eq, gq, Yq) {
      let Aq;
      try {
        Aq = await qq.getTrafficCode()
      } catch (aq) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", aq), new xq.u(aq)
      }
      const {
        gameNameWithVariation: cq,
        lobbyName: uq
      } = Eq, Bq = () => {
        const Eq = (0, Oq.c)(qq, cq, uq, Aq, (qq => {
          var Eq;
          return null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.isUsingCustomGameTexturePack(qq)) && void 0 !== Eq && Eq
        }));
        Eq.joinOptions.wasmClient = !0;
        const lq = (0, mq.G)();
        return null !== lq && (Eq.joinOptions.renderBackend = lq), Eq.joinOptions.joinAdHold = Yq, Eq
      }, {
        roomName: Wq,
        joinOptions: Nq
      } = Bq();
      return {
        endpoint: Eq.endpoint,
        roomName: Wq,
        joinOptions: Nq,
        session: {
          gameNameWithVariation: cq,
          lobbyName: uq,
          playerDbId: qq.whamm
        },
        optionsAfterRefusal: async Eq => await (0, lq.e)(qq, Eq) ? Bq().joinOptions : null
      }
    }
  },
  4883: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      f: () => mq
    });
    var Yq = gq(3067),
      lq = gq(4890);
    let Oq = null;

    function mq(qq, Eq) {
      Oq = {
        pack: qq.metaData.id === Yq.c ? null : qq,
        prompt: Eq
      }
    }

    function xq(qq, Eq) {
      const gq = Oq;
      null !== gq && (0, lq.c)(gq.pack, qq) && (Oq = null, Eq && gq.prompt())
    }
  },
  40762: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      d: () => Oq,
      g: () => Bq,
      h: () => mq
    });
    var Yq = gq(40747),
      lq = gq(40707);
    const Oq = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(qq) {
        this.change((() => {
          this.page = qq
        }))
      }
      setSessionFiles(qq) {
        const Eq = void 0 !== this.session && void 0 === qq;
        if (this.change((() => {
            this.session = qq
          })), Eq)
          for (const gq of [...this.pageListeners]) gq()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(qq) {
        return this.pageListeners.add(qq), () => {
          this.pageListeners.delete(qq)
        }
      }
      setFollower(qq) {
        this.follower = qq, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const qq of [...this.wantedListeners]) qq();
        this.startFollower()
      }
      onWanted(qq) {
        return this.wantedListeners.add(qq), () => {
          this.wantedListeners.delete(qq)
        }
      }
      onChange(qq) {
        return this.listeners.add(qq), () => {
          this.listeners.delete(qq)
        }
      }
      startFollower() {
        const qq = this.follower;
        this.isWanted && null !== qq && (this.follower = null, qq((() => {
          this.follower = qq
        })))
      }
      change(qq) {
        const Eq = this.current;
        if (qq(), this.current !== Eq)
          for (const gq of this.listeners) gq()
      }
    };

    function mq(qq, Eq) {
      return {
        ...qq,
        armourAtlasUrl: () => {
          var gq, Yq;
          return null !== (gq = null === (Yq = Eq()) || void 0 === Yq ? void 0 : Yq.armourAtlasUrl()) && void 0 !== gq ? gq : qq.armourAtlasUrl()
        },
        lifeformAtlasUrl: gq => Aq(Eq(), (qq => qq.LIFEFORM_ATLAS_PATHS[gq]), (() => qq.lifeformAtlasUrl(gq))),
        groupAtlasUrl: gq => Aq(Eq(), (qq => qq.GROUP_ATLAS_PATHS[gq]), (() => qq.groupAtlasUrl(gq))),
        particleItemUrl: Yq => cq(Eq(), (async () => {
          const qq = await gq.e(38).then((() => gq(51491))).catch((() => null));
          return (null === qq || void 0 === qq ? void 0 : qq.particleItemSprite(Yq)) || null
        }), (() => qq.particleItemUrl(Yq))),
        blockImageUrl: gq => cq(Eq(), (async () => {
          var qq, Eq;
          return null !== (qq = null === (Eq = await xq()) || void 0 === Eq ? void 0 : Eq.blockImageName(gq)) && void 0 !== qq ? qq : null
        }), (() => qq.blockImageUrl(gq)))
      }
    }

    function xq() {
      return (0, lq.o)().catch((() => null))
    }

    function Aq(qq, Eq, gq) {
      return cq(qq, (async () => {
        var qq;
        const gq = await xq(),
          Yq = null === gq ? null : Eq(gq),
          lq = null !== (qq = null === Yq || void 0 === Yq ? void 0 : Yq.slice(Yq.lastIndexOf("/") + 1)) && void 0 !== qq ? qq : null;
        return "Player_Atlas" === lq ? null : lq
      }), gq)
    }
    async function cq(qq, Eq, gq) {
      if (null !== qq) {
        const gq = await Eq(),
          Yq = null === gq ? null : qq.textureUrl(gq);
        if (null !== Yq) return Yq
      }
      return gq()
    }
    const uq = 0;

    function Bq(qq) {
      const Eq = [Yq.k.ArmourAtlas, Yq.k.LifeformAtlas, Yq.k.GroupAtlas, Yq.k.BlockImage, Yq.k.Particle];
      qq.reload(Eq, (qq => {
        switch (qq.kind) {
          case Yq.k.Particle:
            return qq.index === Yq.l.Item;
          case Yq.k.LifeformAtlas:
            return qq.word !== uq;
          default:
            return !0
        }
      }))
    }
  },
  40636: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => xq,
      i: () => mq,
      k: () => lq,
      o: () => Oq
    });
    const Yq = 1e3;

    function lq() {
      Aq((() => {
        window.location.reload()
      }))
    }

    function Oq() {
      return new Promise((() => {}))
    }

    function mq(qq) {
      Aq((() => {
        window.location.replace(qq(window.location.href))
      }))
    }

    function xq(qq) {
      Promise.resolve().then((() => gq(106))).then((Eq => {
        let {
          currentUrl: gq
        } = Eq;
        mq((() => gq.mergeSearchParamsInto(qq)))
      }), (() => {
        mq((() => qq))
      }))
    }

    function Aq(qq) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => gq(1710))).then((Eq => {
        let {
          prepareForUnloadWithoutConfirmation: gq
        } = Eq;
        try {
          gq()
        } catch (Yq) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Yq), window.onbeforeunload = null
        }
        qq()
      }), (() => {
        window.onbeforeunload = null, qq()
      })) : qq()
    }
  },
  4890: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return lq(qq, Eq)
    }

    function lq(qq, Eq) {
      if (qq === Eq) return !0;
      if ("object" !== typeof qq || "object" !== typeof Eq || null === qq || null === Eq || Array.isArray(qq) !== Array.isArray(Eq)) return !1;
      const gq = qq,
        Yq = Eq,
        Oq = Object.keys(gq);
      return Oq.length === Object.keys(Yq).length && Oq.every((qq => Object.prototype.hasOwnProperty.call(Yq, qq) && lq(gq[qq], Yq[qq])))
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  40685: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => tq,
      f: () => Qq,
      h: () => dq,
      i: () => Vq
    });
    var Yq = gq(1789),
      lq = gq(1792),
      Oq = gq(38995),
      mq = gq(39012),
      xq = gq(1758),
      Aq = gq(40590),
      cq = gq(40599);
    const uq = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Bq = 3,
      Wq = [500, 1500];

    function Nq(qq) {
      const Eq = new URL(qq);
      return {
        secure: "https:" === Eq.protocol || "wss:" === Eq.protocol,
        host: Eq.host,
        pathname: Eq.pathname.replace(/\/+$/, ""),
        search: Eq.searchParams.toString()
      }
    }

    function aq(qq, Eq, gq) {
      const {
        secure: Yq,
        host: lq,
        pathname: Oq,
        search: mq
      } = Nq(qq);
      return `${Yq?"https":"http"}://${lq}${Oq}/matchmake/${Eq}/${encodeURIComponent(gq)}${mq?`?${mq}`:""}`
    }

    function Vq(qq, Eq) {
      var gq;
      const Yq = null !== (gq = Eq.protocol) && void 0 !== gq ? gq : "ws";
      if ("ws" !== Yq) throw new Error(`seat reservation asks for the ${Yq} transport`);
      const {
        secure: lq,
        host: Oq,
        pathname: mq,
        search: xq
      } = Nq(qq), Aq = new URLSearchParams(xq);
      Aq.append("sessionId", Eq.sessionId), Eq.reconnectionToken && Aq.append("reconnectionToken", Eq.reconnectionToken);
      return `${lq?"wss":"ws"}://${Eq.room.publicAddress||`${Oq}${mq}`}/${Eq.room.processId}/${Eq.room.roomId}?${Aq.toString()}`
    }
    async function dq(qq, Eq, gq) {
      var Aq;
      let uq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Nq = null !== (Aq = uq.sleep) && void 0 !== Aq ? Aq : Yq.b,
        Vq = new lq.d(uq.signal),
        dq = new xq.c(mq.e, (() => {
          (0, lq.h)(Vq.controller, new mq.f)
        })),
        {
          signal: Pq
        } = Vq;
      try {
        return await (0, Oq.f)((() => async function(qq, Eq, gq, Yq) {
          var Oq;
          const {
            signal: mq,
            sleep: xq
          } = Yq, Aq = aq(qq, "joinOrCreate", Eq), uq = JSON.stringify(gq);
          let Nq = null;
          for (let aq = 0; aq < Bq; aq++) {
            var Vq;
            if (aq > 0) await xq(null !== (Vq = Wq[aq - 1]) && void 0 !== Vq ? Vq : 1500, mq);
            let qq;
            (0, lq.o)(mq);
            try {
              qq = await Hq(Aq, uq, Yq)
            } catch (dq) {
              (0, lq.o)(mq), Nq = jq(dq);
              continue
            }
            const {
              response: Eq,
              answer: gq,
              refusal: Oq,
              lost: Bq
            } = qq;
            if (null === Bq) {
              if (null !== Oq) throw oq(Oq, gq);
              if (Eq.ok && null !== gq && rq(gq)) return gq;
              Nq = new cq.t(`seat request answered HTTP ${Eq.status}${null===gq?" without JSON":" without a seat"}`, !1)
            } else Nq = jq(Bq.error)
          }
          throw null !== (Oq = Nq) && void 0 !== Oq ? Oq : new cq.t("seat request made no attempt", !1)
        }(qq, Eq, gq, {
          ...uq,
          signal: Pq,
          sleep: Nq
        })), Pq, Nq)
      } finally {
        dq.stop(), Vq.unfollow()
      }
    }

    function jq(qq) {
      return new cq.t(qq instanceof Error ? qq.message : String(qq), !0, qq)
    }
    async function Hq(qq, Eq, gq) {
      var Yq;
      const {
        signal: Oq
      } = gq, mq = null !== (Yq = gq.fetch) && void 0 !== Yq ? Yq : fetch, xq = await mq(qq, {
        method: "POST",
        headers: {
          ...uq,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: Eq,
        credentials: "include",
        signal: Oq
      }), {
        answer: Aq,
        lost: cq
      } = await async function(qq) {
        try {
          const Eq = await qq.json();
          return {
            answer: "object" === typeof Eq && null !== Eq ? Eq : null,
            lost: null
          }
        } catch (Eq) {
          return {
            answer: null,
            lost: Eq instanceof SyntaxError ? null : {
              error: Eq
            }
          }
        }
      }(xq), Bq = null !== Aq && "string" === typeof Aq.error ? Aq.error : null;
      var Wq;
      null !== Bq && (null === (Wq = gq.onRefusal) || void 0 === Wq || Wq.call(gq));
      return (0, lq.o)(Oq), {
        response: xq,
        answer: Aq,
        refusal: Bq,
        lost: cq
      }
    }

    function oq(qq, Eq) {
      return new cq.l(qq, "number" === typeof(null === Eq || void 0 === Eq ? void 0 : Eq.code) ? Eq.code : 0, (0, Aq.n)(qq).text)
    }
    class Pq extends Error {
      constructor(qq, Eq) {
        super(qq), this.code = Eq, this.name = "SeatHttpError"
      }
    }
    async function Qq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: lq,
        answer: Oq,
        refusal: mq,
        lost: xq
      } = await Hq(aq(qq, "reconnect", Eq), JSON.stringify({
        reconnectionToken: gq
      }), Yq);
      if (null !== xq) throw xq.error;
      if (!lq.ok) {
        const qq = null !== Oq && "number" === typeof Oq.code && 0 !== Oq.code ? Oq.code : lq.status;
        throw new Pq(`the seat's reconnect was refused: ${null!==mq&&void 0!==mq?mq:`HTTP ${lq.status}`}`, qq)
      }
      if (null !== mq) throw oq(mq, Oq);
      if (null === Oq || !rq(Oq)) throw new Error("the seat's reconnect answered " + (null === Oq ? "without JSON" : "without a seat"));
      return {
        ...Oq,
        reconnectionToken: gq
      }
    }
    const yq = 10;

    function tq(qq) {
      if (qq.byteLength < 2 || qq[0] !== yq) return null;
      const Eq = 2 + qq[1];
      return Eq > qq.byteLength ? null : (new TextDecoder).decode(qq.subarray(2, Eq))
    }

    function rq(qq) {
      const Eq = qq.room;
      return "string" === typeof qq.sessionId && "object" === typeof Eq && null !== Eq && "string" === typeof Eq.roomId && "string" === typeof Eq.processId && "string" === typeof Eq.name
    }
  },
  40329: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => iq,
      G: () => Pq,
      H: () => Qq,
      I: () => dq,
      M: () => hq,
      O: () => fq,
      S: () => aq,
      V: () => Tq,
      Z: () => Hq,
      b: () => lq,
      bb: () => jq,
      eb: () => oq,
      f: () => Mq,
      g: () => Zq,
      gb: () => yq,
      k: () => Nq,
      o: () => Vq,
      q: () => bq,
      t: () => rq,
      w: () => nq,
      x: () => vq,
      y: () => tq
    });
    var Yq = gq(2900);
    const lq = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function Oq(qq, Eq) {
      return !ArrayBuffer.isView(qq) || qq instanceof DataView ? Array.isArray(qq) ? qq.map((qq => Eq(qq))) : qq : Array.from(qq, (qq => Eq(qq)))
    }

    function mq(qq) {
      if ("string" !== typeof qq) return qq;
      for (let Eq = 0; Eq < qq.length; Eq++) {
        const gq = qq.charCodeAt(Eq);
        if (gq >= 55296 && gq <= 57343) return Aq.decode(xq.encode(qq))
      }
      return qq
    }
    const xq = new TextEncoder,
      Aq = new TextDecoder;

    function cq(qq) {
      return qq
    }
    let uq;

    function Bq(qq) {
      return null === qq || "object" !== typeof qq ? qq : [mq(qq.Oc), mq(qq.mc)]
    }

    function Wq(qq) {
      return null === qq || "object" !== typeof qq ? qq : [Oq(qq.Uq, cq), Oq(qq.Nu, cq)]
    }

    function Nq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Hc), mq(Eq.oc)];
      var Eq
    }

    function aq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.id, Eq.xu];
      var Eq
    }

    function Vq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.nE, mq(Eq.bE), Eq.iE, mq(Eq.ME), Eq.pE, Eq.GE, Eq.Wm, mq(Eq.Nm), mq(Eq.am)];
      var Eq
    }

    function dq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Yc, cq), Eq.lc];
      var Eq
    }

    function jq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.tc, (qq => mq(qq))), mq(Eq.vc), Eq.hc];
      var Eq
    }

    function Hq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Au, cq), mq(Eq.cu), Eq.uu];
      var Eq
    }

    function oq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.tY), mq(Eq.rY)];
      var Eq
    }

    function Pq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Dc)];
      var Eq
    }

    function Qq(qq) {
      return mq(qq)
    }

    function yq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Sc), mq(Eq.Gc), mq(Eq.Oc), mq(Eq.mc)];
      var Eq
    }

    function tq(qq) {
      return Bq(qq)
    }

    function rq(qq) {
      return Bq(qq)
    }

    function vq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.um)];
      var Eq
    }

    function hq(qq) {
      return qq
    }

    function nq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.KA), mq(Eq.CA)];
      var Eq
    }

    function bq(qq) {
      return mq(qq)
    }

    function iq(qq) {
      return Wq(qq)
    }

    function Zq(qq) {
      return Wq(qq)
    }

    function fq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Bm)];
      var Eq
    }

    function Mq(qq) {
      return (uq ??= (0, Yq.e)().map((qq => qq.name)), uq).map((Eq => {
        return "string" === typeof(gq = qq[Eq]) ? mq(gq) : Oq(gq, cq);
        var gq
      }))
    }

    function Tq(qq) {
      return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.ou, Eq.Pu, Eq.Qu];
      var Eq
    }
  },
  40765: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(40770),
      lq = gq(40762);
    const Oq = new class {
      constructor(qq) {
        this.pack = qq, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, qq.onWanted((() => {
          this.release()
        }))
      }
      setGame(qq) {
        if (void 0 === qq && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const Eq = this.inGame();
        if (this.game = qq, this.update(), this.inGame() !== Eq)
          for (const gq of this.gameListeners) gq()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(qq) {
        return this.gameListeners.add(qq), () => {
          this.gameListeners.delete(qq)
        }
      }
      unwantedLeave(qq) {
        qq && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(qq) {
        null !== qq && qq === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const qq = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, qq && this.setGame(void 0)
      }
      setSettled(qq) {
        this.settle = qq, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Yq.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(lq.d)
  },
  40581: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      followPageUiPack: () => Sc,
      packForGame: () => zc,
      playWasmGame: () => Kc,
      prefetchWasmPreviews: () => wx,
      setGamePackConfirm: () => qc,
      startWasmPlay: () => kc,
      startWasmPreviews: () => Xx
    });
    var Yq = gq(190),
      lq = gq(1234),
      Oq = gq(163),
      mq = gq(39024),
      xq = gq(1904),
      Aq = gq(31),
      cq = gq(4508),
      uq = gq(1298),
      Bq = gq(1702),
      Wq = gq(1308),
      Nq = gq(39177),
      aq = gq(1283),
      Vq = gq(39189),
      dq = gq(39110),
      jq = gq(36519),
      Hq = gq(38995),
      oq = gq(8858),
      Pq = gq(39012),
      Qq = gq(40409),
      yq = gq(4608),
      tq = gq(40325),
      rq = gq(40385),
      vq = gq(40329);
    const hq = {
      states: {
        health: !0,
        aura: !0,
        hotbar: !0,
        heldItemAim: !0,
        crouching: !0,
        flight: !0,
        gliderBoostFuel: !0,
        crosshairTarget: !0,
        inventory: !0,
        crafting: !0,
        stationItems: !0,
        itemInfo: !0,
        creativeVisibility: !0,
        fullInventory: !0,
        replay: !0,
        replayEdits: !0,
        replayRecorder: !0,
        replayVideoExporting: !0,
        players: !0,
        lobbyLeaderboardRows: !0,
        freeCamera: !0
      },
      events: {
        hotbarSlotRequested: !0,
        hotbarScrolled: !0,
        numberKeyPressed: !0,
        shotDamageToShow: !0,
        chatReceived: !0,
        chestToggled: !0,
        chestRefreshed: !0,
        inventorySynced: !0,
        inventoryDropRequested: !0,
        enchantingTableOpened: !0,
        localEffectUpdated: !0,
        kill: !0,
        replayUiActionRequested: !0,
        replayViewerRequested: !0,
        cosmeticsUpdated: !0,
        boardEditRequested: !0,
        ironChestOpenRequested: !0
      },
      commands: {
        clickCodeBlock: !0,
        selectHotbarSlot: !0,
        setCrosshairInteractPrompt: !0,
        sendChatMessage: !0,
        removeInventoryItem: !0,
        swapInventorySlots: !0,
        moveInventoryItem: !0,
        quickMoveInventoryItem: !0,
        setInventoryOpen: !0,
        closeChest: !0,
        focusCrafting: !0,
        craftRecipe: !0,
        salvageItem: !0,
        enchantItem: !0,
        changeIronChestPasskey: !0,
        openIronChest: !0,
        completeTask: !0,
        setServerCookie: !0,
        answerUiRequest: !0,
        requestLeaderboard: !0,
        chooseRewardedAd: !0,
        ignorePlayer: !0,
        reportPlayer: !0,
        reportWorldCodeChat: !0,
        requestDiscordReportKey: !0,
        reportLobbyOrGame: !0,
        updateMyCosmetic: !0,
        holdEmoteWheel: !0,
        writeOnBoard: !0,
        writeBook: !0,
        writeNameTag: !0,
        setCustomLobbyBlock: !0,
        sendCodeCollab: !0,
        replayAction: !0,
        setReplayPlaying: !0,
        seekReplay: !0,
        setReplayCameraMode: !0,
        syncReplayCameraMode: !0,
        setReplayCameraKeyframe: !0,
        moveReplayCameraKeyframe: !0,
        deleteReplayCameraKeyframes: !0,
        setReplayPlaybackMark: !0,
        cropReplay: !0,
        holdReplayForShaderPackFailure: !0,
        exportReplayVideo: !0,
        toggleRecording: !0,
        saveClip: !0,
        setRecorderPrefs: !0,
        setReplayViewerOpen: !0,
        recordFlyingMiddleText: !0,
        dragReplayCamera: !0,
        moveReplayFreecam: !0,
        holdReplayFreecamVertical: !0,
        setShopOpen: !0,
        buyShopItem: !0,
        setFreeCameraMovesFly: !0,
        setBlockHighlight: !0,
        lobbyManage: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        targetedBlockPos: !0,
        blockAtViewPoint: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0,
        freeCameraPos: !0
      }
    };

    function nq(qq) {
      const Eq = {
        ...rq.b[qq]
      };
      for (const gq of Object.keys(hq[qq])) delete Eq[gq];
      return Eq
    }

    function bq() {
      var qq, Eq;
      return null === (qq = null === (Eq = (0, tq.e)()) || void 0 === Eq ? void 0 : Eq.localPlayerAlive()) || void 0 === qq || qq
    }

    function iq() {
      var qq, Eq;
      return null !== (qq = null === (Eq = (0, tq.e)()) || void 0 === Eq ? void 0 : Eq.localDeaths()) && void 0 !== qq ? qq : null
    }
    const Zq = {
        current: bq,
        watch: qq => {
          let Eq = bq(),
            gq = iq();
          return (0, yq.x)((() => {
            const Yq = bq(),
              lq = iq(),
              Oq = null !== lq && null !== gq && lq !== gq;
            gq = lq, Oq ? (Eq || qq(!0), qq(!1), Yq && qq(!0), Eq = Yq) : Yq !== Eq && (Eq = Yq, qq(Yq))
          }))
        }
      },
      fq = {
        states: {
          ...nq("states"),
          localPlayerAlive: Zq
        },
        events: {
          ...nq("events"),
          localPlayerAliveSet: {
            watch: Zq.watch
          }
        },
        commands: {
          ...nq("commands"),
          respawn: () => {
            var qq;
            null === (qq = (0, tq.e)()) || void 0 === qq || qq.respawn()
          },
          playEmote: qq => {
            var Eq;
            null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.send(vq.b.PlayEmote, (0, vq.G)({
              Dc: qq
            }))
          },
          applyTemporaryThirdPerson: qq => {
            var Eq;
            let {
              durationMs: gq
            } = qq;
            null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.thirdPersonFor(gq)
          },
          bindCustomButtonKeys: qq => {
            var Eq;
            null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.bindCustomButtonKeys(qq)
          },
          pressCustomButton: qq => {
            var Eq;
            let {
              id: gq,
              down: Yq
            } = qq;
            null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.pressCustomButton(gq, Yq)
          },
          setLookSensitivity: () => {},
          wakeUp: qq => {
            const Eq = (0, vq.O)({
                Bm: qq
              }),
              gq = () => {
                const qq = (0, tq.e)();
                return !(null !== qq && void 0 !== qq && qq.isSessionLive) || qq.send(vq.b.StopSleeping, Eq)
              };
            if (!gq()) {
              const qq = (0, yq.x)((() => {
                gq() && qq()
              }))
            }
          },
          setCameraZoom: qq => {
            var Eq;
            null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.setCameraZoom(qq)
          }
        },
        queries: nq("queries"),
        lookups: {
          ...nq("lookups"),
          cameraZoom: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = (0, tq.e)()) || void 0 === Eq ? void 0 : Eq.cameraZoom()) && void 0 !== qq ? qq : 0
          }
        }
      };
    var Mq = gq(40590),
      Tq = gq(40599),
      zq = gq(40607),
      Sq = gq(40628),
      pq = gq(1243),
      Gq = gq(106),
      Lq = gq(4346),
      Jq = gq(3572),
      kq = gq(1154);
    const Rq = {
      kA: () => (0, pq.b)(),
      inbuiltOverwritten: () => Lq.d,
      reflectApplyHit: () => kq.b,
      definerHit: () => Gq.currentUrl.c,
      emitReplaced: () => (0, Aq.b)(),
      confirmMesh: () => (0, Jq.b)(),
      confirmMeshHitStack: () => (0, Jq.c)()
    };
    var Uq = gq(40613),
      Fq = gq(40636);
    var sq = gq(24),
      Xq = gq(1906),
      wq = gq(1952),
      Kq = gq(1628),
      Cq = gq(2005),
      Iq = gq(1183),
      eq = gq(1241),
      Dq = gq(40559);

    function qE() {
      return eq.h.get().getCurrentLanguageCode()
    }

    function EE(qq) {
      const Eq = () => {
        qq({
          translate: (qq, Eq) => (0, Iq.r)(qE(), qq, Eq),
          keyBindingText: qq => {
            const Eq = (0, wq.s)(qq, sq.b.get("isTouchScreen"));
            return null !== Eq ? (0, Iq.s)(qE(), Eq.translationKey, Eq.params) : (0, wq.l)((0, wq.o)(qq))
          },
          isFriend: Cq.h,
          hiddenNames: Xq.d.shown,
          loadsFontRest: (0, Dq.c)(qE())
        })
      };
      let gq = !1;
      const Yq = () => {
          const qq = qE();
          (0, Iq.g)(qq).then((() => {
            gq || qq !== qE() || Eq()
          }))
        },
        lq = () => Kq.c.getSocialState().friends.map((qq => qq.name.toLowerCase())).sort().join(" ");
      let Oq = lq();
      Eq(), Yq();
      const mq = [(0, eq.l)((() => {
        Eq(), Yq()
      })), (0, Aq.k)("customBindingsChanged", Eq), (0, Aq.k)("appManagerUpdated|isTouchScreen", Eq), (0, Cq.e)((() => {
        const qq = lq();
        qq !== Oq && (Oq = qq, Eq())
      })), Xq.d.subscribe(Eq)];
      return () => {
        gq = !0;
        for (const qq of mq) qq()
      }
    }
    var gE = gq(600),
      YE = gq(987),
      lE = gq(1928),
      OE = gq(296),
      mE = gq(2797),
      xE = gq(36380),
      AE = gq(2805),
      cE = gq(38693),
      uE = gq(4524),
      BE = gq(40490),
      WE = gq(642),
      NE = gq(611),
      aE = gq(658),
      VE = gq(660),
      dE = gq(1926),
      jE = gq(3580),
      HE = gq(3157);
    let oE = null;
    var PE = gq(1195),
      QE = gq(1792),
      yE = gq(4255),
      tE = gq(3321),
      rE = gq(50),
      vE = gq(289),
      hE = gq(275),
      nE = gq(40434),
      bE = gq(4616);
    var iE = gq(40645);
    class ZE {
      constructor(qq, Eq) {
        this.showView = qq, this.holdForAd = Eq
      }
      pointerUnlockRequestsChanged() {
        (0, nE.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, nE.m)())
        }]
      }
      setGameViewShown(qq) {
        this.showView(qq)
      }
      setGameView(qq) {
        (0, iE.m)(qq)
      }
      videoAdHold(qq, Eq) {
        this.holdForAd(qq, Eq)
      }
    }
    class fE {
      leave(qq) {
        ! function(qq) {
          if (null !== (0, Wq.e)().websocketUrl) try {
            (0, yq.M)().leaveGame(qq)
          } finally {
            (0, Wq.w)({
              websocketUrl: null
            })
          }
        }(qq)
      }
      isReplay() {
        return !1
      }
    }
    class ME {
      watchFrameStarts(qq) {
        return (0, yq.s)(qq)
      }
      watchFrames(qq) {
        return (0, yq.p)(qq)
      }
      watchTicks(qq) {
        return (0, yq.x)(qq)
      }
    }
    var TE = gq(40650);

    function zE(qq) {
      return qq >= 0 ? Math.min(1, qq) : 0
    }

    function SE(qq, Eq) {
      const {
        fade: gq
      } = qq;
      return null === gq || Eq - gq.at >= gq.ms ? qq.volume : gq.from + (qq.volume - gq.from) * Math.max(0, (Eq - gq.at) / gq.ms)
    }

    function pE(qq) {
      const Eq = Object.entries(qq),
        gq = new Uint32Array(Eq.length);
      let Yq = 0;
      for (const [mq, [, xq]] of Eq.entries()) gq[mq] = xq.length, Yq += xq.length;
      const lq = new Float64Array(3 * Yq);
      let Oq = 0;
      for (const [, mq] of Eq)
        for (const qq of mq) lq.set(qq, Oq), Oq += 3;
      return {
        blocks: Eq.map((qq => {
          let [Eq] = qq;
          return Eq
        })).join("\0"),
        counts: gq,
        values: lq
      }
    }
    class GE {
      constructor(qq, Eq) {
        this.core = qq, this.warn = Eq, this.latest = 0
      }
      async feed() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : LE;
        const Eq = ++this.latest;
        let gq;
        try {
          gq = await qq()
        } catch (Yq) {
          return void(this.core.isStopped || Eq !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Yq))
        }
        Eq === this.latest && (this.core.setBlockColours(gq) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function LE() {
      return pE((await gq.e(202).then((() => gq(34302)))).averageColors)
    }
    var JE = gq(4622),
      kE = gq(4625),
      RE = gq(40369),
      UE = gq(36345),
      FE = gq(40542),
      sE = gq(590),
      XE = gq(37102),
      wE = gq(583),
      KE = gq(307),
      CE = gq(40508);
    const IE = [3e4, 12e4, 3e5];
    class eE extends Error {}
    const DE = {
      mobTypes: sE.j,
      vehicleTypes: XE.c,
      mobAiStates: sE.h,
      playerPoses: wE.q
    };
    var qg = gq(40498),
      Eg = gq(40659),
      gg = gq(40671),
      Yg = gq(40676),
      lg = gq(3341),
      Og = gq(38983),
      mg = gq(4637),
      xg = gq(2357);
    const Ag = xg.C.KeysDisabled | xg.C.LookFrozen | xg.C.ClicksSuppressed,
      cg = lg.d;
    var ug = (0, Yg.d)("resumingConn");
    class Bg {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = qq, this.now = Eq, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, ug, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new Og.d({
          reconnect: qq => this.reconnect(qq),
          isLive: () => qq.isLive(),
          onReconnected: Eq => {
            this.landed = Eq, qq.onReconnected(Eq), this.landIfResumed()
          },
          onGaveUp: (Eq, gq) => {
            this.abortAttempt(), qq.onGaveUp(Eq, gq)
          },
          freeze: Eq => {
            qq.uL(Eq), (0, mg.k)(Ag, Eq ? Ag : 0, "reconnectFreeze")
          },
          releaseSeat: qq => {
            this.releaseSeat(qq)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, gg.d)(this, ug)[ug]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(qq) {
        let {
          conn: Eq,
          graceMs: gq,
          sessionBased: Yq,
          replayOffer: lq
        } = qq;
        this.session.onInitialInfo(gq, Yq), this.isResuming() && (this.initialInfoConn = Eq, this.initialInfoOffer = lq, this.landIfResumed())
      }
      onResumeComplete(qq) {
        0 !== qq && (qq === (0, gg.d)(this, ug)[ug] ? ((0, gg.d)(this, ug)[ug] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = qq))
      }
      onDropped(qq) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, gg.d)(this, ug)[ug] = 0, this.session.onConnectionLost(qq)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, gg.d)(this, ug)[ug] = 0, this.session.end()
      }
      reconnect(qq) {
        const Eq = this.attempt;
        if (null !== Eq && this.awaitingJoinRoom(Eq)) return Eq.result;
        this.abortAttempt();
        const gq = new AbortController,
          Yq = this.drops,
          lq = {
            attachedAt: null
          },
          Oq = this.shell.reconnect(qq, gq.signal, (() => {
            lq.attachedAt = this.now()
          })).then((qq => {
            if (this.clearAttempt(mq), this.drops !== Yq) throw new Error("the resumed room dropped before its attempt settled");
            return qq
          }), (qq => {
            throw this.clearAttempt(mq), qq
          })),
          mq = {
            abort: gq,
            socket: lq,
            result: Oq
          };
        return this.attempt = mq, Oq
      }
      clearAttempt(qq) {
        this.attempt === qq && (this.attempt = null)
      }
      abortAttempt() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const Eq = this.attempt;
        this.attempt = null, null === Eq || void 0 === Eq || Eq.abort.abort(qq)
      }
      awaitingJoinRoom(qq) {
        const Eq = qq.socket.attachedAt;
        return null !== Eq && this.now() - Eq < cg
      }
      releaseSeat(qq) {
        const Eq = this.attempt,
          gq = null !== Eq && this.awaitingJoinRoom(Eq);
        this.abortAttempt(new Tq.p), gq || this.shell.releaseSeat(qq)
      }
      landIfResumed() {
        const qq = this.landed;
        if (null !== qq && qq.conn === this.initialInfoConn) {
          const Eq = this.initialInfoOffer && this.completedEarlyConn !== qq.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !Eq) return void this.session.onResumed();
          (0, gg.d)(this, ug)[ug] = qq.conn, this.session.onResuming()
        }
      }
    }
    var Wg = gq(38991),
      Ng = gq(40685),
      ag = gq(36528),
      Vg = gq(36523),
      dg = gq(4883),
      jg = gq(4243),
      Hg = gq(3150),
      og = gq(40454),
      Pg = gq(614),
      Qg = gq(39544),
      yg = gq(4325),
      tg = gq(38),
      rg = gq(40687),
      vg = gq(40723),
      hg = gq(4272),
      ng = gq(2364),
      bg = gq(1622),
      ig = gq(1646),
      Zg = gq(1274),
      fg = gq(114),
      Mg = gq(2708),
      Tg = gq(2371),
      zg = gq(4629);
    const Sg = new Set([JE.sb.KeyDown, JE.sb.MouseMove, JE.sb.MouseDown, JE.sb.Wheel, JE.sb.TouchStart, JE.sb.TouchMove]);

    function pg(qq) {
      return (qq.shiftKey ? JE.Hb.Shift : 0) | (qq.ctrlKey ? JE.Hb.Ctrl : 0) | (qq.altKey ? JE.Hb.Alt : 0) | (qq.metaKey ? JE.Hb.Meta : 0) | ("repeat" in qq && qq.repeat ? JE.Hb.Repeat : 0) | (qq.isTrusted ? 0 : JE.Hb.Untrusted)
    }

    function Gg(qq) {
      return "touchOnly" !== (0, fg.d)() && "function" === typeof qq.requestPointerLock
    }

    function Lg(qq) {
      return 0 === qq.button ? qq.altKey ? zg.l["Alt+Left Click"] : zg.l.Mouse1 : 1 === qq.button ? zg.l.Mouse2 : zg.l.Mouse3
    }
    const Jg = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      kg = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Rg = 32768,
      Ug = 1;

    function Fg(qq) {
      return Math.min(Math.max(Math.round(qq), 0), 65535)
    }

    function sg(qq, Eq, gq) {
      const Yq = [],
        lq = (qq, Eq, gq, lq) => {
          const Oq = qq => {
            (0, ig.u)(qq) || gq(qq)
          };
          qq.addEventListener(Eq, Oq, lq), Yq.push((() => {
            qq.removeEventListener(Eq, Oq, lq)
          }))
        },
        Oq = {
          capture: !0,
          passive: !0
        },
        mq = (qq, gq, Yq, lq, Oq) => (!(0, Tg.b)() || !Sg.has(qq)) && (Eq(qq, gq, Yq, lq, Oq), !0),
        xq = () => document.pointerLockElement === qq,
        Aq = (0, Mg.b)(),
        cq = qq => {
          qq.ctrlKey && gq.ctrlCombosAreGames() && !(0, mg.h)(qq.target) && qq.preventDefault()
        },
        uq = (qq, Yq, lq) => {
          gq.inspect(qq, Yq, !1), Eq(JE.sb.KeyUp, Yq, 0, 0, (0, ng.q)(lq, qq.timeStamp)), gq.keyReleased(Yq)
        },
        Bq = new Map,
        Wq = (qq, Eq, gq) => qq[gq] || ("AltRight" === Eq || "ControlLeft" === Eq) && qq.getModifierState("AltGraph"),
        Nq = new Map,
        aq = () => {
          Bq.clear(), Nq.clear()
        },
        Vq = qq => {
          if (document.hasFocus())
            for (const [Eq, gq] of Nq) Nq.delete(Eq), Wq(qq, Eq, gq) || (Bq.delete(Eq), uq(qq, zg.l[Eq], pg(qq)))
        };
      qq.tabIndex = -1;
      let dq = 0,
        jq = 0;
      const Hq = () => {
        const Eq = qq.getBoundingClientRect();
        dq = Eq.left, jq = Eq.top
      };
      let oq = "mouse";
      const Pq = () => !xq() && ("mouse" === oq || !gq.touchUiShown()),
        Qq = (qq, Eq, gq) => {
          const Yq = (Fg(qq.clientX - dq) | Fg(qq.clientY - jq) << 16) >>> 0;
          mq(JE.sb.MouseMove, JE.Lb.Point, Eq, gq, Yq)
        };
      let yq = !1,
        tq = 0;
      const rq = () => {
        yq && (yq = !1, gq.viewShown() && (0, nE.M)())
      };
      Yq.push((() => {
        clearTimeout(tq)
      })), lq(window, "keydown", (qq => {
        "Escape" === qq.key ? (0, nE.E)(!0) : qq.repeat || (0, mg.h)(qq.target) || (yq = !0, clearTimeout(tq), tq = window.setTimeout(rq, 0))
      }), Oq), lq(window, "keydown", (qq => {
        rq(), cq(qq), Vq(qq);
        const Eq = zg.l[qq.code];
        if ("number" !== typeof Eq || !gq.viewShown()) return;
        const Yq = (0, mg.h)(qq.target);
        Yq || !gq.prevents(Eq) && !Jg.has(qq.code) || qq.preventDefault(), qq.repeat || gq.inspect(qq, Eq, !0), mq(JE.sb.KeyDown, Eq, 0, 0, (0, ng.q)(pg(qq), qq.timeStamp)) && Bq.set(qq.code, Eq), Yq || gq.keyPressed(Eq)
      }), {
        capture: !1,
        passive: !1
      }), lq(window, "keyup", (qq => {
        "Escape" === qq.key && (0, nE.E)(!1), cq(qq), Bq.delete(qq.code), Nq.delete(qq.code), Vq(qq);
        const Eq = zg.l[qq.code];
        "number" === typeof Eq && uq(qq, Eq, pg(qq))
      }), {
        capture: !0,
        passive: !1
      }), lq(window, "mousemove", (qq => {
        "mouse" === oq && Pq() ? Qq(qq, qq.movementX, qq.movementY) : xq() ? mq(JE.sb.MouseMove, JE.Lb.Stamped, qq.movementX, qq.movementY, (0, ng.q)(0, qq.timeStamp)) : mq(JE.sb.MouseMove, 0, qq.movementX, qq.movementY, 0)
      }), Oq);
      let vq = 0,
        hq = 0;
      const nq = [];
      let bq = !1,
        iq = !1;
      lq(qq, "mousedown", (qq => {
        if ((0, Tg.b)()) return;
        Vq(qq);
        const Yq = 1 << qq.button;
        if (!xq() && (0, nE.K)() && (0, nE.d)() && (iq = !0, !bq)) return void(vq |= Yq);
        vq &= ~Yq;
        const lq = qq.button <= 2 ? Lg(qq) : void 0;
        void 0 !== lq && (nq[qq.button] = lq, gq.inspect(qq, lq, !0)), Pq() && Qq(qq, 0, 0), Eq(JE.sb.MouseDown, qq.button, qq.clientX, qq.clientY, (0, ng.q)(pg(qq), qq.timeStamp)), hq |= Yq, void 0 !== lq && gq.keyPressed(lq)
      }), Oq), lq(window, "mouseup", (qq => {
        var Yq;
        Vq(qq);
        const lq = 1 << qq.button,
          Oq = 0 !== (vq & ~hq & lq);
        if (vq &= ~lq, hq &= ~lq, Oq) return;
        const mq = qq.button <= 2 ? null !== (Yq = nq[qq.button]) && void 0 !== Yq ? Yq : Lg(qq) : void 0;
        void 0 !== mq && gq.inspect(qq, mq, !1), Eq(JE.sb.MouseUp, qq.button, qq.clientX, qq.clientY, (0, ng.q)(pg(qq), qq.timeStamp)), void 0 !== mq && gq.keyReleased(mq)
      }), Oq), lq(qq, "contextmenu", (qq => {
        qq.preventDefault()
      }), {
        passive: !1
      });
      const Zq = qq => {
        (xq() || (0, nE.k)() && (0, Zg.p)()) && (qq.ctrlKey || Aq && !document.fullscreenElement) && qq.preventDefault()
      };
      lq(qq, "wheel", (qq => {
        Zq(qq), Vq(qq), mq(JE.sb.Wheel, qq.deltaMode, qq.deltaX, qq.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const fq = {
          capture: !0,
          passive: !1
        },
        Mq = qq => {
          qq ? window.addEventListener("wheel", Zq, fq) : window.removeEventListener("wheel", Zq, fq)
        };
      Mq((0, nE.k)()), Yq.push((0, nE.u)(Mq)), Yq.push((() => {
        Mq(!1)
      }));
      const Tq = new Map,
        zq = new Set,
        Sq = qq => {
          const Eq = "stylus" === qq.touchType;
          for (const gq of Tq.values())
            if (!gq.touched && (Eq || Math.abs(qq.clientX - gq.x) <= Ug && Math.abs(qq.clientY - gq.y) <= Ug)) return gq.touched = !0, !0;
          return !1
        },
        pq = qq => 32767 & qq,
        Gq = new Set,
        Lq = qq => gq => {
          const Yq = (0, ng.q)(pg(gq), gq.timeStamp);
          qq !== JE.sb.TouchStart && qq !== JE.sb.TouchMove || ((qq, gq) => {
            const Yq = qq.touches;
            if (Yq)
              for (const lq of Gq) {
                let qq = !1;
                for (let Eq = 0; Eq < Yq.length && !qq; Eq++) qq = pq(Yq[Eq].identifier) === lq;
                qq || (Gq.delete(lq), Eq(JE.sb.TouchCancel, lq, 0, 0, gq))
              }
          })(gq, Yq);
          const lq = gq.changedTouches;
          for (let Eq = 0; Eq < lq.length; Eq++) {
            const gq = lq[Eq];
            if (qq === JE.sb.TouchStart && Sq(gq) && zq.add(gq.identifier), zq.has(gq.identifier)) {
              qq !== JE.sb.TouchEnd && qq !== JE.sb.TouchCancel || zq.delete(gq.identifier);
              continue
            }
            const Oq = pq(gq.identifier),
              xq = mq(qq, Oq, gq.clientX - dq, gq.clientY - jq, Yq);
            qq === JE.sb.TouchStart ? xq && Gq.add(Oq) : qq !== JE.sb.TouchMove && Gq.delete(Oq)
          }
        },
        Jq = Lq(JE.sb.TouchStart);
      lq(qq, "touchstart", (qq => {
        qq.preventDefault(), (0, Tg.b)() || (gq.touchStarting(), Jq(qq))
      }), {
        passive: !1
      }), lq(qq, "touchmove", Lq(JE.sb.TouchMove), Oq), lq(qq, "touchend", Lq(JE.sb.TouchEnd), Oq), lq(qq, "touchcancel", Lq(JE.sb.TouchCancel), Oq);
      const kq = qq => Rg | 32767 & qq,
        Rq = (qq, Eq) => {
          mq(qq, kq(Eq.pointerId), Eq.clientX - dq, Eq.clientY - jq, (0, ng.q)(pg(Eq), Eq.timeStamp))
        };
      lq(window, "pointerdown", (Eq => {
        oq = Eq.pointerType, "mouse" === Eq.pointerType && Eq.target !== qq && gq.viewShown() && (0, nE.N)()
      }), Oq), lq(qq, "pointerdown", (qq => {
        "pen" === qq.pointerType && 0 === qq.button && (0, nE.k)() && (0, Zg.p)() && (qq.preventDefault(), (0, Tg.b)() || (Tq.set(qq.pointerId, {
          x: qq.clientX,
          y: qq.clientY,
          touched: !1
        }), gq.touchStarting(), Rq(JE.sb.TouchStart, qq)))
      }), {
        passive: !1
      }), lq(window, "pointermove", (qq => {
        oq = qq.pointerType, Tq.has(qq.pointerId) && Rq(JE.sb.TouchMove, qq), "mouse" !== qq.pointerType && Pq() && Qq(qq, 0, 0)
      }), Oq);
      const Uq = qq => Eq => {
        Tq.delete(Eq.pointerId) && Rq(qq, Eq)
      };
      lq(window, "pointerup", Uq(JE.sb.TouchEnd), Oq), lq(window, "pointercancel", Uq(JE.sb.TouchCancel), Oq);
      let Fq = 0;
      const sq = () => {
          Fq = 0, Hq(), gq.resized()
        },
        Xq = () => {
          const qq = gq.sizeCanvas();
          null !== qq && Eq(JE.sb.Resize, 0, qq.cssWidth, qq.cssHeight, (0, ng.k)(qq.renderScale)), Hq(), gq.resized(), 0 === Fq && (Fq = requestAnimationFrame(sq))
        };
      lq(window, "resize", Xq, Oq), Yq.push(gq.watchRenderScale(Xq)), Yq.push((() => {
        cancelAnimationFrame(Fq)
      })), lq(window, "focus", (qq => {
        qq.isTrusted && (Eq(JE.sb.Focus, 0, 0, 0, 0), gq.viewShown() && (0, nE.N)())
      }), {
        passive: !0
      });
      const wq = () => {
          (0, nE.E)(!1), vq = 0
        },
        Kq = () => {
          Gq.clear(), Tq.clear(), zq.clear()
        };
      let Cq = 0,
        Iq = 0;
      lq(window, "blur", (Yq => {
        wq(), (0, nE.i)();
        for (const qq of Bq.keys()) {
          const Eq = kg.get(qq);
          void 0 !== Eq && Nq.set(qq, Eq)
        }
        Yq.isTrusted && ((qq => {
          for (const [gq, Yq] of Tq) Eq(JE.sb.TouchCancel, kq(gq), Yq.x, Yq.y, (0, ng.q)(0, qq));
          Tq.clear()
        })(Yq.timeStamp), Eq(JE.sb.Blur, JE.l.KeepTouches, 0, 0, 0)), Aq && Yq.isTrusted && (clearTimeout(Iq), Iq = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const qq of Bq.values()) uq(Yq, qq, 0);
            aq()
          }
        }), 0)), clearTimeout(Cq), Cq = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, Zg.p)() && gq.viewShown() && qq.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Yq.push((() => {
        clearTimeout(Cq), clearTimeout(Iq)
      })), lq(window, "mousedown", (Eq => {
        Aq && Eq.isTrusted && !document.hasFocus() && (0, Zg.p)() && gq.viewShown() && (window.focus(), qq.focus({
          preventScroll: !0
        }))
      }), Oq), lq(document, "visibilitychange", (() => {
        document.hidden ? (Eq(JE.sb.Blur, 0, 0, 0, 0), Kq()) : document.hasFocus() && Eq(JE.sb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Yq.push((0, Tg.e)((() => {
        wq(), Eq(JE.sb.Blur, JE.l.Release, 0, 0, 0), gq.keysReleased(), aq(), hq = 0, Kq(), Eq(JE.sb.Joystick, 0, 0, 0, 0), document.hasFocus() && Eq(JE.sb.Focus, 0, 0, 0, 0)
      })));
      const eq = !gq.canLock(),
        Dq = () => eq && !(0, nE.k)() ? JE.ic.Lockless : JE.ic.Released,
        qE = () => {
          xq() && (bq = !1, iq = !1), Eq(JE.sb.PointerLock, xq() ? JE.ic.Locked : Dq(), 0, 0, 0), (0, nE.I)(xq())
        };
      return lq(document, "pointerlockchange", qE, {
        passive: !0
      }), lq(document, "pointerlockerror", (() => {
        bq ||= iq, iq = !1, (0, nE.q)()
      }), {
        passive: !0
      }), eq && Yq.push((0, nE.u)((() => {
        Eq(JE.sb.PointerLock, Dq(), 0, 0, 0)
      }))), Xq(), Eq(document.hasFocus() ? JE.sb.Focus : JE.sb.Blur, 0, 0, 0, 0), qE(), () => {
        for (const qq of Yq.splice(0)) qq()
      }
    }
    var Xg = gq(9200),
      wg = gq(9191),
      Kg = gq(1959);
    const Cg = new Map(zg.b.map(((qq, Eq) => [qq, Eq]))),
      Ig = ["jump", "primary-fire", "alt-fire"],
      eg = ["primary-fire", "alt-fire"];

    function Dg(qq) {
      return `${Kg.c}${qq}`
    }
    const qY = ["forward", "backward", "left", "right", "sprint", "jump"];

    function EY(qq) {
      const Eq = [];
      for (const gq of qq) {
        const qq = "string" === typeof gq ? zg.l[gq] : void 0;
        "number" === typeof qq && Eq.push(qq)
      }
      return Eq
    }
    class gY {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [qq, Eq] of Object.entries(zg.f)) this.keys.set(qq, Eq);
        this.updateKeySets()
      }
      prevents(qq) {
        return this.preventKeys.has(qq)
      }
      moves(qq) {
        return this.movementKeys.has(qq)
      }
      checks(qq, Eq) {
        return (Eq ? this.checkedDown : this.checkedUp).has(qq)
      }
      sync(qq, Eq) {
        for (const [gq, Yq] of this.keys) {
          const lq = qq(Dg(gq)),
            Oq = Array.isArray(lq) ? EY(lq) : zg.f[gq];
          (Oq.length !== Yq.length || Oq.some(((qq, Eq) => qq !== Yq[Eq]))) && this.bind(gq, Oq, Eq)
        }
      }
      bind(qq, Eq, gq) {
        const Yq = Cg.get(qq);
        if (void 0 !== Yq) {
          gq(JE.sb.Binding, 0, 0, 0, Yq | JE.i.Clear << 8);
          for (const Oq of [...Eq, ...null !== (lq = zg.i[qq]) && void 0 !== lq ? lq : []]) {
            var lq;
            gq(JE.sb.Binding, Oq, 0, 0, Yq | JE.i.Add << 8)
          }
          this.keys.set(qq, Eq), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Yq of zg.m)
          for (const Eq of null !== (qq = this.keys.get(zg.b[Yq])) && void 0 !== qq ? qq : []) {
            var qq;
            this.preventKeys.add(Eq)
          }
        this.movementKeys.clear();
        for (const Yq of qY)
          for (const qq of null !== (Eq = this.keys.get(Yq)) && void 0 !== Eq ? Eq : []) {
            var Eq;
            this.movementKeys.add(qq)
          }
        for (const [Yq, lq] of [
            [this.checkedDown, Ig],
            [this.checkedUp, eg]
          ]) {
          Yq.clear();
          for (const qq of lq)
            for (const Eq of null !== (gq = this.keys.get(qq)) && void 0 !== gq ? gq : []) {
              var gq;
              Yq.add(Eq)
            }
        }
      }
    }
    var YY = gq(4627),
      lY = gq(36644);
    const OY = "[bloxd-wasm-client]";

    function mY() {
      return "inGame" === sq.b.get("gameState") && !(0, bg.r)()
    }
    let xY = null;

    function AY(qq, Eq) {
      xY && Eq.writePendingInput() && xY.push(function(qq, Eq) {
        let gq = "";
        for (const Yq of Eq) gq += Yq.toString(16).padStart(2, "0");
        return gq ? `${qq} ${gq}` : String(qq)
      }(qq, Eq.rings.input.written()))
    }
    const cY = [];

    function uY(qq, Eq, gq, Yq) {
      qq === JE.S.InputAction && Yq === JE.ob && cY.push(Eq.getUint32(gq, !0))
    }
    var BY = gq(40739),
      WY = gq(1191),
      NY = gq(36896);
    const aY = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: WY.wasmScreens
    };

    function VY(qq) {
      var Eq, gq;
      let Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [lq, Oq] = qq.split(":");
      return (null !== (Eq = null === (gq = aY[lq]) || void 0 === gq ? void 0 : gq[Oq]) && void 0 !== Eq ? Eq : qq).replace(/\{\{(\w+)\}\}/g, ((qq, Eq) => {
        var gq;
        return null !== (gq = Yq[Eq]) && void 0 !== gq ? gq : qq
      }))
    }

    function dY(qq, Eq) {
      (0, hg.e)();
      const gq = document.createElement("div");
      gq.setAttribute("role", "alertdialog"), gq.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Yq = document.createElement("div");
      Yq.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const lq = document.createElement("h2");
      lq.textContent = VY(qq.title);
      const Oq = document.createElement("p");
      if (Oq.textContent = VY(qq.help, qq.helpValues), Oq.style.whiteSpace = "pre-line", Yq.append(lq, Oq), qq.discordLink) {
        const qq = document.createElement("a");
        qq.href = NY.b, qq.target = "_blank", qq.rel = "noreferrer", qq.style.color = "#8ab4ff", qq.textContent = VY("wasmScreens:reportOnDiscord"), Yq.append(qq)
      }
      const mq = document.createElement("div");
      return mq.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Yq.append(mq), gq.append(Yq), document.body.append(gq), new Promise((Yq => {
        const lq = qq => {
            null === Eq || void 0 === Eq || Eq.removeEventListener("abort", Oq), gq.remove(), Yq(qq)
          },
          Oq = () => {
            lq(!1)
          };
        null === Eq || void 0 === Eq || Eq.addEventListener("abort", Oq, {
          once: !0
        });
        const xq = (qq, Eq) => {
          const gq = document.createElement("button");
          gq.textContent = VY(qq), gq.style.cssText = "padding:0.5rem 1.25rem;font:inherit", gq.addEventListener("click", (() => {
            lq(Eq)
          })), mq.append(gq)
        };
        null !== qq.cancel && xq(qq.cancel, !1), xq(qq.confirm, !0)
      }))
    }
    var jY = gq(40526);
    const HY = 6e4,
      oY = 3e5;
    var PY = gq(3511);
    var QY = gq(40440),
      yY = gq(616),
      tY = gq(15);

    function rY(qq, Eq) {
      const gq = tY.jb.encode(Eq);
      ! function(qq, Eq) {
        let gq = Eq >= 0 ? 2 * Eq : 2 * -Eq - 1;
        for (; gq >= 128;) qq.push(gq % 128 | 128), gq = Math.floor(gq / 128);
        qq.push(gq)
      }(qq, gq.length);
      for (const Yq of gq) qq.push(Yq)
    }
    let vY, hY, nY;
    (() => {
      const qq = ["length", 0, 129, 1, 2, "b", 50, void 0, 247, !1, 6, !0, "a", 3, 4, 5, "t", "resolv", "e", "then", "postCo", "okies", "d", 1023, 121, 65536, 146, 10, 55296, 56320, 12, 63, 128, 29, "c", 180, 68, 192, 16, "Invalid byte index", 141, 255, 224, 75, 31, "Invalid continuation byte", 240, 15, 7, 18, 62, 80, 124, 179];

      function Eq() {}
      "ac5zsAW" in Eq && function(...Eq) {
        uq(Eq[qq[0]] = qq[1], Eq[qq[12]] = function(...gq) {
          return gq[qq[0]] = qq[4], Eq[-qq[2]]({}, gq[qq[1]], gq[qq[3]])
        }, Eq[-qq[2]] = function(...gq) {
          if (uq(gq[qq[0]] = qq[13], gq[-qq[6]] = {}), gq[qq[1]][gq[qq[3]] + gq[qq[4]]] !== qq[7]) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]];
          if (gq[qq[3]] === gq[qq[4]]) return qq[11];
          for (gq[qq[5]] = qq[1]; gq[qq[5]] < gq[qq[3]].length; gq[qq[5]]++) gq[-qq[6]][gq[qq[3]][gq[qq[5]]]] === qq[7] && (gq[-qq[6]][gq[qq[3]][gq[qq[5]]]] = qq[1]), gq[-qq[6]][gq[qq[4]][gq[qq[5]]]] === qq[7] && (gq[-qq[6]][gq[qq[4]][gq[qq[5]]]] = qq[1]), uq(gq[-qq[6]][gq[qq[3]][gq[qq[5]]]]++, gq[-qq[6]][gq[qq[4]][gq[qq[5]]]]--);
          for (gq[-qq[8]] in gq[-qq[6]])
            if (gq[-qq[6]][gq[-qq[8]]] !== qq[1]) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[9], qq[9];
          for (gq[qq[10]] = qq[3]; gq[qq[10]] < gq[qq[3]].length; gq[qq[10]]++)
            if (Eq[-qq[2]](gq[qq[1]], gq[qq[3]].substr(qq[1], gq[qq[10]]), gq[qq[4]].substr(qq[1], gq[qq[10]])) && Eq[-qq[2]](gq[qq[1]], gq[qq[3]].substr(gq[qq[10]]), gq[qq[4]].substr(gq[qq[10]])) || Eq[-qq[2]](gq[qq[1]], gq[qq[3]].substr(qq[1], gq[qq[10]]), gq[qq[4]].substr(gq[qq[4]].length - gq[qq[10]])) && Eq[-qq[2]](gq[qq[1]], gq[qq[3]].substr(gq[qq[10]]), gq[qq[4]].substr(qq[1], gq[qq[4]].length - gq[qq[10]]))) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[11], qq[11];
          return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[9], qq[9]
        }, console.log(Eq[qq[12]]))
      }();
      const Yq = (qq[1], tY[qq[16]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        lq = (qq[1], tY[qq[16]])("QkFCWUxPTg=="),
        Oq = (qq[1], tY[qq[16]])("QW5kZXNpdGU="),
        mq = (qq[1], tY[qq[16]])("U21vb3RoIEdyYW5pdGU="),
        xq = (qq[1], tY[qq[16]])("RGlvcml0ZQ=="),
        Aq = async (Eq, Yq, lq, Oq) => {
          const [{
            clientSideServerUrls: mq
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: xq
          }] = await Promise.all([Promise[qq[17] + qq[18]]()[qq[19]]((() => gq(1195))), Promise[qq[17] + qq[18]]()[qq[19]]((() => gq(1109)))]), Aq = mq.getHttpUrlFromWebSocketUrl(Eq.endpoint), cq = null === Eq[qq[20] + qq[21]] ? qq[7] : await Eq[qq[20] + qq[21]]();
          await xq("" + Aq + Yq, lq, {
            retries: Oq
          }, cq)
        };
      vY = async (gq, Yq) => {
        "VkLsXC" in Eq && function() {
          ! function(...Eq) {
            function gq(...Eq) {
              for (uq(Eq[qq[0]] = qq[3], Eq[qq[12]] = [], Eq[qq[4]] = qq[1], Eq[qq[13]] = Eq[qq[1]].length, Eq[qq[22]] = qq[7], Eq[qq[15]] = qq[7]); Eq[qq[4]] < Eq[qq[13]];) uq(Eq[qq[22]] = Eq[qq[1]].charCodeAt(Eq[qq[4]]++), Eq[qq[22]] >= qq[28] && Eq[qq[22]] <= 56319 && Eq[qq[4]] < Eq[qq[13]] ? (Eq[qq[15]] = Eq[qq[1]].charCodeAt(Eq[qq[4]]++), (64512 & Eq[qq[15]]) == qq[29] ? Eq[qq[12]].push(((Eq[qq[22]] & qq[23]) << qq[27]) + (Eq[qq[15]] & qq[23]) + qq[25]) : (Eq[qq[12]].push(Eq[qq[22]]), Eq[qq[4]]--)) : Eq[qq[12]].push(Eq[qq[22]]));
              return Eq[qq[12]]
            }

            function Yq(...gq) {
              for (uq(gq[qq[0]] = qq[3], gq[qq[12]] = gq[qq[1]].length, gq[qq[5]] = -qq[3], gq[qq[24]] = qq[7], gq[qq[22]] = ""); ++gq[qq[5]] < gq[qq[12]];) gq[qq[24]] = gq[qq[1]][gq[qq[5]]], gq[qq[24]] > 65535 && uq(gq[qq[24]] -= qq[25], gq[qq[22]] += Eq[-qq[26]](gq[qq[24]] >>> qq[27] & qq[23] | qq[28]), gq[qq[24]] = qq[29] | gq[qq[24]] & qq[23]), gq[qq[22]] += Eq[-qq[26]](gq[qq[24]]);
              return gq[qq[22]]
            }

            function lq(...Eq) {
              if (Eq[qq[0]] = qq[3], Eq[qq[1]] >= qq[28] && Eq[qq[1]] <= 57343) throw Error("Lone surrogate U+" + Eq[qq[1]].toString(qq[38]).toUpperCase() + " is not a scalar value")
            }

            function Oq(...gq) {
              return gq[qq[0]] = qq[4], Eq[-qq[26]](gq[qq[1]] >> gq[qq[3]] & qq[31] | qq[32])
            }

            function mq(...gq) {
              return gq[qq[0]] = qq[3], (4294967168 & gq[qq[1]]) == qq[1] ? Eq[-qq[26]](gq[qq[1]]) : (gq[qq[3]] = "", (4294965248 & gq[qq[1]]) == qq[1] ? gq[qq[3]] = Eq[-qq[26]](gq[qq[1]] >> qq[10] & qq[44] | qq[37]) : (4294901760 & gq[qq[1]]) == qq[1] ? uq(lq(gq[qq[1]]), gq[qq[3]] = Eq[-qq[26]](gq[qq[1]] >> qq[30] & qq[47] | qq[42]), gq[qq[3]] += Oq(gq[qq[1]], qq[10])) : (4292870144 & gq[qq[1]]) == qq[1] && uq(gq[qq[3]] = Eq[-qq[26]](gq[qq[1]] >> qq[49] & qq[48] | qq[46]), gq[qq[3]] += Oq(gq[qq[1]], qq[30]), gq[qq[3]] += Oq(gq[qq[1]], qq[10])), gq[qq[3]] += Eq[-qq[26]](gq[qq[1]] & qq[31] | qq[32]), gq[qq[3]])
            }

            function xq(...Eq) {
              for (uq(Eq[qq[0]] = qq[3], Eq[qq[33]] = gq(Eq[qq[1]]), Eq[-qq[31]] = Eq[qq[33]].length, Eq[qq[34]] = -qq[3], Eq[qq[14]] = qq[7], Eq[-qq[35]] = ""); ++Eq[qq[34]] < Eq[-qq[31]];) uq(Eq[qq[14]] = Eq[qq[33]][Eq[qq[34]]], Eq[-qq[35]] += mq(Eq[qq[14]]));
              return Eq[-qq[35]]
            }

            function Aq(...gq) {
              if (gq[qq[0]] = qq[1], Eq[qq[5]] >= Eq[qq[13]]) throw Error(qq[39]);
              if (uq(gq[-qq[36]] = Eq[qq[40]][Eq[qq[5]]] & qq[41], Eq[qq[5]]++), (gq[-qq[36]] & qq[37]) == qq[32]) return gq[-qq[36]] & qq[31];
              throw Error(qq[45])
            }

            function cq(...gq) {
              if (uq(gq[qq[0]] = qq[1], gq[-qq[35]] = qq[7], gq[-qq[43]] = qq[7], gq[qq[34]] = qq[7], gq[qq[13]] = qq[7], gq[-qq[38]] = qq[7]), Eq[qq[5]] > Eq[qq[13]]) throw Error(qq[39]);
              if (Eq[qq[5]] == Eq[qq[13]]) return qq[9];
              if (uq(gq[-qq[35]] = Eq[qq[40]][Eq[qq[5]]] & qq[41], Eq[qq[5]]++), (gq[-qq[35]] & qq[32]) == qq[1]) return gq[-qq[35]];
              if ((gq[-qq[35]] & qq[42]) == qq[37]) {
                if (uq(gq[-qq[43]] = Aq(), gq[-qq[38]] = (gq[-qq[35]] & qq[44]) << qq[10] | gq[-qq[43]]), gq[-qq[38]] >= qq[32]) return gq[-qq[38]];
                throw Error(qq[45])
              }
              if ((gq[-qq[35]] & qq[46]) == qq[42]) {
                if (uq(gq[-qq[43]] = Aq(), gq[qq[34]] = Aq(), gq[-qq[38]] = (gq[-qq[35]] & qq[47]) << qq[30] | gq[-qq[43]] << qq[10] | gq[qq[34]]), gq[-qq[38]] >= 2048) return lq(gq[-qq[38]]), gq[-qq[38]];
                throw Error(qq[45])
              }
              if ((248 & gq[-qq[35]]) == qq[46] && (uq(gq[-qq[43]] = Aq(), gq[qq[34]] = Aq(), gq[qq[13]] = Aq(), gq[-qq[38]] = (gq[-qq[35]] & qq[48]) << qq[49] | gq[-qq[43]] << qq[30] | gq[qq[34]] << qq[10] | gq[qq[13]]), gq[-qq[38]] >= qq[25] && gq[-qq[38]] <= 1114111)) return gq[-qq[38]];
              throw Error("Invalid UTF-8 detected")
            }

            function Bq(...lq) {
              for (uq(lq[qq[0]] = qq[3], Eq[qq[40]] = gq(lq[qq[1]]), Eq[qq[13]] = Eq[qq[40]].length, Eq[qq[5]] = qq[1], lq[qq[12]] = [], lq[qq[4]] = qq[7]);
                (lq[qq[4]] = cq()) !== qq[9];) lq[qq[12]].push(lq[qq[4]]);
              return Yq(lq[qq[12]])
            }
            uq(Eq[qq[0]] = qq[3], Eq[-qq[26]] = String.fromCharCode), uq(Eq[qq[40]] = qq[7], Eq[qq[13]] = qq[7], Eq[qq[5]] = qq[7]), uq(Eq[qq[1]].version = "3.0.0", Eq[qq[1]].encode = xq, Eq[qq[1]].decode = Bq)
          }("undefined" === typeof exports ? this.utf8 = {} : exports)
        }();
        const lq = function(qq, Eq, gq, Yq) {
          const lq = [];
          rY(lq, qq), rY(lq, Eq), rY(lq, gq);
          for (const Oq of Yq) lq.push(Oq);
          return lq
        }(gq.game, gq.lobby, (qq[1], yY[qq[22]])(), Yq);
        try {
          await Aq(gq, "/persisted/keep-alive", {
            type: "IN",
            data: lq
          }, qq[13])
        } catch (Oq) {
          function xq(...Eq) {
            uq(Eq[qq[0]] = qq[1], Eq[-qq[52]] = function(...gq) {
              return gq[qq[0]] = qq[4], Eq[qq[5]]({}, gq[qq[1]], gq[qq[3]])
            }, Eq[qq[5]] = function(...gq) {
              if (uq(gq[qq[0]] = qq[13], gq[-qq[51]] = {}), gq[qq[1]][gq[qq[3]] + gq[qq[4]]] !== qq[7]) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]];
              if (gq[qq[3]] === gq[qq[4]]) return qq[11];
              for (gq[qq[50]] = qq[1]; gq[qq[50]] < gq[qq[3]].length; gq[qq[50]]++) gq[-qq[51]][gq[qq[3]][gq[qq[50]]]] === qq[7] && (gq[-qq[51]][gq[qq[3]][gq[qq[50]]]] = qq[1]), gq[-qq[51]][gq[qq[4]][gq[qq[50]]]] === qq[7] && (gq[-qq[51]][gq[qq[4]][gq[qq[50]]]] = qq[1]), uq(gq[-qq[51]][gq[qq[3]][gq[qq[50]]]]++, gq[-qq[51]][gq[qq[4]][gq[qq[50]]]]--);
              for (gq[qq[34]] in gq[-qq[51]])
                if (gq[-qq[51]][gq[qq[34]]] !== qq[1]) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[9], qq[9];
              for (gq[qq[22]] = qq[3]; gq[qq[22]] < gq[qq[3]].length; gq[qq[22]]++)
                if (Eq[qq[5]](gq[qq[1]], gq[qq[3]].substr(qq[1], gq[qq[22]]), gq[qq[4]].substr(qq[1], gq[qq[22]])) && Eq[qq[5]](gq[qq[1]], gq[qq[3]].substr(gq[qq[22]]), gq[qq[4]].substr(gq[qq[22]])) || Eq[qq[5]](gq[qq[1]], gq[qq[3]].substr(qq[1], gq[qq[22]]), gq[qq[4]].substr(gq[qq[4]].length - gq[qq[22]])) && Eq[qq[5]](gq[qq[1]], gq[qq[3]].substr(gq[qq[22]]), gq[qq[4]].substr(qq[1], gq[qq[4]].length - gq[qq[22]]))) return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[11], qq[11];
              return gq[qq[1]][gq[qq[3]] + gq[qq[4]]] = qq[9], qq[9]
            }, console.log(Eq[-qq[52]]))
          }
          "ebgKwx" + qq[12] in Eq && xq(), console.warn(Oq)
        }
      };
      const cq = (...Eq) => (Eq[qq[0]] = qq[4], Object.getOwnPropertyDescriptor(Eq[qq[1]], Eq[qq[3]]));

      function uq() {
        uq = function() {}
      }
      hY = () => {
        if ((qq[1], tY.N)(), cq(navigator, Yq) !== qq[7]) {
          function gq(...Eq) {
            Eq[qq[0]] = qq[1];
            const gq = require("big-integer");
            uq(Eq[qq[34]] = class {
              static randomPrime(...Eq) {
                Eq[qq[0]] = qq[3];
                const Yq = gq.one.shiftLeft(Eq[qq[1]] - qq[3]),
                  lq = gq.one.shiftLeft(Eq[qq[1]]).prev();
                for (; qq[11];) {
                  let qq = gq.randBetween(Yq, lq);
                  if (qq.isProbablePrime(256)) return qq
                }
              }
              static generate(...Eq) {
                Eq[qq[0]] = qq[3];
                const Yq = gq(65537);
                let lq, Oq;
                Eq[qq[53]] = qq[7];
                do {
                  uq(lq = this.randomPrime(Eq[qq[1]] / qq[4]), Oq = this.randomPrime(Eq[qq[1]] / qq[4]), Eq[qq[53]] = gq.lcm(lq.prev(), Oq.prev()))
                } while (gq.gcd(Yq, Eq[qq[53]]).notEquals(qq[3]) || lq.minus(Oq).abs().shiftRight(Eq[qq[1]] / qq[4] - 100).isZero());
                return {
                  e: Yq,
                  n: lq.multiply(Oq),
                  d: Yq.modInv(Eq[qq[53]])
                }
              }
              static encrypt(...Eq) {
                return Eq[qq[0]] = qq[13], gq(Eq[qq[1]]).modPow(Eq[qq[4]], Eq[qq[3]])
              }
              static decrypt(...Eq) {
                return Eq[qq[0]] = qq[13], gq(Eq[qq[1]]).modPow(Eq[qq[3]], Eq[qq[4]])
              }
              static encode(qq) {
                const Eq = qq.split("").map((qq => qq.charCodeAt())).join("");
                return gq(Eq)
              }
              static decode(...Eq) {
                Eq[qq[0]] = qq[3];
                const gq = Eq[qq[1]].toString();
                Eq[qq[3]] = "";
                for (let Yq = qq[1]; Yq < gq.length; Yq += qq[4]) {
                  let lq = Number(gq.substr(Yq, qq[4]));
                  lq <= 30 ? (Eq[qq[3]] += String.fromCharCode(Number(gq.substr(Yq, qq[13]))), Yq++) : Eq[qq[3]] += String.fromCharCode(lq)
                }
                return Eq[qq[3]]
              }
            }, module.exports = Eq[qq[34]])
          }
          return "DzItre" in Eq && gq(), Oq
        }
        return cq(window, lq) === qq[7] ? mq : xq
      }, nY = async Eq => {
        try {
          const gq = hY();
          await Aq(Eq, "/images/" + gq + ".png", {
            block: gq
          }, qq[1])
        } catch {}
      }
    })();
    var bY = gq(40633),
      iY = gq(1789);
    const ZY = 1e3 * bY.d.seatReservationSeconds - 3e3;
    class fY {
      constructor(qq) {
        var Eq, gq, Yq, lq;
        let Oq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (Eq = Oq.wallNow) && void 0 !== Eq ? Eq : Date.now, this.monoNow = null !== (gq = Oq.monoNow) && void 0 !== gq ? gq : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Yq = Oq.sleep) && void 0 !== Yq ? Yq : iY.b, this.follow = new QE.d(Oq.signal);
        const mq = null !== (lq = Oq.fetch) && void 0 !== lq ? lq : fetch;
        this.seat = (0, Ng.h)(qq.endpoint, qq.roomName, qq.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (qq, Eq) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), mq(qq, Eq)),
          onRefusal: () => {
            this.refusals++
          }
        }), this.seat.then((() => {
          this.follow.unfollow(), this.request = "answered", this.answeredAt = {
            wall: this.wallNow(),
            mono: this.monoNow()
          }
        }), (() => {
          this.follow.unfollow(), this.request = "failed"
        }))
      }
      rematched() {
        "unused" === this.use && (this.use = "rematched"), this.abort()
      }
      async take(qq) {
        if ("rematched" === this.use) return;
        (0, QE.o)(qq);
        const Eq = "pending" !== this.request,
          gq = () => {
            this.abort((0, QE.e)(qq))
          };
        let Yq;
        null === qq || void 0 === qq || qq.addEventListener("abort", gq, {
          once: !0
        });
        try {
          Yq = await this.seat
        } catch (lq) {
          if ((0, QE.o)(qq), !Eq) throw lq;
          return void(this.use = "lost")
        } finally {
          null === qq || void 0 === qq || qq.removeEventListener("abort", gq)
        }
        if ((0, QE.o)(qq), !(this.ageMs() > ZY)) return this.use = "taken", Yq;
        this.use = "renewed"
      }
      async reserveInstead(qq, Eq) {
        try {
          return await qq()
        } catch (gq) {
          const lq = this.holdLeftMs();
          if (!(gq instanceof Tq.l) || gq.code !== Yq.b.duplicateLobbyNameError.code || 0 === lq) throw gq;
          return await this.sleep(lq + 500, Eq), qq()
        }
      }
      release() {
        const {
          request: qq,
          use: Eq
        } = this, gq = this.holdsNoSeat();
        return this.abort(), "taken" === Eq || gq ? null : {
          unused: "unused" === Eq ? "abandoned" : Eq,
          answered: "answered" === qq,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var qq;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const Eq = null !== (qq = this.answeredAt) && void 0 !== qq ? qq : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          gq = Math.max(this.wallNow() - Eq.wall, this.monoNow() - Eq.mono);
        return Math.max(0, 1e3 * bY.d.seatReservationSeconds - gq)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(qq) {
        (0, QE.h)(this.follow.controller, qq)
      }
    }
    var MY = gq(1870),
      TY = gq(40741);
    const zY = new Uint8Array(0);
    class SY {
      constructor(qq) {
        if (this.options = qq, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === qq.module) return this.stopped = !0, void qq.fail("no wasm module for the meshing workers");
        qq.loadWorkers().then((qq => {
          let {
            create: Eq,
            count: gq
          } = qq;
          if (!this.stopped) {
            this.createWorker = Eq;
            for (let qq = 0; qq < gq; qq++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let qq = 0; qq < gq; qq++) this.start(qq)
          }
        }), (qq => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", qq))
        }))
      }
      take(qq, Eq, gq) {
        const Yq = this.slots[Eq];
        if (qq === JE.ce.Retire) {
          var lq, Oq, mq;
          if (Yq && !Yq.gone) null === (lq = Yq.worker) || void 0 === lq || lq.terminate(), Yq.worker = null, Yq.started = !1, null === (Oq = (mq = this.options).onMemoryGone) || void 0 === Oq || Oq.call(mq, Eq), this.giveUp(Eq, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const xq = null === Yq || void 0 === Yq ? void 0 : Yq.worker;
        if (!xq || !Yq.started) return;
        const Aq = gq.byteLength;
        let cq = null;
        qq === JE.ce.Mesh && Yq.heapRetries > 0 && (Yq.heapRetries--, cq = this.pooled(Aq, !0)), cq ??= this.buffer(Aq), new Uint8Array(cq, 0, Aq).set(gq), xq.postMessage({
          type: "job",
          kind: qq,
          bytes: cq,
          len: Aq
        }, [cq])
      }
      takeFailedMeshJobs() {
        const qq = this.failedJobs;
        return this.failedJobs = 0, qq
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const Eq of this.slots) {
          var qq;
          pY(Eq), null === (qq = Eq.worker) || void 0 === qq || qq.terminate(), Eq.worker = null, Eq.started = !1
        }
      }
      start(qq) {
        const Eq = this.slots[qq],
          {
            module: gq
          } = this.options,
          Yq = this.createWorker;
        if (this.stopped || Eq.gone || null === gq || null === Yq) return;
        if (Eq.startsWithoutResult >= 3) return void this.giveUp(qq, "failed to start 3 times in a row", "no meshing worker would start");
        let lq;
        Eq.startsWithoutResult++;
        try {
          lq = Yq()
        } catch (Oq) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${qq} did not start`, Oq), void this.start(qq)
        }
        Eq.worker = lq, lq.onmessage = gq => {
          let {
            data: Yq
          } = gq;
          Eq.worker === lq && this.onReply(qq, Yq)
        }, lq.onmessageerror = () => {
          Eq.worker === lq && this.lose(qq, "a reply could not be read")
        }, lq.onerror = gq => {
          gq.preventDefault(), Eq.worker === lq && this.lose(qq, gq.message || "its script failed")
        };
        try {
          lq.postMessage({
            type: "start",
            module: gq
          })
        } catch (Oq) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${qq} could not be sent the module`, Oq), lq.terminate(), Eq.worker = null, void this.start(qq)
        }
        Eq.watch = new TY.j(TY.d, (Eq => {
          this.lose(qq, (0, TY.k)(Eq), (() => {
            this.options.onStartTimeout(Eq)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(qq, Eq) {
        const gq = this.slots[qq];
        switch (Eq.type) {
          case "started":
            pY(gq), gq.started = !0, this.options.write(0, JE.ae.WorkerStarted, 0, qq, 0, zY);
            break;
          case "lost":
            this.lose(qq, Eq.reason);
            break;
          case "memory":
            var Yq, lq;
            null === (Yq = (lq = this.options).onMemoryStats) || void 0 === Yq || Yq.call(lq, qq, Eq.stats);
            break;
          case "result": {
            const Yq = Eq.status === JE.wb.Trapped;
            if (0 !== Eq.jobId) {
              if (Yq) this.countFailedJob(Eq.outOfMemory, "light_trap", Eq.trap);
              else if (gq.startsWithoutResult = 0, gq.trapsWithoutResult = 0, Eq.status === JE.wb.Refused) {
                const gq = function(qq) {
                  if (qq.byteLength < 32) return "(no reason)";
                  const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength),
                    gq = Math.min(Eq.getUint32(28, !0), qq.byteLength - 28 - 4);
                  return (new TextDecoder).decode(qq.subarray(32, 32 + gq)).slice(0, 200)
                }(new Uint8Array(Eq.bytes, 0, Eq.len));
                this.countFailedJob(UE.c.test(gq), "light_refused_input", gq), this.logRefusal(qq, gq)
              }
              Eq.status === JE.wb.HeapRefused && (gq.heapRetries = Math.min(gq.heapRetries + 1, 4), this.logHeapRefusal(qq))
            }
            if (this.options.write(Eq.jobId, JE.ae.JobResult, Eq.status, qq, Eq.workerUs, new Uint8Array(Eq.bytes, 0, Eq.len)), this.recycle(Eq.bytes), Eq.spare && this.recycle(Eq.spare), !Yq) break;
            if (gq.startsWithoutResult = 0, 0 === Eq.jobId) {
              this.lose(qq, `the tables trapped its wasm: ${Eq.trap}`);
              break
            }
            gq.trapsWithoutResult++;
            const lq = gq.trapsWithoutResult > 6;
            gq.gone ||= lq, this.lose(qq, `a job trapped its wasm: ${Eq.trap}`), lq && this.giveUp(qq, `trapped ${gq.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(qq, Eq, gq) {
        if (qq) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(Eq) || (this.faultsReported.add(Eq), this.options.onLightFault(Eq, gq));
        this.failedJobs++
      }
      logRefusal(qq, Eq) {
        var gq;
        !this.refusals.has(Eq) && this.refusals.size >= 16 && (Eq = "(other reasons)");
        const Yq = (null !== (gq = this.refusals.get(Eq)) && void 0 !== gq ? gq : 0) + 1;
        this.refusals.set(Eq, Yq), (0, MY.A)(Yq) && console.warn(`[bloxd-wasm-client] meshing worker ${qq} refused a chunk (${Yq} so far for this reason): ${Eq}`)
      }
      logHeapRefusal(qq) {
        this.heapRefusals++, (0, MY.A)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${qq} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(qq, Eq, gq) {
        const Yq = this.slots[qq];
        if (Yq.gone = !0, Yq.goneFor = {
            why: Eq,
            failure: gq
          }, console.warn(`[bloxd-wasm-client] meshing worker ${qq} ${Eq}: giving up on it`), this.slots.every((qq => qq.gone))) {
          this.stop();
          const qq = new Set(this.slots.map((qq => {
              var Eq;
              return null === (Eq = qq.goneFor) || void 0 === Eq ? void 0 : Eq.failure
            }))),
            Eq = this.slots.map(((qq, Eq) => {
              var gq, Yq;
              return `worker ${Eq} ${null!==(gq=null===(Yq=qq.goneFor)||void 0===Yq?void 0:Yq.why)&&void 0!==gq?gq:"went"}`
            }));
          this.options.fail(1 === qq.size ? gq : `no meshing worker is left (${Eq.join(", ")})`)
        }
      }
      lose(qq, Eq, gq) {
        var Yq, lq, Oq;
        const mq = this.slots[qq];
        console.warn(`[bloxd-wasm-client] meshing worker ${qq} was lost: ${Eq}`), pY(mq), null === (Yq = mq.worker) || void 0 === Yq || Yq.terminate(), mq.worker = null, mq.heapRetries = 0, null === (lq = (Oq = this.options).onMemoryGone) || void 0 === lq || lq.call(Oq, qq), this.stopped || (gq ? gq() : this.options.onWorkerLost(Eq), mq.started && (mq.started = !1, this.options.write(0, JE.ae.WorkerLost, 0, qq, 0, zY)), this.start(qq))
      }
      buffer(qq) {
        var Eq;
        return null !== (Eq = this.pooled(qq)) && void 0 !== Eq ? Eq : new ArrayBuffer(Math.max(16384, qq))
      }
      pooled(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = -1;
        for (let lq = 0; lq < this.pool.length; lq++) {
          const Yq = this.pool[lq].byteLength;
          Yq >= qq && (gq < 0 || (Eq ? Yq > this.pool[gq].byteLength : Yq < this.pool[gq].byteLength)) && (gq = lq)
        }
        if (gq < 0) return null;
        const Yq = this.pool[gq];
        return this.pool[gq] = this.pool[this.pool.length - 1], this.pool.pop(), Yq
      }
      recycle(qq) {
        this.pool.length < 4 * this.slots.length && qq.byteLength > 0 && qq.byteLength <= 1048576 && this.pool.push(qq)
      }
    }

    function pY(qq) {
      var Eq;
      null === (Eq = qq.watch) || void 0 === Eq || Eq.cancel(), qq.watch = null
    }
    var GY = gq(39068),
      LY = gq(40691),
      JY = gq(40747),
      kY = gq(40752),
      RY = (gq(40515), gq(40760)),
      UY = gq(40731);

    function FY(qq) {
      const Eq = new Uint8Array(qq.length >> 2);
      for (let gq = 0; gq < Eq.length; gq++) Eq[gq] = qq[4 * gq + 3];
      return Eq
    }
    async function sY(qq) {
      const Eq = await (0, RY.h)(qq);
      try {
        const {
          width: qq,
          height: gq,
          pixels: Yq
        } = (0, UY.n)(Eq);
        return {
          width: qq,
          height: gq,
          alpha: FY(Yq)
        }
      } finally {
        Eq.close()
      }
    }
    class XY {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sY;
        this.session = qq, this.sources = Eq, this.warn = gq, this.load = Yq, this.nextPoll = 0, this.eN = !1, this.warned = new Set
      }
      drain(qq) {
        if (qq < this.nextPoll) return;
        this.nextPoll = qq + 250;
        const Eq = this.session.sunShadowWantedTextures();
        if (Eq)
          for (let gq = 0; gq + 1 < Eq.length; gq += 2) this.hand(Eq[gq], Eq[gq + 1]);
        for (const gq of this.session.takeSunShadowWarnings()) this.warn(gq)
      }
      dispose() {
        this.eN = !0
      }
      async hand(qq, Eq) {
        var gq, Yq, lq, Oq, mq;
        let xq, Aq = null;
        try {
          if (Aq = await this.sources.blockImageUrl(qq), null === Aq) throw new Error(`block image ${qq} has no URL`);
          xq = await this.load(Aq)
        } catch (uq) {
          var cq;
          const Eq = null !== (cq = Aq) && void 0 !== cq ? cq : `block image ${qq}`;
          this.warned.has(Eq) || (this.warned.add(Eq), this.warn(`sun shadow plane texture ${Eq} didn't load: its blocks cast no shadow`, uq))
        }
        this.eN || this.session.setSunShadowTexture(qq, Eq, null !== (gq = null === (Yq = xq) || void 0 === Yq ? void 0 : Yq.width) && void 0 !== gq ? gq : 0, null !== (lq = null === (Oq = xq) || void 0 === Oq ? void 0 : Oq.height) && void 0 !== lq ? lq : 0, null === (mq = xq) || void 0 === mq ? void 0 : mq.alpha)
      }
    }
    var wY = gq(40470),
      KY = gq(40700),
      CY = gq(40762),
      IY = gq(40765),
      eY = gq(40707),
      DY = gq(40714),
      ql = gq(9321),
      El = gq(9167),
      gl = gq(40778);
    const Yl = 8192,
      ll = new Set;
    const Ol = new Set([...El.e, "sceneDownload"]);
    var ml = gq(40534),
      xl = gq(40415);
    const Al = new Uint8Array(0);
    let cl = null;

    function ul(qq) {
      return {
        aux: JE._b.AdStart | (qq ? JE._b.PreventMovement : 0),
        payload: Al
      }
    }
    var Bl = gq(2700),
      Wl = gq(2704);
    const Nl = "__bloxdSceneCapture";
    var al = gq(1768),
      Vl = gq(2841);
    let dl = null,
      jl = null,
      Hl = null,
      ol = !1;

    function Pl() {
      dl ??= performance.now()
    }
    var Ql = gq(40786);
    class yl {
      constructor(qq) {
        var Eq, gq;
        this.host = qq, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((qq => {
          this.landRequest = qq
        })), this.follow = qq => {
          let Eq = qq;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const qq = null === this.requested && null !== Eq;
            var gq;
            qq && (null === (gq = Eq) || void 0 === gq || gq(null));
            const Yq = await this.landing;
            var lq;
            null === Yq && qq || (null === (lq = Eq) || void 0 === lq || lq(Yq))
          })), () => {
            Eq = null
          }
        }, this.startRead = (gq = qq.store, gq.keys().then((qq => ({
          own: qq.includes(Hg.e),
          oneShot: qq.includes(Hg.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((qq => {
          let {
            own: Eq,
            oneShot: gq
          } = qq;
          this.oneShotStored = gq, (Eq || gq) && this.request()
        })), this.channel = (null !== (Eq = qq.openChannel) && void 0 !== Eq ? Eq : Hg.x)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var qq;
        if (null !== this.requested) return this.requested;
        null === (qq = this.channel) || void 0 === qq || qq.close(), this.channel = null;
        const Eq = this.oneShotStored;
        return this.requested = function(qq, Eq, gq) {
          return new Promise((Eq => {
            Eq(qq())
          })).catch((qq => (null !== Eq && (0, Hg.t)(Eq), gq(qq), null)))
        }((() => this.host.load(Eq).then((qq => (qq.setGamePackConfirm(this.confirm), this.landed = qq, qq)))), Eq ? this.host.store : null, this.host.SN), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var qq;
          return null !== (qq = this.requested) && void 0 !== qq ? qq : null
        }))
      }
      setGamePackConfirm(qq) {
        var Eq;
        this.confirm = qq, null === (Eq = this.landed) || void 0 === Eq || Eq.setGamePackConfirm(qq)
      }
    }
    var tl = gq(36350);
    const rl = 216 * tl.g,
      vl = 92 * tl.d,
      hl = 64 * tl.g,
      nl = 16 * tl.g;

    function bl() {
      var qq, Eq;
      return null !== (qq = null === (Eq = performance.memory) || void 0 === Eq ? void 0 : Eq.DH) && void 0 !== qq ? qq : null
    }
    class il {
      constructor(qq, Eq) {
        this.budgetBytes = qq, this.reads = Eq, this.estimate = null, this.shedAt = null
      }
      read(qq) {
        var Eq;
        const gq = this.reads.storedChunks(),
          Yq = this.reads.gpuBytes(),
          lq = Math.max(null !== (Eq = this.reads.jsHeapBytes()) && void 0 !== Eq ? Eq : 0, hl),
          Oq = rl + qq + lq + Yq + gq * vl;
        this.estimate = {
          wasmBytes: qq,
          jsHeapBytes: lq,
          gpuBytes: Yq,
          storedChunks: gq,
          totalBytes: Oq
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: qq,
          budgetBytes: Eq,
          shedAt: gq
        } = this;
        return !(null === qq || null === Eq || qq.totalBytes < Eq || null !== gq && qq.totalBytes < gq + nl) && (this.shedAt = qq.totalBytes, !0)
      }
      describe() {
        const {
          estimate: qq,
          budgetBytes: Eq
        } = this;
        return null === qq ? null : `estimate ${(0,tl.k)(qq.totalBytes)} MiB of budget ${null===Eq?"none":(0,tl.k)(Eq)}: wasm ${(0,tl.k)(qq.wasmBytes)} js ${(0,tl.k)(qq.jsHeapBytes)} gpu ${(0,tl.k)(qq.gpuBytes)} chunks ${qq.storedChunks}`
      }
      snapshot() {
        const {
          estimate: qq,
          budgetBytes: Eq
        } = this;
        return {
          ...null === qq ? {} : {
            footprintMiB: Number((0, tl.k)(qq.totalBytes)),
            gpuMiB: Number((0, tl.k)(qq.gpuBytes)),
            storedChunks: qq.storedChunks
          },
          footprintBudgetMiB: null === Eq ? -1 : Number((0, tl.k)(Eq))
        }
      }
    }
    var Zl = gq(2733),
      fl = gq(4343),
      Ml = gq(39047),
      Tl = gq(37910);
    const zl = kE.X + 1,
      Sl = 4096 * zl;
    class pl {
      constructor(qq, Eq) {
        this.log = qq, this.take = Eq, this.Fc = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(qq, Eq) {
        const gq = this.take();
        gq.length >= kE.V && gq[0] > 0 && (0, Zl.m)("remesh", `${gq[0]} core records lost to a full log`);
        const Yq = this.Fc;
        for (let lq = kE.V; lq + kE.X <= gq.length; lq += kE.X) {
          for (let qq = lq; qq < lq + kE.X; qq++) Yq.push(gq[qq]);
          Yq.push(qq)
        }
        if (Eq || !(Yq.length < Sl)) {
          for (let Eq = 0; Eq < Yq.length; Eq += zl) this.feed(Eq, qq);
          Yq.length = 0, Eq && this.log.frame(qq)
        }
      }
      feed(qq, Eq) {
        var gq;
        const Yq = this.Fc,
          lq = (0, Tl.f)(Yq[qq + 1], Yq[qq + 2], Yq[qq + 3]),
          Oq = Yq[qq + 4],
          mq = Yq[qq + kE.X];
        switch (Yq[qq]) {
          case kE.zb.Edit:
            this.log.edit(lq, mq);
            break;
          case kE.zb.Sent:
            this.latest.set(lq, Oq), this.log.sent(lq, Oq, Yq[qq + 5], Yq[qq + 6], Yq[qq + 7], null !== (gq = this.unshown.get(lq)) && void 0 !== gq ? gq : Tl.d, mq);
            break;
          case kE.zb.Done: {
            this.log.received(Oq, Yq[qq + 5] / 1e3, mq);
            const Eq = this.unshown.get(lq);
            void 0 === Eq ? this.unshown.set(lq, [Oq]) : Eq.push(Oq);
            break
          }
          case kE.zb.Failed: {
            const qq = this.latest.get(lq);
            void 0 !== qq && qq !== Oq ? this.log.reassign(lq, Oq, qq) : this.log.failed(Oq), this.ended(lq, Oq);
            break
          }
          case kE.zb.Shown:
            this.log.applied(lq, Oq, Eq), this.ended(lq, Oq);
            break;
          case kE.zb.Replaced:
            this.log.reassign(lq, Oq, Yq[qq + 5]), this.ended(lq, Oq);
            break;
          case kE.zb.Emptied:
            this.log.emptied(lq, Eq);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Yq[qq]}`)
        }
      }
      ended(qq, Eq) {
        this.latest.get(qq) === Eq && this.latest.delete(qq);
        const gq = this.unshown.get(qq);
        if (void 0 === gq) return;
        const Yq = gq.indexOf(Eq);
        Yq >= 0 && gq.splice(Yq, 1), 0 === gq.length && this.unshown.delete(qq)
      }
    }
    let Gl = null;
    var Ll = gq(3122);
    const Jl = new Set(["bingo", "buildAFactory2", "classic", "testGym"]),
      kl = new Set(["creativeFlat", "skyGrid"]);
    const Rl = new Uint8Array(0);
    class Ul {
      constructor(qq) {
        this.options = qq, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.Fc = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== qq.module ? qq.write(0, JE.ae.WorldgenStarted, 0, 0, Rl) : this.giveUp()
      }
      take(qq, Eq) {
        if (!(this.gone || null === this.worker && null === this.Fc))
          if (qq === JE.ce.WorldgenSeed) {
            const qq = 0 === Eq.byteLength ? null : this.options.decodeSettings(Eq);
            null === qq ? this.release() : function(qq, Eq) {
              if ((null === qq || void 0 === qq ? void 0 : qq.byteLength) !== Eq.byteLength) return !1;
              for (let gq = 0; gq < qq.byteLength; gq++)
                if (qq[gq] !== Eq[gq]) return !1;
              return !0
            }(this.seed, Eq) || (this.seed = Eq.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: qq
            }, []), null !== qq ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (qq === JE.ce.Generate) {
          var gq;
          const qq = new DataView(Eq.buffer, Eq.byteOffset, JE.Vd),
            Yq = null !== (gq = this.pool.pop()) && void 0 !== gq ? gq : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: qq.getUint32(0, !0),
            x: qq.getInt32(4, !0),
            y: qq.getInt32(8, !0),
            z: qq.getInt32(12, !0),
            bytes: Yq
          }, [Yq])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stop() {
        var qq;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (qq = this.worker) || void 0 === qq || qq.terminate(), this.worker = null
      }
      post(qq, Eq) {
        var gq;
        null !== this.Fc ? this.Fc.push({
          message: qq,
          transfer: Eq
        }) : null === (gq = this.worker) || void 0 === gq || gq.postMessage(qq, Eq)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.Fc ??= [])
      }
      endWorker() {
        var qq, Eq, gq;
        this.endWatch(), null === (qq = this.worker) || void 0 === qq || qq.terminate(), this.worker = null, null === (Eq = (gq = this.options).onMemoryGone) || void 0 === Eq || Eq.call(gq)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((qq => {
          this.createWorker = qq, this.wanted && this.start()
        }), (qq => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(qq))
        })))
      }
      start() {
        const {
          module: qq
        } = this.options, Eq = this.createWorker;
        if (this.gone || null === qq || null === Eq) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let gq;
        this.startsWithoutResult++;
        try {
          gq = Eq()
        } catch (lq) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", lq), this.lastLoss = `it did not start (${String(lq)})`, void this.start()
        }
        this.worker = gq, gq.onmessage = qq => {
          let {
            data: Eq
          } = qq;
          this.worker === gq && this.onReply(gq, Eq)
        }, gq.onerror = qq => {
          qq.preventDefault(), this.worker === gq && this.lose(qq.message || "its script failed")
        };
        try {
          gq.postMessage({
            type: "start",
            module: qq,
            Oa: Yq.c.Oa
          })
        } catch (lq) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", lq), this.lastLoss = `it could not be sent the module (${String(lq)})`, gq.terminate(), this.worker = null, void this.start()
        }
        this.watch = new TY.j(TY.f, (qq => {
          this.lose((0, TY.k)(qq), (() => {
            this.options.onStartTimeout(qq)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(qq, Eq) {
        switch (Eq.type) {
          case "started": {
            this.endWatch();
            const Eq = this.Fc;
            if (null === Eq) {
              this.options.write(0, JE.ae.WorldgenStarted, 0, 0, Rl);
              break
            }
            this.Fc = null;
            for (const {
                message: gq,
                transfer: Yq
              }
              of Eq) qq.postMessage(gq, Yq);
            break
          }
          case "lost":
            this.lose(Eq.reason);
            break;
          case "memory":
            var gq, Yq;
            null === (gq = (Yq = this.options).onMemoryStats) || void 0 === gq || gq.call(Yq, Eq.stats);
            break;
          case "result":
            Eq.status !== JE.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(Eq.ticket, JE.ae.WorldgenResult, Eq.status, Eq.workerUs, new Uint8Array(Eq.bytes, 0, Eq.len)), this.recycle(Eq.bytes), Eq.spare && this.recycle(Eq.spare)
        }
      }
      lose(qq, Eq) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${qq}`), this.lastLoss = qq, this.endWorker(), this.gone || (Eq ? Eq() : this.options.onWorkerLost(qq), this.dropHeld(), this.Fc = null, this.options.write(0, JE.ae.WorldgenLost, JE.ge.Lost, 0, Rl), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, JE.ae.WorldgenLost, JE.ge.Gone, 0, Rl)
      }
      endWatch() {
        var qq;
        null === (qq = this.watch) || void 0 === qq || qq.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Fc) {
          for (const {
              message: qq
            }
            of this.Fc) "generate" === qq.type && this.recycle(qq.bytes);
          this.Fc.length = 0
        }
      }
      recycle(qq) {
        this.pool.length < 16 && qq.byteLength > 0 && qq.byteLength <= 16384 && this.pool.push(qq)
      }
    }
    var Fl = gq(37742),
      sl = gq(3567),
      Xl = gq(40394),
      wl = gq(40788),
      Kl = gq(40663);
    const Cl = /[(@\s]([^\s(@]+)$/,
      Il = /:\d/;

    function el(qq, Eq) {
      for (let gq = 0; gq + Eq.length <= qq.length; gq++) {
        let Yq = 0;
        for (; Yq < Eq.length && qq[gq + Yq] === Eq[Yq];) Yq++;
        if (Yq === Eq.length) return gq
      }
      return -1
    }

    function Dl(qq) {
      return "(" === qq || ")" === qq || "@" === qq || "," === qq || " " === qq || "\t" === qq
    }

    function qO(qq, Eq) {
      let gq = Eq;
      for (; gq > 0 && !Dl(qq[gq - 1]);) gq--;
      let Yq = Eq;
      for (; Yq < qq.length && !Dl(qq[Yq]);) Yq++;
      let lq = "";
      for (let Oq = gq; Oq < Yq; Oq++) lq += qq[Oq];
      return lq
    }

    function EO(qq, Eq) {
      var gq;
      const Yq = /[^\n]+/g,
        lq = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        Oq = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let mq = null,
        xq = null,
        Aq = (0, tY.n)(tY.X, Yq, [qq]);
      for (; null !== Aq;) {
        const gq = (0, tY.n)(tY.X, lq, [Aq[0]]),
          cq = null === Eq ? -1 : el(Aq[0], Eq);
        if (-1 !== cq) {
          if (null !== gq) return gq[0];
          const qq = qO(Aq[0], cq),
            Eq = (0, tY.n)(tY.X, Cl, [Aq[0]]),
            Yq = null !== (0, tY.n)(tY.X, Il, [qq]) ? qq : null === Eq ? null : Eq[1],
            lq = null === Yq ? null : (0, tY.n)(tY.X, Oq, [Yq]);
          if (null !== lq && "" !== lq[1]) return lq[1]
        }
        null !== gq && (null === mq ? mq = gq[0] : null === xq && gq[0] !== mq && (xq = gq[0])), Aq = (0, tY.n)(tY.X, Yq, [qq])
      }
      return null !== (gq = xq) && void 0 !== gq ? gq : null === mq ? "none" : "own"
    }
    const gO = (qq, Eq) => qq.includes(Eq),
      YO = qq => {
        try {
          return qq()
        } catch {
          return !1
        }
      },
      lO = -1,
      OO = qq => {
        try {
          return qq()
        } catch {
          return lO
        }
      };

    function mO(qq, Eq) {
      return {
        probe: (gq, Yq, lq) => {
          try {
            return ((gq, Yq, lq) => {
              switch (gq) {
                case JE.mc.StackCheck:
                  return Eq.stackCheck() ? 1 : 0;
                case JE.mc.ConfirmMesh:
                  return Eq.confirmMesh();
                case JE.mc.IndexPassReplaced:
                  return Eq.indexPassReplaced() ? 1 : 0;
                case JE.mc.ProductSubChanged:
                  return Eq.productSubChanged() ? 1 : 0;
                case JE.mc.RenderStatus:
                  return Eq.zu();
                case JE.mc.Held:
                  return Eq.Fc();
                case JE.mc.PlayerKilledSubs:
                  return Eq.playerKilledSubs();
                case JE.bb: {
                  const gq = Eq.getComplete();
                  return null === gq ? 0 : (0, tY.n)(tY.B, tY.jb, [gq, new tY.c((0, tY.K)(qq()), Yq, lq)]).written
                }
                default:
                  return 0
              }
            })(gq, Yq, lq)
          } catch {
            return JE.fc
          }
        }
      }
    }
    class xO {
      constructor(qq) {
        this.write = qq, this.flagsWritten = 0, this.written = (0, tY.q)(null)
      }
      SB(qq) {
        let {
          flags: Eq,
          values: gq
        } = qq;
        for (let Yq = 0; Yq < gq.length; Yq++) this.value(gq[Yq][0], gq[Yq][1]);
        this.setFlags(Eq | JE.d.Ready)
      }
      value(qq, Eq) {
        this.written[qq] !== Eq && this.write(qq, Eq, 0) && (this.written[qq] = Eq)
      }
      setFlags(qq) {
        const Eq = qq & ~this.flagsWritten;
        0 !== Eq && this.write(JE.f.Flags, Eq, Eq) && (this.flagsWritten |= Eq)
      }
      originStackHit() {
        return this.write(JE.f.Flags, JE.d.OriginStackHit, JE.d.OriginStackHit)
      }
    }
    const AO = {
        InputListeners: 0,
        InputWriter: 1,
        CoreFrame: 2,
        GlueFrame: 3,
        SocketSend: 4,
        AddEventListener: 5,
        DispatchEvent: 6,
        RequestAnimationFrame: 7,
        PerformanceNow: 8,
        DateNow: 9
      },
      cO = 1e3;

    function uO(qq, Eq) {
      const gq = new xO(Eq);
      let Yq = !1;
      gq.SB(qq.SB());
      const lq = (0, tY.db)((() => {
          gq.SB(qq.SB())
        }), cO),
        Oq = () => {
          qq.checks.stackCheck() && (Yq = !0)
        };
      (0, wl.d)(Oq);
      const mq = () => {
        const Eq = qq.checkPadCall();
        0 !== Eq && gq.setFlags(Eq)
      };
      return (0, Xl.i)(mq), {
        onInput: Eq => {
          (function(qq) {
            switch (qq) {
              case JE.sb.KeyDown:
              case JE.sb.KeyUp:
              case JE.sb.MouseDown:
              case JE.sb.MouseUp:
              case JE.sb.Wheel:
              case JE.sb.TouchStart:
              case JE.sb.TouchEnd:
              case JE.sb.TouchButton:
              case JE.sb.PadAction:
                return !0;
              default:
                return !1
            }
          })(Eq) && qq.checks.stackCheck() && (Yq = !0)
        },
        onSend: Oq,
        beforeFrame: () => {
          Yq && gq.originStackHit() && (Yq = !1)
        },
        onEvent: Eq => {
          const Yq = qq.checkEvent(Eq);
          gq.value(JE.f.ProbeUsedProp, qq.usedProp()), 0 !== Yq && gq.setFlags(Yq)
        },
        stop: () => {
          (0, tY.eb)(lq), (0, wl.c)(Oq), (0, Xl.f)(mq)
        }
      }
    }
    let BO;
    const WO = ["length", 1, 2, void 0, null, 3, 0, "t", "c3RhY2", "cw==", !1, 1e5, "c", "d", "e", 1023, "b", 236, 65536, 4, "a", 10, 55296, 56320, 6, 12, 63, 128, 124, 88, 155, 192, "Invalid byte index", 178, 255, 224, 82, 31, "Invalid continuation byte", 240, 205, 15, 7, 18, "stack", "name", !0, 69, 105, 134, 5, 11, "q", 175, 91, 39, 34, 75, 235, "h", "g", 89, 160, 127, "k", 58, 27, "string", 247, 42, 206, "functi", "on", 14, 243, "n", 221, 108, 65, 56319, 64512, 65535, 57343, "Lone s", "urroga", "te U+", 16, 4294967168, 4294965248, 4294901760, 4292870144, 186, 80, 165, 2048, 248, 1114111, "Invalid UTF-8 detected", 226, "3.0.0", "undefi", "ned", "protot", "ype", "decode", 216, " is not", " a scal", "ar valu", 161, 20, 237, 104, 222, 84, "I=", "p", "eTR5bm", "s", 188, 8, 36, "xIWaWX", "7", 512, 241, "012345", 159, 242, "f", 130, 147, 231, 32, 24, 19, 64, 148, 146, 197, "r", 113, "G", 22, 51, 136, 72, 213, 40, 60, "s=", "=", ";", "/", "V", "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "Hd", 233, " is no", "t a sc", "alar v", "alue", 154, 110, 107, 234, 56, 202, 245, "chEven", "dispat", "now", "confir", "mMesh", "produc", "i", "player", "Killed", "number", "toString", "get", "v", "x", "None", 57, 13, "En", "tOverw", "ritten", "plete"];

    function NO() {}

    function aO() {
      aO = function() {}
    }
    BO = function(qq) {
      let Eq = arguments[WO[0]] > WO[1] && arguments[WO[1]] !== WO[3] ? arguments[WO[1]] : () => WO[4],
        gq = arguments[WO[0]] > WO[2] && arguments[WO[2]] !== WO[3] ? arguments[WO[2]] : WO[4],
        Yq = arguments[WO[0]] > WO[5] && arguments[WO[5]] !== WO[3] ? arguments[WO[5]] : "";
      const lq = window,
        Oq = (WO[6], tY[WO[7]])("RXJyb3" + WO[115]),
        mq = (WO[6], tY[WO[7]])(WO[8] + WO[150]),
        xq = (WO[6], tY[WO[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        cq = (WO[6], tY[WO[7]])(WO[8] + "tUcmFjZUxpbWl0"),
        uq = (WO[6], tY[WO[7]])("bmF0aXZl"),
        Bq = [(WO[6], tY[WO[7]])("bWFpbi5qcw=="), (WO[6], tY[WO[7]])("aW5kZXguanM="), (WO[6], tY[WO[7]])("dXNlcnNjcmlwdA=="), (WO[6], tY[WO[7]])("Y29udGVudC5q" + WO[9]), (WO[6], tY[WO[7]])("b3B0aW9ucy5q" + WO[9]), (WO[6], tY[WO[7]])("cG9wdXAuanM="), (WO[6], tY[WO[7]])("LnVzZXIuanM="), (WO[6], tY[WO[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Wq = (...qq) => {
          qq[WO[0]] = WO[1], "IOGFxt" in NO && (module.exports = async (qq = () => {
            throw new Error(WO[155])
          }) => {
            const Eq = new Set(process.argv.slice(WO[2]));
            if (!Eq.has(WO[156])) {
              if (Eq.size !== WO[1]) return WO[10];
              if (!Eq.has(WO[157])) return WO[10]
            }
            return await (async (Eq, gq) => gq === await qq() ? WO[161] + WO[162] : "")(), WO[46]
          });
          const Eq = lq[Oq],
            gq = Eq;
          gq[cq] < WO[11] && (gq[cq] = WO[11]);
          const Yq = "string" === typeof(Wq = (new Eq)[mq]) ? Wq : `${Wq}`,
            Aq = {},
            uq = gq[xq];
          var Wq;
          typeof uq === WO[71] + WO[72] && (WO[6], tY[WO[75]])(uq, Eq, [Aq]);
          const Nq = Aq[mq],
            aq = qq[WO[6]] ? Bq[WO[0]] : Bq[WO[0]] - WO[1];
          for (let Vq = WO[6]; Vq < aq; Vq++) {
            if (gO(Yq, Bq[Vq])) return {
              [WO[44]]: Yq,
              [WO[45]]: Bq[Vq]
            };
            if (typeof Nq === WO[67] && gO(Nq, Bq[Vq])) {
              function dq() {
                ! function(...qq) {
                  function Eq(...qq) {
                    for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = [], qq[WO[2]] = WO[6], qq[WO[12]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[2]] < qq[WO[12]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq[WO[2]] < qq[WO[12]] ? (qq[WO[14]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), (qq[WO[14]] & WO[80]) == WO[23] ? qq[WO[1]].push(((qq[WO[13]] & WO[15]) << WO[21]) + (qq[WO[14]] & WO[15]) + WO[18]) : (qq[WO[1]].push(qq[WO[13]]), qq[WO[2]]--)) : qq[WO[1]].push(qq[WO[13]]));
                    return qq[WO[1]]
                  }

                  function gq(...qq) {
                    if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[165] + WO[166] + WO[167] + WO[168]))
                  }

                  function Yq(...Eq) {
                    return Eq[WO[0]] = WO[2], qq[WO[20]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
                  }

                  function lq(...Eq) {
                    return Eq[WO[0]] = WO[1], (Eq[WO[6]] & WO[87]) == WO[6] ? qq[WO[20]](Eq[WO[6]]) : (Eq[WO[20]] = "", (Eq[WO[6]] & WO[88]) == WO[6] ? Eq[WO[20]] = qq[WO[20]](Eq[WO[6]] >> WO[24] & WO[37] | WO[31]) : (Eq[WO[6]] & WO[89]) == WO[6] ? aO(gq(Eq[WO[6]]), Eq[WO[20]] = qq[WO[20]](Eq[WO[6]] >> WO[25] & WO[41] | WO[35]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])) : (Eq[WO[6]] & WO[90]) == WO[6] && aO(Eq[WO[20]] = qq[WO[20]](Eq[WO[6]] >> WO[43] & WO[42] | WO[39]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[25]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])), Eq[WO[20]] += qq[WO[20]](Eq[WO[6]] & WO[26] | WO[27]), Eq[WO[20]])
                  }

                  function Oq(...Eq) {
                    if (Eq[WO[0]] = WO[6], qq[WO[2]] >= qq[WO[12]]) throw Error(WO[32]);
                    if (aO(Eq[-WO[30]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[-WO[30]] & WO[31]) == WO[27]) return Eq[-WO[30]] & WO[26];
                    throw Error(WO[38])
                  }

                  function mq(...Eq) {
                    if (aO(Eq[WO[0]] = WO[6], Eq[-WO[33]] = WO[3], Eq[WO[1]] = WO[3], Eq[-WO[40]] = WO[3], Eq[WO[14]] = WO[3], Eq[WO[36]] = WO[3]), qq[WO[2]] > qq[WO[12]]) throw Error(WO[32]);
                    if (qq[WO[2]] == qq[WO[12]]) return WO[10];
                    if (aO(Eq[-WO[33]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[-WO[33]] & WO[27]) == WO[6]) return Eq[-WO[33]];
                    if ((Eq[-WO[33]] & WO[35]) == WO[31]) {
                      if (aO(Eq[WO[1]] = Oq(), Eq[WO[36]] = (Eq[-WO[33]] & WO[37]) << WO[24] | Eq[WO[1]]), Eq[WO[36]] >= WO[27]) return Eq[WO[36]];
                      throw Error(WO[38])
                    }
                    if ((Eq[-WO[33]] & WO[39]) == WO[35]) {
                      if (aO(Eq[WO[1]] = Oq(), Eq[-WO[40]] = Oq(), Eq[WO[36]] = (Eq[-WO[33]] & WO[41]) << WO[25] | Eq[WO[1]] << WO[24] | Eq[-WO[40]]), Eq[WO[36]] >= WO[94]) return gq(Eq[WO[36]]), Eq[WO[36]];
                      throw Error(WO[38])
                    }
                    if ((Eq[-WO[33]] & WO[95]) == WO[39] && (aO(Eq[WO[1]] = Oq(), Eq[-WO[40]] = Oq(), Eq[WO[14]] = Oq(), Eq[WO[36]] = (Eq[-WO[33]] & WO[42]) << WO[43] | Eq[WO[1]] << WO[25] | Eq[-WO[40]] << WO[24] | Eq[WO[14]]), Eq[WO[36]] >= WO[18] && Eq[WO[36]] <= WO[96])) return Eq[WO[36]];
                    throw Error(WO[97])
                  }
                  aO(qq[WO[0]] = WO[1], qq[WO[20]] = String.fromCharCode), aO(qq[WO[13]] = WO[3], qq[WO[12]] = WO[3], qq[WO[2]] = WO[3]), aO(qq[WO[6]].version = WO[99], qq[WO[6]].encode = function(...qq) {
                    for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = Eq(qq[WO[6]]), qq[-WO[28]] = qq[WO[1]].length, qq[WO[12]] = -WO[1], qq[WO[13]] = WO[3], qq[WO[29]] = ""); ++qq[WO[12]] < qq[-WO[28]];) aO(qq[WO[13]] = qq[WO[1]][qq[WO[12]]], qq[WO[29]] += lq(qq[WO[13]]));
                    return qq[WO[29]]
                  }, qq[WO[6]].decode = function(...gq) {
                    for (aO(gq[WO[0]] = WO[1], qq[WO[13]] = Eq(gq[WO[6]]), qq[WO[12]] = qq[WO[13]].length, qq[WO[2]] = WO[6], gq[WO[1]] = [], gq[WO[2]] = WO[3]);
                      (gq[WO[2]] = mq()) !== WO[10];) gq[WO[1]].push(gq[WO[2]]);
                    return function(...Eq) {
                      for (aO(Eq[WO[0]] = WO[1], Eq[WO[17]] = Eq[WO[6]].length, Eq[WO[16]] = -WO[1], Eq[WO[12]] = WO[3], Eq[WO[19]] = ""); ++Eq[WO[16]] < Eq[WO[17]];) Eq[WO[12]] = Eq[WO[6]][Eq[WO[16]]], Eq[WO[12]] > WO[81] && aO(Eq[WO[12]] -= WO[18], Eq[WO[19]] += qq[WO[20]](Eq[WO[12]] >>> WO[21] & WO[15] | WO[22]), Eq[WO[12]] = WO[23] | Eq[WO[12]] & WO[15]), Eq[WO[19]] += qq[WO[20]](Eq[WO[12]]);
                      return Eq[WO[19]]
                    }(gq[WO[1]])
                  })
                }(typeof exports === WO[100] + WO[101] ? this.utf8 = {} : exports)
              }
              return "xjW5Os" + WO[154] in NO && dq(), {
                [WO[44]]: Nq,
                [WO[45]]: Bq[Vq]
              }
            }
          }
          return WO[4]
        },
        Nq = (...qq) => (qq[WO[0]] = WO[1], Wq(qq[WO[6]]) !== WO[4]);
      let aq = WO[4],
        Vq = WO[4],
        dq = WO[4];
      const jq = (...qq) => {
        qq[WO[0]] = WO[1];
        try {
          return qq[WO[6]]()
        } catch {
          return WO[46]
        }
      };
      let Hq = WO[10];
      const oq = (...qq) => {
          if (qq[WO[0]] = WO[6], "RByrnK" + WO[118] in NO && function(...qq) {
              aO(qq[WO[0]] = WO[6], qq[WO[51]] = function(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[WO[20]] = WO[6], qq[WO[16]] = {}, qq[WO[48]] = WO[6], qq[WO[19]] = WO[6], qq[WO[50]] = WO[6], qq[WO[24]] = qq[WO[6]].length), qq[WO[47]] = WO[6]; qq[WO[47]] < qq[WO[24]]; qq[WO[47]]++) {
                  for (aO(qq[WO[16]] = {}, qq[WO[48]] = WO[6], qq[WO[19]] = WO[1]), qq[-WO[49]] = qq[WO[47]] + WO[1]; qq[-WO[49]] < qq[WO[24]]; qq[-WO[49]]++) qq[WO[6]][qq[WO[47]]].x !== qq[WO[6]][qq[-WO[49]]].x || qq[WO[6]][qq[WO[47]]].y !== qq[WO[6]][qq[-WO[49]]].y ? (qq[WO[6]][qq[WO[47]]].y === qq[WO[6]][qq[-WO[49]]].y ? qq[WO[50]] = Number.MAX_SAFE_INTEGER : qq[WO[50]] = (qq[WO[6]][qq[WO[47]]].x - qq[WO[6]][qq[-WO[49]]].x) / (qq[WO[6]][qq[WO[47]]].y - qq[WO[6]][qq[-WO[49]]].y), qq[WO[16]][qq[WO[50]]] || (qq[WO[16]][qq[WO[50]]] = WO[6]), aO(qq[WO[16]][qq[WO[50]]]++, qq[WO[48]] = Math.max(qq[WO[48]], qq[WO[16]][qq[WO[50]]]))) : qq[WO[19]]++;
                  aO(qq[WO[48]] += qq[WO[19]], qq[WO[20]] = Math.max(qq[WO[20]], qq[WO[48]]))
                }
                return qq[WO[20]]
              }, console.log(qq[WO[51]]))
            }(), !Hq && (WO[6], tY[WO[189]])()) {
            function Eq(...qq) {
              qq[WO[0]] = WO[6];
              const Eq = require("path"),
                {
                  version: gq
                } = require("../../package"),
                {
                  version: Yq
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: lq
                } = require("@redacted/components/package"),
                {
                  sdkVersion: Oq
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Eq.resolve(__dirname, "../redacted.js")
            }
            "c_kGhoj" in NO && Eq(), Hq = WO[46]
          }
        },
        Pq = (...qq) => {
          qq[WO[0]] = WO[1];
          try {
            return qq[WO[6]]()
          } catch {
            return WO[3]
          }
        },
        Qq = (...qq) => {
          qq[WO[0]] = WO[1], "LZWllK" in NO && function(...qq) {
            function Eq(...qq) {
              qq[WO[0]] = WO[1];
              const Eq = {};
              for (let gq of qq[WO[6]].replace(/[^w]/g, "").toLowerCase()) Eq[gq] = Eq[gq] + WO[1] || WO[1];
              return Eq
            }

            function gq(...qq) {
              qq[WO[0]] = WO[2];
              const Eq = buildCharMap(qq[WO[6]]),
                gq = buildCharMap(qq[WO[1]]);
              for (let Yq in Eq)
                if (Eq[Yq] !== gq[Yq]) return WO[10];
              return Object.keys(Eq).length !== Object.keys(gq).length ? WO[10] : WO[46]
            }

            function Yq(...qq) {
              qq[WO[0]] = WO[1];
              return lq(qq[WO[6]]) !== 1 / 0
            }

            function lq(...qq) {
              if (qq[WO[0]] = WO[1], !qq[WO[6]]) return -WO[1];
              const Eq = lq(qq[WO[6]].left),
                gq = lq(qq[WO[6]].right),
                Yq = Math.abs(Eq - gq);
              if (Eq === 1 / 0 || gq === 1 / 0 || Yq > WO[1]) return 1 / 0;
              return Math.max(Eq, gq) + WO[1]
            }
            qq[WO[0]] = WO[6], window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: Eq,
              isAnagrams: gq,
              isBalanced: Yq,
              getHeightBalanced: lq
            }
          }();
          try {
            return qq[WO[6]](), WO[46]
          } catch {
            return WO[10]
          }
        },
        yq = (WO[6], tY[WO[7]])("a29qbzYzb25i"),
        tq = (WO[6], tY[WO[52]])(WO[4]);
      let rq = WO[4],
        vq = WO[10],
        hq = WO[10];
      const nq = (WO[6], tY[WO[52]])(WO[4]);
      let bq = WO[6];
      const iq = (WO[6], tY[WO[52]])(WO[4]);
      let Zq = WO[6];
      const fq = (WO[6], tY[WO[52]])(WO[4]);
      let Mq = WO[10],
        Tq = WO[10];
      const zq = (...Eq) => {
          if (Eq[WO[0]] = WO[2], "Yxhwro" in NO && function(...qq) {
              aO(qq[WO[0]] = WO[6], qq[WO[54]] = function(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[WO[20]] = qq[WO[6]].length, qq[WO[2]] = [], qq[WO[5]] = WO[6], qq[WO[13]] = WO[6], qq[WO[6]].sort(((qq, Eq) => qq - Eq))), qq[-WO[53]] = WO[6]; qq[-WO[53]] < qq[WO[20]]; qq[-WO[53]]++)
                  if (!(qq[-WO[53]] > WO[6] && qq[WO[6]][qq[-WO[53]]] === qq[WO[6]][qq[-WO[53]] - WO[1]]))
                    for (aO(qq[WO[5]] = qq[-WO[53]] + WO[1], qq[WO[13]] = qq[WO[20]] - WO[1]); qq[WO[5]] < qq[WO[13]];)
                      if (qq[WO[6]][qq[-WO[53]]] + qq[WO[6]][qq[WO[5]]] + qq[WO[6]][qq[WO[13]]] < WO[6]) qq[WO[5]]++;
                      else if (qq[WO[6]][qq[-WO[53]]] + qq[WO[6]][qq[WO[5]]] + qq[WO[6]][qq[WO[13]]] > WO[6]) qq[WO[13]]--;
                else {
                  for (qq[WO[2]].push([qq[WO[6]][qq[-WO[53]]], qq[WO[6]][qq[WO[5]]], qq[WO[6]][qq[WO[13]]]]); qq[WO[5]] < qq[WO[13]] && qq[WO[6]][qq[WO[5]]] === qq[WO[6]][qq[WO[5]] + WO[1]];) qq[WO[5]]++;
                  for (; qq[WO[5]] < qq[WO[13]] && qq[WO[6]][qq[WO[13]]] === qq[WO[6]][qq[WO[13]] - WO[1]];) qq[WO[13]]--;
                  aO(qq[WO[5]]++, qq[WO[13]]--)
                }
                return qq[WO[2]]
              }, console.log(qq[WO[54]]))
            }(), Eq[WO[6]] === qq) {
            function lq(...qq) {
              aO(qq[WO[0]] = WO[6], qq[-WO[58]] = function(...Eq) {
                return Eq[WO[0]] = WO[2], qq[WO[1]]({}, Eq[WO[6]], Eq[WO[1]])
              }, qq[WO[1]] = function(...Eq) {
                if (aO(Eq[WO[0]] = WO[5], Eq[WO[5]] = {}), Eq[WO[6]][Eq[WO[1]] + Eq[WO[2]]] !== WO[3]) return Eq[WO[6]][Eq[WO[1]] + Eq[WO[2]]];
                if (Eq[WO[1]] === Eq[WO[2]]) return WO[46];
                for (Eq[-WO[55]] = WO[6]; Eq[-WO[55]] < Eq[WO[1]].length; Eq[-WO[55]]++) Eq[WO[5]][Eq[WO[1]][Eq[-WO[55]]]] === WO[3] && (Eq[WO[5]][Eq[WO[1]][Eq[-WO[55]]]] = WO[6]), Eq[WO[5]][Eq[WO[2]][Eq[-WO[55]]]] === WO[3] && (Eq[WO[5]][Eq[WO[2]][Eq[-WO[55]]]] = WO[6]), aO(Eq[WO[5]][Eq[WO[1]][Eq[-WO[55]]]]++, Eq[WO[5]][Eq[WO[2]][Eq[-WO[55]]]]--);
                for (Eq[WO[56]] in Eq[WO[5]])
                  if (Eq[WO[5]][Eq[WO[56]]] !== WO[6]) return Eq[WO[6]][Eq[WO[1]] + Eq[WO[2]]] = WO[10], WO[10];
                for (Eq[WO[57]] = WO[1]; Eq[WO[57]] < Eq[WO[1]].length; Eq[WO[57]]++)
                  if (qq[WO[1]](Eq[WO[6]], Eq[WO[1]].substr(WO[6], Eq[WO[57]]), Eq[WO[2]].substr(WO[6], Eq[WO[57]])) && qq[WO[1]](Eq[WO[6]], Eq[WO[1]].substr(Eq[WO[57]]), Eq[WO[2]].substr(Eq[WO[57]])) || qq[WO[1]](Eq[WO[6]], Eq[WO[1]].substr(WO[6], Eq[WO[57]]), Eq[WO[2]].substr(Eq[WO[2]].length - Eq[WO[57]])) && qq[WO[1]](Eq[WO[6]], Eq[WO[1]].substr(Eq[WO[57]]), Eq[WO[2]].substr(WO[6], Eq[WO[2]].length - Eq[WO[57]]))) return Eq[WO[6]][Eq[WO[1]] + Eq[WO[2]]] = WO[46], WO[46];
                return Eq[WO[6]][Eq[WO[1]] + Eq[WO[2]]] = WO[10], WO[10]
              }, console.log(qq[-WO[58]]))
            }
            return "LJVq2T" in NO && lq(), void(rq === WO[4] ? rq = typeof Eq[WO[1]] === WO[185] ? Eq[WO[1]] : -WO[1] : vq = WO[46])
          }
          const gq = tq[Eq[WO[6]]];
          if (!Eq[WO[1]]) {
            if (gq) {
              function Oq(...qq) {
                aO(qq[WO[0]] = WO[6], qq[WO[20]] = function(...qq) {
                  if (aO(qq[WO[0]] = WO[1], qq[WO[1]] = qq[WO[6]].length), qq[WO[1]] < WO[2]) return WO[6];
                  if (aO(qq[WO[16]] = Math.max(...qq[WO[6]]), qq[WO[5]] = Math.min(...qq[WO[6]])), qq[WO[16]] === qq[WO[5]]) return WO[6];
                  for (aO(qq[WO[62]] = Array(qq[WO[1]] - WO[1]).fill(Number.MAX_SAFE_INTEGER), qq[-WO[63]] = Array(qq[WO[1]] - WO[1]).fill(Number.MIN_SAFE_INTEGER), qq[-WO[61]] = Math.ceil((qq[WO[16]] - qq[WO[5]]) / (qq[WO[1]] - WO[1])), qq[WO[60]] = WO[6]), qq[WO[59]] = WO[6]; qq[WO[59]] < qq[WO[1]]; qq[WO[59]]++) qq[WO[6]][qq[WO[59]]] !== qq[WO[5]] && qq[WO[6]][qq[WO[59]]] !== qq[WO[16]] && aO(qq[WO[60]] = Math.floor((qq[WO[6]][qq[WO[59]]] - qq[WO[5]]) / qq[-WO[61]]), qq[WO[62]][qq[WO[60]]] = Math.min(qq[WO[62]][qq[WO[60]]], qq[WO[6]][qq[WO[59]]]), qq[-WO[63]][qq[WO[60]]] = Math.max(qq[-WO[63]][qq[WO[60]]], qq[WO[6]][qq[WO[59]]]));
                  for (aO(qq[WO[65]] = Number.MIN_SAFE_INTEGER, qq[-WO[66]] = qq[WO[5]]), qq[WO[64]] = WO[6]; qq[WO[64]] < qq[WO[1]] - WO[1]; qq[WO[64]]++) qq[WO[62]][qq[WO[64]]] === Number.MAX_SAFE_INTEGER && qq[-WO[63]][qq[WO[64]]] === Number.MIN_SAFE_INTEGER || aO(qq[WO[65]] = Math.max(qq[WO[65]], qq[WO[62]][qq[WO[64]]] - qq[-WO[66]]), qq[-WO[66]] = qq[-WO[63]][qq[WO[64]]]);
                  return qq[WO[65]] = Math.max(qq[WO[65]], qq[WO[16]] - qq[-WO[66]]), qq[WO[65]]
                }, console.log(qq[WO[20]]))
              }
              "EA8twg3" in NO && Oq(), hq = WO[46]
            }
            return
          }
          if (Eq[WO[6]] !== yq) return void(tq[Eq[WO[6]]] = Eq[WO[1]]);
          tq[Eq[WO[6]]] = WO[46];
          const Yq = typeof Eq[WO[1]] === WO[67] ? Eq[WO[1]] : "" + Eq[WO[1]];
          if (!fq[Yq])
            if ((WO[6], Fl.l)(Yq)) Tq = WO[46];
            else if ((WO[6], Fl[WO[116]])(Yq)) {
            function mq(...qq) {
              qq[WO[0]] = WO[6]
            }
            "TzO3Xa" in NO && mq(), bq < 8 ? aO(fq[Yq] = WO[46], nq[bq++] = Yq, Mq ||= (WO[6], Fl[WO[64]])(Yq)) : !Mq && (WO[6], Fl[WO[64]])(Yq) && aO(fq[Yq] = WO[46], nq[8 - WO[1]] = Yq, Mq = WO[46])
          } else {
            function xq(...qq) {
              function Eq() {}
              qq[WO[0]] = WO[6], aO(qq[WO[70]] = function(...qq) {
                for (aO(qq[WO[0]] = WO[2], qq[WO[2]] = WO[6], qq[-WO[69]] = WO[6], qq[WO[12]] = new Eq(WO[6]), qq[WO[50]] = qq[WO[12]], qq[WO[14]] = qq[WO[6]], qq[WO[68]] = qq[WO[1]]); qq[WO[14]] !== WO[4] || qq[WO[68]] !== WO[4];) aO(qq[-WO[69]] = (qq[WO[14]] ? qq[WO[14]].val : WO[6]) + (qq[WO[68]] ? qq[WO[68]].val : WO[6]) + qq[WO[2]], qq[WO[2]] = Math.floor(qq[-WO[69]] / WO[21]), qq[WO[50]].next = new Eq(qq[-WO[69]] % WO[21]), qq[WO[50]] = qq[WO[50]].next, qq[WO[14]] = qq[WO[14]] ? qq[WO[14]].next : WO[4], qq[WO[68]] = qq[WO[68]] ? qq[WO[68]].next : WO[4]);
                return qq[WO[2]] && (qq[WO[50]].next = new Eq(qq[WO[2]])), qq[WO[12]].next
              }, console.log(qq[WO[70]]))
            }
            "QqyD9g0" in NO && xq(), Zq < 4 && aO(fq[Yq] = WO[46], iq[Zq++] = Yq)
          }
        },
        Sq = (WO[6], sl[WO[129]])(qq),
        pq = Sq ? Sq.replaced : (() => {
          try {
            return lq[qq]
          } catch {
            return WO[3]
          }
        })();
      if (Qq((() => {
          lq[qq] = zq
        })), typeof pq === WO[71] + WO[72]) {
        const qq = pq;
        Qq((() => {
          qq(zq)
        }))
      }
      if (Sq) {
        const Eq = Sq.reports;
        Qq(((...gq) => {
          gq[WO[0]] = WO[6], "Lia2_0" + WO[182] in NO && function(...qq) {
            qq[WO[0]] = WO[6]
          }();
          for (const Yq in Eq)(WO[6], tY[WO[75]])(tY[WO[142]], Eq, [Yq]) && Yq !== qq && zq(Yq, Eq[Yq])
        }))
      }
      const Gq = Sq ? WO[2] : WO[1];
      let Lq = WO[10];
      const Jq = (...Eq) => (Eq[WO[0]] = WO[6], vq ? WO[46] : (aO(Eq[WO[12]] = WO[10], Lq = !Qq((() => {
          Eq[WO[12]] = lq[qq] !== zq
        }))), Eq[WO[12]])),
        kq = jq(((...Eq) => {
          Eq[WO[0]] = WO[6];
          const gq = (WO[6], tY.P)(lq, qq);
          return (gq === WO[4] || gq === void WO[6] ? void WO[6] : gq.configurable) !== WO[10] || typeof gq[WO[187]] !== WO[71] + WO[72] || rq !== Gq
        })),
        Rq = {},
        Uq = () => {
          try {
            return navigator[WO[181] + "tSub"]
          } catch {
            return Rq
          }
        },
        Fq = Uq(),
        sq = gq,
        Xq = sq === WO[4] ? ((...qq) => {
          qq[WO[0]] = WO[6];
          const Eq = WO[149];
          aO(qq[WO[77]] = WO[10], qq[-WO[76]] = Eq - WO[1]);
          const gq = TextDecoder[WO[102] + WO[103]][WO[104]],
            Yq = function() {
              qq[-WO[76]]++, qq[-WO[76]] === Eq && (YO((() => Nq(WO[10]))) && (qq[WO[77]] = WO[46]), qq[-WO[76]] = WO[6]);
              for (var Yq = arguments[WO[0]], lq = new Array(Yq), Oq = WO[6]; Oq < Yq; Oq++) {
                function mq() {
                  ! function(...qq) {
                    function Eq(...qq) {
                      for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = [], qq[WO[78]] = WO[6], qq[WO[19]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[78]] < qq[WO[19]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[78]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq[WO[78]] < qq[WO[19]] ? (qq[WO[14]] = qq[WO[6]].charCodeAt(qq[WO[78]]++), (qq[WO[14]] & WO[80]) == WO[23] ? qq[WO[1]].push(((qq[WO[13]] & WO[15]) << WO[21]) + (qq[WO[14]] & WO[15]) + WO[18]) : (qq[WO[1]].push(qq[WO[13]]), qq[WO[78]]--)) : qq[WO[1]].push(qq[WO[13]]));
                      return qq[WO[1]]
                    }

                    function gq(...qq) {
                      if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[106] + WO[107] + WO[108] + WO[14]))
                    }

                    function Yq(...Eq) {
                      return Eq[WO[0]] = WO[2], qq[WO[1]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
                    }

                    function lq(...Eq) {
                      return Eq[WO[0]] = WO[1], (Eq[WO[6]] & WO[87]) == WO[6] ? qq[WO[1]](Eq[WO[6]]) : (Eq[WO[20]] = "", (Eq[WO[6]] & WO[88]) == WO[6] ? Eq[WO[20]] = qq[WO[1]](Eq[WO[6]] >> WO[24] & WO[37] | WO[31]) : (Eq[WO[6]] & WO[89]) == WO[6] ? aO(gq(Eq[WO[6]]), Eq[WO[20]] = qq[WO[1]](Eq[WO[6]] >> WO[25] & WO[41] | WO[35]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])) : (Eq[WO[6]] & WO[90]) == WO[6] && aO(Eq[WO[20]] = qq[WO[1]](Eq[WO[6]] >> WO[43] & WO[42] | WO[39]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[25]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])), Eq[WO[20]] += qq[WO[1]](Eq[WO[6]] & WO[26] | WO[27]), Eq[WO[20]])
                    }

                    function Oq(...Eq) {
                      if (Eq[WO[0]] = WO[6], qq[WO[2]] >= qq[WO[12]]) throw Error(WO[32]);
                      if (aO(Eq[-WO[93]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[-WO[93]] & WO[31]) == WO[27]) return Eq[-WO[93]] & WO[26];
                      throw Error(WO[38])
                    }

                    function mq(...Eq) {
                      if (aO(Eq[WO[0]] = WO[6], Eq[WO[20]] = WO[3], Eq[WO[1]] = WO[3], Eq[WO[2]] = WO[3], Eq[-WO[50]] = WO[3], Eq[-WO[62]] = WO[3]), qq[WO[2]] > qq[WO[12]]) throw Error(WO[32]);
                      if (qq[WO[2]] == qq[WO[12]]) return WO[10];
                      if (aO(Eq[WO[20]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[WO[20]] & WO[27]) == WO[6]) return Eq[WO[20]];
                      if ((Eq[WO[20]] & WO[35]) == WO[31]) {
                        if (aO(Eq[WO[1]] = Oq(), Eq[-WO[62]] = (Eq[WO[20]] & WO[37]) << WO[24] | Eq[WO[1]]), Eq[-WO[62]] >= WO[27]) return Eq[-WO[62]];
                        throw Error(WO[38])
                      }
                      if ((Eq[WO[20]] & WO[39]) == WO[35]) {
                        if (aO(Eq[WO[1]] = Oq(), Eq[WO[2]] = Oq(), Eq[-WO[62]] = (Eq[WO[20]] & WO[41]) << WO[25] | Eq[WO[1]] << WO[24] | Eq[WO[2]]), Eq[-WO[62]] >= WO[94]) return gq(Eq[-WO[62]]), Eq[-WO[62]];
                        throw Error(WO[38])
                      }
                      if ((Eq[WO[20]] & WO[95]) == WO[39] && (aO(Eq[WO[1]] = Oq(), Eq[WO[2]] = Oq(), Eq[-WO[50]] = Oq(), Eq[-WO[62]] = (Eq[WO[20]] & WO[42]) << WO[43] | Eq[WO[1]] << WO[25] | Eq[WO[2]] << WO[24] | Eq[-WO[50]]), Eq[-WO[62]] >= WO[18] && Eq[-WO[62]] <= WO[96])) return Eq[-WO[62]];
                      throw Error(WO[97])
                    }
                    aO(qq[WO[0]] = WO[1], qq[WO[1]] = String.fromCharCode), aO(qq[WO[13]] = WO[3], qq[WO[12]] = WO[3], qq[WO[2]] = WO[3]), aO(qq[WO[6]].version = WO[99], qq[WO[6]].encode = function(...qq) {
                      for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = Eq(qq[WO[6]]), qq[WO[16]] = qq[WO[1]].length, qq[WO[91]] = -WO[1], qq[-WO[92]] = WO[3], qq[WO[14]] = ""); ++qq[WO[91]] < qq[WO[16]];) aO(qq[-WO[92]] = qq[WO[1]][qq[WO[91]]], qq[WO[14]] += lq(qq[-WO[92]]));
                      return qq[WO[14]]
                    }, qq[WO[6]].decode = function(...gq) {
                      for (aO(gq[WO[0]] = WO[1], qq[WO[13]] = Eq(gq[WO[6]]), qq[WO[12]] = qq[WO[13]].length, qq[WO[2]] = WO[6], gq[WO[98]] = [], gq[WO[16]] = WO[3]);
                        (gq[WO[16]] = mq()) !== WO[10];) gq[WO[98]].push(gq[WO[16]]);
                      return function(...Eq) {
                        for (aO(Eq[WO[0]] = WO[1], Eq[WO[20]] = Eq[WO[6]].length, Eq[WO[16]] = -WO[1], Eq[WO[5]] = WO[3], Eq[WO[13]] = ""); ++Eq[WO[16]] < Eq[WO[20]];) Eq[WO[5]] = Eq[WO[6]][Eq[WO[16]]], Eq[WO[5]] > WO[81] && aO(Eq[WO[5]] -= WO[18], Eq[WO[13]] += qq[WO[1]](Eq[WO[5]] >>> WO[21] & WO[15] | WO[22]), Eq[WO[5]] = WO[23] | Eq[WO[5]] & WO[15]), Eq[WO[13]] += qq[WO[1]](Eq[WO[5]]);
                        return Eq[WO[13]]
                      }(gq[WO[98]])
                    })
                  }(typeof exports === WO[100] + WO[101] ? this.utf8 = {} : exports)
                }
                "NZYqON" in NO && mq(), lq[Oq] = arguments[Oq]
              }
              return (WO[6], tY[WO[75]])(gq, this, lq)
            };
          return Qq((() => {
            TextDecoder[WO[102] + WO[103]][WO[104]] = Yq
          })), () => qq[WO[77]] ? WO[2] : OO(((...qq) => (qq[WO[0]] = WO[6], "oTf6Kx" + WO[64] in NO && function() {
            ! function(...qq) {
              function Eq(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[-WO[93]] = [], qq[WO[2]] = WO[6], qq[WO[12]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[2]] < qq[WO[12]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq[WO[2]] < qq[WO[12]] ? (qq[WO[14]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), (qq[WO[14]] & WO[80]) == WO[23] ? qq[-WO[93]].push(((qq[WO[13]] & WO[15]) << WO[21]) + (qq[WO[14]] & WO[15]) + WO[18]) : (qq[-WO[93]].push(qq[WO[13]]), qq[WO[2]]--)) : qq[-WO[93]].push(qq[WO[13]]));
                return qq[-WO[93]]
              }

              function gq(...Eq) {
                for (aO(Eq[WO[0]] = WO[1], Eq[WO[1]] = Eq[WO[6]].length, Eq[WO[2]] = -WO[1], Eq[WO[105]] = WO[3], Eq[WO[13]] = ""); ++Eq[WO[2]] < Eq[WO[1]];) Eq[WO[105]] = Eq[WO[6]][Eq[WO[2]]], Eq[WO[105]] > WO[81] && aO(Eq[WO[105]] -= WO[18], Eq[WO[13]] += qq[WO[20]](Eq[WO[105]] >>> WO[21] & WO[15] | WO[22]), Eq[WO[105]] = WO[23] | Eq[WO[105]] & WO[15]), Eq[WO[13]] += qq[WO[20]](Eq[WO[105]]);
                return Eq[WO[13]]
              }

              function Yq(...qq) {
                if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[106] + WO[107] + WO[108] + WO[14]))
              }

              function lq(...Eq) {
                return Eq[WO[0]] = WO[2], qq[WO[20]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
              }

              function Oq(...Eq) {
                return Eq[WO[0]] = WO[1], (Eq[WO[6]] & WO[87]) == WO[6] ? qq[WO[20]](Eq[WO[6]]) : (Eq[WO[109]] = "", (Eq[WO[6]] & WO[88]) == WO[6] ? Eq[WO[109]] = qq[WO[20]](Eq[WO[6]] >> WO[24] & WO[37] | WO[31]) : (Eq[WO[6]] & WO[89]) == WO[6] ? aO(Yq(Eq[WO[6]]), Eq[WO[109]] = qq[WO[20]](Eq[WO[6]] >> WO[25] & WO[41] | WO[35]), Eq[WO[109]] += lq(Eq[WO[6]], WO[24])) : (Eq[WO[6]] & WO[90]) == WO[6] && aO(Eq[WO[109]] = qq[WO[20]](Eq[WO[6]] >> WO[43] & WO[42] | WO[39]), Eq[WO[109]] += lq(Eq[WO[6]], WO[25]), Eq[WO[109]] += lq(Eq[WO[6]], WO[24])), Eq[WO[109]] += qq[WO[20]](Eq[WO[6]] & WO[26] | WO[27]), Eq[WO[109]])
              }

              function mq(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[WO[20]] = Eq(qq[WO[6]]), qq[WO[2]] = qq[WO[20]].length, qq[-WO[110]] = -WO[1], qq[-WO[53]] = WO[3], qq[WO[14]] = ""); ++qq[-WO[110]] < qq[WO[2]];) aO(qq[-WO[53]] = qq[WO[20]][qq[-WO[110]]], qq[WO[14]] += Oq(qq[-WO[53]]));
                return qq[WO[14]]
              }

              function xq(...Eq) {
                if (Eq[WO[0]] = WO[6], qq[WO[2]] >= qq[-WO[111]]) throw Error(WO[32]);
                if (aO(Eq[WO[20]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[WO[20]] & WO[31]) == WO[27]) return Eq[WO[20]] & WO[26];
                throw Error(WO[38])
              }

              function Aq(...Eq) {
                if (aO(Eq[WO[0]] = WO[6], Eq[WO[20]] = WO[3], Eq[-WO[112]] = WO[3], Eq[WO[12]] = WO[3], Eq[-WO[113]] = WO[3], Eq[WO[14]] = WO[3]), qq[WO[2]] > qq[-WO[111]]) throw Error(WO[32]);
                if (qq[WO[2]] == qq[-WO[111]]) return WO[10];
                if (aO(Eq[WO[20]] = qq[WO[13]][qq[WO[2]]] & WO[34], qq[WO[2]]++), (Eq[WO[20]] & WO[27]) == WO[6]) return Eq[WO[20]];
                if ((Eq[WO[20]] & WO[35]) == WO[31]) {
                  if (aO(Eq[-WO[112]] = xq(), Eq[WO[14]] = (Eq[WO[20]] & WO[37]) << WO[24] | Eq[-WO[112]]), Eq[WO[14]] >= WO[27]) return Eq[WO[14]];
                  throw Error(WO[38])
                }
                if ((Eq[WO[20]] & WO[39]) == WO[35]) {
                  if (aO(Eq[-WO[112]] = xq(), Eq[WO[12]] = xq(), Eq[WO[14]] = (Eq[WO[20]] & WO[41]) << WO[25] | Eq[-WO[112]] << WO[24] | Eq[WO[12]]), Eq[WO[14]] >= WO[94]) return Yq(Eq[WO[14]]), Eq[WO[14]];
                  throw Error(WO[38])
                }
                if ((Eq[WO[20]] & WO[95]) == WO[39] && (aO(Eq[-WO[112]] = xq(), Eq[WO[12]] = xq(), Eq[-WO[113]] = xq(), Eq[WO[14]] = (Eq[WO[20]] & WO[42]) << WO[43] | Eq[-WO[112]] << WO[25] | Eq[WO[12]] << WO[24] | Eq[-WO[113]]), Eq[WO[14]] >= WO[18] && Eq[WO[14]] <= WO[96])) return Eq[WO[14]];
                throw Error(WO[97])
              }

              function cq(...Yq) {
                for (aO(Yq[WO[0]] = WO[1], qq[WO[13]] = Eq(Yq[WO[6]]), qq[-WO[111]] = qq[WO[13]].length, qq[WO[2]] = WO[6], Yq[WO[114]] = [], Yq[WO[16]] = WO[3]);
                  (Yq[WO[16]] = Aq()) !== WO[10];) Yq[WO[114]].push(Yq[WO[16]]);
                return gq(Yq[WO[114]])
              }
              aO(qq[WO[0]] = WO[1], qq[WO[20]] = String.fromCharCode), aO(qq[WO[13]] = WO[3], qq[-WO[111]] = WO[3], qq[WO[2]] = WO[3]), aO(qq[WO[6]].version = WO[99], qq[WO[6]].encode = mq, qq[WO[6]].decode = cq)
            }(typeof exports === WO[100] + WO[101] ? this.utf8 = {} : exports)
          }(), TextDecoder[WO[102] + WO[103]][WO[104]] !== Yq ? WO[24] : WO[6])))
        })() : () => OO((() => sq[WO[179] + WO[180]]())),
        wq = (WO[6], tE[WO[14]])(),
        Kq = (WO[6], tY[WO[52]])(WO[4]),
        Cq = (WO[6], tY[WO[52]])(WO[4]);
      let Iq = WO[6],
        eq = WO[6],
        Dq = WO[6];
      const qE = (WO[6], tY[WO[52]])(WO[4]),
        EE = (WO[6], tY[WO[52]])(WO[4]);
      let gE = WO[4],
        YE = (WO[6], tY[WO[52]])(WO[4]);
      const lE = (...qq) => {
          aO(qq[WO[0]] = WO[2], Kq[Iq] = qq[WO[6]], Cq[Iq] = qq[WO[1]], Iq++)
        },
        OE = (...qq) => (aO(qq[WO[0]] = WO[1], qq[WO[20]] = WO[3]), (qq[WO[20]] = (Cq[qq[WO[6]]] ? EE : qE)[Kq[qq[WO[6]]]]) !== WO[4] && qq[WO[20]] !== void WO[6] ? qq[WO[20]] : -WO[1]),
        mE = (WO[6], tY[WO[7]])("d2lvNjQz"),
        xE = (WO[6], tY[WO[7]])("amtsa2plZndu"),
        AE = [
          [(WO[6], tY[WO[7]])("aW9qZndlODNq"), "2"],
          [(WO[6], tY[WO[7]])("a3Bq"), "4"],
          [(WO[6], tY[WO[7]])("dXJocmZm"), "5"]
        ],
        cE = [
          [(WO[6], tY[WO[7]])(WO[117] + WO[115]), WO[116]],
          [(WO[6], tY[WO[7]])(WO[117] + "w="), "o"]
        ],
        BE = (WO[6], tY[WO[7]])("eTR5bnM="),
        WE = (WO[6], tY[WO[7]])("aHRleWpldA=="),
        NE = (WO[6], tY[WO[7]])("c2RmbGpneGxmY2pr"),
        aE = [
          [(WO[6], tY[WO[7]])("a3NhZmR1"), WO[140]],
          [(WO[6], tY[WO[7]])("ZGZnYWFzZGFz"), WO[118]],
          [NE, WO[7]],
          [(WO[6], tY[WO[7]])("bGFzZWRraGFz"), "u"],
          [(WO[6], tY[WO[7]])("cW16ZjhrM24="), WO[20]]
        ],
        VE = [
          [BE, WO[188]],
          [WE, WO[52]],
          [(WO[6], tY[WO[7]])("bmI3ZnEy"), WO[16]]
        ],
        dE = (WO[6], tY[WO[7]])("bGtxM20="),
        jE = (WO[6], tY[WO[7]])("bWtxN3" + WO[115]),
        HE = ["mk:tw", "mk:jf"],
        oE = ((...qq) => {
          qq[WO[0]] = WO[6], "RjG34n" + WO[116] in NO && function(...qq) {
            aO(qq[WO[0]] = WO[6], qq[-WO[138]] = function(...qq) {
              function Eq(...qq) {
                return qq[WO[0]] = WO[1], xq(Oq(uq(qq[WO[6]])))
              }

              function gq(...qq) {
                return qq[WO[0]] = WO[2], xq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])))
              }

              function Yq(...qq) {
                return qq[WO[0]] = WO[2], Aq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])))
              }

              function lq(...qq) {
                return qq[WO[0]] = WO[5], cq(mq(uq(qq[WO[6]]), uq(qq[WO[1]])), qq[WO[2]])
              }

              function Oq(...qq) {
                return qq[WO[0]] = WO[1], Wq(Qq(Bq(qq[WO[6]]), qq[WO[6]].length * WO[120]))
              }

              function mq(...qq) {
                aO(qq[WO[0]] = WO[2], qq[-WO[119]] = Bq(qq[WO[6]])), qq[-WO[119]].length > WO[86] && (qq[-WO[119]] = Qq(qq[-WO[119]], qq[WO[6]].length * WO[120]));
                var Eq = Array(WO[86]),
                  gq = Array(WO[86]);
                for (qq[WO[16]] = WO[6]; qq[WO[16]] < WO[86]; qq[WO[16]]++) aO(Eq[qq[WO[16]]] = 909522486 ^ qq[-WO[119]][qq[WO[16]]], gq[qq[WO[16]]] = 1549556828 ^ qq[-WO[119]][qq[WO[16]]]);
                return qq[-WO[121]] = Qq(Eq.concat(Bq(qq[WO[1]])), WO[124] + qq[WO[1]].length * WO[120]), Wq(Qq(gq.concat(qq[-WO[121]]), function(...qq) {
                  if (qq[WO[0]] = WO[5], qq[WO[6]] === WO[122] + WO[123]) return qq[WO[1]] + qq[WO[2]]
                }(WO[122] + WO[123], WO[124], 256)))
              }

              function xq(...Eq) {
                Eq[WO[0]] = WO[1];
                try {
                  qq[WO[125]]
                } catch (gq) {
                  qq[WO[125]] = WO[6]
                }
                for (aO(Eq[-WO[128]] = qq[WO[125]] ? WO[126] + "6789ABCDEF" : WO[126] + "6789abcdef", Eq[WO[16]] = "", Eq[-WO[127]] = WO[3]), Eq[-WO[70]] = WO[6]; Eq[-WO[70]] < Eq[WO[6]].length; Eq[-WO[70]]++) aO(Eq[-WO[127]] = Eq[WO[6]].charCodeAt(Eq[-WO[70]]), Eq[WO[16]] += Eq[-WO[128]].charAt(Eq[-WO[127]] >>> WO[19] & WO[41]) + Eq[-WO[128]].charAt(Eq[-WO[127]] & WO[41]));
                return Eq[WO[16]]
              }

              function Aq(...Eq) {
                Eq[WO[0]] = WO[1];
                try {
                  qq[WO[1]]
                } catch (gq) {
                  qq[WO[1]] = ""
                }
                for (aO(Eq[WO[20]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + WO[153], Eq[-WO[130]] = "", Eq[WO[24]] = Eq[WO[6]].length), Eq[WO[19]] = WO[6]; Eq[WO[19]] < Eq[WO[24]]; Eq[WO[19]] += WO[5])
                  for (Eq[WO[37]] = Eq[WO[6]].charCodeAt(Eq[WO[19]]) << WO[86] | (Eq[WO[19]] + WO[1] < Eq[WO[24]] ? Eq[WO[6]].charCodeAt(Eq[WO[19]] + WO[1]) << WO[120] : WO[6]) | (Eq[WO[19]] + WO[2] < Eq[WO[24]] ? Eq[WO[6]].charCodeAt(Eq[WO[19]] + WO[2]) : WO[6]), Eq[WO[129]] = WO[6]; Eq[WO[129]] < WO[19]; Eq[WO[129]]++) Eq[WO[19]] * WO[120] + Eq[WO[129]] * WO[24] > Eq[WO[6]].length * WO[120] ? Eq[-WO[130]] += qq[WO[1]] : Eq[-WO[130]] += Eq[WO[20]].charAt(Eq[WO[37]] >>> WO[24] * (WO[5] - Eq[WO[129]]) & WO[26]);
                return Eq[-WO[130]]
              }

              function cq(...qq) {
                var Eq, gq, Yq, lq;
                for (aO(qq[WO[0]] = WO[2], qq[WO[2]] = qq[WO[1]].length, qq[WO[5]] = Array()), qq[WO[12]] = Array(Math.ceil(qq[WO[6]].length / WO[2])), Eq = WO[6]; Eq < qq[WO[12]].length; Eq++) qq[WO[12]][Eq] = qq[WO[6]].charCodeAt(Eq * WO[2]) << WO[120] | qq[WO[6]].charCodeAt(Eq * WO[2] + WO[1]);
                for (; qq[WO[12]].length > WO[6];) {
                  for (aO(lq = Array(), Yq = WO[6]), Eq = WO[6]; Eq < qq[WO[12]].length; Eq++) aO(Yq = (Yq << WO[86]) + qq[WO[12]][Eq], gq = Math.floor(Yq / qq[WO[2]]), Yq -= gq * qq[WO[2]]), (lq.length > WO[6] || gq > WO[6]) && (lq[lq.length] = gq);
                  aO(qq[WO[5]][qq[WO[5]].length] = Yq, qq[WO[12]] = lq)
                }
                for (qq[WO[50]] = "", Eq = qq[WO[5]].length - WO[1]; Eq >= WO[6]; Eq--) qq[WO[50]] += qq[WO[1]].charAt(qq[WO[5]][Eq]);
                for (qq[WO[24]] = Math.ceil(qq[WO[6]].length * WO[120] / (Math.log(qq[WO[1]].length) / Math.log(WO[2]))), Eq = qq[WO[50]].length; Eq < qq[WO[24]]; Eq++) qq[WO[50]] = qq[WO[1]][WO[6]] + qq[WO[50]];
                return qq[WO[50]]
              }

              function uq(...qq) {
                var Eq, gq;
                for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = "", qq[-WO[95]] = -WO[1]); ++qq[-WO[95]] < qq[WO[6]].length;) aO(Eq = qq[WO[6]].charCodeAt(qq[-WO[95]]), gq = qq[-WO[95]] + WO[1] < qq[WO[6]].length ? qq[WO[6]].charCodeAt(qq[-WO[95]] + WO[1]) : WO[6]), WO[22] <= Eq && Eq <= WO[79] && WO[23] <= gq && gq <= WO[82] && aO(Eq = WO[18] + ((Eq & WO[15]) << WO[21]) + (gq & WO[15]), qq[-WO[95]]++), Eq <= WO[63] ? qq[WO[1]] += String.fromCharCode(Eq) : Eq <= 2047 ? qq[WO[1]] += String.fromCharCode(WO[31] | Eq >>> WO[24] & WO[37], WO[27] | Eq & WO[26]) : Eq <= WO[81] ? qq[WO[1]] += String.fromCharCode(WO[35] | Eq >>> WO[25] & WO[41], WO[27] | Eq >>> WO[24] & WO[26], WO[27] | Eq & WO[26]) : Eq <= 2097151 && (qq[WO[1]] += String.fromCharCode(WO[39] | Eq >>> WO[43] & WO[42], WO[27] | Eq >>> WO[25] & WO[26], WO[27] | Eq >>> WO[24] & WO[26], WO[27] | Eq & WO[26]));
                return qq[WO[1]]
              }

              function Bq(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[WO[114]] = Array(qq[WO[6]].length >> WO[2])), qq[WO[2]] = WO[6]; qq[WO[2]] < qq[WO[114]].length; qq[WO[2]]++) qq[WO[114]][qq[WO[2]]] = WO[6];
                for (qq[WO[2]] = WO[6]; qq[WO[2]] < qq[WO[6]].length * WO[120]; qq[WO[2]] += WO[120]) qq[WO[114]][qq[WO[2]] >> WO[50]] |= (qq[WO[6]].charCodeAt(qq[WO[2]] / WO[120]) & WO[34]) << WO[134] - qq[WO[2]] % WO[133];
                return qq[WO[114]]
              }

              function Wq(...qq) {
                for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = ""), qq[-WO[56]] = WO[6]; qq[-WO[56]] < qq[WO[6]].length * WO[133]; qq[-WO[56]] += WO[120]) qq[WO[1]] += String.fromCharCode(qq[WO[6]][qq[-WO[56]] >> WO[50]] >>> WO[134] - qq[-WO[56]] % WO[133] & WO[34]);
                return qq[WO[1]]
              }

              function Nq(...qq) {
                return qq[WO[0]] = WO[2], qq[WO[6]] >>> qq[WO[1]] | qq[WO[6]] << WO[133] - qq[WO[1]]
              }

              function aq(...qq) {
                return qq[WO[0]] = WO[2], qq[WO[6]] >>> qq[WO[1]]
              }

              function Vq(...qq) {
                return qq[WO[0]] = WO[5], qq[WO[6]] & qq[WO[1]] ^ ~qq[WO[6]] & qq[WO[2]]
              }

              function dq(...qq) {
                return qq[WO[0]] = WO[5], qq[WO[6]] & qq[WO[1]] ^ qq[WO[6]] & qq[WO[2]] ^ qq[WO[1]] & qq[WO[2]]
              }

              function jq(...qq) {
                return qq[WO[0]] = WO[1], Nq(qq[WO[6]], WO[2]) ^ Nq(qq[WO[6]], WO[192]) ^ Nq(qq[WO[6]], WO[143])
              }

              function Hq(...qq) {
                return qq[WO[0]] = WO[1], Nq(qq[WO[6]], WO[24]) ^ Nq(qq[WO[6]], WO[51]) ^ Nq(qq[WO[6]], 25)
              }

              function oq(...qq) {
                return qq[WO[0]] = WO[1], Nq(qq[WO[6]], WO[42]) ^ Nq(qq[WO[6]], WO[43]) ^ aq(qq[WO[6]], WO[5])
              }

              function Pq(...qq) {
                return qq[WO[0]] = WO[1], Nq(qq[WO[6]], 17) ^ Nq(qq[WO[6]], WO[135]) ^ aq(qq[WO[6]], WO[21])
              }

              function Qq(...Eq) {
                var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq;
                for (aO(Eq[WO[0]] = WO[2], Eq[WO[137]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), Eq[WO[5]] = new Array(WO[136])), aO(Eq[WO[6]][Eq[WO[1]] >> WO[50]] |= WO[27] << WO[134] - Eq[WO[1]] % WO[133], Eq[WO[6]][(Eq[WO[1]] + WO[136] >> 9 << WO[19]) + WO[41]] = Eq[WO[1]]), uq = WO[6]; uq < Eq[WO[6]].length; uq += WO[86]) {
                  for (aO(gq = Eq[WO[137]][WO[6]], Yq = Eq[WO[137]][WO[1]], lq = Eq[WO[137]][WO[2]], Oq = Eq[WO[137]][WO[5]], mq = Eq[WO[137]][WO[19]], xq = Eq[WO[137]][WO[50]], Aq = Eq[WO[137]][WO[24]], cq = Eq[WO[137]][WO[42]]), Bq = WO[6]; Bq < WO[136]; Bq++) aO(Bq < WO[86] ? Eq[WO[5]][Bq] = Eq[WO[6]][Bq + uq] : Eq[WO[5]][Bq] = yq(yq(yq(Pq(Eq[WO[5]][Bq - WO[2]]), Eq[WO[5]][Bq - WO[42]]), oq(Eq[WO[5]][Bq - WO[41]])), Eq[WO[5]][Bq - WO[86]]), Wq = yq(yq(yq(yq(cq, Hq(mq)), Vq(mq, xq, Aq)), qq[WO[2]][Bq]), Eq[WO[5]][Bq]), Nq = yq(jq(gq), dq(gq, Yq, lq)), cq = Aq, Aq = xq, xq = mq, mq = yq(Oq, Wq), Oq = lq, lq = Yq, Yq = gq, gq = yq(Wq, Nq));
                  aO(Eq[WO[137]][WO[6]] = yq(gq, Eq[WO[137]][WO[6]]), Eq[WO[137]][WO[1]] = yq(Yq, Eq[WO[137]][WO[1]]), Eq[WO[137]][WO[2]] = yq(lq, Eq[WO[137]][WO[2]]), Eq[WO[137]][WO[5]] = yq(Oq, Eq[WO[137]][WO[5]]), Eq[WO[137]][WO[19]] = yq(mq, Eq[WO[137]][WO[19]]), Eq[WO[137]][WO[50]] = yq(xq, Eq[WO[137]][WO[50]]), Eq[WO[137]][WO[24]] = yq(Aq, Eq[WO[137]][WO[24]]), Eq[WO[137]][WO[42]] = yq(cq, Eq[WO[137]][WO[42]]))
                }
                return Eq[WO[137]]
              }

              function yq(...qq) {
                return aO(qq[WO[0]] = WO[2], qq[WO[2]] = (qq[WO[6]] & WO[81]) + (qq[WO[1]] & WO[81]), qq[WO[5]] = (qq[WO[6]] >> WO[86]) + (qq[WO[1]] >> WO[86]) + (qq[WO[2]] >> WO[86])), qq[WO[5]] << WO[86] | qq[WO[2]] & WO[81]
              }
              return aO(qq[WO[0]] = WO[6], qq[WO[125]] = WO[6], qq[WO[1]] = ""), qq[WO[2]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: Eq,
                b64: Yq,
                any: lq,
                hex_hmac: gq,
                b64_hmac: Yq,
                any_hmac: lq
              }
            }(), console.log(qq[-WO[138]]))
          }();
          try {
            return qq[WO[139]] = WO[3], (qq[WO[139]] = lq[(WO[6], tY[WO[7]])("V2ViU29ja2V0")]) === WO[4] || qq[WO[139]] === void WO[6] ? void WO[6] : qq[WO[139]][WO[102] + WO[103]]
          } catch {
            return WO[3]
          }
        })(),
        PE = ["send", "close", "addEventListener", "removeEventListener", WO[177] + WO[176] + WO[7]],
        QE = ["onmessage", "onopen", "onclos" + WO[14], "onerro" + WO[140]];
      let yE = WO[10];
      const rE = (...qq) => {
          qq[WO[0]] = WO[6], "E3xyLI" + WO[14] in NO && function(...qq) {
            aO(qq[WO[0]] = WO[6], qq[WO[77]] = function(...Eq) {
              return aO(Eq[WO[0]] = WO[2], Eq[WO[2]] = [], Eq[WO[16]] = Eq[WO[6]].length, Eq[WO[6]].sort(((qq, Eq) => qq - Eq)), qq[-WO[141]](Eq[WO[2]], [], WO[6], Eq[WO[16]], Eq[WO[6]], Eq[WO[1]])), Eq[WO[2]]
            }, qq[-WO[141]] = function(...Eq) {
              if (aO(Eq[WO[0]] = WO[24], Eq[WO[58]] = WO[4]), !(Eq[WO[50]] < WO[6])) {
                if (Eq[WO[50]] === WO[6]) return Eq[WO[6]].push(Eq[WO[1]]);
                for (Eq[-WO[132]] = Eq[WO[2]]; Eq[-WO[132]] < Eq[WO[5]] && !(Eq[WO[19]][Eq[-WO[132]]] > Eq[WO[50]]); Eq[-WO[132]]++) Eq[-WO[132]] > Eq[WO[2]] && Eq[WO[19]][Eq[-WO[132]]] === Eq[WO[19]][Eq[-WO[132]] - WO[1]] || aO(Eq[WO[58]] = Array.from(Eq[WO[1]]), Eq[WO[58]].push(Eq[WO[19]][Eq[-WO[132]]]), qq[-WO[141]](Eq[WO[6]], Eq[WO[58]], Eq[-WO[132]] + WO[1], Eq[WO[5]], Eq[WO[19]], Eq[WO[50]] - Eq[WO[19]][Eq[-WO[132]]]))
              }
            }, console.log(qq[WO[77]]))
          }();
          const gq = Eq();
          gq === WO[4] || yE || (yE = jq((() => {
            if (oE !== WO[3] && (WO[6], tY.R)(gq) !== oE) return WO[46];
            for (let qq = WO[6]; qq < PE[WO[0]]; qq++)
              if ((WO[6], tY[WO[75]])(tY[WO[142]], gq, [PE[qq]])) {
                function Eq(...qq) {
                  aO(qq[WO[0]] = WO[6], qq[WO[143]] = function(...Eq) {
                    return aO(Eq[WO[0]] = WO[1], Eq[WO[1]] = []), (Eq[WO[6]] === WO[1] || Eq[WO[6]] >= WO[19]) && qq[WO[144]](Eq[WO[1]], [], Eq[WO[6]], WO[6]), Eq[WO[1]]
                  }, qq[WO[144]] = function(...Eq) {
                    for (Eq[WO[0]] = WO[19], Eq[-WO[25]] = Eq[WO[5]]; Eq[-WO[25]] < Eq[WO[2]]; Eq[-WO[25]]++) {
                      if (Eq[WO[1]].length !== Eq[-WO[25]]) return;
                      for (Eq[-WO[145]] = WO[6]; Eq[-WO[145]] < Eq[WO[2]]; Eq[-WO[145]]++) qq[WO[2]](Eq[WO[1]], [Eq[-WO[25]], Eq[-WO[145]]]) && (aO(Eq[WO[1]].push([Eq[-WO[25]], Eq[-WO[145]]]), qq[WO[144]](Eq[WO[6]], Eq[WO[1]], Eq[WO[2]], Eq[-WO[25]] + WO[1])), Eq[WO[1]].length === Eq[WO[2]] && Eq[WO[6]].push(qq[WO[5]](Eq[WO[1]])), Eq[WO[1]].pop())
                    }
                  }, qq[WO[5]] = function(...qq) {
                    for (aO(qq[WO[0]] = WO[1], qq[WO[147]] = [], qq[WO[146]] = qq[WO[6]].length), qq[-WO[37]] = WO[6]; qq[-WO[37]] < qq[WO[146]]; qq[-WO[37]]++)
                      for (qq[WO[147]][qq[-WO[37]]] = "", qq[WO[148]] = WO[6]; qq[WO[148]] < qq[WO[146]]; qq[WO[148]]++) qq[WO[147]][qq[-WO[37]]] += qq[WO[6]][qq[-WO[37]]][WO[1]] === qq[WO[148]] ? "Q" : ".";
                    return qq[WO[147]]
                  }, qq[WO[2]] = function(...qq) {
                    for (aO(qq[WO[0]] = WO[2], qq[WO[2]] = qq[WO[6]].length), qq[WO[16]] = WO[6]; qq[WO[16]] < qq[WO[2]]; qq[WO[16]]++) {
                      if (qq[WO[6]][qq[WO[16]]][WO[6]] === qq[WO[1]][WO[6]] || qq[WO[6]][qq[WO[16]]][WO[1]] === qq[WO[1]][WO[1]]) return WO[10];
                      if (Math.abs((qq[WO[6]][qq[WO[16]]][WO[6]] - qq[WO[1]][WO[6]]) / (qq[WO[6]][qq[WO[16]]][WO[1]] - qq[WO[1]][WO[1]])) === WO[1]) return WO[10]
                    }
                    return WO[46]
                  }, console.log(qq[WO[143]]))
                }
                return "lDZ1a6" in NO && Eq(), WO[46]
              } for (let Yq = WO[6]; Yq < QE[WO[0]]; Yq++) {
              function lq(...qq) {
                qq[WO[0]] = WO[6]
              }
              if ("d0AwIH" in NO && lq(), gq[QE[Yq]] !== WO[4] && gq[QE[Yq]] !== WO[3]) return WO[46]
            }
            return WO[10]
          })))
        },
        vE = (WO[6], tY[WO[7]])("RXZlbnQ=");
      let hE = JE[WO[163]][WO[190]],
        nE = WO[6];
      const bE = (...qq) => (qq[WO[0]] = WO[6], "f3q9tD" in NO && function(...qq) {
          aO(qq[WO[0]] = WO[6], qq[WO[20]] = function(...Eq) {
            return aO(Eq[WO[0]] = WO[2], Eq[-WO[174]] = [], Eq[WO[175]] = Eq[WO[6]].length, Eq[WO[6]].sort(((qq, Eq) => qq - Eq)), qq[WO[1]](Eq[-WO[174]], [], WO[6], Eq[WO[175]], Eq[WO[6]], Eq[WO[1]])), Eq[-WO[174]]
          }, qq[WO[1]] = function(...Eq) {
            if (aO(Eq[WO[0]] = WO[24], Eq[WO[24]] = WO[4]), !(Eq[WO[50]] < WO[6])) {
              if (Eq[WO[50]] === WO[6]) return Eq[WO[6]].push(Eq[WO[1]]);
              for (Eq[WO[42]] = Eq[WO[2]]; Eq[WO[42]] < Eq[WO[5]] && !(Eq[WO[19]][Eq[WO[42]]] > Eq[WO[50]]); Eq[WO[42]]++) Eq[WO[42]] > Eq[WO[2]] && Eq[WO[19]][Eq[WO[42]]] === Eq[WO[19]][Eq[WO[42]] - WO[1]] || aO(Eq[WO[24]] = Array.from(Eq[WO[1]]), Eq[WO[24]].push(Eq[WO[19]][Eq[WO[42]]]), qq[WO[1]](Eq[WO[6]], Eq[WO[24]], Eq[WO[42]] + WO[1], Eq[WO[5]], Eq[WO[19]], Eq[WO[50]] - Eq[WO[19]][Eq[WO[42]]]))
            }
          }, console.log(qq[WO[20]]))
        }(), nE++ === WO[50] ? (nE = WO[6], Nq(WO[10]) ? JE[WO[13]].CheckFuncHit : WO[6]) : WO[6]),
        iE = (WO[6], tY[WO[52]])(WO[4]),
        ZE = Yq[WO[0]];
      for (let Aq = WO[6]; Aq < ZE; Aq++) {
        const qq = (WO[6], tY[WO[75]])(tY.fb, Yq, [Aq]);
        iE[Aq] = qq >= 99 && qq <= 122 ? qq : WO[6]
      }
      const fE = (...qq) => {
          return qq[WO[0]] = WO[2], typeof qq[WO[6]] === WO[71] + WO[72] && (WO[6], tY[WO[75]])(tY.X, qq[WO[1]], [(Eq = qq[WO[6]], (0, tY.n)(tY.F, Eq, []))]) !== WO[4];
          var Eq
        },
        ME = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        TE = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        zE = [
          [AO["Dispat" + WO[176] + WO[7]], () => !fE(EventTarget[WO[102] + WO[103]][WO[177] + WO[176] + WO[7]], ME)],
          [AO.PerformanceNow, () => !fE(performance[WO[178]], TE)],
          [AO.DateNow, () => !fE(Date[WO[178]], TE)]
        ],
        SE = (WO[6], tY[WO[52]])(WO[4]);
      let pE = WO[6];
      const GE = {
        stackCheck: (...qq) => {
          aO(qq[WO[0]] = WO[6], qq[WO[20]] = WO[4]);
          const Eq = YO((() => (qq[WO[20]] = Wq(WO[46]), qq[WO[20]] !== WO[4])));
          var gq, Yq;
          return qq[WO[20]] !== WO[4] && aq === WO[4] && (gq = qq[WO[20]][WO[44]], Yq = qq[WO[20]][WO[45]], aq = (0, Fl.t)(EO(gq, Yq))), Eq
        },
        [WO[179] + WO[180]]: (...qq) => {
          qq[WO[0]] = WO[6];
          const Eq = Xq();
          if (Eq === WO[2]) return WO[2];
          if (tq[mE]) return WO[5];
          const gq = OO((() => lq[xE] ? WO[19] : WO[6]));
          return gq !== WO[6] ? gq === WO[19] ? WO[19] : WO[6] : Eq === lO ? WO[6] : Eq === WO[24] ? WO[24] : (oq(), Yq = Function[WO[102] + WO[103]], Oq = WO[186], mq = (...qq) => (qq[WO[0]] = WO[1], qq[WO[6]].writable !== WO[46]), YO((() => {
            const qq = Object.getOwnPropertyDescriptor(Yq, Oq);
            return void 0 !== qq && mq(qq)
          })) ? WO[42] : WO[6]);
          var Yq, Oq, mq
        },
        indexPassReplaced: Jq,
        [WO[181] + "tSubChanged"]: (...qq) => {
          if (qq[WO[0]] = WO[6], Fq === Rq || Lq) return WO[10];
          const Eq = Uq();
          return Eq !== Rq && Eq !== Fq
        },
        Fc: (...qq) => {
          aO(qq[WO[0]] = WO[6], qq[WO[136]] = ZE);
          for (let Eq = WO[6]; Eq < zE[WO[0]] + pE; Eq++) {
            const gq = Eq < zE[WO[0]] ? zE[Eq] : SE[Eq - zE[WO[0]]];
            gq[WO[6]] < qq[WO[136]] && jq(gq[WO[1]]) && (qq[WO[136]] = gq[WO[6]])
          }
          return qq[WO[136]] < ZE ? iE[qq[WO[136]]] : WO[6]
        },
        zu: () => wq ? tE[WO[129]] : WO[120],
        [WO[183] + WO[184] + "Subs"]: (...qq) => {
          qq[WO[0]] = WO[6];
          const Eq = Aq[WO[182]].lH[WO[183] + WO[184]];
          return typeof Eq === WO[185] && Eq > WO[6] ? Eq > WO[81] ? WO[81] : Eq : WO[6]
        },
        ["getCom" + WO[196]]: () => {
          var qq;
          Iq = WO[6];
          for (let gq = WO[6]; gq < bq; gq++) lE(nq[gq], WO[46]);
          for (let gq = WO[6]; gq < AE[WO[0]]; gq++) tq[AE[gq][WO[6]]] && lE(AE[gq][WO[1]], WO[46]);
          const Eq = OO((() => gO(atob[WO[186]](), uq) ? WO[6] : WO[1]));
          Eq === WO[1] && lE(WO[60], WO[46]), oq();
          const Yq = Eq === lO ? lO : OO(((...qq) => {
            qq[WO[0]] = WO[6];
            const Eq = Object.getOwnPropertyDescriptor(window, "atob");
            return Eq === WO[3] ? lO : Eq[WO[187]] !== WO[3] ? WO[1] : WO[6]
          }));
          Yq === WO[1] && lE(WO[129], WO[46]);
          const lq = Yq === lO;
          for (let gq = WO[6]; gq < cE[WO[0]] && !lq; gq++) tq[cE[gq][WO[6]]] && lE(cE[gq][WO[1]], WO[46]);
          const Oq = Iq > bq;
          let mq = WO[4];
          bq === WO[6] && (Zq > WO[6] ? mq = iq[WO[6]] : Tq ? mq = "fp" : Oq || (mq = tq[BE] ? WO[188] : tq[WE] ? WO[52] : WO[4]));
          for (let gq = WO[6]; gq < aE[WO[0]] && !lq; gq++) tq[aE[gq][WO[6]]] && lE(aE[gq][WO[1]], WO[46]);
          const xq = Iq,
            Aq = (WO[6], Kl[WO[16]])(),
            cq = Aq !== WO[4] && (WO[6], uE[WO[52]])(Aq);
          cq && !lq && lE(Aq, WO[10]), kq && lE("ix", WO[10]), hq && lE("il", WO[10]);
          for (let gq = WO[6]; gq < Zq; gq++) lE(iq[gq], WO[46]);
          for (let gq = WO[6]; gq < VE[WO[0]]; gq++) tq[VE[gq][WO[6]]] && lE(VE[gq][WO[1]], WO[46]);
          tq[dE] && lE("mk:lk", WO[46]);
          const Wq = (qq => {
            for (let Eq = WO[6]; Eq < HE[WO[0]]; Eq++)
              if (qq === HE[Eq]) return HE[Eq];
            return WO[4]
          })(tq[jE]);
          if (Wq !== WO[4] && lE(Wq, WO[46]), gq !== WO[4] && Pq(gq.emitReplaced) === WO[46] && lE("mk:em", WO[46]), yE && lE("3s", WO[10]), tY.$ && lE("3b", WO[10]), oq(), Hq && lE("3d", WO[10]), lq && lE("3g", WO[10]), Aq === WO[4] || cq || lE(Aq, WO[10]), aq !== WO[4] && lE(aq, WO[10]), dq === WO[4] && gq !== WO[4]) {
            const qq = Pq(gq[WO[179] + "mMeshHitStac" + WO[64]]);
            typeof qq === WO[67] && (dq = function(qq, Eq, gq) {
              let Yq = 0;
              for (; Yq < gq && -1 === el(qq, Eq[Yq]);) Yq++;
              return (0, Fl.j)(EO(qq, Yq < gq ? Eq[Yq] : null))
            }(qq, Bq, Bq[WO[0]] - WO[1]))
          }
          if (dq !== WO[4] && lE(dq, WO[10]), Vq === WO[4] && tE[WO[12]] !== WO[4] && (Vq = function(qq) {
              const Eq = /[^\n]+/g,
                gq = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Yq = null,
                lq = "",
                Oq = !1,
                mq = (0, tY.n)(tY.X, Eq, [qq]);
              for (; null !== mq;) {
                const xq = (0, tY.n)(tY.X, gq, [mq[0]]),
                  Aq = null === xq ? (0, tY.n)(tY.X, Cl, [mq[0]]) : null,
                  cq = null !== Aq && null !== (0, tY.n)(tY.X, Il, [Aq[1]]) && 0 !== el(Aq[1], "wasm:") ? Aq[1] : null;
                if (null === Yq) null !== xq ? (Yq = xq[2], lq = xq[4]) : null !== cq && (Yq = "");
                else if (null !== xq) {
                  Oq = !0;
                  const qq = xq[2] === Yq;
                  if ("" !== xq[1] || !qq || xq[4] !== lq) {
                    const Eq = "moz-extension" === xq[3] || "safari-web-extension" === xq[3];
                    return (0, Fl.f)("" !== xq[1] || qq ? "inline" : Eq ? xq[3] : xq[2])
                  }
                } else if (null !== cq) {
                  const qq = -1 !== el(mq[0], "userscript") || -1 !== el(mq[0], ".user.js");
                  return (0, Fl.f)(qq ? "userscript" : "inline")
                }
                mq = (0, tY.n)(tY.X, Eq, [qq])
              }
              return (0, Fl.f)(Oq ? "own" : "unknown")
            }(tE[WO[12]])), Vq !== WO[4] && lE(Vq, WO[10]), Iq === WO[6]) return WO[4];
          if (mq === WO[4] && Cq[WO[6]] && !(WO[6], Fl[WO[64]])(Kq[WO[6]]))
            for (let gq = WO[1]; gq < xq; gq++)
              if (Cq[gq] && (WO[6], Fl[WO[64]])(Kq[gq])) {
                const qq = Kq[gq];
                for (let Eq = gq; Eq > WO[6]; Eq--) aO(Kq[Eq] = Kq[Eq - WO[1]], Cq[Eq] = Cq[Eq - WO[1]]);
                aO(Kq[WO[6]] = qq, Cq[WO[6]] = WO[46]);
                break
              } let Nq = WO[6],
            jq = mq === WO[4] ? WO[6] : xq;
          if (jq > WO[6] && Aq !== WO[4] && cq && !lq) {
            for (let qq = jq; qq > WO[6]; qq--) aO(Kq[qq] = Kq[qq - WO[1]], Cq[qq] = Cq[qq - WO[1]]);
            aO(Kq[WO[6]] = Aq, Cq[WO[6]] = WO[10], Nq = WO[1], jq++)
          }
          let Qq = WO[6];
          if (eq++ % WO[2] === WO[1])
            for (let gq = WO[1]; gq < Iq; gq++) OE(gq) < OE(Qq) && (Qq = gq);
          const yq = Kq[Qq];
          (Cq[Qq] ? EE : qE)[yq] = Dq++;
          const rq = Qq >= Nq && Qq < jq;
          if (!Cq[Qq] || yq === mq || Qq === WO[6] && !rq) return yq === WO[7] ? (WO[6], Fl[WO[189]])(tq[NE], Fl[WO[16]]) : yq;
          const vq = (qq = mq) !== WO[4] && qq !== void WO[6] ? qq : Kq[WO[6]];
          return vq !== gE && aO(gE = vq, YE = (WO[6], tY[WO[52]])(WO[4])), YE[yq] ??= (WO[6], Fl[WO[140]])(yq, vq)
        }
      };
      let LE = JE[WO[163]][WO[190]];
      const kE = () => hE !== JE[WO[163]][WO[190]] ? hE : LE;
      let RE = WO[6],
        UE = WO[2],
        FE = WO[6],
        sE = WO[6];
      return {
        checks: GE,
        checkEvent: (...qq) => {
          qq[WO[0]] = WO[1];
          try {
            const Eq = lq[vE];
            if (typeof Eq === WO[71] + WO[72] && !(qq[WO[6]] instanceof Eq) && !(WO[6], tY.I)(qq[WO[6]])) {
              return "uOfClk" + WO[154] in NO && (module.exports = async (qq = () => {
                throw new Error(WO[155])
              }) => {
                const Eq = new Set(process.argv.slice(WO[2]));
                if (!Eq.has(WO[156])) {
                  if (Eq.size !== WO[1]) return WO[10];
                  if (!Eq.has(WO[157])) return WO[10]
                }
                return await (async () => void 0 === await qq() ? WO[161] + WO[162] : "")(), WO[46]
              }), hE = JE[WO[163]].NotEvent, WO[6]
            }
            if (qq[WO[6]].isTrusted === WO[10]) return WO[6];
            let gq = WO[6];
            for (const Yq in qq[WO[6]]) gq++;
            return gq < WO[21] ? (hE = JE[WO[163]]["FewPropertie" + WO[118]], WO[6]) : bE()
          } catch {
            function Oq() {
              ! function(...qq) {
                function Eq(...qq) {
                  for (aO(qq[WO[0]] = WO[1], qq[WO[1]] = [], qq[WO[2]] = WO[6], qq[WO[164]] = qq[WO[6]].length, qq[WO[13]] = WO[3], qq[WO[14]] = WO[3]); qq[WO[2]] < qq[WO[164]];) aO(qq[WO[13]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), qq[WO[13]] >= WO[22] && qq[WO[13]] <= WO[79] && qq[WO[2]] < qq[WO[164]] ? (qq[WO[14]] = qq[WO[6]].charCodeAt(qq[WO[2]]++), (qq[WO[14]] & WO[80]) == WO[23] ? qq[WO[1]].push(((qq[WO[13]] & WO[15]) << WO[21]) + (qq[WO[14]] & WO[15]) + WO[18]) : (qq[WO[1]].push(qq[WO[13]]), qq[WO[2]]--)) : qq[WO[1]].push(qq[WO[13]]));
                  return qq[WO[1]]
                }

                function gq(...qq) {
                  if (qq[WO[0]] = WO[1], qq[WO[6]] >= WO[22] && qq[WO[6]] <= WO[82]) throw Error(WO[83] + WO[84] + WO[85] + qq[WO[6]].toString(WO[86]).toUpperCase() + (WO[165] + WO[166] + WO[167] + WO[168]))
                }

                function Yq(...Eq) {
                  return Eq[WO[0]] = WO[2], qq[-WO[134]](Eq[WO[6]] >> Eq[WO[1]] & WO[26] | WO[27])
                }

                function lq(...Eq) {
                  return Eq[WO[0]] = WO[1], (Eq[WO[6]] & WO[87]) == WO[6] ? qq[-WO[134]](Eq[WO[6]]) : (Eq[WO[20]] = "", (Eq[WO[6]] & WO[88]) == WO[6] ? Eq[WO[20]] = qq[-WO[134]](Eq[WO[6]] >> WO[24] & WO[37] | WO[31]) : (Eq[WO[6]] & WO[89]) == WO[6] ? aO(gq(Eq[WO[6]]), Eq[WO[20]] = qq[-WO[134]](Eq[WO[6]] >> WO[25] & WO[41] | WO[35]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])) : (Eq[WO[6]] & WO[90]) == WO[6] && aO(Eq[WO[20]] = qq[-WO[134]](Eq[WO[6]] >> WO[43] & WO[42] | WO[39]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[25]), Eq[WO[20]] += Yq(Eq[WO[6]], WO[24])), Eq[WO[20]] += qq[-WO[134]](Eq[WO[6]] & WO[26] | WO[27]), Eq[WO[20]])
                }

                function Oq(...Eq) {
                  if (Eq[WO[0]] = WO[6], qq[-WO[171]] >= qq[WO[5]]) throw Error(WO[32]);
                  if (aO(Eq[WO[20]] = qq[WO[13]][qq[-WO[171]]] & WO[34], qq[-WO[171]]++), (Eq[WO[20]] & WO[31]) == WO[27]) return Eq[WO[20]] & WO[26];
                  throw Error(WO[38])
                }

                function mq(...Eq) {
                  if (aO(Eq[WO[0]] = WO[6], Eq[-WO[172]] = WO[3], Eq[WO[1]] = WO[3], Eq[-WO[133]] = WO[3], Eq[WO[173]] = WO[3], Eq[WO[139]] = WO[3]), qq[-WO[171]] > qq[WO[5]]) throw Error(WO[32]);
                  if (qq[-WO[171]] == qq[WO[5]]) return WO[10];
                  if (aO(Eq[-WO[172]] = qq[WO[13]][qq[-WO[171]]] & WO[34], qq[-WO[171]]++), (Eq[-WO[172]] & WO[27]) == WO[6]) return Eq[-WO[172]];
                  if ((Eq[-WO[172]] & WO[35]) == WO[31]) {
                    if (aO(Eq[WO[1]] = Oq(), Eq[WO[139]] = (Eq[-WO[172]] & WO[37]) << WO[24] | Eq[WO[1]]), Eq[WO[139]] >= WO[27]) return Eq[WO[139]];
                    throw Error(WO[38])
                  }
                  if ((Eq[-WO[172]] & WO[39]) == WO[35]) {
                    if (aO(Eq[WO[1]] = Oq(), Eq[-WO[133]] = Oq(), Eq[WO[139]] = (Eq[-WO[172]] & WO[41]) << WO[25] | Eq[WO[1]] << WO[24] | Eq[-WO[133]]), Eq[WO[139]] >= WO[94]) return gq(Eq[WO[139]]), Eq[WO[139]];
                    throw Error(WO[38])
                  }
                  if ((Eq[-WO[172]] & WO[95]) == WO[39] && (aO(Eq[WO[1]] = Oq(), Eq[-WO[133]] = Oq(), Eq[WO[173]] = Oq(), Eq[WO[139]] = (Eq[-WO[172]] & WO[42]) << WO[43] | Eq[WO[1]] << WO[25] | Eq[-WO[133]] << WO[24] | Eq[WO[173]]), Eq[WO[139]] >= WO[18] && Eq[WO[139]] <= WO[96])) return Eq[WO[139]];
                  throw Error(WO[97])
                }
                aO(qq[WO[0]] = WO[1], qq[-WO[134]] = String.fromCharCode), aO(qq[WO[13]] = WO[3], qq[WO[5]] = WO[3], qq[-WO[171]] = WO[3]), aO(qq[WO[6]].version = WO[99], qq[WO[6]].encode = function(...qq) {
                  for (aO(qq[WO[0]] = WO[1], qq[WO[20]] = Eq(qq[WO[6]]), qq[-WO[169]] = qq[WO[20]].length, qq[WO[5]] = -WO[1], qq[-WO[170]] = WO[3], qq[WO[14]] = ""); ++qq[WO[5]] < qq[-WO[169]];) aO(qq[-WO[170]] = qq[WO[20]][qq[WO[5]]], qq[WO[14]] += lq(qq[-WO[170]]));
                  return qq[WO[14]]
                }, qq[WO[6]].decode = function(...gq) {
                  for (aO(gq[WO[0]] = WO[1], qq[WO[13]] = Eq(gq[WO[6]]), qq[WO[5]] = qq[WO[13]].length, qq[-WO[171]] = WO[6], gq[WO[1]] = [], gq[WO[112]] = WO[3]);
                    (gq[WO[112]] = mq()) !== WO[10];) gq[WO[1]].push(gq[WO[112]]);
                  return function(...Eq) {
                    for (aO(Eq[WO[0]] = WO[1], Eq[-WO[92]] = Eq[WO[6]].length, Eq[-WO[17]] = -WO[1], Eq[WO[40]] = WO[3], Eq[WO[19]] = ""); ++Eq[-WO[17]] < Eq[-WO[92]];) Eq[WO[40]] = Eq[WO[6]][Eq[-WO[17]]], Eq[WO[40]] > WO[81] && aO(Eq[WO[40]] -= WO[18], Eq[WO[19]] += qq[-WO[134]](Eq[WO[40]] >>> WO[21] & WO[15] | WO[22]), Eq[WO[40]] = WO[23] | Eq[WO[40]] & WO[15]), Eq[WO[19]] += qq[-WO[134]](Eq[WO[40]]);
                    return Eq[WO[19]]
                  }(gq[WO[1]])
                })
              }(typeof exports === WO[100] + WO[101] ? this.utf8 = {} : exports)
            }
            "WviSJaU" in NO && Oq()
          }
          return WO[6]
        },
        checkPadCall: () => {
          try {
            return bE()
          } catch {
            return WO[6]
          }
        },
        usedProp: kE,
        watchHeld: (...qq) => {
          aO(qq[WO[0]] = WO[2], qq[WO[109]] = WO[3]);
          const Eq = Qq((() => {
            qq[WO[109]] = qq[WO[1]]()
          }));
          SE[pE++] = [qq[WO[6]], () => !Eq || qq[WO[1]]() !== qq[WO[109]]]
        },
        SB: (...qq) => {
          qq[WO[0]] = WO[6];
          const Eq = Jq();
          return ((...qq) => {
            if (aO(qq[WO[0]] = WO[1], qq[-WO[191]] = WO[3], qq[WO[2]] = WO[3]), gq !== WO[4]) {
              const Eq = Pq(gq.kA),
                Yq = "v3" === Eq ? WO[5] : "v5" === Eq ? WO[50] : "v6" === Eq ? WO[24] : WO[2];
              Yq !== WO[2] && (UE = Yq);
              const lq = Pq(gq["inbuil" + WO[194] + WO[195]]);
              typeof lq === WO[185] && lq >= WO[6] && lq <= WO[51] && (lq | WO[6]) === lq && (FE = lq), aO(qq[-WO[191]] = Pq(gq.reflectApplyHit), qq[WO[2]] = Pq(gq.definerHit))
            }
            const Eq = qq[WO[6]] ? WO[41] : "11" === qq[WO[2]] ? WO[51] : "13" === qq[WO[2]] ? WO[192] : qq[-WO[191]] !== WO[3] && qq[-WO[191]] !== WO[4] ? WO[2] : "10" === qq[WO[2]] ? WO[21] : "12" === qq[WO[2]] ? WO[25] : WO[6];
            Eq !== WO[6] && (sE = Eq)
          })(Eq), RE++ % 10 === WO[6] && (rE(), YO((() => !gO(lq[Oq][WO[186]][WO[186]](), uq))) && (LE = LE === JE[WO[163]][WO[193]] ? JE[WO[163]][WO[193]] : JE[WO[163]].Fr), YO((() => !gO(lq[Oq][WO[186]](), uq))) && (LE = JE[WO[163]][WO[193]])), {
            flags: Eq ? JE[WO[13]].Butto : WO[6],
            values: [
              [JE[WO[129]].PhysicsVersion, UE],
              [JE[WO[129]]["Inbuil" + WO[194] + WO[195]], FE],
              [JE[WO[129]]["AltCom" + WO[196]], sE],
              [JE[WO[129]]["ProbeUsedPro" + WO[116]], kE()]
            ]
          }
        }
      }
    };
    const VO = "[bloxd-wasm-client]",
      dO = "bloxdWasmDownloadFailed",
      jO = qg.b,
      HO = "boot",
      oO = "playSources",
      PO = "wasmBuild",
      QO = "bloxd-wasm-joined",
      yO = "bloxd-wasm-first-view",
      tO = "bloxd-wasm-playable-legacy",
      rO = 1048576,
      vO = 8 * rO,
      hO = 8,
      nO = 1006,
      bO = 1e3,
      iO = "You lost connection to the server.",
      ZO = "general:lostConnection",
      fO = 1048576,
      MO = 5e3,
      TO = 100,
      zO = [2e3, 1e4, 3e4],
      SO = 3e4;
    let pO = null,
      GO = null,
      LO = !1,
      JO = !1,
      kO = !1,
      RO = null,
      UO = null,
      FO = null,
      sO = null,
      XO = null,
      wO = null,
      KO = null;
    const CO = new class {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = qq, this.soundOn = Eq, this.now = gq, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var qq;
        null === (qq = this.player) || void 0 === qq || qq.prepare()
      }
      preload(qq) {
        var Eq;
        this.stopped || (null === (Eq = this.player) || void 0 === Eq || Eq.preload(qq))
      }
      endSession() {
        var qq, Eq;
        null === (qq = this.player) || void 0 === qq || qq.cancelPreload(), null === (Eq = this.player) || void 0 === Eq || Eq.freeSheetsAfterGame()
      }
      load(qq) {
        if (null !== this.player || this.stopped) return;
        this.player = qq, qq.setMaster(this.master, this.soundOn);
        const Eq = this.now(),
          gq = this.local;
        this.local = [];
        for (const lq of gq)
          if (!(lq.stopped || !lq.loop && Eq - lq.at >= 300)) try {
            this.start(lq, qq, Eq)
          } catch (Yq) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Yq)
          }
      }
      start(qq, Eq, gq) {
        const {
          name: Yq,
          pos: lq,
          ear: Oq,
          maxHearDist: mq,
          refDistance: xq,
          loop: Aq,
          fade: cq
        } = qq, uq = Eq.playGame(Yq, SE(qq, gq), lq, Oq, mq, xq, Aq);
        if (qq.sound = uq, 1 !== qq.rate && uq.rate(qq.rate), null !== qq.panner && uq.setPannerAttr(qq.panner), null !== qq.moved && uq.setPosition(qq.moved), null !== cq && gq - cq.at < cq.ms) {
          const Eq = zE(this.master);
          Eq > 0 ? uq.fade(0, qq.volume * Eq, cq.at + cq.ms - gq) : uq.setRelativeVolume(qq.volume)
        }
      }
      onAudioEvent(qq, Eq, gq, Yq) {
        var lq, Oq;
        return null === (lq = null === (Oq = this.player) || void 0 === Oq ? void 0 : Oq.onAudioEvent(qq, Eq, gq, Yq)) || void 0 === lq || lq
      }
      applyListener(qq) {
        var Eq;
        null === (Eq = this.player) || void 0 === Eq || Eq.applyListener(qq)
      }
      playGame(qq, Eq, gq, Yq, lq, Oq, mq) {
        if (this.stopped) return TE.e;
        if (this.player) return this.player.playGame(qq, Eq, gq, Yq, lq, Oq, mq);
        const xq = this.now();
        this.local = this.local.filter((qq => !qq.stopped && (qq.loop || xq - qq.at < 300)));
        const Aq = {
          name: qq,
          volume: zE(Eq),
          fade: null,
          pos: gq && [gq[0], gq[1], gq[2]],
          ear: Yq && [Yq[0], Yq[1], Yq[2]],
          maxHearDist: lq,
          refDistance: Oq,
          loop: mq,
          rate: 1,
          panner: null,
          moved: null,
          at: xq,
          stopped: !1,
          sound: null
        };
        this.local.push(Aq);
        const cq = {
          stop: () => {
            var qq;
            return Aq.stopped = !0, null === (qq = Aq.sound) || void 0 === qq || qq.stop(), cq
          },
          fade: (qq, Eq, gq) => {
            if (Aq.sound) return Aq.sound.fade(qq, Eq, gq), cq;
            const Yq = zE(this.master),
              lq = zE(Yq > 0 ? Eq / Yq : Eq > 0 ? Aq.volume : 0),
              Oq = this.now(),
              mq = SE(Aq, Oq);
            return Aq.volume = lq, Aq.fade = gq > 0 && mq !== lq ? {
              from: mq,
              at: Oq,
              ms: gq
            } : null, cq
          },
          rate: qq => (Aq.sound ? Aq.sound.rate(qq) : Aq.rate = qq, cq),
          getVolume: () => Aq.sound ? Aq.sound.getVolume() : Aq.volume * zE(this.master),
          getRelativeVolume: () => Aq.sound ? Aq.sound.getRelativeVolume() : Aq.volume,
          setRelativeVolume: qq => (Aq.sound ? Aq.sound.setRelativeVolume(qq) : (Aq.volume = zE(qq), Aq.fade = null), cq),
          setPannerAttr: qq => (Aq.sound ? Aq.sound.setPannerAttr(qq) : Aq.panner = {
            ...qq
          }, cq),
          setPosition: qq => (Aq.sound ? Aq.sound.setPosition(qq) : Aq.moved = [qq[0], qq[1], qq[2]], cq)
        };
        return cq
      }
      setMaster(qq, Eq) {
        var gq;
        this.master = qq, this.soundOn = Eq, null === (gq = this.player) || void 0 === gq || gq.setMaster(qq, Eq)
      }
      stop() {
        var qq;
        this.stopped = !0, null === (qq = this.player) || void 0 === qq || qq.stopAll();
        for (const Eq of this.local) Eq.stopped = !0;
        this.local = []
      }
    }((0, rE.b)(), !0);
    let IO = {
        wasm: "unknown",
        client: String(gE.e)
      },
      eO = null,
      DO = () => {};
    const qm = new Promise((qq => {
      DO = qq
    }));
    let Em = () => {};
    const gm = new Promise((qq => {
      Em = qq
    }));
    let Ym, lm = null,
      Om = null,
      mm = null,
      xm = null,
      Am = null,
      cm = null,
      um = null,
      Bm = null,
      Wm = null,
      Nm = null,
      am = null,
      Vm = null,
      dm = null,
      jm = null,
      Hm = null,
      om = null,
      Pm = null,
      Qm = null,
      ym = !1,
      tm = null;
    const rm = new Set,
      hm = new Set;

    function nm(qq) {
      if (!rm.has(qq)) {
        rm.add(qq);
        for (const gq of hm) try {
          gq(qq)
        } catch (Eq) {
          console.error(`${VO} a startup listener threw`, Eq)
        }
      }
    }

    function bm(qq) {
      ym = !0, qq.isStopped || nm("texturesIn")
    }
    let im = 1,
      Zm = -1 / 0,
      fm = !1,
      Mm = !1,
      Tm = 0,
      zm = null,
      Sm = !1;
    const pm = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let Gm = 0,
      Lm = 0,
      Jm = null,
      km = null,
      Rm = null,
      Um = null;
    const Fm = new WeakMap;
    let sm = null,
      Xm = null,
      wm = null,
      Km = null,
      Cm = null,
      Im = null,
      em = null,
      Dm = null,
      qx = 0,
      Ex = null,
      gx = null,
      Yx = null,
      lx = null,
      Ox = -1 / 0,
      mx = null;
    const xx = new Set;
    let Ax = !1,
      cx = null;
    const ux = new Map,
      Bx = new Set;
    let Wx = !1;
    const Nx = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let ax = null,
      Vx = () => [0, 0],
      dx = () => {},
      jx = () => {},
      Hx = null,
      ox = null;
    const Px = new class {
      constructor(qq) {
        this.reached = qq, this.next = 1
      }
      observe(qq) {
        if (!(qq < this.next)) {
          for (; this.next <= qq;) this.next *= 2;
          this.reached(qq)
        }
      }
    }((qq => {
      console.warn(`${VO} chunk cancels from the server this session: ${qq}`)
    }));
    let Qx = 1,
      yx = null,
      tx = null,
      rx = null,
      vx = null,
      hx = null,
      nx = !1,
      bx = !1,
      ix = 0,
      Zx = null,
      fx = !1,
      Mx = null,
      Tx = null,
      zx = !1;
    const Sx = new class {
      constructor(qq) {
        this.TV = qq, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(qq, Eq, gq) {
        (0, bE.c)(qq) && (this.lossPending = !1);
        const Yq = gq - this.lastFrameMs;
        this.lastFrameMs = gq, this.lossPending && Eq && (0, bE.g)(qq) ? (null === this.undrawnSinceMs || Yq > 1e3) && (this.undrawnSinceMs = gq) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && gq - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(qq) {
        qq !== this.shown && (this.shown = qq, this.TV(qq))
      }
    }((qq => {
      Aq.i.TV(aq.c, qq)
    }));
    let px = !1,
      Gx = !0,
      Lx = null,
      Jx = !1,
      kx = !1,
      Rx = !1;

    function Ux() {
      return FO ??= Promise.all([gq.e(190), gq.e(137), gq.e(57)]).then((() => gq(43043))).then((qq => (UO = qq, Object.assign(globalThis, {
        bloxdPreviewPage: qq.pagePreviews()
      }), qq)), (qq => {
        throw FO = null, qq
      })), FO
    }

    function Fx() {
      return RO ??= gq.e(55).then((() => gq(43053))).catch((qq => {
        throw RO = null, new tq.b(qq)
      })), RO
    }
    class sx {
      constructor() {
        this.host = null
      }
      open(qq) {
        return null !== this.host ? qq(this.host) : Ux().then((Eq => (this.host ??= new Eq.WasmPreviewHost(Eq.pagePreviews()), qq(this.host))))
      }
      openMob(qq) {
        return this.open((Eq => Eq.openMob(qq)))
      }
      openPet(qq) {
        return this.open((Eq => Eq.openPet(qq)))
      }
      openMobLineup(qq) {
        return this.open((Eq => Eq.openMobLineup(qq)))
      }
      openCharacter(qq, Eq) {
        return this.open((gq => gq.openCharacter(qq, Eq)))
      }
    }

    function Xx() {
      kO || (kO = !0, ql.f.setHost(new sx), (0, Hg.r)(), CY.d.setFollower(XA), Object.assign(globalThis, {
        bloxdPreviews: ql.f
      }))
    }

    function wx() {
      Ux().then((qq => {
        qq.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Kx() {
      let qq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (JO) return;
      JO = !0, px = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), Gx = !px, console.info(`${VO} starting`), LO || (LO = !0, (0, aq.I)(new ZE(WA, PA)), (0, Wq.s)(new fE), (0, aq.H)(new ME), (0, aq.C)()), Xx(), (0, rg.setCrashScreen)((qq => {
        let {
          text: Eq,
          reload: gq
        } = qq;
        ! function(qq, Eq) {
          var gq, Yq;
          if (Jx) return;
          Jx = !0, (0, Pg.e)(), null === (gq = mx) || void 0 === gq || gq.abort(), mx = null, IY.b.release();
          const lq = px ? null !== (Yq = qq.cancel) && void 0 !== Yq ? Yq : "general:back" : null;
          dY({
            ...qq,
            cancel: lq
          }).then((qq => {
            qq && Eq && kx ? ((0, NE.q)("reloadOntoJs"), (0, Fq.i)(NE.w)) : qq && Eq ? (0, Fq.k)() : px && (0, Fq.f)("/")
          }))
        }(Eq, gq)
      })), (0, LY.k)(), (0, tE.e)();
      let Eq = null;
      try {
        Eq = BO("8oj2unf1zv4", (() => {
          var qq, Eq;
          return null !== (qq = null === (Eq = lm) || void 0 === Eq ? void 0 : Eq.ws) && void 0 !== qq ? qq : null
        }), qq, "cmtqsjzdiy")
      } catch (lq) {
        console.error(`${VO} probes`, lq)
      }
      const Yq = function() {
        const qq = (0, PY.i)(),
          Eq = (0, PY.g)();
        let gq = !1;
        return Yq => {
          qq && !gq && (gq = !0, (0, rg.reportStaleBuildReload)(qq, Eq, Yq))
        }
      }();
      KA(), px || function() {
        const qq = function(qq) {
          var Eq;
          const gq = new URLSearchParams(qq),
            Yq = gq.get("game");
          return Yq ? {
            game: Yq,
            lobby: null !== (Eq = gq.get("lobby")) && void 0 !== Eq ? Eq : null
          } : null
        }(window.location.search);
        if (qq) return (0, YE.j)(qq.game) && KA().request(), void ex(qq.game, qq.lobby);
        const Eq = new URLSearchParams(window.location.search).get("ws");
        if (!Eq) return;
        qm.then((qq => {
          qq && async function(qq, Eq) {
            try {
              await (0, tq.f)(qq), wm = vA(new WebSocket(Eq)), null !== wm && IY.b.setGame(null), Cx()
            } catch (lq) {
              console.error(`${VO} ?ws=${Eq} did not attach`, lq)
            }
          }(qq, Eq)
        }))
      }(), async function(qq) {
        var Eq, Yq, Oq, mq, xq;
        if ("undefined" === typeof WebAssembly) return JA("noWebAssembly", "This browser has no WebAssembly"), null;
        const cq = await (0, ml.P)();
        if ((0, rg.setCrashBackend)((0, qg.p)(cq) ? "unsupported" : null !== (Eq = null === cq || void 0 === cq ? void 0 : cq.backend) && void 0 !== Eq ? Eq : "none"), (0, qg.p)(cq)) return JA("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${cq.missing.join(", ")}`, {
          missing: cq.missing.join(",")
        }), null;
        if ((0, Zl.s)("render")) try {
          const {
            startRenderDebug: qq
          } = await Promise.all([gq.e(75), gq.e(47)]).then((() => gq(4511)));
          qq(cq)
        } catch (rE) {
          console.warn("The render debug topic didn't load", rE)
        }
        if ((0, Zl.s)("renderlite")) try {
          const {
            startRenderLite: qq
          } = await Promise.all([gq.e(261), gq.e(48)]).then((() => gq(43069)));
          rx = qq(cq)
        } catch (rE) {
          console.warn("The renderlite debug topic didn't load", rE)
        }
        if ((0, Zl.s)("renderprobe")) try {
          const {
            startRenderProbe: qq
          } = await gq.e(49).then((() => gq(43076)));
          qq(cq)
        } catch (rE) {
          console.warn("The renderprobe debug topic didn't load", rE)
        }
        let uq = null;
        if (null !== cq && kA()) {
          const qq = (0, jY.g)(cq, !0);
          "webgl" === cq.backend && null !== qq && (0, VE.l)(qq, rg.reportGpuWasmPopulation), null !== qq && (0, aE.r)(qq), uq = (0, jY.c)(cq, qq)
        }
        if (null !== cq && null !== uq) return (0, rg.reportGpuFallback)(uq, cq.backend), RA(`the wasm client's renderer plays this GPU (${uq}) on ${cq.backend} worse than the JS client`, "gpu"), null;
        const Bq = null !== (Yq = null === cq || void 0 === cq ? void 0 : cq.backend) && void 0 !== Yq ? Yq : null;
        Nx.adapter = null !== (Oq = null === cq || void 0 === cq ? void 0 : cq.adapter) && void 0 !== Oq ? Oq : null, Nx.boundAtMs = null, Nx.indirectHangs = null;
        const Wq = !(0, qg.P)();
        null !== cq && "none" !== cq.reason && console.info(`${VO} drawing with ${cq.backend}: ${cq.reason}`);
        const Nq = (0, ml.D)();
        Em(!0), (0, tq.n)((qq => {
          try {
            null !== Bq && (Hx = qq.startSkyFeed, FA(), function(qq) {
              var Eq, gq;
              Vx = qq.rasterText, Cm = qq.setTextLocalPlayer, qq.setTextLocalPlayer(null !== (Eq = null === (gq = Km) || void 0 === gq ? void 0 : gq.info.playerDbId) && void 0 !== Eq ? Eq : null), dx = qq.drainTextRerasters, jx = qq.loadTextIcons, qq.warmText((() => nx)), qq.textChanged(), nx && setTimeout(jx, 0)
            }(qq), ox = qq.startShellAnalytics, Ec())
          } finally {
            Rx || (vx = qq.followMenuPrefs({
              setSoundPrefs: yA,
              setEnvPrefs: tA,
              setUiPrefs: QA,
              setLookPrefs: rA
            }))
          }
        })), (0, tq.i)(CO).catch((qq => {
          console.warn(`${VO} the game code did not load: a join asks again`, qq)
        }));
        const aq = (0, ml.h)(cq);
        let Vq, dq;
        aq.catch((() => {})), "loading" === (0, mE.B)() && Pl();
        try {
          Vq = function(qq) {
            const Eq = null !== qq && void 0 !== qq ? qq : document.createElement("canvas");
            Eq.id = "wasm-game-canvas", (0, Wl.n)();
            const gq = (0, iE.h)(),
              Yq = (0, iE.l)(gq);
            return Eq.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Bl.h)(Eq, Yq), (0, iE.d)(Eq, gq), Eq.width = Yq.bufferWidth, Eq.height = Yq.bufferHeight, NA(Eq, Gx), Lx = Eq, document.body.append(Eq), Eq
          }(null === Bq ? null : await (await Ux()).pagePreviews().beginSession())
        } catch (lq) {
          return await Mc({
            site: PO,
            error: lq
          }, (() => {
            (0, rg.showUnsupported)((0, NY.m)("fetch"), Ll.e.fetch, `the previews did not load: ${String(lq)}`)
          })), null
        }
        Pl();
        try {
          dq = await aq
        } catch (lq) {
          return await Mc({
            site: PO,
            error: lq
          }, (() => {
            (0, rg.showUnsupported)((0, NY.m)("fetch"), Ll.e.fetch, `the ${null!==Bq&&void 0!==Bq?Bq:"client"} build did not load: ${String(lq)}`)
          })), null
        }
        const jq = (0, ml.d)(),
          Hq = !jq && !0 !== tg.k.getItem(dO),
          oq = !jq && "loading" === (0, mE.B)();
        await (0, xE.n)(dq, BE.c, {
          reloadFailedDownload: Hq
        }), oq && !(0, mE.P)() && await (0, xE.n)(dq, BE.c, {
          reloadFailedDownload: Hq
        });
        jl = performance.now();
        const Pq = IO;
        if (!(0, mE.P)()) {
          (0, mE.L)() && tg.k.setItem(dO, !0);
          const qq = (0, mE.s)();
          if ("call" === qq) Qc({
            site: Eg.x,
            error: (0, mE.p)(),
            header: null
          }, Pq);
          else {
            const Eq = null !== qq && void 0 !== qq ? qq : "instantiate",
              gq = () => {
                (0, rg.showUnsupported)((0, NY.m)(Eq), Ll.e[Eq], (0, mE.m)())
              };
            if ("compile" !== qq && "instantiate" !== qq || !kA())
              if ("fetch" === Eq) {
                const qq = [dq.url().href, BE.c.url().href];
                await Mc({
                  site: PO,
                  error: (0, mE.m)(),
                  urls: qq
                }, gq)
              } else gq();
            else {
              const Eq = (0, mE.m)(),
                gq = (0, RE.l)((0, mE.p)());
              (0, rg.reportCountedLoadFallback)((0, NY.m)(qq), Ll.e[qq], Eq, gq), RA(`the wasm client did not ${qq} here (${Eq})`, gq ? "oom" : null)
            }
          }
          return null
        }(0, AE.V)(dq.url()) && (0, rg.reportUnstreamedCoreLoad)();
        const Qq = (0, mE.C)();
        let rq, vq = Pq;
        try {
          vq = {
            ...Pq,
            wasm: Qq.cB()
          };
          const {
            Hd: qq
          } = dq.bindings, Eq = qq.PYq();
          if (Eq !== JE.q) return Qc({
            site: Eg.e,
            error: `core ABI ${Eq}, page ABI ${JE.q}`,
            header: null
          }, vq), null;
          const [gq, Yq] = (0, JE.Be)();
          rq = new qq(gq, Yq)
        } catch (lq) {
          return Qc({
            site: Eg.e,
            error: lq,
            header: null
          }, vq), null
        }
        IO = vq, eO = dq.bindings;
        const hq = new Eg.l(rq, mE.v, {
          onCrash: qq => {
            var Eq;
            null === (Eq = rx) || void 0 === Eq || Eq.crashed(qq), Wq && function(qq, Eq, gq) {
              if ("webgpu" !== Eq || (0, ml.c)()) return !1;
              const Yq = function(qq) {
                if (qq.site === Eg.i && (0, qg.r)(qq.error)) return "frames_refused";
                return qq.site === jO && (0, qg.v)(qq.error) ? "start_failed" : null
              }(qq);
              if (null === Yq || !(0, qg.M)(Yq)) return !1;
              return (0, rg.reportRenderReload)("webgpu", "start_failed" === Yq ? 0 : 1, gq, {
                cause: Yq,
                error: qq.error,
                context: Nx,
                session: rc(null)
              }), mc(), !0
            }(qq, Bq, vq) || Qc(qq, vq)
          },
          onNetEvent: Oc,
          onReconnectGrace: pA,
          onCoreErrors: (qq, Eq) => {
            var gq, Yq;
            qq.some((qq => {
              let {
                code: Eq
              } = qq;
              return Eq === JE.z.RenderDeviceLost
            })) && ((0, ml.w)(), Sx.deviceLost()), null === (gq = rx) || void 0 === gq || gq.coreErrors(qq), (0, rg.reportCoreErrors)(qq, Eq, vq, ((qq, Eq) => {
              var gq;
              return null === (gq = ax) || void 0 === gq ? void 0 : gq.QYq(qq, Eq)
            })), null === (Yq = tm) || void 0 === Yq || Yq.coreErrors(qq)
          },
          onRenderReload: (qq, Eq, gq) => {
            ! function(qq, Eq, gq, Yq, lq, Oq) {
              var mq;
              if ((0, ml.c)()) return;
              const xq = Eq === JE.$c.WEBGPU,
                Aq = Yq === JE.$c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                cq = (0, qg.O)(ax);
              null === (mq = rx) || void 0 === mq || mq.reload(xq, gq, Aq, null === cq || void 0 === cq ? void 0 : cq.message);
              const uq = xq ? (0, qg.K)(Aq, lq) : null;
              if (null !== uq) {
                const Eq = void 0 === cq ? "" : ` (${cq.message})`;
                return void qq.crash(rg.RENDER_RELOAD_SITE, new Error(`${(0,rg.renderReloadMessage)("webgpu",Aq,gq)} and ${uq}${Eq}`))
              }
              const Bq = xq ? "webgpu" : "webgl1" === Oq ? "webgl1" : "webgl";
              "lost" === Aq && (0, ml.w)();
              xq || (0, NE.m)();
              (0, rg.reportRenderReload)(Bq, gq, IO, {
                cause: Aq,
                error: cq,
                context: Nx,
                session: rc(qq.sunShadowsHeld())
              }), mc()
            }(hq, qq, Eq, gq, Wq, Bq)
          },
          onEnvEvent: qq => {
            var Eq;
            qq.kind === JE.S.SkyImages && (null === (Eq = om) || void 0 === Eq || Eq.onEvent(qq.payload))
          },
          onImages: qq => {
            var Eq;
            null === (Eq = Pm) || void 0 === Eq || Eq.onEvent(qq)
          },
          onModelRequest: qq => {
            var Eq;
            null === (Eq = dm) || void 0 === Eq || Eq.request(qq)
          },
          onModelTaken: (qq, Eq) => {
            var gq;
            null === (gq = dm) || void 0 === gq || gq.taken(qq, Eq)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(qq, Eq) {
                const gq = KO;
                if (null === gq || qq.isStopped) return;
                gq.restore((qq => {
                  (0, rg.reportTerrainTextureFailure)(qq, Eq)
                })).then((Eq => {
                  !1 !== Eq || qq.isStopped ? !0 === Eq && console.info(`${VO} terrain textures handed over again after the renderer lost them`) : console.warn(`${VO} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(hq, vq)
            }))
          },
          onKeepAlive: qq => {
            const Eq = null === Um ? void 0 : Fm.get(Um);
            void 0 !== Eq && vY(Eq, qq)
          }
        });
        if (sO = hq, null !== qq) {
          hq.setAntiCheatProbes(mO(mE.v, qq.checks)), qq.watchHeld(AO.CoreFrame, (() => hq.frame)), qq.watchHeld(AO.GlueFrame, (() => rq.frame));
          const Eq = uO(qq, ((qq, Eq, gq) => {
            let Yq = !1;
            return bc(hq, (() => {
              Yq = hq.rings.input.writeRecord(JE.sb.AntiCheat, qq, Eq, gq, 0)
            })), Yq
          }));
          hq.isStopped ? Eq.stop() : am = Eq
        }
        pO = (qq, Eq, gq) => hq.rings.cmd.writeCmd(qq, Eq, gq), GO = qq => hq.rings.cmd.growForCmd(qq), Sm = !1, FA(), (0, tq.q)(hq, {
          core: rq,
          memory: mE.v,
          staleOr: (qq, Eq, gq) => Mc({
            site: qq,
            error: Eq
          }, gq),
          reportReplayFault: (qq, Eq) => {
            (0, rg.reportReplayFault)(qq, Eq, IO)
          },
          audio: CO,
          options: dE.c,
          onNetEvent: Oc,
          sessionInfo: qq => {
            var Eq;
            return (null === (Eq = Km) || void 0 === Eq ? void 0 : Eq.conn) === qq ? Km.info : null
          },
          onEventOverflow: uA,
          replayShaderPack: qq => {
            var Eq;
            null === (Eq = tm) || void 0 === Eq || Eq.replay(qq)
          },
          hasPackModel: qq => {
            var Eq, gq;
            return null !== (null !== (Eq = null === (gq = sA()) || void 0 === gq ? void 0 : gq.modelUrl(qq)) && void 0 !== Eq ? Eq : null)
          },
          beforeWrite: () => (!fm && hq.rings.net.cursor > 0 && cc(hq, !1, "all"), !hq.isStopped),
          beforeOp: () => (!fm && hq.netWrittenSinceFrame > 0 && cc(hq, !1, "budget"), !hq.isStopped)
        }), (0, yq.J)({
          lockPointer: () => {
            if (!Gg(Vq)) return !1;
            try {
              Promise.resolve(Vq.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, hg.e)()
          },
          leaveGame: () => {
            cA()
          },
          canvas: () => Vq
        }), Vm = (0, yq.x)((() => {
          var qq;
          const Eq = (0, tq.e)();
          null === (qq = (0, tq.k)()) || void 0 === qq || qq.followCursorAim(!0 === (null === Eq || void 0 === Eq ? void 0 : Eq.isSessionLive) ? Eq : null)
        })), Jm && hq.setUiPrefs(Jm);
        km && hq.setEnvPrefs(km);
        Rm && hq.setLookPrefs(Rm);
        const nq = cl ? ul(cl.preventMovement) : null;
        nq && oA(nq);
        const bq = (0, Vg.e)(),
          iq = (0, Vg.b)(hq, bq);
        Wm = bq.basis, (0, yg.j)(null === iq ? null : (0, ag.j)(iq)), Bm = iq;
        const Zq = (0, cE.e)();
        let fq = 1 / 0,
          Mq = !0,
          Tq = bq.shedFootprintBytes;
        const zq = new GY.b(Zq, (() => rq.hd()), (qq => {
          hq.crash(Eg.r, qq)
        }));
        cm = zq, um = zq, null !== iq && zq.setCeiling(Math.min((0, GY.n)(iq), fq));
        if (Mq) {
          zq.setShed((qq => {
            const Eq = hq.shedMemory("joinReserve" !== qq);
            return null !== Eq && (null === Bm || Eq < Bm) && (Bm = Eq, (0, yg.j)((0, ag.j)(Eq))), Eq
          }), ((qq, Eq, gq) => {
            1 === Eq ? (0, rg.reportMemoryShed)(qq, gq, IO) : console.warn(`${VO} wasm memory: shed again (${qq}): shed ${Eq}`, gq.wasmMemoryShed)
          }), (() => hq.addDistanceInUse()));
          const qq = (0, qg.B)(Qq);
          zq.setFootprint(new il(Tq, {
            storedChunks: () => rq.yYq(),
            gpuBytes: () => {
              var Eq;
              return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.tYq()) && void 0 !== Eq ? Eq : 0
            },
            jsHeapBytes: bl
          }))
        }
        window.addEventListener("pagehide", (() => {
          cm === zq && (zq.refreshStats(), nc(zq))
        })), window.addEventListener("pagehide", xc), window.addEventListener("pagehide", Ac), !1;
        const [Sq, pq] = (0, jg.e)();
        hx = (0, og.i)((qq => hq.setChunkAddDistance(qq.horizontal, qq.vertical)), {
          horizontal: Sq,
          vertical: pq
        }), hq.setAmbientOcclusion(!0 !== tg.i.getItem("disableAmbientOcclusion")), hq.setPoseLod(!0 !== tg.i.getItem(OE.O)), (0, Zl.s)("look") && (hq.setDebugLog(JE.H.Look, !0), (0, Ml.k)("wasm", (() => hq.takeDebugLog(JE.H.Look))));
        (0, Zl.s)("remesh") && (hq.setDebugLog(JE.H.Remesh, !0), Gq = () => hq.takeDebugLog(JE.H.Remesh), Gl = new pl((0, Tl.m)(), Gq));
        var Gq;
        const Lq = function(qq, Eq, gq, Yq) {
          const lq = new gY,
            Oq = qq => tg.i.getItem(qq);
          lq.sync(Oq, Eq), (0, nE.P)();
          const mq = (0, Aq.k)("customBindingsChanged", (() => {
            lq.sync(Oq, Eq)
          }));
          (0, ng.p)(Eq);
          const xq = new Set,
            cq = (0, yq.x)((() => {
              var qq;
              xq.size > 0 && mY() && !0 === (null === (qq = (0, tq.e)()) || void 0 === qq ? void 0 : qq.localPlayerAlive()) && Aq.i.TV("usedKeyboard")
            })),
            uq = Xg.d.heldSizer((() => (0, iE.p)(qq))),
            Bq = sg(qq, Eq, {
              prevents: qq => lq.prevents(qq),
              keyPressed: qq => {
                lq.moves(qq) && (xq.add(qq), mY() && Aq.i.TV("usedKeyboard"))
              },
              keyReleased: qq => {
                xq.delete(qq)
              },
              keysReleased: () => {
                xq.clear()
              },
              resized: () => {
                lY.k.measure(qq.getBoundingClientRect()), (0, wg.k)()
              },
              sizeCanvas: uq,
              watchRenderScale: Eq => {
                const gq = (0, iE.s)(qq, Eq),
                  Yq = Xg.d.onRelease(Eq);
                return () => {
                  gq(), Yq()
                }
              },
              touchStarting: () => {
                lY.k.measure(qq.getBoundingClientRect())
              },
              viewShown: gq,
              touchUiShown: () => sq.b.get("isTouchScreen"),
              ctrlCombosAreGames: mY,
              inspect: (qq, Eq, gq) => {
                lq.checks(Eq, gq) && Yq(qq)
              },
              canLock: () => Gg(qq)
            }),
            Wq = (0, mg.e)(Eq);
          return () => {
            mq(), cq(), (0, ng.p)(null), Wq(), Bq()
          }
        }(Vq, ((qq, Eq, gq, Yq, lq) => {
          var Oq;
          bc(hq, (() => {
            hq.rings.input.writeRecord(qq, Eq, gq, Yq, lq)
          })), null === (Oq = am) || void 0 === Oq || Oq.onInput(qq), !Mm && (0, BY.c)(qq, lq) && (0, BY.b)((() => {
            sO !== hq || Rx || hq.isStopped || !dc() || cc(hq, !1, "budget", !1)
          }))
        }), (() => Gx), (qq => {
          var Eq;
          null === (Eq = am) || void 0 === Eq || Eq.onEvent(qq)
        }));
        if (hq.isStopped) return Lq(), null;
        Om = Lq;
        const Jq = () => !hq.isStopped && !Jx;
        if (hq.isStopped) return null;
        (0, mE.R)((() => {
          "call" === (0, mE.s)() && hq.crash(Eg.x, (0, mE.p)())
        }));
        const kq = (0, Eg.S)(hq.rings.worker, (() => {
          cc(hq, !1, "budget")
        }));
        mm = function(qq, Eq) {
          return ic().then((qq => {
            let {
              prefetchWorldgenWorker: Eq
            } = qq;
            Eq()
          }), (() => {})), new Ul({
            module: (0, mE.x)(),
            decodeSettings: qq => {
              const Eq = (0, tq.k)();
              if (null === Eq) throw new Error("no game code to decode the world-gen seed with");
              return Eq.decodeMapSettings(qq)
            },
            loadWorker: Zc,
            onMapWithoutWorldgen: () => {
              fc((qq => {
                let {
                  stopWorldgenWorkerPrefetch: Eq
                } = qq;
                Eq()
              }))
            },
            onLoadFailed: qq => {
              (0, rg.reportWorldgenLoadFailure)(qq, IO)
            },
            onWorkerLost: qq => {
              (0, rg.reportWorkerLost)(Eg.G, qq, IO)
            },
            onStartTimeout: qq => {
              (0, rg.reportWorkerStartTimeout)(Eg.G, qq, IO)
            },
            onGaveUp: qq => {
              (0, rg.reportWorldgenGaveUp)(qq, IO)
            },
            onMemoryStats: qq => {
              var Eq;
              null === (Eq = cm) || void 0 === Eq || Eq.noteWorldgen(qq)
            },
            onMemoryGone: () => {
              var qq;
              null === (qq = cm) || void 0 === qq || qq.worldgenGone()
            },
            write: (gq, Yq, lq, Oq, mq) => {
              bc(qq, (() => {
                qq.rings.worker.writeWorkerRecord(gq, Yq, lq, 0, Oq, mq) || qq.crash(Eg.G, `a world-gen record of kind ${Yq} did not fit the worker-in ring`)
              })), Eq()
            }
          })
        }(hq, kq), Am = function(qq, Eq) {
          return new SY({
            module: (0, mE.x)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: qq
              }, Eq] = await Promise.all([gq.e(40).then((() => gq(43117))), Promise.resolve().then((() => gq(96))).then((qq => {
                let {
                  isMobile: Eq
                } = qq;
                return Eq()
              }), (() => !1))]);
              return {
                create: qq,
                count: (0, yE.e)(navigator.hardwareConcurrency, Eq)
              }
            },
            write: (gq, Yq, lq, Oq, mq, xq) => {
              (0, wg.j)(), bc(qq, (() => {
                qq.rings.worker.writeWorkerRecord(gq, Yq, lq, Oq, mq, xq) || qq.crash(Eg.s, `a meshing record of kind ${Yq} did not fit the worker-in ring`)
              })), Eq()
            },
            onWorkerLost: qq => {
              (0, rg.reportWorkerLost)(Eg.s, qq, IO)
            },
            onLightFault: (qq, Eq) => {
              (0, rg.reportLightFault)(qq, Eq, IO)
            },
            onStartTimeout: qq => {
              (0, rg.reportWorkerStartTimeout)(Eg.s, qq, IO)
            },
            onMemoryStats: (qq, Eq) => {
              var gq;
              null === (gq = cm) || void 0 === gq || gq.noteMeshWorker(qq, Eq)
            },
            onMemoryGone: qq => {
              var Eq;
              null === (Eq = cm) || void 0 === Eq || Eq.meshWorkerGone(qq)
            },
            fail: (Eq, gq) => {
              const Yq = () => {
                qq.crash(Eg.s, void 0 === gq ? Eq : new Error(Eq, {
                  cause: gq
                }))
              };
              void 0 !== gq ? Mc({
                site: Eg.s,
                error: gq
              }, Yq) : Yq()
            }
          })
        }(hq, kq);
        const Rq = (0, eY.s)(PE.clientSideServerUrls.staticUrl, {
            onTableFailed: qq => {
              Mc({
                site: rg.MODEL_FEED_SITE,
                error: qq
              }, (() => {}), Jq)
            },
            packUrl: qq => {
              var Eq, gq;
              return null !== (Eq = null === (gq = sA()) || void 0 === gq ? void 0 : gq.modelUrl(qq)) && void 0 !== Eq ? Eq : null
            }
          }),
          Xq = function(qq, Eq, gq) {
            const Yq = gq => {
              var Yq, lq;
              return null !== (Yq = null === (lq = Eq()) || void 0 === lq ? void 0 : lq.drawnUrl(gq)) && void 0 !== Yq ? Yq : qq.url(gq)
            };
            return (0, CY.h)((0, JY.p)(Yq), gq)
          }(Rq, (() => dm), sA),
          wq = new JY.g(Xq, (qq => {
            console.warn(`${VO} image ${qq.key.kind}:${qq.key.index}:${qq.key.word} failed`, qq.error)
          }));
        Pm = wq, Qm = new XY(hq, Xq, ((qq, Eq) => {
          void 0 === Eq ? console.warn(`${VO} ${qq}`) : wA(qq, Eq)
        }));
        const Kq = new KY.e(Rq, function(qq, Eq) {
          let Yq = !1,
            lq = null,
            Oq = null;
          const mq = {
              onUnavailable: (gq, Yq) => {
                Oq ??= Mc({
                  site: rg.MODEL_POOL_SITE,
                  error: gq,
                  urls: Yq
                }, (() => {
                  (0, rg.reportModelPoolFailure)(gq, qq)
                }), Eq)
              },
              onDecoderFailed: (gq, Yq) => {
                const lq = () => {
                  (0, rg.reportDracoDecoderFailure)(gq, qq)
                };
                void 0 !== Yq ? Mc({
                  site: rg.MODEL_POOL_SITE,
                  error: gq,
                  urls: Yq
                }, lq, Eq) : lq()
              },
              onWorkerLost: Eq => {
                (0, rg.reportWorkerLost)(rg.MODEL_POOL_SITE, Eq, qq)
              },
              onModuleRetry: (Eq, gq) => {
                (0, rg.reportModelsModuleRetry)(Eq, gq, qq)
              }
            },
            xq = gq.e(42).then((() => gq(43119))).then((qq => {
              let {
                pageModelPool: Eq
              } = qq;
              if (Yq) return null;
              const gq = Eq(mq);
              return lq = gq.unlisten, jm = gq.pool, gq.pool
            }), (qq => (Yq || mq.onUnavailable(qq, void 0), null)));
          return Hm = () => {
            var qq;
            Yq = !0, null === (qq = lq) || void 0 === qq || qq(), jm = null
          }, (qq, Eq) => xq.then((gq => {
            var Yq;
            return null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.build(qq, Eq)) && void 0 !== Yq ? Yq : (0, DY.s)(qq, "the model workers did not load")
          })).then((qq => null !== Oq && (0, DY.k)(qq) ? Oq.then((() => qq)) : qq))
        }(vq, Jq), (qq => {
          qq.startup ? (Pc(), Mc({
            site: rg.MODEL_FEED_SITE,
            error: qq.error,
            urls: "" === qq.url ? void 0 : [qq.url]
          }, (() => {
            (0, rg.reportModelFailure)(qq, vq)
          }))) : (0, rg.reportModelFailure)(qq, vq)
        }), {
          onWritten: (qq, Eq) => {
            wq.glbWritten(qq, Eq)
          },
          onTaken: (qq, Eq) => {
            wq.glbTaken(qq, Eq)
          },
          onPackFileFailed: (qq, Eq) => {
            console.warn(`${VO} the texture pack's model file ${qq} failed: the shipped one loads`, Eq)
          }
        });
        dm = Kq;
        const Cq = new UY.e(hq);
        KO = Cq, Cq.swap((qq => {
          const Eq = () => {
            (0, rg.reportTerrainTextureFailure)(qq, vq)
          };
          if (nx) return void Eq();
          const gq = () => !nx,
            Yq = null === qq.url ? void 0 : [qq.url];
          Mc({
            site: Eg.D,
            error: qq.error,
            urls: Yq
          }, Eq, gq)
        })).then((qq => {
          null !== qq && (qq || hq.isStopped || console.warn(`${VO} the core refused the terrain textures: terrain draws untextured`), bm(hq))
        }));
        const Iq = new GE(hq, ((qq, Eq) => {
          console.warn(`${VO} ${qq}`, ...void 0 === Eq ? [] : [Eq])
        }));
        Iq.feed(), null !== Bq && function(qq, Eq, Yq, lq, Oq, mq) {
          let xq = null,
            Aq = null,
            cq = !1;
          const uq = {
            textures: null,
            stop: () => {
              var qq, Eq;
              cq = !0, null === (qq = Aq) || void 0 === qq || qq(), null === (Eq = xq) || void 0 === Eq || Eq(), IY.b.setSettled(null), null !== eO && Ix.clear(eO)
            }
          };
          wO = uq, Aq = KA().follow((Aq => {
            null !== Aq && Promise.all([gq.e(194), gq.e(45)]).then((() => gq(43081))).then((gq => {
              let {
                PackTextures: Bq
              } = gq;
              if (cq || qq.isStopped) return;
              const Wq = new Bq({
                feed: Aq,
                terrain: Eq,
                backend: Yq,
                stopped: () => qq.isStopped,
                landed: () => {
                  bm(qq)
                },
                packSwapped: () => {
                  (0, CY.g)(lq), mq.feed((() => async function(qq) {
                    const Eq = null === qq ? null : await qq.averageColours;
                    return null === Eq ? LE() : pE(Eq)
                  }(Wq.assets))), (0, wY.k)(Wq.files()), Oq.refresh().then((qq => {
                    null !== qq && console.info(`${VO} texture pack models: ${qq.resent} of ${qq.delivered} files written again, ${qq.refetched} refetched`)
                  }))
                },
                settled: (qq, Eq, gq) => {
                  var Yq;
                  (IY.b.setSettled({
                    state: qq,
                    files: Eq
                  }), null === qq.gameSource && (0, dg.b)(qq.pack, gq), gq) || function(qq) {
                    const Eq = eO;
                    null !== Eq && Ix.apply(Eq, qq).then((Eq => {
                      Eq && qq && console.info(`${VO} the texture pack's animations are in (${Object.keys(qq).length} files)`)
                    }))
                  }(null === (Yq = qq.pack) || void 0 === Yq ? void 0 : Yq.animations)
                },
                settling: () => {
                  IY.b.setSettled(null)
                },
                warn: wA,
                maxTextureSize: () => Promise.resolve((0, qg.Q)(document.createElement("canvas")))
              });
              uq.textures = Wq, xq = Wq.start()
            }), (qq => {
              console.warn(`${VO} the texture pack's terrain didn't load: the built atlas stays`, qq)
            }))
          }))
        }(hq, Cq, Bq, wq, Kq, Iq);
        const eq = () => {
            hq.setTextureLayers("")
          },
          Dq = qq => {
            (oE ??= gq.e(51).then((() => gq(43123))).then((qq => {
              let {
                TEXTURE_NAMES: Eq
              } = qq;
              return Eq
            }), (qq => {
              throw oE = null, qq
            })), oE).then((qq => {
              hq.setTextureLayers(qq) || hq.isStopped || (console.warn(`${VO} the core refused the texture names: textured Boxes draw textureNotFound`), eq())
            }), (Eq => {
              if (hq.isStopped) return;
              const [gq, ...Yq] = qq;
              void 0 === gq ? Mc({
                site: rg.TEXTURE_NAMES_SITE,
                error: Eq
              }, (() => {
                console.warn(`${VO} the texture names didn't load, so textured Boxes draw textureNotFound`, Eq), eq()
              }), Jq) : setTimeout((() => {
                Dq(Yq)
              }), gq)
            }))
          };
        if (Dq(zO), null !== Bq && !await async function(qq, Eq, gq, Yq, Oq, mq) {
            var xq;
            const Aq = (0, qg.B)(gq);
            if (null === Aq) return qq.crash(jO, new Error(`this ${Yq} build has no openRenderer`)), !1;
            let cq;
            ax = Aq;
            try {
              var uq, Bq, Wq, Nq;
              const lq = null !== (uq = null === (Bq = UO) || void 0 === Bq ? void 0 : Bq.pagePreviews()) && void 0 !== uq ? uq : null,
                xq = null !== (Wq = null === (Nq = UO) || void 0 === Nq ? void 0 : Nq.previewModule(gq)) && void 0 !== Wq ? Wq : null;
              if (null === lq || null === xq) {
                null === lq || void 0 === lq || lq.endSession(!1), cq = (0, iE.h)().sampleCount, await (0, qg.e)(Eq, Aq, mq, UA, cq, await Oq);
                const qq = (0, qg.l)(gq);
                null === qq && console.warn(`${VO} this ${Yq} build has no image registry: sky and model images won't show`), (0, RY.e)(qq)
              } else {
                (0, ml.c)() && await (0, Fq.o)();
                const gq = (0, ml.K)();
                if (null !== gq) {
                  const Eq = (0, qg.O)(Aq);
                  return qq.crash(rg.RENDER_RELOAD_SITE, new Error(`${gq}${void 0===Eq?"":` (${Eq.message})`}`)), !1
                }
                cq = await lq.bindSession(xq, Eq, (async qq => (0, qg.w)(Aq, jO, mq, qq, UA, await Oq)))
              }
            } catch (lq) {
              return qq.crash(jO, lq), !1
            }(function(qq, Eq) {
              const gq = qq,
                {
                  requestCapture: Yq,
                  takeCapture: lq
                } = gq;
              if ("function" !== typeof Yq || "function" !== typeof lq) return;
              const Oq = {
                request() {
                  Yq.call(gq, Eq)
                },
                take() {
                  var qq;
                  return null !== (qq = lq.call(gq)) && void 0 !== qq ? qq : null
                }
              };
              window[Nl] = Oq
            })(Eq, cq), Qx = cq, Wx = !0;
            const aq = performance.now();
            return Nx.boundAtMs = null !== (xq = (0, ml.L)()) && void 0 !== xq ? xq : aq, Nx.indirectHangs = (0, ml.z)(), console.info(`${VO} ${Yq} renderer bound at ${Math.round(aq)} ms`), !qq.isStopped
          }(hq, rq, Qq, Bq, Nq, Vq)) return null;
        if (null !== Bq) {
          var qE, EE, gE;
          (0, uE.H)(Bq);
          const qq = () => !hq.isStopped && Vc();
          gq.e(186).then((() => gq(9160))).then((Eq => {
            let {
              devTools: gq
            } = Eq;
            hq.isStopped || gq.setHost(function(qq) {
              return {
                tools: Ol,
                async downloadScene(Eq, gq) {
                  let {
                    width: Yq,
                    height: lq,
                    colouring: Oq
                  } = gq;
                  "screenshot" === Eq && null === Oq ? await (0, gl.e)(qq, Yq, lq) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(qq, Eq) {
              return {
                canvas: qq,
                maxTextureSize: Yl,
                drawing: Eq,
                resize: (qq, Eq) => {
                  (0, ng.u)(JE.sb.Resize, 0, qq, Eq, (0, ng.k)(1))
                },
                restoreSize: () => {
                  const Eq = (0, iE.p)(qq);
                  null !== Eq && (0, ng.u)(JE.sb.Resize, 0, Eq.cssWidth, Eq.cssHeight, (0, ng.k)(Eq.renderScale))
                },
                onFrameDrawn: qq => (ll.add(qq), () => {
                  ll.delete(qq)
                })
              }
            }(Vq, qq)))
          }), (qq => {
            console.warn(`${VO} the developer tools didn't load: no captures this session`, qq)
          }));
          const Eq = "webgpu" === Bq && null !== (qE = null === cq || void 0 === cq || null === (EE = cq.adapter) || void 0 === EE ? void 0 : EE.vendor) && void 0 !== qE ? qE : null;
          yx = {
            backend: Bq,
            canvas: Vq,
            fallbackReason: null !== (gE = null === cq || void 0 === cq ? void 0 : cq.reason) && void 0 !== gE ? gE : null,
            adapterVendor: Eq
          }, Ec();
          try {
            (0, wg.s)(Bq, Vq, Eq)
          } catch (lq) {
            (0, wg.t)(), console.error(`${VO} the quality steps didn't start`, lq)
          }
        }
        const {
          storagePullBreaks: YE,
          splitPassBreaks: lE
        } = await Nq;
        lE && console.warn(`${VO} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const WE = YE ? Uq.d : (0, Uq.h)(cq, (0, hE.f)());
        if ((0, Zl.s)("webgpuloss")) {
          var jE, HE;
          const qq = {
            backend: Bq,
            reason: null !== (jE = null === cq || void 0 === cq ? void 0 : cq.reason) && void 0 !== jE ? jE : null,
            source: null !== (HE = null === cq || void 0 === cq ? void 0 : cq.source) && void 0 !== HE ? HE : null,
            storagePullBreaks: YE,
            noWebGpu: WE.messageKey
          };
          (0, fl.b)((Eq => {
            Eq.noteWasmPick(qq)
          }))
        }
        const QE = "webgpu" === Bq && !YE;
        if (tm = (0, Uq.k)(QE ? hq : null, QE && null !== (mq = null === (xq = UO) || void 0 === xq ? void 0 : xq.pagePreviews().pN) && void 0 !== mq ? mq : null, WE, wA), Rx) return null;
        if (zq.reserveAtJoin((0, GY.l)(null !== iq && void 0 !== iq ? iq : ag.f)), hq.isStopped) return null;
        const tE = qq => {
          if (null !== tx) try {
            tx.animationFrame(qq)
          } catch (lq) {
            lc(lq)
          }
          if (function(qq, Eq) {
              return Eq && !Rx && !Mm && dc() && Vc() && qq.framePaces(performance.now())
            }(hq, Gx)) {
            if (hq.writePendingInput(), (0, yq.f)(qq, uc), gc(!1, qq), null !== tx) try {
              tx.framePaced()
            } catch (lq) {
              lc(lq)
            }
            requestAnimationFrame(tE)
          } else cc(hq, Gx, "budget") && ((0, bE.g)(hq.lastFrameKind) && Vc() && (0, yq.f)(qq, uc), gc(Gx && zx, qq), Sx.frame(hq.lastFrameKind, Gx && Vc(), qq), yc(hq), zq.afterFrame(), requestAnimationFrame(tE))
        };
        requestAnimationFrame(tE);
        return function(qq) {
          if (qq.has("inputLog") && (0, YY.h)((qq => {
              let {
                action: Eq,
                down: gq,
                press: Yq
              } = qq;
              console.info(`${OY} input ${Eq} ${gq?"down":"up"} press ${Yq} at ${performance.now().toFixed(1)}`)
            })), qq.has("inputDump")) {
            const qq = [];
            xY = qq, Object.assign(window, {
              bloxdInputDump: () => qq.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Nm = function(qq, Eq) {
          let gq = null;
          const Yq = () => {
              null !== gq && (clearInterval(gq), gq = null)
            },
            lq = () => {
              document.hidden ? gq ??= setInterval((() => {
                cc(qq, !1, "budget") ? (yc(qq), Eq.afterFrame()) : Yq()
              }), TO) : Yq()
            };
          return document.addEventListener("visibilitychange", lq), lq(), () => {
            Yq(), document.removeEventListener("visibilitychange", lq)
          }
        }(hq, zq), hq
      }(Eq).then((qq => {
        var Eq;
        (Yq(IO), Em(null !== qq), null !== qq && (Hl = performance.now()), DO(qq), null === qq) ? null === (Eq = UO) || void 0 === Eq || Eq.pagePreviews().endSession(null === (0, mE.s)()): nm("booted")
      }), (qq => {
        Yq(IO), Em(!1), DO(null), Qc({
          site: HO,
          error: qq,
          header: null
        }, IO)
      }))
    }

    function Cx() {
      const qq = eO;
      null !== qq && Ux().then((Eq => {
        let {
          pageBuiltInAnimationPack: gq
        } = Eq;
        gq().provide(qq)
      }), (qq => {
        console.warn(`${VO} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, qq)
      }))
    }
    const Ix = new class {
      constructor(qq) {
        this.deps = qq, this.latest = 0, this.Fc = null
      }
      apply(qq, Eq) {
        return this.load(qq, Eq, 0)
      }
      async load(qq, Eq, gq) {
        var Yq;
        const lq = ++this.latest,
          Oq = this.deps.compiler;
        if (void 0 === Eq || null === Eq || "object" !== typeof Eq || 0 === Object.keys(Eq).length || null === Oq) return this.drop(qq), !1;
        if ((null === (Yq = this.Fc) || void 0 === Yq ? void 0 : Yq.module) === qq && (0, KE.be)(this.Fc.files, Eq)) return !1;
        try {
          const [gq, Yq] = await Promise.all([Oq(), this.deps.builtIns()]);
          if (lq !== this.latest) return !1;
          const mq = await gq(Eq, DE, {
            builtIns: Yq
          });
          if (lq !== this.latest) return !1;
          const xq = this.call(qq, mq);
          if (void 0 === xq) throw new eE("the compiled animations didn't read against the built-in pack");
          return this.Fc = {
              module: qq,
              files: Eq
            },
            function(qq) {
              for (let Eq = 0; Eq + 2 < qq.length; Eq += 3) {
                ("error" === qq[Eq] ? console.error : console.warn)(`Animation for the texture pack: ${qq[Eq+1]}: ${qq[Eq+2]}`)
              }
            }(xq), !0
        } catch (xq) {
          var mq;
          if (lq !== this.latest) return !1;
          this.drop(qq), 0 === gq && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", xq);
          const Yq = (null !== (mq = this.deps.retryAfterMs) && void 0 !== mq ? mq : IE)[gq];
          return void 0 === Yq || xq instanceof eE || (0, CE.g)(qq) || setTimeout((() => {
            lq === this.latest && this.load(qq, Eq, gq + 1)
          }), Yq), !1
        }
      }
      call(qq, Eq) {
        try {
          return qq.oYq(Eq)
        } catch (gq) {
          throw (0, CE.k)(qq, gq), gq
        }
      }
      clear(qq) {
        this.latest++, this.drop(qq)
      }
      drop(qq) {
        const Eq = this.Fc;
        if (this.Fc = null, (null === Eq || void 0 === Eq ? void 0 : Eq.module) === qq && !(0, CE.g)(qq)) try {
          this.call(qq, null)
        } catch {}
      }
    }({
      compiler: FE.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: qq
        } = await Ux();
        return qq().whenSet()
      },
      warn: wA
    });
    async function ex(qq, Eq) {
      let Yq = !1;
      await Dx({
        matchmake: async () => {
          const {
            guestJoinTarget: lq,
            guestJoinWithPack: Oq
          } = await gq.e(343).then((() => gq(43055)));
          return Yq ? lq(qq, Eq, IA()) : (Yq = !0, Oq(qq, Eq, (Eq => eA(qq, Eq)), IA))
        },
        onFailure: qq => {
          (0, rg.showJoinFailure)(qq, IO)
        },
        rejoin: aA,
        invalidateTrafficCode: VA
      })
    }
    async function Dx(qq) {
      let {
        matchmake: Eq,
        onFailure: gq,
        rejoin: lq,
        invalidateTrafficCode: Oq,
        pageReady: mq,
        signal: xq
      } = qq;
      const Aq = () => !0 === (null === xq || void 0 === xq ? void 0 : xq.aborted);
      let cq;
      const uq = IY.b.rejoinHold();
      Xm = null;
      const Bq = (0, Pg.M)("wasm", hc);
      let Wq = !1,
        Nq = performance.now();
      try {
        if (!await gm) return {
          kind: "stopped"
        };
        if (Aq()) return {
          kind: "lE"
        };
        Fx().catch((() => {}));
        let qq = await Eq();
        var Vq, dq;
        if (Nq = performance.now(), !Aq()) vc(null !== (Vq = null === (dq = qq.target.session) || void 0 === dq ? void 0 : dq.gameNameWithVariation) && void 0 !== Vq ? Vq : null);
        const gq = () => performance.now() - qq.matchedAt <= qq.freshMs,
          Yq = EA(qq.target).catch((() => {}));
        gq() && !Aq() && (cq = new fY(qq.target, {
          signal: xq
        }));
        const Oq = performance.now();
        if (null === await qm) return {
          kind: "stopped"
        };
        var jq, Hq;
        if (function(qq) {
            var Eq, gq;
            if (al.b.markGameEngineConstructed(), ol) return;
            ol = !0;
            const Yq = Math.max(qq, null !== (Eq = dl) && void 0 !== Eq ? Eq : qq);
            (0, Vl.l)("ready", Math.max(0, (null !== (gq = jl) && void 0 !== gq ? gq : Yq) - Yq) / 1e3)
          }(Oq), !Aq())
          if (null !== jl && null !== Hl ? ((0, aq.q)("wasm_loaded", jl), (0, aq.q)("wasm_core_ready", Hl)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), qq.target.session && function(qq) {
              const Eq = (0, KE.Yb)(qq);
              return "classic" !== Eq ? Jl.has(Eq) : !(0, YE.j)(qq) && !kl.has((0, KE.Tb)(qq))
            }(qq.target.session.gameNameWithVariation)) null === (jq = mm) || void 0 === jq || jq.prestart();
        if (await Yq, !gq() && !Aq()) null === (Hq = cq) || void 0 === Hq || Hq.rematched(), qq = await Eq(), Nq = performance.now();
        if (Aq()) return {
          kind: "lE"
        };
        const uq = await async function(qq) {
          var Eq, gq, Yq;
          let {
            signal: lq,
            rejoin: Oq = null,
            early: mq,
            pageReady: xq
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== lq && void 0 !== lq && lq.aborted) throw new DOMException("the join was left", "AbortError");
          const Aq = (cq = gx, uq = performance.now(), null !== cq && uq - cq < HY);
          var cq, uq;
          gx = null;
          const Bq = new AbortController,
            Wq = null !== (Eq = null === (gq = qq.session) || void 0 === gq ? void 0 : gq.gameNameWithVariation) && void 0 !== Eq ? Eq : null;
          vc(Wq), lA({
            controller: Bq,
            game: Wq
          }), Yx = null, null === (Yq = mx) || void 0 === Yq || Yq.abort(), mx = null, Ax = !1, cx = null, ux.clear();
          const Nq = () => {
            (0, QE.h)(Bq, (0, QE.e)(lq))
          };
          null === lq || void 0 === lq || lq.addEventListener("abort", Nq, {
            once: !0
          });
          try {
            var Vq, dq, jq;
            const Eq = await qm;
            if (null === Eq || Eq.isStopped || Rx) throw new Error("no core is running to join a game with");
            if (qq.session && null !== tm) {
              const Eq = await gA(tm.join(qq.session.gameNameWithVariation), Bq.signal);
              if ((0, Zl.s)("webgpuloss")) {
                const gq = qq.session.gameNameWithVariation,
                  Yq = tm.couldntRunInJoinedGame();
                (0, fl.b)((qq => qq.noteWasmJoin(gq, Eq, Yq)))
              }
              if (null !== Eq) throw new Uq.g(Eq)
            }
            const [, , , {
              joinRoom: gq
            }] = await gA(Promise.all([(0, tq.f)(Eq), EA(qq), null === xq || void 0 === xq ? void 0 : xq(), Fx()]), Bq.signal), Yq = qq.session, lq = Yq ? {
              ...HA,
              attachSocket: Eq => {
                const gq = vA(Eq, qq.endpoint);
                var lq;
                null !== gq && (Km = {
                  conn: gq,
                  info: Yq
                }, null === (lq = Cm) || void 0 === lq || lq(Yq.playerDbId));
                return gq
              }
            } : HA, cq = await gq(lq, qq, {
              signal: Bq.signal,
              early: mq
            }).catch((qq => {
              throw function(qq) {
                if (!(qq instanceof Tq.e)) return qq;
                if ("roomError" === qq.stage && null !== cx) return qA(new Tq.e(qq.message, qq.stage, qq.code, cx), qq);
                const Eq = "closed" === qq.stage && null !== lx ? ux.get(lx.conn) : void 0;
                return void 0 === Eq ? qq : qA(new Tq.e(qq.message, qq.stage, Eq.code), qq)
              }(qq)
            }));
            if (sm !== Bq) throw cq.leave(), new DOMException("the join was left", "AbortError");
            mA(cq), null === (Vq = Am) || void 0 === Vq || Vq.newGame();
            const uq = function(qq) {
              var Eq, gq;
              const {
                session: Yq
              } = qq, lq = void 0 === Yq ? qq.joinOptions.lobbyName : Yq.lobbyName;
              return {
                endpoint: qq.endpoint,
                game: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.gameNameWithVariation) && void 0 !== Eq ? Eq : qq.roomName,
                lobby: String(null !== lq && void 0 !== lq ? lq : null),
                postCookies: null !== (gq = qq.postCookies) && void 0 !== gq ? gq : null
              }
            }(qq);
            Fm.set(cq, uq), nY(uq);
            const Wq = performance.now(),
              Nq = {
                conn: cq.conn,
                rejoin: Oq,
                game: null !== (dq = null === (jq = qq.session) || void 0 === jq ? void 0 : jq.gameNameWithVariation) && void 0 !== dq ? dq : "",
                joinedAt: Wq,
                rejoinedAt: Aq ? Wq : null,
                overflow: null
              };
            Im = Nq,
              function(qq, Eq) {
                TA();
                const gq = {
                  endpoint: Eq,
                  roomId: qq.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Bg({
                    reconnect: (qq, Eq, Yq) => async function(qq, Eq, gq, Yq) {
                      const {
                        roomId: lq,
                        roomToken: Oq
                      } = SA(qq, Eq), mq = sO;
                      if (null === mq || mq.isStopped || Rx) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: xq
                      } = await gA(Fx(), gq), Aq = {
                        ...HA,
                        attachSocket: Eq => em !== qq || 0 === qq.heldConn ? (Eq.close(), null) : vA(Eq, qq.endpoint, !0)
                      };
                      return xq(Aq, qq.endpoint, lq, Oq, {
                        signal: gq,
                        onAttached: Yq
                      })
                    }(gq, qq, Eq, Yq),
                    releaseSeat: qq => {
                      !async function(qq, Eq) {
                        const {
                          roomId: gq,
                          roomToken: Yq
                        } = SA(qq, Eq);
                        try {
                          const {
                            leaveHeldSeat: Eq
                          } = await Fx();
                          await Eq(qq.endpoint, gq, Yq)
                        } catch (lq) {
                          console.warn(`${VO} the held seat of a game left while it reconnected couldn't be released`, lq)
                        }
                      }(gq, qq)
                    },
                    isLive: () => em === gq && null !== Im && !Rx,
                    uL: qq => {
                      Ex = qq, MA()
                    },
                    onReconnected: qq => {
                      ! function(qq) {
                        const Eq = Um;
                        if (null !== Eq && Eq !== qq) {
                          const gq = Fm.get(Eq);
                          void 0 !== gq && Fm.set(qq, gq), Tx === Eq && (Tx = qq), Eq.detach()
                        }
                        mA(qq)
                      }(qq)
                    },
                    onGaveUp: (qq, Eq) => {
                      ! function(qq, Eq, gq) {
                        var Yq, lq;
                        console.warn(`${VO} gave up reconnecting (${gq.reason}, ${gq.attempts} attempts)`, gq.lastError), (0, rg.reportReconnectGaveUp)(gq, IO);
                        const Oq = null !== (Yq = null === (lq = Im) || void 0 === lq ? void 0 : lq.rejoin) && void 0 !== Yq ? Yq : null;
                        zA(qq, "gaveUp"), AA();
                        const mq = {
                          code: qq.dropCode,
                          name: null,
                          reason: iO,
                          canReconnect: !Eq,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        jA(mq, Eq ? null : Oq, !1, {
                          reasonKey: ZO,
                          canPlayAgain: Eq
                        })
                      }(gq, qq, Eq)
                    }
                  })
                };
                em = gq, null !== Dm && Dm.conn === qq.conn && gq.resume.onInitialInfo(Dm)
              }(cq, qq.endpoint), performance.mark(QO), (0, aq.q)("wasm_joined", Wq), setTimeout((() => {
                Um === cq && (0, aq.g)()
              }), 0), Cx(), console.info(`${VO} joined ${qq.roomName} as ${cq.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const Hq = Yx;
            Yx = null, null !== Hq && BA(Nq, Hq.mask, Hq.frames);
            const oq = ux.get(cq.conn);
            return ux.clear(), void 0 !== oq && (mA(null), dA(cq.conn, oq.code, oq.reason)), cq
          } finally {
            var Hq;
            null === lq || void 0 === lq || lq.removeEventListener("abort", Nq), sm === Bq && OA(Um, null), (null === (Hq = lx) || void 0 === Hq ? void 0 : Hq.join) === Bq && (lx = null)
          }
        }(qq.target, {
          signal: xq,
          rejoin: lq(qq.target),
          early: cq,
          pageReady: mq
        });
        return Wq = !0, {
          kind: "joined",
          game: uq
        }
      } catch (Pq) {
        if (Pq instanceof DOMException && "AbortError" === Pq.name || Aq()) return {
          kind: "lE"
        };
        if (Rx) return {
          kind: "stopped"
        };
        if (Ax && (Ax = !1, await Oq().catch((qq => {
            console.warn(`${VO} the cached traffic code could not be dropped`, qq)
          }))), null === await qm) return {
          kind: "stopped"
        };
        if (Pq instanceof Uq.g) return gq(Pq, performance.now() - Nq), {
          kind: "failed",
          error: Pq,
          reloading: !1
        };
        if (Pq instanceof Tq.e && Pq.code === Yq.b.wasmClientNotAllowed.code && px) return RA("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: Pq,
          reloading: !0
        };
        const qq = Pq instanceof Tq.e && Pq.code === Yq.b.outdatedVersion.code,
          Eq = () => null === Um,
          lq = await Mc({
            site: rg.JOIN_SITE,
            error: Pq,
            outdated: qq
          }, (() => {
            gq(Pq, performance.now() - Nq)
          }), Eq);
        return {
          kind: "failed",
          error: Pq,
          reloading: lq
        }
      } finally {
        var oq;
        Wq || Bq.end(), IY.b.releaseHold(uq);
        const qq = null === (oq = cq) || void 0 === oq ? void 0 : oq.release();
        qq && (0, rg.reportUnusedSeat)(qq, IO)
      }
    }

    function qA(qq, Eq) {
      return qq.stack = Eq.stack, qq
    }

    function EA(qq) {
      return qq.session ? (0, tq.j)(CO, qq.session.gameNameWithVariation) : Promise.resolve()
    }

    function gA(qq, Eq) {
      return (0, QE.o)(Eq), new Promise(((gq, Yq) => {
        const lq = () => {
          Yq((0, QE.e)(Eq))
        };
        Eq.addEventListener("abort", lq, {
          once: !0
        }), qq.then((qq => {
          Eq.removeEventListener("abort", lq), gq(qq)
        }), (qq => {
          Eq.removeEventListener("abort", lq), Yq(qq)
        }))
      }))
    }

    function YA() {
      lA(null)
    }

    function lA(qq) {
      var Eq, gq, Yq;
      (function() {
        const qq = em;
        null !== qq && zA(qq, "left")
      }(), null === lm || lm.left) || (lm.left = !0, null === (Yq = (0, tq.e)()) || void 0 === Yq || Yq.socketLeft(), (0, Wq.w)({
        websocketUrl: null
      }));
      sm && (0, QE.h)(sm, new DOMException("the join was left", "AbortError")), AA(null !== qq), null === (Eq = tm) || void 0 === Eq || Eq.leave();
      const lq = Um;
      null !== qq && IY.b.setGame(qq.game), OA(null, null !== (gq = null === qq || void 0 === qq ? void 0 : qq.controller) && void 0 !== gq ? gq : null), null === lq || void 0 === lq || lq.leave(), xA(0), (0, jE.g)()
    }

    function OA(qq, Eq) {
      Um = qq, sm = Eq, null === Um && null === sm && IY.b.setGame(void 0)
    }

    function mA(qq) {
      OA(qq, sm)
    }

    function xA(qq) {
      const Eq = sO;
      return null !== pO && !Rx && null !== Eq && !Eq.isStopped && (!!pO(Tq.j, 0, (0, Tq.y)(qq)) && (Sm = !0, 0 === qq || Mm || cc(Eq, !1, "all"), !0))
    }

    function AA() {
      var qq, Eq;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Pg.e)();
      const gq = null !== (qq = null === (Eq = Im) || void 0 === Eq ? void 0 : Eq.overflow) && void 0 !== qq ? qq : null;
      Im = null, null !== gq && (0, rg.reportEventOverflow)(gq, IO)
    }

    function cA() {
      null !== Um || null !== sm ? YA() : hA()
    }

    function uA(qq, Eq) {
      console.warn(`${VO} the event buffer refused records in ${Eq} frames (categories ${qq})`), Rx || (null !== Im ? BA(Im, qq, Eq) : null !== sm && function(qq, Eq, gq) {
        var Yq;
        const lq = function(qq, Eq) {
          return null === qq ? "drop" : qq.activated ? "keep" : 0 !== (Eq & kE.t.NetSession) ? "fail" : "drop"
        }((null === (Yq = lx) || void 0 === Yq ? void 0 : Yq.join) === qq ? lx : null, Eq);
        "keep" === lq ? Yx = {
          mask: Eq,
          frames: gq
        } : "fail" === lq && (0, QE.h)(qq, new Error("the join's net session was lost to an event overflow"))
      }(sm, qq, Eq))
    }

    function BA(qq, Eq, gq) {
      const Yq = qq.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Yq.frames += gq, Yq.acks++, Yq.mask |= Eq;
      const lq = function(qq, Eq, gq) {
        if (0 === (qq & kE.t.NetSession)) return "none";
        const Yq = null !== Eq.rejoinedAt && gq - Eq.rejoinedAt < oY;
        return null === Eq.rejoin || Yq ? "fail" : "rejoin"
      }(Eq, qq, performance.now());
      "none" !== lq && queueMicrotask((() => {
        if (Im !== qq) return;
        const Eq = "rejoin" === lq && performance.now() - Ox >= Mq.f;
        Yq.outcome = Eq ? "rejoined" : "failed", jA(function(qq, Eq) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: qq,
            automaticallyReconnect: Eq,
            requiresRefresh: !1
          }
        }(null !== qq.rejoin, Eq), qq.rejoin, Eq), YA(), Eq && (gx = performance.now())
      }))
    }

    function WA(qq) {
      Gx = qq, Lx && NA(Lx, qq)
    }

    function NA(qq, Eq) {
      qq.style.visibility = Eq ? "visible" : "hidden"
    }

    function aA(qq) {
      var Eq;
      const gq = qq.roomName,
        Yq = null !== (Eq = qq.joinOptions.lobbyName) && void 0 !== Eq ? Eq : null;
      return () => {
        ex(gq, Yq)
      }
    }

    function VA() {
      return gq.e(343).then((() => gq(43055))).then((qq => {
        let {
          invalidateGuestTrafficCode: Eq
        } = qq;
        return Eq()
      })).catch((qq => {
        console.warn(`${VO} the cached traffic code could not be dropped`, qq)
      }))
    }

    function dA(qq, Eq, gq) {
      var lq, Oq;
      let mq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Rx) return;
      if ((null === (lq = Im) || void 0 === lq ? void 0 : lq.conn) !== qq) return void(null !== sm && ux.set(qq, {
        code: Eq,
        reason: gq
      }));
      const {
        rejoin: xq,
        game: Aq,
        joinedAt: cq
      } = Im;
      AA(), TA();
      const uq = (0, Mq.j)(Eq, (0, QY.g)(qq));
      if (console.info(`${VO} the game's connection closed with code ${Eq} (${null!==(Oq=uq.name)&&void 0!==Oq?Oq:"unrecognised"})`), Eq === Yq.b.gameOrPluginKick.code || mq || (0, rg.reportDisconnect)(uq, IO, {
          closeReason: gq,
          sinceJoinedMs: performance.now() - cq,
          game: Aq
        }), uq.requiresRefresh) {
        const qq = "outdatedVersion" === uq.name,
          gq = new Error(`the game's connection closed with code ${Eq}`),
          Yq = () => null === Im && null === sm;
        return void Mc({
          site: rg.JOIN_SITE,
          error: gq,
          outdated: qq
        }, (() => {
          Yq() && jA(uq, null, !1)
        }), Yq)
      }
      const Bq = uq.canReconnect ? xq : null,
        Wq = null !== Bq && uq.automaticallyReconnect && performance.now() - Ox >= Mq.f;
      jA(uq, Bq, Wq)
    }

    function jA(qq, Eq, gq) {
      var Yq;
      let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (Jx) return;
      IY.b.unwantedLeave(gq && null !== Eq && 0 === xx.size), null === (Yq = mx) || void 0 === Yq || Yq.abort();
      const Oq = new AbortController;
      mx = Oq;
      const mq = null === Eq ? null : () => {
        Oq.signal.aborted || (Oq.abort(), Eq())
      };
      if (gq && null !== mq) {
        Ox = performance.now();
        const qq = setTimeout(mq, Mq.e);
        Oq.signal.addEventListener("abort", (() => {
          clearTimeout(qq)
        }))
      }
      const xq = {
        code: qq.code,
        name: qq.name,
        reason: qq.reason,
        reasonKey: lq.reasonKey,
        reconnect: mq,
        reconnecting: gq,
        requiresRefresh: qq.requiresRefresh,
        canPlayAgain: lq.canPlayAgain
      };
      if (xx.size > 0)
        for (const cq of [...xx]) try {
          cq(xq)
        } catch (Aq) {
          console.error(`${VO} an unwanted-leave listener threw`, Aq)
        } else dY((0, NY.h)(qq, null !== mq, gq), Oq.signal).then((Eq => {
          Eq && (null !== mq ? mq() : qq.requiresRefresh && (0, Fq.k)())
        }))
    }
    const HA = {
      attachSocket: qq => vA(qq),
      onConnection: qq => (Bx.add(qq), () => {
        Bx.delete(qq)
      }),
      sendRaw: (qq, Eq) => {
        const gq = lm;
        return null !== gq && gq.conn === qq && oc(gq, Eq)
      },
      leaveRoom: xA,
      closeSocket: qq => {
        var Eq;
        (null === (Eq = lm) || void 0 === Eq ? void 0 : Eq.conn) === qq && hA()
      },
      flushNet: nA
    };

    function oA(qq) {
      var Eq;
      let {
        aux: gq,
        payload: Yq
      } = qq;
      null === (Eq = sO) || void 0 === Eq || Eq.queueOptions(gq, Yq)
    }

    function PA(qq, Eq) {
      oA(function(qq, Eq) {
        return cl = qq ? {
          preventMovement: Eq
        } : null, qq ? ul(Eq) : {
          aux: JE._b.AdEnd,
          payload: Al
        }
      }(qq, Eq))
    }

    function QA(qq) {
      var Eq;
      Jm = qq, null === (Eq = sO) || void 0 === Eq || Eq.setUiPrefs(qq)
    }

    function yA(qq, Eq) {
      CO.setMaster(qq, Eq)
    }

    function tA(qq) {
      var Eq;
      km = qq, null === (Eq = sO) || void 0 === Eq || Eq.setEnvPrefs(qq)
    }

    function rA(qq) {
      var Eq;
      Rm = qq, null === (Eq = sO) || void 0 === Eq || Eq.setLookPrefs(qq)
    }

    function vA(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(qq.url).origin,
        Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (qq.readyState === WebSocket.CLOSING || qq.readyState === WebSocket.CLOSED) return console.warn(`${VO} a closing or closed socket can't be attached`), null;
      const lq = sO;
      if (!lq || lq.isStopped) return console.warn(`${VO} no core is running to attach a socket to`), qq.close(), null;
      if (null === (0, tq.e)()) return console.warn(`${VO} the game has not started to attach a socket to`), qq.close(), null;
      if (im > JE.p) return console.warn(`${VO} this core has attached all the sockets it can; reload to play on`), qq.close(), null;
      if (Sm && !Mm && (cc(lq, !1, "all"), lq.isStopped || Rx)) return qq.close(), null;
      hA();
      const Oq = im++;
      if (!LA(lq, "open", Oq, Yq ? JE.Wb.Resume : 0)) return qq.close(), null;
      Yq || dE.c.reset(), lx = null === sm ? null : {
        join: sm,
        conn: Oq,
        activated: !1
      }, qq.binaryType = "arraybuffer";
      const mq = new Wg.b((() => {
          ! function(qq, Eq) {
            if (lm !== Eq || qq.isStopped || null === ZA(Eq, nO)) return;
            Eq.detach(), lm = null, iA(qq, Eq, nO, "", !0), Eq.ws.close()
          }(lq, xq)
        })),
        xq = {
          ws: qq,
          conn: Oq,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Yq,
          token: null,
          detach: () => {
            mq.dispose(), qq.removeEventListener("message", Aq), qq.removeEventListener("open", cq), qq.removeEventListener("close", uq)
          }
        },
        Aq = qq => {
          if (qq.data instanceof ArrayBuffer) {
            var Eq;
            const gq = new Uint8Array(qq.data);
            mq.heard(), xq.token = null !== (Eq = (0, Ng.e)(gq)) && void 0 !== Eq ? Eq : xq.token,
              function(qq, Eq, gq) {
                bc(qq, (() => {
                  qq.rings.net.writeFrame(Eq, gq) || qq.crash(Eg.w, `a socket frame of ${gq.byteLength} bytes did not fit the net-in ring`)
                }));
                const Yq = qq.rings.net.cursor >= vO;
                (Yq || qq.netWrittenSinceFrame >= rO || document.hidden && performance.now() - Zm >= TO) && cc(qq, !1, "budget")
              }(lq, Oq, gq)
          }
        },
        cq = () => {
          Yq || (0, aq.q)("wasm_socket_open", performance.now());
          for (const Eq of xq.pending.splice(0)) qq.send(Eq);
          xq.pendingBytes = 0
        },
        uq = qq => {
          if (lm === xq && lq.rings.net.cursor > 0 && cc(lq, !1, "all"), lm === xq) {
            if (xq.detach(), lm = null, iA(lq, xq, qq.code, qq.reason) || bA(lq, xq)) return;
            LA(lq, "close", Oq), fA(Oq, xq.left), dA(Oq, qq.code, qq.reason)
          }
        };
      return qq.addEventListener("message", Aq), qq.addEventListener("open", cq), qq.addEventListener("close", uq), lm = xq, null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.socketAttached(Oq), (0, Wq.w)({
        websocketUrl: gq
      }), Oq
    }

    function hA() {
      const qq = lm;
      if (!qq) return;
      const Eq = sO,
        gq = qq.resume;
      gq && (nA(), lm !== qq) || (lm = null, qq.detach(), qq.ws.close(), null !== Eq && (bA(Eq, qq) || gq && iA(Eq, qq, bO)) || (null !== Eq && LA(Eq, "close", qq.conn), fA(qq.conn, qq.left)))
    }

    function nA() {
      const qq = sO;
      null !== qq && !qq.isStopped && !Rx && !Mm && qq.rings.net.cursor > 0 && cc(qq, !1, "all")
    }

    function bA(qq, Eq) {
      var gq;
      if (!Eq.resume) return !1;
      const Yq = em;
      return null !== Yq && null !== Eq.token && "" !== Eq.token && (Yq.pendingHold = {
        conn: Eq.conn,
        token: `${Yq.roomId}:${Eq.token}`
      }), LA(qq, "close", Eq.conn), null === (gq = (0, tq.e)()) || void 0 === gq || gq.socketDetached(Eq.conn), !0
    }

    function iA(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Oq = ZA(Eq, gq);
      if (null === Oq) return !1;
      const {
        Fc: mq,
        token: xq,
        game: Aq,
        joinedAt: cq
      } = Oq;
      if (!LA(qq, "close", Eq.conn, JE.r.Held)) return !0;
      console.warn(`${VO} the game's connection ${lq?"went silent":`dropped with code ${gq}`}, holding it`);
      const uq = {
        closeReason: Yq,
        sinceJoinedMs: performance.now() - cq,
        game: Aq
      };
      return (0, rg.reportDisconnect)((0, Mq.j)(gq), IO, uq, lq ? "silent" : void 0), mq.heldConn = Eq.conn, mq.dropCode = gq, mq.pendingHold = {
        conn: Eq.conn,
        token: `${mq.roomId}:${xq}`
      }, Mm || cc(qq, !1, "all"), !0
    }

    function ZA(qq, Eq) {
      const gq = em,
        lq = Im,
        Oq = qq.token;
      return null === gq || null === lq || Rx || qq.left || lq.conn !== qq.conn || null === Oq || "" === Oq ? null : (0, Yq.g)(Eq) && gq.resume.canHoldSeat() ? {
        Fc: gq,
        token: Oq,
        game: lq.game,
        joinedAt: lq.joinedAt
      } : null
    }

    function fA(qq, Eq) {
      var gq;
      null === (gq = (0, tq.e)()) || void 0 === gq || gq.closeGame(qq), (0, xl.e)().close(qq), Eq || (0, Wq.w)({
        websocketUrl: null
      })
    }

    function MA() {
      const qq = Ex;
      if (null === qq) return;
      const Eq = (0, tq.e)();
      Rx || null === Eq || Eq.uL(qq) ? Ex = null : performance.now() - pm.pause >= MO && (pm.pause = performance.now(), console.warn(`${VO} the cmd ring had no room for SetPaused(${qq}): written before the next frame`))
    }

    function TA() {
      const qq = em;
      em = null, null === qq || void 0 === qq || qq.resume.dispose()
    }

    function zA(qq, Eq) {
      var gq, Yq;
      const {
        heldConn: lq
      } = qq, Oq = qq.resume.resumingConn;
      qq.heldConn = 0, qq.pendingHold = null, em === qq && (em = null), "left" === Eq ? qq.resume.leave() : qq.resume.dispose(), 0 === qx || (null === (gq = lm) || void 0 === gq ? void 0 : gq.conn) !== qx || "left" === Eq && (null === (Yq = Um) || void 0 === Yq ? void 0 : Yq.conn) === qx || GA(qx), "gaveUp" === Eq && 0 !== Oq && GA(Oq), 0 !== lq && "refused" !== Eq && (console.info(`${VO} the game held through its drop ${"left"===Eq?"was left":"is given up"}`), null === sO || sO.isStopped || LA(sO, "close", lq), fA(lq, !1))
    }

    function SA(qq, Eq) {
      const gq = Eq.indexOf(":");
      return {
        roomId: gq < 0 ? qq.roomId : Eq.slice(0, gq),
        roomToken: Eq.slice(gq + 1)
      }
    }

    function pA(qq) {
      var Eq;
      Dm = qq, qq.conn === qx && (qx = 0);
      const gq = em;
      null !== gq && (null === (Eq = Im) || void 0 === Eq ? void 0 : Eq.conn) === qq.conn && gq.resume.onInitialInfo(qq)
    }

    function GA(qq) {
      var Eq;
      const gq = lm;
      (null === gq || void 0 === gq ? void 0 : gq.conn) === qq && (gq.left = !0, null === (Eq = (0, tq.e)()) || void 0 === Eq || Eq.socketLeft(), (0, Wq.w)({
        websocketUrl: null
      }), xA(qq) ? setTimeout((() => {
        lm === gq && hA()
      }), Tq.h) : hA())
    }

    function LA(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lq = !1;
      return bc(qq, (() => {
        const {
          net: Oq
        } = qq.rings;
        lq = "open" === Eq ? Oq.writeOpen(gq, Yq) : Oq.writeClose(gq, Yq), lq || qq.crash(Eg.w, `a socket ${Eq} did not fit the net-in ring`)
      })), lq
    }

    function JA(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (kA()) {
        const Yq = "browser" === qq && (0, ml.U)() ? "blockedAfterLoss" : "unsupported";
        return (0, rg.reportUnsupportedFallback)(qq, Yq, Eq, gq), void RA(`the wasm client can't run here (${Eq}; ${Yq})`, Yq)
      }(0, rg.showUnsupported)(qq, "unsupported", Eq, gq)
    }

    function kA() {
      return px && "wasm" !== (0, NE.g)(window.location.search)
    }

    function RA(qq, Eq) {
      console.warn(`${VO} ${qq}: reloading on the JS client`), null !== Eq && (0, NE.u)(Eq), (0, NE.q)(null === Eq ? "reloadOntoJs" : "decline");
      const gq = () => {
        (0, Fq.i)(NE.w)
      };
      (0, rg.flushCrashReports)(Fq.e).then(gq, gq)
    }

    function UA(qq, Eq, gq, Yq) {
      return Vx(qq, Eq, gq, Yq)
    }

    function FA() {
      null === Hx || null === sO || sO.isStopped || Rx || null !== om || null === pO || (om = Hx(pO, wA, KA().follow))
    }

    function sA() {
      var qq, Eq, gq;
      return null !== (qq = null === (Eq = wO) || void 0 === Eq || null === (gq = Eq.textures) || void 0 === gq ? void 0 : gq.files()) && void 0 !== qq ? qq : null
    }

    function XA(qq) {
      KA().follow((Eq => {
        null !== Eq && Promise.all([Promise.all([gq.e(194), gq.e(45)]).then((() => gq(43094))), (0, ml.P)()]).then((qq => {
          let [{
            followPagePackFiles: gq
          }, Yq] = qq;
          const lq = null === Yq || (0, qg.p)(Yq) ? "webgl" : Yq.backend;
          gq(Eq, CY.d, lq, (qq => {
            CY.d.setPageFiles(qq)
          }), wA)
        }), (Eq => {
          console.warn(`${VO} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, Eq), qq()
        }))
      }))
    }

    function wA(qq, Eq) {
      console.warn(`${VO} ${qq}`, Eq)
    }

    function KA() {
      return XO ??= new yl({
        load: qq => Promise.all([gq.e(194), gq.e(52)]).then((() => gq(43103))).then((Eq => {
          let {
            startPageTexturePackFeed: gq
          } = Eq;
          return gq(wA, qq)
        })),
        store: tg.f,
        SN: qq => {
          qm.then((() => {
            (0, rg.reportTexturePackFeedLoadFailure)(qq, IO)
          }))
        }
      }), XO
    }
    const CA = qq => KA().follow(qq);

    function IA() {
      return KA().loaded()
    }
    const eA = function(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          lq = 0;
        return async function(Oq, mq) {
          let xq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Aq = ++lq,
            cq = Yq() + Eq,
            uq = await
          function(qq, Eq) {
            let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Yq => {
              const lq = setTimeout((() => {
                Yq(null), qq.then((qq => {
                  null !== qq && (qq.joinedWithout(), gq(qq))
                }))
              }), Eq);
              qq.then((qq => {
                clearTimeout(lq), Yq(qq)
              }))
            }))
          }(qq(Oq), Eq, (qq => {
            Aq === lq && xq() && mq(qq, Yq() + Eq).catch((qq => {
              gq("the texture pack step after the join failed", qq)
            }))
          }));
          return null === uq ? null : mq(uq, cq)
        }
      }((qq => (0, YE.j)(qq) ? KA().request() : KA().forJoin()), Ql.d, wA),
      DA = function(qq, Eq) {
        let gq = !1;
        return {
          setGamePackConfirm: qq => {
            gq = null !== qq, Eq(qq)
          },
          packStep: (Eq, Yq, lq) => qq(Eq, Yq, (() => gq && lq()))
        }
      }(eA, (qq => {
        KA().setGamePackConfirm(qq)
      }));

    function qc(qq) {
      DA.setGamePackConfirm(qq)
    }

    function Ec() {
      if (Rx || null !== tx || null === ox || null === yx) return;
      const {
        backend: qq,
        canvas: Eq,
        fallbackReason: gq,
        adapterVendor: Yq
      } = yx, lq = ox;
      ox = null;
      try {
        tx = lq({
          backend: qq,
          canvas: Eq,
          fallbackReason: gq,
          adapterVendor: Yq,
          joinedGame: () => Rx ? null : Um,
          inGame: Yc,
          shaderPackReach: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = tm) || void 0 === Eq ? void 0 : Eq.reachInJoinedGame()) && void 0 !== qq ? qq : null
          },
          msaa: () => Qx > 1,
          writeCmd: (qq, Eq, gq) => null !== pO && pO(qq, Eq, gq),
          takeFailedMeshJobs: () => {
            var qq, Eq;
            return null !== (qq = null === (Eq = Am) || void 0 === Eq ? void 0 : Eq.takeFailedMeshJobs()) && void 0 !== qq ? qq : 0
          },
          readLoadCounts: qq => {
            var Eq, gq;
            return null !== (Eq = null === (gq = sO) || void 0 === gq ? void 0 : gq.readLoadCounts(qq)) && void 0 !== Eq && Eq
          },
          mainStalled: (qq, Eq) => {
            (0, rg.reportMainStall)(qq, Eq, IO)
          }
        })
      } catch (Oq) {
        console.error(`${VO} the frame telemetry didn't start`, Oq)
      }
    }

    function gc(qq, Eq) {
      try {
        var gq, Yq, lq;
        const Oq = Wx && null !== (gq = null === (Yq = sO) || void 0 === Yq || null === (lq = Yq.lastHeader) || void 0 === lq ? void 0 : lq.renderPending) && void 0 !== gq ? gq : 0;
        (0, wg.g)(Eq, qq, Yc() && !(null !== cl), Oq)
      } catch (Oq) {
        (0, wg.t)(), console.error(`${VO} the quality steps stopped`, Oq)
      }
    }

    function Yc() {
      return null !== Um && Tx === Um && !Rx
    }

    function lc(qq) {
      const Eq = tx;
      tx = null;
      try {
        null === Eq || void 0 === Eq || Eq.stop()
      } catch {}
      console.error(`${VO} the frame telemetry threw: it stops`, qq)
    }

    function Oc(qq) {
      var Eq, gq, Yq, lq;
      if ((0, xl.e)().fire(qq), "message" === qq.type) {
        if (Tm++, qq.Hc === JE.Pc.ERROR && null !== sm) {
          var Oq;
          const {
            text: Eq,
            dropsCache: gq
          } = (0, Mq.n)((new TextDecoder).decode(qq.payload));
          Ax ||= gq, (null === (Oq = lx) || void 0 === Oq ? void 0 : Oq.conn) === qq.conn && (cx = Eq)
        } else if (qq.Hc === kE.ec.ResumeComplete) {
          var mq;
          null === (mq = em) || void 0 === mq || mq.resume.onResumeComplete(qq.conn)
        }
        return
      }
      qq.phase === JE.u.Left ? zm = qq.conn : qq.phase === JE.u.Activated && (null === (Eq = lx) || void 0 === Eq ? void 0 : Eq.conn) === qq.conn ? lx.activated = !0 : qq.phase === JE.u.Resumed ? function(qq) {
        var Eq, gq;
        qx = qq;
        const Yq = em;
        if (null === Yq || 0 === Yq.heldConn || (null === (Eq = lm) || void 0 === Eq ? void 0 : Eq.conn) !== qq || !lm.resume || null === Im) return;
        console.info(`${VO} the game resumed on conn ${qq}, waiting for its InitialInfo`);
        const lq = Yq.heldConn;
        Yq.heldConn = 0, lm.resume = !1, Im.conn = qq, (null === (gq = Km) || void 0 === gq ? void 0 : gq.conn) === lq && (Km = {
          conn: qq,
          info: Km.info
        }), dE.c.apply({
          shopInfo: null,
          _shopVersion: lE.c
        })
      }(qq.conn) : qq.phase === JE.u.Held ? function(qq) {
        var Eq;
        const gq = em,
          Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.pendingHold) && void 0 !== Eq ? Eq : null;
        if (null !== gq && null !== Yq && Yq.conn === qq) return gq.pendingHold = null, gq.heldConn = qq, qx = 0, console.warn(`${VO} the core holds the game, reconnecting`), void gq.resume.onDropped(Yq.token);
        if (qq === qx) {
          qx = 0;
          const Eq = sO;
          null === Eq || Eq.isStopped || (console.info(`${VO} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), LA(Eq, "close", qq))
        }
      }(qq.conn) : qq.phase === JE.u.Closed && (null === (gq = em) || void 0 === gq || null === (Yq = gq.pendingHold) || void 0 === Yq ? void 0 : Yq.conn) === qq.conn && (em.heldConn === qq.conn ? function(qq) {
        const Eq = qq.heldConn,
          gq = qq.dropCode;
        zA(qq, "refused"), console.info(`${VO} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          fA(Eq, !1), dA(Eq, gq, "", !0)
        }))
      }(em) : em.pendingHold = null);
      const xq = Object.keys(JE.u).find((Eq => JE.u[Eq] === qq.phase)),
        Aq = 0 === qq.code ? "" : ` (code ${qq.code})`;
      console.info(`${VO} conn ${qq.conn}: ${null!==xq&&void 0!==xq?xq:qq.phase}${Aq}, ${Tm} raw messages so far`), (null === (lq = Um) || void 0 === lq ? void 0 : lq.conn) !== qq.conn || qq.phase !== JE.u.Left && qq.phase !== JE.u.Closed || mA(null), wm !== qq.conn || qq.phase !== JE.u.Left && qq.phase !== JE.u.Closed || (wm = null, null === Um && null === sm && IY.b.setGame(void 0));
      for (const uq of [...Bx]) try {
        uq(qq.conn, qq.phase, qq.code)
      } catch (cq) {
        (0, RE.r)(cq, `${VO} a connection listener threw`)
      }
    }

    function mc() {
      (0, ml.n)(), queueMicrotask((() => {
        try {
          Pc()
        } catch (qq) {
          console.warn(`${VO} stopping before the reload threw`, qq)
        }(0, rg.flushCrashReports)(Fq.e).then(Fq.k, Fq.k)
      }))
    }

    function xc() {
      const qq = sO;
      null === qq || qq.isStopped || null === lm || Mm || !qq.hasPendingCommands() || cc(qq, !1, "budget")
    }

    function Ac(qq) {
      var Eq;
      const gq = Um;
      qq.persisted || null === gq || (null === (Eq = lm) || void 0 === Eq ? void 0 : Eq.conn) !== gq.conn || lm.left || gq.leave()
    }

    function cc(qq, Eq, Yq) {
      let lq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Oq = Mm;
      Mm = !0;
      try {
        return function(qq, Eq, Yq, lq) {
          var Oq, mq, xq, Aq;
          if (Rx) return !1;
          if (bc(qq, Bc), Rx || qq.isStopped) return !1;
          jc() && nm("modelsIn");
          MA(), Zm = performance.now(), zm = null, Sm = !1, (0, yq.N)(), null === (Oq = am) || void 0 === Oq || Oq.beforeFrame(), AY(Zm, qq), (0, yq.F)(Zm, Wc), fm = !0;
          const cq = Eq && dc();
          let uq;
          try {
            uq = qq.frame(Zm, cq, Yq)
          } finally {
            fm = !1
          }
          if (!uq) return !1;
          Px.observe(null !== (mq = null === (xq = qq.lastHeader) || void 0 === xq ? void 0 : xq.chunksCancelled) && void 0 !== mq ? mq : 0);
          const Bq = qq.lastFrameKind,
            Wq = (0, bE.c)(Bq);
          (function(qq) {
            null !== Gl && Gl.afterFrame(performance.now(), qq)
          })(Wq), null === (Aq = rx) || void 0 === Aq || Aq.frame(qq, Zm, Bq), Eq && (zx = Wq);
          Wq && (0, vE.e)(Zm);
          if (null !== tx) try {
            tx.frameRan(qq, Zm, performance.now(), Bq)
          } catch (Vq) {
            lc(Vq)
          }
          "drawn" === Bq && Vc() && function() {
            for (const qq of [...ll]) qq()
          }();
          qq.forEachNetOut(Hc);
          const Nq = lm;
          null !== zm && (null === Nq || void 0 === Nq ? void 0 : Nq.conn) === zm && oc(Nq, Tq.k);
          (function(qq) {
            var Eq;
            if (nx) return;
            null === Zx && dc() && (Zx = performance.now());
            if (null === sm && null === Um) return;
            null === Zx || fx || (fx = !0, (0, aq.q)("wasm_startup_loaded", Zx));
            let gq = 0;
            null !== Um ? gq = -1 : !0 === (null === (Eq = lx) || void 0 === Eq ? void 0 : Eq.activated) && (gq = ~kE.O.TerrainDrawn);
            const Yq = qq.headerWord(kE.C.LoadSteps) & gq & ~ix;
            if (0 === Yq) return;
            ix |= Yq;
            const lq = performance.now();
            for (const [Oq, mq] of Object.entries(ac)) 0 !== (Yq & kE.O[Oq]) && (0, aq.q)(mq, lq)
          })(qq), Eq && function(qq) {
            var Eq, Yq, lq;
            if (null === Um || !dc()) return;
            null === Mx || Tx === Um && !Mx.frame(Zm, 0 !== (qq.headerWord(kE.C.LoadSteps) & kE.O.TerrainDrawn)) || (Mx = null);
            const Oq = qq.lastHeader,
              mq = !Wx || 0 === (null === Oq || void 0 === Oq ? void 0 : Oq.renderPending);
            !bx && mq && (bx = !0, performance.mark(tO));
            if (Tx === Um) return;
            const xq = null !== (Eq = null === Oq || void 0 === Oq ? void 0 : Oq.firstView) && void 0 !== Eq ? Eq : JE.W.NotYet;
            if (Wx && xq === JE.W.NotYet) return;
            if (nx && (!0 !== (null === (Yq = (0, tq.e)()) || void 0 === Yq ? void 0 : Yq.isSessionLive) || !mq)) return;
            Tx = Um;
            const Aq = Um;
            if (setTimeout((() => {
                Um === Aq && (0, aq.j)()
              }), 0), null === (lq = tm) || void 0 === lq || lq.playable(), function() {
                clearTimeout(Ym), Ym = setTimeout((() => {
                  Yc() && fc((qq => {
                    let {
                      prefetchWorldgenWorker: Eq
                    } = qq;
                    Eq()
                  }))
                }), SO)
              }(), nx) return;
            nx = !0, performance.mark(yO), (0, Zl.s)("render") && Promise.all([gq.e(75), gq.e(47)]).then((() => gq(4511))).then((qq => {
              let {
                renderDebugPlayable: Eq
              } = qq;
              Eq()
            }), (qq => {
              console.warn("The render debug topic didn't load", qq)
            }));
            const cq = Math.round(performance.now());
            if (Wx && xq !== JE.W.Drawn) {
              const Eq = xq === JE.W.HeldBackstop ? "held_draws" : "long",
                {
                  cause: gq
                } = Nc(qq);
              if (console.warn(`${VO} playable at ${cq} ms on the first view's ${Eq} backstop, ${gq}: it wasn't drawn whole in time`), (0, aq.q)("wasm_view_backstop", cq, `${Eq}:${gq}`), "long" === Eq) {
                var uq, Bq;
                const Eq = null !== (uq = null === (Bq = Im) || void 0 === Bq ? void 0 : Bq.game) && void 0 !== uq ? uq : "";
                Mx = new vg.c((() => {
                  const {
                    cause: gq,
                    census: Yq
                  } = Nc(qq);
                  (0, rg.reportFirstViewNoTerrain)(Eq, gq, Yq, IO), (0, WE.x)("noTerrain")
                }))
              }
            } else console.info(`${VO} playable at ${cq} ms${Wx?"":" (no renderer)"}`);
            setTimeout(jx, 0), (0, HE.g)().catch((qq => {
              console.error(`${VO} item sprites didn't load, so item particles show the missing texture`, qq)
            })), kY.c.warm()
          }(qq);
          (0, Eg.O)(qq, {
            worldgen: mm,
            mesh: Am
          }),
          function(qq) {
            qq.forEachEvent(uY);
            for (const Eq of cY) try {
              (0, YY.c)(Eq)
            } catch (Vq) {
              if ((0, RE.k)(Vq)) {
                qq.crashOn(Eg.p, Vq);
                break
              }
              console.error(`${OY} an input action listener threw`, Vq)
            }
            cY.length = 0
          }(qq), lq && (0, nE.b)();
          return !qq.isStopped
        }(qq, Eq, "all" === Yq || qq.rings.net.cursor >= vO || qq.netKeptFrames >= hO, lq)
      } finally {
        Mm = Oq
      }
    }

    function uc(qq) {
      console.error(`${VO} a frame-start listener threw`, qq)
    }

    function Bc() {
      var qq, Eq, gq, Yq;
      null === (qq = dm) || void 0 === qq || qq.drain(pO, GO), null === (Eq = Pm) || void 0 === Eq || Eq.drain(pO), null === (gq = Qm) || void 0 === gq || gq.drain(performance.now()), dx(pO), null === (Yq = om) || void 0 === Yq || Yq.drain()
    }

    function Wc(qq) {
      console.error(`${VO} a before-frame listener threw`, qq)
    }

    function Nc(qq) {
      const Eq = (0, tq.e)(),
        gq = (0, tq.k)(),
        Yq = null === Eq || null === gq ? null : gq.readDrawCensus(Eq.api);
      return {
        cause: (0, vg.g)(qq.headerWord(kE.C.LoadSteps), Yq),
        census: Yq
      }
    }
    const ac = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Vc() {
      return Wx && dc()
    }

    function dc() {
      return ym && jc()
    }

    function jc() {
      return null === dm || dm.startupDone
    }

    function Hc(qq, Eq) {
      const gq = lm;
      (null === gq || void 0 === gq ? void 0 : gq.conn) === qq ? oc(gq, Eq) : Lm++
    }

    function oc(qq, Eq) {
      const {
        ws: gq
      } = qq;
      return gq.readyState === WebSocket.OPEN ? (gq.send(Eq), !0) : gq.readyState === WebSocket.CONNECTING && qq.pendingBytes + Eq.byteLength <= fO ? (qq.pending.push(Eq.slice()), qq.pendingBytes += Eq.byteLength, !0) : (Lm++, !1)
    }

    function Pc() {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq;
      Rx = !0, Sx.stop(), (0, Ml.d)(), Gl = null, TA(), (0, yq.M)().unlockPointer(), (0, yq.J)(null), null === (qq = Vm) || void 0 === qq || qq(), Vm = null, null === (Eq = (0, tq.k)()) || void 0 === Eq || Eq.followCursorAim(null), (0, nE.A)(), (0, tq.c)(), CO.stop(), null === (gq = vx) || void 0 === gq || gq(), vx = null, null === (Yq = hx) || void 0 === Yq || Yq(), hx = null, null === (lq = tx) || void 0 === lq || lq.stop(), tx = null, (0, ng.p)(null), null === (Oq = Om) || void 0 === Oq || Oq(), Om = null, null === (mq = mm) || void 0 === mq || mq.stop(), mm = null, null === (xq = Am) || void 0 === xq || xq.stop(), Am = null, null !== (Aq = wO) && void 0 !== Aq && null !== (cq = Aq.textures) && void 0 !== cq && cq.assets && (0, wY.k)(null), null === (uq = wO) || void 0 === uq || uq.stop(), wO = null, KO = null;
      const jq = cm;
      cm = null, jq && (jq.stop(), nc(jq)), null === (Bq = Pm) || void 0 === Bq || Bq.dispose(), Pm = null, null === (Wq = Qm) || void 0 === Wq || Wq.dispose(), Qm = null, dm = null, null === (Nq = Hm) || void 0 === Nq || Nq(), Hm = null, null === (aq = Nm) || void 0 === aq || aq(), Nm = null, null === (Vq = am) || void 0 === Vq || Vq.stop(), am = null, YA(), IY.b.release(), hA();
      const Hq = om;
      om = null;
      try {
        null === Hq || void 0 === Hq || Hq.dispose()
      } catch (oq) {
        console.warn(`${VO} the sky's images didn't release`, oq)
      }(0, RY.e)(null), null === (dq = UO) || void 0 === dq || dq.pagePreviews().endSession(null === (0, mE.s)())
    }

    function Qc(qq, Eq) {
      var gq, Yq;
      const lq = null !== (gq = null === (Yq = cm) || void 0 === Yq ? void 0 : Yq.details()) && void 0 !== gq ? gq : {},
        Oq = qq.site === jO || qq.site === HO || qq.site === rg.RENDER_RELOAD_SITE || qq.site === oO ? qq.error instanceof WebAssembly.RuntimeError || qq.error instanceof CE.c : !(0, qg.r)(qq.error) && (0, Eg.K)(qq);
      Oq && qq.error instanceof Error && (0, mE.Q)(qq.error);
      const mq = Oq || qq.site === Eg.x ? (0, rg.readTrap)(qq.error) : null,
        xq = null !== mq && (0, UE.g)(mq.kind, mq.refusedBytes) ? mq.refusedBytes : 0,
        Aq = null === um ? (0, GY.q)(function() {
          try {
            return (0, mE.v)().buffer.byteLength
          } catch {
            return 0
          }
        }(), xq, null) : um.ceilingMayRefuse(xq),
        cq = xq > 0 && !Aq && kA();
      var uq;
      if (cq && ((0, NE.u)("oom"), (0, NE.q)("decline"), kx = !0), Pc(), (0, ml.c)()) return console.warn(`${VO} the session stopped at ${qq.site} as the page reloads`, qq.error), void((0, qg.r)(qq.error) || (null === (uq = qq.header) || void 0 === uq ? void 0 : uq.lastError) === JE.z.CoreBusy || (0, rg.reportStoppedCore)(qq, Eq, mq, {
        memoryDetails: lq,
        declined: cq
      }));
      (0, rg.showCrash)(qq, Eq, mq, {
        memoryDetails: lq,
        declined: cq
      })
    }

    function yc(qq) {
      const {
        input: Eq,
        net: gq,
        worker: Yq
      } = qq.rings, lq = qq.optionsDropped, Oq = Eq.dropped + lq + gq.dropped + Yq.dropped + Lm;
      Oq !== Gm && function(qq, Eq) {
        const gq = performance.now();
        return !(gq - pm[qq] < MO) && (pm[qq] = gq, console.warn(`${VO} ${Eq}`), !0)
      }("dropped", `${Oq} records dropped so far (input ${Eq.dropped}, options ${lq}, net ${gq.dropped}, worker ${Yq.dropped}, net-out ${Lm})`) && (Gm = Oq)
    }

    function tc() {
      var qq, Eq;
      const gq = (0, og.e)();
      if (null === gq) return null;
      const Yq = (0, yg.p)(gq);
      return {
        ...Yq,
        horizontal: Math.min(Yq.horizontal, null !== (qq = null === (Eq = cm) || void 0 === Eq ? void 0 : Eq.shedDistanceInUse()) && void 0 !== qq ? qq : 1 / 0)
      }
    }

    function rc(qq) {
      var Eq, gq;
      return {
        samples: Wx ? Qx : null,
        sunShadows: qq,
        renderDistance: null !== (Eq = null === (gq = tc()) || void 0 === gq ? void 0 : gq.horizontal) && void 0 !== Eq ? Eq : null
      }
    }

    function vc(qq) {
      Xm = qq, (0, Pg.H)()
    }

    function hc() {
      var qq, Eq, gq;
      const Yq = tc();
      return {
        ...null === (qq = cm) || void 0 === qq ? void 0 : qq.pageKillSnapshot(),
        renderDistance: null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.horizontal) && void 0 !== Eq ? Eq : null,
        renderDistanceVertical: null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.vertical) && void 0 !== gq ? gq : null,
        chunkCap: Bm,
        budgetBasis: Wm,
        renderBackend: (0, ml.G)(),
        ...(0, Qg.e)(Xm)
      }
    }

    function nc(qq) {
      console.info(`${VO} wasm memory at the session's end`, qq.details())
    }

    function bc(qq, Eq) {
      if (!qq.isStopped) try {
        Eq()
      } catch (gq) {
        qq.crash(Eg.z, gq)
      }
    }

    function ic() {
      return xm ??= gq.e(69).then((() => gq(43110))).catch((qq => {
        throw xm = null, qq
      })), xm
    }
    async function Zc() {
      const {
        createWorldgenWorker: qq,
        worldgenWorkerReady: Eq
      } = await ic();
      return await Eq(), qq
    }

    function fc(qq) {
      var Eq;
      null === (Eq = xm) || void 0 === Eq || Eq.then(qq, (() => {}))
    }

    function Mc(qq, Eq, gq) {
      return async function(qq, Eq, gq) {
        let {
          stop: Yq,
          stillWanted: lq
        } = gq;
        const Oq = await (0, PY.h)(qq, {
          stillWanted: lq,
          beforeReload: async () => {
            Yq(), await (0, rg.flushCrashReports)(Fq.e)
          },
          reload: Fq.k
        });
        return Oq || Eq(), Oq
      }(qq, Eq, {
        stop: Pc,
        stillWanted: gq
      })
    }
    let Tc = !1;

    function zc() {
      return Tc = !0, async function(qq, Eq, Yq) {
        const {
          gamePackSource: lq
        } = await gq.e(344).then((() => gq(43063)));
        await DA.packStep(qq, ((gq, Yq) => gq.packForGame(qq, lq(Eq), Yq)), Yq)
      }(...arguments)
    }

    function Sc(qq) {
      ! function(qq, Eq) {
        qq((qq => {
          null === qq || void 0 === qq || qq.subscribe((qq => {
            let {
              pack: gq,
              gameSource: Yq
            } = qq;
            Eq(null === Yq || null === gq ? null : {
              pack: gq,
              source: "" === Yq ? null : Yq
            })
          }))
        }))
      }(CA, qq)
    }
    let pc = !1,
      Gc = null,
      Lc = !1,
      Jc = !1;

    function kc() {
      var qq;
      pc || (pc = !0, Kx("play", Rq), (0, Wq.s)(new qu), xq.gameBridge.attach(fq), wc().catch((() => {})), (0, tq.n)((qq => {
        EE(qq.setTextHost)
      })), qq = Fc, xx.add(qq), function(qq) {
        for (const Eq of rm) qq(Eq);
        hm.add(qq)
      }((qq => {
        Uc(Rc[qq])
      })))
    }
    const Rc = {
      booted: Oq.h.INITIALISE_NOA,
      texturesIn: Oq.h.REGISTRATION,
      modelsIn: Oq.h.SETUP_LIFEFORMS
    };

    function Uc(qq) {
      Aq.i.TV("matchmakeAndPlayStepCompleted", {
        step: qq,
        totalSubSteps: 1
      })
    }

    function Fc(qq) {
      if (!Lc) return;
      const {
        gameNameWithVariation: Eq,
        lobbyName: gq
      } = (0, Wq.e)();
      if (qq.code === Yq.b.serverUpdating.code) return (new qu).leaveLive(), void Xc(Eq, gq);
      Aq.i.TV("unwantedLeftGame", {
        reason: sc(qq),
        requiresRefresh: qq.requiresRefresh,
        canReconnect: null !== qq.reconnect,
        automaticallyReconnect: qq.reconnecting,
        canPlayAgain: qq.canPlayAgain,
        gameNameWithVariation: Eq,
        lobbyName: gq
      }), (new qu).leaveLive()
    }

    function sc(qq) {
      return null !== qq.reasonKey ? {
        translationKey: qq.reasonKey
      } : "gameOrPluginKick" === qq.name ? qq.reason : `You have disconnected from the server.\n${qq.reason}`
    }

    function Xc(qq, Eq) {
      var Yq;
      Yq = (0, cq.A)(qq, Eq), Promise.resolve().then((() => gq(1498))).then((qq => {
        let {
          navigatePreserveSearch: Eq
        } = qq;
        Eq(Yq)
      })).catch((qq => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", qq), (0, Fq.f)(Yq)
      }))
    }

    function wc() {
      return Gc ??= Promise.all([gq.e(70), gq.e(73), gq.e(72), gq.e(71), gq.e(84), gq.e(261), gq.e(200), gq.e(218), gq.e(239), gq.e(213), gq.e(46)]).then((() => gq(40404))).then((qq => {
        try {
          qq.attachPlayGameSources()
        } catch (Eq) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", Eq),
            function(qq) {
              qm.then((Eq => {
                null === Eq || Eq.isStopped || Rx ? console.warn(`${VO} the play sources threw as they attached, after the client stopped`, qq) : Qc({
                  site: oO,
                  error: qq,
                  header: null
                }, IO)
              }))
            }(Eq), Eq
        }
      }), (qq => {
        throw Gc = null, new tq.b(qq)
      })), Gc
    }
    async function Kc(qq, Eq) {
      kc(), Tc = !0, Lc = !0;
      let gq = {
          place: qq.place,
          matchedAt: qq.matchedAt
        },
        mq = qq.place.gameNameWithVariation;
      const xq = (0, Bq.d)();
      let Aq = null;
      const cq = await Dx({
        matchmake: async () => {
          let Eq = gq;
          if (gq = null, null === Eq) {
            const gq = await qq.rematch();
            if (gq.isError()) throw Aq = gq.asError().forward(), new Error(gq.asError().message);
            Eq = {
              place: gq.getValue(),
              matchedAt: performance.now()
            }
          }
          mq = Eq.place.gameNameWithVariation;
          return {
            target: await (0, Sq.h)(qq.userContext, Eq.place, IA(), xq),
            matchedAt: Eq.matchedAt,
            freshMs: Sq.d
          }
        },
        pageReady: wc,
        onFailure: (qq, Eq) => {
          null === Aq && function(qq, Eq) {
            (0, rg.reportPageJoinFailure)(qq, IO, Eq)
          }(qq, {
            sinceJoinStartMs: Eq,
            game: mq
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => qq.userContext.invalidateTrafficCode(),
        signal: Eq
      });
      switch (cq.kind) {
        case "joined":
          if (xq) {
            const {
              game: qq
            } = cq;
            (0, Bq.m)((() => {
              qq.endJoinAd() && (0, aq.m)()
            }))
          }
          return Jc || (Jc = !0, (0, dq.e)()), Lc ? (Uc(Oq.h.CONNECT_TO_GAME_SERVER), Uc(Oq.h.SHADER_PACK), function() {
            var qq, Eq;
            return null !== (qq = null === (Eq = tm) || void 0 === Eq ? void 0 : Eq.runsInJoinedGame()) && void 0 !== qq && qq
          }() && (0, Vq.d)(qq.userContext, mq).catch((qq => {
            console.error("Failed to report the shader pack session", qq)
          })), function() {
            const qq = function() {
              var qq, Eq;
              return null !== (qq = null === (Eq = tm) || void 0 === Eq ? void 0 : Eq.couldntRunInJoinedGame()) && void 0 !== qq ? qq : null
            }();
            null !== qq && (0, Vq.c)(qq)
          }(), lq.b.value(void 0)) : Dc("The server ended the game as it joined");
        case "failed":
          if (!cq.reloading) {
            if (null !== Aq) return Aq;
            if ((cq.error instanceof Tq.l || cq.error instanceof Tq.e) && cq.error.code === Yq.b.serverUpdating.code) {
              if (Eq.aborted) return Dc("Left the game while it loaded");
              const {
                gameNameWithVariation: qq,
                lobbyName: gq
              } = (0, Wq.e)();
              return Xc(qq, gq), Dc("The server is updating")
            }
            return cq.error instanceof Uq.g ? lq.b.errorWithCode(cq.error.messageKey, Oq.h.SHADER_PACK, {
              severity: "medium"
            }) : lq.b.errorWithCode(function(qq) {
              if (qq instanceof Tq.u || qq instanceof Pq.f) return qq.message;
              if (Cc(qq)) return (0, Mq.l)(qq.code, qq.serverText);
              return Mq.h
            }(cq.error), Oq.h.CONNECT_TO_GAME_SERVER, {
              error: Ic(cq.error) ? cq.error : void 0,
              severity: ec(cq.error),
              gameServerUnreachable: (0, zq.b)(cq.error),
              rematch: (0, Hq.b)(cq.error),
              gameRefused: (0, oq.b)(cq.error)
            })
          }
          return Dc("Reloading into the new build");
        case "stopped":
          return Dc("The game client stopped, and shows why");
        case "lE":
          return Dc("Left the game while it loaded")
      }
    }

    function Cc(qq) {
      return qq instanceof Tq.l || qq instanceof Tq.e && "attach" !== qq.stage
    }

    function Ic(qq) {
      return !(qq instanceof Tq.u) && !Cc(qq) && void 0 === (0, zq.b)(qq)
    }

    function ec(qq) {
      return Cc(qq) ? qq instanceof Tq.e && (0, Mq.j)(qq.code).requiresRefresh ? "medium" : "low" : Ic(qq) || qq instanceof Tq.u ? "medium" : "low"
    }

    function Dc(qq) {
      return lq.b.errorWithCode(qq, Oq.h.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        lE: !0
      })
    }
    class qu {
      leave(qq) {
        if ((0, Qq.b)()) {
          var Eq, gq;
          if ((0, mq.b)()) return;
          (0, Nq.c)(!0 === (null === (Eq = (0, Qq.l)()) || void 0 === Eq || null === (gq = Eq.currentViewer) || void 0 === gq ? void 0 : gq.unsavedChanges), qq)
        } else this.leaveLive()
      }
      leaveLive() {
        var qq;
        Tc && (null === (qq = IA()) || void 0 === qq || qq.endGamePack());
        if (!Lc) return;
        Lc = !1, (0, jq.f)();
        try {
          var Eq;
          null === (Eq = (0, tq.k)()) || void 0 === Eq || Eq.clearWasmCameraScreen()
        } catch (Yq) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Yq)
        }
        const {
          gameNameWithVariation: gq
        } = (0, Wq.e)();
        try {
          cA()
        } finally {
          (0, Wq.w)({
            websocketUrl: null
          }), Aq.i.TV("leaveGame", {
            gameNameWithVariation: gq
          }), (0, uq.Y)()
        }
      }
      isReplay() {
        return (0, Qq.b)()
      }
    }
  },
  40741: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      f: () => Yq,
      j: () => xq,
      k: () => mq
    });
    const Yq = 12e4,
      lq = 3e4,
      Oq = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: qq => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", qq), () => {
          document.removeEventListener("visibilitychange", qq)
        })
      };

    function mq(qq) {
      return `it sent no start within ${Math.round(qq)} ms`
    }
    class xq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Oq;
        this.timeoutMs = qq, this.onTimeout = Eq, this.now = gq, this.visibility = Yq, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Yq.listen((() => {
          this.onVisibility()
        })), Yq.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const qq = this.step;
        return null === qq ? 0 : Math.min(this.now() - qq.at, qq.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const qq = this.timeoutMs - this.counted;
        if (qq <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const Eq = Math.min(qq, 5e3);
        this.step = {
          at: this.now(),
          ms: Eq
        }, this.arm(Eq, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(qq, Eq) {
        this.timer = setTimeout((() => {
          this.timer = null, Eq()
        }), qq)
      }
    }
  },
  40633: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    const Yq = {
      roomsPerServerMax: 30,
      timeForPlayerToConnect: 3e4,
      seatReservationSeconds: 15,
      healthWindowMs: 3e5,
      minAttemptsForRoomHealthWindow: 6,
      minAttemptsForServerHealthWindow: 20,
      minAttemptsForEmptyServerHealthWindow: 6,
      playerTimeoutThreshold: .8,
      gameServerMatchmakingHeartbeatInterval: 2e3,
      gameServerMatchmakingAnalyticsHeartbeatInterval: 1e4,
      SetRoomsHeartbeatBackoffMultiplier: 1.5,
      SetRoomsHeartbeatMaxInterval: 1e4,
      AnalyticsHeartbeatBackoffMultiplier: 1.2,
      AnalyticsHeartbeatMaxInterval: 3e4,
      defaultSubtractionFromMaxPlayersForSoftCap: 2,
      saveExpectedPlayersEvery: 1e4,
      unregisterFrozenGameServersIntervalMs: 1e3,
      gameServerFrozenThresholdMs: 3e4,
      matchmakingSkipsDrainingLobbies: !0,
      minNotDrainingShareToSkipDrainingLobbies: .5,
      drainingSessionLobbyFillMs: 3e5
    }
  },
  38693: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(2797);
    const lq = ["none", "idle", "now"];

    function Oq() {
      const qq = () => (0, Yq.C)();
      return {
        memoryBytes: () => (0, Yq.v)().buffer.byteLength,
        reserveUpFront: Eq => qq().Du(Eq),
        reserveAhead: Eq => qq().eu(Eq),
        setCeiling: Eq => {
          qq().qB(Eq)
        },
        lowWater: () => lq[qq().Iu()] ?? "none",
        stats: () => function(qq) {
          const Eq = new Uint32Array((0, Yq.v)().buffer, qq, 17),
            gq = qq => Eq[qq] ?? 0,
            lq = qq => ({
              upFront: gq(qq),
              ahead: gq(qq + 1),
              onDemandInFrame: gq(qq + 2),
              onDemand: gq(qq + 3)
            });
          return {
            memoryBytes: gq(0),
            initialBytes: gq(1),
            liveBytes: gq(2),
            peakLiveBytes: gq(3),
            headroomBytes: gq(4),
            unusedBytes: gq(5),
            ceilingBytes: gq(6),
            reservesRefused: gq(7),
            grows: lq(8),
            grownBytes: lq(12),
            allocationsRefused: gq(16)
          }
        }(qq().EB()),
        takeBallast: () => qq().gB(),
        takePressure: () => qq().YB()
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);