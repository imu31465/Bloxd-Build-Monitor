export const id = 56;
export const ids = [56];
export const modules = {
  38530: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = "The world isn't loaded, so no blocks can be seen.",
      yB = "The world isn't loaded, so nothing in it can be seen."
  },
  38043: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uB,
      h: () => HB,
      j: () => DB
    });
    var VB = dB(2583);
    const yB = 0,
      pB = 2,
      lB = 3,
      JB = 4;
    class YB {
      constructor(BB, TB) {
        this.width = BB, this.Kk = TB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * TB)
      }
      push(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let VB = 0; VB < this.width; VB++) dB[VB] = BB[TB + VB];
        return this.next = (this.next + 1) % this.Kk, this.size = Math.min(this.size + 1, this.Kk), dB
      }
      lines() {
        const BB = [],
          TB = (this.next - this.size + this.Kk) % this.Kk;
        for (let dB = 0; dB < this.size; dB++) {
          const VB = (TB + dB) % this.Kk * this.width;
          BB.push(Array.from(this.data.subarray(VB, VB + this.width)).join(","))
        }
        return BB
      }
    }

    function gB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function oB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class kB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.iW = 0, this.pastLimit = 0, this.lockSkips = 0, this.pH = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class LB {
      constructor() {
        var BB = this;
        this.tally = new kB, this.records = new YB(10, 3600), this.events = new YB(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [VB, YB, kB, LB, OB, DB, uB, HB, EB, vB] = BB.records.push(TB, dB), mB = BB.tally;
          switch (mB.frames++, uB) {
            case yB:
              return void mB.idle++;
            case JB:
              return void mB.pH++;
            case lB:
              return mB.lockSkips++, void(0 === kB && 0 === LB || BB.outlier(`lock skip dropped raw (${gB(kB)}, ${gB(LB)}) at ${oB(VB)} ms`))
          }
          mB.looked++, Number.isFinite(YB) && (mB.dtMin = Math.min(mB.dtMin, YB), mB.dtMax = Math.max(mB.dtMax, YB), mB.dtSum += YB, YB > 0 && (mB.peakRate = Math.max(mB.peakRate, Math.hypot(OB, DB) / YB))), mB.raw[0] += kB, mB.raw[1] += LB, mB.turned[0] += OB, mB.turned[1] += DB;
          const iB = Math.abs(kB) > vB || Math.abs(LB) > vB,
            NB = `raw (${gB(kB)}, ${gB(LB)}) over ${oB(YB)} ms, limit ${gB(vB)}, filter v (${HB.toFixed(3)}, ${EB.toFixed(3)}) px/ms, at ${oB(VB)} ms`;
          uB === pB ? (mB.iW++, BB.outlier(`spike put right: ${NB} -> turned (${gB(OB)}, ${gB(DB)})`)) : iB ? (mB.pastLimit++, BB.outlier(`kept past limit: ${NB}`)) : YB > 50 && (mB.longFrames++, BB.outlier(`long frame: ${NB}, turned in full`))
        }, this.onMouseMove = BB => {
          const TB = this.tally,
            {
              movementX: dB,
              movementY: VB
            } = BB;
          TB.events++;
          const yB = Math.max(Math.abs(dB), Math.abs(VB));
          TB.eventMax = Math.max(TB.eventMax, yB);
          const pB = null !== document.pointerLockElement,
            lB = this.event;
          lB[0] = BB.timeStamp, lB[1] = dB, lB[2] = VB, lB[3] = pB ? 1 : 0, this.events.push(lB), yB >= 200 && (TB.bigEvents++, this.eventOutlier(`big mousemove (${dB}, ${VB}) at ${oB(BB.timeStamp)} ms, lock ${pB?"Dg":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          (0, VB.i)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${oB(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, VB.i)("look", `pointer lock request failed at ${oB(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, VB.i)("look", `page ${document.visibilityState} at ${oB(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const BB = this.tally;
          if (this.tally = new kB, 0 === BB.events && 0 === BB.raw[0] && 0 === BB.raw[1] && 0 === BB.lockSkips && 0 === BB.iW && 0 === BB.dropped) return;
          const TB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            dB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===this.client?`, ${BB.pH} carried`:""})`, `dt avg ${oB(TB)} min ${oB(BB.dtMin)} max ${oB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${gB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${gB(BB.raw[0])}, ${gB(BB.raw[1])}) turned (${gB(BB.turned[0])}, ${gB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.iW}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "Dg" : "free")];
          BB.dropped > 0 && dB.push(`${BB.dropped} doubled spike copies dropped`), BB.lost > 0 && dB.push(`${BB.lost} records lost`), BB.suppressed > 0 && dB.push(`${BB.suppressed} outlier lines not shown`), (0, VB.i)("look", `1s: ${dB.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(BB, TB) {
        this.client = BB, this.take = TB;
        const {
          screen: dB
        } = window;
        (0, VB.i)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${dB.width}x${dB.height}, pointer lock ${document.pointerLockElement?"Dg":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, VB.f)("look", this.dump))
      }
      outlier(BB) {
        const TB = this.tally;
        TB.outliers >= 20 ? TB.suppressed++ : (TB.outliers++, (0, VB.i)("look", BB))
      }
      eventOutlier(BB) {
        const TB = this.tally;
        TB.eventLines >= 10 ? TB.suppressed++ : (TB.eventLines++, (0, VB.i)("look", BB))
      }
      takeRecords() {
        var BB;
        const TB = null === (BB = this.take) || void 0 === BB ? void 0 : BB.call(this);
        if (TB && TB.length >= 2) {
          this.tally.lost += TB[0], this.tally.dropped += TB[1];
          for (let BB = 2; BB + 10 <= TB.length; BB += 10) this.record(TB, BB)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let OB = null;

    function DB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return OB ??= new LB, OB.start(BB, TB), OB.record
    }

    function uB() {
      var BB;
      null === (BB = OB) || void 0 === BB || BB.endTake()
    }

    function HB() {
      var BB;
      null === (BB = OB) || void 0 === BB || BB.droppedCopy()
    }
  },
  8527: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    const VB = new Set(["chunkBorders"])
  },
  35819: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      e: () => YB
    });
    const VB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yB = {
        player: VB,
        store: {
          ...VB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pB(BB, TB) {
      BB instanceof Promise ? BB.then(TB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : TB(BB)
    }
    class lB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var TB;
        this.view = BB, null === (TB = this.opened) || void 0 === TB || TB.show(BB)
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, TB;
        return null !== (BB = null === (TB = this.opened) || void 0 === TB ? void 0 : TB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, TB) {
        var dB;
        null === (dB = this.opened) || void 0 === dB || dB.setCosmetic(BB, TB)
      }
      playEmote(BB) {
        var TB;
        null === (TB = this.opened) || void 0 === TB || TB.playEmote(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var TB;
        await this.ready, await (null === (TB = this.opened) || void 0 === TB ? void 0 : TB.untilDrawn(BB))
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const YB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new lB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new lB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new lB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, TB) {
        return new JB(this.current().openCharacter(BB, TB))
      }
    }
  },
  38183: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB,
      i: () => LB
    });
    var VB = dB(163),
      yB = dB(1379),
      pB = dB(1370),
      lB = dB(2702),
      JB = dB(1393),
      YB = dB(35479),
      gB = dB(965),
      oB = dB(38153);

    function kB(BB) {
      (0, lB.i)("matchmake_failed", BB, VB.i[VB.i.SHADER_PACK])
    }
    async function LB(BB, TB) {
      var dB;
      const VB = null === (dB = await oB.shaderPackPage.preload()) || void 0 === dB ? void 0 : dB.listing,
        lB = (0, YB.b)();
      VB && null !== lB && await JB.c.reportShaderPackSession(BB, {
        packId: VB.packId,
        sourceHash: VB.sourceHash,
        game: (0, pB.f)(TB, yB.t, "other"),
        playSessionId: lB,
        visitSessionId: (0, gB.b)()
      })
    }
  },
  37990: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(24),
      yB = dB(1173),
      pB = dB(2951);
    const lB = "Reconnecting";
    class JB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.lD()
        }, this.controller = new pB.b((TB => BB.reconnect(TB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: TB => {
            BB.onReconnected(TB)
          },
          onGaveUp: TB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, TB)
          }
        })
      }
      onInitialInfo(BB, TB) {
        this.graceMs = BB, this.sessionBased = TB
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(BB) {
        this.ended || this.controller.onConnectionLost(BB, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      lD() {
        const BB = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          TB = this.controller.heldToken;
        this.end(), BB && "" !== TB && this.hooks.releaseSeat(TB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const TB = "frozen" === BB || "resuming" === BB;
        TB !== this.stopped && (this.stopped = TB, this.hooks.freeze(TB));
        const dB = "frozen" === BB || "resuming" === BB && this.frozen;
        dB && !this.frozen ? (0, yB.p)(lB) : !dB && this.frozen && (0, yB.l)(lB), this.frozen = dB, this.setListening("connected" !== BB), VB.h.yH(pB.n, dB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  37998: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = TB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            TB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const dB = "visible" === document.visibilityState;
          !dB || TB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = dB, dB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = TB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8556: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(955);

    function yB() {
      var BB, TB;
      return null !== (BB = null === (TB = screen.orientation) || void 0 === TB ? void 0 : TB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const pB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && yB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = yB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, VB.wu)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const BB of this.resizers) BB()
          }
        }), 1e3)
      }
      heldSizer(BB) {
        let TB = !1;
        return () => {
          if (TB && this.isHeld()) return null;
          const dB = BB();
          return TB ||= null !== dB, dB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  38173: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    let VB = !1;
    async function yB(BB, TB) {
      if (!VB) {
        VB = !0;
        try {
          const [{
            reloadBloxd: VB
          }, {
            NotificationProvider: yB
          }] = await Promise.all([Promise.resolve().then((() => dB(1596))), Promise.resolve().then((() => dB(1235)))]);
          if (!BB || !0 === await yB.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void VB(TB)
        } catch (yB) {
          console.error("Leaving the replay failed", yB)
        }
        VB = !1
      }
    }
  },
  38010: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => oB
    });
    var VB = dB(1594),
      yB = dB(184),
      pB = dB(1573),
      lB = dB(1631),
      JB = dB(1089),
      YB = dB(1020);
    async function gB(BB, TB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === yB.b.VpnIp.code
      }(TB) && function(BB) {
        return pB.d.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: TB
          } = await (0, lB.e)(), {
            "3PSIDMCPP": dB
          } = await (0, YB.postJsonWithMetricsCookiesAndJsonResponse)(`${JB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: TB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(dB), !0
        } catch (TB) {
          return TB instanceof VB.e && "failed" === TB.code ? (console.warn("The app couldn't get an App Check token:", TB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", TB), !1
        }
      }(BB)
    }
    async function oB(BB, TB) {
      try {
        return await TB()
      } catch (dB) {
        if (!await gB(BB, dB)) throw dB
      }
      return TB()
    }
  },
  39774: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB
    });
    var VB = dB(1612);
    const yB = 33177600,
      pB = 3e4;
    let lB = !1;

    function JB(BB, TB, dB) {
      if (!BB.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (lB) return Promise.reject(new Error("A screenshot is already being taken"));
      lB = !0;
      const VB = function(BB, TB, dB) {
        const VB = Math.max(1, BB),
          pB = Math.max(1, TB),
          lB = Math.min(1, dB / Math.max(VB, pB), Math.sqrt(yB / (VB * pB)));
        return {
          width: Math.max(1, Math.floor(VB * lB)),
          height: Math.max(1, Math.floor(pB * lB))
        }
      }(TB, dB, BB.maxTextureSize);
      return BB.resize(VB.width, VB.height), new Promise(((TB, dB) => {
        let VB, yB = 2,
          JB = null;
        const YB = () => {
          var TB;
          lB = !1, null === (TB = JB) || void 0 === TB || TB(), clearTimeout(VB), BB.restoreSize()
        };
        VB = setTimeout((() => {
          YB(), dB(new Error("No frame was drawn to capture"))
        }), pB), JB = BB.onFrameDrawn((() => {
          if (yB--, yB > 0) return;
          const {
            canvas: VB
          } = BB, pB = {
            width: VB.width,
            height: VB.height
          };
          try {
            VB.toBlob((BB => {
              BB ? TB({
                blob: BB,
                ...pB
              }) : dB(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (lB) {
            dB(lB)
          } finally {
            YB()
          }
        }))
      }))
    }
    async function YB(BB, TB, dB) {
      try {
        const yB = await JB(BB, TB, dB);
        (0, VB.c)(yB.blob, `bloxd-screenshot-${yB.width}x${yB.height}-${Date.now()}.png`)
      } catch (yB) {
        console.error("Error taking screenshot:", yB)
      }
    }
  },
  8559: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(184),
      yB = dB(1652),
      pB = dB(33);
    const lB = 2;

    function JB() {
      let BB = YB("chunkHorizAddDist", VB.c.defaultChunkHorizAddDistance),
        TB = YB("chunkVertAddDist", VB.c.defaultChunkVertAddDistance);
      return BB = (0, yB.d)(BB, lB, VB.c.maxChunkHorizAddDistance), TB = (0, yB.d)(TB, lB, VB.c.maxChunkVertAddDistance), [BB, TB]
    }

    function YB(BB, TB) {
      const dB = pB.j.getItem(BB),
        VB = "number" === typeof dB || "string" === typeof dB ? Number(dB) : Number.NaN;
      return Number.isFinite(VB) ? VB : TB
    }
  },
  38002: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      g: () => gB
    });
    var VB = dB(184),
      yB = dB(4057),
      pB = dB(3138);
    const lB = [250, 500, 1e3, 2e3, 1250],
      JB = 406;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: TB,
        message: dB
      } = BB, yB = VB.b.duplicateLobbyNameError;
      return (TB === yB.code || TB === JB) && (dB === yB.text || dB === yB.text + VB.h)
    }
    async function gB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.b;
      for (let yB = 0;; yB++) {
        let JB;
        (0, pB.k)(TB);
        try {
          return await BB()
        } catch (VB) {
          if (JB = lB[yB], void 0 === JB || !YB(VB)) throw VB
        }
        await dB(JB, TB)
      }
    }
    const oB = new Set([VB.b.duplicateLobbyNameError.code, VB.b.lobbyCantBeCreated.code, VB.b.roomDisposedEarlyError.code, VB.b.roomDisposedLateError.code, VB.b.serverRoomLimitReached.code]);

    function kB(BB) {
      if (YB(BB)) return !0;
      const TB = "object" === typeof BB && null !== BB ? BB.code : void 0;
      return "number" === typeof TB && oB.has(TB)
    }
  },
  38098: (BB, TB, dB) => {
    function VB(BB, TB) {
      const dB = BB || 4;
      return dB <= 6 ? 1 : dB <= 8 || TB ? 2 : 3
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  38096: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(270),
      yB = dB(138),
      pB = dB(33);

    function lB() {
      pB.j.setItem(VB.Hb, pB.j.getItem(VB.Hb) + 1), (0, yB.m)() && pB.j.setItem(VB.Fb, pB.j.getItem(VB.Fb) + 1)
    }
  },
  35476: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => HB,
      f: () => EB
    });
    var VB = dB(900),
      yB = dB(581),
      pB = dB(279),
      lB = dB(907),
      JB = dB(586),
      YB = dB(3931),
      gB = dB(95),
      oB = dB(138),
      kB = dB(1596),
      LB = dB(105),
      OB = dB(35479),
      DB = dB(33),
      uB = dB(965);

    function HB() {
      var BB, TB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (TB = navigator.language) && void 0 !== TB ? TB : "none"], "en-gb"]
    }

    function EB(BB, TB, dB, EB, vB) {
      const mB = (0, VB.j)(TB) ? (0, VB.l)(TB) : null,
        iB = {
          cookies: (0, kB.getAllCookiesForGameNameWithVariation)(TB),
          isMobile: (0, gB.isMobile)(),
          isUsingCustomGameTexturePack: null !== mB && vB(mB),
          generalCookies: {
            joinDiscord: !!DB.j.getItem("DiscordPressed"),
            newGo: YB.c,
            ...BB.getMetricsCookies(),
            trafficCode: EB,
            compliance: gB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, gB.getBrowserName)(),
            version: (0, gB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, gB.getPlatformType)(),
            deviceType: (0, LB.e)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: dB,
          languages: HB(),
          version: yB.b,
          siteUsed: oB.v,
          subsiteUsed: oB.D,
          playSessionId: (0, OB.f)(TB),
          visitSessionId: (0, uB.b)(),
          clientReason: JB.h.reason
        };
      return null !== mB && (0, pB.Fc)(mB) ? (iB.lobbyName = (0, VB.i)(mB, (0, VB.k)(TB), dB), {
        roomName: `classic_${lB.e}`,
        joinOptions: iB
      }) : {
        roomName: TB,
        joinOptions: iB
      }
    }
  },
  39390: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(38530);

    function yB(BB) {
      return {
        current: () => BB,
        watch: () => () => {}
      }
    }

    function pB() {}
    const lB = Object.freeze([0, 0, 0]),
      JB = {
        states: {
          health: yB({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: yB({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: yB({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: yB({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: yB({}),
          creativeVisibility: yB({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: yB(null),
          heldItemAim: yB({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: yB(!1),
          gliderBoostFuel: yB(0),
          flight: yB({
            canFly: !1,
            flying: !1
          }),
          crafting: yB({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: yB({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: yB({}),
          fullInventory: yB(!1),
          crosshairTarget: yB({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: yB(!0),
          replay: yB(null),
          replayEdits: yB(null),
          replayRecorder: yB({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: yB(!1)
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
          selectHotbarSlot: pB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: pB,
          setInventoryOpen: pB,
          changeIronChestPasskey: pB,
          dragReplayCamera: pB,
          applyTemporaryThirdPerson: pB,
          holdEmoteWheel: pB,
          recordFlyingMiddleText: pB,
          focusCrafting: pB,
          craftRecipe: () => ({
            Uo: 0,
            jg: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: pB,
          setShopOpen: pB,
          buyShopItem: pB,
          sendChatMessage: pB,
          ignorePlayer: pB,
          reportPlayer: pB,
          reportWorldCodeChat: pB,
          requestDiscordReportKey: pB,
          reportLobbyOrGame: pB,
          playEmote: pB,
          updateMyCosmetic: pB,
          writeOnBoard: pB,
          writeBook: pB,
          writeNameTag: pB,
          setCustomLobbyBlock: pB,
          openIronChest: pB,
          sendCodeCollab: pB,
          clickCodeBlock: pB,
          bindCustomButtonKeys: pB,
          pressCustomButton: pB,
          moveReplayFreecam: pB,
          holdReplayFreecamVertical: pB,
          respawn: pB,
          wakeUp: pB,
          requestLeaderboard: pB,
          completeTask: pB,
          setServerCookie: pB,
          answerUiRequest: pB,
          chooseRewardedAd: pB,
          setCameraZoom: pB,
          setCrosshairInteractPrompt: pB,
          setLookSensitivity: pB,
          replayAction: pB,
          setReplayPlaying: pB,
          seekReplay: pB,
          setReplayCameraMode: pB,
          syncReplayCameraMode: pB,
          setReplayCameraKeyframe: pB,
          moveReplayCameraKeyframe: pB,
          deleteReplayCameraKeyframes: pB,
          setReplayPlaybackMark: pB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: pB,
          exportReplayVideo: pB,
          toggleRecording: pB,
          saveClip: pB,
          setRecorderPrefs: pB,
          setReplayViewerOpen: pB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => VB.c,
          worldCodeAiGameState: () => VB.g
        },
        lookups: {
          localPos: () => lB,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  39609: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => tB,
      g: () => NB,
      i: () => iB
    });
    var VB = dB(184),
      yB = dB(95),
      pB = dB(2457),
      lB = dB(3834),
      JB = dB(593),
      YB = dB(39617);
    const gB = 1048576,
      oB = 1024 * gB,
      kB = 400 * gB,
      LB = 147456,
      OB = .5,
      DB = 1.5 * oB,
      uB = 768 * gB;

    function HB(BB) {
      return kB + BB * LB
    }

    function EB(BB, TB, dB) {
      var yB, lB;
      let {
        footprintBytes: JB,
        basis: gB,
        namesLimit: EB
      } = function(BB) {
        const {
          os: TB,
          deviceMemory: dB
        } = BB;
        if ("ios" === TB) switch ((0, pB.f)(BB)) {
          case "ipad_m":
            return {
              footprintBytes: HB(YB.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: uB, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: DB, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: uB, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof dB && Number.isFinite(dB) && dB > 0 ? {
          footprintBytes: dB * oB * OB,
          basis: `memory-${dB}`,
          namesLimit: !0
        } : "android" === TB ? {
          footprintBytes: uB,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: HB(YB.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(BB);
      if (dB) {
        const BB = Math.min(JB, HB(YB.e));
        JB = kB + Math.max(0, BB - kB) / 2, gB += "+killed", EB = !0
      }
      null !== TB && HB(TB) < JB && (JB = HB(TB), gB += "+learned", EB = !0);
      const vB = function(BB) {
          const TB = Math.floor((BB - kB) / LB);
          return Math.min(YB.e, Math.max(YB.g, TB))
        }(JB),
        mB = (0, YB.m)(vB);
      return {
        footprintBytes: JB,
        shedFootprintBytes: EB ? Math.max(JB, HB(vB)) : null,
        chunkCap: vB,
        maxHorizDistance: null !== (yB = null === mB || void 0 === mB ? void 0 : mB.horizontal) && void 0 !== yB ? yB : VB.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (lB = null === mB || void 0 === mB ? void 0 : mB.vertical) && void 0 !== lB ? lB : VB.c.maxChunkVertAddDistance,
        basis: gB
      }
    }
    let vB = null;

    function mB() {
      return EB({
        os: (0, yB.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, pB.g)()
      }, (0, lB.f)(), (0, JB.E)("wasm").length > 0)
    }

    function iB() {
      return vB ??= mB(), vB
    }

    function NB() {
      var BB;
      return (null !== (BB = vB) && void 0 !== BB ? BB : mB()).basis
    }

    function tB(BB, TB) {
      return BB.setChunkCap(TB.chunkCap)
    }
  },
  39765: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      e: () => pB
    });
    var VB = dB(2626),
      yB = dB(900);

    function pB(BB, TB) {
      return null !== BB.gameSource && (0, VB.o)(TB, BB.gameSource)
    }

    function lB(BB, TB) {
      if (null === BB.gameSource || "" === BB.gameSource || null === TB) return !0;
      const dB = (0, yB.j)(TB) ? (0, yB.l)(TB) : null;
      return null !== dB && pB(BB, dB)
    }
  },
  39751: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      d: () => uB,
      f: () => gB,
      j: () => oB,
      m: () => DB
    });
    var VB = dB(39703),
      yB = dB(39753);
    const pB = 396,
      lB = 1,
      JB = 2,
      YB = 3,
      gB = {
        Glb: 1,
        LifeformAtlas: 2,
        ArmourAtlas: 3,
        Cape: 4,
        GroupAtlas: 5,
        Particle: 6,
        AttachmentImage: 7,
        BlockImage: 8
      },
      oB = {
        File: 0,
        Item: 1
      },
      kB = 0,
      LB = 1,
      OB = 2;

    function DB(BB) {
      const TB = (0, VB.n)();
      TB.catch((() => {}));
      let yB = null;
      return {
        glbUrl: BB,
        lifeformAtlasUrl: async BB => (await TB).lifeformAtlasUrl(BB),
        armourAtlasUrl: async () => (await dB.e(187).then((() => dB(33444)))).armourAtlasUrl,
        capeUrl: async BB => (await TB).capeUrl(BB),
        attachmentImageUrl: async BB => (await TB).attachmentImageUrl(BB),
        blockImageUrl: async BB => (await TB).blockImageUrl(BB),
        groupAtlasUrl: async BB => (await TB).groupAtlasUrl(BB),
        particleTextureUrl: async BB => (await TB).particleTextureUrl(BB),
        particleItemUrl: async BB => (yB ??= dB.e(35).then((() => dB(50274))).catch((BB => {
          throw yB = null, BB
        })), (await yB).particleItemUrl(BB))
      }
    }
    class uB {
      constructor(BB, TB) {
        var dB, pB, lB;
        let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = BB, this.onFailure = TB, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.ND = !1, this.load = null !== (dB = JB.load) && void 0 !== dB ? dB : (BB, TB) => (0, yB.l)(BB, JB.fetchImage, TB), this.release = null !== (pB = JB.release) && void 0 !== pB ? pB : yB.q, this.fetchFile = null !== (lB = JB.fetchFile) && void 0 !== lB ? lB : BB => (0, VB.k)(BB)
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(BB, TB) {
        this.glbWrittenImages.set(BB, tB(TB))
      }
      glbTaken(BB, TB) {
        const dB = this.glbWrittenImages.get(BB);
        this.glbWrittenImages.delete(BB), TB && this.setGlbImages(BB, void 0 !== dB && dB.length > 0 ? dB : void 0)
      }
      setGlbImages(BB, TB) {
        var dB;
        this.glbTakenCount.set(BB, (null !== (dB = this.glbTakenCount.get(BB)) && void 0 !== dB ? dB : 0) + 1), void 0 === TB ? this.glbImages.delete(BB) : this.glbImages.set(BB, TB);
        const VB = [];
        for (const {
            key: yB
          }
          of this.loading.values()) yB.kind === gB.Glb && yB.word === BB && VB.push(yB);
        for (let yB = this.ready.length - 1; yB >= 0; yB--) {
          const {
            key: TB,
            id: dB
          } = this.ready[yB];
          TB.kind === gB.Glb && TB.word === BB && (this.ready.splice(yB, 1), null !== dB && (this.answered.delete(dB), this.release(dB)), VB.push(TB))
        }
        this.loadAgain(VB)
      }
      onEvent(BB) {
        if (this.ND) return;
        const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
        for (let dB = 0; dB + 8 <= BB.byteLength; dB += 8) {
          const BB = TB.getUint8(dB),
            VB = TB.getUint32(dB + 4, !0);
          if (BB === YB) {
            this.answered.delete(VB), this.release(VB);
            continue
          }
          const yB = {
            kind: TB.getUint8(dB + 1),
            index: TB.getUint8(dB + 2),
            word: VB
          };
          BB === lB ? this.want(yB) : BB === JB && this.loading.delete(HB(yB))
        }
      }
      reload(BB, TB) {
        const dB = dB => BB.includes(dB.kind) && (void 0 === TB || TB(dB)),
          VB = new Map;
        for (const yB of this.answered.values()) dB(yB) && VB.set(HB(yB), yB);
        for (const [yB, {
            key: pB
          }] of this.loading) dB(pB) && VB.set(yB, pB);
        this.loadAgain(VB.values())
      }
      loadAgain(BB) {
        for (const TB of BB) this.loading.delete(HB(TB)), this.want(TB)
      }
      drain(BB) {
        if (null !== BB)
          for (; this.ready.length > 0;) {
            if (!BB(pB, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.ND = !0, this.loading.clear(), this.ready.length = 0;
        for (const BB of this.answered.keys()) this.release(BB);
        this.answered.clear()
      }
      want(BB) {
        const TB = HB(BB);
        if (this.loading.has(TB)) return;
        const dB = {
          key: BB
        };
        this.loading.set(TB, dB), this.loadKey(BB).then((VB => {
          this.ND || this.loading.get(TB) !== dB ? this.release(VB.id) : (this.loading.delete(TB), this.answered.set(VB.id, BB), this.ready.push({
            record: vB(BB, kB, VB),
            key: BB,
            id: VB.id
          }))
        }), (VB => {
          if (this.ND || this.loading.get(TB) !== dB) return;
          this.loading.delete(TB), this.onFailure({
            key: BB,
            error: VB
          });
          const pB = VB instanceof yB.c && "decode" === VB.stage ? LB : OB;
          this.ready.push({
            record: vB(BB, pB, null),
            key: BB,
            id: null
          })
        }))
      }
      async loadKey(BB) {
        switch (BB.kind) {
          case gB.Glb:
            return this.load(await this.glbImage(BB), "none");
          case gB.LifeformAtlas:
            return this.load(EB(await this.sources.lifeformAtlasUrl(BB.word), BB), "none");
          case gB.ArmourAtlas:
            return this.load(EB(await this.sources.armourAtlasUrl(), BB), "none");
          case gB.Cape:
            return this.load(EB(await this.sources.capeUrl(BB.word), BB), "none");
          case gB.AttachmentImage:
            return this.load(EB(await this.sources.attachmentImageUrl(BB.word), BB), "none");
          case gB.GroupAtlas:
            return this.load(EB(await this.sources.groupAtlasUrl(BB.word), BB), "none");
          case gB.BlockImage:
            return this.load(EB(await this.sources.blockImageUrl(BB.word), BB), "none");
          case gB.Particle: {
            const TB = await (BB.index === oB.Item ? this.sources.particleItemUrl(BB.word) : this.sources.particleTextureUrl(BB.word));
            return this.load(EB(TB, BB), "flipY")
          }
          default:
            throw new yB.c("fetch", `image kind ${BB.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(BB) {
        var TB;
        let dB = this.glbImages.get(BB.word);
        if (void 0 === dB) {
          const TB = this.glbTakenCount.get(BB.word),
            VB = EB(await this.sources.glbUrl(BB.word), BB);
          try {
            dB = tB(await this.fetchFile(VB))
          } catch (pB) {
            throw new yB.c("fetch", VB, {
              cause: pB
            })
          }
          this.glbTakenCount.get(BB.word) === TB && this.glbImages.set(BB.word, dB)
        }
        const VB = null === (TB = dB) || void 0 === TB ? void 0 : TB[BB.index];
        if (!VB) throw new yB.c("decode", `image ${BB.index} of file ${2147483647&BB.word}`, {
          cause: null
        });
        return VB
      }
    }

    function HB(BB) {
      let {
        kind: TB,
        index: dB,
        word: VB
      } = BB;
      return `${TB}:${dB}:${VB}`
    }

    function EB(BB, TB) {
      if (null === BB) throw new yB.c("fetch", `no URL for image ${HB(TB)}`, {
        cause: null
      });
      return BB
    }

    function vB(BB, TB, dB) {
      var VB, yB, pB;
      const lB = new Uint8Array(16),
        JB = new DataView(lB.buffer);
      return JB.setUint8(0, BB.kind), JB.setUint8(1, BB.index), JB.setUint8(2, TB), JB.setUint32(4, BB.word, !0), JB.setUint32(8, null !== (VB = null === dB || void 0 === dB ? void 0 : dB.id) && void 0 !== VB ? VB : 0, !0), JB.setUint16(12, Math.min(null !== (yB = null === dB || void 0 === dB ? void 0 : dB.width) && void 0 !== yB ? yB : 0, 65535), !0), JB.setUint16(14, Math.min(null !== (pB = null === dB || void 0 === dB ? void 0 : dB.height) && void 0 !== pB ? pB : 0, 65535), !0), lB
    }
    const mB = 1179937895,
      iB = 1313821514,
      NB = 5130562;

    function tB(BB) {
      var TB;
      const dB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      if (BB.byteLength < 20 || dB.getUint32(0, !0) !== mB || dB.getUint32(16, !0) !== iB) return [];
      let VB, yB = 20 + dB.getUint32(12, !0);
      try {
        VB = JSON.parse((new TextDecoder).decode(BB.subarray(20, yB)))
      } catch {
        return []
      }
      for (; yB + 8 <= BB.byteLength && dB.getUint32(yB + 4, !0) !== NB;) yB += 8 + dB.getUint32(yB, !0);
      const pB = null !== (TB = VB.images) && void 0 !== TB ? TB : [];
      if (0 === pB.length || yB + 8 > BB.byteLength) return pB.map((() => null));
      const lB = BB.subarray(yB + 8, Math.min(BB.byteLength, yB + 8 + dB.getUint32(yB, !0)));
      return pB.map((BB => {
        var TB, dB, yB;
        const pB = void 0 === BB.bufferView || null === (TB = VB.bufferViews) || void 0 === TB ? void 0 : TB[BB.bufferView];
        if (!pB || 0 !== (null !== (dB = pB.buffer) && void 0 !== dB ? dB : 0) || void 0 === pB.byteLength) return null;
        const JB = null !== (yB = pB.byteOffset) && void 0 !== yB ? yB : 0,
          YB = JB + pB.byteLength;
        return YB <= lB.byteLength ? lB.slice(JB, YB) : null
      }))
    }
  },
  39395: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      c: () => pB,
      g: () => yB
    });
    let VB = null;

    function yB(BB) {
      VB = BB
    }

    function pB(BB) {
      VB === BB && (VB = null)
    }

    function lB() {
      var BB;
      null === (BB = VB) || void 0 === BB || BB()
    }
  },
  35577: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      e: () => kB,
      h: () => lB
    });
    var VB = dB(2101),
      yB = dB(2109),
      pB = dB(2117);

    function lB(BB, TB) {
      return (!(0, pB.b)() || 0 === BB && 0 === TB) && (0, yB.t)(VB.k.Joystick, 0, BB, TB, 0)
    }
    const JB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function YB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function gB(BB, TB) {
      const dB = BB => Math.min(65535, Math.round(4 * BB));
      return (dB(BB) | dB(TB) << 16) >>> 0
    }

    function oB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const kB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map
      }
      set(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        TB ? this.elements.set(BB, {
          element: TB,
          hidden: dB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        for (const BB of this.elements.keys()) this.measureOne(BB)
      }
      hitZone(BB, TB) {
        let dB = null,
          VB = 1;
        for (const yB of this.elements.keys()) {
          const pB = this.shown(yB);
          if (!pB) continue;
          const {
            rect: lB,
            element: JB
          } = pB, gB = oB(lB), kB = Math.max(0, lB.width / 2 - gB.radius), LB = Math.max(0, lB.height / 2 - gB.radius), OB = Math.max(0, Math.abs(BB - gB.x) - kB), DB = Math.max(0, Math.abs(TB - gB.y) - LB), uB = JB.firstElementChild;
          let HB = Math.hypot(OB, DB) / gB.radius;
          const EB = YB(uB);
          EB && (HB = Math.min(HB, Math.max(2 * Math.abs(BB - gB.x) / EB.width, 2 * Math.abs(TB - gB.y) / EB.height))), HB < VB && (dB = {
            code: yB,
            element: JB,
            key: uB,
            ...gB
          }, VB = HB)
        }
        return dB
      }
      measureOne(BB) {
        const TB = this.shown(BB);
        if (!TB) return void this.write(VB.k.TouchZone, BB, 0, 0, 0);
        const {
          rect: dB,
          element: yB
        } = TB, pB = oB(dB);
        this.write(VB.k.TouchZone, BB, pB.x, pB.y, gB(dB.width, dB.height));
        const lB = YB(yB.firstElementChild);
        this.write(VB.k.TouchZone, 256 | BB, 0, 0, lB ? gB(lB.width, lB.height) : 0)
      }
      shown(BB) {
        const TB = this.elements.get(BB);
        if (!TB || TB.hidden) return null;
        const dB = TB.element.getBoundingClientRect();
        return dB.width <= 0 || dB.height <= 0 ? null : {
          rect: dB,
          element: TB.element
        }
      }
    }(yB.t)
  },
  39601: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB,
      f: () => oB
    });
    var VB = dB(39621),
      yB = dB(38010),
      pB = dB(35476),
      lB = dB(39609),
      JB = dB(39527),
      YB = dB(39576);
    const gB = VB.e.timeForPlayerToConnect - 1e4;
    async function oB(BB, TB, dB) {
      const VB = await BB.getTrafficCode().then((BB => null !== BB && void 0 !== BB ? BB : null), (BB => (console.error("[bloxd-wasm-client] could not get a traffic code", BB), null)));
      if (null === VB) throw new YB.A;
      const {
        gameNameWithVariation: gB,
        lobbyName: oB
      } = TB, kB = () => {
        const TB = (0, pB.f)(BB, gB, oB, VB, (BB => {
          var TB;
          return null !== (TB = null === dB || void 0 === dB ? void 0 : dB.isUsingCustomGameTexturePack(BB)) && void 0 !== TB && TB
        }));
        TB.joinOptions.wasmClient = !0, TB.joinOptions.budgetBasis = (0, lB.g)();
        const yB = (0, JB.G)();
        return null !== yB && (TB.joinOptions.renderBackend = yB), TB
      }, {
        roomName: LB,
        joinOptions: OB
      } = kB();
      return {
        endpoint: TB.endpoint,
        roomName: LB,
        joinOptions: OB,
        session: {
          gameNameWithVariation: gB,
          lobbyName: oB,
          playerDbId: BB.whamm
        },
        optionsAfterRefusal: async TB => await (0, yB.c)(BB, TB) ? kB().joinOptions : null
      }
    }
  },
  4459: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => lB
    });
    var VB = dB(2626),
      yB = dB(4467);
    let pB = null;

    function lB(BB, TB) {
      pB = {
        pack: BB.metaData.id === VB.d ? null : BB,
        prompt: TB
      }
    }

    function JB(BB, TB) {
      const dB = pB;
      null !== dB && (0, yB.e)(dB.pack, BB) && (pB = null, TB && dB.prompt())
    }
  },
  39756: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      f: () => pB,
      h: () => kB,
      i: () => lB
    });
    var VB = dB(39751),
      yB = dB(39703);
    const pB = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(BB) {
        this.change((() => {
          this.page = BB
        }))
      }
      setSessionFiles(BB) {
        const TB = void 0 !== this.session && void 0 === BB;
        if (this.change((() => {
            this.session = BB
          })), TB)
          for (const dB of [...this.pageListeners]) dB()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(BB) {
        return this.pageListeners.add(BB), () => {
          this.pageListeners.delete(BB)
        }
      }
      setFollower(BB) {
        this.follower = BB, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const BB of [...this.wantedListeners]) BB();
        this.startFollower()
      }
      onWanted(BB) {
        return this.wantedListeners.add(BB), () => {
          this.wantedListeners.delete(BB)
        }
      }
      onChange(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      startFollower() {
        const BB = this.follower;
        this.isWanted && null !== BB && (this.follower = null, BB((() => {
          this.follower = BB
        })))
      }
      change(BB) {
        const TB = this.current;
        if (BB(), this.current !== TB)
          for (const dB of this.listeners) dB()
      }
    };

    function lB(BB, TB) {
      return {
        ...BB,
        armourAtlasUrl: () => {
          var dB, VB;
          return null !== (dB = null === (VB = TB()) || void 0 === VB ? void 0 : VB.armourAtlasUrl()) && void 0 !== dB ? dB : BB.armourAtlasUrl()
        },
        lifeformAtlasUrl: dB => YB(TB(), (BB => BB.LIFEFORM_ATLAS_PATHS[dB]), (() => BB.lifeformAtlasUrl(dB))),
        groupAtlasUrl: dB => YB(TB(), (BB => BB.GROUP_ATLAS_PATHS[dB]), (() => BB.groupAtlasUrl(dB))),
        particleItemUrl: VB => gB(TB(), (async () => {
          const BB = await dB.e(35).then((() => dB(50274))).catch((() => null));
          return (null === BB || void 0 === BB ? void 0 : BB.particleItemSprite(VB)) || null
        }), (() => BB.particleItemUrl(VB))),
        blockImageUrl: dB => gB(TB(), (async () => {
          var BB, TB;
          return null !== (BB = null === (TB = await JB()) || void 0 === TB ? void 0 : TB.blockImageName(dB)) && void 0 !== BB ? BB : null
        }), (() => BB.blockImageUrl(dB)))
      }
    }

    function JB() {
      return (0, yB.n)().catch((() => null))
    }

    function YB(BB, TB, dB) {
      return gB(BB, (async () => {
        var BB;
        const dB = await JB(),
          VB = null === dB ? null : TB(dB),
          yB = null !== (BB = null === VB || void 0 === VB ? void 0 : VB.slice(VB.lastIndexOf("/") + 1)) && void 0 !== BB ? BB : null;
        return "Player_Atlas" === yB ? null : yB
      }), dB)
    }
    async function gB(BB, TB, dB) {
      if (null !== BB) {
        const dB = await TB(),
          VB = null === dB ? null : BB.textureUrl(dB);
        if (null !== VB) return VB
      }
      return dB()
    }
    const oB = 0;

    function kB(BB) {
      const TB = [VB.f.ArmourAtlas, VB.f.LifeformAtlas, VB.f.GroupAtlas, VB.f.BlockImage, VB.f.Particle];
      BB.reload(TB, (BB => {
        switch (BB.kind) {
          case VB.f.Particle:
            return BB.index === VB.j.Item;
          case VB.f.LifeformAtlas:
            return BB.word !== oB;
          default:
            return !0
        }
      }))
    }
  },
  39630: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      d: () => JB,
      e: () => lB,
      i: () => yB,
      j: () => pB
    });
    const VB = 1e3;

    function yB() {
      YB((() => {
        window.location.reload()
      }))
    }

    function pB() {
      return new Promise((() => {}))
    }

    function lB(BB) {
      YB((() => {
        window.location.replace(BB(window.location.href))
      }))
    }

    function JB(BB) {
      Promise.resolve().then((() => dB(101))).then((TB => {
        let {
          currentUrl: dB
        } = TB;
        lB((() => dB.mergeSearchParamsInto(BB)))
      }), (() => {
        lB((() => BB))
      }))
    }

    function YB(BB) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => dB(1596))).then((TB => {
        let {
          prepareForUnloadWithoutConfirmation: dB
        } = TB;
        try {
          dB()
        } catch (VB) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", VB), window.onbeforeunload = null
        }
        BB()
      }), (() => {
        window.onbeforeunload = null, BB()
      })) : BB()
    }
  },
  4467: (BB, TB, dB) => {
    function VB(BB, TB) {
      return yB(BB, TB)
    }

    function yB(BB, TB) {
      if (BB === TB) return !0;
      if ("object" !== typeof BB || "object" !== typeof TB || null === BB || null === TB || Array.isArray(BB) !== Array.isArray(TB)) return !1;
      const dB = BB,
        VB = TB,
        pB = Object.keys(dB);
      return pB.length === Object.keys(VB).length && pB.every((BB => Object.prototype.hasOwnProperty.call(VB, BB) && yB(dB[BB], VB[BB])))
    }
    dB.d(TB, {
      e: () => VB
    })
  },
  39669: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => fB,
      d: () => NB,
      f: () => HB,
      h: () => uB
    });
    var VB = dB(4057),
      yB = dB(3138),
      pB = dB(38002),
      lB = dB(38015),
      JB = dB(2512),
      YB = dB(39567),
      gB = dB(39576);
    const oB = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      kB = 3,
      LB = [500, 1500];

    function OB(BB) {
      const TB = new URL(BB);
      return {
        secure: "https:" === TB.protocol || "wss:" === TB.protocol,
        host: TB.host,
        pathname: TB.pathname.replace(/\/+$/, ""),
        search: TB.searchParams.toString()
      }
    }

    function DB(BB, TB, dB) {
      const {
        secure: VB,
        host: yB,
        pathname: pB,
        search: lB
      } = OB(BB);
      return `${VB?"https":"http"}://${yB}${pB}/matchmake/${TB}/${encodeURIComponent(dB)}${lB?`?${lB}`:""}`
    }

    function uB(BB, TB) {
      var dB;
      const VB = null !== (dB = TB.protocol) && void 0 !== dB ? dB : "ws";
      if ("ws" !== VB) throw new Error(`seat reservation asks for the ${VB} transport`);
      const {
        secure: yB,
        host: pB,
        pathname: lB,
        search: JB
      } = OB(BB), YB = new URLSearchParams(JB);
      YB.append("sessionId", TB.sessionId), TB.reconnectionToken && YB.append("reconnectionToken", TB.reconnectionToken);
      return `${yB?"wss":"ws"}://${TB.room.publicAddress||`${pB}${lB}`}/${TB.room.processId}/${TB.room.roomId}?${YB.toString()}`
    }
    async function HB(BB, TB, dB) {
      var YB;
      let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const OB = null !== (YB = oB.sleep) && void 0 !== YB ? YB : VB.b,
        uB = new yB.b(oB.signal),
        HB = new JB.c(lB.e, (() => {
          (0, yB.e)(uB.controller, new lB.i)
        })),
        {
          signal: iB
        } = uB;
      try {
        return await (0, pB.g)((() => async function(BB, TB, dB, VB) {
          var pB;
          const {
            signal: lB,
            sleep: JB
          } = VB, YB = DB(BB, "joinOrCreate", TB), oB = JSON.stringify(dB);
          let OB = null;
          for (let DB = 0; DB < kB; DB++) {
            var uB;
            if (DB > 0) await JB(null !== (uB = LB[DB - 1]) && void 0 !== uB ? uB : 1500, lB);
            let BB;
            (0, yB.k)(lB);
            try {
              BB = await vB(YB, oB, VB)
            } catch (HB) {
              (0, yB.k)(lB), OB = EB(HB);
              continue
            }
            const {
              response: TB,
              answer: dB,
              refusal: pB,
              lost: kB
            } = BB;
            if (null === kB) {
              if (null !== pB) throw mB(pB, dB);
              if (TB.ok && null !== dB && sB(dB)) return dB;
              OB = new gB.z(`seat request answered HTTP ${TB.status}${null===dB?" without JSON":" without a seat"}`, !1)
            } else OB = EB(kB.error)
          }
          throw null !== (pB = OB) && void 0 !== pB ? pB : new gB.z("seat request made no attempt", !1)
        }(BB, TB, dB, {
          ...oB,
          signal: iB,
          sleep: OB
        })), iB, OB)
      } finally {
        HB.stop(), uB.unfollow()
      }
    }

    function EB(BB) {
      return new gB.z(BB instanceof Error ? BB.message : String(BB), !0, BB)
    }
    async function vB(BB, TB, dB) {
      var VB;
      const {
        signal: pB
      } = dB, lB = null !== (VB = dB.fetch) && void 0 !== VB ? VB : fetch, JB = await lB(BB, {
        method: "POST",
        headers: {
          ...oB,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: TB,
        credentials: "include",
        signal: pB
      }), {
        answer: YB,
        lost: gB
      } = await async function(BB) {
        try {
          const TB = await BB.json();
          return {
            answer: "object" === typeof TB && null !== TB ? TB : null,
            lost: null
          }
        } catch (TB) {
          return {
            answer: null,
            lost: TB instanceof SyntaxError ? null : {
              error: TB
            }
          }
        }
      }(JB), kB = null !== YB && "string" === typeof YB.error ? YB.error : null;
      var LB;
      null !== kB && (null === (LB = dB.onRefusal) || void 0 === LB || LB.call(dB));
      return (0, yB.k)(pB), {
        response: JB,
        answer: YB,
        refusal: kB,
        lost: gB
      }
    }

    function mB(BB, TB) {
      return new gB.p(BB, "number" === typeof(null === TB || void 0 === TB ? void 0 : TB.code) ? TB.code : 0, (0, YB.p)(BB).text)
    }
    class iB extends Error {
      constructor(BB, TB) {
        super(BB), this.code = TB, this.name = "SeatHttpError"
      }
    }
    async function NB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: yB,
        answer: pB,
        refusal: lB,
        lost: JB
      } = await vB(DB(BB, "reconnect", TB), JSON.stringify({
        reconnectionToken: dB
      }), VB);
      if (null !== JB) throw JB.error;
      if (!yB.ok) {
        const BB = null !== pB && "number" === typeof pB.code && 0 !== pB.code ? pB.code : yB.status;
        throw new iB(`the seat's reconnect was refused: ${null!==lB&&void 0!==lB?lB:`HTTP ${yB.status}`}`, BB)
      }
      if (null !== lB) throw mB(lB, pB);
      if (null === pB || !sB(pB)) throw new Error("the seat's reconnect answered " + (null === pB ? "without JSON" : "without a seat"));
      return {
        ...pB,
        reconnectionToken: dB
      }
    }
    const tB = 10;

    function fB(BB) {
      if (BB.byteLength < 2 || BB[0] !== tB) return null;
      const TB = 2 + BB[1];
      return TB > BB.byteLength ? null : (new TextDecoder).decode(BB.subarray(2, TB))
    }

    function sB(BB) {
      const TB = BB.room;
      return "string" === typeof BB.sessionId && "object" === typeof TB && null !== TB && "string" === typeof TB.roomId && "string" === typeof TB.processId && "string" === typeof TB.name
    }
  },
  39330: (BB, TB, dB) => {
    dB.d(TB, {
      $: () => tB,
      D: () => FB,
      G: () => iB,
      H: () => NB,
      K: () => HB,
      M: () => zB,
      O: () => rB,
      S: () => DB,
      T: () => cB,
      U: () => vB,
      V: () => EB,
      Y: () => mB,
      c: () => yB,
      g: () => IB,
      i: () => KB,
      j: () => OB,
      l: () => uB,
      n: () => UB,
      q: () => sB,
      u: () => wB,
      v: () => MB,
      z: () => fB
    });
    var VB = dB(2482);
    const yB = {
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

    function pB(BB, TB) {
      return !ArrayBuffer.isView(BB) || BB instanceof DataView ? Array.isArray(BB) ? BB.map((BB => TB(BB))) : BB : Array.from(BB, (BB => TB(BB)))
    }

    function lB(BB) {
      if ("string" !== typeof BB) return BB;
      for (let TB = 0; TB < BB.length; TB++) {
        const dB = BB.charCodeAt(TB);
        if (dB >= 55296 && dB <= 57343) return YB.decode(JB.encode(BB))
      }
      return BB
    }
    const JB = new TextEncoder,
      YB = new TextDecoder;

    function gB(BB) {
      return BB
    }
    let oB;

    function kB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [lB(BB.yl), lB(BB.pl)]
    }

    function LB(BB) {
      return null === BB || "object" !== typeof BB ? BB : [pB(BB.ad, gB), pB(BB.jl, gB)]
    }

    function OB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.Jo), lB(TB.Yo)];
      var TB
    }

    function DB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [TB.id, TB.po];
      var TB
    }

    function uB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [TB.Vp, lB(TB.yp), TB.lp, lB(TB.kp), TB.Hp, TB.Ep, TB.RY, lB(TB.aY), lB(TB.ZY)];
      var TB
    }

    function HB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [pB(TB.KY, gB), TB.rY];
      var TB
    }

    function EB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [pB(TB.hg, (BB => lB(BB))), lB(TB.Cg), TB.Gg];
      var TB
    }

    function vB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [pB(TB.gg, gB), lB(TB.og), TB.kg];
      var TB
    }

    function mB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.tp), lB(TB.sp)];
      var TB
    }

    function iB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.Eo)];
      var TB
    }

    function NB(BB) {
      return lB(BB)
    }

    function tB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.cY), lB(TB.SY), lB(TB.yl), lB(TB.pl)];
      var TB
    }

    function fB(BB) {
      return kB(BB)
    }

    function sB(BB) {
      return kB(BB)
    }

    function MB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.zg)];
      var TB
    }

    function zB(BB) {
      return BB
    }

    function wB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.Ng), lB(TB.tg)];
      var TB
    }

    function UB(BB) {
      return lB(BB)
    }

    function FB(BB) {
      return LB(BB)
    }

    function KB(BB) {
      return LB(BB)
    }

    function rB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [lB(TB.oo)];
      var TB
    }

    function IB(BB) {
      return (oB ??= (0, VB.e)().map((BB => BB.name)), oB).map((TB => {
        return "string" === typeof(dB = BB[TB]) ? lB(dB) : pB(dB, gB);
        var dB
      }))
    }

    function cB(BB) {
      return null === (TB = BB) || "object" !== typeof TB ? TB : [TB.vo, TB.fo, TB.Mo];
      var TB
    }
  },
  39760: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB
    });
    var VB = dB(39765),
      yB = dB(39756);
    const pB = new class {
      constructor(BB) {
        this.pack = BB, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, BB.onWanted((() => {
          this.release()
        }))
      }
      setGame(BB) {
        if (void 0 === BB && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const TB = this.inGame();
        if (this.game = BB, this.update(), this.inGame() !== TB)
          for (const dB of this.gameListeners) dB()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(BB) {
        return this.gameListeners.add(BB), () => {
          this.gameListeners.delete(BB)
        }
      }
      unwantedLeave(BB) {
        BB && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(BB) {
        null !== BB && BB === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const BB = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, BB && this.setGame(void 0)
      }
      setSettled(BB) {
        this.settle = BB, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, VB.b)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(yB.f)
  },
  39565: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      followPageUiPack: () => Yg,
      packForGame: () => Jg,
      playWasmGame: () => ig,
      prefetchWasmPreviews: () => NJ,
      setGamePackConfirm: () => KY,
      startWasmPlay: () => Og,
      startWasmPreviews: () => iJ
    });
    var VB = dB(184),
      yB = dB(1126),
      pB = dB(163),
      lB = dB(38028),
      JB = dB(1679),
      YB = dB(24),
      gB = dB(4081),
      oB = dB(1201),
      kB = dB(1209),
      LB = dB(38173),
      OB = dB(38183),
      DB = dB(38096),
      uB = dB(35479),
      HB = dB(38002),
      EB = dB(38015),
      vB = dB(39412),
      mB = dB(4169),
      iB = dB(39322),
      NB = dB(39390),
      tB = dB(39330);
    const fB = {
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
        lobbyLeaderboardRows: !0
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
        buyShopItem: !0
      },
      queries: {
        enchantingOffer: !0,
        worldCodeAiChunk: !0,
        worldCodeAiGameState: !0
      },
      lookups: {
        momentumFrac: !0,
        localPos: !0,
        screenPos: !0,
        codeBlockClickable: !0,
        blocksStandingOn: !0,
        dropAhead: !0,
        replayCamera: !0,
        leaveGameReloadsPage: !0
      }
    };

    function sB(BB) {
      const TB = {
        ...NB.c[BB]
      };
      for (const dB of Object.keys(fB[BB])) delete TB[dB];
      return TB
    }

    function MB() {
      var BB, TB;
      return null === (BB = null === (TB = (0, iB.i)()) || void 0 === TB ? void 0 : TB.localPlayerAlive()) || void 0 === BB || BB
    }

    function zB() {
      var BB, TB;
      return null !== (BB = null === (TB = (0, iB.i)()) || void 0 === TB ? void 0 : TB.localDeaths()) && void 0 !== BB ? BB : null
    }
    const wB = {
        current: MB,
        watch: BB => {
          let TB = MB(),
            dB = zB();
          return (0, mB.w)((() => {
            const VB = MB(),
              yB = zB(),
              pB = null !== yB && null !== dB && yB !== dB;
            dB = yB, pB ? (TB || BB(!0), BB(!1), VB && BB(!0), TB = VB) : VB !== TB && (TB = VB, BB(VB))
          }))
        }
      },
      UB = {
        states: {
          ...sB("states"),
          localPlayerAlive: wB
        },
        events: {
          ...sB("events"),
          localPlayerAliveSet: {
            watch: wB.watch
          }
        },
        commands: {
          ...sB("commands"),
          respawn: () => {
            var BB;
            null === (BB = (0, iB.i)()) || void 0 === BB || BB.respawn()
          },
          playEmote: BB => {
            var TB;
            null === (TB = (0, iB.i)()) || void 0 === TB || TB.send(tB.c.PlayEmote, (0, tB.G)({
              Eo: BB
            }))
          },
          applyTemporaryThirdPerson: BB => {
            var TB;
            let {
              durationMs: dB
            } = BB;
            null === (TB = (0, iB.i)()) || void 0 === TB || TB.thirdPersonFor(dB)
          },
          bindCustomButtonKeys: BB => {
            var TB;
            null === (TB = (0, iB.i)()) || void 0 === TB || TB.bindCustomButtonKeys(BB)
          },
          pressCustomButton: BB => {
            var TB;
            let {
              id: dB,
              down: VB
            } = BB;
            null === (TB = (0, iB.i)()) || void 0 === TB || TB.pressCustomButton(dB, VB)
          },
          setLookSensitivity: () => {},
          wakeUp: BB => {
            const TB = (0, tB.O)({
                oo: BB
              }),
              dB = () => {
                const BB = (0, iB.i)();
                return !(null !== BB && void 0 !== BB && BB.isSessionLive) || BB.send(tB.c.StopSleeping, TB)
              };
            if (!dB()) {
              const BB = (0, mB.w)((() => {
                dB() && BB()
              }))
            }
          },
          setCameraZoom: BB => {
            var TB;
            null === (TB = (0, iB.i)()) || void 0 === TB || TB.setCameraZoom(BB)
          }
        },
        queries: sB("queries"),
        lookups: {
          ...sB("lookups"),
          cameraZoom: () => {
            var BB, TB;
            return null !== (BB = null === (TB = (0, iB.i)()) || void 0 === TB ? void 0 : TB.cameraZoom()) && void 0 !== BB ? BB : 0
          }
        }
      };
    var FB = dB(39567),
      KB = dB(39576),
      rB = dB(39585),
      IB = dB(39601),
      cB = dB(1135),
      SB = dB(101),
      PB = dB(3931),
      QB = dB(3231),
      RB = dB(1059);
    const aB = {
      Sl: () => (0, cB.d)(),
      inbuiltOverwritten: () => PB.e,
      reflectApplyHit: () => RB.b,
      definerHit: () => SB.currentUrl.c,
      emitReplaced: () => (0, YB.b)(),
      confirmMesh: () => (0, QB.b)()
    };
    var ZB = dB(39590),
      XB = dB(39630);
    var WB = dB(21),
      hB = dB(1685),
      CB = dB(1738),
      GB = dB(1514),
      qB = dB(1779),
      xB = dB(1078),
      jB = dB(1133),
      AB = dB(39550);

    function bB() {
      return jB.f.get().getCurrentLanguageCode()
    }

    function nB(BB) {
      const TB = () => {
        BB({
          translate: (BB, TB) => (0, xB.s)(bB(), BB, TB),
          keyBindingText: BB => {
            const TB = (0, CB.q)(BB, WB.d.get("isTouchScreen"));
            return null !== TB ? (0, xB.v)(bB(), TB.translationKey, TB.params) : (0, CB.k)((0, CB.m)(BB))
          },
          isFriend: qB.h,
          hiddenNames: hB.c.shown,
          loadsFontRest: (0, AB.c)(bB())
        })
      };
      let dB = !1;
      const VB = () => {
          const BB = bB();
          (0, xB.j)(BB).then((() => {
            dB || BB !== bB() || TB()
          }))
        },
        yB = () => GB.e.getSocialState().friends.map((BB => BB.name.toLowerCase())).sort().join(" ");
      let pB = yB();
      TB(), VB();
      const lB = [(0, jB.i)((() => {
        TB(), VB()
      })), (0, YB.i)("customBindingsChanged", TB), (0, YB.i)("appManagerUpdated|isTouchScreen", TB), (0, qB.e)((() => {
        const BB = yB();
        BB !== pB && (pB = BB, TB())
      })), hB.c.subscribe(TB)];
      return () => {
        dB = !0;
        for (const BB of lB) BB()
      }
    }
    var eB = dB(581),
      BT = dB(900),
      TT = dB(1711),
      dT = dB(270),
      VT = dB(3211),
      yT = dB(35348),
      pT = dB(3216),
      lT = dB(37705),
      JT = dB(5959),
      YT = dB(39481),
      gT = dB(586),
      oT = dB(1708),
      kT = dB(3237),
      LT = dB(2751);
    let OT = null;
    var DT = dB(1089),
      uT = dB(3138),
      HT = dB(38098),
      ET = dB(2933),
      vT = dB(57),
      mT = dB(262),
      iT = dB(256),
      NT = dB(39434),
      tT = dB(4177);
    class fT {
      constructor(BB, TB) {
        this.showView = BB, this.holdForAd = TB
      }
      pointerUnlockRequestsChanged() {
        (0, NT.y)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, NT.m)())
        }]
      }
      setGameViewShown(BB) {
        this.showView(BB)
      }
      videoAdHold(BB, TB) {
        this.holdForAd(BB, TB)
      }
    }
    class sT {
      lD(BB) {
        ! function(BB) {
          if (null !== (0, kB.e)().websocketUrl) try {
            (0, mB.N)().leaveGame(BB)
          } finally {
            (0, kB.r)({
              websocketUrl: null
            })
          }
        }(BB)
      }
      isReplay() {
        return !1
      }
    }
    class MT {
      watchFrameStarts(BB) {
        return (0, mB.t)(BB)
      }
      watchFrames(BB) {
        return (0, mB.s)(BB)
      }
      watchTicks(BB) {
        return (0, mB.w)(BB)
      }
    }
    var zT = dB(1185),
      wT = dB(39635);

    function UT(BB) {
      return BB >= 0 ? Math.min(1, BB) : 0
    }

    function FT(BB, TB) {
      const {
        fade: dB
      } = BB;
      return null === dB || TB - dB.at >= dB.ms ? BB.volume : dB.from + (BB.volume - dB.from) * Math.max(0, (TB - dB.at) / dB.ms)
    }

    function KT(BB) {
      const TB = Object.entries(BB),
        dB = new Uint32Array(TB.length);
      let VB = 0;
      for (const [lB, [, JB]] of TB.entries()) dB[lB] = JB.length, VB += JB.length;
      const yB = new Float64Array(3 * VB);
      let pB = 0;
      for (const [, lB] of TB)
        for (const BB of lB) yB.set(BB, pB), pB += 3;
      return {
        blocks: TB.map((BB => {
          let [TB] = BB;
          return TB
        })).join("\0"),
        counts: dB,
        values: yB
      }
    }
    class rT {
      constructor(BB, TB) {
        this.core = BB, this.warn = TB, this.latest = 0
      }
      async feed() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IT;
        const TB = ++this.latest;
        let dB;
        try {
          dB = await BB()
        } catch (VB) {
          return void(this.core.isStopped || TB !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", VB))
        }
        TB === this.latest && (this.core.setBlockColours(dB) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function IT() {
      return KT((await dB.e(187).then((() => dB(33444)))).averageColors)
    }
    var cT = dB(4186),
      ST = dB(4192),
      PT = dB(39376),
      QT = dB(39638),
      RT = dB(39538),
      aT = dB(568),
      ZT = dB(35991),
      XT = dB(560),
      WT = dB(279),
      hT = dB(39514);
    const CT = [3e4, 12e4, 3e5];
    class GT extends Error {}
    const qT = {
      mobTypes: aT.j,
      vehicleTypes: ZT.e,
      mobAiStates: aT.h,
      playerPoses: XT.q
    };
    var xT = dB(39499),
      jT = dB(39645),
      AT = dB(39661),
      bT = dB(39664),
      nT = dB(2951),
      eT = dB(37990),
      Bd = dB(4209),
      Td = dB(2101);
    const dd = Td.A.KeysDisabled | Td.A.LookFrozen | Td.A.ClicksSuppressed,
      Vd = nT.f;
    var yd = (0, bT.d)("resumingConn");
    class pd {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = BB, this.now = TB, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, yd, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new eT.d({
          reconnect: BB => this.reconnect(BB),
          isLive: () => BB.isLive(),
          onReconnected: TB => {
            this.landed = TB, BB.onReconnected(TB), this.landIfResumed()
          },
          onGaveUp: (TB, dB) => {
            this.abortAttempt(), BB.onGaveUp(TB, dB)
          },
          freeze: TB => {
            BB.XM(TB), (0, Bd.f)(dd, TB ? dd : 0, "reconnectFreeze")
          },
          releaseSeat: BB => {
            this.releaseSeat(BB)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, AT.e)(this, yd)[yd]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(BB) {
        let {
          conn: TB,
          graceMs: dB,
          sessionBased: VB,
          replayOffer: yB
        } = BB;
        this.session.onInitialInfo(dB, VB), this.isResuming() && (this.initialInfoConn = TB, this.initialInfoOffer = yB, this.landIfResumed())
      }
      onResumeComplete(BB) {
        0 !== BB && (BB === (0, AT.e)(this, yd)[yd] ? ((0, AT.e)(this, yd)[yd] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = BB))
      }
      onDropped(BB) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, AT.e)(this, yd)[yd] = 0, this.session.onConnectionLost(BB)
      }
      lD() {
        this.session.lD(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, AT.e)(this, yd)[yd] = 0, this.session.end()
      }
      reconnect(BB) {
        const TB = this.attempt;
        if (null !== TB && this.awaitingJoinRoom(TB)) return TB.result;
        this.abortAttempt();
        const dB = new AbortController,
          VB = this.drops,
          yB = {
            attachedAt: null
          },
          pB = this.shell.reconnect(BB, dB.signal, (() => {
            yB.attachedAt = this.now()
          })).then((BB => {
            if (this.clearAttempt(lB), this.drops !== VB) throw new Error("the resumed room dropped before its attempt settled");
            return BB
          }), (BB => {
            throw this.clearAttempt(lB), BB
          })),
          lB = {
            abort: dB,
            socket: yB,
            result: pB
          };
        return this.attempt = lB, pB
      }
      clearAttempt(BB) {
        this.attempt === BB && (this.attempt = null)
      }
      abortAttempt() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const TB = this.attempt;
        this.attempt = null, null === TB || void 0 === TB || TB.abort.abort(BB)
      }
      awaitingJoinRoom(BB) {
        const TB = BB.socket.attachedAt;
        return null !== TB && this.now() - TB < Vd
      }
      releaseSeat(BB) {
        const TB = this.attempt,
          dB = null !== TB && this.awaitingJoinRoom(TB);
        this.abortAttempt(new KB.w), dB || this.shell.releaseSeat(BB)
      }
      landIfResumed() {
        const BB = this.landed;
        if (null !== BB && BB.conn === this.initialInfoConn) {
          const TB = this.initialInfoOffer && this.completedEarlyConn !== BB.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !TB) return void this.session.onResumed();
          (0, AT.e)(this, yd)[yd] = BB.conn, this.session.onResuming()
        }
      }
    }
    var ld = dB(37998),
      Jd = dB(39669),
      Yd = dB(39617),
      gd = dB(39609),
      od = dB(4459),
      kd = dB(8559),
      Ld = dB(2743),
      Od = dB(39448),
      Dd = dB(593),
      ud = dB(3921),
      Hd = dB(33),
      Ed = dB(39676),
      vd = dB(3858),
      md = dB(2109),
      Nd = dB(1507),
      td = dB(1546),
      fd = dB(1173),
      sd = dB(105),
      Md = dB(2418),
      zd = dB(2117),
      wd = dB(4206);
    const Ud = new Set([cT.pb.KeyDown, cT.pb.MouseMove, cT.pb.MouseDown, cT.pb.Wheel, cT.pb.TouchStart, cT.pb.TouchMove]);

    function Fd(BB) {
      return (BB.shiftKey ? cT.Db.Shift : 0) | (BB.ctrlKey ? cT.Db.Ctrl : 0) | (BB.altKey ? cT.Db.Alt : 0) | (BB.metaKey ? cT.Db.Meta : 0) | ("repeat" in BB && BB.repeat ? cT.Db.Repeat : 0) | (BB.isTrusted ? 0 : cT.Db.Untrusted)
    }

    function Kd(BB) {
      return "touchOnly" !== (0, sd.e)() && "function" === typeof BB.requestPointerLock
    }

    function rd(BB) {
      return 0 === BB.button ? BB.altKey ? wd.n["Alt+Left Click"] : wd.n.Mouse1 : 1 === BB.button ? wd.n.Mouse2 : wd.n.Mouse3
    }
    const Id = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      cd = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      Sd = 32768,
      Pd = 1;

    function Qd(BB) {
      return Math.min(Math.max(Math.round(BB), 0), 65535)
    }

    function Rd(BB, TB, dB) {
      const VB = [],
        yB = (BB, TB, dB, yB) => {
          const pB = BB => {
            (0, td.o)(BB) || dB(BB)
          };
          BB.addEventListener(TB, pB, yB), VB.push((() => {
            BB.removeEventListener(TB, pB, yB)
          }))
        },
        pB = {
          capture: !0,
          passive: !0
        },
        lB = (BB, dB, VB, yB, pB) => (!(0, zd.b)() || !Ud.has(BB)) && (TB(BB, dB, VB, yB, pB), !0),
        JB = () => document.pointerLockElement === BB,
        YB = (0, Md.e)(),
        gB = BB => {
          BB.ctrlKey && dB.ctrlCombosAreGames() && !(0, Bd.d)(BB.target) && BB.preventDefault()
        },
        oB = (BB, VB, yB) => {
          dB.inspect(BB, VB, !1), TB(cT.pb.KeyUp, VB, 0, 0, (0, md.p)(yB, BB.timeStamp)), dB.keyReleased(VB)
        },
        kB = new Map,
        LB = (BB, TB, dB) => BB[dB] || ("AltRight" === TB || "ControlLeft" === TB) && BB.getModifierState("AltGraph"),
        OB = new Map,
        DB = () => {
          kB.clear(), OB.clear()
        },
        uB = BB => {
          if (document.hasFocus())
            for (const [TB, dB] of OB) OB.delete(TB), LB(BB, TB, dB) || (kB.delete(TB), oB(BB, wd.n[TB], Fd(BB)))
        };
      BB.tabIndex = -1;
      let HB = 0,
        EB = 0;
      const vB = () => {
        const TB = BB.getBoundingClientRect();
        HB = TB.left, EB = TB.top
      };
      let mB = "mouse";
      const iB = () => !JB() && ("mouse" === mB || !dB.touchUiShown()),
        NB = (BB, TB, dB) => {
          const VB = (Qd(BB.clientX - HB) | Qd(BB.clientY - EB) << 16) >>> 0;
          lB(cT.pb.MouseMove, cT.Eb.Point, TB, dB, VB)
        };
      let tB = !1,
        fB = 0;
      const sB = () => {
        tB && (tB = !1, dB.viewShown() && (0, NT.Q)())
      };
      VB.push((() => {
        clearTimeout(fB)
      })), yB(window, "keydown", (BB => {
        "Escape" === BB.key ? (0, NT.G)(!0) : BB.repeat || (0, Bd.d)(BB.target) || (tB = !0, clearTimeout(fB), fB = window.setTimeout(sB, 0))
      }), pB), yB(window, "keydown", (BB => {
        sB(), gB(BB), uB(BB);
        const TB = wd.n[BB.code];
        if ("number" !== typeof TB || !dB.viewShown()) return;
        const VB = (0, Bd.d)(BB.target);
        VB || !dB.prevents(TB) && !Id.has(BB.code) || BB.preventDefault(), BB.repeat || dB.inspect(BB, TB, !0), lB(cT.pb.KeyDown, TB, 0, 0, (0, md.p)(Fd(BB), BB.timeStamp)) && kB.set(BB.code, TB), VB || dB.keyPressed(TB)
      }), {
        capture: !1,
        passive: !1
      }), yB(window, "keyup", (BB => {
        "Escape" === BB.key && (0, NT.G)(!1), gB(BB), kB.delete(BB.code), OB.delete(BB.code), uB(BB);
        const TB = wd.n[BB.code];
        "number" === typeof TB && oB(BB, TB, Fd(BB))
      }), {
        capture: !0,
        passive: !1
      }), yB(window, "mousemove", (BB => {
        "mouse" === mB && iB() ? NB(BB, BB.movementX, BB.movementY) : JB() ? lB(cT.pb.MouseMove, cT.Eb.Stamped, BB.movementX, BB.movementY, (0, md.p)(0, BB.timeStamp)) : lB(cT.pb.MouseMove, 0, BB.movementX, BB.movementY, 0)
      }), pB);
      let MB = 0,
        zB = 0;
      const wB = [];
      let UB = !1,
        FB = !1;
      yB(BB, "mousedown", (BB => {
        if ((0, zd.b)()) return;
        uB(BB);
        const VB = 1 << BB.button;
        if (!JB() && (0, NT.N)() && (0, NT.e)() && (FB = !0, !UB)) return void(MB |= VB);
        MB &= ~VB;
        const yB = BB.button <= 2 ? rd(BB) : void 0;
        void 0 !== yB && (wB[BB.button] = yB, dB.inspect(BB, yB, !0)), iB() && NB(BB, 0, 0), TB(cT.pb.MouseDown, BB.button, BB.clientX, BB.clientY, (0, md.p)(Fd(BB), BB.timeStamp)), zB |= VB, void 0 !== yB && dB.keyPressed(yB)
      }), pB), yB(window, "mouseup", (BB => {
        var VB;
        uB(BB);
        const yB = 1 << BB.button,
          pB = 0 !== (MB & ~zB & yB);
        if (MB &= ~yB, zB &= ~yB, pB) return;
        const lB = BB.button <= 2 ? null !== (VB = wB[BB.button]) && void 0 !== VB ? VB : rd(BB) : void 0;
        void 0 !== lB && dB.inspect(BB, lB, !1), TB(cT.pb.MouseUp, BB.button, BB.clientX, BB.clientY, (0, md.p)(Fd(BB), BB.timeStamp)), void 0 !== lB && dB.keyReleased(lB)
      }), pB), yB(BB, "contextmenu", (BB => {
        BB.preventDefault()
      }), {
        passive: !1
      });
      const KB = BB => {
        (JB() || (0, NT.l)() && (0, fd.r)()) && (BB.ctrlKey || YB && !document.fullscreenElement) && BB.preventDefault()
      };
      yB(BB, "wheel", (BB => {
        KB(BB), uB(BB), lB(cT.pb.Wheel, BB.deltaMode, BB.deltaX, BB.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const rB = {
          capture: !0,
          passive: !1
        },
        IB = BB => {
          BB ? window.addEventListener("wheel", KB, rB) : window.removeEventListener("wheel", KB, rB)
        };
      IB((0, NT.l)()), VB.push((0, NT.r)(IB)), VB.push((() => {
        IB(!1)
      }));
      const cB = new Map,
        SB = new Set,
        PB = BB => {
          const TB = "stylus" === BB.touchType;
          for (const dB of cB.values())
            if (!dB.touched && (TB || Math.abs(BB.clientX - dB.x) <= Pd && Math.abs(BB.clientY - dB.y) <= Pd)) return dB.touched = !0, !0;
          return !1
        },
        QB = BB => 32767 & BB,
        RB = new Set,
        aB = BB => dB => {
          const VB = (0, md.p)(Fd(dB), dB.timeStamp);
          BB !== cT.pb.TouchStart && BB !== cT.pb.TouchMove || ((BB, dB) => {
            const VB = BB.touches;
            if (VB)
              for (const yB of RB) {
                let BB = !1;
                for (let TB = 0; TB < VB.length && !BB; TB++) BB = QB(VB[TB].identifier) === yB;
                BB || (RB.delete(yB), TB(cT.pb.TouchCancel, yB, 0, 0, dB))
              }
          })(dB, VB);
          const yB = dB.changedTouches;
          for (let TB = 0; TB < yB.length; TB++) {
            const dB = yB[TB];
            if (BB === cT.pb.TouchStart && PB(dB) && SB.add(dB.identifier), SB.has(dB.identifier)) {
              BB !== cT.pb.TouchEnd && BB !== cT.pb.TouchCancel || SB.delete(dB.identifier);
              continue
            }
            const pB = QB(dB.identifier),
              JB = lB(BB, pB, dB.clientX, dB.clientY, VB);
            BB === cT.pb.TouchStart ? JB && RB.add(pB) : BB !== cT.pb.TouchMove && RB.delete(pB)
          }
        },
        ZB = aB(cT.pb.TouchStart);
      yB(BB, "touchstart", (BB => {
        BB.preventDefault(), (0, zd.b)() || (dB.touchStarting(), ZB(BB))
      }), {
        passive: !1
      }), yB(BB, "touchmove", aB(cT.pb.TouchMove), pB), yB(BB, "touchend", aB(cT.pb.TouchEnd), pB), yB(BB, "touchcancel", aB(cT.pb.TouchCancel), pB);
      const XB = BB => Sd | 32767 & BB,
        WB = (BB, TB) => {
          lB(BB, XB(TB.pointerId), TB.clientX, TB.clientY, (0, md.p)(Fd(TB), TB.timeStamp))
        };
      yB(window, "pointerdown", (TB => {
        mB = TB.pointerType, "mouse" === TB.pointerType && TB.target !== BB && dB.viewShown() && (0, NT.U)()
      }), pB), yB(BB, "pointerdown", (BB => {
        "pen" === BB.pointerType && 0 === BB.button && (0, NT.l)() && (0, fd.r)() && (BB.preventDefault(), (0, zd.b)() || (cB.set(BB.pointerId, {
          x: BB.clientX,
          y: BB.clientY,
          touched: !1
        }), dB.touchStarting(), WB(cT.pb.TouchStart, BB)))
      }), {
        passive: !1
      }), yB(window, "pointermove", (BB => {
        mB = BB.pointerType, cB.has(BB.pointerId) && WB(cT.pb.TouchMove, BB), "mouse" !== BB.pointerType && iB() && NB(BB, 0, 0)
      }), pB);
      const hB = BB => TB => {
        cB.delete(TB.pointerId) && WB(BB, TB)
      };
      yB(window, "pointerup", hB(cT.pb.TouchEnd), pB), yB(window, "pointercancel", hB(cT.pb.TouchCancel), pB);
      let CB = 0;
      const GB = () => {
          CB = 0, vB(), dB.resized()
        },
        qB = () => {
          const BB = dB.sizeCanvas();
          null !== BB && TB(cT.pb.Resize, 0, BB.cssWidth, BB.cssHeight, (0, md.m)(BB.renderScale)), vB(), dB.resized(), 0 === CB && (CB = requestAnimationFrame(GB))
        };
      yB(window, "resize", qB, pB), VB.push(dB.watchRenderScale(qB)), VB.push((() => {
        cancelAnimationFrame(CB)
      })), yB(window, "focus", (BB => {
        BB.isTrusted && (TB(cT.pb.Focus, 0, 0, 0, 0), dB.viewShown() && (0, NT.U)())
      }), {
        passive: !0
      });
      const xB = () => {
          (0, NT.G)(!1), MB = 0
        },
        jB = () => {
          RB.clear(), cB.clear(), SB.clear()
        };
      let AB = 0,
        bB = 0;
      yB(window, "blur", (VB => {
        xB(), (0, NT.k)();
        for (const BB of kB.keys()) {
          const TB = cd.get(BB);
          void 0 !== TB && OB.set(BB, TB)
        }
        VB.isTrusted && ((BB => {
          for (const [dB, VB] of cB) TB(cT.pb.TouchCancel, XB(dB), VB.x, VB.y, (0, md.p)(0, BB));
          cB.clear()
        })(VB.timeStamp), TB(cT.pb.Blur, cT.l.KeepTouches, 0, 0, 0)), YB && VB.isTrusted && (clearTimeout(bB), bB = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const BB of kB.values()) oB(VB, BB, 0);
            DB()
          }
        }), 0)), clearTimeout(AB), AB = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, fd.r)() && dB.viewShown() && BB.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), VB.push((() => {
        clearTimeout(AB), clearTimeout(bB)
      })), yB(window, "mousedown", (TB => {
        YB && TB.isTrusted && !document.hasFocus() && (0, fd.r)() && dB.viewShown() && (window.focus(), BB.focus({
          preventScroll: !0
        }))
      }), pB), yB(document, "visibilitychange", (() => {
        document.hidden ? (TB(cT.pb.Blur, 0, 0, 0, 0), jB()) : document.hasFocus() && TB(cT.pb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), VB.push((0, zd.g)((() => {
        xB(), TB(cT.pb.Blur, cT.l.Release, 0, 0, 0), dB.keysReleased(), DB(), zB = 0, jB(), TB(cT.pb.Joystick, 0, 0, 0, 0), document.hasFocus() && TB(cT.pb.Focus, 0, 0, 0, 0)
      })));
      const nB = !dB.canLock(),
        eB = () => nB && !(0, NT.l)() ? cT.cc.Lockless : cT.cc.Released,
        BT = () => {
          JB() && (UB = !1, FB = !1), TB(cT.pb.PointerLock, JB() ? cT.cc.Locked : eB(), 0, 0, 0), (0, NT.M)(JB())
        };
      return yB(document, "pointerlockchange", BT, {
        passive: !0
      }), yB(document, "pointerlockerror", (() => {
        UB ||= FB, FB = !1, (0, NT.n)()
      }), {
        passive: !0
      }), nB && VB.push((0, NT.r)((() => {
        TB(cT.pb.PointerLock, eB(), 0, 0, 0)
      }))), qB(), TB(document.hasFocus() ? cT.pb.Focus : cT.pb.Blur, 0, 0, 0, 0), BT(), () => {
        for (const BB of VB.splice(0)) BB()
      }
    }
    var ad = dB(39740),
      Zd = dB(8556),
      Xd = dB(8552),
      Wd = dB(1747);
    const hd = new Map(wd.e.map(((BB, TB) => [BB, TB]))),
      Cd = ["jump", "primary-fire", "alt-fire"],
      Gd = ["primary-fire", "alt-fire"];

    function qd(BB) {
      return `${Wd.c}${BB}`
    }
    const xd = ["forward", "backward", "left", "right", "sprint", "jump"];

    function jd(BB) {
      const TB = [];
      for (const dB of BB) {
        const BB = "string" === typeof dB ? wd.n[dB] : void 0;
        "number" === typeof BB && TB.push(BB)
      }
      return TB
    }
    class Ad {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [BB, TB] of Object.entries(wd.i)) this.keys.set(BB, TB);
        this.updateKeySets()
      }
      prevents(BB) {
        return this.preventKeys.has(BB)
      }
      moves(BB) {
        return this.movementKeys.has(BB)
      }
      checks(BB, TB) {
        return (TB ? this.checkedDown : this.checkedUp).has(BB)
      }
      sync(BB, TB) {
        for (const [dB, VB] of this.keys) {
          const yB = BB(qd(dB)),
            pB = Array.isArray(yB) ? jd(yB) : wd.i[dB];
          (pB.length !== VB.length || pB.some(((BB, TB) => BB !== VB[TB]))) && this.bind(dB, pB, TB)
        }
      }
      bind(BB, TB, dB) {
        const VB = hd.get(BB);
        if (void 0 !== VB) {
          dB(cT.pb.Binding, 0, 0, 0, VB | cT.j.Clear << 8);
          for (const pB of [...TB, ...null !== (yB = wd.j[BB]) && void 0 !== yB ? yB : []]) {
            var yB;
            dB(cT.pb.Binding, pB, 0, 0, VB | cT.j.Add << 8)
          }
          this.keys.set(BB, TB), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const VB of wd.q)
          for (const TB of null !== (BB = this.keys.get(wd.e[VB])) && void 0 !== BB ? BB : []) {
            var BB;
            this.preventKeys.add(TB)
          }
        this.movementKeys.clear();
        for (const VB of xd)
          for (const BB of null !== (TB = this.keys.get(VB)) && void 0 !== TB ? TB : []) {
            var TB;
            this.movementKeys.add(BB)
          }
        for (const [VB, yB] of [
            [this.checkedDown, Cd],
            [this.checkedUp, Gd]
          ]) {
          VB.clear();
          for (const BB of yB)
            for (const TB of null !== (dB = this.keys.get(BB)) && void 0 !== dB ? dB : []) {
              var dB;
              VB.add(TB)
            }
        }
      }
    }
    var bd = dB(4199),
      nd = dB(35577);
    const ed = "[bloxd-wasm-client]";

    function BV() {
      return "inGame" === WB.d.get("gameState") && !(0, Nd.o)()
    }
    let TV = null;

    function dV(BB, TB) {
      TV && TB.writePendingInput() && TV.push(function(BB, TB) {
        let dB = "";
        for (const VB of TB) dB += VB.toString(16).padStart(2, "0");
        return dB ? `${BB} ${dB}` : String(BB)
      }(BB, TB.rings.input.written()))
    }
    const VV = [];

    function yV(BB, TB, dB, VB) {
      BB === cT.K.InputAction && VB === cT.hb && VV.push(TB.getUint32(dB, !0))
    }
    var pV = dB(39743),
      lV = dB(1085),
      JV = dB(39731);
    const YV = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: lV.wasmScreens
    };

    function gV(BB) {
      var TB, dB;
      let VB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [yB, pB] = BB.split(":");
      return (null !== (TB = null === (dB = YV[yB]) || void 0 === dB ? void 0 : dB[pB]) && void 0 !== TB ? TB : BB).replace(/\{\{(\w+)\}\}/g, ((BB, TB) => {
        var dB;
        return null !== (dB = VB[TB]) && void 0 !== dB ? dB : BB
      }))
    }

    function oV(BB, TB) {
      (0, vd.b)();
      const dB = document.createElement("div");
      dB.setAttribute("role", "alertdialog"), dB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const VB = document.createElement("div");
      VB.style.cssText = "max-width:28rem;padding:1.5rem;border-radius:8px;background:#1c2333;text-align:center";
      const yB = document.createElement("h2");
      yB.textContent = gV(BB.title);
      const pB = document.createElement("p");
      if (pB.textContent = gV(BB.help, BB.helpValues), pB.style.whiteSpace = "pre-line", VB.append(yB, pB), BB.discordLink) {
        const BB = document.createElement("a");
        BB.href = JV.d, BB.target = "_blank", BB.rel = "noreferrer", BB.style.color = "#8ab4ff", BB.textContent = gV("wasmScreens:reportOnDiscord"), VB.append(BB)
      }
      const lB = document.createElement("div");
      return lB.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", VB.append(lB), dB.append(VB), document.body.append(dB), new Promise((VB => {
        const yB = BB => {
            null === TB || void 0 === TB || TB.removeEventListener("abort", pB), dB.remove(), VB(BB)
          },
          pB = () => {
            yB(!1)
          };
        null === TB || void 0 === TB || TB.addEventListener("abort", pB, {
          once: !0
        });
        const JB = (BB, TB) => {
          const dB = document.createElement("button");
          dB.textContent = gV(BB), dB.style.cssText = "padding:0.5rem 1.25rem;font:inherit", dB.addEventListener("click", (() => {
            yB(TB)
          })), lB.append(dB)
        };
        null !== BB.cancel && JB(BB.cancel, !1), JB(BB.confirm, !0)
      }))
    }
    var kV = dB(39524);
    const LV = 6e4,
      OV = 3e5;
    var DV = dB(3132);
    var uV = dB(39440),
      HV = dB(597),
      EV = dB(5);

    function vV(BB, TB) {
      const dB = EV.$.encode(TB);
      ! function(BB, TB) {
        let dB = TB >= 0 ? 2 * TB : 2 * -TB - 1;
        for (; dB >= 128;) BB.push(dB % 128 | 128), dB = Math.floor(dB / 128);
        BB.push(dB)
      }(BB, dB.length);
      for (const VB of dB) BB.push(VB)
    }
    let mV, iV, NV;
    (() => {
      const BB = ["length", 0, "d", 137, "b", 1, "e", 3, "a", "o", !1, "resolv", "then", "postCo", "okies", 2, 13, 148, 112, 8, "../red", "acted.", "js", void 0, 5, 169, "g", 72, 176, 225, 244, 199];

      function TB() {}
      "aD2bso" in TB && function(...TB) {
        oB(TB[BB[0]] = BB[1], TB[BB[8]] = function(...TB) {
          for (oB(TB[BB[0]] = BB[5], TB[BB[3]] = TB[BB[1]].length, TB[BB[4]] = [], TB[BB[7]] = BB[1]), TB[BB[2]] = BB[1]; TB[BB[2]] < TB[BB[3]]; TB[BB[2]]++) TB[BB[4]].push(TB[BB[2]] !== BB[1] && TB[BB[1]][TB[BB[2]]] > TB[BB[1]][TB[BB[2]] - BB[5]] ? TB[BB[4]][TB[BB[2]] - BB[5]] + BB[5] : BB[5]);
          for (TB[BB[6]] = TB[BB[3]] - BB[5]; TB[BB[6]] >= BB[1]; TB[BB[6]]--) TB[BB[6]] !== TB[BB[3]] - BB[5] && TB[BB[1]][TB[BB[6]]] > TB[BB[1]][TB[BB[6]] + BB[5]] && (TB[BB[4]][TB[BB[6]]] = Math.max(TB[BB[4]][TB[BB[6]]], TB[BB[4]][TB[BB[6]] + BB[5]] + BB[5])), TB[BB[7]] += TB[BB[4]][TB[BB[6]]];
          return TB[BB[7]]
        }, console.log(TB[BB[8]]))
      }();
      const VB = (0, EV[BB[9]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        yB = (0, EV[BB[9]])("QkFCWUxPTg=="),
        pB = (0, EV[BB[9]])("QW5kZXNpdGU="),
        lB = (0, EV[BB[9]])("U21vb3RoIEdyYW5pdGU="),
        JB = (0, EV[BB[9]])("RGlvcml0ZQ=="),
        YB = async (VB, yB, pB, lB) => {
          "K2ibAdk" in TB && function() {
            function TB(...TB) {
              TB[BB[0]] = BB[5];
              const dB = {};
              for (let VB of TB[BB[1]].replace(/[^w]/g, "").toLowerCase()) dB[VB] = dB[VB] + BB[5] || BB[5];
              return dB
            }

            function dB(...TB) {
              TB[BB[0]] = BB[15];
              const dB = buildCharMap(TB[BB[1]]),
                VB = buildCharMap(TB[BB[5]]);
              for (let yB in dB)
                if (dB[yB] !== VB[yB]) return BB[10];
              return Object.keys(dB).length === Object.keys(VB).length || BB[10]
            }

            function VB(...TB) {
              TB[BB[0]] = BB[5];
              return yB(TB[BB[1]]) !== 1 / 0
            }

            function yB(...TB) {
              if (TB[BB[0]] = BB[5], !TB[BB[1]]) return -BB[5];
              const dB = yB(TB[BB[1]].left),
                VB = yB(TB[BB[1]].right),
                pB = Math.abs(dB - VB);
              if (dB === 1 / 0 || VB === 1 / 0 || pB > BB[5]) return 1 / 0;
              return Math.max(dB, VB) + BB[5]
            }
            window.__GLOBAL__HELPERS__ = {
              buildCharacterMap: TB,
              isAnagrams: dB,
              isBalanced: VB,
              getHeightBalanced: yB
            }
          }();
          const [{
            clientSideServerUrls: JB
          }, {
            postJsonWithMetricsCookiesAndJsonResponse: YB
          }] = await Promise.all([Promise[BB[11] + BB[6]]()[BB[12]]((() => dB(1089))), Promise[BB[11] + BB[6]]()[BB[12]](((...VB) => (VB[BB[0]] = BB[1], "wpVAIL" in TB && function(...TB) {
            TB[BB[0]] = BB[1];
            const dB = require("path"),
              {
                version: VB
              } = require("../../package"),
              {
                version: yB
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: pB
              } = require("@redacted/components/package"),
              {
                sdkVersion: lB
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), dB.resolve(__dirname, BB[20] + BB[21] + BB[22])
          }(), dB(1020))))]), gB = JB.getHttpUrlFromWebSocketUrl(VB.endpoint), oB = null === VB[BB[13] + BB[14]] ? BB[23] : await VB[BB[13] + BB[14]]();
          await YB("" + gB + yB, pB, {
            retries: lB
          }, oB)
        };
      mV = async (dB, VB) => {
        const pB = function(BB, TB, dB, VB) {
          const yB = [];
          vV(yB, BB), vV(yB, TB), vV(yB, dB);
          for (const pB of VB) yB.push(pB);
          return yB
        }(dB.game, dB.lobby, (0, HV[BB[6]])(), VB);
        try {
          await YB(dB, "/persisted/keep-alive", {
            type: "iD",
            data: pB
          }, BB[7])
        } catch (yB) {
          function JB(...TB) {
            oB(TB[BB[0]] = BB[1], TB[BB[8]] = function(...TB) {
              for (oB(TB[BB[0]] = BB[5], TB[BB[5]] = BB[1], TB[BB[15]] = {}, TB[BB[7]] = BB[1], TB[-BB[18]] = BB[1], TB[BB[6]] = BB[1], TB[-BB[17]] = TB[BB[1]].length), TB[BB[16]] = BB[1]; TB[BB[16]] < TB[-BB[17]]; TB[BB[16]]++) {
                for (oB(TB[BB[15]] = {}, TB[BB[7]] = BB[1], TB[-BB[18]] = BB[5]), TB[BB[19]] = TB[BB[16]] + BB[5]; TB[BB[19]] < TB[-BB[17]]; TB[BB[19]]++) TB[BB[1]][TB[BB[16]]].x !== TB[BB[1]][TB[BB[19]]].x || TB[BB[1]][TB[BB[16]]].y !== TB[BB[1]][TB[BB[19]]].y ? (TB[BB[1]][TB[BB[16]]].y === TB[BB[1]][TB[BB[19]]].y ? TB[BB[6]] = Number.MAX_SAFE_INTEGER : TB[BB[6]] = (TB[BB[1]][TB[BB[16]]].x - TB[BB[1]][TB[BB[19]]].x) / (TB[BB[1]][TB[BB[16]]].y - TB[BB[1]][TB[BB[19]]].y), TB[BB[15]][TB[BB[6]]] || (TB[BB[15]][TB[BB[6]]] = BB[1]), oB(TB[BB[15]][TB[BB[6]]]++, TB[BB[7]] = Math.max(TB[BB[7]], TB[BB[15]][TB[BB[6]]]))) : TB[-BB[18]]++;
                oB(TB[BB[7]] += TB[-BB[18]], TB[BB[5]] = Math.max(TB[BB[5]], TB[BB[7]]))
              }
              return TB[BB[5]]
            }, console.log(TB[BB[8]]))
          }
          "oVU_FZ4" in TB && JB(), console.warn(yB)
        }
      };
      const gB = (...TB) => (TB[BB[0]] = BB[15], Object.getOwnPropertyDescriptor(TB[BB[1]], TB[BB[5]]));

      function oB() {
        oB = function() {}
      }
      iV = (...dB) => {
        if (dB[BB[0]] = BB[1], "M913Q3v" in TB && function(...TB) {
            TB[BB[0]] = BB[1];
            const dB = require("path"),
              {
                version: VB
              } = require("../../package"),
              {
                version: yB
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: pB
              } = require("@redacted/components/package"),
              {
                sdkVersion: lB
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), dB.resolve(__dirname, BB[20] + BB[21] + BB[22])
          }(), (0, EV.I)(), gB(navigator, VB) !== BB[23]) return pB;
        if (gB(window, yB) === BB[23]) {
          function YB(...TB) {
            TB[BB[0]] = BB[1]
          }
          return "WGKd3h" in TB && YB(), lB
        }
        return JB
      }, NV = async dB => {
        "jtbXsX" in TB && function(...TB) {
          oB(TB[BB[0]] = BB[1], TB[-BB[31]] = function(...TB) {
            for (oB(TB[BB[0]] = BB[5], TB[BB[8]] = BB[1], TB[BB[4]] = {}, TB[BB[28]] = BB[1], TB[BB[2]] = BB[1], TB[BB[30]] = BB[1], TB[BB[27]] = TB[BB[1]].length), TB[BB[26]] = BB[1]; TB[BB[26]] < TB[BB[27]]; TB[BB[26]]++) {
              for (oB(TB[BB[4]] = {}, TB[BB[28]] = BB[1], TB[BB[2]] = BB[5]), TB[BB[29]] = TB[BB[26]] + BB[5]; TB[BB[29]] < TB[BB[27]]; TB[BB[29]]++) TB[BB[1]][TB[BB[26]]].x !== TB[BB[1]][TB[BB[29]]].x || TB[BB[1]][TB[BB[26]]].y !== TB[BB[1]][TB[BB[29]]].y ? (TB[BB[1]][TB[BB[26]]].y === TB[BB[1]][TB[BB[29]]].y ? TB[BB[30]] = Number.MAX_SAFE_INTEGER : TB[BB[30]] = (TB[BB[1]][TB[BB[26]]].x - TB[BB[1]][TB[BB[29]]].x) / (TB[BB[1]][TB[BB[26]]].y - TB[BB[1]][TB[BB[29]]].y), TB[BB[4]][TB[BB[30]]] || (TB[BB[4]][TB[BB[30]]] = BB[1]), oB(TB[BB[4]][TB[BB[30]]]++, TB[BB[28]] = Math.max(TB[BB[28]], TB[BB[4]][TB[BB[30]]]))) : TB[BB[2]]++;
              oB(TB[BB[28]] += TB[BB[2]], TB[BB[8]] = Math.max(TB[BB[8]], TB[BB[28]]))
            }
            return TB[BB[8]]
          }, console.log(TB[-BB[31]]))
        }();
        try {
          const TB = iV();
          await YB(dB, "/images/" + TB + ".png", {
            block: TB
          }, BB[1])
        } catch {}
      }
    })();
    var tV = dB(39621),
      fV = dB(4057);
    const sV = 1e3 * tV.e.seatReservationSeconds - 3e3;
    class MV {
      constructor(BB) {
        var TB, dB, VB, yB;
        let pB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (TB = pB.wallNow) && void 0 !== TB ? TB : Date.now, this.monoNow = null !== (dB = pB.monoNow) && void 0 !== dB ? dB : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (VB = pB.sleep) && void 0 !== VB ? VB : fV.b, this.follow = new uT.b(pB.signal);
        const lB = null !== (yB = pB.fetch) && void 0 !== yB ? yB : fetch;
        this.seat = (0, Jd.f)(BB.endpoint, BB.roomName, BB.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (BB, TB) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), lB(BB, TB)),
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
      async take(BB) {
        if ("rematched" === this.use) return;
        (0, uT.k)(BB);
        const TB = "pending" !== this.request,
          dB = () => {
            this.abort((0, uT.c)(BB))
          };
        let VB;
        null === BB || void 0 === BB || BB.addEventListener("abort", dB, {
          once: !0
        });
        try {
          VB = await this.seat
        } catch (yB) {
          if ((0, uT.k)(BB), !TB) throw yB;
          return void(this.use = "lost")
        } finally {
          null === BB || void 0 === BB || BB.removeEventListener("abort", dB)
        }
        if ((0, uT.k)(BB), !(this.ageMs() > sV)) return this.use = "taken", VB;
        this.use = "renewed"
      }
      async reserveInstead(BB, TB) {
        try {
          return await BB()
        } catch (dB) {
          const yB = this.holdLeftMs();
          if (!(dB instanceof KB.p) || dB.code !== VB.b.duplicateLobbyNameError.code || 0 === yB) throw dB;
          return await this.sleep(yB + 500, TB), BB()
        }
      }
      release() {
        const {
          request: BB,
          use: TB
        } = this, dB = this.holdsNoSeat();
        return this.abort(), "taken" === TB || dB ? null : {
          unused: "unused" === TB ? "abandoned" : TB,
          answered: "answered" === BB,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var BB;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const TB = null !== (BB = this.answeredAt) && void 0 !== BB ? BB : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          dB = Math.max(this.wallNow() - TB.wall, this.monoNow() - TB.mono);
        return Math.max(0, 1e3 * tV.e.seatReservationSeconds - dB)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(BB) {
        (0, uT.e)(this.follow.controller, BB)
      }
    }
    var zV = dB(1652),
      wV = dB(39746);
    const UV = new Uint8Array(0);
    class FV {
      constructor(BB) {
        if (this.options = BB, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.refusals = new Map, this.heapRefusals = 0, null === BB.module) return this.stopped = !0, void BB.fail("no wasm module for the meshing workers");
        BB.loadWorkers().then((BB => {
          let {
            create: TB,
            count: dB
          } = BB;
          if (!this.stopped) {
            this.createWorker = TB;
            for (let BB = 0; BB < dB; BB++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let BB = 0; BB < dB; BB++) this.start(BB)
          }
        }), (BB => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", BB))
        }))
      }
      take(BB, TB, dB) {
        const VB = this.slots[TB];
        if (BB === cT.Md.Retire) {
          var yB, pB, lB;
          if (VB && !VB.gone) null === (yB = VB.worker) || void 0 === yB || yB.terminate(), VB.worker = null, VB.started = !1, null === (pB = (lB = this.options).onMemoryGone) || void 0 === pB || pB.call(lB, TB), this.giveUp(TB, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const JB = null === VB || void 0 === VB ? void 0 : VB.worker;
        if (!JB || !VB.started) return;
        const YB = dB.byteLength;
        let gB = null;
        BB === cT.Md.Mesh && VB.heapRetries > 0 && (VB.heapRetries--, gB = this.pooled(YB, !0)), gB ??= this.buffer(YB), new Uint8Array(gB, 0, YB).set(dB), JB.postMessage({
          type: "job",
          kind: BB,
          bytes: gB,
          len: YB
        }, [gB])
      }
      takeFailedMeshJobs() {
        const BB = this.failedJobs;
        return this.failedJobs = 0, BB
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const TB of this.slots) {
          var BB;
          KV(TB), null === (BB = TB.worker) || void 0 === BB || BB.terminate(), TB.worker = null, TB.started = !1
        }
      }
      start(BB) {
        const TB = this.slots[BB],
          {
            module: dB
          } = this.options,
          VB = this.createWorker;
        if (this.stopped || TB.gone || null === dB || null === VB) return;
        if (TB.startsWithoutResult >= 3) return void this.giveUp(BB, "failed to start 3 times in a row", "no meshing worker would start");
        let yB;
        TB.startsWithoutResult++;
        try {
          yB = VB()
        } catch (pB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} did not start`, pB), void this.start(BB)
        }
        TB.worker = yB, yB.onmessage = dB => {
          let {
            data: VB
          } = dB;
          TB.worker === yB && this.onReply(BB, VB)
        }, yB.onmessageerror = () => {
          TB.worker === yB && this.lose(BB, "a reply could not be read")
        }, yB.onerror = dB => {
          dB.preventDefault(), TB.worker === yB && this.lose(BB, dB.message || "its script failed")
        };
        try {
          yB.postMessage({
            type: "start",
            module: dB
          })
        } catch (pB) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${BB} could not be sent the module`, pB), yB.terminate(), TB.worker = null, void this.start(BB)
        }
        TB.watch = new wV.g(wV.d, (TB => {
          this.lose(BB, (0, wV.j)(TB), (() => {
            this.options.onStartTimeout(TB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, TB) {
        const dB = this.slots[BB];
        switch (TB.type) {
          case "started":
            KV(dB), dB.started = !0, this.options.write(0, cT.Jd.WorkerStarted, 0, BB, 0, UV);
            break;
          case "lost":
            this.lose(BB, TB.reason);
            break;
          case "memory":
            var VB, yB;
            null === (VB = (yB = this.options).onMemoryStats) || void 0 === VB || VB.call(yB, BB, TB.stats);
            break;
          case "result": {
            const VB = TB.status === cT.tb.Trapped;
            if (0 !== TB.jobId) {
              if (VB) this.countFailedJob(TB.outOfMemory);
              else if (dB.startsWithoutResult = 0, dB.trapsWithoutResult = 0, TB.status === cT.tb.Refused) {
                const dB = function(BB) {
                  if (BB.byteLength < 32) return "(no reason)";
                  const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength),
                    dB = Math.min(TB.getUint32(28, !0), BB.byteLength - 28 - 4);
                  return (new TextDecoder).decode(BB.subarray(32, 32 + dB)).slice(0, 200)
                }(new Uint8Array(TB.bytes, 0, TB.len));
                this.countFailedJob(QT.e.test(dB)), this.logRefusal(BB, dB)
              }
              TB.status === cT.tb.HeapRefused && (dB.heapRetries = Math.min(dB.heapRetries + 1, 4), this.logHeapRefusal(BB))
            }
            if (this.options.write(TB.jobId, cT.Jd.JobResult, TB.status, BB, TB.workerUs, new Uint8Array(TB.bytes, 0, TB.len)), this.recycle(TB.bytes), TB.spare && this.recycle(TB.spare), !VB) break;
            if (dB.startsWithoutResult = 0, 0 === TB.jobId) {
              this.lose(BB, `the tables trapped its wasm: ${TB.trap}`);
              break
            }
            dB.trapsWithoutResult++;
            const yB = dB.trapsWithoutResult > 6;
            dB.gone ||= yB, this.lose(BB, `a job trapped its wasm: ${TB.trap}`), yB && this.giveUp(BB, `trapped ${dB.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(BB) {
        if (BB) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        }
        this.failedJobs++
      }
      logRefusal(BB, TB) {
        var dB;
        !this.refusals.has(TB) && this.refusals.size >= 16 && (TB = "(other reasons)");
        const VB = (null !== (dB = this.refusals.get(TB)) && void 0 !== dB ? dB : 0) + 1;
        this.refusals.set(TB, VB), (0, zV.u)(VB) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} refused a chunk (${VB} so far for this reason): ${TB}`)
      }
      logHeapRefusal(BB) {
        this.heapRefusals++, (0, zV.u)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${BB} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(BB, TB, dB) {
        const VB = this.slots[BB];
        if (VB.gone = !0, VB.goneFor = {
            why: TB,
            failure: dB
          }, console.warn(`[bloxd-wasm-client] meshing worker ${BB} ${TB}: giving up on it`), this.slots.every((BB => BB.gone))) {
          this.stop();
          const BB = new Set(this.slots.map((BB => {
              var TB;
              return null === (TB = BB.goneFor) || void 0 === TB ? void 0 : TB.failure
            }))),
            TB = this.slots.map(((BB, TB) => {
              var dB, VB;
              return `worker ${TB} ${null!==(dB=null===(VB=BB.goneFor)||void 0===VB?void 0:VB.why)&&void 0!==dB?dB:"went"}`
            }));
          this.options.fail(1 === BB.size ? dB : `no meshing worker is left (${TB.join(", ")})`)
        }
      }
      lose(BB, TB, dB) {
        var VB, yB, pB;
        const lB = this.slots[BB];
        console.warn(`[bloxd-wasm-client] meshing worker ${BB} was lost: ${TB}`), KV(lB), null === (VB = lB.worker) || void 0 === VB || VB.terminate(), lB.worker = null, lB.heapRetries = 0, null === (yB = (pB = this.options).onMemoryGone) || void 0 === yB || yB.call(pB, BB), this.stopped || (dB ? dB() : this.options.onWorkerLost(TB), lB.started && (lB.started = !1, this.options.write(0, cT.Jd.WorkerLost, 0, BB, 0, UV)), this.start(BB))
      }
      buffer(BB) {
        var TB;
        return null !== (TB = this.pooled(BB)) && void 0 !== TB ? TB : new ArrayBuffer(Math.max(16384, BB))
      }
      pooled(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = -1;
        for (let yB = 0; yB < this.pool.length; yB++) {
          const VB = this.pool[yB].byteLength;
          VB >= BB && (dB < 0 || (TB ? VB > this.pool[dB].byteLength : VB < this.pool[dB].byteLength)) && (dB = yB)
        }
        if (dB < 0) return null;
        const VB = this.pool[dB];
        return this.pool[dB] = this.pool[this.pool.length - 1], this.pool.pop(), VB
      }
      recycle(BB) {
        this.pool.length < 4 * this.slots.length && BB.byteLength > 0 && BB.byteLength <= 1048576 && this.pool.push(BB)
      }
    }

    function KV(BB) {
      var TB;
      null === (TB = BB.watch) || void 0 === TB || TB.cancel(), BB.watch = null
    }
    var rV = dB(39689),
      IV = dB(39684),
      cV = dB(39751),
      SV = dB(39753),
      PV = dB(39716);

    function QV(BB) {
      const TB = new Uint8Array(BB.length >> 2);
      for (let dB = 0; dB < TB.length; dB++) TB[dB] = BB[4 * dB + 3];
      return TB
    }
    async function RV(BB) {
      const TB = await (0, SV.i)(BB);
      try {
        const {
          width: BB,
          height: dB,
          pixels: VB
        } = (0, PV.q)(TB);
        return {
          width: BB,
          height: dB,
          alpha: QV(VB)
        }
      } finally {
        TB.close()
      }
    }
    class aV {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RV;
        this.session = BB, this.sources = TB, this.warn = dB, this.load = VB, this.nextPoll = 0, this.ND = !1, this.warned = new Set
      }
      drain(BB) {
        if (BB < this.nextPoll) return;
        this.nextPoll = BB + 250;
        const TB = this.session.sunShadowWantedTextures();
        if (TB)
          for (let dB = 0; dB + 1 < TB.length; dB += 2) this.hand(TB[dB], TB[dB + 1]);
        for (const dB of this.session.takeSunShadowWarnings()) this.warn(dB)
      }
      dispose() {
        this.ND = !0
      }
      async hand(BB, TB) {
        var dB, VB, yB, pB, lB;
        let JB, YB = null;
        try {
          if (YB = await this.sources.blockImageUrl(BB), null === YB) throw new Error(`block image ${BB} has no URL`);
          JB = await this.load(YB)
        } catch (oB) {
          var gB;
          const TB = null !== (gB = YB) && void 0 !== gB ? gB : `block image ${BB}`;
          this.warned.has(TB) || (this.warned.add(TB), this.warn(`sun shadow plane texture ${TB} didn't load: its blocks cast no shadow`, oB))
        }
        this.ND || this.session.setSunShadowTexture(BB, TB, null !== (dB = null === (VB = JB) || void 0 === VB ? void 0 : VB.width) && void 0 !== dB ? dB : 0, null !== (yB = null === (pB = JB) || void 0 === pB ? void 0 : pB.height) && void 0 !== yB ? yB : 0, null === (lB = JB) || void 0 === lB ? void 0 : lB.alpha)
      }
    }
    var ZV = dB(39695),
      XV = dB(39756),
      WV = dB(39760),
      hV = dB(39703),
      CV = dB(39707),
      GV = dB(35819),
      qV = dB(8527),
      xV = dB(39774);
    const jV = 8192,
      AV = new Set;
    const bV = new Set([...qV.d, "sceneDownload"]);
    var nV = dB(39527),
      eV = dB(39417);
    const By = new Uint8Array(0);
    let Ty = null;

    function dy(BB) {
      return {
        aux: cT.Wb.AdStart | (BB ? cT.Wb.PreventMovement : 0),
        payload: By
      }
    }
    var Vy = dB(2409),
      yy = dB(2411);
    const py = "__bloxdSceneCapture";
    var ly = dB(1636),
      Jy = dB(2469);
    let Yy = null,
      gy = null,
      oy = null,
      ky = !1;

    function Ly() {
      Yy ??= performance.now()
    }
    var Oy = dB(39779);
    class Dy {
      constructor(BB) {
        var TB, dB;
        this.host = BB, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((BB => {
          this.landRequest = BB
        })), this.follow = BB => {
          let TB = BB;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const BB = null === this.requested && null !== TB;
            var dB;
            BB && (null === (dB = TB) || void 0 === dB || dB(null));
            const VB = await this.landing;
            var yB;
            null === VB && BB || (null === (yB = TB) || void 0 === yB || yB(VB))
          })), () => {
            TB = null
          }
        }, this.startRead = (dB = BB.store, dB.keys().then((BB => ({
          own: BB.includes(Ld.c),
          oneShot: BB.includes(Ld.g)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((BB => {
          let {
            own: TB,
            oneShot: dB
          } = BB;
          this.oneShotStored = dB, (TB || dB) && this.request()
        })), this.channel = (null !== (TB = BB.openChannel) && void 0 !== TB ? TB : Ld.v)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var BB;
        if (null !== this.requested) return this.requested;
        null === (BB = this.channel) || void 0 === BB || BB.close(), this.channel = null;
        const TB = this.oneShotStored;
        return this.requested = function(BB, TB, dB) {
          return new Promise((TB => {
            TB(BB())
          })).catch((BB => (null !== TB && (0, Ld.p)(TB), dB(BB), null)))
        }((() => this.host.load(TB).then((BB => (BB.setGamePackConfirm(this.confirm), this.landed = BB, BB)))), TB ? this.host.store : null, this.host.yD), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var BB;
          return null !== (BB = this.requested) && void 0 !== BB ? BB : null
        }))
      }
      setGamePackConfirm(BB) {
        var TB;
        this.confirm = BB, null === (TB = this.landed) || void 0 === TB || TB.setGamePackConfirm(BB)
      }
    }
    var uy = dB(39619);
    const Hy = 216 * uy.c,
      Ey = 92 * uy.b,
      vy = 64 * uy.c,
      my = 16 * uy.c;

    function iy() {
      var BB, TB;
      return null !== (BB = null === (TB = performance.memory) || void 0 === TB ? void 0 : TB.sE) && void 0 !== BB ? BB : null
    }
    class Ny {
      constructor(BB, TB) {
        this.budgetBytes = BB, this.reads = TB, this.estimate = null, this.shedAt = null
      }
      read(BB) {
        var TB;
        const dB = this.reads.storedChunks(),
          VB = this.reads.gpuBytes(),
          yB = Math.max(null !== (TB = this.reads.jsHeapBytes()) && void 0 !== TB ? TB : 0, vy),
          pB = Hy + BB + yB + VB + dB * Ey;
        this.estimate = {
          wasmBytes: BB,
          jsHeapBytes: yB,
          gpuBytes: VB,
          storedChunks: dB,
          totalBytes: pB
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: BB,
          budgetBytes: TB,
          shedAt: dB
        } = this;
        return !(null === BB || null === TB || BB.totalBytes < TB || null !== dB && BB.totalBytes < dB + my) && (this.shedAt = BB.totalBytes, !0)
      }
      describe() {
        const {
          estimate: BB,
          budgetBytes: TB
        } = this;
        return null === BB ? null : `estimate ${(0,uy.d)(BB.totalBytes)} MiB of budget ${null===TB?"none":(0,uy.d)(TB)}: wasm ${(0,uy.d)(BB.wasmBytes)} js ${(0,uy.d)(BB.jsHeapBytes)} gpu ${(0,uy.d)(BB.gpuBytes)} chunks ${BB.storedChunks}`
      }
      snapshot() {
        const {
          estimate: BB,
          budgetBytes: TB
        } = this;
        return {
          ...null === BB ? {} : {
            footprintMiB: Number((0, uy.d)(BB.totalBytes)),
            gpuMiB: Number((0, uy.d)(BB.gpuBytes)),
            storedChunks: BB.storedChunks
          },
          footprintBudgetMiB: null === TB ? -1 : Number((0, uy.d)(TB))
        }
      }
    }
    var ty = dB(2583),
      fy = dB(38043),
      sy = dB(2717);
    const My = new Uint8Array(0);
    class zy {
      constructor(BB) {
        this.options = BB, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.Dg = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== BB.module ? BB.write(0, cT.Jd.WorldgenStarted, 0, 0, My) : this.giveUp()
      }
      take(BB, TB) {
        if (!(this.gone || null === this.worker && null === this.Dg))
          if (BB === cT.Md.WorldgenSeed) {
            const BB = 0 === TB.byteLength ? null : this.options.decodeSettings(TB);
            null === BB || function(BB, TB) {
              if ((null === BB || void 0 === BB ? void 0 : BB.byteLength) !== TB.byteLength) return !1;
              for (let dB = 0; dB < BB.byteLength; dB++)
                if (BB[dB] !== TB[dB]) return !1;
              return !0
            }(this.seed, TB) || (this.seed = TB.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: BB
            }, []), null !== BB ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (BB === cT.Md.Generate) {
          var dB;
          const BB = new DataView(TB.buffer, TB.byteOffset, cT.Fd),
            VB = null !== (dB = this.pool.pop()) && void 0 !== dB ? dB : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: BB.getUint32(0, !0),
            x: BB.getInt32(4, !0),
            y: BB.getInt32(8, !0),
            z: BB.getInt32(12, !0),
            bytes: VB
          }, [VB])
        }
      }
      stop() {
        var BB;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (BB = this.worker) || void 0 === BB || BB.terminate(), this.worker = null
      }
      post(BB, TB) {
        var dB;
        null !== this.Dg ? this.Dg.push({
          message: BB,
          transfer: TB
        }) : null === (dB = this.worker) || void 0 === dB || dB.postMessage(BB, TB)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((BB => {
          this.createWorker = BB, this.start()
        }), (BB => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(BB))
        })))
      }
      start() {
        const {
          module: BB
        } = this.options, TB = this.createWorker;
        if (this.gone || null === BB || null === TB) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let dB;
        this.startsWithoutResult++;
        try {
          dB = TB()
        } catch (yB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", yB), this.lastLoss = `it did not start (${String(yB)})`, void this.start()
        }
        this.worker = dB, dB.onmessage = BB => {
          let {
            data: TB
          } = BB;
          this.worker === dB && this.onReply(dB, TB)
        }, dB.onerror = BB => {
          BB.preventDefault(), this.worker === dB && this.lose(BB.message || "its script failed")
        };
        try {
          dB.postMessage({
            type: "start",
            module: BB,
            UD: VB.c.UD
          })
        } catch (yB) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", yB), this.lastLoss = `it could not be sent the module (${String(yB)})`, dB.terminate(), this.worker = null, void this.start()
        }
        this.watch = new wV.g(wV.f, (BB => {
          this.lose((0, wV.j)(BB), (() => {
            this.options.onStartTimeout(BB)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(BB, TB) {
        switch (TB.type) {
          case "started": {
            this.endWatch();
            const TB = this.Dg;
            if (null === TB) {
              this.options.write(0, cT.Jd.WorldgenStarted, 0, 0, My);
              break
            }
            this.Dg = null;
            for (const {
                message: dB,
                transfer: VB
              }
              of TB) BB.postMessage(dB, VB);
            break
          }
          case "lost":
            this.lose(TB.reason);
            break;
          case "memory":
            var dB, VB;
            null === (dB = (VB = this.options).onMemoryStats) || void 0 === dB || dB.call(VB, TB.stats);
            break;
          case "result":
            TB.status !== cT.tb.Trapped && (this.startsWithoutResult = 0), this.options.write(TB.ticket, cT.Jd.WorldgenResult, TB.status, TB.workerUs, new Uint8Array(TB.bytes, 0, TB.len)), this.recycle(TB.bytes), TB.spare && this.recycle(TB.spare)
        }
      }
      lose(BB, TB) {
        var dB, VB, yB;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${BB}`), this.lastLoss = BB, this.endWatch(), null === (dB = this.worker) || void 0 === dB || dB.terminate(), this.worker = null, null === (VB = (yB = this.options).onMemoryGone) || void 0 === VB || VB.call(yB), this.gone || (TB ? TB() : this.options.onWorkerLost(BB), this.dropHeld(), this.Dg = null, this.options.write(0, cT.Jd.WorldgenLost, cT.Nd.Lost, 0, My), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, cT.Jd.WorldgenLost, cT.Nd.Gone, 0, My)
      }
      endWatch() {
        var BB;
        null === (BB = this.watch) || void 0 === BB || BB.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.Dg) {
          for (const {
              message: BB
            }
            of this.Dg) "generate" === BB.type && this.recycle(BB.bytes);
          this.Dg.length = 0
        }
      }
      recycle(BB) {
        this.pool.length < 16 && BB.byteLength > 0 && BB.byteLength <= 16384 && this.pool.push(BB)
      }
    }
    var wy = dB(36664),
      Uy = dB(3229),
      Fy = dB(39395),
      Ky = dB(39781),
      ry = dB(39653);

    function Iy(BB, TB) {
      for (let dB = 0; dB + TB.length <= BB.length; dB++) {
        let VB = 0;
        for (; VB < TB.length && BB[dB + VB] === TB[VB];) VB++;
        if (VB === TB.length) return dB
      }
      return -1
    }

    function cy(BB) {
      return "(" === BB || ")" === BB || "@" === BB || "," === BB || " " === BB || "\t" === BB
    }

    function Sy(BB, TB) {
      let dB = TB;
      for (; dB > 0 && !cy(BB[dB - 1]);) dB--;
      let VB = TB;
      for (; VB < BB.length && !cy(BB[VB]);) VB++;
      let yB = "";
      for (let pB = dB; pB < VB; pB++) yB += BB[pB];
      return yB
    }
    const Py = (BB, TB) => BB.includes(TB),
      Qy = BB => {
        try {
          return BB()
        } catch {
          return !1
        }
      },
      Ry = -1,
      ay = BB => {
        try {
          return BB()
        } catch {
          return Ry
        }
      };

    function Zy(BB, TB) {
      return {
        probe: (dB, VB, yB) => {
          try {
            return ((dB, VB, yB) => {
              switch (dB) {
                case cT.ec.StackCheck:
                  return TB.stackCheck() ? 1 : 0;
                case cT.ec.ConfirmMesh:
                  return TB.confirmMesh();
                case cT.ec.IndexPassReplaced:
                  return TB.indexPassReplaced() ? 1 : 0;
                case cT.ec.ProductSubChanged:
                  return TB.productSubChanged() ? 1 : 0;
                case cT.ec.RenderStatus:
                  return TB.ig();
                case cT.ec.Held:
                  return TB.Dg();
                case cT.ec.PlayerKilledSubs:
                  return TB.playerKilledSubs();
                case cT.X: {
                  const dB = TB.getComplete();
                  return null === dB ? 0 : (0, EV.j)(EV.s, EV.$, [dB, new EV.c((0, EV.E)(BB()), VB, yB)]).written
                }
                default:
                  return 0
              }
            })(dB, VB, yB)
          } catch {
            return cT.Zb
          }
        }
      }
    }
    class Xy {
      constructor(BB) {
        this.write = BB, this.flagsWritten = 0, this.written = (0, EV.m)(null)
      }
      dL(BB) {
        let {
          flags: TB,
          values: dB
        } = BB;
        for (let VB = 0; VB < dB.length; VB++) this.value(dB[VB][0], dB[VB][1]);
        this.setFlags(TB | cT.f.Ready)
      }
      value(BB, TB) {
        this.written[BB] !== TB && this.write(BB, TB, 0) && (this.written[BB] = TB)
      }
      setFlags(BB) {
        const TB = BB & ~this.flagsWritten;
        0 !== TB && this.write(cT.g.Flags, TB, TB) && (this.flagsWritten |= TB)
      }
      originStackHit() {
        return this.write(cT.g.Flags, cT.f.OriginStackHit, cT.f.OriginStackHit)
      }
    }
    const Wy = {
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
      hy = 1e3;

    function Cy(BB, TB) {
      const dB = new Xy(TB);
      let VB = !1;
      dB.dL(BB.dL());
      const yB = (0, EV.S)((() => {
          dB.dL(BB.dL())
        }), hy),
        pB = () => {
          BB.checks.stackCheck() && (VB = !0)
        };
      (0, Ky.h)(pB);
      const lB = () => {
        const TB = BB.checkPadCall();
        0 !== TB && dB.setFlags(TB)
      };
      return (0, Fy.g)(lB), {
        onInput: TB => {
          (function(BB) {
            switch (BB) {
              case cT.pb.KeyDown:
              case cT.pb.KeyUp:
              case cT.pb.MouseDown:
              case cT.pb.MouseUp:
              case cT.pb.Wheel:
              case cT.pb.TouchStart:
              case cT.pb.TouchEnd:
              case cT.pb.TouchButton:
              case cT.pb.PadAction:
                return !0;
              default:
                return !1
            }
          })(TB) && BB.checks.stackCheck() && (VB = !0)
        },
        onSend: pB,
        beforeFrame: () => {
          VB && dB.originStackHit() && (VB = !1)
        },
        onEvent: TB => {
          const VB = BB.checkEvent(TB);
          dB.value(cT.g.ProbeUsedProp, BB.usedProp()), 0 !== VB && dB.setFlags(VB)
        },
        stop: () => {
          (0, EV.U)(yB), (0, Ky.g)(pB), (0, Fy.c)(lB)
        }
      }
    }
    let Gy;
    const qy = ["length", 0, 1, 94, 2, 3, 124, 142, "g", 64, 4, "e", 11, 165, 48, "a", void 0, null, "o", "c3RhY2", "cw==", "b", "c", "d", 1023, 65536, 10, 55296, 56320, 238, 6, 12, 63, 128, 62, 152, 101, 193, 192, 160, 156, "Invalid byte index", 219, 167, 255, 224, "f", 31, "Invalid continuation byte", 240, 15, 7, 18, 61, !1, 1e5, 100, 92, 5, 146, 234, "stack", "name", 233, 236, 180, "j", "k", 95, 225, 137, 56319, 64512, 76, 65535, 57343, "Lone s", "urroga", "te U+", 16, " is no", "t a sc", "alar v", "alue", 4294967168, 4294965248, 4294901760, 4292870144, 40, 244, 204, 135, 182, 2048, 248, 176, 1114111, "Invalid UTF-8 detected", "3.0.0", "undefi", "ned", 60, "s=", "=", ";", 8, 80, "SsytLs", 512, "012345", 88, 43, 24, 99, 32, 216, 19, 155, 126, !0, 179, 141, 33554432, 67108864, 181, 41, 36, 256, 237, 157, "m", 70, 150, 97, 143, 44, 188, " ", 30, "string", "functi", "on", "protot", "ype", "decode", "I=", "eTR5bm", "q", "t", "r", "x", "vd", "s", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", 191, "None", 13, 202, "En", "tOverw", "ritten", "plete", "p"];

    function xy() {}

    function jy() {
      jy = function() {}
    }
    Gy = function(BB) {
      let TB = arguments[qy[0]] > qy[2] && arguments[qy[2]] !== qy[16] ? arguments[qy[2]] : () => qy[17],
        dB = arguments[qy[0]] > qy[4] && arguments[qy[4]] !== qy[16] ? arguments[qy[4]] : qy[17],
        VB = arguments[qy[0]] > qy[5] && arguments[qy[5]] !== qy[16] ? arguments[qy[5]] : "";
      const yB = window,
        pB = (qy[1], EV[qy[18]])("RXJyb3" + qy[145]),
        lB = (qy[1], EV[qy[18]])(qy[19] + qy[102]),
        JB = (qy[1], EV[qy[18]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        gB = (qy[1], EV[qy[18]])(qy[19] + "tUcmFjZUxpbWl0"),
        oB = (qy[1], EV[qy[18]])("bmF0aXZl"),
        kB = [(qy[1], EV[qy[18]])("bWFpbi5qcw=="), (qy[1], EV[qy[18]])("aW5kZXguanM="), (qy[1], EV[qy[18]])("dXNlcnNjcmlwdA=="), (qy[1], EV[qy[18]])("Y29udGVudC5q" + qy[20]), (qy[1], EV[qy[18]])("b3B0aW9ucy5q" + qy[20]), (qy[1], EV[qy[18]])("cG9wdXAuanM="), (qy[1], EV[qy[18]])("LnVzZXIuanM="), (qy[1], EV[qy[18]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        LB = BB => {
          "iNP0LG" + qy[18] in xy && function(...BB) {
            jy(BB[qy[0]] = qy[1], BB[qy[21]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", BB[qy[22]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)?", BB[qy[23]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144)", BB[qy[21]].match(BB[qy[22]] + BB[qy[23]]))
          }();
          const TB = yB[pB],
            dB = TB;
          if (dB[gB] < qy[55]) {
            function uB() {
              ! function(...BB) {
                function TB(BB) {
                  var TB, dB, VB, yB, pB = [];
                  for (jy(TB = qy[1], dB = BB.length, VB = void 0, yB = void 0); TB < dB;) jy(VB = BB.charCodeAt(TB++), VB >= qy[27] && VB <= qy[71] && TB < dB ? ((yB = BB.charCodeAt(TB++)) & qy[72]) == qy[28] ? pB.push(((VB & qy[24]) << qy[26]) + (yB & qy[24]) + qy[25]) : (pB.push(VB), TB--) : pB.push(VB));
                  return pB
                }

                function dB(...BB) {
                  if (BB[qy[0]] = qy[2], BB[qy[1]] >= qy[27] && BB[qy[1]] <= qy[75]) throw Error(qy[76] + qy[77] + qy[78] + BB[qy[1]].toString(qy[79]).toUpperCase() + (qy[80] + qy[81] + qy[82] + qy[83]))
                }

                function VB(...TB) {
                  return TB[qy[0]] = qy[4], BB[qy[15]](TB[qy[1]] >> TB[qy[2]] & qy[32] | qy[33])
                }

                function yB(...TB) {
                  return TB[qy[0]] = qy[2], (TB[qy[1]] & qy[84]) == qy[1] ? BB[qy[15]](TB[qy[1]]) : (TB[-qy[29]] = "", (TB[qy[1]] & qy[85]) == qy[1] ? TB[-qy[29]] = BB[qy[15]](TB[qy[1]] >> qy[30] & qy[47] | qy[38]) : (TB[qy[1]] & qy[86]) == qy[1] ? jy(dB(TB[qy[1]]), TB[-qy[29]] = BB[qy[15]](TB[qy[1]] >> qy[31] & qy[50] | qy[45]), TB[-qy[29]] += VB(TB[qy[1]], qy[30])) : (TB[qy[1]] & qy[87]) == qy[1] && jy(TB[-qy[29]] = BB[qy[15]](TB[qy[1]] >> qy[52] & qy[51] | qy[49]), TB[-qy[29]] += VB(TB[qy[1]], qy[31]), TB[-qy[29]] += VB(TB[qy[1]], qy[30])), TB[-qy[29]] += BB[qy[15]](TB[qy[1]] & qy[32] | qy[33]), TB[-qy[29]])
                }

                function pB(...TB) {
                  if (TB[qy[0]] = qy[1], BB[qy[36]] >= BB[qy[40]]) throw Error(qy[41]);
                  if (jy(TB[qy[37]] = BB[qy[43]][BB[qy[36]]] & qy[44], BB[qy[36]]++), (TB[qy[37]] & qy[38]) == qy[33]) return TB[qy[37]] & qy[32];
                  throw Error(qy[48])
                }

                function lB(...TB) {
                  if (jy(TB[qy[0]] = qy[1], TB[qy[42]] = qy[16], TB[qy[39]] = qy[16], TB[-qy[39]] = qy[16], TB[qy[11]] = qy[16], TB[qy[46]] = qy[16]), BB[qy[36]] > BB[qy[40]]) throw Error(qy[41]);
                  if (BB[qy[36]] == BB[qy[40]]) return qy[54];
                  if (jy(TB[qy[42]] = BB[qy[43]][BB[qy[36]]] & qy[44], BB[qy[36]]++), (TB[qy[42]] & qy[33]) == qy[1]) return TB[qy[42]];
                  if ((TB[qy[42]] & qy[45]) == qy[38]) {
                    if (jy(TB[qy[39]] = pB(), TB[qy[46]] = (TB[qy[42]] & qy[47]) << qy[30] | TB[qy[39]]), TB[qy[46]] >= qy[33]) return TB[qy[46]];
                    throw Error(qy[48])
                  }
                  if ((TB[qy[42]] & qy[49]) == qy[45]) {
                    if (jy(TB[qy[39]] = pB(), TB[-qy[39]] = pB(), TB[qy[46]] = (TB[qy[42]] & qy[50]) << qy[31] | TB[qy[39]] << qy[30] | TB[-qy[39]]), TB[qy[46]] >= qy[93]) return dB(TB[qy[46]]), TB[qy[46]];
                    throw Error(qy[48])
                  }
                  if ((TB[qy[42]] & qy[94]) == qy[49] && (jy(TB[qy[39]] = pB(), TB[-qy[39]] = pB(), TB[qy[11]] = pB(), TB[qy[46]] = (TB[qy[42]] & qy[51]) << qy[52] | TB[qy[39]] << qy[31] | TB[-qy[39]] << qy[30] | TB[qy[11]]), TB[qy[46]] >= qy[25] && TB[qy[46]] <= qy[96])) return TB[qy[46]];
                  throw Error(qy[97])
                }
                jy(BB[qy[0]] = qy[2], BB[qy[15]] = String.fromCharCode), jy(BB[qy[43]] = qy[16], BB[qy[40]] = qy[16], BB[qy[36]] = qy[16]), jy(BB[qy[1]].version = qy[98], BB[qy[1]].encode = function(...BB) {
                  for (jy(BB[qy[0]] = qy[2], BB[qy[2]] = TB(BB[qy[1]]), BB[qy[4]] = BB[qy[2]].length, BB[-qy[34]] = -qy[2], BB[-qy[35]] = qy[16], BB[qy[11]] = ""); ++BB[-qy[34]] < BB[qy[4]];) jy(BB[-qy[35]] = BB[qy[2]][BB[-qy[34]]], BB[qy[11]] += yB(BB[-qy[35]]));
                  return BB[qy[11]]
                }, BB[qy[1]].decode = function(...dB) {
                  for (jy(dB[qy[0]] = qy[2], BB[qy[43]] = TB(dB[qy[1]]), BB[qy[40]] = BB[qy[43]].length, BB[qy[36]] = qy[1], dB[qy[15]] = [], dB[qy[53]] = qy[16]);
                    (dB[qy[53]] = lB()) !== qy[54];) dB[qy[15]].push(dB[qy[53]]);
                  return function(TB) {
                    var dB, VB, yB, pB = TB.length;
                    for (jy(dB = -qy[2], VB = void 0, yB = ""); ++dB < pB;)(VB = TB[dB]) > qy[74] && jy(VB -= qy[25], yB += BB[qy[15]](VB >>> qy[26] & qy[24] | qy[27]), VB = qy[28] | VB & qy[24]), yB += BB[qy[15]](VB);
                    return yB
                  }(dB[qy[15]])
                })
              }(typeof exports === qy[99] + qy[100] ? this.utf8 = {} : exports)
            }
            "ZErZA93" in xy && uB(), dB[gB] = qy[55]
          }
          const VB = "string" === typeof(LB = (new TB)[lB]) ? LB : `${LB}`,
            YB = {},
            oB = dB[JB];
          var LB;
          if (typeof oB === qy[140] + qy[141]) {
            function HB() {
              const BB = require("path"),
                {
                  version: TB
                } = require("../../package"),
                {
                  version: dB
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: VB
                } = require("@redacted/components/package"),
                {
                  sdkVersion: yB
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), BB.resolve(__dirname, "../redacted.js")
            }
            "Hf4jjz" in xy && HB(), (qy[1], EV[qy[66]])(oB, TB, [YB])
          }
          const OB = YB[lB],
            DB = BB ? kB[qy[0]] : kB[qy[0]] - qy[2];
          for (let EB = qy[1]; EB < DB; EB++) {
            function vB(...BB) {
              BB[qy[0]] = qy[1]
            }
            if ("WOdpZxL" in xy && vB(), Py(VB, kB[EB])) {
              function mB(...BB) {
                jy(BB[qy[0]] = qy[1], BB[qy[21]] = function(TB, dB, VB) {
                  return VB.length !== TB.length + dB.length ? qy[54] : BB[qy[22]](TB, dB, VB, qy[1], qy[1], qy[1], {})
                }, BB[qy[22]] = function(...TB) {
                  return jy(TB[qy[0]] = qy[51], TB[qy[15]] = qy[54]), TB[qy[58]] >= TB[qy[4]].length ? qy[119] : TB[qy[30]]["" + TB[qy[5]] + TB[qy[10]] + TB[qy[58]]] !== qy[16] ? TB[qy[30]]["" + TB[qy[5]] + TB[qy[10]] + TB[qy[58]]] : (TB[qy[4]][TB[qy[58]]] === TB[qy[1]][TB[qy[5]]] && TB[qy[4]][TB[qy[58]]] === TB[qy[2]][TB[qy[10]]] ? TB[qy[15]] = BB[qy[22]](TB[qy[1]], TB[qy[2]], TB[qy[4]], TB[qy[5]] + qy[2], TB[qy[10]], TB[qy[58]] + qy[2], TB[qy[30]]) || BB[qy[22]](TB[qy[1]], TB[qy[2]], TB[qy[4]], TB[qy[5]], TB[qy[10]] + qy[2], TB[qy[58]] + qy[2], TB[qy[30]]) : TB[qy[4]][TB[qy[58]]] === TB[qy[1]][TB[qy[5]]] ? TB[qy[15]] = BB[qy[22]](TB[qy[1]], TB[qy[2]], TB[qy[4]], TB[qy[5]] + qy[2], TB[qy[10]], TB[qy[58]] + qy[2], TB[qy[30]]) : TB[qy[4]][TB[qy[58]]] === TB[qy[2]][TB[qy[10]]] && (TB[qy[15]] = BB[qy[22]](TB[qy[1]], TB[qy[2]], TB[qy[4]], TB[qy[5]], TB[qy[10]] + qy[2], TB[qy[58]] + qy[2], TB[qy[30]])), TB[qy[30]]["" + TB[qy[5]] + TB[qy[10]] + TB[qy[58]]] = TB[qy[15]], TB[qy[15]])
                }, console.log(BB[qy[21]]))
              }
              return "tUsx89" in xy && mB(), {
                [qy[61]]: VB,
                [qy[62]]: kB[EB]
              }
            }
            if (typeof OB === qy[139] && Py(OB, kB[EB])) {
              function iB(...BB) {
                function TB() {}
                BB[qy[0]] = qy[1], jy(BB[qy[60]] = function(...BB) {
                  for (jy(BB[qy[0]] = qy[4], BB[qy[4]] = qy[1], BB[qy[21]] = qy[1], BB[qy[22]] = new TB(qy[1]), BB[-qy[59]] = BB[qy[22]], BB[qy[11]] = BB[qy[1]], BB[qy[51]] = BB[qy[2]]); BB[qy[11]] !== qy[17] || BB[qy[51]] !== qy[17];) jy(BB[qy[21]] = (BB[qy[11]] ? BB[qy[11]].val : qy[1]) + (BB[qy[51]] ? BB[qy[51]].val : qy[1]) + BB[qy[4]], BB[qy[4]] = Math.floor(BB[qy[21]] / qy[26]), BB[-qy[59]].next = new TB(BB[qy[21]] % qy[26]), BB[-qy[59]] = BB[-qy[59]].next, BB[qy[11]] = BB[qy[11]] ? BB[qy[11]].next : qy[17], BB[qy[51]] = BB[qy[51]] ? BB[qy[51]].next : qy[17]);
                  return BB[qy[4]] && (BB[-qy[59]].next = new TB(BB[qy[4]])), BB[qy[22]].next
                }, console.log(BB[qy[60]]))
              }
              return "jztBLGU" in xy && iB(), {
                [qy[61]]: OB,
                [qy[62]]: kB[EB]
              }
            }
          }
          return qy[17]
        },
        OB = (...BB) => (BB[qy[0]] = qy[2], "Fjlfmp" in xy && function(...BB) {
          jy(BB[qy[0]] = qy[1], BB[-qy[69]] = function(...BB) {
            if (jy(BB[qy[0]] = qy[2], BB[-qy[63]] = BB[qy[1]].length), BB[-qy[63]] < qy[4]) return qy[1];
            if (jy(BB[qy[21]] = Math.max(...BB[qy[1]]), BB[qy[5]] = Math.min(...BB[qy[1]])), BB[qy[21]] === BB[qy[5]]) return qy[1];
            for (jy(BB[-qy[65]] = Array(BB[-qy[63]] - qy[2]).fill(Number.MAX_SAFE_INTEGER), BB[qy[58]] = Array(BB[-qy[63]] - qy[2]).fill(Number.MIN_SAFE_INTEGER), BB[qy[64]] = Math.ceil((BB[qy[21]] - BB[qy[5]]) / (BB[-qy[63]] - qy[2])), BB[qy[8]] = qy[1]), BB[-qy[56]] = qy[1]; BB[-qy[56]] < BB[-qy[63]]; BB[-qy[56]]++) BB[qy[1]][BB[-qy[56]]] !== BB[qy[5]] && BB[qy[1]][BB[-qy[56]]] !== BB[qy[21]] && jy(BB[qy[8]] = Math.floor((BB[qy[1]][BB[-qy[56]]] - BB[qy[5]]) / BB[qy[64]]), BB[-qy[65]][BB[qy[8]]] = Math.min(BB[-qy[65]][BB[qy[8]]], BB[qy[1]][BB[-qy[56]]]), BB[qy[58]][BB[qy[8]]] = Math.max(BB[qy[58]][BB[qy[8]]], BB[qy[1]][BB[-qy[56]]]));
            for (jy(BB[-qy[68]] = Number.MIN_SAFE_INTEGER, BB[qy[66]] = BB[qy[5]]), BB[qy[67]] = qy[1]; BB[qy[67]] < BB[-qy[63]] - qy[2]; BB[qy[67]]++) BB[-qy[65]][BB[qy[67]]] === Number.MAX_SAFE_INTEGER && BB[qy[58]][BB[qy[67]]] === Number.MIN_SAFE_INTEGER || jy(BB[-qy[68]] = Math.max(BB[-qy[68]], BB[-qy[65]][BB[qy[67]]] - BB[qy[66]]), BB[qy[66]] = BB[qy[58]][BB[qy[67]]]);
            return BB[-qy[68]] = Math.max(BB[-qy[68]], BB[qy[21]] - BB[qy[66]]), BB[-qy[68]]
          }, console.log(BB[-qy[69]]))
        }(), LB(BB[qy[1]]) !== qy[17]);
      let DB = qy[17];
      const uB = (...BB) => {
        BB[qy[0]] = qy[2], "TvH4ZW" in xy && function() {
          ! function(...BB) {
            function TB(...BB) {
              for (jy(BB[qy[0]] = qy[2], BB[qy[15]] = [], BB[qy[4]] = qy[1], BB[qy[5]] = BB[qy[1]].length, BB[qy[70]] = qy[16], BB[qy[58]] = qy[16]); BB[qy[4]] < BB[qy[5]];) jy(BB[qy[70]] = BB[qy[1]].charCodeAt(BB[qy[4]]++), BB[qy[70]] >= qy[27] && BB[qy[70]] <= qy[71] && BB[qy[4]] < BB[qy[5]] ? (BB[qy[58]] = BB[qy[1]].charCodeAt(BB[qy[4]]++), (BB[qy[58]] & qy[72]) == qy[28] ? BB[qy[15]].push(((BB[qy[70]] & qy[24]) << qy[26]) + (BB[qy[58]] & qy[24]) + qy[25]) : (BB[qy[15]].push(BB[qy[70]]), BB[qy[4]]--)) : BB[qy[15]].push(BB[qy[70]]));
              return BB[qy[15]]
            }

            function dB(...TB) {
              for (jy(TB[qy[0]] = qy[2], TB[qy[15]] = TB[qy[1]].length, TB[-qy[73]] = -qy[2], TB[qy[5]] = qy[16], TB[qy[10]] = ""); ++TB[-qy[73]] < TB[qy[15]];) TB[qy[5]] = TB[qy[1]][TB[-qy[73]]], TB[qy[5]] > qy[74] && jy(TB[qy[5]] -= qy[25], TB[qy[10]] += BB[qy[15]](TB[qy[5]] >>> qy[26] & qy[24] | qy[27]), TB[qy[5]] = qy[28] | TB[qy[5]] & qy[24]), TB[qy[10]] += BB[qy[15]](TB[qy[5]]);
              return TB[qy[10]]
            }

            function VB(...BB) {
              if (BB[qy[0]] = qy[2], BB[qy[1]] >= qy[27] && BB[qy[1]] <= qy[75]) throw Error(qy[76] + qy[77] + qy[78] + BB[qy[1]].toString(qy[79]).toUpperCase() + (qy[80] + qy[81] + qy[82] + qy[83]))
            }

            function yB(...TB) {
              return TB[qy[0]] = qy[4], BB[qy[15]](TB[qy[1]] >> TB[qy[2]] & qy[32] | qy[33])
            }

            function pB(TB) {
              var dB;
              return (TB & qy[84]) == qy[1] ? BB[qy[15]](TB) : (dB = "", (TB & qy[85]) == qy[1] ? dB = BB[qy[15]](TB >> qy[30] & qy[47] | qy[38]) : (TB & qy[86]) == qy[1] ? jy(VB(TB), dB = BB[qy[15]](TB >> qy[31] & qy[50] | qy[45]), dB += yB(TB, qy[30])) : (TB & qy[87]) == qy[1] && jy(dB = BB[qy[15]](TB >> qy[52] & qy[51] | qy[49]), dB += yB(TB, qy[31]), dB += yB(TB, qy[30])), dB += BB[qy[15]](TB & qy[32] | qy[33]))
            }

            function lB(...BB) {
              for (jy(BB[qy[0]] = qy[2], BB[qy[15]] = TB(BB[qy[1]]), BB[qy[12]] = BB[qy[15]].length, BB[qy[88]] = -qy[2], BB[-qy[89]] = qy[16], BB[qy[11]] = ""); ++BB[qy[88]] < BB[qy[12]];) jy(BB[-qy[89]] = BB[qy[15]][BB[qy[88]]], BB[qy[11]] += pB(BB[-qy[89]]));
              return BB[qy[11]]
            }

            function JB() {
              var TB;
              if (BB[qy[90]] >= BB[-qy[91]]) throw Error(qy[41]);
              if (jy(TB = BB[qy[23]][BB[qy[90]]] & qy[44], BB[qy[90]]++), (TB & qy[38]) == qy[33]) return TB & qy[32];
              throw Error(qy[48])
            }

            function YB(...TB) {
              if (jy(TB[qy[0]] = qy[1], TB[qy[15]] = qy[16], TB[qy[92]] = qy[16], TB[qy[22]] = qy[16], TB[-qy[95]] = qy[16], TB[qy[11]] = qy[16]), BB[qy[90]] > BB[-qy[91]]) throw Error(qy[41]);
              if (BB[qy[90]] == BB[-qy[91]]) return qy[54];
              if (jy(TB[qy[15]] = BB[qy[23]][BB[qy[90]]] & qy[44], BB[qy[90]]++), (TB[qy[15]] & qy[33]) == qy[1]) return TB[qy[15]];
              if ((TB[qy[15]] & qy[45]) == qy[38]) {
                if (jy(TB[qy[92]] = JB(), TB[qy[11]] = (TB[qy[15]] & qy[47]) << qy[30] | TB[qy[92]]), TB[qy[11]] >= qy[33]) return TB[qy[11]];
                throw Error(qy[48])
              }
              if ((TB[qy[15]] & qy[49]) == qy[45]) {
                if (jy(TB[qy[92]] = JB(), TB[qy[22]] = JB(), TB[qy[11]] = (TB[qy[15]] & qy[50]) << qy[31] | TB[qy[92]] << qy[30] | TB[qy[22]]), TB[qy[11]] >= qy[93]) return VB(TB[qy[11]]), TB[qy[11]];
                throw Error(qy[48])
              }
              if ((TB[qy[15]] & qy[94]) == qy[49] && (jy(TB[qy[92]] = JB(), TB[qy[22]] = JB(), TB[-qy[95]] = JB(), TB[qy[11]] = (TB[qy[15]] & qy[51]) << qy[52] | TB[qy[92]] << qy[31] | TB[qy[22]] << qy[30] | TB[-qy[95]]), TB[qy[11]] >= qy[25] && TB[qy[11]] <= qy[96])) return TB[qy[11]];
              throw Error(qy[97])
            }

            function gB(VB) {
              var yB, pB;
              for (jy(BB[qy[23]] = TB(VB), BB[-qy[91]] = BB[qy[23]].length, BB[qy[90]] = qy[1], yB = [], pB = void 0);
                (pB = YB()) !== qy[54];) yB.push(pB);
              return dB(yB)
            }
            jy(BB[qy[0]] = qy[2], BB[qy[15]] = String.fromCharCode), jy(BB[qy[23]] = qy[16], BB[-qy[91]] = qy[16], BB[qy[90]] = qy[16]), jy(BB[qy[1]].version = qy[98], BB[qy[1]].encode = lB, BB[qy[1]].decode = gB)
          }(typeof exports === qy[99] + qy[100] ? this.utf8 = {} : exports)
        }();
        try {
          return BB[qy[1]]()
        } catch {
          function TB(...BB) {
            jy(BB[qy[0]] = qy[1], BB[qy[15]] = function(...BB) {
              function TB(...BB) {
                return BB[qy[0]] = qy[4], lB(yB(JB(BB[qy[1]]), JB(BB[qy[2]])))
              }

              function VB(...BB) {
                return BB[qy[0]] = qy[5],
                  function(...BB) {
                    var TB, dB, VB, yB;
                    for (jy(BB[qy[0]] = qy[4], BB[-qy[111]] = BB[qy[2]].length, BB[qy[21]] = Array()), BB[qy[10]] = Array(Math.ceil(BB[qy[1]].length / qy[4])), TB = qy[1]; TB < BB[qy[10]].length; TB++) BB[qy[10]][TB] = BB[qy[1]].charCodeAt(TB * qy[4]) << qy[105] | BB[qy[1]].charCodeAt(TB * qy[4] + qy[2]);
                    for (; BB[qy[10]].length > qy[1];) {
                      for (jy(yB = Array(), VB = qy[1]), TB = qy[1]; TB < BB[qy[10]].length; TB++) jy(VB = (VB << qy[79]) + BB[qy[10]][TB], dB = Math.floor(VB / BB[-qy[111]]), VB -= dB * BB[-qy[111]]), (yB.length > qy[1] || dB > qy[1]) && (yB[yB.length] = dB);
                      jy(BB[qy[21]][BB[qy[21]].length] = VB, BB[qy[10]] = yB)
                    }
                    for (BB[qy[58]] = "", TB = BB[qy[21]].length - qy[2]; TB >= qy[1]; TB--) BB[qy[58]] += BB[qy[2]].charAt(BB[qy[21]][TB]);
                    for (BB[qy[11]] = Math.ceil(BB[qy[1]].length * qy[105] / (Math.log(BB[qy[2]].length) / Math.log(qy[4]))), TB = BB[qy[58]].length; TB < BB[qy[11]]; TB++) BB[qy[58]] = BB[qy[2]][qy[1]] + BB[qy[58]];
                    return BB[qy[58]]
                  }(yB(JB(BB[qy[1]]), JB(BB[qy[2]])), BB[qy[4]])
              }

              function yB(...BB) {
                jy(BB[qy[0]] = qy[4], BB[qy[15]] = YB(BB[qy[1]])), BB[qy[15]].length > qy[79] && (BB[qy[15]] = vB(BB[qy[15]], BB[qy[1]].length * qy[105]));
                var TB = Array(qy[79]),
                  dB = Array(qy[79]);
                for (BB[qy[5]] = qy[1]; BB[qy[5]] < qy[79]; BB[qy[5]]++) jy(TB[BB[qy[5]]] = 909522486 ^ BB[qy[15]][BB[qy[5]]], dB[BB[qy[5]]] = 1549556828 ^ BB[qy[15]][BB[qy[5]]]);
                return BB[qy[106]] = vB(TB.concat(YB(BB[qy[2]])), qy[108] + BB[qy[2]].length * qy[105]), gB(vB(dB.concat(BB[qy[106]]), function(...BB) {
                  if (BB[qy[0]] = qy[5], BB[qy[1]] === qy[107]) return BB[qy[2]] + BB[qy[4]]
                }(qy[107], qy[108], qy[127])))
              }

              function pB(TB) {
                var dB, VB, pB, lB;
                try {
                  BB[qy[43]]
                } catch (yB) {
                  BB[qy[43]] = qy[1]
                }
                for (jy(dB = BB[qy[43]] ? qy[109] + "6789ABCDEF" : qy[109] + "6789abcdef", VB = "", pB = void 0), lB = qy[1]; lB < TB.length; lB++) jy(pB = TB.charCodeAt(lB), VB += dB.charAt(pB >>> qy[10] & qy[50]) + dB.charAt(pB & qy[50]));
                return VB
              }

              function lB(...TB) {
                TB[qy[0]] = qy[2];
                try {
                  BB[qy[23]]
                } catch (dB) {
                  BB[qy[23]] = ""
                }
                for (jy(TB[-qy[110]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", TB[qy[4]] = "", TB[qy[5]] = TB[qy[1]].length), TB[-qy[7]] = qy[1]; TB[-qy[7]] < TB[qy[5]]; TB[-qy[7]] += qy[5])
                  for (TB[qy[11]] = TB[qy[1]].charCodeAt(TB[-qy[7]]) << qy[79] | (TB[-qy[7]] + qy[2] < TB[qy[5]] ? TB[qy[1]].charCodeAt(TB[-qy[7]] + qy[2]) << qy[105] : qy[1]) | (TB[-qy[7]] + qy[4] < TB[qy[5]] ? TB[qy[1]].charCodeAt(TB[-qy[7]] + qy[4]) : qy[1]), TB[qy[30]] = qy[1]; TB[qy[30]] < qy[10]; TB[qy[30]]++) TB[-qy[7]] * qy[105] + TB[qy[30]] * qy[30] > TB[qy[1]].length * qy[105] ? TB[qy[4]] += BB[qy[23]] : TB[qy[4]] += TB[-qy[110]].charAt(TB[qy[11]] >>> qy[30] * (qy[5] - TB[qy[30]]) & qy[32]);
                return TB[qy[4]]
              }

              function JB(...BB) {
                var TB, dB;
                for (jy(BB[qy[0]] = qy[2], BB[qy[2]] = "", BB[qy[4]] = -qy[2]); ++BB[qy[4]] < BB[qy[1]].length;) jy(TB = BB[qy[1]].charCodeAt(BB[qy[4]]), dB = BB[qy[4]] + qy[2] < BB[qy[1]].length ? BB[qy[1]].charCodeAt(BB[qy[4]] + qy[2]) : qy[1]), qy[27] <= TB && TB <= qy[71] && qy[28] <= dB && dB <= qy[75] && jy(TB = qy[25] + ((TB & qy[24]) << qy[26]) + (dB & qy[24]), BB[qy[4]]++), TB <= 127 ? BB[qy[2]] += String.fromCharCode(TB) : TB <= 2047 ? BB[qy[2]] += String.fromCharCode(qy[38] | TB >>> qy[30] & qy[47], qy[33] | TB & qy[32]) : TB <= qy[74] ? BB[qy[2]] += String.fromCharCode(qy[45] | TB >>> qy[31] & qy[50], qy[33] | TB >>> qy[30] & qy[32], qy[33] | TB & qy[32]) : TB <= 2097151 && (BB[qy[2]] += String.fromCharCode(qy[49] | TB >>> qy[52] & qy[51], qy[33] | TB >>> qy[31] & qy[32], qy[33] | TB >>> qy[30] & qy[32], qy[33] | TB & qy[32]));
                return BB[qy[2]]
              }

              function YB(BB) {
                var TB, dB = Array(BB.length >> qy[4]);
                for (TB = qy[1]; TB < dB.length; TB++) dB[TB] = qy[1];
                for (TB = qy[1]; TB < BB.length * qy[105]; TB += qy[105]) dB[TB >> qy[58]] |= (BB.charCodeAt(TB / qy[105]) & qy[44]) << qy[112] - TB % qy[114];
                return dB
              }

              function gB(...BB) {
                for (jy(BB[qy[0]] = qy[2], BB[qy[115]] = ""), BB[qy[113]] = qy[1]; BB[qy[113]] < BB[qy[1]].length * qy[114]; BB[qy[113]] += qy[105]) BB[qy[115]] += String.fromCharCode(BB[qy[1]][BB[qy[113]] >> qy[58]] >>> qy[112] - BB[qy[113]] % qy[114] & qy[44]);
                return BB[qy[115]]
              }

              function oB(BB, TB) {
                return BB >>> TB | BB << qy[114] - TB
              }

              function kB(...BB) {
                return BB[qy[0]] = qy[4], BB[qy[1]] >>> BB[qy[2]]
              }

              function LB(...BB) {
                return BB[qy[0]] = qy[5], BB[qy[1]] & BB[qy[2]] ^ ~BB[qy[1]] & BB[qy[4]]
              }

              function OB(...BB) {
                return BB[qy[0]] = qy[5], BB[qy[1]] & BB[qy[2]] ^ BB[qy[1]] & BB[qy[4]] ^ BB[qy[2]] & BB[qy[4]]
              }

              function DB(BB) {
                return oB(BB, qy[4]) ^ oB(BB, qy[167]) ^ oB(BB, 22)
              }

              function uB(...BB) {
                return BB[qy[0]] = qy[2], oB(BB[qy[1]], qy[30]) ^ oB(BB[qy[1]], qy[12]) ^ oB(BB[qy[1]], 25)
              }

              function HB(BB) {
                return oB(BB, qy[51]) ^ oB(BB, qy[52]) ^ kB(BB, qy[5])
              }

              function EB(...BB) {
                return BB[qy[0]] = qy[2], oB(BB[qy[1]], 17) ^ oB(BB[qy[1]], qy[116]) ^ kB(BB[qy[1]], qy[26])
              }

              function vB(...TB) {
                var dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, vB, iB;
                for (jy(TB[qy[0]] = qy[4], TB[qy[117]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), TB[qy[118]] = new Array(qy[9])), jy(TB[qy[1]][TB[qy[2]] >> qy[58]] |= qy[33] << qy[112] - TB[qy[2]] % qy[114], TB[qy[1]][(TB[qy[2]] + qy[9] >> 9 << qy[10]) + qy[50]] = TB[qy[2]]), oB = qy[1]; oB < TB[qy[1]].length; oB += qy[79]) {
                  for (jy(dB = TB[qy[117]][qy[1]], VB = TB[qy[117]][qy[2]], yB = TB[qy[117]][qy[4]], pB = TB[qy[117]][qy[5]], lB = TB[qy[117]][qy[10]], JB = TB[qy[117]][qy[58]], YB = TB[qy[117]][qy[30]], gB = TB[qy[117]][qy[51]]), kB = qy[1]; kB < qy[9]; kB++) jy(kB < qy[79] ? TB[qy[118]][kB] = TB[qy[1]][kB + oB] : TB[qy[118]][kB] = mB(mB(mB(EB(TB[qy[118]][kB - qy[4]]), TB[qy[118]][kB - qy[51]]), HB(TB[qy[118]][kB - qy[50]])), TB[qy[118]][kB - qy[79]]), vB = mB(mB(mB(mB(gB, uB(lB)), LB(lB, JB, YB)), BB[qy[11]][kB]), TB[qy[118]][kB]), iB = mB(DB(dB), OB(dB, VB, yB)), gB = YB, YB = JB, JB = lB, lB = mB(pB, vB), pB = yB, yB = VB, VB = dB, dB = mB(vB, iB));
                  jy(TB[qy[117]][qy[1]] = mB(dB, TB[qy[117]][qy[1]]), TB[qy[117]][qy[2]] = mB(VB, TB[qy[117]][qy[2]]), TB[qy[117]][qy[4]] = mB(yB, TB[qy[117]][qy[4]]), TB[qy[117]][qy[5]] = mB(pB, TB[qy[117]][qy[5]]), TB[qy[117]][qy[10]] = mB(lB, TB[qy[117]][qy[10]]), TB[qy[117]][qy[58]] = mB(JB, TB[qy[117]][qy[58]]), TB[qy[117]][qy[30]] = mB(YB, TB[qy[117]][qy[30]]), TB[qy[117]][qy[51]] = mB(gB, TB[qy[117]][qy[51]]))
                }
                return TB[qy[117]]
              }

              function mB(...BB) {
                return jy(BB[qy[0]] = qy[4], BB[qy[4]] = (BB[qy[1]] & qy[74]) + (BB[qy[2]] & qy[74]), BB[qy[5]] = (BB[qy[1]] >> qy[79]) + (BB[qy[2]] >> qy[79]) + (BB[qy[4]] >> qy[79])), BB[qy[5]] << qy[79] | BB[qy[4]] & qy[74]
              }
              return jy(BB[qy[0]] = qy[1], BB[qy[43]] = qy[1], BB[qy[23]] = ""), BB[qy[11]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...BB) {
                  return BB[qy[0]] = qy[2], pB(function(...BB) {
                    return BB[qy[0]] = qy[2], gB(vB(YB(BB[qy[1]]), BB[qy[1]].length * qy[105]))
                  }(JB(BB[qy[1]])))
                },
                b64: TB,
                any: VB,
                hex_hmac: function(...BB) {
                  return BB[qy[0]] = qy[4], pB(yB(JB(BB[qy[1]]), JB(BB[qy[2]])))
                },
                b64_hmac: TB,
                any_hmac: VB
              }
            }(), console.log(BB[qy[15]]))
          }
          return "bfj5C7" in xy && TB(), qy[119]
        }
      };
      let HB = qy[54];
      const EB = (...BB) => {
          BB[qy[0]] = qy[1], "KZAcx3" in xy && function(...BB) {
            function TB() {}
            BB[qy[0]] = qy[1], jy(BB[qy[15]] = function(...BB) {
              for (jy(BB[qy[0]] = qy[4], BB[-qy[120]] = qy[1], BB[qy[21]] = qy[1], BB[qy[22]] = new TB(qy[1]), BB[qy[121]] = BB[qy[22]], BB[qy[30]] = BB[qy[1]], BB[qy[51]] = BB[qy[2]]); BB[qy[30]] !== qy[17] || BB[qy[51]] !== qy[17];) jy(BB[qy[21]] = (BB[qy[30]] ? BB[qy[30]].val : qy[1]) + (BB[qy[51]] ? BB[qy[51]].val : qy[1]) + BB[-qy[120]], BB[-qy[120]] = Math.floor(BB[qy[21]] / qy[26]), BB[qy[121]].next = new TB(BB[qy[21]] % qy[26]), BB[qy[121]] = BB[qy[121]].next, BB[qy[30]] = BB[qy[30]] ? BB[qy[30]].next : qy[17], BB[qy[51]] = BB[qy[51]] ? BB[qy[51]].next : qy[17]);
              return BB[-qy[120]] && (BB[qy[121]].next = new TB(BB[-qy[120]])), BB[qy[22]].next
            }, console.log(BB[qy[15]]))
          }(), !HB && (qy[1], EV[qy[147]])() && (HB = qy[119])
        },
        vB = BB => {
          try {
            function TB(...BB) {
              function TB(...BB) {
                return BB[qy[0]] = qy[2], BB[qy[1]][qy[2]] * qy[123] + (BB[qy[1]][qy[1]] < qy[1] ? qy[122] | BB[qy[1]][qy[1]] : BB[qy[1]][qy[1]])
              }

              function dB(...BB) {
                switch (BB[qy[0]] = qy[2], ((BB[qy[1]] & qy[122]) !== qy[1]) * qy[2] + (BB[qy[1]] < qy[1]) * qy[4]) {
                  case qy[1]:
                    return [BB[qy[1]] % qy[122], Math.trunc(BB[qy[1]] / qy[123])];
                  case qy[2]:
                    return [BB[qy[1]] % qy[122] - qy[122], Math.trunc(BB[qy[1]] / qy[123]) + qy[2]];
                  case qy[4]:
                    return [((BB[qy[1]] + qy[122]) % qy[122] + qy[122]) % qy[122], Math.round(BB[qy[1]] / qy[123])];
                  case qy[5]:
                    return [BB[qy[1]] % qy[122], Math.trunc(BB[qy[1]] / qy[123])]
                }
              }
              BB[qy[0]] = qy[1], jy(BB[-qy[33]] = TB([qy[4], qy[10]]), BB[qy[2]] = TB([qy[2], qy[4]]), BB[qy[4]] = BB[-qy[33]] + BB[qy[2]], BB[qy[5]] = BB[qy[4]] - BB[qy[2]], BB[-qy[124]] = BB[qy[5]] * qy[4], BB[qy[46]] = BB[-qy[124]] / qy[4], console.log(dB(BB[qy[4]])), console.log(dB(BB[qy[5]])), console.log(dB(BB[-qy[124]])), console.log(dB(BB[qy[46]])))
            }
            return "ZzdyBGT" in xy && TB(), BB()
          } catch {
            function dB(...BB) {
              function TB(...BB) {
                return BB[qy[0]] = qy[2], BB[qy[1]][qy[2]] * qy[123] + (BB[qy[1]][qy[1]] < qy[1] ? qy[122] | BB[qy[1]][qy[1]] : BB[qy[1]][qy[1]])
              }

              function dB(BB) {
                switch (((BB & qy[122]) !== qy[1]) * qy[2] + (BB < qy[1]) * qy[4]) {
                  case qy[1]:
                    return [BB % qy[122], Math.trunc(BB / qy[123])];
                  case qy[2]:
                    return [BB % qy[122] - qy[122], Math.trunc(BB / qy[123]) + qy[2]];
                  case qy[4]:
                    return [((BB + qy[122]) % qy[122] + qy[122]) % qy[122], Math.round(BB / qy[123])];
                  case qy[5]:
                    return [BB % qy[122], Math.trunc(BB / qy[123])]
                }
              }
              BB[qy[0]] = qy[1], jy(BB[qy[125]] = TB([qy[4], qy[10]]), BB[qy[2]] = TB([qy[2], qy[4]]), BB[qy[126]] = BB[qy[125]] + BB[qy[2]], BB[qy[5]] = BB[qy[126]] - BB[qy[2]], BB[qy[10]] = BB[qy[5]] * qy[4], BB[qy[58]] = BB[qy[10]] / qy[4], console.log(dB(BB[qy[126]])), console.log(dB(BB[qy[5]])), console.log(dB(BB[qy[10]])), console.log(dB(BB[qy[58]])))
            }
            return "Fz2mmd" in xy && dB(), qy[16]
          }
        },
        mB = (...BB) => {
          BB[qy[0]] = qy[2];
          try {
            function TB(...BB) {
              BB[qy[0]] = qy[1];
              const TB = require("big-integer");
              jy(BB[qy[128]] = class {
                static randomPrime(...BB) {
                  BB[qy[0]] = qy[2];
                  const dB = TB.one.shiftLeft(BB[qy[1]] - qy[2]),
                    VB = TB.one.shiftLeft(BB[qy[1]]).prev();
                  for (; qy[119];) {
                    let BB = TB.randBetween(dB, VB);
                    if (BB.isProbablePrime(qy[127])) return BB
                  }
                }
                static generate(...BB) {
                  BB[qy[0]] = qy[2];
                  const dB = TB(65537);
                  let VB, yB;
                  BB[qy[2]] = qy[16];
                  do {
                    jy(VB = this.randomPrime(BB[qy[1]] / qy[4]), yB = this.randomPrime(BB[qy[1]] / qy[4]), BB[qy[2]] = TB.lcm(VB.prev(), yB.prev()))
                  } while (TB.gcd(dB, BB[qy[2]]).notEquals(qy[2]) || VB.minus(yB).abs().shiftRight(BB[qy[1]] / qy[4] - qy[56]).isZero());
                  return {
                    e: dB,
                    n: VB.multiply(yB),
                    d: dB.modInv(BB[qy[2]])
                  }
                }
                static encrypt(...BB) {
                  return BB[qy[0]] = qy[5], TB(BB[qy[1]]).modPow(BB[qy[4]], BB[qy[2]])
                }
                static decrypt(...BB) {
                  return BB[qy[0]] = qy[5], TB(BB[qy[1]]).modPow(BB[qy[2]], BB[qy[4]])
                }
                static encode(...BB) {
                  BB[qy[0]] = qy[2];
                  const dB = BB[qy[1]].split("").map((BB => BB.charCodeAt())).join("");
                  return TB(dB)
                }
                static decode(...BB) {
                  BB[qy[0]] = qy[2];
                  const TB = BB[qy[1]].toString();
                  BB[qy[15]] = "";
                  for (let dB = qy[1]; dB < TB.length; dB += qy[4]) {
                    let VB = Number(TB.substr(dB, qy[4]));
                    VB <= qy[138] ? (BB[qy[15]] += String.fromCharCode(Number(TB.substr(dB, qy[5]))), dB++) : BB[qy[15]] += String.fromCharCode(VB)
                  }
                  return BB[qy[15]]
                }
              }, module.exports = BB[qy[128]])
            }
            return "rCY2fE" in xy && TB(), BB[qy[1]](), qy[119]
          } catch {
            function dB(...BB) {
              function TB(...BB) {
                return BB[qy[0]] = qy[2], BB[qy[1]][qy[2]] * qy[123] + (BB[qy[1]][qy[1]] < qy[1] ? qy[122] | BB[qy[1]][qy[1]] : BB[qy[1]][qy[1]])
              }

              function dB(...BB) {
                switch (BB[qy[0]] = qy[2], ((BB[qy[1]] & qy[122]) !== qy[1]) * qy[2] + (BB[qy[1]] < qy[1]) * qy[4]) {
                  case qy[1]:
                    return [BB[qy[1]] % qy[122], Math.trunc(BB[qy[1]] / qy[123])];
                  case qy[2]:
                    return [BB[qy[1]] % qy[122] - qy[122], Math.trunc(BB[qy[1]] / qy[123]) + qy[2]];
                  case qy[4]:
                    return [((BB[qy[1]] + qy[122]) % qy[122] + qy[122]) % qy[122], Math.round(BB[qy[1]] / qy[123])];
                  case qy[5]:
                    return [BB[qy[1]] % qy[122], Math.trunc(BB[qy[1]] / qy[123])]
                }
              }
              BB[qy[0]] = qy[1], jy(BB[qy[15]] = TB([qy[4], qy[10]]), BB[-qy[101]] = TB([qy[2], qy[4]]), BB[qy[129]] = BB[qy[15]] + BB[-qy[101]], BB[qy[5]] = BB[qy[129]] - BB[-qy[101]], BB[qy[11]] = BB[qy[5]] * qy[4], BB[qy[46]] = BB[qy[11]] / qy[4], console.log(dB(BB[qy[129]])), console.log(dB(BB[qy[5]])), console.log(dB(BB[qy[11]])), console.log(dB(BB[qy[46]])))
            }
            return "ilGyjs" in xy && dB(), qy[54]
          }
        },
        iB = (qy[1], EV[qy[18]])("a29qbzYzb25i"),
        NB = (qy[1], EV[qy[130]])(qy[17]);
      let tB = qy[17],
        fB = qy[54],
        sB = qy[54];
      const MB = (qy[1], EV[qy[130]])(qy[17]);
      let zB = qy[1];
      const wB = (qy[1], EV[qy[130]])(qy[17]);
      let UB = qy[1];
      const FB = (qy[1], EV[qy[130]])(qy[17]);
      let KB = qy[54],
        rB = qy[54];
      const IB = (...TB) => {
          if (TB[qy[0]] = qy[4], TB[qy[1]] === BB) {
            if (tB === qy[17]) {
              function yB(...BB) {
                BB[qy[0]] = qy[1]
              }
              "IieBjAF" in xy && yB(), tB = typeof TB[qy[2]] === qy[161] ? TB[qy[2]] : -qy[2]
            } else fB = qy[119];
            return
          }
          const dB = NB[TB[qy[1]]];
          if (!TB[qy[2]]) {
            function pB() {
              ! function(...BB) {
                function TB(BB) {
                  var TB, dB, VB, yB, pB = [];
                  for (jy(TB = qy[1], dB = BB.length, VB = void 0, yB = void 0); TB < dB;) jy(VB = BB.charCodeAt(TB++), VB >= qy[27] && VB <= qy[71] && TB < dB ? ((yB = BB.charCodeAt(TB++)) & qy[72]) == qy[28] ? pB.push(((VB & qy[24]) << qy[26]) + (yB & qy[24]) + qy[25]) : (pB.push(VB), TB--) : pB.push(VB));
                  return pB
                }

                function dB(...BB) {
                  if (BB[qy[0]] = qy[2], BB[qy[1]] >= qy[27] && BB[qy[1]] <= qy[75]) throw Error(qy[76] + qy[77] + qy[78] + BB[qy[1]].toString(qy[79]).toUpperCase() + (qy[80] + qy[81] + qy[82] + qy[83]))
                }

                function VB(TB, dB) {
                  return BB[qy[45]](TB >> dB & qy[32] | qy[33])
                }

                function yB(...TB) {
                  return TB[qy[0]] = qy[2], (TB[qy[1]] & qy[84]) == qy[1] ? BB[qy[45]](TB[qy[1]]) : (TB[-qy[131]] = "", (TB[qy[1]] & qy[85]) == qy[1] ? TB[-qy[131]] = BB[qy[45]](TB[qy[1]] >> qy[30] & qy[47] | qy[38]) : (TB[qy[1]] & qy[86]) == qy[1] ? jy(dB(TB[qy[1]]), TB[-qy[131]] = BB[qy[45]](TB[qy[1]] >> qy[31] & qy[50] | qy[45]), TB[-qy[131]] += VB(TB[qy[1]], qy[30])) : (TB[qy[1]] & qy[87]) == qy[1] && jy(TB[-qy[131]] = BB[qy[45]](TB[qy[1]] >> qy[52] & qy[51] | qy[49]), TB[-qy[131]] += VB(TB[qy[1]], qy[31]), TB[-qy[131]] += VB(TB[qy[1]], qy[30])), TB[-qy[131]] += BB[qy[45]](TB[qy[1]] & qy[32] | qy[33]), TB[-qy[131]])
                }

                function pB(...TB) {
                  if (TB[qy[0]] = qy[1], BB[-qy[134]] >= BB[qy[5]]) throw Error(qy[41]);
                  if (jy(TB[-qy[135]] = BB[qy[10]][BB[-qy[134]]] & qy[44], BB[-qy[134]]++), (TB[-qy[135]] & qy[38]) == qy[33]) return TB[-qy[135]] & qy[32];
                  throw Error(qy[48])
                }

                function lB(...TB) {
                  if (jy(TB[qy[0]] = qy[1], TB[qy[15]] = qy[16], TB[qy[2]] = qy[16], TB[qy[4]] = qy[16], TB[qy[23]] = qy[16], TB[qy[11]] = qy[16]), BB[-qy[134]] > BB[qy[5]]) throw Error(qy[41]);
                  if (BB[-qy[134]] == BB[qy[5]]) return qy[54];
                  if (jy(TB[qy[15]] = BB[qy[10]][BB[-qy[134]]] & qy[44], BB[-qy[134]]++), (TB[qy[15]] & qy[33]) == qy[1]) return TB[qy[15]];
                  if ((TB[qy[15]] & qy[45]) == qy[38]) {
                    if (jy(TB[qy[2]] = pB(), TB[qy[11]] = (TB[qy[15]] & qy[47]) << qy[30] | TB[qy[2]]), TB[qy[11]] >= qy[33]) return TB[qy[11]];
                    throw Error(qy[48])
                  }
                  if ((TB[qy[15]] & qy[49]) == qy[45]) {
                    if (jy(TB[qy[2]] = pB(), TB[qy[4]] = pB(), TB[qy[11]] = (TB[qy[15]] & qy[50]) << qy[31] | TB[qy[2]] << qy[30] | TB[qy[4]]), TB[qy[11]] >= qy[93]) return dB(TB[qy[11]]), TB[qy[11]];
                    throw Error(qy[48])
                  }
                  if ((TB[qy[15]] & qy[94]) == qy[49] && (jy(TB[qy[2]] = pB(), TB[qy[4]] = pB(), TB[qy[23]] = pB(), TB[qy[11]] = (TB[qy[15]] & qy[51]) << qy[52] | TB[qy[2]] << qy[31] | TB[qy[4]] << qy[30] | TB[qy[23]]), TB[qy[11]] >= qy[25] && TB[qy[11]] <= qy[96])) return TB[qy[11]];
                  throw Error(qy[97])
                }
                jy(BB[qy[0]] = qy[2], BB[qy[45]] = String.fromCharCode), jy(BB[qy[10]] = qy[16], BB[qy[5]] = qy[16], BB[-qy[134]] = qy[16]), jy(BB[qy[1]].version = qy[98], BB[qy[1]].encode = function(...BB) {
                  for (jy(BB[qy[0]] = qy[2], BB[qy[132]] = TB(BB[qy[1]]), BB[qy[133]] = BB[qy[132]].length, BB[qy[5]] = -qy[2], BB[qy[10]] = qy[16], BB[qy[58]] = ""); ++BB[qy[5]] < BB[qy[133]];) jy(BB[qy[10]] = BB[qy[132]][BB[qy[5]]], BB[qy[58]] += yB(BB[qy[10]]));
                  return BB[qy[58]]
                }, BB[qy[1]].decode = function(...dB) {
                  for (jy(dB[qy[0]] = qy[2], BB[qy[10]] = TB(dB[qy[1]]), BB[qy[5]] = BB[qy[10]].length, BB[-qy[134]] = qy[1], dB[qy[2]] = [], dB[qy[4]] = qy[16]);
                    (dB[qy[4]] = lB()) !== qy[54];) dB[qy[2]].push(dB[qy[4]]);
                  return function(...TB) {
                    for (jy(TB[qy[0]] = qy[2], TB[qy[2]] = TB[qy[1]].length, TB[qy[21]] = -qy[2], TB[qy[5]] = qy[16], TB[qy[116]] = ""); ++TB[qy[21]] < TB[qy[2]];) TB[qy[5]] = TB[qy[1]][TB[qy[21]]], TB[qy[5]] > qy[74] && jy(TB[qy[5]] -= qy[25], TB[qy[116]] += BB[qy[45]](TB[qy[5]] >>> qy[26] & qy[24] | qy[27]), TB[qy[5]] = qy[28] | TB[qy[5]] & qy[24]), TB[qy[116]] += BB[qy[45]](TB[qy[5]]);
                    return TB[qy[116]]
                  }(dB[qy[2]])
                })
              }(typeof exports === qy[99] + qy[100] ? this.utf8 = {} : exports)
            }
            if ("ahMzli" in xy && pB(), dB) {
              function lB(...BB) {
                BB[qy[0]] = qy[1]
              }
              "TSy7uQ7" in xy && lB(), sB = qy[119]
            }
            return
          }
          if (TB[qy[1]] !== iB) {
            function JB(...BB) {
              jy(BB[qy[0]] = qy[1], BB[qy[15]] = function(TB, dB) {
                return BB[qy[21]]({}, TB, dB)
              }, BB[qy[21]] = function(...TB) {
                if (jy(TB[qy[0]] = qy[5], TB[qy[15]] = {}), TB[qy[1]][TB[qy[2]] + TB[qy[4]]] !== qy[16]) return TB[qy[1]][TB[qy[2]] + TB[qy[4]]];
                if (TB[qy[2]] === TB[qy[4]]) return qy[119];
                for (TB[qy[10]] = qy[1]; TB[qy[10]] < TB[qy[2]].length; TB[qy[10]]++) TB[qy[15]][TB[qy[2]][TB[qy[10]]]] === qy[16] && (TB[qy[15]][TB[qy[2]][TB[qy[10]]]] = qy[1]), TB[qy[15]][TB[qy[4]][TB[qy[10]]]] === qy[16] && (TB[qy[15]][TB[qy[4]][TB[qy[10]]]] = qy[1]), jy(TB[qy[15]][TB[qy[2]][TB[qy[10]]]]++, TB[qy[15]][TB[qy[4]][TB[qy[10]]]]--);
                for (TB[-qy[2]] in TB[qy[15]])
                  if (TB[qy[15]][TB[-qy[2]]] !== qy[1]) return TB[qy[1]][TB[qy[2]] + TB[qy[4]]] = qy[54], qy[54];
                for (TB[qy[138]] = qy[2]; TB[qy[138]] < TB[qy[2]].length; TB[qy[138]]++)
                  if (BB[qy[21]](TB[qy[1]], TB[qy[2]].substr(qy[1], TB[qy[138]]), TB[qy[4]].substr(qy[1], TB[qy[138]])) && BB[qy[21]](TB[qy[1]], TB[qy[2]].substr(TB[qy[138]]), TB[qy[4]].substr(TB[qy[138]])) || BB[qy[21]](TB[qy[1]], TB[qy[2]].substr(qy[1], TB[qy[138]]), TB[qy[4]].substr(TB[qy[4]].length - TB[qy[138]])) && BB[qy[21]](TB[qy[1]], TB[qy[2]].substr(TB[qy[138]]), TB[qy[4]].substr(qy[1], TB[qy[4]].length - TB[qy[138]]))) return TB[qy[1]][TB[qy[2]] + TB[qy[4]]] = qy[119], qy[119];
                return TB[qy[1]][TB[qy[2]] + TB[qy[4]]] = qy[54], qy[54]
              }, console.log(BB[qy[15]]))
            }
            return "ey5vMT" in xy && JB(), void(NB[TB[qy[1]]] = TB[qy[2]])
          }
          NB[TB[qy[1]]] = qy[119];
          const VB = typeof TB[qy[2]] === qy[139] ? TB[qy[2]] : "" + TB[qy[2]];
          FB[VB] || ((qy[1], wy[qy[46]])(VB) ? rB = qy[119] : (qy[1], wy.i)(VB) ? zB < 8 ? jy(FB[VB] = qy[119], MB[zB++] = VB, KB ||= (qy[1], wy[qy[11]])(VB)) : !KB && (qy[1], wy[qy[11]])(VB) && jy(FB[VB] = qy[119], MB[8 - qy[2]] = VB, KB = qy[119]) : UB < 4 && jy(FB[VB] = qy[119], wB[UB++] = VB))
        },
        cB = (qy[1], Uy[qy[46]])(BB),
        SB = cB ? cB.replaced : (() => {
          try {
            return yB[BB]
          } catch {
            return qy[16]
          }
        })();
      if (mB((() => {
          yB[BB] = IB
        })), typeof SB === qy[140] + qy[141]) {
        const BB = SB;
        mB((() => {
          BB(IB)
        }))
      }
      if (cB) {
        const TB = cB.reports;
        mB((() => {
          for (const dB in TB)(qy[1], EV[qy[66]])(EV[qy[150]], TB, [dB]) && dB !== BB && IB(dB, TB[dB])
        }))
      }
      const PB = cB ? qy[4] : qy[2];
      let QB = qy[54];
      const RB = (...TB) => (TB[qy[0]] = qy[1], fB ? qy[119] : (jy(TB[qy[15]] = qy[54], QB = !mB((() => {
          TB[qy[15]] = yB[BB] !== IB
        }))), TB[qy[15]])),
        aB = uB(((...TB) => {
          TB[qy[0]] = qy[1];
          const dB = (qy[1], EV.J)(yB, BB);
          return (dB === qy[17] || dB === void qy[1] ? void qy[1] : dB.configurable) !== qy[54] || typeof dB[qy[163]] !== qy[140] + qy[141] || tB !== PB
        })),
        ZB = {},
        XB = () => {
          try {
            return navigator[qy[158] + "tSub"]
          } catch {
            return ZB
          }
        },
        WB = XB(),
        hB = dB,
        CB = hB === qy[17] ? ((...BB) => {
          BB[qy[0]] = qy[1];
          const TB = qy[101];
          jy(BB[-qy[39]] = qy[54], BB[qy[21]] = TB - qy[2]);
          const dB = TextDecoder[qy[142] + qy[143]][qy[144]],
            VB = function() {
              BB[qy[21]]++, BB[qy[21]] === TB && (Qy((() => OB(qy[54]))) && (BB[-qy[39]] = qy[119]), BB[qy[21]] = qy[1]);
              for (var VB = arguments[qy[0]], yB = new Array(VB), pB = qy[1]; pB < VB; pB++) yB[pB] = arguments[pB];
              return (qy[1], EV[qy[66]])(dB, this, yB)
            };
          return mB((() => {
            TextDecoder[qy[142] + qy[143]][qy[144]] = VB
          })), () => BB[-qy[39]] ? qy[4] : ay((() => TextDecoder[qy[142] + qy[143]][qy[144]] !== VB ? qy[30] : qy[1]))
        })() : () => ay((() => hB[qy[156] + qy[157]]())),
        GB = (qy[1], ET[qy[22]])(),
        qB = (qy[1], EV[qy[130]])(qy[17]),
        xB = (qy[1], EV[qy[130]])(qy[17]);
      let jB = qy[1],
        AB = qy[1],
        bB = qy[1];
      const nB = (qy[1], EV[qy[130]])(qy[17]),
        eB = (qy[1], EV[qy[130]])(qy[17]);
      let BT = qy[17],
        TT = (qy[1], EV[qy[130]])(qy[17]);
      const dT = (BB, TB) => {
          jy(qB[jB] = BB, xB[jB] = TB, jB++)
        },
        VT = (...BB) => (jy(BB[qy[0]] = qy[2], BB[qy[15]] = qy[16]), (BB[qy[15]] = (xB[BB[qy[1]]] ? eB : nB)[qB[BB[qy[1]]]]) !== qy[17] && BB[qy[15]] !== void qy[1] ? BB[qy[15]] : -qy[2]),
        yT = (qy[1], EV[qy[18]])("d2lvNjQz"),
        pT = (qy[1], EV[qy[18]])("amtsa2plZndu"),
        lT = [
          [(qy[1], EV[qy[18]])("aW9qZndlODNq"), "2"],
          [(qy[1], EV[qy[18]])("a3Bq"), "4"],
          [(qy[1], EV[qy[18]])("dXJocmZm"), "5"]
        ],
        YT = [
          [(qy[1], EV[qy[18]])(qy[146] + qy[145]), qy[173]],
          [(qy[1], EV[qy[18]])(qy[146] + "w="), qy[18]]
        ],
        gT = (qy[1], EV[qy[18]])("eTR5bnM="),
        oT = (qy[1], EV[qy[18]])("aHRleWpldA=="),
        kT = (qy[1], EV[qy[18]])("c2RmbGpneGxmY2pr"),
        LT = [
          [(qy[1], EV[qy[18]])("a3NhZmR1"), qy[149]],
          [(qy[1], EV[qy[18]])("ZGZnYWFzZGFz"), qy[152]],
          [kT, qy[148]],
          [(qy[1], EV[qy[18]])("bGFzZWRraGFz"), "u"],
          [(qy[1], EV[qy[18]])("cW16ZjhrM24="), qy[15]]
        ],
        OT = [
          [gT, qy[164]],
          [oT, qy[147]],
          [(qy[1], EV[qy[18]])("bmI3ZnEy"), qy[21]]
        ],
        DT = (qy[1], EV[qy[18]])("bGtxM20="),
        uT = (qy[1], EV[qy[18]])("bWtxN3" + qy[145]),
        HT = ["mk:tw", "mk:jf"],
        vT = (() => {
          try {
            var BB;
            return (BB = yB[(qy[1], EV[qy[18]])("V2ViU29ja2V0")]) === qy[17] || BB === void qy[1] ? void qy[1] : BB[qy[142] + qy[143]]
          } catch {
            return qy[16]
          }
        })(),
        mT = ["send", "close", "addEventListener", "removeEventListener", qy[154] + qy[153] + qy[148]],
        iT = ["onmessage", "onopen", "onclos" + qy[11], "onerro" + qy[149]];
      let NT = qy[54];
      const tT = (...BB) => {
          BB[qy[0]] = qy[1];
          const dB = TB();
          dB === qy[17] || NT || (NT = uB((() => {
            if (vT !== qy[16] && (qy[1], EV.M)(dB) !== vT) return qy[119];
            for (let BB = qy[1]; BB < mT[qy[0]]; BB++)
              if ((qy[1], EV[qy[66]])(EV[qy[150]], dB, [mT[BB]])) return qy[119];
            for (let BB = qy[1]; BB < iT[qy[0]]; BB++)
              if (dB[iT[BB]] !== qy[17] && dB[iT[BB]] !== qy[16]) return qy[119];
            return qy[54]
          })))
        },
        fT = (qy[1], EV[qy[18]])("RXZlbnQ=");
      let sT = cT[qy[151]][qy[166]],
        MT = qy[1];
      const zT = () => MT++ === qy[58] ? (MT = qy[1], OB(qy[54]) ? cT[qy[46]].CheckFuncHit : qy[1]) : qy[1],
        wT = (qy[1], EV[qy[130]])(qy[17]),
        UT = VB[qy[0]];
      for (let YB = qy[1]; YB < UT; YB++) {
        const BB = (qy[1], EV[qy[66]])(EV.X, VB, [YB]);
        wT[YB] = BB >= qy[113] && BB <= 122 ? BB : qy[1]
      }
      const FT = (...BB) => {
          return BB[qy[0]] = qy[4], typeof BB[qy[1]] === qy[140] + qy[141] && (qy[1], EV[qy[66]])(EV.O, BB[qy[2]], [(TB = BB[qy[1]], (0, EV.j)(EV.w, TB, []))]) !== qy[17];
          var TB
        },
        KT = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        rT = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        IT = [
          [Wy["Dispat" + qy[153] + qy[148]], () => !FT(EventTarget[qy[142] + qy[143]][qy[154] + qy[153] + qy[148]], KT)],
          [Wy.PerformanceNow, () => !FT(performance[qy[155]], rT)],
          [Wy.DateNow, () => !FT(Date[qy[155]], rT)]
        ],
        ST = (qy[1], EV[qy[130]])(qy[17]);
      let PT = qy[1];
      const QT = {
        stackCheck: () => {
          let BB = qy[17];
          const TB = Qy((() => (BB = LB(qy[119]), BB !== qy[17])));
          return BB !== qy[17] && DB === qy[17] && (DB = function(BB, TB) {
            var dB;
            const VB = /[^\n]+/g,
              yB = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              pB = /[(@\s]([^\s(@]+)$/,
              lB = /:\d/,
              JB = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let YB = null,
              gB = null,
              oB = (0, EV.j)(EV.O, VB, [BB]);
            for (; null !== oB;) {
              const dB = (0, EV.j)(EV.O, yB, [oB[0]]),
                kB = Iy(oB[0], TB);
              if (-1 !== kB) {
                if (null !== dB) return (0, wy.m)(dB[0]);
                const BB = Sy(oB[0], kB),
                  TB = (0, EV.j)(EV.O, pB, [oB[0]]),
                  VB = null !== (0, EV.j)(EV.O, lB, [BB]) ? BB : null === TB ? null : TB[1],
                  yB = null === VB ? null : (0, EV.j)(EV.O, JB, [VB]);
                if (null !== yB && "" !== yB[1]) return (0, wy.m)(yB[1])
              }
              null !== dB && (null === YB ? YB = dB[0] : null === gB && dB[0] !== YB && (gB = dB[0])), oB = (0, EV.j)(EV.O, VB, [BB])
            }
            return (0, wy.m)(null !== (dB = gB) && void 0 !== dB ? dB : null === YB ? "none" : "own")
          }(BB[qy[61]], BB[qy[62]])), TB
        },
        [qy[156] + qy[157]]: (...BB) => {
          BB[qy[0]] = qy[1];
          const TB = CB();
          if (TB === qy[4]) return qy[4];
          if (NB[yT]) return qy[5];
          const dB = ay((() => yB[pT] ? qy[10] : qy[1]));
          return dB !== qy[1] ? dB === qy[10] ? qy[10] : qy[1] : TB === Ry ? qy[1] : TB === qy[30] ? qy[30] : (EB(), VB = Function[qy[142] + qy[143]], pB = qy[162], lB = BB => BB.writable !== qy[119], Qy((() => {
            const BB = Object.getOwnPropertyDescriptor(VB, pB);
            return void 0 !== BB && lB(BB)
          })) ? qy[51] : qy[1]);
          var VB, pB, lB
        },
        indexPassReplaced: RB,
        [qy[158] + "tSubChanged"]: (...BB) => {
          if (BB[qy[0]] = qy[1], WB === ZB || QB) return qy[54];
          const TB = XB();
          return TB !== ZB && TB !== WB
        },
        Dg: (...BB) => {
          jy(BB[qy[0]] = qy[1], BB[qy[15]] = UT);
          for (let TB = qy[1]; TB < IT[qy[0]] + PT; TB++) {
            const dB = TB < IT[qy[0]] ? IT[TB] : ST[TB - IT[qy[0]]];
            dB[qy[1]] < BB[qy[15]] && uB(dB[qy[2]]) && (BB[qy[15]] = dB[qy[1]])
          }
          return BB[qy[15]] < UT ? wT[BB[qy[15]]] : qy[1]
        },
        ig: () => GB ? ET[qy[8]] : qy[105],
        [qy[159] + qy[160] + "Subs"]: (...BB) => {
          BB[qy[0]] = qy[1];
          const TB = YB.h.ZH[qy[159] + qy[160]];
          return typeof TB === qy[161] && TB > qy[1] ? TB > qy[74] ? qy[74] : TB : qy[1]
        },
        ["getCom" + qy[172]]: (...BB) => {
          jy(BB[qy[0]] = qy[1], BB[qy[21]] = qy[16], jB = qy[1]);
          for (let dB = qy[1]; dB < zB; dB++) dT(MB[dB], qy[119]);
          for (let dB = qy[1]; dB < lT[qy[0]]; dB++) NB[lT[dB][qy[1]]] && dT(lT[dB][qy[2]], qy[119]);
          const TB = ay((() => Py(atob[qy[162]](), oB) ? qy[1] : qy[2]));
          TB === qy[2] && dT(qy[8], qy[119]), EB();
          const VB = TB === Ry ? Ry : ay(((...BB) => {
            BB[qy[0]] = qy[1];
            const TB = Object.getOwnPropertyDescriptor(window, "atob");
            return TB === qy[16] ? Ry : TB[qy[163]] !== qy[16] ? qy[2] : qy[1]
          }));
          VB === qy[2] && dT(qy[46], qy[119]);
          const yB = VB === Ry;
          for (let dB = qy[1]; dB < YT[qy[0]] && !yB; dB++) NB[YT[dB][qy[1]]] && dT(YT[dB][qy[2]], qy[119]);
          const pB = jB > zB;
          BB[qy[22]] = qy[17], zB === qy[1] && (UB > qy[1] ? BB[qy[22]] = wB[qy[1]] : rB ? BB[qy[22]] = "fp" : pB || (BB[qy[22]] = NB[gT] ? qy[164] : NB[oT] ? qy[147] : qy[17]));
          for (let dB = qy[1]; dB < LT[qy[0]] && !yB; dB++) NB[LT[dB][qy[1]]] && dT(LT[dB][qy[2]], qy[119]);
          const lB = jB,
            JB = (qy[1], ry[qy[23]])(),
            YB = JB !== qy[17] && (qy[1], JT.l)(JB);
          YB && !yB && dT(JB, qy[54]), aB && dT("ix", qy[54]), sB && dT("il", qy[54]);
          for (let dB = qy[1]; dB < UB; dB++) dT(wB[dB], qy[119]);
          for (let dB = qy[1]; dB < OT[qy[0]]; dB++) NB[OT[dB][qy[1]]] && dT(OT[dB][qy[2]], qy[119]);
          NB[DT] && dT("mk:lk", qy[119]);
          const gB = ((...BB) => {
            BB[qy[0]] = qy[2];
            for (let TB = qy[1]; TB < HT[qy[0]]; TB++)
              if (BB[qy[1]] === HT[TB]) return HT[TB];
            return qy[17]
          })(NB[uT]);
          if (gB !== qy[17] && dT(gB, qy[119]), dB !== qy[17] && vB(dB.emitReplaced) === qy[119] && dT("mk:em", qy[119]), NT && dT("3s", qy[54]), EV.R && dT("3b", qy[54]), EB(), HB && dT("3d", qy[54]), yB && dT("3g", qy[54]), JB === qy[17] || YB || dT(JB, qy[54]), DB !== qy[17] && dT(DB, qy[54]), jB === qy[1]) return qy[17];
          if (BB[qy[22]] === qy[17] && xB[qy[1]] && !(qy[1], wy[qy[11]])(qB[qy[1]]))
            for (let dB = qy[2]; dB < lB; dB++)
              if (xB[dB] && (qy[1], wy[qy[11]])(qB[dB])) {
                const BB = qB[dB];
                for (let TB = dB; TB > qy[1]; TB--) jy(qB[TB] = qB[TB - qy[2]], xB[TB] = xB[TB - qy[2]]);
                jy(qB[qy[1]] = BB, xB[qy[1]] = qy[119]);
                break
              } if (jy(BB[qy[4]] = qy[1], BB[-qy[165]] = BB[qy[22]] === qy[17] ? qy[1] : lB), BB[-qy[165]] > qy[1] && JB !== qy[17] && YB && !yB) {
            for (let TB = BB[-qy[165]]; TB > qy[1]; TB--) jy(qB[TB] = qB[TB - qy[2]], xB[TB] = xB[TB - qy[2]]);
            jy(qB[qy[1]] = JB, xB[qy[1]] = qy[54], BB[qy[4]] = qy[2], BB[-qy[165]]++)
          }
          if (BB[qy[46]] = qy[1], AB++ % qy[4] === qy[2])
            for (let dB = qy[2]; dB < jB; dB++) VT(dB) < VT(BB[qy[46]]) && (BB[qy[46]] = dB);
          const kB = qB[BB[qy[46]]];
          (xB[BB[qy[46]]] ? eB : nB)[kB] = bB++;
          const LB = BB[qy[46]] >= BB[qy[4]] && BB[qy[46]] < BB[-qy[165]];
          if (!xB[BB[qy[46]]] || kB === BB[qy[22]] || BB[qy[46]] === qy[1] && !LB) return kB === qy[148] ? (qy[1], wy[qy[147]])(NB[kT], wy[qy[23]]) : kB;
          const OB = (BB[qy[21]] = BB[qy[22]]) !== qy[17] && BB[qy[21]] !== void qy[1] ? BB[qy[21]] : qB[qy[1]];
          return OB !== BT && jy(BT = OB, TT = (qy[1], EV[qy[130]])(qy[17])), TT[kB] ??= (qy[1], wy[qy[66]])(kB, OB)
        }
      };
      let RT = cT[qy[151]][qy[166]];
      const aT = () => sT !== cT[qy[151]][qy[166]] ? sT : RT;
      let ZT = qy[1],
        XT = qy[4],
        WT = qy[1],
        hT = qy[1];
      return {
        checks: QT,
        checkEvent: (...BB) => {
          BB[qy[0]] = qy[2];
          try {
            const TB = yB[fT];
            if (typeof TB === qy[140] + qy[141] && !(BB[qy[1]] instanceof TB) && !(qy[1], EV.A)(BB[qy[1]])) return sT = cT[qy[151]].NotEvent, qy[1];
            if (BB[qy[1]].isTrusted === qy[54]) return qy[1];
            let dB = qy[1];
            for (const VB in BB[qy[1]]) dB++;
            return dB < qy[26] ? (sT = cT[qy[151]]["FewPropertie" + qy[152]], qy[1]) : zT()
          } catch {}
          return qy[1]
        },
        checkPadCall: () => {
          try {
            return zT()
          } catch {
            return qy[1]
          }
        },
        usedProp: aT,
        watchHeld: (...BB) => {
          jy(BB[qy[0]] = qy[4], BB[qy[168]] = qy[16]);
          const TB = mB((() => {
            BB[qy[168]] = BB[qy[2]]()
          }));
          ST[PT++] = [BB[qy[1]], () => !TB || BB[qy[2]]() !== BB[qy[168]]]
        },
        dL: (...BB) => {
          BB[qy[0]] = qy[1];
          const TB = RB();
          return (BB => {
            let TB = qy[16],
              VB = qy[16];
            if (dB !== qy[17]) {
              const BB = vB(dB.Sl),
                yB = "v3" === BB ? qy[5] : "v5" === BB ? qy[58] : "v6" === BB ? qy[30] : qy[4];
              yB !== qy[4] && (XT = yB);
              const pB = vB(dB["inbuil" + qy[170] + qy[171]]);
              typeof pB === qy[161] && pB >= qy[1] && pB <= qy[12] && (pB | qy[1]) === pB && (WT = pB), jy(TB = vB(dB.reflectApplyHit), VB = vB(dB.definerHit))
            }
            const yB = BB ? qy[50] : "11" === VB ? qy[12] : "13" === VB ? qy[167] : TB !== qy[16] && TB !== qy[17] ? qy[4] : "10" === VB ? qy[26] : "12" === VB ? qy[31] : qy[1];
            yB !== qy[1] && (hT = yB)
          })(TB), ZT++ % 10 === qy[1] && (tT(), Qy((() => !Py(yB[pB][qy[162]][qy[162]](), oB))) && (RT = RT === cT[qy[151]][qy[169]] ? cT[qy[151]][qy[169]] : cT[qy[151]].Fr), Qy((() => !Py(yB[pB][qy[162]](), oB))) && (RT = cT[qy[151]][qy[169]])), {
            flags: TB ? cT[qy[46]].Butto : qy[1],
            values: [
              [cT[qy[8]].PhysicsVersion, XT],
              [cT[qy[8]]["Inbuil" + qy[170] + qy[171]], WT],
              [cT[qy[8]]["AltCom" + qy[172]], hT],
              [cT[qy[8]]["ProbeUsedPro" + qy[173]], aT()]
            ]
          }
        }
      }
    };
    const Ay = "[bloxd-wasm-client]",
      by = "bloxdWasmDownloadFailed",
      ny = xT.e,
      ey = "boot",
      Bp = "playSources",
      Tp = "wasmBuild",
      dp = "bloxd-wasm-joined",
      Vp = "bloxd-wasm-first-view",
      yp = "bloxd-wasm-playable-legacy",
      pp = 1048576,
      lp = 8 * pp,
      Jp = 8,
      Yp = 1006,
      gp = 1e3,
      op = "You lost connection to the server.",
      kp = "general:lostConnection",
      Lp = 1048576,
      Op = 5e3,
      Dp = 100,
      Hp = [2e3, 1e4, 3e4],
      Ep = 3e4;
    let vp = null,
      mp = null,
      ip = !1,
      Np = !1,
      tp = !1,
      fp = null,
      sp = null,
      Mp = null,
      zp = null,
      wp = null,
      Up = null,
      Fp = null;
    const Kp = new class {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = BB, this.soundOn = TB, this.now = dB, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var BB;
        null === (BB = this.player) || void 0 === BB || BB.prepare()
      }
      preload(BB) {
        var TB;
        this.stopped || (null === (TB = this.player) || void 0 === TB || TB.preload(BB))
      }
      cancelPreload() {
        var BB;
        null === (BB = this.player) || void 0 === BB || BB.cancelPreload()
      }
      load(BB) {
        if (null !== this.player || this.stopped) return;
        this.player = BB, BB.setMaster(this.master, this.soundOn);
        const TB = this.now(),
          dB = this.local;
        this.local = [];
        for (const yB of dB)
          if (!(yB.stopped || !yB.loop && TB - yB.at >= 300)) try {
            this.start(yB, BB, TB)
          } catch (VB) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", VB)
          }
      }
      start(BB, TB, dB) {
        const {
          name: VB,
          pos: yB,
          ear: pB,
          maxHearDist: lB,
          refDistance: JB,
          loop: YB,
          fade: gB
        } = BB, oB = TB.playGame(VB, FT(BB, dB), yB, pB, lB, JB, YB);
        if (BB.sound = oB, 1 !== BB.rate && oB.rate(BB.rate), null !== BB.panner && oB.setPannerAttr(BB.panner), null !== BB.moved && oB.setPosition(BB.moved), null !== gB && dB - gB.at < gB.ms) {
          const TB = UT(this.master);
          TB > 0 ? oB.fade(0, BB.volume * TB, gB.at + gB.ms - dB) : oB.setRelativeVolume(BB.volume)
        }
      }
      onAudioEvent(BB, TB, dB, VB) {
        var yB, pB;
        return null === (yB = null === (pB = this.player) || void 0 === pB ? void 0 : pB.onAudioEvent(BB, TB, dB, VB)) || void 0 === yB || yB
      }
      applyListener(BB) {
        var TB;
        null === (TB = this.player) || void 0 === TB || TB.applyListener(BB)
      }
      playGame(BB, TB, dB, VB, yB, pB, lB) {
        if (this.stopped) return wT.e;
        if (this.player) return this.player.playGame(BB, TB, dB, VB, yB, pB, lB);
        const JB = this.now();
        this.local = this.local.filter((BB => !BB.stopped && (BB.loop || JB - BB.at < 300)));
        const YB = {
          name: BB,
          volume: UT(TB),
          fade: null,
          pos: dB && [dB[0], dB[1], dB[2]],
          ear: VB && [VB[0], VB[1], VB[2]],
          maxHearDist: yB,
          refDistance: pB,
          loop: lB,
          rate: 1,
          panner: null,
          moved: null,
          at: JB,
          stopped: !1,
          sound: null
        };
        this.local.push(YB);
        const gB = {
          stop: () => {
            var BB;
            return YB.stopped = !0, null === (BB = YB.sound) || void 0 === BB || BB.stop(), gB
          },
          fade: (BB, TB, dB) => {
            if (YB.sound) return YB.sound.fade(BB, TB, dB), gB;
            const VB = UT(this.master),
              yB = UT(VB > 0 ? TB / VB : TB > 0 ? YB.volume : 0),
              pB = this.now(),
              lB = FT(YB, pB);
            return YB.volume = yB, YB.fade = dB > 0 && lB !== yB ? {
              from: lB,
              at: pB,
              ms: dB
            } : null, gB
          },
          rate: BB => (YB.sound ? YB.sound.rate(BB) : YB.rate = BB, gB),
          getVolume: () => YB.sound ? YB.sound.getVolume() : YB.volume * UT(this.master),
          getRelativeVolume: () => YB.sound ? YB.sound.getRelativeVolume() : YB.volume,
          setRelativeVolume: BB => (YB.sound ? YB.sound.setRelativeVolume(BB) : (YB.volume = UT(BB), YB.fade = null), gB),
          setPannerAttr: BB => (YB.sound ? YB.sound.setPannerAttr(BB) : YB.panner = {
            ...BB
          }, gB),
          setPosition: BB => (YB.sound ? YB.sound.setPosition(BB) : YB.moved = [BB[0], BB[1], BB[2]], gB)
        };
        return gB
      }
      setMaster(BB, TB) {
        var dB;
        this.master = BB, this.soundOn = TB, null === (dB = this.player) || void 0 === dB || dB.setMaster(BB, TB)
      }
      stop() {
        var BB;
        this.stopped = !0, null === (BB = this.player) || void 0 === BB || BB.stopAll();
        for (const TB of this.local) TB.stopped = !0;
        this.local = []
      }
    }((0, vT.d)(), !0);
    let rp = {
        wasm: "unknown",
        client: String(eB.b)
      },
      Ip = null,
      cp = () => {};
    const Sp = new Promise((BB => {
      cp = BB
    }));
    let Pp = () => {};
    const Qp = new Promise((BB => {
      Pp = BB
    }));
    let Rp, ap = null,
      Zp = null,
      Xp = null,
      Wp = null,
      hp = null,
      Cp = null,
      Gp = null,
      qp = null,
      xp = null,
      jp = null,
      Ap = null,
      bp = null,
      np = null,
      ep = null,
      Bl = null,
      Tl = null,
      dl = null,
      Vl = null,
      yl = !1,
      pl = null;
    const ll = new Set,
      Jl = new Set;

    function Yl(BB) {
      if (!ll.has(BB)) {
        ll.add(BB);
        for (const dB of Jl) try {
          dB(BB)
        } catch (TB) {
          console.error(`${Ay} a startup listener threw`, TB)
        }
      }
    }

    function gl(BB) {
      yl = !0, BB.isStopped || Yl("texturesIn")
    }
    let ol = 1,
      kl = -1 / 0,
      Ll = !1,
      Ol = !1,
      Dl = 0,
      ul = null,
      Hl = !1;
    const El = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let vl = 0,
      ml = 0,
      il = null,
      Nl = null,
      tl = null,
      fl = null;
    const sl = new WeakMap;
    let Ml = null,
      zl = null,
      wl = null,
      Ul = null,
      Fl = null,
      Kl = null,
      rl = null,
      Il = 0,
      cl = null,
      Sl = null,
      Pl = null,
      Ql = null,
      Rl = -1 / 0,
      al = null;
    const Zl = new Set;
    let Xl = !1,
      Wl = null;
    const hl = new Map,
      Cl = new Set;
    let Gl = !1;
    const ql = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let xl = null,
      jl = () => [0, 0],
      Al = () => {},
      bl = () => {},
      nl = null,
      el = null;
    const BJ = new class {
      constructor(BB) {
        this.reached = BB, this.next = 1
      }
      observe(BB) {
        if (!(BB < this.next)) {
          for (; this.next <= BB;) this.next *= 2;
          this.reached(BB)
        }
      }
    }((BB => {
      console.warn(`${Ay} chunk cancels from the server this session: ${BB}`)
    }));
    let TJ = 1,
      dJ = null,
      VJ = null,
      yJ = null,
      pJ = null,
      lJ = !1,
      JJ = !1,
      YJ = !1,
      gJ = null,
      oJ = !1,
      kJ = !1,
      LJ = !0,
      OJ = null,
      DJ = !1,
      uJ = !1,
      HJ = !1;

    function EJ() {
      return Mp ??= Promise.all([dB.e(200), dB.e(129), dB.e(52)]).then((() => dB(42006))).then((BB => (sp = BB, Object.assign(globalThis, {
        bloxdPreviewPage: BB.pagePreviews()
      }), BB)), (BB => {
        throw Mp = null, BB
      })), Mp
    }

    function vJ() {
      return fp ??= dB.e(50).then((() => dB(42021))).catch((BB => {
        throw fp = null, new iB.c(BB)
      })), fp
    }
    class mJ {
      constructor() {
        this.host = null
      }
      open(BB) {
        return null !== this.host ? BB(this.host) : EJ().then((TB => (this.host ??= new TB.WasmPreviewHost(TB.pagePreviews()), BB(this.host))))
      }
      openMob(BB) {
        return this.open((TB => TB.openMob(BB)))
      }
      openPet(BB) {
        return this.open((TB => TB.openPet(BB)))
      }
      openMobLineup(BB) {
        return this.open((TB => TB.openMobLineup(BB)))
      }
      openCharacter(BB, TB) {
        return this.open((dB => dB.openCharacter(BB, TB)))
      }
    }

    function iJ() {
      tp || (tp = !0, GV.e.setHost(new mJ), (0, Ld.m)(), XV.f.setFollower(fY), Object.assign(globalThis, {
        bloxdPreviews: GV.e
      }))
    }

    function NJ() {
      EJ().then((BB => {
        BB.pagePreviews().prefetch()
      }), (() => {}))
    }

    function tJ() {
      let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Np) return;
      Np = !0, kJ = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), LJ = !kJ, console.info(`${Ay} starting`), ip || (ip = !0, (0, zT.F)(new fT(XJ, AJ)), (0, kB.o)(new sT), (0, zT.B)(new MT), (0, zT.w)()), iJ(), (0, Ed.setCrashScreen)((BB => {
        let {
          text: TB,
          reload: dB
        } = BB;
        ! function(BB, TB) {
          var dB, VB;
          if (DJ) return;
          DJ = !0, (0, Dd.f)(), null === (dB = al) || void 0 === dB || dB.abort(), al = null, WV.e.release();
          const yB = kJ ? null !== (VB = BB.cancel) && void 0 !== VB ? VB : "general:back" : null;
          oV({
            ...BB,
            cancel: yB
          }).then((BB => {
            BB && TB && uJ ? (0, XB.e)(gT.r) : BB && TB ? (0, XB.i)() : kJ && (0, XB.d)("/")
          }))
        }(TB, dB)
      })), (0, IV.k)(), (0, ET.c)();
      let TB = null;
      try {
        TB = Gy("xhg5eh0mljb", (() => {
          var BB, TB;
          return null !== (BB = null === (TB = ap) || void 0 === TB ? void 0 : TB.ws) && void 0 !== BB ? BB : null
        }), BB, "psfjvqclxy")
      } catch (yB) {
        console.error(`${Ay} probes`, yB)
      }
      const VB = function() {
        const BB = (0, DV.n)(),
          TB = (0, DV.j)();
        let dB = !1;
        return VB => {
          BB && !dB && (dB = !0, (0, Ed.reportStaleBuildReload)(BB, TB, VB))
        }
      }();
      MY(), kJ || function() {
        const BB = function(BB) {
          var TB;
          const dB = new URLSearchParams(BB),
            VB = dB.get("game");
          return VB ? {
            game: VB,
            lobby: null !== (TB = dB.get("lobby")) && void 0 !== TB ? TB : null
          } : null
        }(window.location.search);
        if (BB) return (0, BT.j)(BB.game) && MY().request(), void MJ(BB.game, BB.lobby);
        const TB = new URLSearchParams(window.location.search).get("ws");
        if (!TB) return;
        Sp.then((BB => {
          BB && async function(BB, TB) {
            try {
              await (0, iB.k)(BB), zl = TY(new WebSocket(TB)), null !== zl && WV.e.setGame(null), fJ()
            } catch (yB) {
              console.error(`${Ay} ?ws=${TB} did not attach`, yB)
            }
          }(BB, TB)
        }))
      }(), async function(BB) {
        var TB, VB, pB, lB, JB;
        if ("undefined" === typeof WebAssembly) return HY("noWebAssembly", "This browser has no WebAssembly"), null;
        const gB = await (0, nV.L)();
        if ((0, Ed.setCrashBackend)((0, xT.C)(gB) ? "unsupported" : null !== (TB = null === gB || void 0 === gB ? void 0 : gB.backend) && void 0 !== TB ? TB : "none"), (0, xT.C)(gB)) return HY("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${gB.missing.join(", ")}`, {
          missing: gB.missing.join(",")
        }), null;
        if ((0, ty.n)("render")) try {
          const {
            startRenderDebug: BB
          } = await dB.e(44).then((() => dB(4089)));
          BB(gB)
        } catch (mT) {
          console.warn("The render debug topic didn't load", mT)
        }
        const oB = null !== gB && EY() ? (0, kV.e)(gB) : null;
        if (null !== gB && null !== oB) return (0, Ed.reportGpuFallback)(oB, gB.backend), (0, gT.m)(oB), vY(`the wasm client's renderer plays this GPU (${oB}) on ${gB.backend} worse than the JS client`, "gpu"), null;
        const kB = null !== (VB = null === gB || void 0 === gB ? void 0 : gB.backend) && void 0 !== VB ? VB : null;
        ql.adapter = null !== (pB = null === gB || void 0 === gB ? void 0 : gB.adapter) && void 0 !== pB ? pB : null, ql.boundAtMs = null, ql.indirectHangs = null;
        const LB = !(0, xT.mb)();
        null !== gB && "none" !== gB.reason && console.info(`${Ay} drawing with ${gB.backend}: ${gB.reason}`);
        const OB = (0, nV.E)();
        Pp(!0), (0, iB.w)((BB => {
          try {
            null !== kB && (nl = BB.startSkyFeed, iY(), function(BB) {
              var TB, dB;
              jl = BB.rasterText, Ul = BB.setTextLocalPlayer, BB.setTextLocalPlayer(null !== (TB = null === (dB = wl) || void 0 === dB ? void 0 : dB.info.playerDbId) && void 0 !== TB ? TB : null), Al = BB.drainTextRerasters, bl = BB.loadTextIcons, BB.warmText((() => lJ)), BB.textChanged(), lJ && setTimeout(bl, 0)
            }(BB), el = BB.startShellAnalytics, rY())
          } finally {
            HJ || (yJ = BB.followMenuPrefs({
              setSoundPrefs: nJ,
              setEnvPrefs: eJ,
              setUiPrefs: bJ,
              setLookPrefs: BY
            }))
          }
        })), (0, iB.m)(Kp).catch((BB => {
          console.warn(`${Ay} the game code did not load: a join asks again`, BB)
        }));
        const DB = (0, nV.i)(gB);
        let uB, HB;
        DB.catch((() => {})), "loading" === (0, VT.C)() && Ly();
        try {
          uB = function(BB) {
            const TB = null !== BB && void 0 !== BB ? BB : document.createElement("canvas");
            TB.id = "wasm-game-canvas", (0, yy.k)();
            const dB = (0, ad.f)(),
              VB = (0, ad.g)(dB);
            return TB.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, Vy.e)(TB, VB), (0, ad.d)(TB, dB), TB.width = VB.bufferWidth, TB.height = VB.bufferHeight, WJ(TB, LJ), OJ = TB, document.body.append(TB), TB
          }(null === kB ? null : await (await EJ()).pagePreviews().beginSession())
        } catch (yB) {
          return await pg({
            site: Tp,
            error: yB
          }, (() => {
            (0, Ed.showUnsupported)((0, JV.l)("fetch"), sy.e.fetch, `the previews did not load: ${String(yB)}`)
          })), null
        }
        Ly();
        try {
          HB = await DB
        } catch (yB) {
          return await pg({
            site: Tp,
            error: yB
          }, (() => {
            (0, Ed.showUnsupported)((0, JV.l)("fetch"), sy.e.fetch, `the ${null!==kB&&void 0!==kB?kB:"client"} build did not load: ${String(yB)}`)
          })), null
        }
        const EB = (0, nV.d)(),
          vB = !EB && !0 !== Hd.m.getItem(by),
          NB = !EB && "loading" === (0, VT.C)();
        await (0, yT.h)(HB, YT.i, {
          reloadFailedDownload: vB
        }), NB && !(0, VT.R)() && await (0, yT.h)(HB, YT.i, {
          reloadFailedDownload: vB
        });
        gy = performance.now();
        const tB = rp;
        if (!(0, VT.R)()) {
          (0, VT.O)() && Hd.m.setItem(by, !0);
          const BB = (0, VT.t)();
          if ("call" === BB) bY({
            site: jT.w,
            error: (0, VT.s)(),
            header: null
          }, tB);
          else {
            const TB = null !== BB && void 0 !== BB ? BB : "instantiate",
              dB = () => {
                (0, Ed.showUnsupported)((0, JV.l)(TB), sy.e[TB], (0, VT.k)())
              };
            if ("compile" !== BB && "instantiate" !== BB || !EY())
              if ("fetch" === TB) {
                const BB = [HB.url().href, YT.i.url().href];
                await pg({
                  site: Tp,
                  error: (0, VT.k)(),
                  urls: BB
                }, dB)
              } else dB();
            else {
              const TB = (0, VT.k)(),
                dB = (0, PT.i)((0, VT.s)());
              (0, Ed.reportCountedLoadFallback)((0, JV.l)(BB), sy.e[BB], TB, dB), vY(`the wasm client did not ${BB} here (${TB})`, dB ? "oom" : null)
            }
          }
          return null
        }(0, pT.R)(HB.url()) && (0, Ed.reportUnstreamedCoreLoad)();
        const fB = (0, VT.E)();
        let sB, MB = tB;
        try {
          MB = {
            ...tB,
            wasm: fB.wk()
          };
          const {
            iH: BB
          } = HB.JD, TB = BB.vVB();
          if (TB !== cT.s) return bY({
            site: jT.d,
            error: `core ABI ${TB}, page ABI ${cT.s}`,
            header: null
          }, MB), null;
          const [dB, VB] = (0, cT.fe)();
          sB = new BB(dB, VB)
        } catch (yB) {
          return bY({
            site: jT.d,
            error: yB,
            header: null
          }, MB), null
        }
        rp = MB, Ip = HB.JD;
        const zB = new jT.j(sB, VT.y, {
          onCrash: BB => {
            LB && function(BB, TB, dB) {
              if ("webgpu" !== TB || (0, nV.c)()) return !1;
              const VB = function(BB) {
                if (BB.site === jT.h && (0, xT.G)(BB.error)) return "frames_refused";
                return BB.site === ny && (0, xT.I)(BB.error) ? "start_failed" : null
              }(BB);
              if (null === VB || !(0, xT.jb)(VB)) return !1;
              return (0, Ed.reportRenderReload)("webgpu", "start_failed" === VB ? 0 : 1, dB, {
                cause: VB,
                error: BB.error,
                context: ql
              }), QY(), !0
            }(BB, kB, MB) || bY(BB, MB)
          },
          onNetEvent: PY,
          onReconnectGrace: LY,
          onCoreErrors: (BB, TB) => {
            var dB;
            BB.some((BB => {
              let {
                code: TB
              } = BB;
              return TB === cT.B.RenderDeviceLost
            })) && (0, nV.z)(), (0, Ed.reportCoreErrors)(BB, TB, MB, ((BB, TB) => {
              var dB;
              return null === (dB = xl) || void 0 === dB ? void 0 : dB.mVB(BB, TB)
            })), null === (dB = pl) || void 0 === dB || dB.coreErrors(BB)
          },
          onRenderReload: (BB, TB, dB) => {
            ! function(BB, TB, dB, VB, yB, pB) {
              if ((0, nV.c)()) return;
              const lB = TB === cT.Rc.WEBGPU,
                JB = VB === cT.Rc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                YB = (0, xT.lb)(xl),
                gB = lB ? (0, xT.fb)(JB, yB) : null;
              if (null !== gB) {
                const TB = void 0 === YB ? "" : ` (${YB.message})`;
                return void BB.crash(Ed.RENDER_RELOAD_SITE, new Error(`${(0,Ed.renderReloadMessage)("webgpu",JB,dB)} and ${gB}${TB}`))
              }
              const oB = lB ? "webgpu" : "webgl1" === pB ? "webgl1" : "webgl";
              "lost" === JB && (0, nV.z)();
              (0, Ed.reportRenderReload)(oB, dB, rp, {
                cause: JB,
                error: YB,
                context: ql
              }), QY()
            }(zB, BB, TB, dB, LB, kB)
          },
          onEnvEvent: BB => {
            var TB;
            BB.kind === cT.K.SkyImages && (null === (TB = Tl) || void 0 === TB || TB.onEvent(BB.payload))
          },
          onImages: BB => {
            var TB;
            null === (TB = dl) || void 0 === TB || TB.onEvent(BB)
          },
          onModelRequest: BB => {
            var TB;
            null === (TB = np) || void 0 === TB || TB.request(BB)
          },
          onModelTaken: (BB, TB) => {
            var dB;
            null === (dB = np) || void 0 === dB || dB.taken(BB, TB)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(BB, TB) {
                const dB = Fp;
                if (null === dB || BB.isStopped) return;
                dB.restore((BB => {
                  (0, Ed.reportTerrainTextureFailure)(BB, TB)
                })).then((TB => {
                  !1 !== TB || BB.isStopped ? !0 === TB && console.info(`${Ay} terrain textures handed over again after the renderer lost them`) : console.warn(`${Ay} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(zB, MB)
            }))
          },
          onKeepAlive: BB => {
            const TB = null === fl ? void 0 : sl.get(fl);
            void 0 !== TB && mV(TB, BB)
          }
        });
        if (zp = zB, null !== BB) {
          zB.setAntiCheatProbes(Zy(VT.y, BB.checks)), BB.watchHeld(Wy.CoreFrame, (() => zB.frame)), BB.watchHeld(Wy.GlueFrame, (() => sB.frame));
          const TB = Cy(BB, ((BB, TB, dB) => {
            let VB = !1;
            return Tg(zB, (() => {
              VB = zB.rings.input.writeRecord(cT.pb.AntiCheat, BB, TB, dB, 0)
            })), VB
          }));
          zB.isStopped ? TB.stop() : Ap = TB
        }
        vp = (BB, TB, dB) => zB.rings.cmd.writeCmd(BB, TB, dB), mp = BB => zB.rings.cmd.growForCmd(BB), Hl = !1, iY(), (0, iB.y)(zB, {
          core: sB,
          memory: VT.y,
          staleOr: (BB, TB, dB) => pg({
            site: BB,
            error: TB
          }, dB),
          reportReplayFault: (BB, TB) => {
            (0, Ed.reportReplayFault)(BB, TB, rp)
          },
          audio: Kp,
          options: oT.c,
          onNetEvent: PY,
          sessionInfo: BB => {
            var TB;
            return (null === (TB = wl) || void 0 === TB ? void 0 : TB.conn) === BB ? wl.info : null
          },
          onEventOverflow: aJ,
          replayShaderPack: BB => {
            var TB;
            null === (TB = pl) || void 0 === TB || TB.replay(BB)
          },
          hasPackModel: BB => {
            var TB, dB;
            return null !== (null !== (TB = null === (dB = NY()) || void 0 === dB ? void 0 : dB.modelUrl(BB)) && void 0 !== TB ? TB : null)
          },
          beforeWrite: () => (!Ll && zB.rings.net.cursor > 0 && ZY(zB, !1, "all"), !zB.isStopped),
          beforeOp: () => (!Ll && zB.netWrittenSinceFrame > 0 && ZY(zB, !1, "budget"), !zB.isStopped)
        }), (0, mB.K)({
          lockPointer: () => {
            if (!Kd(uB)) return !1;
            try {
              Promise.resolve(uB.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, vd.b)()
          },
          leaveGame: () => {
            RJ()
          },
          canvas: () => uB
        }), bp = (0, mB.w)((() => {
          var BB;
          const TB = (0, iB.i)();
          null === (BB = (0, iB.t)()) || void 0 === BB || BB.followCursorAim(!0 === (null === TB || void 0 === TB ? void 0 : TB.isSessionLive) ? TB : null)
        })), il && zB.setUiPrefs(il);
        Nl && zB.setEnvPrefs(Nl);
        tl && zB.setLookPrefs(tl);
        const wB = Ty ? dy(Ty.preventMovement) : null;
        wB && jJ(wB);
        const UB = (0, gd.i)(),
          FB = (0, gd.d)(zB, UB);
        xp = UB.basis, (0, ud.g)(null === FB ? null : (0, Yd.m)(FB)), qp = FB;
        const KB = (0, lT.c)();
        let rB = 1 / 0,
          IB = !0,
          cB = UB.shedFootprintBytes;
        const SB = new rV.d(KB, (() => sB.MH()), (BB => {
          zB.crash(jT.n, BB)
        }));
        Cp = SB, Gp = SB, null !== FB && SB.setCeiling(Math.min((0, rV.m)(FB), rB));
        if (IB) {
          SB.setShed((BB => {
            const TB = zB.shedMemory("joinReserve" !== BB);
            return null !== TB && (null === qp || TB < qp) && (qp = TB, (0, ud.g)((0, Yd.m)(TB))), TB
          }), ((BB, TB, dB) => {
            1 === TB ? (0, Ed.reportMemoryShed)(BB, dB, rp) : console.warn(`${Ay} wasm memory: shed again (${BB}): shed ${TB}`, dB.wasmMemoryShed)
          }), (() => zB.addDistanceInUse()));
          const BB = (0, xT.Z)(fB);
          SB.setFootprint(new Ny(cB, {
            storedChunks: () => sB.iVB(),
            gpuBytes: () => {
              var TB;
              return null !== (TB = null === BB || void 0 === BB ? void 0 : BB.NVB()) && void 0 !== TB ? TB : 0
            },
            jsHeapBytes: iy
          }))
        }
        window.addEventListener("pagehide", (() => {
          Cp === SB && (SB.refreshStats(), Bg(SB))
        })), window.addEventListener("pagehide", RY), window.addEventListener("pagehide", aY), !1;
        const [PB, QB] = (0, kd.d)();
        pJ = (0, Od.g)((BB => zB.setChunkAddDistance(BB.horizontal, BB.vertical)), {
          horizontal: PB,
          vertical: QB
        }), zB.setAmbientOcclusion(!0 !== Hd.j.getItem("disableAmbientOcclusion")), zB.setPoseLod(!0 !== Hd.j.getItem(dT.O)), (0, ty.n)("look") && (zB.setLookDebug(!0), (0, fy.j)("wasm", (() => zB.takeLookDebug())));
        const RB = function(BB, TB, dB, VB) {
          const yB = new Ad,
            pB = BB => Hd.j.getItem(BB);
          yB.sync(pB, TB), (0, NT.V)();
          const lB = (0, YB.i)("customBindingsChanged", (() => {
            yB.sync(pB, TB)
          }));
          (0, md.o)(TB);
          const JB = new Set,
            gB = (0, mB.w)((() => {
              var BB;
              JB.size > 0 && BV() && !0 === (null === (BB = (0, iB.i)()) || void 0 === BB ? void 0 : BB.localPlayerAlive()) && YB.h.yH("usedKeyboard")
            })),
            oB = Zd.b.heldSizer((() => (0, ad.i)(BB))),
            kB = Rd(BB, TB, {
              prevents: BB => yB.prevents(BB),
              keyPressed: BB => {
                yB.moves(BB) && (JB.add(BB), BV() && YB.h.yH("usedKeyboard"))
              },
              keyReleased: BB => {
                JB.delete(BB)
              },
              keysReleased: () => {
                JB.clear()
              },
              resized: () => {
                nd.e.measure(), (0, Xd.l)()
              },
              sizeCanvas: oB,
              watchRenderScale: TB => {
                const dB = (0, ad.m)(BB, TB),
                  VB = Zd.b.onRelease(TB);
                return () => {
                  dB(), VB()
                }
              },
              touchStarting: () => {
                nd.e.measure()
              },
              viewShown: dB,
              touchUiShown: () => WB.d.get("isTouchScreen"),
              ctrlCombosAreGames: BV,
              inspect: (BB, TB, dB) => {
                yB.checks(TB, dB) && VB(BB)
              },
              canLock: () => Kd(BB)
            }),
            LB = (0, Bd.c)(TB);
          return () => {
            lB(), gB(), (0, md.o)(null), LB(), kB()
          }
        }(uB, ((BB, TB, dB, VB, yB) => {
          var pB;
          Tg(zB, (() => {
            zB.rings.input.writeRecord(BB, TB, dB, VB, yB)
          })), null === (pB = Ap) || void 0 === pB || pB.onInput(BB), !Ol && (0, pV.d)(BB, yB) && (0, pV.c)((() => {
            zp !== zB || HJ || zB.isStopped || !GY() || ZY(zB, !1, "budget", !1)
          }))
        }), (() => LJ), (BB => {
          var TB;
          null === (TB = Ap) || void 0 === TB || TB.onEvent(BB)
        }));
        if (zB.isStopped) return RB(), null;
        Zp = RB;
        const aB = () => !zB.isStopped && !DJ;
        if (zB.isStopped) return null;
        (0, VT.W)((() => {
          "call" === (0, VT.t)() && zB.crash(jT.w, (0, VT.s)())
        }));
        const hB = (0, jT.R)(zB.rings.worker, (() => {
          ZY(zB, !1, "budget")
        }));
        Xp = function(BB, TB) {
          return dg().then((BB => {
            let {
              prefetchWorldgenWorker: TB
            } = BB;
            TB()
          }), (() => {})), new zy({
            module: (0, VT.z)(),
            decodeSettings: BB => {
              const TB = (0, iB.t)();
              if (null === TB) throw new Error("no game code to decode the world-gen seed with");
              return TB.decodeMapSettings(BB)
            },
            loadWorker: Vg,
            onMapWithoutWorldgen: () => {
              yg((BB => {
                let {
                  stopWorldgenWorkerPrefetch: TB
                } = BB;
                TB()
              }))
            },
            onLoadFailed: BB => {
              (0, Ed.reportWorldgenLoadFailure)(BB, rp)
            },
            onWorkerLost: BB => {
              (0, Ed.reportWorkerLost)(jT.F, BB, rp)
            },
            onStartTimeout: BB => {
              (0, Ed.reportWorkerStartTimeout)(jT.F, BB, rp)
            },
            onGaveUp: BB => {
              (0, Ed.reportWorldgenGaveUp)(BB, rp)
            },
            onMemoryStats: BB => {
              var TB;
              null === (TB = Cp) || void 0 === TB || TB.noteWorldgen(BB)
            },
            onMemoryGone: () => {
              var BB;
              null === (BB = Cp) || void 0 === BB || BB.worldgenGone()
            },
            write: (dB, VB, yB, pB, lB) => {
              Tg(BB, (() => {
                BB.rings.worker.writeWorkerRecord(dB, VB, yB, 0, pB, lB) || BB.crash(jT.F, `a world-gen record of kind ${VB} did not fit the worker-in ring`)
              })), TB()
            }
          })
        }(zB, hB), hp = function(BB, TB) {
          return new FV({
            module: (0, VT.z)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: BB
              }, TB] = await Promise.all([dB.e(37).then((() => dB(42067))), Promise.resolve().then((() => dB(95))).then((BB => {
                let {
                  isMobile: TB
                } = BB;
                return TB()
              }), (() => !1))]);
              return {
                create: BB,
                count: (0, HT.e)(navigator.hardwareConcurrency, TB)
              }
            },
            write: (dB, VB, yB, pB, lB, JB) => {
              (0, Xd.h)(), Tg(BB, (() => {
                BB.rings.worker.writeWorkerRecord(dB, VB, yB, pB, lB, JB) || BB.crash(jT.q, `a meshing record of kind ${VB} did not fit the worker-in ring`)
              })), TB()
            },
            onWorkerLost: BB => {
              (0, Ed.reportWorkerLost)(jT.q, BB, rp)
            },
            onStartTimeout: BB => {
              (0, Ed.reportWorkerStartTimeout)(jT.q, BB, rp)
            },
            onMemoryStats: (BB, TB) => {
              var dB;
              null === (dB = Cp) || void 0 === dB || dB.noteMeshWorker(BB, TB)
            },
            onMemoryGone: BB => {
              var TB;
              null === (TB = Cp) || void 0 === TB || TB.meshWorkerGone(BB)
            },
            fail: (TB, dB) => {
              const VB = () => {
                BB.crash(jT.q, void 0 === dB ? TB : new Error(TB, {
                  cause: dB
                }))
              };
              void 0 !== dB ? pg({
                site: jT.q,
                error: dB
              }, VB) : VB()
            }
          })
        }(zB, hB);
        const CB = (0, hV.r)(DT.clientSideServerUrls.staticUrl, {
            onTableFailed: BB => {
              pg({
                site: Ed.MODEL_FEED_SITE,
                error: BB
              }, (() => {}), aB)
            },
            packUrl: BB => {
              var TB, dB;
              return null !== (TB = null === (dB = NY()) || void 0 === dB ? void 0 : dB.modelUrl(BB)) && void 0 !== TB ? TB : null
            }
          }),
          GB = function(BB, TB, dB) {
            const VB = dB => {
              var VB, yB;
              return null !== (VB = null === (yB = TB()) || void 0 === yB ? void 0 : yB.drawnUrl(dB)) && void 0 !== VB ? VB : BB.url(dB)
            };
            return (0, XV.i)((0, cV.m)(VB), dB)
          }(CB, (() => np), NY),
          qB = new cV.d(GB, (BB => {
            console.warn(`${Ay} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
          }));
        dl = qB, Vl = new aV(zB, GB, ((BB, TB) => {
          void 0 === TB ? console.warn(`${Ay} ${BB}`) : sY(BB, TB)
        }));
        const xB = new ZV.g(CB, function(BB, TB) {
          let VB = !1,
            yB = null,
            pB = null;
          const lB = {
              onUnavailable: (dB, VB) => {
                pB ??= pg({
                  site: Ed.MODEL_POOL_SITE,
                  error: dB,
                  urls: VB
                }, (() => {
                  (0, Ed.reportModelPoolFailure)(dB, BB)
                }), TB)
              },
              onDecoderFailed: (dB, VB) => {
                const yB = () => {
                  (0, Ed.reportDracoDecoderFailure)(dB, BB)
                };
                void 0 !== VB ? pg({
                  site: Ed.MODEL_POOL_SITE,
                  error: dB,
                  urls: VB
                }, yB, TB) : yB()
              },
              onWorkerLost: TB => {
                (0, Ed.reportWorkerLost)(Ed.MODEL_POOL_SITE, TB, BB)
              }
            },
            JB = dB.e(39).then((() => dB(42074))).then((BB => {
              let {
                pageModelPool: TB
              } = BB;
              if (VB) return null;
              const dB = TB(lB);
              return yB = dB.unlisten, ep = dB.pool, dB.pool
            }), (BB => (VB || lB.onUnavailable(BB, void 0), null)));
          return Bl = () => {
            var BB;
            VB = !0, null === (BB = yB) || void 0 === BB || BB(), ep = null
          }, (BB, TB) => JB.then((dB => {
            var VB;
            return null !== (VB = null === dB || void 0 === dB ? void 0 : dB.build(BB, TB)) && void 0 !== VB ? VB : (0, CV.l)(BB, "the model workers did not load")
          })).then((BB => null !== pB && (0, CV.g)(BB) ? pB.then((() => BB)) : BB))
        }(MB, aB), (BB => {
          BB.startup ? (AY(), pg({
            site: Ed.MODEL_FEED_SITE,
            error: BB.error,
            urls: "" === BB.url ? void 0 : [BB.url]
          }, (() => {
            (0, Ed.reportModelFailure)(BB, MB)
          }))) : (0, Ed.reportModelFailure)(BB, MB)
        }), {
          onWritten: (BB, TB) => {
            qB.glbWritten(BB, TB)
          },
          onTaken: (BB, TB) => {
            qB.glbTaken(BB, TB)
          },
          onPackFileFailed: (BB, TB) => {
            console.warn(`${Ay} the texture pack's model file ${BB} failed: the shipped one loads`, TB)
          }
        });
        np = xB;
        const jB = new PV.f(zB);
        Fp = jB, jB.swap((BB => {
          const TB = () => {
            (0, Ed.reportTerrainTextureFailure)(BB, MB)
          };
          if (lJ) return void TB();
          const dB = () => !lJ,
            VB = null === BB.url ? void 0 : [BB.url];
          pg({
            site: jT.C,
            error: BB.error,
            urls: VB
          }, TB, dB)
        })).then((BB => {
          null !== BB && (BB || zB.isStopped || console.warn(`${Ay} the core refused the terrain textures: terrain draws untextured`), gl(zB))
        }));
        const AB = new rT(zB, ((BB, TB) => {
          console.warn(`${Ay} ${BB}`, ...void 0 === TB ? [] : [TB])
        }));
        AB.feed(), null !== kB && function(BB, TB, VB, yB, pB, lB) {
          let JB = null,
            YB = null,
            gB = !1;
          const oB = {
            textures: null,
            stop: () => {
              var BB, TB;
              gB = !0, null === (BB = YB) || void 0 === BB || BB(), null === (TB = JB) || void 0 === TB || TB(), WV.e.setSettled(null), null !== Ip && sJ.clear(Ip)
            }
          };
          Up = oB, YB = MY().follow((YB => {
            null !== YB && Promise.all([dB.e(179), dB.e(42)]).then((() => dB(42039))).then((dB => {
              let {
                PackTextures: kB
              } = dB;
              if (gB || BB.isStopped) return;
              const LB = new kB({
                feed: YB,
                terrain: TB,
                backend: VB,
                stopped: () => BB.isStopped,
                landed: () => {
                  gl(BB)
                },
                packSwapped: () => {
                  (0, XV.h)(yB), lB.feed((() => async function(BB) {
                    const TB = null === BB ? null : await BB.averageColours;
                    return null === TB ? IT() : KT(TB)
                  }(LB.assets))), tY(LB.iconOverrides()), pB.refresh().then((BB => {
                    null !== BB && console.info(`${Ay} texture pack models: ${BB.resent} of ${BB.delivered} files written again, ${BB.refetched} refetched`)
                  }))
                },
                settled: (BB, TB, dB) => {
                  var VB;
                  (WV.e.setSettled({
                    state: BB,
                    files: TB
                  }), null === BB.gameSource && (0, od.d)(BB.pack, dB), dB) || function(BB) {
                    const TB = Ip;
                    null !== TB && sJ.apply(TB, BB).then((TB => {
                      TB && BB && console.info(`${Ay} the texture pack's animations are in (${Object.keys(BB).length} files)`)
                    }))
                  }(null === (VB = BB.pack) || void 0 === VB ? void 0 : VB.animations)
                },
                settling: () => {
                  WV.e.setSettled(null)
                },
                warn: sY,
                maxTextureSize: () => Promise.resolve((0, xT.rb)(document.createElement("canvas")))
              });
              oB.textures = LB, JB = LB.start()
            }), (BB => {
              console.warn(`${Ay} the texture pack's terrain didn't load: the built atlas stays`, BB)
            }))
          }))
        }(zB, jB, kB, qB, xB, AB);
        const bB = () => {
            zB.setTextureLayers("")
          },
          nB = BB => {
            (OT ??= dB.e(46).then((() => dB(42076))).then((BB => {
              let {
                TEXTURE_NAMES: TB
              } = BB;
              return TB
            }), (BB => {
              throw OT = null, BB
            })), OT).then((BB => {
              zB.setTextureLayers(BB) || zB.isStopped || (console.warn(`${Ay} the core refused the texture names: textured Boxes draw textureNotFound`), bB())
            }), (TB => {
              if (zB.isStopped) return;
              const [dB, ...VB] = BB;
              void 0 === dB ? pg({
                site: Ed.TEXTURE_NAMES_SITE,
                error: TB
              }, (() => {
                console.warn(`${Ay} the texture names didn't load, so textured Boxes draw textureNotFound`, TB), bB()
              }), aB) : setTimeout((() => {
                nB(VB)
              }), dB)
            }))
          };
        if (nB(Hp), null !== kB && !await async function(BB, TB, dB, VB, pB, lB) {
            var JB;
            const YB = (0, xT.Z)(dB);
            if (null === YB) return BB.crash(ny, new Error(`this ${VB} build has no openRenderer`)), !1;
            let gB;
            xl = YB;
            try {
              var oB, kB, LB, OB;
              const yB = null !== (oB = null === (kB = sp) || void 0 === kB ? void 0 : kB.pagePreviews()) && void 0 !== oB ? oB : null,
                JB = null !== (LB = null === (OB = sp) || void 0 === OB ? void 0 : OB.previewModule(dB)) && void 0 !== LB ? LB : null;
              if (null === yB || null === JB) {
                null === yB || void 0 === yB || yB.endSession(!1), gB = (0, ad.f)().sampleCount, await (0, xT.l)(TB, YB, lB, mY, gB, await pB);
                const BB = (0, xT.y)(dB);
                null === BB && console.warn(`${Ay} this ${VB} build has no image registry: sky and model images won't show`), (0, SV.e)(BB)
              } else {
                (0, nV.c)() && await (0, XB.j)();
                const dB = (0, nV.H)();
                if (null !== dB) {
                  const TB = (0, xT.lb)(YB);
                  return BB.crash(Ed.RENDER_RELOAD_SITE, new Error(`${dB}${void 0===TB?"":` (${TB.message})`}`)), !1
                }
                gB = await yB.bindSession(JB, TB, (async BB => (0, xT.K)(YB, ny, lB, BB, mY, await pB)))
              }
            } catch (yB) {
              return BB.crash(ny, yB), !1
            }(function(BB, TB) {
              const dB = BB,
                {
                  requestCapture: VB,
                  takeCapture: yB
                } = dB;
              if ("function" !== typeof VB || "function" !== typeof yB) return;
              const pB = {
                request() {
                  VB.call(dB, TB)
                },
                take() {
                  var BB;
                  return null !== (BB = yB.call(dB)) && void 0 !== BB ? BB : null
                }
              };
              window[py] = pB
            })(TB, gB), TJ = gB, Gl = !0;
            const DB = performance.now();
            return ql.boundAtMs = null !== (JB = (0, nV.J)()) && void 0 !== JB ? JB : DB, ql.indirectHangs = (0, nV.B)(), console.info(`${Ay} ${VB} renderer bound at ${Math.round(DB)} ms`), !BB.isStopped
          }(zB, sB, fB, kB, OB, uB)) return null;
        if (null !== kB) {
          var eB, BT, TT;
          (0, JT.B)(kB);
          const BB = () => !zB.isStopped && CY();
          dB.e(176).then((() => dB(8520))).then((TB => {
            let {
              devTools: dB
            } = TB;
            zB.isStopped || dB.setHost(function(BB) {
              return {
                tools: bV,
                async downloadScene(TB, dB) {
                  let {
                    width: VB,
                    height: yB,
                    colouring: pB
                  } = dB;
                  "screenshot" === TB && null === pB ? await (0, xV.d)(BB, VB, yB) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(BB, TB) {
              return {
                canvas: BB,
                maxTextureSize: jV,
                drawing: TB,
                resize: (BB, TB) => {
                  (0, md.t)(cT.pb.Resize, 0, BB, TB, (0, md.m)(1))
                },
                restoreSize: () => {
                  const TB = (0, ad.i)(BB);
                  null !== TB && (0, md.t)(cT.pb.Resize, 0, TB.cssWidth, TB.cssHeight, (0, md.m)(TB.renderScale))
                },
                onFrameDrawn: BB => (AV.add(BB), () => {
                  AV.delete(BB)
                })
              }
            }(uB, BB)))
          }), (BB => {
            console.warn(`${Ay} the developer tools didn't load: no captures this session`, BB)
          }));
          const TB = "webgpu" === kB && null !== (eB = null === gB || void 0 === gB || null === (BT = gB.adapter) || void 0 === BT ? void 0 : BT.vendor) && void 0 !== eB ? eB : null;
          dJ = {
            backend: kB,
            canvas: uB,
            fallbackReason: null !== (TT = null === gB || void 0 === gB ? void 0 : gB.reason) && void 0 !== TT ? TT : null,
            adapterVendor: TB
          }, rY();
          try {
            (0, Xd.p)(kB, uB, TB)
          } catch (yB) {
            (0, Xd.q)(), console.error(`${Ay} the quality steps didn't start`, yB)
          }
        }
        const {
          storagePullBreaks: kT,
          splitPassBreaks: LT
        } = await OB;
        LT && console.warn(`${Ay} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const uT = kT ? ZB.b : (0, ZB.f)(gB, (0, iT.g)()),
          ET = "webgpu" === kB && !kT;
        if (pl = (0, ZB.h)(ET ? zB : null, ET && null !== (lB = null === (JB = sp) || void 0 === JB ? void 0 : JB.pagePreviews().pD) && void 0 !== lB ? lB : null, uT, sY), HJ) return null;
        if (SB.reserveAtJoin((0, rV.i)(null !== FB && void 0 !== FB ? FB : Yd.g)), zB.isStopped) return null;
        const vT = BB => {
          if (null !== VJ) try {
            VJ.animationFrame(BB)
          } catch (yB) {
            SY(yB)
          }
          if (function(BB, TB) {
              return TB && !HJ && !Ol && GY() && CY() && BB.framePaces(performance.now())
            }(zB, LJ)) return zB.writePendingInput(), (0, mB.g)(BB, XY), IY(!1, BB), void requestAnimationFrame(vT);
          ZY(zB, LJ, "budget") && ((0, tT.k)(zB.lastFrameKind) && CY() && (0, mB.g)(BB, XY), IY(LJ && oJ, BB), nY(zB), SB.afterFrame(), requestAnimationFrame(vT))
        };
        requestAnimationFrame(vT);
        return function(BB) {
          if (BB.has("inputLog") && (0, bd.f)((BB => {
              let {
                action: TB,
                down: dB,
                press: VB
              } = BB;
              console.info(`${ed} input ${TB} ${dB?"down":"up"} press ${VB} at ${performance.now().toFixed(1)}`)
            })), BB.has("inputDump")) {
            const BB = [];
            TV = BB, Object.assign(window, {
              bloxdInputDump: () => BB.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), jp = function(BB, TB) {
          let dB = null;
          const VB = () => {
              null !== dB && (clearInterval(dB), dB = null)
            },
            yB = () => {
              document.hidden ? dB ??= setInterval((() => {
                ZY(BB, !1, "budget") ? (nY(BB), TB.afterFrame()) : VB()
              }), Dp) : VB()
            };
          return document.addEventListener("visibilitychange", yB), yB(), () => {
            VB(), document.removeEventListener("visibilitychange", yB)
          }
        }(zB, SB), zB
      }(TB).then((BB => {
        var TB;
        (VB(rp), Pp(null !== BB), null !== BB && (oy = performance.now()), cp(BB), null === BB) ? null === (TB = sp) || void 0 === TB || TB.pagePreviews().endSession(null === (0, VT.t)()): Yl("booted")
      }), (BB => {
        VB(rp), Pp(!1), cp(null), bY({
          site: ey,
          error: BB,
          header: null
        }, rp)
      }))
    }

    function fJ() {
      const BB = Ip;
      null !== BB && EJ().then((TB => {
        let {
          pageBuiltInAnimationPack: dB
        } = TB;
        dB().provide(BB)
      }), (BB => {
        console.warn(`${Ay} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, BB)
      }))
    }
    const sJ = new class {
      constructor(BB) {
        this.deps = BB, this.latest = 0, this.Dg = null
      }
      apply(BB, TB) {
        return this.load(BB, TB, 0)
      }
      async load(BB, TB, dB) {
        var VB;
        const yB = ++this.latest,
          pB = this.deps.compiler;
        if (void 0 === TB || null === TB || "object" !== typeof TB || 0 === Object.keys(TB).length || null === pB) return this.drop(BB), !1;
        if ((null === (VB = this.Dg) || void 0 === VB ? void 0 : VB.module) === BB && (0, WT.ae)(this.Dg.files, TB)) return !1;
        try {
          const [dB, VB] = await Promise.all([pB(), this.deps.builtIns()]);
          if (yB !== this.latest) return !1;
          const lB = await dB(TB, qT, {
            builtIns: VB
          });
          if (yB !== this.latest) return !1;
          const JB = this.call(BB, lB);
          if (void 0 === JB) throw new GT("the compiled animations didn't read against the built-in pack");
          return this.Dg = {
              module: BB,
              files: TB
            },
            function(BB) {
              for (let TB = 0; TB + 2 < BB.length; TB += 3) {
                ("error" === BB[TB] ? console.error : console.warn)(`Animation for the texture pack: ${BB[TB+1]}: ${BB[TB+2]}`)
              }
            }(JB), !0
        } catch (JB) {
          var lB;
          if (yB !== this.latest) return !1;
          this.drop(BB), 0 === dB && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", JB);
          const VB = (null !== (lB = this.deps.retryAfterMs) && void 0 !== lB ? lB : CT)[dB];
          return void 0 === VB || JB instanceof GT || (0, hT.i)(BB) || setTimeout((() => {
            yB === this.latest && this.load(BB, TB, dB + 1)
          }), VB), !1
        }
      }
      call(BB, TB) {
        try {
          return BB.EVB(TB)
        } catch (dB) {
          throw (0, hT.l)(BB, dB), dB
        }
      }
      clear(BB) {
        this.latest++, this.drop(BB)
      }
      drop(BB) {
        const TB = this.Dg;
        if (this.Dg = null, (null === TB || void 0 === TB ? void 0 : TB.module) === BB && !(0, hT.i)(BB)) try {
          this.call(BB, null)
        } catch {}
      }
    }({
      compiler: RT.d,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: BB
        } = await EJ();
        return BB().whenSet()
      },
      warn: sY
    });
    async function MJ(BB, TB) {
      let VB = !1;
      await zJ({
        matchmake: async () => {
          const {
            guestJoinTarget: yB,
            guestJoinWithPack: pB
          } = await dB.e(332).then((() => dB(42025)));
          return VB ? yB(BB, TB, wY()) : (VB = !0, pB(BB, TB, (TB => UY(BB, TB)), wY))
        },
        onFailure: BB => {
          (0, Ed.showJoinFailure)(BB, rp)
        },
        rejoin: hJ,
        invalidateTrafficCode: CJ
      })
    }
    async function zJ(BB) {
      let {
        matchmake: TB,
        onFailure: dB,
        rejoin: yB,
        invalidateTrafficCode: pB,
        pageReady: lB,
        signal: JB
      } = BB;
      const YB = () => !0 === (null === JB || void 0 === JB ? void 0 : JB.aborted);
      let gB;
      const oB = WV.e.rejoinHold(),
        kB = (0, Dd.G)("wasm", eY);
      let LB = !1,
        OB = performance.now();
      try {
        if (!await Qp) return {
          kind: "stopped"
        };
        if (YB()) return {
          kind: "IT"
        };
        vJ().catch((() => {}));
        let BB = await TB();
        OB = performance.now();
        const dB = () => performance.now() - BB.matchedAt <= BB.freshMs,
          VB = UJ(BB.target).catch((() => {}));
        dB() && !YB() && (gB = new MV(BB.target, {
          signal: JB
        }));
        const pB = performance.now();
        if (null === await Sp) return {
          kind: "stopped"
        };
        var DB;
        if (function(BB) {
            var TB, dB;
            if (ly.d.markGameEngineConstructed(), ky) return;
            ky = !0;
            const VB = Math.max(BB, null !== (TB = Yy) && void 0 !== TB ? TB : BB);
            (0, Jy.e)("ready", Math.max(0, (null !== (dB = gy) && void 0 !== dB ? dB : VB) - VB) / 1e3)
          }(pB), YB() || (null !== gy && null !== oy ? ((0, zT.i)("wasm_loaded", gy), (0, zT.i)("wasm_core_ready", oy)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await VB, !dB() && !YB()) null === (DB = gB) || void 0 === DB || DB.rematched(), BB = await TB(), OB = performance.now();
        if (YB()) return {
          kind: "IT"
        };
        const oB = await async function(BB) {
          var TB, dB, VB;
          let {
            signal: yB,
            rejoin: pB = null,
            early: lB,
            pageReady: JB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== yB && void 0 !== yB && yB.aborted) throw new DOMException("the join was left", "AbortError");
          const YB = (gB = Sl, oB = performance.now(), null !== gB && oB - gB < LV);
          var gB, oB;
          Sl = null;
          const kB = new AbortController;
          IJ({
            controller: kB,
            game: null !== (TB = null === (dB = BB.session) || void 0 === dB ? void 0 : dB.gameNameWithVariation) && void 0 !== TB ? TB : null
          }), Pl = null, null === (VB = al) || void 0 === VB || VB.abort(), al = null, Xl = !1, Wl = null, hl.clear();
          const LB = () => {
            (0, uT.e)(kB, (0, uT.c)(yB))
          };
          null === yB || void 0 === yB || yB.addEventListener("abort", LB, {
            once: !0
          });
          try {
            var OB, DB, uB;
            const TB = await Sp;
            if (null === TB || TB.isStopped || HJ) throw new Error("no core is running to join a game with");
            if (BB.session && null !== pl) {
              const TB = await FJ(pl.join(BB.session.gameNameWithVariation), kB.signal);
              if (null !== TB) throw new ZB.d(TB)
            }
            const [, , , {
              joinRoom: dB
            }] = await FJ(Promise.all([(0, iB.k)(TB), UJ(BB), null === JB || void 0 === JB ? void 0 : JB(), vJ()]), kB.signal), VB = BB.session, yB = VB ? {
              ...xJ,
              attachSocket: TB => {
                const dB = TY(TB, BB.endpoint);
                var yB;
                null !== dB && (wl = {
                  conn: dB,
                  info: VB
                }, null === (yB = Ul) || void 0 === yB || yB(VB.playerDbId));
                return dB
              }
            } : xJ, gB = await dB(yB, BB, {
              signal: kB.signal,
              early: lB
            }).catch((BB => {
              throw function(BB) {
                if (!(BB instanceof KB.d)) return BB;
                if ("roomError" === BB.stage && null !== Wl) return wJ(new KB.d(BB.message, BB.stage, BB.code, Wl), BB);
                const TB = "closed" === BB.stage && null !== Ql ? hl.get(Ql.conn) : void 0;
                return void 0 === TB ? BB : wJ(new KB.d(BB.message, BB.stage, TB.code), BB)
              }(BB)
            }));
            if (Ml !== kB) throw gB.lD(), new DOMException("the join was left", "AbortError");
            SJ(gB), null === (OB = hp) || void 0 === OB || OB.newGame();
            const oB = function(BB) {
              var TB, dB;
              const {
                session: VB
              } = BB, yB = void 0 === VB ? BB.joinOptions.lobbyName : VB.lobbyName;
              return {
                endpoint: BB.endpoint,
                game: null !== (TB = null === VB || void 0 === VB ? void 0 : VB.gameNameWithVariation) && void 0 !== TB ? TB : BB.roomName,
                lobby: String(null !== yB && void 0 !== yB ? yB : null),
                postCookies: null !== (dB = BB.postCookies) && void 0 !== dB ? dB : null
              }
            }(BB);
            sl.set(gB, oB), NV(oB);
            const LB = performance.now(),
              HB = {
                conn: gB.conn,
                rejoin: pB,
                game: null !== (DB = null === (uB = BB.session) || void 0 === uB ? void 0 : uB.gameNameWithVariation) && void 0 !== DB ? DB : "",
                joinedAt: LB,
                rejoinedAt: YB ? LB : null,
                overflow: null
              };
            Fl = HB,
              function(BB, TB) {
                gY();
                const dB = {
                  endpoint: TB,
                  roomId: BB.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new pd({
                    reconnect: (BB, TB, VB) => OY(dB, BB, TB, VB),
                    releaseSeat: BB => {
                      !async function(BB, TB) {
                        const {
                          roomId: dB,
                          roomToken: VB
                        } = kY(BB, TB);
                        try {
                          const {
                            leaveHeldSeat: TB
                          } = await vJ();
                          await TB(BB.endpoint, dB, VB)
                        } catch (yB) {
                          console.warn(`${Ay} the held seat of a game left while it reconnected couldn't be released`, yB)
                        }
                      }(dB, BB)
                    },
                    isLive: () => Kl === dB && null !== Fl && !HJ,
                    XM: BB => {
                      cl = BB, YY()
                    },
                    onReconnected: BB => {
                      ! function(BB) {
                        const TB = fl;
                        if (null !== TB && TB !== BB) {
                          const dB = sl.get(TB);
                          void 0 !== dB && sl.set(BB, dB), gJ === TB && (gJ = BB), TB.detach()
                        }
                        SJ(BB)
                      }(BB)
                    },
                    onGaveUp: (BB, TB) => {
                      ! function(BB, TB, dB) {
                        var VB, yB;
                        console.warn(`${Ay} gave up reconnecting (${dB.reason}, ${dB.attempts} attempts)`, dB.lastError), (0, Ed.reportReconnectGaveUp)(dB, rp);
                        const pB = null !== (VB = null === (yB = Fl) || void 0 === yB ? void 0 : yB.rejoin) && void 0 !== VB ? VB : null;
                        oY(BB, "gaveUp"), QJ();
                        const lB = {
                          code: BB.dropCode,
                          name: null,
                          reason: op,
                          canReconnect: !TB,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        qJ(lB, TB ? null : pB, !1, {
                          reasonKey: kp,
                          canPlayAgain: TB
                        })
                      }(dB, BB, TB)
                    }
                  })
                };
                Kl = dB, null !== rl && rl.conn === BB.conn && dB.resume.onInitialInfo(rl)
              }(gB, BB.endpoint), performance.mark(dp), (0, zT.i)("wasm_joined", LB), setTimeout((() => {
                fl === gB && (0, zT.e)()
              }), 0), fJ(), console.info(`${Ay} joined ${BB.roomName} as ${gB.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const EB = Pl;
            Pl = null, null !== EB && ZJ(HB, EB.mask, EB.frames);
            const vB = hl.get(gB.conn);
            return hl.clear(), void 0 !== vB && (SJ(null), GJ(gB.conn, vB.code, vB.reason)), gB
          } finally {
            var HB;
            null === yB || void 0 === yB || yB.removeEventListener("abort", LB), Ml === kB && cJ(fl, null), (null === (HB = Ql) || void 0 === HB ? void 0 : HB.join) === kB && (Ql = null)
          }
        }(BB.target, {
          signal: JB,
          rejoin: yB(BB.target),
          early: gB,
          pageReady: lB
        });
        return LB = !0, {
          kind: "joined",
          game: oB
        }
      } catch (HB) {
        if (HB instanceof DOMException && "AbortError" === HB.name || YB()) return {
          kind: "IT"
        };
        if (HJ) return {
          kind: "stopped"
        };
        if (Xl && (Xl = !1, await pB().catch((BB => {
            console.warn(`${Ay} the cached traffic code could not be dropped`, BB)
          }))), null === await Sp) return {
          kind: "stopped"
        };
        if (HB instanceof ZB.d) return dB(HB, performance.now() - OB), {
          kind: "failed",
          error: HB,
          reloading: !1
        };
        if (HB instanceof KB.d && HB.code === VB.b.wasmClientNotAllowed.code && kJ) return vY("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: HB,
          reloading: !0
        };
        const BB = HB instanceof KB.d && HB.code === VB.b.outdatedVersion.code,
          TB = () => null === fl,
          yB = await pg({
            site: Ed.JOIN_SITE,
            error: HB,
            outdated: BB
          }, (() => {
            dB(HB, performance.now() - OB)
          }), TB);
        return {
          kind: "failed",
          error: HB,
          reloading: yB
        }
      } finally {
        var uB;
        LB || kB.end(), WV.e.releaseHold(oB);
        const BB = null === (uB = gB) || void 0 === uB ? void 0 : uB.release();
        BB && (0, Ed.reportUnusedSeat)(BB, rp)
      }
    }

    function wJ(BB, TB) {
      return BB.stack = TB.stack, BB
    }

    function UJ(BB) {
      return BB.session ? (0, iB.q)(Kp, BB.session.gameNameWithVariation) : Promise.resolve()
    }

    function FJ(BB, TB) {
      return (0, uT.k)(TB), new Promise(((dB, VB) => {
        const yB = () => {
          VB((0, uT.c)(TB))
        };
        TB.addEventListener("abort", yB, {
          once: !0
        }), BB.then((BB => {
          TB.removeEventListener("abort", yB), dB(BB)
        }), (BB => {
          TB.removeEventListener("abort", yB), VB(BB)
        }))
      }))
    }

    function KJ() {
      var BB, TB;
      return null !== (BB = null === (TB = pl) || void 0 === TB ? void 0 : TB.runsInJoinedGame()) && void 0 !== BB && BB
    }

    function rJ() {
      IJ(null)
    }

    function IJ(BB) {
      var TB, dB, VB;
      (function() {
        const BB = Kl;
        null !== BB && oY(BB, "left")
      }(), null === ap || ap.left) || (ap.left = !0, null === (VB = (0, iB.i)()) || void 0 === VB || VB.socketLeft(), (0, kB.r)({
        websocketUrl: null
      }));
      Ml && (0, uT.e)(Ml, new DOMException("the join was left", "AbortError")), QJ(null !== BB), null === (TB = pl) || void 0 === TB || TB.lD();
      const yB = fl;
      null !== BB && WV.e.setGame(BB.game), cJ(null, null !== (dB = null === BB || void 0 === BB ? void 0 : BB.controller) && void 0 !== dB ? dB : null), null === yB || void 0 === yB || yB.lD(), PJ(0), (0, kT.f)()
    }

    function cJ(BB, TB) {
      fl = BB, Ml = TB, null === fl && null === Ml && WV.e.setGame(void 0)
    }

    function SJ(BB) {
      cJ(BB, Ml)
    }

    function PJ(BB) {
      const TB = zp;
      return null !== vp && !HJ && null !== TB && !TB.isStopped && (!!vp(KB.j, 0, (0, KB.C)(BB)) && (Hl = !0, 0 === BB || Ol || ZY(TB, !1, "all"), !0))
    }

    function QJ() {
      var BB, TB;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, Dd.f)();
      const dB = null !== (BB = null === (TB = Fl) || void 0 === TB ? void 0 : TB.overflow) && void 0 !== BB ? BB : null;
      Fl = null, null !== dB && (0, Ed.reportEventOverflow)(dB, rp)
    }

    function RJ() {
      null !== fl || null !== Ml ? rJ() : dY()
    }

    function aJ(BB, TB) {
      console.warn(`${Ay} the event buffer refused records in ${TB} frames (categories ${BB})`), HJ || (null !== Fl ? ZJ(Fl, BB, TB) : null !== Ml && function(BB, TB, dB) {
        var VB;
        const yB = function(BB, TB) {
          return null === BB ? "drop" : BB.activated ? "keep" : 0 !== (TB & ST.l.NetSession) ? "fail" : "drop"
        }((null === (VB = Ql) || void 0 === VB ? void 0 : VB.join) === BB ? Ql : null, TB);
        "keep" === yB ? Pl = {
          mask: TB,
          frames: dB
        } : "fail" === yB && (0, uT.e)(BB, new Error("the join's net session was lost to an event overflow"))
      }(Ml, BB, TB))
    }

    function ZJ(BB, TB, dB) {
      const VB = BB.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      VB.frames += dB, VB.acks++, VB.mask |= TB;
      const yB = function(BB, TB, dB) {
        if (0 === (BB & ST.l.NetSession)) return "none";
        const VB = null !== TB.rejoinedAt && dB - TB.rejoinedAt < OV;
        return null === TB.rejoin || VB ? "fail" : "rejoin"
      }(TB, BB, performance.now());
      "none" !== yB && queueMicrotask((() => {
        if (Fl !== BB) return;
        const TB = "rejoin" === yB && performance.now() - Rl >= FB.e;
        VB.outcome = TB ? "rejoined" : "failed", qJ(function(BB, TB) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: BB,
            automaticallyReconnect: TB,
            requiresRefresh: !1
          }
        }(null !== BB.rejoin, TB), BB.rejoin, TB), rJ(), TB && (Sl = performance.now())
      }))
    }

    function XJ(BB) {
      LJ = BB, OJ && WJ(OJ, BB)
    }

    function WJ(BB, TB) {
      BB.style.visibility = TB ? "visible" : "hidden"
    }

    function hJ(BB) {
      var TB;
      const dB = BB.roomName,
        VB = null !== (TB = BB.joinOptions.lobbyName) && void 0 !== TB ? TB : null;
      return () => {
        MJ(dB, VB)
      }
    }

    function CJ() {
      return dB.e(332).then((() => dB(42025))).then((BB => {
        let {
          invalidateGuestTrafficCode: TB
        } = BB;
        return TB()
      })).catch((BB => {
        console.warn(`${Ay} the cached traffic code could not be dropped`, BB)
      }))
    }

    function GJ(BB, TB, dB) {
      var yB, pB;
      let lB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (HJ) return;
      if ((null === (yB = Fl) || void 0 === yB ? void 0 : yB.conn) !== BB) return void(null !== Ml && hl.set(BB, {
        code: TB,
        reason: dB
      }));
      const {
        rejoin: JB,
        game: YB,
        joinedAt: gB
      } = Fl;
      QJ(), gY();
      const oB = (0, FB.j)(TB, (0, uV.e)(BB));
      if (console.info(`${Ay} the game's connection closed with code ${TB} (${null!==(pB=oB.name)&&void 0!==pB?pB:"unrecognised"})`), TB === VB.b.gameOrPluginKick.code || lB || (0, Ed.reportDisconnect)(oB, rp, {
          closeReason: dB,
          sinceJoinedMs: performance.now() - gB,
          game: YB
        }), oB.requiresRefresh) {
        const BB = "outdatedVersion" === oB.name,
          dB = new Error(`the game's connection closed with code ${TB}`),
          VB = () => null === Fl && null === Ml;
        return void pg({
          site: Ed.JOIN_SITE,
          error: dB,
          outdated: BB
        }, (() => {
          VB() && qJ(oB, null, !1)
        }), VB)
      }
      const kB = oB.canReconnect ? JB : null,
        LB = null !== kB && oB.automaticallyReconnect && performance.now() - Rl >= FB.e;
      qJ(oB, kB, LB)
    }

    function qJ(BB, TB, dB) {
      var VB;
      let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (DJ) return;
      WV.e.unwantedLeave(dB && null !== TB && 0 === Zl.size), null === (VB = al) || void 0 === VB || VB.abort();
      const pB = new AbortController;
      al = pB;
      const lB = null === TB ? null : () => {
        pB.signal.aborted || (pB.abort(), TB())
      };
      if (dB && null !== lB) {
        Rl = performance.now();
        const BB = setTimeout(lB, FB.c);
        pB.signal.addEventListener("abort", (() => {
          clearTimeout(BB)
        }))
      }
      const JB = {
        code: BB.code,
        name: BB.name,
        reason: BB.reason,
        reasonKey: yB.reasonKey,
        reconnect: lB,
        reconnecting: dB,
        requiresRefresh: BB.requiresRefresh,
        canPlayAgain: yB.canPlayAgain
      };
      if (Zl.size > 0)
        for (const gB of [...Zl]) try {
          gB(JB)
        } catch (YB) {
          console.error(`${Ay} an unwanted-leave listener threw`, YB)
        } else oV((0, JV.i)(BB, null !== lB, dB), pB.signal).then((TB => {
          TB && (null !== lB ? lB() : BB.requiresRefresh && (0, XB.i)())
        }))
    }
    const xJ = {
      attachSocket: BB => TY(BB),
      onConnection: BB => (Cl.add(BB), () => {
        Cl.delete(BB)
      }),
      sendRaw: (BB, TB) => {
        const dB = ap;
        return null !== dB && dB.conn === BB && jY(dB, TB)
      },
      leaveRoom: PJ,
      closeSocket: BB => {
        var TB;
        (null === (TB = ap) || void 0 === TB ? void 0 : TB.conn) === BB && dY()
      },
      flushNet: VY
    };

    function jJ(BB) {
      var TB;
      let {
        aux: dB,
        payload: VB
      } = BB;
      null === (TB = zp) || void 0 === TB || TB.queueOptions(dB, VB)
    }

    function AJ(BB, TB) {
      jJ(function(BB, TB) {
        return Ty = BB ? {
          preventMovement: TB
        } : null, BB ? dy(TB) : {
          aux: cT.Wb.AdEnd,
          payload: By
        }
      }(BB, TB))
    }

    function bJ(BB) {
      var TB;
      il = BB, null === (TB = zp) || void 0 === TB || TB.setUiPrefs(BB)
    }

    function nJ(BB, TB) {
      Kp.setMaster(BB, TB)
    }

    function eJ(BB) {
      var TB;
      Nl = BB, null === (TB = zp) || void 0 === TB || TB.setEnvPrefs(BB)
    }

    function BY(BB) {
      var TB;
      tl = BB, null === (TB = zp) || void 0 === TB || TB.setLookPrefs(BB)
    }

    function TY(BB) {
      var TB;
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(BB.url).origin,
        VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (BB.readyState === WebSocket.CLOSING || BB.readyState === WebSocket.CLOSED) return console.warn(`${Ay} a closing or closed socket can't be attached`), null;
      const yB = zp;
      if (!yB || yB.isStopped) return console.warn(`${Ay} no core is running to attach a socket to`), BB.close(), null;
      if (null === (0, iB.i)()) return console.warn(`${Ay} the game has not started to attach a socket to`), BB.close(), null;
      if (ol > cT.r) return console.warn(`${Ay} this core has attached all the sockets it can; reload to play on`), BB.close(), null;
      if (Hl && !Ol && (ZY(yB, !1, "all"), yB.isStopped || HJ)) return BB.close(), null;
      dY();
      const pB = ol++;
      if (!uY(yB, "open", pB, VB ? cT.Sb.Resume : 0)) return BB.close(), null;
      Ql = null === Ml ? null : {
        join: Ml,
        conn: pB,
        activated: !1
      }, BB.binaryType = "arraybuffer";
      const lB = new ld.c((() => {
          ! function(BB, TB) {
            if (ap !== TB || BB.isStopped || null === lY(TB, Yp)) return;
            TB.detach(), ap = null, pY(BB, TB, Yp, "", !0), TB.ws.close()
          }(yB, JB)
        })),
        JB = {
          ws: BB,
          conn: pB,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: VB,
          token: null,
          detach: () => {
            lB.dispose(), BB.removeEventListener("message", YB), BB.removeEventListener("open", gB), BB.removeEventListener("close", oB)
          }
        },
        YB = BB => {
          if (BB.data instanceof ArrayBuffer) {
            var TB;
            const dB = new Uint8Array(BB.data);
            lB.heard(), JB.token = null !== (TB = (0, Jd.c)(dB)) && void 0 !== TB ? TB : JB.token,
              function(BB, TB, dB) {
                Tg(BB, (() => {
                  BB.rings.net.writeFrame(TB, dB) || BB.crash(jT.s, `a socket frame of ${dB.byteLength} bytes did not fit the net-in ring`)
                }));
                const VB = BB.rings.net.cursor >= lp;
                (VB || BB.netWrittenSinceFrame >= pp || document.hidden && performance.now() - kl >= Dp) && ZY(BB, !1, "budget")
              }(yB, pB, dB)
          }
        },
        gB = () => {
          for (const TB of JB.pending.splice(0)) BB.send(TB);
          JB.pendingBytes = 0
        },
        oB = BB => {
          if (ap === JB && yB.rings.net.cursor > 0 && ZY(yB, !1, "all"), ap === JB) {
            if (JB.detach(), ap = null, pY(yB, JB, BB.code, BB.reason) || yY(yB, JB)) return;
            uY(yB, "close", pB), JY(pB, JB.left), GJ(pB, BB.code, BB.reason)
          }
        };
      return BB.addEventListener("message", YB), BB.addEventListener("open", gB), BB.addEventListener("close", oB), ap = JB, null === (TB = (0, iB.i)()) || void 0 === TB || TB.socketAttached(pB), (0, kB.r)({
        websocketUrl: dB
      }), pB
    }

    function dY() {
      const BB = ap;
      if (!BB) return;
      const TB = zp,
        dB = BB.resume;
      dB && (VY(), ap !== BB) || (ap = null, BB.detach(), BB.ws.close(), null !== TB && (yY(TB, BB) || dB && pY(TB, BB, gp)) || (null !== TB && uY(TB, "close", BB.conn), JY(BB.conn, BB.left)))
    }

    function VY() {
      const BB = zp;
      null !== BB && !BB.isStopped && !HJ && !Ol && BB.rings.net.cursor > 0 && ZY(BB, !1, "all")
    }

    function yY(BB, TB) {
      var dB;
      if (!TB.resume) return !1;
      const VB = Kl;
      return null !== VB && null !== TB.token && "" !== TB.token && (VB.pendingHold = {
        conn: TB.conn,
        token: `${VB.roomId}:${TB.token}`
      }), uY(BB, "close", TB.conn), null === (dB = (0, iB.i)()) || void 0 === dB || dB.socketDetached(TB.conn), !0
    }

    function pY(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const pB = lY(TB, dB);
      if (null === pB) return !1;
      const {
        Dg: lB,
        token: JB,
        game: YB,
        joinedAt: gB
      } = pB;
      if (!uY(BB, "close", TB.conn, cT.t.Held)) return !0;
      console.warn(`${Ay} the game's connection ${yB?"went silent":`dropped with code ${dB}`}, holding it`);
      const oB = {
        closeReason: VB,
        sinceJoinedMs: performance.now() - gB,
        game: YB
      };
      return (0, Ed.reportDisconnect)((0, FB.j)(dB), rp, oB, yB ? "silent" : void 0), lB.heldConn = TB.conn, lB.dropCode = dB, lB.pendingHold = {
        conn: TB.conn,
        token: `${lB.roomId}:${JB}`
      }, Ol || ZY(BB, !1, "all"), !0
    }

    function lY(BB, TB) {
      const dB = Kl,
        yB = Fl,
        pB = BB.token;
      return null === dB || null === yB || HJ || BB.left || yB.conn !== BB.conn || null === pB || "" === pB ? null : (0, VB.g)(TB) && dB.resume.canHoldSeat() ? {
        Dg: dB,
        token: pB,
        game: yB.game,
        joinedAt: yB.joinedAt
      } : null
    }

    function JY(BB, TB) {
      var dB;
      null === (dB = (0, iB.i)()) || void 0 === dB || dB.closeGame(BB), (0, eV.d)().close(BB), TB || (0, kB.r)({
        websocketUrl: null
      })
    }

    function YY() {
      const BB = cl;
      if (null === BB) return;
      const TB = (0, iB.i)();
      HJ || null === TB || TB.XM(BB) ? cl = null : performance.now() - El.pause >= Op && (El.pause = performance.now(), console.warn(`${Ay} the cmd ring had no room for SetPaused(${BB}): written before the next frame`))
    }

    function gY() {
      const BB = Kl;
      Kl = null, null === BB || void 0 === BB || BB.resume.dispose()
    }

    function oY(BB, TB) {
      var dB, VB;
      const {
        heldConn: yB
      } = BB, pB = BB.resume.resumingConn;
      BB.heldConn = 0, BB.pendingHold = null, Kl === BB && (Kl = null), "left" === TB ? BB.resume.lD() : BB.resume.dispose(), 0 === Il || (null === (dB = ap) || void 0 === dB ? void 0 : dB.conn) !== Il || "left" === TB && (null === (VB = fl) || void 0 === VB ? void 0 : VB.conn) === Il || DY(Il), "gaveUp" === TB && 0 !== pB && DY(pB), 0 !== yB && "refused" !== TB && (console.info(`${Ay} the game held through its drop ${"left"===TB?"was left":"is given up"}`), null === zp || zp.isStopped || uY(zp, "close", yB), JY(yB, !1))
    }

    function kY(BB, TB) {
      const dB = TB.indexOf(":");
      return {
        roomId: dB < 0 ? BB.roomId : TB.slice(0, dB),
        roomToken: TB.slice(dB + 1)
      }
    }

    function LY(BB) {
      var TB;
      rl = BB, BB.conn === Il && (Il = 0);
      const dB = Kl;
      null !== dB && (null === (TB = Fl) || void 0 === TB ? void 0 : TB.conn) === BB.conn && dB.resume.onInitialInfo(BB)
    }
    async function OY(BB, TB, dB, VB) {
      const {
        roomId: yB,
        roomToken: pB
      } = kY(BB, TB);
      if (null === zp || zp.isStopped || HJ) throw new Error("no core is running to resume the game on");
      const {
        resumeRoom: lB
      } = await FJ(vJ(), dB);
      return lB({
        ...xJ,
        attachSocket: TB => Kl !== BB || 0 === BB.heldConn ? (TB.close(), null) : TY(TB, BB.endpoint, !0)
      }, BB.endpoint, yB, pB, {
        signal: dB,
        onAttached: VB
      })
    }

    function DY(BB) {
      var TB;
      const dB = ap;
      (null === dB || void 0 === dB ? void 0 : dB.conn) === BB && (dB.left = !0, null === (TB = (0, iB.i)()) || void 0 === TB || TB.socketLeft(), (0, kB.r)({
        websocketUrl: null
      }), PJ(BB) ? setTimeout((() => {
        ap === dB && dY()
      }), KB.f) : dY())
    }

    function uY(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = !1;
      return Tg(BB, (() => {
        const {
          net: pB
        } = BB.rings;
        yB = "open" === TB ? pB.writeOpen(dB, VB) : pB.writeClose(dB, VB), yB || BB.crash(jT.s, `a socket ${TB} did not fit the net-in ring`)
      })), yB
    }

    function HY(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (EY()) {
        const VB = "browser" === BB && (0, nV.M)() ? "blockedAfterLoss" : "unsupported";
        return (0, Ed.reportUnsupportedFallback)(BB, VB, TB, dB), void vY(`the wasm client can't run here (${TB}; ${VB})`, VB)
      }(0, Ed.showUnsupported)(BB, "unsupported", TB, dB)
    }

    function EY() {
      return kJ && "wasm" !== (0, gT.e)(window.location.search)
    }

    function vY(BB, TB) {
      console.warn(`${Ay} ${BB}: reloading on the JS client`), null !== TB && (0, gT.k)(TB);
      const dB = () => {
        (0, XB.e)(gT.r)
      };
      (0, Ed.flushCrashReports)(XB.b).then(dB, dB)
    }

    function mY(BB, TB, dB, VB) {
      return jl(BB, TB, dB, VB)
    }

    function iY() {
      null === nl || null === zp || zp.isStopped || HJ || null !== Tl || null === vp || (Tl = nl(vp, sY, MY().follow))
    }

    function NY() {
      var BB, TB, dB;
      return null !== (BB = null === (TB = Up) || void 0 === TB || null === (dB = TB.textures) || void 0 === dB ? void 0 : dB.files()) && void 0 !== BB ? BB : null
    }

    function tY(BB) {
      dB.e(249).then((() => dB(39454))).then((TB => {
        let {
          setIconFileOverrides: dB
        } = TB;
        dB(BB)
      }), (BB => {
        console.warn(`${Ay} the item icons couldn't take the texture pack's files`, BB)
      }))
    }

    function fY(BB) {
      MY().follow((TB => {
        null !== TB && Promise.all([Promise.all([dB.e(179), dB.e(42)]).then((() => dB(42050))), (0, nV.L)()]).then((BB => {
          let [{
            followPagePackFiles: dB
          }, VB] = BB;
          const yB = null === VB || (0, xT.C)(VB) ? "webgl" : VB.backend;
          dB(TB, XV.f, yB, (BB => {
            XV.f.setPageFiles(BB)
          }), sY)
        }), (TB => {
          console.warn(`${Ay} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, TB), BB()
        }))
      }))
    }

    function sY(BB, TB) {
      console.warn(`${Ay} ${BB}`, TB)
    }

    function MY() {
      return wp ??= new Dy({
        load: BB => Promise.all([dB.e(179), dB.e(47)]).then((() => dB(42052))).then((TB => {
          let {
            startPageTexturePackFeed: dB
          } = TB;
          return dB(sY, BB)
        })),
        store: Hd.f,
        yD: BB => {
          Sp.then((() => {
            (0, Ed.reportTexturePackFeedLoadFailure)(BB, rp)
          }))
        }
      }), wp
    }
    const zY = BB => MY().follow(BB);

    function wY() {
      return MY().loaded()
    }
    const UY = function(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          yB = 0;
        return async function(pB, lB) {
          let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const YB = ++yB,
            gB = VB() + TB,
            oB = await
          function(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((VB => {
              const yB = setTimeout((() => {
                VB(null), BB.then((BB => {
                  null !== BB && (BB.joinedWithout(), dB(BB))
                }))
              }), TB);
              BB.then((BB => {
                clearTimeout(yB), VB(BB)
              }))
            }))
          }(BB(pB), TB, (BB => {
            YB === yB && JB() && lB(BB, VB() + TB).catch((BB => {
              dB("the texture pack step after the join failed", BB)
            }))
          }));
          return null === oB ? null : lB(oB, gB)
        }
      }((BB => (0, BT.j)(BB) ? MY().request() : MY().forJoin()), Oy.b, sY),
      FY = function(BB, TB) {
        let dB = !1;
        return {
          setGamePackConfirm: BB => {
            dB = null !== BB, TB(BB)
          },
          packStep: (TB, VB, yB) => BB(TB, VB, (() => dB && yB()))
        }
      }(UY, (BB => {
        MY().setGamePackConfirm(BB)
      }));

    function KY(BB) {
      FY.setGamePackConfirm(BB)
    }

    function rY() {
      if (HJ || null !== VJ || null === el || null === dJ) return;
      const {
        backend: BB,
        canvas: TB,
        fallbackReason: dB,
        adapterVendor: VB
      } = dJ, yB = el;
      el = null;
      try {
        VJ = yB({
          backend: BB,
          canvas: TB,
          fallbackReason: dB,
          adapterVendor: VB,
          joinedGame: () => HJ ? null : fl,
          inGame: cY,
          shaderPackRuns: KJ,
          msaa: () => TJ > 1,
          writeCmd: (BB, TB, dB) => null !== vp && vp(BB, TB, dB),
          takeFailedMeshJobs: () => {
            var BB, TB;
            return null !== (BB = null === (TB = hp) || void 0 === TB ? void 0 : TB.takeFailedMeshJobs()) && void 0 !== BB ? BB : 0
          }
        })
      } catch (pB) {
        console.error(`${Ay} the frame telemetry didn't start`, pB)
      }
    }

    function IY(BB, TB) {
      try {
        var dB, VB, yB;
        const pB = Gl && null !== (dB = null === (VB = zp) || void 0 === VB || null === (yB = VB.lastHeader) || void 0 === yB ? void 0 : yB.renderPending) && void 0 !== dB ? dB : 0;
        (0, Xd.d)(TB, BB, cY() && !(null !== Ty), pB)
      } catch (pB) {
        (0, Xd.q)(), console.error(`${Ay} the quality steps stopped`, pB)
      }
    }

    function cY() {
      return null !== fl && gJ === fl && !HJ
    }

    function SY(BB) {
      const TB = VJ;
      VJ = null;
      try {
        null === TB || void 0 === TB || TB.stop()
      } catch {}
      console.error(`${Ay} the frame telemetry threw: it stops`, BB)
    }

    function PY(BB) {
      var TB, dB, VB;
      if ((0, eV.d)().fire(BB), "message" === BB.type) {
        if (Dl++, BB.Jo === cT.Cc.ERROR && null !== Ml) {
          var yB;
          const {
            text: TB,
            dropsCache: dB
          } = (0, FB.p)((new TextDecoder).decode(BB.payload));
          Xl ||= dB, (null === (yB = Ql) || void 0 === yB ? void 0 : yB.conn) === BB.conn && (Wl = TB)
        } else if (BB.Jo === ST.Jb.ResumeComplete) {
          var pB;
          null === (pB = Kl) || void 0 === pB || pB.resume.onResumeComplete(BB.conn)
        }
        return
      }
      if (BB.phase === cT.v.Left) ul = BB.conn;
      else if (BB.phase === cT.v.Activated) {
        var lB;
        oT.c.reset(), (null === (lB = Ql) || void 0 === lB ? void 0 : lB.conn) === BB.conn && (Ql.activated = !0)
      } else BB.phase === cT.v.Resumed ? function(BB) {
        var TB, dB;
        Il = BB;
        const VB = Kl;
        if (null === VB || 0 === VB.heldConn || (null === (TB = ap) || void 0 === TB ? void 0 : TB.conn) !== BB || !ap.resume || null === Fl) return;
        console.info(`${Ay} the game resumed on conn ${BB}, waiting for its InitialInfo`);
        const yB = VB.heldConn;
        VB.heldConn = 0, ap.resume = !1, Fl.conn = BB, (null === (dB = wl) || void 0 === dB ? void 0 : dB.conn) === yB && (wl = {
          conn: BB,
          info: wl.info
        }), oT.c.apply({
          shopInfo: null,
          _shopVersion: TT.b
        })
      }(BB.conn) : BB.phase === cT.v.Held ? function(BB) {
        var TB;
        const dB = Kl,
          VB = null !== (TB = null === dB || void 0 === dB ? void 0 : dB.pendingHold) && void 0 !== TB ? TB : null;
        if (null !== dB && null !== VB && VB.conn === BB) return dB.pendingHold = null, dB.heldConn = BB, Il = 0, console.warn(`${Ay} the core holds the game, reconnecting`), void dB.resume.onDropped(VB.token);
        if (BB === Il) {
          Il = 0;
          const TB = zp;
          null === TB || TB.isStopped || (console.info(`${Ay} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), uY(TB, "close", BB))
        }
      }(BB.conn) : BB.phase === cT.v.Closed && (null === (TB = Kl) || void 0 === TB || null === (dB = TB.pendingHold) || void 0 === dB ? void 0 : dB.conn) === BB.conn && (Kl.heldConn === BB.conn ? function(BB) {
        const TB = BB.heldConn,
          dB = BB.dropCode;
        oY(BB, "refused"), console.info(`${Ay} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          JY(TB, !1), GJ(TB, dB, "", !0)
        }))
      }(Kl) : Kl.pendingHold = null);
      const JB = Object.keys(cT.v).find((TB => cT.v[TB] === BB.phase)),
        YB = 0 === BB.code ? "" : ` (code ${BB.code})`;
      console.info(`${Ay} conn ${BB.conn}: ${null!==JB&&void 0!==JB?JB:BB.phase}${YB}, ${Dl} raw messages so far`), (null === (VB = fl) || void 0 === VB ? void 0 : VB.conn) !== BB.conn || BB.phase !== cT.v.Left && BB.phase !== cT.v.Closed || SJ(null), zl !== BB.conn || BB.phase !== cT.v.Left && BB.phase !== cT.v.Closed || (zl = null, null === fl && null === Ml && WV.e.setGame(void 0));
      for (const oB of [...Cl]) try {
        oB(BB.conn, BB.phase, BB.code)
      } catch (gB) {
        (0, PT.l)(gB, `${Ay} a connection listener threw`)
      }
    }

    function QY() {
      (0, nV.q)(), queueMicrotask((() => {
        try {
          AY()
        } catch (BB) {
          console.warn(`${Ay} stopping before the reload threw`, BB)
        }(0, Ed.flushCrashReports)(XB.b).then(XB.i, XB.i)
      }))
    }

    function RY() {
      const BB = zp;
      null === BB || BB.isStopped || null === ap || Ol || !BB.hasPendingCommands() || ZY(BB, !1, "budget")
    }

    function aY(BB) {
      var TB;
      const dB = fl;
      BB.persisted || null === dB || (null === (TB = ap) || void 0 === TB ? void 0 : TB.conn) !== dB.conn || ap.left || dB.lD()
    }

    function ZY(BB, TB, VB) {
      let yB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const pB = Ol;
      Ol = !0;
      try {
        return function(BB, TB, VB, yB) {
          var pB, lB, JB;
          if (HJ) return !1;
          if (Tg(BB, WY), HJ || BB.isStopped) return !1;
          qY() && Yl("modelsIn");
          YY(), kl = performance.now(), ul = null, Hl = !1, (0, mB.P)(), null === (pB = Ap) || void 0 === pB || pB.beforeFrame(), dV(kl, BB), (0, mB.H)(kl, hY), Ll = !0;
          const YB = TB && GY();
          let gB;
          try {
            gB = BB.frame(kl, YB, VB)
          } finally {
            Ll = !1
          }
          if (!gB) return !1;
          BJ.observe(null !== (lB = null === (JB = BB.lastHeader) || void 0 === JB ? void 0 : JB.chunksCancelled) && void 0 !== lB ? lB : 0);
          const oB = BB.lastFrameKind,
            kB = (0, tT.e)(oB);
          TB && (oJ = kB);
          kB && (0, mT.e)(kl);
          if (null !== VJ) try {
            VJ.frameRan(BB, kl, performance.now(), oB)
          } catch (OB) {
            SY(OB)
          }
          "drawn" === oB && CY() && function() {
            for (const BB of [...AV]) BB()
          }();
          BB.forEachNetOut(xY);
          const LB = ap;
          null !== ul && (null === LB || void 0 === LB ? void 0 : LB.conn) === ul && jY(LB, KB.m);
          TB && function(BB) {
            var TB, VB, yB;
            if (null === fl || !GY()) return;
            lJ || YJ || 0 === BB.headerWord(ST.A.TerrainDrawn) || (YJ = !0, (0, zT.i)("wasm_terrain_drawn", performance.now()));
            const pB = BB.lastHeader,
              lB = !Gl || 0 === (null === pB || void 0 === pB ? void 0 : pB.renderPending);
            !JJ && lB && (JJ = !0, performance.mark(yp));
            if (gJ === fl) return;
            const JB = null !== (TB = null === pB || void 0 === pB ? void 0 : pB.firstView) && void 0 !== TB ? TB : cT.M.NotYet;
            if (Gl && JB === cT.M.NotYet) return;
            if (lJ && (!0 !== (null === (VB = (0, iB.i)()) || void 0 === VB ? void 0 : VB.isSessionLive) || !lB)) return;
            gJ = fl;
            const YB = fl;
            if (setTimeout((() => {
                fl === YB && (0, zT.h)()
              }), 0), null === (yB = pl) || void 0 === yB || yB.playable(), function() {
                clearTimeout(Rp), Rp = setTimeout((() => {
                  cY() && yg((BB => {
                    let {
                      prefetchWorldgenWorker: TB
                    } = BB;
                    TB()
                  }))
                }), Ep)
              }(), lJ) return;
            lJ = !0, performance.mark(Vp), (0, ty.n)("render") && dB.e(44).then((() => dB(4089))).then((BB => {
              let {
                renderDebugPlayable: TB
              } = BB;
              TB()
            }), (BB => {
              console.warn("The render debug topic didn't load", BB)
            }));
            const gB = Math.round(performance.now());
            if (Gl && JB !== cT.M.Drawn) {
              const BB = JB === cT.M.HeldBackstop ? "held_draws" : "long";
              console.warn(`${Ay} playable at ${gB} ms on the first view's ${BB} backstop: it wasn't drawn whole in time`), (0, zT.i)("wasm_view_backstop", gB, BB)
            } else console.info(`${Ay} playable at ${gB} ms${Gl?"":" (no renderer)"}`);
            setTimeout(bl, 0), (0, LT.g)().catch((BB => {
              console.error(`${Ay} item sprites didn't load, so item particles show the missing texture`, BB)
            }))
          }(BB);
          (0, jT.N)(BB, {
            worldgen: Xp,
            mesh: hp
          }),
          function(BB) {
            BB.forEachEvent(yV);
            for (const TB of VV) try {
              (0, bd.b)(TB)
            } catch (OB) {
              if ((0, PT.g)(OB)) {
                BB.crashOn(jT.l, OB);
                break
              }
              console.error(`${ed} an input action listener threw`, OB)
            }
            VV.length = 0
          }(BB), yB && (0, NT.b)();
          return !BB.isStopped
        }(BB, TB, "all" === VB || BB.rings.net.cursor >= lp || BB.netKeptFrames >= Jp, yB)
      } finally {
        Ol = pB
      }
    }

    function XY(BB) {
      console.error(`${Ay} a frame-start listener threw`, BB)
    }

    function WY() {
      var BB, TB, dB, VB;
      null === (BB = np) || void 0 === BB || BB.drain(vp, mp), null === (TB = dl) || void 0 === TB || TB.drain(vp), null === (dB = Vl) || void 0 === dB || dB.drain(performance.now()), Al(vp), null === (VB = Tl) || void 0 === VB || VB.drain()
    }

    function hY(BB) {
      console.error(`${Ay} a before-frame listener threw`, BB)
    }

    function CY() {
      return Gl && GY()
    }

    function GY() {
      return yl && qY()
    }

    function qY() {
      return null === np || np.startupDone
    }

    function xY(BB, TB) {
      const dB = ap;
      (null === dB || void 0 === dB ? void 0 : dB.conn) === BB ? jY(dB, TB) : ml++
    }

    function jY(BB, TB) {
      const {
        ws: dB
      } = BB;
      return dB.readyState === WebSocket.OPEN ? (dB.send(TB), !0) : dB.readyState === WebSocket.CONNECTING && BB.pendingBytes + TB.byteLength <= Lp ? (BB.pending.push(TB.slice()), BB.pendingBytes += TB.byteLength, !0) : (ml++, !1)
    }

    function AY() {
      var BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB;
      HJ = !0, (0, fy.d)(), gY(), (0, mB.N)().unlockPointer(), (0, mB.K)(null), null === (BB = bp) || void 0 === BB || BB(), bp = null, null === (TB = (0, iB.t)()) || void 0 === TB || TB.followCursorAim(null), (0, NT.C)(), (0, iB.f)(), Kp.stop(), null === (dB = yJ) || void 0 === dB || dB(), yJ = null, null === (VB = pJ) || void 0 === VB || VB(), pJ = null, null === (yB = VJ) || void 0 === yB || yB.stop(), VJ = null, (0, md.o)(null), null === (pB = Zp) || void 0 === pB || pB(), Zp = null, null === (lB = Xp) || void 0 === lB || lB.stop(), Xp = null, null === (JB = hp) || void 0 === JB || JB.stop(), hp = null, null !== (YB = Up) && void 0 !== YB && null !== (gB = YB.textures) && void 0 !== gB && gB.assets && tY(null), null === (oB = Up) || void 0 === oB || oB.stop(), Up = null, Fp = null;
      const EB = Cp;
      Cp = null, EB && (EB.stop(), Bg(EB)), null === (kB = dl) || void 0 === kB || kB.dispose(), dl = null, null === (LB = Vl) || void 0 === LB || LB.dispose(), Vl = null, np = null, null === (OB = Bl) || void 0 === OB || OB(), Bl = null, null === (DB = jp) || void 0 === DB || DB(), jp = null, null === (uB = Ap) || void 0 === uB || uB.stop(), Ap = null, rJ(), WV.e.release(), dY();
      const vB = Tl;
      Tl = null;
      try {
        null === vB || void 0 === vB || vB.dispose()
      } catch (NB) {
        console.warn(`${Ay} the sky's images didn't release`, NB)
      }(0, SV.e)(null), null === (HB = sp) || void 0 === HB || HB.pagePreviews().endSession(null === (0, VT.t)())
    }

    function bY(BB, TB) {
      var dB, VB;
      const yB = null !== (dB = null === (VB = Cp) || void 0 === VB ? void 0 : VB.details()) && void 0 !== dB ? dB : {},
        pB = BB.site === ny || BB.site === ey || BB.site === Ed.RENDER_RELOAD_SITE || BB.site === Bp ? BB.error instanceof WebAssembly.RuntimeError || BB.error instanceof hT.d : !(0, xT.G)(BB.error) && (0, jT.J)(BB);
      pB && BB.error instanceof Error && (0, VT.S)(BB.error);
      const lB = pB || BB.site === jT.w ? (0, Ed.readTrap)(BB.error) : null,
        JB = null !== lB && (0, QT.g)(lB.kind, lB.refusedBytes) ? lB.refusedBytes : 0,
        YB = null === Gp ? (0, rV.o)(function() {
          try {
            return (0, VT.y)().buffer.byteLength
          } catch {
            return 0
          }
        }(), JB, null) : Gp.ceilingMayRefuse(JB),
        gB = JB > 0 && !YB && EY();
      var oB;
      if (gB && ((0, gT.k)("oom"), uJ = !0), AY(), (0, nV.c)()) return console.warn(`${Ay} the session stopped at ${BB.site} as the page reloads`, BB.error), void((0, xT.G)(BB.error) || (null === (oB = BB.header) || void 0 === oB ? void 0 : oB.lastError) === cT.B.CoreBusy || (0, Ed.reportStoppedCore)(BB, TB, lB, {
        memoryDetails: yB,
        declined: gB
      }));
      (0, Ed.showCrash)(BB, TB, lB, {
        memoryDetails: yB,
        declined: gB
      })
    }

    function nY(BB) {
      const {
        input: TB,
        net: dB,
        worker: VB
      } = BB.rings, yB = BB.optionsDropped, pB = TB.dropped + yB + dB.dropped + VB.dropped + ml;
      pB !== vl && function(BB, TB) {
        const dB = performance.now();
        return !(dB - El[BB] < Op) && (El[BB] = dB, console.warn(`${Ay} ${TB}`), !0)
      }("dropped", `${pB} records dropped so far (input ${TB.dropped}, options ${yB}, net ${dB.dropped}, worker ${VB.dropped}, net-out ${ml})`) && (vl = pB)
    }

    function eY() {
      var BB, TB, dB, VB;
      const yB = (0, Od.e)(),
        pB = null === yB ? null : (0, ud.h)(yB);
      return {
        ...null === (BB = Cp) || void 0 === BB ? void 0 : BB.pageKillSnapshot(),
        renderDistance: null === pB ? null : Math.min(pB.horizontal, null !== (TB = null === (dB = Cp) || void 0 === dB ? void 0 : dB.shedDistanceInUse()) && void 0 !== TB ? TB : 1 / 0),
        renderDistanceVertical: null !== (VB = null === pB || void 0 === pB ? void 0 : pB.vertical) && void 0 !== VB ? VB : null,
        chunkCap: qp,
        budgetBasis: xp,
        renderBackend: (0, nV.G)()
      }
    }

    function Bg(BB) {
      console.info(`${Ay} wasm memory at the session's end`, BB.details())
    }

    function Tg(BB, TB) {
      if (!BB.isStopped) try {
        TB()
      } catch (dB) {
        BB.crash(jT.x, dB)
      }
    }

    function dg() {
      return Wp ??= dB.e(63).then((() => dB(42059))).catch((BB => {
        throw Wp = null, BB
      })), Wp
    }
    async function Vg() {
      const {
        createWorldgenWorker: BB,
        worldgenWorkerReady: TB
      } = await dg();
      return await TB(), BB
    }

    function yg(BB) {
      var TB;
      null === (TB = Wp) || void 0 === TB || TB.then(BB, (() => {}))
    }

    function pg(BB, TB, dB) {
      return async function(BB, TB, dB) {
        let {
          stop: VB,
          stillWanted: yB
        } = dB;
        const pB = await (0, DV.k)(BB, {
          stillWanted: yB,
          beforeReload: async () => {
            VB(), await (0, Ed.flushCrashReports)(XB.b)
          },
          reload: XB.i
        });
        return pB || TB(), pB
      }(BB, TB, {
        stop: AY,
        stillWanted: dB
      })
    }
    let lg = !1;

    function Jg() {
      return lg = !0, async function(BB, TB, VB) {
        const {
          gamePackSource: yB
        } = await dB.e(333).then((() => dB(42032)));
        await FY.packStep(BB, ((dB, VB) => dB.packForGame(BB, yB(TB), VB)), VB)
      }(...arguments)
    }

    function Yg(BB) {
      ! function(BB, TB) {
        BB((BB => {
          null === BB || void 0 === BB || BB.subscribe((BB => {
            let {
              pack: dB,
              gameSource: VB
            } = BB;
            TB(null === VB || null === dB ? null : {
              pack: dB,
              source: "" === VB ? null : VB
            })
          }))
        }))
      }(zY, BB)
    }
    let gg = !1,
      og = null,
      kg = !1,
      Lg = !1;

    function Og() {
      var BB;
      gg || (gg = !0, tJ("play", aB), (0, kB.o)(new Mg), JB.gameBridge.attach(UB), mg().catch((() => {})), (0, iB.w)((BB => {
        nB(BB.setTextHost)
      })), BB = Hg, Zl.add(BB), function(BB) {
        for (const TB of ll) BB(TB);
        Jl.add(BB)
      }((BB => {
        ug(Dg[BB])
      })))
    }
    const Dg = {
      booted: pB.i.INITIALISE_NOA,
      texturesIn: pB.i.REGISTRATION,
      modelsIn: pB.i.SETUP_LIFEFORMS
    };

    function ug(BB) {
      YB.h.yH("matchmakeAndPlayStepCompleted", {
        step: BB,
        totalSubSteps: 1
      })
    }

    function Hg(BB) {
      if (!kg) return;
      const {
        gameNameWithVariation: TB,
        lobbyName: dB
      } = (0, kB.e)();
      if (BB.code === VB.b.serverUpdating.code) return (new Mg).leaveLive(), void vg(TB, dB);
      YB.h.yH("unwantedLeftGame", {
        reason: Eg(BB),
        requiresRefresh: BB.requiresRefresh,
        canReconnect: null !== BB.reconnect,
        automaticallyReconnect: BB.reconnecting,
        canPlayAgain: BB.canPlayAgain,
        gameNameWithVariation: TB,
        lobbyName: dB
      }), (new Mg).leaveLive()
    }

    function Eg(BB) {
      return null !== BB.reasonKey ? {
        translationKey: BB.reasonKey
      } : "gameOrPluginKick" === BB.name ? BB.reason : `You have disconnected from the server.\n${BB.reason}`
    }

    function vg(BB, TB) {
      var VB;
      VB = (0, gB.z)(BB, TB), Promise.resolve().then((() => dB(1407))).then((BB => {
        let {
          navigatePreserveSearch: TB
        } = BB;
        TB(VB)
      })).catch((BB => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", BB), (0, XB.d)(VB)
      }))
    }

    function mg() {
      return og ??= Promise.all([dB.e(64), dB.e(67), dB.e(66), dB.e(65), dB.e(77), dB.e(228), dB.e(202), dB.e(226), dB.e(197), dB.e(43)]).then((() => dB(39407))).then((BB => {
        try {
          BB.attachPlayGameSources()
        } catch (TB) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", TB),
            function(BB) {
              Sp.then((TB => {
                null === TB || TB.isStopped || HJ ? console.warn(`${Ay} the play sources threw as they attached, after the client stopped`, BB) : bY({
                  site: Bp,
                  error: BB,
                  header: null
                }, rp)
              }))
            }(TB), TB
        }
      }), (BB => {
        throw og = null, new iB.c(BB)
      })), og
    }
    async function ig(BB, TB) {
      Og(), lg = !0, kg = !0;
      let dB = {
          place: BB.place,
          matchedAt: BB.matchedAt
        },
        lB = BB.place.gameNameWithVariation,
        JB = null;
      const YB = await zJ({
        matchmake: async () => {
          let TB = dB;
          if (dB = null, null === TB) {
            const dB = await BB.rematch();
            if (dB.isError()) throw JB = dB.asError().forward(), new Error(dB.asError().message);
            TB = {
              place: dB.getValue(),
              matchedAt: performance.now()
            }
          }
          lB = TB.place.gameNameWithVariation;
          return {
            target: await (0, IB.f)(BB.userContext, TB.place, wY()),
            matchedAt: TB.matchedAt,
            freshMs: IB.e
          }
        },
        pageReady: mg,
        onFailure: (BB, TB) => {
          null === JB && function(BB, TB) {
            (0, Ed.reportPageJoinFailure)(BB, rp, TB)
          }(BB, {
            sinceJoinStartMs: TB,
            game: lB
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => BB.userContext.invalidateTrafficCode(),
        signal: TB
      });
      switch (YB.kind) {
        case "joined":
          return Lg || (Lg = !0, (0, DB.e)()), kg ? (ug(pB.i.CONNECT_TO_GAME_SERVER), ug(pB.i.SHADER_PACK), KJ() && (0, OB.i)(BB.userContext, lB).catch((BB => {
            console.error("Failed to report the shader pack session", BB)
          })), function() {
            const BB = function() {
              var BB, TB;
              return null !== (BB = null === (TB = pl) || void 0 === TB ? void 0 : TB.couldntRunInJoinedGame()) && void 0 !== BB ? BB : null
            }();
            null !== BB && (0, OB.e)(BB)
          }(), yB.d.value(void 0)) : sg("The server ended the game as it joined");
        case "failed":
          if (!YB.reloading) {
            if (null !== JB) return JB;
            if ((YB.error instanceof KB.p || YB.error instanceof KB.d) && YB.error.code === VB.b.serverUpdating.code) {
              if (TB.aborted) return sg("Left the game while it loaded");
              const {
                gameNameWithVariation: BB,
                lobbyName: dB
              } = (0, kB.e)();
              return vg(BB, dB), sg("The server is updating")
            }
            return YB.error instanceof ZB.d ? yB.d.errorWithCode(YB.error.messageKey, pB.i.SHADER_PACK, {
              severity: "medium"
            }) : yB.d.errorWithCode(function(BB) {
              if (BB instanceof KB.A || BB instanceof EB.i) return BB.message;
              if (Ng(BB)) return (0, FB.m)(BB.code, BB.serverText);
              return FB.h
            }(YB.error), pB.i.CONNECT_TO_GAME_SERVER, {
              error: tg(YB.error) ? YB.error : void 0,
              severity: fg(YB.error),
              gameServerUnreachable: (0, rB.e)(YB.error),
              rematch: (0, HB.d)(YB.error)
            })
          }
          return sg("Reloading into the new build");
        case "stopped":
          return sg("The game client stopped, and shows why");
        case "IT":
          return sg("Left the game while it loaded")
      }
    }

    function Ng(BB) {
      return BB instanceof KB.p || BB instanceof KB.d && "attach" !== BB.stage
    }

    function tg(BB) {
      return !(BB instanceof KB.A) && !Ng(BB) && void 0 === (0, rB.e)(BB)
    }

    function fg(BB) {
      return Ng(BB) ? BB instanceof KB.d && (0, FB.j)(BB.code).requiresRefresh ? "medium" : "low" : tg(BB) || BB instanceof KB.A ? "medium" : "low"
    }

    function sg(BB) {
      return yB.d.errorWithCode(BB, pB.i.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        IT: !0
      })
    }
    class Mg {
      lD(BB) {
        if ((0, vB.b)()) {
          var TB, dB;
          if ((0, lB.c)()) return;
          (0, LB.b)(!0 === (null === (TB = (0, vB.f)()) || void 0 === TB || null === (dB = TB.currentViewer) || void 0 === dB ? void 0 : dB.unsavedChanges), BB)
        } else this.leaveLive()
      }
      leaveLive() {
        var BB;
        lg && (null === (BB = wY()) || void 0 === BB || BB.endGamePack());
        if (!kg) return;
        kg = !1, (0, uB.d)();
        try {
          var TB;
          null === (TB = (0, iB.t)()) || void 0 === TB || TB.clearWasmCameraScreen()
        } catch (VB) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", VB)
        }
        const {
          gameNameWithVariation: dB
        } = (0, kB.e)();
        try {
          RJ()
        } finally {
          (0, kB.r)({
            websocketUrl: null
          }), YB.h.yH("leaveGame", {
            gameNameWithVariation: dB
          }), (0, oB.Q)()
        }
      }
      isReplay() {
        return (0, vB.b)()
      }
    }
  },
  39746: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      f: () => VB,
      g: () => JB,
      j: () => lB
    });
    const VB = 12e4,
      yB = 3e4,
      pB = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: BB => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", BB), () => {
          document.removeEventListener("visibilitychange", BB)
        })
      };

    function lB(BB) {
      return `it sent no start within ${Math.round(BB)} ms`
    }
    class JB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pB;
        this.timeoutMs = BB, this.onTimeout = TB, this.now = dB, this.visibility = VB, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = VB.listen((() => {
          this.onVisibility()
        })), VB.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const BB = this.step;
        return null === BB ? 0 : Math.min(this.now() - BB.at, BB.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const BB = this.timeoutMs - this.counted;
        if (BB <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const TB = Math.min(BB, 5e3);
        this.step = {
          at: this.now(),
          ms: TB
        }, this.arm(TB, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(BB, TB) {
        this.timer = setTimeout((() => {
          this.timer = null, TB()
        }), BB)
      }
    }
  },
  36664: (BB, TB, dB) => {
    function VB(BB) {
      return "string" !== typeof BB || 2 !== BB.length && ":" !== BB[2] ? null : BB[0] + BB[1]
    }

    function yB(BB) {
      const TB = VB(BB);
      return "op" === TB || "ep" === TB || "wi" === TB || "pp" === TB || "fp:call" === BB || "fp:t" === BB
    }

    function pB(BB) {
      return "fp" === VB(BB) && !yB(BB)
    }

    function lB(BB) {
      if ("string" !== typeof BB) return !1;
      return "o" === BB[0] && "p" === BB[1] && (2 === BB.length || ":" === BB[2]) || "fp:call" === BB || "2" === BB || "t" === BB || "a" === BB
    }

    function JB(BB, TB) {
      return `~${function(BB){return BB.length<2?BB:":"===BB[1]?BB[0]:BB[0]+BB[1]}(TB)}~${BB}`
    }
    dB.d(TB, {
      d: () => uB,
      e: () => lB,
      f: () => pB,
      i: () => yB,
      j: () => JB,
      m: () => HB,
      q: () => DB
    });
    const YB = 200;

    function gB(BB) {
      let TB = BB.length - 1;
      for (let dB = 0; dB < 2; dB++) {
        const dB = TB;
        for (; TB >= 0 && BB[TB] >= "0" && BB[TB] <= "9";) TB--;
        if (TB < 0 || TB === dB || ":" !== BB[TB]) return -1;
        TB--
      }
      return TB + 1
    }

    function oB(BB) {
      return "unknown" === BB || gB(BB) >= 0
    }

    function kB(BB, TB) {
      return BB[TB] >= "\ud800" && BB[TB] <= "\udbff" && TB + 1 < BB.length && BB[TB + 1] >= "\udc00" && BB[TB + 1] <= "\udfff" ? 2 : 1
    }

    function LB(BB, TB, dB) {
      return 2 === dB ? 4 : BB[TB] <= "\x7f" ? 1 : BB[TB] <= "\u07ff" ? 2 : 3
    }

    function OB(BB, TB, dB) {
      let VB = 0;
      for (; VB < TB;) {
        const TB = kB(BB, VB),
          yB = LB(BB, VB, TB);
        if (yB > dB) break;
        dB -= yB, VB += TB
      }
      return VB
    }

    function DB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof BB || BB.length > YB || !oB(BB)) return "t";
      let dB = 2;
      for (let JB = 0; JB < BB.length;) {
        const TB = kB(BB, JB);
        dB += LB(BB, JB, TB), JB += TB
      }
      if (dB <= TB) return `t ${BB}`;
      const VB = gB(BB),
        yB = TB - 2 - (BB.length - VB);
      if (yB < 0) return "t";
      const pB = OB(BB, VB, yB);
      let lB = "t ";
      for (let JB = 0; JB < pB; JB++) lB += BB[JB];
      for (let JB = VB; JB < BB.length; JB++) lB += BB[JB];
      return lB
    }
    const uB = 62;

    function HB(BB) {
      let TB = "so:";
      const dB = OB(BB, BB.length, uB - TB.length);
      for (let VB = 0; VB < dB; VB++) TB += BB[VB];
      return TB
    }
  },
  39621: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    const VB = {
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
  37705: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(3211);
    const yB = ["none", "idle", "now"];

    function pB() {
      const BB = () => (0, VB.E)();
      return {
        memoryBytes: () => (0, VB.y)().buffer.byteLength,
        reserveUpFront: TB => BB().Ek(TB),
        reserveAhead: TB => BB().Hk(TB),
        setCeiling: TB => {
          BB().vk(TB)
        },
        lowWater: () => yB[BB().uk()] ?? "none",
        stats: () => function(BB) {
          const TB = new Uint32Array((0, VB.y)().buffer, BB, 17),
            dB = BB => TB[BB] ?? 0,
            yB = BB => ({
              upFront: dB(BB),
              ahead: dB(BB + 1),
              onDemandInFrame: dB(BB + 2),
              onDemand: dB(BB + 3)
            });
          return {
            memoryBytes: dB(0),
            initialBytes: dB(1),
            liveBytes: dB(2),
            peakLiveBytes: dB(3),
            headroomBytes: dB(4),
            unusedBytes: dB(5),
            ceilingBytes: dB(6),
            reservesRefused: dB(7),
            grows: yB(8),
            grownBytes: yB(12),
            allocationsRefused: dB(16)
          }
        }(BB().mk()),
        takeBallast: () => BB().ik(),
        takePressure: () => BB().Nk()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);