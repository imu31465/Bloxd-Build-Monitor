export const id = 60;
export const ids = [60];
export const modules = {
  38557: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT
    });
    const iT = "The world isn't loaded, so no blocks can be seen.",
      zT = "The world isn't loaded, so nothing in it can be seen."
  },
  38061: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => KT,
      d: () => MT,
      e: () => cT
    });
    var iT = IT(2541);
    const zT = 0,
      kT = 2,
      WT = 3,
      XT = 4;
    class BT {
      constructor(TT, oT) {
        this.width = TT, this.fD = oT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * oT)
      }
      push(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let iT = 0; iT < this.width; iT++) IT[iT] = TT[oT + iT];
        return this.next = (this.next + 1) % this.fD, this.size = Math.min(this.size + 1, this.fD), IT
      }
      lines() {
        const TT = [],
          oT = (this.next - this.size + this.fD) % this.fD;
        for (let IT = 0; IT < this.size; IT++) {
          const iT = (oT + IT) % this.fD * this.width;
          TT.push(Array.from(this.data.subarray(iT, iT + this.width)).join(","))
        }
        return TT
      }
    }

    function FT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function ST(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class DT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.zq = 0, this.pastLimit = 0, this.lockSkips = 0, this.xM = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class LT {
      constructor() {
        var TT = this;
        this.tally = new DT, this.records = new BT(10, 3600), this.events = new BT(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [iT, BT, DT, LT, xT, cT, KT, MT, rT, AT] = TT.records.push(oT, IT), gT = TT.tally;
          switch (gT.frames++, KT) {
            case zT:
              return void gT.idle++;
            case XT:
              return void gT.xM++;
            case WT:
              return gT.lockSkips++, void(0 === DT && 0 === LT || TT.outlier(`lock skip dropped raw (${FT(DT)}, ${FT(LT)}) at ${ST(iT)} ms`))
          }
          gT.looked++, Number.isFinite(BT) && (gT.dtMin = Math.min(gT.dtMin, BT), gT.dtMax = Math.max(gT.dtMax, BT), gT.dtSum += BT, BT > 0 && (gT.peakRate = Math.max(gT.peakRate, Math.hypot(xT, cT) / BT))), gT.raw[0] += DT, gT.raw[1] += LT, gT.turned[0] += xT, gT.turned[1] += cT;
          const hT = Math.abs(DT) > AT || Math.abs(LT) > AT,
            wT = `raw (${FT(DT)}, ${FT(LT)}) over ${ST(BT)} ms, limit ${FT(AT)}, filter v (${MT.toFixed(3)}, ${rT.toFixed(3)}) px/ms, at ${ST(iT)} ms`;
          KT === kT ? (gT.zq++, TT.outlier(`spike put right: ${wT} -> turned (${FT(xT)}, ${FT(cT)})`)) : hT ? (gT.pastLimit++, TT.outlier(`kept past limit: ${wT}`)) : BT > 50 && (gT.longFrames++, TT.outlier(`long frame: ${wT}, turned in full`))
        }, this.onMouseMove = TT => {
          const oT = this.tally,
            {
              movementX: IT,
              movementY: iT
            } = TT;
          oT.events++;
          const zT = Math.max(Math.abs(IT), Math.abs(iT));
          oT.eventMax = Math.max(oT.eventMax, zT);
          const kT = null !== document.pointerLockElement,
            WT = this.event;
          WT[0] = TT.timeStamp, WT[1] = IT, WT[2] = iT, WT[3] = kT ? 1 : 0, this.events.push(WT), zT >= 200 && (oT.bigEvents++, this.eventOutlier(`big mousemove (${IT}, ${iT}) at ${ST(TT.timeStamp)} ms, lock ${kT?"kS":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          (0, iT.l)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${ST(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, iT.l)("look", `pointer lock request failed at ${ST(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, iT.l)("look", `page ${document.visibilityState} at ${ST(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const TT = this.tally;
          if (this.tally = new DT, 0 === TT.events && 0 === TT.raw[0] && 0 === TT.raw[1] && 0 === TT.lockSkips && 0 === TT.zq && 0 === TT.dropped) return;
          const oT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            IT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===this.client?`, ${TT.xM} carried`:""})`, `dt avg ${ST(oT)} min ${ST(TT.dtMin)} max ${ST(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${FT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${FT(TT.raw[0])}, ${FT(TT.raw[1])}) turned (${FT(TT.turned[0])}, ${FT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.zq}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "kS" : "free")];
          TT.dropped > 0 && IT.push(`${TT.dropped} doubled spike copies dropped`), TT.lost > 0 && IT.push(`${TT.lost} records lost`), TT.suppressed > 0 && IT.push(`${TT.suppressed} outlier lines not shown`), (0, iT.l)("look", `1s: ${IT.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(TT, oT) {
        this.client = TT, this.take = oT;
        const {
          screen: IT
        } = window;
        (0, iT.l)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${IT.width}x${IT.height}, pointer lock ${document.pointerLockElement?"kS":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, iT.j)("look", this.dump))
      }
      outlier(TT) {
        const oT = this.tally;
        oT.outliers >= 20 ? oT.suppressed++ : (oT.outliers++, (0, iT.l)("look", TT))
      }
      eventOutlier(TT) {
        const oT = this.tally;
        oT.eventLines >= 10 ? oT.suppressed++ : (oT.eventLines++, (0, iT.l)("look", TT))
      }
      takeRecords() {
        var TT;
        const oT = null === (TT = this.take) || void 0 === TT ? void 0 : TT.call(this);
        if (oT && oT.length >= 2) {
          this.tally.lost += oT[0], this.tally.dropped += oT[1];
          for (let TT = 2; TT + 10 <= oT.length; TT += 10) this.record(oT, TT)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let xT = null;

    function cT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xT ??= new LT, xT.start(TT, oT), xT.record
    }

    function KT() {
      var TT;
      null === (TT = xT) || void 0 === TT || TT.endTake()
    }

    function MT() {
      var TT;
      null === (TT = xT) || void 0 === TT || TT.droppedCopy()
    }
  },
  8649: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    const iT = new Set(["chunkBorders"])
  },
  35801: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      f: () => BT
    });
    const iT = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      zT = {
        player: iT,
        store: {
          ...iT,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function kT(TT, oT) {
      TT instanceof Promise ? TT.then(oT).catch((TT => {
        console.error("Couldn't open the preview", TT)
      })) : oT(TT)
    }
    class WT {
      constructor(TT) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height), null !== this.view && TT.show(this.view))
        }))
      }
      show(TT) {
        var oT;
        this.view = TT, null === (oT = this.opened) || void 0 === oT || oT.show(TT)
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    class XT {
      constructor(TT) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(TT).then((TT => TT.ready)), kT(TT, (TT => {
          this.closed ? TT.close() : (this.opened = TT, null !== this.size && TT.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var TT, oT;
        return null !== (TT = null === (oT = this.opened) || void 0 === oT ? void 0 : oT.isReady()) && void 0 !== TT && TT
      }
      setCosmetic(TT, oT) {
        var IT;
        null === (IT = this.opened) || void 0 === IT || IT.setCosmetic(TT, oT)
      }
      playEmote(TT) {
        var oT;
        null === (oT = this.opened) || void 0 === oT || oT.playEmote(TT)
      }
      resetCamera() {
        var TT;
        null === (TT = this.opened) || void 0 === TT || TT.resetCamera()
      }
      async untilDrawn(TT) {
        var oT;
        await this.ready, await (null === (oT = this.opened) || void 0 === oT ? void 0 : oT.untilDrawn(TT))
      }
      resize(TT, oT) {
        var IT;
        this.size = {
          width: TT,
          height: oT
        }, null === (IT = this.opened) || void 0 === IT || IT.resize(TT, oT)
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.opened) || void 0 === TT || TT.close(), this.opened = null
      }
    }
    const BT = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(TT) {
        this.host = TT
      }
      setDefaultHost(TT) {
        this.makeDefault = TT
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(TT) {
        return new WT(this.current().openMob(TT))
      }
      openPet(TT) {
        return new WT(this.current().openPet(TT))
      }
      openMobLineup(TT) {
        return new WT(this.current().openMobLineup(TT))
      }
      openCharacter(TT, oT) {
        return new XT(this.current().openCharacter(TT, oT))
      }
    }
  },
  38198: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      f: () => LT
    });
    var iT = IT(159),
      zT = IT(187),
      kT = IT(1438),
      WT = IT(2788),
      XT = IT(1451),
      BT = IT(35468),
      FT = IT(648),
      ST = IT(38159);

    function DT(TT) {
      (0, WT.i)("matchmake_failed", TT, iT.j[iT.j.SHADER_PACK])
    }
    async function LT(TT, oT) {
      var IT;
      const iT = null === (IT = await ST.shaderPackPage.preload()) || void 0 === IT ? void 0 : IT.listing,
        WT = (0, BT.e)();
      iT && null !== WT && await XT.e.reportShaderPackSession(TT, {
        packId: iT.packId,
        sourceHash: iT.sourceHash,
        game: (0, kT.g)(oT, zT.B, "other"),
        playSessionId: WT,
        visitSessionId: (0, FT.e)()
      })
    }
  },
  38010: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT
    });
    var iT = IT(16),
      zT = IT(1253),
      kT = IT(3022);
    const WT = "Reconnecting";
    class XT {
      constructor(TT) {
        this.hooks = TT, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = TT => {
          TT.persisted || this.leave()
        }, this.controller = new kT.b((oT => TT.reconnect(oT)), {
          isSessionLive: () => !this.ended && TT.isLive(),
          onPhaseChanged: TT => {
            this.onPhaseChanged(TT)
          },
          onReconnected: oT => {
            TT.onReconnected(oT)
          },
          onGaveUp: oT => {
            !this.ended && TT.isLive() && TT.onGaveUp(this.sessionBased, oT)
          }
        })
      }
      onInitialInfo(TT, oT) {
        this.graceMs = TT, this.sessionBased = oT
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(TT) {
        this.ended || this.controller.onConnectionLost(TT, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const TT = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          oT = this.controller.heldToken;
        this.end(), TT && "" !== oT && this.hooks.releaseSeat(oT)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(TT) {
        const oT = "frozen" === TT || "resuming" === TT;
        oT !== this.stopped && (this.stopped = oT, this.hooks.freeze(oT));
        const IT = "frozen" === TT || "resuming" === TT && this.frozen;
        IT && !this.frozen ? (0, zT.o)(WT) : !IT && this.frozen && (0, zT.n)(WT), this.frozen = IT, this.setListening("connected" !== TT), iT.h.XM(kT.k, IT ? "frozen" : TT)
      }
      setListening(TT) {
        TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38012: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    class iT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = TT, this.now = oT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const TT = this.now(),
            oT = TT - this.lastCheckAt <= 2e3;
          this.lastCheckAt = TT;
          const IT = "visible" === document.visibilityState;
          !IT || oT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = IT, IT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = oT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8680: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(1071);

    function zT() {
      var TT, oT;
      return null !== (TT = null === (oT = screen.orientation) || void 0 === oT ? void 0 : oT.type) && void 0 !== TT ? TT : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const kT = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && zT() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = zT(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, iT.JK)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const TT of this.resizers) TT()
          }
        }), 1e3)
      }
      heldSizer(TT) {
        let oT = !1;
        return () => {
          if (oT && this.isHeld()) return null;
          const IT = TT();
          return oT ||= null !== IT, IT
        }
      }
      onRelease(TT) {
        return this.resizers.add(TT), () => {
          this.resizers.delete(TT)
        }
      }
    }
  },
  38188: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    let iT = !1;
    async function zT(TT, oT) {
      if (!iT) {
        iT = !0;
        try {
          const [{
            reloadBloxd: iT
          }, {
            NotificationProvider: zT
          }] = await Promise.all([Promise.resolve().then((() => IT(1665))), Promise.resolve().then((() => IT(1325)))]);
          if (!TT || !0 === await zT.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void iT(oT)
        } catch (zT) {
          console.error("Leaving the replay failed", zT)
        }
        iT = !1
      }
    }
  },
  38029: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      e: () => ST
    });
    var iT = IT(1651),
      zT = IT(193),
      kT = IT(1635),
      WT = IT(1688),
      XT = IT(1183),
      BT = IT(1117);
    async function FT(TT, oT) {
      return function(TT) {
        return "object" === typeof TT && null !== TT && TT.code === zT.b.VpnIp.code
      }(oT) && function(TT) {
        return kT.c.supports("appCheck") && TT.isLoggedIn() && !TT.hasTriedAppAttestation()
      }(TT) && await async function(TT) {
        try {
          const {
            token: oT
          } = await (0, WT.c)(), {
            "3PSIDMCPP": IT
          } = await (0, BT.postJsonWithMetricsCookiesAndJsonResponse)(`${XT.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: oT
          }, {
            retries: 0
          }, TT.getMetricsCookies());
          return TT.setAppAttestedAuthJwt(IT), !0
        } catch (oT) {
          return oT instanceof iT.e && "failed" === oT.code ? (console.warn("The app couldn't get an App Check token:", oT), TT.markAppAttestationTried()) : console.error("Failed to attest the app:", oT), !1
        }
      }(TT)
    }
    async function ST(TT, oT) {
      try {
        return await oT()
      } catch (IT) {
        if (!await FT(TT, IT)) throw IT
      }
      return oT()
    }
  },
  39829: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT
    });
    var iT = IT(1679);
    const zT = 33177600,
      kT = 3e4;
    let WT = !1;

    function XT(TT, oT, IT) {
      if (!TT.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (WT) return Promise.reject(new Error("A screenshot is already being taken"));
      WT = !0;
      const iT = function(TT, oT, IT) {
        const iT = Math.max(1, TT),
          kT = Math.max(1, oT),
          WT = Math.min(1, IT / Math.max(iT, kT), Math.sqrt(zT / (iT * kT)));
        return {
          width: Math.max(1, Math.floor(iT * WT)),
          height: Math.max(1, Math.floor(kT * WT))
        }
      }(oT, IT, TT.maxTextureSize);
      return TT.resize(iT.width, iT.height), new Promise(((oT, IT) => {
        let iT, zT = 2,
          XT = null;
        const BT = () => {
          var oT;
          WT = !1, null === (oT = XT) || void 0 === oT || oT(), clearTimeout(iT), TT.restoreSize()
        };
        iT = setTimeout((() => {
          BT(), IT(new Error("No frame was drawn to capture"))
        }), kT), XT = TT.onFrameDrawn((() => {
          if (zT--, zT > 0) return;
          const {
            canvas: iT
          } = TT, kT = {
            width: iT.width,
            height: iT.height
          };
          try {
            iT.toBlob((TT => {
              TT ? oT({
                blob: TT,
                ...kT
              }) : IT(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (WT) {
            IT(WT)
          } finally {
            BT()
          }
        }))
      }))
    }
    async function BT(TT, oT, IT) {
      try {
        const zT = await XT(TT, oT, IT);
        (0, iT.d)(zT.blob, `bloxd-screenshot-${zT.width}x${zT.height}-${Date.now()}.png`)
      } catch (zT) {
        console.error("Error taking screenshot:", zT)
      }
    }
  },
  38020: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      g: () => FT
    });
    var iT = IT(193),
      zT = IT(4161),
      kT = IT(3210);
    const WT = [250, 500, 1e3, 2e3, 1250],
      XT = 406;

    function BT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const {
        code: oT,
        message: IT
      } = TT, zT = iT.b.duplicateLobbyNameError;
      return (oT === zT.code || oT === XT) && (IT === zT.text || IT === zT.text + iT.k)
    }
    async function FT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.c;
      for (let zT = 0;; zT++) {
        let XT;
        (0, kT.o)(oT);
        try {
          return await TT()
        } catch (iT) {
          if (XT = WT[zT], void 0 === XT || !BT(iT)) throw iT
        }
        await IT(XT, oT)
      }
    }
    const ST = new Set([iT.b.duplicateLobbyNameError.code, iT.b.lobbyCantBeCreated.code, iT.b.roomDisposedEarlyError.code, iT.b.roomDisposedLateError.code, iT.b.serverRoomLimitReached.code]);

    function DT(TT) {
      if (BT(TT)) return !0;
      const oT = "object" === typeof TT && null !== TT ? TT.code : void 0;
      return "number" === typeof oT && ST.has(oT)
    }
  },
  38112: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(306),
      zT = IT(139),
      kT = IT(26);

    function WT() {
      kT.e.setItem(iT.Ib, kT.e.getItem(iT.Ib) + 1), (0, zT.j)() && kT.e.setItem(iT.Hb, kT.e.getItem(iT.Hb) + 1)
    }
  },
  35465: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => AT,
      i: () => gT
    });
    var iT = IT(1007),
      zT = IT(623),
      kT = IT(314),
      WT = IT(1014),
      XT = IT(637),
      BT = IT(661),
      FT = IT(4041),
      ST = IT(90),
      DT = IT(139),
      LT = IT(1665),
      xT = IT(112),
      cT = IT(35468),
      KT = IT(26),
      MT = IT(648),
      rT = IT(35475);

    function AT() {
      var TT, oT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (oT = navigator.language) && void 0 !== oT ? oT : "none"], "EN-gb"]
    }

    function gT(TT, oT, IT, gT, hT) {
      const wT = (0, iT.m)(oT) ? (0, iT.p)(oT) : null,
        mT = {
          cookies: (0, LT.getAllCookiesForGameNameWithVariation)(oT),
          isMobile: (0, ST.isMobile)(),
          isUsingCustomGameTexturePack: null !== wT && hT(wT),
          generalCookies: {
            joinDiscord: !!KT.e.getItem("DiscordPressed"),
            newGo: FT.b,
            ...TT.getMetricsCookies(),
            trafficCode: gT,
            compliance: ST.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, ST.getBrowserName)(),
            version: (0, ST.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, ST.getPlatformType)(),
            deviceType: (0, xT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: IT,
          languages: AT(),
          version: zT.c,
          siteUsed: DT.p,
          subsiteUsed: DT.w,
          playSessionId: (0, cT.j)(oT),
          visitSessionId: (0, MT.e)(),
          clientReason: XT.n.reason,
          budgetBasis: (0, rT.h)(),
          ...null !== BT.t && {
            diagClaim: BT.t.claimId
          }
        };
      return null !== wT && (0, kT.rc)(wT) ? (mT.lobbyName = (0, iT.j)(wT, (0, iT.n)(oT), IT), {
        roomName: `classic_${WT.d}`,
        joinOptions: mT
      }) : {
        roomName: oT,
        joinOptions: mT
      }
    }
  },
  39436: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(38557);

    function zT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function kT() {}
    const WT = Object.freeze([0, 0, 0]),
      XT = {
        states: {
          health: zT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: zT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: zT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: zT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: zT({}),
          creativeVisibility: zT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: zT(null),
          heldItemAim: zT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: zT(!1),
          gliderBoostFuel: zT(0),
          flight: zT({
            canFly: !1,
            flying: !1
          }),
          crafting: zT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: zT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: zT({}),
          fullInventory: zT(!1),
          crosshairTarget: zT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: zT(!0),
          freeCamera: zT({
            allowed: !1,
            movesFly: !1
          }),
          replay: zT(null),
          replayEdits: zT(null),
          replayRecorder: zT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: zT(!1)
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
          selectHotbarSlot: kT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: kT,
          setInventoryOpen: kT,
          changeIronChestPasskey: kT,
          dragReplayCamera: kT,
          applyTemporaryThirdPerson: kT,
          holdEmoteWheel: kT,
          recordFlyingMiddleText: kT,
          focusCrafting: kT,
          craftRecipe: () => ({
            qS: 0,
            XS: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: kT,
          setShopOpen: kT,
          buyShopItem: kT,
          sendChatMessage: kT,
          ignorePlayer: kT,
          reportPlayer: kT,
          reportWorldCodeChat: kT,
          requestDiscordReportKey: kT,
          reportLobbyOrGame: kT,
          playEmote: kT,
          updateMyCosmetic: kT,
          writeOnBoard: kT,
          writeBook: kT,
          writeNameTag: kT,
          setCustomLobbyBlock: kT,
          openIronChest: kT,
          sendCodeCollab: kT,
          clickCodeBlock: kT,
          bindCustomButtonKeys: kT,
          pressCustomButton: kT,
          moveReplayFreecam: kT,
          holdReplayFreecamVertical: kT,
          respawn: kT,
          wakeUp: kT,
          requestLeaderboard: kT,
          completeTask: kT,
          setServerCookie: kT,
          answerUiRequest: kT,
          chooseRewardedAd: kT,
          setCameraZoom: kT,
          setFreeCameraMovesFly: kT,
          setBlockHighlight: kT,
          setCrosshairInteractPrompt: kT,
          setLookSensitivity: kT,
          replayAction: kT,
          setReplayPlaying: kT,
          seekReplay: kT,
          setReplayCameraMode: kT,
          syncReplayCameraMode: kT,
          setReplayCameraKeyframe: kT,
          moveReplayCameraKeyframe: kT,
          deleteReplayCameraKeyframes: kT,
          setReplayPlaybackMark: kT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: kT,
          exportReplayVideo: kT,
          toggleRecording: kT,
          saveClip: kT,
          setRecorderPrefs: kT,
          setReplayViewerOpen: kT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => iT.e,
          worldCodeAiGameState: () => iT.f
        },
        lookups: {
          localPos: () => WT,
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
  35475: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => mT,
      h: () => wT,
      j: () => hT
    });
    var iT = IT(193),
      zT = IT(90),
      kT = IT(2552),
      WT = IT(3916),
      XT = IT(641),
      BT = IT(35479);
    const FT = 1048576,
      ST = 1024 * FT,
      DT = 400 * FT,
      LT = 147456,
      xT = .5,
      cT = 1.5 * ST,
      KT = 768 * FT;

    function MT(TT) {
      return DT + TT * LT
    }

    function rT(TT, oT, IT) {
      var zT, WT;
      let {
        footprintBytes: XT,
        basis: FT,
        namesLimit: rT
      } = function(TT) {
        const {
          os: oT,
          deviceMemory: IT
        } = TT;
        if ("ios" === oT) switch ((0, kT.i)(TT)) {
          case "ipad_m":
            return {
              footprintBytes: MT(BT.c), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: KT, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: cT, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: KT, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof IT && Number.isFinite(IT) && IT > 0 ? {
          footprintBytes: IT * ST * xT,
          basis: `memory-${IT}`,
          namesLimit: !0
        } : "android" === oT ? {
          footprintBytes: KT,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: MT(BT.g),
          basis: "unreported",
          namesLimit: !1
        }
      }(TT);
      if (IT) {
        const TT = Math.min(XT, MT(BT.c));
        XT = DT + Math.max(0, TT - DT) / 2, FT += "+killed", rT = !0
      }
      null !== oT && MT(oT) < XT && (XT = MT(oT), FT += "+learned", rT = !0);
      const AT = function(TT) {
          const oT = Math.floor((TT - DT) / LT);
          return Math.min(BT.c, Math.max(BT.f, oT))
        }(XT),
        gT = (0, BT.i)(AT);
      return {
        footprintBytes: XT,
        shedFootprintBytes: rT ? Math.max(XT, MT(AT)) : null,
        chunkCap: AT,
        maxHorizDistance: null !== (zT = null === gT || void 0 === gT ? void 0 : gT.horizontal) && void 0 !== zT ? zT : iT.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (WT = null === gT || void 0 === gT ? void 0 : gT.vertical) && void 0 !== WT ? WT : iT.c.maxChunkVertAddDistance,
        basis: FT
      }
    }
    let AT = null;

    function gT() {
      return rT({
        os: (0, zT.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, kT.l)()
      }, (0, WT.g)(), (0, XT.F)("wasm").length > 0)
    }

    function hT() {
      return AT ??= gT(), AT
    }

    function wT() {
      var TT;
      return (null !== (TT = AT) && void 0 !== TT ? TT : gT()).basis
    }

    function mT(TT, oT) {
      return TT.setChunkCap(oT.chunkCap)
    }
  },
  39821: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT,
      c: () => kT
    });
    var iT = IT(2715),
      zT = IT(1007);

    function kT(TT, oT) {
      return null !== TT.gameSource && (0, iT.k)(oT, TT.gameSource)
    }

    function WT(TT, oT) {
      if (null === TT.gameSource || "" === TT.gameSource || null === oT) return !0;
      const IT = (0, zT.m)(oT) ? (0, zT.p)(oT) : null;
      return null !== IT && kT(TT, IT)
    }
  },
  39803: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => KT,
      g: () => FT,
      k: () => ST,
      n: () => cT
    });
    var iT = IT(39762),
      zT = IT(39807);
    const kT = 396,
      WT = 1,
      XT = 2,
      BT = 3,
      FT = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      ST = {
        File: 0,
        Item: 1
      },
      DT = 0,
      LT = 1,
      xT = 2;

    function cT(TT) {
      const oT = (0, iT.p)();
      oT.catch((() => {}));
      let zT = null;
      return {
        glbUrl: TT,
        lifeformAtlasUrl: async TT => (await oT).lifeformAtlasUrl(TT),
        armourAtlasUrl: async () => (await IT.e(196).then((() => IT(33287)))).armourAtlasUrl,
        capeUrl: async TT => (await oT).capeUrl(TT),
        attachmentImageUrl: async TT => (await oT).attachmentImageUrl(TT),
        blockImageUrl: async TT => (await oT).blockImageUrl(TT),
        groupAtlasUrl: async TT => (await oT).groupAtlasUrl(TT),
        particleTextureUrl: async TT => (await oT).particleTextureUrl(TT),
        particleItemUrl: async TT => (zT ??= IT.e(38).then((() => IT(50372))).catch((TT => {
          throw zT = null, TT
        })), (await zT).particleItemUrl(TT))
      }
    }
    class KT {
      constructor(TT, oT) {
        var IT, kT, WT;
        let XT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = TT, this.onFailure = oT, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.Ec = !1, this.load = null !== (IT = XT.load) && void 0 !== IT ? IT : (TT, oT) => (0, zT.f)(TT, XT.fetchImage, oT), this.release = null !== (kT = XT.release) && void 0 !== kT ? kT : zT.k, this.fetchFile = null !== (WT = XT.fetchFile) && void 0 !== WT ? WT : TT => (0, iT.j)(TT)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(TT, oT) {
        this.glbWrittenImages.set(TT, mT(oT))
      }
      glbTaken(TT, oT) {
        const IT = this.glbWrittenImages.get(TT);
        this.glbWrittenImages.delete(TT), oT && this.setGlbImages(TT, void 0 !== IT && IT.length > 0 ? IT : void 0)
      }
      setGlbImages(TT, oT) {
        var IT;
        this.glbTakenCount.set(TT, (null !== (IT = this.glbTakenCount.get(TT)) && void 0 !== IT ? IT : 0) + 1), void 0 === oT ? this.glbImages.delete(TT) : this.glbImages.set(TT, oT);
        const iT = [];
        for (const {
            key: zT
          }
          of this.loading.values()) zT.kind === FT.Glb && zT.word === TT && iT.push(zT);
        for (let zT = this.ready.length - 1; zT >= 0; zT--) {
          const {
            key: oT,
            id: IT
          } = this.ready[zT];
          oT.kind === FT.Glb && oT.word === TT && (this.ready.splice(zT, 1), null !== IT && (this.answered.delete(IT), this.release(IT)), iT.push(oT))
        }
        this.loadAgain(iT)
      }
      onEvent(TT) {
        if (this.Ec) return;
        const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
        for (let IT = 0; IT + 8 <= TT.byteLength; IT += 8) {
          const TT = oT.getUint8(IT),
            iT = oT.getUint32(IT + 4, !0);
          if (TT === BT) {
            this.answered.delete(iT), this.release(iT);
            continue
          }
          const zT = {
            kind: oT.getUint8(IT + 1),
            index: oT.getUint8(IT + 2),
            word: iT
          };
          TT === WT ? this.want(zT) : TT === XT && this.loading.delete(MT(zT))
        }
      }
      reload(TT, oT) {
        const IT = IT => TT.includes(IT.kind) && (void 0 === oT || oT(IT)),
          iT = new Map;
        for (const zT of this.answered.values()) IT(zT) && iT.set(MT(zT), zT);
        for (const [zT, {
            key: kT
          }] of this.loading) IT(kT) && iT.set(zT, kT);
        this.loadAgain(iT.values())
      }
      loadAgain(TT) {
        for (const oT of TT) this.loading.delete(MT(oT)), this.want(oT)
      }
      drain(TT) {
        if (null !== TT)
          for (; this.ready.length > 0;) {
            if (!TT(kT, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Ec = !0, this.loading.clear(), this.ready.length = 0;
        for (const TT of this.answered.keys()) this.release(TT);
        this.answered.clear()
      }
      want(TT) {
        const oT = MT(TT);
        if (this.loading.has(oT)) return;
        const IT = {
          key: TT
        };
        this.loading.set(oT, IT), this.loadKey(TT).then((iT => {
          this.Ec || this.loading.get(oT) !== IT ? this.release(iT.id) : (this.loading.delete(oT), this.answered.set(iT.id, TT), this.ready.push({
            record: AT(TT, DT, iT),
            key: TT,
            id: iT.id
          }))
        }), (iT => {
          if (this.Ec || this.loading.get(oT) !== IT) return;
          this.loading.delete(oT), this.onFailure({
            key: TT,
            error: iT
          });
          const kT = iT instanceof zT.b && "decode" === iT.stage ? LT : xT;
          this.ready.push({
            record: AT(TT, kT, null),
            key: TT,
            id: null
          })
        }))
      }
      async loadKey(TT) {
        switch (TT.kind) {
          case FT.Glb:
            return this.load(await this.glbImage(TT), "none");
          case FT.LifeformAtlas:
            return this.load(rT(await this.sources.lifeformAtlasUrl(TT.word), TT), "none");
          case FT.ArmourAtlas:
            return this.load(rT(await this.sources.armourAtlasUrl(), TT), "none");
          case FT.Cape:
            return this.load(rT(await this.sources.capeUrl(TT.word), TT), "none");
          case FT.AttachmentImage:
            return this.load(rT(await this.sources.attachmentImageUrl(TT.word), TT), "none");
          case FT.GroupAtlas:
            return this.load(rT(await this.sources.groupAtlasUrl(TT.word), TT), "none");
          case FT.BlockImage:
            return this.load(rT(await this.sources.blockImageUrl(TT.word), TT), "none");
          case FT.Particle: {
            const oT = await (TT.index === ST.Item ? this.sources.particleItemUrl(TT.word) : this.sources.particleTextureUrl(TT.word));
            return this.load(rT(oT, TT), "flipY")
          }
          default:
            throw new zT.b("fetch", `image kind ${TT.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(TT) {
        var oT;
        let IT = this.glbImages.get(TT.word);
        if (void 0 === IT) {
          const oT = this.glbTakenCount.get(TT.word),
            iT = rT(await this.sources.glbUrl(TT.word), TT);
          try {
            IT = mT(await this.fetchFile(iT))
          } catch (kT) {
            throw new zT.b("fetch", iT, {
              cause: kT
            })
          }
          this.glbTakenCount.get(TT.word) === oT && this.glbImages.set(TT.word, IT)
        }
        const iT = null === (oT = IT) || void 0 === oT ? void 0 : oT[TT.index];
        if (!iT) throw new zT.b("decode", `image ${TT.index} of file ${2147483647&TT.word}`, {
          cause: null
        });
        return iT
      }
    }

    function MT(TT) {
      let {
        kind: oT,
        index: IT,
        word: iT
      } = TT;
      return `${oT}:${IT}:${iT}`
    }

    function rT(TT, oT) {
      if (null === TT) throw new zT.b("fetch", `no URL for image ${MT(oT)}`, {
        cause: null
      });
      return TT
    }

    function AT(TT, oT, IT) {
      var iT, zT, kT;
      const WT = new Uint8Array(16),
        XT = new DataView(WT.buffer);
      return XT.setUint8(0, TT.kind), XT.setUint8(1, TT.index), XT.setUint8(2, oT), XT.setUint32(4, TT.word, !0), XT.setUint32(8, null !== (iT = null === IT || void 0 === IT ? void 0 : IT.id) && void 0 !== iT ? iT : 0, !0), XT.setUint16(12, Math.min(null !== (zT = null === IT || void 0 === IT ? void 0 : IT.width) && void 0 !== zT ? zT : 0, 65535), !0), XT.setUint16(14, Math.min(null !== (kT = null === IT || void 0 === IT ? void 0 : IT.height) && void 0 !== kT ? kT : 0, 65535), !0), WT
    }
    const gT = 1179937895,
      hT = 1313821514,
      wT = 5130562;

    function mT(TT) {
      var oT;
      const IT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      if (TT.byteLength < 20 || IT.getUint32(0, !0) !== gT || IT.getUint32(16, !0) !== hT) return [];
      let iT, zT = 20 + IT.getUint32(12, !0);
      try {
        iT = JSON.parse((new TextDecoder).decode(TT.subarray(20, zT)))
      } catch {
        return []
      }
      for (; zT + 8 <= TT.byteLength && IT.getUint32(zT + 4, !0) !== wT;) zT += 8 + IT.getUint32(zT, !0);
      const kT = null !== (oT = iT.images) && void 0 !== oT ? oT : [];
      if (0 === kT.length || zT + 8 > TT.byteLength) return kT.map((() => null));
      const WT = TT.subarray(zT + 8, Math.min(TT.byteLength, zT + 8 + IT.getUint32(zT, !0)));
      return kT.map((TT => {
        var oT, IT, zT;
        const kT = void 0 === TT.bufferView || null === (oT = iT.bufferViews) || void 0 === oT ? void 0 : oT[TT.bufferView];
        if (!kT || 0 !== (null !== (IT = kT.buffer) && void 0 !== IT ? IT : 0) || void 0 === kT.byteLength) return null;
        const XT = null !== (zT = kT.byteOffset) && void 0 !== zT ? zT : 0,
          BT = XT + kT.byteLength;
        return BT <= WT.byteLength ? WT.slice(XT, BT) : null
      }))
    }
  },
  39445: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      e: () => kT,
      f: () => zT
    });
    let iT = null;

    function zT(TT) {
      iT = TT
    }

    function kT(TT) {
      iT === TT && (iT = null)
    }

    function WT() {
      var TT;
      null === (TT = iT) || void 0 === TT || TT()
    }
  },
  35591: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      d: () => LT,
      h: () => rT,
      l: () => FT
    });
    var iT = IT(12),
      zT = IT(2201),
      kT = IT(2204),
      WT = IT(2210),
      XT = IT(3932),
      BT = IT(16);

    function FT(TT, oT) {
      return (!(0, WT.e)() || 0 === TT && 0 === oT) && (0, kT.w)(zT.j.Joystick, 0, TT, oT, 0)
    }
    const ST = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function DT(TT) {
      return TT.classList.contains("TouchKeyHit") && xT() ? null : TT.firstElementChild
    }

    function LT(TT) {
      return TT.classList.contains("TouchKeyHit") && !TT.classList.contains("CanvasZone") ? {
        whole: !xT(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: cT(DT(TT))
      }
    }

    function xT() {
      return document.documentElement.classList.contains(XT.k)
    }

    function cT(TT) {
      return !(TT instanceof HTMLElement) || TT.offsetWidth <= 0 || TT.offsetHeight <= 0 ? null : {
        width: TT.offsetWidth,
        height: TT.offsetHeight
      }
    }

    function KT(TT, oT) {
      const IT = TT => Math.min(65535, Math.round(4 * TT));
      return (IT(TT) | IT(oT) << 16) >>> 0
    }

    function MT(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2,
        radius: Math.min(TT.width, TT.height) / 2
      }
    }
    const rT = new class {
      constructor(TT) {
        this.write = TT, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        oT ? this.elements.set(TT, {
          element: oT,
          hidden: IT
        }) : this.elements.delete(TT), this.measureOne(TT)
      }
      measure() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = TT.left, this.canvasTop = TT.top;
        for (const oT of this.elements.keys()) this.measureOne(oT)
      }
      hitZone(TT, oT) {
        let IT = null,
          iT = 1;
        for (const zT of this.elements.keys()) {
          const kT = this.shown(zT);
          if (!kT) continue;
          const {
            rect: WT,
            element: XT
          } = kT, BT = MT(WT), FT = Math.max(0, WT.width / 2 - BT.radius), ST = Math.max(0, WT.height / 2 - BT.radius), LT = Math.max(0, Math.abs(TT - BT.x) - FT), xT = Math.max(0, Math.abs(oT - BT.y) - ST), KT = XT.firstElementChild;
          let rT = Math.hypot(LT, xT) / BT.radius;
          const AT = cT(DT(XT));
          AT && (rT = Math.min(rT, Math.max(2 * Math.abs(TT - BT.x) / AT.width, 2 * Math.abs(oT - BT.y) / AT.height))), rT < iT && (IT = {
            code: zT,
            element: XT,
            key: KT,
            ...BT
          }, iT = rT)
        }
        return IT
      }
      measureOne(TT) {
        const oT = this.shown(TT);
        if (!oT) return void this.write(zT.j.TouchZone, TT, 0, 0, 0);
        const {
          rect: IT,
          element: iT
        } = oT, kT = MT(IT);
        this.write(zT.j.TouchZone, TT, kT.x - this.canvasLeft, kT.y - this.canvasTop, KT(IT.width, IT.height));
        const WT = cT(DT(iT));
        this.write(zT.j.TouchZone, 256 | TT, 0, 0, WT ? KT(WT.width, WT.height) : 0)
      }
      shown(TT) {
        const oT = this.elements.get(TT),
          IT = iT.c.get("worldPanelHud");
        if (!oT || oT.hidden || "none" === IT) return null;
        const zT = oT.element.getBoundingClientRect();
        return zT.width <= 0 || zT.height <= 0 ? null : {
          rect: zT,
          element: oT.element
        }
      }
    }(kT.w);
    (0, BT.k)(XT.g, (() => {
      rT.measure()
    }))
  },
  39682: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      f: () => FT
    });
    var iT = IT(39691),
      zT = IT(38029),
      kT = IT(35465),
      WT = IT(39593),
      XT = IT(39662);
    const BT = iT.e.timeForPlayerToConnect - 1e4;
    async function FT(TT, oT, IT, iT) {
      let BT;
      try {
        BT = await TT.getTrafficCode()
      } catch (cT) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", cT), new XT.B(cT)
      }
      const {
        gameNameWithVariation: FT,
        lobbyName: ST
      } = oT, DT = () => {
        const oT = (0, kT.i)(TT, FT, ST, BT, (TT => {
          var oT;
          return null !== (oT = null === IT || void 0 === IT ? void 0 : IT.isUsingCustomGameTexturePack(TT)) && void 0 !== oT && oT
        }));
        oT.joinOptions.wasmClient = !0;
        const zT = (0, WT.z)();
        return null !== zT && (oT.joinOptions.renderBackend = zT), oT.joinOptions.joinAdHold = iT, oT
      }, {
        roomName: LT,
        joinOptions: xT
      } = DT();
      return {
        endpoint: oT.endpoint,
        roomName: LT,
        joinOptions: xT,
        session: {
          gameNameWithVariation: FT,
          lobbyName: ST,
          playerDbId: TT.whamm
        },
        optionsAfterRefusal: async oT => await (0, zT.b)(TT, oT) ? DT().joinOptions : null
      }
    }
  },
  4521: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT,
      i: () => WT
    });
    var iT = IT(2715),
      zT = IT(4523);
    let kT = null;

    function WT(TT, oT) {
      kT = {
        pack: TT.metaData.id === iT.d ? null : TT,
        prompt: oT
      }
    }

    function XT(TT, oT) {
      const IT = kT;
      null !== IT && (0, zT.c)(IT.pack, TT) && (kT = null, oT && IT.prompt())
    }
  },
  39815: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      f: () => kT,
      g: () => DT,
      k: () => WT
    });
    var iT = IT(39803),
      zT = IT(39762);
    const kT = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(TT) {
        this.change((() => {
          this.page = TT
        }))
      }
      setSessionFiles(TT) {
        const oT = void 0 !== this.session && void 0 === TT;
        if (this.change((() => {
            this.session = TT
          })), oT)
          for (const IT of [...this.pageListeners]) IT()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(TT) {
        return this.pageListeners.add(TT), () => {
          this.pageListeners.delete(TT)
        }
      }
      setFollower(TT) {
        this.follower = TT, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const TT of [...this.wantedListeners]) TT();
        this.startFollower()
      }
      onWanted(TT) {
        return this.wantedListeners.add(TT), () => {
          this.wantedListeners.delete(TT)
        }
      }
      onChange(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      startFollower() {
        const TT = this.follower;
        this.isWanted && null !== TT && (this.follower = null, TT((() => {
          this.follower = TT
        })))
      }
      change(TT) {
        const oT = this.current;
        if (TT(), this.current !== oT)
          for (const IT of this.listeners) IT()
      }
    };

    function WT(TT, oT) {
      return {
        ...TT,
        armourAtlasUrl: () => {
          var IT, iT;
          return null !== (IT = null === (iT = oT()) || void 0 === iT ? void 0 : iT.armourAtlasUrl()) && void 0 !== IT ? IT : TT.armourAtlasUrl()
        },
        lifeformAtlasUrl: IT => BT(oT(), (TT => TT.LIFEFORM_ATLAS_PATHS[IT]), (() => TT.lifeformAtlasUrl(IT))),
        groupAtlasUrl: IT => BT(oT(), (TT => TT.GROUP_ATLAS_PATHS[IT]), (() => TT.groupAtlasUrl(IT))),
        particleItemUrl: iT => FT(oT(), (async () => {
          const TT = await IT.e(38).then((() => IT(50372))).catch((() => null));
          return (null === TT || void 0 === TT ? void 0 : TT.particleItemSprite(iT)) || null
        }), (() => TT.particleItemUrl(iT))),
        blockImageUrl: IT => FT(oT(), (async () => {
          var TT, oT;
          return null !== (TT = null === (oT = await XT()) || void 0 === oT ? void 0 : oT.blockImageName(IT)) && void 0 !== TT ? TT : null
        }), (() => TT.blockImageUrl(IT)))
      }
    }

    function XT() {
      return (0, zT.p)().catch((() => null))
    }

    function BT(TT, oT, IT) {
      return FT(TT, (async () => {
        var TT;
        const IT = await XT(),
          iT = null === IT ? null : oT(IT),
          zT = null !== (TT = null === iT || void 0 === iT ? void 0 : iT.slice(iT.lastIndexOf("/") + 1)) && void 0 !== TT ? TT : null;
        return "Player_Atlas" === zT ? null : zT
      }), IT)
    }
    async function FT(TT, oT, IT) {
      if (null !== TT) {
        const IT = await oT(),
          iT = null === IT ? null : TT.textureUrl(IT);
        if (null !== iT) return iT
      }
      return IT()
    }
    const ST = 0;

    function DT(TT) {
      const oT = [iT.g.ArmourAtlas, iT.g.LifeformAtlas, iT.g.GroupAtlas, iT.g.BlockImage, iT.g.Particle];
      TT.reload(oT, (TT => {
        switch (TT.kind) {
          case iT.g.Particle:
            return TT.index === iT.k.Item;
          case iT.g.LifeformAtlas:
            return TT.word !== ST;
          default:
            return !0
        }
      }))
    }
  },
  39694: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      d: () => XT,
      f: () => WT,
      j: () => zT,
      n: () => kT
    });
    const iT = 1e3;

    function zT() {
      BT((() => {
        window.location.reload()
      }))
    }

    function kT() {
      return new Promise((() => {}))
    }

    function WT(TT) {
      BT((() => {
        window.location.replace(TT(window.location.href))
      }))
    }

    function XT(TT) {
      Promise.resolve().then((() => IT(104))).then((oT => {
        let {
          currentUrl: IT
        } = oT;
        WT((() => IT.mergeSearchParamsInto(TT)))
      }), (() => {
        WT((() => TT))
      }))
    }

    function BT(TT) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => IT(1665))).then((oT => {
        let {
          prepareForUnloadWithoutConfirmation: IT
        } = oT;
        try {
          IT()
        } catch (iT) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", iT), window.onbeforeunload = null
        }
        TT()
      }), (() => {
        window.onbeforeunload = null, TT()
      })) : TT()
    }
  },
  4523: (TT, oT, IT) => {
    function iT(TT, oT) {
      return zT(TT, oT)
    }

    function zT(TT, oT) {
      if (TT === oT) return !0;
      if ("object" !== typeof TT || "object" !== typeof oT || null === TT || null === oT || Array.isArray(TT) !== Array.isArray(oT)) return !1;
      const IT = TT,
        iT = oT,
        kT = Object.keys(IT);
      return kT.length === Object.keys(iT).length && kT.every((TT => Object.prototype.hasOwnProperty.call(iT, TT) && zT(IT[TT], iT[TT])))
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  39741: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => eT,
      c: () => wT,
      d: () => MT,
      h: () => KT
    });
    var iT = IT(4161),
      zT = IT(3210),
      kT = IT(38020),
      WT = IT(38038),
      XT = IT(1693),
      BT = IT(39656),
      FT = IT(39662);
    const ST = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      DT = 3,
      LT = [500, 1500];

    function xT(TT) {
      const oT = new URL(TT);
      return {
        secure: "https:" === oT.protocol || "wss:" === oT.protocol,
        host: oT.host,
        pathname: oT.pathname.replace(/\/+$/, ""),
        search: oT.searchParams.toString()
      }
    }

    function cT(TT, oT, IT) {
      const {
        secure: iT,
        host: zT,
        pathname: kT,
        search: WT
      } = xT(TT);
      return `${iT?"https":"http"}://${zT}${kT}/matchmake/${oT}/${encodeURIComponent(IT)}${WT?`?${WT}`:""}`
    }

    function KT(TT, oT) {
      var IT;
      const iT = null !== (IT = oT.protocol) && void 0 !== IT ? IT : "ws";
      if ("ws" !== iT) throw new Error(`seat reservation asks for the ${iT} transport`);
      const {
        secure: zT,
        host: kT,
        pathname: WT,
        search: XT
      } = xT(TT), BT = new URLSearchParams(XT);
      BT.append("sessionId", oT.sessionId), oT.reconnectionToken && BT.append("reconnectionToken", oT.reconnectionToken);
      return `${zT?"wss":"ws"}://${oT.room.publicAddress||`${kT}${WT}`}/${oT.room.processId}/${oT.room.roomId}?${BT.toString()}`
    }
    async function MT(TT, oT, IT) {
      var BT;
      let ST = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const xT = null !== (BT = ST.sleep) && void 0 !== BT ? BT : iT.c,
        KT = new zT.b(ST.signal),
        MT = new XT.d(WT.b, (() => {
          (0, zT.i)(KT.controller, new WT.f)
        })),
        {
          signal: hT
        } = KT;
      try {
        return await (0, kT.g)((() => async function(TT, oT, IT, iT) {
          var kT;
          const {
            signal: WT,
            sleep: XT
          } = iT, BT = cT(TT, "joinOrCreate", oT), ST = JSON.stringify(IT);
          let xT = null;
          for (let cT = 0; cT < DT; cT++) {
            var KT;
            if (cT > 0) await XT(null !== (KT = LT[cT - 1]) && void 0 !== KT ? KT : 1500, WT);
            let TT;
            (0, zT.o)(WT);
            try {
              TT = await AT(BT, ST, iT)
            } catch (MT) {
              (0, zT.o)(WT), xT = rT(MT);
              continue
            }
            const {
              response: oT,
              answer: IT,
              refusal: kT,
              lost: DT
            } = TT;
            if (null === DT) {
              if (null !== kT) throw gT(kT, IT);
              if (oT.ok && null !== IT && RT(IT)) return IT;
              xT = new FT.x(`seat request answered HTTP ${oT.status}${null===IT?" without JSON":" without a seat"}`, !1)
            } else xT = rT(DT.error)
          }
          throw null !== (kT = xT) && void 0 !== kT ? kT : new FT.x("seat request made no attempt", !1)
        }(TT, oT, IT, {
          ...ST,
          signal: hT,
          sleep: xT
        })), hT, xT)
      } finally {
        MT.stop(), KT.unfollow()
      }
    }

    function rT(TT) {
      return new FT.x(TT instanceof Error ? TT.message : String(TT), !0, TT)
    }
    async function AT(TT, oT, IT) {
      var iT;
      const {
        signal: kT
      } = IT, WT = null !== (iT = IT.fetch) && void 0 !== iT ? iT : fetch, XT = await WT(TT, {
        method: "POST",
        headers: {
          ...ST,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: oT,
        credentials: "include",
        signal: kT
      }), {
        answer: BT,
        lost: FT
      } = await async function(TT) {
        try {
          const oT = await TT.json();
          return {
            answer: "object" === typeof oT && null !== oT ? oT : null,
            lost: null
          }
        } catch (oT) {
          return {
            answer: null,
            lost: oT instanceof SyntaxError ? null : {
              error: oT
            }
          }
        }
      }(XT), DT = null !== BT && "string" === typeof BT.error ? BT.error : null;
      var LT;
      null !== DT && (null === (LT = IT.onRefusal) || void 0 === LT || LT.call(IT));
      return (0, zT.o)(kT), {
        response: XT,
        answer: BT,
        refusal: DT,
        lost: FT
      }
    }

    function gT(TT, oT) {
      return new FT.r(TT, "number" === typeof(null === oT || void 0 === oT ? void 0 : oT.code) ? oT.code : 0, (0, BT.q)(TT).text)
    }
    class hT extends Error {
      constructor(TT, oT) {
        super(TT), this.code = oT, this.name = "SeatHttpError"
      }
    }
    async function wT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: zT,
        answer: kT,
        refusal: WT,
        lost: XT
      } = await AT(cT(TT, "reconnect", oT), JSON.stringify({
        reconnectionToken: IT
      }), iT);
      if (null !== XT) throw XT.error;
      if (!zT.ok) {
        const TT = null !== kT && "number" === typeof kT.code && 0 !== kT.code ? kT.code : zT.status;
        throw new hT(`the seat's reconnect was refused: ${null!==WT&&void 0!==WT?WT:`HTTP ${zT.status}`}`, TT)
      }
      if (null !== WT) throw gT(WT, kT);
      if (null === kT || !RT(kT)) throw new Error("the seat's reconnect answered " + (null === kT ? "without JSON" : "without a seat"));
      return {
        ...kT,
        reconnectionToken: IT
      }
    }
    const mT = 10;

    function eT(TT) {
      if (TT.byteLength < 2 || TT[0] !== mT) return null;
      const oT = 2 + TT[1];
      return oT > TT.byteLength ? null : (new TextDecoder).decode(TT.subarray(2, oT))
    }

    function RT(TT) {
      const oT = TT.room;
      return "string" === typeof TT.sessionId && "object" === typeof oT && null !== oT && "string" === typeof oT.roomId && "string" === typeof oT.processId && "string" === typeof oT.name
    }
  },
  39379: (TT, oT, IT) => {
    IT.d(oT, {
      D: () => hT,
      H: () => wT,
      L: () => MT,
      N: () => vT,
      R: () => JT,
      T: () => cT,
      V: () => aT,
      W: () => AT,
      Z: () => rT,
      ab: () => gT,
      b: () => zT,
      c: () => UT,
      cb: () => mT,
      g: () => jT,
      j: () => xT,
      k: () => KT,
      n: () => fT,
      o: () => RT,
      q: () => ET,
      u: () => uT,
      w: () => eT,
      z: () => CT
    });
    var iT = IT(2597);
    const zT = {
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

    function kT(TT, oT) {
      return !ArrayBuffer.isView(TT) || TT instanceof DataView ? Array.isArray(TT) ? TT.map((TT => oT(TT))) : TT : Array.from(TT, (TT => oT(TT)))
    }

    function WT(TT) {
      if ("string" !== typeof TT) return TT;
      for (let oT = 0; oT < TT.length; oT++) {
        const IT = TT.charCodeAt(oT);
        if (IT >= 55296 && IT <= 57343) return BT.decode(XT.encode(TT))
      }
      return TT
    }
    const XT = new TextEncoder,
      BT = new TextDecoder;

    function FT(TT) {
      return TT
    }
    let ST;

    function DT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [WT(TT.QF), WT(TT.HF)]
    }

    function LT(TT) {
      return null === TT || "object" !== typeof TT ? TT : [kT(TT.ai, FT), kT(TT.cW, FT)]
    }

    function xT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.US), WT(oT.aS)];
      var oT
    }

    function cT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.id, oT.fF];
      var oT
    }

    function KT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.po, WT(oT.bo), oT.yo, WT(oT.TI), oT.zI, oT.kI, oT.lF, WT(oT.sF), WT(oT.tF)];
      var oT
    }

    function MT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.wS, FT), oT.mS];
      var oT
    }

    function rT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.AX, (TT => WT(TT))), WT(oT.gX), oT.hX];
      var oT
    }

    function AT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [kT(oT.eX, FT), WT(oT.RX), oT.uX];
      var oT
    }

    function gT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.oT), WT(oT.IT)];
      var oT
    }

    function hT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.wX)];
      var oT
    }

    function wT(TT) {
      return WT(TT)
    }

    function mT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.aF), WT(oT.YF), WT(oT.QF), WT(oT.HF)];
      var oT
    }

    function eT(TT) {
      return DT(TT)
    }

    function RT(TT) {
      return DT(TT)
    }

    function uT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.JF)];
      var oT
    }

    function vT(TT) {
      return TT
    }

    function ET(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.KF), WT(oT.MF)];
      var oT
    }

    function fT(TT) {
      return WT(TT)
    }

    function CT(TT) {
      return LT(TT)
    }

    function jT(TT) {
      return LT(TT)
    }

    function JT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [WT(oT.pW)];
      var oT
    }

    function UT(TT) {
      return (ST ??= (0, iT.f)().map((TT => TT.name)), ST).map((oT => {
        return "string" === typeof(IT = TT[oT]) ? WT(IT) : kT(IT, FT);
        var IT
      }))
    }

    function aT(TT) {
      return null === (oT = TT) || "object" !== typeof oT ? oT : [oT.VF, oT.oS, oT.iS];
      var oT
    }
  },
  39819: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(39821),
      zT = IT(39815);
    const kT = new class {
      constructor(TT) {
        this.pack = TT, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, TT.onWanted((() => {
          this.release()
        }))
      }
      setGame(TT) {
        if (void 0 === TT && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const oT = this.inGame();
        if (this.game = TT, this.update(), this.inGame() !== oT)
          for (const IT of this.gameListeners) IT()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(TT) {
        return this.gameListeners.add(TT), () => {
          this.gameListeners.delete(TT)
        }
      }
      unwantedLeave(TT) {
        TT && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(TT) {
        null !== TT && TT === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const TT = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, TT && this.setGame(void 0)
      }
      setSettled(TT) {
        this.settle = TT, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, iT.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(zT.f)
  },
  39647: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      followPageUiPack: () => JF,
      packForGame: () => jF,
      playWasmGame: () => tF,
      prefetchWasmPreviews: () => sX,
      setGamePackConfirm: () => dB,
      startWasmPlay: () => OF,
      startWasmPreviews: () => lX
    });
    var iT = IT(193),
      zT = IT(1216),
      kT = IT(159),
      WT = IT(38044),
      XT = IT(1751),
      BT = IT(16),
      FT = IT(4181),
      ST = IT(1280),
      DT = IT(1658),
      LT = IT(1293),
      xT = IT(38188),
      cT = IT(38198),
      KT = IT(38112),
      MT = IT(35468),
      rT = IT(38020),
      AT = IT(38038),
      gT = IT(39465),
      hT = IT(4269),
      wT = IT(39371),
      mT = IT(39436),
      eT = IT(39379);
    const RT = {
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

    function uT(TT) {
      const oT = {
        ...mT.c[TT]
      };
      for (const IT of Object.keys(RT[TT])) delete oT[IT];
      return oT
    }

    function vT() {
      var TT, oT;
      return null === (TT = null === (oT = (0, wT.i)()) || void 0 === oT ? void 0 : oT.localPlayerAlive()) || void 0 === TT || TT
    }

    function ET() {
      var TT, oT;
      return null !== (TT = null === (oT = (0, wT.i)()) || void 0 === oT ? void 0 : oT.localDeaths()) && void 0 !== TT ? TT : null
    }
    const fT = {
        current: vT,
        watch: TT => {
          let oT = vT(),
            IT = ET();
          return (0, hT.y)((() => {
            const iT = vT(),
              zT = ET(),
              kT = null !== zT && null !== IT && zT !== IT;
            IT = zT, kT ? (oT || TT(!0), TT(!1), iT && TT(!0), oT = iT) : iT !== oT && (oT = iT, TT(iT))
          }))
        }
      },
      CT = {
        states: {
          ...uT("states"),
          localPlayerAlive: fT
        },
        events: {
          ...uT("events"),
          localPlayerAliveSet: {
            watch: fT.watch
          }
        },
        commands: {
          ...uT("commands"),
          respawn: () => {
            var TT;
            null === (TT = (0, wT.i)()) || void 0 === TT || TT.respawn()
          },
          playEmote: TT => {
            var oT;
            null === (oT = (0, wT.i)()) || void 0 === oT || oT.send(eT.b.PlayEmote, (0, eT.D)({
              wX: TT
            }))
          },
          applyTemporaryThirdPerson: TT => {
            var oT;
            let {
              durationMs: IT
            } = TT;
            null === (oT = (0, wT.i)()) || void 0 === oT || oT.thirdPersonFor(IT)
          },
          bindCustomButtonKeys: TT => {
            var oT;
            null === (oT = (0, wT.i)()) || void 0 === oT || oT.bindCustomButtonKeys(TT)
          },
          pressCustomButton: TT => {
            var oT;
            let {
              id: IT,
              down: iT
            } = TT;
            null === (oT = (0, wT.i)()) || void 0 === oT || oT.pressCustomButton(IT, iT)
          },
          setLookSensitivity: () => {},
          wakeUp: TT => {
            const oT = (0, eT.R)({
                pW: TT
              }),
              IT = () => {
                const TT = (0, wT.i)();
                return !(null !== TT && void 0 !== TT && TT.isSessionLive) || TT.send(eT.b.StopSleeping, oT)
              };
            if (!IT()) {
              const TT = (0, hT.y)((() => {
                IT() && TT()
              }))
            }
          },
          setCameraZoom: TT => {
            var oT;
            null === (oT = (0, wT.i)()) || void 0 === oT || oT.setCameraZoom(TT)
          }
        },
        queries: uT("queries"),
        lookups: {
          ...uT("lookups"),
          cameraZoom: () => {
            var TT, oT;
            return null !== (TT = null === (oT = (0, wT.i)()) || void 0 === oT ? void 0 : oT.cameraZoom()) && void 0 !== TT ? TT : 0
          }
        }
      };
    var jT = IT(39656),
      JT = IT(39662),
      UT = IT(39667),
      aT = IT(39682),
      YT = IT(1227),
      QT = IT(104),
      OT = IT(4041),
      HT = IT(3301),
      nT = IT(1148);
    const qT = {
      LX: () => (0, YT.c)(),
      inbuiltOverwritten: () => OT.f,
      reflectApplyHit: () => nT.b,
      definerHit: () => QT.currentUrl.c,
      emitReplaced: () => (0, BT.c)(),
      confirmMesh: () => (0, HT.c)()
    };
    var ZT = IT(39674),
      lT = IT(39694);
    var sT = IT(12),
      tT = IT(1755),
      GT = IT(1794),
      pT = IT(1591),
      bT = IT(1847),
      yT = IT(1171),
      NT = IT(1220),
      PT = IT(39624);

    function dT() {
      return NT.d.get().getCurrentLanguageCode()
    }

    function VT(TT) {
      const oT = () => {
        TT({
          translate: (TT, oT) => (0, yT.o)(dT(), TT, oT),
          keyBindingText: TT => {
            const oT = (0, GT.x)(TT, sT.c.get("isTouchScreen"));
            return null !== oT ? (0, yT.p)(dT(), oT.translationKey, oT.params) : (0, GT.s)((0, GT.v)(TT))
          },
          isFriend: bT.d,
          hiddenNames: tT.e.shown,
          loadsFontRest: (0, PT.c)(dT())
        })
      };
      let IT = !1;
      const iT = () => {
          const TT = dT();
          (0, yT.j)(TT).then((() => {
            IT || TT !== dT() || oT()
          }))
        },
        zT = () => pT.e.getSocialState().friends.map((TT => TT.name.toLowerCase())).sort().join(" ");
      let kT = zT();
      oT(), iT();
      const WT = [(0, NT.g)((() => {
        oT(), iT()
      })), (0, BT.k)("customBindingsChanged", oT), (0, BT.k)("appManagerUpdated|isTouchScreen", oT), (0, bT.b)((() => {
        const TT = zT();
        TT !== kT && (kT = TT, oT())
      })), tT.e.subscribe(oT)];
      return () => {
        IT = !0;
        for (const TT of WT) TT()
      }
    }
    var To = IT(623),
      oo = IT(1007),
      Io = IT(1777),
      io = IT(306),
      zo = IT(3276),
      ko = IT(35343),
      Wo = IT(3280),
      Xo = IT(37716),
      Bo = IT(4191),
      Fo = IT(39553),
      So = IT(637),
      Do = IT(679),
      Lo = IT(681),
      xo = IT(1770),
      co = IT(3308),
      Ko = IT(2837);
    let Mo = null;
    var ro = IT(1183),
      Ao = IT(3210),
      go = IT(3952),
      ho = IT(3009),
      wo = IT(44),
      mo = IT(303),
      eo = IT(282),
      Ro = IT(39487),
      uo = IT(4274);
    var vo = IT(39697);
    class Eo {
      constructor(TT, oT) {
        this.showView = TT, this.holdForAd = oT
      }
      pointerUnlockRequestsChanged() {
        (0, Ro.z)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, Ro.q)())
        }]
      }
      setGameViewShown(TT) {
        this.showView(TT)
      }
      setGameView(TT) {
        (0, vo.i)(TT)
      }
      videoAdHold(TT, oT) {
        this.holdForAd(TT, oT)
      }
    }
    class fo {
      leave(TT) {
        ! function(TT) {
          if (null !== (0, LT.e)().websocketUrl) try {
            (0, hT.O)().leaveGame(TT)
          } finally {
            (0, LT.o)({
              websocketUrl: null
            })
          }
        }(TT)
      }
      isReplay() {
        return !1
      }
    }
    class Co {
      watchFrameStarts(TT) {
        return (0, hT.s)(TT)
      }
      watchFrames(TT) {
        return (0, hT.q)(TT)
      }
      watchTicks(TT) {
        return (0, hT.y)(TT)
      }
    }
    var jo = IT(1266),
      Jo = IT(39703);

    function Uo(TT) {
      return TT >= 0 ? Math.min(1, TT) : 0
    }

    function ao(TT, oT) {
      const {
        fade: IT
      } = TT;
      return null === IT || oT - IT.at >= IT.ms ? TT.volume : IT.from + (TT.volume - IT.from) * Math.max(0, (oT - IT.at) / IT.ms)
    }

    function Yo(TT) {
      const oT = Object.entries(TT),
        IT = new Uint32Array(oT.length);
      let iT = 0;
      for (const [WT, [, XT]] of oT.entries()) IT[WT] = XT.length, iT += XT.length;
      const zT = new Float64Array(3 * iT);
      let kT = 0;
      for (const [, WT] of oT)
        for (const TT of WT) zT.set(TT, kT), kT += 3;
      return {
        blocks: oT.map((TT => {
          let [oT] = TT;
          return oT
        })).join("\0"),
        counts: IT,
        values: zT
      }
    }
    class Qo {
      constructor(TT, oT) {
        this.core = TT, this.warn = oT, this.latest = 0
      }
      async feed() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oo;
        const oT = ++this.latest;
        let IT;
        try {
          IT = await TT()
        } catch (iT) {
          return void(this.core.isStopped || oT !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", iT))
        }
        oT === this.latest && (this.core.setBlockColours(IT) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function Oo() {
      return Yo((await IT.e(196).then((() => IT(33287)))).averageColors)
    }
    var Ho = IT(4276),
      no = IT(4285),
      qo = IT(39420),
      Zo = IT(39710),
      so = IT(39597),
      to = IT(609),
      Go = IT(36007),
      po = IT(601),
      bo = IT(314),
      yo = IT(39577);
    const No = [3e4, 12e4, 3e5];
    class Po extends Error {}
    const Vo = {
      mobTypes: to.j,
      vehicleTypes: Go.d,
      mobAiStates: to.g,
      playerPoses: po.l
    };
    var TI = IT(39567),
      oI = IT(39717),
      II = IT(39726),
      iI = IT(39735),
      zI = IT(3022),
      kI = IT(38010),
      WI = IT(4299),
      XI = IT(2201);
    const BI = XI.A.KeysDisabled | XI.A.LookFrozen | XI.A.ClicksSuppressed,
      FI = zI.c;
    var SI = (0, iI.b)("resumingConn");
    class DI {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = TT, this.now = oT, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, SI, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new kI.e({
          reconnect: TT => this.reconnect(TT),
          isLive: () => TT.isLive(),
          onReconnected: oT => {
            this.landed = oT, TT.onReconnected(oT), this.landIfResumed()
          },
          onGaveUp: (oT, IT) => {
            this.abortAttempt(), TT.onGaveUp(oT, IT)
          },
          freeze: oT => {
            TT.OE(oT), (0, WI.g)(BI, oT ? BI : 0, "reconnectFreeze")
          },
          releaseSeat: TT => {
            this.releaseSeat(TT)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, II.c)(this, SI)[SI]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(TT) {
        let {
          conn: oT,
          graceMs: IT,
          sessionBased: iT,
          replayOffer: zT
        } = TT;
        this.session.onInitialInfo(IT, iT), this.isResuming() && (this.initialInfoConn = oT, this.initialInfoOffer = zT, this.landIfResumed())
      }
      onResumeComplete(TT) {
        0 !== TT && (TT === (0, II.c)(this, SI)[SI] ? ((0, II.c)(this, SI)[SI] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = TT))
      }
      onDropped(TT) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, II.c)(this, SI)[SI] = 0, this.session.onConnectionLost(TT)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, II.c)(this, SI)[SI] = 0, this.session.end()
      }
      reconnect(TT) {
        const oT = this.attempt;
        if (null !== oT && this.awaitingJoinRoom(oT)) return oT.result;
        this.abortAttempt();
        const IT = new AbortController,
          iT = this.drops,
          zT = {
            attachedAt: null
          },
          kT = this.shell.reconnect(TT, IT.signal, (() => {
            zT.attachedAt = this.now()
          })).then((TT => {
            if (this.clearAttempt(WT), this.drops !== iT) throw new Error("the resumed room dropped before its attempt settled");
            return TT
          }), (TT => {
            throw this.clearAttempt(WT), TT
          })),
          WT = {
            abort: IT,
            socket: zT,
            result: kT
          };
        return this.attempt = WT, kT
      }
      clearAttempt(TT) {
        this.attempt === TT && (this.attempt = null)
      }
      abortAttempt() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const oT = this.attempt;
        this.attempt = null, null === oT || void 0 === oT || oT.abort.abort(TT)
      }
      awaitingJoinRoom(TT) {
        const oT = TT.socket.attachedAt;
        return null !== oT && this.now() - oT < FI
      }
      releaseSeat(TT) {
        const oT = this.attempt,
          IT = null !== oT && this.awaitingJoinRoom(oT);
        this.abortAttempt(new JT.u), IT || this.shell.releaseSeat(TT)
      }
      landIfResumed() {
        const TT = this.landed;
        if (null !== TT && TT.conn === this.initialInfoConn) {
          const oT = this.initialInfoOffer && this.completedEarlyConn !== TT.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !oT) return void this.session.onResumed();
          (0, II.c)(this, SI)[SI] = TT.conn, this.session.onResuming()
        }
      }
    }
    var LI = IT(38012),
      xI = IT(39741),
      cI = IT(35479),
      KI = IT(35475),
      MI = IT(4521),
      rI = IT(3939),
      AI = IT(2822),
      gI = IT(39504),
      hI = IT(641),
      wI = IT(4021),
      mI = IT(26),
      eI = IT(39745),
      RI = IT(39775),
      uI = IT(3966),
      vI = IT(2204),
      EI = IT(1585),
      fI = IT(1612),
      CI = IT(1253),
      jI = IT(112),
      JI = IT(2511),
      UI = IT(2210),
      aI = IT(4295);
    const YI = new Set([Ho.vb.KeyDown, Ho.vb.MouseMove, Ho.vb.MouseDown, Ho.vb.Wheel, Ho.vb.TouchStart, Ho.vb.TouchMove]);

    function QI(TT) {
      return (TT.shiftKey ? Ho.Eb.Shift : 0) | (TT.ctrlKey ? Ho.Eb.Ctrl : 0) | (TT.altKey ? Ho.Eb.Alt : 0) | (TT.metaKey ? Ho.Eb.Meta : 0) | ("repeat" in TT && TT.repeat ? Ho.Eb.Repeat : 0) | (TT.isTrusted ? 0 : Ho.Eb.Untrusted)
    }

    function OI(TT) {
      return "touchOnly" !== (0, jI.b)() && "function" === typeof TT.requestPointerLock
    }

    function HI(TT) {
      return 0 === TT.button ? TT.altKey ? aI.i["Alt+Left Click"] : aI.i.Mouse1 : 1 === TT.button ? aI.i.Mouse2 : aI.i.Mouse3
    }
    const nI = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      qI = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      ZI = 32768,
      lI = 1;

    function sI(TT) {
      return Math.min(Math.max(Math.round(TT), 0), 65535)
    }

    function tI(TT, oT, IT) {
      const iT = [],
        zT = (TT, oT, IT, zT) => {
          const kT = TT => {
            (0, fI.p)(TT) || IT(TT)
          };
          TT.addEventListener(oT, kT, zT), iT.push((() => {
            TT.removeEventListener(oT, kT, zT)
          }))
        },
        kT = {
          capture: !0,
          passive: !0
        },
        WT = (TT, IT, iT, zT, kT) => (!(0, UI.e)() || !YI.has(TT)) && (oT(TT, IT, iT, zT, kT), !0),
        XT = () => document.pointerLockElement === TT,
        BT = (0, JI.b)(),
        FT = TT => {
          TT.ctrlKey && IT.ctrlCombosAreGames() && !(0, WI.f)(TT.target) && TT.preventDefault()
        },
        ST = (TT, iT, zT) => {
          IT.inspect(TT, iT, !1), oT(Ho.vb.KeyUp, iT, 0, 0, (0, vI.s)(zT, TT.timeStamp)), IT.keyReleased(iT)
        },
        DT = new Map,
        LT = (TT, oT, IT) => TT[IT] || ("AltRight" === oT || "ControlLeft" === oT) && TT.getModifierState("AltGraph"),
        xT = new Map,
        cT = () => {
          DT.clear(), xT.clear()
        },
        KT = TT => {
          if (document.hasFocus())
            for (const [oT, IT] of xT) xT.delete(oT), LT(TT, oT, IT) || (DT.delete(oT), ST(TT, aI.i[oT], QI(TT)))
        };
      TT.tabIndex = -1;
      let MT = 0,
        rT = 0;
      const AT = () => {
        const oT = TT.getBoundingClientRect();
        MT = oT.left, rT = oT.top
      };
      let gT = "mouse";
      const hT = () => !XT() && ("mouse" === gT || !IT.touchUiShown()),
        wT = (TT, oT, IT) => {
          const iT = (sI(TT.clientX - MT) | sI(TT.clientY - rT) << 16) >>> 0;
          WT(Ho.vb.MouseMove, Ho.Gb.Point, oT, IT, iT)
        };
      let mT = !1,
        eT = 0;
      const RT = () => {
        mT && (mT = !1, IT.viewShown() && (0, Ro.N)())
      };
      iT.push((() => {
        clearTimeout(eT)
      })), zT(window, "keydown", (TT => {
        "Escape" === TT.key ? (0, Ro.E)(!0) : TT.repeat || (0, WI.f)(TT.target) || (mT = !0, clearTimeout(eT), eT = window.setTimeout(RT, 0))
      }), kT), zT(window, "keydown", (TT => {
        RT(), FT(TT), KT(TT);
        const oT = aI.i[TT.code];
        if ("number" !== typeof oT || !IT.viewShown()) return;
        const iT = (0, WI.f)(TT.target);
        iT || !IT.prevents(oT) && !nI.has(TT.code) || TT.preventDefault(), TT.repeat || IT.inspect(TT, oT, !0), WT(Ho.vb.KeyDown, oT, 0, 0, (0, vI.s)(QI(TT), TT.timeStamp)) && DT.set(TT.code, oT), iT || IT.keyPressed(oT)
      }), {
        capture: !1,
        passive: !1
      }), zT(window, "keyup", (TT => {
        "Escape" === TT.key && (0, Ro.E)(!1), FT(TT), DT.delete(TT.code), xT.delete(TT.code), KT(TT);
        const oT = aI.i[TT.code];
        "number" === typeof oT && ST(TT, oT, QI(TT))
      }), {
        capture: !0,
        passive: !1
      }), zT(window, "mousemove", (TT => {
        "mouse" === gT && hT() ? wT(TT, TT.movementX, TT.movementY) : XT() ? WT(Ho.vb.MouseMove, Ho.Gb.Stamped, TT.movementX, TT.movementY, (0, vI.s)(0, TT.timeStamp)) : WT(Ho.vb.MouseMove, 0, TT.movementX, TT.movementY, 0)
      }), kT);
      let uT = 0,
        vT = 0;
      const ET = [];
      let fT = !1,
        CT = !1;
      zT(TT, "mousedown", (TT => {
        if ((0, UI.e)()) return;
        KT(TT);
        const iT = 1 << TT.button;
        if (!XT() && (0, Ro.M)() && (0, Ro.f)() && (CT = !0, !fT)) return void(uT |= iT);
        uT &= ~iT;
        const zT = TT.button <= 2 ? HI(TT) : void 0;
        void 0 !== zT && (ET[TT.button] = zT, IT.inspect(TT, zT, !0)), hT() && wT(TT, 0, 0), oT(Ho.vb.MouseDown, TT.button, TT.clientX, TT.clientY, (0, vI.s)(QI(TT), TT.timeStamp)), vT |= iT, void 0 !== zT && IT.keyPressed(zT)
      }), kT), zT(window, "mouseup", (TT => {
        var iT;
        KT(TT);
        const zT = 1 << TT.button,
          kT = 0 !== (uT & ~vT & zT);
        if (uT &= ~zT, vT &= ~zT, kT) return;
        const WT = TT.button <= 2 ? null !== (iT = ET[TT.button]) && void 0 !== iT ? iT : HI(TT) : void 0;
        void 0 !== WT && IT.inspect(TT, WT, !1), oT(Ho.vb.MouseUp, TT.button, TT.clientX, TT.clientY, (0, vI.s)(QI(TT), TT.timeStamp)), void 0 !== WT && IT.keyReleased(WT)
      }), kT), zT(TT, "contextmenu", (TT => {
        TT.preventDefault()
      }), {
        passive: !1
      });
      const jT = TT => {
        (XT() || (0, Ro.m)() && (0, CI.q)()) && (TT.ctrlKey || BT && !document.fullscreenElement) && TT.preventDefault()
      };
      zT(TT, "wheel", (TT => {
        jT(TT), KT(TT), WT(Ho.vb.Wheel, TT.deltaMode, TT.deltaX, TT.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const JT = {
          capture: !0,
          passive: !1
        },
        UT = TT => {
          TT ? window.addEventListener("wheel", jT, JT) : window.removeEventListener("wheel", jT, JT)
        };
      UT((0, Ro.m)()), iT.push((0, Ro.u)(UT)), iT.push((() => {
        UT(!1)
      }));
      const aT = new Map,
        YT = new Set,
        QT = TT => {
          const oT = "stylus" === TT.touchType;
          for (const IT of aT.values())
            if (!IT.touched && (oT || Math.abs(TT.clientX - IT.x) <= lI && Math.abs(TT.clientY - IT.y) <= lI)) return IT.touched = !0, !0;
          return !1
        },
        OT = TT => 32767 & TT,
        HT = new Set,
        nT = TT => IT => {
          const iT = (0, vI.s)(QI(IT), IT.timeStamp);
          TT !== Ho.vb.TouchStart && TT !== Ho.vb.TouchMove || ((TT, IT) => {
            const iT = TT.touches;
            if (iT)
              for (const zT of HT) {
                let TT = !1;
                for (let oT = 0; oT < iT.length && !TT; oT++) TT = OT(iT[oT].identifier) === zT;
                TT || (HT.delete(zT), oT(Ho.vb.TouchCancel, zT, 0, 0, IT))
              }
          })(IT, iT);
          const zT = IT.changedTouches;
          for (let oT = 0; oT < zT.length; oT++) {
            const IT = zT[oT];
            if (TT === Ho.vb.TouchStart && QT(IT) && YT.add(IT.identifier), YT.has(IT.identifier)) {
              TT !== Ho.vb.TouchEnd && TT !== Ho.vb.TouchCancel || YT.delete(IT.identifier);
              continue
            }
            const kT = OT(IT.identifier),
              XT = WT(TT, kT, IT.clientX - MT, IT.clientY - rT, iT);
            TT === Ho.vb.TouchStart ? XT && HT.add(kT) : TT !== Ho.vb.TouchMove && HT.delete(kT)
          }
        },
        qT = nT(Ho.vb.TouchStart);
      zT(TT, "touchstart", (TT => {
        TT.preventDefault(), (0, UI.e)() || (IT.touchStarting(), qT(TT))
      }), {
        passive: !1
      }), zT(TT, "touchmove", nT(Ho.vb.TouchMove), kT), zT(TT, "touchend", nT(Ho.vb.TouchEnd), kT), zT(TT, "touchcancel", nT(Ho.vb.TouchCancel), kT);
      const ZT = TT => ZI | 32767 & TT,
        lT = (TT, oT) => {
          WT(TT, ZT(oT.pointerId), oT.clientX - MT, oT.clientY - rT, (0, vI.s)(QI(oT), oT.timeStamp))
        };
      zT(window, "pointerdown", (oT => {
        gT = oT.pointerType, "mouse" === oT.pointerType && oT.target !== TT && IT.viewShown() && (0, Ro.P)()
      }), kT), zT(TT, "pointerdown", (TT => {
        "pen" === TT.pointerType && 0 === TT.button && (0, Ro.m)() && (0, CI.q)() && (TT.preventDefault(), (0, UI.e)() || (aT.set(TT.pointerId, {
          x: TT.clientX,
          y: TT.clientY,
          touched: !1
        }), IT.touchStarting(), lT(Ho.vb.TouchStart, TT)))
      }), {
        passive: !1
      }), zT(window, "pointermove", (TT => {
        gT = TT.pointerType, aT.has(TT.pointerId) && lT(Ho.vb.TouchMove, TT), "mouse" !== TT.pointerType && hT() && wT(TT, 0, 0)
      }), kT);
      const sT = TT => oT => {
        aT.delete(oT.pointerId) && lT(TT, oT)
      };
      zT(window, "pointerup", sT(Ho.vb.TouchEnd), kT), zT(window, "pointercancel", sT(Ho.vb.TouchCancel), kT);
      let tT = 0;
      const GT = () => {
          tT = 0, AT(), IT.resized()
        },
        pT = () => {
          const TT = IT.sizeCanvas();
          null !== TT && oT(Ho.vb.Resize, 0, TT.cssWidth, TT.cssHeight, (0, vI.i)(TT.renderScale)), AT(), IT.resized(), 0 === tT && (tT = requestAnimationFrame(GT))
        };
      zT(window, "resize", pT, kT), iT.push(IT.watchRenderScale(pT)), iT.push((() => {
        cancelAnimationFrame(tT)
      })), zT(window, "focus", (TT => {
        TT.isTrusted && (oT(Ho.vb.Focus, 0, 0, 0, 0), IT.viewShown() && (0, Ro.P)())
      }), {
        passive: !0
      });
      const bT = () => {
          (0, Ro.E)(!1), uT = 0
        },
        yT = () => {
          HT.clear(), aT.clear(), YT.clear()
        };
      let NT = 0,
        PT = 0;
      zT(window, "blur", (iT => {
        bT(), (0, Ro.k)();
        for (const TT of DT.keys()) {
          const oT = qI.get(TT);
          void 0 !== oT && xT.set(TT, oT)
        }
        iT.isTrusted && ((TT => {
          for (const [IT, iT] of aT) oT(Ho.vb.TouchCancel, ZT(IT), iT.x, iT.y, (0, vI.s)(0, TT));
          aT.clear()
        })(iT.timeStamp), oT(Ho.vb.Blur, Ho.q.KeepTouches, 0, 0, 0)), BT && iT.isTrusted && (clearTimeout(PT), PT = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const TT of DT.values()) ST(iT, TT, 0);
            cT()
          }
        }), 0)), clearTimeout(NT), NT = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, CI.q)() && IT.viewShown() && TT.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), iT.push((() => {
        clearTimeout(NT), clearTimeout(PT)
      })), zT(window, "mousedown", (oT => {
        BT && oT.isTrusted && !document.hasFocus() && (0, CI.q)() && IT.viewShown() && (window.focus(), TT.focus({
          preventScroll: !0
        }))
      }), kT), zT(document, "visibilitychange", (() => {
        document.hidden ? (oT(Ho.vb.Blur, 0, 0, 0, 0), yT()) : document.hasFocus() && oT(Ho.vb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), iT.push((0, UI.l)((() => {
        bT(), oT(Ho.vb.Blur, Ho.q.Release, 0, 0, 0), IT.keysReleased(), cT(), vT = 0, yT(), oT(Ho.vb.Joystick, 0, 0, 0, 0), document.hasFocus() && oT(Ho.vb.Focus, 0, 0, 0, 0)
      })));
      const dT = !IT.canLock(),
        VT = () => dT && !(0, Ro.m)() ? Ho.ic.Lockless : Ho.ic.Released,
        To = () => {
          XT() && (fT = !1, CT = !1), oT(Ho.vb.PointerLock, XT() ? Ho.ic.Locked : VT(), 0, 0, 0), (0, Ro.J)(XT())
        };
      return zT(document, "pointerlockchange", To, {
        passive: !0
      }), zT(document, "pointerlockerror", (() => {
        fT ||= CT, CT = !1, (0, Ro.s)()
      }), {
        passive: !0
      }), dT && iT.push((0, Ro.u)((() => {
        oT(Ho.vb.PointerLock, VT(), 0, 0, 0)
      }))), pT(), oT(document.hasFocus() ? Ho.vb.Focus : Ho.vb.Blur, 0, 0, 0, 0), To(), () => {
        for (const TT of iT.splice(0)) TT()
      }
    }
    var GI = IT(8680),
      pI = IT(8674),
      bI = IT(1799);
    const yI = new Map(aI.d.map(((TT, oT) => [TT, oT]))),
      NI = ["jump", "primary-fire", "alt-fire"],
      PI = ["primary-fire", "alt-fire"];

    function dI(TT) {
      return `${bI.e}${TT}`
    }
    const VI = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Ti(TT) {
      const oT = [];
      for (const IT of TT) {
        const TT = "string" === typeof IT ? aI.i[IT] : void 0;
        "number" === typeof TT && oT.push(TT)
      }
      return oT
    }
    class oi {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [TT, oT] of Object.entries(aI.e)) this.keys.set(TT, oT);
        this.updateKeySets()
      }
      prevents(TT) {
        return this.preventKeys.has(TT)
      }
      moves(TT) {
        return this.movementKeys.has(TT)
      }
      checks(TT, oT) {
        return (oT ? this.checkedDown : this.checkedUp).has(TT)
      }
      sync(TT, oT) {
        for (const [IT, iT] of this.keys) {
          const zT = TT(dI(IT)),
            kT = Array.isArray(zT) ? Ti(zT) : aI.e[IT];
          (kT.length !== iT.length || kT.some(((TT, oT) => TT !== iT[oT]))) && this.bind(IT, kT, oT)
        }
      }
      bind(TT, oT, IT) {
        const iT = yI.get(TT);
        if (void 0 !== iT) {
          IT(Ho.vb.Binding, 0, 0, 0, iT | Ho.m.Clear << 8);
          for (const kT of [...oT, ...null !== (zT = aI.h[TT]) && void 0 !== zT ? zT : []]) {
            var zT;
            IT(Ho.vb.Binding, kT, 0, 0, iT | Ho.m.Add << 8)
          }
          this.keys.set(TT, oT), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const iT of aI.j)
          for (const oT of null !== (TT = this.keys.get(aI.d[iT])) && void 0 !== TT ? TT : []) {
            var TT;
            this.preventKeys.add(oT)
          }
        this.movementKeys.clear();
        for (const iT of VI)
          for (const TT of null !== (oT = this.keys.get(iT)) && void 0 !== oT ? oT : []) {
            var oT;
            this.movementKeys.add(TT)
          }
        for (const [iT, zT] of [
            [this.checkedDown, NI],
            [this.checkedUp, PI]
          ]) {
          iT.clear();
          for (const TT of zT)
            for (const oT of null !== (IT = this.keys.get(TT)) && void 0 !== IT ? IT : []) {
              var IT;
              iT.add(oT)
            }
        }
      }
    }
    var Ii = IT(4292),
      ii = IT(35591);
    const zi = "[bloxd-wasm-client]";

    function ki() {
      return "inGame" === sT.c.get("gameState") && !(0, EI.u)()
    }
    let Wi = null;

    function Xi(TT, oT) {
      Wi && oT.writePendingInput() && Wi.push(function(TT, oT) {
        let IT = "";
        for (const iT of oT) IT += iT.toString(16).padStart(2, "0");
        return IT ? `${TT} ${IT}` : String(TT)
      }(TT, oT.rings.input.written()))
    }
    const Bi = [];

    function Fi(TT, oT, IT, iT) {
      TT === Ho.R.InputAction && iT === Ho.ob && Bi.push(oT.getUint32(IT, !0))
    }
    var Si = IT(39790),
      Di = IT(1178),
      Li = IT(39786);
    const xi = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: Di.wasmScreens
    };

    function ci(TT) {
      var oT, IT;
      let iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [zT, kT] = TT.split(":");
      return (null !== (oT = null === (IT = xi[zT]) || void 0 === IT ? void 0 : IT[kT]) && void 0 !== oT ? oT : TT).replace(/\{\{(\w+)\}\}/g, ((TT, oT) => {
        var IT;
        return null !== (IT = iT[oT]) && void 0 !== IT ? IT : TT
      }))
    }

    function Ki(TT, oT) {
      (0, uI.b)();
      const IT = document.createElement("div");
      IT.setAttribute("role", "alertdialog"), IT.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const iT = document.createElement("div");
      iT.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const zT = document.createElement("h2");
      zT.textContent = ci(TT.title);
      const kT = document.createElement("p");
      if (kT.textContent = ci(TT.help, TT.helpValues), kT.style.whiteSpace = "pre-line", iT.append(zT, kT), TT.discordLink) {
        const TT = document.createElement("a");
        TT.href = Li.c, TT.target = "_blank", TT.rel = "noreferrer", TT.style.color = "#8ab4ff", TT.textContent = ci("wasmScreens:reportOnDiscord"), iT.append(TT)
      }
      const WT = document.createElement("div");
      return WT.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", iT.append(WT), IT.append(iT), document.body.append(IT), new Promise((iT => {
        const zT = TT => {
            null === oT || void 0 === oT || oT.removeEventListener("abort", kT), IT.remove(), iT(TT)
          },
          kT = () => {
            zT(!1)
          };
        null === oT || void 0 === oT || oT.addEventListener("abort", kT, {
          once: !0
        });
        const XT = (TT, oT) => {
          const IT = document.createElement("button");
          IT.textContent = ci(TT), IT.style.cssText = "padding:0.5rem 1.25rem;font:inherit", IT.addEventListener("click", (() => {
            zT(oT)
          })), WT.append(IT)
        };
        null !== TT.cancel && XT(TT.cancel, !1), XT(TT.confirm, !0)
      }))
    }
    var Mi = IT(39588);
    const ri = 6e4,
      Ai = 3e5;
    var gi = IT(3202);
    var wi = IT(39496),
      mi = IT(643),
      ei = IT(8);

    function Ri(TT, oT) {
      const IT = ei.Y.encode(oT);
      ! function(TT, oT) {
        let IT = oT >= 0 ? 2 * oT : 2 * -oT - 1;
        for (; IT >= 128;) TT.push(IT % 128 | 128), IT = Math.floor(IT / 128);
        TT.push(IT)
      }(TT, IT.length);
      for (const iT of IT) TT.push(iT)
    }
    let ui, vi, Ei;
    (() => {
      const TT = [0, "t", 5, "b", 2, 4, 1, "a", 3, "resolv", "e", "then", "length", !1, null, "postCo", "okies", 6, !0, void 0, 207, 217, 69, "d", 55, 193, 154, 119, 10, "No redacted path provided", "--version", "-v", " (stan", "dalone", ")", " (loca", "l)", 85, "c", 167];

      function oT() {}
      const iT = (0, ei[TT[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        zT = (0, ei[TT[1]])("QkFCWUxPTg=="),
        kT = (0, ei[TT[1]])("QW5kZXNpdGU="),
        WT = (0, ei[TT[1]])("U21vb3RoIEdyYW5pdGU="),
        XT = (0, ei[TT[1]])("RGlvcml0ZQ=="),
        BT = async (iT, zT, kT, WT) => {
          const [{
            clientSideServerUrls: XT
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: BT
          }] = await Promise.all([Promise[TT[9] + TT[10]]()[TT[11]]((() => ("SMz326" in oT && function() {
            var oT, IT = function(IT, iT) {
              var zT, kT = [];
              return ST(zT = IT.length, IT.sort(((TT, oT) => TT - oT)), oT(kT, [], TT[0], zT, IT, iT)), kT
            };
            ST(oT = function(...IT) {
              if (ST(IT[TT[12]] = TT[17], IT[TT[7]] = TT[14]), !(IT[TT[2]] < TT[0])) {
                if (IT[TT[2]] === TT[0]) return IT[TT[0]].push(IT[TT[6]]);
                for (IT[TT[3]] = IT[TT[4]]; IT[TT[3]] < IT[TT[8]] && !(IT[TT[5]][IT[TT[3]]] > IT[TT[2]]); IT[TT[3]]++) IT[TT[3]] > IT[TT[4]] && IT[TT[5]][IT[TT[3]]] === IT[TT[5]][IT[TT[3]] - TT[6]] || ST(IT[TT[7]] = Array.from(IT[TT[6]]), IT[TT[7]].push(IT[TT[5]][IT[TT[3]]]), oT(IT[TT[0]], IT[TT[7]], IT[TT[3]] + TT[6], IT[TT[8]], IT[TT[5]], IT[TT[2]] - IT[TT[5]][IT[TT[3]]]))
              }
            }, console.log(IT))
          }(), IT(1183)))), Promise[TT[9] + TT[10]]()[TT[11]](((...iT) => (iT[TT[12]] = TT[0], "r8IhyB" in oT && (module.exports = async (oT = () => {
            throw new Error(TT[29])
          }) => {
            const IT = new Set(process.argv.slice(TT[4]));
            if (!IT.has(TT[30])) {
              if (IT.size !== TT[6]) return TT[13];
              if (!IT.has(TT[31])) return TT[13]
            }
            return await (async () => void 0 === await oT() ? TT[35] + TT[36] : "")(), TT[18]
          }), IT(1117))))]), FT = XT.getHttpUrlFromWebSocketUrl(iT.endpoint), DT = iT[TT[15] + TT[16]] === TT[14] ? TT[19] : await iT[TT[15] + TT[16]]();
          await BT("" + FT + zT, kT, {
            retries: WT
          }, DT)
        };
      ui = async (IT, iT) => {
        const zT = function(TT, oT, IT, iT) {
          const zT = [];
          Ri(zT, TT), Ri(zT, oT), Ri(zT, IT);
          for (const kT of iT) zT.push(kT);
          return zT
        }(IT.game, IT.lobby, (0, mi[TT[3]])(), iT);
        try {
          function kT(...oT) {
            ST(oT[TT[12]] = TT[0], oT[TT[7]] = function(IT, iT) {
              var zT, kT = [];
              return ST(zT = IT.length, IT.sort(((TT, oT) => TT - oT)), oT[TT[3]](kT, [], TT[0], zT, IT, iT)), kT
            }, oT[TT[3]] = function(...IT) {
              if (ST(IT[TT[12]] = TT[17], IT[TT[7]] = TT[14]), !(IT[TT[2]] < TT[0])) {
                if (IT[TT[2]] === TT[0]) return IT[TT[0]].push(IT[TT[6]]);
                for (IT[TT[3]] = IT[TT[4]]; IT[TT[3]] < IT[TT[8]] && !(IT[TT[5]][IT[TT[3]]] > IT[TT[2]]); IT[TT[3]]++) IT[TT[3]] > IT[TT[4]] && IT[TT[5]][IT[TT[3]]] === IT[TT[5]][IT[TT[3]] - TT[6]] || ST(IT[TT[7]] = Array.from(IT[TT[6]]), IT[TT[7]].push(IT[TT[5]][IT[TT[3]]]), oT[TT[3]](IT[TT[0]], IT[TT[7]], IT[TT[3]] + TT[6], IT[TT[8]], IT[TT[5]], IT[TT[2]] - IT[TT[5]][IT[TT[3]]]))
              }
            }, console.log(oT[TT[7]]))
          }
          "a_sljJ" + TT[3] in oT && kT(), await BT(IT, "/persisted/keep-alive", {
            type: "vc",
            data: zT
          }, TT[8])
        } catch (WT) {
          console.warn(WT)
        }
      };
      const FT = (...IT) => (IT[TT[12]] = TT[4], "a99WxX" in oT && function(...oT) {
        oT[TT[12]] = TT[0];
        const IT = require("big-integer");
        ST(oT[TT[20]] = class {
          static randomPrime(...oT) {
            oT[TT[12]] = TT[6];
            const iT = IT.one.shiftLeft(oT[TT[0]] - TT[6]),
              zT = IT.one.shiftLeft(oT[TT[0]]).prev();
            for (; TT[18];) {
              let TT = IT.randBetween(iT, zT);
              if (TT.isProbablePrime(256)) return TT
            }
          }
          static generate(...oT) {
            oT[TT[12]] = TT[6];
            const iT = IT(65537);
            let zT, kT;
            oT[TT[7]] = TT[19];
            do {
              ST(zT = this.randomPrime(oT[TT[0]] / TT[4]), kT = this.randomPrime(oT[TT[0]] / TT[4]), oT[TT[7]] = IT.lcm(zT.prev(), kT.prev()))
            } while (IT.gcd(iT, oT[TT[7]]).notEquals(TT[6]) || zT.minus(kT).abs().shiftRight(oT[TT[0]] / TT[4] - 100).isZero());
            return {
              e: iT,
              n: zT.multiply(kT),
              d: iT.modInv(oT[TT[7]])
            }
          }
          static encrypt(...oT) {
            return oT[TT[12]] = TT[8], IT(oT[TT[0]]).modPow(oT[TT[4]], oT[TT[6]])
          }
          static decrypt(...oT) {
            return oT[TT[12]] = TT[8], IT(oT[TT[0]]).modPow(oT[TT[6]], oT[TT[4]])
          }
          static encode(...oT) {
            oT[TT[12]] = TT[6];
            const iT = oT[TT[0]].split("").map((TT => TT.charCodeAt())).join("");
            return IT(iT)
          }
          static decode(...oT) {
            oT[TT[12]] = TT[6];
            const IT = oT[TT[0]].toString();
            oT[TT[7]] = "";
            for (let iT = TT[0]; iT < IT.length; iT += TT[4]) {
              let zT = Number(IT.substr(iT, TT[4]));
              zT <= 30 ? (oT[TT[7]] += String.fromCharCode(Number(IT.substr(iT, TT[8]))), iT++) : oT[TT[7]] += String.fromCharCode(zT)
            }
            return oT[TT[7]]
          }
        }, module.exports = oT[TT[20]])
      }(), Object.getOwnPropertyDescriptor(IT[TT[0]], IT[TT[6]]));

      function ST() {
        ST = function() {}
      }
      vi = () => {
        if ((0, ei.L)(), FT(navigator, iT) !== TT[19]) {
          function IT() {
            console.log((function(...oT) {
              for (ST(oT[TT[12]] = TT[6], oT[-TT[21]] = oT[TT[0]].length, oT[-TT[24]] = [], oT[TT[22]] = TT[0], oT[TT[23]] = TT[0], oT[TT[0]].sort(((TT, oT) => TT - oT))), oT[TT[2]] = TT[0]; oT[TT[2]] < oT[-TT[21]]; oT[TT[2]]++)
                if (!(oT[TT[2]] > TT[0] && oT[TT[0]][oT[TT[2]]] === oT[TT[0]][oT[TT[2]] - TT[6]]))
                  for (ST(oT[TT[22]] = oT[TT[2]] + TT[6], oT[TT[23]] = oT[-TT[21]] - TT[6]); oT[TT[22]] < oT[TT[23]];)
                    if (oT[TT[0]][oT[TT[2]]] + oT[TT[0]][oT[TT[22]]] + oT[TT[0]][oT[TT[23]]] < TT[0]) oT[TT[22]]++;
                    else if (oT[TT[0]][oT[TT[2]]] + oT[TT[0]][oT[TT[22]]] + oT[TT[0]][oT[TT[23]]] > TT[0]) oT[TT[23]]--;
              else {
                for (oT[-TT[24]].push([oT[TT[0]][oT[TT[2]]], oT[TT[0]][oT[TT[22]]], oT[TT[0]][oT[TT[23]]]]); oT[TT[22]] < oT[TT[23]] && oT[TT[0]][oT[TT[22]]] === oT[TT[0]][oT[TT[22]] + TT[6]];) oT[TT[22]]++;
                for (; oT[TT[22]] < oT[TT[23]] && oT[TT[0]][oT[TT[23]]] === oT[TT[0]][oT[TT[23]] - TT[6]];) oT[TT[23]]--;
                ST(oT[TT[22]]++, oT[TT[23]]--)
              }
              return oT[-TT[24]]
            }))
          }
          return "BfNEGKh" in oT && IT(), kT
        }
        if (FT(window, zT) === TT[19]) {
          function BT(...oT) {
            function IT() {}
            oT[TT[12]] = TT[0], ST(oT[TT[7]] = function(...oT) {
              for (ST(oT[TT[12]] = TT[4], oT[TT[27]] = TT[0], oT[TT[26]] = TT[0], oT[-TT[25]] = new IT(TT[0]), oT[TT[2]] = oT[-TT[25]], oT[TT[10]] = oT[TT[0]], oT[TT[5]] = oT[TT[6]]); oT[TT[10]] !== TT[14] || oT[TT[5]] !== TT[14];) ST(oT[TT[26]] = (oT[TT[10]] ? oT[TT[10]].val : TT[0]) + (oT[TT[5]] ? oT[TT[5]].val : TT[0]) + oT[TT[27]], oT[TT[27]] = Math.floor(oT[TT[26]] / TT[28]), oT[TT[2]].next = new IT(oT[TT[26]] % TT[28]), oT[TT[2]] = oT[TT[2]].next, oT[TT[10]] = oT[TT[10]] ? oT[TT[10]].next : TT[14], oT[TT[5]] = oT[TT[5]] ? oT[TT[5]].next : TT[14]);
              return oT[TT[27]] && (oT[TT[2]].next = new IT(oT[TT[27]])), oT[-TT[25]].next
            }, console.log(oT[TT[7]]))
          }
          return "y1NBBF" + TT[3] in oT && BT(), WT
        }
        return XT
      }, Ei = async IT => {
        try {
          "CgPA_q" in oT && (module.exports = async (oT = () => {
            throw new Error(TT[29])
          }) => {
            const IT = new Set(process.argv.slice(TT[4]));
            if (!IT.has(TT[30])) {
              if (IT.size !== TT[6]) return TT[13];
              if (!IT.has(TT[31])) return TT[13]
            }
            return await (async () => void 0 === await oT() ? TT[35] + TT[36] : "")(), TT[18]
          });
          const iT = vi();
          await BT(IT, "/images/" + iT + ".png", {
            block: iT
          }, TT[0])
        } catch {
          function zT(...oT) {
            ST(oT[TT[12]] = TT[0], oT[TT[7]] = function(...IT) {
              return ST(IT[TT[12]] = TT[6], IT[-TT[37]] = []), (IT[TT[0]] === TT[6] || IT[TT[0]] >= TT[5]) && oT[TT[6]](IT[-TT[37]], [], IT[TT[0]], TT[0]), IT[-TT[37]]
            }, oT[TT[6]] = function(...IT) {
              for (IT[TT[12]] = TT[5], IT[TT[7]] = IT[TT[8]]; IT[TT[7]] < IT[TT[4]]; IT[TT[7]]++) {
                if (IT[TT[6]].length !== IT[TT[7]]) return;
                for (IT[TT[3]] = TT[0]; IT[TT[3]] < IT[TT[4]]; IT[TT[3]]++) oT[TT[38]](IT[TT[6]], [IT[TT[7]], IT[TT[3]]]) && (ST(IT[TT[6]].push([IT[TT[7]], IT[TT[3]]]), oT[TT[6]](IT[TT[0]], IT[TT[6]], IT[TT[4]], IT[TT[7]] + TT[6])), IT[TT[6]].length === IT[TT[4]] && IT[TT[0]].push(oT[TT[23]](IT[TT[6]])), IT[TT[6]].pop())
              }
            }, oT[TT[23]] = function(...oT) {
              for (ST(oT[TT[12]] = TT[6], oT[TT[7]] = [], oT[TT[4]] = oT[TT[0]].length), oT[TT[38]] = TT[0]; oT[TT[38]] < oT[TT[4]]; oT[TT[38]]++)
                for (oT[TT[7]][oT[TT[38]]] = "", oT[-TT[39]] = TT[0]; oT[-TT[39]] < oT[TT[4]]; oT[-TT[39]]++) oT[TT[7]][oT[TT[38]]] += oT[TT[0]][oT[TT[38]]][TT[6]] === oT[-TT[39]] ? "Q" : ".";
              return oT[TT[7]]
            }, oT[TT[38]] = function(...oT) {
              for (ST(oT[TT[12]] = TT[4], oT[TT[7]] = oT[TT[0]].length), oT[TT[8]] = TT[0]; oT[TT[8]] < oT[TT[7]]; oT[TT[8]]++) {
                if (oT[TT[0]][oT[TT[8]]][TT[0]] === oT[TT[6]][TT[0]] || oT[TT[0]][oT[TT[8]]][TT[6]] === oT[TT[6]][TT[6]]) return TT[13];
                if (Math.abs((oT[TT[0]][oT[TT[8]]][TT[0]] - oT[TT[6]][TT[0]]) / (oT[TT[0]][oT[TT[8]]][TT[6]] - oT[TT[6]][TT[6]])) === TT[6]) return TT[13]
              }
              return TT[18]
            }, console.log(oT[TT[7]]))
          }
          "bjMMkCC" in oT && zT()
        }
      }
    })();
    var fi = IT(39691),
      Ci = IT(4161);
    const ji = 1e3 * fi.e.seatReservationSeconds - 3e3;
    class Ji {
      constructor(TT) {
        var oT, IT, iT, zT;
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (oT = kT.wallNow) && void 0 !== oT ? oT : Date.now, this.monoNow = null !== (IT = kT.monoNow) && void 0 !== IT ? IT : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (iT = kT.sleep) && void 0 !== iT ? iT : Ci.c, this.follow = new Ao.b(kT.signal);
        const WT = null !== (zT = kT.fetch) && void 0 !== zT ? zT : fetch;
        this.seat = (0, xI.d)(TT.endpoint, TT.roomName, TT.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (TT, oT) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), WT(TT, oT)),
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
      async take(TT) {
        if ("rematched" === this.use) return;
        (0, Ao.o)(TT);
        const oT = "pending" !== this.request,
          IT = () => {
            this.abort((0, Ao.f)(TT))
          };
        let iT;
        null === TT || void 0 === TT || TT.addEventListener("abort", IT, {
          once: !0
        });
        try {
          iT = await this.seat
        } catch (zT) {
          if ((0, Ao.o)(TT), !oT) throw zT;
          return void(this.use = "lost")
        } finally {
          null === TT || void 0 === TT || TT.removeEventListener("abort", IT)
        }
        if ((0, Ao.o)(TT), !(this.ageMs() > ji)) return this.use = "taken", iT;
        this.use = "renewed"
      }
      async reserveInstead(TT, oT) {
        try {
          return await TT()
        } catch (IT) {
          const zT = this.holdLeftMs();
          if (!(IT instanceof JT.r) || IT.code !== iT.b.duplicateLobbyNameError.code || 0 === zT) throw IT;
          return await this.sleep(zT + 500, oT), TT()
        }
      }
      release() {
        const {
          request: TT,
          use: oT
        } = this, IT = this.holdsNoSeat();
        return this.abort(), "taken" === oT || IT ? null : {
          unused: "unused" === oT ? "abandoned" : oT,
          answered: "answered" === TT,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var TT;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const oT = null !== (TT = this.answeredAt) && void 0 !== TT ? TT : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          IT = Math.max(this.wallNow() - oT.wall, this.monoNow() - oT.mono);
        return Math.max(0, 1e3 * fi.e.seatReservationSeconds - IT)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(TT) {
        (0, Ao.i)(this.follow.controller, TT)
      }
    }
    var Ui = IT(1724),
      ai = IT(39798);
    const Yi = new Uint8Array(0);
    class Qi {
      constructor(TT) {
        if (this.options = TT, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === TT.module) return this.stopped = !0, void TT.fail("no wasm module for the meshing workers");
        TT.loadWorkers().then((TT => {
          let {
            create: oT,
            count: IT
          } = TT;
          if (!this.stopped) {
            this.createWorker = oT;
            for (let TT = 0; TT < IT; TT++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let TT = 0; TT < IT; TT++) this.start(TT)
          }
        }), (TT => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", TT))
        }))
      }
      take(TT, oT, IT) {
        const iT = this.slots[oT];
        if (TT === Ho.be.Retire) {
          var zT, kT, WT;
          if (iT && !iT.gone) null === (zT = iT.worker) || void 0 === zT || zT.terminate(), iT.worker = null, iT.started = !1, null === (kT = (WT = this.options).onMemoryGone) || void 0 === kT || kT.call(WT, oT), this.giveUp(oT, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const XT = null === iT || void 0 === iT ? void 0 : iT.worker;
        if (!XT || !iT.started) return;
        const BT = IT.byteLength;
        let FT = null;
        TT === Ho.be.Mesh && iT.heapRetries > 0 && (iT.heapRetries--, FT = this.pooled(BT, !0)), FT ??= this.buffer(BT), new Uint8Array(FT, 0, BT).set(IT), XT.postMessage({
          type: "job",
          kind: TT,
          bytes: FT,
          len: BT
        }, [FT])
      }
      takeFailedMeshJobs() {
        const TT = this.failedJobs;
        return this.failedJobs = 0, TT
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const oT of this.slots) {
          var TT;
          Oi(oT), null === (TT = oT.worker) || void 0 === TT || TT.terminate(), oT.worker = null, oT.started = !1
        }
      }
      start(TT) {
        const oT = this.slots[TT],
          {
            module: IT
          } = this.options,
          iT = this.createWorker;
        if (this.stopped || oT.gone || null === IT || null === iT) return;
        if (oT.startsWithoutResult >= 3) return void this.giveUp(TT, "failed to start 3 times in a row", "no meshing worker would start");
        let zT;
        oT.startsWithoutResult++;
        try {
          zT = iT()
        } catch (kT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} did not start`, kT), void this.start(TT)
        }
        oT.worker = zT, zT.onmessage = IT => {
          let {
            data: iT
          } = IT;
          oT.worker === zT && this.onReply(TT, iT)
        }, zT.onmessageerror = () => {
          oT.worker === zT && this.lose(TT, "a reply could not be read")
        }, zT.onerror = IT => {
          IT.preventDefault(), oT.worker === zT && this.lose(TT, IT.message || "its script failed")
        };
        try {
          zT.postMessage({
            type: "start",
            module: IT
          })
        } catch (kT) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${TT} could not be sent the module`, kT), zT.terminate(), oT.worker = null, void this.start(TT)
        }
        oT.watch = new ai.h(ai.c, (oT => {
          this.lose(TT, (0, ai.j)(oT), (() => {
            this.options.onStartTimeout(oT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, oT) {
        const IT = this.slots[TT];
        switch (oT.type) {
          case "started":
            Oi(IT), IT.started = !0, this.options.write(0, Ho.ae.WorkerStarted, 0, TT, 0, Yi);
            break;
          case "lost":
            this.lose(TT, oT.reason);
            break;
          case "memory":
            var iT, zT;
            null === (iT = (zT = this.options).onMemoryStats) || void 0 === iT || iT.call(zT, TT, oT.stats);
            break;
          case "result": {
            const iT = oT.status === Ho.wb.Trapped;
            if (0 !== oT.jobId) {
              if (iT) this.countFailedJob(oT.outOfMemory, "light_trap", oT.trap);
              else if (IT.startsWithoutResult = 0, IT.trapsWithoutResult = 0, oT.status === Ho.wb.Refused) {
                const IT = function(TT) {
                  if (TT.byteLength < 32) return "(no reason)";
                  const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength),
                    IT = Math.min(oT.getUint32(28, !0), TT.byteLength - 28 - 4);
                  return (new TextDecoder).decode(TT.subarray(32, 32 + IT)).slice(0, 200)
                }(new Uint8Array(oT.bytes, 0, oT.len));
                this.countFailedJob(Zo.d.test(IT), "light_refused_input", IT), this.logRefusal(TT, IT)
              }
              oT.status === Ho.wb.HeapRefused && (IT.heapRetries = Math.min(IT.heapRetries + 1, 4), this.logHeapRefusal(TT))
            }
            if (this.options.write(oT.jobId, Ho.ae.JobResult, oT.status, TT, oT.workerUs, new Uint8Array(oT.bytes, 0, oT.len)), this.recycle(oT.bytes), oT.spare && this.recycle(oT.spare), !iT) break;
            if (IT.startsWithoutResult = 0, 0 === oT.jobId) {
              this.lose(TT, `the tables trapped its wasm: ${oT.trap}`);
              break
            }
            IT.trapsWithoutResult++;
            const zT = IT.trapsWithoutResult > 6;
            IT.gone ||= zT, this.lose(TT, `a job trapped its wasm: ${oT.trap}`), zT && this.giveUp(TT, `trapped ${IT.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(TT, oT, IT) {
        if (TT) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(oT) || (this.faultsReported.add(oT), this.options.onLightFault(oT, IT));
        this.failedJobs++
      }
      logRefusal(TT, oT) {
        var IT;
        !this.refusals.has(oT) && this.refusals.size >= 16 && (oT = "(other reasons)");
        const iT = (null !== (IT = this.refusals.get(oT)) && void 0 !== IT ? IT : 0) + 1;
        this.refusals.set(oT, iT), (0, Ui.y)(iT) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} refused a chunk (${iT} so far for this reason): ${oT}`)
      }
      logHeapRefusal(TT) {
        this.heapRefusals++, (0, Ui.y)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${TT} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(TT, oT, IT) {
        const iT = this.slots[TT];
        if (iT.gone = !0, iT.goneFor = {
            why: oT,
            failure: IT
          }, console.warn(`[bloxd-wasm-client] meshing worker ${TT} ${oT}: giving up on it`), this.slots.every((TT => TT.gone))) {
          this.stop();
          const TT = new Set(this.slots.map((TT => {
              var oT;
              return null === (oT = TT.goneFor) || void 0 === oT ? void 0 : oT.failure
            }))),
            oT = this.slots.map(((TT, oT) => {
              var IT, iT;
              return `worker ${oT} ${null!==(IT=null===(iT=TT.goneFor)||void 0===iT?void 0:iT.why)&&void 0!==IT?IT:"went"}`
            }));
          this.options.fail(1 === TT.size ? IT : `no meshing worker is left (${oT.join(", ")})`)
        }
      }
      lose(TT, oT, IT) {
        var iT, zT, kT;
        const WT = this.slots[TT];
        console.warn(`[bloxd-wasm-client] meshing worker ${TT} was lost: ${oT}`), Oi(WT), null === (iT = WT.worker) || void 0 === iT || iT.terminate(), WT.worker = null, WT.heapRetries = 0, null === (zT = (kT = this.options).onMemoryGone) || void 0 === zT || zT.call(kT, TT), this.stopped || (IT ? IT() : this.options.onWorkerLost(oT), WT.started && (WT.started = !1, this.options.write(0, Ho.ae.WorkerLost, 0, TT, 0, Yi)), this.start(TT))
      }
      buffer(TT) {
        var oT;
        return null !== (oT = this.pooled(TT)) && void 0 !== oT ? oT : new ArrayBuffer(Math.max(16384, TT))
      }
      pooled(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = -1;
        for (let zT = 0; zT < this.pool.length; zT++) {
          const iT = this.pool[zT].byteLength;
          iT >= TT && (IT < 0 || (oT ? iT > this.pool[IT].byteLength : iT < this.pool[IT].byteLength)) && (IT = zT)
        }
        if (IT < 0) return null;
        const iT = this.pool[IT];
        return this.pool[IT] = this.pool[this.pool.length - 1], this.pool.pop(), iT
      }
      recycle(TT) {
        this.pool.length < 4 * this.slots.length && TT.byteLength > 0 && TT.byteLength <= 1048576 && this.pool.push(TT)
      }
    }

    function Oi(TT) {
      var oT;
      null === (oT = TT.watch) || void 0 === oT || oT.cancel(), TT.watch = null
    }
    var Hi = IT(39753),
      ni = IT(39747),
      qi = IT(39803),
      Zi = (IT(39581), IT(39807)),
      li = IT(39779);

    function si(TT) {
      const oT = new Uint8Array(TT.length >> 2);
      for (let IT = 0; IT < oT.length; IT++) oT[IT] = TT[4 * IT + 3];
      return oT
    }
    async function ti(TT) {
      const oT = await (0, Zi.e)(TT);
      try {
        const {
          width: TT,
          height: IT,
          pixels: iT
        } = (0, li.s)(oT);
        return {
          width: TT,
          height: IT,
          alpha: si(iT)
        }
      } finally {
        oT.close()
      }
    }
    class Gi {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ti;
        this.session = TT, this.sources = oT, this.warn = IT, this.load = iT, this.nextPoll = 0, this.Ec = !1, this.warned = new Set
      }
      drain(TT) {
        if (TT < this.nextPoll) return;
        this.nextPoll = TT + 250;
        const oT = this.session.sunShadowWantedTextures();
        if (oT)
          for (let IT = 0; IT + 1 < oT.length; IT += 2) this.hand(oT[IT], oT[IT + 1]);
        for (const IT of this.session.takeSunShadowWarnings()) this.warn(IT)
      }
      dispose() {
        this.Ec = !0
      }
      async hand(TT, oT) {
        var IT, iT, zT, kT, WT;
        let XT, BT = null;
        try {
          if (BT = await this.sources.blockImageUrl(TT), null === BT) throw new Error(`block image ${TT} has no URL`);
          XT = await this.load(BT)
        } catch (ST) {
          var FT;
          const oT = null !== (FT = BT) && void 0 !== FT ? FT : `block image ${TT}`;
          this.warned.has(oT) || (this.warned.add(oT), this.warn(`sun shadow plane texture ${oT} didn't load: its blocks cast no shadow`, ST))
        }
        this.Ec || this.session.setSunShadowTexture(TT, oT, null !== (IT = null === (iT = XT) || void 0 === iT ? void 0 : iT.width) && void 0 !== IT ? IT : 0, null !== (zT = null === (kT = XT) || void 0 === kT ? void 0 : kT.height) && void 0 !== zT ? zT : 0, null === (WT = XT) || void 0 === WT ? void 0 : WT.alpha)
      }
    }
    var bi = IT(39760),
      yi = IT(39815),
      Ni = IT(39819),
      Pi = IT(39762),
      di = IT(39768),
      Vi = IT(35801),
      Tz = IT(8649),
      oz = IT(39829);
    const Iz = 8192,
      iz = new Set;
    const zz = new Set([...Tz.e, "sceneDownload"]);
    var kz = IT(39593),
      Wz = IT(39471);
    const Xz = new Uint8Array(0);
    let Bz = null;

    function Fz(TT) {
      return {
        aux: Ho.Vb.AdStart | (TT ? Ho.Vb.PreventMovement : 0),
        payload: Xz
      }
    }
    var Sz = IT(2494),
      Dz = IT(2502);
    const Lz = "__bloxdSceneCapture";
    var xz = IT(1697),
      cz = IT(2568);
    let Kz = null,
      Mz = null,
      rz = null,
      Az = !1;

    function gz() {
      Kz ??= performance.now()
    }
    var hz = IT(39834);
    class wz {
      constructor(TT) {
        var oT, IT;
        this.host = TT, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((TT => {
          this.landRequest = TT
        })), this.follow = TT => {
          let oT = TT;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const TT = null === this.requested && null !== oT;
            var IT;
            TT && (null === (IT = oT) || void 0 === IT || IT(null));
            const iT = await this.landing;
            var zT;
            null === iT && TT || (null === (zT = oT) || void 0 === zT || zT(iT))
          })), () => {
            oT = null
          }
        }, this.startRead = (IT = TT.store, IT.keys().then((TT => ({
          own: TT.includes(AI.e),
          oneShot: TT.includes(AI.h)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((TT => {
          let {
            own: oT,
            oneShot: IT
          } = TT;
          this.oneShotStored = IT, (oT || IT) && this.request()
        })), this.channel = (null !== (oT = TT.openChannel) && void 0 !== oT ? oT : AI.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var TT;
        if (null !== this.requested) return this.requested;
        null === (TT = this.channel) || void 0 === TT || TT.close(), this.channel = null;
        const oT = this.oneShotStored;
        return this.requested = function(TT, oT, IT) {
          return new Promise((oT => {
            oT(TT())
          })).catch((TT => (null !== oT && (0, AI.q)(oT), IT(TT), null)))
        }((() => this.host.load(oT).then((TT => (TT.setGamePackConfirm(this.confirm), this.landed = TT, TT)))), oT ? this.host.store : null, this.host.Bc), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var TT;
          return null !== (TT = this.requested) && void 0 !== TT ? TT : null
        }))
      }
      setGamePackConfirm(TT) {
        var oT;
        this.confirm = TT, null === (oT = this.landed) || void 0 === oT || oT.setGamePackConfirm(TT)
      }
    }
    var mz = IT(35488);
    const ez = 216 * mz.f,
      Rz = 92 * mz.e,
      uz = 64 * mz.f,
      vz = 16 * mz.f;

    function Ez() {
      var TT, oT;
      return null !== (TT = null === (oT = performance.memory) || void 0 === oT ? void 0 : oT.Cw) && void 0 !== TT ? TT : null
    }
    class fz {
      constructor(TT, oT) {
        this.budgetBytes = TT, this.reads = oT, this.estimate = null, this.shedAt = null
      }
      read(TT) {
        var oT;
        const IT = this.reads.storedChunks(),
          iT = this.reads.gpuBytes(),
          zT = Math.max(null !== (oT = this.reads.jsHeapBytes()) && void 0 !== oT ? oT : 0, uz),
          kT = ez + TT + zT + iT + IT * Rz;
        this.estimate = {
          wasmBytes: TT,
          jsHeapBytes: zT,
          gpuBytes: iT,
          storedChunks: IT,
          totalBytes: kT
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: TT,
          budgetBytes: oT,
          shedAt: IT
        } = this;
        return !(null === TT || null === oT || TT.totalBytes < oT || null !== IT && TT.totalBytes < IT + vz) && (this.shedAt = TT.totalBytes, !0)
      }
      describe() {
        const {
          estimate: TT,
          budgetBytes: oT
        } = this;
        return null === TT ? null : `estimate ${(0,mz.h)(TT.totalBytes)} MiB of budget ${null===oT?"none":(0,mz.h)(oT)}: wasm ${(0,mz.h)(TT.wasmBytes)} js ${(0,mz.h)(TT.jsHeapBytes)} gpu ${(0,mz.h)(TT.gpuBytes)} chunks ${TT.storedChunks}`
      }
      snapshot() {
        const {
          estimate: TT,
          budgetBytes: oT
        } = this;
        return {
          ...null === TT ? {} : {
            footprintMiB: Number((0, mz.h)(TT.totalBytes)),
            gpuMiB: Number((0, mz.h)(TT.gpuBytes)),
            storedChunks: TT.storedChunks
          },
          footprintBudgetMiB: null === oT ? -1 : Number((0, mz.h)(oT))
        }
      }
    }
    var Cz = IT(2541),
      jz = IT(4034),
      Jz = IT(38061),
      Uz = IT(36890);
    const az = no.W + 1,
      Yz = 4096 * az;
    class Qz {
      constructor(TT, oT) {
        this.log = TT, this.take = oT, this.kS = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(TT, oT) {
        const IT = this.take();
        IT.length >= no.T && IT[0] > 0 && (0, Cz.l)("remesh", `${IT[0]} core records lost to a full log`);
        const iT = this.kS;
        for (let zT = no.T; zT + no.W <= IT.length; zT += no.W) {
          for (let TT = zT; TT < zT + no.W; TT++) iT.push(IT[TT]);
          iT.push(TT)
        }
        if (oT || !(iT.length < Yz)) {
          for (let oT = 0; oT < iT.length; oT += az) this.feed(oT, TT);
          iT.length = 0, oT && this.log.frame(TT)
        }
      }
      feed(TT, oT) {
        var IT;
        const iT = this.kS,
          zT = (0, Uz.h)(iT[TT + 1], iT[TT + 2], iT[TT + 3]),
          kT = iT[TT + 4],
          WT = iT[TT + no.W];
        switch (iT[TT]) {
          case no.Ab.Edit:
            this.log.edit(zT, WT);
            break;
          case no.Ab.Sent:
            this.latest.set(zT, kT), this.log.sent(zT, kT, iT[TT + 5], iT[TT + 6], iT[TT + 7], null !== (IT = this.unshown.get(zT)) && void 0 !== IT ? IT : Uz.e, WT);
            break;
          case no.Ab.Done: {
            this.log.received(kT, iT[TT + 5] / 1e3, WT);
            const oT = this.unshown.get(zT);
            void 0 === oT ? this.unshown.set(zT, [kT]) : oT.push(kT);
            break
          }
          case no.Ab.Failed: {
            const TT = this.latest.get(zT);
            void 0 !== TT && TT !== kT ? this.log.reassign(zT, kT, TT) : this.log.failed(kT), this.ended(zT, kT);
            break
          }
          case no.Ab.Shown:
            this.log.applied(zT, kT, oT), this.ended(zT, kT);
            break;
          case no.Ab.Replaced:
            this.log.reassign(zT, kT, iT[TT + 5]), this.ended(zT, kT);
            break;
          case no.Ab.Emptied:
            this.log.emptied(zT, oT);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${iT[TT]}`)
        }
      }
      ended(TT, oT) {
        this.latest.get(TT) === oT && this.latest.delete(TT);
        const IT = this.unshown.get(TT);
        if (void 0 === IT) return;
        const iT = IT.indexOf(oT);
        iT >= 0 && IT.splice(iT, 1), 0 === IT.length && this.unshown.delete(TT)
      }
    }
    let Oz = null;
    var Hz = IT(2801);
    const nz = new Uint8Array(0);
    class qz {
      constructor(TT) {
        this.options = TT, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.kS = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== TT.module ? TT.write(0, Ho.ae.WorldgenStarted, 0, 0, nz) : this.giveUp()
      }
      take(TT, oT) {
        if (!(this.gone || null === this.worker && null === this.kS))
          if (TT === Ho.be.WorldgenSeed) {
            const TT = 0 === oT.byteLength ? null : this.options.decodeSettings(oT);
            null === TT || function(TT, oT) {
              if ((null === TT || void 0 === TT ? void 0 : TT.byteLength) !== oT.byteLength) return !1;
              for (let IT = 0; IT < TT.byteLength; IT++)
                if (TT[IT] !== oT[IT]) return !1;
              return !0
            }(this.seed, oT) || (this.seed = oT.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: TT
            }, []), null !== TT ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (TT === Ho.be.Generate) {
          var IT;
          const TT = new DataView(oT.buffer, oT.byteOffset, Ho.Vd),
            iT = null !== (IT = this.pool.pop()) && void 0 !== IT ? IT : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: TT.getUint32(0, !0),
            x: TT.getInt32(4, !0),
            y: TT.getInt32(8, !0),
            z: TT.getInt32(12, !0),
            bytes: iT
          }, [iT])
        }
      }
      stop() {
        var TT;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (TT = this.worker) || void 0 === TT || TT.terminate(), this.worker = null
      }
      post(TT, oT) {
        var IT;
        null !== this.kS ? this.kS.push({
          message: TT,
          transfer: oT
        }) : null === (IT = this.worker) || void 0 === IT || IT.postMessage(TT, oT)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((TT => {
          this.createWorker = TT, this.start()
        }), (TT => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(TT))
        })))
      }
      start() {
        const {
          module: TT
        } = this.options, oT = this.createWorker;
        if (this.gone || null === TT || null === oT) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let IT;
        this.startsWithoutResult++;
        try {
          IT = oT()
        } catch (zT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", zT), this.lastLoss = `it did not start (${String(zT)})`, void this.start()
        }
        this.worker = IT, IT.onmessage = TT => {
          let {
            data: oT
          } = TT;
          this.worker === IT && this.onReply(IT, oT)
        }, IT.onerror = TT => {
          TT.preventDefault(), this.worker === IT && this.lose(TT.message || "its script failed")
        };
        try {
          IT.postMessage({
            type: "start",
            module: TT,
            Yc: iT.c.Yc
          })
        } catch (zT) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", zT), this.lastLoss = `it could not be sent the module (${String(zT)})`, IT.terminate(), this.worker = null, void this.start()
        }
        this.watch = new ai.h(ai.e, (TT => {
          this.lose((0, ai.j)(TT), (() => {
            this.options.onStartTimeout(TT)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(TT, oT) {
        switch (oT.type) {
          case "started": {
            this.endWatch();
            const oT = this.kS;
            if (null === oT) {
              this.options.write(0, Ho.ae.WorldgenStarted, 0, 0, nz);
              break
            }
            this.kS = null;
            for (const {
                message: IT,
                transfer: iT
              }
              of oT) TT.postMessage(IT, iT);
            break
          }
          case "lost":
            this.lose(oT.reason);
            break;
          case "memory":
            var IT, iT;
            null === (IT = (iT = this.options).onMemoryStats) || void 0 === IT || IT.call(iT, oT.stats);
            break;
          case "result":
            oT.status !== Ho.wb.Trapped && (this.startsWithoutResult = 0), this.options.write(oT.ticket, Ho.ae.WorldgenResult, oT.status, oT.workerUs, new Uint8Array(oT.bytes, 0, oT.len)), this.recycle(oT.bytes), oT.spare && this.recycle(oT.spare)
        }
      }
      lose(TT, oT) {
        var IT, iT, zT;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${TT}`), this.lastLoss = TT, this.endWatch(), null === (IT = this.worker) || void 0 === IT || IT.terminate(), this.worker = null, null === (iT = (zT = this.options).onMemoryGone) || void 0 === iT || iT.call(zT), this.gone || (oT ? oT() : this.options.onWorkerLost(TT), this.dropHeld(), this.kS = null, this.options.write(0, Ho.ae.WorldgenLost, Ho.ce.Lost, 0, nz), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Ho.ae.WorldgenLost, Ho.ce.Gone, 0, nz)
      }
      endWatch() {
        var TT;
        null === (TT = this.watch) || void 0 === TT || TT.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.kS) {
          for (const {
              message: TT
            }
            of this.kS) "generate" === TT.type && this.recycle(TT.bytes);
          this.kS.length = 0
        }
      }
      recycle(TT) {
        this.pool.length < 16 && TT.byteLength > 0 && TT.byteLength <= 16384 && this.pool.push(TT)
      }
    }
    var Zz = IT(36687),
      lz = IT(3293),
      sz = IT(39445),
      tz = IT(39839),
      Gz = IT(39721);
    const pz = /[(@\s]([^\s(@]+)$/,
      bz = /:\d/;

    function yz(TT, oT) {
      for (let IT = 0; IT + oT.length <= TT.length; IT++) {
        let iT = 0;
        for (; iT < oT.length && TT[IT + iT] === oT[iT];) iT++;
        if (iT === oT.length) return IT
      }
      return -1
    }

    function Nz(TT) {
      return "(" === TT || ")" === TT || "@" === TT || "," === TT || " " === TT || "\t" === TT
    }

    function Pz(TT, oT) {
      let IT = oT;
      for (; IT > 0 && !Nz(TT[IT - 1]);) IT--;
      let iT = oT;
      for (; iT < TT.length && !Nz(TT[iT]);) iT++;
      let zT = "";
      for (let kT = IT; kT < iT; kT++) zT += TT[kT];
      return zT
    }
    const dz = (TT, oT) => TT.includes(oT),
      Vz = TT => {
        try {
          return TT()
        } catch {
          return !1
        }
      },
      Tk = -1,
      Ik = TT => {
        try {
          return TT()
        } catch {
          return Tk
        }
      };

    function ik(TT, oT) {
      return {
        probe: (IT, iT, zT) => {
          try {
            return ((IT, iT, zT) => {
              switch (IT) {
                case Ho.lc.StackCheck:
                  return oT.stackCheck() ? 1 : 0;
                case Ho.lc.ConfirmMesh:
                  return oT.confirmMesh();
                case Ho.lc.IndexPassReplaced:
                  return oT.indexPassReplaced() ? 1 : 0;
                case Ho.lc.ProductSubChanged:
                  return oT.productSubChanged() ? 1 : 0;
                case Ho.lc.RenderStatus:
                  return oT.GS();
                case Ho.lc.Held:
                  return oT.kS();
                case Ho.lc.PlayerKilledSubs:
                  return oT.playerKilledSubs();
                case Ho.bb: {
                  const IT = oT.getComplete();
                  return null === IT ? 0 : (0, ei.o)(ei.y, ei.Y, [IT, new ei.e((0, ei.J)(TT()), iT, zT)]).written
                }
                default:
                  return 0
              }
            })(IT, iT, zT)
          } catch {
            return Ho.bc
          }
        }
      }
    }
    class zk {
      constructor(TT) {
        this.write = TT, this.flagsWritten = 0, this.written = (0, ei.r)(null)
      }
      dD(TT) {
        let {
          flags: oT,
          values: IT
        } = TT;
        for (let iT = 0; iT < IT.length; iT++) this.value(IT[iT][0], IT[iT][1]);
        this.setFlags(oT | Ho.g.Ready)
      }
      value(TT, oT) {
        this.written[TT] !== oT && this.write(TT, oT, 0) && (this.written[TT] = oT)
      }
      setFlags(TT) {
        const oT = TT & ~this.flagsWritten;
        0 !== oT && this.write(Ho.h.Flags, oT, oT) && (this.flagsWritten |= oT)
      }
      originStackHit() {
        return this.write(Ho.h.Flags, Ho.g.OriginStackHit, Ho.g.OriginStackHit)
      }
    }
    const kk = {
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
      Wk = 1e3;

    function Xk(TT, oT) {
      const IT = new zk(oT);
      let iT = !1;
      IT.dD(TT.dD());
      const zT = (0, ei.R)((() => {
          IT.dD(TT.dD())
        }), Wk),
        kT = () => {
          TT.checks.stackCheck() && (iT = !0)
        };
      (0, tz.i)(kT);
      const WT = () => {
        const oT = TT.checkPadCall();
        0 !== oT && IT.setFlags(oT)
      };
      return (0, sz.f)(WT), {
        onInput: oT => {
          (function(TT) {
            switch (TT) {
              case Ho.vb.KeyDown:
              case Ho.vb.KeyUp:
              case Ho.vb.MouseDown:
              case Ho.vb.MouseUp:
              case Ho.vb.Wheel:
              case Ho.vb.TouchStart:
              case Ho.vb.TouchEnd:
              case Ho.vb.TouchButton:
              case Ho.vb.PadAction:
                return !0;
              default:
                return !1
            }
          })(oT) && TT.checks.stackCheck() && (iT = !0)
        },
        onSend: kT,
        beforeFrame: () => {
          iT && IT.originStackHit() && (iT = !1)
        },
        onEvent: oT => {
          const iT = TT.checkEvent(oT);
          IT.value(Ho.h.ProbeUsedProp, TT.usedProp()), 0 !== iT && IT.setFlags(iT)
        },
        stop: () => {
          (0, ei.S)(zT), (0, tz.e)(kT), (0, sz.e)(WT)
        }
      }
    }
    let Bk;
    const Fk = ["length", 0, 2, "a", 1, null, void 0, 3, "t", "c3RhY2", "cw==", 161, 158, 134, 4, 8, 5, 26, 1e5, 120, 60, "s=", "b", "string", 75, "h", 99, "f", 90, "e", 232, "i", "j", "stack", "name", "=", 146, ";", !1, 133, 155, !0, 53, 223, 24, 1e3, "expire", 45, ";path=", "/", 16, "Tsd35c", "8", 512, 256, 108, "012345", 15, 66, "c", 6, 110, 72, 88, 1023, 63, 128, 12, 189, 255, 104, 204, 32, 7, 18, 10, 19, 64, 238, 65535, "r", "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", "d", 122, " ", "abc", 909522486, 1549556828, "6789AB", "CDEF", "6789ab", "cdef", 220, 234, 91, 30, 14, 55296, 56319, 56320, 57343, 65536, 127, 2047, 192, 31, 224, 2097151, 240, 124, 113, 13, 22, 11, 25, 17, 28, 34, 39, 41, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 9, 211, 199, "o", 65537, 80, 100, 190, "q", "l", "functi", "on", "protot", "ype", "decode", 93, "5", "I=", "p", "eTR5bm", "s", "u", 21, "E", "Hd", "O", "chEven", "dispat", "w", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "g", "get", "v", "Q", 48, "None", "En", "tOverw", "ritten", "plete"];

    function Sk(...TT) {
      if (TT[Fk[0]] = Fk[7], TT[Fk[1]] === Fk[51] + Fk[52]) return TT[Fk[4]] + TT[Fk[2]]
    }

    function Dk() {}

    function Lk() {
      Lk = function() {}
    }
    Bk = function(TT) {
      let oT = arguments[Fk[0]] > Fk[4] && arguments[Fk[4]] !== Fk[6] ? arguments[Fk[4]] : () => Fk[5],
        IT = arguments[Fk[0]] > Fk[2] && arguments[Fk[2]] !== Fk[6] ? arguments[Fk[2]] : Fk[5],
        iT = arguments[Fk[0]] > Fk[7] && arguments[Fk[7]] !== Fk[6] ? arguments[Fk[7]] : "";
      const zT = window,
        kT = (0, ei[Fk[8]])("RXJyb3" + Fk[213]),
        WT = (0, ei[Fk[8]])(Fk[9] + Fk[21]),
        XT = (0, ei[Fk[8]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        FT = (0, ei[Fk[8]])(Fk[9] + "tUcmFjZUxpbWl0"),
        ST = (0, ei[Fk[8]])("bmF0aXZl"),
        DT = [(0, ei[Fk[8]])("bWFpbi5qcw=="), (0, ei[Fk[8]])("aW5kZXguanM="), (0, ei[Fk[8]])("dXNlcnNjcmlwdA=="), (0, ei[Fk[8]])("Y29udGVudC5q" + Fk[10]), (0, ei[Fk[8]])("b3B0aW9ucy5q" + Fk[10]), (0, ei[Fk[8]])("cG9wdXAuanM="), (0, ei[Fk[8]])("LnVzZXIuanM="), (0, ei[Fk[8]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        LT = (...TT) => {
          TT[Fk[0]] = Fk[4];
          const oT = zT[kT],
            IT = oT;
          if (IT[FT] < Fk[18]) {
            function KT(...TT) {
              Lk(TT[Fk[0]] = Fk[1], TT[Fk[17]] = function(...TT) {
                for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[4]] = Fk[1], TT[-Fk[13]] = {}, TT[Fk[7]] = Fk[1], TT[Fk[14]] = Fk[1], TT[Fk[16]] = Fk[1], TT[-Fk[12]] = TT[Fk[1]].length), TT[Fk[11]] = Fk[1]; TT[Fk[11]] < TT[-Fk[12]]; TT[Fk[11]]++) {
                  for (Lk(TT[-Fk[13]] = {}, TT[Fk[7]] = Fk[1], TT[Fk[14]] = Fk[4]), TT[Fk[15]] = TT[Fk[11]] + Fk[4]; TT[Fk[15]] < TT[-Fk[12]]; TT[Fk[15]]++) TT[Fk[1]][TT[Fk[11]]].x !== TT[Fk[1]][TT[Fk[15]]].x || TT[Fk[1]][TT[Fk[11]]].y !== TT[Fk[1]][TT[Fk[15]]].y ? (TT[Fk[1]][TT[Fk[11]]].y === TT[Fk[1]][TT[Fk[15]]].y ? TT[Fk[16]] = Number.MAX_SAFE_INTEGER : TT[Fk[16]] = (TT[Fk[1]][TT[Fk[11]]].x - TT[Fk[1]][TT[Fk[15]]].x) / (TT[Fk[1]][TT[Fk[11]]].y - TT[Fk[1]][TT[Fk[15]]].y), TT[-Fk[13]][TT[Fk[16]]] || (TT[-Fk[13]][TT[Fk[16]]] = Fk[1]), Lk(TT[-Fk[13]][TT[Fk[16]]]++, TT[Fk[7]] = Math.max(TT[Fk[7]], TT[-Fk[13]][TT[Fk[16]]]))) : TT[Fk[14]]++;
                  Lk(TT[Fk[7]] += TT[Fk[14]], TT[Fk[4]] = Math.max(TT[Fk[4]], TT[Fk[7]]))
                }
                return TT[Fk[4]]
              }, console.log(TT[Fk[17]]))
            }
            "EUQZHX" + Fk[214] in Dk && KT(), IT[FT] = Fk[18]
          }
          const iT = "string" === typeof(LT = (new oT)[WT]) ? LT : `${LT}`,
            BT = {},
            ST = IT[XT];
          var LT;
          if (typeof ST === Fk[206] + Fk[207]) {
            function MT(...TT) {
              TT[Fk[0]] = Fk[1]
            }
            "y1lFx1" in Dk && MT(), (0, ei[Fk[199]])(ST, oT, [BT])
          }
          const xT = BT[WT],
            cT = TT[Fk[1]] ? DT[Fk[0]] : DT[Fk[0]] - Fk[4];
          for (let rT = Fk[1]; rT < cT; rT++) {
            if (dz(iT, DT[rT])) return {
              [Fk[33]]: iT,
              [Fk[34]]: DT[rT]
            };
            if (typeof xT === Fk[23] && dz(xT, DT[rT])) {
              function AT(...TT) {
                Lk(TT[Fk[0]] = Fk[1], TT[-Fk[7]] = function(...TT) {
                  if (Lk(TT[Fk[0]] = Fk[4], TT[Fk[4]] = TT[Fk[1]].length), TT[Fk[4]] < Fk[2]) return Fk[1];
                  if (Lk(TT[-Fk[12]] = Math.max(...TT[Fk[1]]), TT[Fk[24]] = Math.min(...TT[Fk[1]])), TT[-Fk[12]] === TT[Fk[24]]) return Fk[1];
                  for (Lk(TT[-Fk[28]] = Array(TT[Fk[4]] - Fk[4]).fill(Number.MAX_SAFE_INTEGER), TT[Fk[29]] = Array(TT[Fk[4]] - Fk[4]).fill(Number.MIN_SAFE_INTEGER), TT[Fk[27]] = Math.ceil((TT[-Fk[12]] - TT[Fk[24]]) / (TT[Fk[4]] - Fk[4])), TT[Fk[26]] = Fk[1]), TT[Fk[25]] = Fk[1]; TT[Fk[25]] < TT[Fk[4]]; TT[Fk[25]]++) TT[Fk[1]][TT[Fk[25]]] !== TT[Fk[24]] && TT[Fk[1]][TT[Fk[25]]] !== TT[-Fk[12]] && Lk(TT[Fk[26]] = Math.floor((TT[Fk[1]][TT[Fk[25]]] - TT[Fk[24]]) / TT[Fk[27]]), TT[-Fk[28]][TT[Fk[26]]] = Math.min(TT[-Fk[28]][TT[Fk[26]]], TT[Fk[1]][TT[Fk[25]]]), TT[Fk[29]][TT[Fk[26]]] = Math.max(TT[Fk[29]][TT[Fk[26]]], TT[Fk[1]][TT[Fk[25]]]));
                  for (Lk(TT[Fk[31]] = Number.MIN_SAFE_INTEGER, TT[Fk[32]] = TT[Fk[24]]), TT[-Fk[30]] = Fk[1]; TT[-Fk[30]] < TT[Fk[4]] - Fk[4]; TT[-Fk[30]]++) TT[-Fk[28]][TT[-Fk[30]]] === Number.MAX_SAFE_INTEGER && TT[Fk[29]][TT[-Fk[30]]] === Number.MIN_SAFE_INTEGER || Lk(TT[Fk[31]] = Math.max(TT[Fk[31]], TT[-Fk[28]][TT[-Fk[30]]] - TT[Fk[32]]), TT[Fk[32]] = TT[Fk[29]][TT[-Fk[30]]]);
                  return TT[Fk[31]] = Math.max(TT[Fk[31]], TT[-Fk[12]] - TT[Fk[32]]), TT[Fk[31]]
                }, console.log(TT[-Fk[7]]))
              }
              return "yMQg1R" in Dk && AT(), {
                [Fk[33]]: xT,
                [Fk[34]]: DT[rT]
              }
            }
          }
          return Fk[5]
        },
        xT = TT => ("WS9hLh" + Fk[8] in Dk && function(...TT) {
          TT[Fk[0]] = Fk[1]
        }(), LT(TT) !== Fk[5]);
      let cT = Fk[5],
        KT = Fk[5];
      const MT = (...TT) => {
        TT[Fk[0]] = Fk[4];
        try {
          return TT[Fk[1]]()
        } catch {
          return Fk[41]
        }
      };
      let rT = Fk[38];
      const AT = (...TT) => {
          if (TT[Fk[0]] = Fk[1], "YPx2w8" + Fk[216] in Dk && function(...TT) {
              Lk(TT[Fk[0]] = Fk[1], TT[Fk[39]] = function(TT) {
                var oT, IT, iT, zT, kT = TT.length;
                for (Lk(oT = [], IT = Fk[1]), iT = Fk[1]; iT < kT; iT++) oT.push(iT !== Fk[1] && TT[iT] > TT[iT - Fk[4]] ? oT[iT - Fk[4]] + Fk[4] : Fk[4]);
                for (zT = kT - Fk[4]; zT >= Fk[1]; zT--) zT !== kT - Fk[4] && TT[zT] > TT[zT + Fk[4]] && (oT[zT] = Math.max(oT[zT], oT[zT + Fk[4]] + Fk[4])), IT += oT[zT];
                return IT
              }, console.log(TT[Fk[39]]))
            }(), !rT && (0, ei[Fk[224]])()) {
            function oT(...TT) {
              TT[Fk[0]] = Fk[1]
            }
            "OsXpS5" in Dk && oT(), rT = Fk[41]
          }
        },
        gT = (...TT) => {
          TT[Fk[0]] = Fk[4], "quJkqa" in Dk && function(...TT) {
            TT[Fk[0]] = Fk[1];
            const oT = require("big-integer");
            Lk(TT[-Fk[17]] = class {
              static randomPrime(...TT) {
                TT[Fk[0]] = Fk[4];
                const IT = oT.one.shiftLeft(TT[Fk[1]] - Fk[4]),
                  iT = oT.one.shiftLeft(TT[Fk[1]]).prev();
                for (; Fk[41];) {
                  let TT = oT.randBetween(IT, iT);
                  if (TT.isProbablePrime(Fk[54])) return TT
                }
              }
              static generate(...TT) {
                TT[Fk[0]] = Fk[4];
                const IT = oT(Fk[200]);
                let iT, zT;
                TT[Fk[42]] = Fk[6];
                do {
                  Lk(iT = this.randomPrime(TT[Fk[1]] / Fk[2]), zT = this.randomPrime(TT[Fk[1]] / Fk[2]), TT[Fk[42]] = oT.lcm(iT.prev(), zT.prev()))
                } while (oT.gcd(IT, TT[Fk[42]]).notEquals(Fk[4]) || iT.minus(zT).abs().shiftRight(TT[Fk[1]] / Fk[2] - Fk[202]).isZero());
                return {
                  e: IT,
                  n: iT.multiply(zT),
                  d: IT.modInv(TT[Fk[42]])
                }
              }
              static encrypt(...TT) {
                return TT[Fk[0]] = Fk[7], oT(TT[Fk[1]]).modPow(TT[Fk[2]], TT[Fk[4]])
              }
              static decrypt(...TT) {
                return TT[Fk[0]] = Fk[7], oT(TT[Fk[1]]).modPow(TT[Fk[4]], TT[Fk[2]])
              }
              static encode(TT) {
                const IT = TT.split("").map((TT => TT.charCodeAt())).join("");
                return oT(IT)
              }
              static decode(...TT) {
                TT[Fk[0]] = Fk[4];
                const oT = TT[Fk[1]].toString();
                TT[-Fk[43]] = "";
                for (let IT = Fk[1]; IT < oT.length; IT += Fk[2]) {
                  let iT = Number(oT.substr(IT, Fk[2]));
                  iT <= Fk[98] ? (TT[-Fk[43]] += String.fromCharCode(Number(oT.substr(IT, Fk[7]))), IT++) : TT[-Fk[43]] += String.fromCharCode(iT)
                }
                return TT[-Fk[43]]
              }
            }, module.exports = TT[-Fk[17]])
          }();
          try {
            function oT(...TT) {
              TT[Fk[0]] = Fk[1]
            }
            return "wpsdxVH" in Dk && oT(), TT[Fk[1]]()
          } catch {
            return Fk[6]
          }
        },
        hT = (...TT) => {
          TT[Fk[0]] = Fk[4];
          try {
            function oT() {
              var TT = function(...TT) {
                function oT(...TT) {
                  return TT[Fk[0]] = Fk[2], WT(zT(XT(TT[Fk[1]]), XT(TT[Fk[4]])))
                }

                function iT(TT, oT, IT) {
                  return function(...TT) {
                    var oT, IT, iT, zT;
                    for (Lk(TT[Fk[0]] = Fk[2], TT[Fk[3]] = TT[Fk[4]].length, TT[Fk[61]] = Array()), TT[Fk[59]] = Array(Math.ceil(TT[Fk[1]].length / Fk[2])), oT = Fk[1]; oT < TT[Fk[59]].length; oT++) TT[Fk[59]][oT] = TT[Fk[1]].charCodeAt(oT * Fk[2]) << Fk[15] | TT[Fk[1]].charCodeAt(oT * Fk[2] + Fk[4]);
                    for (; TT[Fk[59]].length > Fk[1];) {
                      for (Lk(zT = Array(), iT = Fk[1]), oT = Fk[1]; oT < TT[Fk[59]].length; oT++) Lk(iT = (iT << Fk[50]) + TT[Fk[59]][oT], IT = Math.floor(iT / TT[Fk[3]]), iT -= IT * TT[Fk[3]]), (zT.length > Fk[1] || IT > Fk[1]) && (zT[zT.length] = IT);
                      Lk(TT[Fk[61]][TT[Fk[61]].length] = iT, TT[Fk[59]] = zT)
                    }
                    for (TT[-Fk[62]] = "", oT = TT[Fk[61]].length - Fk[4]; oT >= Fk[1]; oT--) TT[-Fk[62]] += TT[Fk[4]].charAt(TT[Fk[61]][oT]);
                    for (TT[Fk[29]] = Math.ceil(TT[Fk[1]].length * Fk[15] / (Math.log(TT[Fk[4]].length) / Math.log(Fk[2]))), oT = TT[-Fk[62]].length; oT < TT[Fk[29]]; oT++) TT[-Fk[62]] = TT[Fk[4]][Fk[1]] + TT[-Fk[62]];
                    return TT[-Fk[62]]
                  }(zT(XT(TT), XT(oT)), IT)
                }

                function zT(TT, oT) {
                  var IT, iT, zT = BT(TT);
                  zT.length > Fk[50] && (zT = AT(zT, TT.length * Fk[15]));
                  var kT = Array(Fk[50]),
                    WT = Array(Fk[50]);
                  for (IT = Fk[1]; IT < Fk[50]; IT++) Lk(kT[IT] = zT[IT] ^ Fk[89], WT[IT] = zT[IT] ^ Fk[90]);
                  return iT = AT(kT.concat(BT(oT)), Fk[53] + oT.length * Fk[15]), FT(AT(WT.concat(iT), Sk(Fk[51] + Fk[52], Fk[53], Fk[54])))
                }

                function kT(oT) {
                  var IT, iT, kT, WT;
                  try {
                    TT[-Fk[55]]
                  } catch (zT) {
                    TT[-Fk[55]] = Fk[1]
                  }
                  for (Lk(IT = TT[-Fk[55]] ? Fk[56] + Fk[91] + Fk[92] : Fk[56] + Fk[93] + Fk[94], iT = "", kT = void 0), WT = Fk[1]; WT < oT.length; WT++) Lk(kT = oT.charCodeAt(WT), iT += IT.charAt(kT >>> Fk[14] & Fk[57]) + IT.charAt(kT & Fk[57]));
                  return iT
                }

                function WT(...oT) {
                  oT[Fk[0]] = Fk[4];
                  try {
                    TT[Fk[4]]
                  } catch (IT) {
                    TT[Fk[4]] = ""
                  }
                  for (Lk(oT[Fk[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + Fk[49], oT[Fk[22]] = "", oT[Fk[59]] = oT[Fk[1]].length), oT[Fk[58]] = Fk[1]; oT[Fk[58]] < oT[Fk[59]]; oT[Fk[58]] += Fk[7])
                    for (oT[Fk[16]] = oT[Fk[1]].charCodeAt(oT[Fk[58]]) << Fk[50] | (oT[Fk[58]] + Fk[4] < oT[Fk[59]] ? oT[Fk[1]].charCodeAt(oT[Fk[58]] + Fk[4]) << Fk[15] : Fk[1]) | (oT[Fk[58]] + Fk[2] < oT[Fk[59]] ? oT[Fk[1]].charCodeAt(oT[Fk[58]] + Fk[2]) : Fk[1]), oT[Fk[60]] = Fk[1]; oT[Fk[60]] < Fk[14]; oT[Fk[60]]++) oT[Fk[58]] * Fk[15] + oT[Fk[60]] * Fk[60] > oT[Fk[1]].length * Fk[15] ? oT[Fk[22]] += TT[Fk[4]] : oT[Fk[22]] += oT[Fk[3]].charAt(oT[Fk[16]] >>> Fk[60] * (Fk[7] - oT[Fk[60]]) & Fk[65]);
                  return oT[Fk[22]]
                }

                function XT(...TT) {
                  var oT, IT;
                  for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[4]] = "", TT[-Fk[63]] = -Fk[4]); ++TT[-Fk[63]] < TT[Fk[1]].length;) Lk(oT = TT[Fk[1]].charCodeAt(TT[-Fk[63]]), IT = TT[-Fk[63]] + Fk[4] < TT[Fk[1]].length ? TT[Fk[1]].charCodeAt(TT[-Fk[63]] + Fk[4]) : Fk[1]), Fk[100] <= oT && oT <= Fk[101] && Fk[102] <= IT && IT <= Fk[103] && Lk(oT = Fk[104] + ((oT & Fk[64]) << Fk[75]) + (IT & Fk[64]), TT[-Fk[63]]++), oT <= Fk[105] ? TT[Fk[4]] += String.fromCharCode(oT) : oT <= Fk[106] ? TT[Fk[4]] += String.fromCharCode(Fk[107] | oT >>> Fk[60] & Fk[108], Fk[66] | oT & Fk[65]) : oT <= Fk[79] ? TT[Fk[4]] += String.fromCharCode(Fk[109] | oT >>> Fk[67] & Fk[57], Fk[66] | oT >>> Fk[60] & Fk[65], Fk[66] | oT & Fk[65]) : oT <= Fk[110] && (TT[Fk[4]] += String.fromCharCode(Fk[111] | oT >>> Fk[74] & Fk[73], Fk[66] | oT >>> Fk[67] & Fk[65], Fk[66] | oT >>> Fk[60] & Fk[65], Fk[66] | oT & Fk[65]));
                  return TT[Fk[4]]
                }

                function BT(...TT) {
                  for (Lk(TT[Fk[0]] = Fk[4], TT[-Fk[71]] = Array(TT[Fk[1]].length >> Fk[2])), TT[Fk[2]] = Fk[1]; TT[Fk[2]] < TT[-Fk[71]].length; TT[Fk[2]]++) TT[-Fk[71]][TT[Fk[2]]] = Fk[1];
                  for (TT[Fk[2]] = Fk[1]; TT[Fk[2]] < TT[Fk[1]].length * Fk[15]; TT[Fk[2]] += Fk[15]) TT[-Fk[71]][TT[Fk[2]] >> Fk[16]] |= (TT[Fk[1]].charCodeAt(TT[Fk[2]] / Fk[15]) & Fk[69]) << Fk[44] - TT[Fk[2]] % Fk[72];
                  return TT[-Fk[71]]
                }

                function FT(...TT) {
                  for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[3]] = ""), TT[Fk[19]] = Fk[1]; TT[Fk[19]] < TT[Fk[1]].length * Fk[72]; TT[Fk[19]] += Fk[15]) TT[Fk[3]] += String.fromCharCode(TT[Fk[1]][TT[Fk[19]] >> Fk[16]] >>> Fk[44] - TT[Fk[19]] % Fk[72] & Fk[69]);
                  return TT[Fk[3]]
                }

                function ST(...TT) {
                  return TT[Fk[0]] = Fk[2], TT[Fk[1]] >>> TT[Fk[4]] | TT[Fk[1]] << Fk[72] - TT[Fk[4]]
                }

                function DT(TT, oT) {
                  return TT >>> oT
                }

                function LT(...TT) {
                  return TT[Fk[0]] = Fk[7], TT[Fk[1]] & TT[Fk[4]] ^ ~TT[Fk[1]] & TT[Fk[2]]
                }

                function xT(...TT) {
                  return TT[Fk[0]] = Fk[7], TT[Fk[1]] & TT[Fk[4]] ^ TT[Fk[1]] & TT[Fk[2]] ^ TT[Fk[4]] & TT[Fk[2]]
                }

                function cT(TT) {
                  return ST(TT, Fk[2]) ^ ST(TT, Fk[114]) ^ ST(TT, Fk[115])
                }

                function KT(...TT) {
                  return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[60]) ^ ST(TT[Fk[1]], Fk[116]) ^ ST(TT[Fk[1]], Fk[117])
                }

                function MT(...TT) {
                  return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[73]) ^ ST(TT[Fk[1]], Fk[74]) ^ DT(TT[Fk[1]], Fk[7])
                }

                function rT(...TT) {
                  return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[118]) ^ ST(TT[Fk[1]], Fk[76]) ^ DT(TT[Fk[1]], Fk[75])
                }

                function AT(...oT) {
                  var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, AT, hT;
                  for (Lk(oT[Fk[0]] = Fk[2], oT[Fk[2]] = new Array(Fk[188], -Fk[189], Fk[190], -Fk[191], Fk[192], -Fk[193], Fk[194], Fk[195]), oT[Fk[78]] = new Array(Fk[77])), Lk(oT[Fk[1]][oT[Fk[4]] >> Fk[16]] |= Fk[66] << Fk[44] - oT[Fk[4]] % Fk[72], oT[Fk[1]][(oT[Fk[4]] + Fk[77] >> Fk[196] << Fk[14]) + Fk[57]] = oT[Fk[4]]), ST = Fk[1]; ST < oT[Fk[1]].length; ST += Fk[50]) {
                    for (Lk(IT = oT[Fk[2]][Fk[1]], iT = oT[Fk[2]][Fk[4]], zT = oT[Fk[2]][Fk[2]], kT = oT[Fk[2]][Fk[7]], WT = oT[Fk[2]][Fk[14]], XT = oT[Fk[2]][Fk[16]], BT = oT[Fk[2]][Fk[60]], FT = oT[Fk[2]][Fk[73]]), DT = Fk[1]; DT < Fk[77]; DT++) Lk(oT[Fk[78]][DT] = DT < Fk[50] ? oT[Fk[1]][DT + ST] : gT(gT(gT(rT(oT[Fk[78]][DT - Fk[2]]), oT[Fk[78]][DT - Fk[73]]), MT(oT[Fk[78]][DT - Fk[57]])), oT[Fk[78]][DT - Fk[50]]), AT = gT(gT(gT(gT(FT, KT(WT)), LT(WT, XT, BT)), TT[Fk[2]][DT]), oT[Fk[78]][DT]), hT = gT(cT(IT), xT(IT, iT, zT)), FT = BT, BT = XT, XT = WT, WT = gT(kT, AT), kT = zT, zT = iT, iT = IT, IT = gT(AT, hT));
                    Lk(oT[Fk[2]][Fk[1]] = gT(IT, oT[Fk[2]][Fk[1]]), oT[Fk[2]][Fk[4]] = gT(iT, oT[Fk[2]][Fk[4]]), oT[Fk[2]][Fk[2]] = gT(zT, oT[Fk[2]][Fk[2]]), oT[Fk[2]][Fk[7]] = gT(kT, oT[Fk[2]][Fk[7]]), oT[Fk[2]][Fk[14]] = gT(WT, oT[Fk[2]][Fk[14]]), oT[Fk[2]][Fk[16]] = gT(XT, oT[Fk[2]][Fk[16]]), oT[Fk[2]][Fk[60]] = gT(BT, oT[Fk[2]][Fk[60]]), oT[Fk[2]][Fk[73]] = gT(FT, oT[Fk[2]][Fk[73]]))
                  }
                  return oT[Fk[2]]
                }

                function gT(...TT) {
                  return Lk(TT[Fk[0]] = Fk[2], TT[Fk[3]] = (TT[Fk[1]] & Fk[79]) + (TT[Fk[4]] & Fk[79]), TT[Fk[7]] = (TT[Fk[1]] >> Fk[50]) + (TT[Fk[4]] >> Fk[50]) + (TT[Fk[3]] >> Fk[50])), TT[Fk[7]] << Fk[50] | TT[Fk[3]] & Fk[79]
                }
                return Lk(TT[Fk[0]] = Fk[1], TT[-Fk[55]] = Fk[1], TT[Fk[4]] = ""), TT[Fk[2]] = new Array(Fk[124], Fk[125], -Fk[126], -Fk[127], Fk[128], Fk[129], -Fk[130], -Fk[131], -Fk[132], Fk[133], Fk[134], Fk[135], Fk[136], -Fk[137], -Fk[138], -Fk[139], -Fk[140], -Fk[141], Fk[142], Fk[143], Fk[144], Fk[145], Fk[146], Fk[147], -Fk[148], -Fk[149], -Fk[150], -Fk[151], -Fk[152], -Fk[153], Fk[154], Fk[155], Fk[156], Fk[157], Fk[158], Fk[159], Fk[160], Fk[161], -Fk[162], -Fk[163], -Fk[164], -Fk[165], -Fk[166], -Fk[167], -Fk[168], -Fk[169], -Fk[170], Fk[171], Fk[172], Fk[173], Fk[174], Fk[175], Fk[176], Fk[177], Fk[178], Fk[179], Fk[180], Fk[181], -Fk[182], -Fk[183], -Fk[184], -Fk[185], -Fk[186], -Fk[187]), {
                  hex: function(TT) {
                    return kT(function(...TT) {
                      return TT[Fk[0]] = Fk[4], FT(AT(BT(TT[Fk[1]]), TT[Fk[1]].length * Fk[15]))
                    }(XT(TT)))
                  },
                  b64: oT,
                  any: iT,
                  hex_hmac: function(...TT) {
                    return TT[Fk[0]] = Fk[2], kT(zT(XT(TT[Fk[1]]), XT(TT[Fk[4]])))
                  },
                  b64_hmac: oT,
                  any_hmac: iT
                }
              }();
              console.log(TT)
            }
            return "jQ0xUHn" in Dk && oT(), TT[Fk[1]](), Fk[41]
          } catch {
            return Fk[38]
          }
        },
        wT = (0, ei[Fk[8]])("a29qbzYzb25i"),
        mT = (0, ei[Fk[80]])(Fk[5]);
      let eT = Fk[5],
        RT = Fk[38],
        uT = Fk[38];
      const vT = (0, ei[Fk[80]])(Fk[5]);
      let ET = Fk[1];
      const fT = (0, ei[Fk[80]])(Fk[5]);
      let CT = Fk[1];
      const jT = (0, ei[Fk[80]])(Fk[5]);
      let JT = Fk[38],
        UT = Fk[38];
      const aT = (...oT) => {
          if (oT[Fk[0]] = Fk[2], "XxyR4n" in Dk && function(...TT) {
              TT[Fk[0]] = Fk[1]
            }(), oT[Fk[1]] === TT) {
            if (eT === Fk[5]) {
              function kT(...TT) {
                Lk(TT[Fk[0]] = Fk[1], TT[Fk[86]] = function(...TT) {
                  for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[3]] = TT[Fk[1]].length, TT[Fk[2]] = [], TT[Fk[59]] = Fk[1]), TT[Fk[85]] = Fk[1]; TT[Fk[85]] < TT[Fk[3]]; TT[Fk[85]]++) TT[Fk[2]].push(TT[Fk[85]] !== Fk[1] && TT[Fk[1]][TT[Fk[85]]] > TT[Fk[1]][TT[Fk[85]] - Fk[4]] ? TT[Fk[2]][TT[Fk[85]] - Fk[4]] + Fk[4] : Fk[4]);
                  for (TT[Fk[29]] = TT[Fk[3]] - Fk[4]; TT[Fk[29]] >= Fk[1]; TT[Fk[29]]--) TT[Fk[29]] !== TT[Fk[3]] - Fk[4] && TT[Fk[1]][TT[Fk[29]]] > TT[Fk[1]][TT[Fk[29]] + Fk[4]] && (TT[Fk[2]][TT[Fk[29]]] = Math.max(TT[Fk[2]][TT[Fk[29]]], TT[Fk[2]][TT[Fk[29]] + Fk[4]] + Fk[4])), TT[Fk[59]] += TT[Fk[2]][TT[Fk[29]]];
                  return TT[Fk[59]]
                }, console.log(TT[Fk[86]]))
              }
              "rAcfGo" in Dk && kT(), eT = typeof oT[Fk[4]] === Fk[231] ? oT[Fk[4]] : -Fk[4]
            } else RT = Fk[41];
            return
          }
          const IT = mT[oT[Fk[1]]];
          if (!oT[Fk[4]]) {
            function WT(...TT) {
              TT[Fk[0]] = Fk[1]
            }
            if ("IvoepK" + Fk[212] in Dk && WT(), IT) {
              function XT(...TT) {
                Lk(TT[Fk[0]] = Fk[1], TT[Fk[198]] = function(...TT) {
                  function oT(...TT) {
                    return TT[Fk[0]] = Fk[2], WT(zT(XT(TT[Fk[1]]), XT(TT[Fk[4]])))
                  }

                  function IT(...TT) {
                    return TT[Fk[0]] = Fk[7],
                      function(...TT) {
                        var oT, IT, iT, zT;
                        for (Lk(TT[Fk[0]] = Fk[2], TT[Fk[3]] = TT[Fk[4]].length, TT[Fk[7]] = Array()), TT[Fk[99]] = Array(Math.ceil(TT[Fk[1]].length / Fk[2])), oT = Fk[1]; oT < TT[Fk[99]].length; oT++) TT[Fk[99]][oT] = TT[Fk[1]].charCodeAt(oT * Fk[2]) << Fk[15] | TT[Fk[1]].charCodeAt(oT * Fk[2] + Fk[4]);
                        for (; TT[Fk[99]].length > Fk[1];) {
                          for (Lk(zT = Array(), iT = Fk[1]), oT = Fk[1]; oT < TT[Fk[99]].length; oT++) Lk(iT = (iT << Fk[50]) + TT[Fk[99]][oT], IT = Math.floor(iT / TT[Fk[3]]), iT -= IT * TT[Fk[3]]), (zT.length > Fk[1] || IT > Fk[1]) && (zT[zT.length] = IT);
                          Lk(TT[Fk[7]][TT[Fk[7]].length] = iT, TT[Fk[99]] = zT)
                        }
                        for (TT[Fk[85]] = "", oT = TT[Fk[7]].length - Fk[4]; oT >= Fk[1]; oT--) TT[Fk[85]] += TT[Fk[4]].charAt(TT[Fk[7]][oT]);
                        for (TT[Fk[29]] = Math.ceil(TT[Fk[1]].length * Fk[15] / (Math.log(TT[Fk[4]].length) / Math.log(Fk[2]))), oT = TT[Fk[85]].length; oT < TT[Fk[29]]; oT++) TT[Fk[85]] = TT[Fk[4]][Fk[1]] + TT[Fk[85]];
                        return TT[Fk[85]]
                      }(zT(XT(TT[Fk[1]]), XT(TT[Fk[4]])), TT[Fk[2]])
                  }

                  function zT(TT, oT) {
                    var IT, iT, zT = BT(TT);
                    zT.length > Fk[50] && (zT = AT(zT, TT.length * Fk[15]));
                    var kT = Array(Fk[50]),
                      WT = Array(Fk[50]);
                    for (IT = Fk[1]; IT < Fk[50]; IT++) Lk(kT[IT] = zT[IT] ^ Fk[89], WT[IT] = zT[IT] ^ Fk[90]);
                    return iT = AT(kT.concat(BT(oT)), Fk[53] + oT.length * Fk[15]), FT(AT(WT.concat(iT), Sk(Fk[51] + Fk[52], Fk[53], Fk[54])))
                  }

                  function kT(...oT) {
                    oT[Fk[0]] = Fk[4];
                    try {
                      TT[Fk[28]]
                    } catch (iT) {
                      TT[Fk[28]] = Fk[1]
                    }
                    for (Lk(oT[Fk[3]] = TT[Fk[28]] ? Fk[56] + Fk[91] + Fk[92] : Fk[56] + Fk[93] + Fk[94], oT[Fk[22]] = "", oT[Fk[59]] = Fk[6]), oT[Fk[95]] = Fk[1]; oT[Fk[95]] < oT[Fk[1]].length; oT[Fk[95]]++) Lk(oT[Fk[59]] = oT[Fk[1]].charCodeAt(oT[Fk[95]]), oT[Fk[22]] += oT[Fk[3]].charAt(oT[Fk[59]] >>> Fk[14] & Fk[57]) + oT[Fk[3]].charAt(oT[Fk[59]] & Fk[57]));
                    return oT[Fk[22]]
                  }

                  function WT(...oT) {
                    oT[Fk[0]] = Fk[4];
                    try {
                      TT[Fk[96]]
                    } catch (iT) {
                      TT[Fk[96]] = ""
                    }
                    for (Lk(oT[Fk[4]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oT[Fk[22]] = "", oT[Fk[97]] = oT[Fk[1]].length), oT[Fk[85]] = Fk[1]; oT[Fk[85]] < oT[Fk[97]]; oT[Fk[85]] += Fk[7])
                      for (oT[Fk[16]] = oT[Fk[1]].charCodeAt(oT[Fk[85]]) << Fk[50] | (oT[Fk[85]] + Fk[4] < oT[Fk[97]] ? oT[Fk[1]].charCodeAt(oT[Fk[85]] + Fk[4]) << Fk[15] : Fk[1]) | (oT[Fk[85]] + Fk[2] < oT[Fk[97]] ? oT[Fk[1]].charCodeAt(oT[Fk[85]] + Fk[2]) : Fk[1]), oT[-Fk[98]] = Fk[1]; oT[-Fk[98]] < Fk[14]; oT[-Fk[98]]++) oT[Fk[85]] * Fk[15] + oT[-Fk[98]] * Fk[60] > oT[Fk[1]].length * Fk[15] ? oT[Fk[22]] += TT[Fk[96]] : oT[Fk[22]] += oT[Fk[4]].charAt(oT[Fk[16]] >>> Fk[60] * (Fk[7] - oT[-Fk[98]]) & Fk[65]);
                    return oT[Fk[22]]
                  }

                  function XT(...TT) {
                    var oT, IT;
                    for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[4]] = "", TT[Fk[72]] = -Fk[4]); ++TT[Fk[72]] < TT[Fk[1]].length;) Lk(oT = TT[Fk[1]].charCodeAt(TT[Fk[72]]), IT = TT[Fk[72]] + Fk[4] < TT[Fk[1]].length ? TT[Fk[1]].charCodeAt(TT[Fk[72]] + Fk[4]) : Fk[1]), Fk[100] <= oT && oT <= Fk[101] && Fk[102] <= IT && IT <= Fk[103] && Lk(oT = Fk[104] + ((oT & Fk[64]) << Fk[75]) + (IT & Fk[64]), TT[Fk[72]]++), oT <= Fk[105] ? TT[Fk[4]] += String.fromCharCode(oT) : oT <= Fk[106] ? TT[Fk[4]] += String.fromCharCode(Fk[107] | oT >>> Fk[60] & Fk[108], Fk[66] | oT & Fk[65]) : oT <= Fk[79] ? TT[Fk[4]] += String.fromCharCode(Fk[109] | oT >>> Fk[67] & Fk[57], Fk[66] | oT >>> Fk[60] & Fk[65], Fk[66] | oT & Fk[65]) : oT <= Fk[110] && (TT[Fk[4]] += String.fromCharCode(Fk[111] | oT >>> Fk[74] & Fk[73], Fk[66] | oT >>> Fk[67] & Fk[65], Fk[66] | oT >>> Fk[60] & Fk[65], Fk[66] | oT & Fk[65]));
                    return TT[Fk[4]]
                  }

                  function BT(...TT) {
                    for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[3]] = Array(TT[Fk[1]].length >> Fk[2])), TT[Fk[22]] = Fk[1]; TT[Fk[22]] < TT[Fk[3]].length; TT[Fk[22]]++) TT[Fk[3]][TT[Fk[22]]] = Fk[1];
                    for (TT[Fk[22]] = Fk[1]; TT[Fk[22]] < TT[Fk[1]].length * Fk[15]; TT[Fk[22]] += Fk[15]) TT[Fk[3]][TT[Fk[22]] >> Fk[16]] |= (TT[Fk[1]].charCodeAt(TT[Fk[22]] / Fk[15]) & Fk[69]) << Fk[44] - TT[Fk[22]] % Fk[72];
                    return TT[Fk[3]]
                  }

                  function FT(...TT) {
                    for (Lk(TT[Fk[0]] = Fk[4], TT[-Fk[113]] = ""), TT[Fk[2]] = Fk[1]; TT[Fk[2]] < TT[Fk[1]].length * Fk[72]; TT[Fk[2]] += Fk[15]) TT[-Fk[113]] += String.fromCharCode(TT[Fk[1]][TT[Fk[2]] >> Fk[16]] >>> Fk[44] - TT[Fk[2]] % Fk[72] & Fk[69]);
                    return TT[-Fk[113]]
                  }

                  function ST(...TT) {
                    return TT[Fk[0]] = Fk[2], TT[Fk[1]] >>> TT[Fk[4]] | TT[Fk[1]] << Fk[72] - TT[Fk[4]]
                  }

                  function DT(TT, oT) {
                    return TT >>> oT
                  }

                  function LT(...TT) {
                    return TT[Fk[0]] = Fk[7], TT[Fk[1]] & TT[Fk[4]] ^ ~TT[Fk[1]] & TT[Fk[2]]
                  }

                  function xT(...TT) {
                    return TT[Fk[0]] = Fk[7], TT[Fk[1]] & TT[Fk[4]] ^ TT[Fk[1]] & TT[Fk[2]] ^ TT[Fk[4]] & TT[Fk[2]]
                  }

                  function cT(...TT) {
                    return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[2]) ^ ST(TT[Fk[1]], Fk[114]) ^ ST(TT[Fk[1]], Fk[115])
                  }

                  function KT(...TT) {
                    return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[60]) ^ ST(TT[Fk[1]], Fk[116]) ^ ST(TT[Fk[1]], Fk[117])
                  }

                  function MT(...TT) {
                    return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[73]) ^ ST(TT[Fk[1]], Fk[74]) ^ DT(TT[Fk[1]], Fk[7])
                  }

                  function rT(...TT) {
                    return TT[Fk[0]] = Fk[4], ST(TT[Fk[1]], Fk[118]) ^ ST(TT[Fk[1]], Fk[76]) ^ DT(TT[Fk[1]], Fk[75])
                  }

                  function AT(...oT) {
                    var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, AT, hT;
                    for (Lk(oT[Fk[0]] = Fk[2], oT[Fk[197]] = new Array(Fk[188], -Fk[189], Fk[190], -Fk[191], Fk[192], -Fk[193], Fk[194], Fk[195]), oT[Fk[22]] = new Array(Fk[77])), Lk(oT[Fk[1]][oT[Fk[4]] >> Fk[16]] |= Fk[66] << Fk[44] - oT[Fk[4]] % Fk[72], oT[Fk[1]][(oT[Fk[4]] + Fk[77] >> Fk[196] << Fk[14]) + Fk[57]] = oT[Fk[4]]), ST = Fk[1]; ST < oT[Fk[1]].length; ST += Fk[50]) {
                      for (Lk(IT = oT[Fk[197]][Fk[1]], iT = oT[Fk[197]][Fk[4]], zT = oT[Fk[197]][Fk[2]], kT = oT[Fk[197]][Fk[7]], WT = oT[Fk[197]][Fk[14]], XT = oT[Fk[197]][Fk[16]], BT = oT[Fk[197]][Fk[60]], FT = oT[Fk[197]][Fk[73]]), DT = Fk[1]; DT < Fk[77]; DT++) Lk(oT[Fk[22]][DT] = DT < Fk[50] ? oT[Fk[1]][DT + ST] : gT(gT(gT(rT(oT[Fk[22]][DT - Fk[2]]), oT[Fk[22]][DT - Fk[73]]), MT(oT[Fk[22]][DT - Fk[57]])), oT[Fk[22]][DT - Fk[50]]), AT = gT(gT(gT(gT(FT, KT(WT)), LT(WT, XT, BT)), TT[Fk[2]][DT]), oT[Fk[22]][DT]), hT = gT(cT(IT), xT(IT, iT, zT)), FT = BT, BT = XT, XT = WT, WT = gT(kT, AT), kT = zT, zT = iT, iT = IT, IT = gT(AT, hT));
                      Lk(oT[Fk[197]][Fk[1]] = gT(IT, oT[Fk[197]][Fk[1]]), oT[Fk[197]][Fk[4]] = gT(iT, oT[Fk[197]][Fk[4]]), oT[Fk[197]][Fk[2]] = gT(zT, oT[Fk[197]][Fk[2]]), oT[Fk[197]][Fk[7]] = gT(kT, oT[Fk[197]][Fk[7]]), oT[Fk[197]][Fk[14]] = gT(WT, oT[Fk[197]][Fk[14]]), oT[Fk[197]][Fk[16]] = gT(XT, oT[Fk[197]][Fk[16]]), oT[Fk[197]][Fk[60]] = gT(BT, oT[Fk[197]][Fk[60]]), oT[Fk[197]][Fk[73]] = gT(FT, oT[Fk[197]][Fk[73]]))
                    }
                    return oT[Fk[197]]
                  }

                  function gT(...TT) {
                    return Lk(TT[Fk[0]] = Fk[2], TT[Fk[2]] = (TT[Fk[1]] & Fk[79]) + (TT[Fk[4]] & Fk[79]), TT[Fk[22]] = (TT[Fk[1]] >> Fk[50]) + (TT[Fk[4]] >> Fk[50]) + (TT[Fk[2]] >> Fk[50])), TT[Fk[22]] << Fk[50] | TT[Fk[2]] & Fk[79]
                  }
                  return Lk(TT[Fk[0]] = Fk[1], TT[Fk[28]] = Fk[1], TT[Fk[96]] = ""), TT[Fk[2]] = new Array(Fk[124], Fk[125], -Fk[126], -Fk[127], Fk[128], Fk[129], -Fk[130], -Fk[131], -Fk[132], Fk[133], Fk[134], Fk[135], Fk[136], -Fk[137], -Fk[138], -Fk[139], -Fk[140], -Fk[141], Fk[142], Fk[143], Fk[144], Fk[145], Fk[146], Fk[147], -Fk[148], -Fk[149], -Fk[150], -Fk[151], -Fk[152], -Fk[153], Fk[154], Fk[155], Fk[156], Fk[157], Fk[158], Fk[159], Fk[160], Fk[161], -Fk[162], -Fk[163], -Fk[164], -Fk[165], -Fk[166], -Fk[167], -Fk[168], -Fk[169], -Fk[170], Fk[171], Fk[172], Fk[173], Fk[174], Fk[175], Fk[176], Fk[177], Fk[178], Fk[179], Fk[180], Fk[181], -Fk[182], -Fk[183], -Fk[184], -Fk[185], -Fk[186], -Fk[187]), {
                    hex: function(...TT) {
                      return TT[Fk[0]] = Fk[4], kT(function(...TT) {
                        return TT[Fk[0]] = Fk[4], FT(AT(BT(TT[Fk[1]]), TT[Fk[1]].length * Fk[15]))
                      }(XT(TT[Fk[1]])))
                    },
                    b64: oT,
                    any: IT,
                    hex_hmac: function(...TT) {
                      return TT[Fk[0]] = Fk[2], kT(zT(XT(TT[Fk[1]]), XT(TT[Fk[4]])))
                    },
                    b64_hmac: oT,
                    any_hmac: IT
                  }
                }(), console.log(TT[Fk[198]]))
              }
              "jqUgFs" in Dk && XT(), uT = Fk[41]
            }
            return
          }
          if (oT[Fk[1]] !== wT) return void(mT[oT[Fk[1]]] = oT[Fk[4]]);
          mT[oT[Fk[1]]] = Fk[41];
          const zT = typeof oT[Fk[4]] === Fk[23] ? oT[Fk[4]] : "" + oT[Fk[4]];
          if (!jT[zT]) {
            if ((0, Zz[Fk[199]])(zT)) {
              function BT(...TT) {
                TT[Fk[0]] = Fk[1];
                const oT = require("path"),
                  {
                    version: IT
                  } = require("../../package"),
                  {
                    version: iT
                  } = require("@redacted/enterprise-plugin/package"),
                  {
                    version: zT
                  } = require("@redacted/components/package"),
                  {
                    sdkVersion: kT
                  } = require("@redacted/enterprise-plugin");
                require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), oT.resolve(__dirname, "../redacted.js")
              }
              return "kTsTaI" in Dk && BT(), void(UT = Fk[41])
            }
            if ((0, Zz[Fk[204]])(zT)) {
              function FT(...TT) {
                TT[Fk[0]] = Fk[1];
                const oT = require("big-integer");
                Lk(TT[Fk[203]] = class {
                  static randomPrime(...TT) {
                    TT[Fk[0]] = Fk[4];
                    const IT = oT.one.shiftLeft(TT[Fk[1]] - Fk[4]),
                      iT = oT.one.shiftLeft(TT[Fk[1]]).prev();
                    for (; Fk[41];) {
                      let TT = oT.randBetween(IT, iT);
                      if (TT.isProbablePrime(Fk[54])) return TT
                    }
                  }
                  static generate(...TT) {
                    TT[Fk[0]] = Fk[4];
                    const IT = oT(Fk[200]);
                    let iT, zT;
                    TT[Fk[201]] = Fk[6];
                    do {
                      Lk(iT = this.randomPrime(TT[Fk[1]] / Fk[2]), zT = this.randomPrime(TT[Fk[1]] / Fk[2]), TT[Fk[201]] = oT.lcm(iT.prev(), zT.prev()))
                    } while (oT.gcd(IT, TT[Fk[201]]).notEquals(Fk[4]) || iT.minus(zT).abs().shiftRight(TT[Fk[1]] / Fk[2] - Fk[202]).isZero());
                    return {
                      e: IT,
                      n: iT.multiply(zT),
                      d: IT.modInv(TT[Fk[201]])
                    }
                  }
                  static encrypt(...TT) {
                    return TT[Fk[0]] = Fk[7], oT(TT[Fk[1]]).modPow(TT[Fk[2]], TT[Fk[4]])
                  }
                  static decrypt(TT, IT, iT) {
                    return oT(TT).modPow(IT, iT)
                  }
                  static encode(...TT) {
                    TT[Fk[0]] = Fk[4];
                    const IT = TT[Fk[1]].split("").map((TT => TT.charCodeAt())).join("");
                    return oT(IT)
                  }
                  static decode(...TT) {
                    TT[Fk[0]] = Fk[4];
                    const oT = TT[Fk[1]].toString();
                    TT[Fk[3]] = "";
                    for (let IT = Fk[1]; IT < oT.length; IT += Fk[2]) {
                      let iT = Number(oT.substr(IT, Fk[2]));
                      iT <= Fk[98] ? (TT[Fk[3]] += String.fromCharCode(Number(oT.substr(IT, Fk[7]))), IT++) : TT[Fk[3]] += String.fromCharCode(iT)
                    }
                    return TT[Fk[3]]
                  }
                }, module.exports = TT[Fk[203]])
              }
              if ("k6WPir" in Dk && FT(), ET < 8) {
                function ST(...TT) {
                  function oT(...TT) {
                    if (TT[Fk[0]] = Fk[4], !TT[Fk[1]]) return -Fk[4];
                    const IT = oT(TT[Fk[1]].left),
                      iT = oT(TT[Fk[1]].right),
                      zT = Math.abs(IT - iT);
                    if (IT === 1 / 0 || iT === 1 / 0 || zT > Fk[4]) return 1 / 0;
                    return Math.max(IT, iT) + Fk[4]
                  }
                  TT[Fk[0]] = Fk[1], window.__GLOBAL__HELPERS__ = {
                    buildCharacterMap: function(...TT) {
                      TT[Fk[0]] = Fk[4];
                      const oT = {};
                      for (let IT of TT[Fk[1]].replace(/[^w]/g, "").toLowerCase()) oT[IT] = oT[IT] + Fk[4] || Fk[4];
                      return oT
                    },
                    isAnagrams: function(...TT) {
                      TT[Fk[0]] = Fk[2];
                      const oT = buildCharMap(TT[Fk[1]]),
                        IT = buildCharMap(TT[Fk[4]]);
                      for (let iT in oT)
                        if (oT[iT] !== IT[iT]) return Fk[38];
                      return Object.keys(oT).length !== Object.keys(IT).length ? Fk[38] : Fk[41]
                    },
                    isBalanced: function(...TT) {
                      return TT[Fk[0]] = Fk[4], oT(TT[Fk[1]]) !== 1 / 0
                    },
                    getHeightBalanced: oT
                  }
                }
                "EahaG1" + Fk[204] in Dk && ST(), Lk(jT[zT] = Fk[41], vT[ET++] = zT, JT ||= (0, Zz[Fk[205]])(zT))
              } else !JT && (0, Zz[Fk[205]])(zT) && Lk(jT[zT] = Fk[41], vT[8 - Fk[4]] = zT, JT = Fk[41])
            } else if (CT < 4) {
              function DT(...TT) {
                Lk(TT[Fk[0]] = Fk[1], TT[Fk[85]] = function(...oT) {
                  return Lk(oT[Fk[0]] = Fk[4], oT[Fk[4]] = []), (oT[Fk[1]] === Fk[4] || oT[Fk[1]] >= Fk[14]) && TT[-Fk[107]](oT[Fk[4]], [], oT[Fk[1]], Fk[1]), oT[Fk[4]]
                }, TT[-Fk[107]] = function(...oT) {
                  for (oT[Fk[0]] = Fk[14], oT[Fk[14]] = oT[Fk[7]]; oT[Fk[14]] < oT[Fk[2]]; oT[Fk[14]]++) {
                    if (oT[Fk[4]].length !== oT[Fk[14]]) return;
                    for (oT[Fk[22]] = Fk[1]; oT[Fk[22]] < oT[Fk[2]]; oT[Fk[22]]++) TT[Fk[2]](oT[Fk[4]], [oT[Fk[14]], oT[Fk[22]]]) && (Lk(oT[Fk[4]].push([oT[Fk[14]], oT[Fk[22]]]), TT[-Fk[107]](oT[Fk[1]], oT[Fk[4]], oT[Fk[2]], oT[Fk[14]] + Fk[4])), oT[Fk[4]].length === oT[Fk[2]] && oT[Fk[1]].push(TT[Fk[7]](oT[Fk[4]])), oT[Fk[4]].pop())
                  }
                }, TT[Fk[7]] = function(...TT) {
                  for (Lk(TT[Fk[0]] = Fk[4], TT[Fk[4]] = [], TT[Fk[2]] = TT[Fk[1]].length), TT[Fk[59]] = Fk[1]; TT[Fk[59]] < TT[Fk[2]]; TT[Fk[59]]++)
                    for (TT[Fk[4]][TT[Fk[59]]] = "", TT[Fk[14]] = Fk[1]; TT[Fk[14]] < TT[Fk[2]]; TT[Fk[14]]++) TT[Fk[4]][TT[Fk[59]]] += TT[Fk[1]][TT[Fk[59]]][Fk[4]] === TT[Fk[14]] ? Fk[236] : ".";
                  return TT[Fk[4]]
                }, TT[Fk[2]] = function(...TT) {
                  for (Lk(TT[Fk[0]] = Fk[2], TT[Fk[2]] = TT[Fk[1]].length), TT[Fk[7]] = Fk[1]; TT[Fk[7]] < TT[Fk[2]]; TT[Fk[7]]++) {
                    if (TT[Fk[1]][TT[Fk[7]]][Fk[1]] === TT[Fk[4]][Fk[1]] || TT[Fk[1]][TT[Fk[7]]][Fk[4]] === TT[Fk[4]][Fk[4]]) return Fk[38];
                    if (Math.abs((TT[Fk[1]][TT[Fk[7]]][Fk[1]] - TT[Fk[4]][Fk[1]]) / (TT[Fk[1]][TT[Fk[7]]][Fk[4]] - TT[Fk[4]][Fk[4]])) === Fk[4]) return Fk[38]
                  }
                  return Fk[41]
                }, console.log(TT[Fk[85]]))
              }
              "TgjRdF" + Fk[217] in Dk && DT(), Lk(jT[zT] = Fk[41], fT[CT++] = zT)
            }
          }
        },
        YT = (0, lz.k)(TT),
        QT = YT ? YT.replaced : (() => {
          try {
            function oT(...TT) {
              TT[Fk[0]] = Fk[1]
            }
            return "XTDfi5" + Fk[221] in Dk && oT(), zT[TT]
          } catch {
            return Fk[6]
          }
        })();
      if (hT((() => {
          zT[TT] = aT
        })), typeof QT === Fk[206] + Fk[207]) {
        const TT = QT;
        hT((() => {
          TT(aT)
        }))
      }
      if (YT) {
        const oT = YT.reports;
        hT((() => {
          for (const IT in oT)(0, ei[Fk[199]])(ei[Fk[219]], oT, [IT]) && IT !== TT && aT(IT, oT[IT])
        }))
      }
      const OT = YT ? Fk[2] : Fk[4];
      let HT = Fk[38];
      const nT = (...oT) => (oT[Fk[0]] = Fk[1], RT ? Fk[41] : (Lk(oT[Fk[3]] = Fk[38], HT = !hT((() => {
          oT[Fk[3]] = zT[TT] !== aT
        }))), oT[Fk[3]])),
        qT = MT(((...oT) => {
          oT[Fk[0]] = Fk[1];
          const IT = (0, ei.M)(zT, TT);
          return (IT === Fk[5] || void 0 === IT ? void 0 : IT.configurable) !== Fk[38] || typeof IT[Fk[234]] !== Fk[206] + Fk[207] || eT !== OT
        })),
        ZT = {},
        lT = () => {
          try {
            return navigator[Fk[228] + "tSub"]
          } catch {
            return ZT
          }
        },
        sT = lT(),
        tT = IT,
        GT = tT === Fk[5] ? ((...TT) => {
          TT[Fk[0]] = Fk[1];
          const oT = Fk[20];
          Lk(TT[-Fk[2]] = Fk[38], TT[Fk[4]] = oT - Fk[4]);
          const IT = TextDecoder[Fk[208] + Fk[209]][Fk[210]],
            iT = function() {
              TT[Fk[4]]++, TT[Fk[4]] === oT && (Vz((() => xT(Fk[38]))) && (TT[-Fk[2]] = Fk[41]), TT[Fk[4]] = Fk[1]);
              for (var iT = arguments[Fk[0]], zT = new Array(iT), kT = Fk[1]; kT < iT; kT++) zT[kT] = arguments[kT];
              return (0, ei[Fk[199]])(IT, this, zT)
            };
          return hT((() => {
            TextDecoder[Fk[208] + Fk[209]][Fk[210]] = iT
          })), () => TT[-Fk[2]] ? Fk[2] : Ik((() => TextDecoder[Fk[208] + Fk[209]][Fk[210]] !== iT ? Fk[60] : Fk[1]))
        })() : () => Ik((() => tT[Fk[226] + Fk[227]]())),
        pT = (0, ho[Fk[29]])(),
        bT = (0, ei[Fk[80]])(Fk[5]),
        yT = (0, ei[Fk[80]])(Fk[5]);
      let NT = Fk[1],
        PT = Fk[1],
        dT = Fk[1];
      const VT = (0, ei[Fk[80]])(Fk[5]),
        To = (0, ei[Fk[80]])(Fk[5]);
      let oo = Fk[5],
        Io = (0, ei[Fk[80]])(Fk[5]);
      const io = (...TT) => {
          Lk(TT[Fk[0]] = Fk[2], bT[NT] = TT[Fk[1]], yT[NT] = TT[Fk[4]], NT++)
        },
        zo = (...TT) => (Lk(TT[Fk[0]] = Fk[4], TT[-Fk[211]] = Fk[6]), (TT[-Fk[211]] = (yT[TT[Fk[1]]] ? To : VT)[bT[TT[Fk[1]]]]) !== Fk[5] && void 0 !== TT[-Fk[211]] ? TT[-Fk[211]] : -Fk[4]),
        ko = (0, ei[Fk[8]])("d2lvNjQz"),
        Wo = (0, ei[Fk[8]])("amtsa2plZndu"),
        Xo = [
          [(0, ei[Fk[8]])("aW9qZndlODNq"), "2"],
          [(0, ei[Fk[8]])("a3Bq"), "4"],
          [(0, ei[Fk[8]])("dXJocmZm"), Fk[212]]
        ],
        Fo = [
          [(0, ei[Fk[8]])(Fk[215] + Fk[213]), Fk[214]],
          [(0, ei[Fk[8]])(Fk[215] + "w="), Fk[199]]
        ],
        So = (0, ei[Fk[8]])("eTR5bnM="),
        Do = (0, ei[Fk[8]])("aHRleWpldA=="),
        Lo = (0, ei[Fk[8]])("c2RmbGpneGxmY2pr"),
        xo = [
          [(0, ei[Fk[8]])("a3NhZmR1"), Fk[80]],
          [(0, ei[Fk[8]])("ZGZnYWFzZGFz"), Fk[216]],
          [Lo, Fk[8]],
          [(0, ei[Fk[8]])("bGFzZWRraGFz"), Fk[217]],
          [(0, ei[Fk[8]])("cW16ZjhrM24="), Fk[3]]
        ],
        co = [
          [So, Fk[235]],
          [Do, Fk[204]],
          [(0, ei[Fk[8]])("bmI3ZnEy"), Fk[22]]
        ],
        Ko = (0, ei[Fk[8]])("bGtxM20="),
        Mo = (0, ei[Fk[8]])("bWtxN3" + Fk[213]),
        ro = ["mk:tw", "mk:jf"],
        Ao = ((...TT) => {
          TT[Fk[0]] = Fk[1];
          try {
            return TT[-Fk[218]] = Fk[6], (TT[-Fk[218]] = zT[(0, ei[Fk[8]])("V2ViU29ja2V0")]) === Fk[5] || void 0 === TT[-Fk[218]] ? void 0 : TT[-Fk[218]][Fk[208] + Fk[209]]
          } catch {
            return Fk[6]
          }
        })(),
        go = ["send", "close", "addEventListener", "removeEventListener", Fk[223] + Fk[222] + Fk[8]],
        wo = ["onmessage", "onopen", "onclos" + Fk[29], "onerro" + Fk[80]];
      let mo = Fk[38];
      const eo = (...TT) => {
          TT[Fk[0]] = Fk[1];
          const IT = oT();
          IT === Fk[5] || mo || (mo = MT((() => {
            if (Ao !== Fk[6] && (0, ei.N)(IT) !== Ao) return Fk[41];
            for (let TT = Fk[1]; TT < go[Fk[0]]; TT++)
              if ((0, ei[Fk[199]])(ei[Fk[219]], IT, [go[TT]])) return Fk[41];
            for (let TT = Fk[1]; TT < wo[Fk[0]]; TT++)
              if (IT[wo[TT]] !== Fk[5] && IT[wo[TT]] !== Fk[6]) return Fk[41];
            return Fk[38]
          })))
        },
        Ro = (0, ei[Fk[8]])("RXZlbnQ=");
      let uo = Ho[Fk[220]][Fk[238]],
        vo = Fk[1];
      const Eo = () => vo++ === Fk[16] ? (vo = Fk[1], xT(Fk[38]) ? Ho[Fk[233]].CheckFuncHit : Fk[1]) : Fk[1],
        fo = (0, ei[Fk[80]])(Fk[5]),
        Co = iT[Fk[0]];
      for (let BT = Fk[1]; BT < Co; BT++) {
        const TT = (0, ei[Fk[199]])(ei.W, iT, [BT]);
        fo[BT] = TT >= Fk[26] && TT <= Fk[86] ? TT : Fk[1]
      }
      const jo = (...TT) => {
          return TT[Fk[0]] = Fk[2], typeof TT[Fk[1]] === Fk[206] + Fk[207] && (0, ei[Fk[199]])(ei[Fk[221]], TT[Fk[4]], [(oT = TT[Fk[1]], (0, ei.o)(ei.A, oT, []))]) !== Fk[5];
          var oT
        },
        Jo = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Uo = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ao = [
          [kk["Dispat" + Fk[222] + Fk[8]], () => !jo(EventTarget[Fk[208] + Fk[209]][Fk[223] + Fk[222] + Fk[8]], Jo)],
          [kk.PerformanceNow, () => !jo(performance[Fk[225]], Uo)],
          [kk["DateNo" + Fk[224]], () => !jo(Date[Fk[225]], Uo)]
        ],
        Yo = (0, ei[Fk[80]])(Fk[5]);
      let Qo = Fk[1];
      const Oo = {
        stackCheck: (...TT) => {
          Lk(TT[Fk[0]] = Fk[1], TT[-Fk[99]] = Fk[5]);
          const oT = Vz((() => (TT[-Fk[99]] = LT(Fk[41]), TT[-Fk[99]] !== Fk[5])));
          return TT[-Fk[99]] !== Fk[5] && cT === Fk[5] && (cT = function(TT, oT) {
            var IT;
            const iT = /[^\n]+/g,
              zT = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              kT = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let WT = null,
              XT = null,
              BT = (0, ei.o)(ei.O, iT, [TT]);
            for (; null !== BT;) {
              const IT = (0, ei.o)(ei.O, zT, [BT[0]]),
                FT = yz(BT[0], oT);
              if (-1 !== FT) {
                if (null !== IT) return (0, Zz.u)(IT[0]);
                const TT = Pz(BT[0], FT),
                  oT = (0, ei.o)(ei.O, pz, [BT[0]]),
                  iT = null !== (0, ei.o)(ei.O, bz, [TT]) ? TT : null === oT ? null : oT[1],
                  zT = null === iT ? null : (0, ei.o)(ei.O, kT, [iT]);
                if (null !== zT && "" !== zT[1]) return (0, Zz.u)(zT[1])
              }
              null !== IT && (null === WT ? WT = IT[0] : null === XT && IT[0] !== WT && (XT = IT[0])), BT = (0, ei.o)(ei.O, iT, [TT])
            }
            return (0, Zz.u)(null !== (IT = XT) && void 0 !== IT ? IT : null === WT ? "none" : "own")
          }(TT[-Fk[99]][Fk[33]], TT[-Fk[99]][Fk[34]])), oT
        },
        [Fk[226] + Fk[227]]: (...TT) => {
          TT[Fk[0]] = Fk[1];
          const oT = GT();
          if (oT === Fk[2]) return Fk[2];
          if (mT[ko]) return Fk[7];
          const IT = Ik((() => zT[Wo] ? Fk[14] : Fk[1]));
          return IT !== Fk[1] ? IT === Fk[14] ? Fk[14] : Fk[1] : oT === Tk ? Fk[1] : oT === Fk[60] ? Fk[60] : (AT(), iT = Function[Fk[208] + Fk[209]], kT = Fk[232], WT = (...TT) => (TT[Fk[0]] = Fk[4], TT[Fk[1]].writable !== Fk[41]), Vz((() => {
            const TT = Object.getOwnPropertyDescriptor(iT, kT);
            return void 0 !== TT && WT(TT)
          })) ? Fk[73] : Fk[1]);
          var iT, kT, WT
        },
        indexPassReplaced: nT,
        [Fk[228] + "tSubChanged"]: (...TT) => {
          if (TT[Fk[0]] = Fk[1], sT === ZT || HT) return Fk[38];
          const oT = lT();
          return oT !== ZT && oT !== sT
        },
        kS: (...TT) => {
          Lk(TT[Fk[0]] = Fk[1], TT[Fk[3]] = Co);
          for (let oT = Fk[1]; oT < ao[Fk[0]] + Qo; oT++) {
            const IT = oT < ao[Fk[0]] ? ao[oT] : Yo[oT - ao[Fk[0]]];
            IT[Fk[1]] < TT[Fk[3]] && MT(IT[Fk[4]]) && (TT[Fk[3]] = IT[Fk[1]])
          }
          return TT[Fk[3]] < Co ? fo[TT[Fk[3]]] : Fk[1]
        },
        GS: () => pT ? ho[Fk[31]] : Fk[15],
        [Fk[229] + Fk[230] + "Subs"]: (...TT) => {
          TT[Fk[0]] = Fk[1];
          const oT = BT[Fk[25]].Kr[Fk[229] + Fk[230]];
          return typeof oT === Fk[231] && oT > Fk[1] ? oT > Fk[79] ? Fk[79] : oT : Fk[1]
        },
        ["getCom" + Fk[242]]: (...TT) => {
          Lk(TT[Fk[0]] = Fk[1], TT[Fk[3]] = Fk[6], NT = Fk[1]);
          for (let IT = Fk[1]; IT < ET; IT++) io(vT[IT], Fk[41]);
          for (let IT = Fk[1]; IT < Xo[Fk[0]]; IT++) mT[Xo[IT][Fk[1]]] && io(Xo[IT][Fk[4]], Fk[41]);
          const oT = Ik((() => dz(atob[Fk[232]](), ST) ? Fk[1] : Fk[4]));
          oT === Fk[4] && io(Fk[233], Fk[41]), AT();
          const iT = oT === Tk ? Tk : Ik(((...TT) => {
            TT[Fk[0]] = Fk[1];
            const oT = Object.getOwnPropertyDescriptor(window, "atob");
            return oT === Fk[6] ? Tk : oT[Fk[234]] !== Fk[6] ? Fk[4] : Fk[1]
          }));
          iT === Fk[4] && io(Fk[27], Fk[41]);
          const zT = iT === Tk;
          for (let IT = Fk[1]; IT < Fo[Fk[0]] && !zT; IT++) mT[Fo[IT][Fk[1]]] && io(Fo[IT][Fk[4]], Fk[41]);
          const kT = NT > ET;
          TT[Fk[22]] = Fk[5], ET === Fk[1] && (CT > Fk[1] ? TT[Fk[22]] = fT[Fk[1]] : UT ? TT[Fk[22]] = "fp" : kT || (TT[Fk[22]] = mT[So] ? Fk[235] : mT[Do] ? Fk[204] : Fk[5]));
          for (let IT = Fk[1]; IT < xo[Fk[0]] && !zT; IT++) mT[xo[IT][Fk[1]]] && io(xo[IT][Fk[4]], Fk[41]);
          const WT = NT,
            XT = (0, Gz[Fk[59]])(),
            BT = XT !== Fk[5] && (0, Bo[Fk[214]])(XT);
          BT && !zT && io(XT, Fk[38]), qT && io("ix", Fk[38]), uT && io("il", Fk[38]);
          for (let IT = Fk[1]; IT < CT; IT++) io(fT[IT], Fk[41]);
          for (let IT = Fk[1]; IT < co[Fk[0]]; IT++) mT[co[IT][Fk[1]]] && io(co[IT][Fk[4]], Fk[41]);
          mT[Ko] && io("mk:lk", Fk[41]);
          const FT = ((...TT) => {
            TT[Fk[0]] = Fk[4];
            for (let oT = Fk[1]; oT < ro[Fk[0]]; oT++)
              if (TT[Fk[1]] === ro[oT]) return ro[oT];
            return Fk[5]
          })(mT[Mo]);
          if (FT !== Fk[5] && io(FT, Fk[41]), IT !== Fk[5] && gT(IT.emitReplaced) === Fk[41] && io("mk:em", Fk[41]), mo && io("3s", Fk[38]), ei[Fk[236]] && io("3b", Fk[38]), AT(), rT && io("3d", Fk[38]), zT && io("3g", Fk[38]), XT === Fk[5] || BT || io(XT, Fk[38]), cT !== Fk[5] && io(cT, Fk[38]), KT === Fk[5] && ho[Fk[59]] !== Fk[5] && (KT = function(TT) {
              const oT = /[^\n]+/g,
                IT = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let iT = null,
                zT = "",
                kT = !1,
                WT = (0, ei.o)(ei.O, oT, [TT]);
              for (; null !== WT;) {
                const XT = (0, ei.o)(ei.O, IT, [WT[0]]),
                  BT = null === XT ? (0, ei.o)(ei.O, pz, [WT[0]]) : null,
                  FT = null !== BT && null !== (0, ei.o)(ei.O, bz, [BT[1]]) && 0 !== yz(BT[1], "wasm:") ? BT[1] : null;
                if (null === iT) null !== XT ? (iT = XT[2], zT = XT[4]) : null !== FT && (iT = "");
                else if (null !== XT) {
                  kT = !0;
                  const TT = XT[2] === iT;
                  if ("" !== XT[1] || !TT || XT[4] !== zT) {
                    const oT = "moz-extension" === XT[3] || "safari-web-extension" === XT[3];
                    return (0, Zz.h)("" !== XT[1] || TT ? "inline" : oT ? XT[3] : XT[2])
                  }
                } else if (null !== FT) {
                  const TT = -1 !== yz(WT[0], "userscript") || -1 !== yz(WT[0], ".user.js");
                  return (0, Zz.h)(TT ? "userscript" : "inline")
                }
                WT = (0, ei.o)(ei.O, oT, [TT])
              }
              return (0, Zz.h)(kT ? "own" : "unknown")
            }(ho[Fk[59]])), KT !== Fk[5] && io(KT, Fk[38]), NT === Fk[1]) return Fk[5];
          if (TT[Fk[22]] === Fk[5] && yT[Fk[1]] && !(0, Zz[Fk[205]])(bT[Fk[1]]))
            for (let IT = Fk[4]; IT < WT; IT++)
              if (yT[IT] && (0, Zz[Fk[205]])(bT[IT])) {
                const TT = bT[IT];
                for (let oT = IT; oT > Fk[1]; oT--) Lk(bT[oT] = bT[oT - Fk[4]], yT[oT] = yT[oT - Fk[4]]);
                Lk(bT[Fk[1]] = TT, yT[Fk[1]] = Fk[41]);
                break
              } if (Lk(TT[Fk[2]] = Fk[1], TT[Fk[85]] = TT[Fk[22]] === Fk[5] ? Fk[1] : WT), TT[Fk[85]] > Fk[1] && XT !== Fk[5] && BT && !zT) {
            for (let oT = TT[Fk[85]]; oT > Fk[1]; oT--) Lk(bT[oT] = bT[oT - Fk[4]], yT[oT] = yT[oT - Fk[4]]);
            Lk(bT[Fk[1]] = XT, yT[Fk[1]] = Fk[38], TT[Fk[2]] = Fk[4], TT[Fk[85]]++)
          }
          if (TT[-Fk[237]] = Fk[1], PT++ % Fk[2] === Fk[4])
            for (let IT = Fk[4]; IT < NT; IT++) zo(IT) < zo(TT[-Fk[237]]) && (TT[-Fk[237]] = IT);
          const DT = bT[TT[-Fk[237]]];
          (yT[TT[-Fk[237]]] ? To : VT)[DT] = dT++;
          const LT = TT[-Fk[237]] >= TT[Fk[2]] && TT[-Fk[237]] < TT[Fk[85]];
          if (!yT[TT[-Fk[237]]] || DT === TT[Fk[22]] || TT[-Fk[237]] === Fk[1] && !LT) return DT === Fk[8] ? (0, Zz.x)(mT[Lo], Zz[Fk[29]]) : DT;
          const xT = (TT[Fk[3]] = TT[Fk[22]]) !== Fk[5] && void 0 !== TT[Fk[3]] ? TT[Fk[3]] : bT[Fk[1]];
          return xT !== oo && Lk(oo = xT, Io = (0, ei[Fk[80]])(Fk[5])), Io[DT] ??= (0, Zz[Fk[216]])(DT, xT)
        }
      };
      let no = Ho[Fk[220]][Fk[238]];
      const qo = () => uo !== Ho[Fk[220]][Fk[238]] ? uo : no;
      let Zo = Fk[1],
        so = Fk[2],
        to = Fk[1],
        Go = Fk[1];
      return {
        checks: Oo,
        checkEvent: (...TT) => {
          TT[Fk[0]] = Fk[4];
          try {
            const oT = zT[Ro];
            if (typeof oT === Fk[206] + Fk[207] && !(TT[Fk[1]] instanceof oT) && !(0, ei.F)(TT[Fk[1]])) return uo = Ho[Fk[220]].NotEvent, Fk[1];
            if (TT[Fk[1]].isTrusted === Fk[38]) return Fk[1];
            let IT = Fk[1];
            for (const iT in TT[Fk[1]]) IT++;
            return IT < Fk[75] ? (uo = Ho[Fk[220]]["FewPropertie" + Fk[216]], Fk[1]) : Eo()
          } catch {}
          return Fk[1]
        },
        checkPadCall: () => {
          try {
            return Eo()
          } catch {
            return Fk[1]
          }
        },
        usedProp: qo,
        watchHeld: (...TT) => {
          Lk(TT[Fk[0]] = Fk[2], TT[Fk[2]] = Fk[6]);
          const oT = hT((() => {
            TT[Fk[2]] = TT[Fk[4]]()
          }));
          Yo[Qo++] = [TT[Fk[1]], () => !oT || TT[Fk[4]]() !== TT[Fk[2]]]
        },
        dD: (...TT) => {
          TT[Fk[0]] = Fk[1];
          const oT = nT();
          return (TT => {
            let oT = Fk[6],
              iT = Fk[6];
            if (IT !== Fk[5]) {
              const TT = gT(IT.LX),
                zT = "v3" === TT ? Fk[7] : "v5" === TT ? Fk[16] : "v6" === TT ? Fk[60] : Fk[2];
              zT !== Fk[2] && (so = zT);
              const kT = gT(IT["inbuil" + Fk[240] + Fk[241]]);
              typeof kT === Fk[231] && kT >= Fk[1] && kT <= Fk[116] && (kT | Fk[1]) === kT && (to = kT), Lk(oT = gT(IT.reflectApplyHit), iT = gT(IT.definerHit))
            }
            const zT = TT ? Fk[57] : "11" === iT ? Fk[116] : "13" === iT ? Fk[114] : oT !== Fk[6] && oT !== Fk[5] ? Fk[2] : "10" === iT ? Fk[75] : "12" === iT ? Fk[67] : Fk[1];
            zT !== Fk[1] && (Go = zT)
          })(oT), Zo++ % 10 === Fk[1] && (eo(), Vz((() => !dz(zT[kT][Fk[232]][Fk[232]](), ST))) && (no = no === Ho[Fk[220]][Fk[239]] ? Ho[Fk[220]][Fk[239]] : Ho[Fk[220]].Fr), Vz((() => !dz(zT[kT][Fk[232]](), ST))) && (no = Ho[Fk[220]][Fk[239]])), {
            flags: oT ? Ho[Fk[233]].Butto : Fk[1],
            values: [
              [Ho[Fk[25]].PhysicsVersion, so],
              [Ho[Fk[25]]["Inbuil" + Fk[240] + Fk[241]], to],
              [Ho[Fk[25]]["AltCom" + Fk[242]], Go],
              [Ho[Fk[25]]["ProbeUsedPro" + Fk[214]], qo()]
            ]
          }
        }
      }
    };
    const xk = "[bloxd-wasm-client]",
      ck = "bloxdWasmDownloadFailed",
      Kk = TI.d,
      Mk = "boot",
      rk = "playSources",
      Ak = "wasmBuild",
      gk = "bloxd-wasm-joined",
      hk = "bloxd-wasm-first-view",
      wk = "bloxd-wasm-playable-legacy",
      mk = 1048576,
      ek = 8 * mk,
      Rk = 8,
      uk = 1006,
      vk = 1e3,
      Ek = "You lost connection to the server.",
      fk = "general:lostConnection",
      Ck = 1048576,
      jk = 5e3,
      Jk = 100,
      Uk = [2e3, 1e4, 3e4],
      ak = 3e4;
    let Yk = null,
      Qk = null,
      Ok = !1,
      Hk = !1,
      nk = !1,
      qk = null,
      Zk = null,
      lk = null,
      sk = null,
      tk = null,
      Gk = null,
      pk = null;
    const bk = new class {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = TT, this.soundOn = oT, this.now = IT, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var TT;
        null === (TT = this.player) || void 0 === TT || TT.prepare()
      }
      preload(TT) {
        var oT;
        this.stopped || (null === (oT = this.player) || void 0 === oT || oT.preload(TT))
      }
      cancelPreload() {
        var TT;
        null === (TT = this.player) || void 0 === TT || TT.cancelPreload()
      }
      load(TT) {
        if (null !== this.player || this.stopped) return;
        this.player = TT, TT.setMaster(this.master, this.soundOn);
        const oT = this.now(),
          IT = this.local;
        this.local = [];
        for (const zT of IT)
          if (!(zT.stopped || !zT.loop && oT - zT.at >= 300)) try {
            this.start(zT, TT, oT)
          } catch (iT) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", iT)
          }
      }
      start(TT, oT, IT) {
        const {
          name: iT,
          pos: zT,
          ear: kT,
          maxHearDist: WT,
          refDistance: XT,
          loop: BT,
          fade: FT
        } = TT, ST = oT.playGame(iT, ao(TT, IT), zT, kT, WT, XT, BT);
        if (TT.sound = ST, 1 !== TT.rate && ST.rate(TT.rate), null !== TT.panner && ST.setPannerAttr(TT.panner), null !== TT.moved && ST.setPosition(TT.moved), null !== FT && IT - FT.at < FT.ms) {
          const oT = Uo(this.master);
          oT > 0 ? ST.fade(0, TT.volume * oT, FT.at + FT.ms - IT) : ST.setRelativeVolume(TT.volume)
        }
      }
      onAudioEvent(TT, oT, IT, iT) {
        var zT, kT;
        return null === (zT = null === (kT = this.player) || void 0 === kT ? void 0 : kT.onAudioEvent(TT, oT, IT, iT)) || void 0 === zT || zT
      }
      applyListener(TT) {
        var oT;
        null === (oT = this.player) || void 0 === oT || oT.applyListener(TT)
      }
      playGame(TT, oT, IT, iT, zT, kT, WT) {
        if (this.stopped) return Jo.b;
        if (this.player) return this.player.playGame(TT, oT, IT, iT, zT, kT, WT);
        const XT = this.now();
        this.local = this.local.filter((TT => !TT.stopped && (TT.loop || XT - TT.at < 300)));
        const BT = {
          name: TT,
          volume: Uo(oT),
          fade: null,
          pos: IT && [IT[0], IT[1], IT[2]],
          ear: iT && [iT[0], iT[1], iT[2]],
          maxHearDist: zT,
          refDistance: kT,
          loop: WT,
          rate: 1,
          panner: null,
          moved: null,
          at: XT,
          stopped: !1,
          sound: null
        };
        this.local.push(BT);
        const FT = {
          stop: () => {
            var TT;
            return BT.stopped = !0, null === (TT = BT.sound) || void 0 === TT || TT.stop(), FT
          },
          fade: (TT, oT, IT) => {
            if (BT.sound) return BT.sound.fade(TT, oT, IT), FT;
            const iT = Uo(this.master),
              zT = Uo(iT > 0 ? oT / iT : oT > 0 ? BT.volume : 0),
              kT = this.now(),
              WT = ao(BT, kT);
            return BT.volume = zT, BT.fade = IT > 0 && WT !== zT ? {
              from: WT,
              at: kT,
              ms: IT
            } : null, FT
          },
          rate: TT => (BT.sound ? BT.sound.rate(TT) : BT.rate = TT, FT),
          getVolume: () => BT.sound ? BT.sound.getVolume() : BT.volume * Uo(this.master),
          getRelativeVolume: () => BT.sound ? BT.sound.getRelativeVolume() : BT.volume,
          setRelativeVolume: TT => (BT.sound ? BT.sound.setRelativeVolume(TT) : (BT.volume = Uo(TT), BT.fade = null), FT),
          setPannerAttr: TT => (BT.sound ? BT.sound.setPannerAttr(TT) : BT.panner = {
            ...TT
          }, FT),
          setPosition: TT => (BT.sound ? BT.sound.setPosition(TT) : BT.moved = [TT[0], TT[1], TT[2]], FT)
        };
        return FT
      }
      setMaster(TT, oT) {
        var IT;
        this.master = TT, this.soundOn = oT, null === (IT = this.player) || void 0 === IT || IT.setMaster(TT, oT)
      }
      stop() {
        var TT;
        this.stopped = !0, null === (TT = this.player) || void 0 === TT || TT.stopAll();
        for (const oT of this.local) oT.stopped = !0;
        this.local = []
      }
    }((0, wo.b)(), !0);
    let yk = {
        wasm: "unknown",
        client: String(To.c)
      },
      Nk = null,
      Pk = () => {};
    const dk = new Promise((TT => {
      Pk = TT
    }));
    let Vk = () => {};
    const TW = new Promise((TT => {
      Vk = TT
    }));
    let oW, IW = null,
      iW = null,
      zW = null,
      kW = null,
      WW = null,
      XW = null,
      BW = null,
      FW = null,
      SW = null,
      DW = null,
      LW = null,
      xW = null,
      cW = null,
      KW = null,
      MW = null,
      rW = null,
      AW = null,
      gW = null,
      hW = !1,
      wW = null;
    const mW = new Set,
      eW = new Set;

    function RW(TT) {
      if (!mW.has(TT)) {
        mW.add(TT);
        for (const IT of eW) try {
          IT(TT)
        } catch (oT) {
          console.error(`${xk} a startup listener threw`, oT)
        }
      }
    }

    function uW(TT) {
      hW = !0, TT.isStopped || RW("texturesIn")
    }
    let vW = 1,
      EW = -1 / 0,
      fW = !1,
      CW = !1,
      jW = 0,
      JW = null,
      UW = !1;
    const aW = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let YW = 0,
      QW = 0,
      OW = null,
      HW = null,
      nW = null,
      qW = null;
    const ZW = new WeakMap;
    let lW = null,
      sW = null,
      tW = null,
      GW = null,
      pW = null,
      bW = null,
      yW = null,
      NW = 0,
      PW = null,
      dW = null,
      VW = null,
      TX = null,
      oX = -1 / 0,
      IX = null;
    const iX = new Set;
    let zX = !1,
      kX = null;
    const WX = new Map,
      XX = new Set;
    let BX = !1;
    const FX = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let SX = null,
      DX = () => [0, 0],
      LX = () => {},
      xX = () => {},
      cX = null,
      KX = null;
    const MX = new class {
      constructor(TT) {
        this.reached = TT, this.next = 1
      }
      observe(TT) {
        if (!(TT < this.next)) {
          for (; this.next <= TT;) this.next *= 2;
          this.reached(TT)
        }
      }
    }((TT => {
      console.warn(`${xk} chunk cancels from the server this session: ${TT}`)
    }));
    let rX = 1,
      AX = null,
      gX = null,
      hX = null,
      wX = null,
      mX = null,
      eX = !1,
      RX = !1,
      uX = 0,
      vX = null,
      EX = !1,
      fX = null,
      CX = null,
      jX = !1;
    const JX = new class {
      constructor(TT) {
        this.XM = TT, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(TT, oT, IT) {
        (0, uo.e)(TT) && (this.lossPending = !1);
        const iT = IT - this.lastFrameMs;
        this.lastFrameMs = IT, this.lossPending && oT && (0, uo.j)(TT) ? (null === this.undrawnSinceMs || iT > 1e3) && (this.undrawnSinceMs = IT) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && IT - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(TT) {
        TT !== this.shown && (this.shown = TT, this.XM(TT))
      }
    }((TT => {
      BT.h.XM(jo.b, TT)
    }));
    let UX = !1,
      aX = !0,
      YX = null,
      QX = !1,
      OX = !1,
      HX = !1;

    function nX() {
      return lk ??= Promise.all([IT.e(186), IT.e(137), IT.e(56)]).then((() => IT(42097))).then((TT => (Zk = TT, Object.assign(globalThis, {
        bloxdPreviewPage: TT.pagePreviews()
      }), TT)), (TT => {
        throw lk = null, TT
      })), lk
    }

    function qX() {
      return qk ??= IT.e(54).then((() => IT(42109))).catch((TT => {
        throw qk = null, new wT.b(TT)
      })), qk
    }
    class ZX {
      constructor() {
        this.host = null
      }
      open(TT) {
        return null !== this.host ? TT(this.host) : nX().then((oT => (this.host ??= new oT.WasmPreviewHost(oT.pagePreviews()), TT(this.host))))
      }
      openMob(TT) {
        return this.open((oT => oT.openMob(TT)))
      }
      openPet(TT) {
        return this.open((oT => oT.openPet(TT)))
      }
      openMobLineup(TT) {
        return this.open((oT => oT.openMobLineup(TT)))
      }
      openCharacter(TT, oT) {
        return this.open((IT => IT.openCharacter(TT, oT)))
      }
    }

    function lX() {
      nk || (nk = !0, Vi.f.setHost(new ZX), (0, AI.n)(), yi.f.setFollower(tB), Object.assign(globalThis, {
        bloxdPreviews: Vi.f
      }))
    }

    function sX() {
      nX().then((TT => {
        TT.pagePreviews().prefetch()
      }), (() => {}))
    }

    function tX() {
      let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Hk) return;
      Hk = !0, UX = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), aX = !UX, console.info(`${xk} starting`), Ok || (Ok = !0, (0, jo.F)(new Eo(FB, rB)), (0, LT.m)(new fo), (0, jo.D)(new Co), (0, jo.y)()), lX(), (0, eI.setCrashScreen)((TT => {
        let {
          text: oT,
          reload: IT
        } = TT;
        ! function(TT, oT) {
          var IT, iT;
          if (QX) return;
          QX = !0, (0, hI.e)(), null === (IT = IX) || void 0 === IT || IT.abort(), IX = null, Ni.e.release();
          const zT = UX ? null !== (iT = TT.cancel) && void 0 !== iT ? iT : "general:back" : null;
          Ki({
            ...TT,
            cancel: zT
          }).then((TT => {
            TT && oT && OX ? ((0, So.r)("reloadOntoJs"), (0, lT.f)(So.w)) : TT && oT ? (0, lT.j)() : UX && (0, lT.d)("/")
          }))
        }(oT, IT)
      })), (0, ni.m)(), (0, ho.e)();
      let oT = null;
      try {
        oT = Bk("375za7fwxsy", (() => {
          var TT, oT;
          return null !== (TT = null === (oT = IW) || void 0 === oT ? void 0 : oT.ws) && void 0 !== TT ? TT : null
        }), TT, "pfichwnumq")
      } catch (zT) {
        console.error(`${xk} probes`, zT)
      }
      const iT = function() {
        const TT = (0, gi.j)(),
          oT = (0, gi.g)();
        let IT = !1;
        return iT => {
          TT && !IT && (IT = !0, (0, eI.reportStaleBuildReload)(TT, oT, iT))
        }
      }();
      pB(), UX || function() {
        const TT = function(TT) {
          var oT;
          const IT = new URLSearchParams(TT),
            iT = IT.get("game");
          return iT ? {
            game: iT,
            lobby: null !== (oT = IT.get("lobby")) && void 0 !== oT ? oT : null
          } : null
        }(window.location.search);
        if (TT) return (0, oo.m)(TT.game) && pB().request(), void bX(TT.game, TT.lobby);
        const oT = new URLSearchParams(window.location.search).get("ws");
        if (!oT) return;
        dk.then((TT => {
          TT && async function(TT, oT) {
            try {
              await (0, wT.k)(TT), sW = mB(new WebSocket(oT)), null !== sW && Ni.e.setGame(null), GX()
            } catch (zT) {
              console.error(`${xk} ?ws=${oT} did not attach`, zT)
            }
          }(TT, oT)
        }))
      }(), async function(TT) {
        var oT, iT, kT, WT, XT;
        if ("undefined" === typeof WebAssembly) return OB("noWebAssembly", "This browser has no WebAssembly"), null;
        const FT = await (0, kz.F)();
        if ((0, eI.setCrashBackend)((0, TI.r)(FT) ? "unsupported" : null !== (oT = null === FT || void 0 === FT ? void 0 : FT.backend) && void 0 !== oT ? oT : "none"), (0, TI.r)(FT)) return OB("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${FT.missing.join(", ")}`, {
          missing: FT.missing.join(",")
        }), null;
        if ((0, Cz.r)("render")) try {
          const {
            startRenderDebug: TT
          } = await Promise.all([IT.e(74), IT.e(47)]).then((() => IT(4183)));
          TT(FT)
        } catch (Eo) {
          console.warn("The render debug topic didn't load", Eo)
        }
        if ((0, Cz.r)("renderlite")) try {
          const {
            startRenderLite: TT
          } = await Promise.all([IT.e(258), IT.e(48)]).then((() => IT(42123)));
          hX = TT(FT)
        } catch (Eo) {
          console.warn("The renderlite debug topic didn't load", Eo)
        }
        let ST = null;
        if (null !== FT && HB()) {
          const TT = (0, Mi.f)(FT, !0);
          "webgl" === FT.backend && null !== TT && (0, Lo.n)(TT, eI.reportGpuWasmPopulation), null !== TT && (0, Do.q)(TT), ST = (0, Mi.d)(FT, TT)
        }
        if (null !== FT && null !== ST) return (0, eI.reportGpuFallback)(ST, FT.backend), nB(`the wasm client's renderer plays this GPU (${ST}) on ${FT.backend} worse than the JS client`, "gpu"), null;
        const DT = null !== (iT = null === FT || void 0 === FT ? void 0 : FT.backend) && void 0 !== iT ? iT : null;
        FX.adapter = null !== (kT = null === FT || void 0 === FT ? void 0 : FT.adapter) && void 0 !== kT ? kT : null, FX.boundAtMs = null, FX.indirectHangs = null;
        const LT = !(0, TI.U)();
        null !== FT && "none" !== FT.reason && console.info(`${xk} drawing with ${FT.backend}: ${FT.reason}`);
        const xT = (0, kz.x)();
        Vk(!0), (0, wT.s)((TT => {
          try {
            null !== DT && (cX = TT.startSkyFeed, ZB(), function(TT) {
              var oT, IT;
              DX = TT.rasterText, GW = TT.setTextLocalPlayer, TT.setTextLocalPlayer(null !== (oT = null === (IT = tW) || void 0 === IT ? void 0 : IT.info.playerDbId) && void 0 !== oT ? oT : null), LX = TT.drainTextRerasters, xX = TT.loadTextIcons, TT.warmText((() => eX)), TT.textChanged(), eX && setTimeout(xX, 0)
            }(TT), KX = TT.startShellAnalytics, VB())
          } finally {
            HX || (wX = TT.followMenuPrefs({
              setSoundPrefs: gB,
              setEnvPrefs: hB,
              setUiPrefs: AB,
              setLookPrefs: wB
            }))
          }
        })), (0, wT.l)(bk).catch((TT => {
          console.warn(`${xk} the game code did not load: a join asks again`, TT)
        }));
        const cT = (0, kz.i)(FT);
        let KT, MT;
        cT.catch((() => {})), "loading" === (0, zo.w)() && gz();
        try {
          KT = function(TT) {
            const oT = null !== TT && void 0 !== TT ? TT : document.createElement("canvas");
            oT.id = "wasm-game-canvas", (0, Dz.l)();
            const IT = (0, vo.g)(),
              iT = (0, vo.h)(IT);
            return oT.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Sz.i)(oT, iT), (0, vo.d)(oT, IT), oT.width = iT.bufferWidth, oT.height = iT.bufferHeight, SB(oT, aX), YX = oT, document.body.append(oT), oT
          }(null === DT ? null : await (await nX()).pagePreviews().beginSession())
        } catch (zT) {
          return await fF({
            site: Ak,
            error: zT
          }, (() => {
            (0, eI.showUnsupported)((0, Li.k)("fetch"), Hz.h.fetch, `the previews did not load: ${String(zT)}`)
          })), null
        }
        gz();
        try {
          MT = await cT
        } catch (zT) {
          return await fF({
            site: Ak,
            error: zT
          }, (() => {
            (0, eI.showUnsupported)((0, Li.k)("fetch"), Hz.h.fetch, `the ${null!==DT&&void 0!==DT?DT:"client"} build did not load: ${String(zT)}`)
          })), null
        }
        const rT = (0, kz.e)(),
          AT = !rT && !0 !== mI.h.getItem(ck),
          gT = !rT && "loading" === (0, zo.w)();
        await (0, ko.h)(MT, Fo.c, {
          reloadFailedDownload: AT
        }), gT && !(0, zo.L)() && await (0, ko.h)(MT, Fo.c, {
          reloadFailedDownload: AT
        });
        Mz = performance.now();
        const mT = yk;
        if (!(0, zo.L)()) {
          (0, zo.K)() && mI.h.setItem(ck, !0);
          const TT = (0, zo.n)();
          if ("call" === TT) AF({
            site: oI.u,
            error: (0, zo.j)(),
            header: null
          }, mT);
          else {
            const oT = null !== TT && void 0 !== TT ? TT : "instantiate",
              IT = () => {
                (0, eI.showUnsupported)((0, Li.k)(oT), Hz.h[oT], (0, zo.g)())
              };
            if ("compile" !== TT && "instantiate" !== TT || !HB())
              if ("fetch" === oT) {
                const TT = [MT.url().href, Fo.c.url().href];
                await fF({
                  site: Ak,
                  error: (0, zo.g)(),
                  urls: TT
                }, IT)
              } else IT();
            else {
              const oT = (0, zo.g)(),
                IT = (0, qo.i)((0, zo.j)());
              (0, eI.reportCountedLoadFallback)((0, Li.k)(TT), Hz.h[TT], oT, IT), nB(`the wasm client did not ${TT} here (${oT})`, IT ? "oom" : null)
            }
          }
          return null
        }(0, Wo.U)(MT.url()) && (0, eI.reportUnstreamedCoreLoad)();
        const eT = (0, zo.z)();
        let RT, uT = mT;
        try {
          uT = {
            ...mT,
            wasm: eT.uD()
          };
          const {
            vM: TT
          } = MT.bindings, oT = TT.YIT();
          if (oT !== Ho.B) return AF({
            site: oI.b,
            error: `core ABI ${oT}, page ABI ${Ho.B}`,
            header: null
          }, uT), null;
          const [IT, iT] = (0, Ho.qe)();
          RT = new TT(IT, iT)
        } catch (zT) {
          return AF({
            site: oI.b,
            error: zT,
            header: null
          }, uT), null
        }
        yk = uT, Nk = MT.bindings;
        const vT = new oI.i(RT, zo.t, {
          onCrash: TT => {
            var oT;
            null === (oT = hX) || void 0 === oT || oT.crashed(TT), LT && function(TT, oT, IT) {
              if ("webgpu" !== oT || (0, kz.d)()) return !1;
              const iT = function(TT) {
                if (TT.site === oI.e && (0, TI.s)(TT.error)) return "frames_refused";
                return TT.site === Kk && (0, TI.u)(TT.error) ? "start_failed" : null
              }(TT);
              if (null === iT || !(0, TI.O)(iT)) return !1;
              return (0, eI.reportRenderReload)("webgpu", "start_failed" === iT ? 0 : 1, IT, {
                cause: iT,
                error: TT.error,
                context: FX,
                session: wF(null)
              }), zF(), !0
            }(TT, DT, uT) || AF(TT, uT)
          },
          onNetEvent: iF,
          onReconnectGrace: aB,
          onCoreErrors: (TT, oT) => {
            var IT, iT;
            TT.some((TT => {
              let {
                code: oT
              } = TT;
              return oT === Ho.I.RenderDeviceLost
            })) && ((0, kz.s)(), JX.deviceLost()), null === (IT = hX) || void 0 === IT || IT.coreErrors(TT), (0, eI.reportCoreErrors)(TT, oT, uT, ((TT, oT) => {
              var IT;
              return null === (IT = SX) || void 0 === IT ? void 0 : IT.QIT(TT, oT)
            })), null === (iT = wW) || void 0 === iT || iT.coreErrors(TT)
          },
          onRenderReload: (TT, oT, IT) => {
            ! function(TT, oT, IT, iT, zT, kT) {
              var WT;
              if ((0, kz.d)()) return;
              const XT = oT === Ho.$c.WEBGPU,
                BT = iT === Ho.$c.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                FT = (0, TI.R)(SX);
              null === (WT = hX) || void 0 === WT || WT.reload(XT, IT, BT, null === FT || void 0 === FT ? void 0 : FT.message);
              const ST = XT ? (0, TI.M)(BT, zT) : null;
              if (null !== ST) {
                const oT = void 0 === FT ? "" : ` (${FT.message})`;
                return void TT.crash(eI.RENDER_RELOAD_SITE, new Error(`${(0,eI.renderReloadMessage)("webgpu",BT,IT)} and ${ST}${oT}`))
              }
              const DT = XT ? "webgpu" : "webgl1" === kT ? "webgl1" : "webgl";
              "lost" === BT && (0, kz.s)();
              (0, eI.reportRenderReload)(DT, IT, yk, {
                cause: BT,
                error: FT,
                context: FX,
                session: wF(TT.sunShadowsHeld())
              }), zF()
            }(vT, TT, oT, IT, LT, DT)
          },
          onEnvEvent: TT => {
            var oT;
            TT.kind === Ho.R.SkyImages && (null === (oT = rW) || void 0 === oT || oT.onEvent(TT.payload))
          },
          onImages: TT => {
            var oT;
            null === (oT = AW) || void 0 === oT || oT.onEvent(TT)
          },
          onModelRequest: TT => {
            var oT;
            null === (oT = cW) || void 0 === oT || oT.request(TT)
          },
          onModelTaken: (TT, oT) => {
            var IT;
            null === (IT = cW) || void 0 === IT || IT.taken(TT, oT)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(TT, oT) {
                const IT = pk;
                if (null === IT || TT.isStopped) return;
                IT.restore((TT => {
                  (0, eI.reportTerrainTextureFailure)(TT, oT)
                })).then((oT => {
                  !1 !== oT || TT.isStopped ? !0 === oT && console.info(`${xk} terrain textures handed over again after the renderer lost them`) : console.warn(`${xk} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(vT, uT)
            }))
          },
          onKeepAlive: TT => {
            const oT = null === qW ? void 0 : ZW.get(qW);
            void 0 !== oT && ui(oT, TT)
          }
        });
        if (sk = vT, null !== TT) {
          vT.setAntiCheatProbes(ik(zo.t, TT.checks)), TT.watchHeld(kk.CoreFrame, (() => vT.frame)), TT.watchHeld(kk.GlueFrame, (() => RT.frame));
          const oT = Xk(TT, ((TT, oT, IT) => {
            let iT = !1;
            return RF(vT, (() => {
              iT = vT.rings.input.writeRecord(Ho.vb.AntiCheat, TT, oT, IT, 0)
            })), iT
          }));
          vT.isStopped ? oT.stop() : LW = oT
        }
        Yk = (TT, oT, IT) => vT.rings.cmd.writeCmd(TT, oT, IT), Qk = TT => vT.rings.cmd.growForCmd(TT), UW = !1, ZB(), (0, wT.w)(vT, {
          core: RT,
          memory: zo.t,
          staleOr: (TT, oT, IT) => fF({
            site: TT,
            error: oT
          }, IT),
          reportReplayFault: (TT, oT) => {
            (0, eI.reportReplayFault)(TT, oT, yk)
          },
          audio: bk,
          options: xo.e,
          onNetEvent: iF,
          sessionInfo: TT => {
            var oT;
            return (null === (oT = tW) || void 0 === oT ? void 0 : oT.conn) === TT ? tW.info : null
          },
          onEventOverflow: XB,
          replayShaderPack: TT => {
            var oT;
            null === (oT = wW) || void 0 === oT || oT.replay(TT)
          },
          hasPackModel: TT => {
            var oT, IT;
            return null !== (null !== (oT = null === (IT = lB()) || void 0 === IT ? void 0 : IT.modelUrl(TT)) && void 0 !== oT ? oT : null)
          },
          beforeWrite: () => (!fW && vT.rings.net.cursor > 0 && XF(vT, !1, "all"), !vT.isStopped),
          beforeOp: () => (!fW && vT.netWrittenSinceFrame > 0 && XF(vT, !1, "budget"), !vT.isStopped)
        }), (0, hT.M)({
          lockPointer: () => {
            if (!OI(KT)) return !1;
            try {
              Promise.resolve(KT.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, uI.b)()
          },
          leaveGame: () => {
            WB()
          },
          canvas: () => KT
        }), xW = (0, hT.y)((() => {
          var TT;
          const oT = (0, wT.i)();
          null === (TT = (0, wT.p)()) || void 0 === TT || TT.followCursorAim(!0 === (null === oT || void 0 === oT ? void 0 : oT.isSessionLive) ? oT : null)
        })), OW && vT.setUiPrefs(OW);
        HW && vT.setEnvPrefs(HW);
        nW && vT.setLookPrefs(nW);
        const ET = Bz ? Fz(Bz.preventMovement) : null;
        ET && MB(ET);
        const fT = (0, KI.j)(),
          CT = (0, KI.e)(vT, fT);
        SW = fT.basis, (0, wI.d)(null === CT ? null : (0, cI.i)(CT)), FW = CT;
        const jT = (0, Xo.e)();
        let JT = 1 / 0,
          UT = !0,
          aT = fT.shedFootprintBytes;
        const YT = new Hi.b(jT, (() => RT.aM()), (TT => {
          vT.crash(oI.l, TT)
        }));
        XW = YT, BW = YT, null !== CT && YT.setCeiling(Math.min((0, Hi.n)(CT), JT));
        if (UT) {
          YT.setShed((TT => {
            const oT = vT.shedMemory("joinReserve" !== TT);
            return null !== oT && (null === FW || oT < FW) && (FW = oT, (0, wI.d)((0, cI.i)(oT))), oT
          }), ((TT, oT, IT) => {
            1 === oT ? (0, eI.reportMemoryShed)(TT, IT, yk) : console.warn(`${xk} wasm memory: shed again (${TT}): shed ${oT}`, IT.wasmMemoryShed)
          }), (() => vT.addDistanceInUse()));
          const TT = (0, TI.I)(eT);
          YT.setFootprint(new fz(aT, {
            storedChunks: () => RT.HIT(),
            gpuBytes: () => {
              var oT;
              return null !== (oT = null === TT || void 0 === TT ? void 0 : TT.nIT()) && void 0 !== oT ? oT : 0
            },
            jsHeapBytes: Ez
          }))
        }
        window.addEventListener("pagehide", (() => {
          XW === YT && (YT.refreshStats(), eF(YT))
        })), window.addEventListener("pagehide", kF), window.addEventListener("pagehide", WF), !1;
        const [QT, OT] = (0, rI.e)();
        mX = (0, gI.d)((TT => vT.setChunkAddDistance(TT.horizontal, TT.vertical)), {
          horizontal: QT,
          vertical: OT
        }), vT.setAmbientOcclusion(!0 !== mI.e.getItem("disableAmbientOcclusion")), vT.setPoseLod(!0 !== mI.e.getItem(io.O)), (0, Cz.r)("look") && (vT.setDebugLog(Ho.K.Look, !0), (0, Jz.e)("wasm", (() => vT.takeDebugLog(Ho.K.Look))));
        (0, Cz.r)("remesh") && (vT.setDebugLog(Ho.K.Remesh, !0), HT = () => vT.takeDebugLog(Ho.K.Remesh), Oz = new Qz((0, Uz.m)(), HT));
        var HT;
        const nT = function(TT, oT, IT, iT) {
          const zT = new oi,
            kT = TT => mI.e.getItem(TT);
          zT.sync(kT, oT), (0, Ro.Q)();
          const WT = (0, BT.k)("customBindingsChanged", (() => {
            zT.sync(kT, oT)
          }));
          (0, vI.o)(oT);
          const XT = new Set,
            FT = (0, hT.y)((() => {
              var TT;
              XT.size > 0 && ki() && !0 === (null === (TT = (0, wT.i)()) || void 0 === TT ? void 0 : TT.localPlayerAlive()) && BT.h.XM("usedKeyboard")
            })),
            ST = GI.e.heldSizer((() => (0, vo.m)(TT))),
            DT = tI(TT, oT, {
              prevents: TT => zT.prevents(TT),
              keyPressed: TT => {
                zT.moves(TT) && (XT.add(TT), ki() && BT.h.XM("usedKeyboard"))
              },
              keyReleased: TT => {
                XT.delete(TT)
              },
              keysReleased: () => {
                XT.clear()
              },
              resized: () => {
                ii.h.measure(TT.getBoundingClientRect()), (0, pI.n)()
              },
              sizeCanvas: ST,
              watchRenderScale: oT => {
                const IT = (0, vo.o)(TT, oT),
                  iT = GI.e.onRelease(oT);
                return () => {
                  IT(), iT()
                }
              },
              touchStarting: () => {
                ii.h.measure(TT.getBoundingClientRect())
              },
              viewShown: IT,
              touchUiShown: () => sT.c.get("isTouchScreen"),
              ctrlCombosAreGames: ki,
              inspect: (TT, oT, IT) => {
                zT.checks(oT, IT) && iT(TT)
              },
              canLock: () => OI(TT)
            }),
            LT = (0, WI.c)(oT);
          return () => {
            WT(), FT(), (0, vI.o)(null), LT(), DT()
          }
        }(KT, ((TT, oT, IT, iT, zT) => {
          var kT;
          RF(vT, (() => {
            vT.rings.input.writeRecord(TT, oT, IT, iT, zT)
          })), null === (kT = LW) || void 0 === kT || kT.onInput(TT), !CW && (0, Si.f)(TT, zT) && (0, Si.d)((() => {
            sk !== vT || HX || vT.isStopped || !xF() || XF(vT, !1, "budget", !1)
          }))
        }), (() => aX), (TT => {
          var oT;
          null === (oT = LW) || void 0 === oT || oT.onEvent(TT)
        }));
        if (vT.isStopped) return nT(), null;
        iW = nT;
        const qT = () => !vT.isStopped && !QX;
        if (vT.isStopped) return null;
        (0, zo.Q)((() => {
          "call" === (0, zo.n)() && vT.crash(oI.u, (0, zo.j)())
        }));
        const tT = (0, oI.K)(vT.rings.worker, (() => {
          XF(vT, !1, "budget")
        }));
        zW = function(TT, oT) {
          return uF().then((TT => {
            let {
              prefetchWorldgenWorker: oT
            } = TT;
            oT()
          }), (() => {})), new qz({
            module: (0, zo.v)(),
            decodeSettings: TT => {
              const oT = (0, wT.p)();
              if (null === oT) throw new Error("no game code to decode the world-gen seed with");
              return oT.decodeMapSettings(TT)
            },
            loadWorker: vF,
            onMapWithoutWorldgen: () => {
              EF((TT => {
                let {
                  stopWorldgenWorkerPrefetch: oT
                } = TT;
                oT()
              }))
            },
            onLoadFailed: TT => {
              (0, eI.reportWorldgenLoadFailure)(TT, yk)
            },
            onWorkerLost: TT => {
              (0, eI.reportWorkerLost)(oI.A, TT, yk)
            },
            onStartTimeout: TT => {
              (0, eI.reportWorkerStartTimeout)(oI.A, TT, yk)
            },
            onGaveUp: TT => {
              (0, eI.reportWorldgenGaveUp)(TT, yk)
            },
            onMemoryStats: TT => {
              var oT;
              null === (oT = XW) || void 0 === oT || oT.noteWorldgen(TT)
            },
            onMemoryGone: () => {
              var TT;
              null === (TT = XW) || void 0 === TT || TT.worldgenGone()
            },
            write: (IT, iT, zT, kT, WT) => {
              RF(TT, (() => {
                TT.rings.worker.writeWorkerRecord(IT, iT, zT, 0, kT, WT) || TT.crash(oI.A, `a world-gen record of kind ${iT} did not fit the worker-in ring`)
              })), oT()
            }
          })
        }(vT, tT), WW = function(TT, oT) {
          return new Qi({
            module: (0, zo.v)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: TT
              }, oT] = await Promise.all([IT.e(40).then((() => IT(42153))), Promise.resolve().then((() => IT(90))).then((TT => {
                let {
                  isMobile: oT
                } = TT;
                return oT()
              }), (() => !1))]);
              return {
                create: TT,
                count: (0, go.c)(navigator.hardwareConcurrency, oT)
              }
            },
            write: (IT, iT, zT, kT, WT, XT) => {
              (0, pI.m)(), RF(TT, (() => {
                TT.rings.worker.writeWorkerRecord(IT, iT, zT, kT, WT, XT) || TT.crash(oI.m, `a meshing record of kind ${iT} did not fit the worker-in ring`)
              })), oT()
            },
            onWorkerLost: TT => {
              (0, eI.reportWorkerLost)(oI.m, TT, yk)
            },
            onLightFault: (TT, oT) => {
              (0, eI.reportLightFault)(TT, oT, yk)
            },
            onStartTimeout: TT => {
              (0, eI.reportWorkerStartTimeout)(oI.m, TT, yk)
            },
            onMemoryStats: (TT, oT) => {
              var IT;
              null === (IT = XW) || void 0 === IT || IT.noteMeshWorker(TT, oT)
            },
            onMemoryGone: TT => {
              var oT;
              null === (oT = XW) || void 0 === oT || oT.meshWorkerGone(TT)
            },
            fail: (oT, IT) => {
              const iT = () => {
                TT.crash(oI.m, void 0 === IT ? oT : new Error(oT, {
                  cause: IT
                }))
              };
              void 0 !== IT ? fF({
                site: oI.m,
                error: IT
              }, iT) : iT()
            }
          })
        }(vT, tT);
        const GT = (0, Pi.t)(ro.clientSideServerUrls.staticUrl, {
            onTableFailed: TT => {
              fF({
                site: eI.MODEL_FEED_SITE,
                error: TT
              }, (() => {}), qT)
            },
            packUrl: TT => {
              var oT, IT;
              return null !== (oT = null === (IT = lB()) || void 0 === IT ? void 0 : IT.modelUrl(TT)) && void 0 !== oT ? oT : null
            }
          }),
          pT = function(TT, oT, IT) {
            const iT = IT => {
              var iT, zT;
              return null !== (iT = null === (zT = oT()) || void 0 === zT ? void 0 : zT.drawnUrl(IT)) && void 0 !== iT ? iT : TT.url(IT)
            };
            return (0, yi.k)((0, qi.n)(iT), IT)
          }(GT, (() => cW), lB),
          bT = new qi.f(pT, (TT => {
            console.warn(`${xk} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
          }));
        AW = bT, gW = new Gi(vT, pT, ((TT, oT) => {
          void 0 === oT ? console.warn(`${xk} ${TT}`) : GB(TT, oT)
        }));
        const yT = new bi.g(GT, function(TT, oT) {
          let iT = !1,
            zT = null,
            kT = null;
          const WT = {
              onUnavailable: (IT, iT) => {
                kT ??= fF({
                  site: eI.MODEL_POOL_SITE,
                  error: IT,
                  urls: iT
                }, (() => {
                  (0, eI.reportModelPoolFailure)(IT, TT)
                }), oT)
              },
              onDecoderFailed: (IT, iT) => {
                const zT = () => {
                  (0, eI.reportDracoDecoderFailure)(IT, TT)
                };
                void 0 !== iT ? fF({
                  site: eI.MODEL_POOL_SITE,
                  error: IT,
                  urls: iT
                }, zT, oT) : zT()
              },
              onWorkerLost: oT => {
                (0, eI.reportWorkerLost)(eI.MODEL_POOL_SITE, oT, TT)
              },
              onModuleRetry: (oT, IT) => {
                (0, eI.reportModelsModuleRetry)(oT, IT, TT)
              }
            },
            XT = IT.e(42).then((() => IT(42162))).then((TT => {
              let {
                pageModelPool: oT
              } = TT;
              if (iT) return null;
              const IT = oT(WT);
              return zT = IT.unlisten, KW = IT.pool, IT.pool
            }), (TT => (iT || WT.onUnavailable(TT, void 0), null)));
          return MW = () => {
            var TT;
            iT = !0, null === (TT = zT) || void 0 === TT || TT(), KW = null
          }, (TT, oT) => XT.then((IT => {
            var iT;
            return null !== (iT = null === IT || void 0 === IT ? void 0 : IT.build(TT, oT)) && void 0 !== iT ? iT : (0, di.w)(TT, "the model workers did not load")
          })).then((TT => null !== kT && (0, di.l)(TT) ? kT.then((() => TT)) : TT))
        }(uT, qT), (TT => {
          TT.startup ? (rF(), fF({
            site: eI.MODEL_FEED_SITE,
            error: TT.error,
            urls: "" === TT.url ? void 0 : [TT.url]
          }, (() => {
            (0, eI.reportModelFailure)(TT, uT)
          }))) : (0, eI.reportModelFailure)(TT, uT)
        }), {
          onWritten: (TT, oT) => {
            bT.glbWritten(TT, oT)
          },
          onTaken: (TT, oT) => {
            bT.glbTaken(TT, oT)
          },
          onPackFileFailed: (TT, oT) => {
            console.warn(`${xk} the texture pack's model file ${TT} failed: the shipped one loads`, oT)
          }
        });
        cW = yT;
        const NT = new li.d(vT);
        pk = NT, NT.swap((TT => {
          const oT = () => {
            (0, eI.reportTerrainTextureFailure)(TT, uT)
          };
          if (eX) return void oT();
          const IT = () => !eX,
            iT = null === TT.url ? void 0 : [TT.url];
          fF({
            site: oI.x,
            error: TT.error,
            urls: iT
          }, oT, IT)
        })).then((TT => {
          null !== TT && (TT || vT.isStopped || console.warn(`${xk} the core refused the terrain textures: terrain draws untextured`), uW(vT))
        }));
        const PT = new Qo(vT, ((TT, oT) => {
          console.warn(`${xk} ${TT}`, ...void 0 === oT ? [] : [oT])
        }));
        PT.feed(), null !== DT && function(TT, oT, iT, zT, kT, WT) {
          let XT = null,
            BT = null,
            FT = !1;
          const ST = {
            textures: null,
            stop: () => {
              var TT, oT;
              FT = !0, null === (TT = BT) || void 0 === TT || TT(), null === (oT = XT) || void 0 === oT || oT(), Ni.e.setSettled(null), null !== Nk && pX.clear(Nk)
            }
          };
          Gk = ST, BT = pB().follow((BT => {
            null !== BT && Promise.all([IT.e(188), IT.e(45)]).then((() => IT(42131))).then((IT => {
              let {
                PackTextures: DT
              } = IT;
              if (FT || TT.isStopped) return;
              const LT = new DT({
                feed: BT,
                terrain: oT,
                backend: iT,
                stopped: () => TT.isStopped,
                landed: () => {
                  uW(TT)
                },
                packSwapped: () => {
                  (0, yi.g)(zT), WT.feed((() => async function(TT) {
                    const oT = null === TT ? null : await TT.averageColours;
                    return null === oT ? Oo() : Yo(oT)
                  }(LT.assets))), sB(LT.iconOverrides()), kT.refresh().then((TT => {
                    null !== TT && console.info(`${xk} texture pack models: ${TT.resent} of ${TT.delivered} files written again, ${TT.refetched} refetched`)
                  }))
                },
                settled: (TT, oT, IT) => {
                  var iT;
                  (Ni.e.setSettled({
                    state: TT,
                    files: oT
                  }), null === TT.gameSource && (0, MI.e)(TT.pack, IT), IT) || function(TT) {
                    const oT = Nk;
                    null !== oT && pX.apply(oT, TT).then((oT => {
                      oT && TT && console.info(`${xk} the texture pack's animations are in (${Object.keys(TT).length} files)`)
                    }))
                  }(null === (iT = TT.pack) || void 0 === iT ? void 0 : iT.animations)
                },
                settling: () => {
                  Ni.e.setSettled(null)
                },
                warn: GB,
                maxTextureSize: () => Promise.resolve((0, TI.W)(document.createElement("canvas")))
              });
              ST.textures = LT, XT = LT.start()
            }), (TT => {
              console.warn(`${xk} the texture pack's terrain didn't load: the built atlas stays`, TT)
            }))
          }))
        }(vT, NT, DT, bT, yT, PT);
        const dT = () => {
            vT.setTextureLayers("")
          },
          VT = TT => {
            (Mo ??= IT.e(50).then((() => IT(42168))).then((TT => {
              let {
                TEXTURE_NAMES: oT
              } = TT;
              return oT
            }), (TT => {
              throw Mo = null, TT
            })), Mo).then((TT => {
              vT.setTextureLayers(TT) || vT.isStopped || (console.warn(`${xk} the core refused the texture names: textured Boxes draw textureNotFound`), dT())
            }), (oT => {
              if (vT.isStopped) return;
              const [IT, ...iT] = TT;
              void 0 === IT ? fF({
                site: eI.TEXTURE_NAMES_SITE,
                error: oT
              }, (() => {
                console.warn(`${xk} the texture names didn't load, so textured Boxes draw textureNotFound`, oT), dT()
              }), qT) : setTimeout((() => {
                VT(iT)
              }), IT)
            }))
          };
        if (VT(Uk), null !== DT && !await async function(TT, oT, IT, iT, kT, WT) {
            var XT;
            const BT = (0, TI.I)(IT);
            if (null === BT) return TT.crash(Kk, new Error(`this ${iT} build has no openRenderer`)), !1;
            let FT;
            SX = BT;
            try {
              var ST, DT, LT, xT;
              const zT = null !== (ST = null === (DT = Zk) || void 0 === DT ? void 0 : DT.pagePreviews()) && void 0 !== ST ? ST : null,
                XT = null !== (LT = null === (xT = Zk) || void 0 === xT ? void 0 : xT.previewModule(IT)) && void 0 !== LT ? LT : null;
              if (null === zT || null === XT) {
                null === zT || void 0 === zT || zT.endSession(!1), FT = (0, vo.g)().sampleCount, await (0, TI.g)(oT, BT, WT, qB, FT, await kT);
                const TT = (0, TI.n)(IT);
                null === TT && console.warn(`${xk} this ${iT} build has no image registry: sky and model images won't show`), (0, Zi.c)(TT)
              } else {
                (0, kz.d)() && await (0, lT.n)();
                const IT = (0, kz.A)();
                if (null !== IT) {
                  const oT = (0, TI.R)(BT);
                  return TT.crash(eI.RENDER_RELOAD_SITE, new Error(`${IT}${void 0===oT?"":` (${oT.message})`}`)), !1
                }
                FT = await zT.bindSession(XT, oT, (async TT => (0, TI.x)(BT, Kk, WT, TT, qB, await kT)))
              }
            } catch (zT) {
              return TT.crash(Kk, zT), !1
            }(function(TT, oT) {
              const IT = TT,
                {
                  requestCapture: iT,
                  takeCapture: zT
                } = IT;
              if ("function" !== typeof iT || "function" !== typeof zT) return;
              const kT = {
                request() {
                  iT.call(IT, oT)
                },
                take() {
                  var TT;
                  return null !== (TT = zT.call(IT)) && void 0 !== TT ? TT : null
                }
              };
              window[Lz] = kT
            })(oT, FT), rX = FT, BX = !0;
            const cT = performance.now();
            return FX.boundAtMs = null !== (XT = (0, kz.E)()) && void 0 !== XT ? XT : cT, FX.indirectHangs = (0, kz.u)(), console.info(`${xk} ${iT} renderer bound at ${Math.round(cT)} ms`), !TT.isStopped
          }(vT, RT, eT, DT, xT, KT)) return null;
        if (null !== DT) {
          var To, oo, Io;
          (0, Bo.G)(DT);
          const TT = () => !vT.isStopped && LF();
          IT.e(184).then((() => IT(8647))).then((oT => {
            let {
              devTools: IT
            } = oT;
            vT.isStopped || IT.setHost(function(TT) {
              return {
                tools: zz,
                async downloadScene(oT, IT) {
                  let {
                    width: iT,
                    height: zT,
                    colouring: kT
                  } = IT;
                  "screenshot" === oT && null === kT ? await (0, oz.d)(TT, iT, zT) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(TT, oT) {
              return {
                canvas: TT,
                maxTextureSize: Iz,
                drawing: oT,
                resize: (TT, oT) => {
                  (0, vI.w)(Ho.vb.Resize, 0, TT, oT, (0, vI.i)(1))
                },
                restoreSize: () => {
                  const oT = (0, vo.m)(TT);
                  null !== oT && (0, vI.w)(Ho.vb.Resize, 0, oT.cssWidth, oT.cssHeight, (0, vI.i)(oT.renderScale))
                },
                onFrameDrawn: TT => (iz.add(TT), () => {
                  iz.delete(TT)
                })
              }
            }(KT, TT)))
          }), (TT => {
            console.warn(`${xk} the developer tools didn't load: no captures this session`, TT)
          }));
          const oT = "webgpu" === DT && null !== (To = null === FT || void 0 === FT || null === (oo = FT.adapter) || void 0 === oo ? void 0 : oo.vendor) && void 0 !== To ? To : null;
          AX = {
            backend: DT,
            canvas: KT,
            fallbackReason: null !== (Io = null === FT || void 0 === FT ? void 0 : FT.reason) && void 0 !== Io ? Io : null,
            adapterVendor: oT
          }, VB();
          try {
            (0, pI.r)(DT, KT, oT)
          } catch (zT) {
            (0, pI.v)(), console.error(`${xk} the quality steps didn't start`, zT)
          }
        }
        const {
          storagePullBreaks: So,
          splitPassBreaks: co
        } = await xT;
        co && console.warn(`${xk} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Ko = So ? ZT.d : (0, ZT.f)(FT, (0, eo.h)());
        if ((0, Cz.r)("webgpuloss")) {
          var Ao, ho;
          const TT = {
            backend: DT,
            reason: null !== (Ao = null === FT || void 0 === FT ? void 0 : FT.reason) && void 0 !== Ao ? Ao : null,
            source: null !== (ho = null === FT || void 0 === FT ? void 0 : FT.source) && void 0 !== ho ? ho : null,
            storagePullBreaks: So,
            noWebGpu: Ko.messageKey
          };
          (0, jz.e)((oT => {
            oT.noteWasmPick(TT)
          }))
        }
        const wo = "webgpu" === DT && !So;
        if (wW = (0, ZT.g)(wo ? vT : null, wo && null !== (WT = null === (XT = Zk) || void 0 === XT ? void 0 : XT.pagePreviews().Fc) && void 0 !== WT ? WT : null, Ko, GB), HX) return null;
        if (YT.reserveAtJoin((0, Hi.j)(null !== CT && void 0 !== CT ? CT : cI.f)), vT.isStopped) return null;
        const mo = TT => {
          if (null !== gX) try {
            gX.animationFrame(TT)
          } catch (zT) {
            IF(zT)
          }
          if (function(TT, oT) {
              return oT && !HX && !CW && xF() && LF() && TT.framePaces(performance.now())
            }(vT, aX)) return vT.writePendingInput(), (0, hT.e)(TT, BF), TF(!1, TT), void requestAnimationFrame(mo);
          XF(vT, aX, "budget") && ((0, uo.j)(vT.lastFrameKind) && LF() && (0, hT.e)(TT, BF), TF(aX && jX, TT), JX.frame(vT.lastFrameKind, aX && LF(), TT), gF(vT), YT.afterFrame(), requestAnimationFrame(mo))
        };
        requestAnimationFrame(mo);
        return function(TT) {
          if (TT.has("inputLog") && (0, Ii.f)((TT => {
              let {
                action: oT,
                down: IT,
                press: iT
              } = TT;
              console.info(`${zi} input ${oT} ${IT?"down":"up"} press ${iT} at ${performance.now().toFixed(1)}`)
            })), TT.has("inputDump")) {
            const TT = [];
            Wi = TT, Object.assign(window, {
              bloxdInputDump: () => TT.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), DW = function(TT, oT) {
          let IT = null;
          const iT = () => {
              null !== IT && (clearInterval(IT), IT = null)
            },
            zT = () => {
              document.hidden ? IT ??= setInterval((() => {
                XF(TT, !1, "budget") ? (gF(TT), oT.afterFrame()) : iT()
              }), Jk) : iT()
            };
          return document.addEventListener("visibilitychange", zT), zT(), () => {
            iT(), document.removeEventListener("visibilitychange", zT)
          }
        }(vT, YT), vT
      }(oT).then((TT => {
        var oT;
        (iT(yk), Vk(null !== TT), null !== TT && (rz = performance.now()), Pk(TT), null === TT) ? null === (oT = Zk) || void 0 === oT || oT.pagePreviews().endSession(null === (0, zo.n)()): RW("booted")
      }), (TT => {
        iT(yk), Vk(!1), Pk(null), AF({
          site: Mk,
          error: TT,
          header: null
        }, yk)
      }))
    }

    function GX() {
      const TT = Nk;
      null !== TT && nX().then((oT => {
        let {
          pageBuiltInAnimationPack: IT
        } = oT;
        IT().provide(TT)
      }), (TT => {
        console.warn(`${xk} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, TT)
      }))
    }
    const pX = new class {
      constructor(TT) {
        this.deps = TT, this.latest = 0, this.kS = null
      }
      apply(TT, oT) {
        return this.load(TT, oT, 0)
      }
      async load(TT, oT, IT) {
        var iT;
        const zT = ++this.latest,
          kT = this.deps.compiler;
        if (void 0 === oT || null === oT || "object" !== typeof oT || 0 === Object.keys(oT).length || null === kT) return this.drop(TT), !1;
        if ((null === (iT = this.kS) || void 0 === iT ? void 0 : iT.module) === TT && (0, bo.Vd)(this.kS.files, oT)) return !1;
        try {
          const [IT, iT] = await Promise.all([kT(), this.deps.builtIns()]);
          if (zT !== this.latest) return !1;
          const WT = await IT(oT, Vo, {
            builtIns: iT
          });
          if (zT !== this.latest) return !1;
          const XT = this.call(TT, WT);
          if (void 0 === XT) throw new Po("the compiled animations didn't read against the built-in pack");
          return this.kS = {
              module: TT,
              files: oT
            },
            function(TT) {
              for (let oT = 0; oT + 2 < TT.length; oT += 3) {
                ("error" === TT[oT] ? console.error : console.warn)(`Animation for the texture pack: ${TT[oT+1]}: ${TT[oT+2]}`)
              }
            }(XT), !0
        } catch (XT) {
          var WT;
          if (zT !== this.latest) return !1;
          this.drop(TT), 0 === IT && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", XT);
          const iT = (null !== (WT = this.deps.retryAfterMs) && void 0 !== WT ? WT : No)[IT];
          return void 0 === iT || XT instanceof Po || (0, yo.i)(TT) || setTimeout((() => {
            zT === this.latest && this.load(TT, oT, IT + 1)
          }), iT), !1
        }
      }
      call(TT, oT) {
        try {
          return TT.aIT(oT)
        } catch (IT) {
          throw (0, yo.m)(TT, IT), IT
        }
      }
      clear(TT) {
        this.latest++, this.drop(TT)
      }
      drop(TT) {
        const oT = this.kS;
        if (this.kS = null, (null === oT || void 0 === oT ? void 0 : oT.module) === TT && !(0, yo.i)(TT)) try {
          this.call(TT, null)
        } catch {}
      }
    }({
      compiler: so.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: TT
        } = await nX();
        return TT().whenSet()
      },
      warn: GB
    });
    async function bX(TT, oT) {
      let iT = !1;
      await yX({
        matchmake: async () => {
          const {
            guestJoinTarget: zT,
            guestJoinWithPack: kT
          } = await IT.e(342).then((() => IT(42116)));
          return iT ? zT(TT, oT, yB()) : (iT = !0, kT(TT, oT, (oT => NB(TT, oT)), yB))
        },
        onFailure: TT => {
          (0, eI.showJoinFailure)(TT, yk)
        },
        rejoin: DB,
        invalidateTrafficCode: LB
      })
    }
    async function yX(TT) {
      let {
        matchmake: oT,
        onFailure: IT,
        rejoin: zT,
        invalidateTrafficCode: kT,
        pageReady: WT,
        signal: XT
      } = TT;
      const BT = () => !0 === (null === XT || void 0 === XT ? void 0 : XT.aborted);
      let FT;
      const ST = Ni.e.rejoinHold(),
        DT = (0, hI.N)("wasm", mF);
      let LT = !1,
        xT = performance.now();
      try {
        if (!await TW) return {
          kind: "stopped"
        };
        if (BT()) return {
          kind: "Jo"
        };
        qX().catch((() => {}));
        let TT = await oT();
        xT = performance.now();
        const IT = () => performance.now() - TT.matchedAt <= TT.freshMs,
          iT = PX(TT.target).catch((() => {}));
        IT() && !BT() && (FT = new Ji(TT.target, {
          signal: XT
        }));
        const kT = performance.now();
        if (null === await dk) return {
          kind: "stopped"
        };
        var cT;
        if (function(TT) {
            var oT, IT;
            if (xz.d.markGameEngineConstructed(), Az) return;
            Az = !0;
            const iT = Math.max(TT, null !== (oT = Kz) && void 0 !== oT ? oT : TT);
            (0, cz.h)("ready", Math.max(0, (null !== (IT = Mz) && void 0 !== IT ? IT : iT) - iT) / 1e3)
          }(kT), BT() || (null !== Mz && null !== rz ? ((0, jo.j)("wasm_loaded", Mz), (0, jo.j)("wasm_core_ready", rz)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await iT, !IT() && !BT()) null === (cT = FT) || void 0 === cT || cT.rematched(), TT = await oT(), xT = performance.now();
        if (BT()) return {
          kind: "Jo"
        };
        const ST = await async function(TT) {
          var oT, IT, iT;
          let {
            signal: zT,
            rejoin: kT = null,
            early: WT,
            pageReady: XT
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== zT && void 0 !== zT && zT.aborted) throw new DOMException("the join was left", "AbortError");
          const BT = (FT = dW, ST = performance.now(), null !== FT && ST - FT < ri);
          var FT, ST;
          dW = null;
          const DT = new AbortController;
          oB({
            controller: DT,
            game: null !== (oT = null === (IT = TT.session) || void 0 === IT ? void 0 : IT.gameNameWithVariation) && void 0 !== oT ? oT : null
          }), VW = null, null === (iT = IX) || void 0 === iT || iT.abort(), IX = null, zX = !1, kX = null, WX.clear();
          const LT = () => {
            (0, Ao.i)(DT, (0, Ao.f)(zT))
          };
          null === zT || void 0 === zT || zT.addEventListener("abort", LT, {
            once: !0
          });
          try {
            var xT, cT, KT;
            const oT = await dk;
            if (null === oT || oT.isStopped || HX) throw new Error("no core is running to join a game with");
            if (TT.session && null !== wW) {
              const oT = await dX(wW.join(TT.session.gameNameWithVariation), DT.signal);
              if ((0, Cz.r)("webgpuloss")) {
                const IT = TT.session.gameNameWithVariation,
                  iT = wW.couldntRunInJoinedGame();
                (0, jz.e)((TT => TT.noteWasmJoin(IT, oT, iT)))
              }
              if (null !== oT) throw new ZT.e(oT)
            }
            const [, , , {
              joinRoom: IT
            }] = await dX(Promise.all([(0, wT.k)(oT), PX(TT), null === XT || void 0 === XT ? void 0 : XT(), qX()]), DT.signal), iT = TT.session, zT = iT ? {
              ...KB,
              attachSocket: oT => {
                const IT = mB(oT, TT.endpoint);
                var zT;
                null !== IT && (tW = {
                  conn: IT,
                  info: iT
                }, null === (zT = GW) || void 0 === zT || zT(iT.playerDbId));
                return IT
              }
            } : KB, FT = await IT(zT, TT, {
              signal: DT.signal,
              early: WT
            }).catch((TT => {
              throw function(TT) {
                if (!(TT instanceof JT.e)) return TT;
                if ("roomError" === TT.stage && null !== kX) return NX(new JT.e(TT.message, TT.stage, TT.code, kX), TT);
                const oT = "closed" === TT.stage && null !== TX ? WX.get(TX.conn) : void 0;
                return void 0 === oT ? TT : NX(new JT.e(TT.message, TT.stage, oT.code), TT)
              }(TT)
            }));
            if (lW !== DT) throw FT.leave(), new DOMException("the join was left", "AbortError");
            iB(FT), null === (xT = WW) || void 0 === xT || xT.newGame();
            const ST = function(TT) {
              var oT, IT;
              const {
                session: iT
              } = TT, zT = void 0 === iT ? TT.joinOptions.lobbyName : iT.lobbyName;
              return {
                endpoint: TT.endpoint,
                game: null !== (oT = null === iT || void 0 === iT ? void 0 : iT.gameNameWithVariation) && void 0 !== oT ? oT : TT.roomName,
                lobby: String(null !== zT && void 0 !== zT ? zT : null),
                postCookies: null !== (IT = TT.postCookies) && void 0 !== IT ? IT : null
              }
            }(TT);
            ZW.set(FT, ST), Ei(ST);
            const LT = performance.now(),
              MT = {
                conn: FT.conn,
                rejoin: kT,
                game: null !== (cT = null === (KT = TT.session) || void 0 === KT ? void 0 : KT.gameNameWithVariation) && void 0 !== cT ? cT : "",
                joinedAt: LT,
                rejoinedAt: BT ? LT : null,
                overflow: null
              };
            pW = MT,
              function(TT, oT) {
                jB();
                const IT = {
                  endpoint: oT,
                  roomId: TT.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new DI({
                    reconnect: (TT, oT, iT) => async function(TT, oT, IT, iT) {
                      const {
                        roomId: zT,
                        roomToken: kT
                      } = UB(TT, oT), WT = sk;
                      if (null === WT || WT.isStopped || HX) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: XT
                      } = await dX(qX(), IT), BT = {
                        ...KB,
                        attachSocket: oT => bW !== TT || 0 === TT.heldConn ? (oT.close(), null) : mB(oT, TT.endpoint, !0)
                      };
                      return XT(BT, TT.endpoint, zT, kT, {
                        signal: IT,
                        onAttached: iT
                      })
                    }(IT, TT, oT, iT),
                    releaseSeat: TT => {
                      !async function(TT, oT) {
                        const {
                          roomId: IT,
                          roomToken: iT
                        } = UB(TT, oT);
                        try {
                          const {
                            leaveHeldSeat: oT
                          } = await qX();
                          await oT(TT.endpoint, IT, iT)
                        } catch (zT) {
                          console.warn(`${xk} the held seat of a game left while it reconnected couldn't be released`, zT)
                        }
                      }(IT, TT)
                    },
                    isLive: () => bW === IT && null !== pW && !HX,
                    OE: TT => {
                      PW = TT, CB()
                    },
                    onReconnected: TT => {
                      ! function(TT) {
                        const oT = qW;
                        if (null !== oT && oT !== TT) {
                          const IT = ZW.get(oT);
                          void 0 !== IT && ZW.set(TT, IT), CX === oT && (CX = TT), oT.detach()
                        }
                        iB(TT)
                      }(TT)
                    },
                    onGaveUp: (TT, oT) => {
                      ! function(TT, oT, IT) {
                        var iT, zT;
                        console.warn(`${xk} gave up reconnecting (${IT.reason}, ${IT.attempts} attempts)`, IT.lastError), (0, eI.reportReconnectGaveUp)(IT, yk);
                        const kT = null !== (iT = null === (zT = pW) || void 0 === zT ? void 0 : zT.rejoin) && void 0 !== iT ? iT : null;
                        JB(TT, "gaveUp"), kB();
                        const WT = {
                          code: TT.dropCode,
                          name: null,
                          reason: Ek,
                          canReconnect: !oT,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        cB(WT, oT ? null : kT, !1, {
                          reasonKey: fk,
                          canPlayAgain: oT
                        })
                      }(IT, TT, oT)
                    }
                  })
                };
                bW = IT, null !== yW && yW.conn === TT.conn && IT.resume.onInitialInfo(yW)
              }(FT, TT.endpoint), performance.mark(gk), (0, jo.j)("wasm_joined", LT), setTimeout((() => {
                qW === FT && (0, jo.d)()
              }), 0), GX(), console.info(`${xk} joined ${TT.roomName} as ${FT.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const rT = VW;
            VW = null, null !== rT && BB(MT, rT.mask, rT.frames);
            const AT = WX.get(FT.conn);
            return WX.clear(), void 0 !== AT && (iB(null), xB(FT.conn, AT.code, AT.reason)), FT
          } finally {
            var MT;
            null === zT || void 0 === zT || zT.removeEventListener("abort", LT), lW === DT && IB(qW, null), (null === (MT = TX) || void 0 === MT ? void 0 : MT.join) === DT && (TX = null)
          }
        }(TT.target, {
          signal: XT,
          rejoin: zT(TT.target),
          early: FT,
          pageReady: WT
        });
        return LT = !0, {
          kind: "joined",
          game: ST
        }
      } catch (MT) {
        if (MT instanceof DOMException && "AbortError" === MT.name || BT()) return {
          kind: "Jo"
        };
        if (HX) return {
          kind: "stopped"
        };
        if (zX && (zX = !1, await kT().catch((TT => {
            console.warn(`${xk} the cached traffic code could not be dropped`, TT)
          }))), null === await dk) return {
          kind: "stopped"
        };
        if (MT instanceof ZT.e) return IT(MT, performance.now() - xT), {
          kind: "failed",
          error: MT,
          reloading: !1
        };
        if (MT instanceof JT.e && MT.code === iT.b.wasmClientNotAllowed.code && UX) return nB("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: MT,
          reloading: !0
        };
        const TT = MT instanceof JT.e && MT.code === iT.b.outdatedVersion.code,
          oT = () => null === qW,
          zT = await fF({
            site: eI.JOIN_SITE,
            error: MT,
            outdated: TT
          }, (() => {
            IT(MT, performance.now() - xT)
          }), oT);
        return {
          kind: "failed",
          error: MT,
          reloading: zT
        }
      } finally {
        var KT;
        LT || DT.end(), Ni.e.releaseHold(ST);
        const TT = null === (KT = FT) || void 0 === KT ? void 0 : KT.release();
        TT && (0, eI.reportUnusedSeat)(TT, yk)
      }
    }

    function NX(TT, oT) {
      return TT.stack = oT.stack, TT
    }

    function PX(TT) {
      return TT.session ? (0, wT.n)(bk, TT.session.gameNameWithVariation) : Promise.resolve()
    }

    function dX(TT, oT) {
      return (0, Ao.o)(oT), new Promise(((IT, iT) => {
        const zT = () => {
          iT((0, Ao.f)(oT))
        };
        oT.addEventListener("abort", zT, {
          once: !0
        }), TT.then((TT => {
          oT.removeEventListener("abort", zT), IT(TT)
        }), (TT => {
          oT.removeEventListener("abort", zT), iT(TT)
        }))
      }))
    }

    function VX() {
      var TT, oT;
      return null !== (TT = null === (oT = wW) || void 0 === oT ? void 0 : oT.runsInJoinedGame()) && void 0 !== TT && TT
    }

    function TB() {
      oB(null)
    }

    function oB(TT) {
      var oT, IT, iT;
      (function() {
        const TT = bW;
        null !== TT && JB(TT, "left")
      }(), null === IW || IW.left) || (IW.left = !0, null === (iT = (0, wT.i)()) || void 0 === iT || iT.socketLeft(), (0, LT.o)({
        websocketUrl: null
      }));
      lW && (0, Ao.i)(lW, new DOMException("the join was left", "AbortError")), kB(null !== TT), null === (oT = wW) || void 0 === oT || oT.leave();
      const zT = qW;
      null !== TT && Ni.e.setGame(TT.game), IB(null, null !== (IT = null === TT || void 0 === TT ? void 0 : TT.controller) && void 0 !== IT ? IT : null), null === zT || void 0 === zT || zT.leave(), zB(0), (0, co.f)()
    }

    function IB(TT, oT) {
      qW = TT, lW = oT, null === qW && null === lW && Ni.e.setGame(void 0)
    }

    function iB(TT) {
      IB(TT, lW)
    }

    function zB(TT) {
      const oT = sk;
      return null !== Yk && !HX && null !== oT && !oT.isStopped && (!!Yk(JT.l, 0, (0, JT.E)(TT)) && (UW = !0, 0 === TT || CW || XF(oT, !1, "all"), !0))
    }

    function kB() {
      var TT, oT;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, hI.e)();
      const IT = null !== (TT = null === (oT = pW) || void 0 === oT ? void 0 : oT.overflow) && void 0 !== TT ? TT : null;
      pW = null, null !== IT && (0, eI.reportEventOverflow)(IT, yk)
    }

    function WB() {
      null !== qW || null !== lW ? TB() : eB()
    }

    function XB(TT, oT) {
      console.warn(`${xk} the event buffer refused records in ${oT} frames (categories ${TT})`), HX || (null !== pW ? BB(pW, TT, oT) : null !== lW && function(TT, oT, IT) {
        var iT;
        const zT = function(TT, oT) {
          return null === TT ? "drop" : TT.activated ? "keep" : 0 !== (oT & no.n.NetSession) ? "fail" : "drop"
        }((null === (iT = TX) || void 0 === iT ? void 0 : iT.join) === TT ? TX : null, oT);
        "keep" === zT ? VW = {
          mask: oT,
          frames: IT
        } : "fail" === zT && (0, Ao.i)(TT, new Error("the join's net session was lost to an event overflow"))
      }(lW, TT, oT))
    }

    function BB(TT, oT, IT) {
      const iT = TT.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      iT.frames += IT, iT.acks++, iT.mask |= oT;
      const zT = function(TT, oT, IT) {
        if (0 === (TT & no.n.NetSession)) return "none";
        const iT = null !== oT.rejoinedAt && IT - oT.rejoinedAt < Ai;
        return null === oT.rejoin || iT ? "fail" : "rejoin"
      }(oT, TT, performance.now());
      "none" !== zT && queueMicrotask((() => {
        if (pW !== TT) return;
        const oT = "rejoin" === zT && performance.now() - oX >= jT.e;
        iT.outcome = oT ? "rejoined" : "failed", cB(function(TT, oT) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: TT,
            automaticallyReconnect: oT,
            requiresRefresh: !1
          }
        }(null !== TT.rejoin, oT), TT.rejoin, oT), TB(), oT && (dW = performance.now())
      }))
    }

    function FB(TT) {
      aX = TT, YX && SB(YX, TT)
    }

    function SB(TT, oT) {
      TT.style.visibility = oT ? "visible" : "hidden"
    }

    function DB(TT) {
      var oT;
      const IT = TT.roomName,
        iT = null !== (oT = TT.joinOptions.lobbyName) && void 0 !== oT ? oT : null;
      return () => {
        bX(IT, iT)
      }
    }

    function LB() {
      return IT.e(342).then((() => IT(42116))).then((TT => {
        let {
          invalidateGuestTrafficCode: oT
        } = TT;
        return oT()
      })).catch((TT => {
        console.warn(`${xk} the cached traffic code could not be dropped`, TT)
      }))
    }

    function xB(TT, oT, IT) {
      var zT, kT;
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (HX) return;
      if ((null === (zT = pW) || void 0 === zT ? void 0 : zT.conn) !== TT) return void(null !== lW && WX.set(TT, {
        code: oT,
        reason: IT
      }));
      const {
        rejoin: XT,
        game: BT,
        joinedAt: FT
      } = pW;
      kB(), jB();
      const ST = (0, jT.k)(oT, (0, wi.h)(TT));
      if (console.info(`${xk} the game's connection closed with code ${oT} (${null!==(kT=ST.name)&&void 0!==kT?kT:"unrecognised"})`), oT === iT.b.gameOrPluginKick.code || WT || (0, eI.reportDisconnect)(ST, yk, {
          closeReason: IT,
          sinceJoinedMs: performance.now() - FT,
          game: BT
        }), ST.requiresRefresh) {
        const TT = "outdatedVersion" === ST.name,
          IT = new Error(`the game's connection closed with code ${oT}`),
          iT = () => null === pW && null === lW;
        return void fF({
          site: eI.JOIN_SITE,
          error: IT,
          outdated: TT
        }, (() => {
          iT() && cB(ST, null, !1)
        }), iT)
      }
      const DT = ST.canReconnect ? XT : null,
        LT = null !== DT && ST.automaticallyReconnect && performance.now() - oX >= jT.e;
      cB(ST, DT, LT)
    }

    function cB(TT, oT, IT) {
      var iT;
      let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (QX) return;
      Ni.e.unwantedLeave(IT && null !== oT && 0 === iX.size), null === (iT = IX) || void 0 === iT || iT.abort();
      const kT = new AbortController;
      IX = kT;
      const WT = null === oT ? null : () => {
        kT.signal.aborted || (kT.abort(), oT())
      };
      if (IT && null !== WT) {
        oX = performance.now();
        const TT = setTimeout(WT, jT.b);
        kT.signal.addEventListener("abort", (() => {
          clearTimeout(TT)
        }))
      }
      const XT = {
        code: TT.code,
        name: TT.name,
        reason: TT.reason,
        reasonKey: zT.reasonKey,
        reconnect: WT,
        reconnecting: IT,
        requiresRefresh: TT.requiresRefresh,
        canPlayAgain: zT.canPlayAgain
      };
      if (iX.size > 0)
        for (const FT of [...iX]) try {
          FT(XT)
        } catch (BT) {
          console.error(`${xk} an unwanted-leave listener threw`, BT)
        } else Ki((0, Li.g)(TT, null !== WT, IT), kT.signal).then((oT => {
          oT && (null !== WT ? WT() : TT.requiresRefresh && (0, lT.j)())
        }))
    }
    const KB = {
      attachSocket: TT => mB(TT),
      onConnection: TT => (XX.add(TT), () => {
        XX.delete(TT)
      }),
      sendRaw: (TT, oT) => {
        const IT = IW;
        return null !== IT && IT.conn === TT && MF(IT, oT)
      },
      leaveRoom: zB,
      closeSocket: TT => {
        var oT;
        (null === (oT = IW) || void 0 === oT ? void 0 : oT.conn) === TT && eB()
      },
      flushNet: RB
    };

    function MB(TT) {
      var oT;
      let {
        aux: IT,
        payload: iT
      } = TT;
      null === (oT = sk) || void 0 === oT || oT.queueOptions(IT, iT)
    }

    function rB(TT, oT) {
      MB(function(TT, oT) {
        return Bz = TT ? {
          preventMovement: oT
        } : null, TT ? Fz(oT) : {
          aux: Ho.Vb.AdEnd,
          payload: Xz
        }
      }(TT, oT))
    }

    function AB(TT) {
      var oT;
      OW = TT, null === (oT = sk) || void 0 === oT || oT.setUiPrefs(TT)
    }

    function gB(TT, oT) {
      bk.setMaster(TT, oT)
    }

    function hB(TT) {
      var oT;
      HW = TT, null === (oT = sk) || void 0 === oT || oT.setEnvPrefs(TT)
    }

    function wB(TT) {
      var oT;
      nW = TT, null === (oT = sk) || void 0 === oT || oT.setLookPrefs(TT)
    }

    function mB(TT) {
      var oT;
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(TT.url).origin,
        iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (TT.readyState === WebSocket.CLOSING || TT.readyState === WebSocket.CLOSED) return console.warn(`${xk} a closing or closed socket can't be attached`), null;
      const zT = sk;
      if (!zT || zT.isStopped) return console.warn(`${xk} no core is running to attach a socket to`), TT.close(), null;
      if (null === (0, wT.i)()) return console.warn(`${xk} the game has not started to attach a socket to`), TT.close(), null;
      if (vW > Ho.y) return console.warn(`${xk} this core has attached all the sockets it can; reload to play on`), TT.close(), null;
      if (UW && !CW && (XF(zT, !1, "all"), zT.isStopped || HX)) return TT.close(), null;
      eB();
      const kT = vW++;
      if (!QB(zT, "open", kT, iT ? Ho.Sb.Resume : 0)) return TT.close(), null;
      iT || xo.e.reset(), TX = null === lW ? null : {
        join: lW,
        conn: kT,
        activated: !1
      }, TT.binaryType = "arraybuffer";
      const WT = new LI.e((() => {
          ! function(TT, oT) {
            if (IW !== oT || TT.isStopped || null === EB(oT, uk)) return;
            oT.detach(), IW = null, vB(TT, oT, uk, "", !0), oT.ws.close()
          }(zT, XT)
        })),
        XT = {
          ws: TT,
          conn: kT,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: iT,
          token: null,
          detach: () => {
            WT.dispose(), TT.removeEventListener("message", BT), TT.removeEventListener("open", FT), TT.removeEventListener("close", ST)
          }
        },
        BT = TT => {
          if (TT.data instanceof ArrayBuffer) {
            var oT;
            const IT = new Uint8Array(TT.data);
            WT.heard(), XT.token = null !== (oT = (0, xI.b)(IT)) && void 0 !== oT ? oT : XT.token,
              function(TT, oT, IT) {
                RF(TT, (() => {
                  TT.rings.net.writeFrame(oT, IT) || TT.crash(oI.q, `a socket frame of ${IT.byteLength} bytes did not fit the net-in ring`)
                }));
                const iT = TT.rings.net.cursor >= ek;
                (iT || TT.netWrittenSinceFrame >= mk || document.hidden && performance.now() - EW >= Jk) && XF(TT, !1, "budget")
              }(zT, kT, IT)
          }
        },
        FT = () => {
          iT || (0, jo.j)("wasm_socket_open", performance.now());
          for (const oT of XT.pending.splice(0)) TT.send(oT);
          XT.pendingBytes = 0
        },
        ST = TT => {
          if (IW === XT && zT.rings.net.cursor > 0 && XF(zT, !1, "all"), IW === XT) {
            if (XT.detach(), IW = null, vB(zT, XT, TT.code, TT.reason) || uB(zT, XT)) return;
            QB(zT, "close", kT), fB(kT, XT.left), xB(kT, TT.code, TT.reason)
          }
        };
      return TT.addEventListener("message", BT), TT.addEventListener("open", FT), TT.addEventListener("close", ST), IW = XT, null === (oT = (0, wT.i)()) || void 0 === oT || oT.socketAttached(kT), (0, LT.o)({
        websocketUrl: IT
      }), kT
    }

    function eB() {
      const TT = IW;
      if (!TT) return;
      const oT = sk,
        IT = TT.resume;
      IT && (RB(), IW !== TT) || (IW = null, TT.detach(), TT.ws.close(), null !== oT && (uB(oT, TT) || IT && vB(oT, TT, vk)) || (null !== oT && QB(oT, "close", TT.conn), fB(TT.conn, TT.left)))
    }

    function RB() {
      const TT = sk;
      null !== TT && !TT.isStopped && !HX && !CW && TT.rings.net.cursor > 0 && XF(TT, !1, "all")
    }

    function uB(TT, oT) {
      var IT;
      if (!oT.resume) return !1;
      const iT = bW;
      return null !== iT && null !== oT.token && "" !== oT.token && (iT.pendingHold = {
        conn: oT.conn,
        token: `${iT.roomId}:${oT.token}`
      }), QB(TT, "close", oT.conn), null === (IT = (0, wT.i)()) || void 0 === IT || IT.socketDetached(oT.conn), !0
    }

    function vB(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const kT = EB(oT, IT);
      if (null === kT) return !1;
      const {
        kS: WT,
        token: XT,
        game: BT,
        joinedAt: FT
      } = kT;
      if (!QB(TT, "close", oT.conn, Ho.D.Held)) return !0;
      console.warn(`${xk} the game's connection ${zT?"went silent":`dropped with code ${IT}`}, holding it`);
      const ST = {
        closeReason: iT,
        sinceJoinedMs: performance.now() - FT,
        game: BT
      };
      return (0, eI.reportDisconnect)((0, jT.k)(IT), yk, ST, zT ? "silent" : void 0), WT.heldConn = oT.conn, WT.dropCode = IT, WT.pendingHold = {
        conn: oT.conn,
        token: `${WT.roomId}:${XT}`
      }, CW || XF(TT, !1, "all"), !0
    }

    function EB(TT, oT) {
      const IT = bW,
        zT = pW,
        kT = TT.token;
      return null === IT || null === zT || HX || TT.left || zT.conn !== TT.conn || null === kT || "" === kT ? null : (0, iT.g)(oT) && IT.resume.canHoldSeat() ? {
        kS: IT,
        token: kT,
        game: zT.game,
        joinedAt: zT.joinedAt
      } : null
    }

    function fB(TT, oT) {
      var IT;
      null === (IT = (0, wT.i)()) || void 0 === IT || IT.closeGame(TT), (0, Wz.e)().close(TT), oT || (0, LT.o)({
        websocketUrl: null
      })
    }

    function CB() {
      const TT = PW;
      if (null === TT) return;
      const oT = (0, wT.i)();
      HX || null === oT || oT.OE(TT) ? PW = null : performance.now() - aW.pause >= jk && (aW.pause = performance.now(), console.warn(`${xk} the cmd ring had no room for SetPaused(${TT}): written before the next frame`))
    }

    function jB() {
      const TT = bW;
      bW = null, null === TT || void 0 === TT || TT.resume.dispose()
    }

    function JB(TT, oT) {
      var IT, iT;
      const {
        heldConn: zT
      } = TT, kT = TT.resume.resumingConn;
      TT.heldConn = 0, TT.pendingHold = null, bW === TT && (bW = null), "left" === oT ? TT.resume.leave() : TT.resume.dispose(), 0 === NW || (null === (IT = IW) || void 0 === IT ? void 0 : IT.conn) !== NW || "left" === oT && (null === (iT = qW) || void 0 === iT ? void 0 : iT.conn) === NW || YB(NW), "gaveUp" === oT && 0 !== kT && YB(kT), 0 !== zT && "refused" !== oT && (console.info(`${xk} the game held through its drop ${"left"===oT?"was left":"is given up"}`), null === sk || sk.isStopped || QB(sk, "close", zT), fB(zT, !1))
    }

    function UB(TT, oT) {
      const IT = oT.indexOf(":");
      return {
        roomId: IT < 0 ? TT.roomId : oT.slice(0, IT),
        roomToken: oT.slice(IT + 1)
      }
    }

    function aB(TT) {
      var oT;
      yW = TT, TT.conn === NW && (NW = 0);
      const IT = bW;
      null !== IT && (null === (oT = pW) || void 0 === oT ? void 0 : oT.conn) === TT.conn && IT.resume.onInitialInfo(TT)
    }

    function YB(TT) {
      var oT;
      const IT = IW;
      (null === IT || void 0 === IT ? void 0 : IT.conn) === TT && (IT.left = !0, null === (oT = (0, wT.i)()) || void 0 === oT || oT.socketLeft(), (0, LT.o)({
        websocketUrl: null
      }), zB(TT) ? setTimeout((() => {
        IW === IT && eB()
      }), JT.h) : eB())
    }

    function QB(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        zT = !1;
      return RF(TT, (() => {
        const {
          net: kT
        } = TT.rings;
        zT = "open" === oT ? kT.writeOpen(IT, iT) : kT.writeClose(IT, iT), zT || TT.crash(oI.q, `a socket ${oT} did not fit the net-in ring`)
      })), zT
    }

    function OB(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (HB()) {
        const iT = "browser" === TT && (0, kz.L)() ? "blockedAfterLoss" : "unsupported";
        return (0, eI.reportUnsupportedFallback)(TT, iT, oT, IT), void nB(`the wasm client can't run here (${oT}; ${iT})`, iT)
      }(0, eI.showUnsupported)(TT, "unsupported", oT, IT)
    }

    function HB() {
      return UX && "wasm" !== (0, So.g)(window.location.search)
    }

    function nB(TT, oT) {
      console.warn(`${xk} ${TT}: reloading on the JS client`), null !== oT && (0, So.s)(oT), (0, So.r)(null === oT ? "reloadOntoJs" : "decline");
      const IT = () => {
        (0, lT.f)(So.w)
      };
      (0, eI.flushCrashReports)(lT.b).then(IT, IT)
    }

    function qB(TT, oT, IT, iT) {
      return DX(TT, oT, IT, iT)
    }

    function ZB() {
      null === cX || null === sk || sk.isStopped || HX || null !== rW || null === Yk || (rW = cX(Yk, GB, pB().follow))
    }

    function lB() {
      var TT, oT, IT;
      return null !== (TT = null === (oT = Gk) || void 0 === oT || null === (IT = oT.textures) || void 0 === IT ? void 0 : IT.files()) && void 0 !== TT ? TT : null
    }

    function sB(TT) {
      IT.e(259).then((() => IT(39520))).then((oT => {
        let {
          setIconFileOverrides: IT
        } = oT;
        IT(TT)
      }), (TT => {
        console.warn(`${xk} the item icons couldn't take the texture pack's files`, TT)
      }))
    }

    function tB(TT) {
      pB().follow((oT => {
        null !== oT && Promise.all([Promise.all([IT.e(188), IT.e(45)]).then((() => IT(42144))), (0, kz.F)()]).then((TT => {
          let [{
            followPagePackFiles: IT
          }, iT] = TT;
          const zT = null === iT || (0, TI.r)(iT) ? "webgl" : iT.backend;
          IT(oT, yi.f, zT, (TT => {
            yi.f.setPageFiles(TT)
          }), GB)
        }), (oT => {
          console.warn(`${xk} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, oT), TT()
        }))
      }))
    }

    function GB(TT, oT) {
      console.warn(`${xk} ${TT}`, oT)
    }

    function pB() {
      return tk ??= new wz({
        load: TT => Promise.all([IT.e(188), IT.e(51)]).then((() => IT(42147))).then((oT => {
          let {
            startPageTexturePackFeed: IT
          } = oT;
          return IT(GB, TT)
        })),
        store: mI.c,
        Bc: TT => {
          dk.then((() => {
            (0, eI.reportTexturePackFeedLoadFailure)(TT, yk)
          }))
        }
      }), tk
    }
    const bB = TT => pB().follow(TT);

    function yB() {
      return pB().loaded()
    }
    const NB = function(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          zT = 0;
        return async function(kT, WT) {
          let XT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const BT = ++zT,
            FT = iT() + oT,
            ST = await
          function(TT, oT) {
            let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((iT => {
              const zT = setTimeout((() => {
                iT(null), TT.then((TT => {
                  null !== TT && (TT.joinedWithout(), IT(TT))
                }))
              }), oT);
              TT.then((TT => {
                clearTimeout(zT), iT(TT)
              }))
            }))
          }(TT(kT), oT, (TT => {
            BT === zT && XT() && WT(TT, iT() + oT).catch((TT => {
              IT("the texture pack step after the join failed", TT)
            }))
          }));
          return null === ST ? null : WT(ST, FT)
        }
      }((TT => (0, oo.m)(TT) ? pB().request() : pB().forJoin()), hz.d, GB),
      PB = function(TT, oT) {
        let IT = !1;
        return {
          setGamePackConfirm: TT => {
            IT = null !== TT, oT(TT)
          },
          packStep: (oT, iT, zT) => TT(oT, iT, (() => IT && zT()))
        }
      }(NB, (TT => {
        pB().setGamePackConfirm(TT)
      }));

    function dB(TT) {
      PB.setGamePackConfirm(TT)
    }

    function VB() {
      if (HX || null !== gX || null === KX || null === AX) return;
      const {
        backend: TT,
        canvas: oT,
        fallbackReason: IT,
        adapterVendor: iT
      } = AX, zT = KX;
      KX = null;
      try {
        gX = zT({
          backend: TT,
          canvas: oT,
          fallbackReason: IT,
          adapterVendor: iT,
          joinedGame: () => HX ? null : qW,
          inGame: oF,
          shaderPackRuns: VX,
          msaa: () => rX > 1,
          writeCmd: (TT, oT, IT) => null !== Yk && Yk(TT, oT, IT),
          takeFailedMeshJobs: () => {
            var TT, oT;
            return null !== (TT = null === (oT = WW) || void 0 === oT ? void 0 : oT.takeFailedMeshJobs()) && void 0 !== TT ? TT : 0
          }
        })
      } catch (kT) {
        console.error(`${xk} the frame telemetry didn't start`, kT)
      }
    }

    function TF(TT, oT) {
      try {
        var IT, iT, zT;
        const kT = BX && null !== (IT = null === (iT = sk) || void 0 === iT || null === (zT = iT.lastHeader) || void 0 === zT ? void 0 : zT.renderPending) && void 0 !== IT ? IT : 0;
        (0, pI.j)(oT, TT, oF() && !(null !== Bz), kT)
      } catch (kT) {
        (0, pI.v)(), console.error(`${xk} the quality steps stopped`, kT)
      }
    }

    function oF() {
      return null !== qW && CX === qW && !HX
    }

    function IF(TT) {
      const oT = gX;
      gX = null;
      try {
        null === oT || void 0 === oT || oT.stop()
      } catch {}
      console.error(`${xk} the frame telemetry threw: it stops`, TT)
    }

    function iF(TT) {
      var oT, IT, iT, zT;
      if ((0, Wz.e)().fire(TT), "message" === TT.type) {
        if (jW++, TT.US === Ho.Kc.ERROR && null !== lW) {
          var kT;
          const {
            text: oT,
            dropsCache: IT
          } = (0, jT.q)((new TextDecoder).decode(TT.payload));
          zX ||= IT, (null === (kT = TX) || void 0 === kT ? void 0 : kT.conn) === TT.conn && (kX = oT)
        } else if (TT.US === no.$b.ResumeComplete) {
          var WT;
          null === (WT = bW) || void 0 === WT || WT.resume.onResumeComplete(TT.conn)
        }
        return
      }
      TT.phase === Ho.F.Left ? JW = TT.conn : TT.phase === Ho.F.Activated && (null === (oT = TX) || void 0 === oT ? void 0 : oT.conn) === TT.conn ? TX.activated = !0 : TT.phase === Ho.F.Resumed ? function(TT) {
        var oT, IT;
        NW = TT;
        const iT = bW;
        if (null === iT || 0 === iT.heldConn || (null === (oT = IW) || void 0 === oT ? void 0 : oT.conn) !== TT || !IW.resume || null === pW) return;
        console.info(`${xk} the game resumed on conn ${TT}, waiting for its InitialInfo`);
        const zT = iT.heldConn;
        iT.heldConn = 0, IW.resume = !1, pW.conn = TT, (null === (IT = tW) || void 0 === IT ? void 0 : IT.conn) === zT && (tW = {
          conn: TT,
          info: tW.info
        }), xo.e.apply({
          shopInfo: null,
          _shopVersion: Io.e
        })
      }(TT.conn) : TT.phase === Ho.F.Held ? function(TT) {
        var oT;
        const IT = bW,
          iT = null !== (oT = null === IT || void 0 === IT ? void 0 : IT.pendingHold) && void 0 !== oT ? oT : null;
        if (null !== IT && null !== iT && iT.conn === TT) return IT.pendingHold = null, IT.heldConn = TT, NW = 0, console.warn(`${xk} the core holds the game, reconnecting`), void IT.resume.onDropped(iT.token);
        if (TT === NW) {
          NW = 0;
          const oT = sk;
          null === oT || oT.isStopped || (console.info(`${xk} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), QB(oT, "close", TT))
        }
      }(TT.conn) : TT.phase === Ho.F.Closed && (null === (IT = bW) || void 0 === IT || null === (iT = IT.pendingHold) || void 0 === iT ? void 0 : iT.conn) === TT.conn && (bW.heldConn === TT.conn ? function(TT) {
        const oT = TT.heldConn,
          IT = TT.dropCode;
        JB(TT, "refused"), console.info(`${xk} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          fB(oT, !1), xB(oT, IT, "", !0)
        }))
      }(bW) : bW.pendingHold = null);
      const XT = Object.keys(Ho.F).find((oT => Ho.F[oT] === TT.phase)),
        BT = 0 === TT.code ? "" : ` (code ${TT.code})`;
      console.info(`${xk} conn ${TT.conn}: ${null!==XT&&void 0!==XT?XT:TT.phase}${BT}, ${jW} raw messages so far`), (null === (zT = qW) || void 0 === zT ? void 0 : zT.conn) !== TT.conn || TT.phase !== Ho.F.Left && TT.phase !== Ho.F.Closed || iB(null), sW !== TT.conn || TT.phase !== Ho.F.Left && TT.phase !== Ho.F.Closed || (sW = null, null === qW && null === lW && Ni.e.setGame(void 0));
      for (const ST of [...XX]) try {
        ST(TT.conn, TT.phase, TT.code)
      } catch (FT) {
        (0, qo.m)(FT, `${xk} a connection listener threw`)
      }
    }

    function zF() {
      (0, kz.n)(), queueMicrotask((() => {
        try {
          rF()
        } catch (TT) {
          console.warn(`${xk} stopping before the reload threw`, TT)
        }(0, eI.flushCrashReports)(lT.b).then(lT.j, lT.j)
      }))
    }

    function kF() {
      const TT = sk;
      null === TT || TT.isStopped || null === IW || CW || !TT.hasPendingCommands() || XF(TT, !1, "budget")
    }

    function WF(TT) {
      var oT;
      const IT = qW;
      TT.persisted || null === IT || (null === (oT = IW) || void 0 === oT ? void 0 : oT.conn) !== IT.conn || IW.left || IT.leave()
    }

    function XF(TT, oT, iT) {
      let zT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const kT = CW;
      CW = !0;
      try {
        return function(TT, oT, iT, zT) {
          var kT, WT, XT, BT;
          if (HX) return !1;
          if (RF(TT, FF), HX || TT.isStopped) return !1;
          cF() && RW("modelsIn");
          CB(), EW = performance.now(), JW = null, UW = !1, (0, hT.S)(), null === (kT = LW) || void 0 === kT || kT.beforeFrame(), Xi(EW, TT), (0, hT.J)(EW, SF), fW = !0;
          const FT = oT && xF();
          let ST;
          try {
            ST = TT.frame(EW, FT, iT)
          } finally {
            fW = !1
          }
          if (!ST) return !1;
          MX.observe(null !== (WT = null === (XT = TT.lastHeader) || void 0 === XT ? void 0 : XT.chunksCancelled) && void 0 !== WT ? WT : 0);
          const DT = TT.lastFrameKind,
            LT = (0, uo.e)(DT);
          (function(TT) {
            null !== Oz && Oz.afterFrame(performance.now(), TT)
          })(LT), null === (BT = hX) || void 0 === BT || BT.frame(TT, EW, DT), oT && (jX = LT);
          LT && (0, mo.e)(EW);
          if (null !== gX) try {
            gX.frameRan(TT, EW, performance.now(), DT)
          } catch (cT) {
            IF(cT)
          }
          "drawn" === DT && LF() && function() {
            for (const TT of [...iz]) TT()
          }();
          TT.forEachNetOut(KF);
          const xT = IW;
          null !== JW && (null === xT || void 0 === xT ? void 0 : xT.conn) === JW && MF(xT, JT.o);
          (function(TT) {
            var oT;
            if (eX) return;
            null === vX && xF() && (vX = performance.now());
            if (null === lW && null === qW) return;
            null === vX || EX || (EX = !0, (0, jo.j)("wasm_startup_loaded", vX));
            let IT = 0;
            null !== qW ? IT = -1 : !0 === (null === (oT = TX) || void 0 === oT ? void 0 : oT.activated) && (IT = ~no.J.TerrainDrawn);
            const iT = TT.headerWord(no.A.LoadSteps) & IT & ~uX;
            if (0 === iT) return;
            uX |= iT;
            const zT = performance.now();
            for (const [kT, WT] of Object.entries(DF)) 0 !== (iT & no.J[kT]) && (0, jo.j)(WT, zT)
          })(TT), oT && function(TT) {
            var oT, iT, zT;
            if (null === qW || !xF()) return;
            null === fX || CX === qW && !fX.frame(EW, 0 !== (TT.headerWord(no.A.LoadSteps) & no.J.TerrainDrawn)) || (fX = null);
            const kT = TT.lastHeader,
              WT = !BX || 0 === (null === kT || void 0 === kT ? void 0 : kT.renderPending);
            !RX && WT && (RX = !0, performance.mark(wk));
            if (CX === qW) return;
            const XT = null !== (oT = null === kT || void 0 === kT ? void 0 : kT.firstView) && void 0 !== oT ? oT : Ho.V.NotYet;
            if (BX && XT === Ho.V.NotYet) return;
            if (eX && (!0 !== (null === (iT = (0, wT.i)()) || void 0 === iT ? void 0 : iT.isSessionLive) || !WT)) return;
            CX = qW;
            const BT = qW;
            if (setTimeout((() => {
                qW === BT && (0, jo.g)()
              }), 0), null === (zT = wW) || void 0 === zT || zT.playable(), function() {
                clearTimeout(oW), oW = setTimeout((() => {
                  oF() && EF((TT => {
                    let {
                      prefetchWorldgenWorker: oT
                    } = TT;
                    oT()
                  }))
                }), ak)
              }(), eX) return;
            eX = !0, performance.mark(hk), (0, Cz.r)("render") && Promise.all([IT.e(74), IT.e(47)]).then((() => IT(4183))).then((TT => {
              let {
                renderDebugPlayable: oT
              } = TT;
              oT()
            }), (TT => {
              console.warn("The render debug topic didn't load", TT)
            }));
            const FT = Math.round(performance.now());
            if (BX && XT !== Ho.V.Drawn) {
              const TT = XT === Ho.V.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${xk} playable at ${FT} ms on the first view's ${TT} backstop: it wasn't drawn whole in time`), (0, jo.j)("wasm_view_backstop", FT, TT), "long" === TT) {
                var ST, DT;
                const TT = null !== (ST = null === (DT = pW) || void 0 === DT ? void 0 : DT.game) && void 0 !== ST ? ST : "";
                fX = new RI.c((() => {
                  (0, eI.reportFirstViewNoTerrain)(TT, yk)
                }))
              }
            } else console.info(`${xk} playable at ${FT} ms${BX?"":" (no renderer)"}`);
            setTimeout(xX, 0), (0, Ko.h)().catch((TT => {
              console.error(`${xk} item sprites didn't load, so item particles show the missing texture`, TT)
            }))
          }(TT);
          (0, oI.J)(TT, {
            worldgen: zW,
            mesh: WW
          }),
          function(TT) {
            TT.forEachEvent(Fi);
            for (const oT of Bi) try {
              (0, Ii.c)(oT)
            } catch (cT) {
              if ((0, qo.f)(cT)) {
                TT.crashOn(oI.j, cT);
                break
              }
              console.error(`${zi} an input action listener threw`, cT)
            }
            Bi.length = 0
          }(TT), zT && (0, Ro.e)();
          return !TT.isStopped
        }(TT, oT, "all" === iT || TT.rings.net.cursor >= ek || TT.netKeptFrames >= Rk, zT)
      } finally {
        CW = kT
      }
    }

    function BF(TT) {
      console.error(`${xk} a frame-start listener threw`, TT)
    }

    function FF() {
      var TT, oT, IT, iT;
      null === (TT = cW) || void 0 === TT || TT.drain(Yk, Qk), null === (oT = AW) || void 0 === oT || oT.drain(Yk), null === (IT = gW) || void 0 === IT || IT.drain(performance.now()), LX(Yk), null === (iT = rW) || void 0 === iT || iT.drain()
    }

    function SF(TT) {
      console.error(`${xk} a before-frame listener threw`, TT)
    }
    const DF = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function LF() {
      return BX && xF()
    }

    function xF() {
      return hW && cF()
    }

    function cF() {
      return null === cW || cW.startupDone
    }

    function KF(TT, oT) {
      const IT = IW;
      (null === IT || void 0 === IT ? void 0 : IT.conn) === TT ? MF(IT, oT) : QW++
    }

    function MF(TT, oT) {
      const {
        ws: IT
      } = TT;
      return IT.readyState === WebSocket.OPEN ? (IT.send(oT), !0) : IT.readyState === WebSocket.CONNECTING && TT.pendingBytes + oT.byteLength <= Ck ? (TT.pending.push(oT.slice()), TT.pendingBytes += oT.byteLength, !0) : (QW++, !1)
    }

    function rF() {
      var TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT;
      HX = !0, JX.stop(), (0, Jz.b)(), Oz = null, jB(), (0, hT.O)().unlockPointer(), (0, hT.M)(null), null === (TT = xW) || void 0 === TT || TT(), xW = null, null === (oT = (0, wT.p)()) || void 0 === oT || oT.followCursorAim(null), (0, Ro.B)(), (0, wT.e)(), bk.stop(), null === (IT = wX) || void 0 === IT || IT(), wX = null, null === (iT = mX) || void 0 === iT || iT(), mX = null, null === (zT = gX) || void 0 === zT || zT.stop(), gX = null, (0, vI.o)(null), null === (kT = iW) || void 0 === kT || kT(), iW = null, null === (WT = zW) || void 0 === WT || WT.stop(), zW = null, null === (XT = WW) || void 0 === XT || XT.stop(), WW = null, null !== (BT = Gk) && void 0 !== BT && null !== (FT = BT.textures) && void 0 !== FT && FT.assets && sB(null), null === (ST = Gk) || void 0 === ST || ST.stop(), Gk = null, pk = null;
      const rT = XW;
      XW = null, rT && (rT.stop(), eF(rT)), null === (DT = AW) || void 0 === DT || DT.dispose(), AW = null, null === (LT = gW) || void 0 === LT || LT.dispose(), gW = null, cW = null, null === (xT = MW) || void 0 === xT || xT(), MW = null, null === (cT = DW) || void 0 === cT || cT(), DW = null, null === (KT = LW) || void 0 === KT || KT.stop(), LW = null, TB(), Ni.e.release(), eB();
      const AT = rW;
      rW = null;
      try {
        null === AT || void 0 === AT || AT.dispose()
      } catch (gT) {
        console.warn(`${xk} the sky's images didn't release`, gT)
      }(0, Zi.c)(null), null === (MT = Zk) || void 0 === MT || MT.pagePreviews().endSession(null === (0, zo.n)())
    }

    function AF(TT, oT) {
      var IT, iT;
      const zT = null !== (IT = null === (iT = XW) || void 0 === iT ? void 0 : iT.details()) && void 0 !== IT ? IT : {},
        kT = TT.site === Kk || TT.site === Mk || TT.site === eI.RENDER_RELOAD_SITE || TT.site === rk ? TT.error instanceof WebAssembly.RuntimeError || TT.error instanceof yo.d : !(0, TI.s)(TT.error) && (0, oI.C)(TT);
      kT && TT.error instanceof Error && (0, zo.N)(TT.error);
      const WT = kT || TT.site === oI.u ? (0, eI.readTrap)(TT.error) : null,
        XT = null !== WT && (0, Zo.f)(WT.kind, WT.refusedBytes) ? WT.refusedBytes : 0,
        BT = null === BW ? (0, Hi.o)(function() {
          try {
            return (0, zo.t)().buffer.byteLength
          } catch {
            return 0
          }
        }(), XT, null) : BW.ceilingMayRefuse(XT),
        FT = XT > 0 && !BT && HB();
      var ST;
      if (FT && ((0, So.s)("oom"), (0, So.r)("decline"), OX = !0), rF(), (0, kz.d)()) return console.warn(`${xk} the session stopped at ${TT.site} as the page reloads`, TT.error), void((0, TI.s)(TT.error) || (null === (ST = TT.header) || void 0 === ST ? void 0 : ST.lastError) === Ho.I.CoreBusy || (0, eI.reportStoppedCore)(TT, oT, WT, {
        memoryDetails: zT,
        declined: FT
      }));
      (0, eI.showCrash)(TT, oT, WT, {
        memoryDetails: zT,
        declined: FT
      })
    }

    function gF(TT) {
      const {
        input: oT,
        net: IT,
        worker: iT
      } = TT.rings, zT = TT.optionsDropped, kT = oT.dropped + zT + IT.dropped + iT.dropped + QW;
      kT !== YW && function(TT, oT) {
        const IT = performance.now();
        return !(IT - aW[TT] < jk) && (aW[TT] = IT, console.warn(`${xk} ${oT}`), !0)
      }("dropped", `${kT} records dropped so far (input ${oT.dropped}, options ${zT}, net ${IT.dropped}, worker ${iT.dropped}, net-out ${QW})`) && (YW = kT)
    }

    function hF() {
      var TT, oT;
      const IT = (0, gI.c)();
      if (null === IT) return null;
      const iT = (0, wI.g)(IT);
      return {
        ...iT,
        horizontal: Math.min(iT.horizontal, null !== (TT = null === (oT = XW) || void 0 === oT ? void 0 : oT.shedDistanceInUse()) && void 0 !== TT ? TT : 1 / 0)
      }
    }

    function wF(TT) {
      var oT, IT;
      return {
        samples: BX ? rX : null,
        sunShadows: TT,
        renderDistance: null !== (oT = null === (IT = hF()) || void 0 === IT ? void 0 : IT.horizontal) && void 0 !== oT ? oT : null
      }
    }

    function mF() {
      var TT, oT, IT;
      const iT = hF();
      return {
        ...null === (TT = XW) || void 0 === TT ? void 0 : TT.pageKillSnapshot(),
        renderDistance: null !== (oT = null === iT || void 0 === iT ? void 0 : iT.horizontal) && void 0 !== oT ? oT : null,
        renderDistanceVertical: null !== (IT = null === iT || void 0 === iT ? void 0 : iT.vertical) && void 0 !== IT ? IT : null,
        chunkCap: FW,
        budgetBasis: SW,
        renderBackend: (0, kz.z)()
      }
    }

    function eF(TT) {
      console.info(`${xk} wasm memory at the session's end`, TT.details())
    }

    function RF(TT, oT) {
      if (!TT.isStopped) try {
        oT()
      } catch (IT) {
        TT.crash(oI.v, IT)
      }
    }

    function uF() {
      return kW ??= IT.e(68).then((() => IT(42151))).catch((TT => {
        throw kW = null, TT
      })), kW
    }
    async function vF() {
      const {
        createWorldgenWorker: TT,
        worldgenWorkerReady: oT
      } = await uF();
      return await oT(), TT
    }

    function EF(TT) {
      var oT;
      null === (oT = kW) || void 0 === oT || oT.then(TT, (() => {}))
    }

    function fF(TT, oT, IT) {
      return async function(TT, oT, IT) {
        let {
          stop: iT,
          stillWanted: zT
        } = IT;
        const kT = await (0, gi.h)(TT, {
          stillWanted: zT,
          beforeReload: async () => {
            iT(), await (0, eI.flushCrashReports)(lT.b)
          },
          reload: lT.j
        });
        return kT || oT(), kT
      }(TT, oT, {
        stop: rF,
        stillWanted: IT
      })
    }
    let CF = !1;

    function jF() {
      return CF = !0, async function(TT, oT, iT) {
        const {
          gamePackSource: zT
        } = await IT.e(343).then((() => IT(42118)));
        await PB.packStep(TT, ((IT, iT) => IT.packForGame(TT, zT(oT), iT)), iT)
      }(...arguments)
    }

    function JF(TT) {
      ! function(TT, oT) {
        TT((TT => {
          null === TT || void 0 === TT || TT.subscribe((TT => {
            let {
              pack: IT,
              gameSource: iT
            } = TT;
            oT(null === iT || null === IT ? null : {
              pack: IT,
              source: "" === iT ? null : iT
            })
          }))
        }))
      }(bB, TT)
    }
    let UF = !1,
      aF = null,
      YF = !1,
      QF = !1;

    function OF() {
      var TT;
      UF || (UF = !0, tX("play", qT), (0, LT.m)(new NF), XT.gameBridge.attach(CT), sF().catch((() => {})), (0, wT.s)((TT => {
        VT(TT.setTextHost)
      })), TT = qF, iX.add(TT), function(TT) {
        for (const oT of mW) TT(oT);
        eW.add(TT)
      }((TT => {
        nF(HF[TT])
      })))
    }
    const HF = {
      booted: kT.j.INITIALISE_NOA,
      texturesIn: kT.j.REGISTRATION,
      modelsIn: kT.j.SETUP_LIFEFORMS
    };

    function nF(TT) {
      BT.h.XM("matchmakeAndPlayStepCompleted", {
        step: TT,
        totalSubSteps: 1
      })
    }

    function qF(TT) {
      if (!YF) return;
      const {
        gameNameWithVariation: oT,
        lobbyName: IT
      } = (0, LT.e)();
      if (TT.code === iT.b.serverUpdating.code) return (new NF).leaveLive(), void lF(oT, IT);
      BT.h.XM("unwantedLeftGame", {
        reason: ZF(TT),
        requiresRefresh: TT.requiresRefresh,
        canReconnect: null !== TT.reconnect,
        automaticallyReconnect: TT.reconnecting,
        canPlayAgain: TT.canPlayAgain,
        gameNameWithVariation: oT,
        lobbyName: IT
      }), (new NF).leaveLive()
    }

    function ZF(TT) {
      return null !== TT.reasonKey ? {
        translationKey: TT.reasonKey
      } : "gameOrPluginKick" === TT.name ? TT.reason : `You have disconnected from the server.\n${TT.reason}`
    }

    function lF(TT, oT) {
      var iT;
      iT = (0, FT.E)(TT, oT), Promise.resolve().then((() => IT(1468))).then((TT => {
        let {
          navigatePreserveSearch: oT
        } = TT;
        oT(iT)
      })).catch((TT => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", TT), (0, lT.d)(iT)
      }))
    }

    function sF() {
      return aF ??= Promise.all([IT.e(69), IT.e(72), IT.e(71), IT.e(70), IT.e(83), IT.e(258), IT.e(237), IT.e(211), IT.e(235), IT.e(207), IT.e(46)]).then((() => IT(39457))).then((TT => {
        try {
          TT.attachPlayGameSources()
        } catch (oT) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", oT),
            function(TT) {
              dk.then((oT => {
                null === oT || oT.isStopped || HX ? console.warn(`${xk} the play sources threw as they attached, after the client stopped`, TT) : AF({
                  site: rk,
                  error: TT,
                  header: null
                }, yk)
              }))
            }(oT), oT
        }
      }), (TT => {
        throw aF = null, new wT.b(TT)
      })), aF
    }
    async function tF(TT, oT) {
      OF(), CF = !0, YF = !0;
      let IT = {
          place: TT.place,
          matchedAt: TT.matchedAt
        },
        WT = TT.place.gameNameWithVariation;
      const XT = (0, DT.e)();
      let BT = null;
      const FT = await yX({
        matchmake: async () => {
          let oT = IT;
          if (IT = null, null === oT) {
            const IT = await TT.rematch();
            if (IT.isError()) throw BT = IT.asError().forward(), new Error(IT.asError().message);
            oT = {
              place: IT.getValue(),
              matchedAt: performance.now()
            }
          }
          WT = oT.place.gameNameWithVariation;
          return {
            target: await (0, aT.f)(TT.userContext, oT.place, yB(), XT),
            matchedAt: oT.matchedAt,
            freshMs: aT.d
          }
        },
        pageReady: sF,
        onFailure: (TT, oT) => {
          null === BT && function(TT, oT) {
            (0, eI.reportPageJoinFailure)(TT, yk, oT)
          }(TT, {
            sinceJoinStartMs: oT,
            game: WT
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => TT.userContext.invalidateTrafficCode(),
        signal: oT
      });
      switch (FT.kind) {
        case "joined":
          if (XT) {
            const {
              game: TT
            } = FT;
            (0, DT.o)((() => {
              TT.endJoinAd()
            }))
          }
          return QF || (QF = !0, (0, KT.d)()), YF ? (nF(kT.j.CONNECT_TO_GAME_SERVER), nF(kT.j.SHADER_PACK), VX() && (0, cT.f)(TT.userContext, WT).catch((TT => {
            console.error("Failed to report the shader pack session", TT)
          })), function() {
            const TT = function() {
              var TT, oT;
              return null !== (TT = null === (oT = wW) || void 0 === oT ? void 0 : oT.couldntRunInJoinedGame()) && void 0 !== TT ? TT : null
            }();
            null !== TT && (0, cT.e)(TT)
          }(), zT.b.value(void 0)) : yF("The server ended the game as it joined");
        case "failed":
          if (!FT.reloading) {
            if (null !== BT) return BT;
            if ((FT.error instanceof JT.r || FT.error instanceof JT.e) && FT.error.code === iT.b.serverUpdating.code) {
              if (oT.aborted) return yF("Left the game while it loaded");
              const {
                gameNameWithVariation: TT,
                lobbyName: IT
              } = (0, LT.e)();
              return lF(TT, IT), yF("The server is updating")
            }
            return FT.error instanceof ZT.e ? zT.b.errorWithCode(FT.error.messageKey, kT.j.SHADER_PACK, {
              severity: "medium"
            }) : zT.b.errorWithCode(function(TT) {
              if (TT instanceof JT.B || TT instanceof AT.f) return TT.message;
              if (GF(TT)) return (0, jT.n)(TT.code, TT.serverText);
              return jT.h
            }(FT.error), kT.j.CONNECT_TO_GAME_SERVER, {
              error: pF(FT.error) ? FT.error : void 0,
              severity: bF(FT.error),
              gameServerUnreachable: (0, UT.c)(FT.error),
              rematch: (0, rT.e)(FT.error)
            })
          }
          return yF("Reloading into the new build");
        case "stopped":
          return yF("The game client stopped, and shows why");
        case "Jo":
          return yF("Left the game while it loaded")
      }
    }

    function GF(TT) {
      return TT instanceof JT.r || TT instanceof JT.e && "attach" !== TT.stage
    }

    function pF(TT) {
      return !(TT instanceof JT.B) && !GF(TT) && void 0 === (0, UT.c)(TT)
    }

    function bF(TT) {
      return GF(TT) ? TT instanceof JT.e && (0, jT.k)(TT.code).requiresRefresh ? "medium" : "low" : pF(TT) || TT instanceof JT.B ? "medium" : "low"
    }

    function yF(TT) {
      return zT.b.errorWithCode(TT, kT.j.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        Jo: !0
      })
    }
    class NF {
      leave(TT) {
        if ((0, gT.b)()) {
          var oT, IT;
          if ((0, WT.e)()) return;
          (0, xT.b)(!0 === (null === (oT = (0, gT.j)()) || void 0 === oT || null === (IT = oT.currentViewer) || void 0 === IT ? void 0 : IT.unsavedChanges), TT)
        } else this.leaveLive()
      }
      leaveLive() {
        var TT;
        CF && (null === (TT = yB()) || void 0 === TT || TT.endGamePack());
        if (!YF) return;
        YF = !1, (0, MT.i)();
        try {
          var oT;
          null === (oT = (0, wT.p)()) || void 0 === oT || oT.clearWasmCameraScreen()
        } catch (iT) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", iT)
        }
        const {
          gameNameWithVariation: IT
        } = (0, LT.e)();
        try {
          WB()
        } finally {
          (0, LT.o)({
            websocketUrl: null
          }), BT.h.XM("leaveGame", {
            gameNameWithVariation: IT
          }), (0, ST.R)()
        }
      }
      isReplay() {
        return (0, gT.b)()
      }
    }
  },
  39798: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT,
      e: () => iT,
      h: () => XT,
      j: () => WT
    });
    const iT = 12e4,
      zT = 3e4,
      kT = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: TT => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", TT), () => {
          document.removeEventListener("visibilitychange", TT)
        })
      };

    function WT(TT) {
      return `it sent no start within ${Math.round(TT)} ms`
    }
    class XT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kT;
        this.timeoutMs = TT, this.onTimeout = oT, this.now = IT, this.visibility = iT, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = iT.listen((() => {
          this.onVisibility()
        })), iT.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const TT = this.step;
        return null === TT ? 0 : Math.min(this.now() - TT.at, TT.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const TT = this.timeoutMs - this.counted;
        if (TT <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const oT = Math.min(TT, 5e3);
        this.step = {
          at: this.now(),
          ms: oT
        }, this.arm(oT, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(TT, oT) {
        this.timer = setTimeout((() => {
          this.timer = null, oT()
        }), TT)
      }
    }
  },
  39691: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    const iT = {
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
  37716: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(3276);
    const zT = ["none", "idle", "now"];

    function kT() {
      const TT = () => (0, iT.z)();
      return {
        memoryBytes: () => (0, iT.t)().buffer.byteLength,
        reserveUpFront: oT => TT().KD(oT),
        reserveAhead: oT => TT().cD(oT),
        setCeiling: oT => {
          TT().MD(oT)
        },
        lowWater: () => zT[TT().xD()] ?? "none",
        stats: () => function(TT) {
          const oT = new Uint32Array((0, iT.t)().buffer, TT, 17),
            IT = TT => oT[TT] ?? 0,
            zT = TT => ({
              upFront: IT(TT),
              ahead: IT(TT + 1),
              onDemandInFrame: IT(TT + 2),
              onDemand: IT(TT + 3)
            });
          return {
            memoryBytes: IT(0),
            initialBytes: IT(1),
            liveBytes: IT(2),
            peakLiveBytes: IT(3),
            headroomBytes: IT(4),
            unusedBytes: IT(5),
            ceilingBytes: IT(6),
            reservesRefused: IT(7),
            grows: zT(8),
            grownBytes: zT(12),
            allocationsRefused: IT(16)
          }
        }(TT().rD()),
        takeBallast: () => TT().AD(),
        takePressure: () => TT().gD()
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);