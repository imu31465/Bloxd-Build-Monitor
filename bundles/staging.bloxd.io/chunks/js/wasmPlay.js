export const id = 60;
export const ids = [60];
export const modules = {
  38865: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Mb
    });
    const Ab = "The world isn't loaded, so no blocks can be seen.",
      Mb = "The world isn't loaded, so nothing in it can be seen."
  },
  38384: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      f: () => kb,
      i: () => jb
    });
    var Ab = Ub(2621);
    const Mb = 0,
      Tb = 2,
      Eb = 3,
      Yb = 4;
    class Bb {
      constructor(bb, ab) {
        this.width = bb, this.PL = ab, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * ab)
      }
      push(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Ab = 0; Ab < this.width; Ab++) Ub[Ab] = bb[ab + Ab];
        return this.next = (this.next + 1) % this.PL, this.size = Math.min(this.size + 1, this.PL), Ub
      }
      lines() {
        const bb = [],
          ab = (this.next - this.size + this.PL) % this.PL;
        for (let Ub = 0; Ub < this.size; Ub++) {
          const Ab = (ab + Ub) % this.PL * this.width;
          bb.push(Array.from(this.data.subarray(Ab, Ab + this.width)).join(","))
        }
        return bb
      }
    }

    function eb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function vb(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Lb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Iq = 0, this.pastLimit = 0, this.lockSkips = 0, this.qR = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Pb {
      constructor() {
        var bb = this;
        this.tally = new Lb, this.records = new Bb(10, 3600), this.events = new Bb(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Ab, Bb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb] = bb.records.push(ab, Ub), Db = bb.tally;
          switch (Db.frames++, Rb) {
            case Mb:
              return void Db.idle++;
            case Yb:
              return void Db.qR++;
            case Eb:
              return Db.lockSkips++, void(0 === Lb && 0 === Pb || bb.outlier(`lock skip dropped raw (${eb(Lb)}, ${eb(Pb)}) at ${vb(Ab)} ms`))
          }
          Db.looked++, Number.isFinite(Bb) && (Db.dtMin = Math.min(Db.dtMin, Bb), Db.dtMax = Math.max(Db.dtMax, Bb), Db.dtSum += Bb, Bb > 0 && (Db.peakRate = Math.max(Db.peakRate, Math.hypot(Xb, jb) / Bb))), Db.raw[0] += Lb, Db.raw[1] += Pb, Db.turned[0] += Xb, Db.turned[1] += jb;
          const zb = Math.abs(Lb) > Zb || Math.abs(Pb) > Zb,
            xb = `raw (${eb(Lb)}, ${eb(Pb)}) over ${vb(Bb)} ms, limit ${eb(Zb)}, filter v (${kb.toFixed(3)}, ${yb.toFixed(3)}) px/ms, at ${vb(Ab)} ms`;
          Rb === Tb ? (Db.Iq++, bb.outlier(`spike put right: ${xb} -> turned (${eb(Xb)}, ${eb(jb)})`)) : zb ? (Db.pastLimit++, bb.outlier(`kept past limit: ${xb}`)) : Bb > 50 && (Db.longFrames++, bb.outlier(`long frame: ${xb}, turned in full`))
        }, this.onMouseMove = bb => {
          const ab = this.tally,
            {
              movementX: Ub,
              movementY: Ab
            } = bb;
          ab.events++;
          const Mb = Math.max(Math.abs(Ub), Math.abs(Ab));
          ab.eventMax = Math.max(ab.eventMax, Mb);
          const Tb = null !== document.pointerLockElement,
            Eb = this.event;
          Eb[0] = bb.timeStamp, Eb[1] = Ub, Eb[2] = Ab, Eb[3] = Tb ? 1 : 0, this.events.push(Eb), Mb >= 200 && (ab.bigEvents++, this.eventOutlier(`big mousemove (${Ub}, ${Ab}) at ${vb(bb.timeStamp)} ms, lock ${Tb?"PY":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, Ab.n)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${vb(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Ab.n)("look", `pointer lock request failed at ${vb(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Ab.n)("look", `page ${document.visibilityState} at ${vb(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Lb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.Iq && 0 === bb.dropped) return;
          const ab = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            Ub = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.qR} carried`:""})`, `dt avg ${vb(ab)} min ${vb(bb.dtMin)} max ${vb(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${eb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${eb(bb.raw[0])}, ${eb(bb.raw[1])}) turned (${eb(bb.turned[0])}, ${eb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.Iq}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "PY" : "free")];
          bb.dropped > 0 && Ub.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && Ub.push(`${bb.lost} records lost`), bb.suppressed > 0 && Ub.push(`${bb.suppressed} outlier lines not shown`), (0, Ab.n)("look", `1s: ${Ub.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, ab) {
        this.client = bb, this.take = ab;
        const {
          screen: Ub
        } = window;
        (0, Ab.n)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${Ub.width}x${Ub.height}, pointer lock ${document.pointerLockElement?"PY":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Ab.j)("look", this.dump))
      }
      outlier(bb) {
        const ab = this.tally;
        ab.outliers >= 20 ? ab.suppressed++ : (ab.outliers++, (0, Ab.n)("look", bb))
      }
      eventOutlier(bb) {
        const ab = this.tally;
        ab.eventLines >= 10 ? ab.suppressed++ : (ab.eventLines++, (0, Ab.n)("look", bb))
      }
      takeRecords() {
        var bb;
        const ab = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (ab && ab.length >= 2) {
          this.tally.lost += ab[0], this.tally.dropped += ab[1];
          for (let bb = 2; bb + 10 <= ab.length; bb += 10) this.record(ab, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Xb = null;

    function jb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Xb ??= new Pb, Xb.start(bb, ab), Xb.record
    }

    function Rb() {
      var bb;
      null === (bb = Xb) || void 0 === bb || bb.endTake()
    }

    function kb() {
      var bb;
      null === (bb = Xb) || void 0 === bb || bb.droppedCopy()
    }
  },
  8797: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    const Ab = new Set(["chunkBorders"])
  },
  8951: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Mb,
      l: () => vb
    });
    var Ab = Ub(1485);

    function Mb(bb) {
      var ab;
      return {
        ...Eb.store,
        yaw: Eb.store.yaw + (null !== (ab = Ab.d[bb].previewYaw) && void 0 !== ab ? ab : 0)
      }
    }
    const Tb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Eb = {
        player: Tb,
        store: {
          ...Tb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Yb(bb, ab) {
      bb instanceof Promise ? bb.then(ab).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ab(bb)
    }
    class Bb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ab;
        this.view = bb, null === (ab = this.opened) || void 0 === ab || ab.show(bb)
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class eb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ab;
        return null !== (bb = null === (ab = this.opened) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ab) {
        var Ub;
        null === (Ub = this.opened) || void 0 === Ub || Ub.setCosmetic(bb, ab)
      }
      playEmote(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.playEmote(bb)
      }
      setOrbit(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ab;
        await this.ready, await (null === (ab = this.opened) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const vb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Bb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Bb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Bb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ab) {
        return new eb(this.current().openCharacter(bb, ab))
      }
    }
  },
  38523: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Lb,
      h: () => Pb
    });
    var Ab = Ub(166),
      Mb = Ub(195),
      Tb = Ub(1400),
      Eb = Ub(2653),
      Yb = Ub(1413),
      Bb = Ub(35909),
      eb = Ub(622),
      vb = Ub(38489);

    function Lb(bb) {
      (0, Eb.e)("matchmake_failed", bb, Ab.k[Ab.k.SHADER_PACK])
    }
    async function Pb(bb, ab) {
      var Ub;
      const Ab = null === (Ub = await vb.shaderPackPage.preload()) || void 0 === Ub ? void 0 : Ub.listing,
        Eb = (0, Bb.e)();
      Ab && null !== Eb && await Yb.b.reportShaderPackSession(bb, {
        packId: Ab.packId,
        sourceHash: Ab.sourceHash,
        game: (0, Tb.h)(ab, Mb.w, "other"),
        playSessionId: Eb,
        visitSessionId: (0, eb.e)()
      })
    }
  },
  38334: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(1216),
      Tb = Ub(3144);
    const Eb = "Reconnecting";
    class Yb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new Tb.c((ab => bb.reconnect(ab)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: ab => {
            bb.onReconnected(ab)
          },
          onGaveUp: ab => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, ab)
          }
        })
      }
      onInitialInfo(bb, ab) {
        this.graceMs = bb, this.sessionBased = ab
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(bb) {
        this.ended || this.controller.onConnectionLost(bb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const bb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ab = this.controller.heldToken;
        this.end(), bb && "" !== ab && this.hooks.releaseSeat(ab)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const ab = "frozen" === bb || "resuming" === bb;
        ab !== this.stopped && (this.stopped = ab, this.hooks.freeze(ab));
        const Ub = "frozen" === bb || "resuming" === bb && this.frozen;
        Ub && !this.frozen ? (0, Mb.h)(Eb) : !Ub && this.frozen && (0, Mb.g)(Eb), this.frozen = Ub, this.setListening("connected" !== bb), Ab.m.IR(Tb.j, Ub ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38342: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    class Ab {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = ab, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            ab = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const Ub = "visible" === document.visibilityState;
          !Ub || ab && this.wasVisible || (this.resumedAt = bb), this.wasVisible = Ub, Ub && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ab(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  8834: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(1003);

    function Mb() {
      var bb, ab;
      return null !== (bb = null === (ab = screen.orientation) || void 0 === ab ? void 0 : ab.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Tb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Mb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Mb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ab.UR)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let ab = !1;
        return () => {
          if (ab && this.isHeld()) return null;
          const Ub = bb();
          return ab ||= null !== Ub, Ub
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  38511: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb
    });
    let Ab = !1;
    async function Mb(bb, ab) {
      if (!Ab) {
        Ab = !0;
        try {
          const [{
            reloadBloxd: Ab
          }, {
            NotificationProvider: Mb
          }] = await Promise.all([Promise.resolve().then((() => Ub(1639))), Promise.resolve().then((() => Ub(1260)))]);
          if (!bb || !0 === await Mb.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void Ab(ab)
        } catch (Mb) {
          console.error("Leaving the replay failed", Mb)
        }
        Ab = !1
      }
    }
  },
  38350: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      e: () => vb
    });
    var Ab = Ub(1629),
      Mb = Ub(205),
      Tb = Ub(1605),
      Eb = Ub(1683),
      Yb = Ub(1142),
      Bb = Ub(1065);
    async function eb(bb, ab) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Mb.b.VpnIp.code
      }(ab) && function(bb) {
        return Tb.d.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: ab
          } = await (0, Eb.d)(), {
            "3PSIDMCPP": Ub
          } = await (0, Bb.postJsonWithMetricsCookiesAndJsonResponse)(`${Yb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ab
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(Ub), !0
        } catch (ab) {
          return ab instanceof Ab.b && "failed" === ab.code ? (console.warn("The app couldn't get an App Check token:", ab), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", ab), !1
        }
      }(bb)
    }
    async function vb(bb, ab) {
      try {
        return await ab()
      } catch (Ub) {
        if (!await eb(bb, Ub)) throw Ub
      }
      return ab()
    }
  },
  40153: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb
    });
    var Ab = Ub(1655);
    const Mb = 33177600,
      Tb = 3e4;
    let Eb = !1;

    function Yb(bb, ab, Ub) {
      if (!bb.drawing()) return Promise.reject(new Error("Screenshots need a game to be running"));
      if (Eb) return Promise.reject(new Error("A screenshot is already being taken"));
      Eb = !0;
      const Ab = function(bb, ab, Ub) {
        const Ab = Math.max(1, bb),
          Tb = Math.max(1, ab),
          Eb = Math.min(1, Ub / Math.max(Ab, Tb), Math.sqrt(Mb / (Ab * Tb)));
        return {
          width: Math.max(1, Math.floor(Ab * Eb)),
          height: Math.max(1, Math.floor(Tb * Eb))
        }
      }(ab, Ub, bb.maxTextureSize);
      return bb.resize(Ab.width, Ab.height), new Promise(((ab, Ub) => {
        let Ab, Mb = 2,
          Yb = null;
        const Bb = () => {
          var ab;
          Eb = !1, null === (ab = Yb) || void 0 === ab || ab(), clearTimeout(Ab), bb.restoreSize()
        };
        Ab = setTimeout((() => {
          Bb(), Ub(new Error("No frame was drawn to capture"))
        }), Tb), Yb = bb.onFrameDrawn((() => {
          if (Mb--, Mb > 0) return;
          const {
            canvas: Ab
          } = bb, Tb = {
            width: Ab.width,
            height: Ab.height
          };
          try {
            Ab.toBlob((bb => {
              bb ? ab({
                blob: bb,
                ...Tb
              }) : Ub(new Error("The canvas gave no image"))
            }), "image/png")
          } catch (Eb) {
            Ub(Eb)
          } finally {
            Bb()
          }
        }))
      }))
    }
    async function Bb(bb, ab, Ub) {
      try {
        const Mb = await Yb(bb, ab, Ub);
        (0, Ab.c)(Mb.blob, `bloxd-screenshot-${Mb.width}x${Mb.height}-${Date.now()}.png`)
      } catch (Mb) {
        console.error("Error taking screenshot:", Mb)
      }
    }
  },
  38345: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      h: () => vb
    });
    var Ab = Ub(205),
      Mb = Ub(1704),
      Tb = Ub(1710),
      Eb = Ub(8463);
    const Yb = [250, 500, 1e3, 2e3, 1250],
      Bb = 406;

    function eb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: ab,
        message: Ub
      } = bb, Mb = Ab.b.duplicateLobbyNameError;
      return (ab === Mb.code || ab === Bb) && (Ub === Mb.text || Ub === Mb.text + Ab.h)
    }
    async function vb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.b;
      for (let Mb = 0;; Mb++) {
        let Eb;
        (0, Tb.h)(ab);
        try {
          return await bb()
        } catch (Ab) {
          if (Eb = Yb[Mb], void 0 === Eb || !eb(Ab)) throw Ab
        }
        await Ub(Eb, ab)
      }
    }
    const Lb = new Set([Ab.b.duplicateLobbyNameError.code, Ab.b.lobbyCantBeCreated.code, Ab.b.roomDisposedEarlyError.code, Ab.b.roomDisposedLateError.code, Ab.b.serverRoomLimitReached.code]);

    function Pb(bb) {
      if (eb(bb)) return !0;
      const ab = (0, Eb.h)(bb);
      return "number" === typeof ab && Lb.has(ab)
    }
  },
  8463: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Eb,
      l: () => Yb,
      p: () => eb,
      t: () => Bb
    });
    var Ab = Ub(205),
      Mb = Ub(4317);

    function Tb(bb) {
      return Eb(bb) === Ab.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Eb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Yb(bb) {
      var ab;
      return null !== (ab = Object.keys(Mb.e).find((ab => Mb.e[ab] === bb))) && void 0 !== ab ? ab : null
    }

    function Bb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const eb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38448: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(307),
      Mb = Ub(137),
      Tb = Ub(31);

    function Eb() {
      Tb.f.setItem(Ab.Gb, Tb.f.getItem(Ab.Gb) + 1), (0, Mb.j)() && Tb.f.setItem(Ab.Db, Tb.f.getItem(Ab.Db) + 1)
    }
  },
  35900: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Zb,
      i: () => Db
    });
    var Ab = Ub(950),
      Mb = Ub(595),
      Tb = Ub(325),
      Eb = Ub(954),
      Yb = Ub(603),
      Bb = Ub(644),
      eb = Ub(4201),
      vb = Ub(101),
      Lb = Ub(137),
      Pb = Ub(1639),
      Xb = Ub(116),
      jb = Ub(35909),
      Rb = Ub(31),
      kb = Ub(622),
      yb = Ub(35911);

    function Zb() {
      var bb, ab;
      return [...null !== (bb = navigator.languages) && void 0 !== bb ? bb : [null !== (ab = navigator.language) && void 0 !== ab ? ab : "none"], "en-Gb"]
    }

    function Db(bb, ab, Ub, Db, zb) {
      const xb = (0, Ab.l)(ab) ? (0, Ab.p)(ab) : null,
        ib = {
          cookies: (0, Pb.getAllCookiesForGameNameWithVariation)(ab),
          isMobile: (0, vb.isMobile)(),
          isUsingCustomGameTexturePack: null !== xb && zb(xb),
          generalCookies: {
            joinDiscord: !!Rb.f.getItem("DiscordPressed"),
            newGo: eb.d,
            ...bb.getMetricsCookies(),
            trafficCode: Db,
            compliance: vb.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vb.getBrowserName)(),
            version: (0, vb.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vb.getPlatformType)(),
            deviceType: (0, Xb.b)()
          },
          isLoggedIn: bb.isLoggedIn(),
          lobbyName: Ub,
          languages: Zb(),
          version: Mb.b,
          siteUsed: Lb.p,
          subsiteUsed: Lb.s,
          playSessionId: (0, jb.l)(ab),
          visitSessionId: (0, kb.e)(),
          clientReason: Yb.j.reason,
          budgetBasis: (0, yb.g)(),
          ...null !== Bb.q && {
            diagClaim: Bb.q.claimId
          }
        };
      return null !== xb && (0, Tb.oc)(xb) ? (ib.lobbyName = (0, Ab.i)(xb, (0, Ab.m)(ab), Ub), {
        roomName: `classic_${Eb.e}`,
        joinOptions: ib
      }) : {
        roomName: ab,
        joinOptions: ib
      }
    }
  },
  39778: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = Ub(38865);

    function Mb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Tb() {}
    const Eb = Object.freeze([0, 0, 0]),
      Yb = {
        states: {
          health: Mb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Mb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Mb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Mb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Mb({}),
          creativeVisibility: Mb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Mb(null),
          heldItemAim: Mb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Mb(!1),
          gliderBoostFuel: Mb(0),
          flight: Mb({
            canFly: !1,
            flying: !1
          }),
          crafting: Mb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Mb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Mb({}),
          fullInventory: Mb(!1),
          crosshairTarget: Mb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Mb(!0),
          freeCamera: Mb({
            allowed: !1,
            movesFly: !1
          }),
          replay: Mb(null),
          replayEdits: Mb(null),
          replayRecorder: Mb({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Mb(!1)
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
          selectHotbarSlot: Tb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Tb,
          setInventoryOpen: Tb,
          changeIronChestPasskey: Tb,
          dragReplayCamera: Tb,
          applyTemporaryThirdPerson: Tb,
          holdEmoteWheel: Tb,
          recordFlyingMiddleText: Tb,
          focusCrafting: Tb,
          craftRecipe: () => ({
            Ev: 0,
            Qv: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Tb,
          setShopOpen: Tb,
          buyShopItem: Tb,
          sendChatMessage: Tb,
          ignorePlayer: Tb,
          reportPlayer: Tb,
          reportWorldCodeChat: Tb,
          requestDiscordReportKey: Tb,
          reportLobbyOrGame: Tb,
          playEmote: Tb,
          updateMyCosmetic: Tb,
          writeOnBoard: Tb,
          writeBook: Tb,
          writeNameTag: Tb,
          setCustomLobbyBlock: Tb,
          openIronChest: Tb,
          sendCodeCollab: Tb,
          clickCodeBlock: Tb,
          bindCustomButtonKeys: Tb,
          pressCustomButton: Tb,
          moveReplayFreecam: Tb,
          holdReplayFreecamVertical: Tb,
          respawn: Tb,
          wakeUp: Tb,
          requestLeaderboard: Tb,
          completeTask: Tb,
          setServerCookie: Tb,
          answerUiRequest: Tb,
          chooseRewardedAd: Tb,
          setCameraZoom: Tb,
          setFreeCameraMovesFly: Tb,
          setBlockHighlight: Tb,
          setCrosshairInteractPrompt: Tb,
          setLookSensitivity: Tb,
          replayAction: Tb,
          setReplayPlaying: Tb,
          seekReplay: Tb,
          setReplayCameraMode: Tb,
          syncReplayCameraMode: Tb,
          setReplayCameraKeyframe: Tb,
          moveReplayCameraKeyframe: Tb,
          deleteReplayCameraKeyframes: Tb,
          setReplayPlaybackMark: Tb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Tb,
          exportReplayVideo: Tb,
          toggleRecording: Tb,
          saveClip: Tb,
          setRecorderPrefs: Tb,
          setReplayViewerOpen: Tb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ab.e,
          worldCodeAiGameState: () => Ab.f
        },
        lookups: {
          localPos: () => Eb,
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
  35911: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => ib,
      g: () => xb,
      k: () => zb
    });
    var Ab = Ub(205),
      Mb = Ub(101),
      Tb = Ub(2630),
      Eb = Ub(4072),
      Yb = Ub(610),
      Bb = Ub(35913);
    const eb = 1048576,
      vb = 1024 * eb,
      Lb = 400 * eb,
      Pb = 147456,
      Xb = .5,
      jb = 1.5 * vb,
      Rb = 768 * eb;

    function kb(bb) {
      return Lb + bb * Pb
    }

    function yb(bb, ab, Ub) {
      var Mb, Eb;
      let {
        footprintBytes: Yb,
        basis: eb,
        namesLimit: yb
      } = function(bb) {
        const {
          os: ab,
          deviceMemory: Ub
        } = bb;
        if ("ios" === ab) switch ((0, Tb.h)(bb)) {
          case "ipad_m":
            return {
              footprintBytes: kb(Bb.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Rb, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: jb, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Rb, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Ub && Number.isFinite(Ub) && Ub > 0 ? {
          footprintBytes: Ub * vb * Xb,
          basis: `memory-${Ub}`,
          namesLimit: !0
        } : "android" === ab ? {
          footprintBytes: Rb,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: kb(Bb.h),
          basis: "unreported",
          namesLimit: !1
        }
      }(bb);
      if (Ub) {
        const bb = Math.min(Yb, kb(Bb.e));
        Yb = Lb + Math.max(0, bb - Lb) / 2, eb += "+killed", yb = !0
      }
      null !== ab && kb(ab) < Yb && (Yb = kb(ab), eb += "+learned", yb = !0);
      const Zb = function(bb) {
          const ab = Math.floor((bb - Lb) / Pb);
          return Math.min(Bb.e, Math.max(Bb.g, ab))
        }(Yb),
        Db = (0, Bb.n)(Zb);
      return {
        footprintBytes: Yb,
        shedFootprintBytes: yb ? Math.max(Yb, kb(Zb)) : null,
        chunkCap: Zb,
        maxHorizDistance: null !== (Mb = null === Db || void 0 === Db ? void 0 : Db.horizontal) && void 0 !== Mb ? Mb : Ab.c.maxChunkHorizAddDistance,
        maxVertDistance: null !== (Eb = null === Db || void 0 === Db ? void 0 : Db.vertical) && void 0 !== Eb ? Eb : Ab.c.maxChunkVertAddDistance,
        basis: eb
      }
    }
    let Zb = null;

    function Db() {
      return yb({
        os: (0, Mb.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Tb.k)()
      }, (0, Eb.f)(), (0, Yb.J)("wasm").length > 0)
    }

    function zb() {
      return Zb ??= Db(), Zb
    }

    function xb() {
      var bb;
      return (null !== (bb = Zb) && void 0 !== bb ? bb : Db()).basis
    }

    function ib(bb, ab) {
      return bb.setChunkCap(ab.chunkCap)
    }
  },
  40149: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      g: () => Tb
    });
    var Ab = Ub(2890),
      Mb = Ub(950);

    function Tb(bb, ab) {
      return null !== bb.gameSource && (0, Ab.n)(ab, bb.gameSource)
    }

    function Eb(bb, ab) {
      if (null === bb.gameSource || "" === bb.gameSource || null === ab) return !0;
      const Ub = (0, Mb.l)(ab) ? (0, Mb.p)(ab) : null;
      return null !== Ub && Tb(bb, Ub)
    }
  },
  40133: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb
    });
    var Ab = Ub(580),
      Mb = Ub(40136),
      Tb = Ub(40092);
    async function Eb(bb) {
      const ab = await (0, Mb.j)({
        Helmet: Ub(37312),
        Chestplate: Ub(37314),
        Gauntlets: Ub(37331),
        Leggings: Ub(37318),
        Boots: Ub(37323)
      } [Ab.b[bb]]);
      try {
        return (0, Tb.q)(ab)
      } finally {
        ab.close()
      }
    }
    const Yb = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eb,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb.o;
        this.decode = bb, this.register = ab, this.decoded = new Map
      }
      warm() {
        for (let bb = 0; bb < Ab.b.length; bb++) this.part(bb).catch((ab => {
          console.warn(`The grayscale armour ${Ab.b[bb]} image didn't decode ahead of use`, ab)
        }))
      }
      async load(bb, ab) {
        const {
          width: Ub,
          height: Tb,
          pixels: Eb
        } = await this.part(bb), Yb = new ImageData(function(bb, ab) {
          const Ub = new Uint8ClampedArray(bb.length);
          for (let Ab = 0; Ab < bb.length; Ab += 4) Ub[Ab] = Math.round(bb[Ab] * ab[0] / 255), Ub[Ab + 1] = Math.round(bb[Ab + 1] * ab[1] / 255), Ub[Ab + 2] = Math.round(bb[Ab + 2] * ab[2] / 255), Ub[Ab + 3] = bb[Ab + 3];
          return Ub
        }(Eb, function(bb) {
          return [bb >>> 16 & 255, bb >>> 8 & 255, 255 & bb]
        }(ab)), Ub, Tb);
        let Bb;
        try {
          Bb = await createImageBitmap(Yb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (eb) {
          throw new Mb.e("decode", `grayscale armour ${Ab.b[bb]}`, {
            cause: eb
          })
        }
        return {
          id: this.register(Bb),
          width: Ub,
          height: Tb
        }
      }
      part(bb) {
        const ab = this.decoded.get(bb);
        if (void 0 !== ab) return ab;
        const Ub = this.decode(bb).catch((ab => {
          throw this.decoded.delete(bb), ab instanceof Mb.e ? ab : new Mb.e("decode", `grayscale armour ${Ab.b[bb]}`, {
            cause: ab
          })
        }));
        return this.decoded.set(bb, Ub), Ub
      }
    }
  },
  40126: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      d: () => kb,
      f: () => vb,
      h: () => Lb,
      l: () => Rb
    });
    var Ab = Ub(40073),
      Mb = Ub(40133),
      Tb = Ub(40136);
    const Eb = 396,
      Yb = 1,
      Bb = 2,
      eb = 3,
      vb = {
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
      Lb = {
        File: 0,
        Item: 1
      },
      Pb = 0,
      Xb = 1,
      jb = 2;

    function Rb(bb) {
      const ab = (0, Ab.o)();
      ab.catch((() => {}));
      let Mb = null;
      return {
        glbUrl: bb,
        lifeformAtlasUrl: async bb => (await ab).lifeformAtlasUrl(bb),
        armourAtlasUrl: async () => (await Ub.e(201).then((() => Ub(33702)))).armourAtlasUrl,
        capeUrl: async bb => (await ab).capeUrl(bb),
        attachmentImageUrl: async bb => (await ab).attachmentImageUrl(bb),
        blockImageUrl: async bb => (await ab).blockImageUrl(bb),
        groupAtlasUrl: async bb => (await ab).groupAtlasUrl(bb),
        particleTextureUrl: async bb => (await ab).particleTextureUrl(bb),
        particleItemUrl: async bb => (Mb ??= Ub.e(38).then((() => Ub(50737))).catch((bb => {
          throw Mb = null, bb
        })), (await Mb).particleItemUrl(bb))
      }
    }
    class kb {
      constructor(bb, ab) {
        var Ub, Eb, Yb, Bb;
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = bb, this.onFailure = ab, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.cX = !1, this.load = null !== (Ub = eb.load) && void 0 !== Ub ? Ub : (bb, ab) => (0, Tb.k)(bb, eb.fetchImage, ab), this.release = null !== (Eb = eb.release) && void 0 !== Eb ? Eb : Tb.s, this.fetchFile = null !== (Yb = eb.fetchFile) && void 0 !== Yb ? Yb : bb => (0, Ab.i)(bb), this.greyscaleArmour = null !== (Bb = eb.greyscaleArmour) && void 0 !== Bb ? Bb : Mb.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(bb, ab) {
        this.glbWrittenImages.set(bb, fb(ab))
      }
      glbTaken(bb, ab) {
        const Ub = this.glbWrittenImages.get(bb);
        this.glbWrittenImages.delete(bb), ab && this.setGlbImages(bb, void 0 !== Ub && Ub.length > 0 ? Ub : void 0)
      }
      setGlbImages(bb, ab) {
        var Ub;
        this.glbTakenCount.set(bb, (null !== (Ub = this.glbTakenCount.get(bb)) && void 0 !== Ub ? Ub : 0) + 1), void 0 === ab ? this.glbImages.delete(bb) : this.glbImages.set(bb, ab);
        const Ab = [];
        for (const {
            key: Mb
          }
          of this.loading.values()) Mb.kind === vb.Glb && Mb.word === bb && Ab.push(Mb);
        for (let Mb = this.ready.length - 1; Mb >= 0; Mb--) {
          const {
            key: ab,
            id: Ub
          } = this.ready[Mb];
          ab.kind === vb.Glb && ab.word === bb && (this.ready.splice(Mb, 1), null !== Ub && (this.answered.delete(Ub), this.release(Ub)), Ab.push(ab))
        }
        this.loadAgain(Ab)
      }
      onEvent(bb) {
        if (this.cX) return;
        const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
        for (let Ub = 0; Ub + 8 <= bb.byteLength; Ub += 8) {
          const bb = ab.getUint8(Ub),
            Ab = ab.getUint32(Ub + 4, !0);
          if (bb === eb) {
            this.answered.delete(Ab), this.release(Ab);
            continue
          }
          const Mb = {
            kind: ab.getUint8(Ub + 1),
            index: ab.getUint8(Ub + 2),
            word: Ab
          };
          bb === Yb ? this.want(Mb) : bb === Bb && this.loading.delete(yb(Mb))
        }
      }
      reload(bb, ab) {
        const Ub = Ub => bb.includes(Ub.kind) && (void 0 === ab || ab(Ub)),
          Ab = new Map;
        for (const Mb of this.answered.values()) Ub(Mb) && Ab.set(yb(Mb), Mb);
        for (const [Mb, {
            key: Tb
          }] of this.loading) Ub(Tb) && Ab.set(Mb, Tb);
        this.loadAgain(Ab.values())
      }
      loadAgain(bb) {
        for (const ab of bb) this.loading.delete(yb(ab)), this.want(ab)
      }
      drain(bb) {
        if (null !== bb)
          for (; this.ready.length > 0;) {
            if (!bb(Eb, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.cX = !0, this.loading.clear(), this.ready.length = 0;
        for (const bb of this.answered.keys()) this.release(bb);
        this.answered.clear()
      }
      want(bb) {
        const ab = yb(bb);
        if (this.loading.has(ab)) return;
        const Ub = {
          key: bb
        };
        this.loading.set(ab, Ub), this.loadKey(bb).then((Ab => {
          this.cX || this.loading.get(ab) !== Ub ? this.release(Ab.id) : (this.loading.delete(ab), this.answered.set(Ab.id, bb), this.ready.push({
            record: Db(bb, Pb, Ab),
            key: bb,
            id: Ab.id
          }))
        }), (Ab => {
          if (this.cX || this.loading.get(ab) !== Ub) return;
          this.loading.delete(ab), this.onFailure({
            key: bb,
            error: Ab
          });
          const Mb = Ab instanceof Tb.e && "decode" === Ab.stage ? Xb : jb;
          this.ready.push({
            record: Db(bb, Mb, null),
            key: bb,
            id: null
          })
        }))
      }
      async loadKey(bb) {
        switch (bb.kind) {
          case vb.Glb:
            return this.load(await this.glbImage(bb), "none");
          case vb.LifeformAtlas:
            return this.load(Zb(await this.sources.lifeformAtlasUrl(bb.word), bb), "none");
          case vb.ArmourAtlas:
            return this.load(Zb(await this.sources.armourAtlasUrl(), bb), "none");
          case vb.Cape:
            return this.load(Zb(await this.sources.capeUrl(bb.word), bb), "none");
          case vb.AttachmentImage:
            return this.load(Zb(await this.sources.attachmentImageUrl(bb.word), bb), "none");
          case vb.GroupAtlas:
            return this.load(Zb(await this.sources.groupAtlasUrl(bb.word), bb), "none");
          case vb.BlockImage:
            return this.load(Zb(await this.sources.blockImageUrl(bb.word), bb), "none");
          case vb.Particle: {
            const ab = await (bb.index === Lb.Item ? this.sources.particleItemUrl(bb.word) : this.sources.particleTextureUrl(bb.word));
            return this.load(Zb(ab, bb), "flipY")
          }
          case vb.GreyscaleArmour:
            return this.greyscaleArmour.load(bb.index, bb.word);
          default:
            throw new Tb.e("fetch", `image kind ${bb.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(bb) {
        var ab;
        let Ub = this.glbImages.get(bb.word);
        if (void 0 === Ub) {
          const ab = this.glbTakenCount.get(bb.word),
            Ab = Zb(await this.sources.glbUrl(bb.word), bb);
          try {
            Ub = fb(await this.fetchFile(Ab))
          } catch (Mb) {
            throw new Tb.e("fetch", Ab, {
              cause: Mb
            })
          }
          this.glbTakenCount.get(bb.word) === ab && this.glbImages.set(bb.word, Ub)
        }
        const Ab = null === (ab = Ub) || void 0 === ab ? void 0 : ab[bb.index];
        if (!Ab) throw new Tb.e("decode", `image ${bb.index} of file ${2147483647&bb.word}`, {
          cause: null
        });
        return Ab
      }
    }

    function yb(bb) {
      let {
        kind: ab,
        index: Ub,
        word: Ab
      } = bb;
      return `${ab}:${Ub}:${Ab}`
    }

    function Zb(bb, ab) {
      if (null === bb) throw new Tb.e("fetch", `no URL for image ${yb(ab)}`, {
        cause: null
      });
      return bb
    }

    function Db(bb, ab, Ub) {
      var Ab, Mb, Tb;
      const Eb = new Uint8Array(16),
        Yb = new DataView(Eb.buffer);
      return Yb.setUint8(0, bb.kind), Yb.setUint8(1, bb.index), Yb.setUint8(2, ab), Yb.setUint32(4, bb.word, !0), Yb.setUint32(8, null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.id) && void 0 !== Ab ? Ab : 0, !0), Yb.setUint16(12, Math.min(null !== (Mb = null === Ub || void 0 === Ub ? void 0 : Ub.width) && void 0 !== Mb ? Mb : 0, 65535), !0), Yb.setUint16(14, Math.min(null !== (Tb = null === Ub || void 0 === Ub ? void 0 : Ub.height) && void 0 !== Tb ? Tb : 0, 65535), !0), Eb
    }
    const zb = 1179937895,
      xb = 1313821514,
      ib = 5130562;

    function fb(bb) {
      var ab;
      const Ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      if (bb.byteLength < 20 || Ub.getUint32(0, !0) !== zb || Ub.getUint32(16, !0) !== xb) return [];
      let Ab, Mb = 20 + Ub.getUint32(12, !0);
      try {
        Ab = JSON.parse((new TextDecoder).decode(bb.subarray(20, Mb)))
      } catch {
        return []
      }
      for (; Mb + 8 <= bb.byteLength && Ub.getUint32(Mb + 4, !0) !== ib;) Mb += 8 + Ub.getUint32(Mb, !0);
      const Tb = null !== (ab = Ab.images) && void 0 !== ab ? ab : [];
      if (0 === Tb.length || Mb + 8 > bb.byteLength) return Tb.map((() => null));
      const Eb = bb.subarray(Mb + 8, Math.min(bb.byteLength, Mb + 8 + Ub.getUint32(Mb, !0)));
      return Tb.map((bb => {
        var ab, Ub, Mb;
        const Tb = void 0 === bb.bufferView || null === (ab = Ab.bufferViews) || void 0 === ab ? void 0 : ab[bb.bufferView];
        if (!Tb || 0 !== (null !== (Ub = Tb.buffer) && void 0 !== Ub ? Ub : 0) || void 0 === Tb.byteLength) return null;
        const Yb = null !== (Mb = Tb.byteOffset) && void 0 !== Mb ? Mb : 0,
          Bb = Yb + Tb.byteLength;
        return Bb <= Eb.byteLength ? Eb.slice(Yb, Bb) : null
      }))
    }
  },
  39780: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      c: () => Tb,
      f: () => Mb
    });
    let Ab = null;

    function Mb(bb) {
      Ab = bb
    }

    function Tb(bb) {
      Ab === bb && (Ab = null)
    }

    function Eb() {
      var bb;
      null === (bb = Ab) || void 0 === bb || bb()
    }
  },
  36008: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb,
      e: () => Pb,
      g: () => yb,
      i: () => eb
    });
    var Ab = Ub(19),
      Mb = Ub(2254),
      Tb = Ub(2260),
      Eb = Ub(2262),
      Yb = Ub(2313),
      Bb = Ub(22);

    function eb(bb, ab) {
      return (!(0, Eb.d)() || 0 === bb && 0 === ab) && (0, Tb.o)(Mb.g.Joystick, 0, bb, ab, 0)
    }
    const vb = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Lb(bb) {
      return bb.classList.contains("TouchKeyHit") && Xb() ? null : bb.firstElementChild
    }

    function Pb(bb) {
      return bb.classList.contains("TouchKeyHit") && !bb.classList.contains("CanvasZone") ? {
        whole: !Xb(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: jb(Lb(bb))
      }
    }

    function Xb() {
      return document.documentElement.classList.contains(Yb.m)
    }

    function jb(bb) {
      return !(bb instanceof HTMLElement) || bb.offsetWidth <= 0 || bb.offsetHeight <= 0 ? null : {
        width: bb.offsetWidth,
        height: bb.offsetHeight
      }
    }

    function Rb(bb, ab) {
      const Ub = bb => Math.min(65535, Math.round(4 * bb));
      return (Ub(bb) | Ub(ab) << 16) >>> 0
    }

    function kb(bb) {
      return {
        x: bb.left + bb.width / 2,
        y: bb.top + bb.height / 2,
        radius: Math.min(bb.width, bb.height) / 2
      }
    }
    const yb = new class {
      constructor(bb) {
        this.write = bb, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ab ? this.elements.set(bb, {
          element: ab,
          hidden: Ub
        }) : this.elements.delete(bb), this.measureOne(bb)
      }
      measure() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = bb.left, this.canvasTop = bb.top;
        for (const ab of this.elements.keys()) this.measureOne(ab)
      }
      hitZone(bb, ab) {
        let Ub = null,
          Ab = 1;
        for (const Mb of this.elements.keys()) {
          const Tb = this.shown(Mb);
          if (!Tb) continue;
          const {
            rect: Eb,
            element: Yb
          } = Tb, Bb = kb(Eb), eb = Math.max(0, Eb.width / 2 - Bb.radius), vb = Math.max(0, Eb.height / 2 - Bb.radius), Pb = Math.max(0, Math.abs(bb - Bb.x) - eb), Xb = Math.max(0, Math.abs(ab - Bb.y) - vb), Rb = Yb.firstElementChild;
          let yb = Math.hypot(Pb, Xb) / Bb.radius;
          const Zb = jb(Lb(Yb));
          Zb && (yb = Math.min(yb, Math.max(2 * Math.abs(bb - Bb.x) / Zb.width, 2 * Math.abs(ab - Bb.y) / Zb.height))), yb < Ab && (Ub = {
            code: Mb,
            element: Yb,
            key: Rb,
            ...Bb
          }, Ab = yb)
        }
        return Ub
      }
      measureOne(bb) {
        const ab = this.shown(bb);
        if (!ab) return void this.write(Mb.g.TouchZone, bb, 0, 0, 0);
        const {
          rect: Ub,
          element: Ab
        } = ab, Tb = kb(Ub);
        this.write(Mb.g.TouchZone, bb, Tb.x - this.canvasLeft, Tb.y - this.canvasTop, Rb(Ub.width, Ub.height));
        const Eb = jb(Lb(Ab));
        this.write(Mb.g.TouchZone, 256 | bb, 0, 0, Eb ? Rb(Eb.width, Eb.height) : 0)
      }
      shown(bb) {
        const ab = this.elements.get(bb),
          Ub = Ab.c.get("worldPanelHud");
        if (!ab || ab.hidden || "none" === Ub) return null;
        const Mb = ab.element.getBoundingClientRect();
        return Mb.width <= 0 || Mb.height <= 0 ? null : {
          rect: Mb,
          element: ab.element
        }
      }
    }(Tb.o);
    (0, Bb.n)(Yb.i, (() => {
      yb.measure()
    }))
  },
  40009: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      e: () => eb
    });
    var Ab = Ub(40012),
      Mb = Ub(38350),
      Tb = Ub(35900),
      Eb = Ub(39940),
      Yb = Ub(39992);
    const Bb = Ab.b.timeForPlayerToConnect - 1e4;
    async function eb(bb, ab, Ub, Ab) {
      let Bb;
      try {
        Bb = await bb.getTrafficCode()
      } catch (jb) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", jb), new Yb.A(jb)
      }
      const {
        gameNameWithVariation: eb,
        lobbyName: vb
      } = ab, Lb = () => {
        const ab = (0, Tb.i)(bb, eb, vb, Bb, (bb => {
          var ab;
          return null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.isUsingCustomGameTexturePack(bb)) && void 0 !== ab && ab
        }));
        ab.joinOptions.wasmClient = !0;
        const Mb = (0, Eb.G)();
        return null !== Mb && (ab.joinOptions.renderBackend = Mb), ab.joinOptions.joinAdHold = Ab, ab
      }, {
        roomName: Pb,
        joinOptions: Xb
      } = Lb();
      return {
        endpoint: ab.endpoint,
        roomName: Pb,
        joinOptions: Xb,
        session: {
          gameNameWithVariation: eb,
          lobbyName: vb,
          playerDbId: bb.whamm
        },
        optionsAfterRefusal: async ab => await (0, Mb.b)(bb, ab) ? Lb().joinOptions : null
      }
    }
  },
  4709: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      e: () => Eb
    });
    var Ab = Ub(2890),
      Mb = Ub(4711);
    let Tb = null;

    function Eb(bb, ab) {
      Tb = {
        pack: bb.metaData.id === Ab.b ? null : bb,
        prompt: ab
      }
    }

    function Yb(bb, ab) {
      const Ub = Tb;
      null !== Ub && (0, Mb.c)(Ub.pack, bb) && (Tb = null, ab && Ub.prompt())
    }
  },
  40140: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      g: () => Tb,
      i: () => Lb,
      j: () => Eb
    });
    var Ab = Ub(40126),
      Mb = Ub(40073);
    const Tb = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(bb) {
        this.change((() => {
          this.page = bb
        }))
      }
      setSessionFiles(bb) {
        const ab = void 0 !== this.session && void 0 === bb;
        if (this.change((() => {
            this.session = bb
          })), ab)
          for (const Ub of [...this.pageListeners]) Ub()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(bb) {
        return this.pageListeners.add(bb), () => {
          this.pageListeners.delete(bb)
        }
      }
      setFollower(bb) {
        this.follower = bb, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const bb of [...this.wantedListeners]) bb();
        this.startFollower()
      }
      onWanted(bb) {
        return this.wantedListeners.add(bb), () => {
          this.wantedListeners.delete(bb)
        }
      }
      onChange(bb) {
        return this.listeners.add(bb), () => {
          this.listeners.delete(bb)
        }
      }
      startFollower() {
        const bb = this.follower;
        this.isWanted && null !== bb && (this.follower = null, bb((() => {
          this.follower = bb
        })))
      }
      change(bb) {
        const ab = this.current;
        if (bb(), this.current !== ab)
          for (const Ub of this.listeners) Ub()
      }
    };

    function Eb(bb, ab) {
      return {
        ...bb,
        armourAtlasUrl: () => {
          var Ub, Ab;
          return null !== (Ub = null === (Ab = ab()) || void 0 === Ab ? void 0 : Ab.armourAtlasUrl()) && void 0 !== Ub ? Ub : bb.armourAtlasUrl()
        },
        lifeformAtlasUrl: Ub => Bb(ab(), (bb => bb.LIFEFORM_ATLAS_PATHS[Ub]), (() => bb.lifeformAtlasUrl(Ub))),
        groupAtlasUrl: Ub => Bb(ab(), (bb => bb.GROUP_ATLAS_PATHS[Ub]), (() => bb.groupAtlasUrl(Ub))),
        particleItemUrl: Ab => eb(ab(), (async () => {
          const bb = await Ub.e(38).then((() => Ub(50737))).catch((() => null));
          return (null === bb || void 0 === bb ? void 0 : bb.particleItemSprite(Ab)) || null
        }), (() => bb.particleItemUrl(Ab))),
        blockImageUrl: Ub => eb(ab(), (async () => {
          var bb, ab;
          return null !== (bb = null === (ab = await Yb()) || void 0 === ab ? void 0 : ab.blockImageName(Ub)) && void 0 !== bb ? bb : null
        }), (() => bb.blockImageUrl(Ub)))
      }
    }

    function Yb() {
      return (0, Mb.o)().catch((() => null))
    }

    function Bb(bb, ab, Ub) {
      return eb(bb, (async () => {
        var bb;
        const Ub = await Yb(),
          Ab = null === Ub ? null : ab(Ub),
          Mb = null !== (bb = null === Ab || void 0 === Ab ? void 0 : Ab.slice(Ab.lastIndexOf("/") + 1)) && void 0 !== bb ? bb : null;
        return "Player_Atlas" === Mb ? null : Mb
      }), Ub)
    }
    async function eb(bb, ab, Ub) {
      if (null !== bb) {
        const Ub = await ab(),
          Ab = null === Ub ? null : bb.textureUrl(Ub);
        if (null !== Ab) return Ab
      }
      return Ub()
    }
    const vb = 0;

    function Lb(bb) {
      const ab = [Ab.f.ArmourAtlas, Ab.f.LifeformAtlas, Ab.f.GroupAtlas, Ab.f.BlockImage, Ab.f.Particle];
      bb.reload(ab, (bb => {
        switch (bb.kind) {
          case Ab.f.Particle:
            return bb.index === Ab.h.Item;
          case Ab.f.LifeformAtlas:
            return bb.word !== vb;
          default:
            return !0
        }
      }))
    }
  },
  40015: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      g: () => Yb,
      k: () => Eb,
      n: () => Mb,
      q: () => Tb
    });
    const Ab = 1e3;

    function Mb() {
      Bb((() => {
        window.location.reload()
      }))
    }

    function Tb() {
      return new Promise((() => {}))
    }

    function Eb(bb) {
      Bb((() => {
        window.location.replace(bb(window.location.href))
      }))
    }

    function Yb(bb) {
      Promise.resolve().then((() => Ub(109))).then((ab => {
        let {
          currentUrl: Ub
        } = ab;
        Eb((() => Ub.mergeSearchParamsInto(bb)))
      }), (() => {
        Eb((() => bb))
      }))
    }

    function Bb(bb) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => Ub(1639))).then((ab => {
        let {
          prepareForUnloadWithoutConfirmation: Ub
        } = ab;
        try {
          Ub()
        } catch (Ab) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", Ab), window.onbeforeunload = null
        }
        bb()
      }), (() => {
        window.onbeforeunload = null, bb()
      })) : bb()
    }
  },
  4711: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return Mb(bb, ab)
    }

    function Mb(bb, ab) {
      if (bb === ab) return !0;
      if ("object" !== typeof bb || "object" !== typeof ab || null === bb || null === ab || Array.isArray(bb) !== Array.isArray(ab)) return !1;
      const Ub = bb,
        Ab = ab,
        Tb = Object.keys(Ub);
      return Tb.length === Object.keys(Ab).length && Tb.every((bb => Object.prototype.hasOwnProperty.call(Ab, bb) && Mb(Ub[bb], Ab[bb])))
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  40046: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => fb,
      f: () => xb,
      g: () => kb,
      k: () => Rb
    });
    var Ab = Ub(1704),
      Mb = Ub(1710),
      Tb = Ub(38345),
      Eb = Ub(38357),
      Yb = Ub(1687),
      Bb = Ub(39985),
      eb = Ub(39992);
    const vb = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      Lb = 3,
      Pb = [500, 1500];

    function Xb(bb) {
      const ab = new URL(bb);
      return {
        secure: "https:" === ab.protocol || "wss:" === ab.protocol,
        host: ab.host,
        pathname: ab.pathname.replace(/\/+$/, ""),
        search: ab.searchParams.toString()
      }
    }

    function jb(bb, ab, Ub) {
      const {
        secure: Ab,
        host: Mb,
        pathname: Tb,
        search: Eb
      } = Xb(bb);
      return `${Ab?"https":"http"}://${Mb}${Tb}/matchmake/${ab}/${encodeURIComponent(Ub)}${Eb?`?${Eb}`:""}`
    }

    function Rb(bb, ab) {
      var Ub;
      const Ab = null !== (Ub = ab.protocol) && void 0 !== Ub ? Ub : "ws";
      if ("ws" !== Ab) throw new Error(`seat reservation asks for the ${Ab} transport`);
      const {
        secure: Mb,
        host: Tb,
        pathname: Eb,
        search: Yb
      } = Xb(bb), Bb = new URLSearchParams(Yb);
      Bb.append("sessionId", ab.sessionId), ab.reconnectionToken && Bb.append("reconnectionToken", ab.reconnectionToken);
      return `${Mb?"wss":"ws"}://${ab.room.publicAddress||`${Tb}${Eb}`}/${ab.room.processId}/${ab.room.roomId}?${Bb.toString()}`
    }
    async function kb(bb, ab, Ub) {
      var Bb;
      let vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Xb = null !== (Bb = vb.sleep) && void 0 !== Bb ? Bb : Ab.b,
        Rb = new Mb.b(vb.signal),
        kb = new Yb.e(Eb.e, (() => {
          (0, Mb.f)(Rb.controller, new Eb.i)
        })),
        {
          signal: zb
        } = Rb;
      try {
        return await (0, Tb.h)((() => async function(bb, ab, Ub, Ab) {
          var Tb;
          const {
            signal: Eb,
            sleep: Yb
          } = Ab, Bb = jb(bb, "joinOrCreate", ab), vb = JSON.stringify(Ub);
          let Xb = null;
          for (let jb = 0; jb < Lb; jb++) {
            var Rb;
            if (jb > 0) await Yb(null !== (Rb = Pb[jb - 1]) && void 0 !== Rb ? Rb : 1500, Eb);
            let bb;
            (0, Mb.h)(Eb);
            try {
              bb = await Zb(Bb, vb, Ab)
            } catch (kb) {
              (0, Mb.h)(Eb), Xb = yb(kb);
              continue
            }
            const {
              response: ab,
              answer: Ub,
              refusal: Tb,
              lost: Lb
            } = bb;
            if (null === Lb) {
              if (null !== Tb) throw Db(Tb, Ub);
              if (ab.ok && null !== Ub && mb(Ub)) return Ub;
              Xb = new eb.x(`seat request answered HTTP ${ab.status}${null===Ub?" without JSON":" without a seat"}`, !1)
            } else Xb = yb(Lb.error)
          }
          throw null !== (Tb = Xb) && void 0 !== Tb ? Tb : new eb.x("seat request made no attempt", !1)
        }(bb, ab, Ub, {
          ...vb,
          signal: zb,
          sleep: Xb
        })), zb, Xb)
      } finally {
        kb.stop(), Rb.unfollow()
      }
    }

    function yb(bb) {
      return new eb.x(bb instanceof Error ? bb.message : String(bb), !0, bb)
    }
    async function Zb(bb, ab, Ub) {
      var Ab;
      const {
        signal: Tb
      } = Ub, Eb = null !== (Ab = Ub.fetch) && void 0 !== Ab ? Ab : fetch, Yb = await Eb(bb, {
        method: "POST",
        headers: {
          ...vb,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: ab,
        credentials: "include",
        signal: Tb
      }), {
        answer: Bb,
        lost: eb
      } = await async function(bb) {
        try {
          const ab = await bb.json();
          return {
            answer: "object" === typeof ab && null !== ab ? ab : null,
            lost: null
          }
        } catch (ab) {
          return {
            answer: null,
            lost: ab instanceof SyntaxError ? null : {
              error: ab
            }
          }
        }
      }(Yb), Lb = null !== Bb && "string" === typeof Bb.error ? Bb.error : null;
      var Pb;
      null !== Lb && (null === (Pb = Ub.onRefusal) || void 0 === Pb || Pb.call(Ub));
      return (0, Mb.h)(Tb), {
        response: Yb,
        answer: Bb,
        refusal: Lb,
        lost: eb
      }
    }

    function Db(bb, ab) {
      return new eb.n(bb, "number" === typeof(null === ab || void 0 === ab ? void 0 : ab.code) ? ab.code : 0, (0, Bb.r)(bb).text)
    }
    class zb extends Error {
      constructor(bb, ab) {
        super(bb), this.code = ab, this.name = "SeatHttpError"
      }
    }
    async function xb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: Mb,
        answer: Tb,
        refusal: Eb,
        lost: Yb
      } = await Zb(jb(bb, "reconnect", ab), JSON.stringify({
        reconnectionToken: Ub
      }), Ab);
      if (null !== Yb) throw Yb.error;
      if (!Mb.ok) {
        const bb = null !== Tb && "number" === typeof Tb.code && 0 !== Tb.code ? Tb.code : Mb.status;
        throw new zb(`the seat's reconnect was refused: ${null!==Eb&&void 0!==Eb?Eb:`HTTP ${Mb.status}`}`, bb)
      }
      if (null !== Eb) throw Db(Eb, Tb);
      if (null === Tb || !mb(Tb)) throw new Error("the seat's reconnect answered " + (null === Tb ? "without JSON" : "without a seat"));
      return {
        ...Tb,
        reconnectionToken: Ub
      }
    }
    const ib = 10;

    function fb(bb) {
      if (bb.byteLength < 2 || bb[0] !== ib) return null;
      const ab = 2 + bb[1];
      return ab > bb.byteLength ? null : (new TextDecoder).decode(bb.subarray(2, ab))
    }

    function mb(bb) {
      const ab = bb.room;
      return "string" === typeof bb.sessionId && "object" === typeof ab && null !== ab && "string" === typeof ab.roomId && "string" === typeof ab.processId && "string" === typeof ab.name
    }
  },
  39716: (bb, ab, Ub) => {
    Ub.d(ab, {
      $: () => ib,
      C: () => fb,
      E: () => Ib,
      G: () => zb,
      H: () => xb,
      K: () => kb,
      N: () => Nb,
      O: () => Fb,
      Q: () => jb,
      R: () => Gb,
      V: () => Zb,
      W: () => yb,
      Z: () => Db,
      c: () => Mb,
      f: () => hb,
      i: () => db,
      m: () => Xb,
      q: () => Rb,
      s: () => Hb,
      t: () => mb,
      v: () => Wb,
      y: () => pb
    });
    var Ab = Ub(2698);
    const Mb = {
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

    function Tb(bb, ab) {
      return !ArrayBuffer.isView(bb) || bb instanceof DataView ? Array.isArray(bb) ? bb.map((bb => ab(bb))) : bb : Array.from(bb, (bb => ab(bb)))
    }

    function Eb(bb) {
      if ("string" !== typeof bb) return bb;
      for (let ab = 0; ab < bb.length; ab++) {
        const Ub = bb.charCodeAt(ab);
        if (Ub >= 55296 && Ub <= 57343) return Bb.decode(Yb.encode(bb))
      }
      return bb
    }
    const Yb = new TextEncoder,
      Bb = new TextDecoder;

    function eb(bb) {
      return bb
    }
    let vb;

    function Lb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Eb(bb.OT), Eb(bb.cT)]
    }

    function Pb(bb) {
      return null === bb || "object" !== typeof bb ? bb : [Tb(bb.uT, eb), Tb(bb.ve, eb)]
    }

    function Xb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.fE), Eb(ab.mE)];
      var ab
    }

    function jb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.id, ab.ME];
      var ab
    }

    function Rb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.fa, Eb(ab.ma), ab.Na, Eb(ab.Ia), ab.Ga, ab.Qa, ab.zE, Eb(ab.xE), Eb(ab.iE)];
      var ab
    }

    function kb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.Uv, eb), ab.Av];
      var ab
    }

    function yb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.BY, (bb => Eb(bb))), Eb(ab.eY), ab.vY];
      var ab
    }

    function Zb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Tb(ab.TE, eb), Eb(ab.EE), ab.YE];
      var ab
    }

    function Db(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.CU), Eb(ab.VU)];
      var ab
    }

    function zb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.UY)];
      var ab
    }

    function xb(bb) {
      return Eb(bb)
    }

    function ib(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.Fv), Eb(ab.hv), Eb(ab.OT), Eb(ab.cT)];
      var ab
    }

    function fb(bb) {
      return Lb(bb)
    }

    function mb(bb) {
      return Lb(bb)
    }

    function pb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.pE)];
      var ab
    }

    function Nb(bb) {
      return bb
    }

    function Wb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.ST), Eb(ab.bE)];
      var ab
    }

    function Hb(bb) {
      return Eb(bb)
    }

    function Ib(bb) {
      return Pb(bb)
    }

    function db(bb) {
      return Pb(bb)
    }

    function Fb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [Eb(ab.EY)];
      var ab
    }

    function hb(bb) {
      return (vb ??= (0, Ab.g)().map((bb => bb.name)), vb).map((ab => {
        return "string" === typeof(Ub = bb[ab]) ? Eb(Ub) : Tb(Ub, eb);
        var Ub
      }))
    }

    function Gb(bb) {
      return null === (ab = bb) || "object" !== typeof ab ? ab : [ab.jY, ab.RY, ab.kY];
      var ab
    }
  },
  40143: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(40149),
      Mb = Ub(40140);
    const Tb = new class {
      constructor(bb) {
        this.pack = bb, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, bb.onWanted((() => {
          this.release()
        }))
      }
      setGame(bb) {
        if (void 0 === bb && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const ab = this.inGame();
        if (this.game = bb, this.update(), this.inGame() !== ab)
          for (const Ub of this.gameListeners) Ub()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(bb) {
        return this.gameListeners.add(bb), () => {
          this.gameListeners.delete(bb)
        }
      }
      unwantedLeave(bb) {
        bb && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(bb) {
        null !== bb && bb === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const bb = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, bb && this.setGame(void 0)
      }
      setSettled(bb) {
        this.settle = bb, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, Ab.c)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(Mb.g)
  },
  39981: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      followPageUiPack: () => Ne,
      packForGame: () => pe,
      playWasmGame: () => Ke,
      prefetchWasmPreviews: () => KY,
      setGamePackConfirm: () => CB,
      startWasmPlay: () => Fe,
      startWasmPreviews: () => rY
    });
    var Ab = Ub(205),
      Mb = Ub(1192),
      Tb = Ub(166),
      Eb = Ub(38370),
      Yb = Ub(1824),
      Bb = Ub(22),
      eb = Ub(4357),
      vb = Ub(1238),
      Lb = Ub(1635),
      Pb = Ub(1242),
      Xb = Ub(38511),
      jb = Ub(38523),
      Rb = Ub(38448),
      kb = Ub(35909),
      yb = Ub(38345),
      Zb = Ub(8463),
      Db = Ub(38357),
      zb = Ub(39803),
      xb = Ub(4469),
      ib = Ub(39714),
      fb = Ub(39778),
      mb = Ub(39716);
    const pb = {
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

    function Nb(bb) {
      const ab = {
        ...fb.d[bb]
      };
      for (const Ub of Object.keys(pb[bb])) delete ab[Ub];
      return ab
    }

    function Wb() {
      var bb, ab;
      return null === (bb = null === (ab = (0, ib.i)()) || void 0 === ab ? void 0 : ab.localPlayerAlive()) || void 0 === bb || bb
    }

    function Hb() {
      var bb, ab;
      return null !== (bb = null === (ab = (0, ib.i)()) || void 0 === ab ? void 0 : ab.localDeaths()) && void 0 !== bb ? bb : null
    }
    const Ib = {
        current: Wb,
        watch: bb => {
          let ab = Wb(),
            Ub = Hb();
          return (0, xb.x)((() => {
            const Ab = Wb(),
              Mb = Hb(),
              Tb = null !== Mb && null !== Ub && Mb !== Ub;
            Ub = Mb, Tb ? (ab || bb(!0), bb(!1), Ab && bb(!0), ab = Ab) : Ab !== ab && (ab = Ab, bb(Ab))
          }))
        }
      },
      db = {
        states: {
          ...Nb("states"),
          localPlayerAlive: Ib
        },
        events: {
          ...Nb("events"),
          localPlayerAliveSet: {
            watch: Ib.watch
          }
        },
        commands: {
          ...Nb("commands"),
          respawn: () => {
            var bb;
            null === (bb = (0, ib.i)()) || void 0 === bb || bb.respawn()
          },
          playEmote: bb => {
            var ab;
            null === (ab = (0, ib.i)()) || void 0 === ab || ab.send(mb.c.PlayEmote, (0, mb.G)({
              UY: bb
            }))
          },
          applyTemporaryThirdPerson: bb => {
            var ab;
            let {
              durationMs: Ub
            } = bb;
            null === (ab = (0, ib.i)()) || void 0 === ab || ab.thirdPersonFor(Ub)
          },
          bindCustomButtonKeys: bb => {
            var ab;
            null === (ab = (0, ib.i)()) || void 0 === ab || ab.bindCustomButtonKeys(bb)
          },
          pressCustomButton: bb => {
            var ab;
            let {
              id: Ub,
              down: Ab
            } = bb;
            null === (ab = (0, ib.i)()) || void 0 === ab || ab.pressCustomButton(Ub, Ab)
          },
          setLookSensitivity: () => {},
          wakeUp: bb => {
            const ab = (0, mb.O)({
                EY: bb
              }),
              Ub = () => {
                const bb = (0, ib.i)();
                return !(null !== bb && void 0 !== bb && bb.isSessionLive) || bb.send(mb.c.StopSleeping, ab)
              };
            if (!Ub()) {
              const bb = (0, xb.x)((() => {
                Ub() && bb()
              }))
            }
          },
          setCameraZoom: bb => {
            var ab;
            null === (ab = (0, ib.i)()) || void 0 === ab || ab.setCameraZoom(bb)
          }
        },
        queries: Nb("queries"),
        lookups: {
          ...Nb("lookups"),
          cameraZoom: () => {
            var bb, ab;
            return null !== (bb = null === (ab = (0, ib.i)()) || void 0 === ab ? void 0 : ab.cameraZoom()) && void 0 !== bb ? bb : 0
          }
        }
      };
    var Fb = Ub(39985),
      hb = Ub(39992),
      Gb = Ub(39998),
      Qb = Ub(40009),
      qb = Ub(1201),
      ub = Ub(109),
      rb = Ub(4201),
      Kb = Ub(3405),
      ob = Ub(1109);
    const lb = {
      av: () => (0, qb.b)(),
      inbuiltOverwritten: () => rb.g,
      reflectApplyHit: () => ob.b,
      definerHit: () => ub.currentUrl.c,
      emitReplaced: () => (0, Bb.e)(),
      confirmMesh: () => (0, Kb.e)()
    };
    var tb = Ub(40001),
      wb = Ub(40015);
    var sb = Ub(19),
      gb = Ub(1829),
      Cb = Ub(1874),
      Vb = Ub(1552),
      Ob = Ub(1929),
      cb = Ub(1134),
      Jb = Ub(1198),
      nb = Ub(39961);

    function Sb() {
      return Jb.f.get().getCurrentLanguageCode()
    }

    function ba(bb) {
      const ab = () => {
        bb({
          translate: (bb, ab) => (0, cb.t)(Sb(), bb, ab),
          keyBindingText: bb => {
            const ab = (0, Cb.w)(bb, sb.c.get("isTouchScreen"));
            return null !== ab ? (0, cb.w)(Sb(), ab.translationKey, ab.params) : (0, Cb.o)((0, Cb.s)(bb))
          },
          isFriend: Ob.g,
          hiddenNames: gb.c.shown,
          loadsFontRest: (0, nb.e)(Sb())
        })
      };
      let Ub = !1;
      const Ab = () => {
          const bb = Sb();
          (0, cb.h)(bb).then((() => {
            Ub || bb !== Sb() || ab()
          }))
        },
        Mb = () => Vb.d.getSocialState().friends.map((bb => bb.name.toLowerCase())).sort().join(" ");
      let Tb = Mb();
      ab(), Ab();
      const Eb = [(0, Jb.h)((() => {
        ab(), Ab()
      })), (0, Bb.n)("customBindingsChanged", ab), (0, Bb.n)("appManagerUpdated|isTouchScreen", ab), (0, Ob.c)((() => {
        const bb = Mb();
        bb !== Tb && (Tb = bb, ab())
      })), gb.c.subscribe(ab)];
      return () => {
        Ub = !0;
        for (const bb of Eb) bb()
      }
    }
    var aa = Ub(595),
      Ua = Ub(950),
      Aa = Ub(1846),
      Ma = Ub(307),
      Ta = Ub(3376),
      Ea = Ub(35776),
      Ya = Ub(3382),
      Ba = Ub(38042),
      ea = Ub(4376),
      va = Ub(39882),
      La = Ub(603),
      Pa = Ub(653),
      Xa = Ub(660),
      ja = Ub(1844),
      Ra = Ub(3408),
      ka = Ub(2981);
    let ya = null;
    var Za = Ub(1142),
      Da = Ub(1710),
      za = Ub(4101),
      xa = Ub(3129),
      ia = Ub(43),
      fa = Ub(299),
      ma = Ub(292),
      pa = Ub(39834),
      Na = Ub(4477);
    var Wa = Ub(40020);
    class Ha {
      constructor(bb, ab) {
        this.showView = bb, this.holdForAd = ab
      }
      pointerUnlockRequestsChanged() {
        (0, pa.B)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, pa.w)())
        }]
      }
      setGameViewShown(bb) {
        this.showView(bb)
      }
      setGameView(bb) {
        (0, Wa.n)(bb)
      }
      videoAdHold(bb, ab) {
        this.holdForAd(bb, ab)
      }
    }
    class Ia {
      leave(bb) {
        ! function(bb) {
          if (null !== (0, Pb.e)().websocketUrl) try {
            (0, xb.K)().leaveGame(bb)
          } finally {
            (0, Pb.r)({
              websocketUrl: null
            })
          }
        }(bb)
      }
      isReplay() {
        return !1
      }
    }
    class da {
      watchFrameStarts(bb) {
        return (0, xb.r)(bb)
      }
      watchFrames(bb) {
        return (0, xb.o)(bb)
      }
      watchTicks(bb) {
        return (0, xb.x)(bb)
      }
    }
    var Fa = Ub(1227),
      ha = Ub(40024);

    function Ga(bb) {
      return bb >= 0 ? Math.min(1, bb) : 0
    }

    function Qa(bb, ab) {
      const {
        fade: Ub
      } = bb;
      return null === Ub || ab - Ub.at >= Ub.ms ? bb.volume : Ub.from + (bb.volume - Ub.from) * Math.max(0, (ab - Ub.at) / Ub.ms)
    }

    function qa(bb) {
      const ab = Object.entries(bb),
        Ub = new Uint32Array(ab.length);
      let Ab = 0;
      for (const [Eb, [, Yb]] of ab.entries()) Ub[Eb] = Yb.length, Ab += Yb.length;
      const Mb = new Float64Array(3 * Ab);
      let Tb = 0;
      for (const [, Eb] of ab)
        for (const bb of Eb) Mb.set(bb, Tb), Tb += 3;
      return {
        blocks: ab.map((bb => {
          let [ab] = bb;
          return ab
        })).join("\0"),
        counts: Ub,
        values: Mb
      }
    }
    class ua {
      constructor(bb, ab) {
        this.core = bb, this.warn = ab, this.latest = 0
      }
      async feed() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ra;
        const ab = ++this.latest;
        let Ub;
        try {
          Ub = await bb()
        } catch (Ab) {
          return void(this.core.isStopped || ab !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", Ab))
        }
        ab === this.latest && (this.core.setBlockColours(Ub) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function ra() {
      return qa((await Ub.e(201).then((() => Ub(33702)))).averageColors)
    }
    var Ka = Ub(4479),
      oa = Ub(4485),
      la = Ub(39764),
      ta = Ub(35739),
      wa = Ub(39942),
      sa = Ub(583),
      ga = Ub(36364),
      Ca = Ub(580),
      Va = Ub(325),
      Oa = Ub(39916);
    const ca = [3e4, 12e4, 3e5];
    class Ja extends Error {}
    const na = {
      mobTypes: sa.n,
      vehicleTypes: ga.c,
      mobAiStates: sa.l,
      playerPoses: Ca.t
    };
    var Sa = Ub(39902),
      bU = Ub(40032),
      aU = Ub(40039),
      UU = Ub(40044),
      AU = Ub(3144),
      MU = Ub(38334),
      TU = Ub(4501),
      EU = Ub(2254);
    const YU = EU.v.KeysDisabled | EU.v.LookFrozen | EU.v.ClicksSuppressed,
      BU = AU.d;
    var eU = (0, UU.e)("resumingConn");
    class vU {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = bb, this.now = ab, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, eU, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new MU.d({
          reconnect: bb => this.reconnect(bb),
          isLive: () => bb.isLive(),
          onReconnected: ab => {
            this.landed = ab, bb.onReconnected(ab), this.landIfResumed()
          },
          onGaveUp: (ab, Ub) => {
            this.abortAttempt(), bb.onGaveUp(ab, Ub)
          },
          freeze: ab => {
            bb.Wm(ab), (0, TU.l)(YU, ab ? YU : 0, "reconnectFreeze")
          },
          releaseSeat: bb => {
            this.releaseSeat(bb)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, aU.c)(this, eU)[eU]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(bb) {
        let {
          conn: ab,
          graceMs: Ub,
          sessionBased: Ab,
          replayOffer: Mb
        } = bb;
        this.session.onInitialInfo(Ub, Ab), this.isResuming() && (this.initialInfoConn = ab, this.initialInfoOffer = Mb, this.landIfResumed())
      }
      onResumeComplete(bb) {
        0 !== bb && (bb === (0, aU.c)(this, eU)[eU] ? ((0, aU.c)(this, eU)[eU] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = bb))
      }
      onDropped(bb) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, aU.c)(this, eU)[eU] = 0, this.session.onConnectionLost(bb)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, aU.c)(this, eU)[eU] = 0, this.session.end()
      }
      reconnect(bb) {
        const ab = this.attempt;
        if (null !== ab && this.awaitingJoinRoom(ab)) return ab.result;
        this.abortAttempt();
        const Ub = new AbortController,
          Ab = this.drops,
          Mb = {
            attachedAt: null
          },
          Tb = this.shell.reconnect(bb, Ub.signal, (() => {
            Mb.attachedAt = this.now()
          })).then((bb => {
            if (this.clearAttempt(Eb), this.drops !== Ab) throw new Error("the resumed room dropped before its attempt settled");
            return bb
          }), (bb => {
            throw this.clearAttempt(Eb), bb
          })),
          Eb = {
            abort: Ub,
            socket: Mb,
            result: Tb
          };
        return this.attempt = Eb, Tb
      }
      clearAttempt(bb) {
        this.attempt === bb && (this.attempt = null)
      }
      abortAttempt() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const ab = this.attempt;
        this.attempt = null, null === ab || void 0 === ab || ab.abort.abort(bb)
      }
      awaitingJoinRoom(bb) {
        const ab = bb.socket.attachedAt;
        return null !== ab && this.now() - ab < BU
      }
      releaseSeat(bb) {
        const ab = this.attempt,
          Ub = null !== ab && this.awaitingJoinRoom(ab);
        this.abortAttempt(new hb.t), Ub || this.shell.releaseSeat(bb)
      }
      landIfResumed() {
        const bb = this.landed;
        if (null !== bb && bb.conn === this.initialInfoConn) {
          const ab = this.initialInfoOffer && this.completedEarlyConn !== bb.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !ab) return void this.session.onResumed();
          (0, aU.c)(this, eU)[eU] = bb.conn, this.session.onResuming()
        }
      }
    }
    var LU = Ub(38342),
      PU = Ub(40046),
      XU = Ub(35913),
      jU = Ub(35911),
      RU = Ub(4709),
      kU = Ub(4088),
      yU = Ub(2972),
      ZU = Ub(39848),
      DU = Ub(610),
      zU = Ub(4183),
      xU = Ub(31),
      iU = Ub(40052),
      fU = Ub(40084),
      mU = Ub(4119),
      pU = Ub(2260),
      NU = Ub(1548),
      WU = Ub(1578),
      HU = Ub(1216),
      IU = Ub(116),
      dU = Ub(2586),
      FU = Ub(2262),
      hU = Ub(4494);
    const GU = new Set([Ka.rb.KeyDown, Ka.rb.MouseMove, Ka.rb.MouseDown, Ka.rb.Wheel, Ka.rb.TouchStart, Ka.rb.TouchMove]);

    function QU(bb) {
      return (bb.shiftKey ? Ka.Ab.Shift : 0) | (bb.ctrlKey ? Ka.Ab.Ctrl : 0) | (bb.altKey ? Ka.Ab.Alt : 0) | (bb.metaKey ? Ka.Ab.Meta : 0) | ("repeat" in bb && bb.repeat ? Ka.Ab.Repeat : 0) | (bb.isTrusted ? 0 : Ka.Ab.Untrusted)
    }

    function qU(bb) {
      return "touchOnly" !== (0, IU.b)() && "function" === typeof bb.requestPointerLock
    }

    function uU(bb) {
      return 0 === bb.button ? bb.altKey ? hU.h["Alt+Left Click"] : hU.h.Mouse1 : 1 === bb.button ? hU.h.Mouse2 : hU.h.Mouse3
    }
    const rU = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      KU = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      oU = 32768,
      lU = 1;

    function tU(bb) {
      return Math.min(Math.max(Math.round(bb), 0), 65535)
    }

    function wU(bb, ab, Ub) {
      const Ab = [],
        Mb = (bb, ab, Ub, Mb) => {
          const Tb = bb => {
            (0, WU.l)(bb) || Ub(bb)
          };
          bb.addEventListener(ab, Tb, Mb), Ab.push((() => {
            bb.removeEventListener(ab, Tb, Mb)
          }))
        },
        Tb = {
          capture: !0,
          passive: !0
        },
        Eb = (bb, Ub, Ab, Mb, Tb) => (!(0, FU.d)() || !GU.has(bb)) && (ab(bb, Ub, Ab, Mb, Tb), !0),
        Yb = () => document.pointerLockElement === bb,
        Bb = (0, dU.d)(),
        eb = bb => {
          bb.ctrlKey && Ub.ctrlCombosAreGames() && !(0, TU.h)(bb.target) && bb.preventDefault()
        },
        vb = (bb, Ab, Mb) => {
          Ub.inspect(bb, Ab, !1), ab(Ka.rb.KeyUp, Ab, 0, 0, (0, pU.l)(Mb, bb.timeStamp)), Ub.keyReleased(Ab)
        },
        Lb = new Map,
        Pb = (bb, ab, Ub) => bb[Ub] || ("AltRight" === ab || "ControlLeft" === ab) && bb.getModifierState("AltGraph"),
        Xb = new Map,
        jb = () => {
          Lb.clear(), Xb.clear()
        },
        Rb = bb => {
          if (document.hasFocus())
            for (const [ab, Ub] of Xb) Xb.delete(ab), Pb(bb, ab, Ub) || (Lb.delete(ab), vb(bb, hU.h[ab], QU(bb)))
        };
      bb.tabIndex = -1;
      let kb = 0,
        yb = 0;
      const Zb = () => {
        const ab = bb.getBoundingClientRect();
        kb = ab.left, yb = ab.top
      };
      let Db = "mouse";
      const zb = () => !Yb() && ("mouse" === Db || !Ub.touchUiShown()),
        xb = (bb, ab, Ub) => {
          const Ab = (tU(bb.clientX - kb) | tU(bb.clientY - yb) << 16) >>> 0;
          Eb(Ka.rb.MouseMove, Ka.Eb.Point, ab, Ub, Ab)
        };
      let ib = !1,
        fb = 0;
      const mb = () => {
        ib && (ib = !1, Ub.viewShown() && (0, pa.O)())
      };
      Ab.push((() => {
        clearTimeout(fb)
      })), Mb(window, "keydown", (bb => {
        "Escape" === bb.key ? (0, pa.G)(!0) : bb.repeat || (0, TU.h)(bb.target) || (ib = !0, clearTimeout(fb), fb = window.setTimeout(mb, 0))
      }), Tb), Mb(window, "keydown", (bb => {
        mb(), eb(bb), Rb(bb);
        const ab = hU.h[bb.code];
        if ("number" !== typeof ab || !Ub.viewShown()) return;
        const Ab = (0, TU.h)(bb.target);
        Ab || !Ub.prevents(ab) && !rU.has(bb.code) || bb.preventDefault(), bb.repeat || Ub.inspect(bb, ab, !0), Eb(Ka.rb.KeyDown, ab, 0, 0, (0, pU.l)(QU(bb), bb.timeStamp)) && Lb.set(bb.code, ab), Ab || Ub.keyPressed(ab)
      }), {
        capture: !1,
        passive: !1
      }), Mb(window, "keyup", (bb => {
        "Escape" === bb.key && (0, pa.G)(!1), eb(bb), Lb.delete(bb.code), Xb.delete(bb.code), Rb(bb);
        const ab = hU.h[bb.code];
        "number" === typeof ab && vb(bb, ab, QU(bb))
      }), {
        capture: !0,
        passive: !1
      }), Mb(window, "mousemove", (bb => {
        "mouse" === Db && zb() ? xb(bb, bb.movementX, bb.movementY) : Yb() ? Eb(Ka.rb.MouseMove, Ka.Eb.Stamped, bb.movementX, bb.movementY, (0, pU.l)(0, bb.timeStamp)) : Eb(Ka.rb.MouseMove, 0, bb.movementX, bb.movementY, 0)
      }), Tb);
      let pb = 0,
        Nb = 0;
      const Wb = [];
      let Hb = !1,
        Ib = !1;
      Mb(bb, "mousedown", (bb => {
        if ((0, FU.d)()) return;
        Rb(bb);
        const Ab = 1 << bb.button;
        if (!Yb() && (0, pa.N)() && (0, pa.g)() && (Ib = !0, !Hb)) return void(pb |= Ab);
        pb &= ~Ab;
        const Mb = bb.button <= 2 ? uU(bb) : void 0;
        void 0 !== Mb && (Wb[bb.button] = Mb, Ub.inspect(bb, Mb, !0)), zb() && xb(bb, 0, 0), ab(Ka.rb.MouseDown, bb.button, bb.clientX, bb.clientY, (0, pU.l)(QU(bb), bb.timeStamp)), Nb |= Ab, void 0 !== Mb && Ub.keyPressed(Mb)
      }), Tb), Mb(window, "mouseup", (bb => {
        var Ab;
        Rb(bb);
        const Mb = 1 << bb.button,
          Tb = 0 !== (pb & ~Nb & Mb);
        if (pb &= ~Mb, Nb &= ~Mb, Tb) return;
        const Eb = bb.button <= 2 ? null !== (Ab = Wb[bb.button]) && void 0 !== Ab ? Ab : uU(bb) : void 0;
        void 0 !== Eb && Ub.inspect(bb, Eb, !1), ab(Ka.rb.MouseUp, bb.button, bb.clientX, bb.clientY, (0, pU.l)(QU(bb), bb.timeStamp)), void 0 !== Eb && Ub.keyReleased(Eb)
      }), Tb), Mb(bb, "contextmenu", (bb => {
        bb.preventDefault()
      }), {
        passive: !1
      });
      const db = bb => {
        (Yb() || (0, pa.s)() && (0, HU.i)()) && (bb.ctrlKey || Bb && !document.fullscreenElement) && bb.preventDefault()
      };
      Mb(bb, "wheel", (bb => {
        db(bb), Rb(bb), Eb(Ka.rb.Wheel, bb.deltaMode, bb.deltaX, bb.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const Fb = {
          capture: !0,
          passive: !1
        },
        hb = bb => {
          bb ? window.addEventListener("wheel", db, Fb) : window.removeEventListener("wheel", db, Fb)
        };
      hb((0, pa.s)()), Ab.push((0, pa.z)(hb)), Ab.push((() => {
        hb(!1)
      }));
      const Gb = new Map,
        Qb = new Set,
        qb = bb => {
          const ab = "stylus" === bb.touchType;
          for (const Ub of Gb.values())
            if (!Ub.touched && (ab || Math.abs(bb.clientX - Ub.x) <= lU && Math.abs(bb.clientY - Ub.y) <= lU)) return Ub.touched = !0, !0;
          return !1
        },
        ub = bb => 32767 & bb,
        rb = new Set,
        Kb = bb => Ub => {
          const Ab = (0, pU.l)(QU(Ub), Ub.timeStamp);
          bb !== Ka.rb.TouchStart && bb !== Ka.rb.TouchMove || ((bb, Ub) => {
            const Ab = bb.touches;
            if (Ab)
              for (const Mb of rb) {
                let bb = !1;
                for (let ab = 0; ab < Ab.length && !bb; ab++) bb = ub(Ab[ab].identifier) === Mb;
                bb || (rb.delete(Mb), ab(Ka.rb.TouchCancel, Mb, 0, 0, Ub))
              }
          })(Ub, Ab);
          const Mb = Ub.changedTouches;
          for (let ab = 0; ab < Mb.length; ab++) {
            const Ub = Mb[ab];
            if (bb === Ka.rb.TouchStart && qb(Ub) && Qb.add(Ub.identifier), Qb.has(Ub.identifier)) {
              bb !== Ka.rb.TouchEnd && bb !== Ka.rb.TouchCancel || Qb.delete(Ub.identifier);
              continue
            }
            const Tb = ub(Ub.identifier),
              Yb = Eb(bb, Tb, Ub.clientX - kb, Ub.clientY - yb, Ab);
            bb === Ka.rb.TouchStart ? Yb && rb.add(Tb) : bb !== Ka.rb.TouchMove && rb.delete(Tb)
          }
        },
        ob = Kb(Ka.rb.TouchStart);
      Mb(bb, "touchstart", (bb => {
        bb.preventDefault(), (0, FU.d)() || (Ub.touchStarting(), ob(bb))
      }), {
        passive: !1
      }), Mb(bb, "touchmove", Kb(Ka.rb.TouchMove), Tb), Mb(bb, "touchend", Kb(Ka.rb.TouchEnd), Tb), Mb(bb, "touchcancel", Kb(Ka.rb.TouchCancel), Tb);
      const lb = bb => oU | 32767 & bb,
        tb = (bb, ab) => {
          Eb(bb, lb(ab.pointerId), ab.clientX - kb, ab.clientY - yb, (0, pU.l)(QU(ab), ab.timeStamp))
        };
      Mb(window, "pointerdown", (ab => {
        Db = ab.pointerType, "mouse" === ab.pointerType && ab.target !== bb && Ub.viewShown() && (0, pa.P)()
      }), Tb), Mb(bb, "pointerdown", (bb => {
        "pen" === bb.pointerType && 0 === bb.button && (0, pa.s)() && (0, HU.i)() && (bb.preventDefault(), (0, FU.d)() || (Gb.set(bb.pointerId, {
          x: bb.clientX,
          y: bb.clientY,
          touched: !1
        }), Ub.touchStarting(), tb(Ka.rb.TouchStart, bb)))
      }), {
        passive: !1
      }), Mb(window, "pointermove", (bb => {
        Db = bb.pointerType, Gb.has(bb.pointerId) && tb(Ka.rb.TouchMove, bb), "mouse" !== bb.pointerType && zb() && xb(bb, 0, 0)
      }), Tb);
      const wb = bb => ab => {
        Gb.delete(ab.pointerId) && tb(bb, ab)
      };
      Mb(window, "pointerup", wb(Ka.rb.TouchEnd), Tb), Mb(window, "pointercancel", wb(Ka.rb.TouchCancel), Tb);
      let sb = 0;
      const gb = () => {
          sb = 0, Zb(), Ub.resized()
        },
        Cb = () => {
          const bb = Ub.sizeCanvas();
          null !== bb && ab(Ka.rb.Resize, 0, bb.cssWidth, bb.cssHeight, (0, pU.f)(bb.renderScale)), Zb(), Ub.resized(), 0 === sb && (sb = requestAnimationFrame(gb))
        };
      Mb(window, "resize", Cb, Tb), Ab.push(Ub.watchRenderScale(Cb)), Ab.push((() => {
        cancelAnimationFrame(sb)
      })), Mb(window, "focus", (bb => {
        bb.isTrusted && (ab(Ka.rb.Focus, 0, 0, 0, 0), Ub.viewShown() && (0, pa.P)())
      }), {
        passive: !0
      });
      const Vb = () => {
          (0, pa.G)(!1), pb = 0
        },
        Ob = () => {
          rb.clear(), Gb.clear(), Qb.clear()
        };
      let cb = 0,
        Jb = 0;
      Mb(window, "blur", (Ab => {
        Vb(), (0, pa.o)();
        for (const bb of Lb.keys()) {
          const ab = KU.get(bb);
          void 0 !== ab && Xb.set(bb, ab)
        }
        Ab.isTrusted && ((bb => {
          for (const [Ub, Ab] of Gb) ab(Ka.rb.TouchCancel, lb(Ub), Ab.x, Ab.y, (0, pU.l)(0, bb));
          Gb.clear()
        })(Ab.timeStamp), ab(Ka.rb.Blur, Ka.o.KeepTouches, 0, 0, 0)), Bb && Ab.isTrusted && (clearTimeout(Jb), Jb = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const bb of Lb.values()) vb(Ab, bb, 0);
            jb()
          }
        }), 0)), clearTimeout(cb), cb = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, HU.i)() && Ub.viewShown() && bb.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), Ab.push((() => {
        clearTimeout(cb), clearTimeout(Jb)
      })), Mb(window, "mousedown", (ab => {
        Bb && ab.isTrusted && !document.hasFocus() && (0, HU.i)() && Ub.viewShown() && (window.focus(), bb.focus({
          preventScroll: !0
        }))
      }), Tb), Mb(document, "visibilitychange", (() => {
        document.hidden ? (ab(Ka.rb.Blur, 0, 0, 0, 0), Ob()) : document.hasFocus() && ab(Ka.rb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), Ab.push((0, FU.h)((() => {
        Vb(), ab(Ka.rb.Blur, Ka.o.Release, 0, 0, 0), Ub.keysReleased(), jb(), Nb = 0, Ob(), ab(Ka.rb.Joystick, 0, 0, 0, 0), document.hasFocus() && ab(Ka.rb.Focus, 0, 0, 0, 0)
      })));
      const nb = !Ub.canLock(),
        Sb = () => nb && !(0, pa.s)() ? Ka.ac.Lockless : Ka.ac.Released,
        ba = () => {
          Yb() && (Hb = !1, Ib = !1), ab(Ka.rb.PointerLock, Yb() ? Ka.ac.Locked : Sb(), 0, 0, 0), (0, pa.L)(Yb())
        };
      return Mb(document, "pointerlockchange", ba, {
        passive: !0
      }), Mb(document, "pointerlockerror", (() => {
        Hb ||= Ib, Ib = !1, (0, pa.x)()
      }), {
        passive: !0
      }), nb && Ab.push((0, pa.z)((() => {
        ab(Ka.rb.PointerLock, Sb(), 0, 0, 0)
      }))), Cb(), ab(document.hasFocus() ? Ka.rb.Focus : Ka.rb.Blur, 0, 0, 0, 0), ba(), () => {
        for (const bb of Ab.splice(0)) bb()
      }
    }
    var sU = Ub(8834),
      gU = Ub(8822),
      CU = Ub(1880);
    const VU = new Map(hU.c.map(((bb, ab) => [bb, ab]))),
      OU = ["jump", "primary-fire", "alt-fire"],
      cU = ["primary-fire", "alt-fire"];

    function JU(bb) {
      return `${CU.c}${bb}`
    }
    const nU = ["forward", "backward", "left", "right", "sprint", "jump"];

    function SU(bb) {
      const ab = [];
      for (const Ub of bb) {
        const bb = "string" === typeof Ub ? hU.h[Ub] : void 0;
        "number" === typeof bb && ab.push(bb)
      }
      return ab
    }
    class bA {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [bb, ab] of Object.entries(hU.d)) this.keys.set(bb, ab);
        this.updateKeySets()
      }
      prevents(bb) {
        return this.preventKeys.has(bb)
      }
      moves(bb) {
        return this.movementKeys.has(bb)
      }
      checks(bb, ab) {
        return (ab ? this.checkedDown : this.checkedUp).has(bb)
      }
      sync(bb, ab) {
        for (const [Ub, Ab] of this.keys) {
          const Mb = bb(JU(Ub)),
            Tb = Array.isArray(Mb) ? SU(Mb) : hU.d[Ub];
          (Tb.length !== Ab.length || Tb.some(((bb, ab) => bb !== Ab[ab]))) && this.bind(Ub, Tb, ab)
        }
      }
      bind(bb, ab, Ub) {
        const Ab = VU.get(bb);
        if (void 0 !== Ab) {
          Ub(Ka.rb.Binding, 0, 0, 0, Ab | Ka.m.Clear << 8);
          for (const Tb of [...ab, ...null !== (Mb = hU.f[bb]) && void 0 !== Mb ? Mb : []]) {
            var Mb;
            Ub(Ka.rb.Binding, Tb, 0, 0, Ab | Ka.m.Add << 8)
          }
          this.keys.set(bb, ab), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const Ab of hU.l)
          for (const ab of null !== (bb = this.keys.get(hU.c[Ab])) && void 0 !== bb ? bb : []) {
            var bb;
            this.preventKeys.add(ab)
          }
        this.movementKeys.clear();
        for (const Ab of nU)
          for (const bb of null !== (ab = this.keys.get(Ab)) && void 0 !== ab ? ab : []) {
            var ab;
            this.movementKeys.add(bb)
          }
        for (const [Ab, Mb] of [
            [this.checkedDown, OU],
            [this.checkedUp, cU]
          ]) {
          Ab.clear();
          for (const bb of Mb)
            for (const ab of null !== (Ub = this.keys.get(bb)) && void 0 !== Ub ? Ub : []) {
              var Ub;
              Ab.add(ab)
            }
        }
      }
    }
    var aA = Ub(4487),
      UA = Ub(36008);
    const AA = "[bloxd-wasm-client]";

    function MA() {
      return "inGame" === sb.c.get("gameState") && !(0, NU.p)()
    }
    let TA = null;

    function EA(bb, ab) {
      TA && ab.writePendingInput() && TA.push(function(bb, ab) {
        let Ub = "";
        for (const Ab of ab) Ub += Ab.toString(16).padStart(2, "0");
        return Ub ? `${bb} ${Ub}` : String(bb)
      }(bb, ab.rings.input.written()))
    }
    const YA = [];

    function BA(bb, ab, Ub, Ab) {
      bb === Ka.V.InputAction && Ab === Ka.lb && YA.push(ab.getUint32(Ub, !0))
    }
    var eA = Ub(40110),
      vA = Ub(1140),
      LA = Ub(36186);
    const PA = {
      general: {
        ok: "OK",
        tryAgain: "Try Again",
        back: "Back",
        reload: "Reload",
        reconnect: "Rejoin"
      },
      wasmScreens: vA.wasmScreens
    };

    function XA(bb) {
      var ab, Ub;
      let Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const [Mb, Tb] = bb.split(":");
      return (null !== (ab = null === (Ub = PA[Mb]) || void 0 === Ub ? void 0 : Ub[Tb]) && void 0 !== ab ? ab : bb).replace(/\{\{(\w+)\}\}/g, ((bb, ab) => {
        var Ub;
        return null !== (Ub = Ab[ab]) && void 0 !== Ub ? Ub : bb
      }))
    }

    function jA(bb, ab) {
      (0, mU.d)();
      const Ub = document.createElement("div");
      Ub.setAttribute("role", "alertdialog"), Ub.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const Ab = document.createElement("div");
      Ab.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const Mb = document.createElement("h2");
      Mb.textContent = XA(bb.title);
      const Tb = document.createElement("p");
      if (Tb.textContent = XA(bb.help, bb.helpValues), Tb.style.whiteSpace = "pre-line", Ab.append(Mb, Tb), bb.discordLink) {
        const bb = document.createElement("a");
        bb.href = LA.b, bb.target = "_blank", bb.rel = "noreferrer", bb.style.color = "#8ab4ff", bb.textContent = XA("wasmScreens:reportOnDiscord"), Ab.append(bb)
      }
      const Eb = document.createElement("div");
      return Eb.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", Ab.append(Eb), Ub.append(Ab), document.body.append(Ub), new Promise((Ab => {
        const Mb = bb => {
            null === ab || void 0 === ab || ab.removeEventListener("abort", Tb), Ub.remove(), Ab(bb)
          },
          Tb = () => {
            Mb(!1)
          };
        null === ab || void 0 === ab || ab.addEventListener("abort", Tb, {
          once: !0
        });
        const Yb = (bb, ab) => {
          const Ub = document.createElement("button");
          Ub.textContent = XA(bb), Ub.style.cssText = "padding:0.5rem 1.25rem;font:inherit", Ub.addEventListener("click", (() => {
            Mb(ab)
          })), Eb.append(Ub)
        };
        null !== bb.cancel && Yb(bb.cancel, !1), Yb(bb.confirm, !0)
      }))
    }
    var RA = Ub(39932);
    const kA = 6e4,
      yA = 3e5;
    var ZA = Ub(3317);
    var DA = Ub(39839),
      zA = Ub(619),
      xA = Ub(10);

    function iA(bb, ab) {
      const Ub = xA.bb.encode(ab);
      ! function(bb, ab) {
        let Ub = ab >= 0 ? 2 * ab : 2 * -ab - 1;
        for (; Ub >= 128;) bb.push(Ub % 128 | 128), Ub = Math.floor(Ub / 128);
        bb.push(Ub)
      }(bb, Ub.length);
      for (const Ab of Ub) bb.push(Ab)
    }
    let fA, mA, pA;
    (() => {
      const bb = [0, "r", "e", "resolv", "then", "length", null, "postCo", "okies", 3, void 0, 2, 1, "b", "c", 188, 40, "a", 20, 6, "f", 209, 10, 124, 161, 150, 126];

      function ab() {}
      const Ab = (bb[0], xA[bb[1]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        Mb = (bb[0], xA[bb[1]])("QkFCWUxPTg=="),
        Tb = (bb[0], xA[bb[1]])("QW5kZXNpdGU="),
        Eb = (bb[0], xA[bb[1]])("U21vb3RoIEdyYW5pdGU="),
        Yb = (bb[0], xA[bb[1]])("RGlvcml0ZQ=="),
        Bb = async (Ab, Mb, Tb, Eb) => {
          const [{
            clientSideServerUrls: Yb
          }, {
            ["postJsonWithMetricsCookiesAndJsonRespons" + bb[2]]: Bb
          }] = await Promise.all([Promise[bb[3] + bb[2]]()[bb[4]]((() => Ub(1142))), Promise[bb[3] + bb[2]]()[bb[4]](((...Ab) => (Ab[bb[5]] = bb[0], "q_PMvi" in ab && function(...ab) {
            ab[bb[5]] = bb[0]
          }(), Ub(1065))))]), eb = Yb.getHttpUrlFromWebSocketUrl(Ab.endpoint), vb = Ab[bb[7] + bb[8]] === bb[6] ? bb[10] : await Ab[bb[7] + bb[8]]();
          await Bb("" + eb + Mb, Tb, {
            retries: Eb
          }, vb)
        };
      fA = async (Ub, Ab) => {
        const Mb = function(bb, ab, Ub, Ab) {
          const Mb = [];
          iA(Mb, bb), iA(Mb, ab), iA(Mb, Ub);
          for (const Tb of Ab) Mb.push(Tb);
          return Mb
        }(Ub.game, Ub.lobby, (bb[0], zA[bb[14]])(), Ab);
        try {
          await Bb(Ub, "/persisted/keep-alive", {
            type: "OX",
            data: Mb
          }, bb[9])
        } catch (Tb) {
          function Yb(...ab) {
            ab[bb[5]] = bb[0]
          }
          "XHK7shz" in ab && Yb(), console.warn(Tb)
        }
      };
      const eb = (...ab) => (ab[bb[5]] = bb[11], Object.getOwnPropertyDescriptor(ab[bb[0]], ab[bb[12]]));

      function vb() {
        vb = function() {}
      }
      mA = () => {
        if ((bb[0], xA.K)(), eb(navigator, Ab) !== bb[10]) {
          function Ub(...ab) {
            vb(ab[bb[5]] = bb[0], ab[bb[13]] = function(...ab) {
              for (vb(ab[bb[5]] = bb[12], ab[bb[12]] = ab[bb[0]].length, ab[bb[13]] = [], ab[bb[14]] = bb[0], ab[bb[16]] = bb[0], ab[bb[0]].sort(((bb, ab) => bb - ab))), ab[bb[15]] = bb[0]; ab[bb[15]] < ab[bb[12]]; ab[bb[15]]++)
                if (!(ab[bb[15]] > bb[0] && ab[bb[0]][ab[bb[15]]] === ab[bb[0]][ab[bb[15]] - bb[12]]))
                  for (vb(ab[bb[14]] = ab[bb[15]] + bb[12], ab[bb[16]] = ab[bb[12]] - bb[12]); ab[bb[14]] < ab[bb[16]];)
                    if (ab[bb[0]][ab[bb[15]]] + ab[bb[0]][ab[bb[14]]] + ab[bb[0]][ab[bb[16]]] < bb[0]) ab[bb[14]]++;
                    else if (ab[bb[0]][ab[bb[15]]] + ab[bb[0]][ab[bb[14]]] + ab[bb[0]][ab[bb[16]]] > bb[0]) ab[bb[16]]--;
              else {
                for (ab[bb[13]].push([ab[bb[0]][ab[bb[15]]], ab[bb[0]][ab[bb[14]]], ab[bb[0]][ab[bb[16]]]]); ab[bb[14]] < ab[bb[16]] && ab[bb[0]][ab[bb[14]]] === ab[bb[0]][ab[bb[14]] + bb[12]];) ab[bb[14]]++;
                for (; ab[bb[14]] < ab[bb[16]] && ab[bb[0]][ab[bb[16]]] === ab[bb[0]][ab[bb[16]] - bb[12]];) ab[bb[16]]--;
                vb(ab[bb[14]]++, ab[bb[16]]--)
              }
              return ab[bb[13]]
            }, console.log(ab[bb[13]]))
          }
          return "UiGhQm" in ab && Ub(), Tb
        }
        if (eb(window, Mb) === bb[10]) {
          function Bb(...ab) {
            function Ub() {}
            ab[bb[5]] = bb[0], vb(ab[bb[17]] = function(...ab) {
              for (vb(ab[bb[5]] = bb[11], ab[bb[17]] = bb[0], ab[bb[13]] = bb[0], ab[bb[18]] = new Ub(bb[0]), ab[bb[21]] = ab[bb[18]], ab[bb[19]] = ab[bb[0]], ab[bb[20]] = ab[bb[12]]); ab[bb[19]] !== bb[6] || ab[bb[20]] !== bb[6];) vb(ab[bb[13]] = (ab[bb[19]] ? ab[bb[19]].val : bb[0]) + (ab[bb[20]] ? ab[bb[20]].val : bb[0]) + ab[bb[17]], ab[bb[17]] = Math.floor(ab[bb[13]] / bb[22]), ab[bb[21]].next = new Ub(ab[bb[13]] % bb[22]), ab[bb[21]] = ab[bb[21]].next, ab[bb[19]] = ab[bb[19]] ? ab[bb[19]].next : bb[6], ab[bb[20]] = ab[bb[20]] ? ab[bb[20]].next : bb[6]);
              return ab[bb[17]] && (ab[bb[21]].next = new Ub(ab[bb[17]])), ab[bb[18]].next
            }, console.log(ab[bb[17]]))
          }
          return "X4ME9I" in ab && Bb(), Eb
        }
        return Yb
      }, pA = async Ub => {
        "quJnqs" in ab && function(...ab) {
          vb(ab[bb[5]] = bb[0], ab[-bb[26]] = function(...ab) {
            for (vb(ab[bb[5]] = bb[12], ab[bb[17]] = ab[bb[0]].length, ab[-bb[24]] = [], ab[bb[14]] = bb[0]), ab[bb[23]] = bb[0]; ab[bb[23]] < ab[bb[17]]; ab[bb[23]]++) ab[-bb[24]].push(ab[bb[23]] !== bb[0] && ab[bb[0]][ab[bb[23]]] > ab[bb[0]][ab[bb[23]] - bb[12]] ? ab[-bb[24]][ab[bb[23]] - bb[12]] + bb[12] : bb[12]);
            for (ab[bb[25]] = ab[bb[17]] - bb[12]; ab[bb[25]] >= bb[0]; ab[bb[25]]--) ab[bb[25]] !== ab[bb[17]] - bb[12] && ab[bb[0]][ab[bb[25]]] > ab[bb[0]][ab[bb[25]] + bb[12]] && (ab[-bb[24]][ab[bb[25]]] = Math.max(ab[-bb[24]][ab[bb[25]]], ab[-bb[24]][ab[bb[25]] + bb[12]] + bb[12])), ab[bb[14]] += ab[-bb[24]][ab[bb[25]]];
            return ab[bb[14]]
          }, console.log(ab[-bb[26]]))
        }();
        try {
          const ab = mA();
          await Bb(Ub, "/images/" + ab + ".png", {
            block: ab
          }, bb[0])
        } catch {}
      }
    })();
    var NA = Ub(40012),
      WA = Ub(1704);
    const HA = 1e3 * NA.b.seatReservationSeconds - 3e3;
    class IA {
      constructor(bb) {
        var ab, Ub, Ab, Mb;
        let Tb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (ab = Tb.wallNow) && void 0 !== ab ? ab : Date.now, this.monoNow = null !== (Ub = Tb.monoNow) && void 0 !== Ub ? Ub : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (Ab = Tb.sleep) && void 0 !== Ab ? Ab : WA.b, this.follow = new Da.b(Tb.signal);
        const Eb = null !== (Mb = Tb.fetch) && void 0 !== Mb ? Mb : fetch;
        this.seat = (0, PU.g)(bb.endpoint, bb.roomName, bb.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (bb, ab) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), Eb(bb, ab)),
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
      async take(bb) {
        if ("rematched" === this.use) return;
        (0, Da.h)(bb);
        const ab = "pending" !== this.request,
          Ub = () => {
            this.abort((0, Da.e)(bb))
          };
        let Ab;
        null === bb || void 0 === bb || bb.addEventListener("abort", Ub, {
          once: !0
        });
        try {
          Ab = await this.seat
        } catch (Mb) {
          if ((0, Da.h)(bb), !ab) throw Mb;
          return void(this.use = "lost")
        } finally {
          null === bb || void 0 === bb || bb.removeEventListener("abort", Ub)
        }
        if ((0, Da.h)(bb), !(this.ageMs() > HA)) return this.use = "taken", Ab;
        this.use = "renewed"
      }
      async reserveInstead(bb, ab) {
        try {
          return await bb()
        } catch (Ub) {
          const Mb = this.holdLeftMs();
          if (!(Ub instanceof hb.n) || Ub.code !== Ab.b.duplicateLobbyNameError.code || 0 === Mb) throw Ub;
          return await this.sleep(Mb + 500, ab), bb()
        }
      }
      release() {
        const {
          request: bb,
          use: ab
        } = this, Ub = this.holdsNoSeat();
        return this.abort(), "taken" === ab || Ub ? null : {
          unused: "unused" === ab ? "abandoned" : ab,
          answered: "answered" === bb,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var bb;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const ab = null !== (bb = this.answeredAt) && void 0 !== bb ? bb : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          Ub = Math.max(this.wallNow() - ab.wall, this.monoNow() - ab.mono);
        return Math.max(0, 1e3 * NA.b.seatReservationSeconds - Ub)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(bb) {
        (0, Da.f)(this.follow.controller, bb)
      }
    }
    var dA = Ub(1786),
      FA = Ub(40117);
    const hA = new Uint8Array(0);
    class GA {
      constructor(bb) {
        if (this.options = bb, this.slots = [], this.createWorker = null, this.stopped = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === bb.module) return this.stopped = !0, void bb.fail("no wasm module for the meshing workers");
        bb.loadWorkers().then((bb => {
          let {
            create: ab,
            count: Ub
          } = bb;
          if (!this.stopped) {
            this.createWorker = ab;
            for (let bb = 0; bb < Ub; bb++) this.slots.push({
              worker: null,
              started: !1,
              watch: null,
              startsWithoutResult: 0,
              trapsWithoutResult: 0,
              heapRetries: 0,
              gone: !1,
              goneFor: null
            });
            for (let bb = 0; bb < Ub; bb++) this.start(bb)
          }
        }), (bb => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", bb))
        }))
      }
      take(bb, ab, Ub) {
        const Ab = this.slots[ab];
        if (bb === Ka.Dd.Retire) {
          var Mb, Tb, Eb;
          if (Ab && !Ab.gone) null === (Mb = Ab.worker) || void 0 === Mb || Mb.terminate(), Ab.worker = null, Ab.started = !1, null === (Tb = (Eb = this.options).onMemoryGone) || void 0 === Tb || Tb.call(Eb, ab), this.giveUp(ab, "had its tables trap twice", "every meshing worker's tables trapped twice");
          return
        }
        const Yb = null === Ab || void 0 === Ab ? void 0 : Ab.worker;
        if (!Yb || !Ab.started) return;
        const Bb = Ub.byteLength;
        let eb = null;
        bb === Ka.Dd.Mesh && Ab.heapRetries > 0 && (Ab.heapRetries--, eb = this.pooled(Bb, !0)), eb ??= this.buffer(Bb), new Uint8Array(eb, 0, Bb).set(Ub), Yb.postMessage({
          type: "job",
          kind: bb,
          bytes: eb,
          len: Bb
        }, [eb])
      }
      takeFailedMeshJobs() {
        const bb = this.failedJobs;
        return this.failedJobs = 0, bb
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stop() {
        this.stopped = !0;
        for (const ab of this.slots) {
          var bb;
          QA(ab), null === (bb = ab.worker) || void 0 === bb || bb.terminate(), ab.worker = null, ab.started = !1
        }
      }
      start(bb) {
        const ab = this.slots[bb],
          {
            module: Ub
          } = this.options,
          Ab = this.createWorker;
        if (this.stopped || ab.gone || null === Ub || null === Ab) return;
        if (ab.startsWithoutResult >= 3) return void this.giveUp(bb, "failed to start 3 times in a row", "no meshing worker would start");
        let Mb;
        ab.startsWithoutResult++;
        try {
          Mb = Ab()
        } catch (Tb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} did not start`, Tb), void this.start(bb)
        }
        ab.worker = Mb, Mb.onmessage = Ub => {
          let {
            data: Ab
          } = Ub;
          ab.worker === Mb && this.onReply(bb, Ab)
        }, Mb.onmessageerror = () => {
          ab.worker === Mb && this.lose(bb, "a reply could not be read")
        }, Mb.onerror = Ub => {
          Ub.preventDefault(), ab.worker === Mb && this.lose(bb, Ub.message || "its script failed")
        };
        try {
          Mb.postMessage({
            type: "start",
            module: Ub
          })
        } catch (Tb) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${bb} could not be sent the module`, Tb), Mb.terminate(), ab.worker = null, void this.start(bb)
        }
        ab.watch = new FA.l(FA.e, (ab => {
          this.lose(bb, (0, FA.o)(ab), (() => {
            this.options.onStartTimeout(ab)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, ab) {
        const Ub = this.slots[bb];
        switch (ab.type) {
          case "started":
            QA(Ub), Ub.started = !0, this.options.write(0, Ka.Cd.WorkerStarted, 0, bb, 0, hA);
            break;
          case "lost":
            this.lose(bb, ab.reason);
            break;
          case "memory":
            var Ab, Mb;
            null === (Ab = (Mb = this.options).onMemoryStats) || void 0 === Ab || Ab.call(Mb, bb, ab.stats);
            break;
          case "result": {
            const Ab = ab.status === Ka.sb.Trapped;
            if (0 !== ab.jobId) {
              if (Ab) this.countFailedJob(ab.outOfMemory, "light_trap", ab.trap);
              else if (Ub.startsWithoutResult = 0, Ub.trapsWithoutResult = 0, ab.status === Ka.sb.Refused) {
                const Ub = function(bb) {
                  if (bb.byteLength < 32) return "(no reason)";
                  const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength),
                    Ub = Math.min(ab.getUint32(28, !0), bb.byteLength - 28 - 4);
                  return (new TextDecoder).decode(bb.subarray(32, 32 + Ub)).slice(0, 200)
                }(new Uint8Array(ab.bytes, 0, ab.len));
                this.countFailedJob(ta.b.test(Ub), "light_refused_input", Ub), this.logRefusal(bb, Ub)
              }
              ab.status === Ka.sb.HeapRefused && (Ub.heapRetries = Math.min(Ub.heapRetries + 1, 4), this.logHeapRefusal(bb))
            }
            if (this.options.write(ab.jobId, Ka.Cd.JobResult, ab.status, bb, ab.workerUs, new Uint8Array(ab.bytes, 0, ab.len)), this.recycle(ab.bytes), ab.spare && this.recycle(ab.spare), !Ab) break;
            if (Ub.startsWithoutResult = 0, 0 === ab.jobId) {
              this.lose(bb, `the tables trapped its wasm: ${ab.trap}`);
              break
            }
            Ub.trapsWithoutResult++;
            const Mb = Ub.trapsWithoutResult > 6;
            Ub.gone ||= Mb, this.lose(bb, `a job trapped its wasm: ${ab.trap}`), Mb && this.giveUp(bb, `trapped ${Ub.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(bb, ab, Ub) {
        if (bb) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(ab) || (this.faultsReported.add(ab), this.options.onLightFault(ab, Ub));
        this.failedJobs++
      }
      logRefusal(bb, ab) {
        var Ub;
        !this.refusals.has(ab) && this.refusals.size >= 16 && (ab = "(other reasons)");
        const Ab = (null !== (Ub = this.refusals.get(ab)) && void 0 !== Ub ? Ub : 0) + 1;
        this.refusals.set(ab, Ab), (0, dA.w)(Ab) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} refused a chunk (${Ab} so far for this reason): ${ab}`)
      }
      logHeapRefusal(bb) {
        this.heapRefusals++, (0, dA.w)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${bb} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(bb, ab, Ub) {
        const Ab = this.slots[bb];
        if (Ab.gone = !0, Ab.goneFor = {
            why: ab,
            failure: Ub
          }, console.warn(`[bloxd-wasm-client] meshing worker ${bb} ${ab}: giving up on it`), this.slots.every((bb => bb.gone))) {
          this.stop();
          const bb = new Set(this.slots.map((bb => {
              var ab;
              return null === (ab = bb.goneFor) || void 0 === ab ? void 0 : ab.failure
            }))),
            ab = this.slots.map(((bb, ab) => {
              var Ub, Ab;
              return `worker ${ab} ${null!==(Ub=null===(Ab=bb.goneFor)||void 0===Ab?void 0:Ab.why)&&void 0!==Ub?Ub:"went"}`
            }));
          this.options.fail(1 === bb.size ? Ub : `no meshing worker is left (${ab.join(", ")})`)
        }
      }
      lose(bb, ab, Ub) {
        var Ab, Mb, Tb;
        const Eb = this.slots[bb];
        console.warn(`[bloxd-wasm-client] meshing worker ${bb} was lost: ${ab}`), QA(Eb), null === (Ab = Eb.worker) || void 0 === Ab || Ab.terminate(), Eb.worker = null, Eb.heapRetries = 0, null === (Mb = (Tb = this.options).onMemoryGone) || void 0 === Mb || Mb.call(Tb, bb), this.stopped || (Ub ? Ub() : this.options.onWorkerLost(ab), Eb.started && (Eb.started = !1, this.options.write(0, Ka.Cd.WorkerLost, 0, bb, 0, hA)), this.start(bb))
      }
      buffer(bb) {
        var ab;
        return null !== (ab = this.pooled(bb)) && void 0 !== ab ? ab : new ArrayBuffer(Math.max(16384, bb))
      }
      pooled(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = -1;
        for (let Mb = 0; Mb < this.pool.length; Mb++) {
          const Ab = this.pool[Mb].byteLength;
          Ab >= bb && (Ub < 0 || (ab ? Ab > this.pool[Ub].byteLength : Ab < this.pool[Ub].byteLength)) && (Ub = Mb)
        }
        if (Ub < 0) return null;
        const Ab = this.pool[Ub];
        return this.pool[Ub] = this.pool[this.pool.length - 1], this.pool.pop(), Ab
      }
      recycle(bb) {
        this.pool.length < 4 * this.slots.length && bb.byteLength > 0 && bb.byteLength <= 1048576 && this.pool.push(bb)
      }
    }

    function QA(bb) {
      var ab;
      null === (ab = bb.watch) || void 0 === ab || ab.cancel(), bb.watch = null
    }
    var qA = Ub(40062),
      uA = Ub(40054),
      rA = Ub(40126),
      KA = Ub(40133),
      oA = (Ub(39921), Ub(40136)),
      lA = Ub(40092);

    function tA(bb) {
      const ab = new Uint8Array(bb.length >> 2);
      for (let Ub = 0; Ub < ab.length; Ub++) ab[Ub] = bb[4 * Ub + 3];
      return ab
    }
    async function wA(bb) {
      const ab = await (0, oA.j)(bb);
      try {
        const {
          width: bb,
          height: Ub,
          pixels: Ab
        } = (0, lA.q)(ab);
        return {
          width: bb,
          height: Ub,
          alpha: tA(Ab)
        }
      } finally {
        ab.close()
      }
    }
    class sA {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wA;
        this.session = bb, this.sources = ab, this.warn = Ub, this.load = Ab, this.nextPoll = 0, this.cX = !1, this.warned = new Set
      }
      drain(bb) {
        if (bb < this.nextPoll) return;
        this.nextPoll = bb + 250;
        const ab = this.session.sunShadowWantedTextures();
        if (ab)
          for (let Ub = 0; Ub + 1 < ab.length; Ub += 2) this.hand(ab[Ub], ab[Ub + 1]);
        for (const Ub of this.session.takeSunShadowWarnings()) this.warn(Ub)
      }
      dispose() {
        this.cX = !0
      }
      async hand(bb, ab) {
        var Ub, Ab, Mb, Tb, Eb;
        let Yb, Bb = null;
        try {
          if (Bb = await this.sources.blockImageUrl(bb), null === Bb) throw new Error(`block image ${bb} has no URL`);
          Yb = await this.load(Bb)
        } catch (vb) {
          var eb;
          const ab = null !== (eb = Bb) && void 0 !== eb ? eb : `block image ${bb}`;
          this.warned.has(ab) || (this.warned.add(ab), this.warn(`sun shadow plane texture ${ab} didn't load: its blocks cast no shadow`, vb))
        }
        this.cX || this.session.setSunShadowTexture(bb, ab, null !== (Ub = null === (Ab = Yb) || void 0 === Ab ? void 0 : Ab.width) && void 0 !== Ub ? Ub : 0, null !== (Mb = null === (Tb = Yb) || void 0 === Tb ? void 0 : Tb.height) && void 0 !== Mb ? Mb : 0, null === (Eb = Yb) || void 0 === Eb ? void 0 : Eb.alpha)
      }
    }
    var gA = Ub(40066),
      CA = Ub(40140),
      VA = Ub(40143),
      OA = Ub(40073),
      cA = Ub(40076),
      JA = Ub(8951),
      nA = Ub(8797),
      SA = Ub(40153);
    const bM = 8192,
      aM = new Set;
    const UM = new Set([...nA.e, "sceneDownload"]);
    var AM = Ub(39940),
      MM = Ub(39812);
    const TM = new Uint8Array(0);
    let EM = null;

    function YM(bb) {
      return {
        aux: Ka.Qb.AdStart | (bb ? Ka.Qb.PreventMovement : 0),
        payload: TM
      }
    }
    var BM = Ub(2579),
      eM = Ub(2583);
    const vM = "__bloxdSceneCapture";
    var LM = Ub(1692),
      PM = Ub(2643);
    let XM = null,
      jM = null,
      RM = null,
      kM = !1;

    function yM() {
      XM ??= performance.now()
    }
    var ZM = Ub(40161);
    class DM {
      constructor(bb) {
        var ab, Ub;
        this.host = bb, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((bb => {
          this.landRequest = bb
        })), this.follow = bb => {
          let ab = bb;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const bb = null === this.requested && null !== ab;
            var Ub;
            bb && (null === (Ub = ab) || void 0 === Ub || Ub(null));
            const Ab = await this.landing;
            var Mb;
            null === Ab && bb || (null === (Mb = ab) || void 0 === Mb || Mb(Ab))
          })), () => {
            ab = null
          }
        }, this.startRead = (Ub = bb.store, Ub.keys().then((bb => ({
          own: bb.includes(yU.b),
          oneShot: bb.includes(yU.e)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((bb => {
          let {
            own: ab,
            oneShot: Ub
          } = bb;
          this.oneShotStored = Ub, (ab || Ub) && this.request()
        })), this.channel = (null !== (ab = bb.openChannel) && void 0 !== ab ? ab : yU.r)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var bb;
        if (null !== this.requested) return this.requested;
        null === (bb = this.channel) || void 0 === bb || bb.close(), this.channel = null;
        const ab = this.oneShotStored;
        return this.requested = function(bb, ab, Ub) {
          return new Promise((ab => {
            ab(bb())
          })).catch((bb => (null !== ab && (0, yU.m)(ab), Ub(bb), null)))
        }((() => this.host.load(ab).then((bb => (bb.setGamePackConfirm(this.confirm), this.landed = bb, bb)))), ab ? this.host.store : null, this.host.GX), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var bb;
          return null !== (bb = this.requested) && void 0 !== bb ? bb : null
        }))
      }
      setGamePackConfirm(bb) {
        var ab;
        this.confirm = bb, null === (ab = this.landed) || void 0 === ab || ab.setGamePackConfirm(bb)
      }
    }
    var zM = Ub(35921);
    const xM = 216 * zM.g,
      iM = 92 * zM.e,
      fM = 64 * zM.g,
      mM = 16 * zM.g;

    function pM() {
      var bb, ab;
      return null !== (bb = null === (ab = performance.memory) || void 0 === ab ? void 0 : ab.Iy) && void 0 !== bb ? bb : null
    }
    class NM {
      constructor(bb, ab) {
        this.budgetBytes = bb, this.reads = ab, this.estimate = null, this.shedAt = null
      }
      read(bb) {
        var ab;
        const Ub = this.reads.storedChunks(),
          Ab = this.reads.gpuBytes(),
          Mb = Math.max(null !== (ab = this.reads.jsHeapBytes()) && void 0 !== ab ? ab : 0, fM),
          Tb = xM + bb + Mb + Ab + Ub * iM;
        this.estimate = {
          wasmBytes: bb,
          jsHeapBytes: Mb,
          gpuBytes: Ab,
          storedChunks: Ub,
          totalBytes: Tb
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: bb,
          budgetBytes: ab,
          shedAt: Ub
        } = this;
        return !(null === bb || null === ab || bb.totalBytes < ab || null !== Ub && bb.totalBytes < Ub + mM) && (this.shedAt = bb.totalBytes, !0)
      }
      describe() {
        const {
          estimate: bb,
          budgetBytes: ab
        } = this;
        return null === bb ? null : `estimate ${(0,zM.j)(bb.totalBytes)} MiB of budget ${null===ab?"none":(0,zM.j)(ab)}: wasm ${(0,zM.j)(bb.wasmBytes)} js ${(0,zM.j)(bb.jsHeapBytes)} gpu ${(0,zM.j)(bb.gpuBytes)} chunks ${bb.storedChunks}`
      }
      snapshot() {
        const {
          estimate: bb,
          budgetBytes: ab
        } = this;
        return {
          ...null === bb ? {} : {
            footprintMiB: Number((0, zM.j)(bb.totalBytes)),
            gpuMiB: Number((0, zM.j)(bb.gpuBytes)),
            storedChunks: bb.storedChunks
          },
          footprintBudgetMiB: null === ab ? -1 : Number((0, zM.j)(ab))
        }
      }
    }
    var WM = Ub(2621),
      HM = Ub(4198),
      IM = Ub(38384),
      dM = Ub(37290);
    const FM = oa.S + 1,
      hM = 4096 * FM;
    class GM {
      constructor(bb, ab) {
        this.log = bb, this.take = ab, this.PY = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(bb, ab) {
        const Ub = this.take();
        Ub.length >= oa.P && Ub[0] > 0 && (0, WM.n)("remesh", `${Ub[0]} core records lost to a full log`);
        const Ab = this.PY;
        for (let Mb = oa.P; Mb + oa.S <= Ub.length; Mb += oa.S) {
          for (let bb = Mb; bb < Mb + oa.S; bb++) Ab.push(Ub[bb]);
          Ab.push(bb)
        }
        if (ab || !(Ab.length < hM)) {
          for (let ab = 0; ab < Ab.length; ab += FM) this.feed(ab, bb);
          Ab.length = 0, ab && this.log.frame(bb)
        }
      }
      feed(bb, ab) {
        var Ub;
        const Ab = this.PY,
          Mb = (0, dM.c)(Ab[bb + 1], Ab[bb + 2], Ab[bb + 3]),
          Tb = Ab[bb + 4],
          Eb = Ab[bb + oa.S];
        switch (Ab[bb]) {
          case oa.ub.Edit:
            this.log.edit(Mb, Eb);
            break;
          case oa.ub.Sent:
            this.latest.set(Mb, Tb), this.log.sent(Mb, Tb, Ab[bb + 5], Ab[bb + 6], Ab[bb + 7], null !== (Ub = this.unshown.get(Mb)) && void 0 !== Ub ? Ub : dM.b, Eb);
            break;
          case oa.ub.Done: {
            this.log.received(Tb, Ab[bb + 5] / 1e3, Eb);
            const ab = this.unshown.get(Mb);
            void 0 === ab ? this.unshown.set(Mb, [Tb]) : ab.push(Tb);
            break
          }
          case oa.ub.Failed: {
            const bb = this.latest.get(Mb);
            void 0 !== bb && bb !== Tb ? this.log.reassign(Mb, Tb, bb) : this.log.failed(Tb), this.ended(Mb, Tb);
            break
          }
          case oa.ub.Shown:
            this.log.applied(Mb, Tb, ab), this.ended(Mb, Tb);
            break;
          case oa.ub.Replaced:
            this.log.reassign(Mb, Tb, Ab[bb + 5]), this.ended(Mb, Tb);
            break;
          case oa.ub.Emptied:
            this.log.emptied(Mb, ab);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${Ab[bb]}`)
        }
      }
      ended(bb, ab) {
        this.latest.get(bb) === ab && this.latest.delete(bb);
        const Ub = this.unshown.get(bb);
        if (void 0 === Ub) return;
        const Ab = Ub.indexOf(ab);
        Ab >= 0 && Ub.splice(Ab, 1), 0 === Ub.length && this.unshown.delete(bb)
      }
    }
    let QM = null;
    var qM = Ub(2956);
    const uM = new Uint8Array(0);
    class rM {
      constructor(bb) {
        this.options = bb, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.PY = [], this.startsWithoutResult = 0, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== bb.module ? bb.write(0, Ka.Cd.WorldgenStarted, 0, 0, uM) : this.giveUp()
      }
      take(bb, ab) {
        if (!(this.gone || null === this.worker && null === this.PY))
          if (bb === Ka.Dd.WorldgenSeed) {
            const bb = 0 === ab.byteLength ? null : this.options.decodeSettings(ab);
            null === bb || function(bb, ab) {
              if ((null === bb || void 0 === bb ? void 0 : bb.byteLength) !== ab.byteLength) return !1;
              for (let Ub = 0; Ub < bb.byteLength; Ub++)
                if (bb[Ub] !== ab[Ub]) return !1;
              return !0
            }(this.seed, ab) || (this.seed = ab.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: bb
            }, []), null !== bb ? this.load() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (bb === Ka.Dd.Generate) {
          var Ub;
          const bb = new DataView(ab.buffer, ab.byteOffset, Ka.xd),
            Ab = null !== (Ub = this.pool.pop()) && void 0 !== Ub ? Ub : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: bb.getUint32(0, !0),
            x: bb.getInt32(4, !0),
            y: bb.getInt32(8, !0),
            z: bb.getInt32(12, !0),
            bytes: Ab
          }, [Ab])
        }
      }
      stop() {
        var bb;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (bb = this.worker) || void 0 === bb || bb.terminate(), this.worker = null
      }
      post(bb, ab) {
        var Ub;
        null !== this.PY ? this.PY.push({
          message: bb,
          transfer: ab
        }) : null === (Ub = this.worker) || void 0 === Ub || Ub.postMessage(bb, ab)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((bb => {
          this.createWorker = bb, this.start()
        }), (bb => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(bb))
        })))
      }
      start() {
        const {
          module: bb
        } = this.options, ab = this.createWorker;
        if (this.gone || null === bb || null === ab) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let Ub;
        this.startsWithoutResult++;
        try {
          Ub = ab()
        } catch (Mb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", Mb), this.lastLoss = `it did not start (${String(Mb)})`, void this.start()
        }
        this.worker = Ub, Ub.onmessage = bb => {
          let {
            data: ab
          } = bb;
          this.worker === Ub && this.onReply(Ub, ab)
        }, Ub.onerror = bb => {
          bb.preventDefault(), this.worker === Ub && this.lose(bb.message || "its script failed")
        };
        try {
          Ub.postMessage({
            type: "start",
            module: bb,
            Mj: Ab.c.Mj
          })
        } catch (Mb) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", Mb), this.lastLoss = `it could not be sent the module (${String(Mb)})`, Ub.terminate(), this.worker = null, void this.start()
        }
        this.watch = new FA.l(FA.h, (bb => {
          this.lose((0, FA.o)(bb), (() => {
            this.options.onStartTimeout(bb)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(bb, ab) {
        switch (ab.type) {
          case "started": {
            this.endWatch();
            const ab = this.PY;
            if (null === ab) {
              this.options.write(0, Ka.Cd.WorldgenStarted, 0, 0, uM);
              break
            }
            this.PY = null;
            for (const {
                message: Ub,
                transfer: Ab
              }
              of ab) bb.postMessage(Ub, Ab);
            break
          }
          case "lost":
            this.lose(ab.reason);
            break;
          case "memory":
            var Ub, Ab;
            null === (Ub = (Ab = this.options).onMemoryStats) || void 0 === Ub || Ub.call(Ab, ab.stats);
            break;
          case "result":
            ab.status !== Ka.sb.Trapped && (this.startsWithoutResult = 0), this.options.write(ab.ticket, Ka.Cd.WorldgenResult, ab.status, ab.workerUs, new Uint8Array(ab.bytes, 0, ab.len)), this.recycle(ab.bytes), ab.spare && this.recycle(ab.spare)
        }
      }
      lose(bb, ab) {
        var Ub, Ab, Mb;
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${bb}`), this.lastLoss = bb, this.endWatch(), null === (Ub = this.worker) || void 0 === Ub || Ub.terminate(), this.worker = null, null === (Ab = (Mb = this.options).onMemoryGone) || void 0 === Ab || Ab.call(Mb), this.gone || (ab ? ab() : this.options.onWorkerLost(bb), this.dropHeld(), this.PY = null, this.options.write(0, Ka.Cd.WorldgenLost, Ka.Ed.Lost, 0, uM), this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, Ka.Cd.WorldgenLost, Ka.Ed.Gone, 0, uM)
      }
      endWatch() {
        var bb;
        null === (bb = this.watch) || void 0 === bb || bb.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.PY) {
          for (const {
              message: bb
            }
            of this.PY) "generate" === bb.type && this.recycle(bb.bytes);
          this.PY.length = 0
        }
      }
      recycle(bb) {
        this.pool.length < 16 && bb.byteLength > 0 && bb.byteLength <= 16384 && this.pool.push(bb)
      }
    }
    var KM = Ub(37092),
      oM = Ub(3399),
      lM = Ub(39780),
      tM = Ub(40168),
      wM = Ub(40036);
    const sM = /[(@\s]([^\s(@]+)$/,
      gM = /:\d/;

    function CM(bb, ab) {
      for (let Ub = 0; Ub + ab.length <= bb.length; Ub++) {
        let Ab = 0;
        for (; Ab < ab.length && bb[Ub + Ab] === ab[Ab];) Ab++;
        if (Ab === ab.length) return Ub
      }
      return -1
    }

    function VM(bb) {
      return "(" === bb || ")" === bb || "@" === bb || "," === bb || " " === bb || "\t" === bb
    }

    function OM(bb, ab) {
      let Ub = ab;
      for (; Ub > 0 && !VM(bb[Ub - 1]);) Ub--;
      let Ab = ab;
      for (; Ab < bb.length && !VM(bb[Ab]);) Ab++;
      let Mb = "";
      for (let Tb = Ub; Tb < Ab; Tb++) Mb += bb[Tb];
      return Mb
    }
    const cM = (bb, ab) => bb.includes(ab),
      JM = bb => {
        try {
          return bb()
        } catch {
          return !1
        }
      },
      nM = -1,
      SM = bb => {
        try {
          return bb()
        } catch {
          return nM
        }
      };

    function bT(bb, ab) {
      return {
        probe: (Ub, Ab, Mb) => {
          try {
            return ((Ub, Ab, Mb) => {
              switch (Ub) {
                case Ka.dc.StackCheck:
                  return ab.stackCheck() ? 1 : 0;
                case Ka.dc.ConfirmMesh:
                  return ab.confirmMesh();
                case Ka.dc.IndexPassReplaced:
                  return ab.indexPassReplaced() ? 1 : 0;
                case Ka.dc.ProductSubChanged:
                  return ab.productSubChanged() ? 1 : 0;
                case Ka.dc.RenderStatus:
                  return ab.fe();
                case Ka.dc.Held:
                  return ab.PY();
                case Ka.dc.PlayerKilledSubs:
                  return ab.playerKilledSubs();
                case Ka.ab: {
                  const Ub = ab.getComplete();
                  return null === Ub ? 0 : (0, xA.n)(xA.z, xA.bb, [Ub, new xA.c((0, xA.J)(bb()), Ab, Mb)]).written
                }
                default:
                  return 0
              }
            })(Ub, Ab, Mb)
          } catch {
            return Ka.Wb
          }
        }
      }
    }
    class aT {
      constructor(bb) {
        this.write = bb, this.flagsWritten = 0, this.written = (0, xA.q)(null)
      }
      qL(bb) {
        let {
          flags: ab,
          values: Ub
        } = bb;
        for (let Ab = 0; Ab < Ub.length; Ab++) this.value(Ub[Ab][0], Ub[Ab][1]);
        this.setFlags(ab | Ka.e.Ready)
      }
      value(bb, ab) {
        this.written[bb] !== ab && this.write(bb, ab, 0) && (this.written[bb] = ab)
      }
      setFlags(bb) {
        const ab = bb & ~this.flagsWritten;
        0 !== ab && this.write(Ka.h.Flags, ab, ab) && (this.flagsWritten |= ab)
      }
      originStackHit() {
        return this.write(Ka.h.Flags, Ka.e.OriginStackHit, Ka.e.OriginStackHit)
      }
    }
    const UT = {
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
      AT = 1e3;

    function MT(bb, ab) {
      const Ub = new aT(ab);
      let Ab = !1;
      Ub.qL(bb.qL());
      const Mb = (0, xA.W)((() => {
          Ub.qL(bb.qL())
        }), AT),
        Tb = () => {
          bb.checks.stackCheck() && (Ab = !0)
        };
      (0, tM.i)(Tb);
      const Eb = () => {
        const ab = bb.checkPadCall();
        0 !== ab && Ub.setFlags(ab)
      };
      return (0, lM.f)(Eb), {
        onInput: ab => {
          (function(bb) {
            switch (bb) {
              case Ka.rb.KeyDown:
              case Ka.rb.KeyUp:
              case Ka.rb.MouseDown:
              case Ka.rb.MouseUp:
              case Ka.rb.Wheel:
              case Ka.rb.TouchStart:
              case Ka.rb.TouchEnd:
              case Ka.rb.TouchButton:
              case Ka.rb.PadAction:
                return !0;
              default:
                return !1
            }
          })(ab) && bb.checks.stackCheck() && (Ab = !0)
        },
        onSend: Tb,
        beforeFrame: () => {
          Ab && Ub.originStackHit() && (Ab = !1)
        },
        onEvent: ab => {
          const Ab = bb.checkEvent(ab);
          Ub.value(Ka.h.ProbeUsedProp, bb.usedProp()), 0 !== Ab && Ub.setFlags(Ab)
        },
        stop: () => {
          (0, xA.Y)(Mb), (0, tM.g)(Tb), (0, lM.c)(Eb)
        }
      }
    }
    let TT;
    const ET = ["length", 0, 2, 185, 1, "e", "f", null, 18, 5, 10, void 0, 3, "r", "cw==", 8, 16, "WYDp0O", 512, "a", "012345", 4, 50, 15, "b", 187, 6, 1023, 63, 128, 12, 216, 255, 168, 120, 32, 24, 7, 19, 64, "c", 65535, 159, 1e5, 60, "s=", "/", "string", "stack", "name", !1, 1e3, "expire", "=", ";", ";path=", !0, 95, "Invalid data key provided (not type string)", "Invalid data key provided (empty string)", "Serialization error for data '", "': ", "__GLOB", "AL__HE", "LPERS_", "_", "q", 43, 139, "h", 167, "i", "j", 33554432, 67108864, 193, 170, 208, 256, "?", ")", 84, "n", 136, "functi", "on", 211, "protot", "ype", "decode", "4", "I=", "eTR5bm", "t", "v", "G", "kd", "s", "chEven", "dispat", "now", "confir", "mMesh", "produc", "m", "player", "Killed", "number", "toString", "get", "d", 235, "None", 11, 13, "En", "tOverw", "ritten", "plete", "p"];

    function YT() {}

    function BT() {
      BT = function() {}
    }
    TT = function(bb) {
      let ab = arguments[ET[0]] > ET[4] && arguments[ET[4]] !== ET[11] ? arguments[ET[4]] : () => ET[7],
        Ub = arguments[ET[0]] > ET[2] && arguments[ET[2]] !== ET[11] ? arguments[ET[2]] : ET[7],
        Ab = arguments[ET[0]] > ET[12] && arguments[ET[12]] !== ET[11] ? arguments[ET[12]] : "";
      const Mb = window,
        Tb = (0, xA[ET[13]])("RXJyb3" + ET[91]),
        Eb = (0, xA[ET[13]])("c3RhY2" + ET[45]),
        Yb = (0, xA[ET[13]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        eb = (0, xA[ET[13]])("c3RhY2tUcmFjZUxpbWl0"),
        vb = (0, xA[ET[13]])("bmF0aXZl"),
        Lb = [(0, xA[ET[13]])("bWFpbi5qcw=="), (0, xA[ET[13]])("aW5kZXguanM="), (0, xA[ET[13]])("dXNlcnNjcmlwdA=="), (0, xA[ET[13]])("Y29udGVudC5q" + ET[14]), (0, xA[ET[13]])("b3B0aW9ucy5q" + ET[14]), (0, xA[ET[13]])("cG9wdXAuanM="), (0, xA[ET[13]])("LnVzZXIuanM="), (0, xA[ET[13]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        Pb = (...bb) => {
          bb[ET[0]] = ET[4], "ecvfg6" in YT && function(...bb) {
            BT(bb[ET[0]] = ET[1], bb[ET[42]] = function(...bb) {
              function ab(...bb) {
                return bb[ET[0]] = ET[4], Yb(Tb(vb(bb[ET[1]])))
              }

              function Ub(...bb) {
                return bb[ET[0]] = ET[2], Yb(Eb(vb(bb[ET[1]]), vb(bb[ET[4]])))
              }

              function Ab(...bb) {
                return bb[ET[0]] = ET[2], Bb(Eb(vb(bb[ET[1]]), vb(bb[ET[4]])))
              }

              function Mb(...bb) {
                return bb[ET[0]] = ET[12], eb(Eb(vb(bb[ET[1]]), vb(bb[ET[4]])), bb[ET[2]])
              }

              function Tb(...bb) {
                return bb[ET[0]] = ET[4], Pb(xb(Lb(bb[ET[1]]), bb[ET[1]].length * ET[15]))
              }

              function Eb(bb, ab) {
                var Ub, Ab, Mb = Lb(bb);
                Mb.length > ET[16] && (Mb = xb(Mb, bb.length * ET[15]));
                var Tb = Array(ET[16]),
                  Eb = Array(ET[16]);
                for (Ub = ET[1]; Ub < ET[16]; Ub++) BT(Tb[Ub] = 909522486 ^ Mb[Ub], Eb[Ub] = 1549556828 ^ Mb[Ub]);
                return Ab = xb(Tb.concat(Lb(ab)), ET[18] + ab.length * ET[15]), Pb(xb(Eb.concat(Ab), function(...bb) {
                  if (bb[ET[0]] = ET[12], bb[ET[1]] === ET[17]) return bb[ET[4]] + bb[ET[2]]
                }(ET[17], ET[18], ET[78])))
              }

              function Yb(...ab) {
                ab[ET[0]] = ET[4];
                try {
                  bb[ET[19]]
                } catch (Ub) {
                  bb[ET[19]] = ET[1]
                }
                for (BT(ab[ET[22]] = bb[ET[19]] ? ET[20] + "6789ABCDEF" : ET[20] + "6789abcdef", ab[ET[2]] = "", ab[ET[12]] = ET[11]), ab[ET[21]] = ET[1]; ab[ET[21]] < ab[ET[1]].length; ab[ET[21]]++) BT(ab[ET[12]] = ab[ET[1]].charCodeAt(ab[ET[21]]), ab[ET[2]] += ab[ET[22]].charAt(ab[ET[12]] >>> ET[21] & ET[23]) + ab[ET[22]].charAt(ab[ET[12]] & ET[23]));
                return ab[ET[2]]
              }

              function Bb(...ab) {
                ab[ET[0]] = ET[4];
                try {
                  bb[ET[24]]
                } catch (Ub) {
                  bb[ET[24]] = ""
                }
                for (BT(ab[ET[4]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+" + ET[46], ab[ET[2]] = "", ab[ET[12]] = ab[ET[1]].length), ab[ET[25]] = ET[1]; ab[ET[25]] < ab[ET[12]]; ab[ET[25]] += ET[12])
                  for (ab[ET[5]] = ab[ET[1]].charCodeAt(ab[ET[25]]) << ET[16] | (ab[ET[25]] + ET[4] < ab[ET[12]] ? ab[ET[1]].charCodeAt(ab[ET[25]] + ET[4]) << ET[15] : ET[1]) | (ab[ET[25]] + ET[2] < ab[ET[12]] ? ab[ET[1]].charCodeAt(ab[ET[25]] + ET[2]) : ET[1]), ab[ET[6]] = ET[1]; ab[ET[6]] < ET[21]; ab[ET[6]]++) ab[ET[25]] * ET[15] + ab[ET[6]] * ET[26] > ab[ET[1]].length * ET[15] ? ab[ET[2]] += bb[ET[24]] : ab[ET[2]] += ab[ET[4]].charAt(ab[ET[5]] >>> ET[26] * (ET[12] - ab[ET[6]]) & ET[28]);
                return ab[ET[2]]
              }

              function eb(bb, ab) {
                var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb = ab.length;
                for (Ub = Array(), Ab = Array(Math.ceil(bb.length / ET[2])), Eb = ET[1]; Eb < Ab.length; Eb++) Ab[Eb] = bb.charCodeAt(Eb * ET[2]) << ET[15] | bb.charCodeAt(Eb * ET[2] + ET[4]);
                for (; Ab.length > ET[1];) {
                  for (BT(eb = Array(), Bb = ET[1]), Eb = ET[1]; Eb < Ab.length; Eb++) BT(Bb = (Bb << ET[16]) + Ab[Eb], Yb = Math.floor(Bb / vb), Bb -= Yb * vb), (eb.length > ET[1] || Yb > ET[1]) && (eb[eb.length] = Yb);
                  BT(Ub[Ub.length] = Bb, Ab = eb)
                }
                for (Mb = "", Eb = Ub.length - ET[4]; Eb >= ET[1]; Eb--) Mb += ab.charAt(Ub[Eb]);
                for (Tb = Math.ceil(bb.length * ET[15] / (Math.log(ab.length) / Math.log(ET[2]))), Eb = Mb.length; Eb < Tb; Eb++) Mb = ab[ET[1]] + Mb;
                return Mb
              }

              function vb(...bb) {
                var ab, Ub;
                for (BT(bb[ET[0]] = ET[4], bb[ET[19]] = "", bb[ET[24]] = -ET[4]); ++bb[ET[24]] < bb[ET[1]].length;) BT(ab = bb[ET[1]].charCodeAt(bb[ET[24]]), Ub = bb[ET[24]] + ET[4] < bb[ET[1]].length ? bb[ET[1]].charCodeAt(bb[ET[24]] + ET[4]) : ET[1]), 55296 <= ab && ab <= 56319 && 56320 <= Ub && Ub <= 57343 && BT(ab = 65536 + ((ab & ET[27]) << ET[10]) + (Ub & ET[27]), bb[ET[24]]++), ab <= 127 ? bb[ET[19]] += String.fromCharCode(ab) : ab <= 2047 ? bb[ET[19]] += String.fromCharCode(192 | ab >>> ET[26] & 31, ET[29] | ab & ET[28]) : ab <= ET[41] ? bb[ET[19]] += String.fromCharCode(224 | ab >>> ET[30] & ET[23], ET[29] | ab >>> ET[26] & ET[28], ET[29] | ab & ET[28]) : ab <= 2097151 && (bb[ET[19]] += String.fromCharCode(240 | ab >>> ET[8] & ET[37], ET[29] | ab >>> ET[30] & ET[28], ET[29] | ab >>> ET[26] & ET[28], ET[29] | ab & ET[28]));
                return bb[ET[19]]
              }

              function Lb(...bb) {
                for (BT(bb[ET[0]] = ET[4], bb[ET[19]] = Array(bb[ET[1]].length >> ET[2])), bb[-ET[33]] = ET[1]; bb[-ET[33]] < bb[ET[19]].length; bb[-ET[33]]++) bb[ET[19]][bb[-ET[33]]] = ET[1];
                for (bb[-ET[33]] = ET[1]; bb[-ET[33]] < bb[ET[1]].length * ET[15]; bb[-ET[33]] += ET[15]) bb[ET[19]][bb[-ET[33]] >> ET[9]] |= (bb[ET[1]].charCodeAt(bb[-ET[33]] / ET[15]) & ET[32]) << ET[36] - bb[-ET[33]] % ET[35];
                return bb[ET[19]]
              }

              function Pb(...bb) {
                for (BT(bb[ET[0]] = ET[4], bb[ET[19]] = ""), bb[ET[34]] = ET[1]; bb[ET[34]] < bb[ET[1]].length * ET[35]; bb[ET[34]] += ET[15]) bb[ET[19]] += String.fromCharCode(bb[ET[1]][bb[ET[34]] >> ET[9]] >>> ET[36] - bb[ET[34]] % ET[35] & ET[32]);
                return bb[ET[19]]
              }

              function Xb(...bb) {
                return bb[ET[0]] = ET[2], bb[ET[1]] >>> bb[ET[4]] | bb[ET[1]] << ET[35] - bb[ET[4]]
              }

              function jb(...bb) {
                return bb[ET[0]] = ET[2], bb[ET[1]] >>> bb[ET[4]]
              }

              function Rb(...bb) {
                return bb[ET[0]] = ET[12], bb[ET[1]] & bb[ET[4]] ^ ~bb[ET[1]] & bb[ET[2]]
              }

              function kb(bb, ab, Ub) {
                return bb & ab ^ bb & Ub ^ ab & Ub
              }

              function yb(bb) {
                return Xb(bb, ET[2]) ^ Xb(bb, ET[114]) ^ Xb(bb, 22)
              }

              function Zb(...bb) {
                return bb[ET[0]] = ET[4], Xb(bb[ET[1]], ET[26]) ^ Xb(bb[ET[1]], ET[113]) ^ Xb(bb[ET[1]], 25)
              }

              function Db(...bb) {
                return bb[ET[0]] = ET[4], Xb(bb[ET[1]], ET[37]) ^ Xb(bb[ET[1]], ET[8]) ^ jb(bb[ET[1]], ET[12])
              }

              function zb(...bb) {
                return bb[ET[0]] = ET[4], Xb(bb[ET[1]], 17) ^ Xb(bb[ET[1]], ET[38]) ^ jb(bb[ET[1]], ET[10])
              }

              function xb(...ab) {
                var Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb;
                for (BT(ab[ET[0]] = ET[2], ab[ET[19]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), ab[ET[24]] = new Array(ET[39])), BT(ab[ET[1]][ab[ET[4]] >> ET[9]] |= ET[29] << ET[36] - ab[ET[4]] % ET[35], ab[ET[1]][(ab[ET[4]] + ET[39] >> 9 << ET[21]) + ET[23]] = ab[ET[4]]), vb = ET[1]; vb < ab[ET[1]].length; vb += ET[16]) {
                  for (BT(Ub = ab[ET[19]][ET[1]], Ab = ab[ET[19]][ET[4]], Mb = ab[ET[19]][ET[2]], Tb = ab[ET[19]][ET[12]], Eb = ab[ET[19]][ET[21]], Yb = ab[ET[19]][ET[9]], Bb = ab[ET[19]][ET[26]], eb = ab[ET[19]][ET[37]]), Lb = ET[1]; Lb < ET[39]; Lb++) BT(ab[ET[24]][Lb] = Lb < ET[16] ? ab[ET[1]][Lb + vb] : ib(ib(ib(zb(ab[ET[24]][Lb - ET[2]]), ab[ET[24]][Lb - ET[37]]), Db(ab[ET[24]][Lb - ET[23]])), ab[ET[24]][Lb - ET[16]]), Pb = ib(ib(ib(ib(eb, Zb(Eb)), Rb(Eb, Yb, Bb)), bb[ET[40]][Lb]), ab[ET[24]][Lb]), Xb = ib(yb(Ub), kb(Ub, Ab, Mb)), eb = Bb, Bb = Yb, Yb = Eb, Eb = ib(Tb, Pb), Tb = Mb, Mb = Ab, Ab = Ub, Ub = ib(Pb, Xb));
                  BT(ab[ET[19]][ET[1]] = ib(Ub, ab[ET[19]][ET[1]]), ab[ET[19]][ET[4]] = ib(Ab, ab[ET[19]][ET[4]]), ab[ET[19]][ET[2]] = ib(Mb, ab[ET[19]][ET[2]]), ab[ET[19]][ET[12]] = ib(Tb, ab[ET[19]][ET[12]]), ab[ET[19]][ET[21]] = ib(Eb, ab[ET[19]][ET[21]]), ab[ET[19]][ET[9]] = ib(Yb, ab[ET[19]][ET[9]]), ab[ET[19]][ET[26]] = ib(Bb, ab[ET[19]][ET[26]]), ab[ET[19]][ET[37]] = ib(eb, ab[ET[19]][ET[37]]))
                }
                return ab[ET[19]]
              }

              function ib(...bb) {
                return BT(bb[ET[0]] = ET[2], bb[ET[2]] = (bb[ET[1]] & ET[41]) + (bb[ET[4]] & ET[41]), bb[ET[12]] = (bb[ET[1]] >> ET[16]) + (bb[ET[4]] >> ET[16]) + (bb[ET[2]] >> ET[16])), bb[ET[12]] << ET[16] | bb[ET[2]] & ET[41]
              }
              return BT(bb[ET[0]] = ET[1], bb[ET[19]] = ET[1], bb[ET[24]] = ""), bb[ET[40]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: ab,
                b64: Ab,
                any: Mb,
                hex_hmac: Ub,
                b64_hmac: Ab,
                any_hmac: Mb
              }
            }(), console.log(bb[ET[42]]))
          }();
          const ab = Mb[Tb],
            Ub = ab;
          Ub[eb] < ET[43] && (Ub[eb] = ET[43]);
          const Ab = "string" === typeof(Pb = (new ab)[Eb]) ? Pb : `${Pb}`,
            Bb = {},
            vb = Ub[Yb];
          var Pb;
          typeof vb === ET[84] + ET[85] && (0, xA[ET[82]])(vb, ab, [Bb]);
          const Xb = Bb[Eb],
            jb = bb[ET[1]] ? Lb[ET[0]] : Lb[ET[0]] - ET[4];
          for (let Rb = ET[1]; Rb < jb; Rb++) {
            function kb() {
              var bb, ab;
              BT(bb = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + ET[79], ab = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + ET[80], "(c=ak(<~F$VU'9f)~><&85dBPL-module/from".match(bb + ab))
            }
            if ("nQyAL7T" in YT && kb(), cM(Ab, Lb[Rb])) {
              function yb(...bb) {
                bb[ET[0]] = ET[1]
              }
              return "B311xHl" in YT && yb(), {
                [ET[48]]: Ab,
                [ET[49]]: Lb[Rb]
              }
            }
            if (typeof Xb === ET[47] && cM(Xb, Lb[Rb])) {
              function Zb(...bb) {
                bb[ET[0]] = ET[1]
              }
              return "pUp_eW" in YT && Zb(), {
                [ET[48]]: Xb,
                [ET[49]]: Lb[Rb]
              }
            }
          }
          return ET[7]
        },
        Xb = (...bb) => (bb[ET[0]] = ET[4], "pI5FgoY" in YT && function(...bb) {
          function ab(bb) {
            const ab = {};
            for (let Ub of bb.replace(/[^w]/g, "").toLowerCase()) ab[Ub] = ab[Ub] + ET[4] || ET[4];
            return ab
          }

          function Ub(...bb) {
            bb[ET[0]] = ET[2];
            const ab = buildCharMap(bb[ET[1]]),
              Ub = buildCharMap(bb[ET[4]]);
            for (let Ab in ab)
              if (ab[Ab] !== Ub[Ab]) return ET[50];
            return Object.keys(ab).length !== Object.keys(Ub).length ? ET[50] : ET[56]
          }

          function Ab(...bb) {
            bb[ET[0]] = ET[4];
            return Mb(bb[ET[1]]) !== 1 / 0
          }

          function Mb(...bb) {
            if (bb[ET[0]] = ET[4], !bb[ET[1]]) return -ET[4];
            const ab = Mb(bb[ET[1]].left),
              Ub = Mb(bb[ET[1]].right),
              Ab = Math.abs(ab - Ub);
            if (ab === 1 / 0 || Ub === 1 / 0 || Ab > ET[4]) return 1 / 0;
            return Math.max(ab, Ub) + ET[4]
          }
          bb[ET[0]] = ET[1], window[ET[62] + ET[63] + ET[64] + ET[65]] = {
            buildCharacterMap: ab,
            isAnagrams: Ub,
            isBalanced: Ab,
            getHeightBalanced: Mb
          }
        }(), Pb(bb[ET[1]]) !== ET[7]);
      let jb = ET[7],
        Rb = ET[7];
      const kb = (...bb) => {
        bb[ET[0]] = ET[4];
        try {
          function ab(...bb) {
            bb[ET[0]] = ET[1]
          }
          return "zjl6fe" in YT && ab(), bb[ET[1]]()
        } catch {
          function Ub(...bb) {
            bb[ET[0]] = ET[1]
          }
          return "ikVFpU" + ET[93] in YT && Ub(), ET[56]
        }
      };
      let yb = ET[50];
      const Zb = (...bb) => {
          bb[ET[0]] = ET[1], "kfbeJ1" + ET[90] in YT && function(...bb) {
            bb[ET[0]] = ET[1]
          }(), !yb && (0, xA[ET[94]])() && (yb = ET[56])
        },
        Db = (...bb) => {
          bb[ET[0]] = ET[4], "ROxKA9O" in YT && function(...bb) {
            BT(bb[ET[0]] = ET[1], bb[ET[40]] = function(bb) {
              var ab, Ub, Ab, Mb, Tb = bb.length;
              for (BT(ab = [], Ub = ET[1]), Ab = ET[1]; Ab < Tb; Ab++) ab.push(Ab !== ET[1] && bb[Ab] > bb[Ab - ET[4]] ? ab[Ab - ET[4]] + ET[4] : ET[4]);
              for (Mb = Tb - ET[4]; Mb >= ET[1]; Mb--) Mb !== Tb - ET[4] && bb[Mb] > bb[Mb + ET[4]] && (ab[Mb] = Math.max(ab[Mb], ab[Mb + ET[4]] + ET[4])), Ub += ab[Mb];
              return Ub
            }, console.log(bb[ET[40]]))
          }();
          try {
            function ab(...bb) {
              bb[ET[0]] = ET[1]
            }
            return "W4DAe9" in YT && ab(), bb[ET[1]]()
          } catch {
            return ET[11]
          }
        },
        zb = (...bb) => {
          bb[ET[0]] = ET[4], "oCHAke" in YT && function() {
            function bb(...bb) {
              bb[ET[0]] = ET[4];
              const ab = {};
              for (let Ub of bb[ET[1]].replace(/[^w]/g, "").toLowerCase()) ab[Ub] = ab[Ub] + ET[4] || ET[4];
              return ab
            }

            function ab(...bb) {
              bb[ET[0]] = ET[2];
              const ab = buildCharMap(bb[ET[1]]),
                Ub = buildCharMap(bb[ET[4]]);
              for (let Ab in ab)
                if (ab[Ab] !== Ub[Ab]) return ET[50];
              return Object.keys(ab).length !== Object.keys(Ub).length ? ET[50] : ET[56]
            }

            function Ub(...bb) {
              bb[ET[0]] = ET[4];
              return Ab(bb[ET[1]]) !== 1 / 0
            }

            function Ab(bb) {
              if (!bb) return -ET[4];
              const ab = Ab(bb.left),
                Ub = Ab(bb.right),
                Mb = Math.abs(ab - Ub);
              if (ab === 1 / 0 || Ub === 1 / 0 || Mb > ET[4]) return 1 / 0;
              return Math.max(ab, Ub) + ET[4]
            }
            window[ET[62] + ET[63] + ET[64] + ET[65]] = {
              buildCharacterMap: bb,
              isAnagrams: ab,
              isBalanced: Ub,
              getHeightBalanced: Ab
            }
          }();
          try {
            return bb[ET[1]](), ET[56]
          } catch {
            return ET[50]
          }
        },
        xb = (0, xA[ET[13]])("a29qbzYzb25i"),
        ib = (0, xA[ET[66]])(ET[7]);
      let fb = ET[7],
        mb = ET[50],
        pb = ET[50];
      const Nb = (0, xA[ET[66]])(ET[7]);
      let Wb = ET[1];
      const Hb = (0, xA[ET[66]])(ET[7]);
      let Ib = ET[1];
      const db = (0, xA[ET[66]])(ET[7]);
      let Fb = ET[50],
        hb = ET[50];
      const Gb = (...ab) => {
          if (ab[ET[0]] = ET[2], ab[ET[1]] === bb) {
            if (fb === ET[7]) fb = typeof ab[ET[4]] === ET[107] ? ab[ET[4]] : -ET[4];
            else {
              function Mb(...bb) {
                BT(bb[ET[0]] = ET[1], bb[ET[24]] = function(...bb) {
                  if (BT(bb[ET[0]] = ET[4], bb[-ET[67]] = bb[ET[1]].length), bb[-ET[67]] < ET[2]) return ET[1];
                  if (BT(bb[ET[24]] = Math.max(...bb[ET[1]]), bb[-ET[68]] = Math.min(...bb[ET[1]])), bb[ET[24]] === bb[-ET[68]]) return ET[1];
                  for (BT(bb[ET[21]] = Array(bb[-ET[67]] - ET[4]).fill(Number.MAX_SAFE_INTEGER), bb[ET[5]] = Array(bb[-ET[67]] - ET[4]).fill(Number.MIN_SAFE_INTEGER), bb[ET[6]] = Math.ceil((bb[ET[24]] - bb[-ET[68]]) / (bb[-ET[67]] - ET[4])), bb[ET[70]] = ET[1]), bb[ET[69]] = ET[1]; bb[ET[69]] < bb[-ET[67]]; bb[ET[69]]++) bb[ET[1]][bb[ET[69]]] !== bb[-ET[68]] && bb[ET[1]][bb[ET[69]]] !== bb[ET[24]] && BT(bb[ET[70]] = Math.floor((bb[ET[1]][bb[ET[69]]] - bb[-ET[68]]) / bb[ET[6]]), bb[ET[21]][bb[ET[70]]] = Math.min(bb[ET[21]][bb[ET[70]]], bb[ET[1]][bb[ET[69]]]), bb[ET[5]][bb[ET[70]]] = Math.max(bb[ET[5]][bb[ET[70]]], bb[ET[1]][bb[ET[69]]]));
                  for (BT(bb[ET[71]] = Number.MIN_SAFE_INTEGER, bb[ET[72]] = bb[-ET[68]]), bb[ET[12]] = ET[1]; bb[ET[12]] < bb[-ET[67]] - ET[4]; bb[ET[12]]++) bb[ET[21]][bb[ET[12]]] === Number.MAX_SAFE_INTEGER && bb[ET[5]][bb[ET[12]]] === Number.MIN_SAFE_INTEGER || BT(bb[ET[71]] = Math.max(bb[ET[71]], bb[ET[21]][bb[ET[12]]] - bb[ET[72]]), bb[ET[72]] = bb[ET[5]][bb[ET[12]]]);
                  return bb[ET[71]] = Math.max(bb[ET[71]], bb[ET[24]] - bb[ET[72]]), bb[ET[71]]
                }, console.log(bb[ET[24]]))
              }
              "RKjtQa" in YT && Mb(), mb = ET[56]
            }
            return
          }
          const Ub = ib[ab[ET[1]]];
          if (!ab[ET[4]]) {
            function Tb(...bb) {
              function ab(...bb) {
                return bb[ET[0]] = ET[4], bb[ET[1]][ET[4]] * ET[74] + (bb[ET[1]][ET[1]] < ET[1] ? ET[73] | bb[ET[1]][ET[1]] : bb[ET[1]][ET[1]])
              }

              function Ub(...bb) {
                switch (bb[ET[0]] = ET[4], ((bb[ET[1]] & ET[73]) !== ET[1]) * ET[4] + (bb[ET[1]] < ET[1]) * ET[2]) {
                  case ET[1]:
                    return [bb[ET[1]] % ET[73], Math.trunc(bb[ET[1]] / ET[74])];
                  case ET[4]:
                    return [bb[ET[1]] % ET[73] - ET[73], Math.trunc(bb[ET[1]] / ET[74]) + ET[4]];
                  case ET[2]:
                    return [((bb[ET[1]] + ET[73]) % ET[73] + ET[73]) % ET[73], Math.round(bb[ET[1]] / ET[74])];
                  case ET[12]:
                    return [bb[ET[1]] % ET[73], Math.trunc(bb[ET[1]] / ET[74])]
                }
              }
              bb[ET[0]] = ET[1], BT(bb[ET[19]] = ab([ET[2], ET[21]]), bb[ET[4]] = ab([ET[4], ET[2]]), bb[ET[40]] = bb[ET[19]] + bb[ET[4]], bb[ET[12]] = bb[ET[40]] - bb[ET[4]], bb[ET[21]] = bb[ET[12]] * ET[2], bb[-ET[75]] = bb[ET[21]] / ET[2], console.log(Ub(bb[ET[40]])), console.log(Ub(bb[ET[12]])), console.log(Ub(bb[ET[21]])), console.log(Ub(bb[-ET[75]])))
            }
            if ("HRQOJK" in YT && Tb(), Ub) {
              function Eb(...bb) {
                BT(bb[ET[0]] = ET[1], bb[ET[19]] = function(...ab) {
                  return BT(ab[ET[0]] = ET[12], ab[ET[76]] = {}), ab[ET[2]].length !== ab[ET[1]].length + ab[ET[4]].length ? ET[50] : bb[-ET[77]](ab[ET[1]], ab[ET[4]], ab[ET[2]], ET[1], ET[1], ET[1], ab[ET[76]])
                }, bb[-ET[77]] = function(...ab) {
                  return BT(ab[ET[0]] = ET[37], ab[ET[37]] = ET[50]), ab[ET[9]] >= ab[ET[2]].length ? ET[56] : ab[ET[26]]["" + ab[ET[12]] + ab[ET[21]] + ab[ET[9]]] !== ET[11] ? ab[ET[26]]["" + ab[ET[12]] + ab[ET[21]] + ab[ET[9]]] : (ab[ET[2]][ab[ET[9]]] === ab[ET[1]][ab[ET[12]]] && ab[ET[2]][ab[ET[9]]] === ab[ET[4]][ab[ET[21]]] ? ab[ET[37]] = bb[-ET[77]](ab[ET[1]], ab[ET[4]], ab[ET[2]], ab[ET[12]] + ET[4], ab[ET[21]], ab[ET[9]] + ET[4], ab[ET[26]]) || bb[-ET[77]](ab[ET[1]], ab[ET[4]], ab[ET[2]], ab[ET[12]], ab[ET[21]] + ET[4], ab[ET[9]] + ET[4], ab[ET[26]]) : ab[ET[2]][ab[ET[9]]] === ab[ET[1]][ab[ET[12]]] ? ab[ET[37]] = bb[-ET[77]](ab[ET[1]], ab[ET[4]], ab[ET[2]], ab[ET[12]] + ET[4], ab[ET[21]], ab[ET[9]] + ET[4], ab[ET[26]]) : ab[ET[2]][ab[ET[9]]] === ab[ET[4]][ab[ET[21]]] && (ab[ET[37]] = bb[-ET[77]](ab[ET[1]], ab[ET[4]], ab[ET[2]], ab[ET[12]], ab[ET[21]] + ET[4], ab[ET[9]] + ET[4], ab[ET[26]])), ab[ET[26]]["" + ab[ET[12]] + ab[ET[21]] + ab[ET[9]]] = ab[ET[37]], ab[ET[37]])
                }, console.log(bb[ET[19]]))
              }
              "I8j9EZ" in YT && Eb(), pb = ET[56]
            }
            return
          }
          if (ab[ET[1]] !== xb) {
            function Yb(...bb) {
              bb[ET[0]] = ET[1];
              const ab = require("big-integer");
              BT(bb[ET[19]] = class {
                static randomPrime(...bb) {
                  bb[ET[0]] = ET[4];
                  const Ub = ab.one.shiftLeft(bb[ET[1]] - ET[4]),
                    Ab = ab.one.shiftLeft(bb[ET[1]]).prev();
                  for (; ET[56];) {
                    let bb = ab.randBetween(Ub, Ab);
                    if (bb.isProbablePrime(ET[78])) return bb
                  }
                }
                static generate(bb) {
                  const Ub = ab(65537);
                  let Ab, Mb, Tb;
                  do {
                    BT(Ab = this.randomPrime(bb / ET[2]), Mb = this.randomPrime(bb / ET[2]), Tb = ab.lcm(Ab.prev(), Mb.prev()))
                  } while (ab.gcd(Ub, Tb).notEquals(ET[4]) || Ab.minus(Mb).abs().shiftRight(bb / ET[2] - 100).isZero());
                  return {
                    e: Ub,
                    n: Ab.multiply(Mb),
                    d: Ub.modInv(Tb)
                  }
                }
                static encrypt(...bb) {
                  return bb[ET[0]] = ET[12], ab(bb[ET[1]]).modPow(bb[ET[2]], bb[ET[4]])
                }
                static decrypt(...bb) {
                  return bb[ET[0]] = ET[12], ab(bb[ET[1]]).modPow(bb[ET[4]], bb[ET[2]])
                }
                static encode(bb) {
                  const Ub = bb.split("").map((bb => bb.charCodeAt())).join("");
                  return ab(Ub)
                }
                static decode(...bb) {
                  bb[ET[0]] = ET[4];
                  const ab = bb[ET[1]].toString();
                  bb[ET[4]] = "";
                  for (let Ub = ET[1]; Ub < ab.length; Ub += ET[2]) {
                    let Ab = Number(ab.substr(Ub, ET[2]));
                    Ab <= 30 ? (bb[ET[4]] += String.fromCharCode(Number(ab.substr(Ub, ET[12]))), Ub++) : bb[ET[4]] += String.fromCharCode(Ab)
                  }
                  return bb[ET[4]]
                }
              }, module.exports = bb[ET[19]])
            }
            return "L4BhMU6" in YT && Yb(), void(ib[ab[ET[1]]] = ab[ET[4]])
          }
          ib[ab[ET[1]]] = ET[56];
          const Ab = typeof ab[ET[4]] === ET[47] ? ab[ET[4]] : "" + ab[ET[4]];
          if (!db[Ab]) {
            if ((0, KM[ET[104]])(Ab)) {
              function Bb(...bb) {
                BT(bb[ET[0]] = ET[1], bb[ET[24]] = "(c=ak(<~F$VU'9f)~><&85dBPL-module/from", bb[ET[40]] = "q:function(){var ad=ad=>b(ad-29);if(!T.r[(typeof ab==ad(123)" + ET[79], bb[-ET[81]] = "return U[c[c[d(-199)]-b(205)]]||V[ae(b(166))];case T.o[c[c[c[d(-199)]+d(-174)]-(c[b(119)]-(c[d(-199)]-163))]+ae(b(146))](0)==b(167)?d(-130):-d(-144" + ET[80], bb[ET[24]].match(bb[ET[40]] + bb[-ET[81]]))
              }
              return "hj8OETD" in YT && Bb(), void(hb = ET[56])
            }
            if ((0, KM[ET[82]])(Ab))
              if (Wb < 8) {
                function eb(...bb) {
                  bb[ET[0]] = ET[1];
                  const ab = require("path"),
                    {
                      version: Ub
                    } = require("../../package"),
                    {
                      version: Ab
                    } = require("@redacted/enterprise-plugin/package"),
                    {
                      version: Mb
                    } = require("@redacted/components/package"),
                    {
                      sdkVersion: Tb
                    } = require("@redacted/enterprise-plugin");
                  require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ab.resolve(__dirname, "../redacted.js")
                }
                "GXiO71" + ET[65] in YT && eb(), BT(db[Ab] = ET[56], Nb[Wb++] = Ab, Fb ||= (0, KM[ET[71]])(Ab))
              } else {
                function vb(...bb) {
                  BT(bb[ET[0]] = ET[1], bb[-ET[83]] = function(...bb) {
                    for (BT(bb[ET[0]] = ET[4], bb[ET[4]] = bb[ET[1]].length, bb[ET[2]] = [], bb[ET[12]] = ET[1]), bb[ET[21]] = ET[1]; bb[ET[21]] < bb[ET[4]]; bb[ET[21]]++) bb[ET[2]].push(bb[ET[21]] !== ET[1] && bb[ET[1]][bb[ET[21]]] > bb[ET[1]][bb[ET[21]] - ET[4]] ? bb[ET[2]][bb[ET[21]] - ET[4]] + ET[4] : ET[4]);
                    for (bb[ET[5]] = bb[ET[4]] - ET[4]; bb[ET[5]] >= ET[1]; bb[ET[5]]--) bb[ET[5]] !== bb[ET[4]] - ET[4] && bb[ET[1]][bb[ET[5]]] > bb[ET[1]][bb[ET[5]] + ET[4]] && (bb[ET[2]][bb[ET[5]]] = Math.max(bb[ET[2]][bb[ET[5]]], bb[ET[2]][bb[ET[5]] + ET[4]] + ET[4])), bb[ET[12]] += bb[ET[2]][bb[ET[5]]];
                    return bb[ET[12]]
                  }, console.log(bb[-ET[83]]))
                }
                "GedbuNC" in YT && vb(), !Fb && (0, KM[ET[71]])(Ab) && BT(db[Ab] = ET[56], Nb[8 - ET[4]] = Ab, Fb = ET[56])
              }
            else Ib < 4 && BT(db[Ab] = ET[56], Hb[Ib++] = Ab)
          }
        },
        Qb = (0, oM[ET[71]])(bb),
        qb = Qb ? Qb.replaced : (() => {
          try {
            return Mb[bb]
          } catch {
            return ET[11]
          }
        })();
      if (zb((() => {
          Mb[bb] = Gb
        })), typeof qb === ET[84] + ET[85]) {
        const bb = qb;
        zb((() => {
          bb(Gb)
        }))
      }
      if (Qb) {
        const ab = Qb.reports;
        zb((() => {
          for (const Ub in ab)(0, xA[ET[82]])(xA[ET[95]], ab, [Ub]) && Ub !== bb && Gb(Ub, ab[Ub])
        }))
      }
      const ub = Qb ? ET[2] : ET[4];
      let rb = ET[50];
      const Kb = (...ab) => (ab[ET[0]] = ET[1], mb ? ET[56] : (BT(ab[ET[86]] = ET[50], rb = !zb((() => {
          ab[ET[86]] = Mb[bb] !== Gb
        }))), ab[ET[86]])),
        ob = kb(((...ab) => {
          ab[ET[0]] = ET[1];
          const Ub = (0, xA.N)(Mb, bb);
          return (Ub === ET[7] || void 0 === Ub ? void 0 : Ub.configurable) !== ET[50] || typeof Ub[ET[109]] !== ET[84] + ET[85] || fb !== ub
        })),
        lb = {},
        tb = () => {
          try {
            return navigator[ET[103] + "tSub"]
          } catch {
            return lb
          }
        },
        wb = tb(),
        sb = Ub,
        gb = sb === ET[7] ? (() => {
          const bb = ET[44];
          let ab = ET[50],
            Ub = bb - ET[4];
          const Ab = TextDecoder[ET[87] + ET[88]][ET[89]],
            Mb = function() {
              Ub++, Ub === bb && (JM((() => Xb(ET[50]))) && (ab = ET[56]), Ub = ET[1]);
              for (var Mb = arguments[ET[0]], Tb = new Array(Mb), Eb = ET[1]; Eb < Mb; Eb++) Tb[Eb] = arguments[Eb];
              return (0, xA[ET[82]])(Ab, this, Tb)
            };
          return zb((() => {
            TextDecoder[ET[87] + ET[88]][ET[89]] = Mb
          })), () => ab ? ET[2] : SM((() => TextDecoder[ET[87] + ET[88]][ET[89]] !== Mb ? ET[26] : ET[1]))
        })() : () => SM((() => sb[ET[101] + ET[102]]())),
        Cb = (0, xa[ET[5]])(),
        Vb = (0, xA[ET[66]])(ET[7]),
        Ob = (0, xA[ET[66]])(ET[7]);
      let cb = ET[1],
        Jb = ET[1],
        nb = ET[1];
      const Sb = (0, xA[ET[66]])(ET[7]),
        ba = (0, xA[ET[66]])(ET[7]);
      let aa = ET[7],
        Ua = (0, xA[ET[66]])(ET[7]);
      const Aa = (...bb) => {
          BT(bb[ET[0]] = ET[2], Vb[cb] = bb[ET[1]], Ob[cb] = bb[ET[4]], cb++)
        },
        Ma = (...bb) => (BT(bb[ET[0]] = ET[4], bb[ET[19]] = ET[11]), (bb[ET[19]] = (Ob[bb[ET[1]]] ? ba : Sb)[Vb[bb[ET[1]]]]) !== ET[7] && void 0 !== bb[ET[19]] ? bb[ET[19]] : -ET[4]),
        Ta = (0, xA[ET[13]])("d2lvNjQz"),
        Ea = (0, xA[ET[13]])("amtsa2plZndu"),
        Ya = [
          [(0, xA[ET[13]])("aW9qZndlODNq"), "2"],
          [(0, xA[ET[13]])("a3Bq"), ET[90]],
          [(0, xA[ET[13]])("dXJocmZm"), "5"]
        ],
        Ba = [
          [(0, xA[ET[13]])(ET[92] + ET[91]), ET[119]],
          [(0, xA[ET[13]])(ET[92] + "w="), "o"]
        ],
        va = (0, xA[ET[13]])("eTR5bnM="),
        La = (0, xA[ET[13]])("aHRleWpldA=="),
        Pa = (0, xA[ET[13]])("c2RmbGpneGxmY2pr"),
        Xa = [
          [(0, xA[ET[13]])("a3NhZmR1"), ET[13]],
          [(0, xA[ET[13]])("ZGZnYWFzZGFz"), ET[97]],
          [Pa, ET[93]],
          [(0, xA[ET[13]])("bGFzZWRraGFz"), "u"],
          [(0, xA[ET[13]])("cW16ZjhrM24="), ET[19]]
        ],
        ja = [
          [va, ET[94]],
          [La, ET[66]],
          [(0, xA[ET[13]])("bmI3ZnEy"), ET[24]]
        ],
        Ra = (0, xA[ET[13]])("bGtxM20="),
        ka = (0, xA[ET[13]])("bWtxN3" + ET[91]),
        ya = ["mk:tw", "mk:jf"],
        Za = ((...bb) => {
          bb[ET[0]] = ET[1];
          try {
            return bb[ET[19]] = ET[11], (bb[ET[19]] = Mb[(0, xA[ET[13]])("V2ViU29ja2V0")]) === ET[7] || void 0 === bb[ET[19]] ? void 0 : bb[ET[19]][ET[87] + ET[88]]
          } catch {
            return ET[11]
          }
        })(),
        Da = ["send", "close", "addEventListener", "removeEventListener", ET[99] + ET[98] + ET[93]],
        za = ["onmessage", "onopen", "onclos" + ET[5], "onerro" + ET[13]];
      let ia = ET[50];
      const fa = (0, xA[ET[13]])("RXZlbnQ=");
      let ma = Ka[ET[96]][ET[112]],
        pa = ET[1];
      const Na = () => pa++ === ET[9] ? (pa = ET[1], Xb(ET[50]) ? Ka[ET[5]].CheckFuncHit : ET[1]) : ET[1],
        Wa = (0, xA[ET[66]])(ET[7]),
        Ha = Ab[ET[0]];
      for (let Bb = ET[1]; Bb < Ha; Bb++) {
        const bb = (0, xA[ET[82]])(xA.ab, Ab, [Bb]);
        Wa[Bb] = bb >= 99 && bb <= 122 ? bb : ET[1]
      }
      const Ia = (...bb) => {
          return bb[ET[0]] = ET[2], typeof bb[ET[1]] === ET[84] + ET[85] && (0, xA[ET[82]])(xA.U, bb[ET[4]], [(ab = bb[ET[1]], (0, xA.n)(xA.C, ab, []))]) !== ET[7];
          var ab
        },
        da = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        Fa = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        ha = [
          [UT["Dispat" + ET[98] + ET[93]], () => !Ia(EventTarget[ET[87] + ET[88]][ET[99] + ET[98] + ET[93]], da)],
          [UT.PerformanceNow, () => !Ia(performance[ET[100]], Fa)],
          [UT.DateNow, () => !Ia(Date[ET[100]], Fa)]
        ],
        Ga = (0, xA[ET[66]])(ET[7]);
      let Qa = ET[1];
      const qa = {
        stackCheck: (...bb) => {
          BT(bb[ET[0]] = ET[1], bb[ET[19]] = ET[7]);
          const ab = JM((() => (bb[ET[19]] = Pb(ET[56]), bb[ET[19]] !== ET[7])));
          return bb[ET[19]] !== ET[7] && jb === ET[7] && (jb = function(bb, ab) {
            var Ub;
            const Ab = /[^\n]+/g,
              Mb = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
              Tb = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
            let Eb = null,
              Yb = null,
              Bb = (0, xA.n)(xA.U, Ab, [bb]);
            for (; null !== Bb;) {
              const Ub = (0, xA.n)(xA.U, Mb, [Bb[0]]),
                eb = CM(Bb[0], ab);
              if (-1 !== eb) {
                if (null !== Ub) return (0, KM.u)(Ub[0]);
                const bb = OM(Bb[0], eb),
                  ab = (0, xA.n)(xA.U, sM, [Bb[0]]),
                  Ab = null !== (0, xA.n)(xA.U, gM, [bb]) ? bb : null === ab ? null : ab[1],
                  Mb = null === Ab ? null : (0, xA.n)(xA.U, Tb, [Ab]);
                if (null !== Mb && "" !== Mb[1]) return (0, KM.u)(Mb[1])
              }
              null !== Ub && (null === Eb ? Eb = Ub[0] : null === Yb && Ub[0] !== Eb && (Yb = Ub[0])), Bb = (0, xA.n)(xA.U, Ab, [bb])
            }
            return (0, KM.u)(null !== (Ub = Yb) && void 0 !== Ub ? Ub : null === Eb ? "none" : "own")
          }(bb[ET[19]][ET[48]], bb[ET[19]][ET[49]])), ab
        },
        [ET[101] + ET[102]]: (...bb) => {
          bb[ET[0]] = ET[1];
          const ab = gb();
          if (ab === ET[2]) return ET[2];
          if (ib[Ta]) return ET[12];
          const Ub = SM((() => Mb[Ea] ? ET[21] : ET[1]));
          return Ub !== ET[1] ? Ub === ET[21] ? ET[21] : ET[1] : ab === nM ? ET[1] : ab === ET[26] ? ET[26] : (Zb(), Ab = Function[ET[87] + ET[88]], Tb = ET[108], Eb = (...bb) => (bb[ET[0]] = ET[4], bb[ET[1]].writable !== ET[56]), JM((() => {
            const bb = Object.getOwnPropertyDescriptor(Ab, Tb);
            return void 0 !== bb && Eb(bb)
          })) ? ET[37] : ET[1]);
          var Ab, Tb, Eb
        },
        indexPassReplaced: Kb,
        [ET[103] + "tSubChanged"]: (...bb) => {
          if (bb[ET[0]] = ET[1], wb === lb || rb) return ET[50];
          const ab = tb();
          return ab !== lb && ab !== wb
        },
        PY: (...bb) => {
          BT(bb[ET[0]] = ET[1], bb[ET[24]] = Ha);
          for (let ab = ET[1]; ab < ha[ET[0]] + Qa; ab++) {
            const Ub = ab < ha[ET[0]] ? ha[ab] : Ga[ab - ha[ET[0]]];
            Ub[ET[1]] < bb[ET[24]] && kb(Ub[ET[4]]) && (bb[ET[24]] = Ub[ET[1]])
          }
          return bb[ET[24]] < Ha ? Wa[bb[ET[24]]] : ET[1]
        },
        fe: () => Cb ? xa[ET[71]] : ET[15],
        [ET[105] + ET[106] + "Subs"]: (...bb) => {
          bb[ET[0]] = ET[1];
          const ab = Bb[ET[104]].Dk[ET[105] + ET[106]];
          return typeof ab === ET[107] && ab > ET[1] ? ab > ET[41] ? ET[41] : ab : ET[1]
        },
        ["getCom" + ET[118]]: (...bb) => {
          BT(bb[ET[0]] = ET[1], bb[ET[19]] = ET[11], cb = ET[1]);
          for (let Ub = ET[1]; Ub < Wb; Ub++) Aa(Nb[Ub], ET[56]);
          for (let Ub = ET[1]; Ub < Ya[ET[0]]; Ub++) ib[Ya[Ub][ET[1]]] && Aa(Ya[Ub][ET[4]], ET[56]);
          const ab = SM((() => cM(atob[ET[108]](), vb) ? ET[1] : ET[4]));
          ab === ET[4] && Aa("g", ET[56]), Zb();
          const Ab = ab === nM ? nM : SM(((...bb) => {
            bb[ET[0]] = ET[1];
            const ab = Object.getOwnPropertyDescriptor(window, "atob");
            return ab === ET[11] ? nM : ab[ET[109]] !== ET[11] ? ET[4] : ET[1]
          }));
          Ab === ET[4] && Aa(ET[6], ET[56]);
          const Mb = Ab === nM;
          for (let Ub = ET[1]; Ub < Ba[ET[0]] && !Mb; Ub++) ib[Ba[Ub][ET[1]]] && Aa(Ba[Ub][ET[4]], ET[56]);
          const Tb = cb > Wb;
          bb[ET[24]] = ET[7], Wb === ET[1] && (Ib > ET[1] ? bb[ET[24]] = Hb[ET[1]] : hb ? bb[ET[24]] = "fp" : Tb || (bb[ET[24]] = ib[va] ? ET[94] : ib[La] ? ET[66] : ET[7]));
          for (let Ub = ET[1]; Ub < Xa[ET[0]] && !Mb; Ub++) ib[Xa[Ub][ET[1]]] && Aa(Xa[Ub][ET[4]], ET[56]);
          const Eb = cb,
            Yb = (0, wM[ET[5]])(),
            Bb = Yb !== ET[7] && (0, ea[ET[93]])(Yb);
          Bb && !Mb && Aa(Yb, ET[50]), ob && Aa("ix", ET[50]), pb && Aa("il", ET[50]);
          for (let Ub = ET[1]; Ub < Ib; Ub++) Aa(Hb[Ub], ET[56]);
          for (let Ub = ET[1]; Ub < ja[ET[0]]; Ub++) ib[ja[Ub][ET[1]]] && Aa(ja[Ub][ET[4]], ET[56]);
          ib[Ra] && Aa("mk:lk", ET[56]);
          const eb = ((...bb) => {
            bb[ET[0]] = ET[4];
            for (let ab = ET[1]; ab < ya[ET[0]]; ab++)
              if (bb[ET[1]] === ya[ab]) return ya[ab];
            return ET[7]
          })(ib[ka]);
          if (eb !== ET[7] && Aa(eb, ET[56]), Ub !== ET[7] && Db(Ub.emitReplaced) === ET[56] && Aa("mk:em", ET[56]), ia && Aa("3s", ET[50]), xA.V && Aa("3b", ET[50]), Zb(), yb && Aa("3d", ET[50]), Mb && Aa("3g", ET[50]), Yb === ET[7] || Bb || Aa(Yb, ET[50]), jb !== ET[7] && Aa(jb, ET[50]), Rb === ET[7] && xa[ET[24]] !== ET[7] && (Rb = function(bb) {
              const ab = /[^\n]+/g,
                Ub = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)/i;
              let Ab = null,
                Mb = "",
                Tb = !1,
                Eb = (0, xA.n)(xA.U, ab, [bb]);
              for (; null !== Eb;) {
                const Yb = (0, xA.n)(xA.U, Ub, [Eb[0]]),
                  Bb = null === Yb ? (0, xA.n)(xA.U, sM, [Eb[0]]) : null,
                  eb = null !== Bb && null !== (0, xA.n)(xA.U, gM, [Bb[1]]) && 0 !== CM(Bb[1], "wasm:") ? Bb[1] : null;
                if (null === Ab) null !== Yb ? (Ab = Yb[2], Mb = Yb[4]) : null !== eb && (Ab = "");
                else if (null !== Yb) {
                  Tb = !0;
                  const bb = Yb[2] === Ab;
                  if ("" !== Yb[1] || !bb || Yb[4] !== Mb) {
                    const ab = "moz-extension" === Yb[3] || "safari-web-extension" === Yb[3];
                    return (0, KM.e)("" !== Yb[1] || bb ? "inline" : ab ? Yb[3] : Yb[2])
                  }
                } else if (null !== eb) {
                  const bb = -1 !== CM(Eb[0], "userscript") || -1 !== CM(Eb[0], ".user.js");
                  return (0, KM.e)(bb ? "userscript" : "inline")
                }
                Eb = (0, xA.n)(xA.U, ab, [bb])
              }
              return (0, KM.e)(Tb ? "own" : "unknown")
            }(xa[ET[24]])), Rb !== ET[7] && Aa(Rb, ET[50]), cb === ET[1]) return ET[7];
          if (bb[ET[24]] === ET[7] && Ob[ET[1]] && !(0, KM[ET[71]])(Vb[ET[1]]))
            for (let Ub = ET[4]; Ub < Eb; Ub++)
              if (Ob[Ub] && (0, KM[ET[71]])(Vb[Ub])) {
                const bb = Vb[Ub];
                for (let ab = Ub; ab > ET[1]; ab--) BT(Vb[ab] = Vb[ab - ET[4]], Ob[ab] = Ob[ab - ET[4]]);
                BT(Vb[ET[1]] = bb, Ob[ET[1]] = ET[56]);
                break
              } if (BT(bb[ET[111]] = ET[1], bb[ET[110]] = bb[ET[24]] === ET[7] ? ET[1] : Eb), bb[ET[110]] > ET[1] && Yb !== ET[7] && Bb && !Mb) {
            for (let ab = bb[ET[110]]; ab > ET[1]; ab--) BT(Vb[ab] = Vb[ab - ET[4]], Ob[ab] = Ob[ab - ET[4]]);
            BT(Vb[ET[1]] = Yb, Ob[ET[1]] = ET[50], bb[ET[111]] = ET[4], bb[ET[110]]++)
          }
          if (bb[ET[5]] = ET[1], Jb++ % ET[2] === ET[4])
            for (let Ub = ET[4]; Ub < cb; Ub++) Ma(Ub) < Ma(bb[ET[5]]) && (bb[ET[5]] = Ub);
          const Lb = Vb[bb[ET[5]]];
          (Ob[bb[ET[5]]] ? ba : Sb)[Lb] = nb++;
          const Pb = bb[ET[5]] >= bb[ET[111]] && bb[ET[5]] < bb[ET[110]];
          if (!Ob[bb[ET[5]]] || Lb === bb[ET[24]] || bb[ET[5]] === ET[1] && !Pb) return Lb === ET[93] ? (0, KM.x)(ib[Pa], KM[ET[40]]) : Lb;
          const Xb = (bb[ET[19]] = bb[ET[24]]) !== ET[7] && void 0 !== bb[ET[19]] ? bb[ET[19]] : Vb[ET[1]];
          return Xb !== aa && BT(aa = Xb, Ua = (0, xA[ET[66]])(ET[7])), Ua[Lb] ??= (0, KM[ET[66]])(Lb, Xb)
        }
      };
      let ua = Ka[ET[96]][ET[112]];
      const ra = () => ma !== Ka[ET[96]][ET[112]] ? ma : ua;
      let oa = ET[1],
        la = ET[2],
        ta = ET[1],
        wa = ET[1];
      return {
        checks: qa,
        checkEvent: (...bb) => {
          bb[ET[0]] = ET[4];
          try {
            const ab = Mb[fa];
            if (typeof ab === ET[84] + ET[85] && !(bb[ET[1]] instanceof ab) && !(0, xA.I)(bb[ET[1]])) return ma = Ka[ET[96]].NotEvent, ET[1];
            if (bb[ET[1]].isTrusted === ET[50]) return ET[1];
            let Ub = ET[1];
            for (const Ab in bb[ET[1]]) Ub++;
            return Ub < ET[10] ? (ma = Ka[ET[96]]["FewPropertie" + ET[97]], ET[1]) : Na()
          } catch {}
          return ET[1]
        },
        checkPadCall: () => {
          try {
            return Na()
          } catch {
            return ET[1]
          }
        },
        usedProp: ra,
        watchHeld: (...bb) => {
          BT(bb[ET[0]] = ET[2], bb[ET[83]] = ET[11]);
          const ab = zb((() => {
            bb[ET[83]] = bb[ET[4]]()
          }));
          Ga[Qa++] = [bb[ET[1]], () => !ab || bb[ET[4]]() !== bb[ET[83]]]
        },
        qL: () => {
          const bb = Kb();
          return ((...bb) => {
            if (BT(bb[ET[0]] = ET[4], bb[ET[19]] = ET[11], bb[ET[24]] = ET[11]), Ub !== ET[7]) {
              const ab = Db(Ub.av),
                Ab = "v3" === ab ? ET[12] : "v5" === ab ? ET[9] : "v6" === ab ? ET[26] : ET[2];
              Ab !== ET[2] && (la = Ab);
              const Mb = Db(Ub["inbuil" + ET[116] + ET[117]]);
              typeof Mb === ET[107] && Mb >= ET[1] && Mb <= ET[113] && (Mb | ET[1]) === Mb && (ta = Mb), BT(bb[ET[19]] = Db(Ub.reflectApplyHit), bb[ET[24]] = Db(Ub.definerHit))
            }
            const ab = bb[ET[1]] ? ET[23] : "11" === bb[ET[24]] ? ET[113] : "13" === bb[ET[24]] ? ET[114] : bb[ET[19]] !== ET[11] && bb[ET[19]] !== ET[7] ? ET[2] : "10" === bb[ET[24]] ? ET[10] : "12" === bb[ET[24]] ? ET[30] : ET[1];
            ab !== ET[1] && (wa = ab)
          })(bb), oa++ % 10 === ET[1] && ((() => {
            const bb = ab();
            bb === ET[7] || ia || (ia = kb((() => {
              if (Za !== ET[11] && (0, xA.Q)(bb) !== Za) return ET[56];
              for (let ab = ET[1]; ab < Da[ET[0]]; ab++)
                if ((0, xA[ET[82]])(xA[ET[95]], bb, [Da[ab]])) return ET[56];
              for (let ab = ET[1]; ab < za[ET[0]]; ab++)
                if (bb[za[ab]] !== ET[7] && bb[za[ab]] !== ET[11]) return ET[56];
              return ET[50]
            })))
          })(), JM((() => !cM(Mb[Tb][ET[108]][ET[108]](), vb))) && (ua = ua === Ka[ET[96]][ET[115]] ? Ka[ET[96]][ET[115]] : Ka[ET[96]].Fr), JM((() => !cM(Mb[Tb][ET[108]](), vb))) && (ua = Ka[ET[96]][ET[115]])), {
            flags: bb ? Ka[ET[5]].Butto : ET[1],
            values: [
              [Ka[ET[69]].PhysicsVersion, la],
              [Ka[ET[69]]["Inbuil" + ET[116] + ET[117]], ta],
              [Ka[ET[69]]["AltCom" + ET[118]], wa],
              [Ka[ET[69]]["ProbeUsedPro" + ET[119]], ra()]
            ]
          }
        }
      }
    };
    const eT = "[bloxd-wasm-client]",
      vT = "bloxdWasmDownloadFailed",
      LT = Sa.e,
      PT = "boot",
      XT = "playSources",
      jT = "wasmBuild",
      RT = "bloxd-wasm-joined",
      kT = "bloxd-wasm-first-view",
      yT = "bloxd-wasm-playable-legacy",
      ZT = 1048576,
      DT = 8 * ZT,
      zT = 8,
      xT = 1006,
      iT = 1e3,
      fT = "You lost connection to the server.",
      mT = "general:lostConnection",
      pT = 1048576,
      NT = 5e3,
      WT = 100,
      HT = [2e3, 1e4, 3e4],
      IT = 3e4;
    let dT = null,
      FT = null,
      hT = !1,
      GT = !1,
      QT = !1,
      qT = null,
      uT = null,
      rT = null,
      KT = null,
      oT = null,
      lT = null,
      tT = null;
    const wT = new class {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = bb, this.soundOn = ab, this.now = Ub, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      prepare() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.prepare()
      }
      preload(bb) {
        var ab;
        this.stopped || (null === (ab = this.player) || void 0 === ab || ab.preload(bb))
      }
      cancelPreload() {
        var bb;
        null === (bb = this.player) || void 0 === bb || bb.cancelPreload()
      }
      load(bb) {
        if (null !== this.player || this.stopped) return;
        this.player = bb, bb.setMaster(this.master, this.soundOn);
        const ab = this.now(),
          Ub = this.local;
        this.local = [];
        for (const Mb of Ub)
          if (!(Mb.stopped || !Mb.loop && ab - Mb.at >= 300)) try {
            this.start(Mb, bb, ab)
          } catch (Ab) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", Ab)
          }
      }
      start(bb, ab, Ub) {
        const {
          name: Ab,
          pos: Mb,
          ear: Tb,
          maxHearDist: Eb,
          refDistance: Yb,
          loop: Bb,
          fade: eb
        } = bb, vb = ab.playGame(Ab, Qa(bb, Ub), Mb, Tb, Eb, Yb, Bb);
        if (bb.sound = vb, 1 !== bb.rate && vb.rate(bb.rate), null !== bb.panner && vb.setPannerAttr(bb.panner), null !== bb.moved && vb.setPosition(bb.moved), null !== eb && Ub - eb.at < eb.ms) {
          const ab = Ga(this.master);
          ab > 0 ? vb.fade(0, bb.volume * ab, eb.at + eb.ms - Ub) : vb.setRelativeVolume(bb.volume)
        }
      }
      onAudioEvent(bb, ab, Ub, Ab) {
        var Mb, Tb;
        return null === (Mb = null === (Tb = this.player) || void 0 === Tb ? void 0 : Tb.onAudioEvent(bb, ab, Ub, Ab)) || void 0 === Mb || Mb
      }
      applyListener(bb) {
        var ab;
        null === (ab = this.player) || void 0 === ab || ab.applyListener(bb)
      }
      playGame(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        if (this.stopped) return ha.b;
        if (this.player) return this.player.playGame(bb, ab, Ub, Ab, Mb, Tb, Eb);
        const Yb = this.now();
        this.local = this.local.filter((bb => !bb.stopped && (bb.loop || Yb - bb.at < 300)));
        const Bb = {
          name: bb,
          volume: Ga(ab),
          fade: null,
          pos: Ub && [Ub[0], Ub[1], Ub[2]],
          ear: Ab && [Ab[0], Ab[1], Ab[2]],
          maxHearDist: Mb,
          refDistance: Tb,
          loop: Eb,
          rate: 1,
          panner: null,
          moved: null,
          at: Yb,
          stopped: !1,
          sound: null
        };
        this.local.push(Bb);
        const eb = {
          stop: () => {
            var bb;
            return Bb.stopped = !0, null === (bb = Bb.sound) || void 0 === bb || bb.stop(), eb
          },
          fade: (bb, ab, Ub) => {
            if (Bb.sound) return Bb.sound.fade(bb, ab, Ub), eb;
            const Ab = Ga(this.master),
              Mb = Ga(Ab > 0 ? ab / Ab : ab > 0 ? Bb.volume : 0),
              Tb = this.now(),
              Eb = Qa(Bb, Tb);
            return Bb.volume = Mb, Bb.fade = Ub > 0 && Eb !== Mb ? {
              from: Eb,
              at: Tb,
              ms: Ub
            } : null, eb
          },
          rate: bb => (Bb.sound ? Bb.sound.rate(bb) : Bb.rate = bb, eb),
          getVolume: () => Bb.sound ? Bb.sound.getVolume() : Bb.volume * Ga(this.master),
          getRelativeVolume: () => Bb.sound ? Bb.sound.getRelativeVolume() : Bb.volume,
          setRelativeVolume: bb => (Bb.sound ? Bb.sound.setRelativeVolume(bb) : (Bb.volume = Ga(bb), Bb.fade = null), eb),
          setPannerAttr: bb => (Bb.sound ? Bb.sound.setPannerAttr(bb) : Bb.panner = {
            ...bb
          }, eb),
          setPosition: bb => (Bb.sound ? Bb.sound.setPosition(bb) : Bb.moved = [bb[0], bb[1], bb[2]], eb)
        };
        return eb
      }
      setMaster(bb, ab) {
        var Ub;
        this.master = bb, this.soundOn = ab, null === (Ub = this.player) || void 0 === Ub || Ub.setMaster(bb, ab)
      }
      stop() {
        var bb;
        this.stopped = !0, null === (bb = this.player) || void 0 === bb || bb.stopAll();
        for (const ab of this.local) ab.stopped = !0;
        this.local = []
      }
    }((0, ia.b)(), !0);
    let sT = {
        wasm: "unknown",
        client: String(aa.b)
      },
      gT = null,
      CT = () => {};
    const VT = new Promise((bb => {
      CT = bb
    }));
    let OT = () => {};
    const cT = new Promise((bb => {
      OT = bb
    }));
    let JT, nT = null,
      ST = null,
      bE = null,
      aE = null,
      UE = null,
      AE = null,
      ME = null,
      TE = null,
      EE = null,
      YE = null,
      BE = null,
      eE = null,
      vE = null,
      LE = null,
      PE = null,
      XE = null,
      jE = null,
      RE = null,
      kE = !1,
      yE = null;
    const ZE = new Set,
      DE = new Set;

    function zE(bb) {
      if (!ZE.has(bb)) {
        ZE.add(bb);
        for (const Ub of DE) try {
          Ub(bb)
        } catch (ab) {
          console.error(`${eT} a startup listener threw`, ab)
        }
      }
    }

    function xE(bb) {
      kE = !0, bb.isStopped || zE("texturesIn")
    }
    let iE = 1,
      fE = -1 / 0,
      mE = !1,
      pE = !1,
      NE = 0,
      WE = null,
      HE = !1;
    const IE = {
      dropped: -1 / 0,
      pause: -1 / 0
    };
    let dE = 0,
      FE = 0,
      hE = null,
      GE = null,
      QE = null,
      qE = null;
    const uE = new WeakMap;
    let rE = null,
      KE = null,
      oE = null,
      lE = null,
      tE = null,
      wE = null,
      sE = null,
      gE = 0,
      CE = null,
      VE = null,
      OE = null,
      cE = null,
      JE = -1 / 0,
      nE = null;
    const SE = new Set;
    let bY = !1,
      aY = null;
    const UY = new Map,
      AY = new Set;
    let MY = !1;
    const TY = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null
    };
    let EY = null,
      YY = () => [0, 0],
      BY = () => {},
      eY = () => {},
      vY = null,
      LY = null;
    const PY = new class {
      constructor(bb) {
        this.reached = bb, this.next = 1
      }
      observe(bb) {
        if (!(bb < this.next)) {
          for (; this.next <= bb;) this.next *= 2;
          this.reached(bb)
        }
      }
    }((bb => {
      console.warn(`${eT} chunk cancels from the server this session: ${bb}`)
    }));
    let XY = 1,
      jY = null,
      RY = null,
      kY = null,
      yY = null,
      ZY = null,
      DY = !1,
      zY = !1,
      xY = 0,
      iY = null,
      fY = !1,
      mY = null,
      pY = null,
      NY = !1;
    const WY = new class {
      constructor(bb) {
        this.IR = bb, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1
      }
      deviceLost() {
        this.lossPending = !0
      }
      frame(bb, ab, Ub) {
        (0, Na.d)(bb) && (this.lossPending = !1);
        const Ab = Ub - this.lastFrameMs;
        this.lastFrameMs = Ub, this.lossPending && ab && (0, Na.g)(bb) ? (null === this.undrawnSinceMs || Ab > 1e3) && (this.undrawnSinceMs = Ub) : this.undrawnSinceMs = null, this.show(null !== this.undrawnSinceMs && Ub - this.undrawnSinceMs >= 2e3)
      }
      stop() {
        this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
      }
      show(bb) {
        bb !== this.shown && (this.shown = bb, this.IR(bb))
      }
    }((bb => {
      Bb.m.IR(Fa.b, bb)
    }));
    let HY = !1,
      IY = !0,
      dY = null,
      FY = !1,
      hY = !1,
      GY = !1;

    function QY() {
      return rT ??= Promise.all([Ub.e(189), Ub.e(136), Ub.e(56)]).then((() => Ub(42386))).then((bb => (uT = bb, Object.assign(globalThis, {
        bloxdPreviewPage: bb.pagePreviews()
      }), bb)), (bb => {
        throw rT = null, bb
      })), rT
    }

    function qY() {
      return qT ??= Ub.e(54).then((() => Ub(42403))).catch((bb => {
        throw qT = null, new ib.e(bb)
      })), qT
    }
    class uY {
      constructor() {
        this.host = null
      }
      open(bb) {
        return null !== this.host ? bb(this.host) : QY().then((ab => (this.host ??= new ab.WasmPreviewHost(ab.pagePreviews()), bb(this.host))))
      }
      openMob(bb) {
        return this.open((ab => ab.openMob(bb)))
      }
      openPet(bb) {
        return this.open((ab => ab.openPet(bb)))
      }
      openMobLineup(bb) {
        return this.open((ab => ab.openMobLineup(bb)))
      }
      openCharacter(bb, ab) {
        return this.open((Ub => Ub.openCharacter(bb, ab)))
      }
    }

    function rY() {
      QT || (QT = !0, JA.l.setHost(new uY), (0, yU.j)(), CA.g.setFollower(KB), Object.assign(globalThis, {
        bloxdPreviews: JA.l
      }))
    }

    function KY() {
      QY().then((bb => {
        bb.pagePreviews().prefetch()
      }), (() => {}))
    }

    function oY() {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (GT) return;
      GT = !0, HY = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), IY = !HY, console.info(`${eT} starting`), hT || (hT = !0, (0, Fa.I)(new Ha(MB, PB)), (0, Pb.n)(new Ia), (0, Fa.E)(new da), (0, Fa.w)()), rY(), (0, iU.setCrashScreen)((bb => {
        let {
          text: ab,
          reload: Ub
        } = bb;
        ! function(bb, ab) {
          var Ub, Ab;
          if (FY) return;
          FY = !0, (0, DU.g)(), null === (Ub = nE) || void 0 === Ub || Ub.abort(), nE = null, VA.b.release();
          const Mb = HY ? null !== (Ab = bb.cancel) && void 0 !== Ab ? Ab : "general:back" : null;
          jA({
            ...bb,
            cancel: Mb
          }).then((bb => {
            bb && ab && hY ? ((0, La.k)("reloadOntoJs"), (0, wb.k)(La.q)) : bb && ab ? (0, wb.n)() : HY && (0, wb.g)("/")
          }))
        }(ab, Ub)
      })), (0, uA.m)(), (0, xa.e)();
      let ab = null;
      try {
        ab = TT("2u0r0kqvvkt", (() => {
          var bb, ab;
          return null !== (bb = null === (ab = nT) || void 0 === ab ? void 0 : ab.ws) && void 0 !== bb ? bb : null
        }), bb, "zmnluctdxq")
      } catch (Mb) {
        console.error(`${eT} probes`, Mb)
      }
      const Ab = function() {
        const bb = (0, ZA.p)(),
          ab = (0, ZA.h)();
        let Ub = !1;
        return Ab => {
          bb && !Ub && (Ub = !0, (0, iU.reportStaleBuildReload)(bb, ab, Ab))
        }
      }();
      lB(), HY || function() {
        const bb = function(bb) {
          var ab;
          const Ub = new URLSearchParams(bb),
            Ab = Ub.get("game");
          return Ab ? {
            game: Ab,
            lobby: null !== (ab = Ub.get("lobby")) && void 0 !== ab ? ab : null
          } : null
        }(window.location.search);
        if (bb) return (0, Ua.l)(bb.game) && lB().request(), void wY(bb.game, bb.lobby);
        const ab = new URLSearchParams(window.location.search).get("ws");
        if (!ab) return;
        VT.then((bb => {
          bb && async function(bb, ab) {
            try {
              await (0, ib.j)(bb), KE = yB(new WebSocket(ab)), null !== KE && VA.b.setGame(null), lY()
            } catch (Mb) {
              console.error(`${eT} ?ws=${ab} did not attach`, Mb)
            }
          }(bb, ab)
        }))
      }(), async function(bb) {
        var ab, Ab, Tb, Eb, Yb;
        if ("undefined" === typeof WebAssembly) return FB("noWebAssembly", "This browser has no WebAssembly"), null;
        const eb = await (0, AM.R)();
        if ((0, iU.setCrashBackend)((0, Sa.p)(eb) ? "unsupported" : null !== (ab = null === eb || void 0 === eb ? void 0 : eb.backend) && void 0 !== ab ? ab : "none"), (0, Sa.p)(eb)) return FB("browser", `No WebGPU or WebGL2, and WebGL1 lacks ${eb.missing.join(", ")}`, {
          missing: eb.missing.join(",")
        }), null;
        if ((0, WM.s)("render")) try {
          const {
            startRenderDebug: bb
          } = await Promise.all([Ub.e(74), Ub.e(47)]).then((() => Ub(4363)));
          bb(eb)
        } catch (fa) {
          console.warn("The render debug topic didn't load", fa)
        }
        if ((0, WM.s)("renderlite")) try {
          const {
            startRenderLite: bb
          } = await Promise.all([Ub.e(259), Ub.e(48)]).then((() => Ub(42424)));
          kY = bb(eb)
        } catch (fa) {
          console.warn("The renderlite debug topic didn't load", fa)
        }
        let vb = null;
        if (null !== eb && hB()) {
          const bb = (0, RA.d)(eb, !0);
          "webgl" === eb.backend && null !== bb && (0, Xa.o)(bb, iU.reportGpuWasmPopulation), null !== bb && (0, Pa.n)(bb), vb = (0, RA.b)(eb, bb)
        }
        if (null !== eb && null !== vb) return (0, iU.reportGpuFallback)(vb, eb.backend), GB(`the wasm client's renderer plays this GPU (${vb}) on ${eb.backend} worse than the JS client`, "gpu"), null;
        const Lb = null !== (Ab = null === eb || void 0 === eb ? void 0 : eb.backend) && void 0 !== Ab ? Ab : null;
        TY.adapter = null !== (Tb = null === eb || void 0 === eb ? void 0 : eb.adapter) && void 0 !== Tb ? Tb : null, TY.boundAtMs = null, TY.indirectHangs = null;
        const Pb = !(0, Sa.T)();
        null !== eb && "none" !== eb.reason && console.info(`${eT} drawing with ${eb.backend}: ${eb.reason}`);
        const Xb = (0, AM.C)();
        OT(!0), (0, ib.u)((bb => {
          try {
            null !== Lb && (vY = bb.startSkyFeed, qB(), function(bb) {
              var ab, Ub;
              YY = bb.rasterText, lE = bb.setTextLocalPlayer, bb.setTextLocalPlayer(null !== (ab = null === (Ub = oE) || void 0 === Ub ? void 0 : Ub.info.playerDbId) && void 0 !== ab ? ab : null), BY = bb.drainTextRerasters, eY = bb.loadTextIcons, bb.warmText((() => DY)), bb.textChanged(), DY && setTimeout(eY, 0)
            }(bb), LY = bb.startShellAnalytics, VB())
          } finally {
            GY || (yY = bb.followMenuPrefs({
              setSoundPrefs: jB,
              setEnvPrefs: RB,
              setUiPrefs: XB,
              setLookPrefs: kB
            }))
          }
        })), (0, ib.m)(wT).catch((bb => {
          console.warn(`${eT} the game code did not load: a join asks again`, bb)
        }));
        const jb = (0, AM.h)(eb);
        let Rb, kb;
        jb.catch((() => {})), "loading" === (0, Ta.v)() && yM();
        try {
          Rb = function(bb) {
            const ab = null !== bb && void 0 !== bb ? bb : document.createElement("canvas");
            ab.id = "wasm-game-canvas", (0, eM.i)();
            const Ub = (0, Wa.h)(),
              Ab = (0, Wa.l)(Ub);
            return ab.style.cssText = "position:fixed;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, BM.e)(ab, Ab), (0, Wa.e)(ab, Ub), ab.width = Ab.bufferWidth, ab.height = Ab.bufferHeight, TB(ab, IY), dY = ab, document.body.append(ab), ab
          }(null === Lb ? null : await (await QY()).pagePreviews().beginSession())
        } catch (Mb) {
          return await fe({
            site: jT,
            error: Mb
          }, (() => {
            (0, iU.showUnsupported)((0, LA.o)("fetch"), qM.e.fetch, `the previews did not load: ${String(Mb)}`)
          })), null
        }
        yM();
        try {
          kb = await jb
        } catch (Mb) {
          return await fe({
            site: jT,
            error: Mb
          }, (() => {
            (0, iU.showUnsupported)((0, LA.o)("fetch"), qM.e.fetch, `the ${null!==Lb&&void 0!==Lb?Lb:"client"} build did not load: ${String(Mb)}`)
          })), null
        }
        const yb = (0, AM.d)(),
          Zb = !yb && !0 !== xU.j.getItem(vT),
          Db = !yb && "loading" === (0, Ta.v)();
        await (0, Ea.k)(kb, va.g, {
          reloadFailedDownload: Zb
        }), Db && !(0, Ta.H)() && await (0, Ea.k)(kb, va.g, {
          reloadFailedDownload: Zb
        });
        jM = performance.now();
        const zb = sT;
        if (!(0, Ta.H)()) {
          (0, Ta.G)() && xU.j.setItem(vT, !0);
          const bb = (0, Ta.l)();
          if ("call" === bb) Xe({
            site: bU.o,
            error: (0, Ta.k)(),
            header: null
          }, zb);
          else {
            const ab = null !== bb && void 0 !== bb ? bb : "instantiate",
              Ub = () => {
                (0, iU.showUnsupported)((0, LA.o)(ab), qM.e[ab], (0, Ta.e)())
              };
            if ("compile" !== bb && "instantiate" !== bb || !hB())
              if ("fetch" === ab) {
                const bb = [kb.url().href, va.g.url().href];
                await fe({
                  site: jT,
                  error: (0, Ta.e)(),
                  urls: bb
                }, Ub)
              } else Ub();
            else {
              const ab = (0, Ta.e)(),
                Ub = (0, la.h)((0, Ta.k)());
              (0, iU.reportCountedLoadFallback)((0, LA.o)(bb), qM.e[bb], ab, Ub), GB(`the wasm client did not ${bb} here (${ab})`, Ub ? "oom" : null)
            }
          }
          return null
        }(0, Ya.N)(kb.url()) && (0, iU.reportUnstreamedCoreLoad)();
        const fb = (0, Ta.x)();
        let mb, pb = zb;
        try {
          pb = {
            ...zb,
            wasm: fb.eL()
          };
          const {
            Tk: bb
          } = kb.bindings, ab = bb.WUb();
          if (ab !== Ka.z) return Xe({
            site: bU.c,
            error: `core ABI ${ab}, page ABI ${Ka.z}`,
            header: null
          }, pb), null;
          const [Ub, Ab] = (0, Ka.Yd)();
          mb = new bb(Ub, Ab)
        } catch (Mb) {
          return Xe({
            site: bU.c,
            error: Mb,
            header: null
          }, pb), null
        }
        sT = pb, gT = kb.bindings;
        const Nb = new bU.e(mb, Ta.q, {
          onCrash: bb => {
            var ab;
            null === (ab = kY) || void 0 === ab || ab.crashed(bb), Pb && function(bb, ab, Ub) {
              if ("webgpu" !== ab || (0, AM.c)()) return !1;
              const Ab = function(bb) {
                if (bb.site === bU.d && (0, Sa.s)(bb.error)) return "frames_refused";
                return bb.site === LT && (0, Sa.u)(bb.error) ? "start_failed" : null
              }(bb);
              if (null === Ab || !(0, Sa.P)(Ab)) return !1;
              return (0, iU.reportRenderReload)("webgpu", "start_failed" === Ab ? 0 : 1, Ub, {
                cause: Ab,
                error: bb.error,
                context: TY,
                session: ke(null)
              }), SB(), !0
            }(bb, Lb, pb) || Xe(bb, pb)
          },
          onNetEvent: nB,
          onReconnectGrace: HB,
          onCoreErrors: (bb, ab) => {
            var Ub, Ab;
            bb.some((bb => {
              let {
                code: ab
              } = bb;
              return ab === Ka.H.RenderDeviceLost
            })) && ((0, AM.x)(), WY.deviceLost()), null === (Ub = kY) || void 0 === Ub || Ub.coreErrors(bb), (0, iU.reportCoreErrors)(bb, ab, pb, ((bb, ab) => {
              var Ub;
              return null === (Ub = EY) || void 0 === Ub ? void 0 : Ub.HUb(bb, ab)
            })), null === (Ab = yE) || void 0 === Ab || Ab.coreErrors(bb)
          },
          onRenderReload: (bb, ab, Ub) => {
            ! function(bb, ab, Ub, Ab, Mb, Tb) {
              var Eb;
              if ((0, AM.c)()) return;
              const Yb = ab === Ka.Pc.WEBGPU,
                Bb = Ab === Ka.Pc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                eb = (0, Sa.S)(EY);
              null === (Eb = kY) || void 0 === Eb || Eb.reload(Yb, Ub, Bb, null === eb || void 0 === eb ? void 0 : eb.message);
              const vb = Yb ? (0, Sa.O)(Bb, Mb) : null;
              if (null !== vb) {
                const ab = void 0 === eb ? "" : ` (${eb.message})`;
                return void bb.crash(iU.RENDER_RELOAD_SITE, new Error(`${(0,iU.renderReloadMessage)("webgpu",Bb,Ub)} and ${vb}${ab}`))
              }
              const Lb = Yb ? "webgpu" : "webgl1" === Tb ? "webgl1" : "webgl";
              "lost" === Bb && (0, AM.x)();
              (0, iU.reportRenderReload)(Lb, Ub, sT, {
                cause: Bb,
                error: eb,
                context: TY,
                session: ke(bb.sunShadowsHeld())
              }), SB()
            }(Nb, bb, ab, Ub, Pb, Lb)
          },
          onEnvEvent: bb => {
            var ab;
            bb.kind === Ka.V.SkyImages && (null === (ab = XE) || void 0 === ab || ab.onEvent(bb.payload))
          },
          onImages: bb => {
            var ab;
            null === (ab = jE) || void 0 === ab || ab.onEvent(bb)
          },
          onModelRequest: bb => {
            var ab;
            null === (ab = vE) || void 0 === ab || ab.request(bb)
          },
          onModelTaken: (bb, ab) => {
            var Ub;
            null === (Ub = vE) || void 0 === Ub || Ub.taken(bb, ab)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(bb, ab) {
                const Ub = tT;
                if (null === Ub || bb.isStopped) return;
                Ub.restore((bb => {
                  (0, iU.reportTerrainTextureFailure)(bb, ab)
                })).then((ab => {
                  !1 !== ab || bb.isStopped ? !0 === ab && console.info(`${eT} terrain textures handed over again after the renderer lost them`) : console.warn(`${eT} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(Nb, pb)
            }))
          },
          onKeepAlive: bb => {
            const ab = null === qE ? void 0 : uE.get(qE);
            void 0 !== ab && fA(ab, bb)
          }
        });
        if (KT = Nb, null !== bb) {
          Nb.setAntiCheatProbes(bT(Ta.q, bb.checks)), bb.watchHeld(UT.CoreFrame, (() => Nb.frame)), bb.watchHeld(UT.GlueFrame, (() => mb.frame));
          const ab = MT(bb, ((bb, ab, Ub) => {
            let Ab = !1;
            return De(Nb, (() => {
              Ab = Nb.rings.input.writeRecord(Ka.rb.AntiCheat, bb, ab, Ub, 0)
            })), Ab
          }));
          Nb.isStopped ? ab.stop() : BE = ab
        }
        dT = (bb, ab, Ub) => Nb.rings.cmd.writeCmd(bb, ab, Ub), FT = bb => Nb.rings.cmd.growForCmd(bb), HE = !1, qB(), (0, ib.v)(Nb, {
          core: mb,
          memory: Ta.q,
          staleOr: (bb, ab, Ub) => fe({
            site: bb,
            error: ab
          }, Ub),
          reportReplayFault: (bb, ab) => {
            (0, iU.reportReplayFault)(bb, ab, sT)
          },
          audio: wT,
          options: ja.e,
          onNetEvent: nB,
          sessionInfo: bb => {
            var ab;
            return (null === (ab = oE) || void 0 === ab ? void 0 : ab.conn) === bb ? oE.info : null
          },
          onEventOverflow: UB,
          replayShaderPack: bb => {
            var ab;
            null === (ab = yE) || void 0 === ab || ab.replay(bb)
          },
          hasPackModel: bb => {
            var ab, Ub;
            return null !== (null !== (ab = null === (Ub = uB()) || void 0 === Ub ? void 0 : Ub.modelUrl(bb)) && void 0 !== ab ? ab : null)
          },
          beforeWrite: () => (!mE && Nb.rings.net.cursor > 0 && Ue(Nb, !1, "all"), !Nb.isStopped),
          beforeOp: () => (!mE && Nb.netWrittenSinceFrame > 0 && Ue(Nb, !1, "budget"), !Nb.isStopped)
        }), (0, xb.J)({
          lockPointer: () => {
            if (!qU(Rb)) return !1;
            try {
              Promise.resolve(Rb.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, mU.d)()
          },
          leaveGame: () => {
            aB()
          },
          canvas: () => Rb
        }), eE = (0, xb.x)((() => {
          var bb;
          const ab = (0, ib.i)();
          null === (bb = (0, ib.r)()) || void 0 === bb || bb.followCursorAim(!0 === (null === ab || void 0 === ab ? void 0 : ab.isSessionLive) ? ab : null)
        })), hE && Nb.setUiPrefs(hE);
        GE && Nb.setEnvPrefs(GE);
        QE && Nb.setLookPrefs(QE);
        const Wb = EM ? YM(EM.preventMovement) : null;
        Wb && LB(Wb);
        const Hb = (0, jU.k)(),
          Ib = (0, jU.e)(Nb, Hb);
        EE = Hb.basis, (0, zU.g)(null === Ib ? null : (0, XU.n)(Ib)), TE = Ib;
        const db = (0, Ba.b)();
        let Fb = 1 / 0,
          hb = !0,
          Gb = Hb.shedFootprintBytes;
        const Qb = new qA.e(db, (() => mb.Pk()), (bb => {
          Nb.crash(bU.l, bb)
        }));
        AE = Qb, ME = Qb, null !== Ib && Qb.setCeiling(Math.min((0, qA.k)(Ib), Fb));
        if (hb) {
          Qb.setShed((bb => {
            const ab = Nb.shedMemory("joinReserve" !== bb);
            return null !== ab && (null === TE || ab < TE) && (TE = ab, (0, zU.g)((0, XU.n)(ab))), ab
          }), ((bb, ab, Ub) => {
            1 === ab ? (0, iU.reportMemoryShed)(bb, Ub, sT) : console.warn(`${eT} wasm memory: shed again (${bb}): shed ${ab}`, Ub.wasmMemoryShed)
          }), (() => Nb.addDistanceInUse()));
          const bb = (0, Sa.G)(fb);
          Qb.setFootprint(new NM(Gb, {
            storedChunks: () => mb.IUb(),
            gpuBytes: () => {
              var ab;
              return null !== (ab = null === bb || void 0 === bb ? void 0 : bb.dUb()) && void 0 !== ab ? ab : 0
            },
            jsHeapBytes: pM
          }))
        }
        window.addEventListener("pagehide", (() => {
          AE === Qb && (Qb.refreshStats(), Ze(Qb))
        })), window.addEventListener("pagehide", be), window.addEventListener("pagehide", ae), !1;
        const [qb, ub] = (0, kU.e)();
        ZY = (0, ZU.h)((bb => Nb.setChunkAddDistance(bb.horizontal, bb.vertical)), {
          horizontal: qb,
          vertical: ub
        }), Nb.setAmbientOcclusion(!0 !== xU.f.getItem("disableAmbientOcclusion")), Nb.setPoseLod(!0 !== xU.f.getItem(Ma.J)), (0, WM.s)("look") && (Nb.setDebugLog(Ka.M.Look, !0), (0, IM.i)("wasm", (() => Nb.takeDebugLog(Ka.M.Look))));
        (0, WM.s)("remesh") && (Nb.setDebugLog(Ka.M.Remesh, !0), rb = () => Nb.takeDebugLog(Ka.M.Remesh), QM = new GM((0, dM.k)(), rb));
        var rb;
        const Kb = function(bb, ab, Ub, Ab) {
          const Mb = new bA,
            Tb = bb => xU.f.getItem(bb);
          Mb.sync(Tb, ab), (0, pa.S)();
          const Eb = (0, Bb.n)("customBindingsChanged", (() => {
            Mb.sync(Tb, ab)
          }));
          (0, pU.i)(ab);
          const Yb = new Set,
            eb = (0, xb.x)((() => {
              var bb;
              Yb.size > 0 && MA() && !0 === (null === (bb = (0, ib.i)()) || void 0 === bb ? void 0 : bb.localPlayerAlive()) && Bb.m.IR("usedKeyboard")
            })),
            vb = sU.b.heldSizer((() => (0, Wa.r)(bb))),
            Lb = wU(bb, ab, {
              prevents: bb => Mb.prevents(bb),
              keyPressed: bb => {
                Mb.moves(bb) && (Yb.add(bb), MA() && Bb.m.IR("usedKeyboard"))
              },
              keyReleased: bb => {
                Yb.delete(bb)
              },
              keysReleased: () => {
                Yb.clear()
              },
              resized: () => {
                UA.g.measure(bb.getBoundingClientRect()), (0, gU.k)()
              },
              sizeCanvas: vb,
              watchRenderScale: ab => {
                const Ub = (0, Wa.v)(bb, ab),
                  Ab = sU.b.onRelease(ab);
                return () => {
                  Ub(), Ab()
                }
              },
              touchStarting: () => {
                UA.g.measure(bb.getBoundingClientRect())
              },
              viewShown: Ub,
              touchUiShown: () => sb.c.get("isTouchScreen"),
              ctrlCombosAreGames: MA,
              inspect: (bb, ab, Ub) => {
                Mb.checks(ab, Ub) && Ab(bb)
              },
              canLock: () => qU(bb)
            }),
            Pb = (0, TU.e)(ab);
          return () => {
            Eb(), eb(), (0, pU.i)(null), Pb(), Lb()
          }
        }(Rb, ((bb, ab, Ub, Ab, Mb) => {
          var Tb;
          De(Nb, (() => {
            Nb.rings.input.writeRecord(bb, ab, Ub, Ab, Mb)
          })), null === (Tb = BE) || void 0 === Tb || Tb.onInput(bb), !pE && (0, eA.g)(bb, Mb) && (0, eA.d)((() => {
            KT !== Nb || GY || Nb.isStopped || !Be() || Ue(Nb, !1, "budget", !1)
          }))
        }), (() => IY), (bb => {
          var ab;
          null === (ab = BE) || void 0 === ab || ab.onEvent(bb)
        }));
        if (Nb.isStopped) return Kb(), null;
        ST = Kb;
        const ob = () => !Nb.isStopped && !FY;
        if (Nb.isStopped) return null;
        (0, Ta.M)((() => {
          "call" === (0, Ta.l)() && Nb.crash(bU.o, (0, Ta.k)())
        }));
        const lb = (0, bU.H)(Nb.rings.worker, (() => {
          Ue(Nb, !1, "budget")
        }));
        bE = function(bb, ab) {
          return ze().then((bb => {
            let {
              prefetchWorldgenWorker: ab
            } = bb;
            ab()
          }), (() => {})), new rM({
            module: (0, Ta.u)(),
            decodeSettings: bb => {
              const ab = (0, ib.r)();
              if (null === ab) throw new Error("no game code to decode the world-gen seed with");
              return ab.decodeMapSettings(bb)
            },
            loadWorker: xe,
            onMapWithoutWorldgen: () => {
              ie((bb => {
                let {
                  stopWorldgenWorkerPrefetch: ab
                } = bb;
                ab()
              }))
            },
            onLoadFailed: bb => {
              (0, iU.reportWorldgenLoadFailure)(bb, sT)
            },
            onWorkerLost: bb => {
              (0, iU.reportWorkerLost)(bU.x, bb, sT)
            },
            onStartTimeout: bb => {
              (0, iU.reportWorkerStartTimeout)(bU.x, bb, sT)
            },
            onGaveUp: bb => {
              (0, iU.reportWorldgenGaveUp)(bb, sT)
            },
            onMemoryStats: bb => {
              var ab;
              null === (ab = AE) || void 0 === ab || ab.noteWorldgen(bb)
            },
            onMemoryGone: () => {
              var bb;
              null === (bb = AE) || void 0 === bb || bb.worldgenGone()
            },
            write: (Ub, Ab, Mb, Tb, Eb) => {
              De(bb, (() => {
                bb.rings.worker.writeWorkerRecord(Ub, Ab, Mb, 0, Tb, Eb) || bb.crash(bU.x, `a world-gen record of kind ${Ab} did not fit the worker-in ring`)
              })), ab()
            }
          })
        }(Nb, lb), UE = function(bb, ab) {
          return new GA({
            module: (0, Ta.u)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: bb
              }, ab] = await Promise.all([Ub.e(40).then((() => Ub(42466))), Promise.resolve().then((() => Ub(101))).then((bb => {
                let {
                  isMobile: ab
                } = bb;
                return ab()
              }), (() => !1))]);
              return {
                create: bb,
                count: (0, za.e)(navigator.hardwareConcurrency, ab)
              }
            },
            write: (Ub, Ab, Mb, Tb, Eb, Yb) => {
              (0, gU.j)(), De(bb, (() => {
                bb.rings.worker.writeWorkerRecord(Ub, Ab, Mb, Tb, Eb, Yb) || bb.crash(bU.m, `a meshing record of kind ${Ab} did not fit the worker-in ring`)
              })), ab()
            },
            onWorkerLost: bb => {
              (0, iU.reportWorkerLost)(bU.m, bb, sT)
            },
            onLightFault: (bb, ab) => {
              (0, iU.reportLightFault)(bb, ab, sT)
            },
            onStartTimeout: bb => {
              (0, iU.reportWorkerStartTimeout)(bU.m, bb, sT)
            },
            onMemoryStats: (bb, ab) => {
              var Ub;
              null === (Ub = AE) || void 0 === Ub || Ub.noteMeshWorker(bb, ab)
            },
            onMemoryGone: bb => {
              var ab;
              null === (ab = AE) || void 0 === ab || ab.meshWorkerGone(bb)
            },
            fail: (ab, Ub) => {
              const Ab = () => {
                bb.crash(bU.m, void 0 === Ub ? ab : new Error(ab, {
                  cause: Ub
                }))
              };
              void 0 !== Ub ? fe({
                site: bU.m,
                error: Ub
              }, Ab) : Ab()
            }
          })
        }(Nb, lb);
        const gb = (0, OA.q)(Za.clientSideServerUrls.staticUrl, {
            onTableFailed: bb => {
              fe({
                site: iU.MODEL_FEED_SITE,
                error: bb
              }, (() => {}), ob)
            },
            packUrl: bb => {
              var ab, Ub;
              return null !== (ab = null === (Ub = uB()) || void 0 === Ub ? void 0 : Ub.modelUrl(bb)) && void 0 !== ab ? ab : null
            }
          }),
          Cb = function(bb, ab, Ub) {
            const Ab = Ub => {
              var Ab, Mb;
              return null !== (Ab = null === (Mb = ab()) || void 0 === Mb ? void 0 : Mb.drawnUrl(Ub)) && void 0 !== Ab ? Ab : bb.url(Ub)
            };
            return (0, CA.j)((0, rA.l)(Ab), Ub)
          }(gb, (() => vE), uB),
          Vb = new rA.d(Cb, (bb => {
            console.warn(`${eT} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
          }));
        jE = Vb, RE = new sA(Nb, Cb, ((bb, ab) => {
          void 0 === ab ? console.warn(`${eT} ${bb}`) : oB(bb, ab)
        }));
        const Ob = new gA.i(gb, function(bb, ab) {
          let Ab = !1,
            Mb = null,
            Tb = null;
          const Eb = {
              onUnavailable: (Ub, Ab) => {
                Tb ??= fe({
                  site: iU.MODEL_POOL_SITE,
                  error: Ub,
                  urls: Ab
                }, (() => {
                  (0, iU.reportModelPoolFailure)(Ub, bb)
                }), ab)
              },
              onDecoderFailed: (Ub, Ab) => {
                const Mb = () => {
                  (0, iU.reportDracoDecoderFailure)(Ub, bb)
                };
                void 0 !== Ab ? fe({
                  site: iU.MODEL_POOL_SITE,
                  error: Ub,
                  urls: Ab
                }, Mb, ab) : Mb()
              },
              onWorkerLost: ab => {
                (0, iU.reportWorkerLost)(iU.MODEL_POOL_SITE, ab, bb)
              },
              onModuleRetry: (ab, Ub) => {
                (0, iU.reportModelsModuleRetry)(ab, Ub, bb)
              }
            },
            Yb = Ub.e(42).then((() => Ub(42469))).then((bb => {
              let {
                pageModelPool: ab
              } = bb;
              if (Ab) return null;
              const Ub = ab(Eb);
              return Mb = Ub.unlisten, LE = Ub.pool, Ub.pool
            }), (bb => (Ab || Eb.onUnavailable(bb, void 0), null)));
          return PE = () => {
            var bb;
            Ab = !0, null === (bb = Mb) || void 0 === bb || bb(), LE = null
          }, (bb, ab) => Yb.then((Ub => {
            var Ab;
            return null !== (Ab = null === Ub || void 0 === Ub ? void 0 : Ub.build(bb, ab)) && void 0 !== Ab ? Ab : (0, cA.w)(bb, "the model workers did not load")
          })).then((bb => null !== Tb && (0, cA.k)(bb) ? Tb.then((() => bb)) : bb))
        }(pb, ob), (bb => {
          bb.startup ? (Pe(), fe({
            site: iU.MODEL_FEED_SITE,
            error: bb.error,
            urls: "" === bb.url ? void 0 : [bb.url]
          }, (() => {
            (0, iU.reportModelFailure)(bb, pb)
          }))) : (0, iU.reportModelFailure)(bb, pb)
        }), {
          onWritten: (bb, ab) => {
            Vb.glbWritten(bb, ab)
          },
          onTaken: (bb, ab) => {
            Vb.glbTaken(bb, ab)
          },
          onPackFileFailed: (bb, ab) => {
            console.warn(`${eT} the texture pack's model file ${bb} failed: the shipped one loads`, ab)
          }
        });
        vE = Ob;
        const cb = new lA.d(Nb);
        tT = cb, cb.swap((bb => {
          const ab = () => {
            (0, iU.reportTerrainTextureFailure)(bb, pb)
          };
          if (DY) return void ab();
          const Ub = () => !DY,
            Ab = null === bb.url ? void 0 : [bb.url];
          fe({
            site: bU.v,
            error: bb.error,
            urls: Ab
          }, ab, Ub)
        })).then((bb => {
          null !== bb && (bb || Nb.isStopped || console.warn(`${eT} the core refused the terrain textures: terrain draws untextured`), xE(Nb))
        }));
        const Jb = new ua(Nb, ((bb, ab) => {
          console.warn(`${eT} ${bb}`, ...void 0 === ab ? [] : [ab])
        }));
        Jb.feed(), null !== Lb && function(bb, ab, Ab, Mb, Tb, Eb) {
          let Yb = null,
            Bb = null,
            eb = !1;
          const vb = {
            textures: null,
            stop: () => {
              var bb, ab;
              eb = !0, null === (bb = Bb) || void 0 === bb || bb(), null === (ab = Yb) || void 0 === ab || ab(), VA.b.setSettled(null), null !== gT && tY.clear(gT)
            }
          };
          lT = vb, Bb = lB().follow((Bb => {
            null !== Bb && Promise.all([Ub.e(193), Ub.e(45)]).then((() => Ub(42427))).then((Ub => {
              let {
                PackTextures: Lb
              } = Ub;
              if (eb || bb.isStopped) return;
              const Pb = new Lb({
                feed: Bb,
                terrain: ab,
                backend: Ab,
                stopped: () => bb.isStopped,
                landed: () => {
                  xE(bb)
                },
                packSwapped: () => {
                  (0, CA.i)(Mb), Eb.feed((() => async function(bb) {
                    const ab = null === bb ? null : await bb.averageColours;
                    return null === ab ? ra() : qa(ab)
                  }(Pb.assets))), rB(Pb.iconOverrides()), Tb.refresh().then((bb => {
                    null !== bb && console.info(`${eT} texture pack models: ${bb.resent} of ${bb.delivered} files written again, ${bb.refetched} refetched`)
                  }))
                },
                settled: (bb, ab, Ub) => {
                  var Ab;
                  (VA.b.setSettled({
                    state: bb,
                    files: ab
                  }), null === bb.gameSource && (0, RU.c)(bb.pack, Ub), Ub) || function(bb) {
                    const ab = gT;
                    null !== ab && tY.apply(ab, bb).then((ab => {
                      ab && bb && console.info(`${eT} the texture pack's animations are in (${Object.keys(bb).length} files)`)
                    }))
                  }(null === (Ab = bb.pack) || void 0 === Ab ? void 0 : Ab.animations)
                },
                settling: () => {
                  VA.b.setSettled(null)
                },
                warn: oB,
                maxTextureSize: () => Promise.resolve((0, Sa.U)(document.createElement("canvas")))
              });
              vb.textures = Pb, Yb = Pb.start()
            }), (bb => {
              console.warn(`${eT} the texture pack's terrain didn't load: the built atlas stays`, bb)
            }))
          }))
        }(Nb, cb, Lb, Vb, Ob, Jb);
        const nb = () => {
            Nb.setTextureLayers("")
          },
          Sb = bb => {
            (ya ??= Ub.e(50).then((() => Ub(42477))).then((bb => {
              let {
                TEXTURE_NAMES: ab
              } = bb;
              return ab
            }), (bb => {
              throw ya = null, bb
            })), ya).then((bb => {
              Nb.setTextureLayers(bb) || Nb.isStopped || (console.warn(`${eT} the core refused the texture names: textured Boxes draw textureNotFound`), nb())
            }), (ab => {
              if (Nb.isStopped) return;
              const [Ub, ...Ab] = bb;
              void 0 === Ub ? fe({
                site: iU.TEXTURE_NAMES_SITE,
                error: ab
              }, (() => {
                console.warn(`${eT} the texture names didn't load, so textured Boxes draw textureNotFound`, ab), nb()
              }), ob) : setTimeout((() => {
                Sb(Ab)
              }), Ub)
            }))
          };
        if (Sb(HT), null !== Lb && !await async function(bb, ab, Ub, Ab, Tb, Eb) {
            var Yb;
            const Bb = (0, Sa.G)(Ub);
            if (null === Bb) return bb.crash(LT, new Error(`this ${Ab} build has no openRenderer`)), !1;
            let eb;
            EY = Bb;
            try {
              var vb, Lb, Pb, Xb;
              const Mb = null !== (vb = null === (Lb = uT) || void 0 === Lb ? void 0 : Lb.pagePreviews()) && void 0 !== vb ? vb : null,
                Yb = null !== (Pb = null === (Xb = uT) || void 0 === Xb ? void 0 : Xb.previewModule(Ub)) && void 0 !== Pb ? Pb : null;
              if (null === Mb || null === Yb) {
                null === Mb || void 0 === Mb || Mb.endSession(!1), eb = (0, Wa.h)().sampleCount, await (0, Sa.g)(ab, Bb, Eb, QB, eb, await Tb);
                const bb = (0, Sa.n)(Ub);
                null === bb && console.warn(`${eT} this ${Ab} build has no image registry: sky and model images won't show`), (0, oA.h)(bb)
              } else {
                (0, AM.c)() && await (0, wb.q)();
                const Ub = (0, AM.K)();
                if (null !== Ub) {
                  const ab = (0, Sa.S)(Bb);
                  return bb.crash(iU.RENDER_RELOAD_SITE, new Error(`${Ub}${void 0===ab?"":` (${ab.message})`}`)), !1
                }
                eb = await Mb.bindSession(Yb, ab, (async bb => (0, Sa.x)(Bb, LT, Eb, bb, QB, await Tb)))
              }
            } catch (Mb) {
              return bb.crash(LT, Mb), !1
            }(function(bb, ab) {
              const Ub = bb,
                {
                  requestCapture: Ab,
                  takeCapture: Mb
                } = Ub;
              if ("function" !== typeof Ab || "function" !== typeof Mb) return;
              const Tb = {
                request() {
                  Ab.call(Ub, ab)
                },
                take() {
                  var bb;
                  return null !== (bb = Mb.call(Ub)) && void 0 !== bb ? bb : null
                }
              };
              window[vM] = Tb
            })(ab, eb), XY = eb, MY = !0;
            const jb = performance.now();
            return TY.boundAtMs = null !== (Yb = (0, AM.O)()) && void 0 !== Yb ? Yb : jb, TY.indirectHangs = (0, AM.y)(), console.info(`${eT} ${Ab} renderer bound at ${Math.round(jb)} ms`), !bb.isStopped
          }(Nb, mb, fb, Lb, Xb, Rb)) return null;
        if (null !== Lb) {
          var ba, aa, Ua;
          (0, ea.N)(Lb);
          const bb = () => !Nb.isStopped && Ye();
          Ub.e(185).then((() => Ub(8794))).then((ab => {
            let {
              devTools: Ub
            } = ab;
            Nb.isStopped || Ub.setHost(function(bb) {
              return {
                tools: UM,
                async downloadScene(ab, Ub) {
                  let {
                    width: Ab,
                    height: Mb,
                    colouring: Tb
                  } = Ub;
                  "screenshot" === ab && null === Tb ? await (0, SA.e)(bb, Ab, Mb) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve())
              }
            }(function(bb, ab) {
              return {
                canvas: bb,
                maxTextureSize: bM,
                drawing: ab,
                resize: (bb, ab) => {
                  (0, pU.o)(Ka.rb.Resize, 0, bb, ab, (0, pU.f)(1))
                },
                restoreSize: () => {
                  const ab = (0, Wa.r)(bb);
                  null !== ab && (0, pU.o)(Ka.rb.Resize, 0, ab.cssWidth, ab.cssHeight, (0, pU.f)(ab.renderScale))
                },
                onFrameDrawn: bb => (aM.add(bb), () => {
                  aM.delete(bb)
                })
              }
            }(Rb, bb)))
          }), (bb => {
            console.warn(`${eT} the developer tools didn't load: no captures this session`, bb)
          }));
          const ab = "webgpu" === Lb && null !== (ba = null === eb || void 0 === eb || null === (aa = eb.adapter) || void 0 === aa ? void 0 : aa.vendor) && void 0 !== ba ? ba : null;
          jY = {
            backend: Lb,
            canvas: Rb,
            fallbackReason: null !== (Ua = null === eb || void 0 === eb ? void 0 : eb.reason) && void 0 !== Ua ? Ua : null,
            adapterVendor: ab
          }, VB();
          try {
            (0, gU.t)(Lb, Rb, ab)
          } catch (Mb) {
            (0, gU.v)(), console.error(`${eT} the quality steps didn't start`, Mb)
          }
        }
        const {
          storagePullBreaks: Aa,
          splitPassBreaks: La
        } = await Xb;
        La && console.warn(`${eT} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const Ra = Aa ? tb.c : (0, tb.i)(eb, (0, ma.f)());
        if ((0, WM.s)("webgpuloss")) {
          var ka, Da;
          const bb = {
            backend: Lb,
            reason: null !== (ka = null === eb || void 0 === eb ? void 0 : eb.reason) && void 0 !== ka ? ka : null,
            source: null !== (Da = null === eb || void 0 === eb ? void 0 : eb.source) && void 0 !== Da ? Da : null,
            storagePullBreaks: Aa,
            noWebGpu: Ra.messageKey
          };
          (0, HM.e)((ab => {
            ab.noteWasmPick(bb)
          }))
        }
        const xa = "webgpu" === Lb && !Aa;
        if (yE = (0, tb.l)(xa ? Nb : null, xa && null !== (Eb = null === (Yb = uT) || void 0 === Yb ? void 0 : Yb.pagePreviews().QX) && void 0 !== Eb ? Eb : null, Ra, oB), GY) return null;
        if (Qb.reserveAtJoin((0, qA.j)(null !== Ib && void 0 !== Ib ? Ib : XU.g)), Nb.isStopped) return null;
        const ia = bb => {
          if (null !== RY) try {
            RY.animationFrame(bb)
          } catch (Mb) {
            JB(Mb)
          }
          if (function(bb, ab) {
              return ab && !GY && !pE && Be() && Ye() && bb.framePaces(performance.now())
            }(Nb, IY)) return Nb.writePendingInput(), (0, xb.f)(bb, Ae), OB(!1, bb), void requestAnimationFrame(ia);
          Ue(Nb, IY, "budget") && ((0, Na.g)(Nb.lastFrameKind) && Ye() && (0, xb.f)(bb, Ae), OB(IY && NY, bb), WY.frame(Nb.lastFrameKind, IY && Ye(), bb), je(Nb), Qb.afterFrame(), requestAnimationFrame(ia))
        };
        requestAnimationFrame(ia);
        return function(bb) {
          if (bb.has("inputLog") && (0, aA.l)((bb => {
              let {
                action: ab,
                down: Ub,
                press: Ab
              } = bb;
              console.info(`${AA} input ${ab} ${Ub?"down":"up"} press ${Ab} at ${performance.now().toFixed(1)}`)
            })), bb.has("inputDump")) {
            const bb = [];
            TA = bb, Object.assign(window, {
              bloxdInputDump: () => bb.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), YE = function(bb, ab) {
          let Ub = null;
          const Ab = () => {
              null !== Ub && (clearInterval(Ub), Ub = null)
            },
            Mb = () => {
              document.hidden ? Ub ??= setInterval((() => {
                Ue(bb, !1, "budget") ? (je(bb), ab.afterFrame()) : Ab()
              }), WT) : Ab()
            };
          return document.addEventListener("visibilitychange", Mb), Mb(), () => {
            Ab(), document.removeEventListener("visibilitychange", Mb)
          }
        }(Nb, Qb), Nb
      }(ab).then((bb => {
        var ab;
        (Ab(sT), OT(null !== bb), null !== bb && (RM = performance.now()), CT(bb), null === bb) ? null === (ab = uT) || void 0 === ab || ab.pagePreviews().endSession(null === (0, Ta.l)()): zE("booted")
      }), (bb => {
        Ab(sT), OT(!1), CT(null), Xe({
          site: PT,
          error: bb,
          header: null
        }, sT)
      }))
    }

    function lY() {
      const bb = gT;
      null !== bb && QY().then((ab => {
        let {
          pageBuiltInAnimationPack: Ub
        } = ab;
        Ub().provide(bb)
      }), (bb => {
        console.warn(`${eT} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, bb)
      }))
    }
    const tY = new class {
      constructor(bb) {
        this.deps = bb, this.latest = 0, this.PY = null
      }
      apply(bb, ab) {
        return this.load(bb, ab, 0)
      }
      async load(bb, ab, Ub) {
        var Ab;
        const Mb = ++this.latest,
          Tb = this.deps.compiler;
        if (void 0 === ab || null === ab || "object" !== typeof ab || 0 === Object.keys(ab).length || null === Tb) return this.drop(bb), !1;
        if ((null === (Ab = this.PY) || void 0 === Ab ? void 0 : Ab.module) === bb && (0, Va.Td)(this.PY.files, ab)) return !1;
        try {
          const [Ub, Ab] = await Promise.all([Tb(), this.deps.builtIns()]);
          if (Mb !== this.latest) return !1;
          const Eb = await Ub(ab, na, {
            builtIns: Ab
          });
          if (Mb !== this.latest) return !1;
          const Yb = this.call(bb, Eb);
          if (void 0 === Yb) throw new Ja("the compiled animations didn't read against the built-in pack");
          return this.PY = {
              module: bb,
              files: ab
            },
            function(bb) {
              for (let ab = 0; ab + 2 < bb.length; ab += 3) {
                ("error" === bb[ab] ? console.error : console.warn)(`Animation for the texture pack: ${bb[ab+1]}: ${bb[ab+2]}`)
              }
            }(Yb), !0
        } catch (Yb) {
          var Eb;
          if (Mb !== this.latest) return !1;
          this.drop(bb), 0 === Ub && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", Yb);
          const Ab = (null !== (Eb = this.deps.retryAfterMs) && void 0 !== Eb ? Eb : ca)[Ub];
          return void 0 === Ab || Yb instanceof Ja || (0, Oa.l)(bb) || setTimeout((() => {
            Mb === this.latest && this.load(bb, ab, Ub + 1)
          }), Ab), !1
        }
      }
      call(bb, ab) {
        try {
          return bb.NUb(ab)
        } catch (Ub) {
          throw (0, Oa.n)(bb, Ub), Ub
        }
      }
      clear(bb) {
        this.latest++, this.drop(bb)
      }
      drop(bb) {
        const ab = this.PY;
        if (this.PY = null, (null === ab || void 0 === ab ? void 0 : ab.module) === bb && !(0, Oa.l)(bb)) try {
          this.call(bb, null)
        } catch {}
      }
    }({
      compiler: wa.b,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: bb
        } = await QY();
        return bb().whenSet()
      },
      warn: oB
    });
    async function wY(bb, ab) {
      let Ab = !1;
      await sY({
        matchmake: async () => {
          const {
            guestJoinTarget: Mb,
            guestJoinWithPack: Tb
          } = await Ub.e(342).then((() => Ub(42410)));
          return Ab ? Mb(bb, ab, wB()) : (Ab = !0, Tb(bb, ab, (ab => sB(bb, ab)), wB))
        },
        onFailure: bb => {
          (0, iU.showJoinFailure)(bb, sT)
        },
        rejoin: EB,
        invalidateTrafficCode: YB
      })
    }
    async function sY(bb) {
      let {
        matchmake: ab,
        onFailure: Ub,
        rejoin: Mb,
        invalidateTrafficCode: Tb,
        pageReady: Eb,
        signal: Yb
      } = bb;
      const Bb = () => !0 === (null === Yb || void 0 === Yb ? void 0 : Yb.aborted);
      let eb;
      const vb = VA.b.rejoinHold(),
        Lb = (0, DU.U)("wasm", ye);
      let Pb = !1,
        Xb = performance.now();
      try {
        if (!await cT) return {
          kind: "stopped"
        };
        if (Bb()) return {
          kind: "xU"
        };
        qY().catch((() => {}));
        let bb = await ab();
        Xb = performance.now();
        const Ub = () => performance.now() - bb.matchedAt <= bb.freshMs,
          Ab = CY(bb.target).catch((() => {}));
        Ub() && !Bb() && (eb = new IA(bb.target, {
          signal: Yb
        }));
        const Tb = performance.now();
        if (null === await VT) return {
          kind: "stopped"
        };
        var jb;
        if (function(bb) {
            var ab, Ub;
            if (LM.b.markGameEngineConstructed(), kM) return;
            kM = !0;
            const Ab = Math.max(bb, null !== (ab = XM) && void 0 !== ab ? ab : bb);
            (0, PM.i)("ready", Math.max(0, (null !== (Ub = jM) && void 0 !== Ub ? Ub : Ab) - Ab) / 1e3)
          }(Tb), Bb() || (null !== jM && null !== RM ? ((0, Fa.i)("wasm_loaded", jM), (0, Fa.i)("wasm_core_ready", RM)) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps")), await Ab, !Ub() && !Bb()) null === (jb = eb) || void 0 === jb || jb.rematched(), bb = await ab(), Xb = performance.now();
        if (Bb()) return {
          kind: "xU"
        };
        const vb = await async function(bb) {
          var ab, Ub, Ab;
          let {
            signal: Mb,
            rejoin: Tb = null,
            early: Eb,
            pageReady: Yb
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== Mb && void 0 !== Mb && Mb.aborted) throw new DOMException("the join was left", "AbortError");
          const Bb = (eb = VE, vb = performance.now(), null !== eb && vb - eb < kA);
          var eb, vb;
          VE = null;
          const Lb = new AbortController;
          cY({
            controller: Lb,
            game: null !== (ab = null === (Ub = bb.session) || void 0 === Ub ? void 0 : Ub.gameNameWithVariation) && void 0 !== ab ? ab : null
          }), OE = null, null === (Ab = nE) || void 0 === Ab || Ab.abort(), nE = null, bY = !1, aY = null, UY.clear();
          const Pb = () => {
            (0, Da.f)(Lb, (0, Da.e)(Mb))
          };
          null === Mb || void 0 === Mb || Mb.addEventListener("abort", Pb, {
            once: !0
          });
          try {
            var Xb, jb, Rb;
            const ab = await VT;
            if (null === ab || ab.isStopped || GY) throw new Error("no core is running to join a game with");
            if (bb.session && null !== yE) {
              const ab = await VY(yE.join(bb.session.gameNameWithVariation), Lb.signal);
              if ((0, WM.s)("webgpuloss")) {
                const Ub = bb.session.gameNameWithVariation,
                  Ab = yE.couldntRunInJoinedGame();
                (0, HM.e)((bb => bb.noteWasmJoin(Ub, ab, Ab)))
              }
              if (null !== ab) throw new tb.g(ab)
            }
            const [, , , {
              joinRoom: Ub
            }] = await VY(Promise.all([(0, ib.j)(ab), CY(bb), null === Yb || void 0 === Yb ? void 0 : Yb(), qY()]), Lb.signal), Ab = bb.session, Mb = Ab ? {
              ...vB,
              attachSocket: ab => {
                const Ub = yB(ab, bb.endpoint);
                var Mb;
                null !== Ub && (oE = {
                  conn: Ub,
                  info: Ab
                }, null === (Mb = lE) || void 0 === Mb || Mb(Ab.playerDbId));
                return Ub
              }
            } : vB, eb = await Ub(Mb, bb, {
              signal: Lb.signal,
              early: Eb
            }).catch((bb => {
              throw function(bb) {
                if (!(bb instanceof hb.b)) return bb;
                if ("roomError" === bb.stage && null !== aY) return gY(new hb.b(bb.message, bb.stage, bb.code, aY), bb);
                const ab = "closed" === bb.stage && null !== cE ? UY.get(cE.conn) : void 0;
                return void 0 === ab ? bb : gY(new hb.b(bb.message, bb.stage, ab.code), bb)
              }(bb)
            }));
            if (rE !== Lb) throw eb.leave(), new DOMException("the join was left", "AbortError");
            nY(eb), null === (Xb = UE) || void 0 === Xb || Xb.newGame();
            const vb = function(bb) {
              var ab, Ub;
              const {
                session: Ab
              } = bb, Mb = void 0 === Ab ? bb.joinOptions.lobbyName : Ab.lobbyName;
              return {
                endpoint: bb.endpoint,
                game: null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab.gameNameWithVariation) && void 0 !== ab ? ab : bb.roomName,
                lobby: String(null !== Mb && void 0 !== Mb ? Mb : null),
                postCookies: null !== (Ub = bb.postCookies) && void 0 !== Ub ? Ub : null
              }
            }(bb);
            uE.set(eb, vb), pA(vb);
            const Pb = performance.now(),
              kb = {
                conn: eb.conn,
                rejoin: Tb,
                game: null !== (jb = null === (Rb = bb.session) || void 0 === Rb ? void 0 : Rb.gameNameWithVariation) && void 0 !== jb ? jb : "",
                joinedAt: Pb,
                rejoinedAt: Bb ? Pb : null,
                overflow: null
              };
            tE = kb,
              function(bb, ab) {
                pB();
                const Ub = {
                  endpoint: ab,
                  roomId: bb.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new vU({
                    reconnect: (bb, ab, Ab) => async function(bb, ab, Ub, Ab) {
                      const {
                        roomId: Mb,
                        roomToken: Tb
                      } = WB(bb, ab), Eb = KT;
                      if (null === Eb || Eb.isStopped || GY) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: Yb
                      } = await VY(qY(), Ub), Bb = {
                        ...vB,
                        attachSocket: ab => wE !== bb || 0 === bb.heldConn ? (ab.close(), null) : yB(ab, bb.endpoint, !0)
                      };
                      return Yb(Bb, bb.endpoint, Mb, Tb, {
                        signal: Ub,
                        onAttached: Ab
                      })
                    }(Ub, bb, ab, Ab),
                    releaseSeat: bb => {
                      !async function(bb, ab) {
                        const {
                          roomId: Ub,
                          roomToken: Ab
                        } = WB(bb, ab);
                        try {
                          const {
                            leaveHeldSeat: ab
                          } = await qY();
                          await ab(bb.endpoint, Ub, Ab)
                        } catch (Mb) {
                          console.warn(`${eT} the held seat of a game left while it reconnected couldn't be released`, Mb)
                        }
                      }(Ub, bb)
                    },
                    isLive: () => wE === Ub && null !== tE && !GY,
                    Wm: bb => {
                      CE = bb, mB()
                    },
                    onReconnected: bb => {
                      ! function(bb) {
                        const ab = qE;
                        if (null !== ab && ab !== bb) {
                          const Ub = uE.get(ab);
                          void 0 !== Ub && uE.set(bb, Ub), pY === ab && (pY = bb), ab.detach()
                        }
                        nY(bb)
                      }(bb)
                    },
                    onGaveUp: (bb, ab) => {
                      ! function(bb, ab, Ub) {
                        var Ab, Mb;
                        console.warn(`${eT} gave up reconnecting (${Ub.reason}, ${Ub.attempts} attempts)`, Ub.lastError), (0, iU.reportReconnectGaveUp)(Ub, sT);
                        const Tb = null !== (Ab = null === (Mb = tE) || void 0 === Mb ? void 0 : Mb.rejoin) && void 0 !== Ab ? Ab : null;
                        NB(bb, "gaveUp"), bB();
                        const Eb = {
                          code: bb.dropCode,
                          name: null,
                          reason: fT,
                          canReconnect: !ab,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        eB(Eb, ab ? null : Tb, !1, {
                          reasonKey: mT,
                          canPlayAgain: ab
                        })
                      }(Ub, bb, ab)
                    }
                  })
                };
                wE = Ub, null !== sE && sE.conn === bb.conn && Ub.resume.onInitialInfo(sE)
              }(eb, bb.endpoint), performance.mark(RT), (0, Fa.i)("wasm_joined", Pb), setTimeout((() => {
                qE === eb && (0, Fa.f)()
              }), 0), lY(), console.info(`${eT} joined ${bb.roomName} as ${eb.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const yb = OE;
            OE = null, null !== yb && AB(kb, yb.mask, yb.frames);
            const Zb = UY.get(eb.conn);
            return UY.clear(), void 0 !== Zb && (nY(null), BB(eb.conn, Zb.code, Zb.reason)), eb
          } finally {
            var kb;
            null === Mb || void 0 === Mb || Mb.removeEventListener("abort", Pb), rE === Lb && JY(qE, null), (null === (kb = cE) || void 0 === kb ? void 0 : kb.join) === Lb && (cE = null)
          }
        }(bb.target, {
          signal: Yb,
          rejoin: Mb(bb.target),
          early: eb,
          pageReady: Eb
        });
        return Pb = !0, {
          kind: "joined",
          game: vb
        }
      } catch (kb) {
        if (kb instanceof DOMException && "AbortError" === kb.name || Bb()) return {
          kind: "xU"
        };
        if (GY) return {
          kind: "stopped"
        };
        if (bY && (bY = !1, await Tb().catch((bb => {
            console.warn(`${eT} the cached traffic code could not be dropped`, bb)
          }))), null === await VT) return {
          kind: "stopped"
        };
        if (kb instanceof tb.g) return Ub(kb, performance.now() - Xb), {
          kind: "failed",
          error: kb,
          reloading: !1
        };
        if (kb instanceof hb.b && kb.code === Ab.b.wasmClientNotAllowed.code && HY) return GB("this server refused the wasm client to this account", "refused"), {
          kind: "failed",
          error: kb,
          reloading: !0
        };
        const bb = kb instanceof hb.b && kb.code === Ab.b.outdatedVersion.code,
          ab = () => null === qE,
          Mb = await fe({
            site: iU.JOIN_SITE,
            error: kb,
            outdated: bb
          }, (() => {
            Ub(kb, performance.now() - Xb)
          }), ab);
        return {
          kind: "failed",
          error: kb,
          reloading: Mb
        }
      } finally {
        var Rb;
        Pb || Lb.end(), VA.b.releaseHold(vb);
        const bb = null === (Rb = eb) || void 0 === Rb ? void 0 : Rb.release();
        bb && (0, iU.reportUnusedSeat)(bb, sT)
      }
    }

    function gY(bb, ab) {
      return bb.stack = ab.stack, bb
    }

    function CY(bb) {
      return bb.session ? (0, ib.p)(wT, bb.session.gameNameWithVariation) : Promise.resolve()
    }

    function VY(bb, ab) {
      return (0, Da.h)(ab), new Promise(((Ub, Ab) => {
        const Mb = () => {
          Ab((0, Da.e)(ab))
        };
        ab.addEventListener("abort", Mb, {
          once: !0
        }), bb.then((bb => {
          ab.removeEventListener("abort", Mb), Ub(bb)
        }), (bb => {
          ab.removeEventListener("abort", Mb), Ab(bb)
        }))
      }))
    }

    function OY() {
      cY(null)
    }

    function cY(bb) {
      var ab, Ub, Ab;
      (function() {
        const bb = wE;
        null !== bb && NB(bb, "left")
      }(), null === nT || nT.left) || (nT.left = !0, null === (Ab = (0, ib.i)()) || void 0 === Ab || Ab.socketLeft(), (0, Pb.r)({
        websocketUrl: null
      }));
      rE && (0, Da.f)(rE, new DOMException("the join was left", "AbortError")), bB(null !== bb), null === (ab = yE) || void 0 === ab || ab.leave();
      const Mb = qE;
      null !== bb && VA.b.setGame(bb.game), JY(null, null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.controller) && void 0 !== Ub ? Ub : null), null === Mb || void 0 === Mb || Mb.leave(), SY(0), (0, Ra.g)()
    }

    function JY(bb, ab) {
      qE = bb, rE = ab, null === qE && null === rE && VA.b.setGame(void 0)
    }

    function nY(bb) {
      JY(bb, rE)
    }

    function SY(bb) {
      const ab = KT;
      return null !== dT && !GY && null !== ab && !ab.isStopped && (!!dT(hb.i, 0, (0, hb.C)(bb)) && (HE = !0, 0 === bb || pE || Ue(ab, !1, "all"), !0))
    }

    function bB() {
      var bb, ab;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, DU.g)();
      const Ub = null !== (bb = null === (ab = tE) || void 0 === ab ? void 0 : ab.overflow) && void 0 !== bb ? bb : null;
      tE = null, null !== Ub && (0, iU.reportEventOverflow)(Ub, sT)
    }

    function aB() {
      null !== qE || null !== rE ? OY() : ZB()
    }

    function UB(bb, ab) {
      console.warn(`${eT} the event buffer refused records in ${ab} frames (categories ${bb})`), GY || (null !== tE ? AB(tE, bb, ab) : null !== rE && function(bb, ab, Ub) {
        var Ab;
        const Mb = function(bb, ab) {
          return null === bb ? "drop" : bb.activated ? "keep" : 0 !== (ab & oa.r.NetSession) ? "fail" : "drop"
        }((null === (Ab = cE) || void 0 === Ab ? void 0 : Ab.join) === bb ? cE : null, ab);
        "keep" === Mb ? OE = {
          mask: ab,
          frames: Ub
        } : "fail" === Mb && (0, Da.f)(bb, new Error("the join's net session was lost to an event overflow"))
      }(rE, bb, ab))
    }

    function AB(bb, ab, Ub) {
      const Ab = bb.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      Ab.frames += Ub, Ab.acks++, Ab.mask |= ab;
      const Mb = function(bb, ab, Ub) {
        if (0 === (bb & oa.r.NetSession)) return "none";
        const Ab = null !== ab.rejoinedAt && Ub - ab.rejoinedAt < yA;
        return null === ab.rejoin || Ab ? "fail" : "rejoin"
      }(ab, bb, performance.now());
      "none" !== Mb && queueMicrotask((() => {
        if (tE !== bb) return;
        const ab = "rejoin" === Mb && performance.now() - JE >= Fb.e;
        Ab.outcome = ab ? "rejoined" : "failed", eB(function(bb, ab) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: bb,
            automaticallyReconnect: ab,
            requiresRefresh: !1
          }
        }(null !== bb.rejoin, ab), bb.rejoin, ab), OY(), ab && (VE = performance.now())
      }))
    }

    function MB(bb) {
      IY = bb, dY && TB(dY, bb)
    }

    function TB(bb, ab) {
      bb.style.visibility = ab ? "visible" : "hidden"
    }

    function EB(bb) {
      var ab;
      const Ub = bb.roomName,
        Ab = null !== (ab = bb.joinOptions.lobbyName) && void 0 !== ab ? ab : null;
      return () => {
        wY(Ub, Ab)
      }
    }

    function YB() {
      return Ub.e(342).then((() => Ub(42410))).then((bb => {
        let {
          invalidateGuestTrafficCode: ab
        } = bb;
        return ab()
      })).catch((bb => {
        console.warn(`${eT} the cached traffic code could not be dropped`, bb)
      }))
    }

    function BB(bb, ab, Ub) {
      var Mb, Tb;
      let Eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (GY) return;
      if ((null === (Mb = tE) || void 0 === Mb ? void 0 : Mb.conn) !== bb) return void(null !== rE && UY.set(bb, {
        code: ab,
        reason: Ub
      }));
      const {
        rejoin: Yb,
        game: Bb,
        joinedAt: eb
      } = tE;
      bB(), pB();
      const vb = (0, Fb.j)(ab, (0, DA.h)(bb));
      if (console.info(`${eT} the game's connection closed with code ${ab} (${null!==(Tb=vb.name)&&void 0!==Tb?Tb:"unrecognised"})`), ab === Ab.b.gameOrPluginKick.code || Eb || (0, iU.reportDisconnect)(vb, sT, {
          closeReason: Ub,
          sinceJoinedMs: performance.now() - eb,
          game: Bb
        }), vb.requiresRefresh) {
        const bb = "outdatedVersion" === vb.name,
          Ub = new Error(`the game's connection closed with code ${ab}`),
          Ab = () => null === tE && null === rE;
        return void fe({
          site: iU.JOIN_SITE,
          error: Ub,
          outdated: bb
        }, (() => {
          Ab() && eB(vb, null, !1)
        }), Ab)
      }
      const Lb = vb.canReconnect ? Yb : null,
        Pb = null !== Lb && vb.automaticallyReconnect && performance.now() - JE >= Fb.e;
      eB(vb, Lb, Pb)
    }

    function eB(bb, ab, Ub) {
      var Ab;
      let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (FY) return;
      VA.b.unwantedLeave(Ub && null !== ab && 0 === SE.size), null === (Ab = nE) || void 0 === Ab || Ab.abort();
      const Tb = new AbortController;
      nE = Tb;
      const Eb = null === ab ? null : () => {
        Tb.signal.aborted || (Tb.abort(), ab())
      };
      if (Ub && null !== Eb) {
        JE = performance.now();
        const bb = setTimeout(Eb, Fb.d);
        Tb.signal.addEventListener("abort", (() => {
          clearTimeout(bb)
        }))
      }
      const Yb = {
        code: bb.code,
        name: bb.name,
        reason: bb.reason,
        reasonKey: Mb.reasonKey,
        reconnect: Eb,
        reconnecting: Ub,
        requiresRefresh: bb.requiresRefresh,
        canPlayAgain: Mb.canPlayAgain
      };
      if (SE.size > 0)
        for (const eb of [...SE]) try {
          eb(Yb)
        } catch (Bb) {
          console.error(`${eT} an unwanted-leave listener threw`, Bb)
        } else jA((0, LA.j)(bb, null !== Eb, Ub), Tb.signal).then((ab => {
          ab && (null !== Eb ? Eb() : bb.requiresRefresh && (0, wb.n)())
        }))
    }
    const vB = {
      attachSocket: bb => yB(bb),
      onConnection: bb => (AY.add(bb), () => {
        AY.delete(bb)
      }),
      sendRaw: (bb, ab) => {
        const Ub = nT;
        return null !== Ub && Ub.conn === bb && Le(Ub, ab)
      },
      leaveRoom: SY,
      closeSocket: bb => {
        var ab;
        (null === (ab = nT) || void 0 === ab ? void 0 : ab.conn) === bb && ZB()
      },
      flushNet: DB
    };

    function LB(bb) {
      var ab;
      let {
        aux: Ub,
        payload: Ab
      } = bb;
      null === (ab = KT) || void 0 === ab || ab.queueOptions(Ub, Ab)
    }

    function PB(bb, ab) {
      LB(function(bb, ab) {
        return EM = bb ? {
          preventMovement: ab
        } : null, bb ? YM(ab) : {
          aux: Ka.Qb.AdEnd,
          payload: TM
        }
      }(bb, ab))
    }

    function XB(bb) {
      var ab;
      hE = bb, null === (ab = KT) || void 0 === ab || ab.setUiPrefs(bb)
    }

    function jB(bb, ab) {
      wT.setMaster(bb, ab)
    }

    function RB(bb) {
      var ab;
      GE = bb, null === (ab = KT) || void 0 === ab || ab.setEnvPrefs(bb)
    }

    function kB(bb) {
      var ab;
      QE = bb, null === (ab = KT) || void 0 === ab || ab.setLookPrefs(bb)
    }

    function yB(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(bb.url).origin,
        Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (bb.readyState === WebSocket.CLOSING || bb.readyState === WebSocket.CLOSED) return console.warn(`${eT} a closing or closed socket can't be attached`), null;
      const Mb = KT;
      if (!Mb || Mb.isStopped) return console.warn(`${eT} no core is running to attach a socket to`), bb.close(), null;
      if (null === (0, ib.i)()) return console.warn(`${eT} the game has not started to attach a socket to`), bb.close(), null;
      if (iE > Ka.x) return console.warn(`${eT} this core has attached all the sockets it can; reload to play on`), bb.close(), null;
      if (HE && !pE && (Ue(Mb, !1, "all"), Mb.isStopped || GY)) return bb.close(), null;
      ZB();
      const Tb = iE++;
      if (!dB(Mb, "open", Tb, Ab ? Ka.Ob.Resume : 0)) return bb.close(), null;
      Ab || ja.e.reset(), cE = null === rE ? null : {
        join: rE,
        conn: Tb,
        activated: !1
      }, bb.binaryType = "arraybuffer";
      const Eb = new LU.c((() => {
          ! function(bb, ab) {
            if (nT !== ab || bb.isStopped || null === iB(ab, xT)) return;
            ab.detach(), nT = null, xB(bb, ab, xT, "", !0), ab.ws.close()
          }(Mb, Yb)
        })),
        Yb = {
          ws: bb,
          conn: Tb,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: Ab,
          token: null,
          detach: () => {
            Eb.dispose(), bb.removeEventListener("message", Bb), bb.removeEventListener("open", eb), bb.removeEventListener("close", vb)
          }
        },
        Bb = bb => {
          if (bb.data instanceof ArrayBuffer) {
            var ab;
            const Ub = new Uint8Array(bb.data);
            Eb.heard(), Yb.token = null !== (ab = (0, PU.c)(Ub)) && void 0 !== ab ? ab : Yb.token,
              function(bb, ab, Ub) {
                De(bb, (() => {
                  bb.rings.net.writeFrame(ab, Ub) || bb.crash(bU.n, `a socket frame of ${Ub.byteLength} bytes did not fit the net-in ring`)
                }));
                const Ab = bb.rings.net.cursor >= DT;
                (Ab || bb.netWrittenSinceFrame >= ZT || document.hidden && performance.now() - fE >= WT) && Ue(bb, !1, "budget")
              }(Mb, Tb, Ub)
          }
        },
        eb = () => {
          Ab || (0, Fa.i)("wasm_socket_open", performance.now());
          for (const ab of Yb.pending.splice(0)) bb.send(ab);
          Yb.pendingBytes = 0
        },
        vb = bb => {
          if (nT === Yb && Mb.rings.net.cursor > 0 && Ue(Mb, !1, "all"), nT === Yb) {
            if (Yb.detach(), nT = null, xB(Mb, Yb, bb.code, bb.reason) || zB(Mb, Yb)) return;
            dB(Mb, "close", Tb), fB(Tb, Yb.left), BB(Tb, bb.code, bb.reason)
          }
        };
      return bb.addEventListener("message", Bb), bb.addEventListener("open", eb), bb.addEventListener("close", vb), nT = Yb, null === (ab = (0, ib.i)()) || void 0 === ab || ab.socketAttached(Tb), (0, Pb.r)({
        websocketUrl: Ub
      }), Tb
    }

    function ZB() {
      const bb = nT;
      if (!bb) return;
      const ab = KT,
        Ub = bb.resume;
      Ub && (DB(), nT !== bb) || (nT = null, bb.detach(), bb.ws.close(), null !== ab && (zB(ab, bb) || Ub && xB(ab, bb, iT)) || (null !== ab && dB(ab, "close", bb.conn), fB(bb.conn, bb.left)))
    }

    function DB() {
      const bb = KT;
      null !== bb && !bb.isStopped && !GY && !pE && bb.rings.net.cursor > 0 && Ue(bb, !1, "all")
    }

    function zB(bb, ab) {
      var Ub;
      if (!ab.resume) return !1;
      const Ab = wE;
      return null !== Ab && null !== ab.token && "" !== ab.token && (Ab.pendingHold = {
        conn: ab.conn,
        token: `${Ab.roomId}:${ab.token}`
      }), dB(bb, "close", ab.conn), null === (Ub = (0, ib.i)()) || void 0 === Ub || Ub.socketDetached(ab.conn), !0
    }

    function xB(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const Tb = iB(ab, Ub);
      if (null === Tb) return !1;
      const {
        PY: Eb,
        token: Yb,
        game: Bb,
        joinedAt: eb
      } = Tb;
      if (!dB(bb, "close", ab.conn, Ka.B.Held)) return !0;
      console.warn(`${eT} the game's connection ${Mb?"went silent":`dropped with code ${Ub}`}, holding it`);
      const vb = {
        closeReason: Ab,
        sinceJoinedMs: performance.now() - eb,
        game: Bb
      };
      return (0, iU.reportDisconnect)((0, Fb.j)(Ub), sT, vb, Mb ? "silent" : void 0), Eb.heldConn = ab.conn, Eb.dropCode = Ub, Eb.pendingHold = {
        conn: ab.conn,
        token: `${Eb.roomId}:${Yb}`
      }, pE || Ue(bb, !1, "all"), !0
    }

    function iB(bb, ab) {
      const Ub = wE,
        Mb = tE,
        Tb = bb.token;
      return null === Ub || null === Mb || GY || bb.left || Mb.conn !== bb.conn || null === Tb || "" === Tb ? null : (0, Ab.f)(ab) && Ub.resume.canHoldSeat() ? {
        PY: Ub,
        token: Tb,
        game: Mb.game,
        joinedAt: Mb.joinedAt
      } : null
    }

    function fB(bb, ab) {
      var Ub;
      null === (Ub = (0, ib.i)()) || void 0 === Ub || Ub.closeGame(bb), (0, MM.b)().close(bb), ab || (0, Pb.r)({
        websocketUrl: null
      })
    }

    function mB() {
      const bb = CE;
      if (null === bb) return;
      const ab = (0, ib.i)();
      GY || null === ab || ab.Wm(bb) ? CE = null : performance.now() - IE.pause >= NT && (IE.pause = performance.now(), console.warn(`${eT} the cmd ring had no room for SetPaused(${bb}): written before the next frame`))
    }

    function pB() {
      const bb = wE;
      wE = null, null === bb || void 0 === bb || bb.resume.dispose()
    }

    function NB(bb, ab) {
      var Ub, Ab;
      const {
        heldConn: Mb
      } = bb, Tb = bb.resume.resumingConn;
      bb.heldConn = 0, bb.pendingHold = null, wE === bb && (wE = null), "left" === ab ? bb.resume.leave() : bb.resume.dispose(), 0 === gE || (null === (Ub = nT) || void 0 === Ub ? void 0 : Ub.conn) !== gE || "left" === ab && (null === (Ab = qE) || void 0 === Ab ? void 0 : Ab.conn) === gE || IB(gE), "gaveUp" === ab && 0 !== Tb && IB(Tb), 0 !== Mb && "refused" !== ab && (console.info(`${eT} the game held through its drop ${"left"===ab?"was left":"is given up"}`), null === KT || KT.isStopped || dB(KT, "close", Mb), fB(Mb, !1))
    }

    function WB(bb, ab) {
      const Ub = ab.indexOf(":");
      return {
        roomId: Ub < 0 ? bb.roomId : ab.slice(0, Ub),
        roomToken: ab.slice(Ub + 1)
      }
    }

    function HB(bb) {
      var ab;
      sE = bb, bb.conn === gE && (gE = 0);
      const Ub = wE;
      null !== Ub && (null === (ab = tE) || void 0 === ab ? void 0 : ab.conn) === bb.conn && Ub.resume.onInitialInfo(bb)
    }

    function IB(bb) {
      var ab;
      const Ub = nT;
      (null === Ub || void 0 === Ub ? void 0 : Ub.conn) === bb && (Ub.left = !0, null === (ab = (0, ib.i)()) || void 0 === ab || ab.socketLeft(), (0, Pb.r)({
        websocketUrl: null
      }), SY(bb) ? setTimeout((() => {
        nT === Ub && ZB()
      }), hb.f) : ZB())
    }

    function dB(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mb = !1;
      return De(bb, (() => {
        const {
          net: Tb
        } = bb.rings;
        Mb = "open" === ab ? Tb.writeOpen(Ub, Ab) : Tb.writeClose(Ub, Ab), Mb || bb.crash(bU.n, `a socket ${ab} did not fit the net-in ring`)
      })), Mb
    }

    function FB(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (hB()) {
        const Ab = "browser" === bb && (0, AM.W)() ? "blockedAfterLoss" : "unsupported";
        return (0, iU.reportUnsupportedFallback)(bb, Ab, ab, Ub), void GB(`the wasm client can't run here (${ab}; ${Ab})`, Ab)
      }(0, iU.showUnsupported)(bb, "unsupported", ab, Ub)
    }

    function hB() {
      return HY && "wasm" !== (0, La.e)(window.location.search)
    }

    function GB(bb, ab) {
      console.warn(`${eT} ${bb}: reloading on the JS client`), null !== ab && (0, La.n)(ab), (0, La.k)(null === ab ? "reloadOntoJs" : "decline");
      const Ub = () => {
        (0, wb.k)(La.q)
      };
      (0, iU.flushCrashReports)(wb.e).then(Ub, Ub)
    }

    function QB(bb, ab, Ub, Ab) {
      return YY(bb, ab, Ub, Ab)
    }

    function qB() {
      null === vY || null === KT || KT.isStopped || GY || null !== XE || null === dT || (XE = vY(dT, oB, lB().follow))
    }

    function uB() {
      var bb, ab, Ub;
      return null !== (bb = null === (ab = lT) || void 0 === ab || null === (Ub = ab.textures) || void 0 === Ub ? void 0 : Ub.files()) && void 0 !== bb ? bb : null
    }

    function rB(bb) {
      Ub.e(260).then((() => Ub(39857))).then((ab => {
        let {
          setIconFileOverrides: Ub
        } = ab;
        Ub(bb)
      }), (bb => {
        console.warn(`${eT} the item icons couldn't take the texture pack's files`, bb)
      }))
    }

    function KB(bb) {
      lB().follow((ab => {
        null !== ab && Promise.all([Promise.all([Ub.e(193), Ub.e(45)]).then((() => Ub(42446))), (0, AM.R)()]).then((bb => {
          let [{
            followPagePackFiles: Ub
          }, Ab] = bb;
          const Mb = null === Ab || (0, Sa.p)(Ab) ? "webgl" : Ab.backend;
          Ub(ab, CA.g, Mb, (bb => {
            CA.g.setPageFiles(bb)
          }), oB)
        }), (ab => {
          console.warn(`${eT} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, ab), bb()
        }))
      }))
    }

    function oB(bb, ab) {
      console.warn(`${eT} ${bb}`, ab)
    }

    function lB() {
      return oT ??= new DM({
        load: bb => Promise.all([Ub.e(193), Ub.e(51)]).then((() => Ub(42454))).then((ab => {
          let {
            startPageTexturePackFeed: Ub
          } = ab;
          return Ub(oB, bb)
        })),
        store: xU.c,
        GX: bb => {
          VT.then((() => {
            (0, iU.reportTexturePackFeedLoadFailure)(bb, sT)
          }))
        }
      }), oT
    }
    const tB = bb => lB().follow(bb);

    function wB() {
      return lB().loaded()
    }
    const sB = function(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          Mb = 0;
        return async function(Tb, Eb) {
          let Yb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const Bb = ++Mb,
            eb = Ab() + ab,
            vb = await
          function(bb, ab) {
            let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((Ab => {
              const Mb = setTimeout((() => {
                Ab(null), bb.then((bb => {
                  null !== bb && (bb.joinedWithout(), Ub(bb))
                }))
              }), ab);
              bb.then((bb => {
                clearTimeout(Mb), Ab(bb)
              }))
            }))
          }(bb(Tb), ab, (bb => {
            Bb === Mb && Yb() && Eb(bb, Ab() + ab).catch((bb => {
              Ub("the texture pack step after the join failed", bb)
            }))
          }));
          return null === vb ? null : Eb(vb, eb)
        }
      }((bb => (0, Ua.l)(bb) ? lB().request() : lB().forJoin()), ZM.b, oB),
      gB = function(bb, ab) {
        let Ub = !1;
        return {
          setGamePackConfirm: bb => {
            Ub = null !== bb, ab(bb)
          },
          packStep: (ab, Ab, Mb) => bb(ab, Ab, (() => Ub && Mb()))
        }
      }(sB, (bb => {
        lB().setGamePackConfirm(bb)
      }));

    function CB(bb) {
      gB.setGamePackConfirm(bb)
    }

    function VB() {
      if (GY || null !== RY || null === LY || null === jY) return;
      const {
        backend: bb,
        canvas: ab,
        fallbackReason: Ub,
        adapterVendor: Ab
      } = jY, Mb = LY;
      LY = null;
      try {
        RY = Mb({
          backend: bb,
          canvas: ab,
          fallbackReason: Ub,
          adapterVendor: Ab,
          joinedGame: () => GY ? null : qE,
          inGame: cB,
          shaderPackReach: () => {
            var bb, ab;
            return null !== (bb = null === (ab = yE) || void 0 === ab ? void 0 : ab.reachInJoinedGame()) && void 0 !== bb ? bb : null
          },
          msaa: () => XY > 1,
          writeCmd: (bb, ab, Ub) => null !== dT && dT(bb, ab, Ub),
          takeFailedMeshJobs: () => {
            var bb, ab;
            return null !== (bb = null === (ab = UE) || void 0 === ab ? void 0 : ab.takeFailedMeshJobs()) && void 0 !== bb ? bb : 0
          }
        })
      } catch (Tb) {
        console.error(`${eT} the frame telemetry didn't start`, Tb)
      }
    }

    function OB(bb, ab) {
      try {
        var Ub, Ab, Mb;
        const Tb = MY && null !== (Ub = null === (Ab = KT) || void 0 === Ab || null === (Mb = Ab.lastHeader) || void 0 === Mb ? void 0 : Mb.renderPending) && void 0 !== Ub ? Ub : 0;
        (0, gU.h)(ab, bb, cB() && !(null !== EM), Tb)
      } catch (Tb) {
        (0, gU.v)(), console.error(`${eT} the quality steps stopped`, Tb)
      }
    }

    function cB() {
      return null !== qE && pY === qE && !GY
    }

    function JB(bb) {
      const ab = RY;
      RY = null;
      try {
        null === ab || void 0 === ab || ab.stop()
      } catch {}
      console.error(`${eT} the frame telemetry threw: it stops`, bb)
    }

    function nB(bb) {
      var ab, Ub, Ab, Mb;
      if ((0, MM.b)().fire(bb), "message" === bb.type) {
        if (NE++, bb.fE === Ka.zc.ERROR && null !== rE) {
          var Tb;
          const {
            text: ab,
            dropsCache: Ub
          } = (0, Fb.r)((new TextDecoder).decode(bb.payload));
          bY ||= Ub, (null === (Tb = cE) || void 0 === Tb ? void 0 : Tb.conn) === bb.conn && (aY = ab)
        } else if (bb.fE === oa.Tb.ResumeComplete) {
          var Eb;
          null === (Eb = wE) || void 0 === Eb || Eb.resume.onResumeComplete(bb.conn)
        }
        return
      }
      bb.phase === Ka.C.Left ? WE = bb.conn : bb.phase === Ka.C.Activated && (null === (ab = cE) || void 0 === ab ? void 0 : ab.conn) === bb.conn ? cE.activated = !0 : bb.phase === Ka.C.Resumed ? function(bb) {
        var ab, Ub;
        gE = bb;
        const Ab = wE;
        if (null === Ab || 0 === Ab.heldConn || (null === (ab = nT) || void 0 === ab ? void 0 : ab.conn) !== bb || !nT.resume || null === tE) return;
        console.info(`${eT} the game resumed on conn ${bb}, waiting for its InitialInfo`);
        const Mb = Ab.heldConn;
        Ab.heldConn = 0, nT.resume = !1, tE.conn = bb, (null === (Ub = oE) || void 0 === Ub ? void 0 : Ub.conn) === Mb && (oE = {
          conn: bb,
          info: oE.info
        }), ja.e.apply({
          shopInfo: null,
          _shopVersion: Aa.b
        })
      }(bb.conn) : bb.phase === Ka.C.Held ? function(bb) {
        var ab;
        const Ub = wE,
          Ab = null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.pendingHold) && void 0 !== ab ? ab : null;
        if (null !== Ub && null !== Ab && Ab.conn === bb) return Ub.pendingHold = null, Ub.heldConn = bb, gE = 0, console.warn(`${eT} the core holds the game, reconnecting`), void Ub.resume.onDropped(Ab.token);
        if (bb === gE) {
          gE = 0;
          const ab = KT;
          null === ab || ab.isStopped || (console.info(`${eT} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), dB(ab, "close", bb))
        }
      }(bb.conn) : bb.phase === Ka.C.Closed && (null === (Ub = wE) || void 0 === Ub || null === (Ab = Ub.pendingHold) || void 0 === Ab ? void 0 : Ab.conn) === bb.conn && (wE.heldConn === bb.conn ? function(bb) {
        const ab = bb.heldConn,
          Ub = bb.dropCode;
        NB(bb, "refused"), console.info(`${eT} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          fB(ab, !1), BB(ab, Ub, "", !0)
        }))
      }(wE) : wE.pendingHold = null);
      const Yb = Object.keys(Ka.C).find((ab => Ka.C[ab] === bb.phase)),
        Bb = 0 === bb.code ? "" : ` (code ${bb.code})`;
      console.info(`${eT} conn ${bb.conn}: ${null!==Yb&&void 0!==Yb?Yb:bb.phase}${Bb}, ${NE} raw messages so far`), (null === (Mb = qE) || void 0 === Mb ? void 0 : Mb.conn) !== bb.conn || bb.phase !== Ka.C.Left && bb.phase !== Ka.C.Closed || nY(null), KE !== bb.conn || bb.phase !== Ka.C.Left && bb.phase !== Ka.C.Closed || (KE = null, null === qE && null === rE && VA.b.setGame(void 0));
      for (const vb of [...AY]) try {
        vb(bb.conn, bb.phase, bb.code)
      } catch (eb) {
        (0, la.o)(eb, `${eT} a connection listener threw`)
      }
    }

    function SB() {
      (0, AM.o)(), queueMicrotask((() => {
        try {
          Pe()
        } catch (bb) {
          console.warn(`${eT} stopping before the reload threw`, bb)
        }(0, iU.flushCrashReports)(wb.e).then(wb.n, wb.n)
      }))
    }

    function be() {
      const bb = KT;
      null === bb || bb.isStopped || null === nT || pE || !bb.hasPendingCommands() || Ue(bb, !1, "budget")
    }

    function ae(bb) {
      var ab;
      const Ub = qE;
      bb.persisted || null === Ub || (null === (ab = nT) || void 0 === ab ? void 0 : ab.conn) !== Ub.conn || nT.left || Ub.leave()
    }

    function Ue(bb, ab, Ab) {
      let Mb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Tb = pE;
      pE = !0;
      try {
        return function(bb, ab, Ab, Mb) {
          var Tb, Eb, Yb, Bb;
          if (GY) return !1;
          if (De(bb, Me), GY || bb.isStopped) return !1;
          ee() && zE("modelsIn");
          mB(), fE = performance.now(), WE = null, HE = !1, (0, xb.O)(), null === (Tb = BE) || void 0 === Tb || Tb.beforeFrame(), EA(fE, bb), (0, xb.H)(fE, Te), mE = !0;
          const eb = ab && Be();
          let vb;
          try {
            vb = bb.frame(fE, eb, Ab)
          } finally {
            mE = !1
          }
          if (!vb) return !1;
          PY.observe(null !== (Eb = null === (Yb = bb.lastHeader) || void 0 === Yb ? void 0 : Yb.chunksCancelled) && void 0 !== Eb ? Eb : 0);
          const Lb = bb.lastFrameKind,
            Pb = (0, Na.d)(Lb);
          (function(bb) {
            null !== QM && QM.afterFrame(performance.now(), bb)
          })(Pb), null === (Bb = kY) || void 0 === Bb || Bb.frame(bb, fE, Lb), ab && (NY = Pb);
          Pb && (0, fa.b)(fE);
          if (null !== RY) try {
            RY.frameRan(bb, fE, performance.now(), Lb)
          } catch (jb) {
            JB(jb)
          }
          "drawn" === Lb && Ye() && function() {
            for (const bb of [...aM]) bb()
          }();
          bb.forEachNetOut(ve);
          const Xb = nT;
          null !== WE && (null === Xb || void 0 === Xb ? void 0 : Xb.conn) === WE && Le(Xb, hb.m);
          (function(bb) {
            var ab;
            if (DY) return;
            null === iY && Be() && (iY = performance.now());
            if (null === rE && null === qE) return;
            null === iY || fY || (fY = !0, (0, Fa.i)("wasm_startup_loaded", iY));
            let Ub = 0;
            null !== qE ? Ub = -1 : !0 === (null === (ab = cE) || void 0 === ab ? void 0 : ab.activated) && (Ub = ~oa.M.TerrainDrawn);
            const Ab = bb.headerWord(oa.F.LoadSteps) & Ub & ~xY;
            if (0 === Ab) return;
            xY |= Ab;
            const Mb = performance.now();
            for (const [Tb, Eb] of Object.entries(Ee)) 0 !== (Ab & oa.M[Tb]) && (0, Fa.i)(Eb, Mb)
          })(bb), ab && function(bb) {
            var ab, Ab, Mb;
            if (null === qE || !Be()) return;
            null === mY || pY === qE && !mY.frame(fE, 0 !== (bb.headerWord(oa.F.LoadSteps) & oa.M.TerrainDrawn)) || (mY = null);
            const Tb = bb.lastHeader,
              Eb = !MY || 0 === (null === Tb || void 0 === Tb ? void 0 : Tb.renderPending);
            !zY && Eb && (zY = !0, performance.mark(yT));
            if (pY === qE) return;
            const Yb = null !== (ab = null === Tb || void 0 === Tb ? void 0 : Tb.firstView) && void 0 !== ab ? ab : Ka.W.NotYet;
            if (MY && Yb === Ka.W.NotYet) return;
            if (DY && (!0 !== (null === (Ab = (0, ib.i)()) || void 0 === Ab ? void 0 : Ab.isSessionLive) || !Eb)) return;
            pY = qE;
            const Bb = qE;
            if (setTimeout((() => {
                qE === Bb && (0, Fa.g)()
              }), 0), null === (Mb = yE) || void 0 === Mb || Mb.playable(), function() {
                clearTimeout(JT), JT = setTimeout((() => {
                  cB() && ie((bb => {
                    let {
                      prefetchWorldgenWorker: ab
                    } = bb;
                    ab()
                  }))
                }), IT)
              }(), DY) return;
            DY = !0, performance.mark(kT), (0, WM.s)("render") && Promise.all([Ub.e(74), Ub.e(47)]).then((() => Ub(4363))).then((bb => {
              let {
                renderDebugPlayable: ab
              } = bb;
              ab()
            }), (bb => {
              console.warn("The render debug topic didn't load", bb)
            }));
            const eb = Math.round(performance.now());
            if (MY && Yb !== Ka.W.Drawn) {
              const bb = Yb === Ka.W.HeldBackstop ? "held_draws" : "long";
              if (console.warn(`${eT} playable at ${eb} ms on the first view's ${bb} backstop: it wasn't drawn whole in time`), (0, Fa.i)("wasm_view_backstop", eb, bb), "long" === bb) {
                var vb, Lb;
                const bb = null !== (vb = null === (Lb = tE) || void 0 === Lb ? void 0 : Lb.game) && void 0 !== vb ? vb : "";
                mY = new fU.e((() => {
                  (0, iU.reportFirstViewNoTerrain)(bb, sT)
                }))
              }
            } else console.info(`${eT} playable at ${eb} ms${MY?"":" (no renderer)"}`);
            setTimeout(eY, 0), (0, ka.f)().catch((bb => {
              console.error(`${eT} item sprites didn't load, so item particles show the missing texture`, bb)
            })), KA.e.warm()
          }(bb);
          (0, bU.E)(bb, {
            worldgen: bE,
            mesh: UE
          }),
          function(bb) {
            bb.forEachEvent(BA);
            for (const ab of YA) try {
              (0, aA.e)(ab)
            } catch (jb) {
              if ((0, la.g)(jb)) {
                bb.crashOn(bU.h, jb);
                break
              }
              console.error(`${AA} an input action listener threw`, jb)
            }
            YA.length = 0
          }(bb), Mb && (0, pa.d)();
          return !bb.isStopped
        }(bb, ab, "all" === Ab || bb.rings.net.cursor >= DT || bb.netKeptFrames >= zT, Mb)
      } finally {
        pE = Tb
      }
    }

    function Ae(bb) {
      console.error(`${eT} a frame-start listener threw`, bb)
    }

    function Me() {
      var bb, ab, Ub, Ab;
      null === (bb = vE) || void 0 === bb || bb.drain(dT, FT), null === (ab = jE) || void 0 === ab || ab.drain(dT), null === (Ub = RE) || void 0 === Ub || Ub.drain(performance.now()), BY(dT), null === (Ab = XE) || void 0 === Ab || Ab.drain()
    }

    function Te(bb) {
      console.error(`${eT} a before-frame listener threw`, bb)
    }
    const Ee = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function Ye() {
      return MY && Be()
    }

    function Be() {
      return kE && ee()
    }

    function ee() {
      return null === vE || vE.startupDone
    }

    function ve(bb, ab) {
      const Ub = nT;
      (null === Ub || void 0 === Ub ? void 0 : Ub.conn) === bb ? Le(Ub, ab) : FE++
    }

    function Le(bb, ab) {
      const {
        ws: Ub
      } = bb;
      return Ub.readyState === WebSocket.OPEN ? (Ub.send(ab), !0) : Ub.readyState === WebSocket.CONNECTING && bb.pendingBytes + ab.byteLength <= pT ? (bb.pending.push(ab.slice()), bb.pendingBytes += ab.byteLength, !0) : (FE++, !1)
    }

    function Pe() {
      var bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb;
      GY = !0, WY.stop(), (0, IM.b)(), QM = null, pB(), (0, xb.K)().unlockPointer(), (0, xb.J)(null), null === (bb = eE) || void 0 === bb || bb(), eE = null, null === (ab = (0, ib.r)()) || void 0 === ab || ab.followCursorAim(null), (0, pa.D)(), (0, ib.f)(), wT.stop(), null === (Ub = yY) || void 0 === Ub || Ub(), yY = null, null === (Ab = ZY) || void 0 === Ab || Ab(), ZY = null, null === (Mb = RY) || void 0 === Mb || Mb.stop(), RY = null, (0, pU.i)(null), null === (Tb = ST) || void 0 === Tb || Tb(), ST = null, null === (Eb = bE) || void 0 === Eb || Eb.stop(), bE = null, null === (Yb = UE) || void 0 === Yb || Yb.stop(), UE = null, null !== (Bb = lT) && void 0 !== Bb && null !== (eb = Bb.textures) && void 0 !== eb && eb.assets && rB(null), null === (vb = lT) || void 0 === vb || vb.stop(), lT = null, tT = null;
      const yb = AE;
      AE = null, yb && (yb.stop(), Ze(yb)), null === (Lb = jE) || void 0 === Lb || Lb.dispose(), jE = null, null === (Pb = RE) || void 0 === Pb || Pb.dispose(), RE = null, vE = null, null === (Xb = PE) || void 0 === Xb || Xb(), PE = null, null === (jb = YE) || void 0 === jb || jb(), YE = null, null === (Rb = BE) || void 0 === Rb || Rb.stop(), BE = null, OY(), VA.b.release(), ZB();
      const Zb = XE;
      XE = null;
      try {
        null === Zb || void 0 === Zb || Zb.dispose()
      } catch (Db) {
        console.warn(`${eT} the sky's images didn't release`, Db)
      }(0, oA.h)(null), null === (kb = uT) || void 0 === kb || kb.pagePreviews().endSession(null === (0, Ta.l)())
    }

    function Xe(bb, ab) {
      var Ub, Ab;
      const Mb = null !== (Ub = null === (Ab = AE) || void 0 === Ab ? void 0 : Ab.details()) && void 0 !== Ub ? Ub : {},
        Tb = bb.site === LT || bb.site === PT || bb.site === iU.RENDER_RELOAD_SITE || bb.site === XT ? bb.error instanceof WebAssembly.RuntimeError || bb.error instanceof Oa.d : !(0, Sa.s)(bb.error) && (0, bU.z)(bb);
      Tb && bb.error instanceof Error && (0, Ta.I)(bb.error);
      const Eb = Tb || bb.site === bU.o ? (0, iU.readTrap)(bb.error) : null,
        Yb = null !== Eb && (0, ta.e)(Eb.kind, Eb.refusedBytes) ? Eb.refusedBytes : 0,
        Bb = null === ME ? (0, qA.m)(function() {
          try {
            return (0, Ta.q)().buffer.byteLength
          } catch {
            return 0
          }
        }(), Yb, null) : ME.ceilingMayRefuse(Yb),
        eb = Yb > 0 && !Bb && hB();
      var vb;
      if (eb && ((0, La.n)("oom"), (0, La.k)("decline"), hY = !0), Pe(), (0, AM.c)()) return console.warn(`${eT} the session stopped at ${bb.site} as the page reloads`, bb.error), void((0, Sa.s)(bb.error) || (null === (vb = bb.header) || void 0 === vb ? void 0 : vb.lastError) === Ka.H.CoreBusy || (0, iU.reportStoppedCore)(bb, ab, Eb, {
        memoryDetails: Mb,
        declined: eb
      }));
      (0, iU.showCrash)(bb, ab, Eb, {
        memoryDetails: Mb,
        declined: eb
      })
    }

    function je(bb) {
      const {
        input: ab,
        net: Ub,
        worker: Ab
      } = bb.rings, Mb = bb.optionsDropped, Tb = ab.dropped + Mb + Ub.dropped + Ab.dropped + FE;
      Tb !== dE && function(bb, ab) {
        const Ub = performance.now();
        return !(Ub - IE[bb] < NT) && (IE[bb] = Ub, console.warn(`${eT} ${ab}`), !0)
      }("dropped", `${Tb} records dropped so far (input ${ab.dropped}, options ${Mb}, net ${Ub.dropped}, worker ${Ab.dropped}, net-out ${FE})`) && (dE = Tb)
    }

    function Re() {
      var bb, ab;
      const Ub = (0, ZU.d)();
      if (null === Ub) return null;
      const Ab = (0, zU.h)(Ub);
      return {
        ...Ab,
        horizontal: Math.min(Ab.horizontal, null !== (bb = null === (ab = AE) || void 0 === ab ? void 0 : ab.shedDistanceInUse()) && void 0 !== bb ? bb : 1 / 0)
      }
    }

    function ke(bb) {
      var ab, Ub;
      return {
        samples: MY ? XY : null,
        sunShadows: bb,
        renderDistance: null !== (ab = null === (Ub = Re()) || void 0 === Ub ? void 0 : Ub.horizontal) && void 0 !== ab ? ab : null
      }
    }

    function ye() {
      var bb, ab, Ub;
      const Ab = Re();
      return {
        ...null === (bb = AE) || void 0 === bb ? void 0 : bb.pageKillSnapshot(),
        renderDistance: null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab.horizontal) && void 0 !== ab ? ab : null,
        renderDistanceVertical: null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.vertical) && void 0 !== Ub ? Ub : null,
        chunkCap: TE,
        budgetBasis: EE,
        renderBackend: (0, AM.G)()
      }
    }

    function Ze(bb) {
      console.info(`${eT} wasm memory at the session's end`, bb.details())
    }

    function De(bb, ab) {
      if (!bb.isStopped) try {
        ab()
      } catch (Ub) {
        bb.crash(bU.q, Ub)
      }
    }

    function ze() {
      return aE ??= Ub.e(68).then((() => Ub(42463))).catch((bb => {
        throw aE = null, bb
      })), aE
    }
    async function xe() {
      const {
        createWorldgenWorker: bb,
        worldgenWorkerReady: ab
      } = await ze();
      return await ab(), bb
    }

    function ie(bb) {
      var ab;
      null === (ab = aE) || void 0 === ab || ab.then(bb, (() => {}))
    }

    function fe(bb, ab, Ub) {
      return async function(bb, ab, Ub) {
        let {
          stop: Ab,
          stillWanted: Mb
        } = Ub;
        const Tb = await (0, ZA.l)(bb, {
          stillWanted: Mb,
          beforeReload: async () => {
            Ab(), await (0, iU.flushCrashReports)(wb.e)
          },
          reload: wb.n
        });
        return Tb || ab(), Tb
      }(bb, ab, {
        stop: Pe,
        stillWanted: Ub
      })
    }
    let me = !1;

    function pe() {
      return me = !0, async function(bb, ab, Ab) {
        const {
          gamePackSource: Mb
        } = await Ub.e(343).then((() => Ub(42416)));
        await gB.packStep(bb, ((Ub, Ab) => Ub.packForGame(bb, Mb(ab), Ab)), Ab)
      }(...arguments)
    }

    function Ne(bb) {
      ! function(bb, ab) {
        bb((bb => {
          null === bb || void 0 === bb || bb.subscribe((bb => {
            let {
              pack: Ub,
              gameSource: Ab
            } = bb;
            ab(null === Ab || null === Ub ? null : {
              pack: Ub,
              source: "" === Ab ? null : Ab
            })
          }))
        }))
      }(tB, bb)
    }
    let We = !1,
      He = null,
      Ie = !1,
      de = !1;

    function Fe() {
      var bb;
      We || (We = !0, oY("play", lb), (0, Pb.n)(new se), Yb.gameBridge.attach(db), re().catch((() => {})), (0, ib.u)((bb => {
        ba(bb.setTextHost)
      })), bb = Qe, SE.add(bb), function(bb) {
        for (const ab of ZE) bb(ab);
        DE.add(bb)
      }((bb => {
        Ge(he[bb])
      })))
    }
    const he = {
      booted: Tb.k.INITIALISE_NOA,
      texturesIn: Tb.k.REGISTRATION,
      modelsIn: Tb.k.SETUP_LIFEFORMS
    };

    function Ge(bb) {
      Bb.m.IR("matchmakeAndPlayStepCompleted", {
        step: bb,
        totalSubSteps: 1
      })
    }

    function Qe(bb) {
      if (!Ie) return;
      const {
        gameNameWithVariation: ab,
        lobbyName: Ub
      } = (0, Pb.e)();
      if (bb.code === Ab.b.serverUpdating.code) return (new se).leaveLive(), void ue(ab, Ub);
      Bb.m.IR("unwantedLeftGame", {
        reason: qe(bb),
        requiresRefresh: bb.requiresRefresh,
        canReconnect: null !== bb.reconnect,
        automaticallyReconnect: bb.reconnecting,
        canPlayAgain: bb.canPlayAgain,
        gameNameWithVariation: ab,
        lobbyName: Ub
      }), (new se).leaveLive()
    }

    function qe(bb) {
      return null !== bb.reasonKey ? {
        translationKey: bb.reasonKey
      } : "gameOrPluginKick" === bb.name ? bb.reason : `You have disconnected from the server.\n${bb.reason}`
    }

    function ue(bb, ab) {
      var Ab;
      Ab = (0, eb.y)(bb, ab), Promise.resolve().then((() => Ub(1433))).then((bb => {
        let {
          navigatePreserveSearch: ab
        } = bb;
        ab(Ab)
      })).catch((bb => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", bb), (0, wb.g)(Ab)
      }))
    }

    function re() {
      return He ??= Promise.all([Ub.e(69), Ub.e(72), Ub.e(71), Ub.e(70), Ub.e(83), Ub.e(259), Ub.e(199), Ub.e(216), Ub.e(237), Ub.e(212), Ub.e(46)]).then((() => Ub(39798))).then((bb => {
        try {
          bb.attachPlayGameSources()
        } catch (ab) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", ab),
            function(bb) {
              VT.then((ab => {
                null === ab || ab.isStopped || GY ? console.warn(`${eT} the play sources threw as they attached, after the client stopped`, bb) : Xe({
                  site: XT,
                  error: bb,
                  header: null
                }, sT)
              }))
            }(ab), ab
        }
      }), (bb => {
        throw He = null, new ib.e(bb)
      })), He
    }
    async function Ke(bb, ab) {
      Fe(), me = !0, Ie = !0;
      let Ub = {
          place: bb.place,
          matchedAt: bb.matchedAt
        },
        Eb = bb.place.gameNameWithVariation;
      const Yb = (0, Lb.f)();
      let Bb = null;
      const eb = await sY({
        matchmake: async () => {
          let ab = Ub;
          if (Ub = null, null === ab) {
            const Ub = await bb.rematch();
            if (Ub.isError()) throw Bb = Ub.asError().forward(), new Error(Ub.asError().message);
            ab = {
              place: Ub.getValue(),
              matchedAt: performance.now()
            }
          }
          Eb = ab.place.gameNameWithVariation;
          return {
            target: await (0, Qb.e)(bb.userContext, ab.place, wB(), Yb),
            matchedAt: ab.matchedAt,
            freshMs: Qb.b
          }
        },
        pageReady: re,
        onFailure: (bb, ab) => {
          null === Bb && function(bb, ab) {
            (0, iU.reportPageJoinFailure)(bb, sT, ab)
          }(bb, {
            sinceJoinStartMs: ab,
            game: Eb
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => bb.userContext.invalidateTrafficCode(),
        signal: ab
      });
      switch (eb.kind) {
        case "joined":
          if (Yb) {
            const {
              game: bb
            } = eb;
            (0, Lb.o)((() => {
              bb.endJoinAd()
            }))
          }
          return de || (de = !0, (0, Rb.e)()), Ie ? (Ge(Tb.k.CONNECT_TO_GAME_SERVER), Ge(Tb.k.SHADER_PACK), function() {
            var bb, ab;
            return null !== (bb = null === (ab = yE) || void 0 === ab ? void 0 : ab.runsInJoinedGame()) && void 0 !== bb && bb
          }() && (0, jb.h)(bb.userContext, Eb).catch((bb => {
            console.error("Failed to report the shader pack session", bb)
          })), function() {
            const bb = function() {
              var bb, ab;
              return null !== (bb = null === (ab = yE) || void 0 === ab ? void 0 : ab.couldntRunInJoinedGame()) && void 0 !== bb ? bb : null
            }();
            null !== bb && (0, jb.e)(bb)
          }(), Mb.e.value(void 0)) : we("The server ended the game as it joined");
        case "failed":
          if (!eb.reloading) {
            if (null !== Bb) return Bb;
            if ((eb.error instanceof hb.n || eb.error instanceof hb.b) && eb.error.code === Ab.b.serverUpdating.code) {
              if (ab.aborted) return we("Left the game while it loaded");
              const {
                gameNameWithVariation: bb,
                lobbyName: Ub
              } = (0, Pb.e)();
              return ue(bb, Ub), we("The server is updating")
            }
            return eb.error instanceof tb.g ? Mb.e.errorWithCode(eb.error.messageKey, Tb.k.SHADER_PACK, {
              severity: "medium"
            }) : Mb.e.errorWithCode(function(bb) {
              if (bb instanceof hb.A || bb instanceof Db.i) return bb.message;
              if (oe(bb)) return (0, Fb.n)(bb.code, bb.serverText);
              return Fb.h
            }(eb.error), Tb.k.CONNECT_TO_GAME_SERVER, {
              error: le(eb.error) ? eb.error : void 0,
              severity: te(eb.error),
              gameServerUnreachable: (0, Gb.b)(eb.error),
              rematch: (0, yb.d)(eb.error),
              gameRefused: (0, Zb.d)(eb.error)
            })
          }
          return we("Reloading into the new build");
        case "stopped":
          return we("The game client stopped, and shows why");
        case "xU":
          return we("Left the game while it loaded")
      }
    }

    function oe(bb) {
      return bb instanceof hb.n || bb instanceof hb.b && "attach" !== bb.stage
    }

    function le(bb) {
      return !(bb instanceof hb.A) && !oe(bb) && void 0 === (0, Gb.b)(bb)
    }

    function te(bb) {
      return oe(bb) ? bb instanceof hb.b && (0, Fb.j)(bb.code).requiresRefresh ? "medium" : "low" : le(bb) || bb instanceof hb.A ? "medium" : "low"
    }

    function we(bb) {
      return Mb.e.errorWithCode(bb, Tb.k.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        xU: !0
      })
    }
    class se {
      leave(bb) {
        if ((0, zb.c)()) {
          var ab, Ub;
          if ((0, Eb.c)()) return;
          (0, Xb.c)(!0 === (null === (ab = (0, zb.k)()) || void 0 === ab || null === (Ub = ab.currentViewer) || void 0 === Ub ? void 0 : Ub.unsavedChanges), bb)
        } else this.leaveLive()
      }
      leaveLive() {
        var bb;
        me && (null === (bb = wB()) || void 0 === bb || bb.endGamePack());
        if (!Ie) return;
        Ie = !1, (0, kb.i)();
        try {
          var ab;
          null === (ab = (0, ib.r)()) || void 0 === ab || ab.clearWasmCameraScreen()
        } catch (Ab) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", Ab)
        }
        const {
          gameNameWithVariation: Ub
        } = (0, Pb.e)();
        try {
          aB()
        } finally {
          (0, Pb.r)({
            websocketUrl: null
          }), Bb.m.IR("leaveGame", {
            gameNameWithVariation: Ub
          }), (0, vb.P)()
        }
      }
      isReplay() {
        return (0, zb.c)()
      }
    }
  },
  40117: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      h: () => Ab,
      l: () => Yb,
      o: () => Eb
    });
    const Ab = 12e4,
      Mb = 3e4,
      Tb = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: bb => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", bb), () => {
          document.removeEventListener("visibilitychange", bb)
        })
      };

    function Eb(bb) {
      return `it sent no start within ${Math.round(bb)} ms`
    }
    class Yb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tb;
        this.timeoutMs = bb, this.onTimeout = ab, this.now = Ub, this.visibility = Ab, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = Ab.listen((() => {
          this.onVisibility()
        })), Ab.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const bb = this.step;
        return null === bb ? 0 : Math.min(this.now() - bb.at, bb.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const bb = this.timeoutMs - this.counted;
        if (bb <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const ab = Math.min(bb, 5e3);
        this.step = {
          at: this.now(),
          ms: ab
        }, this.arm(ab, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(bb, ab) {
        this.timer = setTimeout((() => {
          this.timer = null, ab()
        }), bb)
      }
    }
  },
  40012: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    const Ab = {
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
  38042: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(3376);
    const Mb = ["none", "idle", "now"];

    function Tb() {
      const bb = () => (0, Ab.x)();
      return {
        memoryBytes: () => (0, Ab.q)().buffer.byteLength,
        reserveUpFront: ab => bb().Sv(ab),
        reserveAhead: ab => bb().nv(ab),
        setCeiling: ab => {
          bb().bL(ab)
        },
        lowWater: () => Mb[bb().Jv()] ?? "none",
        stats: () => function(bb) {
          const ab = new Uint32Array((0, Ab.q)().buffer, bb, 17),
            Ub = bb => ab[bb] ?? 0,
            Mb = bb => ({
              upFront: Ub(bb),
              ahead: Ub(bb + 1),
              onDemandInFrame: Ub(bb + 2),
              onDemand: Ub(bb + 3)
            });
          return {
            memoryBytes: Ub(0),
            initialBytes: Ub(1),
            liveBytes: Ub(2),
            peakLiveBytes: Ub(3),
            headroomBytes: Ub(4),
            unusedBytes: Ub(5),
            ceilingBytes: Ub(6),
            reservesRefused: Ub(7),
            grows: Mb(8),
            grownBytes: Mb(12),
            allocationsRefused: Ub(16)
          }
        }(bb().aL()),
        takeBallast: () => bb().UL(),
        takePressure: () => bb().AL()
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);