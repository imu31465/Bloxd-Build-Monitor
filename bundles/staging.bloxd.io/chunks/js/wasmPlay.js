export const id = 60;
export const ids = [60];
export const modules = {
  38927: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => AY
    });
    const FY = "The world isn't loaded, so no blocks can be seen.",
      AY = "The world isn't loaded, so nothing in it can be seen."
  },
  38453: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => QY,
      c: () => oY,
      e: () => yY
    });
    var FY = DY(2565);
    const AY = 0,
      IY = 2,
      RY = 3,
      OY = 4;
    class gY {
      constructor(YY, rY) {
        this.width = YY, this.gu = rY, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(YY * rY)
      }
      push(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let FY = 0; FY < this.width; FY++) DY[FY] = YY[rY + FY];
        return this.next = (this.next + 1) % this.gu, this.size = Math.min(this.size + 1, this.gu), DY
      }
      lines() {
        const YY = [],
          rY = (this.next - this.size + this.gu) % this.gu;
        for (let DY = 0; DY < this.size; DY++) {
          const FY = (rY + DY) % this.gu * this.width;
          YY.push(Array.from(this.data.subarray(FY, FY + this.width)).join(","))
        }
        return YY
      }
    }

    function aY(YY) {
      return Number.isFinite(YY) ? String(Math.round(10 * YY) / 10) : String(YY)
    }

    function vY(YY) {
      return Number.isFinite(YY) ? YY.toFixed(1) : String(YY)
    }
    class uY {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.fC = 0, this.pastLimit = 0, this.lockSkips = 0, this.fi = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class sY {
      constructor() {
        var YY = this;
        this.tally = new uY, this.records = new gY(10, 3600), this.events = new gY(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [FY, gY, uY, sY, iY, yY, QY, oY, WY, EY] = YY.records.push(rY, DY), mY = YY.tally;
          switch (mY.frames++, QY) {
            case AY:
              return void mY.idle++;
            case OY:
              return void mY.fi++;
            case RY:
              return mY.lockSkips++, void(0 === uY && 0 === sY || YY.outlier(`lock skip dropped raw (${aY(uY)}, ${aY(sY)}) at ${vY(FY)} ms`))
          }
          mY.looked++, Number.isFinite(gY) && (mY.dtMin = Math.min(mY.dtMin, gY), mY.dtMax = Math.max(mY.dtMax, gY), mY.dtSum += gY, gY > 0 && (mY.peakRate = Math.max(mY.peakRate, Math.hypot(iY, yY) / gY))), mY.raw[0] += uY, mY.raw[1] += sY, mY.turned[0] += iY, mY.turned[1] += yY;
          const VY = Math.abs(uY) > EY || Math.abs(sY) > EY,
            SY = `raw (${aY(uY)}, ${aY(sY)}) over ${vY(gY)} ms, limit ${aY(EY)}, filter v (${oY.toFixed(3)}, ${WY.toFixed(3)}) px/ms, at ${vY(FY)} ms`;
          QY === IY ? (mY.fC++, YY.outlier(`spike put right: ${SY} -> turned (${aY(iY)}, ${aY(yY)})`)) : VY ? (mY.pastLimit++, YY.outlier(`kept past limit: ${SY}`)) : gY > 50 && (mY.longFrames++, YY.outlier(`long frame: ${SY}, turned in full`))
        }, this.onMouseMove = YY => {
          const rY = this.tally,
            {
              movementX: DY,
              movementY: FY
            } = YY;
          rY.events++;
          const AY = Math.max(Math.abs(DY), Math.abs(FY));
          rY.eventMax = Math.max(rY.eventMax, AY);
          const IY = null !== document.pointerLockElement,
            RY = this.event;
          RY[0] = YY.timeStamp, RY[1] = DY, RY[2] = FY, RY[3] = IY ? 1 : 0, this.events.push(RY), AY >= 200 && (rY.bigEvents++, this.eventOutlier(`big mousemove (${DY}, ${FY}) at ${vY(YY.timeStamp)} ms, lock ${IY?"ja":"free"}`))
        }, this.onLockChange = () => {
          const YY = document.pointerLockElement;
          (0, FY.n)("look", `pointer lock ${YY?`gained (${YY.tagName.toLowerCase()})`:"lost"} at ${vY(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, FY.n)("look", `pointer lock request failed at ${vY(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, FY.n)("look", `page ${document.visibilityState} at ${vY(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const YY = this.tally;
          if (this.tally = new uY, 0 === YY.events && 0 === YY.raw[0] && 0 === YY.raw[1] && 0 === YY.lockSkips && 0 === YY.fC && 0 === YY.dropped) return;
          const rY = YY.looked > 0 ? YY.dtSum / YY.looked : NaN,
            DY = [`${YY.frames} frames (${YY.looked} looked, ${YY.idle} idle${"wasm"===this.client?`, ${YY.fi} carried`:""})`, `dt avg ${vY(rY)} min ${vY(YY.dtMin)} max ${vY(YY.dtMax)}, ${YY.longFrames} long`, `${YY.events} mousemoves (max ${aY(YY.eventMax)} px, ${YY.bigEvents} big)`, `raw (${aY(YY.raw[0])}, ${aY(YY.raw[1])}) turned (${aY(YY.turned[0])}, ${aY(YY.turned[1])})`, `peak ${YY.peakRate.toFixed(2)} px/ms`, `put right ${YY.fC}, past limit ${YY.pastLimit}, lock skips ${YY.lockSkips}`, "lock " + (document.pointerLockElement ? "ja" : "free")];
          YY.dropped > 0 && DY.push(`${YY.dropped} doubled spike copies dropped`), YY.lost > 0 && DY.push(`${YY.lost} records lost`), YY.suppressed > 0 && DY.push(`${YY.suppressed} outlier lines not shown`), (0, FY.n)("look", `1s: ${DY.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(YY, rY) {
        this.client = YY, this.take = rY;
        const {
          screen: DY
        } = window;
        (0, FY.n)("look", `start: ${YY} client, dpr ${window.devicePixelRatio}, screen ${DY.width}x${DY.height}, pointer lock ${document.pointerLockElement?"ja":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, FY.k)("look", this.dump))
      }
      outlier(YY) {
        const rY = this.tally;
        rY.outliers >= 20 ? rY.suppressed++ : (rY.outliers++, (0, FY.n)("look", YY))
      }
      eventOutlier(YY) {
        const rY = this.tally;
        rY.eventLines >= 10 ? rY.suppressed++ : (rY.eventLines++, (0, FY.n)("look", YY))
      }
      takeRecords() {
        var YY;
        const rY = null === (YY = this.take) || void 0 === YY ? void 0 : YY.call(this);
        if (rY && rY.length >= 2) {
          this.tally.lost += rY[0], this.tally.dropped += rY[1];
          for (let YY = 2; YY + 10 <= rY.length; YY += 10) this.record(rY, YY)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let iY = null;

    function yY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return iY ??= new sY, iY.start(YY, rY), iY.record
    }

    function QY() {
      var YY;
      null === (YY = iY) || void 0 === YY || YY.endTake()
    }

    function oY() {
      var YY;
      null === (YY = iY) || void 0 === YY || YY.droppedCopy()
    }
  },
  8647: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    const FY = new Set(["chunkBorders"])
  },
  36231: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => gY
    });
    const FY = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      AY = {
        player: FY,
        store: {
          ...FY,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function IY(YY, rY) {
      YY instanceof Promise ? YY.then(rY).catch((YY => {
        console.error("Couldn't open the preview", YY)
      })) : rY(YY)
    }
    class RY {
      constructor(YY) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height), null !== this.view && YY.show(this.view))
        }))
      }
      show(YY) {
        var rY;
        this.view = YY, null === (rY = this.opened) || void 0 === rY || rY.show(YY)
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    class OY {
      constructor(YY) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(YY).then((YY => YY.ready)), IY(YY, (YY => {
          this.closed ? YY.close() : (this.opened = YY, null !== this.size && YY.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var YY, rY;
        return null !== (YY = null === (rY = this.opened) || void 0 === rY ? void 0 : rY.isReady()) && void 0 !== YY && YY
      }
      setCosmetic(YY, rY) {
        var DY;
        null === (DY = this.opened) || void 0 === DY || DY.setCosmetic(YY, rY)
      }
      playEmote(YY) {
        var rY;
        null === (rY = this.opened) || void 0 === rY || rY.playEmote(YY)
      }
      resetCamera() {
        var YY;
        null === (YY = this.opened) || void 0 === YY || YY.resetCamera()
      }
      async untilDrawn(YY) {
        var rY;
        await this.ready, await (null === (rY = this.opened) || void 0 === rY ? void 0 : rY.untilDrawn(YY))
      }
      resize(YY, rY) {
        var DY;
        this.size = {
          width: YY,
          height: rY
        }, null === (DY = this.opened) || void 0 === DY || DY.resize(YY, rY)
      }
      close() {
        var YY;
        this.closed = !0, null === (YY = this.opened) || void 0 === YY || YY.close(), this.opened = null
      }
    }
    const gY = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(YY) {
        this.host = YY
      }
      setDefaultHost(YY) {
        this.makeDefault = YY
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(YY) {
        return new RY(this.current().openMob(YY))
      }
      openPet(YY) {
        return new RY(this.current().openPet(YY))
      }
      openMobLineup(YY) {
        return new RY(this.current().openMobLineup(YY))
      }
      openCharacter(YY, rY) {
        return new OY(this.current().openCharacter(YY, rY))
      }
    }
  },
  38585: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY,
      f: () => sY
    });
    var FY = DY(183),
      AY = DY(205),
      IY = DY(1461),
      RY = DY(2817),
      OY = DY(1471),
      gY = DY(35903),
      aY = DY(668),
      vY = DY(38553);

    function uY(YY) {
      (0, RY.e)("matchmake_failed", YY, FY.l[FY.l.SHADER_PACK])
    }
    async function sY(YY, rY) {
      var DY;
      const FY = null === (DY = await vY.shaderPackPage.preload()) || void 0 === DY ? void 0 : DY.listing,
        RY = (0, gY.b)();
      FY && null !== RY && await OY.e.reportShaderPackSession(YY, {
        packId: FY.packId,
        sourceHash: FY.sourceHash,
        game: (0, IY.d)(rY, AY.w, "other"),
        playSessionId: RY,
        visitSessionId: (0, aY.d)()
      })
    }
  },
  38405: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(25),
      AY = DY(1287),
      IY = DY(3036);
    const RY = "Reconnecting";
    class OY {
      constructor(YY) {
        this.hooks = YY, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = YY => {
          YY.persisted || this.leave()
        }, this.controller = new IY.e((rY => YY.reconnect(rY)), {
          isSessionLive: () => !this.ended && YY.isLive(),
          onPhaseChanged: YY => {
            this.onPhaseChanged(YY)
          },
          onReconnected: rY => {
            YY.onReconnected(rY)
          },
          onGaveUp: rY => {
            !this.ended && YY.isLive() && YY.onGaveUp(this.sessionBased, rY)
          }
        })
      }
      onInitialInfo(YY, rY) {
        this.graceMs = YY, this.sessionBased = rY
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(YY) {
        this.ended || this.controller.onConnectionLost(YY, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const YY = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          rY = this.controller.heldToken;
        this.end(), YY && "" !== rY && this.hooks.releaseSeat(rY)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(YY) {
        const rY = "frozen" === YY || "resuming" === YY;
        rY !== this.stopped && (this.stopped = rY, this.hooks.freeze(rY));
        const DY = "frozen" === YY || "resuming" === YY && this.frozen;
        DY && !this.frozen ? (0, AY.k)(RY) : !DY && this.frozen && (0, AY.j)(RY), this.frozen = DY, this.setListening("connected" !== YY), FY.g.vo(IY.l, DY ? "frozen" : YY)
      }
      setListening(YY) {
        YY !== this.listening && (this.listening = YY, YY ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38410: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = YY, this.now = rY, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const YY = this.now(),
            rY = YY - this.lastCheckAt <= 2e3;
          this.lastCheckAt = YY;
          const DY = "visible" === document.visibilityState;
          !DY || rY && this.wasVisible || (this.resumedAt = YY), this.wasVisible = DY, DY && YY - this.lastHeardAt > 12e3 && YY - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = rY(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8677: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(1113);

    function AY() {
      var YY, rY;
      return null !== (YY = null === (rY = screen.orientation) || void 0 === rY ? void 0 : rY.type) && void 0 !== YY ? YY : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const IY = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && AY() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = AY(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, FY.jQ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const YY of this.resizers) YY()
          }
        }), 1e3)
      }
      heldSizer(YY) {
        let rY = !1;
        return () => {
          if (rY && this.isHeld()) return null;
          const DY = YY();
          return rY ||= null !== DY, DY
        }
      }
      onRelease(YY) {
        return this.resizers.add(YY), () => {
          this.resizers.delete(YY)
        }
      }
    }
  },
  38572: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    let FY = !1;
    async function AY(YY, rY) {
      if (!FY) {
        FY = !0;
        try {
          const [{
            reloadBloxd: FY
          }, {
            NotificationProvider: AY
          }] = await Promise.all([Promise.resolve().then((() => DY(1699))), Promise.resolve().then((() => DY(1346)))]);
          if (!YY || !0 === await AY.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void FY(rY)
        } catch (AY) {
          console.error("Leaving the replay failed", AY)
        }
        FY = !1
      }
    }
  },
  38420: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY,
      g: () => vY
    });
    var FY = DY(1683),
      AY = DY(213),
      IY = DY(1665),
      RY = DY(1735),
      OY = DY(1222),
      gY = DY(1159);
    async function aY(YY, rY) {
      return function(YY) {
        return "object" === typeof YY && null !== YY && YY.code === AY.c.VpnIp.code
      }(rY) && function(YY) {
        return IY.e.supports("appCheck") && YY.isLoggedIn() && !YY.hasTriedAppAttestation()
      }(YY) && await async function(YY) {
        try {
          const {
            token: rY
          } = await (0, RY.c)(), {
            "3PSIDMCPP": DY
          } = await (0, gY.postJsonWithMetricsCookiesAndJsonResponse)(`${OY.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: rY
          }, {
            retries: 0
          }, YY.getMetricsCookies());
          return YY.setAppAttestedAuthJwt(DY), !0
        } catch (rY) {
          return rY instanceof FY.e && "failed" === rY.code ? (console.warn("The app couldn't get an App Check token:", rY), YY.markAppAttestationTried()) : console.error("Failed to attest the app:", rY), !1
        }
      }(YY)
    }
    async function vY(YY, rY) {
      try {
        return await rY()
      } catch (DY) {
        if (!await aY(YY, DY)) throw DY
      }
      return rY()
    }
  },
  40147: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY
    });
    var FY = DY(1716);
    const AY = 33177600,
      IY = 3e4;
    let RY = !1;

    function OY(YY, rY, DY) {
      if (!YY.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (RY) return Promise.reject(new Error("A screenshot is already being taken"));
      RY = !0;
      const FY = function(YY, rY, DY) {
        const FY = Math.max(1, YY),
          IY = Math.max(1, rY),
          RY = Math.min(1, DY / Math.max(FY, IY), Math.sqrt(AY / (FY * IY)));
        return {
          width: Math.max(1, Math.floor(FY * RY)),
          height: Math.max(1, Math.floor(IY * RY))
        }
      }(rY, DY, YY.maxTextureSize);
      return YY.resize(FY.width, FY.height), new Promise(((rY, DY) => {
        let FY, AY = 2,
          OY = null;
        const gY = () => {
          var rY;
          RY = !1, null === (rY = OY) || void 0 === rY || rY(), clearTimeout(FY), YY.restoreSize()
        };
        FY = setTimeout((() => {
          gY(), DY(new Error("No frame was drawn to capture"))
        }), IY), OY = YY.onFrameDrawn((() => {
          if (AY--, AY > 0) return;
          const {
            canvas: FY
          } = YY, IY = {
            width: FY.width,
            height: FY.height
          };
          try {
            FY.toBlob((YY => {
              YY ? rY({
                blob: YY,
                ...IY
              }) : DY(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (RY) {
            DY(RY)
          } finally {
            gY()
          }
        }))
      }))
    }
    async function gY(YY, rY, DY) {
      try {
        const AY = await OY(YY, rY, DY);
        (0, FY.d)(AY.blob, `bloxd-screenshot-${AY.width}x${AY.height}-${Date.now()}.png`)
      } catch (AY) {
        console.error("Error taking screenshot:", AY)
      }
    }
  },
  38418: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY,
      f: () => aY
    });
    var FY = DY(213),
      AY = DY(4227),
      IY = DY(3258);
    const RY = [250, 500, 1e3, 2e3, 1250],
      OY = 406;

    function gY(YY) {
      if ("object" !== typeof YY || null === YY) return !1;
      const {
        code: rY,
        message: DY
      } = YY, AY = FY.c.duplicateLobbyNameError;
      return (rY === AY.code || rY === OY) && (DY === AY.text || DY === AY.text + FY.h)
    }
    async function aY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.c;
      for (let AY = 0;; AY++) {
        let OY;
        (0, IY.q)(rY);
        try {
          return await YY()
        } catch (FY) {
          if (OY = RY[AY], void 0 === OY || !gY(FY)) throw FY
        }
        await DY(OY, rY)
      }
    }
    const vY = new Set([FY.c.duplicateLobbyNameError.code, FY.c.lobbyCantBeCreated.code, FY.c.roomDisposedEarlyError.code, FY.c.roomDisposedLateError.code, FY.c.serverRoomLimitReached.code]);

    function uY(YY) {
      if (gY(YY)) return !0;
      const rY = "object" === typeof YY && null !== YY ? YY.code : void 0;
      return "number" === typeof rY && vY.has(rY)
    }
  },
  38501: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(332),
      AY = DY(144),
      IY = DY(40);

    function RY() {
      IY.m.setItem(FY.Ib, IY.m.getItem(FY.Ib) + 1), (0, AY.h)() && IY.m.setItem(FY.Hb, IY.m.getItem(FY.Hb) + 1)
    }
  },
  35894: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => EY,
      d: () => mY
    });
    var FY = DY(1057),
      AY = DY(631),
      IY = DY(341),
      RY = DY(1064),
      OY = DY(649),
      gY = DY(680),
      aY = DY(4070),
      vY = DY(99),
      uY = DY(144),
      sY = DY(1699),
      iY = DY(117),
      yY = DY(35903),
      QY = DY(40),
      oY = DY(668),
      WY = DY(35907);

    function EY() {
      var YY, rY;
      return [...null !== (YY = navigator.languages) && void 0 !== YY ? YY : [null !== (rY = navigator.language) && void 0 !== rY ? rY : "none"], "EN-gb"]
    }

    function mY(YY, rY, DY, mY, VY) {
      const SY = (0, FY.l)(rY) ? (0, FY.r)(rY) : null,
        lY = {
          cookies: (0, sY.getAllCookiesForGameNameWithVariation)(rY),
          isMobile: (0, vY.isMobile)(),
          isUsingCustomGameTexturePack: null !== SY && VY(SY),
          generalCookies: {
            joinDiscord: !!QY.m.getItem("DiscordPressed"),
            newGo: aY.d,
            ...YY.getMetricsCookies(),
            trafficCode: mY,
            compliance: vY.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vY.getBrowserName)(),
            version: (0, vY.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vY.getPlatformType)(),
            deviceType: (0, iY.d)()
          },
          isLoggedIn: YY.isLoggedIn(),
          lobbyName: DY,
          languages: EY(),
          version: AY.d,
          siteUsed: uY.s,
          subsiteUsed: uY.C,
          playSessionId: (0, yY.d)(rY),
          visitSessionId: (0, oY.d)(),
          clientReason: OY.i.reason,
          budgetBasis: (0, WY.e)(),
          ...null !== gY.p && {
            diagClaim: gY.p.claimId
          }
        };
      return null !== SY && (0, IY.Cc)(SY) ? (lY.lobbyName = (0, FY.i)(SY, (0, FY.p)(rY), DY), {
        roomName: `classic_${RY.f}`,
        joinOptions: lY
      }) : {
        roomName: rY,
        joinOptions: lY
      }
    }
  },
  39759: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY
    });
    var FY = DY(38927);

    function AY(YY) {
      return {
        current: () => YY,
        watch: () => () => {}
      }
    }

    function IY() {}
    const RY = Object.freeze([0, 0, 0]),
      OY = {
        states: {
          health: AY({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: AY({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: AY({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: AY({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: AY({}),
          creativeVisibility: AY({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: AY(null),
          heldItemAim: AY({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: AY(!1),
          gliderBoostFuel: AY(0),
          flight: AY({
            canFly: !1,
            flying: !1
          }),
          crafting: AY({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: AY({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: AY({}),
          fullInventory: AY(!1),
          crosshairTarget: AY({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: AY(!0),
          freeCamera: AY({
            allowed: !1,
            movesFly: !1
          }),
          replay: AY(null),
          replayEdits: AY(null),
          replayRecorder: AY({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: AY(!1)
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
          selectHotbarSlot: IY,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: IY,
          setInventoryOpen: IY,
          changeIronChestPasskey: IY,
          dragReplayCamera: IY,
          applyTemporaryThirdPerson: IY,
          holdEmoteWheel: IY,
          recordFlyingMiddleText: IY,
          focusCrafting: IY,
          craftRecipe: () => ({
            Ev: 0,
            da: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: IY,
          setShopOpen: IY,
          buyShopItem: IY,
          sendChatMessage: IY,
          ignorePlayer: IY,
          reportPlayer: IY,
          reportWorldCodeChat: IY,
          requestDiscordReportKey: IY,
          reportLobbyOrGame: IY,
          playEmote: IY,
          updateMyCosmetic: IY,
          writeOnBoard: IY,
          writeBook: IY,
          writeNameTag: IY,
          setCustomLobbyBlock: IY,
          openIronChest: IY,
          sendCodeCollab: IY,
          clickCodeBlock: IY,
          bindCustomButtonKeys: IY,
          pressCustomButton: IY,
          moveReplayFreecam: IY,
          holdReplayFreecamVertical: IY,
          respawn: IY,
          wakeUp: IY,
          requestLeaderboard: IY,
          completeTask: IY,
          setServerCookie: IY,
          answerUiRequest: IY,
          chooseRewardedAd: IY,
          setCameraZoom: IY,
          setFreeCameraMovesFly: IY,
          setBlockHighlight: IY,
          setCrosshairInteractPrompt: IY,
          setLookSensitivity: IY,
          replayAction: IY,
          setReplayPlaying: IY,
          seekReplay: IY,
          setReplayCameraMode: IY,
          syncReplayCameraMode: IY,
          setReplayCameraKeyframe: IY,
          moveReplayCameraKeyframe: IY,
          deleteReplayCameraKeyframes: IY,
          setReplayPlaybackMark: IY,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: IY,
          exportReplayVideo: IY,
          toggleRecording: IY,
          saveClip: IY,
          setRecorderPrefs: IY,
          setReplayViewerOpen: IY
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => FY.b,
          worldCodeAiGameState: () => FY.e
        },
        lookups: {
          localPos: () => RY,
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
  35907: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => lY,
      e: () => SY,
      h: () => VY
    });
    var FY = DY(213),
      AY = DY(99),
      IY = DY(2575),
      RY = DY(3942),
      OY = DY(656),
      gY = DY(35913);
    const aY = 1048576,
      vY = 1024 * aY,
      uY = 400 * aY,
      sY = 147456,
      iY = .5,
      yY = 1.5 * vY,
      QY = 768 * aY;

    function oY(YY) {
      return uY + YY * sY
    }

    function WY(YY, rY, DY) {
      var AY, RY;
      let {
        footprintBytes: OY,
        basis: aY,
        namesLimit: WY
      } = function(YY) {
        const {
          os: rY,
          deviceMemory: DY
        } = YY;
        if ("ios" === rY) switch ((0, IY.e)(YY)) {
          case "ipad_m":
            return {
              footprintBytes: oY(gY.b), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: QY, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: yY, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: QY, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof DY && Number.isFinite(DY) && DY > 0 ? {
          footprintBytes: DY * vY * iY,
          basis: `memory-${DY}`,
          namesLimit: !0
        } : "android" === rY ? {
          footprintBytes: QY,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oY(gY.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(YY);
      if (DY) {
        const YY = Math.min(OY, oY(gY.b));
        OY = uY + Math.max(0, YY - uY) / 2, aY += "+killed", WY = !0
      }
      null !== rY && oY(rY) < OY && (OY = oY(rY), aY += "+learned", WY = !0);
      const EY = function(YY) {
          const rY = Math.floor((YY - uY) / sY);
          return Math.min(gY.b, Math.max(gY.f, rY))
        }(OY),
        mY = (0, gY.n)(EY);
      return {
        footprintBytes: OY,
        shedFootprintBytes: WY ? Math.max(OY, oY(EY)) : null,
        chunkCap: EY,
        maxHorizDistance: null !== (AY = null === mY || void 0 === mY ? void 0 : mY.horizontal) && void 0 !== AY ? AY : FY.d.maxChunkHorizAddDistance,
        maxVertDistance: null !== (RY = null === mY || void 0 === mY ? void 0 : mY.vertical) && void 0 !== RY ? RY : FY.d.maxChunkVertAddDistance,
        basis: aY
      }
    }
    let EY = null;

    function mY() {
      return WY({
        os: (0, AY.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, IY.h)()
      }, (0, RY.f)(), (0, OY.A)("wasm").length > 0)
    }

    function VY() {
      return EY ??= mY(), EY
    }

    function SY() {
      var YY;
      return (null !== (YY = EY) && void 0 !== YY ? YY : mY()).basis
    }

    function lY(YY, rY) {
      return YY.setChunkCap(rY.chunkCap)
    }
  },
  40145: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY,
      f: () => IY
    });
    var FY = DY(2755),
      AY = DY(1057);

    function IY(YY, rY) {
      return null !== YY.gameSource && (0, FY.l)(rY, YY.gameSource)
    }

    function RY(YY, rY) {
      if (null === YY.gameSource || "" === YY.gameSource || null === rY) return !0;
      const DY = (0, AY.l)(rY) ? (0, AY.r)(rY) : null;
      return null !== DY && IY(YY, DY)
    }
  },
  40129: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      d: () => QY,
      f: () => aY,
      i: () => vY,
      j: () => yY
    });
    var FY = DY(40082),
      AY = DY(40132);
    const IY = 396,
      RY = 1,
      OY = 2,
      gY = 3,
      aY = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      vY = {
        File: 0,
        Item: 1
      },
      uY = 0,
      sY = 1,
      iY = 2;

    function yY(YY) {
      const rY = (0, FY.n)();
      rY.catch((() => {}));
      let AY = null;
      return {
        glbUrl: YY,
        lifeformAtlasUrl: async YY => (await rY).lifeformAtlasUrl(YY),
        armourAtlasUrl: async () => (await DY.e(196).then((() => DY(33702)))).armourAtlasUrl,
        capeUrl: async YY => (await rY).capeUrl(YY),
        attachmentImageUrl: async YY => (await rY).attachmentImageUrl(YY),
        blockImageUrl: async YY => (await rY).blockImageUrl(YY),
        groupAtlasUrl: async YY => (await rY).groupAtlasUrl(YY),
        particleTextureUrl: async YY => (await rY).particleTextureUrl(YY),
        particleItemUrl: async YY => (AY ??= DY.e(38).then((() => DY(50679))).catch((YY => {
          throw AY = null, YY
        })), (await AY).particleItemUrl(YY))
      }
    }
    class QY {
      constructor(YY, rY) {
        var DY, IY, RY;
        let OY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = YY, this.onFailure = rY, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.Ky = !1, this.load = null !== (DY = OY.load) && void 0 !== DY ? DY : (YY, rY) => (0, AY.j)(YY, OY.fetchImage, rY), this.release = null !== (IY = OY.release) && void 0 !== IY ? IY : AY.o, this.fetchFile = null !== (RY = OY.fetchFile) && void 0 !== RY ? RY : YY => (0, FY.j)(YY)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(YY, rY) {
        this.glbWrittenImages.set(YY, lY(rY))
      }
      glbTaken(YY, rY) {
        const DY = this.glbWrittenImages.get(YY);
        this.glbWrittenImages.delete(YY), rY && this.setGlbImages(YY, void 0 !== DY && DY.length > 0 ? DY : void 0)
      }
      setGlbImages(YY, rY) {
        var DY;
        this.glbTakenCount.set(YY, (null !== (DY = this.glbTakenCount.get(YY)) && void 0 !== DY ? DY : 0) + 1), void 0 === rY ? this.glbImages.delete(YY) : this.glbImages.set(YY, rY);
        const FY = [];
        for (const {
            key: AY
          }
          of this.loading.values()) AY.kind === aY.Glb && AY.word === YY && FY.push(AY);
        for (let AY = this.ready.length - 1; AY >= 0; AY--) {
          const {
            key: rY,
            id: DY
          } = this.ready[AY];
          rY.kind === aY.Glb && rY.word === YY && (this.ready.splice(AY, 1), null !== DY && (this.answered.delete(DY), this.release(DY)), FY.push(rY))
        }
        this.loadAgain(FY)
      }
      onEvent(YY) {
        if (this.Ky) return;
        const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
        for (let DY = 0; DY + 8 <= YY.byteLength; DY += 8) {
          const YY = rY.getUint8(DY),
            FY = rY.getUint32(DY + 4, !0);
          if (YY === gY) {
            this.answered.delete(FY), this.release(FY);
            continue
          }
          const AY = {
            kind: rY.getUint8(DY + 1),
            index: rY.getUint8(DY + 2),
            word: FY
          };
          YY === RY ? this.want(AY) : YY === OY && this.loading.delete(oY(AY))
        }
      }
      reload(YY, rY) {
        const DY = DY => YY.includes(DY.kind) && (void 0 === rY || rY(DY)),
          FY = new Map;
        for (const AY of this.answered.values()) DY(AY) && FY.set(oY(AY), AY);
        for (const [AY, {
            key: IY
          }] of this.loading) DY(IY) && FY.set(AY, IY);
        this.loadAgain(FY.values())
      }
      loadAgain(YY) {
        for (const rY of YY) this.loading.delete(oY(rY)), this.want(rY)
      }
      drain(YY) {
        if (null !== YY)
          for (; this.ready.length > 0;) {
            if (!YY(IY, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Ky = !0, this.loading.clear(), this.ready.length = 0;
        for (const YY of this.answered.keys()) this.release(YY);
        this.answered.clear()
      }
      want(YY) {
        const rY = oY(YY);
        if (this.loading.has(rY)) return;
        const DY = {
          key: YY
        };
        this.loading.set(rY, DY), this.loadKey(YY).then((FY => {
          this.Ky || this.loading.get(rY) !== DY ? this.release(FY.id) : (this.loading.delete(rY), this.answered.set(FY.id, YY), this.ready.push({
            record: EY(YY, uY, FY),
            key: YY,
            id: FY.id
          }))
        }), (FY => {
          if (this.Ky || this.loading.get(rY) !== DY) return;
          this.loading.delete(rY), this.onFailure({
            key: YY,
            error: FY
          });
          const IY = FY instanceof AY.c && "decode" === FY.stage ? sY : iY;
          this.ready.push({
            record: EY(YY, IY, null),
            key: YY,
            id: null
          })
        }))
      }
      async loadKey(YY) {
        switch (YY.kind) {
          case aY.Glb:
            return this.load(await this.glbImage(YY), "none");
          case aY.LifeformAtlas:
            return this.load(WY(await this.sources.lifeformAtlasUrl(YY.word), YY), "none");
          case aY.ArmourAtlas:
            return this.load(WY(await this.sources.armourAtlasUrl(), YY), "none");
          case aY.Cape:
            return this.load(WY(await this.sources.capeUrl(YY.word), YY), "none");
          case aY.AttachmentImage:
            return this.load(WY(await this.sources.attachmentImageUrl(YY.word), YY), "none");
          case aY.GroupAtlas:
            return this.load(WY(await this.sources.groupAtlasUrl(YY.word), YY), "none");
          case aY.BlockImage:
            return this.load(WY(await this.sources.blockImageUrl(YY.word), YY), "none");
          case aY.Particle: {
            const rY = await (YY.index === vY.Item ? this.sources.particleItemUrl(YY.word) : this.sources.particleTextureUrl(YY.word));
            return this.load(WY(rY, YY), "flipY")
          }
          default:
            throw new AY.c("fetch", `image kind ${YY.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(YY) {
        var rY;
        let DY = this.glbImages.get(YY.word);
        if (void 0 === DY) {
          const rY = this.glbTakenCount.get(YY.word),
            FY = WY(await this.sources.glbUrl(YY.word), YY);
          try {
            DY = lY(await this.fetchFile(FY))
          } catch (IY) {
            throw new AY.c("fetch", FY, {
              cause: IY
            })
          }
          this.glbTakenCount.get(YY.word) === rY && this.glbImages.set(YY.word, DY)
        }
        const FY = null === (rY = DY) || void 0 === rY ? void 0 : rY[YY.index];
        if (!FY) throw new AY.c("decode", `image ${YY.index} of file ${2147483647&YY.word}`, {
          cause: null
        });
        return FY
      }
    }

    function oY(YY) {
      let {
        kind: rY,
        index: DY,
        word: FY
      } = YY;
      return `${rY}:${DY}:${FY}`
    }

    function WY(YY, rY) {
      if (null === YY) throw new AY.c("fetch", `no URL for image ${oY(rY)}`, {
        cause: null
      });
      return YY
    }

    function EY(YY, rY, DY) {
      var FY, AY, IY;
      const RY = new Uint8Array(16),
        OY = new DataView(RY.buffer);
      return OY.setUint8(0, YY.kind), OY.setUint8(1, YY.index), OY.setUint8(2, rY), OY.setUint32(4, YY.word, !0), OY.setUint32(8, null !== (FY = null === DY || void 0 === DY ? void 0 : DY.id) && void 0 !== FY ? FY : 0, !0), OY.setUint16(12, Math.min(null !== (AY = null === DY || void 0 === DY ? void 0 : DY.width) && void 0 !== AY ? AY : 0, 65535), !0), OY.setUint16(14, Math.min(null !== (IY = null === DY || void 0 === DY ? void 0 : DY.height) && void 0 !== IY ? IY : 0, 65535), !0), RY
    }
    const mY = 1179937895,
      VY = 1313821514,
      SY = 5130562;

    function lY(YY) {
      var rY;
      const DY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      if (YY.byteLength < 20 || DY.getUint32(0, !0) !== mY || DY.getUint32(16, !0) !== VY) return [];
      let FY, AY = 20 + DY.getUint32(12, !0);
      try {
        FY = JSON.parse((new TextDecoder).decode(YY.subarray(20, AY)))
      } catch {
        return []
      }
      for (; AY + 8 <= YY.byteLength && DY.getUint32(AY + 4, !0) !== SY;) AY += 8 + DY.getUint32(AY, !0);
      const IY = null !== (rY = FY.images) && void 0 !== rY ? rY : [];
      if (0 === IY.length || AY + 8 > YY.byteLength) return IY.map((() => null));
      const RY = YY.subarray(AY + 8, Math.min(YY.byteLength, AY + 8 + DY.getUint32(AY, !0)));
      return IY.map((YY => {
        var rY, DY, AY;
        const IY = void 0 === YY.bufferView || null === (rY = FY.bufferViews) || void 0 === rY ? void 0 : rY[YY.bufferView];
        if (!IY || 0 !== (null !== (DY = IY.buffer) && void 0 !== DY ? DY : 0) || void 0 === IY.byteLength) return null;
        const OY = null !== (AY = IY.byteOffset) && void 0 !== AY ? AY : 0,
          gY = OY + IY.byteLength;
        return gY <= RY.byteLength ? RY.slice(OY, gY) : null
      }))
    }
  },
  39761: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => IY,
      j: () => AY
    });
    let FY = null;

    function AY(YY) {
      FY = YY
    }

    function IY(YY) {
      FY === YY && (FY = null)
    }

    function RY() {
      var YY;
      null === (YY = FY) || void 0 === YY || YY()
    }
  },
  36016: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      f: () => sY,
      j: () => WY,
      m: () => aY
    });
    var FY = DY(19),
      AY = DY(2251),
      IY = DY(2256),
      RY = DY(2262),
      OY = DY(3955),
      gY = DY(25);

    function aY(YY, rY) {
      return (!(0, RY.d)() || 0 === YY && 0 === rY) && (0, IY.B)(AY.j.Joystick, 0, YY, rY, 0)
    }
    const vY = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function uY(YY) {
      return YY.classList.contains("TouchKeyHit") && iY() ? null : YY.firstElementChild
    }

    function sY(YY) {
      return YY.classList.contains("TouchKeyHit") && !YY.classList.contains("CanvasZone") ? {
        whole: !iY(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: yY(uY(YY))
      }
    }

    function iY() {
      return document.documentElement.classList.contains(OY.k)
    }

    function yY(YY) {
      return !(YY instanceof HTMLElement) || YY.offsetWidth <= 0 || YY.offsetHeight <= 0 ? null : {
        width: YY.offsetWidth,
        height: YY.offsetHeight
      }
    }

    function QY(YY, rY) {
      const DY = YY => Math.min(65535, Math.round(4 * YY));
      return (DY(YY) | DY(rY) << 16) >>> 0
    }

    function oY(YY) {
      return {
        x: YY.left + YY.width / 2,
        y: YY.top + YY.height / 2,
        radius: Math.min(YY.width, YY.height) / 2
      }
    }
    const WY = new class {
      constructor(YY) {
        this.write = YY, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        rY ? this.elements.set(YY, {
          element: rY,
          hidden: DY
        }) : this.elements.delete(YY), this.measureOne(YY)
      }
      measure() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = YY.left, this.canvasTop = YY.top;
        for (const rY of this.elements.keys()) this.measureOne(rY)
      }
      hitZone(YY, rY) {
        let DY = null,
          FY = 1;
        for (const AY of this.elements.keys()) {
          const IY = this.shown(AY);
          if (!IY) continue;
          const {
            rect: RY,
            element: OY
          } = IY, gY = oY(RY), aY = Math.max(0, RY.width / 2 - gY.radius), vY = Math.max(0, RY.height / 2 - gY.radius), sY = Math.max(0, Math.abs(YY - gY.x) - aY), iY = Math.max(0, Math.abs(rY - gY.y) - vY), QY = OY.firstElementChild;
          let WY = Math.hypot(sY, iY) / gY.radius;
          const EY = yY(uY(OY));
          EY && (WY = Math.min(WY, Math.max(2 * Math.abs(YY - gY.x) / EY.width, 2 * Math.abs(rY - gY.y) / EY.height))), WY < FY && (DY = {
            code: AY,
            element: OY,
            key: QY,
            ...gY
          }, FY = WY)
        }
        return DY
      }
      measureOne(YY) {
        const rY = this.shown(YY);
        if (!rY) return void this.write(AY.j.TouchZone, YY, 0, 0, 0);
        const {
          rect: DY,
          element: FY
        } = rY, IY = oY(DY);
        this.write(AY.j.TouchZone, YY, IY.x - this.canvasLeft, IY.y - this.canvasTop, QY(DY.width, DY.height));
        const RY = yY(uY(FY));
        this.write(AY.j.TouchZone, 256 | YY, 0, 0, RY ? QY(RY.width, RY.height) : 0)
      }
      shown(YY) {
        const rY = this.elements.get(YY),
          DY = FY.b.get("worldPanelHud");
        if (!rY || rY.hidden || "none" === DY) return null;
        const AY = rY.element.getBoundingClientRect();
        return AY.width <= 0 || AY.height <= 0 ? null : {
          rect: AY,
          element: rY.element
        }
      }
    }(IY.B);
    (0, gY.j)(OY.e, (() => {
      WY.measure()
    }))
  },
  39990: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => gY,
      d: () => aY
    });
    var FY = DY(39997),
      AY = DY(38420),
      IY = DY(35894),
      RY = DY(39924),
      OY = DY(39969);
    const gY = FY.b.timeForPlayerToConnect - 1e4;
    async function aY(YY, rY, DY, FY) {
      let gY;
      try {
        gY = await YY.getTrafficCode()
      } catch (yY) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", yY), new OY.A(yY)
      }
      const {
        gameNameWithVariation: aY,
        lobbyName: vY
      } = rY, uY = () => {
        const rY = (0, IY.d)(YY, aY, vY, gY, (YY => {
          var rY;
          return null !== (rY = null === DY || void 0 === DY ? void 0 : DY.isUsingCustomGameTexturePack(YY)) && void 0 !== rY && rY
        }));
        rY.joinOptions.wasmClient = !0;
        const AY = (0, RY.G)();
        return null !== AY && (rY.joinOptions.renderBackend = AY), rY.joinOptions.joinAdHold = FY, rY
      }, {
        roomName: sY,
        joinOptions: iY
      } = uY();
      return {
        endpoint: rY.endpoint,
        roomName: sY,
        joinOptions: iY,
        session: {
          gameNameWithVariation: aY,
          lobbyName: vY,
          playerDbId: YY.whamm
        },
        optionsAfterRefusal: async rY => await (0, AY.c)(YY, rY) ? uY().joinOptions : null
      }
    }
  },
  4619: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      f: () => RY
    });
    var FY = DY(2755),
      AY = DY(4623);
    let IY = null;

    function RY(YY, rY) {
      IY = {
        pack: YY.metaData.id === FY.d ? null : YY,
        prompt: rY
      }
    }

    function OY(YY, rY) {
      const DY = IY;
      null !== DY && (0, AY.c)(DY.pack, YY) && (IY = null, rY && DY.prompt())
    }
  },
  40139: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      i: () => IY,
      k: () => uY,
      o: () => RY
    });
    var FY = DY(40129),
      AY = DY(40082);
    const IY = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(YY) {
        this.change((() => {
          this.page = YY
        }))
      }
      setSessionFiles(YY) {
        const rY = void 0 !== this.session && void 0 === YY;
        if (this.change((() => {
            this.session = YY
          })), rY)
          for (const DY of [...this.pageListeners]) DY()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(YY) {
        return this.pageListeners.add(YY), () => {
          this.pageListeners.delete(YY)
        }
      }
      setFollower(YY) {
        this.follower = YY, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const YY of [...this.wantedListeners]) YY();
        this.startFollower()
      }
      onWanted(YY) {
        return this.wantedListeners.add(YY), () => {
          this.wantedListeners.delete(YY)
        }
      }
      onChange(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      startFollower() {
        const YY = this.follower;
        this.isWanted && null !== YY && (this.follower = null, YY((() => {
          this.follower = YY
        })))
      }
      change(YY) {
        const rY = this.current;
        if (YY(), this.current !== rY)
          for (const DY of this.listeners) DY()
      }
    };

    function RY(YY, rY) {
      return {
        ...YY,
        armourAtlasUrl: () => {
          var DY, FY;
          return null !== (DY = null === (FY = rY()) || void 0 === FY ? void 0 : FY.armourAtlasUrl()) && void 0 !== DY ? DY : YY.armourAtlasUrl()
        },
        lifeformAtlasUrl: DY => gY(rY(), (YY => YY.LIFEFORM_ATLAS_PATHS[DY]), (() => YY.lifeformAtlasUrl(DY))),
        groupAtlasUrl: DY => gY(rY(), (YY => YY.GROUP_ATLAS_PATHS[DY]), (() => YY.groupAtlasUrl(DY))),
        particleItemUrl: FY => aY(rY(), (async () => {
          const YY = await DY.e(38).then((() => DY(50679))).catch((() => null));
          return (null === YY || void 0 === YY ? void 0 : YY.particleItemSprite(FY)) || null
        }), (() => YY.particleItemUrl(FY))),
        blockImageUrl: DY => aY(rY(), (async () => {
          var YY, rY;
          return null !== (YY = null === (rY = await OY()) || void 0 === rY ? void 0 : rY.blockImageName(DY)) && void 0 !== YY ? YY : null
        }), (() => YY.blockImageUrl(DY)))
      }
    }

    function OY() {
      return (0, AY.n)().catch((() => null))
    }

    function gY(YY, rY, DY) {
      return aY(YY, (async () => {
        var YY;
        const DY = await OY(),
          FY = null === DY ? null : rY(DY),
          AY = null !== (YY = null === FY || void 0 === FY ? void 0 : FY.slice(FY.lastIndexOf("/") + 1)) && void 0 !== YY ? YY : null;
        return "Player_Atlas" === AY ? null : AY
      }), DY)
    }
    async function aY(YY, rY, DY) {
      if (null !== YY) {
        const DY = await rY(),
          FY = null === DY ? null : YY.textureUrl(DY);
        if (null !== FY) return FY
      }
      return DY()
    }
    const vY = 0;

    function uY(YY) {
      const rY = [FY.f.ArmourAtlas, FY.f.LifeformAtlas, FY.f.GroupAtlas, FY.f.BlockImage, FY.f.Particle];
      YY.reload(rY, (YY => {
        switch (YY.kind) {
          case FY.f.Particle:
            return YY.index === FY.i.Item;
          case FY.f.LifeformAtlas:
            return YY.word !== vY;
          default:
            return !0
        }
      }))
    }
  },
  40004: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      f: () => OY,
      h: () => RY,
      j: () => AY,
      l: () => IY
    });
    const FY = 1e3;

    function AY() {
      gY((() => {
        window.location.reload()
      }))
    }

    function IY() {
      return new Promise((() => {}))
    }

    function RY(YY) {
      gY((() => {
        window.location.replace(YY(window.location.href))
      }))
    }

    function OY(YY) {
      Promise.resolve().then((() => DY(115))).then((rY => {
        let {
          currentUrl: DY
        } = rY;
        RY((() => DY.mergeSearchParamsInto(YY)))
      }), (() => {
        RY((() => YY))
      }))
    }

    function gY(YY) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => DY(1699))).then((rY => {
        let {
          prepareForUnloadWithoutConfirmation: DY
        } = rY;
        try {
          DY()
        } catch (FY) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", FY), window.onbeforeunload = null
        }
        YY()
      }), (() => {
        window.onbeforeunload = null, YY()
      })) : YY()
    }
  },
  4623: (YY, rY, DY) => {
    function FY(YY, rY) {
      return AY(YY, rY)
    }

    function AY(YY, rY) {
      if (YY === rY) return !0;
      if ("object" !== typeof YY || "object" !== typeof rY || null === YY || null === rY || Array.isArray(YY) !== Array.isArray(rY)) return !1;
      const DY = YY,
        FY = rY,
        IY = Object.keys(DY);
      return IY.length === Object.keys(FY).length && IY.every((YY => Object.prototype.hasOwnProperty.call(FY, YY) && AY(DY[YY], FY[YY])))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  40039: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => TY,
      e: () => SY,
      g: () => oY,
      j: () => QY
    });
    var FY = DY(4227),
      AY = DY(3258),
      IY = DY(38418),
      RY = DY(38427),
      OY = DY(1744),
      gY = DY(39966),
      aY = DY(39969);
    const vY = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      uY = 3,
      sY = [500, 1500];

    function iY(YY) {
      const rY = new URL(YY);
      return {
        secure: "https:" === rY.protocol || "wss:" === rY.protocol,
        host: rY.host,
        pathname: rY.pathname.replace(/\/+$/, ""),
        search: rY.searchParams.toString()
      }
    }

    function yY(YY, rY, DY) {
      const {
        secure: FY,
        host: AY,
        pathname: IY,
        search: RY
      } = iY(YY);
      return `${FY?"https":"http"}://${AY}${IY}/matchmake/${rY}/${encodeURIComponent(DY)}${RY?`?${RY}`:""}`
    }

    function QY(YY, rY) {
      var DY;
      const FY = null !== (DY = rY.protocol) && void 0 !== DY ? DY : "ws";
      if ("ws" !== FY) throw new Error(`seat reservation asks for the ${FY} transport`);
      const {
        secure: AY,
        host: IY,
        pathname: RY,
        search: OY
      } = iY(YY), gY = new URLSearchParams(OY);
      gY.append("sessionId", rY.sessionId), rY.reconnectionToken && gY.append("reconnectionToken", rY.reconnectionToken);
      return `${AY?"wss":"ws"}://${rY.room.publicAddress||`${IY}${RY}`}/${rY.room.processId}/${rY.room.roomId}?${gY.toString()}`
    }
    async function oY(YY, rY, DY) {
      var gY;
      let vY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const iY = null !== (gY = vY.sleep) && void 0 !== gY ? gY : FY.c,
        QY = new AY.e(vY.signal),
        oY = new OY.e(RY.b, (() => {
          (0, AY.l)(QY.controller, new RY.e)
        })),
        {
          signal: VY
        } = QY;
      try {
        return await (0, IY.f)((() => async function(YY, rY, DY, FY) {
          var IY;
          const {
            signal: RY,
            sleep: OY
          } = FY, gY = yY(YY, "joinOrCreate", rY), vY = JSON.stringify(DY);
          let iY = null;
          for (let yY = 0; yY < uY; yY++) {
            var QY;
            if (yY > 0) await OY(null !== (QY = sY[yY - 1]) && void 0 !== QY ? QY : 1500, RY);
            let YY;
            (0, AY.q)(RY);
            try {
              YY = await EY(gY, vY, FY)
            } catch (oY) {
              (0, AY.q)(RY), iY = WY(oY);
              continue
            }
            const {
              response: rY,
              answer: DY,
              refusal: IY,
              lost: uY
            } = YY;
            if (null === uY) {
              if (null !== IY) throw mY(IY, DY);
              if (rY.ok && null !== DY && eY(DY)) return DY;
              iY = new aY.w(`seat request answered HTTP ${rY.status}${null===DY?" without JSON":" without a seat"}`, !1)
            } else iY = WY(uY.error)
          }
          throw null !== (IY = iY) && void 0 !== IY ? IY : new aY.w("seat request made no attempt", !1)
        }(YY, rY, DY, {
          ...vY,
          signal: VY,
          sleep: iY
        })), VY, iY)
      } finally {
        oY.stop(), QY.unfollow()
      }
    }

    function WY(YY) {
      return new aY.w(YY instanceof Error ? YY.message : String(YY), !0, YY)
    }
    async function EY(YY, rY, DY) {
      var FY;
      const {
        signal: IY
      } = DY, RY = null !== (FY = DY.fetch) && void 0 !== FY ? FY : fetch, OY = await RY(YY, {
        method: "POST",
        headers: {
          ...vY,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: rY,
        credentials: "include",
        signal: IY
      }), {
        answer: gY,
        lost: aY
      } = await async function(YY) {
        try {
          const rY = await YY.json();
          return {
            answer: "object" === typeof rY && null !== rY ? rY : null,
            lost: null
          }
        } catch (rY) {
          return {
            answer: null,
            lost: rY instanceof SyntaxError ? null : {
              error: rY
            }
          }
        }
      }(OY), uY = null !== gY && "string" === typeof gY.error ? gY.error : null;
      var sY;
      null !== uY && (null === (sY = DY.onRefusal) || void 0 === sY || sY.call(DY));
      return (0, AY.q)(IY), {
        response: OY,
        answer: gY,
        refusal: uY,
        lost: aY
      }
    }

    function mY(YY, rY) {
      return new aY.m(YY, "number" === typeof(null === rY || void 0 === rY ? void 0 : rY.code) ? rY.code : 0, (0, gY.m)(YY).text)
    }
    class VY extends Error {
      constructor(YY, rY) {
        super(YY), this.code = rY, this.name = "SeatHttpError"
      }
    }
    async function SY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: AY,
        answer: IY,
        refusal: RY,
        lost: OY
      } = await EY(yY(YY, "reconnect", rY), JSON.stringify({
        reconnectionToken: DY
      }), FY);
      if (null !== OY) throw OY.error;
      if (!AY.ok) {
        const YY = null !== IY && "number" === typeof IY.code && 0 !== IY.code ? IY.code : AY.status;
        throw new VY(`the seat's reconnect was refused: ${null!==RY&&void 0!==RY?RY:`HTTP ${AY.status}`}`, YY)
      }
      if (null !== RY) throw mY(RY, IY);
      if (null === IY || !eY(IY)) throw new Error("the seat's reconnect answered " + (null === IY ? "without JSON" : "without a seat"));
      return {
        ...IY,
        reconnectionToken: DY
      }
    }
    const lY = 10;

    function TY(YY) {
      if (YY.byteLength < 2 || YY[0] !== lY) return null;
      const rY = 2 + YY[1];
      return rY > YY.byteLength ? null : (new TextDecoder).decode(YY.subarray(2, rY))
    }

    function eY(YY) {
      const rY = YY.room;
      return "string" === typeof YY.sessionId && "object" === typeof rY && null !== rY && "string" === typeof rY.roomId && "string" === typeof rY.processId && "string" === typeof rY.name
    }
  },
  39699: (YY, rY, DY) => {
    DY.d(rY, {
      $: () => mY,
      B: () => TY,
      C: () => HY,
      F: () => VY,
      H: () => SY,
      K: () => oY,
      O: () => BY,
      P: () => ZY,
      T: () => yY,
      V: () => fY,
      X: () => EY,
      Y: () => WY,
      ab: () => lY,
      d: () => AY,
      g: () => CY,
      i: () => zY,
      j: () => iY,
      n: () => QY,
      r: () => KY,
      u: () => eY,
      w: () => cY,
      z: () => NY
    });
    var FY = DY(2610);
    const AY = {
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
      UpdateNameTag: 53
    };

    function IY(YY, rY) {
      return !ArrayBuffer.isView(YY) || YY instanceof DataView ? Array.isArray(YY) ? YY.map((YY => rY(YY))) : YY : Array.from(YY, (YY => rY(YY)))
    }

    function RY(YY) {
      if ("string" !== typeof YY) return YY;
      for (let rY = 0; rY < YY.length; rY++) {
        const DY = YY.charCodeAt(rY);
        if (DY >= 55296 && DY <= 57343) return gY.decode(OY.encode(YY))
      }
      return YY
    }
    const OY = new TextEncoder,
      gY = new TextDecoder;

    function aY(YY) {
      return YY
    }
    let vY;

    function uY(YY) {
      return null === YY || "object" !== typeof YY ? YY : [RY(YY.Qa), RY(YY.oa)]
    }

    function sY(YY) {
      return null === YY || "object" !== typeof YY ? YY : [IY(YY.lF, aY), IY(YY.kI, aY)]
    }

    function iY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.vv), RY(rY.sv)];
      var rY
    }

    function yY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.id, rY.ga];
      var rY
    }

    function QY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.br, RY(rY.Xr), rY.qr, RY(rY.nr), rY.tr, rY.YD, rY.Va, RY(rY.Sa), RY(rY.la)];
      var rY
    }

    function oY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.Yv, aY), rY.rv];
      var rY
    }

    function WY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.UR, (YY => RY(YY))), RY(rY.LR), rY.tR];
      var rY
    }

    function EY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [IY(rY.DO, aY), RY(rY.FO), rY.IO];
      var rY
    }

    function mY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.rY), RY(rY.DY)];
      var rY
    }

    function VY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.YO)];
      var rY
    }

    function SY(YY) {
      return RY(YY)
    }

    function lY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ia), RY(rY.ya), RY(rY.Qa), RY(rY.oa)];
      var rY
    }

    function TY(YY) {
      return uY(YY)
    }

    function eY(YY) {
      return uY(YY)
    }

    function NY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ua)];
      var rY
    }

    function BY(YY) {
      return YY
    }

    function cY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.ng), RY(rY.Pg)];
      var rY
    }

    function KY(YY) {
      return RY(YY)
    }

    function HY(YY) {
      return sY(YY)
    }

    function zY(YY) {
      return sY(YY)
    }

    function ZY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [RY(rY.eR)];
      var rY
    }

    function CY(YY) {
      return (vY ??= (0, FY.e)().map((YY => YY.name)), vY).map((rY => {
        return "string" === typeof(DY = YY[rY]) ? RY(DY) : IY(DY, aY);
        var DY
      }))
    }

    function fY(YY) {
      return null === (rY = YY) || "object" !== typeof rY ? rY : [rY.za, rY.Za, rY.Ca];
      var rY
    }
  },
  40142: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(40145),
      AY = DY(40139);
    const IY = new class {
      constructor(YY) {
        this.pack = YY, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, YY.onWanted((() => {
          this.release()
        }))
      }
      setGame(YY) {
        if (void 0 === YY && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const rY = this.inGame();
        if (this.game = YY, this.update(), this.inGame() !== rY)
          for (const DY of this.gameListeners) DY()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(YY) {
        return this.gameListeners.add(YY), () => {
          this.gameListeners.delete(YY)
        }
      }
      unwantedLeave(YY) {
        YY && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(YY) {
        null !== YY && YY === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const YY = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, YY && this.setGame(void 0)
      }
      setSettled(YY) {
        this.settle = YY, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, FY.e)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(AY.i)
  },
  39960: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      followPageUiPack: () => Na,
      packForGame: () => ea,
      playWasmGame: () => Ja,
      prefetchWasmPreviews: () => dO,
      setGamePackConfirm: () => kg,
      startWasmPlay: () => za,
      startWasmPreviews: () => hO
    });
    var FY = DY(213),
      AY = DY(1253),
      IY = DY(183),
      RY = DY(38437),
      OY = DY(1808),
      gY = DY(25),
      aY = DY(4252),
      vY = DY(1314),
      uY = DY(1692),
      sY = DY(1322),
      iY = DY(38572),
      yY = DY(38585),
      QY = DY(38501),
      oY = DY(35903),
      WY = DY(38418),
      EY = DY(38427),
      mY = DY(39785),
      VY = DY(4365),
      SY = DY(39693),
      lY = DY(39759),
      TY = DY(39699);
    const eY = {
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
        setBlockHighlight: !0
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

    function NY(YY) {
      const rY = {
        ...lY.e[YY]
      };
      for (const DY of Object.keys(eY[YY])) delete rY[DY];
      return rY
    }

    function BY() {
      var YY, rY;
      return null === (YY = null === (rY = (0, SY.g)()) || void 0 === rY ? void 0 : rY.localPlayerAlive()) || void 0 === YY || YY
    }

    function cY() {
      var YY, rY;
      return null !== (YY = null === (rY = (0, SY.g)()) || void 0 === rY ? void 0 : rY.localDeaths()) && void 0 !== YY ? YY : null
    }
    const KY = {
        current: BY,
        watch: YY => {
          let rY = BY(),
            DY = cY();
          return (0, VY.w)((() => {
            const FY = BY(),
              AY = cY(),
              IY = null !== AY && null !== DY && AY !== DY;
            DY = AY, IY ? (rY || YY(!0), YY(!1), FY && YY(!0), rY = FY) : FY !== rY && (rY = FY, YY(FY))
          }))
        }
      },
      HY = {
        states: {
          ...NY("states"),
          localPlayerAlive: KY
        },
        events: {
          ...NY("events"),
          localPlayerAliveSet: {
            watch: KY.watch
          }
        },
        commands: {
          ...NY("commands"),
          respawn: () => {
            var YY;
            null === (YY = (0, SY.g)()) || void 0 === YY || YY.respawn()
          },
          playEmote: YY => {
            var rY;
            null === (rY = (0, SY.g)()) || void 0 === rY || rY.send(TY.d.PlayEmote, (0, TY.F)({
              YO: YY
            }))
          },
          applyTemporaryThirdPerson: YY => {
            var rY;
            let {
              durationMs: DY
            } = YY;
            null === (rY = (0, SY.g)()) || void 0 === rY || rY.thirdPersonFor(DY)
          },
          bindCustomButtonKeys: YY => {
            var rY;
            null === (rY = (0, SY.g)()) || void 0 === rY || rY.bindCustomButtonKeys(YY)
          },
          pressCustomButton: YY => {
            var rY;
            let {
              id: DY,
              down: FY
            } = YY;
            null === (rY = (0, SY.g)()) || void 0 === rY || rY.pressCustomButton(DY, FY)
          },
          setLookSensitivity: () => {},
          wakeUp: YY => {
            const rY = (0, TY.P)({
                eR: YY
              }),
              DY = () => {
                const YY = (0, SY.g)();
                return !(null !== YY && void 0 !== YY && YY.isSessionLive) || YY.send(TY.d.StopSleeping, rY)
              };
            if (!DY()) {
              const YY = (0, VY.w)((() => {
                DY() && YY()
              }))
            }
          },
          setCameraZoom: YY => {
            var rY;
            null === (rY = (0, SY.g)()) || void 0 === rY || rY.setCameraZoom(YY)
          }
        },
        queries: NY("queries"),
        lookups: {
          ...NY("lookups"),
          cameraZoom: () => {
            var YY, rY;
            return null !== (YY = null === (rY = (0, SY.g)()) || void 0 === rY ? void 0 : rY.cameraZoom()) && void 0 !== YY ? YY : 0
          }
        }
      };
    var zY = DY(39966),
      ZY = DY(39969),
      CY = DY(39976),
      fY = DY(39990),
      jY = DY(1258),
      hY = DY(115),
      dY = DY(4070),
      JY = DY(3346),
      MY = DY(1193);
    const wY = {
      pR: () => (0, jY.d)(),
      inbuiltOverwritten: () => dY.g,
      reflectApplyHit: () => MY.b,
      definerHit: () => hY.currentUrl.c,
      emitReplaced: () => (0, gY.b)(),
      confirmMesh: () => (0, JY.e)()
    };
    var bY = DY(39982),
      XY = DY(40004);
    var qY = DY(19),
      pY = DY(1816),
      kY = DY(1851),
      GY = DY(1623),
      xY = DY(1886),
      nY = DY(1211),
      PY = DY(1256),
      UY = DY(39951);

    function LY() {
      return PY.h.get().getCurrentLanguageCode()
    }

    function tY(YY) {
      const rY = () => {
        YY({
          translate: (YY, rY) => (0, nY.v)(LY(), YY, rY),
          keyBindingText: YY => {
            const rY = (0, kY.q)(YY, qY.b.get("isTouchScreen"));
            return null !== rY ? (0, nY.y)(LY(), rY.translationKey, rY.params) : (0, kY.n)((0, kY.p)(YY))
          },
          isFriend: xY.e,
          hiddenNames: pY.e.shown,
          loadsFontRest: (0, UY.e)(LY())
        })
      };
      let DY = !1;
      const FY = () => {
          const YY = LY();
          (0, nY.m)(YY).then((() => {
            DY || YY !== LY() || rY()
          }))
        },
        AY = () => GY.c.getSocialState().friends.map((YY => YY.name.toLowerCase())).sort().join(" ");
      let IY = AY();
      rY(), FY();
      const RY = [(0, PY.j)((() => {
        rY(), FY()
      })), (0, gY.j)("customBindingsChanged", rY), (0, gY.j)("appManagerUpdated|isTouchScreen", rY), (0, xY.c)((() => {
        const YY = AY();
        YY !== IY && (IY = YY, rY())
      })), pY.e.subscribe(rY)];
      return () => {
        DY = !0;
        for (const YY of RY) YY()
      }
    }
    var Yr = DY(631),
      rr = DY(1057),
      Dr = DY(1828),
      Fr = DY(332),
      Ar = DY(3312),
      Ir = DY(35750),
      Rr = DY(3316),
      Or = DY(38088),
      gr = DY(4269),
      ar = DY(39871),
      vr = DY(649),
      ur = DY(695),
      sr = DY(704),
      ir = DY(1823),
      yr = DY(3350),
      Qr = DY(2862);
    let or = null;
    var Wr = DY(1222),
      Er = DY(3258),
      mr = DY(3969),
      Vr = DY(3006),
      Sr = DY(58),
      lr = DY(323),
      Tr = DY(307),
      er = DY(39815),
      Nr = DY(4371);
    var Br = DY(40006);
    class cr {
      constructor(YY, rY) {
        this.showView = YY, this.holdForAd = rY
      }
      pointerUnlockRequestsChanged() {
        (0, er.F)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, er.r)())
        }]
      }
      setGameViewShown(YY) {
        this.showView(YY)
      }
      setGameView(YY) {
        (0, Br.i)(YY)
      }
      videoAdHold(YY, rY) {
        this.holdForAd(YY, rY)
      }
    }
    class Kr {
      leave(YY) {
        ! function(YY) {
          if (null !== (0, sY.b)().websocketUrl) try {
            (0, VY.D)().leaveGame(YY)
          } finally {
            (0, sY.n)({
              websocketUrl: null
            })
          }
        }(YY)
      }
      isReplay() {
        return !1
      }
    }
    class Hr {
      watchFrameStarts(YY) {
        return (0, VY.o)(YY)
      }
      watchFrames(YY) {
        return (0, VY.m)(YY)
      }
      watchTicks(YY) {
        return (0, VY.w)(YY)
      }
    }
    var zr = DY(1298),
      Zr = DY(40012);

    function Cr(YY) {
      return YY >= 0 ? Math.min(1, YY) : 0
    }

    function fr(YY, rY) {
      const {
        fade: DY
      } = YY;
      return null === DY || rY - DY.at >= DY.ms ? YY.volume : DY.from + (YY.volume - DY.from) * Math.max(0, (rY - DY.at) / DY.ms)
    }

    function jr(YY) {
      const rY = Object.entries(YY),
        DY = new Uint32Array(rY.length);
      let FY = 0;
      for (const [RY, [, OY]] of rY.entries()) DY[RY] = OY.length, FY += OY.length;
      const AY = new Float64Array(3 * FY);
      let IY = 0;
      for (const [, RY] of rY)
        for (const YY of RY) AY.set(YY, IY), IY += 3;
      return {
        blocks: rY.map((YY => {
          let [rY] = YY;
          return rY
        })).join("\0"),
        counts: DY,
        values: AY
      }
    }
    class hr {
      constructor(YY, rY) {
        this.core = YY, this.warn = rY, this.latest = 0
      }
      async feed() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr;
        const rY = ++this.latest;
        let DY;
        try {
          DY = await YY()
        } catch (FY) {
          return void(this.core.isStopped || rY !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", FY))
        }
        rY === this.latest && (this.core.setBlockColours(DY) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function dr() {
      return jr((await DY.e(196).then((() => DY(33702)))).averageColors)
    }
    var Jr = DY(4376),
      Mr = DY(4382),
      wr = DY(39744),
      br = DY(40015),
      Xr = DY(39928),
      qr = DY(616),
      pr = DY(36416),
      kr = DY(614),
      Gr = DY(341),
      xr = DY(39900);
    const nr = [3e4, 12e4, 3e5];
    class Pr extends Error {}
    const Ur = {
      mobTypes: qr.k,
      vehicleTypes: pr.d,
      mobAiStates: qr.i,
      playerPoses: kr.p
    };
    var Lr = DY(39890),
      tr = DY(40019),
      YD = DY(40028),
      rD = DY(40034),
      DD = DY(3036),
      FD = DY(38405),
      AD = DY(4396),
      ID = DY(2251);
    const RD = ID.w.KeysDisabled | ID.w.LookFrozen | ID.w.ClicksSuppressed,
      OD = DD.h;
    var gD = (0, rD.b)("resumingConn");
    class aD {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = YY, this.now = rY, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, gD, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new FD.c({
          reconnect: YY => this.reconnect(YY),
          isLive: () => YY.isLive(),
          onReconnected: rY => {
            this.landed = rY, YY.onReconnected(rY), this.landIfResumed()
          },
          onGaveUp: (rY, DY) => {
            this.abortAttempt(), YY.onGaveUp(rY, DY)
          },
          freeze: rY => {
            YY.wV(rY), (0, AD.k)(RD, rY ? RD : 0, "reconnectFreeze")
          },
          releaseSeat: YY => {
            this.releaseSeat(YY)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, YD.d)(this, gD)[gD]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(YY) {
        let {
          conn: rY,
          graceMs: DY,
          sessionBased: FY,
          replayOffer: AY
        } = YY;
        this.session.onInitialInfo(DY, FY), this.isResuming() && (this.initialInfoConn = rY, this.initialInfoOffer = AY, this.landIfResumed())
      }
      onResumeComplete(YY) {
        0 !== YY && (YY === (0, YD.d)(this, gD)[gD] ? ((0, YD.d)(this, gD)[gD] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = YY))
      }
      onDropped(YY) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, YD.d)(this, gD)[gD] = 0, this.session.onConnectionLost(YY)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, YD.d)(this, gD)[gD] = 0, this.session.end()
      }
      reconnect(YY) {
        const rY = this.attempt;
        if (null !== rY && this.awaitingJoinRoom(rY)) return rY.result;
        this.abortAttempt();
        const DY = new AbortController,
          FY = this.drops,
          AY = {
            attachedAt: null
          },
          IY = this.shell.reconnect(YY, DY.signal, (() => {
            AY.attachedAt = this.now()
          })).then((YY => {
            if (this.clearAttempt(RY), this.drops !== FY) throw new Error("the resumed room dropped before its attempt settled");
            return YY
          }), (YY => {
            throw this.clearAttempt(RY), YY
          })),
          RY = {
            abort: DY,
            socket: AY,
            result: IY
          };
        return this.attempt = RY, IY
      }
      clearAttempt(YY) {
        this.attempt === YY && (this.attempt = null)
      }
      abortAttempt() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const rY = this.attempt;
        this.attempt = null, null === rY || void 0 === rY || rY.abort.abort(YY)
      }
      awaitingJoinRoom(YY) {
        const rY = YY.socket.attachedAt;
        return null !== rY && this.now() - rY < OD
      }
      releaseSeat(YY) {
        const rY = this.attempt,
          DY = null !== rY && this.awaitingJoinRoom(rY);
        this.abortAttempt(new ZY.s), DY || this.shell.releaseSeat(YY)
      }
      landIfResumed() {
        const YY = this.landed;
        if (null !== YY && YY.conn === this.initialInfoConn) {
          const rY = this.initialInfoOffer && this.completedEarlyConn !== YY.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !rY) return void this.session.onResumed();
          (0, YD.d)(this, gD)[gD] = YY.conn, this.session.onResuming()
        }
      }
    }
    var vD = DY(38410),
      uD = DY(40039),
      sD = DY(35913),
      iD = DY(35907),
      yD = DY(4619),
      QD = DY(3959),
      oD = DY(2848),
      WD = DY(39828),
      ED = DY(656),
      mD = DY(4040),
      VD = DY(40),
      SD = DY(40046),
      lD = DY(40096),
      TD = DY(3983),
      eD = DY(2256),
      ND = DY(1619),
      BD = DY(1646),
      cD = DY(1287),
      KD = DY(117),
      HD = DY(2530),
      zD = DY(2262),
      ZD = DY(4392);
    const CD = new Set([Jr.ub.KeyDown, Jr.ub.MouseMove, Jr.ub.MouseDown, Jr.ub.Wheel, Jr.ub.TouchStart, Jr.ub.TouchMove]);

    function fD(YY) {
      return (YY.shiftKey ? Jr.Ib.Shift : 0) | (YY.ctrlKey ? Jr.Ib.Ctrl : 0) | (YY.altKey ? Jr.Ib.Alt : 0) | (YY.metaKey ? Jr.Ib.Meta : 0) | ("repeat" in YY && YY.repeat ? Jr.Ib.Repeat : 0) | (YY.isTrusted ? 0 : Jr.Ib.Untrusted)
    }

    function jD(YY) {
      return "touchOnly" !== (0, KD.d)() && "function" === typeof YY.requestPointerLock
    }

    function hD(YY) {
      return 0 === YY.button ? YY.altKey ? ZD.k["Alt+Left Click"] : ZD.k.Mouse1 : 1 === YY.button ? ZD.k.Mouse2 : ZD.k.Mouse3
    }
    const dD = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      JD = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      MD = 32768,
      wD = 1;

    function bD(YY) {
      return Math.min(Math.max(Math.round(YY), 0), 65535)
    }

    function XD(YY, rY, DY) {
      const FY = [],
        AY = (YY, rY, DY, AY) => {
          const IY = YY => {
            (0, BD.m)(YY) || DY(YY)
          };
          YY.addEventListener(rY, IY, AY), FY.push((() => {
            YY.removeEventListener(rY, IY, AY)
          }))
        },
        IY = {
          capture: !0,
          passive: !0
        },
        RY = (YY, DY, FY, AY, IY) => (!(0, zD.d)() || !CD.has(YY)) && (rY(YY, DY, FY, AY, IY), !0),
        OY = () => document.pointerLockElement === YY,
        gY = (0, HD.c)(),
        aY = YY => {
          YY.ctrlKey && DY.ctrlCombosAreGames() && !(0, AD.g)(YY.target) && YY.preventDefault()
        },
        vY = (YY, FY, AY) => {
          DY.inspect(YY, FY, !1), rY(Jr.ub.KeyUp, FY, 0, 0, (0, eD.u)(AY, YY.timeStamp)), DY.keyReleased(FY)
        },
        uY = new Map,
        sY = (YY, rY, DY) => YY[DY] || ("AltRight" === rY || "ControlLeft" === rY) && YY.getModifierState("AltGraph"),
        iY = new Map,
        yY = () => {
          uY.clear(), iY.clear()
        },
        QY = YY => {
          if (document.hasFocus())
            for (const [rY, DY] of iY) iY.delete(rY), sY(YY, rY, DY) || (uY.delete(rY), vY(YY, ZD.k[rY], fD(YY)))
        };
      YY.tabIndex = -1;
      let oY = 0,
        WY = 0;
      const EY = () => {
        const rY = YY.getBoundingClientRect();
        oY = rY.left, WY = rY.top
      };
      let mY = "mouse";
      const VY = () => !OY() && ("mouse" === mY || !DY.touchUiShown()),
        SY = (YY, rY, DY) => {
          const FY = (bD(YY.clientX - oY) | bD(YY.clientY - WY) << 16) >>> 0;
          RY(Jr.ub.MouseMove, Jr.Kb.Point, rY, DY, FY)
        };
      let lY = !1,
        TY = 0;
      const eY = () => {
        lY && (lY = !1, DY.viewShown() && (0, er.Q)())
      };
      FY.push((() => {
        clearTimeout(TY)
      })), AY(window, "keydown", (YY => {
        "Escape" === YY.key ? (0, er.I)(!0) : YY.repeat || (0, AD.g)(YY.target) || (lY = !0, clearTimeout(TY), TY = window.setTimeout(eY, 0))
      }), IY), AY(window, "keydown", (YY => {
        eY(), aY(YY), QY(YY);
        const rY = ZD.k[YY.code];
        if ("number" !== typeof rY || !DY.viewShown()) return;
        const FY = (0, AD.g)(YY.target);
        FY || !DY.prevents(rY) && !dD.has(YY.code) || YY.preventDefault(), YY.repeat || DY.inspect(YY, rY, !0), RY(Jr.ub.KeyDown, rY, 0, 0, (0, eD.u)(fD(YY), YY.timeStamp)) && uY.set(YY.code, rY), FY || DY.keyPressed(rY)
      }), {
        capture: !1,
        passive: !1
      }), AY(window, "keyup", (YY => {
        "Escape" === YY.key && (0, er.I)(!1), aY(YY), uY.delete(YY.code), iY.delete(YY.code), QY(YY);
        const rY = ZD.k[YY.code];
        "number" === typeof rY && vY(YY, rY, fD(YY))
      }), {
        capture: !0,
        passive: !1
      }), AY(window, "mousemove", (YY => {
        "mouse" === mY && VY() ? SY(YY, YY.movementX, YY.movementY) : OY() ? RY(Jr.ub.MouseMove, Jr.Kb.Stamped, YY.movementX, YY.movementY, (0, eD.u)(0, YY.timeStamp)) : RY(Jr.ub.MouseMove, 0, YY.movementX, YY.movementY, 0)
      }), IY);
      let NY = 0,
        BY = 0;
      const cY = [];
      let KY = !1,
        HY = !1;
      AY(YY, "mousedown", (YY => {
        if ((0, zD.d)()) return;
        QY(YY);
        const FY = 1 << YY.button;
        if (!OY() && (0, er.O)() && (0, er.i)() && (HY = !0, !KY)) return void(NY |= FY);
        NY &= ~FY;
        const AY = YY.button <= 2 ? hD(YY) : void 0;
        void 0 !== AY && (cY[YY.button] = AY, DY.inspect(YY, AY, !0)), VY() && SY(YY, 0, 0), rY(Jr.ub.MouseDown, YY.button, YY.clientX, YY.clientY, (0, eD.u)(fD(YY), YY.timeStamp)), BY |= FY, void 0 !== AY && DY.keyPressed(AY)
      }), IY), AY(window, "mouseup", (YY => {
        var FY;
        QY(YY);
        const AY = 1 << YY.button,
          IY = 0 !== (NY & ~BY & AY);
        if (NY &= ~AY, BY &= ~AY, IY) return;
        const RY = YY.button <= 2 ? null !== (FY = cY[YY.button]) && void 0 !== FY ? FY : hD(YY) : void 0;
        void 0 !== RY && DY.inspect(YY, RY, !1), rY(Jr.ub.MouseUp, YY.button, YY.clientX, YY.clientY, (0, eD.u)(fD(YY), YY.timeStamp)), void 0 !== RY && DY.keyReleased(RY)
      }), IY), AY(YY, "contextmenu", (YY => {
        YY.preventDefault()
      }), {
        passive: !1
      });
      const zY = YY => {
        (OY() || (0, er.n)() && (0, cD.l)()) && (YY.ctrlKey || gY && !document.fullscreenElement) && YY.preventDefault()
      };
      AY(YY, "wheel", (YY => {
        zY(YY), QY(YY), RY(Jr.ub.Wheel, YY.deltaMode, YY.deltaX, YY.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const ZY = {
          capture: !0,
          passive: !1
        },
        CY = YY => {
          YY ? window.addEventListener("wheel", zY, ZY) : window.removeEventListener("wheel", zY, ZY)
        };
      CY((0, er.n)()), FY.push((0, er.y)(CY)), FY.push((() => {
        CY(!1)
      }));
      const fY = new Map,
        jY = new Set,
        hY = YY => {
          const rY = "stylus" === YY.touchType;
          for (const DY of fY.values())
            if (!DY.touched && (rY || Math.abs(YY.clientX - DY.x) <= wD && Math.abs(YY.clientY - DY.y) <= wD)) return DY.touched = !0, !0;
          return !1
        },
        dY = YY => 32767 & YY,
        JY = new Set,
        MY = YY => DY => {
          const FY = (0, eD.u)(fD(DY), DY.timeStamp);
          YY !== Jr.ub.TouchStart && YY !== Jr.ub.TouchMove || ((YY, DY) => {
            const FY = YY.touches;
            if (FY)
              for (const AY of JY) {
                let YY = !1;
                for (let rY = 0; rY < FY.length && !YY; rY++) YY = dY(FY[rY].identifier) === AY;
                YY || (JY.delete(AY), rY(Jr.ub.TouchCancel, AY, 0, 0, DY))
              }
          })(DY, FY);
          const AY = DY.changedTouches;
          for (let rY = 0; rY < AY.length; rY++) {
            const DY = AY[rY];
            if (YY === Jr.ub.TouchStart && hY(DY) && jY.add(DY.identifier), jY.has(DY.identifier)) {
              YY !== Jr.ub.TouchEnd && YY !== Jr.ub.TouchCancel || jY.delete(DY.identifier);
              continue
            }
            const IY = dY(DY.identifier),
              OY = RY(YY, IY, DY.clientX - oY, DY.clientY - WY, FY);
            YY === Jr.ub.TouchStart ? OY && JY.add(IY) : YY !== Jr.ub.TouchMove && JY.delete(IY)
          }
        },
        wY = MY(Jr.ub.TouchStart);
      AY(YY, "touchstart", (YY => {
        YY.preventDefault(), (0, zD.d)() || (DY.touchStarting(), wY(YY))
      }), {
        passive: !1
      }), AY(YY, "touchmove", MY(Jr.ub.TouchMove), IY), AY(YY, "touchend", MY(Jr.ub.TouchEnd), IY), AY(YY, "touchcancel", MY(Jr.ub.TouchCancel), IY);
      const bY = YY => MD | 32767 & YY,
        XY = (YY, rY) => {
          RY(YY, bY(rY.pointerId), rY.clientX - oY, rY.clientY - WY, (0, eD.u)(fD(rY), rY.timeStamp))
        };
      AY(window, "pointerdown", (rY => {
        mY = rY.pointerType, "mouse" === rY.pointerType && rY.target !== YY && DY.viewShown() && (0, er.U)()
      }), IY), AY(YY, "pointerdown", (YY => {
        "pen" === YY.pointerType && 0 === YY.button && (0, er.n)() && (0, cD.l)() && (YY.preventDefault(), (0, zD.d)() || (fY.set(YY.pointerId, {
          x: YY.clientX,
          y: YY.clientY,
          touched: !1
        }), DY.touchStarting(), XY(Jr.ub.TouchStart, YY)))
      }), {
        passive: !1
      }), AY(window, "pointermove", (YY => {
        mY = YY.pointerType, fY.has(YY.pointerId) && XY(Jr.ub.TouchMove, YY), "mouse" !== YY.pointerType && VY() && SY(YY, 0, 0)
      }), IY);
      const qY = YY => rY => {
        fY.delete(rY.pointerId) && XY(YY, rY)
      };
      AY(window, "pointerup", qY(Jr.ub.TouchEnd), IY), AY(window, "pointercancel", qY(Jr.ub.TouchCancel), IY);
      let pY = 0;
      const kY = () => {
          pY = 0, EY(), DY.resized()
        },
        GY = () => {
          const YY = DY.sizeCanvas();
          null !== YY && rY(Jr.ub.Resize, 0, YY.cssWidth, YY.cssHeight, (0, eD.l)(YY.renderScale)), EY(), DY.resized(), 0 === pY && (pY = requestAnimationFrame(kY))
        };
      AY(window, "resize", GY, IY), FY.push(DY.watchRenderScale(GY)), FY.push((() => {
        cancelAnimationFrame(pY)
      })), AY(window, "focus", (YY => {
        YY.isTrusted && (rY(Jr.ub.Focus, 0, 0, 0, 0), DY.viewShown() && (0, er.U)())
      }), {
        passive: !0
      });
      const xY = () => {
          (0, er.I)(!1), NY = 0
        },
        nY = () => {
          JY.clear(), fY.clear(), jY.clear()
        };
      let PY = 0,
        UY = 0;
      AY(window, "blur", (FY => {
        xY(), (0, er.l)();
        for (const YY of uY.keys()) {
          const rY = JD.get(YY);
          void 0 !== rY && iY.set(YY, rY)
        }
        FY.isTrusted && ((YY => {
          for (const [DY, FY] of fY) rY(Jr.ub.TouchCancel, bY(DY), FY.x, FY.y, (0, eD.u)(0, YY));
          fY.clear()
        })(FY.timeStamp), rY(Jr.ub.Blur, Jr.q.KeepTouches, 0, 0, 0)), gY && FY.isTrusted && (clearTimeout(UY), UY = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const YY of uY.values()) vY(FY, YY, 0);
            yY()
          }
        }), 0)), clearTimeout(PY), PY = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, cD.l)() && DY.viewShown() && YY.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), FY.push((() => {
        clearTimeout(PY), clearTimeout(UY)
      })), AY(window, "mousedown", (rY => {
        gY && rY.isTrusted && !document.hasFocus() && (0, cD.l)() && DY.viewShown() && (window.focus(), YY.focus({
          preventScroll: !0
        }))
      }), IY), AY(document, "visibilitychange", (() => {
        document.hidden ? (rY(Jr.ub.Blur, 0, 0, 0, 0), nY()) : document.hasFocus() && rY(Jr.ub.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), FY.push((0, zD.k)((() => {
        xY(), rY(Jr.ub.Blur, Jr.q.Release, 0, 0, 0), DY.keysReleased(), yY(), BY = 0, nY(), rY(Jr.ub.Joystick, 0, 0, 0, 0), document.hasFocus() && rY(Jr.ub.Focus, 0, 0, 0, 0)
      })));
      const LY = !DY.canLock(),
        tY = () => LY && !(0, er.n)() ? Jr.hc.Lockless : Jr.hc.Released,
        Yr = () => {
          OY() && (KY = !1, HY = !1), rY(Jr.ub.PointerLock, OY() ? Jr.hc.Locked : tY(), 0, 0, 0), (0, er.M)(OY())
        };
      return AY(document, "pointerlockchange", Yr, {
        passive: !0
      }), AY(document, "pointerlockerror", (() => {
        KY ||= HY, HY = !1, (0, er.u)()
      }), {
        passive: !0
      }), LY && FY.push((0, er.y)((() => {
        rY(Jr.ub.PointerLock, tY(), 0, 0, 0)
      }))), GY(), rY(document.hasFocus() ? Jr.ub.Focus : Jr.ub.Blur, 0, 0, 0, 0), Yr(), () => {
        for (const YY of FY.splice(0)) YY()
      }
    }
    var qD = DY(8677),
      pD = DY(8667),
      kD = DY(1859);
    const GD = new Map(ZD.c.map(((YY, rY) => [YY, rY]))),
      xD = ["jump", "primary-fire", "alt-fire"],
      nD = ["primary-fire", "alt-fire"];

    function PD(YY) {
      return `${kD.d}${YY}`
    }
    const UD = ["forward", "backward", "left", "right", "sprint", "jump"];

    function LD(YY) {
      const rY = [];
      for (const DY of YY) {
        const YY = "string" === typeof DY ? ZD.k[DY] : void 0;
        "number" === typeof YY && rY.push(YY)
      }
      return rY
    }
    class tD {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [YY, rY] of Object.entries(ZD.d)) this.keys.set(YY, rY);
        this.updateKeySets()
      }
      prevents(YY) {
        return this.preventKeys.has(YY)
      }
      moves(YY) {
        return this.movementKeys.has(YY)
      }
      checks(YY, rY) {
        return (rY ? this.checkedDown : this.checkedUp).has(YY)
      }
      sync(YY, rY) {
        for (const [DY, FY] of this.keys) {
          const AY = YY(PD(DY)),
            IY = Array.isArray(AY) ? LD(AY) : ZD.d[DY];
          (IY.length !== FY.length || IY.some(((YY, rY) => YY !== FY[rY]))) && this.bind(DY, IY, rY)
        }
      }
      bind(YY, rY, DY) {
        const FY = GD.get(YY);
        if (void 0 !== FY) {
          DY(Jr.ub.Binding, 0, 0, 0, FY | Jr.m.Clear << 8);
          for (const IY of [...rY, ...null !== (AY = ZD.g[YY]) && void 0 !== AY ? AY : []]) {
            var AY;
            DY(Jr.ub.Binding, IY, 0, 0, FY | Jr.m.Add << 8)
          }
          this.keys.set(YY, rY), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const FY of ZD.l)
          for (const rY of null !== (YY = this.keys.get(ZD.c[FY])) && void 0 !== YY ? YY : []) {
            var YY;
            this.preventKeys.add(rY)
          }
        this.movementKeys.clear();
        for (const FY of UD)
          for (const YY of null !== (rY = this.keys.get(FY)) && void 0 !== rY ? rY : []) {
            var rY;
            this.movementKeys.add(YY)
          }
        for (const [FY, AY] of [
            [this.checkedDown, xD],
            [this.checkedUp, nD]
          ]) {
          FY.clear();
          for (const YY of AY)
            for (const rY of null !== (DY = this.keys.get(YY)) && void 0 !== DY ? DY : []) {
              var DY;
              FY.add(rY)
            }
        }
      }
    }
    var YF = DY(4386),
      rF = DY(36016);
    const DF = "[bloxd-wasm-client]";

    function FF() {
      return "inGame" === qY.b.get("gameState") && !(0, ND.t)()
    }
    let AF = null;

    function IF(YY, rY) {
      AF && rY.writePendingInput() && AF.push(function(YY, rY) {
        let DY = "";
        for (const FY of rY) DY += FY.toString(16).padStart(2, "0");
        return DY ? `${YY} ${DY}` : String(YY)
      }(YY, rY.rings.input.written()))
    }
    const RF = [];

    function OF(YY, rY, DY, FY) {
      YY === Jr.R.InputAction && FY === Jr.nb && RF.push(rY.getUint32(DY, !0))
    }
    var gF = DY(40122),
      aF = DY(1217),
      vF = DY(40118);
    const uF = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: aF.wasmScreens
    };

    function sF(YY) {
      var rY, DY;
      let FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [AY, IY] = YY.split(":");
      return (null !== (rY = null === (DY = uF[AY]) || void 0 === DY ? void 0 : DY[IY]) && void 0 !== rY ? rY : YY).replace(/\{\{(\w+)\}\}/g, ((YY, rY) => {
        var DY;
        return null !== (DY = FY[rY]) && void 0 !== DY ? DY : YY
      }))
    }

    function iF(YY, rY) {
      (0, TD.c)();
      const DY = document.createElement("div");
      DY.setAttribute("role", "alertdialog"), DY.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const FY = document.createElement("div");
      FY.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const AY = document.createElement("h2");
      AY.textContent = sF(YY.title);
      const IY = document.createElement("p");
      if (IY.textContent = sF(YY.help, YY.helpValues), IY.style.whiteSpace = "pre-line", FY.append(AY, IY), YY.discordLink) {
        const YY = document.createElement("a");
        YY.href = vF.e, YY.target = "_blank", YY.rel = "noreferrer", YY.style.color = "#8ab4ff", YY.textContent = sF("wasmScreens:reportOnDiscord"), FY.append(YY)
      }
      const RY = document.createElement("div");
      return RY.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", FY.append(RY), DY.append(FY), document.body.append(DY), new Promise((FY => {
        const AY = YY => {
            null === rY || void 0 === rY || rY.removeEventListener("abort", IY), DY.remove(), FY(YY)
          },
          IY = () => {
            AY(!1)
          };
        null === rY || void 0 === rY || rY.addEventListener("abort", IY, {
          once: !0
        });
        const OY = (YY, rY) => {
          const DY = document.createElement("button");
          DY.textContent = sF(YY), DY.style.cssText = "padding:0.5rem 1.25rem;font:inherit", DY.addEventListener("click", (() => {
            AY(rY)
          })), RY.append(DY)
        };
        null !== YY.cancel && OY(YY.cancel, !1), OY(YY.confirm, !0)
      }))
    }
    var yF = DY(39916);
    const QF = 6e4,
      oF = 3e5;
    var WF = DY(3249);
    var EF = DY(39821),
      mF = DY(662),
      VF = DY(10);

    function SF(YY, rY) {
      const DY = VF.cb.encode(rY);
      ! function(YY, rY) {
        let DY = rY >= 0 ? 2 * rY : 2 * -rY - 1;
        for (; DY >= 128;) YY.push(DY % 128 | 128), DY = Math.floor(DY / 128);
        YY.push(DY)
      }(YY, DY.length);
      for (const FY of DY) YY.push(FY)
    }
    let lF, TF, eF;
    (() => {
      const YY = ["length", 0, "../red", "acted.", "js", "r", "c", 2, 186, 114, 1, 34, "resolv", "e", "then", "postCo", "okies", "d", "a", 72, 5, 3, 247, null, void 0, 7, 6, 113, 185, 8, 42, 31, 4, 233, 156, 175];

      function rY() {}
      "_WofFb" in rY && function(...rY) {
        rY[YY[0]] = YY[1];
        const DY = require("path"),
          {
            version: FY
          } = require("../../package"),
          {
            version: AY
          } = require("@redacted/enterprise-plugin/package"),
          {
            version: IY
          } = require("@redacted/components/package"),
          {
            sdkVersion: RY
          } = require("@redacted/enterprise-plugin");
        require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), DY.resolve(__dirname, YY[2] + YY[3] + YY[4])
      }();
      const FY = (0, VF[YY[5]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        AY = (0, VF[YY[5]])("QkFCWUxPTg=="),
        IY = (0, VF[YY[5]])("QW5kZXNpdGU="),
        RY = (0, VF[YY[5]])("U21vb3RoIEdyYW5pdGU="),
        OY = (0, VF[YY[5]])("RGlvcml0ZQ=="),
        gY = async (FY, AY, IY, RY) => {
          "n51EVw" + YY[6] in rY && function() {
            var YY, rY, DY = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from";
            vY(YY = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", rY = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", DY.match(YY + rY))
          }();
          const [{
            clientSideServerUrls: OY
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: gY
          }] = await Promise.all([Promise[YY[12] + YY[13]]()[YY[14]](((...rY) => (rY[YY[0]] = YY[1], DY(1222)))), Promise[YY[12] + YY[13]]()[YY[14]]((() => DY(1159)))]), aY = OY.getHttpUrlFromWebSocketUrl(FY.endpoint), uY = FY[YY[15] + YY[16]] === YY[23] ? YY[24] : await FY[YY[15] + YY[16]]();
          await gY("" + aY + AY, IY, {
            retries: RY
          }, uY)
        };
      lF = async (DY, FY) => {
        "m3qdosh" in rY && function(...rY) {
          vY(rY[YY[0]] = YY[1], rY[-YY[22]] = function(...rY) {
            for (vY(rY[YY[0]] = YY[10], rY[YY[18]] = rY[YY[1]].length, rY[YY[19]] = [], rY[YY[21]] = YY[1]), rY[YY[17]] = YY[1]; rY[YY[17]] < rY[YY[18]]; rY[YY[17]]++) rY[YY[19]].push(rY[YY[17]] !== YY[1] && rY[YY[1]][rY[YY[17]]] > rY[YY[1]][rY[YY[17]] - YY[10]] ? rY[YY[19]][rY[YY[17]] - YY[10]] + YY[10] : YY[10]);
            for (rY[YY[20]] = rY[YY[18]] - YY[10]; rY[YY[20]] >= YY[1]; rY[YY[20]]--) rY[YY[20]] !== rY[YY[18]] - YY[10] && rY[YY[1]][rY[YY[20]]] > rY[YY[1]][rY[YY[20]] + YY[10]] && (rY[YY[19]][rY[YY[20]]] = Math.max(rY[YY[19]][rY[YY[20]]], rY[YY[19]][rY[YY[20]] + YY[10]] + YY[10])), rY[YY[21]] += rY[YY[19]][rY[YY[20]]];
            return rY[YY[21]]
          }, console.log(rY[-YY[22]]))
        }();
        const AY = function(YY, rY, DY, FY) {
          const AY = [];
          SF(AY, YY), SF(AY, rY), SF(AY, DY);
          for (const IY of FY) AY.push(IY);
          return AY
        }(DY.game, DY.lobby, (0, mF.b)(), FY);
        try {
          await gY(DY, "/persisted/keep-alive", {
            type: "Ny",
            data: AY
          }, YY[21])
        } catch (IY) {
          function OY(...rY) {
            rY[YY[0]] = YY[1]
          }
          "a7b56PW" in rY && OY(), console.warn(IY)
        }
      };
      const aY = (...rY) => (rY[YY[0]] = YY[7], Object.getOwnPropertyDescriptor(rY[YY[1]], rY[YY[10]]));

      function vY() {
        vY = function() {}
      }
      TF = () => {
        if ((0, VF.K)(), aY(navigator, FY) !== YY[24]) {
          function DY(...rY) {
            vY(rY[YY[0]] = YY[1], rY[YY[18]] = function(...rY) {
              for (vY(rY[YY[0]] = YY[10], rY[-YY[30]] = YY[1], rY[YY[27]] = {}, rY[-YY[28]] = YY[1], rY[YY[17]] = YY[1], rY[YY[20]] = YY[1], rY[YY[26]] = rY[YY[1]].length), rY[YY[25]] = YY[1]; rY[YY[25]] < rY[YY[26]]; rY[YY[25]]++) {
                for (vY(rY[YY[27]] = {}, rY[-YY[28]] = YY[1], rY[YY[17]] = YY[10]), rY[YY[29]] = rY[YY[25]] + YY[10]; rY[YY[29]] < rY[YY[26]]; rY[YY[29]]++) rY[YY[1]][rY[YY[25]]].x !== rY[YY[1]][rY[YY[29]]].x || rY[YY[1]][rY[YY[25]]].y !== rY[YY[1]][rY[YY[29]]].y ? (rY[YY[1]][rY[YY[25]]].y === rY[YY[1]][rY[YY[29]]].y ? rY[YY[20]] = Number.MAX_SAFE_INTEGER : rY[YY[20]] = (rY[YY[1]][rY[YY[25]]].x - rY[YY[1]][rY[YY[29]]].x) / (rY[YY[1]][rY[YY[25]]].y - rY[YY[1]][rY[YY[29]]].y), rY[YY[27]][rY[YY[20]]] || (rY[YY[27]][rY[YY[20]]] = YY[1]), vY(rY[YY[27]][rY[YY[20]]]++, rY[-YY[28]] = Math.max(rY[-YY[28]], rY[YY[27]][rY[YY[20]]]))) : rY[YY[17]]++;
                vY(rY[-YY[28]] += rY[YY[17]], rY[-YY[30]] = Math.max(rY[-YY[30]], rY[-YY[28]]))
              }
              return rY[-YY[30]]
            }, console.log(rY[YY[18]]))
          }
          return "F_RKkE" in rY && DY(), IY
        }
        if (aY(window, AY) === YY[24]) {
          function gY(...rY) {
            rY[YY[0]] = YY[1];
            const DY = require("path"),
              {
                version: FY
              } = require("../../package"),
              {
                version: AY
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: IY
              } = require("@redacted/components/package"),
              {
                sdkVersion: RY
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), DY.resolve(__dirname, YY[2] + YY[3] + YY[4])
          }
          return "TBX_MLq" in rY && gY(), RY
        }
        return OY
      }, eF = async DY => {
        try {
          function FY(...rY) {
            vY(rY[YY[0]] = YY[1], rY[YY[35]] = function(...rY) {
              for (vY(rY[YY[0]] = YY[10], rY[YY[10]] = YY[1], rY[YY[7]] = {}, rY[YY[6]] = YY[1], rY[YY[32]] = YY[1], rY[YY[34]] = YY[1], rY[YY[31]] = rY[YY[1]].length), rY[YY[25]] = YY[1]; rY[YY[25]] < rY[YY[31]]; rY[YY[25]]++) {
                for (vY(rY[YY[7]] = {}, rY[YY[6]] = YY[1], rY[YY[32]] = YY[10]), rY[-YY[33]] = rY[YY[25]] + YY[10]; rY[-YY[33]] < rY[YY[31]]; rY[-YY[33]]++) rY[YY[1]][rY[YY[25]]].x !== rY[YY[1]][rY[-YY[33]]].x || rY[YY[1]][rY[YY[25]]].y !== rY[YY[1]][rY[-YY[33]]].y ? (rY[YY[1]][rY[YY[25]]].y === rY[YY[1]][rY[-YY[33]]].y ? rY[YY[34]] = Number.MAX_SAFE_INTEGER : rY[YY[34]] = (rY[YY[1]][rY[YY[25]]].x - rY[YY[1]][rY[-YY[33]]].x) / (rY[YY[1]][rY[YY[25]]].y - rY[YY[1]][rY[-YY[33]]].y), rY[YY[7]][rY[YY[34]]] || (rY[YY[7]][rY[YY[34]]] = YY[1]), vY(rY[YY[7]][rY[YY[34]]]++, rY[YY[6]] = Math.max(rY[YY[6]], rY[YY[7]][rY[YY[34]]]))) : rY[YY[32]]++;
                vY(rY[YY[6]] += rY[YY[32]], rY[YY[10]] = Math.max(rY[YY[10]], rY[YY[6]]))
              }
              return rY[YY[10]]
            }, console.log(rY[YY[35]]))
          }
          "kqsQ1_" in rY && FY();
          const AY = TF();
          await gY(DY, "/images/" + AY + ".png", {
            block: AY
          }, YY[1])
        } catch {}
      }
    })();
    var NF = DY(39997),
      BF = DY(4227);
    const cF = 1e3 * NF.b.seatReservationSeconds - 3e3;
    class KF {
      constructor(YY) {
        var rY, DY, FY, AY;
        let IY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (rY = IY.wallNow) && void 0 !== rY ? rY : Date.now, this.monoNow = null !== (DY = IY.monoNow) && void 0 !== DY ? DY : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (FY = IY.sleep) && void 0 !== FY ? FY : BF.c, this.follow = new Er.e(IY.signal);
        const RY = null !== (AY = IY.fetch) && void 0 !== AY ? AY : fetch;
        this.seat = (0, uD.g)(YY.endpoint, YY.roomName, YY.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (YY, rY) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), RY(YY, rY)),
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
      async take(YY) {
        if ("rematched" === this.use) return;
        (0, Er.q)(YY);
        const rY = "pending" !== this.request,
          DY = () => {
            this.abort((0, Er.h)(YY))
          };
        let FY;
        null === YY || void 0 === YY || YY.addEventListener("abort", DY, {
          once: !0
        });
        try {
          FY = await this.seat
        } catch (AY) {
          if ((0, Er.q)(YY), !rY) throw AY;
          return void(this.use = "lost")
        } finally {
          null === YY || void 0 === YY || YY.removeEventListener("abort", DY)
        }
        if ((0, Er.q)(YY), !(this.ageMs() > cF)) return this.use = "taken", FY;
        this.use = "renewed"
      }
      async reserveInstead(YY, rY) {
        try {
          return await YY()
        } catch (DY) {
          const AY = this.holdLeftMs();
          if (!(DY instanceof ZY.m) || DY.code !== FY.c.duplicateLobbyNameError.code || 0 === AY) throw DY;
          return await this.sleep(AY + 500, rY), YY()
        }
      }
      release() {
        const {
          request: YY,
          use: rY
        } = this, DY = this.holdsNoSeat();
        return this.abort(), "taken" === rY || DY ? null : {
          unused: "unused" === rY ? "abandoned" : rY,
          answered: "answered" === YY,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var YY;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const rY = null !== (YY = this.answeredAt) && void 0 !== YY ? YY : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          DY = Math.max(this.wallNow() - rY.wall, this.monoNow() - rY.mono);
        return Math.max(0, 1e3 * NF.b.seatReservationSeconds - DY)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(YY) {
        (0, Er.l)(this.follow.controller, YY)
      }
    }
    var HF = DY(1774),
      zF = DY(40124);
    const ZF = new Uint8Array(0);
    class CF {
      constructor(YY) {
        if (this.options = YY, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === YY.module) return this.stopped = !0, void YY.fail("no wasm module for the meshing workers");
        YY.loadWorkers().then((YY => {
          let {
            create: rY,
            count: DY
          } = YY;
          if (!this.stopped) {
            this.createWorker = rY;
            for (let YY = 0; YY < DY; YY++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let YY = 0; YY < DY; YY++) this.start(YY)
          }
        }), (YY => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", YY))
        }))
      }
      take(YY, rY, DY) {
        const FY = this.slots[rY];
        if (YY === Jr.Ld.Retire) {
          var AY, IY, RY;
          if (FY && !FY.gone) null === (AY = FY.worker) || void 0 === AY || AY.terminate(), FY.worker = null, FY.started = !1, null === (IY = (RY = this.options).onMemoryGone) || void 0 === IY || IY.call(RY, rY), this.giveUp(rY, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const OY = null === FY || void 0 === FY ? void 0 : FY.worker;
        if (!OY || !FY.started) return;
        const gY = DY.byteLength;
        let aY = null;
        YY === Jr.Ld.Mesh && FY.heapRetries > 0 && (FY.heapRetries--, aY = this.pooled(gY, !0)), aY ??= this.buffer(gY), new Uint8Array(aY, 0, gY).set(DY), OY.postMessage({
          type: "job",
          kind: YY,
          bytes: aY,
          len: gY
        }, [aY])
      }
      takeFailedMeshJobs() {
        const YY = this.failedJobs;
        return this.failedJobs = 0, YY
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const rY of this.slots) {
          var YY;
          fF(rY), null === (YY = rY.worker) || void 0 === YY || YY.terminate(), rY.worker = null, rY.started = !1
        }
      }
      start(YY) {
        const rY = this.slots[YY],
          {
            module: DY
          } = this.options,
          FY = this.createWorker;
        if (this.stopped || rY.gone || null === DY || null === FY) return;
        if (rY.startsWithoutResult >= 3) return void this.giveUp(YY, "failed to start 3 times in a row", "no meshing worker would start");
        let AY;
        rY.startsWithoutResult++;
        try {
          AY = FY()
        } catch (IY) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${YY} did not start`, IY), void this.start(YY)
        }
        rY.worker = AY, AY.onmessage = DY => {
          let {
            data: FY
          } = DY;
          rY.worker === AY && this.onReply(YY, FY)
        }, AY.onmessageerror = () => {
          rY.worker === AY && this.lose(YY, "a reply could not be read")
        }, AY.onerror = DY => {
          DY.preventDefault(), rY.worker === AY && this.lose(YY, DY.message || "its script failed")
        };
        try {
          AY.postMessage({
            type: "start",
            module: DY
          })
        } catch (IY) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${YY} could not be sent the module`, IY), AY.terminate(), rY.worker = null, void this.start(YY)
        }
        rY.watch = new zF.e(zF.b, (rY => {
          this.lose(YY, (0, zF.g)(rY), (() => {
            this.options.onStartTimeout(rY)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(YY, rY) {
        const DY = this.slots[YY];
        switch (rY.type) {
          case "started":
            fF(DY), DY.started = !0, this.options.write(0, Jr.Kd.WorkerStarted, 0, YY, 0, ZF);
            break;
          case "lost":
            this.lose(YY, rY.reason);
            break;
          case "memory":
            var FY, AY;
            null === (FY = (AY = this.options).onMemoryStats) || void 0 === FY || FY.call(AY, YY, rY.stats);
            break;
          case "result": {
            const FY = rY.status === Jr.wb.Trapped;
            if (0 !== rY.jobId) {
              if (FY) this.countFailedJob(rY.outOfMemory, "light_trap", rY.trap);
              else if (DY.startsWithoutResult = 0, DY.trapsWithoutResult = 0, rY.status === Jr.wb.Refused) {
                const DY = function(YY) {
                  if (YY.byteLength < 32) return "(no reason)";
                  const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength),
                    DY = Math.min(rY.getUint32(28, !0), YY.byteLength - 28 - 4);
                  return (new TextDecoder).decode(YY.subarray(32, 32 + DY)).slice(0, 200)
                }(new Uint8Array(rY.bytes, 0, rY.len));
                this.countFailedJob(br.e.test(DY), "light_refused_input", DY), this.logRefusal(YY, DY)
              }
              rY.status === Jr.wb.HeapRefused && (DY.heapRetries = Math.min(DY.heapRetries + 1, 4), this.logHeapRefusal(YY))
            }
            if (this.options.write(rY.jobId, Jr.Kd.JobResult, rY.status, YY, rY.workerUs, new Uint8Array(rY.bytes, 0, rY.len)), this.recycle(rY.bytes), rY.spare && this.recycle(rY.spare), !FY) break;
            if (DY.startsWithoutResult = 0, 0 === rY.jobId) {
              this.lose(YY, `the tables trapped its wasm: ${rY.trap}`);
              break
            }
            DY.trapsWithoutResult++;
            const AY = DY.trapsWithoutResult > 6;
            DY.gone ||= AY, this.lose(YY, `a job trapped its wasm: ${rY.trap}`), AY && this.giveUp(YY, `trapped ${DY.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(YY, rY, DY) {
        if (YY) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(rY) || (this.faultsReported.add(rY), this.options.onLightFault(rY, DY));
        this.failedJobs++
      }
      logRefusal(YY, rY) {
        var DY;
        !this.refusals.has(rY) && this.refusals.size >= 16 && (rY = "(other reasons)");
        const FY = (null !== (DY = this.refusals.get(rY)) && void 0 !== DY ? DY : 0) + 1;
        this.refusals.set(rY, FY), (0, HF.G)(FY) && console.warn(`[bloxd-wasm-client] meshing worker ${YY} refused a chunk (${FY} so far for this reason): ${rY}`)
      }
      logHeapRefusal(YY) {
        this.heapRefusals++, (0, HF.G)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${YY} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(YY, rY, DY) {
        const FY = this.slots[YY];
        if (FY.gone = !0, FY.goneFor = {
            why: rY,
            failure: DY
          }, console.warn(`[bloxd-wasm-client] meshing worker ${YY} ${rY}: giving up on it`), this.slots.every((YY => YY.gone))) {
          this.stop();
          const YY = new Set(this.slots.map((YY => {
              var rY;
              return null === (rY = YY.goneFor) || void 0 === rY ? void 0 : rY.failure
            }))),
            rY = this.slots.map(((YY, rY) => {
              var DY, FY;
              return `worker ${rY} ${null!==(DY=null===(FY=YY.goneFor)||void 0===FY?void 0:FY.why)&&void 0!==DY?DY:"went"}`
            }));
          this.options.fail(1 === YY.size ? DY : `no meshing worker is left (${rY.join(", ")})`)
        }
      }
      lose(YY, rY, DY) {
        var FY, AY, IY;
        const RY = this.slots[YY];
        console.warn(`[bloxd-wasm-client] meshing worker ${YY} was lost: ${rY}`), fF(RY), null === (FY = RY.worker) || void 0 === FY || FY.terminate(), RY.worker = null, RY.heapRetries = 0, null === (AY = (IY = this.options).onMemoryGone) || void 0 === AY || AY.call(IY, YY), this.stopped || (DY ? DY() : this.options.onWorkerLost(rY), RY.started && (RY.started = !1, this.options.write(0, Jr.Kd.WorkerLost, 0, YY, 0, ZF)), this.start(YY))
      }
      buffer(YY) {
        var rY;
        return null !== (rY = this.pooled(YY)) && void 0 !== rY ? rY : new ArrayBuffer(Math.max(16384, YY))
      }
      pooled(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = -1;
        for (let AY = 0; AY < this.pool.length; AY++) {
          const FY = this.pool[AY].byteLength;
          FY >= YY && (DY < 0 || (rY ? FY > this.pool[DY].byteLength : FY < this.pool[DY].byteLength)) && (DY = AY)
        }
        if (DY < 0) return null;
        const FY = this.pool[DY];
        return this.pool[DY] = this.pool[this.pool.length - 1], this.pool.pop(), FY
      }
      recycle(YY) {
        this.pool.length < 4 * this.slots.length && YY.byteLength > 0 && YY.byteLength <= 1048576 && this.pool.push(YY)
      }
    }

    function fF(YY) {
      var rY;
      null === (rY = YY.watch) || void 0 === rY || rY.cancel(), YY.watch = null
    }
    var jF = DY(40067),
      hF = DY(40054),
      dF = DY(40129),
      JF = (DY(39906), DY(40132)),
      MF = DY(40098);

    function wF(YY) {
      const rY = new Uint8Array(YY.length >> 2);
      for (let DY = 0; DY < rY.length; DY++) rY[DY] = YY[4 * DY + 3];
      return rY
    }
    async function bF(YY) {
      const rY = await (0, JF.g)(YY);
      try {
        const {
          width: YY,
          height: DY,
          pixels: FY
        } = (0, MF.p)(rY);
        return {
          width: YY,
          height: DY,
          alpha: wF(FY)
        }
      } finally {
        rY.close()
      }
    }
    class XF {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bF;
        this.session = YY, this.sources = rY, this.warn = DY, this.load = FY, this.nextPoll = 0, this.Ky = !1, this.warned = new Set
      }
      drain(YY) {
        if (YY < this.nextPoll) return;
        this.nextPoll = YY + 250;
        const rY = this.session.sunShadowWantedTextures();
        if (rY)
          for (let DY = 0; DY + 1 < rY.length; DY += 2) this.hand(rY[DY], rY[DY + 1]);
        for (const DY of this.session.takeSunShadowWarnings()) this.warn(DY)
      }
      dispose() {
        this.Ky = !0
      }
      async hand(YY, rY) {
        var DY, FY, AY, IY, RY;
        let OY, gY = null;
        try {
          if (gY = await this.sources.blockImageUrl(YY), null === gY) throw new Error(`block image ${YY} has no URL`);
          OY = await this.load(gY)
        } catch (vY) {
          var aY;
          const rY = null !== (aY = gY) && void 0 !== aY ? aY : `block image ${YY}`;
          this.warned.has(rY) || (this.warned.add(rY), this.warn(`sun shadow plane texture ${rY} didn't load: its blocks cast no shadow`, vY))
        }
        this.Ky || this.session.setSunShadowTexture(YY, rY, null !== (DY = null === (FY = OY) || void 0 === FY ? void 0 : FY.width) && void 0 !== DY ? DY : 0, null !== (AY = null === (IY = OY) || void 0 === IY ? void 0 : IY.height) && void 0 !== AY ? AY : 0, null === (RY = OY) || void 0 === RY ? void 0 : RY.alpha)
      }
    }
    var qF = DY(40074),
      pF = DY(40139),
      kF = DY(40142),
      GF = DY(40082),
      xF = DY(40090),
      nF = DY(36231),
      PF = DY(8647),
      UF = DY(40147);
    const LF = 8192,
      tF = new Set;
    const YA = new Set([...PF.d, "sceneDownload"]);
    var rA = DY(39924),
      DA = DY(39790);
    const FA = new Uint8Array(0);
    let AA = null;

    function IA(YY) {
      return {
        aux: Jr.Xb.AdStart | (YY ? Jr.Xb.PreventMovement : 0),
        payload: FA
      }
    }
    var RA = DY(2523),
      OA = DY(2526);
    const gA = "__bloxdSceneCapture";
    var aA = DY(1759),
      vA = DY(2589);
    let uA = null,
      sA = null,
      iA = null,
      yA = !1;

    function QA() {
      uA ??= performance.now()
    }
    var oA = DY(40149);
    class WA {
      constructor(YY) {
        var rY, DY;
        this.host = YY, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((YY => {
          this.landRequest = YY
        })), this.follow = YY => {
          let rY = YY;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const YY = null === this.requested && null !== rY;
            var DY;
            YY && (null === (DY = rY) || void 0 === DY || DY(null));
            const FY = await this.landing;
            var AY;
            null === FY && YY || (null === (AY = rY) || void 0 === AY || AY(FY))
          })), () => {
            rY = null
          }
        }, this.startRead = (DY = YY.store, DY.keys().then((YY => ({
          own: YY.includes(oD.b),
          oneShot: YY.includes(oD.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((YY => {
          let {
            own: rY,
            oneShot: DY
          } = YY;
          this.oneShotStored = DY, (rY || DY) && this.request()
        })), this.channel = (null !== (rY = YY.openChannel) && void 0 !== rY ? rY : oD.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var YY;
        if (null !== this.requested) return this.requested;
        null === (YY = this.channel) || void 0 === YY || YY.close(), this.channel = null;
        const rY = this.oneShotStored;
        return this.requested = function(YY, rY, DY) {
          return new Promise((rY => {
            rY(YY())
          })).catch((YY => (null !== rY && (0, oD.o)(rY), DY(YY), null)))
        }((() => this.host.load(rY).then((YY => (YY.setGamePackConfirm(this.confirm), this.landed = YY, YY)))), rY ? this.host.store : null, this.host.gy), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var YY;
          return null !== (YY = this.requested) && void 0 !== YY ? YY : null
        }))
      }
      setGamePackConfirm(YY) {
        var rY;
        this.confirm = YY, null === (rY = this.landed) || void 0 === rY || rY.setGamePackConfirm(YY)
      }
    }
    var EA = DY(35916);
    const mA = 216 * EA.f,
      VA = 92 * EA.e,
      SA = 64 * EA.f,
      lA = 16 * EA.f;

    function TA() {
      var YY, rY;
      return null !== (YY = null === (rY = performance.memory) || void 0 === rY ? void 0 : rY.OE) && void 0 !== YY ? YY : null
    }
    class eA {
      constructor(YY, rY) {
        this.budgetBytes = YY, this.reads = rY, this.estimate = null, this.shedAt = null
      }
      read(YY) {
        var rY;
        const DY = this.reads.storedChunks(),
          FY = this.reads.gpuBytes(),
          AY = Math.max(null !== (rY = this.reads.jsHeapBytes()) && void 0 !== rY ? rY : 0, SA),
          IY = mA + YY + AY + FY + DY * VA;
        this.estimate = {
          wasmBytes: YY,
          jsHeapBytes: AY,
          gpuBytes: FY,
          storedChunks: DY,
          totalBytes: IY
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: YY,
          budgetBytes: rY,
          shedAt: DY
        } = this;
        return !(null === YY || null === rY || YY.totalBytes < rY || null !== DY && YY.totalBytes < DY + lA) && (this.shedAt = YY.totalBytes, !0)
      }
      describe() {
        const {
          estimate: YY,
          budgetBytes: rY
        } = this;
        return null === YY ? null : `estimate ${(0,EA.g)(YY.totalBytes)} MiB of budget ${null===rY?"none":(0,EA.g)(rY)}: wasm ${(0,EA.g)(YY.wasmBytes)} js ${(0,EA.g)(YY.jsHeapBytes)} gpu ${(0,EA.g)(YY.gpuBytes)} chunks ${YY.storedChunks}`
      }
      snapshot() {
        const {
          estimate: YY,
          budgetBytes: rY
        } = this;
        return {
          ...null === YY ? {} : {
            footprintMiB: Number((0, EA.g)(YY.totalBytes)),
            gpuMiB: Number((0, EA.g)(YY.gpuBytes)),
            storedChunks: YY.storedChunks
          },
          footprintBudgetMiB: null === rY ? -1 : Number((0, EA.g)(rY))
        }
      }
    }
    var NA = DY(2565),
      BA = DY(4063),
      cA = DY(38453),
      KA = DY(37279);
    const HA = Mr.T + 1,
      zA = 4096 * HA;
    class ZA {
      constructor(YY, rY) {
        this.log = YY, this.take = rY, this.ja = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(YY, rY) {
        const DY = this.take();
        DY.length >= Mr.R && DY[0] > 0 && (0, NA.n)("remesh", `${DY[0]} core records lost to a full log`);
        const FY = this.ja;
        for (let AY = Mr.R; AY + Mr.T <= DY.length; AY += Mr.T) {
          for (let YY = AY; YY < AY + Mr.T; YY++) FY.push(DY[YY]);
          FY.push(YY)
        }
        if (rY || !(FY.length < zA)) {
          for (let rY = 0; rY < FY.length; rY += HA) this.feed(rY, YY);
          FY.length = 0, rY && this.log.frame(YY)
        }
      }
      feed(YY, rY) {
        var DY;
        const FY = this.ja,
          AY = (0, KA.e)(FY[YY + 1], FY[YY + 2], FY[YY + 3]),
          IY = FY[YY + 4],
          RY = FY[YY + Mr.T];
        switch (FY[YY]) {
          case Mr.vb.Edit:
            this.log.edit(AY, RY);
            break;
          case Mr.vb.Sent:
            this.latest.set(AY, IY), this.log.sent(AY, IY, FY[YY + 5], FY[YY + 6], FY[YY + 7], null !== (DY = this.unshown.get(AY)) && void 0 !== DY ? DY : KA.b, RY);
            break;
          case Mr.vb.Done: {
            this.log.received(IY, FY[YY + 5] / 1e3, RY);
            const rY = this.unshown.get(AY);
            void 0 === rY ? this.unshown.set(AY, [IY]) : rY.push(IY);
            break
          }
          case Mr.vb.Failed: {
            const YY = this.latest.get(AY);
            void 0 !== YY && YY !== IY ? this.log.reassign(AY, IY, YY) : this.log.failed(IY), this.ended(AY, IY);
            break
          }
          case Mr.vb.Shown:
            this.log.applied(AY, IY, rY), this.ended(AY, IY);
            break;
          case Mr.vb.Replaced:
            this.log.reassign(AY, IY, FY[YY + 5]), this.ended(AY, IY);
            break;
          case Mr.vb.Emptied:
            this.log.emptied(AY, rY);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${FY[YY]}`)
        }
      }
      ended(YY, rY) {
        this.latest.get(YY) === rY && this.latest.delete(YY);
        const DY = this.unshown.get(YY);
        if (void 0 === DY) return;
        const FY = DY.indexOf(rY);
        FY >= 0 && DY.splice(FY, 1), 0 === DY.length && this.unshown.delete(YY)
      }
    }
    let CA = null;
    var fA = DY(2834);
    const jA = new Uint8Array(0);
    class hA {
      constructor(YY) {
        this.options = YY, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.ja = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== YY.module ? YY.write(0, Jr.Kd.WorldgenStarted, 0, 0, jA) : this.giveUp()
      }
      take(YY, rY) {
        if (!(this.gone || null === this.worker && null === this.ja))
          if (YY === Jr.Ld.WorldgenSeed) {
            const YY = 0 === rY.byteLength ? null : this.options.decodeSettings(rY);
            null === YY || function(YY, rY) {
              if ((null === YY || void 0 === YY ? void 0 : YY.byteLength) !== rY.byteLength) return !1;
              for (let DY = 0; DY < YY.byteLength; DY++)
                if (YY[DY] !== rY[DY]) return !1;
              return !0
            }(this.seed, rY) || (this.seed = rY.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: YY
            }, []), null !== YY ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (YY === Jr.Ld.Generate) {
          var DY;
          const YY = new DataView(rY.buffer, rY.byteOffset, Jr.Cd),
            FY = null !== (DY = this.pool.pop()) && void 0 !== DY ? DY : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: YY.getUint32(0, !0),
            x: YY.getInt32(4, !0),
            y: YY.getInt32(8, !0),
            z: YY.getInt32(12, !0),
            bytes: FY
          }, [FY])
        }
      }
      stop() {
        var YY;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (YY = this.worker) || void 0 === YY || YY.terminate(), this.worker = null
      }
      post(YY, rY) {
        var DY;
        null !== this.ja ? this.ja.push({
          message: YY,
          transfer: rY
        }) : null === (DY = this.worker) || void 0 === DY || DY.postMessage(YY, rY)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((YY => {
          this.createWorker = YY, this.start()
        }), (YY => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(YY))
        })))
      }
      start() {
        const {
          module: YY
        } = this.options, rY = this.createWorker;
        if (this.gone || null === YY || null === rY) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let DY;
        this.startsWithoutResult++;
        try {
          DY = rY()
        } catch (AY) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", AY), this.lastLoss = `it did not start (${String(AY)})`, void this.start()
        }
        this.worker = DY, DY.onmessage = YY => {
          let {
            data: rY
          } = YY;
          this.worker === DY && this.onReply(DY, rY)
        }, DY.onerror = YY => {
          YY.preventDefault(), this.worker === DY && this.lose(YY.message || "its script failed")
        };
        try {
          DY.postMessage({
            type: "start",
            module: YY,
            Jy: FY.d.Jy
          })
        } catch (AY) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", AY), this.lastLoss = `it could not be sent the module (${String(AY)})`, DY.terminate(), this.worker = null, void this.start()
        }
        this.watch = new zF.e(zF.c, (YY => {
          this.lose((0, zF.g)(YY), (() => {
            this.options.onStartTimeout(YY)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(YY, rY) {
        switch (rY.type) {
          case "started": {
            this.endWatch();
            const rY = this.ja;
            if (null === rY) {
              this.options.write(0, Jr.Kd.WorldgenStarted, 0, 0, jA);
              break
            }
            this.ja = null;
            for (const {
                message: DY,
                transfer: FY
              }
              of rY) YY.postMessage(DY, FY);
            break
          }
          case "lost":
            this.lose(rY.reason);
            break;
          case "memory":
            var DY, FY;
            null === (DY = (FY = this.options).onMemoryStats) || void 0 === DY || DY.call(FY, rY.stats);
            break;
          case "result":
            rY.status !== Jr.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(rY.ticket, Jr.Kd.WorldgenResult, rY.status, rY.workerUs, new Uint8Array(rY.bytes, 0, rY.len)), this.recycle(rY.bytes), rY.spare && this.recycle(rY.spare)
        }
      }
      lose(YY, rY) {
        var DY, FY, AY;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${YY}`), this.lastLoss = YY, this.endWatch(), null === (DY = this.worker) || void 0 === DY || DY.terminate(), this.worker = null, null === (FY = (AY = this.options).onMemoryGone) || void 0 === FY || FY.call(AY), this.gone || (rY ? rY() : this.options.onWorkerLost(YY), this.dropHeld(), this.ja = null, this.options.write(0, Jr.Kd.WorldgenLost, Jr.Od.Lost, 0, jA), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Jr.Kd.WorldgenLost, Jr.Od.Gone, 0, jA)
      }
      endWatch() {
        var YY;
        null === (YY = this.watch) || void 0 === YY || YY.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.ja) {
          for (const {
              message: YY
            }
            of this.ja) "generate" === YY.type && this.recycle(YY.bytes);
          this.ja.length = 0
        }
      }
      recycle(YY) {
        this.pool.length < 16 && YY.byteLength > 0 && YY.byteLength <= 16384 && this.pool.push(YY)
      }
    }
    var dA = DY(37081),
      JA = DY(3338),
      MA = DY(39761),
      wA = DY(40152),
      bA = DY(40021);
    const XA = /[(@\s]([^\s(@]+)$/,
      qA = /:\d/;

    function pA(YY, rY) {
      for (let DY = 0; DY + rY.length <= YY.length; DY++) {
        let FY = 0;
        for (; FY < rY.length && YY[DY + FY] === rY[FY];) FY++;
        if (FY === rY.length) return DY
      }
      return -1
    }

    function kA(YY) {
      return "(" === YY || ")" === YY || "@" === YY || "," === YY || " " === YY || "\t" === YY
    }

    function GA(YY, rY) {
      let DY = rY;
      for (; DY > 0 && !kA(YY[DY - 1]);) DY--;
      let FY = rY;
      for (; FY < YY.length && !kA(YY[FY]);) FY++;
      let AY = "";
      for (let IY = DY; IY < FY; IY++) AY += YY[IY];
      return AY
    }
    const xA = (YY, rY) => YY.includes(rY),
      nA = YY => {
        try {
          return YY()
        } catch {
          return !1
        }
      },
      PA = -1,
      UA = YY => {
        try {
          return YY()
        } catch {
          return PA
        }
      };

    function LA(YY, rY) {
      return {
        probe: (DY, FY, AY) => {
          try {
            return ((DY, FY, AY) => {
              switch (DY) {
                case Jr.kc.StackCheck:
                  return rY.stackCheck() ? 1 : 0;
                case Jr.kc.ConfirmMesh:
                  return rY.confirmMesh();
                case Jr.kc.IndexPassReplaced:
                  return rY.indexPassReplaced() ? 1 : 0;
                case Jr.kc.ProductSubChanged:
                  return rY.productSubChanged() ? 1 : 0;
                case Jr.kc.RenderStatus:
                  return rY.Tv();
                case Jr.kc.Held:
                  return rY.ja();
                case Jr.kc.PlayerKilledSubs:
                  return rY.playerKilledSubs();
                case Jr.cb: {
                  const DY = rY.getComplete();
                  return null === DY ? 0 : (0, VF.o)(VF.x, VF.cb, [DY, new VF.d((0, VF.H)(YY()), FY, AY)]).written
                }
                default:
                  return 0
              }
            })(DY, FY, AY)
          } catch {
            return Jr.ac
          }
        }
      }
    }
    class tA {
      constructor(YY) {
        this.write = YY, this.flagsWritten = 0, this.written = (0, VF.p)(null)
      }
      Zu(YY) {
        let {
          flags: rY,
          values: DY
        } = YY;
        for (let FY = 0; FY < DY.length; FY++) this.value(DY[FY][0], DY[FY][1]);
        this.setFlags(rY | Jr.f.Ready)
      }
      value(YY, rY) {
        this.written[YY] !== rY && this.write(YY, rY, 0) && (this.written[YY] = rY)
      }
      setFlags(YY) {
        const rY = YY & ~this.flagsWritten;
        0 !== rY && this.write(Jr.i.Flags, rY, rY) && (this.flagsWritten |= rY)
      }
      originStackHit() {
        return this.write(Jr.i.Flags, Jr.f.OriginStackHit, Jr.f.OriginStackHit)
      }
    }
    const YI = {
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
      rI = 1e3;

    function DI(YY, rY) {
      const DY = new tA(rY);
      let FY = !1;
      DY.Zu(YY.Zu());
      const AY = (0, VF.T)((() => {
          DY.Zu(YY.Zu())
        }), rI),
        IY = () => {
          YY.checks.stackCheck() && (FY = !0)
        };
      (0, wA.h)(IY);
      const RY = () => {
        const rY = YY.checkPadCall();
        0 !== rY && DY.setFlags(rY)
      };
      return (0, MA.j)(RY), {
        onInput: rY => {
          (function(YY) {
            switch (YY) {
              case Jr.ub.KeyDown:
              case Jr.ub.KeyUp:
              case Jr.ub.MouseDown:
              case Jr.ub.MouseUp:
              case Jr.ub.Wheel:
              case Jr.ub.TouchStart:
              case Jr.ub.TouchEnd:
              case Jr.ub.TouchButton:
              case Jr.ub.PadAction:
                return !0;
              default:
                return !1
            }
          })(rY) && YY.checks.stackCheck() && (FY = !0)
        },
        onSend: IY,
        beforeFrame: () => {
          FY && DY.originStackHit() && (FY = !1)
        },
        onEvent: rY => {
          const FY = YY.checkEvent(rY);
          DY.value(Jr.i.ProbeUsedProp, YY.usedProp()), 0 !== FY && DY.setFlags(FY)
        },
        stop: () => {
          (0, VF.X)(AY), (0, wA.e)(IY), (0, MA.g)(RY)
        }
      }
    }
    let FI;
    const AI = ["length", 0, 1, "b", 102, 8, 7, 141, 4, "e", "k", 109, "j", "a", 2, void 0, null, 3, "r", "c3RhY2", "cw==", 1e5, !1, "stack", "name", !0, 210, 5, 6, 68, 114, 73, "c", 117, 206, 10, "p", 70, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", "string", "i", "t", 71, "M", 33554432, 67108864, 222, "functi", "on", "f", 45, "o", 55, 91, 232, 1023, 62, 65536, 55296, 56320, 12, 63, 128, 189, 192, "Invalid byte index", 216, 255, 224, 31, "Invalid continuation byte", 240, 76, 15, 18, "g", 144, "h", "d", 223, 145, 39, 194, 106, 171, 129, "protot", "ype", "decode", 56319, 230, 64512, 90, 65535, 57343, "Lone s", "urroga", "te U+", 16, " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 243, 167, 13, 2048, 248, 137, 1114111, "Invalid UTF-8 detected", 162, 160, "3.0.0", "undefi", "ned", 52, 207, "I=", "eTR5bm", "F", "ud", "s", "chEven", "dispat", "w", "now", 140, "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "q", "None", 11, "En", "tOverw", "ritten", "plete"];

    function II() {}

    function RI() {
      RI = function() {}
    }
    FI = function(YY) {
      let rY = arguments[AI[0]] > AI[2] && arguments[AI[2]] !== AI[15] ? arguments[AI[2]] : () => AI[16],
        DY = arguments[AI[0]] > AI[14] && arguments[AI[14]] !== AI[15] ? arguments[AI[14]] : AI[16],
        FY = arguments[AI[0]] > AI[17] && arguments[AI[17]] !== AI[15] ? arguments[AI[17]] : "";
      const AY = window,
        IY = (0, VF[AI[18]])("RXJyb3" + AI[129]),
        RY = (0, VF[AI[18]])(AI[19] + "s="),
        OY = (0, VF[AI[18]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        aY = (0, VF[AI[18]])(AI[19] + "tUcmFjZUxpbWl0"),
        vY = (0, VF[AI[18]])("bmF0aXZl"),
        uY = [(0, VF[AI[18]])("bWFpbi5qcw=="), (0, VF[AI[18]])("aW5kZXguanM="), (0, VF[AI[18]])("dXNlcnNjcmlwdA=="), (0, VF[AI[18]])("Y29udGVudC5q" + AI[20]), (0, VF[AI[18]])("b3B0aW9ucy5q" + AI[20]), (0, VF[AI[18]])("cG9wdXAuanM="), (0, VF[AI[18]])("LnVzZXIuanM="), (0, VF[AI[18]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        sY = (...YY) => {
          YY[AI[0]] = AI[2];
          const rY = AY[IY],
            DY = rY;
          DY[aY] < AI[21] && (DY[aY] = AI[21]);
          const FY = "string" === typeof(sY = (new rY)[RY]) ? sY : `${sY}`,
            gY = {},
            vY = DY[OY];
          var sY;
          typeof vY === AI[54] + AI[55] && (0, VF[AI[58]])(vY, rY, [gY]);
          const iY = gY[RY],
            yY = YY[AI[1]] ? uY[AI[0]] : uY[AI[0]] - AI[2];
          for (let AY = AI[1]; AY < yY; AY++) {
            if (xA(FY, uY[AY])) {
              return "JqIAqg" in II && (module.exports = async (YY = () => {
                throw new Error(AI[38])
              }) => {
                const rY = new Set(process.argv.slice(AI[14]));
                if (!rY.has(AI[39])) {
                  if (rY.size !== AI[2]) return AI[22];
                  if (!rY.has(AI[40])) return AI[22]
                }
                return await (async () => void 0 === await YY() ? AI[44] + AI[45] : "")(), AI[25]
              }), {
                [AI[23]]: FY,
                [AI[24]]: uY[AY]
              }
            }
            if (typeof iY === AI[46] && xA(iY, uY[AY])) return {
              [AI[23]]: iY,
              [AI[24]]: uY[AY]
            }
          }
          return AI[16]
        },
        iY = (...YY) => (YY[AI[0]] = AI[2], sY(YY[AI[1]]) !== AI[16]);
      let yY = AI[16],
        QY = AI[16];
      const oY = (...YY) => {
        YY[AI[0]] = AI[2];
        try {
          return YY[AI[1]]()
        } catch {
          return AI[25]
        }
      };
      let WY = AI[22];
      const EY = () => {
          if (!WY && (0, VF[AI[48]])()) {
            function YY(...YY) {
              RI(YY[AI[0]] = AI[1], YY[-AI[30]] = function(...rY) {
                return RI(rY[AI[0]] = AI[17], rY[AI[17]] = {}), rY[AI[14]].length !== rY[AI[1]].length + rY[AI[2]].length ? AI[22] : YY[AI[26]](rY[AI[1]], rY[AI[2]], rY[AI[14]], AI[1], AI[1], AI[1], rY[AI[17]])
              }, YY[AI[26]] = function(...rY) {
                return RI(rY[AI[0]] = AI[6], rY[-AI[29]] = AI[22]), rY[AI[27]] >= rY[AI[14]].length ? AI[25] : rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] !== AI[15] ? rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] : (rY[AI[14]][rY[AI[27]]] === rY[AI[1]][rY[AI[17]]] && rY[AI[14]][rY[AI[27]]] === rY[AI[2]][rY[AI[8]]] ? rY[-AI[29]] = YY[AI[26]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]] + AI[2], rY[AI[8]], rY[AI[27]] + AI[2], rY[AI[28]]) || YY[AI[26]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]], rY[AI[8]] + AI[2], rY[AI[27]] + AI[2], rY[AI[28]]) : rY[AI[14]][rY[AI[27]]] === rY[AI[1]][rY[AI[17]]] ? rY[-AI[29]] = YY[AI[26]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]] + AI[2], rY[AI[8]], rY[AI[27]] + AI[2], rY[AI[28]]) : rY[AI[14]][rY[AI[27]]] === rY[AI[2]][rY[AI[8]]] && (rY[-AI[29]] = YY[AI[26]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]], rY[AI[8]] + AI[2], rY[AI[27]] + AI[2], rY[AI[28]])), rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] = rY[-AI[29]], rY[-AI[29]])
              }, console.log(YY[-AI[30]]))
            }
            "_q1P6d" + AI[50] in II && YY(), WY = AI[25]
          }
        },
        mY = (...YY) => {
          YY[AI[0]] = AI[2], "fgUkJv" in II && function(...YY) {
            RI(YY[AI[0]] = AI[1], YY[AI[33]] = function(...YY) {
              for (RI(YY[AI[0]] = AI[2], YY[AI[13]] = YY[AI[1]].length, YY[AI[14]] = [], YY[AI[32]] = AI[1], YY[AI[8]] = AI[1], YY[AI[1]].sort(((YY, rY) => YY - rY))), YY[AI[31]] = AI[1]; YY[AI[31]] < YY[AI[13]]; YY[AI[31]]++)
                if (!(YY[AI[31]] > AI[1] && YY[AI[1]][YY[AI[31]]] === YY[AI[1]][YY[AI[31]] - AI[2]]))
                  for (RI(YY[AI[32]] = YY[AI[31]] + AI[2], YY[AI[8]] = YY[AI[13]] - AI[2]); YY[AI[32]] < YY[AI[8]];)
                    if (YY[AI[1]][YY[AI[31]]] + YY[AI[1]][YY[AI[32]]] + YY[AI[1]][YY[AI[8]]] < AI[1]) YY[AI[32]]++;
                    else if (YY[AI[1]][YY[AI[31]]] + YY[AI[1]][YY[AI[32]]] + YY[AI[1]][YY[AI[8]]] > AI[1]) YY[AI[8]]--;
              else {
                for (YY[AI[14]].push([YY[AI[1]][YY[AI[31]]], YY[AI[1]][YY[AI[32]]], YY[AI[1]][YY[AI[8]]]]); YY[AI[32]] < YY[AI[8]] && YY[AI[1]][YY[AI[32]]] === YY[AI[1]][YY[AI[32]] + AI[2]];) YY[AI[32]]++;
                for (; YY[AI[32]] < YY[AI[8]] && YY[AI[1]][YY[AI[8]]] === YY[AI[1]][YY[AI[8]] - AI[2]];) YY[AI[8]]--;
                RI(YY[AI[32]]++, YY[AI[8]]--)
              }
              return YY[AI[14]]
            }, console.log(YY[AI[33]]))
          }();
          try {
            function rY(...YY) {
              YY[AI[0]] = AI[1];
              const rY = require("big-integer");
              RI(YY[-AI[35]] = class {
                static randomPrime(...YY) {
                  YY[AI[0]] = AI[2];
                  const DY = rY.one.shiftLeft(YY[AI[1]] - AI[2]),
                    FY = rY.one.shiftLeft(YY[AI[1]]).prev();
                  for (; AI[25];) {
                    let YY = rY.randBetween(DY, FY);
                    if (YY.isProbablePrime(256)) return YY
                  }
                }
                static generate(...YY) {
                  YY[AI[0]] = AI[2];
                  const DY = rY(65537);
                  let FY, AY;
                  YY[-AI[34]] = AI[15];
                  do {
                    RI(FY = this.randomPrime(YY[AI[1]] / AI[14]), AY = this.randomPrime(YY[AI[1]] / AI[14]), YY[-AI[34]] = rY.lcm(FY.prev(), AY.prev()))
                  } while (rY.gcd(DY, YY[-AI[34]]).notEquals(AI[2]) || FY.minus(AY).abs().shiftRight(YY[AI[1]] / AI[14] - 100).isZero());
                  return {
                    e: DY,
                    n: FY.multiply(AY),
                    d: DY.modInv(YY[-AI[34]])
                  }
                }
                static encrypt(...YY) {
                  return YY[AI[0]] = AI[17], rY(YY[AI[1]]).modPow(YY[AI[14]], YY[AI[2]])
                }
                static decrypt(...YY) {
                  return YY[AI[0]] = AI[17], rY(YY[AI[1]]).modPow(YY[AI[2]], YY[AI[14]])
                }
                static encode(...YY) {
                  YY[AI[0]] = AI[2];
                  const DY = YY[AI[1]].split("").map((YY => YY.charCodeAt())).join("");
                  return rY(DY)
                }
                static decode(...YY) {
                  YY[AI[0]] = AI[2];
                  const rY = YY[AI[1]].toString();
                  YY[AI[2]] = "";
                  for (let DY = AI[1]; DY < rY.length; DY += AI[14]) {
                    let FY = Number(rY.substr(DY, AI[14]));
                    FY <= 30 ? (YY[AI[2]] += String.fromCharCode(Number(rY.substr(DY, AI[17]))), DY++) : YY[AI[2]] += String.fromCharCode(FY)
                  }
                  return YY[AI[2]]
                }
              }, module.exports = YY[-AI[35]])
            }
            return "LREI24D" in II && rY(), YY[AI[1]]()
          } catch {
            return AI[15]
          }
        },
        VY = (...YY) => {
          YY[AI[0]] = AI[2];
          try {
            return YY[AI[1]](), AI[25]
          } catch {
            return AI[22]
          }
        },
        SY = (0, VF[AI[18]])("a29qbzYzb25i"),
        lY = (0, VF[AI[36]])(AI[16]);
      let TY = AI[16],
        eY = AI[22],
        NY = AI[22];
      const BY = (0, VF[AI[36]])(AI[16]);
      let cY = AI[1];
      const KY = (0, VF[AI[36]])(AI[16]);
      let HY = AI[1];
      const zY = (0, VF[AI[36]])(AI[16]);
      let ZY = AI[22],
        CY = AI[22];
      const fY = (...rY) => {
          if (rY[AI[0]] = AI[14], rY[AI[1]] === YY) {
            if (TY === AI[16]) {
              function AY(...YY) {
                RI(YY[AI[0]] = AI[1], YY[AI[3]] = function(...rY) {
                  return RI(rY[AI[0]] = AI[17], rY[AI[13]] = {}), rY[AI[14]].length !== rY[AI[1]].length + rY[AI[2]].length ? AI[22] : YY[AI[2]](rY[AI[1]], rY[AI[2]], rY[AI[14]], AI[1], AI[1], AI[1], rY[AI[13]])
                }, YY[AI[2]] = function(...rY) {
                  return RI(rY[AI[0]] = AI[6], rY[AI[37]] = AI[22]), rY[AI[27]] >= rY[AI[14]].length ? AI[25] : rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] !== AI[15] ? rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] : (rY[AI[14]][rY[AI[27]]] === rY[AI[1]][rY[AI[17]]] && rY[AI[14]][rY[AI[27]]] === rY[AI[2]][rY[AI[8]]] ? rY[AI[37]] = YY[AI[2]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]] + AI[2], rY[AI[8]], rY[AI[27]] + AI[2], rY[AI[28]]) || YY[AI[2]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]], rY[AI[8]] + AI[2], rY[AI[27]] + AI[2], rY[AI[28]]) : rY[AI[14]][rY[AI[27]]] === rY[AI[1]][rY[AI[17]]] ? rY[AI[37]] = YY[AI[2]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]] + AI[2], rY[AI[8]], rY[AI[27]] + AI[2], rY[AI[28]]) : rY[AI[14]][rY[AI[27]]] === rY[AI[2]][rY[AI[8]]] && (rY[AI[37]] = YY[AI[2]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[AI[17]], rY[AI[8]] + AI[2], rY[AI[27]] + AI[2], rY[AI[28]])), rY[AI[28]]["" + rY[AI[17]] + rY[AI[8]] + rY[AI[27]]] = rY[AI[37]], rY[AI[37]])
                }, console.log(YY[AI[3]]))
              }
              "_Pm2JVI" in II && AY(), TY = typeof rY[AI[2]] === AI[144] ? rY[AI[2]] : -AI[2]
            } else eY = AI[25];
            return
          }
          const DY = lY[rY[AI[1]]];
          if (!rY[AI[2]]) {
            if (DY) {
              "uzXEaA" in II && (module.exports = async (YY = () => {
                throw new Error(AI[38])
              }) => {
                const rY = new Set(process.argv.slice(AI[14]));
                if (!rY.has(AI[39])) {
                  if (rY.size !== AI[2]) return AI[22];
                  if (!rY.has(AI[40])) return AI[22]
                }
                return await (async () => void 0 === await YY() ? AI[44] + AI[45] : "")(), AI[25]
              }), NY = AI[25]
            }
            return
          }
          if (rY[AI[1]] !== SY) return void(lY[rY[AI[1]]] = rY[AI[2]]);
          lY[rY[AI[1]]] = AI[25];
          const FY = typeof rY[AI[2]] === AI[46] ? rY[AI[2]] : "" + rY[AI[2]];
          if (!zY[FY])
            if ((0, dA.m)(FY)) CY = AI[25];
            else if ((0, dA[AI[36]])(FY)) cY < 8 ? RI(zY[FY] = AI[25], BY[cY++] = FY, ZY ||= (0, dA[AI[47]])(FY)) : !ZY && (0, dA[AI[47]])(FY) && RI(zY[FY] = AI[25], BY[8 - AI[2]] = FY, ZY = AI[25]);
          else {
            function IY(...YY) {
              var rY;
              RI(YY[AI[0]] = AI[1], rY = function(...YY) {
                RI(YY[AI[0]] = AI[2], this.gu = YY[AI[1]], this.length = AI[1], this.map = {}, this.head = AI[16], this.tail = AI[16])
              }, rY.prototype.get = function(...YY) {
                var rY;
                return RI(YY[AI[0]] = AI[2], rY = this.map[YY[AI[1]]]), rY ? (this.remove(rY), this.insert(rY.key, rY.val), rY.val) : -AI[2]
              }, rY.prototype.put = function(...YY) {
                RI(YY[AI[0]] = AI[14], this.map[YY[AI[1]]] ? (this.remove(this.map[YY[AI[1]]]), this.insert(YY[AI[1]], YY[AI[2]])) : this.length === this.gu ? (this.remove(this.head), this.insert(YY[AI[1]], YY[AI[2]])) : (this.insert(YY[AI[1]], YY[AI[2]]), this.length++))
              }, rY.prototype.remove = function(...YY) {
                RI(YY[AI[0]] = AI[2], YY[AI[2]] = YY[AI[1]].prev, YY[AI[14]] = YY[AI[1]].next), YY[AI[14]] && (YY[AI[14]].prev = YY[AI[2]]), YY[AI[2]] && (YY[AI[2]].next = YY[AI[14]]), this.head === YY[AI[1]] && (this.head = YY[AI[14]]), this.tail === YY[AI[1]] && (this.tail = YY[AI[2]]), delete this.map[YY[AI[1]].key]
              }, rY.prototype.insert = function(...YY) {
                RI(YY[AI[0]] = AI[14], YY[AI[14]] = new List(YY[AI[1]], YY[AI[2]]), this.tail ? (this.tail.next = YY[AI[14]], YY[AI[14]].prev = this.tail, this.tail = YY[AI[14]]) : (this.tail = YY[AI[14]], this.head = YY[AI[14]]), this.map[YY[AI[1]]] = YY[AI[14]])
              }, console.log(rY))
            }
            if ("QbGqEX" + AI[48] in II && IY(), HY < 4) {
              function RY(...YY) {
                YY[AI[0]] = AI[1]
              }
              "hK_BGc8" in II && RY(), RI(zY[FY] = AI[25], KY[HY++] = FY)
            }
          }
        },
        jY = (0, JA[AI[82]])(YY),
        hY = jY ? jY.replaced : (() => {
          try {
            function rY(...YY) {
              function rY(...YY) {
                return YY[AI[0]] = AI[2], YY[AI[1]][AI[2]] * AI[52] + (YY[AI[1]][AI[1]] < AI[1] ? AI[51] | YY[AI[1]][AI[1]] : YY[AI[1]][AI[1]])
              }

              function DY(...YY) {
                switch (YY[AI[0]] = AI[2], ((YY[AI[1]] & AI[51]) !== AI[1]) * AI[2] + (YY[AI[1]] < AI[1]) * AI[14]) {
                  case AI[1]:
                    return [YY[AI[1]] % AI[51], Math.trunc(YY[AI[1]] / AI[52])];
                  case AI[2]:
                    return [YY[AI[1]] % AI[51] - AI[51], Math.trunc(YY[AI[1]] / AI[52]) + AI[2]];
                  case AI[14]:
                    return [((YY[AI[1]] + AI[51]) % AI[51] + AI[51]) % AI[51], Math.round(YY[AI[1]] / AI[52])];
                  case AI[17]:
                    return [YY[AI[1]] % AI[51], Math.trunc(YY[AI[1]] / AI[52])]
                }
              }
              YY[AI[0]] = AI[1], RI(YY[AI[13]] = rY([AI[14], AI[8]]), YY[AI[2]] = rY([AI[2], AI[14]]), YY[AI[14]] = YY[AI[13]] + YY[AI[2]], YY[-AI[53]] = YY[AI[14]] - YY[AI[2]], YY[AI[8]] = YY[-AI[53]] * AI[14], YY[AI[17]] = YY[AI[8]] / AI[14], console.log(DY(YY[AI[14]])), console.log(DY(YY[-AI[53]])), console.log(DY(YY[AI[8]])), console.log(DY(YY[AI[17]])))
            }
            return "GoP8N9" + AI[50] in II && rY(), AY[YY]
          } catch {
            return AI[15]
          }
        })();
      if (VY((() => {
          AY[YY] = fY
        })), typeof hY === AI[54] + AI[55]) {
        "w_oh92" in II && (module.exports = async (YY = () => {
          throw new Error(AI[38])
        }) => {
          const rY = new Set(process.argv.slice(AI[14]));
          if (!rY.has(AI[39])) {
            if (rY.size !== AI[2]) return AI[22];
            if (!rY.has(AI[40])) return AI[22]
          }
          return await (async () => void 0 === await YY() ? AI[44] + AI[45] : "")(), AI[25]
        });
        const YY = hY;
        VY(((...rY) => {
          rY[AI[0]] = AI[1], "oRu8uN6" in II && function(...YY) {
            RI(YY[AI[0]] = AI[1], YY[AI[57]] = function(...YY) {
              for (RI(YY[AI[0]] = AI[2], YY[AI[2]] = AI[1], YY[AI[3]] = {}, YY[AI[17]] = AI[1], YY[AI[8]] = AI[1], YY[AI[9]] = AI[1], YY[AI[56]] = YY[AI[1]].length), YY[AI[6]] = AI[1]; YY[AI[6]] < YY[AI[56]]; YY[AI[6]]++) {
                for (RI(YY[AI[3]] = {}, YY[AI[17]] = AI[1], YY[AI[8]] = AI[2]), YY[AI[5]] = YY[AI[6]] + AI[2]; YY[AI[5]] < YY[AI[56]]; YY[AI[5]]++) YY[AI[1]][YY[AI[6]]].x !== YY[AI[1]][YY[AI[5]]].x || YY[AI[1]][YY[AI[6]]].y !== YY[AI[1]][YY[AI[5]]].y ? (YY[AI[1]][YY[AI[6]]].y === YY[AI[1]][YY[AI[5]]].y ? YY[AI[9]] = Number.MAX_SAFE_INTEGER : YY[AI[9]] = (YY[AI[1]][YY[AI[6]]].x - YY[AI[1]][YY[AI[5]]].x) / (YY[AI[1]][YY[AI[6]]].y - YY[AI[1]][YY[AI[5]]].y), YY[AI[3]][YY[AI[9]]] || (YY[AI[3]][YY[AI[9]]] = AI[1]), RI(YY[AI[3]][YY[AI[9]]]++, YY[AI[17]] = Math.max(YY[AI[17]], YY[AI[3]][YY[AI[9]]]))) : YY[AI[8]]++;
                RI(YY[AI[17]] += YY[AI[8]], YY[AI[2]] = Math.max(YY[AI[2]], YY[AI[17]]))
              }
              return YY[AI[2]]
            }, console.log(YY[AI[57]]))
          }(), YY(fY)
        }))
      }
      if (jY) {
        const rY = jY.reports;
        VY((() => {
          for (const DY in rY)(0, VF[AI[58]])(VF[AI[131]], rY, [DY]) && DY !== YY && fY(DY, rY[DY])
        }))
      }
      const dY = jY ? AI[14] : AI[2];
      let JY = AI[22];
      const MY = (...rY) => (rY[AI[0]] = AI[1], eY ? AI[25] : (RI(rY[AI[59]] = AI[22], JY = !VY(((...DY) => {
          DY[AI[0]] = AI[1], "lBifG_" in II && function(...YY) {
            function rY() {}
            YY[AI[0]] = AI[1], RI(YY[AI[61]] = function(...YY) {
              for (RI(YY[AI[0]] = AI[14], YY[AI[13]] = AI[1], YY[AI[17]] = AI[1], YY[AI[32]] = new rY(AI[1]), YY[AI[59]] = YY[AI[32]], YY[-AI[60]] = YY[AI[1]], YY[AI[6]] = YY[AI[2]]); YY[-AI[60]] !== AI[16] || YY[AI[6]] !== AI[16];) RI(YY[AI[17]] = (YY[-AI[60]] ? YY[-AI[60]].val : AI[1]) + (YY[AI[6]] ? YY[AI[6]].val : AI[1]) + YY[AI[13]], YY[AI[13]] = Math.floor(YY[AI[17]] / AI[35]), YY[AI[59]].next = new rY(YY[AI[17]] % AI[35]), YY[AI[59]] = YY[AI[59]].next, YY[-AI[60]] = YY[-AI[60]] ? YY[-AI[60]].next : AI[16], YY[AI[6]] = YY[AI[6]] ? YY[AI[6]].next : AI[16]);
              return YY[AI[13]] && (YY[AI[59]].next = new rY(YY[AI[13]])), YY[AI[32]].next
            }, console.log(YY[AI[61]]))
          }(), rY[AI[59]] = AY[YY] !== fY
        }))), rY[AI[59]])),
        wY = oY(((...rY) => {
          rY[AI[0]] = AI[1], "XSSK1D7" in II && function(...YY) {
            YY[AI[0]] = AI[1]
          }();
          const DY = (0, VF.N)(AY, YY);
          return (DY === AI[16] || void 0 === DY ? void 0 : DY.configurable) !== AI[22] || typeof DY[AI[146]] !== AI[54] + AI[55] || TY !== dY
        })),
        bY = {},
        XY = () => {
          try {
            function YY() {
              ! function(...YY) {
                function rY(...YY) {
                  for (RI(YY[AI[0]] = AI[2], YY[AI[13]] = [], YY[AI[14]] = AI[1], YY[AI[32]] = YY[AI[1]].length, YY[AI[31]] = AI[15], YY[AI[27]] = AI[15]); YY[AI[14]] < YY[AI[32]];) RI(YY[AI[31]] = YY[AI[1]].charCodeAt(YY[AI[14]]++), YY[AI[31]] >= AI[65] && YY[AI[31]] <= AI[96] && YY[AI[14]] < YY[AI[32]] ? (YY[AI[27]] = YY[AI[1]].charCodeAt(YY[AI[14]]++), (YY[AI[27]] & AI[98]) == AI[66] ? YY[AI[13]].push(((YY[AI[31]] & AI[62]) << AI[35]) + (YY[AI[27]] & AI[62]) + AI[64]) : (YY[AI[13]].push(YY[AI[31]]), YY[AI[14]]--)) : YY[AI[13]].push(YY[AI[31]]));
                  return YY[AI[13]]
                }

                function DY(...YY) {
                  if (YY[AI[0]] = AI[2], YY[AI[1]] >= AI[65] && YY[AI[1]] <= AI[101]) throw Error(AI[102] + AI[103] + AI[104] + YY[AI[1]].toString(AI[105]).toUpperCase() + (AI[106] + AI[107] + AI[108] + AI[109]))
                }

                function FY(...rY) {
                  return rY[AI[0]] = AI[14], YY[AI[13]](rY[AI[1]] >> rY[AI[2]] & AI[68] | AI[69])
                }

                function AY(...rY) {
                  return rY[AI[0]] = AI[2], (rY[AI[1]] & AI[110]) == AI[1] ? YY[AI[13]](rY[AI[1]]) : (rY[AI[2]] = "", (rY[AI[1]] & AI[111]) == AI[1] ? rY[AI[2]] = YY[AI[13]](rY[AI[1]] >> AI[28] & AI[76] | AI[71]) : (rY[AI[1]] & AI[112]) == AI[1] ? RI(DY(rY[AI[1]]), rY[AI[2]] = YY[AI[13]](rY[AI[1]] >> AI[67] & AI[80] | AI[75]), rY[AI[2]] += FY(rY[AI[1]], AI[28])) : (rY[AI[1]] & AI[113]) == AI[1] && RI(rY[AI[2]] = YY[AI[13]](rY[AI[1]] >> AI[81] & AI[6] | AI[78]), rY[AI[2]] += FY(rY[AI[1]], AI[67]), rY[AI[2]] += FY(rY[AI[1]], AI[28])), rY[AI[2]] += YY[AI[13]](rY[AI[1]] & AI[68] | AI[69]), rY[AI[2]])
                }

                function IY(...rY) {
                  if (rY[AI[0]] = AI[1], YY[AI[14]] >= YY[AI[17]]) throw Error(AI[72]);
                  if (RI(rY[AI[32]] = YY[AI[8]][YY[AI[14]]] & AI[74], YY[AI[14]]++), (rY[AI[32]] & AI[71]) == AI[69]) return rY[AI[32]] & AI[68];
                  throw Error(AI[77])
                }

                function RY(...rY) {
                  if (RI(rY[AI[0]] = AI[1], rY[AI[73]] = AI[15], rY[AI[2]] = AI[15], rY[-AI[79]] = AI[15], rY[AI[56]] = AI[15], rY[AI[8]] = AI[15]), YY[AI[14]] > YY[AI[17]]) throw Error(AI[72]);
                  if (YY[AI[14]] == YY[AI[17]]) return AI[22];
                  if (RI(rY[AI[73]] = YY[AI[8]][YY[AI[14]]] & AI[74], YY[AI[14]]++), (rY[AI[73]] & AI[69]) == AI[1]) return rY[AI[73]];
                  if ((rY[AI[73]] & AI[75]) == AI[71]) {
                    if (RI(rY[AI[2]] = IY(), rY[AI[8]] = (rY[AI[73]] & AI[76]) << AI[28] | rY[AI[2]]), rY[AI[8]] >= AI[69]) return rY[AI[8]];
                    throw Error(AI[77])
                  }
                  if ((rY[AI[73]] & AI[78]) == AI[75]) {
                    if (RI(rY[AI[2]] = IY(), rY[-AI[79]] = IY(), rY[AI[8]] = (rY[AI[73]] & AI[80]) << AI[67] | rY[AI[2]] << AI[28] | rY[-AI[79]]), rY[AI[8]] >= AI[117]) return DY(rY[AI[8]]), rY[AI[8]];
                    throw Error(AI[77])
                  }
                  if ((rY[AI[73]] & AI[118]) == AI[78] && (RI(rY[AI[2]] = IY(), rY[-AI[79]] = IY(), rY[AI[56]] = IY(), rY[AI[8]] = (rY[AI[73]] & AI[6]) << AI[81] | rY[AI[2]] << AI[67] | rY[-AI[79]] << AI[28] | rY[AI[56]]), rY[AI[8]] >= AI[64] && rY[AI[8]] <= AI[120])) return rY[AI[8]];
                  throw Error(AI[121])
                }
                RI(YY[AI[0]] = AI[2], YY[AI[13]] = String.fromCharCode), RI(YY[AI[8]] = AI[15], YY[AI[17]] = AI[15], YY[AI[14]] = AI[15]), RI(YY[AI[1]].version = AI[124], YY[AI[1]].encode = function(...YY) {
                  for (RI(YY[AI[0]] = AI[2], YY[AI[13]] = rY(YY[AI[1]]), YY[AI[14]] = YY[AI[13]].length, YY[AI[17]] = -AI[2], YY[-AI[70]] = AI[15], YY[AI[9]] = ""); ++YY[AI[17]] < YY[AI[14]];) RI(YY[-AI[70]] = YY[AI[13]][YY[AI[17]]], YY[AI[9]] += AY(YY[-AI[70]]));
                  return YY[AI[9]]
                }, YY[AI[1]].decode = function(...DY) {
                  for (RI(DY[AI[0]] = AI[2], YY[AI[8]] = rY(DY[AI[1]]), YY[AI[17]] = YY[AI[8]].length, YY[AI[14]] = AI[1], DY[AI[2]] = [], DY[AI[3]] = AI[15]);
                    (DY[AI[3]] = RY()) !== AI[22];) DY[AI[2]].push(DY[AI[3]]);
                  return function(...rY) {
                    for (RI(rY[AI[0]] = AI[2], rY[AI[13]] = rY[AI[1]].length, rY[-AI[63]] = -AI[2], rY[AI[17]] = AI[15], rY[AI[8]] = ""); ++rY[-AI[63]] < rY[AI[13]];) rY[AI[17]] = rY[AI[1]][rY[-AI[63]]], rY[AI[17]] > AI[100] && RI(rY[AI[17]] -= AI[64], rY[AI[8]] += YY[AI[13]](rY[AI[17]] >>> AI[35] & AI[62] | AI[65]), rY[AI[17]] = AI[66] | rY[AI[17]] & AI[62]), rY[AI[8]] += YY[AI[13]](rY[AI[17]]);
                    return rY[AI[8]]
                  }(DY[AI[2]])
                })
              }(typeof exports === AI[125] + AI[126] ? this.utf8 = {} : exports)
            }
            return "B1yyx6x" in II && YY(), navigator[AI[141] + "tSub"]
          } catch {
            return bY
          }
        },
        qY = XY(),
        pY = DY,
        kY = pY === AI[16] ? ((...YY) => {
          YY[AI[0]] = AI[1], "dXNpSq" + AI[32] in II && function(...YY) {
            RI(YY[AI[0]] = AI[1], YY[AI[3]] = function(...YY) {
              for (RI(YY[AI[0]] = AI[2], YY[AI[13]] = AI[1], YY[AI[14]] = {}, YY[-AI[83]] = AI[1], YY[AI[8]] = AI[1], YY[AI[9]] = AI[1], YY[AI[56]] = YY[AI[1]].length), YY[AI[82]] = AI[1]; YY[AI[82]] < YY[AI[56]]; YY[AI[82]]++) {
                for (RI(YY[AI[14]] = {}, YY[-AI[83]] = AI[1], YY[AI[8]] = AI[2]), YY[AI[84]] = YY[AI[82]] + AI[2]; YY[AI[84]] < YY[AI[56]]; YY[AI[84]]++) YY[AI[1]][YY[AI[82]]].x !== YY[AI[1]][YY[AI[84]]].x || YY[AI[1]][YY[AI[82]]].y !== YY[AI[1]][YY[AI[84]]].y ? (YY[AI[1]][YY[AI[82]]].y === YY[AI[1]][YY[AI[84]]].y ? YY[AI[9]] = Number.MAX_SAFE_INTEGER : YY[AI[9]] = (YY[AI[1]][YY[AI[82]]].x - YY[AI[1]][YY[AI[84]]].x) / (YY[AI[1]][YY[AI[82]]].y - YY[AI[1]][YY[AI[84]]].y), YY[AI[14]][YY[AI[9]]] || (YY[AI[14]][YY[AI[9]]] = AI[1]), RI(YY[AI[14]][YY[AI[9]]]++, YY[-AI[83]] = Math.max(YY[-AI[83]], YY[AI[14]][YY[AI[9]]]))) : YY[AI[8]]++;
                RI(YY[-AI[83]] += YY[AI[8]], YY[AI[13]] = Math.max(YY[AI[13]], YY[-AI[83]]))
              }
              return YY[AI[13]]
            }, console.log(YY[AI[3]]))
          }();
          RI(YY[AI[90]] = AI[22], YY[AI[3]] = 60 - AI[2]);
          const rY = TextDecoder[AI[93] + AI[94]][AI[95]],
            DY = function() {
              if (YY[AI[3]]++, 60 === YY[AI[3]]) {
                if (nA((() => iY(AI[22])))) {
                  function IY(...YY) {
                    RI(YY[AI[0]] = AI[1], YY[AI[32]] = function(...rY) {
                      return RI(rY[AI[0]] = AI[2], rY[AI[2]] = []), (rY[AI[1]] === AI[2] || rY[AI[1]] >= AI[8]) && YY[AI[85]](rY[AI[2]], [], rY[AI[1]], AI[1]), rY[AI[2]]
                    }, YY[AI[85]] = function(...rY) {
                      for (rY[AI[0]] = AI[8], rY[-AI[86]] = rY[AI[17]]; rY[-AI[86]] < rY[AI[14]]; rY[-AI[86]]++) {
                        if (rY[AI[2]].length !== rY[-AI[86]]) return;
                        for (rY[AI[87]] = AI[1]; rY[AI[87]] < rY[AI[14]]; rY[AI[87]]++) YY[AI[14]](rY[AI[2]], [rY[-AI[86]], rY[AI[87]]]) && (RI(rY[AI[2]].push([rY[-AI[86]], rY[AI[87]]]), YY[AI[85]](rY[AI[1]], rY[AI[2]], rY[AI[14]], rY[-AI[86]] + AI[2])), rY[AI[2]].length === rY[AI[14]] && rY[AI[1]].push(YY[AI[17]](rY[AI[2]])), rY[AI[2]].pop())
                      }
                    }, YY[AI[17]] = function(...YY) {
                      for (RI(YY[AI[0]] = AI[2], YY[AI[2]] = [], YY[AI[3]] = YY[AI[1]].length), YY[AI[88]] = AI[1]; YY[AI[88]] < YY[AI[3]]; YY[AI[88]]++)
                        for (YY[AI[2]][YY[AI[88]]] = "", YY[AI[8]] = AI[1]; YY[AI[8]] < YY[AI[3]]; YY[AI[8]]++) YY[AI[2]][YY[AI[88]]] += YY[AI[1]][YY[AI[88]]][AI[2]] === YY[AI[8]] ? "Q" : ".";
                      return YY[AI[2]]
                    }, YY[AI[14]] = function(...YY) {
                      for (RI(YY[AI[0]] = AI[14], YY[AI[14]] = YY[AI[1]].length), YY[AI[89]] = AI[1]; YY[AI[89]] < YY[AI[14]]; YY[AI[89]]++) {
                        if (YY[AI[1]][YY[AI[89]]][AI[1]] === YY[AI[2]][AI[1]] || YY[AI[1]][YY[AI[89]]][AI[2]] === YY[AI[2]][AI[2]]) return AI[22];
                        if (Math.abs((YY[AI[1]][YY[AI[89]]][AI[1]] - YY[AI[2]][AI[1]]) / (YY[AI[1]][YY[AI[89]]][AI[2]] - YY[AI[2]][AI[2]])) === AI[2]) return AI[22]
                      }
                      return AI[25]
                    }, console.log(YY[AI[32]]))
                  }
                  "BbZ4zO" in II && IY(), YY[AI[90]] = AI[25]
                }
                YY[AI[3]] = AI[1]
              }
              for (var DY = arguments[AI[0]], FY = new Array(DY), AY = AI[1]; AY < DY; AY++) {
                function RY(...YY) {
                  RI(YY[AI[0]] = AI[1], YY[AI[13]] = function(...YY) {
                    for (RI(YY[AI[0]] = AI[2], YY[AI[92]] = AI[1], YY[AI[14]] = {}, YY[AI[17]] = AI[1], YY[-AI[69]] = AI[1], YY[AI[9]] = AI[1], YY[-AI[91]] = YY[AI[1]].length), YY[AI[6]] = AI[1]; YY[AI[6]] < YY[-AI[91]]; YY[AI[6]]++) {
                      for (RI(YY[AI[14]] = {}, YY[AI[17]] = AI[1], YY[-AI[69]] = AI[2]), YY[AI[84]] = YY[AI[6]] + AI[2]; YY[AI[84]] < YY[-AI[91]]; YY[AI[84]]++) YY[AI[1]][YY[AI[6]]].x !== YY[AI[1]][YY[AI[84]]].x || YY[AI[1]][YY[AI[6]]].y !== YY[AI[1]][YY[AI[84]]].y ? (YY[AI[1]][YY[AI[6]]].y === YY[AI[1]][YY[AI[84]]].y ? YY[AI[9]] = Number.MAX_SAFE_INTEGER : YY[AI[9]] = (YY[AI[1]][YY[AI[6]]].x - YY[AI[1]][YY[AI[84]]].x) / (YY[AI[1]][YY[AI[6]]].y - YY[AI[1]][YY[AI[84]]].y), YY[AI[14]][YY[AI[9]]] || (YY[AI[14]][YY[AI[9]]] = AI[1]), RI(YY[AI[14]][YY[AI[9]]]++, YY[AI[17]] = Math.max(YY[AI[17]], YY[AI[14]][YY[AI[9]]]))) : YY[-AI[69]]++;
                      RI(YY[AI[17]] += YY[-AI[69]], YY[AI[92]] = Math.max(YY[AI[92]], YY[AI[17]]))
                    }
                    return YY[AI[92]]
                  }, console.log(YY[AI[13]]))
                }
                "SS0fQn" + AI[136] in II && RY(), FY[AY] = arguments[AY]
              }
              return (0, VF[AI[58]])(rY, this, FY)
            };
          return VY((() => {
            TextDecoder[AI[93] + AI[94]][AI[95]] = DY
          })), () => {
            if (YY[AI[90]]) {
              function rY() {
                ! function(...YY) {
                  function rY(...YY) {
                    for (RI(YY[AI[0]] = AI[2], YY[AI[2]] = [], YY[AI[3]] = AI[1], YY[AI[26]] = YY[AI[1]].length, YY[AI[91]] = AI[15], YY[-AI[97]] = AI[15]); YY[AI[3]] < YY[AI[26]];) RI(YY[AI[91]] = YY[AI[1]].charCodeAt(YY[AI[3]]++), YY[AI[91]] >= AI[65] && YY[AI[91]] <= AI[96] && YY[AI[3]] < YY[AI[26]] ? (YY[-AI[97]] = YY[AI[1]].charCodeAt(YY[AI[3]]++), (YY[-AI[97]] & AI[98]) == AI[66] ? YY[AI[2]].push(((YY[AI[91]] & AI[62]) << AI[35]) + (YY[-AI[97]] & AI[62]) + AI[64]) : (YY[AI[2]].push(YY[AI[91]]), YY[AI[3]]--)) : YY[AI[2]].push(YY[AI[91]]));
                    return YY[AI[2]]
                  }

                  function DY(...YY) {
                    if (YY[AI[0]] = AI[2], YY[AI[1]] >= AI[65] && YY[AI[1]] <= AI[101]) throw Error(AI[102] + AI[103] + AI[104] + YY[AI[1]].toString(AI[105]).toUpperCase() + (AI[106] + AI[107] + AI[108] + AI[109]))
                  }

                  function FY(...rY) {
                    return rY[AI[0]] = AI[14], YY[AI[13]](rY[AI[1]] >> rY[AI[2]] & AI[68] | AI[69])
                  }

                  function AY(...rY) {
                    return rY[AI[0]] = AI[2], (rY[AI[1]] & AI[110]) == AI[1] ? YY[AI[13]](rY[AI[1]]) : (rY[AI[13]] = "", (rY[AI[1]] & AI[111]) == AI[1] ? rY[AI[13]] = YY[AI[13]](rY[AI[1]] >> AI[28] & AI[76] | AI[71]) : (rY[AI[1]] & AI[112]) == AI[1] ? RI(DY(rY[AI[1]]), rY[AI[13]] = YY[AI[13]](rY[AI[1]] >> AI[67] & AI[80] | AI[75]), rY[AI[13]] += FY(rY[AI[1]], AI[28])) : (rY[AI[1]] & AI[113]) == AI[1] && RI(rY[AI[13]] = YY[AI[13]](rY[AI[1]] >> AI[81] & AI[6] | AI[78]), rY[AI[13]] += FY(rY[AI[1]], AI[67]), rY[AI[13]] += FY(rY[AI[1]], AI[28])), rY[AI[13]] += YY[AI[13]](rY[AI[1]] & AI[68] | AI[69]), rY[AI[13]])
                  }

                  function IY(...rY) {
                    if (rY[AI[0]] = AI[1], YY[-AI[89]] >= YY[-AI[116]]) throw Error(AI[72]);
                    if (RI(rY[AI[3]] = YY[AI[8]][YY[-AI[89]]] & AI[74], YY[-AI[89]]++), (rY[AI[3]] & AI[71]) == AI[69]) return rY[AI[3]] & AI[68];
                    throw Error(AI[77])
                  }

                  function RY(...rY) {
                    if (RI(rY[AI[0]] = AI[1], rY[AI[13]] = AI[15], rY[AI[2]] = AI[15], rY[AI[14]] = AI[15], rY[AI[119]] = AI[15], rY[AI[9]] = AI[15]), YY[-AI[89]] > YY[-AI[116]]) throw Error(AI[72]);
                    if (YY[-AI[89]] == YY[-AI[116]]) return AI[22];
                    if (RI(rY[AI[13]] = YY[AI[8]][YY[-AI[89]]] & AI[74], YY[-AI[89]]++), (rY[AI[13]] & AI[69]) == AI[1]) return rY[AI[13]];
                    if ((rY[AI[13]] & AI[75]) == AI[71]) {
                      if (RI(rY[AI[2]] = IY(), rY[AI[9]] = (rY[AI[13]] & AI[76]) << AI[28] | rY[AI[2]]), rY[AI[9]] >= AI[69]) return rY[AI[9]];
                      throw Error(AI[77])
                    }
                    if ((rY[AI[13]] & AI[78]) == AI[75]) {
                      if (RI(rY[AI[2]] = IY(), rY[AI[14]] = IY(), rY[AI[9]] = (rY[AI[13]] & AI[80]) << AI[67] | rY[AI[2]] << AI[28] | rY[AI[14]]), rY[AI[9]] >= AI[117]) return DY(rY[AI[9]]), rY[AI[9]];
                      throw Error(AI[77])
                    }
                    if ((rY[AI[13]] & AI[118]) == AI[78] && (RI(rY[AI[2]] = IY(), rY[AI[14]] = IY(), rY[AI[119]] = IY(), rY[AI[9]] = (rY[AI[13]] & AI[6]) << AI[81] | rY[AI[2]] << AI[67] | rY[AI[14]] << AI[28] | rY[AI[119]]), rY[AI[9]] >= AI[64] && rY[AI[9]] <= AI[120])) return rY[AI[9]];
                    throw Error(AI[121])
                  }
                  RI(YY[AI[0]] = AI[2], YY[AI[13]] = String.fromCharCode), RI(YY[AI[8]] = AI[15], YY[-AI[116]] = AI[15], YY[-AI[89]] = AI[15]), RI(YY[AI[1]].version = AI[124], YY[AI[1]].encode = function(...YY) {
                    for (RI(YY[AI[0]] = AI[2], YY[AI[2]] = rY(YY[AI[1]]), YY[AI[114]] = YY[AI[2]].length, YY[AI[32]] = -AI[2], YY[AI[8]] = AI[15], YY[-AI[115]] = ""); ++YY[AI[32]] < YY[AI[114]];) RI(YY[AI[8]] = YY[AI[2]][YY[AI[32]]], YY[-AI[115]] += AY(YY[AI[8]]));
                    return YY[-AI[115]]
                  }, YY[AI[1]].decode = function(...DY) {
                    for (RI(DY[AI[0]] = AI[2], YY[AI[8]] = rY(DY[AI[1]]), YY[-AI[116]] = YY[AI[8]].length, YY[-AI[89]] = AI[1], DY[-AI[123]] = [], DY[-AI[122]] = AI[15]);
                      (DY[-AI[122]] = RY()) !== AI[22];) DY[-AI[123]].push(DY[-AI[122]]);
                    return function(...rY) {
                      for (RI(rY[AI[0]] = AI[2], rY[AI[13]] = rY[AI[1]].length, rY[AI[89]] = -AI[2], rY[-AI[99]] = AI[15], rY[AI[85]] = ""); ++rY[AI[89]] < rY[AI[13]];) rY[-AI[99]] = rY[AI[1]][rY[AI[89]]], rY[-AI[99]] > AI[100] && RI(rY[-AI[99]] -= AI[64], rY[AI[85]] += YY[AI[13]](rY[-AI[99]] >>> AI[35] & AI[62] | AI[65]), rY[-AI[99]] = AI[66] | rY[-AI[99]] & AI[62]), rY[AI[85]] += YY[AI[13]](rY[-AI[99]]);
                      return rY[AI[85]]
                    }(DY[-AI[123]])
                  })
                }(typeof exports === AI[125] + AI[126] ? this.utf8 = {} : exports)
              }
              return "apprQl" in II && rY(), AI[14]
            }
            return UA(((...YY) => (YY[AI[0]] = AI[1], "t1c5_J" in II && function(...YY) {
              RI(YY[AI[0]] = AI[1], YY[AI[3]] = function(...YY) {
                for (RI(YY[AI[0]] = AI[2], YY[AI[13]] = AI[1], YY[AI[14]] = {}, YY[-AI[127]] = AI[1], YY[AI[8]] = AI[1], YY[-AI[128]] = AI[1], YY[AI[28]] = YY[AI[1]].length), YY[AI[82]] = AI[1]; YY[AI[82]] < YY[AI[28]]; YY[AI[82]]++) {
                  for (RI(YY[AI[14]] = {}, YY[-AI[127]] = AI[1], YY[AI[8]] = AI[2]), YY[AI[84]] = YY[AI[82]] + AI[2]; YY[AI[84]] < YY[AI[28]]; YY[AI[84]]++) YY[AI[1]][YY[AI[82]]].x !== YY[AI[1]][YY[AI[84]]].x || YY[AI[1]][YY[AI[82]]].y !== YY[AI[1]][YY[AI[84]]].y ? (YY[AI[1]][YY[AI[82]]].y === YY[AI[1]][YY[AI[84]]].y ? YY[-AI[128]] = Number.MAX_SAFE_INTEGER : YY[-AI[128]] = (YY[AI[1]][YY[AI[82]]].x - YY[AI[1]][YY[AI[84]]].x) / (YY[AI[1]][YY[AI[82]]].y - YY[AI[1]][YY[AI[84]]].y), YY[AI[14]][YY[-AI[128]]] || (YY[AI[14]][YY[-AI[128]]] = AI[1]), RI(YY[AI[14]][YY[-AI[128]]]++, YY[-AI[127]] = Math.max(YY[-AI[127]], YY[AI[14]][YY[-AI[128]]]))) : YY[AI[8]]++;
                  RI(YY[-AI[127]] += YY[AI[8]], YY[AI[13]] = Math.max(YY[AI[13]], YY[-AI[127]]))
                }
                return YY[AI[13]]
              }, console.log(YY[AI[3]]))
            }(), TextDecoder[AI[93] + AI[94]][AI[95]] !== DY ? AI[28] : AI[1])))
          }
        })() : () => UA((() => pY[AI[139] + AI[140]]())),
        GY = (0, Vr[AI[9]])(),
        xY = (0, VF[AI[36]])(AI[16]),
        nY = (0, VF[AI[36]])(AI[16]);
      let PY = AI[1],
        UY = AI[1],
        LY = AI[1];
      const tY = (0, VF[AI[36]])(AI[16]),
        Yr = (0, VF[AI[36]])(AI[16]);
      let rr = AI[16],
        Dr = (0, VF[AI[36]])(AI[16]);
      const Fr = (...YY) => {
          RI(YY[AI[0]] = AI[14], xY[PY] = YY[AI[1]], nY[PY] = YY[AI[2]], PY++)
        },
        Ar = (...YY) => (RI(YY[AI[0]] = AI[2], YY[AI[2]] = AI[15]), (YY[AI[2]] = (nY[YY[AI[1]]] ? Yr : tY)[xY[YY[AI[1]]]]) !== AI[16] && void 0 !== YY[AI[2]] ? YY[AI[2]] : -AI[2]),
        Ir = (0, VF[AI[18]])("d2lvNjQz"),
        Rr = (0, VF[AI[18]])("amtsa2plZndu"),
        Or = [
          [(0, VF[AI[18]])("aW9qZndlODNq"), "2"],
          [(0, VF[AI[18]])("a3Bq"), "4"],
          [(0, VF[AI[18]])("dXJocmZm"), "5"]
        ],
        ar = [
          [(0, VF[AI[18]])(AI[130] + AI[129]), AI[36]],
          [(0, VF[AI[18]])(AI[130] + "w="), AI[58]]
        ],
        vr = (0, VF[AI[18]])("eTR5bnM="),
        ur = (0, VF[AI[18]])("aHRleWpldA=="),
        sr = (0, VF[AI[18]])("c2RmbGpneGxmY2pr"),
        ir = [
          [(0, VF[AI[18]])("a3NhZmR1"), AI[18]],
          [(0, VF[AI[18]])("ZGZnYWFzZGFz"), AI[133]],
          [sr, AI[48]],
          [(0, VF[AI[18]])("bGFzZWRraGFz"), "u"],
          [(0, VF[AI[18]])("cW16ZjhrM24="), AI[13]]
        ],
        yr = [
          [vr, AI[147]],
          [ur, AI[148]],
          [(0, VF[AI[18]])("bmI3ZnEy"), AI[3]]
        ],
        Qr = (0, VF[AI[18]])("bGtxM20="),
        or = (0, VF[AI[18]])("bWtxN3" + AI[129]),
        Wr = ["mk:tw", "mk:jf"],
        Er = ((...YY) => {
          YY[AI[0]] = AI[1];
          try {
            return YY[AI[32]] = AI[15], (YY[AI[32]] = AY[(0, VF[AI[18]])("V2ViU29ja2V0")]) === AI[16] || void 0 === YY[AI[32]] ? void 0 : YY[AI[32]][AI[93] + AI[94]]
          } catch {
            return AI[15]
          }
        })(),
        mr = ["send", "close", "addEventListener", "removeEventListener", AI[135] + AI[134] + AI[48]],
        Sr = ["onmessage", "onopen", "onclos" + AI[9], "onerro" + AI[18]];
      let lr = AI[22];
      const Tr = (...YY) => {
          YY[AI[0]] = AI[1];
          const DY = rY();
          DY === AI[16] || lr || (lr = oY((() => {
            if (Er !== AI[15] && (0, VF.P)(DY) !== Er) return AI[25];
            for (let YY = AI[1]; YY < mr[AI[0]]; YY++)
              if ((0, VF[AI[58]])(VF[AI[131]], DY, [mr[YY]])) return AI[25];
            for (let YY = AI[1]; YY < Sr[AI[0]]; YY++)
              if (DY[Sr[YY]] !== AI[16] && DY[Sr[YY]] !== AI[15]) return AI[25];
            return AI[22]
          })))
        },
        er = (0, VF[AI[18]])("RXZlbnQ=");
      let Nr = Jr[AI[132]][AI[149]],
        Br = AI[1];
      const cr = () => Br++ === AI[27] ? (Br = AI[1], iY(AI[22]) ? Jr[AI[56]].CheckFuncHit : AI[1]) : AI[1],
        Kr = (0, VF[AI[36]])(AI[16]),
        Hr = FY[AI[0]];
      for (let gY = AI[1]; gY < Hr; gY++) {
        const YY = (0, VF[AI[58]])(VF.$, FY, [gY]);
        Kr[gY] = YY >= 99 && YY <= 122 ? YY : AI[1]
      }
      const zr = (...YY) => {
          return YY[AI[0]] = AI[14], typeof YY[AI[1]] === AI[54] + AI[55] && (0, VF[AI[58]])(VF.R, YY[AI[2]], [(rY = YY[AI[1]], (0, VF.o)(VF.B, rY, []))]) !== AI[16];
          var rY
        },
        Zr = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Cr = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        fr = [
          [YI["Dispat" + AI[134] + AI[48]], () => !zr(EventTarget[AI[93] + AI[94]][AI[135] + AI[134] + AI[48]], Zr)],
          [YI.PerformanceNow, () => !zr(performance[AI[137]], Cr)],
          [YI["DateNo" + AI[136]], () => !zr(Date[AI[137]], Cr)]
        ],
        jr = (0, VF[AI[36]])(AI[16]);
      let hr = AI[1];
      const dr = {
        stackCheck: (...YY) => {
          RI(YY[AI[0]] = AI[1], YY[AI[13]] = AI[16]);
          const rY = nA((() => (YY[AI[13]] = sY(AI[25]), YY[AI[13]] !== AI[16])));
          return YY[AI[13]] !== AI[16] && yY === AI[16] && (yY = function(YY, rY) {
            var DY;
            const FY = /[^\n]+/g,
              AY = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              IY = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let RY = null,
              OY = null,
              gY = (0, VF.o)(VF.R, FY, [YY]);
            for (; null !== gY;) {
              const DY = (0, VF.o)(VF.R, AY, [gY[0]]),
                aY = pA(gY[0], rY);
              if (-1 !== aY) {
                if (null !== DY) return (0, dA.w)(DY[0]);
                const YY = GA(gY[0], aY),
                  rY = (0, VF.o)(VF.R, XA, [gY[0]]),
                  FY = null !== (0, VF.o)(VF.R, qA, [YY]) ? YY : null === rY ? null : rY[1],
                  AY = null === FY ? null : (0, VF.o)(VF.R, IY, [FY]);
                if (null !== AY && "" !== AY[1]) return (0, dA.w)(AY[1])
              }
              null !== DY && (null === RY ? RY = DY[0] : null === OY && DY[0] !== RY && (OY = DY[0])), gY = (0, VF.o)(VF.R, FY, [YY])
            }
            return (0, dA.w)(null !== (DY = OY) && void 0 !== DY ? DY : null === RY ? "none" : "own")
          }(YY[AI[13]][AI[23]], YY[AI[13]][AI[24]])), rY
        },
        [AI[139] + AI[140]]: (...YY) => {
          YY[AI[0]] = AI[1];
          const rY = kY();
          if (rY === AI[14]) return AI[14];
          if (lY[Ir]) return AI[17];
          const DY = UA((() => AY[Rr] ? AI[8] : AI[1]));
          return DY !== AI[1] ? DY === AI[8] ? AI[8] : AI[1] : rY === PA ? AI[1] : rY === AI[28] ? AI[28] : (EY(), FY = Function[AI[93] + AI[94]], IY = AI[145], RY = (...YY) => (YY[AI[0]] = AI[2], YY[AI[1]].writable !== AI[25]), nA((() => {
            const YY = Object.getOwnPropertyDescriptor(FY, IY);
            return void 0 !== YY && RY(YY)
          })) ? AI[6] : AI[1]);
          var FY, IY, RY
        },
        indexPassReplaced: MY,
        [AI[141] + "tSubChanged"]: (...YY) => {
          if (YY[AI[0]] = AI[1], qY === bY || JY) return AI[22];
          const rY = XY();
          return rY !== bY && rY !== qY
        },
        ja: (...YY) => {
          RI(YY[AI[0]] = AI[1], YY[-AI[138]] = Hr);
          for (let rY = AI[1]; rY < fr[AI[0]] + hr; rY++) {
            const DY = rY < fr[AI[0]] ? fr[rY] : jr[rY - fr[AI[0]]];
            DY[AI[1]] < YY[-AI[138]] && oY(DY[AI[2]]) && (YY[-AI[138]] = DY[AI[1]])
          }
          return YY[-AI[138]] < Hr ? Kr[YY[-AI[138]]] : AI[1]
        },
        Tv: () => GY ? Vr[AI[84]] : AI[5],
        [AI[142] + AI[143] + "Subs"]: (...YY) => {
          YY[AI[0]] = AI[1];
          const rY = gY[AI[82]].FW[AI[142] + AI[143]];
          return typeof rY === AI[144] && rY > AI[1] ? rY > AI[100] ? AI[100] : rY : AI[1]
        },
        ["getCom" + AI[154]]: (...YY) => {
          RI(YY[AI[0]] = AI[1], YY[AI[13]] = AI[15], PY = AI[1]);
          for (let DY = AI[1]; DY < cY; DY++) Fr(BY[DY], AI[25]);
          for (let DY = AI[1]; DY < Or[AI[0]]; DY++) lY[Or[DY][AI[1]]] && Fr(Or[DY][AI[2]], AI[25]);
          const rY = UA((() => xA(atob[AI[145]](), vY) ? AI[1] : AI[2]));
          rY === AI[2] && Fr(AI[82], AI[25]), EY();
          const FY = rY === PA ? PA : UA(((...YY) => {
            YY[AI[0]] = AI[1];
            const rY = Object.getOwnPropertyDescriptor(window, "atob");
            return rY === AI[15] ? PA : rY[AI[146]] !== AI[15] ? AI[2] : AI[1]
          }));
          FY === AI[2] && Fr(AI[56], AI[25]);
          const AY = FY === PA;
          for (let DY = AI[1]; DY < ar[AI[0]] && !AY; DY++) lY[ar[DY][AI[1]]] && Fr(ar[DY][AI[2]], AI[25]);
          const IY = PY > cY;
          YY[AI[2]] = AI[16], cY === AI[1] && (HY > AI[1] ? YY[AI[2]] = KY[AI[1]] : CY ? YY[AI[2]] = "fp" : IY || (YY[AI[2]] = lY[vr] ? AI[147] : lY[ur] ? AI[148] : AI[16]));
          for (let DY = AI[1]; DY < ir[AI[0]] && !AY; DY++) lY[ir[DY][AI[1]]] && Fr(ir[DY][AI[2]], AI[25]);
          const RY = PY,
            OY = (0, bA[AI[9]])(),
            gY = OY !== AI[16] && (0, gr[AI[58]])(OY);
          gY && !AY && Fr(OY, AI[22]), wY && Fr("ix", AI[22]), NY && Fr("il", AI[22]);
          for (let DY = AI[1]; DY < HY; DY++) Fr(KY[DY], AI[25]);
          for (let DY = AI[1]; DY < yr[AI[0]]; DY++) lY[yr[DY][AI[1]]] && Fr(yr[DY][AI[2]], AI[25]);
          lY[Qr] && Fr("mk:lk", AI[25]);
          const aY = ((...YY) => {
            YY[AI[0]] = AI[2];
            for (let rY = AI[1]; rY < Wr[AI[0]]; rY++)
              if (YY[AI[1]] === Wr[rY]) return Wr[rY];
            return AI[16]
          })(lY[or]);
          if (aY !== AI[16] && Fr(aY, AI[25]), DY !== AI[16] && mY(DY.emitReplaced) === AI[25] && Fr("mk:em", AI[25]), lr && Fr("3s", AI[22]), VF.S && Fr("3b", AI[22]), EY(), WY && Fr("3d", AI[22]), AY && Fr("3g", AI[22]), OY === AI[16] || gY || Fr(OY, AI[22]), yY !== AI[16] && Fr(yY, AI[22]), QY === AI[16] && Vr[AI[3]] !== AI[16] && (QY = function(YY) {
              const rY = /[^\n]+/g,
                DY = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let FY = null,
                AY = "",
                IY = !1,
                RY = (0, VF.o)(VF.R, rY, [YY]);
              for (; null !== RY;) {
                const OY = (0, VF.o)(VF.R, DY, [RY[0]]),
                  gY = null === OY ? (0, VF.o)(VF.R, XA, [RY[0]]) : null,
                  aY = null !== gY && null !== (0, VF.o)(VF.R, qA, [gY[1]]) && 0 !== pA(gY[1], "wasm:") ? gY[1] : null;
                if (null === FY) null !== OY ? (FY = OY[2], AY = OY[4]) : null !== aY && (FY = "");
                else if (null !== OY) {
                  IY = !0;
                  const YY = OY[2] === FY;
                  if ("" !== OY[1] || !YY || OY[4] !== AY) {
                    const rY = "moz-extension" === OY[3] || "safari-web-extension" === OY[3];
                    return (0, dA.f)("" !== OY[1] || YY ? "inline" : rY ? OY[3] : OY[2])
                  }
                } else if (null !== aY) {
                  const YY = -1 !== pA(RY[0], "userscript") || -1 !== pA(RY[0], ".user.js");
                  return (0, dA.f)(YY ? "userscript" : "inline")
                }
                RY = (0, VF.o)(VF.R, rY, [YY])
              }
              return (0, dA.f)(IY ? "own" : "unknown")
            }(Vr[AI[3]])), QY !== AI[16] && Fr(QY, AI[22]), PY === AI[1]) return AI[16];
          if (YY[AI[2]] === AI[16] && nY[AI[1]] && !(0, dA[AI[47]])(xY[AI[1]]))
            for (let DY = AI[2]; DY < RY; DY++)
              if (nY[DY] && (0, dA[AI[47]])(xY[DY])) {
                const YY = xY[DY];
                for (let rY = DY; rY > AI[1]; rY--) RI(xY[rY] = xY[rY - AI[2]], nY[rY] = nY[rY - AI[2]]);
                RI(xY[AI[1]] = YY, nY[AI[1]] = AI[25]);
                break
              } if (RI(YY[AI[32]] = AI[1], YY[AI[85]] = YY[AI[2]] === AI[16] ? AI[1] : RY), YY[AI[85]] > AI[1] && OY !== AI[16] && gY && !AY) {
            for (let rY = YY[AI[85]]; rY > AI[1]; rY--) RI(xY[rY] = xY[rY - AI[2]], nY[rY] = nY[rY - AI[2]]);
            RI(xY[AI[1]] = OY, nY[AI[1]] = AI[22], YY[AI[32]] = AI[2], YY[AI[85]]++)
          }
          if (YY[AI[9]] = AI[1], UY++ % AI[14] === AI[2])
            for (let DY = AI[2]; DY < PY; DY++) Ar(DY) < Ar(YY[AI[9]]) && (YY[AI[9]] = DY);
          const uY = xY[YY[AI[9]]];
          (nY[YY[AI[9]]] ? Yr : tY)[uY] = LY++;
          const sY = YY[AI[9]] >= YY[AI[32]] && YY[AI[9]] < YY[AI[85]];
          if (!nY[YY[AI[9]]] || uY === YY[AI[2]] || YY[AI[9]] === AI[1] && !sY) return uY === AI[48] ? (0, dA.y)(lY[sr], dA[AI[32]]) : uY;
          const iY = (YY[AI[13]] = YY[AI[2]]) !== AI[16] && void 0 !== YY[AI[13]] ? YY[AI[13]] : xY[AI[1]];
          return iY !== rr && RI(rr = iY, Dr = (0, VF[AI[36]])(AI[16])), Dr[uY] ??= (0, dA[AI[48]])(uY, iY)
        }
      };
      let Mr = Jr[AI[132]][AI[149]];
      const wr = () => Nr !== Jr[AI[132]][AI[149]] ? Nr : Mr;
      let br = AI[1],
        Xr = AI[14],
        qr = AI[1],
        pr = AI[1];
      return {
        checks: dr,
        checkEvent: (...YY) => {
          YY[AI[0]] = AI[2];
          try {
            const rY = AY[er];
            if (typeof rY === AI[54] + AI[55] && !(YY[AI[1]] instanceof rY) && !(0, VF.G)(YY[AI[1]])) return Nr = Jr[AI[132]].NotEvent, AI[1];
            if (YY[AI[1]].isTrusted === AI[22]) return AI[1];
            let DY = AI[1];
            for (const FY in YY[AI[1]]) DY++;
            return DY < AI[35] ? (Nr = Jr[AI[132]]["FewPropertie" + AI[133]], AI[1]) : cr()
          } catch {}
          return AI[1]
        },
        checkPadCall: () => {
          try {
            return cr()
          } catch {
            return AI[1]
          }
        },
        usedProp: wr,
        watchHeld: (...YY) => {
          RI(YY[AI[0]] = AI[14], YY[AI[13]] = AI[15]);
          const rY = VY((() => {
            YY[AI[13]] = YY[AI[2]]()
          }));
          jr[hr++] = [YY[AI[1]], () => !rY || YY[AI[2]]() !== YY[AI[13]]]
        },
        Zu: (...YY) => {
          YY[AI[0]] = AI[1];
          const rY = MY();
          return ((...YY) => {
            if (RI(YY[AI[0]] = AI[2], YY[AI[13]] = AI[15], YY[AI[3]] = AI[15]), DY !== AI[16]) {
              const rY = mY(DY.pR),
                FY = "v3" === rY ? AI[17] : "v5" === rY ? AI[27] : "v6" === rY ? AI[28] : AI[14];
              FY !== AI[14] && (Xr = FY);
              const AY = mY(DY["inbuil" + AI[152] + AI[153]]);
              typeof AY === AI[144] && AY >= AI[1] && AY <= AI[150] && (AY | AI[1]) === AY && (qr = AY), RI(YY[AI[13]] = mY(DY.reflectApplyHit), YY[AI[3]] = mY(DY.definerHit))
            }
            const rY = YY[AI[1]] ? AI[80] : "11" === YY[AI[3]] ? AI[150] : "13" === YY[AI[3]] ? AI[116] : YY[AI[13]] !== AI[15] && YY[AI[13]] !== AI[16] ? AI[14] : "10" === YY[AI[3]] ? AI[35] : "12" === YY[AI[3]] ? AI[67] : AI[1];
            rY !== AI[1] && (pr = rY)
          })(rY), br++ % 10 === AI[1] && (Tr(), nA((() => !xA(AY[IY][AI[145]][AI[145]](), vY))) && (Mr = Mr === Jr[AI[132]][AI[151]] ? Jr[AI[132]][AI[151]] : Jr[AI[132]].Fr), nA((() => !xA(AY[IY][AI[145]](), vY))) && (Mr = Jr[AI[132]][AI[151]])), {
            flags: rY ? Jr[AI[56]].Butto : AI[1],
            values: [
              [Jr[AI[47]].PhysicsVersion, Xr],
              [Jr[AI[47]]["Inbuil" + AI[152] + AI[153]], qr],
              [Jr[AI[47]]["AltCom" + AI[154]], pr],
              [Jr[AI[47]]["ProbeUsedPro" + AI[36]], wr()]
            ]
          }
        }
      }
    };
    const OI = "[bloxd-wasm-client]",
      gI = "bloxdWasmDownloadFailed",
      aI = Lr.b,
      vI = "boot",
      uI = "playSources",
      sI = "wasmBuild",
      iI = "bloxd-wasm-joined",
      yI = "bloxd-wasm-first-view",
      QI = "bloxd-wasm-playable-legacy",
      oI = 1048576,
      WI = 8 * oI,
      EI = 8,
      mI = 1006,
      VI = 1e3,
      SI = "You lost connection to the server.",
      lI = "general:lostConnection",
      TI = 1048576,
      eI = 5e3,
      NI = 100,
      BI = [2e3, 1e4, 3e4],
      cI = 3e4;
    let KI = null,
      HI = null,
      zI = !1,
      ZI = !1,
      CI = !1,
      fI = null,
      jI = null,
      hI = null,
      dI = null,
      JI = null,
      MI = null,
      wI = null;
    const bI = new class {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = YY, this.soundOn = rY, this.now = DY, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var YY;
        null === (YY = this.player) || void 0 === YY || YY.prepare()
      }
      preload(YY) {
        var rY;
        this.stopped || (null === (rY = this.player) || void 0 === rY || rY.preload(YY))
      }
      cancelPreload() {
        var YY;
        null === (YY = this.player) || void 0 === YY || YY.cancelPreload()
      }
      load(YY) {
        if (null !== this.player || this.stopped) return;
        this.player = YY, YY.setMaster(this.master, this.soundOn);
        const rY = this.now(),
          DY = this.local;
        this.local = [];
        for (const AY of DY)
          if (!(AY.stopped || !AY.loop && rY - AY.at >= 300)) try {
            this.start(AY, YY, rY)
          } catch (FY) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", FY)
          }
      }
      start(YY, rY, DY) {
        const {
          name: FY,
          pos: AY,
          ear: IY,
          maxHearDist: RY,
          refDistance: OY,
          loop: gY,
          fade: aY
        } = YY, vY = rY.playGame(FY, fr(YY, DY), AY, IY, RY, OY, gY);
        if (YY.sound = vY, 1 !== YY.rate && vY.rate(YY.rate), null !== YY.panner && vY.setPannerAttr(YY.panner), null !== YY.moved && vY.setPosition(YY.moved), null !== aY && DY - aY.at < aY.ms) {
          const rY = Cr(this.master);
          rY > 0 ? vY.fade(0, YY.volume * rY, aY.at + aY.ms - DY) : vY.setRelativeVolume(YY.volume)
        }
      }
      onAudioEvent(YY, rY, DY, FY) {
        var AY, IY;
        return null === (AY = null === (IY = this.player) || void 0 === IY ? void 0 : IY.onAudioEvent(YY, rY, DY, FY)) || void 0 === AY || AY
      }
      applyListener(YY) {
        var rY;
        null === (rY = this.player) || void 0 === rY || rY.applyListener(YY)
      }
      playGame(YY, rY, DY, FY, AY, IY, RY) {
        if (this.stopped) return Zr.b;
        if (this.player) return this.player.playGame(YY, rY, DY, FY, AY, IY, RY);
        const OY = this.now();
        this.local = this.local.filter((YY => !YY.stopped && (YY.loop || OY - YY.at < 300)));
        const gY = {
          name: YY,
          volume: Cr(rY),
          fade: null,
          pos: DY && [DY[0], DY[1], DY[2]],
          ear: FY && [FY[0], FY[1], FY[2]],
          maxHearDist: AY,
          refDistance: IY,
          loop: RY,
          rate: 1,
          panner: null,
          moved: null,
          at: OY,
          stopped: !1,
          sound: null
        };
        this.local.push(gY);
        const aY = {
          stop: () => {
            var YY;
            return gY.stopped = !0, null === (YY = gY.sound) || void 0 === YY || YY.stop(), aY
          },
          fade: (YY, rY, DY) => {
            if (gY.sound) return gY.sound.fade(YY, rY, DY), aY;
            const FY = Cr(this.master),
              AY = Cr(FY > 0 ? rY / FY : rY > 0 ? gY.volume : 0),
              IY = this.now(),
              RY = fr(gY, IY);
            return gY.volume = AY, gY.fade = DY > 0 && RY !== AY ? {
              from: RY,
              at: IY,
              ms: DY
            } : null, aY
          },
          rate: YY => (gY.sound ? gY.sound.rate(YY) : gY.rate = YY, aY),
          getVolume: () => gY.sound ? gY.sound.getVolume() : gY.volume * Cr(this.master),
          getRelativeVolume: () => gY.sound ? gY.sound.getRelativeVolume() : gY.volume,
          setRelativeVolume: YY => (gY.sound ? gY.sound.setRelativeVolume(YY) : (gY.volume = Cr(YY), gY.fade = null), aY),
          setPannerAttr: YY => (gY.sound ? gY.sound.setPannerAttr(YY) : gY.panner = {
            ...YY
          }, aY),
          setPosition: YY => (gY.sound ? gY.sound.setPosition(YY) : gY.moved = [YY[0], YY[1], YY[2]], aY)
        };
        return aY
      }
      setMaster(YY, rY) {
        var DY;
        this.master = YY, this.soundOn = rY, null === (DY = this.player) || void 0 === DY || DY.setMaster(YY, rY)
      }
      stop() {
        var YY;
        this.stopped = !0, null === (YY = this.player) || void 0 === YY || YY.stopAll();
        for (const rY of this.local) rY.stopped = !0;
        this.local = []
      }
    }((0, Sr.d)(), !0);
    let XI = {
        wasm: "unknown",
        client: String(Yr.d)
      },
      qI = null,
      pI = () => {};
    const kI = new Promise((YY => {
      pI = YY
    }));
    let GI = () => {};
    const xI = new Promise((YY => {
      GI = YY
    }));
    let nI, PI = null,
      UI = null,
      LI = null,
      tI = null,
      YR = null,
      rR = null,
      DR = null,
      FR = null,
      AR = null,
      IR = null,
      RR = null,
      OR = null,
      gR = null,
      aR = null,
      vR = null,
      uR = null,
      sR = null,
      iR = null,
      yR = !1,
      QR = null;
    const oR = new Set,
      WR = new Set;

    function ER(YY) {
      if (!oR.has(YY)) {
        oR.add(YY);
        for (const DY of WR) try {
          DY(YY)
        } catch (rY) {
          console.error(`${OI} a startup listener threw`, rY)
        }
      }
    }

    function mR(YY) {
      yR = !0, YY.isStopped || ER("texturesIn")
    }
    let VR = 1,
      SR = -1 / 0,
      lR = !1,
      TR = !1,
      eR = 0,
      NR = null,
      BR = !1;
    const cR = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let KR = 0,
      HR = 0,
      zR = null,
      ZR = null,
      CR = null,
      fR = null;
    const jR = new WeakMap;
    let hR = null,
      dR = null,
      JR = null,
      MR = null,
      wR = null,
      bR = null,
      XR = null,
      qR = 0,
      pR = null,
      kR = null,
      GR = null,
      xR = null,
      nR = -1 / 0,
      PR = null;
    const UR = new Set;
    let LR = !1,
      tR = null;
    const YO = new Map,
      rO = new Set;
    let DO = !1;
    const FO = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let AO = null,
      IO = () => [0, 0],
      RO = () => {},
      OO = () => {},
      gO = null,
      aO = null;
    const vO = new class {
      constructor(YY) {
        this.reached = YY, this.next = 1
      }
      observe(YY) {
        if (!(YY < this.next)) {
          for (; this.next <= YY;) this.next *= 2;
          this.reached(YY)
        }
      }
    }((YY => {
      console.warn(`${OI} chunk cancels from the server this session: ${YY}`)
    }));
    let uO = 1,
      sO = null,
      iO = null,
      yO = null,
      QO = null,
      oO = null,
      WO = !1,
      EO = !1,
      mO = 0,
      VO = null,
      SO = !1,
      lO = null,
      TO = null,
      eO = !1;
    const NO = new class {
      constructor(YY) {
        this.vo = YY, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(YY, rY, DY) {
        (0, Nr.e)(YY) && (this.lossPending = !1);
        const FY = DY - this.lastFrameMs;
        this.lastFrameMs = DY, this.lossPending && rY && (0, Nr.j)(YY) ? (null === this.undrawnSinceMs || FY > 1e3) && (this.undrawnSinceMs = DY) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && DY - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(YY) {
        YY !== this.shown && (this.shown = YY, this.vo(YY))
      }
    }((YY => {
      gY.g.vo(zr.d, YY)
    }));
    let BO = !1,
      cO = !0,
      KO = null,
      HO = !1,
      zO = !1,
      ZO = !1;

    function CO() {
      return hI ??= Promise.all([DY.e(186), DY.e(137), DY.e(56)]).then((() => DY(42332))).then((YY => (jI = YY, Object.assign(globalThis, {
        bloxdPreviewPage: YY.pagePreviews()
      }), YY)), (YY => {
        throw hI = null, YY
      })), hI
    }

    function fO() {
      return fI ??= DY.e(54).then((() => DY(42348))).catch((YY => {
        throw fI = null, new SY.e(YY)
      })), fI
    }
    class jO {
      constructor() {
        this.host = null
      }
      open(YY) {
        return null !== this.host ? YY(this.host) : CO().then((rY => (this.host ??= new rY.WasmPreviewHost(rY.pagePreviews()), YY(this.host))))
      }
      openMob(YY) {
        return this.open((rY => rY.openMob(YY)))
      }
      openPet(YY) {
        return this.open((rY => rY.openPet(YY)))
      }
      openMobLineup(YY) {
        return this.open((rY => rY.openMobLineup(YY)))
      }
      openCharacter(YY, rY) {
        return this.open((DY => DY.openCharacter(YY, rY)))
      }
    }

    function hO() {
      CI || (CI = !0, nF.c.setHost(new jO), (0, oD.n)(), pF.i.setFollower(Jg), Object.assign(globalThis, {
        bloxdPreviews: nF.c
      }))
    }

    function dO() {
      CO().then((YY => {
        YY.pagePreviews().prefetch()
      }), (() => {}))
    }

    function JO() {
      let YY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ZI) return;
      ZI = !0, BO = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), cO = !BO, console.info(`${OI} starting`), zI || (zI = !0, (0, zr.L)(new cr(Fg, ug)), (0, sY.k)(new Kr), (0, zr.I)(new Hr), (0, zr.D)()), hO(), (0, SD.setCrashScreen)((YY => {
        let {
          text: rY,
          reload: DY
        } = YY;
        ! function(YY, rY) {
          var DY, FY;
          if (HO) return;
          HO = !0, (0, ED.e)(), null === (DY = PR) || void 0 === DY || DY.abort(), PR = null, kF.d.release();
          const AY = BO ? null !== (FY = YY.cancel) && void 0 !== FY ? FY : "general:back" : null;
          iF({
            ...YY,
            cancel: AY
          }).then((YY => {
            YY && rY && zO ? ((0, vr.l)("reloadOntoJs"), (0, XY.h)(vr.t)) : YY && rY ? (0, XY.j)() : BO && (0, XY.f)("/")
          }))
        }(rY, DY)
      })), (0, hF.k)(), (0, Vr.e)();
      let rY = null;
      try {
        rY = FI("ywuxgx1bcuj", (() => {
          var YY, rY;
          return null !== (YY = null === (rY = PI) || void 0 === rY ? void 0 : rY.ws) && void 0 !== YY ? YY : null
        }), YY, "pfichwnumq")
      } catch (AY) {
        console.error(`${OI} probes`, AY)
      }
      const FY = function() {
        const YY = (0, WF.o)(),
          rY = (0, WF.j)();
        let DY = !1;
        return FY => {
          YY && !DY && (DY = !0, (0, SD.reportStaleBuildReload)(YY, rY, FY))
        }
      }();
      wg(), BO || function() {
        const YY = function(YY) {
          var rY;
          const DY = new URLSearchParams(YY),
            FY = DY.get("game");
          return FY ? {
            game: FY,
            lobby: null !== (rY = DY.get("lobby")) && void 0 !== rY ? rY : null
          } : null
        }(window.location.search);
        if (YY) return (0, rr.l)(YY.game) && wg().request(), void bO(YY.game, YY.lobby);
        const rY = new URLSearchParams(window.location.search).get("ws");
        if (!rY) return;
        kI.then((YY => {
          YY && async function(YY, rY) {
            try {
              await (0, SY.k)(YY), dR = og(new WebSocket(rY)), null !== dR && kF.d.setGame(null), MO()
            } catch (AY) {
              console.error(`${OI} ?ws=${rY} did not attach`, AY)
            }
          }(YY, rY)
        }))
      }(), async function(YY) {
        var rY, FY, IY, RY, OY;
        if ("undefined" === typeof WebAssembly) return zg("noWebAssembly", "This browser has no WebAssembly"), null;
        const aY = await (0, rA.L)();
        if ((0, SD.setCrashBackend)((0, Lr.l)(aY) ? "unsupported" : null !== (rY = null === aY || void 0 === aY ? void 0 : aY.backend) && void 0 !== rY ? rY : "none"), (0, Lr.l)(aY)) return zg("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${aY.missing.join(", ")}`, {
          missing: aY.missing.join(",")
        }), null;
        if ((0, NA.q)("render")) try {
          const {
            startRenderDebug: YY
          } = await Promise.all([DY.e(74), DY.e(47)]).then((() => DY(4260)));
          YY(aY)
        } catch (cr) {
          console.warn("The render debug topic didn't load", cr)
        }
        if ((0, NA.q)("renderlite")) try {
          const {
            startRenderLite: YY
          } = await Promise.all([DY.e(258), DY.e(48)]).then((() => DY(42369)));
          yO = YY(aY)
        } catch (cr) {
          console.warn("The renderlite debug topic didn't load", cr)
        }
        let vY = null;
        if (null !== aY && Zg()) {
          const YY = (0, yF.e)(aY, !0);
          "webgl" === aY.backend && null !== YY && (0, sr.l)(YY, SD.reportGpuWasmPopulation), null !== YY && (0, ur.p)(YY), vY = (0, yF.b)(aY, YY)
        }
        if (null !== aY && null !== vY) return (0, SD.reportGpuFallback)(vY, aY.backend), Cg(`the wasm client's renderer plays this GPU (${vY}) on ${aY.backend} worse than the JS client`, "gpu"), null;
        const uY = null !== (FY = null === aY || void 0 === aY ? void 0 : aY.backend) && void 0 !== FY ? FY : null;
        FO.adapter = null !== (IY = null === aY || void 0 === aY ? void 0 : aY.adapter) && void 0 !== IY ? IY : null, FO.boundAtMs = null, FO.indirectHangs = null;
        const sY = !(0, Lr.S)();
        null !== aY && "none" !== aY.reason && console.info(`${OI} drawing with ${aY.backend}: ${aY.reason}`);
        const iY = (0, rA.C)();
        GI(!0), (0, SY.z)((YY => {
          try {
            null !== uY && (gO = YY.startSkyFeed, jg(), function(YY) {
              var rY, DY;
              IO = YY.rasterText, MR = YY.setTextLocalPlayer, YY.setTextLocalPlayer(null !== (rY = null === (DY = JR) || void 0 === DY ? void 0 : DY.info.playerDbId) && void 0 !== rY ? rY : null), RO = YY.drainTextRerasters, OO = YY.loadTextIcons, YY.warmText((() => WO)), YY.textChanged(), WO && setTimeout(OO, 0)
            }(YY), aO = YY.startShellAnalytics, Gg())
          } finally {
            ZO || (QO = YY.followMenuPrefs({
              setSoundPrefs: ig,
              setEnvPrefs: yg,
              setUiPrefs: sg,
              setLookPrefs: Qg
            }))
          }
        })), (0, SY.n)(bI).catch((YY => {
          console.warn(`${OI} the game code did not load: a join asks again`, YY)
        }));
        const yY = (0, rA.i)(aY);
        let QY, oY;
        yY.catch((() => {})), "loading" === (0, Ar.B)() && QA();
        try {
          QY = function(YY) {
            const rY = null !== YY && void 0 !== YY ? YY : document.createElement("canvas");
            rY.id = "wasm-game-canvas", (0, OA.l)();
            const DY = (0, Br.e)(),
              FY = (0, Br.f)(DY);
            return rY.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, RA.g)(rY, FY), (0, Br.c)(rY, DY), rY.width = FY.bufferWidth, rY.height = FY.bufferHeight, Ag(rY, cO), KO = rY, document.body.append(rY), rY
          }(null === uY ? null : await (await CO()).pagePreviews().beginSession())
        } catch (AY) {
          return await la({
            site: sI,
            error: AY
          }, (() => {
            (0, SD.showUnsupported)((0, vF.n)("fetch"), fA.c.fetch, `the previews did not load: ${String(AY)}`)
          })), null
        }
        QA();
        try {
          oY = await yY
        } catch (AY) {
          return await la({
            site: sI,
            error: AY
          }, (() => {
            (0, SD.showUnsupported)((0, vF.n)("fetch"), fA.c.fetch, `the ${null!==uY&&void 0!==uY?uY:"client"} build did not load: ${String(AY)}`)
          })), null
        }
        const WY = (0, rA.g)(),
          EY = !WY && !0 !== VD.q.getItem(gI),
          mY = !WY && "loading" === (0, Ar.B)();
        await (0, Ir.h)(oY, ar.f, {
          reloadFailedDownload: EY
        }), mY && !(0, Ar.Q)() && await (0, Ir.h)(oY, ar.f, {
          reloadFailedDownload: EY
        });
        sA = performance.now();
        const lY = XI;
        if (!(0, Ar.Q)()) {
          (0, Ar.P)() && VD.q.setItem(gI, !0);
          const YY = (0, Ar.r)();
          if ("call" === YY) sa({
            site: tr.t,
            error: (0, Ar.n)(),
            header: null
          }, lY);
          else {
            const rY = null !== YY && void 0 !== YY ? YY : "instantiate",
              DY = () => {
                (0, SD.showUnsupported)((0, vF.n)(rY), fA.c[rY], (0, Ar.i)())
              };
            if ("compile" !== YY && "instantiate" !== YY || !Zg())
              if ("fetch" === rY) {
                const YY = [oY.url().href, ar.f.url().href];
                await la({
                  site: sI,
                  error: (0, Ar.i)(),
                  urls: YY
                }, DY)
              } else DY();
            else {
              const rY = (0, Ar.i)(),
                DY = (0, wr.g)((0, Ar.n)());
              (0, SD.reportCountedLoadFallback)((0, vF.n)(YY), fA.c[YY], rY, DY), Cg(`the wasm client did not ${YY} here (${rY})`, DY ? "oom" : null)
            }
          }
          return null
        }(0, Rr.L)(oY.url()) && (0, SD.reportUnstreamedCoreLoad)();
        const TY = (0, Ar.D)();
        let eY, NY = lY;
        try {
          NY = {
            ...lY,
            wasm: TY.Iu()
          };
          const {
            Ko: YY
          } = oY.bindings, rY = YY.aDY();
          if (rY !== Jr.x) return sa({
            site: tr.c,
            error: `core ABI ${rY}, page ABI ${Jr.x}`,
            header: null
          }, NY), null;
          const [DY, FY] = (0, Jr.ae)();
          eY = new YY(DY, FY)
        } catch (AY) {
          return sa({
            site: tr.c,
            error: AY,
            header: null
          }, NY), null
        }
        XI = NY, qI = oY.bindings;
        const BY = new tr.g(eY, Ar.x, {
          onCrash: YY => {
            var rY;
            null === (rY = yO) || void 0 === rY || rY.crashed(YY), sY && function(YY, rY, DY) {
              if ("webgpu" !== rY || (0, rA.d)()) return !1;
              const FY = function(YY) {
                if (YY.site === tr.f && (0, Lr.n)(YY.error)) return "frames_refused";
                return YY.site === aI && (0, Lr.o)(YY.error) ? "start_failed" : null
              }(YY);
              if (null === FY || !(0, Lr.P)(FY)) return !1;
              return (0, SD.reportRenderReload)("webgpu", "start_failed" === FY ? 0 : 1, DY, {
                cause: FY,
                error: YY.error,
                context: FO,
                session: Qa(null)
              }), Lg(), !0
            }(YY, uY, NY) || sa(YY, NY)
          },
          onNetEvent: Ug,
          onReconnectGrace: cg,
          onCoreErrors: (YY, rY) => {
            var DY, FY;
            YY.some((YY => {
              let {
                code: rY
              } = YY;
              return rY === Jr.G.RenderDeviceLost
            })) && ((0, rA.x)(), NO.deviceLost()), null === (DY = yO) || void 0 === DY || DY.coreErrors(YY), (0, SD.reportCoreErrors)(YY, rY, NY, ((YY, rY) => {
              var DY;
              return null === (DY = AO) || void 0 === DY ? void 0 : DY.vDY(YY, rY)
            })), null === (FY = QR) || void 0 === FY || FY.coreErrors(YY)
          },
          onRenderReload: (YY, rY, DY) => {
            ! function(YY, rY, DY, FY, AY, IY) {
              var RY;
              if ((0, rA.d)()) return;
              const OY = rY === Jr.Tc.WEBGPU,
                gY = FY === Jr.Tc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                aY = (0, Lr.R)(AO);
              null === (RY = yO) || void 0 === RY || RY.reload(OY, DY, gY, null === aY || void 0 === aY ? void 0 : aY.message);
              const vY = OY ? (0, Lr.O)(gY, AY) : null;
              if (null !== vY) {
                const rY = void 0 === aY ? "" : ` (${aY.message})`;
                return void YY.crash(SD.RENDER_RELOAD_SITE, new Error(`${(0,SD.renderReloadMessage)("webgpu",gY,DY)} and ${vY}${rY}`))
              }
              const uY = OY ? "webgpu" : "webgl1" === IY ? "webgl1" : "webgl";
              "lost" === gY && (0, rA.x)();
              (0, SD.reportRenderReload)(uY, DY, XI, {
                cause: gY,
                error: aY,
                context: FO,
                session: Qa(YY.sunShadowsHeld())
              }), Lg()
            }(BY, YY, rY, DY, sY, uY)
          },
          onEnvEvent: YY => {
            var rY;
            YY.kind === Jr.R.SkyImages && (null === (rY = uR) || void 0 === rY || rY.onEvent(YY.payload))
          },
          onImages: YY => {
            var rY;
            null === (rY = sR) || void 0 === rY || rY.onEvent(YY)
          },
          onModelRequest: YY => {
            var rY;
            null === (rY = gR) || void 0 === rY || rY.request(YY)
          },
          onModelTaken: (YY, rY) => {
            var DY;
            null === (DY = gR) || void 0 === DY || DY.taken(YY, rY)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(YY, rY) {
                const DY = wI;
                if (null === DY || YY.isStopped) return;
                DY.restore((YY => {
                  (0, SD.reportTerrainTextureFailure)(YY, rY)
                })).then((rY => {
                  !1 !== rY || YY.isStopped ? !0 === rY && console.info(`${OI} terrain textures handed over again after the renderer lost them`) : console.warn(`${OI} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(BY, NY)
            }))
          },
          onKeepAlive: YY => {
            const rY = null === fR ? void 0 : jR.get(fR);
            void 0 !== rY && lF(rY, YY)
          }
        });
        if (dI = BY, null !== YY) {
          BY.setAntiCheatProbes(LA(Ar.x, YY.checks)), YY.watchHeld(YI.CoreFrame, (() => BY.frame)), YY.watchHeld(YI.GlueFrame, (() => eY.frame));
          const rY = DI(YY, ((YY, rY, DY) => {
            let FY = !1;
            return Ea(BY, (() => {
              FY = BY.rings.input.writeRecord(Jr.ub.AntiCheat, YY, rY, DY, 0)
            })), FY
          }));
          BY.isStopped ? rY.stop() : RR = rY
        }
        KI = (YY, rY, DY) => BY.rings.cmd.writeCmd(YY, rY, DY), HI = YY => BY.rings.cmd.growForCmd(YY), BR = !1, jg(), (0, SY.A)(BY, {
          core: eY,
          memory: Ar.x,
          staleOr: (YY, rY, DY) => la({
            site: YY,
            error: rY
          }, DY),
          reportReplayFault: (YY, rY) => {
            (0, SD.reportReplayFault)(YY, rY, XI)
          },
          audio: bI,
          options: ir.b,
          onNetEvent: Ug,
          sessionInfo: YY => {
            var rY;
            return (null === (rY = JR) || void 0 === rY ? void 0 : rY.conn) === YY ? JR.info : null
          },
          onEventOverflow: rg,
          replayShaderPack: YY => {
            var rY;
            null === (rY = QR) || void 0 === rY || rY.replay(YY)
          },
          hasPackModel: YY => {
            var rY, DY;
            return null !== (null !== (rY = null === (DY = hg()) || void 0 === DY ? void 0 : DY.modelUrl(YY)) && void 0 !== rY ? rY : null)
          },
          beforeWrite: () => (!lR && BY.rings.net.cursor > 0 && ra(BY, !1, "all"), !BY.isStopped),
          beforeOp: () => (!lR && BY.netWrittenSinceFrame > 0 && ra(BY, !1, "budget"), !BY.isStopped)
        }), (0, VY.C)({
          lockPointer: () => {
            if (!jD(QY)) return !1;
            try {
              Promise.resolve(QY.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, TD.c)()
          },
          leaveGame: () => {
            Yg()
          },
          canvas: () => QY
        }), OR = (0, VY.w)((() => {
          var YY;
          const rY = (0, SY.g)();
          null === (YY = (0, SY.v)()) || void 0 === YY || YY.followCursorAim(!0 === (null === rY || void 0 === rY ? void 0 : rY.isSessionLive) ? rY : null)
        })), zR && BY.setUiPrefs(zR);
        ZR && BY.setEnvPrefs(ZR);
        CR && BY.setLookPrefs(CR);
        const cY = AA ? IA(AA.preventMovement) : null;
        cY && vg(cY);
        const KY = (0, iD.h)(),
          HY = (0, iD.d)(BY, KY);
        AR = KY.basis, (0, mD.i)(null === HY ? null : (0, sD.n)(HY)), FR = HY;
        const zY = (0, Or.d)();
        let ZY = 1 / 0,
          CY = !0,
          fY = KY.shedFootprintBytes;
        const jY = new jF.e(zY, (() => eY.ho()), (YY => {
          BY.crash(tr.l, YY)
        }));
        rR = jY, DR = jY, null !== HY && jY.setCeiling(Math.min((0, jF.o)(HY), ZY));
        if (CY) {
          jY.setShed((YY => {
            const rY = BY.shedMemory("joinReserve" !== YY);
            return null !== rY && (null === FR || rY < FR) && (FR = rY, (0, mD.i)((0, sD.n)(rY))), rY
          }), ((YY, rY, DY) => {
            1 === rY ? (0, SD.reportMemoryShed)(YY, DY, XI) : console.warn(`${OI} wasm memory: shed again (${YY}): shed ${rY}`, DY.wasmMemoryShed)
          }), (() => BY.addDistanceInUse()));
          const YY = (0, Lr.D)(TY);
          jY.setFootprint(new eA(fY, {
            storedChunks: () => eY.uDY(),
            gpuBytes: () => {
              var rY;
              return null !== (rY = null === YY || void 0 === YY ? void 0 : YY.sDY()) && void 0 !== rY ? rY : 0
            },
            jsHeapBytes: TA
          }))
        }
        window.addEventListener("pagehide", (() => {
          rR === jY && (jY.refreshStats(), Wa(jY))
        })), window.addEventListener("pagehide", tg), window.addEventListener("pagehide", Ya), !1;
        const [hY, dY] = (0, QD.g)();
        oO = (0, WD.f)((YY => BY.setChunkAddDistance(YY.horizontal, YY.vertical)), {
          horizontal: hY,
          vertical: dY
        }), BY.setAmbientOcclusion(!0 !== VD.m.getItem("disableAmbientOcclusion")), BY.setPoseLod(!0 !== VD.m.getItem(Fr.Q)), (0, NA.q)("look") && (BY.setDebugLog(Jr.I.Look, !0), (0, cA.e)("wasm", (() => BY.takeDebugLog(Jr.I.Look))));
        (0, NA.q)("remesh") && (BY.setDebugLog(Jr.I.Remesh, !0), JY = () => BY.takeDebugLog(Jr.I.Remesh), CA = new ZA((0, KA.o)(), JY));
        var JY;
        const MY = function(YY, rY, DY, FY) {
          const AY = new tD,
            IY = YY => VD.m.getItem(YY);
          AY.sync(IY, rY), (0, er.X)();
          const RY = (0, gY.j)("customBindingsChanged", (() => {
            AY.sync(IY, rY)
          }));
          (0, eD.t)(rY);
          const OY = new Set,
            aY = (0, VY.w)((() => {
              var YY;
              OY.size > 0 && FF() && !0 === (null === (YY = (0, SY.g)()) || void 0 === YY ? void 0 : YY.localPlayerAlive()) && gY.g.vo("usedKeyboard")
            })),
            vY = qD.c.heldSizer((() => (0, Br.m)(YY))),
            uY = XD(YY, rY, {
              prevents: YY => AY.prevents(YY),
              keyPressed: YY => {
                AY.moves(YY) && (OY.add(YY), FF() && gY.g.vo("usedKeyboard"))
              },
              keyReleased: YY => {
                OY.delete(YY)
              },
              keysReleased: () => {
                OY.clear()
              },
              resized: () => {
                rF.j.measure(YY.getBoundingClientRect()), (0, pD.l)()
              },
              sizeCanvas: vY,
              watchRenderScale: rY => {
                const DY = (0, Br.n)(YY, rY),
                  FY = qD.c.onRelease(rY);
                return () => {
                  DY(), FY()
                }
              },
              touchStarting: () => {
                rF.j.measure(YY.getBoundingClientRect())
              },
              viewShown: DY,
              touchUiShown: () => qY.b.get("isTouchScreen"),
              ctrlCombosAreGames: FF,
              inspect: (YY, rY, DY) => {
                AY.checks(rY, DY) && FY(YY)
              },
              canLock: () => jD(YY)
            }),
            sY = (0, AD.d)(rY);
          return () => {
            RY(), aY(), (0, eD.t)(null), sY(), uY()
          }
        }(QY, ((YY, rY, DY, FY, AY) => {
          var IY;
          Ea(BY, (() => {
            BY.rings.input.writeRecord(YY, rY, DY, FY, AY)
          })), null === (IY = RR) || void 0 === IY || IY.onInput(YY), !TR && (0, gF.f)(YY, AY) && (0, gF.d)((() => {
            dI !== BY || ZO || BY.isStopped || !Oa() || ra(BY, !1, "budget", !1)
          }))
        }), (() => cO), (YY => {
          var rY;
          null === (rY = RR) || void 0 === rY || rY.onEvent(YY)
        }));
        if (BY.isStopped) return MY(), null;
        UI = MY;
        const wY = () => !BY.isStopped && !HO;
        if (BY.isStopped) return null;
        (0, Ar.V)((() => {
          "call" === (0, Ar.r)() && BY.crash(tr.t, (0, Ar.n)())
        }));
        const pY = (0, tr.O)(BY.rings.worker, (() => {
          ra(BY, !1, "budget")
        }));
        LI = function(YY, rY) {
          return ma().then((YY => {
            let {
              prefetchWorldgenWorker: rY
            } = YY;
            rY()
          }), (() => {})), new hA({
            module: (0, Ar.z)(),
            decodeSettings: YY => {
              const rY = (0, SY.v)();
              if (null === rY) throw new Error("no game code to decode the world-gen seed with");
              return rY.decodeMapSettings(YY)
            },
            loadWorker: Va,
            onMapWithoutWorldgen: () => {
              Sa((YY => {
                let {
                  stopWorldgenWorkerPrefetch: rY
                } = YY;
                rY()
              }))
            },
            onLoadFailed: YY => {
              (0, SD.reportWorldgenLoadFailure)(YY, XI)
            },
            onWorkerLost: YY => {
              (0, SD.reportWorkerLost)(tr.C, YY, XI)
            },
            onStartTimeout: YY => {
              (0, SD.reportWorkerStartTimeout)(tr.C, YY, XI)
            },
            onGaveUp: YY => {
              (0, SD.reportWorldgenGaveUp)(YY, XI)
            },
            onMemoryStats: YY => {
              var rY;
              null === (rY = rR) || void 0 === rY || rY.noteWorldgen(YY)
            },
            onMemoryGone: () => {
              var YY;
              null === (YY = rR) || void 0 === YY || YY.worldgenGone()
            },
            write: (DY, FY, AY, IY, RY) => {
              Ea(YY, (() => {
                YY.rings.worker.writeWorkerRecord(DY, FY, AY, 0, IY, RY) || YY.crash(tr.C, `a world-gen record of kind ${FY} did not fit the worker-in ring`)
              })), rY()
            }
          })
        }(BY, pY), YR = function(YY, rY) {
          return new CF({
            module: (0, Ar.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: YY
              }, rY] = await Promise.all([DY.e(40).then((() => DY(42405))), Promise.resolve().then((() => DY(99))).then((YY => {
                let {
                  isMobile: rY
                } = YY;
                return rY()
              }), (() => !1))]);
              return {
                create: YY,
                count: (0, mr.d)(navigator.hardwareConcurrency, rY)
              }
            },
            write: (DY, FY, AY, IY, RY, OY) => {
              (0, pD.j)(), Ea(YY, (() => {
                YY.rings.worker.writeWorkerRecord(DY, FY, AY, IY, RY, OY) || YY.crash(tr.o, `a meshing record of kind ${FY} did not fit the worker-in ring`)
              })), rY()
            },
            onWorkerLost: YY => {
              (0, SD.reportWorkerLost)(tr.o, YY, XI)
            },
            onLightFault: (YY, rY) => {
              (0, SD.reportLightFault)(YY, rY, XI)
            },
            onStartTimeout: YY => {
              (0, SD.reportWorkerStartTimeout)(tr.o, YY, XI)
            },
            onMemoryStats: (YY, rY) => {
              var DY;
              null === (DY = rR) || void 0 === DY || DY.noteMeshWorker(YY, rY)
            },
            onMemoryGone: YY => {
              var rY;
              null === (rY = rR) || void 0 === rY || rY.meshWorkerGone(YY)
            },
            fail: (rY, DY) => {
              const FY = () => {
                YY.crash(tr.o, void 0 === DY ? rY : new Error(rY, {
                  cause: DY
                }))
              };
              void 0 !== DY ? la({
                site: tr.o,
                error: DY
              }, FY) : FY()
            }
          })
        }(BY, pY);
        const kY = (0, GF.r)(Wr.clientSideServerUrls.staticUrl, {
            onTableFailed: YY => {
              la({
                site: SD.MODEL_FEED_SITE,
                error: YY
              }, (() => {}), wY)
            },
            packUrl: YY => {
              var rY, DY;
              return null !== (rY = null === (DY = hg()) || void 0 === DY ? void 0 : DY.modelUrl(YY)) && void 0 !== rY ? rY : null
            }
          }),
          GY = function(YY, rY, DY) {
            const FY = DY => {
              var FY, AY;
              return null !== (FY = null === (AY = rY()) || void 0 === AY ? void 0 : AY.drawnUrl(DY)) && void 0 !== FY ? FY : YY.url(DY)
            };
            return (0, pF.o)((0, dF.j)(FY), DY)
          }(kY, (() => gR), hg),
          xY = new dF.d(GY, (YY => {
            console.warn(`${OI} image ${YY.key.kind}:${YY.key.index}:${YY.key.word} failed`, YY.error)
          }));
        sR = xY, iR = new XF(BY, GY, ((YY, rY) => {
          void 0 === rY ? console.warn(`${OI} ${YY}`) : Mg(YY, rY)
        }));
        const nY = new qF.h(kY, function(YY, rY) {
          let FY = !1,
            AY = null,
            IY = null;
          const RY = {
              onUnavailable: (DY, FY) => {
                IY ??= la({
                  site: SD.MODEL_POOL_SITE,
                  error: DY,
                  urls: FY
                }, (() => {
                  (0, SD.reportModelPoolFailure)(DY, YY)
                }), rY)
              },
              onDecoderFailed: (DY, FY) => {
                const AY = () => {
                  (0, SD.reportDracoDecoderFailure)(DY, YY)
                };
                void 0 !== FY ? la({
                  site: SD.MODEL_POOL_SITE,
                  error: DY,
                  urls: FY
                }, AY, rY) : AY()
              },
              onWorkerLost: rY => {
                (0, SD.reportWorkerLost)(SD.MODEL_POOL_SITE, rY, YY)
              },
              onModuleRetry: (rY, DY) => {
                (0, SD.reportModelsModuleRetry)(rY, DY, YY)
              }
            },
            OY = DY.e(42).then((() => DY(42414))).then((YY => {
              let {
                pageModelPool: rY
              } = YY;
              if (FY) return null;
              const DY = rY(RY);
              return AY = DY.unlisten, aR = DY.pool, DY.pool
            }), (YY => (FY || RY.onUnavailable(YY, void 0), null)));
          return vR = () => {
            var YY;
            FY = !0, null === (YY = AY) || void 0 === YY || YY(), aR = null
          }, (YY, rY) => OY.then((DY => {
            var FY;
            return null !== (FY = null === DY || void 0 === DY ? void 0 : DY.build(YY, rY)) && void 0 !== FY ? FY : (0, xF.t)(YY, "the model workers did not load")
          })).then((YY => null !== IY && (0, xF.l)(YY) ? IY.then((() => YY)) : YY))
        }(NY, wY), (YY => {
          YY.startup ? (ua(), la({
            site: SD.MODEL_FEED_SITE,
            error: YY.error,
            urls: "" === YY.url ? void 0 : [YY.url]
          }, (() => {
            (0, SD.reportModelFailure)(YY, NY)
          }))) : (0, SD.reportModelFailure)(YY, NY)
        }), {
          onWritten: (YY, rY) => {
            xY.glbWritten(YY, rY)
          },
          onTaken: (YY, rY) => {
            xY.glbTaken(YY, rY)
          },
          onPackFileFailed: (YY, rY) => {
            console.warn(`${OI} the texture pack's model file ${YY} failed: the shipped one loads`, rY)
          }
        });
        gR = nY;
        const PY = new MF.h(BY);
        wI = PY, PY.swap((YY => {
          const rY = () => {
            (0, SD.reportTerrainTextureFailure)(YY, NY)
          };
          if (WO) return void rY();
          const DY = () => !WO,
            FY = null === YY.url ? void 0 : [YY.url];
          la({
            site: tr.z,
            error: YY.error,
            urls: FY
          }, rY, DY)
        })).then((YY => {
          null !== YY && (YY || BY.isStopped || console.warn(`${OI} the core refused the terrain textures: terrain draws untextured`), mR(BY))
        }));
        const UY = new hr(BY, ((YY, rY) => {
          console.warn(`${OI} ${YY}`, ...void 0 === rY ? [] : [rY])
        }));
        UY.feed(), null !== uY && function(YY, rY, FY, AY, IY, RY) {
          let OY = null,
            gY = null,
            aY = !1;
          const vY = {
            textures: null,
            stop: () => {
              var YY, rY;
              aY = !0, null === (YY = gY) || void 0 === YY || YY(), null === (rY = OY) || void 0 === rY || rY(), kF.d.setSettled(null), null !== qI && wO.clear(qI)
            }
          };
          MI = vY, gY = wg().follow((gY => {
            null !== gY && Promise.all([DY.e(188), DY.e(45)]).then((() => DY(42374))).then((DY => {
              let {
                PackTextures: uY
              } = DY;
              if (aY || YY.isStopped) return;
              const sY = new uY({
                feed: gY,
                terrain: rY,
                backend: FY,
                stopped: () => YY.isStopped,
                landed: () => {
                  mR(YY)
                },
                packSwapped: () => {
                  (0, pF.k)(AY), RY.feed((() => async function(YY) {
                    const rY = null === YY ? null : await YY.averageColours;
                    return null === rY ? dr() : jr(rY)
                  }(sY.assets))), dg(sY.iconOverrides()), IY.refresh().then((YY => {
                    null !== YY && console.info(`${OI} texture pack models: ${YY.resent} of ${YY.delivered} files written again, ${YY.refetched} refetched`)
                  }))
                },
                settled: (YY, rY, DY) => {
                  var FY;
                  (kF.d.setSettled({
                    state: YY,
                    files: rY
                  }), null === YY.gameSource && (0, yD.e)(YY.pack, DY), DY) || function(YY) {
                    const rY = qI;
                    null !== rY && wO.apply(rY, YY).then((rY => {
                      rY && YY && console.info(`${OI} the texture pack's animations are in (${Object.keys(YY).length} files)`)
                    }))
                  }(null === (FY = YY.pack) || void 0 === FY ? void 0 : FY.animations)
                },
                settling: () => {
                  kF.d.setSettled(null)
                },
                warn: Mg,
                maxTextureSize: () => Promise.resolve((0, Lr.U)(document.createElement("canvas")))
              });
              vY.textures = sY, OY = sY.start()
            }), (YY => {
              console.warn(`${OI} the texture pack's terrain didn't load: the built atlas stays`, YY)
            }))
          }))
        }(BY, PY, uY, xY, nY, UY);
        const LY = () => {
            BY.setTextureLayers("")
          },
          tY = YY => {
            (or ??= DY.e(50).then((() => DY(42421))).then((YY => {
              let {
                TEXTURE_NAMES: rY
              } = YY;
              return rY
            }), (YY => {
              throw or = null, YY
            })), or).then((YY => {
              BY.setTextureLayers(YY) || BY.isStopped || (console.warn(`${OI} the core refused the texture names: textured Boxes draw textureNotFound`), LY())
            }), (rY => {
              if (BY.isStopped) return;
              const [DY, ...FY] = YY;
              void 0 === DY ? la({
                site: SD.TEXTURE_NAMES_SITE,
                error: rY
              }, (() => {
                console.warn(`${OI} the texture names didn't load, so textured Boxes draw textureNotFound`, rY), LY()
              }), wY) : setTimeout((() => {
                tY(FY)
              }), DY)
            }))
          };
        if (tY(BI), null !== uY && !await async function(YY, rY, DY, FY, IY, RY) {
            var OY;
            const gY = (0, Lr.D)(DY);
            if (null === gY) return YY.crash(aI, new Error(`this ${FY} build has no openRenderer`)), !1;
            let aY;
            AO = gY;
            try {
              var vY, uY, sY, iY;
              const AY = null !== (vY = null === (uY = jI) || void 0 === uY ? void 0 : uY.pagePreviews()) && void 0 !== vY ? vY : null,
                OY = null !== (sY = null === (iY = jI) || void 0 === iY ? void 0 : iY.previewModule(DY)) && void 0 !== sY ? sY : null;
              if (null === AY || null === OY) {
                null === AY || void 0 === AY || AY.endSession(!1), aY = (0, Br.e)().sampleCount, await (0, Lr.f)(rY, gY, RY, fg, aY, await IY);
                const YY = (0, Lr.i)(DY);
                null === YY && console.warn(`${OI} this ${FY} build has no image registry: sky and model images won't show`), (0, JF.d)(YY)
              } else {
                (0, rA.d)() && await (0, XY.l)();
                const DY = (0, rA.H)();
                if (null !== DY) {
                  const rY = (0, Lr.R)(gY);
                  return YY.crash(SD.RENDER_RELOAD_SITE, new Error(`${DY}${void 0===rY?"":` (${rY.message})`}`)), !1
                }
                aY = await AY.bindSession(OY, rY, (async YY => (0, Lr.s)(gY, aI, RY, YY, fg, await IY)))
              }
            } catch (AY) {
              return YY.crash(aI, AY), !1
            }(function(YY, rY) {
              const DY = YY,
                {
                  requestCapture: FY,
                  takeCapture: AY
                } = DY;
              if ("function" !== typeof FY || "function" !== typeof AY) return;
              const IY = {
                request() {
                  FY.call(DY, rY)
                },
                take() {
                  var YY;
                  return null !== (YY = AY.call(DY)) && void 0 !== YY ? YY : null
                }
              };
              window[gA] = IY
            })(rY, aY), uO = aY, DO = !0;
            const yY = performance.now();
            return FO.boundAtMs = null !== (OY = (0, rA.K)()) && void 0 !== OY ? OY : yY, FO.indirectHangs = (0, rA.B)(), console.info(`${OI} ${FY} renderer bound at ${Math.round(yY)} ms`), !YY.isStopped
          }(BY, eY, TY, uY, iY, QY)) return null;
        if (null !== uY) {
          var Yr, rr, Dr;
          (0, gr.K)(uY);
          const YY = () => !BY.isStopped && Ra();
          DY.e(184).then((() => DY(8643))).then((rY => {
            let {
              devTools: DY
            } = rY;
            BY.isStopped || DY.setHost(function(YY) {
              return {
                tools: YA,
                async downloadScene(rY, DY) {
                  let {
                    width: FY,
                    height: AY,
                    colouring: IY
                  } = DY;
                  "screenshot" === rY && null === IY ? await (0, UF.e)(YY, FY, AY) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(YY, rY) {
              return {
                canvas: YY,
                maxTextureSize: LF,
                drawing: rY,
                resize: (YY, rY) => {
                  (0, eD.B)(Jr.ub.Resize, 0, YY, rY, (0, eD.l)(1))
                },
                restoreSize: () => {
                  const rY = (0, Br.m)(YY);
                  null !== rY && (0, eD.B)(Jr.ub.Resize, 0, rY.cssWidth, rY.cssHeight, (0, eD.l)(rY.renderScale))
                },
                onFrameDrawn: YY => (tF.add(YY), () => {
                  tF.delete(YY)
                })
              }
            }(QY, YY)))
          }), (YY => {
            console.warn(`${OI} the developer tools didn't load: no captures this session`, YY)
          }));
          const rY = "webgpu" === uY && null !== (Yr = null === aY || void 0 === aY || null === (rr = aY.adapter) || void 0 === rr ? void 0 : rr.vendor) && void 0 !== Yr ? Yr : null;
          sO = {
            backend: uY,
            canvas: QY,
            fallbackReason: null !== (Dr = null === aY || void 0 === aY ? void 0 : aY.reason) && void 0 !== Dr ? Dr : null,
            adapterVendor: rY
          }, Gg();
          try {
            (0, pD.r)(uY, QY, rY)
          } catch (AY) {
            (0, pD.u)(), console.error(`${OI} the quality steps didn't start`, AY)
          }
        }
        const {
          storagePullBreaks: vr,
          splitPassBreaks: yr
        } = await iY;
        yr && console.warn(`${OI} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Qr = vr ? bY.d : (0, bY.h)(aY, (0, Tr.i)());
        if ((0, NA.q)("webgpuloss")) {
          var Er, Vr;
          const YY = {
            backend: uY,
            reason: null !== (Er = null === aY || void 0 === aY ? void 0 : aY.reason) && void 0 !== Er ? Er : null,
            source: null !== (Vr = null === aY || void 0 === aY ? void 0 : aY.source) && void 0 !== Vr ? Vr : null,
            storagePullBreaks: vr,
            noWebGpu: Qr.messageKey
          };
          (0, BA.c)((rY => {
            rY.noteWasmPick(YY)
          }))
        }
        const Sr = "webgpu" === uY && !vr;
        if (QR = (0, bY.j)(Sr ? BY : null, Sr && null !== (RY = null === (OY = jI) || void 0 === OY ? void 0 : OY.pagePreviews().vy) && void 0 !== RY ? RY : null, Qr, Mg), ZO) return null;
        if (jY.reserveAtJoin((0, jF.k)(null !== HY && void 0 !== HY ? HY : sD.f)), BY.isStopped) return null;
        const lr = YY => {
          if (null !== iO) try {
            iO.animationFrame(YY)
          } catch (AY) {
            Pg(AY)
          }
          if (function(YY, rY) {
              return rY && !ZO && !TR && Oa() && Ra() && YY.framePaces(performance.now())
            }(BY, cO)) return BY.writePendingInput(), (0, VY.f)(YY, Da), xg(!1, YY), void requestAnimationFrame(lr);
          ra(BY, cO, "budget") && ((0, Nr.j)(BY.lastFrameKind) && Ra() && (0, VY.f)(YY, Da), xg(cO && eO, YY), NO.frame(BY.lastFrameKind, cO && Ra(), YY), ia(BY), jY.afterFrame(), requestAnimationFrame(lr))
        };
        requestAnimationFrame(lr);
        return function(YY) {
          if (YY.has("inputLog") && (0, YF.h)((YY => {
              let {
                action: rY,
                down: DY,
                press: FY
              } = YY;
              console.info(`${DF} input ${rY} ${DY?"down":"up"} press ${FY} at ${performance.now().toFixed(1)}`)
            })), YY.has("inputDump")) {
            const YY = [];
            AF = YY, Object.assign(window, {
              bloxdInputDump: () => YY.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), IR = function(YY, rY) {
          let DY = null;
          const FY = () => {
              null !== DY && (clearInterval(DY), DY = null)
            },
            AY = () => {
              document.hidden ? DY ??= setInterval((() => {
                ra(YY, !1, "budget") ? (ia(YY), rY.afterFrame()) : FY()
              }), NI) : FY()
            };
          return document.addEventListener("visibilitychange", AY), AY(), () => {
            FY(), document.removeEventListener("visibilitychange", AY)
          }
        }(BY, jY), BY
      }(rY).then((YY => {
        var rY;
        (FY(XI), GI(null !== YY), null !== YY && (iA = performance.now()), pI(YY), null === YY) ? null === (rY = jI) || void 0 === rY || rY.pagePreviews().endSession(null === (0, Ar.r)()): ER("booted")
      }), (YY => {
        FY(XI), GI(!1), pI(null), sa({
          site: vI,
          error: YY,
          header: null
        }, XI)
      }))
    }

    function MO() {
      const YY = qI;
      null !== YY && CO().then((rY => {
        let {
          pageBuiltInAnimationPack: DY
        } = rY;
        DY().provide(YY)
      }), (YY => {
        console.warn(`${OI} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, YY)
      }))
    }
    const wO = new class {
      constructor(YY) {
        this.deps = YY, this.latest = 0, this.ja = null
      }
      apply(YY, rY) {
        return this.load(YY, rY, 0)
      }
      async load(YY, rY, DY) {
        var FY;
        const AY = ++this.latest,
          IY = this.deps.compiler;
        if (void 0 === rY || null === rY || "object" !== typeof rY || 0 === Object.keys(rY).length || null === IY) return this.drop(YY), !1;
        if ((null === (FY = this.ja) || void 0 === FY ? void 0 : FY.module) === YY && (0, Gr.Zd)(this.ja.files, rY)) return !1;
        try {
          const [DY, FY] = await Promise.all([IY(), this.deps.builtIns()]);
          if (AY !== this.latest) return !1;
          const RY = await DY(rY, Ur, {
            builtIns: FY
          });
          if (AY !== this.latest) return !1;
          const OY = this.call(YY, RY);
          if (void 0 === OY) throw new Pr("the compiled animations didn't read against the built-in pack");
          return this.ja = {
              module: YY,
              files: rY
            },
            function(YY) {
              for (let rY = 0; rY + 2 < YY.length; rY += 3) {
                ("error" === YY[rY] ? console.error : console.warn)(`Animation for the texture pack: ${YY[rY+1]}: ${YY[rY+2]}`)
              }
            }(OY), !0
        } catch (OY) {
          var RY;
          if (AY !== this.latest) return !1;
          this.drop(YY), 0 === DY && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", OY);
          const FY = (null !== (RY = this.deps.retryAfterMs) && void 0 !== RY ? RY : nr)[DY];
          return void 0 === FY || OY instanceof Pr || (0, xr.k)(YY) || setTimeout((() => {
            AY === this.latest && this.load(YY, rY, DY + 1)
          }), FY), !1
        }
      }
      call(YY, rY) {
        try {
          return YY.gDY(rY)
        } catch (DY) {
          throw (0, xr.m)(YY, DY), DY
        }
      }
      clear(YY) {
        this.latest++, this.drop(YY)
      }
      drop(YY) {
        const rY = this.ja;
        if (this.ja = null, (null === rY || void 0 === rY ? void 0 : rY.module) === YY && !(0, xr.k)(YY)) try {
          this.call(YY, null)
        } catch {}
      }
    }({
      compiler: Xr.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: YY
        } = await CO();
        return YY().whenSet()
      },
      warn: Mg
    });
    async function bO(YY, rY) {
      let FY = !1;
      await XO({
        matchmake: async () => {
          const {
            guestJoinTarget: AY,
            guestJoinWithPack: IY
          } = await DY.e(342).then((() => DY(42356)));
          return FY ? AY(YY, rY, Xg()) : (FY = !0, IY(YY, rY, (rY => qg(YY, rY)), Xg))
        },
        onFailure: YY => {
          (0, SD.showJoinFailure)(YY, XI)
        },
        rejoin: Ig,
        invalidateTrafficCode: Rg
      })
    }
    async function XO(YY) {
      let {
        matchmake: rY,
        onFailure: DY,
        rejoin: AY,
        invalidateTrafficCode: IY,
        pageReady: RY,
        signal: OY
      } = YY;
      const gY = () => !0 === (null === OY || void 0 === OY ? void 0 : OY.aborted);
      let aY;
      const vY = kF.d.rejoinHold(),
        uY = (0, ED.H)("wasm", oa);
      let sY = !1,
        iY = performance.now();
      try {
        if (!await xI) return {
          kind: "stopped"
        };
        if (gY()) return {
          kind: "Hr"
        };
        fO().catch((() => {}));
        let YY = await rY();
        iY = performance.now();
        const DY = () => performance.now() - YY.matchedAt <= YY.freshMs,
          FY = pO(YY.target).catch((() => {}));
        DY() && !gY() && (aY = new KF(YY.target, {
          signal: OY
        }));
        const IY = performance.now();
        if (null === await kI) return {
          kind: "stopped"
        };
        var yY;
        if (function(YY) {
            var rY, DY;
            if (aA.e.markGameEngineConstructed(), yA) return;
            yA = !0;
            const FY = Math.max(YY, null !== (rY = uA) && void 0 !== rY ? rY : YY);
            (0, vA.f)("ready", Math.max(0, (null !== (DY = sA) && void 0 !== DY ? DY : FY) - FY) / 1e3)
          }(IY), gY() || (null !== sA && null !== iA ? ((0, zr.l)("wasm_loaded", sA), (0, zr.l)("wasm_core_ready", iA)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await FY, !DY() && !gY()) null === (yY = aY) || void 0 === yY || yY.rematched(), YY = await rY(), iY = performance.now();
        if (gY()) return {
          kind: "Hr"
        };
        const vY = await async function(YY) {
          var rY, DY, FY;
          let {
            signal: AY,
            rejoin: IY = null,
            early: RY,
            pageReady: OY
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== AY && void 0 !== AY && AY.aborted) throw new DOMException("the join was left", "AbortError");
          const gY = (aY = kR, vY = performance.now(), null !== aY && vY - aY < QF);
          var aY, vY;
          kR = null;
          const uY = new AbortController;
          nO({
            controller: uY,
            game: null !== (rY = null === (DY = YY.session) || void 0 === DY ? void 0 : DY.gameNameWithVariation) && void 0 !== rY ? rY : null
          }), GR = null, null === (FY = PR) || void 0 === FY || FY.abort(), PR = null, LR = !1, tR = null, YO.clear();
          const sY = () => {
            (0, Er.l)(uY, (0, Er.h)(AY))
          };
          null === AY || void 0 === AY || AY.addEventListener("abort", sY, {
            once: !0
          });
          try {
            var iY, yY, QY;
            const rY = await kI;
            if (null === rY || rY.isStopped || ZO) throw new Error("no core is running to join a game with");
            if (YY.session && null !== QR) {
              const rY = await kO(QR.join(YY.session.gameNameWithVariation), uY.signal);
              if ((0, NA.q)("webgpuloss")) {
                const DY = YY.session.gameNameWithVariation,
                  FY = QR.couldntRunInJoinedGame();
                (0, BA.c)((YY => YY.noteWasmJoin(DY, rY, FY)))
              }
              if (null !== rY) throw new bY.g(rY)
            }
            const [, , , {
              joinRoom: DY
            }] = await kO(Promise.all([(0, SY.k)(rY), pO(YY), null === OY || void 0 === OY ? void 0 : OY(), fO()]), uY.signal), FY = YY.session, AY = FY ? {
              ...ag,
              attachSocket: rY => {
                const DY = og(rY, YY.endpoint);
                var AY;
                null !== DY && (JR = {
                  conn: DY,
                  info: FY
                }, null === (AY = MR) || void 0 === AY || AY(FY.playerDbId));
                return DY
              }
            } : ag, aY = await DY(AY, YY, {
              signal: uY.signal,
              early: RY
            }).catch((YY => {
              throw function(YY) {
                if (!(YY instanceof ZY.c)) return YY;
                if ("roomError" === YY.stage && null !== tR) return qO(new ZY.c(YY.message, YY.stage, YY.code, tR), YY);
                const rY = "closed" === YY.stage && null !== xR ? YO.get(xR.conn) : void 0;
                return void 0 === rY ? YY : qO(new ZY.c(YY.message, YY.stage, rY.code), YY)
              }(YY)
            }));
            if (hR !== uY) throw aY.leave(), new DOMException("the join was left", "AbortError");
            UO(aY), null === (iY = YR) || void 0 === iY || iY.newGame();
            const vY = function(YY) {
              var rY, DY;
              const {
                session: FY
              } = YY, AY = void 0 === FY ? YY.joinOptions.lobbyName : FY.lobbyName;
              return {
                endpoint: YY.endpoint,
                game: null !== (rY = null === FY || void 0 === FY ? void 0 : FY.gameNameWithVariation) && void 0 !== rY ? rY : YY.roomName,
                lobby: String(null !== AY && void 0 !== AY ? AY : null),
                postCookies: null !== (DY = YY.postCookies) && void 0 !== DY ? DY : null
              }
            }(YY);
            jR.set(aY, vY), eF(vY);
            const sY = performance.now(),
              oY = {
                conn: aY.conn,
                rejoin: IY,
                game: null !== (yY = null === (QY = YY.session) || void 0 === QY ? void 0 : QY.gameNameWithVariation) && void 0 !== yY ? yY : "",
                joinedAt: sY,
                rejoinedAt: gY ? sY : null,
                overflow: null
              };
            wR = oY,
              function(YY, rY) {
                eg();
                const DY = {
                  endpoint: rY,
                  roomId: YY.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new aD({
                    reconnect: (YY, rY, FY) => async function(YY, rY, DY, FY) {
                      const {
                        roomId: AY,
                        roomToken: IY
                      } = Bg(YY, rY), RY = dI;
                      if (null === RY || RY.isStopped || ZO) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: OY
                      } = await kO(fO(), DY), gY = {
                        ...ag,
                        attachSocket: rY => bR !== YY || 0 === YY.heldConn ? (rY.close(), null) : og(rY, YY.endpoint, !0)
                      };
                      return OY(gY, YY.endpoint, AY, IY, {
                        signal: DY,
                        onAttached: FY
                      })
                    }(DY, YY, rY, FY),
                    releaseSeat: YY => {
                      !async function(YY, rY) {
                        const {
                          roomId: DY,
                          roomToken: FY
                        } = Bg(YY, rY);
                        try {
                          const {
                            leaveHeldSeat: rY
                          } = await fO();
                          await rY(YY.endpoint, DY, FY)
                        } catch (AY) {
                          console.warn(`${OI} the held seat of a game left while it reconnected couldn't be released`, AY)
                        }
                      }(DY, YY)
                    },
                    isLive: () => bR === DY && null !== wR && !ZO,
                    wV: YY => {
                      pR = YY, Tg()
                    },
                    onReconnected: YY => {
                      ! function(YY) {
                        const rY = fR;
                        if (null !== rY && rY !== YY) {
                          const DY = jR.get(rY);
                          void 0 !== DY && jR.set(YY, DY), TO === rY && (TO = YY), rY.detach()
                        }
                        UO(YY)
                      }(YY)
                    },
                    onGaveUp: (YY, rY) => {
                      ! function(YY, rY, DY) {
                        var FY, AY;
                        console.warn(`${OI} gave up reconnecting (${DY.reason}, ${DY.attempts} attempts)`, DY.lastError), (0, SD.reportReconnectGaveUp)(DY, XI);
                        const IY = null !== (FY = null === (AY = wR) || void 0 === AY ? void 0 : AY.rejoin) && void 0 !== FY ? FY : null;
                        Ng(YY, "gaveUp"), tO();
                        const RY = {
                          code: YY.dropCode,
                          name: null,
                          reason: SI,
                          canReconnect: !rY,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        gg(RY, rY ? null : IY, !1, {
                          reasonKey: lI,
                          canPlayAgain: rY
                        })
                      }(DY, YY, rY)
                    }
                  })
                };
                bR = DY, null !== XR && XR.conn === YY.conn && DY.resume.onInitialInfo(XR)
              }(aY, YY.endpoint), performance.mark(iI), (0, zr.l)("wasm_joined", sY), setTimeout((() => {
                fR === aY && (0, zr.e)()
              }), 0), MO(), console.info(`${OI} joined ${YY.roomName} as ${aY.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const WY = GR;
            GR = null, null !== WY && Dg(oY, WY.mask, WY.frames);
            const EY = YO.get(aY.conn);
            return YO.clear(), void 0 !== EY && (UO(null), Og(aY.conn, EY.code, EY.reason)), aY
          } finally {
            var oY;
            null === AY || void 0 === AY || AY.removeEventListener("abort", sY), hR === uY && PO(fR, null), (null === (oY = xR) || void 0 === oY ? void 0 : oY.join) === uY && (xR = null)
          }
        }(YY.target, {
          signal: OY,
          rejoin: AY(YY.target),
          early: aY,
          pageReady: RY
        });
        return sY = !0, {
          kind: "joined",
          game: vY
        }
      } catch (oY) {
        if (oY instanceof DOMException && "AbortError" === oY.name || gY()) return {
          kind: "Hr"
        };
        if (ZO) return {
          kind: "stopped"
        };
        if (LR && (LR = !1, await IY().catch((YY => {
            console.warn(`${OI} the cached traffic code could not be dropped`, YY)
          }))), null === await kI) return {
          kind: "stopped"
        };
        if (oY instanceof bY.g) return DY(oY, performance.now() - iY), {
          kind: "failed",
          error: oY,
          reloading: !1
        };
        if (oY instanceof ZY.c && oY.code === FY.c.wasmClientNotAllowed.code && BO) return Cg("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: oY,
          reloading: !0
        };
        const YY = oY instanceof ZY.c && oY.code === FY.c.outdatedVersion.code,
          rY = () => null === fR,
          AY = await la({
            site: SD.JOIN_SITE,
            error: oY,
            outdated: YY
          }, (() => {
            DY(oY, performance.now() - iY)
          }), rY);
        return {
          kind: "failed",
          error: oY,
          reloading: AY
        }
      } finally {
        var QY;
        sY || uY.end(), kF.d.releaseHold(vY);
        const YY = null === (QY = aY) || void 0 === QY ? void 0 : QY.release();
        YY && (0, SD.reportUnusedSeat)(YY, XI)
      }
    }

    function qO(YY, rY) {
      return YY.stack = rY.stack, YY
    }

    function pO(YY) {
      return YY.session ? (0, SY.r)(bI, YY.session.gameNameWithVariation) : Promise.resolve()
    }

    function kO(YY, rY) {
      return (0, Er.q)(rY), new Promise(((DY, FY) => {
        const AY = () => {
          FY((0, Er.h)(rY))
        };
        rY.addEventListener("abort", AY, {
          once: !0
        }), YY.then((YY => {
          rY.removeEventListener("abort", AY), DY(YY)
        }), (YY => {
          rY.removeEventListener("abort", AY), FY(YY)
        }))
      }))
    }

    function GO() {
      var YY, rY;
      return null !== (YY = null === (rY = QR) || void 0 === rY ? void 0 : rY.runsInJoinedGame()) && void 0 !== YY && YY
    }

    function xO() {
      nO(null)
    }

    function nO(YY) {
      var rY, DY, FY;
      (function() {
        const YY = bR;
        null !== YY && Ng(YY, "left")
      }(), null === PI || PI.left) || (PI.left = !0, null === (FY = (0, SY.g)()) || void 0 === FY || FY.socketLeft(), (0, sY.n)({
        websocketUrl: null
      }));
      hR && (0, Er.l)(hR, new DOMException("the join was left", "AbortError")), tO(null !== YY), null === (rY = QR) || void 0 === rY || rY.leave();
      const AY = fR;
      null !== YY && kF.d.setGame(YY.game), PO(null, null !== (DY = null === YY || void 0 === YY ? void 0 : YY.controller) && void 0 !== DY ? DY : null), null === AY || void 0 === AY || AY.leave(), LO(0), (0, yr.f)()
    }

    function PO(YY, rY) {
      fR = YY, hR = rY, null === fR && null === hR && kF.d.setGame(void 0)
    }

    function UO(YY) {
      PO(YY, hR)
    }

    function LO(YY) {
      const rY = dI;
      return null !== KI && !ZO && null !== rY && !rY.isStopped && (!!KI(ZY.f, 0, (0, ZY.D)(YY)) && (BR = !0, 0 === YY || TR || ra(rY, !1, "all"), !0))
    }

    function tO() {
      var YY, rY;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, ED.e)();
      const DY = null !== (YY = null === (rY = wR) || void 0 === rY ? void 0 : rY.overflow) && void 0 !== YY ? YY : null;
      wR = null, null !== DY && (0, SD.reportEventOverflow)(DY, XI)
    }

    function Yg() {
      null !== fR || null !== hR ? xO() : Wg()
    }

    function rg(YY, rY) {
      console.warn(`${OI} the event buffer refused records in ${rY} frames (categories ${YY})`), ZO || (null !== wR ? Dg(wR, YY, rY) : null !== hR && function(YY, rY, DY) {
        var FY;
        const AY = function(YY, rY) {
          return null === YY ? "drop" : YY.activated ? "keep" : 0 !== (rY & Mr.p.NetSession) ? "fail" : "drop"
        }((null === (FY = xR) || void 0 === FY ? void 0 : FY.join) === YY ? xR : null, rY);
        "keep" === AY ? GR = {
          mask: rY,
          frames: DY
        } : "fail" === AY && (0, Er.l)(YY, new Error("the join's net session was lost to an event overflow"))
      }(hR, YY, rY))
    }

    function Dg(YY, rY, DY) {
      const FY = YY.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      FY.frames += DY, FY.acks++, FY.mask |= rY;
      const AY = function(YY, rY, DY) {
        if (0 === (YY & Mr.p.NetSession)) return "none";
        const FY = null !== rY.rejoinedAt && DY - rY.rejoinedAt < oF;
        return null === rY.rejoin || FY ? "fail" : "rejoin"
      }(rY, YY, performance.now());
      "none" !== AY && queueMicrotask((() => {
        if (wR !== YY) return;
        const rY = "rejoin" === AY && performance.now() - nR >= zY.g;
        FY.outcome = rY ? "rejoined" : "failed", gg(function(YY, rY) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: YY,
            automaticallyReconnect: rY,
            requiresRefresh: !1
          }
        }(null !== YY.rejoin, rY), YY.rejoin, rY), xO(), rY && (kR = performance.now())
      }))
    }

    function Fg(YY) {
      cO = YY, KO && Ag(KO, YY)
    }

    function Ag(YY, rY) {
      YY.style.visibility = rY ? "visible" : "hidden"
    }

    function Ig(YY) {
      var rY;
      const DY = YY.roomName,
        FY = null !== (rY = YY.joinOptions.lobbyName) && void 0 !== rY ? rY : null;
      return () => {
        bO(DY, FY)
      }
    }

    function Rg() {
      return DY.e(342).then((() => DY(42356))).then((YY => {
        let {
          invalidateGuestTrafficCode: rY
        } = YY;
        return rY()
      })).catch((YY => {
        console.warn(`${OI} the cached traffic code could not be dropped`, YY)
      }))
    }

    function Og(YY, rY, DY) {
      var AY, IY;
      let RY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (ZO) return;
      if ((null === (AY = wR) || void 0 === AY ? void 0 : AY.conn) !== YY) return void(null !== hR && YO.set(YY, {
        code: rY,
        reason: DY
      }));
      const {
        rejoin: OY,
        game: gY,
        joinedAt: aY
      } = wR;
      tO(), eg();
      const vY = (0, zY.j)(rY, (0, EF.f)(YY));
      if (console.info(`${OI} the game's connection closed with code ${rY} (${null!==(IY=vY.name)&&void 0!==IY?IY:"unrecognised"})`), rY === FY.c.gameOrPluginKick.code || RY || (0, SD.reportDisconnect)(vY, XI, {
          closeReason: DY,
          sinceJoinedMs: performance.now() - aY,
          game: gY
        }), vY.requiresRefresh) {
        const YY = "outdatedVersion" === vY.name,
          DY = new Error(`the game's connection closed with code ${rY}`),
          FY = () => null === wR && null === hR;
        return void la({
          site: SD.JOIN_SITE,
          error: DY,
          outdated: YY
        }, (() => {
          FY() && gg(vY, null, !1)
        }), FY)
      }
      const uY = vY.canReconnect ? OY : null,
        sY = null !== uY && vY.automaticallyReconnect && performance.now() - nR >= zY.g;
      gg(vY, uY, sY)
    }

    function gg(YY, rY, DY) {
      var FY;
      let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (HO) return;
      kF.d.unwantedLeave(DY && null !== rY && 0 === UR.size), null === (FY = PR) || void 0 === FY || FY.abort();
      const IY = new AbortController;
      PR = IY;
      const RY = null === rY ? null : () => {
        IY.signal.aborted || (IY.abort(), rY())
      };
      if (DY && null !== RY) {
        nR = performance.now();
        const YY = setTimeout(RY, zY.d);
        IY.signal.addEventListener("abort", (() => {
          clearTimeout(YY)
        }))
      }
      const OY = {
        code: YY.code,
        name: YY.name,
        reason: YY.reason,
        reasonKey: AY.reasonKey,
        reconnect: RY,
        reconnecting: DY,
        requiresRefresh: YY.requiresRefresh,
        canPlayAgain: AY.canPlayAgain
      };
      if (UR.size > 0)
        for (const aY of [...UR]) try {
          aY(OY)
        } catch (gY) {
          console.error(`${OI} an unwanted-leave listener threw`, gY)
        } else iF((0, vF.j)(YY, null !== RY, DY), IY.signal).then((rY => {
          rY && (null !== RY ? RY() : YY.requiresRefresh && (0, XY.j)())
        }))
    }
    const ag = {
      attachSocket: YY => og(YY),
      onConnection: YY => (rO.add(YY), () => {
        rO.delete(YY)
      }),
      sendRaw: (YY, rY) => {
        const DY = PI;
        return null !== DY && DY.conn === YY && va(DY, rY)
      },
      leaveRoom: LO,
      closeSocket: YY => {
        var rY;
        (null === (rY = PI) || void 0 === rY ? void 0 : rY.conn) === YY && Wg()
      },
      flushNet: Eg
    };

    function vg(YY) {
      var rY;
      let {
        aux: DY,
        payload: FY
      } = YY;
      null === (rY = dI) || void 0 === rY || rY.queueOptions(DY, FY)
    }

    function ug(YY, rY) {
      vg(function(YY, rY) {
        return AA = YY ? {
          preventMovement: rY
        } : null, YY ? IA(rY) : {
          aux: Jr.Xb.AdEnd,
          payload: FA
        }
      }(YY, rY))
    }

    function sg(YY) {
      var rY;
      zR = YY, null === (rY = dI) || void 0 === rY || rY.setUiPrefs(YY)
    }

    function ig(YY, rY) {
      bI.setMaster(YY, rY)
    }

    function yg(YY) {
      var rY;
      ZR = YY, null === (rY = dI) || void 0 === rY || rY.setEnvPrefs(YY)
    }

    function Qg(YY) {
      var rY;
      CR = YY, null === (rY = dI) || void 0 === rY || rY.setLookPrefs(YY)
    }

    function og(YY) {
      var rY;
      let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(YY.url).origin,
        FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (YY.readyState === WebSocket.CLOSING || YY.readyState === WebSocket.CLOSED) return console.warn(`${OI} a closing or closed socket can't be attached`), null;
      const AY = dI;
      if (!AY || AY.isStopped) return console.warn(`${OI} no core is running to attach a socket to`), YY.close(), null;
      if (null === (0, SY.g)()) return console.warn(`${OI} the game has not started to attach a socket to`), YY.close(), null;
      if (VR > Jr.u) return console.warn(`${OI} this core has attached all the sockets it can; reload to play on`), YY.close(), null;
      if (BR && !TR && (ra(AY, !1, "all"), AY.isStopped || ZO)) return YY.close(), null;
      Wg();
      const IY = VR++;
      if (!Hg(AY, "open", IY, FY ? Jr.Wb.Resume : 0)) return YY.close(), null;
      FY || ir.b.reset(), xR = null === hR ? null : {
        join: hR,
        conn: IY,
        activated: !1
      }, YY.binaryType = "arraybuffer";
      const RY = new vD.b((() => {
          ! function(YY, rY) {
            if (PI !== rY || YY.isStopped || null === Sg(rY, mI)) return;
            rY.detach(), PI = null, Vg(YY, rY, mI, "", !0), rY.ws.close()
          }(AY, OY)
        })),
        OY = {
          ws: YY,
          conn: IY,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: FY,
          token: null,
          detach: () => {
            RY.dispose(), YY.removeEventListener("message", gY), YY.removeEventListener("open", aY), YY.removeEventListener("close", vY)
          }
        },
        gY = YY => {
          if (YY.data instanceof ArrayBuffer) {
            var rY;
            const DY = new Uint8Array(YY.data);
            RY.heard(), OY.token = null !== (rY = (0, uD.b)(DY)) && void 0 !== rY ? rY : OY.token,
              function(YY, rY, DY) {
                Ea(YY, (() => {
                  YY.rings.net.writeFrame(rY, DY) || YY.crash(tr.s, `a socket frame of ${DY.byteLength} bytes did not fit the net-in ring`)
                }));
                const FY = YY.rings.net.cursor >= WI;
                (FY || YY.netWrittenSinceFrame >= oI || document.hidden && performance.now() - SR >= NI) && ra(YY, !1, "budget")
              }(AY, IY, DY)
          }
        },
        aY = () => {
          FY || (0, zr.l)("wasm_socket_open", performance.now());
          for (const rY of OY.pending.splice(0)) YY.send(rY);
          OY.pendingBytes = 0
        },
        vY = YY => {
          if (PI === OY && AY.rings.net.cursor > 0 && ra(AY, !1, "all"), PI === OY) {
            if (OY.detach(), PI = null, Vg(AY, OY, YY.code, YY.reason) || mg(AY, OY)) return;
            Hg(AY, "close", IY), lg(IY, OY.left), Og(IY, YY.code, YY.reason)
          }
        };
      return YY.addEventListener("message", gY), YY.addEventListener("open", aY), YY.addEventListener("close", vY), PI = OY, null === (rY = (0, SY.g)()) || void 0 === rY || rY.socketAttached(IY), (0, sY.n)({
        websocketUrl: DY
      }), IY
    }

    function Wg() {
      const YY = PI;
      if (!YY) return;
      const rY = dI,
        DY = YY.resume;
      DY && (Eg(), PI !== YY) || (PI = null, YY.detach(), YY.ws.close(), null !== rY && (mg(rY, YY) || DY && Vg(rY, YY, VI)) || (null !== rY && Hg(rY, "close", YY.conn), lg(YY.conn, YY.left)))
    }

    function Eg() {
      const YY = dI;
      null !== YY && !YY.isStopped && !ZO && !TR && YY.rings.net.cursor > 0 && ra(YY, !1, "all")
    }

    function mg(YY, rY) {
      var DY;
      if (!rY.resume) return !1;
      const FY = bR;
      return null !== FY && null !== rY.token && "" !== rY.token && (FY.pendingHold = {
        conn: rY.conn,
        token: `${FY.roomId}:${rY.token}`
      }), Hg(YY, "close", rY.conn), null === (DY = (0, SY.g)()) || void 0 === DY || DY.socketDetached(rY.conn), !0
    }

    function Vg(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const IY = Sg(rY, DY);
      if (null === IY) return !1;
      const {
        ja: RY,
        token: OY,
        game: gY,
        joinedAt: aY
      } = IY;
      if (!Hg(YY, "close", rY.conn, Jr.A.Held)) return !0;
      console.warn(`${OI} the game's connection ${AY?"went silent":`dropped with code ${DY}`}, holding it`);
      const vY = {
        closeReason: FY,
        sinceJoinedMs: performance.now() - aY,
        game: gY
      };
      return (0, SD.reportDisconnect)((0, zY.j)(DY), XI, vY, AY ? "silent" : void 0), RY.heldConn = rY.conn, RY.dropCode = DY, RY.pendingHold = {
        conn: rY.conn,
        token: `${RY.roomId}:${OY}`
      }, TR || ra(YY, !1, "all"), !0
    }

    function Sg(YY, rY) {
      const DY = bR,
        AY = wR,
        IY = YY.token;
      return null === DY || null === AY || ZO || YY.left || AY.conn !== YY.conn || null === IY || "" === IY ? null : (0, FY.e)(rY) && DY.resume.canHoldSeat() ? {
        ja: DY,
        token: IY,
        game: AY.game,
        joinedAt: AY.joinedAt
      } : null
    }

    function lg(YY, rY) {
      var DY;
      null === (DY = (0, SY.g)()) || void 0 === DY || DY.closeGame(YY), (0, DA.d)().close(YY), rY || (0, sY.n)({
        websocketUrl: null
      })
    }

    function Tg() {
      const YY = pR;
      if (null === YY) return;
      const rY = (0, SY.g)();
      ZO || null === rY || rY.wV(YY) ? pR = null : performance.now() - cR.pause >= eI && (cR.pause = performance.now(), console.warn(`${OI} the cmd ring had no room for SetPaused(${YY}): written before the next frame`))
    }

    function eg() {
      const YY = bR;
      bR = null, null === YY || void 0 === YY || YY.resume.dispose()
    }

    function Ng(YY, rY) {
      var DY, FY;
      const {
        heldConn: AY
      } = YY, IY = YY.resume.resumingConn;
      YY.heldConn = 0, YY.pendingHold = null, bR === YY && (bR = null), "left" === rY ? YY.resume.leave() : YY.resume.dispose(), 0 === qR || (null === (DY = PI) || void 0 === DY ? void 0 : DY.conn) !== qR || "left" === rY && (null === (FY = fR) || void 0 === FY ? void 0 : FY.conn) === qR || Kg(qR), "gaveUp" === rY && 0 !== IY && Kg(IY), 0 !== AY && "refused" !== rY && (console.info(`${OI} the game held through its drop ${"left"===rY?"was left":"is given up"}`), null === dI || dI.isStopped || Hg(dI, "close", AY), lg(AY, !1))
    }

    function Bg(YY, rY) {
      const DY = rY.indexOf(":");
      return {
        roomId: DY < 0 ? YY.roomId : rY.slice(0, DY),
        roomToken: rY.slice(DY + 1)
      }
    }

    function cg(YY) {
      var rY;
      XR = YY, YY.conn === qR && (qR = 0);
      const DY = bR;
      null !== DY && (null === (rY = wR) || void 0 === rY ? void 0 : rY.conn) === YY.conn && DY.resume.onInitialInfo(YY)
    }

    function Kg(YY) {
      var rY;
      const DY = PI;
      (null === DY || void 0 === DY ? void 0 : DY.conn) === YY && (DY.left = !0, null === (rY = (0, SY.g)()) || void 0 === rY || rY.socketLeft(), (0, sY.n)({
        websocketUrl: null
      }), LO(YY) ? setTimeout((() => {
        PI === DY && Wg()
      }), ZY.d) : Wg())
    }

    function Hg(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        AY = !1;
      return Ea(YY, (() => {
        const {
          net: IY
        } = YY.rings;
        AY = "open" === rY ? IY.writeOpen(DY, FY) : IY.writeClose(DY, FY), AY || YY.crash(tr.s, `a socket ${rY} did not fit the net-in ring`)
      })), AY
    }

    function zg(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (Zg()) {
        const FY = "browser" === YY && (0, rA.R)() ? "blockedAfterLoss" : "unsupported";
        return (0, SD.reportUnsupportedFallback)(YY, FY, rY, DY), void Cg(`the wasm client can't run here (${rY}; ${FY})`, FY)
      }(0, SD.showUnsupported)(YY, "unsupported", rY, DY)
    }

    function Zg() {
      return BO && "wasm" !== (0, vr.f)(window.location.search)
    }

    function Cg(YY, rY) {
      console.warn(`${OI} ${YY}: reloading on the JS client`), null !== rY && (0, vr.n)(rY), (0, vr.l)(null === rY ? "reloadOntoJs" : "decline");
      const DY = () => {
        (0, XY.h)(vr.t)
      };
      (0, SD.flushCrashReports)(XY.b).then(DY, DY)
    }

    function fg(YY, rY, DY, FY) {
      return IO(YY, rY, DY, FY)
    }

    function jg() {
      null === gO || null === dI || dI.isStopped || ZO || null !== uR || null === KI || (uR = gO(KI, Mg, wg().follow))
    }

    function hg() {
      var YY, rY, DY;
      return null !== (YY = null === (rY = MI) || void 0 === rY || null === (DY = rY.textures) || void 0 === DY ? void 0 : DY.files()) && void 0 !== YY ? YY : null
    }

    function dg(YY) {
      DY.e(259).then((() => DY(39842))).then((rY => {
        let {
          setIconFileOverrides: DY
        } = rY;
        DY(YY)
      }), (YY => {
        console.warn(`${OI} the item icons couldn't take the texture pack's files`, YY)
      }))
    }

    function Jg(YY) {
      wg().follow((rY => {
        null !== rY && Promise.all([Promise.all([DY.e(188), DY.e(45)]).then((() => DY(42389))), (0, rA.L)()]).then((YY => {
          let [{
            followPagePackFiles: DY
          }, FY] = YY;
          const AY = null === FY || (0, Lr.l)(FY) ? "webgl" : FY.backend;
          DY(rY, pF.i, AY, (YY => {
            pF.i.setPageFiles(YY)
          }), Mg)
        }), (rY => {
          console.warn(`${OI} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, rY), YY()
        }))
      }))
    }

    function Mg(YY, rY) {
      console.warn(`${OI} ${YY}`, rY)
    }

    function wg() {
      return JI ??= new WA({
        load: YY => Promise.all([DY.e(188), DY.e(51)]).then((() => DY(42394))).then((rY => {
          let {
            startPageTexturePackFeed: DY
          } = rY;
          return DY(Mg, YY)
        })),
        store: VD.i,
        gy: YY => {
          kI.then((() => {
            (0, SD.reportTexturePackFeedLoadFailure)(YY, XI)
          }))
        }
      }), JI
    }
    const bg = YY => wg().follow(YY);

    function Xg() {
      return wg().loaded()
    }
    const qg = function(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          AY = 0;
        return async function(IY, RY) {
          let OY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const gY = ++AY,
            aY = FY() + rY,
            vY = await
          function(YY, rY) {
            let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((FY => {
              const AY = setTimeout((() => {
                FY(null), YY.then((YY => {
                  null !== YY && (YY.joinedWithout(), DY(YY))
                }))
              }), rY);
              YY.then((YY => {
                clearTimeout(AY), FY(YY)
              }))
            }))
          }(YY(IY), rY, (YY => {
            gY === AY && OY() && RY(YY, FY() + rY).catch((YY => {
              DY("the texture pack step after the join failed", YY)
            }))
          }));
          return null === vY ? null : RY(vY, aY)
        }
      }((YY => (0, rr.l)(YY) ? wg().request() : wg().forJoin()), oA.c, Mg),
      pg = function(YY, rY) {
        let DY = !1;
        return {
          setGamePackConfirm: YY => {
            DY = null !== YY, rY(YY)
          },
          packStep: (rY, FY, AY) => YY(rY, FY, (() => DY && AY()))
        }
      }(qg, (YY => {
        wg().setGamePackConfirm(YY)
      }));

    function kg(YY) {
      pg.setGamePackConfirm(YY)
    }

    function Gg() {
      if (ZO || null !== iO || null === aO || null === sO) return;
      const {
        backend: YY,
        canvas: rY,
        fallbackReason: DY,
        adapterVendor: FY
      } = sO, AY = aO;
      aO = null;
      try {
        iO = AY({
          backend: YY,
          canvas: rY,
          fallbackReason: DY,
          adapterVendor: FY,
          joinedGame: () => ZO ? null : fR,
          inGame: ng,
          shaderPackRuns: GO,
          msaa: () => uO > 1,
          writeCmd: (YY, rY, DY) => null !== KI && KI(YY, rY, DY),
          takeFailedMeshJobs: () => {
            var YY, rY;
            return null !== (YY = null === (rY = YR) || void 0 === rY ? void 0 : rY.takeFailedMeshJobs()) && void 0 !== YY ? YY : 0
          }
        })
      } catch (IY) {
        console.error(`${OI} the frame telemetry didn't start`, IY)
      }
    }

    function xg(YY, rY) {
      try {
        var DY, FY, AY;
        const IY = DO && null !== (DY = null === (FY = dI) || void 0 === FY || null === (AY = FY.lastHeader) || void 0 === AY ? void 0 : AY.renderPending) && void 0 !== DY ? DY : 0;
        (0, pD.f)(rY, YY, ng() && !(null !== AA), IY)
      } catch (IY) {
        (0, pD.u)(), console.error(`${OI} the quality steps stopped`, IY)
      }
    }

    function ng() {
      return null !== fR && TO === fR && !ZO
    }

    function Pg(YY) {
      const rY = iO;
      iO = null;
      try {
        null === rY || void 0 === rY || rY.stop()
      } catch {}
      console.error(`${OI} the frame telemetry threw: it stops`, YY)
    }

    function Ug(YY) {
      var rY, DY, FY, AY;
      if ((0, DA.d)().fire(YY), "message" === YY.type) {
        if (eR++, YY.vv === Jr.Ec.ERROR && null !== hR) {
          var IY;
          const {
            text: rY,
            dropsCache: DY
          } = (0, zY.m)((new TextDecoder).decode(YY.payload));
          LR ||= DY, (null === (IY = xR) || void 0 === IY ? void 0 : IY.conn) === YY.conn && (tR = rY)
        } else if (YY.vv === Mr._b.ResumeComplete) {
          var RY;
          null === (RY = bR) || void 0 === RY || RY.resume.onResumeComplete(YY.conn)
        }
        return
      }
      YY.phase === Jr.C.Left ? NR = YY.conn : YY.phase === Jr.C.Activated && (null === (rY = xR) || void 0 === rY ? void 0 : rY.conn) === YY.conn ? xR.activated = !0 : YY.phase === Jr.C.Resumed ? function(YY) {
        var rY, DY;
        qR = YY;
        const FY = bR;
        if (null === FY || 0 === FY.heldConn || (null === (rY = PI) || void 0 === rY ? void 0 : rY.conn) !== YY || !PI.resume || null === wR) return;
        console.info(`${OI} the game resumed on conn ${YY}, waiting for its InitialInfo`);
        const AY = FY.heldConn;
        FY.heldConn = 0, PI.resume = !1, wR.conn = YY, (null === (DY = JR) || void 0 === DY ? void 0 : DY.conn) === AY && (JR = {
          conn: YY,
          info: JR.info
        }), ir.b.apply({
          shopInfo: null,
          _shopVersion: Dr.e
        })
      }(YY.conn) : YY.phase === Jr.C.Held ? function(YY) {
        var rY;
        const DY = bR,
          FY = null !== (rY = null === DY || void 0 === DY ? void 0 : DY.pendingHold) && void 0 !== rY ? rY : null;
        if (null !== DY && null !== FY && FY.conn === YY) return DY.pendingHold = null, DY.heldConn = YY, qR = 0, console.warn(`${OI} the core holds the game, reconnecting`), void DY.resume.onDropped(FY.token);
        if (YY === qR) {
          qR = 0;
          const rY = dI;
          null === rY || rY.isStopped || (console.info(`${OI} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), Hg(rY, "close", YY))
        }
      }(YY.conn) : YY.phase === Jr.C.Closed && (null === (DY = bR) || void 0 === DY || null === (FY = DY.pendingHold) || void 0 === FY ? void 0 : FY.conn) === YY.conn && (bR.heldConn === YY.conn ? function(YY) {
        const rY = YY.heldConn,
          DY = YY.dropCode;
        Ng(YY, "refused"), console.info(`${OI} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          lg(rY, !1), Og(rY, DY, "", !0)
        }))
      }(bR) : bR.pendingHold = null);
      const OY = Object.keys(Jr.C).find((rY => Jr.C[rY] === YY.phase)),
        gY = 0 === YY.code ? "" : ` (code ${YY.code})`;
      console.info(`${OI} conn ${YY.conn}: ${null!==OY&&void 0!==OY?OY:YY.phase}${gY}, ${eR} raw messages so far`), (null === (AY = fR) || void 0 === AY ? void 0 : AY.conn) !== YY.conn || YY.phase !== Jr.C.Left && YY.phase !== Jr.C.Closed || UO(null), dR !== YY.conn || YY.phase !== Jr.C.Left && YY.phase !== Jr.C.Closed || (dR = null, null === fR && null === hR && kF.d.setGame(void 0));
      for (const vY of [...rO]) try {
        vY(YY.conn, YY.phase, YY.code)
      } catch (aY) {
        (0, wr.m)(aY, `${OI} a connection listener threw`)
      }
    }

    function Lg() {
      (0, rA.m)(), queueMicrotask((() => {
        try {
          ua()
        } catch (YY) {
          console.warn(`${OI} stopping before the reload threw`, YY)
        }(0, SD.flushCrashReports)(XY.b).then(XY.j, XY.j)
      }))
    }

    function tg() {
      const YY = dI;
      null === YY || YY.isStopped || null === PI || TR || !YY.hasPendingCommands() || ra(YY, !1, "budget")
    }

    function Ya(YY) {
      var rY;
      const DY = fR;
      YY.persisted || null === DY || (null === (rY = PI) || void 0 === rY ? void 0 : rY.conn) !== DY.conn || PI.left || DY.leave()
    }

    function ra(YY, rY, FY) {
      let AY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const IY = TR;
      TR = !0;
      try {
        return function(YY, rY, FY, AY) {
          var IY, RY, OY, gY;
          if (ZO) return !1;
          if (Ea(YY, Fa), ZO || YY.isStopped) return !1;
          ga() && ER("modelsIn");
          Tg(), SR = performance.now(), NR = null, BR = !1, (0, VY.H)(), null === (IY = RR) || void 0 === IY || IY.beforeFrame(), IF(SR, YY), (0, VY.B)(SR, Aa), lR = !0;
          const aY = rY && Oa();
          let vY;
          try {
            vY = YY.frame(SR, aY, FY)
          } finally {
            lR = !1
          }
          if (!vY) return !1;
          vO.observe(null !== (RY = null === (OY = YY.lastHeader) || void 0 === OY ? void 0 : OY.chunksCancelled) && void 0 !== RY ? RY : 0);
          const uY = YY.lastFrameKind,
            sY = (0, Nr.e)(uY);
          (function(YY) {
            null !== CA && CA.afterFrame(performance.now(), YY)
          })(sY), null === (gY = yO) || void 0 === gY || gY.frame(YY, SR, uY), rY && (eO = sY);
          sY && (0, lr.d)(SR);
          if (null !== iO) try {
            iO.frameRan(YY, SR, performance.now(), uY)
          } catch (yY) {
            Pg(yY)
          }
          "drawn" === uY && Ra() && function() {
            for (const YY of [...tF]) YY()
          }();
          YY.forEachNetOut(aa);
          const iY = PI;
          null !== NR && (null === iY || void 0 === iY ? void 0 : iY.conn) === NR && va(iY, ZY.j);
          (function(YY) {
            var rY;
            if (WO) return;
            null === VO && Oa() && (VO = performance.now());
            if (null === hR && null === fR) return;
            null === VO || SO || (SO = !0, (0, zr.l)("wasm_startup_loaded", VO));
            let DY = 0;
            null !== fR ? DY = -1 : !0 === (null === (rY = xR) || void 0 === rY ? void 0 : rY.activated) && (DY = ~Mr.J.TerrainDrawn);
            const FY = YY.headerWord(Mr.B.LoadSteps) & DY & ~mO;
            if (0 === FY) return;
            mO |= FY;
            const AY = performance.now();
            for (const [IY, RY] of Object.entries(Ia)) 0 !== (FY & Mr.J[IY]) && (0, zr.l)(RY, AY)
          })(YY), rY && function(YY) {
            var rY, FY, AY;
            if (null === fR || !Oa()) return;
            null === lO || TO === fR && !lO.frame(SR, 0 !== (YY.headerWord(Mr.B.LoadSteps) & Mr.J.TerrainDrawn)) || (lO = null);
            const IY = YY.lastHeader,
              RY = !DO || 0 === (null === IY || void 0 === IY ? void 0 : IY.renderPending);
            !EO && RY && (EO = !0, performance.mark(QI));
            if (TO === fR) return;
            const OY = null !== (rY = null === IY || void 0 === IY ? void 0 : IY.firstView) && void 0 !== rY ? rY : Jr.S.NotYet;
            if (DO && OY === Jr.S.NotYet) return;
            if (WO && (!0 !== (null === (FY = (0, SY.g)()) || void 0 === FY ? void 0 : FY.isSessionLive) || !RY)) return;
            TO = fR;
            const gY = fR;
            if (setTimeout((() => {
                fR === gY && (0, zr.i)()
              }), 0), null === (AY = QR) || void 0 === AY || AY.playable(), function() {
                clearTimeout(nI), nI = setTimeout((() => {
                  ng() && Sa((YY => {
                    let {
                      prefetchWorldgenWorker: rY
                    } = YY;
                    rY()
                  }))
                }), cI)
              }(), WO) return;
            WO = !0, performance.mark(yI), (0, NA.q)("render") && Promise.all([DY.e(74), DY.e(47)]).then((() => DY(4260))).then((YY => {
              let {
                renderDebugPlayable: rY
              } = YY;
              rY()
            }), (YY => {
              console.warn("The render debug topic didn't load", YY)
            }));
            const aY = Math.round(performance.now());
            if (DO && OY !== Jr.S.Drawn) {
              const YY = OY === Jr.S.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${OI} playable at ${aY} ms on the first view's ${YY} backstop: it wasn't drawn whole in time`), (0, zr.l)("wasm_view_backstop", aY, YY), "long" === YY) {
                var vY, uY;
                const YY = null !== (vY = null === (uY = wR) || void 0 === uY ? void 0 : uY.game) && void 0 !== vY ? vY : "";
                lO = new lD.b((() => {
                  (0, SD.reportFirstViewNoTerrain)(YY, XI)
                }))
              }
            } else console.info(`${OI} playable at ${aY} ms${DO?"":" (no renderer)"}`);
            setTimeout(OO, 0), (0, Qr.e)().catch((YY => {
              console.error(`${OI} item sprites didn't load, so item particles show the missing texture`, YY)
            }))
          }(YY);
          (0, tr.K)(YY, {
            worldgen: LI,
            mesh: YR
          }),
          function(YY) {
            YY.forEachEvent(OF);
            for (const rY of RF) try {
              (0, YF.c)(rY)
            } catch (yY) {
              if ((0, wr.f)(yY)) {
                YY.crashOn(tr.j, yY);
                break
              }
              console.error(`${DF} an input action listener threw`, yY)
            }
            RF.length = 0
          }(YY), AY && (0, er.e)();
          return !YY.isStopped
        }(YY, rY, "all" === FY || YY.rings.net.cursor >= WI || YY.netKeptFrames >= EI, AY)
      } finally {
        TR = IY
      }
    }

    function Da(YY) {
      console.error(`${OI} a frame-start listener threw`, YY)
    }

    function Fa() {
      var YY, rY, DY, FY;
      null === (YY = gR) || void 0 === YY || YY.drain(KI, HI), null === (rY = sR) || void 0 === rY || rY.drain(KI), null === (DY = iR) || void 0 === DY || DY.drain(performance.now()), RO(KI), null === (FY = uR) || void 0 === FY || FY.drain()
    }

    function Aa(YY) {
      console.error(`${OI} a before-frame listener threw`, YY)
    }
    const Ia = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Ra() {
      return DO && Oa()
    }

    function Oa() {
      return yR && ga()
    }

    function ga() {
      return null === gR || gR.startupDone
    }

    function aa(YY, rY) {
      const DY = PI;
      (null === DY || void 0 === DY ? void 0 : DY.conn) === YY ? va(DY, rY) : HR++
    }

    function va(YY, rY) {
      const {
        ws: DY
      } = YY;
      return DY.readyState === WebSocket.OPEN ? (DY.send(rY), !0) : DY.readyState === WebSocket.CONNECTING && YY.pendingBytes + rY.byteLength <= TI ? (YY.pending.push(rY.slice()), YY.pendingBytes += rY.byteLength, !0) : (HR++, !1)
    }

    function ua() {
      var YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY;
      ZO = !0, NO.stop(), (0, cA.b)(), CA = null, eg(), (0, VY.D)().unlockPointer(), (0, VY.C)(null), null === (YY = OR) || void 0 === YY || YY(), OR = null, null === (rY = (0, SY.v)()) || void 0 === rY || rY.followCursorAim(null), (0, er.H)(), (0, SY.f)(), bI.stop(), null === (DY = QO) || void 0 === DY || DY(), QO = null, null === (FY = oO) || void 0 === FY || FY(), oO = null, null === (AY = iO) || void 0 === AY || AY.stop(), iO = null, (0, eD.t)(null), null === (IY = UI) || void 0 === IY || IY(), UI = null, null === (RY = LI) || void 0 === RY || RY.stop(), LI = null, null === (OY = YR) || void 0 === OY || OY.stop(), YR = null, null !== (gY = MI) && void 0 !== gY && null !== (aY = gY.textures) && void 0 !== aY && aY.assets && dg(null), null === (vY = MI) || void 0 === vY || vY.stop(), MI = null, wI = null;
      const WY = rR;
      rR = null, WY && (WY.stop(), Wa(WY)), null === (uY = sR) || void 0 === uY || uY.dispose(), sR = null, null === (sY = iR) || void 0 === sY || sY.dispose(), iR = null, gR = null, null === (iY = vR) || void 0 === iY || iY(), vR = null, null === (yY = IR) || void 0 === yY || yY(), IR = null, null === (QY = RR) || void 0 === QY || QY.stop(), RR = null, xO(), kF.d.release(), Wg();
      const EY = uR;
      uR = null;
      try {
        null === EY || void 0 === EY || EY.dispose()
      } catch (mY) {
        console.warn(`${OI} the sky's images didn't release`, mY)
      }(0, JF.d)(null), null === (oY = jI) || void 0 === oY || oY.pagePreviews().endSession(null === (0, Ar.r)())
    }

    function sa(YY, rY) {
      var DY, FY;
      const AY = null !== (DY = null === (FY = rR) || void 0 === FY ? void 0 : FY.details()) && void 0 !== DY ? DY : {},
        IY = YY.site === aI || YY.site === vI || YY.site === SD.RENDER_RELOAD_SITE || YY.site === uI ? YY.error instanceof WebAssembly.RuntimeError || YY.error instanceof xr.e : !(0, Lr.n)(YY.error) && (0, tr.F)(YY);
      IY && YY.error instanceof Error && (0, Ar.R)(YY.error);
      const RY = IY || YY.site === tr.t ? (0, SD.readTrap)(YY.error) : null,
        OY = null !== RY && (0, br.h)(RY.kind, RY.refusedBytes) ? RY.refusedBytes : 0,
        gY = null === DR ? (0, jF.r)(function() {
          try {
            return (0, Ar.x)().buffer.byteLength
          } catch {
            return 0
          }
        }(), OY, null) : DR.ceilingMayRefuse(OY),
        aY = OY > 0 && !gY && Zg();
      var vY;
      if (aY && ((0, vr.n)("oom"), (0, vr.l)("decline"), zO = !0), ua(), (0, rA.d)()) return console.warn(`${OI} the session stopped at ${YY.site} as the page reloads`, YY.error), void((0, Lr.n)(YY.error) || (null === (vY = YY.header) || void 0 === vY ? void 0 : vY.lastError) === Jr.G.CoreBusy || (0, SD.reportStoppedCore)(YY, rY, RY, {
        memoryDetails: AY,
        declined: aY
      }));
      (0, SD.showCrash)(YY, rY, RY, {
        memoryDetails: AY,
        declined: aY
      })
    }

    function ia(YY) {
      const {
        input: rY,
        net: DY,
        worker: FY
      } = YY.rings, AY = YY.optionsDropped, IY = rY.dropped + AY + DY.dropped + FY.dropped + HR;
      IY !== KR && function(YY, rY) {
        const DY = performance.now();
        return !(DY - cR[YY] < eI) && (cR[YY] = DY, console.warn(`${OI} ${rY}`), !0)
      }("dropped", `${IY} records dropped so far (input ${rY.dropped}, options ${AY}, net ${DY.dropped}, worker ${FY.dropped}, net-out ${HR})`) && (KR = IY)
    }

    function ya() {
      var YY, rY;
      const DY = (0, WD.d)();
      if (null === DY) return null;
      const FY = (0, mD.l)(DY);
      return {
        ...FY,
        horizontal: Math.min(FY.horizontal, null !== (YY = null === (rY = rR) || void 0 === rY ? void 0 : rY.shedDistanceInUse()) && void 0 !== YY ? YY : 1 / 0)
      }
    }

    function Qa(YY) {
      var rY, DY;
      return {
        samples: DO ? uO : null,
        sunShadows: YY,
        renderDistance: null !== (rY = null === (DY = ya()) || void 0 === DY ? void 0 : DY.horizontal) && void 0 !== rY ? rY : null
      }
    }

    function oa() {
      var YY, rY, DY;
      const FY = ya();
      return {
        ...null === (YY = rR) || void 0 === YY ? void 0 : YY.pageKillSnapshot(),
        renderDistance: null !== (rY = null === FY || void 0 === FY ? void 0 : FY.horizontal) && void 0 !== rY ? rY : null,
        renderDistanceVertical: null !== (DY = null === FY || void 0 === FY ? void 0 : FY.vertical) && void 0 !== DY ? DY : null,
        chunkCap: FR,
        budgetBasis: AR,
        renderBackend: (0, rA.G)()
      }
    }

    function Wa(YY) {
      console.info(`${OI} wasm memory at the session's end`, YY.details())
    }

    function Ea(YY, rY) {
      if (!YY.isStopped) try {
        rY()
      } catch (DY) {
        YY.crash(tr.v, DY)
      }
    }

    function ma() {
      return tI ??= DY.e(68).then((() => DY(42400))).catch((YY => {
        throw tI = null, YY
      })), tI
    }
    async function Va() {
      const {
        createWorldgenWorker: YY,
        worldgenWorkerReady: rY
      } = await ma();
      return await rY(), YY
    }

    function Sa(YY) {
      var rY;
      null === (rY = tI) || void 0 === rY || rY.then(YY, (() => {}))
    }

    function la(YY, rY, DY) {
      return async function(YY, rY, DY) {
        let {
          stop: FY,
          stillWanted: AY
        } = DY;
        const IY = await (0, WF.m)(YY, {
          stillWanted: AY,
          beforeReload: async () => {
            FY(), await (0, SD.flushCrashReports)(XY.b)
          },
          reload: XY.j
        });
        return IY || rY(), IY
      }(YY, rY, {
        stop: ua,
        stillWanted: DY
      })
    }
    let Ta = !1;

    function ea() {
      return Ta = !0, async function(YY, rY, FY) {
        const {
          gamePackSource: AY
        } = await DY.e(343).then((() => DY(42364)));
        await pg.packStep(YY, ((DY, FY) => DY.packForGame(YY, AY(rY), FY)), FY)
      }(...arguments)
    }

    function Na(YY) {
      ! function(YY, rY) {
        YY((YY => {
          null === YY || void 0 === YY || YY.subscribe((YY => {
            let {
              pack: DY,
              gameSource: FY
            } = YY;
            rY(null === FY || null === DY ? null : {
              pack: DY,
              source: "" === FY ? null : FY
            })
          }))
        }))
      }(bg, YY)
    }
    let Ba = !1,
      ca = null,
      Ka = !1,
      Ha = !1;

    function za() {
      var YY;
      Ba || (Ba = !0, JO("play", wY), (0, sY.k)(new qa), OY.gameBridge.attach(HY), da().catch((() => {})), (0, SY.z)((YY => {
        tY(YY.setTextHost)
      })), YY = fa, UR.add(YY), function(YY) {
        for (const rY of oR) YY(rY);
        WR.add(YY)
      }((YY => {
        Ca(Za[YY])
      })))
    }
    const Za = {
      booted: IY.l.INITIALISE_NOA,
      texturesIn: IY.l.REGISTRATION,
      modelsIn: IY.l.SETUP_LIFEFORMS
    };

    function Ca(YY) {
      gY.g.vo("matchmakeAndPlayStepCompleted", {
        step: YY,
        totalSubSteps: 1
      })
    }

    function fa(YY) {
      if (!Ka) return;
      const {
        gameNameWithVariation: rY,
        lobbyName: DY
      } = (0, sY.b)();
      if (YY.code === FY.c.serverUpdating.code) return (new qa).leaveLive(), void ha(rY, DY);
      gY.g.vo("unwantedLeftGame", {
        reason: ja(YY),
        requiresRefresh: YY.requiresRefresh,
        canReconnect: null !== YY.reconnect,
        automaticallyReconnect: YY.reconnecting,
        canPlayAgain: YY.canPlayAgain,
        gameNameWithVariation: rY,
        lobbyName: DY
      }), (new qa).leaveLive()
    }

    function ja(YY) {
      return null !== YY.reasonKey ? {
        translationKey: YY.reasonKey
      } : "gameOrPluginKick" === YY.name ? YY.reason : `You have disconnected from the server.\n${YY.reason}`
    }

    function ha(YY, rY) {
      var FY;
      FY = (0, aY.C)(YY, rY), Promise.resolve().then((() => DY(1488))).then((YY => {
        let {
          navigatePreserveSearch: rY
        } = YY;
        rY(FY)
      })).catch((YY => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", YY), (0, XY.f)(FY)
      }))
    }

    function da() {
      return ca ??= Promise.all([DY.e(69), DY.e(72), DY.e(71), DY.e(70), DY.e(83), DY.e(258), DY.e(237), DY.e(211), DY.e(235), DY.e(207), DY.e(46)]).then((() => DY(39778))).then((YY => {
        try {
          YY.attachPlayGameSources()
        } catch (rY) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", rY),
            function(YY) {
              kI.then((rY => {
                null === rY || rY.isStopped || ZO ? console.warn(`${OI} the play sources threw as they attached, after the client stopped`, YY) : sa({
                  site: uI,
                  error: YY,
                  header: null
                }, XI)
              }))
            }(rY), rY
        }
      }), (YY => {
        throw ca = null, new SY.e(YY)
      })), ca
    }
    async function Ja(YY, rY) {
      za(), Ta = !0, Ka = !0;
      let DY = {
          place: YY.place,
          matchedAt: YY.matchedAt
        },
        RY = YY.place.gameNameWithVariation;
      const OY = (0, uY.g)();
      let gY = null;
      const aY = await XO({
        matchmake: async () => {
          let rY = DY;
          if (DY = null, null === rY) {
            const DY = await YY.rematch();
            if (DY.isError()) throw gY = DY.asError().forward(), new Error(DY.asError().message);
            rY = {
              place: DY.getValue(),
              matchedAt: performance.now()
            }
          }
          RY = rY.place.gameNameWithVariation;
          return {
            target: await (0, fY.d)(YY.userContext, rY.place, Xg(), OY),
            matchedAt: rY.matchedAt,
            freshMs: fY.c
          }
        },
        pageReady: da,
        onFailure: (YY, rY) => {
          null === gY && function(YY, rY) {
            (0, SD.reportPageJoinFailure)(YY, XI, rY)
          }(YY, {
            sinceJoinStartMs: rY,
            game: RY
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => YY.userContext.invalidateTrafficCode(),
        signal: rY
      });
      switch (aY.kind) {
        case "joined":
          if (OY) {
            const {
              game: YY
            } = aY;
            (0, uY.o)((() => {
              YY.endJoinAd()
            }))
          }
          return Ha || (Ha = !0, (0, QY.c)()), Ka ? (Ca(IY.l.CONNECT_TO_GAME_SERVER), Ca(IY.l.SHADER_PACK), GO() && (0, yY.f)(YY.userContext, RY).catch((YY => {
            console.error("Failed to report the shader pack session", YY)
          })), function() {
            const YY = function() {
              var YY, rY;
              return null !== (YY = null === (rY = QR) || void 0 === rY ? void 0 : rY.couldntRunInJoinedGame()) && void 0 !== YY ? YY : null
            }();
            null !== YY && (0, yY.b)(YY)
          }(), AY.e.value(void 0)) : Xa("The server ended the game as it joined");
        case "failed":
          if (!aY.reloading) {
            if (null !== gY) return gY;
            if ((aY.error instanceof ZY.m || aY.error instanceof ZY.c) && aY.error.code === FY.c.serverUpdating.code) {
              if (rY.aborted) return Xa("Left the game while it loaded");
              const {
                gameNameWithVariation: YY,
                lobbyName: DY
              } = (0, sY.b)();
              return ha(YY, DY), Xa("The server is updating")
            }
            return aY.error instanceof bY.g ? AY.e.errorWithCode(aY.error.messageKey, IY.l.SHADER_PACK, {
              severity: "medium"
            }) : AY.e.errorWithCode(function(YY) {
              if (YY instanceof ZY.A || YY instanceof EY.e) return YY.message;
              if (Ma(YY)) return (0, zY.k)(YY.code, YY.serverText);
              return zY.i
            }(aY.error), IY.l.CONNECT_TO_GAME_SERVER, {
              error: wa(aY.error) ? aY.error : void 0,
              severity: ba(aY.error),
              gameServerUnreachable: (0, CY.d)(aY.error),
              rematch: (0, WY.d)(aY.error)
            })
          }
          return Xa("Reloading into the new build");
        case "stopped":
          return Xa("The game client stopped, and shows why");
        case "Hr":
          return Xa("Left the game while it loaded")
      }
    }

    function Ma(YY) {
      return YY instanceof ZY.m || YY instanceof ZY.c && "attach" !== YY.stage
    }

    function wa(YY) {
      return !(YY instanceof ZY.A) && !Ma(YY) && void 0 === (0, CY.d)(YY)
    }

    function ba(YY) {
      return Ma(YY) ? YY instanceof ZY.c && (0, zY.j)(YY.code).requiresRefresh ? "medium" : "low" : wa(YY) || YY instanceof ZY.A ? "medium" : "low"
    }

    function Xa(YY) {
      return AY.e.errorWithCode(YY, IY.l.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Hr: !0
      })
    }
    class qa {
      leave(YY) {
        if ((0, mY.b)()) {
          var rY, DY;
          if ((0, RY.d)()) return;
          (0, iY.c)(!0 === (null === (rY = (0, mY.m)()) || void 0 === rY || null === (DY = rY.currentViewer) || void 0 === DY ? void 0 : DY.unsavedChanges), YY)
        } else this.leaveLive()
      }
      leaveLive() {
        var YY;
        Ta && (null === (YY = Xg()) || void 0 === YY || YY.endGamePack());
        if (!Ka) return;
        Ka = !1, (0, oY.c)();
        try {
          var rY;
          null === (rY = (0, SY.v)()) || void 0 === rY || rY.clearWasmCameraScreen()
        } catch (FY) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", FY)
        }
        const {
          gameNameWithVariation: DY
        } = (0, sY.b)();
        try {
          Yg()
        } finally {
          (0, sY.n)({
            websocketUrl: null
          }), gY.g.vo("leaveGame", {
            gameNameWithVariation: DY
          }), (0, vY.J)()
        }
      }
      isReplay() {
        return (0, mY.b)()
      }
    }
  },
  40124: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => FY,
      e: () => OY,
      g: () => RY
    });
    const FY = 12e4,
      AY = 3e4,
      IY = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: YY => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", YY), () => {
          document.removeEventListener("visibilitychange", YY)
        })
      };

    function RY(YY) {
      return `it sent no start within ${Math.round(YY)} ms`
    }
    class OY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IY;
        this.timeoutMs = YY, this.onTimeout = rY, this.now = DY, this.visibility = FY, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = FY.listen((() => {
          this.onVisibility()
        })), FY.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const YY = this.step;
        return null === YY ? 0 : Math.min(this.now() - YY.at, YY.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const YY = this.timeoutMs - this.counted;
        if (YY <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const rY = Math.min(YY, 5e3);
        this.step = {
          at: this.now(),
          ms: rY
        }, this.arm(rY, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(YY, rY) {
        this.timer = setTimeout((() => {
          this.timer = null, rY()
        }), YY)
      }
    }
  },
  39997: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    const FY = {
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
  38088: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(3312);
    const AY = ["none", "idle", "now"];

    function IY() {
      const YY = () => (0, FY.D)();
      return {
        memoryBytes: () => (0, FY.x)().buffer.byteLength,
        reserveUpFront: rY => YY().nv(rY),
        reserveAhead: rY => YY().xv(rY),
        setCeiling: rY => {
          YY().Pv(rY)
        },
        lowWater: () => AY[YY().Gv()] ?? "none",
        stats: () => function(YY) {
          const rY = new Uint32Array((0, FY.x)().buffer, YY, 17),
            DY = YY => rY[YY] ?? 0,
            AY = YY => ({
              upFront: DY(YY),
              ahead: DY(YY + 1),
              onDemandInFrame: DY(YY + 2),
              onDemand: DY(YY + 3)
            });
          return {
            memoryBytes: DY(0),
            initialBytes: DY(1),
            liveBytes: DY(2),
            peakLiveBytes: DY(3),
            headroomBytes: DY(4),
            unusedBytes: DY(5),
            ceilingBytes: DY(6),
            reservesRefused: DY(7),
            grows: AY(8),
            grownBytes: AY(12),
            allocationsRefused: DY(16)
          }
        }(YY().Uv()),
        takeBallast: () => YY().Lv(),
        takePressure: () => YY().tv()
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);