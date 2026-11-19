export const id = 60;
export const ids = [60];
export const modules = {
  38931: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      i: () => pD
    });
    const ID = "The world isn't loaded, so no blocks can be seen.",
      pD = "The world isn't loaded, so nothing in it can be seen."
  },
  38447: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ZD,
      e: () => oD,
      f: () => tD
    });
    var ID = cD(2727);
    const pD = 0,
      iD = 2,
      fD = 3,
      bD = 4;
    class QD {
      constructor(DD, CD) {
        this.width = DD, this.LB = CD, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(DD * CD)
      }
      push(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let ID = 0; ID < this.width; ID++) cD[ID] = DD[CD + ID];
        return this.next = (this.next + 1) % this.LB, this.size = Math.min(this.size + 1, this.LB), cD
      }
      lines() {
        const DD = [],
          CD = (this.next - this.size + this.LB) % this.LB;
        for (let cD = 0; cD < this.size; cD++) {
          const ID = (CD + cD) % this.LB * this.width;
          DD.push(Array.from(this.data.subarray(ID, ID + this.width)).join(","))
        }
        return DD
      }
    }

    function wD(DD) {
      return Number.isFinite(DD) ? String(Math.round(10 * DD) / 10) : String(DD)
    }

    function SD(DD) {
      return Number.isFinite(DD) ? DD.toFixed(1) : String(DD)
    }
    class BD {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lL = 0, this.pastLimit = 0, this.lockSkips = 0, this.eb = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class yD {
      constructor() {
        var DD = this;
        this.tally = new BD, this.records = new QD(10, 3600), this.events = new QD(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(CD) {
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [ID, QD, BD, yD, MD, tD, ZD, oD, vD, ND] = DD.records.push(CD, cD), gD = DD.tally;
          switch (gD.frames++, ZD) {
            case pD:
              return void gD.idle++;
            case bD:
              return void gD.eb++;
            case fD:
              return gD.lockSkips++, void(0 === BD && 0 === yD || DD.outlier(`lock skip dropped raw (${wD(BD)}, ${wD(yD)}) at ${SD(ID)} ms`))
          }
          gD.looked++, Number.isFinite(QD) && (gD.dtMin = Math.min(gD.dtMin, QD), gD.dtMax = Math.max(gD.dtMax, QD), gD.dtSum += QD, QD > 0 && (gD.peakRate = Math.max(gD.peakRate, Math.hypot(MD, tD) / QD))), gD.raw[0] += BD, gD.raw[1] += yD, gD.turned[0] += MD, gD.turned[1] += tD;
          const XD = Math.abs(BD) > ND || Math.abs(yD) > ND,
            mD = `raw (${wD(BD)}, ${wD(yD)}) over ${SD(QD)} ms, limit ${wD(ND)}, filter v (${oD.toFixed(3)}, ${vD.toFixed(3)}) px/ms, at ${SD(ID)} ms`;
          ZD === iD ? (gD.lL++, DD.outlier(`spike put right: ${mD} -> turned (${wD(MD)}, ${wD(tD)})`)) : XD ? (gD.pastLimit++, DD.outlier(`kept past limit: ${mD}`)) : QD > 50 && (gD.longFrames++, DD.outlier(`long frame: ${mD}, turned in full`))
        }, this.onMouseMove = DD => {
          const CD = this.tally,
            {
              movementX: cD,
              movementY: ID
            } = DD;
          CD.events++;
          const pD = Math.max(Math.abs(cD), Math.abs(ID));
          CD.eventMax = Math.max(CD.eventMax, pD);
          const iD = null !== document.pointerLockElement,
            fD = this.event;
          fD[0] = DD.timeStamp, fD[1] = cD, fD[2] = ID, fD[3] = iD ? 1 : 0, this.events.push(fD), pD >= 200 && (CD.bigEvents++, this.eventOutlier(`big mousemove (${cD}, ${ID}) at ${SD(DD.timeStamp)} ms, lock ${iD?"Lb":"free"}`))
        }, this.onLockChange = () => {
          const DD = document.pointerLockElement;
          (0, ID.j)("look", `pointer lock ${DD?`gained (${DD.tagName.toLowerCase()})`:"lost"} at ${SD(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, ID.j)("look", `pointer lock request failed at ${SD(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, ID.j)("look", `page ${document.visibilityState} at ${SD(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const DD = this.tally;
          if (this.tally = new BD, 0 === DD.events && 0 === DD.raw[0] && 0 === DD.raw[1] && 0 === DD.lockSkips && 0 === DD.lL && 0 === DD.dropped) return;
          const CD = DD.looked > 0 ? DD.dtSum / DD.looked : NaN,
            cD = [`${DD.frames} frames (${DD.looked} looked, ${DD.idle} idle${"wasm"===this.client?`, ${DD.eb} carried`:""})`, `dt avg ${SD(CD)} min ${SD(DD.dtMin)} max ${SD(DD.dtMax)}, ${DD.longFrames} long`, `${DD.events} mousemoves (max ${wD(DD.eventMax)} px, ${DD.bigEvents} big)`, `raw (${wD(DD.raw[0])}, ${wD(DD.raw[1])}) turned (${wD(DD.turned[0])}, ${wD(DD.turned[1])})`, `peak ${DD.peakRate.toFixed(2)} px/ms`, `put right ${DD.lL}, past limit ${DD.pastLimit}, lock skips ${DD.lockSkips}`, "lock " + (document.pointerLockElement ? "Lb" : "free")];
          DD.dropped > 0 && cD.push(`${DD.dropped} doubled spike copies dropped`), DD.lost > 0 && cD.push(`${DD.lost} records lost`), DD.suppressed > 0 && cD.push(`${DD.suppressed} outlier lines not shown`), (0, ID.j)("look", `1s: ${cD.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(DD, CD) {
        this.client = DD, this.take = CD;
        const {
          screen: cD
        } = window;
        (0, ID.j)("look", `start: ${DD} client, dpr ${window.devicePixelRatio}, screen ${cD.width}x${cD.height}, pointer lock ${document.pointerLockElement?"Lb":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, ID.h)("look", this.dump))
      }
      outlier(DD) {
        const CD = this.tally;
        CD.outliers >= 20 ? CD.suppressed++ : (CD.outliers++, (0, ID.j)("look", DD))
      }
      eventOutlier(DD) {
        const CD = this.tally;
        CD.eventLines >= 10 ? CD.suppressed++ : (CD.eventLines++, (0, ID.j)("look", DD))
      }
      takeRecords() {
        var DD;
        const CD = null === (DD = this.take) || void 0 === DD ? void 0 : DD.call(this);
        if (CD && CD.length >= 2) {
          this.tally.lost += CD[0], this.tally.dropped += CD[1];
          for (let DD = 2; DD + 10 <= CD.length; DD += 10) this.record(CD, DD)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let MD = null;

    function tD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return MD ??= new yD, MD.start(DD, CD), MD.record
    }

    function ZD() {
      var DD;
      null === (DD = MD) || void 0 === DD || DD.endTake()
    }

    function oD() {
      var DD;
      null === (DD = MD) || void 0 === DD || DD.droppedCopy()
    }
  },
  8934: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    const ID = new Set(["chunkBorders"])
  },
  9080: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      g: () => pD,
      h: () => SD
    });
    var ID = cD(1562);

    function pD(DD) {
      var CD;
      return {
        ...fD.store,
        yaw: fD.store.yaw + (null !== (CD = ID.c[DD].previewYaw) && void 0 !== CD ? CD : 0)
      }
    }
    const iD = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      fD = {
        player: iD,
        store: {
          ...iD,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function bD(DD, CD) {
      DD instanceof Promise ? DD.then(CD).catch((DD => {
        console.error("Couldn't open the preview", DD)
      })) : CD(DD)
    }
    class QD {
      constructor(DD) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height), null !== this.view && DD.show(this.view))
        }))
      }
      show(DD) {
        var CD;
        this.view = DD, null === (CD = this.opened) || void 0 === CD || CD.show(DD)
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    class wD {
      constructor(DD) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(DD).then((DD => DD.ready)), bD(DD, (DD => {
          this.closed ? DD.close() : (this.opened = DD, null !== this.size && DD.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var DD, CD;
        return null !== (DD = null === (CD = this.opened) || void 0 === CD ? void 0 : CD.isReady()) && void 0 !== DD && DD
      }
      setCosmetic(DD, CD) {
        var cD;
        null === (cD = this.opened) || void 0 === cD || cD.setCosmetic(DD, CD)
      }
      playEmote(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.playEmote(DD)
      }
      setOrbit(DD) {
        var CD;
        null === (CD = this.opened) || void 0 === CD || CD.setOrbit(DD)
      }
      resetCamera() {
        var DD;
        null === (DD = this.opened) || void 0 === DD || DD.resetCamera()
      }
      async untilDrawn(DD) {
        var CD;
        await this.ready, await (null === (CD = this.opened) || void 0 === CD ? void 0 : CD.untilDrawn(DD))
      }
      resize(DD, CD) {
        var cD;
        this.size = {
          width: DD,
          height: CD
        }, null === (cD = this.opened) || void 0 === cD || cD.resize(DD, CD)
      }
      close() {
        var DD;
        this.closed = !0, null === (DD = this.opened) || void 0 === DD || DD.close(), this.opened = null
      }
    }
    const SD = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(DD) {
        this.host = DD
      }
      setDefaultHost(DD) {
        this.makeDefault = DD
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(DD) {
        return new QD(this.current().openMob(DD))
      }
      openPet(DD) {
        return new QD(this.current().openPet(DD))
      }
      openMobLineup(DD) {
        return new QD(this.current().openMobLineup(DD))
      }
      openCharacter(DD, CD) {
        return new wD(this.current().openCharacter(DD, CD))
      }
    }
  },
  38560: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => BD,
      d: () => yD
    });
    var ID = cD(162),
      pD = cD(185),
      iD = cD(1482),
      fD = cD(3032),
      bD = cD(1497),
      QD = cD(35883),
      wD = cD(659),
      SD = cD(38527);

    function BD(DD) {
      (0, fD.h)("matchmake_failed", DD, ID.o[ID.o.SHADER_PACK])
    }
    async function yD(DD, CD) {
      var cD;
      const ID = null === (cD = await SD.shaderPackPage.preload()) || void 0 === cD ? void 0 : cD.listing,
        fD = (0, QD.b)();
      ID && null !== fD && await bD.c.reportShaderPackSession(DD, {
        packId: ID.packId,
        sourceHash: ID.sourceHash,
        game: (0, iD.g)(CD, pD.x, "other"),
        playSessionId: fD,
        visitSessionId: (0, wD.b)()
      })
    }
  },
  38396: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(20),
      pD = cD(1284),
      iD = cD(3275);
    const fD = "Reconnecting";
    class bD {
      constructor(DD) {
        this.hooks = DD, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = DD => {
          DD.persisted || this.leave()
        }, this.controller = new iD.b((CD => DD.reconnect(CD)), {
          isSessionLive: () => !this.ended && DD.isLive(),
          onPhaseChanged: DD => {
            this.onPhaseChanged(DD)
          },
          onReconnected: CD => {
            DD.onReconnected(CD)
          },
          onGaveUp: CD => {
            !this.ended && DD.isLive() && DD.onGaveUp(this.sessionBased, CD)
          }
        })
      }
      onInitialInfo(DD, CD) {
        this.graceMs = DD, this.sessionBased = CD
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(DD) {
        this.ended || this.controller.onConnectionLost(DD, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const DD = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          CD = this.controller.heldToken;
        this.end(), DD && "" !== CD && this.hooks.releaseSeat(CD)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(DD) {
        const CD = "frozen" === DD || "resuming" === DD;
        CD !== this.stopped && (this.stopped = CD, this.hooks.freeze(CD));
        const cD = "frozen" === DD || "resuming" === DD && this.frozen;
        cD && !this.frozen ? (0, pD.p)(fD) : !cD && this.frozen && (0, pD.l)(fD), this.frozen = cD, this.setListening("connected" !== DD), ID.i.Uo(iD.k, cD ? "frozen" : DD)
      }
      setListening(DD) {
        DD !== this.listening && (this.listening = DD, DD ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38404: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = DD, this.now = CD, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const DD = this.now(),
            CD = DD - this.lastCheckAt <= 2e3;
          this.lastCheckAt = DD;
          const cD = "visible" === document.visibilityState;
          !cD || CD && this.wasVisible || (this.resumedAt = DD), this.wasVisible = cD, cD && DD - this.lastHeardAt > 12e3 && DD - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = CD(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8983: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(1077);

    function pD() {
      var DD, CD;
      return null !== (DD = null === (CD = screen.orientation) || void 0 === CD ? void 0 : CD.type) && void 0 !== DD ? DD : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const iD = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && pD() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = pD(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, ID.WZ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const DD of this.resizers) DD()
          }
        }), 1e3)
      }
      heldSizer(DD) {
        let CD = !1;
        return () => {
          if (CD && this.isHeld()) return null;
          const cD = DD();
          return CD ||= null !== cD, cD
        }
      }
      onRelease(DD) {
        return this.resizers.add(DD), () => {
          this.resizers.delete(DD)
        }
      }
    }
  },
  38543: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD
    });
    let ID = !1;
    async function pD(DD, CD) {
      if (!ID) {
        ID = !0;
        try {
          const [{
            reloadBloxd: ID
          }, {
            NotificationProvider: pD
          }] = await Promise.all([Promise.resolve().then((() => cD(1701))), Promise.resolve().then((() => cD(1340)))]);
          if (!DD || !0 === await pD.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void ID(CD)
        } catch (pD) {
          console.error("Leaving the replay failed", pD)
        }
        ID = !1
      }
    }
  },
  38418: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => wD,
      f: () => SD
    });
    var ID = cD(1685),
      pD = cD(194),
      iD = cD(1664),
      fD = cD(1759),
      bD = cD(1199),
      QD = cD(1127);
    async function wD(DD, CD) {
      return function(DD) {
        return "object" === typeof DD && null !== DD && DD.code === pD.e.VpnIp.code
      }(CD) && function(DD) {
        return iD.b.supports("appCheck") && DD.isLoggedIn() && !DD.hasTriedAppAttestation()
      }(DD) && await async function(DD) {
        try {
          const {
            token: CD
          } = await (0, fD.d)(), {
            "3PSIDMCPP": cD
          } = await (0, QD.postJsonWithMetricsCookiesAndJsonResponse)(`${bD.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: CD
          }, {
            retries: 0
          }, DD.getMetricsCookies());
          return DD.setAppAttestedAuthJwt(cD), !0
        } catch (CD) {
          return CD instanceof ID.c && "failed" === CD.code ? (console.warn("The app couldn't get an App Check token:", CD), DD.markAppAttestationTried()) : console.error("Failed to attest the app:", CD), !1
        }
      }(DD)
    }
    async function SD(DD, CD) {
      try {
        return await CD()
      } catch (cD) {
        if (!await wD(DD, cD)) throw cD
      }
      return CD()
    }
  },
  40122: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD
    });
    var ID = cD(1728);
    const pD = 33177600,
      iD = 3e4;
    let fD = !1;

    function bD(DD, CD, cD) {
      if (!DD.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (fD) return Promise.reject(new Error("A screenshot is already being taken"));
      fD = !0;
      const ID = function(DD, CD, cD) {
        const ID = Math.max(1, DD),
          iD = Math.max(1, CD),
          fD = Math.min(1, cD / Math.max(ID, iD), Math.sqrt(pD / (ID * iD)));
        return {
          width: Math.max(1, Math.floor(ID * fD)),
          height: Math.max(1, Math.floor(iD * fD))
        }
      }(CD, cD, DD.maxTextureSize);
      return DD.resize(ID.width, ID.height), new Promise(((CD, cD) => {
        let ID, pD = 2,
          bD = null;
        const QD = () => {
          var CD;
          fD = !1, null === (CD = bD) || void 0 === CD || CD(), clearTimeout(ID), DD.restoreSize()
        };
        ID = setTimeout((() => {
          QD(), cD(new Error("No frame was drawn to capture"))
        }), iD), bD = DD.onFrameDrawn((() => {
          if (pD--, pD > 0) return;
          const {
            canvas: ID
          } = DD, iD = {
            width: ID.width,
            height: ID.height
          };
          try {
            ID.toBlob((DD => {
              DD ? CD({
                blob: DD,
                ...iD
              }) : cD(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (fD) {
            cD(fD)
          } finally {
            QD()
          }
        }))
      }))
    }
    async function QD(DD, CD, cD) {
      try {
        const pD = await bD(DD, CD, cD);
        (0, ID.c)(pD.blob, `bloxd-screenshot-${pD.width}x${pD.height}-${Date.now()}.png`)
      } catch (pD) {
        console.error("Error taking screenshot:", pD)
      }
    }
  },
  38409: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD,
      c: () => SD
    });
    var ID = cD(194),
      pD = cD(1793),
      iD = cD(1796),
      fD = cD(8598);
    const bD = [250, 500, 1e3, 2e3, 1250],
      QD = 406;

    function wD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const {
        code: CD,
        message: cD
      } = DD, pD = ID.e.duplicateLobbyNameError;
      return (CD === pD.code || CD === QD) && (cD === pD.text || cD === pD.text + ID.o)
    }
    async function SD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pD.d;
      for (let pD = 0;; pD++) {
        let fD;
        (0, iD.r)(CD);
        try {
          return await DD()
        } catch (ID) {
          if (fD = bD[pD], void 0 === fD || !wD(ID)) throw ID
        }
        await cD(fD, CD)
      }
    }
    const BD = new Set([ID.e.duplicateLobbyNameError.code, ID.e.lobbyCantBeCreated.code, ID.e.roomDisposedEarlyError.code, ID.e.roomDisposedLateError.code, ID.e.serverRoomLimitReached.code]);

    function yD(DD) {
      if (wD(DD)) return !0;
      const CD = (0, fD.e)(DD);
      return "number" === typeof CD && BD.has(CD)
    }
  },
  8598: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => fD,
      h: () => bD,
      j: () => wD,
      m: () => QD
    });
    var ID = cD(194),
      pD = cD(4431);

    function iD(DD) {
      return fD(DD) === ID.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function fD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function bD(DD) {
      var CD;
      return null !== (CD = Object.keys(pD.e).find((CD => pD.e[CD] === DD))) && void 0 !== CD ? CD : null
    }

    function QD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const wD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38485: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(312),
      pD = cD(120),
      iD = cD(36);

    function fD() {
      iD.h.setItem(ID.Hb, iD.h.getItem(ID.Hb) + 1), (0, pD.i)() && iD.h.setItem(ID.Db, iD.h.getItem(ID.Db) + 1)
    }
  },
  35879: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ND,
      h: () => gD
    });
    var ID = cD(1011),
      pD = cD(630),
      iD = cD(326),
      fD = cD(1020),
      bD = cD(646),
      QD = cD(684),
      wD = cD(4321),
      SD = cD(90),
      BD = cD(120),
      yD = cD(1701),
      MD = cD(107),
      tD = cD(35883),
      ZD = cD(36),
      oD = cD(659),
      vD = cD(35888);

    function ND() {
      var DD, CD;
      return [...null !== (DD = navigator.languages) && void 0 !== DD ? DD : [null !== (CD = navigator.language) && void 0 !== CD ? CD : "none"], "en-Gb"]
    }

    function gD(DD, CD, cD, gD, XD) {
      const mD = (0, ID.m)(CD) ? (0, ID.t)(CD) : null,
        nD = {
          cookies: (0, yD.getAllCookiesForGameNameWithVariation)(CD),
          isMobile: (0, SD.isMobile)(),
          isUsingCustomGameTexturePack: null !== mD && XD(mD),
          generalCookies: {
            joinDiscord: !!ZD.h.getItem("DiscordPressed"),
            newGo: wD.e,
            ...DD.getMetricsCookies(),
            trafficCode: gD,
            compliance: SD.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, SD.getBrowserName)(),
            version: (0, SD.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, SD.getPlatformType)(),
            deviceType: (0, MD.d)()
          },
          isLoggedIn: DD.isLoggedIn(),
          lobbyName: cD,
          languages: ND(),
          version: pD.c,
          siteUsed: BD.p,
          subsiteUsed: BD.v,
          playSessionId: (0, tD.g)(CD),
          visitSessionId: (0, oD.b)(),
          clientReason: bD.g.reason,
          budgetBasis: (0, vD.f)(),
          ...null !== QD.q && {
            diagClaim: QD.q.claimId
          }
        };
      return null !== mD && (0, iD.Fc)(mD) ? (nD.lobbyName = (0, ID.j)(mD, (0, ID.q)(CD), cD), {
        roomName: `classic_${fD.g}`,
        joinOptions: nD
      }) : {
        roomName: CD,
        joinOptions: nD
      }
    }
  },
  39743: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(38931);

    function pD(DD) {
      return {
        current: () => DD,
        watch: () => () => {}
      }
    }

    function iD() {}
    const fD = Object.freeze([0, 0, 0]),
      bD = {
        states: {
          health: pD({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pD({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pD({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pD({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pD({}),
          creativeVisibility: pD({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pD(null),
          heldItemAim: pD({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pD(!1),
          gliderBoostFuel: pD(0),
          flight: pD({
            canFly: !1,
            flying: !1
          }),
          crafting: pD({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pD({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pD({}),
          fullInventory: pD(!1),
          crosshairTarget: pD({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pD(!0),
          freeCamera: pD({
            allowed: !1,
            movesFly: !1
          }),
          replay: pD(null),
          replayEdits: pD(null),
          replayRecorder: pD({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: pD(!1)
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
          selectHotbarSlot: iD,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: iD,
          setInventoryOpen: iD,
          changeIronChestPasskey: iD,
          dragReplayCamera: iD,
          applyTemporaryThirdPerson: iD,
          holdEmoteWheel: iD,
          recordFlyingMiddleText: iD,
          focusCrafting: iD,
          craftRecipe: () => ({
            qS: 0,
            iB: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: iD,
          setShopOpen: iD,
          buyShopItem: iD,
          sendChatMessage: iD,
          ignorePlayer: iD,
          reportPlayer: iD,
          reportWorldCodeChat: iD,
          requestDiscordReportKey: iD,
          reportLobbyOrGame: iD,
          playEmote: iD,
          updateMyCosmetic: iD,
          writeOnBoard: iD,
          writeBook: iD,
          writeNameTag: iD,
          setCustomLobbyBlock: iD,
          openIronChest: iD,
          sendCodeCollab: iD,
          clickCodeBlock: iD,
          bindCustomButtonKeys: iD,
          pressCustomButton: iD,
          moveReplayFreecam: iD,
          holdReplayFreecamVertical: iD,
          respawn: iD,
          wakeUp: iD,
          requestLeaderboard: iD,
          completeTask: iD,
          setServerCookie: iD,
          answerUiRequest: iD,
          chooseRewardedAd: iD,
          setCameraZoom: iD,
          setFreeCameraMovesFly: iD,
          setBlockHighlight: iD,
          setCrosshairInteractPrompt: iD,
          setLookSensitivity: iD,
          replayAction: iD,
          setReplayPlaying: iD,
          seekReplay: iD,
          setReplayCameraMode: iD,
          syncReplayCameraMode: iD,
          setReplayCameraKeyframe: iD,
          moveReplayCameraKeyframe: iD,
          deleteReplayCameraKeyframes: iD,
          setReplayPlaybackMark: iD,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: iD,
          exportReplayVideo: iD,
          toggleRecording: iD,
          saveClip: iD,
          setRecorderPrefs: iD,
          setReplayViewerOpen: iD
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => ID.e,
          worldCodeAiGameState: () => ID.i
        },
        lookups: {
          localPos: () => fD,
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
  35888: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => nD,
      f: () => mD,
      i: () => XD
    });
    var ID = cD(194),
      pD = cD(90),
      iD = cD(2735),
      fD = cD(4197),
      bD = cD(651),
      QD = cD(35895);
    const wD = 1048576,
      SD = 1024 * wD,
      BD = 400 * wD,
      yD = 147456,
      MD = .5,
      tD = 1.5 * SD,
      ZD = 768 * wD;

    function oD(DD) {
      return BD + DD * yD
    }

    function vD(DD, CD, cD) {
      var pD, fD;
      let {
        footprintBytes: bD,
        basis: wD,
        namesLimit: vD
      } = function(DD) {
        const {
          os: CD,
          deviceMemory: cD
        } = DD;
        if ("ios" === CD) switch ((0, iD.h)(DD)) {
          case "ipad_m":
            return {
              footprintBytes: oD(QD.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: ZD, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: tD, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: ZD, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof cD && Number.isFinite(cD) && cD > 0 ? {
          footprintBytes: cD * SD * MD,
          basis: `memory-${cD}`,
          namesLimit: !0
        } : "android" === CD ? {
          footprintBytes: ZD,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: oD(QD.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(DD);
      if (cD) {
        const DD = Math.min(bD, oD(QD.e));
        bD = BD + Math.max(0, DD - BD) / 2, wD += "+killed", vD = !0
      }
      null !== CD && oD(CD) < bD && (bD = oD(CD), wD += "+learned", vD = !0);
      const ND = function(DD) {
          const CD = Math.floor((DD - BD) / yD);
          return Math.min(QD.e, Math.max(QD.g, CD))
        }(bD),
        gD = (0, QD.p)(ND);
      return {
        footprintBytes: bD,
        shedFootprintBytes: vD ? Math.max(bD, oD(ND)) : null,
        chunkCap: ND,
        maxHorizDistance: null !== (pD = null === gD || void 0 === gD ? void 0 : gD.horizontal) && void 0 !== pD ? pD : ID.h.maxChunkHorizAddDistance,
        maxVertDistance: null !== (fD = null === gD || void 0 === gD ? void 0 : gD.vertical) && void 0 !== fD ? fD : ID.h.maxChunkVertAddDistance,
        basis: wD
      }
    }
    let ND = null;

    function gD() {
      return vD({
        os: (0, pD.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, iD.i)()
      }, (0, fD.e)(), (0, bD.J)("wasm").length > 0)
    }

    function XD() {
      return ND ??= gD(), ND
    }

    function mD() {
      var DD;
      return (null !== (DD = ND) && void 0 !== DD ? DD : gD()).basis
    }

    function nD(DD, CD) {
      return DD.setChunkCap(CD.chunkCap)
    }
  },
  40119: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      h: () => iD
    });
    var ID = cD(2952),
      pD = cD(1011);

    function iD(DD, CD) {
      return null !== DD.gameSource && (0, ID.o)(CD, DD.gameSource)
    }

    function fD(DD, CD) {
      if (null === DD.gameSource || "" === DD.gameSource || null === CD) return !0;
      const cD = (0, pD.m)(CD) ? (0, pD.t)(CD) : null;
      return null !== cD && iD(DD, cD)
    }
  },
  40104: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      e: () => ZD,
      f: () => wD,
      j: () => SD,
      k: () => tD
    });
    var ID = cD(40065),
      pD = cD(40112);
    const iD = 396,
      fD = 1,
      bD = 2,
      QD = 3,
      wD = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      SD = {
        File: 0,
        Item: 1
      },
      BD = 0,
      yD = 1,
      MD = 2;

    function tD(DD) {
      const CD = (0, ID.o)();
      CD.catch((() => {}));
      let pD = null;
      return {
        glbUrl: DD,
        lifeformAtlasUrl: async DD => (await CD).lifeformAtlasUrl(DD),
        armourAtlasUrl: async () => (await cD.e(201).then((() => cD(33733)))).armourAtlasUrl,
        capeUrl: async DD => (await CD).capeUrl(DD),
        attachmentImageUrl: async DD => (await CD).attachmentImageUrl(DD),
        blockImageUrl: async DD => (await CD).blockImageUrl(DD),
        groupAtlasUrl: async DD => (await CD).groupAtlasUrl(DD),
        particleTextureUrl: async DD => (await CD).particleTextureUrl(DD),
        particleItemUrl: async DD => (pD ??= cD.e(38).then((() => cD(50974))).catch((DD => {
          throw pD = null, DD
        })), (await pD).particleItemUrl(DD))
      }
    }
    class ZD {
      constructor(DD, CD) {
        var cD, iD, fD;
        let bD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = DD, this.onFailure = CD, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.Lt = !1, this.load = null !== (cD = bD.load) && void 0 !== cD ? cD : (DD, CD) => (0, pD.l)(DD, bD.fetchImage, CD), this.release = null !== (iD = bD.release) && void 0 !== iD ? iD : pD.q, this.fetchFile = null !== (fD = bD.fetchFile) && void 0 !== fD ? fD : DD => (0, ID.i)(DD)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(DD, CD) {
        this.glbWrittenImages.set(DD, nD(CD))
      }
      glbTaken(DD, CD) {
        const cD = this.glbWrittenImages.get(DD);
        this.glbWrittenImages.delete(DD), CD && this.setGlbImages(DD, void 0 !== cD && cD.length > 0 ? cD : void 0)
      }
      setGlbImages(DD, CD) {
        var cD;
        this.glbTakenCount.set(DD, (null !== (cD = this.glbTakenCount.get(DD)) && void 0 !== cD ? cD : 0) + 1), void 0 === CD ? this.glbImages.delete(DD) : this.glbImages.set(DD, CD);
        const ID = [];
        for (const {
            key: pD
          }
          of this.loading.values()) pD.kind === wD.Glb && pD.word === DD && ID.push(pD);
        for (let pD = this.ready.length - 1; pD >= 0; pD--) {
          const {
            key: CD,
            id: cD
          } = this.ready[pD];
          CD.kind === wD.Glb && CD.word === DD && (this.ready.splice(pD, 1), null !== cD && (this.answered.delete(cD), this.release(cD)), ID.push(CD))
        }
        this.loadAgain(ID)
      }
      onEvent(DD) {
        if (this.Lt) return;
        const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
        for (let cD = 0; cD + 8 <= DD.byteLength; cD += 8) {
          const DD = CD.getUint8(cD),
            ID = CD.getUint32(cD + 4, !0);
          if (DD === QD) {
            this.answered.delete(ID), this.release(ID);
            continue
          }
          const pD = {
            kind: CD.getUint8(cD + 1),
            index: CD.getUint8(cD + 2),
            word: ID
          };
          DD === fD ? this.want(pD) : DD === bD && this.loading.delete(oD(pD))
        }
      }
      reload(DD, CD) {
        const cD = cD => DD.includes(cD.kind) && (void 0 === CD || CD(cD)),
          ID = new Map;
        for (const pD of this.answered.values()) cD(pD) && ID.set(oD(pD), pD);
        for (const [pD, {
            key: iD
          }] of this.loading) cD(iD) && ID.set(pD, iD);
        this.loadAgain(ID.values())
      }
      loadAgain(DD) {
        for (const CD of DD) this.loading.delete(oD(CD)), this.want(CD)
      }
      drain(DD) {
        if (null !== DD)
          for (; this.ready.length > 0;) {
            if (!DD(iD, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Lt = !0, this.loading.clear(), this.ready.length = 0;
        for (const DD of this.answered.keys()) this.release(DD);
        this.answered.clear()
      }
      want(DD) {
        const CD = oD(DD);
        if (this.loading.has(CD)) return;
        const cD = {
          key: DD
        };
        this.loading.set(CD, cD), this.loadKey(DD).then((ID => {
          this.Lt || this.loading.get(CD) !== cD ? this.release(ID.id) : (this.loading.delete(CD), this.answered.set(ID.id, DD), this.ready.push({
            record: ND(DD, BD, ID),
            key: DD,
            id: ID.id
          }))
        }), (ID => {
          if (this.Lt || this.loading.get(CD) !== cD) return;
          this.loading.delete(CD), this.onFailure({
            key: DD,
            error: ID
          });
          const iD = ID instanceof pD.b && "decode" === ID.stage ? yD : MD;
          this.ready.push({
            record: ND(DD, iD, null),
            key: DD,
            id: null
          })
        }))
      }
      async loadKey(DD) {
        switch (DD.kind) {
          case wD.Glb:
            return this.load(await this.glbImage(DD), "none");
          case wD.LifeformAtlas:
            return this.load(vD(await this.sources.lifeformAtlasUrl(DD.word), DD), "none");
          case wD.ArmourAtlas:
            return this.load(vD(await this.sources.armourAtlasUrl(), DD), "none");
          case wD.Cape:
            return this.load(vD(await this.sources.capeUrl(DD.word), DD), "none");
          case wD.AttachmentImage:
            return this.load(vD(await this.sources.attachmentImageUrl(DD.word), DD), "none");
          case wD.GroupAtlas:
            return this.load(vD(await this.sources.groupAtlasUrl(DD.word), DD), "none");
          case wD.BlockImage:
            return this.load(vD(await this.sources.blockImageUrl(DD.word), DD), "none");
          case wD.Particle: {
            const CD = await (DD.index === SD.Item ? this.sources.particleItemUrl(DD.word) : this.sources.particleTextureUrl(DD.word));
            return this.load(vD(CD, DD), "flipY")
          }
          default:
            throw new pD.b("fetch", `image kind ${DD.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(DD) {
        var CD;
        let cD = this.glbImages.get(DD.word);
        if (void 0 === cD) {
          const CD = this.glbTakenCount.get(DD.word),
            ID = vD(await this.sources.glbUrl(DD.word), DD);
          try {
            cD = nD(await this.fetchFile(ID))
          } catch (iD) {
            throw new pD.b("fetch", ID, {
              cause: iD
            })
          }
          this.glbTakenCount.get(DD.word) === CD && this.glbImages.set(DD.word, cD)
        }
        const ID = null === (CD = cD) || void 0 === CD ? void 0 : CD[DD.index];
        if (!ID) throw new pD.b("decode", `image ${DD.index} of file ${2147483647&DD.word}`, {
          cause: null
        });
        return ID
      }
    }

    function oD(DD) {
      let {
        kind: CD,
        index: cD,
        word: ID
      } = DD;
      return `${CD}:${cD}:${ID}`
    }

    function vD(DD, CD) {
      if (null === DD) throw new pD.b("fetch", `no URL for image ${oD(CD)}`, {
        cause: null
      });
      return DD
    }

    function ND(DD, CD, cD) {
      var ID, pD, iD;
      const fD = new Uint8Array(16),
        bD = new DataView(fD.buffer);
      return bD.setUint8(0, DD.kind), bD.setUint8(1, DD.index), bD.setUint8(2, CD), bD.setUint32(4, DD.word, !0), bD.setUint32(8, null !== (ID = null === cD || void 0 === cD ? void 0 : cD.id) && void 0 !== ID ? ID : 0, !0), bD.setUint16(12, Math.min(null !== (pD = null === cD || void 0 === cD ? void 0 : cD.width) && void 0 !== pD ? pD : 0, 65535), !0), bD.setUint16(14, Math.min(null !== (iD = null === cD || void 0 === cD ? void 0 : cD.height) && void 0 !== iD ? iD : 0, 65535), !0), fD
    }
    const gD = 1179937895,
      XD = 1313821514,
      mD = 5130562;

    function nD(DD) {
      var CD;
      const cD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      if (DD.byteLength < 20 || cD.getUint32(0, !0) !== gD || cD.getUint32(16, !0) !== XD) return [];
      let ID, pD = 20 + cD.getUint32(12, !0);
      try {
        ID = JSON.parse((new TextDecoder).decode(DD.subarray(20, pD)))
      } catch {
        return []
      }
      for (; pD + 8 <= DD.byteLength && cD.getUint32(pD + 4, !0) !== mD;) pD += 8 + cD.getUint32(pD, !0);
      const iD = null !== (CD = ID.images) && void 0 !== CD ? CD : [];
      if (0 === iD.length || pD + 8 > DD.byteLength) return iD.map((() => null));
      const fD = DD.subarray(pD + 8, Math.min(DD.byteLength, pD + 8 + cD.getUint32(pD, !0)));
      return iD.map((DD => {
        var CD, cD, pD;
        const iD = void 0 === DD.bufferView || null === (CD = ID.bufferViews) || void 0 === CD ? void 0 : CD[DD.bufferView];
        if (!iD || 0 !== (null !== (cD = iD.buffer) && void 0 !== cD ? cD : 0) || void 0 === iD.byteLength) return null;
        const bD = null !== (pD = iD.byteOffset) && void 0 !== pD ? pD : 0,
          QD = bD + iD.byteLength;
        return QD <= fD.byteLength ? fD.slice(bD, QD) : null
      }))
    }
  },
  39752: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => iD,
      g: () => pD
    });
    let ID = null;

    function pD(DD) {
      ID = DD
    }

    function iD(DD) {
      ID === DD && (ID = null)
    }

    function fD() {
      var DD;
      null === (DD = ID) || void 0 === DD || DD()
    }
  },
  35991: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      e: () => yD,
      h: () => vD,
      l: () => wD
    });
    var ID = cD(16),
      pD = cD(2338),
      iD = cD(2343),
      fD = cD(2347),
      bD = cD(2398),
      QD = cD(20);

    function wD(DD, CD) {
      return (!(0, fD.c)() || 0 === DD && 0 === CD) && (0, iD.u)(pD.k.Joystick, 0, DD, CD, 0)
    }
    const SD = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function BD(DD) {
      return DD.classList.contains("TouchKeyHit") && MD() ? null : DD.firstElementChild
    }

    function yD(DD) {
      return DD.classList.contains("TouchKeyHit") && !DD.classList.contains("CanvasZone") ? {
        whole: !MD(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: tD(BD(DD))
      }
    }

    function MD() {
      return document.documentElement.classList.contains(bD.o)
    }

    function tD(DD) {
      return !(DD instanceof HTMLElement) || DD.offsetWidth <= 0 || DD.offsetHeight <= 0 ? null : {
        width: DD.offsetWidth,
        height: DD.offsetHeight
      }
    }

    function ZD(DD, CD) {
      const cD = DD => Math.min(65535, Math.round(4 * DD));
      return (cD(DD) | cD(CD) << 16) >>> 0
    }

    function oD(DD) {
      return {
        x: DD.left + DD.width / 2,
        y: DD.top + DD.height / 2,
        radius: Math.min(DD.width, DD.height) / 2
      }
    }
    const vD = new class {
      constructor(DD) {
        this.write = DD, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        CD ? this.elements.set(DD, {
          element: CD,
          hidden: cD
        }) : this.elements.delete(DD), this.measureOne(DD)
      }
      measure() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = DD.left, this.canvasTop = DD.top;
        for (const CD of this.elements.keys()) this.measureOne(CD)
      }
      hitZone(DD, CD) {
        let cD = null,
          ID = 1;
        for (const pD of this.elements.keys()) {
          const iD = this.shown(pD);
          if (!iD) continue;
          const {
            rect: fD,
            element: bD
          } = iD, QD = oD(fD), wD = Math.max(0, fD.width / 2 - QD.radius), SD = Math.max(0, fD.height / 2 - QD.radius), yD = Math.max(0, Math.abs(DD - QD.x) - wD), MD = Math.max(0, Math.abs(CD - QD.y) - SD), ZD = bD.firstElementChild;
          let vD = Math.hypot(yD, MD) / QD.radius;
          const ND = tD(BD(bD));
          ND && (vD = Math.min(vD, Math.max(2 * Math.abs(DD - QD.x) / ND.width, 2 * Math.abs(CD - QD.y) / ND.height))), vD < ID && (cD = {
            code: pD,
            element: bD,
            key: ZD,
            ...QD
          }, ID = vD)
        }
        return cD
      }
      measureOne(DD) {
        const CD = this.shown(DD);
        if (!CD) return void this.write(pD.k.TouchZone, DD, 0, 0, 0);
        const {
          rect: cD,
          element: ID
        } = CD, iD = oD(cD);
        this.write(pD.k.TouchZone, DD, iD.x - this.canvasLeft, iD.y - this.canvasTop, ZD(cD.width, cD.height));
        const fD = tD(BD(ID));
        this.write(pD.k.TouchZone, 256 | DD, 0, 0, fD ? ZD(fD.width, fD.height) : 0)
      }
      shown(DD) {
        const CD = this.elements.get(DD),
          cD = ID.d.get("worldPanelHud");
        if (!CD || CD.hidden || "none" === cD) return null;
        const pD = CD.element.getBoundingClientRect();
        return pD.width <= 0 || pD.height <= 0 ? null : {
          rect: pD,
          element: CD.element
        }
      }
    }(iD.u);
    (0, QD.k)(bD.g, (() => {
      vD.measure()
    }))
  },
  39968: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => QD,
      h: () => wD
    });
    var ID = cD(39971),
      pD = cD(38418),
      iD = cD(35879),
      fD = cD(39890),
      bD = cD(39951);
    const QD = ID.b.timeForPlayerToConnect - 1e4;
    async function wD(DD, CD, cD, ID) {
      let QD;
      try {
        QD = await DD.getTrafficCode()
      } catch (tD) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", tD), new bD.x(tD)
      }
      const {
        gameNameWithVariation: wD,
        lobbyName: SD
      } = CD, BD = () => {
        const CD = (0, iD.h)(DD, wD, SD, QD, (DD => {
          var CD;
          return null !== (CD = null === cD || void 0 === cD ? void 0 : cD.isUsingCustomGameTexturePack(DD)) && void 0 !== CD && CD
        }));
        CD.joinOptions.wasmClient = !0;
        const pD = (0, fD.G)();
        return null !== pD && (CD.joinOptions.renderBackend = pD), CD.joinOptions.joinAdHold = ID, CD
      }, {
        roomName: yD,
        joinOptions: MD
      } = BD();
      return {
        endpoint: CD.endpoint,
        roomName: yD,
        joinOptions: MD,
        session: {
          gameNameWithVariation: wD,
          lobbyName: SD,
          playerDbId: DD.whamm
        },
        optionsAfterRefusal: async CD => await (0, pD.b)(DD, CD) ? BD().joinOptions : null
      }
    }
  },
  4811: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      e: () => fD
    });
    var ID = cD(2952),
      pD = cD(4819);
    let iD = null;

    function fD(DD, CD) {
      iD = {
        pack: DD.metaData.id === ID.e ? null : DD,
        prompt: CD
      }
    }

    function bD(DD, CD) {
      const cD = iD;
      null !== cD && (0, pD.c)(cD.pack, DD) && (iD = null, CD && cD.prompt())
    }
  },
  40114: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      d: () => iD,
      h: () => BD,
      l: () => fD
    });
    var ID = cD(40104),
      pD = cD(40065);
    const iD = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(DD) {
        this.change((() => {
          this.page = DD
        }))
      }
      setSessionFiles(DD) {
        const CD = void 0 !== this.session && void 0 === DD;
        if (this.change((() => {
            this.session = DD
          })), CD)
          for (const cD of [...this.pageListeners]) cD()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(DD) {
        return this.pageListeners.add(DD), () => {
          this.pageListeners.delete(DD)
        }
      }
      setFollower(DD) {
        this.follower = DD, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const DD of [...this.wantedListeners]) DD();
        this.startFollower()
      }
      onWanted(DD) {
        return this.wantedListeners.add(DD), () => {
          this.wantedListeners.delete(DD)
        }
      }
      onChange(DD) {
        return this.listeners.add(DD), () => {
          this.listeners.delete(DD)
        }
      }
      startFollower() {
        const DD = this.follower;
        this.isWanted && null !== DD && (this.follower = null, DD((() => {
          this.follower = DD
        })))
      }
      change(DD) {
        const CD = this.current;
        if (DD(), this.current !== CD)
          for (const cD of this.listeners) cD()
      }
    };

    function fD(DD, CD) {
      return {
        ...DD,
        armourAtlasUrl: () => {
          var cD, ID;
          return null !== (cD = null === (ID = CD()) || void 0 === ID ? void 0 : ID.armourAtlasUrl()) && void 0 !== cD ? cD : DD.armourAtlasUrl()
        },
        lifeformAtlasUrl: cD => QD(CD(), (DD => DD.LIFEFORM_ATLAS_PATHS[cD]), (() => DD.lifeformAtlasUrl(cD))),
        groupAtlasUrl: cD => QD(CD(), (DD => DD.GROUP_ATLAS_PATHS[cD]), (() => DD.groupAtlasUrl(cD))),
        particleItemUrl: ID => wD(CD(), (async () => {
          const DD = await cD.e(38).then((() => cD(50974))).catch((() => null));
          return (null === DD || void 0 === DD ? void 0 : DD.particleItemSprite(ID)) || null
        }), (() => DD.particleItemUrl(ID))),
        blockImageUrl: cD => wD(CD(), (async () => {
          var DD, CD;
          return null !== (DD = null === (CD = await bD()) || void 0 === CD ? void 0 : CD.blockImageName(cD)) && void 0 !== DD ? DD : null
        }), (() => DD.blockImageUrl(cD)))
      }
    }

    function bD() {
      return (0, pD.o)().catch((() => null))
    }

    function QD(DD, CD, cD) {
      return wD(DD, (async () => {
        var DD;
        const cD = await bD(),
          ID = null === cD ? null : CD(cD),
          pD = null !== (DD = null === ID || void 0 === ID ? void 0 : ID.slice(ID.lastIndexOf("/") + 1)) && void 0 !== DD ? DD : null;
        return "Player_Atlas" === pD ? null : pD
      }), cD)
    }
    async function wD(DD, CD, cD) {
      if (null !== DD) {
        const cD = await CD(),
          ID = null === cD ? null : DD.textureUrl(cD);
        if (null !== ID) return ID
      }
      return cD()
    }
    const SD = 0;

    function BD(DD) {
      const CD = [ID.f.ArmourAtlas, ID.f.LifeformAtlas, ID.f.GroupAtlas, ID.f.BlockImage, ID.f.Particle];
      DD.reload(CD, (DD => {
        switch (DD.kind) {
          case ID.f.Particle:
            return DD.index === ID.j.Item;
          case ID.f.LifeformAtlas:
            return DD.word !== SD;
          default:
            return !0
        }
      }))
    }
  },
  39980: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      e: () => bD,
      h: () => fD,
      j: () => pD,
      k: () => iD
    });
    const ID = 1e3;

    function pD() {
      QD((() => {
        window.location.reload()
      }))
    }

    function iD() {
      return new Promise((() => {}))
    }

    function fD(DD) {
      QD((() => {
        window.location.replace(DD(window.location.href))
      }))
    }

    function bD(DD) {
      Promise.resolve().then((() => cD(101))).then((CD => {
        let {
          currentUrl: cD
        } = CD;
        fD((() => cD.mergeSearchParamsInto(DD)))
      }), (() => {
        fD((() => DD))
      }))
    }

    function QD(DD) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => cD(1701))).then((CD => {
        let {
          prepareForUnloadWithoutConfirmation: cD
        } = CD;
        try {
          cD()
        } catch (ID) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", ID), window.onbeforeunload = null
        }
        DD()
      }), (() => {
        window.onbeforeunload = null, DD()
      })) : DD()
    }
  },
  4819: (DD, CD, cD) => {
    function ID(DD, CD) {
      return pD(DD, CD)
    }

    function pD(DD, CD) {
      if (DD === CD) return !0;
      if ("object" !== typeof DD || "object" !== typeof CD || null === DD || null === CD || Array.isArray(DD) !== Array.isArray(CD)) return !1;
      const cD = DD,
        ID = CD,
        iD = Object.keys(cD);
      return iD.length === Object.keys(ID).length && iD.every((DD => Object.prototype.hasOwnProperty.call(ID, DD) && pD(cD[DD], ID[DD])))
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  40029: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => OD,
      g: () => mD,
      i: () => oD,
      k: () => ZD
    });
    var ID = cD(1793),
      pD = cD(1796),
      iD = cD(38409),
      fD = cD(38423),
      bD = cD(1763),
      QD = cD(39942),
      wD = cD(39951);
    const SD = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      BD = 3,
      yD = [500, 1500];

    function MD(DD) {
      const CD = new URL(DD);
      return {
        secure: "https:" === CD.protocol || "wss:" === CD.protocol,
        host: CD.host,
        pathname: CD.pathname.replace(/\/+$/, ""),
        search: CD.searchParams.toString()
      }
    }

    function tD(DD, CD, cD) {
      const {
        secure: ID,
        host: pD,
        pathname: iD,
        search: fD
      } = MD(DD);
      return `${ID?"https":"http"}://${pD}${iD}/matchmake/${CD}/${encodeURIComponent(cD)}${fD?`?${fD}`:""}`
    }

    function ZD(DD, CD) {
      var cD;
      const ID = null !== (cD = CD.protocol) && void 0 !== cD ? cD : "ws";
      if ("ws" !== ID) throw new Error(`seat reservation asks for the ${ID} transport`);
      const {
        secure: pD,
        host: iD,
        pathname: fD,
        search: bD
      } = MD(DD), QD = new URLSearchParams(bD);
      QD.append("sessionId", CD.sessionId), CD.reconnectionToken && QD.append("reconnectionToken", CD.reconnectionToken);
      return `${pD?"wss":"ws"}://${CD.room.publicAddress||`${iD}${fD}`}/${CD.room.processId}/${CD.room.roomId}?${QD.toString()}`
    }
    async function oD(DD, CD, cD) {
      var QD;
      let SD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const MD = null !== (QD = SD.sleep) && void 0 !== QD ? QD : ID.d,
        ZD = new pD.d(SD.signal),
        oD = new bD.d(fD.d, (() => {
          (0, pD.j)(ZD.controller, new fD.g)
        })),
        {
          signal: XD
        } = ZD;
      try {
        return await (0, iD.c)((() => async function(DD, CD, cD, ID) {
          var iD;
          const {
            signal: fD,
            sleep: bD
          } = ID, QD = tD(DD, "joinOrCreate", CD), SD = JSON.stringify(cD);
          let MD = null;
          for (let tD = 0; tD < BD; tD++) {
            var ZD;
            if (tD > 0) await bD(null !== (ZD = yD[tD - 1]) && void 0 !== ZD ? ZD : 1500, fD);
            let DD;
            (0, pD.r)(fD);
            try {
              DD = await ND(QD, SD, ID)
            } catch (oD) {
              (0, pD.r)(fD), MD = vD(oD);
              continue
            }
            const {
              response: CD,
              answer: cD,
              refusal: iD,
              lost: BD
            } = DD;
            if (null === BD) {
              if (null !== iD) throw gD(iD, cD);
              if (CD.ok && null !== cD && PD(cD)) return cD;
              MD = new wD.u(`seat request answered HTTP ${CD.status}${null===cD?" without JSON":" without a seat"}`, !1)
            } else MD = vD(BD.error)
          }
          throw null !== (iD = MD) && void 0 !== iD ? iD : new wD.u("seat request made no attempt", !1)
        }(DD, CD, cD, {
          ...SD,
          signal: XD,
          sleep: MD
        })), XD, MD)
      } finally {
        oD.stop(), ZD.unfollow()
      }
    }

    function vD(DD) {
      return new wD.u(DD instanceof Error ? DD.message : String(DD), !0, DD)
    }
    async function ND(DD, CD, cD) {
      var ID;
      const {
        signal: iD
      } = cD, fD = null !== (ID = cD.fetch) && void 0 !== ID ? ID : fetch, bD = await fD(DD, {
        method: "POST",
        headers: {
          ...SD,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: CD,
        credentials: "include",
        signal: iD
      }), {
        answer: QD,
        lost: wD
      } = await async function(DD) {
        try {
          const CD = await DD.json();
          return {
            answer: "object" === typeof CD && null !== CD ? CD : null,
            lost: null
          }
        } catch (CD) {
          return {
            answer: null,
            lost: CD instanceof SyntaxError ? null : {
              error: CD
            }
          }
        }
      }(bD), BD = null !== QD && "string" === typeof QD.error ? QD.error : null;
      var yD;
      null !== BD && (null === (yD = cD.onRefusal) || void 0 === yD || yD.call(cD));
      return (0, pD.r)(iD), {
        response: bD,
        answer: QD,
        refusal: BD,
        lost: wD
      }
    }

    function gD(DD, CD) {
      return new wD.m(DD, "number" === typeof(null === CD || void 0 === CD ? void 0 : CD.code) ? CD.code : 0, (0, QD.k)(DD).text)
    }
    class XD extends Error {
      constructor(DD, CD) {
        super(DD), this.code = CD, this.name = "SeatHttpError"
      }
    }
    async function mD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: pD,
        answer: iD,
        refusal: fD,
        lost: bD
      } = await ND(tD(DD, "reconnect", CD), JSON.stringify({
        reconnectionToken: cD
      }), ID);
      if (null !== bD) throw bD.error;
      if (!pD.ok) {
        const DD = null !== iD && "number" === typeof iD.code && 0 !== iD.code ? iD.code : pD.status;
        throw new XD(`the seat's reconnect was refused: ${null!==fD&&void 0!==fD?fD:`HTTP ${pD.status}`}`, DD)
      }
      if (null !== fD) throw gD(fD, iD);
      if (null === iD || !PD(iD)) throw new Error("the seat's reconnect answered " + (null === iD ? "without JSON" : "without a seat"));
      return {
        ...iD,
        reconnectionToken: cD
      }
    }
    const nD = 10;

    function OD(DD) {
      if (DD.byteLength < 2 || DD[0] !== nD) return null;
      const CD = 2 + DD[1];
      return CD > DD.byteLength ? null : (new TextDecoder).decode(DD.subarray(2, CD))
    }

    function PD(DD) {
      const CD = DD.room;
      return "string" === typeof DD.sessionId && "object" === typeof CD && null !== CD && "string" === typeof CD.roomId && "string" === typeof CD.processId && "string" === typeof CD.name
    }
  },
  39701: (DD, CD, cD) => {
    cD.d(CD, {
      D: () => HD,
      G: () => OD,
      I: () => JD,
      M: () => XD,
      P: () => mD,
      Q: () => oD,
      U: () => UD,
      Y: () => aD,
      ab: () => tD,
      e: () => pD,
      eb: () => zD,
      i: () => VD,
      ib: () => ND,
      kb: () => vD,
      m: () => KD,
      ob: () => gD,
      p: () => MD,
      q: () => ZD,
      rb: () => nD,
      u: () => qD,
      y: () => PD,
      z: () => xD
    });
    var ID = cD(2782);
    const pD = {
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

    function iD(DD, CD) {
      return !ArrayBuffer.isView(DD) || DD instanceof DataView ? Array.isArray(DD) ? DD.map((DD => CD(DD))) : DD : Array.from(DD, (DD => CD(DD)))
    }

    function fD(DD) {
      if ("string" !== typeof DD) return DD;
      for (let CD = 0; CD < DD.length; CD++) {
        const cD = DD.charCodeAt(CD);
        if (cD >= 55296 && cD <= 57343) return QD.decode(bD.encode(DD))
      }
      return DD
    }
    const bD = new TextEncoder,
      QD = new TextDecoder;

    function wD(DD) {
      return DD
    }
    let SD;

    function BD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [fD(DD.wf), fD(DD.Sf)]
    }

    function yD(DD) {
      return null === DD || "object" !== typeof DD ? DD : [iD(DD.si, wD), iD(DD.Lw, wD)]
    }

    function MD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Rf), fD(CD.kf)];
      var CD
    }

    function tD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.id, CD.gf];
      var CD
    }

    function ZD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.tC, fD(CD.ZC), CD.oC, fD(CD.gC), CD.OC, CD.PC, CD.Lf, fD(CD.Tf), fD(CD.Gf)];
      var CD
    }

    function oD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.PS, wD), CD.HS];
      var CD
    }

    function vD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.Kb, (DD => fD(DD))), fD(CD.Vb), CD.zb];
      var CD
    }

    function ND(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [iD(CD.Xf, wD), fD(CD.mf), CD.Pf];
      var CD
    }

    function gD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Gc), fD(CD.Rc)];
      var CD
    }

    function XD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Pb)];
      var CD
    }

    function mD(DD) {
      return fD(DD)
    }

    function nD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.cB), fD(CD.IB), fD(CD.wf), fD(CD.Sf)];
      var CD
    }

    function OD(DD) {
      return BD(DD)
    }

    function PD(DD) {
      return BD(DD)
    }

    function HD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Yf)];
      var CD
    }

    function UD(DD) {
      return DD
    }

    function xD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.Mf), fD(CD.tf)];
      var CD
    }

    function qD(DD) {
      return fD(DD)
    }

    function JD(DD) {
      return yD(DD)
    }

    function KD(DD) {
      return yD(DD)
    }

    function aD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [fD(CD.qb)];
      var CD
    }

    function VD(DD) {
      return (SD ??= (0, ID.i)().map((DD => DD.name)), SD).map((CD => {
        return "string" === typeof(cD = DD[CD]) ? fD(cD) : iD(cD, wD);
        var cD
      }))
    }

    function zD(DD) {
      return null === (CD = DD) || "object" !== typeof CD ? CD : [CD.Gb, CD.Rb, CD.kb];
      var CD
    }
  },
  40117: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => iD
    });
    var ID = cD(40119),
      pD = cD(40114);
    const iD = new class {
      constructor(DD) {
        this.pack = DD, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, DD.onWanted((() => {
          this.release()
        }))
      }
      setGame(DD) {
        if (void 0 === DD && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const CD = this.inGame();
        if (this.game = DD, this.update(), this.inGame() !== CD)
          for (const cD of this.gameListeners) cD()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(DD) {
        return this.gameListeners.add(DD), () => {
          this.gameListeners.delete(DD)
        }
      }
      unwantedLeave(DD) {
        DD && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(DD) {
        null !== DD && DD === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const DD = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, DD && this.setGame(void 0)
      }
      setSettled(DD) {
        this.settle = DD, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, ID.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(pD.d)
  },
  39933: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      followPageUiPack: () => aw,
      packForGame: () => Kw,
      playWasmGame: () => Ww,
      prefetchWasmPreviews: () => Yb,
      setGamePackConfirm: () => rQ,
      startWasmPlay: () => Lw,
      startWasmPreviews: () => db
    });
    var ID = cD(194),
      pD = cD(1243),
      iD = cD(162),
      fD = cD(38431),
      bD = cD(1905),
      QD = cD(20),
      wD = cD(4476),
      SD = cD(1305),
      BD = cD(1694),
      yD = cD(1317),
      MD = cD(38543),
      tD = cD(38560),
      ZD = cD(38485),
      oD = cD(35883),
      vD = cD(38409),
      ND = cD(8598),
      gD = cD(38423),
      XD = cD(39768),
      mD = cD(4571),
      nD = cD(39692),
      OD = cD(39743),
      PD = cD(39701);
    const HD = {
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

    function UD(DD) {
      const CD = {
        ...OD.e[DD]
      };
      for (const cD of Object.keys(HD[DD])) delete CD[cD];
      return CD
    }

    function xD() {
      var DD, CD;
      return null === (DD = null === (CD = (0, nD.g)()) || void 0 === CD ? void 0 : CD.localPlayerAlive()) || void 0 === DD || DD
    }

    function qD() {
      var DD, CD;
      return null !== (DD = null === (CD = (0, nD.g)()) || void 0 === CD ? void 0 : CD.localDeaths()) && void 0 !== DD ? DD : null
    }
    const JD = {
        current: xD,
        watch: DD => {
          let CD = xD(),
            cD = qD();
          return (0, mD.w)((() => {
            const ID = xD(),
              pD = qD(),
              iD = null !== pD && null !== cD && pD !== cD;
            cD = pD, iD ? (CD || DD(!0), DD(!1), ID && DD(!0), CD = ID) : ID !== CD && (CD = ID, DD(ID))
          }))
        }
      },
      KD = {
        states: {
          ...UD("states"),
          localPlayerAlive: JD
        },
        events: {
          ...UD("events"),
          localPlayerAliveSet: {
            watch: JD.watch
          }
        },
        commands: {
          ...UD("commands"),
          respawn: () => {
            var DD;
            null === (DD = (0, nD.g)()) || void 0 === DD || DD.respawn()
          },
          playEmote: DD => {
            var CD;
            null === (CD = (0, nD.g)()) || void 0 === CD || CD.send(PD.e.PlayEmote, (0, PD.M)({
              Pb: DD
            }))
          },
          applyTemporaryThirdPerson: DD => {
            var CD;
            let {
              durationMs: cD
            } = DD;
            null === (CD = (0, nD.g)()) || void 0 === CD || CD.thirdPersonFor(cD)
          },
          bindCustomButtonKeys: DD => {
            var CD;
            null === (CD = (0, nD.g)()) || void 0 === CD || CD.bindCustomButtonKeys(DD)
          },
          pressCustomButton: DD => {
            var CD;
            let {
              id: cD,
              down: ID
            } = DD;
            null === (CD = (0, nD.g)()) || void 0 === CD || CD.pressCustomButton(cD, ID)
          },
          setLookSensitivity: () => {},
          wakeUp: DD => {
            const CD = (0, PD.Y)({
                qb: DD
              }),
              cD = () => {
                const DD = (0, nD.g)();
                return !(null !== DD && void 0 !== DD && DD.isSessionLive) || DD.send(PD.e.StopSleeping, CD)
              };
            if (!cD()) {
              const DD = (0, mD.w)((() => {
                cD() && DD()
              }))
            }
          },
          setCameraZoom: DD => {
            var CD;
            null === (CD = (0, nD.g)()) || void 0 === CD || CD.setCameraZoom(DD)
          }
        },
        queries: UD("queries"),
        lookups: {
          ...UD("lookups"),
          cameraZoom: () => {
            var DD, CD;
            return null !== (DD = null === (CD = (0, nD.g)()) || void 0 === CD ? void 0 : CD.cameraZoom()) && void 0 !== DD ? DD : 0
          }
        }
      };
    var aD = cD(39942),
      VD = cD(39951),
      zD = cD(39953),
      jD = cD(39968),
      lD = cD(1253),
      LD = cD(101),
      TD = cD(4321),
      GD = cD(3553),
      RD = cD(1172);
    const kD = {
      OS: () => (0, lD.e)(),
      inbuiltOverwritten: () => TD.h,
      reflectApplyHit: () => RD.b,
      definerHit: () => LD.currentUrl.c,
      emitReplaced: () => (0, QD.d)(),
      confirmMesh: () => (0, GD.e)()
    };
    var dD = cD(39957),
      YD = cD(39980);
    var WD = cD(16),
      sD = cD(1913),
      ED = cD(1961),
      eD = cD(1629),
      uD = cD(2003),
      hD = cD(1192),
      rD = cD(1250),
      AD = cD(39913);

    function FD() {
      return rD.e.get().getCurrentLanguageCode()
    }

    function DC(DD) {
      const CD = () => {
        DD({
          translate: (DD, CD) => (0, hD.v)(FD(), DD, CD),
          keyBindingText: DD => {
            const CD = (0, ED.p)(DD, WD.d.get("isTouchScreen"));
            return null !== CD ? (0, hD.y)(FD(), CD.translationKey, CD.params) : (0, ED.m)((0, ED.n)(DD))
          },
          isFriend: uD.f,
          hiddenNames: sD.c.shown,
          loadsFontRest: (0, AD.b)(FD())
        })
      };
      let cD = !1;
      const ID = () => {
          const DD = FD();
          (0, hD.i)(DD).then((() => {
            cD || DD !== FD() || CD()
          }))
        },
        pD = () => eD.e.getSocialState().friends.map((DD => DD.name.toLowerCase())).sort().join(" ");
      let iD = pD();
      CD(), ID();
      const fD = [(0, rD.g)((() => {
        CD(), ID()
      })), (0, QD.k)("customBindingsChanged", CD), (0, QD.k)("appManagerUpdated|isTouchScreen", CD), (0, uD.d)((() => {
        const DD = pD();
        DD !== iD && (iD = DD, CD())
      })), sD.c.subscribe(CD)];
      return () => {
        cD = !0;
        for (const DD of fD) DD()
      }
    }
    var CC = cD(630),
      cC = cD(1011),
      IC = cD(1937),
      pC = cD(312),
      iC = cD(3525),
      fC = cD(35734),
      bC = cD(3529),
      QC = cD(38109),
      wC = cD(4495),
      SC = cD(39834),
      BC = cD(646),
      yC = cD(706),
      MC = cD(710),
      tC = cD(1928),
      ZC = cD(3555),
      oC = cD(3076);
    let vC = null;
    var NC = cD(1199),
      gC = cD(1796),
      XC = cD(4223),
      mC = cD(3251),
      nC = cD(48),
      OC = cD(309),
      PC = cD(298),
      HC = cD(39789),
      UC = cD(4575);
    var xC = cD(39987);
    class qC {
      constructor(DD, CD) {
        this.showView = DD, this.holdForAd = CD
      }
      pointerUnlockRequestsChanged() {
        (0, HC.A)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, HC.p)())
        }]
      }
      setGameViewShown(DD) {
        this.showView(DD)
      }
      setGameView(DD) {
        (0, xC.i)(DD)
      }
      videoAdHold(DD, CD) {
        this.holdForAd(DD, CD)
      }
    }
    class JC {
      leave(DD) {
        ! function(DD) {
          if (null !== (0, yD.b)().websocketUrl) try {
            (0, mD.K)().leaveGame(DD)
          } finally {
            (0, yD.o)({
              websocketUrl: null
            })
          }
        }(DD)
      }
      isReplay() {
        return !1
      }
    }
    class KC {
      watchFrameStarts(DD) {
        return (0, mD.q)(DD)
      }
      watchFrames(DD) {
        return (0, mD.m)(DD)
      }
      watchTicks(DD) {
        return (0, mD.w)(DD)
      }
    }
    var aC = cD(1294),
      VC = cD(39993);

    function zC(DD) {
      return DD >= 0 ? Math.min(1, DD) : 0
    }

    function jC(DD, CD) {
      const {
        fade: cD
      } = DD;
      return null === cD || CD - cD.at >= cD.ms ? DD.volume : cD.from + (DD.volume - cD.from) * Math.max(0, (CD - cD.at) / cD.ms)
    }

    function lC(DD) {
      const CD = Object.entries(DD),
        cD = new Uint32Array(CD.length);
      let ID = 0;
      for (const [fD, [, bD]] of CD.entries()) cD[fD] = bD.length, ID += bD.length;
      const pD = new Float64Array(3 * ID);
      let iD = 0;
      for (const [, fD] of CD)
        for (const DD of fD) pD.set(DD, iD), iD += 3;
      return {
        blocks: CD.map((DD => {
          let [CD] = DD;
          return CD
        })).join("\0"),
        counts: cD,
        values: pD
      }
    }
    class LC {
      constructor(DD, CD) {
        this.core = DD, this.warn = CD, this.latest = 0
      }
      async feed() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TC;
        const CD = ++this.latest;
        let cD;
        try {
          cD = await DD()
        } catch (ID) {
          return void(this.core.isStopped || CD !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", ID))
        }
        CD === this.latest && (this.core.setBlockColours(cD) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function TC() {
      return lC((await cD.e(201).then((() => cD(33733)))).averageColors)
    }
    var GC = cD(4581),
      RC = cD(4585),
      kC = cD(39730),
      dC = cD(39995),
      YC = cD(39896),
      WC = cD(618),
      sC = cD(36407),
      EC = cD(613),
      eC = cD(326),
      uC = cD(39866);
    const hC = [3e4, 12e4, 3e5];
    class rC extends Error {}
    const AC = {
      mobTypes: WC.n,
      vehicleTypes: sC.c,
      mobAiStates: WC.k,
      playerPoses: EC.l
    };
    var FC = cD(39852),
      Dc = cD(40003),
      Cc = cD(40016),
      cc = cD(40024),
      Ic = cD(3275),
      pc = cD(38396),
      ic = cD(4592),
      fc = cD(2338);
    const bc = fc.C.KeysDisabled | fc.C.LookFrozen | fc.C.ClicksSuppressed,
      Qc = Ic.d;
    var wc = (0, cc.e)("resumingConn");
    class Sc {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = DD, this.now = CD, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, wc, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new pc.e({
          reconnect: DD => this.reconnect(DD),
          isLive: () => DD.isLive(),
          onReconnected: CD => {
            this.landed = CD, DD.onReconnected(CD), this.landIfResumed()
          },
          onGaveUp: (CD, cD) => {
            this.abortAttempt(), DD.onGaveUp(CD, cD)
          },
          freeze: CD => {
            DD.kU(CD), (0, ic.k)(bc, CD ? bc : 0, "reconnectFreeze")
          },
          releaseSeat: DD => {
            this.releaseSeat(DD)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, Cc.b)(this, wc)[wc]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(DD) {
        let {
          conn: CD,
          graceMs: cD,
          sessionBased: ID,
          replayOffer: pD
        } = DD;
        this.session.onInitialInfo(cD, ID), this.isResuming() && (this.initialInfoConn = CD, this.initialInfoOffer = pD, this.landIfResumed())
      }
      onResumeComplete(DD) {
        0 !== DD && (DD === (0, Cc.b)(this, wc)[wc] ? ((0, Cc.b)(this, wc)[wc] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = DD))
      }
      onDropped(DD) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, Cc.b)(this, wc)[wc] = 0, this.session.onConnectionLost(DD)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, Cc.b)(this, wc)[wc] = 0, this.session.end()
      }
      reconnect(DD) {
        const CD = this.attempt;
        if (null !== CD && this.awaitingJoinRoom(CD)) return CD.result;
        this.abortAttempt();
        const cD = new AbortController,
          ID = this.drops,
          pD = {
            attachedAt: null
          },
          iD = this.shell.reconnect(DD, cD.signal, (() => {
            pD.attachedAt = this.now()
          })).then((DD => {
            if (this.clearAttempt(fD), this.drops !== ID) throw new Error("the resumed room dropped before its attempt settled");
            return DD
          }), (DD => {
            throw this.clearAttempt(fD), DD
          })),
          fD = {
            abort: cD,
            socket: pD,
            result: iD
          };
        return this.attempt = fD, iD
      }
      clearAttempt(DD) {
        this.attempt === DD && (this.attempt = null)
      }
      abortAttempt() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const CD = this.attempt;
        this.attempt = null, null === CD || void 0 === CD || CD.abort.abort(DD)
      }
      awaitingJoinRoom(DD) {
        const CD = DD.socket.attachedAt;
        return null !== CD && this.now() - CD < Qc
      }
      releaseSeat(DD) {
        const CD = this.attempt,
          cD = null !== CD && this.awaitingJoinRoom(CD);
        this.abortAttempt(new VD.s), cD || this.shell.releaseSeat(DD)
      }
      landIfResumed() {
        const DD = this.landed;
        if (null !== DD && DD.conn === this.initialInfoConn) {
          const CD = this.initialInfoOffer && this.completedEarlyConn !== DD.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !CD) return void this.session.onResumed();
          (0, Cc.b)(this, wc)[wc] = DD.conn, this.session.onResuming()
        }
      }
    }
    var Bc = cD(38404),
      yc = cD(40029),
      Mc = cD(35895),
      tc = cD(35888),
      Zc = cD(4811),
      oc = cD(4213),
      vc = cD(3064),
      Nc = cD(39800),
      gc = cD(651),
      Xc = cD(4296),
      mc = cD(36),
      nc = cD(40032),
      Oc = cD(40073),
      Pc = cD(4247),
      Hc = cD(2343),
      Uc = cD(1627),
      xc = cD(1645),
      qc = cD(1284),
      Jc = cD(107),
      Kc = cD(2688),
      ac = cD(2347),
      Vc = cD(4590);
    const zc = new Set([GC.tb.KeyDown, GC.tb.MouseMove, GC.tb.MouseDown, GC.tb.Wheel, GC.tb.TouchStart, GC.tb.TouchMove]);

    function jc(DD) {
      return (DD.shiftKey ? GC.Fb.Shift : 0) | (DD.ctrlKey ? GC.Fb.Ctrl : 0) | (DD.altKey ? GC.Fb.Alt : 0) | (DD.metaKey ? GC.Fb.Meta : 0) | ("repeat" in DD && DD.repeat ? GC.Fb.Repeat : 0) | (DD.isTrusted ? 0 : GC.Fb.Untrusted)
    }

    function lc(DD) {
      return "touchOnly" !== (0, Jc.d)() && "function" === typeof DD.requestPointerLock
    }

    function Lc(DD) {
      return 0 === DD.button ? DD.altKey ? Vc.j["Alt+Left Click"] : Vc.j.Mouse1 : 1 === DD.button ? Vc.j.Mouse2 : Vc.j.Mouse3
    }
    const Tc = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      Gc = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Rc = 32768,
      kc = 1;

    function dc(DD) {
      return Math.min(Math.max(Math.round(DD), 0), 65535)
    }

    function Yc(DD, CD, cD) {
      const ID = [],
        pD = (DD, CD, cD, pD) => {
          const iD = DD => {
            (0, xc.t)(DD) || cD(DD)
          };
          DD.addEventListener(CD, iD, pD), ID.push((() => {
            DD.removeEventListener(CD, iD, pD)
          }))
        },
        iD = {
          capture: !0,
          passive: !0
        },
        fD = (DD, cD, ID, pD, iD) => (!(0, ac.c)() || !zc.has(DD)) && (CD(DD, cD, ID, pD, iD), !0),
        bD = () => document.pointerLockElement === DD,
        QD = (0, Kc.c)(),
        wD = DD => {
          DD.ctrlKey && cD.ctrlCombosAreGames() && !(0, ic.g)(DD.target) && DD.preventDefault()
        },
        SD = (DD, ID, pD) => {
          cD.inspect(DD, ID, !1), CD(GC.tb.KeyUp, ID, 0, 0, (0, Hc.r)(pD, DD.timeStamp)), cD.keyReleased(ID)
        },
        BD = new Map,
        yD = (DD, CD, cD) => DD[cD] || ("AltRight" === CD || "ControlLeft" === CD) && DD.getModifierState("AltGraph"),
        MD = new Map,
        tD = () => {
          BD.clear(), MD.clear()
        },
        ZD = DD => {
          if (document.hasFocus())
            for (const [CD, cD] of MD) MD.delete(CD), yD(DD, CD, cD) || (BD.delete(CD), SD(DD, Vc.j[CD], jc(DD)))
        };
      DD.tabIndex = -1;
      let oD = 0,
        vD = 0;
      const ND = () => {
        const CD = DD.getBoundingClientRect();
        oD = CD.left, vD = CD.top
      };
      let gD = "mouse";
      const XD = () => !bD() && ("mouse" === gD || !cD.touchUiShown()),
        mD = (DD, CD, cD) => {
          const ID = (dc(DD.clientX - oD) | dc(DD.clientY - vD) << 16) >>> 0;
          fD(GC.tb.MouseMove, GC.Ib.Point, CD, cD, ID)
        };
      let nD = !1,
        OD = 0;
      const PD = () => {
        nD && (nD = !1, cD.viewShown() && (0, HC.O)())
      };
      ID.push((() => {
        clearTimeout(OD)
      })), pD(window, "keydown", (DD => {
        "Escape" === DD.key ? (0, HC.C)(!0) : DD.repeat || (0, ic.g)(DD.target) || (nD = !0, clearTimeout(OD), OD = window.setTimeout(PD, 0))
      }), iD), pD(window, "keydown", (DD => {
        PD(), wD(DD), ZD(DD);
        const CD = Vc.j[DD.code];
        if ("number" !== typeof CD || !cD.viewShown()) return;
        const ID = (0, ic.g)(DD.target);
        ID || !cD.prevents(CD) && !Tc.has(DD.code) || DD.preventDefault(), DD.repeat || cD.inspect(DD, CD, !0), fD(GC.tb.KeyDown, CD, 0, 0, (0, Hc.r)(jc(DD), DD.timeStamp)) && BD.set(DD.code, CD), ID || cD.keyPressed(CD)
      }), {
        capture: !1,
        passive: !1
      }), pD(window, "keyup", (DD => {
        "Escape" === DD.key && (0, HC.C)(!1), wD(DD), BD.delete(DD.code), MD.delete(DD.code), ZD(DD);
        const CD = Vc.j[DD.code];
        "number" === typeof CD && SD(DD, CD, jc(DD))
      }), {
        capture: !0,
        passive: !1
      }), pD(window, "mousemove", (DD => {
        "mouse" === gD && XD() ? mD(DD, DD.movementX, DD.movementY) : bD() ? fD(GC.tb.MouseMove, GC.Ib.Stamped, DD.movementX, DD.movementY, (0, Hc.r)(0, DD.timeStamp)) : fD(GC.tb.MouseMove, 0, DD.movementX, DD.movementY, 0)
      }), iD);
      let HD = 0,
        UD = 0;
      const xD = [];
      let qD = !1,
        JD = !1;
      pD(DD, "mousedown", (DD => {
        if ((0, ac.c)()) return;
        ZD(DD);
        const ID = 1 << DD.button;
        if (!bD() && (0, HC.L)() && (0, HC.d)() && (JD = !0, !qD)) return void(HD |= ID);
        HD &= ~ID;
        const pD = DD.button <= 2 ? Lc(DD) : void 0;
        void 0 !== pD && (xD[DD.button] = pD, cD.inspect(DD, pD, !0)), XD() && mD(DD, 0, 0), CD(GC.tb.MouseDown, DD.button, DD.clientX, DD.clientY, (0, Hc.r)(jc(DD), DD.timeStamp)), UD |= ID, void 0 !== pD && cD.keyPressed(pD)
      }), iD), pD(window, "mouseup", (DD => {
        var ID;
        ZD(DD);
        const pD = 1 << DD.button,
          iD = 0 !== (HD & ~UD & pD);
        if (HD &= ~pD, UD &= ~pD, iD) return;
        const fD = DD.button <= 2 ? null !== (ID = xD[DD.button]) && void 0 !== ID ? ID : Lc(DD) : void 0;
        void 0 !== fD && cD.inspect(DD, fD, !1), CD(GC.tb.MouseUp, DD.button, DD.clientX, DD.clientY, (0, Hc.r)(jc(DD), DD.timeStamp)), void 0 !== fD && cD.keyReleased(fD)
      }), iD), pD(DD, "contextmenu", (DD => {
        DD.preventDefault()
      }), {
        passive: !1
      });
      const KD = DD => {
        (bD() || (0, HC.l)() && (0, qc.r)()) && (DD.ctrlKey || QD && !document.fullscreenElement) && DD.preventDefault()
      };
      pD(DD, "wheel", (DD => {
        KD(DD), ZD(DD), fD(GC.tb.Wheel, DD.deltaMode, DD.deltaX, DD.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const aD = {
          capture: !0,
          passive: !1
        },
        VD = DD => {
          DD ? window.addEventListener("wheel", KD, aD) : window.removeEventListener("wheel", KD, aD)
        };
      VD((0, HC.l)()), ID.push((0, HC.u)(VD)), ID.push((() => {
        VD(!1)
      }));
      const zD = new Map,
        jD = new Set,
        lD = DD => {
          const CD = "stylus" === DD.touchType;
          for (const cD of zD.values())
            if (!cD.touched && (CD || Math.abs(DD.clientX - cD.x) <= kc && Math.abs(DD.clientY - cD.y) <= kc)) return cD.touched = !0, !0;
          return !1
        },
        LD = DD => 32767 & DD,
        TD = new Set,
        GD = DD => cD => {
          const ID = (0, Hc.r)(jc(cD), cD.timeStamp);
          DD !== GC.tb.TouchStart && DD !== GC.tb.TouchMove || ((DD, cD) => {
            const ID = DD.touches;
            if (ID)
              for (const pD of TD) {
                let DD = !1;
                for (let CD = 0; CD < ID.length && !DD; CD++) DD = LD(ID[CD].identifier) === pD;
                DD || (TD.delete(pD), CD(GC.tb.TouchCancel, pD, 0, 0, cD))
              }
          })(cD, ID);
          const pD = cD.changedTouches;
          for (let CD = 0; CD < pD.length; CD++) {
            const cD = pD[CD];
            if (DD === GC.tb.TouchStart && lD(cD) && jD.add(cD.identifier), jD.has(cD.identifier)) {
              DD !== GC.tb.TouchEnd && DD !== GC.tb.TouchCancel || jD.delete(cD.identifier);
              continue
            }
            const iD = LD(cD.identifier),
              bD = fD(DD, iD, cD.clientX - oD, cD.clientY - vD, ID);
            DD === GC.tb.TouchStart ? bD && TD.add(iD) : DD !== GC.tb.TouchMove && TD.delete(iD)
          }
        },
        RD = GD(GC.tb.TouchStart);
      pD(DD, "touchstart", (DD => {
        DD.preventDefault(), (0, ac.c)() || (cD.touchStarting(), RD(DD))
      }), {
        passive: !1
      }), pD(DD, "touchmove", GD(GC.tb.TouchMove), iD), pD(DD, "touchend", GD(GC.tb.TouchEnd), iD), pD(DD, "touchcancel", GD(GC.tb.TouchCancel), iD);
      const kD = DD => Rc | 32767 & DD,
        dD = (DD, CD) => {
          fD(DD, kD(CD.pointerId), CD.clientX - oD, CD.clientY - vD, (0, Hc.r)(jc(CD), CD.timeStamp))
        };
      pD(window, "pointerdown", (CD => {
        gD = CD.pointerType, "mouse" === CD.pointerType && CD.target !== DD && cD.viewShown() && (0, HC.Q)()
      }), iD), pD(DD, "pointerdown", (DD => {
        "pen" === DD.pointerType && 0 === DD.button && (0, HC.l)() && (0, qc.r)() && (DD.preventDefault(), (0, ac.c)() || (zD.set(DD.pointerId, {
          x: DD.clientX,
          y: DD.clientY,
          touched: !1
        }), cD.touchStarting(), dD(GC.tb.TouchStart, DD)))
      }), {
        passive: !1
      }), pD(window, "pointermove", (DD => {
        gD = DD.pointerType, zD.has(DD.pointerId) && dD(GC.tb.TouchMove, DD), "mouse" !== DD.pointerType && XD() && mD(DD, 0, 0)
      }), iD);
      const YD = DD => CD => {
        zD.delete(CD.pointerId) && dD(DD, CD)
      };
      pD(window, "pointerup", YD(GC.tb.TouchEnd), iD), pD(window, "pointercancel", YD(GC.tb.TouchCancel), iD);
      let WD = 0;
      const sD = () => {
          WD = 0, ND(), cD.resized()
        },
        ED = () => {
          const DD = cD.sizeCanvas();
          null !== DD && CD(GC.tb.Resize, 0, DD.cssWidth, DD.cssHeight, (0, Hc.k)(DD.renderScale)), ND(), cD.resized(), 0 === WD && (WD = requestAnimationFrame(sD))
        };
      pD(window, "resize", ED, iD), ID.push(cD.watchRenderScale(ED)), ID.push((() => {
        cancelAnimationFrame(WD)
      })), pD(window, "focus", (DD => {
        DD.isTrusted && (CD(GC.tb.Focus, 0, 0, 0, 0), cD.viewShown() && (0, HC.Q)())
      }), {
        passive: !0
      });
      const eD = () => {
          (0, HC.C)(!1), HD = 0
        },
        uD = () => {
          TD.clear(), zD.clear(), jD.clear()
        };
      let hD = 0,
        rD = 0;
      pD(window, "blur", (ID => {
        eD(), (0, HC.j)();
        for (const DD of BD.keys()) {
          const CD = Gc.get(DD);
          void 0 !== CD && MD.set(DD, CD)
        }
        ID.isTrusted && ((DD => {
          for (const [cD, ID] of zD) CD(GC.tb.TouchCancel, kD(cD), ID.x, ID.y, (0, Hc.r)(0, DD));
          zD.clear()
        })(ID.timeStamp), CD(GC.tb.Blur, GC.s.KeepTouches, 0, 0, 0)), QD && ID.isTrusted && (clearTimeout(rD), rD = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const DD of BD.values()) SD(ID, DD, 0);
            tD()
          }
        }), 0)), clearTimeout(hD), hD = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, qc.r)() && cD.viewShown() && DD.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), ID.push((() => {
        clearTimeout(hD), clearTimeout(rD)
      })), pD(window, "mousedown", (CD => {
        QD && CD.isTrusted && !document.hasFocus() && (0, qc.r)() && cD.viewShown() && (window.focus(), DD.focus({
          preventScroll: !0
        }))
      }), iD), pD(document, "visibilitychange", (() => {
        document.hidden ? (CD(GC.tb.Blur, 0, 0, 0, 0), uD()) : document.hasFocus() && CD(GC.tb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), ID.push((0, ac.f)((() => {
        eD(), CD(GC.tb.Blur, GC.s.Release, 0, 0, 0), cD.keysReleased(), tD(), UD = 0, uD(), CD(GC.tb.Joystick, 0, 0, 0, 0), document.hasFocus() && CD(GC.tb.Focus, 0, 0, 0, 0)
      })));
      const AD = !cD.canLock(),
        FD = () => AD && !(0, HC.l)() ? GC.jc.Lockless : GC.jc.Released,
        DC = () => {
          bD() && (qD = !1, JD = !1), CD(GC.tb.PointerLock, bD() ? GC.jc.Locked : FD(), 0, 0, 0), (0, HC.K)(bD())
        };
      return pD(document, "pointerlockchange", DC, {
        passive: !0
      }), pD(document, "pointerlockerror", (() => {
        qD ||= JD, JD = !1, (0, HC.s)()
      }), {
        passive: !0
      }), AD && ID.push((0, HC.u)((() => {
        CD(GC.tb.PointerLock, FD(), 0, 0, 0)
      }))), ED(), CD(document.hasFocus() ? GC.tb.Focus : GC.tb.Blur, 0, 0, 0, 0), DC(), () => {
        for (const DD of ID.splice(0)) DD()
      }
    }
    var Wc = cD(8983),
      sc = cD(8967),
      Ec = cD(1965);
    const ec = new Map(Vc.c.map(((DD, CD) => [DD, CD]))),
      uc = ["jump", "primary-fire", "alt-fire"],
      hc = ["primary-fire", "alt-fire"];

    function rc(DD) {
      return `${Ec.c}${DD}`
    }
    const Ac = ["forward", "backward", "left", "right", "sprint", "jump"];

    function Fc(DD) {
      const CD = [];
      for (const cD of DD) {
        const DD = "string" === typeof cD ? Vc.j[cD] : void 0;
        "number" === typeof DD && CD.push(DD)
      }
      return CD
    }
    class DI {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [DD, CD] of Object.entries(Vc.e)) this.keys.set(DD, CD);
        this.updateKeySets()
      }
      prevents(DD) {
        return this.preventKeys.has(DD)
      }
      moves(DD) {
        return this.movementKeys.has(DD)
      }
      checks(DD, CD) {
        return (CD ? this.checkedDown : this.checkedUp).has(DD)
      }
      sync(DD, CD) {
        for (const [cD, ID] of this.keys) {
          const pD = DD(rc(cD)),
            iD = Array.isArray(pD) ? Fc(pD) : Vc.e[cD];
          (iD.length !== ID.length || iD.some(((DD, CD) => DD !== ID[CD]))) && this.bind(cD, iD, CD)
        }
      }
      bind(DD, CD, cD) {
        const ID = ec.get(DD);
        if (void 0 !== ID) {
          cD(GC.tb.Binding, 0, 0, 0, ID | GC.q.Clear << 8);
          for (const iD of [...CD, ...null !== (pD = Vc.f[DD]) && void 0 !== pD ? pD : []]) {
            var pD;
            cD(GC.tb.Binding, iD, 0, 0, ID | GC.q.Add << 8)
          }
          this.keys.set(DD, CD), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const ID of Vc.m)
          for (const CD of null !== (DD = this.keys.get(Vc.c[ID])) && void 0 !== DD ? DD : []) {
            var DD;
            this.preventKeys.add(CD)
          }
        this.movementKeys.clear();
        for (const ID of Ac)
          for (const DD of null !== (CD = this.keys.get(ID)) && void 0 !== CD ? CD : []) {
            var CD;
            this.movementKeys.add(DD)
          }
        for (const [ID, pD] of [
            [this.checkedDown, uc],
            [this.checkedUp, hc]
          ]) {
          ID.clear();
          for (const DD of pD)
            for (const CD of null !== (cD = this.keys.get(DD)) && void 0 !== cD ? cD : []) {
              var cD;
              ID.add(CD)
            }
        }
      }
    }
    var CI = cD(4588),
      cI = cD(35991);
    const II = "[bloxd-wasm-client]";

    function pI() {
      return "inGame" === WD.d.get("gameState") && !(0, Uc.v)()
    }
    let iI = null;

    function fI(DD, CD) {
      iI && CD.writePendingInput() && iI.push(function(DD, CD) {
        let cD = "";
        for (const ID of CD) cD += ID.toString(16).padStart(2, "0");
        return cD ? `${DD} ${cD}` : String(DD)
      }(DD, CD.rings.input.written()))
    }
    const bI = [];

    function QI(DD, CD, cD, ID) {
      DD === GC.U.InputAction && ID === GC.lb && bI.push(CD.getUint32(cD, !0))
    }
    var wI = cD(40094),
      SI = cD(1195),
      BI = cD(36202);
    const yI = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: SI.wasmScreens
    };

    function MI(DD) {
      var CD, cD;
      let ID = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [pD, iD] = DD.split(":");
      return (null !== (CD = null === (cD = yI[pD]) || void 0 === cD ? void 0 : cD[iD]) && void 0 !== CD ? CD : DD).replace(/\{\{(\w+)\}\}/g, ((DD, CD) => {
        var cD;
        return null !== (cD = ID[CD]) && void 0 !== cD ? cD : DD
      }))
    }

    function tI(DD, CD) {
      (0, Pc.b)();
      const cD = document.createElement("div");
      cD.setAttribute("role", "alertdialog"), cD.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const ID = document.createElement("div");
      ID.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const pD = document.createElement("h2");
      pD.textContent = MI(DD.title);
      const iD = document.createElement("p");
      if (iD.textContent = MI(DD.help, DD.helpValues), iD.style.whiteSpace = "pre-line", ID.append(pD, iD), DD.discordLink) {
        const DD = document.createElement("a");
        DD.href = BI.c, DD.target = "_blank", DD.rel = "noreferrer", DD.style.color = "#8ab4ff", DD.textContent = MI("wasmScreens:reportOnDiscord"), ID.append(DD)
      }
      const fD = document.createElement("div");
      return fD.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", ID.append(fD), cD.append(ID), document.body.append(cD), new Promise((ID => {
        const pD = DD => {
            null === CD || void 0 === CD || CD.removeEventListener("abort", iD), cD.remove(), ID(DD)
          },
          iD = () => {
            pD(!1)
          };
        null === CD || void 0 === CD || CD.addEventListener("abort", iD, {
          once: !0
        });
        const bD = (DD, CD) => {
          const cD = document.createElement("button");
          cD.textContent = MI(DD), cD.style.cssText = "padding:0.5rem 1.25rem;font:inherit", cD.addEventListener("click", (() => {
            pD(CD)
          })), fD.append(cD)
        };
        null !== DD.cancel && bD(DD.cancel, !1), bD(DD.confirm, !0)
      }))
    }
    var ZI = cD(39883);
    const oI = 6e4,
      vI = 3e5;
    var NI = cD(3456);
    var gI = cD(39791),
      XI = cD(656),
      mI = cD(11);

    function nI(DD, CD) {
      const cD = mI.db.encode(CD);
      ! function(DD, CD) {
        let cD = CD >= 0 ? 2 * CD : 2 * -CD - 1;
        for (; cD >= 128;) DD.push(cD % 128 | 128), cD = Math.floor(cD / 128);
        DD.push(cD)
      }(DD, cD.length);
      for (const ID of cD) DD.push(ID)
    }
    let OI, PI, HI;
    (() => {
      const DD = ["length", 0, 2, 1, 89, 5, 7, 3, 4, 38, 212, "v", 216, "c", 6, 164, 152, "k", "i", 177, "a", "resolv", "e", "then", 8, 16, "MDJoPo", "p", 512, 87, "012345", "d", 15, 93, 176, 53, 191, 88, 203, "b", 1023, 226, 63, 128, 12, 255, 114, 32, 24, 18, 10, 19, 64, 17, 65535, 69, 237, null, void 0, "postCo", "okies", 60, "=", 118, 1e3, "expire", "s=", ";", ";path=", "/", 37, 22, !1, 200];

      function CD() {}
      const ID = (0, mI[DD[11]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=" + DD[62]),
        pD = (0, mI[DD[11]])("QkFCWUxPTg=="),
        iD = (0, mI[DD[11]])("QW5kZXNpdGU="),
        fD = (0, mI[DD[11]])("U21vb3RoIEdyYW5pdGU="),
        bD = (0, mI[DD[11]])("RGlvcml0ZQ=="),
        QD = async (ID, pD, iD, fD) => {
          "ssN3xkq" in CD && function(...CD) {
            SD(CD[DD[0]] = DD[1], CD[DD[20]] = function(...CD) {
              if (SD(CD[DD[0]] = DD[3], CD[-DD[12]] = CD[DD[1]].length), CD[-DD[12]] < DD[2]) return DD[1];
              if (SD(CD[DD[2]] = Math.max(...CD[DD[1]]), CD[DD[13]] = Math.min(...CD[DD[1]])), CD[DD[2]] === CD[DD[13]]) return DD[1];
              for (SD(CD[DD[16]] = Array(CD[-DD[12]] - DD[3]).fill(Number.MAX_SAFE_INTEGER), CD[DD[5]] = Array(CD[-DD[12]] - DD[3]).fill(Number.MIN_SAFE_INTEGER), CD[DD[14]] = Math.ceil((CD[DD[2]] - CD[DD[13]]) / (CD[-DD[12]] - DD[3])), CD[DD[6]] = DD[1]), CD[DD[15]] = DD[1]; CD[DD[15]] < CD[-DD[12]]; CD[DD[15]]++) CD[DD[1]][CD[DD[15]]] !== CD[DD[13]] && CD[DD[1]][CD[DD[15]]] !== CD[DD[2]] && SD(CD[DD[6]] = Math.floor((CD[DD[1]][CD[DD[15]]] - CD[DD[13]]) / CD[DD[14]]), CD[DD[16]][CD[DD[6]]] = Math.min(CD[DD[16]][CD[DD[6]]], CD[DD[1]][CD[DD[15]]]), CD[DD[5]][CD[DD[6]]] = Math.max(CD[DD[5]][CD[DD[6]]], CD[DD[1]][CD[DD[15]]]));
              for (SD(CD[DD[18]] = Number.MIN_SAFE_INTEGER, CD[-DD[19]] = CD[DD[13]]), CD[DD[17]] = DD[1]; CD[DD[17]] < CD[-DD[12]] - DD[3]; CD[DD[17]]++) CD[DD[16]][CD[DD[17]]] === Number.MAX_SAFE_INTEGER && CD[DD[5]][CD[DD[17]]] === Number.MIN_SAFE_INTEGER || SD(CD[DD[18]] = Math.max(CD[DD[18]], CD[DD[16]][CD[DD[17]]] - CD[-DD[19]]), CD[-DD[19]] = CD[DD[5]][CD[DD[17]]]);
              return CD[DD[18]] = Math.max(CD[DD[18]], CD[DD[2]] - CD[-DD[19]]), CD[DD[18]]
            }, console.log(CD[DD[20]]))
          }();
          const [{
            clientSideServerUrls: bD
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: QD
          }] = await Promise.all([Promise[DD[21] + DD[22]]()[DD[23]]((() => cD(1199))), Promise[DD[21] + DD[22]]()[DD[23]](((...ID) => (ID[DD[0]] = DD[1], "R_RRWH0" in CD && function(...CD) {
            SD(CD[DD[0]] = DD[1], CD[DD[56]] = function(...CD) {
              function cD(...CD) {
                return CD[DD[0]] = DD[3], QD(fD(yD(CD[DD[1]])))
              }

              function ID(...CD) {
                return CD[DD[0]] = DD[2], QD(bD(yD(CD[DD[1]]), yD(CD[DD[3]])))
              }

              function pD(...CD) {
                return CD[DD[0]] = DD[2], wD(bD(yD(CD[DD[1]]), yD(CD[DD[3]])))
              }

              function iD(...CD) {
                return CD[DD[0]] = DD[7], BD(bD(yD(CD[DD[1]]), yD(CD[DD[3]])), CD[DD[2]])
              }

              function fD(...CD) {
                return CD[DD[0]] = DD[3], tD(OD(MD(CD[DD[1]]), CD[DD[1]].length * DD[24]))
              }

              function bD(...CD) {
                SD(CD[DD[0]] = DD[2], CD[DD[2]] = MD(CD[DD[1]])), CD[DD[2]].length > DD[25] && (CD[DD[2]] = OD(CD[DD[2]], CD[DD[1]].length * DD[24]));
                var cD = Array(DD[25]),
                  ID = Array(DD[25]);
                for (CD[DD[7]] = DD[1]; CD[DD[7]] < DD[25]; CD[DD[7]]++) SD(cD[CD[DD[7]]] = 909522486 ^ CD[DD[2]][CD[DD[7]]], ID[CD[DD[7]]] = 1549556828 ^ CD[DD[2]][CD[DD[7]]]);
                return CD[DD[13]] = OD(cD.concat(MD(CD[DD[3]])), DD[28] + CD[DD[3]].length * DD[24]), tD(OD(ID.concat(CD[DD[13]]), function(...CD) {
                  if (CD[DD[0]] = DD[7], CD[DD[1]] === DD[26] + DD[27]) return CD[DD[3]] + CD[DD[2]]
                }(DD[26] + DD[27], DD[28], 256)))
              }

              function QD(...cD) {
                cD[DD[0]] = DD[3];
                try {
                  CD[-DD[29]]
                } catch (ID) {
                  CD[-DD[29]] = DD[1]
                }
                for (SD(cD[DD[20]] = CD[-DD[29]] ? DD[30] + "6789ABCDEF" : DD[30] + "6789abcdef", cD[DD[2]] = "", cD[DD[7]] = DD[58]), cD[DD[31]] = DD[1]; cD[DD[31]] < cD[DD[1]].length; cD[DD[31]]++) SD(cD[DD[7]] = cD[DD[1]].charCodeAt(cD[DD[31]]), cD[DD[2]] += cD[DD[20]].charAt(cD[DD[7]] >>> DD[8] & DD[32]) + cD[DD[20]].charAt(cD[DD[7]] & DD[32]));
                return cD[DD[2]]
              }

              function wD(...cD) {
                cD[DD[0]] = DD[3];
                try {
                  CD[DD[31]]
                } catch (ID) {
                  CD[DD[31]] = ""
                }
                for (SD(cD[DD[3]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", cD[DD[2]] = "", cD[DD[33]] = cD[DD[1]].length), cD[DD[8]] = DD[1]; cD[DD[8]] < cD[DD[33]]; cD[DD[8]] += DD[7])
                  for (cD[DD[35]] = cD[DD[1]].charCodeAt(cD[DD[8]]) << DD[25] | (cD[DD[8]] + DD[3] < cD[DD[33]] ? cD[DD[1]].charCodeAt(cD[DD[8]] + DD[3]) << DD[24] : DD[1]) | (cD[DD[8]] + DD[2] < cD[DD[33]] ? cD[DD[1]].charCodeAt(cD[DD[8]] + DD[2]) : DD[1]), cD[DD[34]] = DD[1]; cD[DD[34]] < DD[8]; cD[DD[34]]++) cD[DD[8]] * DD[24] + cD[DD[34]] * DD[14] > cD[DD[1]].length * DD[24] ? cD[DD[2]] += CD[DD[31]] : cD[DD[2]] += cD[DD[3]].charAt(cD[DD[35]] >>> DD[14] * (DD[7] - cD[DD[34]]) & DD[42]);
                return cD[DD[2]]
              }

              function BD(...CD) {
                var cD, ID, pD, iD;
                for (SD(CD[DD[0]] = DD[2], CD[DD[36]] = CD[DD[3]].length, CD[DD[19]] = Array()), CD[DD[13]] = Array(Math.ceil(CD[DD[1]].length / DD[2])), cD = DD[1]; cD < CD[DD[13]].length; cD++) CD[DD[13]][cD] = CD[DD[1]].charCodeAt(cD * DD[2]) << DD[24] | CD[DD[1]].charCodeAt(cD * DD[2] + DD[3]);
                for (; CD[DD[13]].length > DD[1];) {
                  for (SD(iD = Array(), pD = DD[1]), cD = DD[1]; cD < CD[DD[13]].length; cD++) SD(pD = (pD << DD[25]) + CD[DD[13]][cD], ID = Math.floor(pD / CD[DD[36]]), pD -= ID * CD[DD[36]]), (iD.length > DD[1] || ID > DD[1]) && (iD[iD.length] = ID);
                  SD(CD[DD[19]][CD[DD[19]].length] = pD, CD[DD[13]] = iD)
                }
                for (CD[DD[37]] = "", cD = CD[DD[19]].length - DD[3]; cD >= DD[1]; cD--) CD[DD[37]] += CD[DD[3]].charAt(CD[DD[19]][cD]);
                for (CD[-DD[38]] = Math.ceil(CD[DD[1]].length * DD[24] / (Math.log(CD[DD[3]].length) / Math.log(DD[2]))), cD = CD[DD[37]].length; cD < CD[-DD[38]]; cD++) CD[DD[37]] = CD[DD[3]][DD[1]] + CD[DD[37]];
                return CD[DD[37]]
              }

              function yD(...CD) {
                var cD, ID;
                for (SD(CD[DD[0]] = DD[3], CD[DD[41]] = "", CD[DD[39]] = -DD[3]); ++CD[DD[39]] < CD[DD[1]].length;) SD(cD = CD[DD[1]].charCodeAt(CD[DD[39]]), ID = CD[DD[39]] + DD[3] < CD[DD[1]].length ? CD[DD[1]].charCodeAt(CD[DD[39]] + DD[3]) : DD[1]), 55296 <= cD && cD <= 56319 && 56320 <= ID && ID <= 57343 && SD(cD = 65536 + ((cD & DD[40]) << DD[50]) + (ID & DD[40]), CD[DD[39]]++), cD <= 127 ? CD[DD[41]] += String.fromCharCode(cD) : cD <= 2047 ? CD[DD[41]] += String.fromCharCode(192 | cD >>> DD[14] & 31, DD[43] | cD & DD[42]) : cD <= DD[54] ? CD[DD[41]] += String.fromCharCode(224 | cD >>> DD[44] & DD[32], DD[43] | cD >>> DD[14] & DD[42], DD[43] | cD & DD[42]) : cD <= 2097151 && (CD[DD[41]] += String.fromCharCode(240 | cD >>> DD[49] & DD[6], DD[43] | cD >>> DD[44] & DD[42], DD[43] | cD >>> DD[14] & DD[42], DD[43] | cD & DD[42]));
                return CD[DD[41]]
              }

              function MD(...CD) {
                for (SD(CD[DD[0]] = DD[3], CD[DD[20]] = Array(CD[DD[1]].length >> DD[2])), CD[DD[2]] = DD[1]; CD[DD[2]] < CD[DD[20]].length; CD[DD[2]]++) CD[DD[20]][CD[DD[2]]] = DD[1];
                for (CD[DD[2]] = DD[1]; CD[DD[2]] < CD[DD[1]].length * DD[24]; CD[DD[2]] += DD[24]) CD[DD[20]][CD[DD[2]] >> DD[5]] |= (CD[DD[1]].charCodeAt(CD[DD[2]] / DD[24]) & DD[45]) << DD[48] - CD[DD[2]] % DD[47];
                return CD[DD[20]]
              }

              function tD(...CD) {
                for (SD(CD[DD[0]] = DD[3], CD[DD[20]] = ""), CD[DD[39]] = DD[1]; CD[DD[39]] < CD[DD[1]].length * DD[47]; CD[DD[39]] += DD[24]) CD[DD[20]] += String.fromCharCode(CD[DD[1]][CD[DD[39]] >> DD[5]] >>> DD[48] - CD[DD[39]] % DD[47] & DD[45]);
                return CD[DD[20]]
              }

              function ZD(...CD) {
                return CD[DD[0]] = DD[2], CD[DD[1]] >>> CD[DD[3]] | CD[DD[1]] << DD[47] - CD[DD[3]]
              }

              function oD(...CD) {
                return CD[DD[0]] = DD[2], CD[DD[1]] >>> CD[DD[3]]
              }

              function vD(...CD) {
                return CD[DD[0]] = DD[7], CD[DD[1]] & CD[DD[3]] ^ ~CD[DD[1]] & CD[DD[2]]
              }

              function ND(...CD) {
                return CD[DD[0]] = DD[7], CD[DD[1]] & CD[DD[3]] ^ CD[DD[1]] & CD[DD[2]] ^ CD[DD[3]] & CD[DD[2]]
              }

              function gD(...CD) {
                return CD[DD[0]] = DD[3], ZD(CD[DD[1]], DD[2]) ^ ZD(CD[DD[1]], 13) ^ ZD(CD[DD[1]], DD[71])
              }

              function XD(...CD) {
                return CD[DD[0]] = DD[3], ZD(CD[DD[1]], DD[14]) ^ ZD(CD[DD[1]], 11) ^ ZD(CD[DD[1]], 25)
              }

              function mD(...CD) {
                return CD[DD[0]] = DD[3], ZD(CD[DD[1]], DD[6]) ^ ZD(CD[DD[1]], DD[49]) ^ oD(CD[DD[1]], DD[7])
              }

              function nD(...CD) {
                return CD[DD[0]] = DD[3], ZD(CD[DD[1]], DD[53]) ^ ZD(CD[DD[1]], DD[51]) ^ oD(CD[DD[1]], DD[50])
              }

              function OD(...cD) {
                var ID, pD, iD, fD, bD, QD, wD, BD, yD, MD, tD, ZD;
                for (SD(cD[DD[0]] = DD[2], cD[DD[20]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), cD[DD[7]] = new Array(DD[52])), SD(cD[DD[1]][cD[DD[3]] >> DD[5]] |= DD[43] << DD[48] - cD[DD[3]] % DD[47], cD[DD[1]][(cD[DD[3]] + DD[52] >> 9 << DD[8]) + DD[32]] = cD[DD[3]]), yD = DD[1]; yD < cD[DD[1]].length; yD += DD[25]) {
                  for (SD(ID = cD[DD[20]][DD[1]], pD = cD[DD[20]][DD[3]], iD = cD[DD[20]][DD[2]], fD = cD[DD[20]][DD[7]], bD = cD[DD[20]][DD[8]], QD = cD[DD[20]][DD[5]], wD = cD[DD[20]][DD[14]], BD = cD[DD[20]][DD[6]]), MD = DD[1]; MD < DD[52]; MD++) SD(cD[DD[7]][MD] = MD < DD[25] ? cD[DD[1]][MD + yD] : PD(PD(PD(nD(cD[DD[7]][MD - DD[2]]), cD[DD[7]][MD - DD[6]]), mD(cD[DD[7]][MD - DD[32]])), cD[DD[7]][MD - DD[25]]), tD = PD(PD(PD(PD(BD, XD(bD)), vD(bD, QD, wD)), CD[DD[22]][MD]), cD[DD[7]][MD]), ZD = PD(gD(ID), ND(ID, pD, iD)), BD = wD, wD = QD, QD = bD, bD = PD(fD, tD), fD = iD, iD = pD, pD = ID, ID = PD(tD, ZD));
                  SD(cD[DD[20]][DD[1]] = PD(ID, cD[DD[20]][DD[1]]), cD[DD[20]][DD[3]] = PD(pD, cD[DD[20]][DD[3]]), cD[DD[20]][DD[2]] = PD(iD, cD[DD[20]][DD[2]]), cD[DD[20]][DD[7]] = PD(fD, cD[DD[20]][DD[7]]), cD[DD[20]][DD[8]] = PD(bD, cD[DD[20]][DD[8]]), cD[DD[20]][DD[5]] = PD(QD, cD[DD[20]][DD[5]]), cD[DD[20]][DD[14]] = PD(wD, cD[DD[20]][DD[14]]), cD[DD[20]][DD[6]] = PD(BD, cD[DD[20]][DD[6]]))
                }
                return cD[DD[20]]
              }

              function PD(...CD) {
                return SD(CD[DD[0]] = DD[2], CD[DD[53]] = (CD[DD[1]] & DD[54]) + (CD[DD[3]] & DD[54]), CD[DD[55]] = (CD[DD[1]] >> DD[25]) + (CD[DD[3]] >> DD[25]) + (CD[DD[53]] >> DD[25])), CD[DD[55]] << DD[25] | CD[DD[53]] & DD[54]
              }
              return SD(CD[DD[0]] = DD[1], CD[-DD[29]] = DD[1], CD[DD[31]] = ""), CD[DD[22]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: cD,
                b64: pD,
                any: iD,
                hex_hmac: ID,
                b64_hmac: pD,
                any_hmac: iD
              }
            }(), console.log(CD[DD[56]]))
          }(), cD(1127))))]), wD = bD.getHttpUrlFromWebSocketUrl(ID.endpoint), BD = ID[DD[59] + DD[60]] === DD[57] ? DD[58] : await ID[DD[59] + DD[60]]();
          await QD("" + wD + pD, iD, {
            retries: fD
          }, BD)
        };
      OI = async (cD, ID) => {
        "BjbUbhE" in CD && function(...CD) {
          CD[DD[0]] = DD[1]
        }();
        const pD = function(DD, CD, cD, ID) {
          const pD = [];
          nI(pD, DD), nI(pD, CD), nI(pD, cD);
          for (const iD of ID) pD.push(iD);
          return pD
        }(cD.game, cD.lobby, (0, XI[DD[39]])(), ID);
        try {
          function iD(...CD) {
            CD[DD[0]] = DD[1]
          }
          "norQSN" in CD && iD(), await QD(cD, "/persisted/keep-alive", {
            type: "lt",
            data: pD
          }, DD[7])
        } catch (fD) {
          console.warn(fD)
        }
      };
      const wD = (...cD) => (cD[DD[0]] = DD[2], "UyhyeOJ" in CD && function(...CD) {
        SD(CD[DD[0]] = DD[1], CD[DD[39]] = function(...cD) {
          return SD(cD[DD[0]] = DD[3], cD[DD[20]] = []), (cD[DD[1]] === DD[3] || cD[DD[1]] >= DD[8]) && CD[DD[13]](cD[DD[20]], [], cD[DD[1]], DD[1]), cD[DD[20]]
        }, CD[DD[13]] = function(...cD) {
          for (cD[DD[0]] = DD[8], cD[DD[8]] = cD[DD[7]]; cD[DD[8]] < cD[DD[2]]; cD[DD[8]]++) {
            if (cD[DD[3]].length !== cD[DD[8]]) return;
            for (cD[-DD[70]] = DD[1]; cD[-DD[70]] < cD[DD[2]]; cD[-DD[70]]++) CD[DD[31]](cD[DD[3]], [cD[DD[8]], cD[-DD[70]]]) && (SD(cD[DD[3]].push([cD[DD[8]], cD[-DD[70]]]), CD[DD[13]](cD[DD[1]], cD[DD[3]], cD[DD[2]], cD[DD[8]] + DD[3])), cD[DD[3]].length === cD[DD[2]] && cD[DD[1]].push(CD[DD[22]](cD[DD[3]])), cD[DD[3]].pop())
          }
        }, CD[DD[22]] = function(...CD) {
          for (SD(CD[DD[0]] = DD[3], CD[DD[3]] = [], CD[-DD[71]] = CD[DD[1]].length), CD[DD[13]] = DD[1]; CD[DD[13]] < CD[-DD[71]]; CD[DD[13]]++)
            for (CD[DD[3]][CD[DD[13]]] = "", CD[DD[31]] = DD[1]; CD[DD[31]] < CD[-DD[71]]; CD[DD[31]]++) CD[DD[3]][CD[DD[13]]] += CD[DD[1]][CD[DD[13]]][DD[3]] === CD[DD[31]] ? "Q" : ".";
          return CD[DD[3]]
        }, CD[DD[31]] = function(...CD) {
          for (SD(CD[DD[0]] = DD[2], CD[DD[2]] = CD[DD[1]].length), CD[DD[39]] = DD[1]; CD[DD[39]] < CD[DD[2]]; CD[DD[39]]++) {
            if (CD[DD[1]][CD[DD[39]]][DD[1]] === CD[DD[3]][DD[1]] || CD[DD[1]][CD[DD[39]]][DD[3]] === CD[DD[3]][DD[3]]) return DD[72];
            if (Math.abs((CD[DD[1]][CD[DD[39]]][DD[1]] - CD[DD[3]][DD[1]]) / (CD[DD[1]][CD[DD[39]]][DD[3]] - CD[DD[3]][DD[3]])) === DD[3]) return DD[72]
          }
          return !0
        }, console.log(CD[DD[39]]))
      }(), Object.getOwnPropertyDescriptor(cD[DD[1]], cD[DD[3]]));

      function SD() {
        SD = function() {}
      }
      PI = () => {
        if ((0, mI.M)(), wD(navigator, ID) !== DD[58]) {
          function cD(...CD) {
            CD[DD[0]] = DD[1]
          }
          return "r5o2Q9L" in CD && cD(), iD
        }
        if (wD(window, pD) === DD[58]) {
          function QD(...CD) {
            CD[DD[0]] = DD[1]
          }
          return "mKnyoGG" in CD && QD(), fD
        }
        return bD
      }, HI = async CD => {
        try {
          const cD = PI();
          await QD(CD, "/images/" + cD + ".png", {
            block: cD
          }, DD[1])
        } catch {}
      }
    })();
    var UI = cD(39971),
      xI = cD(1793);
    const qI = 1e3 * UI.b.seatReservationSeconds - 3e3;
    class JI {
      constructor(DD) {
        var CD, cD, ID, pD;
        let iD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (CD = iD.wallNow) && void 0 !== CD ? CD : Date.now, this.monoNow = null !== (cD = iD.monoNow) && void 0 !== cD ? cD : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (ID = iD.sleep) && void 0 !== ID ? ID : xI.d, this.follow = new gC.d(iD.signal);
        const fD = null !== (pD = iD.fetch) && void 0 !== pD ? pD : fetch;
        this.seat = (0, yc.i)(DD.endpoint, DD.roomName, DD.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (DD, CD) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), fD(DD, CD)),
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
      async take(DD) {
        if ("rematched" === this.use) return;
        (0, gC.r)(DD);
        const CD = "pending" !== this.request,
          cD = () => {
            this.abort((0, gC.g)(DD))
          };
        let ID;
        null === DD || void 0 === DD || DD.addEventListener("abort", cD, {
          once: !0
        });
        try {
          ID = await this.seat
        } catch (pD) {
          if ((0, gC.r)(DD), !CD) throw pD;
          return void(this.use = "lost")
        } finally {
          null === DD || void 0 === DD || DD.removeEventListener("abort", cD)
        }
        if ((0, gC.r)(DD), !(this.ageMs() > qI)) return this.use = "taken", ID;
        this.use = "renewed"
      }
      async reserveInstead(DD, CD) {
        try {
          return await DD()
        } catch (cD) {
          const pD = this.holdLeftMs();
          if (!(cD instanceof VD.m) || cD.code !== ID.e.duplicateLobbyNameError.code || 0 === pD) throw cD;
          return await this.sleep(pD + 500, CD), DD()
        }
      }
      release() {
        const {
          request: DD,
          use: CD
        } = this, cD = this.holdsNoSeat();
        return this.abort(), "taken" === CD || cD ? null : {
          unused: "unused" === CD ? "abandoned" : CD,
          answered: "answered" === DD,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var DD;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const CD = null !== (DD = this.answeredAt) && void 0 !== DD ? DD : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          cD = Math.max(this.wallNow() - CD.wall, this.monoNow() - CD.mono);
        return Math.max(0, 1e3 * UI.b.seatReservationSeconds - cD)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(DD) {
        (0, gC.j)(this.follow.controller, DD)
      }
    }
    var KI = cD(1865),
      aI = cD(40101);
    const VI = new Uint8Array(0);
    class zI {
      constructor(DD) {
        if (this.options = DD, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === DD.module) return this.stopped = !0, void DD.fail("no wasm module for the meshing workers");
        DD.loadWorkers().then((DD => {
          let {
            create: CD,
            count: cD
          } = DD;
          if (!this.stopped) {
            this.createWorker = CD;
            for (let DD = 0; DD < cD; DD++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let DD = 0; DD < cD; DD++) this.start(DD)
          }
        }), (DD => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", DD))
        }))
      }
      take(DD, CD, cD) {
        const ID = this.slots[CD];
        if (DD === GC.Kd.Retire) {
          var pD, iD, fD;
          if (ID && !ID.gone) null === (pD = ID.worker) || void 0 === pD || pD.terminate(), ID.worker = null, ID.started = !1, null === (iD = (fD = this.options).onMemoryGone) || void 0 === iD || iD.call(fD, CD), this.giveUp(CD, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const bD = null === ID || void 0 === ID ? void 0 : ID.worker;
        if (!bD || !ID.started) return;
        const QD = cD.byteLength;
        let wD = null;
        DD === GC.Kd.Mesh && ID.heapRetries > 0 && (ID.heapRetries--, wD = this.pooled(QD, !0)), wD ??= this.buffer(QD), new Uint8Array(wD, 0, QD).set(cD), bD.postMessage({
          type: "job",
          kind: DD,
          bytes: wD,
          len: QD
        }, [wD])
      }
      takeFailedMeshJobs() {
        const DD = this.failedJobs;
        return this.failedJobs = 0, DD
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const CD of this.slots) {
          var DD;
          jI(CD), null === (DD = CD.worker) || void 0 === DD || DD.terminate(), CD.worker = null, CD.started = !1
        }
      }
      start(DD) {
        const CD = this.slots[DD],
          {
            module: cD
          } = this.options,
          ID = this.createWorker;
        if (this.stopped || CD.gone || null === cD || null === ID) return;
        if (CD.startsWithoutResult >= 3) return void this.giveUp(DD, "failed to start 3 times in a row", "no meshing worker would start");
        let pD;
        CD.startsWithoutResult++;
        try {
          pD = ID()
        } catch (iD) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${DD} did not start`, iD), void this.start(DD)
        }
        CD.worker = pD, pD.onmessage = cD => {
          let {
            data: ID
          } = cD;
          CD.worker === pD && this.onReply(DD, ID)
        }, pD.onmessageerror = () => {
          CD.worker === pD && this.lose(DD, "a reply could not be read")
        }, pD.onerror = cD => {
          cD.preventDefault(), CD.worker === pD && this.lose(DD, cD.message || "its script failed")
        };
        try {
          pD.postMessage({
            type: "start",
            module: cD
          })
        } catch (iD) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${DD} could not be sent the module`, iD), pD.terminate(), CD.worker = null, void this.start(DD)
        }
        CD.watch = new aI.f(aI.b, (CD => {
          this.lose(DD, (0, aI.j)(CD), (() => {
            this.options.onStartTimeout(CD)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(DD, CD) {
        const cD = this.slots[DD];
        switch (CD.type) {
          case "started":
            jI(cD), cD.started = !0, this.options.write(0, GC.Gd.WorkerStarted, 0, DD, 0, VI);
            break;
          case "lost":
            this.lose(DD, CD.reason);
            break;
          case "memory":
            var ID, pD;
            null === (ID = (pD = this.options).onMemoryStats) || void 0 === ID || ID.call(pD, DD, CD.stats);
            break;
          case "result": {
            const ID = CD.status === GC.vb.Trapped;
            if (0 !== CD.jobId) {
              if (ID) this.countFailedJob(CD.outOfMemory, "light_trap", CD.trap);
              else if (cD.startsWithoutResult = 0, cD.trapsWithoutResult = 0, CD.status === GC.vb.Refused) {
                const cD = function(DD) {
                  if (DD.byteLength < 32) return "(no reason)";
                  const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength),
                    cD = Math.min(CD.getUint32(28, !0), DD.byteLength - 28 - 4);
                  return (new TextDecoder).decode(DD.subarray(32, 32 + cD)).slice(0, 200)
                }(new Uint8Array(CD.bytes, 0, CD.len));
                this.countFailedJob(dC.c.test(cD), "light_refused_input", cD), this.logRefusal(DD, cD)
              }
              CD.status === GC.vb.HeapRefused && (cD.heapRetries = Math.min(cD.heapRetries + 1, 4), this.logHeapRefusal(DD))
            }
            if (this.options.write(CD.jobId, GC.Gd.JobResult, CD.status, DD, CD.workerUs, new Uint8Array(CD.bytes, 0, CD.len)), this.recycle(CD.bytes), CD.spare && this.recycle(CD.spare), !ID) break;
            if (cD.startsWithoutResult = 0, 0 === CD.jobId) {
              this.lose(DD, `the tables trapped its wasm: ${CD.trap}`);
              break
            }
            cD.trapsWithoutResult++;
            const pD = cD.trapsWithoutResult > 6;
            cD.gone ||= pD, this.lose(DD, `a job trapped its wasm: ${CD.trap}`), pD && this.giveUp(DD, `trapped ${cD.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(DD, CD, cD) {
        if (DD) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(CD) || (this.faultsReported.add(CD), this.options.onLightFault(CD, cD));
        this.failedJobs++
      }
      logRefusal(DD, CD) {
        var cD;
        !this.refusals.has(CD) && this.refusals.size >= 16 && (CD = "(other reasons)");
        const ID = (null !== (cD = this.refusals.get(CD)) && void 0 !== cD ? cD : 0) + 1;
        this.refusals.set(CD, ID), (0, KI.z)(ID) && console.warn(`[bloxd-wasm-client] meshing worker ${DD} refused a chunk (${ID} so far for this reason): ${CD}`)
      }
      logHeapRefusal(DD) {
        this.heapRefusals++, (0, KI.z)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${DD} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(DD, CD, cD) {
        const ID = this.slots[DD];
        if (ID.gone = !0, ID.goneFor = {
            why: CD,
            failure: cD
          }, console.warn(`[bloxd-wasm-client] meshing worker ${DD} ${CD}: giving up on it`), this.slots.every((DD => DD.gone))) {
          this.stop();
          const DD = new Set(this.slots.map((DD => {
              var CD;
              return null === (CD = DD.goneFor) || void 0 === CD ? void 0 : CD.failure
            }))),
            CD = this.slots.map(((DD, CD) => {
              var cD, ID;
              return `worker ${CD} ${null!==(cD=null===(ID=DD.goneFor)||void 0===ID?void 0:ID.why)&&void 0!==cD?cD:"went"}`
            }));
          this.options.fail(1 === DD.size ? cD : `no meshing worker is left (${CD.join(", ")})`)
        }
      }
      lose(DD, CD, cD) {
        var ID, pD, iD;
        const fD = this.slots[DD];
        console.warn(`[bloxd-wasm-client] meshing worker ${DD} was lost: ${CD}`), jI(fD), null === (ID = fD.worker) || void 0 === ID || ID.terminate(), fD.worker = null, fD.heapRetries = 0, null === (pD = (iD = this.options).onMemoryGone) || void 0 === pD || pD.call(iD, DD), this.stopped || (cD ? cD() : this.options.onWorkerLost(CD), fD.started && (fD.started = !1, this.options.write(0, GC.Gd.WorkerLost, 0, DD, 0, VI)), this.start(DD))
      }
      buffer(DD) {
        var CD;
        return null !== (CD = this.pooled(DD)) && void 0 !== CD ? CD : new ArrayBuffer(Math.max(16384, DD))
      }
      pooled(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = -1;
        for (let pD = 0; pD < this.pool.length; pD++) {
          const ID = this.pool[pD].byteLength;
          ID >= DD && (cD < 0 || (CD ? ID > this.pool[cD].byteLength : ID < this.pool[cD].byteLength)) && (cD = pD)
        }
        if (cD < 0) return null;
        const ID = this.pool[cD];
        return this.pool[cD] = this.pool[this.pool.length - 1], this.pool.pop(), ID
      }
      recycle(DD) {
        this.pool.length < 4 * this.slots.length && DD.byteLength > 0 && DD.byteLength <= 1048576 && this.pool.push(DD)
      }
    }

    function jI(DD) {
      var CD;
      null === (CD = DD.watch) || void 0 === CD || CD.cancel(), DD.watch = null
    }
    var lI = cD(40052),
      LI = cD(40041),
      TI = cD(40104),
      GI = (cD(39875), cD(40112)),
      RI = cD(40079);

    function kI(DD) {
      const CD = new Uint8Array(DD.length >> 2);
      for (let cD = 0; cD < CD.length; cD++) CD[cD] = DD[4 * cD + 3];
      return CD
    }
    async function dI(DD) {
      const CD = await (0, GI.h)(DD);
      try {
        const {
          width: DD,
          height: cD,
          pixels: ID
        } = (0, RI.n)(CD);
        return {
          width: DD,
          height: cD,
          alpha: kI(ID)
        }
      } finally {
        CD.close()
      }
    }
    class YI {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dI;
        this.session = DD, this.sources = CD, this.warn = cD, this.load = ID, this.nextPoll = 0, this.Lt = !1, this.warned = new Set
      }
      drain(DD) {
        if (DD < this.nextPoll) return;
        this.nextPoll = DD + 250;
        const CD = this.session.sunShadowWantedTextures();
        if (CD)
          for (let cD = 0; cD + 1 < CD.length; cD += 2) this.hand(CD[cD], CD[cD + 1]);
        for (const cD of this.session.takeSunShadowWarnings()) this.warn(cD)
      }
      dispose() {
        this.Lt = !0
      }
      async hand(DD, CD) {
        var cD, ID, pD, iD, fD;
        let bD, QD = null;
        try {
          if (QD = await this.sources.blockImageUrl(DD), null === QD) throw new Error(`block image ${DD} has no URL`);
          bD = await this.load(QD)
        } catch (SD) {
          var wD;
          const CD = null !== (wD = QD) && void 0 !== wD ? wD : `block image ${DD}`;
          this.warned.has(CD) || (this.warned.add(CD), this.warn(`sun shadow plane texture ${CD} didn't load: its blocks cast no shadow`, SD))
        }
        this.Lt || this.session.setSunShadowTexture(DD, CD, null !== (cD = null === (ID = bD) || void 0 === ID ? void 0 : ID.width) && void 0 !== cD ? cD : 0, null !== (pD = null === (iD = bD) || void 0 === iD ? void 0 : iD.height) && void 0 !== pD ? pD : 0, null === (fD = bD) || void 0 === fD ? void 0 : fD.alpha)
      }
    }
    var WI = cD(40056),
      sI = cD(40114),
      EI = cD(40117),
      eI = cD(40065),
      uI = cD(40071),
      hI = cD(9080),
      rI = cD(8934),
      AI = cD(40122);
    const FI = 8192,
      Dp = new Set;
    const Cp = new Set([...rI.d, "sceneDownload"]);
    var cp = cD(39890),
      Ip = cD(39771);
    const pp = new Uint8Array(0);
    let ip = null;

    function fp(DD) {
      return {
        aux: GC.Zb.AdStart | (DD ? GC.Zb.PreventMovement : 0),
        payload: pp
      }
    }
    var bp = cD(2675),
      Qp = cD(2681);
    const wp = "__bloxdSceneCapture";
    var Sp = cD(1774),
      Bp = cD(2744);
    let yp = null,
      Mp = null,
      tp = null,
      Zp = !1;

    function op() {
      yp ??= performance.now()
    }
    var vp = cD(40126);
    class Np {
      constructor(DD) {
        var CD, cD;
        this.host = DD, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((DD => {
          this.landRequest = DD
        })), this.follow = DD => {
          let CD = DD;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const DD = null === this.requested && null !== CD;
            var cD;
            DD && (null === (cD = CD) || void 0 === cD || cD(null));
            const ID = await this.landing;
            var pD;
            null === ID && DD || (null === (pD = CD) || void 0 === pD || pD(ID))
          })), () => {
            CD = null
          }
        }, this.startRead = (cD = DD.store, cD.keys().then((DD => ({
          own: DD.includes(vc.e),
          oneShot: DD.includes(vc.f)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((DD => {
          let {
            own: CD,
            oneShot: cD
          } = DD;
          this.oneShotStored = cD, (CD || cD) && this.request()
        })), this.channel = (null !== (CD = DD.openChannel) && void 0 !== CD ? CD : vc.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var DD;
        if (null !== this.requested) return this.requested;
        null === (DD = this.channel) || void 0 === DD || DD.close(), this.channel = null;
        const CD = this.oneShotStored;
        return this.requested = function(DD, CD, cD) {
          return new Promise((CD => {
            CD(DD())
          })).catch((DD => (null !== CD && (0, vc.p)(CD), cD(DD), null)))
        }((() => this.host.load(CD).then((DD => (DD.setGamePackConfirm(this.confirm), this.landed = DD, DD)))), CD ? this.host.store : null, this.host.Nt), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var DD;
          return null !== (DD = this.requested) && void 0 !== DD ? DD : null
        }))
      }
      setGamePackConfirm(DD) {
        var CD;
        this.confirm = DD, null === (CD = this.landed) || void 0 === CD || CD.setGamePackConfirm(DD)
      }
    }
    var gp = cD(35903);
    const Xp = 216 * gp.g,
      mp = 92 * gp.d,
      np = 64 * gp.g,
      Op = 16 * gp.g;

    function Pp() {
      var DD, CD;
      return null !== (DD = null === (CD = performance.memory) || void 0 === CD ? void 0 : CD.aN) && void 0 !== DD ? DD : null
    }
    class Hp {
      constructor(DD, CD) {
        this.budgetBytes = DD, this.reads = CD, this.estimate = null, this.shedAt = null
      }
      read(DD) {
        var CD;
        const cD = this.reads.storedChunks(),
          ID = this.reads.gpuBytes(),
          pD = Math.max(null !== (CD = this.reads.jsHeapBytes()) && void 0 !== CD ? CD : 0, np),
          iD = Xp + DD + pD + ID + cD * mp;
        this.estimate = {
          wasmBytes: DD,
          jsHeapBytes: pD,
          gpuBytes: ID,
          storedChunks: cD,
          totalBytes: iD
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: DD,
          budgetBytes: CD,
          shedAt: cD
        } = this;
        return !(null === DD || null === CD || DD.totalBytes < CD || null !== cD && DD.totalBytes < cD + Op) && (this.shedAt = DD.totalBytes, !0)
      }
      describe() {
        const {
          estimate: DD,
          budgetBytes: CD
        } = this;
        return null === DD ? null : `estimate ${(0,gp.k)(DD.totalBytes)} MiB of budget ${null===CD?"none":(0,gp.k)(CD)}: wasm ${(0,gp.k)(DD.wasmBytes)} js ${(0,gp.k)(DD.jsHeapBytes)} gpu ${(0,gp.k)(DD.gpuBytes)} chunks ${DD.storedChunks}`
      }
      snapshot() {
        const {
          estimate: DD,
          budgetBytes: CD
        } = this;
        return {
          ...null === DD ? {} : {
            footprintMiB: Number((0, gp.k)(DD.totalBytes)),
            gpuMiB: Number((0, gp.k)(DD.gpuBytes)),
            storedChunks: DD.storedChunks
          },
          footprintBudgetMiB: null === CD ? -1 : Number((0, gp.k)(CD))
        }
      }
    }
    var Up = cD(2727),
      xp = cD(4314),
      qp = cD(38447),
      Jp = cD(37329);
    const Kp = RC.X + 1,
      ap = 4096 * Kp;
    class Vp {
      constructor(DD, CD) {
        this.log = DD, this.take = CD, this.Lb = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(DD, CD) {
        const cD = this.take();
        cD.length >= RC.T && cD[0] > 0 && (0, Up.j)("remesh", `${cD[0]} core records lost to a full log`);
        const ID = this.Lb;
        for (let pD = RC.T; pD + RC.X <= cD.length; pD += RC.X) {
          for (let DD = pD; DD < pD + RC.X; DD++) ID.push(cD[DD]);
          ID.push(DD)
        }
        if (CD || !(ID.length < ap)) {
          for (let CD = 0; CD < ID.length; CD += Kp) this.feed(CD, DD);
          ID.length = 0, CD && this.log.frame(DD)
        }
      }
      feed(DD, CD) {
        var cD;
        const ID = this.Lb,
          pD = (0, Jp.d)(ID[DD + 1], ID[DD + 2], ID[DD + 3]),
          iD = ID[DD + 4],
          fD = ID[DD + RC.X];
        switch (ID[DD]) {
          case RC.xb.Edit:
            this.log.edit(pD, fD);
            break;
          case RC.xb.Sent:
            this.latest.set(pD, iD), this.log.sent(pD, iD, ID[DD + 5], ID[DD + 6], ID[DD + 7], null !== (cD = this.unshown.get(pD)) && void 0 !== cD ? cD : Jp.c, fD);
            break;
          case RC.xb.Done: {
            this.log.received(iD, ID[DD + 5] / 1e3, fD);
            const CD = this.unshown.get(pD);
            void 0 === CD ? this.unshown.set(pD, [iD]) : CD.push(iD);
            break
          }
          case RC.xb.Failed: {
            const DD = this.latest.get(pD);
            void 0 !== DD && DD !== iD ? this.log.reassign(pD, iD, DD) : this.log.failed(iD), this.ended(pD, iD);
            break
          }
          case RC.xb.Shown:
            this.log.applied(pD, iD, CD), this.ended(pD, iD);
            break;
          case RC.xb.Replaced:
            this.log.reassign(pD, iD, ID[DD + 5]), this.ended(pD, iD);
            break;
          case RC.xb.Emptied:
            this.log.emptied(pD, CD);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${ID[DD]}`)
        }
      }
      ended(DD, CD) {
        this.latest.get(DD) === CD && this.latest.delete(DD);
        const cD = this.unshown.get(DD);
        if (void 0 === cD) return;
        const ID = cD.indexOf(CD);
        ID >= 0 && cD.splice(ID, 1), 0 === cD.length && this.unshown.delete(DD)
      }
    }
    let zp = null;
    var jp = cD(3041);
    const lp = new Uint8Array(0);
    class Lp {
      constructor(DD) {
        this.options = DD, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.Lb = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== DD.module ? DD.write(0, GC.Gd.WorldgenStarted, 0, 0, lp) : this.giveUp()
      }
      take(DD, CD) {
        if (!(this.gone || null === this.worker && null === this.Lb))
          if (DD === GC.Kd.WorldgenSeed) {
            const DD = 0 === CD.byteLength ? null : this.options.decodeSettings(CD);
            null === DD || function(DD, CD) {
              if ((null === DD || void 0 === DD ? void 0 : DD.byteLength) !== CD.byteLength) return !1;
              for (let cD = 0; cD < DD.byteLength; cD++)
                if (DD[cD] !== CD[cD]) return !1;
              return !0
            }(this.seed, CD) || (this.seed = CD.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: DD
            }, []), null !== DD ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (DD === GC.Kd.Generate) {
          var cD;
          const DD = new DataView(CD.buffer, CD.byteOffset, GC.Dd),
            ID = null !== (cD = this.pool.pop()) && void 0 !== cD ? cD : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: DD.getUint32(0, !0),
            x: DD.getInt32(4, !0),
            y: DD.getInt32(8, !0),
            z: DD.getInt32(12, !0),
            bytes: ID
          }, [ID])
        }
      }
      stop() {
        var DD;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (DD = this.worker) || void 0 === DD || DD.terminate(), this.worker = null
      }
      post(DD, CD) {
        var cD;
        null !== this.Lb ? this.Lb.push({
          message: DD,
          transfer: CD
        }) : null === (cD = this.worker) || void 0 === cD || cD.postMessage(DD, CD)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((DD => {
          this.createWorker = DD, this.start()
        }), (DD => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(DD))
        })))
      }
      start() {
        const {
          module: DD
        } = this.options, CD = this.createWorker;
        if (this.gone || null === DD || null === CD) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let cD;
        this.startsWithoutResult++;
        try {
          cD = CD()
        } catch (pD) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", pD), this.lastLoss = `it did not start (${String(pD)})`, void this.start()
        }
        this.worker = cD, cD.onmessage = DD => {
          let {
            data: CD
          } = DD;
          this.worker === cD && this.onReply(cD, CD)
        }, cD.onerror = DD => {
          DD.preventDefault(), this.worker === cD && this.lose(DD.message || "its script failed")
        };
        try {
          cD.postMessage({
            type: "start",
            module: DD,
            Wt: ID.h.Wt
          })
        } catch (pD) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", pD), this.lastLoss = `it could not be sent the module (${String(pD)})`, cD.terminate(), this.worker = null, void this.start()
        }
        this.watch = new aI.f(aI.e, (DD => {
          this.lose((0, aI.j)(DD), (() => {
            this.options.onStartTimeout(DD)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(DD, CD) {
        switch (CD.type) {
          case "started": {
            this.endWatch();
            const CD = this.Lb;
            if (null === CD) {
              this.options.write(0, GC.Gd.WorldgenStarted, 0, 0, lp);
              break
            }
            this.Lb = null;
            for (const {
                message: cD,
                transfer: ID
              }
              of CD) DD.postMessage(cD, ID);
            break
          }
          case "lost":
            this.lose(CD.reason);
            break;
          case "memory":
            var cD, ID;
            null === (cD = (ID = this.options).onMemoryStats) || void 0 === cD || cD.call(ID, CD.stats);
            break;
          case "result":
            CD.status !== GC.vb.Trapped && (this.startsWithoutResult = 0), this.options.write(CD.ticket, GC.Gd.WorldgenResult, CD.status, CD.workerUs, new Uint8Array(CD.bytes, 0, CD.len)), this.recycle(CD.bytes), CD.spare && this.recycle(CD.spare)
        }
      }
      lose(DD, CD) {
        var cD, ID, pD;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${DD}`), this.lastLoss = DD, this.endWatch(), null === (cD = this.worker) || void 0 === cD || cD.terminate(), this.worker = null, null === (ID = (pD = this.options).onMemoryGone) || void 0 === ID || ID.call(pD), this.gone || (CD ? CD() : this.options.onWorkerLost(DD), this.dropHeld(), this.Lb = null, this.options.write(0, GC.Gd.WorldgenLost, GC.Nd.Lost, 0, lp), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, GC.Gd.WorldgenLost, GC.Nd.Gone, 0, lp)
      }
      endWatch() {
        var DD;
        null === (DD = this.watch) || void 0 === DD || DD.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Lb) {
          for (const {
              message: DD
            }
            of this.Lb) "generate" === DD.type && this.recycle(DD.bytes);
          this.Lb.length = 0
        }
      }
      recycle(DD) {
        this.pool.length < 16 && DD.byteLength > 0 && DD.byteLength <= 16384 && this.pool.push(DD)
      }
    }
    var Tp = cD(37134),
      Gp = cD(3546),
      Rp = cD(39752),
      kp = cD(40135),
      dp = cD(40012);
    const Yp = /[(@\s]([^\s(@]+)$/,
      Wp = /:\d/;

    function sp(DD, CD) {
      for (let cD = 0; cD + CD.length <= DD.length; cD++) {
        let ID = 0;
        for (; ID < CD.length && DD[cD + ID] === CD[ID];) ID++;
        if (ID === CD.length) return cD
      }
      return -1
    }

    function Ep(DD) {
      return "(" === DD || ")" === DD || "@" === DD || "," === DD || " " === DD || "\t" === DD
    }

    function ep(DD, CD) {
      let cD = CD;
      for (; cD > 0 && !Ep(DD[cD - 1]);) cD--;
      let ID = CD;
      for (; ID < DD.length && !Ep(DD[ID]);) ID++;
      let pD = "";
      for (let iD = cD; iD < ID; iD++) pD += DD[iD];
      return pD
    }
    const hp = (DD, CD) => DD.includes(CD),
      rp = DD => {
        try {
          return DD()
        } catch {
          return !1
        }
      },
      Ap = -1,
      Fp = DD => {
        try {
          return DD()
        } catch {
          return Ap
        }
      };

    function Di(DD, CD) {
      return {
        probe: (cD, ID, pD) => {
          try {
            return ((cD, ID, pD) => {
              switch (cD) {
                case GC.kc.StackCheck:
                  return CD.stackCheck() ? 1 : 0;
                case GC.kc.ConfirmMesh:
                  return CD.confirmMesh();
                case GC.kc.IndexPassReplaced:
                  return CD.indexPassReplaced() ? 1 : 0;
                case GC.kc.ProductSubChanged:
                  return CD.productSubChanged() ? 1 : 0;
                case GC.kc.RenderStatus:
                  return CD.rw();
                case GC.kc.Held:
                  return CD.Lb();
                case GC.kc.PlayerKilledSubs:
                  return CD.playerKilledSubs();
                case GC.bb: {
                  const cD = CD.getComplete();
                  return null === cD ? 0 : (0, mI.q)(mI.z, mI.db, [cD, new mI.e((0, mI.I)(DD()), ID, pD)]).written
                }
                default:
                  return 0
              }
            })(cD, ID, pD)
          } catch {
            return GC.fc
          }
        }
      }
    }
    class Ci {
      constructor(DD) {
        this.write = DD, this.flagsWritten = 0, this.written = (0, mI.r)(null)
      }
      wy(DD) {
        let {
          flags: CD,
          values: cD
        } = DD;
        for (let ID = 0; ID < cD.length; ID++) this.value(cD[ID][0], cD[ID][1]);
        this.setFlags(CD | GC.h.Ready)
      }
      value(DD, CD) {
        this.written[DD] !== CD && this.write(DD, CD, 0) && (this.written[DD] = CD)
      }
      setFlags(DD) {
        const CD = DD & ~this.flagsWritten;
        0 !== CD && this.write(GC.k.Flags, CD, CD) && (this.flagsWritten |= CD)
      }
      originStackHit() {
        return this.write(GC.k.Flags, GC.h.OriginStackHit, GC.h.OriginStackHit)
      }
    }
    const ci = {
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
      Ii = 1e3;

    function ii(DD, CD) {
      const cD = new Ci(CD);
      let ID = !1;
      cD.wy(DD.wy());
      const pD = (0, mI.Z)((() => {
          cD.wy(DD.wy())
        }), Ii),
        iD = () => {
          DD.checks.stackCheck() && (ID = !0)
        };
      (0, kp.i)(iD);
      const fD = () => {
        const CD = DD.checkPadCall();
        0 !== CD && cD.setFlags(CD)
      };
      return (0, Rp.g)(fD), {
        onInput: CD => {
          (function(DD) {
            switch (DD) {
              case GC.tb.KeyDown:
              case GC.tb.KeyUp:
              case GC.tb.MouseDown:
              case GC.tb.MouseUp:
              case GC.tb.Wheel:
              case GC.tb.TouchStart:
              case GC.tb.TouchEnd:
              case GC.tb.TouchButton:
              case GC.tb.PadAction:
                return !0;
              default:
                return !1
            }
          })(CD) && DD.checks.stackCheck() && (ID = !0)
        },
        onSend: iD,
        beforeFrame: () => {
          ID && cD.originStackHit() && (ID = !1)
        },
        onEvent: CD => {
          const ID = DD.checkEvent(CD);
          cD.value(GC.k.ProbeUsedProp, DD.usedProp()), 0 !== ID && cD.setFlags(ID)
        },
        stop: () => {
          (0, mI.ab)(pD), (0, kp.e)(iD), (0, Rp.c)(fD)
        }
      }
    }
    let fi;
    const bi = [1, "length", 2, void 0, null, 3, 0, "v", "c3RhY2", "cw==", 1e5, "a", 5, "b", 4, 240, "f", 89, "e", 1023, 208, 65536, 26, 8, 10, 55296, 56320, 6, 12, 63, 128, 192, "c", "Invalid byte index", 255, 224, 198, 31, "Invalid continuation byte", 15, 7, 18, !1, 148, "h", 11, "i", 36, "stack", "name", "q", 33554432, 67108864, 222, "g", 180, 183, 197, "d", 9, 216, 137, 33, 94, 229, 131, 56319, 54, 64512, 56, 65535, 110, 136, 57343, "Lone s", "urroga", "te U+", 16, " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 220, 46, 191, 65, 2048, 248, 1114111, "Invalid UTF-8 detected", 176, "3.0.0", "undefi", "ned", !0, "=", ";", " ", 74, "r", "s", 60, "s=", 62, 129, 14, 209, 203, 113, 236, 226, 32, 121, "string", 147, "j", 38, 130, 79, 22, 106, "functi", "on", 167, "protot", "ype", "decode", 156, "5", "I=", "eTR5bm", "o", "t", "F", "pd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "None", 188, "En", "k", "tOverw", "ritten", "plete", "p"];

    function Qi() {}

    function wi() {
      wi = function() {}
    }
    fi = function(DD) {
      let CD = arguments[bi[1]] > bi[0] && arguments[bi[0]] !== bi[3] ? arguments[bi[0]] : () => bi[4],
        cD = arguments[bi[1]] > bi[2] && arguments[bi[2]] !== bi[3] ? arguments[bi[2]] : bi[4],
        ID = arguments[bi[1]] > bi[5] && arguments[bi[5]] !== bi[3] ? arguments[bi[5]] : "";
      const pD = window,
        iD = (bi[6], mI[bi[7]])("RXJyb3" + bi[133]),
        fD = (bi[6], mI[bi[7]])(bi[8] + bi[106]),
        bD = (bi[6], mI[bi[7]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        wD = (bi[6], mI[bi[7]])(bi[8] + "tUcmFjZUxpbWl0"),
        SD = (bi[6], mI[bi[7]])("bmF0aXZl"),
        BD = [(bi[6], mI[bi[7]])("bWFpbi5qcw=="), (bi[6], mI[bi[7]])("aW5kZXguanM="), (bi[6], mI[bi[7]])("dXNlcnNjcmlwdA=="), (bi[6], mI[bi[7]])("Y29udGVudC5q" + bi[9]), (bi[6], mI[bi[7]])("b3B0aW9ucy5q" + bi[9]), (bi[6], mI[bi[7]])("cG9wdXAuanM="), (bi[6], mI[bi[7]])("LnVzZXIuanM="), (bi[6], mI[bi[7]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        yD = (...DD) => {
          DD[bi[1]] = bi[0];
          const CD = pD[iD],
            cD = CD;
          cD[wD] < bi[10] && (cD[wD] = bi[10]);
          const ID = "string" === typeof(yD = (new CD)[fD]) ? yD : `${yD}`,
            QD = {},
            SD = cD[bD];
          var yD;
          if (typeof SD === bi[125] + bi[126]) {
            function ZD(...DD) {
              wi(DD[bi[1]] = bi[6], DD[bi[16]] = function(...CD) {
                return wi(CD[bi[1]] = bi[2], CD[bi[11]] = [], CD[bi[5]] = CD[bi[6]].length, CD[bi[6]].sort(((DD, CD) => DD - CD)), DD[bi[0]](CD[bi[11]], [], bi[6], CD[bi[5]], CD[bi[6]], CD[bi[0]])), CD[bi[11]]
              }, DD[bi[0]] = function(...CD) {
                if (wi(CD[bi[1]] = bi[27], CD[bi[15]] = bi[4]), !(CD[bi[12]] < bi[6])) {
                  if (CD[bi[12]] === bi[6]) return CD[bi[6]].push(CD[bi[0]]);
                  for (CD[bi[13]] = CD[bi[2]]; CD[bi[13]] < CD[bi[5]] && !(CD[bi[14]][CD[bi[13]]] > CD[bi[12]]); CD[bi[13]]++) CD[bi[13]] > CD[bi[2]] && CD[bi[14]][CD[bi[13]]] === CD[bi[14]][CD[bi[13]] - bi[0]] || wi(CD[bi[15]] = Array.from(CD[bi[0]]), CD[bi[15]].push(CD[bi[14]][CD[bi[13]]]), DD[bi[0]](CD[bi[6]], CD[bi[15]], CD[bi[13]] + bi[0], CD[bi[5]], CD[bi[14]], CD[bi[12]] - CD[bi[14]][CD[bi[13]]]))
                }
              }, console.log(DD[bi[16]]))
            }
            "UJ4xxK" in Qi && ZD(), (bi[6], mI[bi[50]])(SD, CD, [QD])
          }
          const MD = QD[fD],
            tD = DD[bi[6]] ? BD[bi[1]] : BD[bi[1]] - bi[0];
          for (let oD = bi[6]; oD < tD; oD++) {
            function vD() {
              var DD = function(...DD) {
                wi(DD[bi[1]] = bi[0], this.LB = DD[bi[6]], this.length = bi[6], this.map = {}, this.head = bi[4], this.tail = bi[4])
              };
              wi(DD.prototype.get = function(...DD) {
                var CD;
                return wi(DD[bi[1]] = bi[0], CD = this.map[DD[bi[6]]]), CD ? (this.remove(CD), this.insert(CD.key, CD.val), CD.val) : -bi[0]
              }, DD.prototype.put = function(...DD) {
                wi(DD[bi[1]] = bi[2], this.map[DD[bi[6]]] ? (this.remove(this.map[DD[bi[6]]]), this.insert(DD[bi[6]], DD[bi[0]])) : this.length === this.LB ? (this.remove(this.head), this.insert(DD[bi[6]], DD[bi[0]])) : (this.insert(DD[bi[6]], DD[bi[0]]), this.length++))
              }, DD.prototype.remove = function(DD) {
                var CD, cD = DD.prev;
                (CD = DD.next) && (CD.prev = cD), cD && (cD.next = CD), this.head === DD && (this.head = CD), this.tail === DD && (this.tail = cD), delete this.map[DD.key]
              }, DD.prototype.insert = function(...DD) {
                wi(DD[bi[1]] = bi[2], DD[bi[11]] = new List(DD[bi[6]], DD[bi[0]]), this.tail ? (this.tail.next = DD[bi[11]], DD[bi[11]].prev = this.tail, this.tail = DD[bi[11]]) : (this.tail = DD[bi[11]], this.head = DD[bi[11]]), this.map[DD[bi[6]]] = DD[bi[11]])
              }, console.log(DD))
            }
            if ("OJ_lDd" in Qi && vD(), hp(ID, BD[oD])) {
              function ND() {
                ! function(...DD) {
                  function CD(...DD) {
                    for (wi(DD[bi[1]] = bi[0], DD[bi[5]] = [], DD[bi[2]] = bi[6], DD[-bi[17]] = DD[bi[6]].length, DD[bi[14]] = bi[3], DD[bi[18]] = bi[3]); DD[bi[2]] < DD[-bi[17]];) wi(DD[bi[14]] = DD[bi[6]].charCodeAt(DD[bi[2]]++), DD[bi[14]] >= bi[25] && DD[bi[14]] <= bi[66] && DD[bi[2]] < DD[-bi[17]] ? (DD[bi[18]] = DD[bi[6]].charCodeAt(DD[bi[2]]++), (DD[bi[18]] & bi[68]) == bi[26] ? DD[bi[5]].push(((DD[bi[14]] & bi[19]) << bi[24]) + (DD[bi[18]] & bi[19]) + bi[21]) : (DD[bi[5]].push(DD[bi[14]]), DD[bi[2]]--)) : DD[bi[5]].push(DD[bi[14]]));
                    return DD[bi[5]]
                  }

                  function cD(DD) {
                    if (DD >= bi[25] && DD <= bi[73]) throw Error(bi[74] + bi[75] + bi[76] + DD.toString(bi[77]).toUpperCase() + (bi[78] + bi[79] + bi[80] + bi[81]))
                  }

                  function ID(...CD) {
                    return CD[bi[1]] = bi[2], DD[bi[23]](CD[bi[6]] >> CD[bi[0]] & bi[29] | bi[30])
                  }

                  function pD(...CD) {
                    return CD[bi[1]] = bi[0], (CD[bi[6]] & bi[82]) == bi[6] ? DD[bi[23]](CD[bi[6]]) : (CD[bi[11]] = "", (CD[bi[6]] & bi[83]) == bi[6] ? CD[bi[11]] = DD[bi[23]](CD[bi[6]] >> bi[27] & bi[37] | bi[31]) : (CD[bi[6]] & bi[84]) == bi[6] ? wi(cD(CD[bi[6]]), CD[bi[11]] = DD[bi[23]](CD[bi[6]] >> bi[28] & bi[39] | bi[35]), CD[bi[11]] += ID(CD[bi[6]], bi[27])) : (CD[bi[6]] & bi[85]) == bi[6] && wi(CD[bi[11]] = DD[bi[23]](CD[bi[6]] >> bi[41] & bi[40] | bi[15]), CD[bi[11]] += ID(CD[bi[6]], bi[28]), CD[bi[11]] += ID(CD[bi[6]], bi[27])), CD[bi[11]] += DD[bi[23]](CD[bi[6]] & bi[29] | bi[30]), CD[bi[11]])
                  }

                  function iD() {
                    var CD;
                    if (DD[bi[13]] >= DD[bi[32]]) throw Error(bi[33]);
                    if (wi(CD = DD[bi[14]][DD[bi[13]]] & bi[34], DD[bi[13]]++), (CD & bi[31]) == bi[30]) return CD & bi[29];
                    throw Error(bi[38])
                  }

                  function fD(...CD) {
                    if (wi(CD[bi[1]] = bi[6], CD[bi[13]] = bi[3], CD[bi[30]] = bi[3], CD[bi[2]] = bi[3], CD[bi[18]] = bi[3], CD[bi[36]] = bi[3]), DD[bi[13]] > DD[bi[32]]) throw Error(bi[33]);
                    if (DD[bi[13]] == DD[bi[32]]) return bi[42];
                    if (wi(CD[bi[13]] = DD[bi[14]][DD[bi[13]]] & bi[34], DD[bi[13]]++), (CD[bi[13]] & bi[30]) == bi[6]) return CD[bi[13]];
                    if ((CD[bi[13]] & bi[35]) == bi[31]) {
                      if (wi(CD[bi[30]] = iD(), CD[bi[36]] = (CD[bi[13]] & bi[37]) << bi[27] | CD[bi[30]]), CD[bi[36]] >= bi[30]) return CD[bi[36]];
                      throw Error(bi[38])
                    }
                    if ((CD[bi[13]] & bi[15]) == bi[35]) {
                      if (wi(CD[bi[30]] = iD(), CD[bi[2]] = iD(), CD[bi[36]] = (CD[bi[13]] & bi[39]) << bi[28] | CD[bi[30]] << bi[27] | CD[bi[2]]), CD[bi[36]] >= bi[90]) return cD(CD[bi[36]]), CD[bi[36]];
                      throw Error(bi[38])
                    }
                    if ((CD[bi[13]] & bi[91]) == bi[15] && (wi(CD[bi[30]] = iD(), CD[bi[2]] = iD(), CD[bi[18]] = iD(), CD[bi[36]] = (CD[bi[13]] & bi[40]) << bi[41] | CD[bi[30]] << bi[28] | CD[bi[2]] << bi[27] | CD[bi[18]]), CD[bi[36]] >= bi[21] && CD[bi[36]] <= bi[92])) return CD[bi[36]];
                    throw Error(bi[93])
                  }
                  wi(DD[bi[1]] = bi[0], DD[bi[23]] = String.fromCharCode), wi(DD[bi[14]] = bi[3], DD[bi[32]] = bi[3], DD[bi[13]] = bi[3]), wi(DD[bi[6]].version = bi[95], DD[bi[6]].encode = function(DD) {
                    var cD, ID, iD, fD, bD = CD(DD);
                    for (wi(cD = bD.length, ID = -bi[0], iD = void 0, fD = ""); ++ID < cD;) wi(iD = bD[ID], fD += pD(iD));
                    return fD
                  }, DD[bi[6]].decode = function(...cD) {
                    for (wi(cD[bi[1]] = bi[0], DD[bi[14]] = CD(cD[bi[6]]), DD[bi[32]] = DD[bi[14]].length, DD[bi[13]] = bi[6], cD[bi[0]] = [], cD[bi[2]] = bi[3]);
                      (cD[bi[2]] = fD()) !== bi[42];) cD[bi[0]].push(cD[bi[2]]);
                    return function(...CD) {
                      for (wi(CD[bi[1]] = bi[0], CD[bi[0]] = CD[bi[6]].length, CD[bi[20]] = -bi[0], CD[bi[5]] = bi[3], CD[bi[22]] = ""); ++CD[bi[20]] < CD[bi[0]];) CD[bi[5]] = CD[bi[6]][CD[bi[20]]], CD[bi[5]] > bi[70] && wi(CD[bi[5]] -= bi[21], CD[bi[22]] += DD[bi[23]](CD[bi[5]] >>> bi[24] & bi[19] | bi[25]), CD[bi[5]] = bi[26] | CD[bi[5]] & bi[19]), CD[bi[22]] += DD[bi[23]](CD[bi[5]]);
                      return CD[bi[22]]
                    }(cD[bi[0]])
                  })
                }(typeof exports === bi[96] + bi[97] ? this.utf8 = {} : exports)
              }
              return "zNiBWW" + bi[58] in Qi && ND(), {
                [bi[48]]: ID,
                [bi[49]]: BD[oD]
              }
            }
            if (typeof MD === bi[117] && hp(MD, BD[oD])) {
              function gD(...DD) {
                wi(DD[bi[1]] = bi[6], DD[bi[47]] = function(...DD) {
                  if (wi(DD[bi[1]] = bi[0], DD[bi[23]] = DD[bi[6]].length), DD[bi[23]] < bi[2]) return bi[6];
                  if (wi(DD[bi[43]] = Math.max(...DD[bi[6]]), DD[bi[5]] = Math.min(...DD[bi[6]])), DD[bi[43]] === DD[bi[5]]) return bi[6];
                  for (wi(DD[-bi[29]] = Array(DD[bi[23]] - bi[0]).fill(Number.MAX_SAFE_INTEGER), DD[bi[18]] = Array(DD[bi[23]] - bi[0]).fill(Number.MIN_SAFE_INTEGER), DD[bi[27]] = Math.ceil((DD[bi[43]] - DD[bi[5]]) / (DD[bi[23]] - bi[0])), DD[bi[40]] = bi[6]), DD[bi[44]] = bi[6]; DD[bi[44]] < DD[bi[23]]; DD[bi[44]]++) DD[bi[6]][DD[bi[44]]] !== DD[bi[5]] && DD[bi[6]][DD[bi[44]]] !== DD[bi[43]] && wi(DD[bi[40]] = Math.floor((DD[bi[6]][DD[bi[44]]] - DD[bi[5]]) / DD[bi[27]]), DD[-bi[29]][DD[bi[40]]] = Math.min(DD[-bi[29]][DD[bi[40]]], DD[bi[6]][DD[bi[44]]]), DD[bi[18]][DD[bi[40]]] = Math.max(DD[bi[18]][DD[bi[40]]], DD[bi[6]][DD[bi[44]]]));
                  for (wi(DD[bi[46]] = Number.MIN_SAFE_INTEGER, DD[bi[24]] = DD[bi[5]]), DD[bi[45]] = bi[6]; DD[bi[45]] < DD[bi[23]] - bi[0]; DD[bi[45]]++) DD[-bi[29]][DD[bi[45]]] === Number.MAX_SAFE_INTEGER && DD[bi[18]][DD[bi[45]]] === Number.MIN_SAFE_INTEGER || wi(DD[bi[46]] = Math.max(DD[bi[46]], DD[-bi[29]][DD[bi[45]]] - DD[bi[24]]), DD[bi[24]] = DD[bi[18]][DD[bi[45]]]);
                  return DD[bi[46]] = Math.max(DD[bi[46]], DD[bi[43]] - DD[bi[24]]), DD[bi[46]]
                }, console.log(DD[bi[47]]))
              }
              return "EoxNS2" + bi[119] in Qi && gD(), {
                [bi[48]]: MD,
                [bi[49]]: BD[oD]
              }
            }
          }
          return bi[4]
        },
        MD = (...DD) => (DD[bi[1]] = bi[0], "djabHk" + bi[50] in Qi && function(...DD) {
          function CD(...DD) {
            return DD[bi[1]] = bi[0], DD[bi[6]][bi[0]] * bi[52] + (DD[bi[6]][bi[6]] < bi[6] ? bi[51] | DD[bi[6]][bi[6]] : DD[bi[6]][bi[6]])
          }

          function cD(...DD) {
            switch (DD[bi[1]] = bi[0], ((DD[bi[6]] & bi[51]) !== bi[6]) * bi[0] + (DD[bi[6]] < bi[6]) * bi[2]) {
              case bi[6]:
                return [DD[bi[6]] % bi[51], Math.trunc(DD[bi[6]] / bi[52])];
              case bi[0]:
                return [DD[bi[6]] % bi[51] - bi[51], Math.trunc(DD[bi[6]] / bi[52]) + bi[0]];
              case bi[2]:
                return [((DD[bi[6]] + bi[51]) % bi[51] + bi[51]) % bi[51], Math.round(DD[bi[6]] / bi[52])];
              case bi[5]:
                return [DD[bi[6]] % bi[51], Math.trunc(DD[bi[6]] / bi[52])]
            }
          }
          DD[bi[1]] = bi[6], wi(DD[bi[53]] = CD([bi[2], bi[14]]), DD[bi[32]] = CD([bi[0], bi[2]]), DD[bi[2]] = DD[bi[53]] + DD[bi[32]], DD[bi[5]] = DD[bi[2]] - DD[bi[32]], DD[bi[16]] = DD[bi[5]] * bi[2], DD[bi[54]] = DD[bi[16]] / bi[2], console.log(cD(DD[bi[2]])), console.log(cD(DD[bi[5]])), console.log(cD(DD[bi[16]])), console.log(cD(DD[bi[54]])))
        }(), yD(DD[bi[6]]) !== bi[4]);
      let tD = bi[4],
        ZD = bi[4];
      const oD = (...DD) => {
        DD[bi[1]] = bi[0];
        try {
          function CD(...DD) {
            wi(DD[bi[1]] = bi[6], DD[bi[60]] = function(...DD) {
              if (wi(DD[bi[1]] = bi[0], DD[-bi[55]] = DD[bi[6]].length), DD[-bi[55]] < bi[2]) return bi[6];
              if (wi(DD[bi[56]] = Math.max(...DD[bi[6]]), DD[-bi[57]] = Math.min(...DD[bi[6]])), DD[bi[56]] === DD[-bi[57]]) return bi[6];
              for (wi(DD[bi[58]] = Array(DD[-bi[55]] - bi[0]).fill(Number.MAX_SAFE_INTEGER), DD[bi[18]] = Array(DD[-bi[55]] - bi[0]).fill(Number.MIN_SAFE_INTEGER), DD[bi[16]] = Math.ceil((DD[bi[56]] - DD[-bi[57]]) / (DD[-bi[55]] - bi[0])), DD[bi[40]] = bi[6]), DD[bi[44]] = bi[6]; DD[bi[44]] < DD[-bi[55]]; DD[bi[44]]++) DD[bi[6]][DD[bi[44]]] !== DD[-bi[57]] && DD[bi[6]][DD[bi[44]]] !== DD[bi[56]] && wi(DD[bi[40]] = Math.floor((DD[bi[6]][DD[bi[44]]] - DD[-bi[57]]) / DD[bi[16]]), DD[bi[58]][DD[bi[40]]] = Math.min(DD[bi[58]][DD[bi[40]]], DD[bi[6]][DD[bi[44]]]), DD[bi[18]][DD[bi[40]]] = Math.max(DD[bi[18]][DD[bi[40]]], DD[bi[6]][DD[bi[44]]]));
              for (wi(DD[bi[59]] = Number.MIN_SAFE_INTEGER, DD[bi[24]] = DD[-bi[57]]), DD[bi[45]] = bi[6]; DD[bi[45]] < DD[-bi[55]] - bi[0]; DD[bi[45]]++) DD[bi[58]][DD[bi[45]]] === Number.MAX_SAFE_INTEGER && DD[bi[18]][DD[bi[45]]] === Number.MIN_SAFE_INTEGER || wi(DD[bi[59]] = Math.max(DD[bi[59]], DD[bi[58]][DD[bi[45]]] - DD[bi[24]]), DD[bi[24]] = DD[bi[18]][DD[bi[45]]]);
              return DD[bi[59]] = Math.max(DD[bi[59]], DD[bi[56]] - DD[bi[24]]), DD[bi[59]]
            }, console.log(DD[bi[60]]))
          }
          return "YExRmJ" + bi[104] in Qi && CD(), DD[bi[6]]()
        } catch {
          function cD(...DD) {
            DD[bi[1]] = bi[6]
          }
          return "yiLJ7f" in Qi && cD(), bi[98]
        }
      };
      let vD = bi[42];
      const ND = () => {
          if ("vQq4Ga" + bi[136] in Qi && function(...DD) {
              wi(DD[bi[1]] = bi[6], DD[bi[65]] = function(...DD) {
                for (wi(DD[bi[1]] = bi[0], DD[bi[64]] = bi[6], DD[bi[2]] = {}, DD[bi[5]] = bi[6], DD[bi[14]] = bi[6], DD[bi[12]] = bi[6], DD[bi[63]] = DD[bi[6]].length), DD[-bi[62]] = bi[6]; DD[-bi[62]] < DD[bi[63]]; DD[-bi[62]]++) {
                  for (wi(DD[bi[2]] = {}, DD[bi[5]] = bi[6], DD[bi[14]] = bi[0]), DD[bi[23]] = DD[-bi[62]] + bi[0]; DD[bi[23]] < DD[bi[63]]; DD[bi[23]]++) DD[bi[6]][DD[-bi[62]]].x !== DD[bi[6]][DD[bi[23]]].x || DD[bi[6]][DD[-bi[62]]].y !== DD[bi[6]][DD[bi[23]]].y ? (DD[bi[6]][DD[-bi[62]]].y === DD[bi[6]][DD[bi[23]]].y ? DD[bi[12]] = Number.MAX_SAFE_INTEGER : DD[bi[12]] = (DD[bi[6]][DD[-bi[62]]].x - DD[bi[6]][DD[bi[23]]].x) / (DD[bi[6]][DD[-bi[62]]].y - DD[bi[6]][DD[bi[23]]].y), DD[bi[2]][DD[bi[12]]] || (DD[bi[2]][DD[bi[12]]] = bi[6]), wi(DD[bi[2]][DD[bi[12]]]++, DD[bi[5]] = Math.max(DD[bi[5]], DD[bi[2]][DD[bi[12]]]))) : DD[bi[14]]++;
                  wi(DD[bi[5]] += DD[bi[14]], DD[bi[64]] = Math.max(DD[bi[64]], DD[bi[5]]))
                }
                return DD[bi[64]]
              }, console.log(DD[bi[65]]))
            }(), !vD && (bi[6], mI.x)()) {
            function DD() {
              ! function(...DD) {
                function CD(...DD) {
                  for (wi(DD[bi[1]] = bi[0], DD[-bi[69]] = [], DD[bi[2]] = bi[6], DD[bi[5]] = DD[bi[6]].length, DD[bi[58]] = bi[3], DD[bi[67]] = bi[3]); DD[bi[2]] < DD[bi[5]];) wi(DD[bi[58]] = DD[bi[6]].charCodeAt(DD[bi[2]]++), DD[bi[58]] >= bi[25] && DD[bi[58]] <= bi[66] && DD[bi[2]] < DD[bi[5]] ? (DD[bi[67]] = DD[bi[6]].charCodeAt(DD[bi[2]]++), (DD[bi[67]] & bi[68]) == bi[26] ? DD[-bi[69]].push(((DD[bi[58]] & bi[19]) << bi[24]) + (DD[bi[67]] & bi[19]) + bi[21]) : (DD[-bi[69]].push(DD[bi[58]]), DD[bi[2]]--)) : DD[-bi[69]].push(DD[bi[58]]));
                  return DD[-bi[69]]
                }

                function cD(DD) {
                  if (DD >= bi[25] && DD <= bi[73]) throw Error(bi[74] + bi[75] + bi[76] + DD.toString(bi[77]).toUpperCase() + (bi[78] + bi[79] + bi[80] + bi[81]))
                }

                function ID(...CD) {
                  return CD[bi[1]] = bi[2], DD[-bi[72]](CD[bi[6]] >> CD[bi[0]] & bi[29] | bi[30])
                }

                function pD(CD) {
                  var pD;
                  return (CD & bi[82]) == bi[6] ? DD[-bi[72]](CD) : (pD = "", (CD & bi[83]) == bi[6] ? pD = DD[-bi[72]](CD >> bi[27] & bi[37] | bi[31]) : (CD & bi[84]) == bi[6] ? wi(cD(CD), pD = DD[-bi[72]](CD >> bi[28] & bi[39] | bi[35]), pD += ID(CD, bi[27])) : (CD & bi[85]) == bi[6] && wi(pD = DD[-bi[72]](CD >> bi[41] & bi[40] | bi[15]), pD += ID(CD, bi[28]), pD += ID(CD, bi[27])), pD += DD[-bi[72]](CD & bi[29] | bi[30]))
                }

                function iD(...CD) {
                  if (CD[bi[1]] = bi[6], DD[bi[2]] >= DD[bi[32]]) throw Error(bi[33]);
                  if (wi(CD[bi[11]] = DD[-bi[88]][DD[bi[2]]] & bi[34], DD[bi[2]]++), (CD[bi[11]] & bi[31]) == bi[30]) return CD[bi[11]] & bi[29];
                  throw Error(bi[38])
                }

                function fD(...CD) {
                  if (wi(CD[bi[1]] = bi[6], CD[bi[11]] = bi[3], CD[bi[0]] = bi[3], CD[bi[32]] = bi[3], CD[bi[58]] = bi[3], CD[-bi[89]] = bi[3]), DD[bi[2]] > DD[bi[32]]) throw Error(bi[33]);
                  if (DD[bi[2]] == DD[bi[32]]) return bi[42];
                  if (wi(CD[bi[11]] = DD[-bi[88]][DD[bi[2]]] & bi[34], DD[bi[2]]++), (CD[bi[11]] & bi[30]) == bi[6]) return CD[bi[11]];
                  if ((CD[bi[11]] & bi[35]) == bi[31]) {
                    if (wi(CD[bi[0]] = iD(), CD[-bi[89]] = (CD[bi[11]] & bi[37]) << bi[27] | CD[bi[0]]), CD[-bi[89]] >= bi[30]) return CD[-bi[89]];
                    throw Error(bi[38])
                  }
                  if ((CD[bi[11]] & bi[15]) == bi[35]) {
                    if (wi(CD[bi[0]] = iD(), CD[bi[32]] = iD(), CD[-bi[89]] = (CD[bi[11]] & bi[39]) << bi[28] | CD[bi[0]] << bi[27] | CD[bi[32]]), CD[-bi[89]] >= bi[90]) return cD(CD[-bi[89]]), CD[-bi[89]];
                    throw Error(bi[38])
                  }
                  if ((CD[bi[11]] & bi[91]) == bi[15] && (wi(CD[bi[0]] = iD(), CD[bi[32]] = iD(), CD[bi[58]] = iD(), CD[-bi[89]] = (CD[bi[11]] & bi[40]) << bi[41] | CD[bi[0]] << bi[28] | CD[bi[32]] << bi[27] | CD[bi[58]]), CD[-bi[89]] >= bi[21] && CD[-bi[89]] <= bi[92])) return CD[-bi[89]];
                  throw Error(bi[93])
                }
                wi(DD[bi[1]] = bi[0], DD[-bi[72]] = String.fromCharCode), wi(DD[-bi[88]] = bi[3], DD[bi[32]] = bi[3], DD[bi[2]] = bi[3]), wi(DD[bi[6]].version = bi[95], DD[bi[6]].encode = function(...DD) {
                  for (wi(DD[bi[1]] = bi[0], DD[-bi[86]] = CD(DD[bi[6]]), DD[bi[87]] = DD[-bi[86]].length, DD[bi[32]] = -bi[0], DD[bi[14]] = bi[3], DD[bi[12]] = ""); ++DD[bi[32]] < DD[bi[87]];) wi(DD[bi[14]] = DD[-bi[86]][DD[bi[32]]], DD[bi[12]] += pD(DD[bi[14]]));
                  return DD[bi[12]]
                }, DD[bi[6]].decode = function(...cD) {
                  for (wi(cD[bi[1]] = bi[0], DD[-bi[88]] = CD(cD[bi[6]]), DD[bi[32]] = DD[-bi[88]].length, DD[bi[2]] = bi[6], cD[bi[94]] = [], cD[bi[13]] = bi[3]);
                    (cD[bi[13]] = fD()) !== bi[42];) cD[bi[94]].push(cD[bi[13]]);
                  return function(...CD) {
                    for (wi(CD[bi[1]] = bi[0], CD[bi[11]] = CD[bi[6]].length, CD[bi[2]] = -bi[0], CD[bi[32]] = bi[3], CD[-bi[71]] = ""); ++CD[bi[2]] < CD[bi[11]];) CD[bi[32]] = CD[bi[6]][CD[bi[2]]], CD[bi[32]] > bi[70] && wi(CD[bi[32]] -= bi[21], CD[-bi[71]] += DD[-bi[72]](CD[bi[32]] >>> bi[24] & bi[19] | bi[25]), CD[bi[32]] = bi[26] | CD[bi[32]] & bi[19]), CD[-bi[71]] += DD[-bi[72]](CD[bi[32]]);
                    return CD[-bi[71]]
                  }(cD[bi[94]])
                })
              }(typeof exports === bi[96] + bi[97] ? this.utf8 = {} : exports)
            }
            "QssCWV" + bi[58] in Qi && DD(), vD = bi[98]
          }
        },
        gD = DD => {
          try {
            function CD(...DD) {
              DD[bi[1]] = bi[6]
            }
            return "ihOTOt" in Qi && CD(), DD()
          } catch {
            return bi[3]
          }
        },
        XD = (...DD) => {
          DD[bi[1]] = bi[0], "oHVdH3" in Qi && function(...DD) {
            function CD(...DD) {
              return DD[bi[1]] = bi[0], DD[bi[6]][bi[0]] * bi[52] + (DD[bi[6]][bi[6]] < bi[6] ? bi[51] | DD[bi[6]][bi[6]] : DD[bi[6]][bi[6]])
            }

            function cD(...DD) {
              switch (DD[bi[1]] = bi[0], ((DD[bi[6]] & bi[51]) !== bi[6]) * bi[0] + (DD[bi[6]] < bi[6]) * bi[2]) {
                case bi[6]:
                  return [DD[bi[6]] % bi[51], Math.trunc(DD[bi[6]] / bi[52])];
                case bi[0]:
                  return [DD[bi[6]] % bi[51] - bi[51], Math.trunc(DD[bi[6]] / bi[52]) + bi[0]];
                case bi[2]:
                  return [((DD[bi[6]] + bi[51]) % bi[51] + bi[51]) % bi[51], Math.round(DD[bi[6]] / bi[52])];
                case bi[5]:
                  return [DD[bi[6]] % bi[51], Math.trunc(DD[bi[6]] / bi[52])]
              }
            }
            DD[bi[1]] = bi[6], wi(DD[bi[11]] = CD([bi[2], bi[14]]), DD[bi[61]] = CD([bi[0], bi[2]]), DD[bi[2]] = DD[bi[11]] + DD[bi[61]], DD[bi[5]] = DD[bi[2]] - DD[bi[61]], DD[bi[18]] = DD[bi[5]] * bi[2], DD[bi[12]] = DD[bi[18]] / bi[2], console.log(cD(DD[bi[2]])), console.log(cD(DD[bi[5]])), console.log(cD(DD[bi[18]])), console.log(cD(DD[bi[12]])))
          }();
          try {
            return DD[bi[6]](), bi[98]
          } catch {
            return bi[42]
          }
        },
        mD = (bi[6], mI[bi[7]])("a29qbzYzb25i"),
        nD = (bi[6], mI[bi[103]])(bi[4]);
      let OD = bi[4],
        PD = bi[42],
        HD = bi[42];
      const UD = (bi[6], mI[bi[103]])(bi[4]);
      let xD = bi[6];
      const qD = (bi[6], mI[bi[103]])(bi[4]);
      let JD = bi[6];
      const KD = (bi[6], mI[bi[103]])(bi[4]);
      let aD = bi[42],
        VD = bi[42];
      const zD = (...CD) => {
          if (CD[bi[1]] = bi[2], "KkZzwW" + bi[104] in Qi && function(...DD) {
              DD[bi[1]] = bi[6]
            }(), CD[bi[6]] === DD) {
            function pD(...DD) {
              DD[bi[1]] = bi[6];
              const CD = require("path"),
                {
                  version: cD
                } = require("../../package"),
                {
                  version: ID
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: pD
                } = require("@redacted/components/package"),
                {
                  sdkVersion: iD
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), CD.resolve(__dirname, "../redacted.js")
            }
            if ("Ldtlra" + bi[132] in Qi && pD(), OD === bi[4]) OD = typeof CD[bi[0]] === bi[147] ? CD[bi[0]] : -bi[0];
            else {
              function iD(...DD) {
                wi(DD[bi[1]] = bi[6], DD[bi[11]] = function(CD, cD) {
                  var ID, pD = [];
                  return wi(ID = CD.length, CD.sort(((DD, CD) => DD - CD)), DD[-bi[107]](pD, [], bi[6], ID, CD, cD)), pD
                }, DD[-bi[107]] = function(...CD) {
                  if (wi(CD[bi[1]] = bi[27], CD[bi[108]] = bi[4]), !(CD[bi[12]] < bi[6])) {
                    if (CD[bi[12]] === bi[6]) return CD[bi[6]].push(CD[bi[0]]);
                    for (CD[bi[40]] = CD[bi[2]]; CD[bi[40]] < CD[bi[5]] && !(CD[bi[14]][CD[bi[40]]] > CD[bi[12]]); CD[bi[40]]++) CD[bi[40]] > CD[bi[2]] && CD[bi[14]][CD[bi[40]]] === CD[bi[14]][CD[bi[40]] - bi[0]] || wi(CD[bi[108]] = Array.from(CD[bi[0]]), CD[bi[108]].push(CD[bi[14]][CD[bi[40]]]), DD[-bi[107]](CD[bi[6]], CD[bi[108]], CD[bi[40]] + bi[0], CD[bi[5]], CD[bi[14]], CD[bi[12]] - CD[bi[14]][CD[bi[40]]]))
                  }
                }, console.log(DD[bi[11]]))
              }
              "K_G2AF" in Qi && iD(), PD = bi[98]
            }
            return
          }
          const cD = nD[CD[bi[6]]];
          if (!CD[bi[0]]) {
            function fD(...DD) {
              function CD() {}
              DD[bi[1]] = bi[6], wi(DD[-bi[59]] = function(...DD) {
                for (wi(DD[bi[1]] = bi[2], DD[bi[11]] = bi[6], DD[-bi[111]] = bi[6], DD[bi[32]] = new CD(bi[6]), DD[bi[58]] = DD[bi[32]], DD[bi[109]] = DD[bi[6]], DD[bi[110]] = DD[bi[0]]); DD[bi[109]] !== bi[4] || DD[bi[110]] !== bi[4];) wi(DD[-bi[111]] = (DD[bi[109]] ? DD[bi[109]].val : bi[6]) + (DD[bi[110]] ? DD[bi[110]].val : bi[6]) + DD[bi[11]], DD[bi[11]] = Math.floor(DD[-bi[111]] / bi[24]), DD[bi[58]].next = new CD(DD[-bi[111]] % bi[24]), DD[bi[58]] = DD[bi[58]].next, DD[bi[109]] = DD[bi[109]] ? DD[bi[109]].next : bi[4], DD[bi[110]] = DD[bi[110]] ? DD[bi[110]].next : bi[4]);
                return DD[bi[11]] && (DD[bi[58]].next = new CD(DD[bi[11]])), DD[bi[32]].next
              }, console.log(DD[-bi[59]]))
            }
            return "kBaYQn" in Qi && fD(), void(cD && (HD = bi[98]))
          }
          if (CD[bi[6]] !== mD) {
            function bD(...DD) {
              wi(DD[bi[1]] = bi[6], DD[bi[116]] = function(...CD) {
                return wi(CD[bi[1]] = bi[0], CD[bi[0]] = []), (CD[bi[6]] === bi[0] || CD[bi[6]] >= bi[14]) && DD[bi[112]](CD[bi[0]], [], CD[bi[6]], bi[6]), CD[bi[0]]
              }, DD[bi[112]] = function(...CD) {
                for (CD[bi[1]] = bi[14], CD[bi[14]] = CD[bi[5]]; CD[bi[14]] < CD[bi[2]]; CD[bi[14]]++) {
                  if (CD[bi[0]].length !== CD[bi[14]]) return;
                  for (CD[bi[113]] = bi[6]; CD[bi[113]] < CD[bi[2]]; CD[bi[113]]++) DD[bi[58]](CD[bi[0]], [CD[bi[14]], CD[bi[113]]]) && (wi(CD[bi[0]].push([CD[bi[14]], CD[bi[113]]]), DD[bi[112]](CD[bi[6]], CD[bi[0]], CD[bi[2]], CD[bi[14]] + bi[0])), CD[bi[0]].length === CD[bi[2]] && CD[bi[6]].push(DD[bi[114]](CD[bi[0]])), CD[bi[0]].pop())
                }
              }, DD[bi[114]] = function(...DD) {
                for (wi(DD[bi[1]] = bi[0], DD[bi[115]] = [], DD[bi[2]] = DD[bi[6]].length), DD[bi[5]] = bi[6]; DD[bi[5]] < DD[bi[2]]; DD[bi[5]]++)
                  for (DD[bi[115]][DD[bi[5]]] = "", DD[bi[58]] = bi[6]; DD[bi[58]] < DD[bi[2]]; DD[bi[58]]++) DD[bi[115]][DD[bi[5]]] += DD[bi[6]][DD[bi[5]]][bi[0]] === DD[bi[58]] ? "Q" : ".";
                return DD[bi[115]]
              }, DD[bi[58]] = function(DD, CD) {
                var cD, ID = DD.length;
                for (cD = bi[6]; cD < ID; cD++) {
                  if (DD[cD][bi[6]] === CD[bi[6]] || DD[cD][bi[0]] === CD[bi[0]]) return bi[42];
                  if (Math.abs((DD[cD][bi[6]] - CD[bi[6]]) / (DD[cD][bi[0]] - CD[bi[0]])) === bi[0]) return bi[42]
                }
                return bi[98]
              }, console.log(DD[bi[116]]))
            }
            return "haWnH_" in Qi && bD(), void(nD[CD[bi[6]]] = CD[bi[0]])
          }
          nD[CD[bi[6]]] = bi[98];
          const ID = typeof CD[bi[0]] === bi[117] ? CD[bi[0]] : "" + CD[bi[0]];
          if (!KD[ID])
            if ((bi[6], Tp.m)(ID)) VD = bi[98];
            else if ((bi[6], Tp[bi[135]])(ID)) {
            function QD(...DD) {
              DD[bi[1]] = bi[6]
            }
            if ("H3QgYg" in Qi && QD(), xD < 8) wi(KD[ID] = bi[98], UD[xD++] = ID, aD ||= (bi[6], Tp[bi[119]])(ID));
            else {
              function wD(...DD) {
                wi(DD[bi[1]] = bi[6], DD[-bi[67]] = function(...CD) {
                  return CD[bi[1]] = bi[2], DD[bi[18]]({}, CD[bi[6]], CD[bi[0]])
                }, DD[bi[18]] = function(...CD) {
                  if (wi(CD[bi[1]] = bi[5], CD[bi[5]] = {}), CD[bi[6]][CD[bi[0]] + CD[bi[2]]] !== bi[3]) return CD[bi[6]][CD[bi[0]] + CD[bi[2]]];
                  if (CD[bi[0]] === CD[bi[2]]) return bi[98];
                  for (CD[bi[13]] = bi[6]; CD[bi[13]] < CD[bi[0]].length; CD[bi[13]]++) CD[bi[5]][CD[bi[0]][CD[bi[13]]]] === bi[3] && (CD[bi[5]][CD[bi[0]][CD[bi[13]]]] = bi[6]), CD[bi[5]][CD[bi[2]][CD[bi[13]]]] === bi[3] && (CD[bi[5]][CD[bi[2]][CD[bi[13]]]] = bi[6]), wi(CD[bi[5]][CD[bi[0]][CD[bi[13]]]]++, CD[bi[5]][CD[bi[2]][CD[bi[13]]]]--);
                  for (CD[-bi[120]] in CD[bi[5]])
                    if (CD[bi[5]][CD[-bi[120]]] !== bi[6]) return CD[bi[6]][CD[bi[0]] + CD[bi[2]]] = bi[42], bi[42];
                  for (CD[-bi[121]] = bi[0]; CD[-bi[121]] < CD[bi[0]].length; CD[-bi[121]]++)
                    if (DD[bi[18]](CD[bi[6]], CD[bi[0]].substr(bi[6], CD[-bi[121]]), CD[bi[2]].substr(bi[6], CD[-bi[121]])) && DD[bi[18]](CD[bi[6]], CD[bi[0]].substr(CD[-bi[121]]), CD[bi[2]].substr(CD[-bi[121]])) || DD[bi[18]](CD[bi[6]], CD[bi[0]].substr(bi[6], CD[-bi[121]]), CD[bi[2]].substr(CD[bi[2]].length - CD[-bi[121]])) && DD[bi[18]](CD[bi[6]], CD[bi[0]].substr(CD[-bi[121]]), CD[bi[2]].substr(bi[6], CD[bi[2]].length - CD[-bi[121]]))) return CD[bi[6]][CD[bi[0]] + CD[bi[2]]] = bi[98], bi[98];
                  return CD[bi[6]][CD[bi[0]] + CD[bi[2]]] = bi[42], bi[42]
                }, console.log(DD[-bi[67]]))
              }
              "aYOLPr" in Qi && wD(), !aD && (bi[6], Tp[bi[119]])(ID) && wi(KD[ID] = bi[98], UD[8 - bi[0]] = ID, aD = bi[98])
            }
          } else {
            function SD() {
              var DD;

              function CD() {}
              wi(DD = function(...DD) {
                for (wi(DD[bi[1]] = bi[2], DD[bi[11]] = bi[6], DD[bi[5]] = bi[6], DD[bi[14]] = new CD(bi[6]), DD[bi[124]] = DD[bi[14]], DD[-bi[122]] = DD[bi[6]], DD[-bi[123]] = DD[bi[0]]); DD[-bi[122]] !== bi[4] || DD[-bi[123]] !== bi[4];) wi(DD[bi[5]] = (DD[-bi[122]] ? DD[-bi[122]].val : bi[6]) + (DD[-bi[123]] ? DD[-bi[123]].val : bi[6]) + DD[bi[11]], DD[bi[11]] = Math.floor(DD[bi[5]] / bi[24]), DD[bi[124]].next = new CD(DD[bi[5]] % bi[24]), DD[bi[124]] = DD[bi[124]].next, DD[-bi[122]] = DD[-bi[122]] ? DD[-bi[122]].next : bi[4], DD[-bi[123]] = DD[-bi[123]] ? DD[-bi[123]].next : bi[4]);
                return DD[bi[11]] && (DD[bi[124]].next = new CD(DD[bi[11]])), DD[bi[14]].next
              }, console.log(DD))
            }
            if ("us4KxU" in Qi && SD(), JD < 4) {
              function BD(...DD) {
                var CD;
                wi(DD[bi[1]] = bi[6], CD = function(...DD) {
                  wi(DD[bi[1]] = bi[0], this.LB = DD[bi[6]], this.length = bi[6], this.map = {}, this.head = bi[4], this.tail = bi[4])
                }, CD.prototype.get = function(...DD) {
                  var CD;
                  return wi(DD[bi[1]] = bi[0], CD = this.map[DD[bi[6]]]), CD ? (this.remove(CD), this.insert(CD.key, CD.val), CD.val) : -bi[0]
                }, CD.prototype.put = function(...DD) {
                  wi(DD[bi[1]] = bi[2], this.map[DD[bi[6]]] ? (this.remove(this.map[DD[bi[6]]]), this.insert(DD[bi[6]], DD[bi[0]])) : this.length === this.LB ? (this.remove(this.head), this.insert(DD[bi[6]], DD[bi[0]])) : (this.insert(DD[bi[6]], DD[bi[0]]), this.length++))
                }, CD.prototype.remove = function(DD) {
                  var CD, cD = DD.prev;
                  (CD = DD.next) && (CD.prev = cD), cD && (cD.next = CD), this.head === DD && (this.head = CD), this.tail === DD && (this.tail = cD), delete this.map[DD.key]
                }, CD.prototype.insert = function(...DD) {
                  wi(DD[bi[1]] = bi[2], DD[bi[11]] = new List(DD[bi[6]], DD[bi[0]]), this.tail ? (this.tail.next = DD[bi[11]], DD[bi[11]].prev = this.tail, this.tail = DD[bi[11]]) : (this.tail = DD[bi[11]], this.head = DD[bi[11]]), this.map[DD[bi[6]]] = DD[bi[11]])
                }, console.log(CD))
              }
              "yXFweL" in Qi && BD(), wi(KD[ID] = bi[98], qD[JD++] = ID)
            }
          }
        },
        jD = (bi[6], Gp[bi[54]])(DD),
        lD = jD ? jD.replaced : (() => {
          try {
            return pD[DD]
          } catch {
            return bi[3]
          }
        })();
      if (XD((() => {
          pD[DD] = zD
        })), typeof lD === bi[125] + bi[126]) {
        const DD = lD;
        XD((() => {
          DD(zD)
        }))
      }
      if (jD) {
        const CD = jD.reports;
        XD((() => {
          for (const cD in CD)(bi[6], mI[bi[50]])(mI[bi[137]], CD, [cD]) && cD !== DD && zD(cD, CD[cD])
        }))
      }
      const LD = jD ? bi[2] : bi[0];
      let TD = bi[42];
      const GD = (...CD) => (CD[bi[1]] = bi[6], PD ? bi[98] : (wi(CD[-bi[127]] = bi[42], TD = !XD((() => {
          CD[-bi[127]] = pD[DD] !== zD
        }))), CD[-bi[127]])),
        RD = oD(((...CD) => {
          CD[bi[1]] = bi[6];
          const cD = (bi[6], mI.N)(pD, DD);
          return (cD === bi[4] || cD === void bi[6] ? void bi[6] : cD.configurable) !== bi[42] || typeof cD[bi[149]] !== bi[125] + bi[126] || OD !== LD
        })),
        kD = {},
        dD = () => {
          try {
            return navigator[bi[144] + "tSub"]
          } catch {
            return kD
          }
        },
        YD = dD(),
        WD = cD,
        sD = WD === bi[4] ? ((...DD) => {
          DD[bi[1]] = bi[6];
          const CD = bi[105];
          wi(DD[bi[11]] = bi[42], DD[bi[13]] = CD - bi[0]);
          const cD = TextDecoder[bi[128] + bi[129]][bi[130]],
            ID = function() {
              DD[bi[13]]++, DD[bi[13]] === CD && (rp((() => MD(bi[42]))) && (DD[bi[11]] = bi[98]), DD[bi[13]] = bi[6]);
              for (var ID = arguments[bi[1]], pD = new Array(ID), iD = bi[6]; iD < ID; iD++) pD[iD] = arguments[iD];
              return (bi[6], mI[bi[50]])(cD, this, pD)
            };
          return XD((() => {
            TextDecoder[bi[128] + bi[129]][bi[130]] = ID
          })), () => DD[bi[11]] ? bi[2] : Fp((() => TextDecoder[bi[128] + bi[129]][bi[130]] !== ID ? bi[27] : bi[6]))
        })() : () => Fp((() => WD[bi[142] + bi[143]]())),
        ED = (bi[6], mC[bi[54]])(),
        eD = (bi[6], mI[bi[103]])(bi[4]),
        uD = (bi[6], mI[bi[103]])(bi[4]);
      let hD = bi[6],
        rD = bi[6],
        AD = bi[6];
      const FD = (bi[6], mI[bi[103]])(bi[4]),
        DC = (bi[6], mI[bi[103]])(bi[4]);
      let CC = bi[4],
        cC = (bi[6], mI[bi[103]])(bi[4]);
      const IC = (...DD) => {
          wi(DD[bi[1]] = bi[2], eD[hD] = DD[bi[6]], uD[hD] = DD[bi[0]], hD++)
        },
        pC = (...DD) => (wi(DD[bi[1]] = bi[0], DD[-bi[131]] = bi[3]), (DD[-bi[131]] = (uD[DD[bi[6]]] ? DC : FD)[eD[DD[bi[6]]]]) !== bi[4] && DD[-bi[131]] !== void bi[6] ? DD[-bi[131]] : -bi[0]),
        iC = (bi[6], mI[bi[7]])("d2lvNjQz"),
        fC = (bi[6], mI[bi[7]])("amtsa2plZndu"),
        bC = [
          [(bi[6], mI[bi[7]])("aW9qZndlODNq"), "2"],
          [(bi[6], mI[bi[7]])("a3Bq"), "4"],
          [(bi[6], mI[bi[7]])("dXJocmZm"), bi[132]]
        ],
        QC = [
          [(bi[6], mI[bi[7]])(bi[134] + bi[133]), bi[157]],
          [(bi[6], mI[bi[7]])(bi[134] + "w="), bi[135]]
        ],
        SC = (bi[6], mI[bi[7]])("eTR5bnM="),
        BC = (bi[6], mI[bi[7]])("aHRleWpldA=="),
        yC = (bi[6], mI[bi[7]])("c2RmbGpneGxmY2pr"),
        MC = [
          [(bi[6], mI[bi[7]])("a3NhZmR1"), bi[103]],
          [(bi[6], mI[bi[7]])("ZGZnYWFzZGFz"), bi[104]],
          [yC, bi[136]],
          [(bi[6], mI[bi[7]])("bGFzZWRraGFz"), "u"],
          [(bi[6], mI[bi[7]])("cW16ZjhrM24="), bi[11]]
        ],
        tC = [
          [SC, bi[7]],
          [BC, bi[50]],
          [(bi[6], mI[bi[7]])("bmI3ZnEy"), bi[13]]
        ],
        ZC = (bi[6], mI[bi[7]])("bGtxM20="),
        oC = (bi[6], mI[bi[7]])("bWtxN3" + bi[133]),
        vC = ["mk:tw", "mk:jf"],
        NC = ((...DD) => {
          DD[bi[1]] = bi[6];
          try {
            return DD[-bi[131]] = bi[3], (DD[-bi[131]] = pD[(bi[6], mI[bi[7]])("V2ViU29ja2V0")]) === bi[4] || DD[-bi[131]] === void bi[6] ? void bi[6] : DD[-bi[131]][bi[128] + bi[129]]
          } catch {
            return bi[3]
          }
        })(),
        gC = ["send", "close", "addEventListener", "removeEventListener", bi[140] + bi[139] + bi[136]],
        XC = ["onmessage", "onopen", "onclos" + bi[18], "onerro" + bi[103]];
      let nC = bi[42];
      const OC = (bi[6], mI[bi[7]])("RXZlbnQ=");
      let PC = GC[bi[138]][bi[150]],
        HC = bi[6];
      const UC = () => HC++ === bi[12] ? (HC = bi[6], MD(bi[42]) ? GC[bi[44]].CheckFuncHit : bi[6]) : bi[6],
        xC = (bi[6], mI[bi[103]])(bi[4]),
        qC = ID[bi[1]];
      for (let QD = bi[6]; QD < qC; QD++) {
        const DD = (bi[6], mI[bi[50]])(mI.cb, ID, [QD]);
        xC[QD] = DD >= 99 && DD <= 122 ? DD : bi[6]
      }
      const JC = (...DD) => {
          return DD[bi[1]] = bi[2], typeof DD[bi[6]] === bi[125] + bi[126] && (bi[6], mI[bi[50]])(mI.U, DD[bi[0]], [(CD = DD[bi[6]], (0, mI.q)(mI.B, CD, []))]) !== bi[4];
          var CD
        },
        KC = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        aC = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        VC = [
          [ci["Dispat" + bi[139] + bi[136]], () => !JC(EventTarget[bi[128] + bi[129]][bi[140] + bi[139] + bi[136]], KC)],
          [ci.PerformanceNow, () => !JC(performance[bi[141]], aC)],
          [ci.DateNow, () => !JC(Date[bi[141]], aC)]
        ],
        zC = (bi[6], mI[bi[103]])(bi[4]);
      let jC = bi[6];
      const lC = {
        stackCheck: (...DD) => {
          wi(DD[bi[1]] = bi[6], DD[bi[32]] = bi[4]);
          const CD = rp((() => (DD[bi[32]] = yD(bi[98]), DD[bi[32]] !== bi[4])));
          return DD[bi[32]] !== bi[4] && tD === bi[4] && (tD = function(DD, CD) {
            var cD;
            const ID = /[^\n]+/g,
              pD = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              iD = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let fD = null,
              bD = null,
              QD = (0, mI.q)(mI.U, ID, [DD]);
            for (; null !== QD;) {
              const cD = (0, mI.q)(mI.U, pD, [QD[0]]),
                wD = sp(QD[0], CD);
              if (-1 !== wD) {
                if (null !== cD) return (0, Tp.s)(cD[0]);
                const DD = ep(QD[0], wD),
                  CD = (0, mI.q)(mI.U, Yp, [QD[0]]),
                  ID = null !== (0, mI.q)(mI.U, Wp, [DD]) ? DD : null === CD ? null : CD[1],
                  pD = null === ID ? null : (0, mI.q)(mI.U, iD, [ID]);
                if (null !== pD && "" !== pD[1]) return (0, Tp.s)(pD[1])
              }
              null !== cD && (null === fD ? fD = cD[0] : null === bD && cD[0] !== fD && (bD = cD[0])), QD = (0, mI.q)(mI.U, ID, [DD])
            }
            return (0, Tp.s)(null !== (cD = bD) && void 0 !== cD ? cD : null === fD ? "none" : "own")
          }(DD[bi[32]][bi[48]], DD[bi[32]][bi[49]])), CD
        },
        [bi[142] + bi[143]]: (...DD) => {
          DD[bi[1]] = bi[6];
          const CD = sD();
          if (CD === bi[2]) return bi[2];
          if (nD[iC]) return bi[5];
          const cD = Fp((() => pD[fC] ? bi[14] : bi[6]));
          return cD !== bi[6] ? cD === bi[14] ? bi[14] : bi[6] : CD === Ap ? bi[6] : CD === bi[27] ? bi[27] : (ND(), ID = Function[bi[128] + bi[129]], iD = bi[148], fD = (...DD) => (DD[bi[1]] = bi[0], DD[bi[6]].writable !== bi[98]), rp((() => {
            const DD = Object.getOwnPropertyDescriptor(ID, iD);
            return void 0 !== DD && fD(DD)
          })) ? bi[40] : bi[6]);
          var ID, iD, fD
        },
        indexPassReplaced: GD,
        [bi[144] + "tSubChanged"]: (...DD) => {
          if (DD[bi[1]] = bi[6], YD === kD || TD) return bi[42];
          const CD = dD();
          return CD !== kD && CD !== YD
        },
        Lb: (...DD) => {
          wi(DD[bi[1]] = bi[6], DD[bi[121]] = qC);
          for (let CD = bi[6]; CD < VC[bi[1]] + jC; CD++) {
            const cD = CD < VC[bi[1]] ? VC[CD] : zC[CD - VC[bi[1]]];
            cD[bi[6]] < DD[bi[121]] && oD(cD[bi[0]]) && (DD[bi[121]] = cD[bi[6]])
          }
          return DD[bi[121]] < qC ? xC[DD[bi[121]]] : bi[6]
        },
        rw: () => ED ? mC[bi[44]] : bi[23],
        [bi[145] + bi[146] + "Subs"]: (...DD) => {
          DD[bi[1]] = bi[6];
          const CD = QD[bi[46]].Tv[bi[145] + bi[146]];
          return typeof CD === bi[147] && CD > bi[6] ? CD > bi[70] ? bi[70] : CD : bi[6]
        },
        ["getCom" + bi[156]]: (...DD) => {
          wi(DD[bi[1]] = bi[6], DD[-bi[72]] = bi[3], hD = bi[6]);
          for (let cD = bi[6]; cD < xD; cD++) IC(UD[cD], bi[98]);
          for (let cD = bi[6]; cD < bC[bi[1]]; cD++) nD[bC[cD][bi[6]]] && IC(bC[cD][bi[0]], bi[98]);
          const CD = Fp((() => hp(atob[bi[148]](), SD) ? bi[6] : bi[0]));
          CD === bi[0] && IC(bi[54], bi[98]), ND();
          const ID = CD === Ap ? Ap : Fp(((...DD) => {
            DD[bi[1]] = bi[6];
            const CD = Object.getOwnPropertyDescriptor(window, "atob");
            return CD === bi[3] ? Ap : CD[bi[149]] !== bi[3] ? bi[0] : bi[6]
          }));
          ID === bi[0] && IC(bi[16], bi[98]);
          const pD = ID === Ap;
          for (let cD = bi[6]; cD < QC[bi[1]] && !pD; cD++) nD[QC[cD][bi[6]]] && IC(QC[cD][bi[0]], bi[98]);
          const iD = hD > xD;
          DD[bi[0]] = bi[4], xD === bi[6] && (JD > bi[6] ? DD[bi[0]] = qD[bi[6]] : VD ? DD[bi[0]] = "fp" : iD || (DD[bi[0]] = nD[SC] ? bi[7] : nD[BC] ? bi[50] : bi[4]));
          for (let cD = bi[6]; cD < MC[bi[1]] && !pD; cD++) nD[MC[cD][bi[6]]] && IC(MC[cD][bi[0]], bi[98]);
          const fD = hD,
            bD = (bi[6], dp[bi[32]])(),
            QD = bD !== bi[4] && (bi[6], wC[bi[103]])(bD);
          QD && !pD && IC(bD, bi[42]), RD && IC("ix", bi[42]), HD && IC("il", bi[42]);
          for (let cD = bi[6]; cD < JD; cD++) IC(qD[cD], bi[98]);
          for (let cD = bi[6]; cD < tC[bi[1]]; cD++) nD[tC[cD][bi[6]]] && IC(tC[cD][bi[0]], bi[98]);
          nD[ZC] && IC("mk:lk", bi[98]);
          const wD = ((...DD) => {
            DD[bi[1]] = bi[0];
            for (let CD = bi[6]; CD < vC[bi[1]]; CD++)
              if (DD[bi[6]] === vC[CD]) return vC[CD];
            return bi[4]
          })(nD[oC]);
          if (wD !== bi[4] && IC(wD, bi[98]), cD !== bi[4] && gD(cD.emitReplaced) === bi[98] && IC("mk:em", bi[98]), nC && IC("3s", bi[42]), mI.X && IC("3b", bi[42]), ND(), vD && IC("3d", bi[42]), pD && IC("3g", bi[42]), bD === bi[4] || QD || IC(bD, bi[42]), tD !== bi[4] && IC(tD, bi[42]), ZD === bi[4] && mC[bi[18]] !== bi[4] && (ZD = function(DD) {
              const CD = /[^\n]+/g,
                cD = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let ID = null,
                pD = "",
                iD = !1,
                fD = (0, mI.q)(mI.U, CD, [DD]);
              for (; null !== fD;) {
                const bD = (0, mI.q)(mI.U, cD, [fD[0]]),
                  QD = null === bD ? (0, mI.q)(mI.U, Yp, [fD[0]]) : null,
                  wD = null !== QD && null !== (0, mI.q)(mI.U, Wp, [QD[1]]) && 0 !== sp(QD[1], "wasm:") ? QD[1] : null;
                if (null === ID) null !== bD ? (ID = bD[2], pD = bD[4]) : null !== wD && (ID = "");
                else if (null !== bD) {
                  iD = !0;
                  const DD = bD[2] === ID;
                  if ("" !== bD[1] || !DD || bD[4] !== pD) {
                    const CD = "moz-extension" === bD[3] || "safari-web-extension" === bD[3];
                    return (0, Tp.f)("" !== bD[1] || DD ? "inline" : CD ? bD[3] : bD[2])
                  }
                } else if (null !== wD) {
                  const DD = -1 !== sp(fD[0], "userscript") || -1 !== sp(fD[0], ".user.js");
                  return (0, Tp.f)(DD ? "userscript" : "inline")
                }
                fD = (0, mI.q)(mI.U, CD, [DD])
              }
              return (0, Tp.f)(iD ? "own" : "unknown")
            }(mC[bi[18]])), ZD !== bi[4] && IC(ZD, bi[42]), hD === bi[6]) return bi[4];
          if (DD[bi[0]] === bi[4] && uD[bi[6]] && !(bi[6], Tp[bi[119]])(eD[bi[6]]))
            for (let cD = bi[0]; cD < fD; cD++)
              if (uD[cD] && (bi[6], Tp[bi[119]])(eD[cD])) {
                const DD = eD[cD];
                for (let CD = cD; CD > bi[6]; CD--) wi(eD[CD] = eD[CD - bi[0]], uD[CD] = uD[CD - bi[0]]);
                wi(eD[bi[6]] = DD, uD[bi[6]] = bi[98]);
                break
              } if (wi(DD[bi[2]] = bi[6], DD[bi[5]] = DD[bi[0]] === bi[4] ? bi[6] : fD), DD[bi[5]] > bi[6] && bD !== bi[4] && QD && !pD) {
            for (let CD = DD[bi[5]]; CD > bi[6]; CD--) wi(eD[CD] = eD[CD - bi[0]], uD[CD] = uD[CD - bi[0]]);
            wi(eD[bi[6]] = bD, uD[bi[6]] = bi[42], DD[bi[2]] = bi[0], DD[bi[5]]++)
          }
          if (DD[bi[14]] = bi[6], rD++ % bi[2] === bi[0])
            for (let cD = bi[0]; cD < hD; cD++) pC(cD) < pC(DD[bi[14]]) && (DD[bi[14]] = cD);
          const BD = eD[DD[bi[14]]];
          (uD[DD[bi[14]]] ? DC : FD)[BD] = AD++;
          const yD = DD[bi[14]] >= DD[bi[2]] && DD[bi[14]] < DD[bi[5]];
          if (!uD[DD[bi[14]]] || BD === DD[bi[0]] || DD[bi[14]] === bi[6] && !yD) return BD === bi[136] ? (bi[6], Tp[bi[7]])(nD[yC], Tp[bi[18]]) : BD;
          const MD = (DD[-bi[72]] = DD[bi[0]]) !== bi[4] && DD[-bi[72]] !== void bi[6] ? DD[-bi[72]] : eD[bi[6]];
          return MD !== CC && wi(CC = MD, cC = (bi[6], mI[bi[103]])(bi[4])), cC[BD] ??= (bi[6], Tp[bi[103]])(BD, MD)
        }
      };
      let LC = GC[bi[138]][bi[150]];
      const TC = () => PC !== GC[bi[138]][bi[150]] ? PC : LC;
      let RC = bi[6],
        kC = bi[2],
        dC = bi[6],
        YC = bi[6];
      return {
        checks: lC,
        checkEvent: (...DD) => {
          DD[bi[1]] = bi[0];
          try {
            const CD = pD[OC];
            if (typeof CD === bi[125] + bi[126] && !(DD[bi[6]] instanceof CD) && !(bi[6], mI.H)(DD[bi[6]])) return PC = GC[bi[138]].NotEvent, bi[6];
            if (DD[bi[6]].isTrusted === bi[42]) return bi[6];
            let cD = bi[6];
            for (const ID in DD[bi[6]]) cD++;
            return cD < bi[24] ? (PC = GC[bi[138]]["FewPropertie" + bi[104]], bi[6]) : UC()
          } catch {}
          return bi[6]
        },
        checkPadCall: () => {
          try {
            return UC()
          } catch {
            return bi[6]
          }
        },
        usedProp: TC,
        watchHeld: (DD, CD) => {
          let cD;
          const ID = XD((() => {
            cD = CD()
          }));
          zC[jC++] = [DD, () => !ID || CD() !== cD]
        },
        wy: () => {
          const DD = GD();
          return ((...DD) => {
            if (wi(DD[bi[1]] = bi[0], DD[bi[11]] = bi[3], DD[bi[151]] = bi[3]), cD !== bi[4]) {
              const CD = gD(cD.OS),
                ID = "v3" === CD ? bi[5] : "v5" === CD ? bi[12] : "v6" === CD ? bi[27] : bi[2];
              ID !== bi[2] && (kC = ID);
              const pD = gD(cD["inbuil" + bi[154] + bi[155]]);
              typeof pD === bi[147] && pD >= bi[6] && pD <= bi[45] && (pD | bi[6]) === pD && (dC = pD), wi(DD[bi[11]] = gD(cD.reflectApplyHit), DD[bi[151]] = gD(cD.definerHit))
            }
            const CD = DD[bi[6]] ? bi[39] : "11" === DD[bi[151]] ? bi[45] : "13" === DD[bi[151]] ? 13 : DD[bi[11]] !== bi[3] && DD[bi[11]] !== bi[4] ? bi[2] : "10" === DD[bi[151]] ? bi[24] : "12" === DD[bi[151]] ? bi[28] : bi[6];
            CD !== bi[6] && (YC = CD)
          })(DD), RC++ % 10 === bi[6] && (((...DD) => {
            DD[bi[1]] = bi[6];
            const cD = CD();
            cD === bi[4] || nC || (nC = oD((() => {
              if (NC !== bi[3] && (bi[6], mI.R)(cD) !== NC) return bi[98];
              for (let DD = bi[6]; DD < gC[bi[1]]; DD++)
                if ((bi[6], mI[bi[50]])(mI[bi[137]], cD, [gC[DD]])) return bi[98];
              for (let DD = bi[6]; DD < XC[bi[1]]; DD++)
                if (cD[XC[DD]] !== bi[4] && cD[XC[DD]] !== bi[3]) return bi[98];
              return bi[42]
            })))
          })(), rp((() => !hp(pD[iD][bi[148]][bi[148]](), SD))) && (LC = LC === GC[bi[138]][bi[152]] ? GC[bi[138]][bi[152]] : GC[bi[138]].Fr), rp((() => !hp(pD[iD][bi[148]](), SD))) && (LC = GC[bi[138]][bi[152]])), {
            flags: DD ? GC[bi[44]].Butto : bi[6],
            values: [
              [GC[bi[153]].PhysicsVersion, kC],
              [GC[bi[153]]["Inbuil" + bi[154] + bi[155]], dC],
              [GC[bi[153]]["AltCom" + bi[156]], YC],
              [GC[bi[153]]["ProbeUsedPro" + bi[157]], TC()]
            ]
          }
        }
      }
    };
    const Si = "[bloxd-wasm-client]",
      Bi = "bloxdWasmDownloadFailed",
      yi = FC.c,
      Mi = "boot",
      ti = "playSources",
      Zi = "wasmBuild",
      oi = "bloxd-wasm-joined",
      vi = "bloxd-wasm-first-view",
      Ni = "bloxd-wasm-playable-legacy",
      gi = 1048576,
      Xi = 8 * gi,
      mi = 8,
      ni = 1006,
      Oi = 1e3,
      Pi = "You lost connection to the server.",
      Hi = "general:lostConnection",
      Ui = 1048576,
      xi = 5e3,
      qi = 100,
      Ji = [2e3, 1e4, 3e4],
      Ki = 3e4;
    let ai = null,
      Vi = null,
      zi = !1,
      ji = !1,
      li = !1,
      Li = null,
      Ti = null,
      Gi = null,
      Ri = null,
      ki = null,
      di = null,
      Yi = null;
    const Wi = new class {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = DD, this.soundOn = CD, this.now = cD, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var DD;
        null === (DD = this.player) || void 0 === DD || DD.prepare()
      }
      preload(DD) {
        var CD;
        this.stopped || (null === (CD = this.player) || void 0 === CD || CD.preload(DD))
      }
      cancelPreload() {
        var DD;
        null === (DD = this.player) || void 0 === DD || DD.cancelPreload()
      }
      load(DD) {
        if (null !== this.player || this.stopped) return;
        this.player = DD, DD.setMaster(this.master, this.soundOn);
        const CD = this.now(),
          cD = this.local;
        this.local = [];
        for (const pD of cD)
          if (!(pD.stopped || !pD.loop && CD - pD.at >= 300)) try {
            this.start(pD, DD, CD)
          } catch (ID) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", ID)
          }
      }
      start(DD, CD, cD) {
        const {
          name: ID,
          pos: pD,
          ear: iD,
          maxHearDist: fD,
          refDistance: bD,
          loop: QD,
          fade: wD
        } = DD, SD = CD.playGame(ID, jC(DD, cD), pD, iD, fD, bD, QD);
        if (DD.sound = SD, 1 !== DD.rate && SD.rate(DD.rate), null !== DD.panner && SD.setPannerAttr(DD.panner), null !== DD.moved && SD.setPosition(DD.moved), null !== wD && cD - wD.at < wD.ms) {
          const CD = zC(this.master);
          CD > 0 ? SD.fade(0, DD.volume * CD, wD.at + wD.ms - cD) : SD.setRelativeVolume(DD.volume)
        }
      }
      onAudioEvent(DD, CD, cD, ID) {
        var pD, iD;
        return null === (pD = null === (iD = this.player) || void 0 === iD ? void 0 : iD.onAudioEvent(DD, CD, cD, ID)) || void 0 === pD || pD
      }
      applyListener(DD) {
        var CD;
        null === (CD = this.player) || void 0 === CD || CD.applyListener(DD)
      }
      playGame(DD, CD, cD, ID, pD, iD, fD) {
        if (this.stopped) return VC.d;
        if (this.player) return this.player.playGame(DD, CD, cD, ID, pD, iD, fD);
        const bD = this.now();
        this.local = this.local.filter((DD => !DD.stopped && (DD.loop || bD - DD.at < 300)));
        const QD = {
          name: DD,
          volume: zC(CD),
          fade: null,
          pos: cD && [cD[0], cD[1], cD[2]],
          ear: ID && [ID[0], ID[1], ID[2]],
          maxHearDist: pD,
          refDistance: iD,
          loop: fD,
          rate: 1,
          panner: null,
          moved: null,
          at: bD,
          stopped: !1,
          sound: null
        };
        this.local.push(QD);
        const wD = {
          stop: () => {
            var DD;
            return QD.stopped = !0, null === (DD = QD.sound) || void 0 === DD || DD.stop(), wD
          },
          fade: (DD, CD, cD) => {
            if (QD.sound) return QD.sound.fade(DD, CD, cD), wD;
            const ID = zC(this.master),
              pD = zC(ID > 0 ? CD / ID : CD > 0 ? QD.volume : 0),
              iD = this.now(),
              fD = jC(QD, iD);
            return QD.volume = pD, QD.fade = cD > 0 && fD !== pD ? {
              from: fD,
              at: iD,
              ms: cD
            } : null, wD
          },
          rate: DD => (QD.sound ? QD.sound.rate(DD) : QD.rate = DD, wD),
          getVolume: () => QD.sound ? QD.sound.getVolume() : QD.volume * zC(this.master),
          getRelativeVolume: () => QD.sound ? QD.sound.getRelativeVolume() : QD.volume,
          setRelativeVolume: DD => (QD.sound ? QD.sound.setRelativeVolume(DD) : (QD.volume = zC(DD), QD.fade = null), wD),
          setPannerAttr: DD => (QD.sound ? QD.sound.setPannerAttr(DD) : QD.panner = {
            ...DD
          }, wD),
          setPosition: DD => (QD.sound ? QD.sound.setPosition(DD) : QD.moved = [DD[0], DD[1], DD[2]], wD)
        };
        return wD
      }
      setMaster(DD, CD) {
        var cD;
        this.master = DD, this.soundOn = CD, null === (cD = this.player) || void 0 === cD || cD.setMaster(DD, CD)
      }
      stop() {
        var DD;
        this.stopped = !0, null === (DD = this.player) || void 0 === DD || DD.stopAll();
        for (const CD of this.local) CD.stopped = !0;
        this.local = []
      }
    }((0, nC.c)(), !0);
    let si = {
        wasm: "unknown",
        client: String(CC.c)
      },
      Ei = null,
      ei = () => {};
    const ui = new Promise((DD => {
      ei = DD
    }));
    let ri = () => {};
    const Ai = new Promise((DD => {
      ri = DD
    }));
    let Fi, Df = null,
      Cf = null,
      If = null,
      pf = null,
      ff = null,
      bf = null,
      Qf = null,
      wf = null,
      Sf = null,
      Bf = null,
      yf = null,
      Mf = null,
      tf = null,
      Zf = null,
      of = null,
      vf = null,
      Nf = null,
      gf = null,
      Xf = !1,
      mf = null;
    const nf = new Set,
      Of = new Set;

    function Pf(DD) {
      if (!nf.has(DD)) {
        nf.add(DD);
        for (const cD of Of) try {
          cD(DD)
        } catch (CD) {
          console.error(`${Si} a startup listener threw`, CD)
        }
      }
    }

    function Hf(DD) {
      Xf = !0, DD.isStopped || Pf("texturesIn")
    }
    let Uf = 1,
      xf = -1 / 0,
      qf = !1,
      Jf = !1,
      Kf = 0,
      af = null,
      Vf = !1;
    const zf = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let jf = 0,
      lf = 0,
      Lf = null,
      Tf = null,
      Gf = null,
      Rf = null;
    const kf = new WeakMap;
    let df = null,
      Yf = null,
      Wf = null,
      sf = null,
      Ef = null,
      ef = null,
      uf = null,
      hf = 0,
      rf = null,
      Af = null,
      Ff = null,
      Db = null,
      Cb = -1 / 0,
      cb = null;
    const Ib = new Set;
    let pb = !1,
      ib = null;
    const fb = new Map,
      bb = new Set;
    let Qb = !1;
    const wb = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let Sb = null,
      Bb = () => [0, 0],
      yb = () => {},
      Mb = () => {},
      tb = null,
      Zb = null;
    const ob = new class {
      constructor(DD) {
        this.reached = DD, this.next = 1
      }
      observe(DD) {
        if (!(DD < this.next)) {
          for (; this.next <= DD;) this.next *= 2;
          this.reached(DD)
        }
      }
    }((DD => {
      console.warn(`${Si} chunk cancels from the server this session: ${DD}`)
    }));
    let vb = 1,
      Nb = null,
      gb = null,
      Xb = null,
      mb = null,
      nb = null,
      Ob = !1,
      Pb = !1,
      Hb = 0,
      Ub = null,
      xb = !1,
      qb = null,
      Jb = null,
      Kb = !1;
    const ab = new class {
      constructor(DD) {
        this.Uo = DD, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(DD, CD, cD) {
        (0, UC.b)(DD) && (this.lossPending = !1);
        const ID = cD - this.lastFrameMs;
        this.lastFrameMs = cD, this.lossPending && CD && (0, UC.e)(DD) ? (null === this.undrawnSinceMs || ID > 1e3) && (this.undrawnSinceMs = cD) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && cD - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(DD) {
        DD !== this.shown && (this.shown = DD, this.Uo(DD))
      }
    }((DD => {
      QD.i.Uo(aC.c, DD)
    }));
    let Vb = !1,
      zb = !0,
      jb = null,
      lb = !1,
      Lb = !1,
      Tb = !1;

    function Gb() {
      return Gi ??= Promise.all([cD.e(189), cD.e(136), cD.e(56)]).then((() => cD(42436))).then((DD => (Ti = DD, Object.assign(globalThis, {
        bloxdPreviewPage: DD.pagePreviews()
      }), DD)), (DD => {
        throw Gi = null, DD
      })), Gi
    }

    function Rb() {
      return Li ??= cD.e(54).then((() => cD(42461))).catch((DD => {
        throw Li = null, new nD.c(DD)
      })), Li
    }
    class kb {
      constructor() {
        this.host = null
      }
      open(DD) {
        return null !== this.host ? DD(this.host) : Gb().then((CD => (this.host ??= new CD.WasmPreviewHost(CD.pagePreviews()), DD(this.host))))
      }
      openMob(DD) {
        return this.open((CD => CD.openMob(DD)))
      }
      openPet(DD) {
        return this.open((CD => CD.openPet(DD)))
      }
      openMobLineup(DD) {
        return this.open((CD => CD.openMobLineup(DD)))
      }
      openCharacter(DD, CD) {
        return this.open((cD => cD.openCharacter(DD, CD)))
      }
    }

    function db() {
      li || (li = !0, hI.h.setHost(new kb), (0, vc.l)(), sI.d.setFollower(YQ), Object.assign(globalThis, {
        bloxdPreviews: hI.h
      }))
    }

    function Yb() {
      Gb().then((DD => {
        DD.pagePreviews().prefetch()
      }), (() => {}))
    }

    function Wb() {
      let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (ji) return;
      ji = !0, Vb = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), zb = !Vb, console.info(`${Si} starting`), zi || (zi = !0, (0, aC.H)(new qC(QQ, oQ)), (0, yD.l)(new JC), (0, aC.F)(new KC), (0, aC.z)()), db(), (0, nc.setCrashScreen)((DD => {
        let {
          text: CD,
          reload: cD
        } = DD;
        ! function(DD, CD) {
          var cD, ID;
          if (lb) return;
          lb = !0, (0, gc.f)(), null === (cD = cb) || void 0 === cD || cD.abort(), cb = null, EI.d.release();
          const pD = Vb ? null !== (ID = DD.cancel) && void 0 !== ID ? ID : "general:back" : null;
          tI({
            ...DD,
            cancel: pD
          }).then((DD => {
            DD && CD && Lb ? ((0, BC.i)("reloadOntoJs"), (0, YD.h)(BC.s)) : DD && CD ? (0, YD.j)() : Vb && (0, YD.e)("/")
          }))
        }(CD, cD)
      })), (0, LI.j)(), (0, mC.g)();
      let CD = null;
      try {
        CD = fi("9evusvn3hjf", (() => {
          var DD, CD;
          return null !== (DD = null === (CD = Df) || void 0 === CD ? void 0 : CD.ws) && void 0 !== DD ? DD : null
        }), DD, "zmnluctdxq")
      } catch (pD) {
        console.error(`${Si} probes`, pD)
      }
      const ID = function() {
        const DD = (0, NI.l)(),
          CD = (0, NI.i)();
        let cD = !1;
        return ID => {
          DD && !cD && (cD = !0, (0, nc.reportStaleBuildReload)(DD, CD, ID))
        }
      }();
      sQ(), Vb || function() {
        const DD = function(DD) {
          var CD;
          const cD = new URLSearchParams(DD),
            ID = cD.get("game");
          return ID ? {
            game: ID,
            lobby: null !== (CD = cD.get("lobby")) && void 0 !== CD ? CD : null
          } : null
        }(window.location.search);
        if (DD) return (0, cC.m)(DD.game) && sQ().request(), void eb(DD.game, DD.lobby);
        const CD = new URLSearchParams(window.location.search).get("ws");
        if (!CD) return;
        ui.then((DD => {
          DD && async function(DD, CD) {
            try {
              await (0, nD.j)(DD), Yf = mQ(new WebSocket(CD)), null !== Yf && EI.d.setGame(null), sb()
            } catch (pD) {
              console.error(`${Si} ?ws=${CD} did not attach`, pD)
            }
          }(DD, CD)
        }))
      }(), async function(DD) {
        var CD, ID, iD, fD, bD;
        if ("undefined" === typeof WebAssembly) return lQ("noWebAssembly", "This browser has no WebAssembly"), null;
        const wD = await (0, cp.N)();
        if ((0, nc.setCrashBackend)((0, FC.o)(wD) ? "unsupported" : null !== (CD = null === wD || void 0 === wD ? void 0 : wD.backend) && void 0 !== CD ? CD : "none"), (0, FC.o)(wD)) return lQ("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${wD.missing.join(", ")}`, {
          missing: wD.missing.join(",")
        }), null;
        if ((0, Up.o)("render")) try {
          const {
            startRenderDebug: DD
          } = await Promise.all([cD.e(74), cD.e(47)]).then((() => cD(4483)));
          DD(wD)
        } catch (OC) {
          console.warn("The render debug topic didn't load", OC)
        }
        if ((0, Up.o)("renderlite")) try {
          const {
            startRenderLite: DD
          } = await Promise.all([cD.e(259), cD.e(48)]).then((() => cD(42476)));
          Xb = DD(wD)
        } catch (OC) {
          console.warn("The renderlite debug topic didn't load", OC)
        }
        let SD = null;
        if (null !== wD && LQ()) {
          const DD = (0, ZI.g)(wD, !0);
          "webgl" === wD.backend && null !== DD && (0, MC.q)(DD, nc.reportGpuWasmPopulation), null !== DD && (0, yC.m)(DD), SD = (0, ZI.c)(wD, DD)
        }
        if (null !== wD && null !== SD) return (0, nc.reportGpuFallback)(SD, wD.backend), TQ(`the wasm client's renderer plays this GPU (${SD}) on ${wD.backend} worse than the JS client`, "gpu"), null;
        const BD = null !== (ID = null === wD || void 0 === wD ? void 0 : wD.backend) && void 0 !== ID ? ID : null;
        wb.adapter = null !== (iD = null === wD || void 0 === wD ? void 0 : wD.adapter) && void 0 !== iD ? iD : null, wb.boundAtMs = null, wb.indirectHangs = null;
        const yD = !(0, FC._)();
        null !== wD && "none" !== wD.reason && console.info(`${Si} drawing with ${wD.backend}: ${wD.reason}`);
        const MD = (0, cp.F)();
        ri(!0), (0, nD.r)((DD => {
          try {
            null !== BD && (tb = DD.startSkyFeed, RQ(), function(DD) {
              var CD, cD;
              Bb = DD.rasterText, sf = DD.setTextLocalPlayer, DD.setTextLocalPlayer(null !== (CD = null === (cD = Wf) || void 0 === cD ? void 0 : cD.info.playerDbId) && void 0 !== CD ? CD : null), yb = DD.drainTextRerasters, Mb = DD.loadTextIcons, DD.warmText((() => Ob)), DD.textChanged(), Ob && setTimeout(Mb, 0)
            }(DD), Zb = DD.startShellAnalytics, AQ())
          } finally {
            Tb || (mb = DD.followMenuPrefs({
              setSoundPrefs: NQ,
              setEnvPrefs: gQ,
              setUiPrefs: vQ,
              setLookPrefs: XQ
            }))
          }
        })), (0, nD.l)(Wi).catch((DD => {
          console.warn(`${Si} the game code did not load: a join asks again`, DD)
        }));
        const tD = (0, cp.k)(wD);
        let ZD, oD;
        tD.catch((() => {})), "loading" === (0, iC.u)() && op();
        try {
          ZD = function(DD) {
            const CD = null !== DD && void 0 !== DD ? DD : document.createElement("canvas");
            CD.id = "wasm-game-canvas", (0, Qp.m)();
            const cD = (0, xC.d)(),
              ID = (0, xC.h)(cD);
            return CD.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, bp.h)(CD, ID), (0, xC.b)(CD, cD), CD.width = ID.bufferWidth, CD.height = ID.bufferHeight, wQ(CD, zb), jb = CD, document.body.append(CD), CD
          }(null === BD ? null : await (await Gb()).pagePreviews().beginSession())
        } catch (pD) {
          return await qw({
            site: Zi,
            error: pD
          }, (() => {
            (0, nc.showUnsupported)((0, BI.o)("fetch"), jp.e.fetch, `the previews did not load: ${String(pD)}`)
          })), null
        }
        op();
        try {
          oD = await tD
        } catch (pD) {
          return await qw({
            site: Zi,
            error: pD
          }, (() => {
            (0, nc.showUnsupported)((0, BI.o)("fetch"), jp.e.fetch, `the ${null!==BD&&void 0!==BD?BD:"client"} build did not load: ${String(pD)}`)
          })), null
        }
        const vD = (0, cp.g)(),
          ND = !vD && !0 !== mc.j.getItem(Bi),
          gD = !vD && "loading" === (0, iC.u)();
        await (0, fC.i)(oD, SC.e, {
          reloadFailedDownload: ND
        }), gD && !(0, iC.F)() && await (0, fC.i)(oD, SC.e, {
          reloadFailedDownload: ND
        });
        Mp = performance.now();
        const XD = si;
        if (!(0, iC.F)()) {
          (0, iC.E)() && mc.j.setItem(Bi, !0);
          const DD = (0, iC.n)();
          if ("call" === DD) Nw({
            site: Dc.w,
            error: (0, iC.m)(),
            header: null
          }, XD);
          else {
            const CD = null !== DD && void 0 !== DD ? DD : "instantiate",
              cD = () => {
                (0, nc.showUnsupported)((0, BI.o)(CD), jp.e[CD], (0, iC.g)())
              };
            if ("compile" !== DD && "instantiate" !== DD || !LQ())
              if ("fetch" === CD) {
                const DD = [oD.url().href, SC.e.url().href];
                await qw({
                  site: Zi,
                  error: (0, iC.g)(),
                  urls: DD
                }, cD)
              } else cD();
            else {
              const CD = (0, iC.g)(),
                cD = (0, kC.k)((0, iC.m)());
              (0, nc.reportCountedLoadFallback)((0, BI.o)(DD), jp.e[DD], CD, cD), TQ(`the wasm client did not ${DD} here (${CD})`, cD ? "oom" : null)
            }
          }
          return null
        }(0, bC.S)(oD.url()) && (0, nc.reportUnstreamedCoreLoad)();
        const OD = (0, iC.x)();
        let PD, HD = XD;
        try {
          HD = {
            ...XD,
            wasm: OD.zB()
          };
          const {
            Vo: DD
          } = oD.bindings, CD = DD.ycD();
          if (CD !== GC.B) return Nw({
            site: Dc.b,
            error: `core ABI ${CD}, page ABI ${GC.B}`,
            header: null
          }, HD), null;
          const [cD, ID] = (0, GC.ie)();
          PD = new DD(cD, ID)
        } catch (pD) {
          return Nw({
            site: Dc.b,
            error: pD,
            header: null
          }, HD), null
        }
        si = HD, Ei = oD.bindings;
        const UD = new Dc.g(PD, iC.q, {
          onCrash: DD => {
            var CD;
            null === (CD = Xb) || void 0 === CD || CD.crashed(DD), yD && function(DD, CD, cD) {
              if ("webgpu" !== CD || (0, cp.e)()) return !1;
              const ID = function(DD) {
                if (DD.site === Dc.e && (0, FC.p)(DD.error)) return "frames_refused";
                return DD.site === yi && (0, FC.s)(DD.error) ? "start_failed" : null
              }(DD);
              if (null === ID || !(0, FC.W)(ID)) return !1;
              return (0, nc.reportRenderReload)("webgpu", "start_failed" === ID ? 0 : 1, cD, {
                cause: ID,
                error: DD.error,
                context: wb,
                session: mw(null)
              }), pw(), !0
            }(DD, BD, HD) || Nw(DD, HD)
          },
          onNetEvent: Iw,
          onReconnectGrace: VQ,
          onCoreErrors: (DD, CD) => {
            var cD, ID;
            DD.some((DD => {
              let {
                code: CD
              } = DD;
              return CD === GC.L.RenderDeviceLost
            })) && ((0, cp.y)(), ab.deviceLost()), null === (cD = Xb) || void 0 === cD || cD.coreErrors(DD), (0, nc.reportCoreErrors)(DD, CD, HD, ((DD, CD) => {
              var cD;
              return null === (cD = Sb) || void 0 === cD ? void 0 : cD.McD(DD, CD)
            })), null === (ID = mf) || void 0 === ID || ID.coreErrors(DD)
          },
          onRenderReload: (DD, CD, cD) => {
            ! function(DD, CD, cD, ID, pD, iD) {
              var fD;
              if ((0, cp.e)()) return;
              const bD = CD === GC.Pc.WEBGPU,
                QD = ID === GC.Pc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                wD = (0, FC.Z)(Sb);
              null === (fD = Xb) || void 0 === fD || fD.reload(bD, cD, QD, null === wD || void 0 === wD ? void 0 : wD.message);
              const SD = bD ? (0, FC.T)(QD, pD) : null;
              if (null !== SD) {
                const CD = void 0 === wD ? "" : ` (${wD.message})`;
                return void DD.crash(nc.RENDER_RELOAD_SITE, new Error(`${(0,nc.renderReloadMessage)("webgpu",QD,cD)} and ${SD}${CD}`))
              }
              const BD = bD ? "webgpu" : "webgl1" === iD ? "webgl1" : "webgl";
              "lost" === QD && (0, cp.y)();
              (0, nc.reportRenderReload)(BD, cD, si, {
                cause: QD,
                error: wD,
                context: wb,
                session: mw(DD.sunShadowsHeld())
              }), pw()
            }(UD, DD, CD, cD, yD, BD)
          },
          onEnvEvent: DD => {
            var CD;
            DD.kind === GC.U.SkyImages && (null === (CD = vf) || void 0 === CD || CD.onEvent(DD.payload))
          },
          onImages: DD => {
            var CD;
            null === (CD = Nf) || void 0 === CD || CD.onEvent(DD)
          },
          onModelRequest: DD => {
            var CD;
            null === (CD = tf) || void 0 === CD || CD.request(DD)
          },
          onModelTaken: (DD, CD) => {
            var cD;
            null === (cD = tf) || void 0 === cD || cD.taken(DD, CD)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(DD, CD) {
                const cD = Yi;
                if (null === cD || DD.isStopped) return;
                cD.restore((DD => {
                  (0, nc.reportTerrainTextureFailure)(DD, CD)
                })).then((CD => {
                  !1 !== CD || DD.isStopped ? !0 === CD && console.info(`${Si} terrain textures handed over again after the renderer lost them`) : console.warn(`${Si} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(UD, HD)
            }))
          },
          onKeepAlive: DD => {
            const CD = null === Rf ? void 0 : kf.get(Rf);
            void 0 !== CD && OI(CD, DD)
          }
        });
        if (Ri = UD, null !== DD) {
          UD.setAntiCheatProbes(Di(iC.q, DD.checks)), DD.watchHeld(ci.CoreFrame, (() => UD.frame)), DD.watchHeld(ci.GlueFrame, (() => PD.frame));
          const CD = ii(DD, ((DD, CD, cD) => {
            let ID = !1;
            return Pw(UD, (() => {
              ID = UD.rings.input.writeRecord(GC.tb.AntiCheat, DD, CD, cD, 0)
            })), ID
          }));
          UD.isStopped ? CD.stop() : yf = CD
        }
        ai = (DD, CD, cD) => UD.rings.cmd.writeCmd(DD, CD, cD), Vi = DD => UD.rings.cmd.growForCmd(DD), Vf = !1, RQ(), (0, nD.t)(UD, {
          core: PD,
          memory: iC.q,
          staleOr: (DD, CD, cD) => qw({
            site: DD,
            error: CD
          }, cD),
          reportReplayFault: (DD, CD) => {
            (0, nc.reportReplayFault)(DD, CD, si)
          },
          audio: Wi,
          options: tC.d,
          onNetEvent: Iw,
          sessionInfo: DD => {
            var CD;
            return (null === (CD = Wf) || void 0 === CD ? void 0 : CD.conn) === DD ? Wf.info : null
          },
          onEventOverflow: fQ,
          replayShaderPack: DD => {
            var CD;
            null === (CD = mf) || void 0 === CD || CD.replay(DD)
          },
          hasPackModel: DD => {
            var CD, cD;
            return null !== (null !== (CD = null === (cD = kQ()) || void 0 === cD ? void 0 : cD.modelUrl(DD)) && void 0 !== CD ? CD : null)
          },
          beforeWrite: () => (!qf && UD.rings.net.cursor > 0 && bw(UD, !1, "all"), !UD.isStopped),
          beforeOp: () => (!qf && UD.netWrittenSinceFrame > 0 && bw(UD, !1, "budget"), !UD.isStopped)
        }), (0, mD.I)({
          lockPointer: () => {
            if (!lc(ZD)) return !1;
            try {
              Promise.resolve(ZD.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, Pc.b)()
          },
          leaveGame: () => {
            iQ()
          },
          canvas: () => ZD
        }), Mf = (0, mD.w)((() => {
          var DD;
          const CD = (0, nD.g)();
          null === (DD = (0, nD.q)()) || void 0 === DD || DD.followCursorAim(!0 === (null === CD || void 0 === CD ? void 0 : CD.isSessionLive) ? CD : null)
        })), Lf && UD.setUiPrefs(Lf);
        Tf && UD.setEnvPrefs(Tf);
        Gf && UD.setLookPrefs(Gf);
        const xD = ip ? fp(ip.preventMovement) : null;
        xD && ZQ(xD);
        const qD = (0, tc.i)(),
          JD = (0, tc.b)(UD, qD);
        Sf = qD.basis, (0, Xc.d)(null === JD ? null : (0, Mc.p)(JD)), wf = JD;
        const KD = (0, QC.c)();
        let aD = 1 / 0,
          VD = !0,
          zD = qD.shedFootprintBytes;
        const jD = new lI.b(KD, (() => PD.ko()), (DD => {
          UD.crash(Dc.o, DD)
        }));
        bf = jD, Qf = jD, null !== JD && jD.setCeiling(Math.min((0, lI.k)(JD), aD));
        if (VD) {
          jD.setShed((DD => {
            const CD = UD.shedMemory("joinReserve" !== DD);
            return null !== CD && (null === wf || CD < wf) && (wf = CD, (0, Xc.d)((0, Mc.p)(CD))), CD
          }), ((DD, CD, cD) => {
            1 === CD ? (0, nc.reportMemoryShed)(DD, cD, si) : console.warn(`${Si} wasm memory: shed again (${DD}): shed ${CD}`, cD.wasmMemoryShed)
          }), (() => UD.addDistanceInUse()));
          const DD = (0, FC.H)(OD);
          jD.setFootprint(new Hp(zD, {
            storedChunks: () => PD.tcD(),
            gpuBytes: () => {
              var CD;
              return null !== (CD = null === DD || void 0 === DD ? void 0 : DD.ZcD()) && void 0 !== CD ? CD : 0
            },
            jsHeapBytes: Pp
          }))
        }
        window.addEventListener("pagehide", (() => {
          bf === jD && (jD.refreshStats(), Ow(jD))
        })), window.addEventListener("pagehide", iw), window.addEventListener("pagehide", fw), !1;
        const [lD, LD] = (0, oc.g)();
        nb = (0, Nc.g)((DD => UD.setChunkAddDistance(DD.horizontal, DD.vertical)), {
          horizontal: lD,
          vertical: LD
        }), UD.setAmbientOcclusion(!0 !== mc.h.getItem("disableAmbientOcclusion")), UD.setPoseLod(!0 !== mc.h.getItem(pC.O)), (0, Up.o)("look") && (UD.setDebugLog(GC.O.Look, !0), (0, qp.f)("wasm", (() => UD.takeDebugLog(GC.O.Look))));
        (0, Up.o)("remesh") && (UD.setDebugLog(GC.O.Remesh, !0), TD = () => UD.takeDebugLog(GC.O.Remesh), zp = new Vp((0, Jp.i)(), TD));
        var TD;
        const GD = function(DD, CD, cD, ID) {
          const pD = new DI,
            iD = DD => mc.h.getItem(DD);
          pD.sync(iD, CD), (0, HC.S)();
          const fD = (0, QD.k)("customBindingsChanged", (() => {
            pD.sync(iD, CD)
          }));
          (0, Hc.p)(CD);
          const bD = new Set,
            wD = (0, mD.w)((() => {
              var DD;
              bD.size > 0 && pI() && !0 === (null === (DD = (0, nD.g)()) || void 0 === DD ? void 0 : DD.localPlayerAlive()) && QD.i.Uo("usedKeyboard")
            })),
            SD = Wc.b.heldSizer((() => (0, xC.j)(DD))),
            BD = Yc(DD, CD, {
              prevents: DD => pD.prevents(DD),
              keyPressed: DD => {
                pD.moves(DD) && (bD.add(DD), pI() && QD.i.Uo("usedKeyboard"))
              },
              keyReleased: DD => {
                bD.delete(DD)
              },
              keysReleased: () => {
                bD.clear()
              },
              resized: () => {
                cI.h.measure(DD.getBoundingClientRect()), (0, sc.o)()
              },
              sizeCanvas: SD,
              watchRenderScale: CD => {
                const cD = (0, xC.k)(DD, CD),
                  ID = Wc.b.onRelease(CD);
                return () => {
                  cD(), ID()
                }
              },
              touchStarting: () => {
                cI.h.measure(DD.getBoundingClientRect())
              },
              viewShown: cD,
              touchUiShown: () => WD.d.get("isTouchScreen"),
              ctrlCombosAreGames: pI,
              inspect: (DD, CD, cD) => {
                pD.checks(CD, cD) && ID(DD)
              },
              canLock: () => lc(DD)
            }),
            yD = (0, ic.e)(CD);
          return () => {
            fD(), wD(), (0, Hc.p)(null), yD(), BD()
          }
        }(ZD, ((DD, CD, cD, ID, pD) => {
          var iD;
          Pw(UD, (() => {
            UD.rings.input.writeRecord(DD, CD, cD, ID, pD)
          })), null === (iD = yf) || void 0 === iD || iD.onInput(DD), !Jf && (0, wI.i)(DD, pD) && (0, wI.e)((() => {
            Ri !== UD || Tb || UD.isStopped || !Mw() || bw(UD, !1, "budget", !1)
          }))
        }), (() => zb), (DD => {
          var CD;
          null === (CD = yf) || void 0 === CD || CD.onEvent(DD)
        }));
        if (UD.isStopped) return GD(), null;
        Cf = GD;
        const RD = () => !UD.isStopped && !lb;
        if (UD.isStopped) return null;
        (0, iC.K)((() => {
          "call" === (0, iC.n)() && UD.crash(Dc.w, (0, iC.m)())
        }));
        const kD = (0, Dc.M)(UD.rings.worker, (() => {
          bw(UD, !1, "budget")
        }));
        If = function(DD, CD) {
          return Hw().then((DD => {
            let {
              prefetchWorldgenWorker: CD
            } = DD;
            CD()
          }), (() => {})), new Lp({
            module: (0, iC.s)(),
            decodeSettings: DD => {
              const CD = (0, nD.q)();
              if (null === CD) throw new Error("no game code to decode the world-gen seed with");
              return CD.decodeMapSettings(DD)
            },
            loadWorker: Uw,
            onMapWithoutWorldgen: () => {
              xw((DD => {
                let {
                  stopWorldgenWorkerPrefetch: CD
                } = DD;
                CD()
              }))
            },
            onLoadFailed: DD => {
              (0, nc.reportWorldgenLoadFailure)(DD, si)
            },
            onWorkerLost: DD => {
              (0, nc.reportWorkerLost)(Dc.C, DD, si)
            },
            onStartTimeout: DD => {
              (0, nc.reportWorkerStartTimeout)(Dc.C, DD, si)
            },
            onGaveUp: DD => {
              (0, nc.reportWorldgenGaveUp)(DD, si)
            },
            onMemoryStats: DD => {
              var CD;
              null === (CD = bf) || void 0 === CD || CD.noteWorldgen(DD)
            },
            onMemoryGone: () => {
              var DD;
              null === (DD = bf) || void 0 === DD || DD.worldgenGone()
            },
            write: (cD, ID, pD, iD, fD) => {
              Pw(DD, (() => {
                DD.rings.worker.writeWorkerRecord(cD, ID, pD, 0, iD, fD) || DD.crash(Dc.C, `a world-gen record of kind ${ID} did not fit the worker-in ring`)
              })), CD()
            }
          })
        }(UD, kD), ff = function(DD, CD) {
          return new zI({
            module: (0, iC.s)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: DD
              }, CD] = await Promise.all([cD.e(40).then((() => cD(42515))), Promise.resolve().then((() => cD(90))).then((DD => {
                let {
                  isMobile: CD
                } = DD;
                return CD()
              }), (() => !1))]);
              return {
                create: DD,
                count: (0, XC.b)(navigator.hardwareConcurrency, CD)
              }
            },
            write: (cD, ID, pD, iD, fD, bD) => {
              (0, sc.l)(), Pw(DD, (() => {
                DD.rings.worker.writeWorkerRecord(cD, ID, pD, iD, fD, bD) || DD.crash(Dc.p, `a meshing record of kind ${ID} did not fit the worker-in ring`)
              })), CD()
            },
            onWorkerLost: DD => {
              (0, nc.reportWorkerLost)(Dc.p, DD, si)
            },
            onLightFault: (DD, CD) => {
              (0, nc.reportLightFault)(DD, CD, si)
            },
            onStartTimeout: DD => {
              (0, nc.reportWorkerStartTimeout)(Dc.p, DD, si)
            },
            onMemoryStats: (DD, CD) => {
              var cD;
              null === (cD = bf) || void 0 === cD || cD.noteMeshWorker(DD, CD)
            },
            onMemoryGone: DD => {
              var CD;
              null === (CD = bf) || void 0 === CD || CD.meshWorkerGone(DD)
            },
            fail: (CD, cD) => {
              const ID = () => {
                DD.crash(Dc.p, void 0 === cD ? CD : new Error(CD, {
                  cause: cD
                }))
              };
              void 0 !== cD ? qw({
                site: Dc.p,
                error: cD
              }, ID) : ID()
            }
          })
        }(UD, kD);
        const sD = (0, eI.p)(NC.clientSideServerUrls.staticUrl, {
            onTableFailed: DD => {
              qw({
                site: nc.MODEL_FEED_SITE,
                error: DD
              }, (() => {}), RD)
            },
            packUrl: DD => {
              var CD, cD;
              return null !== (CD = null === (cD = kQ()) || void 0 === cD ? void 0 : cD.modelUrl(DD)) && void 0 !== CD ? CD : null
            }
          }),
          ED = function(DD, CD, cD) {
            const ID = cD => {
              var ID, pD;
              return null !== (ID = null === (pD = CD()) || void 0 === pD ? void 0 : pD.drawnUrl(cD)) && void 0 !== ID ? ID : DD.url(cD)
            };
            return (0, sI.l)((0, TI.k)(ID), cD)
          }(sD, (() => tf), kQ),
          eD = new TI.e(ED, (DD => {
            console.warn(`${Si} image ${DD.key.kind}:${DD.key.index}:${DD.key.word} failed`, DD.error)
          }));
        Nf = eD, gf = new YI(UD, ED, ((DD, CD) => {
          void 0 === CD ? console.warn(`${Si} ${DD}`) : WQ(DD, CD)
        }));
        const uD = new WI.i(sD, function(DD, CD) {
          let ID = !1,
            pD = null,
            iD = null;
          const fD = {
              onUnavailable: (cD, ID) => {
                iD ??= qw({
                  site: nc.MODEL_POOL_SITE,
                  error: cD,
                  urls: ID
                }, (() => {
                  (0, nc.reportModelPoolFailure)(cD, DD)
                }), CD)
              },
              onDecoderFailed: (cD, ID) => {
                const pD = () => {
                  (0, nc.reportDracoDecoderFailure)(cD, DD)
                };
                void 0 !== ID ? qw({
                  site: nc.MODEL_POOL_SITE,
                  error: cD,
                  urls: ID
                }, pD, CD) : pD()
              },
              onWorkerLost: CD => {
                (0, nc.reportWorkerLost)(nc.MODEL_POOL_SITE, CD, DD)
              },
              onModuleRetry: (CD, cD) => {
                (0, nc.reportModelsModuleRetry)(CD, cD, DD)
              }
            },
            bD = cD.e(42).then((() => cD(42518))).then((DD => {
              let {
                pageModelPool: CD
              } = DD;
              if (ID) return null;
              const cD = CD(fD);
              return pD = cD.unlisten, Zf = cD.pool, cD.pool
            }), (DD => (ID || fD.onUnavailable(DD, void 0), null)));
          return of = () => {
            var DD;
            ID = !0, null === (DD = pD) || void 0 === DD || DD(), Zf = null
          }, (DD, CD) => bD.then((cD => {
            var ID;
            return null !== (ID = null === cD || void 0 === cD ? void 0 : cD.build(DD, CD)) && void 0 !== ID ? ID : (0, uI.x)(DD, "the model workers did not load")
          })).then((DD => null !== iD && (0, uI.o)(DD) ? iD.then((() => DD)) : DD))
        }(HD, RD), (DD => {
          DD.startup ? (vw(), qw({
            site: nc.MODEL_FEED_SITE,
            error: DD.error,
            urls: "" === DD.url ? void 0 : [DD.url]
          }, (() => {
            (0, nc.reportModelFailure)(DD, HD)
          }))) : (0, nc.reportModelFailure)(DD, HD)
        }), {
          onWritten: (DD, CD) => {
            eD.glbWritten(DD, CD)
          },
          onTaken: (DD, CD) => {
            eD.glbTaken(DD, CD)
          },
          onPackFileFailed: (DD, CD) => {
            console.warn(`${Si} the texture pack's model file ${DD} failed: the shipped one loads`, CD)
          }
        });
        tf = uD;
        const hD = new RI.f(UD);
        Yi = hD, hD.swap((DD => {
          const CD = () => {
            (0, nc.reportTerrainTextureFailure)(DD, HD)
          };
          if (Ob) return void CD();
          const cD = () => !Ob,
            ID = null === DD.url ? void 0 : [DD.url];
          qw({
            site: Dc.B,
            error: DD.error,
            urls: ID
          }, CD, cD)
        })).then((DD => {
          null !== DD && (DD || UD.isStopped || console.warn(`${Si} the core refused the terrain textures: terrain draws untextured`), Hf(UD))
        }));
        const rD = new LC(UD, ((DD, CD) => {
          console.warn(`${Si} ${DD}`, ...void 0 === CD ? [] : [CD])
        }));
        rD.feed(), null !== BD && function(DD, CD, ID, pD, iD, fD) {
          let bD = null,
            QD = null,
            wD = !1;
          const SD = {
            textures: null,
            stop: () => {
              var DD, CD;
              wD = !0, null === (DD = QD) || void 0 === DD || DD(), null === (CD = bD) || void 0 === CD || CD(), EI.d.setSettled(null), null !== Ei && Eb.clear(Ei)
            }
          };
          di = SD, QD = sQ().follow((QD => {
            null !== QD && Promise.all([cD.e(193), cD.e(45)]).then((() => cD(42480))).then((cD => {
              let {
                PackTextures: BD
              } = cD;
              if (wD || DD.isStopped) return;
              const yD = new BD({
                feed: QD,
                terrain: CD,
                backend: ID,
                stopped: () => DD.isStopped,
                landed: () => {
                  Hf(DD)
                },
                packSwapped: () => {
                  (0, sI.h)(pD), fD.feed((() => async function(DD) {
                    const CD = null === DD ? null : await DD.averageColours;
                    return null === CD ? TC() : lC(CD)
                  }(yD.assets))), dQ(yD.iconOverrides()), iD.refresh().then((DD => {
                    null !== DD && console.info(`${Si} texture pack models: ${DD.resent} of ${DD.delivered} files written again, ${DD.refetched} refetched`)
                  }))
                },
                settled: (DD, CD, cD) => {
                  var ID;
                  (EI.d.setSettled({
                    state: DD,
                    files: CD
                  }), null === DD.gameSource && (0, Zc.d)(DD.pack, cD), cD) || function(DD) {
                    const CD = Ei;
                    null !== CD && Eb.apply(CD, DD).then((CD => {
                      CD && DD && console.info(`${Si} the texture pack's animations are in (${Object.keys(DD).length} files)`)
                    }))
                  }(null === (ID = DD.pack) || void 0 === ID ? void 0 : ID.animations)
                },
                settling: () => {
                  EI.d.setSettled(null)
                },
                warn: WQ,
                maxTextureSize: () => Promise.resolve((0, FC.cb)(document.createElement("canvas")))
              });
              SD.textures = yD, bD = yD.start()
            }), (DD => {
              console.warn(`${Si} the texture pack's terrain didn't load: the built atlas stays`, DD)
            }))
          }))
        }(UD, hD, BD, eD, uD, rD);
        const AD = () => {
            UD.setTextureLayers("")
          },
          FD = DD => {
            (vC ??= cD.e(50).then((() => cD(42527))).then((DD => {
              let {
                TEXTURE_NAMES: CD
              } = DD;
              return CD
            }), (DD => {
              throw vC = null, DD
            })), vC).then((DD => {
              UD.setTextureLayers(DD) || UD.isStopped || (console.warn(`${Si} the core refused the texture names: textured Boxes draw textureNotFound`), AD())
            }), (CD => {
              if (UD.isStopped) return;
              const [cD, ...ID] = DD;
              void 0 === cD ? qw({
                site: nc.TEXTURE_NAMES_SITE,
                error: CD
              }, (() => {
                console.warn(`${Si} the texture names didn't load, so textured Boxes draw textureNotFound`, CD), AD()
              }), RD) : setTimeout((() => {
                FD(ID)
              }), cD)
            }))
          };
        if (FD(Ji), null !== BD && !await async function(DD, CD, cD, ID, iD, fD) {
            var bD;
            const QD = (0, FC.H)(cD);
            if (null === QD) return DD.crash(yi, new Error(`this ${ID} build has no openRenderer`)), !1;
            let wD;
            Sb = QD;
            try {
              var SD, BD, yD, MD;
              const pD = null !== (SD = null === (BD = Ti) || void 0 === BD ? void 0 : BD.pagePreviews()) && void 0 !== SD ? SD : null,
                bD = null !== (yD = null === (MD = Ti) || void 0 === MD ? void 0 : MD.previewModule(cD)) && void 0 !== yD ? yD : null;
              if (null === pD || null === bD) {
                null === pD || void 0 === pD || pD.endSession(!1), wD = (0, xC.d)().sampleCount, await (0, FC.g)(CD, QD, fD, GQ, wD, await iD);
                const DD = (0, FC.k)(cD);
                null === DD && console.warn(`${Si} this ${ID} build has no image registry: sky and model images won't show`), (0, GI.d)(DD)
              } else {
                (0, cp.e)() && await (0, YD.k)();
                const cD = (0, cp.I)();
                if (null !== cD) {
                  const CD = (0, FC.Z)(QD);
                  return DD.crash(nc.RENDER_RELOAD_SITE, new Error(`${cD}${void 0===CD?"":` (${CD.message})`}`)), !1
                }
                wD = await pD.bindSession(bD, CD, (async DD => (0, FC.v)(QD, yi, fD, DD, GQ, await iD)))
              }
            } catch (pD) {
              return DD.crash(yi, pD), !1
            }(function(DD, CD) {
              const cD = DD,
                {
                  requestCapture: ID,
                  takeCapture: pD
                } = cD;
              if ("function" !== typeof ID || "function" !== typeof pD) return;
              const iD = {
                request() {
                  ID.call(cD, CD)
                },
                take() {
                  var DD;
                  return null !== (DD = pD.call(cD)) && void 0 !== DD ? DD : null
                }
              };
              window[wp] = iD
            })(CD, wD), vb = wD, Qb = !0;
            const tD = performance.now();
            return wb.boundAtMs = null !== (bD = (0, cp.M)()) && void 0 !== bD ? bD : tD, wb.indirectHangs = (0, cp.B)(), console.info(`${Si} ${ID} renderer bound at ${Math.round(tD)} ms`), !DD.isStopped
          }(UD, PD, OD, BD, MD, ZD)) return null;
        if (null !== BD) {
          var DC, CC, cC;
          (0, wC.D)(BD);
          const DD = () => !UD.isStopped && yw();
          cD.e(185).then((() => cD(8925))).then((CD => {
            let {
              devTools: cD
            } = CD;
            UD.isStopped || cD.setHost(function(DD) {
              return {
                tools: Cp,
                async downloadScene(CD, cD) {
                  let {
                    width: ID,
                    height: pD,
                    colouring: iD
                  } = cD;
                  "screenshot" === CD && null === iD ? await (0, AI.d)(DD, ID, pD) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(DD, CD) {
              return {
                canvas: DD,
                maxTextureSize: FI,
                drawing: CD,
                resize: (DD, CD) => {
                  (0, Hc.u)(GC.tb.Resize, 0, DD, CD, (0, Hc.k)(1))
                },
                restoreSize: () => {
                  const CD = (0, xC.j)(DD);
                  null !== CD && (0, Hc.u)(GC.tb.Resize, 0, CD.cssWidth, CD.cssHeight, (0, Hc.k)(CD.renderScale))
                },
                onFrameDrawn: DD => (Dp.add(DD), () => {
                  Dp.delete(DD)
                })
              }
            }(ZD, DD)))
          }), (DD => {
            console.warn(`${Si} the developer tools didn't load: no captures this session`, DD)
          }));
          const CD = "webgpu" === BD && null !== (DC = null === wD || void 0 === wD || null === (CC = wD.adapter) || void 0 === CC ? void 0 : CC.vendor) && void 0 !== DC ? DC : null;
          Nb = {
            backend: BD,
            canvas: ZD,
            fallbackReason: null !== (cC = null === wD || void 0 === wD ? void 0 : wD.reason) && void 0 !== cC ? cC : null,
            adapterVendor: CD
          }, AQ();
          try {
            (0, sc.u)(BD, ZD, CD)
          } catch (pD) {
            (0, sc.y)(), console.error(`${Si} the quality steps didn't start`, pD)
          }
        }
        const {
          storagePullBreaks: IC,
          splitPassBreaks: BC
        } = await MD;
        BC && console.warn(`${Si} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const ZC = IC ? dD.e : (0, dD.j)(wD, (0, PC.f)());
        if ((0, Up.o)("webgpuloss")) {
          var oC, gC;
          const DD = {
            backend: BD,
            reason: null !== (oC = null === wD || void 0 === wD ? void 0 : wD.reason) && void 0 !== oC ? oC : null,
            source: null !== (gC = null === wD || void 0 === wD ? void 0 : wD.source) && void 0 !== gC ? gC : null,
            storagePullBreaks: IC,
            noWebGpu: ZC.messageKey
          };
          (0, xp.b)((CD => {
            CD.noteWasmPick(DD)
          }))
        }
        const mC = "webgpu" === BD && !IC;
        if (mf = (0, dD.m)(mC ? UD : null, mC && null !== (fD = null === (bD = Ti) || void 0 === bD ? void 0 : bD.pagePreviews().gt) && void 0 !== fD ? fD : null, ZC, WQ), Tb) return null;
        if (jD.reserveAtJoin((0, lI.i)(null !== JD && void 0 !== JD ? JD : Mc.g)), UD.isStopped) return null;
        const nC = DD => {
          if (null !== gb) try {
            gb.animationFrame(DD)
          } catch (pD) {
            Cw(pD)
          }
          if (function(DD, CD) {
              return CD && !Tb && !Jf && Mw() && yw() && DD.framePaces(performance.now())
            }(UD, zb)) return UD.writePendingInput(), (0, mD.f)(DD, Qw), FQ(!1, DD), void requestAnimationFrame(nC);
          bw(UD, zb, "budget") && ((0, UC.e)(UD.lastFrameKind) && yw() && (0, mD.f)(DD, Qw), FQ(zb && Kb, DD), ab.frame(UD.lastFrameKind, zb && yw(), DD), gw(UD), jD.afterFrame(), requestAnimationFrame(nC))
        };
        requestAnimationFrame(nC);
        return function(DD) {
          if (DD.has("inputLog") && (0, CI.k)((DD => {
              let {
                action: CD,
                down: cD,
                press: ID
              } = DD;
              console.info(`${II} input ${CD} ${cD?"down":"up"} press ${ID} at ${performance.now().toFixed(1)}`)
            })), DD.has("inputDump")) {
            const DD = [];
            iI = DD, Object.assign(window, {
              bloxdInputDump: () => DD.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Bf = function(DD, CD) {
          let cD = null;
          const ID = () => {
              null !== cD && (clearInterval(cD), cD = null)
            },
            pD = () => {
              document.hidden ? cD ??= setInterval((() => {
                bw(DD, !1, "budget") ? (gw(DD), CD.afterFrame()) : ID()
              }), qi) : ID()
            };
          return document.addEventListener("visibilitychange", pD), pD(), () => {
            ID(), document.removeEventListener("visibilitychange", pD)
          }
        }(UD, jD), UD
      }(CD).then((DD => {
        var CD;
        (ID(si), ri(null !== DD), null !== DD && (tp = performance.now()), ei(DD), null === DD) ? null === (CD = Ti) || void 0 === CD || CD.pagePreviews().endSession(null === (0, iC.n)()): Pf("booted")
      }), (DD => {
        ID(si), ri(!1), ei(null), Nw({
          site: Mi,
          error: DD,
          header: null
        }, si)
      }))
    }

    function sb() {
      const DD = Ei;
      null !== DD && Gb().then((CD => {
        let {
          pageBuiltInAnimationPack: cD
        } = CD;
        cD().provide(DD)
      }), (DD => {
        console.warn(`${Si} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, DD)
      }))
    }
    const Eb = new class {
      constructor(DD) {
        this.deps = DD, this.latest = 0, this.Lb = null
      }
      apply(DD, CD) {
        return this.load(DD, CD, 0)
      }
      async load(DD, CD, cD) {
        var ID;
        const pD = ++this.latest,
          iD = this.deps.compiler;
        if (void 0 === CD || null === CD || "object" !== typeof CD || 0 === Object.keys(CD).length || null === iD) return this.drop(DD), !1;
        if ((null === (ID = this.Lb) || void 0 === ID ? void 0 : ID.module) === DD && (0, eC.Xd)(this.Lb.files, CD)) return !1;
        try {
          const [cD, ID] = await Promise.all([iD(), this.deps.builtIns()]);
          if (pD !== this.latest) return !1;
          const fD = await cD(CD, AC, {
            builtIns: ID
          });
          if (pD !== this.latest) return !1;
          const bD = this.call(DD, fD);
          if (void 0 === bD) throw new rC("the compiled animations didn't read against the built-in pack");
          return this.Lb = {
              module: DD,
              files: CD
            },
            function(DD) {
              for (let CD = 0; CD + 2 < DD.length; CD += 3) {
                ("error" === DD[CD] ? console.error : console.warn)(`Animation for the texture pack: ${DD[CD+1]}: ${DD[CD+2]}`)
              }
            }(bD), !0
        } catch (bD) {
          var fD;
          if (pD !== this.latest) return !1;
          this.drop(DD), 0 === cD && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", bD);
          const ID = (null !== (fD = this.deps.retryAfterMs) && void 0 !== fD ? fD : hC)[cD];
          return void 0 === ID || bD instanceof rC || (0, uC.g)(DD) || setTimeout((() => {
            pD === this.latest && this.load(DD, CD, cD + 1)
          }), ID), !1
        }
      }
      call(DD, CD) {
        try {
          return DD.BcD(CD)
        } catch (cD) {
          throw (0, uC.j)(DD, cD), cD
        }
      }
      clear(DD) {
        this.latest++, this.drop(DD)
      }
      drop(DD) {
        const CD = this.Lb;
        if (this.Lb = null, (null === CD || void 0 === CD ? void 0 : CD.module) === DD && !(0, uC.g)(DD)) try {
          this.call(DD, null)
        } catch {}
      }
    }({
      compiler: YC.c,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: DD
        } = await Gb();
        return DD().whenSet()
      },
      warn: WQ
    });
    async function eb(DD, CD) {
      let ID = !1;
      await ub({
        matchmake: async () => {
          const {
            guestJoinTarget: pD,
            guestJoinWithPack: iD
          } = await cD.e(342).then((() => cD(42463)));
          return ID ? pD(DD, CD, eQ()) : (ID = !0, iD(DD, CD, (CD => uQ(DD, CD)), eQ))
        },
        onFailure: DD => {
          (0, nc.showJoinFailure)(DD, si)
        },
        rejoin: SQ,
        invalidateTrafficCode: BQ
      })
    }
    async function ub(DD) {
      let {
        matchmake: CD,
        onFailure: cD,
        rejoin: pD,
        invalidateTrafficCode: iD,
        pageReady: fD,
        signal: bD
      } = DD;
      const QD = () => !0 === (null === bD || void 0 === bD ? void 0 : bD.aborted);
      let wD;
      const SD = EI.d.rejoinHold(),
        BD = (0, gc.Q)("wasm", nw);
      let yD = !1,
        MD = performance.now();
      try {
        if (!await Ai) return {
          kind: "stopped"
        };
        if (QD()) return {
          kind: "tc"
        };
        Rb().catch((() => {}));
        let DD = await CD();
        MD = performance.now();
        const cD = () => performance.now() - DD.matchedAt <= DD.freshMs,
          ID = rb(DD.target).catch((() => {}));
        cD() && !QD() && (wD = new JI(DD.target, {
          signal: bD
        }));
        const iD = performance.now();
        if (null === await ui) return {
          kind: "stopped"
        };
        var tD;
        if (function(DD) {
            var CD, cD;
            if (Sp.d.markGameEngineConstructed(), Zp) return;
            Zp = !0;
            const ID = Math.max(DD, null !== (CD = yp) && void 0 !== CD ? CD : DD);
            (0, Bp.j)("ready", Math.max(0, (null !== (cD = Mp) && void 0 !== cD ? cD : ID) - ID) / 1e3)
          }(iD), QD() || (null !== Mp && null !== tp ? ((0, aC.j)("wasm_loaded", Mp), (0, aC.j)("wasm_core_ready", tp)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await ID, !cD() && !QD()) null === (tD = wD) || void 0 === tD || tD.rematched(), DD = await CD(), MD = performance.now();
        if (QD()) return {
          kind: "tc"
        };
        const SD = await async function(DD) {
          var CD, cD, ID;
          let {
            signal: pD,
            rejoin: iD = null,
            early: fD,
            pageReady: bD
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== pD && void 0 !== pD && pD.aborted) throw new DOMException("the join was left", "AbortError");
          const QD = (wD = Af, SD = performance.now(), null !== wD && SD - wD < oI);
          var wD, SD;
          Af = null;
          const BD = new AbortController;
          DQ({
            controller: BD,
            game: null !== (CD = null === (cD = DD.session) || void 0 === cD ? void 0 : cD.gameNameWithVariation) && void 0 !== CD ? CD : null
          }), Ff = null, null === (ID = cb) || void 0 === ID || ID.abort(), cb = null, pb = !1, ib = null, fb.clear();
          const yD = () => {
            (0, gC.j)(BD, (0, gC.g)(pD))
          };
          null === pD || void 0 === pD || pD.addEventListener("abort", yD, {
            once: !0
          });
          try {
            var MD, tD, ZD;
            const CD = await ui;
            if (null === CD || CD.isStopped || Tb) throw new Error("no core is running to join a game with");
            if (DD.session && null !== mf) {
              const CD = await Ab(mf.join(DD.session.gameNameWithVariation), BD.signal);
              if ((0, Up.o)("webgpuloss")) {
                const cD = DD.session.gameNameWithVariation,
                  ID = mf.couldntRunInJoinedGame();
                (0, xp.b)((DD => DD.noteWasmJoin(cD, CD, ID)))
              }
              if (null !== CD) throw new dD.g(CD)
            }
            const [, , , {
              joinRoom: cD
            }] = await Ab(Promise.all([(0, nD.j)(CD), rb(DD), null === bD || void 0 === bD ? void 0 : bD(), Rb()]), BD.signal), ID = DD.session, pD = ID ? {
              ...tQ,
              attachSocket: CD => {
                const cD = mQ(CD, DD.endpoint);
                var pD;
                null !== cD && (Wf = {
                  conn: cD,
                  info: ID
                }, null === (pD = sf) || void 0 === pD || pD(ID.playerDbId));
                return cD
              }
            } : tQ, wD = await cD(pD, DD, {
              signal: BD.signal,
              early: fD
            }).catch((DD => {
              throw function(DD) {
                if (!(DD instanceof VD.d)) return DD;
                if ("roomError" === DD.stage && null !== ib) return hb(new VD.d(DD.message, DD.stage, DD.code, ib), DD);
                const CD = "closed" === DD.stage && null !== Db ? fb.get(Db.conn) : void 0;
                return void 0 === CD ? DD : hb(new VD.d(DD.message, DD.stage, CD.code), DD)
              }(DD)
            }));
            if (df !== BD) throw wD.leave(), new DOMException("the join was left", "AbortError");
            cQ(wD), null === (MD = ff) || void 0 === MD || MD.newGame();
            const SD = function(DD) {
              var CD, cD;
              const {
                session: ID
              } = DD, pD = void 0 === ID ? DD.joinOptions.lobbyName : ID.lobbyName;
              return {
                endpoint: DD.endpoint,
                game: null !== (CD = null === ID || void 0 === ID ? void 0 : ID.gameNameWithVariation) && void 0 !== CD ? CD : DD.roomName,
                lobby: String(null !== pD && void 0 !== pD ? pD : null),
                postCookies: null !== (cD = DD.postCookies) && void 0 !== cD ? cD : null
              }
            }(DD);
            kf.set(wD, SD), HI(SD);
            const yD = performance.now(),
              oD = {
                conn: wD.conn,
                rejoin: iD,
                game: null !== (tD = null === (ZD = DD.session) || void 0 === ZD ? void 0 : ZD.gameNameWithVariation) && void 0 !== tD ? tD : "",
                joinedAt: yD,
                rejoinedAt: QD ? yD : null,
                overflow: null
              };
            Ef = oD,
              function(DD, CD) {
                JQ();
                const cD = {
                  endpoint: CD,
                  roomId: DD.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new Sc({
                    reconnect: (DD, CD, ID) => async function(DD, CD, cD, ID) {
                      const {
                        roomId: pD,
                        roomToken: iD
                      } = aQ(DD, CD), fD = Ri;
                      if (null === fD || fD.isStopped || Tb) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: bD
                      } = await Ab(Rb(), cD), QD = {
                        ...tQ,
                        attachSocket: CD => ef !== DD || 0 === DD.heldConn ? (CD.close(), null) : mQ(CD, DD.endpoint, !0)
                      };
                      return bD(QD, DD.endpoint, pD, iD, {
                        signal: cD,
                        onAttached: ID
                      })
                    }(cD, DD, CD, ID),
                    releaseSeat: DD => {
                      !async function(DD, CD) {
                        const {
                          roomId: cD,
                          roomToken: ID
                        } = aQ(DD, CD);
                        try {
                          const {
                            leaveHeldSeat: CD
                          } = await Rb();
                          await CD(DD.endpoint, cD, ID)
                        } catch (pD) {
                          console.warn(`${Si} the held seat of a game left while it reconnected couldn't be released`, pD)
                        }
                      }(cD, DD)
                    },
                    isLive: () => ef === cD && null !== Ef && !Tb,
                    kU: DD => {
                      rf = DD, qQ()
                    },
                    onReconnected: DD => {
                      ! function(DD) {
                        const CD = Rf;
                        if (null !== CD && CD !== DD) {
                          const cD = kf.get(CD);
                          void 0 !== cD && kf.set(DD, cD), Jb === CD && (Jb = DD), CD.detach()
                        }
                        cQ(DD)
                      }(DD)
                    },
                    onGaveUp: (DD, CD) => {
                      ! function(DD, CD, cD) {
                        var ID, pD;
                        console.warn(`${Si} gave up reconnecting (${cD.reason}, ${cD.attempts} attempts)`, cD.lastError), (0, nc.reportReconnectGaveUp)(cD, si);
                        const iD = null !== (ID = null === (pD = Ef) || void 0 === pD ? void 0 : pD.rejoin) && void 0 !== ID ? ID : null;
                        KQ(DD, "gaveUp"), pQ();
                        const fD = {
                          code: DD.dropCode,
                          name: null,
                          reason: Pi,
                          canReconnect: !CD,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        MQ(fD, CD ? null : iD, !1, {
                          reasonKey: Hi,
                          canPlayAgain: CD
                        })
                      }(cD, DD, CD)
                    }
                  })
                };
                ef = cD, null !== uf && uf.conn === DD.conn && cD.resume.onInitialInfo(uf)
              }(wD, DD.endpoint), performance.mark(oi), (0, aC.j)("wasm_joined", yD), setTimeout((() => {
                Rf === wD && (0, aC.f)()
              }), 0), sb(), console.info(`${Si} joined ${DD.roomName} as ${wD.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const vD = Ff;
            Ff = null, null !== vD && bQ(oD, vD.mask, vD.frames);
            const ND = fb.get(wD.conn);
            return fb.clear(), void 0 !== ND && (cQ(null), yQ(wD.conn, ND.code, ND.reason)), wD
          } finally {
            var oD;
            null === pD || void 0 === pD || pD.removeEventListener("abort", yD), df === BD && CQ(Rf, null), (null === (oD = Db) || void 0 === oD ? void 0 : oD.join) === BD && (Db = null)
          }
        }(DD.target, {
          signal: bD,
          rejoin: pD(DD.target),
          early: wD,
          pageReady: fD
        });
        return yD = !0, {
          kind: "joined",
          game: SD
        }
      } catch (oD) {
        if (oD instanceof DOMException && "AbortError" === oD.name || QD()) return {
          kind: "tc"
        };
        if (Tb) return {
          kind: "stopped"
        };
        if (pb && (pb = !1, await iD().catch((DD => {
            console.warn(`${Si} the cached traffic code could not be dropped`, DD)
          }))), null === await ui) return {
          kind: "stopped"
        };
        if (oD instanceof dD.g) return cD(oD, performance.now() - MD), {
          kind: "failed",
          error: oD,
          reloading: !1
        };
        if (oD instanceof VD.d && oD.code === ID.e.wasmClientNotAllowed.code && Vb) return TQ("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: oD,
          reloading: !0
        };
        const DD = oD instanceof VD.d && oD.code === ID.e.outdatedVersion.code,
          CD = () => null === Rf,
          pD = await qw({
            site: nc.JOIN_SITE,
            error: oD,
            outdated: DD
          }, (() => {
            cD(oD, performance.now() - MD)
          }), CD);
        return {
          kind: "failed",
          error: oD,
          reloading: pD
        }
      } finally {
        var ZD;
        yD || BD.end(), EI.d.releaseHold(SD);
        const DD = null === (ZD = wD) || void 0 === ZD ? void 0 : ZD.release();
        DD && (0, nc.reportUnusedSeat)(DD, si)
      }
    }

    function hb(DD, CD) {
      return DD.stack = CD.stack, DD
    }

    function rb(DD) {
      return DD.session ? (0, nD.p)(Wi, DD.session.gameNameWithVariation) : Promise.resolve()
    }

    function Ab(DD, CD) {
      return (0, gC.r)(CD), new Promise(((cD, ID) => {
        const pD = () => {
          ID((0, gC.g)(CD))
        };
        CD.addEventListener("abort", pD, {
          once: !0
        }), DD.then((DD => {
          CD.removeEventListener("abort", pD), cD(DD)
        }), (DD => {
          CD.removeEventListener("abort", pD), ID(DD)
        }))
      }))
    }

    function Fb() {
      DQ(null)
    }

    function DQ(DD) {
      var CD, cD, ID;
      (function() {
        const DD = ef;
        null !== DD && KQ(DD, "left")
      }(), null === Df || Df.left) || (Df.left = !0, null === (ID = (0, nD.g)()) || void 0 === ID || ID.socketLeft(), (0, yD.o)({
        websocketUrl: null
      }));
      df && (0, gC.j)(df, new DOMException("the join was left", "AbortError")), pQ(null !== DD), null === (CD = mf) || void 0 === CD || CD.leave();
      const pD = Rf;
      null !== DD && EI.d.setGame(DD.game), CQ(null, null !== (cD = null === DD || void 0 === DD ? void 0 : DD.controller) && void 0 !== cD ? cD : null), null === pD || void 0 === pD || pD.leave(), IQ(0), (0, ZC.d)()
    }

    function CQ(DD, CD) {
      Rf = DD, df = CD, null === Rf && null === df && EI.d.setGame(void 0)
    }

    function cQ(DD) {
      CQ(DD, df)
    }

    function IQ(DD) {
      const CD = Ri;
      return null !== ai && !Tb && null !== CD && !CD.isStopped && (!!ai(VD.j, 0, (0, VD.y)(DD)) && (Vf = !0, 0 === DD || Jf || bw(CD, !1, "all"), !0))
    }

    function pQ() {
      var DD, CD;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, gc.f)();
      const cD = null !== (DD = null === (CD = Ef) || void 0 === CD ? void 0 : CD.overflow) && void 0 !== DD ? DD : null;
      Ef = null, null !== cD && (0, nc.reportEventOverflow)(cD, si)
    }

    function iQ() {
      null !== Rf || null !== df ? Fb() : nQ()
    }

    function fQ(DD, CD) {
      console.warn(`${Si} the event buffer refused records in ${CD} frames (categories ${DD})`), Tb || (null !== Ef ? bQ(Ef, DD, CD) : null !== df && function(DD, CD, cD) {
        var ID;
        const pD = function(DD, CD) {
          return null === DD ? "drop" : DD.activated ? "keep" : 0 !== (CD & RC.o.NetSession) ? "fail" : "drop"
        }((null === (ID = Db) || void 0 === ID ? void 0 : ID.join) === DD ? Db : null, CD);
        "keep" === pD ? Ff = {
          mask: CD,
          frames: cD
        } : "fail" === pD && (0, gC.j)(DD, new Error("the join's net session was lost to an event overflow"))
      }(df, DD, CD))
    }

    function bQ(DD, CD, cD) {
      const ID = DD.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      ID.frames += cD, ID.acks++, ID.mask |= CD;
      const pD = function(DD, CD, cD) {
        if (0 === (DD & RC.o.NetSession)) return "none";
        const ID = null !== CD.rejoinedAt && cD - CD.rejoinedAt < vI;
        return null === CD.rejoin || ID ? "fail" : "rejoin"
      }(CD, DD, performance.now());
      "none" !== pD && queueMicrotask((() => {
        if (Ef !== DD) return;
        const CD = "rejoin" === pD && performance.now() - Cb >= aD.c;
        ID.outcome = CD ? "rejoined" : "failed", MQ(function(DD, CD) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: DD,
            automaticallyReconnect: CD,
            requiresRefresh: !1
          }
        }(null !== DD.rejoin, CD), DD.rejoin, CD), Fb(), CD && (Af = performance.now())
      }))
    }

    function QQ(DD) {
      zb = DD, jb && wQ(jb, DD)
    }

    function wQ(DD, CD) {
      DD.style.visibility = CD ? "visible" : "hidden"
    }

    function SQ(DD) {
      var CD;
      const cD = DD.roomName,
        ID = null !== (CD = DD.joinOptions.lobbyName) && void 0 !== CD ? CD : null;
      return () => {
        eb(cD, ID)
      }
    }

    function BQ() {
      return cD.e(342).then((() => cD(42463))).then((DD => {
        let {
          invalidateGuestTrafficCode: CD
        } = DD;
        return CD()
      })).catch((DD => {
        console.warn(`${Si} the cached traffic code could not be dropped`, DD)
      }))
    }

    function yQ(DD, CD, cD) {
      var pD, iD;
      let fD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (Tb) return;
      if ((null === (pD = Ef) || void 0 === pD ? void 0 : pD.conn) !== DD) return void(null !== df && fb.set(DD, {
        code: CD,
        reason: cD
      }));
      const {
        rejoin: bD,
        game: QD,
        joinedAt: wD
      } = Ef;
      pQ(), JQ();
      const SD = (0, aD.h)(CD, (0, gI.f)(DD));
      if (console.info(`${Si} the game's connection closed with code ${CD} (${null!==(iD=SD.name)&&void 0!==iD?iD:"unrecognised"})`), CD === ID.e.gameOrPluginKick.code || fD || (0, nc.reportDisconnect)(SD, si, {
          closeReason: cD,
          sinceJoinedMs: performance.now() - wD,
          game: QD
        }), SD.requiresRefresh) {
        const DD = "outdatedVersion" === SD.name,
          cD = new Error(`the game's connection closed with code ${CD}`),
          ID = () => null === Ef && null === df;
        return void qw({
          site: nc.JOIN_SITE,
          error: cD,
          outdated: DD
        }, (() => {
          ID() && MQ(SD, null, !1)
        }), ID)
      }
      const BD = SD.canReconnect ? bD : null,
        yD = null !== BD && SD.automaticallyReconnect && performance.now() - Cb >= aD.c;
      MQ(SD, BD, yD)
    }

    function MQ(DD, CD, cD) {
      var ID;
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (lb) return;
      EI.d.unwantedLeave(cD && null !== CD && 0 === Ib.size), null === (ID = cb) || void 0 === ID || ID.abort();
      const iD = new AbortController;
      cb = iD;
      const fD = null === CD ? null : () => {
        iD.signal.aborted || (iD.abort(), CD())
      };
      if (cD && null !== fD) {
        Cb = performance.now();
        const DD = setTimeout(fD, aD.b);
        iD.signal.addEventListener("abort", (() => {
          clearTimeout(DD)
        }))
      }
      const bD = {
        code: DD.code,
        name: DD.name,
        reason: DD.reason,
        reasonKey: pD.reasonKey,
        reconnect: fD,
        reconnecting: cD,
        requiresRefresh: DD.requiresRefresh,
        canPlayAgain: pD.canPlayAgain
      };
      if (Ib.size > 0)
        for (const wD of [...Ib]) try {
          wD(bD)
        } catch (QD) {
          console.error(`${Si} an unwanted-leave listener threw`, QD)
        } else tI((0, BI.h)(DD, null !== fD, cD), iD.signal).then((CD => {
          CD && (null !== fD ? fD() : DD.requiresRefresh && (0, YD.j)())
        }))
    }
    const tQ = {
      attachSocket: DD => mQ(DD),
      onConnection: DD => (bb.add(DD), () => {
        bb.delete(DD)
      }),
      sendRaw: (DD, CD) => {
        const cD = Df;
        return null !== cD && cD.conn === DD && ow(cD, CD)
      },
      leaveRoom: IQ,
      closeSocket: DD => {
        var CD;
        (null === (CD = Df) || void 0 === CD ? void 0 : CD.conn) === DD && nQ()
      },
      flushNet: OQ
    };

    function ZQ(DD) {
      var CD;
      let {
        aux: cD,
        payload: ID
      } = DD;
      null === (CD = Ri) || void 0 === CD || CD.queueOptions(cD, ID)
    }

    function oQ(DD, CD) {
      ZQ(function(DD, CD) {
        return ip = DD ? {
          preventMovement: CD
        } : null, DD ? fp(CD) : {
          aux: GC.Zb.AdEnd,
          payload: pp
        }
      }(DD, CD))
    }

    function vQ(DD) {
      var CD;
      Lf = DD, null === (CD = Ri) || void 0 === CD || CD.setUiPrefs(DD)
    }

    function NQ(DD, CD) {
      Wi.setMaster(DD, CD)
    }

    function gQ(DD) {
      var CD;
      Tf = DD, null === (CD = Ri) || void 0 === CD || CD.setEnvPrefs(DD)
    }

    function XQ(DD) {
      var CD;
      Gf = DD, null === (CD = Ri) || void 0 === CD || CD.setLookPrefs(DD)
    }

    function mQ(DD) {
      var CD;
      let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(DD.url).origin,
        ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (DD.readyState === WebSocket.CLOSING || DD.readyState === WebSocket.CLOSED) return console.warn(`${Si} a closing or closed socket can't be attached`), null;
      const pD = Ri;
      if (!pD || pD.isStopped) return console.warn(`${Si} no core is running to attach a socket to`), DD.close(), null;
      if (null === (0, nD.g)()) return console.warn(`${Si} the game has not started to attach a socket to`), DD.close(), null;
      if (Uf > GC.A) return console.warn(`${Si} this core has attached all the sockets it can; reload to play on`), DD.close(), null;
      if (Vf && !Jf && (bw(pD, !1, "all"), pD.isStopped || Tb)) return DD.close(), null;
      nQ();
      const iD = Uf++;
      if (!jQ(pD, "open", iD, ID ? GC.Xb.Resume : 0)) return DD.close(), null;
      ID || tC.d.reset(), Db = null === df ? null : {
        join: df,
        conn: iD,
        activated: !1
      }, DD.binaryType = "arraybuffer";
      const fD = new Bc.d((() => {
          ! function(DD, CD) {
            if (Df !== CD || DD.isStopped || null === UQ(CD, ni)) return;
            CD.detach(), Df = null, HQ(DD, CD, ni, "", !0), CD.ws.close()
          }(pD, bD)
        })),
        bD = {
          ws: DD,
          conn: iD,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: ID,
          token: null,
          detach: () => {
            fD.dispose(), DD.removeEventListener("message", QD), DD.removeEventListener("open", wD), DD.removeEventListener("close", SD)
          }
        },
        QD = DD => {
          if (DD.data instanceof ArrayBuffer) {
            var CD;
            const cD = new Uint8Array(DD.data);
            fD.heard(), bD.token = null !== (CD = (0, yc.d)(cD)) && void 0 !== CD ? CD : bD.token,
              function(DD, CD, cD) {
                Pw(DD, (() => {
                  DD.rings.net.writeFrame(CD, cD) || DD.crash(Dc.s, `a socket frame of ${cD.byteLength} bytes did not fit the net-in ring`)
                }));
                const ID = DD.rings.net.cursor >= Xi;
                (ID || DD.netWrittenSinceFrame >= gi || document.hidden && performance.now() - xf >= qi) && bw(DD, !1, "budget")
              }(pD, iD, cD)
          }
        },
        wD = () => {
          ID || (0, aC.j)("wasm_socket_open", performance.now());
          for (const CD of bD.pending.splice(0)) DD.send(CD);
          bD.pendingBytes = 0
        },
        SD = DD => {
          if (Df === bD && pD.rings.net.cursor > 0 && bw(pD, !1, "all"), Df === bD) {
            if (bD.detach(), Df = null, HQ(pD, bD, DD.code, DD.reason) || PQ(pD, bD)) return;
            jQ(pD, "close", iD), xQ(iD, bD.left), yQ(iD, DD.code, DD.reason)
          }
        };
      return DD.addEventListener("message", QD), DD.addEventListener("open", wD), DD.addEventListener("close", SD), Df = bD, null === (CD = (0, nD.g)()) || void 0 === CD || CD.socketAttached(iD), (0, yD.o)({
        websocketUrl: cD
      }), iD
    }

    function nQ() {
      const DD = Df;
      if (!DD) return;
      const CD = Ri,
        cD = DD.resume;
      cD && (OQ(), Df !== DD) || (Df = null, DD.detach(), DD.ws.close(), null !== CD && (PQ(CD, DD) || cD && HQ(CD, DD, Oi)) || (null !== CD && jQ(CD, "close", DD.conn), xQ(DD.conn, DD.left)))
    }

    function OQ() {
      const DD = Ri;
      null !== DD && !DD.isStopped && !Tb && !Jf && DD.rings.net.cursor > 0 && bw(DD, !1, "all")
    }

    function PQ(DD, CD) {
      var cD;
      if (!CD.resume) return !1;
      const ID = ef;
      return null !== ID && null !== CD.token && "" !== CD.token && (ID.pendingHold = {
        conn: CD.conn,
        token: `${ID.roomId}:${CD.token}`
      }), jQ(DD, "close", CD.conn), null === (cD = (0, nD.g)()) || void 0 === cD || cD.socketDetached(CD.conn), !0
    }

    function HQ(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const iD = UQ(CD, cD);
      if (null === iD) return !1;
      const {
        Lb: fD,
        token: bD,
        game: QD,
        joinedAt: wD
      } = iD;
      if (!jQ(DD, "close", CD.conn, GC.D.Held)) return !0;
      console.warn(`${Si} the game's connection ${pD?"went silent":`dropped with code ${cD}`}, holding it`);
      const SD = {
        closeReason: ID,
        sinceJoinedMs: performance.now() - wD,
        game: QD
      };
      return (0, nc.reportDisconnect)((0, aD.h)(cD), si, SD, pD ? "silent" : void 0), fD.heldConn = CD.conn, fD.dropCode = cD, fD.pendingHold = {
        conn: CD.conn,
        token: `${fD.roomId}:${bD}`
      }, Jf || bw(DD, !1, "all"), !0
    }

    function UQ(DD, CD) {
      const cD = ef,
        pD = Ef,
        iD = DD.token;
      return null === cD || null === pD || Tb || DD.left || pD.conn !== DD.conn || null === iD || "" === iD ? null : (0, ID.k)(CD) && cD.resume.canHoldSeat() ? {
        Lb: cD,
        token: iD,
        game: pD.game,
        joinedAt: pD.joinedAt
      } : null
    }

    function xQ(DD, CD) {
      var cD;
      null === (cD = (0, nD.g)()) || void 0 === cD || cD.closeGame(DD), (0, Ip.d)().close(DD), CD || (0, yD.o)({
        websocketUrl: null
      })
    }

    function qQ() {
      const DD = rf;
      if (null === DD) return;
      const CD = (0, nD.g)();
      Tb || null === CD || CD.kU(DD) ? rf = null : performance.now() - zf.pause >= xi && (zf.pause = performance.now(), console.warn(`${Si} the cmd ring had no room for SetPaused(${DD}): written before the next frame`))
    }

    function JQ() {
      const DD = ef;
      ef = null, null === DD || void 0 === DD || DD.resume.dispose()
    }

    function KQ(DD, CD) {
      var cD, ID;
      const {
        heldConn: pD
      } = DD, iD = DD.resume.resumingConn;
      DD.heldConn = 0, DD.pendingHold = null, ef === DD && (ef = null), "left" === CD ? DD.resume.leave() : DD.resume.dispose(), 0 === hf || (null === (cD = Df) || void 0 === cD ? void 0 : cD.conn) !== hf || "left" === CD && (null === (ID = Rf) || void 0 === ID ? void 0 : ID.conn) === hf || zQ(hf), "gaveUp" === CD && 0 !== iD && zQ(iD), 0 !== pD && "refused" !== CD && (console.info(`${Si} the game held through its drop ${"left"===CD?"was left":"is given up"}`), null === Ri || Ri.isStopped || jQ(Ri, "close", pD), xQ(pD, !1))
    }

    function aQ(DD, CD) {
      const cD = CD.indexOf(":");
      return {
        roomId: cD < 0 ? DD.roomId : CD.slice(0, cD),
        roomToken: CD.slice(cD + 1)
      }
    }

    function VQ(DD) {
      var CD;
      uf = DD, DD.conn === hf && (hf = 0);
      const cD = ef;
      null !== cD && (null === (CD = Ef) || void 0 === CD ? void 0 : CD.conn) === DD.conn && cD.resume.onInitialInfo(DD)
    }

    function zQ(DD) {
      var CD;
      const cD = Df;
      (null === cD || void 0 === cD ? void 0 : cD.conn) === DD && (cD.left = !0, null === (CD = (0, nD.g)()) || void 0 === CD || CD.socketLeft(), (0, yD.o)({
        websocketUrl: null
      }), IQ(DD) ? setTimeout((() => {
        Df === cD && nQ()
      }), VD.h) : nQ())
    }

    function jQ(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pD = !1;
      return Pw(DD, (() => {
        const {
          net: iD
        } = DD.rings;
        pD = "open" === CD ? iD.writeOpen(cD, ID) : iD.writeClose(cD, ID), pD || DD.crash(Dc.s, `a socket ${CD} did not fit the net-in ring`)
      })), pD
    }

    function lQ(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (LQ()) {
        const ID = "browser" === DD && (0, cp.S)() ? "blockedAfterLoss" : "unsupported";
        return (0, nc.reportUnsupportedFallback)(DD, ID, CD, cD), void TQ(`the wasm client can't run here (${CD}; ${ID})`, ID)
      }(0, nc.showUnsupported)(DD, "unsupported", CD, cD)
    }

    function LQ() {
      return Vb && "wasm" !== (0, BC.c)(window.location.search)
    }

    function TQ(DD, CD) {
      console.warn(`${Si} ${DD}: reloading on the JS client`), null !== CD && (0, BC.m)(CD), (0, BC.i)(null === CD ? "reloadOntoJs" : "decline");
      const cD = () => {
        (0, YD.h)(BC.s)
      };
      (0, nc.flushCrashReports)(YD.c).then(cD, cD)
    }

    function GQ(DD, CD, cD, ID) {
      return Bb(DD, CD, cD, ID)
    }

    function RQ() {
      null === tb || null === Ri || Ri.isStopped || Tb || null !== vf || null === ai || (vf = tb(ai, WQ, sQ().follow))
    }

    function kQ() {
      var DD, CD, cD;
      return null !== (DD = null === (CD = di) || void 0 === CD || null === (cD = CD.textures) || void 0 === cD ? void 0 : cD.files()) && void 0 !== DD ? DD : null
    }

    function dQ(DD) {
      cD.e(260).then((() => cD(39808))).then((CD => {
        let {
          setIconFileOverrides: cD
        } = CD;
        cD(DD)
      }), (DD => {
        console.warn(`${Si} the item icons couldn't take the texture pack's files`, DD)
      }))
    }

    function YQ(DD) {
      sQ().follow((CD => {
        null !== CD && Promise.all([Promise.all([cD.e(193), cD.e(45)]).then((() => cD(42494))), (0, cp.N)()]).then((DD => {
          let [{
            followPagePackFiles: cD
          }, ID] = DD;
          const pD = null === ID || (0, FC.o)(ID) ? "webgl" : ID.backend;
          cD(CD, sI.d, pD, (DD => {
            sI.d.setPageFiles(DD)
          }), WQ)
        }), (CD => {
          console.warn(`${Si} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, CD), DD()
        }))
      }))
    }

    function WQ(DD, CD) {
      console.warn(`${Si} ${DD}`, CD)
    }

    function sQ() {
      return ki ??= new Np({
        load: DD => Promise.all([cD.e(193), cD.e(51)]).then((() => cD(42499))).then((CD => {
          let {
            startPageTexturePackFeed: cD
          } = CD;
          return cD(WQ, DD)
        })),
        store: mc.f,
        Nt: DD => {
          ui.then((() => {
            (0, nc.reportTexturePackFeedLoadFailure)(DD, si)
          }))
        }
      }), ki
    }
    const EQ = DD => sQ().follow(DD);

    function eQ() {
      return sQ().loaded()
    }
    const uQ = function(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          pD = 0;
        return async function(iD, fD) {
          let bD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const QD = ++pD,
            wD = ID() + CD,
            SD = await
          function(DD, CD) {
            let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((ID => {
              const pD = setTimeout((() => {
                ID(null), DD.then((DD => {
                  null !== DD && (DD.joinedWithout(), cD(DD))
                }))
              }), CD);
              DD.then((DD => {
                clearTimeout(pD), ID(DD)
              }))
            }))
          }(DD(iD), CD, (DD => {
            QD === pD && bD() && fD(DD, ID() + CD).catch((DD => {
              cD("the texture pack step after the join failed", DD)
            }))
          }));
          return null === SD ? null : fD(SD, wD)
        }
      }((DD => (0, cC.m)(DD) ? sQ().request() : sQ().forJoin()), vp.c, WQ),
      hQ = function(DD, CD) {
        let cD = !1;
        return {
          setGamePackConfirm: DD => {
            cD = null !== DD, CD(DD)
          },
          packStep: (CD, ID, pD) => DD(CD, ID, (() => cD && pD()))
        }
      }(uQ, (DD => {
        sQ().setGamePackConfirm(DD)
      }));

    function rQ(DD) {
      hQ.setGamePackConfirm(DD)
    }

    function AQ() {
      if (Tb || null !== gb || null === Zb || null === Nb) return;
      const {
        backend: DD,
        canvas: CD,
        fallbackReason: cD,
        adapterVendor: ID
      } = Nb, pD = Zb;
      Zb = null;
      try {
        gb = pD({
          backend: DD,
          canvas: CD,
          fallbackReason: cD,
          adapterVendor: ID,
          joinedGame: () => Tb ? null : Rf,
          inGame: Dw,
          shaderPackReach: () => {
            var DD, CD;
            return null !== (DD = null === (CD = mf) || void 0 === CD ? void 0 : CD.reachInJoinedGame()) && void 0 !== DD ? DD : null
          },
          msaa: () => vb > 1,
          writeCmd: (DD, CD, cD) => null !== ai && ai(DD, CD, cD),
          takeFailedMeshJobs: () => {
            var DD, CD;
            return null !== (DD = null === (CD = ff) || void 0 === CD ? void 0 : CD.takeFailedMeshJobs()) && void 0 !== DD ? DD : 0
          }
        })
      } catch (iD) {
        console.error(`${Si} the frame telemetry didn't start`, iD)
      }
    }

    function FQ(DD, CD) {
      try {
        var cD, ID, pD;
        const iD = Qb && null !== (cD = null === (ID = Ri) || void 0 === ID || null === (pD = ID.lastHeader) || void 0 === pD ? void 0 : pD.renderPending) && void 0 !== cD ? cD : 0;
        (0, sc.k)(CD, DD, Dw() && !(null !== ip), iD)
      } catch (iD) {
        (0, sc.y)(), console.error(`${Si} the quality steps stopped`, iD)
      }
    }

    function Dw() {
      return null !== Rf && Jb === Rf && !Tb
    }

    function Cw(DD) {
      const CD = gb;
      gb = null;
      try {
        null === CD || void 0 === CD || CD.stop()
      } catch {}
      console.error(`${Si} the frame telemetry threw: it stops`, DD)
    }

    function Iw(DD) {
      var CD, cD, ID, pD;
      if ((0, Ip.d)().fire(DD), "message" === DD.type) {
        if (Kf++, DD.Rf === GC.Fc.ERROR && null !== df) {
          var iD;
          const {
            text: CD,
            dropsCache: cD
          } = (0, aD.k)((new TextDecoder).decode(DD.payload));
          pb ||= cD, (null === (iD = Db) || void 0 === iD ? void 0 : iD.conn) === DD.conn && (ib = CD)
        } else if (DD.Rf === RC.dc.ResumeComplete) {
          var fD;
          null === (fD = ef) || void 0 === fD || fD.resume.onResumeComplete(DD.conn)
        }
        return
      }
      DD.phase === GC.E.Left ? af = DD.conn : DD.phase === GC.E.Activated && (null === (CD = Db) || void 0 === CD ? void 0 : CD.conn) === DD.conn ? Db.activated = !0 : DD.phase === GC.E.Resumed ? function(DD) {
        var CD, cD;
        hf = DD;
        const ID = ef;
        if (null === ID || 0 === ID.heldConn || (null === (CD = Df) || void 0 === CD ? void 0 : CD.conn) !== DD || !Df.resume || null === Ef) return;
        console.info(`${Si} the game resumed on conn ${DD}, waiting for its InitialInfo`);
        const pD = ID.heldConn;
        ID.heldConn = 0, Df.resume = !1, Ef.conn = DD, (null === (cD = Wf) || void 0 === cD ? void 0 : cD.conn) === pD && (Wf = {
          conn: DD,
          info: Wf.info
        }), tC.d.apply({
          shopInfo: null,
          _shopVersion: IC.c
        })
      }(DD.conn) : DD.phase === GC.E.Held ? function(DD) {
        var CD;
        const cD = ef,
          ID = null !== (CD = null === cD || void 0 === cD ? void 0 : cD.pendingHold) && void 0 !== CD ? CD : null;
        if (null !== cD && null !== ID && ID.conn === DD) return cD.pendingHold = null, cD.heldConn = DD, hf = 0, console.warn(`${Si} the core holds the game, reconnecting`), void cD.resume.onDropped(ID.token);
        if (DD === hf) {
          hf = 0;
          const CD = Ri;
          null === CD || CD.isStopped || (console.info(`${Si} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), jQ(CD, "close", DD))
        }
      }(DD.conn) : DD.phase === GC.E.Closed && (null === (cD = ef) || void 0 === cD || null === (ID = cD.pendingHold) || void 0 === ID ? void 0 : ID.conn) === DD.conn && (ef.heldConn === DD.conn ? function(DD) {
        const CD = DD.heldConn,
          cD = DD.dropCode;
        KQ(DD, "refused"), console.info(`${Si} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          xQ(CD, !1), yQ(CD, cD, "", !0)
        }))
      }(ef) : ef.pendingHold = null);
      const bD = Object.keys(GC.E).find((CD => GC.E[CD] === DD.phase)),
        QD = 0 === DD.code ? "" : ` (code ${DD.code})`;
      console.info(`${Si} conn ${DD.conn}: ${null!==bD&&void 0!==bD?bD:DD.phase}${QD}, ${Kf} raw messages so far`), (null === (pD = Rf) || void 0 === pD ? void 0 : pD.conn) !== DD.conn || DD.phase !== GC.E.Left && DD.phase !== GC.E.Closed || cQ(null), Yf !== DD.conn || DD.phase !== GC.E.Left && DD.phase !== GC.E.Closed || (Yf = null, null === Rf && null === df && EI.d.setGame(void 0));
      for (const SD of [...bb]) try {
        SD(DD.conn, DD.phase, DD.code)
      } catch (wD) {
        (0, kC.o)(wD, `${Si} a connection listener threw`)
      }
    }

    function pw() {
      (0, cp.p)(), queueMicrotask((() => {
        try {
          vw()
        } catch (DD) {
          console.warn(`${Si} stopping before the reload threw`, DD)
        }(0, nc.flushCrashReports)(YD.c).then(YD.j, YD.j)
      }))
    }

    function iw() {
      const DD = Ri;
      null === DD || DD.isStopped || null === Df || Jf || !DD.hasPendingCommands() || bw(DD, !1, "budget")
    }

    function fw(DD) {
      var CD;
      const cD = Rf;
      DD.persisted || null === cD || (null === (CD = Df) || void 0 === CD ? void 0 : CD.conn) !== cD.conn || Df.left || cD.leave()
    }

    function bw(DD, CD, ID) {
      let pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const iD = Jf;
      Jf = !0;
      try {
        return function(DD, CD, ID, pD) {
          var iD, fD, bD, QD;
          if (Tb) return !1;
          if (Pw(DD, ww), Tb || DD.isStopped) return !1;
          tw() && Pf("modelsIn");
          qQ(), xf = performance.now(), af = null, Vf = !1, (0, mD.N)(), null === (iD = yf) || void 0 === iD || iD.beforeFrame(), fI(xf, DD), (0, mD.E)(xf, Sw), qf = !0;
          const wD = CD && Mw();
          let SD;
          try {
            SD = DD.frame(xf, wD, ID)
          } finally {
            qf = !1
          }
          if (!SD) return !1;
          ob.observe(null !== (fD = null === (bD = DD.lastHeader) || void 0 === bD ? void 0 : bD.chunksCancelled) && void 0 !== fD ? fD : 0);
          const BD = DD.lastFrameKind,
            yD = (0, UC.b)(BD);
          (function(DD) {
            null !== zp && zp.afterFrame(performance.now(), DD)
          })(yD), null === (QD = Xb) || void 0 === QD || QD.frame(DD, xf, BD), CD && (Kb = yD);
          yD && (0, OC.c)(xf);
          if (null !== gb) try {
            gb.frameRan(DD, xf, performance.now(), BD)
          } catch (tD) {
            Cw(tD)
          }
          "drawn" === BD && yw() && function() {
            for (const DD of [...Dp]) DD()
          }();
          DD.forEachNetOut(Zw);
          const MD = Df;
          null !== af && (null === MD || void 0 === MD ? void 0 : MD.conn) === af && ow(MD, VD.l);
          (function(DD) {
            var CD;
            if (Ob) return;
            null === Ub && Mw() && (Ub = performance.now());
            if (null === df && null === Rf) return;
            null === Ub || xb || (xb = !0, (0, aC.j)("wasm_startup_loaded", Ub));
            let cD = 0;
            null !== Rf ? cD = -1 : !0 === (null === (CD = Db) || void 0 === CD ? void 0 : CD.activated) && (cD = ~RC.I.TerrainDrawn);
            const ID = DD.headerWord(RC.A.LoadSteps) & cD & ~Hb;
            if (0 === ID) return;
            Hb |= ID;
            const pD = performance.now();
            for (const [iD, fD] of Object.entries(Bw)) 0 !== (ID & RC.I[iD]) && (0, aC.j)(fD, pD)
          })(DD), CD && function(DD) {
            var CD, ID, pD;
            if (null === Rf || !Mw()) return;
            null === qb || Jb === Rf && !qb.frame(xf, 0 !== (DD.headerWord(RC.A.LoadSteps) & RC.I.TerrainDrawn)) || (qb = null);
            const iD = DD.lastHeader,
              fD = !Qb || 0 === (null === iD || void 0 === iD ? void 0 : iD.renderPending);
            !Pb && fD && (Pb = !0, performance.mark(Ni));
            if (Jb === Rf) return;
            const bD = null !== (CD = null === iD || void 0 === iD ? void 0 : iD.firstView) && void 0 !== CD ? CD : GC.X.NotYet;
            if (Qb && bD === GC.X.NotYet) return;
            if (Ob && (!0 !== (null === (ID = (0, nD.g)()) || void 0 === ID ? void 0 : ID.isSessionLive) || !fD)) return;
            Jb = Rf;
            const QD = Rf;
            if (setTimeout((() => {
                Rf === QD && (0, aC.i)()
              }), 0), null === (pD = mf) || void 0 === pD || pD.playable(), function() {
                clearTimeout(Fi), Fi = setTimeout((() => {
                  Dw() && xw((DD => {
                    let {
                      prefetchWorldgenWorker: CD
                    } = DD;
                    CD()
                  }))
                }), Ki)
              }(), Ob) return;
            Ob = !0, performance.mark(vi), (0, Up.o)("render") && Promise.all([cD.e(74), cD.e(47)]).then((() => cD(4483))).then((DD => {
              let {
                renderDebugPlayable: CD
              } = DD;
              CD()
            }), (DD => {
              console.warn("The render debug topic didn't load", DD)
            }));
            const wD = Math.round(performance.now());
            if (Qb && bD !== GC.X.Drawn) {
              const DD = bD === GC.X.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${Si} playable at ${wD} ms on the first view's ${DD} backstop: it wasn't drawn whole in time`), (0, aC.j)("wasm_view_backstop", wD, DD), "long" === DD) {
                var SD, BD;
                const DD = null !== (SD = null === (BD = Ef) || void 0 === BD ? void 0 : BD.game) && void 0 !== SD ? SD : "";
                qb = new Oc.c((() => {
                  (0, nc.reportFirstViewNoTerrain)(DD, si)
                }))
              }
            } else console.info(`${Si} playable at ${wD} ms${Qb?"":" (no renderer)"}`);
            setTimeout(Mb, 0), (0, oC.e)().catch((DD => {
              console.error(`${Si} item sprites didn't load, so item particles show the missing texture`, DD)
            }))
          }(DD);
          (0, Dc.I)(DD, {
            worldgen: If,
            mesh: ff
          }),
          function(DD) {
            DD.forEachEvent(QI);
            for (const CD of bI) try {
              (0, CI.d)(CD)
            } catch (tD) {
              if ((0, kC.j)(tD)) {
                DD.crashOn(Dc.k, tD);
                break
              }
              console.error(`${II} an input action listener threw`, tD)
            }
            bI.length = 0
          }(DD), pD && (0, HC.c)();
          return !DD.isStopped
        }(DD, CD, "all" === ID || DD.rings.net.cursor >= Xi || DD.netKeptFrames >= mi, pD)
      } finally {
        Jf = iD
      }
    }

    function Qw(DD) {
      console.error(`${Si} a frame-start listener threw`, DD)
    }

    function ww() {
      var DD, CD, cD, ID;
      null === (DD = tf) || void 0 === DD || DD.drain(ai, Vi), null === (CD = Nf) || void 0 === CD || CD.drain(ai), null === (cD = gf) || void 0 === cD || cD.drain(performance.now()), yb(ai), null === (ID = vf) || void 0 === ID || ID.drain()
    }

    function Sw(DD) {
      console.error(`${Si} a before-frame listener threw`, DD)
    }
    const Bw = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function yw() {
      return Qb && Mw()
    }

    function Mw() {
      return Xf && tw()
    }

    function tw() {
      return null === tf || tf.startupDone
    }

    function Zw(DD, CD) {
      const cD = Df;
      (null === cD || void 0 === cD ? void 0 : cD.conn) === DD ? ow(cD, CD) : lf++
    }

    function ow(DD, CD) {
      const {
        ws: cD
      } = DD;
      return cD.readyState === WebSocket.OPEN ? (cD.send(CD), !0) : cD.readyState === WebSocket.CONNECTING && DD.pendingBytes + CD.byteLength <= Ui ? (DD.pending.push(CD.slice()), DD.pendingBytes += CD.byteLength, !0) : (lf++, !1)
    }

    function vw() {
      var DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD;
      Tb = !0, ab.stop(), (0, qp.d)(), zp = null, JQ(), (0, mD.K)().unlockPointer(), (0, mD.I)(null), null === (DD = Mf) || void 0 === DD || DD(), Mf = null, null === (CD = (0, nD.q)()) || void 0 === CD || CD.followCursorAim(null), (0, HC.B)(), (0, nD.d)(), Wi.stop(), null === (cD = mb) || void 0 === cD || cD(), mb = null, null === (ID = nb) || void 0 === ID || ID(), nb = null, null === (pD = gb) || void 0 === pD || pD.stop(), gb = null, (0, Hc.p)(null), null === (iD = Cf) || void 0 === iD || iD(), Cf = null, null === (fD = If) || void 0 === fD || fD.stop(), If = null, null === (bD = ff) || void 0 === bD || bD.stop(), ff = null, null !== (QD = di) && void 0 !== QD && null !== (wD = QD.textures) && void 0 !== wD && wD.assets && dQ(null), null === (SD = di) || void 0 === SD || SD.stop(), di = null, Yi = null;
      const vD = bf;
      bf = null, vD && (vD.stop(), Ow(vD)), null === (BD = Nf) || void 0 === BD || BD.dispose(), Nf = null, null === (yD = gf) || void 0 === yD || yD.dispose(), gf = null, tf = null, null === (MD = of) || void 0 === MD || MD(), of = null, null === (tD = Bf) || void 0 === tD || tD(), Bf = null, null === (ZD = yf) || void 0 === ZD || ZD.stop(), yf = null, Fb(), EI.d.release(), nQ();
      const ND = vf;
      vf = null;
      try {
        null === ND || void 0 === ND || ND.dispose()
      } catch (gD) {
        console.warn(`${Si} the sky's images didn't release`, gD)
      }(0, GI.d)(null), null === (oD = Ti) || void 0 === oD || oD.pagePreviews().endSession(null === (0, iC.n)())
    }

    function Nw(DD, CD) {
      var cD, ID;
      const pD = null !== (cD = null === (ID = bf) || void 0 === ID ? void 0 : ID.details()) && void 0 !== cD ? cD : {},
        iD = DD.site === yi || DD.site === Mi || DD.site === nc.RENDER_RELOAD_SITE || DD.site === ti ? DD.error instanceof WebAssembly.RuntimeError || DD.error instanceof uC.d : !(0, FC.p)(DD.error) && (0, Dc.G)(DD);
      iD && DD.error instanceof Error && (0, iC.I)(DD.error);
      const fD = iD || DD.site === Dc.w ? (0, nc.readTrap)(DD.error) : null,
        bD = null !== fD && (0, dC.e)(fD.kind, fD.refusedBytes) ? fD.refusedBytes : 0,
        QD = null === Qf ? (0, lI.n)(function() {
          try {
            return (0, iC.q)().buffer.byteLength
          } catch {
            return 0
          }
        }(), bD, null) : Qf.ceilingMayRefuse(bD),
        wD = bD > 0 && !QD && LQ();
      var SD;
      if (wD && ((0, BC.m)("oom"), (0, BC.i)("decline"), Lb = !0), vw(), (0, cp.e)()) return console.warn(`${Si} the session stopped at ${DD.site} as the page reloads`, DD.error), void((0, FC.p)(DD.error) || (null === (SD = DD.header) || void 0 === SD ? void 0 : SD.lastError) === GC.L.CoreBusy || (0, nc.reportStoppedCore)(DD, CD, fD, {
        memoryDetails: pD,
        declined: wD
      }));
      (0, nc.showCrash)(DD, CD, fD, {
        memoryDetails: pD,
        declined: wD
      })
    }

    function gw(DD) {
      const {
        input: CD,
        net: cD,
        worker: ID
      } = DD.rings, pD = DD.optionsDropped, iD = CD.dropped + pD + cD.dropped + ID.dropped + lf;
      iD !== jf && function(DD, CD) {
        const cD = performance.now();
        return !(cD - zf[DD] < xi) && (zf[DD] = cD, console.warn(`${Si} ${CD}`), !0)
      }("dropped", `${iD} records dropped so far (input ${CD.dropped}, options ${pD}, net ${cD.dropped}, worker ${ID.dropped}, net-out ${lf})`) && (jf = iD)
    }

    function Xw() {
      var DD, CD;
      const cD = (0, Nc.d)();
      if (null === cD) return null;
      const ID = (0, Xc.f)(cD);
      return {
        ...ID,
        horizontal: Math.min(ID.horizontal, null !== (DD = null === (CD = bf) || void 0 === CD ? void 0 : CD.shedDistanceInUse()) && void 0 !== DD ? DD : 1 / 0)
      }
    }

    function mw(DD) {
      var CD, cD;
      return {
        samples: Qb ? vb : null,
        sunShadows: DD,
        renderDistance: null !== (CD = null === (cD = Xw()) || void 0 === cD ? void 0 : cD.horizontal) && void 0 !== CD ? CD : null
      }
    }

    function nw() {
      var DD, CD, cD;
      const ID = Xw();
      return {
        ...null === (DD = bf) || void 0 === DD ? void 0 : DD.pageKillSnapshot(),
        renderDistance: null !== (CD = null === ID || void 0 === ID ? void 0 : ID.horizontal) && void 0 !== CD ? CD : null,
        renderDistanceVertical: null !== (cD = null === ID || void 0 === ID ? void 0 : ID.vertical) && void 0 !== cD ? cD : null,
        chunkCap: wf,
        budgetBasis: Sf,
        renderBackend: (0, cp.G)()
      }
    }

    function Ow(DD) {
      console.info(`${Si} wasm memory at the session's end`, DD.details())
    }

    function Pw(DD, CD) {
      if (!DD.isStopped) try {
        CD()
      } catch (cD) {
        DD.crash(Dc.y, cD)
      }
    }

    function Hw() {
      return pf ??= cD.e(68).then((() => cD(42507))).catch((DD => {
        throw pf = null, DD
      })), pf
    }
    async function Uw() {
      const {
        createWorldgenWorker: DD,
        worldgenWorkerReady: CD
      } = await Hw();
      return await CD(), DD
    }

    function xw(DD) {
      var CD;
      null === (CD = pf) || void 0 === CD || CD.then(DD, (() => {}))
    }

    function qw(DD, CD, cD) {
      return async function(DD, CD, cD) {
        let {
          stop: ID,
          stillWanted: pD
        } = cD;
        const iD = await (0, NI.j)(DD, {
          stillWanted: pD,
          beforeReload: async () => {
            ID(), await (0, nc.flushCrashReports)(YD.c)
          },
          reload: YD.j
        });
        return iD || CD(), iD
      }(DD, CD, {
        stop: vw,
        stillWanted: cD
      })
    }
    let Jw = !1;

    function Kw() {
      return Jw = !0, async function(DD, CD, ID) {
        const {
          gamePackSource: pD
        } = await cD.e(343).then((() => cD(42472)));
        await hQ.packStep(DD, ((cD, ID) => cD.packForGame(DD, pD(CD), ID)), ID)
      }(...arguments)
    }

    function aw(DD) {
      ! function(DD, CD) {
        DD((DD => {
          null === DD || void 0 === DD || DD.subscribe((DD => {
            let {
              pack: cD,
              gameSource: ID
            } = DD;
            CD(null === ID || null === cD ? null : {
              pack: cD,
              source: "" === ID ? null : ID
            })
          }))
        }))
      }(EQ, DD)
    }
    let Vw = !1,
      zw = null,
      jw = !1,
      lw = !1;

    function Lw() {
      var DD;
      Vw || (Vw = !0, Wb("play", kD), (0, yD.l)(new hw), bD.gameBridge.attach(KD), Yw().catch((() => {})), (0, nD.r)((DD => {
        DC(DD.setTextHost)
      })), DD = Rw, Ib.add(DD), function(DD) {
        for (const CD of nf) DD(CD);
        Of.add(DD)
      }((DD => {
        Gw(Tw[DD])
      })))
    }
    const Tw = {
      booted: iD.o.INITIALISE_NOA,
      texturesIn: iD.o.REGISTRATION,
      modelsIn: iD.o.SETUP_LIFEFORMS
    };

    function Gw(DD) {
      QD.i.Uo("matchmakeAndPlayStepCompleted", {
        step: DD,
        totalSubSteps: 1
      })
    }

    function Rw(DD) {
      if (!jw) return;
      const {
        gameNameWithVariation: CD,
        lobbyName: cD
      } = (0, yD.b)();
      if (DD.code === ID.e.serverUpdating.code) return (new hw).leaveLive(), void dw(CD, cD);
      QD.i.Uo("unwantedLeftGame", {
        reason: kw(DD),
        requiresRefresh: DD.requiresRefresh,
        canReconnect: null !== DD.reconnect,
        automaticallyReconnect: DD.reconnecting,
        canPlayAgain: DD.canPlayAgain,
        gameNameWithVariation: CD,
        lobbyName: cD
      }), (new hw).leaveLive()
    }

    function kw(DD) {
      return null !== DD.reasonKey ? {
        translationKey: DD.reasonKey
      } : "gameOrPluginKick" === DD.name ? DD.reason : `You have disconnected from the server.\n${DD.reason}`
    }

    function dw(DD, CD) {
      var ID;
      ID = (0, wD.D)(DD, CD), Promise.resolve().then((() => cD(1508))).then((DD => {
        let {
          navigatePreserveSearch: CD
        } = DD;
        CD(ID)
      })).catch((DD => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", DD), (0, YD.e)(ID)
      }))
    }

    function Yw() {
      return zw ??= Promise.all([cD.e(69), cD.e(72), cD.e(71), cD.e(70), cD.e(83), cD.e(259), cD.e(199), cD.e(216), cD.e(237), cD.e(212), cD.e(46)]).then((() => cD(39760))).then((DD => {
        try {
          DD.attachPlayGameSources()
        } catch (CD) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", CD),
            function(DD) {
              ui.then((CD => {
                null === CD || CD.isStopped || Tb ? console.warn(`${Si} the play sources threw as they attached, after the client stopped`, DD) : Nw({
                  site: ti,
                  error: DD,
                  header: null
                }, si)
              }))
            }(CD), CD
        }
      }), (DD => {
        throw zw = null, new nD.c(DD)
      })), zw
    }
    async function Ww(DD, CD) {
      Lw(), Jw = !0, jw = !0;
      let cD = {
          place: DD.place,
          matchedAt: DD.matchedAt
        },
        fD = DD.place.gameNameWithVariation;
      const bD = (0, BD.e)();
      let QD = null;
      const wD = await ub({
        matchmake: async () => {
          let CD = cD;
          if (cD = null, null === CD) {
            const cD = await DD.rematch();
            if (cD.isError()) throw QD = cD.asError().forward(), new Error(cD.asError().message);
            CD = {
              place: cD.getValue(),
              matchedAt: performance.now()
            }
          }
          fD = CD.place.gameNameWithVariation;
          return {
            target: await (0, jD.h)(DD.userContext, CD.place, eQ(), bD),
            matchedAt: CD.matchedAt,
            freshMs: jD.d
          }
        },
        pageReady: Yw,
        onFailure: (DD, CD) => {
          null === QD && function(DD, CD) {
            (0, nc.reportPageJoinFailure)(DD, si, CD)
          }(DD, {
            sinceJoinStartMs: CD,
            game: fD
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => DD.userContext.invalidateTrafficCode(),
        signal: CD
      });
      switch (wD.kind) {
        case "joined":
          if (bD) {
            const {
              game: DD
            } = wD;
            (0, BD.m)((() => {
              DD.endJoinAd()
            }))
          }
          return lw || (lw = !0, (0, ZD.b)()), jw ? (Gw(iD.o.CONNECT_TO_GAME_SERVER), Gw(iD.o.SHADER_PACK), function() {
            var DD, CD;
            return null !== (DD = null === (CD = mf) || void 0 === CD ? void 0 : CD.runsInJoinedGame()) && void 0 !== DD && DD
          }() && (0, tD.d)(DD.userContext, fD).catch((DD => {
            console.error("Failed to report the shader pack session", DD)
          })), function() {
            const DD = function() {
              var DD, CD;
              return null !== (DD = null === (CD = mf) || void 0 === CD ? void 0 : CD.couldntRunInJoinedGame()) && void 0 !== DD ? DD : null
            }();
            null !== DD && (0, tD.c)(DD)
          }(), pD.e.value(void 0)) : uw("The server ended the game as it joined");
        case "failed":
          if (!wD.reloading) {
            if (null !== QD) return QD;
            if ((wD.error instanceof VD.m || wD.error instanceof VD.d) && wD.error.code === ID.e.serverUpdating.code) {
              if (CD.aborted) return uw("Left the game while it loaded");
              const {
                gameNameWithVariation: DD,
                lobbyName: cD
              } = (0, yD.b)();
              return dw(DD, cD), uw("The server is updating")
            }
            return wD.error instanceof dD.g ? pD.e.errorWithCode(wD.error.messageKey, iD.o.SHADER_PACK, {
              severity: "medium"
            }) : pD.e.errorWithCode(function(DD) {
              if (DD instanceof VD.x || DD instanceof gD.g) return DD.message;
              if (sw(DD)) return (0, aD.i)(DD.code, DD.serverText);
              return aD.g
            }(wD.error), iD.o.CONNECT_TO_GAME_SERVER, {
              error: Ew(wD.error) ? wD.error : void 0,
              severity: ew(wD.error),
              gameServerUnreachable: (0, zD.d)(wD.error),
              rematch: (0, vD.b)(wD.error),
              gameRefused: (0, ND.c)(wD.error)
            })
          }
          return uw("Reloading into the new build");
        case "stopped":
          return uw("The game client stopped, and shows why");
        case "tc":
          return uw("Left the game while it loaded")
      }
    }

    function sw(DD) {
      return DD instanceof VD.m || DD instanceof VD.d && "attach" !== DD.stage
    }

    function Ew(DD) {
      return !(DD instanceof VD.x) && !sw(DD) && void 0 === (0, zD.d)(DD)
    }

    function ew(DD) {
      return sw(DD) ? DD instanceof VD.d && (0, aD.h)(DD.code).requiresRefresh ? "medium" : "low" : Ew(DD) || DD instanceof VD.x ? "medium" : "low"
    }

    function uw(DD) {
      return pD.e.errorWithCode(DD, iD.o.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        tc: !0
      })
    }
    class hw {
      leave(DD) {
        if ((0, XD.e)()) {
          var CD, cD;
          if ((0, fD.d)()) return;
          (0, MD.e)(!0 === (null === (CD = (0, XD.n)()) || void 0 === CD || null === (cD = CD.currentViewer) || void 0 === cD ? void 0 : cD.unsavedChanges), DD)
        } else this.leaveLive()
      }
      leaveLive() {
        var DD;
        Jw && (null === (DD = eQ()) || void 0 === DD || DD.endGamePack());
        if (!jw) return;
        jw = !1, (0, oD.f)();
        try {
          var CD;
          null === (CD = (0, nD.q)()) || void 0 === CD || CD.clearWasmCameraScreen()
        } catch (ID) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", ID)
        }
        const {
          gameNameWithVariation: cD
        } = (0, yD.b)();
        try {
          iQ()
        } finally {
          (0, yD.o)({
            websocketUrl: null
          }), QD.i.Uo("leaveGame", {
            gameNameWithVariation: cD
          }), (0, SD.L)()
        }
      }
      isReplay() {
        return (0, XD.e)()
      }
    }
  },
  40101: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD,
      e: () => ID,
      f: () => bD,
      j: () => fD
    });
    const ID = 12e4,
      pD = 3e4,
      iD = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: DD => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", DD), () => {
          document.removeEventListener("visibilitychange", DD)
        })
      };

    function fD(DD) {
      return `it sent no start within ${Math.round(DD)} ms`
    }
    class bD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iD;
        this.timeoutMs = DD, this.onTimeout = CD, this.now = cD, this.visibility = ID, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = ID.listen((() => {
          this.onVisibility()
        })), ID.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const DD = this.step;
        return null === DD ? 0 : Math.min(this.now() - DD.at, DD.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const DD = this.timeoutMs - this.counted;
        if (DD <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const CD = Math.min(DD, 5e3);
        this.step = {
          at: this.now(),
          ms: CD
        }, this.arm(CD, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(DD, CD) {
        this.timer = setTimeout((() => {
          this.timer = null, CD()
        }), DD)
      }
    }
  },
  39971: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    const ID = {
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
  38109: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(3525);
    const pD = ["none", "idle", "now"];

    function iD() {
      const DD = () => (0, ID.x)();
      return {
        memoryBytes: () => (0, ID.q)().buffer.byteLength,
        reserveUpFront: CD => DD().nB(CD),
        reserveAhead: CD => DD().mB(CD),
        setCeiling: CD => {
          DD().OB(CD)
        },
        lowWater: () => pD[DD().XB()] ?? "none",
        stats: () => function(DD) {
          const CD = new Uint32Array((0, ID.q)().buffer, DD, 17),
            cD = DD => CD[DD] ?? 0,
            pD = DD => ({
              upFront: cD(DD),
              ahead: cD(DD + 1),
              onDemandInFrame: cD(DD + 2),
              onDemand: cD(DD + 3)
            });
          return {
            memoryBytes: cD(0),
            initialBytes: cD(1),
            liveBytes: cD(2),
            peakLiveBytes: cD(3),
            headroomBytes: cD(4),
            unusedBytes: cD(5),
            ceilingBytes: cD(6),
            reservesRefused: cD(7),
            grows: pD(8),
            grownBytes: pD(12),
            allocationsRefused: cD(16)
          }
        }(DD().PB()),
        takeBallast: () => DD().HB(),
        takePressure: () => DD().UB()
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);